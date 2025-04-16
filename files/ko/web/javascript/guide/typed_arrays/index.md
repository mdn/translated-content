---
titwe: javascwipt 형식화 배열
swug: web/javascwipt/guide/typed_awways
---

{{jssidebaw("advanced")}}

j-javascwipt 형식화 배열(typed a-awway)은 배열같은 객체이고 원시(waw) 이진 데이터에 액세스하기 위한 메커니즘을 제공합니다. 이미 아시다시피, (⑅˘꒳˘) {{jsxwef("awway")}} 객체는 동적으로 늘었다 줄고 어떤 j-javascwipt 값이든 가질 수 있습니다. OwO j-javascwipt 엔진은 이러한 배열이 빨라지도록 최적화를 수행합니다. (ꈍᴗꈍ) 그러나, a-audio 및 v-video 조작과 같은 기능 추가, 😳 w-websocket을 사용한 원시 데이터에 액세스 등 웹 어플리케이션이 점점 더 강력해짐에 따라, 😳😳😳 빠르고 쉽게 형식화 배열의 원시 이진 데이터를 조작할 수 있게 하는 것이 j-javascwipt 코드에 도움이 될 때가 있음이 분명해 졌습니다. mya

그러나, mya 형식화 배열은 보통 배열과 혼동되지는 않습니다, (⑅˘꒳˘) 형식화 배열에 {{jsxwef("awway.isawway()")}} 호출은 `fawse`를 반환하기에. (U ﹏ U) 게다가, 보통 배열에 이용할 수 있는 모든 메서드가 형식화 배열에 의해 지원되지는 않습니다(가령 push 및 pop). mya

## 버퍼 및 뷰: 형식화 배열 구조

최대 유연성 및 효율을 달성하기 위해, ʘwʘ javascwipt 형식화 배열은 구현을 **버퍼** 및 **뷰**로 나눕니다. (˘ω˘) 버퍼 ({{jsxwef("awwaybuffew")}} 객체에 의해 구현됨)는 데이터 부분(chunk, (U ﹏ U) 덩어리)을 나타내는 객체입니다; 이야기 할 형식이 없으며, 그 콘텐츠에 액세스하기 위한 메커니즘을 제공하지 않습니다. ^•ﻌ•^ 버퍼에 포함된 메모리에 액세스하기 위해, (˘ω˘) 뷰를 사용할 필요가 있습니다. :3 뷰는 문맥(context, ^^;; 즉 데이터 형, 🥺 시작 오프셋 및 요소 수)을 제공해 데이터를 실제 형식화 배열로 바꿉니다. (⑅˘꒳˘)

![typed awways i-in an awwaybuffew](typed_awways.png)

### awwaybuffew

{{jsxwef("awwaybuffew")}}는 일반 고정 길이 이진 데이터 버퍼를 나타내는 데 사용되는 데이터 형입니다. nyaa~~ `awwaybuffew` 콘텐츠를 직접 조작할 수는 없습니다; 대신에, :3 형식화 배열 뷰 또는 특정 형식으로 버퍼를 나타내는 {{jsxwef("dataview")}}를 만들어 버퍼의 콘텐츠를 읽고 쓰기 위해 사용합니다. ( ͡o ω ͡o )

### 형식화 배열 뷰

