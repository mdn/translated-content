---
title: <s>
slug: Web/HTML/Element/s
---

{{HTMLSidebar}}

O **elemento HTML `<s>`** renderiza um texto tachado ou uma linha cortando o texto. Use o elemento `<s>` para representar texto que não sejam relevante ou que não estam corretos. Não é apropriado o uso do `<s>` indicar edições no texto; para indicar edições no texto utilize {{HTMLElement("del")}} e {{HTMLElement("ins")}}, que são elementos mais apropriados.

{{EmbedInteractiveExample("pages/tabbed/s.html", "tabbed-shorter")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/pt-BR/docs/Web/HTML/Content_categories"
          >Categorias de conteúdo</a
        >
      </th>
      <td>
        <a href="/pt-BR/docs/Web/HTML/Content_categories#Phrasing_content"
          >Conteúdo fraseado</a
        >
        ou
        <a href="/pt-BR/docs/Web/HTML/Content_categories#Flow_content"
          >conteúdo de fluxo</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Conteúdo permitido</th>
      <td>
        <a href="/pt-BR/docs/Web/HTML/Content_categories#Phrasing_content"
          >Conteúdo freaseado</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omissão de Tag</th>
      <td>Nenhuma, as tags de abertura e de fechamento são obrigatórias.</td>
    </tr>
    <tr>
      <th scope="row">Pais permitidos</th>
      <td>
        Qualquer elemento que aceite
        <a href="/pt-BR/docs/Web/HTML/Content_categories#Phrasing_content"
          >conteúdo fraseado</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Funções ARIA permitidas</th>
      <td>Todas</td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Atributos

Esse atributo incluí [atributos globais](/pt-BR/docs/Web/HTML/Global_attributes).

> **Note:** **Notas de implementação:** Até Gecko 1.9.2 inclusive, Firefox implementa [`HTMLSpanElement`](/pt-BR/docs/DOM/span) para a interface deste elemento.

## Exemplo

```xml
<s>Hoje é um dia especial: Salmon</s> ESGOTADO<br>
<span style="text-decoration:line-through;">Hoje é um dia especial:
  Salmon</span> ESGOTADO
```

### Resultado

~~Hoje é um dia especial: Salmão~~ ESGOTADO
~~Hoje é um dia especial: Salmão~~ ESGOTADO

## Preocupações com acessibilidade

A presença do elemento s não é anunciada pela maioria das tecnologias de leitura de tela em sua configuração padrão. Isso pode ser anunciado usando a propriedade CSS {{cssxref("content")}}, junto com os pseudoelementos {{cssxref("::before")}} and {{cssxref("::after")}}.

```
s::before,
s::after {
  clip-path: inset(100%);
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

s::before {
  content: " [início do texto utilizado] ";
}

s::after {
  content: " [fim do texto utilizado] ";
}
```

Algumas pessoas que usam leitores de tela que desativam deliberadamente o anúncio de conteúdo que criados com muita verbosidade. Por esse motivo, é importante não abusar dessa técnica e aplicá-la apenas nas situações em que o desconhecimento do conteúdo foi eliminado e que afetaria negativamente a compreensão.

- [Nota curta sobre como deixar sua marca (mais acessível) | O Grupo Paciello](https://developer.paciellogroup.com/blog/2017/12/short-note-on-making-your-mark-more-accessible/)
- [Ajustando estilos de texto | Adrian Roselli](http://adrianroselli.com/2017/12/tweaking-text-level-styles.html)

## Especificações

| Especificação                                                                   | Estado                   | Comentário |
| ------------------------------------------------------------------------------- | ------------------------ | ---------- |
| {{SpecName('HTML WHATWG','semantics.html#the-s-element','s element')}}          | {{Spec2('HTML WHATWG')}} |            |
| {{SpecName('HTML5 W3C','text-level-semantics.html#the-s-element','s element')}} | {{Spec2('HTML5 W3C')}}   |            |

## Compatibilidade com navegadores

{{Compat("html.elements.s")}}

## Veja mais

- O elemento {{HTMLElement("strike")}}, é o alter ego de {{HTMLElement("s")}} é obsoleto e não deve mais ser usado em sites.
- Elemento {{HTMLElement("del")}} deve ser usado quando o conteúdo for _deletado_.
- O CSS {{cssxref("text-decoration-line")}} propriedade deve ser usada para alcançar o antigo aspecto visual do elemento {{HTMLElement("s")}}.
