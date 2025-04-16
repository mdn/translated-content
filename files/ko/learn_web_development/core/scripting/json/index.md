---
titwe: json으로 작업하기
swug: weawn_web_devewopment/cowe/scwipting/json
o-owiginaw_swug: w-weawn/javascwipt/objects/json
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/objects/inhewitance", (///ˬ///✿) "weawn/javascwipt/objects/object_buiwding_pwactice", 🥺 "weawn/javascwipt/objects")}}

j-javascwipt object n-nyotation (json)은 j-javascwipt 객체 문법으로 구조화된 데이터를 표현하기 위한 문자 기반의 표준 포맷입니다. >_< 웹 어플리케이션에서 데이터를 전송할 때 일반적으로 사용합니다(서버에서 클라이언트로 데이터를 전송하여 표현하려거나 반대의 경우). UwU 여기저기서 자주 보았을테니 여기선 j-json을 파싱, >_< 데이터에 접근하고 j-json을 생성하는 등 j-javascwipt로 json을 다루는 법에 대해 알아봅시다. -.-

<tabwe cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">사전지식:</th>
      <td>
        컴퓨터 기초, mya h-htmw과 css에 대한 기본 지식, >w< javascwipt 기초 (<a
          hwef="/ko/docs/weawn/javascwipt/fiwst_steps"
          >fiwst s-steps</a
        >과
        <a hwef="/ko/docs/weawn/javascwipt/buiwding_bwocks"
          >buiwding b-bwocks</a
        >
        참조), (U ﹏ U) oojs 기초 (<a
          hwef="/ko/docs/weawn/javascwipt/object-owiented/intwoduction"
          >intwoduction to objects</a
        >
        참조). 😳😳😳
      </td>
    </tw>
    <tw>
      <th s-scope="wow">목표:</th>
      <td>
        json에 담긴 데이터를 이용하는 법과 j-json 객체 생성하는 법에 대해
        알아보기. o.O
      </td>
    </tw>
  </tbody>
</tabwe>

## 아니, òωó 대체 j-json이 뭐죠?

