---
title: Cooperative Scheduling of Background Tasks API
slug: Web/API/Background_Tasks_API
---

{{DefaultAPISidebar("Background Tasks")}}

**Cooperative Scheduling of Background Tasks API** (Background Tasks API 또는 간단하게 `requestIdleCallback()` API 라고도 부릅니다.) 는 user agnet가 자유 시간이 있다고 판단되면, 자동으로 실행될 작업을 대기열(queue tasks)에 넣을 수 있는 기능을 제공합니다.

## Concepts and usage

웹 브라우저의 메인 스레드는 이벤트 루프를 중심으로 배치됩니다. 이 코드는 현재 표시중인 {{domxref("Document")}}에 대한 모든 대기중인 업데이트를 가져오고, 페이지에서 실행해야하는 모든 자바스크립트 코드를 실행하고, 입력 장치에서 이벤트를 받아들이고, 이를 받을 요소(엘리먼트)에 해당 이벤트를 전달(dispatch) 합니다. 또한 이벤트 루프는 운영 체제와의 상호작용, 브라우저 자체 유저 인터페이스에 대한 업데이트 등을 처리합니다. 이것은 매우 복잡한 코드 덩어리이며, 메인 자바스크립트 코드는 이 모든 스레드와 코드가 함께 바로 실행될 수 있습니다. 유저 인터페이스 변경이 메인 스레드에서만 가능하기 때문에, 대부분의 코드가 DOM을 변경할 수 있는 것은 아니지만 메인 스레드에서 실행되고 있습니다.

이벤트 처리 및 화면 업데이트는 유저가 성능 문제를 인식하는 가장 분명한 두 가지 부분입니다. 따라서 우리의 코드가 웹의 훌륭한 시민이되고, 이벤트 루프의 실행이 지연되는 것을 방지하는것이 중요합니다. 과거에는 최대한 효율적으로 코드를 작성하고, 가능한 많은 작업을 [웹 워커(workers)](/ko/docs/Web/API/Web_Workers_API) 에게 맡기는 것 외에는 안정적으로 수행할 수 있는 방법이 없었습니다. {{domxref("Window.requestIdleCallback()")}}을 사용하면 브라우저의 이벤트 루프가 원활하게 실행되도록 보장하는데 적극적으로 참여할 수 있습니다. 또한 브라우저가 시스템에서 지연없이 안전하게 사용할 수 있는 시간을 코드에 알릴 수 있습니다. 그리고 주어진 한도 내에 있으면 사용자의 경험을 훨씬 향상 시킬 수 있습니다.

### Getting the most out of idle callbacks

아이들 콜백(idle callbacks)은 코드를 이벤트 루프와 협력하여 시스템이 과도하게 작업하지 않고, 최대한의 잠재력을 발휘할 수 있도록 하기 위한 것입니다. 지연 또는 기타 성능 문제가 발생하는 경우, 이를 사용하는 방법에 대해 생각해볼 수 있습니다.

