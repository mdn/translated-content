---
title: Ajax 시작하기
slug: conflicting/Web/Guide/AJAX_21419c7dfa67c94789f037a33c4e4e3e
---

> **경고:** **중요**: 해당 문서는 2018/07/31 (원문 : 2018/04/23) 에 마지막으로 번역되었습니다. 원문의 변경이 잦아 내용이 다를 수 있으니 참고하십시오.

본 문서는 AJAX의 기본을 익힐수 있도록 해주며, 두 가지 간단한 훈련용 예제를 제공합니다.

### AJAX란?

AJAX란 비동기 자바스크립트와 XML (**A**synchronous **J**avaScript **A**nd **X**ML)을 말합니다. 간단히 말하면, 서버와 통신하기 위해 [`XMLHttpRequest`](/ko/docs/XMLHttpRequest) 객체를 사용하는 것을 말합니다. JSON, XML, HTML 그리고 일반 텍스트 형식 등을 포함한 다양한 포맷을 주고 받을 수 있습니다. AJAX의 강력한 특징은 페이지 전체를 리프레쉬 하지 않고서도 수행 되는 "비동기성"입니다. 이러한 비동기성을 통해 사용자의 Event가 있으면 전체 페이지가 아닌 일부분만을 업데이트 할 수 있게 해줍니다.

AJAX의 주요 두가지 특징은 아래의 작업을 할 수 있게 해줍니다.

- 페이지 새로고침 없이 서버에 요청
- 서버로부터 데이터를 받고 작업을 수행

### 1단계 – HTTP request 만드는 방법

JavaScript를 이용하여 서버로 보내는 [HTTP](/ko/docs/Web/HTTP) request를 만들기 위해서는 그에 맞는 기능을 제공하는 Object의 인스턴스가 필요합니다. `XMLHttpRequest` 가 그러한 Object의 한 예입니다. 이러한 로직은 Internet Explorer의 `XMLHTTP` 라고 불리는 ActiveX 객체로 부터 시작되었습니다. 이후, Mozilla, Safari 등 기타 브라우저들이 Microsoft사의 ActiveX 객체의 매서드와 프로퍼티를 지원하는 `XMLHttpRequest` 객체를 적용합니다. 그러는 동안, Microsoft도 XMLHttpRequest를 적용합니다.

```js
// 구버전을 위한 호환성 코드입니다. 더 이상 이렇게 작성하지 않아도 됩니다.
var httpRequest;
if (window.XMLHttpRequest) { // 모질라, 사파리, IE7+ ...
    httpRequest = new XMLHttpRequest();
} else if (window.ActiveXObject) { // IE 6 이하
    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
}
```

> **참고:** 주의: 위의 코드는 XMLHttp 인스턴스를 만드는데 사용된 간단한 버전의 코드입니다. 좀 더 현실적인 사용 예를 보려면 이 글의 3단계를 보십시오.

서버에 요청(Request)을 하기에 앞서, 서버로 보낸 요청에 대한 응답을 받았을 때 어떤 동작을 할 것인지 정해야합니다. 위에서 생성한 httpRequest 의 `onreadystatechange` property에 특정 함수(`nameOfTheFunction`)를 할당하면 요청에 대한 상태가 변화할 때 특정 함수(`nameOfTheFunction`)가 불리게 됩니다.

```js
httpRequest.onreadystatechange = nameOfTheFunction;
```

주목할 사항으로는 위에서는 해당 함수를 수행하는 것이 아니라 단순하게 어떤 함수가 불릴 것인지만 지정한다는 점입니다. 단순하게 그 함수를 지정하는 것이므로 그 함수로 어떠한 변수도 전달하지 않습니다. 또한 단순하게 함수를 연결하면 되기 때문에 아래와 같이 JavaScript에서 사용되는 "임의 함수(anonymous functions)"방법으로 직접적인 함수 본체를 기입해도 됩니다.

```js
httpRequest.onreadystatechange = function(){
    // 서버의 응답에 따른 로직을 여기에 작성합니다.
};
```

