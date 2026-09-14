---
title: SVGPreserveAspectRatio
slug: Web/API/SVGPreserveAspectRatio
l10n:
  sourceCommit: 59fec48b4572624a0b23bc98385dd05029125a76
---

{{APIRef("SVG")}}

## SVG preserveAspectRatio インターフェイス

`SVGPreserveAspectRatio` インターフェイスは、一部の SVG 要素で利用できる {{ SVGAttr("preserveAspectRatio") }} 属性に対応します。

`SVGPreserveAspectRatio` オブジェクトは読み取り専用として指定することができ、すなわち、オブジェクトを変更しようとすると例外が発生するようになります。

### インターフェイス概要

<table class="no-markdown">
  <tbody>
    <tr>
      <th scope="row">実装しているもの</th>
      <td><em>なし</em></td>
    </tr>
    <tr>
      <th scope="row">メソッド</th>
      <td><em>なし</em></td>
    </tr>
    <tr>
      <th scope="row">プロパティ</th>
      <td>
        <ul>
          <li>unsigned short <code>align</code></li>
          <li>unsigned short <code>meetOrSlice</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">定数</th>
      <td>
        <ul>
          <li><code>SVG_PRESERVEASPECTRATIO_UNKNOWN</code> = 0</li>
          <li><code>SVG_PRESERVEASPECTRATIO_NONE</code> = 1</li>
          <li><code>SVG_PRESERVEASPECTRATIO_XMINYMIN</code> = 2</li>
          <li><code>SVG_PRESERVEASPECTRATIO_XMIDYMIN</code> = 3</li>
          <li><code>SVG_PRESERVEASPECTRATIO_XMAXYMIN</code> = 4</li>
          <li><code>SVG_PRESERVEASPECTRATIO_XMINYMID</code> = 5</li>
          <li><code>SVG_PRESERVEASPECTRATIO_XMIDYMID</code> = 6</li>
          <li><code>SVG_PRESERVEASPECTRATIO_XMAXYMID</code> = 7</li>
          <li><code>SVG_PRESERVEASPECTRATIO_XMINYMAX</code> = 8</li>
          <li><code>SVG_PRESERVEASPECTRATIO_XMIDYMAX</code> = 9</li>
          <li><code>SVG_PRESERVEASPECTRATIO_XMAXYMAX</code> = 10</li>
        </ul>
        <ul>
          <li><code>SVG_MEETORSLICE_UNKNOWN</code> = 0</li>
          <li><code>SVG_MEETORSLICE_MEET</code> = 1</li>
          <li><code>SVG_MEETORSLICE_SLICE</code> = 2</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">正規ドキュメント</th>
      <td>
        <a
          href="https://www.w3.org/TR/SVG/coords.html#InterfaceSVGPreserveAspectRatio"
          >SVG 1.1 (2nd Edition)</a
        >
      </td>
    </tr>
  </tbody>
</table>

## 定数

