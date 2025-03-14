---
title: WebGL 拡張機能の使用
slug: Web/API/WebGL_API/Using_Extensions
---

{{DefaultAPISidebar("WebGL")}}

WebGL は姉妹 API (OpenGL や OpenGL ES) と同様に、拡張機能に対応しています。拡張機能の完全な一覧は [Khronos WebGL Extension レジストリー](https://www.khronos.org/registry/webgl/extensions/)で確認できます。

> [!NOTE]
> 他の GL API とは異なり、WebGL の拡張機能は明示的に要求した場合に限り使用できます。

## 正規拡張機能名とベンダー接頭辞と設定

拡張機能は公式に認められる前に、ブラウザーベンダーが対応する場合があります（ただし、草案段階にあるときに限ります）。このとき、拡張機能名にベンダー接頭辞（`MOZ_` や `WEBKIT_` など）を付加するか、ブラウザーの設定を切り替えた場合に限り使用できるようにする可能性があります。

最先端の拡張機能を使用したい場合、および公認されたときにも動作し続けるようにしたい（もちろん、その拡張機能が互換性を失うように変更されていないものとします）場合は、ベンダー拡張機能名だけでなく正規拡張機能名も問い合わせます。例えば以下のようにします。

```js
var ext =
  gl.getExtension("OES_vertex_array_object") ||
  gl.getExtension("MOZ_OES_vertex_array_object") ||
  gl.getExtension("WEBKIT_OES_vertex_array_object");
```

ベンダー接頭辞は次第に採用されなくなっており、ほとんどのブラウザーは実験的な拡張機能をベンダー接頭辞ではなく機能フラグで制御するように実装しています。

機能フラグは以下のようなものです。

- Firefox では `webgl.enable-draft-extensions`
- Chromium ベースのブラウザー (Chrome、Opera) では `chrome://flags/#enable-webgl-draft-extensions`

## 名前付けの慣習

WebGL 拡張機能には、 "ANGLE", "OES", "EXT", "WEBGL" という接頭辞が付きます。これらの接頭辞は、由来や意図を反映しています。

- `ANGLE_`: [ANGLE ライブラリー](https://en.wikipedia.org/wiki/ANGLE_%28software%29) の作者によって書かれた拡張機能です。
- `OES_` と `KHR_`: OpenGL ES (OES) または OpenGL API 拡張の機能をミラーする拡張で、それぞれのアーキテクチャ検討委員会 (Khronos) によって承認されたものです。
- `OVR_`: 仮想現実に最適化した拡張機能です。
- `EXT_`: 他の OpenGL ES や OpenGL API の拡張をミラーリングする拡張機能です。
- `WEBGL_`: WebGL に特化した拡張機能で、複数のウェブブラウザーに対応することを意図しています。また、 OpenGL ES や OpenGL API を起源とし、その動作が大幅に変更された拡張機能にも使用されます。

## 利用可能な拡張機能の問い合わせ

WebGL コンテキストは、利用できる拡張機能を問い合わせる機能に対応しています。

```js
var available_extensions = gl.getSupportedExtensions();
```

{{domxref("WebGLRenderingContext.getSupportedExtensions()")}} メソッドは、サポートする拡張機能を収めた文字列配列を返します。

## 拡張機能一覧

現行の拡張機能の一覧:

### 拡張機能

- {{domxref("ANGLE_instanced_arrays")}}
- {{domxref("EXT_blend_minmax")}}
- {{domxref("EXT_color_buffer_float")}}
- {{domxref("EXT_color_buffer_half_float")}}
- {{domxref("EXT_disjoint_timer_query")}}
- {{domxref("EXT_float_blend")}} {{experimental_inline}}
- {{domxref("EXT_frag_depth")}}
- {{domxref("EXT_shader_texture_lod")}}
- {{domxref("EXT_sRGB")}}
- {{domxref("EXT_texture_compression_bptc")}}
- {{domxref("EXT_texture_compression_rgtc")}}
- {{domxref("EXT_texture_filter_anisotropic")}}
- {{domxref("EXT_texture_norm16")}}
- {{domxref("KHR_parallel_shader_compile")}}
- {{domxref("OES_element_index_uint")}}
- {{domxref("OES_fbo_render_mipmap")}}
- {{domxref("OES_standard_derivatives")}}
- {{domxref("OES_texture_float")}}
- {{domxref("OES_texture_float_linear")}}
- {{domxref("OES_texture_half_float")}}
- {{domxref("OES_texture_half_float_linear")}}
- {{domxref("OES_vertex_array_object")}}
- {{domxref("OVR_multiview2")}}
- {{domxref("WEBGL_color_buffer_float")}}
- {{domxref("WEBGL_compressed_texture_astc")}}
- {{domxref("WEBGL_compressed_texture_etc")}}
- {{domxref("WEBGL_compressed_texture_etc1")}}
- {{domxref("WEBGL_compressed_texture_pvrtc")}}
- {{domxref("WEBGL_compressed_texture_s3tc")}}
- {{domxref("WEBGL_compressed_texture_s3tc_srgb")}}
- {{domxref("WEBGL_debug_renderer_info")}}
- {{domxref("WEBGL_debug_shaders")}}
- {{domxref("WEBGL_depth_texture")}}
- {{domxref("WEBGL_draw_buffers")}}
- {{domxref("WEBGL_lose_context")}}
- {{domxref("WEBGL_multi_draw")}}

## 拡張機能の有効化

拡張機能を使用する前に、 {{domxref("WebGLRenderingContext.getExtension()")}} を使用して機能を有効化しなければなりません。例えば以下のようにします。

```js
var float_texture_ext = gl.getExtension("OES_texture_float");
```

拡張機能に対応していない場合の戻り値は `null`、対応している場合の返値は拡張機能オブジェクトです。

## 拡張機能オブジェクト

WebGL のコア仕様で使用できないシンボルや関数を拡張機能で定義している場合は、`gl.getExtension()` の呼び出しによって返される拡張機能オブジェクトでそれらを使用できます。

## 関連情報

- {{domxref("WebGLRenderingContext.getSupportedExtensions()")}}
- {{domxref("WebGLRenderingContext.getExtension()")}}
- [webglreport.com](https://webglreport.com/)
- [webglstats.com](http://webglstats.com)
