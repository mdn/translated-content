---
title: CharacterData.data
slug: Web/API/CharacterData/data
tags:
  - プロパティ
  - リファレンス
browser-compat: api.CharacterData.data
translation_of: Web/API/CharacterData/data
---
{{APIRef("DOM")}}

**`data`** は {{domxref("CharacterData")}} インターフェイスのプロパティで、現在のオブジェクトのデータの値を表します。

## 値

この {{domxref("CharacterData")}} ノードに含まれる文字情報による文字列です。

## 例

> **Note:** {{domxref("CharacterData")}} は抽象インターフェイスです。
> 以下の例はこれを実装した 2 つの具象インターフェイス、 {{domxref("Text")}} と {{domxref("Comment")}} を使用しています。

### data を使用したコメントの読み取り

```html
<!-- This is an HTML comment !-->
<output id="Result"></output>
```

```js
let comment = document.body.childNodes[1];
let output = document.getElementById("Result");

output.value = comment.data;
```

{{EmbedLiveSample("Reading_a_comment_using_data", "100%", 50)}}

### data を使用してテキストノードの内容を設定

```html
<span>Result: </span>Not set.
```

```js
let span = document.getElementsByTagName("span")[0];
let textnode = span.nextSibling;

textnode.data = "This text has been set using textnode.data."
```

{{EmbedLiveSample("Setting_the_content_of_a_text_node_using_data", "100%", 50)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("CharacterData.length")}}: この {{domxref("CharacterData")}} ノードに含まれるデータの長さを返す
