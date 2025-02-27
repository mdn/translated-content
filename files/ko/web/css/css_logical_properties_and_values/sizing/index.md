---
title: 크기 조절에 관한 논리적 속성
slug: Web/CSS/CSS_logical_properties_and_values/Sizing
l10n:
  sourceCommit: 86cec43154e2d0652933b14fe411ad052b6beb03
---

{{CSSRef}}

이 안내서에서는 페이지 내에서 쓰이는 요소의 크기 조절에 관한 물리적 차원의 속성과 논리적 속성 사이의 흐름 상대적인 매핑에 대해 다룹니다.

아이템의 크기를 특정해야 할 때는, [CSS 논리적 속성과 값](/ko/docs/Web/CSS/CSS_logical_properties_and_values) 모듈은 크기를 수평과 수직 차원의 물리적 크기 (예시, 왼쪽과 오른쪽)와 연관짓는 대신 텍스트의 흐름 (인라인과 블록)과 연관지어 표시할 수 있도록 합니다. 이러한 흐름 상대적인 매핑은 많은 사람들이 기본값으로 사용하고 있지만, 디자인에서는 물리적 크기와 논리적 크기를 모두 사용할 수 있습니다. 쓰기 모드에 관계 없이 항상 물리적 차원과 관련된 몇 가지 기능들이 필요할 수도 있습니다.

## 차원에서의 매핑

아래 표는 논리적 속성과 물리적 속성 사이의 매핑을 나타낸 표입니다. 이 매핑은 영어와 아라비아어처럼, {{CSSxRef("width")}} 가 {{CSSxRef("inline-size")}} 에 매핑되는 `horizontal-tb` 방향의 쓰기 모드에 있다는 것을 가정합니다.

만일 수직 방향의 쓰기 모드에 있다면 {{CSSxRef("inline-size")}} 는 {{CSSxRef("height")}} 와 매핑될 것입니다.

| 논리적 속성                    | 물리적 속성               |
| ------------------------------ | ------------------------- |
| {{CSSxRef("inline-size")}}     | {{CSSxRef("width")}}      |
| {{CSSxRef("block-size")}}      | {{CSSxRef("height")}}     |
| {{CSSxRef("min-inline-size")}} | {{CSSxRef("min-width")}}  |
| {{CSSxRef("min-block-size")}}  | {{CSSxRef("min-height")}} |
| {{CSSxRef("max-inline-size")}} | {{CSSxRef("max-width")}}  |
| {{CSSxRef("max-block-size")}}  | {{CSSxRef("max-height")}} |

## 너비와 높이에 관한 예제

{{CSSxRef("width")}} 와 {{CSSxRef("height")}} 의 각각의 논리적 매핑은 이는 인라인 차원에서의 길이를 설정하는 {{CSSxRef("inline-size")}} 와 블록 차원에서의 길이를 설정하는 {{CSSxRef("block-size")}} 가 됩니다. 영어로 작업을 할 때에는, `width` 를 `inline-size` 로, `height` 를 `block-size` 로 대체하면 동일한 레이아웃을 결과로 얻을 수 있습니다.

아래 실시간 예제에서는, `writing-mode` 가 `horizontal-tb` 로 설정되어 있습니다. 이를 `vertical-rl` 로 변경하여 `width` 와 `height` 를 사용하는 첫번째 예시를 확인해 보세요. 텍스트가 수직 방향으로 바뀌어도 이는 변하지 않고 남아있습니다. `inline-size` 와 `block-size` 를 사용하는 두번쨰 예시에서는 전체 블록이 회전한 것처럼 텍스트의 방향을 따르게 됩니다.

{{EmbedGHLiveSample("css-examples/logical/size-inline-block.html", '100%', 500)}}

## 최소 너비와 최소 높이에 관한 예제

{{CSSxRef("min-width")}} 와 {{CSSxRef("min-height")}} 를 위한 매핑 {{CSSxRef("min-inline-size")}} 와 {{CSSxRef("min-block-size")}} 도 존재합니다. 이들은 `inline-size` 와 `block-size` 속성과 동일하게 동작하지만, 고정된 크기가 아닌 최소 크기를 설정합니다.

아래 예제에서 `vertical-rl` 로 변경하여 첫번째 예시에 어떤 영향을 미치는지 확인해 보세요. 첫번째 예시에는 `min-height` 가 사용되었고, 두번째 예시에서는 `min-block-size` 이 사용되었습니다.

{{EmbedGHLiveSample("css-examples/logical/size-min.html", "100%", 500)}}

## 최대 너비와 최대 높이에 관한 예제

마침내 {{CSSxRef("max-inline-size")}} 와 {{CSSxRef("max-block-size")}} 를 {{CSSxRef("max-width")}} 와 {{CSSxRef("max-height")}} 의 논리적 대체 속성으로 사용할 수 있습니다. 아래 예제에서 이전에 했던 것처럼 실행해 보세요.

{{EmbedGHLiveSample("css-examples/logical/size-max.html", "100%", 500)}}

## 사이즈 재설정을 위한 논리적 키워드

{{CSSxRef("resize")}} 속성은 아이템의 크기가 조절될 수 있는지 여부를 설정하고, `horizontal` 와 `vertical` 라는 물리적 값을 가집니다. `resize` 속성은 논리적 키워드 값들도 가지고 있습니다. `resize: inline` 을 사용하면 인라인 차원에서의 크기 조정이 가능하고, `resize: block` 를 사용하면 블록 차원에서의 크기 조정이 가능하게 됩니다.

`both` 키워드 값을 사용하게 되면 물리적이든 논리적이든 상관 없이 작동하게 됩니다. 이는 두 차원의 값을 한번에 설정합니다. 아래 예제에서 직접 확인해 보세요.

{{EmbedGHLiveSample("css-examples/logical/size-resize.html", "100%", 700)}}
