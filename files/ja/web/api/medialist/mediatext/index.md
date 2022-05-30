---
title: MediaList.mediaText
slug: Web/API/MediaList/mediaText
tags:
  - API
  - CSSOM
  - MediaList
  - プロパティ
  - リファレンス
  - mediaText
browser-compat: api.MediaList.mediaText
translation_of: Web/API/MediaList/mediaText
---
{{APIRef("CSSOM")}}

**`mediaText`** は {{domxref("MediaList")}} インターフェイスの{{Glossary("stringifier", "文字列化")}}プロパティで、この `MediaList` をテキストとして表す文字列を返します。新しい `MediaList` を設定することもできます。

## 値

スタイルシートのメディアクエリーを表す文字列です。それぞれは、 `screen and (min-width: 480px), print` のようにカンマで区切られます。

ドキュメントに新しいメディアクエリーを設定したい場合は、 `screen, print` のように、カンマで区切って文字列を指定する必要があります。 `MediaList` は生きたリストであることに注意してください。 `mediaText` によってリストを更新すると、ドキュメントの動作がすぐに更新されます。

また、 `mediaText` に `null` を設定しようとすると、空文字列として扱われ、その値は `""` に設定されることに注意してください。

## 例

次の例は、現在のドキュメントに適用された最初のスタイルシートの `MediaList` のテキスト表現をコンソールにログ出力するものです。

```css
const stylesheets = document.styleSheets;
let stylesheet = stylesheets[0];
console.log(stylesheet.media.mediaText);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
