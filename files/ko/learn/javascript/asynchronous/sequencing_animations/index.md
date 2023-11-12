---
title: Sequencing animations
slug: Learn/JavaScript/Asynchronous/Sequencing_animations
---

{{LearnSidebar}}{{PreviousMenu("Learn/JavaScript/Asynchronous/Introducing_workers", "Learn/JavaScript/Asynchronous")}}

이 평가에서는 일련의 애니메이션을 순서대로 재생하도록 페이지를 업데이트할 것입니다. 이를 진행하기 위해 [프로미스 사용 방법](/ko/docs/Learn/JavaScript/Asynchronous/Promises)에서 배운 몇 가지 기술을 사용할 예정입니다.

<table>
  <tbody>
    <tr>
      <th scope="row">필요한 사전 지식</th>
      <td>
        기본적인 컴퓨터 사용능력, JavaScript 기초와 프로미스 기반 API사용 방법에 대한 이해
      </td>
    </tr>
    <tr>
      <th scope="row">목적</th>
      <td>프로미스기반 API 사용 방법에 대한 이해도를 테스트하기 위함</td>
    </tr>
  </tbody>
</table>

## 시작

<https://github.com/mdn/learning-area/tree/main/javascript/asynchronous/sequencing-animations/start>에서 로컬로 파일을 복사합니다. 여기에는 4개의 파일이 있습니다.

- alice.svg
- index.html
- main.js
- style.css

앞으로 편집할 파일은 "main.js" 뿐입니다.

브라우저에서 "index.html"을 열면 세 개의 이미지가 대각선으로 배열되어 있는것을 볼 수 있을것입니다.

![Screenshot of sequencing-animations assessment page](./sequencing-animations.png)

이미지는 [Using the Web Animations API](/ko/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API) 가이드에서 가져온 것입니다.

## 프로젝트 설명

우리는 이 페이지를 업데이트하여 세 개의 이미지 모두에 하나씩 애니메이션을 적용할 것입니다. 첫 번째 애니메이션이 끝나면 두 번째 애니메이션이 시작되고, 두 번째가 끝나면 세 번째를 시작합니다.

애니메이션은 "main.js"에 정의되어 있습니다. 이 애니메이션은 이미지를 회전하고 이미지가 사라질 때까지 축소시킵니다.

페이지의 작동 방식에 대한 자세한 내용을 보려면 [완료된 예제](https://mdn.github.io/learning-area/javascript/asynchronous/sequencing-animations/finished/)를 살펴보세요. 애니메이션은 한 번만 실행되니 다시 실행하려면 페이지를 다시 로드해야합니다.

## 단계별로 완성해보기

### 첫 번째 이미지 애니메이션

우리는 [Web Animations API](/ko/docs/Web/API/Web_Animations_API)의 {{domxref("Element/animate", "element.animate()")}} 메서드를 사용하여 애니메이션을 적용할 것입니다.

"main.js"를 업데이트하여 다음과 같이 `alice1.animate()` 호출을 추가해줍니다.

```js
const aliceTumbling = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: "forwards",
};

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

alice1.animate(aliceTumbling, aliceTiming);
```

페이지를 다시 로드해보면 첫 번째 이미지가 회전하고 축소되는것을 볼 수 있을겁니다.

### 모든 이미지 애니메이션

다음으로 `alice1`이 끝나면 `alice2`를, `alice2`가 끝나면 `alice3`가 시작되도록 하겠습니다.

`animate()` 메서드는 {{domxref("Animation")}} 객체를 반환합니다. 이 객체는 애니메이션 재생이 완료되면 이행되는 `Promise`로 `finished` 속성을 가지고 있습니다. 그래서 우리는 이 프로미스로 언제 다음 애니메이션을 시작해야할지 알 수 있습니다.

여러분이 이를 구현하기 위한 몇 가지 다른 방법들을 시도해 보시고, 프로미스를 사용하는 다른 방법들을 보강해주셨으면 합니다.

1. 먼저, [콜백 사용에 대한 논의](/ko/docs/Learn/JavaScript/Asynchronous/Introducing#callbacks)에서 보았던 "콜백 지옥(callback hell)"으로 프로미스를 구현합니다.

2. 다음으로 [프로미스 체인](/ko/docs/Learn/JavaScript/Asynchronous/Promises#chaining_promises)으로 구현합니다. [화살표 함수](/ko/docs/Learn/JavaScript/Building_blocks/Functions#arrow_functions) 대신 다른 것을 사용할 수 있기 때문에 코드는 여러 가지 방법으로 작성할 수 있음을 알아두세요. 다양한 방법을 시도해보세요. 어느 것이 가장 간결하고 읽기 쉬운가요?

3. 마지막으로 [`async`와 `await`](/ko/docs/Learn/JavaScript/Asynchronous/Promises#async_and_await)로 구현해보세요.

`element.animate()`는 프로미스를 반환하지 _않는다_ 는것을 기억하세요. 프로미스인 `finished` 속성을 가진 `Animation` 객체를 반환합니다.

## 평가 또는 추가적인 도움

작업에 대한 평가를 원하거나 수행 중 막히는 부분이 있다면 다음 방법을 통해 도움을 요청할 수 있습니다.

1. [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), 또는 [Glitch](https://glitch.com/)와 같이 코드를 공유할 수 있는 온라인 에디터에 여러분이 작성한 코드를 올립니다.
2. [MDN Discourse forum Learning category](https://discourse.mozilla.org/c/mdn/learn/250)에 평가 혹은 도움을 요청하는 게시물을 작성합니다. 게시물에는 다음이 포함되어야 합니다.

   - "애니메이션 시퀀싱 평가 질문"과 같이 설명적인 제목
   - 이미 시도한 내용과 원하는 작업에 대한 세부 정보 (예: 막히는 부분이 있어서 도움이 필요하거나 평가가 필요)
   - 온라인 편집기에서 도움이나 평가가 필요한 코드 링크(1단계에서 언급됨). 이는 답변에 매우 도움이 됩니다. 만약 코드를 볼 수 없다면 도움을 주기 상당히 어렵습니다.
   - 도움이 필요한 질문을 찾을 수 있도록 실제 작업 또는 평가 페이지에 대한 링크

{{PreviousMenu("Learn/JavaScript/Asynchronous/Introducing_workers", "Learn/JavaScript/Asynchronous")}}
