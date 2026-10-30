---
title: xlink:title
slug: Web/SVG/Reference/Attribute/xlink:title
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

**`xlink:title`** 属性は、リンクやリソースの意味を、人間が読み取り可能な形で記述するために使用します。

この情報の活用方法は、行われる処理の種類に大きく左右されます。例えば、視覚障碍のあるユーザーが利用するアプリケーションでタイトルを利用できる状態にしたり、リンク表を作成したり、ユーザーがマウスポインターをリソースの上にホバーさせた際に現れるヘルプテキストを表示したりするために使用される場合があります。

> [!NOTE]
> 新しいコンテンツでは {{SVGElement("title")}} 子要素を `xlink:title` 属性の代わりに使用してください。

## 例

この属性は以下の SVG 要素で使用できます。

- {{SVGElement("a")}}
- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}
- {{SVGElement("feImage")}}
- {{SVGElement("filter")}}
- {{SVGElement("image")}}
- {{SVGElement("linearGradient")}}
- {{SVGElement("mpath")}}
- {{SVGElement("pattern")}}
- {{SVGElement("radialGradient")}}
- {{SVGElement("script")}}
- {{SVGElement("set")}}
- {{SVGElement("textPath")}}
- {{SVGElement("use")}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#anything"
            >&#x3C;anything></a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>不可</td>
    </tr>
  </tbody>
</table>

- `<anything>`
  - : この値は、リンクやリソースの意味を説明するために使用するタイトルを指定します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
