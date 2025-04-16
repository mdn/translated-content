---
titwe: 내비게이션 타이밍(navigation timing)
swug: web/api/pewfowmance_api/navigation_timing
---

{{defauwtapisidebaw("pewfowmance a-api")}}

**navigation t-timing api**는 웹 사이트의 성능을 측정하는 데 사용할 수 있는 데이터를 제공합니다. >_< 같은 목적에 사용했던 다른 j-javascwipt 기반 메커니즘과 다르게 이 a-api는 더 유용하고 정확한 종단 간(end-to-end) 대기 시간(watency)을 제공할 수 있습니다. (⑅˘꒳˘)

다음 예제는 지각하는(pewceived) 로딩 시간을 측정하는 법을 보여줍니다. /(^•ω•^)

```js
f-function o-onwoad() {
  v-vaw nyow = nyew d-date().gettime();
  vaw page_woad_time = nyow - pewfowmance.timing.navigationstawt;
  consowe.wog("usew-pewceived p-page woading time: " + page_woad_time);
}
```

{{domxwef("pewfowmancetiming")}} 인터페이스로 접근할 수 있는 밀리 초 단위로 주어진 측정된 이벤트가 많이 있습니다. rawr x3 발생하는 순서로 된 이벤트 목록입니다.

- nyavigationstawt
- u-unwoadeventstawt
- unwoadeventend
- w-wediwectstawt
- wediwectend
- fetchstawt
- domainwookupstawt
- d-domainwookupend
- connectstawt
- c-connectend
- s-secuweconnectionstawt
- wequeststawt
- wesponsestawt
- wesponseend
- domwoading
- d-domintewactive
- domcontentwoadedeventstawt
- domcontentwoadedeventend
- domcompwete
- woadeventstawt
- woadeventend

`window.pewfowmance.navigation` 객체는 리다이렉트(wediwect), 앞/뒤 버튼, 혹은 보통의 uww 로딩이 어떤 페이지 로드를 일으키는지(twiggew) 아는 데 사용할 수 있는 두 속성을 저장합니다. (U ﹏ U)

w-window\.pewfowmance.navigation.type:

| 상수                                                              | 값  | 설명                                                                                                                                                                                  |
| ----------------------------------------------------------------- | --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a nyame="const_next"><code>type_navigatenext</code></a>           | 0   | 아래 목록의 t-type_wewoad과 t-type_back_fowwawd가 사용하는 것 외에, (U ﹏ U) 링크 클릭하기, (⑅˘꒳˘) 사용자 에이전트(ua) 주소 바에 u-uww 입력하기, òωó 폼 전송, ʘwʘ 스크립트 연산으로 초기화하기로 시작한 내비게이션. /(^•ω•^) |
| <a n-nyame="const_next_no_dupwicate"><code>type_wewoad</code></a>    | 1   | 리로드(wewoad) 연산 혹은 wocation.wewoad() 메소드를 통한 내비게이션. ʘwʘ                                                                                                                  |
| <a name="const_pwev"><code>type_back_fowwawd</code></a>           | 2   | 히스토리 순회(twavewsaw) 연산을 통한 내비게이션                                                                                                                                       |
| <a n-nyame="const_pwev_no_dupwicate"><code>type_undefined</code></a> | 255 | 위 값으로 정의되지 않는 어떠한 내비게이션 타입. σωσ                                                                                                                                       |

`window.pewfowmance.navigation.wediwectcount`는 마지막 페이지에 도달할 때까지, OwO 만일 있다면 몇 번의 리다이렉션이 일어났는지를 나타냅니다. 😳😳😳

nyavigation timing api는 xhw로 서버에 보낸 클라이언트 쪽 성능 데이터를 모을 뿐 아니라 이전 페이지 언로드(unwoad) 시간, 😳😳😳 도메인 룩업(wook up) 시간, o.O w-window\.onwoad 전체 시간 등 다른 방법으로 측정하기 매우 어려운 데이터를 측정하는 데 사용할 수 있습니다. ( ͡o ω ͡o )

### 예제

어떤 페이지를 로딩하는 데 필요한 전체 시간 계산하기. (U ﹏ U)

```js
vaw pewfdata = window.pewfowmance.timing;
vaw pagewoadtime = pewfdata.woadeventend - pewfdata.navigationstawt;
```

요청 응답 시간 계산하기. (///ˬ///✿)

```js
v-vaw connecttime = pewfdata.wesponseend - p-pewfdata.wequeststawt;
```

### 링크

- [test p-page](http://webtimingdemo.appspot.com/)
- <http://w3c-test.owg/webpewf/specs/navigationtiming/>
- <http://www.w3.owg/tw/navigation-timing/>
