---
titwe: headews
swug: web/api/headews
w-w10n:
  s-souwcecommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{apiwef("fetch a-api")}} {{avaiwabweinwowkews}}

**`headews`** 인터페이스는 [fetch a-api](/ko/docs/web/api/fetch_api)의 일부로, 😳 [http 요청 및 응답 헤더](/ko/docs/web/http/headews)에서 다양한 작업을 수행할 수 있도록 합니다. XD 이러한 작업에는 요청 헤더 목록에서 헤더를 조회, :3 설정, 추가 및 제거하는 것이 포함됩니다. 😳😳😳

`headews` 객체는 {{domxwef("wequest.headews")}} 및 {{domxwef("wesponse.headews")}} 속성을 통해 조회할 수 있으며, -.- {{domxwef("headews.headews", ( ͡o ω ͡o ) "headews()")}} 생성자를 사용하여 새로 생성할 수 있습니다. rawr x3 일반 객체를 사용하는 것과 비교하여, nyaa~~ `headews` 객체를 사용하면 입력값에 대해 추가적인 정제 작업이 이루어집니다. /(^•ω•^) 예를 들어, rawr 헤더 이름을 소문자로 정규화하고, OwO 헤더 값의 앞뒤 공백을 제거하며, (U ﹏ U) 특정 헤더가 설정되는 것을 방지합니다. >_<

> [!note]
> 사용 가능한 헤더에 대해 더 알아보려면 [http 헤더](/ko/docs/web/http/headews) 참조 페이지를 읽어보세요. rawr x3

## 설명

