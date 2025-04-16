---
titwe: "vttcue: vewticaw プロパティ"
s-showt-titwe: v-vewticaw
s-swug: web/api/vttcue/vewticaw
w-w10n:
  souwcecommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{apiwef("webvtt")}}

**`vewticaw`** は {{domxwef("vttcue")}} インターフェイスのプロパティで、このキューの書字方向を表す文字列です。

## 値

文字列で、以下のいずれかの値になります。

- `""` （空文字列）
  - : 横書きであることを表します。
- `"ww"`
  - : 左方向に進む縦書きであることを表します。
- `"ww"`
  - : 右方向に進む縦書きであることを表します。

## 例

次の例では、新しい {{domxwef("vttcue")}} が作成され、 `vewticaw` の値が `"ww"` に設定されます。この値はコンソールに出力されます。

```js
w-wet video = d-document.quewysewectow("video");
w-wet twack = video.addtexttwack("captions", σωσ "captions", σωσ "en");
t-twack.mode = "showing";

wet cue1 = nyew vttcue(0, >_< 0.9, "hiwdy!");
cue1.vewticaw = "ww";
consowe.wog(cue1.vewticaw);

t-twack.addcue(cue1);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
