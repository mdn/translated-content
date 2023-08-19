---
title: CSSMediaRule
slug: Web/API/CSSMediaRule
---

{{APIRef("CSSOM")}}

**`CSSMediaRule`** 인터페이스는 하나의 CSS {{cssxref("@media")}} 규칙을 나타냅니다. {{domxref("CSSConditionRule")}} 인터페이스를 구현하므로, {{domxref("CSSGroupingRule")}}과 {{domxref("CSSRule")}} 인터페이스도 유형값 `4` (`CSSRule.MEDIA_RULE`)로 구현합니다.

## 구문

[WebIDL](https://heycam.github.io/webidl/) 형식을 사용해 서술합니다.

```
interface CSSMediaRule : CSSConditionRule {
    readonly attribute MediaList media;
}
```

## 속성

`CSSMediaRule`은 {{domxref("CSSConditionRule")}}, 그리고 {{domxref("CSSGroupingRule")}}와 {{domxref("CSSRule")}}로서 해당 인터페이스의 속성을 구현합니다. 다음과 같은 자체 속성을 가집니다.

- {{domxref("CSSMediaRule.media")}} {{readonlyinline}}
  - : 스타일 정보를 적용할 매체 정보를 나타내는 {{domxref("MediaList")}}입니다.

## 메서드

`CSSMediaRule`은 {{domxref("CSSConditionRule")}}, 그리고 {{domxref("CSSGroupingRule")}}와 {{domxref("CSSRule")}}로서 해당 인터페이스의 메서드를 구현합니다. 자체 메서드는 가지지 않습니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
