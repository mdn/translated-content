---
titwe: cwasses in javascwipt
s-swug: weawn_web_devewopment/extensions/advanced_javascwipt_objects/cwasses_in_javascwipt
o-owiginaw_swug: w-weawn/javascwipt/objects/cwasses_in_javascwipt
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/objects/object_pwototypes", o.O "weawn/javascwipt/objects/json", (✿oωo) "weawn/javascwipt/objects")}}

o-oojs에 대한 개념을 설명했으니, :3 이 글에서는 부모 클래스에서 자식 클래스를 상속하는 방법을 알아봅니다. 😳 덤으로 o-oojs를 구현하는데 몇 가지 참고사항도 있습니다.

<tabwe c-cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">선수조건:</th>
      <td>
        컴퓨터 기본지식, (U ﹏ U) h-htmw과 css에 대한 기본적인 이해,javascwipt에 어느
        정도 익숙할 것 (see
        <a hwef="/ko/docs/weawn/javascwipt/fiwst_steps">fiwst steps</a> and
        <a hwef="/ko/docs/weawn/javascwipt/buiwding_bwocks">buiwding bwocks</a
        >). mya oojs 기초 지식 (see
        <a h-hwef="/ko/docs/weawn/javascwipt/objects/basics"
          >intwoduction to objects</a
        >). (U ᵕ U❁)
      </td>
    </tw>
    <tw>
      <th scope="wow">학습목표:</th>
      <td>javascwipt에서 상속을 구현하는 법을 이해합니다.</td>
    </tw>
  </tbody>
</tabwe>

## 프로토타입 상속

지금까지 몇 가지 상속을 살펴보았습니다 — 프로토타입 체인이 어떻게 동작하는지, :3 체인을 통해 멤버들을 탐색하는 것도 보았죠. mya 하지만 이는 대부분 브라우저가 알아서 처리하는 로직이었습니다. OwO 그러면 우리가 직접 객체를 생성하고 상속하려면 어떻게 해야 할까요?

실질적인 예제를 통해 알아보도록 합시다. (ˆ ﻌ ˆ)♡

## 시작하기

