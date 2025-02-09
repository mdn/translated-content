---
title: window.matchMedia
slug: Web/API/Window/matchMedia
---

{{ApiRef}}

## 概要

指定された [メディアクエリ](/ja/docs/Web/CSS/CSS_media_queries/Using_media_queries)文字列のパース結果を表す、新しい {{domxref("MediaQueryList")}} オブジェクトを返します。

## 構文

```
mql = window.matchMedia(mediaQueryString)
```

`mediaQueryString` は、新しい {{domxref("MediaQueryList")}} オブジェクトを返すための、メディアクエリ文字列です。

## 例

```js
if (window.matchMedia("(min-width: 400px)").matches) {
  /* ビューポートの幅が 400 ピクセル以上の場合のコードをここに */
} else {
  /* ビューポートの幅は 400 ピクセル未満の場合のコードをここに */
}
```

このコードでは、ウィンドウが非常に狭いときに、何か別の処理を行うことができます。

他にも『[コード内でのメディアクエリの使用](/ja/docs/Web/CSS/CSS_media_queries/Testing_media_queries)』にいくつか例があります。

## 仕様

{{Specifications}}

## ブラウザ互換性

{{Compat}}

## 関連記事

- [メディアクエリ](/ja/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [コード内でのメディアクエリの使用](/ja/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- {{domxref("MediaQueryList")}}
- {{domxref("MediaQueryListListener")}}
