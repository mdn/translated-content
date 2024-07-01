---
title: "@import"
slug: Web/CSS/@import
---

{{CSSRef}}

**`@import`** [CSS](/ko/docs/Web/CSS) [@규칙](/ko/docs/Web/CSS/At-rule)은 다른 스타일 시트에서 스타일 규칙을 가져올 때 쓰입니다. 이 규칙은 {{cssxref("@charset")}} 규칙을 제외하고 모든 다른 종류의 규칙보다 선행해야 합니다. `@import`는 [중첩 명령문](/ko/docs/Web/CSS/Syntax#nested_statements)이 아니기 때문에 [조건부 그룹 @규칙](/ko/docs/Web/CSS/At-rule#Conditional_Group_Rules) 내에 사용할 수 없습니다.

```css
@import url("fineprint.css") print;
@import url("bluish.css") speech;
@import "custom.css";
@import url("chrome://communicator/skin/");
@import "common.css" screen;
@import url("landscape.css") screen and (orientation: landscape);
```

사용자 에이전트는 지원되지 않는 미디어 유형에 대한 자원 검색을 피할 수 있도록, 제작자는 미디어에 의존한 `@import` 규칙을 지정할 수 있습니다. 이러한 조건부 import는 URI 뒤에 쉼표로 구분된 [미디어 질의](/ko/docs/Web/CSS/Media_Queries/Using_media_queries)를 지정합니다. 미디어 질의가 없으면, import는 무조건(unconditional)입니다. 미디어에 `all`을 지정하면 같은 효과가 있습니다.

## 구문

```
@import url;
@import url list-of-media-queries;
```

where:

- `url`
  - : import할 자원의 위치를 나타내는 {{cssxref("&lt;string&gt;")}} 또는 {{cssxref("&lt;uri&gt;")}}입니다. URL은 절대 또는 상대일 수 있습니다. URL은 실제로 파일에 지정할 필요는 없음을 주의하세요; 그냥 패키지 명 및 일부를 지정할 수 있으며 적절한 파일이 자동으로 선택됩니다(가령 **chrome://communicator/skin/**). 자세한 내용은 [여기를 참조](/ko/docs/XUL_Tutorial/The_Chrome_URL).
- `list-of-media-queries`
  - : 링크된 URL 내에 정의된 CSS 규칙의 적용을 조절하는 쉼표 구분된 [미디어 질의](/ko/docs/Web/CSS/Media_Queries/Using_media_queries) 목록입니다. 브라우저가 이러한 질의를 지원하지 않으면, 링크된 자원을 로드하지 않습니다.

### 형식 구문

{{csssyntax}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
