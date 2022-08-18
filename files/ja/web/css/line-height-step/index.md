---
title: line-height-step
slug: Web/CSS/line-height-step
tags:
  - CSS
  - CSS フォント
  - CSS プロパティ
  - Reference
  - recipe:css-property
translation_of: Web/CSS/line-height-step
---
{{CSSRef}}

**`line-height-step`** は CSS のプロパティで、行ボックスの高さにおける刻みの単位を設定します。このプロパティが設定された場合、行ボックスの高さは単位の倍数のうち最も近いものに切り上げられます。

```css
/* ポイント値 */
line-height-step: 18pt;
```

{{cssinfo}}

## 構文

`line-height-step` プロパティは、以下のうちの一つで指定します。

- [`<length>`](#<length>)

### 値

- `<length>`
  - : 指定された {{cssxref("&lt;length&gt;")}} が、行ボックスの高さの刻みの計算に使用されます。

### 形式文法

{{csssyntax}}

## 例

以下の例では、それぞれの段落の行ボックスの高さは、刻みの単位に切り上げられます。 `<h1>` の行ボックスの高さは１つの刻みに収まらないので２つ分を占有しますが、その中の中央に配置されます。

```css
:root {
  font-size: 12pt;
  --my-grid: 18pt;
  line-height-step: var(--my-grid);
}
h1 {
  font-size: 20pt;
  margin-top: calc(2 * var(--my-grid));
}
```

これらの規則の結果は、次のスクリーンショットのようになります。

![どのように line-height-step プロパティがテキストの表示に影響するか](https://mdn.mozillademos.org/files/15257/line-grid-center.png)

## 仕様書

| 仕様書                                                                                               | 状態                                         | 備考     |
| ---------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------- |
| {{SpecName('CSS Rhythmic Sizing', '#line-height-step', 'line-height-step')}} | {{Spec2('CSS Rhythmic Sizing')}} | 初回定義 |

## ブラウザーの互換性

{{Compat("css.properties.line-height-step")}}

## 関連情報

- {{Cssxref("font")}}
- {{Cssxref("font-size")}}
- {{Cssxref("line-height")}}
