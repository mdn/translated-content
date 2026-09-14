---
title: 웹 페이지에 Javascript 추가하기
short-title: JavaScript 추가하기
slug: Web/HTML/How_to/Add_JavaScript_to_your_web_page
l10n:
  sourceCommit: cd701f10306c8b0b9690532ff808df826818a04f
---

{{HTMLSidebar}}

JavaScript를 적용하여 당신의 웹 페이지를 다음 단계로 업그레이드 할 수 있습니다. 이 글에서는 JavaScript를 어떻게 HTML 문서에 적용하는지 배우게 됩니다.

<table>
  <tbody>
    <tr>
      <th scope="row">필요한 사전 지식:</th>
      <td>
        어떻게
        <a href="/ko/docs/Learn_web_development/Getting_started/Your_first_website"
          >HTML 문서 작성</a
        > 을 하는지에 대해 친숙해야 할 필요가 있습니다.
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>
        어떻게 HTML 파일에 JavaScript를 적용하는지 배우게 됩니다. 그리고 JavaScript 접근성 유지를 위해 가장 중요한 방법들을 배웁니다.
      </td>
    </tr>
  </tbody>
</table>

## JavaScript에 대하여

{{Glossary("JavaScript")}}는 클라이언트 측에서 웹 페이지를 인터렉티브하게 만드는 가장 흔한 프로그래밍 언어입니다. JavaScript가 없어도 멋진 웹 페이지를 만들 수 있습니다. 하지만 JavaScript는 완전히 새로운 단계의 가능성을 열어줍니다.

> [!NOTE]
> 이 글에서는 JavaScript가 동작하는 HTML 코드에 대해 다룹니다. 만약 JavaScript 그 자체에 대해 배우기를 원한다면, [JavaScript 기본](/ko/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity) 글을 통해 시작할 수 있습니다. 만약 당신이 이미 JavaScript에 대해 알고있거나, 다른 프로그래밍 언어에 대한 기본지식이 있다면, 우리는 바로 [JavaScript 안내서](/ko/docs/Web/JavaScript/Guide) 를 통해 학습하시기를 권장 드립니다.

## HTML에 JavaScript를 적용하는 방법

브라우저에서, JavaScript 자체만으로는 아무것도 할 수 없습니다. 당신은 HTML 웹 페이지 내부에서 JavaScript를 동작시킬 수 있습니다. HTML 내부에서 JavaScript 코드를 호출하기 위해서는 {{HTMLElement("script")}} 요소가 필요합니다. `script` 를 사용하는 방법에는 두 가지가 있습니다. 외부의 script를 연결해서 사용하거나 웹 페이지에 직접 script를 적용하여 사용할 수 있습니다.

### 외부 script를 연결하는 방법

보통의 경우 .js 파일을 사용하여 스크립트 내용을 작성합니다. 만약 .js 파일을 웹 페이지에서 실행시키고 싶다면, {{HTMLElement("script")}} 를 `src` 속성과 함께 사용하고, script 파일의 위치를 [URL](/ko/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL) 을 통하여 가리켜 주면 됩니다.

```html
<script src="path/to/my/script.js"></script>
```

### HTML 내에서 JavaScript 작성하는 방법

또한 `src` 속성 사용을 대신하여 `<script>` 태그 사이에 JavaScript 코드를 추가할 수 있습니다.

```html
<script>
  window.addEventListener("load", () => {
    console.log("This function is executed once the page is fully loaded");
  });
</script>
```

이 방법은 작은 양의 JavaScript가 필요할 때 편리합니다. 하지만 만약 당신이 JavaScript 파일을 분리한다면 다음과 이점을 얻을 수 있습니다.

- 한가지 일에 집중할 수 있습니다.
- 외부 의존성이 없는 HTML을 작성할 수 있습니다.
- 구조화된 JavaScript 어플리케이션을 작성할 수 있습니다.

## 접근성 높은 스크립트의 사용

