---
title: ANGLE_instanced_arrays
slug: Web/API/ANGLE_instanced_arrays
tags:
  - API
  - リファレンス
  - WebGL
  - WebGL 拡張機能
browser-compat: api.ANGLE_instanced_arrays
translation_of: Web/API/ANGLE_instanced_arrays
---
{{APIRef("WebGL")}}

**`ANGLE_instanced_arrays`** 拡張機能は [WebGL API](/ja/docs/Web/API/WebGL_API) の一部であり、同じ頂点データ、プリミティブカウント、およびタイプを共有している同じオブジェクトまたは同様のオブジェクトのグループを複数回描画することができます。

WebGL 拡張機能は {{domxref("WebGLRenderingContext.getExtension()")}} メソッドを使用することで利用できるようになります。詳しくは、 [WebGL チュートリアル](/ja/docs/Web/API/WebGL_API/Tutorial) の [拡張機能の使用](/ja/docs/Web/API/WebGL_API/Using_Extensions)も参照してください。

> **Note:** この拡張機能は {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} のコンテキストでのみ利用可能です。 {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}} のコンテキストでは、この機能は既定で使用することができ、定数やメソッドは "`ANGLE`" 接尾辞なしで使用することができます。
>
> "ANGLE" という名前ですが、この拡張機能は ANGLE ライブラリーを使用していれば、 Windows でなくてもハードウェアが対応していればあらゆる端末で動作します。 "ANGLE" は単に、この拡張機能が ANGLE ライブラリーの作者によって書かれたことを示しているだけです。

## 定数

この拡張機能は新しい定数を公開します。これは {{domxref("WebGLRenderingContext.getVertexAttrib()", "gl.getVertexAttrib()")}} メソッドで使用することができます。

- `ext.VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE`
  - : {{domxref("WebGL_API/Types", "GLint")}} で、 {{domxref("WebGLRenderingContext.getVertexAttrib()", "gl.getVertexAttrib()")}} で `pname` 引数として使用されたときにインスタンス化されたレンダリングに用いられる序数を記述したものを返します。

## メソッド

この拡張機能は 3 つの新しいメソッドを公開します。

- {{domxref("ANGLE_instanced_arrays.drawArraysInstancedANGLE()", "ext.drawArraysInstancedANGLE()")}}
  - : {{domxref("WebGLRenderingContext.drawArrays()", "gl.drawArrays()")}} と同様に動作しますが、要素の範囲の複数のインスタンスが実行され、反復ごとにインスタンスが進む点が異なります。
- {{domxref("ANGLE_instanced_arrays.drawElementsInstancedANGLE()", "ext.drawElementsInstancedANGLE()")}}
  - : {{domxref("WebGLRenderingContext.drawArrays()", "gl.drawArrays()")}} と同様に動作しますが、要素のセットの複数のインスタンスが実行され、各セット間でインスタンスが進む点が異なります。
- {{domxref("ANGLE_instanced_arrays.vertexAttribDivisorANGLE()", "ext.vertexAttribDivisorANGLE()")}}
  - : プリミティブの複数のインスタンスを {{domxref("ANGLE_instanced_arrays.drawArraysInstancedANGLE()", "ext.drawArraysInstancedANGLE()")}} および {{domxref("ANGLE_instanced_arrays.drawElementsInstancedANGLE()", "ext.drawElementsInstancedANGLE()")}} で描画する際に一般頂点属性が進む速度を変更します。

## 例

次の例は、与えられた図形を 1 回の draw 呼び出しで複数回描画する方法です。
> **Warning:** 以下は教育的なものであり、製品レベルのコードではありません。レンダリングループ内や使用直前にデータ/バッファを構築することは、一般的に避けるべきです。

```js
// 拡張機能を有効化
const ext = gl.getExtension('ANGLE_instanced_arrays');

// 通常通りに図形バッファーを関連付ける
gl.bindBuffer(gl.ARRAY_BUFFER, geometryVertexBuffer);
gl.enableVertexAttribArray(vertexPositionAttributeLocation);
gl.vertexAttribPointer(vertexPositionAttributeLocation, 3, gl.FLOAT, false, 0, 0);

// 位置バッファーを構築
const instancePositions = [];
for (const instance of instances) {
  instancePositions.push(
    instance.position.x,
    instance.position.y,
    instance.position.z
  );
}
const instancePositionBuffer = createWebGLBufferFromData(instancePositions);

// 他の属性と同様に、このインスタンスと位置バッファーを関連付け
gl.bindBuffer(gl.ARRAY_BUFFER, instancePositionBuffer);
gl.enableVertexAttribArray(instancePositionAttributeLocation);
gl.vertexAttribPointer(instancePositionAttributeLocation, 3, gl.FLOAT, false, 0, 0);

// 属性をインスタンスとしてマークし、すべての頂点ではなく、それぞれ（1 つ）のインスタンスを進めます。
ext.vertexAttribDivisorANGLE(instancePositionAttributeLocation, 1);

// それぞれのインスタンスについて、図形を描画します。
ext.drawArraysInstancedANGLE(gl.TRIANGLES, 0, numGeometryVertices, instances.length);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGL2RenderingContext.drawArraysInstanced()")}}
- {{domxref("WebGL2RenderingContext.drawElementsInstanced()")}}
- {{domxref("WebGL2RenderingContext.vertexAttribDivisor()")}}
