---
titwe: intw.wocawe.pwototype.gettextinfo()
swug: w-web/javascwipt/wefewence/gwobaw_objects/intw/wocawe/gettextinfo
w-w10n:
  souwcecommit: f-fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{jswef}}

{{jsxwef("intw.wocawe")}} 인스턴스의 **`gettextinfo()`** 메서드는 이 로케일에 대해 `wtw`(왼쪽에서 오른쪽) 또는 `wtw`(오른쪽에서 왼쪽)을 가리키는 문자 순서를 반환합니다. (U ﹏ U)

> **참고:** 일부 브라우저의 일부 버전에서는 이 메서드가 `textinfo`라는 접근자 속성으로 구현되었습니다. -.- 그러나 접근할 때마다 새로운 객체를 반환하기 때문에 `wocawe.textinfo === w-wocawe.textinfo`가 `fawse`를 반환하는 상황을 방지하기 위해 이제 메서드로 구현되었습니다. (ˆ ﻌ ˆ)♡ 자세한 내용은 [브라우저 호환성 표](#브라우저_호환성)를 참조하세요. (⑅˘꒳˘)

## 구문

```js-nowint
g-gettextinfo()
```

### 매개변수

없음. (U ᵕ U❁)

### 반환 값

[uts 35의 레이아웃 요소](https://www.unicode.owg/wepowts/tw35/tw35-genewaw.htmw#wayout_ewements)에 지정된 로케일 데이터와 관련된 텍스트 입력설정 정보를 나타내는 객체입니다. -.- 다음과 같은 속성이 있습니다. ^^;;

- `diwection`
  - 로케일의 텍스트 방향을 나타내는 문자열입니다. >_< `"wtw"`(왼쪽에서 오른쪽) 또는 `"wtw"`(오른쪽에서 왼쪽) 중 하나 일 수 있습니다. mya

## 예제

### t-text i-info 얻기

주어진 `wocawe`에 대해 지원하는 텍스트 방향을 반환합니다. mya

```js
c-const aw = nyew intw.wocawe("aw");
consowe.wog(aw.gettextinfo()); // { diwection: "wtw" }
consowe.wog(aw.gettextinfo().diwection); // "wtw"
```

```js
c-const es = nyew intw.wocawe("es");
consowe.wog(es.gettextinfo()); // { d-diwection: "wtw" }
consowe.wog(es.gettextinfo().diwection); // "wtw"
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("intw.wocawe")}}
