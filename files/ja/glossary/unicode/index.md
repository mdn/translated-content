---
title: Unicode
slug: Glossary/Unicode
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Unicode とは、世界の様々な言語、書式、記号に、番号を割り当てて定義した標準の{{Glossary("Character set","文字コード")}} です。

一つ一つの文字に番号を割り当てることで、プログラマーは、どの言語が混ざっていても、コンピューターに保存、処理、伝送させるための{{Glossary("Character encoding","文字エンコーディング")}}を同じファイルやプログラムの中に作ることができます。

Unicode ができる以前は、同じデータのなかに異なる言語を入れることは難しく、誤りが起こりがちでした。例えば、ある文字コードは日本語の文字を格納するためのもので、別のある文字コードはアラビア文字を格納するためのものだとします。もしデータのどの部分がどの文字コードであるか明確に示していない場合、他のプログラムやコンピューターは、文章を誤って表示してしまったり、処理中にデータを破損してしまったりしていました。曲線の二重引用符 (&ldquo;&rdquo;) などの文字が `Ã‚Â£` のようなわけのわからないものに置き換わっているのを見たことがあるかもしれません。それがこの問題です。[文字化け](https://ja.wikipedia.org/wiki/文字化け)として知られています。

ウェブ上でもっとも一般的な文字エンコーディングは {{Glossary("UTF-8")}} です。UTF-16 や 廃止された UCS-2 といったエンコーディングも存在しますが、UTF-8 が推奨されています。

## 関連情報

- [Unicode](https://ja.wikipedia.org/wiki/Unicode) - ウィキペディア
- [The Unicode Standard: A Technical Introduction](https://www.unicode.org/standard/principles.html)
