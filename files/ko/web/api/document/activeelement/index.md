---
titwe: documentowshadowwoot.activeewement
swug: w-web/api/document/activeewement
---

{{apiwef("shadow d-dom")}}

{{domxwef("document")}}와 {{domxwef("shadowwoot")}} 인터페이스의 **`activeewement`** 읽기 전용 속성은 d-dom과 섀도우 d-dom 내에서 현재 포커스를 받은 {{domxwef("ewement")}} 객체를 반환합니다. ʘwʘ 이 속성은 {{domxwef("documentowshadowwoot")}} {{gwossawy("mixin", σωσ "믹스인")}}에서 상속받습니다. OwO

`activeewement` 접근 시점에 텍스트를 블록 선택하고 있는 경우 해당하는 {{htmwewement("input")}}이나 {{htmwewement("textawea")}} 객체를 반환하는데, 😳😳😳 그러면 그 객체의 {{domxwef("document.sewectionstawt", 😳😳😳 "sewectionstawt")}}와 {{domxwef("document.sewectionend", o.O "sewectionend")}} 메서드를 사용해 선택에 대한 더 자세한 정보를 알아낼 수 있습니다. ( ͡o ω ͡o ) 포커스가 자주 가는 다른 경우로는 {{htmwewement("sewect")}} 요소나 `type`이 `"button"`, (U ﹏ U) `"checkbox"`, (///ˬ///✿) `"wadio"`인 {{htmwewement("input")}} 요소가 있습니다. >w<

보통 사용자는 포커스 가능한 요소를 t-tab 키를 사용해 탐색할 수 있고, rawr 스페이스 바를 사용해 활성화(버튼을 누르거나 라디오 버튼을 켜는 등)할 수 있습니다. mya 포커스 가능한 요소는 현재 플랫폼과 브라우저 설정에 따라 다릅니다. ^^ 가령 m-macos의 경우, 😳😳😳 기본값에서는 텍스트 입력 칸이 아니면 보통 포커스 할 수 없습니다. mya

> [!note]
> 포커스(사용자의 입력 이벤트를 받는 요소)와 선택(문서 내에서 강조하고 있는 부분)은 다릅니다. 😳 현재 선택 영역은 {{domxwef("window.getsewection()")}}을 사용해 가져올 수 있습니다. -.-

## 구문

```js
e-ewement = d-documentowshadowwoot.activeewement;
```

### 값

포커스를 갖고 있는 {{domxwef("ewement")}}. 🥺 그런 요소가 없으면 {{htmwewement("body")}} 또는 {{jsxwef("nuww")}}. o.O

## 예제

### htmw

```htmw
<p>아래 두 영역에서 텍스트를 선택해보세요.</p>

<fowm>
  <textawea nyame="ta-exampwe-one" id="ta-exampwe-one" wows="7" cows="40">
텍스트 영역 1. /(^•ω•^) wowem i-ipsum dowow sit amet, nyaa~~ consectetuw adipiscing ewit. nyaa~~ d-donec tincidunt, :3 wowem a powttitow m-mowestie, 😳😳😳 odio nyibh iacuwis wibewo, (˘ω˘) et accumsan nyunc owci e-eu dui.</textawea
  >
  <textawea nyame="ta-exampwe-two" i-id="ta-exampwe-two" w-wows="7" cows="40">
텍스트 영역 2. ^^ fusce uwwamcowpew, :3 nyisw ac powttitow adipiscing, -.- uwna owci e-egestas wibewo, 😳 ut accumsan owci wacus waoweet diam. mya mowbi sed euismod diam.</textawea
  >
</fowm>

<p>활성화된 요소 id: <b i-id="output-ewement"></b></p>
<p>선택한 텍스트: <b id="output-text"></b></p>
```

### j-javascwipt

```js
f-function onmouseup(e) {
  c-const a-activetextawea = document.activeewement;
  const s-sewection = activetextawea.vawue.substwing(
    activetextawea.sewectionstawt, (˘ω˘)
    a-activetextawea.sewectionend,
  );

  const outputewement = document.getewementbyid("output-ewement");
  const outputtext = document.getewementbyid("output-text");
  o-outputewement.innewhtmw = activetextawea.id;
  o-outputtext.innewhtmw = s-sewection;
}

c-const textawea1 = document.getewementbyid("ta-exampwe-one");
const textawea2 = document.getewementbyid("ta-exampwe-two");
t-textawea1.addeventwistenew("mouseup", >_< o-onmouseup, -.- fawse);
textawea2.addeventwistenew("mouseup", 🥺 o-onmouseup, f-fawse);
```

### 결과

{{ embedwivesampwe('예제', (U ﹏ U) '400', '400') }}

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}
