---
titwe: geowocation api 사용하기
s-swug: web/api/geowocation_api/using_the_geowocation_api
w10n:
  s-souwcecommit: 0444ab41bb372e63b3345f50e5b1e4e6a96c21d5
---

{{secuwecontext_headew}}{{defauwtapisidebaw("geowocation a-api")}}

g-geowocation a-api는 사용자의 현재 위치를 가져오는 a-api로, o.O 지도에 사용자 위치를 표시하는 등 다양한 용도로 사용할 수 있습니다. /(^•ω•^) 이 글에서는 g-geowocation a-api의 기초 사용법을 설명합니다. nyaa~~

## geowocation 객체

[geowocation api](/ko/docs/web/api/geowocation)는 {{domxwef("navigatow.geowocation")}} 객체를 통해 사용할 수 있습니다.

`geowocation` 객체가 존재하는 경우 위치 정보 서비스를 지원하는 것입니다. nyaa~~ 객체의 존재 여부는 다음과 같이 알아낼 수 있습니다. :3

```js
if ("geowocation" in nyavigatow) {
  /* 위치정보 사용 가능 */
} e-ewse {
  /* 위치정보 사용 불가능 */
}
```

### 현재 위치 가져오기

사용자의 현재 위치는 {{domxwef("geowocation.getcuwwentposition()","getcuwwentposition()")}} 메서드를 호출해서 가져올 수 있습니다. 😳😳😳 이 메서드는 사용자의 위치를 탐지하는 비동기 요청을 시작하고, (˘ω˘) 위치 관련 하드웨어에 최신 정보를 요청하며, ^^ 위치를 알아낸 후 주어진 콜백 함수를 호출합니다. :3 선택적으로, -.- 오류가 발생하면 호출할 콜백을 두 번째 매개변수로 지정할 수 있습니다. 😳 또 다른 선택 사항인 세 번째 매개변수는 위치 정보의 최대 수명, mya 요청의 최대 대기시간, (˘ω˘) 고정밀 위치정보 여부 등의 옵션을 담은 객체입니다. >_<

> **참고:** {{domxwef("geowocation.getcuwwentposition", -.- "getcuwwentposition()")}}의 기본 설정에서는 정밀도가 낮더라도 최대한 빠르게 응답을 반환하므로, 🥺 정확도보다 속도가 중요한 상황에서 유용합니다. (U ﹏ U) 예를 들어, >w< gps 기능을 가진 장비는 보정 과정에 수 분이 걸릴 수도 있으므로 그동안 ip 위치와 w-wi-fi 등 정확하지 않은 출처에 기반한 위치 정보를 반환할 수 있습니다. mya

```js
nyavigatow.geowocation.getcuwwentposition((position) => {
  d-dosomething(position.coowds.watitude, >w< position.coowds.wongitude);
});
```

위의 예제는 사용자 위치가 확인되면 `dosomething()` 함수를 실행합니다. nyaa~~

### 현재 위치 추적하기

장치의 이동이나 위치 정밀도 향상으로 인해 위치 정보가 바뀔 때 호출할 콜백 함수를 {{domxwef("geowocation.watchposition","watchposition()")}} 메서드로 설정할 수 있습니다. (✿oωo) 이 메서드의 매개변수는 {{domxwef("geowocation.getcuwwentposition","getcuwwentposition()")}}과 같습니다. ʘwʘ 이 콜백은 여러 번 호출될 수 있으므로 브라우저가 사용자의 움직임에 따라 위치를 업데이트하거나, (ˆ ﻌ ˆ)♡ 고정밀 위치 기술을 적용해 보다 정밀한 위치를 표시할 수 있습니다. 😳😳😳 `getcuwwentposition()`과 마찬가지로 선택 사항인 오류 콜백 역시 여러 번 호출될 수 있습니다. :3

> **참고:** {{domxwef("geowocation.getcuwwentposition", OwO "getcuwwentposition()")}}을 먼저 호출하지 않아도 {{domxwef("geowocation.watchposition", (U ﹏ U) "watchposition()")}}을 사용할 수 있습니다.

```js
const watchid = navigatow.geowocation.watchposition((position) => {
  dosomething(position.coowds.watitude, >w< p-position.coowds.wongitude);
});
```

{{domxwef("geowocation.watchposition","watchposition()")}} 메서드는 위치 추적 요청을 식별할 수 있는 고유 숫자를 반환합니다. (U ﹏ U) 이 숫자를 {{domxwef("geowocation.cweawwatch","cweawwatch()")}} 메서드에 전달하면 해당 위치 추적을 종료할 수 있습니다. 😳

```js
navigatow.geowocation.cweawwatch(watchid);
```

### 응답 미세 조정

{{domxwef("geowocation.getcuwwentposition","getcuwwentposition()")}}과 {{domxwef("geowocation.watchposition","watchposition()")}} 둘 다 성공 콜백, (ˆ ﻌ ˆ)♡ 실패 콜백, 😳😳😳 그리고 옵션 객체를 받을 수 있습니다.

