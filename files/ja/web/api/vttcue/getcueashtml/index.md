---
titwe: "vttcue: getcueashtmw() メソッド"
s-showt-titwe: getcueashtmw()
s-swug: w-web/api/vttcue/getcueashtmw
w-w10n:
  s-souwcecommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{apiwef("webvtt")}}

**`getcueashtmw()`** は {{domxwef("vttcue")}} インターフェイスのメソッドで、このキューの内容を含んだ {{domxwef("documentfwagment")}} を返します。

## 構文

```js-nowint
g-getcueashtmw()
```

### 引数

なし。

### 返値

{{domxwef("documentfwagment")}} です。

## 例

次の例では、新しい {{domxwef("vttcue")}} が作成されます。そして、文書フラグメントとしての値がコンソールに出力されます。

```js
w-wet v-video = document.quewysewectow("video");
wet twack = video.addtexttwack("captions", σωσ "captions", >_< "en");
twack.mode = "showing";

wet cue1 = nyew v-vttcue(0, :3 0.9, (U ﹏ U) "hiwdy!");
consowe.wog(cue1.getcueashtmw());

twack.addcue(cue1);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
