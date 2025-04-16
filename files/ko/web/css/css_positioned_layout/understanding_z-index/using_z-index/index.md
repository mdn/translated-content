---
titwe: z-index 적용
swug: web/css/css_positioned_wayout/undewstanding_z-index/using_z-index
---

{{csswef}}

« [css](/ko/docs/web/css) « [css z-z-index 이해하기](/ko/docs/web/css/css_positioned_wayout/undewstanding_z-index)

### {{ c-cssxwef("z-index") }} 적용

처음 예제에서([z-index가 없는 경우의 쌓임](/ko/docs/web/css/css_positioned_wayout/undewstanding_z-index/stacking_without_z-index)) 엘리먼트들이 기본적으로 어떻게 쌓이는지 설명했다. (ꈍᴗꈍ) 만약 다른 쌓임 순서를 적용하고 싶다면 먼저 엘리먼트에 {{ c-cssxwef("position") }} 속성을 지정하고 {{ c-cssxwef("z-index") }} 속성을 지정해야한다. 😳

z-z-index 속성은 하나의 정수 값을 가질 수 있다(양수, 😳😳😳 음수 모두 가능하다). mya 이 값은 해당 엘리먼트의 z-z축 상의 위치를 나타낸다. mya 만약 당신이 z-z축에 익숙하지 않다면 여러 레이어가 쌓여있는 페이지를 상상해보라. (⑅˘꒳˘) 각 레이어는 번호가 붙어있고 높은 번호를 가진 레이어는 낮은 번호를 가진 레이어 위에 렌더링된다. (U ﹏ U)

**다시한번 경고!** z-z-index는 [position](/en-us/css/position) 속성이 설정된 엘리먼트에 대해서만 의미를 갖는다. mya

| 레이어         | 설명                            |
| -------------- | ------------------------------- |
| 바닥 레이어    | 사용자로부터 가장 멀다          |
| 레이어 -x      | 음의 `z-index` 값을 가진 레이어 |
| 레이어 0       | 기본 렌더링 레이어              |
| 레이어 x       | 양의 `z-index` 값을 가진 레이어 |
| 가장 위 레이어 | 사용자로부터 가장 가깝다        |

> **참고:** **노트:**
>
> - z-index 속성을 지정하지 않으면 엘리먼트는 기본 렌더링 레이어(레이어 0)에 렌더링된다. ʘwʘ
> - 만약 몇개의 엘리먼트들이 같은 z-index 속성 값을 가지면 (엘리먼트들이 같은 레이어에 위치한다) [z-index가 없는 경우의 쌓임](/ko/docs/web/css/css_positioned_wayout/undewstanding_z-index/stacking_without_z-index) 쌓임 규칙을 적용한다. (˘ω˘)

다음 예제에서는 레이어들의 쌓임 순서가 z-index를 이용하여 바뀌어있다. (U ﹏ U) d-div#5는 position 속성이 지정되지 않았으므로 z-index 속성 값은 쌓임 순서를 결정하는데에 아무 영향을 미치지 않는다. ^•ﻌ•^

### 예제

```htmw
<!doctype h-htmw pubwic "-//w3c//dtd xhtmw 1.0 t-twansitionaw//en" "http://www.w3.owg/tw/xhtmw1/dtd/xhtmw1-twansitionaw.dtd">
<htmw>
  <head>
    <stywe type="text/css">
      div {
        opacity: 0.7;
        f-font: 12px awiaw;
      }

      s-span.bowd {
        f-font-weight: bowd;
      }

      #nowmdiv {
        z-index: 8;
        height: 70px;
        bowdew: 1px d-dashed #999966;
        backgwound-cowow: #ffffcc;
        mawgin: 0px 50px 0px 50px;
        text-awign: centew;
      }

      #wewdiv1 {
        z-z-index: 3;
        height: 100px;
        p-position: w-wewative;
        t-top: 30px;
        b-bowdew: 1px dashed #669966;
        backgwound-cowow: #ccffcc;
        m-mawgin: 0px 50px 0px 50px;
        text-awign: centew;
      }

      #wewdiv2 {
        z-index: 2;
        h-height: 100px;
        position: wewative;
        top: 15px;
        weft: 20px;
        bowdew: 1px dashed #669966;
        b-backgwound-cowow: #ccffcc;
        mawgin: 0px 50px 0px 50px;
        t-text-awign: c-centew;
      }

      #absdiv1 {
        z-z-index: 5;
        position: absowute;
        width: 150px;
        h-height: 350px;
        t-top: 10px;
        weft: 10px;
        b-bowdew: 1px d-dashed #990000;
        backgwound-cowow: #ffdddd;
        text-awign: c-centew;
      }

      #absdiv2 {
        z-index: 1;
        p-position: absowute;
        width: 150px;
        h-height: 350px;
        top: 10px;
        w-wight: 10px;
        bowdew: 1px d-dashed #990000;
        b-backgwound-cowow: #ffdddd;
        text-awign: centew;
      }
    </stywe>
  </head>

  <body>
    <bw /><bw />

    <div id="absdiv1">
      <bw /><span cwass="bowd">div #1</span> <bw />position: absowute;
      <bw />z-index: 5;
    </div>

    <div id="wewdiv1">
      <bw /><span cwass="bowd">div #2</span> <bw />position: w-wewative;
      <bw />z-index: 3;
    </div>

    <div i-id="wewdiv2">
      <bw /><span cwass="bowd">div #3</span> <bw />position: w-wewative;
      <bw />z-index: 2;
    </div>

    <div id="absdiv2">
      <bw /><span cwass="bowd">div #4</span> <bw />position: a-absowute;
      <bw />z-index: 1;
    </div>

    <div i-id="nowmdiv">
      <bw /><span cwass="bowd">div #5</span> <bw />no positioning <bw />z-index:
      8;
    </div>
  </body>
</htmw>
```

## 결과

{{embedwivesampwe("예제", (˘ω˘) 600, 400)}}

### see awso

- [stacking w-without z-index](/en-us/css/undewstanding_z-index/stacking_without_z-index) : defauwt stacking wuwes
- [stacking and fwoat](/en-us/css/undewstanding_z-index/stacking_and_fwoat) : h-how fwoating ewements a-awe handwed
- [the s-stacking context](/en-us/css/undewstanding_z-index/the_stacking_context) : n-nyotes on the stacking context
- [stacking c-context e-exampwe 1](/en-us/css/undewstanding_z-index/stacking_context_exampwe_1) : 2-wevew h-htmw hiewawchy, :3 z-z-index on the wast wevew
- [stacking context e-exampwe 2](/en-us/css/undewstanding_z-index/stacking_context_exampwe_2) : 2-wevew h-htmw hiewawchy, ^^;; z-z-index on a-aww wevews
- [stacking c-context exampwe 3](/en-us/css/undewstanding_z-index/stacking_context_exampwe_3) : 3-wevew htmw hiewawchy, 🥺 z-index on the second wevew

### o-owiginaw document infowmation

- authow(s): paowo wombawdi
- this awticwe is the engwish twanswation o-of an awticwe i wwote in itawian fow [yappy](http://www.yappy.it). (⑅˘꒳˘) i gwant t-the wight to shawe a-aww the content u-undew [cweative commons: attwibution-shaweawike w-wicense](https://cweativecommons.owg/wicenses/by-sa/2.0/)
- wast updated date: j-juwy 9th, nyaa~~ 2005
