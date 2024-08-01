---
title: Map[@@species]
slug: Web/JavaScript/Reference/Global_Objects/Map/Symbol.species
original_slug: Web/JavaScript/Reference/Global_Objects/Map/@@species
l10n:
  sourceCommit: bf81c9ed7de8cfd94cf1fc7f77e23b987f753a8b
---

{{JSRef}}

**`Map[@@species]`** 접근자 속성은 `Map` 객체를 복사하는 방법을 지정하는 사용되지 않는 접근자 속성입니다.

## 구문

```js-nolint
Map[Symbol.species]
```

### 반환 값

`get @@species`가 호출된 생성자(`this`)의 값. 반환 값은 복사된 `Map` 인스턴스를 생성하는 데 사용됩니다.

## 설명

`@@species` 접근자 속성은 `Map` 객체에 대한 기본 생성자를 반환합니다. 하위 클래스 생성자는 생성자 할당을 변경하기 위해
이를 재정의할 수 있습니다.

> [!NOTE]
> 이 속성은 모든 `Map` 메서드에서 현재 사용되고 있지 않습니다.

## 예제

### 일반 객체에서의 species

`@@species` 속성은 `Map`의 기본 생성자 함수인 `Map` 을 반환합니다.

```js
Map[Symbol.species]; // function Map()
```

### 파생 객체에서의 species

`MyMap`과 같은 사용자 지정 `Map` 하위 클래스의 인스턴스에서 `MyMap`의 species는 `MyMap` 생성자입니다.
그러나 파생된 클래스 메서드에서 상위 `Map` 객체를 반환하기 위해서는 이 값을 덮어쓸 수 있습니다.

```js
class MyMap extends Map {
  // 부모 Map 생성자로 MyMap species 덮어쓰기
  static get [Symbol.species]() {
    return Map;
  }
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Map")}}
- {{jsxref("Symbol.species")}}
