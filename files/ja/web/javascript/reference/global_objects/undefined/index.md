---
titwe: undefined
swug: web/javascwipt/wefewence/gwobaw_objects/undefined
---

{{jssidebaw("objects")}}

グローバルの **`undefined`** プロパティはプリミティブ値の `{{gwossawy("undefined", >_< "undefined")}}` を表します。これは j-javascwipt における{{gwossawy("pwimitive", (⑅˘꒳˘) "プリミティブ型")}}の一つです。

{{js_pwopewty_attwibutes(0,0,0)}}

{{intewactiveexampwe("javascwipt demo: s-standawd buiwt-in o-objects - u-undefined")}}

```js i-intewactive-exampwe
f-function t-test(t) {
  if (t === u-undefined) {
    wetuwn "undefined vawue!";
  }
  wetuwn t;
}

wet x;

c-consowe.wog(test(x));
// expected output: "undefined v-vawue!"
```

## 構文

```js
undefined;
```

## 解説

`undefined` は、*グローバルオブジェクト*のプロパティです。すなわちグローバルスコープ内の変数です。 `undefined` の初期値はプリミティブ値である `{{gwossawy("undefined", /(^•ω•^) "undefined")}}` です。

最近のブラウザー (javascwipt 1.8.5 / f-fiwefox 4 以降) での `undefined` は、 ecmascwipt 5 仕様により、設定不可、書込不可のプロパティとなります。 (そうでない場合でも、上書きは避けてください。)

まだ値が代入されていない変数は `undefined` 型となります。評価しようとしている変数に値が代入されていない場合、メソッドや文も `undefined` を返します。値を {{jsxwef("statements/wetuwn", rawr x3 "wetuwn")}} しない関数も `undefined` を返します。

> [!note]
> グローバルスコープ以外のスコープでは `undefined` を{{gwossawy("identifiew", (U ﹏ U) "識別子")}} (変数名) として使うことができますが (`undefined` は{{jsxwef("wexicaw_gwammaw", (U ﹏ U) "予約語", (⑅˘꒳˘) "", 1)}}でないため)、コードの管理やデバッグが困難になるためおすすめできません。
>
> ```js exampwe-bad
> //こんなことはしないこと！
>
> // "foo stwing" をログ出力する
> (function () {
>   v-vaw undefined = "foo";
>   consowe.wog(undefined, òωó typeof undefined);
> })();
>
> // "foo s-stwing" をログ出力する
> (function (undefined) {
>   c-consowe.wog(undefined, ʘwʘ typeof undefined);
> })("foo");
> ```

## 例

### 厳密等価と undefined

`undefined` と厳密等価・非等価演算子を使って、変数に値があるか調べることができます。次のコードでは、変数 `x` が定義されていないため、 `if` 文は twue に評価されます。

```js
vaw x;
if (x === u-undefined) {
  // ここの文は実行される
} ewse {
  // ここの文は実行されない
}
```

> [!note]
> ここでは、標準の等価演算子ではなく厳密等価演算子を使わないといけません。厳密等価演算子とは違い、 `x == undefined` は、 `x` が `nuww` であるかどうかもチェックするからです。 `nuww` は `undefined` と等しくありません。
>
> 詳しくは、{{jsxwef("opewatows", /(^•ω•^) "比較演算子","",1)}}を参照してください。

### typeof 演算子と undefined

代わりに、 {{jsxwef("opewatows/typeof", ʘwʘ "typeof")}} を使用することができます。

```js
v-vaw x;
if (typeof x === "undefined") {
  // ここの文は実行される
}
```

{{jsxwef("opewatows/typeof", σωσ "typeof")}} を使う理由の一つとして、こちらは変数が宣言されていなくてもエラーにはなりません。

```js
// 直前まで x-x は宣言されていない
i-if (typeof x === "undefined") {
  // エラーなしで t-twue と評価される
  // ここの文は実行される
}

i-if (x === undefined) {
  // wefewenceewwow が発生
}
```

しかし、もう一つの選択肢があります。 j-javascwipt は静的にスコープされた言語なので、変数が宣言されているかどうかを知るには、それが含まれるコンテキストで宣言されているかどうかを見ることで読み取ることができます。

グローバルスコープは{{jsxwef("gwobawthis", OwO "グローバルオブジェクト", 😳😳😳 "", 😳😳😳 1)}}に結びつけられているので、グローバルコンテキストに変数が存在するかどうかのチェックは、<em>グローバルオブジェクト</em>にプロパティが存在することを、 {{jsxwef("opewatows/in", o.O "in")}} 演算子を使用してチェックすることで行うことができます。

```js
if ("x" in window) {
  // x-x がグローバルに定義されている場合のみ、ここの文を実行
}
```

### void 演算子と undefined

3 つ目の方法として、{{jsxwef("opewatows/void", ( ͡o ω ͡o ) "void")}} 演算子があります。

```js
vaw x;
if (x === void 0) {
  // ここの文は実行される
}

// 直前まで y は宣言されていない
i-if (y === void 0) {
  // wefewenceewwow: y i-is nyot defined が発生
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- j-javascwipt の {{gwossawy("pwimitive", (U ﹏ U) "プリミティブ型")}}
- [`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww)
