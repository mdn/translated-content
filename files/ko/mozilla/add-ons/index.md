---
title: 부가 기능들
slug: Mozilla/Add-ons
---

{{AddonSidebar}}

애드온들은 개발자들에게 Firefox의 기능을 변형하거나 확장하게 해 줍니다. 그것들은 표준 웹 기술인 JavaScript, HTML, CSS 또는 몇가지 전용 JavaScript API들을 사용하여 만들어집니다. 이러한 것들 사이에서, 애드온은 다음과 같은 일들을 할 수 있습니다 :

- 특정 웹사이트의 내용 또는 모양새를 바꿉니다.
- Firefox의 사용자 인터페이스를 변형합니다.
- Firefox에 새로운 기능을 추가합니다.

## 애드온 개발하기

Firefox 애드온을 개발하는데 있어서는 현재 몇가지 툴셋들이 있습니다, 그러나 [웹확장기능(WebExtensions)](/en-US/Add-ons/WebExtensions) 이 2017년 말에 표준으로 선정될 것입니다. 나머지 툴들은 같은기간안에 [지원이 중단(deprecated)](/en-US/Add-ons/Overlay_Extensions) 될 것으로 예상 됩니다.

이곳에서 당신은 애드온을 개발하는데 이용 가능한 옵션에 대한 정보를 찾을 수 있을 것입니다, 이로써 당신은 지금 당장과 미래에 무엇이 당신에게 가장 좋을지 결정 할 수 있을 것입니다.

### 새 애드온 만들기

만일 당신이 새로운 애드온을 설계한다면, 우리는 아래의 두가지 방법들 중 하나를 고를 것을 추천드립니다. 웹확장기능들의 번역이 완전해질 때까지 각각의 방법들에 대한 찬반 여론들이 있을 것입니다. 아래의 선택사항들을 읽고 당신에게 알맞는 도구를 결정하세요.

- [웹확장기능(WebExtensions)](/en-US/Add-ons/WebExtensions)
  - 웹확장기능(WebExtensions)은 Firefox 애드온의 미래 입니다. 이것은 크로스브라우져(cross-browser)간에 사용될 수 있도록 디자인 되었습니다.
    Firefox에서 이용할 수 있도록 만들어진 웹확장기능(WebExtensions)은 대부분 약간의 수정을 거치면 Chrome, Edge, 그리고 Opera에서 동작합니다. 이것은 또한 멀티프로세스 Firefox에서도 완전하게 작동합니다. [현재 API가 지원하는 Firefox 와 다른 브라우져를 확인하세요.](/en-US/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs) 우리는 개발자가 원하는 API들을 지속적으로 디자인하고 구현할 것입니다.대부분의 웹확장기능(WebExtensions) API는 안드로이드용 Firefox에서도 사용 가능합니다. [더알아보기](/en-US/Add-ons/WebExtensions)
- [애드온 SDK](/en-US/Add-ons/SDK)
  - 애드온 SDK는 Firefox 애드온 개발을 위한 API를 제공하며, 이것은 개발, 테스트, 패키징을 위한 도구입니다. 당신은 [안드로이드용 Firefox를 위한 애드온 SDK 확장기능](/en-US/Add-ons/SDK/Tutorials/Mobile_development)도 사용할 수 있습니다. 우리는 당신이 [high-level API](/en-US/Add-ons/SDK/High-Level_APIs)들만을 사용할 것을 권장합니다. 이것은 당신이 웹확장기능(WebExtensions)으로 마이그레이션 하는 여행 길을 더 쉽게 해 줄 것입니다. [더알아보기](/en-US/Add-ons/SDK)

### 기존 애드온(Add-on)을 이전하기

