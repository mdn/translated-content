---
title: 指定値
slug: Web/CSS/specified_value
tags:
  - CSS
  - ガイド
  - リファレンス
translation_of: Web/CSS/specified_value
---
{{CSSRef}}

**指定値** (specified value) は、 [CSS](/ja/docs/Web/CSS) プロパティにおいて文書のスタイルシートから受け取る値です。指定されたプロパティの指定値は、以下の規則に従って決定されます。

1.  文書のスタイルシートが明示的にプロパティに値を指定した場合は、その値が使用されます。
2.  文書のスタイルシートが値を指定しなかった場合、可能であれば親要素から値を継承します。
3.  上記のいずれも利用できない場合、要素の[初期値](/ja/docs/Web/CSS/initial_value)が使用されます。

## 例

### HTML

```html
<p>ここに指定された色は、 CSS で明示的に与えられています。</p>

<div>この要素では、 CSS で何も指定されていないため、
    すべてのプロパティの指定値は既定で初期値になっています。</div>

<div class="fun">
  <p>このフォントファミリーは CSS で明示的に指定されていないため、
      指定値は親から継承されます。
      ただし、 border は継承されたプロパティではありません。</p>
</div>
```

### CSS

```css
.fun {
  border: 1px dotted pink;
  font-family: fantasy;
}

p {
  color: green;
}
```

### 結果

{{EmbedLiveSample("Examples", 500, 220)}}

## 仕様書

| 仕様書                                                                                    | 状態                   | 備考             |
| ------------------------------------------------------------------------------------------------ | ------------------------ | ------------------- |
| {{SpecName("CSS2.2", "cascade.html#specified-value", "cascaded value")}} | {{Spec2("CSS2.2")}} |                     |
| {{SpecName("CSS2.1", "cascade.html#specified-value", "cascaded value")}} | {{Spec2("CSS2.1")}} | 初回定義 |

## 関連情報

- {{CSS_key_concepts}}
