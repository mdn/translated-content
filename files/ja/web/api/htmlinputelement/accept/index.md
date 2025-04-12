---
title: "HTMLInputElement: accept プロパティ"
short-title: accept
slug: Web/API/HTMLInputElement/accept
l10n:
  sourceCommit: a24234ea6552cbd126d20fbf61e8f2bb010e1f20
---

{{ApiRef("HTML DOM")}}

**`accept`** は {{domxref("HTMLInputElement")}} インターフェイスのプロパティで、{{HTMLElement("input")}} 要素の [`accept`](/ja/docs/Web/HTML/Reference/Elements/input#accept) 属性を反映し、一般にカンマで区切られた固有ファイル型指定子のリストで、[`<input>` の `file` 型](/ja/docs/Web/HTML/Reference/Elements/input/file)に期待されるファイル型のヒントを提供します。この属性が明示的に設定されていない場合、`accept` 属性は空文字列になります。

## 値

要素の `accept` 値を表す文字列、または `accept` が明示的に設定されていない場合は空文字列。

## 例

```js
const inputElement = document.querySelector("#time");
console.log(inputElement.accept); // accept 属性の現在の値
inputElement.accept = ".doc,.docx,.xml,application/msword"; // accept 値を設定
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLInputElement.type")}}
- {{domxref("HTMLInputElement.multiple")}}
- {{domxref("HTMLInputElement.capture")}}
- [ファイル型指定子](/ja/docs/Web/HTML/Reference/Elements/input/file#固有ファイル型指定子)
- [ウェブアプリケーションからのファイルの使用](/ja/docs/Web/API/File_API/Using_files_from_web_applications)
- [ファイル API](/ja/docs/Web/API/File_API)
