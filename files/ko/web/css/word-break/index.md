---
title: word-break
slug: Web/CSS/word-break
---

{{CSSRef}}

[CSS](/ko/docs/Web/CSS) **`word-break`** 속성은 텍스트가 자신의 콘텐츠 박스 밖으로 오버플로 할 때 줄을 바꿀 지 지정합니다.

{{EmbedInteractiveExample("pages/css/word-break.html")}}

## 구문

```css
/* 키워드 값 */
word-break: normal;
word-break: break-all;
word-break: keep-all;
word-break: break-word; /* 사용 안함 */

/* 전역 값 */
word-break: inherit;
word-break: initial;
word-break: unset;
```

`word-break` 속성은 아래의 값 중 하나를 선택해서 지정할 수 있습니다.

<h3 class="brush:css" id="값">값</h3>

- `normal`
  - : 기본 줄 바꿈 규칙을 사용합니다.
- `break-all`
  - : 오버플로를 방지하기 위해서는 어떠한 두 문자 사이에서도 줄 바꿈이 발생할 수 있습니다. (한중일 텍스트 제외)
- `keep-all`
  - : 한중일(CJK) 텍스트에서는 줄을 바꿀 때 단어를 끊지 않습니다. 비 CJK 텍스트에서는 `normal`과 동일합니다.
- `break-word` {{Deprecated_inline}}
  - : 실제 {{cssxref("overflow-wrap")}} 속성에 상관하지 않고, `word-break: normal`과 `overflow-wrap: anywhere`를 설정한 것과 같은 효과를 냅니다.

> **참고:** `word-break: break-word`와 `overflow-wrap: break-word`({{cssxref("overflow-wrap")}} 참고)와 달리, `word-break: break-all`은 텍스트의 오버플로가 시작하는 정확한 지점에서 줄을 바꿉니다. 단어 전체를 다음 줄로 이동하면 중간을 끊지 않아도 될 상황에서도 마찬가지입니다.

## 형식 정의

{{cssinfo}}

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

<p>4. <code>word-break: break-word</code></p>
<p class="breakWord narrow">
  This is a long and Honorificabilitudinitatibus califragilisticexpialidocious
  Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
  グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉
</p>
```

### CSS

```css
.narrow {
  padding: 5px;
  border: 1px solid;
  display: table;
  max-width: 100%;
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

.breakWord {
  word-break: break-word;
}
```

{{EmbedLiveSample('예제', '100%', 600)}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{cssxref("overflow-wrap")}}
