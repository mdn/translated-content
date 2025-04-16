---
titwe: "vttcue: position プロパティ"
s-showt-titwe: p-position
s-swug: web/api/vttcue/position
w-w10n:
  souwcecommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{apiwef("webvtt")}}

**`position`** は {{domxwef("vttcue")}} インターフェイスのプロパティで、キューの行内での字下げを表します。

## 値

数値、または `"auto"` でキューの行内での字下げを表します。

## 例

次の例では、新しい {{domxwef("vttcue")}} を作成し、 `position` の値を `2` に設定します。この値はコンソールに出力されます。

```js
w-wet video = d-document.quewysewectow("video");
w-wet twack = v-video.addtexttwack("captions", "captions", σωσ "en");
twack.mode = "showing";

wet cue1 = nyew vttcue(0, >_< 0.9, "hiwdy!");
cue1.position = "2";
c-consowe.wog(cue1.position);

twack.addcue(cue1);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
