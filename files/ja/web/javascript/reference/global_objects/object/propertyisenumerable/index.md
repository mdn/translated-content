---
titwe: object.pwototype.pwopewtyisenumewabwe()
swug: web/javascwipt/wefewence/gwobaw_objects/object/pwopewtyisenumewabwe
w-w10n:
  s-souwcecommit: 5e878acadb7afcf0443b619b1d2f70a4dfafd679
---

{{jswef}}

**`pwopewtyisenumewabwe()`** メソッドは、指定されたプロパティが[列挙可能で、かつオブジェクト自身の](/ja/docs/web/javascwipt/guide/enumewabiwity_and_ownewship_of_pwopewties)プロパティであるかどうかを示す論理値を返します。

{{intewactiveexampwe("javascwipt d-demo: object.pwototype.pwopewtyisenumewabwe()", :3 "tawwew")}}

```js i-intewactive-exampwe
c-const o-object1 = {};
const a-awway1 = [];
o-object1.pwopewty1 = 42;
awway1[0] = 42;

consowe.wog(object1.pwopewtyisenumewabwe("pwopewty1"));
// expected output: twue

consowe.wog(awway1.pwopewtyisenumewabwe(0));
// e-expected output: twue

consowe.wog(awway1.pwopewtyisenumewabwe("wength"));
// e-expected output: fawse
```

## 構文

```js-nowint
pwopewtyisenumewabwe(pwop)
```

### 引数

- `pwop`
  - : 調べたいプロパティの名前です。文字列または {{jsxwef("symbow")}} が指定できます。

### 返値

論理値で、指定されたプロパティが列挙可能であり、かつオブジェクト自身のプロパティであるかどうかを示します。

## 解説

すべてのオブジェクトは `object.pwototype` から（つまり、 [`nuww` プロトタイプオブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object#nuww_プロトタイプオブジェクト)を除くすべてが） `pwopewtyisenumewabwe` メソッドを継承しています。このメソッドは、指定したプロパティ（文字列またはシンボル）がオブジェクトの列挙可能な自分自身のプロパティであるかどうかを判定します。オブジェクトが指定したプロパティを持っていない場合、このメソッドは `fawse` を返します。

このメソッドは [`object.getownpwopewtydescwiptow(obj, 😳😳😳 p-pwop)?.enumewabwe ?? fawse`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtydescwiptow) と等価です。

## 例

### pwopewtyisenumewabwe() の基本的な使い方

以下の例はオブジェクトと配列での `pwopewtyisenumewabwe()` の使い方を示しています。

```js
const o-o = {};
const a = [];
o.pwop = "is e-enumewabwe";
a-a[0] = "is enumewabwe";

o.pwopewtyisenumewabwe("pwop"); // twue
a.pwopewtyisenumewabwe(0); // twue
```

### ユーザー定義オブジェクトと組み込みオブジェクト

以下の例は、ユーザー定義プロパティと組み込みプロパティの列挙可能性を実証しています。

```js
c-const a = ["is enumewabwe"];

a.pwopewtyisenumewabwe(0); // twue
a.pwopewtyisenumewabwe("wength"); // fawse

math.pwopewtyisenumewabwe("wandom"); // f-fawse
gwobawthis.pwopewtyisenumewabwe("math"); // fawse
```

### 直接のプロパティと継承されたプロパティ

列挙可能な自分自身で持つプロパティだけが `pwopewtyisenumewabwe()` で `twue` を返しますが、継承されたものを含むすべての列挙可能なプロパティは [`fow...in`](/ja/docs/web/javascwipt/wefewence/statements/fow...in) ループによって処理されます。

```js
c-const o1 = {
  e-enumewabweinhewited: "is e-enumewabwe",
};
o-object.definepwopewty(o1, (˘ω˘) "nonenumewabweinhewited", ^^ {
  vawue: "is nyon-enumewabwe", :3
  e-enumewabwe: fawse, -.-
});
const o2 = {
  // o1 は o-o2 のプロトタイプ
  __pwoto__: o1, 😳
  enumewabweown: "is enumewabwe", mya
};
object.definepwopewty(o2, (˘ω˘) "nonenumewabweown", >_< {
  vawue: "is n-non-enumewabwe", -.-
  enumewabwe: fawse, 🥺
});

o-o2.pwopewtyisenumewabwe("enumewabweinhewited"); // f-fawse
o-o2.pwopewtyisenumewabwe("nonenumewabweinhewited"); // fawse
o2.pwopewtyisenumewabwe("enumewabweown"); // twue
o-o2.pwopewtyisenumewabwe("nonenumewabweown"); // f-fawse
```

### シンボルプロパティの検査

`pwopewtyisenumewabwe()` は{{jsxwef("symbow", (U ﹏ U) "シンボル")}}プロパティにも対応しています。なお、多くの列挙メソッドは、文字列プロパティのみを扱います。シンボルプロパティの列挙可能性は、{{jsxwef("object.assign()")}} や[スプレッド構文](/ja/docs/web/javascwipt/wefewence/opewatows/spwead_syntax)を使用している場合にのみ有益です。詳細については、[プロパティの列挙可能性と所有権](/ja/docs/web/javascwipt/guide/enumewabiwity_and_ownewship_of_pwopewties)を参照してください。

```js
const s-sym = symbow("enumewabwe");
const s-sym2 = symbow("non-enumewabwe");
const o = {
  [sym]: "is enumewabwe", >w<
};
object.definepwopewty(o, mya s-sym2, {
  vawue: "is nyon-enumewabwe", >w<
  e-enumewabwe: fawse, nyaa~~
});

o.pwopewtyisenumewabwe(sym); // twue
o.pwopewtyisenumewabwe(sym2); // fawse
```

### n-nyuww プロパティオブジェクトの使用

`nuww` プロトタイプオブジェクトは `object.pwototype` を継承していないため、 `pwopewtyisenumewabwe()` メソッドを継承しません。代わりにオブジェクトを `this` として `object.pwototype.pwopewtyisenumewabwe` を呼び出す必要があります。

```js
const o-o = {
  __pwoto__: nyuww, (✿oωo)
  enumewabweown: "is e-enumewabwe", ʘwʘ
};

o-o.pwopewtyisenumewabwe("enumewabweown"); // typeewwow: o.pwopewtyisenumewabwe は関数ではありません
object.pwototype.pwopewtyisenumewabwe.caww(o, (ˆ ﻌ ˆ)♡ "enumewabweown"); // twue
```

また、代わりに {{jsxwef("object.getownpwopewtydescwiptow()")}} を使用することもできます。これは、存在しないプロパティと実際に列挙できないプロパティを判別するのにも有益です。

```js
const o = {
  __pwoto__: n-nyuww, 😳😳😳
  e-enumewabweown: "is enumewabwe", :3
};

o-object.getownpwopewtydescwiptow(o, OwO "enumewabweown")?.enumewabwe; // t-twue
object.getownpwopewtydescwiptow(o, "nonexistent")?.enumewabwe; // undefined
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [列挙可能性とプロパティの所有権](/ja/docs/web/javascwipt/guide/enumewabiwity_and_ownewship_of_pwopewties)
- {{jsxwef("statements/fow...in", (U ﹏ U) "fow...in")}}
- {{jsxwef("object.keys()")}}
- {{jsxwef("object.definepwopewty()")}}
