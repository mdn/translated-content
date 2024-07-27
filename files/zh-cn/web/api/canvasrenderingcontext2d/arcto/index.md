---
title: CanvasRenderingContext2D：arcTo() 方法
slug: Web/API/CanvasRenderingContext2D/arcTo
l10n:
  sourceCommit: af1e384356e21dbcc573d1c1cc015ec79c644de1
---

{{APIRef}}

Canvas 2D API 的 **`CanvasRenderingContext2D.arcTo()`** 方法用于通过给定的控制点和半径向当前子路径添加一个圆弧。如果需要，例如起始点和控制点在一条直线上，该圆弧会自动与路径的最后一个点用直线连接。

这个方法通常用于创建圆角。

> [!NOTE]
> 当使用相对较大的半径时，可能会得到意外的结果：连接圆弧的直线将以必要的方向延申以符合指定的半径。

## 语法

```js-nolint
arcTo(x1, y1, x2, y2, radius)
```

### 参数

- `x1`
  - : 第一个控制点的 x 轴坐标。
- `y1`
  - : 第一个控制点的 y 轴坐标。
- `x2`
  - : 第二个控制点的 x 轴坐标。
- `y2`
  - : 第二个控制点的 y 轴坐标。
- `radius`
  - : 圆弧的半径。必须为非负值。

#### 使用说明

假设 <em>P<sub>0</sub></em> 是调用 `arcTo()` 方法时所处的路径上的点，<em>P<sub>1</sub></em> = (`x1`, `y1`) 和 <em>P<sub>2</sub></em> = (`x2`, `y2`) 分别是第一个和第二个控制点，_r_ 是调用中指定的 `radius`：

