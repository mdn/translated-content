---
title: 서버에서 데이터 가져오기
slug: Learn_web_development/Core/Scripting/Network_requests
original_slug: Learn/JavaScript/Client-side_web_APIs/Fetching_data
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Manipulating_documents", "Learn/JavaScript/Client-side_web_APIs/Third_party_APIs", "Learn/JavaScript/Client-side_web_APIs")}}

현대의 웹사이트와 애플리케이션에서 매우 흔한 또 다른 작업은 새 페이지 전체를 불러올 필요 없이 웹페이지의 섹션을 갱신하기 위해 서버에서 개별 데이터 항목을 검색하는 것입니다. 이것은 사소해 보이지만 사이트의 성능과 동작에 큰 영향을 미쳤기 때문에 이 문서에서는 개념을 설명하고 이를 가능하게 하는 기술, 특히 [Fetch API](/ko/docs/Web/API/Fetch_API)를 살펴보도록 하겠습니다.

<table>
  <tbody>
    <tr>
      <th scope="row">필요한 사전 지식:</th>
      <td>
        JavaScript 기본 (<a href="/ko/docs/Learn/JavaScript/First_steps">first steps</a>,
        <a href="/ko/docs/Learn/JavaScript/Building_blocks"
          >building blocks</a
        >,
        <a href="/ko/docs/Learn/JavaScript/Objects">JavaScript objects</a>를 참고하세요.),
        <a href="/ko/docs/Learn/JavaScript/Client-side_web_APIs/Introduction"
          >Client-side APIs의 기본</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>
        서버에서 데이터를 가져오고 이를 사용하여 웹 페이지의 콘텐츠를 업데이트하는 방법을 배웁니다.
      </td>
    </tr>
  </tbody>
</table>

## 여기서 문제가 무엇입니까?

웹 페이지는 HTML 페이지와 스타일시트, 스크립트 및 이미지와 같은 다양한 다른 파일로 구성되어 있습니다. 웹 페이지 로드의 기본 모델은 브라우저가 페이지를 표시하는 데 필요한 파일에 대해 서버에서 하나 이상의 HTTP 요청을 하고 서버는 요청된 파일로 응답하는 것입니다. 다른 페이지를 방문하면 브라우저는 새 파일을 요청하고 서버는 파일을 응답합니다.

![전통적인 페이지 로딩](traditional-loading.svg)

