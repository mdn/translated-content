---
title: SVGAElement
slug: Web/API/SVGAElement
---

{{APIRef("SVG")}}

## SVG a DOM 接口

`SVGAElement`接口提供了对{{ SVGElement("a") }}元素的属性的访问，而且还提供了操作该元素的方法。

### 接口概览

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">作用于</th>
      <td>
        {{ domxref("SVGElement") }}、
        {{ domxref("SVGURIReference") }}、
        {{ domxref("SVGTests") }}、
        {{ domxref("SVGLangSpace") }}、
        {{ domxref("SVGExternalResourcesRequired") }}、
        {{ domxref("SVGStylable") }}、
        {{ domxref("SVGTransformable") }}
      </td>
    </tr>
    <tr>
      <th scope="row">方法</th>
      <td><em>无</em></td>
    </tr>
    <tr>
      <th scope="row">属性</th>
      <td>
        <ul>
          <li>
            只读属性 {{ domxref("SVGAnimatedString") }}
            <code>target</code>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">规范文档</th>
      <td>
        <a href="http://www.w3.org/TR/SVG11/linking.html#InterfaceSVGAElement"
          >SVG 1.1 (2nd Edition)</a
        >
      </td>
    </tr>
  </tbody>
</table>

## 属性

这个接口同样会从父级元素 *{{domxref("SVGGraphicsElement")}}*继承属性，并实现 _{{domxref("SVGURIReference")}}_ 和 _{{domxref("HTMLHyperlinkElementUtils")}}_ 中的功能。

**{{domxref("SVGAElement.download")}}**

参见 {{domxref("HTMLAnchorElement.download")}}

**{{domxref("SVGAElement.href")}}**

See {{domxref("HTMLAnchorElement.href")}}

**{{domxref("SVGAElement.hreflang")}}**

是一个反映 `hreflang` 属性的字符串（DOMString），表示链接资源的语言种类。

**{{domxref("SVGAElement.ping")}}**

是一个反映 ping 值的字符串（DOMString），包含以空格分隔开的 URL 列表，当超链接可以被跟踪时，浏览器会（在后台）发送有 PING 主体的 {{HTTPMethod("POST")}} 的请求，一般用于追踪。

**{{domxref("SVGAElement.referrerPolicy")}}**

参见 {{domxref("HTMLAnchorElement.referrerPolicy")}}

**{{domxref("SVGAElement.rel")}}**

参见 {{domxref("HTMLAnchorElement.rel")}}

**{{domxref("SVGAElement.relList")}}**

参见{{domxref("HTMLAnchorElement.relList")}}

**{{domxref("SVGAElement.target")}} {{readonlyInline}}**

它和特定元素的 {{SVGAttr("target")}} 属性相同

**{{domxref("SVGAElement.text")}}**

是一个字符串（DOMString），作为 {{domxref("Node.textContent")}} 属性的代名词。

**{{domxref("SVGAElement.type")}}**

是一个反映 `type` 属性的字符串（DOMString），表示链接资源的 MIME 种类。

## 方法

该 `SVGAElement` 接口没有提供任何专有的方法。

## 示例

在下面的这个例子里， {{SVGElement("a")}} 元素的 {{SVGAttr("target")}} 属性值是 `_blank` ，当链接被点击时，它将记录以通知是否符合条件。

```js
var linkRef = document.querySelector("a");
linkRef.target = "_self";

linkRef.onclick = function () {
  if (linkRef.target === "_blank") {
    console.log("BLANK!");
    linkRef.target = "_self";
  } else {
    console.log("SORRY! not _blank");
  }
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ SVGElement("a") }} SVG Element
