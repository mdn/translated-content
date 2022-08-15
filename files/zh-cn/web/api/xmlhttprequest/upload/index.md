---
title: XMLHttpRequest.upload
slug: Web/API/XMLHttpRequest/upload
---
<p>{{APIRef('XMLHttpRequest')}}</p>

<p><strong>XMLHttpRequest.upload 属性返回一个</strong> {{domxref("XMLHttpRequestUpload")}}对象，用来表示上传的进度。这个对象是不透明的，但是作为一个{{domxref("XMLHttpRequestEventTarget")}}，可以通过对其绑定事件来追踪它的进度。</p>

<p>可以被绑定在 upload 对象上的事件监听器如下：</p>

<table class="standard-table">
 <tbody>
  <tr>
   <td class="header">事件</td>
   <td class="header">相应属性的信息类型</td>
  </tr>
  <tr>
   <td><code>onloadstart</code></td>
   <td>获取开始</td>
  </tr>
  <tr>
   <td><code>onprogress</code></td>
   <td>数据传输进行中</td>
  </tr>
  <tr>
   <td><code>onabort</code></td>
   <td>获取操作终止</td>
  </tr>
  <tr>
   <td><code>onerror</code></td>
   <td>获取失败</td>
  </tr>
  <tr>
   <td><code>onload</code></td>
   <td>获取成功</td>
  </tr>
  <tr>
   <td><code>ontimeout</code></td>
   <td>获取操作在用户规定的时间内未完成</td>
  </tr>
  <tr>
   <td><code>onloadend</code></td>
   <td>获取完成（不论成功与否）</td>
  </tr>
 </tbody>
</table>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>

{{Compat}}
