---
title: CharacterData.length
slug: Web/API/CharacterData/length
tags:
  - プロパティ
  - リファレンス
  - 読み取り専用
browser-compat: api.CharacterData.length
translation_of: Web/API/CharacterData/length
---
{{APIRef("DOM")}}

**`CharacterData.length`** プロパティは読み取り専用で、含まれているデータの文字数を正の整数で返します。

## 値

正の整数で、 {{domxref("CharacterData.data")}} 文字列の長さを表します。

## 例

> **Note:** {{domxref("CharacterData")}} は抽象インターフェイスです。
> The examples below use {{domxref("Text")}}, a concrete interface implementing it.

```html
Length of the string in the `Text` node: <output></output>
```

```js
let output = document.getElementsByTagName("output")[0];
let textnode = new Text("This text has been set using textnode.data.");

output.value = textnode.length;
```

{{EmbedLiveSample("Example", "100%", 50)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
