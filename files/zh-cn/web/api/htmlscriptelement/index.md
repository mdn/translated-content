---
title: HTMLScriptElement
slug: Web/API/HTMLScriptElement
---

{{ APIRef("HTML DOM") }}

HTML 脚本元素暴露 HTMLScriptElement 接口，它提供了特殊的属性和方法 (超出了常规 HTMLElement 对象接口，他们也可以通过继承操纵<脚本>元素的布局和演示。）

## 属性

_从其父类中继承的属性，{{domxref("HTMLElement")}}。_

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
        代表了脚本的 MIME 类型。它反映了 <a
          href="/zh-CN/docs/Web/HTML/Element/script#type"><code>type</code></a
        > 属性。如何解析奇异的编程语言，请阅读这篇文章。
      </td>
    </tr>
    <tr>
      <td><code id="src_property">src</code></td>
      <td>{{domxref("DOMString")}}</td>
      <td>
        代表了使用外部脚本资源的地址。它反映了 <a
          href="/zh-CN/docs/Web/HTML/Element/script#src"><code>src</code></a
        > 属性。
      </td>
    </tr>
    <tr>
      <td>
        <code id="htmlFor_property">htmlFor</code> {{Deprecated_Inline}}
      </td>
      <td>{{domxref("DOMString")}}</td>
      <td>
        他 htmlFor 属性设置或返回的值的属性标签。属性指定的表单元素绑定到一个标签。
      </td>
    </tr>
    <tr>
      <td>
        <code id="event_property">event</code>{{Deprecated_Inline}}
      </td>
      <td>{{domxref("DOMString")}}</td>
      <td>
        HTML DOM 事件允许 JavaScript 注册不同的事件处理程序的元素在一个 HTML 文档。
      </td>
    </tr>
    <tr>
      <td><code id="charset_property">charset</code></td>
      <td>{{domxref("DOMString")}}</td>
      <td>
        代表外部脚本资源的字符编码。它反映了 <a
          href="/zh-CN/docs/Web/HTML/Element/script#charset"><code>charset</code></a
        > 属性。
      </td>
    </tr>
    <tr>
      <td><code id="async_property">async</code></td>
      <td>{{domxref("Boolean")}}</td>
      <td rowspan="2">
        <p>
          <strong
            >async 和 defer 属性值为 bool，它用来说明 script 脚本应该如何执行。在没有 src 属性的情况下，async 和 defer 属性可以不指定值。</strong
          >
        </p>
        <p>
          使用该属性有三种模式可供选择，如果 async 属性存在，脚本将异步执行，只要它是可用的，如果 async 属性不存在，而 defer 属性存在，脚本将会在页面完成解析后执行，如果都不存在，那么脚本会在 useragent 解析页面之前被取出并立刻执行。
        </p>
        <div class="note">
          <strong>备注：</strong>这些属性的具体处理细节非常复杂，涉及 HTML
          的许多不同方面，因此分散在整个规范中。<a
            href="https://html.spec.whatwg.org/multipage/scripting.html">这些算法</a
          >描述了核心思想，但它们依赖于 HTML、<a
            href="https://html.spec.whatwg.org/multipage/syntax.html#foreign-elements">外部内容</a
          >和 <a href="https://html.spec.whatwg.org/multipage/xhtml.html">XML 中</a>
          {{HTMLElement("script")}} <a href="https://html.spec.whatwg.org/multipage/syntax.html#start-tags">开始</a>和<a
            href="https://html.spec.whatwg.org/multipage/syntax.html#end-tags">结束</a
          >标记的解析规则；<a href="/zh-CN/docs/Web/API/Document/write"
          ><code>document.write()</code></a> 方法的规则；<a
            href="https://html.spec.whatwg.org/multipage/webappapis.html">脚本处理</a>等等。
        </div>
        <p>
          延迟属性可以指定即使指定异步属性，导致遗留 Web 浏览器只支持推迟（而不是异步）回落推迟行为而不是同步阻塞是默认的行为。
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
        反馈该脚本元素 <a href="/zh-CN/docs/Web/HTML/Attributes/crossorigin">CORS 设置</a>的字符串。对其他<a href="/zh-CN/docs/Glossary/Origin">源</a>的脚本，此属性控制错误信息的暴露情况。
      </td>
    </tr>
    <tr>
      <td><code id="text_property">text</code></td>
      <td>{{domxref("DOMString")}}</td>
      <td>
        <p>
          一个字符串，用于按树形顺序连接并返回 {{HTMLElement("script")}} 元素（忽略注释等其他节点）内所有<a href="/zh-CN/docs/Web/API/Text">文本节点</a>的内容。在设置时，它的作用与 <a href="/zh-CN/docs/Web/API/Node/textContent"><code>textContent</code></a> IDL 属性相同。
        </p>
        <div class="note">
          <strong>备注：</strong>当插入使用
          <code>document.write()</code> 方法，{{HTMLElement("script")}}
          元素执行（通常是同步），但当插入使用 innerHTML 和 outerHTML 属性，它们不执行。
        </div>
      </td>
    </tr>
  </tbody>
</table>

## 方法

_没有具体的方法；属性从其父类 {{domxref("HTMLElement")}} 继承。_

## 示例

### 动态导入脚本

让我们创建一个名为 importScript 的函数，它能够在一个文档中导入新的脚本，创建一个 {{HTMLElement("script")}} 节点，并立即插入到宿主 {{HTMLElement("script")}} 之前（通过 {{domxref("document.currentScript")}} 可以获取宿主 script 标签）。这些脚本将**异步**执行。更多细节，请参见 defer 和 async 属性。

```js
function loadError(oError) {
  throw new URIError("The script " + oError.target.src + " is not accessible.");
}

function importScript(sSrc, fOnload) {
  var oScript = document.createElement("script");
  oScript.type = "text/javascript";
  oScript.onerror = loadError;
  if (fOnload) {
    oScript.onload = fOnload;
  }
  document.currentScript.parentNode.insertBefore(
    oScript,
    document.currentScript,
  );
  oScript.src = sSrc;
}
```

以下函数不是将新脚本直接插入在 {{domxref("document.currentScript")}} 元素之前，而是将它们作为 {{HTMLElement("head")}} 标签的子节点追加。

```js
var importScript = (function (oHead) {
  function loadError(oError) {
    throw new URIError(
      "The script " + oError.target.src + " is not accessible.",
    );
  }

  return function (sSrc, fOnload) {
    var oScript = document.createElement("script");
    oScript.type = "text/javascript";
    oScript.onerror = loadError;
    if (fOnload) {
      oScript.onload = fOnload;
    }
    oHead.appendChild(oScript);
    oScript.src = sSrc;
  };
})(document.head || document.getElementsByTagName("head")[0]);
```

示例用法：

```js
importScript("myScript1.js");
importScript(
  "myScript2.js",
  /* onload function: */ function () {
    alert(
      'You read this alert because the script "myScript2.js" has been correctly loaded.',
    );
  },
);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- HTML {{ HTMLElement("script") }} 元素
- HTML {{ HTMLElement("noscript") }} 元素
- {{domxref("document.currentScript")}}
- [Web Worker](/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers)（代码片段与脚本类似，但在[另外一个全局上下文中](/zh-CN/docs/Web/API/DedicatedWorkerGlobalScope)执行）
