---
title: WebGL 拡張機能を使用する
slug: Web/API/WebGL_API/Using_Extensions
tags:
  - Advanced
  - WebGL
translation_of: Web/API/WebGL_API/Using_Extensions
---
<div>{{WebGLSidebar}}</div>

<p>WebGL は姉妹 API (OpenGL や OpenGL ES) と同様に、拡張機能をサポートします。拡張機能の完全な一覧は <a href="http://www.khronos.org/registry/webgl/extensions/">khronos webgl extension registry</a> で確認できます。</p>

<div class="note"><strong>注記:</strong> 他の GL API とは異なり、WebGL の拡張機能は明示的に要求した場合に限り使用できます。</div>

<h2 id="Canonical_extension_names_vendor_prefixes_and_preferences" name="Canonical_extension_names_vendor_prefixes_and_preferences">Canonical 拡張機能名とベンダー接頭辞と設定</h2>

<p>拡張機能は公式に認められる前に、ブラウザベンダーがサポートする場合があります (ただし、草案段階にあるときに限ります)。このとき、拡張機能名にベンダー接頭辞 (<code>MOZ_</code> や <code>WEBKIT_</code> など) を付加するか、ブラウザの設定を切り替えた場合に限り使用できるようにする可能性があります。</p>

<p>最先端の拡張機能を使用したい場合、および公認されたときにも動作し続けるようにしたい (もちろん、その拡張機能が互換性を失うように変更されていないものとします) 場合は、ベンダー拡張機能名だけでなく canonical 拡張機能名も問い合わせます。例えば以下のようにします:</p>

<pre class="brush:js">var ext = (
  gl.getExtension('OES_vertex_array_object') ||
  gl.getExtension('MOZ_OES_vertex_array_object') ||
  gl.getExtension('WEBKIT_OES_vertex_array_object')
);
</pre>

<p>ベンダー接頭辞は次第に採用されなくなっており、ほとんどのブラウザは実験的な拡張機能をベンダー接頭辞ではなく機能フラグで制御するように実装しています。</p>

<p>機能フラグは以下のようなものです:</p>

<ul>
 <li>Firefox では <code>webgl.enable-draft-extensions</code></li>
 <li>Chromium ベースのブラウザ (Chrome、Opera) では <code>chrome://flags/#enable-webgl-draft-extensions</code></li>
</ul>

<h2 id="Querying_available_extensions" name="Querying_available_extensions">使用可能な拡張機能を問い合わせる</h2>

<p>WebGL コンテキストは、使用できる拡張機能を問い合わせる機能をサポートしています。</p>

<pre class="brush:js">var available_extensions = gl.getSupportedExtensions();</pre>

<p>{{domxref("WebGLRenderingContext.getSupportedExtensions()")}} メソッドは、サポートする拡張機能を収めた文字列配列を返します。</p>

<h2 id="Extension_list" name="Extension_list">拡張機能一覧</h2>

<p>現行の拡張機能の一覧:</p>

<p>{{page("ja/docs/Web/API/WebGL_API", "Extension_interfaces")}}</p>

<h2 id="Enabling_an_extension" name="Enabling_an_extension">拡張機能を有効化する</h2>

<p>拡張機能を使用する前に、{{domxref("WebGLRenderingContext.getExtension()")}} を使用して機能を有効化しなければなりません。例えば:</p>

<pre class="brush:js">var float_texture_ext = gl.getExtension('OES_texture_float');</pre>

<p>拡張機能をサポートしていない場合の戻り値は <code>null</code>、サポートしている場合の戻り値は拡張機能オブジェクトです。</p>

<h2 id="Extension_objects" name="Extension_objects">拡張機能オブジェクト</h2>

<p>WebGL のコア仕様で使用できないシンボルや関数を拡張機能で定義している場合は、<code>gl.getExtension()</code> の呼び出しによって返される拡張機能オブジェクトでそれらを使用できます。</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザ実装状況</h2>

<div>{{CompatibilityTable}}</div>

