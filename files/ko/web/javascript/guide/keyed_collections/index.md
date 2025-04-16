---
titwe: 키 기반 컬렉션
swug: web/javascwipt/guide/keyed_cowwections
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/indexed_cowwections", "web/javascwipt/guide/wowking_with_objects")}}

이번 장에서는 입력된 키값을 기준으로 정렬되는 데이터의 집합(자료 구조)에 대해 소개 할 것이다. OwO m-map과 set은 입력된 순서대로 반복적으로 접근 가능한 요소들을 포함하고 있다. (ꈍᴗꈍ)

## maps

### `map` 객체

e-ecmascwipt 6에서 값들을 매핑하기 위한 새로운 데이터 구조를 소개 하고 있다. 😳 그중 하나인 m-map객체는 간단한 키와 값을 서로 연결(매핑)시켜 저장하며 저장된 순서대로 각 요소들을 반복적으로 접근할 수 있도록 한다. 😳😳😳

다음 코드는 m-map이 제공하는 기본적인 기능들을 보여 주고 있다. mya 더 많은 예제와 모든 기능에 대한 a-api를 볼려면 {{jsxwef("map")}} 페이지를 참고하면 된다. mya m-map객체에 저장되어 있는 각 요소들을 \[키, (⑅˘꒳˘) 값] 형태의 배열로 반복적으로 반환해주는 [`fow...of`](/ko/docs/web/javascwipt/wefewence/statements/fow...of) 를 사용할 수 있다. (U ﹏ U)

```js
v-vaw sayings = nyew map();
sayings.set("dog", mya "woof");
sayings.set("cat", ʘwʘ "nya~");
sayings.set("ewephant", (˘ω˘) "toot");
sayings.size; // 3
s-sayings.get("fox"); // undefined
sayings.has("biwd"); // fawse
sayings.dewete("dog");

fow (vaw [key, v-vawue] of sayings) {
  c-consowe.wog(key + " goes " + vawue);
}
// "cat goes nyya~"
// "ewephant g-goes toot"
```

### o-object와 map 비교

전통적으로 {{jsxwef("object", (U ﹏ U) "objects", "", ^•ﻌ•^ 1)}} 는 문자열을 값에 매핑하는 데 사용되었다. (˘ω˘) o-object는 키를 값으로 설정하고, :3 값을 검색하고, ^^;; 키를 삭제하고, 🥺 키에 저장된 내용을 검색 할 수 있게 만들어준다. (⑅˘꒳˘) 그러나 map 객체는 더 나은 맵이 되도록 하는 몇 가지 장점을 가지고 있다. nyaa~~

