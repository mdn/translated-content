---
title: SVGSVGElement
slug: Web/API/SVGSVGElement
---

{{APIRef("SVG")}}

该 **`SVGSVGElement`** 接口提供对{{SVGElement("svg")}}元素的属性的访问，以及操作它们的方法。此接口还包含各种常用的实用方法，例如矩阵操作和控制可视渲染设备上重绘时间的功能。

{{InheritanceDiagram(600,140)}}

## 属性

_此接口还从其父_ _{{domxref("SVGGraphicsElement")}}_ _继承属性，并且还实现_ _{{domxref("SVGZoomAndPan")}}_ _，_ _{{domxref("SVGFitToViewBox")}}_ _中的属性。_

- {{domxref("SVGSVGElement.x")}} {{ReadOnlyInline}}
  - : {{domxref("SVGAnimatedLength")}} 对应于给定 {{SVGElement("svg")}} 元素的 {{SVGAttr("x")}} 属性
- {{domxref("SVGSVGElement.y")}} {{ReadOnlyInline}}
  - : {{domxref("SVGAnimatedLength")}}对应于给定{{SVGElement("svg")}}元素的{{SVGAttr("y")}}属性。
- {{domxref("SVGSVGElement.width")}} {{ReadOnlyInline}}
  - : {{domxref("SVGAnimatedLength")}}对应于给定{{SVGElement("svg")}}元素的{{SVGAttr("width")}}属性。
- {{domxref("SVGSVGElement.height")}} {{ReadOnlyInline}}
  - : {{domxref("SVGAnimatedLength")}}对应于给定{{SVGElement("svg")}}元素的{{SVGAttr("height")}}属性。
- {{domxref("SVGSVGElement.contentScriptType")}}
  - : {{domxref("SVGAnimatedLength")}}对应于给定{{SVGElement("svg")}}元素的{{SVGAttr("contentScriptType")}}属性。
- {{domxref("SVGSVGElement.contentStyleType")}}
  - : {{domxref("SVGAnimatedLength")}}对应于给定{{SVGElement("svg")}}元素的{{SVGAttr("contentStyleType")}}属性。
- {{domxref("SVGSVGElement.viewport")}}
  - : 一个{{domxref("SVGRect")}}，包含与给定{{SVGElement("svg")}}元素对应的视口（隐式或显式）的位置和大小。当浏览器实际呈现内容时，位置和大小值表示呈现时的实际值。位置和大小值是父元素坐标系中的无单位值。如果不存在父元素（即{{SVGElement("svg")}}元素表示文档树的根），如果此 SVG 文档作为另一文档的一部分嵌入（例如，通过 HTML {{HTMLElement(" object")}} element），然后位置和大小是父文档坐标系中的无单位值。（如果父级使用 CSS 或 XSL 布局，
- {{domxref("SVGSVGElement.pixelUnitToMillimeterX")}} {{deprecated_inline}}
  - : 一个浮点数，表示沿视口 x 轴的像素单位（由 CSS2 定义）的大小，表示 70dpi 到 120dpi 范围内的某个单位，并且在支持此功能的系统上，可能实际上与特征匹配目标媒体。在不可能知道像素大小的系统上，提供合适的默认像素大小。
- {{domxref("SVGSVGElement.pixelUnitToMillimeterY")}} {{deprecated_inline}}
  - : 浮点数，表示沿视口 y 轴的像素单位大小。
- {{domxref("SVGSVGElement.screenPixelToMillimeterX")}} {{deprecated_inline}}
  - : DOM 级别 2 中的用户界面（UI）事件指示给定 UI 事件发生的屏幕位置。当浏览器实际知道“屏幕单元”的物理尺寸时，此浮动属性将表示该信息; 否则，用户代理将提供合适的默认值，例如.28mm。
- {{domxref("SVGSVGElement.screenPixelToMillimeterY")}} {{deprecated_inline}}
  - : 沿着视口的 y 轴的屏幕像素的对应大小。
- {{domxref("SVGSVGElement.useCurrentView")}}
  - : 当前最内层 SVG 文档片段的初始视图（即放大和平移之前）可以是“标准”视图，即基于{{SVGElement("svg")}}元素的属性，例如{{SVGAttr ("viewBox")}}）或“自定义”视图（即指向特定{{SVGElement("view")}}或其他元素的超链接）。如果初始视图是“标准”视图，则此属性为`false`。如果初始视图是“自定义”视图，则此属性为`true`。
