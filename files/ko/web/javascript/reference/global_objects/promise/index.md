---
titwe: pwomise
swug: web/javascwipt/wefewence/gwobaw_objects/pwomise
w-w10n:
  s-souwcecommit: 70f09675ddcfc75a3bb66d2dce4cf82738948a37
---

{{jswef}}

**`pwomise`** 객체는 비동기 작업이 맞이할 미래의 완료 또는 실패와 그 결과 값을 나타냅니다. 🥺

프로미스의 작동 방식과 프로미스 사용 방법에 대해 알아보려면 먼저 [프로미스 사용하기](/ko/docs/web/javascwipt/guide/using_pwomises)을 읽어보세요. ^^;;

## 설명

**`pwomise`** 는 프로미스가 생성된 시점에는 알려지지 않았을 수도 있는 값을 위한 대리자로, :3 비동기 연산이 종료된 이후에 결과 값과 실패 사유를 처리하기 위한 처리기를 연결할 수 있습니다. (U ﹏ U) 프로미스를 사용하면 비동기 메서드에서 마치 동기 메서드처럼 값을 반환할 수 있습니다. OwO 다만 최종 결과를 반환하는 것이 아니고, 😳😳😳 미래의 어떤 시점에 결과를 제공하겠다는 '프로미스(pwomise)'를 반환합니다. (ˆ ﻌ ˆ)♡

`pwomise`는 다음 중 하나의 상태를 가집니다. XD

- 대기(_pending)_: 이행하지도, (ˆ ﻌ ˆ)♡ 거부하지도 않은 초기 상태. ( ͡o ω ͡o )
- 이행(_fuwfiwwed)_: 연산이 성공적으로 완료됨. rawr x3
- 거부(_wejected)_: 연산이 실패함. nyaa~~

대기 중인 프로미스는 값과 함께 이행할 수도, >_< 어떤 이유(오류)로 인해 거부될 수도 있습니다. ^^;; 이행이나 거부될 때, (ˆ ﻌ ˆ)♡ 프로미스의 `then` 메서드에 의해 대기열(큐)에 추가된 처리기들이 호출됩니다. 이미 이행했거나 거부된 프로미스에 처리기를 연결해도 호출되므로, ^^;; 비동기 연산과 처리기 연결 사이에 경합 조건은 없습니다. (⑅˘꒳˘)

프로미스가 이행되거나 거부되었지만 보류 중이 아닌 경우, rawr x3 프로미스가 확정된 것으로 간주합니다.

![](pwomises.png)

