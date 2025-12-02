---
title: :blank
slug: Web/CSS/Reference/Selectors/:blank
original_slug: Web/CSS/:blank
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{SeeCompatTable}}

> [!NOTE] > `:blank` 선택자는 CSSWG가 지속적으로 변경하고 있음에 따라 위험 요소로 간주됩니다.
>
> [CSSWG issue #1967](https://github.com/w3c/csswg-drafts/issues/1967) 를 확인해 보세요.

**`:blank`** [CSS](/ko/docs/Web/CSS) [의사 클래스](/ko/docs/Web/CSS/Pseudo-classes)는 비어 있는 사용자의 인풋 요소 (예를 들어 {{HTMLElement("input")}} or {{HTMLElement("textarea")}}와 같은 요소들)를 선택합니다.

## 구문

```css
:blank {
  /* ... */
}
```

## 예제

### 간단한 :blank 예제

점차 지원될 브라우저에서는 `:blank` 의사 클래스가 개발자에게 필수 요소가 아니긴 하지만. 아직 내용이 입력되지 인풋 제어를 강조함으로써 사용자에게 알림을 제공할 수 있습니다.

#### HTML

```html
<textarea></textarea>
```

#### CSS

```css
textarea:blank {
  border: 3px solid red;
}
```

#### 결과

{{EmbedLiveSample('Simple_blank_example', '100%', 150)}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{CSSxRef(":empty")}}