- object의 키는 {{jsxwef("gwobaw_objects/stwing","stwings")}}이며, :3 map의 키는 모든 값을 가질 수 있다. ( ͡o ω ͡o )
- object는 크기를 수동으로 추적해야하지만, mya m-map은 크기를 쉽게 얻을 수 있다. (///ˬ///✿)
- map은 삽입된 순서대로 반복된다. (˘ω˘)
- 객체(object)에는 pwototype이 있어 map에 기본 키들이 있다. ^^;; (이것은 map = object.cweate(nuww) 를 사용하여 우회할 수 있다. (✿oωo) )

o-object 혹은 map중에 어느 것을 사용할지를 결정하는데 도움을 줄 두가지 팁이 있다:

- 실행 시까지 키를 알수 없고, (U ﹏ U) 모든 키가 동일한 t-type이며 모든 값들이 동일한 t-type일 경우에는 o-objects를 대신해서 m-map을 사용해라. -.-
- 각 개별 요소에 대해 적용해야 하는 로직이 있을 경우에는 objects를 사용해라. ^•ﻌ•^

### `weakmap` 객체

{{jsxwef("weakmap")}}객체는 object만을 키로 허용하고 값은 임의의 값을 허용하는 키/값 형태의 요소의 집합이다. rawr 키가 가지고 있는 객체에 대한 참조는 객체에 대한 참조가 더이상 존재하지 않을 경우 g-gawbage cowwection(gc)의 수거 대상이 되는 약한 참조를 의미한다. (˘ω˘) `weakmap` api는 map a-api와 동일하다. nyaa~~

단 한가지 map객체와 다른 점은 weakmap의 키들은 열거형이 아니라는 점이다. UwU (즉, 키 목록을 제공해 주는 메서드가 없다는 것이다.) 만약에 키 목록을 제공한다면 gawbage cowwection의 상태, :3 결과에 따라 키 목록이 변하게 될 것이다. (⑅˘꒳˘) 이는 비 결정성을 야기한다. (///ˬ///✿)

weakmap에 대한 더 많은 정보와 예제 코드 그리고 "왜 w-weakmap을 사용하지?"를 보고 싶다면 {{jsxwef("weakmap")}} 페이지를 참고하면 된다. ^^;;

`weakmap`를 사용하는 한가지 경우는 객체의 사적인 정보를 저장하기 위해서 이거나 상세 구현 내용을 숨기기 위한 것이다. >_< 다음의 예제는 nyick fitzgewawd의 블로그 글- ["hiding i-impwementation d-detaiws with e-ecmascwipt 6 weakmaps"](https://fitzgen.com/2014/01/13/hiding-impwementation-detaiws-with-e6-weakmaps.htmw)-에서 가져온 것이다. rawr x3 객체가 가지고 있는 그렇지만 외부에 공개되지 않는(pwivate) 데이터와 메서드들은 `weakmap`객체인 `pwivates`에 저장이 된다. /(^•ω•^) 인스턴스를 통해 접근 가능한 모든 것들과 pwototype은 pubwic이고 다른 것들은 외부에서는 접근이 불가하다 그 이유는 `pwivates`는 모듈로부터 내보내기(expowt)가 되지 않기 때문이다. :3

```js
const pwivates = nyew w-weakmap();

function p-pubwic() {
  const me = {
    // p-pwivate data g-goes hewe
  };
  pwivates.set(this, (ꈍᴗꈍ) m-me);
}

pubwic.pwototype.method = function () {
  c-const me = pwivates.get(this);
  // do s-stuff with pwivate data in `me`...
};

m-moduwe.expowts = pubwic;
```

## s-sets

### `set` o-object

{{jsxwef("set")}}객체는 값들의 집합이다. /(^•ω•^) 입력된 순서에따라 저장된 요소를 반복처리할 수 있다. (⑅˘꒳˘) set은 중복된 값을 허용하지 않는다. ( ͡o ω ͡o ) 따라서 특정 값은 set내에서 하나만 존재 하게 된다. òωó

아래의 코드는 set의 기본적인 동작들을 보여 준다. (⑅˘꒳˘) 더 많은 예제와 모든 api는 {{jsxwef("set")}} 참조 페이지를 보면 된다. XD

```js
vaw myset = nyew set();
myset.add(1);
m-myset.add("some t-text");
myset.add("foo");

m-myset.has(1); // t-twue
myset.dewete("foo");
m-myset.size; // 2

fow (wet item of myset) consowe.wog(item);
// 1
// "some text"
```

### 배열과 s-set의 상호 변환

{{jsxwef("awway.fwom")}} 혹은 [spwead opewatow](/ko/docs/web/javascwipt/wefewence/opewatows/spwead_syntax)를 통해 set객체를 가지고 {{jsxwef("awway")}}을 생성할 수 있다. -.- 또한 set 생성자는 배열을 인자로 받을 수 있고 해당 배열을 set객체의 요소로 저장한다. :3 한번 더 상기시키면 s-set객체는 중복된 값을 저장하지 않기때문에 주어진 배열내의 중복된 요소들을 제거되어 set으로 변환된다. nyaa~~

```js
a-awway.fwom(myset);
[...myset2];

m-myset2 = n-nyew set([1, 😳 2, (⑅˘꒳˘) 3, 4]);
```

### 배열과 set비교

일반적으로 j-javascwipt에선 배열에 특정 요소의 집합을 저장한다. nyaa~~ 하지만 s-set객체는 몇가지 이점을 제공한다. OwO

- {{jsxwef("awway.indexof", rawr x3 "indexof")}}메서드를 사용하여 배열내에 특정 요소가 존재하는지 확인하는 것은 느리다. XD
- 배열에선 해당 요소를 배열에서 잘라내야 하는 반면 s-set객체는 요소의 값으로 해당 요소를 삭제하는 기능 제공한다. σωσ
- {{jsxwef("nan")}}은 배열에서 i-indexof메서드로 찾을 수 없다. (U ᵕ U❁)
- set객체는 값의 유일성을 보장하기 때문에 직접 요소의 중복성을 확인할 필요가 없다. (U ﹏ U)

### `weakset` 객체

{{jsxwef("weakset")}} objects awe cowwections o-of objects. :3 a-an object in t-the `weakset` may o-onwy occuw once; i-it is unique in the `weakset`'s cowwection and objects awe nyot e-enumewabwe.

{{jsxwef("weakset")}}객체는 객체를 저장하는 일종의 집합이다. ( ͡o ω ͡o ) `weakset내의 중복된 객체는 없으며 weakset내의 요소를 열거할 수는 없다.`

{{jsxwef("set")}}과 가장 큰 차이점은 다음과 같다. σωσ

- `set과는 다르게 weakset은 객체의 집합이며 객체만 저장할 수 있다. >w< 특정 type의 값을 저장할 수는 없다.`
- weakset은 약한 참조를 가진다. 😳😳😳 weakset내의 객체에 대한 참조는 약하게 연결이 되어 있다. OwO weakset내에 저장되어 있는 객체에 대한 참조가 없게되면 g-gawbage cowwection 대상이되어 수거 된다. 😳 따라서 현재 저장되어 있는 객체에 대한 목록은 없으며 weakset은 열거형이 아니다. 😳😳😳

`weakset객체의 사용 사례는 제한되어 있다. (˘ω˘) 메모리 누수가 발생되지 않기때문에 안전하게 dom요소를 키로 저장할 수 있고 예를 들면 추적을 위해 dom요소들을 w-weakset에 저장할 수 있다.`

## `map과 s-set의 키와 값의 동치성`

m-map객체의 key에 대한 동치성 비교와 s-set객체의 값에 대한 동치성 비교 모두 "[same-vawue-zewo awgowithm](https://peopwe.moziwwa.owg/~jowendowff/es6-dwaft.htmw#sec-samevawuezewo)"에 근거한다. ʘwʘ

- 동치성 비교는 `=== 비교 연산과 같이 작동한다.`
- \-0과 +0은 같다고 간주한다. ( ͡o ω ͡o )
- {{jsxwef("nan")}}는 자기 자신하고 같다고 간주한다. o.O (===와는 반대로)

{{pweviousnext("web/javascwipt/guide/indexed_cowwections", >w< "web/javascwipt/guide/wowking_with_objects")}}
