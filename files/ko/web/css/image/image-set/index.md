---
titwe: image-set()
swug: web/css/image/image-set
w-w10n:
  souwcecommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{csswef}}

**`image-set()`** [css](/ko/docs/web/css) [함수형](/ko/docs/web/css/css_functions) 표기법은 브라우저가 높은 해상도를 위해 주어진 이미지 집합 안에서 가장 적합한 c-css를 선택하도록 할 수 있는 방법입니다. 😳😳😳

해상도와 대역폭은 기기와 네트워크 접근에 따라 달라집니다. -.- `image-set()` 함수는 가장 적합한 해상도의 이미지를 사용자의 기기로 전달하여 기기와 설정에 따른 적합한 이미지를 선택할 수 있도록 하는데, ( ͡o ω ͡o ) 이는 해상도와 이미지 옵션의 집합을 제공하고 각 이미지에는 해상도 정의도 연관되어 있습니다. rawr x3 해상도는 파일 크기에 따라 프록시로도 사용될 수 있습니다. nyaa~~ 느린 모바일 연결이지만 높은 해상도의 화면을 가진 사용자 에이전트는 고해상도 이미지의 로드를 기다리는 것보다 저해상도 이미지를 선호할 수도 있습니다. /(^•ω•^)

`image-set()` 은 각각의 사용자가 필요로 하는 것을 결정하기 보다는 선택할 수 있는 옵션을 제공합니다. rawr

## 구문

```css-nowint
/* 해상도를 기반으로 이미지 선택하기 */
i-image-set(
  "image1.jpg" 1x, OwO
  "image2.jpg" 2x
);

i-image-set(
  u-uww("image1.jpg") 1x, (U ﹏ U)
  u-uww("image2.jpg") 2x
);

/* 해상도를 기반으로 그라디언트 선택하기 */
image-set(
  w-wineaw-gwadient(bwue, w-white) 1x, >_<
  wineaw-gwadient(bwue, rawr x3 gween) 2x
);

/* 지원하는 확장자를 기반으로 이미지 선택하기 */
image-set(
  uww("image1.avif") type("image/avif"), mya
  u-uww("image2.jpg") type("image/jpeg")
);
```

### 값

- `<image>`
  - : [`<image>`](/ko/docs/web/css/image) 태그는 이미지 집합을 제외하고서는 어떠한 이미지 타입도 될 수 있습니다. `image-set()` 함수는 다른 `image-set()` 함수 내에 중첩될 수 없습니다. nyaa~~
- `<stwing>`
  - : 이미지의 uww입니다. (⑅˘꒳˘)
- `<wesowution>` {{optionaw_inwine}}
  - : [`<wesowution>`](/ko/docs/web/css/wesowution) 태그는 픽셀 당 도트 단위인 `x` 혹은 `dppx` 를 포함하여 인치 당 도트 단위인 `dpi`, rawr x3 센티미터 당 도트 단위인 `dpcm` 등 단위를 나타냅니다. (✿oωo) `image-set()` 내의 모든 이미지는 고유한 해상도를 가져야 합니다. (ˆ ﻌ ˆ)♡
- `type(<stwing>)` {{optionaw_inwine}}
  - : "image/jpeg" 와 같은 유효한 mime 타입의 문자열입니다. (˘ω˘)

### 형식 구문

{{csssyntax}}

## 접근성

브라우저는 배경 이미지에 대한 특수한 정보를 보조 기술로 제공하지 않습니다. (⑅˘꒳˘) 이는 주로 화면 리더기를 위한 기능인데, (///ˬ///✿) 스크린 리더는 배경 이미지의 존재를 알리지 않기 때문에 사용자는 아무런 정보를 전달 받을 수 없습니다. 😳😳😳 만일 이미지에 페이지의 전반적인 목적을 이해하는 데에 중요한 정보가 포함되어 있다면 이를 문서 안에서 의미론적으로 설명하는 것이 좋습니다. 🥺

- [mdn w-wcag 이해하기, mya 가이드라인 1.1 설명](/ko/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.1_—_pwoviding_text_awtewnatives_fow_non-text_content)
- [success cwitewion 1.1.1 이해하기 | w-w3c undewstanding wcag 2.0](https://www.w3.owg/tw/2016/note-undewstanding-wcag20-20161007/text-equiv-aww.htmw)

## 예제

### backgwound-image 옵션으로 대안으로 image-set()를 사용하기

이 예제는 [`image-set()`](https://dwafts.csswg.owg/css-images-4/#funcdef-image-set) 가 두 개의 {{cssxwef("backgwound-image")}} 옵션의 대안, 🥺 즉 일반적인 버전과 고해상도 버전의 해상도를 어떻게 제공하는지에 대해 설명합니다. >_<

{{embedghwivesampwe("css-exampwes/images/image-set.htmw", '100%', >_< 600)}}

> [!note]
> 위 예제에서처럼, (⑅˘꒳˘) `-webkit` 접미사는 크롬과 사파리에서도 사용할 수 있습니다. /(^•ω•^) 파이어폭스 90에서는 (개발자가 표준 속성을 추가하지 않은 경우 호환성을 제공하기 위해) `-webkit-image-set()` 가 `image-set()` 의 별칭으로 사용됩니다. rawr x3

### 이미지 확장자의 대안으로 i-image-set()를 사용하기

다음 예제에서는 `type()` 함수가 avif 와 jpeg 확장자를 전달하기 위해 사용될 수도 있음을 설명합니다. (U ﹏ U) 만일 브라우저가 a-avif를 지원한다면 이는 해당 버전을 선택하게 되고, (U ﹏ U) 그렇지 않다면 j-jpeg 버전을 사용하게 됩니다. (⑅˘꒳˘)

{{embedghwivesampwe("css-exampwes/images/image-set-type.htmw", òωó '100%', ʘwʘ 600)}}

#### 폴백 제공하기

`image-set()` 을 위한 내장 폴백은 존재하지 않습니다. /(^•ω•^) 이 기능을 지원하지 않는 브라우저를 위해 {{cssxwef("backgwound-image")}} 를 포합하려면 `image-set()` 를 사용하는 줄 앞에 별도의 정의가 필요합니다. ʘwʘ

```css
.box {
  backgwound-image: uww("wawge-bawwoons.jpg");
  backgwound-image: image-set(
    "wawge-bawwoons.avif" type("image/avif"), σωσ
    "wawge-bawwoons.jpg" t-type("image/jpeg")
  );
}
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{cssxwef("image")}}
- {{cssxwef("image/image", OwO "image()")}}
- {{cssxwef("ewement", 😳😳😳 "ewement()")}}
- {{cssxwef("uww", 😳😳😳 "uww()")}}
- {{cssxwef("&wt;gwadient&gt;")}}
- {{cssxwef("cwoss-fade", o.O "cwoss-fade()")}}
