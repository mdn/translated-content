---
title: hyphens
slug: Web/CSS/hyphens
---

{{CSSRef}}

[CSS](/ko/docs/Web/CSS) **`hyphens`** 속성은 여러 줄에 걸치는 텍스트에서 단어에 붙임표를 추가하는 방식을 설정합니다. 붙임표를 아예 방지할 수도 있고, 수동으로 지정한 곳에서만 발생하도록 나타낼 수도 있으며, 브라우저가 자동으로 적절한 곳에 붙임표를 삽입하도록 허용할 수도 있습니다.

{{EmbedInteractiveExample("pages/css/hyphens.html")}}

붙임표 규칙은 언어별로 다릅니다. HTML의 언어는 [`lang`](/ko/docs/Web/HTML/Global_attributes/lang) 특성으로 알아낼 수 있으며, 브라우저는 lang 특성과 해당 언어에 적합한 붙임표 규칙이 모두 사용 가능할 때에만 붙임표를 추가합니다. XML에서는 [`xml:lang`](/ko/docs/Web/SVG/Attribute/xml:lang) 특성을 사용해야 합니다.

> **참고:** 명세는 붙임표 규칙을 명시하지 않고 있으므로 동작 방식이 브라우저마다 다를 수 있습니다.

## 구문

```css
/* 키워드 값 */
hyphens: none;
hyphens: manual;
hyphens: auto;

/* 전역 값 */
hyphens: inherit;
hyphens: initial;
hyphens: unset;
```

`hyphens` 속성은 아래 목록 중 하나의 키워드를 사용해 지정할 수 있습니다.

### 값

- `none`
  - : 단어 내의 문자가 줄 바꿈 위치를 나타내더라도 단어를 내에서 줄을 바꾸지 않습니다. 줄 바꿈은 공백 문자에서만 발생합니다.
- `manual`
  - : 단어 내의 줄 바꿈 위치를 나타내는 문자에서는 줄을 바꿀 수 있습니다. 아래의 [줄 바꿈 위치 제안](#줄_바꿈_위치_제안)에서 자세한 정보를 알아보세요.
- `auto`
  - : 브라우저가 단어 내의 적합한 붙임표 위치를 자유롭게 골라서 줄을 바꿀 수 있습니다. 단, 줄 바꿈 위치를 제안(아래의 [줄 바꿈 위치 제안](#줄_바꿈_위치_제안) 을 보세요)한 경우에는 해당 위치를 사용합니다.

> **참고:** 적합한 붙임표 규칙을 선택할 수 있도록 언어를 제대로 명시해야 `auto` 값의 동작도 정확해집니다. HTML `lang` 특성을 사용해 해당 언어의 붙임표 규칙을 사용할 것을 확실하게 지정하세요.

## 줄 바꿈 위치 제안

아래의 두 가지 Unicode 문자를 사용해서 수동으로 줄 바꿈 위치를 제안할 수 있습니다.

- U+2010 (HYPHEN)
  - : 붙임표, "하드" 하이픈 문자는 눈에 보이는 줄 바꿈 위치를 나타냅니다. 실제로 줄이 바뀌지는 않더라도 붙임표를 볼 수 있습니다.
- U+00AD (SHY)
  - : 투명한 "소프트" 하이픈("**s**oft" **hy**phen)입니다. 눈에 보이지 않으며, 브라우저가 붙임표를 사용해 단어를 끊을 위치로 선택합니다. HTML에서는 `&shy;`를 사용해 입력하세요.

> **참고:** HTML {{htmlelement("wbr")}} 요소로 인한 줄 바꿈으로는 붙임표가 추가되지 않습니다.

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

### 붙임표 줄 바꿈 지정하기

다음 예제는 `hyphens` 속성에 사용할 수 있는 세 개 값을 시연합니다.

#### HTML

```html
<dl>
  <dt><code>none</code>: no hyphen; overflow if needed</dt>
  <dd lang="en" class="none">An extreme&shy;ly long English word</dd>
  <dt>
    <code>manual</code>: hyphen only at &amp;hyphen; or &amp;shy; (if needed)
  </dt>
  <dd lang="en" class="manual">An extreme&shy;ly long English word</dd>
  <dt><code>auto</code>: hyphens where the algorithm decides (if needed)</dt>
  <dd lang="en" class="auto">An extreme&shy;ly long English word</dd>
</dl>
```

#### CSS

```css
dd {
  width: 55px;
  border: 1px solid black;
}
dd.none {
  -webkit-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}
dd.manual {
  -webkit-hyphens: manual;
  -ms-hyphens: manual;
  hyphens: manual;
}
dd.auto {
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
}
```

#### 결과

{{EmbedLiveSample("붙임표_줄_바꿈_지정하기", "100%", 490)}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{Cssxref("content")}}
- {{cssxref("overflow-wrap")}} (이전 이름 `word-wrap`)
- {{cssxref("word-break")}}
