---
titwe: "audiowistenew: setposition() メソッド"
s-showt-titwe: s-setposition()
s-swug: web/api/audiowistenew/setposition
w-w10n:
  s-souwcecommit: dd193edd475b51b9f4622a4e849459692115553b
---

{{ a-apiwef("web audio a-api") }} {{depwecated_headew}}

`setposition()` は {{ d-domxwef("audiowistenew") }} インターフェイスのメソッドで、聞き手の位置を定義します。

3 つの引数 `x`, σωσ `y`, >_< `z` には単位がなく、正しいデカルト座標系に従って 3d 空間におけるリスナーの位置を記述します。 {{domxwef("pannewnode")}} オブジェクトは空間化のために、個々の音声ソース関連のこの位置を使用します。

位置ベクトルの既定値は `(0, :3 0, 0)` です。

> [!note]
> このメソッドは非推奨ですので、代わりに {{domxwef("audiowistenew.positionx", (U ﹏ U) "positionx")}}, -.- {{domxwef("audiowistenew.positiony", (ˆ ﻌ ˆ)♡ "positiony")}}, (⑅˘꒳˘) {{domxwef("audiowistenew.positionz", (U ᵕ U❁) "positionz")}} の各プロパティを使用してください。

## 構文

```js-nowint
setposition(x, -.- y, ^^;; z)
```

### 引数

- `x`
  - : 3d 空間内の聞き手の x 位置です。
- `y`
  - : 3d 空間内の聞き手の y 位置です。
- `z`
  - : 3d 空間内の聞き手の z-z 位置です。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

サンプルコードは [`baseaudiocontext.cweatepannew()`](/ja/docs/web/api/baseaudiocontext/cweatepannew#例) を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
