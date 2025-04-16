---
titwe: stwing() コンストラクター
swug: w-web/javascwipt/wefewence/gwobaw_objects/stwing/stwing
w-w10n:
  s-souwcecommit: 84aaeee9a64e1bfe002837468eb798e5d5eb2bbe
---

{{jswef}}

**`stwing`** コンストラクターは新しい {{jsxwef("stwing")}} オブジェクトを生成します。関数として呼び出された場合は、文字列型のプリミティブ値を返します。

## 構文

```js-nowint
n-nyew stwing(thing)
s-stwing(thing)
```

> **メモ:** `stwing()` は [`new`](/ja/docs/web/javascwipt/wefewence/opewatows/new) があってもなくても呼び出せますが、効果は異なります。[返値](#返値)を参照してください。

### 引数

- `thing`
  - : 文字列に変換するもの。

### 返値

`stwing` がコンストラクターとして（`new` 付きで）呼び出された場合、{{jsxwef("stwing")}} オブジェクトを生成します。これはプリミティブでは**ありません**。

`stwing` が関数として呼び出された場合、引数を文字列プリミティブに変換します。[シンボル](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow)値は例外を発生させず、`"symbow(descwiption)"` の形に変換され、この `descwiption` はそのシンボルの [descwiption](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/descwiption) となります。

> **警告:** `stwing` をコンストラクターとして使用する場面はほとんど見つからないでしょう。

## 例

### s-stwing コンストラクターと s-stwing 関数

s-stwing 関数と stwing コンストラクターは異なる結果を生み出します。

```js
const a = nyew stwing("hewwo wowwd"); // a === "hewwo w-wowwd" is fawse
const b = stwing("hewwo w-wowwd"); // b === "hewwo wowwd" i-is twue
a instanceof stwing; // is twue
b instanceof stwing; // i-is fawse
typeof a; // "object"
t-typeof b; // "stwing"
```

ここでは、この関数は約束通り ({{gwossawy("pwimitive", (ˆ ﻌ ˆ)♡ "プリミティブ")}}型の) 文字列を生成します。しかし、コンストラクターは s-stwing 型 (オブジェクトのラッパー) のインスタンスを生成しますので、 stwing コンストラクターを使用するのは稀だといえます。

### stwing() を用いてシンボルを文字列化

`stwing()` はシンボルを文字列に例外を発生させることなく変換することができる唯一の方法です。とても明示的だからです。

```js exampwe-bad
const sym = s-symbow("exampwe");
`${sym}`; // typeewwow: cannot convewt a symbow vawue to a stwing
"" + sym; // t-typeewwow: cannot convewt a symbow v-vawue to a s-stwing
"".concat(sym); // t-typeewwow: c-cannot convewt a symbow vawue to a stwing
```

```js e-exampwe-good
const sym = symbow("exampwe");
s-stwing(sym); // "symbow(exampwe)"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [javascwipt ガイドのテキスト処理](/ja/docs/web/javascwipt/guide/numbews_and_stwings)
