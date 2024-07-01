---
title: 만료 기한 확인하기
slug: Web/API/IndexedDB_API/Checking_when_a_deadline_is_due
l10n:
  sourceCommit: 21d3e89589aaf9e5cfa667de679134513ab833f3
---

{{DefaultAPISidebar("IndexedDB")}}

이 문서에서는 IndexedDB를 통해 저장된 만료 기한과 현재 시간 및 날짜를 비교하는 복잡한 예제를 살펴봅니다. 여기서 가장 복잡한 부분은 {{jsxref("Global_Objects/Date", "Date")}} 객체에서 가져온 현재 시간 및 날짜를 이용하여 저장된 만료 정보(월, 시간, 일 등)를 확인하는 것입니다.

![예시 애플리케이션의 스크린샷입니다. 빨간 제목은 To do app이라 적혀 있고, To-do item이 있고, 새로운 To-do를 추가하기 위한 폼이 있다.](to-do-app.png)

이 문서에서 참조할 예제 애플리케이션은 **To-do list 알림**입니다. 이는 간단한 할 일 목록 애플리케이션으로 [IndexedDB](/ko/docs/Web/API/IndexedDB_API)를 통해 작업 제목 및 마감 기한을 저장하고, [Notification](/ko/docs/Web/API/Notification) 및 [Vibration](/ko/docs/Web/API/Vibration_API) API를 통해 마감 날짜에 도달하면 사용자에게 알림을 제공합니다. To-do List 알림 앱은 [GitHub에서 다운로드](https://github.com/mdn/dom-examples/tree/main/to-do-notifications)하여 소스 코드를 수정할 수 있으며, [라이브로 실행중인 앱을 확인](https://mdn.github.io/dom-examples/to-do-notifications/)할 수도 있습니다.

## 기본적인 문제점

To-do 앱에서는 기계가 읽을 수 있으면서 동시에 사람이 이해하기 쉬운 형식으로 시간 및 날짜를 기록하고, 각 시간과 날짜가 현재를 기준으로 기록되는지 확인하려고 합니다. 기본적으로 우리는 지금 날짜와 시간을 확인한 다음, 저장된 이벤트를 확인하여 그 중 만료 기한이 현재 날짜와 시간과 일치하는 것이 있는지 확인하려고 합니다. 만약 일치한다면, 사용자가 알 수 있는 알림을 주고 싶습니다.

만약 단순히 두 개의 {{jsxref("Global_Objects/Date", "Date")}} 객체를 비교한다면 쉽겠지만, 사람은 JavaScript가 이해할 수 있는 형태로 마감 기한을 저장하는 것을 원치 않을 것입니다. 사람이 이해할 수 있는 날짜는 여러 형태로 표현됩니다.

### 날짜 정보 기록하기

모바일 기기에서도 합리적인 UX를 제공하고 모호함을 줄이기 위해, 다음과 같은 HTML 폼을 생성하기로 하였습니다.
![to-do 애플리케이션의 폼입니다. 할 일의 제목 및 마감 기한에 대한 년, 월, 일, 시간, 분이 필드로 구성되어 있습니다.](to-do-app-form2.png)

- to-do list의 제목을 입력하는 text input입니다. 이는 사용자가 입력해야 할 필수 항목입니다.
- 마감 기한의 시간, 분을 입력하는 Number input들입니다. `type="number"`를 지원하는 브라우저에서는 작은 위아래 화살표가 표시됩니다. 모바일 기기에서는 숫자를 입력할 수 있는 숫자 패드가 나타나므로 쉽게 입력할 수 있습니다. 일부 브라우저에서는 기본 text input이 나타날 수 있지만, 괜찮습니다.
- 마감 기한의 년, 월, 일을 지정하기 위한 {{HTMLElement("select")}} 요소입니다. 이 값들은 사용자가 입력하기 가장 모호하기 때문에 (7, 일요일, 일? 04, 4, 4월, 4? 2013, '13, 13?), 사용자가 선택할 수 있는 옵션을 제공하는 게 최선이라고 생각했습니다. 또한 이는 모바일 사용자의 번거로운 타이핑을 줄이는 데에도 도움이 됩니다. 년도는 네 자리 숫자로, 월은 전체 월 이름으로, 그리고 일은 해당 월의 숫자 날짜로 기록됩니다.

폼의 제출 버튼이 눌렸을 때 `addData` 함수가 실행되며, 이 함수는 아래와 같습니다.

```js
function addData(e) {
  e.preventDefault();

  if (!title.value || !hours.value || !minutes.value || !day.value || !month.value || !year.value) {
    note.innerHTML += '<li>제출 실패 — 폼이 완성되지 않았습니다.</li>';
    return;
  }
```

이 부분에서는 폼 필드가 모두 입력되었는지 확인합니다. 입력되지 않은 경우, 사용자에게 무엇이 잘못되었는지 알려주기 위해 앱의 좌하단 개발자 알림 패널에 메시지를 노출시킵니다. 이 절차는 HTML 폼 유효성 검사를 지원하지 않는 브라우저를 위한 것입니다. (HTML의 `required` 속성을 사용하여 유효성 검사를 강제하는 경우는 지원하는 브라우저에서만 적용됩니다.)

```js
   else {
    const newItem = [
      {
        taskTitle: title.value,
        hours    : hours.value,
        minutes  : minutes.value,
        day      : day.value,
        month    : month.value,
        year     : year.value,
        notified : "no"
      }
    ];

    // 읽기/쓰기 DB 트랜잭션을 열고, 데이터를 추가할 준비를 합니다.
    const transaction = db.transaction(["toDoList"], "readwrite");

    // 트랜잭션 열기 성공 여부에 대한 보고입니다.
    transaction.oncomplete = (event) => {
      note.innerHTML += '<li>데이터 추가를 위한 트랜잭션을 열었습니다..</li>';
    };

    transaction.onerror = (event) => {
      note.innerHTML += '<li>트랜잭션을 여는 데에 에러가 발생했습니다. 중복된 값은 허용되지 않습니다.</li>';
    };

    // 트랜잭션에서 객체 저장소를 생성합니다.
    const objectStore = transaction.objectStore("toDoList");

    // 객체 저장소에 newItem 객체를 추가합니다.
    const request = objectStore.add(newItem[0]);
```

이 부분에서는 아이템을 데이터베이스에 추가하기 위해 필요한 형식으로 데이터를 저장하는 `newItem` 객체를 생성합니다. 다음 몇 줄은 데이터베이스의 트랜잭션을 열고, 이에 대한 성공/실패 여부 메시지를 제공합니다. 그 후에는 새로운 아이템이 추가될 `objectStore` 를 생성합니다. `notified` 속성은 to-do list 요소의 만료 기한이 아직 지나지 않고 알려지지 않았는지를 나타냅니다 - 이는 추후에 자세히 설명합니다.

> **참고:** `db` 변수는 IndexedDB의 데이터베이스 인스턴스를 저장합니다. 이 변수의 다양한 속성을 사용하여 데이터를 조작할 수 있습니다.

```js
    request.onsuccess = (event) => {

      note.innerHTML += '<li>새로운 아이템이 추가되었습니다.</li>';

      title.value = '';
      hours.value = null;
      minutes.value = null;
      day.value = '01';
      month.value = 'January';
      year.value = 2020;
    };
  }
```

이 다음 섹션에서는 아이템이 성공적으로 추가되었다는 로그 메시지를 생성하고, 다음 아이템의 정보를 입력하기 위해 폼을 초기화합니다.

```js
  // displayData() 함수를 실행해 새로 추가된 아이템을 보여주는 돔을 업데이트합니다.
  displayData();
};
```

마지막으로 우리는 `displayData()` 함수를 실행해 새로 추가된 아이템을 보여주기 위해 돔을 업데이트합니다.

### 만료 기한에 도달했는지 확인하기

이제 우리의 데이터는 데이터베이스에 있으며, 우리는 만료 기한에 도달한 것이 있는 지 확인을 해야합니다. 이는 `checkDeadlines()` 함수를 통해 확인 가능합니다.

```js
function checkDeadlines() {
  const now = new Date();
```

먼저 우리는 빈 `Date` 객체를 생성해 현재 날짜과 시간을 가져옵니다.

```js
const minuteCheck = now.getMinutes();
const hourCheck = now.getHours();
const dayCheck = now.getDate();
const monthCheck = now.getMonth();
const yearCheck = now.getFullYear();
```

`Date` 객체는 날짜와 시간을 분리할 수 있는 여러 개의 메소드가 존재합니다. 여기서는 현재의 년 (`getFullYear()`를 사용해야 합니다. `getYear()`는 더이상 사용되지 않습니다), 월 (0-11 사이의 숫자를 반환합니다. 예를 들어, 0은 1월을 나타냅니다), 당월의 일 (`getDate()`를 사용해야 합니다. `getDay()`는 1주 기준 1-7 사이의 날짜를 반환합니다), 시 (숫자를 반환합니다), 분 (숫자를 반환합니다)을 가져옵니다.

```js
  const objectStore = db.transaction(['toDoList'], "readwrite").objectStore('toDoList');

  objectStore.openCursor().onsuccess = (event) => {
    const cursor = event.target.result;
    let monthNumber;

    if (cursor) {
```

다음으로 우리는 IndexedDB의 다른 `objectStore`를 만들고, 기본적으로 IndexedDB에서 저장소의 모든 아이템을 순회할 수 있는 `openCursor()` 함수를 사용해 커서를 엽니다. 그리고 우리는 커서에 남은 유효 항목이 있을 때까지 모든 항목을 순회합니다.

```js
switch (cursor.value.month) {
  case "January":
    monthNumber = 0;
    break;
  case "February":
    monthNumber = 1;
    break;

  // 중략

  case "December":
    monthNumber = 11;
    break;
  default:
    alert("데이터베이스에 잘못된 월이 입력되었습니다.");
}
```

먼저 데이터베이스에 저장된 월 이름을 JavaScript가 이해할 수 있는 월 숫자로 변환합니다. 이전에 보았듯이, Javascript의 `Date` 객체는 0-11 사이의 월 숫자를 생성합니다.

```js
if (
  Number(cursor.value.hours) === hourCheck &&
  Number(cursor.value.minutes) === minuteCheck &&
  Number(cursor.value.day) === dayCheck &&
  monthNumber === monthCheck &&
  cursor.value.year === yearCheck &&
  notified === "no"
) {
  // 값이 모두 일치하면, createNotification() 함수를 실행합니다.
  // 시스템 알림을 생성하기 위한 함수입니다.
  createNotification(cursor.value.taskTitle);
}
```

현재 날짜와 시간을 IndexedDB에 저장된 값들과 비교할 때 사용할 수 있도록 조합한 후 검증을 해야합니다. 우리는 사용자에게 마감 기한이 지났음을 알리기 위해 모든 값을 일치시켜야 합니다.

`notified === "no"` 검증은 to-do 아이템 하나당 하나의 알림만 받겠다는 설계이므로, 다음 순회에서 검증에 통과하지 못했을 때 `createNotification()` 함수를 통해 값을 `"yes"`로 변경해주어야 합니다. ([IndexedDB 사용하기](/ko/docs/Web/API/IndexedDB_API/Using_IndexedDB)에 설명이 있습니다.)

```js
    // 우리는 이제 이 데이터 객체에서 notified 값을 "yes"로 변경해야 합니다.
    // 이렇게 하면 알림이 다시 설정되지 않습니다.

    // 처음에는 일반적인 방식으로 트랜잭션을 엽니다.
    const objectStore = db.transaction(['toDoList'], "readwrite").objectStore('toDoList');

    // 이 제목을 통해 이 제목을 갖고 있는 to-do 리스트 객체를 가져옵니다.
    const request = objectStore.get(title);

    request.onsuccess = () => {
      // 결과로 반환된 값을 가져옵니다.
      const data = request.result;

      // 객체에 있는 값을 "yes"로 변경합니다.
      data.notified = "yes";

      // 데이터베이스에 다시 주입하기 위한 다른 요청을 생성합니다.
      const requestUpdate = objectStore.put(data);

      // 새 요청이 성공했을 때, 디스플레이를 업데이트 하기 위해 displayData() 를 실행합니다
      requestUpdate.onsuccess = () => {
        displayData();
      }
```

만약 모두 일치했다면, 사용자에게 알림을 전달하기 위해 `createNotification()` 함수를 실행합니다.

```js
      cursor.continue();
    }
  }
}
```

함수의 마지막 줄은 IndexedDB에 저장된 다음 아이템의 마감 기한을 검증하기 위해 커서를 옮깁니다.

### 검사 유지하기!

당연히 위의 마감 기한 검사 함수를 한 번만 호출하는 것은 쓸모가 없습니다. 계속해서 마감 기한이 도달했는지 확인하기 위해 `setInterval()`을 통해 1초마다 `checkDeadlines()`를 실행합니다.

```js
setInterval(checkDeadlines, 1000);
```