위와 같이 서버로 부터 응답을 받은 후의 동작을 결정 한 뒤에, 요청을 합니다. 아래와 같이 HTTP request 객체의 `open()`과 `send()`를 사용하면 요청을 할 수 있습니다.

```js
httpRequest.open('GET', 'http://www.example.org/some.file', true);
httpRequest.send(null);
```

`open()` 메소드의 파라미터

- 첫번째 파라미터는 HTTP 요구 방식(request method) ─ GET, POST, HEAD 중의 하나이거나 당신의 서버에서 지원하는 다른 방식 ─ 입니다. 이 파라미터는 HTTP 표준에 따라 모두 대문자로 표기해야합니다. 그렇지 않으면 (파이어폭스와 같은) 특정 브라우저는 이 요구를 처리하지 않을 수도 있습니다. HTTP 요구 방식의 보다 자세한 정보는 [W3C 명세](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html)를 참고하기 바랍니다.
- 두번째 파라미터는 요구하고자하는 URL 입니다. 보안상의 이유로 서드 파티 도메인 상의 URL은 기본적으로 호출할 수 없습니다. 요구하는 모든 페이지에 정확한 도메인 네임을 사용하십시오. 그렇지 않으면 `open()` 메소드를 호출할 때 'permission denied' 에러가 발생할 수 있습니다. 일반적인 오류는 당신의 사이트에 `domain.tld` 와 같은 형태로 접근하는 것 입니다. 이러한 경우 `www.domain.tld` 와 같은 형태로 페이지를 요구하기 바랍니다. 만약 다른 도메인으로 요청을 보내고 싶다면 [HTTP 접근 제어 (CORS)](/ko/docs/Web/HTTP/Access_control_CORS) 를 참고하기 바랍니다.
- 세번째 파라미터(생략 가능)는 요구가 비동기식(Asynchronous)으로 수행될 지를 결정합니다. 만약 이 파라미터가 `true`(기본값) 으로 설정된 경우에는 자바스크립트 함수가 지속적으로 수행될 수 있어 서버로부터 응답을 받기 전에도 유저와 페이지의 상호작용이 계속 진행됩니다. 이것이 AJAX 의 첫번째 A (Asynchronous : 비동기성) 입니다.

  - `false`로 설정된 경우 동기적으로 작동합니다. (`send()` 함수에서 서버로부터 응답이 올 때까지 기다림)역자 덧붙임

`send()` 메소드의 파라미터는 POST 방식으로 요구한 경우 서버로 보내고 싶은 어떠한 데이터라도 가능합니다. 데이터는 서버에서 쉽게 parse할 수 있는 형식(format)이어야 합니다. 예를 들자면 아래와 같습니다.

```
"name=value&anothername="+encodeURIComponent(myVar)+"&so=on"
```

`multipart/form-data`, JSON, XML, SOAP 등과 같은 다른 형식(format)도 가능합니다.

만약 `POST` 형식으로 데이터를 보내려 한다면, 요청(request)에 MIME type을 먼저 설정 해야 합니다. 예를 들자면 `send()`를 호출 하기 전에 아래와 같은 형태로 send()로 보낼 쿼리를 이용해야 합니다.

```js
httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
```

### 2단계 – 서버 응답에 대한 처리

서버로 요청(request)을 보내기 전에, 위(1단계 - HTTP Request 만들기)에서는 서버의 응답을 처리하기 위한 자바스크립트 함수의 이름을 지정했었습니다.

```js
httpRequest.onreadystatechange = nameOfTheFunction;
```

이 함수는 무슨 일을 수행해야 할까요? 먼저, 해당 함수에서는 요구의 상태값을 검사할 필요가 있습니다. 만약 상태값이 `XMLHttpRequest.DONE` (상수 4로 정의되어 있습니다.) 라면, 서버로부터 모든 응답을 받았으며 이를 처리할 준비가 되었다는 것을 뜻합니다.

