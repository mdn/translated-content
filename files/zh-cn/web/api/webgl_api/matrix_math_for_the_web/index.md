---
title: Matrix math for the web
slug: Web/API/WebGL_API/Matrix_math_for_the_web
---

{{DefaultAPISidebar("WebGL")}}

矩阵可以用于表示空间中的对象的变换，并且是 Web 页面可视化的重要工具。本文探索如何创建并配合 [CSS 变换](/zh-CN/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)和 matrix3d 变换类型使用矩阵。

虽然本文为了便于解释而使用了 CSS，矩阵却是许多技术中的核心概念，包括 WebGL 和着色器。本文也是 [MDN content kit](https://github.com/TatumCreative/mdn-matrix-math) 的一部分。示例使用了一组全局对象 MDN 下的[工具函数](https://github.com/TatumCreative/mdn-webgl)。

## 什么是变换矩阵？

虽然存在许多类型的矩阵，但我们感兴趣的是三维变换矩阵。这种矩阵由一个 4x4 方阵，共 16 个值组成。在 JavaScript 中，可以很方便的用数组表示矩阵。比如典型的单位矩阵。单位阵乘上一个点或者矩阵，其结果保持不变。

```js
var identityMatrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
```

说到乘法，这种运算用于矩阵是什么样的呢？最简单的例子是矩阵乘一个点。你可能注意到，三维空间中的点和一个 4x4 矩阵并不匹配，为此我们加上了额外的第四维 W。一般来说，把 W 设为 1 就可以了。W 维度还有一些额外的用途超出本文的讨论范围。

注意矩阵和点的对齐方式：

```js-nolint
[1, 0, 0, 0,
 0, 1, 0, 0,
 0, 0, 1, 0,
 0, 0, 0, 1]

[4, 3, 2, 1] // 在 [x, y, z, w] 处求点积
```

### 定义相乘函数

我们在示例代码中定义了一个乘法函数——`multiplyMatrixAndPoint()`：

```js
function multiplyMatrixAndPoint(matrix, point) {
  // 给矩阵的每一部分一个简单的变量名，列数（c）与行数（r）
  var c0r0 = matrix[0],
    c1r0 = matrix[1],
    c2r0 = matrix[2],
    c3r0 = matrix[3];
  var c0r1 = matrix[4],
    c1r1 = matrix[5],
    c2r1 = matrix[6],
    c3r1 = matrix[7];
  var c0r2 = matrix[8],
    c1r2 = matrix[9],
    c2r2 = matrix[10],
    c3r2 = matrix[11];
  var c0r3 = matrix[12],
    c1r3 = matrix[13],
    c2r3 = matrix[14],
    c3r3 = matrix[15];

  // 定义点坐标
  var x = point[0];
  var y = point[1];
  var z = point[2];
  var w = point[3];

  // 点坐标和第一列对应相乘，再求和
  var resultX = x * c0r0 + y * c0r1 + z * c0r2 + w * c0r3;

  // 点坐标和第二列对应相乘，再求和
  var resultY = x * c1r0 + y * c1r1 + z * c1r2 + w * c1r3;

  // 点坐标和第三列对应相乘，再求和
  var resultZ = x * c2r0 + y * c2r1 + z * c2r2 + w * c2r3;

  // 点坐标和第四列对应相乘，再求和
  var resultW = x * c3r0 + y * c3r1 + z * c3r2 + w * c3r3;

  return [resultX, resultY, resultZ, resultW];
}
```

现在我们可以使用上面的函数将一个点乘上一个矩阵。乘以单位阵将会返回原值：

```js
// identityResult 等于 [4,3,2,1]
var identityResult = multiplyMatrixAndPoint(identityMatrix, [4, 3, 2, 1]);
```

返回同一个点并没有什么用处，但还有一些其他的矩阵可以作用于点，返回有用的结果。接下来我们将演示其中一些矩阵。

### 两个矩阵相乘

除了把矩阵和点相乘，你也可以把两个矩阵相乘。之前的函数可以帮助我们简化这个过程：

```js
function multiplyMatrices(matrixA, matrixB) {
  // 将第二个矩阵按列切片
  var column0 = [matrixB[0], matrixB[4], matrixB[8], matrixB[12]];
  var column1 = [matrixB[1], matrixB[5], matrixB[9], matrixB[13]];
  var column2 = [matrixB[2], matrixB[6], matrixB[10], matrixB[14]];
  var column3 = [matrixB[3], matrixB[7], matrixB[11], matrixB[15]];

  // 将每列分别和矩阵相乘
  var result0 = multiplyMatrixAndPoint(matrixA, column0);
  var result1 = multiplyMatrixAndPoint(matrixA, column1);
  var result2 = multiplyMatrixAndPoint(matrixA, column2);
  var result3 = multiplyMatrixAndPoint(matrixA, column3);

  // 把结果重新组合成矩阵
  return [
    result0[0],
    result1[0],
    result2[0],
    result3[0],
    result0[1],
    result1[1],
    result2[1],
    result3[1],
    result0[2],
    result1[2],
    result2[2],
    result3[2],
    result0[3],
    result1[3],
    result2[3],
    result3[3],
  ];
}
```

让我们看一看实际使用：

```js
var someMatrix = [4, 0, 0, 0, 0, 3, 0, 0, 0, 0, 5, 0, 4, 8, 4, 1];

var identityMatrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

// 返回 someMatrix 的数组表示
var someMatrixResult = multiplyMatrices(identityMatrix, someMatrix);
```

> [!WARNING]
> 这些函数是为了解释的清晰而编写，而不是为了速度或者内存管理。这些函数新建了大量数组，可能在实时运算时导致垃圾回收的巨大开销。在实际产品中最好使用优化过的函数。比如[glMatrix](http://glmatrix.net/)就是一个注重速度和性能的库。

## 平移矩阵

平移矩阵基于单位矩阵。它将一个对象沿 x，y，z 其中一个方向进行移动。最简单的想象平移的方式是设想拿起一个咖啡杯。咖啡杯必须保持直立和朝向以免咖啡洒出来。它可以离开桌子在空间中移动。

现在我们还喝不到这个杯子里的咖啡，因为在平移矩阵的单独作用下杯子并不能倾斜。在之后的部分，我们会讨论新的矩阵，来解决这个问题。

```js
var x = 50;
var y = 100;
var z = 0;

var translationMatrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, y, z, 1];
```

## 用矩阵操作 DOM

一个非常简单的开始使用矩阵的方法是使用 CSS3 里的 `matrix3d` 变换。首先，我们新建一个简单的 {{htmlelement("div")}} 并加上一些内容。这里样式没有展示出来，但我们将其设置成了页面居中且固定宽度与高度。我们同样为变换设定了动画以便清晰的观察发生的变化。

```html
<div id="move-me" class="transformable">
  <h2>Move me with a matrix</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
</div>
```

最后，我们会为每一个例子生成一个 4x4 矩阵，然后更新\<div>的样式，对其应用一个 matrix3d 变换。要记住即使矩阵有四行四列，也要将其写成单行 16 个值。

```js
// 从矩阵数组创建 matrix3d 样式属性
function matrixArrayToCssMatrix(array) {
  return "matrix3d(" + array.join(",") + ")";
}

// 获取 DOM 元素
var moveMe = document.getElementById("move-me");

// 返回结果如："matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 50, 100, 0, 1);"
var matrix3dRule = matrixArrayToCssMatrix(translationMatrix);

// 设置变换
moveMe.style.transform = matrix3dRule;
```

[在 JSFiddle 中查看](https://jsfiddle.net/g24mgw6y)

![An example of matrix translation](matrix-translation.jpg)

## 缩放矩阵

缩放矩阵使对象的高度、宽度和深度三个维度的其中之一变大或变小。在典型（笛卡尔）坐标系中，这将使得 x，y，z 坐标拉伸或收缩。

```js
var w = 1.5; // width  (x)
var h = 0.7; // height (y)
var d = 1; // depth  (z)

var scaleMatrix = [w, 0, 0, 0, 0, h, 0, 0, 0, 0, d, 0, 0, 0, 0, 1];
```

[在 JSFiddle 中查看](https://jsfiddle.net/fndd6e1b)

![An example of matrix scaling](matrix-scale.jpg)

## 旋转矩阵

旋转矩阵比平移和缩放矩阵要稍复杂一些。其中用到了三角函数来完成旋转。尽管这部分不会把步骤讲得过于详细，但是下例有简单的说明。

```js
// 不借助矩阵将点绕原点旋转
var point = [10, 2];

// 计算到原点的距离
var distance = Math.sqrt(point[0] * point[0] + point[1] * point[1]);

// 60 度
var rotationInRadians = Math.PI / 3;

var transformedPoint = [
  Math.cos(rotationInRadians) * distance,
  Math.sin(rotationInRadians) * distance,
];
```

我们可以将上述步骤表示为一个矩阵，并且单独应用到 x，y，和 z 坐标。下面是绕 Z 轴旋转的表示：

```js
var sin = Math.sin;
var cos = Math.cos;

// NOTE: There is no perspective in these transformations, so a rotation
//       at this point will only appear to only shrink the div

var a = Math.PI * 0.3; // 转角

// 绕 Z 轴旋转
var rotateZMatrix = [
  cos(a),
  -sin(a),
  0,
  0,
  sin(a),
  cos(a),
  0,
  0,
  0,
  0,
  1,
  0,
  0,
  0,
  0,
  1,
];
```

[在 JSFiddle 中查看](https://jsfiddle.net/9vr2dorz)

![](matrix-rotation.jpg)

这里是一组返回旋转矩阵的函数。要注意的是由于没有加入透视，所以旋转看起来没有那么 3D。这就好像摄像机在极近距离拍摄一个物体——透视的感觉消失了。

```js
function rotateAroundXAxis(a) {
  return [1, 0, 0, 0, 0, cos(a), -sin(a), 0, 0, sin(a), cos(a), 0, 0, 0, 0, 1];
}

function rotateAroundYAxis(a) {
  return [cos(a), 0, sin(a), 0, 0, 1, 0, 0, -sin(a), 0, cos(a), 0, 0, 0, 0, 1];
}

function rotateAroundZAxis(a) {
  return [cos(a), -sin(a), 0, 0, sin(a), cos(a), 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
}
```

[在 JSFiddle 中查看](https://jsfiddle.net/tk072doc)

## 矩阵组合

矩阵的真正厉害之处在于矩阵的组合。当一组特定类型的矩阵连乘起来，它们保留了变换的经过并且是可逆的。这意味着如果平移、旋转和缩放矩阵组合在一起，当我们使用逆变换并颠倒应用的顺序，可以得到原来的点。

矩阵相乘的结果与顺序有关。两个数相乘时，a \* b = c，和 b \* a = c 都是正确的。例如，3 \* 4 = 12，和 4 \* 3 = 12。在数学上这些数被称为**可交换**。矩阵不能保证交换顺序后的运算结果，所以矩阵是**不可交换**的。

另一个需要记住的点是在 WebGL 和 CSS3 中的矩阵相乘需要和变换发生的顺序相反。例如，缩放对象到 80%，向下移动 200 像素，然后绕原点旋转 90 度在伪代码中应该像下面这样。

```plain
transformation = rotate * translate * scale
```

### 组合多种变换

我们将使用的函数是[工具函数](https://github.com/TatumCreative/mdn-webgl)的一部分。其接受矩阵的数组并把它们乘起来。在 WebGL 着色器代码里，这内建在语言里，并且我们可以使用 \* 运算符。除此之外，本例使用了一个缩放函数，一个平移函数，它们返回之前定义的矩阵。

```js
var transformMatrix = MDN.multiplyArrayOfMatrices([
  rotateAroundZAxis(Math.PI * 0.5), // 第 3 步：旋转 90 度
  translate(0, 200, 0), // 第 2 步：下移 100 像素
  scale(0.8, 0.8, 0.8), // 第 1 步：缩小
]);
```

[在 JSFiddle 中查看](https://jsfiddle.net/qxxg3yvc)

![An example of matrix composition](matrix-composition.jpg)

最后是展示矩阵用途的有趣的一步，看看怎样颠倒这些步骤并得到最开始的单位矩阵。

```js
var transformMatrix = MDN.multiplyArrayOfMatrices([
  scale(1.25, 1.25, 1.25), // 第 6 步：放大
  translate(0, -200, 0), // 第 5 步：上移
  rotateAroundZAxis(-Math.PI * 0.5), // 第 4 步：倒转
  rotateAroundZAxis(Math.PI * 0.5), // 第 3 步：旋转 90 度
  translate(0, 200, 0), // 第 2 步：下移 100 像素
  scale(0.8, 0.8, 0.8), // 第 1 步：缩小
]);
```

## 为什么矩阵这么重要？

矩阵之所以重要，是因为它可以用少量的数字描述大量的空间中的变换，并且能轻易地在程序间共享。矩阵可以不同的坐标空间，甚至一些矩阵乘法可以将一组数据从一个坐标空间映射到另一个坐标空间。矩阵能够高效率地保存生成它们的每一步变换。

对于在 WebGL 中使用，显卡尤其擅长大量的点乘矩阵运算。各种各样的运算，如点定位、光线运算、动态角色，都依赖这个基础工具。
