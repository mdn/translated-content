---
title: fallback
slug: Web/CSS/@counter-style/fallback
tags:
  - '@counter-style'
  - アットルール記述子
  - CSS
  - CSS カウンタースタイル
  - CSS 記述子
  - リファレンス
browser-compat: css.at-rules.counter-style.fallback
translation_of: Web/CSS/@counter-style/fallback
---
{{CSSRef}}

**`fallback`** 記述子は、現在のカウンタースタイルが特定のカウンター値でマーカー表現を生成できなかった場合に、代替で使用されるカウンタースタイルを指定するために使用します。

## 構文

```css
/* キーワード値 */
fallback: lower-alpha;
fallback: custom-gangnam-style;
```

## 解説

指定された代替スタイルも表現を構築できなかった場合、そのさらに代替スタイルが使用されます。有効な代替スタイルが指定されていなかった場合は、既定で `decimal` になります。

代替スタイルが使用される場面は 2 つあります。

- カウンタースタイルに {{cssxref('@counter-style/range', 'range')}} 記述子が指定されていた場合、その範囲を外れた値を表現するのに代替スタイルが使用されます。
- `fixed` が {{cssxref('@counter-style/system', 'system')}} で使用され、すべてのリスト項目に対応させる記号が不足した場合、残りのリスト項目に代替スタイルが使用されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### カウンターの代替スタイルの指定

#### HTML

```html
<ul class="list">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
</ul>
```

#### CSS

```css
@counter-style fallback-example {
  system: fixed;
  symbols: "\24B6" "\24B7" "\24B8";
  fallback: upper-alpha;
}

.list {
  list-style: fallback-example;
}
```

#### 結果

{{ EmbedLiveSample('Specifying_a_fallback_counter_style') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- {{cssxref("symbols()")}}: 無名のカウンタースタイルを生成する関数記法
