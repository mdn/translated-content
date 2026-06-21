---
title: "Selection: collapse() メソッド"
short-title: collapse()
slug: Web/API/Selection/collapse
l10n:
  sourceCommit: da1442e0040419eb105f0720fd539adb5d5ca286
---

{{ApiRef("DOM")}}

**`Selection.collapse()`** メソッドは、現在の選択範囲を単一の点に収縮させます。文書は変更されません。そのコンテンツがフォーカスされており、編集可能な状態である場合、その位置でカーソルが点滅します。

> [!NOTE]
> このメソッドは {{domxref("Selection.setPosition()")}} メソッドの別名です。

## 構文

```js-nolint
collapse(node)
collapse(node, offset)
```

### 引数

- `node`
  - : キャレットの位置はこのノード内になります。この値は `null` に設定することも可能です。`null` を指定した場合、このメソッドは {{domxref("Selection.removeAllRanges()")}} と同様に動作し、選択範囲からすべての範囲を削除します。
- `offset` {{optional_inline}}
  - : 選択範囲が折りたたまれる `node` 内のオフセット。指定しない場合は、デフォルト値の `0` が使用されます。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
// HTML 文書の body の先頭にキャレットを置きます。
const body = document.querySelector("body");
window.getSelection().collapse(body, 0);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Selection.setPosition()")}}
