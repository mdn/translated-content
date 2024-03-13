---
title: font-synthesis
slug: Web/CSS/font-synthesis
---

{{CSSRef}}

[CSS](/ko/docs/Web/CSS) **`font-synthesis`** 속성은 브라우저가 굵은 글꼴과 이탤릭 글꼴을 합성하는 것을 허용할지 설정합니다.

{{EmbedInteractiveExample("pages/css/font-synthesis.html")}}

## 구문

`font-synthesis`는 다음 방법 중 하나를 사용해 지정합니다.

- `none` 키워드.
- `weight` 또는 `style` 키워드.
- `weight`와 `style` 키워드.

### 값

- `none`
  - : 굵은 글꼴과 이탤릭 글꼴의 합성을 금지합니다.
- `weight`
  - : 필요한 경우 굵은 글꼴을 합성할 수 있습니다.
- `style`
  - : 필요한 경우 이탤릭 글꼴을 합성할 수 있습니다.

## 설명

대부분의 표준 서양 글꼴은 이탤릭과 굵은 글꼴을 포함하고 있으나 상용 글꼴은 그렇지 않은 경우도 많습니다. 한국, 중국, 일본을 포함한 비 알파벳 문화권의 문자 체계는 보통 이런 변형을 포함하지 않으며 브라우저의 글꼴 합성으로 인해 가독성이 떨어질 수 있습니다. 이 두 가지 경우에 대해 `font-synthesis`를 사용해 기본 글꼴 합성을 끄는 것이 좋을 수도 있습니다.

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

### 글꼴 합성 비활성화

#### HTML

```html
<em class="syn">절 합성하세요! Synthesize!</em>
<br />
<em class="no-syn">절 합성하지 마세요! Synthesize!</em>
```

#### CSS

```css
em {
  font-weight: bold;
}
.syn {
  font-synthesis: style weight;
}
.no-syn {
  font-synthesis: none;
}
```

#### 결과

{{ EmbedLiveSample('글꼴_합성_비활성화', '', '50') }}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{cssxref("font-style")}}
- {{cssxref("font-weight")}}
