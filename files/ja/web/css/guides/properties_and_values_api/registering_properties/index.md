---
title: CSS におけるカスタムプロパティの登録
slug: Web/CSS/Guides/Properties_and_values_API/Registering_properties
l10n:
  sourceCommit: c49748a0ce4fdf77427e29cb6edbca8953a514e7
---

`@property` アットルールは [CSS Houdini](/ja/docs/Web/API/Houdini_APIs) API セットの一部であり、開発者が [CSS 独自のプロパティ](/ja/docs/Web/CSS/Reference/Properties/--*) を明示的に定義することができます。このガイドでは、`@property` を使用して型のチェックや制約を行う方法、CSS でカスタムプロパティのデフォルト値を設定する方法、およびカスタムプロパティが値を継承できるかどうかを定義する方法について学びます。

## なぜカスタムプロパティを登録するか

一般的に「CSS 変数」と呼ばれる CSS カスタムプロパティは、基本的な宣言によって定義できます。通常、これらは {{cssxref(":root")}} で宣言され、その後のルールセット（UI の状態に基づくルールや、コンテナーおよびメディアクエリー内を含む）で別の値に上書きすることができます。

この例では、`--myColor` には `:root` で値 `#bada55` が割り当てられ、その後 `main` で別の値に設定されています。この値は `main` の子孫要素すべてに継承されます。また、`main` にポインターをかざしたとき、またはビューポートの幅が `750px` 未満の場合には、その値が上書きされます。`circles` というクラスを持つ要素内では、`--myColor` は `45deg` に設定されます。これは異なるデータ型です。

```css
:root {
  --myColor: #bada55;
}
main {
  --myColor: #cacaca;
}
main:hover {
  --myColor: #aabbbbaa;
}
@media (width < 750px) {
  main {
    --myColor: #aabbbbaa;
  }
}

.circles {
  --myColor: 45deg;
}
```

[CSS プロパティおよび値 API](/ja/docs/Web/CSS/Guides/Properties_and_values_API) では、カスタムプロパティを登録する方法が定義されています。CSS カスタムプロパティを登録することで、変数の型、継承関係、デフォルト値を設定することができ、より予測可能で高性能なものになります。

登録されたプロパティは、構文解析時ではなく計算時に検証されます。つまり、

- 無効な値は、要素のプロパティを確認しても無効な値として現れません。
- 有効なプロパティの後に無効なプロパティが記載されていても、有効なプロパティに代替されることはありません。ただし、無効なプロパティは、登録されているデフォルト値に代替されます。

デフォルトで、すべての CSS 変数は継承されます。未登録の変数の値を変更すると、ブラウザーは DOM を再構文解析し、DOM ツリー内のどの要素が影響を受けるかを確認します。登録済みプロパティの場合、`inherits: false;` を設定することで、値が変更されても子要素を再構文解析する必要がないことをブラウザーに指示し、スタイルの再計算の範囲を絞り込むことができます。

一般的に、変数にアニメーションを適用する場合、型チェックを実装する場合、または予測可能な継承動作を保証したい場合は、カスタムプロパティを登録することをお勧めします。CSS フレームワークを作成する場合は、カスタムプロパティに名前空間を割り当てて登録することで、常にデフォルト値が設定されるようにし、値を変更する際にフレームワークのユーザーが不正なデータ型を代入してしまうのを防ぐことができます。

CSS では、プロパティは `@property` アットルールを使用して登録されます。この例では、`--myColor` が値 `#bada55` を持つ継承可能な色としてグローバルに登録され、`main` のホバー状態で使用されています。この登録により、値が正しい型であるため、ブラウザーがアニメーションを実行する前に値を構文解析する必要がなくなり、アニメーションのパフォーマンスが向上します。`.circles` への代入は無視されます。これは、プロパティのデータ型が `<angle>` ではなく `<color>` として登録されているためです。

```css
@property --myColor {
  syntax: "<color>";
  inherits: true;
  initial-value: #bada55;
}

main:hover {
  color: var(--myColor);
  animation: colorChange 2s linear forwards;
}

@keyframes colorChange {
  to {
    color: red;
  }
}

.circles {
  --myColor: 45deg;
}
```

## @property と記述子

`@property` ルールを使用すると、JavaScript を一切要求せずに、このスタイルシート内で直接カスタムプロパティを登録することができます。有効な `@property` ルールは、登録カスタムプロパティを生成し、同等の引数で {{domxref('CSS.registerProperty_static', 'registerProperty()')}} を呼び出した場合と同じ効果をもたらします。

