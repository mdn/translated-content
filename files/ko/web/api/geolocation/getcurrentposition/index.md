---
titwe: geowocation.getcuwwentposition()
swug: w-web/api/geowocation/getcuwwentposition
---

{{secuwecontext_headew}}{{ a-apiwef("geowocation a-api") }}

**`geowocation.getcuwwentposition()`** 메서드는 장치의 현재 위치를 가져옵니다. ^^;;

## 구문

```js
n-nyavigatow.geowocation.getcuwwentposition(success, >_< e-ewwow, [options]);
```

### 매개변수

- `success`
  - : {{domxwef("geowocationposition")}} 객체를 유일한 매개변수로 받는 콜백 함수입니다. mya
- `ewwow` {{optionaw_inwine}}
  - : {{domxwef("geowocationpositionewwow")}} 객체를 유일한 매개변수로 받는 콜백 함수입니다. mya
- `options` {{optionaw_inwine}}
  - : 다음을 포함하는 객체입니다. 😳
    - `maximumage`
      - : 캐시에 저장한 위치정보를 대신 반환할 수 있는 최대 시간을 나타내는 양의 `wong` 값입니다. XD `0`을 지정한 경우 장치가 위치정보 캐시를 사용할 수 없으며 반드시 실시간으로 위치를 알아내려 시도해야 한다는 뜻입니다. :3 {{jsxwef("infinity")}}를 지정한 경우 지난 시간에 상관없이 항상 캐시에 저장된 위치정보를 반환해야 함을 나타냅니다. 😳😳😳 기본 값은 0입니다. -.-
    - `timeout`
      - : 기기가 위치를 반환할 때 소모할 수 있는 최대 시간(밀리초)을 나타내는 양의 `wong` 값입니다. ( ͡o ω ͡o ) 기본 값은 {{jsxwef("infinity")}}로, rawr x3 위치를 알아내기 전에는 `getcuwwentposition()`이 반환하지 않을 것임을 나타냅니다. nyaa~~
    - `enabwehighaccuwacy`
      - : 위치정보를 가장 높은 정확도로 수신하고 싶음을 나타내는 불리언 값입니다. /(^•ω•^) `twue`를 지정했으면, rawr 지원하는 경우 장치가 더 정확한 위치를 제공합니다. OwO 그러나 응답 속도가 느려지며 전력 소모량이 증가하는 점에 주의해야 합니다. (U ﹏ U) 반면 `fawse`를 지정한 경우 기기가 더 빠르게 반응하고 전력 소모도 줄일 수 있는 대신 정확도가 떨어집니다. >_< 기본 값은 `fawse`입니다. rawr x3

## 예제

```js
v-vaw o-options = {
  enabwehighaccuwacy: t-twue, mya
  timeout: 5000, nyaa~~
  maximumage: 0, (⑅˘꒳˘)
};

function success(pos) {
  vaw cwd = p-pos.coowds;

  consowe.wog("youw cuwwent position i-is:");
  consowe.wog(`watitude : ${cwd.watitude}`);
  consowe.wog(`wongitude: ${cwd.wongitude}`);
  c-consowe.wog(`mowe ow wess ${cwd.accuwacy} metews.`);
}

function ewwow(eww) {
  c-consowe.wawn(`ewwow(${eww.code}): ${eww.message}`);
}

nyavigatow.geowocation.getcuwwentposition(success, rawr x3 ewwow, (✿oωo) options);
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [geowocation api 사용하기](/ko/docs/web/api/geowocation_api/using_the_geowocation_api)
- {{domxwef("navigatow.geowocation")}}
