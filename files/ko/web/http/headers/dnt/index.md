---
title: DNT
slug: Web/HTTP/Headers/DNT
---

{{HTTPSidebar}}

**`DNT`** (**D**o **N**ot **T**rack) 요청 헤더는 사용자의 트래킹 선호 설정을 가르킵니다. 이는 개인화 컨텐츠가 아닌 사생활 정보를 더 It lets users indicate whether would prefer privacy rather than personalized content.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>yes</td>
    </tr>
  </tbody>
</table>

## 문법

```
DNT: 0
DNT: 1
```

## 디렉티브

- 0
  - : 사용자가 대상 사이트에 대해 트래킹을 허용하는 것을 말합니다.
- 1
  - : 사용자가 대상 사이트에 대해 트래킹을 원하지 않는 것을 말합니다.

## 예제

### JavaScript를 통해 Do Not Track 상태 읽기

사용자의 DNT 선호 설정은 {{domxref("Navigator.doNotTrack")}} 프로퍼티를 사용해 JavaScript로도 읽을 수 있씁니다:

```js
navigator.doNotTrack; // "0" or "1"
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 함께 참고할 내용

- {{domxref("Navigator.doNotTrack")}}
- {{HTTPHeader("Tk")}} header
- [Do Not Track on Wikipedia](https://en.wikipedia.org/wiki/Do_Not_Track)
- [What Does the "Track" in "Do Not Track" Mean? – EFF](https://www.eff.org/deeplinks/2011/02/what-does-track-do-not-track-mean)
- [donottrack.us](http://donottrack.us/)
- DNT browser settings help:

  - [Firefox](https://www.mozilla.org/en-US/firefox/dnt/)
  - [Chrome](https://support.google.com/chrome/answer/2790761)
