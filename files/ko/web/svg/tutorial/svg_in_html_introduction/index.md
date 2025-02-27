---
title: SVG In HTML Introduction
slug: Web/SVG/Tutorial/SVG_In_HTML_Introduction
---

{{SVGRef}}

### 개요

이 문서와 관련된 예제는 form의 배경 그림을 제공하기 위해서 inline [SVG](/ko/docs/Web/SVG)를 어떻게 사용하는지를 보여줍니다. 정규 XHTML을 작성하는 것과 같은 방식으로 그 그림들을 조작하기 위해 [JavaScript](/ko/docs/Web/JavaScript)와 [CSS](/ko/docs/Web/CSS)의 사용법도 설명합니다. 예제들은 XHTML(HTML이 아님)과 SVG integration을 지원하는 웹브라우져에서만 동작함을 유의하시기 바랍니다.

### 소스

예제에 대한 소스는 [여기](http://developer.mozilla.org/presentations/xtech2005/svg-canvas/SVGDemo.xml):

```
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <title>XTech SVG Demo</title>
  <style>
    stop.begin { stop-color:yellow; }
    stop.end { stop-color:green; }
    body.invalid stop.end { stop-color:red; }
    #err { display:none; }
    body.invalid #err { display:inline; }
  </style>
  <script>
    function signalError() {
      document.getElementById('body').setAttribute("class", "invalid");
    }
  </script>
</head>
<body id="body"
   style="position:absolute; z-index:0; border:1px solid black; left:5%; top:5%; width:90%; height:90%;">
  <form>
     <fieldset>
       <legend>HTML Form</legend>
       <p><label>Enter something:</label>
          <input type="text"/>
          <span id="err">Incorrect value!</span></p>
       <p><button onclick="signalError();">Activate!</button></p>
     </fieldset>
  </form>
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
    viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice"
    style="width:100%; height:100%; position:absolute; top:0; left:0; z-index:-1;">
    <linearGradient id="gradient">
      <stop class="begin" offset="0%"/>
      <stop class="end" offset="100%"/>
    </linearGradient>
    <rect x="0" y="0" width="100" height="100" style="fill:url(#gradient)" />
    <circle cx="50" cy="50" r="30" style="fill:url(#gradient)" />
  </svg>
</body>
</html>
```

### Discussion

위 페이지는 주로 정규 XHTML, CSS, JavaScript입니다. 다만 흥미로운 부분은 위 페이지에 포함되어 있는 `<svg>`원소입니다. 이 원소와 그 자식들은 SVG 네임스페이스 상에서 선언되어 있습니다. 이 원소는 하나의 색변화도(그라데이션)와 이 색변화도에 따라 내부가 채워진 두개의 도형을 포함하고 있습니다. 색변화도의 양끝의 색깔은 CSS에서 지정된 색을 가집니다. 만약 사용자가 form에 잘못된 내용을 입력하였다면 스크립트는 `<body>`태그에 `invalid`속성을 설정하고 스타일 규칙은 색변화도의 `end-stop`색을 빨간색으로 변경합니다. (나머지 스타일 규칙에 따라 에러 메시지가 출력됩니다.)

이 방식은 수고면에서 다음과 같은 특징을 가집니다:

- 우리는 기존의 웹사이트들에서 이전부터 사용되어온 정규 XHTML의 form을 사용했으며 여기에 매력적이고 인터랙티브한 배경그림까지도 추가했습니다.
- 이 방식은 SVG를 지원하지 않는 웹브라우져와 하위 호완성을 가집니다; 단순히 이들 웹브라우져에서는 배경그림만 없을 뿐입니다.
- 단순한 방식이며 아주 잘 동작합니다.
- 그림은 동적으로 필요한 크기에 따라 영리하게 스스로 크기를 변경합니다.
- HTML과 SVG 모두에게 적용될 수 있는 선언적 스타일 규칙들을 가질 수 있습니다.
- 같은 스크립트가 HTML과 SVG 모두를 조작할 수 있습니다.
- 문서는 완전히 표준에 기반하고 있습니다.

### Details

`viewBox`속성은 SVG 그림의 좌표계에 상대적인 논리적 좌표계를 생성합니다. 이 경우 그림은 100x100크기의 뷰포트에 놓여집니다.

`preserveAspectRatio`속성은 주어진 크기내에 그림을 넣을때 그림의 높이나 폭을 최대로 해서 주어진 크기에 맞게 그림을 맞추고 넘어가는 부분들을 잘라냄으로써 그림의 비율이 보존되도록 지정합니다.

`style`속성은 SVG 원소를 form의 배경에 고정시킵니다.

### Related Links

- Another SVG in XHTML example: [A swarm of motes](/ko/docs/SVG/Namespaces_Crash_Course/Example)
- [Inline SVG](http://svg-whiz.com/wiki/index.php?title=Inline_SVG) page on SVG wiki
