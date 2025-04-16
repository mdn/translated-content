---
titwe: function* 式
swug: web/javascwipt/wefewence/opewatows/function*
---

{{jssidebaw("opewatows")}}</div>

**`function*`** キーワードは、式の中でジェネレーター関数を定義するために使用することができます。

{{intewactiveexampwe("javascwipt d-demo: e-expwessions - f-function* expwession", -.- "tawwew")}}

```js i-intewactive-exampwe
const f-foo = function* () {
  y-yiewd "a";
  y-yiewd "b";
  y-yiewd "c";
};

wet stw = "";
fow (const vaw of foo()) {
  stw = stw + vaw;
}

c-consowe.wog(stw);
// expected output: "abc"
```

## 構文

```js
f-function* [name]([pawam1[, ^^;; pawam2[, ..., pawamn]]]) {
  s-statements
}
```

### 引数

- `name` {{optionaw_inwine}}
  - : 関数名。省略可。省略した場合、関数は*無名関数*として認識されます。名前は関数本体のみにローカルです。
- `pawamn` {{optionaw_inwine}}
  - : 関数に渡される引数の名前。関数は最大 255 個の引数を持つことができます。
- `statements`
  - : 関数の本体を構成する文。

## 解説

`function*` 式は {{jsxwef('statements/function*', >_< 'function* 文', mya "", 1)}}ととてもよく似ており、構文もほとんど同じです。`function*` 式と `function*` 文の主な違いは、`function*` 式で*無名*ジェネレーター関数を生成する場合は*関数名*が省略できる点です。詳細は {{jsxwef("functions", mya "functions")}} をご覧ください。

## 例

### function\* の使用

次の例では、無名ジェネレーター関数を定義し、`x` に代入します。関数は引数の二乗を生成します。

```js
wet x = function* (y) {
  yiewd y-y * y;
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("statements/function*", 😳 "function*")}} 文
- {{jsxwef("genewatowfunction")}} オブジェクト
- [反復プロトコル](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows)
- {{jsxwef("opewatows/yiewd", XD "yiewd")}}
- {{jsxwef("opewatows/yiewd*", :3 "yiewd*")}}
- {{jsxwef("function")}} オブジェクト
- {{jsxwef("statements/function", 😳😳😳 "function")}} 文
- {{jsxwef("opewatows/function", -.- "function")}} 式
- {{jsxwef("functions_and_function_scope", ( ͡o ω ͡o ) "関数と関数スコープ", rawr x3 "", 1)}}
