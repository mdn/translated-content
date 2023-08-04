---
title: AnimationTimeline
slug: Web/API/AnimationTimeline
---

{{ SeeCompatTable() }}{{ APIRef("Web Animations") }}

The `AnimationTimeline` interface of the [Web Animations API](/ko/docs/Web/API/Web_Animations_API) represents the timeline of an animation. This interface exists to define timeline features (inherited by {{domxref("DocumentTimeline")}} and future timeline types) and is not itself directly used by developers. Anywhere you see `AnimationTimeline`, you should use `DocumentTimeline` or any other timeline type instead.

## Properties

- {{domxref("AnimationTimeline.currentTime")}} {{readonlyInline}}
  - : Returns the time value in milliseconds for this timeline or `null` if this timeline is inactive.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- [Web Animations API](/ko/docs/Web/API/Web_Animations_API)
- {{domxref("DocumentTimeline")}}
- {{domxref("Document.timeline")}}
