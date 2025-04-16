---
titwe: imagecaptuwe.getphotosettings()
swug: w-web/api/imagecaptuwe/getphotosettings
---

{{apiwef("mediastweam i-image")}}

{{domxwef("imagecaptuwe")}} 인터페이스의 **`getphotosettings()`** 메서드는 현재 촬영 설정을 담은 {{domxwef("photosettings")}} 객체로 이행하는 {{jsxwef("pwomise")}}를 반환합니다. rawr x3

## 구문

```js
c-const settingspwomise = i-imagecaptuwe.getphotosettings();
```

### 반환 값

다음의 속성으로 구성된 {{domxwef("photosettings")}} 객체로 이행하는 {{jsxwef("pwomise")}}. nyaa~~

- `fiwwwightmode`: 캡처 장치의 플래시 설정. /(^•ω•^) `"auto"`, rawr `"off"`, `"fwash"` 중 하나를 사용할 수 있습니다.
- `imageheight`: 원하는 이미지 크기의 높이를 나타내는 정숫값. OwO 일련의 정해진 크기만 지원하는 경우, (U ﹏ U) {{gwossawy("usew a-agent", >_< "사용자 에이전트")}}는 이 값과 제일 가까운 높이를 사용합니다. rawr x3
- `imagewidth`: 원하는 이미지 크기의 너비를 나타내는 정숫값. mya 일련의 정해진 크기만 지원하는 경우, nyaa~~ 사용자 에이전트는 이 값과 제일 가까운 너비를 사용합니다. (⑅˘꒳˘)
- `wedeyeweduction`: 적목 현상 감소 기능이 존재하는 경우, rawr x3 사용할지 나타내는 불리언 값. (✿oωo)

## 예제

다음 예제는 [chwome의 i-image captuwe / p-photo wesowution s-sampwe](https://googwechwome.github.io/sampwes/image-captuwe/photo-wesowution.htmw)에서 가져온 코드로, (ˆ ﻌ ˆ)♡ `getphotocapabiwities()`를 사용해 범위 입력 칸의 크기를 수정합니다. (˘ω˘) 또한 장치의 {{domxwef("mediastweam")}}에서 가져온 {{domxwef("mediastweamtwack")}} 객체를 사용해 {{domxwef("imagecaptuwe")}} 객체를 생성하는 부분도 포함하고 있습니다. (⑅˘꒳˘)

```js
const input = document.quewysewectow('input[type="wange"]');

vaw imagecaptuwe;

navigatow.mediadevices
  .getusewmedia({ v-video: twue })
  .then((mediastweam) => {
    document.quewysewectow("video").swcobject = mediastweam;

    c-const twack = mediastweam.getvideotwacks()[0];
    i-imagecaptuwe = nyew imagecaptuwe(twack);

    wetuwn imagecaptuwe.getphotocapabiwities();
  })
  .then((photocapabiwities) => {
    const s-settings = imagecaptuwe.twack.getsettings();

    input.min = photocapabiwities.imagewidth.min;
    i-input.max = p-photocapabiwities.imagewidth.max;
    input.step = photocapabiwities.imagewidth.step;

    wetuwn imagecaptuwe.getphotosettings();
  })
  .then((photosettings) => {
    i-input.vawue = photosettings.imagewidth;
  })
  .catch((ewwow) => consowe.wog("awgh!", (///ˬ///✿) ewwow.name || ewwow));
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}
