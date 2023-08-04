---
title: Document.enableStyleSheetsForSet()
slug: Web/API/Document/enableStyleSheetsForSet
---

{{APIRef("DOM")}}{{deprecated_header}}

現在のスタイルシートセットの中で指定された名前に一致するスタイルシートを有効化し、それ以外のスタイルシートを (常に有効になるタイトルなしのものを除いて) 無効化します。

## 構文

```js
enableStyleSheetsForSet(name);
```

### 引数

- `name`
  - : 有効にするスタイルシートの名前。この名前に一致する題名を持ったスタイルシートはすべて有効化され、他の題名を持つスタイルシートは無効化されます。引数 _name_ に空文字列を指定すると、すべての代替および推奨スタイルシートを無効化します (常設スタイルシート、つまり、 `title` 属性がないものを除く)。

### 返値

なし ({{jsxref("undefined")}})。

## メモ

- 題名は大文字と小文字を区別して照合します。
- このメソッドに `null` の _name_ を指定して呼び出しても効果はありません。すべての代替および推奨スタイルシートを無効化したいのであれば、空文字列 "" を渡す**必要があります**。
- 題名がないスタイルシートは、このメソッドの影響を受けません。
- このメソッドは {{domxref("document.lastStyleSheetSet")}} や {{domxref("document.preferredStyleSheetSet")}} の値に影響しません。

## 例

```js
document.enableStyleSheetsForSet("Some style sheet set name");
```

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Stylesheet")}}
- {{domxref("Document.styleSheets")}}
- {{domxref("document.lastStyleSheetSet")}}
- {{domxref("document.preferredStyleSheetSet")}}
- {{domxref("document.selectedStyleSheetSet")}}
- {{domxref("document.enableStyleSheetsForSet()")}}
- [外部スタイルシートでタイトルを正しく使用する](/ja/docs/Archive/Web_Standards/Correctly_Using_Titles_With_External_Stylesheets)
