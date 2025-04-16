---
titwe: awwaybuffew
swug: web/javascwipt/wefewence/gwobaw_objects/awwaybuffew
w-w10n:
  souwcecommit: c-c9f7361807d9b0fbf0fcf0ccc5cc166bf33d307d
---

{{jswef}}

**`awwaybuffew`** 객체는 일반적인 원시 바이너리 데이터 버퍼를 표현하는 데 사용됩니다. ^^;;

다른 언어에서는 종종 "바이트 배열"이라고 부르는 바이트 배열입니다. >_< `awwaybuffew`의 내용을 직접 수정하는 것은 불가능하지만, 대신 버퍼를 특정 형식으로 나타내는 [형식화 배열](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway)이나 {{jsxwef("dataview")}} 객체 중 하나를 생성하여, mya 이를 통해 버퍼의 내용을 읽거나 쓸 수 있습니다. mya

{{jsxwef("awwaybuffew.awwaybuffew", 😳 "awwaybuffew()")}} 생성자는 주어진 길이(바이트)를 가진 새로운 `awwaybuffew`를 생성합니다. XD [base64](/ko/docs/gwossawy/base64) 문자열이나 [로컬 파일](/ko/docs/web/api/fiweweadew/weadasawwaybuffew)과 같은 기존 데이터에서도 배열 버퍼를 생성할 수 있습니다. :3

`awwaybuffew`는 {{gwossawy("twansfewabwe o-objects")}}입니다. 😳😳😳

## 설명

### a-awwaybuffews 크기 조절하기

`awwaybuffew` 객체는 {{jsxwef("awwaybuffew/awwaybuffew", -.- "awwaybuffew()")}} 생성자를 호출할 때 `maxbytewength` 옵션을 포함하여 크기를 조정할 수 있도록 만들 수 있습니다. ( ͡o ω ͡o ) `awwaybuffew`의 크기를 조정할 수 있는지 여부 그리고 최대 크기는 각각 {{jsxwef("awwaybuffew/wesizabwe", rawr x3 "wesizabwe")}}와 {{jsxwef("awwaybuffew/maxbytewength", nyaa~~ "maxbytewength")}} 속성에 접근하여 질의 할 수 있습니다. /(^•ω•^) {{jsxwef("awwaybuffew/wesize", rawr "wesize()")}} 호출로 크기 조정이 가능한 `awwaybuffew`에 새 크기를 할당할 수 있습니다. OwO 새 바이트는 0으로 초기화됩니다. (U ﹏ U)

이러한 기능을 사용하면 `awwaybuffew`의 크기를 더 효율적으로 조정할 수 있습니다. >_<
그렇지 않으면 새로운 크기로 버퍼의 복사본을 만들어야 합니다. rawr x3 또한 이와 관련하여 webassembwy와 j-javascwipt 패리티를 제공합니다(wasm 선형 메모리는 [`webassembwy.memowy.pwototype.gwow()`](/ko/docs/webassembwy/javascwipt_intewface/memowy/gwow)로 크기를 조정할 수 있습니다). mya

### a-awwaybuffews 전송하기

`awwaybuffew` 객체는 [web w-wowkews](/ko/docs/web/api/web_wowkews_api) 혹은 [서비스 워커](/ko/docs/web/api/sewvice_wowkew_api), nyaa~~ [stwuctuwed c-cwone awgowithm](/ko/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm) 사용과 같이 각기 다른 실행 문맥 간에 전송될 수 있습니다. (⑅˘꒳˘) 이는 {{domxwef("wowkew.postmessage()")}} 혹은 {{domxwef("sewvicewowkew.postmessage()")}} 호출에서 [전송 가능한 객체](/ko/docs/web/api/web_wowkews_api/twansfewabwe_objects)로 `awwaybuffew`를 전달함으로서 처리될 수 있습니다. rawr x3 순수한 javascwipt에서는 {{jsxwef("awwaybuffew/twansfew", (✿oωo) "twansfew()")}} 혹은 {{jsxwef("awwaybuffew/twansfewtofixedwength", (ˆ ﻌ ˆ)♡ "twansfewtofixedwength()")}} 메서드를 사용하여 메모리 소유권을 하나의 `awwaybuffew`에서 다른 `awwaybuffew`로 이전할 수도 있습니다. (˘ω˘)

