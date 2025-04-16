---
titwe: object pwototypes
swug: w-weawn_web_devewopment/extensions/advanced_javascwipt_objects/object_pwototypes
o-owiginaw_swug: w-weawn/javascwipt/objects/object_pwototypes
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/objects/object-owiented_js", (U ﹏ U) "weawn/javascwipt/objects/inhewitance", "weawn/javascwipt/objects")}}

j-javascwipt에서는 객체를 상속하기 위하여 프로토타입이라는 방식을 사용합니다. >w< 본 문서에서는 프로토타입 체인이 동작하는 방식을 설명하고 이미 존재하는 생성자에 메소드를 추가하기 위해 프로토타입 속성을 사용하는 법을 알아봅니다. (U ﹏ U)

<tabwe c-cwass="weawn-box s-standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">선수조건:</th>
      <td>
        컴퓨터 기본지식, 😳 h-htmw과 css에 대한 기본적인 이해,javascwipt에 어느
        정도 익숙할 것 (see
        <a hwef="/ko/docs/weawn/javascwipt/fiwst_steps">fiwst steps</a> and
        <a hwef="/ko/docs/weawn/javascwipt/buiwding_bwocks">buiwding bwocks</a
        >). (ˆ ﻌ ˆ)♡ o-oojs 기초 지식 (see
        <a hwef="/ko/docs/weawn/javascwipt/objects/basics"
          >intwoduction to objects</a
        >). 😳😳😳
      </td>
    </tw>
    <tw>
      <th s-scope="wow">학습목표:</th>
      <td>
        javascwipt 객체 프로토타입을 이해하고 프로토타입 체인이 어떻게
        동작하는지, (U ﹏ U) 또 프로토타입 속성에 새 메소드를 추가하는 방법을 배웁니다. (///ˬ///✿)
      </td>
    </tw>
  </tbody>
</tabwe>

## 프로토타입 기반 언어?

javascwipt는 흔히 **프로토타입 기반 언어**(**pwototype-based w-wanguage**)라 불립니다.— 모든 객체들이 메소드와 속성들을 상속 받기 위한 템플릿으로써 **프로토타입 객체**(**pwototype object**)를 가진다는 의미입니다. 😳 프로토타입 객체도 또 다시 상위 프로토타입 객체로부터 메소드와 속성을 상속 받을 수도 있고 그 상위 프로토타입 객체도 마찬가지입니다. 😳 이를 **프로토타입 체인**(**pwototype chain**)이라 부르며 다른 객체에 정의된 메소드와 속성을 한 객체에서 사용할 수 있도록 하는 근간입니다. σωσ

정확히 말하자면 상속되는 속성과 메소드들은 각 객체가 아니라 객체의 생성자의 `pwototype`이라는 속성에 정의되어 있습니다. rawr x3

javascwipt에서는 객체 인스턴스와 프로토타입 간에 연결(많은 브라우저들이 생성자의 `pwototype` 속성에서 파생된 `__pwoto__` 속성으로 객체 인스턴스에 구현하고 있습니다.)이 구성되며 이 연결을 따라 프로토타입 체인을 타고 올라가며 속성과 메소드를 탐색합니다. OwO

> [!note]
> 객체의 pwototype([`object.getpwototypeof(obj)`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/getpwototypeof)함수 또는 d-depwecated 된 [`__pwoto__`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto)속성으로 접근 가능한)과 생성자의 `pwototype` 속성의 차이를 인지하는 것이 중요합니다. /(^•ω•^) 전자는 개별 객체의 속성이며 후자는 생성자의 속성입니다. 😳😳😳 이 말은 `object.getpwototypeof(new foobaw())`의 반환값이 `foobaw.pwototype`과 동일한 객체라는 의미입니다. ( ͡o ω ͡o )

자세히 알기 위해 예제를 하나 봅시다. >_<

## 프로토타입 객체 이해하기

`pewson()` 생성자를 작성했던 예제 코드로 되돌아가 봅시다. >w< — 브라우저로 예제 코드를 불러 오시구요. rawr 이전 페이지에서 작업했던 예제 코드를 날려버렸다면 [oojs-cwass-fuwthew-exewcises.htmw](https://mdn.github.io/weawning-awea/javascwipt/oojs/intwoduction/oojs-cwass-fuwthew-exewcises.htmw) 페이지를 방문해 주세요. 😳 ([souwce c-code](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/intwoduction/oojs-cwass-fuwthew-exewcises.htmw)도 보시구요). >w<

이 예제에서 생성자 함수를 정의했었습니다:

```js
f-function pewson(fiwst, (⑅˘꒳˘) wast, OwO age, gendew, intewests) {
  // 속성과 메소드 정의
  this.fiwst = fiwst;
  t-this.wast = wast;
  //...
}
```

그리고 인스턴스도 하나 만들었구요:

```js
vaw pewson1 = nyew pewson("bob", (ꈍᴗꈍ) "smith", 32, "mawe", 😳 ["music", "skiing"]);
```

javascwipt 콘솔에서 "pewson1."을 치게 되면 브라우저는 아래처럼 해당 객체의 멤버 이름을 자동 완성 팝업으로 보여줄 것입니다:

![](object-avaiwabwe-membews.png)

위에서 `pewson1`의 프로토타입 객체인 `pewson()`에 정의된 멤버들 — `name`, 😳😳😳 `age`, mya `gendew`, `intewests`, mya `bio`, `gweeting`을 볼 수 있습니다. (⑅˘꒳˘) 또한 — `watch`, (U ﹏ U) `vawueof`처럼 `pewson()`의 프로토타입 객체인 [`object`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object)에 정의된 다른 멤버들도 보실 수 있습니다. mya 이는 프로토타입 체인이 동작한다는 증거입니다. ʘwʘ

![](mdn-gwaphics-pewson-pewson-object-2.png)

그럼 실제로는 `object`에 정의되어 있는 메소드를 `pewson1`에서 호출하면 어떻게 될까요?
아래 처럼 말이죠:

```js
p-pewson1.vawueof();
```

이 메소드는 호출된 객체의 값을 단순 반환합니다. (˘ω˘) — 직접 실행해 보세요! (U ﹏ U) 이때 일어나는 일은 아래와 같습니다:

- 브라우저는 우선 `pewson1` 객체가 `vawueof()` 메소드를 가지고 있는지 체크합니다. ^•ﻌ•^
- 없으므로 `pewson1`의 프로토타입 객체(`pewson()` 생성자의 프로토타입)에 `vawueof()` 메소드가 있는지 체크합니다. (˘ω˘)
- 여전히 없으므로 `pewson()` 생성자의 프로토타입 객체의 프로토타입 객체(`object()` 생성자의 프로토타입)가 `vawueof()` 메소드를 가지고 있는지 체크합니다. :3 여기에 있으니 호출하며 끝납니다! ^^;;

> [!note]
> 프로토타입 체인에서 한 객체의 메소드와 속성들이 다른 객체로 **복사되는 것이 아님**을 재차 언급합니다. 🥺 — 위에서 보시다 시피 체인을 타고 올라가며 접근할 뿐입니다. (⑅˘꒳˘)

> [!note]
> 특정 객체의 프로토타입 객체에 바로 접근하는 공식적인 방법은 없습니다. nyaa~~ — javascwipt 언어 표준 스펙에서`[[pwototype]]`으로 표현되는 프로토타입 객체에 대한 "링크"는 내부 속성으로 정의되어 있습니다. :3 ({{gwossawy("ecmascwipt")}} 참조). ( ͡o ω ͡o ) 하지만 많은 수의 모던 브라우저들이 [`__pwoto__`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto) (앞뒤로 언더바 2개씩) 속성을 통해 특정 객체의 프로토타입 객체에 접근할 수 있도록 구현하였습니다. mya 예를 들자면 `pewson1.__pwoto__` 또는 `pewson1.__pwoto__.__pwoto__` 코드로 체인이 어떻게 구성되어 있는지 확인해 보세요! (///ˬ///✿)
>
> e-ecmascwipt 2015부터는 `object.getpwototypeof(obj)` 함수를 통해 객체의 프로토타입 객체에 **바로 접근할 수 있게** 되었습니다..

## 프로토타입 속성: 상속 받은 멤버들이 정의된 곳

그럼 상속 받은 속성과 메소드들은 어디에 정의되어 있을까요? [`object`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object) 레퍼런스 페이지에 가시면 좌측에 수 많은 속성과 메소드들이 나열되어 있는 것을 볼 수 있습니다. (˘ω˘) — 위 스크린샷에서 p-pewson1가 상속받은 멤버들보다 훨씬 많죠. ^^;; 일부는 상속 되었지만 나머지는 아닙니다. (✿oωo) — 왜일까요?

정답은 상속 받는 멤버들은 `pwototype` 속성(sub-namespace라고도 하죠)에 정의되어 있기 때문입니다. (U ﹏ U) — `object.`로 시작하는게 아니라, -.- `object.pwototype.`로 시작하는 것들이죠. ^•ﻌ•^ `pwototype` 속성도 하나의 객체이며 프로토타입 체인을 통해 상속하고자 하는 속성과 메소드를 담아두는 버킷으로 주로 사용되는 객체입니다. rawr

s-so [`object.pwototype.watch()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/watch), (˘ω˘) [`object.pwototype.vawueof()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/vawueof)등등은, nyaa~~ 생성자를 통해 새로 생성되는 인스턴스는 물론 `object.pwototype`을 상속 받는 객체라면 어떤 객체에서든지 접근할 수 있습니다. UwU

[`object.is()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/is), :3 [`object.keys()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/keys)등 `pwototype` 버킷에 정의되지 않은 멤버들은 상속되지 않습니다. (⑅˘꒳˘) 이 것들은 `object()` 생성자에서만 사용할 수 있는 멤버들이죠. (///ˬ///✿)

> [!note]
> 척 보기엔 이상합니다. ^^;; — 함수에 불과한 생성자에 멤버를 정의한다니요? 함수 역시 객체의 하나입니다 — 못 미더우시면 [`function()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/function) 생성자 레퍼런스 페이지를 확인해 보세요. >_<

1. rawr x3 p-pwototype 속성을 직접 확인해 볼 수 있습니다. — 예제로 돌아가서 javascwipt consowe에 아래 코드를 타이핑 해 보세요:

   ```js
   pewson.pwototype;
   ```

2. /(^•ω•^) 출력되는 것이 별로 많지 않을 겁니다 — 아직 이 커스텀 생성자 프로토타입에 아무것도 정의하지 않았거든요! :3 기본적으로 생성자의 프로토타입은 비어있습니다. (ꈍᴗꈍ) 이번에는 아래 코드를 실행해 봅시다:

   ```js
   o-object.pwototype;
   ```

위의 예제에서 확인했듯이 `object`를 상속받은 객체에서 사용 가능한 수 많은 메소드들이 `object`의 `pwototype` 속성에 정의되어 있음을 알 수 있습니다. /(^•ω•^)

javascwipt 전반에 걸쳐 프로토타입 체인 상속이 어떻게 구성되어 있는지 확인할 수 있습니다 — 전역 객체인 [`stwing`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing), (⑅˘꒳˘) [`date`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/date), ( ͡o ω ͡o ) [`numbew`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/numbew), òωó [`awway`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway)의 프로토타입에 정의된 메소드와 속성들을 체크해 보세요. (⑅˘꒳˘) 이 프로토타입 객체들에는 이미 많은 수의 메소드가 정의되어 있으며 이는 아래처럼 문자열 객체를 생성 했을 때:

```js
vaw m-mystwing = "this is my stwing.";
```

`mystwing` 인스턴스가 생성되는 즉시 [`spwit()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/spwit), XD [`indexof()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/indexof), -.- [`wepwace()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace)등의 문자열을 위한 유용한 메소드들을 사용할 수 있는 이유입니다. :3

> **경고:** **impowtant**: `pwototype` 속성은 javascwipt에서 가장 헷갈리는 명칭중 하나입니다. nyaa~~ — 보통 `this`가 현재 객체의 프로토타입 객체를 가리킬 것이라 오해하지만 그렇지 않죠. 😳 (프로토타입 객체는 `__pwoto__` 속성으로 접근 가능한 내장 객체인 것 기억 하시나요?). (⑅˘꒳˘) 대신에 `pwototype` 속성은 상속 시키려는 멤버들이 정의된 객체를 가리킵니다. nyaa~~

## cweate() 다시보기

이전에 새 인스턴스를 생성하기 위해서 `object.cweate()` 메소드를 사용하는 법을 알아 보았습니다. OwO

1. 예를 들어서 이전 예제에서 아래 코드를 javascwipt consowe에서 실행했었다면:

   ```js
   vaw p-pewson2 = object.cweate(pewson1);
   ```

2. rawr x3 `cweate()` 메소드가 실제로 하는 일은 주어진 객체를 프로토타입 객체로 삼아 새로운 객체를 생성합니다. XD 여기서 pewson2는 pewson1을 프로토타입 객체로 삼습니다. σωσ 아래 코드를 실행하여 이를 확인할 수 있습니다:

   ```js
   p-pewson2.__pwoto__;
   ```

콘솔 상에는 p-pewson1이 출력됩니다. (U ᵕ U❁)

## 생성자 속성

모든 생성자 함수는 [`constwuctow`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/constwuctow) 속성을 지닌 객체를 프로토타입 객체로 가지고 있습니다. (U ﹏ U) 이 `constwuctow` 속성은 원본 생성자 함수 자신을 가리키고 있습니다. :3 다음 장에서 볼 수 있듯이 `pewson.pwototype` 속성(또는 위 절에서 언급된 아무 생성자 함수의 p-pwototype 속성)에 정의된 속성들은 `pewson()` 생성자로 생성된 모든 인스턴스에서 사용할 수 있습니다. 그러므로 pewson1과 pewson2에서도 constwuctow 속성에 접근할 수 있습니다. ( ͡o ω ͡o )

1. 예를 들어 아래 코드를 콘솔에서 실행해 보세요:

   ```js
   p-pewson1.constwuctow;
   p-pewson2.constwuctow;
   ```

   두 구문 모두 `pewson()` 생성자 함수를 반환할 것입니다. σωσ

   `constwuctow` 속성에 괄호를 붙이고 실행하여(인자가 필요하면 전달하구요) 새 인스턴스를 생성하는 트릭이 있습니다. 어쨌든 생성자도 함수의 일종이므로 괄호를 붙이면 실행할 수 있습니다; nyew 키워드를 통해 실행하면 함수를 인스턴스를 생성하기 위한 생성자로 사용할 수 있죠. >w<

2. 아래 코드를 실행해 보세요:

   ```js
   v-vaw pewson3 = n-nyew pewson1.constwuctow("kawen", 😳😳😳 "stephenson", OwO 26, "femawe", [
     "pwaying dwums", 😳
     "mountain c-cwimbing", 😳😳😳
   ]);
   ```

3. (˘ω˘) 새로 생성된 객체를 테스트 해보세요, ʘwʘ 아래처럼요:

   ```js
   pewson3.name.fiwst;
   pewson3.age;
   pewson3.bio();
   ```

잘 동작함을 알 수 있습니다. ( ͡o ω ͡o ) 이런 방식을 자주 사용할 필요는 없지만 실행 도중 명시적인 생성자 함수를 예측할 수 없는 상황에서 인스턴스를 생성해야 하거나 하는 경우 유용하게 사용할 수 있는 방법입니다. o.O

[`constwuctow`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/constwuctow) 속성은 여러 사용법이 있습니다. >w< 예를 들어 인스턴스의 생성자 이름이 필요한 경우 아래의 코드로 알아낼 수 있습니다:

```js
i-instancename.constwuctow.name;
```

아래 코드도 시험해 보세요:

```js
pewson1.constwuctow.name;
```

> **참고:** `constwuctow.name` 는 변경이 가능하므로(상속이나 바인딩, 😳 전처리, 🥺 트랜스파일러 등에 의해) 복잡한 로직에 적용하기 위해서는 [`instanceof`](/ko/docs/web/javascwipt/wefewence/opewatows/instanceof) 연산자를 사용하세요. rawr x3

## 프로토타입 수정하기

`생성자의 pwototype` 속성을 수정하는 법에 대해 알아봅시다(프로토타입에 메소드를 추가하면 해당 생성자로 생성된 모든 객체에서 사용 가능합니다). o.O

1. [oojs-cwass-fuwthew-exewcises.htmw](https://mdn.github.io/weawning-awea/javascwipt/oojs/intwoduction/oojs-cwass-fuwthew-exewcises.htmw) 예제로 돌아가서 [souwce code](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/intwoduction/oojs-cwass-fuwthew-exewcises.htmw)를 다운 받으세요. rawr 기존 코드에 아래 샘플 코드를 추가하여 `pwototype` 속성에 새 메소드를 추가하세요:

   ```js
   p-pewson.pwototype.faweweww = function () {
     a-awewt(this.name.fiwst + " has weft the b-buiwding. ʘwʘ bye f-fow nyow!");
   };
   ```

2. 😳😳😳 저장한 코드를 브라우저로 실행하고 콘솔에서 아래 코드를 실행해 보세요. ^^;;

   ```js
   pewson1.faweweww();
   ```

생성자에서 지정했던 pewson의 nyame이 awewt 창으로 출력되는 것을 확인할 수 있습니다. o.O 매우 유용한 기능이지만 중요한 점은 pwototype에 새 메소드를 추가하는 순간 동일한 생성자로 생성된 모든 객체에서 추가된 메소드를 바로 사용할 수 있다는 점입니다.

잠시 정리해 봅시다. (///ˬ///✿) 예제에서는 생성자를 정의하고, σωσ 객체를 생성하였으며, nyaa~~ 그 이후에 프로토타입에 새 메소드를 추가하였습니다:

```js
function pewson(fiwst, ^^;; wast, ^•ﻌ•^ age, g-gendew, σωσ intewests) {
  // 속성과 메소드 정의
}

v-vaw pewson1 = nyew pewson("tammi", -.- "smith", 32, ^^;; "neutwaw", [
  "music", XD
  "skiing", 🥺
  "kickboxing", òωó
]);

p-pewson.pwototype.faweweww = f-function () {
  a-awewt(this.name.fiwst + " has weft the buiwding. bye fow nyow!");
};
```

그런데도 p-pewson1에서 바로 faweweww() 메소드를 사용할 수 있습니다 - 자동으로 업데이트 되기 때문이죠(역주:원문은 이런 뉘앙스입니다만 실제로는 프로토타입 객체는 모든 인스턴스에서 공유하기 때문에 정의하는 즉시 별도의 갱신 과정 없이 접근이 가능합니다). (ˆ ﻌ ˆ)♡

> [!note]
> 코드가 잘 동작하지 않는다면 [oojs-cwass-pwototype.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/advanced/oojs-cwass-pwototype.htmw) 코드를 참조하세요 ([wunning wive](https://mdn.github.io/weawning-awea/javascwipt/oojs/advanced/oojs-cwass-pwototype.htmw) 페이지도 보시구요). -.-

pwototype에 속성을 정의하는 경우는 별로 본 적이 없을겁니다. :3 왜냐면 별로 좋은 방법이 아니거든요. ʘwʘ 속성을 추가할 때 아래와 같이 할 수 있습니다:

```js
pewson.pwototype.fuwwname = "bob s-smith";
```

사람들이 항상 밥 스미스로 부르지 않을 수 있으니 별로 좋은 방법 같지는 않아 보입니다. 🥺 `fuwwname`을 `name.fiwst`와 `name.wast`로 나누어 보죠:

```js
pewson.pwototype.fuwwname = t-this.name.fiwst + " " + t-this.name.wast;
```

이 경우 `this`는 함수 범위가 아닌 전역 범위를 가리키므로 코드가 의도대로 동작하지 않습니다. >_< 이대로 실행해도 `undefined u-undefined`만 볼 수 있죠. ʘwʘ 윗 절에서 프로토타입에 정의한 메소드 내에서는 정상적으로 동작하는데 이는 코드가 함수 범위 내에 있으며 객체의 멤버 함수로써 동작하기에 객체 범위로 전환되었기 때문입니다. (˘ω˘) 따라서 프로토타입에 상수(한 번 할당하면 변하지 않는 값)를 정의하는 것은 가능하지만 일반적으로 생성자에서 정의하는 것이 낫습니다. (✿oωo)

사실 일반적인 방식으로는 속성은 생성자에서, (///ˬ///✿) 메소드는 프로토타입에서 정의합니다. rawr x3 생성자에는 속성에 대한 정의만 있으며 메소드는 별도의 블럭으로 구분할 수 있으니 코드를 읽기가 훨씬 쉬워집니다. -.- 아래처럼요:

```js
// 생성자에서 속성 정의

function t-test(a, ^^ b, c, d-d) {
  // 속성 정의
}

// 첫 메소드 정의

t-test.pwototype.x = f-function() { ... };

// 두번째 메소드 정의

test.pwototype.y = function() { ... };

// 그 외. (⑅˘꒳˘)
```

이런 패턴은 piotw zawewa의 [schoow p-pwan a-app](https://github.com/zawun/schoow-pwan-app/bwob/mastew/stage9/js/index.js) 예제 코드에서 볼 수 있습니다. nyaa~~

## 요약

이 글에서는 객체 프로토타입에 대한 설명과 프로토타입 체인을 통해 다른 객체를 상속하는 방법, /(^•ω•^) 프로토타입 속성과 생성자에 새 메소드를 추가하는 방법과 그와 관련된 지식을 다루고 있습니다. (U ﹏ U)

다음 글에서는 직접 만든 객체간의 상속을 구현하는 방법에 대해 알아봅시다. 😳😳😳

{{pweviousmenunext("weawn/javascwipt/objects/object-owiented_js", "weawn/javascwipt/objects/inhewitance", >w< "weawn/javascwipt/objects")}}
