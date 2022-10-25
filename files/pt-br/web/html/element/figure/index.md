---
title: <figure>
slug: Web/HTML/Element/figure
translation_of: Web/HTML/Element/figure
original_slug: Web/HTML/Element/figura
---
## Resumo

O Elemento HTML **`<figure>`** representa o conteúdo independente, frequentemente com uma legenda ({{HTMLElement("figcaption")}}), e é normalmente referido como uma única unidade. Enquanto ele está relacionado com o fluxo principal, sua posição é independente do fluxo principal. Normalmente é uma imagem, uma ilustração, um diagrama, um trecho de código ou um esquema que é referenciado no texto principal, mas que pode ser movido para outra página ou para um apêndice, sem afetar o fluxo principal.
  
{{EmbedInteractiveExample("pages/tabbed/figure.html","tabbed-shorter")}}

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

### Imagens

```html
<!-- Apenas uma imagem -->
<figure>
  <img src="favicon-192x192.png" alt="The beautiful MDN logo." />
</figure>

<!-- Imagem com legenda -->
<figure>
  <img src="favicon-192x192.png" alt="The beautiful MDN logo." />
  <figcaption>MDN Logo</figcaption>
</figure>
```

{{EmbedLiveSample("Images", "100%", 375)}}

### Code snippets
  
```html
  <figure>
      <figcaption>Obtenha os detalhes do browser usando <code>navigator</code>.</figcaption>
        <pre>
          function NavigatorExample() {
            var txt;
            txt = "Browser CodeName: " + navigator.appCodeName + "; ";
            txt+= "Browser Name: " + navigator.appName + "; ";
            txt+= "Browser Version: " + navigator.appVersion  + "; ";
            txt+= "Cookies Enabled: " + navigator.cookieEnabled  + "; ";
            txt+= "Platform: " + navigator.platform  + "; ";
            txt+= "User-agent header: " + navigator.userAgent  + "; ";
            console.log("NavigatorExample", txt);
             }
        </pre>
  </figure>
```

{{EmbedLiveSample("Code_snippets", "100%", 250)}}

### Citações
  
```html
  <figure>
    <figcaption><b>Edsger Dijkstra:</b></figcaption>
      <blockquote>
        Se o debugging é o processo de remoção de bugs de software, então programação deve ser o processo de colocá-los
      </blockquote>
  </figure>
```

{{EmbedLiveSample("Quotations")}}
  

### Poemas

```html
<figure>
  <p style="white-space:pre">
    Bid me discourse, I will enchant thine ear, Or like a fairy trip upon the
    green, Or, like a nymph, with long dishevelled hair, Dance on the sands, and
    yet no footing seen: Love is a spirit all compact of fire, Not gross to
    sink, but light, and will aspire.
  </p>
  <figcaption><cite>Venus and Adonis</cite>, by William Shakespeare</figcaption>
</figure>
```

{{EmbedLiveSample("Poems", "100%", 250)}}

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
