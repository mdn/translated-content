---
title: restart
slug: Web/SVG/Reference/Attribute/restart
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

**`restart`** 属性は、アニメーションを再起動できるかどうかを示します。

この属性は、以下の SVG 要素で使用することができます。

- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}
- {{SVGElement("set")}}

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}

a {
  fill: blue;
  text-decoration: underline;
  cursor: pointer;
}
```

```html
<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg">
  <rect y="30" width="100" height="100">
    <animate
      attributeType="XML"
      attributeName="y"
      from="30"
      to="100"
      dur="5s"
      repeatCount="1"
      restart="always" />
  </rect>
  <rect x="120" y="30" width="100" height="100">
    <animate
      attributeType="XML"
      attributeName="y"
      from="30"
      to="100"
      dur="5s"
      repeatCount="1"
      restart="whenNotActive" />
  </rect>
  <a id="restart"><text y="20">Restart animation</text></a>
</svg>
```

```js
document.getElementById("restart").addEventListener("click", (evt) => {
  document.querySelectorAll("animate").forEach((element) => {
    element.beginElement();
  });
});
```

{{EmbedLiveSample("Example", "220", "150")}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code>always</code> | <code>whenNotActive</code> | <code>never</code>
      </td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><code>always</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>不可</td>
    </tr>
  </tbody>
</table>

- `always`
  - : この値は、アニメーションをいつでも再開することが可能であることを示しています。
- `whenNotActive`
  - : この値は、アニメーションがアクティブでない状態（つまり、アクティブ期間が終了した後）でのみ、アニメーションを再起動することができることを示します。アニメーションのアクティブ期間中に再起動を試みても、無視されます。
- `never`
  - : この値は、アニメーションを再起動できないことを示しています。

## 仕様書

{{Specifications}}
