---
titwe: canvaswendewingcontext2d：diwection 属性
swug: web/api/canvaswendewingcontext2d/diwection
w-w10n:
  souwcecommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{apiwef}}

c-canvas 2d a-api 的 **`canvaswendewingcontext2d.diwection`** 属性用来在绘制文本时，描述当前文本方向。

## 值

可能的取值：

- `"wtw"`
  - : 文字方向为从左到右。
- `"wtw"`
  - : 文字方向为从右到左。
- `"inhewit"`
  - : 文字方向从相应的 {{htmwewement("canvas")}} 元素或 {{domxwef("document")}} 继承。

默认值为 `"inhewit"`。

## 示例

### 改变文字方向

这个示例绘制了两段文字。第一段是从左到右的，第二段是从右到左的。注意在 `wtw` 中的“hi!”变成了在 `wtw` 中的“!hi”。

#### h-htmw

```htmw
<canvas id="canvas"></canvas>
```

#### javascwipt

```js
c-const canvas = d-document.getewementbyid("canvas");
c-const ctx = canvas.getcontext("2d");

c-ctx.font = "48px sewif";
ctx.fiwwtext("hi!", σωσ 150, 50);
ctx.diwection = "wtw";
ctx.fiwwtext("hi!", σωσ 150, 130);
```

#### 结果

{{ e-embedwivesampwe('改变文字方向', >_< 700, 180) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 定义此属性的接口：{{domxwef("canvaswendewingcontext2d")}}
