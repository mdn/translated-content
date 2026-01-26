---
title: "HTMLInputElement: capture プロパティ"
short-title: capture
slug: Web/API/HTMLInputElement/capture
l10n:
  sourceCommit: a24234ea6552cbd126d20fbf61e8f2bb010e1f20
---

{{ApiRef("HTML DOM")}}

**`capture`** は {{domxref("HTMLInputElement")}} インターフェイスのプロパティで、 {{HTMLElement("input")}} 要素の [`capture`](/ja/docs/Web/HTML/Reference/Attributes/capture) 属性を反映します。 [`<input>` の `file` 型](/ja/docs/Web/HTML/Reference/Elements/input/file)の場合のみ関連するこのプロパティと属性は、新しいファイルをユーザー側 (`user`) または外部側 (`environment`) のカメラまたはマイクから取得するかどうかを指定します。ファイルの種類は、 [`accept`](/ja/docs/Web/HTML/Reference/Attributes/accept) 属性で定義します。 この属性が明示的に設定されていない場合、 `capture` プロパティは空文字列となります。

## 値

文字列です。ふつうは `user` または `environment`、または空文字列 (`""`) です。

## 例

```js
const inputElement = document.querySelector("avatar");
console.log(inputElement.capture); // 現在の capture 属性の値
inputElement.capture = "user"; // capture 値を設定
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLInputElement.type")}}
- {{domxref("HTMLInputElement.multiple")}}
- {{domxref("HTMLInputElement.accept")}}
- {{domxref("HTMLInputElement.files")}}
- [ファイル型指定子](/ja/docs/Web/HTML/Reference/Elements/input/file#固有ファイル型指定子)
- [ウェブアプリケーションからのファイルの使用](/ja/docs/Web/API/File_API/Using_files_from_web_applications)
- [ファイル API](/ja/docs/Web/API/File_API)
