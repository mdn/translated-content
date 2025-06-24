---
title: <caption>
slug: Web/HTML/Element/caption
---

{{HTMLSidebar}}

O elemento [HTML](/pt-BR/docs/Web/HTML) **`caption`** especifica a legenda (ou título) de uma tabela.

{{InteractiveExample("HTML Demo: &lt;caption&gt;", "tabbed-taller")}}

```html interactive-example
<table>
  <caption>
    He-Man and Skeletor facts
  </caption>
  <tr>
    <td></td>
    <th scope="col" class="heman">He-Man</th>
    <th scope="col" class="skeletor">Skeletor</th>
  </tr>
  <tr>
    <th scope="row">Role</th>
    <td>Hero</td>
    <td>Villain</td>
  </tr>
  <tr>
    <th scope="row">Weapon</th>
    <td>Power Sword</td>
    <td>Havoc Staff</td>
  </tr>
  <tr>
    <th scope="row">Dark secret</th>
    <td>Expert florist</td>
    <td>Cries at romcoms</td>
  </tr>
</table>
```

```css interactive-example
caption {
  caption-side: bottom;
  padding: 10px;
  font-weight: bold;
}

table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}

th {
  background-color: rgb(230 230 230);
}

td {
  text-align: center;
}

tr:nth-child(even) td {
  background-color: rgb(250 250 250);
}

tr:nth-child(odd) td {
  background-color: rgb(240 240 240);
}

.heman {
  font: 1.4rem molot;
  text-shadow:
    1px 1px 1px #fff,
    2px 2px 1px #000;
}

.skeletor {
  font: 1.7rem rapscallion;
  letter-spacing: 3px;
  text-shadow:
    1px 1px 0 #fff,
    0 0 9px #000;
}
```

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/pt-BR/docs/HTML/Content_categories"
          >Categoria de conteúdo</a
        >
      </th>
      <td>Nenhuma.</td>
    </tr>
    <tr>
      <th scope="row">Conteúdo permitido</th>
      <td>
        <a href="/pt-BR/docs/HTML/Content_categories#flow_content"
          >Flow content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omissão de tag</th>
      <td>
        A tag final pode ser omitida se o elemento não for seguido imediatamente por um
        espaço em branco ASCII ou um comentário.
      </td>
    </tr>
    <tr>
      <th scope="row">Elementos pais permitidos</th>
      <td>
        Um elemento {{HTMLElement("table")}}, como seu primeiro filho.
      </td>
    </tr>
    <tr>
      <th scope="row">Função ARIA implícita</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >Nenhuma função correspondente</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>No <code>role</code> permitted</td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLTableCaptionElement")}}</td>
    </tr>
  </tbody>
</table>

## Atributos

Este elemento inclui os [atributos globais](/pt-BR/docs/Web/HTML/Global_attributes).

### Atributos obsoletos

Os seguintes atributos são obsoletos e não devem ser usados. Estão documentados abaixo apenas como referência ao atualizar o código, e interesse histórico.

- `align` {{deprecated_inline}}
  - : Esse atributo [enumerado](/pt-BR/docs/Glossary/Enumerated) indica como a legenda deve ser alinhada em relação à tabela. Ele pode ter um dos seguintes valores:
    - `left`
      - : A legenda é exibida à esquerda da tabela.
    - `top`
      - : A legenda é exibida acima da tabela.
    - `right`
      - : A legenda é exibida à direita da tabela.
    - `bottom`
      - : A legenda é exibida abaixo da tabela.

    > [!WARNING]
    > Não use este atributo já que ele foi depreciado: O elemento {{HTMLElement("caption")}} deve ser estilizado usando as propriedades [CSS](/pt-BR/docs/Web/CSS). Para dar um efeito similar ao atributo `align`, use as propriedades [CSS](/pt-BR/docs/Web/CSS) {{cssxref("caption-side")}} e {{cssxref("text-align")}}.

## Notas de uso

Se utilizado, o elemento `<caption>` deve ser o primeiro filho de seu elemento {{HTMLElement("table")}} pai.

Quando o elemento `<table>` que contém o `<caption>` é o único descendente de um elemento {{HTMLElement("figure")}}, você deve usar o {{HTMLElement("figcaption")}} elemento em vez de `<caption>`.

Um {{cssxref("background-color")}} na tabela não incluirá a legenda. Adicione um `background-color` ao elemento `<caption>` também se você deseja que a mesma cor de fundo esteja por trás de ambos.

## Exemplo

Esse exemplo simples apresenta uma tabela que inclui uma legenda

```html
<table>
  <caption>
    Exemplo de Legenda
  </caption>
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

```css hidden
caption {
  caption-side: top;
}
table {
  border-collapse: collapse;
  border-spacing: 0px;
}
table,
th,
td {
  border: 1px solid black;
}
```

{{EmbedLiveSample('Exemplo', 650, 100)}}

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- Propriedades CSS que podem ser especialmente úteis para estilizar o elemento {{HTMLElement("caption")}}:
  - {{cssxref("text-align")}}, {{cssxref("caption-side")}}.
