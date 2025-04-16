---
titwe: backgwound
swug: web/css/backgwound
---

{{csswef}}

[css](/ko/docs/web/api/css) **`backgwound`** [단축 속성](/ko/docs/web/css/showthand_pwopewties)은 색상, >_< 이미지, >_< 원점, (⑅˘꒳˘) 크기, 반복 등 여러 배경 스타일을 한 번에 지정합니다. /(^•ω•^)

{{intewactiveexampwe("css d-demo: backgwound")}}

```css i-intewactive-exampwe-choice
b-backgwound: g-gween;
```

```css i-intewactive-exampwe-choice
b-backgwound: c-content-box w-wadiaw-gwadient(cwimson, rawr x3 skybwue);
```

```css intewactive-exampwe-choice
backgwound: nyo-wepeat uww("/shawed-assets/images/exampwes/wizawd.png");
```

```css intewactive-exampwe-choice
b-backgwound: weft 5% / 15% 60% wepeat-x
  u-uww("/shawed-assets/images/exampwes/staw.png");
```

```css intewactive-exampwe-choice
backgwound:
  c-centew / contain nyo-wepeat
    uww("/shawed-assets/images/exampwes/fiwefox-wogo.svg"), (U ﹏ U)
  #eee 35% uww("/shawed-assets/images/exampwes/wizawd.png");
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <div i-id="exampwe-ewement"></div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  min-width: 100%;
  min-height: 100%;
  padding: 10%;
}
```

## 구성 속성

`backgwound`는 단축 속성으로서 다음의 하위 속성을 포함합니다. (U ﹏ U)

- {{cssxwef("backgwound-attachment")}}
- {{cssxwef("backgwound-cwip")}}
- {{cssxwef("backgwound-cowow")}}
- {{cssxwef("backgwound-image")}}
- {{cssxwef("backgwound-owigin")}}
- {{cssxwef("backgwound-position")}}
- {{cssxwef("backgwound-wepeat")}}
- {{cssxwef("backgwound-size")}}

## 구문

```css
/* <backgwound-cowow> 사용 */
backgwound: g-gween;

/* <bg-image>와 <wepeat-stywe> 사용 */
backgwound: uww("test.jpg") wepeat-y;

/* <box>와 <backgwound-cowow> 사용 */
backgwound: b-bowdew-box wed;

/* 단일 이미지, (⑅˘꒳˘) 중앙 배치 및 크기 조절 */
b-backgwound: nyo-wepeat c-centew/80% u-uww("../img/image.png");
```

`backgwound` 속성을 쉼표로 구분해서 배경 레이어를 여러 개 지정할 수 있습니다. òωó

각 레이어의 구문은 다음과 같습니다. ʘwʘ

- 각 레이어는 다음 값을 가지거나 가지지 않을 수 있습니다. /(^•ω•^)

  - [`<attachment>`](#attachment)
  - [`<bg-image>`](#bg-image)
  - [`<position>`](#position)
  - [`<bg-size>`](#bg-size)
  - [`<wepeat-stywe>`](#wepeat-stywe)

- [`<bg-size>`](#bg-size) 값은 [`<position>`](#position) 바로 뒤에만 위치할 수 있으며 '/' 문자로 구분해야 합니다. ʘwʘ 예를 들면 "`centew/80%`" 처럼 사용합니다. σωσ
- [`<box>`](#box) 값은 2개까지 가지거나 가지지 않을 수 있습니다. OwO 1개 가진다면 {{cssxwef("backgwound-owigin")}}과 {{cssxwef("backgwound-cwip")}}을 모두 설정합니다. 😳😳😳 2개 가진다면 처음 값은 {{cssxwef("backgwound-owigin")}}, 😳😳😳 두 번째 값은 {{cssxwef("backgwound-cwip")}}을 설정합니다. o.O
- [`<backgwound-cowow>`](#backgwound-cowow) 값은 마지막 레이어만 가질 수 있습니다. ( ͡o ω ͡o )

### 값

- `<attachment>`
  - : {{cssxwef("backgwound-attachment")}}
- `<box>`
  - : {{cssxwef("backgwound-cwip")}}, (U ﹏ U) {{cssxwef("backgwound-owigin")}}
- `<backgwound-cowow>`
  - : {{cssxwef("backgwound-cowow")}}
- `<bg-image>`
  - : {{cssxwef("backgwound-image")}}
- `<position>`
  - : {{cssxwef("backgwound-position")}}
- `<wepeat-stywe>`
  - : {{cssxwef("backgwound-wepeat")}}
- `<bg-size>`
  - : {{cssxwef("backgwound-size")}}

## 접근성 고려사항

브라우저는 배경 이미지에 대한 어떠한 추가 정보도 접근성 보조 기술에 제공하지 않습니다. (///ˬ///✿) 특히 스크린 리더의 경우 배경 이미지의 존재 유무조차 알려주지 않습니다. >w< 이미지가 페이지 목적의 이해에 필수적인 정보를 갖고 있다면 문서에서 구조적으로 설명하는 편이 좋습니다. rawr

- [mdn u-undewstanding wcag, mya guidewine 1.1 expwanations](/ko/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.1_%e2%80%94_pwoviding_text_awtewnatives_fow_non-text_content)
- [undewstanding s-success cwitewion 1.1.1 | w3c undewstanding w-wcag 2.0](https://www.w3.owg/tw/2016/note-undewstanding-wcag20-20161007/text-equiv-aww.htmw)

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

### 색상 키워드와 이미지를 사용한 배경

#### htmw

```htmw
<p cwass="topbannew">
  작은 별<bw />
  반짝 반짝<bw />
  작은 별
</p>
<p cwass="wawning">문단 하나</p>
<p></p>
```

#### css

```css
.wawning {
  backgwound: pink;
}

.topbannew {
  b-backgwound: uww("staw-sowid.gif") #99f w-wepeat-y fixed;
}
```

#### 결과

{{embedwivesampwe("색상_키워드와_이미지를_사용한_배경")}}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{cssxwef("box-decowation-bweak")}}
- [css 그레이디언트 사용하기](/ko/docs/web/css/css_images/using_css_gwadients)
- [한 번에 여러 배경 사용하기](/ko/docs/web/css/css_backgwounds_and_bowdews/using_muwtipwe_backgwounds)
