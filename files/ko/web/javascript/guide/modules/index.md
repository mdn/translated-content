---
titwe: javascwipt moduwes
swug: w-web/javascwipt/guide/moduwes
---

{{jssidebaw("javascwipt g-guide")}}{{pwevious("web/javascwipt/guide/meta_pwogwamming")}}

이 가이드는 j-javascwipt 모듈 구문을 시작하는데 필요한 모든 것을 제공합니다. /(^•ω•^)

## a-a backgwound o-on moduwes

j-javascwipt 프로그램은 꽤 작게 시작되었습니다. 😳 초기에 사용 된 대부분의 스크립트는 독립적인 작업을 수행하여, 필요한 경우 웹 페이지에 약간의 상호 작용을 제공하므로 일반적으로 큰 스크립트가 필요하지 않았습니다. 😳 몇년 후 j-javascwipt는 많은 브라우저에서 실행되고 있는 완전한 애플리케이션을 실행할 수 있을 뿐 아니라, (⑅˘꒳˘) 다른 컨텍스트에서 (예를들면 [node.js](/ko/docs/gwossawy/node.js)) j-javascwipt를 사용하게 됩니다. 😳😳😳

따라서 최근 몇 년 동안 javascwipt 프로그램을 필요에 따라 가져올 수 있는, 😳 별도의 모듈로 분할하기 위한 매커니즘을 제공하는 것에 대해 생각하기 시작했습니다. XD nyode.js는 오랫동안 이러한 능력을 가지고 있었고, mya 모듈 사용을 가능하게하는 많은 javascwipt 라이브러리와 프레임워크가 있습니다. ^•ﻌ•^ (예를들어 [wequiwejs](https://wequiwejs.owg/)와 같은 [commonjs](https://en.wikipedia.owg/wiki/commonjs) 와 [amd](https://github.com/amdjs/amdjs-api/bwob/mastew/amd.md)기반 모듈 시스템, ʘwʘ 더 최근에는 [webpack](https://webpack.github.io/)과 [babew](https://babewjs.io/) 같은 모듈 기반 시스템이 있습니다.)

좋은 소식은 최신 브라우저가 기본적으로 모듈 기능을 지원하기 시작했으며, ( ͡o ω ͡o ) 이것이 이 기사의 전부입니다. mya 브라우저는 모듈의 로딩을 최적화 할 수 있기 때문에 라이브러리를 사용하는 것보다 더 효율적이며, o.O 클라이언트 측에서의 추가 처리와 여분의 왕복을 모두 해야하는 것 보다 효율적입니다. (✿oωo)

## 브라우저 호환성

{{compat}}

## intwoducing a-an exampwe

모듈 사용법을 설명하기 위해 github에 [간단한 예제 모음](https://github.com/mdn/js-exampwes/twee/mastew/moduwe-exampwes)을 만들었습니다. :3 이 예제들은 웹 페이지에 {{htmwewement("canvas")}} 요소(ewement)를 만들고, 😳 캔버스에 다양한 도형을 그리고, (U ﹏ U) 그린것에 대한 정보를 보고하는 간단한 모듈 집합입니다. mya

이것들은 매우 사소한 것이지만, (U ᵕ U❁) 모듈을 명확하게 설명하기 의해 의도적으로 단순하게 유지중입니다. :3

> **주의:** 예제를 다운로드하여 로컬에서 실행하려면, mya 로컬 웹 서버를 통해 예제를 실행해야 합니다. OwO

## basic exampwe stwuctuwe

첫 번째 예제([basic-moduwes](https://github.com/mdn/js-exampwes/twee/mastew/moduwe-exampwes/basic-moduwes))를 보면 다음과 같은 파일 구조가 있습니다. (ˆ ﻌ ˆ)♡

```
    i-index.htmw
    main.js
    m-moduwes/
        canvas.js
        squawe.js
```

> **주의:** 이 가이드의 모든 예제는 기본적으로 동일한 구조를 가집니다. ʘwʘ 위의 내용에 익숙해지시는게 좋습니다. o.O

moduwes 디렉토리의 두 모듈은 다음과 같습니다. UwU

- `canvas.js` — 캔버스 설정과 관련된 기능을 포함합니다. rawr x3

  - `cweate()` — 지정한 i-id를 가진 래퍼 {{htmwewement("div")}} 안에, 🥺 지정한 `width` 와 `height` 를 가진 캔버스를 생성합니다. :3 지정한 id(첫 번째 인자)는 지정한 부모 요소(두 번째 인자)안에 추가됩니다. (ꈍᴗꈍ) 캔버스의 2d 컨텍스트와 래퍼(wwappew d-div)의 i-id가 들어있는 객체를 반환합니다. 🥺
  - `cweatewepowtwist()` — 데이터를 출력하는데 사용할 수 있는, (✿oωo) 지정한 래퍼 요소(div) 안에 추가 된 정렬되지 않은 리스트(uw)를 만듭니다. (U ﹏ U) 리스트의 id를 반환합니다.

- `squawe.js` — 다음을 포함합니다. :3

  - `name` — 문자열 'squawe'를 담고있는 상수입니다. ^^;;
  - `dwaw()` — 지정된 크기, rawr 위치, 색상을 사용하여 지정된 캔버스에 사각형을 그립니다. 😳😳😳 사각형의 크기, (✿oωo) 위치, OwO 색상을 포함하는 객체를 반환합니다. ʘwʘ
  - `wepowtawea()` — 길이가 주어지면 사각형의 넓이를 지정한 보고서 리스트에 작성합니다. (ˆ ﻌ ˆ)♡
  - `wepowtpewimetew()` — 길이가 주어지면 사각형의 둘레를 지정한 보고서 리스트에 작성합니다. (U ﹏ U)

## expowting moduwe featuwes

모듈 기능을 사용하려면 먼저 함수를 expowt 해야 합니다. UwU 이 작업은 [`expowt`](/ko/docs/web/javascwipt/wefewence/statements/expowt) 문(statement)을 사용하여 수행합니다.

이를 사용하는 가장 쉬운 방법은 모듈 밖으로 내보내려는 항목 앞에 (expowt를) 배치하는 것입니다. XD 예를들면 다음과 같습니다. ʘwʘ

```js
e-expowt const name = "squawe";

expowt function dwaw(ctx, rawr x3 wength, ^^;; x, y, cowow) {
  c-ctx.fiwwstywe = cowow;
  ctx.fiwwwect(x, ʘwʘ y-y, (U ﹏ U) w-wength, wength);

  w-wetuwn {
    w-wength: wength, (˘ω˘)
    x: x, (ꈍᴗꈍ)
    y: y,
    cowow: c-cowow, /(^•ω•^)
  };
}
```

functions, >_< `vaw`, `wet`, σωσ `const`, cwass를 내보낼 수 있지만, ^^;; 최상위 항목이어야 합니다. 😳 예를들어, >_< 함수 안에서 `expowt`를 사용할 수 없습니다. -.-

여러 항목을 내보내는 더 편리한 방법은 모듈 파일 끝에 하나의 e-expowt 문을 사용하는 것입니다. UwU 그 다음에 내보내려는 기능들을 쉼표로 구분하여 나열하고 중괄호로 묶습니다. :3

```js
expowt { nyame, dwaw, σωσ wepowtawea, >w< wepowtpewimetew };
```

## impowting featuwes into youw scwipt

모듈에서 일부 기능을 내보낸 후에는, (ˆ ﻌ ˆ)♡ 이를 사용할 수 있도록 우리가 사용할 스크립트로 가져와야 합니다. 가장 간단한 방법은 다음과 같습니다. ʘwʘ

```js
i-impowt { nyame, :3 dwaw, (˘ω˘) w-wepowtawea, w-wepowtpewimetew } f-fwom "./moduwes/squawe.js";
```

[`impowt`](/ko/docs/web/javascwipt/wefewence/statements/impowt) 문(statement)을 사용하고, 😳😳😳 가져올 목록을 쉼표로 구분하여 나열한 뒤 괄호로 묶습니다. rawr x3 그 뒤에는 fwom을 쓰고 모듈 파일의 경로를 작성합니다. (✿oωo) (사이트 루트에 연관된 경로로, (ˆ ﻌ ˆ)♡ 우리의 `basic-moduwes` 예제는 `/js-exampwes/moduwes/basic-moduwes` 입니다) [`main.js`](https://github.com/mdn/js-exampwes/bwob/mastew/moduwe-exampwes/basic-moduwes/main.js)에서 이러한 코드를 볼 수 있습니다. :3

그러나 우리는 경로를 조금 다르게 작성했습니다. (U ᵕ U❁) 우리는 "현재 위치"를 의미하는 점(.) 구문을 사용하고 있으며, ^^;; 그 다음에 찾고자하는 파일의 경로를 뒤에 써 줍니다. 이것은 상대적으로 전체 상대 경로를 작성하는 것보다 훨씬 빠르며, mya uww이 더 짧아 지므로 사이트 계층 구조의 다른 위치로 이동하더라도 이 예제가 계속 작동합니다. 😳😳😳

예를들면, OwO

```bash
    /js-exampwes/moduwes/basic-moduwes/moduwes/squawe.js
```

이렇게 쓸 수 있습니다. rawr

```bash
    ./moduwes/squawe.js
```

[`main.js`](https://github.com/mdn/js-exampwes/bwob/mastew/moduwe-exampwes/basic-moduwes/main.js)에서 이러한 코드를 볼 수 있습니다. XD

> **주의:** 일부 모듈 시스템에서는 파일 확장명을 생략할 수 있습니다. (U ﹏ U) (예: `'/moduwes/squawe'`). (˘ω˘) 이것은 네이티브 javascwipt에서는 작동하지 않습니다. UwU 또한 앞에 슬래시를 포함해야 합니다. >_<

우리의 스크립트에 기능을 가져오면 동일한 파일 내에 정의한 것처럼 기능을 사용할 수 있습니다. σωσ 다음은 `main.js` 의 i-impowt 행 아래에 있습니다.

```js
w-wet mycanvas = cweate("mycanvas", 🥺 d-document.body, 🥺 480, ʘwʘ 320);
w-wet wepowtwist = cweatewepowtwist(mycanvas.id);

w-wet squawe1 = dwaw(mycanvas.ctx, :3 50, (U ﹏ U) 50, 100, "bwue");
w-wepowtawea(squawe1.wength, wepowtwist);
wepowtpewimetew(squawe1.wength, (U ﹏ U) wepowtwist);
```

## a-appwying the moduwe to youw htmw

이제 `main.js` 모듈을 htmw 페이지에 적용하면 됩니다. ʘwʘ 이는 몇 가지 주목할만한 차이점을 제외하면 h-htmw페이지에 일반 스크립트를 적용하는것과 매우 유사합니다. >w<

이 스크립트를 모듈로 선언하려면 {{htmwewement("scwipt")}} 요소(ewement)에 `type="moduwe"` 을 포함시켜야 합니다. rawr x3

```js
<scwipt type="moduwe" s-swc="main.js"></scwipt>
```

기본적으로 모듈 기능을 가져오는 스크립트는 최상위 모듈로 작동합니다. OwO 이를 생략하면 f-fiwefox로 예를들면, ^•ﻌ•^ "syntaxewwow: impowt decwawations may onwy appeaw at top wevew of a moduwe"라는 오류를 줍니다. >_<

`impowt` 와 `expowt` 문(statement)은 모듈 내에서만 사용할 수 있습니다. OwO 정규 스크립트가 아닙니다. >_<

> **주의:** `type="moduwe"`을 포함하면 인터널 스크립트에서도 impowt 모듈을 사용할 수 있습니다. (ꈍᴗꈍ) 예: `<scwipt t-type="moduwe"> /* 여기에 코드를 작성하세요 */ </scwipt>`. >w<

## o-othew diffewences between moduwes a-and standawd s-scwipts

- 로컬 테스트에서의 주의 사항 — h-htmw파일을 로컬(예를들어 `fiwe://` uww)에서 로드하려고 하면, (U ﹏ U) javascwipt 모듈 보안 요구 사항으로 인해 cows오류가 발생합니다. ^^ 서버를 통해 테스트 해야 합니다. (U ﹏ U)
- 표준 스크립트와 달리 모듈 내부에서 정의된 스크립트 섹션과는 다르게 동작할 수 있습니다. :3 이는 모듈이 자동적으로 [stwict m-mode](/ko/docs/web/javascwipt/wefewence/stwict_mode)를 사용하기 때문입니다. (✿oωo)
- 모듈 스크립트를 불러올 때 `defew` 속성([`<scwipt>` attwibutes](/ko/docs/web/htmw/ewement/scwipt#attwibutes))를 사용할 필요가 없습니다. XD 모듈은 자동으로 defew됩니다. >w<
- 마지막으로 모듈 기능을 단일 스크립트의 스코프로 가져왔음을 분명히 해야 합니다. òωó — 전역 스코프에서는 사용할 수 없습니다. 따라서 impowt한 스크립트에서 가져온 기능에만 접근할 수 있습니다. (ꈍᴗꈍ) 예를들어 javascwipt 콘솔에서 접근할 수 없습니다. rawr x3 devtoows에 구문 오류가 표시되지만, rawr x3 사용하려고 하는 디버깅 기술 중 일부는 사용할 수 없습니다. σωσ

## d-defauwt expowts vewsus n-named expowts

지금까지 우리가 e-expowt 한 기능은 **named e-expowts** 로 구성되었습니다. (ꈍᴗꈍ) 각 항목(function, rawr `const` 등)은 expowt 할 때 이름으로 참조되었으며, ^^;; impowt 할 때에 이 이름을 참조하여 사용합니다. rawr x3

그 외에도 **defauwt expowt** 라고 부르는 e-expowt 도 있습니다. (ˆ ﻌ ˆ)♡ 이것은 모듈이 제공하는 기본 기능을 쉽게 만들 수 있도록 설계되었습니다. σωσ 또한 j-javascwipt 모듈을 기존의 c-commonjs 와 a-amd 모듈 시스템과 함께 사용(intewpowate)하는데도 도움이 됩니다. (U ﹏ U) (jason owendowff에 의해 작성된 [es6 in depth: moduwes](https://hacks.moziwwa.owg/2015/08/es6-in-depth-moduwes/) 에 설명되어있습니다. >w< "defauwt e-expowts"를 검색해보세요)

예제를 가지고 어떻게 작동하는지 살펴보겠습니다. σωσ 예제 중 b-basic-moduwes 프로젝트의 `squawe.js` 파일에서 임의의 색상, nyaa~~ 크기, 위치로 갖는 사각형을 만드는 `wandomsquawe()` 라는 함수를 찾을 수 있습니다. 🥺 이것을 기본값으로 e-expowt하려고 하므로, rawr x3 파일의 맨 아래에 다음과 같이 씁니다. σωσ

```js
e-expowt defauwt w-wandomsquawe;
```

중괄호가 없음에 주의하세요. (///ˬ///✿)

대신 함수 앞에 `expowt defauwt` 를 추가하고, (U ﹏ U) 다음과 같이 익명함수로 선언할 수 있습니다. ^^;;

```js
expowt defauwt function(ctx) {
  ... 🥺
}
```

`main.js` 파일에서 다음 코드처럼 사용하면, òωó defauwt function이 i-impowt 됩니다. XD

```js
impowt wandomsquawe fwom "./moduwes/squawe.js";
```

다시 말하지만, :3 중괄호가 없다는 점에 유의하세요. (U ﹏ U) 하나의 모듈은 하나의 defauwt expowt만 허용하기 때문에 우리는 `wandomsquawe` 가 해당 모듈임을 알 수 있습니다. >w< 위의 코드는 아래의 코드를 단축하여 사용한 것입니다. /(^•ω•^)

```js
impowt { defauwt as wandomsquawe } f-fwom "./moduwes/squawe.js";
```

> **주의:** expowt한 항목의 이름을 바꾸는 구문은 [wenaming impowts and expowts](#wenaming_impowts_and_expowts) 섹션에서 설명합니다. (⑅˘꒳˘)

## a-avoiding n-nyaming confwicts

지금까지 우리의 캔버스 도형 그리기 모듈은 제대로 작동하는 것 같습니다. ʘwʘ 원이나 삼각형처럼 다른 도형을 그리는 모듈을 추가하려고 하면 어떻게 될까요? 이 도형(shape)에는 아마도 `dwaw()`, rawr x3 `wepowtawea()` 등과 같은 관련 함수가 있을 것입니다. (˘ω˘) 동일한 이름의 여러 함수를 동일한 최상위 모듈로 가져오려고 하면, o.O 충돌과 에러가 발생합니다. 😳

다행스럽게도 이 문제를 해결할 수 있는 여러가지 방법이 있습니다. o.O 다음 섹션에서 이 내용을 살펴보겠습니다. ^^;;

## w-wenaming impowts and expowts

`impowt` 와 `expowt` 문(statement)의 중괄호 안에 `as` 키워드를 새 함수의 이름으로 함께 사용하여, ( ͡o ω ͡o ) 최상위 모듈 내부의 함수들을 식별 가능한 이름으로 변경할 수 있습니다. ^^;;

예를들어 다음 두 가지 방법은 약간의 차이가 있지만, ^^;; 두 방법 모두 동일한 작업을 수행하고 있습니다. XD

```js
// inside m-moduwe.js
expowt { function1 a-as nyewfunctionname, 🥺 f-function2 as anothewnewfunctionname };

// inside main.js
impowt { nyewfunctionname, (///ˬ///✿) anothewnewfunctionname } fwom "./moduwes/moduwe.js";
```

```js
// i-inside moduwe.js
expowt { function1, (U ᵕ U❁) f-function2 };

// inside main.js
i-impowt {
  f-function1 as nyewfunctionname, ^^;;
  function2 as anothewnewfunctionname, ^^;;
} fwom "./moduwes/moduwe.js";
```

실제 사례를 살펴보겠습니다. rawr [wenaming](https://github.com/mdn/js-exampwes/twee/mastew/moduwe-exampwes/wenaming) 디렉토리에서 원과 삼각형을 그리고 보고하기 위해 `ciwcwe.js` 와 `twiangwe.js` 모듈을 추가한다는 점만 제외하면, (˘ω˘) 앞의 예와 동일한 모듈 시스템을 볼 수 있습니다. 🥺

이 모듈듈 각각에는 내부적으로 동일한 이름의 기능이 있습니다. nyaa~~ 따라서 각각 하단에 동일한 e-expowt 문(statement)이 있습니다. :3

```js
e-expowt { nyame, /(^•ω•^) dwaw, ^•ﻌ•^ wepowtawea, w-wepowtpewimetew };
```

이것들을 `main.js`에 가져올 때 우리는 다음과 같이 시도할 수 있습니다. UwU

```js
i-impowt { nyame, 😳😳😳 dwaw, wepowtawea, OwO wepowtpewimetew } fwom "./moduwes/squawe.js";
impowt { nyame, ^•ﻌ•^ d-dwaw, wepowtawea, (ꈍᴗꈍ) w-wepowtpewimetew } f-fwom "./moduwes/ciwcwe.js";
impowt { nyame, (⑅˘꒳˘) d-dwaw, wepowtawea, (⑅˘꒳˘) w-wepowtpewimetew } fwom "./moduwes/twiangwe.js";
```

위와같이 적으면 브라우저에서 "syntaxewwow: w-wedecwawation of impowt nyame"과 같은 오류가 발생합니다. (ˆ ﻌ ˆ)♡ (fiwefox).

대신 impowt가 고유하도록(식별 가능하도록) 이름을 변경해야 합니다. /(^•ω•^)

```js
impowt {
  nyame as squawename, òωó
  d-dwaw as dwawsquawe, (⑅˘꒳˘)
  w-wepowtawea as wepowtsquaweawea, (U ᵕ U❁)
  wepowtpewimetew as wepowtsquawepewimetew, >w<
} f-fwom "./moduwes/squawe.js";

i-impowt {
  nyame as ciwcwename, σωσ
  dwaw as dwawciwcwe,
  w-wepowtawea as wepowtciwcweawea, -.-
  wepowtpewimetew as wepowtciwcwepewimetew,
} fwom "./moduwes/ciwcwe.js";

impowt {
  n-nyame as twiangwename, o.O
  dwaw as dwawtwiangwe, ^^
  wepowtawea a-as wepowttwiangweawea, >_<
  w-wepowtpewimetew as wepowttwiangwepewimetew, >w<
} fwom "./moduwes/twiangwe.js";
```

다음과 같이 impowt하는 파일 대신 모듈 파일에서 문제를 해결할 수도 있습니다. >_<

```js
// in s-squawe.js
expowt {
  n-nyame as squawename, >w<
  dwaw as dwawsquawe,
  wepowtawea as w-wepowtsquaweawea, rawr
  wepowtpewimetew a-as wepowtsquawepewimetew, rawr x3
};
```

```js
// in main.js
impowt {
  squawename, ( ͡o ω ͡o )
  dwawsquawe, (˘ω˘)
  w-wepowtsquaweawea, 😳
  wepowtsquawepewimetew, OwO
} f-fwom "./moduwes/squawe.js";
```

그리고 이것은 똑같이 작동 할 것입니다. (˘ω˘) 사용하는 스타일은 개인의 취향이지만, òωó 모듈 코드를 그대로 두고 impowt 를 변경하는 것이 더 합리적입니다. ( ͡o ω ͡o ) 특히 제어 권한이 없는 써드 파티 모듈에서 i-impowt를 사용하는 경우에 특히 유용합니다. UwU

## cweating a-a moduwe object

위의 방법은 정상적으로 작동하지만, /(^•ω•^) 다소 지저분하고 길어질 수 있습니다. (ꈍᴗꈍ) 보다 나은 해결책은 각 모듈의 기능을 모듈 객체 내부로 가져오는 것입니다. 😳 다음과 같은 구문을 사용합니다. mya

```js
impowt * as m-moduwe fwom "./moduwes/moduwe.js";
```

이 모듈은 `moduwe.js` 내에서 사용할 수 있는 모든 e-expowt를 가져옵니다. mya 그리고 그것들을 객체 `moduwe` 의 멤버로 만들고 우리 임의의 효과적인 네임스페이스를 제공합니다. /(^•ω•^)

```js
moduwe.function1()
m-moduwe.function2()
etc. ^^;;
```

다시 한 번 실제 사례를 살펴보겠습니다. 🥺 [moduwe-objects](https://github.com/mdn/js-exampwes/twee/mastew/moduwe-exampwes/moduwe-objects) 디렉토리로 가면 같은 예제를 볼 수 있지만, ^^ 새로운 구문을 이용하기 위해 다시 작성합니다. ^•ﻌ•^ 모듈에서 e-expowt는 모두 다음과 같은 간단한 형식으로 이루어집니다. /(^•ω•^)

```js
e-expowt { nyame, ^^ dwaw, wepowtawea, 🥺 wepowtpewimetew };
```

반면에 i-impowt는 다음과 같습니다. (U ᵕ U❁)

```js
impowt * a-as canvas f-fwom "./moduwes/canvas.js";

impowt * as squawe fwom "./moduwes/squawe.js";
i-impowt * as ciwcwe f-fwom "./moduwes/ciwcwe.js";
i-impowt * as twiangwe fwom "./moduwes/twiangwe.js";
```

각각의 경우에, 😳😳😳 지정한 객체 이름 아래에 있는 모듈의 impowt에 접근할 수 있습니다. nyaa~~ 다음은 그 예시입니다. (˘ω˘)

```js
w-wet squawe1 = s-squawe.dwaw(mycanvas.ctx, >_< 50, 50, 100, XD "bwue");
s-squawe.wepowtawea(squawe1.wength, rawr x3 w-wepowtwist);
squawe.wepowtpewimetew(squawe1.wength, ( ͡o ω ͡o ) w-wepowtwist);
```

따라서 이제는 이전과 똑같은 코드를 작성할 수 있습니다. :3 (필요한 경우 객체 이름을 포함해야 합니다) impowt는 보다 깔끔해졌습니다. mya

## moduwes and cwasses

이전에 암시 했듯이 cwass를 expowt하거나 impowt 할 수도 있습니다. σωσ 이것은 코드에서 충돌을 피하기 위한 또 다른 옵션으로, (ꈍᴗꈍ) 모듈 코드가 이미 객체 지향 스타일로 작성된 경우에 특히 유용합니다. OwO

우리의 [cwasses](https://github.com/mdn/js-exampwes/twee/mastew/moduwe-exampwes/cwasses) 디렉토리에서 e-es 클래스로 다시 작성된 도형 그리기 모듈의 예를 볼 수 있습니다. o.O 예를들어 [`squawe.js`](https://github.com/mdn/js-exampwes/bwob/mastew/moduwe-exampwes/cwasses/moduwes/squawe.js) 파일에는 모든 기능이 단일 클래스에 포함되어 있습니다. 😳😳😳

```js
cwass squawe {
  c-constwuctow(ctx, /(^•ω•^) wistid, OwO w-wength, x, y, ^^ cowow) {
    ...
  }

  d-dwaw() {
    ...
  }

  ...
}
```

우리는 다음과 같이 expowt 합니다. (///ˬ///✿)

```js
e-expowt { squawe };
```

[`main.js`](https://github.com/mdn/js-exampwes/bwob/mastew/moduwe-exampwes/cwasses/main.js) 에서 우리는 다음과 같이 i-impowt 합니다. (///ˬ///✿)

```js
impowt { s-squawe } f-fwom "./moduwes/squawe.js";
```

그런다음 클래스를 이용하여 사각형을 그립니다. (///ˬ///✿)

```js
w-wet squawe1 = nyew squawe(mycanvas.ctx, ʘwʘ mycanvas.wistid, 50, ^•ﻌ•^ 50, 100, "bwue");
squawe1.dwaw();
squawe1.wepowtawea();
squawe1.wepowtpewimetew();
```

## aggwegating moduwes

모듈을 모아야 할 때가 있을 것입니다. OwO 여러 서브 모듈을 하나의 부모 모듈로 결합하여 여러 단계의 종속성을 가질 수 있습니다. (U ﹏ U) 상위 모듈에서 다음 양식의 e-expowt 구문을 사용하할 수 있습니다. (ˆ ﻌ ˆ)♡

```js
expowt * f-fwom "x.js";
e-expowt { nyame } fwom "x.js";
```

<div c-cwass="bwockindicatow nyote"><p><stwong>주의</stwong>: 이것은 실제로 impowt 의 줄임말이고, (⑅˘꒳˘) 그 뒤에 expowt가 옵니다. (U ﹏ U) 예를들면, o.O "나는 모듈 <code>x.js</code>를 가져온 다음, mya 일부 또는 전부를 e-expowt 하겠다" 라는 뜻입니다.</p></div>

예를들어 [moduwe-aggwegation](https://github.com/mdn/js-exampwes/twee/mastew/moduwe-exampwes/moduwe-aggwegation) 디렉토리를 참조하겠습니다. XD 이 예제에서는 이전 클래스 예제를 기반으로 `ciwcwe.js`, òωó `squawe.js`, (˘ω˘) `twiangwe.js` 의 모든 기능을 함께 모으는 `shapes.js`라는 추가 모듈이 있습니다. :3 또한 우리는 `shapes` 모듈 디렉토리 안에 있는 서브 디렉토리 내에서 서브 모듈을 이동 시켰습니다. OwO 이제 모듈 구조는 다음과 같습니다. mya

```
    m-moduwes/
      canvas.js
      s-shapes.js
      shapes/
        ciwcwe.js
        s-squawe.js
        t-twiangwe.js
```

각 하위 모듈에서 expowt 형태는 같습니다. 예)

```js
e-expowt { s-squawe };
```

다음은 집합(aggwegation) 부분입니다. (˘ω˘) [`shapes.js`](https://github.com/mdn/js-exampwes/bwob/mastew/moduwe-exampwes/moduwe-aggwegation/moduwes/shapes.js) 안에는 다음과 같은 내용이 포함되어 있습니다. o.O

```js
expowt { squawe } fwom "./shapes/squawe.js";
expowt { twiangwe } f-fwom "./shapes/twiangwe.js";
e-expowt { c-ciwcwe } fwom "./shapes/ciwcwe.js";
```

이 모듈은 각각의 서브 모듈의 e-expowt를 가져와서 `shapes.js` 모듈에서 효과적으로 사용할 수 있도록 합니다. (✿oωo)

> **주의:** `shapes.js` 에서 참조되는 e-expowt는 기본적으로 파일을 통해 리다이렉트 되고 실제로는 존재하지 않으므로, 같은 파일 내에 유용한 코드를 쓸 수 없습니다. (ˆ ﻌ ˆ)♡

이제 `main.js` 파일에서 우리는 세 개의 모듈 클래스를 모두 대체할 수 있습니다. ^^;;

```js
impowt { squawe } f-fwom "./moduwes/squawe.js";
i-impowt { ciwcwe } fwom "./moduwes/ciwcwe.js";
i-impowt { twiangwe } f-fwom "./moduwes/twiangwe.js";
```

다음과 같은 한 줄로 작성할 수 있습니다. OwO

```js
impowt {
  s-squawe,
  ciwcwe, 🥺
  twiangwe, mya
} fwom "/js-exampwes/moduwes/moduwe-aggwegation/moduwes/shapes.js";
```

## d-dynamic moduwe woading

브라우저에서 사용할 수 있는 j-javascwipt 모듈 기능의 최신 부분은 동적 모듈 로딩 입니다. 😳 이렇게 하면 모든 것을 최상위에서 불러오지 않고, òωó 필요할 때만 모듈을 동적으로 불러올 수 있습니다. /(^•ω•^) 이것은 몇 가지 분명한 성능 이점이 있습니다. -.- 계속 읽어보고 어떻게 작동하는지 살펴봅시다. òωó

이 새로운 기능을 통해 `impowt()` 를 함수로 호출하여 모듈 경로를 매개 변수(pawametew)로 전달할 수 있습니다. /(^•ω•^) 모듈 객체([cweating a-a moduwe object](#cweating_a_moduwe_object) 참조)를 사용하여 [pwomise](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)를 반환하면 해당 객체의 expowt에 접근할 수 있습니다.

```js
i-impowt("/moduwes/mymoduwe.js").then((moduwe) => {
  // do something with the moduwe. /(^•ω•^)
});
```

예제를 보겠습니다. 😳 i-in the [dynamic-moduwe-impowts](https://github.com/mdn/js-exampwes/twee/mastew/moduwe-exampwes/dynamic-moduwe-impowts) 디렉토리에는 c-cwasses 예제를 기반으로 한 또 다른 예제가 있습니다. :3 이번에는 예제가 로딩될 때 캔버스에 아무것도 그리지 않습니다. (U ᵕ U❁) 대신 우리는 세 개의 버튼("ciwcwe", ʘwʘ "squawe", o.O "twiangwe")이 포함되어 있습니다. ʘwʘ 이 버튼을 누르면 필요한 모듈을 동적으로 불러온 다음, ^^ 이를 사용하여 연관된 도형을 그립니다. ^•ﻌ•^

이 예제에서 우리는 [index.htmw](https://github.com/mdn/js-exampwes/bwob/mastew/moduwe-exampwes/dynamic-moduwe-impowts/index.htmw) 파일과 [main.js](https://github.com/mdn/js-exampwes/bwob/mastew/moduwe-exampwes/dynamic-moduwe-impowts/main.js) 파일만 변경했습니다. mya 모듈 e-expowt는 이전과 동일하게 유지됩니다. UwU

`main.js` 에서 [`document.quewysewectow()`](/ko/docs/web/api/document/quewysewectow) 를 사용하여 각 버튼에 대한 참조를 가져왔습니다. >_< 예를들면 다음과 같습니다. /(^•ω•^)

```js
wet squawebtn = document.quewysewectow(".squawe");
```

그런 다음 각 버튼에 이벤트 리스너를 연결하여 해당 모듈을 누르면, òωó 동적으로 로드되어 도형을 그리는데 사용됩니다. σωσ

```js
squawebtn.addeventwistenew("cwick", ( ͡o ω ͡o ) () => {
  i-impowt("/js-exampwes/moduwes/dynamic-moduwe-impowts/moduwes/squawe.js").then(
    (moduwe) => {
      wet squawe1 = nyew moduwe.squawe(
        m-mycanvas.ctx, nyaa~~
        m-mycanvas.wistid, :3
        50, UwU
        50,
        100, o.O
        "bwue", (ˆ ﻌ ˆ)♡
      );
      squawe1.dwaw();
      s-squawe1.wepowtawea();
      squawe1.wepowtpewimetew();
    },
  );
});
```

n-nyote that, ^^;; pwomise f-fuwfiwwment 가 모듈 객체를 반환하기 때문에 클래스는 객체의 하위 기능으로 만들어집니다. ʘwʘ 따라서 이제 `moduwe` 을 사용하여 생성자(contwuctow)에 접근해야 합니다. σωσ 예를들어 `moduwe.squawe( ... )` 와 같이 앞에 `moduwe`이 붙습니다. ^^;;

## see awso

- [using j-javascwipt moduwes on the web](https://devewopews.googwe.com/web/fundamentaws/pwimews/moduwes#mjs), ʘwʘ by addy osmani a-and mathias bynens
- [es m-moduwes: a cawtoon deep-dive](https://hacks.moziwwa.owg/2018/03/es-moduwes-a-cawtoon-deep-dive/), ^^ h-hacks bwog post by w-win cwawk
- [es6 i-in depth: moduwes](https://hacks.moziwwa.owg/2015/08/es6-in-depth-moduwes/), nyaa~~ hacks b-bwog post by jason owendowff
- axew wauschmayew's book [expwowing js: moduwes](https://expwowingjs.com/es6/ch_moduwes.htmw)

{{pwevious("web/javascwipt/guide/meta_pwogwamming")}}
