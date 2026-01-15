---
title: baseFrequency
slug: Web/SVG/Reference/Attribute/baseFrequency
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

**`baseFrequency`** 특성은 {{SVGElement("feTurbulence")}} 필터 원시 요소의 노이즈 함수에 대한 기본 주파수 매개변수를 나타냅니다.

이 특성을 아래 SVG 요소들과 함께 사용할 수 있습니다.

- {{SVGElement("feTurbulence")}}

## 예제

### 예제 1

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="noise1" x="0" y="0" width="100%" height="100%">
    <feTurbulence baseFrequency="0.025" />
  </filter>
  <filter id="noise2" x="0" y="0" width="100%" height="100%">
    <feTurbulence baseFrequency="0.05" />
  </filter>

  <rect x="0" y="0" width="200" height="200" filter="url(#noise1)" />
  <rect x="220" y="0" width="200" height="200" filter="url(#noise2)" />
</svg>
```

{{EmbedLiveSample("Example 1", "220", "220")}}

### 예제 2

```html
<svg
  width="200"
  height="200"
  viewBox="0 0 220 220"
  xmlns="http://www.w3.org/2000/svg">
  <filter id="displacementFilter">
    <feTurbulence
      type="turbulence"
      baseFrequency="0.05"
      numOctaves="2"
      result="turbulence" />
    <feDisplacementMap
      in2="turbulence"
      in="SourceGraphic"
      scale="50"
      xChannelSelector="R"
      yChannelSelector="G" />
  </filter>

  <circle cx="100" cy="100" r="100" filter="url(#displacementFilter)" />
</svg>
```

{{EmbedLiveSample("Example 2", "220", "250")}}

## 사용 일람

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">값</th>
      <td>
        <a href="/ko/docs/Web/SVG/Guides/Content_type#number-optional-number"
          >&#x3C;number-optional-number></a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">기본 값</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">애니메이션 사용 가능 여부</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

- `<number-optional-number>`
  - : 만일 두 개의 숫자가 주어지면, 첫번째 숫자는 수평 방향의 기본 주파수를 나타내고 두번째 숫자는 수직 방향의 기본 주파수를 나타냅니다. 하나의 숫자가 주어진다면 그 값은 x 와 y 모두에 사용될 수 있습니다.

    음수 값은 사용할 수 없습니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
