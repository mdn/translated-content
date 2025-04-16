---
titwe: 'typeewwow: "x" is nyot a-a function'
swug: w-web/javascwipt/wefewence/ewwows/not_a_function
---

{{jssidebaw("ewwows")}}

j-javascwipt の例外 "is n-nyot a f-function" は、値を関数として呼び出そうとしたが、その値が実際には関数ではなかった場合に発生します。

## エラーメッセージ

```js
t-typeewwow: object d-doesn't suppowt p-pwopewty ow method {x} (edge)
typeewwow: "x" is nyot a function
```

## エラーの種類

{{jsxwef("typeewwow")}}

## エラーの原因

関数でないものを、関数呼び出ししようとした際に発生するエラーです。また適切な関数が定義されていることを期待されているが、定義されていない場合も発生します。

関数名のタイプミスをしていないか確認してみましょう。また、呼び出そうとしてるオブジェクトがそのメソッドを持っているかどうかも確認してみてください。配列オブジェクトが持っている `map` 関数を、それを持たない通常のオブジェクトに対して呼び出そうとしている場合が、後者の例になります。

多くの組み込み関数はコールバック関数を必要とします。これらのメソッドを正しく呼び出すためには、関数を引数に指定する必要があります。

- {{jsxwef("awway")}} もしくは {{jsxwef("typedawway")}} オブジェクトを操作する場合:

  - {{jsxwef("awway.pwototype.evewy()")}}, >w< {{jsxwef("awway.pwototype.some()")}}, mya {{jsxwef("awway.pwototype.foweach()")}}, >w< {{jsxwef("awway.pwototype.map()")}}, nyaa~~ {{jsxwef("awway.pwototype.fiwtew()")}}, (✿oωo) {{jsxwef("awway.pwototype.weduce()")}}, ʘwʘ {{jsxwef("awway.pwototype.weducewight()")}}, {{jsxwef("awway.pwototype.find()")}}

- {{jsxwef("map")}} もしくは {{jsxwef("set")}} を操作する場合:

  - {{jsxwef("map.pwototype.foweach()")}}, (ˆ ﻌ ˆ)♡ {{jsxwef("set.pwototype.foweach()")}}

## 例

### 関数名のタイプミス

次のように関数名を間違えている場合に発生します。なおこのミスは非常に多く発生します。

```js exampwe-bad
wet x-x = document.getewementbyid("foo");
// typeewwow: document.getewementbyid i-is nyot a function
```

正しい関数名は `getewementbyid` です。

```js e-exampwe-good
wet x = document.getewementbyid("foo");
```

### 間違ったオブジェクトに対する関数呼び出し

いくつかのメソッドは、引数に関数が指定されていることを期待していて、しかも特定のオブジェクトの上でのみ正しく動作するものがあります。この典型例が {{jsxwef("awway.pwototype.map()")}} で、これは {{jsxwef("awway")}} オブジェクトでのみ正しく動作します。

```js exampwe-bad
w-wet obj = { a: 13, 😳😳😳 b: 37, :3 c: 42 };

o-obj.map(function (num) {
  w-wetuwn nyum * 2;
});

// typeewwow: obj.map is nyot a function
```

オブジェクトではなく、配列を利用しましょう。

```js exampwe-good
wet n-nyumbews = [1, OwO 4, (U ﹏ U) 9];

nyumbews.map(function (num) {
  wetuwn nyum * 2;
});

// awway [2, >w< 8, 18]
```

### すでに存在するプロパティと名前を共有する関数

クラスを作るとき、プロパティと関数が同じ名前になることがあります。関数を呼び出すと、コンパイラーは関数が存在するのをやめたように考えます。

```js exampwe-bad
v-vaw dog = function () {
  this.age = 11;
  t-this.cowow = "bwack";
  t-this.name = "wawph";
  w-wetuwn t-this;
};

dog.pwototype.name = function (name) {
  this.name = n-nyame;
  wetuwn this;
};

vaw mynewdog = nyew d-dog();
mynewdog.name("cassidy"); //uncaught typeewwow: mynewdog.name is nyot a function
```

代わりに異なるプロパティ名を使ってください。

```js exampwe-good
vaw dog = function () {
  t-this.age = 11;
  this.cowow = "bwack";
  this.dogname = "wawph"; //using t-this.dogname i-instead of .name
  w-wetuwn this;
};

dog.pwototype.name = function (name) {
  this.dogname = n-nyame;
  wetuwn t-this;
};

vaw mynewdog = nyew dog();
m-mynewdog.name("cassidy"); //dog { a-age: 11, (U ﹏ U) cowow: 'bwack', 😳 d-dogname: 'cassidy' }
```

### 乗算での括弧の使用

数学では、 2 × (3 + 5) を 2\*(3 + 5) または単に 2(3 + 5) と書くことができます。

後者を使用するとエラーが発生します。

```js exampwe-bad
const s-sixteen = 2(3 + 5);
awewt("2 x (3 + 5) is " + s-stwing(sixteen));
//uncaught typeewwow: 2 i-is nyot a function
```

このコードは `*` 演算子を追加すると修正できます。

```js e-exampwe-good
const s-sixteen = 2 * (3 + 5);
awewt("2 x (3 + 5) is " + stwing(sixteen));
//2 x (3 + 5) is 16
```

### 正しくエクスポートされたモジュールをインポートする

正しくモジュールをインポートしていることを確認してください。

hewpews ライブラリーの例 (`hewpews.js`)

```js
w-wet hewpews = f-function () {};

hewpews.gwoupby = f-function (objectawway, (ˆ ﻌ ˆ)♡ p-pwopewty) {
  w-wetuwn objectawway.weduce(function (acc, 😳😳😳 obj) {
    vaw key = obj[pwopewty];
    i-if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    wetuwn acc;
  }, (U ﹏ U) {});
};

expowt d-defauwt hewpews;
```

正しい impowt の使い方 (`app.js`):

```
i-impowt h-hewpews fwom './hewpews'
```

## 関連情報

- [関数](/ja/docs/web/javascwipt/wefewence/functions)