- **우선순위(priority)가 높지 않은 태스크에 아이들 콜백을 사용합니다.** 얼마나 많은 콜백이 설정되었는지 알지 못하고, 사용자의 시스템이 얼마나 바쁜지 알지 못합니다. 때문에, 콜백이 얼마나 자주 실행되는지 알 수 없습니다(`timeout`을 지정하지 않으면). 이벤트 루프(또는 모든 화면 업데이트 주기)를 통과할 때 마다 아이들 콜백이 실행된다는 보장이 없습니다. 이벤트 루프가 사용 가능한 모든 시간을 사용하면, 당신은 운이 없습니다(다시한번, 말하지만 `timeout`을 사용하지 않으면).
- **아이들 콜백은 할당 된 시간을 초과하지 않도록 최선을 다해야 합니다.** 브라우저, 우리의 코드, 웹은 일반적으로 지정된 시간 제한을 초과해도 정상적으로 계속 실행되지만(심지어 시간이 지났더라도), 시간 제한(time restriction)은 시스템을 종료할 시간을 충분히 확보하도록 하기 위한 것입니다. 이벤트 루프를 통해 현재 패스를 끝내고, 다른 코드가 버벅이거나 애니메이션 효과가 지연되지 않도록 다음 이벤트로 넘어갑니다. 현재 {{domxref("IdleDeadline.timeRemaining", "timeRemaining()")}} 에는 50 밀리초의 상한선이 있습니다. 그러나 실제로는 이벤트 루프가 복잡한 사이트에서는 프로세서 시간을 필요로 하는 브라우저 확장 등으로 이미 그 시간을 점유하고 있기 때문에, 실제로 상한선은 더 적습니다.
- **아이들 콜백 내에서 DOM 변경은 피해야 합니다.** 콜백을 실행할 때 까지, 현재 프레임은 이미 드로잉을 마쳤으며 모든 레이아웃 업데이트와 계산이 완료됩니다. 레이아웃에 영향을 주는 변경사항을 적용하면, 브라우저가 중지되어야하고 그러면 다시 계산해야 하는 상황이 발생할 수 있습니다. 만약 콜백이 DOM을 변경해야 한다면, {{domxref("Window.requestAnimationFrame()")}}을 사용하여 DOM을 예약해야 합니다.
- **실행시간을 예측할 수 없는 태스크는 피해야 합니다.** 아이들 콜백은 예측할 수 없는 시간이 걸릴 수 있는 일은 하지 말아야 합니다. 예를들어, 레이아웃에 영향을 줄 수 있는 사항은 피해야 합니다. 또한 {{domxref("Promise")}}를 해결(resolve)하거나, 거절(reject)하는것은 피해야 합니다. 콜백이 반환되는 순간, 해당 promise의 해결 혹은 거절에 대한 처리기를 호출하기 때문입니다.
- **timeout은 필요할 때, 정말 필요할 때만 써야 합니다.** timeout을 사용하면 코드가 적시에 실행되도록 할 수 있습니다. 하지만 성능에 영향을 주지 않으면서 실행할 만한 충분한 시간이 있지 않다면, 브라우저가 사용자를 호출해 지연이나 애니메이션 버벅임을 유발할 수 있습니다.

### Falling back to setTimeout

Background Tasks API는 매우 새롭기 때문에, 우리의 코드가 아직 이 API를 지원하지 않는 브라우저에서 작동해야 하는 경우가 있을 수 있습니다. 우리는 {{domxref("WindowTimers.setTimeout()", "setTimeout()")}}을 fallback 옵션으로 사용하는 간단한 shim으로 그렇게 할 수 있습니다. 이것은 기능적으로 동일하지 않기 때문에 {{Glossary("polyfill")}}이 아닙니다. `setTimeout()`을 사용하면 유휴 기간(idle periods)을 사용할 수 없습니다. 하지만 대신에 가능한 경우 코드를 실행하여, 사용자가 성능 지연을 경험하지 못하도록 최대한 방지합니다.

```js
window.requestIdleCallback =
  window.requestIdleCallback ||
  function (handler) {
    let startTime = Date.now();

    return setTimeout(function () {
      handler({
        didTimeout: false,
        timeRemaining: function () {
          return Math.max(0, 50.0 - (Date.now() - startTime));
        },
      });
    }, 1);
  };
```

{{domxref("Window.requestIdleCallback", "window.requestIdleCallback")}}이 선언되지 않았다면, 위와같이 만들어 줍니다. 함수는 우리의 코드가 호출 된 시간을 기록하는 것으로 시작합니다. 우리는 이것을 사용하여 {{domxref("IdleDeadline.timeRemaining()", "timeRemaining()")}}에 대해 shim에서 반환 한 값을 계산합니다.

