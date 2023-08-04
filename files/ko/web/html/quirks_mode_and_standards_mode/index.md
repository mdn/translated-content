---
title: 호환 모드와 표준 모드
slug: Web/HTML/Quirks_Mode_and_Standards_Mode
---

과거 웹 페이지는 넷스케이프 내비게이터(Netscape Navigator)용과 마이크로소프트 인터넷 익스플로러(Microsoft Internet Explorer)용의 두 가지 버전으로 만들어졌다. W3C에서 웹 표준을 제정할 당시, 기존 브라우저들은 새롭게 만들어진 표준을 기반으로 대부분의 웹 사이트들을 제대로 표현할 수 없었다. 따라서, 브라우저들은 새로운 표준으로 제작된 사이트와 예전 방식으로 제작된 사이트를 렌더링하기 위한 두 가지 모드를 제공했다.

웹 브라우저의 레이아웃 엔진으로 호환 모드(quirks mode), 거의 표준 모드(almost standards mode), 표준 모드(standards mode)의 세 가지 방식이 존재한다. **호환 모드**(quirks mode)에서는 기존 방식으로 제작된 웹사이트들을 표현하기 위해 내비게이터 4(Navigator 4)와 인터넷 익스플로러 5의 비표준 동작들을 에뮬레이션한다. **완전 표준 모드**(full standards mode; 이하 표준 모드)에서는 (아마도) HTML과 CSS에 의해 웹 페이지가 표시된다. **거의 표준 모드**(almost standards mode)는 소수의 호환 모드 요소만 지원한다.

## 브라우저는 무엇을 보고 모드를 결정할까?

웹 브라우저는 [HTML](/ko/docs/HTML) 페이지를 호환 모드나 표준 모드 중 무엇으로 렌더링할지 결정할 때 문서의 첫 부분에 기술된 DOCTYPE을 참조한다. 웹 페이지를 표준 모드로 렌더링하려고 한다면 다음과 같이 페이지 첫 부분에 DOCTYPE을 기술해야 한다.

```html
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Hello World!</title>
  </head>
  <body></body>
</html>
```

예제에서 사용한 `<!DOCTYPE html>`은 HTML5에서 권장하는, 가장 간단한 방식이다. 이전 버전의 HTML 표준들은 다른 방식들을 권장하지만, 오늘날 현존하는 모든 브라우저들은(심지어 옛날 인터넷 익스플로러 6조차도) 이 DOCTYPE은 완전 표준 모드로 렌더링할 것이다. 더 복잡한 DOCTYPE을 굳이 사용할 이유는 없다. 만약 다른 DOCTYPE을 사용하게 된다면, 해당 페이지가 거의 표준 모드나 호환 모드로 렌더링될 수 있는 위험이 있다.

DOCTYPE은 반드시 HTML 문서 첫 부분에 기술하자. 인터넷 익스플로러 9 또는 그 이전 버전에서는 DOCTYPE 이전에 주석이나 XML 선언부 등 무엇이든 작성된 상태라면 해당 문서를 호환 모드로 렌더링하게 된다.

HTML5에서 DOCTYPE의 유일한 목적은 완전 표준 모드를 활성화하기 위함이다. 이전 버전의 HTML 표준에서는 DOCTYPE이 추가적인 의미를 갖지만, 실제로 이를 호환 모드와 표준 모드의 판단 이외의 목적으로 사용한 브라우저는 없다.

좀 더 자세한 내용은 "브라우저가 다양한 모드를 판단할 때"([when different browsers choose various modes](http://hsivonen.iki.fi/doctype/))를 참고하자.

### XHTML

여러분의 페이지가 `Content-Type` HTTP 헤더를 `application/xhtml+xml` MIME 타입으로 설정함으로써 [XHTML](/ko/docs/XHTML)로 제공된다면, 이런 페이지들은 항상 표준 모드로 렌더링되기 때문에 DOCTYPE을 기술할 필요가 없다. 다만 인터넷 익스플로러는 9부터 XHTML을 지원하기 때문에 인터넷 익스플로러 8의 경우 `application/xhtml+xml`로 기술된 페이지를 표시하지 않고 알 수 없는 형식으로 판단해 [다운로드 창을 표시한다](/ko/docs/XHTML#Support).

XHTML 같은(XHTML-like) 콘텐트를 `text/html` MIME 타입으로 제공한다면 웹 브라우저는 이를 HTML로 인식하므로, 표준 모드로 렌더링하려면 DOCTYPE을 기술해야 한다.

## 페이지에 사용된 모드 확인하기

파이어폭스(Firefox)에서는 우클릭을 하고 '페이지 등록 정보'에서 '렌더링 방식'을 확인한다.

인터넷 익스플로러에서는 F12 키를 누르고 문서 모드를 확인한다.

## 모드 간의 차이점

여러 렌더링 모드의 차이점을 비교하려면 [Mozilla Quirks Mode Behavior](/ko/docs/Mozilla_Quirks_Mode_Behavior)와 [Gecko's "Almost Standards" Mode](/ko/docs/Mozilla/Gecko_Almost_Standards_Mode)(영문) 문서를 참고하자.
