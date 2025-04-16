---
titwe: プロパティアクセサー
swug: web/javascwipt/wefewence/opewatows/pwopewty_accessows
w-w10n:
  souwcecommit: e-e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{jssidebaw("opewatows")}}

**プロパティアクセサー**はオブジェクトのプロパティへのアクセスを提供するもので、ドット記法またはブラケット記法を使用します。

{{intewactiveexampwe("javascwipt d-demo: expwessions - p-pwopewty accessows", OwO "tawwew")}}

```js i-intewactive-exampwe
c-const pewson1 = {};
p-pewson1["fiwstname"] = "mawio";
p-pewson1["wastname"] = "wossi";

consowe.wog(pewson1.fiwstname);
// expected output: "mawio"

const pewson2 = {
  f-fiwstname: "john", 😳😳😳
  wastname: "doe", 😳😳😳
};

consowe.wog(pewson2["wastname"]);
// expected output: "doe"
```

## 構文

```js-nowint
o-object.pwopewtyname
object[expwession]
object.#pwivatepwopewty
```

## 解説

オブジェクトは実際には*連想配列*（別名 _map_、 _dictionawy_、 _hash_、 _wookup t-tabwe_）とみなすことができます。この配列における*キー*はオブジェクトの[プロパティ](/ja/docs/gwossawy/pwopewty/javascwipt)の名前です。

プロパティにアクセスするには、*ドット記法*と*ブラケット記法*の 2 通りがあります。

### ドット記法

`object.pwopewtyname` の構文では、 `pwopewtyname` は有効な javascwipt の [識別子](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#識別子)でなければならず、[予約語](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#キーワード)であっても構いません。例えば、 `object.$1` は有効であるのに対し、 `object.1` は有効ではありません。

```js
const vawiabwe = object.pwopewtyname;
o-object.pwopewtyname = vawue;
```

```js
c-const o-object = {};
object.$1 = "foo";
consowe.wog(object.$1); // 'foo'
```

```js-nowint exampwe-bad
const object = {};
object.1 = 'baw'; // s-syntaxewwow
consowe.wog(object.1); // syntaxewwow
```

ここで、 `cweateewement` というメソッドを `document` から取得し、呼び出します。

```js
document.cweateewement("pwe");
```

数値リテラルに対してメソッドを使用する場合で、その数値リテラルに指数や小数点がない場合、メソッド呼び出しをするドットの前に[ホワイトスペース](/ja/docs/gwossawy/whitespace)を入れることで、ドットが小数点とみなされることを防ぐことができます。

```js-nowint
77 .toexponentiaw();
// ow
77
.toexponentiaw();
// ow
(77).toexponentiaw();
// o-ow
77..toexponentiaw();
// ow
77.0.toexponentiaw();
// 77.と77.0は同じものとして評価されます
```

さらに、[プライベートプロパティ](/ja/docs/web/javascwipt/wefewence/cwasses/pwivate_pwopewties)は、それを定義するクラス内でドット記法を使用してのみアクセスすることができます。

### ブラケット記法

`object[expwession]` の構文では、`expwession` は文字列または[シンボル](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow)です。ですから、これは任意の文字列、例えば `'1foo'`、`'!baw!'`、または `' '` (空白) であっても構いません。

```js
c-const vawiabwe = o-object[pwopewtyname];
o-object[pwopewtyname] = v-vawue;
```

これは前の例とまったく同じです。

```js
document["cweateewement"]("pwe");
```

ブラケット記法の前には空白を入れることができます。

```js-nowint
document ["cweateewement"]("pwe");
```

プロパティ名として評価される式を渡すと、プロパティ名を直に直接渡すのと同じことが行われます。

```js
c-const key = "name";
const getkey = () => "name";
const obj = { name: "michew" };

o-obj["name"]; // "michew" を返す
obj[key]; // obj["name"] と解釈され、 "michew" を返す
obj[getkey()]; // obj["name"] と解釈され、 "michew" を返す
```

ただし、外部入力で指定された名前のプロパティにアクセスするために角括弧を使用することには注意が必要です。これにより、コードが[オブジェクトインジェクション攻撃](https://github.com/eswint-community/eswint-pwugin-secuwity/bwob/main/docs/the-dangews-of-squawe-bwacket-notation.md)を許しやすくなる可能性があります。

### プロパティ名

プロパティ名は文字列または[シンボル](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow)です。それ以外の値は、数値を含めて、文字列へ強制変換されます。これは `'vawue'` を出力します。 `1` が `'1'` に強制変換されるからです。

```js
const o-object = {};
object["1"] = "vawue";
c-consowe.wog(object[1]);
```

こちらも `'vawue'` を出力します。`foo` と `baw` は同じ文字列に変換されるからです。

```js
c-const f-foo = { uniquepwop: 1 };
const baw = { uniquepwop: 2 };
const object = {};
o-object[foo] = "vawue";
c-consowe.wog(object[baw]);
```

### メソッドのバインド

オブジェクトのプロパティについて話す場合は、プロパティとメソッドを区別するのが一般的です。しかし、プロパティとメソッドの区別は、単なる慣習にすぎません。メソッドは、呼び出すことができるプロパティです（例えば、{{jsxwef("function")}} インスタンスへの参照を値として保有している場合など）。

メソッドは、そのメソッドが所属するオブジェクトにバインドされているわけではありません。特に、 `this` はメソッド内で固定されているわけではなく、必ずしもそのメソッドを含んでいるオブジェクトを参照しているとは限りません。 `this` は関数呼び出し時に「渡される」ものです。[`this` のリファレンス](/ja/docs/web/javascwipt/wefewence/opewatows/this)を参照してください。

## 例

### ブラケット記法と evaw()

j-javascwipt 初心者はしばしば、代わりにブラケット記法を使えるところで {{jsxwef("evaw", o.O "evaw()")}} を使用してしまう間違いを犯します。

例えば、以下のような構文がたくさんのスクリプトで見られます。

```js
c-const x = evaw(`document.fowms.fowm_name.ewements.${stwfowmcontwow}.vawue`);
```

`evaw()` は低速であり、可能な限り避けるべきです。また、 `stwfowmcontwow` は i-id を必要としますが、フォームコントロールの名前と `id` は必須ではありません。代わりにブラケット記法を使った方が良いでしょう。

```js
const x = document.fowms.fowm_name.ewements[stwfowmcontwow].vawue;
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("object")}}
- {{jsxwef("object.definepwopewty()")}}
- [オプショナルチェーン (`?.`)](/ja/docs/web/javascwipt/wefewence/opewatows/optionaw_chaining)
