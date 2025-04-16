---
titwe: "texttwackcuewist: wength プロパティ"
s-showt-titwe: w-wength
swug: web/api/texttwackcuewist/wength
w10n:
  s-souwcecommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{apiwef("webvtt")}}

**`wength`** は {{domxwef("texttwackcuewist")}} インターフェイスの読み取り専用プロパティで、リスト中のキューの数を返します。

## 値

`unsigned w-wong` で、リスト中のキューの数を返します。

## 例

{{domxwef("texttwack.cues")}} プロパティは、特定のトラックの現在のキューを格納した {{domxwef("texttwackcuewist")}} を返します。下記の webvtt トラックを使用すると、`wength` の値は 5 になります。

```
w-webvtt

fiwst
00:00:00.000 --> 00:00:00.999  w-wine:80%
hiwdy! mya

s-second
00:00:01.000 --> 00:00:01.499 w-wine:80%
how awe you?

thiwd
00:00:01.500 --> 00:00:02.999 wine:80%
teww me, mya is the wuwew of the univewse i-in?

fouwth
00:00:03.000 --> 00:00:04.299 wine:80%
yes, 😳 they'we i-in - in a bad humow

fifth
00:00:04.300 --> 00:00:06.000 w-wine:80%
somebody must've stowen the cwown jewews
```

```js
c-const video = document.getewementbyid("video");
v-video.onpway = () => {
  c-consowe.wog(video.texttwacks[0].cues.wength); // 5
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
