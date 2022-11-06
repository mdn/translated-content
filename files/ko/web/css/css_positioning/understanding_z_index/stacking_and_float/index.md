---
title: floating 엘리먼트의 쌓임
slug: Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_and_float
translation_of: Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_and_float
---
« [CSS](/ko/CSS) « [CSS z-index 이해하기](/ko/CSS/Understanding_z-index)

### floating 엘리먼트의 쌓임

floating 엘리먼트들의 쌓임 순서는 약간 다르다. floating 엘리먼트들은 position이 지정된 블록과 지정되지 않은 블록 사이에 쌓인다.

1. 뿌리 엘리먼트의 배경과 테두리
2. 자식 엘리먼트들은 HTML에서 등장하는 순서대로
3. floating 엘리먼트
4. position이 지정된 자식 엘리먼트들은 HTML에서 등장하는 순서대로

사실 다음 예제에서 보는 것처럼 position이 지정되지 않은 엘리먼트(DIV #4)의 배경과 테두리는 floating 엘리먼트들에 의해 영향을 받지 않는다. 반면 컨텐츠는 영향을 받는다. 이것은 CSS 표준 float 명세에 따른 것이다.

위의 규칙 리스트를 수정하여 이 명세를 포함시켜보자.

1. 뿌리 엘리먼트의 배경과 테두리
2. 자식 엘리먼트들은 HTML에서 등장하는 순서대로
3. floating 엘리먼트
4. inline 자식 엘리먼트는 보통의 흐름대로
5. position이 지정된 자식 엘리먼트들은 HTML에서 등장하는 순서대로

> **참고:** **노트:** 아래 예제에서 position이 지정되지 않은 엘리먼트 이외에는 모든 엘리먼트가 쌓임 순서를 보여주기 위해 반투명하게 설정되었다. 만약 position이 지정되지 않은 엘리먼트 (DIV #4)의 투명도를 낮추면 이상한 일이 일어난다. 배경과 테두리가 (원래에는 floating 엘리먼트 아래에 있어야 함에도 불구하고) floating 엘리먼트와 position이 지정된 엘리먼트 사이에 보이는 것이다. 이것이 명세의 일부인지 아니면 버그인지 확실하지 않다. 투명도를 적용하는것이 새로운 쌓임 맥락(stacking context)를 만드는 것일까?

![Example of stacking rules with floating boxes](/@api/deki/files/911/=Understanding_zindex_02.png)

### Example source code

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head><style type="text/css">

div {
   font: 12px Arial;
}

span.bold { font-weight: bold; }

#absdiv1 {
   opacity: 0.7;
   position: absolute;
   width: 150px;
   height: 200px;
   top: 10px;
   right: 140px;
   border: 1px dashed #990000;
   background-color: #ffdddd;
   text-align: center;
}

#normdiv {
   /*opacity: 0.7;*/
   height: 100px;
   border: 1px dashed #999966;
   background-color: #ffffcc;
   margin: 0px 10px 0px 10px;
   text-align: left;
}

#flodiv1 {
   opacity: 0.7;
   margin: 0px 10px 0px 20px;
   float: left;
   width: 150px;
   height: 200px;
   border: 1px dashed #009900;
   background-color: #ccffcc;
   text-align: center;
}

#flodiv2 {
   opacity: 0.7;
   margin: 0px 20px 0px 10px;
   float: right;
   width: 150px;
   height: 200px;
   border: 1px dashed #009900;
   background-color: #ccffcc;
   text-align: center;
}

#absdiv2 {
   opacity: 0.7;
   position: absolute;
   width: 150px;
   height: 100px;
   top: 130px;
   left: 100px;
   border: 1px dashed #990000;
   background-color: #ffdddd;
   text-align: center;
}

</style></head>

<body>

<br /><br />

<div id="absdiv1">
<br /><span class="bold">DIV #1</span>
<br />position: absolute;
</div>

<div id="flodiv1">
<br /><span class="bold">DIV #2</span>
<br />float: left;
</div>

<div id="flodiv2">
<br /><span class="bold">DIV #3</span>
<br />float: right;
</div>

<br />

<div id="normdiv">
<br /><span class="bold">DIV #4</span>
<br />no positioning
</div>

<div id="absdiv2">
<br /><span class="bold">DIV #5</span>
<br />position: absolute;
</div>

</body></html>
```

### See also

- [Stacking without z-index](/en/CSS/Understanding_z-index/Stacking_without_z-index) : Default stacking rules
- [Adding z-index](/en/CSS/Understanding_z-index/Adding_z-index) : Using z-index to change default stacking
- [The stacking context](/en/CSS/Understanding_z-index/The_stacking_context) : Notes on the stacking context
- [Stacking context example 1](/en/CSS/Understanding_z-index/Stacking_context_example_1) : 2-level HTML hierarchy, z-index on the last level
- [Stacking context example 2](/en/CSS/Understanding_z-index/Stacking_context_example_2) : 2-level HTML hierarchy, z-index on all levels
- [Stacking context example 3](/en/CSS/Understanding_z-index/Stacking_context_example_3) : 3-level HTML hierarchy, z-index on the second level

### Original Document Information

- Author(s): Paolo Lombardi
- This article is the english translation of an article I wrote in italian for [YappY](http://www.yappy.it). I grant the right to share all the content under [Creative Commons: Attribution-Sharealike license](http://creativecommons.org/licenses/by-sa/2.0/)
- Last Updated Date: July 9th, 2005
