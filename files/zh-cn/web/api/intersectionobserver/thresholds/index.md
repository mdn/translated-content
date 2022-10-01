---
title: IntersectionObserver.thresholds
slug: Web/API/IntersectionObserver/thresholds
---

{{APIRef("Intersection Observer API")}}{{SeeCompatTable}}

The {{domxref("IntersectionObserver")}} interface's read-only **`thresholds`** property returns the list of intersection thresholds that was specified when the observer was instantiated with {{domxref("IntersectionObserver.IntersectionObserver", "IntersectionObserver()")}}. If only one threshold ratio was provided when instanitating the object, this will be an array containing that single value.

See {{SectionOnPage("/en-US/docs/Web/API/Intersection_Observer_API", "Thresholds")}} to learn how thresholds work.

## Syntax

```
var thresholds = IntersectionObserver.thresholds;
```

### Value

An array of intersection thresholds, originally specified using the `threshold` property when instantiating the observer. If only one observer was specified, without being in an array, this value is a one-entry array containing that threshold. Regardless of the order your original `threshold` array was in, this one is always sorted in numerically increasing order.

If no `threshold` option was included when `IntersectionObserver()` was used to instantiate the observer, the value of `thresholds` is simply `[0]`.

> **备注：** Be careful! Although the `options` object you can specify when creating an {{domxref("IntersectionObserver")}} has a field named {{domxref("IntersectionObserver.threshold", "threshold")}}, this property is called `thresholds`. Confusing? Yes. If you accidentally use `thresholds` as the name of the field in your `options`, the `thresholds` array will wind up being simply `[0.0]`, which is likely not what you expect. Debugging chaos may ensue.

## Examples

<<<...>>>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
