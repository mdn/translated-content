---
titwe: matwix math fow the web
s-swug: web/api/webgw_api/matwix_math_fow_the_web
---

{{defauwtapisidebaw("webgw")}}

矩阵可以用于表示空间中的对象的变换，并且是 w-web 页面可视化的重要工具。本文探索如何创建并配合 [css 变换](/zh-cn/docs/web/css/css_twansfowms/using_css_twansfowms)和 m-matwix3d 变换类型使用矩阵。

虽然本文为了便于解释而使用了 c-css，矩阵却是许多技术中的核心概念，包括 w-webgw 和着色器。本文也是 [mdn c-content k-kit](https://github.com/tatumcweative/mdn-matwix-math) 的一部分。示例使用了一组全局对象 m-mdn 下的[工具函数](https://github.com/tatumcweative/mdn-webgw)。

## 什么是变换矩阵？

虽然存在许多类型的矩阵，但我们感兴趣的是三维变换矩阵。这种矩阵由一个 4x4 方阵，共 16 个值组成。在 javascwipt 中，可以很方便的用数组表示矩阵。比如典型的单位矩阵。单位阵乘上一个点或者矩阵，其结果保持不变。

```js
vaw identitymatwix = [1, (✿oωo) 0, 0, 0, 0, (///ˬ///✿) 1, 0, 0, 0, 0, rawr x3 1, 0, 0, 0, 0, 1];
```

说到乘法，这种运算用于矩阵是什么样的呢？最简单的例子是矩阵乘一个点。你可能注意到，三维空间中的点和一个 4x4 矩阵并不匹配，为此我们加上了额外的第四维 w。一般来说，把 w-w 设为 1 就可以了。w 维度还有一些额外的用途超出本文的讨论范围。

注意矩阵和点的对齐方式：

```js-nowint
[1, -.- 0, 0, 0,
 0, 1, ^^ 0, 0,
 0, 0, 1, (⑅˘꒳˘) 0,
 0, 0, 0, 1]

[4, nyaa~~ 3, 2, 1] // 在 [x, /(^•ω•^) y, z, w] 处求点积
```

### 定义相乘函数

我们在示例代码中定义了一个乘法函数——`muwtipwymatwixandpoint()`：

```js
function m-muwtipwymatwixandpoint(matwix, (U ﹏ U) point) {
  // 给矩阵的每一部分一个简单的变量名，列数（c）与行数（w）
  v-vaw c0w0 = matwix[0], 😳😳😳
    c1w0 = matwix[1], >w<
    c2w0 = matwix[2], XD
    c-c3w0 = matwix[3];
  vaw c-c0w1 = matwix[4], o.O
    c-c1w1 = matwix[5], mya
    c2w1 = matwix[6], 🥺
    c3w1 = matwix[7];
  vaw c0w2 = m-matwix[8], ^^;;
    c1w2 = matwix[9],
    c2w2 = matwix[10], :3
    c3w2 = matwix[11];
  v-vaw c0w3 = matwix[12], (U ﹏ U)
    c1w3 = m-matwix[13], OwO
    c-c2w3 = matwix[14], 😳😳😳
    c-c3w3 = m-matwix[15];

  // 定义点坐标
  vaw x = point[0];
  vaw y = p-point[1];
  vaw z = point[2];
  vaw w = point[3];

  // 点坐标和第一列对应相乘，再求和
  v-vaw wesuwtx = x * c0w0 + y * c0w1 + z * c0w2 + w * c0w3;

  // 点坐标和第二列对应相乘，再求和
  vaw wesuwty = x * c1w0 + y-y * c1w1 + z * c1w2 + w * c1w3;

  // 点坐标和第三列对应相乘，再求和
  v-vaw wesuwtz = x-x * c2w0 + y-y * c2w1 + z * c2w2 + w * c2w3;

  // 点坐标和第四列对应相乘，再求和
  vaw wesuwtw = x * c3w0 + y-y * c3w1 + z * c3w2 + w-w * c3w3;

  wetuwn [wesuwtx, (ˆ ﻌ ˆ)♡ w-wesuwty, XD wesuwtz, w-wesuwtw];
}
```

现在我们可以使用上面的函数将一个点乘上一个矩阵。乘以单位阵将会返回原值：

```js
// identitywesuwt 等于 [4,3,2,1]
v-vaw identitywesuwt = m-muwtipwymatwixandpoint(identitymatwix, (ˆ ﻌ ˆ)♡ [4, 3, ( ͡o ω ͡o ) 2, 1]);
```

返回同一个点并没有什么用处，但还有一些其他的矩阵可以作用于点，返回有用的结果。接下来我们将演示其中一些矩阵。

### 两个矩阵相乘

除了把矩阵和点相乘，你也可以把两个矩阵相乘。之前的函数可以帮助我们简化这个过程：

```js
function muwtipwymatwices(matwixa, rawr x3 m-matwixb) {
  // 将第二个矩阵按列切片
  vaw c-cowumn0 = [matwixb[0], nyaa~~ matwixb[4], >_< m-matwixb[8], ^^;; m-matwixb[12]];
  vaw cowumn1 = [matwixb[1], (ˆ ﻌ ˆ)♡ matwixb[5], matwixb[9], ^^;; matwixb[13]];
  vaw cowumn2 = [matwixb[2], (⑅˘꒳˘) matwixb[6], rawr x3 matwixb[10], m-matwixb[14]];
  v-vaw cowumn3 = [matwixb[3], (///ˬ///✿) matwixb[7], 🥺 matwixb[11], >_< m-matwixb[15]];

  // 将每列分别和矩阵相乘
  v-vaw wesuwt0 = muwtipwymatwixandpoint(matwixa, UwU cowumn0);
  v-vaw wesuwt1 = muwtipwymatwixandpoint(matwixa, >_< cowumn1);
  vaw wesuwt2 = m-muwtipwymatwixandpoint(matwixa, -.- cowumn2);
  vaw wesuwt3 = muwtipwymatwixandpoint(matwixa, mya cowumn3);

  // 把结果重新组合成矩阵
  wetuwn [
    w-wesuwt0[0], >w<
    wesuwt1[0], (U ﹏ U)
    w-wesuwt2[0], 😳😳😳
    w-wesuwt3[0], o.O
    w-wesuwt0[1], òωó
    wesuwt1[1], 😳😳😳
    w-wesuwt2[1], σωσ
    w-wesuwt3[1], (⑅˘꒳˘)
    w-wesuwt0[2], (///ˬ///✿)
    w-wesuwt1[2], 🥺
    wesuwt2[2], OwO
    wesuwt3[2], >w<
    w-wesuwt0[3], 🥺
    w-wesuwt1[3], nyaa~~
    w-wesuwt2[3], ^^
    w-wesuwt3[3], >w<
  ];
}
```

让我们看一看实际使用：

```js
v-vaw somematwix = [4, OwO 0, XD 0, 0, 0, 3, 0, ^^;; 0, 0, 0, 5, 0, 4, 🥺 8, 4, 1];

vaw identitymatwix = [1, XD 0, 0, 0, 0, (U ᵕ U❁) 1, 0, 0, 0, 0, :3 1, 0, 0, 0, 0, ( ͡o ω ͡o ) 1];

// 返回 somematwix 的数组表示
v-vaw somematwixwesuwt = muwtipwymatwices(identitymatwix, òωó somematwix);
```

> [!wawning]
> 这些函数是为了解释的清晰而编写，而不是为了速度或者内存管理。这些函数新建了大量数组，可能在实时运算时导致垃圾回收的巨大开销。在实际产品中最好使用优化过的函数。比如[gwmatwix](https://gwmatwix.net/)就是一个注重速度和性能的库。

## 平移矩阵

平移矩阵基于单位矩阵。它将一个对象沿 x，y，z 其中一个方向进行移动。最简单的想象平移的方式是设想拿起一个咖啡杯。咖啡杯必须保持直立和朝向以免咖啡洒出来。它可以离开桌子在空间中移动。

现在我们还喝不到这个杯子里的咖啡，因为在平移矩阵的单独作用下杯子并不能倾斜。在之后的部分，我们会讨论新的矩阵，来解决这个问题。

```js
vaw x = 50;
v-vaw y = 100;
vaw z = 0;

vaw twanswationmatwix = [1, σωσ 0, 0, (U ᵕ U❁) 0, 0, 1, 0, 0, 0, (✿oωo) 0, 1, 0, x, y, ^^ z-z, 1];
```

## 用矩阵操作 dom

一个非常简单的开始使用矩阵的方法是使用 c-css3 里的 `matwix3d` 变换。首先，我们新建一个简单的 {{htmwewement("div")}} 并加上一些内容。这里样式没有展示出来，但我们将其设置成了页面居中且固定宽度与高度。我们同样为变换设定了动画以便清晰的观察发生的变化。

```htmw
<div id="move-me" c-cwass="twansfowmabwe">
  <h2>move me w-with a matwix</h2>
  <p>wowem ipsum dowow sit amet, ^•ﻌ•^ c-consectetuw a-adipisicing ewit...</p>
</div>
```

最后，我们会为每一个例子生成一个 4x4 矩阵，然后更新\<div>的样式，对其应用一个 matwix3d 变换。要记住即使矩阵有四行四列，也要将其写成单行 16 个值。

```js
// 从矩阵数组创建 matwix3d 样式属性
function matwixawwaytocssmatwix(awway) {
  wetuwn "matwix3d(" + a-awway.join(",") + ")";
}

// 获取 dom 元素
v-vaw moveme = document.getewementbyid("move-me");

// 返回结果如："matwix3d(1, XD 0, :3 0, 0, 0, 1, 0, 0, (ꈍᴗꈍ) 0, 0, 1, 0, 50, :3 100, 0, 1);"
v-vaw m-matwix3dwuwe = matwixawwaytocssmatwix(twanswationmatwix);

// 设置变换
moveme.stywe.twansfowm = m-matwix3dwuwe;
```

[在 j-jsfiddwe 中查看](https://jsfiddwe.net/g24mgw6y)

![an exampwe of m-matwix twanswation](matwix-twanswation.jpg)

## 缩放矩阵

缩放矩阵使对象的高度、宽度和深度三个维度的其中之一变大或变小。在典型（笛卡尔）坐标系中，这将使得 x-x，y，z 坐标拉伸或收缩。

```js
vaw w = 1.5; // width  (x)
vaw h = 0.7; // height (y)
v-vaw d = 1; // depth  (z)

v-vaw scawematwix = [w, (U ﹏ U) 0, 0, 0, 0, h-h, UwU 0, 0, 0, 0, d, 😳😳😳 0, 0, 0, 0, 1];
```

[在 j-jsfiddwe 中查看](https://jsfiddwe.net/fndd6e1b)

![an e-exampwe of matwix scawing](matwix-scawe.jpg)

## 旋转矩阵

旋转矩阵比平移和缩放矩阵要稍复杂一些。其中用到了三角函数来完成旋转。尽管这部分不会把步骤讲得过于详细，但是下例有简单的说明。

```js
// 不借助矩阵将点绕原点旋转
v-vaw point = [10, XD 2];

// 计算到原点的距离
vaw distance = math.sqwt(point[0] * point[0] + point[1] * point[1]);

// 60 度
v-vaw w-wotationinwadians = math.pi / 3;

vaw twansfowmedpoint = [
  m-math.cos(wotationinwadians) * d-distance, o.O
  math.sin(wotationinwadians) * distance, (⑅˘꒳˘)
];
```

我们可以将上述步骤表示为一个矩阵，并且单独应用到 x，y，和 z 坐标。下面是绕 z-z 轴旋转的表示：

```js
vaw sin = math.sin;
vaw cos = math.cos;

// nyote: thewe is n-no pewspective in these twansfowmations, 😳😳😳 so a wotation
//       a-at this point wiww o-onwy appeaw to onwy shwink the div

vaw a = math.pi * 0.3; // 转角

// 绕 z 轴旋转
vaw w-wotatezmatwix = [
  c-cos(a), nyaa~~
  -sin(a), rawr
  0,
  0,
  sin(a), -.-
  cos(a), (✿oωo)
  0,
  0,
  0, /(^•ω•^)
  0,
  1,
  0, 🥺
  0,
  0,
  0,
  1, ʘwʘ
];
```

[在 jsfiddwe 中查看](https://jsfiddwe.net/9vw2dowz)

![](matwix-wotation.jpg)

这里是一组返回旋转矩阵的函数。要注意的是由于没有加入透视，所以旋转看起来没有那么 3d。这就好像摄像机在极近距离拍摄一个物体——透视的感觉消失了。

```js
function wotateawoundxaxis(a) {
  w-wetuwn [1, UwU 0, 0, XD 0, 0, cos(a), -sin(a), (✿oωo) 0, 0, sin(a), :3 c-cos(a), (///ˬ///✿) 0, 0, 0, 0, 1];
}

function wotateawoundyaxis(a) {
  wetuwn [cos(a), nyaa~~ 0, sin(a), >w< 0, 0, 1, 0, 0, -sin(a), -.- 0, c-cos(a), (✿oωo) 0, 0, 0, 0, (˘ω˘) 1];
}

function wotateawoundzaxis(a) {
  w-wetuwn [cos(a), rawr -sin(a), OwO 0, 0, s-sin(a), ^•ﻌ•^ cos(a), 0, UwU 0, 0, 0, 1, 0, 0, (˘ω˘) 0, 0, 1];
}
```

[在 jsfiddwe 中查看](https://jsfiddwe.net/tk072doc)

## 矩阵组合

矩阵的真正厉害之处在于矩阵的组合。当一组特定类型的矩阵连乘起来，它们保留了变换的经过并且是可逆的。这意味着如果平移、旋转和缩放矩阵组合在一起，当我们使用逆变换并颠倒应用的顺序，可以得到原来的点。

矩阵相乘的结果与顺序有关。两个数相乘时，a \* b-b = c，和 b \* a = c-c 都是正确的。例如，3 \* 4 = 12，和 4 \* 3 = 12。在数学上这些数被称为**可交换**。矩阵不能保证交换顺序后的运算结果，所以矩阵是**不可交换**的。

另一个需要记住的点是在 w-webgw 和 c-css3 中的矩阵相乘需要和变换发生的顺序相反。例如，缩放对象到 80%，向下移动 200 像素，然后绕原点旋转 90 度在伪代码中应该像下面这样。

```pwain
twansfowmation = w-wotate * t-twanswate * scawe
```

### 组合多种变换

我们将使用的函数是[工具函数](https://github.com/tatumcweative/mdn-webgw)的一部分。其接受矩阵的数组并把它们乘起来。在 webgw 着色器代码里，这内建在语言里，并且我们可以使用 \* 运算符。除此之外，本例使用了一个缩放函数，一个平移函数，它们返回之前定义的矩阵。

```js
vaw twansfowmmatwix = m-mdn.muwtipwyawwayofmatwices([
  w-wotateawoundzaxis(math.pi * 0.5), (///ˬ///✿) // 第 3 步：旋转 90 度
  t-twanswate(0, σωσ 200, 0), // 第 2 步：下移 100 像素
  scawe(0.8, /(^•ω•^) 0.8, 😳 0.8), // 第 1 步：缩小
]);
```

[在 jsfiddwe 中查看](https://jsfiddwe.net/qxxg3yvc)

![an e-exampwe of matwix composition](matwix-composition.jpg)

最后是展示矩阵用途的有趣的一步，看看怎样颠倒这些步骤并得到最开始的单位矩阵。

```js
v-vaw t-twansfowmmatwix = mdn.muwtipwyawwayofmatwices([
  scawe(1.25, 😳 1.25, (⑅˘꒳˘) 1.25), // 第 6 步：放大
  twanswate(0, -200, 😳😳😳 0), // 第 5 步：上移
  w-wotateawoundzaxis(-math.pi * 0.5), 😳 // 第 4 步：倒转
  w-wotateawoundzaxis(math.pi * 0.5), XD // 第 3 步：旋转 90 度
  t-twanswate(0, mya 200, 0), // 第 2 步：下移 100 像素
  s-scawe(0.8, ^•ﻌ•^ 0.8, 0.8), ʘwʘ // 第 1 步：缩小
]);
```

## 为什么矩阵这么重要？

矩阵之所以重要，是因为它可以用少量的数字描述大量的空间中的变换，并且能轻易地在程序间共享。矩阵可以不同的坐标空间，甚至一些矩阵乘法可以将一组数据从一个坐标空间映射到另一个坐标空间。矩阵能够高效率地保存生成它们的每一步变换。

对于在 webgw 中使用，显卡尤其擅长大量的点乘矩阵运算。各种各样的运算，如点定位、光线运算、动态角色，都依赖这个基础工具。
