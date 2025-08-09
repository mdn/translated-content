---
title: "<abbr>: O elemento Abbreviation"
slug: Web/HTML/Element/abbr
l10n:
  sourceCommit: f10015d1752d5668d8fe0de29f9d9807de475d58
---

{{HTMLSidebar}}

O elemento [HTML](/pt-BR/docs/Web/HTML) **`<abbr>`** representa uma abreviação ou acrônimo.

Ao incluir uma abreviação ou acrônimo, forneça uma expansão completa do termo em texto simples no primeiro uso, junto com o `<abbr>` para marcar a abreviação. Isso informa à pessoa usuária o que a abreviação ou acrônimo significa.

O atributo opcional [`title`](/pt-BR/docs/Web/HTML/Global_attributes/title) pode fornecer uma expansão para a abreviação ou acrônimo quando uma expansão completa não estiver presente. Isso fornece uma dica para os agentes da pessoa usuária sobre como anunciar/exibir o conteúdo enquanto informa a todas as pessoas usuárias o que a abreviação significa. Se presente, `title` deve conter esta descrição completa e nada mais.

{{InteractiveExample("HTML Demo: &lt;abbr&gt;", "tabbed-shorter")}}

```html interactive-example
<p>
  You can use <abbr>CSS</abbr> (Cascading Style Sheets) to style your
  <abbr>HTML</abbr> (HyperText Markup Language). Using style sheets, you can
  keep your <abbr>CSS</abbr> presentation layer and <abbr>HTML</abbr> content
  layer separate. This is called "separation of concerns."
</p>
```

```css interactive-example
abbr {
  font-style: italic;
  color: chocolate;
}
```

## Atributos

Este elemento suporta apenas os [atributos globais](/pt-BR/docs/Web/HTML/Global_attributes). O atributo [`title`](/pt-BR/docs/Web/HTML/Global_attributes/title) tem um significado semântico específico quando usado com o elemento `<abbr>`; ele _deve_ conter uma descrição completa legível para pessoas ou uma expansão da abreviação. Este texto é frequentemente apresentado pelos navegadores como uma dica de ferramenta quando o cursor do mouse é passado sobre o elemento.

Cada elemento `<abbr>` que você usa é independente de todos os outros; fornecer um `title` para um não anexa automaticamente o mesmo texto de expansão a outros com o mesmo texto de conteúdo.

## Notas de uso

### Casos de uso típicos

Certamente não é necessário que todas as abreviações sejam marcadas usando `<abbr>`. Existem, no entanto, alguns casos em que é útil fazer isso:

