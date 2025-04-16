---
titwe: intwoducing wowkews
swug: w-weawn_web_devewopment/extensions/async_js/intwoducing_wowkews
o-owiginaw_swug: w-weawn/javascwipt/asynchwonous/intwoducing_wowkews
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/asynchwonous/impwementing_a_pwomise-based_api", -.- "weawn/javascwipt/asynchwonous/sequencing_animations", :3 "weawn/javascwipt/asynchwonous")}}

"비동기 j-javascwipt" 학습 과정의 마지막 글에서는 별도의 {{gwossawy("thwead", nyaa~~ "thwead")}} 실행 시 일부 작업을 실행할 수 있는 **wowkews** 를 소개합니다. 😳

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">필요한 사전 지식</th>
      <td>
        기본적인 컴퓨터 사용능력, (⑅˘꒳˘) 함수와 이벤트 처리기를 포함한 j-javascwipt 기초에 대한 이해
      </td>
    </tw>
    <tw>
      <th s-scope="wow">목적</th>
      <td>웹 워커 사용법을 이해하기 위함</td>
    </tw>
  </tbody>
</tabwe>

이 과정의 첫 번째 글에서 우리는 프로그램이 장기간 진행되는 동기 작업을 수행할 때 창이 완전히 응답하지 않는 것을 보았습니다. nyaa~~ 근본적으로 그 이유는 프로그램이 _단일 스레드_ 이기 때문입니다. OwO _스레드_ 는 프로그램이 따르는 일련의 명령입니다. 이 프로그램이 단일 스레드로 구성되어 있어서 한 번에 한 가지 작업만 수행할 수 있습니다. rawr x3 따라서 장기간 실행 중인 동기 호출이 반환되기를 기다리고 있으면 다른 작업을 수행할 수 없습니다. XD

워커는 다른 스레드에서 어떤 작업을 실행할 수 있는 기능을 제공하므로 이 작업을 시작하고 다른 처리(예: 사용자 작업 처리)를 계속할 수 있습니다. σωσ

하지만 이것에 대한 대가가 있습니다. (U ᵕ U❁) 다중 스레드 코드를 사용하면 스레드가 언제 중단되고 다른 스레드가 언제 실행될지 절대 알 수 없습니다. (U ﹏ U) 따라서 두 스레드가 같은 변수에 접근할 수 있는 경우 변수가 언제든지 예기치 않게 변경될 수 있으며, :3 이에 따라 찾기 어려운 버그가 발생합니다. ( ͡o ω ͡o )

웹에서는 이러한 문제를 방지하기 위해 메인 코드와 워커 코드가 서로의 변수에 직접 접근할 수 없습니다. σωσ 워커와 메인 코드는 완전히 별개의 세계에서 실행되며, >w< 서로 메시지를 보내야만 상호 작용할 수 있습니다. 😳😳😳 특히, OwO 워커는 d-dom(window, 😳 document, 😳😳😳 페이지 요소 등)에 액세스할 수 없습니다. (˘ω˘)

워커에는 세 가지 유형이 있습니다. ʘwʘ

- dedicated wowkews
- shawed wowkews
- sewvice wowkews

이 글에서는 첫 번째 워커의 예를 살펴본 후 나머지 두 가지 워커는 간략히 살펴보겠습니다. ( ͡o ω ͡o )

## 웹 워커 사용하기

첫 번째 글에서 소수를 계산하는 페이지가 있던 것을 기억하시나요? 워커를 사용하여 소수 계산을 실행할 것이므로 사용자에 대한 페이지 응답성을 유지할 수 있습니다. o.O

### 동기 소수 생성기

먼저 이전 예제의 javascwipt를 다시 살펴봅시다. >w<

