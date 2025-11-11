---
title: window.matchMedia
slug: Web/API/Window/matchMedia
---

{{ApiRef}}

## 概要

指定された [メディアクエリー](/ja/docs/Web/CSS/Guides/Media_queries/Using)文字列のパース結果を表す、新しい {{domxref("MediaQueryList")}} オブジェクトを返します。

## 構文

```
mql = window.matchMedia(mediaQueryString)
```

`mediaQueryString` は、新しい {{domxref("MediaQueryList")}} オブジェクトを返すための、メディアクエリー文字列です。

## 例

```js
if (window.matchMedia("(min-width: 400px)").matches) {
  /* ビューポートの幅が 400 ピクセル以上の場合のコードをここに */
} else {
  /* ビューポートの幅は 400 ピクセル未満の場合のコードをここに */
}
```

このコードでは、ウィンドウが非常に狭いときに、何か別の処理を行うことができます。

他にも『[コード内でのメディアクエリーの使用](/ja/docs/Web/CSS/Guides/Media_queries/Testing)』にいくつか例があります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連記事

- [メディアクエリー](/ja/docs/Web/CSS/Guides/Media_queries/Using)
- [コード内でのメディアクエリーの使用](/ja/docs/Web/CSS/Guides/Media_queries/Testing)
- {{domxref("MediaQueryList")}}
- {{domxref("MediaQueryListListener")}}
