---
title: SVG in Firefox
slug: orphaned/Web/SVG/SVG_1.1_Support_in_Firefox
original_slug: Web/SVG/SVG_1.1_Support_in_Firefox
---

Firefox 2는 더욱 폭넓은 [Scalable Vector Graphics (SVG)](http://www.w3.org/Graphics/SVG/) 기능 구현을 위해서 계속해서 향상시켜 나가고 있습니다. 많은 스펙과 버그 수정들이 포함되었지만 Firefox 1.5이후 새로이 추가된 유일한 특징이 바로 \<textPath>입니다. -- 아래 참조.

Firefox SVG는 [SVG 1.1](http://www.w3.org/TR/SVG11/)의 부분집합이지만 그렇다고 공식 프로필(Tiny, Basic, Full)들중 어느 것도 아닙니다. 각 내용들과 그것들이 Firefox 2에서 구현되었는지 아닌지에 대한 전체 내용은 문서의 마지막에서 찾을 수 있습니다. 문서의 나머지 부분은 우리의 구현상 제약사항들에 대한 정보를 제공할 것입니다.

우리들의 구현의 특이한 점들이 컨텐츠를 개발함에 있어서 번거로울 수도 있다는 것을 알고 있습니다. 하지만 커다란 스펙의 완전한 구현이 될 때까지 여러분의 인내를 부탁드립니다.

이 문서를 읽을때 이들 구현들의 세부사항들이 언제 바뀔지 궁금해할지도 모릅니다. 불행히도 [현재 로드맵](http://www.mozilla.org/roadmap/gecko-1.9-roadmap.html)에 따르면 Gecko의 다음 버전에 기반한 Firefox의 공식 출시일이 꽤 나중이 되겠지만 2007년 1/4분기라고 나와있습니다. 그러나 새로운 기능을 시험해보고 싶다면 현재 개발중인 [nightly builds](http://www.mozilla.org/developer/#builds)를 사용해볼 수 있습니다.

## 성능

Firefox가 출시하는 모든 플랫폼은 같은 렌더링 백엔드 [cairo](http://cairographics.org/)를 사용합니다. 그래서 이들 간에 성능에 관한 특징은 일반적으로 유사할 것입니다. Linux에서의 성능은 예측하기가 가장 힘든데 이는 다양한 X서버마다 RENDER 확장의 구현이 다양하기 때문입니다.

Windows에서 SVG 렌더링은 다른 플랫폼상에서 보다도 상당히 빠릅니다.

## 좌표 범위

당신의 컨텐츠가 상당히 넓은 범위의 좌표를 가지는 구조를 가지고 있다면 cairo가 내부적으로 계산할 때 수를 16.16비트의 고정 소수점 표현 방식을 사용하기 때문에 발생할 수 있는 문제점들에 대해서 주의 깊게 고려해야 합니다. Cairo는 rasterization하기 전에 primitives들에 대한 클리핑을 하지 않기 때문에 변환과정 후 최종적으로 -32678에서 32677의 범위를 벗어나는 좌표들에 대해서는 렌더링 오류나 아주 느린 성능을 보여주기도 합니다.

## Windows 98에서의 Text

안타깝게도 윈도우즈에서 cairo를 렌더링 엔진으로 사용한다면 Windows 98에서 텍스트 렌더링이 되지않는 버그가 있다. 사실, 그것보다 더 심각한 문제가 있다 : SVG 컨텐츠를 렌더링하는 도중에 텍스트를 만나면 모든 그리기 기능이 정지되어버리는 것이다.

## 폰트 선택

CSS에 익숙하다면 특정 폰트에서 들어있지 않은 기호들의 경우 폰트 속성에서 예비 폰트들을 지정할수 있다는 것을 알고 있을 것입니다. 현재 SVG 렌더링 백엔드는 단지 지정된 첫번째 폰트를 사용하도록 시도하며 만약 그 폰트가 없다면 플랫폼의 폰트를 사용하게 됩니다. 예비 폰트는 사용되지 않습니다; 그래서 예를 들면 `font-family="Arial,LucidaSansUnicode"` 이 코드는 Arial 폰트를 사용할 수 없는 경우 LucidaSansUnicode가 사용되게끔 하는 것은 아닙니다.

## 인쇄

아쉽지만 현재 인쇄는 SVG의 벡터 속성을 이용해서 매우 선명하게 출력해내도록 하는 부분은 완료되지 않았습니다. 하지만 화면 해상도정도로 그려져서 그 이미지처럼 출력됩니다.

Windows상에서 출력했을 때 폰트의 크기는 SVG에서 지정된 것보다도 훨씬 크게 출력됩니다.

## 그룹 opacity

그룹 opacity 속성인 `opacity`는 SVG 컨테이너 객체들을 부분적으로는 투명한 레이어로 다루어질 수 있도록 해주며, `fill-opacity`나 `stroke-opacity`들과는 독립적인 속성입니다. 현재 `opacity`의 구현은 꽤 느려서, 참으면서 사용을 해야할 겁니다. `fill-opacity`와 `stroke-opacity`는 훨씬 빠르며 컨텐츠에 따라서 같은 결과를 만들어 낼 수도 있습니다.

그룹 opacity는 현재 `<g>`에만 구현되어 있으며 `<text>`나 `<svg>`는 구현되어 있지 않습니다.

## 폰트 기울이기

Microsoft Windows나 Mac OSX 플랫폼상에서는 문장의 기울였을때 내부의 채워짐이 정확히 일치하지 않습니다. 이 오차는 보통 매우 작은데 약간 더 기울이거나 함으로써 해결할 수 있습니다. 이 오차에 대한 예입니다:

<img alt="그림:그림-text-fill-stroke.png">

## `<image>`

`<image>`는 Firefox 1.5의 SVG 이미지들에는 지원되지 않습니다; 대신에 Firefox에서 사용되는 유일한 raster 이미지 포맷입니다.

`<image>`의 모든 인스터스들은 사용되는 이미지와는 별도의 복사본을 가지는데 이는 만약 컨텐츠내에 아이콘과 같은 이미지에 대해 다수의 복사본을 사용한다면 새겨두어야 할 부분입니다. 안타깝게도 이 경우에 `<image>`의 `<use>`는 또 다른 다른 복사본으로 간주합니다.

덧붙여, Firefox 1.5에서는 SVG에서 다수의 raster 이미지를 사용하면 성능히 심각하게 떨어질 수 있습니다.

## Events

We support the SVG event attributes with the exception of `onfocusin`, `onfocusout`, and `onactivate`.

Our `onload` handling is currently somewhat nonstandard, but hopefully not in a way that hurts its use. While the code specified by the `onload` attribute is called for each element, an `SVGLoad` event is only fired for the root `<svg>` element. Some DOM methods will return garbage or an error if called before the corresponding element has been rendered, which you may need to take into account when writing `onload` code. Such methods are `getBBox`, `getScreenCTM`, etc.

We do not support the Adobe specific key events (`onkeydown`, `onkeyup`).

## Interoperability

If you're working with current SVG content, you may encounter problems loading it into Firefox. Most of the problems tend to be fairly trivial, and are the result of Firefox being a stricter implementation. Jonathan Watt's [SVG Authoring Guidelines](http://jwatt.org/svg/authoring/) explains the common problems.

## SVG usage situations

Firefox 1.5 handles SVG as entire documents or when referenced by `embed`, `object`, or `iframe`. It cannot currently be used as source for an HTML or XHTML `img` element or for CSS properties that take an image reference.

## Animation

Firefox 1.5 does not implement declarative animation, but does support dynamic scripting. Doug Shepers has used this to create [SmilScript](http://www.vectoreal.com/smilscript/), a small Javascript library that implements a subset of SVG's declarative animation.

## Bugs fixed in Firefox 2

Firefox 2 fixes some bugs in its SVG implementation. This section provides a quick overview of the most interesting ones.

- A problem filling and stroking text in which the drawing position isn't reset correctly between the two operations has been fixed (bug [333615](https://bugzilla.mozilla.org/show_bug.cgi?id=333615)).

- Radial gradients now properly clamp the `fx` and `fy` attributes to ensure that they're within the circumference of a circle (bug [330682](https://bugzilla.mozilla.org/show_bug.cgi?id=330682)).

- Text spans' and text elements' lengths can now be computed using their `getComputedTextLength()` methods, which improves compatibility with certain web sites (bugs [311031](https://bugzilla.mozilla.org/show_bug.cgi?id=311031) and [264380](https://bugzilla.mozilla.org/show_bug.cgi?id=264380)).

- `<tspan>` elements now properly support the `dx` and `dy` attributes, and work if the `x` and `y` attributes aren't specified (bug [311063](https://bugzilla.mozilla.org/show_bug.cgi?id=311063)).

- Improved invalidation logic on redraws, which prevents dropped pixels in certain cases (bug [312269](https://bugzilla.mozilla.org/show_bug.cgi?id=312269)).

- Fixed a bug that prevented events from being handled properly for objects exposed by the clip path of another object (bug [315861](https://bugzilla.mozilla.org/show_bug.cgi?id=315861)).

- Fixed a bug that would crash if a `<path>` element had a `d` attribute with an empty string (bug [318379](https://bugzilla.mozilla.org/show_bug.cgi?id=318379)).

- The `overflow` attribute now works for the `marker` element, using the syntax `overflow="visible"`, which did not previously work correctly (bug [320623](https://bugzilla.mozilla.org/show_bug.cgi?id=320623)).

- You can now access the `<style>` attribute of `marker` elements without throwing an exception (bug [323589](https://bugzilla.mozilla.org/show_bug.cgi?id=323589)).

- You can now use percent values for the radius of a radial gradient (bug [323669](https://bugzilla.mozilla.org/show_bug.cgi?id=323669)).

- The `documentElement.createSVGAngle()` method is now implemented (bug [327437](https://bugzilla.mozilla.org/show_bug.cgi?id=327437)).

- Making a `<stop>` element a child of another `<stop>` element no longer asserts (bug [328137](https://bugzilla.mozilla.org/show_bug.cgi?id=328137)).

- Changes to the height and width of markers, as well as to the orientation of the marker, now work (bug [325728](https://bugzilla.mozilla.org/show_bug.cgi?id=325728)).

- Font sizes when printing on Windows are no longer much larger than specified for SVG (bug [314707](https://bugzilla.mozilla.org/show_bug.cgi?id=314707)).

## Element implementation status

<table style="margin: 5px">
  <tbody>
    <tr>
      <th>Element</th>
      <th>Notes</th>
    </tr>
    <tr>
      <th colspan="2">
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/struct.html#basic-structure-mod"
          >Structure Module</a
        >
      </th>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/struct.html#SVGElement"
          >svg</a
        >
      </td>
      <td>
        <ul>
          <li>Implemented.</li>
          <li>
            <code>currentScale</code> and <code>currentTranslate</code> DOM
            attributes are implemented, but there is no pan and zoom user
            interface.
          </li>
          <li>
            SVGSVGElement
            <ul>
              <li>
                Unimplemented attributes: contentScriptType, contentStyleType,
                viewport, useCurrentView, currentView
              </li>
              <li>
                Unimplemented bindings: pauseAnimations, unpauseAnimations,
                animationsPaused, getCurrentTime, setCurrentTime,
                getIntersectionList, getEnclosureList, checkIntersection,
                checkEnclosure, deselectAll, createSVGAngle, getElementById
              </li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/struct.html#GElement"
          >g</a
        >
      </td>
      <td>
        <ul>
          <li>Implemented.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/struct.html#DefsElement"
          >defs</a
        >
      </td>
      <td>
        <ul>
          <li>Implemented.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/struct.html#DescElement"
          >desc</a
        >
      </td>
      <td>
        <ul>
          <li>Implemented.</li>
          <li>Only stored in the DOM, no user interface.&#x3C;/td></li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/struct.html#TitleElement"
          >title</a
        >
      </td>
      <td>
        <ul>
          <li>Implemented.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/metadata.html#MetadataElement"
          >metadata</a
        >
      </td>
      <td>
        <ul>
          <li>Implemented.</li>
          <li>Only stored in the DOM, no user interface.&#x3C;/td></li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/struct.html#SymbolElement"
          >symbol</a
        >
      </td>
      <td>
        <ul>
          <li>Implemented.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/struct.html#UseElement"
          >use</a
        >
      </td>
      <td>
        <ul>
          <li>Implemented.</li>
          <li>
            Only works for internal document references (<a
              class="link-https"
              href="https://bugzilla.mozilla.org/show_bug.cgi?id=269482"
              >bug 269482</a
            >).
          </li>
          <li>
            Doesn't completely follow &#x3C;svg:use> cascading rules (<a
              class="link-https"
              href="https://bugzilla.mozilla.org/show_bug.cgi?id=265894"
              >bug 265894</a
            >).
          </li>
          <li>
            Doesn't deliver events to a SVGElementInstance tree (<a
              class="link-https"
              href="https://bugzilla.mozilla.org/show_bug.cgi?id=265895"
              >bug 265895</a
            >).
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th colspan="2">
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/struct.html#conditional-mod"
          >Conditional Processing Module</a
        >
      </th>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/struct.html#SwitchElement"
          >switch</a
        >
      </td>
      <td>
        <ul>
          <li>Implemented.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th colspan="2">
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/struct.html#image-mod"
          >Image Module</a
        >
      </th>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/struct.html#ImageElement"
          >image</a
        >
      </td>
      <td>
        <ul>
          <li>Implemented.</li>
          <li>
            Only works for raster images (<a
              class="link-https"
              href="https://bugzilla.mozilla.org/show_bug.cgi?id=272288"
              >bug 272288</a
            >).
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th colspan="2">
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/styling.html#style-mod"
          >Style Module</a
        >
      </th>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/styling.html#StyleElement"
          >style</a
        >
      </td>
      <td>
        <ul>
          <li>Implemented.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th colspan="2">
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/shapes.html#shape-mod"
          >Shape Module</a
        >
      </th>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/paths.html#PathElement"
          >path</a
        >
      </td>
      <td>
        <ul>
          <li>Implemented.</li>
          <li>
            SVGPathElement Interface
            <ul>
              <li>
                Unimplemented attributes: pathLength, normalizedPathSegList,
                animatedPathSegList, animatedNormalizedPathSegList
              </li>
              <li>
                Unimplemented bindings: getTotalLength, getPointAtLength,
                getPathSegAtLength
              </li>
            </ul>
          </li>
          <li>
            SVGPathSegList Interface
            <ul>
              <li>Unimplemented bindings: replaceItem()</li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/shapes.html#RectElement"
          >rect</a
        >
      </td>
      <td>
        <ul>
          <li>Implemented.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/shapes.html#CircleElement"
          >circle</a
        >
      </td>
      <td>
        <ul>
          <li>Implemented.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/shapes.html#LineElement"
          >line</a
        >
      </td>
      <td>
        <ul>
          <li>Implemented.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/shapes.html#EllipseElement"
          >ellipse</a
        >
      </td>
      <td>
        <ul>
          <li>Implemented.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/shapes.html#PolylineElement"
          >polyline</a
        >
      </td>
      <td>
        <ul>
          <li>Implemented.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/shapes.html#PolygonElement"
          >polygon</a
        >
      </td>
      <td>
        <ul>
          <li>Implemented.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th colspan="2">
        <a class="external" href="http://www.w3.org/TR/SVG11/text.html#text-mod"
          >Text Module</a
        >
      </th>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/text.html#TextElement"
          >text</a
        >
      </td>
      <td>
        <ul>
          <li>Implemented.</li>
          <li>
            SVGTextElement
            <ul>
              <li>
                Unimplemented attributes: rotate, textLength, lengthAdjust
              </li>
              <li>
                Unimplemented bindings: getNumberOfChars, getSubStringLength,
                getStartPositionOfChar, getEndPositionOfChar, getRotationOfChar,
                getCharNumAtPosition, selectSubString
              </li>
              <li>
                Bindings not functional at <code>onload</code> time:
                getExtentOfChar
              </li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/text.html#TSpanElement"
          >tspan</a
        >
      </td>
      <td>
        <ul>
          <li>Implemented.</li>
          <li>
            SVGTSpanElement
            <ul>
              <li>
                Unimplemented attributes: rotate, textLength, lengthAdjust
              </li>
              <li>
                Unimplemented bindings: getNumberOfChars, getComputedTextLength,
                getSubStringLength, getStartPositionOfChar,
                getEndPositionOfChar, getExtentOfChar, getRotationOfChar,
                getCharNumAtPosition, selectSubString
              </li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/text.html#TRefElement"
          >tref</a
        >
      </td>
      <td>
        <ul>
          <li>Not implemented.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/text.html#TextPathElement"
          >textPath</a
        >
      </td>
      <td>
        <ul>
          <li>Implemented in Firefox 2.</li>
          <li>
            Unimplemented attributes: method, spacing, textLength, lengthAdjust
          </li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/text.html#AltGlyphElement"
          >altGlyph</a
        >
      </td>
      <td>
        <ul>
          <li>Not implemented.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/text.html#AltGlyphDefElement"
          >altGlyphDef</a
        >
      </td>
      <td>
        <ul>
          <li>Not implemented.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/text.html#AltGlyphItemElement"
          >altGlyphItem</a
        >
      </td>
      <td>
        <ul>
          <li>Not implemented.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/text.html#GlyphRefElement"
          >glyphRef</a
        >
      </td>
      <td>
        <ul>
          <li>Not implemented.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th colspan="2">
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/painting.html#marker-mod"
          >Marker Module</a
        >
      </th>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/painting.html#MarkerElement"
          >marker</a
        >
      </td>
      <td>
        <ul>
          <li>Implemented.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th colspan="2">
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/color.html#color-profile-mod"
          >Color Profile Module</a
        >
      </th>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/color.html#ColorProfileElement"
          >color-profile</a
        >
      </td>
      <td>
        <ul>
          <li>Not implemented.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th colspan="2">
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/pservers.html#gradient-mod"
          >Gradient Module</a
        >
      </th>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/pservers.html#LinearGradientElement"
          >linearGradient</a
        >
      </td>
      <td>
        <ul>
          <li>Implemented.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/pservers.html#RadialGradientElement"
          >radialGradient</a
        >
      </td>
      <td>
        <ul>
          <li>Implemented.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/pservers.html#StopElement"
          >stop</a
        >
      </td>
      <td>
        <ul>
          <li>Implemented.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th colspan="2">
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/pservers.html#pattern-mod"
          >Pattern Module</a
        >
      </th>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/pservers.html#PatternElement"
          >pattern</a
        >
      </td>
      <td>
        <ul>
          <li>Not implemented.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th colspan="2">
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/masking.html#clip-mod"
          >Clip Module</a
        >
      </th>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/masking.html#ClipPathElement"
          >clipPath</a
        >
      </td>
      <td>
        <ul>
          <li>Implemented.</li>
          <li>
            Won't handle clip paths with have elements with different clip-rule
            properties or that reference other clipPaths. (<a
              class="link-https"
              href="https://bugzilla.mozilla.org/show_bug.cgi?id=267224"
              >bug 267224</a
            >).
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th colspan="2">
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/masking.html#mask-mod"
          >Mask Module</a
        >
      </th>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/masking.html#MaskElement"
          >mask</a
        >
      </td>
      <td>
        <ul>
          <li>Not implemented.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th colspan="2">
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/filters.html#filter-mod"
          >Filter Module</a
        >
      </th>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/filters.html#FilterElement"
          >filter</a
        >
      </td>
      <td>
        <ul>
          <li>Not implemented.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/filters.html#feBlendElement"
          >feBlend</a
        >
      </td>
      <td>
        <ul>
          <li>Not implemented.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/filters.html#feColorMatrixElement"
          >feColorMatrix</a
        >
      </td>
      <td>
        <ul>
          <li>Not implemented.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/filters.html#feComponentTransferElement"
          >feComponentTransfer</a
        >
      </td>
      <td>
        <ul>
          <li>Not implemented.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/filters.html#feCompositeElement"
          >feComposite</a
        >
      </td>
      <td>
        <ul>
          <li>Not implemented.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElement"
          >feConvolveMatrix</a
        >
      </td>
      <td>
        <ul>
          <li>Not implemented.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/filters.html#feDiffuseLightingElement"
          >feDiffuseLighting</a
        >
      </td>
      <td>
        <ul>
          <li>Not implemented.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/filters.html#feDisplacementMapElement"
          >feDisplacementMap</a
        >
      </td>
      <td>
        <ul>
          <li>Not implemented.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/filters.html#feFloodElement"
          >feFlood</a
        >
      </td>
      <td>
        <ul>
          <li>Not implemented.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/filters.html#feGaussianBlurElement"
          >feGaussianBlur</a
        >
      </td>
      <td>
        <ul>
          <li>Not implemented.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/filters.html#feImageElement"
          >feImage</a
        >
      </td>
      <td>
        <ul>
          <li>Not implemented.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/filters.html#feMergeElement"
          >feMerge</a
        >
      </td>
      <td>
        <ul>
          <li>Not implemented.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/filters.html#feMergeNodeElement"
          >feMergeNode</a
        >
      </td>
      <td>
        <ul>
          <li>Not implemented.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/filters.html#feMorphologyElement"
          >feMorphology</a
        >
      </td>
      <td>
        <ul>
          <li>Not implemented.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/filters.html#feOffsetElement"
          >feOffset</a
        >
      </td>
      <td>
        <ul>
          <li>Not implemented.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/filters.html#feSpecularLightingElement"
          >feSpecularLighting</a
        >
      </td>
      <td>
        <ul>
          <li>Not implemented.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/filters.html#feTileElement"
          >feTile</a
        >
      </td>
      <td>
        <ul>
          <li>Not implemented.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/filters.html#feTurbulenceElement"
          >feTurbulence</a
        >
      </td>
      <td>
        <ul>
          <li>Not implemented.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/filters.html#feDistantLightElement"
          >feDistantLight</a
        >
      </td>
      <td>
        <ul>
          <li>Not implemented.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/filters.html#fePointLightElement"
          >fePointLight</a
        >
      </td>
      <td>
        <ul>
          <li>Not implemented.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/filters.html#feSpotLightElement"
          >feSpotLight</a
        >
      </td>
      <td>
        <ul>
          <li>Not implemented.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/filters.html#feFuncRElement"
          >feFuncR</a
        >
      </td>
      <td>
        <ul>
          <li>Not implemented.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/filters.html#feFuncGElement"
          >feFuncG</a
        >
      </td>
      <td>
        <ul>
          <li>Not implemented.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/filters.html#feFuncBElement"
          >feFuncB</a
        >
      </td>
      <td>
        <ul>
          <li>Not implemented.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/filters.html#feFuncAElement"
          >feFuncA</a
        >
      </td>
      <td>
        <ul>
          <li>Not implemented.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th colspan="2">
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/interact.html#cursor-mod"
          >Cursor Module</a
        >
      </th>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/interact.html#CursorElement"
          >cursor</a
        >
      </td>
      <td>
        <ul>
          <li>Not implemented.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th colspan="2">
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/linking.html#hyperlinking-mod"
          >Hyperlinking Module</a
        >
      </th>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/linking.html#AElement"
          >a</a
        >
      </td>
      <td>
        <ul>
          <li>
            Implemented as an XBL binding - object is not of type SVGAElement.
          </li>
          <li>
            Only <code>xlink:href</code>, <code>xlink:show</code>, and
            <code>xlink:target</code> (as of Firefox 2) attributes implemented.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th colspan="2">
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/linking.html#view-mod"
          >View Module</a
        >
      </th>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/linking.html#ViewElement"
          >view</a
        >
      </td>
      <td>
        <ul>
          <li>Not implemented.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th colspan="2">
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/script.html#scripting-mod"
          >Scripting Module</a
        >
      </th>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/script.html#ScriptElement"
          >script</a
        >
      </td>
      <td>
        <ul>
          <li>Implemented.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th colspan="2">
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/animate.html#animation-mod"
          >Animation Module</a
        >
      </th>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/animate.html#AnimateElement"
          >animate</a
        >
      </td>
      <td>
        <ul>
          <li>Not implemented.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/animate.html#SetElement"
          >set</a
        >
      </td>
      <td>
        <ul>
          <li>Not implemented.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/animate.html#AnimateMotionElement"
          >animateMotion</a
        >
      </td>
      <td>
        <ul>
          <li>Not implemented.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/animate.html#AnimateTransformElement"
          >animateTransform</a
        >
      </td>
      <td>
        <ul>
          <li>Not implemented.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/animate.html#AnimateColorElement"
          >animateColor</a
        >
      </td>
      <td>
        <ul>
          <li>Not implemented.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/animate.html#mpathElement"
          >mpath</a
        >
      </td>
      <td>
        <ul>
          <li>Not implemented.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th colspan="2">
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/fonts.html#font-mod"
          >Font Module</a
        >
      </th>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/fonts.html#FontFaceElement"
          >font</a
        >
      </td>
      <td>
        <ul>
          <li>Not implemented.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/fonts.html#FontFaceNameElement"
          >font-face</a
        >
      </td>
      <td>
        <ul>
          <li>Not implemented.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/fonts.html#GlyphElement"
          >glyph</a
        >
      </td>
      <td>
        <ul>
          <li>Not implemented.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/fonts.html#MissingGlyphElement"
          >missing-glyph</a
        >
      </td>
      <td>
        <ul>
          <li>Not implemented.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/fonts.html#HKernElement"
          >hkern</a
        >
      </td>
      <td>
        <ul>
          <li>Not implemented.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/fonts.html#VKernElement"
          >vkern</a
        >
      </td>
      <td>
        <ul>
          <li>Not implemented.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/fonts.html#FontFaceSrcElement"
          >font-face-src</a
        >
      </td>
      <td>
        <ul>
          <li>Not implemented.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/fonts.html#FontFaceNameElement"
          >font-face-uri</a
        >
      </td>
      <td>
        <ul>
          <li>Not implemented.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/fonts.html#FontFaceNameElement"
          >font-face-format</a
        >
      </td>
      <td>
        <ul>
          <li>Not implemented.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/fonts.html#FontFaceNameElement"
          >font-face-name</a
        >
      </td>
      <td>
        <ul>
          <li>Not implemented.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/fonts.html#DefinitionSrcElement"
          >definition-src</a
        >
      </td>
      <td>
        <ul>
          <li>Not implemented.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th colspan="2">
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/extend.html#extensibility-mod"
          >Extensibility Module</a
        >
      </th>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/extend.html#ForeignObjectElement"
          >foreignObject</a
        >
      </td>
      <td>
        <ul>
          <li>Implemented, but not built.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>
