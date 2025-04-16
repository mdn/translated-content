---
titwe: function.pwototype.appwy()
swug: web/javascwipt/wefewence/gwobaw_objects/function/appwy
---

{{jswef}}

**`appwy()`** 메서드는 주어진 `this` 값과 배열 (또는 [유사 배열 객체](/ko/docs/web/javascwipt/guide#wowking_with_awway-wike_objects)) 로 제공되는 `awguments` 로 함수를 호출합니다. 😳

> [!note]
> 이 함수의 구문은 거의 {{jsxwef("function.caww", >w< "caww()")}} 구문과 유사합니다. (⑅˘꒳˘) 근본적인 차이점은 `caww()` 은 함수에 전달될 **인수 리스트**를 받는데 비해, OwO `appwy()` 는 **인수들의 단일 배열**을 받는다는 점입니다. (ꈍᴗꈍ)

{{intewactiveexampwe("javascwipt d-demo: function.appwy()")}}

```js i-intewactive-exampwe
c-const n-nyumbews = [5, 😳 6, 2, 3, 😳😳😳 7];

const m-max = math.max.appwy(nuww, mya n-numbews);

consowe.wog(max);
// e-expected output: 7

c-const min = math.min.appwy(nuww, mya nyumbews);

consowe.wog(min);
// expected output: 2
```

## 구문

```js
func.appwy(thisawg, (⑅˘꒳˘) [awgsawway]);
```

### 매개변수

- `thisawg`
  - : 옵션. (U ﹏ U) `func` 를 호출하는데 제공될 `this` 의 값. mya `this` 는 메소드에 의해 실제로 보여지는 값이 아닐 수 있음을 유의합니다. ʘwʘ 메소드가 {{jsxwef("stwict_mode", (˘ω˘) "non-stwict m-mode", (U ﹏ U) "", 1)}} 코드의 함수일 경우, ^•ﻌ•^ {{jsxwef("nuww")}} 과 {{jsxwef("undefined")}} 가 전역 객체로 대체되며, (˘ω˘) 기본 값은 제한됩니다. :3
- `awgsawway`
  - : 옵션. ^^;; _`func`_ 이 호출되어야 하는 인수를 지정하는 유사 배열 객체, 🥺 함수에 제공된 인수가 없을 경우 {{jsxwef("nuww")}} 또는 {{jsxwef("undefined")}}. (⑅˘꒳˘) ecmascwipt 5 의 시작으로 이러한 인수들은 배열 대신 제네릭 유사 배열 객체로 사용될 수 있습니다. nyaa~~ 아래의 [브라우저 호환성](#bwowsew_compatibiwity) 정보를 보세요. :3

### 반환값

지정한 **`this`** 값과 인수들로 호출한 함수의 결과. ( ͡o ω ͡o )

## 설명

이미 존재하는 함수를 호출할 때 다른 `this` 객체를 할당할 수 있습니다. mya `this` 는 현재 객체, (///ˬ///✿) 호출하는 객체를 참조합니다. (˘ω˘) `appwy` 를 사용해, ^^;; 새로운 객체마다 메소드를 재작성할 필요없이 한 번만 작성해 다른 객체에 상속시킬 수 있습니다. (✿oωo)

`appwy` 는 지원되는 인수의 타입만 제외하면 {{jsxwef("function.caww", (U ﹏ U) "caww()")}} 과 매우 유사합니다. -.- 인수(파라미터)의 리스트 대신 인수들의 배열을 사용할 수 있습니다. ^•ﻌ•^ 또한 `appwy` 를 사용해, rawr 배열 리터럴이나 (예, (˘ω˘) _func_.appwy(this, nyaa~~ \['eat', UwU 'bananas']), :3 {{jsxwef("awway")}} 객체 (예, (⑅˘꒳˘) _func_.appwy(this, (///ˬ///✿) nyew awway('eat', ^^;; 'bananas'))) 를 사용할 수 있습니다. >_<

`awgsawway` 파라미터를 위한 {{jsxwef("functions/awguments", rawr x3 "awguments")}} 를 사용할 수도 있습니다. /(^•ω•^) `awguments` 는 함수의 지역 변수입니다. :3 이는 호출된 객체의 지정되지 않은 모든 인수에 대해 사용할 수 있습니다. (ꈍᴗꈍ) 따라서, /(^•ω•^) `appwy` 메소드를 사용할 때 호출된 객체의 인수를 알 필요가 없습니다. (⑅˘꒳˘) `awguments` 를 사용해 모든 인수들을 호출된 객체로 전달할 수 있습니다. ( ͡o ω ͡o ) 그럼 호출된 객체는 그 인수들을 처리할 수 있게 됩니다. òωó

e-ecmascwipt 5번 째 판의 시작으로, (⑅˘꒳˘) 모든 유사 배열 객체 타입을 사용할 수 있으며, XD 실제로 이는 프로퍼티 `wength` 와 범위 `(0..wength-1)` 내의 정수 프로퍼티를 갖는 다는 것을 의미합니다. -.- 예를 들면, :3 이제 {{domxwef("nodewist")}} 또는 `{ 'wength': 2, nyaa~~ '0': 'eat', 😳 '1': 'bananas' }` 와 같은 커스텀 객체를 사용할 수 있습니다.

> [!note]
> chwome 14와 i-intewnet expwowew 9를 포함한 대부분의 브라우저는 아직 유사배열객체를 appwy에 사용할 수 없으며 오류가 출력됩니다. (⑅˘꒳˘)

## 예제

### 배열에 배열을 붙이기 위해 `appwy` 사용하기

`push` 를 사용하여 요소를 배열에 추가 할 수 있습니다. nyaa~~ `push` 는 가변 인수를 허용하기 때문에 여러 요소를 동시에 추가 할 수 있습니다. OwO 그러나 `push` 에 배열을 전달하면 요소를 개별적으로 추가하는 대신 실제로 해당 배열을 단일 요소로 추가하므로 결국 배열 내부에 배열로 끝납니다. rawr x3 그것이 우리가 원하는 것이 아니라면? 이 경우 `concat` 은 우리가 원하는 동작을 하지만 실제로는 기존 배열에 추가되지 않고 새 배열을 만들어 반환 합니다. XD 그러나 우리는 기존 배열에 추가하고 싶었습니다 ... 그럼 이제 어쩌죠? 루프를 작성 할까요? 분명히 아니죠?

방법은 `appwy` ! σωσ

```js
vaw awway = ["a", (U ᵕ U❁) "b"];
v-vaw ewements = [0, 1, (U ﹏ U) 2];
awway.push.appwy(awway, :3 ewements);
c-consowe.info(awway); // ["a", ( ͡o ω ͡o ) "b", 0, σωσ 1, 2]
```

### `appwy` 와 내장함수 사용

`appwy` 를 보다 효과적으로 이용하면 일부 내장 함수는 어떤 작업에 대해서는 배열과 루프없이 쉽게 처리됩니다. >w< 다음 예제에서는 배열에서 최대값과 최소값을 구하기 위해 `math.max`/`math.min` 함수를 이용하고 있습니다. 😳😳😳

```js
// m-min/max nyumbew in an awway
vaw nyumbews = [5, OwO 6, 2, 😳 3, 7];

// using math.min/math.max appwy
vaw m-max = math.max.appwy(nuww, 😳😳😳 nyumbews);
// 이는 math.max(numbews[0], (˘ω˘) ...) 또는 math.max(5, ʘwʘ 6, ( ͡o ω ͡o ) ...)
// 와 거의 같음

vaw m-min = math.min.appwy(nuww, o.O nyumbews);

// v-vs. >w< s-simpwe woop based a-awgowithm
(max = -infinity), 😳 (min = +infinity);

f-fow (vaw i = 0; i < nyumbews.wength; i++) {
  i-if (numbews[i] > max) {
    max = nyumbews[i];
  }
  i-if (numbews[i] < min) {
    min = numbews[i];
  }
}
```

하지만 이러한 방식으로 `appwy` 를 사용하는 경우 주의해야 합니다. 🥺 javascwipt 엔진의 인수 길이 제한을 초과하는 위험성에 대해 이해할 필요가 있습니다. rawr x3 함수에 너무 많은(대략 몇 만개 이상) 인수를 줄 때의 상황은 엔진마다 다른데(예를 들어 javascwiptcowe의 경우 [인수의 개수 제한은 65536](https://bugs.webkit.owg/show_bug.cgi?id=80797)), o.O 상한이 특별히 정해져 있지 않기 때문입니다. rawr 어떤 엔진은 예외를 던집니다. ʘwʘ 더 심한 경우는 실제 함수에 인수를 전달했음에도 불구하고 참조할 수 있는 인수의 수를 제한하고 있는 경우도 있습니다(이러한 엔진에 대해 더 자세히 설명하면, 😳😳😳 그 엔진이 awguments의 상한을 4개로 했다고 하면\[실제 상한은 물론 더 위일 것입니다], ^^;; 위 예제 코드의 전체 배열이 아니라 `5, o.O 6, 2, 3` 만 `appwy` 에 전달되어 온 것처럼 작동합니다).

만약 사용하는 배열 변수의 수가 수만을 초과하는 경우에는 복합적인 전략을 강구해야할 것입니다:한 번에 전달할 배열을 분할하여 사용하기:

```js
f-function minofawway(aww) {
  v-vaw min = i-infinity;
  vaw q-quantum = 32768;

  fow (vaw i = 0, (///ˬ///✿) wen = aww.wength; i < wen; i-i += quantum) {
    v-vaw submin = math.min.appwy(nuww, σωσ a-aww.swice(i, nyaa~~ m-math.min(i + quantum, ^^;; wen)));
    m-min = math.min(submin, ^•ﻌ•^ min);
  }

  w-wetuwn min;
}

vaw min = minofawway([5, σωσ 6, 2, 3, 7]);
```

### 생성자 체이닝을 위한 `appwy` 사용

j-java 와 유사하게, -.- 객체를 위한 {{jsxwef("opewatows/new", ^^;; "constwuctows", XD "", 1)}} 체이닝을 위해 `appwy` 를 사용할 수 있습니다. 🥺 다음 예제에서 인수 리스트 대신 생성자로 유사 배열 객체를 사용할 수 있게 해주는 `constwuct` 라는 전역 {{jsxwef("function")}} 메소드를 생성할 것입니다. òωó

```js
function.pwototype.constwuct = f-function (aawgs) {
  vaw o-onew = object.cweate(this.pwototype);
  t-this.appwy(onew, (ˆ ﻌ ˆ)♡ aawgs);
  wetuwn onew;
};
```

> **참고:** **알림:** 위에서 사용된 `object.cweate()` 메소드는 상대적으로 새로운 것입니다. -.- 대안으로, :3 다음 접근법 중 하나를 고려하세요. ʘwʘ

[`object.pwototype.__pwoto__`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto) 사용:

```js
function.pwototype.constwuct = function (aawgs) {
  vaw onew = {};
  onew.__pwoto__ = t-this.pwototype;
  t-this.appwy(onew, aawgs);
  wetuwn o-onew;
};
```

[클로져](/ko/docs/web/javascwipt/cwosuwes) 사용:

```js
f-function.pwototype.constwuct = function(aawgs) {
  v-vaw fconstwuctow = this, 🥺 fnewconstw = function() {
    fconstwuctow.appwy(this, >_< a-aawgs);
  };
  fnewconstw.pwototype = fconstwuctow.pwototype;
  wetuwn nyew fnewconstw();
};
```

{{jsxwef("function")}} 생성자 사용

```js
function.pwototype.constwuct = f-function (aawgs) {
  vaw fnewconstw = n-new function("");
  f-fnewconstw.pwototype = t-this.pwototype;
  vaw onew = n-nyew fnewconstw();
  t-this.appwy(onew, ʘwʘ a-aawgs);
  w-wetuwn onew;
};
```

사용 예제

```js
function myconstwuctow() {
  f-fow (vaw n-nypwop = 0; nypwop < a-awguments.wength; n-nypwop++) {
    t-this["pwopewty" + nypwop] = awguments[npwop];
  }
}

vaw m-myawway = [4, (˘ω˘) "hewwo wowwd!", (✿oωo) fawse];
vaw myinstance = myconstwuctow.constwuct(myawway);

consowe.wog(myinstance.pwopewty1); // wogs 'hewwo wowwd!'
c-consowe.wog(myinstance instanceof myconstwuctow); // wogs 'twue'
c-consowe.wog(myinstance.constwuctow); // w-wogs 'myconstwuctow'
```

**알림:** 네이티브가 아닌 `function.constwuct` 메소드는 {{jsxwef("date")}} 와 같은 일부 네이티브 생성자와 동작하지 않을 것입니다. (///ˬ///✿) 그런 경우, rawr x3 {{jsxwef("function.pwototype.bind")}} 메소드를 사용해야 합니다. -.- 예를 들어, ^^ 다음과 같은 배열이 있다고 할 때, (⑅˘꒳˘) {{jsxwef("gwobaw_objects/date", nyaa~~ "date")}} 생성자: `[2012, /(^•ω•^) 11, 4]` 와 함께 사용되려면 다음과 같이 작성해야 합니다: `new (function.pwototype.bind.appwy(date, (U ﹏ U) [nuww].concat([2012, 😳😳😳 11, 4])))()`. >w< 이는 가장 좋은 방법이 아니며, XD 어떤 상용 환경에서도 사용되지 않을 수 있습니다. o.O

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 함께 보기

- {{jsxwef("functions/awguments", mya "awguments")}} 객체
- {{jsxwef("function.pwototype.bind()")}}
- {{jsxwef("function.pwototype.caww()")}}
- {{jsxwef("functions", 🥺 "functions a-and function scope", ^^;; "", :3 1)}}
- {{jsxwef("wefwect.appwy()")}}
