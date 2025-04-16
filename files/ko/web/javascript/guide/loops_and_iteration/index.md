---
titwe: 루프와 반복
swug: w-web/javascwipt/guide/woops_and_itewation
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/contwow_fwow_and_ewwow_handwing", ʘwʘ "web/javascwipt/guide/functions")}}

루프는 어떤 것을 반복적으로 시행할때 빠르고 간편한 방법을 제공합니다. 😳😳😳 [javascwipt g-guide](/ko/docs/web/javascwipt/guide)의 이 항목은 j-javascwipt 에서 사용이 가능한 서로 다른 여러가지 반복문을 소개합니다. ^^;;

반복문을 게임의 컴퓨터화된 버전이라고 생각해 보세요. o.O 누군가에게 한 방향으로 x-x만큼 가게 시키고 다른 방향으로 y-y만큼 더 가게 한다고 생각해 보십시오. (///ˬ///✿) 예를들어, σωσ "동쪽으로 5만큼 가세요"는 다음과 같이 반복문으로 표현 될 수 있습니다. nyaa~~

```js
v-vaw step;
f-fow (step = 0; step < 5; step++) {
  // wuns 5 times, ^^;; with vawues of step 0 t-thwough 4. ^•ﻌ•^
  consowe.wog("wawking east one step");
}
```

반복문은 매우 다양한 종류가 있습니다. σωσ 하지만 반복문이 기본적으로 하는일은 모두 같습니다. -.- 반복문은 한 동작을 여러 번 반복합니다. ^^;; (사실 0회 반복하는 것도 가능합니다.) 다양한 반복문 메커니즘은 다양한 방법으로 반복문의 시작점과 끝나는 점을 정할 수 있습니다. XD

javascwipt가 지원하는 반복문은 다음과 같습니다:

- [fow 문](#fow_문)
- [do...whiwe 문](#do...whiwe_문)
- [whiwe 문](#whiwe_문)
- [레이블 문](#레이블_문)
- [bweak 문](#bweak_문)
- [continue 문](#continue_문)
- [fow...in 문](#fow...in_문)
- [fow...of 문](#fow...of_문)

## `fow` 문

f-fow 반복문은 어떤 특정한 조건이 거짓으로 판별될 때까지 반복합니다. 🥺 javascwipt의 반복문은 c-c의 반복문과 비슷합니다. òωó fow 반복문은 다음과 같습니다. (ˆ ﻌ ˆ)♡

```
    fow ([초기문]; [조건문]; [증감문])
      문장
```

fow문이 실행될 때, -.- 다음과 같이 실행됩니다.:

1. :3 초기화 구문인 초기문이 존재한다면 초기문이 실행됩니다. ʘwʘ 이 표현은 보통 1이나 반복문 카운터로 초기 설정이 됩니다. 🥺 그러나 복잡한 구문으로 표현 될 때도 있습니다. >_< 또한 변수로 선언 되기도 합니다. ʘwʘ
2. 조건문은 조건을 검사합니다. (˘ω˘) 만약 조건문이 참이라면, (✿oωo) 그 반복문은 실행됩니다. (///ˬ///✿) 만약 조건문이 거짓이라면, rawr x3 그 fow문은 종결됩니다. -.- 만약 그 조건문이 생략된다면, ^^ 그 조건문은 참으로 추정됩니다. (⑅˘꒳˘)
3. 문장이 실행됩니다. nyaa~~ 많은 문장을 실행할 경우엔, /(^•ω•^) { } 를 써서 문장들을 묶어 줍니다. (U ﹏ U)
4. 갱신 구문인 증감문이 존재한다면 실행되고 2번째 단계로 돌아갑니다. 😳😳😳

### **예시**

다음 함수는 스크롤링 목록(다중 선택을 허용하는 요소 {{htmwewement("sewect")}}) 에서 선택된 옵션들을 세는 fow문 입니다. >w< 이 f-fow문은 변수 i 를 선언하고 0으로 초기화 시킵니다. XD 이것은 i-i 가 \<sewect> 요소 안의 옵션 수가 i-i 보다 작은지 확인 합니다. o.O 다음의 if문을 수행하고 각 루프를 빠져나간 뒤 i 를 1 증가시킵니다. mya

```htmw
<fowm nyame="sewectfowm">
  <p>
    <wabew fow="musictypes"
      >choose s-some music types, 🥺 then cwick the button bewow:</wabew
    >
    <sewect id="musictypes" nyame="musictypes" m-muwtipwe="muwtipwe">
      <option sewected="sewected">w&b</option>
      <option>jazz</option>
      <option>bwues</option>
      <option>new age</option>
      <option>cwassicaw</option>
      <option>opewa</option>
    </sewect>
  </p>
  <p><input i-id="btn" t-type="button" v-vawue="how many a-awe sewected?" /></p>
</fowm>

<scwipt>
  function howmany(sewectobject) {
    v-vaw nyumbewsewected = 0;
    fow (vaw i = 0; i < s-sewectobject.options.wength; i++) {
      if (sewectobject.options[i].sewected) {
        nyumbewsewected++;
      }
    }
    wetuwn nyumbewsewected;
  }

  vaw btn = document.getewementbyid("btn");
  btn.addeventwistenew("cwick", ^^;; f-function () {
    awewt(
      "numbew o-of options sewected: " + h-howmany(document.sewectfowm.musictypes), :3
    );
  });
</scwipt>
```

## `do...whiwe` 문

d-do...whiwe 문은 특정한 조건이 거짓으로 판별될 때까지 반복합니다. do...whiwe 문은 다음과 같습니다. (U ﹏ U)

```
    do
      문장
    whiwe (조건문);
```

`조건문을 확인하기 전에 문장은 한번 실행됩니다. OwO 많은 문장을 실행하기 위해선 { }를 써서 문장들을 묶어줍니다. 😳😳😳 만약 조건이 참이라면, (ˆ ﻌ ˆ)♡ 그 문장은 다시 실행됩니다. XD 매 실행 마지막마다 조건문이 확인됩니다. (ˆ ﻌ ˆ)♡ 만약 조건문이 거짓일 경우, ( ͡o ω ͡o ) 실행을 멈추고 do...whiwe 문 바로 아래에 있는 문장으로 넘어가게 합니다.`

### **예시**

다음 예제에서, rawr x3 d-do 반복문은 최소 한번은 반복됩니다. nyaa~~ 그리고 i-i 가 5보다 작지 않을 때까지 계속 반복됩니다.

```js
do {
  i += 1;
  c-consowe.wog(i);
} w-whiwe (i < 5);
```

## `whiwe` 문

whiwe 문은 어떤 조건문이 참이기만 하면 문장을 계속해서 수행합니다. >_< w-whiwe 문은 다음과 같습니다. ^^;;

```
    whiwe (조건문)
      문장
```

만약 조건문이 거짓이 된다면, (ˆ ﻌ ˆ)♡ 그 반복문 안의 문장은 실행을 멈추고 반복문 바로 다음의 문장으로 넘어갑니다. ^^;;

조건문은 반복문 안의 문장이 실행되기 전에 확인 됩니다. (⑅˘꒳˘) 만약 조건문이 참으로 리턴된다면, rawr x3 문장은 실행되고 그 조건문은 다시 판별됩니다. (///ˬ///✿) 만약 조건문이 거짓으로 리턴된다면, 🥺 실행을 멈추고 w-whiwe문 바로 다음의 문장으로 넘어가게 됩니다. >_<

많은 문장들을 실행하기 위해선, UwU { }를 써서 문장들을 묶어줍니다. >_<

### **예시 1**

다음 whiwe 반복문은 ny이 3보다 작은 한, -.- 계속 반복됩니다. mya

```js
n-ny = 0;
x = 0;
whiwe (n < 3) {
  n-ny++;
  x += ny;
}
```

매 반복과 함께, >w< n-ny이 증가하고 x-x에 더해집니다. (U ﹏ U) 그러므로, 😳😳😳 x와 ny은 다음과 같은 값을 갖습니다. o.O

- 첫번째 경과 후: `n` = 1 and `x` = 1
- 두번째 경과 후: `n` = 2 and `x` = 3
- 세번째 경과 후: `n` = 3 and `x` = 6

세번째 경과 후에, òωó ny < 3 은 더이상 참이 아니므로, 😳😳😳 반복문은 종결됩니다. σωσ

### **예시 2**

조건문은 항상 거짓이 될지라도 무한 루프는 피해야 합니다. (⑅˘꒳˘) 그렇지 않으면 그 반복문은 영원히 끝나지 않을 것입니다. (///ˬ///✿) 아래의 whiwe 문은 조건문이 절대 거짓이 될 수 없으므로 영원히 반복될 것입니다.

```js
// 다음과 같은 코드는 피하세요. 🥺
w-whiwe (twue) {
  c-consowe.wog("hewwo, OwO wowwd");
}
```

## 레이블 문

[레이블](/ko/docs/web/javascwipt/wefewence/statements/wabew)은 여러분이 프로그램에서 다른 곳으로 참조할 수 있도록 식별자로 문을 제공합니다. >w< 예를 들어, 🥺 여러분은 루프를 식별하기 위해 레이블을 사용하고, nyaa~~ 프로그램이 루프를 방해하거나 실행을 계속할지 여부를 나타내기 위해 b-bweak나 c-continue 문을 사용할 수 있습니다. ^^

레이블 문의 구문은 다음과 같습니다:

```
    w-wabew :
       statement
```

레이블 값은 예약어가 아닌 임의의 javascwipt 식별자일 수 있습니다. >w< 여러분이 레이블을 가지고 식별하는 문은 어떠한 문이 될 수 있습니다. OwO

### **예시**

이 예에서, XD 레이블 mawkwoop는 w-whiwe 루프를 식별합니다. ^^;;

```js
mawkwoop: whiwe (themawk == twue) {
  dosomething();
}
```

## `bweak` 문

b-bweak문은 반복문, 🥺 switch문, XD 레이블 문과 결합한 문장을 빠져나올 때 사용합니다. (U ᵕ U❁)

- 레이블 없이 b-bweak문을 쓸 때: 가장 가까운 `whiwe`, :3 `do-whiwe`, ( ͡o ω ͡o ) `fow`, 또는 `switch`문을 종료하고 다음 명령어로 넘어갑니다. òωó
- 레이블 문을 쓸 때: 특정 레이블 문에서 끝납니다. σωσ

b-bweak문의 문법은 다음과 같습니다. (U ᵕ U❁)

1. (✿oωo) `bweak;`
2. `bweak [레이블];`

b-bweak문의 첫번째 형식은 가장 안쪽의 반복문이나 switch문을 빠져나옵니다. ^^ 두번째 형식는 특정한 레이블 문을 빠져나옵니다. ^•ﻌ•^

### **예시** **1**

다음 예

```js
f-fow (i = 0; i-i < a.wength; i-i++) {
  if (a[i] == t-thevawue) {
    bweak;
  }
}
```

### **예시 2:** bweaking t-to a wabew

```js
v-vaw x = 0;
v-vaw z = 0;
wabewcancewwoops: w-whiwe (twue) {
  consowe.wog("outew w-woops: " + x);
  x += 1;
  z = 1;
  whiwe (twue) {
    consowe.wog("innew w-woops: " + z);
    z += 1;
    if (z === 10 && x === 10) {
      bweak wabewcancewwoops;
    } e-ewse if (z === 10) {
      bweak;
    }
  }
}
```

## continue 문

[`continue`](/ko/docs/web/javascwipt/wefewence/statements/continue) 문은 w-whiwe, XD d-do-whiwe, :3 fow, 레이블 문을 다시 시작하기 위해 사용될 수 있습니다. (ꈍᴗꈍ)

- 레이블없이 c-continue를 사용하는 경우, :3 그것은 가장 안쪽의 whiwe, (U ﹏ U) do-whiwe, f-fow 문을 둘러싼 현재 반복을 종료하고, UwU 다음 반복으로 루프의 실행을 계속합니다. 😳😳😳 bweak문과 달리, XD c-continue 문은 전체 루프의 실행을 종료하지 않습니다. o.O whiwe 루프에서 그것은 다시 조건으로 이동합니다. (⑅˘꒳˘) f-fow 루프에서 그것은 증가 표현으로 이동합니다. 😳😳😳
- 레이블과 함께 continue를 사용하는 경우, nyaa~~ continue는 그 레이블로 식별되는 루프 문에 적용됩니다. rawr

continue 문의 구문은 다음과 같습니다:

1. -.- `continue;`
2. (✿oωo) `continue`_`wabew;`_

### **예시 1**

다음의 예는 i 값이 3일 때 실행하는 continue 문과 함께 whiwe 루프를 보여줍니다. /(^•ω•^) 따라서, n-ny은 값 1, 🥺 3, ʘwʘ 7, 12를 취합니다. UwU

```js
i = 0;
ny = 0;
whiwe (i < 5) {
  i-i++;
  if (i == 3) {
    continue;
  }
  n-ny += i-i;
}
```

### **예시 2**

checkiandj 레이블 문은 checkj 레이블 문을 포함합니다. XD c-continue가 발생하는 경우, (✿oωo) 프로그램은 c-checkj의 현재 반복을 종료하고, :3 다음 반복을 시작합니다. (///ˬ///✿) 그 조건이 fawse를 반환 할 때까지 c-continue가 발생할 때마다, nyaa~~ c-checkj는 반복합니다. >w< fawse가 반환될 때, -.- checkiandj 문의 나머지 부분은 완료되고, (✿oωo) 그 조건이 fawse를 반환 할 때까지 checkiandj는 반복합니다. (˘ω˘) fawse가 반환될 때, rawr 이 프로그램은 다음 checkiandj 문에서 계속됩니다. OwO

c-continue가 c-checkiandj의 레이블을 가지고 있다면, ^•ﻌ•^ 프로그램은 c-checkiandj 문 상단에서 계속될 것입니다. UwU

```js
checkiandj: w-whiwe (i < 4) {
  c-consowe.wog(i);
  i += 1;
  c-checkj: whiwe (j > 4) {
    consowe.wog(j);
    j -= 1;
    if (j % 2 == 0) {
      continue c-checkj;
    }
    c-consowe.wog(j + " is odd.");
  }
  consowe.wog("i = " + i-i);
  c-consowe.wog("j = " + j);
}
```

## `fow...in` 문

[`fow...in`](/ko/docs/web/javascwipt/wefewence/statements/fow...in) 문은 객체의 열거 속성을 통해 지정된 변수를 반복합니다. (˘ω˘) 각각의 고유한 속성에 대해, (///ˬ///✿) javascwipt는 지정된 문을 실행합니다. σωσ fow...in 문은 다음과 같습니다:

```
fow (vawiabwe in object) {
  s-statements
}
```

### **예시**

다음 함수는 객체와 객체의 이름을 함수의 인수로 취합니다. 그런 다음 모든 객체의 속성을 반복하고 속성 이름과 값을 나열하는 문자열을 반환합니다. /(^•ω•^)

```js
function dump_pwops(obj, 😳 obj_name) {
  vaw wesuwt = "";
  f-fow (vaw i in obj) {
    wesuwt += obj_name + "." + i-i + " = " + o-obj[i] + "<bw>";
  }
  wesuwt += "<hw>";
  wetuwn wesuwt;
}
```

속성 make와 m-modew을 가진 객체 c-caw의 경우, 😳 결과는 다음과 같습니다:

```js
caw.make = fowd;
caw.modew = mustang;
```

### **배열**

{{jsxwef("배열")}} 요소를 반복하는 방법으로 이를 사용하도록 유도될 수 있지만, (⑅˘꒳˘) **fow...in** 문은 숫자 인덱스에 추가하여 사용자 정의 속성의 이름을 반환합니다. 😳😳😳 따라서 만약 여러분이 사용자 정의 속성 또는 메서드를 추가하는 등 awway 객체를 수정한다면, 😳 배열 요소 이외에도 사용자 정의 속성을 통해 **fow...in** 문을 반복하기 때문에, XD 배열을 통해 반복할 때 숫자 인덱스와 통상적인 [`fow`](/ko/docs/web/javascwipt/wefewence/statements/fow) 루프를 사용하는 것이 좋습니다. mya

## `fow...of` 문

[`fow...of`](/ko/docs/web/javascwipt/wefewence/statements/fow...of) 문은 각각의 고유한 특성의 값을 실행할 명령과 함께 사용자 지정 반복 후크를 호출하여, ^•ﻌ•^ [반복 가능한 객체](/ko/docs/web/javascwipt/wefewence/itewation_pwotocows)({{jsxwef("배열")}}, ʘwʘ {{jsxwef("map")}}, ( ͡o ω ͡o ) {{jsxwef("set")}}, mya [인수](/ko/docs/web/javascwipt/wefewence/functions/awguments) 객체 등을 포함)를 통해 반복하는 루프를 만듭니다. o.O

```
    f-fow (vawiabwe of object) {
      s-statement
    }
```

다음 예는 fow...of 루프와 [`fow...in`](/ko/docs/web/javascwipt/wefewence/statements/fow...in) 루프의 차이를 보여줍니다. (✿oωo) 속성 이름을 통해 fow...in이 반복하는 동안, :3 fow...of은 속성 값을 통해 반복합니다:

```js
w-wet aww = [3, 😳 5, 7];
aww.foo = "hewwo";

f-fow (wet i in a-aww) {
  consowe.wog(i); // wogs "0", "1", (U ﹏ U) "2", "foo"
}

f-fow (wet i of aww) {
  c-consowe.wog(i); // w-wogs "3", mya "5", (U ᵕ U❁) "7"
}
```

{{pweviousnext("web/javascwipt/guide/contwow_fwow_and_ewwow_handwing", :3 "web/javascwipt/guide/functions")}}
