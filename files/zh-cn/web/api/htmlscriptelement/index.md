---
title: HTMLScriptElement
slug: Web/API/HTMLScriptElement
---
{{ APIRef("HTML DOM") }}

HTML 脚本元素暴露 HTMLScriptElement 接口,它提供了特殊的属性和方法(超出了常规 HTMLElement 对象接口,他们也可以通过继承操纵<脚本>元素的布局和演示。）

## Properties

_从其父类中继承的属性, {{domxref("HTMLElement")}}。_

<table>
  <tbody>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
    <tr>
      <td><code id="type_property">type</code></td>
      <td>{{domxref("DOMString")}}</td>
      <td>
        代表了脚本的MIME类型。它反映了{{htmlattrxref("type","script")}}
        属性。如何解析奇异的编程语言,请阅读这篇文章。
      </td>
    </tr>
    <tr>
      <td><code id="src_property">src</code></td>
      <td>{{domxref("DOMString")}}</td>
      <td>
        代表了使用外部脚本资源的地址。它反映了{{htmlattrxref("src","script")}}属性。
      </td>
    </tr>
    <tr>
      <td>
        <code id="htmlFor_property">htmlFor</code> {{Deprecated_Inline}}
      </td>
      <td>{{domxref("DOMString")}}</td>
      <td>
        他htmlFor属性设置或返回的值的属性标签。属性指定的表单元素绑定到一个标签。
      </td>
    </tr>
    <tr>
      <td>
        <code id="event_property">event</code>{{Deprecated_Inline}}
      </td>
      <td>{{domxref("DOMString")}}</td>
      <td>
        HTML DOM事件允许JavaScript注册不同的事件处理程序的元素在一个HTML文档。
      </td>
    </tr>
    <tr>
      <td><code id="charset_property">charset</code></td>
      <td>{{domxref("DOMString")}}</td>
      <td>
        代表外部脚本资源的字符编码。它反映了{{htmlattrxref("charset","script")}}
        属性。
      </td>
    </tr>
    <tr>
      <td><code id="async_property">async</code></td>
      <td>{{domxref("Boolean")}}</td>
      <td rowspan="2">
        <p>
          <strong
            >async和defer属性值为bool，它用来说明script脚本应该如何执行。在没有src属性的情况下，async和defer属性可以不指定值。</strong
          >
        </p>
        <p>
          使用该属性有三种模式可供选择，如果async属性存在，脚本将异步执行，只要它是可用的，如果async属性不存在，而defer属性存在，脚本将会在页面完成解析后执行，如果都不存在，那么脚本会在useragent解析页面之前被取出并立刻执行。
        </p>
        <div class="note">
          <strong
            >注意:这些属性的处理细节,主要是历史原因,有些重要的,涉及很多方面的HTML。因此实现需求的必要性分散在规范。这些描述这个处理的核心算法,但这些算法参考和引用的解析规则{
            HTMLElement("脚本")} {
            }开始和结束标记在HTML中,在国外内容,并在XML中,规则的document .
            write()方法,处理脚本等。</strong
          >
        </div>
        <p>
          延迟属性可以指定即使指定异步属性,导致遗留Web浏览器只支持推迟(而不是异步)回落推迟行为而不是同步阻塞是默认的行为。
        </p>
      </td>
    </tr>
    <tr>
      <td><code id="defer_property">defer</code></td>
      <td>{{domxref("Boolean")}}</td>
    </tr>
    <tr>
      <td>
        <code id="crossOrigin_property">crossOrigin</code>
        {{experimental_inline}}
      </td>
      <td>{{domxref("DOMString")}}</td>
      <td>
        是一个{{domxref("DOMString")}},对应于歌珥设置这个脚本元素。有关详细信息,请参阅歌珥设置属性。这对脚本控制,从其他来源,获得错误信息是否会被暴露出来。
      </td>
    </tr>
    <tr>
      <td><code id="text_property">text</code></td>
      <td>{{domxref("DOMString")}}</td>
      <td>
        <p>
          IDL属性内容的文本必须返回一个连接的所有文本节点的孩子{{HTMLElement("script")}}元素(忽略任何其他节点如评论或元素),在树的顺序。设置,它必须采取行动一样textContent
          IDL属性。
        </p>
        <div class="note">
          <strong
            >注意:当插入使用document . write()方法,{ { HTMLElement("脚本")}
            }元素执行(通常是同步),但当插入使用innerHTML和outerHTML属性,他们不执行。</strong
          >
        </div>
      </td>
    </tr>
  </tbody>
</table>

## Methods

_没有具体的方法;属性从其父类继承, {{domxref("HTMLElement")}}。_

## 例子

### 动态导入脚本

让我们创建一个名为 importScript 的函数，它能够在一个文档中导入新的脚本，创建一个{{HTMLElement("script")}} 节点，并立即插入到宿主{{HTMLElement("script")}} 之前 (通过 {{domxref("document.currentScript")}} 可以获取宿主 script 标签）。这些脚本将**异步**执行。更多细节,请参见 defer 和 async 属性。

```js
function loadError (oError) {
  throw new URIError("The script " + oError.target.src + " is not accessible.");
}

function importScript (sSrc, fOnload) {
  var oScript = document.createElement("script");
  oScript.type = "text\/javascript";
  oScript.onerror = loadError;
  if (fOnload) { oScript.onload = fOnload; }
  document.currentScript.parentNode.insertBefore(oScript, document.currentScript);
  oScript.src = sSrc;
}
```

…the same thing, but appending the new scripts as last childs of the {{ HTMLElement("head") }} tag, instead of appending them immediately before the {{domxref("document.currentScript")}} element:

与上面大致相同,但有一点不同的是 新创建的 script 标签插入到了{{HTMLElement("head")}}标签的的最后,而不是插入到了{{domxref("document.currentScript")}}元素之前:

```js
var importScript = (function (oHead) {

  function loadError (oError) {
    throw new URIError("The script " + oError.target.src + " is not accessible.");
  }

  return function (sSrc, fOnload) {
    var oScript = document.createElement("script");
    oScript.type = "text\/javascript";
    oScript.onerror = loadError;
    if (fOnload) { oScript.onload = fOnload; }
    oHead.appendChild(oScript);
    oScript.src = sSrc;
  }

})(document.head || document.getElementsByTagName("head")[0]);
```

示例用法:

```js
importScript("myScript1.js");
importScript("myScript2.js", /* onload function: */ function () { alert("You read this alert because the script \"myScript2.js\" has been correctly loaded."); });
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat("api.HTMLScriptElement")}}

## See also

- HTML {{ HTMLElement("script") }} element
- HTML {{ HTMLElement("noscript") }} element
- {{domxref("document.currentScript")}}
- [Web Workers](/zh-CN/docs/DOM/Using_web_workers) (code snippets similar to scripts but executed in [another global context](/zh-CN/docs/JavaScript/DedicatedWorkerGlobalScope))
- [Ryan Grove's \<script> and \<link> node event compatibility chart](http://pieisgood.org/test/script-link-events/)
