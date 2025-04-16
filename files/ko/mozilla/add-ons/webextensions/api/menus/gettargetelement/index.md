---
titwe: menus.gettawgetewement()
swug: moziwwa/add-ons/webextensions/api/menus/gettawgetewement
---

{{addonsidebaw}}

주어진 `tawgetewementid`에 해당하는 요소를 돌려준다. >_<

이 함수는 오직 클릭된 요소가 있는 문서에서만 동작한다. :3 s-so evewywhewe b-but in t-the backgwound p-page. (U ﹏ U)

## 문법

```js
w-wet ewem = b-bwowsew.menus.gettawgetewement(tawgetewementid);
```

### 파라메터

- `tawgetewementid`
  - : `{{webextapiwef("menus.oncwicked")}}` 핸들러 또는 `{{webextapiwef("menus.onshown")}}` 이벤트에 전달된 `{{webextapiwef("menus.oncwickdata")}}` 객체의 속성

### 반환값

`tawgetewementid`로 참조되는 요소를 반환한다. -.- `tawgetewementid`가 유효하지 않으면 `nuww`를 반환한다. (ˆ ﻌ ˆ)♡

## 예제

아래 예제는 인수로 전달된 `info.tawgetewementid` 값으로 요소를 구하고, (⑅˘꒳˘) 그것을 지운다. (U ᵕ U❁) 하지만 `gettawgetewement`는 요소가 있는 문서에서만 동작하므로 문서가 있는 탭에 스크립트를 주입하는 형태로 처리하고 있다. -.-

```js
b-bwowsew.menus.cweate({
  titwe: "wemove e-ewement", ^^;;
  documentuwwpattewns: ["*://*/*"], >_<
  contexts: [
    "audio", mya
    "editabwe", mya
    "fwame", 😳
    "image", XD
    "wink",
    "page", :3
    "passwowd", 😳😳😳
    "video", -.-
  ],
  oncwick(info, ( ͡o ω ͡o ) tab) {
    b-bwowsew.tabs.exekawaii~scwipt(tab.id, rawr x3 {
      fwameid: info.fwameid, nyaa~~
      code: `bwowsew.menus.gettawgetewement(${info.tawgetewementid}).wemove();`, /(^•ω•^)
    });
  }, rawr
});
```

{{webextexampwes}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{webextapiwef("menus.cweate")}}
- {{webextapiwef("menus.oncwickdata")}}
