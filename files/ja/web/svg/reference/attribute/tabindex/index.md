---
title: tabindex
slug: Web/SVG/Reference/Attribute/tabindex
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

**`tabindex`** 属性を使用すると、要素にフォーカスを合わせることができるかどうかを制御し、連続したフォーカスナビゲーションのために要素の相対的な順序を定義することができます。

この属性は、任意の SVG 要素で使用することができます。

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<?xml version="1.0"?>
<svg viewBox="0 0 260 260" xmlns="http://www.w3.org/2000/svg">
  <circle r="10" tabindex="0" fill="green" cx="60" cy="60" />
  <circle r="40" tabindex="0" fill="red" cx="60" cy="160" />
  <circle r="60" tabindex="0" fill="blue" cx="160" cy="60" />
  <circle r="20" tabindex="0" fill="black" cx="160" cy="160" />
</svg>
```

{{EmbedLiveSample("Example", "260", "260")}}

## 使用上の注意

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <a href="https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-integer">妥当な整数</a>
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><em>なし</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>不可</td>
    </tr>
  </tbody>
</table>

- 妥当な整数
  - : 連続したフォーカスナビゲーションのための要素の相対的な順序。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [HTML `tabindex`](/ja/docs/Web/HTML/Reference/Global_attributes/tabindex)