- Quando uma abreviação é usada e você deseja fornecer uma expansão ou definição fora do fluxo do conteúdo do documento, use `<abbr>` com um [`title`](/pt-BR/docs/Web/HTML/Global_attributes/title) apropriado.
- Para definir uma abreviação que pode ser desconhecida para a pessoa leitora, apresente o termo usando `<abbr>` e um texto em linha fornecendo a definição. Inclua um atributo `title` somente quando a expansão ou definição em linha não estiver disponível.
- Quando a presença de uma abreviação no texto precisa ser semanticamente notada, o elemento `<abbr>` é útil. Isso pode ser usado, por sua vez, para fins de estilo ou script.
- Você pode usar `<abbr>` em conjunto com {{HTMLElement("dfn")}} para estabelecer definições para termos que são abreviações ou acrônimos. Veja o exemplo [Definindo uma abreviação](#definindo_uma_abreviação) abaixo.

### Considerações gramaticais

Em idiomas com [número gramatical](<https://pt.wikipedia.org/wiki/N%C3%BAmero_(gram%C3%A1tica)>) (ou seja, idiomas em que o número de itens afeta a gramática de uma sentença), use o mesmo número gramatical no seu atributo `title` assim como no seu elemento `<abbr>`. Isso é especialmente importante em idiomas com mais de dois números, como o árabe, mas também é relevante em inglês.

## Estilo padrão

O propósito deste elemento é puramente para a conveniência da pessoa autora e todos os navegadores o exibem em linha ({{cssxref("display", "display: inline")}}) por padrão, embora seu estilo padrão varie de um navegador para outro:

Alguns navegadores adicionam um sublinhado pontilhado ao conteúdo do elemento. Outros adicionam um sublinhado pontilhado ao converter o conteúdo para versaletes. Outros podem não estilizá-lo de forma diferente de um elemento {{HTMLElement("span")}}. Para controlar esse estilo, use {{cssxref('text-decoration')}} e {{cssxref('font-variant')}}.

## Acessibilidade

Soletrar a sigla ou abreviação por completo na primeira vez que for usada em uma página é benéfico para ajudar as pessoas a entendê-la, especialmente se o conteúdo for um jargão técnico ou do setor.

Inclua um `title` somente se não for possível expandir a abreviação ou acrônimo no texto. Ter uma diferença entre a palavra ou frase anunciada e o que é exibido na tela, especialmente se for um jargão técnico com o qual a pessoa leitora pode não estar familiarizada, pode ser chocante.

```html
<p>
  JavaScript Object Notation (<abbr>JSON</abbr>) is a lightweight
  data-interchange format.
</p>
```

{{EmbedLiveSample("Accessibility")}}

Isso é especialmente útil para pessoas que não estão familiarizadas com a terminologia ou os conceitos discutidos no conteúdo, pessoas que são novas no idioma e pessoas com problemas cognitivos.

## Exemplos

### Marcando uma abreviação semanticamente

Para marcar uma abreviação sem fornecer uma expansão ou descrição, use `<abbr>` sem nenhum atributo, como visto neste exemplo.

#### HTML

```html
<p>Using <abbr>HTML</abbr> is fun and easy!</p>
```

#### Resultado

{{EmbedLiveSample("Marking_up_an_abbreviation_semantically")}}

### Estilizando abreviações

Você pode usar CSS para definir um estilo personalizado a ser usado para abreviações, como visto neste exemplo básico.

#### HTML

```html
<p>Using <abbr>CSS</abbr>, you can style your abbreviations!</p>
```

#### CSS

```css
abbr {
  font-variant: all-small-caps;
}
```

#### Resultado

{{EmbedLiveSample("Styling_abbreviations")}}

### Fornecendo uma expansão

Adicionar um atributo [`title`](/pt-BR/docs/Web/HTML/Global_attributes/title) permite que você forneça uma expansão ou definição para a abreviação ou acrônimo.

#### HTML

```html
<p>Ashok's joke made me <abbr title="Laugh Out Loud">LOL</abbr> big time.</p>
```

#### Resultado

{{EmbedLiveSample("Providing_an_expansion")}}

### Definindo uma abreviação

Você pode usar `<abbr>` em conjunto com {{HTMLElement("dfn")}} para definir uma abreviação mais formalmente, como mostrado aqui.

#### HTML

```html
<p>
  <dfn id="html"><abbr title="HyperText Markup Language">HTML</abbr> </dfn> is a
  markup language used to create the semantics and structure of a web page.
</p>

<p>
  A <dfn id="spec">Specification</dfn> (<abbr>spec</abbr>) is a document that
  outlines in detail how a technology or API is intended to function and how it
  is accessed.
</p>
```

#### Resultado

{{EmbedLiveSample("Defining_an_abbreviation", 600, 120)}}

## Resumo técnico

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/pt-BR/docs/Web/HTML/Content_categories"
          >Categorias de conteúdo</a
        >
      </th>
      <td>
        <a href="/pt-BR/docs/Web/HTML/Content_categories#conte%C3%BAdo_de_fluxo"
          >Conteúdo de fluxo</a
        >,
        <a href="/pt-BR/docs/Web/HTML/Content_categories#conte%C3%BAdo_fraseado"
          >conteúdo fraseado</a
        >, conteúdo palpável
      </td>
    </tr>
    <tr>
      <th scope="row">Conteúdo permitido</th>
      <td>
        <a href="/pt-BR/docs/Web/HTML/Content_categories#conte%C3%BAdo_fraseado"
          >Conteúdo fraseado</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Omissão de tag</th>
      <td>Nenhuma, tanto a tag inicial quanto a final são obrigatórias.</td>
    </tr>
    <tr>
      <th scope="row">Pais permitidos</th>
      <td>
        Qualquer elemento que aceite
        <a href="/pt-BR/docs/Web/HTML/Content_categories#conte%C3%BAdo_fraseado"
          >conteúdo fraseado</a
        >
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
      <th scope="row">Funções ARIA permitidas</th>
      <td>Qualquer uma</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [Usando o elemento `<abbr>`](/pt-BR/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features#abreviações)
