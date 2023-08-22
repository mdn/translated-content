---
title: <frameset>
slug: Web/HTML/Element/frameset
---

{{Deprecated_header}}

## 요약

`<frameset>`은 HTML element로써 {{HTMLElement("frame")}} element을 포함하고 사용된다.

> **참고:**frame의 사용이 지금 {{HTMLElement("iframe")}}의 사용에 따라줄어드는 추세이기 때문에 , 이 element는 최근 웹사이트에서 잘 쓰이지 않는다.

## 속성(=Attributes)

다른 모든 HTML elments와 마찬가지로, `<frameset>` element는 전역속성([global attributes](/en-US/HTML/Global_attributes))이 적용된다.

- {{htmlattrdef("cols")}}
  - : 이 속성은 프레임셋안의 가로공간의 갯수와 크기를 정합니다.
- {{htmlattrdef("rows")}}
  - : 이 속성은 프레임셋안의 세로공간의 갯수와 크기를 정합니다.

## 예시

```html
<frameset cols="50%,50%">
  <frame src="https://developer.mozilla.org/en/HTML/Element/frameset" />
  <frame src="https://developer.mozilla.org/en/HTML/Element/frame" />
</frameset>
```

## 참조

- {{HTMLElement("frame")}}
- {{HTMLElement("iframe")}}

{{HTMLSidebar}}
