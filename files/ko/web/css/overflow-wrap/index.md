---
title: overflow-wrap
slug: Web/CSS/overflow-wrap
---

{{CSSRef}}

**`overflow-wrap`** CSS 요소는 어떤 문자가 내용 칸 밖으로 넘치지 않게 브라우저가 단어 마디 안에 줄을 바꿔야 할 것인지 아닌지를 정할 때 사용됩니다.

> **참고:** {{cssxref("word-break")}}와는 달리, `overflow-wrap`은 모든 단어가 넘치지 않으면 자신의 줄 안에 놓여 있을 수 없을 때 줄 바꿈을 한 번만 할 것입니다.

이 속성은 처음에 마이크로소프트에서 표준이 아니고 접두어가 없는 `word-wrap`으로 나왔고, 대부분 브라우저에서 똑같은 이름으로 구현되었습니다. 요즘은 `overflow-wrap`으로 다시 지어지고, `word-wrap`은 동의어가 되었습니다.

## 구문

```css
/* Keyword values */
overflow-wrap: normal;
overflow-wrap: break-word;

/* Global values */
overflow-wrap: inherit;
overflow-wrap: initial;
overflow-wrap: unset;
```

`overflow-wrap` 속성은 아래에 나열돼 있는 값들 중 단 하나로 정해집니다.

### 값

- `normal`
  - : 줄이 오직 (두 단어 사이의 공백과 같이) 보통의 줄 바꿈 지점에서만 줄을 바꿉니다.
- `break-word`
  - : 보통 안 바꿔지는 단어들을 한 줄에서 대신 줄을 바꿀 만한 지점이 없을 시 임의의 지점에서 줄을 바꿉니다.

### 기본적인 구문

{{csssyntax}}

## 예시

이 예시는 긴 단어를 넘길 때 `overflow-wrap`, `word-break`, 그리고 `hyphens`의 결과를 비교합니다.

### HTML

```html
<p class="normal">
  They say the fishing is excellent at Lake
  Chargoggagoggmanchauggagoggchaubunagungamaugg, though I've never been there
  myself. (normal)
</p>
<p class="overflow-wrap">
  They say the fishing is excellent at Lake
  Chargoggagoggmanchauggagoggchaubunagungamaugg, though I've never been there
  myself. (overflow-wrap)
</p>
<p class="word-break">
  They say the fishing is excellent at Lake
  Chargoggagoggmanchauggagoggchaubunagungamaugg, though I've never been there
  myself. (word-break)
</p>
<p class="hyphens">
  They say the fishing is excellent at Lake
  Chargoggagoggmanchauggagoggchaubunagungamaugg, though I've never been there
  myself. (hyphens)
</p>
```

### CSS

```css
p {
  width: 13em;
  background: gold;
}

.overflow-wrap {
  overflow-wrap: break-word;
}

.word-break {
  word-break: break-all;
}

.hyphens {
  hyphens: auto;
}
```

### Result

{{ EmbedLiveSample('Example', '100%', 260) }}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 바로 보기

- {{cssxref("word-break")}}
