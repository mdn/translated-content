---
title: "Range: createContextualFragment() メソッド"
short-title: createContextualFragment()
slug: Web/API/Range/createContextualFragment
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

**`Range.createContextualFragment()`** メソッドは、範囲の先頭ノード（選択されたノードの親）をコンテキストノードとして、 HTML フラグメント構文解析アルゴリズムまたは XML フラグメント構文解析アルゴリズムを呼び出して {{domxref("DocumentFragment")}} を返します。 HTML フラグメント解釈アルゴリズムは、範囲が HTMLness ビットが設定された `Document` に属している場合に使用します。 HTML では、コンテキストノードが `html` である場合、歴史的な理由から、フラグメント解釈アルゴリズムは `body` をコンテキストとして呼び出されます。

## 構文

```js-nolint
createContextualFragment(tagString)
```

### 引数

- `tagString`
  - : 文書フラグメントに変換するテキストとタグを格納するテキストです。

### 返値

{{domxref("DocumentFragment")}} オブジェクトです。

## 例

```js
const tagString = "<div>I am a div node</div>";
const range = document.createRange();

// 文書内の最初の div の親をコンテキストノードにします。
range.selectNode(document.getElementsByTagName("div").item(0));
const documentFragment = range.createContextualFragment(tagString);
document.body.appendChild(documentFragment);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [DOM インターフェイス索引](/ja/docs/Web/API/Document_Object_Model)
