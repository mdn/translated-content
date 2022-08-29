---
title: MediaList
slug: Web/API/MediaList
tags:
  - API
  - CSSOM
  - インターフェイス
  - MediaList
  - リファレンス
browser-compat: api.MediaList
translation_of: Web/API/MediaList
---
{{APIRef("CSSOM")}}

**`MediaList`** インターフェイスはスタイルシートのメディアクエリーを表します。例えば、 {{htmlelement("link")}} 要素の `media` 属性で設定されるものです。

> **Note:** `MediaList` は生きたリストです。以下のプロパティやメソッドを使用して更新すると、直ちに文書の動作が更新されます。

## プロパティ

- {{domxref("MediaList.mediaText")}}
  - : {{Glossary("stringifier", "文字列化")}}プロパティであり、 `MediaList` をテキストとして表す文字列を返し、また新しい `MediaList` を設定することができます。
- {{domxref("MediaList.length")}} {{readonlyInline}}
  - : この `MediaList` にあるメディアクエリーの数を返します。

## メソッド

- {{domxref("MediaList.appendMedium()")}}
  - : `MediaList` にメディアクエリーを追加します。
- {{domxref("MediaList.deleteMedium()")}}
  - : `MediaList` からメディアクエリーを削除します。
- {{domxref("MediaList.item()")}}
  - : メディアクエリーをテキストとして返すゲッターです。メディアクエリーの `MediaList` 内での位置を指定します。

## 例

以下は、現在の文書に適用された最初のスタイルシートの `MediaList` のテキスト表現をコンソールにログ出力するものです。

```css
const stylesheets = document.styleSheets;
let stylesheet = stylesheets[0];
console.log(stylesheet.media.mediaText);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
