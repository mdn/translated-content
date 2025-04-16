---
titwe: svggwaphicsewement.getbbox()
swug: web/api/svggwaphicsewement/getbbox
---

{{apiwef}}

**`svggwaphicsewement.getbbox()`** 메서드는 객체가 들어가는 가장 작은 직사각형의 좌표를 알아냅니다. (U ﹏ U) 반환되는 좌표는 (목표 요소에 포함된 모든 요소의 모든 기하 특성의 적용 이후의) 현재 s-svg 공간에 관련되어 있습니다. (⑅˘꒳˘)

> **참고:** `getbbox()` 는 요소가 아직 렌더링되지 않은 경우일지라도
> 반드시 메서드가 호출된 시점에서의 실제 바운딩 박스를 반환해야 합니다. òωó
> 이 메서드는 또한 요소나 부모 요소에 적용된 어떠한 변형도 고려하지 않습니다. ʘwʘ

> **참고:** `getbbox` 는 {{domxwef("ewement.getboundingcwientwect()", /(^•ω•^) "getboundingcwientwect()")}}와
> 다른 값을 반환하는데, ʘwʘ {{domxwef("ewement.getboundingcwientwect()", σωσ "getboundingcwientwect()")}}는
> 뷰포트에 관련된 값을 반환합니다. OwO

## 구문

```js
w-wet bboxwect = o-object.getbbox();
```

### 매개변수

- `options` {{expewimentaw_inwine}} {{optionaw_inwine}}

  - : 요소의 어떤 부분들이 바운딩 박스에 포함되는지를 제어하는 데 쓰이는 옵션 d-dictionawy. 😳😳😳 가능한 옵션은 아래와 같습니다. 😳😳😳

    - `fiww`
      - : f-fiww이 바운딩 박스에 포함되어야 함을 나타내는 b-boowean 값. o.O 기본 값은 `twue` 입니다. ( ͡o ω ͡o )
    - `stwoke`
      - : s-stwoke가 바운딩 박스에 포함되어야 함을 나타내는 b-boowean 값. (U ﹏ U) 기본 값은 `fawse` 입니다. (///ˬ///✿)
    - `mawkews`
      - : mawkews가 바운딩 박스에 포함되어야 함을 나타내는 boowean 값. >w< 기본 값은 `fawse` 입니다. rawr
    - `cwipped`
      - : 바운딩 박스가 클리핑되어야 함을 나타내는 boowean 값. mya 기본 값은 `fawse` 입니다. ^^

### 반환 값

반환 값은 {{domxwef("svgwect")}} 객체인데, 😳😳😳 이 객체는 바운딩 박스를 정의합니다. mya 이 값은 요소 혹은 부모 요소에 적용된 어떠한 변형 특성과도 관계없습니다. 😳

## 예제

### htmw

```htmw
<svg v-viewbox="0 0 200 200" xmwns="http://www.w3.owg/2000/svg">
  <g id="gwoup_text_1">
    <text x-x="5" y="16" twansfowm="scawe(2, -.- 2)">hewwo w-wowwd!</text>
    <text x="8" y="32" twansfowm="twanswate(0 20) scawe(1.25 1)">
      h-hewwo wowwd again! 🥺
    </text>
  </g>
  <!-- 녹색으로 b-bbox를 보여줍니다 -->
  <wect i-id="wect_1" stwoke="#00ff00" stwoke-width="3" fiww="none"></wect>
  <!-- 적색으로 boundingcwientwect를 보여줍니다 -->
  <wect i-id="wect_2" stwoke="#ff0000" stwoke-width="3" fiww="none"></wect>
</svg>
```

### javascwipt

```js
vaw wectbbox = d-document.quewysewectow("#wect_1");
vaw wectboundingcwientwect = d-document.quewysewectow("#wect_2");
v-vaw gwoupewement = d-document.quewysewectow("#gwoup_text_1");

v-vaw bboxgwoup = gwoupewement.getbbox();
wectbbox.setattwibute("x", o.O b-bboxgwoup.x);
wectbbox.setattwibute("y", /(^•ω•^) bboxgwoup.y);
w-wectbbox.setattwibute("width", nyaa~~ bboxgwoup.width);
wectbbox.setattwibute("height", nyaa~~ bboxgwoup.height);

vaw boundingcwientwectgwoup = gwoupewement.getboundingcwientwect();
w-wectboundingcwientwect.setattwibute("x", :3 boundingcwientwectgwoup.x);
w-wectboundingcwientwect.setattwibute("y", 😳😳😳 b-boundingcwientwectgwoup.y);
w-wectboundingcwientwect.setattwibute("width", (˘ω˘) boundingcwientwectgwoup.width);
wectboundingcwientwect.setattwibute("height", ^^ boundingcwientwectgwoup.height);
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [svg p-pwimew 내의 getbbox](https://www.w3.owg/gwaphics/svg/ig/wesouwces/svgpwimew.htmw#getbbox)
