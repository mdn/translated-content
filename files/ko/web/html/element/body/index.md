---
title: "<body>: 문서 본문 요소"
slug: Web/HTML/Element/body
---

{{HTMLSidebar}}

**HTML `<body>` 요소**는 HTML 문서의 내용을 나타냅니다. 한 문서에 하나의 `<body>` 요소만 존재할 수 있습니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ko/docs/Web/Guide/HTML/Content_categories">콘텐츠 카테고리</a>
      </th>
      <td>
        <a
          href="/ko/docs/Web/HTML/Sections_and_Outlines_of_an_HTML5_document#Sectioning_roots"
          >구획 루트</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 콘텐츠</th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">태그 생략</th>
      <td>
        태그 내의 첫번째 것이 공백, 주석, {{HTMLElement("script")}}요소,
        {{HTMLElement("style")}}요소가 아닐경우 시작태그를 생략할수
        있습니다. body 요소가 시작태그를 가지고있고, 바로 뒤에 주석이 따라오지
        않는다면 종료 태그를 생략할수 있습니다.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 부모 요소</th>
      <td>{{HTMLElement("html")}} 요소의 두번째 요소여야 합니다.</td>
    </tr>
    <tr>
      <th scope="row">암시적 ARIA 역할</th>
      <td>
        <a href="/ko/docs/Web/Accessibility/ARIA/Roles/Document_Role"
          ><code>document</code></a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 ARIA 역할</th>
      <td>없음</td>
    </tr>
    <tr>
      <th scope="row">DOM 인터페이스</th>
      <td>
        {{domxref("HTMLBodyElement")}}
        <ul>
          <li>
            <code>&#x3C;body></code> 요소는
            {{domxref("HTMLBodyElement")}} 인터페이스를 노출합니다.
          </li>
          <li>
            {{domxref("document.body")}} 속성을 통해
            <code>&#x3C;body></code> 요소에 접근할 수 있습니다.
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)을 포함합니다.

- {{htmlattrdef("alink")}} {{deprecated_inline}}
  - : 선택한 하이퍼텍스트 링크의 색. _이 방법은 적합하지 않습니다. CSS {{cssxref("color")}} 속성과 {{cssxref(":active")}}의 조합을 대신 사용하세요._
- {{htmlattrdef("background")}} {{deprecated_inline}}
  - : 배경 이미지의 URI. _이 방법은 적합하지 않습니다. CSS {{cssxref("background")}} 속성을 대신 적용하세요._
- {{htmlattrdef("bgcolor")}} {{deprecated_inline}}
  - : 배경색. _이 방법은 적합하지 않습니다. CSS {{cssxref("background-color")}} 속성을 대신 적용하세요._
- {{htmlattrdef("bottommargin")}} {{deprecated_inline}}
  - : 아래쪽 여백. _이 방법은 적합하지 않습니다. CSS {{cssxref("margin-bottom")}} 속성을 대신 적용하세요._
- {{htmlattrdef("leftmargin")}} {{deprecated_inline}}
  - : 왼쪽 여백. _이 방법은 적합하지 않습니다. CSS {{cssxref("margin-left")}} 속성을 대신 적용하세요._
- {{htmlattrdef("link")}} {{deprecated_inline}}
  - : 방문하지 않은 하이퍼텍스트 링크의 색. _이 방법은 적합하지 않습니다. CSS {{cssxref("color")}} 속성과 {{cssxref(":link")}}의 조합을 대신 사용하세요._
- {{htmlattrdef("onafterprint")}}
  - : 사용자가 문서를 출력한 뒤 호출할 함수.
- {{htmlattrdef("onbeforeprint")}}
  - : 사용자가 문서 출력을 요청했을 때 호출할 함수.
- {{htmlattrdef("onbeforeunload")}}
  - : 문서를 처분unload하기 직전에 호출할 함수.
- {{htmlattrdef("onblur")}}
  - : 문서가 포커스를 상실했을 때 호출할 함수.
- {{htmlattrdef("onerror")}}
  - : 문서를 제대로 불러오지 못했을 때 호출할 함수.
- {{htmlattrdef("onfocus")}}
  - : 문서가 포커스를 받을 때 호출할 함수.
- {{htmlattrdef("onhashchange")}}
  - : 문서의 현재 주소 중 Fragment identifier part(해시(`'#'`) 문자로 시작)가 변경됐을 때 호출할 함수.
- {{htmlattrdef("onlanguagechange")}} {{experimental_inline}}
  - : 선호 언어 변경 시 호출할 함수.
- {{htmlattrdef("onload")}}
  - : 문서를 다 불러왔을 때 호출할 함수.
- {{htmlattrdef("onmessage")}}
  - : 문서가 메시지를 받았을 때 호출할 함수.
- {{htmlattrdef("onoffline")}}
  - : 네트워크 연결이 실패했을 때 호출할 함수.
- {{htmlattrdef("ononline")}}
  - : 네트워크 연결을 복구했을 때 호출할 함수.
- {{htmlattrdef("onpopstate")}}
  - : 사용자가 세션 기록을 따라 이동했을 때 호출할 함수.
- {{htmlattrdef("onredo")}}
  - : 사용자가 되돌리기 변경 기록(undo transaction history)에서 다시 이후로 이동했을 때 호출할 함수.
- {{htmlattrdef("onresize")}}
  - : 문서의 크기가 바뀔 때 호출할 함수.
- {{htmlattrdef("onstorage")}}
  - : 저장 영역이 변경되었을 때 호출할 함수.
- {{htmlattrdef("onundo")}}
  - : 사용자가 되돌리기 변경 기록(undo transaction history)에서 이전으로 이동했을 때 호출할 함수.
- {{htmlattrdef("onunload")}}
  - : 문서를 처분(unload) 중일 때 호출할 함수.
- {{htmlattrdef("rightmargin")}} {{deprecated_inline}}
  - : 오른쪽 여백. _이 방법은 적합하지 않습니다. CSS {{cssxref("margin-right")}} 속성을 대신 적용하세요._
- {{htmlattrdef("text")}} {{deprecated_inline}}
  - : 글자의 전경색. _이 방법은 적합하지 않습니다. CSS {{cssxref("color")}} 속성을 대신 적용하세요._
- {{htmlattrdef("topmargin")}} {{deprecated_inline}}
  - : 위쪽 여백. _이 방법은 적합하지 않습니다. CSS {{cssxref("margin-top")}} 속성을 대신 적용하세요._
- {{htmlattrdef("vlink")}} {{deprecated_inline}}
  - : 방문했던 하이퍼텍스트 링크의 색. _이 방법은 적합하지 않습니다. CSS {{cssxref("color")}} 속성과 {{cssxref(":visited")}}의 조합을 대신 사용하세요._

## 예제

```html
<html>
  <head>
    <title>문서 제목</title>
  </head>
  <body>
    <p>문단입니다</p>
  </body>
</html>
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{HTMLElement("html")}}
- {{HTMLElement("head")}}
