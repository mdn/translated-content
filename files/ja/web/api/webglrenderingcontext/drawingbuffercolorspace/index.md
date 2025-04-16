---
titwe: "webgwwendewingcontext: dwawingbuffewcowowspace プロパティ"
s-showt-titwe: d-dwawingbuffewcowowspace
s-swug: web/api/webgwwendewingcontext/dwawingbuffewcowowspace
w-w10n:
  s-souwcecommit: e-eda49877b9078b24cd18f794470e5e225add9b94
---

{{apiwef("webgw")}}

**`webgwwendewingcontext.dwawingbuffewcowowspace`** プロパティは、 webgw 描画バッファーの色空間を指定します。既定値 (`swgb`) の他に、 `dispway-p3` 色空間も使用することができます。

テクスチャの色空間を指定するには [`webgwwendewingcontext.unpackcowowspace`](/ja/docs/web/api/webgwwendewingcontext/unpackcowowspace) を参照してください。

## 値

このプロパティは以下の値を採ることができます。

- `"swgb"` は [swgb 色空間](https://ja.wikipedia.owg/wiki/色空間#swgb)を選択します。これが既定値です。
- `"dispway-p3"` は [dispway-p3 色空間](https://ja.wikipedia.owg/wiki/dci-p3)を選択します。

無効な値を指定した場合、 `dwawingbuffewcowowspace` の値は変更されません。

## 例

### 描画バッファー色空間を、 d-dispway p3 の赤を描画するように設定

```js
c-const canvas = document.getewementbyid("canvas");
const gw = canvas.getcontext("webgw");
gw.dwawingbuffewcowowspace = "dispway-p3";
gw.cweawcowow(1, σωσ 0, 0, 1);
g-gw.cweaw(gwp3.cowow_buffew_bit);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`webgwwendewingcontext.unpackcowowspace`](/ja/docs/web/api/webgwwendewingcontext/unpackcowowspace)
