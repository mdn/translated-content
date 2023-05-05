---
title: "CharacterData: appendData() メソッド"
slug: Web/API/CharacterData/appendData
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef("DOM")}}

**`appendData()`** は {{domxref("CharacterData")}} インターフェイスのメソッドで、指定されたデータをこのノードの現在のデータの末尾に追加します。

## 構文

```js-nolint
appendData(data)
```

### 引数

- `data`
  - : 現在のノードに追加するデータです。

### 返値

なし。

## 例

```html
<span>結果: </span>テキスト
```

```js
const span = document.querySelector("span");
const textnode = span.nextSibling;

textnode.appendData(" - 追加テキスト");
```

{{EmbedLiveSample("Example", "100%", 50)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("CharacterData.deleteData()")}}, {{domxref("CharacterData.insertData()")}}, {{domxref("CharacterData.replaceData()")}}
- {{domxref("CharacterData.data")}}
