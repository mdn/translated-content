---
title: CSS Flow Layout
slug: Web/CSS/CSS_flow_layout
---

{{CSSRef}}

_일반적인 흐름 Normal Flow_, 또는 흐름 레이아웃 Flow Layout 은 그 레이아웃 변화가 있기 전까지 페이지 안의 블록 요소와 인라인 요소가 보여지는 방식 입니다. 흐름이란 본질적으로 레이아웃 아래 서로 같이 동작하고 서로에게 서로가 알려지는 것들의 집합 입니다. 만약에 어느 하나가 _흐름에서 벗어나면_ 그것은 독립적으로 동작하게 됩니다.

*일반적인 흐름*에서, **인라인** 요소들은 한줄러 늘어서 보여지게 되는데, 이는 문서의 [Writing Mode](/ko/docs/Web/CSS/CSS_writing_modes) 에 따라 문장 안의 단어들이 보여지는 방향을 따르게 됩니다. **블록** 요소들은 문서의 Writing Mode 에서의 단락이 하나씩 나눠져 보여지듯이 나타납니다. 그래서 영어에서는, 인라인 요소들은 왼쪽에서 시작하여 하나씩 보여지고, 블록 요소들은 맨 위에서부터 페이지를 따라 아래로 보여집니다.

## 기본적인 예

아래의 예는 블록과 인라인 레벨 박스들을 설명합니다. 초록 테두리를 갖은 두개의 paragraph 요소들은 블록 레벨에 있어서 하나씩 위에서 아래로 나타납니다.

첫번째 문장은 파란 바탕을 갖은 span 요소를 포함하고 있습니다. 이 요소는 인라인 레벨에 있으며 따라서 문장 내에 이어져 나타납니다.

{{EmbedGHLiveSample("css-examples/layout/normal-flow.html", '100%', 720)}}

## Guides

- [Block and Inline Layout in Normal Flow](/ko/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow)
- [In Flow and Out of Flow](/ko/docs/Web/CSS/CSS_flow_layout/In_flow_and_out_of_flow)
- [Formatting Contexts Explained](/ko/docs/Web/CSS/CSS_flow_layout/Introduction_to_formatting_contexts)
- [Flow Layout and Writing Modes](/ko/docs/Web/CSS/CSS_flow_layout/Flow_layout_and_writing_modes)
- [Flow Layout and Overflow](/ko/docs/Web/CSS/CSS_flow_layout/Flow_layout_and_overflow)

## Reference

### Glossary Entries

- {{Glossary("Block/CSS", "Block (CSS)")}}

1. [**CSS**](/ko/docs/Web/CSS)
2. [**CSS Reference**](/ko/docs/Web/CSS/Reference)
