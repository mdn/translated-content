---
title: WebGLRenderingContext.vertexAttribPointer()
slug: Web/API/WebGLRenderingContext/vertexAttribPointer
---

{{APIRef("WebGL")}}

[WebGL API](/ja/docs/Web/API/WebGL_API) の **`WebGLRenderingContext.vertexAttribPointer()`** メソッドは、現在 `gl.ARRAY_BUFFER` に結合されたバッファーを、現在の頂点バッファーオブジェクトの一般的な頂点属性に結合して、そのレイアウトを指定します。

## 構文

```
void gl.vertexAttribPointer(index, size, type, normalized, stride, offset);
```

### 引数

- `index`
  - : 頂点属性の場所を指定する {{domxref("GLuint")}}。この場所が変更されます。
- `size`
  - : 頂点属性あたりの要素数を指定する {{domxref("GLint")}}。1, 2, 3 か, 4 でなければいけません。
- `type`
  - : 配列の各要素のデータ型を指定する {{domxref("GLenum")}}。以下の値を取ることができます。
    - `gl.BYTE`: 符号付き 8 ビット整数、値は \[-128, 127]
    - `gl.SHORT`: 符号付き 16 ビット整数、値は \[-32768, 32767]
    - `gl.UNSIGNED_BYTE`: 符号無し 8 ビット整数、値は \[0, 255]
    - `gl.UNSIGNED_SHORT`: 符号無し 16 ビット整数、値は \[0, 65535]
    - `gl.FLOAT`: 32 ビット IEEE 浮動小数点数
    - {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}} を使用している場合、さらに以下の値を取ることができます。
      - `gl.HALF_FLOAT`: 16 ビット IEEE 浮動小数点数

- `normalized`
  - : 整数データを浮動小数点数へ型変換するとき、厳密な範囲へ正規化するかどうか指定する {{domxref("GLboolean")}}。
    - `gl.BYTE` と `gl.SHORT` の型では、true の場合に \[-1, 1] の値へ正規化されます。
    - `gl.UNSIGNED_BYTE` と `gl.UNSIGNED_SHORT` の型では、true の場合に \[0, 1] の値へ正規化されます。
    - `gl.FLOAT` と `gl.HALF_FLOAT` の型では、この引数に効果はありません。

- `stride`
  - : 連続する頂点属性の始端どうしの間にある、オフセット数をバイト単位で指定する {{domxref("GLsizei")}}。255 より大きくできません。stride が 0 の場合、属性はきっちり詰められていると想定されます。すなわち、アトリビュートはインターリーブされておらず、各属性は別れたブロックにあり、現在の頂点属性のすぐ隣に次の頂点属性が続きます。
- `offset`
  - : 頂点属性配列の最初の要素のオフセットをバイト単位で指定する {{domxref("GLintptr")}}。 `type` のバイト長の倍数でなければいけません。

### 返り値

ありません。

### 例外

- `offset` が負数の場合、`gl.INVALID_VALUE` エラーがスローされます。
- `stride` と `offset` がデータ型のサイズの倍数でない場合、`gl.INVALID_OPERATION` エラーがスローされます。
- WebGLBuffer が ARRAY_BUFFER ターゲットに結合されていない場合、`gl.INVALID_OPERATION` エラーがスローされます。
- {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}} を使用している場合、この頂点属性が頂点シェーダー内で整数として (例えば `vec4` の代わりに `uvec4` や `ivec4` で) 定義されていた場合、`gl.INVALID_OPERATION` エラーがスローされます。

## 説明

3D ジオメトリーをレンダリングしたいとしましょう。そのためには頂点シェーダーに頂点を供給する必要があります。各頂点には、位置、法線ベクトル、テクスチャー座標など、 {{jsxref("ArrayBuffer")}} で定義された頂点バッファーオブジェクト (VBO) に提供されるいくつかの属性があります。まず、使用したい {{domxref("WebGLBuffer")}} を `gl.ARRAY_BUFFER` に結合する必要があります。それから、この `gl.vertexAttribPointer()` メソッドで、属性が格納されている順序、それらの中のデータ型を指定します。加えて、ストライドを含める必要があります。これは、一つの頂点でのすべての属性の総バイト長です。さらに、 {{domxref("WebGLRenderingContext/enableVertexAttribArray", "gl.enableVertexAttribArray()")}} を呼んで、WebGL にこの属性を配列バッファーの値で埋めるように知らせます。

