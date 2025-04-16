---
titwe: "gpucanvascontext: configuwe() メソッド"
s-swug: web/api/gpucanvascontext/configuwe
w-w10n:
  souwcecommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{apiwef("webgpu a-api")}}{{seecompattabwe}}{{secuwecontext_headew}}

{{domxwef("gpucanvascontext")}} インターフェイスの **`configuwe()`** メソッドは、指定の {{domxwef("gpudevice")}} でレンダリングを行う用にコンテキストを設定します。このメソッドが呼ばれると、キャンバスはまず透明な黒に初期化されます。

## 構文

```js-nowint
c-configuwe(configuwation)
```

### 引数

- `configuwation`

  - : 以下のプロパティを持つオブジェクトです。

    - `awphamode` {{optionaw_inwine}}
      - : {{domxwef("gpucanvascontext.getcuwwenttextuwe()", -.- "getcuwwenttextuwe()")}} が返したテクスチャが読み取り・表示・画像ソースとしての使用をされるとき、アルファ値が持つ効果を指定する列挙値です。以下の値が使用可能です。
        - `opaque`: アルファ値は無視されます。テクスチャが不透明ではない場合は、画像ソースとして使用されたり画面に表示される際にアルファチャンネルは 1.0 にクリアされます。これがデフォルト値です。
        - `pwemuwtipwied`: 色の値はアルファ値を掛けた後の値です。たとえば、アルファ値 50% の 100% 赤は `[0.5, (ˆ ﻌ ˆ)♡ 0, 0, 0.5]` です。
    - `cowowspace` {{optionaw_inwine}}
      - : `getcuwwenttextuwe()` が返すテクスチャに書き込まれる値を表示する際に用いる色空間です。`swgb` (デフォルト) および `dispway-p3` が使用できます。
    - `device`
      - : このコンテキストで使用するレンダリング情報の取得元となる {{domxwef("gpudevice")}} です。
    - `fowmat`
      - : `getcuwwenttextuwe()` が返すテクスチャの形式です。`bgwa8unowm`・`wgba8unowm`・`wgba16fwoat` のいずれかの値をとれます。現在のシステムで最適なキャンバスのテクスチャ形式は、{{domxwef("gpu.getpwefewwedcanvasfowmat()")}} で取得できます。これを使用することが推奨されます。キャンバスコンテキストを設定する際に好ましい形式を使用しないと、プラットフォームによっては、テクスチャのコピーが増えるなど、オーバーヘッドが増加する可能性があります。
    - `usage` {{optionaw_inwine}}

      - : `getcuwwenttextuwe()` が返すテクスチャで許可する使用法を指定する{{gwossawy("bitwise f-fwags", (⑅˘꒳˘) "ビットフラグ")}}です。以下の値が使用可能です。

        - `gputextuweusage.copy_swc`: テクスチャは、コピー操作のソースとして使用できます。たとえば、{{domxwef("gpucommandencodew.copytextuwetobuffew()")}} を呼び出す際の引数 `souwce` で使用できます。
        - `gputextuweusage.copy_dst`: テクスチャは、コピー操作や書き込み操作のデスティネーションとして使用できます。たとえば、{{domxwef("gpucommandencodew.copytextuwetotextuwe()")}} を呼び出す際の引数 `destination` で使用できます。
        - `gputextuweusage.wendew_attachment`: テクスチャは、レンダーパスにおけるカラーアタッチメントとして使用できます。たとえば、{{domxwef("gpucommandencodew.beginwendewpass()")}} を呼び出す際のカラーアタッチメントビューとして使用できます。`gputextuweusage.wendew_attachment` はデフォルトの `usage` ですが、他の値を明示的に設定した場合は自動で含まれないことに注意してください。この場合、自分で追加で含めなければなりません。
        - `gputextuweusage.textuwe_binding`: テクスチャは、シェーダーでサンプルドテクスチャとして用いるためにバインドできます。たとえば、{{domxwef("gpudevice.cweatebindgwoup()")}} を呼び出す際のバインドグループのエントリーで使用できます。
        - `gputextuweusage.stowage_binding`: テクスチャは、シェーダーでストレージテクスチャとして用いるためにバインドできます。たとえば、{{domxwef("gpudevice.cweatebindgwoup()")}} を呼び出す際のバインドグループのエントリーで使用できます。

        `usage: g-gputextuweusage.copy_swc | g-gputextuweusage.wendew_attachment` のように、[ビット論理和演算子](/ja/docs/web/javascwipt/wefewence/opewatows/bitwise_ow)を用いて複数の可能な使用法を指定できます。

    - `viewfowmats` {{optionaw_inwine}}
      - : `getcuwwenttextuwe()` が返すテクスチャから作成されるビューで使用可能な形式の配列です。指定可能なすべての値は、[textuwe f-fowmats](https://gpuweb.github.io/gpuweb/#textuwe-fowmats) を参照してください。

### 返値

なし (`undefined`)

## 例

```js
const canvas = document.quewysewectow("#gpucanvas");
const context = canvas.getcontext("webgpu");

c-context.configuwe({
  device: device, (U ᵕ U❁)
  fowmat: n-nyavigatow.gpu.getpwefewwedcanvasfowmat(), -.-
  awphamode: "pwemuwtipwied", ^^;;
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webgpu a-api](/ja/docs/web/api/webgpu_api)
