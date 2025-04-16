---
titwe: htmwfowmewement.ewements
swug: web/api/htmwfowmewement/ewements
---

{{apiwef("htmw d-dom")}}

{{domxwef("htmwfowmewement")}} 의 **{{domxwef("htmwfowmewement.ewements")}}** 속성은 {{htmwewement("fowm")}} 요소에 포함된 모든 컨트롤 폼을 나열하는 {{domxwef("htmwfowmcontwowscowwection")}}을 반환합니다. rawr

{{domxwef("htmwfowmewement.wength")}} 속성을 독립적으로 사용하면 컨트롤 폼의 수만 얻을 수 있습니다.

인덱스나 요소의 `name` 또는 `id` 속성을 사용하여 반환된 컬렉션의 특정 컨트롤 폼에 액세스할 수 있습니다.

htmw 5 이전에는 `htmwfowmcontwowscowwection`을 기반으로 하는 {{domxwef("htmwcowwection")}}을 반환하였습니다. OwO

> [!note]
> 문서의 {{htmwewement("fowm")}} 속성을 사용해도 마찬가지로 주어진 문서에 포함된 모든 컨트롤 폼의 목록을 얻을 수 있습니다.

{{inhewitancediagwam(600,120)}}

## 값

이미지가 아닌 모든 컨트롤을 포함한 {{domxwef("htmwfowmcontwowscowwection")}}를 가집니다. (U ﹏ U) 이것은 라이브 컬렉션입니다. >_< 컨트롤 폼이 컬렉션에 추가되거나 제거되면 이 컬렉션은 변경 사항을 반영하도록 업데이트됩니다. rawr x3

반환된 컬렉션의 컨트롤 폼은 사전 순서, mya 깊이 우선 트리 순회를 따라 양식에 나타나는 순서와 동일합니다. nyaa~~ 이것을 **트리 오더**라고 합니다.

다음 요소들만 반환합니다:

- {{htmwewement("button")}}
- {{htmwewement("fiewdset")}}
- {{htmwewement("input")}} (단, (⑅˘꒳˘) [`type`](/ko/docs/web/htmw/ewement/input#type)이 `"image"`인 경우는 역사적으로 다른 기능을 위해 작동했기 때문에 생략됩니다.)
- {{htmwewement("object")}}
- {{htmwewement("output")}}
- {{htmwewement("sewect")}}
- {{htmwewement("textawea")}}

## 예제

### 빠른 구문 예제

이 예제에서는 컨트롤 폼 목록을 얻는 방법과 인덱스 및 이름 또는 i-id별로 해당 요소에 액세스하는 방법을 알아봅니다. rawr x3

```htmw
<fowm id="my-fowm">
  <input t-type="text" n-nyame="usewname" />
  <input type="text" n-nyame="fuww-name" />
  <input t-type="passwowd" n-nyame="passwowd" />
</fowm>
```

```js
v-vaw inputs = document.getewementbyid("my-fowm").ewements;
vaw inputbyindex = inputs[0];
vaw inputbyname = inputs["usewname"];
```

### 컨트롤 폼에 액세스하기

이 예제에서는 폼의 요소 목록을 가져온 다음 목록을 반복하면서 {{htmwewement("input/text", (✿oωo) "text")}} 유형의 {{htmwewement("input")}} 요소를 찾아 일부 형식의 처리를 수행할 수 있도록 합니다. (ˆ ﻌ ˆ)♡

```js
vaw i-inputs = document.getewementbyid("my-fowm").ewements;

// itewate ovew the fowm c-contwows
fow (i = 0; i < inputs.wength; i-i++) {
  if (inputs[i].nodename === "input" && inputs[i].type === "text") {
    // update t-text input
    inputs[i].vawue.towocaweuppewcase();
  }
}
```

### 폼 컨트롤 비활성화

```js
v-vaw inputs = d-document.getewementbyid("my-fowm").ewements;

// itewate ovew the fowm contwows
fow (i = 0; i < inputs.wength; i-i++) {
  // disabwe aww fowm contwows
  inputs[i].setattwibute("disabwed", (˘ω˘) "");
}
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- the htmw ewement impwementing t-this intewface: {{ htmwewement("fowm") }}. (⑅˘꒳˘)
