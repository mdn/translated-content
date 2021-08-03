---
title: ReadableStream.getReader()
slug: Web/API/ReadableStream/getReader
tags:
  - API
  - getReader
  - 参考
  - 可读取流
  - 方法
  - 流
translation_of: Web/API/ReadableStream/getReader
---
<div>{{APIRef("Streams")}}</div>

<p class="summary">使用{{domxref("ReadableStream")}}接口的<strong><code>getReader()</code></strong> 方法创建一个<code>reader</code>，并将流锁定。只有当前<code>reader</code>将流释放后，其他<code>reader</code>才能使用。</p>

<h2 id="语法">语法</h2>

<pre class="syntaxbox notranslate">var reader = readableStreamInstance.getReader(<em>{mode}</em>);</pre>

<h3 id="参数">参数</h3>

<dl>
 <dt>{mode}- 可选参数</dt>
 <dd>具有 <code>mode</code>参数的对象，值为  {{domxref("DOMString")}}类型 ,用来指定要创建的阅读器的类型。其值可以是：
 <ul>
  <li><code>byob</code>, 结果为 {{domxref("ReadableStreamBYOBReader")}} 类型，可读取可读字节流。</li>
  <li><code>undefined</code> (未定类型 — 默认值), 返回{{domxref("ReadableStreamDefaultReader")}} ，可以从流中返回单个块。</li>
 </ul>
 </dd>
</dl>

<h3 id="返回值">返回值</h3>

<p>{{domxref("ReadableStreamDefaultReader")}} 类型或{{domxref("ReadableStreamBYOBReader")}} 类型 实例, 取决于 <code>mode</code> 值.</p>

<h3 id="错误">错误</h3>

<dl>
 <dt>RangeError——范围错误</dt>
 <dd>提供的 mode值 既不是 <font face="consolas, Liberation Mono, courier, monospace"><span style="background-color: rgba(220, 220, 220, 0.5);">byob</span></font>也不是  <font face="consolas, Liberation Mono, courier, monospace"><span style="background-color: rgba(220, 220, 220, 0.5);">undefined</span></font></dd>
 <dt>TypeError——类型错误</dt>
 <dd>尝试创建阅读器的流不是 {{domxref("ReadableStream")}}类型</dd>
</dl>

<h2 id="例子">例子</h2>

<p>下面是个简单的例子, 在读取<code>ReadableStream</code>前，使用 <code>getReader()</code>创建一个{{domxref("ReadableStreamDefaultReader")}} 。(查看全部代码 <a href="https://mdn.github.io/dom-examples/streams/simple-random-stream/">Simple random stream example</a> ). 按顺序读取每个块，并传递给UI, 当整个流被读取完毕后, 从递归方法中退出，并在UI的另一部分输出整个流。</p>

<pre class="brush: js notranslate">function fetchStream() {
  const reader = stream.getReader();
  let charsReceived = 0;

  // read() 返回了一个promise
  // 当数据被接收时resolve
  reader.read().then(function processText({ done, value }) {
    // Result对象包含了两个属性:
    // done  - 当stream传完所有数据时则变成true
    // value - 数据片段。当done不为true时永远为undefined
    if (done) {
      console.log("Stream complete");
      para.textContent = value;
      return;
    }

    // value for fetch streams is a Uint8Array
    charsReceived += value.length;
    const chunk = value;
    let listItem = document.createElement('li');
    listItem.textContent = 'Received ' + charsReceived + ' characters so far. Current chunk = ' + chunk;
    list2.appendChild(listItem);

    result += chunk;

    // 再次调用这个函数以读取更多数据
    return reader.read().then(processText);
  });
}</pre>

<h2 id="说明">说明</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status(状态)</th>
   <th scope="col">Comment(备注)</th>
  </tr>
  <tr>
   <td>{{SpecName("Streams","#rs-get-reader","getReader()")}}</td>
   <td>{{Spec2('Streams')}}</td>
   <td>Initial definition.</td>
  </tr>
 </tbody>
</table>

<h2 id="浏览器兼容">浏览器兼容</h2>

<p>{{Compat("api.ReadableStream.getReader")}}</p>
