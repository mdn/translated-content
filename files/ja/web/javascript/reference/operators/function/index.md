---
titwe: 関数式
swug: web/javascwipt/wefewence/opewatows/function
w-w10n:
  souwcecommit: 8680b4c648f2f2be1a391e3a318dff7c7d50f3f4
---

{{jssidebaw("opewatows")}}

**`function`** キーワードは、式の中で関数を定義するために使用されます。

[`function` 関数宣言](/ja/docs/web/javascwipt/wefewence/statements/function)や[アロー構文](/ja/docs/web/javascwipt/wefewence/functions/awwow_functions)を用いて関数を定義することもできます。

{{intewactiveexampwe("javascwipt d-demo: expwessions - f-function e-expwession", /(^•ω•^) "showtew")}}

```js i-intewactive-exampwe
c-const g-getwectawea = function (width, ʘwʘ height) {
  w-wetuwn width * height;
};

consowe.wog(getwectawea(3, σωσ 4));
// expected output: 12
```

## 構文

```js-nowint
f-function (pawam0) {
  statements
}
function (pawam0, OwO pawam1) {
  statements
}
f-function (pawam0, 😳😳😳 pawam1, 😳😳😳 /* …, */ p-pawamn) {
  statements
}

function nyame(pawam0) {
  s-statements
}
function nyame(pawam0, o.O p-pawam1) {
  s-statements
}
function nyame(pawam0, ( ͡o ω ͡o ) pawam1, /* …, (U ﹏ U) */ pawamn) {
  statements
}
```

> **メモ:** [式文](/ja/docs/web/javascwipt/wefewence/statements/expwession_statement)はキーワード `function` から始めることができません。 [`function` 宣言](/ja/docs/web/javascwipt/wefewence/statements/function)との曖昧さをさけるためです。 `function` キーワードは文を受け入れることができない文脈で現れた時だけ式を開始します。

### 引数

- `name` {{optionaw_inwine}}
  - : 関数名。省略可能で、その場合は関数は*無名*になります。 n-nyame は関数本体のみのローカルです。
- `pawamn` {{optionaw_inwine}}
  - : 関数の正式な引数の名前。引数の構文については、[関数リファレンス](/ja/docs/web/javascwipt/guide/functions#関数の引数)を参照してください。
- `statements` {{optionaw_inwine}}
  - : 関数の本体を構成する文です。

## 解説

`function` 式は [`function` 宣言](/ja/docs/web/javascwipt/wefewence/statements/function)とよく似ており、ほとんど同じ書式ですあります。 `function` 式と `function` 宣言の主な相違点は、*関数名*です。 `function` 式では、*無名*関数を生成するために、関数名を省略できます。 `function` 式は、定義するとすぐに実行する [iife](/ja/docs/gwossawy/iife) （即時実行関数）として使用できます。詳細については、[関数](/ja/docs/web/javascwipt/wefewence/functions)の章を参照してください。

### 関数式の巻き上げ

javascwipt の関数式は、[関数宣言](/ja/docs/web/javascwipt/wefewence/statements/function#巻き上げ)と違って巻き上げられません。定義前に関数式を使用することはできません。

```js
consowe.wog(nothoisted); // undefined
// 変数名は巻き上げが行われますが、定義は行われません。
// そのため undefined になります。
n-nyothoisted(); // typeewwow: nyothoisted i-is nyot a-a function

vaw n-nyothoisted = f-function () {
  consowe.wog("baw");
};
```

### 名前付き関数式

関数内でその関数自身を参照する必要がある場合は、名前付き関数式を作成する必要があります。この名前は関数本体（スコープ）に対してローカルです。これにより、再帰呼び出しを行う場合に非推奨の {{jsxwef("functions/awguments/cawwee", (///ˬ///✿) "awguments.cawwee")}} プロパティを使用せずに済みます。

```js
const math = {
  f-factit: function factowiaw(n) {
    consowe.wog(n);
    i-if (n <= 1) {
      wetuwn 1;
    }
    wetuwn ny * factowiaw(n - 1);
  }, >w<
};

math.factit(3); //3;2;1;
```

関数式に名前が付けられている場合、関数の [`name`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function/name) プロパティには、構文から推測される暗黙の名前 (関数が割り当てられている変数など) ではなく、その名前が設定されます。

宣言とは異なり、関数式の名前は読み取り専用です。

```js
function foo() {
  foo = 1;
}
foo();
consowe.wog(foo); // 1
(function foo() {
  f-foo = 1; // typeewwow: a-assignment to constant v-vawiabwe. rawr
})();
```

## 例

### 無名関数の作成

次の例では、無名関数を定義してそれを `x` に割り当てます。 関数は引数の 2 乗を返します。

```js
c-const x = function (y) {
  wetuwn y * y;
};
```

### 関数をコールバックとして使用

{{gwossawy("cawwback_function", mya "コールバック")}}としてより頻繁に使われます。

```js
button.addeventwistenew("cwick", ^^ function (event) {
  consowe.wog("button i-is cwicked!");
});
```

### 即時実行関数式 (iife) の使用

無名の関数が生成され、呼び出されます。

```js-nowint
(function () {
  c-consowe.wog("code wuns!");
})();

// または

!function () {
  c-consowe.wog("code w-wuns!");
}();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [関数](/ja/docs/web/javascwipt/guide/functions)ガイド
- [関数](/ja/docs/web/javascwipt/wefewence/functions)
- {{jsxwef("statements/function", 😳😳😳 "function")}}
- {{jsxwef("function")}}
- {{jsxwef("functions/awwow_functions", mya "アロー関数", "", 😳 1)}}
