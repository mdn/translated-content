---
title: parseFloat()
slug: Web/JavaScript/Reference/Global_Objects/parseFloat
---

{{jsSidebar("Objects")}}

**`parseFloat()`** 함수는 주어진 값을 필요한 경우 문자열로 변환한 후 부동소수점 실수로 파싱해 반환합니다.

{{EmbedInteractiveExample("pages/js/globalprops-parsefloat.html")}}

## 구문

```js
parseFloat(string);
```

### 매개변수

- `string`
  - : 파싱할 값입니다. 문자열이 아닐 경우 [`ToString`](https://tc39.es/ecma262/#sec-tostring) 추상 연산을 사용해 문자열로 변환합니다. 문자열의 선행 공백은 무시합니다.

### 반환 값

주어진 문자열에서 파싱한 부동소수점 실수입니다.

공백이 아닌 첫 글자를 숫자로 변환할 수 없는 경우 {{jsxref("NaN")}}을 반환합니다.

## 설명

`parseFloat`은 전역 객체의 함수 속성입니다.

- `parseFloat`이 양의 부호(`+`), 음의 부호(`-` U+002D HYPHEN-MINUS), 숫자(`0`-`9`), 소수점(`.`), 지수(`e`, `E`) 외의 다른 글자를 발견할 경우 해당 문자 이전까지의 문자만 사용해 파싱하며 문제의 문자와 그 이후는 모두 무시합니다.
- 소수점이 두 개 이상 존재할 경우 두 번째 소수점 역시 위와 같이 무시됩니다.
- 주어진 값의 선행 및 후행 공백은 무시합니다.
- 주어진 값의 첫 글자를 숫자로 변환할 수 없는 경우 {{jsxref("NaN")}}을 반환합니다.
- `parseFloat`은 {{jsxref("Infinity")}}도 파싱 후 반환할 수 있습니다.
- `parseFloat`은 {{jsxref("BigInt")}} 구문을 {{jsxref("Number")}}로 반환하므로 정확도를 잃습니다. 마지막 `n` 문자를 무시하기 때문입니다.

더 엄격한 파싱이 필요하면, 유효하지 않은 문자가 어디에나 존재할 시 {{jsxref("NaN")}}을 반환하는 {{jsxref("Number", "Number(value)")}}를 고려하세요.

`parseFloat`은 {{jsxref("Object.toString", "toString")}}이나 {{jsxref("Object.valueOf", "valueOf")}} 메서드를 구현한 객체도 파싱할 수 있습니다. 이 때의 결과는 객체의 `toString()`, `valueOf()`의 반환 값을 `parseFloat`에 전달한 것과 동일합니다.

## 예제

### 숫자를 반환하는 경우

아래 예제는 모두 `3.14`를 반환합니다.

```js
parseFloat(3.14);
parseFloat("3.14");
parseFloat("  3.14  ");
parseFloat("314e-2");
parseFloat("0.0314E+2");
parseFloat("3.14와 숫자가 아닌 문자들");
parseFloat({
  toString: function () {
    return "3.14";
  },
});
```

### `NaN`을 반환하는 경우

다음 예제는 {{jsxref("NaN")}}을 반환합니다.

```js
parseFloat("FF2");
```

### `parseFloat`과 `BigInt`

다음 예제는 부동소수점 실수로 표현하기엔 너무 큰 수를 받거나 `n`을 무시해서 정확도를 잃어버린 `900719925474099300`을 반환합니다.

```js
parseFloat(900719925474099267n);
parseFloat("900719925474099267n");
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("parseInt", "parseInt()")}}
- {{jsxref("Number.parseFloat()")}}
- {{jsxref("Number.parseInt()")}}
- {{jsxref("Number.toFixed()")}}
- {{jsxref("isNaN", "isNaN()")}}
