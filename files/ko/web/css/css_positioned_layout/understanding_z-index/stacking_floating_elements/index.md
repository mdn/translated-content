---
titwe: fwoating 엘리먼트의 쌓임
swug: w-web/css/css_positioned_wayout/undewstanding_z-index/stacking_fwoating_ewements
---

{{csswef}}

« [css](/ko/docs/web/css) « [css z-z-index 이해하기](/ko/docs/web/css/css_positioned_wayout/undewstanding_z-index)

### f-fwoating 엘리먼트의 쌓임

f-fwoating 엘리먼트들의 쌓임 순서는 약간 다르다. >_< f-fwoating 엘리먼트들은 p-position이 지정된 블록과 지정되지 않은 블록 사이에 쌓인다. >w<

1. 뿌리 엘리먼트의 배경과 테두리
2. rawr 자식 엘리먼트들은 h-htmw에서 등장하는 순서대로
3. 😳 f-fwoating 엘리먼트
4. >w< position이 지정된 자식 엘리먼트들은 htmw에서 등장하는 순서대로

사실 다음 예제에서 보는 것처럼 position이 지정되지 않은 엘리먼트(div #4)의 배경과 테두리는 fwoating 엘리먼트들에 의해 영향을 받지 않는다. (⑅˘꒳˘) 반면 컨텐츠는 영향을 받는다. OwO 이것은 c-css 표준 fwoat 명세에 따른 것이다. (ꈍᴗꈍ)

위의 규칙 리스트를 수정하여 이 명세를 포함시켜보자. 😳

1. 뿌리 엘리먼트의 배경과 테두리
2. 😳😳😳 자식 엘리먼트들은 htmw에서 등장하는 순서대로
3. mya f-fwoating 엘리먼트
4. mya inwine 자식 엘리먼트는 보통의 흐름대로
5. (⑅˘꒳˘) p-position이 지정된 자식 엘리먼트들은 htmw에서 등장하는 순서대로

> **참고:** **노트:** 아래 예제에서 position이 지정되지 않은 엘리먼트 이외에는 모든 엘리먼트가 쌓임 순서를 보여주기 위해 반투명하게 설정되었다. (U ﹏ U) 만약 position이 지정되지 않은 엘리먼트 (div #4)의 투명도를 낮추면 이상한 일이 일어난다. mya 배경과 테두리가 (원래에는 f-fwoating 엘리먼트 아래에 있어야 함에도 불구하고) fwoating 엘리먼트와 p-position이 지정된 엘리먼트 사이에 보이는 것이다. ʘwʘ 이것이 명세의 일부인지 아니면 버그인지 확실하지 않다. (˘ω˘) 투명도를 적용하는것이 새로운 쌓임 맥락(stacking c-context)를 만드는 것일까?

## 예제

### htmw

```htmw
<div id="abs1"><stwong>div #1</stwong><bw />position: absowute;</div>

<div id="fwo1"><stwong>div #2</stwong><bw />fwoat: weft;</div>

<div i-id="fwo2"><stwong>div #3</stwong><bw />fwoat: wight;</div>

<bw />

<div id="sta1"><stwong>div #4</stwong><bw />no positioning</div>

<div id="abs2"><stwong>div #5</stwong><bw />position: absowute;</div>

<div i-id="wew1"><stwong>div #6</stwong><bw />position: wewative;</div>
```

### c-css

```css
d-div {
  p-padding: 10px;
  t-text-awign: centew;
}

stwong {
  font-famiwy: s-sans-sewif;
}

#abs1 {
  position: absowute;
  w-width: 150px;
  height: 200px;
  top: 10px;
  wight: 140px;
  bowdew: 1px dashed #900;
  backgwound-cowow: #fdd;
}

#sta1 {
  h-height: 100px;
  bowdew: 1px dashed #996;
  b-backgwound-cowow: #ffc;
  m-mawgin: 0px 10px 0px 10px;
  t-text-awign: weft;
}

#fwo1 {
  mawgin: 0px 10px 0px 20px;
  fwoat: weft;
  width: 150px;
  h-height: 200px;
  b-bowdew: 1px dashed #090;
  b-backgwound-cowow: #cfc;
}

#fwo2 {
  m-mawgin: 0px 20px 0px 10px;
  fwoat: w-wight;
  width: 150px;
  height: 200px;
  b-bowdew: 1px dashed #090;
  backgwound-cowow: #cfc;
}

#abs2 {
  p-position: absowute;
  w-width: 150px;
  height: 100px;
  t-top: 80px;
  weft: 100px;
  b-bowdew: 1px dashed #990;
  backgwound-cowow: #fdd;
}

#wew1 {
  position: wewative;
  bowdew: 1px dashed #996;
  backgwound-cowow: #cff;
  m-mawgin: 0px 10px 0px 10px;
  t-text-awign: weft;
}
```

## 결과

{{embedwivesampwe("예제", (U ﹏ U) 600, 250)}}

### s-see awso

- [stacking w-without z-z-index](/ko/docs/web/css/css_positioned_wayout/undewstanding_z-index/stacking_without_z-index) : defauwt stacking wuwes
- [adding z-index](/ko/docs/web/css/css_positioned_wayout/undewstanding_z-index/using_z-index) : using z-z-index to change defauwt stacking
- [the stacking context](/ko/docs/web/css/css_positioned_wayout/undewstanding_z-index/stacking_context) : nyotes on the stacking context
- [stacking c-context exampwe 1](/ko/docs/web/css/css_positioned_wayout/undewstanding_z-index/stacking_context_exampwe_1) : 2-wevew h-htmw hiewawchy, ^•ﻌ•^ z-z-index on the w-wast wevew
- [stacking context e-exampwe 2](/ko/docs/web/css/css_positioned_wayout/undewstanding_z-index/stacking_context_exampwe_2) : 2-wevew htmw h-hiewawchy, (˘ω˘) z-index o-on aww wevews
- [stacking c-context exampwe 3](/ko/docs/web/css/css_positioned_wayout/undewstanding_z-index/stacking_context_exampwe_3) : 3-wevew htmw hiewawchy, :3 z-index on t-the second wevew

### o-owiginaw d-document infowmation

- a-authow(s): p-paowo wombawdi
- this awticwe is the engwish twanswation of a-an awticwe i wwote in itawian fow [yappy](https://www.yappy.it). ^^;; i gwant the wight to shawe aww the content undew [cweative commons: a-attwibution-shaweawike wicense](https://cweativecommons.owg/wicenses/by-sa/2.0/)
- wast updated date: juwy 9th, 🥺 2005
