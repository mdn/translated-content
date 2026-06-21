---
title: "Selection: toString() メソッド"
short-title: toString()
slug: Web/API/Selection/toString
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{ ApiRef("DOM") }}

**`Selection.toString()`** メソッドは、範囲選択オブジェクトによって現在表されている文字列、つまり現在選択されているテキストを返します。

## 構文

```js-nolint
toString()
```

### 引数

なし。

### 返値

選択内容を表す文字列です。

## 解説

このメソッドは、現在選択されているテキストを返します。

[JavaScript](/ja/docs/Web/JavaScript) では、選択範囲オブジェクトが渡された関数が文字列を必要とする場合、このメソッドが自動的に呼び出されます。

```js
alert(window.getSelection()); // 呼び出すもの
alert(window.getSelection().toString()); // 呼び出しの実際の効果
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先のインターフェイスである {{domxref("Selection")}}
