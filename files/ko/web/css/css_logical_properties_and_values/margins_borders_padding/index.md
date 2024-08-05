---
title: 바깥 여백, 테두리 그리고 안쪽 여백을 위한 논리적 속성들
slug: Web/CSS/CSS_logical_properties_and_values/Margins_borders_padding
l10n:
  sourceCommit: a567dfc8bf5da874d1831b3f6a3ddb12b27d1ab9
---

{{CSSRef}}

[CSS 논리적 속성과 값](/ko/docs/Web/CSS/CSS_logical_properties_and_values) 모듈은 다양한 바깥 여백, 테두리, 그리고 안쪽 여백 속성과 그것의 단축어에 대한 흐름 상대적인 매핑을 정의합니다. 이 안내서는 이에 대해 자세히 살펴봅니다.

[논리적 속성과 값](/ko/docs/Web/CSS/CSS_logical_properties_and_values) 모듈에 대해 살펴보면, 모듈 속성에 대한 목록이 아주 길다는 것을 알아차릴 수 있습니다. 이는 대부분이 각각의 바깥 여백, 테두리, 그리고 안쪽 여백에 대해 네 가지의 긴 값과 모든 단축어를 포함하고 있기 때문입니다.

## 바깥 여백, 테두리, 그리고 안쪽 여백 매핑하기

이 모듈은 각 논리적 값과 물리적 값의 매핑의 상세를 다룹니다. 아래 표는 {{cssxref("writing-mode", "쓰기 모드")}} 가 `horizontal-tb` 일 때 즉, 왼쪽에서 오른쪽 방향일 때 이러한 값들을 매핑하는 표를 나타냅니다. 그러므로 인라인 방향은 수평으로 왼쪽에서 오른쪽으로 진행되며, {{cssxref("margin-inline-start")}} 는 {{cssxref("margin-left")}} 와 동일합니다.

텍스트의 방향이 오른쪽에서 왼쪽인 쓰기 모드에서 `horizontal-tb` 를 사용하고 있다면 {{cssxref("margin-inline-start")}} 는 {{cssxref("margin-right")}} 와 동일하게 동작하고, 수직 쓰기 모드에서 이는 {{cssxref("margin-top")}} 을 사용하는 것과 동일한 동작을 합니다.

| {{glossary("Logical properties","논리적 속성")}} | {{glossary("Physical properties", "물리적 속성")}} |
| ------------------------------------------------ | -------------------------------------------------- |
| {{cssxref("border-block-end")}}                  | {{cssxref("border-bottom")}}                       |
| {{cssxref("border-block-end-color")}}            | {{cssxref("border-bottom-color")}}                 |
| {{cssxref("border-block-end-style")}}            | {{cssxref("border-bottom-style")}}                 |
| {{cssxref("border-block-end-width")}}            | {{cssxref("border-bottom-width")}}                 |
| {{cssxref("border-block-start")}}                | {{cssxref("border-top")}}                          |
| {{cssxref("border-block-start-color")}}          | {{cssxref("border-top-color")}}                    |
| {{cssxref("border-block-start-style")}}          | {{cssxref("border-top-style")}}                    |
| {{cssxref("border-block-start-width")}}          | {{cssxref("border-top-width")}}                    |
| {{cssxref("border-inline-end")}}                 | {{cssxref("border-right")}}                        |
| {{cssxref("border-inline-end-color")}}           | {{cssxref("border-right-color")}}                  |
| {{cssxref("border-inline-end-style")}}           | {{cssxref("border-right-style")}}                  |
| {{cssxref("border-inline-end-width")}}           | {{cssxref("border-right-width")}}                  |
| {{cssxref("border-inline-start")}}               | {{cssxref("border-left")}}                         |
| {{cssxref("border-inline-start-color")}}         | {{cssxref("border-left-color")}}                   |
| {{cssxref("border-inline-start-style")}}         | {{cssxref("border-left-style")}}                   |
| {{cssxref("border-inline-start-width")}}         | {{cssxref("border-left-width")}}                   |
| {{cssxref("border-start-start-radius")}}         | {{cssxref("border-top-left-radius")}}              |
| {{cssxref("border-end-start-radius")}}           | {{cssxref("border-bottom-left-radius")}}           |
| {{cssxref("border-start-end-radius")}}           | {{cssxref("border-top-right-radius")}}             |
| {{cssxref("border-end-end-radius")}}             | {{cssxref("border-bottom-right-radius")}}          |
| {{cssxref("margin-block-end")}}                  | {{cssxref("margin-bottom")}}                       |
| {{cssxref("margin-block-start")}}                | {{cssxref("margin-top")}}                          |
| {{cssxref("margin-inline-end")}}                 | {{cssxref("margin-right")}}                        |
| {{cssxref("margin-inline-start")}}               | {{cssxref("margin-left")}}                         |
| {{cssxref("padding-block-end")}}                 | {{cssxref("padding-bottom")}}                      |
| {{cssxref("padding-block-start")}}               | {{cssxref("padding-top")}}                         |
| {{cssxref("padding-inline-end")}}                | {{cssxref("padding-right")}}                       |
| {{cssxref("padding-inline-start")}}              | {{cssxref("padding-left")}}                        |

