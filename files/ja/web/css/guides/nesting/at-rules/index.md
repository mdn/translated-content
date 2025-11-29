---
title: CSS 入れ子アットルール
short-title: 入れ子アットルール
slug: Web/CSS/Guides/Nesting/At-rules
l10n:
  sourceCommit: 81f8fcd666952c1782653a3675347c392cc997ca
---

本体にスタイルルールを含む[アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules)は、 CSS の入れ子を使って別のスタイルルールの中に入れ子にすることができます。アットルール内に入れ子になったスタイルルールは、最も近い祖先のスタイルルールから入れ子のセレクター定義を取得します。入れ子になったアットルールの内部には、 `& {...}` ブロックに入れ子になっているかのように動作するプロパティを直接含めることができます。

## 入れ子にすることができるアットルール

- {{cssxref('@media')}}
- {{cssxref('@supports')}}
- {{cssxref('@layer')}}
- {{cssxref('@scope')}}
- {{cssxref('@container')}}
- {{cssxref('@starting-style')}}

## 例

### 入れ子の `@media` アットルール

この例には CSS のブロックが 3 つあります。 1 つ目は典型的な入れ子アットルールの書き方を表し、 2 つ目はブラウザーが構文解析するとおりに入れ子を展開した書き方を表し、 3 つ目は入れ子でない同等のものを表しています。

#### 入れ子の CSS

```css
.foo {
  display: grid;
  @media (orientation: landscape) {
    grid-auto-flow: column;
  }
}
```

#### 展開した入れ子 CSS

```css
.foo {
  display: grid;
  @media (orientation: landscape) {
    & {
      grid-auto-flow: column;
    }
  }
}
```

#### 入れ子を使用しない同等のもの

```css
.foo {
  display: grid;
}

@media (orientation: landscape) {
  .foo {
    grid-auto-flow: column;
  }
}
```

### 多重に入れ子になった `@media` アットルール

アットルールは他のアットルールの中に入れ子にすることができます。以下にその例と、入れ子にしない場合の書き方を示します。

#### 入れ子のアットルール

```css
.foo {
  display: grid;
  @media (orientation: landscape) {
    grid-auto-flow: column;
    @media (width >= 1024px) {
      max-inline-size: 1024px;
    }
  }
}
```

#### 入れ子を使用しない同等のもの

```css
.foo {
  display: grid;
}
@media (orientation: landscape) {
  .foo {
    grid-auto-flow: column;
  }
}
@media (orientation: landscape) and (width >= 1024px) {
  .foo {
    max-inline-size: 1024px;
  }
}
```

### カスケードレイヤーの入れ子 (`@layer`)

[カスケードレイヤー](/ja/docs/Web/CSS/Reference/At-rules/@layer)は[子レイヤーを作成](/ja/docs/Web/CSS/Reference/At-rules/@layer#レイヤーの入れ子)するために入れ子にすることができます。これらは `.` （ドット）で接続します。

#### 親＆子レイヤーの定義

まず、名前付きカスケードレイヤーを使用する前に、スタイル割り当てなしで定義します。

```css
@layer base {
  @layer support;
}
```

#### ルールを入れ子になったレイヤーに割り当てる

ここでは `.foo` セレクターはそのルールを **base** `@layer` に割り当てています。入れ子になった **support** `@layer` は `base.support` サブレイヤーを作成し、 `&` 入れ子セレクターは `.foo .bar` セレクターのルールを作成するために使用されます。

```css
.foo {
  @layer base {
    block-size: 100%;
    @layer support {
      & .bar {
        min-block-size: 100%;
      }
    }
  }
}
```

#### 入れ子を使用しない同等のもの

```css
@layer base {
  .foo {
    block-size: 100%;
  }
}
@layer base.support {
  .foo .bar {
    min-block-size: 100%;
  }
}
```

## 関連情報

- [CSS 入れ子](/ja/docs/Web/CSS/Guides/Nesting)モジュール
- [`&` 入れ子セレクター](/ja/docs/Web/CSS/Reference/Selectors/Nesting_selector)
- [CSS 入れ子の使用](/ja/docs/Web/CSS/Guides/Nesting/Using)
- [入れ子と詳細度](/ja/docs/Web/CSS/Guides/Nesting/Nesting_and_specificity)
- [入れ子コンテナークエリー](/ja/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#入れ子のクエリー)
