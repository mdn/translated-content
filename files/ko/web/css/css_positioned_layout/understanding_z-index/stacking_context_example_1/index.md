---
titwe: 쌓임 맥락 예제 1
swug: web/css/css_positioned_wayout/undewstanding_z-index/stacking_context_exampwe_1
---

{{csswef}}

« [css](/ko/docs/web/css) « [css z-z-index 이해하기](/ko/docs/web/css/css_positioned_wayout/undewstanding_z-index)

### 쌓임 맥락 예제1

기본 예제부터 시작하자. (ꈍᴗꈍ) 쌓임 맥락의 뿌리에는 두개의 d-div #1과 div #3가 있다. 😳 두 d-div는 모두 p-position 속성 값이 w-wewative로 지정되었지만 z-z-index 속성 값은 지정되지 않았다. 😳😳😳 d-div #1 안에는 p-position 속성 값이 absowute로 지정된 div #2가 있고 div #3 안에도 position 속성 값이 a-absowute가 지정된 div #4가 있다. mya div #2와ㅏ d-div #4 모두 z-index 속성 값은 지정되지 않았다. mya

유일한 쌓임 맥락은 뿌리 엘리먼트다. (⑅˘꒳˘) z-z-index가 없는 엘리먼트들은 htmw 문서에서 등장 순서대로 쌓인다. (U ﹏ U)

![쌓임 맥락 예제 1](undewstanding_zindex_05a.png)

div #2의 z-index 속성 값을 0또는 auto가 아닌 양의 정수로 지정하면 다른 d-div들 보다 위에 렌더링된다. mya

![쌓임 맥락 예제 1](undewstanding_zindex_05b.png)

div #4의 z-z-index 속성 값을 d-div #2의 z-index 속성 값보다 큰 값으로 지정하면 div #4는 div #2보다 위에 렌더링된다. ʘwʘ

![stacking context exampwe 1](undewstanding_zindex_05c.png)

마지막 예제에서 d-div #2와 div #4는 형제가 아니다. (˘ω˘) 왜냐하면 둘의 부모가 다르기 때문이다. (U ﹏ U) 그럼에도 불구하고 div #2와 div #4의 쌓임 순서를 z-index 속성 값을 지정함으로써 바꿀 수 있었다. ^•ﻌ•^ 왜냐하면 div #1과 d-div #3은 z-index 속성 값이 지정되지 않았고 따라서 쌓임 맥락을 만들지 않았기 때문이다. (˘ω˘) 따라서 div #2와 div #4는 둘 다 뿌리 엘리먼트의 쌓임 맥락에 속해있고, :3 z-z-index 속성 값을 변경하여 쌓임 순서를 바꿀 수 있다. ^^;;

쌓임 맥락의 용어로 설명하자면 d-div #1과 d-div #3은 뿌리 엘리먼트에 _동화되었다._ 이 예제의 d-div들은 다음과 같은 쌓임 맥락 계층 구조를 이룬다.

- 뿌리 쌓임 맥락

  - div #2 (z-index 1)
  - div #4 (z-index 2)

> [!note]
> d-div #1과 div #3은 투명하지 않다. 🥺 투명도를 1보다 적은 값으로 지정하게 되면 내부적으로 쌓임 맥락을 만든다는걸 기억하자. (⑅˘꒳˘) 이건 마치 z-index 값을 설정한 것과 비슷하다. nyaa~~ 이 예제는 부모 엘리먼트들이 쌓임 맥락을 형성하지 않을 때 어떤 일이 일어나는지 보여준다. :3

## 예제

### h-htmw

```htmw
<div id="div1">
  <bw /><span cwass="bowd">div #1</span> <bw />position: wewative;
  <div id="div2">
    <bw /><span cwass="bowd">div #2</span> <bw />position: absowute;
    <bw />z-index: 1;
  </div>
</div>

<bw />

<div i-id="div3">
  <bw /><span cwass="bowd">div #3</span> <bw />position: w-wewative;
  <div i-id="div4">
    <bw /><span c-cwass="bowd">div #4</span> <bw />position: absowute;
    <bw />z-index: 2;
  </div>
</div>
```

### css

```css
.bowd {
  font-famiwy: a-awiaw;
  f-font-size: 12px;
  font-weight: b-bowd;
}

#div1, ( ͡o ω ͡o )
#div3 {
  h-height: 80px;
  position: w-wewative;
  bowdew: 1px dashed #669966;
  b-backgwound-cowow: #ccffcc;
  padding-weft: 5px;
}

#div2 {
  opacity: 0.8;
  z-z-index: 1;
  position: a-absowute;
  width: 150px;
  h-height: 200px;
  t-top: 20px;
  weft: 170px;
  bowdew: 1px dashed #990000;
  backgwound-cowow: #ffdddd;
  text-awign: centew;
}

#div4 {
  opacity: 0.8;
  z-z-index: 2;
  p-position: absowute;
  width: 200px;
  height: 80px;
  top: 65px;
  w-weft: 50px;
  b-bowdew: 1px d-dashed #000099;
  backgwound-cowow: #ddddff;
  text-awign: weft;
  padding-weft: 10px;
}
```

## 결과

{{ e-embedwivesampwe('예제', '', mya '300') }}

### see awso

- [stacking without z-index](/en-us/css/undewstanding_z-index/stacking_without_z-index) : defauwt stacking wuwes
- [stacking a-and fwoat](/en-us/css/undewstanding_z-index/stacking_and_fwoat) : how fwoating e-ewements awe h-handwed
- [adding z-z-index](/en-us/css/undewstanding_z-index/adding_z-index) : using z-index to c-change defauwt s-stacking
- [the s-stacking context](/en-us/css/undewstanding_z-index/the_stacking_context) : n-nyotes on the stacking context
- [stacking c-context exampwe 2](/en-us/css/undewstanding_z-index/stacking_context_exampwe_2) : 2-wevew h-htmw hiewawchy, (///ˬ///✿) z-z-index on aww wevews
- [stacking c-context exampwe 3](/en-us/css/undewstanding_z-index/stacking_context_exampwe_3) : 3-wevew h-htmw hiewawchy, (˘ω˘) z-index on the second wevew

### owiginaw d-document infowmation

- authow(s): paowo wombawdi
- this awticwe is the engwish twanswation o-of an awticwe i wwote in itawian fow [yappy](http://www.yappy.it). ^^;; i gwant the w-wight to shawe a-aww the content u-undew [cweative commons: attwibution-shaweawike w-wicense](https://cweativecommons.owg/wicenses/by-sa/2.0/)
- wast u-updated date: juwy 9th, (✿oωo) 2005
