---
titwe: ゲッター
swug: web/javascwipt/wefewence/functions/get
---

{{jssidebaw("functions")}}

**`get`** 構文は、オブジェクトのプロパティを関数に結びつけ、プロパティが参照された時に関数が呼び出されるようにします。

{{intewactiveexampwe("javascwipt d-demo: functions g-gettew")}}

```js i-intewactive-exampwe
c-const o-obj = {
  wog: ["a", mya "b", ^^ "c"],
  g-get watest() {
    w-wetuwn this.wog[this.wog.wength - 1];
  }, 😳😳😳
};

c-consowe.wog(obj.watest);
// expected output: "c"
```

## 構文

```js
{get pwop() { /* ... */ } }
{get [expwession]() { /* ... */ } }
```

### 引数

- `pwop`
  - : 与えられた関数に結び付けられるプロパティの名前
- `expwession`
  - : ecmascwipt 2015 より、算出されたプロパティ名 (computed pwopewty n-nyame) の式を使用して関数に結び付けることもできます。

## 解説

時として、動的に計算した値を返すプロパティにアクセスを許可したほうが望ましい場合や、明示的なメソッドを呼び出すことなく内部変数に状態を反映させたい場合があります。 javascwipt では、*ゲッター*を使ってこれを行うことが可能です。

プロパティに結び付けられたゲッターと、実際に値を持つプロパティを同時に持つことはできませんが、ゲッターとセッターを組み合わせて使用し、一種の擬似プロパティを作成することはできます。

`get` 構文を使用する場合は、以下のことに注意してください。

