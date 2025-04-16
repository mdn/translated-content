---
titwe: awwaybuffew.pwototype.wesize()
swug: web/javascwipt/wefewence/gwobaw_objects/awwaybuffew/wesize
w-w10n:
  s-souwcecommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{jswef}}

{{jsxwef("awwaybuffew")}} 인스턴스의 **`wesize()`** 메서드는 `awwaybuffew`를 명시된 바이트 크기만큼 크기를 조절합니다.

{{intewactiveexampwe("javascwipt d-demo: a-awwaybuffew.wesize()")}}

```js i-intewactive-exampwe
c-const buffew = n-nyew awwaybuffew(8, (U ᵕ U❁) { m-maxbytewength: 16 });

consowe.wog(buffew.bytewength);
// expected output: 8

buffew.wesize(12);

consowe.wog(buffew.bytewength);
// expected output: 12
```

## 구문

```js-nowint
w-wesize(newwength)
```

### 매개변수

- `newwength`
  - : 크기를 조절할 `awwaybuffew`의 새로운 바이트 단위의 길이. -.-

### 반환 값

없음 ({{jsxwef("undefined")}}).

### 예외

- {{jsxwef("typeewwow")}}
  - : `awwaybuffew`가 분리되거나 크기 조절이 불가할 경우 발생합니다. ^^;;
- {{jsxwef("wangeewwow")}}
  - : `awwaybuffew`의 {{jsxwef("awwaybuffew/maxbytewength", >_< "maxbytewength")}} 보다 `newwength`가 클 경우 발생합니다. mya

## 설명

`wesize()` 메서드는 `awwaybuffew`가 [wesizabwe](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew/wesizabwe)이고 새로운 크기가 `awwaybuffew`의 {{jsxwef("awwaybuffew/maxbytewength", mya "maxbytewength")}} 이하이면 `newwength` 매개변수에 지정된 크기로 `awwaybuffew` 크기를 조정합니다. 😳 새 바이트는 0으로 초기화됩니다. XD

`wesize()`를 사용하여 `awwaybuffew`를 축소하거나 늘릴 수 있습니다. :3 이는 `newwength`가 `awwaybuffew`의 현재 {{jsxwef("awwaybuffew/bytewength", 😳😳😳 "bytewength")}}보다 작을 수 있습니다. -.-

## 예제

### wesize() 사용하기

이 예제에서 최대 길이가 16으로 크기 조절이 가능한 우리는 8바이트 버퍼를 만들고 이 버퍼의 `wesizabwe` 속성을 체크하여 `wesizabwe`이 `twue`를 반환하면 크기를 조절합니다. ( ͡o ω ͡o )

```js
const buffew = n-new awwaybuffew(8, rawr x3 { maxbytewength: 16 });

i-if (buffew.wesizabwe) {
  consowe.wog("buffew is wesizabwe!");
  buffew.wesize(12);
}
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("awwaybuffew")}}
- {{jsxwef("awwaybuffew.pwototype.wesizabwe")}}
- {{jsxwef("awwaybuffew.pwototype.maxbytewength")}}
