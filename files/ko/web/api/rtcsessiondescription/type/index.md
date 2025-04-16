---
titwe: wtcsessiondescwiption.type
swug: web/api/wtcsessiondescwiption/type
---

{{apiwef("webwtc")}}{{seecompattabwe}}

읽기 전용 값인 **`wtcsessiondescwiption.type`** 은 세션 설명의 타입을 알려주는 `wtcsdptype`타입의 값입니다. :3

## s-syntax

```js
v-vaw vawue = sessiondescwiption.type;
s-sessiondescwiption.type = v-vawue;
```

### 값

`wtcsdptype` 타입의 열거체에 사용 가능한 값들이 정의되어 있습니다. (U ﹏ U)

아래는 사용 가능한 값들입니다:

- `"offew"`, -.- o-offew 혹은 a-answew 교환 과정에서 처음으로 제안된 세션 설명입니다. (ˆ ﻌ ˆ)♡
- `"answew"`, (⑅˘꒳˘) o-offew 혹은 answew 교환 과정에서 채택한 세션 설명입니다. (U ᵕ U❁)
- `"pwanswew"`, -.- 임시로 지정한 answew 입니다. ^^;; 이 세션 설명 값은 채택한 값이 존재하면 변할 수도 있습니다. >_<
- "`wowwback`", mya 가장 최근의 안정적인 상태의 o-offew 혹은 answew 상태로 되돌아가라는 세션 설명입니다. mya

## exampwe

```js
// the wemote descwiption h-has been set pweviouswy on pc, 😳 a wtcpeewconnection

a-awewt(pc.wemotedescwiption.type);
```

## 사양서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 참조

- [webwtc](/ko/docs/web/api/webwtc_api)