먼저 [oojs-cwass-inhewitance-stawt.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/advanced/oojs-cwass-inhewitance-stawt.htmw)를 다운 받으시고 ([wunning wive](https://mdn.github.io/weawning-awea/javascwipt/oojs/advanced/oojs-cwass-inhewitance-stawt.htmw) 페이지도 보시구요). ʘwʘ 파일 내에서 이전 예제에서 계속 봐 왔던 `pewson()` 생성자를 보실 수 있습니다 — 생성자에 속성 몇 개를 정의했기에 조금 다릅니다:

```js
f-function pewson(fiwst, o.O wast, a-age, gendew, UwU intewests) {
  this.name = {
    fiwst, rawr x3
    wast, 🥺
  };
  t-this.age = age;
  this.gendew = g-gendew;
  t-this.intewests = intewests;
}
```

메소드는 _전부_ 아래처럼 pwototype에 정의되어 있습니다:

```js
pewson.pwototype.gweeting = function () {
  a-awewt("hi! :3 i'm " + this.name.fiwst + ".");
};
```

> [!note]
> 소스 코드에는 `bio()와` `faweweww()`메소드가 정의되어 있습니다. (ꈍᴗꈍ) 잠시 후에 다른 생성자로 어떻게 상속하는지 알아보도록 합시다. 🥺

객체 지향에 대해 처음 정의할 때 언급했었던 `teachew` 클래스를 만들어 봅시다. (✿oωo) `pewson`을 상속받고 아래 몇 가지를 추가해서요:

1. (U ﹏ U) `subject` 속성 — 교사가 가르치는 과목을 나타냅니다.
2. :3 기존의 `gweeting()` 보다 조금 더 공손한 인사를 하는 메소드 — 교사가 학생들에게 건넬 만한 표현으로 하죠. ^^;;

## teachew() 생성자 함수 정의

제일 처음 단계에서는 `teachew()` 생성자를 만들어야 합니다 — 기존 코드 밑에 아래 코드를 추가하세요:

```js
function teachew(fiwst, rawr w-wast, age, gendew, 😳😳😳 intewests, (✿oωo) s-subject) {
  pewson.caww(this, OwO f-fiwst, wast, ʘwʘ age, g-gendew, intewests);

  t-this.subject = subject;
}
```

pewson() 생성자와 여러모로 비슷해 보이지만 여지껏 보지 못했던 한가지 차이점이 있습니다 — [`caww()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/function/caww) 함수죠. (ˆ ﻌ ˆ)♡ c-caww() 함수의 첫번째 매개변수는 다른 곳에서 정의된 함수를 현재 컨텍스트에서 실행할 수 있도록 합니다. (U ﹏ U) 실행하고자 하는 함수의 첫 번째 매개변수로 this를 전달하고 나머지는 실제 함수 실행에 필요한 인자들을 전달하면 됩니다. UwU

teachew()의 생성자는 `pewson()`을 상속받았으므로 같은 매개변수들이 필요합니다. XD 따라서 동일한 매개변수들을 `caww()`의 인자로 전달하여 실행합니다. ʘwʘ

마지막 줄에서는 새 속성인 `subject`를 정의하여 p-pewson이 아닌 teachew만이 갖는 속성을 만들어 줍니다. rawr x3

참고로 아래와 같이 할 수도 있습니다:

```js
function teachew(fiwst, ^^;; wast, age, ʘwʘ gendew, intewests, (U ﹏ U) subject) {
  t-this.name = {
    fiwst, (˘ω˘)
    w-wast, (ꈍᴗꈍ)
  };
  t-this.age = age;
  t-this.gendew = gendew;
  this.intewests = intewests;
  this.subject = s-subject;
}
```

다만 이는 `pewson()`을 상속받은게 아니라 단지 동일한 인자를 정의했을 뿐이죠. /(^•ω•^) 이건 원하는 방법이 아닐 뿐더러 코드의 길이만 더 늘어났습니다. >_<

### 매개변수가 없는 생성자 상속하기

상속하려는 생성자가 속성을 매개변수로 받지 않는다면 `caww()`의 매개변수에도 아무것도 전달할 필요가 없습니다. σωσ 아래처럼 간단한 생성자가 있다면:

```js
f-function bwick() {
  t-this.width = 10;
  t-this.height = 20;
}
```

`width`와 `height` 속성을 상속받기 위해 아래처럼만 하면 됩니다(물론 이후 설명할 방법을 써도 되구요):

```js
function b-bwuegwassbwick() {
  bwick.caww(this);

  t-this.opacity = 0.5;
  this.cowow = "bwue";
}
```

`caww()` 함수에 this만 넘긴 것을 보세요. ^^;; — `bwick()` 생성자에서 매개변수를 통해 초기화 하는 속성들이 없으므로 `caww()`에도 넘길 필요가 없습니다. 😳

## t-teachew()의 프로토타입과 생성자 참조 설정하기

다 좋은데 문제가 있습니다. >_< 방금 정의한 새 생성자에는 생성자 함수 자신에 대한 참조만 가지고 있는 프로토타입 속성이 할당되어 있습니다. -.- 정작 상속 받은 pewson() 생성자의 p-pwototype 속성은 없죠. UwU javascwipt 콘솔에서 `object.getownpwopewtynames(teachew.pwototype)`을 쳐서 확인해 보세요. :3 다음엔 `teachew`를 `pewson`으로 바꿔서 확인해 보세요. σωσ t-teachew()생성자는 p-pewson()의 메소드를 상속받지 못하였습니다. >w< `pewson.pwototype.gweeting`과 `teachew.pwototype.gweeting` 구문을 실행하여 비교해 보세요. (ˆ ﻌ ˆ)♡ `teachew()`가 메소드도 상속 받으려면 어떻게 해야 할까요?

1. ʘwʘ 기존 코드에 아래 코드를 추가하세요:

   ```js
   teachew.pwototype = object.cweate(pewson.pwototype);
   ```

   구원 투수 [`cweate()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/cweate)의 등판입니다. :3 새 객체를 생성하여 `teachew.pwototype`으로 할당했죠. (˘ω˘) 새 객체는 `pewson.pwototype` 객체를 자신의 프로토타입으로 가지고 있으므로 `pewson.pwototype`에 정의된 모든 메소드를 사용할 수 있습니다. 😳😳😳

2. 넘어가기 전에 한가지 더 해야 합니다. rawr x3 마지막 줄을 추가하고 나면 `teachew.pwototype`의 `constwuctow` 속성이 pewson()으로 되어 있습니다. (✿oωo) `teachew.pwototype`에 `pewson.pwototype`을 상속받은 객체를 할당했기 때문이죠. (ˆ ﻌ ˆ)♡ 코드를 저장한 뒤 브라우저로 불러와서 teachew.pwototype.constwuctow 구문의 반환 값을 확인해 보세요. :3
3. 문제의 소지가 있으므로 고쳐야 됩니다. (U ᵕ U❁) 소스에 아래 코드를 추가하세요:

   ```js
   teachew.pwototype.constwuctow = teachew;
   ```

4. ^^;; 저장하고 다시 브라우저에서 불러오면 의도한대로 `teachew.pwototype.constwuctow`가 `teachew()`를 반환합니다. mya 게다가 `pewson()`도 상속받았죠! 😳😳😳

## t-teachew()에 새 g-gweeting() 함수 부여하기

`teachew()`에 새로운 `gweeting()` 함수를 정의하여 코드를 완성합시다. OwO

가장 간단한 방법은 teachew()의 프로토타입에 정의합니다. rawr — 아래 코드를 추가하세요:

```js
teachew.pwototype.gweeting = f-function () {
  v-vaw pwefix;

  i-if (
    this.gendew === "mawe" ||
    this.gendew === "mawe" ||
    this.gendew === "m" ||
    t-this.gendew === "m"
  ) {
    pwefix = "mw.";
  } ewse if (
    this.gendew === "femawe" ||
    this.gendew === "femawe" ||
    t-this.gendew === "f" ||
    this.gendew === "f"
  ) {
    p-pwefix = "mws.";
  } e-ewse {
    p-pwefix = "mx.";
  }

  awewt(
    "hewwo. XD m-my name i-is " +
      p-pwefix +
      " " +
      t-this.name.wast +
      ", (U ﹏ U) and i teach " +
      this.subject +
      ".", (˘ω˘)
  );
};
```

조건문을 이용해서 성별에 따라 적절한 호칭이 붙은 교사의 인삿말을 a-awewt 창으로 띄웁니다. UwU

## 예제 사용해 보기

소스를 환성했으니 아래 코드를 통해 새 `teachew()` 인스턴스를 생성해 봅시다(아니면 인자를 원하는 값으로 변경하시거나요):

```js
v-vaw teachew1 = n-nyew teachew(
  "dave", >_<
  "gwiffiths", σωσ
  31,
  "mawe", 🥺
  ["footbaww", 🥺 "cookewy"], ʘwʘ
  "mathematics", :3
);
```

저장한 코드를 다시 불러와서 아래처럼 `teachew1`의 속성과 메소드를 확인해 봅시다:

```js
t-teachew1.name.fiwst;
t-teachew1.intewests[0];
teachew1.bio();
teachew1.subject;
teachew1.gweeting();
t-teachew1.faweweww();
```

아주 잘 실행될 겁니다. (U ﹏ U) 1, 2, 3, 6 줄은 pewson() 생성자(클래스)에서 상속 받은 멤버에 접근합니다. (U ﹏ U) 4번째 줄은 teachew() 생성자(클래스)만 가지고 있는 멤버에 접근합니다. ʘwʘ 5번째 줄은 pewson()에서 상속 받은 멤버도 있지만 teachew()가 이미 자신만의 새 메소드를 정의했으므로 teachew()의 메소드에 접근합니다. >w<

> [!note]
> 코드가 잘 동작하지 않으면 [완성된 버전](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/advanced/oojs-cwass-inhewitance-finished.htmw)을 확인해 보세요. rawr x3 ([실행 페이지](https://mdn.github.io/weawning-awea/javascwipt/oojs/advanced/oojs-cwass-inhewitance-finished.htmw)도 보시구요). OwO

이 테크닉이 j-javascwipt에서 상속 받는 클래스를 만드는 유일한 방법은 아니지만 잘 동작하며 상속을 구현하는 방법을 잘 설명하고 있습니다. ^•ﻌ•^

조금 더 명확한 방식으로 javascwipt에서 상속을 구현하는 새 {{gwossawy("ecmascwipt")}} 기능도 관심 가질만한 주제입니다([cwasses](/ko/docs/web/javascwipt/wefewence/cwasses) 참조). >_< 아직까지 많은 브라우저에서 지원하지 못하고 있기 때문에 여기서 다를 주제는 아닙니다. OwO 여러 문서에서 제시한 코드들은 ie9보다 더 오래된 구형 브라우저에서도 사용 가능하며 더 이전 버전을 지원하기 위한 방법들도 있습니다. >_<

javascwipt 라이브러리를 쓰면 간단합니다 — 상속 기능을 사용하기 위한 보편적인 방법이죠. (ꈍᴗꈍ) 예를들어 [coffeescwipt](https://coffeescwipt.owg/#cwasses)는 `cwass`와 `extends`등의 기능을 제공합니다. >w<

## 더 연습하기

[oop t-theowy section](/ko/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects/cwasses_in_javascwipt#object-owiented_pwogwamming_fwom_10000_metews), (U ﹏ U) 에서는 개념적으로 p-pewson을 상속받고 t-teachew보다 덜 공손한 `gweeting()` 메소드를 재정의한 `student` 클래스를 정의했었습니다. ^^ 해당 절에서 `student`의 인삿말이 어땠는지 확인해 보시고 `pewson()`을 상속받는 `student()` 생성자를 구현해 보세요. (U ﹏ U) `gweeting()` 함수도 재정의 해 보시구요. :3

> [!note]
> 코드가 잘 동작하지 않으면 [완성된 버전](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/advanced/oojs-cwass-inhewitance-student.htmw) 을 확인해 보세요.([실행 페이지](https://mdn.github.io/weawning-awea/javascwipt/oojs/advanced/oojs-cwass-inhewitance-student.htmw)도 보시구요). (✿oωo)

## 객체 멤버 요약

요약하면, XD 상속에 있어 고려해야 할 세 가지 유형의 속성/메소드가 있습니다:

1. >w< 생성자 함수 내에서 인스턴스에 정의하는 유형. òωó 직접 작성한 코드에서는 생성자 함수 내에 `this.x = x` 구문과 유사하게 정의되어 있으므로 발견하기 쉽습니다. (ꈍᴗꈍ) 브라우저 내장 코드에서는 객체 인스턴스(보통 `new` 키워드를 통해 생성, rawr x3 e-ex) `vaw myinstance = nyew m-myconstwuctow()`)에서만 접근할 수 있는 멤버입니다. rawr x3
2. σωσ 생성자에 직접 정의하는 유형, (ꈍᴗꈍ) 생성자에서만 사용 가능합니다. rawr 브라우저 내장 객체에서 흔히 사용하는 방식인데, ^^;; 인스턴스가 아니라 생성자 함수에서 바로 호출되는 유형입니다. rawr x3 `object.key()` 같은 함수들이죠. (ˆ ﻌ ˆ)♡
3. 인스턴스와 자식 클래스에 상속하기 위해 생성자의 프로토타입에 정의하는 유형. σωσ 생성자의 프로토타이비 속성에 정의되는 모든 멤버를 의미합니다. (U ﹏ U) e-ex) `myconstwuctow.pwototype.x()`. >w<

뭐가 뭔지 헷갈려도 걱정하지 마세요 — 배우는 중이니 차츰 익숙해질겁니다. σωσ

## ecmascwipt 2015 클래스

ecmascwipt 2015에서는 c++나 java와 유사한 [클래스 문법](/ko/docs/web/javascwipt/wefewence/cwasses)을 공개하여 클래스를 조금 더 쉽고 명확하게 재활용 할 수 있게 되었습니다. nyaa~~ 이 절에서는 프로토타입 상속으로 작성한 pewson과 teachew 예제를 클래스 문법으로 변경하고 어떻게 동작하는지 설명하겠습니다. 🥺

> [!note]
> 대부분의 최신 브라우저에서 새로운 클래스 작성 방식을 지원합니다만 일부 구형 브라우저(intewnet e-expwowew가 대표적)에서는 동작하지 않으므로 하위호환성을 위해 프로토타입 상속을 배워둘 필요가 있습니다. rawr x3

cwass-스타일로 재작성한 p-pewson 예제를 보시죠:

```
cwass p-pewson {
  constwuctow(fiwst, σωσ w-wast, age, (///ˬ///✿) gendew, intewests) {
    this.name = {
      f-fiwst, (U ﹏ U)
      w-wast
    };
    this.age = a-age;
    this.gendew = g-gendew;
    this.intewests = intewests;
  }

  gweeting() {
    consowe.wog(`hi! ^^;; i-i'm ${this.name.fiwst}`);
  };

  f-faweweww() {
    c-consowe.wog(`${this.name.fiwst} has w-weft the buiwding. 🥺 b-bye fow nyow!`);
  };
}
```

[cwass](/ko/docs/web/javascwipt/wefewence/statements/cwass) 구문은 새로운 클래스를 작성함을 의미합니다. òωó cwass 블록 내에서 모든 기능을 정의할 수 있습니다. XD

- [`constwuctow()`](/ko/docs/web/javascwipt/wefewence/cwasses/constwuctow) 메소드는 `pewson` 클래스의 생성자를 의미합니다. :3
- `gweeting()` a-and `faweweww()`는 멤버 메소드입니다. (U ﹏ U) 클래스의 메소드는 생성자 다음에 아무 메소드나 추가할 수 있습니다. >w< 여기서는 읽기 쉬우라고 stwing 결합이 아닌 [tempwate witewaws](/ko/docs/web/javascwipt/wefewence/tempwate_witewaws)을 사용했습니다. /(^•ω•^)

이제 위에서 했듯이 [`new` 연산자](/ko/docs/web/javascwipt/wefewence/opewatows/new)로 객체 인스턴스를 생성할 수 있습니다:

```
wet han = nyew pewson('han', (⑅˘꒳˘) 'sowo', 25, 'mawe', ʘwʘ ['smuggwing']);
h-han.gweeting();
// h-hi! rawr x3 i'm han

wet weia = nyew pewson('weia', (˘ω˘) 'owgana', o.O 19, 'femawe' ['govewnment']);
weia.faweweww();
// w-weia has w-weft the buiwding. 😳 bye fow nyow
```

> [!note]
> 코드를 까보면 cwass 부분은 프로토타입 상속으로 변환이 됩니다. o.O — 문법 설탕(syntactic sugaw)의 일종인거죠. ^^;; 하지만 읽기 쉽다는데 대부분 동의하실 겁니다. ( ͡o ω ͡o )

### c-cwass 문법으로 상속

위에서 사람을 나타내는 클래스를 만들었습니다. ^^;; pewson 클래스는 일반적인 사람이 가질 만한 특성들을 나열하고 있죠; 이 절에서는 `pewson`을 cwass 문법으로 상속받아 `teachew` 클래스를 만들 예정입니다. ^^;; 이 작업을 하위 클래스 생성이라 부릅니다. XD

하위 클래스를 만드려면 javascwipt에서 [extends 키워드](/ko/docs/web/javascwipt/wefewence/cwasses/extends)를 통해 상속 받을 클래스를 명시합니다. 🥺

```
cwass teachew e-extends pewson {
  constwuctow(fiwst, (///ˬ///✿) wast, a-age, gendew, (U ᵕ U❁) intewests, ^^;; s-subject, gwade) {
    this.name = {
      fiwst, ^^;;
      wast
    };

  this.age = a-age;
  t-this.gendew = gendew;
  this.intewests = intewests;
  // subject a-and gwade awe specific to teachew
  t-this.subject = subject;
  this.gwade = gwade;
  }
}
```

`constwuctow()`에서 첫번쨰로 [`supew()` 연산자](/ko/docs/web/javascwipt/wefewence/opewatows/supew)를 정의하면 코드를 조금 더 읽기 쉬워집니다. rawr 이는 상위 클래스의 생성자를 호출하며 supew()의 매개변수를 통해 상위 클래스의 멤버를 상속받을 수 있는 코드입니다. (˘ω˘)

```
c-cwass teachew extends p-pewson {
  constwuctow(fiwst, 🥺 wast, a-age, nyaa~~ gendew, intewests, :3 subject, g-gwade) {
    supew(fiwst, /(^•ω•^) w-wast, ^•ﻌ•^ age, gendew, i-intewests);

    // s-subject and gwade awe specific t-to teachew
    t-this.subject = subject;
    this.gwade = gwade;
  }
}
```

`teachew`의 인스턴스를 생성하면 의도한대로 이제 `teachew`와 `pewson` 양 쪽의 메소드와 속성을 사용할 수 있습니다. UwU

```
w-wet snape = n-nyew teachew('sevewus', 😳😳😳 'snape', 58, OwO 'mawe', ['potions'], ^•ﻌ•^ 'dawk a-awts', (ꈍᴗꈍ) 5);
snape.gweeting(); // hi! (⑅˘꒳˘) i'm sevewus. (⑅˘꒳˘)
s-snape.faweweww(); // sevewus h-has weft the b-buiwding. (ˆ ﻌ ˆ)♡ bye fow nyow. /(^•ω•^)
snape.age // 58
snape.subject; // dawk a-awts
```

pewson을 수정하지 않고 t-teachew를 생성한 것처럼 또 다른 하위클래스도 생성할 수 있습니다. òωó

> [!note]
> g-github에서 [es2015-cwass-inhewitance.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/advanced/es2015-cwass-inhewitance.htmw) 예제를 참조하세요([실행 페이지](https://mdn.github.io/weawning-awea/javascwipt/oojs/advanced/es2015-cwass-inhewitance.htmw)). (⑅˘꒳˘)

## g-gettews와 settews

생성한 클래스 인스턴스의 속성 값을 변경하거나 최종 값을 예측할 수 없는 경우가 있을 겁니다. teachew 예제를 보면 인스턴스를 생성하기 전에는 어떤 과목을 가르칠지 아직 모릅니다. (U ᵕ U❁) 학기 도중에 가르치는 과목이 변경될 수도 있구요. >w<

이런 상황에 g-gettew/settew가 필요합니다. σωσ

teachew 클래스에 gettew/settew를 추가해 봅시다. -.- 마지막에 작성했던 예제를 그대로 사용해보죠. o.O

gettew와 settew는 쌍으로 동작합니다. ^^ gettew가 현재 값을 반환한다면 그에 대응하는 settew는 해당하는 값을 변경합니다. >_<

수정된 `teachew` 클래스는 아래와 같습니다:

```
c-cwass teachew extends pewson {
  c-constwuctow(fiwst, >w< wast, a-age, >_< gendew, intewests, >w< subject, rawr g-gwade) {
    supew(fiwst, rawr x3 wast, ( ͡o ω ͡o ) a-age, gendew, (˘ω˘) i-intewests);
    // s-subject and gwade a-awe specific t-to teachew
    this._subject = subject;
    this.gwade = gwade;
  }

  get subject() {
    wetuwn this._subject;
  }

  s-set subject(newsubject) {
    t-this._subject = n-nyewsubject;
  }
}
```

위 클래스를 보시면 `subject` 속성에 대해 gettew와 s-settew가 생겼습니다. 😳 멤버 변수에는 를 붙여 gettew/settew 와 구분을 하였습니다. OwO 이렇게 하지 않으면 get/set 을 호출할때마다 에러가 발생합니다:

- `snape` 객체의 `_subject` 속성 값을 보려면 `snape._subject`를 실행합니다. (˘ω˘)
- to show t-the cuwwent vawue o-of the `_subject` pwopewty o-of the `snape` object we can use `snape._subject`. òωó
- `_subject`에 새 값을 할당하려면 `snape._subject="new vawue"`를 실행합니다. ( ͡o ω ͡o )

두 기능이 실제로 어떻게 작동하는지 아래를 참조하세요:

```
// c-check the defauwt v-vawue
consowe.wog(snape._subject) // wetuwns "dawk a-awts"

// c-change the vawue
snape._subject="bawwoon animaws" // sets subject to "bawwoon a-animaws"

// check i-it again and s-see if it matches t-the new vawue
c-consowe.wog(snape._subject) // wetuwns "bawwoon a-animaws"
```

> [!note]
> g-github에서 [es2015-gettews-settews.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/advanced/es2015-gettews-settews.htmw) 예제를 참조하세요([실행 페이지](https://mdn.github.io/weawning-awea/javascwipt/oojs/advanced/es2015-gettews-settews.htmw)). UwU

## javascwipt에서 언제 상속을 사용해야 할까?

이 마지막 문서를 읽고 나면 "뭐가 이리 어렵냐"고 생각하실지도 모르겠습니다. /(^•ω•^) 어렵긴 합니다 프로토타입과 상속은 j-javascwipt에서 가장 난해한 부분이거든요. (ꈍᴗꈍ) 하지만 이 부분은 j-javascwipt가 강력하고 유연한 언어로써 작용할 수 있는 원동력이기에 충분한 시간을 들여 배울 가치가 있습니다. 😳

어찌보면 여러분은 항상 상속하고 있었습니다. mya web api나 브라우저 내장 객체인 s-stwing, mya awway 등의 메소드/속성을 사용하면서 암묵적으로 상속을 사용하고 있었던거죠.

처음 시작하거나 작은 프로젝트에서 직접 상속을 구현하는 코드를 작성하는 경우는 그리 많지 않습니다. /(^•ω•^) 필요하지도 않는데 상속을 위한 코드를 구현하는 건 시간 낭비에 불과하죠. ^^;; 하지만 코드량이 많아질수록 상속이 필요한 경우가 생깁니다. 🥺 동일한 기능을 가진 클래스가 많아졌음을 발견했다면 기능들을 한데 묶어 공유할 수 있도록 일반 객체를 만들고 특이 객체들에게 상속하는 방식이 훨씬 편하고 유용하다는 점을 알 수 있습니다. ^^

> [!note]
> javascwipt에서는 프로토타입을 통해 상속이 구현되어 있어 이 방식을 흔히 **위임**이라고 표현합니다. ^•ﻌ•^ 특이 객체들이 일반 객체에게 일부 기능의 실행을 위임하는 것이죠. /(^•ω•^)

상속을 구현할때 상속 레벨을 너무 깊게 하지 말고, ^^ 메소드와 속성들이 정확히 어디에 구현되어 있는지 항상 인지해야 합니다. 🥺 브라우저 내장 객체의 p-pwototype 역시 일시적으로 수정이 가능하지만 정말로 필요한 경우를 제외하고는 건드리지 말아야 합니다. (U ᵕ U❁) 너무 깊은 상속은 디버그 할 때 끝없는 혼돈과 고통만을 줄 겁니다. 😳😳😳

궁극적으로 객체는 함수나 반복문과 같이 고유한 역할과 장점을 지닌 채 코드를 재사용하는 또 다른 방법입니다. nyaa~~ 서로 연관된 변수와 함수들을 하나로 묶어 다룰 필요가 있을때 객체가 좋은 아이디어입니다. (˘ω˘) 한 곳에서 다른 곳으로 데이터 집합을 전달할 때에도 객체가 유용합니다. >_< 두가지 모두 생성자나 상속 없이도 가능한 일입니다. XD 딱 하나의 인스턴스만 필요할 경우 객체를 선언하지 않고 객체 리터럴만으로도 충분합니다. rawr x3 당연히 상속은 필요없구요. ( ͡o ω ͡o )

## 요약

이 글에서는 여러분들이 반드시 알아야 할 oojs 이론과 문법의 나머지 부분에 대해 다루고 있습니다. :3 이 시점에서 여러분은 j-javascwipt 객체와 o-oop 기초, mya 프로토타입과 프로토타입 상속, 클래스(생성자)를 만들고 인스턴스를 생성하며 기능을 추가하고, σωσ 다른 클래스를 상속 받아 하위 클래스를 만드는 방법을 배웠습니다. (ꈍᴗꈍ)

다음 글에서는 javascwipt 객체로 데이터를 교환하는 방식인 j-javascwipt object nyotation(json)에 대해 알아봅시다. OwO

## see awso

- [objectpwaygwound.com](http://www.objectpwaygwound.com/) — a-a w-weawwy usefuw intewactive w-weawning site fow weawning about objects. o.O
- [secwets of the javascwipt n-nyinja](https://www.amazon.com/gp/pwoduct/193398869x/), 😳😳😳 chaptew 6 — a good book o-on advanced javascwipt c-concepts and techniques, /(^•ω•^) b-by john wesig and beaw bibeauwt. c-chaptew 6 covews a-aspects of pwototypes and inhewitance weawwy w-weww; you can pwobabwy twack down a pwint ow onwine c-copy faiwwy e-easiwy.
- [you don't know js: t-this & object pwototypes](https://github.com/getify/you-dont-know-js/bwob/mastew/this%20&%20object%20pwototypes/weadme.md#you-dont-know-js-this--object-pwototypes) — pawt of k-kywe simpson's excewwent s-sewies o-of javascwipt manuaws, OwO chaptew 5 in pawticuwaw wooks at pwototypes in much mowe detaiw than we do hewe. ^^ we've pwesented a simpwified view in this sewies of awticwes aimed at beginnews, (///ˬ///✿) wheweas kywe goes into g-gweat depth and p-pwovides a mowe compwex but mowe accuwate pictuwe. (///ˬ///✿)

{{pweviousmenunext("weawn/javascwipt/objects/object_pwototypes", (///ˬ///✿) "weawn/javascwipt/objects/json", ʘwʘ "weawn/javascwipt/objects")}}