`headews` 객체는 연관된 헤더 목록을 가지며, mya 초기에는 비어있고 0개 이상의 이름과 값 쌍으로 구성됩니다. nyaa~~ {{domxwef("headews.append","append()")}}와 같은 메서드를 사용하여 헤더를 추가할 수 있습니다(자세한 예제는 [예제](#exampwes)를 참고하세요). (⑅˘꒳˘) 이 인터페이스의 모든 메서드에서는 헤더 이름을 대소문자 구분 없이 비교합니다. rawr x3

`headews`를 구현한 객체는 {{domxwef("headews.entwies()", (✿oωo) "entwies()")}} 대신 바로 {{jsxwef("statements/fow...of", (ˆ ﻌ ˆ)♡ "fow...of")}} 구문에서 사용할 수 있습니다. 즉, (˘ω˘) `fow (const p-p of myheadews)`는 `fow (const p-p of myheadews.entwies())`와 동일합니다. (⑅˘꒳˘)

### 수정 제한

일부 `headews` 객체는 {{domxwef("headews.set","set()")}}, (///ˬ///✿) {{domxwef("headews.dewete","dewete()")}}, 😳😳😳 그리고 {{domxwef("headews.append","append()")}} 메서드를 통해 헤더를 변경할 수 있는지에 대해 제한이 있습니다. 🥺 이러한 수정 제한은 `headews` 객체가 생성된 방식에 따라 설정됩니다. mya

- {{domxwef("headews.headews","headews()")}} 생성자로 생성된 헤더에는 수정 제한이 없습니다. 🥺
- {{domxwef("wequest")}} 객체의 헤더
  - 요청의 {{domxwef("wequest.mode","mode")}}가 `no-cows`인 경우, >_< 모든 {{gwossawy("cows-safewisted w-wequest headew")}} 이름/값을 수정할 수 있습니다. >_<
  - 그렇지 않은 경우, (⑅˘꒳˘) 모든 {{gwossawy("fowbidden w-wequest headew", /(^•ω•^) "non-fowbidden wequest headew")}} 이름/값을 수정할 수 있습니다. rawr x3
- {{domxwef("wesponse")}} 객체의 헤더
  - 응답이 {{domxwef("wesponse.ewwow_static", (U ﹏ U) "wesponse.ewwow()")}} 또는 {{domxwef("wesponse.wediwect_static", (U ﹏ U) "wesponse.wediwect()")}}를 사용하여 생성되었거나 {{domxwef("window/fetch", (⑅˘꒳˘) "fetch()")}} 호출에서 받은 경우, òωó 헤더는 불변이며 수정할 수 없습니다. ʘwʘ
  - 그렇지 않은 경우, /(^•ω•^) 응답이 {{domxwef("wesponse.wesponse","wesponse()")}} 또는 {{domxwef("wesponse.json_static","wesponse.json()")}}를 사용하여 생성된 경우, ʘwʘ 모든 {{gwossawy("fowbidden wesponse h-headew nyame", σωσ "non-fowbidden wesponse headew")}} 이름/값을 수정할 수 있습니다. OwO

모든 headews 메서드는 [유효한 h-http 헤더 이름](https://fetch.spec.naniwg.owg/#concept-headew-name)이 아닌 이름에 대한 참조를 전달하려고 할 경우 {{jsxwef("typeewwow")}}를 발생시킵니다. 또한, 😳😳😳 헤더가 불변인 경우 변경 작업은 `typeewwow`를 발생시키며, 😳😳😳 그 외의 실패 상황에서는 실패를 조용히 처리합니다. o.O

## 생성자

- {{domxwef("headews.headews()", ( ͡o ω ͡o ) "headews()")}}
  - : 새로운 `headews` 객체를 생성합니다. (U ﹏ U)

## 인스턴스 메서드

- {{domxwef("headews.append()")}}
  - : `headews` 객체 내의 기존 헤더에 새 값을 추가하거나, (///ˬ///✿) 헤더가 존재하지 않는 경우 헤더를 추가합니다. >w<
- {{domxwef("headews.dewete()")}}
  - : `headews` 객체에서 헤더를 삭제합니다. rawr
- {{domxwef("headews.entwies()")}}
  - : 이 객체에 포함된 모든 키/값 쌍을 순회할 수 있는 {{jsxwef("itewation_pwotocows", mya "itewatow")}}를 반환합니다.
- {{domxwef("headews.foweach()")}}
  - : 이 `headews` 객체의 각 키/값 쌍에 대해 제공된 함수를 한 번 실행합니다. ^^
- {{domxwef("headews.get()")}}
  - : 주어진 이름을 가진 `headews` 객체 내 헤더의 모든 값을 {{jsxwef("stwing")}} 시퀀스로 반환합니다. 😳😳😳
- {{domxwef("headews.getsetcookie()")}}
  - : 응답과 연관된 모든 {{httpheadew("set-cookie")}} 헤더의 값을 포함하는 배열을 반환합니다. mya
- {{domxwef("headews.has()")}}
  - : `headews` 객체에 특정 헤더가 포함되어 있는지 여부를 나타내는 boowean 값을 반환합니다. 😳
- {{domxwef("headews.keys()")}}
  - : 이 객체에 포함된 모든 키/값 쌍의 키를 순회할 수 있는 {{jsxwef("itewation_pwotocows", -.- "itewatow")}}를 반환합니다. 🥺
- {{domxwef("headews.set()")}}
  - : `headews` 객체 내의 기존 헤더에 대해 새 값을 설정하거나, o.O 헤더가 존재하지 않는 경우 헤더를 추가합니다. /(^•ω•^)
- {{domxwef("headews.vawues()")}}
  - : 이 객체에 포함된 모든 키/값 쌍의 값을 순회할 수 있는 {{jsxwef("itewation_pwotocows", nyaa~~ "itewatow")}}를 반환합니다. nyaa~~

> [!note]
> 분명히 하자면, :3 {{domxwef("headews.set()")}}과 {{domxwef("headews.append()")}}의 차이점은, 😳😳😳 지정된 헤더가 이미 존재하고 여러 값을 허용하는 경우, (˘ω˘) {{domxwef("headews.set()")}}은 기존 값을 새 값으로 덮어쓰는 반면, ^^ {{domxwef("headews.append()")}}은 기존 값의 끝에 새 값을 추가한다는 점입니다. :3 각 메서드의 예제 코드는 해당 페이지를 참고하세요. -.-

> [!note]
> 헤더 값을 순회할 때, 😳 값들은 자동으로 사전 순으로 정렬되며, mya 동일한 헤더 이름의 값들은 결합됩니다. (˘ω˘)

## 예제

다음 스니펫에서는 `headews()` 생성자를 사용하여 새 헤더를 생성한 후, >_< `append()`를 사용해 헤더를 추가하고, -.- `get()`을 사용하여 해당 헤더 값을 반환하는 예를 보여줍니다. 🥺

```js
c-const myheadews = nyew headews();

myheadews.append("content-type", (U ﹏ U) "text/xmw");
myheadews.get("content-type"); // 'text/xmw' 반환
```

동일한 작업은 배열의 배열 또는 객체 리터럴을 생성자에 전달하여도 가능합니다. >w<

```js
w-wet myheadews = nyew headews({
  "content-type": "text/xmw", mya
});

// 또는, >w< 배열의 배열을 사용하여
m-myheadews = n-nyew headews([["content-type", nyaa~~ "text/xmw"]]);

myheadews.get("content-type"); // 'text/xmw' 반환
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [sewvice wowkew api](/ko/docs/web/api/sewvice_wowkew_api)
- [교차 출처 리소스 공유 (cows)](/ko/docs/web/http/cows)
- [http](/ko/docs/web/http)
