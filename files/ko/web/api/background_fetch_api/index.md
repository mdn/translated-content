---
title: Background Fetch API
slug: Web/API/Background_Fetch_API
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{DefaultAPISidebar("Background Fetch API")}} {{SeeCompatTable}}

**Background Fetch API**는 영화, 오디오 파일, 소프트웨어 등 상당한 시간이 소요될 수 있는 다운로드를 관리하는 방법을 제공합니다.

## 개념 및 사용법

웹 애플리케이션에서 사용자가 대용량 파일을 다운로드해야 하는 경우, 다운로드가 완료되려면 사용자가 페이지에 계속 연결되어 있어야 한다는 문제가 종종 발생합니다. 연결이 끊어지면 탭을 닫거나 다운로드가 중지되는 페이지에서 다른 곳으로 이동합니다.

{{domxref("Background Synchronization API")}}는 서비스 워커가 사용자가 연결될 때까지 처리를 연기하는 방법을 제공하지만, 대용량 파일 다운로드와 같이 오래 실행되는 작업에는 사용할 수 없습니다. 백그라운드 동기화를 사용하려면 가져오기(fetch)가 완료될 때까지 서비스 워커가 활성 상태를 유지해야 하며, 배터리 수명을 절약하고 백그라운드에서 원치 않는 작업이 발생하는 것을 방지하기 위해 브라우저는 어느 시점에서 작업을 종료합니다.

Background Fetch API는 이 문제를 해결합니다. 웹 개발자가 사용자가 비디오 파일을 다운로드하기 위해 버튼을 클릭할 때와 같이 백그라운드에서 일부 가져오기(fetch)를 수행하도록 브라우저에 지시하는 방법을 만듭니다. 그러면 브라우저는 사용자가 볼 수 있는 방식으로 가져오기(fetch)를 수행하여 사용자에게 진행 상황을 표시하고 다운로드를 취소하는 방법을 제공합니다. 다운로드가 완료되면 브라우저는 서비스 워커를 열고, 이 시점에서 애플리케이션은 필요한 경우 응답을 통해 무언가를 수행할 수 있습니다.

Background Fetch API는 사용자가 오프라인 상태에서 프로세스를 시작하면 가져오기(fetch)를 수행할 수 있도록 합니다. 연결되면 프로세스가 시작됩니다. 사용자가 오프라인 상태가 되면 사용자가 다시 켜질 때까지 프로세스가 일시 중지됩니다.

## 인터페이스

- {{domxref("BackgroundFetchManager")}}
  - : 키는 백그라운드 가져오기(fetch)의 ID이며, 값은 {{domxref("BackgroundFetchRegistration")}} 객체인 맵입니다.
- {{domxref("BackgroundFetchRegistration")}}
  - : 백그라운드 가져오기를 나타냅니다.
- {{domxref("BackgroundFetchRecord")}}
  - : 개별 가져오기 요청 및 응답을 나타냅니다.
- {{domxref("BackgroundFetchEvent")}}
  - : `onbackgroundfetchabort` 및 `onbackgroundfetchclick`에 전달된 이벤트 유형입니다.
- {{domxref("BackgroundFetchUpdateUIEvent")}}
  - : `onbackgroundfetchsuccess` 및 `onbackgroundfetchfail`에 전달된 이벤트 유형입니다.

## 예제

백그라운드 가져오기를 사용하기 전에 브라우저 지원 여부를 확인하세요

```js
if (!("BackgroundFetchManager" in self)) {
  // 대체 다운로드 제공
}
```

백그라운드 불러오기를 사용하려면 등록된 서비스 워커가 필요합니다. 그런 다음 `backgroundFetch.fetch()`를 호출하여 불러오기를 수행합니다. 그러면 {{domxref("BackgroundFetchRegistration")}}으로 해결되는 프로미스가 반환됩니다.

백그라운드 가져오기는 여러 파일을 가져올 수 있습니다. 이 예제에서는 MP3와 JPEG를 요청합니다. 이렇게 하면 사용자가 하나의 항목으로 간주하는 파일 패키지(예: 팟캐스트와 아트웍)를 한 번에 다운로드할 수 있습니다.

```js
navigator.serviceWorker.ready.then(async (swReg) => {
  const bgFetch = await swReg.backgroundFetch.fetch(
    "my-fetch",
    ["/ep-5.mp3", "ep-5-artwork.jpg"],
    {
      title: "Episode 5: Interesting things.",
      icons: [
        {
          sizes: "300x300",
          src: "/ep-5-icon.png",
          type: "image/png",
        },
      ],
      downloadTotal: 60 * 1024 * 1024,
    },
  );
});
```

백그라운드 가져오기를 구현하는 데모 애플리케이션은 [여기](https://glitch.com/edit/#!/bgfetch-http203?path=public%2Fclient.js%3A191%3A45)에서 찾을 수 있습니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Background Fetch 소개](https://developer.chrome.com/blog/background-fetch/)
- [Background Fetch - HTTP 203](https://www.youtube.com/watch?v=cElAoxhQz6w)
