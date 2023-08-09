---
title: nav
slug: Web/HTML/Element/nav
---

## Sumário

O _Elemento_ _HTML_ _de Navegação_ (`<nav>`) representa uma seção de uma página que aponta para outras páginas ou para outras áreas da página, ou seja, uma seção com links de navegação.

> **Note:** _Notas de utilização:_
>
> - Nem todos os links de um documento devem estar dentro de um elemento `<nav>`, o qual é destinado apenas para grupos importantes de links de navegação; tipicamente o elemento {{ HTMLElement("footer") }} contém uma lista de links que não precisam estar em um elemento {{ HTMLElement("nav") }}.
> - Um documento pode ter vários elementos {{ HTMLElement("nav") }}, por exemplo, um para navegação no site e outro para navegação dentro da página.
> - Agentes de usuário, como leitores de tela para usuários deficientes, podem utilizar este elemento para determinar se a renderização inicial do conteúdo do mesmo deve ser omitida.

## Contexto de uso

| Conteúdo permitido       | [Conteúdo de fluxo](/pt-BR/HTML/Content_categories#flow_content)                                                                                 |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Omissão de tag           | Nenhuma, tanto a tag de início quanto a de fim são obrigatórias                                                                                  |
| Elementos-pai permitidos | Quaisquer elementos que permitam conteúdo de fluxo. Note que um elemento `<nav>` não deve descender de um elemento {{ HTMLElement("address") }}. |
| Documento normativo      | [HTML5, seção 4.4.3](http://www.whatwg.org/specs/web-apps/current-work/multipage/sections.html#the-nav-element)                                  |

## Atributos

Este elemento não possui outros atributos além dos [atributos globais](/pt-BR/HTML/Global_attributes), comuns a todos os elementos.

## Interface DOM

Este elemento implementa a interface [`HTMLElement`](/pt-BR/DOM/element).

## Exemplos

```html
<nav>
  <ul>
    <li><a href="#">Página inicial</a></li>
    <li><a href="#">Sobre</a></li>
    <li><a href="#">Contato</a></li>
  </ul>
</nav>
```

## Compatibilidade

{{Compat("html.elements.nav")}}

## Veja também

- Outros elementos relacionados à seções: {{ HTMLElement("body") }}, {{ HTMLElement("article") }}, {{ HTMLElement("section") }}, {{ HTMLElement("aside") }}, {{ HTMLElement("h1") }}, {{ HTMLElement("h2") }}, {{ HTMLElement("h3") }}, {{ HTMLElement("h4") }}, {{ HTMLElement("h5") }}, {{ HTMLElement("h6") }}, {{ HTMLElement("hgroup") }}, {{ HTMLElement("header") }}, {{ HTMLElement("footer") }}, {{ HTMLElement("address") }};
- [Seções e esboços de um documento HTML5](/pt-BR/docs/Seções_e_estrutura_HTML5)

{{HTMLSidebar}}