그리고 나서 {{domxref("WindowTimers.setTimeout", "setTimeout()")}}을 호출하여, 우리의 `requestIdleCallback()` 구현에 전달 된 콜백을 실행하는 함수를 전달합니다. 이 콜백은 {{domxref("IdleDeadline")}}을 준수하는 객체로 전달됩니다. 이 객체는 {{domxref("IdleDeadline.didTimeout", "didTimeout")}}을 false로 설정하고, {{domxref("IdleDeadline.timeRemaining", "timeRemaining()")}} 메서드가 전달되어 콜백에 50 밀리초의 시간을 제공합니다. `timeRemaining()`이 호출될 때 마다 본래의 50밀리초에서 경과시간을 뺀 남은 시간을 결정합니다.

결과적으로, 우리의 shim이 현재 `requestIdleCallback()`처럼 지금 이벤트 루프에 남아있는 유휴 시간(idle time)의 양을 제한하지는 않습니다. 하지만 콜백을 적어도 패스당 50밀리초 이하의 실행시간으로 제한합니다.

{{domxref("Window.cancelIdleCallback", "cancelIdleCallback()")}}에 대한 shim 구현은 훨씬 간단합니다:

```js
window.cancelIdleCallback =
  window.cancelIdleCallback ||
  function (id) {
    clearTimeout(id);
  };
```

`cancelIdleCallback()`이 선언되지 않은 경우, 이는 단순히 지정된 콜백 ID를 {{domxref("WindowTimers.clearTimeout", "clearTimeout()")}}에 전달하는 메서드를 생성합니다.

이제 우리의 코드는 효율적이지는 않지만, Background Tasks API를 지원하지 않는 브라우저에서도 작동합니다.

## Interfaces

Background Tasks API 는 단 하나의 새 인터페이스를 추가합니다:

- {{domxref("IdleDeadline")}}
  - : 이 유형의 객체는 유휴 콜백(idle callback)에 전달되어 유휴 기간(idle period)이 지속되는 예상시간과, timeout 기간이 만료되어 콜백이 실행중인지 여부를 제공합니다.

{{domxref("Window")}} 인터페이스 또한 {{domxref("window.requestIdleCallback", "requestIdleCallback()")}}, {{domxref("window.cancelIdleCallback", "cancelIdleCallback()")}} 이라는 새로운 두 메서드를 제공하는 API에 의해 확장되었습니다.

## Example

이 예제에서는 {{domxref("window.requestIdleCallback", "requestIdleCallback()")}}을 사용하여 브라우저가 유휴 상태인 시간 동안, 시간이 많이 걸리면서 우선 순위가 낮은 작업을 실행하는 방법을 살펴 보겠습니다. 또한 이 예제는 {{domxref("window.requestAnimationFrame", "requestAnimationFrame()")}}을 사용하여 문서 내용에 대한 업데이트를 예약하는 방법을 보여줍니다.

아래 예제에서는 HTML과 자바스크립트만 볼 수 있습니다. CSS는 이 기능을 이해하는데 특별히 중요하지 않아서, 표시하지 않습니다.

### HTML content

우리가 성취하려는 것을 지향하기 위해 HTML을 살펴보겠습니다. 이것은 텍스트 출력을 표시하는데 사용되는 두 번째 메인 박스(ID "logBox")뿐만 아니라, 작업 진행 상황을 나타내는데 사용되는 박스(ID "Container")를 만듭니다. 이는 quantum filament tachyon emissions의 해독이 얼마나 걸릴지 알 수 없기 때문입니다.

```html
<p>
  Demonstration of using
  <a href="https://developer.mozilla.org/ko/docs/Web/API/Background_Tasks_API">
    cooperatively scheduled background tasks</a
  >
  using the <code>requestIdleCallback()</code>
  method.
</p>

<div class="container">
  <div class="label">Decoding quantum filament tachyon emissions...</div>
  <progress id="progress" value="0"></progress>
  <div class="button" id="startButton">Start</div>
  <div class="label counter">
    Task <span id="currentTaskNumber">0</span> of
    <span id="totalTaskCount">0</span>
  </div>
</div>

<div class="logBox">
  <div class="logHeader">Log</div>
  <div id="log"></div>
</div>
```

