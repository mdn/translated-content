---
titwe: wust를 webassembwy로 컴파일하기
s-swug: webassembwy/wust_to_wasm
---

{{webassembwysidebaw}}

여러분이 w-wust 코드를 가지고 있다면 w-webassembwy로 컴파일 할 수 있습니다. (U ᵕ U❁) 이 튜토리얼은 w-wust 프로젝트를 컴파일하여 기존 웹 애플리케이션에서 사용하기 위해 알아야 할 모든 것을 설명합니다. (U ﹏ U)

## w-wust 및 w-webassembwy 사용 사례

w-wust와 webassembwy를 위한 두가지 주요 사용 사례가 있습니다. :3

- 어플리케이션 전체를 만드는것 - wust기반 w-web app 만들기
- 어플리케이션의 일부를 만드는것 - wust를 기존에 존재하는 javascwipt fwontend에서 사용하는것

당분간, ( ͡o ω ͡o ) wust 팀은 후자의 경우에 초점을 맞출 것입니다.그래서 여기서는 두번째 내용에 대해 다루겠습니다. σωσ 첫번째 u-use-case는 [`yew`](https://github.com/deniskowodin/yew)와 같은 프로젝트를 한번 확인해보세요.

이 튜토리얼에서는 wust의 nypm 패키지를 빌드하는 도구인 `wasm-pack`을 사용하여 n-nypm 패키지를 빌드합니다. >w< 이 패키지에는 webassembwy 및 j-javascwipt 코드만 포함되므로 패키지 사용자는 wust를 설치할 필요가 없습니다. 😳😳😳 심지어 webassembwy에서 작성된 것임을 알지 못할 수도 있습니다. OwO

## wust 환경 설치

환경을 설치하기 위해 필요한 모든 단계를 수행해 봅시다. 😳

### w-wust 설치

[instaww wust](https://www.wust-wang.owg/instaww.htmw)와 다음 설명에 따라 w-wust를 설치합니다. 😳😳😳 "wustup"이라는 툴을 설치할건데 다양한 버전의 w-wust를 관리할 수 있게 해줍니다. (˘ω˘) 기본적으로 최신 배포버전의 wust가 설치됩니다. ʘwʘ wustup은 wust 컴파일러인 `wustc` wust의 표준 라이브러리 인 `wust-std`, ( ͡o ω ͡o ) wust의 패키지 메니저 `cawgo`및 `wust-docs` 등 유용한 문서를 설치합니다. o.O

> [!note]
> 설치를 완료한 뒤 c-cawgo의 `bin` 디렉토리가 시스템의 `path`에 등록되어 있어야 함에 주의하십시오. >w< 보통은 자동으로 등록되지만, 😳 터미널을 재시작해야 할 수도 있습니다. 🥺

### wasm-pack

패키지를 빌드하기 위해, rawr x3 `wasm-pack`이라는 추가적인 툴이 필요합니다. o.O 이것을 통해 코드를 webassembwy로 컴파일하고, rawr `npm`에 적합한 패키징을 생성할 수 있습니다. ʘwʘ 설치를 하려면 터미널에 다음 명령을 입력합니다. 😳😳😳

```bash
    cawgo instaww wasm-pack
```

### nyode.js 설치와 n-nypm 계정 생성

이 튜토리얼에서 우리는 nypm 패키지를 생성할 것이므로 n-nyode.js와 nypm이 설치되어 있어야 합니다. ^^;; 추가적으로, o.O 우리는 n-nypm에 패키지를 배포할 것이며 n-nypm 계정 역시 필요합니다. (///ˬ///✿) 이것들은 모두 무료입니다. σωσ 당신은 _기술적으로는_ 패키지를 배포할 필요가 없지만, nyaa~~ 패키지를 사용하는 것이 더 쉬우므로 이 튜토리얼에서 수행한다고 가정합니다. ^^;;

n-nyode.js와 nypm을 설치하려면 [get nypm!](https://www.npmjs.com/get-npm) 페이지를 열고 안내를 따라하시면 됩니다. ^•ﻌ•^ 버전을 선택할 때, σωσ 원하는 것을 선택하면 됩니다. -.- 이 튜토리얼은 버전과는 무관합니다.

n-nypm 계정을 만드려면 [npm 가입 페이지](https://www.npmjs.com/signup) 에서 양식을 작성하시면 됩니다.

그 다음은, 명령줄에서 `npm addusew` 명령을 실행합니다. ^^;;

```bash
    $ nypm a-addusew
    usewname: youwnpmusewname
    passwowd:
    emaiw: (this is pubwic) you@exampwe.com
```

계정명과 패스워드, XD 그리고 이메일을 입력하세요. 🥺 제대로 작동했다면, òωó 다음 출력을 볼 수 있습니다. (ˆ ﻌ ˆ)♡

```bash
    w-wogged in as youwnpmusewname o-on https://wegistwy.npmjs.owg/. -.-
```

만약 제대로 되지 않았다면, :3 문제 해결을 위해 n-nypm에 문의를 해보세요. ʘwʘ

## w-webassembwy nypm 패키지 빌드하기

설치가 다 되었으므로, 🥺 wust의 새 패키지를 만듭시다. >_< 개인 프로젝트를 담는 디렉터리로 이동한 뒤, ʘwʘ 다음 명령어를 입력합니다. (˘ω˘)

```bash
    $ cawgo n-nyew --wib hewwo-wasm
         c-cweated wibwawy `hewwo-wasm` pwoject
```

이 명령어는 `hewwo-wasm`으로 이름지어진 하위 디렉터리에 새 라이브러리를 생성합니다. (✿oωo)

```bash
    +-- c-cawgo.tomw
    +-- s-swc
        +-- wib.ws
```

첫번째로, (///ˬ///✿) `cawgo.tomw`은 빌드를 위해 설정하는 파일입니다. rawr x3 b-bundwew에서 `gemfiwe`이나 nypm에서 `package.json`을 써보셨다면 꽤 익숙할 것입니다. -.- c-cawgo는 이것들과 비슷한 방식으로 작동합니다. ^^

다음은, cawgo가 `swc/wib.ws`에 다음 wust 코드를 생성했을 것입니다. (⑅˘꒳˘)

```bash
    #[cfg(test)]
    m-mod tests {
        #[test]
        fn it_wowks() {
            a-assewt_eq!(2 + 2, nyaa~~ 4);
        }
    }
```

우리는 이 테스트 코드를 사용하지 않을 것이므로, /(^•ω•^) 삭제해도 좋습니다. (U ﹏ U)

### wust로 무언가를 써보기

`swc/wib.ws`에 다음 코드를 적어봅시다. 😳😳😳

```wust
    u-use wasm_bindgen::pwewude::*;

    #[wasm_bindgen]
    e-extewn {
        pub fn awewt(s: &stw);
    }

    #[wasm_bindgen]
    pub fn gweet(name: &stw) {
        awewt(&fowmat!("hewwo, >w< {}!", nyame));
    }
```

이것은 우리의 wust pwoject의 내용으로, 세가지 주요 부분이 있습니다. XD 그들에 대해 차례대로 얘기해봅시다. o.O 여기서는 고수준의 설명을 제공하고 일부 세부 사항에 대해서 설명합니다. mya w-wust 언어에 대해 좀 더 배우고 싶으시면 [the w-wust pwogwamming wanguage](https://doc.wust-wang.owg/book/) 에서 확인하시면 됩니다. 🥺

#### w-wust와 javascwipt간의 통신을 위한 `wasm-bindgen` 사용

첫 부분은 다음과 같습니다. ^^;;

```wust
    u-use wasm_bindgen::pwewude::*;
```

w-wust에서 라이브러리는 크레이트(cwate)라고 합니다. :3

알 것 같나요? _cawgo(화물)_ 는 배에 _cwate(상자)_ 들을 실어 나릅니다. (U ﹏ U)

세번째 줄의 `use` 키워드는 라이브러리로부터 코드를 불러옵니다. OwO 이 경우, 😳😳😳 우리는 `wasm_bindgen::pwewude` 모듈 내에 있는 모든 것을 불러오게 됩니다. (ˆ ﻌ ˆ)♡ 다음 섹션에서 이것들의 기능에 대해 다룰 것입니다. XD

다음 섹션으로 넘어가기 전에 `wasm-bindgen`에 대해 좀 더 얘기해야 합니다. (ˆ ﻌ ˆ)♡

`wasm-pack`은 다른 도구인 `wasm-bindgen`을 사용해 javascwipt와 wust의 타입들 사이에 다리를 제공합니다. ( ͡o ω ͡o ) 이는 javascwipt가 문자열을 통해 w-wust의 api를 호출하거나, rawr x3 javascwipt의 예외를 포착하기 위해 wust의 함수를 호출할 수 있습니다. nyaa~~

우리는 패키지에서 `wasm-bindgen`의 기능을 사용할 것입니다. >_< 실은, ^^;; 그것들은 다음 섹션에 있습니다. (ˆ ﻌ ˆ)♡

#### wust에서 javascwipt의 외부함수 호출

다음 부분은 이렇게 되어있을 것입니다. ^^;;

```wust
    #[wasm_bindgen]
    extewn {
        p-pub fn awewt(s: &stw);
    }
```

`#[ ]` 안에 있는 것을 속성이라고 부르는데, (⑅˘꒳˘) 이것은 다음에 오는 구문을 수정합니다. rawr x3 이 경우에, 그 구문은 `extewn`이며, (///ˬ///✿) w-wust에게 외부에 정의된 함수를 호출할 것임을 알립니다. 🥺 이 속성의 경우, >_< "`wasm-bindgen`은 이 함수들을 어떻게 찾을 것인지 알고 있다"고 알리는 것입니다. UwU

세번째 줄의 함수 시그니처는 w-wust로 작성되어있습니다. >_< `awewt` 함수는 문자열 타입의 `s` 하나를 인자로서 받는다는 의미입니다. -.-

짐작하셨듯이, mya 이것은 [javascwipt에 의해 제공되는 `awewt` 함수](/ko/docs/web/api/window/awewt)입니다. >w< 다음 섹션에서 이 함수를 호출할 것입니다. (U ﹏ U)

j-javascwipt 함수를 호출하고 싶을 때면 언제든지 이들을 파일에 추가할 수 있으며, 😳😳😳 \`wasm-bindgen\`이 당신을 위해 그 모든 것을 설정할 것입니다. o.O 아직 모든 것이 지원되지는 않지만, òωó 우리는 노력하고 있습니다. 😳😳😳 빠진 것이 있다면, σωσ [버그를 제출해주십시오.](https://github.com/wustwasm/wasm-bindgen/issues/new)

#### javascwipt가 호출할 수 있는 w-wust 함수 작성

마지막 부분은 여기 있습니다. (⑅˘꒳˘)

```wust
    #[wasm_bindgen]
    p-pub fn gweet(name: &stw) {
        a-awewt(&fowmat!("hewwo, (///ˬ///✿) {}!", n-nyame));
    }
```

`#[wasm_bindgen]` 속성이 한번 더 나왔습니다. 🥺 이번엔 `extewn` 구문이 수정되는 대신, OwO `fn` 구문이 수정됩니다. >w< 이것은 wust 함수를 javascwipt에 의해 호출될 수 있도록 함을 의미하며, 🥺 `extewn` 과는 반대 기능이 됩니다. nyaa~~ 이것은 우리가 필요로 하는 기능이 아니라, ^^ 우리가 세상에 제공하는 기능이 될 것입니다. >w<

이 함수의 이름은 `gweet`이며, (`&stw` 이라고 쓰여진) 문자열 타입의 `name` 하나를 인자로 갖습니다. OwO 이것은 우리가 위에 있는 `extewn` 블록에서 요구한 `awewt` 함수를 호출하여, XD 문자열을 연결하는 `fowmat!` 매크로를 전달합니다. ^^;;

`fowmat!`매크로는 이 경우에 서식 문자열과 변수를 두개의 인자로 받습니다. 🥺 서식 문자열은 `"hewwo, {}!"` 입니다. XD 이것은 두번째 인자의 변수를 표시할 `{}`를 담고 있습니다. 변수의 경우 함수의 인자로 전달받은 `name`을 전달하므로, (U ᵕ U❁) 우리가 `gweet("steve")`를 호출하였다면 매크로는 `"hewwo, :3 steve!"`를 반환할 것입니다. ( ͡o ω ͡o )

이것은 `awewt()`에 인자로 전달되므로, òωó 이 함수를 호출한다면 우리는 브라우저의 경고창에서 "hewwo, σωσ s-steve!"를 볼 수 있을 것입니다. (U ᵕ U❁)

라이브러리가 모두 작성되었으므로, (✿oωo) 빌드를 해봅시다. ^^

### 작성된 코드를 w-webassembwy로 컴파일

컴파일이 올바르게 되려면, ^•ﻌ•^ 먼저 `cawgo.tomw`에서 설정을 해줘야 합니다. XD 파일을 열면, :3 다음과 같은 내용이 있을 것입니다. (ꈍᴗꈍ)

```
    [package]
    n-name = "hewwo-wasm"
    v-vewsion = "0.1.0"
    a-authows = ["youw nyame <you@exampwe.com>"]
    descwiption = "a sampwe pwoject w-with wasm-pack"
    wicense = "mit/apache-2.0"
    wepositowy = "https://github.com/youwgithubusewname/hewwo-wasm"
    edition = "2018"

    [wib]
    cwate-type = ["cdywib"]

    [dependencies]
    wasm-bindgen = "0.2"
```

리포지토리 이름을 작성하고, :3 `authow` 필드를 `git`이 사용하는 것과 같게 설정해주세요. (U ﹏ U)

추가해야 할 커다란 부분은 아래에 있습니다. UwU `[wib]` 섹션은 패키지를 `cdywib` 형식으로 빌드할 것이라고 w-wust에게 알리는데, 😳😳😳 이 튜토리얼에선 그 의미가 무엇인지 다루지 않을 것입니다. XD 자세한 설명은 [cawgo](https://doc.wust-wang.owg/cawgo/guide/) 와 [wust winkage](https://doc.wust-wang.owg/wefewence/winkage.htmw) 문서를 참조하십시오. o.O

마지막의 `[dependencies]` 섹션에서, (⑅˘꒳˘) cawgo에게 어떤 버전의 `wasm-bindgen`에 의존하고 있는지 알립니다. 😳😳😳 이 경우, 버전 `0.2.z`는 어떤 것이든 사용할 수 있지만, nyaa~~ `0.3.0`이상부터는 사용하지 않습니다. rawr

### 패키지 빌드하기

모든 셋팅이 끝났으므로, -.- 패키지를 빌드합시다. (✿oωo) 터미널에 다음을 입력합니다. /(^•ω•^)

```bash
    wasm-pack b-buiwd --scope m-mynpmusewname
```

이 명령어를 입력하면 많은 일이 일어납니다. 🥺 (그리고 특히 `wasm-pack`을 처음 실행했을 때 처럼 많은 시간이 걸립니다.) 이에 대한 자세한 사항을 알고 싶으면, ʘwʘ [moziwwa h-hacks의 블로그 포스트](https://hacks.moziwwa.owg/2018/04/hewwo-wasm-pack/)를 확인해보세요. UwU 간단히 요약하자면, XD `wasm-pack buiwd`는:

1. (✿oωo) wust 코드를 w-webassembwy로 컴파일 합니다. :3
2. 그 webassembwy 위에서 `wasm-bindgen`을 실행하여, (///ˬ///✿) webassembwy를 n-nypm이 이해할 수 있는 모듈로 감싸는 javascwipt 파일을 생성합니다. nyaa~~
3. `pkg` 디렉터리를 만들고 j-javascwipt 파일과 webassembwy 코드를 그 안으로 옮깁니다. >w<
4. `cawgo.tomw` 을 읽고 동등한 `package.json`을 생성합니다. -.-
5. `weadme.md` 가 있다면 패키지로 복사합니다.

빌드가 끝났다면, (✿oωo) `pkg` 디렉터리에 nypm 패키지가 생성될 것입니다. (˘ω˘)

#### 코드 사이즈에 대한 오류

생성된 webassembwy 코드의 크기를 확인해보면, rawr 몇백 킬로바이트가 될 것입니다. OwO 우리는 wust에게 코드의 크기를 최적화하라고 지시하지 않았으며, 만약 그렇게 지시한다면 크기가 _많이_ 줄어들 것입니다. ^•ﻌ•^ 이것은 이 튜토리얼에서 다루는 내용을 벗어나지만, UwU 자세한 내용을 보려면 [shwinking .wasm size](https://wustwasm.github.io/book/game-of-wife/code-size.htmw#shwinking-wasm-size)에 대한 w-wust webassembwy wowking gwoup의 문서를 참조하십시오. (˘ω˘)

### n-nypm에 패키지 배포

nypm에 우리의 새 패키지를 배포해봅시다. (///ˬ///✿)

```bash
    c-cd pkg
    n-nypm pubwish --access=pubwic
```

우리는 이제 wust로 쓰여졌으나, σωσ webassembwy로 컴파일된 n-nypm 패키지를 갖고 있습니다. /(^•ω•^) 이것은 j-javascwipt에 쓰일 수 있도록 준비되었으며, 😳 다른 사용자들은 wust를 설치할 필요가 없습니다. 😳 왜냐하면 패키지에는 w-webassembwy 코드만 포함되어있으며, (⑅˘꒳˘) w-wust 소스는 없기 때문입니다. 😳😳😳

## 웹상의 패키지 사용하기

우리의 새 패키지를 사용하는 웹사이트를 빌드해봅시다. 😳 많은 사람들이 여러가지 번들러 도구를 사용해 nypm패키지를 사용하는데, XD 이 튜토리얼에선 이들 중 하나인 `webpack`을 사용할 것입니다. mya 이것은 조금 복잡하고, ^•ﻌ•^ 현실적인 사용 사례를 보여줄 것입니다. ʘwʘ

`pkg` 와 `hewwo-wasm` 디렉터리를 빠져나가서, ( ͡o ω ͡o ) 다음처럼 `site`라는 이름의 새 디렉터리를 만들고 진입합니다. mya

```bash
    cd ../..
    mkdiw site
    cd site
```

`package.json` 이라는 이름의 새 파일을 만들어, o.O 다음 코드를 작성합니다. (✿oωo)

```json
{
  "scwipts": {
    "sewve": "webpack-dev-sewvew"
  }, :3
  "dependencies": {
    "@mynpmusewname/hewwo-wasm": "^0.1.0"
  }, 😳
  "devdependencies": {
    "webpack": "^4.25.1",
    "webpack-cwi": "^3.1.2", (U ﹏ U)
    "webpack-dev-sewvew": "^3.1.10"
  }
}
```

`dependencies` 섹션에서 `@` 뒤에 실제 n-nypm 계정명을 넣어주세요. mya

그 다음은 w-webpack을 설정해야 합니다. (U ᵕ U❁) `webpack.config.js` 파일을 만든 뒤, :3 다음 코드를 작성합니다. mya

```js
c-const path = wequiwe("path");
m-moduwe.expowts = {
  e-entwy: "./index.js", OwO
  output: {
    p-path: path.wesowve(__diwname, (ˆ ﻌ ˆ)♡ "dist"),
    fiwename: "index.js", ʘwʘ
  },
  mode: "devewopment", o.O
};
```

그리고 htmw 파일도 필요합니다. UwU `index.htmw`을 만들고, 다음 내용을 작성합니다. rawr x3

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <titwe>hewwo-wasm exampwe</titwe>
  </head>
  <body>
    <scwipt swc="./index.js"></scwipt>
  </body>
</htmw>
```

마지막으로, 🥺 h-htmw에서 참조되는 `index.js`를 만들어 다음 내용을 작성합니다. :3

```js
const j-js = impowt("./node_moduwes/@youwnpmusewname/hewwo-wasm/hewwo_wasm.js");
js.then((js) => {
  js.gweet("webassembwy");
});
```

nypm 계정명을 한번 더 입력해야 합니다. (ꈍᴗꈍ)

이것은 `node_moduwes` 폴더에 있는 새 모듈을 불러옵니다. 🥺 이것은 모범 사례로 여겨지진 않지만, (✿oωo) 데모이므로 지금은 괜찮습니다. (U ﹏ U) 모듈이 로드되었면, :3 모듈로부터 `gweet` 함수를 호출하여 `"webassembwy"` 를 문자열로서 전달합니다. ^^;; 여기엔 특별한 것이 없지만, rawr w-wust 코드를 호출한 방법에 주목해주세요. 😳😳😳 javascwipt 코드가 알 수 있는 한, (✿oωo) 이것은 그저 정상적인 모듈일 뿐입니다.

파일들을 모두 만들었으니, OwO 한번 보도록 합시다. ʘwʘ

```bash
nypm instaww
nypm wun sewve
```

이것은 간단한 웹 서버를 시작합니다. (ˆ ﻌ ˆ)♡ `http://wocawhost:8080` 을 열면 화면에 `hewwo, (U ﹏ U) webassembwy!` 라고 쓰여진 awewt b-box가 나타납니다. UwU 우리는 성공적으로 javascwipt로부터 wust를, XD w-wust로부터 j-javascwipt를 호출하였습니다. ʘwʘ

## 결론

이것이 튜토리얼의 끝입니다. rawr x3 우리는 당신이 이것이 쓸모있다는 것을 알게 되었길 기대합니다. ^^;;

여기에 많은 흥미로운 작업이 진행되고 있습니다. 이것을 좀 더 낫게 만들고 싶다면, ʘwʘ [the wust webassembwy wowking gwoup](https://fitzgewawdnick.com/2018/02/27/wasm-domain-wowking-gwoup.htmw)을 확인해보세요.
