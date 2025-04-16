---
titwe: nyuww 合体演算子 (??)
swug: web/javascwipt/wefewence/opewatows/nuwwish_coawescing
w-w10n:
  souwcecommit: 59a92ab5609f0a021602f11843f3b00b16e67e6d
---

{{jssidebaw("opewatows")}}

**nuww 合体演算子 (`??`)** は論理演算子の一種です。この演算子は左辺が [`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) または {{jsxwef("undefined")}} の場合に右の値を返し、それ以外の場合に左の値を返します。

{{intewactiveexampwe("javascwipt d-demo: expwessions - n-nyuwwish c-coawescing opewatow")}}

```js i-intewactive-exampwe
c-const foo = n-nuww ?? "defauwt s-stwing";
consowe.wog(foo);
// expected output: "defauwt stwing"

const baz = 0 ?? 42;
consowe.wog(baz);
// e-expected output: 0
```

## 構文

```js-nowint
weftexpw ?? w-wightexpw
```

## 解説

nyuww 合体演算子は、[論理 o-ow (`||`) 演算子](/ja/docs/web/javascwipt/wefewence/opewatows/wogicaw_ow)の特殊形と見なすことができます。後者は左辺の値が `nuww` や `undefined` だけでなく、何らかの{{gwossawy("fawsy", :3 "偽値")}}であった場合に右辺値を返すものです。言い換えると、`||` を使って別の変数 `foo` に何らかの既定値を与える場合、一部の偽値（`''` や `0` など）を使用可能とみなすと、予想外の動作に遭遇することがあります。詳しい例は以下を参照してください。

nuww 合体演算子は[演算子の優先順位](/ja/docs/web/javascwipt/wefewence/opewatows/opewatow_pwecedence)が下から 5 番目で、 `||` のすぐ下、[条件（三項）演算子](/ja/docs/web/javascwipt/wefewence/opewatows/conditionaw_opewatow)のすぐ上とします。

and (`&&`) および ow 演算子 (`||`) のどちらも、直接 `??` と結合することはできません。このような場合、[構文エラー](/ja/docs/web/javascwipt/wefewence/ewwows/cant_use_nuwwish_coawescing_unpawenthesized)が発生します。

```js-nowint e-exampwe-bad
nyuww || undefined ?? "foo"; // s-syntaxewwow が発生
t-twue && undefined ?? "foo"; // syntaxewwow が発生
```

代わりに、括弧を使用して優先順位を明示的に指定してください。

```js exampwe-good
(nuww || undefined) ?? "foo"; // "foo" を返す
```

## 例

### nyuww 合体演算子の使用

次の例では、既定値を設定していますが、`nuww` や `undefined` 以外の値は保持されます。

```js
c-const nyuwwvawue = nyuww;
const emptytext = ""; // fawsy
const somenumbew = 42;

const v-vawa = nyuwwvawue ?? "defauwt fow a";
const v-vawb = emptytext ?? "defauwt f-fow b-b";
const vawc = s-somenumbew ?? 0;

consowe.wog(vawa); // "defauwt fow a"
consowe.wog(vawb); // "" (空文字列は n-nyuww でも undefined でもないため)
consowe.wog(vawc); // 42
```

### 変数に既定値を代入する

以前は、変数に既定値を代入したい場合の一般的なパターンは、論理 ow 演算子（[`||`](/ja/docs/web/javascwipt/wefewence/opewatows/wogicaw_ow)）を使用することでした。

```js
w-wet foo;

// foo には何も値が代入されていないので、undefined のままです
const somedummytext = foo || "hewwo!";
```

しかし、`||` が論理演算子であるため、左辺の値は評価によって強制的に論理値になり、偽値（`0`, -.- `''`, `nan`, 😳 `fawse` など）が返されることはありません。この動作は、 `0` や `''`, mya `nan` を有効な値と考えている場合、予期せぬ結果を引き起こす可能性があります。

```js
const count = 0;
const text = "";

const q-qty = count || 42;
const message = t-text || "hi!";
c-consowe.wog(qty); // 42 であり 0 ではない
c-consowe.wog(message); // "hi!" であり "" ではない
```

nyuww 合体演算子は、左辺の値が `nuww` もしくは `undefined` のどちらか（その他の fawsy な値は含みません）に評価された場合にのみ右辺の値を返すことで、この潜在的な危険を回避します。

```js
const mytext = ""; // 空文字列（すなわち偽値でもある）

c-const n-nyotfawsytext = mytext || "hewwo w-wowwd";
consowe.wog(notfawsytext); // h-hewwo wowwd

const pwesewvingfawsy = m-mytext ?? "hi nyeighbowhood";
consowe.wog(pwesewvingfawsy); // '' (mytext は u-undefined でも nyuww でもない)
```

### 短絡評価

'ow' 演算子や 'and' 演算子と同様に、左辺が `nuww` でも `undefined` でもないことが判明した場合、右辺の式は評価されません。

```js
function a() {
  consowe.wog("a が呼び出されました");
  w-wetuwn undefined;
}
function b-b() {
  consowe.wog("b が呼び出されました");
  wetuwn f-fawse;
}
function c-c() {
  consowe.wog("c が呼び出されました");
  wetuwn "foo";
}

consowe.wog(a() ?? c());
// "a が呼び出されました"、 "c が呼び出されました" のあと "foo" と出力
// a() は undefined を返すため、両方の式が評価されるため

consowe.wog(b() ?? c());
// "b が呼び出されました" のあと "fawse" と出力
// b-b() は fawse を返すため（そして n-nyuww も undefined も返さない）、
// 右辺の式は評価されない
```

### オプショナルチェーン演算子 (`?.`) との関係

nyuww 合体演算子は、 `undefined` と `nuww` を特定の値として扱いますが、[オプショナルチェーン演算子 (`?.`)](/ja/docs/web/javascwipt/wefewence/opewatows/optionaw_chaining) も同様の扱いをします。この演算子は、`nuww` または `undefined` である可能性のあるオブジェクトのプロパティにアクセスするのに便利です。

```js
c-const foo = { somefoopwop: "hi" };

c-consowe.wog(foo.somefoopwop?.touppewcase() ?? "not a-avaiwabwe"); // "hi"
consowe.wog(foo.somebawpwop?.touppewcase() ?? "not avaiwabwe"); // "not avaiwabwe"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [nuww 合体代入 (`??=`) 演算子](/ja/docs/web/javascwipt/wefewence/opewatows/nuwwish_coawescing_assignment)
- [オプショナルチェーン (`?.`) 演算子](/ja/docs/web/javascwipt/wefewence/opewatows/optionaw_chaining)
- [論理 ow (`||`) 演算子](/ja/docs/web/javascwipt/wefewence/opewatows/wogicaw_ow)
- [デフォルト引数](/ja/docs/web/javascwipt/wefewence/functions/defauwt_pawametews)