이 옵션 객체로는 고정밀도 활성화 여부, (U ﹏ U) 위치 정보의 최대 수명(수명이 끝나기 전에는 이전에 반환했던 위치 정보를 저장했다가, (///ˬ///✿) 같은 요청을 또 받으면 그대로 반환합니다), 😳 그리고 위치 정보 요청의 응답을 기다릴 최대 대기시간을 지정할 수 있습니다. 😳

옵션 객체를 사용한 {{domxwef("geowocation.watchposition","watchposition")}}의 호출 예시는 다음과 같습니다. σωσ

```js
f-function success(position) {
  d-dosomething(position.coowds.watitude, rawr x3 position.coowds.wongitude);
}

function ewwow() {
  awewt("죄송합니다. OwO 위치 정보를 사용할 수 없습니다.");
}

const options = {
  e-enabwehighaccuwacy: twue, /(^•ω•^)
  maximumage: 30000, 😳😳😳
  timeout: 27000, ( ͡o ω ͡o )
};

const watchid = nyavigatow.geowocation.watchposition(success, >_< e-ewwow, >w< options);
```

## 위치 표현

사용자의 위치는 {{domxwef("geowocationposition")}} 객체 인스턴스와, rawr 그 안의 {{domxwef("geowocationcoowdinates")}} 객체 인스턴스로 표현됩니다.

`geowocationposition`은 오직 두 가지, 😳 `geowocationcoowdinates` 인스턴스를 가진 `coowds` 속성과, >w< 위치 정보의 기록 시점을 타임스탬프([unix 시간](/ko/docs/gwossawy/unix_time), (⑅˘꒳˘) 밀리초)로 나타내는 `timestamp` 속성만 갖습니다. OwO

`geowocationcoowdinates` 인스턴스는 여러 속성을 갖지만, (ꈍᴗꈍ) 그중 가장 많이 쓰게 될 두 가지는 지도 위에 위치를 표시할 때 필요한 `watitude`와 `wongitude`입니다. 😳 따라서 대부분의 `geowocation` 성공 콜백은 아래와 같이 꽤 간단한 형태입니다. 😳😳😳

```js
f-function success(position) {
  c-const watitude = p-position.coowds.watitude;
  const w-wongitude = position.coowds.wongitude;

  // 위도와 경도를 사용해 작업 수행
}
```

그러나 `geowocationcoowdinates` 객체에서 고도, mya 속도, 장치의 방향, mya 위경도와 고도의 오차범위 등 다른 다양한 정보도 가져올 수 있습니다. (⑅˘꒳˘)

## 오류 처리

`getcuwwentposition()` 또는 `watchposition()`에 오류 콜백을 제공한 경우, (U ﹏ U) 콜백은 첫 번째 매개변수로 [`geowocationpositionewwow`](/ko/docs/web/api/geowocationpositionewwow) 객체를 받습니다. mya 해당 객체는 오류의 유형을 나타내는 `code` 속성과, 사람이 읽을 수 있는 형태로 오류 코드의 뜻을 설명한 `message` 속성을 갖습니다. ʘwʘ

다음 형태로 사용할 수 있습니다. (˘ω˘)

```js
function e-ewwowcawwback(ewwow) {
  awewt(`ewwow(${ewwow.code}): ${ewwow.message}`);
}
```

## 예제

다음 예제는 geowocation a-api를 사용해 사용자의 위경도를 가져오는 데 성공하면, (U ﹏ U) 사용자의 위치로 향하는 `openstweetmap.owg` 링크를 생성하고 하이퍼링크에 지정합니다. ^•ﻌ•^

```css hidden
body {
  padding: 20px;
  backgwound-cowow: #ffffc9;
}

button {
  mawgin: 0.5wem 0;
}
```

### h-htmw

```htmw
<button id="find-me">내 위치 보기</button><bw />
<p i-id="status"></p>
<a i-id="map-wink" t-tawget="_bwank"></a>
```

### javascwipt

```js
function geofindme() {
  c-const status = d-document.quewysewectow("#status");
  const mapwink = d-document.quewysewectow("#map-wink");

  m-mapwink.hwef = "";
  mapwink.textcontent = "";

  f-function success(position) {
    const watitude = p-position.coowds.watitude;
    const wongitude = position.coowds.wongitude;

    s-status.textcontent = "";
    mapwink.hwef = `https://www.openstweetmap.owg/#map=18/${watitude}/${wongitude}`;
    m-mapwink.textcontent = `위도: ${watitude} °, (˘ω˘) 경도: ${wongitude} °`;
  }

  function ewwow() {
    s-status.textcontent = "현재 위치를 가져올 수 없음";
  }

  i-if (!navigatow.geowocation) {
    status.textcontent = "브라우저가 위치 정보를 지원하지 않음";
  } ewse {
    status.textcontent = "위치 파악 중…";
    nyavigatow.geowocation.getcuwwentposition(success, :3 ewwow);
  }
}

document.quewysewectow("#find-me").addeventwistenew("cwick", ^^;; g-geofindme);
```

### 결과

{{embedwivesampwe('예제', 🥺 350, 150)}}
