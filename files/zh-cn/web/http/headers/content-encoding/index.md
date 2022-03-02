---
title: Content-Encoding
slug: Web/HTTP/Headers/Content-Encoding
tags:
  - 超文本传输协议
  - 首部
translation_of: Web/HTTP/Headers/Content-Encoding
---
<div>{{HTTPSidebar}}</div>

<p><strong><code>Content-Encoding</code></strong> 是一个实体消息首部，用于对特定媒体类型的数据进行压缩。当这个首部出现的时候，它的值表示消息主体进行了何种方式的内容编码转换。这个消息首部用来告知客户端应该怎样解码才能获取在 <code>Content-Type</code> 中标示的媒体类型内容。</p>

<p>一般建议对数据尽可能地进行压缩，因此才有了这个消息首部的出现。不过对于特定类型的文件来说，比如jpeg图片文件，已经是进行过压缩的了。有时候再次进行额外的压缩无助于负载体积的减小，反而有可能会使其增大。</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Header type</th>
   <td>{{Glossary("Entity header")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name")}}</th>
   <td>no</td>
  </tr>
 </tbody>
</table>

<h2 id="语法">语法</h2>

<pre class="syntaxbox">Content-Encoding: gzip
Content-Encoding: compress
Content-Encoding: deflate
Content-Encoding: identity
Content-Encoding: br
</pre>

<h2 id="指令">指令</h2>

<dl>
 <dt><code>gzip</code></dt>
 <dd>表示采用  <a href="http://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77">Lempel-Ziv coding</a> (LZ77) 压缩算法，以及32位CRC校验的编码方式。这个编码方式最初由 UNIX 平台上的 <em>gzip</em> 程序采用。出于兼容性的考虑， HTTP/1.1 标准提议支持这种编码方式的服务器应该识别作为别名的 <code>x-gzip </code>指令。</dd>
 <dt><code>compress</code></dt>
 <dd>采用 <a href="http://en.wikipedia.org/wiki/LZW">Lempel-Ziv-Welch</a> (LZW) 压缩算法。这个名称来自UNIX系统的 <em>compress</em> 程序，该程序实现了前述算法。<br>
 与其同名程序已经在大部分UNIX发行版中消失一样，这种内容编码方式已经被大部分浏览器弃用，部分因为专利问题（这项专利在2003年到期）。</dd>
 <dt><code>deflate</code></dt>
 <dd>采用 <a href="http://en.wikipedia.org/wiki/Zlib">zlib</a> 结构 (在 <a href="http://tools.ietf.org/html/rfc1950">RFC 1950</a> 中规定)，和 <a href="http://en.wikipedia.org/wiki/DEFLATE"><em>deflate</em></a> 压缩算法(在 <a href="http://tools.ietf.org/html/rfc1952">RFC 1951</a> 中规定)。</dd>
 <dt><code>identity</code></dt>
 <dd>用于指代自身（例如：未经过压缩和修改）。除非特别指明，这个标记始终可以被接受。</dd>
 <dt><code>br</code></dt>
 <dd>表示采用 <a href="https://en.wikipedia.org/wiki/Brotli">Brotli</a> 算法的编码方式。</dd>
</dl>

<h2 id="示例">示例</h2>

<h3 id="使用_gzip_方式进行压缩">使用 gzip 方式进行压缩</h3>

<p><br>
 客户端可以事先声明一系列的可以支持压缩模式，与请求一齐发送。 {{HTTPHeader("Accept-Encoding")}} 这个首部就是用来进行这种内容编码形式协商的：</p>

<pre>Accept-Encoding: gzip, deflate</pre>

<p>服务器在 <code>Content-Encoding</code> 响应首部提供了实际采用的压缩模式：</p>

<pre>Content-Encoding: gzip</pre>

<p>需要注意的是，服务器端并不强制要求一定使用何种压缩模式。采用哪种压缩方式高度依赖于服务器端的设置，及其所采用的模块。</p>

<h2 id="规范">规范</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Title</th>
  </tr>
  <tr>
   <td>{{RFC("7231", "Content-Encoding", "3.1.2.2")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
  <tr>
   <td><a href="http://www.ietf.org/id/draft-alakuijala-brotli">http://www.ietf.org/id/draft-alakuijala-brotli</a></td>
   <td>Brotli Compressed Data Format</td>
  </tr>
 </tbody>
</table>

<h2 id="浏览器兼容性">浏览器兼容性</h2>

<p>{{Compat("http.headers.Content-Encoding")}}</p>

<h2 id="相关内容">相关内容</h2>

<ul>
 <li>{{HTTPHeader("Accept-Encoding")}}</li>
 <li>{{HTTPHeader("Transfer-Encoding")}}</li>
</ul>
