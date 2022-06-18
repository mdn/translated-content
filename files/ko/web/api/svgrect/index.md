---
title: SVGRect
slug: Web/API/SVGRect
translation_of: Web/API/SVGRect
---
{{APIRef("SVG")}}

`SVGRect`는 직사각형을 의미합니다. 직사각형은 최소 x값과 최소 y값, 그리고 양수로 제한되는 폭과 높이를 식별하는 x와 y 좌표 쌍으로 구성됩니다.

**`SVGRect`** 오브젝트는 읽기 전용으로 지정될 수 있습니다. 이 말은 오브젝트를 수정하려는 시도가 있을 때 exception을 발생시킵니다.

{{InheritanceDiagram(600, 140)}}

## 프로퍼티

_이 인터페이스는 부모로 부터 프로퍼티를 상속받습니다. {{domxref("SVGGeometryElement")}}._

- {{domxref("SVGRect.x")}} {{ReadOnlyInline}}
  - : 이 좌표의 정확한 효과는 각 element에 따라 다릅니다. 속성을 지정하지 않으면 0 값이 지정된 것처럼 효과가 나타납니다.
- {{domxref("SVGRect.y")}} {{ReadOnlyInline}}
  - : 이 좌표의 정확한 효과는 각 element에 따라 다릅니다. 속성을 지정하지 않으면 0 값이 지정된 것처럼 효과가 나타납니다.
- {{domxref("SVGRect.width")}} {{ReadOnlyInline}}
  - : 이것은 사각형의 너비를 나타냅니다. 음수 값은 에러가 발생합니다. 0 값은 element의 렌더링을 불가능하게 합니다.
- {{SVGAttr("SVGRect.height")}} {{ReadOnlyInline}}
  - : 이것은 사각형의 높이를 나타냅니다. 음수 값은 에러가 발생합니다. 0 값은 element의 렌더링을 불가능하게 합니다.

**Exceptions on setting:** A {{domxref("DOMException")}} with the code `NO_MODIFICATION_ALLOWED_ERR` 는 읽기 전용 속성을 바꾸려 할 때 발생합니다.

## 메소드

_이 인터페이스는 부모로 부터 프로퍼티를 상속받습니다. {{domxref("SVGGeometryElement")}}._

## 예

rect 인터페이스의 간단한 사용법입니다. (매 클릭마다 rect 인터페이스의 색을 변경합니다.)

### SVG content

```html
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <rect width="300" height="100" id="myrect" onclick="doRectClick()"
      style="fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0)" />
  <text x="60" y="40" fill="white" font-size="40"
      onclick="doRectClick();">Click Me</text>
</svg>
```

### JavaScript content

```js
function doRectClick(){
  var myrect = document.getElementById('myrect');
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  myrect.style.fill = 'rgb(' + r + ', ' + g + ' , ' + b + ')';
}
```

_Click the rect._

{{EmbedLiveSample('Example', '', '', '', 'Web/API/SVGRect')}}

## 상세

| Specification                                                                                            | Status                   | Comment                                                                                                                                                                                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------- | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName("SVG2", "shapes.html#InterfaceSVGRectElement", "SVGRectElement")}} | {{Spec2("SVG2")}} | Changed the inheritance from {{domxref("SVGElement")}} to {{domxref("SVGGeometryElement")}} and removed the implemented interfaces {{domxref("SVGTests")}}, {{domxref("SVGLangSpace")}}, {{domxref("SVGExternalResourcesRequired")}}, {{domxref("SVGStylable")}}, and {{domxref("SVGTransformable")}}. |
| {{SpecName("SVG1.1", "shapes.html#InterfaceSVGRectElement", "SVGRectElement")}} | {{Spec2("SVG1.1")}} | Initial definition                                                                                                                                                                                                                                                                                                                                                         |

## 브라우저 호환성

{{Compat("api.SVGRect")}}
