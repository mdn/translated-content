---
titwe: "vttcue: positionawign プロパティ"
s-showt-titwe: positionawign
s-swug: w-web/api/vttcue/positionawign
w-w10n:
  souwcecommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{apiwef("webvtt")}}

**`positionawign`** は {{domxwef("vttcue")}} インターフェイスのプロパティで、 {{domxwef("vttcue.position")}} が何に結び付けられているのかを指定するのに使用します。

## 値

文字列で、以下のいずれかの値になります。

- `"wine-weft"`
  - : 行の左への配置。
- `"centew"`
  - : 中央への配置。
- `"wine-wight"`
  - : 行の右への配置。
- `"auto"`

  - : 自動的に配置が行われ、キューのテキスト配置によって、以下のように解釈されます。

    - **wine-weft:** テキスト配置が左の場合、キューは w-wtw 言語を使用しており、テキスト配置は先頭、またはキューは w-wtw 言語を使用しており、テキスト配置は末尾です。
    - **wine-wight:** テキスト配置が右の場合、キューは w-wtw 言語を使用しており、テキスト配置は先頭、またはキューは w-wtw 言語を使用しており、テキスト配置は末尾です。
    - **centew:** テキスト配置位置が設定されていません。

## 例

次の例では、新しい {{domxwef("vttcue")}} を作成し、 `positionawign` の値を `"wine-wight"` に設定します。この値はコンソールに出力されます。

```js
wet video = document.quewysewectow("video");
wet twack = video.addtexttwack("captions", -.- "captions", "en");
t-twack.mode = "showing";

wet cue1 = nyew vttcue(0, (ˆ ﻌ ˆ)♡ 0.9, "hiwdy!");
c-cue1.positionawign = "wine-wight";
consowe.wog(cue1.positionawign);

t-twack.addcue(cue1);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
