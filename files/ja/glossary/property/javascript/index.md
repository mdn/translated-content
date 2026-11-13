---
title: Property (プロパティ) (JavaScript)
slug: Glossary/Property/JavaScript
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{GlossarySidebar}}

**JavaScript プロパティ**は、[オブジェクト](/ja/docs/Web/JavaScript/Guide/Data_structures#オブジェクト)のメンバーであり、キーと値が関連付けられたものです。 JavaScript オブジェクトとは、プロパティの集合を保持するために使用されるデータ構造です。

プロパティは次の部分から構成されます。

- 「名前」（「キー」とも呼ばれる）。これは[文字列](/ja/docs/Web/JavaScript/Reference/Global_Objects/String)と[シンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol)のどちらかです。
- 「値」。これは任意の JavaScript の値です。値として関数を持つプロパティのことを、{{Glossary("method","メソッド")}}とも呼びます。
- 少数の「属性」。これはそのプロパティがどのように読み書きできるかを示すものです。一つのプロパティには `configurable`、`enumerable`、`writable` の各属性があります。

[アクセサープロパティ](/ja/docs/Web/JavaScript/Guide/Data_structures#accessor_property)の場合は、実際の「値」を持ちません。値は、読み込む際に呼び出されるゲッターと、値を設定する際に呼び出されるセッターという 2 つの関数を通じて間接的に表されます。しかし、アクセサープロパティではゲッターとセッター関数が自動的に呼び出され、通常はJavaScriptコードに対して透過的であるため、表面上は通常のデータプロパティのように動作します。

プロパティの値（ゲッターとセッターを含む）と属性は、プロパティ記述子と呼ばれるデータレコードに格納されます。 {{jsxref("Object.getOwnPropertyDescriptor()")}} や {{jsxref("Object.defineProperty()")}} など、多くのメソッドがプロパティ記述子を扱います。

「プロパティ」という用語自体は抽象的な概念であり、 JavaScript の値とは関連がありません。例えば、次のコードをご覧ください。

```js
const obj = {
  a: 1,
  b() {},
};
```

オブジェクト `obj` は 2 つのプロパティを持っています。最初のプロパティは、キーが `"a"`、値が `1` です。 2 つ目のプロパティは、キーが `"b"`、値が関数（[メソッド構文](/ja/docs/Web/JavaScript/Reference/Functions/Method_definitions)を使用）です。 `"a"` が `1`、`"b"` が `function` という関連付けが、オブジェクトのプロパティです。

[クラス](/ja/docs/Web/JavaScript/Reference/Classes)の文脈では、プロパティは、各インスタンスが所有するインスタンスプロパティと、クラスが所有し、すべてのインスタンスに共通するデータを保持する静的プロパティに分けることができます。[継承](/ja/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)の文脈では、プロパティは、オブジェクト自身が所有する所有プロパティと、オブジェクトのプロトタイプチェーン内のオブジェクトが所有する継承プロパティに分けることもできます。

プロパティの読み書きに関する詳細は、[オブジェクトでの作業](/ja/docs/Web/JavaScript/Guide/Working_with_objects)を参照してください。

## 関連情報

- [プロパティ](https://ja.wikipedia.org/wiki/プロパティ)（ウィキペディア）
- [オブジェクト志向 JavaScript 入門](/ja/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects)
- [オブジェクトプロパティ](/ja/docs/Web/JavaScript/Guide/Data_structures#プロパティ)
- [プロパティの列挙可能性と所有権](/ja/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
