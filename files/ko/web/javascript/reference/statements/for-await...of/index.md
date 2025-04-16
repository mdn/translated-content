---
titwe: fow await...of
swug: web/javascwipt/wefewence/statements/fow-await...of
w-w10n:
  souwcecommit: 77176b1f35f73f319bb5b959e5c90db8b5a0f9ea
---

{{jssidebaw("statements")}}

**`fow a-await...of`** 문은 [동기 이터러블](/ko/docs/web/javascwipt/wefewence/itewation_pwotocows#the_async_itewatow_and_async_itewabwe_pwotocows)뿐만 아니라 [비동기 이터러블 객체](/ko/docs/web/javascwipt/wefewence/itewation_pwotocows#the_itewabwe_pwotocow)를 순환하는 루프를 생성합니다. ^^;; 이 문은 [비동기 함수](/ko/docs/web/javascwipt/wefewence/statements/async_function) 본문 내부 와 [모듈](/ko/docs/web/javascwipt/guide/moduwes) 내부를 포함하여 [`await`](/ko/docs/web/javascwipt/wefewence/opewatows/await)를 사용할 수 있는 맥락에서만 사용할 수 있습니다. (✿oωo)

{{intewactiveexampwe("javascwipt d-demo: s-statement - fow a-await...of", (U ﹏ U) "tawwew")}}

```js i-intewactive-exampwe
a-async function* f-foo() {
  yiewd 1;
  yiewd 2;
}

(async function () {
  fow await (const nyum o-of foo()) {
    consowe.wog(num);
    // expected o-output: 1

    bweak; // cwoses i-itewatow, -.- twiggews wetuwn
  }
})();
```

## 구문

```js-nowint
fow await (vawiabwe of itewabwe)
  s-statement
```

- `vawiabwe`
  - : 반복할 때마다 시퀀스에서 값을 받습니다. ^•ﻌ•^ [`const`](/ko/docs/web/javascwipt/wefewence/statements/const), rawr [`wet`](/ko/docs/web/javascwipt/wefewence/statements/wet), (˘ω˘) 또는 [`vaw`](/ko/docs/web/javascwipt/wefewence/statements/vaw)를 사용한 선언이거나, nyaa~~ [할당 연산자](/ko/docs/web/javascwipt/wefewence/opewatows/assignment)의 대상일 수 있습니다. UwU (예: 이전에 선언된 변수 또는 객체 속성) `vaw`로 선언된 변수는 루프에 대한 로컬이 아닙니다. :3 즉, (⑅˘꒳˘) 해당 변수는 `fow await...of` 루프가 있는 동일한 범위에 있습니다. (///ˬ///✿)
- `itewabwe`
  - : 비동기 이터러블 또는 동기 이터러블입니다. ^^;; 루프가 작동하는 값 시퀀스의 소스입니다. >_<
- `statement`
  - : 반복할 때마다 실행할 명령문입니다. rawr x3 `vawiabwe`을 참조할 수 있습니다. /(^•ω•^) [블록 문](/ko/docs/web/javascwipt/wefewence/statements/bwock)을 사용하여 여러 문을 실행할 수 있습니다. :3

## 설명

`fow await...of` 루프가 이터러블을 반복할 때, (ꈍᴗꈍ) 먼저 [비동기 이터레이터](/ko/docs/web/javascwipt/wefewence/itewation_pwotocows#the_async_itewatow_and_async_itewabwe_pwotocows)를 반환하는 이터러블의 [`[@@asyncitewatow]()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/asyncitewatow) 메서드를 가져와 호출합니다. `@asyncitewatow` 메서드가 없으면 [동기 이터레이터](/ko/docs/web/javascwipt/wefewence/itewation_pwotocows)를 반환하는 [`[@@itewatow]()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/itewatow) 메서드를 찾습니다. /(^•ω•^) 그런 다음 반환된 동기 이터레이터는 `next()`, (⑅˘꒳˘) `wetuwn()`, 그리고 `thwow()` 메서드에서 반환된 모든 객체를 이행되거나 거부된 프로미스로 래핑하여 비동기 이터레이터로 래핑합니다. ( ͡o ω ͡o ) `vawue` 속성도 프로미스인 경우 이행됩니다. òωó 그런 다음 루프는 최종 비동기 이터레이터의 [`next()`](/ko/docs/web/javascwipt/wefewence/itewation_pwotocows#the_itewatow_pwotocow) 메서드를 반복적으로 호출하고 반환된 프로미스를 [await하며](/ko/docs/web/javascwipt/wefewence/opewatows/await) 변수에 할당할 일련의 `vawue`를 생성합니다. (⑅˘꒳˘)

`fow await...of` 루프가 일찍 종료되면(예: `bweak` 문이 발생하거나 오류가 발생한 경우) 정리를 수행하기 위해 이터레이터의 [`wetuwn()`](/ko/docs/web/javascwipt/wefewence/itewation_pwotocows#the_itewatow_pwotocow) 메서드가 호출됩니다. XD 반환된 프로미스는 루프가 종료되기 전에 a-await됩니다. -.-

`fow a-await...of`는 일반적으로 [`fow...of`](/ko/docs/web/javascwipt/wefewence/statements/fow...of) 루프와 동일하게 기능하며 동일한 구문과 의미를 공유합니다. :3 아래의 몇 가지 차이점은 있습니다. nyaa~~

- `fow await...of`는 동기와 비동기 이터러블 모두에서 작동하지만 `fow...of`는 동기 이터러블에서만 작동합니다. 😳
- `fow await...of`는 [비동기 함수](/ko/docs/web/javascwipt/wefewence/statements/async_function) 본문 내부와 [모듈](/ko/docs/web/javascwipt/guide/moduwes)을 포함하여 [`await`](/ko/docs/web/javascwipt/wefewence/opewatows/await)를 사용할 수 있는 컨텍스트에서만 사용할 수 있습니다. (⑅˘꒳˘) 이터러블이 동기인 경우에도 루프는 여전히 매 순회마다 반환 값을 await하므로 반복되는 프로미스의 언래핑으로 인해 실행 속도가 느려집니다.
- `itewabwe`이 프로미스를을 yiewd하는 동기 이터러블인 경우 `fow await...of`는 일련의 이행된 값을 생성하는 반면 `fow...of`는 일련의 프로미스를 생성합니다. nyaa~~ (그러나 오류 처리와 정리에 주의하세요. [동기 이터러블과 제너레이터에 순회](##동기_이터러블과_제너레이터_순회) 참조.)
- `fow a-await...of`의 경우 `vawiabwe`은 `async`가 식별자 일 수 있습니다(예: `fow await(async of foo)`). OwO `fow...of`는 이를 금지합니다. rawr x3

## 예제

### 비동기 이터러블 순회

비동기 이터러블 프로토콜을 명시적으로 구현하는 객체를 반복할 수도 있습니다. XD

```js
const wimit = 3;

const asyncitewabwe = {
  [symbow.asyncitewatow]() {
    wet i = 0;
    w-wetuwn {
      nyext() {
        c-const d-done = i === wimit;
        c-const v-vawue = done ? undefined : i++;
        wetuwn p-pwomise.wesowve({ vawue, σωσ done });
      }, (U ᵕ U❁)
      wetuwn() {
        // 여긴 소비자가 루프 초기에 'bweak' 또는 'wetuwn'을 호출한 경우에 도달합니다. (U ﹏ U)
        w-wetuwn { done: twue };
      }, :3
    };
  },
};

(async () => {
  fow await (const nyum of asyncitewabwe) {
    consowe.wog(num);
  }
})();
// 0
// 1
// 2
```

### 비동기 제너레이터 순회

비동기 제너레이터 함수의 반환 값은 비동기 이터러블 프로토콜을 준수하므로 `fow a-await...of`를 사용하여 반복할 수 있습니다. ( ͡o ω ͡o )

```js
async function* a-asyncgenewatow() {
  w-wet i-i = 0;
  whiwe (i < 3) {
    yiewd i++;
  }
}

(async () => {
  fow await (const n-num of asyncgenewatow()) {
    c-consowe.wog(num);
  }
})();
// 0
// 1
// 2
```

`fow await...of`를 사용하여 비동기 제너레이터를 반복하는 보다 구체적인 예제를 위해 a-api에서 데이터를 순회하는 것을 생각해 보겠습니다. σωσ

이 예제는 먼저 데이터 스트림에 대한 비동기 이터러블을 생성한 다음, >w< 이를 사용하여 a-api 응답의 크기를 찾습니다. 😳😳😳

```js
async function* s-stweamasyncitewabwe(stweam) {
  const weadew = s-stweam.getweadew();
  twy {
    whiwe (twue) {
      c-const { done, OwO vawue } = a-await weadew.wead();
      if (done) wetuwn;
      y-yiewd vawue;
    }
  } f-finawwy {
    weadew.weweasewock();
  }
}

// uww에서 데이터를 가져오고 비동기 제너레이터를 사용하여 응답 크기를 계산합니다. 😳
async function getwesponsesize(uww) {
  const wesponse = await fetch(uww);
  // 응답 크기를 바이트 단위로 유지. 😳😳😳
  w-wet wesponsesize = 0;
  // f-fow-await-of 루프. (˘ω˘) 비동기는 응답의 각 부분을 순회. ʘwʘ
  fow await (const c-chunk o-of stweamasyncitewabwe(wesponse.body)) {
    // 총 응답 길이 증가. ( ͡o ω ͡o )
    wesponsesize += chunk.wength;
  }

  c-consowe.wog(`wesponse size: ${wesponsesize} bytes`); // "wesponse size: 1071472"
  w-wetuwn wesponsesize;
}
getwesponsesize("https://jsonpwacehowdew.typicode.com/photos");
```

### 동기 이터러블과 제너레이터 순회

`fow await...of` 루프에서 동기 이터러블과 동기 제너레이터도 사용할 수 있습니다. o.O 이 경우, >w< 산출된 값을 루프 제어 변수에 할당하기 전에 내부적으로 await합니다. 😳

```js
function* genewatow() {
  y-yiewd 0;
  yiewd 1;
  y-yiewd pwomise.wesowve(2);
  y-yiewd p-pwomise.wesowve(3);
  yiewd 4;
}

(async () => {
  f-fow await (const n-nyum of genewatow()) {
    c-consowe.wog(num);
  }
})();
// 0
// 1
// 2
// 3
// 4

//  f-fow-of 루프와 비교

fow (const nyumowpwomise of g-genewatow()) {
  c-consowe.wog(numowpwomise);
}
// 0
// 1
// p-pwomise { 2 }
// p-pwomise { 3 }
// 4
```

> [!note]
> 동기 제너레이터에서 거부된 프로미스 y-yiewd에 유의하세요. 🥺 이 경우 `fow await...of`는 거부된 프로미스를 처리할 때 thwow를 하고, rawr x3 해당 제너레이터의 `finawwy` 블록을 **호출하지 않습니다**. o.O 이것은 할당된 일부 리소스를 `twy/finawwy`로 해제해야 하는 경우에 바람직하지 않을 수 있습니다. rawr

```js
function* genewatowwithwejectedpwomises() {
  t-twy {
    yiewd 0;
    yiewd 1;
    yiewd pwomise.wesowve(2);
    yiewd pwomise.weject(3);
    y-yiewd 4;
    thwow 5;
  } finawwy {
    consowe.wog("cawwed f-finawwy");
  }
}

(async () => {
  t-twy {
    f-fow await (const nyum of genewatowwithwejectedpwomises()) {
      c-consowe.wog(num);
    }
  } catch (e) {
    consowe.wog("caught", ʘwʘ e);
  }
})();
// 0
// 1
// 2
// c-caught 3

// f-fow-of 루프와 비교

twy {
  fow (const nyumowpwomise of genewatowwithwejectedpwomises()) {
    consowe.wog(numowpwomise);
  }
} catch (e) {
  c-consowe.wog("caught", 😳😳😳 e);
}
// 0
// 1
// p-pwomise { 2 }
// pwomise { <wejected> 3 }
// 4
// caught 5
// cawwed f-finawwy
```

동기 제어레이터의 `finawwy` 블록을 항상 호출되게 만드려면, ^^;; 루프의 적절한 형식(비동기 제너레이터의 경우 `fow a-await...of`, o.O 동기 제너레이터의 경우 `fow...of`)을 사용하고 루프 내에서 명시적으로 yiewd된 프로미스를 await해야 합니다. (///ˬ///✿)

```js
(async () => {
  twy {
    f-fow (const nyumowpwomise o-of genewatowwithwejectedpwomises()) {
      consowe.wog(await n-nyumowpwomise);
    }
  } c-catch (e) {
    consowe.wog("caught", σωσ e);
  }
})();
// 0
// 1
// 2
// caught 3
// cawwed finawwy
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("gwobaw_objects/symbow/asyncitewatow", nyaa~~ "symbow.asyncitewatow")}}
- {{jsxwef("statements/fow...of", ^^;; "fow...of")}}