- {{domxref("SVGSVGElement.currentView")}}

  - : {{domxref("SVGViewSpec")}}定义当前最里面的 SVG 文档片段的初始视图（即，放大和平移之前）。意义取决于具体情况：如果初始视图是“标准”视图，则：

    - {{SVGAttr("viewBox")}}，{{SVGAttr("preserveAspectRatio")}}和{{SVGAttr("currentView")}}中的{{SVGAttr("zoomAndPan")}}的值将与值匹配对于`SVGSVGElement`直接打开的相应 DOM 属性
    - } {{SVGAttr("currentView")}}中的{{SVGAttr("transform")}}和{{SVGAttr("viewTarget")}}的值将为 null

    如果初始视图是{{SVGElement("view")}}元素的链接，那么：

    - 在{{SVGAttr("currentView")}}中{{SVGAttr("viewBox")}}，{{SVGAttr("preserveAspectRatio")}}和{{SVGAttr("zoomAndPan")}}的值将对应于给定{{SVGElement("view")}}元素的相应属性
    - } {{SVGAttr("currentView")}}中的{{SVGAttr("transform")}}和{{SVGAttr("viewTarget")}}的值将为 null

    如果初始视图是指向另一个元素的链接（即，除了{{SVGElement("view")}}之外的其他元素，则：

    - {{SVGAttr("viewBox")}}，{{SVGAttr("preserveAspectRatio")}}和{{SVGAttr("currentView")}}中的{{SVGAttr("zoomAndPan")}}的值将与值匹配对于`SVGSVGElement`直接用于最近祖先{{SVGElement("svg")}}元素的相应 DOM 属性
    - {{SVGAttr("currentView")}}中{{SVGAttr("transform")}}的值将为 null
    - {{SVGAttr("currentView")}}中的{{SVGAttr("viewTarget")}}将代表链接的目标

    如果初始视图是使用 SVG 视图规范片段标识符（即#svgView（...））链接到 SVG 文档片段，则：

    - the values for {{SVGAttr("viewBox")}}, {{SVGAttr("preserveAspectRatio")}}, {{SVGAttr("zoomAndPan")}}, {{SVGAttr("transform")}} and {{SVGAttr("viewTarget")}} within {{SVGAttr("currentView")}} will correspond to the values from the SVG view specification fragment identifier

- {{domxref("SVGSVGElement.currentScale")}}
  - : On an outermost {{SVGElement("svg")}} element, this float attribute indicates the current scale factor relative to the initial view to take into account user magnification and panning operations. DOM attributes `currentScale` and `currentTranslate` are equivalent to the 2x3 matrix `[a b c d e f] = [currentScale 0 0 currentScale currentTranslate.x currentTranslate.y]`. If "magnification" is enabled (i.e., `zoomAndPan="magnify"`), then the effect is as if an extra transformation were placed at the outermost level on the SVG document fragment (i.e., outside the outermost {{SVGElement("svg")}} element).