접근성은 모든 소프트웨어 개발에 중요한 이슈입니다. JavaScript를 현명하게 사용한다면 이것은 당신의 웹 사이트를 더 접근성 있게 만들어 줄 것입니다. 만약 script 사용에 주의를 기울이지 않는다면 이것은 재난으로 다가올 것입니다. JavaScript가 더 유리하게 사용되기 위해서는, JavaScript 추가를 위한 몇 가지 모범사례를 숙지하는 게 좋습니다:

- **모든 콘텐츠는 (구조화된) 텍스트로 이용할 수 있도록 만들어야 합니다.** 당신의 콘텐츠를 가능한 HTML에 의존하도록 하십시오. 예를 들어, 당신이 멋진 JavaScript 프로그레스바 를 구현했다면, HTML 내부에 해당 상태를 나타내는 백분율 텍스트 또한 함께 제공해야 합니다. 마찬가지로, 드롭다운 메뉴는 [링크 만들기](/ko/docs/Learn_web_development/Core/Structuring_content/Creating_links) 의 [불릿 리스트](/ko/docs/Learn_web_development/Core/Structuring_content/Lists#unordered_lists) 로 구조화 되어야 합니다.
- **모든 기능은 키보드로 사용할 수 있도록 만들어야 합니다.**
  - 사용자가 모든 동작을 (예, links와 form 입력) 작동 순서에 따라 Tab 할 수 있어야 합니다.
  - 만약 당신이 포인터 이벤트를 (예, 마우스 이벤트와 터치 이벤트) 사용한다면, 기능적으로 키보드 이벤트에서 사용할 수 있게 복제해야 합니다.
  - 당신의 사이트를 키보드만 사용하여 테스트해야 합니다.

- **시간제한을 설정하거나 추측하지 말아야 합니다.** 키보드로 이동하거나 콘텐츠를 읽어 들이는데 추가 시간이 소요됩니다. 사용자 혹은 브라우저가 프로세스 (특히 리소스들을 로딩하는 비동기 작업)을 완료하는데 얼마나 소요될지 예측하기는 어렵습니다.
- **깜빡임 없이 간결한 애니메이션을 지켜야 합니다.** 깜빡임은 성가시며 [cause seizures](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) 를 유발할 수 있습니다. 더하여, 애니메이션이 몇 초 이상 지속된다면, 사용자에게 애니메이션을 취소하는 방법을 제공해 주십시오.
- **사용자가 상호작용을 시작할 수 있도록 해야 합니다.** 다시 말해, 자동으로 콘텐츠를 업데이트하거나, 리디렉션하거나, 새로고침 하지 말아야 합니다. 경고 없이는 [캐로우셀](/ko/docs/Web/CSS/CSS_overflow/CSS_carousels) 이나 팝업을 사용하지 말아야 합니다.
- **JavaScript가 없는 사용자를 위한 계획 B를 준비해야 합니다.** 사람들은 속도를 향상하거나 보안을 위해 JavaScript를 끌 수 있습니다. 사람들은 종종 스크립트 로딩을 방해하는 네트워크 문제를 마주하기도 합니다. 더하여, 서드파티 스크립트 (광고, 추적 스크립트, 브라우저 익스텐션) 는 당신의 스크립트를 손상할 수 있습니다.
  - 최소한, {{HTMLElement("noscript")}} 와 같은 짧은 문자를 남겨 주십시오: `<noscript>To use this site, please enable JavaScript.</noscript>`
  - 이상적으로, 가능하다면 JavaScript의 기능을 HTML과 서버-사이드 스크립팅을 사용하여 복제해 주십시오.
  - 만약 당신이 간단한 시작적 효과만 찾는다면, CSS는 종종 더 직관적인 작업을 가능하게 해줍니다.
  - 대부분의 사람들이 JavaScript를 **사용**한다 해서, `<noscript>` 태그가 접근성 없는 스크립트의 사용을 정당화 해주지는 않습니다.

## 더 학습하기

- {{htmlelement("script")}}
- {{htmlelement("noscript")}}
- [접근성을 고려한 자바스크립트 작성법](https://www.sitepoint.com/writing-javascript-with-accessibility-in-mind/) by Manuel Matuzovic (2017)
- [W3C 접근성 가이드라인](https://www.w3.org/TR/WCAG20/)
