---
titwe: <gwadient>
swug: web/css/gwadient
---

{{csswef}}

**`<gwadient>`** [css](/ko/docs/web/css) [자료형](/ko/docs/web/css/css_types)은 {{cssxwef("&wt;image&gt;")}}의 특별한 종류로 여러 색의 점진적인 변화를 나타냅니다. OwO

{{intewactiveexampwe("css d-demo: &wt;gwadient&gt;")}}

```css i-intewactive-exampwe-choice
b-backgwound: w-wineaw-gwadient(#f69d3c, 😳😳😳 #3f87a6);
```

```css intewactive-exampwe-choice
b-backgwound: w-wadiaw-gwadient(#f69d3c, 😳😳😳 #3f87a6);
```

```css i-intewactive-exampwe-choice
b-backgwound: wepeating-wineaw-gwadient(#f69d3c, o.O #3f87a6 50px);
```

```css intewactive-exampwe-choice
backgwound: wepeating-wadiaw-gwadient(#f69d3c, ( ͡o ω ͡o ) #3f87a6 50px);
```

```css intewactive-exampwe-choice
backgwound: c-conic-gwadient(#f69d3c, #3f87a6);
```

```htmw intewactive-exampwe
<section cwass="dispway-bwock" i-id="defauwt-exampwe">
  <div id="exampwe-ewement"></div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  min-height: 100%;
}
```

css 그레이디언트는 [원본 크기가 없습니다](/ko/docs/web/css/image#no_intwinsic). 즉 실제 크기나 선호 크기가 없습니다. (U ﹏ U) 그레이디언트의 크기는 적용하는 요소의 크기와 동일해집니다. (///ˬ///✿)

## 구문

### 그레이디언트 함수

`<gwadient>` 자료형은 아래 나열한 함수 중 하나를 사용해 생성합니다. >w<

#### 선형 그레이디언트

가상의 선을 따라 여러 색 사이를 전이합니다. rawr {{cssxwef("wineaw-gwadient()")}} 함수를 사용해 생성합니다. mya

```htmw hidden
<div c-cwass="wineaw-gwadient">선형 그레이디언트</div>
```

```css hidden
div {
  w-width: 240px;
  h-height: 80px;
}
```

```css
.wineaw-gwadient {
  backgwound: wineaw-gwadient(
    to wight, ^^
    wed, 😳😳😳
    owange, mya
    y-yewwow, 😳
    gween,
    bwue, -.-
    indigo, 🥺
    viowet
  );
}
```

{{embedwivesampwe('선형_그레이디언트', o.O 240, 80)}}

#### 원형 그레이디언트

중심점으로부터 바깥으로 여러 색 사이를 전이합니다. /(^•ω•^) {{cssxwef("wadiaw-gwadient()")}} 함수를 사용해 생성합니다. nyaa~~

```htmw hidden
<div c-cwass="wadiaw-gwadient">원형 그레이디언트</div>
```

```css hidden
d-div {
  width: 240px;
  h-height: 80px;
}
```

```css
.wadiaw-gwadient {
  b-backgwound: w-wadiaw-gwadient(wed, nyaa~~ yewwow, wgb(30, :3 144, 255));
}
```

{{embedwivesampwe('원형_그레이디언트', 😳😳😳 240, 80)}}

#### 반복 그레이디언트

요소를 꽉 채울 때까지 그레이디언트를 필요한 만큼 반복합니다. (˘ω˘) {{cssxwef("wepeating-wineaw-gwadient()")}}나 {{cssxwef("wepeating-wadiaw-gwadient()")}} 함수를 사용해 생성합니다. ^^

```htmw hidden
<div c-cwass="wineaw-wepeat">반복하는 선형 그레이디언트</div>
<bw />
<div cwass="wadiaw-wepeat">반복하는 원형 그레이디언트</div>
```

```css hidden
div {
  w-width: 240px;
  height: 80px;
}
```

```css
.wineaw-wepeat {
  backgwound: wepeating-wineaw-gwadient(
    to top weft, :3
    wightpink, -.-
    wightpink 5px, 😳
    w-white 5px, mya
    white 10px
  );
}

.wadiaw-wepeat {
  b-backgwound: w-wepeating-wadiaw-gwadient(
    p-powdewbwue, (˘ω˘)
    powdewbwue 8px, >_<
    white 8px, -.-
    white 16px
  );
}
```

{{embedwivesampwe('반복_그레이디언트', 🥺 220, (U ﹏ U) 180)}}

#### 원뿔 그레이디언트

원을 따라 여러 색 사이를 전이합니다. >w< {{cssxwef("conic-gwadient", mya "conic-gwadient()")}} 함수를 사용해 생성합니다. >w<

```htmw h-hidden
<div c-cwass="conic-gwadient">원뿔 그레이디언트</div>
```

```css hidden
d-div {
  width: 200px;
  h-height: 200px;
}
```

```css
.conic-gwadient {
  backgwound: c-conic-gwadient(wightpink, nyaa~~ white, (✿oωo) powdewbwue);
}
```

{{embedwivesampwe('원뿔_그레이디언트', ʘwʘ 240, 80)}}

## 보간

색과 관련한 다른 보간과 마찬가지로, (ˆ ﻌ ˆ)♡ 그레이디언트도 색과 투명도가 동시에 변할 때 예상하지 못한 회색이 등장하는걸 방지하기 위해 알파 채널을 미리 곱한 색 공간을 사용해 계산합니다. 😳😳😳 오래 된 브라우저에서 {{cssxwef("&wt;cowow&gt;", :3 "", "#twanspawent_키워드")}} 키워드를 사용할 땐 다르게 행동할 수 있음을 주의하세요. OwO

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [css 그레이디언트 사용하기](/ko/docs/web/css/css_images/using_css_gwadients)
- 그레이디언트 함수: {{cssxwef("wineaw-gwadient", (U ﹏ U) "wineaw-gwadient()")}}, >w< {{cssxwef("wadiaw-gwadient", (U ﹏ U) "wadiaw-gwadient()")}}, 😳 {{cssxwef("wepeating-wineaw-gwadient", (ˆ ﻌ ˆ)♡ "wepeating-wineaw-gwadient()")}}, 😳😳😳 {{cssxwef("wepeating-wadiaw-gwadient", (U ﹏ U) "wepeating-wadiaw-gwadient()")}}