大抵は、あなたの 3D ジオメトリーはすでに厳格なバイナリ形式になっているので、メモリーレイアウトを把握するためにはその特定のフォーマットの仕様を読む必要があります。しかし、自分のフォーマットを設計していたり、ジオメトリーがテキストファイル ([Wavefront .obj files](https://en.wikipedia.org/wiki/Wavefront_.obj_file) など) にあって実行時に `ArrayBuffer` へ変換する必要がある場合、どのようにメモリ構築するかは自由に選択できます。より高いパフォーマンスのためには、属性を [インターリーブ](https://en.wikipedia.org/wiki/Interleaved_memory) してジオメトリを正確に表す最小のデータ型を使用してください。

頂点属性の最大数はグラフィックカードに依存しており、`gl.getParameter(gl.MAX_VERTEX_ATTRIBS)` を呼ぶとこの値を取得できます。ハイエンドグラフィックスカードでは、最大値は 16 です。ローエンドグラフィックスカードでは、値は低くなります。

### 属性の位置

各属性には、その位置を指定する必要があります。これは配列バッファー内の場所とは無関係なので、配列バッファーへの格納方法とは異なる順序で送信できます。以下の 2 つの選択肢があります。

- 自分でインデックスを指定します。 この場合、{{domxref("WebGLRenderingContext.bindAttribLocation()", "gl.bindAttribLocation()")}} を呼び出して、頂点シェーダーの名前付き属性を、使用するインデックスに接続します。 これは {{domxref("WebGLRenderingContext.linkProgram()", "gl.linkProgram()")}} を呼ぶ前に完了しなければなりません。それから、同じインデックスを `gl.vertexAttribPointer()` に与えます。
- 他方では、頂点シェーダをコンパイルするときは、グラフィックスカードによって割り当てられたインデックスを使用します。グラフィックスカードに応じて、インデックスは異なります。なので、{{domxref("WebGLRenderingContext.getAttribLocation()", "gl.getAttribLocation()")}} を呼んでインデックスを探す必要があります。それから、このインデックスを `gl.vertexAttribPointer()` に与えます。
  WebGL 2 を使用している場合、バーテックスシェーダー内で自身のインデックスを指定し、グラフィックカードに使用される既定値を上書きすることができます。例えば、`layout(location = 3) in vec4 position;` は `"position"` 属性をインデックス 3 に設定します。

### 整数属性

`ArrayBuffer` は整数と浮動小数点数の両方で埋めることができますが、属性は頂点シェーダーに送信されると常に浮動小数点数に変換されます。頂点シェーダーコードで整数を使用する必要がある場合は、頂点シェーダーで (`(int) floatNumber` のように) 浮動小数点数を整数に型変換し戻すことができます。または、WebGL 2 では{{domxref("WebGL2RenderingContext.vertexAttribIPointer()", "gl.vertexAttribIPointer()")}} を使用できます。

### 既定の属性値

バーテックスシェーダーコードはいくつかの属性を含みますが、各属性の値を指定する必要はありません。代わりに、全ての頂点に同一の既定の値を与えることができます。`{{domxref("WebGLRenderingContext.disableVertexAttribArray()", "gl.disableVertexAttribArray()")}}` を呼んで WebGL に既定の値を使うように知らせることができます。{{domxref("WebGLRenderingContext.enableVertexAttribArray()", "gl.enableVertexAttribArray()")}} を呼ぶと配列バッファーから値を読み出します。この配列バッファーは `gl.vertexAttribPointer()` で指定します。

同様に、例えばバーテックスシェーダーが 4 要素属性の `vec4` を予期しているのに `gl.vertexAttribPointer()` 呼び出しで `size` を `2` にセットした場合、WebGL は最初の 2 つの要素は配列バッファーを基にセットして、3 番目と 4 番目の値は既定値から取られます。

既定値は `vec4(0.0, 0.0, 0.0, 1.0)` ですが、`{{domxref("WebGLRenderingContext.vertexAttrib()", "gl.vertexAttrib[1234]f[v]()")}}` を呼ぶことで異なる既定値を指定することができます。

例えば、頂点シェーダーが位置と色の属性を使用しているとします。ほとんどのメッシュは頂点ごとのレベルで指定された色を持っていますが、いくつかのメッシュはユニフォームによるシェーディングです。そういったメッシュでは、各頂点に同じ色を配列バッファに入れる必要はありません。一定の色を設定するのに `gl.vertexAttrib4fv()` を使用できます。

### 現在の設定の問い合わせ

{{domxref("WebGLRenderingContext.getVertexAttrib()", "gl.getVertexAttrib()")}} や {{domxref("WebGLRenderingContext.getVertexAttribOffset()", "gl.getVertexAttribOffset()")}} で現在の属性の引数である、データ型や属性が正規化されるかどうかなどを取得できます。これらの WebGL 関数はパフォーマンスが遅いため、JavaScript アプリケーション内に状態を保存するほうがよいでしょう。しかし、これらの関数は、アプリケーションコードに触れることなく WebGL コンテキストをデバッグするのに最適です。

## 例

この例は、頂点属性をシェーダープログラムに送信する方法を示しています。各頂点の属性が 1 頂点あたり 20 バイトの長さでインターリーブされて格納されている架空のデータ構造を使用します。

1. **position:** X, Y と Z 座標を格納する必要があります。高い精度のために、32 ビット浮動小数点数を使用し、これは合計で 12 バイト使用します。
2. **normal vector:** 法線ベクトルの X, Y と Z 要素を格納する必要がありますが、精度は重要ではないので、8 ビット符号付き整数を使用します。さらなるパフォーマンスのために、データをゼロ値要素で 4 番目まで格納し、32 ビットにアライメントします。総サイズは 4 バイトになります。更に、WebGL に値を正規化するように知らせます。なぜなら法線は常に \[-1, 1] の範囲だからです。
3. **texture coordinate:** U と V の座標を格納する必要があります。これは 16 ビット符号無し整数で十分な精度が得られます。総サイズは 4 バイトになります。更に WebGL に値を \[0, 1] に正規化するように知らせます。

例として、以下のような頂点のとき、

```json
{
  "position": [1.0, 2.0, 1.5],
  "normal": [1.0, 0.0, 0.0],
  "texCoord": [0.5, 0.25]
}
```

以下のように配列バッファーに格納されます。

| 00 00 80 3F | 00 00 00 40 | 00 00 0C 3F | 7F  | 00  | 00  | 00  | 7F FF | 3F FF |
| ----------- | ----------- | ----------- | --- | --- | --- | --- | ----- | ----- |

### 配列バッファーの作成

まず、{{domxref("DataView")}} を用いた JSON データから動的に配列バッファーを作成します。`true` の用法に注意してください。WebGL は私達のデータがリトルエンディアンであることを予期しています。

```js
//ジオメトリーを fetch() と Response.json() で読み込む
const response = await fetch("assets/geometry.json");
const vertices = await response.json();

//配列バッファーを作成
const buffer = new ArrayBuffer(20 * vertices.length);
//配列バッファーを埋める
const dv = new DataView(buffer);
for (let i = 0; i < vertices.length; i++) {
  dv.setFloat32(20 * i, vertices[i].position[0], true);
  dv.setFloat32(20 * i + 4, vertices[i].position[1], true);
  dv.setFloat32(20 * i + 8, vertices[i].position[2], true);
  dv.setInt8(20 * i + 12, vertices[i].normal[0] * 0x7f);
  dv.setInt8(20 * i + 13, vertices[i].normal[1] * 0x7f);
  dv.setInt8(20 * i + 14, vertices[i].normal[2] * 0x7f);
  dv.setInt8(20 * i + 15, 0);
  dv.setUint16(20 * i + 16, vertices[i].texCoord[0] * 0xffff, true);
  dv.setUint16(20 * i + 18, vertices[i].texCoord[1] * 0xffff, true);
}
```

より高いパフォーマンスのために、サーバー側で事前に JSON から ArrayBuffer への変換を行うこともできます。以下のように、Node.js でそれらからバイナリファイルをロードし、それを配列バッファーとして解釈することができます。

```js
const response = await fetch("assets/geometry.bin");
const buffer = await response.arrayBuffer();
```

### WebGL で配列バッファーを使う

まず、新しい頂点バッファーオブジェクト (VBO) を作成し、配列バッファーを与えます。

```js
//配列バッファーを頂点バッファーオブジェクトに結合する
const vbo = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
gl.bufferData(gl.ARRAY_BUFFER, buffer, gl.STATIC_DRAW);
```

それから、インデックスを自分で設定することで、配列バッファーのメモリーレイアウトを指定します。

```js
//バッファーのレイアウトについて記述します
//1. 位置、正規化しない
gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 20, 0);
gl.enableVertexAttribArray(0);
//2. 法線ベクトル、[-1, 1] に正規化
gl.vertexAttribPointer(1, 4, gl.BYTE, true, 20, 12);
gl.enableVertexAttribArray(1);
//3. テクスチャ座標、[0, 1] に正規化
gl.vertexAttribPointer(2, 2, gl.UNSIGNED_SHORT, true, 20, 16);
gl.enableVertexAttribArray(2);

//頂点シェーダー内の属性を同じインデックスに設定します
gl.bindAttribLocation(shaderProgram, 0, "position");
gl.bindAttribLocation(shaderProgram, 1, "normal");
gl.bindAttribLocation(shaderProgram, 2, "texUV");
//属性のインデックスが変更された場合、シェーダーを再リンクする必要があります
//これにより、以前に設定されたすべてのユニフォームがリセットされることに注意してください。
gl.linkProgram(shaderProgram);
```

あるいは、インデックスを自分で設定する代わりに、グラフィックスカードによって提供されたインデックスを使用することもできます。これはシェーダープログラムの再リンクを避けます。

```js
const locPosition = gl.getAttribLocation(shaderProgram, "position");
gl.vertexAttribPointer(locPosition, 3, gl.FLOAT, false, 20, 0);
gl.enableVertexAttribArray(locPosition);

const locNormal = gl.getAttribLocation(shaderProgram, "normal");
gl.vertexAttribPointer(locNormal, 4, gl.BYTE, true, 20, 12);
gl.enableVertexAttribArray(locNormal);

const locTexUV = gl.getAttribLocation(shaderProgram, "texUV");
gl.vertexAttribPointer(locTexUV, 2, gl.UNSIGNED_SHORT, true, 20, 16);
gl.enableVertexAttribArray(locTexUV);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連項目

- OpenGL wiki の [Vertex Specification](https://www.khronos.org/opengl/wiki/Vertex_Specification)
- {{domxref("WebGL2RenderingContext.vertexAttribIPointer()")}}
