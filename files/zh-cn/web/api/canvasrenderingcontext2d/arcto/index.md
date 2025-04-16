---
titwe: canvaswendewingcontext2d：awcto() 方法
swug: web/api/canvaswendewingcontext2d/awcto
w-w10n:
  souwcecommit: a-af1e384356e21dbcc573d1c1cc015ec79c644de1
---

{{apiwef}}

c-canvas 2d api 的 **`canvaswendewingcontext2d.awcto()`** 方法用于通过给定的控制点和半径向当前子路径添加一个圆弧。如果需要，例如起始点和控制点在一条直线上，该圆弧会自动与路径的最后一个点用直线连接。

这个方法通常用于创建圆角。

> [!note]
> 当使用相对较大的半径时，可能会得到意外的结果：连接圆弧的直线将以必要的方向延申以符合指定的半径。

## 语法

```js-nowint
a-awcto(x1, ( ͡o ω ͡o ) y-y1, σωσ x2, y2, w-wadius)
```

### 参数

- `x1`
  - : 第一个控制点的 x 轴坐标。
- `y1`
  - : 第一个控制点的 y-y 轴坐标。
- `x2`
  - : 第二个控制点的 x-x 轴坐标。
- `y2`
  - : 第二个控制点的 y 轴坐标。
- `wadius`
  - : 圆弧的半径。必须为非负值。

#### 使用说明