이 모델은 많은 사이트에서 완벽하게 동작합니다. 하지만 매우 데이터 중심적인 웹 사이트를 생각해 보세요. 예를 들어, [벤쿠버 공공 도서관](https://www.vpl.ca/)같은 웹 사이트를 생각해 보세요. 무엇보다도 이와 같은 사이트를 데이터베이스에 대한 사용자 인터페이스로 생각할 수 있습니다. 특정 장르의 책을 검색하거나 이전에 빌린 책을 기반으로 마음에 드는 책에 대한 추천을 보여줄 수 있습니다. 이 작업을 수행할 때 표시할 새 도서 세트로 페이지를 업데이트해야 합니다. 하지만 페이지 헤더, 사이드바, 바닥글과 같은 항목을 포함한 대부분의 페이지 콘텐츠는 동일하게 유지됩니다.

이 전통적인 방식의 문제점은 페이지의 한 부분에 대한 업데이트에도 전체 페이지를 가져와 로드해야 한다는 것입니다. 이는 비효율적이고 사용자 경험이 좋지 않을 수 있습니다.

따라서 많은 웹사이트에서는 기존 모델 대신 JavaScript API를 사용하여 서버에 데이터를 요청하고 페이지 로드 없이 페이지 콘텐츠를 업데이트합니다. 따라서 사용자가 새 제품을 검색할 때 브라우저는 페이지를 업데이트하는 데 필요한 데이터(예: 표시할 새 책 세트)만 요청합니다.

![fetch를 사용하여 페이지 업데이트](fetch-update.svg)

여기서 주요 API는 [Fetch API](/ko/docs/Web/API/Fetch_API)입니다. 이를 통해 페이지에서 실행되는 JavaScript가 특정 리소스를 검색하기 위해 서버에 [HTTP](/ko/docs/Web/HTTP) 요청을 할 수 있습니다. 서버가 이를 제공하면 JavaScript는 일반적으로 [DOM 조작 API](/ko/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)를 사용하여 페이지를 업데이트하기 위한 데이터를 사용할 수 있습니다. 요청되는 데이터는 구조화된 데이터를 전송하는 데 적합한 형식인 [JSON](/ko/docs/Learn_web_development/Core/Scripting/JSON)인 경우가 많지만, HTML이거나 텍스트일 수도 있습니다.

이는 Amazon, YouTube, eBay 등과 같은 데이터 기반 사이트에서 흔히 볼 수 있는 패턴입니다.

- 페이지 업데이트 속도가 훨씬 빨라지고 페이지가 새로 고쳐질 때까지 기다릴 필요가 없어 사이트가 더 빠르고 반응이 좋습니다.
- 매 업데이트마다 더 적은 데이터가 다운로드되며, 이는 대역폭 낭비를 줄여줍니다. 이것은 광대역 연결의 데스크톱에서는 큰 문제가 아닐 수도 있지만, 모바일 장치와 유비쿼터스 빠른 인터넷 서비스가 없는 국가에서는 주요 문제입니다.

> [!NOTE]
> 초기에 이 일반적인 기법은 XML 데이터를 요청하는 경향이 있었기 때문에 [Asynchronous](/ko/docs/Glossary/Asynchronous) JavaScript와 XML([Ajax](/ko/docs/Glossary/AJAX))로 알려졌습니다. 요즘에는 보통 그렇지 않지만(JSON을 요청하는 경우가 더 많을 것입니다), 결과는 여전히 똑같으며, 여전히 "Ajax"라는 용어가 이 기법을 설명하는 데 자주 사용됩니다.

속도를 더 높이기 위해 일부 사이트는 사용자가 처음 요청할 때 에셋과 데이터를 사용자 컴퓨터에 저장하기도 하는데, 이는 페이지가 처음 로드될 때마다 새로운 복사본을 다운로드하는 대신 다음 방문 시 로컬 버전을 사용한다는 것을 의미합니다. 콘텐츠는 업데이트가 된 경우에만 서버에서 다시 로드됩니다.

## Fetch API

Fetch API 예시 몇 가지를 살펴봅시다.

### 텍스트 콘텐츠 가져오기

이 예에서는 몇 가지 다른 텍스트 파일 중에서 데이터를 요청하여 콘텐츠 영역을 채우는 데 사용합니다.

이 일련의 파일은 우리의 가짜 데이터베이스 역할을 할 것입니다. 실제 응용 프로그램에서는 PHP, Python, Node와 같은 서버 측 언어를 사용하여 데이터베이스에서 데이터를 요청할 가능성이 더 높습니다. 그러나 여기서는 이 문제를 단순하게 유지하고 클라이언트 측 부분에 집중하고자 합니다.

이 예제를 시작하려면, 새 컴퓨터의 새 디렉터리에 [fetch-start.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/fetch-start.html) 로컬 복사본과 4개의 텍스트 파일([verse1.txt](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/verse1.txt), [verse2.txt](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/verse2.txt), [verse3.txt](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/verse3.txt), [verse4.txt](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/verse4.txt))을 만듭니다. 이 예제에서는 드롭다운 메뉴에서 선택한 시의 다른 절을 가져옵니다.

{{htmlelement("script")}} 요소 바로 내부에 다음 코드를 추가합니다. 그러면 {{htmlelement("select")}} 및 {{htmlelement("pre")}} 요소에 대한 참조가 저장되고 리스너가 {{htmlelement("select")}} 요소에 추가되므로 사용자가 새 값을 선택하면 새 값이 매개 변수로 `updateDisplay()`라는 이름의 함수에 전달됩니다.

```js
const verseChoose = document.querySelector("select");
const poemDisplay = document.querySelector("pre");

verseChoose.addEventListener("change", () => {
  const verse = verseChoose.value;
  updateDisplay(verse);
});
```

`updateDisplay()` 함수를 정의해 보겠습니다. 우선 이전 코드 블록 아래에 다음을 놓으십시오. 이것은 함수의 빈 껍데기입니다.

```js-nolint
function updateDisplay(verse) {

}
```

나중에 필요하므로 로드할 텍스트 파일을 가리키는 상대적인 URL을 구성하는 것으로 시작합니다. {{htmlelement("select")}} 요소의 값은 선택한 {{htmlelement("option")}} 내부의 텍스트와 동일합니다(value 속성에 다른 값을 지정하지 않는 한). 예를 들어 "Verse 1"입니다. 해당 Verse 텍스트 파일은 "Verse 1.txt"이며 HTML 파일과 동일한 디렉터리에 있으므로 파일 이름만 있으면 됩니다.

그러나 웹 서버는 대소문자를 구분하는 경향이 있으며 파일 이름에 공백이 없습니다. "Verse 1"을 "verse1.txt"로 변환하려면 "V"를 소문자로 변환하고 공백을 제거한 다음 끝에 ".txt"를 추가해야 합니다. 이는 {{jsxref("String.replace", "replace()")}}, {{jsxref("String.toLowerCase", "toLowerCase()")}}, [template literal](/ko/docs/Web/JavaScript/Reference/Template_literals)로 수행할 수 있습니다. `updateDisplay()` 함수 내부에 다음 행을 추가합니다.

```js
verse = verse.replace(" ", "").toLowerCase();
const url = `${verse}.txt`;
```

마침내 Fetch API를 사용할 준비가 되었습니다.

```js
// `fetch()`, URL을 전달합니다.
fetch(url)
  // fetch()는 Promise를 반환합니다. 서버로부터 응답을 받았을 때,
  // 응답과 함께 Promise의 `then()` 핸들러가 불립니다.
  .then((response) => {
    // 요청에 성공하지 못했을 때 에러를 던집니다.
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    // 그렇지 않으면(응답이 성공한 경우), 핸들러가
    // response.text()를 호출하여 텍스트로 응답을 가져오고,
    // `response.text()`에 의해 Promise가 즉시 반환됩니다.
    return response.text();
  })
  // response.text()가 성공하면 `then()` 핸들러는
  // 텍스트와 함께 호출되고, 이를 `poemDisplay` 상자에 복사합니다.
  .then((text) => {
    poemDisplay.textContent = text;
  })
  // 발생할 수 있는 오류를 발견하고
  // `poemDisplay` 상자에 메시지를 표시합니다.
  .catch((error) => {
    poemDisplay.textContent = `Could not fetch verse: ${error}`;
  });
```

여기에 설명할 것이 꽤 많습니다.

먼저, Fetch API의 진입점은 {{domxref("Window", "fetch()")}}라는 글로벌 함수로, URL을 매개변수로 사용합니다(사용자 지정 설정에는 다른 선택적인 매개변수가 필요하지만 여기서는 사용하지 않습니다).

다음으로 `fetch()`는 {{jsxref("Promise")}}를 반환하는 비동기 API입니다. 그것이 무엇인지 모른다면 [비동기 JavaScript](/ko/docs/Learn_web_development/Extensions/Async_JS) 모듈을 읽으세요. 특히 [promises](/ko/docs/Learn_web_development/Extensions/Async_JS/Promises)에 대한 문서를 읽고 여기로 오세요. 그 문서는 `fetch()` API에 대해서도 이야기하고 있습니다!

그래서 `fetch()`는 promise를 반환하기 때문에 함수를 반환된 promise의 {{jsxref("Promise/then", "then()")}} 메서드에 전달합니다. 이 메서드는 HTTP 요청이 서버로부터 응답을 받았을 때 호출됩니다. 핸들러에서 요청이 성공했는지 확인하고 성공하지 않은 경우 오류를 던집니다. 그렇지 않으면 {{domxref("Response/text", "response.text()")}}를 호출하여 응답 본문을 텍스트로 가져옵니다.

`response.text()` _또한_ 비동기적입니다. 그래서 우리는 그것이 반환하는 promise를 반환하고, 이 새로운 promise의 `then()` 메서드에 전달합니다. 이 함수는 응답 텍스트가 준비되면 호출되고 그 안에서 텍스트로 `<pre>` 블록을 업데이트합니다.

마지막으로, 우리는 우리가 호출한 비동기 함수 또는 그들의 핸들러에서 발생하는 오류를 잡기 위해 마지막에 {{jsxref("Promise/catch", "catch()")}} 핸들러를 체인합니다.

예제의 한 가지 문제는 처음 로드할 때 시를 표시하지 않는다는 것입니다. 이 문제를 해결하려면 코드 맨 아래(닫히는 `</script>` 태그 바로 위)에 다음 두 줄을 추가하여 기본적으로 verse 1을 로드하고 {{htmlelement("select")}} 요소가 항상 올바른 값을 나타내는지 확인하세요.

```js
updateDisplay("Verse 1");
verseChoose.value = "Verse 1";
```

#### 서버에서 예제를 제공하기

최신 브라우저는 로컬 파일에서 예제를 실행하기만 하면 HTTP 요청을 실행하지 않습니다. 이는 보안 제한 때문입니다(보안에 대한 자세한 내용은 [웹 사이트 보안](/ko/docs/Learn/Server-side/First_steps/Website_security)을 참고하세요.).

이를 해결하려면 로컬 웹 서버를 통해 예제를 실행하여 테스트해야 합니다. 이 방법을 알아보려면 [로컬 검증 서버 설정 가이드](/ko/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server)를 참고하세요.

### The can store

이 예제에서는 통조림만 판매하는 가상의 슈퍼마켓인 캔 가게(The Can Store)라는 샘플 사이트를 만들었습니다. 이 예제는 [GitHub에서 라이브](https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/)로 볼 수 있으며 [소스 코드](https://github.com/mdn/learning-area/tree/main/javascript/apis/fetching-data/can-store)를 볼 수 있습니다.

![왼쪽 열에 검색 옵션을 표시하고 오른쪽 열에 제품 검색 결과를 표시하는 가짜 전자 상거래 사이트입니다.](can-store.png)

기본적으로 사이트에는 모든 제품이 표시되지만, 왼쪽 열에 있는 양식 컨트롤을 사용하여 범주, 검색어 또는 두 가지 모두로 제품을 필터링할 수 있습니다.

카테고리별, 검색어별 제품 필터링, 문자열 조작, UI에 데이터가 올바르게 표시되도록 처리하는 복잡한 코드가 상당히 많이 있습니다. 문서에서 다 다루지는 않겠지만, 코드에서 광범위한 주석을 찾을 수 있습니다([can-script.js](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/can-store/can-script.js)를 참고하세요.).

그러나 Fetch 코드에 대해 설명하겠습니다.

Fetch를 사용하는 첫 번째 블록은 JavaScript 시작 부분에서 찾을 수 있습니다.

```js
fetch("products.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((json) => initialize(json))
  .catch((err) => console.error(`Fetch problem: ${err.message}`));
```

`fetch()` 함수는 promise를 반환합니다. 이것이 성공적으로 완료되면 첫 번째 `.then()` 블록 내부의 함수에는 네트워크에서 반환된 `response`가 포함됩니다.

이 함수 내부는 다음과 같습니다.

- 서버가 오류(예: [404 Not Found](/ko/docs/Web/HTTP/Reference/Status/404))를 반환하지 않았는지 확인하십시오. 오류가 발생하면 예외를 발생시킵니다.
- 응답 시 {{domxref("Response.json","json()")}}를 호출합니다. 그러면 [JSON 객체](/ko/docs/Learn_web_development/Core/Scripting/JSON)로 데이터를 가져옵니다. 우리는 `response.json()`가 반환한 promise를 반환합니다.

다음으로 반환된 promise의 `then()` 메서드에 함수를 전달합니다. 이 함수는 응답 데이터를 JSON으로 포함하는 객체를 받고, 이를 `initialize()` 함수에 전달합니다. 사용자 인터페이스에 모든 제품을 표시하는 프로세스를 시작하는 함수입니다.

오류를 처리하기 위해 체인 끝에 `.catch()` 블록을 연결합니다. 어떤 이유로 인해 promise가 실패하면 실행됩니다. 그 안에는 `err` 객체를 매개변수를 받는 함수가 포함되어 있습니다. 이 `err` 객체는 발생한 오류의 성격을 보고하는 데 사용할 수 있으며, 이 경우 간단한 `console.error()`를 사용하여 수행합니다.

그러나 완전한 웹사이트는 사용자 화면에 메시지를 표시하고 상황을 해결할 수 있는 옵션을 제공함으로써, 이 오류를 보다 적절하게 처리할 수 있지만, 우리는 간단한 `console.error()` 외에는 아무것도 필요하지 않습니다.

실패 사례를 다음과 같이 테스트할 수 있습니다.

1. 예제 파일의 로컬 복사본을 만듭니다.
2. 웹 서버를 통해 코드를 실행합니다(위의 [서버에서 예제를 제공하기](#서버에서_예제를_제공하기)에 설명된 대로).
3. 가져오는 파일의 경로를 'produc.json'과 같이 수정합니다(철자가 틀린지 확인하세요).
4. 이제 브라우저에 인덱스 파일을 로드하고(`localhost:8000`을 통해) 브라우저 개발자 콘솔을 살펴보세요. "Fetch 문제: HTTP 오류: 404"와 유사한 메시지가 표시됩니다.

두 번째 Fetch 블록은 `fetchBlob()` 함수 내부에서 찾을 수 있습니다.

```js
fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.blob();
  })
  .then((blob) => showProduct(blob, product))
  .catch((err) => console.error(`Fetch problem: ${err.message}`));
```

이는 이전과 거의 동일하게 작동하지만, {{domxref("Response.json","json()")}}을(를) 사용하는 대신 {{domxref("Response.blob","blob()")}}을(를) 사용합니다. 이 경우 응답을 이미지 파일로 반환하고, 이에 사용하는 데이터 형식은 [Blob](/ko/docs/Web/API/Blob) ("Binary Large Object"의 약자이며, 기본적으로 이미지 또는 비디오 파일과 같은 큰 파일 같은 개체를 나타내는 데 사용할 수 있습니다).

Blob을 성공적으로 받으면 이 Blob을 표시하는 `showProduct()` 기능에 전달합니다.

## XMLHttpRequest API

때때로, 특히 옛날 코드에서는 HTTP 요청을 위해 사용되는 [`XMLHttpRequest`](/ko/docs/Web/API/XMLHttpRequest) (종종 "XHR"로 약칭됨)라는 또 다른 API를 볼 수 있습니다. 이는 Fetch 이전의 것으로, 실제로 AJAX를 구현하기 위해 널리 사용된 최초의 API였습니다. Fetch는 `XMLHttpRequest`보다 더 단순하고 많은 기능을 갖추고 있으므로, 사용할 수 있다면 사용하는 것이 좋습니다. `XMLHttpRequest`를 사용하는 예제를 거치지는 않겠지만, 첫 번째 캔스토어 요청의 `XMLHttpRequest` 버전은 어떤 모습일지 보여드리겠습니다.

```js
const request = new XMLHttpRequest();

try {
  request.open("GET", "products.json");

  request.responseType = "json";

  request.addEventListener("load", () => initialize(request.response));
  request.addEventListener("error", () => console.error("XHR error"));

  request.send();
} catch (error) {
  console.error(`XHR error ${request.status}`);
}
```

여기에는 5가지 단계가 있습니다.

1. `XMLHttpRequest` 객체를 생성합니다.
2. [`open()`](/ko/docs/Web/API/XMLHttpRequest/open) 메서드를 호출하여 초기화합니다.
3. 응답이 성공적으로 완료되면 실행되는 [`load`](/ko/docs/Web/API/XMLHttpRequest/load_event) 이벤트에 이벤트 리스너를 추가합니다. 리스너에서는 데이터와 함께 `initialize()`를 호출합니다.
4. 요청에 오류가 발생할 때 실행되는 [`error`](/ko/docs/Web/API/XMLHttpRequest/error_event) 이벤트에 이벤트 리스너를 추가합니다.
5. 요청을 보냅니다.

또한 `open()`, `send()`에 의해 발생한 오류를 처리하려면 모든 것을 [try...catch](/ko/docs/Web/JavaScript/Reference/Statements/try...catch) 블록에 래핑해야 합니다.

Fetch API가 이보다 더 개선된 것이라고 생각하기를 바랍니다. 특히, 우리가 다른 두 곳에서 어떻게 오류를 처리해야 하는지 보세요.

## 요약

이 문서에서는 Fetch를 사용하여 서버에서 데이터를 가져오는 방법을 보여줍니다.

## 같이 보기

이 문서에는 겉핥기식으로 많은 주제들이 논의되어 있습니다. 이 주제들에 대한 더 많은 세부 사항을 보려면 다음 문서를 시도하세요.

- [Fetch 사용하기](/ko/docs/Web/API/Fetch_API/Using_Fetch)
- [Promises](/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [JSON data 사용하기](/ko/docs/Learn_web_development/Core/Scripting/JSON)
- [HTTP 개요](/ko/docs/Web/HTTP/Guides/Overview)
- [Server-side 웹 사이트 프로그래밍](/ko/docs/Learn_web_development/Extensions/Server-side)

{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Manipulating_documents", "Learn/JavaScript/Client-side_web_APIs/Third_party_APIs", "Learn/JavaScript/Client-side_web_APIs")}}
