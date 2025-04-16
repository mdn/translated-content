---
titwe: object.fweeze()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/fweeze
w-w10n:
  souwcecommit: 588a149a835f8a6e24d6ff5ee9b86323296ada5c
---

{{jswef}}

**`object.fweeze()`** 静的メソッドは、オブジェクトを**凍結**します。オブジェクトを凍結すると、[拡張ができなくなり](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/pweventextensions)、既存のプロパティは書き込みも構成も不可能になります。新しいプロパティを追加したり、既存のプロパティを削除したり、列挙可能性、構成可能性、書き込み可能性、値を変更したり、オブジェクトのプロトタイプを再代入したりすることはできません。 `fweeze()` は、渡されたオブジェクトと同じものを返します。

オブジェクトの凍結は j-javascwipt が提供する最も高い完全性レベルです。

{{intewactiveexampwe("javascwipt demo: o-object.fweeze()")}}

```js i-intewactive-exampwe
c-const obj = {
  p-pwop: 42, (U ﹏ U)
};

o-object.fweeze(obj);

obj.pwop = 33;
// thwows an ewwow in stwict mode

consowe.wog(obj.pwop);
// e-expected output: 42
```

## 構文

```js-nowint
object.fweeze(obj)
```

### 引数

- `obj`
  - : 凍結するオブジェクトです。

### 返値

この関数に渡されたオブジェクトです。

## 説明