<div id="compat-desktop">
<table class="compat-table">
 <tbody>
  <tr>
   <th>機能</th>
   <th>Chrome</th>
   <th>Firefox (Gecko)</th>
   <th>Internet Explorer</th>
   <th>Opera</th>
   <th>Safari</th>
  </tr>
  <tr>
   <td>基本サポート</td>
   <td>9</td>
   <td>{{CompatGeckoDesktop("2.0")}}</td>
   <td>11</td>
   <td>12</td>
   <td>5.1</td>
  </tr>
  <tr>
   <td><code>ANGLE_instanced_arrays</code></td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatGeckoDesktop("33.0")}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
  </tr>
  <tr>
   <td><code>EXT_blend_minmax</code></td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatGeckoDesktop("33.0")}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
  </tr>
  <tr>
   <td><code>EXT_color_buffer_half_float</code></td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatGeckoDesktop("30.0")}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
  </tr>
  <tr>
   <td><code>EXT_disjoint_timer_query</code></td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatGeckoDesktop("41.0")}} [1]</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
  </tr>
  <tr>
   <td><code>EXT_frag_depth</code></td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatGeckoDesktop("30.0")}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
  </tr>
  <tr>
   <td><code>EXT_sRGB</code></td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatGeckoDesktop("28.0")}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
  </tr>
  <tr>
   <td><code>EXT_shader_texture_lod</code></td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatGeckoDesktop("34.0")}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
  </tr>
  <tr>
   <td><code>EXT_texture_filter_anisotropic</code></td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatGeckoDesktop("17.0")}} [2]</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
  </tr>
  <tr>
   <td><code>OES_element_index_uint</code></td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatGeckoDesktop("24.0")}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
  </tr>
  <tr>
   <td><code>OES_standard_derivatives</code></td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatGeckoDesktop("10.0")}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
  </tr>
  <tr>
   <td><code>OES_texture_float</code></td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatGeckoDesktop("6.0")}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
  </tr>
  <tr>
   <td><code>OES_texture_float_linear</code></td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatGeckoDesktop("24.0")}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
  </tr>
  <tr>
   <td><code>OES_texture_half_float</code></td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatGeckoDesktop("29.0")}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
  </tr>
  <tr>
   <td><code>OES_texture_half_float_linear</code></td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatGeckoDesktop("30.0")}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
  </tr>
  <tr>
   <td><code>OES_vertex_array_object</code></td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatGeckoDesktop("25.0")}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
  </tr>
  <tr>
   <td><code>WEBGL_color_buffer_float</code></td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatGeckoDesktop("30.0")}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
  </tr>
  <tr>
   <td><code>WEBGL_compressed_texture_atc</code></td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatGeckoDesktop("18.0")}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
  </tr>
  <tr>
   <td><code>WEBGL_compressed_texture_etc1</code></td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatGeckoDesktop("30.0")}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
  </tr>
  <tr>
   <td><code>WEBGL_compressed_texture_pvrtc</code></td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatGeckoDesktop("18.0")}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
  </tr>
  <tr>
   <td><code>WEBGL_compressed_texture_s3tc</code></td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatGeckoDesktop("15.0")}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
  </tr>
  <tr>
   <td><code>WEBGL_debug_renderer_info</code></td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatGeckoDesktop("19.0")}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
  </tr>
  <tr>
   <td><code>WEBGL_debug_shaders</code></td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatGeckoDesktop("30.0")}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
  </tr>
  <tr>
   <td><code>WEBGL_depth_texture</code></td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatGeckoDesktop("17.0")}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
  </tr>
  <tr>
   <td><code>WEBGL_draw_buffers</code></td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatGeckoDesktop("28.0")}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
  </tr>
  <tr>
   <td><code>WEBGL_lose_context</code></td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatGeckoDesktop("19.0")}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
  </tr>
 </tbody>
</table>
</div>

<div id="compat-mobile">
<table class="compat-table">
 <tbody>
  <tr>
   <th>機能</th>
   <th>Android</th>
   <th>Chrome for Android</th>
   <th>Firefox Mobile (Gecko)</th>
   <th>IE Mobile</th>
   <th>Opera Mobile</th>
   <th>Safari Mobile</th>
  </tr>
  <tr>
   <td>基本サポート</td>
   <td>{{CompatVersionUnknown}}</td>
   <td>25</td>
   <td>{{CompatGeckoMobile("2.0")}}</td>
   <td>{{CompatVersionUnknown}}</td>
   <td>12</td>
   <td>8.0</td>
  </tr>
  <tr>
   <td><code>ANGLE_instanced_arrays</code></td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
  </tr>
  <tr>
   <td><code>EXT_blend_minmax</code></td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
  </tr>
  <tr>
   <td><code>EXT_color_buffer_half_float</code></td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
  </tr>
  <tr>
   <td><code>EXT_disjoint_timer_query</code></td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
  </tr>
  <tr>
   <td><code>EXT_frag_depth</code></td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
  </tr>
  <tr>
   <td><code>EXT_sRGB</code></td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
  </tr>
  <tr>
   <td><code>EXT_shader_texture_lod</code></td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
  </tr>
  <tr>
   <td><code>EXT_texture_filter_anisotropic</code></td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
  </tr>
  <tr>
   <td><code>OES_element_index_uint</code></td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
  </tr>
  <tr>
   <td><code>OES_standard_derivatives</code></td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
  </tr>
  <tr>
   <td><code>OES_texture_float</code></td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
  </tr>
  <tr>
   <td><code>OES_texture_float_linear</code></td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
  </tr>
  <tr>
   <td><code>OES_texture_half_float</code></td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
  </tr>
  <tr>
   <td><code>OES_texture_half_float_linear</code></td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
  </tr>
  <tr>
   <td><code>OES_vertex_array_object</code></td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
  </tr>
  <tr>
   <td><code>WEBGL_color_buffer_float</code></td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
  </tr>
  <tr>
   <td><code>WEBGL_compressed_texture_atc</code></td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
  </tr>
  <tr>
   <td><code>WEBGL_compressed_texture_etc1</code></td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
  </tr>
  <tr>
   <td><code>WEBGL_compressed_texture_pvrtc</code></td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
  </tr>
  <tr>
   <td><code>WEBGL_compressed_texture_s3tc</code></td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
  </tr>
  <tr>
   <td><code>WEBGL_debug_renderer_info</code></td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
  </tr>
  <tr>
   <td><code>WEBGL_debug_shaders</code></td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
  </tr>
  <tr>
   <td><code>WEBGL_depth_texture</code></td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
  </tr>
  <tr>
   <td><code>WEBGL_draw_buffers</code></td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
  </tr>
  <tr>
   <td><code>WEBGL_lose_context</code></td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
   <td>{{CompatUnknown}}</td>
  </tr>
 </tbody>
