---
title: "<style>: 스타일 정보 요소"
slug: Web/HTML/Element/style
---

{{HTMLSidebar}}

**HTML `<style>` 요소**는 문서나 문서 일부에 대한 스타일 정보를 포함합니다.

{{EmbedInteractiveExample("pages/tabbed/style.html", "tabbed-standard")}}

`<style>` 요소는 문서의 {{htmlelement("head")}} 안에 위치해야 합니다. 그러나, 일반적으로 스타일은 외부 스타일 시트에 작성하고, {{htmlelement("link")}} 요소로 연결하는 편이 좋습니다.

문서가 다수의 `<style>`과 `<link>` 요소를 포함하면 서로의 순서대로 {{glossary("DOM")}}에 스타일을 적용합니다. 따라서 예상치 못한 종속 문제를 피하려면 올바른 순서를 따라 `<style>` 및 `<link>` 요소를 배치해야 합니다.

`<link>` 요소와 동일하게, `<style>` 요소도 미디어 쿼리를 값으로 가지는 [`media`](/ko/docs/Web/HTML/Element/style#media) 특성을 포함할 수 있습니다. 이를 통해 {{glossary("viewport", "뷰포트")}} 너비 등 매체 기능에 따라 선택적으로 스타일 시트를 적용할 수 있습니다.

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)을 포함합니다.

- {{htmlattrdef("type")}}

  - : 스타일 언어의 MIME 유형. 문자셋은 지정하지 않아야 합니다. 선택 사항이며, 기본값은 `text/css`입니다. 빈 문자열과 `text/css` 외의 값은 사용하지 않습니다.

    > **참고:** 현대적인 웹 문서에서 이 특성을 포함할 이유는 거의 존재하지 않습니다.

- {{htmlattrdef("media")}}
  - : 스타일을 적용할 매체. 값은 [미디어 쿼리](/ko/docs/Web/Guide/CSS/Media_queries)이며, 누락할 경우 기본값은 `all`입니다.
- {{htmlattrdef("nonce")}}
  - : [`style-src Content-Security-Policy`](/ko/docs/Web/HTTP/Headers/Content-Security-Policy/style-src)에서 인라인 스타일을 화이트리스트에 추가할 때 사용하는 논스(임시 값). 서버는 매번 정책을 전송할 때마다 새로운 고유 논스를 생성해야 합니다. 논스 값을 알고 있는 공격자라면 리소스 정책을 우회하는 것은 매우 간단한 일이므로, 사전에 유추할 수 없는 값을 생성하는 것이 중요합니다.
- {{htmlattrdef("title")}}
  - : [대체 스타일 시트](/ko/docs/Web/CSS/Alternative_style_sheets) 세트를 지정합니다.

### 사용 중단된 특성

- {{htmlattrdef("scoped")}} {{non-standard_inline}} {{deprecated_inline}}

  - : 지정한 경우, `<style>` 요소의 부모 및 부모의 자식에만 스타일을 적용합니다.

    > **참고:** `scoped` 특성은 <https://github.com/w3c/csswg-drafts/issues/3547>에 따라 나중에 다시 추가될 수도 있습니다. 지금 사용하고 싶은 경우 [폴리필](https://github.com/samthor/scoped)을 추가하세요.

## 예제

### 간단한 스타일 시트

```html
<!doctype html>
<html>
  <head>
    <style>
      p {
        color: red;
      }
    </style>
  </head>
  <body>
    <p>This is my paragraph.</p>
  </body>
</html>
```

{{EmbedLiveSample('간단한_스타일_시트', '100%', '60')}}

### 다수의 `<style>` 요소

다음 예제는 두 개의 `<style>` 요소를 사용합니다. 같은 명시도를 가진 경우, 뒤쪽 `<style>`이 앞쪽을 덮어쓰는 것에 주목하세요.

```html
<!doctype html>
<html>
  <head>
    <style>
      p {
        color: white;
        background-color: blue;
        padding: 5px;
        border: 1px solid black;
      }
    </style>
    <style>
      p {
        color: blue;
        background-color: yellow;
      }
    </style>
  </head>
  <body>
    <p>This is my paragraph.</p>
  </body>
</html>
```

{{EmbedLiveSample('다수의_style_요소', '100%', '60')}}

### 미디어 쿼리 포함

이번 예제에서는 앞선 코드의 두 번째 `<style>` 요소에 `media` 특성을 추가하고, {{glossary("viewport", "뷰포트")}}의 너비가 500px 미만일 때에만 스타일을 적용하도록 지정합니다.

```html
<!doctype html>
<html>
  <head>
    <style>
      p {
        color: white;
        background-color: blue;
        padding: 5px;
        border: 1px solid black;
      }
    </style>
    <style media="all and (max-width: 500px)">
      p {
        color: blue;
        background-color: yellow;
      }
    </style>
  </head>
  <body>
    <p>This is my paragraph.</p>
  </body>
</html>
```

{{EmbedLiveSample('미디어_쿼리_포함', '100%', '60')}}

## 기술 요약

<table class="properties">
  <tbody>
    <tr>
      <th>
        <a
          href="/ko/docs/Web/Guide/HTML/%EC%BB%A8%ED%85%90%ED%8A%B8_%EC%B9%B4%ED%85%8C%EA%B3%A0%EB%A6%AC"
          >콘텐츠 카테고리</a
        >
      </th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/컨텐트_카테고리#메타데이터_콘텐츠"
          >메타데이터 콘텐츠</a
        >. <code>scoped</code> 특성이 존재하면
        <a href="/ko/docs/Web/Guide/HTML/컨텐트_카테고리#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >.
      </td>
    </tr>
    <tr>
      <th>가능한 콘텐츠</th>
      <td><code>type</code> 특성에 맞는 텍스트, 즉 <code>text/css</code>.</td>
    </tr>
    <tr>
      <th>태그 생략</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th>가능한 부모 요소</th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/컨텐트_카테고리#메타데이터_콘텐츠"
          >메타데이터 콘텐츠</a
        >를 허용하는 모든 요소
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 ARIA 역할</th>
      <td>없음</td>
    </tr>
    <tr>
      <th>DOM 인터페이스</th>
      <td>{{domxref("HTMLStyleElement")}}</td>
    </tr>
  </tbody>
</table>

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 외부 스타일 시트를 사용하기 위한 {{HTMLElement("link")}} 요소.
