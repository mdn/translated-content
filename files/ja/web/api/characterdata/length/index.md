---
title: "CharacterData: length プロパティ"
slug: Web/API/CharacterData/length
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef("DOM")}}

**`CharacterData.length`** プロパティは読み取り専用で、含まれているデータの文字数を正の整数で返します。

## 値

正の整数で、 {{domxref("CharacterData.data")}} 文字列の長さを表します。

## 例

> **メモ:** {{domxref("CharacterData")}} は抽象インターフェイスです。
> 以下の例ではそれを実装した具象インターフェイスの一つである {{domxref("Text")}} を使用しています。

```html
<code>Text</code> ノード内の文字列の長さ: <output></output>
```

```js
const output = document.querySelector("output");
const textnode = new Text(
  "このテキストは 'textnode.data' を使用して設定されました。",
);

output.value = textnode.length;
```

{{EmbedLiveSample("Example", "100%", 50)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