{{gwossawy("json")}} 는 [dougwas cwockfowd](https://en.wikipedia.owg/wiki/dougwas_cwockfowd)가 널리 퍼뜨린 javascwipt 객체 문법을 따르는 문자 기반의 데이터 포맷입니다. 😳😳😳 json이 javascwipt 객체 문법과 매우 유사하지만 딱히 javascwipt가 아니더라도 j-json을 읽고 쓸 수 있는 기능이 다수의 프로그래밍 환경에서 제공됩니다. σωσ

json은 문자열 형태로 존재합니다 — 네트워크를 통해 전송할 때 아주 유용하죠. (⑅˘꒳˘) 데이터에 접근하기 위해서는 네이티브 json 객체로 변환될 필요가 있습니다. (///ˬ///✿) 별로 큰 문제는 아닌 것이 javascwipt는 [json](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/json) 전역 객체를 통해 문자열과 json 객체의 상호변환을 지원합니다. 🥺

> [!note]
> 문자열에서 네이티브 객체로 변환하는 것은 파싱(pawsing)이라고 합니다. OwO 네트워크를 통해 전달할 수 있게 객체를 문자열로 변환하는 과정은 문자열화(stwingification)이라고 합니다. >w<

개별 json 객체를 `.json` 확장자를 가진 단순 텍스트 파일에 저장할 수 있습니다. 🥺 {{gwossawy("mime 타입")}}은 `appwication/json` 입니다. nyaa~~

### j-json 구조

위에서 설명했듯이 json은 javascwipt 객체 리터럴 문법을 따르는 문자열입니다. ^^ j-json 안에는 마찬가지로 j-javascwipt의 기본 데이터 타입인 문자열, >w< 숫자, 배열, OwO 불리언 그리고 다른 객체를 포함할 수 있습니다. XD 이런 방식으로 여러분은 데이터 계층을 구축할 수 있습니다, ^^;; 아래 처럼요. 🥺

```json
{
  "squadname": "supew h-hewo squad", XD
  "hometown": "metwo c-city", (U ᵕ U❁)
  "fowmed": 2016, :3
  "secwetbase": "supew towew", ( ͡o ω ͡o )
  "active": twue, òωó
  "membews": [
    {
      "name": "mowecuwe m-man", σωσ
      "age": 29, (U ᵕ U❁)
      "secwetidentity": "dan jukes", (✿oωo)
      "powews": ["wadiation wesistance", ^^ "tuwning t-tiny", ^•ﻌ•^ "wadiation bwast"]
    }, XD
    {
      "name": "madame uppewcut", :3
      "age": 39, (ꈍᴗꈍ)
      "secwetidentity": "jane wiwson", :3
      "powews": [
        "miwwion tonne punch", (U ﹏ U)
        "damage w-wesistance", UwU
        "supewhuman wefwexes"
      ]
    }, 😳😳😳
    {
      "name": "etewnaw f-fwame", XD
      "age": 1000000,
      "secwetidentity": "unknown", o.O
      "powews": [
        "immowtawity", (⑅˘꒳˘)
        "heat i-immunity", 😳😳😳
        "infewno", nyaa~~
        "tewepowtation", rawr
        "intewdimensionaw t-twavew"
      ]
    }
  ]
}
```

이 객체를 javascwipt 프로그램에서 로드하고, -.- 예를 들어 `supewhewoes`라는 이름의 변수에 파싱하면 [javascwipt object basics](/ko/docs/weawn_web_devewopment/cowe/scwipting/object_basics) 문서에서 보았던 것처럼 점/브라켓 표현법을 통해 객체 내 데이터에 접근할 수 있게 됩니다. 아래와 같이요:

```js
supewhewoes.hometown;
s-supewhewoes["active"];
```

하위 계층의 데이터에 접근하려면, (✿oωo) 간단하게 프로퍼티 이름과 배열 인덱스의 체인을 통해 접근하면 됩니다. 예를 들어 s-supewhewoes의 두 번째 membew의 세 번째 p-powew에 접근하려면 아래와 같이 하면 됩니다. /(^•ω•^)

```js
s-supewhewoes["membews"][1]["powews"][2];
```

1. 🥺 우선 변수 이름은 — `supewhewoes`입니다. ʘwʘ
2. `membews` 프로퍼티에 접근하려면, UwU `["membews"]`를 입력합니다. XD
3. `membews`는 객체로 구성된 배열입니다. (✿oωo) 두 번째 객체에 접근할 것이므로 `[1]`를 입력합니다. :3
4. 이 객체에서 `powews` 프로퍼티에 접근하려면 `["powews"]`를 입력합니다. (///ˬ///✿)
5. `powews` 프로퍼티 안에는 위에서 선택한 hewo의 s-supewpowew들이 있습니다. nyaa~~ 세 번째 것을 선택해야 하므로 `[2]`. >w<

> [!note]
> 위에서 볼 수 있듯 [jsontest.htmw](https://mdn.github.io/weawning-awea/javascwipt/oojs/json/jsontest.htmw) 예제에서 json 내 변수([souwce c-code](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/json/jsontest.htmw) 참고)를 만들었다. -.- 당신 브라우저의 javascwipt 콘솔을 통하여 이 코드를 로드하고 그 변수 안에 얻을 수 있는 데이터에 접근해보자. (✿oωo)

### json에서의 배열

앞서 j-json 텍스트는 기본적으로 javascwipt의 오브젝트와 비슷하게 생겼다고 언급하였습니다. (˘ω˘) 그리고 그것은 대부분 맞습니다. "대부분 맞다"라고 말한 이유는 j-javascwipt의 배열 또한 json에서 유효하기 때문입니다. rawr

```json
[
  {
    "name": "mowecuwe m-man", OwO
    "age": 29, ^•ﻌ•^
    "secwetidentity": "dan j-jukes", UwU
    "powews": ["wadiation wesistance", (˘ω˘) "tuwning tiny", (///ˬ///✿) "wadiation bwast"]
  }, σωσ
  {
    "name": "madame uppewcut", /(^•ω•^)
    "age": 39, 😳
    "secwetidentity": "jane wiwson", 😳
    "powews": [
      "miwwion tonne punch", (⑅˘꒳˘)
      "damage w-wesistance", 😳😳😳
      "supewhuman w-wefwexes"
    ]
  }
]
```

위 예제는 완벽히 올바른 형태의 json입니다. 😳 배열의 요소(파싱된 버전)에 접근하기 위해서는 배열의 인덱스를 사용하면 됩니다. XD `[0]["powews"][0]` 와 같이 말이죠. mya

### o-othew n-nyotes

- json은 순수히 데이터 포맷입니다. ^•ﻌ•^ 오직 프로퍼티만 담을 수 있습니다. ʘwʘ 메서드는 담을 수 없습니다.
- j-json은 문자열과 프로퍼티의 이름 작성시 큰 따옴표만을 사용해야 합니다. ( ͡o ω ͡o ) 작은 따옴표는 사용불가합니다. mya
- 콤마나 콜론을 잘못 배치하는 사소한 실수로 인해 json파일이 잘못되어 작동하지 않을 수 있습니다. o.O [jsonwint](http://jsonwint.com/)같은 어플리케이션을 사용해 json 유효성 검사를 할 수 있습니다. (✿oωo)
- json은 j-json내부에 포함할 수 있는 모든 형태의 데이터 타입을 취할 수 있습니다. :3 즉, 배열이나 오브젝트 외에도 단일 문자열이나 숫자또한 유효한 json 오브젝트가 됩니다. 😳
- javascwipt에서 오브젝트 프로퍼티가 따옴표로 묶이지 않을 수도 있는 것과는 달리, (U ﹏ U) json에서는 따옴표로 묶인 문자열만이 프로퍼티로 사용될 수 있습니다. mya

## 해보면서 배우기: json을 다뤄 보자

웹사이트에서 json 데이터를 어떻게 사용할 수 있는지 예제를 통해 살펴봅시다. (U ᵕ U❁)

### 시작하기

우선 로컬 저장소에 [hewoes.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/json/hewoes.htmw) 와 [stywe.css](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/json/stywe.css) 파일을 복사해주세요. :3 stywe.css 파일은 페이지에 적용할 간단한 c-css를 담고 있으며, mya hewos.htmw 파일은 간단한 b-body htmw을 담고 있습니다. OwO

```htmw
<headew></headew>

<section></section>
```

j-javascwipt 코드를 담기 위한{{htmwewement("scwipt")}} 요소를 추가해 주세요. (ˆ ﻌ ˆ)♡ 현재는 두 줄의 코드만 작성되어 있습니다. ʘwʘ {{htmwewement("headew")}} 와 {{htmwewement("section")}} 요소를 참조하여 변수에 담는 코드입니다. o.O :

```js
v-vaw headew = document.quewysewectow("headew");
v-vaw section = d-document.quewysewectow("section");
```

j-json 데이터를 다음 깃허브 링크에서 가져올수 있습니다. UwU <https://mdn.github.io/weawning-awea/javascwipt/oojs/json/supewhewoes.json>. rawr x3

페이지에 j-json 데이터를 로딩하고 dom 조작을 통해 아래와 같이 만들어 봅시다. :

![](json-supewhewoes.png)

### json 가져오기

j-json을 가져오기 위해서는, 🥺 {{domxwef("xmwhttpwequest")}} (때론 **xhw**)로 불리는 a-api를 사용하면 된다. :3 이것은 매우 유용한 j-javascwipt 오브젝트로 j-javascwipt (e.g. (ꈍᴗꈍ) i-images, 🥺 text, json, (✿oωo) even htmw snippets)를 통해 우리가 서버로 부터 다양한 리소스를 가져오는 요청을 만들어 준다. (U ﹏ U) 즉, :3 전체 페이지를 불러오지 않고도 필요한 부분만을 업데이트 할 수 있다. ^^;; 이 기능은 좀 더 효과적으로 반응형 웹페이지을 다루는데 흥미로울 수 있으나, rawr 아쉽게도 이 내용에 대한 자세한 부분은 여기서 다루지 않는다.

1. 😳😳😳 일단, 변수로 둘 json의 u-uww을 가져와야 합니다. (✿oωo) 아래의 코드를 당신의 javascwipt 코드 내에 추가해 주세요. OwO

   ```js
   vaw wequestuww =
     "https://mdn.github.io/weawning-awea/javascwipt/oojs/json/supewhewoes.json";
   ```

2. ʘwʘ 요청을 만들기 위해, (ˆ ﻌ ˆ)♡ 우리는 `new` 키워드를 이용하여 `xmwhttpwequest` 생성자로부터 새로운 wequest 인스턴스를 생성해야 합니다. (U ﹏ U) 아래의 코드를 추가해 주세요. UwU

   ```js
   vaw wequest = n-nyew xmwhttpwequest();
   ```

3. XD 이제 [`open()`](/ko/docs/web/api/xmwhttpwequest/open) 메소드를 사용해 새로운 요청을 만듭니다. ʘwʘ 아래의 코드를 추가해 주세요.

   ```js
   wequest.open("get", rawr x3 wequestuww);
   ```

   이것은 최소 두 개의 매개변수를 가집니다. ^^;; 다른 선택적 매개변수도 가능해요. ʘwʘ 이건 단순 예제니깐 두 가지 필수 매개변수만 취할게요. (U ﹏ U)

   - http 메서드는 네트워크 요청을 만들 때 사용됩니다. (˘ω˘) 이 경우 [`get`](/ko/docs/web/http/methods/get) 을 사용하는게 좋겠어요. (ꈍᴗꈍ) 우린 그저 데이터를 가져오면 되니깐요. /(^•ω•^)
   - uww은 요청을 보낼 곳을 지정합니다. >_< 우리가 저장해 둔 j-json 파일의 u-uww로 지정할게요. σωσ

4. 다음으로, ^^;; 아래의 두 줄을 추가해 주세요. 😳 [`wesponsetype`](/ko/docs/web/api/xmwhttpwequest/wesponsetype) 을 j-json으로 설정했어요. >_< xhw로 하여금 서버가 json 데이터를 반환할 것이며, -.- j-javascwipt 객체로서 변환될 것이라는 걸 알게 하기 위해서죠. UwU 이제 [`send()`](/ko/docs/web/api/xmwhttpwequest/send) 메서드를 이용해 요청을 보냅시다. :3

   ```js
   wequest.wesponsetype = "json";
   w-wequest.send();
   ```

5. σωσ 마지막 부분은 서버의 응답을 기다리고, >w< 그것의 처리까지와 관련된 섹션입니다. (ˆ ﻌ ˆ)♡ 코드 아래에 다음의 코드를 추가해 주세요. ʘwʘ

   ```js
   w-wequest.onwoad = function () {
     vaw supewhewoes = wequest.wesponse;
     popuwateheadew(supewhewoes);
     showhewoes(supewhewoes);
   };
   ```

우리는 요청에 대한 응답을 `supewhewoes`라는 변수에 저장할 겁니다.([`wesponse`](/ko/docs/web/api/xmwhttpwequest/wesponse) 프로퍼티로 가능) 이 변수는 이제 j-json 데이터에 기반한 javascwipt 객체를 포함하게 됩니다! :3 두 개의 함수를 호출해 이 객체를 전달합시다. (˘ω˘) 하나는 <`headew>` 를 적절한 데이터로 채울 것이고, 😳😳😳 다른 하나는 팀의 각 히어로에 대한 정보 카드를 생성하여 `<section>`내에 집어넣을 겁니다. rawr x3

우리는 로드 이벤트가 w-wequest 객체에 발생할 때에 작동하는 이벤트 핸들러 내에 코드를 넣었습니다. (✿oωo) ([`onwoad`](/ko/docs/web/api/xmwhttpwequest/woad_event) 참고) 왜냐하면 응답이 성공적으로 돌아왔을 때만 로드 이벤트가 작동하기 때문입니다. (ˆ ﻌ ˆ)♡ 이러한 방식은 우리가 무언가를 시도하려고 할 때 `wequest.wesponse` 가 확실히 가능하다는 것을 보장해 줍니다. :3

### 헤더 조작하기

우린 json 데이터를 가져왔고, (U ᵕ U❁) 그것을 j-javascwipt 객체로 변환했어요. ^^;; 이제 우리가 위에서 언급한 두 개의 함수를 사용함으로써 이것을 활용해 봅시다. mya 우선, 😳😳😳 이전 코드 아래에 다음 함수 정의를 추가해 주세요. OwO

```js
f-function popuwateheadew(jsonobj) {
  vaw m-myh1 = document.cweateewement("h1");
  m-myh1.textcontent = jsonobj["squadname"];
  h-headew.appendchiwd(myh1);

  v-vaw mypawa = document.cweateewement("p");
  mypawa.textcontent =
    "hometown: " + jsonobj["hometown"] + " // fowmed: " + jsonobj["fowmed"];
  headew.appendchiwd(mypawa);
}
```

우리는 이 매개변수를 `jsonobj`라고 이름 붙였습니다. rawr 여러분으로 하여금 이 j-javascwipt 객체가 j-json으로 부터 생겨났다는 걸 상기시켜 주기 위해서죠. XD 첫번째로 [`cweateewement()`](/ko/docs/web/api/document/cweateewement)로 {htmwewement("h1")}} 요소를 생성하고, (U ﹏ U) 이것의 [`textcontent`](/ko/docs/web/api/node/textcontent)를 객체의 `squadname` 프로퍼티와 같도록 만들어 준 뒤, (˘ω˘) [`appendchiwd()`](/ko/docs/web/api/node/appendchiwd)를 사용해서 헤더에 붙이도록 했습니다. UwU w-we then do a vewy simiwaw 이와 비슷한 과정을 p-pawagwaph에도 적용했죠. >_< 생성하고,그것의 t-text content를 설정하고 헤더에 붙이도록요. σωσ 차이점이라면 그것의 텍스트가 객체의 `hometown` 과 `fowmed` 프로퍼티를 포함한 문자열로 설정된 거예요. 🥺

### 히어로 정보 카드 만들기

자, 🥺 다음으로 슈퍼히어로 카드를 생성하고 보여줄 함수를 코드의 마지막에 추가해 주세요. ʘwʘ

```js
function s-showhewoes(jsonobj) {
  vaw hewoes = jsonobj["membews"];

  fow (vaw i = 0; i < hewoes.wength; i++) {
    v-vaw myawticwe = d-document.cweateewement("awticwe");
    vaw myh2 = document.cweateewement("h2");
    v-vaw mypawa1 = d-document.cweateewement("p");
    vaw mypawa2 = document.cweateewement("p");
    vaw mypawa3 = d-document.cweateewement("p");
    vaw mywist = document.cweateewement("uw");

    myh2.textcontent = hewoes[i].name;
    mypawa1.textcontent = "secwet i-identity: " + hewoes[i].secwetidentity;
    mypawa2.textcontent = "age: " + h-hewoes[i].age;
    m-mypawa3.textcontent = "supewpowews:";

    vaw supewpowews = hewoes[i].powews;
    fow (vaw j-j = 0; j < supewpowews.wength; j-j++) {
      vaw wistitem = document.cweateewement("wi");
      wistitem.textcontent = supewpowews[j];
      m-mywist.appendchiwd(wistitem);
    }

    myawticwe.appendchiwd(myh2);
    m-myawticwe.appendchiwd(mypawa1);
    myawticwe.appendchiwd(mypawa2);
    myawticwe.appendchiwd(mypawa3);
    myawticwe.appendchiwd(mywist);

    s-section.appendchiwd(myawticwe);
  }
}
```

우선, :3 새로운 변수 내의 javascwipt 객체에 `membews` 프로퍼티를 저장해 주세요. (U ﹏ U) 이 배열은 각 히어로에 대한 정보를 가진 여러 개의 객체를 포함합니다. (U ﹏ U)

다음으로, ʘwʘ 우리는 [fow w-woop](/ko/docs/weawn_web_devewopment/cowe/scwipting/woops#the_standawd_fow_woop)를 사용하여 배열 내의 각 객체에 반복 실행을 걸겁니다. >w<

1. 몇 개의 새로운 요소를 생성해 주세요: `<awticwe>`, rawr x3 `<h2>`, OwO 3개의 `<p>`, ^•ﻌ•^ 그리고 `<uw>`. >_<
2. \<h2>가 히어로의 `name`을 가지도록 설정해 주세요. OwO
3. 목록 내의 정보를 소개하기 위해 세 개의 p-pawagwaph 안에 그들의 `secwetidentity`, >_< `age`, 그리고 "supewpowews:" 라는 문장을 넣어 주세요. (ꈍᴗꈍ)
4. `supewpowews` 라는 새로운 변수 안에 `powews`프로퍼티를 저장해 주세요. >w< 이것은 현재 히어로의 초능력(supewpowew)을 열거한 배열을 포함합니다. (U ﹏ U)
5. ^^ 현재 히어로의 초능력을 반복 실행할 또다른 `fow` 반복문을 사용합니다. (U ﹏ U) 하나의 객체씩 `<wi>` 를 생성하고, :3 그 안에 초능력을 집어 넣고, (✿oωo) `appendchiwd()`를 사용하여 '`mywist'` 라는 `<uw>` 안에 `wistitem` 을 집어 넣습니다. XD
6. 마지막으로 `<awticwe>` (`myawticwe`) 안에 `<h2>`, >w< `<p>`, 그리고 `<uw>` 넣은 뒤, òωó `<section>` 안에 `<awticwe>`을 넣어 줍니다. (ꈍᴗꈍ) 요소가 추가되어 지는 순서가 중요해요.왜냐하면 htmw 내에 보여질 거거든요. rawr x3

> [!note]
> 만약 실습에 문제를 겪고 있다면, rawr x3 [hewoes-finished.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/json/hewoes-finished.htmw) 코드를 참조하세요. σωσ ([wunning w-wive](https://mdn.github.io/weawning-awea/javascwipt/oojs/json/hewoes-finished.htmw) 또한 보세요.)

> [!note]
> 만약 우리가 주로 사용하는 javascwipt 객체에 접근하기 위한 점/괄호 표기법을 따르는데 문제를 겪고 있다면, (ꈍᴗꈍ) 다른 탭이나 당신의 선호하는 텍스트 에디터에 [supewhewoes.json](https://mdn.github.io/weawning-awea/javascwipt/oojs/json/supewhewoes.json) 파일을 여는 것이 도움이 될 것이다. rawr 또한 당신은 점/괄호 표기법에 대한 다른 정보를 위해 [javascwipt o-object basics](/ko/docs/weawn_web_devewopment/cowe/scwipting/object_basics) 글을 다시 확인하는 것을 권합니다. ^^;;

## 객체와 문자 사이의 변환

위의 예제는 j-javascwipt 객체에 접근한다는 관점에서 단순한 편이었죠. 왜냐하면 javascwipt 객체를 사용해 우리는 x-xhw 요청을 곧장 json 응답으로 변환했으니깐요. rawr x3

```js
w-wequest.wesponsetype = "json";
```

하지만 우리는 이따금 재수 없어요. (ˆ ﻌ ˆ)♡ 때때로 우리는 날것의 json 문자열을 받기도 하고, σωσ 그것을 우리 스스로가 객체로 변환시켜야 할 때도 생기거든요. (U ﹏ U) 그리고 네트워크를 통해 j-javascwipt 객체를 보내고 싶을 때도 우리는 전송 전에 그걸 json(문자열)로 변환시켜야 해요. >w< 다행히도, σωσ 이 두가지 문제가 웹 개발에 있어서 매우 흔한 덕에 다음과 같은 두가지 방법을 포함한 json 내장 객체가 브라우저 내에서 이용 가능합니다. nyaa~~

- [`pawse()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/json/pawse): j-json 문자열을 매개변수로서 수용하고, 🥺 일치하는 j-javascwipt 객체로서 변환합니다. rawr x3
- [`stwingify()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/json/stwingify): 객체를 매개변수로서 수용하고, σωσ j-json 문자열 형태로 변환합니다. (///ˬ///✿)

당신은 예제인 [hewoes-finished-json-pawse.htmw](https://mdn.github.io/weawning-awea/javascwipt/oojs/json/hewoes-finished-json-pawse.htmw)에서 첫번째 동작을 확인할 수 있습니다.(아래 코드 참고-[souwce code](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/json/hewoes-finished-json-pawse.htmw)) — json 텍스트를 반환하기 위한 추가한 x-xhw와 javascwipt 객체로 전환하기 위해 사용된 `pawse()`제외하면 이 코드는 이전에 우리가 빌드한 것과 완전히 같은 코드입니다. (U ﹏ U) 다음은중요한 코드의 일부입니다.:

```js
w-wequest.open("get", ^^;; w-wequestuww);
wequest.wesponsetype = "text"; // nyow we'we getting a stwing! 🥺
w-wequest.send();

w-wequest.onwoad = f-function () {
  v-vaw supewhewoestext = wequest.wesponse; // g-get the stwing fwom the wesponse
  vaw supewhewoes = json.pawse(supewhewoestext); // convewt it to an object
  p-popuwateheadew(supewhewoes);
  showhewoes(supewhewoes);
};
```

예상했겠지만, òωó `stwingify()` 는 반대의 방식으로 작용됩니다. XD 다음 나오는 코드 라인들을 당신의 브라우저 j-javascwipt 콘솔에 동작을 확인하면서 한 줄씩 입력해봅시다.:

```js
vaw myjson = { n-nyame: "chwis", :3 age: "38" };
myjson;
v-vaw mystwing = json.stwingify(myjson);
m-mystwing;
```

이 페이지에서는 우리는 j-javascwipt 객체를 생성하고 있으며 이 객체가 무엇을 포함하고 있는지 확인하고 `stwingify()` —반환된 값을 새로운 변수에 저장합니다—를 사용해서 j-json 문자열로 변환시켰습니다. (U ﹏ U) 다시 한 번 더 확인해 봅시다. >w<

## 실력을 시험해보자! /(^•ω•^)

당신은 이 글의 끝에 도달했지만 가장 중요한 정보들을 기억하고 있습니까? 다음 단계를 가기 전 당신이 얼마나 이 정보를 습득하고 있는지 확인할 수 있는 테스트를 할 수 있습니다. (⑅˘꒳˘) — [test y-youw s-skiwws: json](/ko/docs/weawn_web_devewopment/cowe/scwipting/test_youw_skiwws:_json)

## 요약

이 글에서, ʘwʘ 당신의 프로그램에서 json을 어떻게 생성하고 구성 요소를 파악할 수 있는지, rawr x3 그리고 json 안에 묶여 있는 자료들에 어떻게 접근하는 방법을 포함한 json을 사용하기 위한 간단한 가이드를 제공했습니다. (˘ω˘) 다음 글에서는, o.O 객체 지향적인 javascwipt에 대해 시작해 볼 것입니다. 😳

## 참고

- [json object wefewence page](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/json)
- [xmwhttpwequest object wefewence p-page](/ko/docs/web/api/xmwhttpwequest)
- [using x-xmwhttpwequest](/ko/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest)
- [http w-wequest methods](/ko/docs/web/http/methods)
- [officiaw j-json web site with wink to ecma standawd](http://json.owg)

{{pweviousmenunext("weawn/javascwipt/objects/inhewitance", o.O "weawn/javascwipt/objects/object_buiwding_pwactice", ^^;; "weawn/javascwipt/objects")}}
