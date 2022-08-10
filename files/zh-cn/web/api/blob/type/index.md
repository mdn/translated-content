---
title: Blob.type
slug: Web/API/Blob/type
tags:
  - API
  - DOM
  - File
  - Files
  - 参考
  - 属性
  - 文件
translation_of: Web/API/Blob/type
---
<div>{{APIRef("File API")}}</div>

<p><a href="/zh-CN/docs/Web/API/Blob"><code>Blob</code></a> 对象的 <strong><code>type</code></strong> 属性给出文件的 <a href="/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types">MIME 类型</a>。如果类型无法确定，则返回空字符串。</p>

<h3 id="语法">语法</h3>

<pre class="syntaxbox">var mimetype = <var>instanceOfFile</var>.type</pre>

<h3 id="值">值</h3>

<p>字符串</p>

<h3 id="例子">例子</h3>

<pre class="brush:js">// fileInput 是一个 HTMLInputElement，HTML Input 元素：&lt;input type="file" multiple id="myfileinput"&gt;
var fileInput = document.getElementById("myfileinput");

// files 是一个 FileList 对象（与 NodeList 相似，是多个 File 对象的集合）
var files = fileInput.files;

// 仅允许 *.png, *.jpeg *.gif 类型的图片文件
var allowedFileTypes = ["image/png", "image/jpeg", "image/gif"];

for (var i = 0; i &lt; files.length; i++) {
    // 检查文件的文件类型是否属于 allowFileTypes 中的一种
    if (allowedFileTypes.indexOf(files[i].type) &gt; -1) {
        // 对符合条件的文件进行处理
    }
}</pre>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>

<div>


<p>{{Compat("api.Blob.type")}}</p>
</div>

<h2 id="参见">参见</h2>

<ul>
 <li>{{domxref("Blob")}}</li>
</ul>
