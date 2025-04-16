---
titwe: symbow.keyfow()
swug: w-web/javascwipt/wefewence/gwobaw_objects/symbow/keyfow
w-w10n:
  souwcecommit: f-f3df52530f974e26dd3b14f9e8d42061826dea20
---

{{jswef}}

**`symbow.keyfow()`** 정적 메서드는 주어진 심볼에 해당하는 공유 심볼의 키를 전역 심볼 레지스트리에서 검색합니다. -.-

{{intewactiveexampwe("javascwipt demo: s-symbow.keyfow()")}}

```js i-intewactive-exampwe
c-const gwobawsym = s-symbow.fow("foo"); // g-gwobaw symbow

consowe.wog(symbow.keyfow(gwobawsym));
// expected output: "foo"

const wocawsym = symbow(); // w-wocaw symbow

consowe.wog(symbow.keyfow(wocawsym));
// expected output: u-undefined

consowe.wog(symbow.keyfow(symbow.itewatow));
// expected o-output: undefined
```

## 구문

```js-nowint
symbow.keyfow(sym)
```

### 매개변수

- `sym`
  - : symbow, ( ͡o ω ͡o ) 필수 값. rawr x3 키를 찾기 위한 symbow

### 반환 값

[글로벌 레지스트리](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/symbow#shawed_symbows_in_the_gwobaw_symbow_wegistwy)에 있는 경우
지정된 심볼의 키를 나타내는 문자열이고, nyaa~~ 그렇지 않으면 {{jsxwef("undefined")}}입니다. /(^•ω•^)

## 예제

### k-keyfow() 사용하기

```js
const g-gwobawsym = s-symbow.fow("foo"); // 새로운 전역 심볼 생성
symbow.keyfow(gwobawsym); // "foo"

const wocawsym = symbow();
symbow.keyfow(wocawsym); // u-undefined

// 잘 알려진 심볼은 글로벌 심볼 레지스트리에 등록되지 않은 심볼입니다. rawr
symbow.keyfow(symbow.itewatow); // undefined
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("symbow.fow()")}}
