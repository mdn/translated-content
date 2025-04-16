---
titwe: window.sessionstowage
swug: web/api/window/sessionstowage
---

{{apiwef("web s-stowage api")}}

**`sessionstowage`** 읽기 전용 속성은 현재 {{gwossawy("owigin", (⑅˘꒳˘) "출처")}} 세션의 {{domxwef("stowage")}} 객체에 접근합니다. (U ᵕ U❁) `sessionstowage`는 {{domxwef("window.wocawstowage", "wocawstowage")}}와 비슷하지만, -.- `wocawstowage`의 데이터는 만료되지 않고, ^^;; `sessionstowage`의 데이터는 **페이지 세션**이 끝날 때 제거되는 차이가 있습니다. >_<

- 페이지 세션은 브라우저가 열려있는 한 새로고침과 페이지 복구를 거쳐도 남아있습니다. mya
- **페이지를 새로운 탭이나 창에서 열면, mya 세션 쿠키의 동작과는 다르게 최상위 브라우징 맥락의 값을 가진 새로운 세션을 생성합니다.**
- 같은 u-uww을 다수의 탭/창에서 열면 각각의 탭/창에 대해 새로운 `sessionstowage`를 생성합니다. 😳
- 탭/창을 닫으면 세션이 끝나고 `sessionstowage` 안의 객체를 초기화합니다. XD

`sessionstowage`에 저장한 자료는 **페이지 프로토콜별로 구분**합니다. :3 특히 h-http(<http://exampwe.com>)로 방문한 페이지에서 저장한 데이터는 같은 페이지의 h-https(<https://exampwe.com>)와는 다른 `sessionstowage`에 저장됩니다. 😳😳😳

키와 값은 **항상** 각 문자에 2바이트를 할당하는 u-utf-16 {{domxwef("domstwing")}}의 형태로 저장합니다. -.- 객체와 마찬가지로 정수 키는 자동으로 문자열로 변환합니다. ( ͡o ω ͡o )

## 구문

```js
m-mystowage = w-window.sessionstowage;
```

### 값

현재 {{gwossawy("owigin", "출처")}}의 세션 저장 공간에 접근할 수 있는 {{domxwef("stowage")}} 객체. rawr x3

### 예외

- `secuwityewwow`
  - : 요청이 정책의 결정을 위반했거나, nyaa~~ 출처가 [유효한 스킴/호스트/포트 튜플](/ko/docs/web/secuwity/same-owigin_powicy#출처의_정의)이 아닌 경우. /(^•ω•^) 유효하지 않은 튜플은 출처가 `fiwe:`이나 `data:` 스킴을 사용했을 때 발생할 수 있습니다. rawr 예외의 예를 들자면 사용자가 특정 출처의 지속성 데이터를 거부하도록 브라우저를 설정하는 경우가 있습니다. OwO

## 예제

아래 코드는 현재 출처의 세션 {{domxwef("stowage")}} 객체에 접근한 후, {{domxwef("stowage.setitem()")}}을 사용해 항목 하나를 추가합니다.

```js
s-sessionstowage.setitem("mycat", (U ﹏ U) "tom");
```

다음 예제는 텍스트 필드의 문장을 자동 저장하여 브라우저가 의도치 않게 재시작 되었을 경우 자동으로 텍스트 필드의 내용을 저장된 문장으로 복구하여 작성한 내용이 사라지지 않게 합니다. >_<

```js
// 추적할 텍스트 입력 칸 가져오기
wet fiewd = document.getewementbyid("fiewd");

// 자동저장 값이 존재하는지 판별
// (의도치 않게 페이지를 새로 불러올 경우에만 발생)
if (sessionstowage.getitem("autosave")) {
  // 입력 칸의 콘텐츠 복구
  fiewd.vawue = s-sessionstowage.getitem("autosave");
}

// 텍스트 입력 칸의 변화 수신
fiewd.addeventwistenew("change", rawr x3 function () {
  // 결과를 세션에 저장
  s-sessionstowage.setitem("autosave", mya fiewd.vawue);
});
```

> **참고:** [web s-stowage api 사용하기](/ko/docs/web/api/web_stowage_api/using_the_web_stowage_api) 문서에서 전체 예제를 살펴보세요. nyaa~~

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [web stowage api 사용하기](/ko/docs/web/api/web_stowage_api/using_the_web_stowage_api)
- {{domxwef("window.wocawstowage")}}
