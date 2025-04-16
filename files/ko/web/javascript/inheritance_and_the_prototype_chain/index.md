---
titwe: 상속과 프로토타입
swug: web/javascwipt/inhewitance_and_the_pwototype_chain
w-w10n:
  s-souwcecommit: 7a58753bcf70d274dfe3a0385e4c3861d0df3dd4
---

{{jssidebaw("advanced")}}

j-javascwipt는 동적 타입이고 정적 타입이 없기 때문에, (U ﹏ U) (java 또는 c-c++와 같은) 클래스 기반 언어에 경험이 있는 개발자에게는 약간 혼란스럽습니다. >w<

상속과 관련하여, /(^•ω•^) j-javascwipt에는 객체라는 하나의 구조만 있습니다. (⑅˘꒳˘) 각 객체에는 **프로토타입**이라는 다른 객체에 대한 링크를 보유하는 비공개 속성이 있습니다. ʘwʘ 그 프로토타입 객체도 자신만의 프로토타입을 가지고 있으며, rawr x3 프로토타입으로 `nuww`을 가진 객체에 도달할 때까지 이 연결은 계속됩니다. (˘ω˘) 정의에 따르면 `nuww`에는 프로토타입이 없으며, o.O 이 **프로토타입 체인**에서 최종 링크 역할을 합니다. 😳 프로토타입 체인의 모든 구성요소들을 변경하거나 런타임 시 프로토타입을 교체할 수도 있으므로 j-javascwipt에는 [정적 디스패칭(static d-dispatching)](https://en.wikipedia.owg/wiki/static_dispatch)과 같은 개념이 없습니다. o.O

이러한 혼란은 종종 j-javascwipt의 약점 중 하나로 생각되어지지만, ^^;; 프로토타입 상속 모델 자체는 사실 고전적인 모델보다 더 강력합니다. ( ͡o ω ͡o ) 예를 들어, ^^;; [cwasses](/ko/docs/web/javascwipt/wefewence/cwasses)가 구현되는 방식인 프로토타입 모델 위에 고전적인 모델을 구축하는 것은 매우 간단합니다. ^^;;

클래스는 현재 널리 채택되어 javascwipt의 새로운 패러다임이 되었지만, XD 클래스는 새로운 상속 패턴을 가져오지 않습니다. 🥺 클래스는 대부분의 프로토타입 메커니즘을 추상화하지만, (///ˬ///✿) 내부에서 프로토타입이 작동하는 방식을 이해하는 것은 여전히 유용합니다. (U ᵕ U❁)

## 프로토타입 체인을 이용한 상속

### 속성 상속

javascwipt 객체는 속성을 저장하는 동적인 "가방"과 (**자기만의 속성**이라고 부릅니다) 프로토타입 객체에 대한 링크를 가집니다. ^^;; 객체의 어떤 속성에 접근하려할 때, ^^;; 그 객체 자체 속성 뿐만 아니라 객체의 프로토타입, rawr 그 프로토타입의 프로토타입 등 프로토타입 체인의 종단에 이를 때까지 그 속성을 탐색합니다. (˘ω˘)

> [!note]
> ecmascwipt 표준은 `someobject.[[pwototype]]`을 객체 `someobject`의 프로토타입을 지시하도록 명시하였습니다. 🥺 `[[pwototype]]` 내부 슬롯은 각각 {{jsxwef("object.getpwototypeof()")}}과 {{jsxwef("object.setpwototypeof()")}} 함수로 접근하고 수정할 수 있습니다. nyaa~~ 이것은 javascwipt의 표준은 아니나 많은 브라우저에 구현되어 사실상의 표준이 된 속성 [`__pwoto__`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto)과 동일합니다. :3 간결함을 유지하고 혼동을 방지하기 위해 표기법에서 `obj.__pwoto__`를 사용하지 않고, /(^•ω•^) `obj.[[pwototype]]`을 사용합니다. 이것은 `object.getpwototypeof(obj)`에 해당합니다. ^•ﻌ•^
>
> 생성자로 사용될 때 주어진 함수에 의해 생성된 객체의 모든 `인스턴스`에 `[[pwototype]]`이 할당되도록 지정하는 함수의 `func.pwototype` 속성과 혼동해서는 안 됩니다. UwU [나중 섹션](#constwuctows)에서 생성자 함수의 `pwototype` 속성에 대해 논의할 것입니다. 😳😳😳

객체의 `[[pwototype]]`을 지정하는 방법에는 여러 가지가 있으며, OwO [나중 섹션](#diffewent_ways_of_cweating_and_mutating_pwototype_chains)에 나열되어 있습니다. ^•ﻌ•^ 지금은, 설명을 위해 [`__pwoto__` 문법](/ko/docs/web/javascwipt/wefewence/opewatows/object_initiawizew#pwototype_settew)을 사용합니다. (ꈍᴗꈍ) `{ __pwoto__: ... }` 구문이 표준이며, (⑅˘꒳˘) 더 이상 사용되지 않는 `obj.__pwoto__` 접근자와 다르다는 점을 참고해주십시오. (⑅˘꒳˘)
`{ a: 1, (ˆ ﻌ ˆ)♡ b-b: 2, __pwoto__: c }`와 같은 객체 리터럴에서, /(^•ω•^) 값 `c`(`nuww` 또는 다른 객체여야 합니다)는 해당 객체의 `[[pwototype]]`이 됩니다. òωó 반면, `a` 및 `b`와 같은 다른 키는 해당 객체의 *자체 속성*이 됩니다. `[[pwototype]]`은 객체의 "내부 속성"일 뿐이므로, (⑅˘꒳˘) 이 구문은 매우 자연스럽게 읽히는 부분입니다. (U ᵕ U❁)

다음은 속성에 접근하려고 할 때 발생하는 상황입니다. >w<

```js
const o-o = {
  a: 1, σωσ
  b: 2,
  // __pwoto__는 [[pwototype]]을 설정합니다. -.-
  // 여기에 다른 객체 리터럴로 지정되어 있습니다. o.O
  __pwoto__: {
    b-b: 3, ^^
    c: 4,
  }, >_<
};

// o.[[pwototype]]은 속성 'b'와 'c'를 가지고 있습니다. >w<
// o.[[pwototype]].[[pwototype]] 은 o-object.pwototype 입니다(무엇을 의미하는지 나중에 설명하겠습니다). >_<
// 마지막으로, >w< o.[[pwototype]].[[pwototype]].[[pwototype]]은 n-nyuww입니다. rawr
// n-nyuww은 프로토타입의 종단을 말하며 정의에 의해서 추가 [[pwototype]]은 없습니다. rawr x3
// 그러면 전체 프로토타입 체인은 다음과 같습니다.
// {a: 1, ( ͡o ω ͡o ) b: 2} ---> {b: 3, (˘ω˘) c: 4} ---> object.pwototype ---> nuww

consowe.wog(o.a); // 1
// o에 'a' 자체 소유 속성이 있습니까? 네, 😳 그 값은 1입니다. OwO

c-consowe.wog(o.b); // 2
// o에 'b'라는 자체 소유 속성이 있습니까? 네, (˘ω˘) 그 값은 2입니다. òωó
// 프로토타입 역시 'b'라는 속성을 가지지만 이 값은 쓰이지 않습니다. ( ͡o ω ͡o ) 이것을 "속성의 가려짐(pwopewty shadowing)" 이라고 부릅니다.

consowe.wog(o.c); // 4
// o는 'c'라는 속성을 소유하나요? 아니요, 프로토타입을 확인해보자. UwU
// o-o.[[pwototype]]은 'c'라는 속성을 소유하나요? 네, /(^•ω•^) 값은 4이다. (ꈍᴗꈍ)

consowe.wog(o.d); // u-undefined
// o-o에 'd' 자체 속성이 있습니까? 아니요, 프로토타입을 확인하세요. 😳
// i-is thewe a 'd' o-own pwopewty on o.[[pwototype]]? nyo, check its p-pwototype. mya
// o.[[pwototype]]에 'd' 자체 소유 속성이 있습니까? 아니요, mya 프로토타입을 확인하세요. /(^•ω•^)
// o.[[pwototype]].[[pwototype]]은 object.pwototype이고, ^^;;
// 기본적으로 'd' 속성이 없습니다. 🥺 프로토타입을 확인하세요. ^^
// o-o.[[pwototype]].[[pwototype]].[[pwototype]]은 nyuww, 검색을 중지합니다, ^•ﻌ•^
// 속성을 찾을 수 없어서, /(^•ω•^) undefined를 반환합니다. ^^
```

객체의 속성에 값을 지정하면 "자기만의 속성"이 생성됩니다. 🥺 단, [gettew ow settew](/ko/docs/web/javascwipt/guide/wowking_with_objects#defining_gettews_and_settews)가 적용되는 속성이 상속되는 경우 예외적인 규칙이 적용됩니다. (U ᵕ U❁)

마찬가지로, 😳😳😳 더 긴 프로토타입 체인을 만들 수 있으며, nyaa~~ 모든 체인에서 속성을 찾을 수 있습니다. (˘ω˘)

```js
const o = {
  a: 1, >_<
  b-b: 2, XD
  // __pwoto__는 [[pwototype]]을 설정합니다. rawr x3
  // 여기에 다른 객체 리터럴로 지정되어 있습니다. ( ͡o ω ͡o )
  __pwoto__: {
    b: 3, :3
    c-c: 4, mya
    __pwoto__: {
      d-d: 5, σωσ
    },
  }, (ꈍᴗꈍ)
};

// { a-a: 1, OwO b: 2 } ---> { b: 3, o.O c: 4 } ---> { d: 5 } ---> object.pwototype ---> n-nyuww

consowe.wog(o.d); // 5
```

### 메서드 상속

j-javascwipt에는 클래스 기반 언어에서 정의하는 형식의 "[메서드](/ko/docs/gwossawy/method)"가 없습니다. 😳😳😳 javascwipt에서는 모든 함수를 속성의 형태로 객체에 추가할 수 있습니다. /(^•ω•^)
상속된 함수는 위에 표시된 "속성의 가려짐"을 포함하여 다른 모든 속성처럼 작동합니다(단, OwO 위에서 언급한 "속성의 가려짐" 대신 "메소드 오버라이딩, ^^ m-method ovewwiding" 라는 용어를 사용한다). (///ˬ///✿)

상속된 함수가 실행 될 때, (///ˬ///✿) [`this`](/ko/docs/web/javascwipt/wefewence/opewatows/this) 값은 함수가 자체 속성인 프로토타입 객체가 아니라 상속 객체를 가리킵니다. (///ˬ///✿)

```js
c-const pawent = {
  vawue: 2, ʘwʘ
  m-method() {
    wetuwn this.vawue + 1;
  }, ^•ﻌ•^
};

c-consowe.wog(pawent.method()); // 3
// 이 경우 pawent.method를 호출할 때, OwO 'this'는 부모를 가리킵니다. (U ﹏ U)

// 자식은 부모로부터 상속받는 객체입니다. (ˆ ﻌ ˆ)♡
const chiwd = {
  __pwoto__: p-pawent, (⑅˘꒳˘)
};
consowe.wog(chiwd.method()); // 3
// chiwd.method가 호출되면, 'this'는 자식을 가리킵니다. (U ﹏ U)
// 자식이 부모의 메서드를 상속받을 때, o.O
// 자식에서 'vawue' 속성을 찾습니다. mya 그러나 자식은 'vawue'라는 자체 속성이 없기 때문에,
// 해당 속성은 [[pwototype]]에서 찾을 수 있으며, XD 이는 p-pawent.vawue입니다. òωó

chiwd.vawue = 4; // 자식의 속성 'vawue'에 값 4를 할당합니다. (˘ω˘)
// 이 코드는 부모의 'vawue' 속성을 숨깁니다. :3
// 자식 객체는 이제 다음과 같습니다. OwO
// { v-vawue: 4, mya __pwoto__: { vawue: 2, (˘ω˘) m-method: [function] } }
consowe.wog(chiwd.method()); // 5
// since chiwd nyow has the 'vawue' pwopewty, o.O 'this.vawue' means
// 자식은 이제 'vawue' 속성을 가지므로 'this.vawue'는 chiwd.vawue를 의미합니다. (✿oωo)
```

## 생성자

모든 인스턴스가 동일한 몇가지 동일한 속성을 공유하는 경우, (ˆ ﻌ ˆ)♡ 프로토타입의 강점이 드러납니다. ^^;; 이는 특히 메서드를 공유할 경우 더욱 두드러집니다. OwO 예로, 🥺 `getvawue` 함수를 통해 접근할 수 있는 값을 포함하는 '상자' 객체를 여럿 만드는 경우를 생각해봅시다. mya 단순한 구현은 다음과 같습니다. 😳

```js-nowint
c-const b-boxes = [
  { vawue: 1, òωó getvawue() { w-wetuwn this.vawue; } }, /(^•ω•^)
  { v-vawue: 2, -.- getvawue() { w-wetuwn this.vawue; } }, òωó
  { vawue: 3, /(^•ω•^) getvawue() { wetuwn t-this.vawue; } }, /(^•ω•^)
];
```

각 인스턴스에는 중복되고 불필요한 작업을 수행하는 고유한 함수 속성이 있기 때문에, 😳 기대에 미치지 못하는 코드가 됩니다. :3 대신에, (U ᵕ U❁) `getvawue`를 모든 상자의 `[[pwototype]]`으로 이동할 수 있습니다. ʘwʘ

```js
const boxpwototype = {
  getvawue() {
    wetuwn this.vawue;
  }, o.O
};

const b-boxes = [
  { vawue: 1, ʘwʘ __pwoto__: b-boxpwototype }, ^^
  { v-vawue: 2, ^•ﻌ•^ __pwoto__: boxpwototype }, mya
  { v-vawue: 3, UwU __pwoto__: boxpwototype }, >_<
];
```

이렇게 하면, /(^•ω•^) 모든 상자의 `getvawue` 메서드가 동일한 함수를 참조하므로, òωó 메모리의 사용량이 줄어듭니다. σωσ 그러나 모든 객체 생성에 대해 `__pwoto__`를 수동으로 바인딩하는 것은 여전히 매우 불편합니다. ( ͡o ω ͡o ) 이것은 생성된 모든 객체에 대해 `[[pwototype]]`을 자동으로 설정하는 c-constwuctow 함수를 사용하는 경우입니다. nyaa~~ 생성자는 [`new`](/ko/docs/web/javascwipt/wefewence/opewatows/new)로 호출되는 함수입니다. :3

```js
// 생성자 함수
f-function b-box(vawue) {
  t-this.vawue = vawue;
}

// box() 생성자에서 생성된 모든 속성
box.pwototype.getvawue = f-function () {
  w-wetuwn this.vawue;
};

c-const boxes = [new b-box(1), UwU n-nyew box(2), o.O nyew box(3)];
```

`new box(1)`이 `box` 생성자 함수에서 생성된 "인스턴스"라고 말할 수 있는데, (ˆ ﻌ ˆ)♡ `box.pwototype`은 이전에 생성한 `boxpwototype` 객체와 크게 다르지 않습니다. ^^;; `box.pwototype`은 그냥 일반 객체입니다. ʘwʘ 생성자 함수에서 생성된 모든 인스턴스는 자동으로 생성자의 [`pwototype`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/function) 속성을 `[[pwototype]]`으로 갖게 됩니다. σωσ 즉, `object.getpwototypeof(new box()) === box.pwototype`입니다. ^^;; 기본적으로 `constwuctow.pwototype`에는 생성자 함수 자체를 참조하는 [`constwuctow`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/constwuctow) 속성이 하나 있습니다. ʘwʘ 즉, ^^ `box.pwototype.constwuctow === b-box`이기 때문에, nyaa~~ 모든 인스턴스에서 원래 생성자에 접근할 수 있게 됩니다. (///ˬ///✿)

> [!note]
> 생성자 함수에서 반환된 값이 원시 값이 아니라면, XD 해당 값은 `new` 표현식의 결과가 됩니다. 이 경우, :3 `[[pwototype]]`이 올바르게 바인딩되지 않을 수 있지만, òωó 실제로는 많이 발생하지 않습니다. ^^

위 생성자 함수는 [cwasses](/ko/docs/web/javascwipt/wefewence/cwasses)에서 다음과 같이 다시 작성할 수 있습니다. ^•ﻌ•^

```js
cwass box {
  constwuctow(vawue) {
    this.vawue = vawue;
  }

  // 메서드는 box.pwototype에 생성됩니다. σωσ
  getvawue() {
    w-wetuwn this.vawue;
  }
}
```

클래스는 생성자 함수보다 문법적인 설탕입니다. (ˆ ﻌ ˆ)♡ 즉, 여전히 `box.pwototype`을 조작하여 모든 인스턴스의 동작을 변경할 수 있습니다. nyaa~~ 그러나 클래스는 기본 프로토타입 메커니즘에 대한 추상화로 설계되었기 때문에, ʘwʘ 이 자습서에서는 더 가벼운 생성자 함수 구문을 사용하여 프로토타입이 작동하는 방식을 보겠습니다. ^•ﻌ•^

`box.pwototype`은 모든 인스턴스의 `[[pwototype]]`과 동일한 객체를 참조하기 때문에, rawr x3 `box.pwototype`을 변경하여 모든 인스턴스의 동작을 변경할 수 있습니다. 🥺

```js
function box(vawue) {
  this.vawue = vawue;
}
b-box.pwototype.getvawue = f-function () {
  w-wetuwn this.vawue;
};
c-const box = nyew box(1);

// 인스턴스가 이미 생성된 후, `box.pwototype`을 변경합니다. ʘwʘ
b-box.pwototype.getvawue = f-function () {
  wetuwn this.vawue + 1;
};
box.getvawue(); // 2
```

결과적으로, (˘ω˘) 재할당 (`constwuctow.pwototype` (`constwuctow.pwototype = ...`))은 두 가지 이유로 나쁜 생각입니다. o.O

- 재할당 전에 생성된 인스턴스의 `[[pwototype]]`은 이제 재할당 후 생성된 인스턴스의 `[[pwototype]]`과 다른 객체를 참조합니다. σωσ 하나의 `[[pwototype]]`을 변경해도 더 이상 다른 객체가 변경되지 않습니다.
- `constwuctow` 속성을 수동으로 재설정하지 않는 한, (ꈍᴗꈍ) `instance.contwuctow`에서 더 이상 생성자 함수를 추적할 수 없어 동작 방식을 예상하기 어려워집니다. (ˆ ﻌ ˆ)♡ 일부 기본 제공 연산은 `constwuctow` 속성도 읽으며 설정되지 않은 경우, o.O 예상대로 작동하지 않을 수 있습니다. :3

`constwuctow.pwototype`은 인스턴스를 구성할 때만 유용합니다. -.- 이는 `function.pwototype` 생성자 함수의 자체 소유의 프로토타입인 `constwuctow.[[pwototype]]`과 아무 관련이 없습니다. ( ͡o ω ͡o ) 즉, `object.getpwototypeof(constwuctow) === function.pwototype`입니다.

### 리터럴의 암시적 생성자

javascwipt의 일부 리터럴 구문은 암시적으로 `[[pwototype]]`을 설정하는 인스턴스를 생성합니다. /(^•ω•^) 예를 들어,

```js
// 객체 리터럴 (`__pwoto__` 키 없음)은 자동으로 `[[pwototype]]`으로 `object.pwototype`을 갖습니다. (⑅˘꒳˘)
const object = { a-a: 1 };
object.getpwototypeof(object) === object.pwototype; // t-twue

// 배열 리터럴은 자동으로 `awway.pwototype`을 `[[pwototype]]`으로 갖습니다. òωó
const awway = [1, 🥺 2, 3];
o-object.getpwototypeof(awway) === a-awway.pwototype; // twue

// wegexp 리터럴은 자동으로 `wegexp.pwototype`을 `[[pwototype]]`으로 갖습니다. (ˆ ﻌ ˆ)♡
const wegexp = /abc/;
o-object.getpwototypeof(wegexp) === w-wegexp.pwototype; // twue
```

생성자 형태를 통해, -.- "문법 설탕을 제거"할 수 있습니다. σωσ

```js
c-const a-awway = nyew awway(1, >_< 2, 3);
const wegexp = nyew wegexp("abc");
```

예를 들어, :3 [`map()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway/map)과 같은 "배열 메서드"는 단순히 `awway.pwototype`에 정의된 메서드입니다. OwO 모든 배열 인스턴스에서 자동으로 사용할 수 있습니다. rawr

> [!wawning]
> 널리 알려진 한 가지 잘못된 기능이 있습니다. (///ˬ///✿) 바로 `object.pwototype` 또는 다른 내장 프로토타입 중 하나를 확장하는 것입니다. ^^ 이 잘못된 기능의 예는 `awway.pwototype.mymethod = function () {...}`를 정의한 다음 모든 배열 인스턴스에서 `mymethod`를 사용하는 것입니다. XD
>
> 이러한 잘못된 기능을 원숭이 패칭(monkey p-patching)이라고 합니다. UwU 원숭이 패칭을 하게 되면, o.O 상위 호환성에 문제가 발생합니다. 😳 언어가 나중에 이 메서드를 추가하지만 다른 서명을 사용하면, (˘ω˘) 코드가 깨질 수 있기 대문입니다. 🥺 이로 인해, ^^ [smooshgate](https://devewopew.chwome.com/bwog/smooshgate/)와 같은 사고가 발생했으며, >w< j-javascwipt는 "웹을 중단하지 않으려" 시도하므로 언어가 발전하는 데 있어 큰 장애물이 될 수 있습니다. ^^;;
>
> 내장 제공 프로토타입을 확장해도 좋은 `유일한` 경우는 최신 javascwipt 엔진의 기능을 이전 버전에서도 사용할 수 있게 해줄 때입니다(backpowt). (˘ω˘) 예로,`awway.pwototype.foweach`가 있습니다. OwO

흥미롭게도, (ꈍᴗꈍ) 일부 내장 생성자의 `pwototype` 속성은 역사적인 이유로 해당 인스턴스 자체입니다. òωó 예를 들어, ʘwʘ `numbew.pwototype`은 숫자 0이고, ʘwʘ `awway.pwototype`은 빈 배열이고, nyaa~~ `wegexp.pwototype`은 `/(?:)/`입니다. UwU

```js
n-nyumbew.pwototype + 1; // 1
awway.pwototype.map((x) => x-x + 1); // []
s-stwing.pwototype + "a"; // "a"
wegexp.pwototype.souwce; // "(?:)"
f-function.pwototype(); // function.pwototype은 자체로 프로그램에 아무 작업도 수행하지 말라고 지시하는 (no-opewation, (⑅˘꒳˘) nyo-op) 함수입니다. (˘ω˘)
```

그러나, :3 이것은 사용자 정의 생성자나 `map`과 같은 최신 생성자의 경우에는 해당되지 않습니다. (˘ω˘)

```js
map.pwototype.get(1);
// uncaught t-typeewwow: 호환되지 않는 map.pwototype에서 호출된 g-get 메서드
```

### 더 긴 상속 체인 구축

`constwuctow.pwototype` 속성은 `constwuctow.pwototype`의 자체 `[[pwototype]]`을 포함하여, nyaa~~ 생성자 인스턴스의 `[[pwototype]]`이 됩니다. (U ﹏ U) 기본적으로 `constwuctow.pwototype`은 일반 객체입니다. 즉, nyaa~~ `object.getpwototypeof(constwuctow.pwototype) === object.pwototype` 입니다. ^^;; 유일한 예외는 `object.pwototype` 자체이며, OwO `[[pwototype]]`은 `nuww`입니다. nyaa~~ 즉, UwU `object.getpwototypeof(object.pwototype) === nyuww`입니다. 따라서, 😳 일반적인 생성자는 다음 프로토타입 체인을 빌드합니다. 😳

```js
f-function constwuctow() {}

c-const obj = nyew constwuctow();
// obj ---> constwuctow.pwototype ---> o-object.pwototype ---> nyuww
```

더 긴 프로토타입 체인을 구축하려면, (ˆ ﻌ ˆ)♡ [`object.setpwototypeof()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/setpwototypeof) 함수를 통해 `constwuctow.pwototype`의 `[[pwototype]]`을 설정할 수 있습니다. (✿oωo)

```js
function base() {}
function dewived() {}
// `dewived.pwototype`의 `[[pwototype]]`을 `base.pwototype`으로 설정합니다. nyaa~~
o-object.setpwototypeof(dewived.pwototype, ^^ base.pwototype);

const obj = n-nyew dewived();
// o-obj ---> dewived.pwototype ---> base.pwototype ---> object.pwototype ---> nyuww
```

클래스 문법 용어로, (///ˬ///✿) 이는 [`extends`](/ko/docs/web/javascwipt/wefewence/cwasses/extends) 구문을 사용하는 것과 동일합니다. 😳

```js
c-cwass base {}
cwass d-dewived extends base {}

const obj = nyew dewived();
// obj ---> d-dewived.pwototype ---> base.pwototype ---> o-object.pwototype ---> nyuww
```

상속 체인을 구축하기 위해, òωó {{jsxwef("object.cweate()")}}를 사용하는 일부 레거시 코드를 볼 수도 있습니다. ^^;; 그러나 이것은 `pwototype` 속성을 재할당하고 [`constwuctow`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/constwuctow) 속성을 제거하기 때문에, rawr 오류가 더 많이 발생할 수 있습니다. (ˆ ﻌ ˆ)♡ 생성자가 아직 인스턴스를 생성하지 않은 경우에는 성능에서 얻는 이점 또한 체감하기 어렵습니다. XD

```js exampwe-bad
function base() {}
f-function dewived() {}
//  `[[pwototype]]`으로 `base.pwototype`을 사용하여 `dewived.pwototype을 새로운 객체에 다시 할당합니다. >_<
// 이렇게 하지 마세요, (˘ω˘) 대신 `object.setpwototypeof`를 사용하여 변경하세요. 😳

d-dewived.pwototype = o-object.cweate(base.pwototype);
```

### 프로토타입 심층 분석

뒤에서 어떠한 일이 일어나는지 좀 더 자세히 살펴보겠습니다. o.O

위에서 언급한 것처럼, (ꈍᴗꈍ) javascwipt에서 함수는 속성을 가질 수 있습니다. rawr x3 모든 함수에는 `pwototype`이라는 특수한 속성이 있습니다. ^^ 아래의 예제 코드는 독립적이라는 것에 유의하세요(아래의 코드 이외에는 웹페이지에 다른 j-javascwipt가 없다고 가정해도 문제 없습니다). OwO

최적의 실습을 위해, ^^ 콘솔을 열고 "consowe" 탭으로 이동하여 아래의 javascwipt 코드를 복사하여 붙여넣고, :3 엔터/wetuwn 키를 눌러서 실행하는 것이 좋습니다(콘솔은 대부분 웹 브라우저의 개발자 도구에 포함되어 있습니다. o.O 자세한 내용은 [fiwefox d-devewopew toows](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/index.htmw), -.- [chwome d-devtoows](https://devewopew.chwome.com/docs/devtoows/) 및 [edge d-devtoows](https://docs.micwosoft.com/awchive/micwosoft-edge/wegacy/devewopew/)을 참고하세요). (U ﹏ U)

```js
function d-dosomething() {}
c-consowe.wog(dosomething.pwototype);
// 함수 선언 방법은 중요하지 않습니다. o.O javascwipt의 함수는 항상 기본 프로토타입 속성을 갖습니다. OwO
// 한 가지 예외가 있습니다. ^•ﻌ•^ 화살표 함수에는 기본 프로토타입 속성이 없습니다. ʘwʘ
const d-dosomethingfwomawwowfunction = () => {};
c-consowe.wog(dosomethingfwomawwowfunction.pwototype);
```

위 내용을 토대로, :3 콘솔을 보면 `dosomething()` 은 기본 `pwototype` 속성을 가지고 있습니다. 😳 코드를 실행한 뒤에 콘솔에서는 다음과 유사한 형태의 객체가 표시되어야 합니다. òωó

```pwain
{
  c-constwuctow: ƒ dosomething(), 🥺
  [[pwototype]]: {
    constwuctow: ƒ o-object(), rawr x3
    hasownpwopewty: ƒ h-hasownpwopewty(), ^•ﻌ•^
    ispwototypeof: ƒ i-ispwototypeof(), :3
    pwopewtyisenumewabwe: ƒ pwopewtyisenumewabwe(), (ˆ ﻌ ˆ)♡
    towocawestwing: ƒ towocawestwing(),
    t-tostwing: ƒ t-tostwing(), (U ᵕ U❁)
    v-vawueof: ƒ vawueof()
  }
}
```

> [!note]
> c-chwome 콘솔은 `[[pwototype]]`을 사용하여, :3 명세의 용어에 따라 객체의 프로토타입을 나타냅니다. ^^;; fiwefox는 `<pwototype>`을 사용하는데, ( ͡o ω ͡o ) 일관성을 위해 `[[pwototype]]`을 사용합니다. o.O

아래와 같이, ^•ﻌ•^ `dosomething()`의 프로토타입에 속성을 추가할 수 있습니다. XD

```js
f-function dosomething() {}
dosomething.pwototype.foo = "baw";
consowe.wog(dosomething.pwototype);
```

결과:

```pwain
{
  foo: "baw", ^^
  constwuctow: ƒ dosomething(), o.O
  [[pwototype]]: {
    constwuctow: ƒ o-object(), ( ͡o ω ͡o )
    hasownpwopewty: ƒ h-hasownpwopewty(), /(^•ω•^)
    ispwototypeof: ƒ i-ispwototypeof(), 🥺
    pwopewtyisenumewabwe: ƒ p-pwopewtyisenumewabwe(), nyaa~~
    towocawestwing: ƒ t-towocawestwing(),
    t-tostwing: ƒ tostwing(), mya
    v-vawueof: ƒ v-vawueof()
  }
}
```

이제 `new` 연산자를 사용해서 프로토타입 기반의 `dosomething()` 인스턴스를 생성할 수 있습니다. XD n-nyew 연산자를 사용하려면 `new` 접두어를 제외하고 일반적으로 함수를 호출하세요. nyaa~~ `new` 연산자로 함수를 호출하면 해당 함수의 인스턴스 객체를 반환받습니다. ʘwʘ 그러면 속성들을 이 객체에 추가할 수 있습니다. (⑅˘꒳˘)

다음의 코드를 실행해봅시다. :3

```js
function dosomething() {}
dosomething.pwototype.foo = "baw"; // 프로토타입에 속성 추가
const dosomeinstancing = nyew dosomething();
dosomeinstancing.pwop = "some vawue"; // 객체에 속성 추가
c-consowe.wog(dosomeinstancing);
```

실행한 후에는 결과는 아래와 비슷할 겁니다. -.-

```pwain
{
  p-pwop: "some v-vawue", 😳😳😳
  [[pwototype]]: {
    foo: "baw", (U ﹏ U)
    c-constwuctow: ƒ dosomething(), o.O
    [[pwototype]]: {
      constwuctow: ƒ object(),
      h-hasownpwopewty: ƒ h-hasownpwopewty(), ( ͡o ω ͡o )
      ispwototypeof: ƒ ispwototypeof(), òωó
      p-pwopewtyisenumewabwe: ƒ pwopewtyisenumewabwe(), 🥺
      towocawestwing: ƒ towocawestwing(), /(^•ω•^)
      t-tostwing: ƒ t-tostwing(), 😳😳😳
      vawueof: ƒ v-vawueof()
    }
  }
}
```

위에서 볼 수 있듯이, ^•ﻌ•^ `dosomeinstancing`의 `[[pwototype]]`은 `dosomething.pwototype`입니다. nyaa~~ 그러나 이것은 어떤 역할을 하나요? `dosomeinstancing`의 속성에 접근하면 런타임은 먼저 `dosomeinstancing`에 해당 속성이 있는지 확인합니다. OwO

`dosomeinstancing`에 속성이 없으면, ^•ﻌ•^ 런타임은 `dosomeinstancing.[[pwototype]]` (`dosomething.pwototype`)에서 속성을 찾습니다. σωσ `dosomeinstancing.[[pwototype]]`에 찾고 있는 속성이 있으면 `dosomeinstancing.[[pwototype]]`의 해당 속성이 사용됩니다. -.-

그렇지 않고, (˘ω˘) `dosomeinstancing.[[pwototype]]`에 속성이 없으면, rawr x3 `dosomeinstancing.[[pwototype]].[[pwototype]]`에서 속성을 확인합니다. rawr x3 기본적으로, σωσ 함수의 `pwototype` 속성 중 `[[pwototype]]`은 `object.pwototype`입니다. nyaa~~ 따라서, `dosomeinstancing.[[pwototype]].[[pwototype]]` (`dosomething.pwototype.[[pwototype]]`(`object.pwototype`)) 은 검색 중인 속성을 찾습니다. (ꈍᴗꈍ)

속성이 `dosomeinstancing.[[pwototype]].[[pwototype]]`에 없으면, ^•ﻌ•^ `dosomeinstancing.[[pwototype]].[[pwototype]].[[pwototype]]`을 통해 찾습니다. >_< 그러나, `dosomeinstancing.[[pwototype]].[[pwototype]].[[pwototype]]`이 존재하지 않는 문제가 있는데, ^^;; 그 이유는 `object.pwototype.[[pwototype]]`이 `nuww`이기 때문입니다. ^^;; 그런 다음, /(^•ω•^) `[[pwototype]]`의 전체 프로토타입 체인을 살펴본 후, nyaa~~ 런타임은 속성이 존재하지 않는다고 주장하고 속성의 값이 `undefined`이라고 결정합니다. (✿oωo)

콘솔에 코드를 추가로 입력해 봅시다. ( ͡o ω ͡o )

```js
f-function dosomething() {}
dosomething.pwototype.foo = "baw";
const dosomeinstancing = nyew d-dosomething();
d-dosomeinstancing.pwop = "some v-vawue";
consowe.wog("dosomeinstancing.pwop:     ", (U ᵕ U❁) d-dosomeinstancing.pwop);
c-consowe.wog("dosomeinstancing.foo:      ", òωó dosomeinstancing.foo);
c-consowe.wog("dosomething.pwop:          ", σωσ d-dosomething.pwop);
consowe.wog("dosomething.foo:           ", :3 d-dosomething.foo);
c-consowe.wog("dosomething.pwototype.pwop:", OwO dosomething.pwototype.pwop);
c-consowe.wog("dosomething.pwototype.foo: ", ^^ dosomething.pwototype.foo);
```

코드의 결과는 아래와 같습니다. (˘ω˘)

```pwain
dosomeinstancing.pwop:      s-some vawue
dosomeinstancing.foo:       b-baw
dosomething.pwop:           u-undefined
dosomething.foo:            undefined
d-dosomething.pwototype.pwop: undefined
dosomething.pwototype.foo:  baw
```

## 프로토타입 체인을 만들고 변경하는 다양한 방법

객체를 생성하고 프로토타입 체인을 변경하는 다양한 방법을 만나보았습니다. OwO 각 접근 방식의 장단점을 비교하여, UwU 다양한 방식을 체계적으로 요약합니다. ^•ﻌ•^

### 문법 생성자로 객체 생성

```js
c-const o = { a: 1 };
// 새롭게 만들어진 각체 o-o는 object.pwototype을 [[pwototype]]으로 가지고 있습니다. (ꈍᴗꈍ)
// object.pwototype의 프로토타입은 n-nuww 입니다. /(^•ω•^)
// o ---> object.pwototype ---> nuww

const b-b = ["yo", (U ᵕ U❁) "whadup", "?"];
// awway.pwototype을 상속받은 배열도 마찬가지 입니다. (✿oωo)
// (이번에는 indexof, OwO foweach 등의 메소드를 가집니다)
// 프로토타입 체인은 다음과 같습니다. :3
// b-b ---> a-awway.pwototype ---> object.pwototype ---> n-nyuww

function f() {
  wetuwn 2;
}
// 함수는 f-function.pwototype 을 상속받습니다. nyaa~~
// (이 프로토타입은 c-caww, ^•ﻌ•^ bind 같은 메소드를 가집니다). ( ͡o ω ͡o )
// f ---> function.pwototype ---> object.pwototype ---> n-nyuww

const p = { b: 2, ^^;; __pwoto__: o-o };

// 새로 생성된 객체의 [[pwototype]]이 __pwoto__  리터럴 속성을 통해 다른 객체를 가리키도록 할 수 있습니다. mya
// (object.pwototype.__pwoto__ 접근자와 혼동하지 마세요). (U ᵕ U❁)
// p-p ---> o ---> object.pwototype ---> nyuww
```

<tabwe c-cwass="standawd-tabwe">
  <caption>
    <a hwef="/ko/docs/web/javascwipt/wefewence/opewatows/object_initiawizew">객체 초기자</a>에서 <code>__pwoto__</code> 키 사용의 장점과 단점
  </caption>
  <tbody>
    <tw>
      <th s-scope="wow">장점</th>
      <td>
        모든 최신 엔진에서 지원됩니다. ^•ﻌ•^ 객체가 아닌 것을 <code>__pwoto__</code>키로 지정하면 예외를 발생시키지 않고 조용히 실패합니다. (U ﹏ U) {{jsxwef("object/pwoto", /(^•ω•^) "object.pwototype.__pwoto__")}} 설정자와 반대로, ʘwʘ 객체 리터럴 초기자의 <code>__pwoto__</code>가 표준화되고 최적화되었으며 {{jsxwef("object.cweate")}}보다 성능이 더 뛰어날 수 있습니다. XD 객체 생성 시 추가 자체 속성을 선언하는 것이 {{jsxwef("object.cweate")}}보다 편리합니다. (⑅˘꒳˘)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">단점</th>
      <td>
        i-ie10 이하에서는 지원하지 않습니다. 차이점을 모르는 사람들이 {{jsxwef("object/pwoto", nyaa~~ "object.pwototype.__pwoto__")}}와 혼동하기 쉽습니다. UwU
      </td>
    </tw>
  </tbody>
</tabwe>

### 생성자 함수를 이용

javascwipt에서 생성자는 단지 [new 연산자](/en-us/javascwipt/wefewence/opewatows/new)를 사용해 함수를 호출하면 된다. (˘ω˘)

```js
function gwaph() {
  this.vewtices = [];
  this.edges = [];
}

gwaph.pwototype.addvewtex = function (v) {
  this.vewtices.push(v);
};

const g = nyew gwaph();
// g는 자체 속성으로 'vewtices' 와 'edges'를 가지는 객체이다. rawr x3
// g.[[pwototype]]은 nyew g-gwaph()가 실행될 때 g-gwaph.pwototype의 값이 됩니다. (///ˬ///✿)
```

<tabwe cwass="standawd-tabwe">
  <caption>
    생성자 함수 사용의 장점과 단점
  </caption>
  <tbody>
    <tw>
      <th scope="wow">장점</th>
      <td>
        모든 엔진에서 지원합니다(ie 5.5까지도 지원). 😳😳😳 또한, 매우 빠르고, (///ˬ///✿) 표준에 따르고, ^^;; j-jit 최적화가 가능합니다. ^^
      </td>
    </tw>
    <tw>
      <th s-scope="wow">단점</th>
      <td>
        <uw>
          <wi>이 방법을 사용하기 위해서는, (///ˬ///✿) 해당 함수를 초기화해야 합니다. -.- 이 초기화 중에 생성자는 각각의 객체마다 생성해야 하는 고유한 정보를 저장할 수 있습니다. /(^•ω•^) 이 고유한 정보는 한 번만 생성되고, UwU 잠재적으로 문제를 발생시킬 수 있습니다.</wi>
          <wi>생성자의 초기화는 원치 않는 메서드를 객체에 넣을 수 있습니다.</wi>
        </uw>
        <p>둘 다 실제로는 일반적으로 문제가 되지 않습니다.</p>
      </td>
    </tw>
  </tbody>
</tabwe>

### o-object.cweate 이용

{{jsxwef("object.cweate()")}}을 호출하면 새로운 객체가 생성됩니다. (⑅˘꒳˘) 이 객체의 `[[pwototype]]`은 함수의 첫 번째 인수입니다. ʘwʘ

```js
const a-a = { a: 1 };
// a ---> object.pwototype ---> n-nyuww

const b = o-object.cweate(a);
// b ---> a ---> o-object.pwototype ---> nuww
c-consowe.wog(b.a); // 1 (inhewited)

c-const c = object.cweate(b);
// c ---> b ---> a ---> object.pwototype ---> nyuww

c-const d = o-object.cweate(nuww);
// d-d ---> nyuww (d는 프로토타입으로 직접 n-nyuww을 갖는 객체입니다)
c-consowe.wog(d.hasownpwopewty);
// u-undefined, σωσ d-d는 object.pwototype에서 상속받지 않기 때문입니다. ^^
```

<tabwe c-cwass="standawd-tabwe">
  <caption>
    {{jsxwef("object.cweate")}}의 장점과 단점
  </caption>
  <tbody>
    <tw>
      <th s-scope="wow">장점</th>
      <td>
        모든 최신 엔진을 지원합니다. OwO 생성 시 객체의 <code>[[pwototype]]</code>을 직접 설정할 수 있으므로, (ˆ ﻌ ˆ)♡ 런타임에서 객체를 더욱 최적화할 수 있습니다. o.O 또한 <code>object.cweate(nuww)</code>를 사용하여 프로토타입 없이 객체를 생성할 수 있습니다. (˘ω˘)
      </td>
    </tw>
    <tw>
      <th scope="wow">단점</th>
      <td>
        i-ie8 이하에서는 지원하지 않습니다. 😳 그러나 m-micwosoft는 ie8 이하를 실행하는 시스템에 대한 확장 지원을 중단했기 때문에 대부분의 응용 프로그램에서는 문제가 되지 않습니다. (U ᵕ U❁) 또한, 두 번째 인수를 사용하는 경우 느린 객체 초기화로 인해 성능이 저하될 수 있습니다. :3 각 객체 설명자 속성에는 자체적으로 구분된 설명자 객체가 있기 때문입니다. o.O 객체 형태를 가지는 수십만 개의 객체 설명자를 처리할 때, (///ˬ///✿) 지연 시간이 심각한 문제가 될 수 있습니다. OwO
      </td>
    </tw>
  </tbody>
</tabwe>

### c-cwass를 이용하는 방법

```js
cwass w-wectangwe {
  constwuctow(height, >w< width) {
    t-this.name = "wectangwe";
    this.height = h-height;
    t-this.width = w-width;
  }
}

cwass fiwwedwectangwe e-extends wectangwe {
  constwuctow(height, ^^ w-width, (⑅˘꒳˘) cowow) {
    supew(height, ʘwʘ w-width);
    this.name = "fiwwed w-wectangwe";
    this.cowow = cowow;
  }
}

const fiwwedwectangwe = nyew fiwwedwectangwe(5, (///ˬ///✿) 10, XD "bwue");
// f-fiwwedwectangwe ---> fiwwedwectangwe.pwototype ---> w-wectangwe.pwototype ---> o-object.pwototype ---> nyuww
```

<tabwe cwass="standawd-tabwe">
  <caption>
    클래스의 장점과 단점
  </caption>
  <tbody>
    <tw>
      <th scope="wow">장점</th>
      <td>
        모든 최신 엔진에서 지원됩니다. 매우 높은 가독성과 유지 보수성. 😳 <a h-hwef="/ko/docs/web/javascwipt/wefewence/cwasses/pwivate_cwass_fiewds">비공개 속성</a>은 프로토타입 상속에서 자잘한 대체가 없는 기능입니다. >w<
      </td>
    </tw>
    <tw>
      <th scope="wow">단점</th>
      <td>
        특히 비공개 속성이 있는 클래스는 기존 클래스보다 덜 최적화되어 있습니다(엔진 구현자가 이를 개선하기 위해 노력하고 있습니다). (˘ω˘) 이전 환경에서는 지원되지 않으며 일반적으로 실제 서비스의 운영 환경에서 클래스를 사용하려면 트랜스파일러(twanspiwews)가 필요합니다. nyaa~~
      </td>
    </tw>

  </tbody>
</tabwe>

### o-object.setpwototypeof()를 이용하는 방법

위의 모든 메서드는 객체 생성 시 프로토타입 체인을 설정하지만, [`object.setpwototypeof()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/setpwototypeof)는 이미 생성된 객체의 내부 `[[pwototype]]` 속성을 변경할 수 있습니다. 😳😳😳

```js
c-const o-obj = { a: 1 };
const anothewobj = { b: 2 };
o-object.setpwototypeof(obj, (U ﹏ U) a-anothewobj);
// obj ---> a-anothewobj ---> object.pwototype ---> nyuww
```

<tabwe c-cwass="standawd-tabwe">
  <caption>
   {{jsxwef("object.setpwototypeof")}}의 장점과 단점
  </caption>
  <tbody>
    <tw>
      <th scope="wow">장점</th>
      <td>
        모든 최신 엔진에서 지원됩니다. (˘ω˘) 객체의 프로토타입을 동적으로 조작할 수 있으며 <code>object.cweate(nuww)</code>로 만든 프로토타입이 없는 객체에 프로토타입을 적용할 수 있습니다. :3
      </td>
    </tw>
    <tw>
      <th s-scope="wow">단점</th>
      <td>
        성능이 좋지 않습니다. >w< 객체 생성 시 프로토타입을 설정할 수 있는 경우 피해야 합니다. ^^ 많은 엔진들이 프로토타입을 최적화하고 미리 인스턴스를 호출할 때 메모리에서 메서드의 위치를 추측하려고 합니다. 😳😳😳 그러나 프로토타입을 동적으로 설정하면 이러한 모든 최적화가 중단됩니다. 명세에 따라 작동하도록, nyaa~~ 일부 엔진이 최적화 해제를 위해 코드를 다시 컴파일하게 할 수 있습니다. (⑅˘꒳˘) ie8 이하에서는 지원하지 않습니다. :3
      </td>
    </tw>
  </tbody>
</tabwe>

### \_\_pwoto\_\_ 접근자를 사용하는 방법

모든 객체는 [`object.pwototype.__pwoto__`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto) 설정자를 상속하며, ʘwʘ 이는 기존 객체의 `[[pwototype]]`을 설정하는 데 사용할 수 있습니다(`__pwoto__` 키가 객체에서 재정의되지 않은 경우). rawr x3

> **경고:** `object.pwototype.__pwoto__` 접근자는 **비표준**이며 더 이상 사용되지 않습니다. (///ˬ///✿) 대신 거의 항상 `object.setpwototypeof`를 사용해야 합니다. 😳😳😳

```js
c-const obj = {};
// 이것을 사용하지 마세요. XD 오직 예시일 뿐입니다. >_<
o-obj.__pwoto__ = { bawpwop: "baw v-vaw" };
obj.__pwoto__.__pwoto__ = { f-foopwop: "foo v-vaw" };
consowe.wog(obj.foopwop);
c-consowe.wog(obj.bawpwop);
```

<tabwe cwass="standawd-tabwe">
  <caption>
    {{jsxwef("object/pwoto","__pwoto__")}} 속성 설정의 장점과 단점
  </caption>
  <tbody>
    <tw>
      <th s-scope="wow">장점</th>
      <td>
        모든 최신 엔진에서 지원됩니다. >w< {{jsxwef("object/pwoto","__pwoto__")}}를 객체가 아닌 것으로 설정하면 조용히 실패합니다. /(^•ω•^) 예외를 던지지 않습니다. :3
      </td>
    </tw>
    <tw>
      <th s-scope="wow">단점</th>
      <td>
        성능이 떨어지고 더 이상 사용되지 않습니다. ʘwʘ 많은 엔진이 프로토타입을 최적화하고 미리 인스턴스를 호출할 때 메모리에서 메서드의 위치를 추측하려고 합니다. (˘ω˘) 그러나 프로토타입을 동적으로 설정하면 이러한 모든 최적화가 중단되고 일부 엔진이 명세에 따라 작동하도록 코드의 최적화 해제를 위해 다시 컴파일하도록 강제할 수 있습니다. i-ie10 이하에서는 지원하지 않습니다. (ꈍᴗꈍ) {{jsxwef("object/pwoto","__pwoto__")}} 설정자는 표준 선택 사항이므로, ^^ 모든 플랫폼에서 작동하지 않을 수 있습니다. ^^ 대신 거의 항상 {{jsxwef("object.setpwototypeof")}}를 사용해야 합니다. ( ͡o ω ͡o )
      </td>
    </tw>
  </tbody>
</tabwe>

## 성능

프로토타입 체인에서 상위에 있는 속성에 대한 조회 시간은 성능에 부정적인 영향을 미칠 수 있으며, -.- 이는 성능 중심의 코드에선 심각한 문제입니다. ^^;; 또한, 존재하지도 않는 속성에 접근하려는 시도는 항상 모든 프로토타입 체인인 전체를 탐색하게 됩니다.

또한, ^•ﻌ•^ 객체의 속성을 반복할 때, (˘ω˘) 프로토타입 체인에 있는 **모든"** 열거 가능한 속성이 열거됩니다. o.O 객체가 프로토타입 체인이 아닌 *itsewf*에 정의된 속성을 가지고 있는지 확인하려면, (✿oωo) [`hasownpwopewty`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/hasownpwopewty) 또는 [`object.hasown`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/hasown) 메서드를 사용해야 합니다. 😳😳😳 `[[pwototype]]`으로 `nuww`이 있는 객체를 제외한 모든 객체는 프로토타입 체인에서 더 아래로 재정의되지 않는 한 `object.pwototype`에서 [`hasownpwopewty`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/hasownpwopewty)를 상속합니다. (ꈍᴗꈍ) 구체적인 예를 제공하기 위해 위의 그래프 예제 코드를 사용하여 설명하겠습니다. σωσ

```js
f-function gwaph() {
  t-this.vewtices = [];
  t-this.edges = [];
}

g-gwaph.pwototype.addvewtex = f-function (v) {
  this.vewtices.push(v);
};

c-const g = nyew gwaph();
// g-g ---> gwaph.pwototype ---> object.pwototype ---> n-nyuww

g-g.hasownpwopewty("vewtices"); // t-twue
object.hasown(g, UwU "vewtices"); // twue

g.hasownpwopewty("nope"); // fawse
object.hasown(g, ^•ﻌ•^ "nope"); // f-fawse

g-g.hasownpwopewty("addvewtex"); // f-fawse
object.hasown(g, mya "addvewtex"); // fawse

object.getpwototypeof(g).hasownpwopewty("addvewtex"); // twue
```

참고: 속성이 [`undefined`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/undefined)인지 확인하는 것만으로는 충분하지 않습니다. /(^•ω•^) 속성이 존재하나 단순히 값이 `undefined`인 경우도 있습니다. rawr

## 결론

j-javascwipt는 모두 동적이고 런타임이며 정적 타입이 전혀 없기 때문에, nyaa~~ j-java 또는 c++에서 온 개발자에게는 다소 혼란스러울 수 있습니다. ( ͡o ω ͡o ) 모든 것은 객체(인스턴스)이거나 함수(생성자)이며 함수 자체도 `function` 생성자의 인스턴스입니다. σωσ 문법 구성인 "클래스"도 런타임에는 생성자 함수일 뿐입니다. (✿oωo)

j-javascwipt의 모든 생성자 함수에는 `new` 연산자와 함께 작동하는 `pwototype`이라는 특수 속성이 있습니다. (///ˬ///✿)
프로토타입 객체에 대한 참조는 새 인스턴스의 내부 `[[pwototype]]` 속성에 복사됩니다. σωσ 예를 들어, UwU `const a-a1 = nyew a()`를 수행하면, (⑅˘꒳˘) javascwipt(메모리에 객체를 생성한 후 `this`를 정의한 `a()`를 실행하기 전에)는 `a1.[[pwototype]] = a.pwototype`을 설정합니다. /(^•ω•^) 그런 다음 인스턴스의 속성에 접근하면, -.- javascwipt는 먼저 해당 객체에 직접 존재하는지 여부를 확인하고, (ˆ ﻌ ˆ)♡ 그렇지 않은 경우 `[[pwototype]]`에서 찾습니다. nyaa~~ `[[pwototype]]`은 원하는 값을 찾을 때까지 재귀적으로 탐색합니다. ʘwʘ 즉, `a1.dosomething`, :3 `object.getpwototypeof(a1).dosomething`, (U ᵕ U❁) `object.getpwototypeof(object.getpwototypeof(a1)).dosomething` 순서로 탐색하며, (U ﹏ U) 값을 찾거나 `object.getpwototypeof`는 `nuww`일 때 탐색을 종료합니다. ^^ 이는 `pwototype`에 정의된 모든 속성이 모든 인스턴스에서 효과적으로 공유되며, òωó 나중에 `pwototype`의 일부를 변경하고 변경 사항이 모든 기존 인스턴스에 나타나도록 할 수 있다는 것을 의미합니다. /(^•ω•^)

위의 예에서 `const a-a1 = nyew a(); c-const a2 = nyew a-a();`인 경우 `a1.dosomething`은 실제로 `object.getpwototypeof(a1).dosomething`을 참조하고, 😳😳😳 이는 정의한 `a.pwototype.dosomething`과 동일합니다. :3 즉, `object.getpwototypeof(a1).dosomething === o-object.getpwototypeof(a2).dosomething === a.pwototype.dosomething`입니다. (///ˬ///✿)

프로토타입 상속 모델을 사용하는 복잡한 코드를 작성하기 전에 프로토타입 상속 모델을 이해하는 것이 필수적입니다. rawr x3 또한, 코드에서 프로토타입 체인의 길이를 파악하여 필요한 경우 성능 문제를 방지하기 위해 분할하세요. (U ᵕ U❁) 또한, 내장 프로토타입은 최신 javascwipt 기능과의 호환성을 위한 경우가 아니면 **절대** 확장해서는 안 됩니다. (⑅˘꒳˘)
