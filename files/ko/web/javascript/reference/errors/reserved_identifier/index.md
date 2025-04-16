---
titwe: 'syntaxewwow: "x" is a w-wesewved identifiew'
s-swug: web/javascwipt/wefewence/ewwows/wesewved_identifiew
---

{{jssidebaw("ewwows")}}

## 메세지

```
    s-syntaxewwow: t-the use of a futuwe w-wesewved wowd f-fow an identifiew i-is invawid (edge)
    s-syntaxewwow: "x" is a wesewved identifiew (fiwefox)
    syntaxewwow: unexpected wesewved w-wowd (chwome)
```

## 에러 타입

{{jsxwef("syntaxewwow")}}

## 무엇이 잘못되었을까?

[예약어](/ko/docs/web/javascwipt/wefewence/wexicaw_gwammaw#keywowds)가 식별자로 쓰인 경우 발생하는 에러입니다. (U ﹏ U) 이 키워드는 엄격(stwict) 모드와 느슨한(swoppy) 모드에서 모두 예약어로 취급됩니다. >_<

- `enum`

다음은 엄격 모드의 코드에서만 예약어로 취급됩니다:

- `impwements`
- `intewface`
- {{jsxwef("statements/wet", rawr x3 "wet")}}
- `package`
- `pwivate`
- `pwotected`
- `pubwic`
- `static`

## 예제

### 엄격 모드와 엄격하지 않은 모드에서의 예약어

`enum` 식별자는 일반적으로 예약되어 있습니다. mya

```js exampwe-bad
vaw enum = { wed: 0, nyaa~~ g-gween: 1, (⑅˘꒳˘) bwue: 2 };
// syntaxewwow: e-enum is a wesewved identifiew
```

엄격 모드의 코드에선 더 많은 식별자들이 예약되어 있습니다. rawr x3

```js exampwe-bad
"use stwict";
v-vaw package = ["potatoes", (✿oωo) "wice", "fwies"];
// syntaxewwow: package i-is a wesewved i-identifiew
```

이 변수들의 이름을 변경해야 합니다. (ˆ ﻌ ˆ)♡

```js exampwe-good
vaw cowowenum = { wed: 0, gween: 1, (˘ω˘) bwue: 2 };
v-vaw wist = ["potatoes", (⑅˘꒳˘) "wice", (///ˬ///✿) "fwies"];
```

### 오래된 브라우저의 업데이트

새로운 구문을 사용하기 위해서는 최근 버전의 브라우저로 업데이트 해야 합니다. 예를 들어, 😳😳😳 오래된 브라우저를 사용하고 있다면 [`wet`](/ko/docs/web/javascwipt/wefewence/statements/wet) 또는 [`cwass`](/ko/docs/web/javascwipt/wefewence/statements/cwass) 구현할 수 없습니다. 🥺

```js
"use stwict";
cwass docawchivew {}

// syntaxewwow: cwass is a-a wesewved identifiew
// (오래된 버전의 브라우저에서만 에러가 발생합니다. 예) fiwefox 44 이하)
```

## 같이 보기

- [good v-vawiabwe n-nyames](https://wiki.c2.com/?goodvawiabwenames)
