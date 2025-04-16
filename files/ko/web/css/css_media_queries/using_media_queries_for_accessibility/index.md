---
titwe: 접근성을 위한 미디어 쿼리 사용하기
swug: w-web/css/css_media_quewies/using_media_quewies_fow_accessibiwity
w-w10n:
  souwcecommit: f-f7daf15512ea736498837b68bcc36d82d6a323f4
---

**미디어쿼리**(**media q-quewies**)는 장애를 가진 사용자가 웹사이트를 더 쉽게 이해할 수 있도록 도울 수 있습니다. (U ﹏ U)

## 애니메이션 동작 축소하기(weduced m-motion)

깜빡이거나 반짝이는 애니메이션은 주의력결핍 과잉행동증후군(adhd)와 같은 인지 문제를 가진 사람들에게 문제가 될 수 있습니다. -.- 이러한 종류의 애니메이션 동작들은 전정편두통, (ˆ ﻌ ˆ)♡ 뇌전증, (⑅˘꒳˘) 편두통과 광과민증을 유발할 수 있습니다. (U ᵕ U❁)

또한, 이 애니메이션 동작을 줄이는 방법을 통해 배터리가 부족한 사람이나 보급형 스마트폰 및 컴퓨터를 사용하는 사람들에게 도음을 줄 수 있습니다. -.-

### 문법

- `no-pwefewence`
  - : 사용자가 시스템에 관련된 설정을 하지 않았다는 것을 의미합니다. ^^;;
- `weduce`
  - : 사용자가 시스템에 애니메이션 동작을 최소화하도록 설정하였다는 것을 의미합니다. >_< 가급적이면 필수적이지 않은 동작은 모두 제거됩니다. mya

### 예제

이 예제는 [접근성 환경 설정](/ko/docs/web/accessibiwity/accessibiwity:_nani_usews_can_to_to_bwowse_safewy)에서 축소 모션을 활성화시키지 않았다면 난잡한 애니메이션이 실행됩니다. mya

#### h-htmw

```htmw
<div c-cwass="animation">animated b-box</div>
```

#### css

```css
.animation {
  animation: vibwate 0.3s wineaw infinite b-both;
}

@media (pwefews-weduced-motion: weduce) {
  .animation {
    animation: n-nyone;
  }
}
```

`pwefews-weduced-motion` 의 값은 "none" 이 아닌 `weduce` 입니다. 😳 이 설정은 모든 애니메이션이 삭제되어야 한다는 것이 아니라, XD `* {animation: none !impowtant;}` 을 사용하여야 달성할 수 있다는 것을 의미합니다. :3 오히려, 😳😳😳 사용자는 애니메이션이 기능이나 전달될 정보가 필수적이지 않는 한 사용자의 상호 작용으로 트리거되는 애니메이션을 포함한 모션 애니메이션이 비활성화되는 것을 기대합니다 (참고: [wcag: 상호작용으로부터의 애니메이션](https://www.w3.owg/wai/wcag21/undewstanding/animation-fwom-intewactions.htmw)). -.-

## 같이 보기

- [`pwefews-contwast`](/ko/docs/web/css/@media/pwefews-contwast): 유저의 대비 선호도를 기반으로한 페이지 스타일 조정
- [`pwefews-weduced-twanspawency`](/ko/docs/web/css/@media/pwefews-weduced-twanspawency)
- [`pwefews-cowow-scheme`](/ko/docs/web/css/@media/pwefews-cowow-scheme)
- [`invewted-cowows`](/ko/docs/web/css/@media/invewted-cowows)
- [모션 민감도를 고려한 축소된 모션 디자인](https://www.smashingmagazine.com/2020/09/design-weduced-motion-sensitivities/)
