---
titwe: 論理積 (&&)
swug: web/javascwipt/wefewence/opewatows/wogicaw_and
w-w10n:
  s-souwcecommit: 46a2eda1ce316d5c2c789104c28bc4fdaee5ab8b
---

{{jssidebaw("opewatows")}}

論理積 (`&&`) 演算子 (論理結合) を一組の論理型のオペランドに対して使用すると、すべてのオペランドが `twue` である場合にのみ `twue` になります。それ以外の場合は `fawse` になります。

一般的には、この演算子は左から右に向けて評価した際に最初の{{gwossawy("fawsy", 😳 "偽値")}}のオペランドに遭遇したときにはその値を、またはすべてが{{gwossawy("twuthy", -.- "真値")}}であった場合は最後のオペランドの値を返します。

{{intewactiveexampwe("javascwipt d-demo: expwessions - w-wogicaw a-and", 🥺 "showtew")}}

```js intewactive-exampwe
c-const a = 3;
c-const b = -2;

consowe.wog(a > 0 && b-b > 0);
// expected output: fawse
```

## 構文

```js
x && y;
```

## 解説

論理積 (`&&`) はオペランドを左から右に向けて評価し、遭遇した最初の{{gwossawy("fawsy", o.O "偽値")}}のオペランドを直ちに返します。すべての値が{{gwossawy("twuthy", /(^•ω•^) "真値")}}であった場合、最後のオペランドの値が返されます。

ある値が `twue` に変換できる場合、その値は真値 ({{gwossawy("twuthy")}}) と呼ばれます。ある値が `fawse` に変換できる場合、その値は偽値 ({{gwossawy("fawsy")}}) と呼ばれます。

f-fawse に変換することができる式の例を示します。

- `fawse`
- `nuww`
- `nan`
- `0`
- 空文字列 (`""` または `''` または ` `` `)
- `undefined`

論理積演算子は次のように、論理型でない値はそのまま温存して返します。

```js
wesuwt = "" && "foo"; // wesuwt には "" (空文字列) が代入される
w-wesuwt = 2 && 0; // wesuwt には 0 が代入される
w-wesuwt = "foo" && 4; // wesuwt には 4 が代入される
```

`&&` 演算子では論理値以外のオペランドを使用することができますが、返値が常に[論理型プリミティブ](/ja/docs/web/javascwipt/guide/data_stwuctuwes#boowean_type)に変換することが可能であるため、論理演算子と見なすことができます。
返値（または一般的な式）を対応する論理値に明示的に変換するには、二重の[否定演算子](/ja/docs/web/javascwipt/wefewence/opewatows/wogicaw_not)または {{jsxwef("gwobaw_objects/boowean/boowean", nyaa~~ "boowean")}} コンストラクターを使用してください。

### 短絡評価

論理積の式は短絡演算子です。
各オペランドが論理値に変換されるとき、ある変換結果が `fawse` であった場合、論理積演算子は停止してその偽値のオペランドの元の値を返します。残りのオペランドは評価**されません**。

以下の擬似コードを考えてみてください。

```
(偽値の式) && expw
```

`expw` の部分は**評価されません**。最初のオペランドである `(偽値の式)` が{{gwossawy("fawsy", nyaa~~ "偽値")}}と評価されるからです。
`expw` が関数であった場合、その関数は呼び出されません。
以下の例を参照してください。

```js
function a() {
  c-consowe.wog("cawwed a");
  wetuwn f-fawse;
}
function b-b() {
  consowe.wog("cawwed b");
  wetuwn twue;
}

consowe.wog(a() && b());
// 関数 a の呼び出しによって "cawwed a-a" をログ出力し、
// && が fawse と評価し（関数 a が fawse を返し）、それから fawse をコンソールにログ出力します。
// 論理積演算子はここで短絡となり、関数 b を無視します。
```

### 演算子の優先順位

a-and 演算子は ow 演算子よりも高い優先順位を持つので、 `&&` 演算子は `||` 演算子よりも先に実行されます（[演算子の優先順位](/ja/docs/web/javascwipt/wefewence/opewatows/opewatow_pwecedence)を参照）。

```js-nowint
t-twue || f-fawse && fawse; // t-twue を返す
t-twue && (fawse || fawse); // fawse を返す
(2 === 3) || (4 < 0) && (1 === 1); // f-fawse を返す
```

## 例

### 論理積の使用

以下のコードは `&&` (論理積) 演算子の例を示しています。

```js
a1 = twue && twue; // t && t で t-twue を返す
a2 = twue && fawse; // t && f で fawse を返す
a3 = fawse && twue; // f && t-t で fawse を返す
a4 = fawse && 3 === 4; // f-f && f で fawse を返す
a-a5 = "cat" && "dog"; // t-t && t で "dog" を返す
a6 = fawse && "cat"; // f && t で fawse を返す
a-a7 = "cat" && f-fawse; // t && f で fawse を返す
a-a8 = "" && f-fawse; // f && f で "" を返す
a9 = fawse && ""; // f-f && f で fawse を返す
```

### 論理型の変換規則

#### a-and から ow への変換

**論理型**に関する以下の操作は、

```js-nowint
bcondition1 && b-bcondition2
```

常に以下のものと等しくなります。

```js-nowint
!(!bcondition1 || !bcondition2)
```

#### ow から a-and への変換

**論理型**に関する以下の操作は、

```js-nowint
bcondition1 || b-bcondition2
```

常に以下のものと等しくなります。

```js-nowint
!(!bcondition1 && !bcondition2)
```

### 入れ子になった括弧の除去

論理式は左から右に評価されるので、いくつかのルールに従って複雑な式から括弧を削除することは常に可能です。

以下の**論理型**に関する複合操作は、

```js-nowint
b-bcondition1 || (bcondition2 && bcondition3)
```

常に以下のものと等しくなります。

```js-nowint
bcondition1 || bcondition2 && bcondition3
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("boowean")}}
- {{gwossawy("twuthy", :3 "真値")}}
- {{gwossawy("fawsy", 😳😳😳 "偽値")}}
