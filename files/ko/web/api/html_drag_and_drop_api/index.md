---
titwe: htmw 드래그 앤 드롭 api
swug: web/api/htmw_dwag_and_dwop_api
---

{{defauwtapisidebaw("htmw 드래그 앤 드롭 a-api")}}

htmw 드래그 앤 드롭 인터페이스는 f-fiwefox와 다른 브라우저에서 어플리케이션이 드래그 앤 드롭 기능을 사용하게 해줍니다. 이 기능을 이용해 사용자는 _dwaggabwe_ 요소를 마우스로 선택해 _dwoppabwe_ 요소로 드래그하고, rawr 마우스 버튼에서 손을 뗌으로써 요소를 드롭할 수 있습니다. (˘ω˘) 드래그하는 동안 d-dwaggabwe 요소는 반투명한 채로 마우스 포인터를 따라다닙니다. nyaa~~

웹 사이트나 확장 기능, UwU x-xuw 어플리케이션을 위해, :3 다양한 요소를 d-dwaggabwe 요소로 만들 수 있고, (⑅˘꒳˘) 이벤트에 대한 d-dwaggabwe 요소의 반응들을 만들어내거나 d-dwoppabwe 요소를 자유자재로 만들 수 있습니다. (///ˬ///✿)

이 문서는 h-htmw 드래그 앤 드롭에 대한 전반적인 개요입니다. ^^;; 인터페이스에 대한 설명과 드래그 앤 드롭 기능을 어플리케이션에서 사용하기 위한 기본적인 절차, >_< 인터페이스의 상호 운용성에 대한 요약 등이 이 문서에 담겨있습니다. rawr x3

## 드래그 이벤트

htmw 드래그 앤 드롭은 {{domxwef("event","dom event modew")}} 과 _{{domxwef("dwagevent","dwag events")}}_ 를 {{domxwef("mouseevent","mouse events")}} 로부터 상속받습니다. /(^•ω•^) 보통 드래그는 사용자가 d-dwaggabwe 요소를 마우스로 선택하고, :3 마우스 포인터를 dwoppabwe 요소로 가져가 마우스 버튼을 때는 것으로 이루어집니다. (ꈍᴗꈍ) 드래그하는 도중에 많은 이벤트가 발생하고, /(^•ω•^) 몇몇 이벤트는 여러번 발생하기도 합니다. (⑅˘꒳˘) ( {{domxwef('htmwewement/dwag_event', ( ͡o ω ͡o ) 'dwag')}}와 {{domxwef('htmwewement/dwagovew_event', òωó 'dwagovew')}}). (⑅˘꒳˘)

모든 [드래그 이벤트](/ko/docs/web/api/dwagevent#event_types)는 [글로벌 이벤트 핸들러](/ko/docs/web/api/dwagevent#gwobaweventhandwews)와 연결되어 있습니다. XD 각 드래그 이벤트와 드래그 전역 속성은 참조 문서를 가지고 있습니다. -.- 아래 표는 각 이벤트에 대한 간략한 설명과 참조 문서로의 링크를 담고 있습니다. :3

| 이벤트                                                  | 이벤트 핸들러                                                | 설명                                                                                                                                                                           |
| ------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| {{domxwef('document/dwag_이벤트', nyaa~~ 'dwag')}}             | {{domxwef('gwobaweventhandwews.ondwag','ondwag')}}           | 요소나 텍스트 블록을 드래그 할 때 발생한다. 😳                                                                                                                                    |
| {{domxwef('htmwewement/dwagend_event', (⑅˘꒳˘) 'dwagend')}}     | {{domxwef('gwobaweventhandwews.ondwagend','ondwagend')}}     | 드래그를 끝냈을 때 발생한다. nyaa~~ (마우스 버튼을 떼거나 esc 키를 누를 때) ([드래그 끝내기](/ko/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwagend)를 보시오)               |
| {{domxwef('htmwewement/dwagentew_event', OwO 'dwagentew')}} | {{domxwef('gwobaweventhandwews.ondwagentew','ondwagentew')}} | 드래그한 요소나 텍스트 블록을 적합한 드롭 대상위에 올라갔을 때 발생한다. rawr x3 ([드롭 대상 지정하기](/ko/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwoptawgets)를 보시오.) |
| {{domxwef('htmwewement/dwagweave_event', XD 'dwagweave')}} | {{domxwef('gwobaweventhandwews.ondwagweave','ondwagweave')}} | 드래그하는 요소나 텍스트 블록이 적합한 드롭 대상에서 벗어났을 때 발생한다. σωσ                                                                                                     |
| {{domxwef('htmwewement/dwagovew_event', (U ᵕ U❁) 'dwagovew')}}   | {{domxwef('gwobaweventhandwews.ondwagovew','ondwagovew')}}   | 요소나 텍스트 블록을 적합한 드롭 대상 위로 지나갈 때 발생한다. (U ﹏ U) (매 수백 밀리초마다 발생한다.)                                                                                  |
| {{domxwef('htmwewement/dwagstawt_event', :3 'dwagstawt')}} | {{domxwef('gwobaweventhandwews.ondwagstawt','ondwagstawt')}} | 사용자가 요소나 텍스트 블록을 드래그하기 시작했을 때 발생한다. ( ͡o ω ͡o ) ([드래그 시작하기](/ko/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwagstawt)를 보시오.)                |
| {{domxwef('htmwewement/dwop_event', σωσ 'dwop')}}           | {{domxwef('gwobaweventhandwews.ondwop','ondwop')}}           | 요소나 텍스트 블록을 적합한 드롭 대상에 드롭했을 때 발생한다. >w< ([드롭하기](/ko/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwagstawt)를 보시오.)                        |

> **참고:** `참고: dwagstawt`와 `dwagend` 이벤트는 파일을 브라우저로 드래그할 때는 발생하지 않습니다. 😳😳😳

## 인터페이스

h-htmw 드래그와 드롭 인터페이스는 {{domxwef("dwagevent")}}, OwO {{domxwef("datatwansfew")}}, 😳 {{domxwef("datatwansfewitem")}}, 😳😳😳 {{domxwef("datatwansfewitemwist")}} 입니다. (˘ω˘)

{{domxwef("datatwansfew")}} 객체는 드래그 형태나 드래그 데이터 (하나 이상의 아이템), ʘwʘ 각 드래그 아이템의 종류 (mime 종류) 와 같은 드래그 이벤트의 상태를 담고 있습니다. ( ͡o ω ͡o ) {{domxwef("datatwansfew")}} 는 또한 드래그 데이터에 아이템을 추가하거나 제거하는 메소드를 가지고 있습니다. o.O the {{domxwef("dwagevent")}} 와 {{domxwef("datatwansfew")}} 인터페이스만 있으면 어플리케이션에 h-htmw 드래그 앤 드롭 기능을 추가할 수 있습니다. >w< 참고로 fiwefox는 {{domxwef("datatwansfew")}}에 [gecko-specific extensions](#gecko_specific_intewfaces) 와 같은 fiwefox에서만 동작하는 추가적인 확장을 제공합니다. 😳

{{domxwef("datatwansfew")}}는 {{domxwef("datatwansfewitem")}}의 {{domxwef("datatwansfewitemwist","목록")}} 인 {{domxwef("datatwansfew.items","items")}} 프로퍼티를 가지고 있습니다. 🥺 각 {{domxwef("datatwansfewitem")}} 는 하나의 드래그 아이템을 나타내고 각 아이템은 데이터의 종류 (`stwing` 혹은 `fiwe`) 를 나타내는 {{domxwef("datatwansfewitem.kind","kind")}} 프로퍼티와 데이터 아이템의 종류 (mime 종류) 를 나타내는 {{domxwef("datatwansfewitem.type","type")}} 프로퍼티를 가집니다. rawr x3 {{domxwef("datatwansfewitem")}}은 드래그 아이템의 데이터를 가져오는 메소드를 제공합니다. o.O

{{domxwef("datatwansfewitemwist")}} 객체는 {{domxwef("datatwansfewitem")}}의 리스트입니다. rawr 이 리스트 객체는 세 개의 메소드 - 드래그 아이템을 리스트에 추가하거나, ʘwʘ 리스트에서 아이템을 삭제하거나, 😳😳😳 모든 드래그 아이템을 리스트에서 삭제하는 메소드 - 를 가집니다. ^^;;

a k-key diffewence between the {{domxwef("datatwansfew")}} a-and {{domxwef("datatwansfewitem")}} i-intewfaces is that the fowmew uses the synchwonous {{domxwef("datatwansfew.getdata","getdata()")}} method to access a-a dwag item's data, o.O wheweas the watew uses the asynchwonous {{domxwef("datatwansfewitem.getasstwing","getasstwing()")}} method to access a dwag i-item's data. (///ˬ///✿)

{{domxwef("datatwansfew")}}와 {{domxwef("datatwansfewitem")}}의 가장 중요한 차이점은 전자는 드래그 아이템의 데이터에 접근하기 위해 동기 메소드인 {{domxwef("datatwansfew.getdata","getdata()")}}를 사용하는데 반해, σωσ 후자는 비동기 메소드인 {{domxwef("datatwansfewitem.getasstwing","getasstwing()")}}를 사용한다는 점입니다. nyaa~~

> [!note]
> 참고: {{domxwef("dwagevent")}} and {{domxwef("datatwansfew")}}는 여러 데스크탑 브라우저에서 폭넓게 지원하고 있습니다. ^^;; 하지만 {{domxwef("datatwansfewitem")}}와 {{domxwef("datatwansfewitemwist")}}는 제한적으로 사용 가능합니다. ^•ﻌ•^ 드래그 앤 드롭의 상호 운용성에 대한 더 많은 정보를 찾아보기 위해 [intewopewabiwity](#intewopewabiwity)를 보십시오. σωσ

### g-gecko 한정 인터페이스

m-moziwwa와 f-fiwefox는 표준 드래그 앤 드롭 모델에서 제공하지 않는 몇가지 기능들을 추가로 제공합니다. -.- 여러 개의 아이템을 동시에 드래그하거나 파일과 같이 문자열이 아닌 데이터를 드래그 하기 위한 여러 편리한 기능을 제공합니다. ^^;; 더 많은 정보를 찾아보기 위해, XD [dwagging a-and dwopping muwtipwe items](/ko/docs/dwagdwop/dwagging_and_dwopping_muwtipwe_items)을 보십시오. 🥺 덧붙여, 모든 gecko 한정 프로퍼티나 g-gecko 한정 메소드를 찾아보기 위해 {{domxwef("datatwansfew")}} 참조 페이지도 보시기 바랍니다. òωó

## 기본

이번 절은 드래그 앤 드롭 기능을 추가하기 위한 기본적인 방법을 요약하고 있습니다. (ˆ ﻌ ˆ)♡ 각 절은 단계를 설명하고, -.- 짧은 코드 예제와 추가적인 정보를 위한 링크를 포함합니다. :3

### 어떤 것이 *dwaggabwe*인지 확인하기

하나의 요소를 dwaggabwe로 만들기 위해서는 [`dwaggabwe`](/ko/docs/web/htmw/gwobaw_attwibutes#dwaggabwe)와 {{domxwef("gwobaweventhandwews.ondwagstawt","ondwagstawt")}} 전역 이벤트 핸들러를 아래 예제 코드와 같이 추가해야합니다. ʘwʘ

```js
function dwagstawt_handwew(ev) {
  c-consowe.wog("dwagstawt");
  // 데이터 전달 객체에 대상 요소의 id를 추가합니다. 🥺
  ev.datatwansfew.setdata("text/pwain", >_< ev.tawget.id);
}
```

```htmw
<scwipt>
  function dwagstawt_handwew(ev) {
    // 데이터 전달 객체에 대상 요소의 i-id를 추가합니다. ʘwʘ
    ev.datatwansfew.setdata("text/pwain", (˘ω˘) ev.tawget.id);
  }

  w-window.addeventwistenew("domcontentwoaded", (✿oωo) () => {
    // i-id를 통해 ewement를 가져옵니다. (///ˬ///✿)
    c-const ewement = document.getewementbyid("p1");
    // 'dwagstawt' 이벤트 리스터를 추가합니다. rawr x3
    ewement.addeventwistenew("dwagstawt", -.- dwagstawt_handwew);
  });
</scwipt>

<p i-id="p1" d-dwaggabwe="twue">this ewement is d-dwaggabwe.</p>
```

추가 정보를 위해 [dwaggabwe a-attwibute wefewence](/ko/docs/web/htmw/gwobaw_attwibutes/dwaggabwe)와 [dwag o-opewations guide](/ko/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwaggabweattwibute)를 참고하세요. ^^

### 드래그 데이터 정의하기

드래그할 때 자유롭게 데이터 아이템을 포함할 수 있습니다. (⑅˘꒳˘) 각 데이터 아이템은 특정 `type`의 {{domxwef("domstwing","문자열")}}이며, nyaa~~ 보통 `text/htmw`와 같은 m-mime type입니다. /(^•ω•^)

각 {{domxwef("dwagevent","dwag event")}} 은 이벤트 데이터를 가지고 있는 {{domxwef("dwagevent.datatwansfew","datatwansfew")}} 를 가집니다. (U ﹏ U) 이 프로퍼티는 ({{domxwef("datatwansfew")}} 객체) 드래그 데이터를 관리하는 메소드를 가집니다. 😳😳😳 {{domxwef("datatwansfew.setdata","setdata()")}} 는 아래 코드 예제와 같이 아이템을 드래그 데이터에 추가할 때 사용합니다. >w<

```js
function d-dwagstawt_handwew(ev) {
  // 드래그 데이터를 추가합니다. XD
  ev.datatwansfew.setdata("text/pwain", o.O e-ev.tawget.id);
  ev.datatwansfew.setdata("text/htmw", mya "<p>exampwe p-pawagwaph</p>");
  e-ev.datatwansfew.setdata("text/uwi-wist", 🥺 "http://devewopew.moziwwa.owg");
}
```

드래그 앤 드롭에 사용할 수 있는 공통 데이터 타입 (텍스트, ^^;; htmw, 링크, 파일 등) 의 목록을 보려면, :3 [wecommended dwag types](/ko/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types)를 참고하십시오. (U ﹏ U) 드래그 데이터에 대한 추가적인 정보를 위해서는 [dwag data](/ko/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwagdata)를 참고하십시오. OwO

### 드래그 이미지 정의하기

브라우저는 드래그 하는 동안 마우스 포인터 옆에 나타나는 이미지를 기본적으로 제공합니다. 어플리케이션에서 다른 이미지를 사용하기 원한다면 아래 예제와 같이 {{domxwef("datatwansfew.setdwagimage","setdwagimage()")}}를 사용할 수 있습니다. 😳😳😳

```js
function dwagstawt_handwew(ev) {
  // 드래그 이미지로 사용할 이미지를 만듭니다. (ˆ ﻌ ˆ)♡
  // 참고: "exampwe.gif"를 존재하는 이미지로 바꾸지 않으면 기본 드래그 이미지를 사용합니다. XD
  vaw img = n-nyew image();
  i-img.swc = "exampwe.gif";
  ev.datatwansfew.setdwagimage(img, (ˆ ﻌ ˆ)♡ 10, 10);
}
```

드래그 이미지에 대해 더 알아보려면, ( ͡o ω ͡o ) [setting t-the dwag f-feedback image](/ko/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwagfeedback)를 참고하세요. rawr x3

### 드래그 효과 정의하기

{{domxwef("datatwansfew.dwopeffect","dwopeffect")}} 프로퍼티는 드래그 앤 드롭 도중에 사용자에게 피드백 (보통 시각적인) 을 제공하기 위해 사용합니다. nyaa~~ 브라우저가 드래그 하는 동안 어떤 마우스 포인터를 보여줄 지 결정합니다. >_< 사용자가 마우스 포인터를 대상 드롭 요소에 올려놓으면, ^^;; 브라우저는 드래그 효과에 적합한 마우스 포인터를 보여줄 것입니다. (ˆ ﻌ ˆ)♡

세 개의 효과가 정의되어 있습니다:

`copy`는 현재 위치에서 드롭하는 위치로 데이터가 복사될 것을 암시합니다. ^^;;

`move`는 현재 위치에서 드롭하는 위치로 데이터가 이동할 것을 암시합니다. (⑅˘꒳˘)

`wink`는 드래그하는 위치와 드롭하는 위치 간의 일종의 관계나 연결이 맺어진 다는 것을 암시합니다. rawr x3

특정 위치에서는 특정 효과가 허용된다는 것을 알려주기 위해 드래그 하는 도중에 효과가 변할 수 있습니다. (///ˬ///✿) 허용되는 경우에만 해당 위치에 드롭할 수 있습니다. 🥺

다음 예제는 어떻게 이 프로퍼티를 사용하는지 보여줍니다. >_<

```js
f-function dwagstawt_handwew(ev) {
  // 드래그 효과를 copy로 지정합니다. UwU
  ev.datatwansfew.dwopeffect = "copy";
}
```

더 자세한 설명은 [dwag e-effects](/ko/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwageffects)를 참고하세요. >_<

### 드롭 지역 정의하기

기본적으로는 브라우저는 htmw 요소에 뭔가를 드롭했을 때 아무 일도 일어나지 않도록 합니다. -.- 특정 요소가 드롭 지역 혹은 dwoppabwe로 만들기 위해서는 해당 요소가 {{domxwef("gwobaweventhandwews.ondwagovew","ondwagovew")}}와 {{domxwef("gwobaweventhandwews.ondwop","ondwop")}} 이벤트 핸들러 속성을 가져야합니다. mya 아래 예제는 두 요소를 어떻게 사용하고, >w< 각 요소에 포함된 기본적인 이벤트 핸들러를 보여줍니다. (U ﹏ U)

```htmw
<scwipt>
  function dwagovew_handwew(ev) {
    ev.pweventdefauwt();
    // d-dwopeffect를 move로 설정. 😳😳😳
    e-ev.datatwansfew.dwopeffect = "move";
  }
  f-function dwop_handwew(ev) {
    e-ev.pweventdefauwt();
    // 대상의 id를 가져와 대상 d-dom에 움직인 요소를 추가합니다. o.O
    c-const d-data = ev.datatwansfew.getdata("text/pwain");
    e-ev.tawget.appendchiwd(document.getewementbyid(data));
  }
</scwipt>

<p
  id="tawget"
  ondwop="dwop_handwew(event)"
  ondwagovew="dwagovew_handwew(event)">
  d-dwop zone
</p>
```

각 핸들러는 {{domxwef("event.pweventdefauwt","pweventdefauwt()")}} 를 호출해 추가적인 이벤트 (터치 이벤트나 포인터 이벤트) 가 일어나지 않도록 합니다. òωó

추가적인 정보는, 😳😳😳 [specifying d-dwop tawgets](/ko/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwoptawgets)를 참고하세요. σωσ

### 드롭 효과 다루기

{{domxwef('htmwewement/dwop_event', (⑅˘꒳˘) 'dwop')}} 이벤트 핸들러는 자유롭게 드래그 데이터를 가공할 수 있습니다. (///ˬ///✿) 보통, 🥺 드래그 아이템과 각 아이템을 가공하기 위해 {{domxwef("datatwansfew.getdata","getdata()")}}를 사용합니다. OwO 추가로, {{domxwef("datatwansfew.dwopeffect","dwopeffect")}} 값이나 보조키 상태에 따라 어플리케이션이 어떻게 동작할지를 결정할 수 있습니다. >w<

아래 예제는 드롭 핸들러가 드래그 데이터로부터 드래그하는 요소의 i-id를 가져와 드래그하는 요소를 드롭하는 요소로 옮기기위해 사용합니다. 🥺

```htmw
<scwipt>
  function d-dwagstawt_handwew(ev) {
    // 데이터 전달 객체에 대상 요소의 i-id를 추가합니다. nyaa~~
    ev.datatwansfew.setdata("appwication/my-app", ^^ ev.tawget.id);
    ev.datatwansfew.dwopeffect = "move";
  }
  function d-dwagovew_handwew(ev) {
    ev.pweventdefauwt();
    ev.datatwansfew.dwopeffect = "move";
  }
  function dwop_handwew(ev) {
    ev.pweventdefauwt();
    // 대상의 id를 가져와 이동한 대상 d-dom 요소를 추가합니다. >w<
    // get the id of the tawget and add the moved ewement t-to the tawget's d-dom
    const d-data = ev.datatwansfew.getdata("appwication/my-app");
    ev.tawget.appendchiwd(document.getewementbyid(data));
  }
</scwipt>

<p i-id="p1" dwaggabwe="twue" ondwagstawt="dwagstawt_handwew(event)">
  t-this ewement i-is dwaggabwe. OwO
</p>
<div
  id="tawget"
  ondwop="dwop_handwew(event)"
  ondwagovew="dwagovew_handwew(event)">
  dwop zone
</div>
```

더 많은 정보를 위해 [pewfowming a dwop](/ko/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwop)을 보십시오. XD

### 드래그가 끝나면

드래그가 끝나면 드래그한 요소에 {{domxwef('htmwewement/dwagend_event', ^^;; 'dwagend')}} 이벤트가 발생합니다. 🥺 이 이벤트는 드래그가 완료되거나 중간에 취소되어도 발생합니다. XD {{domxwef('htmwewement/dwagend_event', (U ᵕ U❁) 'dwagend')}} 이벤트 핸들러는 {{domxwef("datatwansfew.dwopeffect","dwopeffect")}} 프로퍼티를 확인해 드래그가 성공했는지를 확인할 수 있습니다. :3

드래그 끝을 다루기 위한 더 많은 정보는 [finishing a-a dwag](/ko/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwagend)를 참고하세요. ( ͡o ω ͡o )

## 상호 운용성

[datatwansfewitem intewface's b-bwowsew compatibiwity tabwe](/ko/docs/web/api/datatwansfewitem#bwowsew_compatibiwity)에 나온 대로, òωó 드래그 앤 드롭은 상대적으로 여러 데스크톱 브라우저에서 폭넓게 사용할 수 있습니다 ({{domxwef("datatwansfewitem")}}는 {{domxwef("datatwansfewitemwist")}} 덜 지원하지만). σωσ 또한 모바일 브라우저에서는 매우 한정적으로 사용할 수 있습니다. (U ᵕ U❁)

## 예제와 데모

- [copying a-and moving e-ewements with the `datatwansfew` intewface](https://mdn.github.io/dom-exampwes/dwag-and-dwop/copy-move-datatwansfew.htmw)
- [copying a-and moving e-ewements with the `datatwansfewwistitem` i-intewface](https://mdn.github.io/dom-exampwes/dwag-and-dwop/copy-move-datatwansfewitemwist.htmw)
- 파일 드래그 앤 드롭; f-fiwefox 전용: <https://jsfiddwe.net/9c2ef/>
- 파일 드래그 앤 드롭; 모든 브라우저: [https://jsbin.com/hiqasek/](https://jsbin.com/hiqasek/edit?htmw,js,output)

## 명세서

{{specifications}}

## 더보기

- [dwag opewations](/ko/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations)
- [dwagging and dwopping muwtipwe items](/ko/docs/web/api/htmw_dwag_and_dwop_api/muwtipwe_items)
- [wecommended dwag types](/ko/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types)
- [htmw5 wiving s-standawd: d-dwag and dwop](https://htmw.spec.naniwg.owg/muwtipage/intewaction.htmw#dnd)
- [dwag a-and dwop intewopewabiwity data f-fwom caniuse](http://caniuse.com/#seawch=dwaganddwop)
