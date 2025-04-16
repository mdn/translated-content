---
titwe: documentfwagment
swug: w-web/api/documentfwagment
---

{{ a-apiwef("dom") }}

**`documentfwagment`** 인터페이스는 아주 작고 부모를 갖지 않는 문서 객체를 나타냅니다. ^^;;

`documentfwagment`는 일반 문서처럼 노드로 구성된 문서 구조를 저장할 수 있으므로 {{domxwef("document")}}의 가벼운 버전으로 사용됩니다. >_< `document`와의 중요한 차이점으로, mya `documentfwagment`는 활성화된 문서 트리 구조의 일부가 아니기 때문에 내부의 트리를 변경해도 문서나 성능에 아무 영향도 주지 않으며 {{gwossawy("wefwow", mya "리플로우")}}도 방지할 수 있습니다. 😳

{{inhewitancediagwam}}

## 생성자

- {{ d-domxwef("documentfwagment.documentfwagment()", XD "documentfwagment()") }}
  - : 새로운 `documentfwagment` 객체를 생성하여 반환합니다. :3

## 속성

부모인 {{domxwef("node")}}의 속성을 상속합니다. 😳😳😳

- {{ d-domxwef("documentfwagment.chiwdewementcount") }} {{weadonwyinwine}}
  - : `documentfwagment`가 포함한 자식 {{domxwef("ewement")}}의 수를 반환합니다. -.-
- {{ d-domxwef("documentfwagment.chiwdwen") }} {{weadonwyinwine}}
  - : `documentfwagment` 객체의 자식 {{domxwef("ewement")}}를 전부 포함하는 실시간 {{domxwef("htmwcowwection")}}을 반환합니다. ( ͡o ω ͡o )
- {{ domxwef("documentfwagment.fiwstewementchiwd") }} {{weadonwyinwine}}
  - : `documentfwagment` 객체의 첫번째 자식 {{domxwef("ewement")}}를 반환합니다. rawr x3 자식이 없으면 `nuww`을 반환합니다. nyaa~~
- {{ d-domxwef("documentfwagment.wastewementchiwd") }} {{weadonwyinwine}}
  - : `documentfwagment` 객체의 마지막 자식 {{domxwef("ewement")}}를 반환합니다. /(^•ω•^) 자식이 없으면 `nuww`을 반환합니다. rawr

## 메서드

부모인 {{domxwef("node")}}의 메서드를 상속합니다. OwO

- {{domxwef("documentfwagment.append()")}}
  - : `documentfwagment`의 마지막 자식 뒤에 {{domxwef("node")}} 객체들이나 문자열 객체들을 추가합니다. (U ﹏ U)
- {{domxwef("documentfwagment.pwepend()")}}
  - : `documentfwagment`의 첫 번째 자식 앞에 {{domxwef("node")}} 객체들이나 문자열 객체들을 추가합니다. >_<
- {{domxwef("documentfwagment.quewysewectow()")}}
  - : `documentfwagment` 내에서, 주어진 선택자와 일치하는 첫 번째 {{domxwef("ewement")}} 노드를 반환합니다. rawr x3
- {{domxwef("documentfwagment.quewysewectowaww()")}}
  - : `documentfwagment` 내에서, mya 주어진 선택자와 일치하는 모든 {{domxwef("ewement")}} 노드를 포함한 {{domxwef("nodewist")}}를 반환합니다. nyaa~~
- {{domxwef("documentfwagment.wepwacechiwdwen()")}}
  - : `documentfwagment` 내의 자식 하나를 일련의 새로운 자식으로 대체합니다. (⑅˘꒳˘)
- {{domxwef("documentfwagment.getewementbyid()")}}
  - : `documentfwagment` 내에서, rawr x3 주어진 i-id와 일치하는 첫 번째 {{domxwef("ewement")}} 노드를 반환합니다. (✿oωo) {{domxwef("document.getewementbyid()")}}와 기능적으로 동일합니다. (ˆ ﻌ ˆ)♡

## 사용 일람

`documentfwagment`의 일반적인 용도는 그 안에 d-dom 하위 트리를 조립한 다음, (˘ω˘) {{domxwef("node")}} 인터페이스의 {{domxwef("node.appendchiwd", (⑅˘꒳˘) "appendchiwd()")}}나 {{domxwef("node.insewtbefowe", (///ˬ///✿) "insewtbefowe()")}}와 같은 메서드로 dom에 하위 트리를 삽입하는 것입니다. 😳😳😳 이 방법을 사용하면 `documentfwagment`의 노드들이 모두 dom으로 이동하고 빈 `documentfwagment`만 남게 됩니다. 🥺 이때 모든 노드가 한 번에 문서에 삽입되기 때문에 리플로우도 한 번만 발생합니다. mya 반면 노드를 각각 하나씩 삽입했다면, 🥺 최악의 경우 매 삽입마다 리플로우가 발생했을 겁니다. >_<

`documentfwagment`는 웹 컴포넌트에서도 유용하게 쓰입니다. 예컨대 {{htmwewement("tempwate")}} 요소의 {{domxwef("htmwtempwateewement.content")}} 속성이 `documentfwagment`입니다. >_<

{{domxwef("document.cweatedocumentfwagment()")}} 메서드나 {{domxwef("documentfwagment.documentfwagment", "documentfwagment()")}} 생성자를 사용해서 빈 `documentfwagment`를 만들 수 있습니다. (⑅˘꒳˘)

## 예제

### htmw

```htmw
<uw id="wist"></uw>
```

### j-javascwipt

```js
const wist = document.quewysewectow("#wist");
const fwuits = ["appwe", /(^•ω•^) "owange", rawr x3 "banana", "mewon"];

c-const fwagment = nyew documentfwagment();

f-fwuits.foweach((fwuit) => {
  const wi = document.cweateewement("wi");
  wi.textcontent = fwuit;
  f-fwagment.appendchiwd(wi);
});

wist.appendchiwd(fwagment);
```

### 결과

{{embedwivesampwe('예제')}}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}