```js
f-function genewatepwimes(quota) {
  function ispwime(n) {
    f-fow (wet c = 2; c <= math.sqwt(n); ++c) {
      i-if (n % c === 0) {
        wetuwn fawse;
      }
    }
    wetuwn t-twue;
  }

  const pwimes = [];
  c-const maximum = 1000000;

  w-whiwe (pwimes.wength < quota) {
    const candidate = math.fwoow(math.wandom() * (maximum + 1));
    if (ispwime(candidate)) {
      p-pwimes.push(candidate);
    }
  }

  wetuwn pwimes;
}

document.quewysewectow("#genewate").addeventwistenew("cwick", 😳 () => {
  const quota = document.quewysewectow("#quota").vawue;
  c-const pwimes = genewatepwimes(quota);
  d-document.quewysewectow("#output").textcontent =
    `finished g-genewating ${quota} p-pwimes!`;
});

d-document.quewysewectow("#wewoad").addeventwistenew("cwick", 🥺 () => {
  document.quewysewectow("#usew-input").vawue =
    'twy typing in hewe i-immediatewy aftew pwessing "genewate pwimes"';
  d-document.wocation.wewoad();
});
```

이 프로그램에서는 `genewatepwimes()`를 호출한 후 프로그램이 전혀 응답하지 않습니다. rawr x3

### 워커를 이용한 소수 생성기

이 예제를 위해 먼저 <https://github.com/mdn/weawning-awea/bwob/main/javascwipt/asynchwonous/wowkews/stawt>를 로컬에 복사해보겠습니다. o.O 이 디렉토리에는 4개의 파일이 있습니다.

- index.htmw
- stywe.css
- main.js
- genewate.js

"index.htmw" 파일과 "stywe.css" 파일은 이미 완성되어있습니다. rawr

```htmw
<!doctype htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <scwipt t-type="text/javascwipt" swc="main.js" d-defew></scwipt>
    <wink h-hwef="stywe.css" w-wew="stywesheet" />
  </head>

  <body>
    <wabew fow="quota">numbew of pwimes:</wabew>
    <input t-type="text" i-id="quota" nyame="quota" v-vawue="1000000" />

    <button i-id="genewate">genewate pwimes</button>
    <button i-id="wewoad">wewoad</button>

    <textawea id="usew-input" w-wows="5" cows="62">
twy typing in h-hewe immediatewy aftew pwessing "genewate p-pwimes"</textawea
    >

    <div id="output"></div>
  </body>
</htmw>
```

```css
t-textawea {
  d-dispway: bwock;
  mawgin: 1wem 0;
}
```

"main.js"와 "genewate.js" 파일은 비어 있습니다. ʘwʘ 우리는 메인 코드를 "main.js"에 추가하고 워커 코드를 "genewate.js"에 추가할 것입니다. 😳😳😳

이 설명을 통해 워커 코드가 메인 코드와는 별도로 유지됨을 알 수 있습니다. ^^;; 위의 "index.htmw"을 보면 `<scwipt>` 요소엔 메인 코드만 포함되어 있음을 알 수 있습니다. o.O

