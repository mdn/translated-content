---
title: "`word-break` CSS 속성"
short-title: word-break
slug: Web/CSS/Reference/Properties/word-break
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

[CSS](/ko/docs/Web/CSS) **`word-break`** 속성은 텍스트가 자신의 콘텐츠 박스 밖으로 오버플로 할 때 줄을 바꿀지 지정합니다.

{{InteractiveExample("CSS Demo: word-break")}}

```css interactive-example-choice
word-break: normal;
```

```css interactive-example-choice
word-break: break-all;
```

```css interactive-example-choice
word-break: keep-all;
```

```css interactive-example-choice
word-break: break-word;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    Honorificabilitudinitatibus califragilisticexpialidocious
    Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
    グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉
  </div>
</section>
```

```css interactive-example
#example-element {
  width: 80%;
  padding: 20px;
  text-align: start;
  border: solid 1px darkgray;
}
```

## 구문

```css
/* 키워드 값 */
word-break: normal;
word-break: break-all;
word-break: keep-all;
word-break: auto-phrase; /* 실험적 */
word-break: break-word; /* 사용 중단 */

/* 전역 값 */
word-break: inherit;
word-break: initial;
word-break: revert;
word-break: revert-layer;
word-break: unset;
```

`word-break` 속성은 아래의 값 중 하나를 선택해서 지정할 수 있습니다.

### 값

- `normal`
  - : 기본 줄 바꿈 규칙을 사용합니다.
- `break-all`
  - : 오버플로를 방지하기 위해서는 어떠한 두 문자 사이에서도 줄 바꿈이 발생할 수 있습니다. (한중일 텍스트 제외)
- `keep-all`
  - : 한중일(CJK) 텍스트에서는 줄을 바꿀 때 단어를 끊지 않습니다. 비 CJK 텍스트에서는 `normal`과 동일합니다.
- `auto-phrase`
  - : `word-break: normal`과 같은 효과를 내지만, 언어별 분석을 통해 자연스러운 구절 중간에서 줄을 바꾸지 않도록 줄 바꿈 위치를 개선합니다.
- `break-word`
  - : 실제 {{cssxref("overflow-wrap")}} 속성에 상관하지 않고, `word-break: normal`과 `overflow-wrap: anywhere`를 설정한 것과 같은 효과를 냅니다.

> [!NOTE]
> `word-break: break-word`와 `overflow-wrap: break-word`({{cssxref("overflow-wrap")}} 참고)와 달리, `word-break: break-all`은 텍스트의 오버플로가 시작하는 정확한 지점에서 줄을 바꿉니다. 단어 전체를 다음 줄로 이동하면 중간을 끊지 않아도 될 상황에서도 마찬가지입니다.

명세서에는 `manual`이라는 값도 있지만, 아직 이 값을 지원하는 브라우저는 없습니다. 구현된다면 `manual`은 `word-break: normal`과 같은 효과를 내되, 동남아시아 언어에서는 줄을 바꿀 위치를 자동으로 찾지 않습니다. 이런 언어에서는 사용자 에이전트가 적절하지 않은 위치에서 줄을 바꾸는 경우가 많아 이 값이 필요합니다. `manual`을 사용하면 적절한 위치에 직접 줄 바꿈을 넣을 수 있습니다.

## 형식 정의

{{CSSInfo}}

## 형식 구문

{{csssyntax}}

## 예제

### HTML

```html
<p>1. <code>word-break: normal</code></p>
<p class="normal narrow">
  This is a long and Honorificabilitudinitatibus califragilisticexpialidocious
  Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
  グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉
</p>

<p>2. <code>word-break: break-all</code></p>
<p class="breakAll narrow">
  This is a long and Honorificabilitudinitatibus califragilisticexpialidocious
  Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
  グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉
</p>

<p>3. <code>word-break: keep-all</code></p>
<p class="keepAll narrow">
  This is a long and Honorificabilitudinitatibus califragilisticexpialidocious
  Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
  グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉
</p>

<p>4. <code>word-break: manual</code></p>
<p class="manual narrow">
  This is a long and Honorificabilitudinitatibus califragilisticexpialidocious
  Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
  グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉
</p>

<p>5. <code>word-break: auto-phrase</code></p>
<p class="autoPhrase narrow">
  This is a long and Honorificabilitudinitatibus califragilisticexpialidocious
  Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
  グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉
</p>

<p>6. <code>word-break: break-word</code></p>
<p class="breakWord narrow">
  This is a long and Honorificabilitudinitatibus califragilisticexpialidocious
  Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
  グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉
</p>
```

### CSS

```css
.narrow {
  padding: 10px;
  border: 1px solid;
  width: 500px;
  margin: 0 auto;
  font-size: 20px;
  line-height: 1.5;
  letter-spacing: 1px;
}

.normal {
  word-break: normal;
}

.breakAll {
  word-break: break-all;
}

.keepAll {
  word-break: keep-all;
}

.manual {
  word-break: manual;
}

.autoPhrase {
  word-break: auto-phrase;
}

.breakWord {
  word-break: break-word;
}
```

{{EmbedLiveSample('예제', '100%', 600)}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{cssxref("overflow-wrap")}}
- {{cssxref("white-space")}}
- {{cssxref("hyphens")}}
- {{cssxref("line-break")}}
- [텍스트 줄 바꿈 안내서](/ko/docs/Web/CSS/Guides/Text/Wrapping_breaking_text)
