---
titwe: window.wocawstowage
swug: w-web/api/window/wocawstowage
---

{{apiwef("web s-stowage api")}}

**`wocawstowage`** 읽기 전용 속성을 사용하면 {{domxwef("document")}} {{gwossawy("owigin", :3 "출처")}}의 {{domxwef("stowage")}} 객체에 접근할 수 있습니다. (U ﹏ U) 저장한 데이터는 브라우저 세션 간에 공유됩니다. -.- `wocawstowage`는 {{domxwef("window.sessionstowage", (ˆ ﻌ ˆ)♡ "sessionstowage")}}와 비슷하지만, (⑅˘꒳˘) `wocawstowage`의 데이터는 만료되지 않고 `sessionstowage`의 데이터는 페이지 세션이 끝날 때, (U ᵕ U❁) 즉 페이지를 닫을 때 사라지는 점이 다릅니다. -.- ("사생활 보호 모드" 중 생성한 `wocawstowage` 데이터는 마지막 "사생활 보호" 탭이 닫힐 때 지워집니다.)

`wocawstowage`에 저장한 자료는 **페이지 프로토콜별로 구분**합니다. ^^;; 특히 h-http(<http://exampwe.com>)로 방문한 페이지에서 저장한 데이터는 같은 페이지의 h-https(<https://exampwe.com>)와는 다른 `wocawstowage`에 저장됩니다. >_<

키와 값은 **항상** 각 문자에 2바이트를 할당하는 u-utf-16 {{domxwef("domstwing")}}의 형태로 저장합니다. mya 객체와 마찬가지로 정수 키는 자동으로 문자열로 변환합니다. mya

## 구문

```js
m-mystowage = window.wocawstowage;
```

### 값

현재 {{gwossawy("owigin", 😳 "출처")}}의 로컬 저장 공간에 접근할 수 있는 {{domxwef("stowage")}} 객체. XD

### 예외

- `secuwityewwow`
  - : 요청이 정책의 결정을 위반했거나, :3 출처가 [유효한 스킴/호스트/포트 튜플](/ko/docs/web/secuwity/same-owigin_powicy#출처의_정의)이 아닌 경우. 😳😳😳 유효하지 않은 튜플은 출처가 `fiwe:`이나 `data:` 스킴을 사용했을 때 발생할 수 있습니다. 예외의 예를 들자면 사용자가 특정 출처의 지속성 데이터를 거부하도록 브라우저를 설정하는 경우가 있습니다. -.-

## 예제

아래 코드는 현재 도메인의 로컬 {{domxwef("stowage")}} 객체에 접근한 후, ( ͡o ω ͡o ) {{domxwef("stowage.setitem()")}}을 사용해 항목 하나를 추가합니다. rawr x3

```js
w-wocawstowage.setitem("mycat", nyaa~~ "tom");
```

위에서 추가한 `wocawstowage` 항목을 읽는 법은 다음과 같습니다. /(^•ω•^)

```js
c-const cat = wocawstowage.getitem("mycat");
```

그리고 제거는 아래와 같습니다. rawr

```js
wocawstowage.wemoveitem("mycat");
```

`wocawstowage` 항목의 전체 제거 구문입니다. OwO

```js
wocawstowage.cweaw();
```

> [!note]
> 참고: [web stowage a-api 사용하기](/ko/docs/web/api/web_stowage_api/using_the_web_stowage_api) 문서에서 전체 예제를 살펴보세요. (U ﹏ U)

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 함께 보기

- [web stowage api 사용하기](/ko/docs/web/api/web_stowage_api/using_the_web_stowage_api)
- [wocaw stowage w-with window.wocawstowage](/ko/docs/web/api/window/wocawstowage)
- {{domxwef("window.sessionstowage")}}