</table>
</div>

<p>[1] about:config で設定項目 <code>webgl.enable-draft-extensions</code> を切り替えなければなりません。</p>

<p>[2] これより前のバージョンでは接頭辞付きの <code>MOZ_EXT_texture_filter_anisotropic</code> になっています。</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("WebGLRenderingContext.getSupportedExtensions()")}}</li>
 <li>{{domxref("WebGLRenderingContext.getExtension()")}}</li>
 <li><a class="external external-icon" href="http://webglreport.com">webglreport.com</a></li>
 <li><a href="http://webglstats.com">webglstats.com</a></li>
</ul>

<p>--- 以降の内容は個別のページに移動する ---</p>

<h2 id="EXT_texture_filter_anisotropic" name="EXT_texture_filter_anisotropic">EXT_texture_filter_anisotropic</h2>

<p>異方性フィルタリングは、テクスチャを貼り付けた物体を斜めの角度から見る場合の、ミップマップテクスチャの品質を向上させます。ミップマップしか使用しないと、外見が全体的にグレーへ寄る傾向があります。</p>

<p>この<a href="http://www.khronos.org/registry/webgl/extensions/EXT_texture_filter_anisotropic/">拡張機能</a>では 2 つのシンボルを定義しています:</p>

<ul>
 <li><code>extension_object.MAX_TEXTURE_MAX_ANISOTROPY_EXT</code>: これは <code>gl.getParameter()</code> の呼び出し用の pname パラメータであり、使用できる最大の異方性を返します。</li>
 <li><code>extension_object.TEXTURE_MAX_ANISOTROPY_EXT</code>: これは <code>gl.texParameter()</code> や <code>gl.getTexParameter{f,i}()</code> の呼び出し用の pname パラメータであり、テクスチャに対して希望する異方性を設定します。</li>
</ul>

<h3 id="Example" name="Example">例</h3>

<pre class="brush:js">var texture = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, texture);
var ext = (
  gl.getExtension('EXT_texture_filter_anisotropic') ||
  gl.getExtension('MOZ_EXT_texture_filter_anisotropic') ||
  gl.getExtension('WEBKIT_EXT_texture_filter_anisotropic')
);
if (ext){
  var max = gl.getParameter(ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
  gl.texParameterf(gl.TEXTURE_2D, ext.TEXTURE_MAX_ANISOTROPY_EXT, max);
}
</pre>

<h2 id="WEBGL_compressed_texture_s3tc" name="WEBGL_compressed_texture_s3tc">WEBGL_compressed_texture_s3tc</h2>

<p>圧縮テクスチャは、GPU がテクスチャを保存するために必要なメモリ量を削減します。より高解像のテクスチャを使用する、あるいは同じ解像度でより多くのテクスチャを使用することができます。</p>

<p>この<a href="http://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_s3tc/">拡張機能</a>では 4 種類のテクスチャタイプを新たに定義します:</p>

<ul>
 <li><code>extension_object.COMPRESSED_RGB_S3TC_DXT1_EXT</code></li>
 <li><code>extension_object.COMPRESSED_RGBA_S3TC_DXT1_EXT</code></li>
 <li><code>extension_object.COMPRESSED_RGBA_S3TC_DXT3_EXT</code></li>
 <li><code>extension_object.COMPRESSED_RGBA_S3TC_DXT5_EXT</code></li>
</ul>

<p>圧縮テクスチャのフォーマットは、2 つの関数で使用できます: compressedTexImage2D および compressedTexSubImage2D</p>

<h3 id="Example_2" name="Example_2">例</h3>

<pre class="brush:js">var ext = (
  gl.getExtension("WEBGL_compressed_texture_s3tc") ||
  gl.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
  gl.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc")
);
var texture = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, texture);
gl.compressedTexImage2D(gl.TEXTURE_2D, 0, ext.COMPRESSED_RGBA_S3TC_DXT5_EXT, 512, 512, 0, textureData);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
</pre>
