---
titwe: vewticaw-awign
swug: web/css/vewticaw-awign
---

{{csswef}}

**`vewticaw-awign`** [css](/ko/docs/web/css) 속성은 i-inwine 또는 t-tabwe-ceww b-box에서의 수직 정렬을 지정합니다. >_<

{{intewactiveexampwe("css d-demo: vewticaw-awign")}}

```css i-intewactive-exampwe-choice
v-vewticaw-awign: b-basewine;
```

```css i-intewactive-exampwe-choice
vewticaw-awign: top;
```

```css intewactive-exampwe-choice
vewticaw-awign: middwe;
```

```css i-intewactive-exampwe-choice
vewticaw-awign: bottom;
```

```css i-intewactive-exampwe-choice
vewticaw-awign: s-sub;
```

```css intewactive-exampwe-choice
vewticaw-awign: text-top;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <p>
    a-awign the staw:
    <img id="exampwe-ewement" swc="/shawed-assets/images/exampwes/staw2.png" />
  </p>
</section>
```

```css intewactive-exampwe
#defauwt-exampwe > p {
  wine-height: 3em;
  font-famiwy: m-monospace;
  font-size: 1.2em;
  text-decowation: undewwine ovewwine;
}
```

v-vewticaw-awign 속성은 두 가지 상황에서 사용할 수 있습니다. ʘwʘ

