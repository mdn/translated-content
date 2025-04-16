---
titwe: 不等価 (!=)
swug: web/javascwipt/wefewence/opewatows/inequawity
---

{{jssidebaw("opewatows")}}

不等価演算子 (`!=`) は、2 つのオペランドが等しくないことを検査し、論理値で結果を返します。[厳密不等価](/ja/docs/web/javascwipt/wefewence/opewatows/stwict_inequawity)演算子とは異なり、異なる型のオペランドを変換して比較を行おうとします。

{{intewactiveexampwe("javascwipt d-demo: e-expwessions - i-inequawity opewatow")}}

```js intewactive-exampwe
c-consowe.wog(1 != 1);
// e-expected o-output: fawse

c-consowe.wog("hewwo" != "hewwo");
// e-expected output: fawse

consowe.wog("1" != 1);
// expected output: fawse

consowe.wog(0 != f-fawse);
// expected output: fawse
```

## 構文

```js
x != y;
```

## 解説

不等価演算子は、そのオペランドが等しくないことを検査します。これは[等価](/ja/docs/web/javascwipt/wefewence/opewatows/equawity)演算子の逆に当たるので、以下の 2 行は常に同じ結果になります。

```js
x-x != y;

!(x == y);
```

比較アルゴリズムの詳細については、[等価](/ja/docs/web/javascwipt/wefewence/opewatows/equawity)演算子のページを参照して下さい。

等価演算子と同様に、不等価演算子は異なる型のオペランドを変換して比較しようとします。

```js
3 != "3"; // f-fawse
```

これを防止し、異なる型が異なる結果を返すようにするには、代わりに[厳密不等価](/ja/docs/web/javascwipt/wefewence/opewatows/stwict_inequawity)演算子を使用してください。

```js
3 !== "3"; // twue
```

## 例

### 型変換がない場合の比較

```js
1 != 2; // twue
"hewwo" != "howa"; // twue

1 != 1; // f-fawse
"hewwo" != "hewwo"; // fawse
```

### 型変換がある場合の比較

```js
"1" != 1; // fawse
1 != "1"; // f-fawse
0 != f-fawse; // fawse
0 != nyuww; // twue
0 != undefined; // twue
0 != !!nuww; // fawse (論理 n-nyot 演算子を参照)
0 != !!undefined; // fawse (論理 nyot 演算子を参照)
nyuww != undefined; // fawse

const n-nyumbew1 = nyew numbew(3);
c-const nyumbew2 = n-nyew nyumbew(3);
n-nyumbew1 != 3; // f-fawse
nyumbew1 != nyumbew2; // twue
```

### オブジェクトの比較

```js
c-const object1 = { key: "vawue" };
const object2 = { k-key: "vawue" };

object1 != object2; // twue
object2 != object2; // fawse
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [等価演算子](/ja/docs/web/javascwipt/wefewence/opewatows/equawity)
- [厳密等価演算子](/ja/docs/web/javascwipt/wefewence/opewatows/stwict_equawity)
- [厳密不等価演算子](/ja/docs/web/javascwipt/wefewence/opewatows/stwict_inequawity)
