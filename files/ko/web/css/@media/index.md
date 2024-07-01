---
title: "@media"
slug: Web/CSS/@media
---

{{CSSRef}}

**`@media`** [CSS](/ko/docs/Web/CSS) [@규칙](/ko/docs/Web/CSS/At-rule)은 스타일 시트의 일부를 하나 이상의 [미디어 쿼리](/ko/docs/Web/Guide/CSS/Media_queries) 결과에 따라 적용할 때 사용할 수 있습니다. `@media`를 사용해 미디어 쿼리를 지정하면 해당 쿼리를 만족하는 장치에서만 CSS 블록을 적용할 수 있습니다.

> **참고:** JavaScript에서는 `@media`를 {{domxref("CSSMediaRule")}} CSS 객체 모델 인터페이스로 접근할 수 있습니다.

## 구문

`@media` @규칙은 최상위 코드나, 아무 [조건부 그룹 @규칙](/ko/docs/Web/CSS/At-rule#조건부_그룹_규칙) 안에 중첩해 작성할 수 있습니다.

```css
/* 최상위 코드 레벨 */
@media screen and (min-width: 900px) {
  article {
    padding: 1rem 3rem;
  }
}

/* 다른 조건부 @규칙 내에 중첩 */
@supports (display: flex) {
  @media screen and (min-width: 900px) {
    article {
      display: flex;
    }
  }
}
```

미디어 쿼리 구문에 관한 내용은 [미디어 쿼리 사용하기](/ko/docs/Web/Guide/CSS/Media_queries#구문) 문서를 참고하세요.

## 접근성 고려사항

글씨 크기를 조절한 사용자를 위해서, 미디어 쿼리의 {{cssxref("&lt;length&gt;")}} 자리에는 [`em`](/ko/docs/Web/CSS/length#em)을 사용하는게 좋습니다.

`em`과 [`px`](/ko/docs/Web/CSS/length#px) 모두 유효한 단위지만, 사용자가 브라우저의 글씨 크기를 변경했다면 `em`이 더 자연스럽게 동작합니다.

Level 4 미디어 쿼리를 통한 사용자 경험 향상도 고려해보세요. 예컨대 `prefers-reduced-motion` 쿼리를 사용하면 [사용자가 시스템에 애니메이션을 최소로 줄여달라고 요청했는지 알 수 있습니다](/ko/docs/Web/CSS/@media/prefers-reduced-motion).

## 보안

미디어 쿼리는 사용자의 장치와 더 나아가 기능과 디자인에 대한 통찰을 제공하므로, "핑거프린팅"을 통해 장치 고유 식별자로 활용하거나, 그보단 덜 해도 사용자가 원하지 않을 수준의 분류를 하기 위해 오용할 가능성이 있습니다.

그러므로 브라우저는 기기의 특정을 방지하기 위해 일부 반환 값을 모호하게 할 수 있습니다. 또한 사용자에게 추가 설정을 제공할 수도 있는데, 예를 들어 Firefox의 "핑거프린터 차단" 기능을 활성화하면 많은 수의 미디어 쿼리는 실제 장치 상태 대신 기본 값을 보고하게 됩니다.

## 형식 구문

{{csssyntax}}

## 예제

### 출력과 화면 미디어 타입 판별

```css
@media print {
  body {
    font-size: 10pt;
  }
}

@media screen {
  body {
    font-size: 13px;
  }
}

@media screen, print {
  body {
    line-height: 1.2;
  }
}

@media only screen and (min-width: 320px) and (max-width: 480px) and (resolution: 150dpi) {
  body {
    line-height: 1.4;
  }
}
```

Media Queries Level 4부터는 새로운 범위 표현 구문을 사용해 더 간결한 미디어 쿼리를 작성할 수 있습니다.

```css
@media (height > 600px) {
  body {
    line-height: 1.4;
  }
}

@media (400px <= width <= 700px) {
  body {
    line-height: 1.4;
  }
}
```

더 많은 예제는 [미디어 쿼리 사용하기](/ko/docs/Web/CSS/Media_Queries/Using_media_queries)를 참고하세요.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [미디어 쿼리 사용하기](/ko/docs/Web/CSS/Media_Queries/Using_media_queries)
- JavaScript에서 `@media`에 접근할 때 사용할 수 있는 CSS 객체 모델 인터페이스 {{domxref("CSSMediaRule")}}
- [Mozilla 미디어 특성 확장](/ko/docs/Web/CSS/Mozilla_Extensions#Media_features)
- [WebKit 미디어 특성 확장](/ko/docs/Web/CSS/Webkit_Extensions#Media_features)
