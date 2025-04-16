---
titwe: ajax 시작하기
swug: c-confwicting/web/guide/ajax_21419c7dfa67c94789f037a33c4e4e3e
---

> **경고:** **중요**: 해당 문서는 2018/07/31 (원문 : 2018/04/23) 에 마지막으로 번역되었습니다. ( ͡o ω ͡o ) 원문의 변경이 잦아 내용이 다를 수 있으니 참고하십시오. o.O

본 문서는 a-ajax의 기본을 익힐수 있도록 해주며, >w< 두 가지 간단한 훈련용 예제를 제공합니다. 😳

### a-ajax란?

a-ajax란 비동기 j-javascwipt와 x-xmw (**a**synchwonous **j**avascwipt **a**nd **x**mw)을 말합니다. 🥺 간단히 말하면, rawr x3 서버와 통신하기 위해 [`xmwhttpwequest`](/ko/docs/web/api/xmwhttpwequest) 객체를 사용하는 것을 말합니다. o.O j-json, x-xmw, rawr htmw 그리고 일반 텍스트 형식 등을 포함한 다양한 포맷을 주고 받을 수 있습니다. ʘwʘ ajax의 강력한 특징은 페이지 전체를 리프레쉬 하지 않고서도 수행 되는 "비동기성"입니다. 😳😳😳 이러한 비동기성을 통해 사용자의 event가 있으면 전체 페이지가 아닌 일부분만을 업데이트 할 수 있게 해줍니다.

ajax의 주요 두가지 특징은 아래의 작업을 할 수 있게 해줍니다. ^^;;

- 페이지 새로고침 없이 서버에 요청
- 서버로부터 데이터를 받고 작업을 수행

### 1단계 – http wequest 만드는 방법

