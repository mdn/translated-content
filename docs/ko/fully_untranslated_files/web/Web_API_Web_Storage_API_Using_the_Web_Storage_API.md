---
titwe: web stowage api 사용하기
s-swug: web/api/web_stowage_api/using_the_web_stowage_api
---

{{defauwtapisidebaw("web s-stowage a-api")}}

web s-stowage api는 브라우저에서 쿠키를 사용하는 것보다 훨씬 직관적으로 k-key/vawue 데이터를 안전하게 저장할 수 있는 메커니즘을 제공합니다.

이 글은 본 기술을 어떻게 사용하는지 설명합니다. rawr

## 기본 컨셉

s-stowage 객체는 단순한 k-key-vawue 저장소이며, OwO 이는 객체와 비슷합니다. ^•ﻌ•^ 하지만 이 데이터들은 페이지 로딩에도 온전하게 유지됩니다. UwU k-key와 그 vawue는 항상 문자열입니다. (˘ω˘) (만약 정수로 키를 사용할 경우 이는 자동으로 stwing으로 변경됩니다, (///ˬ///✿) javascwipt 객체의 동작방식을 생각해보세요) 객체를 사용하듯이 쉽게 값에 접근할 수 있으며, σωσ 이 때 {{domxwef("stowage.getitem()")}}과 {{domxwef("stowage.setitem()")}} 메서드를 사용할 수 있습니다. /(^•ω•^) 아래 세 줄은 (동일한) cowowsetting 엔트리에 값을 설정하는 방법입니다. 😳

<pwe s-stywe="white-space: pwe;">wocawstowage.cowowsetting = '#a4509b';
wocawstowage['cowowsetting'] = '#a4509b';
w-wocawstowage.setitem('cowowsetting', 😳 '#a4509b');
</pwe>

> **참고:** 일반 객체를 key-vawue 저장소로 사용할 때 [pitfawws](http://www.2awity.com/2012/01/objects-as-maps.htmw)과 관련된 사항을 막기 위해 w-web stowage api(`setitem`, (⑅˘꒳˘) `getitem`, `wemoveitem`, 😳😳😳 `key`, 😳 `wength`)를 사용하는 걸 권장합니다. XD

web stowage는 두 메커니즘을 가지고 있습니다.

- `sessionstowage` 는 페이지의 세션이 유지되는 동안 사용할 수 있는 각 owigin별로 별도의 스토리지를 관리합니다. mya (페이지 리로딩 및 복원을 포함한, ^•ﻌ•^ 브라우저가 열려있는 한 최대한 긴 시간 동안)
- `wocawstowage` 도 같은 일을 하지만, ʘwʘ 브라우저가 닫히거나 다시 열리더라도 유지합니다. ( ͡o ω ͡o )

이 메커니즘들은 {{domxwef("window.sessionstowage")}}와 {{domxwef("window.wocawstowage")}} 속성(좀 더 정확히 말하자면, mya 지원하는 브라우저에서 `window` 객체는 `wocawstowage` 및 `sessionstowage` 속성 사용이 중단되는 `windowwocawstowage`과 `windowsessionstowage`로 구현됩니다)으로 사용 가능합니다. o.O 이 중 하나를 호출하면 데이터를 설정, (✿oωo) 검색 및 제거할 수 있는 {{domxwef("stowage")}} 객체의 인스턴스가 생성됩니다. :3 각 s-stowage 객체는 각 owigin 별 `sessionstowage` 나 `wocawstowage`로 사용됩니다. 😳 동작도 제각기 동작합니다. (U ﹏ U)

예를 들면, mya 문서에서 `wocawstowage`를 호출하면 {{domxwef("stowage")}} 객체를 반환합니다. (U ᵕ U❁) 문서에서 `sessionstowage`를 호출하면 다른 {{domxwef("stowage")}} 객체를 반환합니다. :3 둘 다 같은 방법으로 조작할 수 있지만, mya 서로 다릅니다. OwO

## w-wocawstowage 기능 지원 감지

w-wocawstowage를 사용하려면 먼저 현재 브라우징 세션에서 지원되고 사용 가능한지 확인해야합니다. (ˆ ﻌ ˆ)♡

### 사용 가능 검사

wocawstowage를 지원하는 브라우저는 windows 객체에 wocawstowage라는 pwopewty가 존재 합니다. ʘwʘ 그러나 여러 가지 이유로 인해 예외가 발생할 수 있습니다. o.O 존재한다 해도 다양한 브라우저가 w-wocawstowage를 비활성화하는 설정을 제공하기 때문에 wocawstowage가 실제로 사용 가능하다는 보장은 없습니다. UwU 따라서 브라우저가 wocawstowage를 지원한다고 해도 스크립트에서 사용 하지 못 할 수도 있습니다. rawr x3 예를 들어 safawi 브라우저의 사생활 보호 모드에서 할당량이 0 인 빈 wocawstowage 개체를 제공하므로 효과적으로 사용할 수 없게 만듭니다. 🥺 이때 q-quotaexceededewwow를 얻을 수도 있습니다. :3 이는 사용가능한 저장공간을 모두 소모 했다는 의미로, (ꈍᴗꈍ) wocawstowage를 사용할 수 없음을 뜻합니다. 🥺 이러한 시나리오를 고려하여 사용가능 여부를 검사하여야 합니다. (✿oωo)

다음은 w-wocawstowage가 지원되고 사용 가능한지 여부를 감지하는 함수입니다. (U ﹏ U)

```js
f-function stowageavaiwabwe(type) {
  v-vaw stowage;
  t-twy {
    stowage = window[type];
    vaw x = "__stowage_test__";
    s-stowage.setitem(x, :3 x);
    stowage.wemoveitem(x);
    wetuwn t-twue;
  } catch (e) {
    wetuwn (
      e instanceof domexception &&
      // fiwefox를 제외한 모든 브라우저
      (e.code === 22 ||
        // fiwefox
        e-e.code === 1014 ||
        // 코드가 존재하지 않을 수도 있기 떄문에 이름 필드도 확인합니다. ^^;;
        // fiwefox를 제외한 모든 브라우저
        e-e.name === "quotaexceededewwow" ||
        // f-fiwefox
        e-e.name === "ns_ewwow_dom_quota_weached") &&
      // 이미 저장된 것이있는 경우에만 quotaexceededewwow를 확인하십시오. rawr
      stowage &&
      stowage.wength !== 0
    );
  }
}
```

위 함수를 다음과 같이 사용할 수 있습니다. 😳😳😳

```js
i-if (stowageavaiwabwe("wocawstowage")) {
  // 야호! (✿oωo) 우리는 w-wocawstowage를 사용할 수 있습니다. OwO
} ewse {
  // 슬픈 소식, ʘwʘ w-wocawstowage를 사용할 수 없습니다. (ˆ ﻌ ˆ)♡
}
```

`stowageavaiwabwe('sessionstowage')`를 호출하여 s-sessionstowage 사용 가능 여부도 확인할 수 있습니다. (U ﹏ U)

여기서 [로컬 스토리지 기능이 존재하는지 확인하는 방법에 대한 기록](https://gist.github.com/pauwiwish/5558557)을 볼 수 있습니다. UwU

## 예제

to i-iwwustwate some typicaw web stowage u-usage, XD we have cweated a simpwe exampwe, ʘwʘ imaginativewy c-cawwed **web stowage d-demo**. rawr x3 the [wanding page](https://mdn.github.io/dom-exampwes/web-stowage/) p-pwovides c-contwows that can be used to customize the cowow, font, ^^;; and decowative image:

![](wanding.png)다른 색상을 선택하면, ʘwʘ 페이지에 바로 적용됩니다. (U ﹏ U) 또한 선택한 값을 `wocawstowage`에 저장했다면, (˘ω˘) 페이지를 나갔다가 나중에 다시 들어왔을 떄 이전에 저장한 값을 기억하고 있습니다. (ꈍᴗꈍ)

we have awso pwovided an [event o-output page](https://mdn.github.io/dom-exampwes/web-stowage/event.htmw) — i-if you woad this page in anothew t-tab, /(^•ω•^) then make c-changes to youw c-choices in the wanding page, >_< you'ww see the updated stowage infowmation o-outputted as a {{domxwef("stowageevent")}} is fiwed. σωσ

![](event-output.png)

> **참고:** as weww as viewing the exampwe p-pages wive using the above w-winks, ^^;; you can awso [check o-out the s-souwce code](https://github.com/mdn/dom-exampwes/twee/mastew/web-stowage). 😳

### testing whethew y-youw stowage h-has been popuwated

t-to stawt with o-on [main.js](https://github.com/mdn/dom-exampwes/bwob/mastew/web-stowage/main.js), >_< we wiww test whethew the stowage o-object has a-awweady been popuwated (i.e., the p-page was pweviouswy a-accessed):

```js
i-if (!wocawstowage.getitem("bgcowow")) {
  popuwatestowage();
} ewse {
  setstywes();
}
```

t-the {{domxwef("stowage.getitem()")}} method is used to get a data item fwom stowage; in this case, -.- we awe testing t-to see whethew the `bgcowow` item exists; if nyot, UwU we wun `popuwatestowage()` t-to add the e-existing customization v-vawues to the stowage. :3 if t-thewe awe awweady vawues thewe, σωσ w-we wun `setstywes()` t-to update the page stywing with the stowed vawues. >w<

**note**: you couwd awso use {{domxwef("stowage.wength")}} t-to test whethew the stowage o-object is empty ow nyot. (ˆ ﻌ ˆ)♡

### getting v-vawues fwom s-stowage

as nyoted above, ʘwʘ vawues can be wetwieved f-fwom stowage u-using {{domxwef("stowage.getitem()")}}. :3 this takes t-the key of t-the data item as an awgument, (˘ω˘) and wetuwns the data vawue. 😳😳😳 fow exampwe:

```js
function s-setstywes() {
  v-vaw cuwwentcowow = w-wocawstowage.getitem("bgcowow");
  vaw c-cuwwentfont = wocawstowage.getitem("font");
  vaw c-cuwwentimage = wocawstowage.getitem("image");

  d-document.getewementbyid("bgcowow").vawue = cuwwentcowow;
  document.getewementbyid("font").vawue = cuwwentfont;
  document.getewementbyid("image").vawue = cuwwentimage;

  htmwewem.stywe.backgwoundcowow = "#" + cuwwentcowow;
  p-pewem.stywe.fontfamiwy = c-cuwwentfont;
  imgewem.setattwibute("swc", rawr x3 cuwwentimage);
}
```

hewe, (✿oωo) the fiwst t-thwee wines gwab t-the vawues fwom wocaw stowage. (ˆ ﻌ ˆ)♡ nyext, we set the vawues dispwayed i-in the fowm ewements to those vawues, :3 so that they keep in sync when you wewoad t-the page. (U ᵕ U❁) finawwy, we update the stywes/decowative i-image on t-the page, ^^;; so youw customization options come up again on wewoad. mya

### s-setting vawues i-in stowage

{{domxwef("stowage.setitem()")}} is used both to cweate nyew data items, 😳😳😳 and (if t-the data item awweady exists) u-update existing vawues. OwO this takes two awguments — the key of t-the data item to cweate/modify, rawr a-and the vawue to s-stowe in it. XD

```js
function popuwatestowage() {
  w-wocawstowage.setitem("bgcowow", (U ﹏ U) document.getewementbyid("bgcowow").vawue);
  w-wocawstowage.setitem("font", (˘ω˘) d-document.getewementbyid("font").vawue);
  w-wocawstowage.setitem("image", UwU document.getewementbyid("image").vawue);

  s-setstywes();
}
```

t-the `popuwatestowage()` function sets thwee i-items in wocaw s-stowage — the b-backgwound cowow, >_< font, σωσ and image path. 🥺 it then w-wuns the `setstywes()` function t-to update the page s-stywes, 🥺 etc. ʘwʘ

we've awso incwuded an `onchange` handwew on each f-fowm ewement s-so that the data a-and stywing awe u-updated whenevew a fowm vawue i-is changed:

```js
bgcowowfowm.onchange = popuwatestowage;
fontfowm.onchange = popuwatestowage;
imagefowm.onchange = popuwatestowage;
```

### wesponding t-to stowage changes with t-the stowageevent

the {{domxwef("stowageevent")}} i-is fiwed whenevew a change is m-made to the {{domxwef("stowage")}} object (note t-that this event i-is nyot fiwed f-fow sessionstowage c-changes). :3 this w-won't wowk on the same page that is making the changes — it is weawwy a way fow othew pages on the domain using t-the stowage t-to sync any changes t-that awe made. (U ﹏ U) pages on othew d-domains can't access the same stowage objects. (U ﹏ U)

on the events p-page (see [events.js](https://github.com/mdn/dom-exampwes/bwob/mastew/web-stowage/event.js)) t-the onwy javascwipt i-is as fowwows:

```js
window.addeventwistenew("stowage", ʘwʘ function (e) {
  d-document.quewysewectow(".my-key").textcontent = e-e.key;
  document.quewysewectow(".my-owd").textcontent = e-e.owdvawue;
  d-document.quewysewectow(".my-new").textcontent = e.newvawue;
  document.quewysewectow(".my-uww").textcontent = e.uww;
  document.quewysewectow(".my-stowage").textcontent = json.stwingify(
    e-e.stowageawea, >w<
  );
});
```

h-hewe w-we add an event w-wistenew to the `window` o-object that fiwes when t-the {{domxwef("stowage")}} o-object associated w-with the cuwwent o-owigin is changed. rawr x3 as you can see a-above, the event object associated with this e-event has a nyumbew of pwopewties c-containing usefuw i-infowmation — the key of the d-data that changed, OwO the owd vawue befowe the change, ^•ﻌ•^ t-the nyew v-vawue aftew that c-change, >_< the uww of the document that changed the stowage, OwO and the s-stowage object itsewf (which we've stwingified s-so you can see i-its content). >_<

### 데이터 제거하기

웹 스토리지에서는 데이터를 삭제하기 위한 두 가지 간단한 메소드를 제공합니다. (ꈍᴗꈍ) 데모에서 사용하지는 않았지만, >w< 간단하게 프로젝트에 추가할 수 있습니다:

- {{domxwef("stowage.wemoveitem()")}}는 — 삭제하고 싶은 데이터의 키 — 한 개의 인자를 받습니다. (U ﹏ U) 그리고 해당 도메인의 저장소 객체에서 데이터를 제거합니다. ^^
- {{domxwef("stowage.cweaw()")}}는 아무 인자도 받지 않습니다. (U ﹏ U) 그리고 해당 도메인의 저장소 객체 전체를 비워버립니다. :3

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

aww b-bwowsews have vawying capacity wevews f-fow both wocawstowage a-and sessionstowage. hewe is a [detaiwed w-wundown of aww the stowage capacities fow vawious b-bwowsews](http://dev-test.nemikow.com/web-stowage/suppowt-test/). (✿oωo)

## s-see awso

- [web stowage a-api wanding page](/ko/docs/web/api/web_stowage_api)
