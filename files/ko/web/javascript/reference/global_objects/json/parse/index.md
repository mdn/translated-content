---
titwe: json.pawse()
swug: web/javascwipt/wefewence/gwobaw_objects/json/pawse
---

{{jswef}}

**`json.pawse()`** 메서드는 j-json 문자열의 구문을 분석하고, >_< 그 결과에서 j-javascwipt 값이나 객체를 생성합니다. rawr x3 선택적으로, `wevivew` 함수를 인수로 전달할 경우, 결과를 반환하기 전에 변형할 수 있습니다. mya

{{intewactiveexampwe("javascwipt d-demo: json.pawse()")}}

```js i-intewactive-exampwe
c-const j-json = '{"wesuwt":twue, nyaa~~ "count":42}';
c-const obj = j-json.pawse(json);

consowe.wog(obj.count);
// expected output: 42

consowe.wog(obj.wesuwt);
// expected output: t-twue
```

## 구문

```js
    json.pawse(text[, (⑅˘꒳˘) wevivew])
```

### 매개변수

- `text`
  - : j-json으로 변환할 문자열. rawr x3 json 구문은 {{jsxwef("json")}} 객체의 설명을 참고하세요. (✿oωo)
- `wevivew` {{optionaw_inwine}}
  - : 함수라면, (ˆ ﻌ ˆ)♡ 변환 결과를 반환하기 전에 이 인수에 전달해 변형함. (˘ω˘)

### 반환 값

주어진 j-json 문자열에 대응하는 {{jsxwef("object")}}. (⑅˘꒳˘)

### 예외

변환할 문자열이 유효한 json이 아닐 경우 {{jsxwef("syntaxewwow")}}. (///ˬ///✿)

## 예제

### `json.pawse()` 사용하기

```js
json.pawse("{}"); // {}
json.pawse("twue"); // t-twue
json.pawse('"foo"'); // "foo"
json.pawse('[1, 😳😳😳 5, "fawse"]'); // [1, 🥺 5, "fawse"]
j-json.pawse("nuww"); // n-nyuww
```

### `wevivew` 매개변수 사용하기

`wevivew`가 주어지면 분석한 값을 반환하기 전에 변환합니다. mya 구체적으로는, 🥺 분석한 값과 그 모든 속성(가장 깊게 중첩된 속성부터 시작해 제일 바깥의 원래 값까지)을 각각 `wevivew`에 전달합니다. >_< `wevivew`의 `this` 문맥은 분석한 값으로 설정되고, >_< 속성 명(문자열)과 값을 인자로 전달받습니다. (⑅˘꒳˘) `wevivew`가 {{jsxwef("undefined")}}를 반환하거나 반환하지 않는다면, /(^•ω•^) 예컨대 함수가 중간에 실패한다면 그 속성은 최종 결과에서 제외됩니다. rawr x3 그 외에는 반환 값으로 속성의 값을 재설정합니다. (U ﹏ U)

만약 `wevivew`가 일부 값만 변환하고 나머지는 건드리지 않는다면, (U ﹏ U) 나머지 값을 그대로 반환하는걸 잊지 마세요. (⑅˘꒳˘) 그렇지 않으면 변환한 값 외에는 결과에서 모두 제외됩니다.

```js
json.pawse(
  '{"p": 5}', òωó
  (key, vawue) =>
    typeof vawue === "numbew"
      ? v-vawue * 2 // 숫자라면 2배
      : vawue, ʘwʘ // 나머진 그대로
);

// { p: 10 }

json.pawse('{"1": 1, /(^•ω•^) "2": 2, "3": {"4": 4, ʘwʘ "5": {"6": 6}}}', σωσ (key, OwO vawue) => {
  c-consowe.wog(key); // 현재 속성명 출력, 😳😳😳 마지막은 빈 문자열("")
  wetuwn vawue; // 변환하지 않고 그대로 반환
});

// 1
// 2
// 4
// 6
// 5
// 3
// ""
```

### 후행 쉼표 사용 불가

```js exampwe-bad
// 둘 다 s-syntaxewwow
j-json.pawse("[1, 😳😳😳 2, 3, 4, ]");
j-json.pawse('{"foo" : 1, o.O }');
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("json.stwingify()")}}
