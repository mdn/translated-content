---
title: image-rendering
slug: Web/CSS/image-rendering
---

{{CSSRef}}

**`image-rendering`** [CSS](/ko/docs/Web/CSS) 프로퍼티는 브라우저의 이미지 스케일링 방식에 대한 힌트를 제공합니다. 이 프로퍼티는 엘리먼트 자신에게 적용시킵니다. 스케일링(크기변경)이 안 된 이미지에게는 적용되지 않습니다.

예를들어, 100x100 픽셀의 이미지가 있는데 페이지에서 요구하는 이미지는 200x200픽셀 (혹은 50x50px)이라면, 이미지는 새로운 면적만큼의 특정 알고리즘으로 인해 확대(혹은 축소)됩니다. 스케일링은 사용자의 상호작용(줌기능) 으로 인해 일어날겁니다.

{{cssinfo}}

## 구문

```css
/* 키워드 값 */
image-rendering: auto;
image-rendering: crisp-edges;
image-rendering: pixelated;

/* 전역 값 */
image-rendering: inherit;
image-rendering: initial;
image-rendering: unset;
```

### Values

- **`auto`**
  - : 기본값입니다.
    이미지의 스케일링 알고리즘은 이미지를 최대치로 활용해서 나타냅니다. 특히, 스케일링 알고리즘은 이중선형보간법같은 알고리즘이 보기에 괜찮은 "부드러운"색상을 나타냅니다. 사진같은 종류의 것들을 위해 GEcko엔진 1.9버전(파이어폭스 3.0) 에서는 이중선형 리샘플링(고품질) 을 사용해왔습니다.
- **`crisp-edges`**
  - : 이미지 스케일링 알고리즘은 반드시 색상대조와 이미지의 표준을 맞게 보존해야 합니다. 그리고 smooth 하지 못한 색상 혹은 이미지의 흐림효과 또한 알고리즘 공정에 있어야합니다. 이 속성은 픽셀아트같은 의도되어 만들어진 이미지들에게 필요합니다.
- **`pixelated`**
  - : 이미지 스케일링을 크게 확대할 때는 "nearest neighbor" 혹은 비슷한 알고리즘을 반드시 사용해야 합니다. 그래서 이미지의 큰 픽셀로 구성해서 나타낼 수 있습니다. 이미지를 작게 축소할 때는 "auto" 속성과 같습니다.

> **참고:** The values `optimizeQuality` and `optimizeSpeed` present in early draft (and coming from its SVG counterpart) are defined as synonyms for the `auto` value.

### 공식 문법

{{csssyntax}}

## 예제

```css
/* applies to GIF and PNG images; avoids blurry edges */

img[src$=".gif"],
img[src$=".png"] {
  image-rendering: -moz-crisp-edges; /* Firefox */
  image-rendering: -o-crisp-edges; /* Opera */
  image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming) */
  image-rendering: crisp-edges;
  -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */
}
```

```css
div {
  background: url(chessboard.gif) no-repeat 50% 50%;
  image-rendering: -moz-crisp-edges; /* Firefox */
  image-rendering: -o-crisp-edges; /* Opera */
  image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming) */
  image-rendering: crisp-edges;
  -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */
}
```

{{EmbedLiveSample('예제')}}

### Live Examples

#### image-rendering: auto

78% ![squares.gif](squares.gif) 100% ![squares.gif](squares.gif) 138% ![squares.gif](squares.gif) downsized ![hut.jpg](hut.jpg) upsized ![blumen.jpg](blumen.jpg)

#### image-rendering: pixelated; (-ms-interpolation-mode: nearest-neighbor)

78% ![squares.gif](squares.gif) 100% ![squares.gif](squares.gif) 138% ![squares.gif](squares.gif) downsized ![hut.jpg](hut.jpg) upsized ![blumen.jpg](blumen.jpg)

#### image-rendering: crisp-edges; (-webkit-optimize-contrast)

78% ![squares.gif](squares.gif) 100% ![squares.gif](squares.gif) 138% ![squares.gif](squares.gif) downsized ![hut.jpg](hut.jpg) upsized ![blumen.jpg](blumen.jpg)

## 명세

{{Specifications}}

> **참고:** Though initially close from the SVG `image-rendering` property, the values are quite different now.

## 브라우저 지원

{{Compat}}
