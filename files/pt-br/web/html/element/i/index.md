---
title: <i>
slug: Web/HTML/Element/i
---

O **elemento HTML `<i>` **representa uma parte do texto que é destacada do restante por algum motivo, por exemplo, termos técnicos, expressões de outros idiomas ou pensamentos de personagens fictícios. Normalmente, é apresentado com o uso do tipo "itálico".

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
          >Conteúdo de fluxo (flow content)</a
        >,
        <a href="/pt-BR/docs/Web/HTML/Content_categories#Phrasing_content"
          >conteúdo com texto (phrasing content)</a
        >, conteúdo palpável (palpable content).
      </td>
    </tr>
    <tr>
      <th scope="row">Conteúdo permitido</th>
      <td>
        <a href="/pt-BR/docs/Web/HTML/Content_categories#Phrasing_content"
          >Conteúdo com texto (phrasing content)</a
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
        Qualquer elemento que aceite
        <a href="/pt-BR/docs/Web/HTML/Content_categories#Phrasing_content"
          >conteúdo com texto (phrasing content)</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">ARIA roles permitidos</th>
      <td>Qualquer um.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>
        {{domxref("HTMLElement")}} Up to Gecko 1.9.2 (Firefox 4)
        inclusive, Firefox implements the
        {{domxref("HTMLSpanElement")}} interface for this element.
      </td>
    </tr>
  </tbody>
</table>

## Atributos

Esse elemento inclui apenas [atributos globais](/pt-BR/docs/Web/HTML/Global_attributes).

## Exemplo

```html
<p>
  A expressão em latim <i class="latin">Veni, vidi, vici</i> é frequentemente
  mencionada na música, na arte e na literatura.
</p>
```

### Resultado

A expressão em latim _Veni, vidi, vici_ é frequentemente mencionada na música, na arte e na literatura.

## Notas

Nas primeiras versões das especificações HTML, a tag `<i>` era usada apenas para apresentar textos em itálico, assim como a tag `<b>` tag era usada para mostrar textos em negrito. Isso não é mais verdade, já que, atualmente, essas tags definem a semântica, e não mais aparência tipográfica. A tag `<i>` pode representar uma parte do texto com uma diferença semântica, na qual a representação tipográfica padrão é no tipo itálico. Isso significa que os navegadores continuarão a apresentar o conteúdo em itálico, mas, de acordo com o que é definido, isso não é mais requerido.

Use esse elemento somente quando não existir mais nenhum outro elemento com semântica apropriada. Por exemplo:

- Use {{HTMLElement("em")}} para indicar ênfase ou estresse.
- Use {{HTMLElement("strong")}} para indicar importância.
- Use {{HTMLElement("mark")}} para indicar relevância.
- Use {{HTMLElement("cite")}} para citar o nome de um trabalho, tal como um livro, jogo ou música.
- Use {{HTMLElement("dfn")}} para marcar a instância de definição de um termo .

Uma boa ideia é usar o atributo **class** para identificar porque esse elemento está sendo usado. Com isso, caso a apresentação precise ser alterada com o tempo, isso pode ser feito de forma seletiva utilizando as folhas de estilo.

## Especificações

| Especificação                                                                     | Status                   | Comentário |
| --------------------------------------------------------------------------------- | ------------------------ | ---------- |
| {{SpecName('HTML WHATWG', 'semantics.html#the-i-element', '&lt;i&gt;')}}          | {{Spec2('HTML WHATWG')}} |            |
| {{SpecName('HTML5 W3C', 'text-level-semantics.html#the-i-element', '&lt;i&gt;')}} | {{Spec2('HTML5 W3C')}}   |            |
| {{SpecName('HTML4.01', 'present/graphics.html#h-15.2.1', '&lt;b&gt;')}}           | {{Spec2('HTML4.01')}}    |            |

## Compatibilidade com navegadores

{{Compat("html.elements.i")}}

## Ver também

- {{HTMLElement("em")}}
