---
title: "KeyboardEvent: metaKey 속성"
slug: Web/API/KeyboardEvent/metaKey
l10n:
  sourceCommit: 6a11180a401c26ba7cab4119d419597f528be507
---

{{APIRef("UI Events")}}

**`KeyboardEvent.metaKey`** 는 어떤 이벤트가 발생했을 때
키보드의 <kbd>Meta</kbd>키가 눌려 있었는지 아닌지
(`true`) 혹은 (`false`) 를 나타내는 읽기 전용 속성입니다. 일부 운영체제에서는
키를 가로채서 감지되지 않을 수 있습니다.

> [!NOTE]
> 매킨토시 키보드에서, 이것은 <kbd>⌘ Command</kbd> 키입니다.

> [!NOTE]
> 파이어폭스 118 이전에서는, <kbd>⊞ Windows</kbd> 키가
> "Meta" 키가 아닌 "OS"키로 실행되었습니다. `KeyboardEvent.metaKey` 는
> <kbd>⊞ Windows</kbd> 키가 눌렸을 때`false`를 반환했습니다.

## 값

불리언 값입니다.

## 예제

```html
<button onclick="ismetaKey(event)">meta key를 이용하여 클릭해 보세요</button>

<p id="output"></p>
```

```js
function ismetaKey(e) {
  document.querySelector("#output").textContent =
    `metaKey pressed? ${e.metaKey}`;
}
```

### 결과

{{ EmbedLiveSample('Examples', 400, 90) }}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{ domxref("KeyboardEvent") }}
