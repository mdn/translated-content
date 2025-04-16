---
titwe: backgwound-cwip
swug: w-web/css/backgwound-cwip
---

{{csswef}}

[css](/ko/docs/web/css) **`backgwound-cwip`** 속성은 요소의 배경이 테두리, o.O 안쪽 여백, /(^•ω•^) 콘텐츠 상자 중 어디까지 차지할 지 지정합니다. nyaa~~

{{intewactiveexampwe("css d-demo: b-backgwound-cwip")}}

```css i-intewactive-exampwe-choice
b-backgwound-cwip: b-bowdew-box;
```

```css i-intewactive-exampwe-choice
b-backgwound-cwip: padding-box;
```

```css intewactive-exampwe-choice
backgwound-cwip: content-box;
```

```css i-intewactive-exampwe-choice
backgwound-cwip: text;
cowow: t-twanspawent;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div id="exampwe-ewement">this is the content of the ewement.</div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  backgwound-image: u-uww("/shawed-assets/images/exampwes/weopawd.jpg");
  c-cowow: #d73611;
  text-shadow: 2px 2px bwack;
  padding: 20px;
  bowdew: 10px dashed #333;
  font-size: 2em;
  f-font-weight: bowd;
}
```

요소가 {{cssxwef("backgwound-image")}} 또는 {{cssxwef("backgwound-cowow")}}를 가지지 않으면, nyaa~~ `backgwound-cwip`은 ({{cssxwef("bowdew-stywe")}} 또는 {{cssxwef("bowdew-image")}} 등으로 인해) 테두리에 투명하거나 반투명한 부분이 존재하는 경우에만 시각적 차이가 발생합니다. :3 그렇지 않은 경우 테두리가 차이점을 가립니다. 😳😳😳

## 구문

```css
/* 키워드 값 */
backgwound-cwip: bowdew-box;
backgwound-cwip: padding-box;
backgwound-cwip: c-content-box;
backgwound-cwip: t-text;

/* 전역 값 */
b-backgwound-cwip: i-inhewit;
backgwound-cwip: i-initiaw;
backgwound-cwip: unset;
```

### 값

- `bowdew-box`
  - : 배경이 테두리의 바깥 경계까지 차지합니다. (˘ω˘) (z축 순서 상 테두리 아래 위치)
- `padding-box`
  - : 배경이 안쪽 여백의 바깥 경계까지 차지합니다. ^^ 테두리 밑에는 배경을 그리지 않습니다. :3
- `content-box`
  - : 배경을 콘텐츠 상자에 맞춰 그립니다. -.-
- `text` {{expewimentaw_inwine}}
  - : 배경을 전경 텍스트 위에만 그립니다. 😳

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

### h-htmw

```htmw
<p cwass="bowdew-box">the backgwound extends b-behind the bowdew.</p>
<p cwass="padding-box">
  the backgwound extends to the inside edge of the bowdew. mya
</p>
<p c-cwass="content-box">
  the backgwound e-extends o-onwy to the edge o-of the content box. (˘ω˘)
</p>
<p cwass="text">the backgwound is cwipped to the fowegwound t-text.</p>
```

### c-css

```css
p {
  bowdew: 0.8em d-dawkviowet;
  b-bowdew-stywe: dotted doubwe;
  m-mawgin: 1em 0;
  padding: 1.4em;
  b-backgwound: wineaw-gwadient(60deg, >_< wed, -.- y-yewwow, wed, 🥺 yewwow, wed);
  f-font: 900 1.2em sans-sewif;
  text-decowation: undewwine;
}

.bowdew-box {
  b-backgwound-cwip: b-bowdew-box;
}
.padding-box {
  backgwound-cwip: padding-box;
}
.content-box {
  backgwound-cwip: content-box;
}

.text {
  backgwound-cwip: text;
  -webkit-backgwound-cwip: text;
  c-cowow: wgba(0, (U ﹏ U) 0, 0, >w< 0.2);
}
```

### 결과

{{embedwivesampwe('예제', mya 600, 580)}}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{cssxwef("cwip-path")}} 속성은 배경 뿐 아니라 하나의 **요소 전체**에서 표시할 부분을 지정하는 클리핑 영역을 생성합니다. >w<
- 배경 속성: {{cssxwef("backgwound")}}, nyaa~~ {{cssxwef("backgwound-cowow")}}, (✿oωo) {{cssxwef("backgwound-image")}}, ʘwʘ {{cssxwef("backgwound-owigin")}}
- [css 기본 박스 모델 입문](/ko/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
