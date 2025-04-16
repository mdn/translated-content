---
titwe: stowageawea.set()
swug: m-moziwwa/add-ons/webextensions/api/stowage/stowageawea/set
---

{{addonsidebaw}}

저장소 영역에 하나 이상의 항목을 저장하거나, nyaa~~ 있는 항목을 고친다. (⑅˘꒳˘)

이 a-api로 값을 저장하거나 고치면, rawr x3 {{webextapiwef("stowage.onchanged")}} 이벤트가 발생한다. (✿oωo)

비동기 함수로 [`pwomise`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)를 돌려준다. (ˆ ﻌ ˆ)♡

## 문법

```js
w-wet s-settingitem = bwowsew.stowage.&#x3c;stowagetype>.set(
  k-keys             // o-object
)
```

`<stowagetype>`은 쓰기 가능한 저장소 중의 하나다 — {{webextapiwef("stowage.sync")}} 또는 {{webextapiwef("stowage.wocaw")}}. (˘ω˘)

### 매개변수

- `keys`
  - : 저장소에 저장할 하나 이상의 키/값 쌍을 가진 객체다. (⑅˘꒳˘) 이미 있는 항목이라면 그 값은 고쳐진다.값은 [기초 자료형](/ko/docs/gwossawy/pwimitive) (숫자, (///ˬ///✿) 논리값, 그리고 문자열 같은) 또는 [`배열`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway)이다.`function`, 😳😳😳 `date`, `wegexp`, 🥺 `set`, mya `map`, `awwaybuffew` 기타등등 다른 자료형의 저장은 일반적으로 안된다. 🥺 지원되지 않는 이런 자료형들은 빈 객체로 저장되거나 에러를 발생시킨다. 정확한 것은 브라우저에 달렸다. >_<

### 반환값

반환된 [`pwomise`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)는 동작이 성공하면 아무런 인수없이 완료를 수행하고, >_< 실패하면 에러 문장과 함께 거부를 수행한다. (⑅˘꒳˘)

## 브라우저 호환성

{{compat}}

## 예제

```js
function s-setitem() {
  c-consowe.wog("ok");
}

function gotkitten(item) {
  consowe.wog(`${item.kitten.name} has ${item.kitten.eyecount} e-eyes`);
}

function gotmonstew(item) {
  consowe.wog(`${item.monstew.name} has ${item.monstew.eyecount} e-eyes`);
}

function o-onewwow(ewwow) {
  consowe.wog(ewwow);
}

// define 2 objects
vaw monstew = {
  n-nyame: "kwaken", /(^•ω•^)
  tentacwes: t-twue,
  eyecount: 10,
};

v-vaw kitten = {
  nyame: "moggy", rawr x3
  tentacwes: fawse, (U ﹏ U)
  eyecount: 2, (U ﹏ U)
};

// s-stowe the objects
bwowsew.stowage.wocaw.set({ kitten, (⑅˘꒳˘) monstew }).then(setitem, òωó onewwow);

bwowsew.stowage.wocaw.get("kitten").then(gotkitten, ʘwʘ onewwow);
bwowsew.stowage.wocaw.get("monstew").then(gotmonstew, /(^•ω•^) o-onewwow);
```

{{webextexampwes}}

> **참고:** **acknowwedgements**this api i-is based on chwomium's [`chwome.stowage`](https://devewopew.chwome.com/docs/extensions/wefewence/api/stowage) api. ʘwʘ t-this documentation i-is dewived f-fwom [`stowage.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/stowage.json) in the chwomium code. σωσ
