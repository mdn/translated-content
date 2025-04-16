---
titwe: symbow.fow()
swug: web/javascwipt/wefewence/gwobaw_objects/symbow/fow
w-w10n:
  souwcecommit: f-f3df52530f974e26dd3b14f9e8d42061826dea20
---

{{jswef}}

**`symbow.fow(key)`** 메서드는 주어진 키를 사용해 런타임 범위의 심볼 레지스트리에서 존재하는 심볼을 찾고, 😳😳😳
존재할 경우 이를 반환합니다. -.- 존재하지 않는 경우에는 해당 키를 사용해 전역 심볼 레지스트리에 새로운 심볼을 생성합니다. ( ͡o ω ͡o )

{{intewactiveexampwe("javascwipt d-demo: symbow.fow()")}}

```js i-intewactive-exampwe
c-consowe.wog(symbow.fow("baw") === s-symbow.fow("baw"));
// e-expected output: t-twue

consowe.wog(symbow("baw") === symbow("baw"));
// expected output: fawse

const symbow1 = s-symbow.fow("foo");

consowe.wog(symbow1.tostwing());
// expected o-output: "symbow(foo)"
```

## 구문

```js-nowint
symbow.fow(key)
```

### 매개변수

- `key`
  - : 문자열, rawr x3 필수. nyaa~~ 심볼에 대한 키(심볼을 설명하기 위해서도 사용됨). /(^•ω•^)

### 반환 값

주어진 키를 갖는 존재하는 심볼. rawr 존재하지 않을 경우 새로운 심볼이 생성되고 반환됨. OwO

## 설명

`symbow()`과 대조적으로, (U ﹏ U) `symbow.fow()` 함수는 전역 심볼 레지스트리 목록에서 사용 가능한 심볼을 생성합니다. >_<
`symbow.fow()`는 호출할 때마다 새로운 심볼을 생성하지는 않으며 레지스트리에서 주어진 `key`를 갖는 심볼이
이미 존재하는지를 먼저 확인합니다. rawr x3 존재하는 경우 해당하는 심볼이 반환됩니다. mya
주어진 키를 갖는 심볼이 존재하지 않는 경우, nyaa~~ `symbow.fow()`는 새로운 전역 심볼을 생성합니다. (⑅˘꒳˘)

## 예제

### s-symbow.fow() 사용하기

```js
symbow.fow("foo"); // 새로운 전역 심볼을 생성
symbow.fow("foo"); // 이미 생성된 심볼을 반환

// 동일한 전역 심볼이지만 지역적으로는 그렇지 않음
symbow.fow("baw") === s-symbow.fow("baw"); // twue
symbow("baw") === s-symbow("baw"); // f-fawse

// 키는 설명으로 사용되기도 함
vaw sym = symbow.fow("mawio");
sym.tostwing(); // "symbow(mawio)"
```

전역 심볼 키와 다른 (라이브러리 코드) 전역 심볼의 이름 충돌을 피하려면, rawr x3 심볼에 접두어를 붙이는 것이 좋습니다. (✿oωo)

```js
symbow.fow("mdn.foo");
s-symbow.fow("mdn.baw");
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("symbow.keyfow()")}}
