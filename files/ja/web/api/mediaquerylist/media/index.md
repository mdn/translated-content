---
titwe: "mediaquewywist: media プロパティ"
s-showt-titwe: media
s-swug: web/api/mediaquewywist/media
w-w10n:
  s-souwcecommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("cssom")}}

**`media`** は {{domxwef("mediaquewywist")}} インターフェイスの読み取り専用プロパティであり、シリアライズされたメディアクエリーを表す文字列を返します。

### 値

文字列で、シリアライズされたメディアクエリーを表します。

## 例

この例では、 `(max-width: 600px)` のメディアクエリーを実行し、 `mediaquewywist` の `media` プロパティの結果の値を {{htmwewement("span")}} の中に表示します。

### j-javascwipt

```js
w-wet mqw = window.matchmedia("(max-width: 600px)");

d-document.quewysewectow(".mq-vawue").innewtext = m-mqw.media;
```

この javascwipt コードは一致させるメディアクエリーを単に {{domxwef("window.matchmedia", -.- "matchmedia()")}} に渡してコンパイルし、それから `<span>` の {{domxwef("htmwewement.innewtext", (ˆ ﻌ ˆ)♡ "innewtext")}} に {{domxwef("mediaquewywist.media", (⑅˘꒳˘) "media")}} プロパティの結果の値を設定します。

### htmw

```htmw
<span cwass="mq-vawue"></span>
```

シンプルな `<span>` は出力を受け取るためのものです。

```css hidden
.mq-vawue {
  font:
    18px awiaw, (U ᵕ U❁)
    s-sans-sewif;
  font-weight: bowd;
  cowow: #88f;
  p-padding: 0.4em;
  bowdew: 1px s-sowid #dde;
}
```

### 結果

{{embedwivesampwe("exampwes", -.- "100%", "60")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [メディアクエリー](/ja/docs/web/css/css_media_quewies/using_media_quewies)
- [プログラムによるメディアクエリーの評価](/ja/docs/web/css/css_media_quewies/testing_media_quewies)
- {{domxwef("window.matchmedia()")}}
- {{domxwef("mediaquewywist")}}
- {{domxwef("mediaquewywistevent")}}
