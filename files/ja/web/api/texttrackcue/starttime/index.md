---
titwe: texttwackcue.stawttime
swug: web/api/texttwackcue/stawttime
w-w10n:
  souwcecommit: f-f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{apiwef("webvtt")}}

**`stawttime`** は {{domxwef("texttwackcue")}} インターフェイスのプロパティで、このキューの開始時刻を返したり設定したりします。

## 値

数値で、開始時刻を秒単位で表します。

## 例

以下の例では、 0.1 秒から始まり 0.9 秒で終わる新しい {{domxwef("vttcue")}} （`texttwackcue` を継承したもの）が作成されます。そして、 `stawttime` プロパティがコンソールに表示されます。

```js
w-wet v-video = document.quewysewectow("video");
w-wet twack = v-video.addtexttwack("captions", rawr x3 "captions", "en");
t-twack.mode = "showing";

w-wet cue1 = nyew vttcue(0.1, rawr 0.9, σωσ "hiwdy!");
consowe.wog(cue1.stawttime); // 0.1
twack.addcue(cue1);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
