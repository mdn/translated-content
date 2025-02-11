---
title: ::target-text
slug: Web/CSS/::target-text
l10n:
  sourceCommit: 5fea7c9593f5e4b4ef13ec65064acf1eabf01e4e
---

{{CSSRef}}{{SeeCompatTable}}

**`::target-text`** [CSS](/ko/docs/Web/CSS) [의사 요소](/ko/docs/Web/CSS/Pseudo-elements)는 브라우저가 [텍스트 조각](/ko/docs/Web/URI/Fragment/Text_fragments)을 지원하는 경우에 스크롤된 텍스트를 나타냅니다. 이는 작성자가 해당 텍스트의 일부를 강조하는 방법을 선택할 수 있게 합니다.

```css
::target-text {
  background-color: pink;
}
```

## 구문

```css
::target-text {
  /* ... */
}
```

## 예제

### 텍스트 조각 강조하기

```css
::target-text {
  background-color: rebeccapurple;
  color: white;
}
```

CSS의 동작 방식을 확인하려면 [scroll-to-text demo](https://mdn.github.io/css-examples/target-text/index.html#:~:text=From%20the%20foregoing%20remarks%20we%20may%20gather%20an%20idea%20of%20the%20importance) 링크를 방문해 보세요.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [텍스트 조각](/ko/docs/Web/URI/Fragment/Text_fragments)
