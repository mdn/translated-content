---
title: orientation
slug: Web/CSS/Reference/At-rules/@media/orientation
original_slug: Web/CSS/@media/orientation
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

**`orientation`** は [CSS](/ja/docs/Web/CSS) の[メディア特性](/ja/docs/Web/CSS/Reference/At-rules/@media#メディア特性)で、{{glossary("viewport", "ビューポート")}} (または[ページメディア](/ja/docs/Web/CSS/Guides/Paged_media)ではページボックス) の向きを調べるために使用することができます。

> [!NOTE]
> この特性は*端末*の向きには関係がありません。多くの端末では縦長の向きでソフトキーボードを開くと、ビューポートの幅が高さよりも大きくなり、ブラウザーは portrait ではなく landscape のスタイルを使用することになります。

## 構文

`orientation` 特性は以下の一覧のうち一つのキーワード値で指定します。

### キーワード値

- `portrait`
  - : ビューポートは縦長です。つまり、高さが幅よりも大きいか等しい状態です。
- `landscape`
  - : ビューポートは横長です。つまり、幅が高さよりも大きい状態です。

## 例

### 縦長の向き

この例では、HTML に 3 つのボックスが存在し、`orientation` メディア特性を使用して、行のレイアウト（横向き）と列のレイアウト（縦向き）を切り替えています。

出力の例は、高さが幅よりも大きい {{HTMLElement("iframe")}} に埋め込まれているため、ボックスは列のレイアウトになります。

#### HTML

```html
<div>Box 1</div>
<div>Box 2</div>
<div>Box 3</div>
```

#### CSS

```css
body {
  display: flex;
}

div {
  background: yellow;
  width: 200px;
  height: 200px;
  margin: 0.5rem;
  padding: 0.5rem;
}

@media (orientation: landscape) {
  body {
    flex-direction: row;
  }
}

@media (orientation: portrait) {
  body {
    flex-direction: column;
  }
}
```

#### 結果

{{EmbedLiveSample("Portrait orientation", "", "800")}}

### 横長の向き

この例は、前回の例とまったく同じコードです。 HTML には 3 つのボックスがあり、`orientation` メディア機能を使用して、行レイアウト（横向き）と列のレイアウト（縦向き）を切り替えています。

ただし、この例では、出力例は、高さが幅よりも小さい {{HTMLElement("iframe")}} に埋め込まれているため、ボックスは 1 行のレイアウトになります。

#### HTML

```html
<div>Box 1</div>
<div>Box 2</div>
<div>Box 3</div>
```

#### CSS

```css
body {
  display: flex;
}

div {
  background: yellow;
  width: 200px;
  height: 200px;
  margin: 0.5rem;
  padding: 0.5rem;
}

@media (orientation: landscape) {
  body {
    flex-direction: row;
  }
}

@media (orientation: portrait) {
  body {
    flex-direction: column;
  }
}
```

{{EmbedLiveSample("Landscape orientation", "", "300")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
