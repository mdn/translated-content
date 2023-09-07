---
title: font-feature-settings
slug: Web/CSS/font-feature-settings
---

{{CSSRef}}

**`font-feature-settings`** CSS 속성은 오픈타입 폰트의 다양한 오픈타입 피처를 설정합니다.

{{EmbedInteractiveExample("pages/css/font-feature-settings.html")}}

## 문법

```css
/* 기본값 사용 */
font-feature-settings: normal;

/* 오픈타입 피처 태그에 대해 값 설정 */
font-feature-settings: "smcp";
font-feature-settings: "smcp" on;
font-feature-settings: "swsh" 2;
font-feature-settings:
  "smcp",
  "swsh" 2;

/* 전역 값 사용 */
font-feature-settings: inherit;
font-feature-settings: initial;
font-feature-settings: unset;
```

가능하다면 [단축 속성](/ko/docs/Web/CSS/Shorthand_properties)인 {{cssxref("font-variant")}} 속성을 사용하거나, 각각의 피처와 연관된 {{cssxref("font-variant-ligatures")}}, {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-east-asian")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-variant-numeric")}}, {{cssxref("font-variant-position")}} 등을 사용하는 것이 `font-feature-settings`를 직접 사용하는 것에 비해 더 효율적이고, 예측 가능하게 동작하며 이해하기도 쉽습니다.

이는 `font-feature-settings`는 원래 작은 대문자(Small caps)와 같이 접근할 수 있는 다른 방법이 없는 오픈타입 피처를 제어하기 위해 만들어진 저수준의 기능이기 때문입니다.

### 값

- `normal`
  - : 기본값을 이용하여 텍스트를 표시합니다.
- `&#x3C;feature-tag-value>`

  - : 텍스트를 렌더링할 때, 오픈타입 피처를 활성화하거나 비활성화하기 위해 피처 태그 목록을 렌더링 엔진에 전달합니다. 피처 태그는 4개의 ASCII 문자로 이루어진 {{cssxref("&lt;string&gt;")}}이어야 합니다. 만약 태그가 네 글자보다 짧거나, 유니코드 `U+20` – `U+7E` 범위 바깥에 있는 문자를 포함한다면 속성 전체가 무효처리됩니다.

  값은 양의 정수 값을 가집니다. 각각 `1`, `0`과 같은 의미를 가지는 키워드 `on` 과 `off`도 사용할 수 있습니다. 아무런 값이 설정되지 않았다면 기본값은 `1`입니다. [stylistic alternates](http://www.microsoft.com/typography/otspec/features_pt.htm#salt)와 같이 Boolean 타입이 아닌 오픈타입 피처의 경우, 값은 선택되어야 하는 글리프(글자)를 의미합니다. Boolean 타입인 경우에는 스위치라고 생각하시면 됩니다.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## 예시

### 다양한 오픈타입 피처 활성화

```css
/* 작은 대문자(small-caps) 대체 글리프를 사용합니다. */
.smallcaps {
  font-feature-settings: "smcp" on;
}

/* 대문자와 소문자를 모두 작은 대문자로 변환합니다.(문장부호도 영향을 받습니다.)*/
.allsmallcaps {
  font-feature-settings: "c2sc", "smcp";
}

/* 영문 대문자 "O"와 구분하기 위해 대각선이 그려진 숫자 0을 사용합니다. */
.nicezero {
  font-feature-settings: "zero";
}

/* '역사적인' 형태를 사용하기 위해 'hist' 피처를 활성화합니다. */
.hist {
  font-feature-settings: "hist";
}

/* 표준합자(common ligatures)를 비활성화 합니다. 기본값은 활성 상태입니다. */
.noligs {
  font-feature-settings: "liga" 0;
}

/* 고정폭 숫자(tabular figures)를 사용합니다. */
td.tabular {
  font-feature-settings: "tnum";
}

/* 자동 분수 입력을 활성화합니다. */
.fractions {
  font-feature-settings: "frac";
}

/* 가능한 swash 문자 중 두번째를 사용합니다. */
.swash {
  font-feature-settings: "swsh" 2;
}

/* 스타일 세트(stylistic set) 7번을 사용합니다. */
.fancystyle {
  font-family: Gabriola; /* available on Windows 7, and on Mac OS */
  font-feature-settings: "ss07";
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{cssxref("@font-face/font-display", "font-display")}}
- {{cssxref("@font-face/font-family", "font-family")}}
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
- {{cssxref("@font-face/font-style", "font-style")}}
- {{cssxref("@font-face/font-weight", "font-weight")}}
- {{cssxref("@font-face/font-variant", "font-variant")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
- {{cssxref("@font-face/src", "src")}}
- {{cssxref("@font-face/unicode-range", "unicode-range")}}
- [OpenType Feature Tags](http://www.microsoft.com/typography/otspec/featurelist.htm) list
- [Using the whole font](http://blogs.msdn.com/b/ie/archive/2012/01/09/css-corner-using-the-whole-font.aspx)
  _(**Note:** The `-moz` syntax is the old one. On Gecko, use the `-ms` syntax but with `-moz`.)_
