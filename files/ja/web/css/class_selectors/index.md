---
title: クラスセレクター
slug: Web/CSS/Class_selectors
tags:
  - CSS
  - リファレンス
  - セレクター
browser-compat: css.selectors.class
translation_of: Web/CSS/Class_selectors
---
{{CSSRef}}

[CSS](/ja/docs/Web/CSS) の**クラスセレクター** (class selector) は、 {{htmlattrxref("class")}} 属性の内容に基づいて要素を選択します。

```css
/* class="spacious" であるすべての要素 */
.spacious {
  margin: 2em;
}

/* class="spacious" であるすべての <li> 要素 */
li.spacious {
  margin: 2em;
}

/* "spacious" および "elegant" の両方をクラスリストに含む <li> 要素すべて */
/* 例えば、 class="elegant retro spacious" */
li.spacious.elegant {
  margin: 2em;
}
```

## 構文

```css
.クラス名 { スタイルプロパティ }
```

なお、これは以下の{{Cssxref("Attribute_selectors", "属性セレクター")}}と等価です。

```css
[class~=クラス名] { スタイルプロパティ }
```

## 例

### CSS

```css
.red {
  color: #f33;
}

.yellow-bg {
  background: #ffa;
}

.fancy {
  font-weight: bold;
  text-shadow: 4px 4px 3px #77f;
}
```

### HTML

```html
<p class="red">この段落は赤い文字です。</p>
<p class="red yellow-bg">この段落は黄色の背景に赤い文字です。</p>
<p class="red fancy">この段落は "fancy" スタイルで赤い文字です。</p>
<p>これは単なる普通の段落です。</p>
```

### 結果

{{EmbedLiveSample('Examples')}}

## 仕様書

| 仕様書                                                                                | 状態                               | 備考            |
| -------------------------------------------------------------------------------------------- | ------------------------------------ | ------------------ |
| {{SpecName('CSS4 Selectors', '#class-html', 'class selectors')}}         | {{Spec2('CSS4 Selectors')}} | 変更なし         |
| {{SpecName('CSS3 Selectors', '#class-html', 'class selectors')}}         | {{Spec2('CSS3 Selectors')}} |                    |
| {{SpecName('CSS2.1', 'selector.html#class-html', 'child selectors')}} | {{Spec2('CSS2.1')}}             |                    |
| {{SpecName('CSS1', '#class-as-selector', 'child selectors')}}             | {{Spec2('CSS1')}}             | 初回定義 |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS セレクター](/ja/docs/Web/CSS/CSS_Selectors)
- [CSS の学習: セレクター](/ja/docs/Learn/CSS/Building_blocks/Selectors)
