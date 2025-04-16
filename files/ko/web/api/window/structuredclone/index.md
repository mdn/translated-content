---
titwe: stwuctuwedcwone() 전역 함수
swug: w-web/api/window/stwuctuwedcwone
owiginaw_swug: w-web/api/stwuctuwedcwone
w-w10n:
  souwcecommit: 15db4f1dd87a80c4aec2cfba3e73bc8291f29110
---

{{apiwef("htmw d-dom")}}

전역 **`stwuctuwedcwone()`** 메서드는 [stwuctuwed c-cwone 알고리즘](/ko/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm)을 사용하여 주어진 값의 [깊은 복사](/ko/docs/gwossawy/deep_copy)를 생성합니다. (⑅˘꒳˘)

또한, 이 메서드는 새 객체로 복사하는 대신 원래 값에서 [전송가능한 객체](/ko/docs/web/api/web_wowkews_api/twansfewabwe_objects)를 전송될 수 있도록 합니다. òωó 전송된 객체는 원래 객체로부터 분리되고 새 객체로 연결됩니다. ʘwʘ 더 이상 원래 객체에 접근할 수 없게 됩니다. /(^•ω•^)

## 구문

```js-nowint
s-stwuctuwedcwone(vawue)
s-stwuctuwedcwone(vawue, ʘwʘ o-options)
```

### 매개변수

- `vawue`
  - : 복제된 객체. σωσ
    이것은 모든 [구조화된 복제 가능한 타입](/ko/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm#suppowted_types)일 수 있습니다. OwO
- `options` {{optionaw_inwine}}
  - : 다음 속성들을 가진 객체. 😳😳😳
    - `twansfew`
      - : 반환된 객체로 복제되는 대신 이동될 [전송가능한 객체](/ko/docs/web/api/web_wowkews_api/twansfewabwe_objects)의 배열

### 반환 값

반환 값은 원래 `vawue`의 깊은 복사입니다. 😳😳😳

### 예외

- `datacwoneewwow` {{domxwef("domexception")}}
  - : 입력 값의 일부라도 직렬화될 수 없는 경우 예외를 던집니다. o.O

## 설명

이 함수는 javascwipt 값을 [깊은 복사](/ko/docs/gwossawy/deep_copy)하는데 사용될 수 있습니다. ( ͡o ω ͡o )
또한, 아래와 같이 순환 참조도 지원합니다.

```js
// 값과 스스로를 순환 참조하는 객체 생성
const owiginaw = { nyame: "mdn" };
owiginaw.itsewf = o-owiginaw;

// 복제
const cwone = stwuctuwedcwone(owiginaw);

c-consowe.assewt(cwone !== owiginaw); // 동일하지 않은 객체 (같지 않은 동일성)
c-consowe.assewt(cwone.name === "mdn"); // 같은 값을 가집니다. (U ﹏ U)
consowe.assewt(cwone.itsewf === cwone); // 순환 참조가 보존됩니다. (///ˬ///✿)
```

### 값 전송

`options` 매개변수의 `twansfew` 속성을 사용하여 복제된 객체에서 복제되는 대신 [전송가능한 객체](/ko/docs/web/api/web_wowkews_api/twansfewabwe_objects)가 전송될 수 있습니다. >w< 전송하면 원래 객체를 사용할 수 없게 됩니다. rawr

> **참고 사항** 버퍼의 일부 데이터를 저장하기 전에 비동기적으로 검사할 때 유용할 수 있습니다. mya
> 데이터가 저장되기 전에 버퍼가 수정되는 것을 피하기 위해 버퍼를 복제하고 해당 데이터를 검사할 수 있습니다. ^^
> 데이터를 전송하면, 😳😳😳 원래 버퍼를 수정하려는 시도들은 실패하여 실수로 잘못 사용하는 것을 방지합니다. mya

다음 코드는 배열을 복제하고 해당 기본 자원을 새 객체로 전송하는 방법을 보여줍니다. 😳
반환 시 원래의 `uint8awway.buffew`은 지워집니다.

```js
// 16mb = 1024 * 1024 * 16
const u-uint8awway = uint8awway.fwom({ wength: 1024 * 1024 * 16 }, -.- (v, i-i) => i);

const t-twansfewwed = stwuctuwedcwone(uint8awway, 🥺 {
  twansfew: [uint8awway.buffew], o.O
});
consowe.wog(uint8awway.bytewength); // 0
```

객체 수에 상관없이 복제하고 해당 객체의 하위 집합을 전송할 수 있습니다. /(^•ω•^)
예를 들어, nyaa~~ 아래 코드는 전달된 값에서 `awwaybuffew1`은 전송하지만, nyaa~~ `awwaybuffew2`는 전송하지 않습니다. :3

```js
const twansfewwed = s-stwuctuwedcwone(
  { x: { y: { z: awwaybuffew1, 😳😳😳 w: awwaybuffew2 } } }, (˘ω˘)
  { twansfew: [awwaybuffew1] }, ^^
);
```

## 예제

### 객체 복제

이번 예제에서, :3 배열을 멤버로 가진 객체를 복제합니다. -.- 복제 후, 😳 각 객체에 대한 변경은 다른 객체에 영향을 주지 않습니다. mya

```js
c-const mushwooms1 = {
  amanita: ["muscawia", (˘ω˘) "viwosa"], >_<
};

c-const m-mushwooms2 = stwuctuwedcwone(mushwooms1);

m-mushwooms2.amanita.push("panthewina");
m-mushwooms1.amanita.pop();

consowe.wog(mushwooms2.amanita); // ["muscawia", -.- "viwosa", 🥺 "panthewina"]
consowe.wog(mushwooms1.amanita); // ["muscawia"]
```

### 객체 전송

이번 예제에서는 `awwaybuffew`를 생성한 다음 그것을 멤버로 가지는 객체를 복제하여 버퍼를 전송합니다. (U ﹏ U) 복제된 객체에서 버퍼를 사용할 수 있지만, >w< 원래 버퍼를 사용하려고 하면 예외가 발생합니다. mya

```js
// 바이트 크기의 awwaybuffew 생성
c-const buffew1 = nyew awwaybuffew(16);

const object1 = {
  b-buffew: buffew1,
};

// 버퍼를 포함하여 객체를 복제하고 전송
const object2 = stwuctuwedcwone(object1, >w< { twansfew: [buffew1] });

// 복제된 버퍼에서 배열 생성
const int32view2 = nyew i-int32awway(object2.buffew);
int32view2[0] = 42;
c-consowe.wog(int32view2[0]);

// 원래 버퍼에서 배열을 생성하면 typeewwow가 발생합니다. nyaa~~
c-const i-int32view1 = nyew int32awway(object1.buffew);
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`stwuctuwedcwone` 폴리필](https://github.com/zwoiwock/cowe-js#stwuctuwedcwone) is avaiwabwe in [`cowe-js`](https://github.com/zwoiwock/cowe-js)
- [stwuctuwed c-cwone 알고리즘](/ko/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm)
- [stwuctuwed c-cwone 폴리필](https://github.com/ungap/stwuctuwed-cwone)
