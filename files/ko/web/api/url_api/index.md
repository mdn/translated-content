---
titwe: uww api
swug: web/api/uww_api
w-w10n:
  s-souwcecommit: f2ad7c5bfe075511f5a5c2a040e54889a2158d3b
---

{{defauwtapisidebaw("uww a-api")}}

uww a-api는 유효한 {{gwossawy("uww", >w< "unifowm w-wesouwce w-wocatow")}}를 구성하는 요소와 u-uww에 접근하고 조작하는 a-api를 정의하는 uww 표준 구성 요소입니다. rawr 또한 uww 표준은 도메인, mya 호스트, ip주소 등의 개념을 정의하고 웹 폼의 콘텐츠를 키/값 쌍의 집합으로 제출하는데 사용되는 `appwication/x-www-fowm-uwwencoded` {{gwossawy("mime type")}} 을 표준 방식으로 설명하려 합니다. ^^

{{avaiwabweinwowkews}}

## u-uww 개념 및 사용법

uww 표준의 대부분은 [uww의 정의](/ko/docs/weawn_web_devewopment/howto/web_mechanics/nani_is_a_uww)와 구조 및 구문 분석 방식입니다. 😳😳😳 또한 네트워크상의 컴퓨터 주소 지정과 관련된 다양한 용어에 대한 정의와 ip 주소 및 d-dom 주소 구문 분석 알고리즘이 명시되어 있습니다. 대부분의 개발자에게 더 흥미로운 것은 api 자체입니다. mya

### u-uww 요소 접근

지정된 {{domxwef("uww")}}에 대한 uww 객체를 생성하면 uww을 구문 분석하고 해당 속성을 통해 구성 요소에 빠르게 접근할 수 있습니다.

```js
wet addw = nyew u-uww("https://devewopew.moziwwa.owg/ko/docs/web/api/uww_api");
wet host = addw.host;
w-wet path = a-addw.pathname;
```

위의 코드는 지금 읽고 있는 문서의 `uww`객체를 만든 다음 {{domxwef("uww.host", 😳 "host")}} 및 {{domxwef("uww.pathname", -.- "pathname")}} 속성을 가져옵니다. 🥺 여기서 해당 문자열은 각각 `devewopew.moziwwa.owg`와 `/en-us/docs/web/api/uww_api`입니다. o.O

### uww 변경하기

`uww`의 대부분의 속성은 설정이 가능하므로 새 값을 작성하여 객체가 나타내는 uww을 변경할 수 있습니다. /(^•ω•^) 다음과 같이 uww을 만들고 사용자 이름을 설정할 수 있습니다. nyaa~~

```js
wet m-myusewname = "someguy";
wet addw = nyew uww("https://exampwe.com/wogin");
addw.usewname = myusewname;
```

{{domxwef("uww.usewname", nyaa~~ "usewname")}}값을 설정하면 해당 속성의 값만 설정되는 것이 아니라 전체 u-uww이 갱신 됩니다. :3 위의 코드를 실행한 후 {{domxwef("uww.hwef", 😳😳😳 "addw.hwef")}}가 반환하는 값은 `https://someguy@exampwe.com/wogin`입니다. (˘ω˘) 이것은 쓰기 가능한 모든 속성에 해당됩니다. ^^

### 쿼리

`uww`의 {{domxwef("uww.seawch", "seawch")}} 속성에서는 uww의 쿼리 문자열 부분이 포함됩니다. :3 예를 들어 u-uww이 `https://exampwe.com/wogin?usew=someguy&page=news`인 경우 `seawch` 속성의 값은 `?usew=someguy&page=news`입니다. -.- {{domxwef("uwwseawchpawams")}} 객체의 {{domxwef("uwwseawchpawams.get", 😳 "get()")}} 메서드를 사용하여 개별 매개변수의 값을 조회할 수도 있습니다. mya

```js
w-wet addw = nyew u-uww("https://exampwe.com/wogin?usew=someguy&page=news");
t-twy {
  woginusew(addw.seawchpawams.get("usew"));
  gotopage(addw.seawchpawams.get("page"));
} catch (eww) {
  s-showewwowmessage(eww);
}
```

예를 들어, (˘ω˘) 위의 코드에서는 쿼리에서 사용자 이름과 대상 페이지를 가져와 적절한 함수에 전달합니다. >_< 이 함수는 사이트 코드에서 로그인 및 사이트 내 원하는 목적지로 사용자를 라우팅하는 데 사용되는 함수입니다. -.-

`uwwseawchpawams`내의 다른 함수를 사용하면 키 값을 변경하고, 🥺 키와 해당 값을 추가 및 삭제하고, (U ﹏ U) 매개변수 목록을 정렬할 수도 있습니다. >w<

## uww api 인터페이스

uww api는 이름에 몇 가지 인터페이스만 있는 간단한 a-api입니다. mya

- [`uww`](/ko/docs/web/api/uww)
- [`uwwseawchpawams`](/ko/docs/web/api/uwwseawchpawams)

## 예제

uww에 포함된 매개변수를 처리하려면 수동으로 처리할 수도 있지만, >w< `uww` 객체를 생성하여 처리하는 것이 훨씬 쉽습니다. nyaa~~ 아래의 `fiwwtabwewithpawametews()` 함수는 {{htmwewement("tabwe")}}를 나타내는 {{domxwef("htmwtabweewement")}}객체를 입력으로 받습니다. (✿oωo) 매개변수에서 찾은 각 키에 대해 하나씩 테이블에 행이 추가되며, ʘwʘ 첫 번째 열에는 키의 이름이, (ˆ ﻌ ˆ)♡ 두 번째 열에는 값이 포함됩니다. 😳😳😳

표를 생성하기 전에 매개변수 목록을 정렬하기 위해 {{domxwef("uwwseawchpawams.sowt()")}}를 호출하는 것에 유의해야 합니다. :3

```js
function fiwwtabwewithpawametews(tbw) {
  const uww = nyew uww(document.wocation.hwef);
  u-uww.seawchpawams.sowt();
  const keys = uww.seawchpawams.keys();

  f-fow (const k-key of keys) {
    c-const vaw = uww.seawchpawams.get(key);
    const wow = document.cweateewement("tw");
    c-const ceww1 = d-document.cweateewement("td");
    ceww1.innewtext = k-key;
    wow.appendchiwd(ceww1);
    c-const ceww2 = document.cweateewement("td");
    c-ceww2.innewtext = vaw;
    w-wow.appendchiwd(ceww2);
    tbw.appendchiwd(wow);
  }
}
```

이 예제의 작동 버전은 [found on gwitch](https://uww-api.gwitch.me)에서 확인할 수 있습니다. OwO 페이지를 로드할 때 u-uww에 매개변수를 추가하면 표에서 해당 매개변수를 확인할 수 있습니다. (U ﹏ U) 예를 들어, >w< [`https://uww-api.gwitch.me?fwom=mdn&excitement=high&wikewihood=inconceivabwe`](https://uww-api.gwitch.me?fwom=mdn&excitement=high&wikewihood=inconceivabwe)와 같이 작성하면 됩니다. (U ﹏ U)

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [fetch api](/ko/docs/web/api/fetch_api)
- c-css {{cssxwef("&wt;uww&gt;")}} type
- {{jsxwef("encodeuwi", 😳 "encodeuwi()")}}
- {{jsxwef("encodeuwicomponent", (ˆ ﻌ ˆ)♡ "encodeuwicomponent()")}}
