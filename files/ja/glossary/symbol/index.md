---
title: Symbol(シンボル)
slug: Glossary/Symbol
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**Symbol(シンボル)** とは、一意で偽造不可能な識別子を表すデータ型です。これらは _アトム_ と呼ばれることもあります。

Symbol(シンボル) は一意であり偽造不可能であるため、Symbol(シンボル) に関連付けられたプロパティ値を読み取るには、元の識別子への参照が必要です。

JavaScript では、`Symbol(シンボル)` は {{Glossary("primitive", "Primitive (プリミティブ)")}} の 1 つであり、毎回異なる Symbol(シンボル) を返すファクトリ メソッド [`Symbol()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol) を使用して作成できます。これらは、他のプロパティと誤って衝突することのないオブジェクトのキーとして使用できます。

JavaScript には、他に 2 種類のシンボルが定義されています。それは、よく知られた Symbol(シンボル) と登録済みの Symbol(シンボル) です。詳しくは、{{jsxref("Symbol")}} のリファレンスを参照してください。

## 関連情報

- ウィキペディアの [データ型](https://ja.wikipedia.org/wiki/%E3%83%87%E3%83%BC%E3%82%BF%E5%9E%8B)
- ウィキペディアの [Symbol(シンボル)](https://ja.wikipedia.org/wiki/Symbol)
- JavaScript のグローバルオブジェクト {{jsxref("Symbol")}}
