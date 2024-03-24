---
title: WebGL のデータ
slug: Web/API/WebGL_API/Data
l10n:
  sourceCommit: 621c7978886787ca66bc5e90e457cf1466e58d35
---

{{DefaultAPISidebar("WebGL")}}

シェーダープログラムは 3 種類のデータストレージにアクセスでき、それぞれに特定の用途があります。それぞれの種類の変数は、データストアの種類に応じて 1 つまたは両方の種類のシェーダープログラムからアクセスでき、特定の変数の種類に応じてサイトの JavaScript コードからもアクセスできます。

## GLSL データ型

GLSL ドキュメントの [Data Types](<https://www.khronos.org/opengl/wiki/Data_Type_(GLSL)>) を参照してください。

## GLSL 変数

GLSL には **[属性](#属性)**、**[varyings](#varyings)**、**[ユニフォーム](#ユニフォーム)** の 3 種類の「変数」またはデータストレージがあり、それぞれに独自の目的と用途があります。

### 属性

**属性** (Attributes) は GLSL 変数であり、（変数としての）頂点シェーダーおよび JavaScript コードでのみ使用可能です。属性は通常、色情報、テクスチャ座標、および JavaScript コードと頂点シェーダー間で共有する必要がある計算または取得されたその他のデータを格納するために使用されます。

```js
// 色を初期化
const vertexColors = [
  vec4(0.0, 0.0, 0.0, 1.0), // black
  vec4(1.0, 0.0, 0.0, 1.0), // red
  vec4(1.0, 1.0, 0.0, 1.0), // yellow
  vec4(0.0, 1.0, 0.0, 1.0), // green
  vec4(0.0, 0.0, 0.0, 1.0), // black
  vec4(1.0, 0.0, 0.0, 1.0), // red
  vec4(1.0, 1.0, 0.0, 1.0), // yellow
  vec4(0.0, 1.0, 0.0, 1.0), // green
];
const cBuffer = gl.createBuffer();
```

```js
// 続き
// 色を保存するバッファーを作成し、GLSLの "vColor" を参照します。
gl.bindBuffer(gl.ARRAY_BUFFER, cBuffer);
gl.bufferData(gl.ARRAY_BUFFER, flatten(vertexColors), gl.STATIC_DRAW);

const vColor = gl.getAttribLocation(program, "vColor");
gl.vertexAttribPointer(vColor, 4, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(vColor);
```

```cpp
//glsl
attribute  vec4 vColor;

void main()
{
  fColor = vColor;
}
```

### Varying

**Varying** は頂点シェーダーによって宣言され、頂点シェーダーからフラグメントシェーダーにデータを渡すために使用される変数です。これは、頂点シェーダーによって計算された後、頂点の[法線ベクトル](https://ja.wikipedia.org/wiki/法線ベクトル)を共有するために通常使用されます。

<\<使用方法>>

### ユニフォーム

**ユニフォーム** (Uniforms) は JavaScript コードによって設定され、頂点シェーダーとフラグメントシェーダーの両方で使用できます。これらは照明の位置と大きさ、グローバル変換と遠近法の詳細など、フレームに描画されるすべてのものに対して同じ値を提供するために使用されます。

<\<詳細の追加>>

## バッファー

<\<情報の追加>>

## テクスチャ

<\<情報の追加>>
