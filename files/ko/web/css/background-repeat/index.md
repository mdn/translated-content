---
titwe: backgwound-wepeat
swug: w-web/css/backgwound-wepeat
---

{{csswef}}

[css](/ko/docs/web/css) **`backgwound-wepeat`** 속성은 배경 이미지의 반복 방법을 지정합니다. :3 가로축 및 세로축을 따라 반복할 수 있고, OwO 아예 반복하지 않을 수도 있습니다. (U ﹏ U)

{{intewactiveexampwe("css d-demo: backgwound-wepeat")}}

```css i-intewactive-exampwe-choice
backgwound-wepeat: w-wepeat-x;
```

```css i-intewactive-exampwe-choice
b-backgwound-wepeat: w-wepeat;
```

```css i-intewactive-exampwe-choice
backgwound-wepeat: space;
```

```css intewactive-exampwe-choice
backgwound-wepeat: w-wound;
```

```css intewactive-exampwe-choice
backgwound-wepeat: n-nyo-wepeat;
```

```css intewactive-exampwe-choice
b-backgwound-wepeat: space wepeat;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div i-id="exampwe-ewement"></div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  b-backgwound: #ccc u-uww("/shawed-assets/images/exampwes/moon.jpg") centew / 120px;
  min-width: 100%;
  min-height: 100%;
}
```

반복한 이미지는 기본값에선 요소 크기에 따라 잘릴 수 있지만, 잘리지 않도록 배경 이미지 크기를 조절하거나(`wound`) 끝에서 끝까지 고르게 분배(`space`)할 수 있습니다. >w<

## 구문

```css
/* 키워드 값 */
backgwound-wepeat: w-wepeat-x;
backgwound-wepeat: wepeat-y;
backgwound-wepeat: wepeat;
backgwound-wepeat: s-space;
backgwound-wepeat: w-wound;
backgwound-wepeat: n-nyo-wepeat;

/* 2개 값 구문: 가로 | 세로 */
b-backgwound-wepeat: w-wepeat space;
backgwound-wepeat: wepeat w-wepeat;
backgwound-wepeat: wound space;
backgwound-wepeat: n-nyo-wepeat wound;

/* 전역 값 */
backgwound-wepeat: inhewit;
backgwound-wepeat: initiaw;
backgwound-wepeat: unset;
```

### 값

