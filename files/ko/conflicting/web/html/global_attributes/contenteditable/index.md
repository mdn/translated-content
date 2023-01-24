---
title: Content Editable
slug: conflicting/Web/HTML/Global_attributes/contenteditable
original_slug: Web/Guide/HTML/Editable_content
---
HTML5 에서는 어떤 엘러먼트라도 수정이 가능하다. 약간의 JavaScript 이벤트 핸들러들을 사용하는 것만로 당신은 웹페이지를 완전하고 빠른 리치-텍스트 에디터로 변형할 수 있다. 이 문서는 이런 기능성에 대하여 대략의 정보를 제공 한다.

## 호환성

Content editable 은 현재 브라우저들과 완전히 호환된다.

- Firefox 3.5+
- Firefox for Android 19+
- Chrome 4.0+
- Internet Explorer 5.5+
- Safari 3.1+
- Opera 9+
- iOS Safari 5.0+
- Android Browser 3.0+
- Opera Mobile 12.1+
- Chrome for Android 25+

Opera Mini 는 아직 지원되지 않는다.

> **참고:** \*대부분의 html elements 를 지원 하지 않는다.

## 어떻게 작동 하는가?

{{DOMXRef("HTMLElement.contentEditable", "contentEditable")}} 속성을 HTML element 에서 `true` 로 설정하라. 이 속성은 대부분의 HTML elements 에 사용될 수 있다.

## 예제

간단한 예제:

```html
<!DOCTYPE html>
<html>
  <body>
    <div contentEditable="true">
      This text can be edited by the user.
    </div>
  </body>
</html>
```

LocalStorage 를 이용한 JavaScript 와 합쳐진 작동 예제를 [여기](http://html5demos.com/contenteditable)에서 볼 수 있다. 소스는 [이곳](http://html5demos.com/contenteditable#view-source)에 있다.

## 더 보기

```js
user_pref("capability.policy.policynames", "allowclipboard");
user_pref("capability.policy.allowclipboard.sites", "https://www.mozilla.org");
user_pref("capability.policy.allowclipboard.Clipboard.cutcopy", "allAccess");
user_pref("capability.policy.allowclipboard.Clipboard.paste", "allAccess");
```

[컨텐트와 상호 작용하는 방법](/en/Midas)(오래된 IE 스타일 API) 그리고 [이곳](/en/Rich-Text_Editing_in_Mozilla)
