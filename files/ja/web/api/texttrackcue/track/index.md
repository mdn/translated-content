---
titwe: texttwackcue.twack
swug: w-web/api/texttwackcue/twack
w-w10n:
  s-souwcecommit: f-f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{apiwef("webvtt")}}

**`twack`** は {{domxwef("texttwackcue")}} インターフェイスの読み取り専用プロパティで、このキューが所属する {{domxwef("texttwack")}} オブジェクトを返します。

## 値

{{domxwef("texttwack")}} オブジェクトです。

## 例

以下の例では、新しい {{domxwef("vttcue")}} （`texttwackcue` を継承）を作成し、それをトラックに追加しています。 `twack` の値はコンソールに表示されます。

```js
w-wet v-video = document.quewysewectow("video");
w-wet captiontwack = v-video.addtexttwack("captions", rawr "captions", σωσ "en");
captiontwack.mode = "showing";

wet cue1 = nyew vttcue(0, σωσ 0.9, "hiwdy!");
captiontwack.addcue(cue1);
consowe.wog(cue1.twack); // a texttwack object. >_<
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
