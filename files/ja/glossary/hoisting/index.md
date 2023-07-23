---
title: Hoisting (巻き上げ、ホイスティング)
slug: Glossary/Hoisting
---

巻き上げ (Hoisting) は、[ECMAScript® 2015 言語仕様](http://www.ecma-international.org/ecma-262/6.0/index.html)より前には、どんな規範的な仕様書にもなかったものです。巻き上げは JavaScript の実行コンテキスト (特に作成と実行のフェーズで) では一般的な方法と考えられていました。しかし、巻き上げの概念は誤解に繋がる可能性があります。

概念的には、例えば、厳密な定義では、変数や関数の宣言が物理的にコードの先頭に移動されることを示唆していますが、実際にはそうではありません。変数や関数の宣言は*コンパイル*時にメモリに格納されますが、コード内で入力された場所は変わりません。

## 詳細情報

### 技術的な例

JavaScript で関数宣言がコード領域を実行する前にメモリーに配置される利点は、コードで関数を定義する前に使うことができることです。例えば:

```js
function catName(name) {
  console.log("My cat's name is " + name);
}

catName("Tiger");

/*
上記のコードの結果: "My cat's name is Tiger"
*/
```

上記のコード断片はコードが動作するように書いたよう期待する方法です。今度は、関数を書く前に関数を呼び出したらどうでしょう。

```js
catName("Chloe");

function catName(name) {
  console.log("My cat's name is " + name);
}
/*
上記のコードの結果は: "My cat's name is Chloe"
*/
```

コード内で関数を書く前に、関数呼び出しを最初に書いても、コードは動作します。これは JavaScript でコンテキスト実行が動作するためです。

巻き上げはその他のデータ型や変数でも同様に動作します。変数は定義の前に初期化して使うことができます。しかし初期化しないと使うことができません。

### 定義のみが巻き上げられる

JavaScript では定義のみが巻き上げられ、初期化はそうでありません。変数が使用された後に定義や初期化された場合、値は undefined になります。例えば次のようになります。

```js
console.log(num); // undefined を返す。宣言のみが巻き上げられ、この段階では初期化が行われないため
var num; // 宣言
num = 6; // 初期化
```

以下の例では初期化のみが行われています。巻き上げが行われませんので、変数を読み取ろうとすると ReferenceError 例外が発生します。

```js
console.log(num); // ReferenceError 例外が発生
num = 6; // 初期化
```

巻き上げの例をもっと示します。

```js
// 例 1
// y のみが巻き上げられる

x = 1; // x を初期化し、まだ定義されていない場合は、定義する - ただし、文中に var がないので巻き上げは行われない。
console.log(x + " " + y); // '1 undefined'
// JavaScript は宣言のみを巻き上げるので、 y の値の表示はこうなる。
var y = 2; // y の宣言と初期化

// 例 2
// 巻き上げは行われないが、初期化は (まだ宣言されていない場合は) 宣言も行うので、変数は利用できる。

a = "Cran"; // Initialize a
b = "berry"; // Initialize b
console.log(a + "" + b); // 'Cranberry'
```

### 技術リファレンス

- [var 宣言](/ja/docs/Web/JavaScript/Reference/Statements/var) — MDN
- [関数 宣言](/ja/docs/Web/JavaScript/Reference/Statements/function) — MDN