- 如果 _r_ 是负数，则会引发 `IndexSizeError` [异常](#异常)。
- 如果 _r_ 是 0，`arcTo()` 方法会表现得好像 <em>P<sub>0</sub></em>、<em>P<sub>1</sub></em> 和 <em>P<sub>2</sub></em> 共线。
- 如果所有点都共线，会从 <em>P<sub>0</sub></em> 到 <em>P<sub>1</sub></em> 绘制一条直线，除非点 <em>P<sub>0</sub></em> 和 <em>P<sub>1</sub></em> 是重合的（坐标相同），此时不会绘制任何内容。

可以查看下面的[构建一条 arcTo() 路径](#构建一条_arcto_路径)示例所创建这些条件。

### 返回值

无（{{jsxref("undefined")}}）。

### 异常

- `IndexSizeError` {{domxref("DOMException")}}
  - : 如果 `radius` 是负值，抛出此异常。

## 示例

### `arcTo()` 方法的工作原理

理解 `arcTo()` 方法的一种方式是想象两条直线段：一条从起始点到第一个控制点，另一条从第一个控制点到第二个控制点。如果没有 `arcTo()` 方法，这两条线段会形成一个尖角：`arcTo()` 方法在这个角落创建一个圆弧，并使其平滑连接。换句话说，这个圆弧与两条线段都相切。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 切线段
ctx.beginPath();
ctx.strokeStyle = "gray";
ctx.moveTo(200, 20);
ctx.lineTo(200, 130);
ctx.lineTo(50, 20);
ctx.stroke();

// 圆弧
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.moveTo(200, 20);
ctx.arcTo(200, 130, 50, 20, 40);
ctx.stroke();

// 起始点
ctx.beginPath();
ctx.fillStyle = "blue";
ctx.arc(200, 20, 5, 0, 2 * Math.PI);
ctx.fill();

// 控制点
ctx.beginPath();
ctx.fillStyle = "red";
ctx.arc(200, 130, 5, 0, 2 * Math.PI); // 控制点一
ctx.arc(50, 20, 5, 0, 2 * Math.PI); // 控制点二
ctx.fill();
```

#### 结果

在这个示例中，`arcTo()` 创建的路径是**粗黑色**的。切线是灰色的，控制点是红色的，起始点是蓝色的。

{{ EmbedLiveSample('arcTo() 方法的工作原理', 315, 165) }}

### 创建圆角

此示例使用 `arcTo()` 方法创建了一个圆角。这是该方法最常见的用法之一。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

圆弧从由 `moveTo()` 指定的点开始：(230, 20)。其形状拟合了控制点 (90, 130) 和 (20, 20)，半径为 50。`lineTo()` 方法将圆弧与点 (20, 20) 用直线连接起来。请注意，圆弧的第二个控制点和 `lineTo()` 指定的点是相同的，这样可以得到一个完全平滑的角。

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const p0 = { x: 230, y: 20 };
const p1 = { x: 90, y: 130 };
const p2 = { x: 20, y: 20 };

const labelPoint = (p) => {
  const offset = 10;
  ctx.fillText(`(${p.x},${p.y})`, p.x + offset, p.y + offset);
};

ctx.beginPath();
ctx.lineWidth = 4;
ctx.font = "1em sans-serif";
ctx.moveTo(p0.x, p0.y);
ctx.arcTo(p1.x, p1.y, p2.x, p2.y, 50);
ctx.lineTo(p2.x, p2.y);

labelPoint(p0);
labelPoint(p1);
labelPoint(p2);

ctx.stroke();
```

#### 结果

{{ EmbedLiveSample('创建圆角', 315, 165) }}

### 使用较大半径的结果

如果使用相对较大的半径，圆弧可能出现在意料之外的位置。在这个示例中，圆弧的连接线会在指定的 `moveTo()` 坐标上方而不是下方。这是因为半径太大，圆弧无法完全拟合在起始点下方。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(180, 90);
ctx.arcTo(180, 130, 110, 130, 130);
ctx.lineTo(110, 130);
ctx.stroke();
```

#### 结果

{{ EmbedLiveSample('使用较大半径的结果', 315, 165) }}

### 构建一条 arcTo() 路径

此演示展示了射线（semi-infinite line）和以 _C_ 为圆心并在 <em>T<sub>1</sub></em> 和 <em>T<sub>2</sub></em> 处与射线相切的圆弧被用于确定 `arcTo()` 方法的渲染路径。

需要注意的是，当所有点都在一条直线上时，`arcTo()` 方法会在 <em>P<sub>0</sub></em> 和 <em>P<sub>1</sub></em> 之间创建一条直线。此外，如果 <em>P<sub>0</sub></em> 和 <em>P<sub>1</sub></em> 具有相同的坐标，`arcTo()` 方法不会绘制任何内容。

除了可以通过滑块设置弧度半径外，初始点 <em>P<sub>0</sub></em> 和控制点 <em>P<sub>1</sub></em>、<em>P<sub>2</sub></em> 可以通过按住鼠标左键拖动来移动。数值也可以直接编辑，使用箭头键可以改变被聚焦的具有下划线标记的元素。

```html hidden
<div>
  <label for="arc-radius">arc radius <em>r</em></label>
  <input name="arc-radius" type="range" id="radius-slider" min="0" />
  <label
    for="arc-radius"
    id="value-r"
    class="input"
    contenteditable="true"></label>
</div>
<div>
  <span id="value-P0" class="input" tabindex="0">
    <em>P<sub>0</sub></em>
  </span>
  = (<span id="value-P0x" class="input" contenteditable="true"></span>,
  <span id="value-P0y" class="input" contenteditable="true"></span>)
  &nbsp;&nbsp;
  <span id="value-P1" class="input" tabindex="0">
    <em>P<sub>1</sub></em>
  </span>
  = (<span id="value-P1x" class="input" contenteditable="true"></span>,
  <span id="value-P1y" class="input" contenteditable="true"></span>)
  &nbsp;&nbsp;
  <span id="value-P2" class="input" tabindex="0">
    <em>P<sub>2</sub></em>
  </span>
  = (<span id="value-P2x" class="input" contenteditable="true"></span>,
  <span id="value-P2y" class="input" contenteditable="true"></span>)
</div>
<canvas id="canvas"></canvas>
<div>
  <em>T<sub>1</sub></em> = <span id="value-T1"></span>
</div>
<div>
  <em>T<sub>2</sub></em> = <span id="value-T2"></span>
</div>
<div><em>C</em> = <span id="value-C"></span></div>

<script>
  /* arcTo() 演示
   * 注意：至少在 Chrome 中存在浏览器问题，涉及到光标更新。
   * 参见 https://stackoverflow.com/questions/37462132/update-mouse-cursor-without-moving-mouse-with-changed-css-cursor-property
   *
   * 当在进入画布之前选择文本时，也会出现光标问题。在代码中增加的额外测试似乎可以最小化这些问题。
   */

  "use strict";

  /* 演示参数 */
  const param = {
    canvasWidth: 300, // 画布大小
    canvasHeight: 300,
    hitDistance: 5, // 被视为命中的鼠标距离
    errorTolCenter: 1e-4, // 圆心差异限制
    radiusMax: 250, // 允许的最大半径
    P0x: 50, // 初始点
    P0y: 50,
    P1x: 275, // 第一个控制点
    P1y: 150,
    P2x: 50, // 第二个控制点
    P2y: 275,
    radius: 75, // 弧线半径
  };

  /* 2D 向量的数学运算 */
  class Math2D {
    /* 创建新点 */
    static point(x = 0, y = 0) {
      return { x: x, y: y };
    }

    /* 创建新向量 */
    static vector(x = 0, y = 0) {
      return this.point(x, y);
    }

    /* 减法：difference = 被减数 - 减数 */
    static subtract(difference, minuend, subtrahend) {
      difference.x = minuend.x - subtrahend.x;
      difference.y = minuend.y - subtrahend.y;
    }

    /* 计算 L2 范数 */
    static L2(a) {
      return Math.hypot(a.x, a.y);
    }

    /* 点乘 */
    static dot(a, b) {
      return a.x * b.x + a.y * b.y;
    }

    /* 在由参数表示的线上找到点
     * L = P0 + t * direction */
    static linePointAt(P0, t, dir) {
      return this.point(P0.x + t * dir.x, P0.y + t * dir.y);
    }
  } /* Math2D 类结束 */

  /* 文本输入值允许备用输入 */
  class TextInput {
    #valueMax;
    #callbackKeydown;
    #callbackFocus;

    /* 观察者模式以监视焦点文本输入 */
    static mo = new MutationObserver(TextInput.processInput);
    static moOptions = {
      subtree: true, // 内部节点的字符数据
      characterData: true,
    };

    /* 为突变观察者添加索引信息的符号 */
    static symbolTextInput = Symbol("textInput");

    /* 处理焦点文本输入的突变处理程序 */
    static processInput(mrs, mo) {
      /* 访问与突变相关联的文本输入对象 */
      const textInput = mo[TextInput.symbolTextInput];

      /* 查找字符数据突变并根据输入更新 */
      for (let i = 0, n = mrs.length; i < n; i++) {
        const mr = mrs[i];
        if (mr.type === "characterData") {
          const target = mr.target;
          if (target.nodeType !== 3) {
            console.error(
              "突变记录类型为 CharacterData，但节点类型为 " + target.nodeType,
            );
            return;
          }
          /* 处理通过解析输入的非数字 */
          let value = parseInt(target.textContent);
          value = isNaN(value) ? 0 : value;
          textInput.updateFull(value);
          break;
        }
      }
    }

    constructor(
      idText, // 文档中元素的 id
      idControl, // 元素中控件的 id（如果有的话，例如半径）
      valueMax, // 允许的值范围从 0 到 maxValue，包括边界值
      getStateValue, // 从状态对象获取值的函数
      setStateValue,
    ) {
      // 设置状态对象上的值的函数
      this.#valueMax = valueMax;
      this.elementText = document.getElementById(idText);
      this.elementControl =
        idControl === null ? null : document.getElementById(idControl);
      this.getStateValue = getStateValue;
      this.setStateValue = setStateValue;
      this.#callbackKeydown = (evt) => {
        let valueInput;
        switch (evt.code) {
          case "Enter": // 不允许，因为会添加 <br> 节点
            evt.preventDefault();
            return;
          case "ArrowUp":
            valueInput = Number(this.elementText.textContent) + 1;
            evt.preventDefault();
            break;
          case "ArrowDown":
            valueInput = Number(this.elementText.textContent) - 1;
            evt.preventDefault();
            break;
          default: // 忽略其他情况
            return;
        }
        TextInput.mo.disconnect(); // 在更改值时暂停
        this.updateFull(valueInput); // 进行更新
        const options = { subtree: true, characterData: true };
        TextInput.mo.observe(this.elementText, TextInput.moOptions);
        // 再次观察
      };
      this.#callbackFocus = (evt) => {
        /* 将突变观察器与关联的文本输入对象关联起来 */
        TextInput.mo[TextInput.symbolTextInput] = this;

        /* 监测输入变化。
         * subtree: true 需要因为文本在内部节点中
         * childList: true 需要因为 <enter> 变成了 <br> 节点 */
        TextInput.mo.observe(this.elementText, TextInput.moOptions);

        /* 检查上下箭头以增加/减少值 */
        this.elementText.addEventListener("keydown", this.#callbackKeydown);

        /* 失去焦点时，停止监视该输入 */
        this.elementText.addEventListener("blur", () => {
          this.elementText.removeEventListener(
            "keydown",
            this.#callbackKeydown,
          );
          TextInput.mo.disconnect();
        });
      };

      this.elementText.addEventListener("focus", this.#callbackFocus);
    } // TextInput 类结束

    /* 基于从文本输入源接收的输入更新的函数 */
    updateFull(value) {
      /* 将值限制在范围内 */
      if (value > this.#valueMax) {
        value = this.#valueMax;
      } else if (value < 0) {
        value = 0;
      }

      /* 使值保持一致并更新 */
      const valueTextPrev = this.elementText.textContent;
      const valueString = String(value);
      if (valueTextPrev !== valueString) {
        this.elementText.textContent = valueString;
      }

      if (this.elementControl) {
        const valueControlPrev = this.elementControl.value;
        if (valueControlPrev !== valueString) {
          this.elementControl.value = valueString;
        }
      }

      const valueStatePrev = this.getStateValue();
      if (valueStatePrev !== value) {
        // 输入导致状态变化
        this.setStateValue(value);
        updateResults();
      }
    }
  } /* TextInput 类结束 */

  /* 根据配置参数初始化状态 */
  function initDemoState({
    canvasWidth = 300,
    canvasHeight = 300,
    hitDistance = 5,
    errorTolCenter = 1e-4,
    radiusMax = 250,
    P0x = 0,
    P0y = 0,
    P1x = 0,
    P1y = 0,
    P2x = 0,
    P2y = 0,
    radius = 0,
  } = {}) {
    const s = {};
    s.controlPoints = [
      Math2D.point(P0x, P0y),
      Math2D.point(P1x, P1y),
      Math2D.point(P2x, P2y),
    ];
    s.hitDistance = hitDistance;
    s.errorTolCenter = errorTolCenter;
    s.canvasSize = Math2D.point(canvasWidth, canvasHeight);

    if (radius > radiusMax) {
      /* 将参数限制在允许的值范围内 */
      radius = radiusMax;
    }
    s.radius = radius;
    s.radiusMax = radiusMax;

    [s.haveCircle, s.P0Inf, s.P2Inf, s.T1, s.T2, s.C] = findConstruction(
      s.controlPoints,
      s.radius,
      s.canvasSize,
      s.errorTolCenter,
    );
    s.pointActiveIndex = -1; // 当前没有活动点
    s.pointActiveMoving = false; // 活动点悬停（false）或移动（true）
    s.mouseDelta = Math2D.point(); // 鼠标指针与点中心的偏移量
    return s;
  }

  function updateResults() {
    updateConstruction();
    drawCanvas();
    ConstructionPoints.print(state.T1, state.T2, state.C);
  }

  function updateConstruction() {
    [state.haveCircle, state.P0Inf, state.P2Inf, state.T1, state.T2, state.C] =
      findConstruction(
        state.controlPoints,
        state.radius,
        state.canvasSize,
        state.errorTolCenter,
      );
  }

  /* 查找 `arcTo()` 用于绘制路径的几何形状 */
  function findConstruction([P0, P1, P2], r, canvasSize, errorTolCenter) {
    /* 查找一个半径为 r 的圆的圆心，使得圆上有一个点 T，
     * 并且该点在方向 d 上有切线，圆心在与方向 dirTan 相同的切线一侧。 */
    function findCenter(T, d, r, dirTan) {
      /* 找到与切线正交线的方向
       * 选择较大的值以避免除以 0。
       * a . n = 0。设置较小的分量为 1 */
      const dn =
        Math.abs(d.x) < Math.abs(d.y)
          ? Math2D.point(1, -d.x / d.y)
          : Math2D.point(-d.y / d.x, 1);

      /* 如果正交向量与 dirTan 的点积小于 0，则正交向量可能指向圆心或反向。
       * 如果是后者，则使其指向圆心。 */
      if (Math2D.dot(dn, dirTan) < 0) {
        dn.x = -dn.x;
        dn.y = -dn.y;
      }

      /* 沿着线 Tx + t * dn 移动半径距离，即可到达圆的圆心 */
      return Math2D.linePointAt(T, r / Math2D.L2(dn), dn);
    }

    /* 测试是否重合。注意，点将具有小整数坐标，因此检查精确的
     * 相等性没有问题 */
    const dir1 = Math2D.vector(P0.x - P1.x, P0.y - P1.y); // 线 1 的方向
    if (dir1.x === 0 && dir1.y === 0) {
      // P0 和 P1 重合
      return [false];
    }

    const dir2 = Math2D.vector(P2.x - P1.x, P2.y - P1.y); // 线 2 的方向
    if (dir2.x === 0 && dir2.y === 0) {
      // P2 和 P1 重合
      return [false];
    }

    /* 定义线的方向向量的大小 */
    const dir1Mag = Math2D.L2(dir1);
    const dir2Mag = Math2D.L2(dir2);

    /* 单位化方向向量 */
    const dir1_unit = Math2D.vector(dir1.x / dir1Mag, dir1.y / dir1Mag);
    const dir2_unit = Math2D.vector(dir2.x / dir2Mag, dir2.y / dir2Mag);

    /* 线之间的夹角 -- cos(angle) = a.b/(|a||b|)
     * 使用单位向量，因此 |a| = |b| = 1 */
    const dp = Math2D.dot(dir1_unit, dir2_unit);
    /* 测试是否共线 */
    if (Math.abs(dp) > 0.999999) {
      /* 夹角接近于 0 或 180 度 */
      return [false];
    }
    const angle = Math.acos(Math2D.dot(dir1_unit, dir2_unit));

    /* 到切线点 T1 和 T2 的距离 --
     * (T1, P1, C) 构成一个直角三角形 (T2, P1, C) 与上述三角形相同。
     * 每个三角形的一个角是线之间角度的一半
     * tan(angle/2) = r / length(P1,T1) */
    const distToTangent = r / Math.tan(0.5 * angle);

    /* 定位切线点 */
    const T1 = Math2D.linePointAt(P1, distToTangent, dir1_unit);
    const T2 = Math2D.linePointAt(P1, distToTangent, dir2_unit);

    /* 圆心位于切线的法线上，法线在切线点处的距离等于圆的半径。
     * 两种方法确定圆心，应该是相等的 */
    const dirT2_T1 = Math2D.vector(T2.x - T1.x, T2.y - T1.y);
    const dirT1_T2 = Math2D.vector(-dirT2_T1.x, -dirT2_T1.y);
    const C1 = findCenter(T1, dir1_unit, r, dirT2_T1);
    const C2 = findCenter(T2, dir2_unit, r, dirT1_T2);

    /* 圆心计算的误差 */
    const deltaC = Math2D.vector(C2.x - C1.x, C2.y - C1.y);
    if (deltaC.x * deltaC.x + deltaC.y * deltaC.y > errorTolCenter) {
      console.error(
        `程序或数值错误，` +
          `P0(${P0.x},${P0.y}); ` +
          `P1(${P1.x},${P1.y}); ` +
          `P2(${P2.x},${P2.y}); ` +
          `r=${r};`,
      );
    }

    /* 对圆心值取平均 */
    const C = Math2D.point(C1.x + 0.5 * deltaC.x, C1.y + 0.5 * deltaC.y);

    /* 找到两条半无限线的“无限值”。
     * 在实际情况下，任何超出画布的值都可以视为无限远。
     * 确保距离足够远，大于画布的高度 + 宽度，
     * 并且易于找到。 */
    const distToInf = canvasSize.x + canvasSize.y;
    const L1inf = Math2D.linePointAt(P1, distToInf, dir1_unit);
    const L2inf = Math2D.linePointAt(P1, distToInf, dir2_unit);

    return [true, L1inf, L2inf, T1, T2, C];
  } /* findConstruction 函数结束 */

  /* 查找数组中距离指定点最近的第一个点的索引和距离增量，
   * 如果没有找到则返回索引 -1 */
  function hitTestPoints(pointAt, points, hitDistance) {
    const n = points.length;
    const delta = Math2D.vector();
    for (let i = 0; i < n; i++) {
      Math2D.subtract(delta, pointAt, points[i]);
      if (Math2D.L2(delta) <= hitDistance) {
        return [i, delta];
      }
    }
    return [-1]; // 没有找到
  }

  /* 处理鼠标移动，适用于 mousemove 事件或 mouseentry */
  function doMouseMove(pointCursor, rBtnDown) {
    /* 测试是否有活动的移动。如果有，根据鼠标位置移动。右键按下标志处理以下情况：
     * 鼠标在右键按下状态下离开画布，并在右键松开状态下进入画布（不移动）或按下状态下进入（移动）。
     * 这也有助于处理鼠标事件不可靠传递的问题。 */
    if (state.pointActiveIndex >= 0 && state.pointActiveMoving && rBtnDown) {
      /* 一个点正在移动，并且继续移动 */
      moveActivePointAndUpdate(pointCursor);
      return;
    }

    /* 如果没有活动的右键移动，根据命中测试更新活动状态。
     * 鼠标事件有时可能无法可靠传递，特别是在 Chrome 浏览器中，
     * 因此编程必须处理这个问题 */
    state.pointActiveMoving = false; // 没有移动

    const [pointHitIndex, testDelta] = hitTestPoints(
      pointCursor,
      state.controlPoints,
      state.hitDistance,
    );
    state.pointActiveIndex = pointHitIndex;
    canvas.style.cursor = pointHitIndex < 0 ? "auto" : "pointer";
    return;
  } /* doMouseMove 函数结束 */

  class ConstructionPoints {
    static #vT1 = document.getElementById("value-T1");
    static #vT2 = document.getElementById("value-T2");
    static #vC = document.getElementById("value-C");
    static print(T1, T2, C) {
      function prettyPoint(P) {
        return `(${P.x}, ${P.y})`;
      }
      if (state.haveCircle) {
        this.#vT1.textContent = prettyPoint(T1);
        this.#vT2.textContent = prettyPoint(T2);
        this.#vC.textContent = prettyPoint(C);
      } else {
        this.#vT1.textContent = "undefined";
        this.#vT2.textContent = "undefined";
        this.#vC.textContent = "undefined";
      }
    }
  }

  /* 移动活动点，调用时必须存在活动点，将其移动到新的位置，
   * 基于鼠标位置和鼠标到点中心的偏移量 */
  function moveActivePointAndUpdate(pointCursor) {
    let pointAdjusted = Math2D.point();
    Math2D.subtract(pointAdjusted, pointCursor, state.mouseDelta);

    /* 调整位置以保持点在画布上 */
    if (pointAdjusted.x < 0) {
      pointAdjusted.x = 0;
    } else if (pointAdjusted.x >= state.canvasSize.x) {
      pointAdjusted.x = state.canvasSize.x;
    }
    if (pointAdjusted.y < 0) {
      pointAdjusted.y = 0;
    } else if (pointAdjusted.y >= state.canvasSize.y) {
      pointAdjusted.y = state.canvasSize.y;
    }

    /* 设置点 */
    const index = state.pointActiveIndex;
    const pt = state.controlPoints[index];
    let isPointChanged = false;
    let indexTextInput = 1 + 2 * index;
    if (pt.x !== pointAdjusted.x) {
      isPointChanged = true;
      pt.x = pointAdjusted.x;
      textInputs[indexTextInput].elementText.textContent = pointAdjusted.x;
    }
    if (pt.y !== pointAdjusted.y) {
      isPointChanged = true;
      pt.y = pointAdjusted.y;
      textInputs[indexTextInput + 1].elementText.textContent = pointAdjusted.y;
    }

    if (isPointChanged) {
      // 如果 x 或 y 改变，则更新结果
      updateResults();
    }
  }

  function drawCanvas() {
    const rPoint = 4;
    const colorConstruction = "#080";
    const colorDragable = "#00F";
    const [P0, P1, P2] = state.controlPoints;

    ctx.font = "italic 14pt sans-serif";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 1;

    /* 如果存在构造信息，则绘制 */
    if (state.haveCircle) {
      ctx.strokeStyle = colorConstruction;
      ctx.fillStyle = colorConstruction;
      ctx.setLineDash([4, 6]);

      /* 绘制构造点 */
      const specialPoints = [state.C, state.T1, state.T2];
      specialPoints.forEach((value) => {
        ctx.beginPath();
        ctx.arc(value.x, value.y, rPoint, 0, 2 * Math.PI);
        ctx.fill();
      });

      /* 绘制半无限线、半径和圆 */
      ctx.beginPath();
      ctx.moveTo(state.P0Inf.x, state.P0Inf.y);
      ctx.lineTo(P1.x, P1.y);
      ctx.lineTo(state.P2Inf.x, state.P2Inf.y);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(state.C.x, state.C.y);
      ctx.lineTo(state.T1.x, state.T1.y);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(state.C.x, state.C.y, state.radius, 0, 2 * Math.PI);
      ctx.stroke();

      ctx.fillStyle = "#000";
      ctx.fillText("C", state.C.x, state.C.y - 15);
      ctx.fillText("T\u2081", state.T1.x, state.T1.y - 15);
      ctx.fillText("T\u2082", state.T2.x, state.T2.y - 15);
      ctx.fillText(
        " r",
        0.5 * (state.T1.x + state.C.x),
        0.5 * (state.T1.y + state.C.y),
      );
    } else {
      // 没有圆
      ctx.beginPath();
      ctx.moveTo(P0.x, P0.y);
      ctx.setLineDash([2, 6]);
      ctx.lineTo(P1.x, P1.y);
      ctx.lineTo(P2.x, P2.y);
      ctx.strokeStyle = colorConstruction;
      ctx.stroke();
    }

    /* 绘制初始点和控制点 */
    state.controlPoints.forEach((value) => {
      ctx.beginPath();
      ctx.arc(value.x, value.y, rPoint, 0, 2 * Math.PI);
      ctx.fillStyle = colorDragable;
      ctx.fill();
    });
    ctx.fillStyle = "#000";
    ctx.fillText("P\u2080", P0.x, P0.y - 15);
    ctx.fillText("P\u2081", P1.x, P1.y - 15);
    ctx.fillText("P\u2082", P2.x, P2.y - 15);

    /* 绘制 arcTo() 结果 */
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(P0.x, P0.y);
    ctx.setLineDash([]);
    ctx.arcTo(P1.x, P1.y, P2.x, P2.y, state.radius);
    ctx.strokeStyle = "#000";
    ctx.stroke();
  } /* rawCanvas 函数结束 */

  function addPointArrowMoves() {
    [0, 1, 2].forEach((value) => addPointArrowMove(value));
  }

  /* 允许在点标签上按箭头键移动点的 x 和 y 方向 */
  function addPointArrowMove(indexPoint) {
    const elem = document.getElementById("value-P" + indexPoint);
    let indexTextInput = 2 * indexPoint + 1;
    elem.addEventListener("keydown", (evt) => {
      let valueNew;
      let indexActive = indexTextInput;
      switch (evt.code) {
        case "ArrowLeft": // 左箭头--将 x 减 1
          valueNew = textInputs[indexActive].getStateValue() - 1;
          evt.preventDefault();
          break;
        case "ArrowUp": // 上箭头--将 y 减 1
          valueNew = textInputs[++indexActive].getStateValue() - 1;
          evt.preventDefault();
          break;
        case "ArrowRight": // 右箭头--将 x 加 1
          valueNew = textInputs[indexActive].getStateValue() + 1;
          evt.preventDefault();
          break;
        case "ArrowDown": // 下箭头--将 y 加 1
          valueNew = textInputs[++indexActive].getStateValue() + 1;
          evt.preventDefault();
          break;
        default: // 忽略其他按键
          return;
      }

      textInputs[indexActive].updateFull(valueNew); // 进行更新
    });
  }

  /* 根据参数设置初始状态 */
  const state = initDemoState(param);

  /* 半径滑块更新 */
  const controlR = document.getElementById("radius-slider");
  controlR.value = state.radius; // 将初始值与状态匹配
  controlR.max = state.radiusMax;
  controlR.addEventListener("input", (evt) => {
    textInputs[0].elementText.textContent = controlR.value;
    state.radius = controlR.value;
    updateResults();
  });

  /* 创建文本输入框以设置点的位置和圆弧半径 */
  const textInputs = [
    new TextInput(
      "value-r",
      "radius-slider",
      state.radiusMax,
      () => state.radius,
      (value) => (state.radius = value),
    ),
    new TextInput(
      "value-P0x",
      null,
      state.canvasSize.x,
      () => state.controlPoints[0].x,
      (value) => (state.controlPoints[0].x = value),
    ),
    new TextInput(
      "value-P0y",
      null,
      state.canvasSize.y,
      () => state.controlPoints[0].y,
      (value) => (state.controlPoints[0].y = value),
    ),
    new TextInput(
      "value-P1x",
      null,
      state.canvasSize.x,
      () => state.controlPoints[1].x,
      (value) => (state.controlPoints[1].x = value),
    ),
    new TextInput(
      "value-P1y",
      null,
      state.canvasSize.y,
      () => state.controlPoints[1].y,
      (value) => (state.controlPoints[1].y = value),
    ),
    new TextInput(
      "value-P2x",
      null,
      state.canvasSize.x,
      () => state.controlPoints[2].x,
      (value) => (state.controlPoints[2].x = value),
    ),
    new TextInput(
      "value-P2y",
      null,
      state.canvasSize.y,
      () => state.controlPoints[2].y,
      (value) => (state.controlPoints[2].y = value),
    ),
  ];

  /* 允许使用箭头键改变点的位置 */
  addPointArrowMoves();

  /* 根据关联的状态值初始化文本输入框 */
  textInputs.forEach((ti) => (ti.elementText.textContent = ti.getStateValue()));

  /* 设置画布 */
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = state.canvasSize.x;
  canvas.height = state.canvasSize.y;

  /* 鼠标可以移动一个正在移动的点，悬停在未悬停的点上，
   * 穿过一个悬停的点，或在画布的其他部分移动 */
  canvas.addEventListener("mousemove", (evt) =>
    doMouseMove(
      Math2D.point(evt.offsetX, evt.offsetY),
      (evt.buttons & 1) === 1,
    ),
  );

  /* 在悬停的点上按下左键，将其转换为移动的点 */
  canvas.addEventListener("mousedown", (evt) => {
    if (evt.button !== 0) {
      // 只处理左键点击
      return;
    }

    const [pointHitIndex, testDelta] = hitTestPoints(
      Math2D.point(evt.offsetX, evt.offsetY),
      state.controlPoints,
      state.hitDistance,
    );
    if (pointHitIndex < 0) {
      // 光标未悬停在任何点上
      return; // 没有操作
    }

    /* 光标悬停在点上 */
    state.pointActiveMoving = true; // 点现在正在移动
    canvas.style.cursor = "move"; // 设置为移动光标
    state.mouseDelta = testDelta; // 光标与点中心的距离
  });

  /* 松开左键，将移动的点转换为悬停的点 */
  canvas.addEventListener("mouseup", (evt) => {
    if (evt.button !== 0) {
      // 只处理左键点击
      return;
    }

    /* 如果有移动的点，则将其转换为悬停的点 */
    if (state.pointActiveMoving) {
      state.pointActiveMoving = false; // 点现在悬停
      canvas.style.cursor = "pointer";
    }
  });

  /* 处理鼠标重新进入带有移动点的画布的情况。
   * 如果在进入时左键按下，则继续移动；否则停止移动。
   * 可能还需要调整悬停状态 */
  canvas.addEventListener("mouseenter", (evt) =>
    doMouseMove(
      Math2D.point(evt.offsetX, evt.offsetY),
      (evt.buttons & 1) === 1,
    ),
  );

  drawCanvas(); // 绘制初始画布
  ConstructionPoints.print(state.T1, state.T2, state.C); // 输出点信息
</script>
```

```css hidden
label {
  margin: 10px;
}
.input {
  color: #00f;
  text-decoration: underline;
}
#canvas {
  border: 1px solid #000;
}
```

{{ EmbedLiveSample("构建一条 arcTo() 路径", 350, 450) }}

### 绘制 `arcTo()` 的动画

在这个示例中，你可以通过调整弧度半径来观察路径的变化。路径是从起始点 _p0_ 开始使用 `arcTo()` 方法绘制的，控制点为 _p1_ 和 _p2_，弧度半径从 0 变化到滑块选定的最大半径。然后通过 `lineTo()` 方法将路径连接至 _p2_ 完成绘制。

#### HTML

```html
<div>
  <label for="radius">半径：</label>
  <input name="radius" type="range" id="radius" min="0" max="100" value="50" />
  <label for="radius" id="radius-output">50</label>
</div>
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const controlOut = document.getElementById("radius-output");
const control = document.getElementById("radius");
control.oninput = () => {
  controlOut.textContent = radius = control.value;
};

const p1 = { x: 100, y: 100 };
const p2 = { x: 150, y: 50 };
const p3 = { x: 200, y: 100 };
let radius = control.value; // 匹配初始控件值

function labelPoint(p, offset, i = 0) {
  const { x, y } = offset;
  ctx.beginPath();
  ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillText(`${i}:(${p.x}, ${p.y})`, p.x + x, p.y + y);
}

function drawPoints(points) {
  points.forEach((p, i) => {
    labelPoint(p, { x: 0, y: -20 }, `p${i}`);
  });
}

// 绘制弧线
function drawArc([p0, p1, p2], r) {
  ctx.beginPath();
  ctx.moveTo(p0.x, p0.y);
  ctx.arcTo(p1.x, p1.y, p2.x, p2.y, r);
  ctx.lineTo(p2.x, p2.y);
  ctx.stroke();
}

function loop(t) {
  const angle = (t / 1000) % (2 * Math.PI);
  const rr = Math.abs(Math.cos(angle) * radius);

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawArc([p1, p2, p3], rr);
  drawPoints([p1, p2, p3]);
  requestAnimationFrame(loop);
}

loop(0);
```

#### 结果

{{EmbedLiveSample('绘制 arcTo() 的动画', 315, 200) }}

## 规范描述

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 定义此方法的接口：{{domxref("CanvasRenderingContext2D")}}
