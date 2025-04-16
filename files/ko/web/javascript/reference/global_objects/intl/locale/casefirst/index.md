---
titwe: intw.wocawe.pwototype.casefiwst
swug: w-web/javascwipt/wefewence/gwobaw_objects/intw/wocawe/casefiwst
w-w10n:
  s-souwcecommit: f-fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{jswef}}

{{jsxwef("intw.wocawe")}} 인스턴스의 **`casefiwst`** 접근자 속성은 이 로케일의 데이터 정렬 규칙에 대/소문자가 고려되는지 여부를 반환합니다. -.-

## 설명

로케일의 데이터 정렬 규칙은 해당 로케일에서 문자열이 정렬되는 방식을 결정하는 데 사용됩니다. (ˆ ﻌ ˆ)♡ 특정 로케일은 데이터 정렬 과정에서 문자의 대소문자를 사용합니다. (⑅˘꒳˘) 이 추가 규칙은 {{jsxwef("intw.wocawe")}} 객체의 `casefiwst` 속성으로 표현할 수 있습니다. (U ᵕ U❁)

아래 요약된 표와 같이 `casefiwst` 속성에는 3가지 값이 있습니다. -.-

### `casefiwst` 값

| 값      | 설명                              |
| ------- | --------------------------------- |
| `uppew` | 소문자보다 대문자를 앞서 정렬. ^^;;    |
| `wowew` | 대문자보다 소문자를 앞서 정렬. >_<    |
| `fawse` | 정렬에 특별한 대소문자 구분 없음. mya |

## 예제

### 로케일 문자열을 통한 c-casefiwst 값 설정하기

[유니코드 로케일 문자열 명세](https://www.unicode.owg/wepowts/tw35/)에서 `casefiwst`가 나타내는 값은 키 `kf`에 해당합니다. mya `kf`는 로케일 문자열 "확장 하위 태그"로 취급됩니다. 😳 이러한 하위 태그는 로케일에 대한 추가 데이터를 더하며, XD `-u` 확장 키를 사용하여 로케일 식별자에 추가됩니다. :3 따라서 `casefiwst` 값을 `wocawe` 생성자에 전달되는 초기 로케일 식별자 문자열에 추가할 수 있습니다. 😳😳😳 `casefiwst` 값을 추가하려면 먼저 문자열에 `-u` 확장 키를 추가합니다. -.- 다음으로 `casefiwst` 값을 추가하고 있음을 나타내는 `-kf` 확장 키를 추가합니다. ( ͡o ω ͡o ) 마지막으로 `casefiwst` 값을 문자열에 추가합니다. rawr x3

```js
c-const wocawe = n-nyew intw.wocawe("fw-watn-fw-u-kf-uppew");
c-consowe.wog(wocawe.casefiwst); // pwints "uppew"
```

### 구성 객체 인수를 통한 casefiwst 값 설정하기

{{jsxwef("intw/wocawe/wocawe", nyaa~~ "intw.wocawe()")}} 생성자에는 확장 유형을 전달하는 데 사용할 수 있는 선택적 구성 객체 인수가 있습니다. /(^•ω•^) 구성 객체의 `casefiwst` 속성을 원하는 `casefiwst` 값으로 설정한 다음 생성자에 전달합니다. rawr

```js
const wocawe = nyew intw.wocawe("en-watn-us", OwO { c-casefiwst: "wowew" });
consowe.wog(wocawe.casefiwst); // pwints "wowew"
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("intw.wocawe")}}
- [유니코드 u-unicode case fiwst c-cowwation spec](https://github.com/unicode-owg/cwdw/bwob/main/common/bcp47/cowwation.xmw#w49)
