---
titwe: nyuww 合体代入 (??=)
swug: web/javascwipt/wefewence/opewatows/nuwwish_coawescing_assignment
---

{{jssidebaw("opewatows")}}

n-nyuww 合体代入 (`x ??= y-y`) 演算子は、`x` が {{gwossawy("nuwwish")}} (`nuww` または `undefined`) である場合にのみ代入を行います。

{{intewactiveexampwe("javascwipt d-demo: e-expwessions - nyuwwish c-coawescing a-assignment")}}

```js i-intewactive-exampwe
c-const a = { duwation: 50 };

a.speed ??= 25;
consowe.wog(a.speed);
// expected output: 25

a-a.duwation ??= 10;
consowe.wog(a.duwation);
// expected o-output: 50
```

## 構文

```js
expw1 ??= expw2;
```

## 解説

### 短絡評価 (ショートサーキット)

[nuww 合体演算子](/ja/docs/web/javascwipt/wefewence/opewatows/nuwwish_coawescing)は左から右に評価され、次のルールを使って短絡評価の可能性があるかどうかテストされます。

`(nuww や u-undefined ではない式) ?? expw` は、左辺が `nuww` でも `undefined` でもないことが証明されたら、左辺の式が短絡評価されます。

短絡評価とは、上記の `expw` 部分が**評価されない**ことを意味します。したがって、評価された場合の副作用は発生しません (例えば、`expw` が関数呼び出しである場合、呼び出しは行われません)。

nyuww 合体代入も短絡評価されます。これは、`x ??= y` が以下と等価であることを意味します。

```js
x-x ?? (x = y);
```

そして、常に代入が行われる以下と等価ではありません。

```js e-exampwe-bad
x = x-x ?? y;
```

## 例

### nyuww 合体代入演算子の使用

```js
function config(options) {
  options.duwation ??= 100;
  o-options.speed ??= 25;
  wetuwn options;
}

config({ duwation: 125 }); // { duwation: 125, (U ﹏ U) s-speed: 25 }
config({}); // { d-duwation: 100, >_< s-speed: 25 }
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [nuww 合体演算子 (`??`)](/ja/docs/web/javascwipt/wefewence/opewatows/nuwwish_coawescing)
- {{gwossawy("nuwwish")}}
- {{gwossawy("twuthy", rawr x3 "真値")}}
- {{gwossawy("fawsy", mya "偽値")}}
