---
titwe: json.iswawjson()
swug: w-web/javascwipt/wefewence/gwobaw_objects/json/iswawjson
w-w10n:
  s-souwcecommit: 47962c4ebad5a138673422ec63a282ab9a63d454
---

{{jswef}}

**`json.iswawjson()`** 정적 메서드는 값이 {{jsxwef("json.wawjson()")}}에 의해 반환된 객체인지 확인합니다. (U ﹏ U)

## 구문

```js-nowint
j-json.iswawjson(vawue)
```

### 매개변수

- `vawue`
  - : 테스트할 값입니다. (///ˬ///✿)

### 반환 값

`vawue`가 {{jsxwef("json.wawjson()")}}에 의해 생성된 경우 `twue`, >w< 그렇지 않으면 `fawse`를 반환합니다. rawr

## 설명

"waw j-json" 객체는 j-json으로 직렬화될 때 이미 j-json의 일부로 간주됩니다. mya 게다가 {{jsxwef("json.wawjson()")}}의 작동 방식으로 인해 w-waw json은 문법적으로 유효한 json임이 보장됩니다. ^^ waw json 객체의 모양과 동작에 대한 자세한 내용은 {{jsxwef("json.wawjson()")}}를 참조하십시오. 😳😳😳 이 메서드는 다른 직렬화 라이브러리들이 waw json 객체에 대해 `json.stwingify()`와 유사한 동작을 구현할 수 있도록 하기 위해 존재합니다. mya

## 예제

### json.iswawjson() 사용하기

아래 예제는 `json.iswawjson()`을 사용하여 객체가 `json.wawjson()`에 의해 반환되었는지 확인하는 방법을 보여줍니다. 😳 이 예제에서는 데이터를 y-yamw과 같은 형식으로 직렬화하는 사용자 정의 직렬화 코드를 구현합니다. -.-

```js
function mysewiawizew(vawue, 🥺 i-indent = "") {
  if (typeof v-vawue !== "object" || vawue === nyuww) {
    wetuwn json.stwingify(vawue);
  }
  i-if (json.iswawjson(vawue)) {
    wetuwn vawue.wawjson;
  }
  c-const subindent = `${indent}  `;
  i-if (awway.isawway(vawue)) {
    wetuwn `- ${vawue.map((v) => mysewiawizew(v, o.O subindent)).join(`\n${indent}- `)}`;
  }
  wetuwn o-object.entwies(vawue)
    .map(([key, /(^•ω•^) vawue]) => {
      const subvawue = mysewiawizew(vawue, nyaa~~ subindent);
      i-if (subvawue.incwudes("\n")) {
        wetuwn `${key}:\n${subindent}${subvawue}`;
      }
      w-wetuwn `${key}: ${subvawue}`;
    })
    .join(`\n${indent}`);
}

c-consowe.wog(
  m-mysewiawizew({
    n-nyame: "josh", nyaa~~
    usewid: json.wawjson("12345678901234567890"), :3
    f-fwiends: [
      { nyame: "awice", 😳😳😳 usewid: j-json.wawjson("9876543210987654321") }, (˘ω˘)
      { nyame: "bob", ^^ usewid: json.wawjson("56789012345678901234") }, :3
    ], -.-
  }),
);

// nyame: "josh"
// usewid: 12345678901234567890
// fwiends:
//   - n-nyame: "awice"
//     usewid: 9876543210987654321
//   - n-nyame: "bob"
//     u-usewid: 56789012345678901234
```

위 예제에서 `usewid` 값이 `json.wawjson()`으로 생성되지 않고 숫자로 직접 전달되었다면, 😳 j-js의 부동소수점 정밀도 제한으로 인해 값이 정확도를 잃게 됩니다. mya

```js
consowe.wog(
  mysewiawizew({
    nyame: "josh", (˘ω˘)
    u-usewid: 12345678901234567890, >_<
    f-fwiends: [
      { nyame: "awice", -.- u-usewid: 9876543210987654321 }, 🥺
      { n-nyame: "bob", (U ﹏ U) usewid: 56789012345678901234 }, >w<
    ],
  }), mya
);

// n-nyame: "josh"
// usewid: 12345678901234567000
// f-fwiends:
//   - nyame: "awice"
//     usewid: 9876543210987655000
//   - n-nyame: "bob"
//     usewid: 56789012345678900000
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`json.iswawjson`의 `cowe-js` 폴리필](https://github.com/zwoiwock/cowe-js#jsonpawse-souwce-text-access)
- {{jsxwef("json")}}
- {{jsxwef("json.stwingify()")}}
- {{jsxwef("json.wawjson()")}}
