---
title: SVGTransformable
slug: orphaned/Web/API/SVGTransformable
original_slug: Web/API/SVGTransformable
---

{{APIRef("SVG")}}

## SVG transformable interface

インターフェイス `SVGTransformable` には、属性 {{ SVGAttr("transform") }}. を持つ全ての要素に適用されるプロパティとメソッドが含まれています。

### インターフェイスの概要

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Also implement</th>
      <td><em>無し</em></td>
    </tr>
    <tr>
      <th scope="row">Methods</th>
      <td><em>無し</em></td>
    </tr>
    <tr>
      <th scope="row">Properties</th>
      <td>
        <ul>
          <li>
            読み取り専用
            {{ domxref("SVGAnimatedTransformList") }}
            <code>transform</code>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Normative document</th>
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/types.html#InterfaceSVGTransformable"
          >SVG 1.1 (2nd Edition)</a
        >
      </td>
    </tr>
  </tbody>
</table>

## プロパティ

| 名前        | 型                                                       | 説明                                                                     |
| ----------- | -------------------------------------------------------- | ------------------------------------------------------------------------ |
| `transform` | {{ domxref("SVGAnimatedTransformList") }} | 指定された要素の属性 {{ SVGAttr("transform") }} に対応します。 |

## メソッド

`SVGTransformable` インターフェイスは、特定のメソッドを提供しません。

## ブラウザー実装状況

{{Compat("api.SVGTransformable")}}