물론 몇몇의 추가적인 단축어들도 존재하는데, 이는 박스의 블록 가장자리와 인라인 가장자리를 동시에 타겟팅할 수 있기 때문입니다. 이러한 단축어는 물리적 대응이 존재하지 않습니다.

| 속성                               | 목적                                                                                                                           |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| {{cssxref("border-block")}}        | 블록 테두리에 대해 {{cssxref("border-color")}}, {{cssxref("border-style")}}, 그리고 {{cssxref("border-width")}} 를 설정합니다. |
| {{cssxref("border-block-color")}}  | 블록 테두리에 대해 `border-color` 를 설정합니다.                                                                               |
| {{cssxref("border-block-style")}}  | 블록 테두리에 대해 `border-style` 을 설정합니다.                                                                               |
| {{cssxref("border-block-width")}}  | 블록 테두리에 대해 `border-width` 를 설정합니다.                                                                               |
| {{cssxref("border-inline")}}       | 인라인 테두리에 대해 `border-color`, `-style`, 그리고 `-width` 를 설정합니다.                                                  |
| {{cssxref("border-inline-color")}} | 인라인 테두리에 대해 `border-color` 를 설정합니다.                                                                             |
| {{cssxref("border-inline-style")}} | 인라인 테두리에 대해 `border-style` 를 설정합니다.                                                                             |
| {{cssxref("border-inline-width")}} | 인라인 테두리에 대해 `border-width` 를 설정합니다.                                                                             |
| {{cssxref("margin-block")}}        | 모든 블록에 대해 {{cssxref("margin")}} 을 설정합니다.                                                                          |
| {{cssxref("margin-inline")}}       | 모든 인라인에 대해 `margin` 을 설정합니다.                                                                                     |
| {{cssxref("padding-block")}}       | 블록 {{cssxref("padding")}} 을 설정합니다.                                                                                     |
| {{cssxref("padding-inline")}}      | 인라인 `padding` 을 설정합니다.                                                                                                |

## 바깥 여백 예제

{{cssxref("margin-inline-start")}}, {{cssxref("margin-inline-end")}}, {{cssxref("margin-block-start")}}, 그리고 {{cssxref("margin-inline-end")}} 의 매핑된 마진 속성은 그들의 물리적 대응 속성 대신에 사용될 수 있습니다.

이 예제에는 각각의 가장자리에 서로 다른 크기의 바깥 여백을 가진 두 개의 박스가 존재합니다. 바깥 여백을 더욱 명확하게 표현하기 위해 테두리를 포함한 추가 컨테이너 또한 포함되어 있습니다.

한 상자는 물리적 속성을 사용하고 다른 하나는 논리적 속성을 사용합니다. {{cssxref("direction")}} 속성을 `rtl` 로 변경하여 상자가 오른쪽에서 왼쪽 방향으로 표시되도록 시도해 보세요. 첫번째 상자의 바깥 여백은 동일한 위치에 유지되지만, 두번쨰 상자의 인라인 차원의 바깥 여백은 전환됩니다.

또한 `writing-mode` 를 `horizontal-tb` 에서 `vertical-rl` 로 변경해 보세요. 첫번째 상자의 바깥 여백이 어떻게 동일하게 유지되는지, 두번쨰 상자의 바깥 여백은 텍스트의 방향을 따라 전환되는 것을 확인해 보세요.

{{EmbedGHLiveSample("css-examples/logical/margin-longhands.html", '100%', 700)}}

### 바깥 여백 단축어

인라인 측면과 블록 측면 모두를 타겟팅할 수 있는 단축어가 존재하는데, 각각 {{cssxref("margin-inline")}} 그리고 {{cssxref("margin-block")}} 입니다. 각 속성은 두 개의 값을 취합니다. 첫번쨰 값은 해당 차원의 시작 부분에 적용될 값이며, 두번쨰 값은 끝 부분에 적용될 값입니다. 만일 하나의 값이 설정된다면 이는 시작과 끝에 모두 적용됩니다.

수평의 쓰기 모드에서는 이 CSS 는 박스의 위쪽에는 `5px` 에 해당하는 바깥 여백이 적용되고, 박스의 아래쪽에는 `10px` 에 해당하는 바깥 여백을 적용시킵니다.

```css
.box {
  margin-block: 5px 10px;
}
```

## 안쪽 여백 예제

매핑된 안쪽 여백 속성 {{cssxref("padding-inline-start")}}, {{cssxref("padding-inline-end")}}, {{cssxref("padding-block-start")}}, 그리고 {{cssxref("padding-inline-end")}} 는 물리적 대응 속성을 대신하여 사용될 수 있습니다.

