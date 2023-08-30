---
title: "<samp>: 출력 예시 요소"
slug: Web/HTML/Element/samp
---

{{HTMLSidebar}}

**HTML `<samp>` 요소**는 컴퓨터 프로그램 출력의 예시(혹은 인용문)를 나타냅니다. 보통 브라우저의 기본 고정폭 글씨체(보통 Courier, Lucida Console)를 사용해 렌더링합니다.

{{EmbedInteractiveExample("pages/tabbed/samp.html", "tabbed-shorter")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a
          href="/ko/docs/Web/Guide/HTML/%EC%BB%A8%ED%85%90%ED%8A%B8_%EC%B9%B4%ED%85%8C%EA%B3%A0%EB%A6%AC"
          >콘텐츠 카테고리</a
        >
      </th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/컨텐트_카테고리#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >,
        <a href="/ko/docs/Web/Guide/HTML/컨텐트_카테고리#구문_콘텐츠"
          >구문 콘텐츠</a
        >, 뚜렷한 콘텐츠.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 콘텐츠</th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/컨텐트_카테고리#구문_콘텐츠"
          >구문 콘텐츠</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">태그 생략</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">가능한 부모 요소</th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/컨텐트_카테고리#구문_콘텐츠"
          >구문 콘텐츠</a
        >를 허용하는 모든 요소.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 ARIA 역할</th>
      <td>모두</td>
    </tr>
    <tr>
      <th scope="row">DOM 인터페이스</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)만 포함합니다.

## 사용 일람

브라우저가 `<samp>` 요소에 사용하는 기본 글씨체는 CSS를 사용해 바꿀 수 있습니다. 그러나 브라우저의 사용자 설정값이 모든 CSS보다 우선할 수도 있습니다.

기본 글씨체를 덮어쓸 수 있는 CSS는 다음과 같은 형태입니다.

```css
samp {
  font-family: "Courier";
}
```

> **참고:** 웹사이트나 앱의 JavaScript 코드 출력을 담을 컨테이너 요소가 필요하다면 {{HTMLElement("output")}} 요소를 사용해야 합니다.

## 예제

### 기본 예제

다음 간단한 예제는 문단이 프로그램 출력 예시를 포함하고 있습니다.

```html
<p>
  프로세스가 완료되면 유틸리티가
  <samp>Scan complete. Found <em>N</em> results.</samp> 를 출력합니다. 출력을
  확인한 후 다음 단계로 진행하세요.
</p>
```

결과는 다음과 같습니다.

{{EmbedLiveSample("기본_예제", 650, 100)}}

### 사용자 입력을 포함한 출력 예시

`<samp>` 블록 안에 {{htmlelement("kbd")}} 요소를 중첩해서 사용자가 입력하는 텍스트 예제를 나타낼 수 있습니다. 다음 예제 코드는 Linux 또는 macOS 콘솔 세션의 텍스트 복사본을 나타냅니다.

#### HTML

```html
<pre>
<samp><span class="prompt">mike@interwebz:~$</span> <kbd>md5 -s "Hello world"</kbd>
MD5 ("Hello world") = 3e25960a79dbc69b674cd4ec67a72c62

<span class="prompt">mike@interwebz:~$</span> <span class="cursor">█</span></samp></pre>
```

{{HTMLElement("span")}}을 사용해 셸 프롬프트, 콘솔 커서 등 예제 텍스트의 특정 부분에 다른 스타일을 적용했습니다. 또, `<kbd>`를 사용해 사용자가 입력한 텍스트를 나타내고 있습니다.

#### CSS

원하는 외형을 얻을 수 있는 CSS는 다음과 같습니다.

```css
.prompt {
  color: #b00;
}

samp > kbd {
  font-weight: bold;
}

.cursor {
  color: #00b;
}
```

프롬프트와 커서에 강렬하지 않은 색을 입히고, 예제 텍스트의 입력 부분을 굵게 하는 단순한 코드입니다.

#### 결과

{{EmbedLiveSample("사용자_입력을_포함한_출력_예시", 650, 120)}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 관련 요소: {{HTMLElement("kbd")}}, {{HTMLElement("code")}}, {{HTMLElement("pre")}}
- 스크립트로 생성한 출력을 담는 {{HTMLElement("output")}} 요소
