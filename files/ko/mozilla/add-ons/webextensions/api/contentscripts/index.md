---
title: contentScripts
slug: Mozilla/Add-ons/WebExtensions/API/contentScripts
---

{{AddonSidebar}}

이 API는 콘텐츠 스크립트를 등록한다. 등록된 콘텐츠 스크립트는 브라우저가 URL 패턴이 일치하는 페이지에 넣는다.

이 API는 [`"content_scripts"`](/ko/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) manifest.json 키와 아주 비슷하다. 단지, `"content_scripts"`로는 설치할 때 정해진 스크립트와 패턴을 바꿀 수 없지만, `contentScripts` API로는 스크립트의 등록이나 해제가 실행 중에도 가능하다.

등록할 스크립트, URL 패턴, 그리고 기타 옵션을 정의하는 객체를 인수로 {{WebExtAPIRef("contentScripts.register()")}}을 호출하면, 반환된 [`Promise`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise)는 {{WebExtAPIRef("contentScripts.RegisteredContentScript")}} 객체가 인수인 완료를 수행한다.

`RegisteredContentScript`는 `register()`를 호출해 등록할 스크립트를 담는 객체다. 해제는 객체에 정의된 `unregister()` 메소드로 할 수 있다. 또한, 스크립트를 등록한 페이지를 없애면 스크립트는 자동으로 해제된다. 예를 들어, background 페이지에서 등록했으면 그것들은 background 페이지가 파괴될 때 자동으로 해제된다. 마찬가지로 사이드바나 팝업에서 등록했으면, 사이드바나 팝업이 닫힐 때 자동으로 해제된다.

`contentScripts` API 자체는 권한 없이 사용할 수 있지만, `register()`에 전달할 패턴에 대해서는 [호스트 권한](/en-US/Add-ons/WebExtensions/manifest.json/permissions#Host_permissions)을 가져야 한다.

## 자료형

- {{WebExtAPIRef("contentScripts.RegisteredContentScript")}}
  - : {{WebExtAPIRef("contentScripts.register()")}} 함수가 반환하는 객체의 자료형으로 등록된 콘텐츠 스크립트를 표현한다. `unregister()` 메소드로 스스로를 해제할 수 있다.

## 함수

- {{WebExtAPIRef("contentScripts.register()")}}
  - : 주어진 콘텐츠 스크립트를 등록한다

## 브라우저 호환성

{{Compat}}

{{WebExtExamples("h2")}}