カスタムプロパティ名は、`--` で始まり、その後に有効なユーザー定義の識別子が続く {{cssxref("dashed-ident")}} です。大文字と小文字が区別されます。宣言には、最大3つの記述子（{{cssxref("@property/syntax","syntax")}}、{{cssxref("@property/inherits","inherits")}}、{{cssxref("@property/initial-value","initial-value")}}）が含まれます。

この例では、`--rotation` というカスタムプロパティを作成します。

```css
@property --rotation {
  syntax: "<angle>";
  inherits: false;
  initial-value: 45deg;
}
```

### @property 記述子

`@property` ルールが有効であるためには、{{cssxref("@property/syntax","syntax")}} および {{cssxref("@property/inherits","inherits")}} の両方の記述子を含んでいる必要があります。{{cssxref("@property/initial-value","initial-value")}} 記述子はオプションです。

- `syntax`
  - : {{cssxref("@property/syntax","syntax")}} 記述子は、登録されたカスタムプロパティで許可される値の型を記述する文字列です。この記述子の値は、`<color>`、`<length>`、`<number>` などのデータ型名に、量化子 (`+`、`#`) や結合子 (`|`) を組み合わせたもの、あるいはカスタム識別子とすることができます。この例では、`--rotation` プロパティは `<angle>` に設定されており、これはこのプロパティに割り当てる値が {{cssxref("angle")}} のみであることを意味します。

- `inherits`
  - : {{cssxref("@property/inherits","inherits")}} 記述子は、カスタムプロパティがデフォルトで継承されるかどうかを制御する論理値です。継承させるには `true` に、継承させないには `false` に設定します。両方の値の使用例については、[カスタムプロパティの登録と使用](#カスタムプロパティの登録と使用)をご覧ください。

- `initial-value`
  - : `@property` アットルールは、{{cssxref("@property/initial-value","initial-value")}} 記述子も受け入れます。この値は、プロパティの初期値を定義します。この記述子が省略可能となるのは、`syntax` 記述子の値が汎用構文定義（つまり、`syntax: "*"`）である場合のみです。構文に他の値が指定されている場合、この記述子は要求され、計算上独立した値でなければなりません。つまり、その値は、`%` や `em` 単位を含む値など、他の値に依存するデータ型であってはなりません。

`syntax` または `inherits` 記述子のどちらか一方が欠けている場合、`@property` ルール全体が無効とみなされ、無視されます。`initial-value` 記述子が必須であるにもかかわらず省略された場合、`@property` ルール全体が無効とみなされ、無視されます。未知の記述子は無効であり無視されますが、`@property` ルール自体を無効にすることはありません。

## カスタムプロパティの登録と使用

この例では、`--item-size` と `--item-color` という 2 つのカスタムプロパティを定義します。その後、これらのカスタムプロパティを使用して、以下の 3 つのアイテムのサイズ（幅と高さ）および背景色を指定します。

```html
<div class="container">
  <div class="item one">アイテム 1</div>
  <div class="item two">アイテム 2</div>
  <div class="item three">アイテム 3</div>
</div>
```

ここでは、CSS の `@property` アットルールを使用して、`--item-size` という独自のプロパティを定義しています。初期値を `40%` に設定し、有効な値を {{cssxref("percentage")}} のみに制限しています。つまり、このプロパティを使用して要素のサイズを指定した場合、その要素のサイズは常に親要素のサイズを基準として決定されます。このプロパティは継承可能です。

```css
@property --item-size {
  syntax: "<percentage>";
  inherits: true;
  initial-value: 40%;
}
```

また、[JavaScript](/ja/docs/Web/JavaScript) を使用してプロパティを登録することもできます。JavaScript の {{domxref('CSS.registerProperty_static', 'CSS.registerProperty()')}} メソッドは、`@property` アットルールと同等です。ここでは、2つ目のカスタムプロパティ `--item-color` を定義しました。初期値は `aqua`、値として {{cssxref("&lt;color&gt;")}} のみを受け入れ、継承されないように設定しています。

```js
window.CSS.registerProperty({
  name: "--item-color",
  syntax: "<color>",
  inherits: false,
  initialValue: "aqua",
});
```

詳しくは[カスタムプロパティの登録に関する JavaScript API ガイド](/ja/docs/Web/API/CSS_Properties_and_Values_API/guide)を参照してください。

### 登録カスタムプロパティの使用

登録済みのプロパティに新しい値を代入することができます。ここでは、親コンテナーに独自のプロパティの値を設定し、続いてアイテム自体にも独自のプロパティの値を設定します。`two` に設定された値は有効ですが、`three` に設定された値は無効な値です。

```css
.container {
  --item-size: 20%;
  --item-color: orange;
}
.two {
  --item-size: initial;
  --item-color: inherit;
}
.three {
  --item-size: 1000px;
  --item-color: xyz;
}
```

2 つのカスタムプロパティを、これらのアイテムの {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("background-color")}} プロパティの値として使用します。

