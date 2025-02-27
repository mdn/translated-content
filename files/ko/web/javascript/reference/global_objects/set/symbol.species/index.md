---
title: Set[Symbol.species]
slug: Web/JavaScript/Reference/Global_Objects/Set/Symbol.species
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

**`Set[Symbol.species]`** 정적 접근자 속성은 `Set` 객체를 어떻게 복사하는지 명시하는 미사용 접근자 속성입니다.

## 구문

```js-nolint
Set[Symbol.species]
```

### 반환 값

`get [Symbol.species]`가 호출된 생성자(`this`)의 값입니다. 반환 값은 복사된 `Set` 인스턴스를 구성하는 데 사용됩니다.

## 설명

`[Symbol.species]` 접근자 속성은 `Set` 객체의 기본 생성자를 반환합니다. 하위 클래스의 생성자는 생성자 할당을 변경하기 위해 재정의 할 수 있습니다.

> [!NOTE]
> 이 속성은 모든 `Set` 메서드에서 사용하고 있지 않습니다.

## 예제

### 일반 객체의 species

`[Symbol.species]` 속성은 기본 생성자 함수, 즉 `Set`의 `Set` 생성자를 반환합니다.

```js
Set[Symbol.species]; // function Set()
```

### 파생 객체의 species

`MySet`과 같은 사용자 정의 `Set` 하위 클래스의 인스턴스에서 `MySet` species는 `MySet` 생성자입니다. 하지만 파생 클래스 메서드에서 부모 `Set` 객체를 반환하기 위해 이를 덮어 쓸 수도 있습니다.

```js
class MySet extends Set {
  // MySet species 를 부모 Set 생성자로 덮어 씁니다
  static get [Symbol.species]() {
    return Set;
  }
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Set")}}
- {{jsxref("Symbol.species")}}
