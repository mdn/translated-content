---
title: SharedArrayBuffer
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer
tags:
  - ArrayBuffer
  - Service Worker
  - Shared Memory
  - SharedArrayBuffer
  - TypedArrays
  - Web Worker
  - Worker
  - 共享内存
  - 实验的
  - 构造函数
translation_of: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer
---
<div>{{JSRef}}</div>

<p><strong><code>SharedArrayBuffer</code></strong> 对象用来表示一个通用的，固定长度的原始二进制数据缓冲区，类似于 {{jsxref("ArrayBuffer")}} 对象，它们都可以用来在共享内存（shared memory）上创建视图。与 <code>ArrayBuffer</code> 不同的是，<code><strong>SharedArrayBuffer</strong></code> 不能被分离。</p>

<div class="note">
  <p><strong>备注：</strong>作为对<a href="https://meltdownattack.com/">Spectre</a>的响应，所有主流浏览器均默认于2018年1月5日禁用<code>SharedArrayBuffer</code>。 Chrome在启用了网站隔离功能的平台上的<a href="https://bugs.chromium.org/p/chromium/issues/detail?id=821270">v67中重新启用</a>了该功能，以防止出现Spectre风格的漏洞。</p>
</div>

<p>{{EmbedInteractiveExample("pages/js/sharedarraybuffer-constructor.html")}}</p>

<h2 id="语法">语法</h2>

<pre class="syntaxbox">new SharedArrayBuffer(length)
</pre>

<h3 id="参数">参数</h3>

<dl>
 <dt><code>length</code></dt>
 <dd>所创建的数组缓冲区的大小，以字节(byte)为单位。</dd>
</dl>

<h3 id="返回值">返回值</h3>

<p>一个大小指定的新 <code>SharedArrayBuffer</code> 对象。其内容被初始化为 0。</p>

<h2 id="描述">描述</h2>

<h3 id="分配及共享内存">分配及共享内存</h3>

<p>为了将一个{{jsxref("SharedArrayBuffer")}} 对象从一个用户代理共享到另一个用户代理（另一个页面的主进程或者当前页面的一个 <code>worker</code> ）从而实现共享内存，我们需要运用 <code><a href="/en-US/docs/Web/API/Worker/postMessage">postMessage</a></code> 和结构化克隆算法（ <a href="/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm">structured cloning</a> ）。</p>

<p>结构化克隆算法接收被映射到一个新的 <code>SharedArrayBuffers</code> 对象上的 <code>SharedArrayBuffers</code> 对象与 <code>TypedArrays</code> 对象。在这两种映射下，这个新的 <code>SharedArrayBuffer</code> 对象会被传递到目标用户代理的接收函数上，导致在目标用户代理产生了一个新的私有 <code>SharedArrayBuffer</code> 对象（正如 {{jsxref("ArrayBuffer")}} 一样）。然而，这两个 <code>SharedArrayBuffer</code> 对象指向的共享数据块其实是同一个，并且在某一代理中的一个块的副作用将最终导致另一个代理具有可见性。</p>

<pre class="brush: js">let sab = new SharedArrayBuffer(1024);
worker.postMessage(sab);
</pre>

<h3 id="通过原子操作更新及同步来共享内存">通过原子操作更新及同步来共享内存</h3>

<p>共享内存能被同时创建和更新于工作者线程或主线程。依赖于系统（CPU，操作系统，浏览器），变化传递给所有上下文环境需要一段时间。需要通过 {{jsxref("Atomics", "atomic", "", 1)}} 操作来进行同步。</p>

<h3 id="接受_SharedArrayBuffer_对象的API">接受 <code>SharedArrayBuffer</code> 对象的API</h3>

<ul>
 <li>{{domxref("WebGLRenderingContext.bufferData()")}}</li>
 <li>{{domxref("WebGLRenderingContext.bufferSubData()")}}</li>
 <li>{{domxref("WebGL2RenderingContext.getBufferSubData()")}}</li>
</ul>

<h3 id="需要_new_运算符来构造">需要 <code>new</code> 运算符来构造</h3>

<p><code>SharedArrayBuffer</code> 需要 {{jsxref("Operators/new", "new")}} 运算符来构造一个构造函数. 作为函数来调用一个 <code>SharedArrayBuffer</code> 构造函数时，如果不用 <code>new</code> 运算符，将会抛出一个 {{jsxref("TypeError")}} 异常。</p>

<pre class="brush: js example-bad">var sab = SharedArrayBuffer(1024);
// TypeError: calling a builtin SharedArrayBuffer constructor
// 必须用 new 来构造</pre>

<pre class="brush: js example-good">var sab = new SharedArrayBuffer(1024);</pre>

<h2 id="属性">属性</h2>

<dl>
 <dt><code>SharedArrayBuffer.length</code></dt>
 <dd><code>SharedArrayBuffer</code> 构造函数的 length 属性值为1。 </dd>
 <dt>{{jsxref("SharedArrayBuffer.prototype")}}</dt>
 <dd>允许所有 <code>SharedArrayBuffer</code> 对象的附加属性。</dd>
</dl>

<h2 id="SharedArrayBuffer_原型对象"><code>SharedArrayBuffer</code> 原型对象</h2>

<p>所有 <code>SharedArrayBuffer</code> 实例继承自 {{jsxref("SharedArrayBuffer.prototype")}}。</p>

<h3 id="属性_2">属性</h3>

<p>{{page('zh-CN/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/prototype','Properties')}}</p>

<h3 id="方法">方法</h3>

<p>{{page('zh-CN/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/prototype','Methods')}}</p>

<h2 id="规范">规范</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">规范</th>
   <th scope="col">状态</th>
   <th scope="col">备注</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-sharedarraybuffer-objects', 'SharedArrayBuffer')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td>Initial definition in ES2017.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES8', '#sec-sharedarraybuffer-objects', 'SharedArrayBuffer')}}</td>
   <td>{{Spec2('ES8')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="浏览器兼容性">浏览器兼容性</h2>

<p>{{Compat("javascript.builtins.SharedArrayBuffer")}}</p>

<h2 id="相关链接">相关链接</h2>

<ul>
 <li>{{jsxref("Atomics")}}</li>
 <li>{{jsxref("ArrayBuffer")}}</li>
 <li><a href="/en-US/docs/Web/JavaScript/Typed_arrays">JavaScript typed arrays</a></li>
 <li><a href="/en-US/docs/Web/API/Web_Workers_API">Web Workers</a></li>
 <li><a href="https://github.com/lars-t-hansen/parlib-simple">parlib-simple </a>– a simple library providing synchronization and work distribution abstractions.</li>
 <li><a href="https://github.com/tc39/ecmascript_sharedmem/blob/master/TUTORIAL.md">Shared Memory – a brief tutorial</a></li>
 <li>
  <p><a href="https://hacks.mozilla.org/2016/05/a-taste-of-javascripts-new-parallel-primitives/">A Taste of JavaScript’s New Parallel Primitives – Mozilla Hacks</a></p>
 </li>
</ul>
