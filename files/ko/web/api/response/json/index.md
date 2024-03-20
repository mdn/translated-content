---
title: "Response: json() 메서드"
short-title: json()
slug: Web/API/Response/json
l10n:
  sourceCommit: cbfc561e5e577975a51acceadbd7d2fec9b8e45e
---

{{APIRef("Fetch API")}}

{{DOMxRef("Response")}} 인터페이스의 **`json()`** 메서드는 {{DOMxRef("Response")}} 스트림을 받아 완료될 때까지 읽습니다. 본문 텍스트를 {{JSxRef("JSON")}}으로 파싱한 결과와 함께 이행하는 프로미스를 반환합니다.

메서드 이름은 `json()`임에도 불구하고, 결과는 JSON이 아니라 JSON을 입력으로 받아 파싱하여 JavaSript 객체를 생성한 결과라는 점에 유의해야 합니다.

## 구문

```js-nolint
json()
```

### 매개변수

없음.

### 반환 값

JavaScript 객체로 이행하는 {{jsxref("Promise")}}입니다. 이 객체는 객체, 배열, 문자열, 숫자 등 JSON으로 표현될 수 있는 모든 것이 될 수 있습니다.

## 예제

[fetch JSON 예제](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-json)([fetch JSON live](https://mdn.github.io/dom-examples/fetch/fetch-json/) 실행)에서 {{DOMxRef("Request.Request", "Request()")}} 생성자를 사용하여 새 요청을 생성한 다음 이를 사용하여 `.json` 파일을 가져옵니다. 가져오기에 성공하면, `json()`을 사용하여 데이터를 읽고 파싱한 다음 예상한 결과 객체의 값을 읽고 제품 데이터를 표시할 목록 항목에 삽입합니다.

```js
const myList = document.querySelector("ul");
const myRequest = new Request("products.json");

fetch(myRequest)
  .then((response) => response.json())
  .then((data) => {
    for (const product of data.products) {
      const listItem = document.createElement("li");
      listItem.appendChild(document.createElement("strong")).textContent =
        product.Name;
      listItem.append(` can be found in ${product.Location}. Cost: `);
      listItem.appendChild(document.createElement("strong")).textContent =
        `£${product.Price}`;
      myList.appendChild(listItem);
    }
  })
  .catch(console.error);
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Service Worker API](/ko/docs/Web/API/Service_Worker_API)
- [교차 출처 리소스 공유 (CORS)](/ko/docs/Web/HTTP/CORS)
- [HTTP](/ko/docs/Web/HTTP)
