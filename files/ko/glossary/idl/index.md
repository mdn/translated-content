---
title: 인터페이스 정의 언어 (IDL)
slug: Glossary/IDL
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**인터페이스 정의 언어(Interface Description Language, IDL)** 는 특정 프로그래밍 언어와 별도로 지정된 객체의 인터페이스에 사용되는 일반 언어입니다.

## 콘텐츠 속성 vs 인터페이스 정의 언어 속성

HTML에서, 대부분의 속성에는 **콘텐츠 속성** 및 **인터페이스 정의 언어 속성**이라는 두 가지 측면이 있습니다.

콘텐츠 속성은 콘텐츠(HTML 코드)에서 설정한 속성이며, {{domxref("element.setAttribute()")}} 또는 {{domxref("element.getAttribute()")}}를 통해 설정하거나 가져올 수 있습니다. 예상 값이 정수여야 하는 경우에도 콘텐츠 속성은 항상 문자열입니다. 예를 들어, 콘텐츠 속성을 사용하여 {{HTMLElement("input")}} 요소의 `maxlength`를 42로 설정하려면, 해당 요소에 대해 `setAttribute("maxlength", "42")`를 호출해야 합니다.

IDL 속성은 JavaScript 속성이라고도 합니다. IDL 속성은 `element.foo`와 같은 JavaScript 속성을 사용하여 읽거나 설정할 수 있는 속성입니다. IDL 속성은 항상 기본 콘텐츠 속성을 사용하여(그러나 변환될 수도 있음) 값을 얻을 때 값을 반환하고 이를 설정할 때 콘텐츠 속성에 무언가를 저장합니다. 즉, IDL 속성은 본질적으로 콘텐츠 속성을 반영합니다.

대부분의 경우, IDL 속성은 실제로 사용되는 값을 반환합니다. 예를 들어, {{HTMLElement("input")}} 요소의 기본 `type`은 'text'이므로, `input.type="foobar"`를 설정하면, `<input>` 요소는 'text' 타입(외관 및 동작하는 측면에서)이지만, 'type' 콘텐츠 속성의 값은 'foobar'입니다. 그러나, `type` IDL 속성은 문자열 'text'를 반환합니다.

IDL 속성이 항상 문자열은 아닙니다. 예를 들어, `input.maxlength`는 숫자(부호 있는 long)입니다. IDL 속성을 사용할 때, 원하는 타입의 값을 읽거나 설정하므로, `input.maxlength`는 항상 숫자를 반환하고 `input.maxlength`를 설정하면, IDL 속성은 숫자 타입이 오기를 바랍니다. 다른 타입을 전달하면, 타입 변환에 대한 표준 JavaScript 규칙에 지정된 대로 자동으로 숫자로 변환됩니다.

IDL 속성은 unsigned long, URL, 불리언 등과 같은 [다른 타입을 반영](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#reflecting-content-attributes-in-idl-attributes)할 수 있습니다. 불행하게도, 명확한 규칙이 없고 IDL 속성이 해당 콘텐츠 속성과 함께 작동하는 방식은 속성에 따라 다릅니다. 대부분의 경우 [명세서에 표현된 규칙](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#reflecting-content-attributes-in-idl-attributes)을 따르지만, 때로는 그렇지 않은 경우도 있습니다. HTML 명세서는 이를 가능한 개발자 친화적으로 만들려고 노력하지만, 다양한 이유(주로 역사적)로 일부 속성이 이상하게 동작(예, `select.size`)하므로, 해당 속성이 정확히 어떻게 작동하는지 이해하려면 명세서를 읽어야 합니다.

## 같이 보기

- 위키백과의 [IDL](https://en.wikipedia.org/wiki/Interface_description_language)
- [HTML 속성 참고서](/ko/docs/Web/HTML/Attributes)
- [인터페이스 정의 언어](https://people.eecs.berkeley.edu/~messer/netappc/Supplements/10-idl.pdf)
