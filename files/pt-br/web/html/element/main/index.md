---
title: <main>
slug: Web/HTML/Element/main
---

## Resumo

O elemento **`<main>`** define o conteúdo principal dentro do {{HTMLElement("body")}} em seu documento ou aplicação. Entende-se como conteúdo principal aquele relacionado diretamente com o tópico central da página ou com a funcionalidade central da aplicação. O mesmo deverá ser único na página, ou seja, dentro do elemento \<main> não deverão ser incluidas seções da página que sejam comuns a todo o site ou aplicação, tais como mecanismos de navegação, informações de copyright, logotipo e campos de busca (a não ser, é claro, caso a função principal do documento seja fazer algum tipo de busca).

> **Nota:** `<main>` **não pode** ser filho dos elementos {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("footer")}}, {{HTMLElement("header")}}, ou {{HTMLElement("nav")}}.
>
> Autores **não devem** incluir mais de um elemento main no mesmo documento**.**

- _[Categorias de conteúdo](/pt-BR/docs/HTML/Content_categories)_[Conteúdo de fluxo](/pt-BR/docs/Web/HTML/Content_categories#Flow_content), conteúdo palpável.
- _Conteúdo permitido_ [Conteúdo de fluxo](/pt-BR/docs/Web/HTML/Content_categories#Flow_content).
- _Omissão de tag_ Nenhuma; ambas as tags de início e fim são obrigatórios.
- _Elementos pais permitidos_ Qualquer elemento que aceite [conteúdo de fluxo](/pt-BR/docs/Web/HTML/Content_categories#Flow_content), mas não pode ser filho dos elementos {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("footer")}}, {{HTMLElement("header")}}, ou {{HTMLElement("nav")}}.
- _DOM interface_ {{domxref("HTMLElement")}}

## Atributos

Este elemento admite apenas os [atributos globais](/pt-BR/docs/Web/HTML/Global_attributes).

## Exemplo

```html
<!-- outro conteúdo -->

<main>
  <h1>Maçãs</h1>
  <p>A maçã é a fruta pomácea da macieira.</p>

  <article>
    <h2>Vermelho delicioso</h2>
    <p>
      Estas maçãs vermelhas brilhantes são as mais comumente encontradas em
      muitos supermercados.
    </p>
    <p>...</p>
    <p>...</p>
  </article>

  <article>
    <h2>Granny Smith</h2>
    <p>
      Essas suculentas maçãs verdes, são um ótimo recheio para torta de maçã.
    </p>
    <p>...</p>
    <p>...</p>
  </article>
</main>

<!-- outro conteúdo -->
```

## Especificações

| Especificação                                                                       | Estado                   | Comentário                                                                                                                                                                                                     |
| ----------------------------------------------------------------------------------- | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', '#the-main-element', '&lt;main&gt;')}}                    | {{Spec2('HTML WHATWG')}} | Removida a restrição sobre não usar \<main> como um filho dos elementos {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("footer")}}, {{HTMLElement("header")}}, ou {{HTMLElement("nav")}}. |
| {{SpecName('HTML5.1', 'grouping-content.html#the-main-element', '&lt;main&gt;')}}   | {{Spec2('HTML5.1')}}     | Não há mudança na {{SpecName('HTML5 W3C')}}                                                                                                                                                                    |
| {{SpecName('HTML5 W3C', 'grouping-content.html#the-main-element', '&lt;main&gt;')}} | {{Spec2('HTML5 W3C')}}   | Definição inicial.                                                                                                                                                                                             |

## Navegadores compatíveis

O elemento \<main> é amplamente suportado (exceto pelo Internet Explorer). Sugere-se que, até que o elemento \<main> seja suportado pelo Internet Explorer, adicione a ele o atributo role com o valor "main":

```html
<main role="main">...</main>
```

{{Compat("html.elements.main")}}

## Veja também

- Elementos estruturais básicos: {{HTMLElement("html")}}, {{HTMLElement("head")}}, {{HTMLElement("body")}}
- Elementos relacionados a seções: {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("footer")}}, {{HTMLElement("header")}}, or {{HTMLElement("nav")}}
