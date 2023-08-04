---
title: Acessibilidade para plataforma móvel
slug: Web/Accessibility/Mobile_accessibility_checklist
---

Este documento contém uma lista concisa de requisitos para desenvolvedores de aplicativos móveis. Tem como intenção evoluir continuamente conforme forem aparecendo outros padrões.

## Cor

- O constrate de cor **DEVE** seguir os requirementos level AA do [WCAG 2.0](https://www.w3.org/TR/WCAG/):

  - Razão de contraste de 4.5:1 para textos normais (com menos de 18 pontos e 14 pontos em negrito.)
  - Razão de contraste de 3:1 para textos grandes (com pelo menos 18 pontos ou 14 pontos em negrito.)

- A informação transportada via cor **DEVE** ser também possível através de outros meios (textos sublinhados para links, etc.)

> **Nota:** Jon Snook escreveu um útil [Colour Contrast Checker](http://snook.ca/technical/colour_contrast/colour.html) que é usado para checar o contraste de cores entre o _background_ e o _foreground_. De maneira alternativa o [Tanaguru Contrast-Finder](http://contrast-finder.tanaguru.com/) faz um trabalho similar, mas também sugeste melhores contrastes de cores considerando as usadas.

## Visibilidade

- Técnicas de esconder conteúdo como zero opacidade, ordem z-index e off-screen placement **NÃO DEVEM** ser exclusivas para visibilidade de manuseio.
- Tudo que não é visível na tela **DEVE** ser verdadeiramente invisível (especialme relevante para apps de páginas únicas com múltiplos _cards_):

  - **USE** o atributo `hidden` ou propriedades de estilo `visibility` ou `display.`
  - A não ser que seja extemamente inevitável, **NÃO USE** o atributo `aria-hidden.`

## Foco

- Todos os elementos em foco **DEVEM**:

  - Estar no padrão como os links, botões, e campo de formulário que são focalizados por padrão.
  - Controles não padrões **DEVEM ter** um [ARIA Role](https://www.w3.org/TR/wai-aria/roles) apropriado para eles, como em `button`, `link`, ou `checkbox`.

- O Foco deve ser utilizado com uma ordem lógica e consistente.

## Textos Equivalentes

- Textos equivalentes **DEVEM** ser declarados para cada elemento dentro do aplicativo que não sejam textos e aos elementos que não são estritamente presentacionais.

  - Use _alt_ e _title_ quando apropriado (_veja_ a postagem de Steve Faulkner [Using the HTML title attribute](http://blog.paciellogroup.com/2013/01/using-the-html-title-attribute-updated/) para uma boa referência.)
  - Se os atributos acima não forem aplicáveis, use os [ARIA Properties](https://www.w3.org/WAI/PF/aria/states_and_properties#global_states_header) apropriados, como `aria-label`, `aria-labelledby`, ou `aria-describedby`.

- Imagens de textos **DEVEM** ser evitadas.
- Todos controles de formulários **DEVEM** ter etiquetas ({{ htmlelement("label") }} elements) para melhor benefício dos leitores da tela.

## Manipulação de Estado

- Controles padrão como botões de rádio e checkboxes são manipuláveis pelo sistema operacional. No entanto, para uso customizado pode-se modificar esses estados via [ARIA States](https://www.w3.org/TR/wai-aria/states_and_properties#attrs_widgets_header) como os `aria-checked`, `aria-disabled`, `aria-selected`, `aria-expanded`, e `aria-pressed`.

## Orientações gerais

- O título do aplicativo **DEVE** ser fornecido.
- Cabeçalhos **NÃO DEVEM** ter sua hierarquia quebrada:

  ```html
  <h1>Heading primeiro nível</h1>
  <h2>Heading segundo nível</h2>
  <h2>Outro Heading segundo nível</h2>
  <h3>Heading terceiro nível</h3>
  ```

- [ARIA Landmark Roles](https://www.w3.org/TR/wai-aria/roles#landmark_roles_header) **DEVE** ser usado para descrever o aplicativo ou a estrutura do documento, como: `banner`, `complementary`, `contentinfo`, `main`, `navigation`, `search`.
- Eventos de toque só **DEVEM** ser ativados no evento `touchend`.
- Alvos tocáveis **DEVEM** ser largos o suficiente para o usuário interagir (veja o [BBC Mobile Accessibility Guidelines](http://www.bbc.co.uk/guidelines/futuremedia/accessibility/mobile/design/touch-target-size) para ver as _guidelines_ sobre tamanhos de alvos tocáveis .)

> **Nota:** [Tanaguru's automated accessibility testing service](http://www.tanaguru.com/) fornece uma maneira útil para descobrir alguns erros de acessibilidade que ocorrem em páginas web, ou instalando aplicativos web (ex: Firefox OS.) Você pode encontrar mais sobre a técnica de implementação do Tanaguru, como também contribuir para o projeto [tanaguru.org](http://tanaguru.org/).

> **Nota:** [A versão original desse documento](http://yzen.github.io/2014/04/30/mobile-accessibility-checklist.html) foi escrita por [Yura Zenevich](http://yzen.github.io/).
