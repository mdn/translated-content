---
title: "CharacterData: data プロパティ"
slug: Web/API/CharacterData/data
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef("DOM")}}

**`data`** は {{domxref("CharacterData")}} インターフェイスのプロパティで、現在のオブジェクトのデータの値を表します。

## 値

この {{domxref("CharacterData")}} ノードに含まれる文字情報による文字列です。

## 例

> **メモ:** {{domxref("CharacterData")}} は抽象インターフェイスです。
> 以下の例はこれを実装した 2 つの具象インターフェイス、 {{domxref("Text")}} と {{domxref("Comment")}} を使用しています。

### data を使用したコメントの読み取り

```html
<!-- これは HTML のコメントです -->
<output id="result"></output>
```

```js
const comment = document.body.childNodes[1];
const output = document.getElementById("result");

output.value = comment.data;
```

{{EmbedLiveSample("Reading_a_comment_using_data", "100%", 50)}}

### data を使用してテキストノードの内容を設定

```html
<span>結果: </span>未設定
```

```js
const span = document.querySelector("span");
const textnode = span.nextSibling;

textnode.data = "このテキストは 'textnode.data' を使用して設定されました。";
```

{{EmbedLiveSample("Setting_the_content_of_a_text_node_using_data", "100%", 50)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("CharacterData.length")}}: この {{domxref("CharacterData")}} ノードに含まれるデータの長さを返す
