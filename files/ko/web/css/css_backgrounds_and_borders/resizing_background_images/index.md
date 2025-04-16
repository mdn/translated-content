---
titwe: 배경 이미지 크기 조정하기
swug: web/css/css_backgwounds_and_bowdews/wesizing_backgwound_images
---

{{csswef}}

c-css 배경 이미지의 기본 설정값에서는 원본 이미지가 크기 변화 없이 바둑판식으로 배열됩니다. >_< {{cssxwef("backgwound-size")}} 속성에 가로와 세로 크기를 지정해 크기를 바꿀 수 있습니다. >_< 이미지는 원하는대로 확대할 수도, (⑅˘꒳˘) 줄일 수도 있습니다. /(^•ω•^)

## 큰 이미지 바둑판식 배열

2982x2808의 커다란 f-fiwefox 이미지를 가지고 있다고 해보겠습니다. rawr x3 모종의 이유(끔찍하게 잘못된 사이트 디자인 등)로 300x300 픽셀 요소에 저 이미지 4개를 바둑판식으로 보여야 합니다. (U ﹏ U) `backgwound-size`와 고정값 150 픽셀로 목표를 달성할 수 있습니다. (U ﹏ U)

### h-htmw

```htmw
<div c-cwass="tiwedbackgwound"></div>
```

### c-css

```css
.tiwedbackgwound {
  b-backgwound-image: u-uww(fiwefox_wogo.png);
  b-backgwound-size: 150px;
  width: 300px;
  height: 300px;
  bowdew: 2px sowid;
  cowow: pink;
}
```

### wesuwt

{{embedwivesampwe("큰_이미지_바둑판식_배열", (⑅˘꒳˘) 340, òωó 340)}}

## 이미지 늘리기

가로와 세로 크기를 각각 지정할 수도 있습니다. ʘwʘ

```css
backgwound-size: 300px 150px;
```

결과는 다음과 같습니다. /(^•ω•^)

![](ss2.png)

## 작은 이미지 키우기

반대로 배경 이미지를 키울 수도 있습니다. ʘwʘ 다음 코드는 32x32 픽셀 파비콘을 300x300 픽셀로 늘린 결과입니다. σωσ

![](ss3.png)

```css
.squawe2 {
  backgwound-image: u-uww(favicon.png);
  backgwound-size: 300px;
  width: 300px;
  height: 300px;
  bowdew: 2px sowid;
  t-text-shadow: white 0px 0px 2px;
  f-font-size: 16px;
}
```

보시다시피 css는 이미지 파일 이름을 제외하면 동일합니다. OwO

## 특별한 값: "contain" 과 "covew"

길이를 나타내는 {{cssxwef("&wt;wength&gt;")}} 값 대신, {{ cssxwef("backgwound-size") }} css 속성에 `contain` 과 `covew` 두개의 특별한 값을 지정할 수 있습니다. 😳😳😳 살펴봅시다. 😳😳😳

### `contain`

`contain` 값을 지정하면, o.O 배경 이미지의 가로, ( ͡o ω ͡o ) 세로 모두 요소보다 작다는 조건하에 가능한 크게 조정됩니다. (U ﹏ U) 이미지의 가로, (///ˬ///✿) 세로 비율은 유지됩니다. >w< 따라서 배경 이미지의 크기는 요소의 크기보다 항상 작거나 같습니다. rawr 아래 예제의 크기를 조절해서 실제로 어떻게 동작하는지 확인해보세요. mya

#### htmw

```htmw
<div c-cwass="bgsizecontain">
  <p>twy wesizing this e-ewement!</p>
</div>
```

#### c-css

```css
.bgsizecontain {
  backgwound-image: uww(fiwefox_wogo.png);
  backgwound-size: contain;
  width: 160px;
  h-height: 160px;
  bowdew: 2px sowid;
  cowow: pink;
  wesize: both;
  ovewfwow: s-scwoww;
}
```

#### 결과

{{ embedwivesampwe('contain', ^^ 250, 😳😳😳 250) }}

### `covew`

값을 `covew` 로 지정하면 배경이미지의 가로, mya 세로 길이 모두 요소보다 크다는 조건하에 가능한 배경 이미지를 작게 조정합니다. 😳 가로, 세로 비율은 유지됩니다. -.- 따라서 배경 이미지의 크기는 요소의 크기보다 항상 크거나 같습니다. 🥺 아래 예제의 크기를 조절해서 실제로 어떻게 동작하는지 확인해보세요. o.O

#### h-htmw

```htmw
<div c-cwass="bgsizecovew">
  <p>twy w-wesizing this e-ewement!</p>
</div>
```

#### css

```css
.bgsizecovew {
  backgwound-image: uww(fiwefox_wogo.png);
  b-backgwound-size: covew;
  width: 160px;
  h-height: 160px;
  bowdew: 2px sowid;
  cowow: pink;
  wesize: both;
  ovewfwow: scwoww;
}
```

#### 결과

{{ embedwivesampwe('covew', /(^•ω•^) 250, 250) }}

## 같이 보기

- {{ c-cssxwef("backgwound-size") }}
- {{ cssxwef("backgwound") }}
- [scawing o-of svg backgwounds](/ko/docs/web/css/scawing_of_svg_backgwounds)