progress box는 진행률을 나타내는 {{HTMLElement("progress")}} 요소(엘리먼트)를 사용합니다. 또한 진행률에 대한 정보를 숫자로 표시하며, 얼마나 변경이 되었는지 확인할 수 있는 label을 사용합니다. 또한 사용자가 데이터 처리를 시작하는데 사용하는 "Start" 버튼(ID "startButton")이 있습니다.

```css hidden
body {
  font-family: "Open Sans", "Lucida Grande", "Arial", sans-serif;
  font-size: 16px;
}

.logBox {
  margin-top: 16px;
  width: 400px;
  height: 500px;
  border-radius: 6px;
  border: 1px solid black;
  box-shadow: 4px 4px 2px black;
}

.logHeader {
  margin: 0;
  padding: 0 6px 4px;
  height: 22px;
  background-color: lightblue;
  border-bottom: 1px solid black;
  border-radius: 6px 6px 0 0;
}

#log {
  font:
    12px "Courier",
    monospace;
  padding: 6px;
  overflow: auto;
  overflow-y: scroll;
  width: 388px;
  height: 460px;
}

.container {
  width: 400px;
  padding: 6px;
  border-radius: 6px;
  border: 1px solid black;
  box-shadow: 4px 4px 2px black;
  display: block;
  overflow: auto;
}

.label {
  display: inline-block;
}

.counter {
  text-align: right;
  padding-top: 4px;
  float: right;
}

.button {
  padding-top: 2px;
  padding-bottom: 4px;
  width: 100px;
  display: inline-block;
  float: left;
  border: 1px solid black;
  cursor: pointer;
  text-align: center;
  margin-top: 0;
  color: white;
  background-color: darkgreen;
}

#progress {
  width: 100%;
  padding-top: 6px;
}
```

### JavaScript content

이제 문서 구조가 정의되었으므로, 작업을 수행할 자바스크립트 코드를 작성하겠습니다.
목표: 시스템이 유휴 상태일 때 마다 해당 기능을 실행하는 유휴 콜백과 함께, 함수를 호출하기 위한 요청을 큐에 추가할 수 있습니다.

#### Variable declarations

```js
let taskList = [];
let totalTaskCount = 0;
let currentTaskNumber = 0;
let taskHandle = null;
```

이 변수들은 처리 대기중인 태스크 리스트(task list)와, 태스크 큐(task queue) 및 실행에 대한 상태 정보를 관리하는데 사용합니다:

- `taskList` 는 객체의 배열({{jsxref("Array")}})로, 각각은 실행 대기중인 하나의 태스크(task)를 나타냅니다.
- `totalTaskCount` 는 큐에 추가된 태스크 수를 셉니다. 올라갈 수는 있지만, 결코 내려가지 않습니다. 우리는 이 값을 토대로 작업의 진행률을 표시하는 수학 계산에 사용합니다.
- `currentTaskNumber` 는 지금까지 처리한 태스크 수를 추적하는데 사용합니다.
- `taskHandle` 은 지금 처리중인 태스크에 대한 참조입니다.

```js
let totalTaskCountElem = document.getElementById("totalTaskCount");
let currentTaskNumberElem = document.getElementById("currentTaskNumber");
let progressBarElem = document.getElementById("progress");
let startButtonElem = document.getElementById("startButton");
let logElem = document.getElementById("log");
```

다음으로 우리는 상호작용할 필요가 있는 DOM 요소를 참조하는 변수를 선언합니다. 이 요소들은 다음과 같습니다:

