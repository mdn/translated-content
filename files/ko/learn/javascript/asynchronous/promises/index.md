---
title: How to use promises
slug: Learn/JavaScript/Asynchronous/Promises
translation_of: Learn/JavaScript/Asynchronous/Promises
tags:
  - JavaScript
  - Learn
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Introducing", "Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API", "Learn/JavaScript/Asynchronous")}}

**Promises**는 현대 JavaScript에서 비동기 프로그래밍의 기초입니다. 프로미스는 비동기 함수에 의해 반환되는 개체로, 작업의 현재 상태를 나타냅니다. 프로미스가 호출자에게 반환될 때 작업이 완료되지 않는 경우가 많지만 약속 개체는 작업의 최종 성공 또는 실패를 처리할 수 있는 방법을 제공합니다.

<table>
  <tbody>
    <tr>
      <th scope="row">필요한 사전 지식</th>
      <td>
        기본적인 컴퓨터 사용능력, 함수와 이벤트 처리기를 포함한 JavaScript 기초에 대한 이해
      </td>
    </tr>
    <tr>
      <th scope="row">목적</th>
      <td>
        JavaScript에서 프로미스를 사용하는 방법을 이해하기 위함
      </td>
    </tr>
  </tbody>
</table>

이전 문서에서는 비동기 함수를 구현하기 위한 콜백 사용에 관해 설명했습니다. 이 설계에서는 콜백 함수를 전달하여 비동기 함수를 호출합니다. 이 함수는 작업이 완료되면 즉시 반환되고 콜백을 호출합니다.

프로미스 기반 API를 사용하면 비동기 함수가 작업을 시작하고 {{jsxref("Promise")}} 객체를 반환합니다. 그런 다음 처리기를 이 프로미스 객체에 연결할 수 있으며, 작업이 성공하거나 실패할 때 이 처리기가 실행됩니다.

## fetch() API 사용하기

> **참고:** 이 문서에서는 페이지의 샘플 코드를 브라우저의 JavaScript 콘솔로 복사하여 프로미스를 탐구해보겠습니다. 이를 위해 설정하려면 다음을 수행합니다.
>
> 1. 브라우저 탭을 하나 열고 <https://example.org>에 접속합니다.
> 2. 이 탭에서 [브라우저 개발자 도구](/ko/docs/Learn/Common_questions/What_are_browser_developer_tools)의 JavaScript 콘솔을 엽니다.
> 3. 이제 예제가 나오면 코드를 콜솔에 복사합니다. 이때 여러분은 새 예제를 입력할 때마다 페이지를 새로 고쳐야 합니다. 그렇지 않으면 콘솔에서 `fetchPromise`를 다시 선언한다고 불평할 것입니다.

이 예제에서 우리는 <https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json>에서 JSON 파일을 다운로드 할것이고, 이에 대한 일부 정보를 로그에 기록합니다. 

이를 수행하기 위해 서버에 **HTTP 요청**을 작성할 것입니다. HTTP 요청에서 요청 메시지를 원격 서버로 보내면 서버에서는 응답을 반환합니다. 이번에는 서버에서 JSON 파일을 가져오라는 요청을 보냅니다. 이전 글에서 {{domxref("XMLHttpRequest")}}  API를 사용하여 HTTP 요청을 보낸 것을 기억하시나요? 이 글에서는 `XMLHtpRequest`를 대체하는 최신 프로미스 기반 API인 {{domxref("fetch", "fetch()")}} API를 사용할 것입니다.

아래 코드를 JavaScript 콜솔에 복사해보세요.

```js
const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

console.log(fetchPromise);

fetchPromise.then( response => {
  console.log(`Received response: ${response.status}`);
});

console.log("Started request...");
```

우리가 작성한 코드입니다.

1. `fetch()` API를 호출하고 반환 값을 `fetchPromise` 변수에 할당합니다.
2. 그 후, `fetchPromise` 변수를 로그에 기록합니다. 기록 형태는 다음과 같을것입니다. `Promise { <state>: "pending" }`. 이는 우리에게 `Promise` 객체가 있고 값이 `"pending"` 인 `state`가 있음을 알려줍니다. `"pending"`은 가져오기 작업이 계속 진행 중임을 의미합니다.
3. 처리기를 프로미스의 **`then()`** 메서드에 전달합니다. 가져오기 작업이 성공하면 프로미스는 처리기를 호출하여 서버의 응답을 포함하는 {{domxref("Response")}} 개체를 전달합니다.
4. 요청을 시작했음을 알리는 메시지를 로그에 기록합니다.

