---
title: UTF-16
slug: Glossary/UTF-16
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

UTF-16 は {{glossary("Unicode")}} 用の{{glossary("character encoding", "文字エンコーディング")}}の標準です。それぞれの Unicode {{glossary("code point", "コードポイント")}}は 1 つまたは 2 つの{{glossary("code unit", "コード単位")}}を使用してエンコードされます。各コード単位は 16 ビットの値です。

値が 2<sup>16</sup> 未満のコードポイントは、そのコードポイントの値と数値的に等しい単一のコード単位として エンコードされます。これらのコードポイントは [基本多言語面 (BMP)](https://ja.wikipedia.org/wiki/基本多言語面) を構成し、ラテン文字、ギリシャ文字、キリル文字、および多くの東アジア文字を含む最も一般的な文字を含みます。

例えば、ラテン文字の "A" は Unicode においてコードポイント `U+0041` が割り当てられており、これは UTF-16 では単一のコードユニット `41` として表されます。

値が 2<sup>16</sup> を超えるコードポイントは、サロゲートペアと呼ばれるコード単位のペアを用いてエンコード方式でエンコードされます。サロゲートペアに使用される値は、曖昧さを避けるため、 Unicode コードポイントには使用されません。

例えば、絵文字 "🦊" （キツネの顔）は Unicode でコードポイント `U+1F98A` が割り当てられており、これは UTF-16 ではサロゲートペア `d83e dd8a` として表されます。

## JavaScript における UTF-16

JavaScript における文字列は UTF-16 で表され、多くの {{jsxref("String")}} API はコードポイントではなくコード単位で操作します。例えば、{{jsxref("String.length")}} は、基本多文字面 (BMP) に含まれない単一の Unicode 文字の入った文字列に対して `2` を返します。

```js
const string = "🦊"; // U+1F98A
console.log(string.length); // 2
```

{{jsxref("String.charCodeAt()")}} メソッドは指定された位置のコード単位を返し、 {{jsxref("String.codePointAt()")}} メソッドは指定された位置のコードポイントを返します。

```js
const string = "🦊"; // U+1F98A

console.log(string.charCodeAt(0).toString(16)); // d83e
console.log(string.charCodeAt(1).toString(16)); // dd8a

console.log(string.codePointAt(0).toString(16)); // 1f98a
```

JavaScript で UTF-16 文字列を操作する方法について詳しくは、[UTF-16 文字、Unicode コードポイント、書記素クラスター](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_文字、unicode_コードポイント、書記素クラスター)を参照してください。

## UTF-16 と UTF-8

{{glossary("UTF-8")}} は Unicode の別のエンコード方式であり、各 Unicode コードポイントに対して 1 ～ 4 つのバイトが使用されます。 UTF-8 は、ウェブ上の文書において UTF-16 よりもはるかに一般的なエンコード方式です。

## UTF-16 と UCS-2

UCS-2 は Unicode の古いエンコード方式です。 UTF-16 と同一ですが、サロゲートペアに対応していないため、基本多国語面 (BMP) 外のコードポイントをエンコードできません。

## 関連情報

- [UTF-16 文字、Unicode コードポイント、書記素クラスター](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_文字、unicode_コードポイント、書記素クラスター)
- {{glossary("UTF-8")}}
- [UTF-16](https://ja.wikipedia.org/wiki/UTF-16) （ウィキペディア）