```js
if (httpRequest.readyState === XMLHttpRequest.DONE) {
    // 이상 없음, 응답 받았음
} else {
    // 아직 준비되지 않음
}
```

`readyState` 가 가질 수 있는 모든 값의 목록은 [XMLHTTPRequest.readyState](/ko/docs/Web/API/XMLHttpRequest/readyState)에 작성되어있으며 아래와 같습니다:

- 0 (uninitialized) - (**request가 초기화되지 않음**)
- 1 (loading) - (**서버와의 연결이 성사됨**)
- 2 (loaded) - (**서버가 request를 받음**)
- 3 (interactive) - (**request(요청)을 처리하는 중**)
- 4 (complete) - (**request에 대한 처리가 끝났으며 응답할 준비가 완료됨**)

([원문](/ko/docs/Web/Guide/AJAX/Getting_Started#Step_2_%E2%80%93_Handling_the_server_response) 참고)

그 다음에는 [HTTP 응답 상태 코드](/ko/docs/Web/HTTP/Status)를 검사해야 합니다. 가능한 모든 코드 값의 목록은 [W3C](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html) 에서 확인할 수 있습니다. 아래 예제에서는 AJAX 요청이 정상적으로 처리되었는지 아닌지만을 검사하기 위해 응답 코드가 [200 OK](/ko/docs/Web/HTTP/Status#%EC%84%B1%EA%B3%B5_%EC%9D%91%EB%8B%B5) 인지 검사하는 예제입니다.

```js
if (httpRequest.status === 200) {
    // 이상 없음!
} else {
    // 요구를 처리하는 과정에서 문제가 발생되었음
    // 예를 들어 응답 상태 코드는 404 (Not Found) 이거나
    // 혹은 500 (Internal Server Error) 이 될 수 있음
}
```

이제 요구와 그에 대한 응답에 대한 상태 코드를 검사했으므로, 서버에서 받은 데이터를 통해 원하는 작업을 수행할 수 있다. 그리고 응답 데이터에 접근하기 위한 옵션이 2가지 있습니다.

- `http_request.responseText` – 서버의 응답을 텍스트 문자열로 반환할 것이다.
- `http_request.responseXML` – 서버의 응답을 `XMLDocument` 객체로 반환하며 당신은 자바스크립트의 DOM 함수들을 통해 이 객체를 다룰 수 있을 것이다.

위의 단계는 비동기식 요구(asynchronous request)를 사용했을 경우에 대한 설명입니다(즉, `open()`의 세번째 변수가 생략되었거나 `true` 일 경우). 동기식(Synchronous) 방법을 사용한다면 함수(`nameOfTheFunction`)를 명시할 필요 없이 `send()` 호출에 의해 반환되는 data를 바로 사용 할 수 있습니다. 그러나 이는 스크립트가 `send()`를 호출할 때 멈춰지며 서버의 응답이 완료 될 때까지 기다리기 때문에 나쁜 UX를 제공하게 합니다.

### 3단계 – 간단한 예제

이제 이들을 한데 모아서 간단한 HTTP Request를 수행해보겠습니다. 우리가 작성할 자바스크립트는 "I'm a test." 라는 문장이 적힌 `test.html` 이라는 HTML 문서를 요청해서 문서의 내용을 파라미터로 `alert()` 함수를 호출할 것입니다. 이 예제는 vanilla Javascript(순수 자바스크립트 - jQuery도 포함되어 있지 않습니다.)로 작성되었습니다. 또한 HTML, XML, PHP 파일들은 같은 경로에 위치되어 있어야 합니다.

```html
<button id="ajaxButton" type="button">Make a request</button>

<script>
(function() {
  var httpRequest;
  document.getElementById("ajaxButton").addEventListener('click', makeRequest);

  function makeRequest() {
    httpRequest = new XMLHttpRequest();

    if(!httpRequest) {
      alert('XMLHTTP 인스턴스를 만들 수가 없어요 ㅠㅠ');
      return false;
    }
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET', 'test.html');
    httpRequest.send();
  }

  function alertContents() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        alert(httpRequest.responseText);
      } else {
        alert('request에 뭔가 문제가 있어요.');
      }
    }
  }
})();
</script>
```

이 예제에서:

- 사용자는 브라우저 상의 "Make a request" 라는 버튼을 클릭합니다;
- 버튼의 클릭 이벤트 핸들러는 `makeRequest()` 함수를 호출합니다;
- 브라우저는 서버로 요구를 보내고 `onreadystatechange` 에 설정된 `alertContents()` 함수가 수행됩니다;
- `alertContents()` 함수는 서버로부터 응답을 받았는지와 정상적으로 처리된 응답인지를 검사하여 정상적인 경우 `test.html` 파일의 내용을 파라미터로 `alert()` 함수를 호출합니다.

> **참고:** **주의**: Internet Explorer에서 정적 HTML 파일이 아닌 XML 파일을 받기 위한 request를 보내려면 응답 헤더를 반드시 설정해주어야 합니다. 헤더에 `Content-Type: application/xml`을 설정해주지 않으면 IE는 XML 요소에 접근하고자 할 때 "Object Expected" 예외에러를 발생시킵니다.

> **참고:** **주의 2**: 헤더에 `Cache-Control: no-cache` 를 설정 하지 않는다면, 브라우저는 응답을 캐싱하고 다시 요청하지 않을 수 있습니다. 이는 디버깅하기 매우 어려워 질 수 있음을 기억하십시오. 또는 GET 파라미터로 timestamp(시간정보)나 난수를 추가하면 캐싱을 방지할 수 있습니다. ([캐싱 우회](/ko/docs/XMLHttpRequest/Using_XMLHttpRequest#Bypassing_the_cache)를 참고하세요)

> **참고:** **주의 3**: 만약 `httpRequest` 변수가 전역적으로 사용되면, `makeRequest()` 함수를 호출하는 여러 함수들 사이에서 경쟁 상태(race condition)가 발생할 수 있으며, 이 경우 다른 데이터를 덮어쓰게 됩니다. `XMLHttpRequest` 인스턴스는 함수 내의 지역 변수로 선언하는 것을 권장합니다.

통신 에러 (서버가 다운되는 상황 등) 상황에서, status 필드를 접근하려 하면 `onreadystatechange` 메서드에서 예외에러를 발생 시킬 것입니다. 이러한 문제를 예방하기 위해서 `if...then` 구문을 `try…catch` 구문으로 감싸주세요.

```js
function alertContents() {
  try {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        alert(httpRequest.responseText);
      } else {
        alert('There was a problem with the request.');
      }
    }
  }
  catch( e ) {
    alert('Caught Exception: ' + e.description);
  }
}
```

### 4단계 – 추가 예제 1 (XML response)

앞의 예제에서 HTTP 요구(request)에 대한 응답을 받은후에 리퀘스트 오브젝트(request object) 중 `reponseText` 프로퍼티를 사용했고, `reponseText`는 `test.html`파일의 내용을 가지고 있었습니다. 이제 `responseXML`을 사용해 봅시다.

첫째로, 나중에 요구하게 될 XML 문서를 만들어 봅시다. 이 문서(`test.xml`)은 아래와 같은 내용을 담고 있습니다:

```xml
<?xml version="1.0" ?>
<root>
    I'm a test.
</root>
```

3단계 예제의 스크립트의 내용도 바꿔줍니다.

파일의 확장자를 `.html`에서 `.xml`로 변경합니다:

```html
...
onclick="makeRequest('test.xml')">
...
```

그 다음, `alertContents()`함수에서 `alert()`함수를 실행하는 라인 `alert(httpRequest.responseText);`을 아래와 같이 바꿉니다:

```js
var xmldoc = httpRequest.responseXML;
var root_node = xmldoc.getElementsByTagName('root').item(0);
alert(root_node.firstChild.data);
```

이 방법은 `responseXML`에 의한 `XMLDocument` 객체를 가져오고 XML 문서에 포함된 데이터를 가져오기 위해 DOM 메서드들을 사용했습니다. `test.xml`는 [여기](http://www.w3clubs.com/mozdev/test.xml)에서 볼 수 있으며 위와 같이 수정한 업데이트된 테스트용 스크립트는 [여기](http://www.w3clubs.com/mozdev/httprequest_test_xml.html)에서 볼 수 있습니다. (해당 테스트 문서는 구버전이기 때문에 button이 아닌 클릭가능한 밑줄 문장으로 구성되어 있습니다.역자 덧붙임)

### Step 5 – 추가 예제 2 (data)

마지막으로, 서버에 HttpRequest를 전송할 때 data를 포함해보고 응답을 받아봅시다. 이번에는 동적인 페이지를 요청(Request)할 것입니다. 서버의 `test.php` 코드는 전송받은 data를 이용하여 "계산된" 문자열인 "Hello, \[user data]!"를 반환해줄 것입니다. 그리고 `alert()` 으로 확인해봅시다.

먼저 유저가 편집할 수 있는 HTML 구성요소인 텍스트박스를 추가합니다:

```html
<label>당신의 이름을 입력해주세요 :
  <input type="text" id="ajaxTextbox" />
</label>
<span id="ajaxButton" style="cursor: pointer; text-decoration: underline">
  Make a request
</span>
```

텍스트박스에 입력된 유저의 데이터를 얻기 위해 클릭 이벤트 핸들러에도 몇 줄 추가해줍니다. 유저의 데이터와 서버 측에서 실행시킬 스크립트의 URL을 담아 `makeRequest()` 함수를 호출합니다.

```js
  document.getElementById("ajaxButton").onclick = function() {
      var userName = document.getElementById("ajaxTextbox").value;
      makeRequest('test.php',userName);
  };
```

유저 데이터를 받아 서버로 전송시키려면 makeRequest() 함수를 수정해야 합니다. HTTP 요구 방식을 `GET` 에서 `POST` 로 변경하고, 유저 데이터를 `httpRequest.send()` 의 인자로 넣어줍니다:

```js
  function makeRequest(url, userName) {

    ...

    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('POST', url);
    httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    httpRequest.send('userName=' + encodeURIComponent(userName));
  }
```

`alertContents()` 함수는 **3단계**와 같이 작성한다면 서버가 반환한 모든 값을 출력하므로 내버려두어도 상관없습니다. 그러나 만약 서버가 "계산된 문자열"과 "유저 데이터" 두 항목을 반환한다고 가정하면 서버의 응답 데이터는 다음과 같을 것입니다(유저가 "우희"라고 작성한다면):

`{"userData":"우희","computedString":"안녕, 우희!"}`

이 응답 데이터를 `alertContents()` 에서 사용하려면, `responseText` 프로퍼티의 값만을 사용한 출력물은 좋은 출력물이라고 할 수 없습니다. (위 문장이 그대로 alert 됩니다.)

우리는 `computedString`만을 출력시키기 위해 파싱(parsing : 구문 분석)을 해야만 합니다 (위와 같은 포맷을 JSON 포맷이라고 합니다. 아래의 코드에서는 JSON 내장 객체를 이용하여 파싱합니다.역자 덧붙임):

```js
function alertContents() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      var response = JSON.parse(httpRequest.responseText);
      alert(response.computedString);
    } else {
      alert('request에 뭔가 문제가 있어요.');
    }
  }
}
```

`test.php` 파일은 아래와 같아야 합니다:

```php
$name = (isset($_POST['userName'])) ? $_POST['userName'] : 'no name';
$computedString = "안녕, " . $name . "!";
$array = ['userName' => $name, 'computedString' => $computedString];
echo json_encode($array);
```

DOM methods에 대한 더 자세한 사항은 [Mozilla's DOM implementation](http://www.mozilla.org/docs/dom/) 문서를 확인하십시오.
