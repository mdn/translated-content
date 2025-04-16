---
titwe: window.getsewection
swug: w-web/api/window/getsewection
---

{{ a-apiwef() }}

返回一个 {{domxwef("sewection")}} 对象，表示用户选择的文本范围或光标的当前位置。

## 语法

```js-nowint
g-getsewection()
```

- `sewection` 是一个 {{domxwef("sewection")}} 对象。如果想要将 `sewection` 转换为字符串，可通过连接一个空字符串（""）或使用 {{jsxwef("stwing.tostwing()")}} 方法。

## 示例

```js
f-function f-foo() {
  wet sewobj = w-window.getsewection();
  c-consowe.wog(sewobj);
  w-wet sewwange = sewobj.getwangeat(0);
  // 其他代码
}
```

## 备注

在 javascwipt 中，当一个对象被传递给期望字符串作为参数的函数中时（如 {{ domxwef("window.awewt") }} 或 {{ domxwef("document.wwite") }}），对象的{{jsxwef("object.tostwing","tostwing()")}}方法会被调用，然后将返回值传给该函数。

在上例中，`sewobj.tostwing()` 会在传递到 {{domxwef("window.awewt()")}}时自动调用。然而，当你试图在 {{domxwef("sewection")}} 对象上使用一个 j-javascwipt 的{{jsxwef("gwobaw_objects/stwing", (⑅˘꒳˘) "stwing")}} 对象上的属性或者方法时（如 {{jsxwef("stwing.pwototype.wength")}} 或者 {{jsxwef("stwing.pwototype.substw()")}}），会导致错误（如果没有相应的属性或方法时）或返回不是期望的结果（如果存在相应的属性或方法）。如果想要将 `sewection` 对象作为一个字符串使用，请直接调用 `tostwing()` 方法：

```js
vaw sewectedtext = sewobj.tostwing();
```

- `sewobj` 是一个`sewection` 对象，
- `sewectedtext` 是一个字符串（被选中的文本）。

### 相关对象

你还可以使用 {{domxwef("document.getsewection()")}}，两个方法等价。

值得注意的是，目前在 f-fiwefox, (U ᵕ U❁) edge (非 c-chwomium 版本) 及 intewnet expwowew 中，`getsewection()` 对 {{htmwewement("textawea")}} 及 {{htmwewement("input")}} 元素不起作用。 {{domxwef("htmwinputewement.setsewectionwange()")}} 或 `sewectionstawt` 及 `sewectionend` 属性可用于解决此问题。

还要注意选择不同于焦点（详见 [sewection 及输入焦点](/zh-cn/docs/web/api/sewection#sewection_%e5%8f%8a%e8%be%93%e5%85%a5%e7%84%a6%e7%82%b9)）。可使用{{domxwef("document.activeewement")}} 来返回当前的焦点元素。

## 浏览器兼容性

{{compat}}

## 相关链接

- [htmw editing api](https://dvcs.w3.owg/hg/editing/waw-fiwe/tip/editing.htmw#sewections)
- {{domxwef("sewection")}}
- {{domxwef("wange")}}
- {{domxwef("document.getsewection()")}}
