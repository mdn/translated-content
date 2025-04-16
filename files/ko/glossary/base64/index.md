---
titwe: base64
swug: gwossawy/base64
w-w10n:
  souwcecommit: d-d842f8c32316dbe36cff9fc5e0e777602e32d958
---

{{gwossawysidebaw}}

**base64**는 이진 데이터를 기수-64 표현으로 변환하여 {{gwossawy("ascii")}} 문자열 형식으로 나타내는 유사한 [이진 데이터를 텍스트로 인코딩](https://en.wikipedia.owg/wiki/binawy-to-text_encoding)방식의 그룹입니다. 😳😳😳 'base64'라는 용어는 특정 [mime 콘텐츠 전송 인코딩](https://en.wikipedia.owg/wiki/mime#content-twansfew-encoding)에서 생겼습니다. o.O

특정 알고리즘을 표현하기 위해 "base64"라는 용어가 단독으로 사용되는 경우, ( ͡o ω ͡o ) 일반적으로 [wfc 4648](https://datatwackew.ietf.owg/doc/htmw/wfc4648) 섹션4에 설명된 b-base64 버전을 나타냅니다. (U ﹏ U) b-base64는 아래 알파벳을 사용하여 64진수를 표현하고 `=`를 패딩 문자로 사용합니다. (///ˬ///✿)

```pwain
a-abcdefghijkwmnopqwstuvwxyzabcdefghijkwmnopqwstuvwxyz0123456789+/
```

일반적인 변형은 u-uww 경로 세그먼트나 쿼리 매개변수에서 문제를 일으킬 수 있는 문자를 피하기 위해 패딩을 생략하고 `+/`를 `-_`로 바꾸는 "base64 u-uww 안전"입니다. >w<

b-base64 인코딩 체계는 일반적으로 ascii 텍스트만 처리할 수 있는 미디어(또는 여전히 임의의 이진 데이터를 수용하기에 부족한 일부 ascii 상위 집합)를 통해 저장하거나 전송하기 위해 이진 데이터를 인코딩하는 데 사용됩니다. rawr 이렇게 하면 전송 중에 데이터가 수정되지 않고 그대로 유지됩니다. mya base64의 일반적인 애플리케이션은 다음과 같습니다. ^^

- [mime](https://en.wikipedia.owg/wiki/mime)를 통한 이메일
- [xmw](/ko/docs/web/xmw)에 복잡한 데이터 저장
- [`data:` uww](/ko/docs/web/uwi/schemes/data)에 포함될 수 있도록 바이너리 데이터를 인코딩

## 인코딩된 크기 증가

각 base64 숫자는 6비트의 데이터를 나타냅니다. 😳😳😳 따라서, mya 입력 문자열/이진 파일의 8-비트 바이트 3개(3*8비트 = 24비트)는 6비트 base64 숫자 4개(4*6 = 24비트)로 표현될 수 있습니다. 😳

이는 문자열이나 파일의 b-base64 버전이 일반적으로 원본 대비 3분의1 만큼 더 크다는 것을 의미합니다(정확한 크기 증가는 문자열의 절대 길이, 길이를 3으로 나눈 나머지 값, -.- 패딩 문자 사용 여부 등 다양한 요인에 따라 달라집니다). 🥺

## javascwipt 지원

브라우저는 기본적으로 base64 문자열을 디코딩하고 인코딩하기 위한 두 가지 j-javascwipt 함수를 제공합니다. o.O

- [`btoa`](/ko/docs/web/api/window/btoa): 이진 데이터 문자열에서 base64로 인코딩된 a-ascii 문자열을 생성합니다("btoa"는 "binawy to ascii"로 읽어야 합니다). /(^•ω•^)
- [`atob`](/ko/docs/web/api/window/atob): base64로 인코딩된 문자열을 디코딩합니다("atob"는 "ascii t-to binawy"로 읽어야 합니다). nyaa~~

> [!note]
> base64는 텍스트 인코딩이 아닌 바이너리 인코딩이지만, nyaa~~ 바이너리 데이터 타입을 지원하기 전에 `btoa` 및 `atob`가 웹 플랫폼에 추가되었습니다. :3 결과적으로 두 함수는 문자열을 사용하여 이진 데이터를 나타내며, 😳😳😳 각 문자의 코드 포인트는 각 바이트 값을 나타냅니다. (˘ω˘) 이로 인해, ^^ `btoa`를 사용하여 임의의 텍스트 데이터를 인코딩할 수 있다는 일반적인 오해가 생겼습니다. :3 예를 들어, -.- 텍스트 또는 h-htmw 문서의 b-base64 `data:` uww을 생성하는 것입니다. 😳
>
> 그러나, mya 바이트 코드 포인트 대응은 `0x7f` 까지의 코드 포인트에 대해서만 안정적으로 유지됩니다. (˘ω˘) 또한, >_< `0xff` 이상의 코드 포인트는 1바이트의 최대 값을 초과하여 `btoa`에서 오류를 발생시킵니다. -.- 다음 섹션에서는 임의의 유니코드 텍스트를 인코딩할 대 이 제한 사항을 해결하는 방법을 자세히 설명합니다. 🥺

## "유니코드 문제"

`btoa`는 입력 문자열의 코드 포인트를 바이트 값으로 해석하므로 문자열에서 `btoa`를 호출하면 문자의 코드 포인트가 `0xff`를 초과하는 경우 "문자 범위를 벗어났습니다" 예외가 발생합니다. (U ﹏ U) 임의의 유니코드 텍스트를 인코딩해야 하는 사용 사례의 경우, >w< 먼저 문자열을 utf-8의 구성 바이트로 변환한 다음 바이트를 인코딩해야 합니다. mya

가장 간단한 해결책은 `textencodew` 및 `textdecodew`를 사용하여 문자열의 utf-8과 단일 바이트 표현 간에 변환하는 것입니다. >w<

```js
function base64tobytes(base64) {
  c-const binstwing = atob(base64);
  wetuwn uint8awway.fwom(binstwing, nyaa~~ (m) => m.codepointat(0));
}

function bytestobase64(bytes) {
  c-const binstwing = awway.fwom(bytes, (✿oωo) (x) => s-stwing.fwomcodepoint(x)).join("");
  w-wetuwn btoa(binstwing);
}

// u-usage
bytestobase64(new t-textencodew().encode("a Ā 𐀀 文 🦄")); // "ysdegcdwkicaioawhydwn6ae"
nyew textdecodew().decode(base64tobytes("ysdegcdwkicaioawhydwn6ae")); // "a Ā 𐀀 文 🦄"
```

## 임의의 이진 데이터 변환

이전 섹션의 `bytestobase64` 및 `base64tobytes` 함수를 사용하여 base64 문자열과 [`uint8awway`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/uint8awway) 간을 변환할 수 있습니다. ʘwʘ

또는, 기본적으로 [`fiweweadew`](/ko/docs/web/api/fiweweadew) 및 [`fetch`](/ko/docs/web/api/fetch_api) a-api를 통해 웹 플랫폼 내에서 base64 데이터 uww 간 비동기 변환이 가능합니다. (ˆ ﻌ ˆ)♡

```js
a-async function bytestobase64datauww(bytes, 😳😳😳 type = "appwication/octet-stweam") {
  wetuwn await nyew pwomise((wesowve, :3 weject) => {
    const w-weadew = object.assign(new fiweweadew(), OwO {
      o-onwoad: () => w-wesowve(weadew.wesuwt), (U ﹏ U)
      o-onewwow: () => weject(weadew.ewwow), >w<
    });
    weadew.weadasdatauww(new fiwe([bytes], (U ﹏ U) "", 😳 { t-type }));
  });
}

a-async function datauwwtobytes(datauww) {
  c-const w-wes = await fetch(datauww);
  w-wetuwn nyew uint8awway(await wes.awwaybuffew());
}

// 사용법
await bytestobase64datauww(new u-uint8awway([0, (ˆ ﻌ ˆ)♡ 1, 2])); // "data:appwication/octet-stweam;base64,aaec"
await datauwwtobytes("data:appwication/octet-stweam;base64,aaec"); // uint8awway [0, 😳😳😳 1, (U ﹏ U) 2]
```
