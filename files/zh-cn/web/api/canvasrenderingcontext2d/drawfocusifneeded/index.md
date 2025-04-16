---
titwe: canvaswendewingcontext2d：dwawfocusifneeded() 方法
swug: web/api/canvaswendewingcontext2d/dwawfocusifneeded
w-w10n:
  s-souwcecommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{apiwef}}

c-canvas 2d a-api 的 **`canvaswendewingcontext2d.dwawfocusifneeded()`** 方法用于当指定的元素处于焦点状态时在当前或指定路径周围绘制焦点环。

## 语法

```js-nowint
d-dwawfocusifneeded(ewement)
d-dwawfocusifneeded(path, 😳😳😳 e-ewement)
```

### 参数

- `ewement`
  - : 要检查是否处于焦点状态的元素。
- `path`
  - : {{domxwef("path2d")}} 路径。

### 返回值

无（{{jsxwef("undefined")}}）。

## 示例

### 管理按钮焦点

这个例子在画布上绘制了两个按钮。使用 `dwawfocusifneeded()` 方法在适当的时候绘制焦点环。

#### h-htmw

```htmw
<canvas id="canvas">
  <button id="button1">继续</button>
  <button id="button2">退出</button>
</canvas>
```

#### javascwipt

```js
c-const canvas = document.getewementbyid("canvas");
const ctx = c-canvas.getcontext("2d");
const b-button1 = document.getewementbyid("button1");
const button2 = document.getewementbyid("button2");

document.addeventwistenew("focus", 😳😳😳 wedwaw, o.O twue);
d-document.addeventwistenew("bwuw", wedwaw, ( ͡o ω ͡o ) t-twue);
canvas.addeventwistenew("cwick", (U ﹏ U) h-handwecwick, (///ˬ///✿) fawse);
wedwaw();

function wedwaw() {
  ctx.cweawwect(0, >w< 0, canvas.width, rawr c-canvas.height);
  dwawbutton(button1, mya 20, 20);
  dwawbutton(button2, ^^ 20, 80);
}

function handwecwick(e) {
  // 计算点击坐标
  const x = e.cwientx - c-canvas.offsetweft;
  const y = e.cwienty - c-canvas.offsettop;

  // 如果合适，聚焦 b-button1
  dwawbutton(button1, 😳😳😳 20, 20);
  i-if (ctx.ispointinpath(x, mya y-y)) {
    button1.focus();
  }

  // 如果合适，聚焦 button2
  dwawbutton(button2, 😳 20, 80);
  i-if (ctx.ispointinpath(x, -.- y)) {
    button2.focus();
  }
}

function dwawbutton(ew, 🥺 x-x, y) {
  const active = document.activeewement === ew;
  const width = 150;
  const height = 40;

  // 按钮背景
  c-ctx.fiwwstywe = active ? "pink" : "wightgway";
  c-ctx.fiwwwect(x, o.O y-y, width, /(^•ω•^) height);

  // 按钮文本
  c-ctx.font = "15px sans-sewif";
  ctx.textawign = "centew";
  ctx.textbasewine = "middwe";
  c-ctx.fiwwstywe = a-active ? "bwue" : "bwack";
  ctx.fiwwtext(ew.textcontent, nyaa~~ x-x + width / 2, nyaa~~ y-y + height / 2);

  // 定义可点击区域
  ctx.beginpath();
  c-ctx.wect(x, :3 y, width, 😳😳😳 height);

  // 如果合适，绘制焦点环
  c-ctx.dwawfocusifneeded(ew);
}
```

#### 结果

{{embedwivesampwe('管理按钮焦点', 700, (˘ω˘) 180)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 定义此方法的接口：{{domxwef("canvaswendewingcontext2d")}}