```css
.item {
  width: var(--item-size);
  height: var(--item-size);
  background-color: var(--item-color);
}
```

```css hidden
.container {
  display: flex;
  height: 200px;
  border: 1px dashed black;
}
```

{{ EmbedLiveSample('カスタムプロパティの登録と使用', '100%', '250px') }}

### 継承

`inherits` 記述子は、登録された CSS カスタムプロパティがデフォルトで継承されるかどうかを制御します。

この例では、サイズプロパティは継承可能に設定されましたが、色は継承不可に設定されました。2 つのカスタムプロパティ、`--item-size: 20%` および `--item-color: orange;` は親要素 `container` に設定され、これらのカスタムプロパティが定義済み際に設定されたデフォルト値である `40%` および `aqua` を上書きしました。

アイテム 1 については、これらの独自のプロパティはいずれも設定されていませんでした。`--item-size` は継承可能であるため、親要素 `container` に設定された値 `20%` が継承され、使用されました。一方、プロパティ `--item-color` は継承可能ではなかったため、親要素に設定された値 `orange` は考慮されませんでした。その代わりに、デフォルト値 `aqua` が使用されました。

`inherits` 記述子は必須の記述子です。これが欠落していたり不正な状態であったりした場合、`@property` ルール全体が無効となり、無視されていたでしょう。

### 有効な値と無効な値

カスタムプロパティを登録する（単純な宣言を使用する場合と比べて）利点は、有効な値のみが再代入できることです。`syntax` 記述子は、どの値が有効かを定義します。これらの制約を満たさない値を持つ宣言は、すべて無視されます。

アイテム 2 では、両方のカスタムプロパティに対して CSS のグローバルキーワードが設定されました。CSS グローバルキーワードの値である {{cssxref("initial")}}、{{cssxref("inherit")}}、{{cssxref("unset")}}、{{cssxref("revert")}}、{{cssxref("revert-layer")}} — は、すべての値型に対して有効な値であるため、`syntax` 記述子の値にかかわらず有効です。`--item-size` は `initial` に設定されていたため、`@property` 宣言で設定された `initial-value: 40%;` が使用されました。`--item-color` は `inherit` に設定されており、カスタムプロパティが本来は継承されないように設定されていたにもかかわらず、親から `orange` という値を明示的に継承しました。これが、アイテム 2 がオレンジ色になった理由です。

アイテム 3 については、`--item-size` の値は `1000px` に設定されていました。`1000px` は {{cssxref("length")}} 型の値ですが、`@property` 宣言では値が `<percentage>` 型であることが要求されているため、この宣言は無効となり無視されました。その結果、親要素に設定されていた継承可能な `20%` が使用されました。`xyz` の値も無効でした。`registerProperty()` が `--item-color` を継承不可に設定していたため、親の `orange` 値ではなく、デフォルト値である `aqua` が使用されました。

### アニメーションにおけるカスタムプロパティの値

CSS の登録カスタムプロパティは、文字列ではなく型付きデータとして扱われるため、パフォーマンス面で優れています。これにより、ブラウザーのレンダリングエンジンに対して、定義済み構文と継承ルールが指定されます。ブラウザーは定義済み構文を一度構文解析するだけで済みます。その変数が他の場所で使用される際、型や内部表現はすでに把握されているため、再解析を行う必要がありません。

未登録のカスタムプロパティは単なる文字列であるため、ブラウザーはそれらを{{glossary("interpolation", "補間処理")}}することができず、スムーズにアニメーションさせることができません。その代わり、未登録のカスタムプロパティの値は離散的にアニメーションされます。登録済みの変数は補間が可能であるため、アニメーションできます。それらの補間計算は GPU に負荷分散されるため、メインスレッド上で実行されるアニメーションよりも高いパフォーマンスを発揮します。

アニメーションの例については、[カスタムプロパティ値のアニメーション](/ja/docs/Web/CSS/Reference/At-rules/@property#カスタムプロパティ値のアニメーション)を参照してください。

## 関連情報

- {{cssxref("var()")}}
- [Houdini API](/ja/docs/Web/API/Houdini_APIs)
- [CSS カスタムプロパティ（変数）の使用](/ja/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties)ガイド
- [CSS プロパティと値 API](/ja/docs/Web/CSS/Guides/Properties_and_values_API) モジュール
- [CSS プロパティと値](/ja/docs/Web/API/CSS_Properties_and_Values_API) API
- [カスケード変数のための CSS カスタムプロパティ](/ja/docs/Web/CSS/Guides/Cascading_variables)モジュール
