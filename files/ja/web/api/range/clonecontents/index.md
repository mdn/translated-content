---
title: "Range: cloneContents() メソッド"
short-title: cloneContents()
slug: Web/API/Range/cloneContents
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ APIRef("DOM") }}

**`Range.cloneContents()`** は、 {{ domxref("Range") }} に含まれる {{ domxref("Node") }} 型のオブジェクトをコピーした {{ domxref("DocumentFragment") }} を返します。

{{domxref("EventTarget.addEventListener()", "addEventListener()")}} を使用して追加されたイベントリスナーは、クローン作成中には複製されません。 HTML 属性のイベントは、 {{ domxref("Node.cloneNode()") }} メソッドの場合と同様に複製されます。メソッドと同じです。 HTML の `id` 属性も複製されますが、これは複製によって無効な文書になる可能性があります。

部分的に選択されたノードは、文書フラグメントを有効にするために必要な親タグが含まれます。

## 構文

```js-nolint
cloneContents()
```

### 引数

なし。

### 返値

{{domxref("DocumentFragment") }} オブジェクトです。

## 例

```js
range = document.createRange();
range.selectNode(document.getElementsByTagName("div").item(0));
documentFragment = range.cloneContents();
document.body.appendChild(documentFragment);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [DOM インターフェイスの索引](/ja/docs/Web/API/Document_Object_Model)
