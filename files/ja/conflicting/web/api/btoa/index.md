---
title: バイナリー文字列
slug: conflicting/Web/API/btoa
tags:
  - DOM
  - JavaScript
  - JavaScript typed arrays
  - JavaScript 型付き配列
  - Reference
  - String
translation_of: Web/API/DOMString/Binary
original_slug: Web/API/DOMString/Binary
---
{{jsxref("String", "JavaScript の文字列")}} は、UTF-16 でエンコードされた文字列です。つまり、コードの最小単位はメモリー上に 2 バイトを必要とし、`65535` 通りのコードポイントを表現できます。この文字列のある部分集合として、ASCII 文字 (つまりコードポイントが `127` を超えない文字) だけを含む UTF-16 文字列というものが考えられます。例えば、文字列 `"Hello world!"` は、この ASCII 部分集合に含まれますが、文字列 `"ÀÈÌÒÙ"` はそうではありません。**バイナリー文字列**とは、この ASCII 部分集合と似た概念ですが、コードポイントを `127` までではなく、`255` まで許可するものです。しかし、その目的は文字列を表現することではなく、バイナリーデータを表現することです。この方法で表現されるデータの大きさは、バイナリーのままに比べて 2 倍になりますが、JavaScript の文字列の長さは 2 バイトを一つの単位として計算されるため、その大きさがユーザーの目に触れることはありません。

バイナリー文字列は、JavaScript の言語設計には含まれていません。しかし、バイナリー文字列を入力として受け取るネイティブ関数が少なくとも一つあり、それは {{domxref("WindowBase64.btoa","btoa()")}} です。コードポイントが `255` を超える文字列を使ってこの関数を実行すると、`Character Out Of Range` エラーが発生します。

`uint8` の数値の代わりに UTF-16 のコード単位を使うようになった理由は、ウェブアプリケーションがどんどん強力になっていくにつれて (音声や映像の処理や、WebSockets を使った生データへのアクセスなどができるようになりました)、JavaScript コードが生のバイナリーデータを迅速かつ容易に処理できれば便利である場面があることが明らかになったからです。

かつては、バイナリーデータを扱うには、データを[文字列](/ja/docs/JavaScript/Reference/Global_Objects/String)として扱い、[`charCodeAt()`](/ja/docs/JavaScript/Reference/Global_Objects/String/charCodeAt) メソッドを使ってデータバッファー (つまりバイナリー文字列) からバイトを読むといった、模擬的な方法によらざるを得ませんでした。しかしこの方法は遅く、複数回の変換が必要になるため、エラーも起こしやすいものでした (特にバイナリーデータの構造が実際にはバイト単位ではなく、例えば 32 ビットの整数や実数である場合)。

[JavaScript 型付き配列](/ja/docs/Web/JavaScript/Typed_arrays) を使えば、より効率的に生のバイナリーデータを処理することができます。また、[`StringView`](/ja/docs/Web/JavaScript/Typed_arrays/StringView) <span class="inlineIndicator" title="この API はネイティブではありません">非ネイティブ</span> コンストラクターは、型付き配列の 1 レベル上であり、[C 言語](https://ja.wikipedia.org/wiki/C%E8%A8%80%E8%AA%9E) に似た文字列用のインターフェイスを提供します。

## 関連情報

- [JavaScript 型付き配列](/ja/docs/Web/JavaScript/Typed_arrays)
- [`DOMString`](/ja/docs/Web/API/DOMString)
- [String](/ja/docs/Web/JavaScript/Reference/Global_Objects/String)
- [`StringView`](/ja/docs/Web/JavaScript/Typed_arrays/StringView)
