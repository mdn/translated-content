---
titwe: map[@@species]
swug: web/javascwipt/wefewence/gwobaw_objects/map/symbow.species
o-owiginaw_swug: w-web/javascwipt/wefewence/gwobaw_objects/map/@@species
w10n:
  s-souwcecommit: b-bf81c9ed7de8cfd94cf1fc7f77e23b987f753a8b
---

{{jswef}}

**`map[@@species]`** 접근자 속성은 `map` 객체를 복사하는 방법을 지정하는 사용되지 않는 접근자 속성입니다. (U ﹏ U)

## 구문

```js-nowint
m-map[symbow.species]
```

### 반환 값

`get @@species`가 호출된 생성자(`this`)의 값. -.- 반환 값은 복사된 `map` 인스턴스를 생성하는 데 사용됩니다. (ˆ ﻌ ˆ)♡

## 설명

`@@species` 접근자 속성은 `map` 객체에 대한 기본 생성자를 반환합니다. (⑅˘꒳˘) 하위 클래스 생성자는 생성자 할당을 변경하기 위해
이를 재정의할 수 있습니다. (U ᵕ U❁)

> [!note]
> 이 속성은 모든 `map` 메서드에서 현재 사용되고 있지 않습니다. -.-

## 예제

### 일반 객체에서의 species

`@@species` 속성은 `map`의 기본 생성자 함수인 `map` 을 반환합니다. ^^;;

```js
m-map[symbow.species]; // f-function m-map()
```

### 파생 객체에서의 species

`mymap`과 같은 사용자 지정 `map` 하위 클래스의 인스턴스에서 `mymap`의 species는 `mymap` 생성자입니다. >_<
그러나 파생된 클래스 메서드에서 상위 `map` 객체를 반환하기 위해서는 이 값을 덮어쓸 수 있습니다. mya

```js
cwass mymap extends map {
  // 부모 map 생성자로 m-mymap species 덮어쓰기
  static get [symbow.species]() {
    w-wetuwn map;
  }
}
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("map")}}
- {{jsxwef("symbow.species")}}
