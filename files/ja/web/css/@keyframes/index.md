---
title: "@keyframes"
slug: Web/CSS/@keyframes
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

**`@keyframes`** は CSS の[アットルール](/ja/docs/Web/CSS/CSS_syntax/At-rule)で、アニメーションの流れに沿ったキーフレーム（または中間地点）のスタイルを定義することによって、一連の CSS アニメーションの中間ステップを制御します。これにより、アニメーションの中間ステップを[トランジション](/ja/docs/Web/CSS/CSS_transitions)よりも詳細に制御できます。

## 構文

```css
@keyframes slide-in {
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(100%);
  }
}
```

### 値

- {{cssxref("custom-ident")}}
  - : キーフレームのリストを識別する名前。これは CSS 構文で定義されている識別子に適合する必要があります。
- `from`
  - : アニメーションの始まりである `0%` を示します。
- `to`
  - : アニメーションの終わりである `100%` を示します。
- {{cssxref("&lt;percentage&gt;")}}
  - : 指定したキーフレームがアニメーションの中で作動する時間を示すパーセント値です。
- `<timeline-range-name>` {{cssxref("&lt;percentage&gt;")}}
  - : 指定したアニメーション範囲の、指定したキーフレームが発生する時点までの割合。名前付きタイムライン範囲を使用するアニメーションの種類については、[CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/CSS_scroll-driven_animations)を参照してください。

## 解説

キーフレームを使うには、アニメーションとそのキーフレームを一致させるために、 {{ cssxref("animation-name") }} プロパティで指定したものと同じ名前がついた `@keyframes` ルールを作成します。それぞれの `@keyframes` ルールは、キーフレームセレクターのスタイルリストを含んでいます。それは、そのキーフレームが作動する時のアニメーションのパーセント値と、そのキーフレームでのスタイルを指定するブロックとで構成されています。

キーフレームは任意の順番で並べることができます。それらは、作動する時を示すパーセント値の順番に従って制御されます。

JavaScript は、 `@keyframes` アットルールに CSS オブジェクトモデルの {{domxref("CSSKeyframesRule")}} インターフェイスによってアクセスできます。

### 有効なキーフレームのリスト

キーフレームルールにアニメーションの開始と終了の状態 (`0%`/`from` と `100%`/`to`) を明示しない場合、ブラウザーはその要素の既存のスタイルを開始・終了の状態として用います。これは、その要素を初期状態からアニメーションさせて元に戻すという処理に利用できます。

キーフレームルールにアニメーションができないプロパティを含めた場合、そのプロパティは無視されますが、他のアニメーションが可能なプロパティについてはアニメーションが実行されます。

### 重複の解決

複数のキーフレームに同じ名前が付けられている場合、最後に宣言されたものが使用されます。 `@keyframes` ルールがカスケード的に継承されることはないため、アニメーションが複数のルールセットによるキーフレームをもとにして行われることはありません。

指定されたアニメーションのタイムオフセットが重複している場合は、 `@keyframes` ルール内のそのパーセント値を持つすべてのキーフレームがそのフレームに使用されます。 `@keyframes` ルールの中で、同じパーセント値を指定した複数のキーフレームがカスケード的に継承されます。

### 一部のキーフレームでプロパティが指定されていない場合

一部のキーフレームでしか指定されていないプロパティは、補完されます（ただし、補完することができないプロパティは除きます。このようなプロパティは、アニメーションしません）。

```css
@keyframes identifier {
  0% {
    top: 0;
    left: 0;
  }
  30% {
    top: 50px;
  }
  68%,
  72% {
    left: 50px;
  }
  100% {
    top: 100px;
    left: 100%;
  }
}
```

この例では、 {{ cssxref("top") }} プロパティは `0%`, `30%`, `100%` のキーフレームでアニメーション指定されています。また、 {{ cssxref("left") }} プロパティは `0%`, `68%`, `72%`, `100%` のキーフレームで指定されています。

### キーフレームが複数宣言された場合

キーフレームが複数宣言されているものの、アニメーションで作用する全てのプロパティがそれぞれのキーフレームに存在するわけではない場合、これらのキーフレームで指定されたすべての値が適用されます。例えば、

```css
@keyframes identifier {
  0% {
    top: 0;
  }
  50% {
    top: 30px;
    left: 20px;
  }
  50% {
    top: 10px;
  }
  100% {
    top: 0;
  }
}
```

この例では、 `50%` のキーフレームで、使用される値は `top: 10px` と `left: 20px` です。

カスケード的なキーフレームは Firefox 14 から対応しています。

### キーフレーム内の `!important`

キーフレーム内で `!important` が付けられた宣言は無視されます。

```css
@keyframes important1 {
  from {
    margin-top: 50px;
  }
  50% {
    margin-top: 150px !important; /* 無視される */
  }
  to {
    margin-top: 100px;
  }
}

@keyframes important2 {
  from {
    margin-top: 50px;
    margin-bottom: 100px;
  }
  to {
    margin-top: 150px !important; /* 無視される */
    margin-bottom: 50px;
  }
}
```

## 形式文法

{{csssyntax}}

## 例

### CSS アニメーションの例

[CSS アニメーションの使用](/ja/docs/Web/CSS/CSS_animations/Using_CSS_animations)および [Animate elements on scroll with Scroll-driven animations](https://developer.chrome.com/docs/css-ui/scroll-driven-animations) を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("animation-range")}}
- [CSS アニメーションの使用](/ja/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [CSS アニメーション](/ja/docs/Web/CSS/CSS_animations)モジュール
- [Animate elements on scroll with Scroll-driven animations](https://developer.chrome.com/docs/css-ui/scroll-driven-animations)
- {{domxref("AnimationEvent")}}
