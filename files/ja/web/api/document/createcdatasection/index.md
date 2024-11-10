---
title: "Document: createCDATASection() メソッド"
short-title: createCDATASection()
slug: Web/API/Document/createCDATASection
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

**`createCDATASection()`** は、新しい CDATA セクションを生成して返します。

## 構文

```js-nolint
createCDATASection(data)
```

### 引数

- `data`
  - : CDATA セクションに追加されるデータを含む文字列です。

### 返値

[CDATA セクション](/ja/docs/Web/API/CDATASection)ノードです。

## 例

```js
const docu = new DOMParser().parseFromString("<xml></xml>", "application/xml");
const cdata = docu.createCDATASection("Some <CDATA> data & then some");
docu.querySelector("xml").appendChild(cdata);
console.log(new XMLSerializer().serializeToString(docu));
// 表示結果: <xml><![CDATA[Some <CDATA> data & then some]]></xml>
```

## メモ

- これは XML でのみ動作し、 HTML 文書では動作しません（HTML 文書は CDATA セクションに対応していません）。 HTML 文書でこれを用いた場合、 `NOT_SUPPORTED_ERR` が発生します。
- 引数として渡す文字列データの一部に CDATA を閉じるシーケンス ("`]]>`") が含まれている場合、 `NS_ERROR_DOM_INVALID_CHARACTER_ERR` 例外が発生します。エスケープされていないユーザー提供のデータは、このメソッドで例外処理を行わないと、安全に使用できません（多くの場合は {{domxref("document.createTextNode","createTextNode()")}} で代用できます）。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
