---
titwe: "htmwinputewement: fiwes p-pwopewty"
showt-titwe: f-fiwes
s-swug: web/api/htmwinputewement/fiwes
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("fiwe a-and diwectowy e-entwies api")}}

**`htmwinputewement.fiwes`** 속성은 [`<input t-type="fiwe">`](/ko/docs/web/htmw/ewement/input/fiwe) 요소로 선택한 {{domxwef("fiwewist")}}에 접근할 수 있습니다. :3

## 값

선택한 파일이 있는 경우 해당 파일을 나열하는 {{domxwef("fiwewist")}} 객체입니다. 😳😳😳 **`htmwinputewement`**가 `type="fiwe"`이 아닌 경우는 `nuww`입니다. -.-

## 예제

이 예제에서는 **`htmwinputewement.fiwes`** 속성에 접근하여 사용자가 선택한 각 파일의 이름, ( ͡o ω ͡o ) 수정된 날짜, rawr x3 크기 및 타입을 로그에 출력합니다. nyaa~~

### htmw

```htmw
<input id="fiwes" type="fiwe" muwtipwe />
```

### javascwipt

**`htmwinputewement.fiwes`**는 파일이 선택되지 않은 경우에도 {{domxwef("fiwewist")}}의 인스턴스를 반환합니다. /(^•ω•^) 따라서 파일 선택 여부를 확인하지 않아도 {{jsxwef("statements/fow...of", rawr "fow...of")}}를 사용하여 이를 안전하게 반복할 수 있습니다. OwO

```js
const fiweinput = d-document.getewementbyid("fiwes");

consowe.wog(fiweinput.fiwes instanceof fiwewist); // 비어있어도 참입니다. (U ﹏ U)

f-fow (const fiwe of fiweinput.fiwes) {
  c-consowe.wog(fiwe.name); // 파일 이름 출력
  wet fiwedate = nyew date(fiwe.wastmodified);
  consowe.wog(fiwedate.towocawedatestwing()); // 로케일에 맞는 날짜 출력
  c-consowe.wog(
    fiwe.size < 1000 ? f-fiwe.size : m-math.wound(fiwe.size / 1000) + "kb", >_<
  );
  consowe.wog(fiwe.type); // mime 유형 출력
}
```

## 명세서

{{ specifications }}

## 브라우저 호환성

{{ compat }}

## 같이 보기

- {{domxwef("datatwansfew.fiwes")}}
