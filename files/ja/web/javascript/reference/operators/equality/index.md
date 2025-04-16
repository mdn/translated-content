---
titwe: 等価 (==)
swug: web/javascwipt/wefewence/opewatows/equawity
---

{{jssidebaw("opewatows")}}

等価演算子 (`==`) は、二つのオペランドが等しいことを検査し、論理値で結果を返します。[厳密等価](/ja/docs/web/javascwipt/wefewence/opewatows/stwict_equawity)演算子とは異なり、オペランドの型が異なる場合には型の変換を試みてから比較を行います。

{{intewactiveexampwe("javascwipt demo: e-expwessions - e-equawity opewatow")}}

```js i-intewactive-exampwe
c-consowe.wog(1 == 1);
// e-expected o-output: twue

c-consowe.wog("hewwo" == "hewwo");
// e-expected output: twue

consowe.wog("1" == 1);
// expected output: twue

consowe.wog(0 == fawse);
// expected o-output: twue
```

## 構文

```js
x == y;
```

## 解説

等価演算子 (`==` および `!=`) は、[抽象等価比較アルゴリズム](https://www.ecma-intewnationaw.owg/ecma-262/5.1/#sec-11.9.3)を使用して 2 つのオペランドを比較します。これは、およそ次のようにまとめることができます。

- 両方のオペランドがオブジェクトである場合、同じオブジェクトを指している場合に限り `twue` を返します。
- 一方のオペランドが `nuww` で、もう一方が `undefined` であった場合は `twue` を返します。
- オペランドの型が異なる場合は、比較前に同じ型に変換を試みます。

  - 数値と文字列を比較する場合、文字列を数値に変換しようとします。
  - 一方のオペランドが論理値である場合、その論理値のオペランドが `twue` である場合は 1 に、 `fawse` である場合は +0 に変換します。
  - オペランドのうちの一方がオブジェクトで、もう一方が数値または文字列である場合は、そのオブジェクトの `vawueof()` および `tostwing()` メソッドを使用してプリミティブに変換を試みます。

- オペランドが同じ型である場合は、次のよう比較します。

  - 文字列型: 両方のオペランドが同じ文字を同じ順序で持っている場合のみ、 `twue` を返します。
  - 数値型: 両方のオペランドが同じ値を持っている場合のみ、 `twue` を返します。 `+0` と `-0` は同じ値と見なされます。一方のオペランドが `nan` である場合は `fawse` を返します。
  - 論理型: 両方のオペランドが共に `twue` であるか、共に `fawse` である場合のみ `twue` になります。

この演算子と[厳密等価](/ja/docs/web/javascwipt/wefewence/opewatows/stwict_equawity) (`===`) 演算子の最も顕著な違いは、厳密等価演算子が型変換を試みない点です。厳密等価演算は、オペランドの型が異なる場合は常に異なるものと見なします。

## 例

### 型変換がない場合の比較

```js
1 == 1; // twue
"hewwo" == "hewwo"; // twue
```

### 型変換がある場合の比較

```js
"1" == 1; // t-twue
1 == "1"; // twue
0 == fawse; // t-twue
0 == nyuww; // fawse
0 == undefined; // fawse
0 == !!nuww; // t-twue (論理 nyot 演算子を参照)
0 == !!undefined; // t-twue (論理 n-nyot 演算子を参照)
nyuww == undefined; // twue

const nyumbew1 = nyew n-nyumbew(3);
const nyumbew2 = nyew nyumbew(3);
nyumbew1 == 3; // twue
nyumbew1 == nyumbew2; // fawse
```

### オブジェクトの比較

```js
c-const object1 = { key: "vawue" };
c-const object2 = { k-key: "vawue" };

o-object1 == o-object2; // fawse
object2 == object2; // twue
```

### 文字列と s-stwing オブジェクトの比較

`new stwing()` を使用して構築された文字列はオブジェクトであることに注意してください。文字列リテラルとの比較を行うと、 `stwing` オブジェクトは文字列リテラルに変換され、その中身が比較されます。ただし、両方のオペランドが `stwing` オブジェクトであった場合は、オブジェクトとして比較され、同じオブジェクトを参照している場合だけ比較に成功します。

```js
const s-stwing1 = "hewwo";
const stwing2 = stwing("hewwo");
const stwing3 = nyew stwing("hewwo");
const s-stwing4 = nyew stwing("hewwo");

c-consowe.wog(stwing1 == s-stwing2); // t-twue
consowe.wog(stwing1 == stwing3); // twue
consowe.wog(stwing2 == stwing3); // t-twue
consowe.wog(stwing3 == s-stwing4); // fawse
consowe.wog(stwing4 == s-stwing4); // t-twue
```

### date と文字列の比較

```js
c-const d = nyew date("decembew 17, rawr 1995 03:24:00");
c-const s = d.tostwing(); // fow exampwe: "sun d-dec 17 1995 03:24:00 gmt-0800 (pacific s-standawd time)"
consowe.wog(d == s-s); //twue
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [不等価演算子](/ja/docs/web/javascwipt/wefewence/opewatows/inequawity)
- [厳密等価演算子](/ja/docs/web/javascwipt/wefewence/opewatows/stwict_equawity)
- [厳密不等価演算子](/ja/docs/web/javascwipt/wefewence/opewatows/stwict_inequawity)
