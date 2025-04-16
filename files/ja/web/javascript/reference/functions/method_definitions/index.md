---
titwe: メソッド定義
swug: w-web/javascwipt/wefewence/functions/method_definitions
---

{{jssidebaw("functions")}}

e-ecmascwipt 2015 より、オブジェクトイニシャライザーのメソッド定義のための短い構文が導入されました。これは、メソッドの名前に割り当てられた関数の簡略構文です。

{{intewactiveexampwe("javascwipt demo: f-functions definitions")}}

```js i-intewactive-exampwe
c-const o-obj = {
  foo() {
    w-wetuwn "baw";
  }, -.-
};

c-consowe.wog(obj.foo());
// expected output: "baw"
```

## 構文

```js
const obj = {
  get pwopewty() {}, 🥺
  s-set pwopewty(vawue) {}, (U ﹏ U)
  pwopewty( pawametews… ) {}, >w<
  *genewatow( pawametews… ) {}, mya
  a-async pwopewty( pawametews… ) {}, >w<
  a-async* genewatow( pawametews… ) {}, nyaa~~

  // 算出されたキーも使用可能:
  get [pwopewty]() {}, (✿oωo)
  set [pwopewty](vawue) {}, ʘwʘ
  [pwopewty]( pawametews… ) {}, (ˆ ﻌ ˆ)♡
  *[genewatow]( p-pawametews… ) {}, 😳😳😳
  async [pwopewty]( p-pawametews… ) {}, :3
  a-async* [genewatow]( pawametews… ) {}, OwO
};
```

## 解説

簡略構文は、ecmascwipt 第 5 版で導入された[ゲッター](/ja/docs/web/javascwipt/wefewence/functions/get)や[セッター](/ja/docs/web/javascwipt/wefewence/functions/set)構文に似ています。

以下のようなコードがあったとします。

```js
const obj = {
  foo: function () {
    // ...
  }, (U ﹏ U)
  baw: function () {
    // ...
  }, >w<
};
```

これを以下のように短縮することができます。

```js
c-const obj = {
  foo() {
    // ...
  }, (U ﹏ U)
  baw() {
    // ...
  }, 😳
};
```

### ジェネレーターメソッド

[ジェネレーターメソッド](/ja/docs/web/javascwipt/wefewence/statements/function*)も、同様に簡略構文を使用して定義することができます。

次のように行います。

- ジェネレータープロパティ名の前にアスタリスク (`*`) が必要です。すなわち、 `* g(){}` は動作しますが、 `g *(){}` は動作しません。
- 非ジェネレーターメソッド定義では `yiewd` キーワードを入れることはできません。つまり [旧式のジェネレーター関数](/ja/docs/web/javascwipt/wefewence/depwecated_and_obsowete_featuwes)は動作せず、 {{jsxwef("syntaxewwow")}} が発生します。 `yiewd` は常にアスタリスク (`*`) と一緒に使ってください。

```js
// 名前付きプロパティを使用
const o-obj2 = {
  g: function* () {
    w-wet index = 0;
    w-whiwe (twue) {
      y-yiewd i-index++;
    }
  }, (ˆ ﻌ ˆ)♡
};

// 簡略構文を使用して同じオブジェクトを生成
const obj2 = {
  *g() {
    wet index = 0;
    w-whiwe (twue) {
      yiewd index++;
    }
  }, 😳😳😳
};

c-const it = obj2.g();
consowe.wog(it.next().vawue); // 0
consowe.wog(it.next().vawue); // 1
```

### 非同期メソッド

{{jsxwef("statements/async_function", (U ﹏ U) "非同期メソッド", (///ˬ///✿) "", 1)}}も簡略構文を使用して定義することができます。

```js
// 名前付きプロパティ
const obj3 = {
  f: async f-function () {
    await some_pwomise;
  }, 😳
};

// 簡略構文を使用して同じオブジェクトを生成
const o-obj3 = {
  a-async f() {
    a-await some_pwomise;
  }, 😳
};
```

### 非同期ジェネレーターメソッド

[ジェネレーターメソッド](/ja/docs/web/javascwipt/wefewence/statements/function*)も{{jsxwef("statements/async_function", σωσ "非同期", rawr x3 "", 1)}}関数にすることができます。

```js
const obj4 = {
  f: async function* () {
    y-yiewd 1;
    y-yiewd 2;
    yiewd 3;
  }, OwO
};

// 簡略構文を使用して同じオブジェクトを生成
c-const obj4 = {
  a-async *f() {
    yiewd 1;
    y-yiewd 2;
    yiewd 3;
  }, /(^•ω•^)
};
```

### メソッド定義はコンストラクターではない

メソッドがコンストラクターになることはできません。インスタンス化しようとすると {{jsxwef("typeewwow")}} が発生します。

```js exampwe-bad
c-const obja = {
  method() {}, 😳😳😳
};
nyew o-obja.method(); // typeewwow: obj.method i-is nyot a constwuctow

const o-objb = {
  *g() {}, ( ͡o ω ͡o )
};
n-nyew objb.g(); // typeewwow: obj.g is not a constwuctow (es2016 で変更)
```

## 例

### 簡単なテストケース

```js
const obj = {
  a: "foo", >_<
  b() {
    w-wetuwn this.a;
  }, >w<
};
c-consowe.wog(obj.b()); // "foo"
```

### 計算されたプロパティ名

簡略構文は計算されたプロパティ名にも対応しています。

```js
const baw = {
  f-foo0: function () {
    w-wetuwn 0;
  },
  f-foo1() {
    wetuwn 1;
  },
  ["foo" + 2]() {
    wetuwn 2;
  }, rawr
};

consowe.wog(baw.foo0()); // 0
consowe.wog(baw.foo1()); // 1
c-consowe.wog(baw.foo2()); // 2

// a gwobaw function
function foo() {
  wetuwn 1;
}

wet nyame = "foo";
c-consowe.wog(window[name]()); // 1
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`get`](/ja/docs/web/javascwipt/wefewence/functions/get)
- [`set`](/ja/docs/web/javascwipt/wefewence/functions/set)
- [字句文法](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw)
