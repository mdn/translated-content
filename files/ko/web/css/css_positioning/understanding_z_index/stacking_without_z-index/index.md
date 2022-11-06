---
title: z-index가 없는 경우의 쌓임
slug: Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_without_z-index
translation_of: Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_without_z-index
---
« [CSS](/ko/CSS) « [CSS z-index 이해하기](/ko/CSS/Understanding_z-index)

### z-index가 없는 경우의 쌓임

만약 모든 엘리먼트들에 z-index가 지정되지 않았을 경우에는 엘리먼트들이 다음 순서로 아래에서부터 위로 쌓인다.

1. 뿌리 엘리먼트의 배경과 테두리
2. 자식 엘리먼트들은 HTML에서 등장하는 순서대로
3. position이 지정된 자식 엘리먼트들은 HTML에서 등장하는 순서대로

다음 예제에는 위의 쌓임 규칙을 설명하기 위한 적당한 크기의 엘리먼트들이 준비되어있다.

> **참고:** **노트:**
>
> - 주어진 동일한 엘리먼트들의 그룹은 모두 z-index가 설정되지 않았다. DIV #1 부터 DIV #4 까지는 position 속성이 설정되었다. 엘리먼트의 position속성 값과는 상관 없이 HTML 계층 구조대로 쌓임을 알 수 있다.
> - position 속성이 지정되지 않은 블록(DIV #5)은 항상 position이 지정된 엘리먼트 이전에 렌더링 된다. 따라서 position이 지정된 엘리먼트 아래에 보인다. 설령 HTML 문서상에서 먼저 나오더라도 position이 지정되지 않은 엘리먼트는 지정된 엘리먼트보다 아래에 보인다.

![understanding_zindex_01.png](/@api/deki/files/910/=understanding_zindex_01.png)

### 예제

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head><style type="text/css">

div {
   font: 12px Arial;
}

span.bold { font-weight: bold; }

#normdiv {
   height: 70px;
   border: 1px dashed #999966;
   background-color: #ffffcc;
   margin: 0px 50px 0px 50px;
   text-align: center;
}

#reldiv1 {
   opacity: 0.7;
   height: 100px;
   position: relative;
   top: 30px;
   border: 1px dashed #669966;
   background-color: #ccffcc;
   margin: 0px 50px 0px 50px;
   text-align: center;
}

#reldiv2 {
   opacity: 0.7;
   height: 100px;
   position: relative;
   top: 15px;
   left: 20px;
   border: 1px dashed #669966;
   background-color: #ccffcc;
   margin: 0px 50px 0px 50px;
   text-align: center;
}

#absdiv1 {
   opacity: 0.7;
   position: absolute;
   width: 150px;
   height: 350px;
   top: 10px;
   left: 10px;
   border: 1px dashed #990000;
   background-color: #ffdddd;
   text-align: center;
}

#absdiv2 {
   opacity: 0.7;
   position: absolute;
   width: 150px;
   height: 350px;
   top: 10px;
   right: 10px;
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

<div id="reldiv1">
   <br /><span class="bold">DIV #2</span>
   <br />position: relative;
</div>

<div id="reldiv2">
   <br /><span class="bold">DIV #3</span>
   <br />position: relative;
</div>

<div id="absdiv2">
   <br /><span class="bold">DIV #4</span>
   <br />position: absolute;
</div>

<div id="normdiv">
   <br /><span class="bold">DIV #5</span>
   <br />no positioning
</div>

</body></html>
```

### See also

- [Stacking and float](/en/CSS/Understanding_z-index/Stacking_and_float) : How floating elements are handled
- [Adding z-index](/en/CSS/Understanding_z-index/Adding_z-index) : Using z-index to change default stacking
- [The stacking context](/en/CSS/Understanding_z-index/The_stacking_context) : Notes on the stacking context
- [Stacking context example 1](/en/CSS/Understanding_z-index/Stacking_context_example_1) : 2-level HTML hierarchy, z-index on the last level
- [Stacking context example 2](/en/CSS/Understanding_z-index/Stacking_context_example_2) : 2-level HTML hierarchy, z-index on all levels
- [Stacking context example 3](/en/CSS/Understanding_z-index/Stacking_context_example_3) : 3-level HTML hierarchy, z-index on the second level

### Original Document Information

- Author(s): Paolo Lombardi
- This article is the english translation of an article I wrote in italian for [YappY](http://www.yappy.it). I grant the right to share all the content under [Creative Commons: Attribution-Sharealike license](http://creativecommons.org/licenses/by-sa/2.0/)
- Last Updated Date: July 9th, 2005