- `totalTaskCountElem` 은 생성한 총 태스크 수를 progress box에 삽입하여 상태를 표시하는데 사용할 {{HTMLElement("span")}} 입니다.
- `currentTaskNumberElem` 은 지금까지 처리한 태스크 수를 표시하는데 사용되는 요소입니다.
- `progressBarElem` 은 지금까지 처리한 태스크의 백분율을 보여주는 {{HTMLElement("progress")}} 요소입니다.
- `startButtonElem` 은 시작 버튼 입니다.
- `logElem` 은 텍스트 메시지를 로그로 기록할 {{HTMLElement("div")}} 입니다.

```js
let logFragment = null;
let statusRefreshScheduled = false;
```

마지막으로 다른 항목에 대한 몇 가지 변수를 설정합니다:

- `logFragment` 는 우리의 로깅 함수에 의해 생성된 {{domxref("DocumentFragment")}} 를 저장하는데 사용됩니다. 다음 애니메이션 프레임이 렌더링 될 때 로그에 추가할 내용을 만듭니다.
- `statusRefreshScheduled` 는 앞으로의 프레임에 대한 상태 표시 박스의 업데이트를 이미 예약했는지 여부를 추적하는데 사용됩니다. 그렇기 때문에 프레임당 한 번만 수행합니다.

The shim to function even if idle callbacks aren't supported. Already discussed above, so it's hidden here to save space in the article.

```js
window.requestIdleCallback =
  window.requestIdleCallback ||
  function (handler) {
    let startTime = Date.now();

    return setTimeout(function () {
      handler({
        didTimeout: false,
        timeRemaining: function () {
          return Math.max(0, 50.0 - (Date.now() - startTime));
        },
      });
    }, 1);
  };

window.cancelIdleCallback =
  window.cancelIdleCallback ||
  function (id) {
    clearTimeout(id);
  };
```

#### Managing the task queue

다음으로 수행해야 할 태스크를 관리하는 방법을 알아보겠습니다. 우리는 아이들 콜백(idle callback) 기간 동안 시간이 허락하는대로, 태스크의 FIFO 큐를 생성함으로써 이를 수행할 것입니다.

##### Enqueueing tasks

첫째, 향후 실행을 위해 태스크를 큐에 넣는 함수가 필요합니다. 그 함수인 `enqueueTask()`는 다음과 같습니다:

```js
function enqueueTask(taskHandler, taskData) {
  taskList.push({
    handler: taskHandler,
    data: taskData,
  });

  totalTaskCount++;

  if (!taskHandle) {
    taskHandle = requestIdleCallback(runTaskQueue, { timeout: 1000 });
  }

  scheduleStatusRefresh();
}
```

`enqueueTask()` 는 입력으로 두 개의 매개변수(parameter)를 허용합니다:

- `taskHandler` 는 태스크를 처리하기 위해 호출 될 함수입니다.
- `taskData` 는 태스크 핸들러에 입력 매개 변수로 전달되는 객체이며, 태스크가 사용자 정의 데이터를 수신할 수 있게 합니다.

태스크를 큐에 넣기 위해 객체를 `taskList` 배열에 [push](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/push) 합니다. 객체는 각각 `handler` 와 `data` 라는 이름 아래에 `taskHandler` 와 `taskData` 값을 포함합니다. 그리고나서 대기열에 들어간 작업의 총 수를 반영하는 `totalTaskCount`를 증가시켜 나갑니다(태스크가 큐에서 제거될 때 우리는 그것을 감소시키지 않습니다).

다음으로 우리는 이미 유휴 콜백(idle callback)이 생성되었는지 확인합니다. 만약 `taskHandle` 이 0이면 아직 유휴 콜백이 없다는 것을 알기 때문에, {{domxref("Window.requestIdleCallback", "requestIdleCallback()")}}을 호출하여 `taskHandle` 을 생성합니다. 이 함수는 `runTaskQueue()`라는 함수를 호출하도록 구성되어 있습니다. 그리고 이 함수는 1초의 `timeout`을 갖고있기 때문에, 사용 가능한 실제 유휴 시간이 없는 경우에도 초당1회 이상 실행됩니다.

##### Running tasks

