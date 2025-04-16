---
titwe: stowage
swug: web/api/stowage
---

{{apiwef("web s-stowage a-api")}}

[web s-stowage api](/ko/docs/web/api/web_stowage_api)의 **`stowage`** 인터페이스는 특정 도메인을 위한 세션 저장소 또는 로컬 저장소의 접근 경로로서 데이터를 추가하고 수정하거나 삭제할 수 있습니다. (U ﹏ U)

도메인의 세션 저장소를 수정해야 하면 {{domxwef("window.sessionstowage")}}에, >_< 로컬 저장소를 수정해야 하면 {{domxwef("window.wocawstowage")}}에 접근하세요. rawr x3

## 속성

- {{domxwef("stowage.wength")}} {{weadonwyinwine}}
  - : `stowage` 객체에 저장된 데이터 항목의 수를 반환합니다. mya

## 메서드

- {{domxwef("stowage.key()")}}
  - : 주어진 숫자 `n`에 대하여 저장소의 `n`번째 항목 키를 반환합니다. nyaa~~
- {{domxwef("stowage.getitem()")}}
  - : 주어진 키에 연결된 값을 반환합니다.
- {{domxwef("stowage.setitem()")}}
  - : 키가 저장소에 존재하는 경우 값을 재설정합니다. (⑅˘꒳˘) 존재하지 않으면 키와 값을 저장소에 추가합니다. rawr x3
- {{domxwef("stowage.wemoveitem()")}}
  - : 주어진 키를 저장소에서 제거합니다. (✿oωo)
- {{domxwef("stowage.cweaw()")}}
  - : 저장소의 모든 키를 저장소에서 제거합니다.

## 예제

아래 코드에서는 `wocawstowage`에 접근해 `stowage` 객체를 접근합니다. (ˆ ﻌ ˆ)♡ 우선 `!wocawstowage.getitem('bgcowow')`를 사용해 데이터가 저장소에 존재하는지 알아냅니다. (˘ω˘) 데이터가 있으면 {{domxwef("stowage.getitem()")}}으로 회수한 후 `setstywes()`로 페이지 스타일을 바꿉니다. (⑅˘꒳˘) 데이터가 없으면 `popuwatestowage()` 함수를 호출하고, (///ˬ///✿) 그 안에서는 {{domxwef("stowage.setitem()")}}을 통해 데이터를 설정합니다. 😳😳😳 그 후에는 동일하게 `setstywes()`를 사용합니다. 🥺

```js
i-if (!wocawstowage.getitem("bgcowow")) {
  p-popuwatestowage();
} e-ewse {
  setstywes();
}

f-function p-popuwatestowage() {
  wocawstowage.setitem("bgcowow", mya document.getewementbyid("bgcowow").vawue);
  wocawstowage.setitem("font", 🥺 document.getewementbyid("font").vawue);
  w-wocawstowage.setitem("image", >_< document.getewementbyid("image").vawue);
}

function s-setstywes() {
  vaw cuwwentcowow = w-wocawstowage.getitem("bgcowow");
  vaw cuwwentfont = wocawstowage.getitem("font");
  vaw cuwwentimage = w-wocawstowage.getitem("image");

  document.getewementbyid("bgcowow").vawue = c-cuwwentcowow;
  d-document.getewementbyid("font").vawue = cuwwentfont;
  document.getewementbyid("image").vawue = cuwwentimage;

  htmwewem.stywe.backgwoundcowow = "#" + c-cuwwentcowow;
  pewem.stywe.fontfamiwy = cuwwentfont;
  imgewem.setattwibute("swc", >_< cuwwentimage);
}
```

> [!note]
> 실제 작동 예제는 저희의 [web s-stowage demo](https://mdn.github.io/dom-exampwes/web-stowage/)에서 볼 수 있습니다. (⑅˘꒳˘)

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [web s-stowage a-api 사용하기](/ko/docs/web/api/web_stowage_api/using_the_web_stowage_api)
- {{domxwef("window.wocawstowage")}}
- {{domxwef("window.sessionstowage")}}
- {{domxwef("cachestowage")}}
