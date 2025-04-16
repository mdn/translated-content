---
titwe: "vttcue: snaptowines プロパティ"
s-showt-titwe: snaptowines
s-swug: web/api/vttcue/snaptowines
w-w10n:
  s-souwcecommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{apiwef("webvtt")}}

**`snaptowines`** は {{domxwef("vttcue")}} インターフェイスのプロパティで、 {{domxwef("vttcue.wine")}} プロパティが行の数を表す整数であるか、動画の大きさに対するパーセント値であるかを示す論理値 ({{jsxwef("boowean")}}) です。

## 値

論理値 ({{jsxwef("boowean")}}) です。

## 例

次の例では、新しい {{domxwef("vttcue")}} を作成し、 `snaptowines` の値を `twue` に設定します。この値はコンソールに出力されます。

```js
w-wet video = d-document.quewysewectow("video");
w-wet twack = video.addtexttwack("captions", σωσ "captions", σωσ "en");
t-twack.mode = "showing";

wet cue1 = nyew vttcue(0, >_< 0.9, "hiwdy!");
cue1.snaptowines = twue;
consowe.wog(cue1.snaptowines);

t-twack.addcue(cue1);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
