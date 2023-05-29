---
title: WebGL でのデータ
slug: Web/API/WebGL_API/Data
---

{{DefaultAPISidebar("WebGL")}}

シェーダープログラムは 3 種類のデータストレージにアクセスでき、それぞれに特定のユースケースがあります。それぞれの種類の変数はデータストアの種類に応じて 1 つまたは両方の種類のシェーダープログラムからアクセスでき、特定の変数の種類に応じてサイトの JavaScript コードからもアクセスできます。

## GLSL データ型

<<基本型、ベクトルなどを文書化します。Khronos WebGL wiki の[データ型 (GLSL)](<https://www.khronos.org/opengl/wiki/Data_Type_(GLSL)>) を参照してください>>

## GLSL 変数

GLSL には 3 種類の「変数」またはデータストレージがあり、それぞれに **[attributes](#attributes)**、**[varyings](#varyings)** **および** **[uniforms](#uniforms)** といった独自の目的とユースケースがあります。

### Attributes

**Attributes** は GLSL 変数であり、(変数としての) 頂点シェーダーおよび JavaScript コードでのみ使用可能です。属性は通常、色情報、テクスチャ座標、および JavaScript コードと頂点シェーダー間で共有する必要がある計算または取得されたその他のデータを格納するために使用されます。

```js
//init colors
    var vertexColors = [
        vec4( 0.0, 0.0, 0.0, 1.0 ),  // black
        vec4( 1.0, 0.0, 0.0, 1.0 ),  // red
        vec4( 1.0, 1.0, 0.0, 1.0 ),  // yellow
        vec4( 0.0, 1.0, 0.0, 1.0 ),  // green
        vec4( 0.0, 0.0, 0.0, 1.0 ),  // black
        vec4( 1.0, 0.0, 0.0, 1.0 ),  // red
        vec4( 1.0, 1.0, 0.0, 1.0 ),  // yellow
        vec4( 0.0, 1.0, 0.0, 1.0 ),  // green
    ];
    var cBuffer = gl.createBuffer();
```

```js
//continued
//create buffer to store colors and reference it to "vColor" which is in GLSL
    gl.bindBuffer( gl.ARRAY_BUFFER, cBuffer );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(vertexColors), gl.STATIC_DRAW );

    var vColor = gl.getAttribLocation( program, "vColor" );
    gl.vertexAttribPointer( vColor, 4, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vColor );
```

```cpp
//glsl
attribute  vec4 vColor;

void main()
{

fColor = vColor;
}
```

### Varyings

**Varyings** は頂点シェーダーによって宣言され、頂点シェーダーからフラグメントシェーダーにデータを渡すために使用される変数です。これは、頂点シェーダーによって計算された後、頂点の [normal vector](https://en.wikipedia.org/wiki/Normal_(geometry)) を共有するために通常使用されます。

<<使用方法>>

### Uniforms

**Uniforms** は JavaScript コードによって設定され、頂点シェーダーとフラグメントシェーダーの両方で使用できます。これらは照明の位置と大きさ、グローバル変換と遠近法の詳細など、フレームに描画されるすべてのものに対して同じ値を提供するために使用されます。

<<詳細の追加>>

## Buffers

<<情報の追加>>

## Textures

<<情報の追加>>
