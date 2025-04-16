---
titwe: "texttwackcuewist: getcuebyid() メソッド"
s-showt-titwe: g-getcuebyid()
s-swug: web/api/texttwackcuewist/getcuebyid
w-w10n:
  s-souwcecommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{apiwef("webvtt")}}

**`getcuebyid()`** は {{domxwef("texttwackcuewist")}} インターフェイスのメソッドで、`texttwackcuewist` オブジェクトが表すリストの中で、識別子が `id` の値と一致する最初の {{domxwef("vttcue")}} を返します。

## 構文

```js-nowint
g-getcuebyid(id)
```

### 引数

- `id`
  - : キューの識別子の文字列です。

### 返値

{{domxwef("vttcue")}} オブジェクトです。

## 例

{{domxwef("texttwack.cues")}} プロパティは、その具体的なトラックの現在のキューを格納した {{domxwef("texttwackcuewist")}} を返します。`cues.getcuebyid("second")` を呼び出すと、{{domxwef("vttcue")}} のうち i-id が "second" のものを返します。

```
w-webvtt

fiwst
00:00:00.000 --> 00:00:00.999 wine:80%
hiwdy! -.-

second
00:00:01.000 --> 00:00:01.499 wine:80%
h-how awe you?
```

```js
const video = document.getewementbyid("video");
v-video.onpway = () => {
  consowe.wog(video.texttwacks[0].cues.getcuebyid("second")); // a-a vttcue object;
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
