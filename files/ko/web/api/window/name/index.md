---
title: Window.name
slug: Web/API/Window/name
---

{{APIRef}}

## 요약

창의 이름을 얻거나/설정합니다.

## 문법

```js
string = window.name;
window.name = string;
```

## 예제

```js
window.name = "lab_view";
```

## 설명

창의 이름은 주로 하이퍼링크나 폼의 target으로 설정됩니다. 그외엔, 창은 이름을 가지는 것을 거의 필요로 하지 않습니다.

또한 몇몇 프레임워크에서 창의 이름은 cross-domain messaging을 제공하기 위해 사용됩니다. (예를 들면, [SessionVars](http://www.thomasfrank.se/sessionvars.html) 과 Dojo's [dojox.io.windowName](http://www.sitepen.com/blog/2008/07/22/windowname-transport/)) 좀더 보안을 생각한다면 JSONP로 대체 될 수 있습니다. 하지만 최근 의 웹어플리케이션이 호스팅하는 민감한 데이터들은 cross-domain messaging을 이용하기 위해서 `window.name`에 의존해서는 안되며, 대신 [postMessage API](/ko/docs/Web/API/Window/postMessage)를 이용하는 방법이 있습니다.

`window.name`은 `toString` 메소드를 이용해 모든 값을 문자열로 변환합니다.