전체 출력은 다음과 같습니다.

```
Promise { <state>: "pending" }
Started request...
Received response: 200
```

`Started request...`는 응답을 받기 전에 로그됩니다. 동기식 함수와 달리 `fetch()`는 요청이 진행되는 동안 반환되므로 프로그램이 응답할 수 있습니다. 응답에는 요청이 성공했음을 의미하는 `200` (OK) [상태 코드](/ko/docs/Web/HTTP/Status)가 표시됩니다.

이는 {{domxref("XMLHttpRequest")}} 객체에 이벤트 처리기를 추가한 마지막 글의 예와 매우 유사합니다. 대신, 반환된 프로미스의 `then()` 메서드에 처리기를 전달합니다.

## 프로미스 체이닝

`fetch()` API로 `Response` 객체를 가져오려면 다른 함수를 호출하여 응답 데이터를 가져와야 합니다. 이 경우 응답 데이터를 JSON으로 가져올 것이므로 `Response` 객체의 {{domxref("Response/json", "json()")}} 메서드를 호출합니다. 이 `json()`도 비동기입니다. 따라서 두 개의 연속된 비동기 함수를 호출해야 하는 경우입니다.

아래 코드를 실행해 보세요.

```js
const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise.then( response => {
  const jsonPromise = response.json();
  jsonPromise.then( data => {
    console.log(data[0].name);
  });
});
```

이 예제에서는 이전과 마찬가지로 `fetch()`에 의해 반환된 프로미스에 `then()` 핸들러를 추가합니다. 그러나 이번에는 처리기가 `response.json()`을 호출한 다음 `response.json()`이 반환한 프로미스에 새로운 `then()` 처리기를 전달합니다.

"baked beans"(products.json에 포함된 첫 번째 제품의 이름)이 기록됩니다.

잠깐만요! 지난 글에서 콜백 안에서 콜백을 호출 하는것이 더 중첩되는 코드를 잇따라 만든것을 기억하시나요? 그리고 우리는 이 "콜백 지옥"이 우리의 코드를 이해하기 어렵게 만들었다고 말했었죠? 그냥 `then()`을 호출 해도 똑같지 않을까요?

물론 그렇습니다. 그러나 프로미스는 *`then()` 자체는 프로미스를 반환하고 이 프로미스는 전달된 함수의 결과로 완성된다*는 아름다운 특징을 가지고 있습니다. 이는 위의 코드를 다음과 같이 다시 작성할 수 있음을 의미합니다.

```js
const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise
  .then( response => {
    return response.json();
  })
  .then( data => {
    console.log(data[0].name);
  });
```

첫 번째 `then()`에 대해 핸들러 내에서 두 번째 `then()`을 호출하는 대신 `json()`에 의해 반환된 프로미스를 *반환*하고 해당 반환 값에 대해 두 번째 `then()`을 호출할 수 있습니다. 이를 **프로미스 체이닝**이라고 하며 연속 비동기 함수 호출을 해야 할 때 계속 증가하는 들여쓰기 수준을 피할 수 있습니다.

다음 단계로 넘어가기 전에 한 가지 더 추가할 사항이 있습니다. 우리는 서버가 요청을 수락했고 처리할 수 있었는지 확인해야 합니다. 응답의 상태 코드를 확인하고 "OK"가 아니면 오류를 표시하여 이 작업을 수행해보겠습니다.

```js
const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise
  .then( response => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then( data => {
    console.log(data[0].name);
  });
```

## 오류 잡기

이제 마지막 이야기로 넘어가겠습니다. 오류는 어떻게 처리할까요? `fetch()` API는 여러 가지 이유(예를 들어 네트워크 연결이 없거나 URL 형식이 잘못됐을 때)로 인해 오류를 발생시킬 수 있으며 서버에서 오류를 반환하였을 때 우리가 직접 오류를 발생시킬 것입니다.

