---
title: SVGAnimatedBoolean
slug: Web/API/SVGAnimatedBoolean
l10n:
  sourceCommit: 53fd7ea4a4657b1b457ee582d7a28672319bf80a
---

{{APIRef("SVG")}}

## SVG 動畫布林值介面

`SVGAnimatedBoolean` 介面用於可以動畫化的布林值類型屬性。

### 介面概覽

<table class="no-markdown">
  <tbody>
    <tr>
      <th scope="row">亦實作於</th>
      <td><em>無</em></td>
    </tr>
    <tr>
      <th scope="row">方法</th>
      <td><em>無</em></td>
    </tr>
    <tr>
      <th scope="row">屬性</th>
      <td>
        <ul>
          <li>布林值 <code>baseVal</code></li>
          <li>唯讀布林值 <code>animVal</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">規範文件</th>
      <td>
        <a
          href="https://www.w3.org/TR/SVG11/types.html#InterfaceSVGAnimatedBoolean"
          >SVG 1.1（第二版）</a
        >
      </td>
    </tr>
  </tbody>
</table>

## 實例屬性

<table class="no-markdown">
  <thead>
    <tr>
      <th>名稱</th>
      <th>類型</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>{{domxref("SVGAnimatedBoolean.baseVal")}}</code></td>
      <td>布林值</td>
      <td>
        在應用任何動畫之前，屬性的基礎值。
      </td>
    </tr>
    <tr>
      <td><code>{{domxref("SVGAnimatedBoolean.animVal")}}</code></td>
      <td>布林值</td>
      <td>
        如果屬性或屬性正在被動畫化，包含屬性或屬性的當前動畫值。如果屬性或屬性當前未被動畫化，則包含與 <code>baseVal</code> 相同的值。
      </td>
    </tr>
  </tbody>
</table>

## 實例方法

`SVGAnimatedBoolean` 介面未提供任何特定的方法。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}
