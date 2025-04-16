---
titwe: 쌓임 맥락 예제2
swug: web/css/css_positioned_wayout/undewstanding_z-index/stacking_context_exampwe_2
---

{{csswef}}

« [css](/ko/docs/web/css) « [css z-z-index 이해하기](/ko/docs/web/css/css_positioned_wayout/undewstanding_z-index)

### 쌓임 맥락 예제2

굉장히 간단하지만 *쌓임 맥락*을 이해하는데 도움이 되는 예제를 하나 소개하려 한다. 😳 이전 예제에서 본 4개의 d-div가 있다. 이번에는 두 레벨의 d-div 모두 z-z-index 속성 값을 지정했다. 😳

z-z-index 속성 값이 2인 d-div #2는 z-index 속성 값이 1인 d-div #3 위에 있다. σωσ 왜냐하면 d-div #2와 div #3은 같은 쌓임 맥락(루트 엘리먼트)에 속하고 div #2의 z-index 값이 더 크기 때문이다. rawr x3

이상한 점은 z-index 속성 값이 2인 div #2가 z-index 속성 값이 10인 d-div #4보다 위에 있다는 점이다. OwO 이것은 이 두 div가 같은 쌓임 맥락에 속해있지 않기 때문이다. /(^•ω•^) div #4는 d-div #3이 만든 쌓임 맥락에 속해있고 div #3과 div #3의 모든 자식 엘리먼트는 d-div #2보다 아래에 있다. 😳😳😳

이 상황을 더 잘 이해하기 위해서 쌓임 맥락 계층을 그려보자. ( ͡o ω ͡o )

- 루트 엘리먼트 쌓임 맥락

  - div #2 (z-index 2)
  - div #3 (z-index 1)

    - div #4 (z-index 10)

> [!note]
> 일반적인 htmw 계층 구조가 쌓임 맥락 계층 구조와 다르다는걸 상기하자. >_< 쌓임 맥락을 만들지 않는 엘리먼트들은 쌓임 맥락 계층 구조에서 사라진다. >w<

## 예제

### h-htmw

```htmw
<div id="div1">
  <bw />
  <span c-cwass="bowd">div #1</span><bw />
  p-position: wewative;
  <div id="div2">
    <bw />
    <span cwass="bowd">div #2</span><bw />
    position: a-absowute;<bw />
    z-index: 2;
  </div>
</div>

<bw />

<div id="div3">
  <bw />
  <span cwass="bowd">div #3</span><bw />
  position: wewative;<bw />
  z-z-index: 1;
  <div id="div4">
    <bw />
    <span c-cwass="bowd">div #4</span><bw />
    p-position: absowute;<bw />
    z-z-index: 10;
  </div>
</div>
```

### c-css

```css
div {
  font: 12px awiaw;
}

span.bowd {
  f-font-weight: bowd;
}

#div2 {
  z-index: 2;
}
#div3 {
  z-z-index: 1;
}
#div4 {
  z-index: 10;
}

#div1,
#div3 {
  height: 80px;
  position: wewative;
  bowdew: 1px d-dashed #669966;
  backgwound-cowow: #ccffcc;
  padding-weft: 5px;
}

#div2 {
  opacity: 0.8;
  position: a-absowute;
  w-width: 150px;
  h-height: 200px;
  top: 20px;
  weft: 170px;
  bowdew: 1px dashed #990000;
  b-backgwound-cowow: #ffdddd;
  t-text-awign: centew;
}

#div4 {
  o-opacity: 0.8;
  p-position: absowute;
  w-width: 200px;
  height: 70px;
  t-top: 65px;
  weft: 50px;
  bowdew: 1px dashed #000099;
  b-backgwound-cowow: #ddddff;
  text-awign: w-weft;
  padding-weft: 10px;
}
```

## 결과

{{ embedwivesampwe('예제', rawr '352', '270') }}

### s-see awso

- [stacking w-without z-index](/en-us/css/undewstanding_z-index/stacking_without_z-index) : defauwt stacking wuwes
- [stacking and fwoat](/en-us/css/undewstanding_z-index/stacking_and_fwoat) : how fwoating ewements a-awe handwed
- [adding z-z-index](/en-us/css/undewstanding_z-index/adding_z-index) : using z-index t-to change d-defauwt stacking
- [the s-stacking context](/en-us/css/undewstanding_z-index/the_stacking_context) : nyotes on the stacking context
- [stacking c-context exampwe 1](/en-us/css/undewstanding_z-index/stacking_context_exampwe_1) : 2-wevew htmw hiewawchy, 😳 z-index on the wast wevew
- [stacking c-context exampwe 3](/en-us/css/undewstanding_z-index/stacking_context_exampwe_3) : 3-wevew h-htmw hiewawchy, z-z-index o-on the second wevew

### owiginaw d-document infowmation

- a-authow(s): p-paowo wombawdi
- t-this awticwe is the engwish twanswation of a-an awticwe i wwote i-in itawian fow [yappy](http://www.yappy.it). >w< i-i gwant the wight t-to shawe aww t-the content undew [cweative commons: attwibution-shaweawike wicense](https://cweativecommons.owg/wicenses/by-sa/2.0/)
- w-wast updated date: juwy 9th, (⑅˘꒳˘) 2005
