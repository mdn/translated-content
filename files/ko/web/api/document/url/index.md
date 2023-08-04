---
title: Document.URL
slug: Web/API/Document/URL
---

{{APIRef("DOM")}}

{{domxref("Document")}} 인터페이스의 **`URL`** 읽기 전용 속성은 문서의 주소를 문자열로 반환합니다.

## 예제

### JavaScript

```js
document.getElementById("url").textContent = document.URL;
```

### HTML

```html
<p id="urlText">
  URL:<br />
  <span id="url">URL이 여기 보입니다</span>
</p>
```

### 결과

{{EmbedLiveSample("예제", "100%", 100)}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("HTMLDocument")}}
