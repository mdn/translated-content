---
title: "<em>: O elemento de ênfase"
slug: Web/HTML/Element/em
---

O **elemento** **HTML** **`<em>`** marca o texto que tem ênfase. O elemento \<em> pode ser aninhado, com cada nível de aninhamento indicando um grau maior de ênfase.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/pt-BR/docs/Web/HTML/Content_categories"
          >Categorias de conteúdo</a
        >
      </th>
      <td>
        <a href="/pt-BR/docs/Web/HTML/Content_categories#Flow_content"
          >Conteúdo fluído</a
        >,
        <a
          href="https://developer.mozilla.org/pt-BR/docs/Web/HTML/Content_categories#Phrasing_content"
          >conteúdo de frase</a
        >, conteúdo palpável
      </td>
    </tr>
    <tr>
      <th scope="row">Conteúdo permitido</th>
      <td>
        <a
          href="https://developer.mozilla.org/pt-BR/docs/Web/HTML/Content_categories#Phrasing_content"
          >Conteúdo de frase</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omissão de tag</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Pais permitidos</th>
      <td>
        Qualquer elemento que aceita
        <a
          href="https://developer.mozilla.org/pt-BR/docs/Web/HTML/Content_categories#Phrasing_content"
          >conteúdo de frase</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Funções de ARIA permitidas</th>
      <td>Qualquer uma</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>
        {{domxref("HTMLElement")}} Até o Gecko 1.9.2 (Firefox 4)
        incluso, o Firefox implementa a
        interface{{domxref("HTMLSpanElement")}} para este elemento.
      </td>
    </tr>
  </tbody>
</table>

## Atributos

Este elemento inclui somente os [atributos globais](/pt-BR/docs/Web/HTML/Global_attributes).

## Notas de uso

Este elemento geralmente é mostrado no tipo itálico. Contudo, não deve ser usado simplesmente para aplicar estilo itálico; use o estilo CSS para esse propósito. Use o elemento {{HTMLElement("cite")}} para marcar o título de um trabalho (book, play, song, etc.); também é geralmente estilizado com tipo itálico, mas possui significado diferente. Use o elemento {{HTMLElement("strong")}} para marcar o texto que tem importância maior do que o texto que está em volta.

## Exemplo

O elemento `<em>` é frequentemente usado para indicar um contraste implícito ou explícito.

```html
<p>
  Em HTML 5, o que anteriormente era chamado de conteúdo
  <em>block-level</em> agora é chamado de conteúdo <em>flow</em> .
</p>
```

### Resultado

Em HTML5, o que anteriormente era chamado de conteúdo block-level (nível de bloco) agora é chamado de _flow_ content (conteúdo fluído).

## \<i> vs \<em>

É frequentemente confuso para novos desenvolvedores porque há vários elementos para expressar a ênfase em algum texto. `<i>` e `<em>` são talvez uns dos mais comuns. Por que usar `<em></em>` vs `<i></i>`? Eles produzem o mesmo resultado, certo?

Não exatamente. O resultado visual é, por padrão, o mesmo - ambas as tags renderizam seu conteúdo em itálicos. Mas o significado semântico é diferente. A tag `<em>` representa ênfase importante de seus conteúdos, enquanto que a tag `<i>` representa o texto que é iniciado de uma prosa, como uma palavra estrangeira, pensamentos de um personagem ficcional, ou quando o texto se refere á definição de uma palavra em vez de representar seu significado semântico. (O título de um trabalho, tal como o nome de um livro ou filme, deve usar `<cite>`.)

Um exemplo para `<em>` poderia ser: "Apenas já faça isso!", ou: "Nós temos que fazer algo acerca disso". Uma pessoa ou software lendo o texto pronunciaria as palavras em itálico com uma ênfase.

Um exemplo para `<i>` poderia ser: "A _Rainha Mary_ velejou na noite passada". Aqui, não é adicionada ênfase ou importância na palavra "Rainha Mary". É meramente indicado que o objeto em questão não é uma rainha chamada Mary, mas um navio chamado _Rainha Mary_. Outro exemplo para `<i>` poderia ser: "A palavra _o_ é um artigo".

## Especificações

| Especificação                                                                         | Status                   | Comentário |
| ------------------------------------------------------------------------------------- | ------------------------ | ---------- |
| {{SpecName('HTML WHATWG', 'text-level-semantics.html#the-em-element', '&lt;em&gt;')}} | {{Spec2('HTML WHATWG')}} |            |
| {{SpecName('HTML5 W3C', 'textlevel-semantics.html#the-em-element', '&lt;em&gt;')}}    | {{Spec2('HTML5 W3C')}}   |            |
| {{SpecName('HTML4.01', 'struct/text.html#h-9.2.1', '&lt;em&gt;')}}                    | {{Spec2('HTML4.01')}}    |            |

## Compatibilidade com navegadores

{{Compat("html.elements.em")}}

## Veja também

- {{HTMLElement("i")}}

{{HTMLSidebar}}