이전 글에서 우리는 모든 중첩된 콜백에서 오류를 처리해야 하는 어려움을 보았습니다.

오류 처리를 지원하기 위해 `Promise` 개체는 {{jsxref("Promise/catch", "catch()")}} 메서드를 제공합니다. 이는 `then()`과 매우 비슷하게 호출하고 처리기를 전달 할 수 있습니다. 그러나 `then()`으로 전달된 처리기는 비동기 작업이 *성공*일 때 호출되지만, `catch()`로 전달된 처리기는 비동기 작업이 *실패*일 때 호출됩니다.

프로미스 체인의 끝에 `catch()`를 추가하면 비동기 함수 호출이 실패할 때 `catch()`가 호출됩니다. 따라서 작업을 여러 개의 연속된 비동기 함수 호출로 구현할 수 있으며 모든 오류를 하나의 위치에서 처리할 수 있습니다.

아래 `fetch()` 코드를 실행해 보세요. `catch()`를 사용하여 오류 처리기를 추가했고 URL을 수정하여 요청이 실패하도록 만들었습니다.

```js
const fetchPromise = fetch('bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise
  .then( response => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then( data => {
    console.log(data[0].name);
  })
  .catch( error => {
    console.error(`Could not get products: ${error}`);
  });
```

실행하면 `catch()` 처리기가 오류를 남기는 것을 볼 수 있을 겁니다.

## 프로미스 용어

프로미스는 명확하게 알고 있어야 할 특유의 용어를 가지고 있습니다.

먼저 프로미스는 아래 세 상태 중 하나를 취할 수 있습니다.

- **pending**: 프로미스가 생성되었으며, 프로미스와 연결된 비동기 함수가 아직 성공하거나 실패하지 않았습니다. 이 상태는 약속이 `fetch()`로 호출에서 반환되고 요청이 계속 수행 중일 때의 상태입니다.
- **fulfilled**: 비동기 함수가 성공했습니다. 프로미스가 이행되면 `then()` 처리기가 호출됩니다.
- **rejected**: 비동기 함수가 실패했습니다. 프로미스가 거부되면 `catch()` 처리기가 호출됩니다.

여기서 "성공"과 "실패"의 의미는 사용하는 API에 달려있습니다. 예를 들어 `fetch()`는 서버가 [404 Not Found](/ko/docs/Web/HTTP/Status/404)와 같은 오류를 반환하면 성공한 것으로 간주하지만 네트워크 오류로 요청이 전송되지 않은 경우는 그렇지 않습니다.

가끔 **fulfilled**와 **rejected**를 모두 다룰 때 **settled**라는 용어를 사용하기도 합니다.

프로미스가 해결되면 **resolved**가 되거나 다른 프로미스의 상태를 따르기 위해 "잠긴"상태가 됩니다.