- {{domxref("SVGSVGElement.currentTranslate")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGPoint")}} representing the translation factor that takes into account user "magnification" corresponding to an outermost {{SVGElement("svg")}} element. The behavior is undefined for \<svg> elements that are not at the outermost level.

## Methods

_This interface also inherits methods from its parent, {{domxref("SVGGraphicsElement")}} and also implements the ones from {{domxref("SVGZoomAndPan")}}, {{domxref("SVGFitToViewBox")}}._

- {{domxref("SVGSVGElement.suspendRedraw()")}} {{deprecated_inline}}

  - : Takes a time-out value which indicates that redraw shall not occur until:

    the corresponding unsuspendRedraw() call has been made, an unsuspendRedrawAll() call has been made, or its timer has timed out.

    In environments that do not support interactivity (e.g., print media), then redraw shall not be suspended. Calls to `suspendRedraw()` and `unsuspendRedraw()` should, but need not be, made in balanced pairs.

    To suspend redraw actions as a collection of SVG DOM changes occur, precede the changes to the SVG DOM with a method call similar to:

    ```js
    suspendHandleID = suspendRedraw(maxWaitMilliseconds);
    ```

    and follow the changes with a method call similar to:

    ```js
    unsuspendRedraw(suspendHandleID);
    ```

    Note that multiple suspendRedraw calls can be used at once and that each such method call is treated independently of the other suspendRedraw method calls.

- {{domxref("SVGSVGElement.unsuspendRedraw()")}} {{deprecated_inline}}
  - : Cancels a specified `suspendRedraw()` by providing a unique suspend handle ID that was returned by a previous `suspendRedraw()` call.
- {{domxref("SVGSVGElement.unsuspendRedrawAll()")}} {{deprecated_inline}}
  - : Cancels all currently active `suspendRedraw()` method calls. This method is most useful at the very end of a set of SVG DOM calls to ensure that all pending `suspendRedraw()` method calls have been cancelled.
- {{domxref("SVGSVGElement.forceRedraw()")}} {{deprecated_inline}}
  - : In rendering environments supporting interactivity, forces the user agent to immediately redraw all regions of the viewport that require updating.
- {{domxref("SVGSVGElement.pauseAnimations()")}}
  - : Suspends (i.e., pauses) all currently running animations that are defined within the SVG document fragment corresponding to this {{SVGElement("svg")}} element, causing the animation clock corresponding to this document fragment to stand still until it is unpaused.
- {{domxref("SVGSVGElement.unpauseAnimations()")}}
  - : Unsuspends (i.e., unpauses) currently running animations that are defined within the SVG document fragment, causing the animation clock to continue from the time at which it was suspended.
- {{domxref("SVGSVGElement.animationsPaused()")}}
  - : Returns true if this SVG document fragment is in a paused state.
- {{domxref("SVGSVGElement.getCurrentTime()")}}
  - : Returns the current time in seconds relative to the start time for the current SVG document fragment. If getCurrentTime is called before the document timeline has begun (for example, by script running in a {{SVGElement("script")}} element before the document's SVGLoad event is dispatched), then 0 is returned.
- {{domxref("SVGSVGElement.setCurrentTime()")}}
  - : Adjusts the clock for this SVG document fragment, establishing a new current time. If `setCurrentTime` is called before the document timeline has begun (for example, by script running in a {{SVGElement("script")}} element before the document's SVGLoad event is dispatched), then the value of seconds in the last invocation of the method gives the time that the document will seek to once the document timeline has begun.
- {{domxref("SVGSVGElement.getIntersectionList()")}}
  - : Returns a {{domxref("NodeList")}} of graphics elements whose rendered content intersects the supplied rectangle. Each candidate graphics element is to be considered a match only if the same graphics element can be a target of pointer events as defined in {{SVGAttr("pointer-events")}} processing.
- {{domxref("SVGSVGElement.getEnclosureList()")}}
  - : Returns a {{domxref("NodeList")}} of graphics elements whose rendered content is entirely contained within the supplied rectangle. Each candidate graphics element is to be considered a match only if the same graphics element can be a target of pointer events as defined in {{SVGAttr("pointer-events")}} processing.
- {{domxref("SVGSVGElement.checkIntersection()")}}
  - : Returns `true` if the rendered content of the given element intersects the supplied rectangle. Each candidate graphics element is to be considered a match only if the same graphics element can be a target of pointer events as defined in {{SVGAttr("pointer-events")}} processing.
- {{domxref("SVGSVGElement.checkEnclosure()")}}
  - : Returns `true` if the rendered content of the given element is entirely contained within the supplied rectangle. Each candidate graphics element is to be considered a match only if the same graphics element can be a target of pointer events as defined in {{SVGAttr("pointer-events")}} processing.
- {{domxref("SVGSVGElement.deselectAll()")}}
  - : Unselects any selected objects, including any selections of text strings and type-in bars.
- {{domxref("SVGSVGElement.createSVGNumber()")}}
  - : Creates an {{domxref("SVGNumber")}} object outside of any document trees. The object is initialized to a value of zero.
- {{domxref("SVGSVGElement.createSVGLength()")}}
  - : Creates an {{domxref("SVGLength")}} object outside of any document trees. The object is initialized to a value of zero user units.
- {{domxref("SVGSVGElement.createSVGAngle()")}}
  - : Creates an {{domxref("SVGAngle")}} object outside of any document trees. The object is initialized to a value of zero degrees (unitless).
- {{domxref("SVGSVGElement.createSVGPoint()")}}
  - : Creates an {{domxref("SVGPoint")}} object outside of any document trees. The object is initialized to the point (0,0) in the user coordinate system.
- {{domxref("SVGSVGElement.createSVGMatrix()")}}
  - : Creates an {{domxref("DOMMatrix", "SVGMatrix")}} object outside of any document trees. The object is initialized to the identity matrix.
- {{domxref("SVGSVGElement.createSVGRect()")}}
  - : Creates an {{domxref("SVGRect")}} object outside of any document trees. The object is initialized such that all values are set to 0 user units.
- {{domxref("SVGSVGElement.createSVGTransform()")}}
  - : Creates an {{domxref("SVGTransform")}} object outside of any document trees. The object is initialized to an identity matrix transform (`SVG_TRANSFORM_MATRIX`).
- {{domxref("SVGSVGElement.createSVGTransformFromMatrix()")}}
  - : Creates an {{domxref("SVGTransform")}} object outside of any document trees. The object is initialized to the given matrix transform (i.e., `SVG_TRANSFORM_MATRIX`). The values from the parameter matrix are copied, the matrix parameter is not adopted as `SVGTransform::matrix`.
- {{domxref("SVGSVGElement.getElementById()")}}
  - : Searches this SVG document fragment (i.e., the search is restricted to a subset of the document tree) for an Element whose id is given by _elementId_. If an Element is found, that Element is returned. If no such element exists, returns null. Behavior is not defined if more than one element has this id.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## 参见

- {{SVGElement("circle")}}