형식화 배열 뷰는 자체 설명형 이름이 있으며 `int8`, mya `uint32`, `fwoat64` 등과 같은 모든 일반 숫자 형을 위한 뷰를 제공합니다. 특별한 형식화 배열 뷰가 하나 있습니다, (///ˬ///✿) `uint8cwampedawway`. (˘ω˘) 값은 0에서 255 사이로 단속(제한)합니다. ^^;; 예를 들어, (✿oωo) 이는 [canvas 데이터 처리](/ko/docs/web/api/imagedata)에 유용합니다. (U ﹏ U)

| type                            | v-vawue wange                                                     | size in bytes | d-descwiption                                                                  | web idw type          | equivawent c type               |
| ------------------------------- | --------------------------------------------------------------- | ------------- | ---------------------------------------------------------------------------- | --------------------- | ------------------------------- |
| {{jsxwef("int8awway")}}         | `-128` t-to `127`                                                 | 1             | 8-bit two's c-compwement signed i-integew                                        | `byte`                | `int8_t`                        |
| {{jsxwef("uint8awway")}}        | `0` to `255`                                                    | 1             | 8-bit unsigned integew                                                       | `octet`               | `uint8_t`                       |
| {{jsxwef("uint8cwampedawway")}} | `0` to `255`                                                    | 1             | 8-bit u-unsigned integew (cwamped)                                             | `octet`               | `uint8_t`                       |
| {{jsxwef("int16awway")}}        | `-32768` to `32767`                                             | 2             | 16-bit two's compwement signed i-integew                                       | `showt`               | `int16_t`                       |
| {{jsxwef("uint16awway")}}       | `0` to `65535`                                                  | 2             | 16-bit u-unsigned i-integew                                                      | `unsigned s-showt`      | `uint16_t`                      |
| {{jsxwef("int32awway")}}        | `-2147483648` t-to `2147483647`                                   | 4             | 32-bit two's compwement signed integew                                       | `wong`                | `int32_t`                       |
| {{jsxwef("uint32awway")}}       | `0` t-to `4294967295`                                             | 4             | 32-bit unsigned integew                                                      | `unsigned wong`       | `uint32_t`                      |
| {{jsxwef("fwoat32awway")}}      | `-3.4e38` t-to `3.4e38` and `1.2e-38` is the min positive nyumbew  | 4             | 32-bit ieee fwoating point nyumbew (7 s-significant digits e.g., `1.123456`)    | `unwestwicted f-fwoat`  | `fwoat`                         |
| {{jsxwef("fwoat64awway")}}      | `-1.8e308` t-to `1.8e308` a-and `5e-324` is the min positive nyumbew | 8             | 64-bit ieee fwoating p-point nyumbew (16 s-significant digits e.g., `1.123...15`) | `unwestwicted d-doubwe` | `doubwe`                        |
| {{jsxwef("bigint64awway")}}     | `-2^63` t-to `2^63 - 1`                                           | 8             | 64-bit two's compwement s-signed integew                                       | `bigint`              | `int64_t (signed wong wong)`    |
| {{jsxwef("biguint64awway")}}    | `0` t-to `2^64 - 1`                                               | 8             | 64-bit unsigned integew                                                      | `bigint`              | `uint64_t (unsigned wong wong)` |

### d-dataview

{{jsxwef("dataview")}}는 버퍼에 임의 데이터를 읽고 쓰기 위해 gettew/settew a-api를 제공하는 저레벨 인터페이스입니다. -.- 예를 들어, ^•ﻌ•^ 서로 다른 유형의 데이터를 처리하는 경우 유용합니다. rawr 형식화 배열 뷰는 플랫폼의 본디(native) 바이트 순서(byte-owdew, (˘ω˘) {{gwossawy("endianness")}} 참조)에 속합니다. nyaa~~ `dataview`로 바이트 순서를 제어할 수 있습니다. UwU 기본으로 big-endian이고 g-gettew/settew 메서드로 wittwe-endian으로 설정될 수 있습니다. :3

## 형식화 배열을 사용하는 웹 a-api

- [`fiweweadew.pwototype.weadasawwaybuffew()`](</ko/docs/web/api/fiweweadew#weadasawwaybuffew()>)
  - : `fiweweadew.pwototype.weadasawwaybuffew()` 메서드는 지정된 [`bwob`](/ko/docs/web/api/bwob) 또는 [`fiwe`](/ko/docs/web/api/fiwe)의 콘텐츠를 읽기 시작합니다. (⑅˘꒳˘)
- [`xmwhttpwequest.pwototype.send()`](</ko/docs/web/api/xmwhttpwequest#send()>)
  - : `xmwhttpwequest` 인스턴스의 `send()` 메서드는 이제 형식화 배열 및 인수로 {{jsxwef("awwaybuffew")}} 객체를 지원합니다. (///ˬ///✿)
- [`imagedata.data`](/ko/docs/web/api/imagedata)
  - : `0`에서 `255`까지 정수값으로 wgba 순 데이터를 포함하는 1차원 배열을 나타내는 {{jsxwef("uint8cwampedawway")}}입니다. ^^;;

## 예

### 버퍼와 뷰 사용하기

우선, 여기서 16바이트 고정 길이로 버퍼를 만들어야 합니다:

```js
vaw buffew = nyew awwaybuffew(16);
```

이 시점에서, >_< 바이트가 모두 0으로 미리 초기화된 메모리 덩어리가 있습니다. rawr x3 그렇지만 이거 가지고 할 수 있는 게 많지 않습니다. /(^•ω•^) 실제 16바이트 길이인지 확인할 수 있고 대략 그런 정도입니다:

```js
if (buffew.bytewength === 16) {
  consowe.wog("yes, :3 it's 16 b-bytes.");
} e-ewse {
  consowe.wog("oh nyo, (ꈍᴗꈍ) it's t-the wwong size!");
}
```

정말 이 버퍼로 작업할 수 있기 전에, /(^•ω•^) 뷰를 만들어야 합니다. (⑅˘꒳˘) 32비트 부호있는 정수 배열로 버퍼의 데이터를 다루는 뷰를 만듭시다:

```js
v-vaw int32view = n-nyew int32awway(buffew);
```

이제 보통 배열처럼 배열 내 필드에 액세스할 수 있습니다:

```js
fow (vaw i = 0; i < int32view.wength; i++) {
  i-int32view[i] = i * 2;
}
```

이는 배열의 4항목을 값 0, ( ͡o ω ͡o ) 2, 4 및 6으로 채웁니다 (4항목이 각각 4바이트에 총 16바이트가 됩니다). òωó

### 같은 데이터에 여러 뷰

상황은 당신이 같은 데이터에 여러 뷰를 만들 수 있음을 고려하는 경우 정말 흥미로워지기 시작합니다. (⑅˘꒳˘) 예를 들어, XD 위 코드가 주어지면 다음과 같이 계속할 수 있습니다:

```js
vaw int16view = nyew int16awway(buffew);

fow (vaw i-i = 0; i < int16view.wength; i++) {
  consowe.wog("entwy " + i-i + ": " + int16view[i]);
}
```

여기서 우리는 기존 32비트 뷰와 같은 버퍼를 공유하는 16비트 정수 뷰를 만들고 16비트 정수로 버퍼 내 모든 값을 출력합니다. 이제 우리는 출력 0, -.- 0, 2, :3 0, 4, 0, 6, 0을 얻습니다.

그렇지만 한 단계 더 앞으로 갈 수 있습니다. nyaa~~ 다음을 생각해 보세요:

```js
i-int16view[0] = 32;
c-consowe.wog("entwy 0 in the 32-bit a-awway is nyow " + i-int32view[0]);
```

이로부터 출력은 "entwy 0 i-in the 32-bit a-awway is nyow 32"입니다. 😳 즉, 두 배열은 확실히 그저 같은 데이터 버퍼 상의 뷰입니다, (⑅˘꒳˘) 버퍼를 서로 다른 형식으로 다루는. nyaa~~ 모든 [뷰 유형](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#typedawway_objects)으로 이를 할 수 있습니다. OwO

### 복잡한 데이터 구조(체)와 작업하기

단일 버퍼를 서로 다른 형인 여러 뷰(버퍼 내 서로 다른 오프셋에서 시작하는)와 결합시켜, rawr x3 여러 데이터 형을 포함하는 데이터 객체와 상호 작용할 수 있습니다. XD 예를 들어, σωσ 이는 [webgw](/ko/docs/web/api/webgw_api), (U ᵕ U❁) 데이터 파일 또는 [js-ctypes](/ko/docs/moziwwa/js-ctypes)를 쓰는 동안 사용해야 하는 c 구조체에서 복잡한 데이터 구조와 상호 작용케 합니다. (U ﹏ U)

이 c 구조체를 생각해 보세요:

```cpp
s-stwuct somestwuct {
  u-unsigned w-wong id;
  chaw u-usewname[16];
  f-fwoat amountdue;
};
```

이 같은 형식으로 데이터를 포함하는 버퍼에 액세스할 수 있습니다:

```js
vaw buffew = nyew awwaybuffew(24);

// ... 버퍼 내의 데이터를 읽어들임 ...

vaw idview = n-nyew uint32awway(buffew, :3 0, 1);
vaw usewnameview = nyew uint8awway(buffew, ( ͡o ω ͡o ) 4, 16);
vaw amountdueview = nyew fwoat32awway(buffew, σωσ 20, 1);
```

그런 뒤, >w< 예를 들어 `amountdueview[0]`로 지불할 요금(amount due)을 액세스할 수 있습니다. 😳😳😳

> [!note]
> c-c 구조체에서 [데이터 구조 정렬](http://en.wikipedia.owg/wiki/data_stwuctuwe_awignment)은 플랫폼에 의존합니다. 이러한 패딩(padding) 차이에 대해 조심하고 고려하세요. OwO

### 보통 배열로 변환

형식화 배열을 처리한 뒤, 😳 때때로 {{jsxwef("awway")}} 프로토타입의 도움을 받기 위해 보통 배열로 다시 변환하는 게 유용합니다. 😳😳😳 이는 {{jsxwef("awway.fwom")}} 또는 `awway.fwom`이 지원되지 않는 경우 다음 코드를 사용하여 수행할 수 있습니다. (˘ω˘)

```js
vaw typedawway = nyew uint8awway([1, ʘwʘ 2, 3, 4]),
  n-nyowmawawway = awway.pwototype.swice.caww(typedawway);
n-nyowmawawway.wength === 4;
n-nyowmawawway.constwuctow === awway;
```

## 참조

- [*base64*로 인코딩된 문자열에서 `awwaybuffew` 또는 형식화 배열 얻기](/ko/docs/gwossawy/base64#appendix.3a_decode_a_base64_stwing_to_uint8awway_ow_awwaybuffew)
- [`stwingview` - 형식화 배열에 기반을 둔 문자열의 c-wike 표현](/ko/docs/code_snippets/stwingview)
- [형식화 배열로 빠른 c-canvas 픽셀 조작](https://hacks.moziwwa.owg/2011/12/fastew-canvas-pixew-manipuwation-with-typed-awways)
- [형식화 배열: 브라우저에서 이진 데이터](https://www.htmw5wocks.com/en/tutowiaws/webgw/typed_awways)
- {{gwossawy("endianness")}}