[Let's talk about how to talk about promises](https://thenewtoys.dev/blog/2021/02/08/lets-talk-about-how-to-talk-about-promises/)에서 용어에대한 구체적인 설명을 얻을 수 있습니다.

## 여러 프로미스 합치기

프로미스 체인은 작업이 여러 비동기 기능으로 구성되어 있고 다음 기능을 시작하기 전에 각 기능을 완료해야 할 때에 필요합니다. 그러나 비동기 함수 호출을 결합해야 하는 다른 방법이 필요할 수 있으며, `Promise` API는 이를 위한 몇 가지 헬퍼를 제공합니다.

때로는 프로미스들이 서로를 의존하진 않지만, 모두 이행되어야 하는 경우가 있습니다. 이 경우에는 모든 프로미스를 함께 시작한 다음 완료됐을 때 알림을 받는 것이 훨씬 효율적입니다. {{jsxref("Promise/all", "Promise.all()")}} 메서드가 우리가 필요한 것입니다. 이것은 일련의 프로미스를 배열로 받고, 하나의 프로미스를 반환합니다.

`Promise.all()`로 반환되는 프로미스는 다음과 같습니다.

- 백열 안 프로미스가 *모두* 이행될 이행됩니다. 이 경우 `all()`로 전달된 프로미스의 순서와 같은 순서로 프로미스의 응답을 배열에 담아 `then()` 처리기를 호출합니다.
- 배열에 있는 *어느* 프로미스든 거절되면 거절됩니다. 이 경우 `catch()` 처리기는 거절된 프로미스가 발생시킨 오류와 함께 호출됩니다.

예시:

```js
const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
  .then( responses => {
    for (const response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
  })
  .catch( error => {
    console.error(`Failed to fetch: ${error}`)
  });
```

여기서는 세 개의 다른 URL에 세 개의 `fetch()` 요청하고 있습니다. 만약 모두 성공하면 각 사용자의 응답 상태를 기록합니다. 만약 어느 하나라도 실패하게 된다면 오류를 기록할 것입니다.

우리가 제공한 URL을 사용하면 모든 요청이 충족되어야 하지만, 두 번째 URL의 경우 요청한 파일이 존재하지 않기 때문에 서버가 `200`(OK) 대신 `404`(Not Found)를 반환합니다. 따라서 출력은 다음과 같아야 합니다.

```
https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json: 200
https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found: 404
https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json: 200
```

URL 형식이 잘못된 동일한 코드를 시도하면 다음과 같습니다.

```js
const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
const fetchPromise3 = fetch('bad-scheme://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
  .then( responses => {
    for (const response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
  })
  .catch( error => {
    console.error(`Failed to fetch: ${error}`)
  });
```

`catch()` 처리기가 실행될것으로 예상할 수 있습니다. 그리고 다음과 같은 내용이 표시됩니다.

```
Failed to fetch: TypeError: Failed to fetch
```

때때로 어떤 프로미스든 상관없이 이행되어야 할 필요가 있을 수 있습니다. 이 경우 {{jsxref("Promise/any", "Promise.any()")}}가 필요할 것입니다. 이는 프로미스 배열이 하나라도 충족되는 즉시 이행되거나, 모두 거부되는 경우 거부된다는 점을 제외하면 `Promise.all()`과 같습니다.

```js
const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

Promise.any([fetchPromise1, fetchPromise2, fetchPromise3])
  .then( response => {
    console.log(`${response.url}: ${response.status}`);
  })
  .catch( error => {
    console.error(`Failed to fetch: ${error}`)
  });
```

이 경우 어떤 fetch 요청이 먼저 완료될지 예측할 수 없습니다.

지금 까지 살펴본 메서드는 여러 개의 프로미스를 결합하는 프로미스의 메서드 중 두 가지에 불과합니다. 나머지는 {{jsxref("Promise")}} 참조 문서를 참조하시기 바랍니다.

# async와 await

{{jsxref("Statements/async_function", "async")}} 키워드를 사용하면 비동기 프로미스 기반 코드를 보다 쉽게 사용할 수 있습니다. 함수의 시작 부분에 `async`를 추가하면 비동기 함수가 됩니다.

```js
async function myFunction() {
  // This is an async function
}
```

async 함수 내에서 프로미스를 반환하는 함수에 호출하기 전에 `await` 키워드를 사용할 수 있습니다. 이렇게 하면 프로미스의 이행된 값이 반환 값으로 처리되거나 거부된 값이 발생할 때까지 코드가 해당 지점에서 대기합니다.

이렇게 하면 비동기 함수를 사용하지만 동기 코드처럼 보이는 코드를 쓸 수 있습니다. 예를 들어 fetch 예시를 아래와 같이 다시 작성할 수 있습니다.

```js
async function fetchProducts() {
  try {
    // after this line, our function will wait for the `fetch()` call to be settled
    // the `fetch()` call will either return a Response or throw an error
    const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    // after this line, our function will wait for the `response.json()` call to be settled
    // the `response.json()` call will either return the parsed JSON object or throw an error
    const data = await response.json();
    console.log(data[0].name);
  }
  catch(error) {
    console.error(`Could not get products: ${error}`);
  }
}

fetchProducts();
```

여기서 우리는 `Promise`를 받는 대신 `await fetch()`를 호출하고 `fetch()`는 동기 함수처럼 완전한 `Response` 개체를 반환합니다.

동기 코드 처럼 오류 처리에 `try...catch` 블록을 사용할 수도 있습니다.

비동기 함수는 항상 프로미스를 반환하므로 다음과 같은 작업을 수행할 수 없다는것을 기억하세요.

```js example-bad
async function fetchProducts() {
  try {
    const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  }
  catch(error) {
    console.error(`Could not get products: ${error}`);
  }
}

const promise = fetchProducts();
console.log(promise[0].name);   // "promise" is a Promise object, so this will not work
```

대신, 이렇게 할 수 있습니다.

```js
async function fetchProducts() {
  try {
    const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  }
  catch(error) {
    console.error(`Could not get products: ${error}`);
  }
}

const promise = fetchProducts();
promise.then(data => console.log(data[0].name));
```

또한 코드가 [JavaScript 모듈](/ko/docs/Web/JavaScript/Guide/Modules)에 없는 한 `async` 함수 내에서만 `await`을 사용할 수 있다는것도 기억하시기 바랍니다. 즉, 일반 스크립트에서는 이 작업을 수행할 수 없습니다.

```js
try {
  // using await outside an async function is only allowed in a module
  const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  const data = await response.json();
  console.log(data[0].name);
}
catch(error) {
  console.error(`Could not get products: ${error}`);
}
```

여러분은 아마도 프로미스 체인을 사용할 수 있는 `async` 함수를 많이 사용하게 될 것이고, 이는 프로미스와 관련된 일을 훨씬 더 직관적으로 만들 것입니다.

프로미스 체인과 마찬가지로 `await`는 비동기식 작업을 연속적으로 완료하도록 강제한다는 것을 명심하십시오. 다음 작업의 결과가 마지막 작업의 결과에 따라 달라지는 경우에는 이 작업이 필요하지만 그렇지 않은 경우에는 `Promise.all()`과 같은 작업이 더 효율적입니다.

## 결론

프로미스는 현대 JavaScript에서 비동기 프로그래밍의 기초입니다. 깊게 중첩된 콜백 없이 비동기 작업 시퀀스를 쉽게 표현하고 추론할 수 있으며 동기식 `try...catch` 문과 유사한 오류 처리 스타일을 지원합니다.

`async` 및 `await` 키워드를 사용하면 일련의 연속된 비동기 함수 호출에서 작업을 쉽게 구축할 수 있으므로 명시적인 프로미스 체인을 만들 필요가 없으며 동기 코드와 똑같이 보이는 코드를 작성할 수 있습니다.

프로미스는 모든 현대 브라우저의 최신 버전에서 작동합니다. 프로미스 지원에 문제가 있는 유일한 곳은 Opera Mini 및 IE11 및 이전 버전입니다.

이 글에서 모든 프로미스의 기능을 다루지는 않았지만, 가장 흥미롭고 유용한 기능만 다루었습니다. 여러분이 프로미스에 대해 더 많이 배우기 시작하면, 더 많은 특징과 기술들을 만나게 될 것입니다.

[WebRTC](/en-US/docs/Web/API/WebRTC_API), [Web Audio API](/en-US/docs/Web/API/Web_Audio_API), [Media Capture and Streams](/en-US/docs/Web/API/Media_Streams_API) 등 많은 Web API는 프로미스 기반입니다.

## 같이 보기

- [`Promise()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Using promises](/ko/docs/Web/JavaScript/Guide/Using_promises)
- Nolan Lawson의 [We have a problem with promises](https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html)
- [Let's talk about how to talk about promises](https://thenewtoys.dev/blog/2021/02/08/lets-talk-about-how-to-talk-about-promises/)

{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Introducing", "Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API", "Learn/JavaScript/Asynchronous")}}

## 이번 과정

- [Introducing asynchronous JavaScript](/ko/docs/Learn/JavaScript/Asynchronous/Introducing)
- **How to use promises**
- [Implementing a promise-based API](/ko/docs/Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API)
- [Introducing workers](/ko/docs/Learn/JavaScript/Asynchronous/Introducing_workers)
- [Assessment: sequencing animations](/ko/docs/Learn/JavaScript/Asynchronous/Sequencing_animations)
