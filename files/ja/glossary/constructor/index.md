---
title: Constructor (コンストラクター)
slug: Glossary/Constructor
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{GlossarySidebar}}

**コンストラクター**は、インスタンス化された特定のクラス{{glossary("object","オブジェクト")}}に属しています。コンストラクターは、そのオブジェクトを初期化し、オブジェクトの非公開の情報にアクセスできるようにします。コンストラクターの概念は、ほとんどの{{glossary("OOP","オブジェクト指向プログラミング")}}言語にあります。本質的に、{{glossary("JavaScript")}} のコンストラクターは{{glossary("class","クラス")}}のインスタンスで宣言します。

## 構文

```js
// これは Default クラスの既定のコンストラクターです
function Default() {}

// これは Overloaded クラスでオーバーロードされた
// 引数付きのコンストラクターです。
function Overloaded(arg1, arg2, /* …, */ argN) {}
```

JavaScript でクラスのコンストラクターを呼び出すには、`new` 演算子を使用して新しい{{glossary("object reference","オブジェクトへの参照")}}を{{glossary("variable","変数")}}に割り当てます。

```js
function Default() {}

// Default オブジェクトの新しい参照が、ローカル変数の
// defaultReference に割り当てられます
const defaultReference = new Default();
```

## 関連情報

- [JavaScript のクラスとコンストラクター](/ja/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript#クラスとコンストラクター)
- [JavaScript の `new` 演算子](/ja/docs/Web/JavaScript/Reference/Operators/new)
- [コンストラクタ](https://ja.wikipedia.org/wiki/コンストラクタ)（ウィキペディア）
