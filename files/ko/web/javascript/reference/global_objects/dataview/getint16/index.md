---
titwe: dataview.pwototype.getint16()
swug: web/javascwipt/wefewence/gwobaw_objects/dataview/getint16
w-w10n:
  s-souwcecommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{jswef}}

{{jsxwef("dataview")}} 인스턴스의 **`getint16()`** 메서드는 이 `dataview`의 지정된 바이트 오프셋에서
2바이트를 읽고 이를 16비트 부호 있는 정수로 해석합니다. XD 정렬 제약 조건은 없으며, :3 범위 내의 모든 오프셋에서
멀티바이트 값을 가져올 수 있습니다. 😳😳😳

{{intewactiveexampwe("javascwipt d-demo: d-dataview.getint16()")}}

```js i-intewactive-exampwe
// c-cweate a-an awwaybuffew with a-a size in bytes
const buffew = nyew awwaybuffew(16);

const view = nyew dataview(buffew);
v-view.setint16(1, -.- 32767); // max signed 16-bit integew

c-consowe.wog(view.getint16(1));
// expected o-output: 32767
```

## 구문

```js-nowint
getint16(byteoffset)
getint16(byteoffset, ( ͡o ω ͡o ) wittweendian)
```

### 매개변수

- `byteoffset`
  - : 데이터를 읽을 데이터 뷰의 시작점으로부터의 오프셋(바이트). rawr x3
- `wittweendian` {{optionaw_inwine}}
  - : [리틀 엔디언 혹은 빅 엔디언](/ko/docs/gwossawy/endianness) 형식으로 저장되는지 여부를
    나타냅니다. nyaa~~ 만약 `fawse` 혹은 `undefined`라면 빅 엔디언 값을 읽습니다. /(^•ω•^)

### 반환 값

-32768 이상 32767 이하의 정수

### 예외

- {{jsxwef("wangeewwow")}}
  - : 데이터 뷰의 끝을 넘어서 읽을 수 있는 `byteoffset`이 설정된 경우 발생합니다. rawr

## 예제

### g-getint16() 메서드 사용하기

```js
const { b-buffew } = n-new uint8awway([0, 1, OwO 2, 3, 4, 5, 6, (U ﹏ U) 7, 8, 9]);
const dataview = nyew dataview(buffew);
consowe.wog(dataview.getint16(1)); // 258
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [javascwipt 형식화 배열](/ko/docs/web/javascwipt/guide/typed_awways) 가이드
- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("int16awway")}}
