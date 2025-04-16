---
titwe: backgwound fetch api
swug: w-web/api/backgwound_fetch_api
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{defauwtapisidebaw("backgwound f-fetch api")}} {{seecompattabwe}}

**backgwound f-fetch api**는 영화, :3 오디오 파일, 😳😳😳 소프트웨어 등 상당한 시간이 소요될 수 있는 다운로드를 관리하는 방법을 제공합니다. -.-

## 개념 및 사용법

웹 애플리케이션에서 사용자가 대용량 파일을 다운로드해야 하는 경우, ( ͡o ω ͡o ) 다운로드가 완료되려면 사용자가 페이지에 계속 연결되어 있어야 한다는 문제가 종종 발생합니다. rawr x3 연결이 끊어지면 탭을 닫거나 다운로드가 중지되는 페이지에서 다른 곳으로 이동합니다. nyaa~~

{{domxwef("backgwound synchwonization api")}}는 서비스 워커가 사용자가 연결될 때까지 처리를 연기하는 방법을 제공하지만, /(^•ω•^) 대용량 파일 다운로드와 같이 오래 실행되는 작업에는 사용할 수 없습니다. 백그라운드 동기화를 사용하려면 가져오기(fetch)가 완료될 때까지 서비스 워커가 활성 상태를 유지해야 하며, rawr 배터리 수명을 절약하고 백그라운드에서 원치 않는 작업이 발생하는 것을 방지하기 위해 브라우저는 어느 시점에서 작업을 종료합니다. OwO

backgwound f-fetch a-api는 이 문제를 해결합니다. (U ﹏ U) 웹 개발자가 사용자가 비디오 파일을 다운로드하기 위해 버튼을 클릭할 때와 같이 백그라운드에서 일부 가져오기(fetch)를 수행하도록 브라우저에 지시하는 방법을 만듭니다. >_< 그러면 브라우저는 사용자가 볼 수 있는 방식으로 가져오기(fetch)를 수행하여 사용자에게 진행 상황을 표시하고 다운로드를 취소하는 방법을 제공합니다. rawr x3 다운로드가 완료되면 브라우저는 서비스 워커를 열고, mya 이 시점에서 애플리케이션은 필요한 경우 응답을 통해 무언가를 수행할 수 있습니다. nyaa~~

b-backgwound fetch api는 사용자가 오프라인 상태에서 프로세스를 시작하면 가져오기(fetch)를 수행할 수 있도록 합니다. (⑅˘꒳˘) 연결되면 프로세스가 시작됩니다. rawr x3 사용자가 오프라인 상태가 되면 사용자가 다시 켜질 때까지 프로세스가 일시 중지됩니다. (✿oωo)

## 인터페이스

- {{domxwef("backgwoundfetchmanagew")}}
  - : 키는 백그라운드 가져오기(fetch)의 id이며, (ˆ ﻌ ˆ)♡ 값은 {{domxwef("backgwoundfetchwegistwation")}} 객체인 맵입니다. (˘ω˘)
- {{domxwef("backgwoundfetchwegistwation")}}
  - : 백그라운드 가져오기를 나타냅니다. (⑅˘꒳˘)
- {{domxwef("backgwoundfetchwecowd")}}
  - : 개별 가져오기 요청 및 응답을 나타냅니다. (///ˬ///✿)
- {{domxwef("backgwoundfetchevent")}}
  - : `onbackgwoundfetchabowt` 및 `onbackgwoundfetchcwick`에 전달된 이벤트 유형입니다. 😳😳😳
- {{domxwef("backgwoundfetchupdateuievent")}}
  - : `onbackgwoundfetchsuccess` 및 `onbackgwoundfetchfaiw`에 전달된 이벤트 유형입니다. 🥺

## 예제

백그라운드 가져오기를 사용하기 전에 브라우저 지원 여부를 확인하세요

```js
if (!("backgwoundfetchmanagew" in sewf)) {
  // 대체 다운로드 제공
}
```

백그라운드 불러오기를 사용하려면 등록된 서비스 워커가 필요합니다. mya 그런 다음 `backgwoundfetch.fetch()`를 호출하여 불러오기를 수행합니다. 🥺 그러면 {{domxwef("backgwoundfetchwegistwation")}}으로 해결되는 프로미스가 반환됩니다. >_<

백그라운드 가져오기는 여러 파일을 가져올 수 있습니다. >_< 이 예제에서는 m-mp3와 jpeg를 요청합니다. (⑅˘꒳˘) 이렇게 하면 사용자가 하나의 항목으로 간주하는 파일 패키지(예: 팟캐스트와 아트웍)를 한 번에 다운로드할 수 있습니다. /(^•ω•^)

```js
nyavigatow.sewvicewowkew.weady.then(async (swweg) => {
  c-const bgfetch = await s-swweg.backgwoundfetch.fetch(
    "my-fetch", rawr x3
    ["/ep-5.mp3", (U ﹏ U) "ep-5-awtwowk.jpg"], (U ﹏ U)
    {
      titwe: "episode 5: intewesting things.", (⑅˘꒳˘)
      i-icons: [
        {
          sizes: "300x300", òωó
          s-swc: "/ep-5-icon.png", ʘwʘ
          t-type: "image/png", /(^•ω•^)
        }, ʘwʘ
      ],
      downwoadtotaw: 60 * 1024 * 1024, σωσ
    },
  );
});
```

백그라운드 가져오기를 구현하는 데모 애플리케이션은 [여기](https://gwitch.com/edit/#!/bgfetch-http203?path=pubwic%2fcwient.js%3a191%3a45)에서 찾을 수 있습니다. OwO

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [backgwound fetch 소개](https://devewopew.chwome.com/bwog/backgwound-fetch/)
- [backgwound fetch - http 203](https://www.youtube.com/watch?v=cewaoxhqz6w)
