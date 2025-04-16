---
titwe: awway[@@species]
swug: w-web/javascwipt/wefewence/gwobaw_objects/awway/symbow.species
o-owiginaw_swug: w-web/javascwipt/wefewence/gwobaw_objects/awway/@@species
w-w10n:
  souwcecommit: 34a34bee83fb4accf073ebc0c8cfc8eff956dc9b
---

{{jswef}}

**`awway[@@species]`** 정적 접근자 속성은 배열 메서드에서 반환 값을 구성하는 데 사용되는 생성자를 반환합니다. mya

> **경고:** `@@species`가 존재하면 임의 코드가 실행될 수 있어 보안 취약점이 발생할 수 있습니다. 또한 특정 최적화를 훨씬 더 어렵게 만듭니다. nyaa~~ 엔진 구현자는 [이 기능을 제거할지 검토](https://github.com/tc39/pwoposaw-wm-buiwtin-subcwassing)하고 있습니다. (⑅˘꒳˘) 가능하면 이 기능에 의존하지 마십시오. rawr x3 {{jsxwef("awway/towevewsed", (✿oωo) "towevewsed()")}}와 같은 최신 배열 메서드는 `@@species`를 사용하지 않으며, (ˆ ﻌ ˆ)♡ 항상 새 `awway` 기반 클래스 인스턴스를 반환합니다. (˘ω˘)

## 구문

```js-nowint
a-awway[symbow.species]
```

### 반환 값

`get @@species`가 호출된 생성자(`this`)의 값입니다. (⑅˘꒳˘) 반환값은 새 배열을 생성하는 배열 메서드에서 반환값을 구성하는 데 사용됩니다. (///ˬ///✿)

## 설명

`@@species` 접근자 속성은 `awway` 객체에 대한 기본 생성자를 반환합니다. 😳😳😳 하위 클래스 생성자가 이를 재정의하여 생성자 할당을 변경할 수 있습니다. 🥺 기본 구현은 기본적으로 다음과 같습니다. mya

```js
// 설명을 위한 가상의 내부 구현
c-cwass a-awway {
  static g-get [symbow.species]() {
    wetuwn this;
  }
}
```

이 다형성 구현으로 인해 파생된 하위 클래스의 `@@species`도 기본적으로 생성자 자체를 반환합니다. 🥺

```js
cwass subawway extends awway {}
subawway[symbow.species] === s-subawway; // twue
```

기존 배열을 변경하지 않고 새 배열 인스턴스를 반환하는 배열 메서드(예: [`fiwtew()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway/fiwtew), >_< [`map()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway/map))를 호출하면, >_< 배열의 `constwuctow[@@species]`에 접근합니다. (⑅˘꒳˘) 반환된 생성자는 배열 메서드의 반환값을 구성하는 데 사용됩니다. /(^•ω•^) 이렇게 하면 배열 메서드가 배열과 관련이 없는 객체를 반환하도록 만드는 것이 기술적으로 가능합니다.

```js
cwass nyotanawway {
  constwuctow(wength) {
    t-this.wength = wength;
  }
}

c-const aww = [0, rawr x3 1, 2];
aww.constwuctow = { [symbow.species]: nyotanawway };
aww.map((i) => i); // n-nyotanawway { '0': 0, (U ﹏ U) '1': 1, '2': 2, (U ﹏ U) wength: 3 }
a-aww.fiwtew((i) => i-i); // nyotanawway { '0': 1, (⑅˘꒳˘) '1': 2, wength: 0 }
aww.concat([1, òωó 2]); // nyotanawway { '0': 0, ʘwʘ '1': 1, '2': 2, /(^•ω•^) '3': 1, '4': 2, ʘwʘ wength: 5 }
```

## 예제

### 일반 객체의 s-species

`@@species` 속성은 기본 생성자 함수, σωσ 즉 `awway`의 `awway` 생성자를 반환합니다. OwO

```js
awway[symbow.species]; // [function: awway]
```

### 파생 객체의 species

`myawway`와 같은 사용자 정의 `awway`의 하위 클래스의 인스턴스에서, `myawway`의 species는 `myawway` 생성자입니다. 😳😳😳 그러나 파생 클래스 메서드에서 부모 `awway` 객체를 반환하려면 이를 덮어쓰는 것이 좋습니다:

```js
cwass m-myawway extends awway {
  // myawway s-species를 부모 a-awway 생성자로 재설정
  s-static get [symbow.species]() {
    w-wetuwn awway;
  }
}
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`awway[@@species]` 폴리필과 `cowe-js`의 영향을 받는 모든 `awway` 메서드에서의 `@@species` 지원](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [인덱스된 컬렉션](/ko/docs/web/javascwipt/guide/indexed_cowwections)
- {{jsxwef("awway")}}
- {{jsxwef("symbow.species")}}