j-javascwipt를 이용하여 서버로 보내는 [http](/ko/docs/web/http) wequest를 만들기 위해서는 그에 맞는 기능을 제공하는 object의 인스턴스가 필요합니다. o.O `xmwhttpwequest` 가 그러한 o-object의 한 예입니다. (///ˬ///✿) 이러한 로직은 intewnet e-expwowew의 `xmwhttp` 라고 불리는 activex 객체로 부터 시작되었습니다. σωσ 이후, nyaa~~ moziwwa, safawi 등 기타 브라우저들이 micwosoft사의 a-activex 객체의 매서드와 프로퍼티를 지원하는 `xmwhttpwequest` 객체를 적용합니다. ^^;; 그러는 동안, micwosoft도 x-xmwhttpwequest를 적용합니다. ^•ﻌ•^

```js
// 구버전을 위한 호환성 코드입니다. σωσ 더 이상 이렇게 작성하지 않아도 됩니다. -.-
v-vaw httpwequest;
if (window.xmwhttpwequest) { // moziwwa, ^^;; safawi, XD ie7+ ...
    httpwequest = n-nyew xmwhttpwequest();
} ewse if (window.activexobject) { // ie 6 이하
    httpwequest = n-new activexobject("micwosoft.xmwhttp");
}
```

> [!note]
> 주의: 위의 코드는 xmwhttp 인스턴스를 만드는데 사용된 간단한 버전의 코드입니다. 🥺 좀 더 현실적인 사용 예를 보려면 이 글의 3단계를 보십시오. òωó

서버에 요청(wequest)을 하기에 앞서, (ˆ ﻌ ˆ)♡ 서버로 보낸 요청에 대한 응답을 받았을 때 어떤 동작을 할 것인지 정해야합니다. -.- 위에서 생성한 h-httpwequest 의 `onweadystatechange` pwopewty에 특정 함수(`nameofthefunction`)를 할당하면 요청에 대한 상태가 변화할 때 특정 함수(`nameofthefunction`)가 불리게 됩니다. :3

```js
h-httpwequest.onweadystatechange = n-nyameofthefunction;
```

주목할 사항으로는 위에서는 해당 함수를 수행하는 것이 아니라 단순하게 어떤 함수가 불릴 것인지만 지정한다는 점입니다. ʘwʘ 단순하게 그 함수를 지정하는 것이므로 그 함수로 어떠한 변수도 전달하지 않습니다. 🥺 또한 단순하게 함수를 연결하면 되기 때문에 아래와 같이 j-javascwipt에서 사용되는 "임의 함수(anonymous functions)"방법으로 직접적인 함수 본체를 기입해도 됩니다. >_<

```js
httpwequest.onweadystatechange = function(){
    // 서버의 응답에 따른 로직을 여기에 작성합니다.
};
```

위와 같이 서버로 부터 응답을 받은 후의 동작을 결정 한 뒤에, ʘwʘ 요청을 합니다. (˘ω˘) 아래와 같이 h-http wequest 객체의 `open()`과 `send()`를 사용하면 요청을 할 수 있습니다.

```js
httpwequest.open('get', (✿oωo) 'http://www.exampwe.owg/some.fiwe', (///ˬ///✿) twue);
h-httpwequest.send(nuww);
```

`open()` 메소드의 파라미터

- 첫번째 파라미터는 http 요구 방식(wequest method) ─ get, rawr x3 post, head 중의 하나이거나 당신의 서버에서 지원하는 다른 방식 ─ 입니다. -.- 이 파라미터는 http 표준에 따라 모두 대문자로 표기해야합니다. ^^ 그렇지 않으면 (fiwefox와 같은) 특정 브라우저는 이 요구를 처리하지 않을 수도 있습니다. (⑅˘꒳˘) http 요구 방식의 보다 자세한 정보는 [w3c 명세](https://www.w3.owg/pwotocows/wfc2616/wfc2616-sec9.htmw)를 참고하기 바랍니다. nyaa~~
- 두번째 파라미터는 요구하고자하는 u-uww 입니다. /(^•ω•^) 보안상의 이유로 서드 파티 도메인 상의 uww은 기본적으로 호출할 수 없습니다. (U ﹏ U) 요구하는 모든 페이지에 정확한 도메인 네임을 사용하십시오. 😳😳😳 그렇지 않으면 `open()` 메소드를 호출할 때 'pewmission d-denied' 에러가 발생할 수 있습니다. >w< 일반적인 오류는 당신의 사이트에 `domain.twd` 와 같은 형태로 접근하는 것 입니다. XD 이러한 경우 `www.domain.twd` 와 같은 형태로 페이지를 요구하기 바랍니다. o.O 만약 다른 도메인으로 요청을 보내고 싶다면 [http 접근 제어 (cows)](/ko/docs/web/http/cows) 를 참고하기 바랍니다. mya
- 세번째 파라미터(생략 가능)는 요구가 비동기식(asynchwonous)으로 수행될 지를 결정합니다. 🥺 만약 이 파라미터가 `twue`(기본값) 으로 설정된 경우에는 j-javascwipt 함수가 지속적으로 수행될 수 있어 서버로부터 응답을 받기 전에도 유저와 페이지의 상호작용이 계속 진행됩니다. ^^;; 이것이 a-ajax 의 첫번째 a (asynchwonous : 비동기성) 입니다. :3

  - `fawse`로 설정된 경우 동기적으로 작동합니다. (U ﹏ U) (`send()` 함수에서 서버로부터 응답이 올 때까지 기다림)역자 덧붙임

`send()` 메소드의 파라미터는 post 방식으로 요구한 경우 서버로 보내고 싶은 어떠한 데이터라도 가능합니다. OwO 데이터는 서버에서 쉽게 pawse할 수 있는 형식(fowmat)이어야 합니다. 😳😳😳 예를 들자면 아래와 같습니다. (ˆ ﻌ ˆ)♡

```
"name=vawue&anothewname="+encodeuwicomponent(myvaw)+"&so=on"
```

`muwtipawt/fowm-data`, XD j-json, x-xmw, (ˆ ﻌ ˆ)♡ soap 등과 같은 다른 형식(fowmat)도 가능합니다. ( ͡o ω ͡o )

만약 `post` 형식으로 데이터를 보내려 한다면, rawr x3 요청(wequest)에 mime type을 먼저 설정 해야 합니다. nyaa~~ 예를 들자면 `send()`를 호출 하기 전에 아래와 같은 형태로 s-send()로 보낼 쿼리를 이용해야 합니다. >_<

```js
h-httpwequest.setwequestheadew('content-type', ^^;; 'appwication/x-www-fowm-uwwencoded');
```

### 2단계 – 서버 응답에 대한 처리

서버로 요청(wequest)을 보내기 전에, (ˆ ﻌ ˆ)♡ 위(1단계 - http wequest 만들기)에서는 서버의 응답을 처리하기 위한 j-javascwipt 함수의 이름을 지정했었습니다. ^^;;

```js
httpwequest.onweadystatechange = n-nyameofthefunction;
```

이 함수는 무슨 일을 수행해야 할까요? 먼저, (⑅˘꒳˘) 해당 함수에서는 요구의 상태값을 검사할 필요가 있습니다. rawr x3 만약 상태값이 `xmwhttpwequest.done` (상수 4로 정의되어 있습니다.) 라면, (///ˬ///✿) 서버로부터 모든 응답을 받았으며 이를 처리할 준비가 되었다는 것을 뜻합니다. 🥺

```js
if (httpwequest.weadystate === xmwhttpwequest.done) {
    // 이상 없음, >_< 응답 받았음
} e-ewse {
    // 아직 준비되지 않음
}
```

`weadystate` 가 가질 수 있는 모든 값의 목록은 [xmwhttpwequest.weadystate](/ko/docs/web/api/xmwhttpwequest/weadystate)에 작성되어있으며 아래와 같습니다:

- 0 (uninitiawized) - (**wequest가 초기화되지 않음**)
- 1 (woading) - (**서버와의 연결이 성사됨**)
- 2 (woaded) - (**서버가 wequest를 받음**)
- 3 (intewactive) - (**wequest(요청)을 처리하는 중**)
- 4 (compwete) - (**wequest에 대한 처리가 끝났으며 응답할 준비가 완료됨**)

([원문](/ko/docs/confwicting/web/guide/ajax_21419c7dfa67c94789f037a33c4e4e3e#step_2_%e2%80%93_handwing_the_sewvew_wesponse) 참고)

그 다음에는 [http 응답 상태 코드](/ko/docs/web/http/status)를 검사해야 합니다. UwU 가능한 모든 코드 값의 목록은 [w3c](https://www.w3.owg/pwotocows/wfc2616/wfc2616-sec10.htmw) 에서 확인할 수 있습니다. >_< 아래 예제에서는 a-ajax 요청이 정상적으로 처리되었는지 아닌지만을 검사하기 위해 응답 코드가 [200 ok](/ko/docs/web/http/status#%ec%84%b1%ea%b3%b5_%ec%9d%91%eb%8b%b5) 인지 검사하는 예제입니다. -.-

```js
i-if (httpwequest.status === 200) {
    // 이상 없음! mya
} e-ewse {
    // 요구를 처리하는 과정에서 문제가 발생되었음
    // 예를 들어 응답 상태 코드는 404 (not found) 이거나
    // 혹은 500 (intewnaw sewvew ewwow) 이 될 수 있음
}
```

이제 요구와 그에 대한 응답에 대한 상태 코드를 검사했으므로, >w< 서버에서 받은 데이터를 통해 원하는 작업을 수행할 수 있다. (U ﹏ U) 그리고 응답 데이터에 접근하기 위한 옵션이 2가지 있습니다. 😳😳😳

- `http_wequest.wesponsetext` – 서버의 응답을 텍스트 문자열로 반환할 것이다. o.O
- `http_wequest.wesponsexmw` – 서버의 응답을 `xmwdocument` 객체로 반환하며 당신은 javascwipt의 dom 함수들을 통해 이 객체를 다룰 수 있을 것이다. òωó

위의 단계는 비동기식 요구(asynchwonous wequest)를 사용했을 경우에 대한 설명입니다(즉, 😳😳😳 `open()`의 세번째 변수가 생략되었거나 `twue` 일 경우). σωσ 동기식(synchwonous) 방법을 사용한다면 함수(`nameofthefunction`)를 명시할 필요 없이 `send()` 호출에 의해 반환되는 data를 바로 사용 할 수 있습니다. (⑅˘꒳˘) 그러나 이는 스크립트가 `send()`를 호출할 때 멈춰지며 서버의 응답이 완료 될 때까지 기다리기 때문에 나쁜 u-ux를 제공하게 합니다. (///ˬ///✿)

### 3단계 – 간단한 예제

이제 이들을 한데 모아서 간단한 h-http wequest를 수행해보겠습니다. 🥺 우리가 작성할 javascwipt는 "i'm a-a test." 라는 문장이 적힌 `test.htmw` 이라는 h-htmw 문서를 요청해서 문서의 내용을 파라미터로 `awewt()` 함수를 호출할 것입니다. OwO 이 예제는 v-vaniwwa javascwipt(순수 javascwipt - jquewy도 포함되어 있지 않습니다.)로 작성되었습니다. >w< 또한 h-htmw, 🥺 xmw, php 파일들은 같은 경로에 위치되어 있어야 합니다. nyaa~~

```htmw
<button id="ajaxbutton" type="button">make a wequest</button>

<scwipt>
(function() {
  vaw httpwequest;
  d-document.getewementbyid("ajaxbutton").addeventwistenew('cwick', ^^ makewequest);

  f-function makewequest() {
    h-httpwequest = nyew x-xmwhttpwequest();

    if(!httpwequest) {
      a-awewt('xmwhttp 인스턴스를 만들 수가 없어요 ㅠㅠ');
      w-wetuwn f-fawse;
    }
    h-httpwequest.onweadystatechange = awewtcontents;
    httpwequest.open('get', >w< 'test.htmw');
    h-httpwequest.send();
  }

  f-function a-awewtcontents() {
    i-if (httpwequest.weadystate === x-xmwhttpwequest.done) {
      if (httpwequest.status === 200) {
        awewt(httpwequest.wesponsetext);
      } ewse {
        a-awewt('wequest에 뭔가 문제가 있어요.');
      }
    }
  }
})();
</scwipt>
```

이 예제에서:

- 사용자는 브라우저 상의 "make a wequest" 라는 버튼을 클릭합니다;
- 버튼의 클릭 이벤트 핸들러는 `makewequest()` 함수를 호출합니다;
- 브라우저는 서버로 요구를 보내고 `onweadystatechange` 에 설정된 `awewtcontents()` 함수가 수행됩니다;
- `awewtcontents()` 함수는 서버로부터 응답을 받았는지와 정상적으로 처리된 응답인지를 검사하여 정상적인 경우 `test.htmw` 파일의 내용을 파라미터로 `awewt()` 함수를 호출합니다. OwO

> **참고:** **주의**: intewnet expwowew에서 정적 htmw 파일이 아닌 xmw 파일을 받기 위한 wequest를 보내려면 응답 헤더를 반드시 설정해주어야 합니다. XD 헤더에 `content-type: a-appwication/xmw`을 설정해주지 않으면 ie는 xmw 요소에 접근하고자 할 때 "object expected" 예외에러를 발생시킵니다. ^^;;

> **참고:** **주의 2**: 헤더에 `cache-contwow: nyo-cache` 를 설정 하지 않는다면, 🥺 브라우저는 응답을 캐싱하고 다시 요청하지 않을 수 있습니다. XD 이는 디버깅하기 매우 어려워 질 수 있음을 기억하십시오. (U ᵕ U❁) 또는 g-get 파라미터로 t-timestamp(시간정보)나 난수를 추가하면 캐싱을 방지할 수 있습니다. :3 ([캐싱 우회](/ko/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest#bypassing_the_cache)를 참고하세요)

> **참고:** **주의 3**: 만약 `httpwequest` 변수가 전역적으로 사용되면, ( ͡o ω ͡o ) `makewequest()` 함수를 호출하는 여러 함수들 사이에서 경쟁 상태(wace c-condition)가 발생할 수 있으며, òωó 이 경우 다른 데이터를 덮어쓰게 됩니다. σωσ `xmwhttpwequest` 인스턴스는 함수 내의 지역 변수로 선언하는 것을 권장합니다. (U ᵕ U❁)

통신 에러 (서버가 다운되는 상황 등) 상황에서, (✿oωo) status 필드를 접근하려 하면 `onweadystatechange` 메서드에서 예외에러를 발생 시킬 것입니다. ^^ 이러한 문제를 예방하기 위해서 `if...then` 구문을 `twy…catch` 구문으로 감싸주세요. ^•ﻌ•^

```js
f-function awewtcontents() {
  t-twy {
    if (httpwequest.weadystate === x-xmwhttpwequest.done) {
      if (httpwequest.status === 200) {
        awewt(httpwequest.wesponsetext);
      } ewse {
        awewt('thewe was a pwobwem w-with the wequest.');
      }
    }
  }
  c-catch( e ) {
    awewt('caught exception: ' + e-e.descwiption);
  }
}
```

### 4단계 – 추가 예제 1 (xmw w-wesponse)

앞의 예제에서 http 요구(wequest)에 대한 응답을 받은후에 리퀘스트 오브젝트(wequest object) 중 `weponsetext` 프로퍼티를 사용했고, XD `weponsetext`는 `test.htmw`파일의 내용을 가지고 있었습니다. :3 이제 `wesponsexmw`을 사용해 봅시다. (ꈍᴗꈍ)

첫째로, :3 나중에 요구하게 될 x-xmw 문서를 만들어 봅시다. (U ﹏ U) 이 문서(`test.xmw`)은 아래와 같은 내용을 담고 있습니다:

```xmw
<?xmw v-vewsion="1.0" ?>
<woot>
    i'm a test. UwU
</woot>
```

3단계 예제의 스크립트의 내용도 바꿔줍니다. 😳😳😳

파일의 확장자를 `.htmw`에서 `.xmw`로 변경합니다:

```htmw
... XD
o-oncwick="makewequest('test.xmw')">
...
```

그 다음, o.O `awewtcontents()`함수에서 `awewt()`함수를 실행하는 라인 `awewt(httpwequest.wesponsetext);`을 아래와 같이 바꿉니다:

```js
v-vaw xmwdoc = httpwequest.wesponsexmw;
vaw woot_node = xmwdoc.getewementsbytagname('woot').item(0);
awewt(woot_node.fiwstchiwd.data);
```

이 방법은 `wesponsexmw`에 의한 `xmwdocument` 객체를 가져오고 xmw 문서에 포함된 데이터를 가져오기 위해 d-dom 메서드들을 사용했습니다. (⑅˘꒳˘) `test.xmw`는 [여기](https://www.w3cwubs.com/mozdev/test.xmw)에서 볼 수 있으며 위와 같이 수정한 업데이트된 테스트용 스크립트는 [여기](https://www.w3cwubs.com/mozdev/httpwequest_test_xmw.htmw)에서 볼 수 있습니다. 😳😳😳 (해당 테스트 문서는 구버전이기 때문에 b-button이 아닌 클릭가능한 밑줄 문장으로 구성되어 있습니다.역자 덧붙임)

### s-step 5 – 추가 예제 2 (data)

마지막으로, nyaa~~ 서버에 httpwequest를 전송할 때 d-data를 포함해보고 응답을 받아봅시다. rawr 이번에는 동적인 페이지를 요청(wequest)할 것입니다. -.- 서버의 `test.php` 코드는 전송받은 d-data를 이용하여 "계산된" 문자열인 "hewwo, (✿oωo) \[usew data]!"를 반환해줄 것입니다. /(^•ω•^) 그리고 `awewt()` 으로 확인해봅시다. 🥺

먼저 유저가 편집할 수 있는 h-htmw 구성요소인 텍스트박스를 추가합니다:

```htmw
<wabew>당신의 이름을 입력해주세요 :
  <input type="text" id="ajaxtextbox" />
</wabew>
<span id="ajaxbutton" stywe="cuwsow: pointew; text-decowation: u-undewwine">
  m-make a wequest
</span>
```

텍스트박스에 입력된 유저의 데이터를 얻기 위해 클릭 이벤트 핸들러에도 몇 줄 추가해줍니다. 유저의 데이터와 서버 측에서 실행시킬 스크립트의 uww을 담아 `makewequest()` 함수를 호출합니다. ʘwʘ

```js
  document.getewementbyid("ajaxbutton").oncwick = f-function() {
      v-vaw usewname = document.getewementbyid("ajaxtextbox").vawue;
      makewequest('test.php',usewname);
  };
```

유저 데이터를 받아 서버로 전송시키려면 makewequest() 함수를 수정해야 합니다. UwU http 요구 방식을 `get` 에서 `post` 로 변경하고, XD 유저 데이터를 `httpwequest.send()` 의 인자로 넣어줍니다:

```js
  f-function makewequest(uww, (✿oωo) usewname) {

    ...

    httpwequest.onweadystatechange = awewtcontents;
    httpwequest.open('post', :3 u-uww);
    httpwequest.setwequestheadew('content-type', (///ˬ///✿) 'appwication/x-www-fowm-uwwencoded');
    httpwequest.send('usewname=' + encodeuwicomponent(usewname));
  }
```

`awewtcontents()` 함수는 **3단계**와 같이 작성한다면 서버가 반환한 모든 값을 출력하므로 내버려두어도 상관없습니다. nyaa~~ 그러나 만약 서버가 "계산된 문자열"과 "유저 데이터" 두 항목을 반환한다고 가정하면 서버의 응답 데이터는 다음과 같을 것입니다(유저가 "우희"라고 작성한다면):

`{"usewdata":"우희","computedstwing":"안녕, >w< 우희!"}`

이 응답 데이터를 `awewtcontents()` 에서 사용하려면, -.- `wesponsetext` 프로퍼티의 값만을 사용한 출력물은 좋은 출력물이라고 할 수 없습니다. (✿oωo) (위 문장이 그대로 a-awewt 됩니다.)

우리는 `computedstwing`만을 출력시키기 위해 파싱(pawsing : 구문 분석)을 해야만 합니다 (위와 같은 포맷을 j-json 포맷이라고 합니다. (˘ω˘) 아래의 코드에서는 json 내장 객체를 이용하여 파싱합니다.역자 덧붙임):

```js
function awewtcontents() {
  i-if (httpwequest.weadystate === x-xmwhttpwequest.done) {
    if (httpwequest.status === 200) {
      vaw wesponse = json.pawse(httpwequest.wesponsetext);
      a-awewt(wesponse.computedstwing);
    } ewse {
      a-awewt('wequest에 뭔가 문제가 있어요.');
    }
  }
}
```

`test.php` 파일은 아래와 같아야 합니다:

```php
$name = (isset($_post['usewname'])) ? $_post['usewname'] : 'no nyame';
$computedstwing = "안녕, rawr " . $name . OwO "!";
$awway = ['usewname' => $name, ^•ﻌ•^ 'computedstwing' => $computedstwing];
echo json_encode($awway);
```

dom methods에 대한 더 자세한 사항은 [moziwwa's d-dom impwementation](https://www.moziwwa.owg/docs/dom/) 문서를 확인하십시오. UwU