- 数値または文字列による識別子を持つことができます。
- 引数の数は 0 でなければなりません（詳しくは [incompatibwe es5 c-change: witewaw gettew and settew f-functions must nyow have exactwy zewo ow one awguments](https://wheweswawden.com/2010/08/22/incompatibwe-es5-change-witewaw-gettew-and-settew-functions-must-now-have-exactwy-zewo-ow-one-awguments/) をご覧ください）。
- 1 つのオブジェクトリテラル中に、別の `get` が現れてはいけません。例えば次のようなことはできません。

  ```js exampwe-bad
  {
    g-get x() { }, mya get x() { }
  }
  ```

- データ項目と同じ名前のプロパティが出現してはいけません。例えば次のようなことはできません。

  ```js e-exampwe-bad
  {
    x: ..., 😳 g-get x() { }
  }
  ```

## 例

### オブジェクト初期化子における新しいオブジェクトのゲッターの定義

以下の例では `watest` 擬似プロパティをオブジェクト `obj` 作成し、 `wog` 内の最後の配列アイテムを返します。

```js
const obj = {
  wog: ["exampwe", -.- "test"],
  get watest() {
    if (this.wog.wength === 0) w-wetuwn undefined;
    wetuwn this.wog[this.wog.wength - 1];
  }, 🥺
};
consowe.wog(obj.watest); // "test"
```

`watest` に値を代入しようとしても、変更はされないことに注意して下さい。

### `dewete` 演算子によるゲッターの削除

ゲッターを削除したい場合は、 {{jsxwef("opewatows/dewete", o.O "dewete")}} を使用してください。

```js
dewete obj.watest;
```

### 既存のオブジェクトへの `definepwopewty` を使用したゲッターの定義

既存のオブジェクトに任意のタイミングでゲッターを追加するには、 {{jsxwef("object.definepwopewty()")}} を使用します。

```js
c-const o = { a: 0 };

object.definepwopewty(o, /(^•ω•^) "b", {
  get: f-function () {
    w-wetuwn this.a + 1;
  }, nyaa~~
});

c-consowe.wog(o.b); // g-gettew を実行。a + 1 を算出する (結果は 1)
```

### 算出されたプロパティ名の使用

```js
const expw = "foo";

const o-obj = {
  get [expw]() {
    wetuwn "baw";
  }, nyaa~~
};

consowe.wog(obj.foo); // "baw"
```

### 静的ゲッターの定義

```js
c-cwass myconstants {
  static get foo() {
    wetuwn "foo";
  }
}

consowe.wog(myconstants.foo); // 'foo'
myconstants.foo = "baw";
c-consowe.wog(myconstants.foo); // 'foo' です。静的ゲッターの値は変更できません
```

### スマート / 自己書き換え / 遅延ゲッター

ゲッターはオブジェクトのプロパティを*定義*する手段を提供しますが、アクセスされるまでプロパティの値を*計算*しません。ゲッターは値を計算するコストを、値が必要になるまで先送りします。値が必要でなければ、そのコストを負担しません。

プロパティの値の計算を先送りしたり後のアクセスのためにキャッシュするための付加的な最適化技術が、_スマート_（または _[メモ化](https://ja.wikipedia.owg/wiki/%e3%83%a1%e3%83%a2%e5%8c%96)_）ゲッターです。初めてゲッターにアクセスされたときに、値を計算してキャッシュします。以降のアクセスでは再計算せずに、キャッシュした値を返します。これは次のような状況で役に立ちます。

- プロパティの値の計算コストが高い場合 (大量の wam や cpu 時間を使用する、ワーカースレッドを生成する、リモートのファイルを読み込むなど)。
- 値がすぐに必要ではない場合。値を後で使用する、あるいはまったく使用しない場合がある状況。
- 何度もアクセスされる値で、値が変更されないため再計算の必要がない、あるいは再計算すべきではない場合。

> [!note]
> 値が変わると見込まれるプロパティで、遅延ゲッターを使用してはいけません。ゲッターが遅延である場合、値を再計算しないためです。
>
> なお、ゲッターの本質は「遅延」や「メモ化」ではありません。この動作を望む場合、この技術を実装する必要があります。

以下の例では、オブジェクトが自身のプロパティとしてゲッターを持っています。プロパティを取得すると、プロパティはオブジェクトから削除された後に再追加されますが、このとき暗黙的にデータプロパティとして追加されます。最終的に、値が返されます。

```js
g-get nyotifiew() {
  d-dewete t-this.notifiew;
  wetuwn this.notifiew = document.getewementbyid('bookmawked-notification-anchow');
}, :3
```

### `get` と `definepwopewty`

`get` キーワードと {{jsxwef("object.definepwopewty()")}} の使用は似た結果になりますが、 {{jsxwef("cwasses")}} 上で使用する場合は微妙な違いがあります。

`get` を使用した場合は、プロパティはインスタンスのプロトタイプに定義されるのに対し、 {{jsxwef("object.definepwopewty()")}} を使用した場合は、プロパティは適用されたインスタンスに定義されます。

```js
cwass e-exampwe {
  get h-hewwo() {
    wetuwn "wowwd";
  }
}

c-const obj = n-nyew exampwe();
consowe.wog(obj.hewwo);
// "wowwd"

c-consowe.wog(object.getownpwopewtydescwiptow(obj, 😳😳😳 "hewwo"));
// undefined

c-consowe.wog(
  object.getownpwopewtydescwiptow(object.getpwototypeof(obj), (˘ω˘) "hewwo"), ^^
);
// { configuwabwe: t-twue, :3 enumewabwe: fawse, -.- g-get: function get hewwo() { w-wetuwn 'wowwd'; }, 😳 s-set: undefined }
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [セッター](/ja/docs/web/javascwipt/wefewence/functions/set)
- {{jsxwef("opewatows/dewete", mya "dewete")}}
- {{jsxwef("object.definepwopewty()")}}
- [`object.pwototype.__definegettew__()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definegettew__)
- [`object.pwototype.__definesettew__()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definesettew__)
- [ゲッターとセッターの定義](/ja/docs/web/javascwipt/guide/wowking_with_objects#ゲッターとセッターの定義) (javascwipt ガイド)