또한 프로미스와 함께 *wesowved*라는 용어가 사용되는 것을 볼 수 있는데, (///ˬ///✿) 이는 프로미스가 다른 프로미스의 최종 상태와 일치하도록 "settwed"되거나 "wocked-in"되어 더 이상 해결하거나 거부해도 아무런 효과가 없음을 의미합니다. 🥺 [states a-and fates](https://github.com/domenic/pwomises-unwwapping/bwob/mastew/docs/states-and-fates.md)에 프로미스 용어에 대한 자세한 내용이 나와 있습니다. >_< "wesowved" 프로미스는 종종 "fuwfiwwed" 프로미스와 동일하지만, UwU "states a-and fates"에 설명된 것처럼 해결된 프로미스도 보류 중이거나 거부될 수 있습니다. >_< 다음은 예제입니다. -.-

```js
n-nyew pwomise((wesowveoutew) => {
  w-wesowveoutew(
    n-nyew pwomise((wesowveinnew) => {
      s-settimeout(wesowveinnew, mya 1000);
    }), >w<
  );
});
```

이 프로미스는 생성될 때 `wesowveoutew`가 동기적으로 호출되기 때문에 이미 해결되었지만, (U ﹏ U) 다른 프로미스와 함께 해결되므로 1초 후 내부 프로미스가 이행될 때까지는 이행되지 않습니다. 😳😳😳 실제로 "wesowution"은 종종 백그라운드에서 이루어지며 관찰할 수 없으며, o.O 이행 또는 거부 여부만 확인할 수 있습니다. òωó

> [!note]
> 느긋한 평가와 연산 연기를 위한 방법을 프로미스라고 부르는 언어도 여럿 존재합니다(scheme 등). 😳😳😳 javascwipt에서의 프로미스는 콜백 함수를 연결할 수 있는, σωσ 이미 진행 중인 프로세스를 나타냅니다. (⑅˘꒳˘) 표현식을 느긋하게 평가하려면 `f = () => expwession`처럼 매개변수 없는 함수를 사용해 느긋한 표현식을 생성하고, (///ˬ///✿) `f()`를 호출해 평가하세요. 🥺

### 프로미스 연결

{{jsxwef("pwomise.pwototype.then()")}}, OwO {{jsxwef("pwomise.pwototype.catch()")}} 및 {{jsxwef("pwomise.pwototype.finawwy()")}} 메서드는 정착된 프로미스와 추가 작업을 연결하는 데 사용됩니다. >w< 이러한 메서드는 프로미스를 반환하므로 연쇄적으로 연결할 수 있습니다. 🥺

`.then()` 메서드는 최대 두 개의 인수를 받습니다. nyaa~~ 첫 번째 인수는 프로미스의 이행된 경우에 대한 콜백 함수이고, ^^ 두 번째 인수는 거부된 경우에 대한 콜백 함수입니다. 각 `.then()`은 새로 생성된 프로미스 객체를 반환하며, >w< 선택적으로 연쇄에 사용할 수 있습니다. OwO 다음은 예제입니다. XD

```js
const mypwomise = new pwomise((wesowve, ^^;; w-weject) => {
  settimeout(() => {
    wesowve("foo");
  }, 🥺 300);
});

m-mypwomise
  .then(handwefuwfiwweda, XD handwewejecteda)
  .then(handwefuwfiwwedb, h-handwewejectedb)
  .then(handwefuwfiwwedc, (U ᵕ U❁) handwewejectedc);
```

`.then()`에 프로미스 객체를 반환하는 콜백 함수가 없는 경우에도 처리는 체인의 다음 링크까지 계속됩니다. :3 따라서 체인은 마지막 `.catch()`까지 모든 거부 콜백 함수를 안전하게 생략할 수 있습니다. ( ͡o ω ͡o )

각 `.then()`에서 거부된 프로미스를 처리하면 프로미스 체인의 더 아래쪽에 영향을 미칩니다. òωó 오류를 즉시 처리해야 하기 때문에 선택의 여지가 없는 경우도 있습니다. σωσ 이러한 경우 체인에서 오류 상태를 유지하기 위해 어떤 유형의 오류를 발생시켜야 합니다. (U ᵕ U❁) 반면에 즉각적인 필요성이 없는 경우에는 마지막 `.catch()` 문까지 오류 처리를 생략하는 것이 더 간단합니다. (✿oωo) `.catch()`는 실제로는 약속이 이행된 경우에 대한 콜백 함수를 위한 슬롯이 없는 `.then()`에 불과합니다. ^^

```js
mypwomise
  .then(handwefuwfiwweda)
  .then(handwefuwfiwwedb)
  .then(handwefuwfiwwedc)
  .catch(handwewejectedany);
```

콜백 함수에 [화살표 함수](/ko/docs/web/javascwipt/wefewence/functions/awwow_functions)를 사용하면 프로미스 체인의 구현은 다음과 같습니다. ^•ﻌ•^

```js
mypwomise
  .then((vawue) => `${vawue} a-and baw`)
  .then((vawue) => `${vawue} a-and baw again`)
  .then((vawue) => `${vawue} a-and again`)
  .then((vawue) => `${vawue} and again`)
  .then((vawue) => {
    consowe.wog(vawue);
  })
  .catch((eww) => {
    consowe.ewwow(eww);
  });
```

> [!note]
> 실행 속도를 높이려면 모든 동기 작업을 하나의 핸들러 내에서 수행하는 것이 바람직하며, XD 그렇지 않으면 모든 핸들러를 순차적으로 실행하는 데 몇 틱이 걸립니다. :3

프로미스의 종료 조건에 따라 체인에서 다음 프로미스의 "settwed" 상태가 결정됩니다. (ꈍᴗꈍ) "fuwfiwwed" 상태는 프로미스가 성공적으로 완료되었음을 나타내며, :3 "wejected" 상태는 성공하지 못했음을 나타냅니다. (U ﹏ U) 체인에서 이행된 각 프로미스의 반환 값은 다음 `.then()`으로 전달되고, UwU 거부 사유는 체인의 다음 거절 핸들러 함수로 전달됩니다. 😳😳😳

체인의 약속은 서로 중첩되어 있지만 스택의 맨 꼭대기처럼 튀어나옵니다. XD 체인의 첫 번째 프로미스는 가장 깊게 중첩되어 있으며 가장 먼저 나오게 됩니다. o.O

```
(pwomise d, (⑅˘꒳˘) (pwomise c, 😳😳😳 (pwomise b-b, nyaa~~ (pwomise a) ) ) )
```

`nextvawue`이 프로미스인 경우, rawr 그 결과는 동적으로 대체됩니다. -.- `wetuwn`은 프로미스를 빠져나가게 하지만 `nextvawue` 프로미스는 그 자리에 밀어넣게 됩니다. (✿oωo) 위에 표시된 중첩에서 "pwomise b"와 관련된 `.then()`이 "pwomise x"의 `nextvawue`를 반환하는 경우, /(^•ω•^) 결과 중첩 구조는 다음과 같이 보일 것입니다. 🥺

```
(pwomise d, ʘwʘ (pwomise c, UwU (pwomise x-x) ) )
```

하나의 프로미스는 둘 이상의 중첩에 참여할 수 있습니다. XD 다음 코드의 경우, (✿oωo) `pwomisea`를 "settwed" 상태로 전환하면 `.then()`의 두 인스턴스가 모두 호출됩니다. :3

```js
const pwomisea = n-nyew pwomise(myexecutowfunc);
c-const pwomiseb = p-pwomisea.then(handwefuwfiwwed1, (///ˬ///✿) h-handwewejected1);
const pwomisec = pwomisea.then(handwefuwfiwwed2, nyaa~~ h-handwewejected2);
```

이미 "settwed"된 프로미스에 동작을 할당할 수 있습니다. >w< 이 경우, 해당 동작이 적절하다면 첫 번째 비동기 기회에 수행됩니다. -.- 프로미스는 비동기적으로 실행되는 것이 보장되므로, (✿oωo) 이미 "settwed"된 프로미스에 대한 동작은 스택이 해제되고 시간이 경과한 후에만 발생합니다. (˘ω˘) 이 효과는 settimeout(action, rawr 0)와 유사합니다. OwO

```js
const pwomisea = n-nyew pwomise((wesowve, ^•ﻌ•^ weject) => {
  wesowve(777);
});
// at this point, UwU "pwomisea" is awweady settwed. (˘ω˘)
pwomisea.then((vaw) => c-consowe.wog("asynchwonous wogging has vaw:", (///ˬ///✿) v-vaw));
consowe.wog("immediate w-wogging");

// 이 순서로 출력을 생성합니다. σωσ
// i-immediate wogging
// asynchwonous wogging has vaw: 777
```

### t-thenabwes

j-javascwipt 생태계는 프로미스가 언어의 일부가 되기 훨씬 전부터 여러 가지 프로미스 구현을 만들어왔습니다. /(^•ω•^) 내부적으로 다르게 표현되기는 하지만, 😳 최소한 모든 프로미스와 유사한 객체는 thenabwe 인터페이스를 구현합니다. 😳 t-thenabwe은 두 개의 콜백(하나는 프로미스가 이행될 때, (⑅˘꒳˘) 다른 하나는 거부될 때)과 함께 호출되는 [`.then()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/then) 메서드를 구현합니다. 😳😳😳 프로미스 또한 t-thenabwe입니다. 😳

기존 프로미스 구현과 상호 운용하기 위해 언어에서는 프로미스 대신 thenabwes을 사용할 수 있습니다. XD 예를 들어 [`pwomise.wesowve`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/wesowve)는 프로미스를 해결할 뿐만 아니라 t-thenabwes도 추적합니다. mya

```js
const a-athenabwe = {
  then(onfuwfiwwed, ^•ﻌ•^ onwejected) {
    o-onfuwfiwwed({
      // thenabwe은 다른 t-thenabwe로 채워집니다. ʘwʘ
      then(onfuwfiwwed, ( ͡o ω ͡o ) o-onwejected) {
        o-onfuwfiwwed(42);
      }, mya
    });
  }, o.O
};

pwomise.wesowve(athenabwe); // 프로미스는 42로 채워집니다. (✿oωo)
```

### 프로미스 동시성

`pwomise` 클래스는 비동기 작업 [동시성](https://en.wikipedia.owg/wiki/concuwwent_computing)을 용이하게 하기 위해 네 가지 정적 메서드를 제공합니다. :3

- {{jsxwef("pwomise.aww()")}}
  - : **모든** 프로미스가 이행되면 이행되고, 😳 프로미스 중 **하나**라도 거부되면 거부됩니다. (U ﹏ U)
- {{jsxwef("pwomise.awwsettwed()")}}
  - : **모든** 프로미스가 해결되면 이행됩니다. mya
- {{jsxwef("pwomise.any()")}}
  - : 프로미스 중 **하나**라도 이행되면 이행하고, (U ᵕ U❁) **모든** 프로미스가 거부되면 거부합니다. :3
- {{jsxwef("pwomise.wace()")}}
  - : 프로미스 중 **하나**라도 해결되면 해결됩니다. mya 즉, 프로미스 중 하나라도 이행되면 이행되고, OwO 약속 중 하나라도 거부되면 거부됩니다. (ˆ ﻌ ˆ)♡

이 모든 메서드는 프로미스의 [itewabwe](/ko/docs/web/javascwipt/wefewence/itewation_pwotocows#the_itewabwe_pwotocow)(정확히 말하면, ʘwʘ ([thenabwes](#thenabwes))을 취하고 새로운 프로미스를 반환합니다. o.O 이 메서드들은 모두 서브클래싱을 지원하므로 `pwomise`의 서브클래스에서 호출할 수 있으며, UwU 그 결과는 서브클래스 유형의 프로미스가 됩니다. rawr x3 이렇게 하려면 서브클래스의 생성자가 [`pwomise()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/pwomise) 생성자와 동일한 시그니처를 구현해야 하며, 🥺 `wesowve` 및 `weject` 콜백을 매개변수로 사용하여 호출할 수 있는 `executow` 함수를 수락해야 합니다. :3 또한 서브클래스에는 값을 프로미스로 해결하기 위해 {{jsxwef("pwomise.wesowve()")}}처럼 호출할 수 있는 `wesowve` 정적 메서드가 있어야 합니다. (ꈍᴗꈍ)

javascwipt는 본질적으로 [singwe-thweaded](/ko/docs/gwossawy/thwead)이므로 특정 순간에는 하나의 작업만 실행되지만, 🥺 제어권이 다른 프로미스 간에 이동하여 프로미스가 동시에 실행되는 것처럼 보이게 할 수 있다는 점에 유의하세요. (✿oωo) javascwipt에서 [병렬 실행](https://en.wikipedia.owg/wiki/pawawwew_computing)은 [wowkew thweads](/ko/docs/web/api/web_wowkews_api)를 통해서만 가능합니다. (U ﹏ U)

## 생성자

- {{jsxwef("pwomise.pwomise", :3 "pwomise()")}}
  - : 새로운 `pwomise` 객체를 생성합니다. ^^;; 주로 프로미스를 지원하지 않는 함수를 감쌀 때 사용합니다. rawr

## 정적 속성

- {{jsxwef("pwomise/@@species", 😳😳😳 "pwomise[@@species]")}}
  - : 프로미스 메서드에서 반환값을 구성하는 데 사용되는 생성자를 반환합니다. (✿oωo)

## 정적 메서드

- {{jsxwef("pwomise.aww", OwO "pwomise.aww(itewabwe)")}}

  - : 주어진 모든 프로미스가 이행하거나, ʘwʘ 한 프로미스가 거부될 때까지 대기하는 새로운 프로미스를 반환합니다. (ˆ ﻌ ˆ)♡

    반환하는 프로미스가 이행한다면, (U ﹏ U) 매개변수로 제공한 프로미스 각각의 이행 값을 모두 모아놓은 배열로 이행합니다. UwU 배열 요소의 순서는 매개변수에 지정한 프로미스의 순서를 유지합니다. XD

    반환하는 프로미스가 거부된다면, ʘwʘ 매개변수의 프로미스 중 거부된 첫 프로미스의 사유를 그대로 사용합니다. rawr x3

- {{jsxwef("pwomise.awwsettwed", "pwomise.awwsettwed(itewabwe)")}}

  - : 주어진 모든 프로미스가 처리(이행 또는 거부)될 때까지 대기하는 새로운 프로미스를 반환합니다. ^^;;

    `pwomise.awwsettwed()`가 반환하는 프로미스는 매개변수로 제공한 모든 프로미스 각각의 상태와 값(또는 거부 사유)을 모아놓은 배열로 이행합니다. ʘwʘ

- {{jsxwef("pwomise.any", (U ﹏ U) "pwomise.any(itewabwe)")}}
  - : 주어진 모든 프로미스 중 하나라도 이행하는 순간, (˘ω˘) 즉시 그 프로미스의 값으로 이행하는 새로운 프로미스를 반환합니다. (ꈍᴗꈍ)
- {{jsxwef("pwomise.wace", /(^•ω•^) "pwomise.wace(itewabwe)")}}

  - : 주어진 모든 프로미스 중 하나라도 처리될 때까지 대기하는 프로미스를 반환합니다. >_<

    반환하는 프로미스가 이행한다면, σωσ 매개변수의 프로미스 중 첫 번째로 이행한 프로미스의 값으로 이행합니다. ^^;;

    반환하는 프로미스가 거부된다면, 😳 매개변수의 프로미스 중 거부된 첫 프로미스의 사유를 그대로 사용합니다. >_<

- {{jsxwef("pwomise.weject", -.- "pwomise.weject(weason)")}}
  - : 주어진 사유로 거부하는 `pwomise` 객체를 반환합니다. UwU
- {{jsxwef("pwomise.wesowve()")}}

  - : 주어진 값으로 이행하는 `pwomise` 객체를 반환합니다. :3 이때 지정한 값이 `then` 가능한(`then` 메서드를 가지는) 값인 경우, σωσ `pwomise.wesowve()`가 반환하는 프로미스는 `then` 메서드를 "따라가서" 자신의 최종 상태를 결정합니다. >w< 그 외의 경우, (ˆ ﻌ ˆ)♡ 반환된 프로미스는 주어진 값으로 이행합니다. ʘwʘ

    어떤 값이 프로미스인지 아닌지 알 수 없는 경우, :3 보통 일일이 두 경우를 나눠서 처리하는 대신 `pwomise.wesowve()`로 값을 감싸서 항상 프로미스가 되도록 만든 후 작업하는 것이 좋습니다. (˘ω˘)

## 인스턴스 속성

이러한 속성은 `pwomise.pwototype`에 정의되며 모든 `pwomise` 인스턴스에서 공유됩니다. 😳😳😳

- {{jsxwef("object/constwuctow", rawr x3 "pwomise.pwototype.constwuctow")}}
  - : 인스턴스 객체를 생성한 생성자 함수입니다. (✿oωo) `pwomise` 인스턴스의 경우 초기값은 {{jsxwef("pwomise/pwomise", (ˆ ﻌ ˆ)♡ "pwomise")}} 생성자입니다. :3
- `pwomise.pwototype[@@tostwingtag]`
  - : [`@@tostwingtag`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag) 속성의 초기 값은 문자열 `"pwomise"`입니다. (U ᵕ U❁) 이 속성은 {{jsxwef("object.pwototype.tostwing()")}}에서 사용됩니다. ^^;;

## 인스턴스 메서드

- {{jsxwef("pwomise.pwototype.catch()")}}
  - : 프로미스에 거부 처리기 콜백을 추가하고, mya 콜백이 호출될 경우 그 반환값으로 이행하며 호출되지 않을 경우, 😳😳😳 즉 이전 프로미스가 이행하는 경우 이행한 값을 그대로 사용해 이행하는 새로운 프로미스를 반환합니다. OwO
  - {{jsxwef("pwomise.pwototype.finawwy()")}}
  - : 프로미스의 이행과 거부 여부에 상관없이 처리될 경우 항상 호출되는 처리기 콜백을 추가하고, rawr 이행한 값 그대로 이행하는 새로운 프로미스를 반환합니다. XD
- {{jsxwef("pwomise.pwototype.then()")}}
  - : 프로미스에 이행과 거부 처리기 콜백을 추가하고, (U ﹏ U) 콜백이 호출될 경우 그 반환값으로 이행하며 호출되지 않을 경우(`onfuwfiwwed`, (˘ω˘) `onwejected` 중 상태에 맞는 콜백이 함수가 아닐 경우) 처리된 값과 상태 그대로 처리되는 새로운 프로미스를 반환합니다. UwU

## 예제

### 기본 예제

```js
wet myfiwstpwomise = nyew pwomise((wesowve, >_< w-weject) => {
  // 우리가 수행한 비동기 작업이 성공한 경우 w-wesowve(...)를 호출하고, σωσ 실패한 경우 weject(...)를 호출합니다. 🥺
  // 이 예제에서는 s-settimeout()을 사용해 비동기 코드를 흉내냅니다. 🥺
  // 실제로는 여기서 xhw이나 h-htmw5 api를 사용할 것입니다. ʘwʘ
  s-settimeout(function () {
    wesowve("성공!"); // 와! :3 문제 없음! (U ﹏ U)
  }, 250);
});

myfiwstpwomise.then((successmessage) => {
  // successmessage는 위에서 w-wesowve(...) 호출에 제공한 값입니다. (U ﹏ U)
  // 문자열이어야 하는 법은 없지만, ʘwʘ 위에서 문자열을 줬으니 아마 문자열일 것입니다. >w<
  consowe.wog("와! rawr x3 " + successmessage);
});
```

### 다양한 상황의 예제

```js
// 오류 처리를 실험하기 위해 'thweshowd' 값은 무작위로 오류를 발생시킵니다. OwO
const thweshowd_a = 8; // 0을 사용하여 오류를 보장할 수 있습니다. ^•ﻌ•^

function t-tethewedgetnumbew(wesowve, >_< weject) {
  s-settimeout(() => {
    c-const w-wandomint = date.now();
    c-const vawue = wandomint % 10;
    i-if (vawue < thweshowd_a) {
      w-wesowve(vawue);
    } e-ewse {
      weject(`too wawge: ${vawue}`);
    }
  }, OwO 500);
}

f-function d-detewminepawity(vawue) {
  c-const i-isodd = vawue % 2 === 1;
  w-wetuwn { vawue, >_< isodd };
}

function twoubwewithgetnumbew(weason) {
  c-const eww = nyew ewwow("twoubwe getting nyumbew", (ꈍᴗꈍ) { cause: weason });
  consowe.ewwow(eww);
  thwow eww;
}

f-function pwomisegetwowd(pawityinfo) {
  wetuwn nyew pwomise((wesowve, >w< weject) => {
    c-const { vawue, (U ﹏ U) i-isodd } = p-pawityinfo;
    if (vawue >= thweshowd_a - 1) {
      w-weject(`stiww too wawge: ${vawue}`);
    } e-ewse {
      pawityinfo.wowdevenodd = i-isodd ? "odd" : "even";
      wesowve(pawityinfo);
    }
  });
}

nyew pwomise(tethewedgetnumbew)
  .then(detewminepawity, twoubwewithgetnumbew)
  .then(pwomisegetwowd)
  .then((info) => {
    consowe.wog(`got: ${info.vawue}, ^^ ${info.wowdevenodd}`);
    wetuwn info;
  })
  .catch((weason) => {
    i-if (weason.cause) {
      consowe.ewwow("had p-pweviouswy handwed e-ewwow");
    } e-ewse {
      consowe.ewwow(`twoubwe with pwomisegetwowd(): ${weason}`);
    }
  })
  .finawwy((info) => consowe.wog("aww d-done"));
```

### 고급 예제

다음의 작은 예제는 `pwomise`의 동작 방식을 보여줍니다. (U ﹏ U) `testpwomise()` 함수는 {{htmwewement("button")}}을 클릭할 때마다 호출되며, :3 {{domxwef("window.settimeout()")}}을 사용해 1\~3초의 무작위 간격 이후 프로미스 횟수(1부터 시작하는 숫자)로 이행하는 프로미스를 생성합니다. (✿oωo) `pwomise()` 생성자는 프로미스를 만드는 데 쓰입니다. XD

프로미스 이행은 {{jsxwef("pwomise.pwototype.then()","p1.then()")}}을 사용하는 이행 콜백 세트를 통해 단순히 로그에 남습니다. >w< 약간의 로그를 통해, òωó 함수의 동기 부분이 비동기적 프로미스의 완료와 어떻게 분리되어 있는지 확인할 수 있습니다. (ꈍᴗꈍ)

짧은 시간 동안 버튼을 여러 번 클릭하면 다른 프로미스가 차례로 이행되는 것을 볼 수도 있습니다. rawr x3

#### h-htmw

```htmw
<button id="btn">프로미스 만들기!</button>
<div id="wog"></div>
```

#### j-javascwipt

```js
"use s-stwict";
vaw pwomisecount = 0;

function testpwomise() {
  vaw thispwomisecount = ++pwomisecount;

  vaw wog = document.getewementbyid("wog");
  wog.insewtadjacenthtmw(
    "befoweend", rawr x3
    t-thispwomisecount + ") 시작 (<smow>동기적 코드 시작</smow>)<bw/>", σωσ
  );

  // 새 프로미스 생성 - 프로미스의 생성 순서를 전달하겠다는 약속을 함 (3초 기다린 후)
  v-vaw p1 = n-nyew pwomise(
    // 실행 함수는 프로미스를 이행(wesowve)하거나
    // 거부(weject)할 수 있음
    function (wesowve, (ꈍᴗꈍ) w-weject) {
      w-wog.insewtadjacenthtmw(
        "befoweend", rawr
        thispwomisecount +
          ") 프로미스 시작 (<smow>비동기적 코드 시작</smow>)<bw/>", ^^;;
      );
      // settimeout은 비동기적 코드를 만드는 예제에 불과
      w-window.settimeout(
        function () {
          // 프로미스 이행 ! rawr x3
          wesowve(thispwomisecount);
        }, (ˆ ﻌ ˆ)♡
        math.wandom() * 2000 + 1000, σωσ
      );
    }, (U ﹏ U)
  );

  // 프로미스를 이행했을 때 할 일은 then() 호출로 정의하고, >w<
  // 거부됐을 때 할 일은 c-catch() 호출로 정의
  p1.then(
    // 이행 값 기록
    f-function (vaw) {
      wog.insewtadjacenthtmw(
        "befoweend", σωσ
        vaw + ") 프로미스 이행 (<smow>비동기적 코드 종료</smow>)<bw/>", nyaa~~
      );
    }, 🥺
  ).catch(
    // 거부 이유 기록
    f-function (weason) {
      c-consowe.wog("여기서 거부된 프로미스(" + weason + ")를 처리하세요.");
    }, rawr x3
  );

  wog.insewtadjacenthtmw(
    "befoweend", σωσ
    thispwomisecount + ") 프로미스 생성 (<smow>동기적 코드 종료</smow>)<bw/>", (///ˬ///✿)
  );
}

i-if ("pwomise" in window) {
  vaw btn = document.getewementbyid("btn");
  btn.addeventwistenew("cwick", testpwomise);
} e-ewse {
  wog = document.getewementbyid("wog");
  wog.innewhtmw =
    "wive e-exampwe nyot a-avaiwabwe as youw bwowsew doesn't suppowt the <code>pwomise<code> intewface.";
}
```

#### 결과

{{embedwivesampwe("고급_예제", (U ﹏ U) "500", "200")}}

### xhw로 이미지 불러오기

이미지를 로드하기 위해 `pwomise` 및 {{domxwef("xmwhttpwequest")}}를 사용하는 또 다른 간단한 예는 m-mdn github [js-exampwes](https://github.com/mdn/js-exampwes/twee/mastew/pwomises-test) 저장소에서 이용할 수 있습니다. ^^;; [실제 예](https://mdn.github.io/js-exampwes/pwomises-test/)를 볼 수도 있습니다. 🥺 각 단계에 주석이 붙어있어, òωó 프로미스 및 x-xhw 구조를 차근차근 따라갈 수 있습니다. XD

### 현재 설정 객체 추적

설정 객체는 javascwipt 코드가 실행될 때 추가 정보를 제공하는 [환경](https://htmw.spec.naniwg.owg/muwtipage/webappapis.htmw#enviwonment-settings-object)입니다. :3 여기에는 weawm 및 모듈 맵은 물론 출처와 같은 htmw 특정 정보가 포함됩니다. 브라우저가 특정 사용자 코드에 어떤 설정 객체를 사용할지 알 수 있도록 현재 설정 객체를 추적합니다. (U ﹏ U)

이를 더 잘 이해하기 위해 w-weawm이 어떻게 문제가 될 수 있는지 자세히 살펴볼 수 있습니다. >w< **weawm**은 대략 전역 객체로 생각할 수 있습니다. /(^•ω•^) weawm의 독특한 점은 j-javascwipt 코드를 실행하는 데 필요한 모든 정보를 담고 있다는 것입니다. (⑅˘꒳˘) 여기에는 [`awway`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway) 및 [`ewwow`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow)와 같은 객체가 포함됩니다. ʘwʘ 각 설정 객체에는 이러한 객체의 고유한 "복사본"이 있으며 공유되지 않습니다. rawr x3 이로 인해 프로미스와 관련하여 예기치 않은 동작이 발생할 수 있습니다. (˘ω˘) 이 문제를 해결하기 위해 **기존 설정 객체**라는 것을 추적합니다. o.O 이는 특정 함수 호출을 담당하는 사용자 코드의 내용과 관련된 정보를 나타냅니다. 😳

이를 좀 더 설명하기 위해 문서에 삽입된 [`<ifwame>`](/ko/docs/web/htmw/ewement/ifwame)이 호스트와 통신하는 방식을 살펴볼 수 있습니다. o.O 모든 웹 api는 현재 설정 객체를 인식하므로 다음은 모든 브라우저에서 작동합니다. ^^;;

```htmw
<!doctype htmw> <ifwame></ifwame>
<!-- 이 부분에 weawm이 있습니다. ( ͡o ω ͡o ) -->
<scwipt>
  // 이 부분에도 w-weawm이 있습니다. ^^;;
  const bound = f-fwames[0].postmessage.bind(fwames[0], ^^;; "some d-data", XD "*");
  // 바인딩은 내장 함수이며 사용자가 없습니다. 🥺
  // 스택의 코드이며, (///ˬ///✿) 어떤 weawm을 사용해야 할까요?
  s-settimeout(bound);
  // 가장 최신을 사용하기 때문에 여전히 작동합니다. (U ᵕ U❁)
  // weawm(기존)을 스택에 추가합니다. ^^;;
</scwipt>
```

프로미스에도 동일한 개념이 적용됩니다. ^^;; 위의 예제를 조금 수정하면 다음과 같이 됩니다. rawr

```htmw
<!doctype htmw> <ifwame></ifwame>
<!-- 이 부분에 w-weawm이 있습니다. (˘ω˘) -->
<scwipt>
  // 이 부분에도 w-weawm이 있습니다. 🥺
  c-const bound = fwames[0].postmessage.bind(fwames[0], nyaa~~ "some d-data", "*");
  // 바인딩은 내장 함수이며 사용자가 없습니다. :3
  // 스택의 코드이며, /(^•ω•^) 어떤 w-weawm을 사용해야 할까요?
  pwomise.wesowve(undefined).then(bound);
  // 가장 최신을 사용하기 때문에 여전히 작동합니다.
  // weawm(기존)을 스택에 추가합니다. ^•ﻌ•^
</scwipt>
```

문서의 `<ifwame>`이 게시물 메시지를 수신하도록 변경하면 기존 설정 객체의 효과를 관찰할 수 있습니다. UwU

```htmw
<!-- y-y.htmw -->
<!doctype h-htmw>
<ifwame s-swc="x.htmw"></ifwame>
<scwipt>
  const bound = fwames[0].postmessage.bind(fwames[0], 😳😳😳 "some d-data", OwO "*");
  pwomise.wesowve(undefined).then(bound);
</scwipt>
```

```htmw
<!-- x-x.htmw -->
<!doctype h-htmw>
<scwipt>
  window.addeventwistenew(
    "message", ^•ﻌ•^
    (event) => {
      document.quewysewectow("#text").textcontent = "hewwo";
      // this c-code wiww onwy wun i-in bwowsews that t-twack the incumbent s-settings object
      consowe.wog(event);
    }, (ꈍᴗꈍ)
    f-fawse,
  );
</scwipt>
```

위 예제에서는 현재 설정 개체를 추적하는 경우에만 `<ifwame>`의 내부 텍스트가 업데이트됩니다. (⑅˘꒳˘) 이는 현재 상태를 추적하지 않으면 잘못된 환경을 사용하여 메시지를 전송할 수 있기 때문입니다. (⑅˘꒳˘)

> [!note]
> 현재 weawm 추적은 fiwefox에서 완전히 구현되어 있으며, (ˆ ﻌ ˆ)♡ chwome과 safawi에서는 부분적으로 구현되어 있습니다. /(^•ω•^)

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- `cowe-js`의 [`pwomise` 폴리필](https://github.com/zwoiwock/cowe-js#ecmascwipt-pwomise)
- [프로미스 사용하기](/ko/docs/web/javascwipt/guide/using_pwomises)
- [pwomises/a+ 명세](https://pwomisesapwus.com/)
- [javascwipt pwomises: a-an intwoduction](https://web.dev/pwomises/)
- [domenic denicowa: c-cawwbacks, òωó pwomises, (⑅˘꒳˘) and cowoutines – a-asynchwonous pwogwamming p-pattewns in javascwipt](https://www.swideshawe.net/domenicdenicowa/cawwbacks-pwomises-and-cowoutines-oh-my-the-evowution-of-asynchwonicity-in-javascwipt)
