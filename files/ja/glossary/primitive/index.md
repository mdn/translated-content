---
title: Primitive (プリミティブ)
slug: Glossary/Primitive
---

{{Glossary("JavaScript")}} において、**プリミティブ** (primitive、プリミティブ値、プリミティブデータ型) は{{Glossary("object","オブジェクト")}}でなく、{{glossary("method","メソッド")}}を持たないデータのことです。 6 種類のプリミティブデータ型があります。{{Glossary("string","文字列")}}、{{Glossary("number","数値")}}、{{Glossary("bigint","BigInt")}}、{{Glossary("boolean","真偽値")}}、{{Glossary("undefined")}}、そして{{Glossary("symbol","シンボル")}} ({{Glossary("ECMAScript")}} 2016 で追加) です。また、プリミティブに見える {{Glossary("null")}} もありますが、実際にはすべての {{jsxref("Object")}} の特殊なケースです。そして、構造化された型はすべてプロトタイプチェーンによって `null` から派生しています。

多くの場合、プリミティブ値は、その言語実装の最下層にて直接的に表現されます。

すべてのプリミティブ値は、**イミュータブル** (immutable) 、つまり変更できません。変数には新しい値を再割り当てすることができますが、既存の値については、オブジェクト、配列、関数が変更できるのに対して、プリミティブ値は変更することができません。

## 例

この例は、プリミティブ値が**変更不可**である事実を理解するために役立つでしょう。

### JavaScript

```js
// 文字列のメソッドを使用しても文字列は変更されない
var bar = "baz";
console.log(bar);               // baz
bar.toUpperCase();
console.log(bar);               // baz

// 配列のメソッドを使用すると配列が変更される
var foo = [];
console.log(foo);               // []
foo.push("plugh");
console.log(foo);               // ["plugh"]

// プリミティブ値を代入することで新しい (変更されたわけではない) 値になる
bar = bar.toUpperCase();       // BAZ
```

プリミティブ値は置き換えることができますが、直接変更することはできません。

## 他の例 \[ 手順を追って ]

以下の例は JavaScript がプリミティブ値をどのように扱うかを概観するのに役立つでしょう。

### JavaScript

```js
// プリミティブ値
let foo = 5;

// プリミティブ値を変更する関数を定義
function addTwo(num) {
   num += 2;
}
// 同じことをしようとする第二の関数
function addTwo_v2(foo) {
   foo += 2;
}

// 最初の関数を、プリミティブ値を引数として呼び出す
addTwo(foo);
// 現在のプリミティブ値を取得
console.log(foo);   // 5

// 第二の関数を呼び出してみる...
addTwo_v2(foo);
console.log(foo);   // 5
```

`5` ではなく `7` になると思いませんでしたか？そう思った場合は、このコードがどのように実行されるかを見てください。

- `addTwo` および `addTwo_v2` の両関数の呼び出しにおいて、 JavaScript は `foo` 識別子の値を探します。最初の文で確立された変数が見つかります。
- 見つかったら、式が評価されて `foo` が 5 で置き換えられ、 JavaScript エンジンはその値を関数に引数として渡します。
- 関数本体の中の文を実行する前に、 **JavaScript は渡された引数のコピーを取り** (すなわちプリミティブ値)、ローカルのコピーを生成します。これらのコピーは、関数のスコープの中でしか存在せず、関数定義の中で指定された識別子でアクセスすることができます (`addTwo` では `num`、 `addTwo_v2` では `foo`)
- それから関数内の文が実行されます。

  - 最初の関数では、ローカル変数 `num` が生成されます。この値を 2 つ増加させますが、元の `foo` の値ではありません。
  - 二番目の関数では、ローカル変数 `foo` が生成されます。この値を 2 つ増加させますが、元の (外部の) `foo` の値ではありません。このような場合、外部変数 `foo` は直接アクセスすることができません。これは JavaScript の語彙スコープであり、結果的に変数を見えなくするためです。ローカルの `foo` が外側の `foo` を隠します。詳しくは、[クロージャー](/ja/docs/Web/JavaScript/Closures)をご覧ください。 (なお、 `window.foo` を使用して外部変数 `foo` へアクセスすることができます。)

- 結果として、関数内で変更を行っても**コピー**に対して作業をすることになるので、元の `foo` にはまったく影響**しません**。

これが、プリミティブ値が変更不可である理由です - 直接作業するのではなく、*元の値に影響せずにコピーで*作業しています。

## JavaScript のプリミティブラッパーオブジェクト

`null` と `undefined` を除くすべてのプリミティブ値には、そのプリミティブ値を内包する等価のラッパーオブジェクトがあります。

- {{jsxref("String")}}: 文字列プリミティブ用。
- {{jsxref("Number")}}: 数値プリミティブ用
- {{jsxref("BigInt")}}: 巨大整数プリミティブ用。
- {{jsxref("Boolean")}}: {{Glossary("boolean","真偽値")}}プリミティブ用。
- {{jsxref("Symbol")}}: {{Glossary("symbol","シンボル")}}プリミティブ用。

ラッパーの {{jsxref("Global_Objects/Object/valueOf","valueOf()")}} メソッドは、そのプリミティブ値を返します。

## 詳細情報

### 基礎知識

- [JavaScript のデータ構造](/ja/docs/Web/JavaScript/Data_structures)
- Wikipedia の [プリミティブ型](https://ja.wikipedia.org/wiki/プリミティブ型) の記事

1. [用語集](/ja/docs/Glossary)

    1. {{Glossary("JavaScript")}}
    2. {{Glossary("string", "文字列")}}
    3. {{Glossary("number")}}
    4. {{Glossary("bigint")}}
    5. {{Glossary("boolean")}}
    6. {{Glossary("null")}}
    7. {{Glossary("undefined")}}
    8. {{Glossary("symbol")}}

2. [JavaScript のデータ型](/ja/docs/Web/JavaScript/Data_structures)
