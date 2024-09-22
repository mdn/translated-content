---
title: Column combinator
slug: Web/CSS/Column_combinator
l10n:
  sourceCommit: 7fa9b134e7a886b47bd8c6e3135ba329ee0ddf09
---

{{CSSRef}} {{SeeCompatTable}}

**컬럼 결합자** (`||`)는 CSS 선택자 사이에 위치합니다. 이는 첫번째 선택자에 의해 일치되는 컬럼 요소에 속하는 두번째 선택자와 일치되는 요소들만을 매칭합니다.

```css
/* "selected" 컬럼에 속한 테이블 셀 */
col.selected||td {
  background: gray;
}
```

## 구문

```css-nolint
/* || 결합자 주위의 공백은 선택이자 권장 사항입니다. */
column-selector || cell-selector {
  /* style properties */
}
```

## 예제

### HTML

```html
<table border="1">
  <colgroup>
    <col span="2" />
    <col class="selected" />
  </colgroup>
  <tbody>
    <tr>
      <td>A</td>
      <td>B</td>
      <td>C</td>
    </tr>

    <tr>
      <td colspan="2">D</td>
      <td>E</td>
    </tr>
    <tr>
      <td>F</td>
      <td colspan="2">G</td>
    </tr>
  </tbody>
</table>
```

### CSS

```css
col.selected||td {
  background: gray;
  color: white;
  font-weight: bold;
}
```

### 결과

{{EmbedLiveSample("Examples", "100%")}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{HTMLElement("col")}}
- {{HTMLElement("colgroup")}}
- {{CSSxRef("grid", "그리드")}}
- {{CSSxRef(":nth-of-type")}}
- {{CSSxRef(":nth-last-of-type")}}
