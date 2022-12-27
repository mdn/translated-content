---
title: Vary
slug: Web/HTTP/Headers/Vary
translation_of: Web/HTTP/Headers/Vary
---
{{HTTPSidebar}}

**`Vary`** 헤더는 캐시 된 응답을 향후 요청들에서 오리진 서버로 새로운 요청 헤더를 요청하는 대신 사용할 수 있는지 여부를 결정합니다. 이것은 서버에서 [컨텐츠 협상](/ko/docs/Web/HTTP/Content_negotiation) 알고리즘에 어떤 리소스를 선택을 할 것인지를 가르킵니다.

`Vary` 헤더는 {{HTTPStatus("200")}} `OK` 응답과 동일하게 {{HTTPStatus("304")}} `Not Modified` 응답에서도 설정 되어야 합니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## 문법

```
Vary: *
Vary: <header-name>, <header-name>, ...
```

## 지시자

- \*
  - : 각 요청에 대해서 유일하며 캐시 할 수 없는 요청으로 간주합니다.
    이보다 더 좋은 방법으로 {{HTTPHeader("Cache-Control")}}: `no-store`, 를 사용 하는것이 객체를 저장하면 안된다는 의미로 좀더 명확하게 표시되고 읽을 수 있습니다.
- \<header-name>
  - : 헤더 이름은 쉼표로 구분되며 캐시 된 응답을 사용할 수 있는지 여부를 결정할 때 사용 됩니다.

## 예제

### 동적 제공

`Vary: User-Agent` 헤더를 사용시 캐싱 서버는 캐시된 페이지를 응답할지 여부를 User-Agent 로 고려해야합니다. 예를 들어, 모바일 유저에게 다른 컨텐츠를 제공해야 할 경우, 모바일 유저에게 데스크탑 유저를 위한 캐시 컨텐츠가 제공 되는것을 피할 수 있습니다. 구글이나 다른 검색 엔진등 에서 모바일 버전을 발견 할수 있는데 도움이 되며, [클로킹](https://en.wikipedia.org/wiki/Cloaking)이 의도되지 않는다고 볼 수도 있습니다.

```
Vary: User-Agent
```

## 기술 사양

| 기술 사양                                    | 제목                                                          |
| -------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "Vary", "7.1.4")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## 브라우저 호환성

{{Compat("http.headers.Vary")}}

## <span class="trans_txt">호환성 노트</span>

- [Vary with care – Vary header problems in IE6-9](https://blogs.msdn.microsoft.com/ieinternals/2009/06/17/vary-with-care/)

## 함께 참고할 내용

- [Understanding The Vary Header - Smashing Magazine](https://www.smashingmagazine.com/2017/11/understanding-vary-header/)
- [Best Practices for Using the Vary Header – fastly.com](https://www.fastly.com/blog/best-practices-for-using-the-vary-header)
- [Content negotiation](https://developer.mozilla.org/docs/Web/HTTP/Content_negotiation)
