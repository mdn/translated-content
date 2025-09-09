---
title: URL API
slug: Web/API/URL_API
l10n:
  sourceCommit: f2ad7c5bfe075511f5a5c2a040e54889a2158d3b
---

{{DefaultAPISidebar("URL API")}}

URL API는 유효한 {{Glossary("URL", "Uniform Resource Locator")}}를 구성하는 요소와 URL에 접근하고 조작하는 API를 정의하는 URL 표준 구성 요소입니다. 또한 URL 표준은 도메인, 호스트, IP주소 등의 개념을 정의하고 웹 폼의 콘텐츠를 키/값 쌍의 집합으로 제출하는데 사용되는 `application/x-www-form-urlencoded` {{Glossary("MIME type")}} 을 표준 방식으로 설명하려 합니다.

{{AvailableInWorkers}}

## URL 개념 및 사용법

URL 표준의 대부분은 [URL의 정의](/ko/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)와 구조 및 구문 분석 방식입니다. 또한 네트워크상의 컴퓨터 주소 지정과 관련된 다양한 용어에 대한 정의와 IP 주소 및 DOM 주소 구문 분석 알고리즘이 명시되어 있습니다. 대부분의 개발자에게 더 흥미로운 것은 API 자체입니다.

### URL 요소 접근

지정된 {{domxref("URL")}}에 대한 URL 객체를 생성하면 URL을 구문 분석하고 해당 속성을 통해 구성 요소에 빠르게 접근할 수 있습니다.

```js
let addr = new URL("https://developer.mozilla.org/ko/docs/Web/API/URL_API");
let host = addr.host;
let path = addr.pathname;
```

위의 코드는 지금 읽고 있는 문서의 `URL`객체를 만든 다음 {{domxref("URL.host", "host")}} 및 {{domxref("URL.pathname", "pathname")}} 속성을 가져옵니다. 여기서 해당 문자열은 각각 `developer.mozilla.org`와 `/en-US/docs/Web/API/URL_API`입니다.

### URL 변경하기

`URL`의 대부분의 속성은 설정이 가능하므로 새 값을 작성하여 객체가 나타내는 URL을 변경할 수 있습니다. 다음과 같이 URL을 만들고 사용자 이름을 설정할 수 있습니다.

```js
let myUsername = "someguy";
let addr = new URL("https://example.com/login");
addr.username = myUsername;
```

{{domxref("URL.username", "username")}}값을 설정하면 해당 속성의 값만 설정되는 것이 아니라 전체 URL이 갱신 됩니다. 위의 코드를 실행한 후 {{domxref("URL.href", "addr.href")}}가 반환하는 값은 `https://someguy@example.com/login`입니다. 이것은 쓰기 가능한 모든 속성에 해당됩니다.

### 쿼리

`URL`의 {{domxref("URL.search", "search")}} 속성에서는 URL의 쿼리 문자열 부분이 포함됩니다. 예를 들어 URL이 `https://example.com/login?user=someguy&page=news`인 경우 `search` 속성의 값은 `?user=someguy&page=news`입니다. {{domxref("URLSearchParams")}} 객체의 {{domxref("URLSearchParams.get", "get()")}} 메서드를 사용하여 개별 매개변수의 값을 조회할 수도 있습니다.

```js
let addr = new URL("https://example.com/login?user=someguy&page=news");
try {
  loginUser(addr.searchParams.get("user"));
  gotoPage(addr.searchParams.get("page"));
} catch (err) {
  showErrorMessage(err);
}
```

예를 들어, 위의 코드에서는 쿼리에서 사용자 이름과 대상 페이지를 가져와 적절한 함수에 전달합니다. 이 함수는 사이트 코드에서 로그인 및 사이트 내 원하는 목적지로 사용자를 라우팅하는 데 사용되는 함수입니다.

`URLSearchParams`내의 다른 함수를 사용하면 키 값을 변경하고, 키와 해당 값을 추가 및 삭제하고, 매개변수 목록을 정렬할 수도 있습니다.

## URL API 인터페이스

URL API는 이름에 몇 가지 인터페이스만 있는 간단한 API입니다.

- [`URL`](/ko/docs/Web/API/URL)
- [`URLSearchParams`](/ko/docs/Web/API/URLSearchParams)

## 예제

URL에 포함된 매개변수를 처리하려면 수동으로 처리할 수도 있지만, `URL` 객체를 생성하여 처리하는 것이 훨씬 쉽습니다. 아래의 `fillTableWithParameters()` 함수는 {{HTMLElement("table")}}를 나타내는 {{domxref("HTMLTableElement")}}객체를 입력으로 받습니다. 매개변수에서 찾은 각 키에 대해 하나씩 테이블에 행이 추가되며, 첫 번째 열에는 키의 이름이, 두 번째 열에는 값이 포함됩니다.

표를 생성하기 전에 매개변수 목록을 정렬하기 위해 {{domxref("URLSearchParams.sort()")}}를 호출하는 것에 유의해야 합니다.

```js
function fillTableWithParameters(tbl) {
  const url = new URL(document.location.href);
  url.searchParams.sort();
  const keys = url.searchParams.keys();

  for (const key of keys) {
    const val = url.searchParams.get(key);
    const row = document.createElement("tr");
    const cell1 = document.createElement("td");
    cell1.innerText = key;
    row.appendChild(cell1);
    const cell2 = document.createElement("td");
    cell2.innerText = val;
    row.appendChild(cell2);
    tbl.appendChild(row);
  }
}
```

이 예제의 작동 버전은 [found on Glitch](https://url-api.glitch.me)에서 확인할 수 있습니다. 페이지를 로드할 때 URL에 매개변수를 추가하면 표에서 해당 매개변수를 확인할 수 있습니다. 예를 들어, [`https://url-api.glitch.me?from=mdn&excitement=high&likelihood=inconceivable`](https://url-api.glitch.me?from=mdn&excitement=high&likelihood=inconceivable)와 같이 작성하면 됩니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Fetch API](/ko/docs/Web/API/Fetch_API)
- CSS {{cssxref("&lt;url&gt;")}} type
- {{jsxref("encodeURI", "encodeURI()")}}
- {{jsxref("encodeURIComponent", "encodeURIComponent()")}}
