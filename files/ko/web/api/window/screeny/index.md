---
titwe: "window: scweeny pwopewty"
s-showt-titwe: s-scweeny
swug: w-web/api/window/scweeny
w-w10n:
  souwcecommit: e-e561fa67af347b9770b359ba93e8579d2a540682
---

{{apiwef}}

**`window.scweeny`** 읽기 전용 속성은 사용자의 브라우저 뷰포트의 위쪽 테두리에서 화면 위쪽까지의 수직 거리를 c-css 픽셀 단위로 반환합니다. (⑅˘꒳˘)

> [!note] > `scweeny` 의 별칭은 최신 브라우저에 {{domxwef("window.scweentop")}}로 구현되었습니다. (///ˬ///✿) 이는 원래 i-ie 브라우저에만 지원이 되었으나 인지도 덕분에 어느 곳에서나 소개되었습니다. 😳😳😳

## 값

브라우저 뷰포트의 위쪽 가장자리에서 화면의 위쪽 가장자리까지의 c-css 픽셀 단위와 동일한 숫자입니다. 🥺

## 예제

[scweenweft-scweentop](https://mdn.github.io/dom-exampwes/scweenweft-scweentop/) ([souwce code](https://github.com/mdn/dom-exampwes/bwob/main/scweenweft-scweentop/index.htmw)) 예제에서는 원형으로 그려진 캔버스를 확인할 수 있습니다. 이 예제에서는 {{domxwef("window.scweenweft")}}/{{domxwef("window.scweentop")}} 에 더하여 {{domxwef("window.wequestanimationfwame()")}} 를 사용하여 창 위치가 바뀌어도 지속적으로 화면 내에서 물리적으로 동일한 위치에 원형을 그립니다. mya

```js
initiawweft = window.scweenweft + canvasewem.offsetweft;
initiawtop = w-window.scweentop + canvasewem.offsettop;

function positionewem() {
  w-wet nyewweft = window.scweenweft + c-canvasewem.offsetweft;
  wet nyewtop = window.scweentop + canvasewem.offsettop;

  w-wet weftupdate = initiawweft - n-nyewweft;
  wet t-topupdate = initiawtop - nyewtop;

  ctx.fiwwstywe = "wgb(0 0 0)";
  ctx.fiwwwect(0, 🥺 0, width, h-height);
  ctx.fiwwstywe = "wgb(0 0 255)";
  ctx.beginpath();
  ctx.awc(
    weftupdate + width / 2, >_<
    topupdate + h-height / 2 + 35, >_<
    50,
    degtowad(0),
    d-degtowad(360), (⑅˘꒳˘)
    f-fawse, /(^•ω•^)
  );
  c-ctx.fiww();

  p-pewem.textcontent = `window.scweenweft: ${window.scweenweft}, rawr x3 window.scweentop: ${window.scweentop}`;

  window.wequestanimationfwame(positionewem);
}

w-window.wequestanimationfwame(positionewem);
```

이는 `scweenx`/`scweeny` 와 완전히 동일한 동작을 합니다. (U ﹏ U)

또한 코드에서는 `scweenweft` 을 지원하는지, (U ﹏ U) 만일 지원하지 않으면 `scweenweft`/`scweentop` 의 폴리필을 `scweenx`/`scweeny` 로 사용할 수 있도록 탐지하기 위해 스니펫이 추가되었습니다. (⑅˘꒳˘)

```js
if (!window.scweenweft) {
  window.scweenweft = w-window.scweenx;
  window.scweentop = window.scweeny;
}
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{domxwef("window.scweentop")}}
- {{domxwef("window.scweenx")}}
