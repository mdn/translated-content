---
title: WebGLRenderingContext.linkProgram()
slug: Web/API/WebGLRenderingContext/linkProgram
translation_of: Web/API/WebGLRenderingContext/linkProgram
---
<div>{{APIRef("WebGL")}}</div>

<p><a href="/ja/docs/Web/API/WebGL_API">WebGL API</a> の <strong><code>WebGLRenderingContext.linkProgram()</code></strong> メソッドは、与えられた {{domxref("WebGLProgram")}} に接続された頂点とフラグメントのシェーダーをリンクします。</p>

<h2 id="構文">構文</h2>

<pre class="syntaxbox notranslate">void <var>gl</var>.linkProgram(<var>program</var>);
</pre>

<h3 id="引数">引数</h3>

<dl>
 <dt>program</dt>
 <dd>リンクする {{domxref("WebGLProgram")}}。</dd>
</dl>

<h3 id="返り値">返り値</h3>

<p>ありません。</p>

<h2 id="例">例</h2>

<pre class="brush: js notranslate">var program = gl.createProgram();

// Attach pre-existing shaders
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);

gl.linkProgram(program);

<code>if ( !gl.getProgramParameter( program, gl.LINK_STATUS) ) {
  var info = gl.getProgramInfoLog(program);
  throw new Error('Could not compile WebGL program. \n\n' + info);
}</code></pre>

<h2 id="仕様策定状況">仕様策定状況</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">策定状況</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('WebGL', "#5.14.9", "linkProgram")}}</td>
   <td>{{Spec2('WebGL')}}</td>
   <td>初回定義。</td>
  </tr>
  <tr>
   <td>{{SpecName('OpenGL ES 2.0', "glLinkProgram.xml", "glLinkProgram")}}</td>
   <td>{{Spec2('OpenGL ES 2.0')}}</td>
   <td>OpenGL API のマニュアルページ。</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザーの対応">ブラウザーの対応</h2>

<p>{{Compat("api.WebGLRenderingContext.linkProgram")}}</p>

<h2 id="関連項目">関連項目</h2>

<ul>
 <li>{{domxref("WebGLRenderingContext.createProgram()")}}</li>
 <li>{{domxref("WebGLRenderingContext.deleteProgram()")}}</li>
 <li>{{domxref("WebGLRenderingContext.isProgram()")}}</li>
 <li>{{domxref("WebGLRenderingContext.useProgram()")}}</li>
 <li>{{domxref("WebGLRenderingContext.validateProgram()")}}</li>
 <li>{{domxref("WebGLRenderingContext.getProgramParameter()")}}</li>
 <li>{{domxref("WebGLRenderingContext.getProgramInfoLog()")}}</li>
</ul>