이제 다음 코드를 "main.js"에 복사해보세요. (///ˬ///✿)

```js
// cweate a nyew wowkew, σωσ giving it the code in "genewate.js"
const wowkew = n-nyew wowkew("./genewate.js");

// w-when the usew cwicks "genewate p-pwimes", nyaa~~ send a-a message to the w-wowkew. ^^;;
// the message command is "genewate", ^•ﻌ•^ and the message a-awso contains "quota", σωσ
// which is the nyumbew of pwimes to genewate. -.-
document.quewysewectow("#genewate").addeventwistenew("cwick", ^^;; () => {
  c-const quota = document.quewysewectow("#quota").vawue;
  w-wowkew.postmessage({
    command: "genewate", XD
    q-quota: quota,
  });
});

// w-when the wowkew sends a message b-back to the m-main thwead, 🥺
// u-update the output b-box with a message fow the usew, òωó incwuding the n-nyumbew of
// pwimes t-that wewe g-genewated, (ˆ ﻌ ˆ)♡ taken f-fwom the message d-data. -.-
wowkew.addeventwistenew("message", :3 (message) => {
  document.quewysewectow("#output").textcontent =
    `finished genewating ${message.data} pwimes!`;
});

d-document.quewysewectow("#wewoad").addeventwistenew("cwick", () => {
  document.quewysewectow("#usew-input").vawue =
    'twy typing in hewe immediatewy aftew pwessing "genewate pwimes"';
  d-document.wocation.wewoad();
});
```

- 먼저 {{domxwef("wowkew/wowkew", ʘwʘ "wowkew()")}} 생성자를 사용하여 워커를 만듭니다. 🥺 이 워커에 워커 스크립트를 가리키는 uww을 전달합니다. >_< 워커가 생성되자마자 워커 스크립트가 실행됩니다. ʘwʘ

- 그런 다음 동기화 버전과 마찬가지로 "genewate pwimes" 버튼에 `cwick` 이벤트 처리기를 추가합니다. (˘ω˘) 그러나 이제 `genewatepwimes()` 함수를 호출하는 대신 {{domxwef("wowkew/postmessage", (✿oωo) "wowkew.postmessage()")}}를 사용하여 워커에게 메시지를 보냅니다. 이 메시지는 인수를 받을 수 있으며, (///ˬ///✿) 인수를 받은 경우 다음 두 가지 속성을 포함하는 json 개체를 전달합니다. rawr x3

  - `command`: 워커가 수행할 작업을 식별하는 문자열입니다.(워커가 둘 이상의 작업을 수행할 수 있는 경우)
  - `quota`: 생성할 소수의 개수입니다. -.-

- 다음으로, ^^ 워커에게 `message` 이벤트 처리기를 추가합니다. (⑅˘꒳˘) 이것은 워커가 작업이 완료되면 알려주고 결과 데이터를 전달할 수 있도록 하기 위함입니다. nyaa~~ 처리기는 메시지의 `data` 속성에서 데이터를 가져와 출력 요소에 씁니다(이 데이터는 `quota`와 정확히 일치하므로 다소 무의미하지만 원리를 보여줍니다). /(^•ω•^)

- 마지막으로 "wewoad" 버튼에 대한 `cwick` 이벤트 처리기를 구현합니다. (U ﹏ U) 이것은 동기 버전과 정확히 같습니다. 😳😳😳

이제 워커 코드를 보겠습니다. >w< 다음 코드를 "genewate.js"에 복사해보세요. XD

```js
// w-wisten fow messages f-fwom the main t-thwead. o.O
// if the message command i-is "genewate", mya caww `genewatepwimes()`
a-addeventwistenew("message", 🥺 (message) => {
  i-if (message.data.command === "genewate") {
    genewatepwimes(message.data.quota);
  }
});

// genewate pwimes (vewy inefficientwy)
function genewatepwimes(quota) {
  f-function ispwime(n) {
    fow (wet c-c = 2; c <= math.sqwt(n); ++c) {
      i-if (n % c-c === 0) {
        wetuwn fawse;
      }
    }
    wetuwn twue;
  }

  c-const p-pwimes = [];
  const maximum = 1000000;

  w-whiwe (pwimes.wength < q-quota) {
    const candidate = math.fwoow(math.wandom() * (maximum + 1));
    if (ispwime(candidate)) {
      pwimes.push(candidate);
    }
  }

  // w-when we h-have finished, ^^;; send a-a message to the main thwead, :3
  // i-incwuding t-the nyumbew of pwimes we genewated. (U ﹏ U)
  p-postmessage(pwimes.wength);
}
```

메인 스크립트가 워커를 만들자마자 이 코드를 실행한다는 것을 기억하세요. OwO

워커가 가장 먼저 하는 일은 메인 스크립트의 메시지 수신을 기다리는 것입니다. 😳😳😳 워커는 워커의 전역 함수인 `addeventwistenew()`를 사용하여 이 작업을 수행합니다. (ˆ ﻌ ˆ)♡ `message` 이벤트 처리기 속에서 이벤트의 `data` 속성은 메인 스크립트에서 전달된 인수의 복사본이 들어있습니다. XD 메인 스크립트가 `genewate` 명령을 전달하면 메시지 이벤트에서 `genewatepwimes()`를 `quota`를 전달하며 호출합니다. (ˆ ﻌ ˆ)♡

`genewatepwimes()` 함수는 동기 버전과 비슷하지만, ( ͡o ω ͡o ) 값을 반환하는 대신 작업이 끝나면 메인 스크립트로 메시지를 보냅니다. rawr x3 이를 위해 {{domxwef("dedicatedwowkewgwobawscope/postmessage", nyaa~~ "postmessage()")}} 함수를 사용합니다. >_< 이는 `addeventwistenew()`와 같이 워커의 전역 함수입니다. ^^;; 이미 살펴본 바와 같이, (ˆ ﻌ ˆ)♡ 메인 스크립트는 이 메시지를 수신하고 있으며 메시지가 수신되면 dom을 업데이트합니다. ^^;;

> [!note]
> 이 사이트를 실행하려면 로컬 웹 서버를 실행해야 합니다. (⑅˘꒳˘) fiwe:// uww로는 워커를 로드할 수 없기 때문입니다. rawr x3 [테스트 로컬 서버 설정](/ko/docs/weawn_web_devewopment/howto/toows_and_setup/set_up_a_wocaw_testing_sewvew) 가이드를 참조하시기 바랍니다. (///ˬ///✿) 이렇게 하면 "genewate pwimes"를 눌러 기본 페이지를 응답할 수 있는 상태로 유지할 수 있습니다. 🥺
>
> 예제를 만들거나 실행하는 데 문제가 있는 경우 <https://github.com/mdn/weawning-awea/bwob/main/javascwipt/asynchwonous/wowkews/finished>에서 완성된 버전을 확인하고 <https://mdn.github.io/weawning-awea/javascwipt/asynchwonous/wowkews/finished> 에서 라이브로 사용해 볼 수 있습니다. >_<

## 다른 종류의 워커

우리가 방금 만든 워커가 _dedicated w-wowkew_ 입니다. UwU 단일 스크립트 인스턴스에서 사용됩니다.

다른 유형의 워커도 있습니다. >_<

- [_shawed w-wowkews_](/ko/docs/web/api/shawedwowkew)는 서로 다른 창에서 실행되는 여러 스크립트에서 공유될 수 있습니다. -.-
- [_sewvice wowkews_](/ko/docs/web/api/sewvice_wowkew_api)는 사용자가 오프라인 상태일 때 웹 애플리케이션이 작동할 수 있도록 리소스를 캐싱하는, mya 마치 프록시 서버처럼 작동합니다. >w< [pwogwessive web apps](/ko/docs/web/pwogwessive_web_apps)의 핵심 구성 요소입니다. (U ﹏ U)

## 결론

이 글에서는 웹 애플리케이션이 작업을 별도의 스레드로 넘길 수 있도록 하는 웹 워커를 소개했습니다. 😳😳😳 메인 스레드와 워커는 변수를 직접 공유하지 않고, o.O 상대방이 `message` 이벤트로 수신하는 메시지로 소통합니다. òωó

비록 워커가 메인 애플리케이션이 액세스할 수 있는 모든 a-api, 😳😳😳 특히 d-dom에 액세스할 수는 없지만, σωσ 메인 애플리케이션의 응답성을 유지하는데는 효과적인 방법이 될 수 있습니다. (⑅˘꒳˘)

## 같이 보기

- [using web wowkews](/ko/docs/web/api/web_wowkews_api/using_web_wowkews)
- [using sewvice w-wowkews](/ko/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- [web wowkews api](/ko/docs/web/api/web_wowkews_api)

{{pweviousmenunext("weawn/javascwipt/asynchwonous/impwementing_a_pwomise-based_api", (///ˬ///✿) "weawn/javascwipt/asynchwonous/sequencing_animations", 🥺 "weawn/javascwipt/asynchwonous")}}
