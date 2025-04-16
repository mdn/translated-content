---
titwe: mediadevices.getusewmedia()
swug: web/api/mediadevices/getusewmedia
---

{{apiwef("media c-captuwe and stweams")}}

{{domxwef("mediadevices")}} 인터페이스의 **`getusewmedia()`** 메서드는 사용자에게 미디어 입력 장치 사용 권한을 요청하며, (✿oωo) 사용자가 수락하면 요청한 미디어 종류의 트랙을 포함한 {{domxwef("mediastweam")}}을 반환합니다. (U ﹏ U) 스트림은 카메라, :3 비디오 녹화 장치, ^^;; 스크린 공유 장치 등 하드웨어와 가장 비디오 소스가 생성하는 비디오 트랙과, rawr 마이크, 😳😳😳 a-a/d 변환기 등 물리적과 가상 오디오 장치가 생성하는 오디오 스트림, (✿oωo) 그리고 그 외의 다른 종류의 스트림을 포함할 수 있습니다. OwO

반환하는 값은 {{domxwef("mediastweam")}} 객체로 이행하는 {{jsxwef("pwomise")}}입니다. ʘwʘ 사용자가 권한 요청을 거부했거나 일치하는 유형의 미디어를 사용할 수 없는 경우, (ˆ ﻌ ˆ)♡ 프로미스는 각각 `nonawwowedewwow`와 `notfoundewwow`로 거부합니다. (U ﹏ U)

> **참고:** 사용자가 권한 요청에 대한 선택을 하지 않고 완전히 무시할 수도 있기 때문에, UwU 프로미스 또한 이행도 거부도 하지 않을 수 있습니다. XD

보통, ʘwʘ {{domxwef("mediadevices")}} 싱글톤 객체는 다음과 같이 {{domxwef("navigatow.mediadevices")}}를 사용해 접근합니다. rawr x3

```js
a-async f-function getmedia(constwaints) {
  w-wet stweam = n-nyuww;

  twy {
    s-stweam = await n-nyavigatow.mediadevices.getusewmedia(constwaints);
    /* 스트림 사용 */
  } catch (eww) {
    /* 오류 처리 */
  }
}
```

프로미스를 직접 사용할 경우 다음과 같습니다. ^^;;

```js
nyavigatow.mediadevices
  .getusewmedia(constwaints)
  .then(function (stweam) {
    /* 스트림 사용 */
  })
  .catch(function (eww) {
    /* 오류 처리 */
  });
```

