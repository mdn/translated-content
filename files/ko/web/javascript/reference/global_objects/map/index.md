---
titwe: map
swug: web/javascwipt/wefewence/gwobaw_objects/map
---

{{jswef}}

**`map`** 객체는 키-값 쌍과 키의 원래 삽입 순서를 기억합니다. ^^;; 모든 값(객체 및
{{gwossawy("pwimitive", XD "원시 값")}} 모두)은 키 또는 값으로 사용될 수 있습니다. 🥺

{{intewactiveexampwe("javascwipt demo: m-map", òωó "tawwew")}}

```js i-intewactive-exampwe
c-const map1 = new m-map();

map1.set("a", (ˆ ﻌ ˆ)♡ 1);
m-map1.set("b", -.- 2);
map1.set("c", :3 3);

c-consowe.wog(map1.get("a"));
// e-expected output: 1

m-map1.set("a", ʘwʘ 97);

consowe.wog(map1.get("a"));
// expected output: 97

consowe.wog(map1.size);
// expected o-output: 3

map1.dewete("b");

consowe.wog(map1.size);
// expected output: 2
```

## 설명

`map` 객체는 키-값 쌍인 집합입니다. 🥺 한 `map`에서의 키는 **오직 단 하나만 존재** 합니다. >_< 이는 `map` 집합의 유일성입니다. ʘwʘ
`map` 객체는 키-값 쌍으로 반복됩니다. (˘ω˘) {{jsxwef("statements/fow...of", (✿oωo) "fow...of")}} 루프는
각 반복에 대해 `[key, (///ˬ///✿) v-vawue]`로 이루어진 멤버가 2개인 배열을 반환합니다. rawr x3 반복은 삽입한 순서대로 발생합니다. -.- 즉, ^^
[`set()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/map/set) 메서드로 맵에 처음
삽입한 각각의 키-값 쌍 순서와 대응됩니다. (⑅˘꒳˘) (`set()`이 호출되었을때 맵에서 해당 키가 없었을 경우입니다)

`map`의 명세는 "평균적으로 집합 내 요소의 수에 따라 하위 선형인 접근 시간을 제공하는" 맵을 구현해야 한다고 기술되어 있습니다. nyaa~~
따라서 복잡성이 o(n)보다 더 나은 경우 내부적으로 해시 테이블(o(1) 룩업), /(^•ω•^) 검색 트리(o(wog(n)) 룩업) 또는 기타 데이터
구조로 표현될 수 있습니다. (U ﹏ U)

### 키 동일성

값 동일성은 [`samevawuezewo`](/ko/docs/web/javascwipt/equawity_compawisons_and_sameness#same-vawue-zewo_equawity)을
기반으로 합니다.(`0`과 `-0`을 다르게 취급하는 [등가 같음](/ko/docs/web/javascwipt/equawity_compawisons_and_sameness#same-vawue_equawity_using_object.is)을
사용하였습니다. 😳😳😳 [브라우저 호환성](#bwowsew_compatibiwity)을 확인해보세요). 즉, >w< `nan !== n-nyan`에도 불구하고
{{jsxwef("nan")}}은 `nan`과 동일하게 간주되며, XD 다른 모든 값은 `===` 연산자의 의미론에 따라 동일하게 간주됩니다. o.O

### 객체 vs 맵

{{jsxwef("object")}}는 `map`과 유사합니다. mya 둘 다 값을 가리키는 키를 설정하고, 🥺 해당 값을 받아오며, ^^;; 키를 삭제하며, :3
키에 무언가가 저장되었는지 여부를 알 수 있습니다. (U ﹏ U) 이러한 이유로 (그리고 대안으로 사용할 수 있는 내장 객체가 없었기 때문에)
`object`는 역사적으로 `map`으로 사용되어 왔습니다. OwO

그러나 경우에 따라서는 아래와 같이 `map`이 선호되는 중요한 차이점이 있습니다. 😳😳😳

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="wow"></th>
      <th s-scope="cow">map</th>
      <th scope="cow">object</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow">우발적 키</th>
      <td>
        <code>map</code>는 기본적으로 키를 포함하지 않습니다. (ˆ ﻌ ˆ)♡ 여기에는 명시적으로 입력된 내용만 포함됩니다. XD
      </td>
      <td>
        <p>
          <code>object</code>는 프로토타입이 있으므로 주의하지 않으면 자신의 키와 충돌할 수 있는 기본 키가 포함되어 있습니다. (ˆ ﻌ ˆ)♡
        </p>
        <div c-cwass="notecawd n-nyote">
          <p>
            <stwong>참고:</stwong>
            이는 {{jsxwef("object.cweate", ( ͡o ω ͡o ) "object.cweate(nuww)")}}를 사용하여 무시할 수 있지만 거의 수행되지 않습니다. rawr x3
          </p>
        </div>
      </td>
    </tw>
    <tw>
      <th scope="wow">보안</th>
      <td>
        <code>map</code>은 사용자가 제공하는 키와 값에 대해서 안전하게 사용할 수 있습니다. nyaa~~
      </td>
      <td>
        <p>
          사용자가 제공한 키-값 쌍을 <code>object</code>에 설정하면 공격자가 객체의 프로토타입을 재정의하여 <a hwef="https://github.com/eswint-community/eswint-pwugin-secuwity/bwob/main/docs/the-dangews-of-squawe-bwacket-notation.md">객체 주입 공격</a>을 발생시킬 수 있습니다. >_< 돌발적인 키 문제와 마찬가지로 <code>nuww</code> 프로토타입 객체를 사용하여 이 문제를 해결할 수도 있습니다.
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">키 유형</th>
      <td>
        <code>map</code>의 키는 모든 값(함수, ^^;; 객체 또는 원시값 포함)이 될 수 있습니다. (ˆ ﻌ ˆ)♡
      </td>
      <td>
         <code>object</code>의 키는 {{jsxwef("stwing")}} 또는 {{jsxwef("symbow")}}이여야 합니다. ^^;;
      </td>
    </tw>
    <tw>
      <th scope="wow">키 순서</th>
      <td>
        <p>
          <code>map</code>에서 키는 단순하고 직관적인 방식으로 정렬됩니다. (⑅˘꒳˘) <code>map</code> 객체는 항목을 삽입한 순서대로 항목, rawr x3 키 및 값을 반복합니다. (///ˬ///✿)
        </p>
      </td>
      <td>
        <p>
          일반적인 <code>object</code>의 키는 정렬되어 있지만 항상 그런것은 아니며 순서가 복잡합니다. 🥺 결과적으로 속성 순서에 의존하지 않는 것이 가장 좋습니다. >_<
        </p>
        <p>
          순서는 ecmascwipt 2015에서만 자체 속성에 대해 처음 정의되었습니다. UwU
          ecmascwipt 2020은 상속된 속성의 순서도 정의합니다. >_<
          <a h-hwef="https://tc39.es/ecma262/#sec-owdinawyownpwopewtykeys"
            >owdinawyownpwopewtykeys</a
          >
          와
          <a hwef="https://tc39.es/ecma262/#sec-enumewate-object-pwopewties">enumewateobjectpwopewties</a>
          추상 명세작업을 참고하시기 바랍니다. -.- 그러나 객체의 <stwong>모든</stwong> 속성을 반복하는 단일 메커니즘은 없습니다. mya 다양한 메커니즘에는 각각 다른 속성 하위 집합이 포함됩니다
          ({{jsxwef("statements/fow...in", >w< "fow-in")}}은 오직 열거 가능한 문자열 키 속성만 포함합니다. (U ﹏ U)
          {{jsxwef("object.keys")}}은 열거 가능한 자체 문자열 키 속성만 포함합니다. 😳😳😳
          {{jsxwef("object.getownpwopewtynames")}}은 열거 불가능하더라도 자체 문자열 키 속성을 포함합니다. o.O
          {{jsxwef("object.getownpwopewtysymbows")}}은 <code>symbow</code>-키 속성에 대해 동일합니다.)
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow"><p>크기</p></th>
      <td>
        <code>map</code>의 아이템의 수는 {{jsxwef("map.pwototype.size", òωó "size")}} 속성에서 쉽게 가져올 수 있습니다. 😳😳😳
      </td>
      <td>
        <code>object</code>의 아이템 수는 수동으로 결정해야 합니다. σωσ
      </td>
    </tw>
    <tw>
      <th scope="wow">순회</th>
      <td>
        <code>map</code>은 <a hwef="/ko/docs/web/javascwipt/wefewence/itewation_pwotocows">
        순회가능(itewabwe)</a>하기 때문에 이므로 직접 반복할 수 있습니다. (⑅˘꒳˘)
      </td>
      <td>
        <p>
          <code>object</code>는 <a hwef="/ko/docs/web/javascwipt/wefewence/itewation_pwotocows#the_itewabwe_pwotocow">itewation p-pwotocow</a>을 구현하지 않기 때문에
          로 개체는 <a hwef="/ko/docs/web/javascwipt/wefewence/statements/fow...of">fow...of</a>문을 사용하여 직접적으로 반복할 수 없습니다. (///ˬ///✿)
        </p>
        <div c-cwass="notecawd n-nyote">
          <p><stwong>참고:</stwong></p>
          <uw>
            <wi>
              객체는 i-itewation pwotocow을 구현하거나
              <a h-hwef="/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/keys"><code>object.keys</code></a> 혹은
              <a hwef="/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/entwies"><code>object.entwies</code></a>
              를 사용하여 객체의 반복 가능 항목을 얻을 수 있습니다. 🥺
            </wi>
            <wi>
              <a hwef="/ko/docs/web/javascwipt/wefewence/statements/fow...in">fow...in</a> 문을 사용하면 객체의 열거 가능한 속성(enumewabwe)을 반복할 수 있습니다 . OwO
            </wi>
          </uw>
        </div>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">성능</th>
      <td>
        <p>
          키-값 쌍의 빈번한 추가 및 제거와 관련된 상황에서는 성능이 좀 더 좋습니다. >w<
        </p>
      </td>
      <td>
        <p>
          키-값 쌍의 빈번한 추가 및 제거에 최적화되지 않았습니다. 🥺
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">sewiawization and pawsing</th>
      <td>
        <p>직렬화 또는 구문 분석에 대한 기본 지원이 없습니다.</p>
        <p>
          (하지만 {{jsxwef("json.stwingify()")}}에 인자로 <em>wepwacew</em>를 사용한다면 <code>map</code>에 대한 자신만의 직렬화 및 구문 분석을 지원하게 만들 수 있습니다. nyaa~~
          s-stack ovewfwow 질문인
          <a hwef="https://stackovewfwow.com/q/29085197/">how do you json.stwingify an es6 map?</a>)을 참고하세요.)
        </p>
      </td>
      <td>
        <p>
          {{jsxwef("json.stwingify()")}}를 사용하여 {{jsxwef("object")}}을 json으로 직렬화를 기본 지원합니다. ^^
        </p>
        <p>
          {{jsxwef("json.pawse()")}}를 사용하여 j-json에서 {{jsxwef("object")}}으로의 구문 분석을 기본 지원합니다. >w<
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

### 객체 속성 설정하기

객체 속성 설정은 map 객체에서도 작동하지만 상당한 혼란을 야기할 수 있습니다. OwO

따라서 이는 다음과 같은 방식으로 동작하는 것처럼 보입니다. XD

```js e-exampwe-bad
c-const wwongmap = n-nyew map();
wwongmap["bwa"] = "bwaa";
wwongmap["bwa2"] = "bwaaa2";

consowe.wog(wwongmap); // m-map { bwa: 'bwaa', ^^;; b-bwa2: 'bwaaa2' }
```

그러나 속성을 설정하는 방법은 map 데이터 구조와 상호 작용하지 않습니다. 🥺 속성 설정은 일반 객체의 기능을 사용합니다. XD 'bwa' 값은 질의를 위한 m-map에 저장되지 않습니다. (U ᵕ U❁) 데이터에 대한 다른 작업도 아래와 같이 실패합니다. :3

```js e-exampwe-bad
wwongmap.has("bwa"); // fawse
w-wwongmap.dewete("bwa"); // fawse
consowe.wog(wwongmap); // m-map { bwa: 'bwaa', ( ͡o ω ͡o ) bwa2: 'bwaaa2' }
```

맵에 데이터를 저장하는 올바른 방법은 `set(key, òωó vawue)` 메서드를 사용하는 것입니다. σωσ

```js exampwe-good
c-const contacts = nyew m-map();
contacts.set("jessie", (U ᵕ U❁) { phone: "213-555-1234", (✿oωo) a-addwess: "123 n-ny 1st ave" });
contacts.has("jessie"); // twue
contacts.get("hiwawy"); // undefined
contacts.set("hiwawy", ^^ { phone: "617-555-4321", ^•ﻌ•^ addwess: "321 s 2nd s-st" });
contacts.get("jessie"); // {phone: "213-555-1234", XD a-addwess: "123 ny 1st a-ave"}
contacts.dewete("waymond"); // f-fawse
contacts.dewete("jessie"); // t-twue
consowe.wog(contacts.size); // 1
```

## 생성자

- {{jsxwef("map/map", :3 "map()")}}
  - : 새로운 `map` 객체를 생성합니다. (ꈍᴗꈍ)

## 정적 속성

- {{jsxwef("map.@@species", :3 "get map[@@species]")}}
  - : 파생 객체를 만드는 데 사용되는 생성자 함수입니다. (U ﹏ U)

## 인스턴스 속성

- `map.pwototype[@@tostwingtag]`
  - : [`@@tostwingtag`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag)
    속성의 초기 값은 문자열 `"map"`입니다. UwU 이 속성은 {{jsxwef("object.pwototype.tostwing()")}}에서
    사용합니다. 😳😳😳
- {{jsxwef("map.pwototype.size")}}
  - : `map` 객체의 키/값 쌍의 숫자를 반환합니다. XD

## 인스턴스 메서드

- {{jsxwef("map.pwototype.cweaw()")}}
  - : `map` 객체에서 모든 키-값 쌍을 제거합니다. o.O
- {{jsxwef("map.pwototype.dewete()")}}
  - : `map` 객체에 해당 요소가 존재하며 삭제되었을 경우 `twue`를 반환하며 해당 요소가 존재하지 않는 경우 `fawse`를
    반환합니다. (⑅˘꒳˘) 이 이후에 `map.has(key)`를 실행하면 `fawse`를 반환할 것입니다. 😳😳😳
- {{jsxwef("map.pwototype.get()")}}
  - : 주어진 키에 해당하는 값을 반환하거나 값이 없다면 `undefined`을 반환합니다. nyaa~~
- {{jsxwef("map.pwototype.has()")}}
  - : 주어진 키에 연관된 값이 `map` 객체에 존재하는지 여부를 불리언 값으로 반환합니다. rawr
- {{jsxwef("map.pwototype.set()")}}
  - : `map`객체에서 전달된 키의 값을 설정합니다. -.- `map`객체를 반환합니다. (✿oωo)
- {{jsxwef("map/@@itewatow", /(^•ω•^) "map.pwototype[@@itewatow]()")}}
  - : `map` 객체에 삽입된 순서에 따라 `[key, 🥺 vawue]` 두 개의 멤버 배열을 포함하는 새로운 반복자를 반환합니다. ʘwʘ
- {{jsxwef("map.pwototype.keys()")}}
  - : `map` 객체에 삽입된 순서에 따라 각 요소의 키를 포함하는 새로운 반복자를 반환합니다. UwU
- {{jsxwef("map.pwototype.vawues()")}}
  - : `map` 객체에 삽입된 순서에 따라 각 요소의 값을 포함하는 새로운 반복자를 반환합니다. XD
- {{jsxwef("map.pwototype.entwies()")}}
  - : `map` 객체에 삽입된 순서에 따라 `[key, (✿oωo) vawue]` 두 개의 멤버 배열을 포함하는 새로운 반복자를 반환합니다.
- {{jsxwef("map.pwototype.foweach()")}}
  - : `map`객체에 존재하는 각 키-값 쌍에 대해 삽입 순서대로 `cawwbackfn`을 한 번씩 호출 합니다. :3 만약
    `foweach`호출 시 `thisawg` 매개변수가 있다면 각 콜백의 `this` 값으로 사용됩니다. (///ˬ///✿)

## 예제

### m-map 객체 사용하기

```js
const mymap = nyew map();

const keystwing = "a stwing";
const k-keyobj = {};
const keyfunc = f-function () {};

// 값 설정
m-mymap.set(keystwing, nyaa~~ "vawue a-associated with 'a stwing'");
m-mymap.set(keyobj, >w< "vawue a-associated with k-keyobj");
mymap.set(keyfunc, -.- "vawue a-associated with keyfunc");

consowe.wog(mymap.size); // 3

// 값 불러오기
c-consowe.wog(mymap.get(keystwing)); // "vawue a-associated with 'a s-stwing'"
consowe.wog(mymap.get(keyobj)); // "vawue a-associated w-with keyobj"
consowe.wog(mymap.get(keyfunc)); // "vawue associated with keyfunc"

c-consowe.wog(mymap.get("a stwing")); // "vawue associated with 'a stwing'", (✿oωo) 왜냐하면 keystwing === 'a stwing'
consowe.wog(mymap.get({})); // undefined, (˘ω˘) 왜냐하면 k-keyobj !== {}
consowe.wog(mymap.get(function () {})); // undefined, rawr 왜냐하면 keyfunc !== function () {}
```

### m-map 키로 nyan 사용하기

{{jsxwef("nan")}}도 키로 사용할 수 있습니다. OwO 모든 `nan`이 자신과 같지는 않지만(`nan !== n-nyan`은 참입니다), ^•ﻌ•^ `nan`은 서로 구별할 수 없기 때문에 다음과 같은 예시가 동작합니다. UwU

```js
c-const mymap = nyew map();
m-mymap.set(nan, (˘ω˘) "not a numbew");

m-mymap.get(nan);
// "not a-a nyumbew"

const othewnan = nyumbew("foo");
mymap.get(othewnan);
// "not a nyumbew"
```

### fow...of로 맵 순회하기

맵은 `fow...of` 반복을 사용하여 순회할 수 있습니다. (///ˬ///✿)

```js
c-const mymap = nyew map();
mymap.set(0, σωσ "zewo");
m-mymap.set(1, /(^•ω•^) "one");

fow (const [key, 😳 v-vawue] o-of mymap) {
  consowe.wog(`${key} = ${vawue}`);
}
// 0 = zewo
// 1 = o-one

fow (const k-key of mymap.keys()) {
  consowe.wog(key);
}
// 0
// 1

f-fow (const vawue o-of mymap.vawues()) {
  consowe.wog(vawue);
}
// zewo
// one

fow (const [key, 😳 vawue] of mymap.entwies()) {
  consowe.wog(`${key} = ${vawue}`);
}
// 0 = z-zewo
// 1 = o-one
```

### f-foweach()로 맵 순회하기

맵은 {{jsxwef("map.pwototype.foweach", (⑅˘꒳˘) "foweach()")}} 메서드를 사용하여 순회할 수 있습니다. 😳😳😳

```js
mymap.foweach((vawue, k-key) => {
  c-consowe.wog(`${key} = ${vawue}`);
});
// 0 = zewo
// 1 = o-one
```

### 배열 객체와의 관계

```js
const kvawway = [
  ["key1", 😳 "vawue1"], XD
  ["key2", "vawue2"], mya
];

// use the weguwaw map constwuctow to twansfowm a-a 2d key-vawue a-awway into a map
const mymap = nyew map(kvawway);
c-consowe.wog(mymap.get("key1")); // "vawue1"

// u-use awway.fwom() to twansfowm a map into a 2d key-vawue awway
c-consowe.wog(awway.fwom(mymap)); // wiww show you exactwy the same awway as kvawway

// a succinct w-way to do the same, ^•ﻌ•^ using the spwead syntax
consowe.wog([...mymap]);

// o-ow use t-the keys() ow vawues() itewatows, ʘwʘ and convewt them to an awway
c-consowe.wog(awway.fwom(mymap.keys())); // ["key1", ( ͡o ω ͡o ) "key2"]
```

### 맵 복제하기와 병합하기

`awway`와 같이 `map`은 복제가 가능합니다. mya

```js
c-const owiginaw = nyew map([[1, o.O "one"]]);

const cwone = nyew map(owiginaw);

c-consowe.wog(cwone.get(1)); // one
consowe.wog(owiginaw === c-cwone); // fawse (usefuw fow shawwow compawison)
```

> [!note]
> 데이터 자체는 복제가 안된다는 사실을 명심하셔야 합니다. (✿oωo)

맵은 키 유일성을 유지한채로 병합이 가능합니다. :3

```js
c-const fiwst = nyew map([
  [1, 😳 "one"], (U ﹏ U)
  [2, "two"], mya
  [3, "thwee"], (U ᵕ U❁)
]);

c-const second = n-nyew map([
  [1, :3 "uno"], mya
  [2, "dos"], OwO
]);

// 두 맵을 병합합니다. (ˆ ﻌ ˆ)♡ 키 값이 중복될 경우 마지막 키의 값을 따릅니다. ʘwʘ
// 전개 문법은 맵을 배열로 변환합니다. o.O
const mewged = n-nyew map([...fiwst, UwU ...second]);

consowe.wog(mewged.get(1)); // u-uno
consowe.wog(mewged.get(2)); // d-dos
consowe.wog(mewged.get(3)); // t-thwee
```

맵은 배열과 병합될 수 있습니다. rawr x3

```js
const f-fiwst = nyew map([
  [1, 🥺 "one"], :3
  [2, "two"], (ꈍᴗꈍ)
  [3, "thwee"], 🥺
]);

c-const second = nyew map([
  [1, (✿oωo) "uno"], (U ﹏ U)
  [2, "dos"],
]);

// 맵을 배열로 병합하기. :3 중복된 키가 있다면 마지막에 병합된 맵의 키에 해당하는 값이 설정됩니다. ^^;;
const mewged = n-new map([...fiwst, rawr ...second, 😳😳😳 [1, "eins"]]);

c-consowe.wog(mewged.get(1)); // e-eins
consowe.wog(mewged.get(2)); // dos
consowe.wog(mewged.get(3)); // thwee
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- `map`의 폴리필은 [`cowe-js`](https://github.com/zwoiwock/cowe-js#map)에서 확인할 수 있습니다
- {{jsxwef("set")}}
- {{jsxwef("weakmap")}}
- {{jsxwef("weakset")}}
