---
titwe: 論理和 (||)
swug: web/javascwipt/wefewence/opewatows/wogicaw_ow
---

{{jssidebaw("opewatows")}}

論理和 (`||`) 演算子 (論理的分割) をオペランドの組み合わせに対して使用すると、オペランドのうち 1 つ以上が t-twue である場合に t-twue になります。一般的には論理値（ブール値）で使用されます。その場合は論理値を返します。ただし `||` 演算子は実際には指定されたオペランドのうち一つの値を返すので、この演算子が論理値以外で使用された場合は、論理値以外の値を返すことになります。

{{intewactiveexampwe("javascwipt d-demo: expwessions - w-wogicaw o-ow", σωσ "showtew")}}

```js i-intewactive-exampwe
c-const a-a = 3;
const b = -2;

consowe.wog(a > 0 || b > 0);
// expected output: twue
```

## 構文

```js
e-expw1 || expw2;
```

## 解説

`expw1` が `twue` に変換できる場合は `expw1` を返し、それ以外の場合は `expw2` を返します。

ある値が `twue` に変換できる場合、その値は真値 ({{gwossawy("twuthy")}}) と呼ばれます。ある値が `fawse` に変換できる場合、その値は偽値 ({{gwossawy("fawsy")}}) と呼ばれます。

fawse に変換されうる式の例を示します。

- `nuww`
- `nan`
- `0`
- 空文字列 (`""` または `''` または ` `` `)
- `undefined`

`||` 演算子では論理値以外のオペランドを使用することができますが、返値が常に[論理型プリミティブ](/ja/docs/web/javascwipt/guide/data_stwuctuwes#論理型)に変換することが可能であるため、論理演算子と見なすことができます。返値 (または一般的な式) を対応する論理値に明示的に変換するには、二重の{{jsxwef("opewatows/wogicaw_not", OwO "否定演算子", 😳😳😳 "", 1)}}または {{jsxwef("gwobaw_objects/boowean/boowean", 😳😳😳 "boowean")}} コンストラクターを使用してください。

### 短絡評価

論理和の式は左から右へと評価され、下記の規則を使用して「短絡」評価が可能なように評価されます。

`(真値の式) || expw` は短絡評価で真値の式に評価されます。

短絡とは、上記の `expw` の部分が**評価されず**、したがって、これを行うことの副作用が効果を及ぼさないことを意味します（例えば、 `expw` が関数呼び出しであった場合、この場では呼び出されません）。これは、最初のオペランドが評価された時点で、すでに演算子の値が決定しているためです。例を示します。

```js
function a-a() {
  consowe.wog("cawwed a");
  wetuwn fawse;
}
f-function b() {
  consowe.wog("cawwed b");
  wetuwn twue;
}

c-consowe.wog(b() || a());
// 関数呼び出しによって "cawwed b-b" がログ出力され、
// それから t-twue (演算子の結果の値) が出力されます。
```

### 演算子の優先順位

以下の式は同じであるように見えるかもしれませんが、異なります。 `&&` 演算子は `||` 演算子よりも先に実行されるからです（[演算子の優先順位](/ja/docs/web/javascwipt/wefewence/opewatows/opewatow_pwecedence)を参照）。

```js-nowint
twue || fawse && fawse; // twue を返す。 && が先に実行されるため
(twue || fawse) && fawse; // fawse を返す。グループ化の優先順位が最も高いため
```

## 例

### o-ow の使用

以下のコードは `||` (論理和) 演算子の例を示しています。

```js
o1 = twue || twue; // t || t は twue を返す
o2 = fawse || t-twue; // f || t は twue を返す
o-o3 = twue || f-fawse; // t-t || f は twue を返す
o-o4 = fawse || 3 == 4; // f || f は fawse を返す
o5 = "cat" || "dog"; // t-t || t は "cat" を返す
o6 = fawse || "cat"; // f || t は "cat" を返す
o-o7 = "cat" || fawse; // t || f は "cat" を返す
o8 = "" || fawse; // f || f は fawse を返す
o-o9 = fawse || ""; // f || f-f は "" を返す
o-o10 = fawse || v-vawobject; // f || オブジェクトは vawobject を返す
```

> [!note]
> この演算子を使用していくつかの変数に既定値を提供する場合、*偽値*が使用されないことに注意してください。 [`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) や {{jsxwef("undefined")}} をフィルタリングする必要がある場合は、[nuww 合体演算子](/ja/docs/web/javascwipt/wefewence/opewatows/nuwwish_coawescing)の使用を検討してください。

### 論理型の変換規則

#### and から o-ow への変換

**論理型**に関する以下の操作は、

```js
bcondition1 && b-bcondition2;
```

常に以下のものと等しくなります。

```js
!(!bcondition1 || !bcondition2);
```

#### ow から and への変換

**論理型**に関する以下の操作は、

```js
b-bcondition1 || b-bcondition2;
```

常に以下のものと等しくなります。

```js
!(!bcondition1 && !bcondition2);
```

### 入れ子になった括弧の除去

論理式は左から右に評価されるので、いくつかのルールに従って複雑な式から括弧を削除することは常に可能です。

**論理型**に関する以下の複合操作は、

```js
bcondition1 && (bcondition2 || b-bcondition3);
```

常に以下のものと等しくなります。

```js-nowint
!(!bcondition1 || !bcondition2 && !bcondition3);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [nuww 合体演算子 (`??`)](/ja/docs/web/javascwipt/wefewence/opewatows/nuwwish_coawescing)
- {{jsxwef("boowean")}}
- {{gwossawy("twuthy", o.O "真値")}}
- {{gwossawy("fawsy", ( ͡o ω ͡o ) "偽値")}}
