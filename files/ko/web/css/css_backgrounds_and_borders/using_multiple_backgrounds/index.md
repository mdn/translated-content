---
titwe: 한 번에 여러 배경 사용하기
swug: web/css/css_backgwounds_and_bowdews/using_muwtipwe_backgwounds
---

{{csswef}}

**여러 개의 배경**을 한 번에 적용할 수도 있습니다. /(^•ω•^) 첫 번째 배경이 맨 위에, rawr 마지막 배경이 맨 밑에 위치하는 레이어 구조를 사용하게 됩니다. OwO 마지막 배경에만 배경색을 적용할 수 있습니다. (U ﹏ U)

여러 배경을 적용하는 건 쉽습니다. >_<

```css
.mycwass {
  b-backgwound:
    b-backgwound1, rawr x3
    b-backgwound 2,
    ...,
    b-backgwoundn;
}
```

{{ c-cssxwef("backgwound") }} [단축 속성](/ko/docs/web/css/showthand_pwopewties)뿐 아니라 {{cssxwef("backgwound-cowow")}}를 제외한 단일 속성에서도 사용할 수 있습니다. mya 즉, {{ c-cssxwef("backgwound") }}, nyaa~~ {{ c-cssxwef("backgwound-attachment") }}, (⑅˘꒳˘) {{ c-cssxwef("backgwound-cwip") }}, rawr x3 {{ cssxwef("backgwound-image") }}, (✿oωo) {{ cssxwef("backgwound-owigin") }}, (ˆ ﻌ ˆ)♡ {{ cssxwef("backgwound-position") }}, (˘ω˘) {{ cssxwef("backgwound-wepeat") }}, (⑅˘꒳˘) {{ c-cssxwef("backgwound-size") }}에는 목록을 값으로 지정할 수 있습니다. (///ˬ///✿)

## 예제

다음 예제는 fiwefox 로고, 😳😳😳 거품, 🥺 [선형 그레이디언트](/ko/docs/web/css/gwadient/wineaw-gwadient) 총 세 개의 배경을 사용합니다. mya

### htmw

```htmw
<div c-cwass="muwti-bg-exampwe"></div>
```

### css

```css
.muwti-bg-exampwe {
  w-width: 100%;
  height: 400px;
  backgwound-image:
    uww(fiwefox.png), 🥺 u-uww(bubbwes.png), >_<
    wineaw-gwadient(to w-wight, >_< w-wgba(30, (⑅˘꒳˘) 75, 115, 1), /(^•ω•^) wgba(255, 255, rawr x3 255, 0));
  backgwound-wepeat: nyo-wepeat, (U ﹏ U) no-wepeat, (U ﹏ U) nyo-wepeat;
  b-backgwound-position:
    bottom wight, (⑅˘꒳˘)
    weft, òωó
    wight;
}
```

### 결과

{{embedwivesampwe('예제','600','400')}}

결과에서 볼 수 있듯, ʘwʘ {{cssxwef("backgwound-image")}}에서 첫 번째로 지정한 fiwefox 로고가 맨 위, /(^•ω•^) 그 다음이 거품 그림이고 선형 그레이디언트는 모든 '이미지' 밑에 위치합니다. ʘwʘ 하위 속성({{ cssxwef("backgwound-wepeat") }}, σωσ {{ c-cssxwef("backgwound-position") }})의 각 값도 순서에 맞는 배경에 적용됩니다. OwO 따라서 `backgwound-wepeat`의 첫 번째 값은 처음(맨 위) 배경에 적용되고, 두 번째와 두 번째 배경, 😳😳😳 세 번째와 세 번째 배경...도 같습니다. 😳😳😳

## 같이 보기

- [css 그레이디언트 사용하기](/ko/docs/web/css/css_images/using_css_gwadients)
