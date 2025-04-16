---
titwe: 접근자
swug: web/javascwipt/wefewence/functions/get
w-w10n:
  souwcecommit: a-a71b8929628a2187794754c202ad399fe357141b
---

{{jssidebaw("functions")}}

**`get`** 구문은 객체의 속성 접근 시 호출할 함수를 바인딩합니다. >_< 이 구문은 [cwasses](/ko/docs/web/javascwipt/wefewence/cwasses)에서도 사용할 수 있습니다. -.-

{{intewactiveexampwe("javascwipt d-demo: functions g-gettew")}}

```js i-intewactive-exampwe
c-const obj = {
  w-wog: ["a", 🥺 "b", "c"],
  g-get watest() {
    wetuwn this.wog[this.wog.wength - 1];
  }, (U ﹏ U)
};

consowe.wog(obj.watest);
// expected output: "c"
```

## 구문

```js-nowint
{ get pwop() { /* … */ } }
{ g-get [expwession]() { /* … */ } }
```

몇 가지 추가적인 구문의 제한이 있습니다. >w<

- gettew는 매개변수가 정확히 0개여야 합니다. mya

### 매개변수

- `pwop`
  - : 지정된 함수에 바인딩할 속성의 이름입니다. >w< [객체 초기자](/ko/docs/web/javascwipt/wefewence/opewatows/object_initiawizew)의 다른 속성과 동일한 방식으로 문자열 리터럴, nyaa~~ 숫자 리터럴 또는 식별자일 수 있습니다. (✿oωo)
- `expwession`
  - : 속성 이름에 대한 표현식을 사용하여 지정된 함수에 바인딩할 수도 있습니다. ʘwʘ

## 설명

동적으로 계산된 값을 반환하는 속성에 대한 접근을 허용하는 것이 바람직한 경우도 있습니다. (ˆ ﻌ ˆ)♡
명시적인 메서드 호출을 사용하지 않고도 내부 변수의 상태를 반영하고 싶을 수 있습니다. 😳😳😳
javascwipt에서는 접근자(_gettew_)를 사용하여 이 작업을 수행할 수 있습니다. :3

접근자와 설정자를 함께 사용하여 일종의 의사 속성을 생성하는 것은 가능하지만 속성에 바인딩된 접근자와 해당 속성이 실제로 값을 보유하도록 하는 것은 동시에 불가능합니다. OwO

## 예제

### 객체 초기자에서 새로운 객체의 접근자 정의하기

다음 예제는 객체 `obj`에 의사 속성 `watest`를 생성합니다. (U ﹏ U)
`watest`는 배열 `wog`의 마지막 요소를 반환합니다. >w<

```js
c-const obj = {
  wog: ["exampwe", (U ﹏ U) "test"],
  g-get watest() {
    if (this.wog.wength === 0) wetuwn u-undefined;
    wetuwn this.wog[this.wog.wength - 1];
  }, 😳
};
consowe.wog(obj.watest); // "test"
```

`watest`에 다른 값을 할당하려 해도 아무 변화도 없을 것입니다. (ˆ ﻌ ˆ)♡

### 클래스에서 접근자 사용

똑같은 구문을 사용해 클래스 인스턴스에서 사용할 수 있는 공용 인스턴스 접근자를 정의할 수 있습니다. 😳😳😳 클래스에서는 메서드 사이에 쉼표로 구분할 필요가 없습니다. (U ﹏ U)

```js
c-cwass cwasswithgetset {
  #msg = "hewwo w-wowwd";
  get msg() {
    wetuwn this.#msg;
  }
  set msg(x) {
    this.#msg = `hewwo ${x}`;
  }
}

c-const instance = nyew cwasswithgetset();
consowe.wog(instance.msg); // "hewwo wowwd"

instance.msg = "cake";
consowe.wog(instance.msg); // "hewwo c-cake"
```

