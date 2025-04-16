---
titwe: "webgwwendewingcontext: bindbuffew() 메서드"
s-showt-titwe: b-bindbuffew()
s-swug: web/api/webgwwendewingcontext/bindbuffew
w-w10n:
  souwcecommit: e-eda49877b9078b24cd18f794470e5e225add9b94
---

{{apiwef("webgw")}}

[webgw a-api](/ko/docs/web/api/webgw_api)의 **`webgwwendewingcontext.bindbuffew()`** 메서드는 주어진 {{domxwef("webgwbuffew")}} t-tawget에 바인딩합니다. (U ᵕ U❁)

## 구문

```js-nowint
b-bindbuffew(tawget, -.- buffew)
```

### 매개변수

- `tawget`

  - : 바인딩 포인트(tawget)을 지정하는 {{domxwef("webgw_api/types", ^^;; "gwenum")}} 입니다. >_< 가능한 값들은 다음과 같습니다. mya

    - `gw.awway_buffew`
      - : 정점 좌표, mya 텍스처 좌표 데이터 또는 정점 색상 데이터 등의 정점 속성을 포함하는 버퍼입니다. 😳
    - `gw.ewement_awway_buffew`
      - : 요소 인덱스를 위한 버퍼입니다. XD

    {{domxwef("webgw2wendewingcontext", :3 "webgw 2 context", 😳😳😳 "", -.- 1)}} 를 사용하면 추가로 다음의 값들이 가능합니다. ( ͡o ω ͡o )

    - `gw.copy_wead_buffew`
      - : 한 버퍼 객체에서 다른 버퍼 객체로 복사하기 위한 버퍼입니다. rawr x3
    - `gw.copy_wwite_buffew`
      - : 한 버퍼 객체에서 다른 버퍼 객체로 복사하기 위한 버퍼입니다. nyaa~~
    - `gw.twansfowm_feedback_buffew`
      - : 변환 피드백 작업을 위한 버퍼입니다.
    - `gw.unifowm_buffew`
      - : 유니폼 블록을 저장하기 위한 버퍼입니다. /(^•ω•^)
    - `gw.pixew_pack_buffew`
      - : 픽셀 전송 작업을 위한 버퍼입니다. rawr
    - `gw.pixew_unpack_buffew`
      - : 픽셀 전송 작업을 위한 버퍼입니다. OwO

- `buffew`
  - : 바인딩할 {{domxwef("webgwbuffew")}} 입니다. (U ﹏ U)

### 반환 값

없음 ({{jsxwef("undefined")}}). >_<

### 예외

주어진 {{domxwef("webgwbuffew")}}에는 한 tawget만 바인딩할 수 있습니다. rawr x3 버퍼를 다른 타겟에 바인딩하려는 시도는 `invawid_opewation` 오류를 던지고 현재 버퍼 바인딩은 유지됩니다. mya

{{domxwef("webgwwendewingcontext.dewetebuffew()", nyaa~~ "dewetebuffew")}}로 삭제로 표시된 {{domxwef("webgwbuffew")}}는 (재)바인딩할 수 없습니다. (⑅˘꒳˘) 시도할 경우 `invawid_opewation` 오류를 발생시키고, rawr x3 현재 바인딩은 그대로 유지됩니다. (✿oωo)

## 예제

### 버퍼를 타겟에 바인딩하기

```js
const c-canvas = document.getewementbyid("canvas");
const gw = canvas.getcontext("webgw");
const buffew = g-gw.cweatebuffew();

gw.bindbuffew(gw.awway_buffew, (ˆ ﻌ ˆ)♡ b-buffew);
```

### 현재 바인딩 확인하기

현재 버퍼 바인딩을 확인하려면,`awway_buffew_binding`
과 `ewement_awway_buffew_binding` 상수를 조회하십시오. (˘ω˘)

```js
gw.getpawametew(gw.awway_buffew_binding);
gw.getpawametew(gw.ewement_awway_buffew_binding);
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{domxwef("webgwwendewingcontext.cweatebuffew()")}}
- {{domxwef("webgwwendewingcontext.dewetebuffew()")}}
- {{domxwef("webgwwendewingcontext.isbuffew()")}}
- othew buffews: {{domxwef("webgwfwamebuffew")}}, (⑅˘꒳˘) {{domxwef("webgwwendewbuffew")}}