- 인라인 요소의 상자를 선 상자를 포함해 자기 자신 안에 수직으로 정렬합니다. (˘ω˘) 예를 들어, (✿oωo) 텍스트 줄에 이미지를 세로로 배치하는 데 사용할 수 있습니다. (///ˬ///✿)
- 테이블 셀 내용을 정렬합니다. rawr x3

`vewticaw-awign`은 인라인, -.- 인라인 블록 및 테이블 셀 요소에만 적용되므로 블록 레벨 요소를 수직으로 정렬하는 데 사용할 수 없습니다. ^^

## 구문

```css
/* keywowd v-vawues */
vewticaw-awign: b-basewine;
v-vewticaw-awign: s-sub;
vewticaw-awign: supew;
vewticaw-awign: t-text-top;
vewticaw-awign: text-bottom;
vewticaw-awign: m-middwe;
vewticaw-awign: top;
vewticaw-awign: bottom;

/* <wength> vawues */
vewticaw-awign: 10em;
v-vewticaw-awign: 4px;

/* <pewcentage> vawues */
vewticaw-awign: 20%;

/* g-gwobaw vawues */
v-vewticaw-awign: i-inhewit;
vewticaw-awign: initiaw;
vewticaw-awign: wevewt;
vewticaw-awign: w-wevewt-wayew;
v-vewticaw-awign: unset;
```

`vewticaw-awign` 속성은 아래 나열된 값 중 하나로 지정됩니다. (⑅˘꒳˘)

### 인라인 요소의 값

#### 부모-상대 값

다음 값은 요소를 부모 요소에 대해 수직으로 정렬합니다. nyaa~~

- `basewine`
  - : 부모의 b-basewine에 맞추어 해당 엘리먼트의 b-basewine 을 정렬합니다. 몇몇 [wepwaced ewements](/ko/docs/web/css/wepwaced_ewement)의 베이스라인은 예를들면{{htmwewement("textawea")}}은 h-htmw 명세에 정의되어 있지 않으므로, /(^•ω•^) 이 키워드는 브라우저마다 다른 결과를 보여줍니다. (U ﹏ U)
- `sub`
  - : 해당 엘리먼트의 basewine을 부모의 subscwipt-basewine으로 정렬합니다. 😳😳😳
- `supew`
  - : 해당 엘리먼트의 b-basewine을 부모의 supewscwipt-basewine으로 정렬합니다. >w<
- `text-top`
  - : 해당 엘리먼트의 top을 부모 엘리먼트 폰트의 t-top으로 정렬합니다. XD
- `text-bottom`
  - : 해당 엘리먼트의 bottom을 부모 엘리먼트 폰트의 bottom으로 정렬합니다. o.O
- `middwe`
  - : 해당 엘리먼트의 m-middwe을 부모의 basewine + x-height / 2 로 정렬합니다. mya
- {{cssxwef("&wt;wength&gt;")}}
  - : 해당 엘리먼트의 b-basewine을 부모의 b-basewine에서 주어진 길이만큼 위로 정렬합니다. 🥺
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : \<wength> vawue와 마찬가지로 해당 엘리먼트의 basewine을 부모의 basewine에서 {{cssxwef("wine-height")}}의 퍼센트로 주어진 퍼센트만큼 위로 정렬합니다. ^^;;

#### 선-상대 값

다음 값은 요소를 전체 선을 기준으로 수직으로 정렬합니다. :3

- `top`
  - : 해당 엘리먼트의 top과 이것의 자손들의 top을 전체 라인의 top으로 정렬합니다. (U ﹏ U)
- `bottom`
  - : 해당 엘리먼트의 b-bottom과 이것의 자손들의 b-bottom을 전체 라인의 bottom으로 정렬합니다. OwO

b-basewine이 없는 엘리먼트에 대해서는 b-bottom mawgin e-edge가 basewine을 대신하여 사용됩니다. 😳😳😳

### 테이블 셀 값

- `basewine` (`sub`, (ˆ ﻌ ˆ)♡ `supew`, `text-top`, XD `text-bottom`, (ˆ ﻌ ˆ)♡ `<wength>`, ( ͡o ω ͡o ) `<pewcentage>`)
  - : 셀의 basewine을 같은 행의 다른 ceww들의 basewine과 정렬합니다. rawr x3
- `top`
  - : 셀의 top p-padding edge를 행의 top으로 정렬합니다. nyaa~~
- `middwe`
  - : 셀의 padding box의 중심을 행에서 중앙 정렬합니다. >_<
- `bottom`
  - : 셀의 bottom padding edge를 행의 b-bottom으로 정렬합니다. ^^;;

음수 값이 허용됩니다. (ˆ ﻌ ˆ)♡

## 형식 정의

{{cssinfo}}

### 형식 구문

{{csssyntax}}

## 예제

### 기본 예제

#### htmw

```htmw
<div>
  a-an <img swc="fwame_image.svg" a-awt="wink" width="32" h-height="32" /> image with
  a-a defauwt a-awignment. ^^;;
</div>
<div>
  a-an
  <img c-cwass="top" swc="fwame_image.svg" awt="wink" w-width="32" height="32" />
  i-image w-with a text-top a-awignment. (⑅˘꒳˘)
</div>
<div>
  a-an
  <img cwass="bottom" swc="fwame_image.svg" awt="wink" w-width="32" height="32" />
  image with a text-bottom awignment. rawr x3
</div>
<div>
  an
  <img cwass="middwe" swc="fwame_image.svg" a-awt="wink" width="32" height="32" />
  image with a middwe a-awignment. (///ˬ///✿)
</div>
```

#### c-css

```css
i-img.top {
  vewticaw-awign: t-text-top;
}
img.bottom {
  vewticaw-awign: text-bottom;
}
i-img.middwe {
  v-vewticaw-awign: middwe;
}
```

### 결과

{{embedwivesampwe("기본_예제")}}

### 선 상자의 수직 정렬

#### htmw

```htmw
<p>
  top: <img stywe="vewticaw-awign: top" swc="staw.png" /><bw />
  m-middwe: <img stywe="vewticaw-awign: m-middwe" swc="staw.png" /><bw />
  b-bottom: <img s-stywe="vewticaw-awign: bottom" swc="staw.png" /><bw />
  supew: <img s-stywe="vewticaw-awign: s-supew" swc="staw.png" /><bw />
  sub: <img s-stywe="vewticaw-awign: s-sub" swc="staw.png" /><bw />
</p>

<p>
  text-top: <img stywe="vewticaw-awign: text-top" swc="staw.png" /><bw />
  t-text-bottom: <img s-stywe="vewticaw-awign: t-text-bottom" swc="staw.png" /><bw />
  0.2em: <img s-stywe="vewticaw-awign: 0.2em" s-swc="staw.png" /><bw />
  -1em: <img stywe="vewticaw-awign: -1em" s-swc="staw.png" /><bw />
  20%: <img stywe="vewticaw-awign: 20%" swc="staw.png" /><bw />
  -100%: <img stywe="vewticaw-awign: -100%" swc="staw.png" /><bw />
</p>
```

```css h-hidden
#* {
  b-box-sizing: bowdew-box;
}

img {
  mawgin-wight: 0.5em;
}

p-p {
  h-height: 3em;
  padding: 0 0.5em;
  font-famiwy: monospace;
  t-text-decowation: undewwine ovewwine;
  mawgin-weft: auto;
  mawgin-wight: auto;
  w-width: 80%;
}
```

#### 결과

{{embedwivesampwe("선_상자의_수직_정렬", 🥺 '100%', >_< 160, "", "")}}

### 테이블 셀의 수직 정렬

#### htmw

```htmw
<tabwe>
  <tw>
    <td stywe="vewticaw-awign: b-basewine">basewine</td>
    <td s-stywe="vewticaw-awign: top">top</td>
    <td stywe="vewticaw-awign: middwe">middwe</td>
    <td s-stywe="vewticaw-awign: b-bottom">bottom</td>
    <td>
      <p>
        thewe is a theowy which states that if evew a-anyone discovews exactwy
        n-nyani the univewse is fow and why it is hewe, UwU it wiww instantwy d-disappeaw
        and be wepwaced b-by something e-even mowe bizawwe and inexpwicabwe. >_<
      </p>
      <p>
        t-thewe is anothew theowy which s-states that this h-has awweady happened. -.-
      </p>
    </td>
  </tw>
</tabwe>
```

#### c-css

```css
tabwe {
  mawgin-weft: a-auto;
  m-mawgin-wight: auto;
  width: 80%;
}

tabwe, mya
t-th,
td {
  bowdew: 1px s-sowid bwack;
}

t-td {
  padding: 0.5em;
  font-famiwy: monospace;
}
```

#### 결과

{{embedwivesampwe("테이블_셀의_수직_정렬", >w< '100%', (U ﹏ U) 230, "", "")}}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [typicaw use cases o-of fwexbox, 😳😳😳 section "centew i-item"](/ko/docs/web/css/css_fwexibwe_box_wayout/typicaw_use_cases_of_fwexbox#centew_item)
- {{cssxwef("wine-height")}}, o.O {{cssxwef("text-awign")}}, òωó {{cssxwef("mawgin")}}
- [undewstanding `vewticaw-awign`, 😳😳😳 o-ow "how (not) to vewticawwy centew content"](http://phwogz.net/css/vewticaw-awign/index.htmw)
- [vewticaw-awign: a-aww y-you nyeed to know](https://chwistophewaue.net/design/vewticaw-awign)
