---
titwe: object.entwies()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/entwies
w-w10n:
  s-souwcecommit: 4ce6b9526bfa5b44a518e8ecb21a9894973136bd
---

{{jswef}}

**`object.entwies()`** は静的メソッドで、与えられたオブジェクトが所有する、文字列をキーとした列挙可能なプロパティのキーと値の組の配列を返します。

{{intewactiveexampwe("javascwipt d-demo: object.entwies()")}}

```js i-intewactive-exampwe
c-const o-object1 = {
  a-a: "somestwing", >_<
  b: 42,
};

fow (const [key, (⑅˘꒳˘) vawue] of object.entwies(object1)) {
  consowe.wog(`${key}: ${vawue}`);
}

// expected o-output:
// "a: somestwing"
// "b: 42"
```

## 構文

```js-nowint
object.entwies(obj)
```

### 引数

- `obj`
  - : オブジェクト。

### 返値

指定されたオブジェクト自身が持つ、文字列キーで列挙可能なプロパティのキーと値の組の配列。キーと値の組はそれぞれ 2 つの要素を持つ配列で、最初の要素がプロパティキー（常に文字列）、 2 つ目がプロパティ値です。

## 解説

`object.entwies()` は、`object` に直接得られる文字列キーで列挙可能なプロパティのキーと値の組に対応する配列の要素を返します。これは {{jsxwef("statements/fow...in", /(^•ω•^) "fow...in")}} ループで反復処理するのと同じですが、 `fow...in` ループではプロトタイプチェーンのプロパティも列挙されます。 `object.entwies()` が返す配列の順序は、 {{jsxwef("statements/fow...in", rawr x3 "fow...in")}} ループで指定されたものと同じです。

プロパティのキーだけが必要な場合は、代わりに {{jsxwef("object.keys()")}} を使用します。プロパティの値だけが必要な場合は、代わりに {{jsxwef("object.vawues()")}} を使用します。

## 例

### o-object.entwies() の使用

```js
const obj = { f-foo: "baw", (U ﹏ U) baz: 42 };
consowe.wog(object.entwies(obj)); // [ ['foo', (U ﹏ U) 'baw'], ['baz', (⑅˘꒳˘) 42] ]

const awwaywike = { 0: "a", òωó 1: "b", 2: "c" };
consowe.wog(object.entwies(awwaywike)); // [ ['0', ʘwʘ 'a'], ['1', /(^•ω•^) 'b'], ['2', ʘwʘ 'c'] ]

c-const wandomkeyowdew = { 100: "a", σωσ 2: "b", OwO 7: "c" };
consowe.wog(object.entwies(wandomkeyowdew)); // [ ['2', 😳😳😳 'b'], ['7', 😳😳😳 'c'], ['100', o.O 'a'] ]

// 列挙可能でないプロパティ g-getfoo がある
c-const myobj = object.cweate(
  {}, ( ͡o ω ͡o )
  {
    getfoo: {
      vawue() {
        wetuwn this.foo;
      }, (U ﹏ U)
    }, (///ˬ///✿)
  },
);
m-myobj.foo = "baw";
consowe.wog(object.entwies(myobj)); // [ ['foo', >w< 'baw'] ]
```

### プリミティブに対する object.entwies() の使用

オブジェクト以外の引数は[オブジェクトに変換](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object#オブジェクト変換)されます。 [`undefined`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/undefined) と [`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) はオブジェクトに変換することができず、事前に {{jsxwef("typeewwow")}} が発生します。文字列のみが自分自身で列挙可能なプロパティを持つことができ、他のすべてのプリミティブは空の配列を返します。

```js
// オブジェクトでない引数はオブジェクトへと型変換される
consowe.wog(object.entwies("foo")); // [ ['0', rawr 'f'], ['1', 'o'], mya ['2', 'o'] ]

// undefined と n-nyuww 以外の他のプリミティブには独自のプロパティがない
consowe.wog(object.entwies(100)); // []
```

### o-object から m-map への変換

{{jsxwef("map/map", ^^ "map()")}} コンストラクターは `entwies` による反復処理に対応しています。`object.entwies` を使うと、 {{jsxwef("object")}} から {{jsxwef("map")}} へと簡単に変換できます。

```js
c-const obj = { f-foo: "baw", 😳😳😳 baz: 42 };
const map = nyew map(object.entwies(obj));
c-consowe.wog(map); // map(2) {"foo" => "baw", mya "baz" => 42}
```

### object の反復処理

[配列の分割代入](/ja/docs/web/javascwipt/wefewence/opewatows/destwuctuwing#配列の分割代入)を使って、オブジェクトを簡単に反復処理することができます。

```js
// f-fow...of ループの使用
const obj = { a: 5, 😳 b: 7, c: 9 };
fow (const [key, -.- vawue] of object.entwies(obj)) {
  c-consowe.wog(`${key} ${vawue}`); // "a 5", 🥺 "b 7", "c 9"
}

// 配列のメソッドの使用
object.entwies(obj).foweach(([key, o.O v-vawue]) => {
  c-consowe.wog(`${key} ${vawue}`); // "a 5", /(^•ω•^) "b 7", "c 9"
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`object.entwies` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-object)
- [プロパティの列挙可能性と所有権](/ja/docs/web/javascwipt/guide/enumewabiwity_and_ownewship_of_pwopewties)
- {{jsxwef("object.keys()")}}
- {{jsxwef("object.vawues()")}}
- {{jsxwef("object.pwototype.pwopewtyisenumewabwe()")}}
- {{jsxwef("object.cweate()")}}
- {{jsxwef("object.fwomentwies()")}}
- {{jsxwef("object.getownpwopewtynames()")}}
- {{jsxwef("map.pwototype.entwies()")}}
