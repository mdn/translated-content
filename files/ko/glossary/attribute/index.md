---
title: 특성
slug: Glossary/Attribute
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**특성**(attribute)은 HTML이나 XML {{Glossary("element")}}를 확장해 동작 방식을 바꾸거나 메타데이터를 제공합니다.

특성은 항상 `name="value"`의 형태를 따릅니다. (특성 식별자 뒤에 특성 값)

등호 또는 값 없는 특성이 보일 때도 있습니다. {{glossary("HTML")}}에서는 빈 문자열을 제공하는 단축 표기법이고, {{glossary("XML")}}에서는 특성 이름을 제공하는 단축 표기법입니다.

```html
<input required />
<!-- 다음과 같음 -->
<input required="" />
<!-- 다음과 같음 -->
<input required="required" />
```

## 특성 반영

특성은 특정 인터페이스의 특정 속성에 "반영"될 수 있습니다. 특성에 접근하여 특성 값을 읽을 수 있음을 의미하며, 특성을 다른 값으로 설정함으로써 수정이 가능합니다.

예를 들어, 아래의 `placeholder`는 {{domxref("HTMLInputElement.placeholder")}}에 반영됩니다.

아래 HTML을 확인해봅시다.

```html
<input placeholder="Original placeholder" />
```

아래 코드를 이용해 {{domxref("HTMLInputElement.placeholder")}}와 특성 사이의 반영되는 점을 확인할 수 있습니다.

```js
const input = document.querySelector("input");
const attr = input.getAttributeNode("placeholder");
console.log(attr.value);
console.log(input.placeholder); // `attr.value`와 같은 값을 출력합니다.

// 자리 표시자(placeholder) 값을 변경하면 반영된 특성 값도 변경됩니다.
input.placeholder = "Modified placeholder";
console.log(attr.value); // `Modified placeholder`를 출력합니다.
```

## 같이 보기

- [HTML 특성 참고서](/ko/docs/Web/HTML/Attributes)
- HTML [전역 특성](/ko/docs/Web/HTML/Global_attributes)
