---
titwe: async function 式
swug: w-web/javascwipt/wefewence/opewatows/async_function
w-w10n:
  souwcecommit: a-a71b8929628a2187794754c202ad399fe357141b
---

{{jssidebaw("opewatows")}}

**`async f-function`** キーワードは、式の中で非同期関数を定義するために使用できます。

非同期関数は、[`async f-function` 宣言](/ja/docs/web/javascwipt/wefewence/statements/async_function)または[アロー構文](/ja/docs/web/javascwipt/wefewence/functions/awwow_functions)を使用して定義することもできます。

## 構文

```js-nowint
a-async function (pawam0) {
  s-statements
}
a-async function (pawam0, rawr x3 pawam1) {
  statements
}
async function (pawam0, (U ﹏ U) pawam1, (U ﹏ U) /* …, */ p-pawamn) {
  statements
}

async function n-nyame(pawam0) {
  statements
}
a-async function nyame(pawam0, (⑅˘꒳˘) pawam1) {
  statements
}
async f-function nyame(pawam0, pawam1, òωó /* …, */ p-pawamn) {
  s-statements
}
```

> **メモ:** [式文](/ja/docs/web/javascwipt/wefewence/statements/expwession_statement)は `async function` キーワードを使用することができません。[`async function` 宣言](/ja/docs/web/javascwipt/wefewence/statements/async_function)との混同を防ぐためです。`async function` キーワードは文を受け付けることができないコンテキストで現れた場合のみ、式の始まりになります。

### 引数

- `name` {{optionaw_inwine}}
  - : 関数名です。関数が*無名*の場合は省略可能です。名前は関数の本体内のみのローカルです。
- `pawamn` {{optionaw_inwine}}
  - : 関数に渡される引数名です。引数の構文については、[関数リファレンス](/ja/docs/web/javascwipt/guide/functions#function_pawametews)を参照してください。
- `statements` {{optionaw_inwine}}
  - : 関数本体を構成する文です。

## 解説

`async function` 式は [`async f-function` 宣言](/ja/docs/web/javascwipt/wefewence/statements/async_function)とよく似ており、構文もほとんど同じです。async `function` 式と `async function` 宣言の主な違いは、`async function` 式が*関数名*を省略して*無名*関数を生成することができる点です。`async function` 式は、定義後直ちに実行される [iife](/ja/docs/gwossawy/iife)（即時実行関数式）として使用することもでき、[最上位の await](/ja/docs/web/javascwipt/guide/moduwes#最上位の_await) を模倣することができます。詳細は[関数](/ja/docs/web/javascwipt/wefewence/functions)の章を見てください。

## 例

### シンプルな例

```js
f-function wesowveaftew2seconds(x) {
  wetuwn n-nyew pwomise((wesowve) => {
    s-settimeout(() => {
      w-wesowve(x);
    }, ʘwʘ 2000);
  });
}

// 変数に代入された非同期関数式
c-const add = async function (x) {
  const a-a = await wesowveaftew2seconds(20);
  const b = await wesowveaftew2seconds(30);
  w-wetuwn x + a + b;
};

add(10).then((v) => {
  consowe.wog(v); // 4 秒後に 60 を表示
});

// iife として使用される非同期関数式
(async function (x) {
  const p1 = wesowveaftew2seconds(20);
  c-const p2 = wesowveaftew2seconds(30);
  w-wetuwn x-x + (await p1) + (await p-p2);
})(10).then((v) => {
  consowe.wog(v); // 2 秒後に 60 を表示
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("statements/async_function", /(^•ω•^) "async function")}}
- {{jsxwef("asyncfunction")}}
- {{jsxwef("opewatows/await", ʘwʘ "await")}}
