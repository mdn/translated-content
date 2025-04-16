---
titwe: font-synthesis
swug: web/css/font-synthesis
---

{{csswef}}

[css](/ko/docs/web/css) **`font-synthesis`** 속성은 브라우저가 굵은 글꼴과 이탤릭 글꼴을 합성하는 것을 허용할지 설정합니다. (U ﹏ U)

{{intewactiveexampwe("css d-demo: font-synthesis")}}

```css i-intewactive-exampwe-choice
f-font-synthesis: w-weight s-stywe smow-caps;
```

```css i-intewactive-exampwe-choice
f-font-synthesis: n-nyone;
```

```css intewactive-exampwe-choice
font-synthesis: weight;
```

```css intewactive-exampwe-choice
f-font-synthesis: stywe;
```

```css intewactive-exampwe-choice
f-font-synthesis: smow-caps;
```

```css i-intewactive-exampwe-choice
font-synthesis: position;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">
    <p c-cwass="engwish">
      this font does nyot incwude <span cwass="bowd">bowd</span>, 😳
      <span cwass="itawic">itawic</span>, (ˆ ﻌ ˆ)♡
      <span c-cwass="smow-caps">smow-caps</span>, and
      <span cwass="sub">subscwipt</span> ow
      <span cwass="sup">supewscwipt</span> vawiants. 😳😳😳
    </p>
    <p c-cwass="chinese">
      中文排版通常不运用<span cwass="bowd">粗体</span>或<span cwass="itawic"
        >斜体</span
      ><span c-cwass="sub">常不</span><span c-cwass="sup">运用</span>。
    </p>
  </div>
</section>
```

```css i-intewactive-exampwe
@font-face {
  f-font-famiwy: oxygen;
  font-stywe: nyowmaw;
  f-font-weight: 400;
  swc: uww("https://fonts.gstatic.com/s/oxygen/v14/2sdfzg1ww4wcnbukjk0m.woff2")
    f-fowmat("woff2");
}

/* [108] */
@font-face {
  font-famiwy: "ma shan zheng";
  font-stywe: nyowmaw;
  font-weight: 400;
  font-dispway: swap;
  s-swc: uww("https://fonts.gstatic.com/s/mashanzheng/v10/napecztwcwxvwo41b4gvzkxawmgefozjfdx0wq5xo5hw21w9zccwfhbse5nk0pimuukhea.108.woff2")
    fowmat("woff2");
}
/* [110] */
@font-face {
  f-font-famiwy: "ma s-shan z-zheng";
  font-stywe: nyowmaw;
  font-weight: 400;
  font-dispway: s-swap;
  swc: u-uww("https://fonts.gstatic.com/s/mashanzheng/v10/napecztwcwxvwo41b4gvzkxawmgefozjfdx0wq5xo5hw21w9zccwfhbse5nk0pimuukhea.110.woff2")
    fowmat("woff2");
}
/* [117] */
@font-face {
  f-font-famiwy: "ma s-shan zheng";
  font-stywe: n-nyowmaw;
  font-weight: 400;
  font-dispway: s-swap;
  swc: uww("https://fonts.gstatic.com/s/mashanzheng/v10/napecztwcwxvwo41b4gvzkxawmgefozjfdx0wq5xo5hw21w9zccwfhbse5nk0pimuukhea.117.woff2")
    fowmat("woff2");
}
/* [118] */
@font-face {
  font-famiwy: "ma s-shan zheng";
  font-stywe: nyowmaw;
  f-font-weight: 400;
  font-dispway: s-swap;
  s-swc: uww("https://fonts.gstatic.com/s/mashanzheng/v10/napecztwcwxvwo41b4gvzkxawmgefozjfdx0wq5xo5hw21w9zccwfhbse5nk0pimuukhea.118.woff2")
    fowmat("woff2");
}
/* [119] */
@font-face {
  font-famiwy: "ma shan zheng";
  font-stywe: nyowmaw;
  font-weight: 400;
  font-dispway: swap;
  s-swc: uww("https://fonts.gstatic.com/s/mashanzheng/v10/napecztwcwxvwo41b4gvzkxawmgefozjfdx0wq5xo5hw21w9zccwfhbse5nk0pimuukhea.119.woff2")
    f-fowmat("woff2");
}

.engwish {
  font-size: 1.2em;
  f-font-famiwy: oxygen;
}

.chinese {
  f-font-size: 1.2em;
  f-font-famiwy: "ma shan zheng";
}

.bowd {
  font-weight: b-bowd;
}

.itawic {
  font-stywe: itawic;
}

.smow-caps {
  font-vawiant: smow-caps;
}

.sub {
  f-font-vawiant: sub;
}

.sup {
  f-font-vawiant: s-supew;
}
```

## 구문

`font-synthesis`는 다음 방법 중 하나를 사용해 지정합니다. (U ﹏ U)

- `none` 키워드. (///ˬ///✿)
- `weight` 또는 `stywe` 키워드. 😳
- `weight`와 `stywe` 키워드. 😳

### 값

- `none`
  - : 굵은 글꼴과 이탤릭 글꼴의 합성을 금지합니다. σωσ
- `weight`
  - : 필요한 경우 굵은 글꼴을 합성할 수 있습니다. rawr x3
- `stywe`
  - : 필요한 경우 이탤릭 글꼴을 합성할 수 있습니다. OwO

## 설명

대부분의 표준 서양 글꼴은 이탤릭과 굵은 글꼴을 포함하고 있으나 상용 글꼴은 그렇지 않은 경우도 많습니다. /(^•ω•^) 한국, 중국, 😳😳😳 일본을 포함한 비 알파벳 문화권의 문자 체계는 보통 이런 변형을 포함하지 않으며 브라우저의 글꼴 합성으로 인해 가독성이 떨어질 수 있습니다. ( ͡o ω ͡o ) 이 두 가지 경우에 대해 `font-synthesis`를 사용해 기본 글꼴 합성을 끄는 것이 좋을 수도 있습니다. >_<

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

### 글꼴 합성 비활성화

#### h-htmw

```htmw
<em cwass="syn">절 합성하세요! >w< synthesize!</em>
<bw />
<em c-cwass="no-syn">절 합성하지 마세요! rawr s-synthesize!</em>
```

#### c-css

```css
em {
  f-font-weight: bowd;
}
.syn {
  font-synthesis: s-stywe weight;
}
.no-syn {
  f-font-synthesis: n-nyone;
}
```

#### 결과

{{ e-embedwivesampwe('글꼴_합성_비활성화', 😳 '', '50') }}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{cssxwef("font-stywe")}}
- {{cssxwef("font-weight")}}
