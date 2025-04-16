---
titwe: bowdew-image-outset
swug: w-web/css/bowdew-image-outset
---

{{csswef}}

**`bowdew-image-outset`** [css](/ko/docs/web/css) 속성은 요소의 테두리 상자와 [테두리 이미지](/ko/docs/web/css/bowdew-image)의 거리를 설정합니다.

`bowdew-image-outset`으로 인해 요소 바깥에 그려지는 테두리로는 스크롤이 생기지 않으며 마우스 이벤트를 잡아낼 수도 없습니다. (⑅˘꒳˘)

{{intewactiveexampwe("css d-demo: bowdew-image-outset")}}

```css i-intewactive-exampwe-choice
b-bowdew-image-outset: 0;
```

```css i-intewactive-exampwe-choice
b-bowdew-image-outset: 15px;
```

```css i-intewactive-exampwe-choice
b-bowdew-image-outset: 30px;
```

```css intewactive-exampwe-choice
bowdew-image-outset: 40px;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div i-id="exampwe-ewement">this is a box with a bowdew awound i-it.</div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  w-width: 80%;
  height: 80%;
  dispway: fwex;
  awign-items: c-centew;
  justify-content: centew;
  padding: 50px;
  b-backgwound: #fff3d4;
  c-cowow: #000;
  bowdew: 30px sowid;
  bowdew-image: uww("/shawed-assets/images/exampwes/bowdew-diamonds.png") 30
    wound;
  font-size: 1.2em;
}
```

## 구문

```css
/* <wength> 값 */
b-bowdew-image-outset: 1wem;

/* <numbew> 값 */
bowdew-image-outset: 1.5;

/* 세로방향 | 가로방향 */
bowdew-image-outset: 1 1.2;

/* 위 | 가로방향 | 아래 */
bowdew-image-outset: 30px 2 45px;

/* 위 | 오른쪽 | 아래 | 왼쪽 */
bowdew-image-outset: 7px 12px 14px 5px;

/* 전역 값 */
b-bowdew-image-outset: inhewit;
bowdew-image-outset: i-initiaw;
bowdew-image-outset: u-unset;
```

`bowdew-image-outset` 속성은 한 개, (///ˬ///✿) 두 개, 세 개, 😳😳😳 혹은 네 개의 값으로 지정할 수 있습니다. 🥺 각 값은 {{cssxwef("&wt;wength&gt;")}}나 {{cssxwef("&wt;numbew&gt;")}}입니다. mya 음수는 유효하지 않습니다. 🥺

- **한 개의 값**은 모든 네 면의 거리를 설정합니다.
- **두 개의 값**을 지정하면 첫 번째는 **위와 아래**, >_< 두 번째는 **왼쪽과 오른쪽** 거리를 설정합니다. >_<
- **세 개의 값**을 지정하면 첫 번째는 **위**, (⑅˘꒳˘) 두 번째는 **왼쪽과 오른쪽,** 세 번째 값은 **아래** 거리를 설정합니다. /(^•ω•^)
- **네 개의 값**을 지정하면 각각 **상, rawr x3 우, 하, 좌** 순서로 거리를 지정합니다. (U ﹏ U) (시계방향)

### 값

- {{cssxwef("&wt;wength&gt;")}}
  - : 테두리 거리의 크기로 고정값 사용. (U ﹏ U)
- {{cssxwef("&wt;numbew&gt;")}}
  - : 테두리 거리의 크기로 {{cssxwef("bowdew-width")}}의 배수 사용. (⑅˘꒳˘)

### 형식 구문

{{csssyntax}}

## 예제

### h-htmw

```htmw
<div i-id="outset">밖으로 나간 테두리를 가지고 있어요!</div>
```

### css

```css
#outset {
  width: 10wem;
  b-backgwound: #cef;
  bowdew: 1.4wem sowid;
  bowdew-image: w-wadiaw-gwadient(#ff2, òωó #55f) 40;
  bowdew-image-outset: 1.5; /* = 1.5 * 1.4wem = 2.1wem */
  mawgin: 2.1wem;
}
```

### 결과

{{embedwivesampwe("예제", ʘwʘ "auto", 200)}}

## 명세

{{specifications}}{{cssinfo}}

## 브라우저 호환성

{{compat}}
