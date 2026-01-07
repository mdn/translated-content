---
title: CSS プロパティと値 API の使用
slug: Web/API/CSS_Properties_and_Values_API/guide
l10n:
  sourceCommit: d74e7839bc166b9d652abc9cdcfe99de448efb2a
---

{{DefaultAPISidebar("CSS Properties and Values API")}}

**CSS プロパティと値 API**（[CSS Houdini](/ja/docs/Web/API/Houdini_APIs) API の傘下）により、 {{cssxref('--*', 'CSS カスタムプロパティ')}}の登録において、プロパティの型チェック、既定値、プロパティの値を継承の有無の登録を行うことができます。

## カスタムプロパティの登録

カスタムプロパティを登録すると、カスタムプロパティがどのように動作するかをブラウザーに指示することができます。これは、どのような型が許可されるか、カスタムプロパティがその値を継承するかどうか、カスタムプロパティの既定値は何かです。 プロパティを登録するには、 [JavaScript](/ja/docs/Web/JavaScript) と [CSS](/ja/docs/Web/CSS) の 2 つの方法があります。

### CSS.registerProperty

次の例では、 {{cssxref('--*', 'CSS カスタムプロパティ')}} として `--my-prop` を {{domxref('CSS/registerProperty_static', 'CSS.registerProperty')}} によって登録します。 `--my-prop` は CSS 色構文を使用し、既定値として `#c0ffee` があり、値を継承しないようにします。

```js
window.CSS.registerProperty({
  name: "--my-prop",
  syntax: "<color>",
  inherits: false,
  initialValue: "#c0ffee",
});
```

### @property

CSS で同じ登録を行うことができます。 次の例では、 {{cssxref('--*', 'CSS カスタムプロパティ')}} として `--my-prop` を {{cssxref('@property')}} [アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules)を使用して登録します。 `--my-prop` は CSS 色構文を使用し、既定値として `#c0ffee` があり、値を継承しないようにします。

```css
@property --my-prop {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

## 登録したカスタムプロパティの使用

プロパティを登録する利点の 1 つは、ブラウザーがトランジションなどでカスタムプロパティを処理する方法を知っていることです。プロパティが登録されていない場合、ブラウザーはそのプロパティをどのように扱えばよいのか分からないため、どのような値でも使用できると仮定し、その結果、そのプロパティをアニメーションすることができません。しかし、プロパティに構文 (syntax) が登録されている場合、ブラウザーはその構文を最適化することができます。

この例では、カスタムプロパティ `--registered` が `<color>` の構文で登録され、線形グラデーションで使用されています。このプロパティは、ホバー時またはフォーカス時に異なる色に遷移します。トランジションは登録されたプロパティでは動作しますが、登録されていないプロパティでは動作しないことに注意してください。

### HTML

```html
<button class="registered">登録されている背景色</button>
<button class="unregistered">登録されていない背景色</button>
```

### CSS

```css
.registered {
  --registered: #c0ffee;
  background-image: linear-gradient(to right, #fff, var(--registered));
  transition: --registered 1s ease-in-out;
}

.registered:hover,
.registered:focus {
  --registered: #b4d455;
}

.unregistered {
  --unregistered: #c0ffee;
  background-image: linear-gradient(to right, #fff, var(--unregistered));
  transition: --unregistered 1s ease-in-out;
}

.unregistered:hover,
.unregistered:focus {
  --unregistered: #b4d455;
}

button {
  height: 40vh;
  display: block;
  width: 100%;
  font-size: 3vw;
}
```

### JavaScript

```js
window.CSS.registerProperty({
  name: "--registered",
  syntax: "<color>",
  inherits: false,
  initialValue: "red",
});
```

### 結果

{{EmbedLiveSample("Using_registered_custom_properties", 320, 320)}}

機能的には正確ではありませんが、上記の例の未登録のプロパティと登録されたプロパティの違いを考える良い方法は、{{cssxref('height')}} をアニメーションする際の {{cssxref('custom-ident')}} と数値の違いです。ブラウザーは、計算されるまで `auto` の値がわからないため、`auto` から数値にトランジションまたはアニメーションすることはできません。未登録のプロパティを使用すると、ブラウザーは計算されるまで値が*何であるか*を同様に認識しません。 そのため、ある値から別の値へのトランジションを設定できません。しかし、登録された場合は、期待すべき値の型をブラウザーに指示したことになり、ブラウザーはそれを知っているため、トランジションを適切に設定することができます。

## 落とし穴

プロパティの登録には 2 つの落とし穴があります。 1 つ目は、プロパティを一度登録すると更新する方法がなく、JavaScript で再登録しようとすると、プロパティが既に定義されていることを示すエラーが発生することです。

2 つ目は、標準プロパティとは異なり、登録されたプロパティは構文解析されるときに検証されないことです。代わりに、計算時に検証されます。これは、不正な値が要素のプロパティの検査時に無効な値として現れないことと、有効なプロパティの後に無効なプロパティを記載しても、有効なプロパティに代替されないことになります。ただし、無効なプロパティは、登録された既定値に代替されます。

## ブラウザーの互換性

{{Compat}}
