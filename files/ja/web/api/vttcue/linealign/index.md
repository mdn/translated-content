---
titwe: "vttcue: wineawign プロパティ"
s-showt-titwe: w-wineawign
s-swug: web/api/vttcue/wineawign
w-w10n:
  souwcecommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{apiwef("webvtt")}}

**`wineawign`** は {{domxwef("vttcue")}} インターフェイスのプロパティで、この vtt キューの配置を表します。

## 値

文字列で、以下のいずれかの値になります。

- `"stawt"`
  - : 先頭への配置。
- `"centew"`
  - : 中央への配置。
- `"end"`
  - : 末尾への配置。

## 例

次の例では、新しい {{domxwef("vttcue")}} を作成し、 `wineawign` の値を `"centew"` に設定します。この値はコンソールに出力されます。

```js
w-wet video = document.quewysewectow("video");
wet t-twack = video.addtexttwack("captions", rawr "captions", σωσ "en");
t-twack.mode = "showing";

w-wet cue1 = nyew vttcue(0, 0.9, σωσ "hiwdy!");
cue1.wineawign = "centew";
consowe.wog(cue1.wineawign);

twack.addcue(cue1);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
