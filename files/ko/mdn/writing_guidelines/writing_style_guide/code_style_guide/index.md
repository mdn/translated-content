---
title: 모든 코드에 대한 일반 가이드라인
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide
---

{{MDNSidebar}}

아래 코드 예제 가이드라인에서 HTML, CSS, JavaScript 나 다른 어느 코드로 예로 들건 , 모든 코드 타입에 적용됩니다.

## 이 문서 내용은

- [들여쓰기, 여백주기, 사이즈](/ko/docs/MDN/Contribute/Guidelines/Code_guidelines/General#들여쓰기_여백주기_사이즈)

  - [들여쓰기](/ko/docs/MDN/Contribute/Guidelines/Code_guidelines/General#들여쓰기)
  - [코드 한 줄 길이](/ko/docs/MDN/Contribute/Guidelines/Code_guidelines/General#코드_한_줄_길이)
  - [코드 블럭 높이](/ko/docs/MDN/Contribute/Guidelines/Code_guidelines/General#코드_블럭_높이)

- [예제 디스플레이 가이드라인](/ko/docs/MDN/Contribute/Guidelines/Code_guidelines/General#예제_디스플레이_가이드라인)

  - [렌더링 된 예제 크기](/ko/docs/MDN/Contribute/Guidelines/Code_guidelines/General#렌더링_된_예제_크기)
  - [이미지나 다른 미디어의 사용](/ko/docs/MDN/Contribute/Guidelines/Code_guidelines/General#이미지나_다른_미디어의_사용)
  - [컬러의 사용](/ko/docs/MDN/Contribute/Guidelines/Code_guidelines/General#컬러의_사용)
  - [좋은 예시와 나쁜 예시 강조](/ko/docs/MDN/Contribute/Guidelines/Code_guidelines/General#좋은_예시와_나쁜_예시_강조)

- [레퍼런스 페이지에 문법 섹션 작성](/ko/docs/MDN/Contribute/Guidelines/Code_guidelines/General#레퍼런스_페이지에서_문법_섹션_작성)

## 들여쓰기, 여백주기, 사이즈

### 들여쓰기

모든 코드는 2 스페이스로 들여쓰기 해야합니다. 예를 들면:

```html example-good
<div>
  <p>This is my paragraph.</p>
</div>
```

```js example-good
function myFunc() {
  if (thingy) {
    console.log("Yup, that worked.");
  }
}
```

### 코드 한 줄 길이

한 행의 코드는 최대 80자 ([대화형 예제](https://github.com/mdn/interactive-examples)는 64자) 이내로 제한 되어야 합니다. 가독성을 위해 합리적으로 행을 분리 하는 것 좋지만 모범 사례를 벗어나지는 마십시오.

예를 들면, 아래는 안 좋은 예입니다.

```js example-bad
let tommyCat =
  "Said Tommy the Cat as he reeled back to clear whatever foreign matter may have nestled its way into his mighty throat. Many a fat alley rat had met its demise while staring point blank down the cavernous barrel of this awesome prowling machine.";
```

이것은 좀 낫지만, 그래도 여전히 좋지 않습니다:

```js
let tommyCat =
  "Said Tommy the Cat as he reeled back to clear whatever foreign " +
  "matter may have nestled its way into his mighty throat. Many a fat alley rat " +
  "had met its demise while staring point blank down the cavernous barrel of " +
  "this awesome prowling machine.";
```

템플릿 리터럴을 사용하는 것이 더 좋습니다:

```js example-good
let tommyCat = `Said Tommy the Cat as he reeled back to clear whatever foreign
  matter may have nestled its way into his mighty throat. Many a fat alley rat
  had met its demise while staring point blank down the cavernous barrel of
  this awesome prowling machine.`;
```

### 코드 블럭 높이

코드 블럭은 필요한 만큼 길어야 하지만 너무 길면 안됩니다. 15에서 25 라인 정도의 길이가 이상적입니다. 코드 블럭이 너무 길어진다면, 가장 유용한 스니펫만 보여주고, 나머지 부분은 깃허브 저장소나 코드펜 같은 링크로 연결하세요.

## 예제 디스플레이 가이드라인

### 렌더링 된 예제 크기

MDN 메인 콘텐츠 창은 데스크탑에서 약 700px 크기 이므로, 삽입된 MDN 예제는 ( 삽입된 예제를 100% 너비로 설정했을 때 ) 해당 너비에서 잘 보여야 합니다.

높이의 경우, 최대한의 화면 가독성을 위해 가능하면 렌더링 된 예제 높이를 700px 아래로 유지하는 것을 추천합니다.

모바일 디바이스에서도 예제가 잘 보이도록 어느 정도는 반응형으로 동작되도록 예제를 작성하는데 신경써야 합니다.

### 이미지나 다른 미디어의 사용

가끔 이미지나 다른 미디어를 예제에 삽입하고 싶을 때가 있습니다. 그럴 때에는:

- 해당 미디어의 라이센스가 사용을 허용하는지 확인하세요. [CC0](https://creativecommons.org/share-your-work/public-domain/cc0/)와 같은 매우 관대한 라이브러리나, 적어도 일반적인 콘텐츠 라이센스인 [Creative Commons Attribution-ShareAlike license](http://creativecommons.org/licenses/by-sa/2.5/) (CC-BY-SA) 중 하나를 사용하도록 해야합니다.
- 이미지에 대해서는, <https://tinypng.com> 나 <https://imageoptim.com> 를 사용해 예제의 페이지 무게를 줄여야 합니다.
- `SVG`에 대해서는, [SVGOMG](https://jakearchibald.github.io/svgomg/)를 통해 `SVG` 파일이 파일 마지막에 빈 줄을 갖도록 해야합니다.
- 페이지에서 아이콘을 보여줄 때 (즉 {{cssxref("background-image")}} 를 이용할 때), 적당한 곳에 [빌트인 MDN 아이콘](https://mdn.github.io/mdn-fiori/patterns/css/iconography/)을 사용하고, 다른 경우와 비교하여 스타일을 맞추도록 하십시오.

### 컬러의 사용

소문자 16진수 대신, 음영이나 주요 컬러(즉, 검은색, 흰색, 빨간색)는 키워드를 사용할 수있습니다. 필요한 경우에만 좀 더 복잡한 컬러스킴을 사용하세요.( 예를 들면, 투명색이 필요할 때)

주요 "기본" 컬러는 키워드로 설정하는것이 좋습니다. 예를 들면:

```css example-good
color: black;
color: white;
color: red;
```

좀 더 복잡한 컬러는 rgb() 를 사용합니다. (반 투명 색 포함):

```css example-good
color: rgb(0, 0, 0, 0.5);
color: rgb(248, 242, 230);
```

16진수 컬러를 사용해야 한다면, 소문자를 이용하세요:

```css example-good
color: #058ed9;
color: #a39a92;
```

그리고 가능한 곳에는 단축형태를 사용하세요:

```css example-good
color: #ff0;
color: #fff;
```

[MDN's Fiori 가이드라인](https://mdn-fiori.netlify.app/)(프론트엔드 코드베이스용)은 전체 MDN 디자인에 사용된 [유용한 컬러셋](https://mdn-fiori.netlify.app/?path=/docs/docs-colors--page)을 포함하고 있습니다. ( 역자주: 영어 원문 링크가 깨져 [MDN Fiori 깃허브 리포](https://github.com/mdn/mdn-fiori) 에서 비슷한 링크를 찾아 연결했습니다.)

### 좋은 예시와 나쁜 예시 강조

이 가이드라인에서 알 수 있는 것처럼, 좋은 실습예시는 연두색에 웃는얼굴로 강조되며, 나쁜 실습 예시는 슬픈표정에 빨간 바탕으로 강조됩니다.

이 처럼 하려면, MDN 에디터 콘트롤로 코드 블럭을 `<pre>` 블럭이 되도록 하고, 적절한 문법 강조를 설정해야 합니다. 소스 코드는 아래와 비슷하게 보일겁니다:

```html
<pre class="brush: js">
    function myFunc() {
      console.log('Hello!');
    };</pre
>
```

이 상태에서 좋은 예시로 만들려면, `class` 속성의 오른쪽 따옴표 바로 앞에 `example-good`을 넣으면 됩니다:

```html
<pre class="brush: js example-good">      ...</pre>
```

나쁜 예시로 만들려면, `class` 속성의 오른쪽 따옴표 바로 앞에 `example-bad`를 넣으면 됩니다:

```html
<pre class="brush: js example-bad">      ...</pre>
```

우리는 당신이 이 기능을 사용하길 권장합니다. 모든 곳에 사용할 필요는 없습니다. 당신의 코드에서 좋은 예와 나쁜 예를 구분할 필요가 있을때 사용하세요.

## 레퍼런스 페이지에서 문법 섹션 작성

MDN 레퍼런스 페이지에는 JavaScript 메서드, CSS 속성, HTML 요소 등과 같이 기능의 구문이 무엇을 할 수 있고, 어때야 하는지 명확하게 보여주는 문법 섹션(Syntax section)이 포함되어 있습니다. 이 내용을 작성하는 가이드라인은 [Syntax sections](/ko/docs/MDN/Contribute/Structures/Syntax_sections) 문서를 참고하세요.