<table class="no-markdown">
  <thead>
    <tr>
      <th>名前</th>
      <th>値</th>
      <th>解説</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>SVG_PRESERVEASPECTRATIO_UNKNOWN</code>
      </td>
      <td>0</td>
      <td>
        列挙型に、定義済みの型ではない値を設定しました。
        この型に新しい値を定義しようとしたり、既存の値をこの型に切り替えようとしたりすることは、不正な操作です。
      </td>
    </tr>
    <tr>
      <td>
        <code>SVG_PRESERVEASPECTRATIO_NONE</code>
      </td>
      <td>1</td>
      <td>
        {{ SVGAttr("preserveAspectRatio") }} 属性の <code>none</code> の値に対応します。
      </td>
    </tr>
    <tr>
      <td>
        <code>SVG_PRESERVEASPECTRATIO_XMINYMIN</code>
      </td>
      <td>2</td>
      <td>
        {{ SVGAttr("preserveAspectRatio") }} 属性の <code>xMinYMin</code> の値に対応します。
      </td>
    </tr>
    <tr>
      <td>
        <code>SVG_PRESERVEASPECTRATIO_XMIDYMIN</code>
      </td>
      <td>3</td>
      <td>
        {{ SVGAttr("preserveAspectRatio") }} 属性の <code>xMidYMin</code> の値に対応します。
      </td>
    </tr>
    <tr>
      <td>
        <code>SVG_PRESERVEASPECTRATIO_XMAXYMIN</code>
      </td>
      <td>4</td>
      <td>
        {{ SVGAttr("preserveAspectRatio") }} 属性の <code>xMaxYMin</code> の値に対応します。
      </td>
    </tr>
    <tr>
      <td>
        <code>SVG_PRESERVEASPECTRATIO_XMINYMID</code>
      </td>
      <td>5</td>
      <td>
        {{ SVGAttr("preserveAspectRatio") }} 属性の <code>xMinYMid</code> の値に対応します。
      </td>
    </tr>
    <tr>
      <td>
        <code>SVG_PRESERVEASPECTRATIO_XMIDYMID</code>
      </td>
      <td>6</td>
      <td>
        {{ SVGAttr("preserveAspectRatio") }} 属性の <code>xMidYMid</code> の値に対応します。
      </td>
    </tr>
    <tr>
      <td>
        <code>SVG_PRESERVEASPECTRATIO_XMAXYMID</code>
      </td>
      <td>7</td>
      <td>
        {{ SVGAttr("preserveAspectRatio") }} 属性の <code>xMaxYMid</code> の値に対応します。
      </td>
    </tr>
    <tr>
      <td>
        <code>SVG_PRESERVEASPECTRATIO_XMINYMAX</code>
      </td>
      <td>8</td>
      <td>
        {{ SVGAttr("preserveAspectRatio") }} 属性の <code>xMinYMax</code> の値に対応します。
      </td>
    </tr>
    <tr>
      <td>
        <code>SVG_PRESERVEASPECTRATIO_XMIDYMAX</code>
      </td>
      <td>9</td>
      <td>
        {{ SVGAttr("preserveAspectRatio") }} 属性の <code>xMidYMax</code> の値に対応します。
      </td>
    </tr>
    <tr>
      <td>
        <code>SVG_PRESERVEASPECTRATIO_XMAXYMAX</code>
      </td>
      <td>10</td>
      <td>
        {{ SVGAttr("preserveAspectRatio") }} 属性の <code>xMaxYMax</code> の値に対応します。
      </td>
    </tr>
    <tr>
      <td><code>SVG_MEETORSLICE_UNKNOWN</code></td>
      <td>0</td>
      <td>
        列挙型に、定義済みの型ではない値を設定しました。
        この型に新しい値を定義しようとしたり、既存の値をこの型に切り替えようとしたりすることは、不正な操作です。
      </td>
    </tr>
    <tr>
      <td><code>SVG_MEETORSLICE_MEET</code></td>
      <td>1</td>
      <td>
        {{ SVGAttr("preserveAspectRatio") }} 属性の <code>meet</code> の値に対応します。
      </td>
    </tr>
    <tr>
      <td><code>SVG_MEETORSLICE_SLICE</code></td>
      <td>2</td>
      <td>
        {{ SVGAttr("preserveAspectRatio") }} 属性の <code>slice</code> の値に対応します。
      </td>
    </tr>
  </tbody>
</table>

## インスタンスプロパティ

<table class="no-markdown">
  <thead>
    <tr>
      <th>名前</th>
      <th>Type</th>
      <th>解説</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{domxref("SVGPreserveAspectRatio.align", "align")}}</td>
      <td>unsigned short</td>
      <td>
        配置値の種類を、このインターフェイスで定義されている <code>SVG_PRESERVEASPECTRATIO_*</code> 定数のいずれかで指定します。
      </td>
    </tr>
    <tr>
      <td>{{domxref("SVGPreserveAspectRatio.meetOrSlice", "meetOrSlice")}}</td>
      <td>unsigned short</td>
      <td>
        meet または slice 値を、このインターフェイスで定義されている <code>SVG_MEETORSLICE_*</code> 定数のいずれかで指定します。
      </td>
    </tr>
  </tbody>
</table>

**設定における例外:** 読み取り専用オブジェクトの属性の値を変更しようとすると、 [`DOMException`](/ja/docs/Web/API/DOMException) のコード `NO_MODIFICATION_ALLOWED_ERR` が発生します。

## インスタンスメソッド

`SVGPreserveAspectRatio` インターフェイスには、固有のメソッドはありません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
