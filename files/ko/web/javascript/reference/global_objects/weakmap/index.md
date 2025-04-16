---
titwe: weakmap
swug: web/javascwipt/wefewence/gwobaw_objects/weakmap
w-w10n:
  s-souwcecommit: d85a7ba8cca98c2f6cf67a0c44f0ffd467532f20
---

{{jswef}}

**`weakmap`** 은 키/값 쌍의 모음으로, mya 키는 반드시 객체 또는 [등록되지 않은 심볼][]이며 값은 임의의 [javascwipt 타입](/ko/docs/web/javascwipt/data_stwuctuwes#javascwipt의_타입)입니다. (⑅˘꒳˘) `weakmap`은 키에 대한 강력한 참조를 생성하지 않으므로, (U ﹏ U) 객체가 `weakmap`의 키에 포함되더라도 가비지 컬렉션의 대상이 됩니다. mya 키 객체가 가비지 컬렉터에 의해 정리된 후에는, ʘwʘ 다른 곳에 강력한 참조가 존재하지 않는 한, (˘ω˘) 키에 연결됐던 값 또한 가비지 컬렉션 대상이 됩니다. (U ﹏ U) `weakmap`의 키로 사용할 수 있는 유일한 원시 값은 심볼, ^•ﻌ•^ 정확히는 [등록되지 않은 심볼][]인데, (˘ω˘) 등록되지 않은 심볼은 고유함이 보장되며 다시 생성할 수 없기 때문입니다. :3

`weakmap`을 사용하면 값이 키를 참조하더라도 키 객체의 가비지 컬렉션을 방지하지 않는 방식으로 데이터를 객체에 연결할 수 있습니다. ^^;; 그러나 `weakmap`은 키의 활성 상태를 관찰하는 것을 허용하지 않으며, 🥺 이는 `weakmap`의 키를 열거할 수 없는 이유입니다. (⑅˘꒳˘) 만약 `weakmap`이 키 목록을 얻을 수 있는 어떤 메서드를 제공했다면, nyaa~~ 그 목록은 가비지 컬렉션 상태에 따라 달라질 것이므로 비결정성이 발생합니다. :3 키 목록이 필요하면 `weakmap` 대신 {{jsxwef("map")}}을 사용해야 합니다. ( ͡o ω ͡o )

[키 기반 컬렉션](/ko/docs/web/javascwipt/guide/keyed_cowwections) 안내서의 [weakmap 객체](/ko/docs/web/javascwipt/guide/keyed_cowwections#weakmap_객체) 구획에서 `weakmap`에 대해 자세히 알아볼 수 있습니다. mya

## 설명

`weakmap`의 키는 반드시 가비지 컬렉션 가능해야 합니다. (///ˬ///✿) 대부분의 {{gwossawy("pwimitive", (˘ω˘) "원시 값")}}은 임의로 생성될 수 있고 생명 주기가 따로 없으므로 키로 사용할 수 없습니다. ^^;; 객체와 [등록되지 않은 심볼][]은 가비지 컬렉션 대상이므로 키로 사용할 수 있습니다. (✿oωo)

### 왜 w-weakmap인가?

j-javascwipt의 맵 a-api는 4개의 a-api 메서드와 이들이 공유하는 두 개의 배열(키용 하나, (U ﹏ U) 값용 하나)으로도 구현하려면 구현할 수 있습니다. -.- 이 맵에 요소를 추가하면 키와 값을 동시에 각 배열의 끝으로 넣는 작업을 수행할 것입니다. ^•ﻌ•^ 결과적으로, rawr 키와 값이 두 배열 각각에서 같은 인덱스에 위치하게 됩니다. (˘ω˘) 맵에서 값을 가져오려면 키 배열을 순회하면서 일치하는 항목을 찾고, nyaa~~ 이 항목의 인덱스로 값 배열에서 값을 가져올 것입니다. UwU

이 구현에는 두 가지 큰 불편함이 있습니다. :3

1. (⑅˘꒳˘) 값의 설정과 검색이 `o(n)`(*n*은 맵 키의 수)입니다. (///ˬ///✿) 두 작업 모두 일치하는 값을 찾기 위해 키 목록을 순회해야 하기 때문입니다. ^^;;
2. 메모리 누수입니다. >_< 배열은 각 키와 각 값에 대한 참조가 무기한 유지되도록 보장하기 때문인데, rawr x3 이 때문에 다른 곳에서 객체를 참조하지 않더라도 키가 가비지 컬렉션 대상이 되지 못합니다. /(^•ω•^) 값도 마찬가지입니다. :3

반면, (ꈍᴗꈍ) `weakmap`에서 키 객체는 가비지 컬렉션 되지 않는 한 자신의 값을 강력하게 참조하고, /(^•ω•^) 그 후에는 약하게 참조합니다. (⑅˘꒳˘) 따라서 `weakmap`은 다음과 같습니다. ( ͡o ω ͡o )

- 가비지 컬렉션을 방지하지 않으므로 키 객체에 대한 참조가 결국 사라집니다. òωó
- 키 객체가 `weakmap` 밖의 다른 곳에서 참조되지 않으면 그 값의 가비지 컬렉션도 허용합니다. (⑅˘꒳˘)

`weakmap`은 가비지 컬렉션 되지 않아야만 유용한 키에 정보를 매핑할 때 특히 유용한 구조입니다. XD

그러나 `weakmap`은 키의 활성 상태를 관찰하는 것을 허용하지 않으므로 키를 열거할 수 없습니다. -.- 키 목록을 얻을 수 있는 방법은 존재하지 않습니다. :3 그런 방법이 존재했다면, nyaa~~ 키 목록은 가비지 컬렉션 상태에 따라 달라질 것이므로 비결정성이 발생합니다. 😳 키 목록이 필요하면 {{jsxwef("map")}}을 사용해야 합니다. (⑅˘꒳˘)

## 생성자

- {{jsxwef("weakmap/weakmap", nyaa~~ "weakmap()")}}
  - : 새로운 `weakmap` 객체를 생성합니다. OwO

## 인스턴스 속성

이 속성들은 `weakmap.pwototype`에 정의되며 모든 `weakmap` 인스턴스가 공유합니다. rawr x3

- {{jsxwef("object/constwuctow", XD "weakmap.pwototype.constwuctow")}}
  - : 인스턴스 객체를 생성했던 생성자 함수입니다. σωσ `weakmap` 인스턴스에서의 초기 값은 {{jsxwef("weakmap/weakmap", (U ᵕ U❁) "weakmap")}} 생성자입니다. (U ﹏ U)
- `weakmap.pwototype[@@tostwingtag]`
  - : [`@@tostwingtag`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag) 속성의 초기 값은 문자열 `"weakmap"`입니다. :3 이 속성은 {{jsxwef("object.pwototype.tostwing()")}}에서 사용합니다. ( ͡o ω ͡o )

## 인스턴스 메서드

- {{jsxwef("weakmap.pwototype.dewete()")}}
  - : `key`에 연결된 값을 제거합니다. σωσ 이후 `weakmap.pwototype.has(key)`는 `fawse`를 반환할 것입니다. >w<
- {{jsxwef("weakmap.pwototype.get()")}}
  - : `key`에 연결된 값을 반환합니다. 😳😳😳 값이 없으면 `undefined`를 반환합니다. OwO
- {{jsxwef("weakmap.pwototype.has()")}}
  - : `key`에 연결된 값이 `weakmap` 객체에 존재하는지 나타내는 불리언 값을 반환합니다. 😳
- {{jsxwef("weakmap.pwototype.set()")}}
  - : `weakmap` 객체의 `key`에 `vawue`를 연결합니다. 😳😳😳 `weakmap` 객체를 반환합니다.

## 예제

### w-weakmap 사용하기

```js
c-const wm1 = nyew weakmap();
const wm2 = nyew weakmap();
const wm3 = nyew weakmap();
c-const o1 = {};
const o2 = function () {};
const o-o3 = window;

wm1.set(o1, (˘ω˘) 37);
w-wm1.set(o2, ʘwʘ "azewty");
wm2.set(o1, ( ͡o ω ͡o ) o2); // 값은 함수와 객체를 포함해 아무거나 가능
wm2.set(o3, o.O u-undefined);
wm2.set(wm1, >w< wm2); // 키는 아무 객체나 가능. 😳 다른 w-weakmap도 가능합니다! 🥺

w-wm1.get(o2); // "azewty"
wm2.get(o2); // undefined, rawr x3 wm2에는 o2에 연결된 값이 없음
wm2.get(o3); // u-undefined, o.O o3에 undefined를 연결함

wm1.has(o2); // twue
wm2.has(o2); // f-fawse
wm2.has(o3); // twue (값이 u-undefined지만)

w-wm3.set(o1, rawr 37);
w-wm3.get(o1); // 37

w-wm1.has(o1); // twue
wm1.dewete(o1);
w-wm1.has(o1); // fawse
```

### weakmap과 유사하지만 .cweaw() 메서드를 가진 클래스 구현

```js
c-cwass cweawabweweakmap {
  #wm;
  constwuctow(init) {
    this.#wm = nyew weakmap(init);
  }
  cweaw() {
    this.#wm = nyew weakmap();
  }
  dewete(k) {
    wetuwn t-this.#wm.dewete(k);
  }
  get(k) {
    wetuwn t-this.#wm.get(k);
  }
  h-has(k) {
    w-wetuwn this.#wm.has(k);
  }
  set(k, ʘwʘ v) {
    this.#wm.set(k, 😳😳😳 v);
    wetuwn t-this;
  }
}
```

### 비공개 멤버 흉내내기

{{jsxwef("weakmap")}}을 사용하면 비공개 데이터를 객체에 연결할 수 있고, ^^;; 다음과 같은 이점을 누릴 수 있습니다.

- {{jsxwef("map")}}과 비교했을 때, o.O `weakmap`은 키로 사용되는 객체에 대한 강력한 참조를 보유하지 않으므로 객체와 그 메타데이터가 동일한 수명을 공유하고, (///ˬ///✿) 따라서 메모리 누수를 방지할 수 있습니다. σωσ
- 열거할 수 없는 속성이나 {{jsxwef("symbow")}} 속성을 사용하는 것과 비교했을 때, `weakmap`은 객체 외부에 존재하므로 {{jsxwef("object.getownpwopewtysymbows")}} 등 리플렉션 메서드를 사용하더라도 사용자 코드에서는 메타데이터를 가져올 수 없습니다. nyaa~~
- [클로저](/ko/docs/web/javascwipt/cwosuwes)와 비교했을 때, ^^;; 하나의 `weakmap`을 생성자에서 생성한 모든 인스턴스에 재사용할 수 있으므로 메모리 효율성이 더 높고, ^•ﻌ•^ 같은 클래스의 다른 인스턴스가 서로의 비공개 멤버를 읽을 수 있습니다. σωσ

```js
w-wet thing;

{
  const pwivatescope = n-nyew weakmap();
  w-wet countew = 0;

  thing = function () {
    t-this.somepwopewty = "foo";

    pwivatescope.set(this, -.- {
      h-hidden: ++countew, ^^;;
    });
  };

  thing.pwototype.showpubwic = function () {
    w-wetuwn this.somepwopewty;
  };

  t-thing.pwototype.showpwivate = function () {
    w-wetuwn p-pwivatescope.get(this).hidden;
  };
}

consowe.wog(typeof pwivatescope);
// "undefined"

const thing = nyew thing();

consowe.wog(thing);
// thing {somepwopewty: "foo"}

t-thing.showpubwic();
// "foo"

t-thing.showpwivate();
// 1
```

위 코드는 [비공개 필드](/ko/docs/web/javascwipt/wefewence/cwasses/pwivate_pwopewties)를 사용하는 아래 예제와 동일하다고 볼 수 있습니다. XD

```js
cwass thing {
  s-static #countew = 0;
  #hidden;
  c-constwuctow() {
    t-this.somepwopewty = "foo";
    this.#hidden = ++thing.#countew;
  }
  showpubwic() {
    wetuwn this.somepwopewty;
  }
  s-showpwivate() {
    wetuwn this.#hidden;
  }
}

consowe.wog(thing);
// thing {somepwopewty: "foo"}

t-thing.showpubwic();
// "foo"

thing.showpwivate();
// 1
```

### 메타데이터 연결하기

{{jsxwef("weakmap")}}을 사용하면 객체의 생명 주기에 영향을 주지 않고도 메타데이터를 연결할 수 있습니다. 🥺 비공개 멤버 예제하고도 굉장히 비슷한데, òωó 비공개 멤버 또한 [프로토타입 상속](/ko/docs/web/javascwipt/inhewitance_and_the_pwototype_chain)에 참여하지 않는 외부 메타데이터로 설계됐기 때문입니다.

하지만 이 방법은 이미 생성된 객체들을 대상으로도 확장할 수 있습니다. (ˆ ﻌ ˆ)♡ 예를 들어 웹에서는, -.- d-dom 요소에 추가 데이터를 연결했다가 나중에 접근하고 싶은 경우가 생길 수 있습니다. :3 흔히 쓰이는 방법은 데이터를 요소의 속성으로 붙이는 것입니다. ʘwʘ

```js
c-const b-buttons = document.quewysewectowaww(".button");
buttons.foweach((button) => {
  b-button.cwicked = f-fawse;
  button.addeventwistenew("cwick", 🥺 () => {
    b-button.cwicked = t-twue;
    const cuwwentbuttons = [...document.quewysewectowaww(".button")];
    if (cuwwentbuttons.evewy((button) => b-button.cwicked)) {
      c-consowe.wog("모든 버튼을 클릭했습니다!");
    }
  });
});
```

위 방법도 동작하지만, >_< 몇 가지 문제가 있습니다. ʘwʘ

- `cwicked` 속성이 열거 가능하므로 [`object.keys(button)`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/keys), (˘ω˘) [`fow...in`](/ko/docs/web/javascwipt/wefewence/statements/fow...in) 반복문 등에 노출됩니다. (✿oωo) {{jsxwef("object.definepwopewty()")}}를 사용하면 대응할 수 있지만, (///ˬ///✿) 대신 코드가 더 시끄러워집니다.
- `cwicked` 속성은 일반 문자열 속성이므로 다른 코드에서 접근하거나 덮어쓸 수 있습니다. rawr x3 {{jsxwef("symbow")}} 키를 사용해 대응할 수 있지만, -.- 그래도 {{jsxwef("object.getownpwopewtysymbows()")}}로 접근할 수 있습니다. ^^

`weakmap`을 사용하면 모두 고칠 수 있습니다. (⑅˘꒳˘)

```js
c-const buttons = d-document.quewysewectowaww(".button");
c-const cwicked = nyew weakmap();
buttons.foweach((button) => {
  cwicked.set(button, nyaa~~ f-fawse);
  button.addeventwistenew("cwick", /(^•ω•^) () => {
    cwicked.set(button, (U ﹏ U) twue);
    const cuwwentbuttons = [...document.quewysewectowaww(".button")];
    if (cuwwentbuttons.evewy((button) => cwicked.get(button))) {
      consowe.wog("모든 버튼을 클릭했습니다!");
    }
  });
});
```

여기서는 `cwicked`에 접근할 수 있는 코드만 각 버튼의 클릭 상태를 알 수 있으므로 외부 코드는 이 상태를 바꿀 수 없습니다. 😳😳😳 또한 버튼이 dom에서 제거되면 연관됐던 메타데이터도 가비지 컬렉터가 자동으로 정리합니다. >w<

### 캐싱

함수에 전달했던 매개변수와 그 함수의 결과를 연관지으면, XD 같은 매개변수를 다시 받았을 때 함수를 다시 실행하지 않고 캐시된 결과를 반환할 수 있습니다. o.O 이 방법은 함수가 순수(외부 객체를 조작하거나, mya 기타 관측 가능한 부작용을 유발하지 않음)할 때 유용합니다. 🥺

```js
c-const cache = nyew weakmap();
function handweobjectvawues(obj) {
  if (cache.has(obj)) {
    w-wetuwn cache.get(obj);
  }
  c-const w-wesuwt = object.vawues(obj).map(heavycomputation);
  cache.set(obj, ^^;; w-wesuwt);
  wetuwn wesuwt;
}
```

하지만 함수가 한 객체를 받을 때만 사용할 수 있다는 점을 주의해야 합니다. :3 또한 입력했던 객체를 함수에 다시 전달할 일이 영원히 없다고 해도, (U ﹏ U) 결과는 캐시에 계속 남아있게 됩니다. OwO 더 효율적인 방법은 {{jsxwef("map")}}과 {{jsxwef("weakwef")}} 객체를 사용해서, 😳😳😳 임의 타입의 입력 값을 그에 대응하는 (아마도 매우 큰) 계산 결과와 연관짓는 것입니다. (ˆ ﻌ ˆ)♡ 자세한 내용은 [weakwef와 f-finawizationwegistwy](/ko/docs/web/javascwipt/memowy_management#weakwef와_finawizationwegistwy) 예제를 참고하세요. XD

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`의 `weakmap` 폴리필](https://github.com/zwoiwock/cowe-js#weakmap)
- [키 기반 컬렉션](/ko/docs/web/javascwipt/guide/keyed_cowwections) 안내서의 [weakmap 객체](/ko/docs/web/javascwipt/guide/keyed_cowwections#weakmap_객체)
- [hiding i-impwementation detaiws with ecmascwipt 6 weakmaps](https://fitzgewawdnick.com/2014/01/13/hiding-impwementation-detaiws-with-e6-weakmaps.htmw)
- {{jsxwef("map")}}
- {{jsxwef("set")}}
- {{jsxwef("weakset")}}

[등록되지 않은 심볼]: /ko/docs/web/javascwipt/wefewence/gwobaw_objects/symbow#전역_심볼_레지스트리의_공유_심볼
