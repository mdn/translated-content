---
title: line-height-step
slug: Web/CSS/Reference/Properties/line-height-step
original_slug: Web/CSS/line-height-step
l10n:
  sourceCommit: 293c903f50ef81458e5e1df61887abaf8b4d7bb9
---

{{SeeCompatTable}}

**`line-height-step`** は CSS のプロパティで、行ボックスの高さにおける刻みの単位を設定します。このプロパティが設定された場合、行ボックスの高さは単位の倍数のうち最も近いものに切り上げられます。

```css
/* ポイント値 */
line-height-step: 18pt;

/* グローバル値 */
line-height-step: inherit;
line-height-step: initial;
line-height-step: revert;
line-height-step: revert-layer;
line-height-step: unset;
```

## 構文

`line-height-step` プロパティは、以下のうちの一つで指定します。

- `<length>` です。

### 値

- `<length>`
  - : 指定された {{cssxref("&lt;length&gt;")}} が、行ボックスの高さの刻みの計算に使用されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 行ボックスの高さに刻みの単位を設定

以下の例では、それぞれの段落の行ボックスの高さは、刻みの単位に切り上げられます。 `<h1>` の行ボックスの高さは 1 つの刻みに収まらないので 2 つ分を占有しますが、その中の中央に配置されます。

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

これらのルールの結果は、次のスクリーンショットのようになります。

![どのように line-height-step プロパティがテキストの表示に影響するか](line-grid-center.png)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{Cssxref("font")}}
- {{Cssxref("font-size")}}
- {{Cssxref("line-height")}}
