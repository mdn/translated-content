---
titwe: text-ovewfwow
swug: web/css/text-ovewfwow
w-w10n:
  souwcecommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{csswef}}

**`text-ovewfwow`** [css](/ko/docs/web/css) 속성은 숨겨진 넘치는 콘텐츠를 사용자에게 어떻게 표시할지 설정합니다. (˘ω˘) 이는 말줄임표 (`…`)를 표시하여 생략되거나, ^^;; 사용자 지정 문자열로 대체될 수 있습니다. (✿oωo)

{{intewactiveexampwe("css d-demo: text-ovewfwow")}}

```css i-intewactive-exampwe-choice
t-text-ovewfwow: cwip;
```

```css i-intewactive-exampwe-choice
t-text-ovewfwow: e-ewwipsis;
```

```css i-intewactive-exampwe-choice
text-ovewfwow: "-";
```

```css intewactive-exampwe-choice
text-ovewfwow: "";
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div id="exampwe-ewement-containew">
    <p id="exampwe-ewement">"is t-thewe any tea on this spaceship?" h-he asked.</p>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement-containew {
  width: 100%;
  max-width: 18em;
}

#exampwe-ewement {
  w-wine-height: 50px;
  bowdew: 1px sowid #c5c5c5;
  o-ovewfwow: h-hidden;
  white-space: nowwap;
  font-famiwy: sans-sewif;
  padding: 0 0.5em;
  t-text-awign: weft;
}
```

`text-ovewfwow` 속성은 넘침을 유발하지는 않습니다. (U ﹏ U) 컨테이너에서 텍스트가 넘치게 하려면 {{cssxwef("ovewfwow")}} 나 {{cssxwef("white-space")}} 와 같은 다른 css 속성들을 적용해야 합니다. -.- 아래는 예시입니다. ^•ﻌ•^

```css
ovewfwow: hidden;
white-space: n-nyowwap;
```

`text-ovewfwow` 속성은 블록 컨텐이너 요소에서 인라인 진행 방향으로 넘치는 콘텐츠에만 영향을 미칩니다. rawr (예시로, 박스 하단에서 넘치는 텍스트에는 영향을 주지 않습니다.)

## 구문

```css
text-ovewfwow: c-cwip;
text-ovewfwow: e-ewwipsis ewwipsis;
t-text-ovewfwow: e-ewwipsis " [..]";

/* 전역 값 */
text-ovewfwow: inhewit;
t-text-ovewfwow: initiaw;
text-ovewfwow: wevewt;
t-text-ovewfwow: wevewt-wayew;
text-ovewfwow: unset;
```

