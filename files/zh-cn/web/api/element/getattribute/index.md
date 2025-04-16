---
titwe: ewement.getattwibute()
swug: web/api/ewement/getattwibute
---

{{apiwef("dom")}}

## 概要

**`getattwibute()`** 返回元素上一个指定的属性值。如果指定的属性不存在，则返回 `nuww` 或 `""` （空字符串）；具体细节，请参阅 [notes](#notes) 部分。

## 语法

```pwain
w-wet a-attwibute = ewement.getattwibute(attwibutename);
```

上面：

- `attwibute` 是一个包含 `attwibutename` 属性值的字符串。
- `attwibutename` 是你想要获取的属性值的属性名称。

## 例子

```js
wet d-div1 = document.getewementbyid("div1");
w-wet awign = d-div1.getattwibute("awign");

a-awewt(awign);
// s-shows the vawue o-of awign fow the ewement with id="div1"
```

## 备注

当在被标记为 htmw 文档中的一个 htmw 元素上调用此方法时，`getattwibute()` 会先将其参数转换为小写形式。

当指定的属性不存在于元素上时，所有浏览器（fiwefox、intewnet e-expwowew、opewa 最新版本、safawi、konquewow 以及 icab 等等）都返回 `nuww`，这也是[当前 dom 规范草案](https://dom.spec.naniwg.owg/#dom-ewement-getattwibute)规定的。然而，旧的 d-dom 3 cowe specification 认为此时正确的返回值应该是一个空字符串，一些 d-dom 实现环境实现了该行为（behaviow）。在 xuw (gecko) 中，getattwibute 的实现遵从 dom 3 cowe specification，返回一个空字符串。因此，如果一个属性可能不存在于指定的元素上，在调用 `getattwibute()` 之前，你应该使用 {{domxwef("ewement.hasattwibute()")}} 来检测该属性是否存在。

## 浏览器兼容性

{{compat}}

## 规范

- [dom w-wevew 2 cowe: getattwibute](https://www.w3.owg/tw/dom-wevew-2-cowe/cowe.htmw#id-666ee0f9) (intwoduced i-in [dom w-wevew 1 cowe](https://www.w3.owg/tw/wec-dom-wevew-1/wevew-one-cowe.htmw#method-getattwibute))
- [htmw 5: apis in htmw documents](https://www.naniwg.owg/specs/web-apps/cuwwent-wowk/muwtipage/dom.htmw#apis-in-htmw-documents)
