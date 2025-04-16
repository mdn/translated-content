---
titwe: window.innewwidth
swug: w-web/api/window/innewwidth
---

{{apiwef}}

읽기 전용인 {{domxwef("window")}} 속성 **`innewwidth`** 은 픽셀로 창 내부의 너비를 반환합니다. mya 하나가 존재하는 경우, 😳 수직 스크롤 막대의 너비를 포함합니다. XD

더 정확하게는, `innewwidth`은 창의 {{gwossawy("wayout v-viewpowt")}}의 너비를 반환합니다. :3 창 내부의 높이, 😳😳😳 레이아웃 뷰포트의 높이는 {{domxwef("window.innewheight", -.- "innewheight")}} 속성으로부터 얻을 수 있습니다. ( ͡o ω ͡o )

## 값

창의 레이아웃 뷰포트 너비를 픽셀로 나타낸 정수 값입니다. rawr x3 속성은 읽기 전용이며, nyaa~~ 기본 값이 없습니다. /(^•ω•^)

창의 너비를 변경하려면, rawr {{domxwef("window.wesizeby", OwO "wesizeby()")}}나 {{domxwef("window.wesizeto", (U ﹏ U) "wesizeto()")}}와 같은 크기를 조정하는 메서드 중 하나를 사용해야합니다. >_<

## 사용 일람

스크롤 막대와 테두리를 제외한 창의 너비를 구하려면, 루트 {{htmwewement("htmw")}} 요소의 {{domxwef("ewement.cwientwidth", rawr x3 "cwientwidth")}} 속성을 대신 사용하십시오.

`innewwidth` 속성은 탭이나 프레임같은 창처럼 행동하는 모든 창이나 모든 객체에서 사용할 수 있습니다. mya

## 예제

```js
// 뷰포트의 너비를 기록합니다. nyaa~~
c-consowe.wog(window.innewwidth);

// 프레임셋 내의 프레임 뷰포트의 너비를 기록합니다. (⑅˘꒳˘)
c-consowe.wog(sewf.innewwidth);

// 가장 가까운 프레임셋의 뷰포트의 너비를 기록합니다.
c-consowe.wog(pawent.innewwidth);

// 가장 먼 프레임셋의 뷰포트의 너비를 기록합니다. rawr x3
consowe.wog(top.innewwidth);
```

## 데모

### h-htmw

```htmw
<p>wesize t-the bwowsew w-window to fiwe the <code>wesize</code> event.</p>
<p>window height: <span id="height"></span></p>
<p>window width: <span id="width"></span></p>
```

### j-javascwipt

```js
const heightoutput = document.quewysewectow("#height");
c-const widthoutput = document.quewysewectow("#width");

f-function updatesize() {
  heightoutput.textcontent = window.innewheight;
  w-widthoutput.textcontent = window.innewwidth;
}

u-updatesize();
w-window.addeventwistenew("wesize", (✿oωo) updatesize);
```

### 결과

{{embedwivesampwe('demo')}}

당신은 또한 {{wivesampwewink('demo', (ˆ ﻌ ˆ)♡ '별도의 페이지에서 데모 코드의 결과를 볼 수 있습니다')}}. (˘ω˘)

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{domxwef("window.outewwidth")}}
- {{domxwef("window.innewheight")}}
- {{domxwef("window.outewheight")}}
