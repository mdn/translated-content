---
title: WebGL の型
slug: Web/API/WebGL_API/Types
translation_of: Web/API/WebGL_API/Types
---
<div>{{WebGLSidebar}}</div>

<p><a href="/ja/docs/Web/API/WebGL_API">WebGL</a> インターフェースでは次の型が使用されます。</p>

<h2 id="WebGL_1">WebGL 1</h2>

<p>これらの型は {{domxref("WebGLRenderingContext")}} 内で使用されます。</p>

<table class="standard-table">
 <tbody>
  <tr>
   <td class="header">型</td>
   <td class="header">Web IDL 型</td>
   <td class="header">説明</td>
  </tr>
  <tr>
   <td><code>GLenum</code></td>
   <td><code>unsigned long</code></td>
   <td>
    <p>列挙に使用されます。<a href="/ja/docs/Web/API/WebGL_API/Constants">定数</a>のリストも参照してください。</p>
   </td>
  </tr>
  <tr>
   <td><code>GLboolean</code></td>
   <td><code>boolean</code></td>
   <td>A {{jsxref("Boolean")}}.</td>
  </tr>
  <tr>
   <td><code>GLbitfield</code></td>
   <td><code>unsigned long</code></td>
   <td>A bit field that stores multiple, logical bits. Used for example in {{domxref("WebGLRenderingContext.clear()")}}.</td>
  </tr>
  <tr>
   <td><code>GLbyte</code></td>
   <td><code>byte</code></td>
   <td>8-bit twos complement signed integer.</td>
  </tr>
  <tr>
   <td><code>GLshort</code></td>
   <td><code>short</code></td>
   <td>16-bit twos complement signed integer.</td>
  </tr>
  <tr>
   <td><code>GLint</code></td>
   <td><code>long</code></td>
   <td>32-bit twos complement signed integer.</td>
  </tr>
  <tr>
   <td><code>GLsizei</code></td>
   <td><code>long</code></td>
   <td>Used for sizes (e.g. width and height of the drawing buffer).</td>
  </tr>
  <tr>
   <td><code>GLintptr</code></td>
   <td><code>long long</code></td>
   <td>Special type for pointer arithmetic.</td>
  </tr>
  <tr>
   <td><code>GLsizeiptr</code></td>
   <td><code>long long</code></td>
   <td>Special type for pointer arithmetic.</td>
  </tr>
  <tr>
   <td><code>GLubyte</code></td>
   <td><code>octet</code></td>
   <td>8-bit twos complement unsigned integer.</td>
  </tr>
  <tr>
   <td><code>GLushort</code></td>
   <td><code>unsigned short</code></td>
   <td>16-bit twos complement unsigned integer.</td>
  </tr>
  <tr>
   <td><code>GLuint</code></td>
   <td><code>unsigned long</code></td>
   <td>32-bit twos complement unsigned integer.</td>
  </tr>
  <tr>
   <td><code>GLfloat</code></td>
   <td><code>unrestricted float</code></td>
   <td>32-bit IEEE floating point number.</td>
  </tr>
  <tr>
   <td><code>GLclampf</code></td>
   <td><code>unrestricted float</code></td>
   <td>Clamped 32-bit IEEE floating point number.</td>
  </tr>
 </tbody>
</table>

<h2 id="WebGL_2">WebGL 2</h2>

<p>これらの型は {{domxref("WebGL2RenderingContext")}} で使用されます。すべての WebGL 1 タイプも使用されます。</p>

<table class="standard-table">
 <tbody>
  <tr>
   <td class="header">型</td>
   <td class="header">Web IDL 型</td>
   <td class="header">説明</td>
  </tr>
  <tr>
   <td><code>GLint64</code></td>
   <td><code>long long</code></td>
   <td>符号付き 64 ビット整数</td>
  </tr>
 </tbody>
</table>

<h2 id="WebGL_拡張">WebGL 拡張</h2>

<p>これらの型は、<a href="/ja/docs/Web/API/WebGL_API/Using_Extensions">WebGL 拡張</a>内で使用されます。</p>

<table class="standard-table">
 <tbody>
  <tr>
   <td class="header">型</td>
   <td class="header">Web IDL 型</td>
   <td class="header">説明</td>
  </tr>
  <tr>
   <td><code>GLuint64EXT</code></td>
   <td><code>long long</code></td>
   <td>符号なし 64 ビット整数</td>
  </tr>
 </tbody>
</table>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">ステータス</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('WebGL', "#5.1", "Types")}}</td>
   <td>{{Spec2('WebGL')}}</td>
   <td>初期定義</td>
  </tr>
  <tr>
   <td>{{SpecName('WebGL2', "#3.1", "Types")}}</td>
   <td>{{Spec2('WebGL2')}}</td>
   <td>追加のタイプを定義</td>
  </tr>
  <tr>
   <td>{{SpecName('EXT_disjoint_timer_query', "", "GLuint64EXT")}}</td>
   <td>{{Spec2('EXT_disjoint_timer_query')}}</td>
   <td><code>GLuint64EXT</code> の追加</td>
  </tr>
 </tbody>
</table>

<h2 id="あわせて参照">あわせて参照</h2>

<ul>
 <li>{{domxref("WebGLRenderingContext")}}</li>
</ul>
