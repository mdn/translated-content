---
title: <figure>
slug: Web/HTML/Element/figure
translation_of: Web/HTML/Element/figure
original_slug: Web/HTML/Element/figura
---
## Resumo

O **Elemento HTML `<figure>` **representa o conteúdo independente, frequentemente com uma legenda ({{HTMLElement("figcaption")}}), e é normalmente referido como uma única unidade. Enquanto ela está relacionada com o fluxo principal, sua posição é independente do fluxo principal.Normalmente, isso é uma imagem, uma ilustração, um diagrama, um trecho de código ou uma esquema que é referenciado no texto principal, mas que pode ser movido para outra página ou para um apêndice, sem afetar o fluxo principal.

> **Note:** _Notas de uso:_
>
> - Being a [sectioning root](/pt-BR/docs/Sections_and_Outlines_of_an_HTML5_document#Sectioning_root), the outline of the content of the \<figure> element is excluded from the main outline of the document.
> - Uma legenda pode ser associada com o elemento `<figure>` inserindo o elemento {{HTMLElement("figcaption")}} dentro dele (no inicio ou no fim).

- _[Content categories](/pt-BR/docs/HTML/Content_categories)_ [Flow content](/pt-BR/docs/HTML/Content_categories#Flow_content), [sectioning root](/pt-BR/docs/Sections_and_Outlines_of_an_HTML5_document#Sectioning_root), palpable content.
- _Permite conteúdo_ A {{HTMLElement("figcaption")}} element, followed by [flow content](/pt-BR/docs/HTML/Content_categories#Flow_content); or flow content followed by a {{HTMLElement("figcaption")}} element; or flow content.
- _Omissão de TAGs_ {{no_tag_omission}}
- _Permitted parent elements_ Any element that accepts [Flow content](/pt-BR/docs/HTML/Content_categories#Flow_content).
- _DOM interface_ {{domxref("HTMLElement")}}

## Atributos

Este elemento só inclui os [atributos globais](/pt-BR/docs/HTML/Global_attributes).

## Exemplos

### Exemplo 1

```html
<!-- Apenas uma imagem-->
<figure>
  <img src="https://developer.mozilla.org/static/img/favicon144.png" alt="Uma imagem impressionante">
</figure>
<p></p>
<!-- Imagem com legenda -->
<figure>
  <img src="https://developer.mozilla.org/static/img/favicon144.png" alt="Uma imagem impressionante">
  <figcaption>Legenda para a imagem impressionante</figcaption>
</figure>
<p></p>
```

### Example 2

```html
    <figure>
      <figcaption>Obtenha os detalhes do browser usando navigator</figcaption>
        <pre>
          function NavigatorExample(){
          var txt;
          txt = "Browser CodeName: " + navigator.appCodeName;
          txt+= "Browser Name: " + navigator.appName;
          txt+= "Browser Version: " + navigator.appVersion ;
          txt+= "Cookies Enabled: " + navigator.cookieEnabled;
          txt+= "Platform: " + navigator.platform;
          txt+= "User-agent header: " + navigator.userAgent;
          }
        </pre>
```

### Exemplo 3

```html
<figure>
      <figcaption><cite>Edsger Dijkstra :-</cite></figcaption>
      <p>"Se o debugging é o processo de remoção de bugs de software, <br /> então programação deve ser o processo de colocá-los"<br /></p>
    </figure>
```

## Especificações

| Especificação                                                                                                            | Status                           | Comentário |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ---------- |
| {{SpecName('HTML WHATWG', 'grouping-content.html#the-figure-element', '&lt;figure&gt;')}} | {{Spec2('HTML WHATWG')}} |            |
| {{SpecName('HTML5 W3C', 'grouping-content.html#the-figure-element', '&lt;figure&gt;')}}     | {{Spec2('HTML5 W3C')}}     |            |

## Navegadores compatíveis

{{Compat("html.elements.figure")}}

## Veja Também

- O {{HTMLElement("figcaption")}} elemento.

{{HTMLRef}}
