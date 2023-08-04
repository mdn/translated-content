---
title: console.table()
slug: Web/API/console/table
---

{{APIRef("Console API")}}

**`console.table()`** 메서드는 표 형식의 데이터를 테이블로 표시합니다.

이 함수에는 배열 또는 객체여야 하는 `data`라는 인수를 반드시 전달해야 합니다.
두 번째 인수인 `columns`는 선택적으로 전달할 수 있습니다.

이 함수는 `data`를 테이블로 표시합니다. 배열의 각 원소(`data`가 객체인 경우에는 열거 가능한 속성)는
테이블의 한 줄이 됩니다.

테이블의 첫 번째 칼럼은 `(index)`를 레이블로 사용합니다. `data`가 배열인 경우에는 배열의 인덱스가
이 칼럼의 값으로 사용됩니다. `data`가 객체인 경우에는 속성 이름이 값으로 사용됩니다. (파이어폭스에서는)
`console.table`이 1000줄 까지만 표현할 수 있는 제약이 있다는 점에 주의하세요
(첫 번째 줄은 레이블 인덱스입니다).

{{AvailableInWorkers}}

### 윈시 자료형의 컬렉션

`data` 인수는 배열 또는 객체일 것입니다.

```js
// 문자열의 배열

console.table(["apples", "oranges", "bananas"]);
```

| (index) | Values    |
| ------- | --------- |
| 0       | 'apples'  |
| 1       | 'oranges' |
| 2       | 'bananas' |

```js
// 속성이 문자열인 배열

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const me = new Person("Tyrone", "Jones");

console.table(me);
```

| (index)   | Values   |
| --------- | -------- |
| firstName | 'Tyrone' |
| lastName  | 'Jones'  |

### 합성 자료형의 컬렉션

배열의 원소나 객체의 속성이 배열 또는 객체라면 그 배열의 원소 혹은 그 객체의 속성이 칼럼당 하나씩 각 줄에 표시됩니다.

```js
// 배열의 배열

const people = [
  ["Tyrone", "Jones"],
  ["Janet", "Smith"],
  ["Maria", "Cruz"],
];
console.table(people);
```

| (index) | 0        | 1       |
| ------- | -------- | ------- |
| 0       | 'Tyrone' | 'Jones' |
| 1       | 'Janet'  | 'Smith' |
| 2       | 'Maria'  | 'Cruz'  |

```js
// 객체의 배열

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const tyrone = new Person("Tyrone", "Jones");
const janet = new Person("Janet", "Smith");
const maria = new Person("Maria", "Cruz");

console.table([tyrone, janet, maria]);
```

배열이 객체를 포함하고 있다면 칼럼은 속성의 이름을 레이블로 사용한다는 점에 주의하세요.

| (index) | firstName | lastName |
| ------- | --------- | -------- |
| 0       | 'Tyrone'  | 'Jones'  |
| 1       | 'Janet'   | 'Smith'  |
| 2       | 'Maria'   | 'Cruz'   |

```js
// 다른 객체를 포함하는 객체

const family = {};

family.mother = new Person("Janet", "Jones");
family.father = new Person("Tyrone", "Jones");
family.daughter = new Person("Maria", "Jones");

console.table(family);
```

| (index)  | firstName | lastName |
| -------- | --------- | -------- |
| daughter | 'Maria'   | 'Jones'  |
| father   | 'Tyrone'  | 'Jones'  |
| mother   | 'Janet'   | 'Jones'  |

### 표시할 칼럼 제한

기본적으로 `console.table()`는 각 줄마다 모든 원소를 다 나열합니다. 선택적으로 전달할 수 있는
`columns` 매개변수를 사용하면 일부 칼럼만 선택하여 표시할 수 있습니다.

```js
// 객체의 배열. firstName만 표시

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const tyrone = new Person("Tyrone", "Jones");
const janet = new Person("Janet", "Smith");
const maria = new Person("Maria", "Cruz");

console.table([tyrone, janet, maria], ["firstName"]);
```

| (index) | firstName |
| ------- | --------- |
| 0       | 'Tyrone'  |
| 1       | 'Janet'   |
| 2       | 'Maria'   |

### 칼럼 정렬

칼럼의 레이블을 클릭하면 특정 칼럼을 기준으로 테이블을 정렬할 수 있습니다.

## 구문

```js-nolint
table(data)
table(data, columns)
```

### 매개변수

- `data`
  - : 표시할 데이터. 배열 또는 객체여야 합니다.
- `columns`
  - : 출력에 포함할 칼럼 이름을 포함한 배열

### 반환 값

없음 ({{jsxref("undefined")}}).

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