이 예제에서는, 두 개의 박스가 존재합니다.한 상자에는 물리적 안쪽 여백 속성이 지정되어 있고, 다른 상자는 논리적 안쪽 여백 속성을 사용합니다. `horizontal-tb` 의 `writing-mode` 에서는 두 개의 박스가 동일하게 보여집니다.

`direction` 속성을 `rtl` 로 변경하여 상자가 오른쪽에서 왼쪽 방향으로 표시되도록 시도해 보세요. 첫번째 상자의 안쪽 여백은 동일한 위치에 유지되지만, 두번쨰 상자의 인라인 차원의 바깥 여백은 전환됩니다.

또한 `writing-mode` 를 `horizontal-tb` 에서 `vertical-rl` 로 변경해 보세요. 첫번째 상자의 안쪽 여백이 어떻게 동일하게 유지되는지, 두번쨰 상자의 안쪽 여백은 텍스트의 방향을 따라 전환되는 것을 확인해 보세요.

{{EmbedGHLiveSample("css-examples/logical/padding-longhands.html", '100%', 700)}}

### 안쪽 여백 단축어

바깥 여백과 같이, 두 값을 함께 사용할 수 있는 단축어가 안쪽 여백에도 존재하는데, 이는 {{cssxref("padding-inline")}} 과 {{cssxref("padding-block")}} 입니다. 이를 사용하면 두 인라인과 두 블록 차원의 안쪽 여백을 각각 설정할 수 있습니다.

수직의 `writing-mode` 에서는 이 CSS 는 박스의 위쪽에는 `5px` 에 해당하는 안쪽 여백이 적용되고, 박스의 아래쪽에는 `10px` 에 해당하는 안쪽 여백을 적용시킵니다.

```css
.box {
  padding-block: 5px 10px;
}
```

## 테두리 예제

이 모듈에 매우 많은 속성이 있는 것처럼 보이는 주된 이유는 테두리 속성들 때문입니다. 이는 박스의 각 측면에 대한 테두리의 색상, 너비, 그리고 스타일의 전체 논리적 속성 표현을 제공하는데, 각 측면에 대해 세 가지를 한번에 설정할 수 있는 단축어도 제공됩니다. 바깥 여백과 안쪽 여백처럼, 각 물리적 속성의 매핑된 버전 또한 존재합니다.

아래 예시에서는 전체 표현과 세 가지 속성의 단축어 값들도 사용됩니다. 다른 예시들처럼, `direction` 속성을 `rtl` 로 변경하여 상자가 오른쪽에서 왼쪽 방향으로 표시되도록 시도해 보거나, `writing-mode` 를 `horizontal-tb` 에서 `vertical-rl` 로 변경해 보세요.

{{EmbedGHLiveSample("css-examples/logical/border-longhands.html", '100%', 700)}}

### 테두리 단축어

블록 혹은 인라인 차원에서의 너비, 스타일, 그리고 색상을 설정하는 두 개의 값을 이용한 단축어가 존재하고, 블록 또는 인라인 차원에서 세 가지 값을 모두 설정하기 위한 단축어도 존재합니다. 아래 코드에서는, 수평의 쓰기 모드에서 `2px green solid` 테두리 값을 박스의 위와 아래에 각각 설정하고, `4px dotted purple` 테두리를 박스의 왼쪽과 오른쪽에 설정할 수 있습니다.

```css
.box {
  border-block: 2px solid green;
  border-inline-width: 4px;
  border-inline-style: dotted;
  border-inline-color: rebeccapurple;
}
```

### 흐름 상대적인 border-radius 속성

이 모듈에는 {{cssxref("border-radius")}} 의 전체 표현과 같은 흐름 상대적인 대응 속성이 존재합니다. 아래 예제에서는, 수평의 `writing-mode` 에서 오른쪽 상단 테두리 둥글기를 `1em` 로 설정하고, 오른쪽 하단은 `0`, 왼쪽 하단은 `20px`, 그리고 왼쪽 상단은 `40px` 로 설정합니다.

```css
.box {
  border-end-start-radius: 1em;
  border-end-end-radius: 0;
  border-start-end-radius: 20px;
  border-start-start-radius: 40px;
}
```

## 4가지 값의 단축 문법을 위한 논리적 값 나타내기

명세서에서는 `margin` 속성에 대한 네 가지 값의 단축어를 제안하고 있지만, 이것을 어떻게 나타내야 하는지에 대해서는 아직 최종 결정이 나지 않은 상태이며 [이 이슈](https://github.com/w3c/csswg-drafts/issues/1282) 에서 논의되고 있습니다.

`margin`, `padding`, 또는 `border` 와 같은 네 가지 값의 단축어는 현재 물리적 버전이 사용되므로, 문서의 흐름을 따르는 것이 중요하다면 당분간은 전체 표현된 속성을 사용하길 권장합니다.
