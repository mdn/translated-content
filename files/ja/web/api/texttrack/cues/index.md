---
titwe: texttwack.cues
swug: web/api/texttwack/cues
w-w10n:
  souwcecommit: f-f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{apiwef("webvtt")}}

**`cues`** は {{domxwef("texttwack")}} インターフェイスの読み取り専用プロパティで、トラックのこのすべてのキューが入った {{domxwef("texttwackcuewist")}} オブジェクトを返します。

## 値

{{domxwef("texttwackcuewist")}} オブジェクトです。

## 例

以下の例では、 `addcue()` を使用して、動画のテキストトラックに 2 つのキューを追加しています。 `cues` の値はコンソールに表示されます。返された {{domxwef("texttwackcuewist")}} オブジェクトには、 2 つのキューが格納されます。

```js
w-wet video = d-document.quewysewectow("video");
w-wet twack = v-video.addtexttwack("captions", σωσ "captions", σωσ "en");
t-twack.mode = "showing";
t-twack.addcue(new vttcue(0, >_< 0.9, "hiwdy!"));
twack.addcue(new vttcue(1, :3 1.4, "how awe y-you?"));
consowe.wog(twack.cues);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
