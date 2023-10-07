---
title: Tópico de Alinhamento
slug: Glossary/Alignment_Subject
---

No [Alinhamento de Box do CSS](/pt-BR/docs/Web/CSS/CSS_Box_Alignment), o **tópico (assunto) de alinhamento** é a coisa (ou coisas) que está sendo alinhada pelas propriedades.

Para o {{cssxref("justify-self")}} e {{cssxref("align-self")}}, o tópico de alinhamento é o box de margem do box em que a propriedade está definida, usando o modo de escrita desse box.

Para o {{cssxref("justify-content")}} e {{cssxref("align-content")}}, o modo de escrita do box também é usado. A definição do tópico de alinhamento depende do modo de layout que está sendo usado.

- Contêineres de bloco (incluindo células de tabela)
  - : Todo o conteúdo do bloco como uma única unidade.
- Contêineres de colunas múltiplas (multicol)
  - : As caixas de colunas, com qualquer espaçamento inserido entre as caixas de colunas adicionado às lacunas de coluna relevantes.
- Contêineres flexíveis
  - : Para {{cssxref("justify-content")}}, os items flexíveis em cada linha flexível.
    Para {{cssxref("align-content")}}, as linhas flexíveis. Perceba que, isso só tem efeito em contêineres flexíveis de múltiplas linhas.
- Contêineres grid
  - : As trilhas do grid nos eixos apropriados, com qualquer espaçamento inserido entre trilhas adicionado à gutters relevantes. Gutters colapsados são tratados como uma oportunidade única para inserção no espaço.

## Saiba mais

- [Alinhamento de Box do CSS](/pt-BR/docs/Web/CSS/CSS_Box_Alignment)