Firefox 내년에 몇가지 변화를 겪게 됩니다. 유저들에게는 높은 브라우징 신뢰성을, 개발자들에게는 편리한 애드온 개발경험을 제공합니다. 당신이 개발한 애드온은 호환성을 유지하기위해 몇 가지 수정이 필요할 수 있습니다. 하지만 수정이 끝난 이후에는 당신의 애드온이 좀 더 높은 호환성, 안전성을 가지게 될 것입니다.

우리는 당신이 애드온을 이전할 때 필요한 도움을 제공하기 위해서 [개발에 필요한 자료, 권고 사항, 운영 시간, 그리고 기타](https://wiki.mozilla.org/Add-ons/developer/communication) 등의 정보를 제공합니다.

애드온 이전을 시작하려면 [애드온 호환성 검사](https://compatibility-lookup.services.mozilla.com/)를 이용해서 어떤 문제가 있는지 알아보세요.

## 애드온 출시하기

[Addons.mozilla.org](https://addons.mozilla.org), 그러니까 일반적으로 "AMO"라 불리는 곳은, 개발자로 하여금 부가기능을 업로드하고, 사용자들이 이 부가기능을 찾아 설치할 수 있도록 만들어진 모질라재단의 공식 웹사이트입니다. AMO에 여러분이 제작한 부가기능을 업로드하여, 사용자와 제작자의 모임에 참가할 수 있게 되며, 여러분의 부가기능을 사용하는 사용자를 찾을 수 있습니다.

AMO에 여러분의 부가기능을 반드시 업로드해야 하는 것은 아니지만, Firefox 40 버전부터 여러분의 코드를 반드시 모질라 재단이나 사용자에 의해 인증받지 않으면 부가기능을 설치할 수 없게 됩니다.

여러분의 부가기능을 업로드하는 과정에 대해 자세히 알아보고 싶으시다면, [부가기능을 인증받고 배포하기](/en-US/Add-ons/Distribution) 문서를 참고하세요.

## 애드온의 다양한 형태

Generally, when people speak of add-ons they're referring to extensions, but there are a few other add-on types that allow users to customize Firefox. Those add-ons include:

- [Lightweight themes](/Add-ons/Themes/Background) are a simple way to provide limited customization for Firefox.
- [Mobile add-ons](/en-US/Add-ons/Firefox_for_Android) are add-ons for Firefox for Android. Note, though, that we intend to deprecate some of the technology underlying these APIs. In the future, WebExtensions will be fully supported on Firefox for Android.
- [Search engine plugins](/ko/docs/Creating_OpenSearch_plugins_for_Firefox) add new search engines to the browser's search bar.
- [User dictionaries](/ko/docs/Mozilla/Creating_a_spell_check_dictionary_add-on) are add-ons that let you spell-check in different languages.
- [Language packs](https://support.mozilla.org/kb/use-firefox-interface-other-languages-language-pack) are add-ons that let you have more languages available for the user interface of Firefox.

---

## 연락하세요!

아래에 소개된 링크를 통해서 자문을 구하거나, 피드백을 보내고, 애드온에 관련된 최신 소식을 접할 수 있습니다.

### Add-ons 포럼

Use the [Add-ons Discourse forum](https://discourse.mozilla-community.org/c/add-ons) to discuss all aspects of add-on development and to get help.

### 메일링 목록

Use the **dev-addons** list to discuss development of the add-ons ecosystem, including the development of the WebExtensions system and of AMO:

- [dev-addons list info](https://mail.mozilla.org/listinfo/dev-addons)
- [dev-addons archives](https://mail.mozilla.org/pipermail/dev-addons/)

### IRC

만약 당신이 IRC 애용자라면, 다음 방법들로 연락할 수도 있습니다.

- [#addons](irc://irc.mozilla.org/addons) (애드온 생태계에 대한 대화가 주를 이룸)
- [#extdev](irc://irc.mozilla.org/extdev) (애드온 개발에 대한 대화가 주를 이룸)
- [#webextensions](irc://irc.mozilla.org/webextensions) (웹 확장프로그램에 대한 대화가 주를 이룸)