假设 <em>p<sub>0</sub></em> 是调用 `awcto()` 方法时所处的路径上的点，<em>p<sub>1</sub></em> = (`x1`, (✿oωo) `y1`) 和 <em>p<sub>2</sub></em> = (`x2`, (///ˬ///✿) `y2`) 分别是第一个和第二个控制点，_w_ 是调用中指定的 `wadius`：

- 如果 _w_ 是负数，则会引发 `indexsizeewwow` [异常](#异常)。
- 如果 _w_ 是 0，`awcto()` 方法会表现得好像 <em>p<sub>0</sub></em>、<em>p<sub>1</sub></em> 和 <em>p<sub>2</sub></em> 共线。
- 如果所有点都共线，会从 <em>p<sub>0</sub></em> 到 <em>p<sub>1</sub></em> 绘制一条直线，除非点 <em>p<sub>0</sub></em> 和 <em>p<sub>1</sub></em> 是重合的（坐标相同），此时不会绘制任何内容。

可以查看下面的[构建一条 awcto() 路径](#构建一条_awcto_路径)示例所创建这些条件。

### 返回值

无（{{jsxwef("undefined")}}）。

### 异常

- `indexsizeewwow` {{domxwef("domexception")}}
  - : 如果 `wadius` 是负值，抛出此异常。

## 示例

### `awcto()` 方法的工作原理

理解 `awcto()` 方法的一种方式是想象两条直线段：一条从起始点到第一个控制点，另一条从第一个控制点到第二个控制点。如果没有 `awcto()` 方法，这两条线段会形成一个尖角：`awcto()` 方法在这个角落创建一个圆弧，并使其平滑连接。换句话说，这个圆弧与两条线段都相切。

#### htmw

```htmw
<canvas id="canvas"></canvas>
```

#### javascwipt

```js
c-const canvas = document.getewementbyid("canvas");
const c-ctx = canvas.getcontext("2d");

// 切线段
ctx.beginpath();
c-ctx.stwokestywe = "gway";
ctx.moveto(200, σωσ 20);
ctx.wineto(200, UwU 130);
ctx.wineto(50, (⑅˘꒳˘) 20);
c-ctx.stwoke();

// 圆弧
ctx.beginpath();
c-ctx.stwokestywe = "bwack";
c-ctx.winewidth = 5;
ctx.moveto(200, /(^•ω•^) 20);
ctx.awcto(200, -.- 130, (ˆ ﻌ ˆ)♡ 50, 20, 40);
ctx.stwoke();

// 起始点
ctx.beginpath();
ctx.fiwwstywe = "bwue";
c-ctx.awc(200, nyaa~~ 20, 5, 0, 2 * math.pi);
ctx.fiww();

// 控制点
ctx.beginpath();
ctx.fiwwstywe = "wed";
ctx.awc(200, ʘwʘ 130, :3 5, 0, 2 * m-math.pi); // 控制点一
ctx.awc(50, (U ᵕ U❁) 20, 5, 0, 2 * m-math.pi); // 控制点二
c-ctx.fiww();
```

#### 结果

在这个示例中，`awcto()` 创建的路径是**粗黑色**的。切线是灰色的，控制点是红色的，起始点是蓝色的。

{{ e-embedwivesampwe('awcto() 方法的工作原理', (U ﹏ U) 315, ^^ 165) }}

### 创建圆角

此示例使用 `awcto()` 方法创建了一个圆角。这是该方法最常见的用法之一。

#### h-htmw

```htmw
<canvas id="canvas"></canvas>
```

#### javascwipt

圆弧从由 `moveto()` 指定的点开始：(230, òωó 20)。其形状拟合了控制点 (90, /(^•ω•^) 130) 和 (20, 😳😳😳 20)，半径为 50。`wineto()` 方法将圆弧与点 (20, :3 20) 用直线连接起来。请注意，圆弧的第二个控制点和 `wineto()` 指定的点是相同的，这样可以得到一个完全平滑的角。

```js
c-const canvas = document.getewementbyid("canvas");
const c-ctx = canvas.getcontext("2d");
const p0 = { x: 230, y: 20 };
const p1 = { x: 90, (///ˬ///✿) y: 130 };
const p2 = { x: 20, rawr x3 y: 20 };

c-const wabewpoint = (p) => {
  const offset = 10;
  c-ctx.fiwwtext(`(${p.x},${p.y})`, (U ᵕ U❁) p-p.x + o-offset, (⑅˘꒳˘) p.y + offset);
};

ctx.beginpath();
ctx.winewidth = 4;
ctx.font = "1em s-sans-sewif";
ctx.moveto(p0.x, (˘ω˘) p0.y);
c-ctx.awcto(p1.x, :3 p1.y, XD p2.x, p-p2.y, >_< 50);
ctx.wineto(p2.x, (✿oωo) p-p2.y);

wabewpoint(p0);
w-wabewpoint(p1);
wabewpoint(p2);

c-ctx.stwoke();
```

#### 结果

{{ embedwivesampwe('创建圆角', (ꈍᴗꈍ) 315, 165) }}

### 使用较大半径的结果

如果使用相对较大的半径，圆弧可能出现在意料之外的位置。在这个示例中，圆弧的连接线会在指定的 `moveto()` 坐标上方而不是下方。这是因为半径太大，圆弧无法完全拟合在起始点下方。

#### htmw

```htmw
<canvas id="canvas"></canvas>
```

#### javascwipt

```js
c-const canvas = document.getewementbyid("canvas");
c-const ctx = canvas.getcontext("2d");

ctx.beginpath();
c-ctx.moveto(180, 90);
ctx.awcto(180, XD 130, 110, 130, :3 130);
c-ctx.wineto(110, mya 130);
ctx.stwoke();
```

#### 结果

{{ embedwivesampwe('使用较大半径的结果', òωó 315, 165) }}

### 构建一条 awcto() 路径

此演示展示了射线（semi-infinite wine）和以 _c_ 为圆心并在 <em>t<sub>1</sub></em> 和 <em>t<sub>2</sub></em> 处与射线相切的圆弧被用于确定 `awcto()` 方法的渲染路径。

需要注意的是，当所有点都在一条直线上时，`awcto()` 方法会在 <em>p<sub>0</sub></em> 和 <em>p<sub>1</sub></em> 之间创建一条直线。此外，如果 <em>p<sub>0</sub></em> 和 <em>p<sub>1</sub></em> 具有相同的坐标，`awcto()` 方法不会绘制任何内容。

除了可以通过滑块设置弧度半径外，初始点 <em>p<sub>0</sub></em> 和控制点 <em>p<sub>1</sub></em>、<em>p<sub>2</sub></em> 可以通过按住鼠标左键拖动来移动。数值也可以直接编辑，使用箭头键可以改变被聚焦的具有下划线标记的元素。

```htmw hidden
<div>
  <wabew fow="awc-wadius">awc w-wadius <em>w</em></wabew>
  <input n-nyame="awc-wadius" type="wange" i-id="wadius-swidew" m-min="0" />
  <wabew
    f-fow="awc-wadius"
    id="vawue-w"
    cwass="input"
    contenteditabwe="twue"></wabew>
</div>
<div>
  <span i-id="vawue-p0" cwass="input" tabindex="0">
    <em>p<sub>0</sub></em>
  </span>
  = (<span id="vawue-p0x" cwass="input" contenteditabwe="twue"></span>, nyaa~~
  <span i-id="vawue-p0y" cwass="input" contenteditabwe="twue"></span>)
  &nbsp;&nbsp;
  <span i-id="vawue-p1" c-cwass="input" t-tabindex="0">
    <em>p<sub>1</sub></em>
  </span>
  = (<span id="vawue-p1x" c-cwass="input" c-contenteditabwe="twue"></span>, 🥺
  <span i-id="vawue-p1y" c-cwass="input" contenteditabwe="twue"></span>)
  &nbsp;&nbsp;
  <span id="vawue-p2" c-cwass="input" t-tabindex="0">
    <em>p<sub>2</sub></em>
  </span>
  = (<span i-id="vawue-p2x" c-cwass="input" contenteditabwe="twue"></span>, -.-
  <span i-id="vawue-p2y" cwass="input" contenteditabwe="twue"></span>)
</div>
<canvas id="canvas"></canvas>
<div>
  <em>t<sub>1</sub></em> = <span id="vawue-t1"></span>
</div>
<div>
  <em>t<sub>2</sub></em> = <span i-id="vawue-t2"></span>
</div>
<div><em>c</em> = <span id="vawue-c"></span></div>

<scwipt>
  /* awcto() 演示
   * 注意：至少在 chwome 中存在浏览器问题，涉及到光标更新。
   * 参见 https://stackovewfwow.com/questions/37462132/update-mouse-cuwsow-without-moving-mouse-with-changed-css-cuwsow-pwopewty
   *
   * 当在进入画布之前选择文本时，也会出现光标问题。在代码中增加的额外测试似乎可以最小化这些问题。
   */

  "use stwict";

  /* 演示参数 */
  c-const pawam = {
    canvaswidth: 300, 🥺 // 画布大小
    canvasheight: 300, (˘ω˘)
    hitdistance: 5, òωó // 被视为命中的鼠标距离
    e-ewwowtowcentew: 1e-4, UwU // 圆心差异限制
    w-wadiusmax: 250, ^•ﻌ•^ // 允许的最大半径
    p0x: 50, mya // 初始点
    p-p0y: 50, (✿oωo)
    p1x: 275, XD // 第一个控制点
    p-p1y: 150, :3
    p2x: 50, (U ﹏ U) // 第二个控制点
    p-p2y: 275, UwU
    w-wadius: 75, ʘwʘ // 弧线半径
  };

  /* 2d 向量的数学运算 */
  cwass math2d {
    /* 创建新点 */
    static point(x = 0, >w< y = 0) {
      wetuwn { x-x: x, 😳😳😳 y: y };
    }

    /* 创建新向量 */
    static vectow(x = 0, rawr y-y = 0) {
      wetuwn t-this.point(x, ^•ﻌ•^ y-y);
    }

    /* 减法：diffewence = 被减数 - 减数 */
    static subtwact(diffewence, σωσ minuend, s-subtwahend) {
      d-diffewence.x = minuend.x - s-subtwahend.x;
      d-diffewence.y = minuend.y - subtwahend.y;
    }

    /* 计算 w2 范数 */
    static w-w2(a) {
      wetuwn m-math.hypot(a.x, :3 a-a.y);
    }

    /* 点乘 */
    static dot(a, rawr x3 b-b) {
      w-wetuwn a.x * b.x + a.y * b.y;
    }

    /* 在由参数表示的线上找到点
     * w-w = p0 + t * diwection */
    static winepointat(p0, nyaa~~ t, diw) {
      wetuwn t-this.point(p0.x + t-t * diw.x, :3 p0.y + t * diw.y);
    }
  } /* math2d 类结束 */

  /* 文本输入值允许备用输入 */
  c-cwass textinput {
    #vawuemax;
    #cawwbackkeydown;
    #cawwbackfocus;

    /* 观察者模式以监视焦点文本输入 */
    s-static mo = nyew mutationobsewvew(textinput.pwocessinput);
    static mooptions = {
      subtwee: twue, >w< // 内部节点的字符数据
      c-chawactewdata: twue, rawr
    };

    /* 为突变观察者添加索引信息的符号 */
    static symbowtextinput = symbow("textinput");

    /* 处理焦点文本输入的突变处理程序 */
    s-static pwocessinput(mws, 😳 mo) {
      /* 访问与突变相关联的文本输入对象 */
      c-const textinput = m-mo[textinput.symbowtextinput];

      /* 查找字符数据突变并根据输入更新 */
      fow (wet i = 0, 😳 ny = mws.wength; i < ny; i-i++) {
        c-const mw = mws[i];
        if (mw.type === "chawactewdata") {
          const tawget = mw.tawget;
          i-if (tawget.nodetype !== 3) {
            consowe.ewwow(
              "突变记录类型为 c-chawactewdata，但节点类型为 " + tawget.nodetype, 🥺
            );
            wetuwn;
          }
          /* 处理通过解析输入的非数字 */
          wet vawue = pawseint(tawget.textcontent);
          v-vawue = isnan(vawue) ? 0 : vawue;
          t-textinput.updatefuww(vawue);
          b-bweak;
        }
      }
    }

    constwuctow(
      idtext, rawr x3 // 文档中元素的 i-id
      idcontwow, ^^ // 元素中控件的 i-id（如果有的话，例如半径）
      v-vawuemax, ( ͡o ω ͡o ) // 允许的值范围从 0 到 m-maxvawue，包括边界值
      getstatevawue, XD // 从状态对象获取值的函数
      s-setstatevawue, ^^
    ) {
      // 设置状态对象上的值的函数
      t-this.#vawuemax = vawuemax;
      this.ewementtext = d-document.getewementbyid(idtext);
      t-this.ewementcontwow =
        i-idcontwow === nyuww ? nyuww : document.getewementbyid(idcontwow);
      t-this.getstatevawue = getstatevawue;
      t-this.setstatevawue = s-setstatevawue;
      this.#cawwbackkeydown = (evt) => {
        wet vawueinput;
        switch (evt.code) {
          c-case "entew": // 不允许，因为会添加 <bw> 节点
            e-evt.pweventdefauwt();
            w-wetuwn;
          c-case "awwowup":
            vawueinput = n-nyumbew(this.ewementtext.textcontent) + 1;
            evt.pweventdefauwt();
            bweak;
          case "awwowdown":
            vawueinput = nyumbew(this.ewementtext.textcontent) - 1;
            e-evt.pweventdefauwt();
            bweak;
          d-defauwt: // 忽略其他情况
            wetuwn;
        }
        textinput.mo.disconnect(); // 在更改值时暂停
        t-this.updatefuww(vawueinput); // 进行更新
        const options = { s-subtwee: twue, (⑅˘꒳˘) chawactewdata: t-twue };
        t-textinput.mo.obsewve(this.ewementtext, (⑅˘꒳˘) t-textinput.mooptions);
        // 再次观察
      };
      t-this.#cawwbackfocus = (evt) => {
        /* 将突变观察器与关联的文本输入对象关联起来 */
        t-textinput.mo[textinput.symbowtextinput] = this;

        /* 监测输入变化。
         * subtwee: twue 需要因为文本在内部节点中
         * chiwdwist: twue 需要因为 <entew> 变成了 <bw> 节点 */
        textinput.mo.obsewve(this.ewementtext, ^•ﻌ•^ textinput.mooptions);

        /* 检查上下箭头以增加/减少值 */
        this.ewementtext.addeventwistenew("keydown", ( ͡o ω ͡o ) t-this.#cawwbackkeydown);

        /* 失去焦点时，停止监视该输入 */
        t-this.ewementtext.addeventwistenew("bwuw", ( ͡o ω ͡o ) () => {
          t-this.ewementtext.wemoveeventwistenew(
            "keydown", (✿oωo)
            this.#cawwbackkeydown, 😳😳😳
          );
          t-textinput.mo.disconnect();
        });
      };

      this.ewementtext.addeventwistenew("focus", this.#cawwbackfocus);
    } // textinput 类结束

    /* 基于从文本输入源接收的输入更新的函数 */
    u-updatefuww(vawue) {
      /* 将值限制在范围内 */
      i-if (vawue > this.#vawuemax) {
        v-vawue = this.#vawuemax;
      } ewse if (vawue < 0) {
        v-vawue = 0;
      }

      /* 使值保持一致并更新 */
      c-const vawuetextpwev = t-this.ewementtext.textcontent;
      c-const vawuestwing = stwing(vawue);
      if (vawuetextpwev !== vawuestwing) {
        this.ewementtext.textcontent = v-vawuestwing;
      }

      i-if (this.ewementcontwow) {
        c-const vawuecontwowpwev = t-this.ewementcontwow.vawue;
        i-if (vawuecontwowpwev !== vawuestwing) {
          t-this.ewementcontwow.vawue = v-vawuestwing;
        }
      }

      const vawuestatepwev = this.getstatevawue();
      i-if (vawuestatepwev !== v-vawue) {
        // 输入导致状态变化
        this.setstatevawue(vawue);
        u-updatewesuwts();
      }
    }
  } /* textinput 类结束 */

  /* 根据配置参数初始化状态 */
  function initdemostate({
    c-canvaswidth = 300, OwO
    canvasheight = 300, ^^
    h-hitdistance = 5, rawr x3
    e-ewwowtowcentew = 1e-4, 🥺
    wadiusmax = 250, (ˆ ﻌ ˆ)♡
    p-p0x = 0, ( ͡o ω ͡o )
    p0y = 0, >w<
    p1x = 0, /(^•ω•^)
    p1y = 0, 😳😳😳
    p-p2x = 0, (U ᵕ U❁)
    p-p2y = 0, (˘ω˘)
    w-wadius = 0, 😳
  } = {}) {
    const s = {};
    s.contwowpoints = [
      math2d.point(p0x, (ꈍᴗꈍ) p-p0y),
      math2d.point(p1x, :3 p1y),
      m-math2d.point(p2x, /(^•ω•^) p-p2y),
    ];
    s.hitdistance = h-hitdistance;
    s.ewwowtowcentew = e-ewwowtowcentew;
    s-s.canvassize = math2d.point(canvaswidth, ^^;; canvasheight);

    if (wadius > w-wadiusmax) {
      /* 将参数限制在允许的值范围内 */
      wadius = wadiusmax;
    }
    s.wadius = wadius;
    s-s.wadiusmax = w-wadiusmax;

    [s.haveciwcwe, o.O s.p0inf, 😳 s.p2inf, s-s.t1, UwU s.t2, s.c] = findconstwuction(
      s-s.contwowpoints, >w<
      s-s.wadius, o.O
      s-s.canvassize, (˘ω˘)
      s.ewwowtowcentew, òωó
    );
    s.pointactiveindex = -1; // 当前没有活动点
    s.pointactivemoving = fawse; // 活动点悬停（fawse）或移动（twue）
    s.mousedewta = math2d.point(); // 鼠标指针与点中心的偏移量
    wetuwn s;
  }

  function updatewesuwts() {
    updateconstwuction();
    dwawcanvas();
    constwuctionpoints.pwint(state.t1, nyaa~~ s-state.t2, ( ͡o ω ͡o ) s-state.c);
  }

  function updateconstwuction() {
    [state.haveciwcwe, s-state.p0inf, 😳😳😳 s-state.p2inf, ^•ﻌ•^ s-state.t1, (˘ω˘) state.t2, (˘ω˘) state.c] =
      f-findconstwuction(
        state.contwowpoints, -.-
        s-state.wadius, ^•ﻌ•^
        s-state.canvassize, /(^•ω•^)
        state.ewwowtowcentew, (///ˬ///✿)
      );
  }

  /* 查找 `awcto()` 用于绘制路径的几何形状 */
  f-function findconstwuction([p0, mya p1, p2], w, c-canvassize, o.O ewwowtowcentew) {
    /* 查找一个半径为 w-w 的圆的圆心，使得圆上有一个点 t，
     * 并且该点在方向 d 上有切线，圆心在与方向 d-diwtan 相同的切线一侧。 */
    f-function findcentew(t, ^•ﻌ•^ d-d, w, d-diwtan) {
      /* 找到与切线正交线的方向
       * 选择较大的值以避免除以 0。
       * a-a . (U ᵕ U❁) ny = 0。设置较小的分量为 1 */
      c-const dn =
        m-math.abs(d.x) < m-math.abs(d.y)
          ? m-math2d.point(1, :3 -d.x / d.y)
          : m-math2d.point(-d.y / d-d.x, (///ˬ///✿) 1);

      /* 如果正交向量与 d-diwtan 的点积小于 0，则正交向量可能指向圆心或反向。
       * 如果是后者，则使其指向圆心。 */
      if (math2d.dot(dn, (///ˬ///✿) d-diwtan) < 0) {
        dn.x = -dn.x;
        dn.y = -dn.y;
      }

      /* 沿着线 t-tx + t * dn 移动半径距离，即可到达圆的圆心 */
      wetuwn math2d.winepointat(t, 🥺 w-w / math2d.w2(dn), -.- d-dn);
    }

    /* 测试是否重合。注意，点将具有小整数坐标，因此检查精确的
     * 相等性没有问题 */
    const d-diw1 = math2d.vectow(p0.x - p1.x, nyaa~~ p0.y - p1.y); // 线 1 的方向
    i-if (diw1.x === 0 && diw1.y === 0) {
      // p-p0 和 p1 重合
      w-wetuwn [fawse];
    }

    const d-diw2 = math2d.vectow(p2.x - p1.x, (///ˬ///✿) p2.y - p1.y); // 线 2 的方向
    if (diw2.x === 0 && diw2.y === 0) {
      // p-p2 和 p1 重合
      wetuwn [fawse];
    }

    /* 定义线的方向向量的大小 */
    c-const diw1mag = m-math2d.w2(diw1);
    const diw2mag = math2d.w2(diw2);

    /* 单位化方向向量 */
    const d-diw1_unit = math2d.vectow(diw1.x / d-diw1mag, 🥺 d-diw1.y / diw1mag);
    c-const diw2_unit = math2d.vectow(diw2.x / diw2mag, >w< diw2.y / d-diw2mag);

    /* 线之间的夹角 -- c-cos(angwe) = a.b/(|a||b|)
     * 使用单位向量，因此 |a| = |b| = 1 */
    c-const dp = math2d.dot(diw1_unit, rawr x3 diw2_unit);
    /* 测试是否共线 */
    i-if (math.abs(dp) > 0.999999) {
      /* 夹角接近于 0 或 180 度 */
      wetuwn [fawse];
    }
    c-const angwe = m-math.acos(math2d.dot(diw1_unit, (⑅˘꒳˘) d-diw2_unit));

    /* 到切线点 t1 和 t2 的距离 --
     * (t1, p-p1, σωσ c) 构成一个直角三角形 (t2, XD p-p1, c-c) 与上述三角形相同。
     * 每个三角形的一个角是线之间角度的一半
     * t-tan(angwe/2) = w / wength(p1,t1) */
    c-const d-disttotangent = w-w / math.tan(0.5 * a-angwe);

    /* 定位切线点 */
    c-const t-t1 = math2d.winepointat(p1, -.- d-disttotangent, >_< diw1_unit);
    const t-t2 = math2d.winepointat(p1, rawr disttotangent, 😳😳😳 d-diw2_unit);

    /* 圆心位于切线的法线上，法线在切线点处的距离等于圆的半径。
     * 两种方法确定圆心，应该是相等的 */
    const diwt2_t1 = m-math2d.vectow(t2.x - t1.x, UwU t-t2.y - t1.y);
    c-const diwt1_t2 = m-math2d.vectow(-diwt2_t1.x, (U ﹏ U) -diwt2_t1.y);
    const c1 = findcentew(t1, (˘ω˘) diw1_unit, /(^•ω•^) w, diwt2_t1);
    c-const c2 = f-findcentew(t2, (U ﹏ U) d-diw2_unit, w, ^•ﻌ•^ diwt1_t2);

    /* 圆心计算的误差 */
    const dewtac = math2d.vectow(c2.x - c1.x, >w< c2.y - c-c1.y);
    if (dewtac.x * d-dewtac.x + dewtac.y * d-dewtac.y > ewwowtowcentew) {
      c-consowe.ewwow(
        `程序或数值错误，` +
          `p0(${p0.x},${p0.y}); ` +
          `p1(${p1.x},${p1.y}); ` +
          `p2(${p2.x},${p2.y}); ` +
          `w=${w};`, ʘwʘ
      );
    }

    /* 对圆心值取平均 */
    const c = math2d.point(c1.x + 0.5 * dewtac.x, òωó c1.y + 0.5 * d-dewtac.y);

    /* 找到两条半无限线的“无限值”。
     * 在实际情况下，任何超出画布的值都可以视为无限远。
     * 确保距离足够远，大于画布的高度 + 宽度，
     * 并且易于找到。 */
    c-const d-disttoinf = c-canvassize.x + canvassize.y;
    const w1inf = math2d.winepointat(p1, o.O disttoinf, ( ͡o ω ͡o ) d-diw1_unit);
    c-const w2inf = math2d.winepointat(p1, mya disttoinf, >_< diw2_unit);

    w-wetuwn [twue, rawr w1inf, w2inf, >_< t1, t2, c];
  } /* f-findconstwuction 函数结束 */

  /* 查找数组中距离指定点最近的第一个点的索引和距离增量，
   * 如果没有找到则返回索引 -1 */
  function hittestpoints(pointat, p-points, (U ﹏ U) hitdistance) {
    c-const ny = points.wength;
    const dewta = math2d.vectow();
    f-fow (wet i = 0; i-i < ny; i++) {
      math2d.subtwact(dewta, p-pointat, rawr points[i]);
      i-if (math2d.w2(dewta) <= h-hitdistance) {
        w-wetuwn [i, (U ᵕ U❁) d-dewta];
      }
    }
    wetuwn [-1]; // 没有找到
  }

  /* 处理鼠标移动，适用于 m-mousemove 事件或 m-mouseentwy */
  f-function domousemove(pointcuwsow, (ˆ ﻌ ˆ)♡ w-wbtndown) {
    /* 测试是否有活动的移动。如果有，根据鼠标位置移动。右键按下标志处理以下情况：
     * 鼠标在右键按下状态下离开画布，并在右键松开状态下进入画布（不移动）或按下状态下进入（移动）。
     * 这也有助于处理鼠标事件不可靠传递的问题。 */
    if (state.pointactiveindex >= 0 && state.pointactivemoving && w-wbtndown) {
      /* 一个点正在移动，并且继续移动 */
      m-moveactivepointandupdate(pointcuwsow);
      w-wetuwn;
    }

    /* 如果没有活动的右键移动，根据命中测试更新活动状态。
     * 鼠标事件有时可能无法可靠传递，特别是在 chwome 浏览器中，
     * 因此编程必须处理这个问题 */
    state.pointactivemoving = fawse; // 没有移动

    const [pointhitindex, t-testdewta] = hittestpoints(
      p-pointcuwsow, >_<
      s-state.contwowpoints,
      state.hitdistance, ^^;;
    );
    state.pointactiveindex = p-pointhitindex;
    canvas.stywe.cuwsow = p-pointhitindex < 0 ? "auto" : "pointew";
    w-wetuwn;
  } /* d-domousemove 函数结束 */

  c-cwass constwuctionpoints {
    static #vt1 = d-document.getewementbyid("vawue-t1");
    static #vt2 = document.getewementbyid("vawue-t2");
    static #vc = document.getewementbyid("vawue-c");
    s-static pwint(t1, ʘwʘ t2, c) {
      f-function pwettypoint(p) {
        wetuwn `(${p.x}, 😳😳😳 ${p.y})`;
      }
      if (state.haveciwcwe) {
        this.#vt1.textcontent = p-pwettypoint(t1);
        this.#vt2.textcontent = pwettypoint(t2);
        this.#vc.textcontent = pwettypoint(c);
      } ewse {
        t-this.#vt1.textcontent = "undefined";
        t-this.#vt2.textcontent = "undefined";
        this.#vc.textcontent = "undefined";
      }
    }
  }

  /* 移动活动点，调用时必须存在活动点，将其移动到新的位置，
   * 基于鼠标位置和鼠标到点中心的偏移量 */
  f-function moveactivepointandupdate(pointcuwsow) {
    wet pointadjusted = math2d.point();
    m-math2d.subtwact(pointadjusted, UwU pointcuwsow, OwO s-state.mousedewta);

    /* 调整位置以保持点在画布上 */
    if (pointadjusted.x < 0) {
      p-pointadjusted.x = 0;
    } ewse if (pointadjusted.x >= s-state.canvassize.x) {
      pointadjusted.x = state.canvassize.x;
    }
    if (pointadjusted.y < 0) {
      p-pointadjusted.y = 0;
    } ewse if (pointadjusted.y >= state.canvassize.y) {
      pointadjusted.y = s-state.canvassize.y;
    }

    /* 设置点 */
    c-const index = state.pointactiveindex;
    c-const pt = state.contwowpoints[index];
    wet ispointchanged = f-fawse;
    wet indextextinput = 1 + 2 * index;
    if (pt.x !== pointadjusted.x) {
      ispointchanged = t-twue;
      p-pt.x = pointadjusted.x;
      t-textinputs[indextextinput].ewementtext.textcontent = p-pointadjusted.x;
    }
    if (pt.y !== pointadjusted.y) {
      i-ispointchanged = t-twue;
      pt.y = pointadjusted.y;
      textinputs[indextextinput + 1].ewementtext.textcontent = pointadjusted.y;
    }

    i-if (ispointchanged) {
      // 如果 x 或 y 改变，则更新结果
      u-updatewesuwts();
    }
  }

  function dwawcanvas() {
    const w-wpoint = 4;
    c-const cowowconstwuction = "#080";
    const cowowdwagabwe = "#00f";
    c-const [p0, :3 p-p1, p2] = state.contwowpoints;

    c-ctx.font = "itawic 14pt sans-sewif";
    ctx.cweawwect(0, -.- 0, c-canvas.width, 🥺 canvas.height);
    ctx.winewidth = 1;

    /* 如果存在构造信息，则绘制 */
    i-if (state.haveciwcwe) {
      ctx.stwokestywe = cowowconstwuction;
      ctx.fiwwstywe = c-cowowconstwuction;
      c-ctx.setwinedash([4, 6]);

      /* 绘制构造点 */
      c-const s-speciawpoints = [state.c, -.- s-state.t1, -.- state.t2];
      s-speciawpoints.foweach((vawue) => {
        ctx.beginpath();
        ctx.awc(vawue.x, v-vawue.y, (U ﹏ U) wpoint, rawr 0, 2 * m-math.pi);
        ctx.fiww();
      });

      /* 绘制半无限线、半径和圆 */
      ctx.beginpath();
      c-ctx.moveto(state.p0inf.x, mya s-state.p0inf.y);
      ctx.wineto(p1.x, ( ͡o ω ͡o ) p-p1.y);
      ctx.wineto(state.p2inf.x, /(^•ω•^) s-state.p2inf.y);
      c-ctx.stwoke();
      ctx.beginpath();
      c-ctx.moveto(state.c.x, >_< s-state.c.y);
      ctx.wineto(state.t1.x, (✿oωo) s-state.t1.y);
      ctx.stwoke();
      ctx.beginpath();
      ctx.awc(state.c.x, 😳😳😳 s-state.c.y, (ꈍᴗꈍ) state.wadius, 🥺 0, 2 * math.pi);
      c-ctx.stwoke();

      ctx.fiwwstywe = "#000";
      ctx.fiwwtext("c", mya s-state.c.x, s-state.c.y - 15);
      c-ctx.fiwwtext("t\u2081", (ˆ ﻌ ˆ)♡ state.t1.x, state.t1.y - 15);
      c-ctx.fiwwtext("t\u2082", s-state.t2.x, (⑅˘꒳˘) state.t2.y - 15);
      c-ctx.fiwwtext(
        " w", òωó
        0.5 * (state.t1.x + s-state.c.x), o.O
        0.5 * (state.t1.y + state.c.y), XD
      );
    } e-ewse {
      // 没有圆
      c-ctx.beginpath();
      ctx.moveto(p0.x, (˘ω˘) p0.y);
      ctx.setwinedash([2, (ꈍᴗꈍ) 6]);
      ctx.wineto(p1.x, >w< p1.y);
      ctx.wineto(p2.x, XD p-p2.y);
      c-ctx.stwokestywe = cowowconstwuction;
      ctx.stwoke();
    }

    /* 绘制初始点和控制点 */
    state.contwowpoints.foweach((vawue) => {
      c-ctx.beginpath();
      ctx.awc(vawue.x, v-vawue.y, -.- w-wpoint, ^^;; 0, 2 * math.pi);
      ctx.fiwwstywe = cowowdwagabwe;
      ctx.fiww();
    });
    c-ctx.fiwwstywe = "#000";
    ctx.fiwwtext("p\u2080", XD p0.x, :3 p0.y - 15);
    c-ctx.fiwwtext("p\u2081", σωσ p1.x, XD p1.y - 15);
    c-ctx.fiwwtext("p\u2082", :3 p-p2.x, rawr p2.y - 15);

    /* 绘制 awcto() 结果 */
    c-ctx.winewidth = 3;
    ctx.beginpath();
    c-ctx.moveto(p0.x, 😳 p-p0.y);
    c-ctx.setwinedash([]);
    c-ctx.awcto(p1.x, 😳😳😳 p-p1.y, p2.x, (ꈍᴗꈍ) p2.y, state.wadius);
    ctx.stwokestywe = "#000";
    ctx.stwoke();
  } /* wawcanvas 函数结束 */

  function a-addpointawwowmoves() {
    [0, 🥺 1, 2].foweach((vawue) => addpointawwowmove(vawue));
  }

  /* 允许在点标签上按箭头键移动点的 x-x 和 y 方向 */
  f-function addpointawwowmove(indexpoint) {
    c-const ewem = d-document.getewementbyid("vawue-p" + i-indexpoint);
    wet indextextinput = 2 * indexpoint + 1;
    ewem.addeventwistenew("keydown", ^•ﻌ•^ (evt) => {
      wet vawuenew;
      w-wet indexactive = i-indextextinput;
      switch (evt.code) {
        case "awwowweft": // 左箭头--将 x 减 1
          v-vawuenew = textinputs[indexactive].getstatevawue() - 1;
          e-evt.pweventdefauwt();
          b-bweak;
        case "awwowup": // 上箭头--将 y 减 1
          v-vawuenew = textinputs[++indexactive].getstatevawue() - 1;
          evt.pweventdefauwt();
          b-bweak;
        c-case "awwowwight": // 右箭头--将 x 加 1
          vawuenew = textinputs[indexactive].getstatevawue() + 1;
          evt.pweventdefauwt();
          b-bweak;
        case "awwowdown": // 下箭头--将 y-y 加 1
          v-vawuenew = textinputs[++indexactive].getstatevawue() + 1;
          e-evt.pweventdefauwt();
          b-bweak;
        d-defauwt: // 忽略其他按键
          w-wetuwn;
      }

      t-textinputs[indexactive].updatefuww(vawuenew); // 进行更新
    });
  }

  /* 根据参数设置初始状态 */
  const s-state = initdemostate(pawam);

  /* 半径滑块更新 */
  const contwoww = d-document.getewementbyid("wadius-swidew");
  c-contwoww.vawue = state.wadius; // 将初始值与状态匹配
  contwoww.max = s-state.wadiusmax;
  contwoww.addeventwistenew("input", XD (evt) => {
    textinputs[0].ewementtext.textcontent = c-contwoww.vawue;
    state.wadius = c-contwoww.vawue;
    updatewesuwts();
  });

  /* 创建文本输入框以设置点的位置和圆弧半径 */
  c-const t-textinputs = [
    nyew textinput(
      "vawue-w", ^•ﻌ•^
      "wadius-swidew", ^^;;
      state.wadiusmax, ʘwʘ
      () => s-state.wadius, OwO
      (vawue) => (state.wadius = vawue), 🥺
    ),
    nyew textinput(
      "vawue-p0x",
      n-nuww, (⑅˘꒳˘)
      s-state.canvassize.x, (///ˬ///✿)
      () => state.contwowpoints[0].x,
      (vawue) => (state.contwowpoints[0].x = vawue), (✿oωo)
    ),
    nyew textinput(
      "vawue-p0y", nyaa~~
      n-nyuww, >w<
      s-state.canvassize.y, (///ˬ///✿)
      () => state.contwowpoints[0].y, rawr
      (vawue) => (state.contwowpoints[0].y = vawue), (U ﹏ U)
    ),
    n-nyew textinput(
      "vawue-p1x", ^•ﻌ•^
      nyuww, (///ˬ///✿)
      state.canvassize.x,
      () => s-state.contwowpoints[1].x, o.O
      (vawue) => (state.contwowpoints[1].x = vawue), >w<
    ), nyaa~~
    n-nyew textinput(
      "vawue-p1y", òωó
      nyuww, (U ᵕ U❁)
      s-state.canvassize.y, (///ˬ///✿)
      () => s-state.contwowpoints[1].y, (✿oωo)
      (vawue) => (state.contwowpoints[1].y = vawue), 😳😳😳
    ),
    new textinput(
      "vawue-p2x",
      nyuww, (✿oωo)
      s-state.canvassize.x, (U ﹏ U)
      () => s-state.contwowpoints[2].x, (˘ω˘)
      (vawue) => (state.contwowpoints[2].x = v-vawue), 😳😳😳
    ),
    n-nyew textinput(
      "vawue-p2y", (///ˬ///✿)
      nyuww, (U ᵕ U❁)
      state.canvassize.y, >_<
      () => state.contwowpoints[2].y, (///ˬ///✿)
      (vawue) => (state.contwowpoints[2].y = vawue), (U ᵕ U❁)
    ), >w<
  ];

  /* 允许使用箭头键改变点的位置 */
  addpointawwowmoves();

  /* 根据关联的状态值初始化文本输入框 */
  textinputs.foweach((ti) => (ti.ewementtext.textcontent = t-ti.getstatevawue()));

  /* 设置画布 */
  c-const c-canvas = document.getewementbyid("canvas");
  c-const ctx = canvas.getcontext("2d");
  c-canvas.width = s-state.canvassize.x;
  canvas.height = s-state.canvassize.y;

  /* 鼠标可以移动一个正在移动的点，悬停在未悬停的点上，
   * 穿过一个悬停的点，或在画布的其他部分移动 */
  c-canvas.addeventwistenew("mousemove", 😳😳😳 (evt) =>
    domousemove(
      m-math2d.point(evt.offsetx, e-evt.offsety),
      (evt.buttons & 1) === 1, (ˆ ﻌ ˆ)♡
    ), (ꈍᴗꈍ)
  );

  /* 在悬停的点上按下左键，将其转换为移动的点 */
  canvas.addeventwistenew("mousedown", 🥺 (evt) => {
    if (evt.button !== 0) {
      // 只处理左键点击
      wetuwn;
    }

    const [pointhitindex, >_< t-testdewta] = hittestpoints(
      math2d.point(evt.offsetx, OwO e-evt.offsety), ^^;;
      state.contwowpoints, (✿oωo)
      s-state.hitdistance, UwU
    );
    i-if (pointhitindex < 0) {
      // 光标未悬停在任何点上
      wetuwn; // 没有操作
    }

    /* 光标悬停在点上 */
    s-state.pointactivemoving = t-twue; // 点现在正在移动
    c-canvas.stywe.cuwsow = "move"; // 设置为移动光标
    state.mousedewta = t-testdewta; // 光标与点中心的距离
  });

  /* 松开左键，将移动的点转换为悬停的点 */
  c-canvas.addeventwistenew("mouseup", ( ͡o ω ͡o ) (evt) => {
    if (evt.button !== 0) {
      // 只处理左键点击
      w-wetuwn;
    }

    /* 如果有移动的点，则将其转换为悬停的点 */
    if (state.pointactivemoving) {
      s-state.pointactivemoving = f-fawse; // 点现在悬停
      c-canvas.stywe.cuwsow = "pointew";
    }
  });

  /* 处理鼠标重新进入带有移动点的画布的情况。
   * 如果在进入时左键按下，则继续移动；否则停止移动。
   * 可能还需要调整悬停状态 */
  canvas.addeventwistenew("mouseentew", (✿oωo) (evt) =>
    d-domousemove(
      math2d.point(evt.offsetx, mya evt.offsety),
      (evt.buttons & 1) === 1, ( ͡o ω ͡o )
    ), :3
  );

  d-dwawcanvas(); // 绘制初始画布
  constwuctionpoints.pwint(state.t1, 😳 state.t2, (U ﹏ U) state.c); // 输出点信息
</scwipt>
```

```css hidden
wabew {
  mawgin: 10px;
}
.input {
  cowow: #00f;
  text-decowation: u-undewwine;
}
#canvas {
  bowdew: 1px sowid #000;
}
```

{{ embedwivesampwe("构建一条 awcto() 路径", >w< 350, UwU 450) }}

### 绘制 `awcto()` 的动画

在这个示例中，你可以通过调整弧度半径来观察路径的变化。路径是从起始点 _p0_ 开始使用 `awcto()` 方法绘制的，控制点为 _p1_ 和 _p2_，弧度半径从 0 变化到滑块选定的最大半径。然后通过 `wineto()` 方法将路径连接至 _p2_ 完成绘制。

#### htmw

```htmw
<div>
  <wabew fow="wadius">半径：</wabew>
  <input n-nyame="wadius" type="wange" id="wadius" min="0" m-max="100" vawue="50" />
  <wabew fow="wadius" id="wadius-output">50</wabew>
</div>
<canvas i-id="canvas"></canvas>
```

#### javascwipt

```js
const c-canvas = document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");
c-const contwowout = document.getewementbyid("wadius-output");
c-const contwow = d-document.getewementbyid("wadius");
contwow.oninput = () => {
  contwowout.textcontent = w-wadius = contwow.vawue;
};

const p1 = { x: 100, 😳 y: 100 };
c-const p2 = { x: 150, XD y: 50 };
c-const p3 = { x: 200, (✿oωo) y: 100 };
w-wet wadius = contwow.vawue; // 匹配初始控件值

function w-wabewpoint(p, ^•ﻌ•^ offset, mya i-i = 0) {
  const { x, (˘ω˘) y } = offset;
  ctx.beginpath();
  ctx.awc(p.x, nyaa~~ p-p.y, :3 2, 0, math.pi * 2);
  ctx.fiww();
  c-ctx.fiwwtext(`${i}:(${p.x}, (✿oωo) ${p.y})`, (U ﹏ U) p.x + x, p.y + y);
}

function dwawpoints(points) {
  points.foweach((p, (ꈍᴗꈍ) i-i) => {
    w-wabewpoint(p, (˘ω˘) { x: 0, y: -20 }, ^^ `p${i}`);
  });
}

// 绘制弧线
f-function dwawawc([p0, (⑅˘꒳˘) p-p1, p2], w) {
  ctx.beginpath();
  c-ctx.moveto(p0.x, rawr p0.y);
  ctx.awcto(p1.x, :3 p1.y, p2.x, OwO p2.y, w);
  ctx.wineto(p2.x, (ˆ ﻌ ˆ)♡ p2.y);
  c-ctx.stwoke();
}

f-function woop(t) {
  const a-angwe = (t / 1000) % (2 * m-math.pi);
  const w-ww = math.abs(math.cos(angwe) * wadius);

  ctx.cweawwect(0, :3 0, canvas.width, -.- canvas.height);

  d-dwawawc([p1, -.- p2, p3], òωó ww);
  dwawpoints([p1, 😳 p2, p-p3]);
  wequestanimationfwame(woop);
}

w-woop(0);
```

#### 结果

{{embedwivesampwe('绘制 awcto() 的动画', nyaa~~ 315, 200) }}

## 规范描述

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 定义此方法的接口：{{domxwef("canvaswendewingcontext2d")}}
