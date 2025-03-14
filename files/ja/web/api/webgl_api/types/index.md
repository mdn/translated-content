---
title: WebGL の型
slug: Web/API/WebGL_API/Types
l10n:
  sourceCommit: 621c7978886787ca66bc5e90e457cf1466e58d35
---

{{DefaultAPISidebar("WebGL")}}

以下の型が [WebGL](/ja/docs/Web/API/WebGL_API) のインターフェイスで使用されます。

## WebGL 1

これらの型は {{domxref("WebGLRenderingContext")}} 内で使用されます。

<table class="no-markdown">
  <thead>
    <tr>
      <th>型</th>
      <th>Web IDL 型</th>
      <th>説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>GLenum</code></td>
      <td><code>unsigned long</code></td>
      <td>
        列挙型に使用します。<a href="/ja/docs/Web/API/WebGL_API/Constants">定数</a>の一覧もご覧ください。
      </td>
    </tr>
    <tr>
      <td><code>GLboolean</code></td>
      <td><code>boolean</code></td>
      <td>論理値です。</td>
    </tr>
    <tr>
      <td><code>GLbitfield</code></td>
      <td><code>unsigned long</code></td>
      <td>
        複数の論理ビットを格納するビットフィールドです。例えば {{domxref("WebGLRenderingContext.clear()")}} で使用されます。
      </td>
    </tr>
    <tr>
      <td><code>GLbyte</code></td>
      <td><code>byte</code></td>
      <td>8 ビット 2 の補数符号付き整数です。</td>
    </tr>
    <tr>
      <td><code>GLshort</code></td>
      <td><code>short</code></td>
      <td>16 ビット 2 の補数符号付き整数です。</td>
    </tr>
    <tr>
      <td><code>GLint</code></td>
      <td><code>long</code></td>
      <td>32 ビット 2 の補数符号付き整数です。</td>
    </tr>
    <tr>
      <td><code>GLsizei</code></td>
      <td><code>long</code></td>
      <td>サイズ（描画バッファーの幅や高さなど）に使用します。</td>
    </tr>
    <tr>
      <td><code>GLintptr</code></td>
      <td><code>long long</code></td>
      <td>ポインター演算用の特殊型です。</td>
    </tr>
    <tr>
      <td><code>GLsizeiptr</code></td>
      <td><code>long long</code></td>
      <td>ポインター演算用の特殊型です。</td>
    </tr>
    <tr>
      <td><code>GLubyte</code></td>
      <td><code>octet</code></td>
      <td>8 ビット符号なし整数です。</td>
    </tr>
    <tr>
      <td><code>GLushort</code></td>
      <td><code>unsigned short</code></td>
      <td>16 ビット符号なし整数です。</td>
    </tr>
    <tr>
      <td><code>GLuint</code></td>
      <td><code>unsigned long</code></td>
      <td>32 ビット符号なし整数です。</td>
    </tr>
    <tr>
      <td><code>GLfloat</code></td>
      <td><code>unrestricted float</code></td>
      <td>32 ビット IEEE 浮動小数点数です。</td>
    </tr>
    <tr>
      <td><code>GLclampf</code></td>
      <td><code>unrestricted float</code></td>
      <td>限界つき 32 ビット IEEE 浮動小数点数です。</td>
    </tr>
  </tbody>
</table>

## WebGL 2

これらの型は {{domxref("WebGL2RenderingContext")}} で使用されます。すべての WebGL 1 の型も使用されます。

| 型        | Web IDL 型  | 説明                   |
| --------- | ----------- | ---------------------- |
| `GLint64` | `long long` | 符号付き 64 ビット整数 |

## WebGL 拡張

これらの型は、[WebGL 拡張](/ja/docs/Web/API/WebGL_API/Using_Extensions)内で使用されます。

| 型            | Web IDL 型  | 説明                   |
| ------------- | ----------- | ---------------------- |
| `GLuint64EXT` | `long long` | 符号なし 64 ビット整数 |

## 仕様書

{{Specifications}}

## 関連情報

- {{domxref("WebGLRenderingContext")}}