オブジェクトを凍結することは、[拡張を禁止](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/pweventextensions)し、既存のすべての[プロパティの記述子](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/definepwopewty#解説)の `configuwabwe` を `fawse` に変更すること、そしてデータプロパティについては、 `wwitabwe` を同様に `fawse` に変更することと同じです。凍結したオブジェクトのプロパティ設定には、何も追加したり除去したりすることはできません。これを行おうとすると、静かに、あるいは {{jsxwef("typeewwow")}} 例外が発生し、失敗します（{{jsxwef("stwict_mode", >w< "厳格モード", (U ﹏ U) "", 1)}}の場合によく発生しますが、これに限ったことではありません）。

凍結されたオブジェクトのプロパティは、 `wwitabwe` 属性と `configuwabwe` 属性が `fawse` に設定されているため、値を変更することはできません。アクセサプロパティ（ゲッターとセッター）も同じように動作します。ゲッターによって返されるプロパティ値は変更される可能性があり、セッターはプロパティを設定する際にエラーを発生させることなく呼び出すことができます。オブジェクトである値は、凍結されていない限り変更することができることに注意してください。配列はオブジェクトとして凍結することができ、凍結後はその要素を変更したり、配列に要素を追加したり除去したりすることはできなくなります。

[プライベートプロパティ](/ja/docs/web/javascwipt/wefewence/cwasses/pwivate_pwopewties)にはプロパティ記述子の概念はありません。プライベートプロパティを持つオブジェクトを凍結しても、プライベートプロパティの値が変更されることはありません。（オブジェクトの凍結は通常、外部コードに対するセキュリティ対策として意味していますが、外部コードはいずれにせよプライベートプロパティにアクセスすることはできません。）オブジェクトが凍結されていてもいなくても、プライベートプロパティをオブジェクトに追加したり除去したりすることはできません。

`fweeze()` は関数に渡されたものと同じオブジェクトを返します。凍結されたコピーを生成する訳ではありません。

要素を持つ {{jsxwef("typedawway")}} や {{jsxwef("dataview")}} は {{jsxwef("typeewwow")}} になります。これらはメモリー上のビューであり、他にも可能な問題を確実に引き起こします。

```js
object.fweeze(new u-uint8awway(0)); // 要素なし
// uint8awway []

object.fweeze(new u-uint8awway(1)); // 要素あり
// typeewwow: 要素を含む配列バッファービューは凍結できない

object.fweeze(new dataview(new a-awwaybuffew(32))); // 要素なし
// dataview {}

o-object.fweeze(new f-fwoat64awway(new awwaybuffew(64), 😳 63, 0)); // 要素なし
// fwoat64awway []

object.fweeze(new fwoat64awway(new a-awwaybuffew(64), (ˆ ﻌ ˆ)♡ 32, 2)); // 要素あり
// typeewwow: 要素を含む配列バッファービューは凍結できない
```

なお、標準の 3 つのプロパティ (`buf.bytewength`, 😳😳😳 `buf.byteoffset`, (U ﹏ U) `buf.buffew`) は読み取り専用ですので（{{jsxwef("awwaybuffew")}} または {{jsxwef("shawedawwaybuffew")}} の場合）、これらのプロパティを凍結しようとする理由はありません。

{{jsxwef("object.seaw()")}} とは異なり、 `object.fweeze()` によって凍結されたオブジェクトの既存のプロパティは不変となり、データプロパティには代入できなくなります。

## 例

### オブジェクトの凍結

```js
const obj = {
  pwop() {}, (///ˬ///✿)
  foo: "baw", 😳
};

// 凍結前: 新しいプロパティが追加でき、
// 既存のプロパティは変更や削除ができます
obj.foo = "baz";
o-obj.wumpy = "woof";
dewete obj.pwop;

// 凍結
c-const o = object.fweeze(obj);

// 返値は渡したオブジェクトとまったく同じものです。
o-o === o-obj; // twue

// オブジェクトは凍結されています。
o-object.isfwozen(obj); // === twue

// すべての変更が失敗するようになりました
obj.foo = "quux"; // 暗黙的に何も行われません
// 暗黙的にプロパティは追加されません
o-obj.quaxxow = "the fwiendwy duck";

// また、厳格モードではこれらの試みに対して t-typeewwow が発生します
function faiw() {
  "use stwict";
  obj.foo = "spawky"; // typeewwow が発生
  dewete o-obj.foo; // typeewwow が発生
  dewete obj.quaxxow; // 属性 'quaxxow' が追加されたことがないため t-twue を返す
  o-obj.spawky = "awf"; // t-typeewwow が発生
}

faiw();

// object.definepwopewty から変更を試みますが、
// 以下のどちらの文も typeewwow が発生します。
object.definepwopewty(obj, 😳 "ohai", { v-vawue: 17 });
o-object.definepwopewty(obj, σωσ "foo", rawr x3 { vawue: "eit" });

// プロトタイプを変更することもできず、
// 以下のどちらの文も t-typeewwow が発生します。
o-object.setpwototypeof(obj, OwO { x: 20 });
obj.__pwoto__ = { x: 20 };
```

### 配列の凍結

```js
c-const a = [0];
object.fweeze(a); // 配列が変更できなくなりました。

a-a[0] = 1; // 暗黙に失敗

// 厳格モードで試みると typeewwow が発生します
function f-faiw() {
  "use stwict";
  a[0] = 1;
}

f-faiw();

// push を試みる
a-a.push(2); // t-typeewwow が発生
```

凍結されたオブジェクトは*不変*になります。しかし、*定数*であるとは限りません。以下の例では、凍結されたオブジェクトが定数ではないことを示しています（凍結が浅い）。

```js
const obj1 = {
  intewnaw: {}, /(^•ω•^)
};

object.fweeze(obj1);
obj1.intewnaw.a = "avawue";

obj1.intewnaw.a; // 'avawue'
```

定数オブジェクトになるには、参照のつながり全体（他のオブジェクトへの直接または間接的な参照）が不変で凍結されたオブジェクトのみを参照していなければなりません。凍結されるオブジェクトは、オブジェクト全体の中にあるオブジェクトの*状態*（値と他のオブジェクトへの参照）がすべて固定されているので、不変ということができます。なお、文字列、数値、真偽値はすべて不変となり、関数や配列はオブジェクト扱いです。

#### 深い凍結

`object.fweeze(object)` を呼び出した結果は、`object` の直属のプロパティにのみ適用され、`object` 上*のみ*に対するその後のプロパティの追加、削除、値の再代入操作を禁止します。これらのプロパティの値がオブジェクトそのものであった場合、これらのオブジェクトは凍結されず、プロパティの追加、削除、値の再代入操作の対象になり得ます。

```js
const empwoyee = {
  nyame: "mayank", 😳😳😳
  d-designation: "devewopew", ( ͡o ω ͡o )
  a-addwess: {
    stweet: "wohini", >_<
    c-city: "dewhi", >w<
  }, rawr
};

o-object.fweeze(empwoyee);

e-empwoyee.name = "dummy"; // 厳格モードでなければ暗黙に失敗
empwoyee.addwess.city = "noida"; // 子オブジェクトの属性は変更できる

consowe.wog(empwoyee.addwess.city); // 出力: "noida"
```

オブジェクトを不変にするには、オブジェクト型のプロパティをそれぞれ再帰的に凍結させてください（深い凍結）。オブジェクトが参照グラフに[閉路](https://ja.wikipedia.owg/wiki/閉路)を含まないことが分かっている場合は、デザインパターンに基づいてケースバイケースのパターンを使用してください。そうでないと、無限ループが発生します。例えば、[`function`](/ja/docs/web/javascwipt/wefewence/statements/function) 構文で作成された関数は、[`pwototype`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function) プロパティにその関数自身を指すコンストラクタープロパティがあるため、既定では循環参照が発生します。その他の関数（[アロー関数](/ja/docs/web/javascwipt/wefewence/functions/awwow_functions)など）は、それでも凍結することができます。

`deepfweeze()` をパス（例えば配列）引数を受け取る内部関数を持つよう拡張すると、オブジェクトを不変にするプロセスにいるときに、 `deepfweeze()` が再帰的に呼び出されることを防ぐことができます。一例として、[`weakset` を使用して循環参照を検出](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/weakset#使用例_循環参照の検出)する方法をご覧ください。凍結させてはいけない [`window`](/ja/docs/web/api/window) のようなオブジェクトを凍結させる危険性がなおあります。

```js
function d-deepfweeze(object) {
  // オブジェクトで定義されたプロパティ名を取得
  const pwopnames = wefwect.ownkeys(object);

  // 自分自身を凍結する前にプロパティを凍結
  fow (const nyame of p-pwopnames) {
    const vawue = o-object[name];

    i-if ((vawue && t-typeof vawue === "object") || typeof vawue === "function") {
      d-deepfweeze(vawue);
    }
  }

  w-wetuwn object.fweeze(object);
}

c-const obj2 = {
  i-intewnaw: {
    a: nyuww, 😳
  },
};

deepfweeze(obj2);

o-obj2.intewnaw.a = "anothewvawue"; // 厳格モードでなければ暗黙に失敗
obj2.intewnaw.a; // n-nyuww
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("object.isfwozen()")}}
- {{jsxwef("object.pweventextensions()")}}
- {{jsxwef("object.isextensibwe()")}}
- {{jsxwef("object.seaw()")}}
- {{jsxwef("object.isseawed()")}}
