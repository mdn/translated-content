---
title: "@charset"
slug: Web/CSS/@charset
---

{{ CSSRef }}

**`@charset`** [CSS](/ko/docs/Web/CSS) [at-규칙](/ko/docs/Web/CSS/At-rule)은 스타일 시트에 쓰이는 문자 인코딩을 지정합니다. 스타일 시트의 첫 번째 요소여야 하며 어떤 문자가 선행되지 않아야 합니다; [중첩된 문](/ko/docs/Web/CSS/Syntax#nested_statements)이 아니기에, [조건부 그룹 at-규칙](/ko/docs/Web/CSS/At-rule#Conditional_Group_Rules) 내에 사용될 수 없습니다. 여러 `@charset` at-규칙이 정의된 경우, 첫 번째 것만 사용되고 HTML 요소의 `style` attribute 또는 HTML 페이지의 문자 집합과 관련 있는 {{ HTMLElement("style") }} 요소 내에서 사용될 수 없습니다.

```css
@charset "utf-8";
```

이 at-규칙은 {{ cssxref("content") }}처럼 일부 CSS 속성(property)에서 비 ASCII 문자를 사용할 때 유용합니다.

스타일 시트의 문자 인코딩을 정의하는 여러 방법이 있기에, 브라우저는 다음과 같은 순서로 다음 방법을 시도합니다( 그리고 하나가 결과를 산출하자 마자 곧 멈춥니다):

1. 파일의 시작 부분에 놓이는 [Unicode byte-order](http://en.wikipedia.org/wiki/Byte_order_mark) 문자값.
2. `Content-Type:` HTTP 헤더의 `charset` attribute 또는 스타일 시트를 제공하는 데 쓰이는 프로토콜 등가물에 주어진 값.
3. `@charset` CSS at-규칙.
4. 참조하는 문서에 의해 정의된 문자 인코딩 사용: {{ HTMLElement("link") }} 요소의 `charset` attribute. 이 메서드는 HTML5에서 폐기(obsolete)되어 사용해서는 안됩니다.
5. 문서가 UTF-8이라고 가정

## 구문

```
@charset "UTF-8";
@charset 'iso-8859-15';
```

where:

- _charset_
  - : 사용되는 문자 인코딩을 나타내는 {{cssxref("&lt;string&gt;")}}입니다. [IANA-registry](http://www.iana.org/assignments/character-sets)에 정의된 웹 안전 문자 인코딩의 이름이어야 합니다. 여러 이름이 인코딩과 관련된 경우, *preferred*로 표시된 것만 사용되어야 합니다.

### 형식 구문

{{csssyntax}}

## 예제

```css-nolint
@charset "UTF-8"; /* 스타일 시트의 인코딩을 Unicode UTF-8로 설정 */
@charset 'iso-8859-15'; /* 스타일 시트의 인코딩을 Latin-9 (서유럽어, euro sign 있는) 로 설정 */
 @charset "UTF-8"; /* 무효한, at-규칙 앞에 문자(공백)가 있음 */
@charset UTF-8; /* 무효한, ' 또는 " 없는 문자집합 CSS {{cssxref("&lt;string&gt;")}}이 아님 */
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
