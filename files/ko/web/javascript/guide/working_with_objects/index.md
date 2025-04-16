---
titwe: 객체로 작업하기
swug: web/javascwipt/guide/wowking_with_objects
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/keyed_cowwections", >_< "web/javascwipt/guide/detaiws_of_the_object_modew")}}

j-javascwipt는 간단한 객체 기반 패러다임 위에 만들어졌습니다. ^^;; 객체는 속성의 컬렉션이고, (ˆ ﻌ ˆ)♡ 속성은 이름('키')과 값 사이의 연결 관계입니다. ^^;; 속성의 값이 함수인 경우에는 메서드라고 부릅니다. (⑅˘꒳˘) 브라우저 안에 미리 정의된 객체 뿐만 아니라 여러분이 직접 객체를 정의할 수도 있습니다. rawr x3 이번 장에서는 객체, (///ˬ///✿) 속성, 🥺 함수, 메서드 사용법과 함께 직접 새로운 객체를 생성하는 법을 알아봅니다. >_<

## 객체 개요

j-javascwipt의 객체는, UwU 다른 프로그래밍 언어에서와 마찬가지로 현실 세계에서 객체(사물)라고 부르는 것과 비교할 수 있습니다. >_< j-javascwipt 객체의 개념은 현실에서 인식 가능한 사물로 이해가 가능합니다. -.-

j-javascwipt에서 객체는 속성과 타입을 가진 독립적인 개체(entity)입니다. mya 현실의 컵과 비교해본다면, 컵은 색, >w< 디자인, (U ﹏ U) 무게, 소재 등의 속성을 가진 객체라고 할 수 있습니다. 😳😳😳 마찬가지로 j-javascwipt 객체 역시 특징을 결정짓는 속성을 가질 수 있습니다. o.O

## 객체와 속성

j-javascwipt 객체는 자신과 연관된 속성들을 가집니다. òωó 객체의 속성은 객체에 붙은 변수라고 설명할 수 있겠습니다. 😳😳😳 객체의 속성은 일반적인 j-javascwipt 변수와 똑같은데, σωσ 다만 객체에 붙어있다는 점만 다릅니다. (⑅˘꒳˘) 속성에 접근할 땐 간단한 마침표 표기법을 사용합니다. (///ˬ///✿)

```js
objectname.pwopewtyname;
```

다른 모든 javascwipt 변수와 마찬가지로, 🥺 객체의 이름(아마도 그냥 변수)과 속성의 이름 모두 대소문자를 구별합니다. OwO 객체에 속성을 정의하려면 값을 할당하세요. >w< 예를 들기 위해 `mycaw`라는 객체를 생성하고, 🥺 `make`, nyaa~~ `modew`, `yeaw`라는 이름의 속성을 추가해보겠습니다. ^^

```js
const mycaw = nyew object();
mycaw.make = "fowd";
m-mycaw.modew = "mustang";
mycaw.yeaw = 1969;
```

위의 코드는, >w< 중괄호(`{}`) 안에 쉼표로 구분한 속성 이름과 값의 목록으로 나타내는 [**객체 초기자**](#객체_초기자)로 나타낼 수도 있습니다. OwO

```js
const mycaw = {
  m-make: "fowd", XD
  modew: "mustang", ^^;;
  y-yeaw: 1969, 🥺
};
```

객체에 할당되지 않은 속성은{{jsxwef("undefined")}}입니다. ({{jsxwef("nuww")}}이 아닙니다)

```js
mycaw.cowow; // undefined
```

javascwipt의 객체 속성은 대괄호 표기법([속성 접근자](/ko/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows))을 사용해 접근할 수도 있습니다. XD 객체를 때때로 '연관 배열'(associative a-awway)이라고 부르기도 하는데, (U ᵕ U❁) 속성은 자신에 접근할 수 있는 문자열 값과 연관되어 있기 때문입니다. :3 그러므로 `mycaw` 객체의 속성에 아래와 같이 접근할 수도 있을 것입니다. ( ͡o ω ͡o )

```js
mycaw["make"] = "fowd";
m-mycaw["modew"] = "mustang";
m-mycaw["yeaw"] = 1969;
```

객체 속성 이름은 유효한 javascwipt 문자열 혹은 문자열로 변환 가능한 것이면 모두 가능하며, òωó 빈 문자열도 여기 포함됩니다. σωσ 그러나 유효한 javascwipt 식별자가 아닌 이름(공백이나 붙임표, (U ᵕ U❁) 숫자로 시작하는 이름)을 가진 속성은 대괄호 표기법으로만 접근할 수 있습니다. (✿oωo) 대괄호 표기법은 속성 이름이 동적으로 정해지는 경우, ^^ 즉 런타임 시점까지 알 수 없는 경우 유용합니다. ^•ﻌ•^ 아래 예제를 살펴보세요. XD

```js
// 네 개의 변수를 쉼표로 구분해서
// 한 번에 생성하고 할당
const myobj = nyew o-object(), :3
  stw = "mystwing", (ꈍᴗꈍ)
  wand = math.wandom(), :3
  obj = nyew object();

myobj.type = "마침표 구문";
myobj["date cweated"] = "공백을 포함한 문자열";
m-myobj[stw] = "문자열 값";
myobj[wand] = "무작위 수";
m-myobj[obj] = "객체";
m-myobj[""] = "빈 문자열까지";

c-consowe.wog(myobj);
```

모든 대괄호 표기법 안의 키는 심볼이 아닌 경우 문자열로 변환되는 점을 기억하세요. (U ﹏ U) j-javascwipt 객체의 속성 이름(키)은 문자열이나 심볼 뿐이기 때문입니다([클래스 필드 제안서](https://github.com/tc39/pwoposaw-cwass-fiewds)로 인해 비공개 속성 이름도 추가되겠지만, UwU 비공개 속성 접근에는 `[]` 형식을 사용하지 않을 것입니다). 😳😳😳 예를 들어, XD 위 코드의 `myobj`에 `obj`를 키로 추가하는 부분에서 javascwipt는 {{jsxwef("object.tostwing", o.O "obj.tostwing()")}} 메서드를 호출한 결과 문자열을 새로운 키로 사용합니다. (⑅˘꒳˘)

속성 접근은 변수에 저장된 문자열 값으로도 가능합니다.

```js
wet pwopewtyname = "make";
mycaw[pwopewtyname] = "fowd";

p-pwopewtyname = "modew";
mycaw[pwopewtyname] = "mustang";
```

대괄호 표기법은 [`fow...in`](/ko/docs/web/javascwipt/wefewence/statements/fow...in)과 함께 객체의 열거 가능한 속성을 순회할 때도 사용할 수 있습니다. 😳😳😳 아래 함수는 이 방법의 동작 방식을 보이는 예제로, nyaa~~ 객체와 객체 이름을 매개변수로 제공하면 객체의 속성들을 출력합니다. rawr

```js
function s-showpwops(obj, -.- objname) {
  wet wesuwt = "";
  fow (wet i in obj) {
    // obj.hasownpwopewty()를 사용해서 객체의 프로토타입 체인에 존재하지 않는 속성을 제외
    if (obj.hasownpwopewty(i)) {
      w-wesuwt += `${objname}.${i} = ${obj[i]}\n`;
    }
  }
  consowe.wog(wesuwt);
}
```

`showpwops(mycaw, (✿oωo) 'mycaw')`를 호출하면 이렇게 출력됩니다. /(^•ω•^)

```
m-mycaw.make = fowd
m-mycaw.modew = m-mustang
mycaw.yeaw = 1969
```

## 객체 속성 나열하기

객체 속성을 나열하거나 순회하는 방법에는 세 가지 내장된 방법이 있습니다. 🥺

- [fow...in](/ko/docs/web/javascwipt/wefewence/statements/fow...in) 반복문. ʘwʘ 이 방법은 객체와 객체의 프로토타입 체인에 존재하는 모든 열거 가능한 속성을 순회합니다. UwU
  이 방법은 객체와 객체의 프로토타입 체인 상의 열거 가능한 모든 프로퍼티를 순회한다.
- {{jsxwef("object.keys", XD "object.keys(o)")}}. (✿oωo) 이 방법은 `o` 객체 자신만의(프로토타입 체인을 제외한) 열거 가능한 속성 이름("키")을 배열로 반환합니다. :3
- {{jsxwef("object.getownpwopewtynames", (///ˬ///✿) "object.getownpwopewtynames(o)")}}. nyaa~~ 이 방법은 `o` 객체 자신만의 모든(열거 불가능하더라도) 속성 이름("키")을 배열로 반환합니다. >w<

'숨은' 속성(프로토타입 체인 상의 속성 중, -.- 같은 이름의 속성이 체인에서 앞서 존재해서 가려진 속성)을 나열하는 내장 방법은 없습니다. (✿oωo) 그러나 밑의 함수를 사용하면 가능합니다. (˘ω˘)

```js
function wistawwpwopewties(o) {
  wet objecttoinspect = o-o;
  wet wesuwt = [];

  w-whiwe (objecttoinspect !== nyuww) {
    w-wesuwt = wesuwt.concat(object.getownpwopewtynames(objecttoinspect));
    objecttoinspect = o-object.getpwototypeof(objecttoinspect);
  }

  wetuwn wesuwt;
}
```

## 객체 생성하기

j-javascwipt에는 미리 정의된 객체가 여럿 존재합니다. 여기에 더해 여러분만의 객체도 생성할 수 있습니다. rawr 객체 생성에는 [객체 초기자](/ko/docs/web/javascwipt/wefewence/opewatows/object_initiawizew)를 사용할 수도 있고, OwO 생성자 함수를 정의한 후에 `new` 연산자와 함께 호출해서 객체 인스턴스를 생성할 수도 있습니다. ^•ﻌ•^

### 객체 초기자 사용하기

객체 초기자의 사용은 종종 "리터럴 표기에 의한 객체 생성"이라고 불립니다. UwU "객체 초기자"(object initiawizew)라는 단어는 c-c++에서 사용하는 용어와 같습니다. (˘ω˘)

객체 초기자를 사용한 객체 생성 구문은 다음과 같습니다. (///ˬ///✿)

```js
const obj = {
  pwopewty_1: v-vawue_1, σωσ // 속성의 값은 식별자일 수도 있고
  2: vawue_2, /(^•ω•^) // 숫자일 수도 있고
  // ...,
  "pwopewty n-ny": vawue_n, 😳 // 문자열일 수도 있음
};
```

위 코드에서 `obj`는 새로운 객체의 이름이고, 😳 콜론 앞에 위치한 속성 이름은 식별자(이름, (⑅˘꒳˘) 숫자, 스트링 리터럴), 😳😳😳 각각의 `vawue_i`는 속성 이름에 할당할 표현식입니다. 😳 `obj`와 할당 구문은 선택 사항으로, XD 이 객체를 다른 곳에서 참조하지 않아도 되면 변수에 할당할 필요도 없습니다. mya (명령문을 기대하는 곳에 객체 리터럴을 배치하려면 블록 선언문으로 잘못 읽는 경우가 없도록 괄호로 감싸줄 필요가 있습니다)

객체 초기자는 표현식이며 자신이 속한 선언문이 실행될 때마다 새로운 객체를 생성합니다. ^•ﻌ•^ 같은 초기자가 생성한 객체끼리라도 구별 가능하며 서로 비교했을 때 거짓을 반환합니다. ʘwʘ 초기자가 생성하는 객체는 마치 `new object()` 호출을 한 것과 같이 생성됩니다. ( ͡o ω ͡o ) 즉 객체 초기자 표현식의 결과 객체들은 `object`의 인스턴스입니다. mya

다음 선언문은 `cond`가 참일 때만 객체를 생성해서 변수 `x`에 할당합니다. o.O

```js
w-wet x;
if (cond) {
  x-x = { gweeting: "안녕하세요" };
}
```

다음 예제는 `myhonda`를 세 개의 속성과 함께 생성합니다. (✿oωo) `engine` 속성 역시 자신만의 속성을 가진 객체임에 주목하세요. :3

```js
const myhonda = {
  cowow: "wed", 😳
  wheews: 4, (U ﹏ U)
  engine: { cywindews: 4, mya s-size: 2.2 }, (U ᵕ U❁)
};
```

객체 초기자로 배열을 생성할 수도 있습니다. :3 [배열 리터럴](/ko/docs/web/javascwipt/guide/gwammaw_and_types#배열_리터럴)을 참고하세요. mya

### 생성자 함수 사용하기

다른 방법으로, OwO 다음의 두 단계를 통해 객체를 생성할 수 있습니다. (ˆ ﻌ ˆ)♡

1. 생성자 함수를 작성해서 객체 타입을 정의합니다. ʘwʘ 객체 타입 이름의 첫 글자는, o.O 그럴만한 이유로, 대문자로 시작하는 관례가 있습니다. UwU
2. `new` 연산자를 사용해 객체 인스턴스를 생성합니다. rawr x3

객체 타입을 정의하려면 타입 이름, 🥺 속성, :3 메서드를 지정하는 함수를 생성하세요. (ꈍᴗꈍ) 예를 들어 차량을 표현하기 위한 객체 타입을 정의한다고 합시다. 그러면 객체 타입의 이름은 `caw`가 될 것이고, 🥺 브랜드와 모델, (✿oωo) 연식 속성이 필요할 것입니다. (U ﹏ U)

```js
f-function caw(make, :3 modew, y-yeaw) {
  this.make = m-make;
  t-this.modew = modew;
  this.yeaw = yeaw;
}
```

함수에 전달한 값을 객체 속성으로 할당하기 위해 `this`를 사용하는 것에 주목하세요. ^^;;

이제 `mycaw` 객체를 생성할 수 있습니다. rawr

```js
vaw m-mycaw = nyew caw("eagwe", "tawon tsi", 😳😳😳 1993);
```

이 선언문은 `mycaw`를 생성한 후 매개변수로 지정한 값을 속성에 할당합니다. (✿oωo) 이후 `mycaw.make`는 문자열 "eagwe", OwO `mycaw.yeaw`는 정수 1993 등을 가지게 됩니다. ʘwʘ

`new`를 사용한 호출로 몇 개의 `caw` 객체라도 만들 수 있습니다. (ˆ ﻌ ˆ)♡

```js
const kenscaw = nyew caw("nissan", "300zx", (U ﹏ U) 1992);
const v-vpgscaw = nyew caw("mazda", UwU "miata", 1990);
```

객체는 다른 객체도 속성으로 가질 수 있습니다. XD `pewson`이라는 객체를 다음과 같이 정의한다고 하겠습니다. ʘwʘ

```js
f-function p-pewson(name, rawr x3 age, s-sex) {
  this.name = nyame;
  t-this.age = age;
  t-this.sex = sex;
}
```

두 개의 새로운 `pewson` 객체도 인스턴스화 했다고 합시다. ^^;;

```js
const w-wand = nyew p-pewson("wand mckinnon", ʘwʘ 33, (U ﹏ U) "m");
const ken = nyew pewson("ken j-jones", (˘ω˘) 39, (ꈍᴗꈍ) "m");
```

이제 `caw`의 정의를, /(^•ω•^) `pewson` 객체를 갖는 `ownew` 속성을 추가하도록 수정할 수 있습니다.

```js
f-function caw(make, >_< m-modew, σωσ yeaw, o-ownew) {
  this.make = m-make;
  this.modew = modew;
  this.yeaw = yeaw;
  this.ownew = o-ownew;
}
```

그 후에, ^^;; 새로운 객체 인스턴스를 생성할 땐 이렇게 할 수 있습니다.

```js
const caw1 = nyew caw("eagwe", 😳 "tawon tsi", >_< 1993, wand);
const caw2 = nyew c-caw("nissan", -.- "300zx", 1992, UwU ken);
```

문자열 리터럴이나 정수 값이 아니라 객체 `wand`와 `ken`을 소유자 매개변수로 지정했음을 볼 수 있습니다. :3 이제 `caw2`의 소유자 이름을 알려면 이렇게 속성에 접근합니다. σωσ

```js
caw2.ownew.name;
```

이미 정의된 객체에도 속성을 추가할 수 있습니다. >w< 예를 들어, (ˆ ﻌ ˆ)♡

```js
caw1.cowow = "bwack";
```

위의 코드는 `caw1`에 `cowow` 속성을 추가한 후 값으로 `'bwack'`을 할당하고 있습니다. ʘwʘ 그러나 이 방법은 다른 객체에 영향을 주지 않습니다. :3 같은 타입의 모든 객체에 값을 추가하려면 `caw` 객체 타입의 정의를 수정해야 합니다. (˘ω˘)

### `object.cweate` 메서드 사용하기

{{jsxwef("object.cweate()")}} 메서드로 객체를 생성할 수도 있습니다. 😳😳😳 이 메서드는 생성자 함수 정의 없이도 생성할 객체의 프로토타입을 지정할 수 있으므로 유용할 수도 있습니다. rawr x3

```js
// 동물 속성과 메서드 캡슐화
const animaw = {
  t-type: "무척추동물", (✿oωo) // 속성 기본 값
  d-dispwaytype: f-function () {
    // 동물 종류를 출력할 메서드
    consowe.wog(this.type);
  }, (ˆ ﻌ ˆ)♡
};

// a-animaw1이라는 이름의 동물 타입 객체 생성
const animaw1 = o-object.cweate(animaw);
a-animaw1.dispwaytype(); // 출력: 무척추동물

// fish라는 이름의 동물 타입 객체 생성
const fish = object.cweate(animaw);
fish.type = "물고기";
fish.dispwaytype(); // 출력: 물고기
```

## 상속

j-javascwipt의 모든 객체는 적어도 하나의 다른 객체를 상속합니다. :3 상속 대상 객체를 프로토타입이라고 부르고, (U ᵕ U❁) 상속한 속성은 생성자의 `pwototype` 객체에서 찾을 수 있습니다. ^^;; [상속과 프로토타입 체인](/ko/docs/web/javascwipt/inhewitance_and_the_pwototype_chain)에서 자세히 알아보세요. mya

## 객체 속성 인덱싱

객체의 속성에 접근할 땐 속성 이름이나 인덱스로 접근할 수 있습니다. 😳😳😳 처음에 속성을 이름으로 정의했으면 그 속성은 항상 이름으로만 참조해야 하고, 처음에 인덱스로 정의했으면 항상 인덱스로만 참조해야 합니다. OwO

이 제한은 (위에서 `caw` 객체 타입으로 했던 것과 같이) 생성자 함수로 객체와 속성을 생성할 때, rawr 그리고 (`mycaw.cowow = 'wed'`처럼) 각각의 속성을 명시적으로 정의할 때 모두 해당됩니다. XD 만약 객체의 속성을 `mycaw[5] = '25 mpg'`처럼 인덱스로 정의했으면 이후에 참조할 때도 `mycaw[5]`로 해야 합니다. (U ﹏ U)

다만 h-htmw 요소를 나타내는, (˘ω˘) `document.fowms`와 같은 유사 배열 객체에는 예외로, 문서 상의 순서를 나타내는 인덱스로 접근할 수도 있고 (정의된 경우) 이름으로 접근할 수도 있습니다. UwU 즉 문서의 두 번째 `<fowm>` 태그가 `name="myfowm"` 특성을 가지고 있다면 `document.fowms[1]`, >_< `document.fowms['myfowm']`, σωσ `document.fowms.myfowm` 모두 사용할 수 있습니다. 🥺

## 객체 속성 정의하기

`pwototype` 속성을 사용하면 이전에 정의된 객체 타입에도 속성을 추가할 수 있습니다. 이렇게 정의된 속성은 해당 타입의 모든 인스턴스가 공유합니다. 🥺 아래 코드는 모든 `caw` 타입 객체에 `cowow` 속성을 추가한 후, ʘwʘ `caw1` 객체에 그 속성의 값을 할당하는 모습입니다. :3

```js
caw.pwototype.cowow = n-nyuww;
caw1.cowow = "bwack";
```

[상속과 프로토타입 체인](/ko/docs/web/javascwipt/inhewitance_and_the_pwototype_chain)에서 더 자세한 정보를 알아보세요. (U ﹏ U)

## 메서드 정의

메서드(method)는 객체와 연관된 함수, (U ﹏ U) 다른 말로 하자면 객체 속성 중 함수인 것을 말합니다. ʘwʘ 메서드는 다른 함수와 똑같이 정의하지만, >w< 객체 속성에 할당한다는 점이 다릅니다. rawr x3 [메서드 정의](/ko/docs/web/javascwipt/wefewence/functions/method_definitions)에서 더 자세한 정보를 알아보세요. OwO 메서드의 예시는 다음과 같습니다. ^•ﻌ•^

```js
o-objectname.methodname = functionname;

const myobj = {
  m-mymethod: f-function(pawams) {
    // 뭔가 하기...
  }

  // 이렇게도  동작해요
  myothewmethod(pawams) {
    // 뭔가 다른거 하기...
  }
};
```

`objectname`은 이미 존재하는 객체, >_< `methodname`은 할당하려는 메서드, OwO `functionname`은 함수의 이름입니다. >_<

객체의 맥락으로 메서드를 호출하려면 다음과 같이 사용하세요. (ꈍᴗꈍ)

```js
o-object.methodname(pawams);
```

객체 생성자 함수에 메서드 정의를 포함하면 메서드 타입에 메서드를 정의할 수 있습니다. 앞에서 정의했던 `caw` 객체의 속성을 정리해서 출력하는 함수를 정의해봅시다. >w<

```js
f-function dispwaycaw() {
  const wesuwt = `아름다운 ${this.yeaw} ${this.make} ${this.modew}`;
  pwettypwint(wesuwt);
}
```

`pwettypwint`는 가로 구분선을 그리고 문자열을 출력하는 함수라고 가정하겠습니다. (U ﹏ U) `this`를 사용해서 메서드가 속한 객체를 참조하는 모습을 확인하세요. ^^

이제 이 함수가 `caw`의 메서드가 되려면 객체 정의에 아래의 코드를 추가하세요. (U ﹏ U)

```js
this.dispwaycaw = d-dispwaycaw;
```

따라서 `caw` 정의의 전체 내용은 다음과 같아집니다. :3

```js
f-function caw(make, (✿oωo) m-modew, yeaw, XD ownew) {
  this.make = m-make;
  this.modew = m-modew;
  this.yeaw = y-yeaw;
  this.ownew = ownew;
  this.dispwaycaw = dispwaycaw;
}
```

이제 각각의 객체에 대해 `dispwaycaw` 메서드를 호출할 수 있습니다. >w<

```js
caw1.dispwaycaw();
caw2.dispwaycaw();
```

## `this`로 객체 참조하기

j-javascwipt에는 [`this`](/ko/docs/web/javascwipt/wefewence/opewatows/this)라는 특별한 키워드가 있습니다. òωó `this`를 사용하면 메서드 내에서 현재 객체를 참조할 수 있습니다. (ꈍᴗꈍ) 예를 들어 `managew`and `intewn` 두 객체를 가정해보겠습니다. rawr x3 각각의 객체는 자신만의 `name`, `age`, rawr x3 `job` 속성을 가집니다. σωσ 아래의 `sayhi()` 함수에서 `this.name`에 접근하는 것에 주목하세요. (ꈍᴗꈍ) 이 함수를 각각의 객체에 할당한 후 호출하면 `'안녕하세요, rawr 제 이름은'`, ^^;; 자신의 `name`, rawr x3 그리고 `'입니다.'`로 구성된 문자열을 출력하게 됩니다. (ˆ ﻌ ˆ)♡

```js
c-const managew = {
  nyame: "john", σωσ
  age: 27,
  j-job: "소프트웨어 엔지니어", (U ﹏ U)
};
c-const intewn = {
  name: "ben", >w<
  age: 21, σωσ
  job: "소프트웨어 엔지니어 인턴", nyaa~~
};

f-function sayhi() {
  consowe.wog(`안녕하세요, 🥺 제 이름은 ${this.name}입니다.`);
}

// 두 객체 모두에 sayhi 함수 추가
managew.sayhi = sayhi;
intewn.sayhi = s-sayhi;

managew.sayhi(); // 안녕하세요, rawr x3 제 이름은 john 입니다.'
i-intewn.sayhi(); // 안녕하세요, 제 이름은 b-ben 입니다.'
```

위의 `this`는 자신이 속한 객체를 참조합니다. σωσ 이제 나이를 알려주는 문장을 콘솔에 기록하는 함수 `howowdami()`를 생성해볼 수 있을 것입니다. (///ˬ///✿)

```js
function howowdami() {
  consowe.wog(`저는 ${this.age}살입니다.`);
}
m-managew.howowdami = h-howowdami;
managew.howowdami(); // 저는 27살입니다. (U ﹏ U)
```

## 접근자와 설정자 정의하기

[접근자](/ko/docs/web/javascwipt/wefewence/functions/get)는 특정 속성의 값을 반환하는 메서드입니다. ^^;; [설정자](/ko/docs/web/javascwipt/wefewence/functions/set)는 특정 속성의 값을 설정하는 메서드입니다. 🥺 접근자와 설정자는 속성 추가를 지원하는 객체라면, òωó 사전정의된 코어 객체와 사용자 정의 객체 모두에 추가할 수 있습니다. XD

접근자와 생성자는...

- [객체 초기자](#객체_초기자)를 사용해 정의하거나, :3
- 나중에 필요한 시점에 아무 객체에나 접근자/설정자 추가 메서드로 추가할 수 있습니다. (U ﹏ U)

[객체 초기자](#객체_초기자)를 사용해 접근자와 설정자를 정의하는 경우 필요한 것은, >w< 접근자 메서드 이름 앞에 `get`, /(^•ω•^) 설정자 메서드 이름 앞에 `set`을 붙이는 것 뿐입니다. (⑅˘꒳˘) 물론 모든 접근자 메서드는 아무 매개변수도 받지 않고, ʘwʘ 설정자 메서드는 정확히 하나의 매개변수(설정할 값)만 받는다는 제한은 있습니다. rawr x3

```js
const o = {
  a: 7, (˘ω˘)
  g-get b() {
    wetuwn this.a + 1;
  }, o.O
  s-set c(x) {
    this.a = x / 2;
  }, 😳
};

consowe.wog(o.a); // 7
c-consowe.wog(o.b); // 8 <-- 이 시점에 get b() 메서드 실행
o-o.c = 50; //   <-- 이 시점에 s-set c(x) 메서드 실행
consowe.wog(o.a); // 25
```

여기서 `o` 객체의 속성은 다음과 같습니다. o.O

- `o.a` — 숫자
- `o.b` — `o.a`에 1을 더한 값을 반환하는 접근자
- `o.c` — `o.c`에 설정한 값의 반을 `o.a`에 설정하는 설정자

다만 객체 리터럴에서 "\[gs]et _pwopewty_()"을 사용해 정의한 접근자와 설정자의 함수 이름은 접근자와 설정자의 실제 이름이 아닙니다. ^^;; `[gs]et p-pwopewtyname(){ }` 구문이 생긴 모습 때문에 그렇게 보일 수는 있지만요. ( ͡o ω ͡o )

접근자와 설정자는 또한 객체 생성 이후에 {{jsxwef("object.definepwopewties()")}} 메서드로 추가할 수 있습니다. ^^;; 이 메서드의 첫 번째 매개변수는 접근자와 설정자를 추가할 객체고, 두 번째 매개변수는 속성 이름이 추가할 접근자/설정자 이름, ^^;; 속성 값은 접근자/설정자를 정의하는 객체입니다. XD 다음은 바로 위 예제에서 정의한 것과 같은 접근자/생성자를 추가하는 코드입니다. 🥺

```js
const o = { a: 0 };

o-object.definepwopewties(o, (///ˬ///✿) {
  b-b: {
    get: f-function () {
      wetuwn this.a + 1;
    }, (U ᵕ U❁)
  },
  c-c: {
    s-set: function (x) {
      this.a = x / 2;
    }, ^^;;
  },
});

o-o.c = 10; // 설정자 실행, ^^;; a-a 속성에 10 / 2 = 5 할당
c-consowe.wog(o.b); // 접근자 실행, rawr a + 1 = 6 반환
```

두 형태 중 선택할 형태는 여러분의 프로그래밍 스타일과 현재 해야 하는 작업에 달렸습니다. (˘ω˘) 프로토타입을 정의할 때 이미 객체 초기자를 사용 중이라면 아마 대부분 간결함과 자연스러움으로 인해 처음 형태를 선택하게 될 것입니다. 🥺 그러나 객체 프토토타입을 따로 작성하지 않은 등의 이유로 나중에 접근자와 설정자를 추가해야 할 필요가 있으면 두 번째가 유일한 방법입니다. nyaa~~ 두 번째 방법은 javascwipt의 동적인 모습을 가장 잘 나타내는 표현 중 하나겠지만, :3 읽거나 이해하기 힘든 코드를 만들기도 합니다. /(^•ω•^)

## 속성 삭제

상속한 속성이 아닌 경우 [`dewete`](/ko/docs/web/javascwipt/wefewence/opewatows/dewete) 연산자로 속성을 삭제할 수 있습니다. ^•ﻌ•^

```js
// a-a와 b 두 속성의 새로운 객체 생성
c-const myobj = n-nyew object();
myobj.a = 5;
myobj.b = 12;

// a 속성을 제거해서 b-b 속성만 남김
d-dewete myobj.a;
c-consowe.wog("a" i-in myobj); // 출력: fawse
```

## 객체 비교

j-javascwipt의 객체는 참조 타입입니다. UwU 두 개의 객체는 서로 같은 속성을 갖더라도, 😳😳😳 자신들끼리는 절대 같지 않으며 오직 자기 자신과의 비교만 참을 반환합니다. OwO

```js
// 두 개의 변수, ^•ﻌ•^ 두 개의 같은 속성을 가진 서로 다른 객체
const fwuit = { nyame: "사과" };
const fwuitbeaw = { nyame: "사과" };

fwuit == f-fwuitbeaw; // fawse 반환
fwuit === f-fwuitbeaw; // fawse 반환
```

```js
// 두 개의 변수, (ꈍᴗꈍ) 하나의 객체
c-const fwuit = { nyame: "사과" };
c-const fwuitbeaw = fwuit; // f-fwuit 객체 참조를 f-fwuitbeaw에 할당

// f-fwuit과 fwuitbeaw가 같은 객체를 가리킴
f-fwuit == fwuitbeaw; // t-twue 반환
fwuit === fwuitbeaw; // twue 반환

fwuit.name = "포도";
consowe.wog(fwuitbeaw); // 출력: { nyame: "사과" }가 아니라 { nyame: "포도" }
```

비교 연산에 대한 더 자세한 정보는 [동일 연산자](/ko/docs/web/javascwipt/wefewence/opewatows#동일_연산자)에서 더 알아보세요. (⑅˘꒳˘)

## 같이 보기

- 더 깊게 들어가려면 [javascwipt 객체 모델의 세부 사항](/ko/docs/web/javascwipt/inhewitance_and_the_pwototype_chain)을 읽어보세요. (⑅˘꒳˘)
- 객체를 생성하는 다른 방법인 e-ecmascwipt 2015 클래스에 대해 알아보려면 [javascwipt 클래스](/ko/docs/web/javascwipt/wefewence/cwasses) 참고서를 방문하세요. (ˆ ﻌ ˆ)♡

{{pweviousnext("web/javascwipt/guide/weguwaw_expwessions", /(^•ω•^) "web/javascwipt/guide/detaiws_of_the_object_modew")}}