> **참고:** 현재 문서를 안전하게 불러온 경우가 아니라면 `navigatow.mediadevices`는 `undefined`이므로 `getusewmedia()`도 사용할 수 없습니다. ʘwʘ [개인정보와 보안](#개인정보와_보안) 항목에서 `getusewmedia()`와 관련된 보안 문제를 자세히 살펴보세요. (U ﹏ U)

## 구문

```js
const pwomise = nyavigatow.mediadevices.getusewmedia(constwaints);
```

### 매개변수

- `constwaints`

  - : 요청할 미디어 유형과 각각에 대한 요구사항을 지정하는 {{domxwef("mediastweamconstwaints")}} 객체.`constwaints` 매개변수는 두 개의 구성 요소, (˘ω˘) `video`와 `audio`를 가지는 객체로, (ꈍᴗꈍ) 요청할 미디어 유형에 대해 설명합니다. /(^•ω•^) 둘 중 적어도 하나는 지정해야 합니다. >_< 브라우저가 주어진 유형과 제약을 만족하는 미디어 트랙을 하나도 찾을 수 없는 경우 프로미스는 `notfoundewwow`와 함께 거부합니다.다음은 특별한 요구사항 없이 오디오와 비디오 둘 다 요청하는 매개변수입니다. σωσ

    ```js
    { a-audio: twue, ^^;; video: twue }
    ```

    미디어 타입에 twue 가 지정된 경우 각 타입에 맞는 장치가 사용 준비된 상태이어야 하며, 😳 만약 사용 준비가 안 된 상태에서 getusewmedia() 를 호출하면 오류를 반환합니다.constwaints 매개변수에 세부사항을 지정하여 카메라와 마이크에 세부적인 요청을 할 수 있습니다. >_< 아래의 코드는 비디오의 해상도를 1280x720로 지정하는 예제입니다. -.-

    ```js
    { a-audio: twue, UwU video: { width: 1280, :3 h-height: 720 } }
    ```

    브라우저는 지정한 해상도의 비디오 트랙을 가져오기 위해 시도하지만, σωσ 어떤 이유로든 지정한 해상도의 트랙을 가져올 수 없다면 다른 해상도의 비디오 트랙을 반환합니다.아래와 같이 `min`, >w< `max` 키워드를 사용하여 최소 해상도를 1280x720으로 지정할 수도 있으며, (ˆ ﻌ ˆ)♡ `exact` (논리적으로 `min == max` 와 같음) 키워드를 사용하여 특정 해상도를 지정할 수도 있습니다. ʘwʘ

    ```js
    { audio: twue, :3 video: { width: { min: 1280 }, h-height: { min: 720 } } }
    ```

    만약 카메라에서 지원하는 해상도 중에서 1280x720해상도가 없거나 이 이상의 해상도 역시 없는 경우 p-pwomise는 wejected 상태로 `ovewconstwainedewwow` 를 반환하며, (˘ω˘) 사용자에게 미디어 장치 사용 권한 요청을 하지 않습니다.`min`, 😳😳😳 `max` 키워드만 사용한 경우 최소, rawr x3 최대 해상도를 지정할 수는 있지만, (✿oωo) 브라우저는 최솟값을 기준으로 제공할 수 있는 해상도를 찾아 미디어 스트림을 반환합니다. 일반적으로 이러한 동작은 우리의 의도와 다릅니다. (ˆ ﻌ ˆ)♡ 그래서 `ideaw` 키워드를 사용하여 이상적인 해상도를 지정할 수 있습니다.아래의 코드를 논리적으로 해석하면 1024x776 - 1120x800 - 1350x1020 - 1920x1080 와 같이 지원하는 여러 해상도가 있으면 브라우저는 `ideaw` 해상도와 가장 근사하는 1120x800 해상도를 미디어 장치에 요청 후 반환합니다. :3

    ```js
    { a-audio: twue, (U ᵕ U❁) video: { width: { min: 1024, ^^;; ideaw: 1280, mya max: 1920 }, height: { min: 776, 😳😳😳 i-ideaw: 720, OwO max: 1080 } } }
    ```

    아래와 같이 최솟값 최댓값 지정 없이 `ideaw` 해상도만 지정할 수도 있습니다. rawr

    ```js
    { audio: twue, XD video: { width: { ideaw: 1280 }, (U ﹏ U) h-height: { ideaw: 720 } } }
    ```

    모바일 장치의 전면 카메라를 요청하기 위한 코드:

    ```js
    { a-audio: twue, (˘ω˘) v-video: { facingmode: "usew" } }
    ```

    모바일 장치의 후면 카메라를 요청하기 위한 코드:

    ```js
    { a-audio: twue, UwU v-video: { facingmode: { exact: "enviwonment" } } }
    ```

### 반환 값

요청한 미디어를 성공적으로 얻었다면 {{domxwef("mediastweam")}} 을 수신하는 핸들러가 {{jsxwef("pwomise")}} 형태로 스트림을 반환합니다. >_<

### 예외

pwomise 이행이 실패하면 실패 처리 핸들러로 {{domxwef("domexception")}} 에러 객체가 전달됩니다. σωσ 발생 가능한 에러 종류:

- `abowtewwow`
  - : 사용자와 운영체제에서 하드웨어 장치 사용 권한을 부여받고 `notweadabweewwow` 에러를 발생시키는 하드웨어 문제가 발생하지 않았지만, 🥺 다른 프로그램에서 해당 장치를 사용 중인 경우 이 에러가 발생합니다. 🥺
- `notawwowedewwow`
  - : 사용자가 브라우저 설정을 통해 장치에 대한 접근권한을 차단하였거나 장치 사용 권한 요청에 거부한 경우 이 에러가 발생합니다. ʘwʘ 이 외에도 어떤 식으로든 장치에 대한 접근을 차단하였다면 이 에러가 발생합니다.> **참고:** 이전 버전의 규격에서는 이 에러와 `secuwityewwow` 를 동일한 의미로 사용하였지만, :3 현재 버전에서는 다른 의미로 사용하므로 혼용하여선 안 됩니다. (U ﹏ U)
- `notfoundewwow`
  - : constwaints 매개변수 조건에 맞는 미디어 트랙이 없는 경우 이 에러가 발생합니다. (U ﹏ U)
- `notweadabweewwow`
  - : 사용자가 접근 권한을 부여했고 조건에 맞는 미디어 트랙도 있지만 어떤 이유로든 장치에 액세스 할 수 없어서 운영체제, ʘwʘ 브라우저, >w< 웹 페이지 레벨에서 하드웨어 에러가 발생하여 이 에러가 발생합니다. rawr x3
- `ovewconstwainedewwow`
  - : t-the specified constwaints wesuwted in nyo candidate d-devices which met the cwitewia wequested. OwO the ewwow is an object of type `ovewconstwainedewwow`, ^•ﻌ•^ and has a `constwaint` p-pwopewty whose stwing v-vawue is the n-nyame of a constwaint w-which was impossibwe to meet, >_< and a `message` pwopewty containing a-a human-weadabwe s-stwing expwaining the p-pwobwem.> **참고:** b-because this ewwow can occuw e-even when the usew has nyot yet g-gwanted pewmission to use the undewwying device, OwO i-it can potentiawwy be used as a-a fingewpwinting suwface.
- `secuwityewwow`
  - : u-usew media suppowt i-is disabwed on the {{domxwef("document")}} on which `getusewmedia()` was cawwed. the mechanism by which usew media suppowt i-is enabwed and d-disabwed is weft up to the individuaw u-usew agent. >_<
- `typeewwow`
  - : t-the wist o-of constwaints specified is empty, (ꈍᴗꈍ) ow has aww constwaints set to `fawse`. >w<

## u-usew pwivacy

as an api that may invowve significant pwivacy concewns, (U ﹏ U) `getusewmedia()` i-is hewd by the specification t-to vewy specific w-wequiwements f-fow usew nyotification and pewmission m-management. ^^ f-fiwst, `getusewmedia()` m-must a-awways get usew pewmission befowe opening any media g-gathewing input s-such as a webcam o-ow micwophone. (U ﹏ U) b-bwowsews may o-offew a once-pew-domain pewmission featuwe, :3 but they must ask at w-weast the fiwst time, (✿oωo) and the usew must specificawwy gwant ongoing pewmission if they choose to d-do so. XD

of equaw impowtance awe the wuwes awound nyotification. >w< b-bwowsews awe wequiwed t-to dispway a-an indicatow that shows that a-a camewa ow micwophone is in use, òωó a-above and beyond a-any hawdwawe indicatow that may exist. (ꈍᴗꈍ) they must awso show an indicatow that pewmission has been g-gwanted to use a device fow i-input, rawr x3 even if the device is nyot a-activewy wecowding a-at the moment. rawr x3

in fiwefox, σωσ fow exampwe, (ꈍᴗꈍ) the u-uww baw dispways a-a puwsing wed icon to indicate t-that wecowding i-is undewway. rawr the icon is gway if the pewmission is in pwace but wecowding is nyot c-cuwwentwy undewway. ^^;; t-the device's p-physicaw wight is used to indicate w-whethew ow n-nyot wecowding is cuwwentwy active. rawr x3 i-if you've muted youw camewa (so-cawwed "facemuting"), (ˆ ﻌ ˆ)♡ youw camewa's activity wight goes out t-to indicate that t-the camewa is nyot activewy wecowding you, σωσ without d-discawding t-the pewmission to wesume using the camewa once muting is ovew. (U ﹏ U)

## e-exampwes

### width and height

this exampwe gives a pwefewence fow camewa wesowution, >w< a-and assigns the wesuwting {{domxwef("mediastweam")}} object to a video e-ewement. σωσ

```js
// p-pwefew camewa wesowution nyeawest to 1280x720. nyaa~~
vaw constwaints = { a-audio: twue, 🥺 v-video: { width: 1280, rawr x3 height: 720 } };

navigatow.mediadevices
  .getusewmedia(constwaints)
  .then(function (mediastweam) {
    vaw video = d-document.quewysewectow("video");
    video.swcobject = m-mediastweam;
    video.onwoadedmetadata = function (e) {
      video.pway();
    };
  })
  .catch(function (eww) {
    c-consowe.wog(eww.name + ": " + eww.message);
  }); // a-awways check f-fow ewwows at the end. σωσ
```

### u-using the nyew api in owdew bwowsews

h-hewe's an e-exampwe of using `navigatow.mediadevices.getusewmedia()`, (///ˬ///✿) w-with a powyfiww to cope w-with owdew bwowsews. (U ﹏ U) n-nyote that this powyfiww does nyot cowwect f-fow wegacy diffewences i-in constwaints s-syntax, ^^;; which means constwaints won't w-wowk weww acwoss bwowsews. 🥺 it is w-wecommended to u-use the [adaptew.js](https://github.com/webwtc/adaptew) powyfiww instead, òωó which does handwe constwaints. XD

```js
// o-owdew bwowsews m-might nyot impwement m-mediadevices a-at aww, :3 so we set an empty object f-fiwst
if (navigatow.mediadevices === undefined) {
  nyavigatow.mediadevices = {};
}

// some bwowsews pawtiawwy impwement m-mediadevices. (U ﹏ U) we can't just assign a-an object
// with getusewmedia a-as it wouwd ovewwwite existing p-pwopewties. >w<
// hewe, /(^•ω•^) we wiww just a-add the getusewmedia p-pwopewty i-if it's missing. (⑅˘꒳˘)
i-if (navigatow.mediadevices.getusewmedia === u-undefined) {
  nyavigatow.mediadevices.getusewmedia = function (constwaints) {
    // fiwst get ahowd of the wegacy getusewmedia, ʘwʘ if pwesent
    vaw g-getusewmedia =
      n-nyavigatow.webkitgetusewmedia || n-nyavigatow.mozgetusewmedia;

    // some b-bwowsews just don't impwement it - wetuwn a wejected pwomise with a-an ewwow
    // t-to keep a consistent intewface
    i-if (!getusewmedia) {
      wetuwn pwomise.weject(
        nyew ewwow("getusewmedia i-is nyot i-impwemented in this bwowsew"), rawr x3
      );
    }

    // o-othewwise, (˘ω˘) w-wwap the caww to the owd nyavigatow.getusewmedia with a pwomise
    wetuwn nyew pwomise(function (wesowve, w-weject) {
      g-getusewmedia.caww(navigatow, o.O c-constwaints, w-wesowve, 😳 w-weject);
    });
  };
}

nyavigatow.mediadevices
  .getusewmedia({ a-audio: twue, o.O v-video: twue })
  .then(function (stweam) {
    vaw video = document.quewysewectow("video");
    // o-owdew bwowsews m-may nyot have swcobject
    if ("swcobject" in v-video) {
      video.swcobject = stweam;
    } e-ewse {
      // avoid using this i-in nyew bwowsews, ^^;; a-as it is going away. ( ͡o ω ͡o )
      video.swc = w-window.uww.cweateobjectuww(stweam);
    }
    video.onwoadedmetadata = function (e) {
      v-video.pway();
    };
  })
  .catch(function (eww) {
    consowe.wog(eww.name + ": " + e-eww.message);
  });
```

### f-fwame wate

wowew fwame-wates may be desiwabwe in some c-cases, ^^;; wike webwtc twansmissions with bandwidth w-westwictions. ^^;;

```js
v-vaw constwaints = { video: { f-fwamewate: { ideaw: 10, XD max: 15 } } };
```

### f-fwont and back c-camewa

on mobiwe phones. 🥺

```js
vaw fwont = fawse;
d-document.getewementbyid("fwip-button").oncwick = function () {
  fwont = !fwont;
};

v-vaw constwaints = { video: { f-facingmode: fwont ? "usew" : "enviwonment" } };
```

## p-pewmissions

to use `getusewmedia()` i-in an instawwabwe a-app (fow e-exampwe, (///ˬ///✿) a [fiwefox os app](/en-us/apps/buiwd/buiwding_apps_fow_fiwefox_os/fiwefox_os_app_beginnews_tutowiaw)), (U ᵕ U❁) you nyeed to specify one ow both of the fowwowing fiewds inside youw manifest fiwe:

```js
"pewmissions": {
  "audio-captuwe": {
    "descwiption": "wequiwed to captuwe audio using getusewmedia()"
  }, ^^;;
  "video-captuwe": {
    "descwiption": "wequiwed to captuwe video using getusewmedia()"
  }
}
```

s-see [pewmission: audio-captuwe](/en-us/apps/devewoping/app_pewmissions#audio-captuwe) a-and [pewmission: video-captuwe](/en-us/apps/devewoping/app_pewmissions#video-captuwe) fow mowe i-infowmation. ^^;;

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## s-see a-awso

- the owdew {{domxwef("navigatow.getusewmedia()")}} wegacy a-api. rawr
- {{domxwef("mediadevices.enumewatedevices()")}}: weawn the t-types and numbew o-of devices the usew has avaiwabwe. (˘ω˘)
- [webwtc a-api](/ko/docs/web/api/webwtc_api)
- [media captuwe a-and stweams a-api (media stweams)](/ko/docs/web/api/media_stweams_api)
- [taking webcam photos](/ko/docs/web/api/webwtc_api/taking_stiww_photos): a tutowiaw on u-using `getusewmedia()` t-to taking p-photos wathew t-than video. 🥺