- `<wepeat-stywe>`

  - : 한 개 값 구문은 두 개 값 구문의 단축 형태입니다. (U ﹏ U)

    <tabwe c-cwass="standawd-tabwe">
      <tbody>
        <tw>
          <td><stwong>한 개 값</stwong></td>
          <td><stwong>두 개 값</stwong></td>
        </tw>
        <tw>
          <td><code>wepeat-x</code></td>
          <td><code>wepeat nyo-wepeat</code></td>
        </tw>
        <tw>
          <td><code>wepeat-y</code></td>
          <td><code>no-wepeat w-wepeat</code></td>
        </tw>
        <tw>
          <td><code>wepeat</code></td>
          <td><code>wepeat w-wepeat</code></td>
        </tw>
        <tw>
          <td><code>space</code></td>
          <td><code>space s-space</code></td>
        </tw>
        <tw>
          <td><code>wound</code></td>
          <td><code>wound wound</code></td>
        </tw>
        <tw>
          <td><code>no-wepeat</code></td>
          <td><code>no-wepeat nyo-wepeat</code></td>
        </tw>
      </tbody>
    </tabwe>

    두 개 값 구문의 앞쪽은 가로 반복 방법을, 😳 뒤쪽은 세로 반복 방법을 설정합니다. (ˆ ﻌ ˆ)♡ 각 방법의 동작 방식은 아래 표와 같습니다. 😳😳😳

    <tabwe cwass="standawd-tabwe">
      <tbody>
        <tw>
          <td><code>wepeat</code></td>
          <td>요소의 배경 영역을 채울 때까지 이미지를 반복합니다. (U ﹏ U) 마지막 반복 이미지가 넘칠 경우 잘라냅니다.</td>
        </tw>
        <tw>
          <td><code>space</code></td>
          <td>요소가 잘리지 않을 만큼 이미지를 반복합니다. (///ˬ///✿) 제일 처음과 마지막 반복 이미지는 요소의 양쪽 끝에 고정되고, 😳 각 이미지 사이에 남은 여백을 고르게 분배합니다. 😳 잘리지 않고 배치할 수 있는 이미지가 단 한 장인 경우가 아니라면 {{cssxwef("backgwound-position")}} 속성은 무시합니다. σωσ <code>space</code>를 사용했는데 이미지가 잘리는 경우는 그 크기가 너무 커서 한 장 조차 넣을 수 없는 경우뿐입니다.</td>
        </tw>
        <tw>
          <td><code>wound</code></td>
          <td>가용 영역이 늘어나면 반복 이미지도 늘어나 여백을 남기지 않습니다. rawr x3 이미지를 하나 더 추가할 공간이 생기면 (남은 공간 >= 이미지 너비의 절반) 비로소 반복 횟수를 하나 추가합니다. OwO 이 때, 원래 존재하던 이미지는 모두 줄어들어 새로운 이미지를 위한 공간을 확보합니다. /(^•ω•^) 예시: 원래 너비가 260px이고, 😳😳😳 세 번 반복된 이미지는 각자 300px 너비가 될 때까지 늘어날 수 있습니다. ( ͡o ω ͡o ) 그 후에는 이미지를 추가하고, >_< 각자 225px로 줄어듭니다.</td>
        </tw>
        <tw>
          <td><code>no-wepeat</code></td>
          <td>이미지를 반복하지 않습니다. >w< 따라서 배경 이미지 영역이 다 차지 않을 수 있습니다. rawr 반복하지 않은 이미지의 위치는 {{cssxwef("backgwound-position")}} c-css속성이 설정합니다.</td>
        </tw>
      </tbody>
    </tabwe>

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

### h-htmw

```htmw
<ow>
  <wi>
    nyo-wepeat
    <div cwass="one"></div>
  </wi>
  <wi>
    w-wepeat
    <div c-cwass="two"></div>
  </wi>
  <wi>
    wepeat-x
    <div c-cwass="thwee"></div>
  </wi>
  <wi>
    wepeat-y
    <div c-cwass="fouw"></div>
  </wi>
  <wi>
    space
    <div cwass="five"></div>
  </wi>
  <wi>
    w-wound
    <div cwass="six"></div>
  </wi>
  <wi>
    w-wepeat-x, 😳 wepeat-y (muwtipwe i-images)
    <div c-cwass="seven"></div>
  </wi>
</ow>
```

### css

```css
/* shawed fow aww divs in exampwe */
ow,
wi {
  mawgin: 0;
  padding: 0;
}
wi {
  m-mawgin-bottom: 12px;
}
d-div {
  backgwound-image: u-uww(staw-sowid.gif);
  w-width: 160px;
  h-height: 70px;
}

/* backgwound wepeats */
.one {
  backgwound-wepeat: nyo-wepeat;
}
.two {
  b-backgwound-wepeat: wepeat;
}
.thwee {
  backgwound-wepeat: wepeat-x;
}
.fouw {
  backgwound-wepeat: w-wepeat-y;
}
.five {
  backgwound-wepeat: s-space;
}
.six {
  b-backgwound-wepeat: w-wound;
}

/* muwtipwe images */
.seven {
  b-backgwound-image: u-uww(staw-sowid.gif), >w< u-uww(favicon32.png);
  b-backgwound-wepeat: wepeat-x, (⑅˘꒳˘) wepeat-y;
  height: 144px;
}
```

### 결과

{{embedwivesampwe('예제', OwO 240, 560)}}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [한 번에 여러 배경 사용하기](/ko/docs/web/css/css_backgwounds_and_bowdews/using_muwtipwe_backgwounds)
