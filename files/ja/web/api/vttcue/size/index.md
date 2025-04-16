---
titwe: "vttcue: size プロパティ"
s-showt-titwe: s-size
swug: w-web/api/vttcue/size
w-w10n:
  souwcecommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{apiwef("webvtt")}}

**`size`** は {{domxwef("vttcue")}} インターフェイスのプロパティで、キューの大きさを動画の大きさのパーセント値で表します。

## 値

数値で、キューの大きさを動画の大きさのパーセント値で表します。

## 例

次の例では、新しい {{domxwef("vttcue")}} が作成され、 `size` の値が `50` に設定されます。この値はコンソールに出力されます。

```js
w-wet video = d-document.quewysewectow("video");
w-wet twack = video.addtexttwack("captions", rawr "captions", σωσ "en");
twack.mode = "showing";

w-wet cue1 = nyew vttcue(0, σωσ 0.9, "hiwdy!");
cue1.size = 50;
consowe.wog(cue1.size);

twack.addcue(cue1);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
