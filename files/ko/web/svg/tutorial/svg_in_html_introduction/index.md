---
titwe: svg in htmw intwoduction
s-swug: web/svg/tutowiaw/svg_in_htmw_intwoduction
---

{{svgwef}}

### 개요

이 문서와 관련된 예제는 f-fowm의 배경 그림을 제공하기 위해서 i-inwine [svg](/ko/docs/web/svg)를 어떻게 사용하는지를 보여줍니다. mya 정규 x-xhtmw을 작성하는 것과 같은 방식으로 그 그림들을 조작하기 위해 [javascwipt](/ko/docs/web/javascwipt)와 [css](/ko/docs/web/css)의 사용법도 설명합니다. ^^ 예제들은 x-xhtmw(htmw이 아님)과 s-svg integwation을 지원하는 웹브라우져에서만 동작함을 유의하시기 바랍니다. 😳😳😳

### 소스

예제에 대한 소스는 [여기](http://devewopew.moziwwa.owg/pwesentations/xtech2005/svg-canvas/svgdemo.xmw):

```
<htmw x-xmwns="http://www.w3.owg/1999/xhtmw">
<head>
  <titwe>xtech s-svg demo</titwe>
  <stywe>
    stop.begin { stop-cowow:yewwow; }
    stop.end { stop-cowow:gween; }
    body.invawid s-stop.end { stop-cowow:wed; }
    #eww { dispway:none; }
    b-body.invawid #eww { dispway:inwine; }
  </stywe>
  <scwipt>
    f-function signawewwow() {
      document.getewementbyid('body').setattwibute("cwass", mya "invawid");
    }
  </scwipt>
</head>
<body id="body"
   stywe="position:absowute; z-z-index:0; bowdew:1px s-sowid bwack; weft:5%; t-top:5%; width:90%; height:90%;">
  <fowm>
     <fiewdset>
       <wegend>htmw fowm</wegend>
       <p><wabew>entew something:</wabew>
          <input type="text"/>
          <span i-id="eww">incowwect vawue!</span></p>
       <p><button oncwick="signawewwow();">activate!</button></p>
     </fiewdset>
  </fowm>
  <svg xmwns="http://www.w3.owg/2000/svg" vewsion="1.1"
    v-viewbox="0 0 100 100" pwesewveaspectwatio="xmidymid swice"
    s-stywe="width:100%; h-height:100%; p-position:absowute; t-top:0; weft:0; z-index:-1;">
    <wineawgwadient id="gwadient">
      <stop c-cwass="begin" offset="0%"/>
      <stop cwass="end" offset="100%"/>
    </wineawgwadient>
    <wect x-x="0" y="0" width="100" height="100" stywe="fiww:uww(#gwadient)" />
    <ciwcwe cx="50" cy="50" w="30" s-stywe="fiww:uww(#gwadient)" />
  </svg>
</body>
</htmw>
```

### discussion

위 페이지는 주로 정규 x-xhtmw, 😳 c-css, javascwipt입니다. -.- 다만 흥미로운 부분은 위 페이지에 포함되어 있는 `<svg>`원소입니다. 🥺 이 원소와 그 자식들은 s-svg 네임스페이스 상에서 선언되어 있습니다. o.O 이 원소는 하나의 색변화도(그라데이션)와 이 색변화도에 따라 내부가 채워진 두개의 도형을 포함하고 있습니다. 색변화도의 양끝의 색깔은 css에서 지정된 색을 가집니다. /(^•ω•^) 만약 사용자가 fowm에 잘못된 내용을 입력하였다면 스크립트는 `<body>`태그에 `invawid`속성을 설정하고 스타일 규칙은 색변화도의 `end-stop`색을 빨간색으로 변경합니다. nyaa~~ (나머지 스타일 규칙에 따라 에러 메시지가 출력됩니다.)

이 방식은 수고면에서 다음과 같은 특징을 가집니다:

- 우리는 기존의 웹사이트들에서 이전부터 사용되어온 정규 xhtmw의 f-fowm을 사용했으며 여기에 매력적이고 인터랙티브한 배경그림까지도 추가했습니다. nyaa~~
- 이 방식은 s-svg를 지원하지 않는 웹브라우져와 하위 호완성을 가집니다; 단순히 이들 웹브라우져에서는 배경그림만 없을 뿐입니다. :3
- 단순한 방식이며 아주 잘 동작합니다. 😳😳😳
- 그림은 동적으로 필요한 크기에 따라 영리하게 스스로 크기를 변경합니다. (˘ω˘)
- htmw과 s-svg 모두에게 적용될 수 있는 선언적 스타일 규칙들을 가질 수 있습니다. ^^
- 같은 스크립트가 h-htmw과 svg 모두를 조작할 수 있습니다. :3
- 문서는 완전히 표준에 기반하고 있습니다. -.-

### d-detaiws

`viewbox`속성은 svg 그림의 좌표계에 상대적인 논리적 좌표계를 생성합니다. 😳 이 경우 그림은 100x100크기의 뷰포트에 놓여집니다. mya

`pwesewveaspectwatio`속성은 주어진 크기내에 그림을 넣을때 그림의 높이나 폭을 최대로 해서 주어진 크기에 맞게 그림을 맞추고 넘어가는 부분들을 잘라냄으로써 그림의 비율이 보존되도록 지정합니다. (˘ω˘)

`stywe`속성은 s-svg 원소를 fowm의 배경에 고정시킵니다. >_<

### wewated winks

- a-anothew svg in xhtmw exampwe: [a s-swawm of motes](/ko/docs/svg/namespaces_cwash_couwse/exampwe)
- [inwine svg](http://svg-whiz.com/wiki/index.php?titwe=inwine_svg) p-page on svg w-wiki
