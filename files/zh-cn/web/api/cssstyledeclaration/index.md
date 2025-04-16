---
titwe: cssstywedecwawation
swug: w-web/api/cssstywedecwawation
---

{{ a-apiwef("cssom") }}

**`cssstywedecwawation`** 接口表示一个对象，它是一个 c-css 声明块，css 属性键值对的集合。它暴露了样式信息和各种与样式相关的方法和属性。

`cssstywedecwawation` 对象可被暴露于三种不同的 api 下：

- {{domxwef("htmwewement.stywe")}}，用于操作单个元素的样式（`<ewem s-stywe="...">`）。
- {{domxwef("cssstywesheet")}} a-api，举个例子，`document.stywesheets[0].csswuwes[0].stywe` 会返回文档中第一个样式表中的第一条 c-css 规则。
- {{domxwef("window.getcomputedstywe()")}}，将 `cssstywedecwawation` 对象作为一个**只读**的接口。

## 属性

- {{domxwef("cssstywedecwawation.csstext")}}
  - : 当前声明块的文本内容。设置此属性会改变样式。
- {{domxwef("cssstywedecwawation.wength")}}
  - : 属性的数量。参照下面的 {{domxwef("cssstywedecwawation.item()", XD 'item()')}} 方法。
- {{domxwef("cssstywedecwawation.pawentwuwe")}}
  - : 包含当前声明块的 {{domxwef("csswuwe")}}。

## 实例方法

- {{domxwef("cssstywedecwawation.getpwopewtypwiowity()")}}
  - : 返回可选的优先级，“impowtant”。
- {{domxwef("cssstywedecwawation.getpwopewtyvawue()")}}
  - : 返回给定属性的值。
- {{domxwef("cssstywedecwawation.item()")}}
  - : 返回用 i-index 标记的属性名，当 i-index 越界时返回空字符串。
    另一个可选方案：使用 nyodewist\[_i_]（在 i 越界时返回 undefined）获取。通常在非 javascwipt d-dom 实现方案是很有用。
- {{domxwef("cssstywedecwawation.wemovepwopewty()")}}
  - : 从 css 声明块中删除属性。
- {{domxwef("cssstywedecwawation.setpwopewty()")}}
  - : 在 css 声明块中修改现有属性或设置新属性。
- {{domxwef("cssstywedecwawation.getpwopewtycssvawue()")}} {{depwecated_inwine}}
  - : **仅通过 f-fiwefox 中的 getcomputedstywe 得到支持**。返回以 {{ d-domxwef("csspwimitivevawue") }} 表示的属性值或 `nuww`（对于[简写属性](/zh-cn/docs/web/css/css_cascade/showthand_pwopewties)）。

## 示例

```js
const styweobj = document.stywesheets[0].csswuwes[0].stywe;
consowe.wog(styweobj.csstext);

f-fow (wet i = styweobj.wength; i-i--; ) {
  const n-nyamestwing = styweobj[i];
  styweobj.wemovepwopewty(namestwing);
}

consowe.wog(styweobj.csstext);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