유휴 콜백 핸들러인 `runTaskQueue()` 는 브라우저가 유휴 시간이 충분하다고 판단하거나, 1초의 timeout이 만료될 때 호출됩니다. 이 함수의 일은 대기열에 넣어진 태스크를 실행하는 것입니다.

```js
function runTaskQueue(deadline) {
  while (
    (deadline.timeRemaining() > 0 || deadline.didTimeout) &&
    taskList.length
  ) {
    let task = taskList.shift();
    currentTaskNumber++;

    task.handler(task.data);
    scheduleStatusRefresh();
  }

  if (taskList.length) {
    taskHandle = requestIdleCallback(runTaskQueue, { timeout: 1000 });
  } else {
    taskHandle = 0;
  }
}
```

`runTaskQueue()`의 핵심은 계속되는 반복문입니다. 이 반복문은 taskList에 태스크가 있어야하고, 다음 두 조건 중 하나를 만족해야 합니다.
{{domxref("deadline.timeRemaining", "IdleDeadline.timeRemaining")}}을 검사하여 결정된 시간이 0 이상이거나 timeout이 한계에 도달하여 {{domxref("IdleDeadline.didTimeout", "deadline.didTimeout")}}이 참 이어야 합니다.

실행 시간이 있는 큐의 각 태스트에 대해 다음 작업을 수행합니다:

1. [큐에서 태스크 객체를 제거합니다.](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)
2. `currentTaskNumber` 를 증가시켜서 우리가 실행한 태스크의 수를 추적합니다.
3. 태스크를 처리할 때 호출하는 `task.handler`에 태스크 데이터 객체(`task.data`)를 전달합니다.
4. 우리는 `scheduleStatusRefresh()`함수를 호출하여 진행 상황의 변화를 반영하도록 화면을 업데이트 합니다.

시간이 다 되었을 때, 여전히 리스트에 태스크가 남아있다면 {{domxref("Window.requestIdleCallback", "requestIdleCallback()")}}을 다시 호출하여, 다음에 유휴 시간이 있을 때 작업을 계속 처리할 수 있게 예약 합니다. 큐가 비어 있으면, taskHandle을 0으로 설정하여 콜백을 예약하지 않았음을 나타냅니다. 그러면 우리는 이제 `enqueueTask()`가 호출 된 다음에 콜백을 요청하는 방법을 알 수 있습니다.

#### Updating the status display

우리는 로그를 출력하고, 진행 상황을 document에 업데이트 하길 원합니다. 그러나 유휴 콜백 내에서 안전하게 DOM을 변경할 수는 없습니다. 대신 {{domxref("Window.requestAnimationFrame", "requestAnimationFrame()")}}을 사용하여 브라우저에게 문의하도록 요청하여 안전할 때 디스플레이를 업데이트합니다.

##### Scheduling display updates

DOM 변경은 `scheduleStatusRefresh()`함수를 호출하여 예약합니다.

```js
function scheduleStatusRefresh() {
  if (!statusRefreshScheduled) {
    requestAnimationFrame(updateDisplay);
    statusRefreshScheduled = true;
  }
}
```

이것은 간단한 함수입니다. `statusRefreshScheduled`값을 확인하여 디스플레이 새로고침을 예약했는지 여부를 확인합니다. 만약 `false` 라면 {{domxref("Window.requestAnimationFrame", "requestAnimationFrame()")}}을 호출하여 새로고침을 예약하고, 해당 작업을 처리하기 위해 `updateDisplay()` 함수를 호출합니다.

##### Updating the display

`updateDisplay()` 함수는 progress box의 내용과 로그를 그립니다. 다음 프레임을 렌더링하는 과정에서 변경 사항을 적용하기 위해, DOM이 안전한 상태인 경우 브라우저에서 호출합니다.

