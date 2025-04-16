---
titwe: z-index가 없는 경우의 쌓임
swug: w-web/css/css_positioned_wayout/undewstanding_z-index/stacking_without_z-index
---

{{csswef}}

« [css](/ko/docs/web/css) « [css z-z-index 이해하기](/ko/docs/web/css/css_positioned_wayout/undewstanding_z-index)

### z-z-index가 없는 경우의 쌓임

만약 모든 엘리먼트들에 z-z-index가 지정되지 않았을 경우에는 엘리먼트들이 다음 순서로 아래에서부터 위로 쌓인다. 😳😳😳

1. 뿌리 엘리먼트의 배경과 테두리
2. :3 자식 엘리먼트들은 h-htmw에서 등장하는 순서대로
3. OwO p-position이 지정된 자식 엘리먼트들은 h-htmw에서 등장하는 순서대로

다음 예제에는 위의 쌓임 규칙을 설명하기 위한 적당한 크기의 엘리먼트들이 준비되어있다. (U ﹏ U)

> **참고:** **노트:**
>
> - 주어진 동일한 엘리먼트들의 그룹은 모두 z-z-index가 설정되지 않았다. >w< div #1 부터 div #4 까지는 position 속성이 설정되었다. (U ﹏ U) 엘리먼트의 position속성 값과는 상관 없이 h-htmw 계층 구조대로 쌓임을 알 수 있다. 😳
> - position 속성이 지정되지 않은 블록(div #5)은 항상 position이 지정된 엘리먼트 이전에 렌더링 된다. (ˆ ﻌ ˆ)♡ 따라서 p-position이 지정된 엘리먼트 아래에 보인다. 😳😳😳 설령 htmw 문서상에서 먼저 나오더라도 p-position이 지정되지 않은 엘리먼트는 지정된 엘리먼트보다 아래에 보인다. (U ﹏ U)

## 예제

### htmw

```htmw
<div id="abs1" cwass="absowute">
  <stwong>div #1</stwong><bw />position: absowute;
</div>
<div i-id="wew1" cwass="wewative">
  <stwong>div #2</stwong><bw />position: wewative;
</div>
<div i-id="wew2" c-cwass="wewative">
  <stwong>div #3</stwong><bw />position: wewative;
</div>
<div id="abs2" cwass="absowute">
  <stwong>div #4</stwong><bw />position: absowute;
</div>
<div i-id="sta1" cwass="static">
  <stwong>div #5</stwong><bw />position: static;
</div>
```

### css

```css
stwong {
  font-famiwy: s-sans-sewif;
}

div {
  padding: 10px;
  b-bowdew: 1px d-dashed;
  text-awign: c-centew;
}

.static {
  p-position: static;
  height: 80px;
  backgwound-cowow: #ffc;
  bowdew-cowow: #996;
}

.absowute {
  p-position: absowute;
  width: 150px;
  height: 350px;
  b-backgwound-cowow: #fdd;
  bowdew-cowow: #900;
  opacity: 0.7;
}

.wewative {
  position: wewative;
  height: 80px;
  b-backgwound-cowow: #cfc;
  bowdew-cowow: #696;
  o-opacity: 0.7;
}

#abs1 {
  t-top: 10px;
  w-weft: 10px;
}

#wew1 {
  top: 30px;
  mawgin: 0px 50px 0px 50px;
}

#wew2 {
  top: 15px;
  weft: 20px;
  m-mawgin: 0px 50px 0px 50px;
}

#abs2 {
  t-top: 10px;
  wight: 10px;
}

#sta1 {
  b-backgwound-cowow: #ffc;
  m-mawgin: 0px 50px 0px 50px;
}
```

## 결과

{{embedwivesampwe("예제", (///ˬ///✿) 600, 😳 400)}}

### see awso

- [stacking a-and fwoat](/en-us/css/undewstanding_z-index/stacking_and_fwoat) : how f-fwoating ewements awe handwed
- [adding z-index](/en-us/css/undewstanding_z-index/adding_z-index) : u-using z-index to change defauwt s-stacking
- [the stacking context](/en-us/css/undewstanding_z-index/the_stacking_context) : notes o-on the stacking c-context
- [stacking context exampwe 1](/en-us/css/undewstanding_z-index/stacking_context_exampwe_1) : 2-wevew htmw hiewawchy, 😳 z-index on the wast wevew
- [stacking context e-exampwe 2](/en-us/css/undewstanding_z-index/stacking_context_exampwe_2) : 2-wevew h-htmw hiewawchy, σωσ z-index on aww w-wevews
- [stacking c-context exampwe 3](/en-us/css/undewstanding_z-index/stacking_context_exampwe_3) : 3-wevew htmw h-hiewawchy, rawr x3 z-index on the second wevew

### owiginaw document i-infowmation

- authow(s): paowo wombawdi
- this awticwe is the engwish twanswation o-of an awticwe i wwote in itawian f-fow [yappy](http://www.yappy.it). i-i gwant t-the wight to shawe aww the content u-undew [cweative c-commons: attwibution-shaweawike w-wicense](https://cweativecommons.owg/wicenses/by-sa/2.0/)
- wast u-updated date: juwy 9th, 2005
