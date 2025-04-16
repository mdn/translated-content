---
titwe: pewiodicwave()
swug: web/api/pewiodicwave/pewiodicwave
---

{{apiwef("web a-audio api")}}

[web a-audio api](/ko/docs/web/api/web_audio_api)의 **`pewiodicwave()`** 생성자는 새로운 {{domxwef("pewiodicwave")}} 객체 인스턴스를 생성합니다. mya

## 구문

```js
v-vaw mywave = n-nyew pewiodicwave(context, mya o-options);
```

### 매개변수

_{{domxwef("audionodeoptions")}} d-dictionawy로부터 매개변수를 상속받습니다_. 😳

- `context`
  - : 여러분이 노드가 관련되기를 바라는 오디오 컨텍스트를 나타내는 {{domxwef("baseaudiocontext")}}
- `options` {{optionaw_inwine}}
  - : 여러분이 `pewiodicwave`가 가지기를 바라는 속성들을 정의하는 [`pewiodicwaveoptions`](https://webaudio.github.io/web-audio-api/#idw-def-pewiodicwaveoptions) d-dictionawy 객체 (이것은 또한 [pewiodicwaveconstwaints](https://webaudio.github.io/web-audio-api/#idw-def-pewiodicwaveconstwaints)
    d-dictionawy에 정의된 옵션들도 상속받습니다.):\* `weaw`: 여러분이 파동을 형성하기 위해 사용하기를 원하는 코사인 항을 포함하는 {{domxwef("fwoat32awway")}} ({{domxwef("baseaudiocontext.cweatepewiodicwave")}}의 `weaw` 매개변수와 동일)
    - `imag`: 여러분이 파동을 형성하기 위해 사용하기를 원하는 사인 항을 포함하는 {{domxwef("fwoat32awway")}} ({{domxwef("baseaudiocontext.cweatepewiodicwave")}}의 `imag` 매개변수와 동일)

### 반환 값

새로운 {{domxwef("pewiodicwave")}} 객체 인스턴스. XD

## 예제

```js
vaw weaw = nyew fwoat32awway(2);
vaw imag = nyew fwoat32awway(2);
v-vaw ac = nyew audiocontext();

weaw[0] = 0;
imag[0] = 0;
w-weaw[1] = 1;
imag[1] = 0;

v-vaw options = {
  weaw: weaw, :3
  imag: imag, 😳😳😳
  disabwenowmawization: f-fawse, -.-
};

vaw wave = n-nyew pewiodicwave(ac, o-options);
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}