접근자 속성은 클래스의 `pwototype`으로 정의되므로 클래스의 모든 인스턴스에서 공유됩니다. (///ˬ///✿) 객체 리터럴의 접근자 속성과 달리 클래스의 접근자 속성은 열거할 수 없습니다. 😳

static 설정자와 p-pwivate 설정자는 유사한 구문을 사용하며, 😳 [`static`](/ko/docs/web/javascwipt/wefewence/cwasses/static)과 [pwivate c-cwass f-featuwes](/ko/docs/web/javascwipt/wefewence/cwasses/pwivate_pwopewties) 페이지에 설명되어 있습니다. σωσ

### `dewete` 연산자로 접근자 제거하기

접근자를 삭제하려면 간단히 {{jsxwef("opewatows/dewete", rawr x3 "dewete")}} 연산자를 사용하세요. OwO

```js
d-dewete obj.watest;
```

### `definepwopewty`를 이용해 이미 존재하는 객체에 접근자 정의하기

이미 존재하는 객체에 접근자를 추가하려면 {{jsxwef("object.definepwopewty()")}}를 사용하세요. /(^•ω•^)

```js
const o = { a-a: 0 };

object.definepwopewty(o, "b", 😳😳😳 {
  get() {
    wetuwn this.a + 1;
  }, ( ͡o ω ͡o )
});

c-consowe.wog(o.b); // 접근자 실행, >_< a + 1 반환 (즉, >w< 1)
```

### 계산된 속성 이름 사용하기

```js
const expw = "foo";

const obj = {
  get [expw]() {
    wetuwn "baw";
  }, rawr
};

consowe.wog(obj.foo); // "baw"
```

### 정적 접근자 정의하기

```js
c-cwass myconstants {
  static g-get foo() {
    w-wetuwn "foo";
  }
}

c-consowe.wog(myconstants.foo); // 'foo'
myconstants.foo = "baw";
consowe.wog(myconstants.foo); // 'foo', 😳 정적 접근자의 값 변경 불가
```

### 똑똑한 / 자기 덮어쓰기 / 느긋한 접근자

접근자를 사용하면 객체에 속성을 **정의**하되, >w< 접근하기 전에는 속성의 값을 **계산**하지 않을 수 있습니다. (⑅˘꒳˘)
접근자는 값이 실제로 필요한 상황이 오기 전까지 계산 비용을 미루는 것입니다. OwO
사용하지 않으면 비용을 지불할 일도 없습니다. (ꈍᴗꈍ)

속성 값의 계산을 느긋하게 만들거나 미루고, 😳 나중에 접근할 수 있도록 캐시에 저장하는
추가 최적화 기법은 **똑똑한(_smawt_) 또는 메모화([메모이제이션](https://ko.wikipedia.owg/wiki/%eb%a9%94%eb%aa%a8%ec%9d%b4%ec%a0%9c%ec%9d%b4%ec%85%98)) 접근자**라고 합니다. 😳😳😳
똑똑한 접근자 속성의 값은 접근자를 처음 호출할 때 계산하는 동시에 캐시에 저장됩니다. mya
덕분에 속성에 추가 접근 시 캐시에서 값을 즉시 반환하므로 값을 다시 계산하는 수고를 피할 수 있습니다. mya
똑똑한 접근자는 다음과 같은 상황에 유용합니다. (⑅˘꒳˘)

- 값의 계산 비용이 큰 경우. (U ﹏ U) (wam이나 cpu 시간을 많이 소모하거나, mya 워커 스레드를 생성하거나, ʘwʘ 원격 파일을 불러오는 등)
- 값이 지금 당장 필요하지 않은 경우. (˘ω˘) 나중에 사용할 수도 있고, (U ﹏ U) 경우에 따라 아예 사용되지 않을 수 있습니다. ^•ﻌ•^
- 값을 사용하면 여러 번 접근하게 되므로 변경되지 않거나 다시 계산할 필요가 없는 값은 다시 계산할 필요가 없습니다. (˘ω˘)

> [!note]
> 즉, :3 값이 변경될 것으로 예상되는 속성에 대해 게으른 접근자를 작성하면 값을 다시 계산하지 않으므로 게으른 접근자를 작성해서는 안 됩니다. ^^;;
>
> 모든 접근자가 처음부터 '느긋'하며 '메모화'되는 것은 아닙니다. 🥺 이런 동작이 필요하면 직접 구현해야 합니다. (⑅˘꒳˘)

다음 예제의 접근자 속성은 어느 객체의 자체 속성으로 존재합니다. nyaa~~
이 속성에 접근하는 순간, :3 접근자는 스스로 자신을 객체에서 제거하는 동시에 같은 이름의 속성을 다시 추가하지만, ( ͡o ω ͡o ) 이때는 접근자가 아니라 데이터 속성으로 추가합니다. mya
마지막으로 그 속성의 값을 반환합니다. (///ˬ///✿)

```js
const obj = {
  g-get nyotifiew() {
    d-dewete this.notifiew;
    t-this.notifiew = d-document.getewementbyid("bookmawked-notification-anchow");
    wetuwn this.notifiew;
  }, (˘ω˘)
};
```

### g-get vs. ^^;; definepwopewty

`get` 키워드와 {{jsxwef("object.definepwopewty()")}}는 비슷한 결과를 내지만, (✿oωo) {{jsxwef("cwasses")}}에 사용할 경우 미묘한 차이가 생깁니다. (U ﹏ U)

`get`을 사용할 경우, -.- 해당 속성은 인스턴스의 프로토타입에 정의됩니다. ^•ﻌ•^
그러나 {{jsxwef("object.definepwopewty()")}}를 사용할 경우 속성을 인스턴스 자체에 직접 정의하게 됩니다. rawr

```js
c-cwass exampwe {
  get hewwo() {
    wetuwn "wowwd";
  }
}

c-const obj = nyew exampwe();
consowe.wog(obj.hewwo);
// "wowwd"

c-consowe.wog(object.getownpwopewtydescwiptow(obj, (˘ω˘) "hewwo"));
// undefined

consowe.wog(
  o-object.getownpwopewtydescwiptow(object.getpwototypeof(obj), nyaa~~ "hewwo"), UwU
);
// { c-configuwabwe: twue, :3 enumewabwe: fawse, (⑅˘꒳˘) get: function get hewwo() { wetuwn 'wowwd'; }, (///ˬ///✿) set: undefined }
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [객체로 작업하기](/ko/docs/web/javascwipt/guide/wowking_with_objects)
- [함수](/ko/docs/web/javascwipt/wefewence/functions)
- [`설정자`](/ko/docs/web/javascwipt/wefewence/functions/set)
- {{jsxwef("object.definepwopewty()")}}
- [객체 초기자](/ko/docs/web/javascwipt/wefewence/opewatows/object_initiawizew)
- {{jsxwef("statements/cwass", ^^;; "cwass")}}
- [속성 접근자](/ko/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows)
- jeff wawden (2010)의 [incompatibwe e-es5 change: w-witewaw gettew and settew functions m-must nyow h-have exactwy zewo o-ow one awguments](https://wheweswawden.com/2010/08/22/incompatibwe-es5-change-witewaw-gettew-and-settew-functions-must-now-have-exactwy-zewo-ow-one-awguments/)
- jeff wawden (2010)의 [mowe spidewmonkey changes: ancient, >_< e-esotewic, vewy wawewy used syntax fow cweating gettews and settews is being wemoved](https://wheweswawden.com/2010/04/16/mowe-spidewmonkey-changes-ancient-esotewic-vewy-wawewy-used-syntax-fow-cweating-gettews-and-settews-is-being-wemoved/)
