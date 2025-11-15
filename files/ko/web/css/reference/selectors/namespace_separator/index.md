---
title: Namespace separator
slug: Web/CSS/Reference/Selectors/Namespace_separator
original_slug: Web/CSS/Namespace_separator
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

**네임스페이스 선택자** (`|`)는 선택자를 네임스페이스로부터 분리하여, 타입 선택자의 네임스페이스 혹은 {{glossary("namespace", "네임스페이스")}}가 없는 경우를 식별합니다.

```css
/* 네임스페이스 내 링크는 myNameSpace로 명명합니다. */
myNameSpace|a {
  font-weight: bold;
}
/* (네임스페이스가 없는 경우를 포함하는) 어떠한 네임스페이스 내의 단락 */
*|p {
  color: darkblue;
}
/* 헤딩 2는 네임스페이스 내에 있지 않습니다. */
|h2 {
  margin-bottom: 0;
}
```

[타입 선택자](/ko/docs/Web/CSS/Type_selectors)와 [전체 선택자](/ko/docs/Web/CSS/Universal_selectors)는 선택적인 네임스페이스 컴포넌트를 허용합니다. 네임스페이스가 이전에 {{CSSXref("@namespace")}}를 통해 정의되었다면 이 선택자들 앞에 네임스페이스의 이름을 네임스페이스 구분자 (`|`)로 구분하여 네임스페이스화할 수 있습니다. 이는 인라인 SVG 나 MathML가 있는 HTML이나 여러 어휘가 결합된 XML처럼 다수의 네임스페이스를 포함한 문서를 다루는 경우에 유용합니다.

- `ns|h1` - `ns` 네임스페이스 내 `<h1>` 요소와 일치합니다.
- `*|h1` - 모든 `<h1>` 요소와 일치합니다.
- `|h1` - 선언되거나 암시된 네임스페이스 밖의 모든 `<h1>` 요소와 일치합니다.

## 구문

```css
namespace|element { style properties }
```

## 예제

기본적으로, HTML 이나 SVG 요소 내에 있는 모든 요소는 `http://www.w3.org/1999/xhtml` 및 `http://www.w3.org/2000/svg` 에서 네임스페이스가 있음을 암시하기 때문에 네임스페이스를 가지고 있습니다. 빈 네임스페이스 파라미터를 가진 {{domxref("document.createElementNS")}} 메서드는 네임스페이스가 없는 요소를 생성할 수 있습니다.

### 명명된 네임스페이스 예제

이 예제에서는 모든 요소가 네임스페이스에 속해 있습니다.

#### HTML

네임스페이스가 없다면 이는 명시적으로 HTML 내에 선언되거나 SVG 내에 존재합니다.

```html
<p>이 단락은 <a href="#">링크가 존재합니다</a>.</p>

<svg width="400" viewBox="0 0 400 20">
  <a href="#">
    <text x="0" y="15">링크는 SVG 내부에서 생성되었습니다.</text>
  </a>
</svg>
```

#### CSS

CSS는 두 개의 네임스페이스를 선언하고 전역 링크 (`a`), 네임스페이스가 없는 링크 (`|a`), 모든 네임스페이스 또는 네임스페이스가 없는 링크 (`*|a`), 그리고 두 개의 다른 이름이 지정된 네임스페이스 (`svgNamespace|a` 와 `htmlNameSpace|a`) 에 스타일을 지정합니다.

```css
@namespace svgNamespace url("http://www.w3.org/2000/svg");
@namespace htmlNameSpace url("http://www.w3.org/1999/xhtml");
/* 기본 네임스페이스에 있는 모든 `<a>`, 이 경우 모든 `<a>` */
a {
  font-size: 1.4rem;
}
/* 네임스페이스가 없는 경우 */
|a {
  text-decoration: wavy overline lime;
  font-weight: bold;
}
/* (네임스페이스가 없는 경우를 포함한) 모든 네임스페이스 */
*|a {
  color: red;
  fill: red;
  font-style: italic;
}
/* <svg> 콘텐츠 내에 있는 svgNamespace 네임스페이스 */
svgNamespace|a {
  color: green;
  fill: green;
}
/* HTML 문서 내에 있는 htmlNameSpace 네임스페이스 */
htmlNameSpace|a {
  text-decoration-line: line-through;
}
```

