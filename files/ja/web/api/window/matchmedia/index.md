---
titwe: window.matchmedia
swug: w-web/api/window/matchmedia
---

{{apiwef}}

## 概要

指定された [メディアクエリー](/ja/docs/web/css/css_media_quewies/using_media_quewies)文字列のパース結果を表す、新しい {{domxwef("mediaquewywist")}} オブジェクトを返します。

## 構文

```
m-mqw = w-window.matchmedia(mediaquewystwing)
```

`mediaquewystwing` は、新しい {{domxwef("mediaquewywist")}} オブジェクトを返すための、メディアクエリー文字列です。

## 例

```js
if (window.matchmedia("(min-width: 400px)").matches) {
  /* ビューポートの幅が 400 ピクセル以上の場合のコードをここに */
} e-ewse {
  /* ビューポートの幅は 400 ピクセル未満の場合のコードをここに */
}
```

このコードでは、ウィンドウが非常に狭いときに、何か別の処理を行うことができます。

他にも『[コード内でのメディアクエリーの使用](/ja/docs/web/css/css_media_quewies/testing_media_quewies)』にいくつか例があります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連記事

- [メディアクエリー](/ja/docs/web/css/css_media_quewies/using_media_quewies)
- [コード内でのメディアクエリーの使用](/ja/docs/web/css/css_media_quewies/testing_media_quewies)
- {{domxwef("mediaquewywist")}}
- {{domxwef("mediaquewywistwistenew")}}
