---
title: "`@property` アットルール (CSS)"
short-title: "@property"
slug: Web/CSS/Reference/At-rules/@property
l10n:
  sourceCommit: 4560e287e8c75c40aa5ecf40a0c9e8ecd0217c56
---

**`@property`** は [CSS](/ja/docs/Web/CSS) の[アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules)で、明示的に [CSS カスタムプロパティ](/ja/docs/Web/CSS/Reference/Properties/--*)を定義し、プロパティ型のチェック、デフォルト値の設定、プロパティが値を継承するかどうかの定義をするために使用します。

> [!NOTE]
> JavaScript の {{domxref('CSS.registerProperty_static', 'registerProperty()')}} メソッドは `@property` アットルールと同等です。

## 構文

```css
@property --canBeAnything {
  syntax: "*";
  inherits: true;
}

@property --rotation {
  syntax: "<angle>";
  inherits: false;
  initial-value: 45deg;
}

@property --defaultSize {
  syntax: "<length> | <percentage>";
  inherits: true;
  initial-value: 200px;
}
```

カスタムプロパティの名前は {{cssxref("dashed-ident")}} であり、 `--` で始まって、そのあとに有効なユーザー定義の識別子が来ます。大文字小文字の区別があります。

### 記述子

- {{cssxref("@property/syntax","syntax")}}
  - : 登録済みカスタムプロパティで許可される値の型を記述する文字列です。
- {{cssxref("@property/inherits","inherits")}}
  - : `@property` で指定されたカスタムプロパティの登録がデフォルトで継承されるかどうかを制御する論理値です。
- {{cssxref("@property/initial-value","initial-value")}}
  - : プロパティの開始値を設定する値です。

## 解説

`@property` アットルールは、[CSS Houdini](/ja/docs/Web/API/Houdini_APIs) API セットの一部です。これにより、開発者は [CSS カスタムプロパティ](/ja/docs/Web/CSS/Reference/Properties/--*) を明示的に定義でき、プロパティの型チェックや制約の設定、デフォルト値の設定、カスタムプロパティが値を継承できるかどうかの定義が可能になります。

`@property` ルールを使用すると、JavaScript を一切使用せずに、このスタイルシート内で直接カスタムプロパティを登録することができます。有効な `@property` ルールは、登録済みのカスタムプロパティを生成し、同等の引数で {{domxref('CSS.registerProperty_static', 'registerProperty()')}} を呼び出した場合と同じ効果をもたらします。

`@property` ルールが有効であるためには、次の条件を満たす必要があります。

- `@property` ルールには {{cssxref("@property/syntax","syntax")}} および {{cssxref("@property/inherits","inherits")}} 記述子を含める必要があります。
  どちらかがない場合は、 `@property` ルール全体が無効となり、無視されます。
- `syntax` は、データ型名（`<color>`、`<length>`、`<number>` など）であり、乗数（空白区切りのリストを受け入れる `+`、またはカンマ区切りのリストを受け入れる `#`）や結合子（`|`：いずれかのデータ型を受け入れる）、独自の識別子、あるいは汎用構文定義（`*`）を含むことができます。これは、構文が任意の有効なトークンストリームになることが可能であることを意味します。値は文字列 ({{cssxref("string")}}) です。そのため、引用符で囲む必要があります。
- {{cssxref("@property/initial-value","initial-value")}} 記述子は、`syntax` 記述子の値が全称構文定義（`syntax: "*"`）である場合のみ省略可能です。
  `initial-value` 記述子が必須である場合にこれが省略されると、ルール全体が無効となって無視されます。
- `syntax` 記述子の値が全称構文定義でない場合、{{cssxref("@property/initial-value","initial-value")}} 記述子は[計算上独立した](https://drafts.css-houdini.org/css-properties-values-api-1/#computationally-independent)値でなければなりません。
  これは、値が CSS に依存しない「グローバル」定義を除き、他の値に依存せずに計算値に変換することが可能というということです。
  例えば、`10px` は計算上独立しており、計算値に変換されても変化しません。`2in` も有効です。`1in` は常に `96px` と等価だからです。しかし、`3em` は無効です。なぜなら `em` の値は親要素の {{cssxref("font-size")}} に依存するからです。
- 未知の記述子は無効であり無視されますが、`@property` ルールが無効化することはありません。

同じ名前を使用して複数の有効な `@property` ルールが定義されている場合、このスタイルシート内の順序で最後に記述されたものが「優先」されます。CSS の `@property` と JavaScript の `CSS.registerProperty()` を使用して、同じ名前で独自のプロパティが登録されている場合、JavaScript で登録が優先されます。

## 形式文法

{{csssyntax}}

## 例

### 基本的な例

この例では、`@property` アットルールを使用して 2 つのカスタムプロパティを宣言し、そのプロパティをスタイル宣言で使用しています。

#### HTML

```html
<p>Hello world!</p>
```

#### CSS

```css
@property --myColor {
  syntax: "<color>";
  inherits: true;
  initial-value: rebeccapurple;
}

@property --myWidth {
  syntax: "<length> | <percentage>";
  inherits: true;
  initial-value: 200px;
}

p {
  background-color: var(--myColor);
  width: var(--myWidth);
  color: white;
}
```

#### 結果

{{ EmbedLiveSample('Basic example', '100%', '60px') }}

この段落の幅は `200px` で、背景色に紫を、文字色に白を設定します。

### カスタムプロパティ値のアニメーション

この例では、 `--progress` というカスタムプロパティを `@property` を使用して定義します。これはパーセント値 ({{cssxref("percentage")}}) を受け付け、初期値は `25%` です。`--progress` を使用して、{{cssxref("gradient/linear-gradient")}} 内の色経由点の位置値を定義し、緑色が終わり黒色が始まる位置を指定します。その後、`--progress` の値を 2.5 秒かけて `100%` までアニメーションさせ、進捗バーをアニメーションさせる効果を実現します。

#### HTML

```html
<div class="bar"></div>
```

#### CSS

```css
@property --progress {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 25%;
}

.bar {
  display: inline-block;
  --progress: 25%;
  width: 100%;
  height: 5px;
  background: linear-gradient(
    to right,
    #00d230 var(--progress),
    black var(--progress)
  );
  animation: progressAnimation 2.5s ease infinite;
}

@keyframes progressAnimation {
  to {
    --progress: 100%;
  }
}
```

#### 結果

{{ EmbedLiveSample('Animating a custom property value', '100%', '60px') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("var")}}
- [Custom properties (`--*`)](/ja/docs/Web/CSS/Reference/Properties/--*)
- [CSS カスタムプロパティの登録](/ja/docs/Web/CSS/Guides/Properties_and_values_API/Registering_properties)
- [CSS プロパティと値 API](/ja/docs/Web/CSS/Guides/Properties_and_values_API) モジュール
- [CSS プロパティと値](/ja/docs/Web/API/CSS_Properties_and_Values_API) API ドキュメント
- [CSS カスタムプロパティ（変数）の使用](/ja/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties)ガイド
- [カスケード変数のための CSS カスタムプロパティ](/ja/docs/Web/CSS/Guides/Cascading_variables)モジュール
