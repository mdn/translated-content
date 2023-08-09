---
title: Document.compatMode
slug: Web/API/Document/compatMode
---

{{ApiRef("DOM")}}

**`Document.compatMode`** 속성은 문서 렌더링을 [호환 모드](/ko/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)에서 진행했는지, 표준 모드에서 진행했는지 나타냅니다.

## 구문

```js
const mode = document.compatMode;
```

### 값

다음 중 하나.

- 문서가 호환 모드이면 `"BackCompat"`
- 문서가 호환 모드가 아니거나("표준") 제한적 호환("거의 표준") 모드이면 `"CSS1Compat"`

> **참고:** 위의 모든 모드는 표준화됐으므로, 오래 전에 사용하던 "표준"과 "거의 표준"이라는 이름은 말이 되지 않아 이제 사용하지 않습니다.

## 예제

```js
if (document.compatMode == "BackCompat") {
  // in Quirks mode
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
