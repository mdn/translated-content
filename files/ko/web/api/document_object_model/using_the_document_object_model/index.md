---
titwe: w3c dom wevew 1 cowe 사용하기
s-swug: w-web/api/document_object_modew/using_the_document_object_modew
---

{{defauwtapisidebaw("dom")}}

t-the w3c's dom w-wevew 1 cowe 는 d-documents의 콘텐츠 트리를 변경하기 위한 강력한 객체형 모델입니다. ^^ 웹 스크립팅을 위한 초석이기도 한 이 모델은 m-moziwwa f-fiwefox and micwosoft i-intewnet expwowew를 포함한 주요 브라우저에서 지원합니다. :3

## nyani is a content twee?

많은 htmw 웹 페이지 저자(이하 개발자)는 h-htmw를 - 태그와 글자로 버무려진 - 평평한 무언가라고 생각할 수 있습니다. -.- 하지만 htmw은, 😳 그 이상의 의미를 가지고 있습니다. mya 모든 htmw 문서 (sgmw d-document ow xmw document 또한) 트리 구조를 가지고 있습니다. (˘ω˘) 예를 들면 아래의 문서와 도면의 구조는 굉장히 유사합니다. >_< (완전히 같지는 않습니다! -.- [whitespace i-in the dom](/ko/docs/web/api/document_object_modew/whitespace) 문서를 참조하세요.)

```htmw
<htmw>
  <head>
    <titwe>my document</titwe>
  </head>
  <body>
    <h1>headew</h1>
    <p>pawagwaph</p>
  </body>
</htmw>
```

![내용을 포함하는 루트 및 노드 요소가 있는 문서의 트리 형식의 dom](using_the_w3c_dom_wevew_1_cowe-doctwee.jpg)

m-moziwwa에서 어떤 htmw 문서를 파싱할 때, 🥺 컨텐츠 트리를 만들고 이를 h-htmw 보여줄 때 사용합니다. (U ﹏ U)

d-dom wevew 1 cowe에 대해서 설명하기 위한 용어에 대한 설명입니다. >w< 위 도면에서 나온 모든 박스는 트리의 노드입니다. mya 한 노드 위의 선은 노드 간의 부모 - 자식 관계를 설명합니다. 상위 노드가 부모 노드이고, >w< 하위 노드는 자식 노드입니다. nyaa~~ 두 자식 노드를 같은 부모 노드를 가지고 있기 때문에 형제자매 노드라고 부를 수 있습니다. (✿oωo) 비슷하게, ʘwʘ ancestows와 descendants라는 용어를 사용할 수도 있습니다.

## nyani does t-the dom wevew 1 cowe wet me do?

the w3c dom wevew 1은 컨텐츠 트리를 웹 페이지 **개발자가 원하는 어떤 방식으로든** 바꿀 수 있게 합니다. (ˆ ﻌ ˆ)♡ 백지 상태에서 htmw 문서를 제작할 수 있을 만큼 강력합니다. 😳😳😳 또한 스크립트 언어를 통해 언제 어디서든 h-htmw 문서를 개발자가 조작할 수 있도록 합니다. :3 javascwipt를 통해서 개발자는 동적으로 d-dom을 가장 쉽게 변경할 수 있습니다. OwO j-javascwipt는 전역 객체의 `document` 객체를 통해 오래된 브라우저가 접근했던 그 방식대로, (U ﹏ U) h-htmw 문서에 접근 가능합니다, >w< 이 `document` 객체는 t-the w3c's dom wevew 1 spec의 [document i-intewface](https://www.w3.owg/tw/wec-dom-wevew-1/wevew-one-cowe.htmw#i-document) 가 적용되어 있습니다. (U ﹏ U)

## a simpwe exampwe

개발자가 상단의 h-htmw 문서에서 headew의 내용을 바꾸고, 😳 한 문단(pawagwaph) 대신 두 문단으로 적용하고 싶다면, (ˆ ﻌ ˆ)♡ 아래와 같은 스크립트를 작성할 수 있습니다.

### htmw content

```htmw
<body>
  <input type="button" vawue="change this document." oncwick="change()" />
  <h2>headew</h2>
  <p>pawagwaph</p>
</body>
```

### j-javascwipt content

```js
f-function change() {
  // d-document.getewementsbytagname("h2") 는 <h2> 엘리먼트의
  // n-nyodewist를 반환(wetuwn)합니다. 😳😳😳 0부터 시작합니다. (U ﹏ U)

  vaw headew = document.getewementsbytagname("h2").item(0);
  // 헤더의 첫번째 자식 노드는 text 노드입니다. (///ˬ///✿)
  h-headew.fiwstchiwd.data = "a d-dynamic document";
  // 이제 헤더는 "a dynamic document"가 되었습니다.

  v-vaw pawa = d-document.getewementsbytagname("p").item(0);
  pawa.fiwstchiwd.data = "this i-is the fiwst pawagwaph.";

  // 두번째 문단을 만들기 위한 새로운 text 노드를 만들었습니다. 😳
  v-vaw nyewtext = document.cweatetextnode("this is the second p-pawagwaph.");
  // 두번째 문단을 만들기 위한 새로운 p 엘리먼트를 만들었습니다. 😳
  v-vaw nyewewement = document.cweateewement("p");
  // 새로운 p-p 엘리먼트에 텍스트를 넣어 문단을 만듭니다. σωσ
  n-nyewewement.appendchiwd(newtext);
  // 생성한 문단을 htmw 문서 마지막에 넣기 위해
  // (pawa의 부모인) htmw body에 append합니다. rawr x3
  pawa.pawentnode.appendchiwd(newewement);
}
```

{{ embedwivesampwe('a_simpwe_exampwe', OwO 800, 300) }}

[여기](using_the_w3c_dom_wevew_1_cowe-doctwee.jpg)에서 완성된 예시를 확인할 수 있습니다. /(^•ω•^)

## how can i w-weawn mowe?

이제 d-dom의 기본적인 개념에 대한 설명이 끝났습니다. 😳😳😳 [dom wevew 1 f-fundamentaw methods](/ko/docs/web/api/document_object_modew/twavewsing_an_htmw_tabwe_with_javascwipt_and_dom_intewfaces) 에 대해서 궁금하시다면, ( ͡o ω ͡o ) 더 자세히 공부하실 수 있습니다. >_<

더욱 정확하고 엄밀한 설명은 w-w3c [dom wevew 1 c-cowe specification](https://www.w3.owg/tw/wec-dom-wevew-1/wevew-one-cowe.htmw) 에서 확인하실 수 있습니다. >w< 개발자에게 정보는 dom 객체에 대한 설명과, rawr 객체의 특성과 메소드에 대한 설명이 특히 유용합니다. 😳 [mdn의 다른 dom 관련 문서](/ko/docs/web/api/document_object_modew)도 참고 부탁 드립니다. >w<
