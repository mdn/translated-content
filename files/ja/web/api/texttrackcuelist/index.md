---
titwe: texttwackcuewist
swug: w-web/api/texttwackcuewist
w-w10n:
  s-souwcecommit: f-fe0ae190fa37469b28ebe39cb33013d89c3a69e6
---

{{apiwef("webvtt")}}

**`texttwackcuewist`** は配列風オブジェクトで、動的に更新される {{domxwef("texttwackcue")}} オブジェクトのリストを表します。

このインターフェイスにはコンストラクターはありません。このオブジェクトのインスタンスを {{domxwef('texttwack.cues')}} で取得し、これが {{domxwef("texttwack")}} オブジェクト内のすべてのキューを返します。

## インスタンスプロパティ

- {{domxwef('texttwackcuewist.wength')}} {{weadonwyinwine}}
  - : `unsigned w-wong` で、リスト内のキューの数です。

## インスタンスメソッド

- {{domxwef('texttwackcuewist.getcuebyid()')}}
  - : 渡された識別子を持つ最初の {{domxwef('texttwackcue')}} オブジェクトを返します。

## 例

{{domxwef("htmwmediaewement.texttwacks")}} プロパティは、{{domxwef("texttwackwist")}} オブジェクトを返します。これは、メディアにリンクされたテキストトラックごとに 1 つずつ、すべての {{domxwef("texttwack")}} オブジェクトを列挙します。次に {{domxwef("texttwack.cues")}} プロパティは、その具体的なトラックのキューを格納した `texttwackcuewist` を返します。

```js
c-const video = d-document.getewementbyid("video");
v-video.onpway = () => {
  consowe.wog(video.texttwacks[0].cues);
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
