---
title: DOMImplementation.hasFeature
slug: Web/API/DOMImplementation/hasFeature
---

{{ApiRef("DOMImplementation")}}

The **`DOMImplementation.hasFeature()`** method returns a {{domxref("Boolean")}} flag indicating if a given feature is supported.

The different implementation fairly diverged in what kind of features was reported. The latest version of the spec settled to force this method to always return `true`, except for SVG features, where the functionnality was accurate and in use.

## Syntax

```plain
flag = document.implementation.hasFeature(feature, version);
```

### Parameters

- _feature_
  - : Is a {{domxref("DOMString")}} representing the feature name.
- _version_
  - : Is a {{domxref("DOMString")}} representing the version of the specification defining the feature.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("DOMImplementation")}} interface it belongs to.