```js
function updateDisplay() {
  let scrolledToEnd =
    logElem.scrollHeight - logElem.clientHeight <= logElem.scrollTop + 1;

  if (totalTaskCount) {
    if (progressBarElem.max != totalTaskCount) {
      totalTaskCountElem.textContent = totalTaskCount;
      progressBarElem.max = totalTaskCount;
    }

    if (progressBarElem.value != currentTaskNumber) {
      currentTaskNumberElem.textContent = currentTaskNumber;
      progressBarElem.value = currentTaskNumber;
    }
  }

  if (logFragment) {
    logElem.appendChild(logFragment);
    logFragment = null;
  }

  if (scrolledToEnd) {
    logElem.scrollTop = logElem.scrollHeight - logElem.clientHeight;
  }

  statusRefreshScheduled = false;
}
```

첫 번째로, 로그의 텍스트가 맨 아래로 스크롤되면 `scrolledToEnd` 가 `true` 로 설정됩니다. 그렇지 않으면 `false`로 설정됩니다. 우리는 이것을 사용하여 컨텐츠에 로그가 추가될 때 마다, 스크롤이 바닥에 유지되도록 스크롤 위치를 업데이트할지 여부를 결정합니다.

다음으로, 태스크가 큐에 들어간 경우 진행 상태 및 상태 정보를 업데이트 합니다.

1. 진행률 막대의 현재 최대 값이 지금 큐에 대기중인 태스크의 총 개수(`totalTaskCount`)와 다른 경우, 표시되는 전체 태스크 수(`totalTaskCountElem`)의 내용과 진행률 막대의 최대 값을 업데이트 합니다. 이 값은 적절하게 비례합니다.
2. 지금까지 처리 한 태스크의 수와 동일한 작업을 수행합니다. `progressBarElem.value`가 현재 처리중인 태스크 넘버(`currentTaskNumber`)와 다른 경우, 현재 처리중인 태스크와 진행 막대바의 현재 값을 업데이트하여 표시합니다.

그런 다음, 로그에 추가되기를 기다리는 텍스트가 있는 경우(즉, `logFragment`가 `null`이 아닌 경우), {{domxref("Node.appendChild", "Element.appendChild()")}}를 사용하여 log 요소(엘리먼트)에 `logFragment`를 추가합니다. 그 후 `logFragment` 를 `null` 로 설정하여 다시 추가하지 않도록합니다.

시작했을 때 로그가 끝까지 스크롤 되면, 우리는 여전히 로그를 확인할 수 있습니다. 그런 다음 `statusRefreshScheduled` 를 `false`로 설정하여 새로고침을 처리했으며, 새 것을(태스크를) 요청하는것이 안전하다는 것을 표시합니다.

#### Adding text to the log

`log()` 함수는 지정된 텍스트를 로그에 추가합니다. DOM을 바로 수정하는것이 안전한지 아닌지 `log()` 함수가 호출될때 우리는 알지 못합니다. 때문에 업데이트가 안전할 때 까지 로그 텍스트를 캐싱합니다. 위의 `updateDisplay()` 코드에서, 애니메이션 프레임이 업데이트 될 때 실제로 로그 요소에 기록된 텍스트를 추가하는 코드를 찾을 수 있습니다.

```js
function log(text) {
  if (!logFragment) {
    logFragment = document.createDocumentFragment();
  }

  let el = document.createElement("div");
  el.innerHTML = text;
  logFragment.appendChild(el);
}
```

먼저, 지금은 존재하지 않는 `logFragment`라는 {{domxref("DocumentFragment")}}객체를 생성합니다. 이 요소는 메인 DOM 자체를 즉시 변경하지 않고, 요소를 삽입할 수 있는 pseudo-DOM 입니다.

그런 다음 새로운 {{HTMLElement("div")}} 요소를 만들고, 내용을 입력 `text`와 일치하도록 설정합니다. 그리고나서 `logFragment`에 있는 pseudo-DOM의 끝에 새 요소를 추가합니다. DOM에 대한 변경 때문에, `logFragment`는 `updateDisplay()`가 호출 될 때까지 로그 항목을 누적합니다.

