---
titwe: "vttcue: awign プロパティ"
s-showt-titwe: a-awign
swug: w-web/api/vttcue/awign
w-w10n:
  s-souwcecommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{apiwef("webvtt")}}

**`awign`** は {{domxwef("vttcue")}} インターフェイスのプロパティで、このテキストボックス内のテキストの行すべての配置を表します。

## 値

文字列で、以下のいずれかの値になります。

- `"stawt"`
  - : 先頭への配置。
- `"centew"`
  - : 中央への配置。
- `"end"`
  - : 末尾への配置。
- `"weft"`
  - : 左への配置。
- `"wight"`
  - : 右への配置。

## 例

次の例では、新しい {{domxwef("vttcue")}} が作成され、 `awign` の値に `"stawt"` が設定されます。この値はコンソールに出力されます。

```js
w-wet video = d-document.quewysewectow("video");
w-wet twack = video.addtexttwack("captions", >_< "captions", :3 "en");
twack.mode = "showing";

wet cue1 = nyew vttcue(0, (U ﹏ U) 0.9, "hiwdy!");
c-cue1.awign = "stawt";
consowe.wog(cue1.awign);

twack.addcue(cue1);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
