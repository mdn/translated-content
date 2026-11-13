---
title: Method (メソッド)
slug: Glossary/Method
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**メソッド**は{{glossary("function", "関数")}}のうち、{{glossary("object","オブジェクト")}}の{{glossary("property","プロパティ")}}であるものです。メソッドには 2 つの種類があります。オブジェクトインスタンスごとに内蔵されたタスクとして実行されるインスタンスメソッドと、オブジェクトのコンストラクターで直接呼び出しを行うタスクである{{Glossary("static method", "静的メソッド")}}です。

> [!NOTE]
> JavaScript では、関数自身はオブジェクトです。そういう意味では、メソッドは実際には関数への{{glossary("object reference", "オブジェクト参照")}}です。

`F` が `O` のメソッドであると言われる場合、多くの場合、`F` が `O` を [`this`](/ja/docs/Web/JavaScript/Reference/Operators/this) のバインディングとして使用していることを意味します。`this` の値によって挙動が変わらない関数プロパティ（あるいは、[バインド済み関数](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)や[アロー関数](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions)のように、動的な `this` バインディングをまったく持たないもの）は、必ずしもメソッドとして広く認識されているとは限りません。

## 関連情報

- [メソッド\_(計算機科学)](<https://ja.wikipedia.org/wiki/メソッド_(計算機科学)>) - ウィキペディア
- [JavaScript のメソッドの定義方法](/ja/docs/Web/JavaScript/Reference/Functions/Method_definitions) (従来の構文と新しい簡略記法の比較)
- [JavaScript 内蔵メソッド一覧](/ja/docs/Web/JavaScript/Reference)
- 関連用語:
  - {{Glossary("function", "関数")}}
  - {{Glossary("object","オブジェクト")}}
  - {{Glossary("property","プロパティ")}}
  - {{Glossary("static method","静的メソッド")}}
