---
title: Binding （バインド）
slug: Glossary/Binding
l10n:
  sourceCommit: 1c4869cdb1a9a9c3cafba87a2cd9469591f7aa47
---

{{GlossarySidebar}}

プログラミングにおいて**バインド**とは、{{glossary("identifier","識別子")}}と値の関連付けのことです。バインドは{{glossary("variable", "変数")}}だけとは限りません。例えば、関数の{{glossary("parameter", "引数")}}や {{jsxref("Statements/try...catch", "catch (e)")}} ブロックで作成されるバインドは、厳密な意味での「変数」ではありません。さらに、一部のバインドは言語によって暗黙に作成されます。例えば、 JavaScript の {{jsxref("Operators/this", "this")}} や [`new.target`](/ja/docs/Web/JavaScript/Reference/Operators/new.target) などです。

バインドは代入可能であれば{{glossary("mutable", "変更可能")}}であり、そうでなければ{{glossary("immutable", "変更不可")}}です。これは、保持している値が変更不可であるという意味ではありません。

バインドはよく{{glossary("scope", "スコープ")}}と関連付けられます。 JavaScript でバインドを再宣言できるかどうかは、バインドを作成するために使用された構築方法に依存します。

## 関連情報

- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/const", "const")}}
- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/class", "class")}}
