---
title: <caption>
slug: Web/HTML/Element/caption
tags:
  - Elementos
  - Tabela HTML
  - Título de tabela
  - título
translation_of: Web/HTML/Element/caption
---
## Sumário

O **Elemento** **HTML `<caption>` (**ou _Elemento HTML Subtitulo de Tabela_) representa o título de uma tabela. Embora ele seja sempre o primeiro filho de um {{HTMLElement("table")}}, seu estilo, usando CSS pode colocar ele em qualquer lugar relativo a tabela.

> **Note:** **Nota de Uso**: Quando o elemento {{HTMLElement("table")}} que é o pai deste {{HTMLElement("caption")}} é o único filho de um elemento {{HTMLElement("figure")}}, use o elemento {{HTMLElement("figcaption")}} no lugar.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a
          href="/en-US/docs/HTML/Content_categories"
          >Categoria de conteúdo</a
        >
      </th>
      <td>Nenhuma.</td>
    </tr>
    <tr>
      <th scope="row">Conteúdo permitido</th>
      <td>
        <a
          href="/en-US/docs/HTML/Content_categories#Flow_content"
          >Flow content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omissão de tag</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Elementos pais permitidos</th>
      <td>
        Um elemento {{HTMLElement("table")}}, como seu primeiro filho.
      </td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLTableCaptionElement")}}</td>
    </tr>
  </tbody>
</table>

## Atributos

Este elemento inclui os [atributos globais](/pt-BR/docs/HTML/Global_attributes).

### Atributos obsoletos

Os seguintes atributos são obsoletos e não devem ser usados. Estão documentados abaixo apenas como referência ao atualizar o código, e interesse histórico.

- {{htmlattrdef("align")}} {{deprecatedGeneric('inline','HTML4.01')}} {{obsoleteGeneric('inline','HTML5')}}

  - : Esse atributo enumerado indica como o caption deve ser alinhado em relação a tabela. Ele pode ter os seguintes valores:

    - `left`, exibido a esquerda da tabela
    - `top`, exibido antes da tabela
    - `right`, exibido a direita da tabela
    - `bottom`, exibido abaixo da tabela

    > **Note:** **Nota de uso:** Não use este atributo, como ele foi depreciado: o elemento {{HTMLElement("caption")}} deve ser estilizado usando [CSS](/pt-BR/docs/CSS). Para dar um efeito similar ao atributo `align`, use as propriedades [CSS](/pt-BR/docs/CSS) {{cssxref("caption-side")}} e {{cssxref("text-align")}}.

## Notas de uso

Quando o elemento {{HTMLElement("table")}} que contém o \<caption> é o único descendente de um elemento {{HTMLElement("figure")}}, você deve usar o {{HTMLElement("figcaption")}} elemento em vez de \<caption>.

## Exemplo

Esse exemplo mostra uma tabela que tem título.

```
<table>
  <caption>Exemplo de título</caption>
  <tr>
    <th>Login</th>
    <th>Email</th>
  </tr>
  <tr>
    <td>usuario1</td>
    <td>usuario1@dominio.com</td>
  </tr>
  <tr>
    <td>usuario2</td>
    <td>usuario2@dominio.com</td>
  </tr>
</table>
```

```
caption {
  caption-side: top;
  align: right;
}
table {
  border-collapse: collapse;
  border-spacing: 0px;
}
table, th, td {
  border: 1px solid black;
}
```

{{EmbedLiveSample('Exemplo', 650, 100)}}

## Especificações

| Especificação                                                                                                    | Estado                           | Comentário |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | ---------- |
| {{SpecName('HTML WHATWG', 'tables.html#the-caption-element', '&lt;caption&gt;')}}     | {{Spec2('HTML WHATWG')}} |            |
| {{SpecName('HTML5 W3C', 'tabular-data.html#the-caption-element', '&lt;caption&gt;')}} | {{Spec2('HTML5 W3C')}}     |            |
| {{SpecName('HTML4.01', 'struct/tables.html#h-11.2.2', '&lt;caption&gt;')}}             | {{Spec2('HTML4.01')}}     |            |

## Compatibilidade com navegadores

{{Compat("html.elements.caption")}}

## Veja também

- Outros elementos HTML relacionados ao elemento table: {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}};
- Propriedades CSS que pode ser especialmente utéis para estilizar o elemento {{HTMLElement("caption")}}:

  - {{cssxref("text-align")}}, {{cssxref("caption-side")}}.

{{HTMLRef}}
