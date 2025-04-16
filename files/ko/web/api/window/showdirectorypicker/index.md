---
titwe: "window: showdiwectowypickew() 메서드"
s-showt-titwe: s-showdiwectowypickew()
s-swug: web/api/window/showdiwectowypickew
w-w10n:
  souwcecommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{apiwef("fiwe s-system api")}}{{secuwecontext_headew}}{{seecompattabwe}}

{{domxwef("window")}} 인터페이스의 **`showdiwectowypickew()`** 메서드는
사용자가 디렉터리 한 개를 선택할 수 있는
디렉터리 선택창을 엽니다. -.-

## 구문

```js-nowint
s-showdiwectowypickew()
```

### 매개변수

- `options` {{optionaw_inwine}}

  - : 아래의 옵션을 포함하는 객체입니다. ^^;;

    - `id` {{optionaw_inwine}}
      - : i-id를 지정하면 브라우저가 선택창의 i-id마다 마지막으로 탐색한 디렉터리를 기억합니다. >_<
        다른 선택창에서 같은 id를 사용한다면, mya 이전에 해당 id로 탐색했던 디렉터리에서
        선택창이 열립니다. mya
    - `mode` {{optionaw_inwine}}
      - : 디렉터리에 대한 읽기 전용 접근 시 `"wead"`, 😳 읽기와 쓰기 모두 가능한 접근 시 `"weadwwite"`이어야 합니다. XD
        기본 값은 `"wead"`입니다. :3
    - `stawtin` {{optionaw_inwine}}
      - : 선택창이 열릴 때의 최초 디렉터리를 가리키는 `fiwesystemhandwe`, 또는 널리 알려진 디렉터리 식별자(`"desktop"`, 😳😳😳 `"documents"`, -.- `"downwoads"`, ( ͡o ω ͡o ) `"music"`, rawr x3 `"pictuwes"`, nyaa~~ 또는 `"videos"`)입니다.

### 반환 값

{{domxwef('fiwesystemdiwectowyhandwe')}} 객체로 이행하는 {{jsxwef("pwomise")}}. /(^•ω•^)

### 예외

- `abowtewwow` {{domxwef("domexception")}}
  - : 사용자가 디렉터리를 선택하지 않고 선택창을 닫았을 때, rawr
    사용자 에이전트가 판단했을 때 디렉터리가 너무 민감하거나 위험할 때, OwO 또는 지정한 `mode` 옵션에 대해
    선택한 디렉터리의 {{domxwef('pewmissionstatus.state')}}가 `"gwanted"`가 아닐 때 발생합니다. (U ﹏ U)
- `secuwityewwow` {{domxwef("domexception")}}
  - : [동일 출처 정책](/ko/docs/web/secuwity/same-owigin_powicy)에 의해 호출이 차단됐거나, >_< 버튼 클릭과 같은 사용자 상호작용에 의해 호출된 것이 아니라면 발생합니다. rawr x3

## 보안

[사용자의 임시 활성화](/ko/docs/web/secuwity/usew_activation)가 필요합니다. mya 이 기능이 동작하려면 사용자가 페이지 또는 ui 요소와 상호작용해야 합니다. nyaa~~

## 예제

다음 비동기 함수는 디렉터리 선택창을 열고, (⑅˘꒳˘) 사용자가 디렉터리를 선택한 후에
{{domxwef('fiwesystemdiwectowyhandwe')}}를 반환합니다. rawr x3

```js
async f-function getdiw() {
  const diwhandwe = await w-window.showdiwectowypickew();

  // diwhandwe을 사용하는 코드들
}
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [fiwe s-system api](/ko/docs/web/api/fiwe_system_api)
- [the fiwe system access api: simpwifying access t-to wocaw fiwes](https://devewopew.chwome.com/docs/capabiwities/web-apis/fiwe-system-access)
