---
title: CSS properties and values API の使用
slug: Web/API/CSS_Properties_and_Values_API/guide
---

{{SeeCompatTable}} **CSS Properties and Values API**（[CSS Houdini](/ja/docs/Web/Houdini) API の傘の一部）は、{{cssxref('--*', 'CSS カスタムプロパティ')}}の登録を可能にし、プロパティ型のチェック、デフォルト値、および値を継承するまたは継承しないプロパティを許可します。

## カスタムプロパティの登録

カスタムプロパティを登録すると、カスタムプロパティの振る舞い（許可される型、カスタムプロパティがその値を継承するかどうか、カスタムプロパティのデフォルト値は何か）をブラウザーに指示できます。 プロパティを登録するには、JavaScript と CSS の 2 つの方法があります。

> **メモ:** JavaScript オプションには使える実装があります。 CSS オプションにはありません。

### CSS.registerProperty

次の例では、{{domxref('CSS.registerProperty')}} を使用して、{{cssxref('--*', 'CSS カスタムプロパティ')}} `--my-prop` を色として登録し、デフォルト値を指定し、その値を継承しないようにします。

```js
window.CSS.registerProperty({
  name: "--my-prop",
  syntax: "<color>",
  inherits: false,
  initialValue: "#c0ffee",
});
```

### @property

CSS で同じ登録を行うことができます。 次の例では、{{cssxref('@property')}} を使用して、{{cssxref('--*', 'CSS カスタムプロパティ')}} `--my-prop` を色として登録し、デフォルト値を指定し、その値を継承しないようにします。

```css
@property --my-prop {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

## 登録したカスタムプロパティの使用

プロパティを登録することの利点の 1 つは、遷移（transition）などを通してカスタムプロパティを処理する方法をブラウザーが認識できるようになったことです！ プロパティが登録されていない場合、ブラウザーはその処理方法を知らず、任意の値を使用できるため、アニメーション化できないものと見なされます。 しかし、プロパティに構文（syntax）が登録されている場合、ブラウザーは、それをアニメーション化できるなど、その構文を中心に最適化できます！

この例では、カスタムプロパティ `--registered` を構文 `<color>` を使用して登録し、線形グラデーションで使用しています。 そのプロパティは、ホバーまたはフォーカスで別の色に遷移します。 登録されたプロパティでは遷移が機能しますが、未登録のプロパティでは機能しないことに注意してください！

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
```

```html hidden
<button class="registered">Background Registered</button>
<button class="unregistered">Background Not Registered</button>
```

```css hidden
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

```js hidden
window.CSS.registerProperty({
  name: "--registered",
  syntax: "<color>",
  inherits: false,
  initialValue: "red",
});
```

{{EmbedLiveSample("registered", 320, 320)}}

機能的には正確ではありませんが、上記の例の未登録のプロパティと登録されたプロパティの違いを考える良い方法は、{{cssxref('height')}} をアニメーション化する際の {{cssxref('custom-ident')}} と数値の違いです。 ブラウザーは、計算されるまで `auto` の値がわからないため、`auto` から数値に遷移またはアニメーション化することはできません。 未登録のプロパティを使用すると、ブラウザーは計算されるまで値が*何であるか*を同様に認識しません。 そのため、ある値から別の値への遷移を設定できません。 ただし、登録すると、ブラウザーにどのような種類の値を期待するかを伝えており、それを知っているため、遷移を適切に設定できます。

## 落とし穴

プロパティの登録には 2 つの落とし穴があります。 1 つ目は、プロパティを一度登録すると更新する方法がなく、JavaScript で再登録しようとすると、プロパティが既に定義されていることを示すエラーがスローされることです。

2 つ目は、標準のプロパティとは異なり、登録されたプロパティは解析時に検証されません。 むしろ、計算時に検証されます。 つまり、要素のプロパティを検査するときに無効な値が無効として表示されないことと、有効なプロパティの後に無効なプロパティを含めることは、有効なプロパティにフォールバックしないことを意味します。 ただし、無効なプロパティは、登録されているデフォルトにフォールバックします。
