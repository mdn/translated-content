---
title: "Range: detach() メソッド"
short-title: detach()
slug: Web/API/Range/detach
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

**`Range.detach()`** メソッドは何もしません。使用するのは {{domxref("Range")}} オブジェクトを無効にして、ブラウザーが関連リソースを解放できるようにするためです。このメソッドは互換性のために維持されています。

## 構文

```js-nolint
detach()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
const range = document.createRange();

range.selectNode(document.getElementsByTagName("div").item(0));
range.detach();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [DOM インターフェイス索引](/ja/docs/Web/API/Document_Object_Model)
