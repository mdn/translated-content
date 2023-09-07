---
title: 이미지 갤러리
slug: Learn/JavaScript/Building_blocks/Image_gallery
---

{{LearnSidebar}}{{PreviousMenu("Learn/JavaScript/Building_blocks/Events", "Learn/JavaScript/Building_blocks")}}

이제 우리는 JavaScript의 핵심적인 구성 요소를 살펴보았으므로, 우리는 반복문, 함수, 조건문, 그리고 이벤트에 대한 여러분의 이해를 시험할 것입니다. 많은 웹사이트들에서 보게 될 꽤 흔한 아이템인 — JavaScript를 이용하는 이미지 갤러리를 만듦으로써 말이죠.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">필요한 사전 지식:</th>
      <td>
        이 평가를 시도하기 전에 여러분은 이 모듈의 모든 문서를 독파해야만
        합니다.
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>
        JavaScript 반복문, 함수, 조건문, 그리고 이벤트에 대한 이해 시험하기.
      </td>
    </tr>
  </tbody>
</table>

## 시작점

이 평가를 시작하기 위해, 다음의 링크로 가서 예제에 대한 [ZIP 파일](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/gallery/gallery-start.zip?raw=true)을 다운로드하고, 압축을 해제한 후 진행하세요.

그 대신에, [JSBin](https://jsbin.com/) 나 [Glitch](https://glitch.com/) 같은 사이트를 이용할 수 있습니다. HTML, CSS 그리고 JavaScript를 이 온라인 에디터 중 하나에 붙여넣기할 수 있습니다. 만약 온라인 에디터가 분리된 JavaScript/CSS 패널을 가지고 있지 않다면, 자유롭게 HTML 페이지 내부의 인라인 `<script>`/`<style>` 요소에 넣으세요.

> **참고:** 만약 막히면, 도움을 요청하세요 — 이 페이지 아래의 [Assessment or further help](#assessment_or_further_help) 섹션을 보세요.

## 프로젝트 개요

여러분에게 몇몇 HTML, CSS 그리고 이미지 에셋(asset) 그리고 몇 줄의 JavaScript 코드가 제공되었습니다; 여러분은 이것을 작동하는 프로그램으로 만들기 위해 필수적인 JavaScript를 작성할 필요가 있습니다. HTML body는 다음과 같습니다:

```html
<h1>Image gallery example</h1>

<div class="full-img">
  <img class="displayed-img" src="images/pic1.jpg" />
  <div class="overlay"></div>
  <button class="dark">Darken</button>
</div>

<div class="thumb-bar"></div>
```

예제는 다음과 같습니다:

![](gallery.png)

이 예제의 가장 흥미로운 부분은 CSS 파일입니다:

- 이것은 `full-img <div>` 내부의 세 요소를 절대적으로 위치시킵니다 — 전체 크기의 이미지가 표시되는 `<img>`, `<img>`와 같은 크기이고 이것 바로 위에 놓여지는 비어있는 `<div>` (반투명한 배경색을 통해 이미지에 어두워지는 효과를 적용하기 위해 쓰입니다), 그리고 어두워지는 효과를 제어하기 위해 쓰이는 `<button>`.
- 이것은 `thumb-bar <div>` (소위 "섬네일" 이미지) 내부의 이미지들의 폭을 20%로 설정하고, 사진들이 한 줄에서 서로의 다음에 오도록 왼쪽으로 부유시킵니다.

여러분의 JavaScript는 다음을 하기를 필요로 합니다:

- 모든 이미지를 순회하고, 각각에 대해 `<img>` 요소를 페이지에 그 이미지를 끼워 넣는 `thumb-bar <div>` 내부에 삽입하기.
- `onclick` 핸들러를 `thumb-bar <div>` 내부의 각 `<img>`에 부착해 그것들이 클릭되었을 때, 해당하는 이미지가 `displayed-img <img>` 요소에 표시되도록 하기.
- `onclick` 핸들러를 `<button>`에 부착해 이것이 클릭되었을 때, 어두워지는 효과가 전체 크기 이미지에 적용되도록 하기. 이 버튼이 다시 클릭되었을 때, 어두워지는 효과는 다시 사라집니다.

더 많은 생각을 제공 받으려면, [완성된 예제](https://mdn.github.io/learning-area/javascript/building-blocks/gallery/)를 살펴보세요. (소스 코드 훔쳐보기 없기!)

## 완료해야할 단계

다음의 섹션들은 무엇을 할 필요가 있는지 설명합니다.

### 이미지 순회하기

우리는 이미 `thumbBar` 상수 내부에 `thumb-bar <div>`에 대한 참조를 저장하고, 새로운 `<img>` 요소를 생성하고, 그것의 `src` 어트리뷰트를 플레이스홀더 값 `xxx`로 설정하고, 그리고 `thumbBar` 내부에 이 새로운 `<img>` 요소를 추가하는 코드를 제공했습니다.

여러분은 다음을 할 필요가 있습니다:

1. 5개의 모든 이미지를 순회하는 반복문 내부의 "Looping through images" 주석 아래에 코드 섹션 추가하기 — 여러분은 그저 5개의 숫자를 순회할 필요가 있는데, 각 숫자는 각각의 이미지를 나타냅니다.
2. 각각의 반복에서, `xxx` 플레이스홀더 값을 각 경우의 이미지 경로와 동일한 문자열으로 대체하세요. 우리는 `src` 어트리뷰트의 값을 각 경우에서 이 값으로 설정하고 있습니다. 각 경우에서, 이미지는 이미지 디렉토리 내부에 있고 그것의 이름은 `pic1.jpg`, `pic2.jpg` 등등이라는 것을 기억해 두세요.

### onclick 핸들러를 각 섬네일 이미지에 추가하기

각각의 반복에서, 여러분은 `onclick` 핸들러를 현재의 `newImage`에 추가할 필요가 있습니다 — 이 핸들러는 현재 이미지의 `src` 어트리뷰트의 값을 찾아야만 합니다. `displayed-img <img>`의 `src` 어트리뷰트 값을 매개변수로서 전달된 `src` 값으로 설정하세요.

그 대신에, 여러분은 섬네일 바에 하나의 이벤트 리스너를 추가할 수 있습니다.

### 어두워지게/밝게 하는 버튼을 실행하는 핸들러 작성하기

우리의 어두워지게/밝게 하는 `<button>`은 가만히 있습니다 — 우리는 이미 `btn` 상수에 `<button>`에 대한 참조를 저장하는 코드 라인을 제공했습니다. 여러분은 다음을 수행하는 `onclick`을 추가할 필요가 있습니다:

1. `<button>`에 설정된 현재 클래스명을 확인 — 여러분은 다시 이것을 `getAttribute()`를 사용함으로써 달성할 수 있습니다.
2. 만약 클래스명이 `"dark"`라면, `<button>` 클래스를 `"light"`로 ([`setAttribute()`](/ko/docs/Web/API/Element/setAttribute)를 사용하여), 이것의 텍스트 콘텐츠를 "Lighten"으로, 그리고 덮어씌운 `<div>`의 {{cssxref("background-color")}}를 `"rgba(0,0,0,0.5)"`로 변경.
3. 만약 클래스명이 `"dark"`가 아니라면, `<button>` 클래스를 `"dark"`로, 이것의 텍스트 콘텐츠를 다시 "Darken"으로, 덮어씌운 `<div>`의 {{cssxref("background-color")}}를 `"rgba(0,0,0,0)"`로 변경.

다음의 코드 라인은 위의 2와 3에서 규정된 변화 달성에 대한 기초를 제공합니다.

```js
btn.setAttribute("class", xxx);
btn.textContent = xxx;
overlay.style.backgroundColor = xxx;
```

## 힌트와 팁

- 여러분은 어떤 방법으로도 HTML 또는 CSS를 수정할 필요가 없습니다.

## 평가 혹은 추가적인 도움

만약 여러분의 작업을 평가받고 싶으시거나 막혀서 도움을 요청하기를 원하신다면:

1. 여러분의 작업을 [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), 또는 [Glitch](https://glitch.com/) 같은 온라인에서 공유 가능한 에디터에 올리세요.
2. [MDN Discourse forum Learning category](https://discourse.mozilla.org/c/mdn/learn) 에 평가 및/또는 도움을 요청하는 글을 작성하세요. 여러분의 글은 다음을 포함해야만 합니다:

   - "이미지 갤러리에 대한 평가 원함"과 같은 서술적인 제목.
   - 여러분이 이미 무엇을 시도해 봤는지, 그리고 우리가 무엇을 하기를 원하는지에 대한 설명. 예를 들자면, 막혀서 도움이 필요하다거나, 평가를 원한다거나 하는 설명을 포함해야 합니다.
   - (위의 단계 1에서 언급된) 온라인에서 공유 가능한 에디터에 있는, 여러분이 평가를 원하거나 도움이 필요한 예제의 링크. 이것은 익숙해지기에 좋은 습관입니다. 코딩 문제가 있는 누군가를 도울 때, 그들의 코드를 보지 못한다면 그들을 돕는 것은 몹시 힘듭니다.
   - 우리가 여러분이 도움을 원하는 문제를 찾을 수 있도록, 실제 과제나 평가 페이지의 링크.

{{PreviousMenu("Learn/JavaScript/Building_blocks/Events", "Learn/JavaScript/Building_blocks")}}
