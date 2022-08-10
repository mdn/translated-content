---
title: File.getAsBinary
slug: Web/API/File/getAsBinary
translation_of: Web/API/File/getAsBinary
---
<p>{{APIRef("File API")}}</p>

<h2 id="概述">概述</h2>

<p>将文件内容按照原始二进制形式解析成字符串并返回。</p>

<h2 id="示例">示例</h2>

<pre class="brush:js;">// fileInput 是一个 HTMLInputElement 元素：&lt;input type="file" id="myfileinput" multiple&gt;
var fileInput = document.getElementById("myfileinput");

// files 是一个 FileList 对象 (类似于 NodeList)
var files = fileInput.files;

// 一个对象，包含了允许的 MIME 类型
var accept = {
    binary : ["image/png", "image/jpeg"],
    text :   ["text/plain", "text/css", "application/xml", "text/html"]
};

var file;

for (var i = 0; i &lt; files.length; i++) {
    file = files[i];

    // 如果文件的类型能够被检测到
    if (file !== null) {
        if (accept.binary.indexOf(file.type) &gt; -1) {
            // file 是个可接受的二进制文件
            var data = file.getAsBinary();
        } else if (accept.text.indexOf(file.type) &gt; -1) {
            // file 是个可接受的文本文件
            var data = file.getAsText();
            // 使用字符串方法处理 data
        }
    }
}</pre>
