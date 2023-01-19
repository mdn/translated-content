---
title: jQuery
slug: orphaned/Glossary/jQuery
original_slug: Glossary/jQuery
---

**jQuery**는 {{Glossary("DOM")}}조작의 단순화, {{Glossary("AJAX")}}호출, {{Glossary("Event")}}핸들링에 초점을 맞춘 {{Glossary("JavaScript")}} {{Glossary("Library")}}다. 자바스크립트 개발자가 자주 사용한다.

jQuery는 element(s)에 이벤트를 할당하기 위해 `$(selector).action()` 포맷을 사용합니다. 더 자세히 설명하자면, `$(selector)`는 `selector` element(s)를 선택하기 위해서 jQuery를 호출하며, `.action()` 라 불리는 {{Glossary("API")}}이벤트에 할당합니다.

```js
$(document).ready(function(){
  alert("Hello World!");
  $("#blackBox").hide();
});
```

위의 코드는 아래의 코드와 같은 역할을 합니다:

```js
window.onload = function() {
  alert( "Hello World!" );
  document.getElementById("blackBox").style.display = "none";
};
```

## jQuery 사용하기.

| **npm**              | bower (solo file)                                           | Google CDN                                                         |
| -------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------ |
| `npm install jquery` | `bower install https://code.jquery.com/jquery-3.2.1.min.js` | `https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js` |

## 더보기

### General knowledge

- [jQuery](https://ko.wikipedia.org/wiki/JQuery) on Wikipedia
- [jQuery Official Website](https://jquery.com/)

### Technical information

- [API reference documentation](https://api.jquery.com/)[](https://api.jquery.com/)