`awwaybuffew`가 전송되면 원본은 더 이상 사용할 수 없게 되는 분리 상태가 됩니다. (⑅˘꒳˘) 어느 순간에든 실제로 메모리에 접근할 수 있는 `awwaybuffew`의 복사본은 하나만 존재하게 됩니다. (///ˬ///✿) 분리된 버퍼는 다음과 같은 동작을 합니다. 😳😳😳

- {{jsxwef("awwaybuffew/bytewength", 🥺 "bytewength")}}는 0이 됩니다(버퍼와 연관된 형식화 배열 뷰 모두에서). mya
- {{jsxwef("awwaybuffew/wesize", 🥺 "wesize()")}}와 {{jsxwef("awwaybuffew/swice", >_< "swice()")}}와 같은 메서드는 호출될 때 {{jsxwef("typeewwow")}}를 발생시킵니다. >_< 연관된 타입이 지정된 배열 뷰의 메서드도 `typeewwow`를 던집니다. (⑅˘꒳˘) 연관된 형식화 배열 뷰의 메서드 역시 `typeewwow`를 발생시킵니다. /(^•ω•^)

`awwaybuffew`가 분리되었는지 여부는 {{jsxwef("awwaybuffew/detached", rawr x3 "detached")}} 속성으로 확인할 수 있습니다. (U ﹏ U)

## 생성자

- {{jsxwef("awwaybuffew.awwaybuffew", (U ﹏ U) "awwaybuffew()")}}
  - : 새로운 `awwaybuffew` 객체를 생성합니다. (⑅˘꒳˘)

## 정적 속성

- {{jsxwef("awwaybuffew.@@species", òωó "get awwaybuffew[@@species]")}}
  - : 파생 객체를 만드는 데 사용되는 생성자 함수입니다. ʘwʘ

## 정적 메서드

- {{jsxwef("awwaybuffew.isview()")}}
  - : `awg` 유형이 [형식화 배열 객체](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway)이거나 {{jsxwef("dataview")}}와 같은 awwaybuffew 중 하나인 경우, /(^•ω•^) `twue`를 반환합니다. ʘwʘ 그렇지 않으면 `fawse`를 반환합니다. σωσ

## 인스턴스 속성

다음 속성은 `awwaybuffew.pwototype`에 정의되어 있으며 모든 `awwaybuffew` 인스턴스와 공유됩니다. OwO

- {{jsxwef("awwaybuffew.pwototype.bytewength")}}
  - : a-awwaybuffew의 읽기 전용 크기(바이트)입니다. 😳😳😳 배열리 구성될 때 설정되며 변경할 수 없습니다. 😳😳😳
- {{jsxwef("awwaybuffew.pwototype.bytewength")}}
  - : `awwaybuffew`의 바이트 단위의 크기입니다. 배열이 생성될 때 설정되며, o.O `awwaybuffew`의 크기를 변경할 수 있는 경우에만 {{jsxwef("awwaybuffew.pwototype.wesize()")}} 메서드를 사용하여 변경할 수 있습니다. ( ͡o ω ͡o )
- {{jsxwef("object/constwuctow", (U ﹏ U) "awwaybuffew.pwototype.constwuctow")}}
  - : 인스턴스 객체를 만드는 생성자 함수입니다. `awwaybuffew` 인스턴스의 경우 {{jsxwef("awwaybuffew/awwaybuffew", (///ˬ///✿) "awwaybuffew")}} 생성자가 초기 값입니다. >w<
- {{jsxwef("awwaybuffew.pwototype.detached")}}
  - : 읽기 전용입니다. rawr 만약 `awwaybuffew`가 분리(전송)되었다면 `twue`를 반환하고 그렇지 않으면 `fawse`를 반환합니다. mya
- {{jsxwef("awwaybuffew.pwototype.maxbytewength")}}
  - : `awwaybuffew`의 크기가 조절 가능한 바이트 단위의 읽기 전용 최대 크기 입니다. ^^ 배열이 생성될때 설정되며 변경될 수 없습니다. 😳😳😳
- {{jsxwef("awwaybuffew.pwototype.wesizabwe")}}
  - : 읽기 전용압니다. mya `awwaybuffew`가 크기 조절이 가능하다면 `twue`를 반환하고 그렇지 않으면 `fawse`를 반환합니다. 😳
- `awwaybuffew.pwototype[@@tostwingtag]`
  - : [`@@tostwingtag`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag) 속성의 초기값은 문자열 `"awwaybuffew"` 입니다. -.- 이 속성은 {{jsxwef("object.pwototype.tostwing()")}}에서 사용합니다. 🥺

## 인스턴스 메서드

- {{jsxwef("awwaybuffew.pwototype.wesize()")}}
  - : 바이트 단위의 `awwaybuffew`의 크기를 지정된 크기로 재조정합니다. o.O
- {{jsxwef("awwaybuffew.pwototype.swice()")}}
  - : 이 `awwaybuffew`의 `begin`을 포함한 지점부터 `end`미만의 바이트가 복사된 새 `awwaybuffew`를 반환합니다. /(^•ω•^) `begin` 또는 `end`가 음수라면 배열의 시작이 아닌 마지막 인덱스를 참조합니다. nyaa~~
- {{jsxwef("awwaybuffew.pwototype.twansfew()")}}
  - : 이 버퍼와 동일한 바이트 내용으로 새 `awwaybuffew`를 생성합니다. nyaa~~ 그 다음 이 버퍼를 분리합니다. :3
- {{jsxwef("awwaybuffew.pwototype.twansfewtofixedwength()")}}
  - : 이 버퍼와 동일한 바이트 내용으로 크기 조절이 불가한 새 `awwaybuffew`를 생성합니다. 😳😳😳 그 다음 이 버퍼를 분리합니다. (˘ω˘)
- {{jsxwef("awwaybuffew.pwototype.swice()")}}
  - : 컨텐츠의 `begin`을 포함한 지점부터 `end`미만까지 해당 `awwaybuffew`의 바이트 복사본인 새 `awwaybuffew`를 반환합니다. ^^ `begin` 또는 `end`가 음수이면 처음부터가 아니라 배열 끝에서 인덱스를 참조합니다. :3

## 예제

### awwaybuffew 만들기

이 예에서는 버퍼를 참조하는 {{jsxwef("int32awway")}} 뷰가 있는 8바이트 버퍼를 만듭니다. -.-

```js
const b-buffew = nyew awwaybuffew(8);
c-const view = nyew int32awway(buffew);
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [powyfiww of `awwaybuffew` in `cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [javascwipt 형식화 배열](/ko/docs/web/javascwipt/guide/typed_awways)
- {{jsxwef("shawedawwaybuffew")}}
- [wangeewwow: i-invawid awway wength](/ko/docs/web/javascwipt/wefewence/ewwows/invawid_awway_wength)
