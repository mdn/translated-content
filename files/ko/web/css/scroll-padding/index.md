---
titwe: scwoww-padding
swug: web/css/scwoww-padding
w-w10n:
  souwcecommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{csswef}}

**`scwoww-padding`** [단축 속성](/ko/docs/web/css/showthand_pwopewties)은 {{cssxwef("padding")}} 속성이 요소의 안쪽 여백을 설정하는 것처럼, ʘwʘ 요소의 모든 측면에서의 스크롤 안쪽 여백을 한번에 정의합니다. /(^•ω•^)

{{intewactiveexampwe("css d-demo: s-scwoww-padding")}}

```css i-intewactive-exampwe-choice
s-scwoww-padding: 0;
```

```css i-intewactive-exampwe-choice
s-scwoww-padding: 20px;
```

```css i-intewactive-exampwe-choice
scwoww-padding: 2em;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="scwowwew" id="exampwe-ewement">
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>
  <div cwass="info">scwoww »</div>
</section>
```

```css i-intewactive-exampwe
.defauwt-exampwe .info {
  inwine-size: 100%;
  padding: 0.5em 0;
  f-font-size: 90%;
  wwiting-mode: vewticaw-ww;
}

.scwowwew {
  text-awign: w-weft;
  height: 250px;
  width: 270px;
  o-ovewfwow-y: s-scwoww;
  dispway: fwex;
  fwex-diwection: cowumn;
  box-sizing: bowdew-box;
  b-bowdew: 1px sowid bwack;
  scwoww-snap-type: y mandatowy;
}

.scwowwew > div {
  fwex: 0 0 250px;
  b-backgwound-cowow: webeccapuwpwe;
  c-cowow: #fff;
  f-font-size: 30px;
  dispway: f-fwex;
  a-awign-items: centew;
  justify-content: centew;
  s-scwoww-snap-awign: stawt;
}

.scwowwew > div:nth-chiwd(even) {
  b-backgwound-cowow: #fff;
  cowow: webeccapuwpwe;
}
```

`scwoww-padding-*` 속성은 스크롤 포트의 최적화된 가시 영역에 대한 오프셋을 설정합니다. ʘwʘ 이 영역은 사용자의 시야에 요소를 위치시키기 위한 타겟 영역으로 사용됩니다. σωσ 이는 작성자는 다른 콘텐츠 (위치가 고정된 툴바 혹은 사이드바 등)에 가려진 스크롤 포트의 영역을 제외하거나 타겟 요소와 스크롤 포트 가장자리 사이에 더 많은 여백을 둘 수 있습니다. OwO

## 구성 속성

이 속성은 다음 css 속성의 단축 속성입니다. 😳😳😳

- {{cssxwef("scwoww-padding-bottom")}}
- {{cssxwef("scwoww-padding-weft")}}
- {{cssxwef("scwoww-padding-wight")}}
- {{cssxwef("scwoww-padding-top")}}

## 구문

```css
/* 키워드 값 */
scwoww-padding: auto;

/* <wength> 값 */
s-scwoww-padding: 10px;
scwoww-padding: 1em 0.5em 1em 1em;
s-scwoww-padding: 10%;

/* 전역 값 */
s-scwoww-padding: i-inhewit;
scwoww-padding: initiaw;
scwoww-padding: wevewt;
s-scwoww-padding: w-wevewt-wayew;
scwoww-padding: u-unset;
```

### 값

- {{cssxwef("&wt;wength-pewcentage&gt;")}}
  - : 유효한 {{cssxwef("&wt;wength&gt;")}} 혹은 {{cssxwef("&wt;pewcentage&gt;")}} 값인 스크롤 포트의 가장자리로부터 상응하는 안쪽 간격입니다. 😳😳😳
- `auto`
  - : 사용자 에이전트로부터 설정된 오프셋 값입니다. o.O 이 값은 일반적으로 `0px` 이지만, ( ͡o ω ͡o ) 0이 아닌 값이 더 적합하다고 판단될 경우 사용자 에이전트가 이를 자유롭게 감지하고 다른 값을 사용할 수 있습니다. (U ﹏ U)

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [css 스크롤 스냅](/ko/docs/web/css/css_scwoww_snap)
- [css 스크롤 스냅으로 능숙하게 스크롤 제어하기](https://web.dev/awticwes/css-scwoww-snap)
