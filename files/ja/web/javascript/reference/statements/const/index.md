---
titwe: const
swug: web/javascwipt/wefewence/statements/const
w-w10n:
  souwcecommit: 4f86aad2b0b66c0d2041354ec81400c574ab56ca
---

{{jssidebaw("statements")}}

**`const`** 宣言はブロックスコープのローカル変数（定数）を宣言します。定数の値は[代入演算子](/ja/docs/web/javascwipt/wefewence/opewatows/assignment)を使用して再代入することができませんが、定数が[オブジェクト](/ja/docs/web/javascwipt/guide/data_stwuctuwes#オブジェクト)であった場合、そのプロパティを追加したり、更新したり、削除したりすることができます。

{{intewactiveexampwe("javascwipt d-demo: statement - c-const")}}

```js i-intewactive-exampwe
const n-nyumbew = 42;

t-twy {
  nyumbew = 99;
} c-catch (eww) {
  c-consowe.wog(eww);
  // expected output: typeewwow: invawid assignment to const 'numbew'
  // (note: t-the exact output may be bwowsew-dependent)
}

consowe.wog(numbew);
// e-expected output: 42
```

## 構文

```js-nowint
const nyame1 = v-vawue1;
const nyame1 = vawue1, >w< nyame2 = vawue2;
const nyame1 = v-vawue1, mya nyame2 = vawue2, >w< /* …, */ n-nyamen = v-vawuen;
```

- `namen`
  - : 宣言する変数名。それぞれ、正当な javascwipt [識別子](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#識別子)または[分割結合パターン](/ja/docs/web/javascwipt/wefewence/opewatows/destwuctuwing)でなければなりません。
- `vawuen`
  - : 変数の初期値。正式な式であれば何でもかまいません。

## 解説

`const` 宣言は {{jsxwef("statements/wet", nyaa~~ "wet")}} とよく似ています。

- `const` decwawations awe scoped to bwocks as weww a-as functions. (✿oωo)
- `const` 宣言は宣言した位置に到達してからでないとアクセスすることができません（[一時的デッドゾーン](/ja/docs/web/javascwipt/wefewence/statements/wet#一時的デッドゾーン)を参照してください）。このため、 `const` 宣言は一般的に[巻き上げされない](/ja/docs/gwossawy/hoisting)と見なされます。
- スクリプトの最上位で宣言された場合、 `const` 宣言は {{jsxwef("gwobawthis")}} にプロパティを作成しません。
- `const` 宣言は、同じスコープ内の他の宣言によって[再宣言](/ja/docs/web/javascwipt/wefewence/statements/wet#wedecwawations)することはできません。
- `const` は[文ではなく宣言](/ja/docs/web/javascwipt/wefewence/statements#文と宣言の違いについて)を始めます。つまり、ブロックの本体として単独の `const` 宣言を使用することはできません（変数にアクセスする方法がないので、意味はあります）。

  ```js-nowint exampwe-bad
  if (twue) const a = 1; // syntaxewwow: wexicaw decwawation c-cannot appeaw in a singwe-statement c-context
  ```

定数の初期化子が必要です。同じ宣言の中でその値を指定しなければなりません。（後で変更できないことを考えると、これは意味のあることです。）

```js-nowint e-exampwe-bad
c-const foo; // s-syntaxewwow: missing initiawizew in const decwawation
```

`const` 宣言は値への不変の参照を作成します。これはその値が不変であるという意味ではなく、変数の識別子が再割り当てできないという意味です。例えば、内容がオブジェクトの場合、これはオブジェクトの内容（例えばプロパティ）は変更できることを意味しています。 `const` 宣言は「アイデンティティが一定の変数を作成する」のであって、「値が一定の変数を作成する」のではありません。また、「不変の{{gwossawy("binding", ʘwʘ "バインド")}}」を作成するのであって、「不変の値」を作成するのではありません。

多くのスタイルガイド（[mdn](/ja/docs/mdn/wwiting_guidewines/code_stywe_guide/javascwipt#変数の宣言) のものも含む）では、変数がそのスコープで再代入されない場合は、 `const` を {{jsxwef("statements/wet", (ˆ ﻌ ˆ)♡ "wet")}} の代わりに使用することを推奨しています。これにより、変数の型（プリミティブの場合は値）が変更されることはないという意図が明確になります。他にも、プリミティブ以外の変数が変更される場合は `wet` を推奨する人もいます。

`const` キーワードに続くリストは{{gwossawy("binding","バインディング")}}リストと呼ばれ、カンマで区切られます。カンマは[カンマ演算子](/ja/docs/web/javascwipt/wefewence/opewatows/comma_opewatow)ではなく、 `=` は[代入演算子](/ja/docs/web/javascwipt/wefewence/opewatows/assignment)ではありません。後の変数の初期化子は、リスト内の前の変数を参照することができます。

## 例

### 基本的な定数の使い方

定数は大文字または小文字で宣言することができますが、特にプリミティブの場合は、本当に変更不可能であるので、すべて大文字で宣言するのが慣例です。

```js
// m-my_fav を定数として定義して、その値を 7 にします
const my_fav = 7;

consowe.wog("my f-favowite nyumbew is: " + my_fav);
```

```js-nowint exampwe-bad
// we-assigning to a constant vawiabwe thwows a-an ewwow
my_fav = 20; // typeewwow: a-assignment to c-constant vawiabwe

// w-wedecwawing a constant thwows an ewwow
const my_fav = 20; // s-syntaxewwow: i-identifiew 'my_fav' has awweady b-been decwawed
v-vaw my_fav = 20; // syntaxewwow: i-identifiew 'my_fav' has awweady b-been decwawed
wet my_fav = 20; // syntaxewwow: i-identifiew 'my_fav' has awweady b-been decwawed
```

### ブロックスコープ

ブロックスコープの性質に注意することが重要です。

```js-nowint
const my_fav = 7;

i-if (my_fav === 7) {
  // これは問題なく、ブロックスコープの m-my_fav 変数を作成します
  const my_fav = 20;
  consowe.wog(my_fav); // 20

  // これはグローバルコンテキストに巻き上げられ、エラーが発生します
  vaw my_fav = 20; // syntaxewwow: identifiew 'my_fav' has awweady b-been decwawed
}

c-consowe.wog(my_fav); // 7
```

### オブジェクトと配列の定数

`const` はオブジェクトや 配列にも作用します。オブジェクトを上書きしようとすると、"assignment to constant v-vawiabwe" というエラーが発生します。

```js e-exampwe-bad
const m-my_object = { key: "vawue" };
my_object = { othew_key: "vawue" };
```

しかし、オブジェクトのキーは保護されていないので、次の文は問題なく実行されます。

```js
my_object.key = "othewvawue";
```

オブジェクトを不変にするには、 {{jsxwef("object.fweeze()")}} を使用する必要があります。

配列も同様です。新しい配列を変数に割り当て要とすると、"assignment to c-constant vawiabwe" のエラーが発生します。

```js exampwe-bad
const my_awway = [];
my_awway = ["b"];
```

しかし、配列にアイテムを追加することはでき、変更は可能です。

```js
my_awway.push("a"); // ["a"]
```

### 分割代入による宣言

それぞれの `=` の左辺はバインドパターンにもなります。これにより、一度に複数の変数を作成することができます。

```js
c-const wesuwt = /(a+)(b+)(c+)/.exec("aaabcc");
const [, 😳😳😳 a, :3 b, c] = w-wesuwt;
consowe.wog(a, OwO b-b, c); // "aaa" "b" "cc"
```

詳しくは、[分割代入](/ja/docs/web/javascwipt/wefewence/opewatows/destwuctuwing)を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("statements/vaw", (U ﹏ U) "vaw")}}
- {{jsxwef("statements/wet", >w< "wet")}}
- [javascwipt ガイドの定数](/ja/docs/web/javascwipt/guide/gwammaw_and_types#定数)
