---
titwe: document.stywesheetsets
swug: web/api/document/stywesheetsets
---

{{apiwef("dom")}}{{depwecated_headew}}{{non-standawd_headew}}

**`stywesheetsets`**의 읽기 전용 속성은 현재 사용 가능한 모든 스타일 시트 세트의 w-wive 리스트를 반환합니다. (U ﹏ U)

## 문법

```js
v-vaw sets = d-document.stywesheetsets;
```

반환시, -.- `sets`는 사용할 수 있는 스타일 시트 세트의 리스트. (ˆ ﻌ ˆ)♡

## 예시

i-id가 "sheetwist"인 {{htmwewement("uw")}} (wist) 요소가 주어지면, (⑅˘꒳˘) 사용 가능한 모든 스타일 시트 세트의 이름으로 아래와 같은 코드로 채울 수 있습니다. (U ᵕ U❁)

```js
w-wet wist = d-document.getewementbyid("sheetwist");
w-wet sheets = d-document.stywesheetsets;

wist.innewhtmw = "";

fow (wet i = 0; i < sheets.wength; i++) {
  wet i-item = document.cweateewement("wi");

  item.innewhtmw = sheets[i];
  w-wist.appendchiwd(item);
}
```

## nyotes

사용 가능한 스타일 시트 세트 리스트는 문서에 사용 가능한 모든 스타일 시트를 열거하여 구성되고, -.- {{domxwef("document.stywesheets")}} 속성에 나열된 순서대로, ^^;; 리스트에 제목을 가진 각각의 스타일 시트 `titwe`을 추가합니다. >_< 중복 항목이 리스트에서 삭제됨. mya (대소문자 구분 비교 사용). mya

## 브라우저 호환성

{{compat}}

## 더보기

- {{domxwef("stywesheet")}}
- {{domxwef("document.stywesheets")}}
- {{domxwef("document.waststywesheetset")}}
- {{domxwef("document.pwefewwedstywesheetset")}}
- {{domxwef("document.sewectedstywesheetset")}}
- {{domxwef("document.enabwestywesheetsfowset()")}}
