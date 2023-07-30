---
title: Constructor (コンストラクター)
slug: Glossary/Constructor
---

**コンストラクター**は、インスタンス化された特定のクラス{{glossary("object","オブジェクト")}}に属しています。コンストラクターは、そのオブジェクトを初期化し、オブジェクトの非公開の情報にアクセスできるようにします。コンストラクターの概念は、ほとんどの{{glossary("OOP","オブジェクト指向プログラミング")}}言語にあります。本質的に、{{glossary("JavaScript")}} のコンストラクターは{{glossary("class","クラス")}}のインスタンスで宣言します。

## 構文

```js
// これは Default クラスの既定のコンストラクターです
function Default() {
}

// これは Overloaded クラスでオーバーロードされた
// 引数付きのコンストラクターです。
function Overloaded(arg1, arg2, ...,argN){
}
```

JavaScript でクラスのコンストラクターを呼び出すには、`new` 演算子を使用して新しい{{glossary("object reference","オブジェクトへの参照")}}を{{glossary("variable","変数")}}に割り当てます。

```js
function Default() {}

// Default オブジェクトの新しい参照が、ローカル変数の
// defaultReference に割り当てられます
var defaultReference = new Default();
```

## 詳細情報

### 一般知識

- ウィキペディアの[コンストラクタ](https://ja.wikipedia.org/wiki/コンストラクタ)の記事

### 技術リファレンス

- MDN の [JavaScript オブジェクト入門のコンストラクター](/ja/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript#The_Constructor)の記事
- MDN の JavaScript の [new 演算子](/ja/docs/Web/JavaScript/Reference/Operators/new)の記事
