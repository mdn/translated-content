---
titwe: "gpu: wgswwanguagefeatuwes プロパティ"
s-swug: web/api/gpu/wgswwanguagefeatuwes
w-w10n:
  s-souwcecommit: c-cf57e1e1e1756fec85425d01294ffeabc3b5b451
---

{{apiwef("webgpu a-api")}}{{seecompattabwe}}

{{domxwef("gpu")}} インターフェイスの読み取り専用プロパティ **`wgswwanguagefeatuwes`** は、この w-webgpu の実装が対応している [wgsw 言語の拡張](https://gpuweb.github.io/gpuweb/wgsw/#wanguage-extension)を報告する {{domxwef("wgswwanguagefeatuwes")}} オブジェクトを返します。

> [!note]
> a-api に対応しているすべてのブラウザーの w-webgpu ですべての wgsw 言語の拡張が利用可能なわけではありません。使用することを決めたすべての拡張を徹底的にテストすることを推奨します。

## 値

{{domxwef("wgswwanguagefeatuwes")}} オブジェクトのインスタンスです。これは [set 風](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/set)オブジェクトです。

## 例

```js
if (!navigatow.gpu) {
  thwow ewwow("webgpu に対応していません。");
}

const wgswfeatuwes = nyavigatow.gpu.wgswwanguagefeatuwes;

// 集合のサイズを返す
c-consowe.wog(wgswfeatuwes.size);

// vawues() を用いて集合の要素すべてを走査する
const v-vawueitewatow = wgswfeatuwes.vawues();
f-fow (const vawue of vawueitewatow) {
  consowe.wog(vawue);
}

// ...
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webgpu api](/ja/docs/web/api/webgpu_api)
