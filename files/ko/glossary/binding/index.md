---
title: 바인딩 (Binding)
slug: Glossary/Binding
l10n:
  sourceCommit: 1c4869cdb1a9a9c3cafba87a2cd9469591f7aa47
---

{{GlossarySidebar}}

프로그래밍 관점에서, **바인딩(Binding)**은 값과 {{glossary("identifier", "식별자")}} 사이의 연관 관계를 의미합니다. 모든 바인딩이 {{glossary("variable", "변수")}}인 것은 아닙니다. 예를 들어, 함수 {{glossary("parameter", "매개변수")}} 및 {{jsxref("Statements/try...catch", "catch (e)")}} 코드 블록은 엄격하게 "변수"가 아닙니다. 또한, 일부 바인딩은 언어에 의해 암시적으로 생성됩니다. 예를 들어, JavaScript에서의 {{jsxref("Operators/this", "this")}}와 [`new.target`](/ko/docs/Web/JavaScript/Reference/Operators/new.target)를 들 수 있습니다.

바인딩은 재할당이 가능하면 {{glossary("mutable")}}이고, 그렇지 않으면 {{glossary("immutable")}}입니다. 이는 그것이 보유한 값이 불변이라는 것을 의미하지는 **않습니다.**

바인딩은 종종 {{glossary("scope", "스코프")}}와 연결됩니다. 일부 언어에서는 동일한 범위 내에서 바인딩 재생성(재선언이라고도 함)을 허용하지만, 다른 언어에서는 그렇지 않습니다. JavaScript에서 바인딩을 다시 선언할 수 있는지 여부는 바인딩을 만드는 데 사용된 구문에 따라 달라집니다.

## 같이 보기

- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/const", "const")}}
- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/class", "class")}}
