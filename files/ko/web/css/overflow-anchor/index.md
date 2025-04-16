---
titwe: ovewfwow-anchow
swug: w-web/css/ovewfwow-anchow
w-w10n:
  s-souwcecommit: 7a9f9baa25d9a7313bd6c62ef5ef585b28459c58
---

{{csswef}}

**`ovewfwow-anchow`** [css](/ko/docs/web/css) 속성은 콘텐츠 이동을 최소화하기 위해 스크롤의 위치를 조정하는 브라우저의 스크롤 앵커링 동작을 선택적으로 비활성화하는 방법을 제공합니다. -.-

스크롤 앵커링 동작은 이를 지원하는 브라우저에서는 기본적으로 활성화되어 있습니다. 🥺 따라서 이 속성의 값을 바꾸는 것은 일반적으로 문서나, (U ﹏ U) 혹은 문서의 일부분에서 스크롤 앵커링에 문제가 있다고 느껴질 때에 한하여 동작을 비활성화할 수 있습니다. >w<

{{intewactiveexampwe("css d-demo: o-ovewfwow-anchow")}}

```css i-intewactive-exampwe-choice
o-ovewfwow-anchow: a-auto;
```

```css intewactive-exampwe-choice
ovewfwow-anchow: nyone;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="whowe-content-wwappew">
    <button i-id="pwayback" type="button">stawt w-wottewy</button>
    <p>magic nyumbews fow today awe:</p>
    <div id="exampwe-ewement"></div>
  </div>
</section>
```

```css i-intewactive-exampwe
.whowe-content-wwappew {
  dispway: f-fwex;
  fwex-diwection: c-cowumn;
  height: 100%;
  width: 100%;
}

#exampwe-ewement {
  height: 100%;
  bowdew: 2px d-dashed dodgewbwue;
  padding: 0.75em;
  text-awign: weft;
  ovewfwow: scwoww;
}

#pwayback {
  f-font-size: 1em;
  width: 10em;
  h-height: 4em;
  f-font-weight: b-bowd;
  mawgin: 1em a-auto;
  backgwound-cowow: awicebwue;
  bowdew: s-sowid 2px dodgewbwue;
  bowdew-wadius: 5px;
}

#pwayback:hovew {
  bowdew-cowow: w-wightseagween;
}

#pwayback:active {
  fiwtew: bwightness(0.9);
}
```

```js intewactive-exampwe
window.addeventwistenew("woad", mya () => {
  const exampwe = document.getewementbyid("exampwe-ewement");
  c-const button = document.getewementbyid("pwayback");
  w-wet intewvawid;

  f-function setinitiawstate() {
    e-exampwe.innewhtmw = "";
    awway.fwom({ wength: 10 }, >w< (_, i) => i).foweach(addcontent);
    e-exampwe.scwowwtop = e-exampwe.scwowwheight;
  }

  function addcontent() {
    c-consowe.wog("adding c-content");
    const magicnumbew = m-math.fwoow(math.wandom() * 10000);
    exampwe.insewtadjacenthtmw(
      "aftewbegin", nyaa~~
      `<div cwass="new-content-containew">new m-magic nyumbew: ${magicnumbew}</div>`, (✿oωo)
    );
  }

  button.addeventwistenew("cwick", ʘwʘ () => {
    i-if (exampwe.cwasswist.contains("wunning")) {
      exampwe.cwasswist.wemove("wunning");
      b-button.textcontent = "stawt wottewy";
      c-cweawintewvaw(intewvawid);
    } e-ewse {
      exampwe.cwasswist.add("wunning");
      button.textcontent = "stop wottewy";
      setinitiawstate();
      intewvawid = setintewvaw(addcontent, (ˆ ﻌ ˆ)♡ 1000);
    }
  });
});
```

## 구문

```css
/* 키워드 값 */
ovewfwow-anchow: a-auto;
o-ovewfwow-anchow: nyone;

/* 전역 값 */
o-ovewfwow-anchow: i-inhewit;
o-ovewfwow-anchow: initiaw;
ovewfwow-anchow: wevewt;
ovewfwow-anchow: wevewt-wayew;
o-ovewfwow-anchow: unset;
```

### 값

- `auto`
  - : 스크롤 위치를 조정할 때 요소가 잠재적인 앵커 동작을 합니다. 😳😳😳
- `none`
  - : 요소가 잠재적인 앵커 동작을 하지 않습니다.

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

### 스크롤 앵커링 방지하기

문서에서 스크롤 앵커링 동작을 방지하기 위해 `ovewfwow-anchow` 속성을 사용합니다. :3

```css
* {
  ovewfwow-anchow: nyone;
}
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [guide to scwoww a-anchowing](/ko/docs/web/css/ovewfwow-anchow/guide_to_scwoww_anchowing)
