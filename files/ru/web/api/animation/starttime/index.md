---
title: Window.mozAnimationStartTime
slug: Web/API/Animation/startTime
---

{{ APIRef() }}{{ non-standard_header() }}

### Summary

Возвращает время в миллисекундах с начала эпохи UNIX, начиная с которого анимации, начавшиеся в определённый момент, должны быть сочтены уже начавшимися. Это значение должно быть использовано вместо, например, [`Date.now()`](/en/JavaScript/Reference/Global_Objects/Date/now), потому что оно будет тем же самым для анимаций, начавшихся в этом окне в течение этого интервала, позволяя им синхронизироваться между собой.

Это также позволяет анимациям JavaScript оставаться синхронизированными с CSS переходами и SMIL анимациями, запущенными в течение того же интервала обновления.

### Syntax

```
time = window.mozAnimationStartTime;
```

### Parameters

- _`time`_ это время в миллисекундах с начала эпохи UNIX, начиная с которого анимации для текущего окна принимаются уже начавшимися.

### Specification

Not part of specification.

### Browser compatibility

{{Compat}}

### See also

- {{ domxref("window.mozRequestAnimationFrame()") }}
- {{ domxref("window.onmozbeforepaint") }}
