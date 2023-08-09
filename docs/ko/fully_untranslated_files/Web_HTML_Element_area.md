---
title: <area>
slug: Web/HTML/Element/area
---

{{HTMLSidebar}}

**HTML `<area>` 요소**는 이미지의 핫스팟 영역을 정의하고 {{glossary("hyperlink", "하이퍼링크")}}를 추가할 수 있습니다. {{htmlelement("map")}} 요소 안에서만 사용할 수 있습니다.

{{EmbedInteractiveExample("pages/tabbed/area.html", "tabbed-taller")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ko/docs/Web/Guide/HTML/Content_categories">콘텐츠 카테고리</a>
      </th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >,
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#구문_콘텐츠"
          >구문 콘텐츠</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 콘텐츠</th>
      <td>
        없음. {{glossary("empty element", "빈 요소")}}입니다.
      </td>
    </tr>
    <tr>
      <th scope="row">태그 생략</th>
      <td>여는 태그는 존재해야 하며 닫는 태그는 존재해선 안됩니다.</td>
    </tr>
    <tr>
      <th scope="row">가능한 부모 요소</th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#구문_콘텐츠"
          >구문 콘텐츠</a
        >를 허용하는 모든 요소. 단, 조상 중 {{htmlelement("map")}} 요소가
        존재해야 합니다.
      </td>
    </tr>
    <tr>
      <th scope="row">암시적 ARIA 역할</th>
      <td>
        <a href="/ko/docs/Web/HTML/Element/area#href"><code>href</code></a> 특성이 존재하면
        <a href='/ko/docs/Web/Accessibility/ARIA/Roles/link_role'><code>link</code></a>, 그 외의 경우
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >대응하는 역할 없음</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 ARIA 역할</th>
      <td>없음</td>
    </tr>
    <tr>
      <th scope="row">DOM 인터페이스</th>
      <td>{{domxref("HTMLAreaElement")}}</td>
    </tr>
  </tbody>
</table>

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)을 포함합니다.

- {{htmlattrdef("alt")}}

  - : 이미지를 출력하지 않는 브라우저에서 대신 표시할 대안 텍스트입니다. 텍스트의 내용은 대안 텍스트 없이 이미지만 표시할 때와 동일한 수준의 선택지를 나타낼 수 있어야 합니다. [`href`](/ko/docs/Web/HTML/Element/area#href) 특성이 존재할 경우 필수 사항입니다.

- {{htmlattrdef("coords")}}

  - : 핫스팟 영역을 지정하는 일련의 좌표입니다. 값의 수와 의미는 `shape` 특성의 값에 따라 달라집니다.

    - `rect`: 좌상단과 우하단을 나타내는 두 개의 x, y 쌍입니다.
    - `circle`: `x,y,r`로서 `x,y`는 원의 중심 좌표이며 `r`은 반지름입니다.
    - `poly`: 다각형의 꼭지점을 나타내는 다수의 x, y 쌍(`x1,y1,x2,y2,x3,y3,...`)입니다.

    값의 단위는 CSS 픽셀입니다.

- {{htmlattrdef("download")}}

특성이 존재할 경우, 이 하이퍼링크는 리소스 다운로드 용도로 사용하는 것을 의도했음을 나타냅니다. {{htmlelement("a")}}의 [`download`](/ko/docs/Web/HTML/Element/a#download) 특성 설명에서 전체 설명을 볼 수 있습니다.</dl>

- {{htmlattrdef("href")}}
  - : `<area>` 하이퍼링크의 대상입니다. 유효한 URL이야 합니다. 생략할 경우, 이 `<area>` 요소는 하이퍼링크를 나타내지 않습니다.
- {{htmlattrdef("hreflang")}}
  - : 연결한 리소스의 언어를 나타냅니다. 가능한 값은 [BCP47](https://www.ietf.org/rfc/bcp/bcp47.txt)에 따릅니다. [`href`](/ko/docs/Web/HTML/Element/area#href) 특성이 존재할 때만 사용하세요.
- {{htmlattrdef("ping")}}

  - : 하이퍼링크를 따라갈 때, 백그라운드에서 브라우저가 {{HTTPMethod("POST")}} 요청을 본문 `PING`으로 전송할 URL의 목록입니다. 공백으로 구분하며 주로 추적용으로 사용합니다.

- {{htmlattrdef("referrerpolicy")}} {{experimental_inline}}

  - : A string indicating which referrer to use when fetching the resource:

    - `"no-referrer"` meaning that the `Referer:` header will not be sent.
    - "`no-referrer-when-downgrade`" meaning that no `Referer:` header will be sent when navigating to an origin without TLS (HTTPS). This is a user agent's default behavior, if no policy is otherwise specified.
    - `"origin"` meaning that the referrer will be the origin of the page, that is roughly the scheme, the host and the port.
    - "origin-when-cross-origin" meaning that navigations to other origins will be limited to the scheme, the host and the port, while navigations on the same origin will include the referrer's path.
    - `"unsafe-url"` meaning that the referrer will include the origin and the path (but not the fragment, password, or username). This case is unsafe because it can leak origins and paths from TLS-protected resources to insecure origins.

- {{htmlattrdef("rel")}}
  - : For anchors containing the **href** attribute, this attribute specifies the relationship of the target object to the link object. The value is a comma-separated list of [link types values](/ko/docs/Web/HTML/Link_types). The values and their semantics will be registered by some authority that might have meaning to the document author. The default relationship, if no other is given, is void. Use this attribute only if the **href** attribute is present.
- {{htmlattrdef("shape")}}

  - : 관련된 핫 스폿의 모양. The specifications for HTML 5 and HTML 4 define the values `rect`, which defines a rectangular region; `circle`, which defines a circular region; `poly`, which defines a polygon; and `default`, which indicates the entire region beyond any defined shapes. Many browsers, notably Internet Explorer 4 and higher, support `circ`, `polygon`, and `rectangle` as valid values for **shape**; these values are {{Non-standard_inline}}.

- {{htmlattrdef("target")}}

  - : 이 속성은 링크된 리소스가 어디에 표시될지 지정합니다. HTML4에서 이것은 프레임의 이름이나 키워드가 될수 있습니다. HTML5에서는, 브라우징 컨텍스트(탭,윈도우,인라인 프레임)의 이름이나 키워드가 될수 있습니다. 다음 키워드들은 특별한 의미를 가지고 있습니다.

    - `_self`: 결과를 현재 HTML4 프레임 또는 HTML5 브라우징 컨텍스트에 로드합니다. 이 target 속성이 정의되어있지 않은경우 이 값이 기본값이 됩니다.
    - `_blank`: 결과를 이름없는 새로운 HTML4 윈도우나 HTML5 브라우징 컨텍스트에 로드합니다.
    - `_parent`: 결과를 현재 HTML4 프레임의 부모 프레임셋에 로드하거나 부모 HTML5 브라우징 컨텍스트에 로드합니다. 만약 부모가 없을 경우 \_self와 동일하게 여겨집니다.
    - `_top`: HTML4에서는, 다른 모든 프레임을 취소하고 결과를 꽉찬 본래의 윈도우에 로드합니다. HTML5에서는, 결과를 최상위 브라우징 컨텍스트에 로드합니다. 만약 부모가 없다면, 이 옵션은 \_self와 같이 행동합니다.

    이 속성은 **href** 속성이 존재할떄만 사용합니다.

### Deprecated attributes

- {{htmlattrdef("name")}} {{deprecated_inline}}

Define a names for the clickable area so that it can be scripted by older browsers.

- {{htmlattrdef("nohref")}} {{deprecated_inline}}

Indicates that no hyperlink exists for the associated area.

> **Note:** Since HTML5, omitting the `href` attribute is sufficient.

- {{htmlattrdef("tabindex")}} {{deprecated_inline}}

A numeric value specifying the position of the defined area in the browser tabbing order. This attribute is global in HTML5.

- {{htmlattrdef("type")}} {{deprecated_inline}}

No effect. Browsers ignore it. (The W3C 5.3 fork of the HTML specification defines it as valid, but [the canonical HTML specification](https://html.spec.whatwg.org/multipage/#the-area-element) doesn't, and it has no effect in any user agents.)

## 예제

```html
<map name="primary">
  <area shape="circle" coords="200,250,25" href="another.htm" />
  <area shape="default" nohref />
</map>
<img usemap="#primary" src="http://placehold.it/350x150" alt="350 x 150 pic" />
```

### 결과

{{EmbedLiveSample('예제', 360, 160)}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
