---
title: SVG를 이미지로 사용하기
slug: Web/SVG/Guides/SVG_as_an_image
l10n:
  sourceCommit: be9ba40fbef7f96beae73e5dd6d48a3ca875826f
---

SVG는 HTML, CSS, 일부 SVG 요소, 그리고 Canvas API를 통해 이미지 형식으로 사용할 수 있습니다.
이 문서는 SVG를 이미지 소스로 제공할 수 있는 기능을 나열합니다.

## SVG를 지원하는 기능

브라우저는 다음과 같은 곳에서 SVG 이미지를 지원합니다:

- HTML {{HTMLElement("img")}} 또는 {{SVGElement("svg")}} 요소
- CSS {{cssxref("background-image")}}
- CSS {{cssxref("list-style-image")}}
- CSS {{cssxref("content")}}
- SVG {{SVGElement("image")}} 요소
- SVG {{SVGElement("feImage")}} 요소
- Canvas [`drawImage`](/ko/docs/Web/API/Canvas_API/Tutorial/Using_images#drawing_images) 함수

## 제한 사항

보안을 위해 일부 브라우저는 SVG 콘텐츠가 이미지로 사용될 때 제약을 둡니다.
구체적으로 다음과 같은 제한이 적용될 수 있습니다:

- [JavaScript](/ko/docs/Web/JavaScript)가 비활성화됩니다.
- 외부 리소스(예: 이미지, 스타일시트)는 불러올 수 없지만, [`data:` URL](/ko/docs/Web/URI/Reference/Schemes/data)로 인라인되어 있다면 사용할 수 있습니다.
- {{cssxref(":visited")}} 링크 스타일은 렌더링되지 않습니다.
- (OS 테마 기반의) 플랫폼 고유 위젯 스타일링이 비활성화됩니다.

위 제한 사항은 이미지 컨텍스트에 한정된다는 점에 유의하세요. SVG 콘텐츠를 직접 볼 때나, {{HTMLElement("iframe")}}, {{HTMLElement("object")}}, {{HTMLElement("embed")}} 요소를 통해 문서로 삽입될 때는 적용되지 않습니다.

## 명세서

{{Specifications}}
