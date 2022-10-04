---
title: Path2D
slug: Web/API/Path2D
---

{{APIRef("Canvas API")}} {{SeeCompatTable}}

The **`Path2D`** interface of the Canvas 2D API is used to declare paths that are then later used on {{domxref("CanvasRenderingContext2D")}} objects. The [path methods](/ja/docs/Web/API/CanvasRenderingContext2D#Paths) of the `CanvasRenderingContext2D` interface are present on this interface as well and are allowing you to create paths that you can retain and replay as required on a canvas.

## Constructors

- {{domxref("Path2D.Path2D", "Path2D()")}}
  - : `Path2D` constructor. Creates a new `Path2D` object.

## Methods

- {{domxref("Path2D.addPath()")}}
  - : Adds a path to the current path.
- {{domxref("CanvasRenderingContext2D.closePath", "Path2D.closePath()")}}
  - : Causes the point of the pen to move back to the start of the current sub-path. It tries to draw a straight line from the current point to the start. If the shape has already been closed or has only one point, this function does nothing.
- {{domxref("CanvasRenderingContext2D.moveTo()", "Path2D.moveTo()")}}
  - : Moves the starting point of a new sub-path to the **(x, y)** coordinates.
- {{domxref("CanvasRenderingContext2D.lineTo()", "Path2D.lineTo()")}}
  - : Connects the last point in the subpath to the `x, y` coordinates with a straight line.
- {{domxref("CanvasRenderingContext2D.bezierCurveTo()", "Path2D.bezierCurveTo()")}}
  - : Adds a cubic Bézier curve to the path. It requires three points. The first two points are control points and the third one is the end point. The starting point is the last point in the current path, which can be changed using `moveTo()` before creating the Bézier curve.
- {{domxref("CanvasRenderingContext2D.quadraticCurveTo()", "Path2D.quadraticCurveTo()")}}
  - : Adds a quadratic Bézier curve to the current path.
- {{domxref("CanvasRenderingContext2D.arc()", "Path2D.arc()")}}
  - : Adds an arc to the path which is centered at _(x, y)_ position with radius _r_ starting at _startAngle_ and ending at _endAngle_ going in the given direction by _anticlockwise_ (defaulting to clockwise).
- {{domxref("CanvasRenderingContext2D.arcTo()", "Path2D.arcTo()")}}
  - : Adds an arc to the path with the given control points and radius, connected to the previous point by a straight line.
- {{domxref("CanvasRenderingContext2D.ellipse()", "Path2D.ellipse()")}}
  - : Adds an ellipse to the path which is centered at _(x, y)_ position with the radii _radiusX_ and _radiusY_ starting at _startAngle_ and ending at _endAngle_ going in the given direction by _anticlockwise_ (defaulting to clockwise).
- {{domxref("CanvasRenderingContext2D.rect()", "Path2D.rect()")}}
  - : Creates a path for a rectangle at\_ _position _(x, y)_ with a size that is determined by \_width_ and _height_.

## Specifications

| Specification                                                                            | Status                           | Comment |
| ---------------------------------------------------------------------------------------- | -------------------------------- | ------- |
| {{SpecName('HTML WHATWG', "scripting.html#dom-path2d", "Path2D")}} | {{Spec2('HTML WHATWG')}} |         |

## Browser compatibility

{{Compat("api.Path2D")}}

## See also

- {{domxref("CanvasRenderingContext2D")}}