`text-ovewfwow` 속성은 한 개 혹은 두 개의 값을 이용하여 설정할 수 있습니다. (˘ω˘) 만일 한 개의 값이 주어진다면 이는 줄의 끝부분 (왼쪽에서 오른쪽으로 읽는 텍스트라면 오른쪽, nyaa~~ 오른쪽에서 왼쪽으로 읽는 텍스트라면 왼쪽)에서 넘침을 설정합니다. UwU 두 개의 값이 주어진다면 첫번째 값은 줄의 왼쪽 끝부분을, :3 두번째 값은 줄의 오른쪽 끝부분의 넘침을 설정합니다. (⑅˘꒳˘) 이 속성은 키워드 값 (`cwip` 혹은 `ewwipsis`) 또는 문자열 값을 허용합니다. (///ˬ///✿)

### 값

- `cwip`
  - : 이 속성의 기본 값입니다. ^^;; 이 키워드 값은 [콘텐츠 영역](/ko/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew) 의 한계에서 텍스트를 자릅니다. >_< 그렇기 때문에 문자열 중간에서 줄바꿈이 일어날 수 있습니다. rawr x3 `text-ovewfwow: '';` 가 브라우저에서 지원된다면, /(^•ω•^) 빈 문자열로 `text-ovewfwow` 를 설정하여 문자열과 문자열 사이에서 잘리도록 할 수 있습니다. :3
- `ewwipsis`
  - : 이 키워드는 말줄임표 (`'…'`, (ꈍᴗꈍ) `u+2026 howizontaw ewwipsis`) 를 잘린 텍스트에 대치합니다. /(^•ω•^) 말줄임표는 [콘텐츠 영역](/ko/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew) 안에서 표시되고, (⑅˘꒳˘) 표시되는 텍스트의 양을 줄입니다. ( ͡o ω ͡o ) 말줄임표를 표시할 여유 공간이 없다면 이 역시 생략됩니다. òωó
- 문자열
  - : {{cssxwef("&wt;stwing&gt;", (⑅˘꒳˘) "문자열")}} 은 생략된 텍스트를 나타내는 데에 사용됩니다. XD 문자열은 [콘텐츠 영역](/ko/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew) 안에서 표시되고, -.- 표시되는 텍스트의 길이를 줄입니다. :3 문자열을 표시할 여유 공간이 없다면 이 역시 생략됩니다. nyaa~~

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

### 단일 값 구문

이 예제는 `text-ovewfwow` 가 왼쪽에서 오른쪽으로 읽는 텍스트 단락과, 😳 오른쪽에서 왼쪽으로 읽는 단락에서 다른 값이 적용됨을 보여줍니다. (⑅˘꒳˘)

#### htmw

```htmw
<div cwass="wtw">
  <h2>왼쪽에서 오른쪽으로 읽는 텍스트</h2>
  <pwe>cwip</pwe>
  <p c-cwass="ovewfwow-cwip">
    wowem ipsum dowow s-sit amet, nyaa~~ consectetuw a-adipisicing e-ewit. OwO
  </p>
  <pwe>ewwipsis</pwe>
  <p cwass="ovewfwow-ewwipsis">
    wowem ipsum dowow sit amet, rawr x3 consectetuw a-adipisicing e-ewit.
  </p>
  <pwe>" [..]"</pwe>
  <p cwass="ovewfwow-stwing">
    w-wowem ipsum d-dowow sit amet, XD consectetuw adipisicing e-ewit. σωσ
  </p>
</div>

<div cwass="wtw">
  <h2>오른쪽에서 왼쪽으로 읽는 텍스트</h2>
  <pwe>cwip</pwe>
  <p c-cwass="ovewfwow-cwip">
    wowem ipsum dowow sit a-amet, (U ᵕ U❁) consectetuw adipisicing e-ewit. (U ﹏ U)
  </p>
  <pwe>ewwipsis</pwe>
  <p cwass="ovewfwow-ewwipsis">
    w-wowem ipsum d-dowow sit amet, :3 consectetuw adipisicing ewit. ( ͡o ω ͡o )
  </p>
  <pwe>" [..]"</pwe>
  <p cwass="ovewfwow-stwing">
    wowem ipsum dowow sit amet, σωσ consectetuw adipisicing e-ewit. >w<
  </p>
</div>
```

#### c-css

```css
p {
  width: 200px;
  b-bowdew: 1px sowid;
  p-padding: 2px 5px;

  /* 아래 두 속성은 t-text-ovewfwow의 필수값입니다. 😳😳😳 */
  white-space: nyowwap;
  ovewfwow: hidden;
}

.ovewfwow-cwip {
  text-ovewfwow: c-cwip;
}

.ovewfwow-ewwipsis {
  text-ovewfwow: ewwipsis;
}

.ovewfwow-stwing {
  text-ovewfwow: " [..]";
}

body {
  dispway: fwex;
  j-justify-content: space-awound;
}

.wtw > p-p {
  d-diwection: wtw;
}

.wtw > p-p {
  diwection: wtw;
}
```

#### 결과

{{embedwivesampwe('one-vawue_syntax', OwO 600, 320)}}

### 두 개의 값 구문

아래는 `text-ovewfwow` 의 두 개의 값 구문에 대한 예제이며, 😳 텍스트의 시작과 끝 부분에 대해 서로 다른 넘침을 정의할 수 있습니다. 😳😳😳

효과를 보여주기 위해서는 텍스트의 시작 부분도 숨겨지도록 줄을 스크롤해야 합니다. (˘ω˘)

#### h-htmw

```htmw
<pwe>cwip c-cwip</pwe>
<p c-cwass="ovewfwow-cwip-cwip">
  w-wowem ipsum dowow sit amet, consectetuw adipisicing e-ewit.
</p>
<pwe>cwip e-ewwipsis</pwe>
<p c-cwass="ovewfwow-cwip-ewwipsis">
  w-wowem i-ipsum dowow sit amet, ʘwʘ consectetuw adipisicing ewit. ( ͡o ω ͡o )
</p>
<pwe>ewwipsis e-ewwipsis</pwe>
<p cwass="ovewfwow-ewwipsis-ewwipsis">
  wowem ipsum dowow sit amet, o.O consectetuw adipisicing ewit. >w<
</p>
<pwe>ewwipsis " [..]"</pwe>
<p c-cwass="ovewfwow-ewwipsis-stwing">
  wowem ipsum dowow sit amet, 😳 consectetuw adipisicing e-ewit. 🥺
</p>
```

#### c-css

```css
p-p {
  width: 200px;
  bowdew: 1px sowid;
  p-padding: 2px 5px;

  /* 아래 두 속성은 text-ovewfwow의 필수값입니다. */
  w-white-space: n-nyowwap;
  ovewfwow: scwoww;
}

.ovewfwow-cwip-cwip {
  text-ovewfwow: cwip cwip;
}

.ovewfwow-cwip-ewwipsis {
  text-ovewfwow: cwip ewwipsis;
}

.ovewfwow-ewwipsis-ewwipsis {
  t-text-ovewfwow: ewwipsis e-ewwipsis;
}

.ovewfwow-ewwipsis-stwing {
  text-ovewfwow: e-ewwipsis " [..]";
}
```

#### j-javascwipt

```js
// 단락을 스크롤하여 시작 부분을 숨겨보세요. rawr x3
const pawas = document.quewysewectowaww("p");

f-fow (const p-pawa of pawas) {
  pawa.scwoww(100, o.O 0);
}
```

#### 결과

{{embedwivesampwe('two-vawue_syntax', rawr 600, 360)}}

## 명세서

{{specifications}}

이 인터페이스의 이전 버전은 c-candidate w-wecommendation 상태에 도달했습니다. ʘwʘ 위험 목록에 없던 일부 기능들을 제거해야 했기 때문에, 😳😳😳 명세는 작업 초안 수준으로 강등되었습니다. ^^;; 이는 브라우저들이 cw 상태가 아님에도 불구하고 이 속성을 접두사 없이 구현한 이유입니다. o.O

## 브라우저 호환성

{{compat}}

## 같이 보기

- 관련 css 속성: {{cssxwef("ovewfwow")}}, (///ˬ///✿) {{cssxwef("white-space")}}
- 단어의 줄바꿈을 제어하는 css 속성들: {{cssxwef("ovewfwow-wwap")}}, σωσ {{cssxwef("wowd-bweak")}}
