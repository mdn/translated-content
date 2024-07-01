---
title: "@namespace"
slug: Web/CSS/@namespace
---

{{CSSRef}}

**`@namespace`** 는 [CSS](/ko/docs/Glossary/CSS) [스타일 시트](/ko/docs/Web/API/StyleSheet)에서 사용되는 [XML 네임스페이스](/ko/docs/Namespaces)를 정의하는 [at-규칙](/ko/docs/Web/CSS/At-rule)입니다. 정의된 네임스페이스는 오직 그 네임스페이스 내의 요소를 선택만 하기 위해 [universal](/ko/docs/Web/CSS/Universal_selectors), [type](/ko/docs/Web/CSS/Type_selectors) 및 [attribute](/ko/docs/Web/CSS/Attribute_selectors) [선택자](/ko/docs/Web/Guide/CSS/Getting_started/Selectors)를 제한하는 데 사용될 수 있습니다. `@namespace` 규칙은 보통 여러 네임스페이스(인라인 SVG 또는 MathML 있는 HTML5 또는 다양한 어휘를 섞는 XML 등)를 포함하는 문서를 처리하는 경우에만 유용합니다.

어떤 `@namespace` 규칙이든 모든 [@charset](/ko/docs/Web/CSS/%40charset) 및 [@import](/ko/docs/Web/CSS/%40import) 규칙의 다음에 오고 스타일시트에서 모든 다른 at-규칙 및 [스타일 선언](/ko/docs/Web/API/CSSStyleDeclaration)보다 앞서야 합니다.

`@namespace`는 스타일 시트를 위한 **기본 네임스페이스**를 정의하는 데 사용될 수 있습니다. 기본 네임스페이스가 정의된 경우, 모든 universal 및 type 선택자 (attribute 선택자는 아님, 아래 주의 참조) 는 그 네임스페이스 내 요소에만 적용됩니다.

`@namespace` 규칙은 또한 네임스페이스 접두어(**namespace prefix**)를 정의하는 데도 사용될 수 있습니다. universal, type 또는 attribute 선택자가 네임스페이스 접두어로 시작되는 경우, 그때 그 선택자는 요소 또는 attribute의 네임스페이스 및 이름이 일치하는 경우에만 일치합니다.

[외부 요소](https://html.spec.whatwg.org/#foreign-elements)로 알려진 [HTML5](/ko/docs/Glossary/HTML5)에서는, 자동으로 네임스페이스가 할당됩니다. 이는 HTML 요소는 마치 XHTML 네임스페이스 (`http://www.w3.org/1999/xhtml`) 에 있는 것처럼 행동하고, 문서 어디에든 `xmlns` attribute가 없을지라도, [\<svg>](/ko/docs/Web/SVG/Element/svg) 및 [\<math>](/ko/docs/Web/MathML/Element/math) 요소는 그들의 적절한 네임스페이스 (`http://www.w3.org/2000/svg` 및 `http://www.w3.org/1998/Math/MathML`) 가 할당됨을 뜻합니다.

> **참고:** **주의:** XML에서, 접두어가 직접 attribute (가령, `xlink:href`)에 정의되지 않는 한, 그 attribute은 네임스페이스가 없습니다. 다시 말해서, attribute은 그들이 붙은 요소의 네임스페이스를 상속받지 않습니다. 이 행동을 일치시키기 위해, CSS에서 기본 네임스페이스는 attribute 선택자에 적용되지 않습니다.

## 구문

```css
/* 기본 네임스페이스 */
@namespace url(XML-namespace-URL);
@namespace "XML-namespace-URL";

/* 접두어 붙은 네임스페이스 */
@namespace prefix url(XML-namespace-URL);
@namespace prefix "XML-namespace-URL";
```

### 형식 구문

{{csssyntax}}

## 예제

```css
@namespace url(http://www.w3.org/1999/xhtml);
@namespace svg url(http://www.w3.org/2000/svg);

/* 이는 모든 XHTML <a> 요소와 일치합니다, XHTML이 접두어 붙지 않은 기본 네임스페이스이기에 */
a {
}

/* 이는 모든 SVG <a> 요소와 일치합니다 */
svg|a {
}

/* 이는 XHTML 및 SVG <a> 요소 둘 다와 일치합니다 */
*|a {
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
