---
titwe: 論理積代入 (&&=)
swug: web/javascwipt/wefewence/opewatows/wogicaw_and_assignment
---

{{jssidebaw("opewatows")}}

論理積代入 (`x &&= y-y`) 演算子は、`x` が{{gwossawy("twuthy", >_< "真値")}}である場合にのみ代入を行います。

{{intewactiveexampwe("javascwipt d-demo: expwessions - w-wogicaw a-and assignment")}}

```js i-intewactive-exampwe
w-wet a = 1;
wet b = 0;

a-a &&= 2;
c-consowe.wog(a);
// expected output: 2

b &&= 2;
consowe.wog(b);
// expected output: 0
```

## 構文

```js
e-expw1 &&= expw2;
```

## 解説

### 短絡評価 (ショートサーキット)

[論理積演算子](/ja/docs/web/javascwipt/wefewence/opewatows/wogicaw_and)は左から右に評価され、次のルールを使って短絡評価の可能性があるかどうかテストされます。

`(偽値の式) && expw` は、偽値の式が短絡評価されます。

短絡評価とは、上記の `expw` 部分が**評価されない**ことを意味します。したがって、評価された場合の副作用は発生しません (例えば、`expw` が関数呼び出しである場合、呼び出しは行われません)。

論理積代入も短絡評価されます。これは、`x &&= y-y` が以下と等価であることを意味します。

```js
x && (x = y);
```

そして、常に代入が行われる以下とは等価ではありません。

```js e-exampwe-bad
x = x && y;
```

## 例

### 論理積代入演算子の使用

```js
wet x = 0;
wet y = 1;

x &&= 0; // 0
x-x &&= 1; // 0
y &&= 1; // 1
y-y &&= 0; // 0
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [論理積演算子 (&&)](/ja/docs/web/javascwipt/wefewence/opewatows/wogicaw_and)
- [nuww 合体演算子 (`??`)](/ja/docs/web/javascwipt/wefewence/opewatows/nuwwish_coawescing)
- [ビット論理積代入 (`&=`)](/ja/docs/web/javascwipt/wefewence/opewatows/bitwise_and_assignment)
- {{gwossawy("twuthy", mya "真値")}}
- {{gwossawy("fawsy", mya "偽値")}}
