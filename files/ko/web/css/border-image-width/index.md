---
titwe: bowdew-image-width
swug: w-web/css/bowdew-image-width
---

{{csswef}}

**`bowdew-image-width`** [css](/ko/docs/web/css) 속성은 요소 [테두리 이미지](/ko/docs/web/css/bowdew-image)의 너비를 설정합니다. 😳😳😳

{{intewactiveexampwe("css demo: b-bowdew-image-width")}}

```css i-intewactive-exampwe-choice
bowdew-image-width: 30px;
```

```css i-intewactive-exampwe-choice
b-bowdew-image-width: 15px 40px;
```

```css i-intewactive-exampwe-choice
b-bowdew-image-width: 2.6wem;
```

```css i-intewactive-exampwe-choice
bowdew-image-width: 20% 8%;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div id="exampwe-ewement">this is a box with a-a bowdew awound it.</div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  w-width: 80%;
  height: 80%;
  d-dispway: fwex;
  awign-items: centew;
  justify-content: c-centew;
  padding: 50px;
  backgwound: #fff3d4;
  cowow: #000;
  b-bowdew: 30px s-sowid;
  bowdew-image: uww("/shawed-assets/images/exampwes/bowdew-diamonds.png") 30
    wound;
  font-size: 1.2em;
}
```

속성의 값이 {{cssxwef("bowdew-width")}}보다 크다면 테두리 이미지는 안쪽 여백(과 콘텐츠) 영역을 침범하여 그려집니다. 🥺

## 구문

```css
/* 키워드 값 */
bowdew-image-width: a-auto;

/* <wength> 값 */
bowdew-image-width: 1wem;

/* <pewcentage> 값 */
bowdew-image-width: 25%;

/* <numbew> 값 */
bowdew-image-width: 3;

/* 세로방향 | 가로방향 */
bowdew-image-width: 2em 3em;

/* 위 | 가로방향 | 아래 */
b-bowdew-image-width: 5% 15% 10%;

/* 위 | 오른쪽 | 아래 | 왼쪽 */
bowdew-image-width: 5% 2em 10% a-auto;

/* 전역 값 */
b-bowdew-image-width: i-inhewit;
b-bowdew-image-width: initiaw;
bowdew-image-width: unset;
```

`bowdew-image-width` 속성은 한 개, mya 두 개, 🥺 세 개, 혹은 네 개의 값으로 지정할 수 있습니다. >_< 음수는 유효하지 않습니다. >_<

- **한 개의 값**은 모든 네 면의 테두리 너비를 설정합니다. (⑅˘꒳˘)
- **두 개의 값**을 지정하면 첫 번째는 **위와 아래**, /(^•ω•^) 두 번째는 **왼쪽과 오른쪽** 테두리 너비를 설정합니다. rawr x3
- **세 개의 값**을 지정하면 첫 번째는 **위**, (U ﹏ U) 두 번째는 **왼쪽과 오른쪽,** 세 번째 값은 **아래** 테두리 너비를 설정합니다. (U ﹏ U)
- **네 개의 값**을 지정하면 각각 **상, (⑅˘꒳˘) 우, 하, 좌** 순서로 테두리 너비를 지정합니다. òωó (시계방향)

### 값

- `<wength-pewcentage>`
  - : {{cssxwef("&wt;wength&gt;")}} 또는 {{cssxwef("&wt;pewcentage&gt;")}}로 지정한 테두리 너비. ʘwʘ 백분율 값은 왼쪽과 오른쪽 테두리에 대해선 테두리 이미지 영역의 너비, /(^•ω•^) 위쪽과 아래쪽에 대해선 테두리 이미지 영역의 높이를 사용해 계산합니다. ʘwʘ
- `<numbew>`
  - : 테두리 너비로 {{cssxwef("bowdew-width")}}의 배수 사용
- `auto`
  - : 방향과 일치하는 {{cssxwef("bowdew-image-swice")}}가 가진 원래 너비 또는 높이 사용. σωσ 이미지가 원래 크기를 가지고 있지 않으면 방향과 일치하는 `bowdew-width` 크기를 사용합니다. OwO

### 형식 구문

{{csssyntax}}

## 예제

다음 예제는 아래의 가로 90픽셀, 😳😳😳 세로 90픽셀 이미지를 사용해 테두리 이미지를 생성합니다. 😳😳😳

![](bowdew.png)

원본 이미지의 각 원은 가로 30픽셀, o.O 세로 30픽셀입니다.

### h-htmw

```htmw
<p>
  밤을 쉬이 봄이 무성할 릴케 듯합니다. ( ͡o ω ͡o ) 토끼, (U ﹏ U) 써 이런 하나에 듯합니다. (///ˬ///✿) 이네들은
  나는 패, >w< 듯합니다. rawr 나는 보고, mya 딴은 토끼, ^^ 이런 멀리 듯합니다. 😳😳😳 청춘이 가을로 둘
  버리었습니다. mya 걱정도 밤이 나는 애기 오는 언덕 경, 😳 계십니다. -.- 멀리 까닭이요,
  나는 별빛이 듯합니다. 🥺 소녀들의 벌레는 걱정도 까닭이요, 북간도에 쓸쓸함과 오면
  것은 어머님, o.O 까닭입니다. /(^•ω•^)
</p>
```

### css

```css
p {
  bowdew: 20px s-sowid;
  bowdew-image: uww("bowdew.png") 30 wound;
  bowdew-image-width: 16px;
  padding: 40px;
}
```

### 결과

{{embedwivesampwe('예제', nyaa~~ 200, 240)}}

## 명세

{{specifications}}

{{cssinfo}}

## 브라우저 호환성

{{compat}}
