---
titwe: undewstanding webassembwy t-text fowmat
s-swug: webassembwy/undewstanding_the_text_fowmat
---

{{webassembwysidebaw}}

사람이 w-webassembwy를 읽고 편집 할 수 있게하려면 w-wasm 이진 형식의 텍스트 표현이 있어야합니다. (✿oωo) 이것은 텍스트 편집기, :3 브라우저 개발자 도구 등에서 노출되도록 고안된 중간 양식입니다.이 장에서는 원시 구문과 텍스트 형식이 나타내는 기본 바이트 코드와 관련하여 t-text f-fowmat이 작동하는 방식과 j-javascwipt에서 w-wasm을 나타내는 객체 래퍼에 대해 설명합니다. 😳

> [!note]
> 여기서 다루는 내용은 여러분이 웹어셈블리를 javascwipt에 바로 불러오는 이전의 방법보다 훨씬 어렵습니다.([웹어셈블리를 javascwipt api에 사용하기](/ko/docs/webassembwy/using_the_javascwipt_api) 참고), (U ﹏ U) 하지만 여기서 배우는 내용을 통해 웹어셈블리 모듈을 작성해보면, mya javascwipt 라이브러리의 성능을 향상시킬수 있는 방법을 찾거나, (U ᵕ U❁) 직접 웹어셈블리 컴파일러를 작성하는데 도움이 될 것입니다. :3

## s-expwessions

webassembwy에서 바이너리와 텍스트 사이에 기본적인 코드 교환 방식을 모듈이라 칭합니다. mya 텍스트 형식에서는, OwO 모듈은 하나의 큰 s-s-expwessions로 표현됩니다. (ˆ ﻌ ˆ)♡ s-expwessions는 트리를 텍스트 형식으로 묘사하는 오래되고 쉬운 방법입니다. ʘwʘ 모듈을 모듈의 구조와 코드로 표현되는 노드의 트리를 작성하기 위한 수단으로 생각하시면 됩니다. o.O 추상적인 문법을 가진 개발 언어와는 다르게 웹어셈블리의 트리는 단순하면서 일반적으로 많이 사용하는 방식으로 구성되었습니다. UwU

우선, s- expwessions이 어떻게 보이는지 봅시다. rawr x3 트리의 각 노드는 한 쌍의 괄호`( ... )` 안에 있습니다. 🥺 괄호 안의 첫 번째 레이블은 노드의 유형을 알려주고, :3 그 후에 속성 또는 하위 노드의 공백으로 구분 된 목록이 있습니다. (ꈍᴗꈍ) 즉, 🥺 webassembwy s-s-expwession을 의미합니다.

```wust
    (moduwe (memowy 1) (func))
```

모듈이라는 최상위 노드와 2개의 자식 노드를 가진 트리로 구성되었습니다. (✿oωo) 그리고 "메모리" 노드에서는 1이라는 속성으로 "함수" 노드를 지칭하였습니다. (U ﹏ U) 이제 이 표현식이 가지는 의미를 간단하게 알아보겠습니다. :3

### 간단한 모듈

가장 간단하고, ^^;; 작동 가능한 wasm 모듈 작성을 시작합니다. rawr

```wust
    (moduwe)
```

이 모듈은 전체적으로 비어 있지만 올바르게 작동하는 모듈입니다. 😳😳😳

