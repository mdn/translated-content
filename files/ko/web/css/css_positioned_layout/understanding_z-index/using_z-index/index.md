---
title: z-index 적용
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index/Using_z-index
---

{{CSSRef}}

« [CSS](/ko/CSS) « [CSS z-index 이해하기](/ko/CSS/Understanding_z-index)

### {{ cssxref("z-index") }} 적용

처음 예제에서([z-index가 없는 경우의 쌓임](/ko/CSS/Understanding_z-index/Stacking_without_z-index)) 엘리먼트들이 기본적으로 어떻게 쌓이는지 설명했다. 만약 다른 쌓임 순서를 적용하고 싶다면 먼저 엘리먼트에 {{ cssxref("position") }} 속성을 지정하고 {{ cssxref("z-index") }} 속성을 지정해야한다.

z-index 속성은 하나의 정수 값을 가질 수 있다(양수, 음수 모두 가능하다). 이 값은 해당 엘리먼트의 z축 상의 위치를 나타낸다. 만약 당신이 z축에 익숙하지 않다면 여러 레이어가 쌓여있는 페이지를 상상해보라. 각 레이어는 번호가 붙어있고 높은 번호를 가진 레이어는 낮은 번호를 가진 레이어 위에 렌더링된다.

**다시한번 경고!** z-index는 [position](/en/CSS/position) 속성이 설정된 엘리먼트에 대해서만 의미를 갖는다.

| 레이어         | 설명                            |
| -------------- | ------------------------------- |
| 바닥 레이어    | 사용자로부터 가장 멀다          |
| 레이어 -X      | 음의 `z-index` 값을 가진 레이어 |
| 레이어 0       | 기본 렌더링 레이어              |
| 레이어 X       | 양의 `z-index` 값을 가진 레이어 |
| 가장 위 레이어 | 사용자로부터 가장 가깝다        |

> **참고:** **노트:**
>
> - z-index 속성을 지정하지 않으면 엘리먼트는 기본 렌더링 레이어(레이어 0)에 렌더링된다.
> - 만약 몇개의 엘리먼트들이 같은 z-index 속성 값을 가지면 (엘리먼트들이 같은 레이어에 위치한다) [z-index가 없는 경우의 쌓임](/ko/CSS/Understanding_z-index/Stacking_without_z-index) 쌓임 규칙을 적용한다.

다음 예제에서는 레이어들의 쌓임 순서가 z-index를 이용하여 바뀌어있다. DIV#5는 position 속성이 지정되지 않았으므로 z-index 속성 값은 쌓임 순서를 결정하는데에 아무 영향을 미치지 않는다.

### 예제

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
  <head>
    <style type="text/css">
      div {
        opacity: 0.7;
        font: 12px Arial;
      }

      span.bold {
        font-weight: bold;
      }

      #normdiv {
        z-index: 8;
        height: 70px;
        border: 1px dashed #999966;
        background-color: #ffffcc;
        margin: 0px 50px 0px 50px;
        text-align: center;
      }

      #reldiv1 {
        z-index: 3;
        height: 100px;
        position: relative;
        top: 30px;
        border: 1px dashed #669966;
        background-color: #ccffcc;
        margin: 0px 50px 0px 50px;
        text-align: center;
      }

      #reldiv2 {
        z-index: 2;
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
        z-index: 5;
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
        z-index: 1;
        position: absolute;
        width: 150px;
        height: 350px;
        top: 10px;
        right: 10px;
        border: 1px dashed #990000;
        background-color: #ffdddd;
        text-align: center;
      }
    </style>
  </head>

  <body>
    <br /><br />

    <div id="absdiv1">
      <br /><span class="bold">DIV #1</span> <br />position: absolute;
      <br />z-index: 5;
    </div>

    <div id="reldiv1">
      <br /><span class="bold">DIV #2</span> <br />position: relative;
      <br />z-index: 3;
    </div>

    <div id="reldiv2">
      <br /><span class="bold">DIV #3</span> <br />position: relative;
      <br />z-index: 2;
    </div>

    <div id="absdiv2">
      <br /><span class="bold">DIV #4</span> <br />position: absolute;
      <br />z-index: 1;
    </div>

    <div id="normdiv">
      <br /><span class="bold">DIV #5</span> <br />no positioning <br />z-index:
      8;
    </div>
  </body>
</html>
```

## 결과

{{EmbedLiveSample("예제", 600, 400)}}

### See also

- [Stacking without z-index](/en/CSS/Understanding_z-index/Stacking_without_z-index) : Default stacking rules
- [Stacking and float](/en/CSS/Understanding_z-index/Stacking_and_float) : How floating elements are handled
- [The stacking context](/en/CSS/Understanding_z-index/The_stacking_context) : Notes on the stacking context
- [Stacking context example 1](/en/CSS/Understanding_z-index/Stacking_context_example_1) : 2-level HTML hierarchy, z-index on the last level
- [Stacking context example 2](/en/CSS/Understanding_z-index/Stacking_context_example_2) : 2-level HTML hierarchy, z-index on all levels
- [Stacking context example 3](/en/CSS/Understanding_z-index/Stacking_context_example_3) : 3-level HTML hierarchy, z-index on the second level

### Original Document Information

- Author(s): Paolo Lombardi
- This article is the english translation of an article I wrote in italian for [YappY](http://www.yappy.it). I grant the right to share all the content under [Creative Commons: Attribution-Sharealike license](http://creativecommons.org/licenses/by-sa/2.0/)
- Last Updated Date: July 9th, 2005
