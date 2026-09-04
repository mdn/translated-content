---
title: caret-animation
slug: Web/CSS/Reference/Properties/caret-animation
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{SeeCompatTable}}

**`caret-animation`** は [CSS](/ja/docs/Web/CSS) のプロパティで、**挿入キャレット**の点滅動作を有効または無効にするために使用します。挿入キャレットとは、編集可能な要素に現れる可視マーカーであり、次の文字が挿入または削除される位置を示すものです。

キャレットに独自のアニメーションを適用する際は、アニメーションの妨げにならないよう、既定の点滅を停止させる必要があります。

## 構文

```css
/* キーワード値 */
caret-animation: auto;
caret-animation: manual;

/* グローバル値 */
caret-animation: inherit;
caret-animation: initial;
caret-animation: revert;
caret-animation: revert-layer;
caret-animation: unset;
```

### 値

`caret-animation` プロパティは、以下に挙げるキーワード値のいずれかとして指定します。

- `auto`
  - : キャレットが点滅します。これがデフォルト値です。
- `manual`
  - : キャレットが点灯・消灯で点滅しません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な `caret-animation` の用途

この例は、編集可能な要素で `caret-animation` に設定する値を `auto` と `manual` で比較し、その違いを示します。

#### HTML

このマークアップには、2 つの {{htmlelement("p")}} 要素に [`contenteditable`](/ja/docs/Web/HTML/Reference/Global_attributes/contenteditable) が設定されており、編集可能になっています。

```html-nolint live-sample___caret-animation-basic
<p contenteditable="true">
  <code>caret-animation</code> が <code>auto</code> に設定されており、キャレットがアニメーションします。
</p>
<p contenteditable="true">
  <code>caret-animation</code> が <code>manual</code> に設定されており、キャレットがアニメーションしません。
</p>
```

#### CSS

この CSS は {{cssxref("caret-color")}} の値を `red` に設定します。その後、最初の段落には `caret-animation` の値として `auto` を、2 つ目の段落には `caret-animation` の値として `manual` を設定しています。

```css live-sample___caret-animation-basic
p {
  caret-color: red;
}

p:first-of-type {
  caret-animation: auto;
}

p:last-of-type {
  caret-animation: manual;
}
```

#### 結果

レンダリング結果は次の通りです。

{{EmbedLiveSample('caret-animation-basic', 'auto', 100)}}

2 つの段落をフォーカスして、キャレットの挙動の違いを確認してみてください。

### 独自のキャレットアニメーションの作成

この例では、編集可能な段落とテキスト入力フィールドに独自のキャレットアニメーションが適用されています。

#### HTML

マークアップには、{{htmlelement("p")}} 要素と 2 つのテキスト {{htmlelement("input")}} 要素の機能が含まれています。`<p>` 要素は編集可能にするため [`contenteditable`](/ja/docs/Web/HTML/Reference/Global_attributes/contenteditable) 属性が設定されています。段落と最初のテキスト入力には `class` 属性として `custom-caret` が設定されています。

```html-nolint live-sample___caret-animation-custom
<p contenteditable="true" class="custom-caret">
  この段落には独自のアニメーションが適用されており、さらに <code>caret-animation: manual</code> を指定することで、既定のキャレット点滅を停止し、滑らかなアニメーションを見ることができるようにしています。
</p>

<input
  type="text"
  class="custom-caret"
  value="独自のキャレットアニメーションです" />

<input type="text" value="デフォルトの点滅キャレットです" />
```

#### CSS

まず、{{cssxref("@keyframes")}} の設定するセットを定義し、{{cssxref("caret-color")}} を `transparent` から `darkblue` に変化させます。

```css live-sample___caret-animation-custom
@keyframes custom-caret-animation {
  from {
    caret-color: transparent;
  }

  to {
    caret-color: darkblue;
  }
}
```

次に、`<p>` と最初の `<input>` に独自の `@keyframes` アニメーション、{{cssxref("caret-color")}} を付け、また `caret-animation` を `manual` の値に設定してデフォルトのキャレット点滅動作を無効にします。

```css hidden live-sample___caret-animation-custom
body {
  display: flex;
  flex-direction: column;
}

input {
  margin-bottom: 20px;
}
```

```css live-sample___caret-animation-custom
.custom-caret {
  animation: custom-caret-animation infinite linear alternate 0.75s;
  caret-color: darkblue;
  caret-animation: manual;
}

p,
input {
  font-size: 1.6rem;
}
```

#### 結果

レンダリング結果は次のようになります。

{{EmbedLiveSample('caret-aniamtion-custom', 'auto', 260)}}

まず最初の 2 つの要素にフォーカスを当て、独自のキャレットアニメーションがどのようになるか確認してみてください。3 つ目の要素にフォーカスを当てると、デフォルトの点滅するキャレットと比較することができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("caret-color")}}, {{cssxref("caret-shape")}}
- {{cssxref("caret")}} 一括指定
- [CSS 基本ユーザーインターフェイス](/ja/docs/Web/CSS/Guides/Basic_user_interface)モジュール
