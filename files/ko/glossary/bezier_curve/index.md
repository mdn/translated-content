---
title: 베지에 곡선 (Bézier curve)
slug: Glossary/Bezier_curve
l10n:
  sourceCommit: a1596fe065b9c726f9412999d2218b7b6e256e30
---

{{GlossarySidebar}}

**베지에 곡선** (\[bezje]로 발음합니다)은 컴퓨터 그래픽과 애니메이션에 사용되는 수학적으로 표현된 곡선입니다. 벡터 이미지에선, 크기를 무한으로 조정할 수 있는 부드러운 곡선을 모델링하는 데 사용됩니다.

곡선은 최소 2개의 제어점 세트로 정의됩니다. 웹 관련 그래픽과 애니메이션에서는 종종 4개의 제어점(P<sub>0</sub>, P<sub>1</sub>, P<sub>2</sub>, 및 P<sub>3</sub>)이 있는 곡선인 직육면체 베지어 곡선을 사용합니다.

2차 베지어 곡선을 그리려면 두 개의 가상 선을 그립니다. 하나는 P<sub>0</sub> to P<sub>1</sub>로, 다른 하나는 P<sub>1</sub> to P<sub>2</sub>로 그려줍니다. 첫 번째 도우미 선의 시작점과 두 번째 도우미 선의 끝점이 꾸준히 이동하면서 세 번째 가상의 선이 그려집니다. 이 가상의 선에는 시작점에서 끝점까지 꾸준히 움직이는 점이 그려집니다. 이 점이 그려주는 곡선이 베지어 곡선입니다. 다음은 곡선의 생성되는 모습을 보여주는 애니메이션입니다.

![베지에 곡선 그리기](bézier_2_big.gif)

## 같이 보기

- 위키백과의 [베지에 곡선](https://en.wikipedia.org/wiki/B%C3%A9zier_curve)
- [CSS의 입방체 베지어 곡선의 완화 함수](/ko/docs/Web/CSS/easing-function#using_the_cubic-bezier_function)
- {{SVGAttr("keySplines")}} SVG 속성
