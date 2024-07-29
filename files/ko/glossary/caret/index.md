---
title: 캐럿 (Caret)
slug: Glossary/Caret
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**캐럿(Caret)** (때때로 "텍스트 커서(text cursor)"라고도 함)은 텍스트 입력이 삽입될 위치를 나타내기 위해 화면에 표시되는 표시기입니다.

대부분의 사용자 인터페이스는 얇은 수직선이나 깜박이는 문자 크기의 상자를 사용하여 캐럿을 나타내지만 이는 다를 수 있습니다. 텍스트의 이 지점을 **삽입 지점**이라고 합니다. '캐럿'이라는 단어는 텍스트 삽입 지점과 마우스 커서를 구별합니다.

웹에서, 캐럿은 {{HTMLElement("input")}} 및 {{HTMLElement("textarea")}} 요소는 물론 [`contenteditable`](/ko/docs/Web/HTML/Global_attributes#contenteditable) 속성이 설정된 모든 요소의 삽입 지점을 나타내는 데 사용됩니다. 따라서 사용자가 요소의 내용을 편집할 수 있습니다.

## 같이 보기

- 위키백과의 [캐럿 네비게이션](https://en.wikipedia.org/wiki/Caret_navigation)

### 캐럿 관련 CSS

요소의 CSS {{cssxref("caret-color")}} 속성을 적절한 {{cssxref("&lt;color&gt;")}} 값으로 설정하여 특정 요소의 편집 가능한 콘텐츠에 대한 캐럿 색상을 설정할 수 있습니다.

### 캐럿을 표시할 수 있는 HTML 요소

이러한 요소는 텍스트 입력 필드 또는 상자를 제공하므로 캐럿을 사용합니다.

- [`<input type="text">`](/ko/docs/Web/HTML/Element/input/text)
- [`<input type="password">`](/ko/docs/Web/HTML/Element/input/password)
- [`<input type="search">`](/ko/docs/Web/HTML/Element/input/search)
- [`<input type="date">`](/ko/docs/Web/HTML/Element/input/date), [`<input type="time">`](/ko/docs/Web/HTML/Element/input/time), and [`<input type="datetime-local">`](/ko/docs/Web/HTML/Element/input/datetime-local)
- [`<input type="number">`](/ko/docs/Web/HTML/Element/input/number), [`<input type="range">`](/ko/docs/Web/HTML/Element/input/range)
- [`<input type="email">`](/ko/docs/Web/HTML/Element/input/email), [`<input type="tel">`](/ko/docs/Web/HTML/Element/input/tel) 및 [`<input type="url">`](/ko/docs/Web/HTML/Element/input/url)
- {{HTMLElement("textarea")}}
- [콘텐츠 편집이 가능한](/ko/docs/Web/HTML/Global_attributes#contenteditable) 속성이 설정된 모든 요소
