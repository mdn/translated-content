---
title: rotate
slug: Web/SVG/Reference/Attribute/rotate
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

`rotate` 属性は、アニメーションする要素が、 {{SVGElement("animateMotion")}} 要素で指定されたパスに沿って移動する際に、どのように回転させるかを指定します。

この属性は以下の SVG 要素で使用できます。

- {{SVGElement("animateMotion")}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code>auto</code> | <code>auto-reverse</code> |
        {{cssxref("number")}}
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>不可</td>
    </tr>
  </tbody>
</table>

`auto` および `auto-reverse` の値により、アニメーションする要素の回転を、パスに沿って移動する際に動的に変更することができます。 `rotate` の値が `auto` である場合、要素は現在の移動方向に合わせて右側が回転するように配置されます。 値が `auto-reverse` である場合、現在の移動方向に合わせて左側が回転するように配置されます。

`rotate` の値を数値で設定すると、アニメーション中に変化しない一定の回転角度（度数）を指定します。既定値の `0` は、アニメーションする要素を元の方向のままにします。

## 例

### SVG

```html
<svg
  width="400"
  height="120"
  viewBox="0 0 480 120"
  xmlns="http://www.w3.org/2000/svg">
  <!-- 移動経路の輪郭を灰色で描画 -->
  <path
    d="M10,110 A120,120 -45 0,1 110 10 A120,120 -45 0,1 10,110"
    stroke="lightgrey"
    stroke-width="2"
    fill="none"
    id="theMotionPath" />

  <!-- 赤い矢印は回転しない -->
  <path fill="red" d="M-5,-5 L10,0 -5,5 0,0 Z">
    <!-- 移動経路のアニメーションを定義 -->
    <animateMotion dur="6s" repeatCount="indefinite" rotate="0">
      <mpath href="#theMotionPath" />
    </animateMotion>
  </path>

  <g transform="translate(100, 0)">
    <use href="#theMotionPath" />
    <!-- 緑の矢印は移動経路に沿って回転 -->
    <path fill="green" d="M-5,-5 L10,0 -5,5 0,0 Z">
      <!-- 移動経路のアニメーションを定義 -->
      <animateMotion dur="6s" repeatCount="indefinite" rotate="auto">
        <mpath href="#theMotionPath" />
      </animateMotion>
    </path>
  </g>

  <g transform="translate(200, 0)">
    <use href="#theMotionPath" />
    <!-- 青の矢印は移動経路に沿って逆向きに回転 -->
    <path fill="blue" d="M-5,-5 L10,0 -5,5 0,0 Z">
      <!-- 移動経路のアニメーションを定義 -->
      <animateMotion dur="6s" repeatCount="indefinite" rotate="auto-reverse">
        <mpath href="#theMotionPath" />
      </animateMotion>
    </path>
  </g>

  <g transform="translate(300, 0)">
    <use href="#theMotionPath" />
    <!-- 紫の矢印は 210 度の向きに固定 -->
    <path fill="purple" d="M-5,-5 L10,0 -5,5 0,0 Z">
      <!-- 移動経路のアニメーションを定義 -->
      <animateMotion dur="6s" repeatCount="indefinite" rotate="210">
        <mpath href="#theMotionPath" />
      </animateMotion>
    </path>
  </g>
</svg>
```

### 結果

{{EmbedLiveSample('Examples')}}

## 仕様書

{{Specifications}}
