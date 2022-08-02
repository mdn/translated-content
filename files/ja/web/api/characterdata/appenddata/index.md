---
title: CharacterData.appendData()
slug: Web/API/CharacterData/appendData
tags:
  - メソッド
  - リファレンス
browser-compat: api.CharacterData.appendData
translation_of: Web/API/CharacterData/appendData
---
{{APIRef("DOM")}}

**`appendData()`** は {{domxref("CharacterData")}} インターフェイスのメソッドで、指定されたデータをこのノードの現在のデータの末尾に追加します。

## 構文

```js
appendData(data);
```

### 引数

- `data`
  - : 現在のノードに追加するデータです。

### 返値

なし。

## 例

```html
<span>Result: </span>A text
```

```js
let span = document.getElementsByTagName("span")[0];
let textnode = span.nextSibling;

textnode.appendData(" - appended text.");
```

{{EmbedLiveSample("Example", "100%", 50)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("CharacterData.deleteData()")}}, {{domxref("CharacterData.insertData()")}}, {{domxref("CharacterData.replaceData()")}}
- {{domxref("CharacterData.data")}}
