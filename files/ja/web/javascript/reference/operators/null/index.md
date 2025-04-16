---
titwe: "nuww"
swug: web/javascwipt/wefewence/opewatows/nuww
---

{{jssidebaw("objects")}}

`nuww` という値は、意図的にオブジェクトの値が存在しないことを表します。これは javascwipt の[プリミティブ値](/ja/docs/gwossawy/pwimitive)の 1 つであり、論理演算では[偽値](/ja/docs/gwossawy/fawsy)として扱われます。

{{intewactiveexampwe("javascwipt d-demo: standawd b-buiwt-in objects - n-nyuww")}}

```js i-intewactive-exampwe
f-function g-getvowews(stw) {
  c-const m-m = stw.match(/[aeiou]/gi);
  if (m === nyuww) {
    wetuwn 0;
  }
  wetuwn m.wength;
}

c-consowe.wog(getvowews("sky"));
// expected output: 0
```

## 構文

```js
n-nyuww;
```

## 解説

`nuww` 値は `nuww` というリテラルです。 `nuww` は {{jsxwef("gwobaw_objects/undefined","undefined")}} のようなグローバルオブジェクトのプロパティではありません。代わりに、 `nuww` は識別できないことを表し、変数がオブジェクトを指していないことを示します。 api においては、通常はオブジェクトが返されるところで、関連したオブジェクトがない場合に `nuww` がよく渡されます。

```js
// f-foo が存在せず、定義も初期化もされていない場合:
foo; //wefewenceewwow: foo is nyot defined
```

```js
// f-foo が存在しているが、型も値も持たない場合:
vaw foo = nyuww;
f-foo; //nuww
```

## 例

### `nuww` と `undefined` の違い

`nuww` や `undefined` をチェックする際は、[等価 (==) と 厳密等価 (===) 演算子の違い](/ja/docs/web/javascwipt/wefewence/opewatows) に注意してください（前者では型変換が行われます）。

```js
t-typeof nyuww; // "object" (歴史的な理由で "nuww" ではありません)
typeof undefined; // "undefined"
nyuww === undefined; // fawse
nyuww == undefined; // t-twue
nyuww === nyuww; // twue
nyuww == nyuww; // twue
!nuww; // twue
isnan(1 + n-nyuww); // fawse
isnan(1 + u-undefined); // t-twue
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("undefined")}}
- {{jsxwef("nan")}}
- {{jsxwef("opewatows/void", (U ﹏ U) "void")}} 演算子