### Running tasks

이제 우리는 태스크 관리 및 출력 유지보수 코드를 완성했습니다. 실제로 작업을 완료하는 태스크를 실행하기 위한 설정을 시작할 수 있습니다.

#### The task handler

우리가 태스크 핸들러—즉, 태스크 객체의 `handler` 속성(property) 값으로 사용할 함수—로 사용할 함수는 `logTaskHandler()` 입니다. 이것은 각 태스크에 대한 로그에 많은 내용을 출력하는 간단한 함수입니다. 만약 우리가 원한다면, 우리의 어플리케이션에서 이 코드를 유휴 시간(idle time)동안 수행하는 작업으로 대체할 수 있습니다. 단지, DOM을 변경해야 하는 작업은 {{domxref("Window.requestAnimationFrame", "requestAnimationFrame()")}}을 통해 처리해야한다는 것을 기억해야합니다.

```js
function logTaskHandler(data) {
  log("<strong>Running task #" + currentTaskNumber + "</strong>");

  for (i = 0; i < data.count; i += 1) {
    log((i + 1).toString() + ". " + data.text);
  }
}
```

#### The main program

사용자가 시작 버튼을 클릭하면 `decodeTechnoStuff()` 함수가 호출되며 모든것이 시작됩니다.

The `[getRandomIntInclusive()](/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/random?document_saved=true#Getting_a_random_integer_between_two_values_inclusive)` method comes from the examples for {{jsxref("Math.random()")}}; we'll just link to it below but it needs to be included here for the example to work.

```js
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

```js
function decodeTechnoStuff() {
  totalTaskCount = 0;
  currentTaskNumber = 0;
  updateDisplay();

  let n = getRandomIntInclusive(100, 200);

  for (i = 0; i < n; i++) {
    let taskData = {
      count: getRandomIntInclusive(75, 150),
      text: "This text is from task number " + (i + 1).toString() + " of " + n,
    };

    enqueueTask(logTaskHandler, taskData);
  }
}

document
  .getElementById("startButton")
  .addEventListener("click", decodeTechnoStuff, false);
```

`decodeTechnoStuff()`가 시작하면 `totalTaskCount`(현재까지 큐에 추가된 태스크의 수)의 값과 `currentTaskNumber`(현재 실행중인 태스크의 수) 값을 0으로 설정합니다. 그리고 `updateDisplay()`를 호출하여 "아직 아무일도 일어나지 않았습니다(nothing's happened yet)" 상태로 재설정합니다.

이 예제에서는 임의의 수의 태스크(100개에서 200개 사이)를 만듭니다. 이를 위해 우리는 {{jsxref("Math.random()")}}에 대한 문서에서 예제로 제공되는, [`getRandomIntInclusive()` 함수](/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/random?document_saved=true#Getting_a_random_integer_between_two_values_inclusive)를 사용하여 생성할 태스크 수를 얻습니다.

그런 다음 루프를 시작하여 실제 태스크를 만듭니다. 각 태스크마다 두 개의 속성(property)이 포함된 `taskData`객체를 만듭니다:

- `count` 는 태스크에서 로그로 출력할 문자열 수입니다.
- `text` 는 `count`로 지정된 횟수만큼 로그에 출력하는 텍스트입니다.

그러면 각 태스크는 `enqueueTask()`를 호출하여 대기열에 추가되고 `logTaskHandler()` 가 핸들러 함수로 전달됩니다. 함수가 호출될 때 함수에 전달할 객체로 `taskData` 객체를 사용합니다.

### Result

아래는 위 코드의 실제 작동 결과입니다. 사용해보고, 브라우저의 개발자 도구에서 사용하고, 코드에서도 직접 사용해 보세요.

{{ EmbedLiveSample('Example', 600, 700) }}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{domxref("Window.requestIdleCallback()")}}
- {{domxref("Window.cancelIdleCallback()")}}
- {{domxref("IdleDeadline")}}
