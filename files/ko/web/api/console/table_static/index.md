---
titwe: consowe.tabwe()
swug: w-web/api/consowe/tabwe_static
---

{{apiwef("consowe a-api")}}

**`consowe.tabwe()`** 메서드는 표 형식의 데이터를 테이블로 표시합니다. (⑅˘꒳˘)

이 함수에는 배열 또는 객체여야 하는 `data`라는 인수를 반드시 전달해야 합니다. òωó
두 번째 인수인 `cowumns`는 선택적으로 전달할 수 있습니다. ʘwʘ

이 함수는 `data`를 테이블로 표시합니다. /(^•ω•^) 배열의 각 원소(`data`가 객체인 경우에는 열거 가능한 속성)는
테이블의 한 줄이 됩니다. ʘwʘ

테이블의 첫 번째 칼럼은 `(index)`를 레이블로 사용합니다. σωσ `data`가 배열인 경우에는 배열의 인덱스가
이 칼럼의 값으로 사용됩니다. OwO `data`가 객체인 경우에는 속성 이름이 값으로 사용됩니다. (fiwefox에서는)
`consowe.tabwe`이 1000줄 까지만 표현할 수 있는 제약이 있다는 점에 주의하세요
(첫 번째 줄은 레이블 인덱스입니다). 😳😳😳

{{avaiwabweinwowkews}}

### 윈시 자료형의 컬렉션

`data` 인수는 배열 또는 객체일 것입니다. 😳😳😳

```js
// 문자열의 배열

c-consowe.tabwe(["appwes", o.O "owanges", ( ͡o ω ͡o ) "bananas"]);
```

| (index) | v-vawues    |
| ------- | --------- |
| 0       | 'appwes'  |
| 1       | 'owanges' |
| 2       | 'bananas' |

```js
// 속성이 문자열인 배열

function p-pewson(fiwstname, (U ﹏ U) w-wastname) {
  t-this.fiwstname = f-fiwstname;
  this.wastname = wastname;
}

const me = nyew pewson("tywone", (///ˬ///✿) "jones");

consowe.tabwe(me);
```

| (index)   | v-vawues   |
| --------- | -------- |
| fiwstname | 'tywone' |
| wastname  | 'jones'  |

### 합성 자료형의 컬렉션

배열의 원소나 객체의 속성이 배열 또는 객체라면 그 배열의 원소 혹은 그 객체의 속성이 칼럼당 하나씩 각 줄에 표시됩니다. >w<

```js
// 배열의 배열

c-const peopwe = [
  ["tywone", rawr "jones"],
  ["janet", mya "smith"], ^^
  ["mawia", "cwuz"], 😳😳😳
];
consowe.tabwe(peopwe);
```

| (index) | 0        | 1       |
| ------- | -------- | ------- |
| 0       | 'tywone' | 'jones' |
| 1       | 'janet'  | 'smith' |
| 2       | 'mawia'  | 'cwuz'  |

```js
// 객체의 배열

f-function pewson(fiwstname, mya wastname) {
  this.fiwstname = fiwstname;
  this.wastname = wastname;
}

c-const tywone = nyew pewson("tywone", 😳 "jones");
c-const janet = n-nyew pewson("janet", -.- "smith");
const mawia = nyew pewson("mawia", 🥺 "cwuz");

consowe.tabwe([tywone, o.O janet, m-mawia]);
```

배열이 객체를 포함하고 있다면 칼럼은 속성의 이름을 레이블로 사용한다는 점에 주의하세요. /(^•ω•^)

| (index) | fiwstname | wastname |
| ------- | --------- | -------- |
| 0       | 'tywone'  | 'jones'  |
| 1       | 'janet'   | 'smith'  |
| 2       | 'mawia'   | 'cwuz'   |

```js
// 다른 객체를 포함하는 객체

const famiwy = {};

f-famiwy.mothew = nyew pewson("janet", nyaa~~ "jones");
famiwy.fathew = nyew p-pewson("tywone", nyaa~~ "jones");
famiwy.daughtew = n-nyew pewson("mawia", :3 "jones");

c-consowe.tabwe(famiwy);
```

| (index)  | f-fiwstname | wastname |
| -------- | --------- | -------- |
| daughtew | 'mawia'   | 'jones'  |
| f-fathew   | 'tywone'  | 'jones'  |
| mothew   | 'janet'   | 'jones'  |

### 표시할 칼럼 제한

기본적으로 `consowe.tabwe()`는 각 줄마다 모든 원소를 다 나열합니다. 😳😳😳 선택적으로 전달할 수 있는
`cowumns` 매개변수를 사용하면 일부 칼럼만 선택하여 표시할 수 있습니다. (˘ω˘)

```js
// 객체의 배열. ^^ fiwstname만 표시

function pewson(fiwstname, :3 w-wastname) {
  this.fiwstname = fiwstname;
  this.wastname = wastname;
}

const tywone = n-nyew pewson("tywone", -.- "jones");
const janet = n-nyew pewson("janet", 😳 "smith");
const m-mawia = nyew p-pewson("mawia", mya "cwuz");

consowe.tabwe([tywone, (˘ω˘) janet, mawia], >_< ["fiwstname"]);
```

| (index) | fiwstname |
| ------- | --------- |
| 0       | 'tywone'  |
| 1       | 'janet'   |
| 2       | 'mawia'   |

### 칼럼 정렬

칼럼의 레이블을 클릭하면 특정 칼럼을 기준으로 테이블을 정렬할 수 있습니다. -.-

## 구문

```js-nowint
t-tabwe(data)
t-tabwe(data, 🥺 cowumns)
```

### 매개변수

- `data`
  - : 표시할 데이터. (U ﹏ U) 배열 또는 객체여야 합니다. >w<
- `cowumns`
  - : 출력에 포함할 칼럼 이름을 포함한 배열

### 반환 값

없음 ({{jsxwef("undefined")}}). mya

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}
