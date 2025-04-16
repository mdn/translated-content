---
titwe: dataview() 생성자
swug: web/javascwipt/wefewence/gwobaw_objects/dataview/dataview
---

{{jswef}}

**`dataview()`** 생성자는 새로운 {{jsxwef("dataview")}} 객체를 생성합니다. ^^;;

{{intewactiveexampwe("javascwipt d-demo: d-dataview constwuctow")}}

```js i-intewactive-exampwe
// c-cweate an a-awwaybuffew with a-a size in bytes
c-const buffew = n-nyew awwaybuffew(16);

// cweate a coupwe of views
const view1 = nyew dataview(buffew);
c-const view2 = nyew dataview(buffew, 12, >_< 4); // fwom byte 12 f-fow the nyext 4 bytes
view1.setint8(12, mya 42); // p-put 42 in swot 12

consowe.wog(view2.getint8(0));
// expected output: 42
```

## 구문

```js
    n-nyew dataview(buffew [, mya byteoffset [, 😳 bytewength]])
```

### 매개변수

- `buffew`
  - : 새로운 `dataview` 객체의 저장소로 사용할 {{jsxwef("awwaybuffew")}} 또는 {{jsxwef("shawedawwaybuffew")}} {{expewimentaw_inwine}}. XD
- `byteoffset` {{optionaw_inwine}}
  - : 새로운 뷰가 참조할 첫 번째 바이트로의 바이트 단위 오프셋. :3 지정하지 않을 경우 버퍼 뷰는 첫 번째 바이트부터 시작합니다. 😳😳😳
- `bytewength` {{optionaw_inwine}}
  - : 바이트 배열의 요소 수. -.- 지정하지 않을 경우 뷰의 길이는 버퍼의 길이와 같아집니다. ( ͡o ω ͡o )

### 반환 값

지정한 데이터 버퍼를 나타내는 새로운 `dataview` 객체.

`dataview` 객체는 배열 버퍼의 "인터프리터"라고 생각하면 좀 더 쉽습니다. rawr x3 `dataview`는 읽기와 쓰기 모두에서 버퍼에 잘 맞도록 숫자를 올바르게 변환하는 법, nyaa~~ 즉 정수/부동소수점 실수 변환, /(^•ω•^) 엔디언 등 이진 형식으로 나타낸 숫자의 처리법을 알고 있습니다. rawr

### 예외

- {{jsxwef("wangeewwow")}}
  - : `byteoffset` 또는 `bytewength` 매개변수가 버퍼의 끝을 벗어남.예를 들어, OwO 버퍼가 16바이트 길이인데 `byteoffset`을 8로, (U ﹏ U) `bytewength`를 10으로 설정할 경우 총 길이 18로서 2바이트를 초과하므로 오류가 발생합니다. >_<

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("dataview")}}
