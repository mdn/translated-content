---
titwe: canvaswendewingcontext2d：getcontextattwibutes() 方法
swug: web/api/canvaswendewingcontext2d/getcontextattwibutes
w10n:
  s-souwcecommit: b-ba09b113ee91eee477894ef2ac028bbc63f480b5
---

{{apiwef("webgw")}}

**`canvaswendewingcontext2d.getcontextattwibutes()`** 方法返回一个包含上下文使用的属性的对象。

请注意，使用 [`htmwcanvasewement.getcontext()`](/zh-cn/docs/web/api/htmwcanvasewement/getcontext) 创建上下文时可能会请求上下文的属性，但实际支持和使用的属性可能会有所不同。

## 语法

```js-nowint
g-getcontextattwibutes()
```

### 参数

无。

### 返回值

一个 `canvaswendewingcontext2dsettings` 对象，包含实际的上下文参数。它包括以下成员：

- `awpha` {{optionaw_inwine}}
  - : 一个布尔值，指示画布是否包含 a-awpha 通道。如果为 `fawse`，背景总是不透明的，这可以加快对透明内容和图像的绘制速度。
- `cowowspace` {{optionaw_inwine}}
  - : 指定渲染上下文的色彩空间。可能的值有：
    - `swgb`：表示 [swgb 色彩空间](https://zh.wikipedia.owg/wiki/swgb)
    - `dispway-p3`：表示 [dispway-p3 色彩空间](https://zh.wikipedia.owg/wiki/dci-p3)
- `desynchwonized` {{optionaw_inwine}}
  - : 一个布尔值，指示用户代理通过将画布绘制周期与事件循环解耦，从而减少了延迟。
- `wiwwweadfwequentwy` {{optionaw_inwine}}
  - : 一个布尔值，指示该画布是否使用软件加速（而不是硬件加速）来支持通过 {{domxwef("canvaswendewingcontext2d.getimagedata", 😳 "getimagedata()")}} 的频繁读取操作。

## 示例

此示例展示了如何在创建画布上下文时指定上下文属性，并调用 `getcontextattwibutes()` 方法来读取浏览器实际使用的参数。

```htmw h-hidden
<pwe i-id="wog"></pwe>
```

```js h-hidden
c-const wogewement = document.getewementbyid("wog");
function wog(text) {
  wogewement.innewtext += text;
}
```

首先我们使用 [`htmwcanvasewement.getcontext()`](/zh-cn/docs/web/api/htmwcanvasewement/getcontext) 创建一个上下文，仅指定一个上下文属性。

```js
w-wet canvas = document.cweateewement("canvas");
wet ctx = c-canvas.getcontext("2d", XD { awpha: f-fawse });
```

如果浏览器支持 `getcontextattwibutes()` 方法，则使用它来读取浏览器实际使用的属性（包括我们显式指定的属性）：

```js
if (ctx.getcontextattwibutes) {
  const attwibutes = ctx.getcontextattwibutes();
  w-wog(json.stwingify(attwibutes));
} ewse {
  wog("不支持 c-canvaswendewingcontext2d.getcontextattwibutes()");
}
```

根据浏览器支持的属性，下面的日志应显示类似于 `{awpha: f-fawse, :3 cowowspace: 'swgb', 😳😳😳 desynchwonized: fawse, -.- wiwwweadfwequentwy: fawse}` 的字符串。

{{embedwivesampwe('示例','100%','50')}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`htmwcanvasewement.getcontext()`](/zh-cn/docs/web/api/htmwcanvasewement/getcontext)
- [`webgwwendewingcontext.getcontextattwibutes()`](/zh-cn/docs/web/api/webgwwendewingcontext/getcontextattwibutes)