#### 결과

{{EmbedLiveSample("Named_namespace_example", "100%", 100)}}

네임스페이스 내에 있지 않은 링크 선택자 `|a` 는 어떤 링크와도 일치하지 않습니다. HTML에서는 `http://www.w3.org/1999/xhtml` 가 명시하는 것처럼 명시적으로 네임스페이스가 선언되지 않았을지라도 네임스페이스 내의 모든 HTML를 의미합니다. SVG에서도 네임스페이스가 명시적으로 선언되지 않았을지라도 `http://www.w3.org/2000/svg` 네임스페이스를 암시합니다. 이는 모든 콘텐츠가 최소 하나의 네임스페이스 내에 있다는 것을 의미합니다.

### 기본 네임스페이스와 네임스페이스가 없는 것

이 예제에서는 JavaScript를 사용하여 네임스페이스가 없는 요소를 생성하고 이를 문서 내에 삽입합니다. `@namespace` 를 사용하여 이름이 지정되지 않은 네임스페이스를 정의함으로써 SVG 네임스페이스를 기본 네임스페이스로 설정합니다.

> [!NOTE]
> 기본 또는 이름이 지정되지 않은 네임스페이스가 정의된 경우, 전체 선택자 및 타입 선택자는 해당 네임스페이스의 요소에만 적용됩니다.

#### HTML

HTML 내 혹은 SVG 내 어떠한 네임스페이스도 명시적으로 선언되지 않았습니다.

```html
<p>암시적인 HTML 네임스페이스 내 <a href="#">링크</a></p>

<svg width="400" viewBox="0 0 400 20">
  <a href="#">
    <text x="0" y="15">SVG 내에서 링크가 생성되었습니다.</text>
  </a>
</svg>
```

#### JavaScript

{{DOMXRef("document.createElementNS")}}를 이용한 JavaScript에서는 앵커 링크를 네임스페이스 없이 생성할 수 있고 이를 링크에 추가합니다.

```js
// create 'no namespace' anchor
const a = document.createElementNS("", "a");
a.href = "#";
a.appendChild(document.createTextNode("Link created without a namespace"));

document.body.appendChild(a);
```

#### CSS

{{cssxref("@namespace")}}를 이용하여 네임스페이스를 선언합니다. 네임스페이스의 이름을 생략하면, `@namespace` 선언은 기본 네임스페이스를 생성합니다.

```css
/* 이름을 생략하는 것으로 이는 SVG를 기본 네임스페이스로 설정합니다. */
@namespace url("http://www.w3.org/2000/svg");

/* (SVG에 설정된) 기본 네임스페이스 `<a>` */
a {
  font-size: 1.4rem;
}

/* (SVG에 설정된) 기본 네임스페이스 내에 있는 `<svg>` 와 `<p>` */
svg,
p {
  border: 5px solid gold;
}

/* 네임스페이스 외부의 링크 */
|a {
  text-decoration: wavy underline purple;
  font-weight: bold;
}

/* 네임스페이스가 없거나 어떠한 네임스페이스의 링크 */
*|a {
  font-style: italic;
  color: magenta;
  fill: magenta;
}
```

#### 결과

{{EmbedLiveSample("Default_namespace_and_no_namespace", "100%", 100)}}

네임스페이스 구분자가 없는 선택자 `a` 는 SVG `<a>` 요소에만 일치합니다. 이는 SVG가 기본 네임스페이스로 설정되어 있는 것과 연관이 있습니다.

네임스페이스가 없는 선택자 `|a` 는, JavaScript로 정의하고 추가한 `<a>` 와 일치합니다. 해당 노드는 기본 네임스페이스가 없는 유일한 노드이기 때문입니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`@namespace`](/ko/docs/Web/CSS/@namespace)
- [`Document.createElementNS()`](/ko/docs/Web/API/Document/createElementNS) 메서드
- [`Element.namespaceURI`](/ko/docs/Web/API/Element/namespaceURI) 속성
- [CSS 타입 선택자](/ko/docs/Web/CSS/Type_selectors)
- [CSS 전체 선택자](/ko/docs/Web/CSS/Universal_selectors)
- [CSS 선택자 모듈](/ko/docs/Web/CSS/CSS_selectors)
