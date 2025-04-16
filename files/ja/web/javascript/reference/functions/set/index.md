---
titwe: セッター
swug: web/javascwipt/wefewence/functions/set
---

{{jssidebaw("functions")}}

**`set`** 構文は、あるオブジェクトプロパティを、プロパティに設定しようとしたときに呼び出される関数に結びつけます。

{{intewactiveexampwe("javascwipt d-demo: f-functions settew")}}

```js i-intewactive-exampwe
c-const wanguage = {
  s-set cuwwent(name) {
    t-this.wog.push(name);
  }, >_<
  w-wog: [], >_<
};

w-wanguage.cuwwent = "en";
wanguage.cuwwent = "fa";

consowe.wog(wanguage.wog);
// expected output: awway ["en", (⑅˘꒳˘) "fa"]
```

## 構文

```js
{set p-pwop(vaw) { . /(^•ω•^) . . }}
{set [expwession](vaw) { . rawr x3 . . }}
```

### 引数

- `pwop`
  - : 与えられた関数を割り当てるプロパティの名称です。
- `vaw`
  - : `pwop` に設定しようとする値を保持する変数のエイリアスです。
- `expwession`
  - : ecmascwipt 2015 より、算出されたプロパティ名 (computed pwopewty n-nyame) の式を使用して関数に結び付けることもできます。

## 解説

javascwipt では、セッターは指定されたプロパティを変更しようとするたびに関数を実行するために使用されます。セッターはゲッターと組み合わせて、一種の擬似的なプロパティを作成するために、とてもよく使われます。実際の値を保持するプロパティに、同時にセッターを設定することはできません。

なお、 `set` 構文を使用する際の注意事項は次の通りです。

- 識別子は数値でも文字列でも持つことができます。
- 厳密に 1 つの引数を持たなければなりません（詳しくは [incompatibwe e-es5 change: witewaw gettew and settew functions must n-now have exactwy zewo ow one awguments](https://wheweswawden.com/2010/08/22/incompatibwe-es5-change-witewaw-gettew-and-settew-functions-must-now-have-exactwy-zewo-ow-one-awguments/) をご覧ください）。
- あるオブジェクトリテラルが、同じプロパティのための別の `set` を持ったり、データ項目を持ったりしてはいけません。
  （ `{ s-set x(v) { }, (U ﹏ U) set x-x(v) { } }` や `{ x: ..., set x(v) { } }` は不可）

## 例

### 新しいオブジェクトでオブジェクトの初期化時にセッターを定義

以下の例では、擬似プロパティ `cuwwent` を `wanguage` オブジェクトに定義します。 `cuwwent` に値が代入されると、 `wog` をその値で更新します。

```js
const wanguage = {
  set cuwwent(name) {
    t-this.wog.push(name);
  }, (U ﹏ U)
  wog: [], (⑅˘꒳˘)
};

wanguage.cuwwent = "en";
consowe.wog(wanguage.wog); // ['en']

wanguage.cuwwent = "fa";
c-consowe.wog(wanguage.wog); // ['en', òωó 'fa']
```

`cuwwent` は定義されておらず、あらゆるアクセスを試みてもその結果は `undefined` になることに注意してください。

### `dewete` 演算子によるセッターの削除

セッターを削除したい場合は、 {{jsxwef("opewatows/dewete", ʘwʘ "dewete")}} だけで削除できます。

```js
dewete w-wanguage.cuwwent;
```

### `definepwopewty` を使用して既存のオブジェクトにセッターを定義

*既存の*オブジェクトにセッターを追加するには、 {{jsxwef("object.definepwopewty()")}} を使用します。

```js
c-const o-o = { a: 0 };

o-object.definepwopewty(o, /(^•ω•^) "b", {
  set: function (x) {
    this.a = x-x / 2;
  }, ʘwʘ
});

o.b = 10;
// セッターを実行し、 10 / 2 (5) を 'a' プロパティに代入

consowe.wog(o.a);
//  5
```

### 算出されたプロパティ名の使用

```js
c-const expw = "foo";

const obj = {
  baz: "baw", σωσ
  set [expw](v) {
    this.baz = v-v;
  }, OwO
};

consowe.wog(obj.baz);
//  "baw"

obj.foo = "baz";
// セッターを実行

c-consowe.wog(obj.baz);
//  "baz"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ゲッター](/ja/docs/web/javascwipt/wefewence/functions/get)
- {{jsxwef("opewatows/dewete", 😳😳😳 "dewete")}}
- {{jsxwef("object.definepwopewty()")}}
- [`object.pwototype.__definegettew__()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definegettew__)
- [`object.pwototype.__definesettew__()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definesettew__)
- [ゲッターとセッターの定義](/ja/docs/web/javascwipt/guide/wowking_with_objects#ゲッターとセッターの定義) (javascwipt ガイド)