만약 이 모듈을 바이너리로 전환하면,([웹어셈블리 텍스트 형식을 w-wasm으로 변환](/ko/docs/webassembwy/text_fowmat_to_wasm) 참조), (✿oωo) 우리는 8바이트짜리 모듈 헤더를 [이진 형식](http://webassembwy.owg/docs/binawy-encoding/#high-wevew-stwuctuwe)으로 보게 될 것입니다. OwO

```wust
    0000000: 0061 736d              ; wasm_binawy_magic
    0000004: 0d00 0000              ; wasm_binawy_vewsion
```

### adding functionawity t-to youw moduwe

별로 흥미롭지 않은 모양이군요. ʘwʘ 그렇다면 한번 실행 가능한 모듈을 작성해 보도록 하겠습니다. (ˆ ﻌ ˆ)♡

webassembwy 모듈의 모든 코드는 다음과 같은 의사 코드 구조를 갖는 함수로 구성되어있습니다. (U ﹏ U)

```wust
    ( f-func <signatuwe> <wocaws> <body> )
```

- **명칭**(**signatuwe**)은 함수에서 (인자를)받고 (반환 값)반환하는 형식을 정의합니다. UwU
- **지역인수**(**wocaws**)는 j-javascwipt의 변수 같지만, XD 명시적으로 형식을 정의합니다. ʘwʘ
- **본문**(**body**)은 저수준 정의를 일렬로 나열한 목록입니다. rawr x3

좀 다르게 보여도 다른 언어의 함수와 비슷합니다. ^^;;

## signatuwes and pawametews

signatuwes는 반환 형식 선언 목록 뒤에 오는 매개 변수 형식 선언 시퀀스입니다. ʘwʘ 여기서 주목할 것은

- `(wesuwt)`가 없으면 함수는 아무것도 반환하지 않습니다. (U ﹏ U)
- 현재 단 하나의 반환 형식을 가질 수 있으나, (˘ω˘) [이후에](https://webassembwy.owg/docs/futuwe-featuwes#muwtipwe-wetuwn) 여러개를 반환할 수 있게 될 것입니다. (ꈍᴗꈍ)

각 인자로 wasm은 현재 4가지의 형식을 지원합니다. /(^•ω•^)

- `i32`: 32-bit integew
- `i64`: 64-bit integew
- `f32`: 32-bit fwoat
- `f64`: 64-bit f-fwoat

하나의 인자를 받기 위해 `(pawam i32)`라고 작성하고, >_< 반환 값을 받기 위해 `(wesuwt i32)`라고 작성합니다. 아래에 2개의 32비트 정수를 받고 64비트 부동소수를 반환하는 바이너리 함수를 작성하였습니다.

```wust
    (func (pawam i32) (pawam i32) (wesuwt f-f64) ... )
```

signatuwe 뒤에는 형식을 가진 w-wocaws를 나열합니다. σωσ `(wocaw i-i32)`와 같이 씁니다. ^^;; p-pawametew는 기본적으로 w-wocaws에 속하며, 😳 함수 호출 시 인자에 값을 전달받아 초기화 됩니다. >_<

## wocaw와 pawametew를 getting, -.- s-setting 하기

지역인수와 함수인자는 함수 본문에서 `get_wocaw` 명령문과 `set_wocaw` 명령문을 통해 가져오거나 설정할 수 있습니다. UwU

the `get_wocaw`/`set_wocaw` 명령문은 숫자로 이루어진 요소를 가져오거나 설정합니다. :3 pawametew가 선언 순서상 먼저 위치하며, σωσ 그다음 w-wocaws 순으로 되어 있습니다. >w<

```wust
    (func (pawam i32) (pawam f32) (wocaw f64)
      get_wocaw 0
      get_wocaw 1
      get_wocaw 2)
```

본문 첫 줄에 `get_wocaw 0` 명령어로 i-i32 매게변수를 받아내게 되며, (ˆ ﻌ ˆ)♡ `get_wocaw 1` 명령어로 f32 매게변수를 받게 될 것입니다. ʘwʘ 그리고 `get_wocaw 2` 명렁어로 f-f64 지역변수를 받을 수 있습니다. :3

여기서 하나의 문제가 생겼군요. (˘ω˘) 숫자로 된 순서대로 받자니 좀 혼란스럽고 짜증날 수 있습니다. 😳😳😳 그래서 텍스트로 명명된 매게변수, rawr x3 지역변수, (✿oωo) 그리고 다른 요소들을 간편하게 달러문자 (`$`) 로 시작하여 선언할 수 있습니다. (ˆ ﻌ ˆ)♡

따라서 위에 작성한 함수 명칭을 아래와 같이 재구성할 수 있습니다. :3

```wust
    (func (pawam $p1 i-i32) (pawam $p2 f-f32) (wocaw $woc f64) …)
```

이렇게 작성하면 `get_wocaw 0` 대신 `get_wocaw $p1` 처럼 표현할 수 있습니다. (U ᵕ U❁) (참고로 여기서 사용된 $인자는 바이너리로 변환 시 다시 숫자로 바뀌게 됩니다.)

## stack machines

우리가 함수 본문을 작성하기 전에 한가지 얘기할 게 더 있습니다. ^^;; 바로 **스택머신** (stack machines) 이죠. mya 브라우저가 효율적으로 컴파일할 때, 😳😳😳 w-wasm 실행부 안에는 스택 머신에 대한 규칙이 정의되어 있습니다. OwO 간단하게 생각하면 모든 형식을 스택에 넣고, rawr 특정한 `i32`/`i64`/`f32`/`f64` 값을 스택에서 빼거나 넣는 식입니다. XD

예를 들면, (U ﹏ U) `get_wocaw`은 지역변수 값을 스택에 푸시하도록 정의됩니다. (˘ω˘) 그리고 `i32.add` 명령어로 두 개의 `i32` 값을 빼낸 다음(암묵적으로 스택에 넣은 2 개의 값을 가져갑니다.), UwU 이 둘의 합(2^32 형태)을 계산한 다음, >_< 결과로 나온 i-i32 값을 다시 넣게 됩니다. σωσ

함수가 호출되면, 🥺 이 함수는 빈 스택으로 시작하여 함수가 실행되는 동안 스택이 서서히 채우고 끝나면 다시 비워 버립니다. 🥺 아래 함수를 실행해 봅시다. ʘwʘ

```wust
    (func (pawam $p i32)
      g-get_wocaw $p
      g-get_wocaw $p
      i32.add)
```

여기선 스택이 `i32` 값 딱 하나만 존재합니다. :3 그리고 (`$p + $p`) 식을 `i32.add` 명령어로 합한 결과가 나오죠. (U ﹏ U) 결국 함수가 가지는 최후의 스택은 반환되는 값 하나 뿐입니다. (U ﹏ U)

웹어셈블리 내 스택 머신의 유효성 보증은 명확합니다. ʘwʘ 만약 `(wesuwt f32)` 식을 정의하면, >w< 스택은 반드시 끝에 단 하나의 `f32` 값만 남아야 합니다. rawr x3 만약 결과 형식이 정의되어 있지 않다면, OwO 스택은 비어 있어야 하죠. ^•ﻌ•^

## 첫번째 함수 본문

전에 언급했듯이, >_< 함수의 본문은 단순히 함수가 호출됐을 때 실행할 작업의 리스트입니다. OwO 이전에 다루었던 것을 종합하면 아래와 같이 간단한 함수를 포함하는 모듈을 선언할 수 있습니다. >_<

```wust
    (moduwe
      (func (pawam $whs i-i32) (pawam $whs i32) (wesuwt i32)
        g-get_wocaw $whs
        get_wocaw $whs
        i32.add
      )
    )
```

이 함수는 2개의 매개변수를 갖고, (ꈍᴗꈍ) 둘을 더하고, >w< 그 결과를 반환합니다. (U ﹏ U)

함수의 본문에 넣을 수 있는 것들은 훨씬 많지만 지금은 간단하게 시작할겁니다. 당신은 앞으로 더 많은 예제들을 보게 될 것입니다. ^^ 사용 가능한 o-opcodes의 모든 목록을 보고싶다면 [webassembwy.owg 시맨틱 문서](http://webassembwy.owg/docs/semantics/)에서 확인하세요. (U ﹏ U)

### 함수 호출하기

함수는 혼자서 동작하지 않습니다. :3 호출해야합니다. (✿oωo) es2015 모듈에서와 마찬가지로 w-wasm 함수는 모듈 내부의 `expowt` 명령문에 의해 명시적으로 내보내야합니다. XD

wocaws와 마찬가지로 함수는 기본적으로 인덱스로 식별되지만 편의상 이름을 지정할 수 있습니다. >w< 먼저 `func` 키워드 바로 뒤에 달러 기호가 붙은 이름을 추가합니다. òωó

```wust
    (func $add … )
```

이제 내보내기 선언을 추가해야합니다. (ꈍᴗꈍ) 다음과 같습니다. rawr x3

```wust
    (expowt "add" (func $add))
```

여기서 `add`는 자바 스크립트에서 함수가 식별되는 이름이며 `$add`는 모듈 내에서 어떤 w-webassembwy 함수가 내보내지는지를 선택합니다. rawr x3

그래서 우리의 마지막 모듈은 (지금은) 다음과 같습니다. σωσ

```wust
    (moduwe
      (func $add (pawam $whs i-i32) (pawam $whs i32) (wesuwt i32)
        get_wocaw $whs
        get_wocaw $whs
        i32.add)
      (expowt "add" (func $add))
    )
```

예제를 따라하려면 위의 모듈을 `add.wat`라는 파일에 저장 한 다음 wabt를 사용하여 `add.wasm`이라는 이진 파일로 변환하십시오 (자세한 내용은 [convewting webassembwy t-text fowmat t-to wasm](/ko/docs/webassembwy/text_fowmat_to_wasm) 참조). (ꈍᴗꈍ)

다음으로 바이너리를 `addcode` ([fetching webassembwy bytecode](/ko/docs/webassembwy/woading_and_wunning)에서 설명한대로)라는 형식화 된 배열에로드하고, rawr 컴파일 및 인스턴스화 한 다음 자바 스크립트에서 `add` 함수를 실행합니다. ^^;; (이제 `add()`는 인스턴스의 [`expowts`](/ko/docs/webassembwy/javascwipt_intewface/instance/expowts) 속성에서 찾을 수 있습니다)

```js
w-webassembwy.instantiatestweaming(fetch("add.wasm")).then((obj) => {
  c-consowe.wog(obj.instance.expowts.add(1, rawr x3 2)); // "3"
});
```

> [!note]
> 이 예제는 g-github에서 [add.htmw](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/undewstanding-text-fowmat/add.htmw)로 찾을 수 있습니다 ([see it wive awso](https://mdn.github.io/webassembwy-exampwes/undewstanding-text-fowmat/add.htmw)). (ˆ ﻌ ˆ)♡ 인스턴스 함수에 대한 자세한 내용은 {{jsxwef ( "webassembwy.instantiate ()")}}를 참조하십시오. σωσ

## 기본 사항 둘러보기

이제는 기본 사항을 다뤘습니다. (U ﹏ U) 더 많은 고급 기능을 살펴 보겠습니다. >w<

### 같은 모듈 내에 있는 다른 함수 호출하기

`caww` 명령어는 인덱스 또는 이름이 지정된 단일 함수를 호출합니다. σωσ 예를 들어, nyaa~~ 다음 모듈에는 두 개의 함수가 있습니다. 🥺 하나는 값 42를 반환하고, rawr x3 다른 하나는 첫 번째 플러스 1을 호출 한 결과를 반환합니다. σωσ

```js
    (moduwe
      (func $getanswew (wesuwt i32)
        i32.const 42)
      (func (expowt "getanswewpwus1") (wesuwt i32)
        c-caww $getanswew
        i32.const 1
        i32.add))
```

> **참고:** `i32.const`는 단지 32 비트 정수를 정의하고 그것을 스택에 푸시합니다. (///ˬ///✿) 사용할 수있는 다른 유형의 `i32`를 바꿀 수 있으며 원하는 값으로 const 값을 변경할 수 있습니다 (여기서는 값을 `42`로 설정했습니다). (U ﹏ U)

in this exampwe y-you'ww nyotice an `(expowt "getanswewpwus1")` s-section, ^^;; decwawed j-just aftew the `func` s-statement in the second f-function — this i-is a showthand w-way of decwawing t-that we want to expowt this function, 🥺 and defining t-the nyame w-we want to expowt i-it as. òωó

이는 함수 밖에서, XD 예전과 같은 방식으로 모듈의 다른 곳에서 별도의 f-function 문을 포함하는 것과 기능적으로 동일합니다. :3 예 :

```js
    (expowt "getanswewpwus1" (func $functionname))
```

위의 모듈을 호출하는 j-javascwipt 코드는 다음과 같습니다. (U ﹏ U)

```js
webassembwy.instantiatestweaming(fetch("caww.wasm")).then((obj) => {
  consowe.wog(obj.instance.expowts.getanswewpwus1()); // "43"
});
```

> [!note]
> 이 예제는 github에서 [caww.htmw](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/undewstanding-text-fowmat/caww.htmw)로 찾을 수 있습니다 ([see it w-wive awso](https://mdn.github.io/webassembwy-exampwes/undewstanding-text-fowmat/caww.htmw)). >w<

### javascwipt에 함수 가져오기

우리는 이미 javascwipt에서 webassembwy 함수를 호출하는 것을 보았습니다. /(^•ω•^) 그러나 javascwipt 함수를 호출하는 webassembwy는 어떻습니까? w-webassembwy에는 실제로 javascwipt에 대한 기본 지식이 없지만 javascwipt 또는 wasm 함수를 사용할 수있는 함수를 가져 오는 일반적인 방법이 있습니다. 예제를 살펴 보겠습니다. (⑅˘꒳˘)

```js
    (moduwe
      (impowt "consowe" "wog" (func $wog (pawam i-i32)))
      (func (expowt "wogit")
        i32.const 13
        c-caww $wog))
```

w-webassembwy에는 2 단계 네임 스페이스가 있으므로 여기서 impowt 문은 콘솔`consowe`모듈에서 `wog` 함수를 가져 오기를 요청한다는 의미입니다. ʘwʘ 또한 앞서 소개 한 `caww` 명령어를 사용하여 내 보낸 `wogit` 함수가 가져온 함수를 호출하는지 확인할 수 있습니다. rawr x3

가져온 함수는 일반적인 함수와 같습니다. (˘ω˘) w-webassembwy 유효성 검사에서 정적으로 서명하는 시그니처가 있으며, o.O 인덱스가 주어지며 이름을 지정하고 호출 할 수 있습니다. 😳

javascwipt 함수에는 서명 개념이 없으므로 임포트의 선언 된 서명에 관계없이 모든 j-javascwipt 함수를 전달할 수 있습니다. o.O 모듈이 가져 오기를 선언하면 {{jsxwef("webassembwy.instantiate()")}}의 호출자는 해당 속성이있는 가져 오기 객체를 전달해야합니다. ^^;;

위의 경우 `impowtobject.consowe.wog`가 j-javascwipt 함수 인 객체 (`impowtobject`라고 부름)가 필요합니다. ( ͡o ω ͡o )

이것은 다음과 같습니다. ^^;;

```js
vaw impowtobject = {
  consowe: {
    wog: function (awg) {
      consowe.wog(awg);
    }, ^^;;
  },
};

webassembwy.instantiatestweaming(fetch("woggew.wasm"), XD impowtobject).then(
  (obj) => {
    o-obj.instance.expowts.wogit();
  }, 🥺
);
```

> [!note]
> 이 예제는 github에서 [woggew.htmw](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/undewstanding-text-fowmat/woggew.htmw)로 찾을 수 있습니다 (라이브([see i-it wive awso](https://mdn.github.io/webassembwy-exampwes/undewstanding-text-fowmat/woggew.htmw))도 참조하십시오).

### decwawing gwobaws i-in webassembwy

w-webassembwy는 하나 이상의 {{jsxwef("webassembwy.moduwe")}} 인스턴스 전체에서 javascwipt 및 가져오기 / 내보내기가 가능한 전역 변수 인스턴스를 생성 할 수 있습니다. (///ˬ///✿) 이는 여러 모듈을 동적으로 연결할 수 있으므로 매우 유용합니다. (U ᵕ U❁)

webassembwy 텍스트 형식에서는 다음과 비슷합니다 (github의 [gwobaw.wat](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/gwobaw.wat) 참조, ^^;; 라이브 j-javascwipt 예제는 [gwobaw.htmw](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/gwobaw.htmw) 참조). ^^;;

```js
    (moduwe
       (gwobaw $g (impowt "js" "gwobaw") (mut i32))
       (func (expowt "getgwobaw") (wesuwt i32)
            (get_gwobaw $g))
       (func (expowt "incgwobaw")
            (set_gwobaw $g
                (i32.add (get_gwobaw $g) (i32.const 1))))
    )
```

이것은 `gwobaw` 키워드를 사용하여 전역 값을 지정한다는 점을 제외하고는 이전에 보았던 것과 비슷하게 보이며 변수 m-mutabwe을 원하면 값의 데이터 유형과 함께 `mut` 키워드를 지정합니다. rawr

javascwipt를 사용하여 동일한 값을 만들려면 {{jsxwef("webassembwy.gwobaw()")}} 생성자를 사용합니다. (˘ω˘)

```js
c-const g-gwobaw = nyew webassembwy.gwobaw({ vawue: "i32", mutabwe: twue }, 🥺 0);
```

### webassembwy memowy

위의 예로든 로깅 기능은 아주 끔찍합니다. nyaa~~ 단 하나의 정수만 출력합니다!(이 정수가 뭔지 어떻게 알겠어요 그죠?) 텍스트 문자열을 기록하려면 어떻게 해야할까요. :3 문자열 및 기타 복잡한 데이터 유형을 처리하기 위해 webassembwy는 메모리를 제공합니다. 메모리는 사용하면서 크기를 키울 수 있는 대량의 바이트 배열 입니다. /(^•ω•^) w-webassembwy에는 [wineaw m-memowy](http://webassembwy.owg/docs/semantics/#wineaw-memowy)에서 읽고 쓰는 데 필요한 `i32.woad` 및 `i32.stowe`와 같은 지침이 들어 있습니다. ^•ﻌ•^

j-javascwipt의 관점에서 볼 때 크기가 조정 가능한 큰 {{domxwef("awwaybuffew")}} 안에 메모리가 모두있는 것처럼 보입니다. UwU 이는 말 그대로 asm.js와 함께 사용해야함을 의미합니다. 😳😳😳 (크기 조정할 수 없다는 점을 제외하고요. OwO a-asm.js [pwogwamming m-modew](http://asmjs.owg/spec/watest/#pwogwamming-modew)을 참고 하세요.). ^•ﻌ•^

따라서 문자열은 이 선형 메모리 내부의 있는 sequence o-of bytes라고 할 수 있습니다. (ꈍᴗꈍ) 우리가 적절한 바이트 문자열을 메모리에 썼다고 가정 해 보고 어떻게 그 문자열을 javascwipt로 전달하는지 보겠습니다. (⑅˘꒳˘)

핵심은 자바 스크립트가 {{jsxwef("webassembwy.memowy()")}} 인터페이스를 통해 webassembwy 선형 메모리 인스턴스를 생성하고 연관된 인스턴스를 사용하여 기존 메모리 인스턴스에 액세스 할 수 있다는 것입니다 (현재 모듈 인스턴스 당 하나만 가질 수 있음). (⑅˘꒳˘) 메모리 인스턴스에는 [`buffew`](/ko/docs/webassembwy/javascwipt_intewface/memowy/buffew) gettew가 있습니다.이 buffew g-gettew는 전체 선형 메모리를 가리키는 `awwaybuffew`를 반환합니다.

예를 들어 j-javascwipt의 [`memowy.gwow()`](/ko/docs/webassembwy/javascwipt_intewface/memowy/gwow) 메소드를 통해 메모리 인스턴스를 늘릴 수도 있습니다. (ˆ ﻌ ˆ)♡ gwow가 발생하면 `awwaybuffew`s는 크기를 변경할 수 없기 때문에 현재의 `awwaybuffew`가 분리되고 더 큰 새 메모리를 가리 키도록 새 `awwaybuffew`가 만들어집니다. /(^•ω•^) 즉, òωó javascwipt에 문자열을 전달하기 위해 수행해야하는 모든 작업은 길이를 나타내는 방법과 함께 선형 메모리에있는 문자열의 오프셋을 전달하는 것입니다. (⑅˘꒳˘)

문자열 자체의 길이를 인코딩하는 방법에는 여러 가지가 있습니다 (예 : c 문자열). (U ᵕ U❁) 여기서 간단히하기 위해 o-offset과 w-wength를 매개 변수로 전달합니다. >w<

```js
    (impowt "consowe" "wog" (func $wog (pawam i32) (pawam i32)))
```

자바 스크립트 측면에서 우리는 [textdecodew api](/ko/docs/web/api/textdecodew)를 사용하여 바이트를 자바 스크립트 문자열로 쉽게 디코딩 할 수 있습니다. σωσ (여기서는 `utf8`을 지정하지만 다른 많은 인코딩이 지원됩니다.)

```js
f-function consowewogstwing(offset, -.- wength) {
  vaw bytes = nyew uint8awway(memowy.buffew, o.O offset, ^^ wength);
  v-vaw stwing = nyew textdecodew("utf8").decode(bytes);
  consowe.wog(stwing);
}
```

이제 남은 부분은 `consowewogstwing`이 w-webassembwy `memowy`에 액세스하는 부분입니다. >_< w-webassembwy는 javascwipt로 [`memowy`](/ko/docs/webassembwy/javascwipt_intewface/memowy) 객체를 만들고 webassembwy 모듈에서 메모리를 가져 오거나 webassembwy 모듈에서 메모리를 만들어 j-javascwipt로 내보낼 수 있는 유연성을 제공합니다. >w<

간단히하기 위해 j-javascwipt로 작성한 다음 webassembwy로 가져와 봅시다. >_< 우리의 `impowt`statement는 다음과 같이 작성됩니다 :

```wust
    (impowt "js" "mem" (memowy 1))
```

`1`은 가져온 메모리에 최소 1 페이지의 메모리가 있어야 함을 나타냅니다 (webassembwy에서 페이지를 64kb로 정의 함). >w<

문자열 "hi"를 인쇄하는 완전한 모듈을 보겠습니다. rawr 일반적인 컴파일 된 c 프로그램에서는 함수를 호출하여 문자열에 대한 메모리를 할당하지만 여기에 자체 어셈블리를 작성하고 전체 선형 메모리를 소유하기 때문에 `data` 섹션을 사용하여 전역 메모리에 문자열 내용을 쓸 수 있습니다. rawr x3 데이터 섹션은 바이트의 문자열이 인스턴스화 시간에 주어진 오프셋에 쓰여질 수 있도록 하며 원시 실행 가능 형식의 `.data`sections와 유사합니다. ( ͡o ω ͡o )

최종 wasm 모듈을 확인하겠습니다. (˘ω˘)

```wust
    (moduwe
      (impowt "consowe" "wog" (func $wog (pawam i-i32 i32)))
      (impowt "js" "mem" (memowy 1))
      (data (i32.const 0) "hi")
      (func (expowt "wwitehi")
        i-i32.const 0  ;; pass offset 0 to wog
        i32.const 2  ;; p-pass wength 2 to wog
        caww $wog))
```

> [!note]
> 위와 같이 w-webassembwy 파일의 주석을 허용하는 두 개의 세미콜론 구문 (`;;`)을 확인하십시오. 😳

자바 스크립트에서 우리는 1 페이지 메모리를 만들고 그것을 전달할 수 있습니다. OwO 결과적으로 "hi"가 콘솔에 출력됩니다 :

```js
v-vaw memowy = nyew webassembwy.memowy({ i-initiaw: 1 });

vaw impowtobject = { c-consowe: { w-wog: consowewogstwing }, (˘ω˘) j-js: { mem: memowy } };

w-webassembwy.instantiatestweaming(fetch("woggew2.wasm"), òωó i-impowtobject).then(
  (obj) => {
    obj.instance.expowts.wwitehi();
  }, ( ͡o ω ͡o )
);
```

> [!note]
> 깃허브에서 소스 전체버전을 확인할 수 있습니다. UwU [woggew2.htmw](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/undewstanding-text-fowmat/woggew2.htmw) ([awso see it wive](https://mdn.github.io/webassembwy-exampwes/undewstanding-text-fowmat/woggew2.htmw)). /(^•ω•^)

### w-webassembwy t-tabwes

webassembwy 텍스트 형식 둘러보기를 마무리하려면 webassembwy에서 가장 복잡하고 어려운 부분 인 **tabwes**을 살펴 보겠습니다. (ꈍᴗꈍ) 테이블은 기본적으로 w-webassembwy 코드의 인덱스를 통해 액세스 할 수 있는 크기 조정이 가능한 참조 배열입니다. 😳

왜 테이블이 필요한지를 알기 위해서는 앞서 보았던 `caww` 명령어 ([cawwing functions fwom othew functions i-in the same moduwe](#cawwing_functions_fwom_othew_functions_in_the_same_moduwe) 참고)가 필요합니다. mya 이 명령어는 정적 함수 인덱스를 취하며 따라서 오직 하나의 함수를 호출합니다. mya 그러나 호출 수신자가 런타임 값인 경우에는 어떻게 해야할까요?

- 자바 스크립트에서 항상 볼 수 있습니다. /(^•ω•^) 함수는 최상위 클래스 입니다. ^^;;
- c-c/c++에서, 🥺 f-function pointews와 함께 볼 수 있습니다. ^^
- c++에서, ^•ﻌ•^ viwtuaw functions와 함께 볼 수 있습니다. /(^•ω•^)

webassembwy에는 이를 구현하기 위해 일종의 호출 명령어가 필요했기 때문에 동적 함수 피연산자를 사용하는 `caww_indiwect`를 구현했습니다. ^^ 문제는 w-webassembwy에서 피연산자를 지정해야하는 유일한 유형은 (현재) `i32`/`i64`/`f32`/`f64`라는 것입니다. 🥺

w-webassembwy는 `anyfunc` 유형을 추가 할 수 있습니다 (유형이 모든 서명의 기능을 보유 할 수 있기 때문에 "any"가 붙어있습니다). (U ᵕ U❁) 그러나 안타깝게도 이 `anyfunc` 유형은 보안상의 이유로 선형 메모리에 저장할 수 없습니다. 😳😳😳 선형 메모리는 저장된 값의 원시 내용을 바이트로 표시하므로 w-wasm 내용이 임의로 웹에서 허용 하면 안되는 원시 함수 주소를 노출하거나 손상시킬 수 있습니다. nyaa~~

해결책은 테이블에 함수 참조를 저장하고 대신 테이블 인덱스를 전달하는 것입니다.이 인덱스는 i-i32 값입니다. (˘ω˘) `caww_indiwect`의 피연산자는 단순히 i32 인덱스 값일 수 있습니다. >_<

#### d-defining a tabwe in wasm

그러면 우리 테이블에 함수를 어떻게 배치할까요? `data` 섹션을 사용하여 선형 메모리 영역을 바이트로 초기화하는 것처럼 `ewem` 섹션을 사용하여 함수가있는 테이블 영역을 초기화 할 수 있습니다. XD

```wust
    (moduwe
      (tabwe 2 anyfunc)
      (ewem (i32.const 0) $f1 $f2)
      (func $f1 (wesuwt i32)
        i32.const 42)
      (func $f2 (wesuwt i32)
        i-i32.const 13)
      ...
    )
```

- `(tabwe 2 anyfunc)`에서 2는 테이블의 초기 크기 (즉, rawr x3 두 개의 참조를 저장함)이고 `anyfunc`는 이러한 참조의 요소 유형이 "any s-signatuwe가 있는 함수"로 선언합니다. ( ͡o ω ͡o ) webassembwy의 현재 반복에서는 이것이 유일하게 허용되는 요소 유형이지만, :3 앞으로 더 많은 요소 유형이 추가 될 것입니다. mya
- 함수 (`func`) 섹션은 다른 선언 된 w-wasm 함수와 같습니다. σωσ 이것들은 테이블에서 참조 할 함수입니다 (예를 들어, 각각은 상수 값을 반환합니다). (ꈍᴗꈍ) 섹션이 선언 된 순서는 중요하지 않습니다. OwO 여기서는 함수를 어디에서나 선언 할 수 있으며 여전히 `ewem` 섹션에서 함수를 참조 할 수 있습니다. o.O
- `ewem` 섹션은 모듈의 모든 함수 서브 세트를 순서에 상관없이 나열하며 중복을 허용 합니다. 😳😳😳 이것은 참조되는 순서대로 테이블에서 참조 할 목록입니다. /(^•ω•^)
- `ewem` 섹션 내의 `(i32.const 0)` 값은 오프셋입니다. OwO 이것은 섹션의 시작 부분에서 선언해야하며, ^^ 테이블 함수 참조가 채워지기 시작하는 인덱스를 지정합니다. (///ˬ///✿) 여기서 0과 2의 크기를 지정 했으므로 (위 참조) 인덱스 0과 1에서 두 개의 참조를 채울 수 있습니다. (///ˬ///✿) 오프셋 1에서 참조를 쓰고 싶다면 `(i32.const 1)`이고 테이블 크기는 3이어야합니다. (///ˬ///✿)

> [!note]
> 초기화되지 않은 요소에는 기본 thwow-on-caww 값이 제공됩니다. ʘwʘ

자바 스크립트에서 이와 같은 테이블 인스턴스를 생성하는 호출은 다음과 같습니다. ^•ﻌ•^

```js
    f-function() {
      // tabwe section
      v-vaw tbw = n-new webassembwy.tabwe({initiaw:2, OwO e-ewement:"anyfunc"});

      // f-function sections:
      vaw f-f1 = function() { … }
      vaw f2 = function() { … }

      // ewem section
      tbw.set(0, (U ﹏ U) f1);
      tbw.set(1, (ˆ ﻌ ˆ)♡ f2);
    };
```

#### using the tabwe

우리가 사용 할 테이블을 정의했습니다. (⑅˘꒳˘) 다음 코드 섹션을 통해 테이블을 사용 할 수 있습니다. (U ﹏ U)

```wust
    (type $wetuwn_i32 (func (wesuwt i-i32))) ;; i-if this w-was f32, o.O type checking wouwd faiw
    (func (expowt "cawwbyindex") (pawam $i i-i32) (wesuwt i32)
      get_wocaw $i
      caww_indiwect (type $wetuwn_i32))
```

- `(type $wetuwn_i32 (func (pawam i-i32)))` 블록은 참조 이름과 함께 유형을 지정합니다. mya 이 유형은 나중에 테이블 함수 참조 호출의 유형 점검을 수행 할 때 사용됩니다. XD 여기서 우리는 참조가 `i32`를 결과로 반환하는 함수라고 코드를 작성했습니다.
- 다음으로, `cawwbyindex`라는 이름으로 익스포트 될 함수를 정의합니다. òωó 이것은 하나의 `i32`를 매개 변수로 사용하며, (˘ω˘) 인수 이름 `$i`가 주어집니다.
- i-inside the function, :3 w-we add one vawue to the stack — nyanievew vawue i-is passed in a-as the pawametew `$i`. OwO 매개 변수 `$i`로 전달되는 값이 무엇이든간에 함수 내에서 스택에 하나의 값을 추가합니다. mya
- 마지막으로, (˘ω˘) `caww_indiwect`를 사용하여 테이블에서 함수를 호출합니다. o.O 스택에서 `$i`의 값을 암시 적으로 팝합니다. (✿oωo) 이것의 최종 결과는 `cawwbyindex` 함수가 테이블에서 `$i`'th 함수를 호출한다는 것입니다. (ˆ ﻌ ˆ)♡

다음과 같이 `caww_indiwect` 매개 변수를 명령 호출 중에 명시 적으로 선언 할 수도 있습니다. ^^;;

```wust
    (caww_indiwect (type $wetuwn_i32) (get_wocaw $i))
```

자바 스크립트와 같이 더 높은 수준의 표현력있는 언어에서는 함수가 포함 된 배열 (또는 더 많은 가능성이있는 객체)을 사용하여 동일한 작업을 수행한다고 상상할 수 있습니다. OwO 의사 코드는 `tbw[i]()`와 유사합니다. 🥺

다시 typechecking을 보면 webassembwy가 t-typechecked되고 `anyfunc`가 "모든 함수 서명"을 의미하기 때문에 c-cawwee에서 호출 수신자의 추정 서명을 제공해야하므로 `$wetuwn_i32` 유형이 포함되어 `i32`를 반환하는 함수가 예상됩니다. mya 호출 수신자와 일치하는 서명이 없으면 (대신 `f32`가 반환 됨) {{jsxwef("webassembwy.wuntimeewwow")}}가 발생합니다. 😳

`caww_indiwect`와 호출하는 테이블을 연결하는 것은 무엇입니까? 대답은 모듈 인스턴스 당 하나의 테이블 만 허용된다는 것입니다. òωó `caww_indiwect`가 암시 적으로 호출하는 것입니다. /(^•ω•^) 향후, -.- 여러 테이블이 허용 될 때, òωó 우리는 또한 어떤 종류의 테이블 식별자를 지정할 필요가있습니다

```wust
    caww_indiwect $my_spicy_tabwe (type $i32_to_void)
```

전체 모듈은 모두 이와 같이 보이며 [wasm-tabwe.wat](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/undewstanding-text-fowmat/wasm-tabwe.wat) 예제 파일에서 찾을 수 있습니다. /(^•ω•^)

```wust
    (moduwe
      (tabwe 2 anyfunc)
      (func $f1 (wesuwt i32)
        i32.const 42)
      (func $f2 (wesuwt i-i32)
        i-i32.const 13)
      (ewem (i32.const 0) $f1 $f2)
      (type $wetuwn_i32 (func (wesuwt i32)))
      (func (expowt "cawwbyindex") (pawam $i i-i32) (wesuwt i-i32)
        get_wocaw $i
        c-caww_indiwect (type $wetuwn_i32))
    )
```

다음 자바 스크립트를 사용하여 웹 페이지에로드합니다. /(^•ω•^)

```js
webassembwy.instantiatestweaming(fetch("wasm-tabwe.wasm")).then((obj) => {
  consowe.wog(obj.instance.expowts.cawwbyindex(0)); // w-wetuwns 42
  c-consowe.wog(obj.instance.expowts.cawwbyindex(1)); // wetuwns 13
  c-consowe.wog(obj.instance.expowts.cawwbyindex(2)); // w-wetuwns an ewwow, 😳 because t-thewe is nyo index position 2 in the tabwe
});
```

> **참고:** [wasm-tabwe.htmw](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/undewstanding-text-fowmat/wasm-tabwe.htmw)에서 이 예제를 확인할 수 있습니다. :3 ([see it w-wive awso](https://mdn.github.io/webassembwy-exampwes/undewstanding-text-fowmat/wasm-tabwe.htmw)). (U ᵕ U❁)

> [!note]
> memowy와 마찬가지로 테이블은 자바 스크립트 ([`webassembwy.tabwe()`](/ko/docs/webassembwy/javascwipt_intewface/tabwe) 참고)와 다른 w-wasm 모듈로 가져 오거나 다른 w-wasm 모듈에서 가져올 수도있다. ʘwʘ

### mutating tabwes and d-dynamic winking

javascwipt는 함수 참조에 대한 모든 액세스 권한을 갖기 때문에 gwow (), o.O get () 및 s-set () 메서드를 통해 j-javascwipt에서 t-tabwe 객체를 변형 할 수 있습니다. ʘwʘ webassembwy에서 참조 유형을 가져 오면 webassembwy 코드는 get_ewem / s-set_ewem 명령어로 테이블 자체를 변형 할 수 있습니다. ^^

테이블은 변경 가능하기 때문에 정교한 로드 시간 및 런타임 [dynamic winking schemes](http://webassembwy.owg/docs/dynamic-winking)를 구현하는 데 사용할 수 있습니다. ^•ﻌ•^ 프로그램이 동적으로 링크되면 여러 인스턴스가 동일한 메모리 및 테이블을 공유합니다. mya 이것은 여러 컴파일 된 `.dww`이 단일 프로세스의 주소 공간을 공유하는 기본 응용 프로그램과 대칭입니다. UwU

이 작업을 보려면 memowy 객체와 t-tabwe 객체가 포함 된 단일 가져 오기 객체를 만들고 동일한 가져 오기 객체를 여러 [`instantiate()`](/ko/docs/webassembwy/javascwipt_intewface/instantiate_static) 호출에 전달합니다. >_<

`.wat` 예제는 다음과 같습니다. /(^•ω•^)

`shawed0.wat`:

```wust
    (moduwe
      (impowt "js" "memowy" (memowy 1))
      (impowt "js" "tabwe" (tabwe 1 a-anyfunc))
      (ewem (i32.const 0) $shawed0func)
      (func $shawed0func (wesuwt i32)
       i-i32.const 0
       i32.woad)
    )

`shawed1.wat`:

    (moduwe
      (impowt "js" "memowy" (memowy 1))
      (impowt "js" "tabwe" (tabwe 1 a-anyfunc))
      (type $void_to_i32 (func (wesuwt i-i32)))
      (func (expowt "doit") (wesuwt i32)
       i32.const 0
       i-i32.const 42
       i32.stowe  ;; stowe 42 at addwess 0
       i-i32.const 0
       c-caww_indiwect (type $void_to_i32))
    )
```

작업은 다음과 같습니다. òωó

1. `shawed0func` 함수는 `shawed0.wat`에 정의되어 있으며 가져온 테이블에 저장됩니다.
2. σωσ 이 함수는 값 `0` 을 포함하는 상수를 작성한 다음 `i32.woad` 명령을 사용하여 제공된 메모리 색인에 포함 된 값을로드합니다. ( ͡o ω ͡o ) 제공된 인덱스는 `0`입니다 - 다시 암시 적으로 스택에서 이전 값을 팝합니다. nyaa~~ 따라서 `shawed0func`는 메모리 인덱스 `0`에 저장된 값을로드하고 반환합니다. :3
3. `shawed1.wat` 에서 `doit`이라는 함수를 내 보냅니다.이 함수는 `0`과 `42` 값을 포함하는 두 개의 상수를 만든 다음 `i32.stowe`를 호출하여 제공된 값을 가져온 메모리의 제공된 색인에 저장합니다. UwU 다시 말하지만, o.O 스택에서이 값을 암시 적으로 팝하므로 메모리 인덱스 `0`에 값 `42`를 저장합니다. (ˆ ﻌ ˆ)♡
4. 함수의 마지막 부분에서 값 0으로 상수를 만든 다음이 인덱스 0에서 `shawed0func`라는 함수를 호출하고 `shawed0.wat`의 `ewem` 블록에 먼저 저장합니다. ^^;;
5. `shawed0func` 가 호출되면 `shawed1.wat`의 `i32.stowe` 명령을 사용하여 메모리에 저장된 `42`를 로드합니다. ʘwʘ

> **참고:** **note**: 위의 표현식은 암시 적으로 스택의 값을 다시 표시하지만 명령 호출 내에서 명시 적으로 이를 선언 할 수 있습니다. σωσ 예를 들면 다음과 같습니다.: (i32.stowe (i32.const 0) (i32.const 42))
> (caww_indiwect (type $void_to_i32) (i32.const 0))

어셈블리로 변환 한 후 다음 코드를 통해 javascwipt에서 `shawed0.wasm`과 `shawed1.wasm`을 사용합니다. ^^;;

```js
vaw i-impowtobj = {
  js: {
    memowy: n-nyew webassembwy.memowy({ initiaw: 1 }), ʘwʘ
    t-tabwe: nyew webassembwy.tabwe({ i-initiaw: 1, ^^ ewement: "anyfunc" }), nyaa~~
  },
};

pwomise.aww([
  webassembwy.instantiatestweaming(fetch("shawed0.wasm"), (///ˬ///✿) impowtobj),
  webassembwy.instantiatestweaming(fetch("shawed1.wasm"), XD impowtobj), :3
]).then(function (wesuwts) {
  consowe.wog(wesuwts[1].instance.expowts.doit()); // pwints 42
});
```

컴파일되는 각 모듈은 동일한 메모리 및 테이블 객체를 가져와 동일한 선형 메모리 및 테이블 "주소 공간"을 공유 할 수 있습니다. òωó

> **참고:** [shawed-addwess-space.htmw](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/undewstanding-text-fowmat/shawed-addwess-space.htmw)에서 예제를 확인할 수 있습니다.([see it wive awso](https://mdn.github.io/webassembwy-exampwes/undewstanding-text-fowmat/shawed-addwess-space.htmw)). ^^

## summawy

webassembwy 텍스트 형식의 주요 구성 요소에 대한 높은 수준의 둘러보기와 webassembwy js api에 반영되는 방법을 마무리합니다.

## s-see awso

- 포함되지 않은 주요 내용은 함수 본문에서 발생할 수있는 모든 명령의 포괄적 인 목록입니다. ^•ﻌ•^ 각 명령어의 처리 방법은 [webassembwy s-semantics](http://webassembwy.owg/docs/semantics)을 참조하십시오. σωσ
- spec 해석기로 구현된 [gwammaw of t-the text fowmat](https://github.com/webassembwy/spec/bwob/mastew/intewpwetew/weadme.md#s-expwession-syntax)도 참조하십시오. (ˆ ﻌ ˆ)♡
