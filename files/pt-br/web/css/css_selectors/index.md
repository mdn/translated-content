---
title: Seletores CSS
slug: Web/CSS/CSS_selectors
---

{{CSSRef}}

Os Seletores definem quais elementos um conjunto de regras CSS se aplica.

## Seletores Básicos

- [Seletor por tag](/pt-BR/docs/Web/CSS/Type_selectors)
  - : Este seletor básico escolhe todos os elementos que correspondem ao nome fornecido.
    **Sintaxe:** `nome-da-tag`
    **Exemplo:** `input` corresponderá a qualquer elemento {{HTMLElement('input')}}.
- [Seletor por classe](/pt-BR/docs/Web/CSS/Class_selectors)
  - : Este seletor básico escolhe elementos baseados no valor de seu atributo `classe`. **Sintaxe:** `.nome-da-classe`
    **Exemplo:** `.index` irá corresponder a qualquer elemento que tenha o índice de classe (provavelmente definido por um atributo class="index", ou similar).
- [Seletor por ID](/pt-BR/docs/Web/CSS/ID_selectors)
  - : Este seletor básico escolhe nós baseados no valor do atributo `id`. Deve existir apenas um elemento com o mesmo ID no mesmo documento.
    **Sintaxe:** `#nome-do-id`
    **Exemplo:** `#toc` irá corresponder ao elemento que possuir o id=toc (definido por um atributo id="toc", ou similar).
- [Seletores universais](/pt-BR/docs/Web/CSS/Universal_selectors)
  - : Este seletor básico irá escolher todos os nós. Ele também existe em um namespace único e em uma variante de todo o namespace também.
    **Sintaxe:** `* ns|* *|*`
    **Exemplo:** `*` irá corresponder a todos os elementos do documento.
- [Seletores por atributo](/pt-BR/docs/Web/CSS/Attribute_selectors)
  - : Este seletor básico ira escolher nós baseados no valor de um de seus atributos, ou até mesmo pelo próprio atributo.
    **Sintaxe:** `[atrib] [atrib=valor] [atrib~=valor] [atrib|=valor] [atrib^=valor] [atrib$=valor] [atrib*=valor]`
    **Exemplo:** `[autoplay]` irá corresponder a todos os elementos que possuirem o atributo `autoplay` (para qualquer valor).

## Combinadores

- [Seletores de irmãos adjacentes](/pt-BR/docs/Web/CSS/Adjacent_sibling_selectors)
  - : O combinador `+` seleciona os nós que seguem imediatamente o elemento especificado anteriormente.
    **Sintaxe:** `A + B`
    **Exemplo:** `ul + li` irá corresponder a qualquer elemento {{HTMLElement('li')}} que segue imediatamente após um elemento {{HTMLElement('ul')}}.
- [Seletores gerais de irmãos](/pt-BR/docs/Web/CSS/General_sibling_selectors)
  - : O combinador `~` seleciona os nós que seguem (não necessariamente imediatamente) o elemento especificado anteriormente, se ambos os elementos compartilham o mesmo pai.
    **Sintaxe:** `A ~ B`
    **Exemplo:** `p ~ span` irá corresponder a todo elemento {{HTMLElement('span')}} que seguir um elemento {{HTMLElement('p')}} dentro de um mesmo elemento pai.
- [Seletor de filhos](/pt-BR/docs/Web/CSS/Child_selectors)
  - : O combinador `>` seleciona nós que são filhos diretos do elemento especificado anteriormente.
    **Sintaxe:** `A > B`
    **Exemplo:** `ul > li` irá corresponder a todo elemento {{HTMLElement('li')}} que estiver diretamente dentro de um elemento {{HTMLElement('ul')}} especificado.
- [Seletor de descendentes](/pt-BR/docs/Web/CSS/Descendant_selectors)
  - : O combinador " " seleciona os nós que são filhos do elemento especificado anteriormente (não é necessário que seja um filho direto). **Sintaxe:** `A B`**Exemplo:**`div span` irá corresponder a todo e qualquer elemento {{HTMLElement('span')}} que estiver dentro do elemento {{HTMLElement('div')}}.

## Pseudo-classes

[Pseudo-classes](/pt-BR/docs/Web/CSS/Pseudo-classes) permitem selecionar elementos baseados em informações que não estão contidas na árvore de documentos como um estado ou que é particularmente complexa de extrair. Por exemplo, eles correspondem se um link foi visitado anteriormente ou não.

## Pseudo-elementos

[Pseudo-elementos](/pt-BR/docs/Web/CSS/Pseudo-elementos) são asbtrações da árvore que representam entidades além do que o HTML faz. Por exemplo, o HTML não tem um elemento que descreva a primeira letra ou linha de um parágrafo, ou o marcador de uma lista. Os pseudo-elementos representam essas entidades e permitem que as regras CSS sejam associadas a elas. Desta forma, essas entidades podem ser denominadas independentemente.

## Especificações

| Especificação                           | Status                      | Comentário        |
| --------------------------------------- | --------------------------- | ----------------- |
| {{SpecName('CSS4 Selectors')}}          | {{Spec2('CSS4 Selectors')}} |                   |
| {{SpecName('CSS3 Selectors')}}          | {{Spec2('CSS3 Selectors')}} |                   |
| {{SpecName('CSS2.1', 'selector.html')}} | {{Spec2('CSS2.1')}}         |                   |
| {{SpecName('CSS1')}}                    | {{Spec2('CSS1')}}           | Definição inicial |
