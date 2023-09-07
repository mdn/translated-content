---
title: "<dir>:  O elemento obsoleto Directory"
slug: Web/HTML/Element/dir
---

O elemento de diretório HTML obsoleto (**`<dir>`**) é usado como um contêiner para um diretório de arquivos e/ou pastas, potencialmente com estilos e ícones aplicados pelo {{Glossary("user agent")}}. Não use este elemento obsoleto; em vez disso, você deve usar o {{HTMLElement("ul")}} elemento para listas, incluindo listas de arquivos.

> **Note:** Não use este elemento. Embora presente nas primeiras especificações do HTML, foi descontinuado no HTML 4 e, desde então, foi totalmente removido. Nenhum dos principais navegadores suporta esse elemento.

## DOM interface

Este elemento implementa a interface {{domxref("HTMLDirectoryElement")}}.

## Atributos

Como todos os outros elementos HTML, este elemento suporta os [global attributes](/pt-BR/docs/HTML/Global_attributes).

- {{htmlattrdef("compact")}}

  - : Este atributo booleano indica que a lista deve ser renderizada em um estilo compacto. A interpretação deste atributo depende do agente do usuário e não funciona em todos os navegadores.

    > **Note:** Não use este atributo, pois ele foi descontinuado: o {{HTMLElement("dir")}} elemento deve ser estilizado usando [CSS](/pt-BR/docs/CSS). Para dar um efeito semelhante ao alcançado com o atributo `compact`, a propriedade [CSS](/pt-BR/docs/CSS) {{cssxref("line-height")}} pode ser usado com um valor de `80%`.

## Compatibilidade com navegadores

{{Compat("html.elements.dir")}}

## Veja também

- Outros relacionados a lista de elementos HTML: {{HTMLElement("ol")}}, {{HTMLElement("ul")}}, {{HTMLElement("li")}}, e {{HTMLElement("menu")}};
- Propriedades CSS que podem ser especialmente úteis para estilizar o elemento `<dir>` :

  - A propriedade {{cssxref('list-style')}}, útil para escolher a maneira como o ordinal é exibido.
  - [CSS counters](/pt-BR/docs/CSS_Counters), útil para lidar com listas aninhadas complexas.
  - A propriedade {{Cssxref('line-height')}}, útil para simular o atributo obsoleto [`compact`](/pt-BR/docs/Web/HTML/Element/dir#compact).
  - A propriedade {{cssxref('margin')}}, útil para controlar o recuo da lista.

{{HTMLSidebar}}
