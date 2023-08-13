---
title: <picture>
slug: Web/HTML/Element/picture
---

O **elemento HTML `<picture>`** é um container usado para especificar múltiplos elementos {{HTMLElement("source")}} para um elemento específico {{HTMLElement("img")}} contido nele. O navegador irá escolher a imagem mais adequada de acordo com o layout atual da página, caracteristicas do dispositivo em que será exibido (p.e. um dispositivo normal ou um hiDPI), e a habilidade do navegador de renderizar um certo tipo de imagem (p.e., envie uma imagem WebP para os navegadores baseados no Chromium ou PNG para navegadores não-Chromium); se não houver correspondência entre os elementos {{HTMLElement("source")}}, o arquivo especificado pelo elemento `<img>` será selecionado. A imagem selecionada é então exibida no espaço ocupado pelo elemento `<img>`.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/pt-BR/docs/Web/Guide/HTML/Categorias_de_conteudo"
          >Categorias de conteúdo</a
        >
      </th>
      <td>
        <a
          href="/pt-BR/docs/Web/Guide/HTML/Categorias_de_conteudo#Conteúdo_de_fluxo"
          >Conteúdo de fluxo</a
        >,
        <a
          href="/pt-BR/docs/Web/Guide/HTML/Categorias_de_conteudo#Conteúdo_fraseado"
          >conteúdo fraseado</a
        >,
        <a
          href="/pt-BR/docs/Web/Guide/HTML/Categorias_de_conteudo#Conteúdo_embutido"
          >conteúdo embutido</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Conteúdo permitido</th>
      <td>
        Zero ou mais elementos {{HTMLElement("source")}}, seguidos de um
        elemento {{HTMLElement("img")}}, opcionalmente mesclado com
        elementos de suporte para scripts (por exemplo,
        {{HTMLElement("script")}} e
        {{HTMLElement("template")}}).
      </td>
    </tr>
    <tr>
      <th scope="row">Omissão de tag</th>
      <td>Nenhuma, as tags de abertura e fechamento são mandatórias</td>
    </tr>
    <tr>
      <th scope="row">Parentes permitidos</th>
      <td>Qualquer elemento que permita conteúdo embutido (embedded).</td>
    </tr>
    <tr>
      <th scope="row">Papéis ARIA permitidos</th>
      <td>Nenhum</td>
    </tr>
    <tr>
      <th scope="row">Interface do DOM</th>
      <td>{{domxref("HTMLPictureElement")}}</td>
    </tr>
  </tbody>
</table>

## Atributos

Esse elemento só inclui [elementos globais](/pt-BR/docs/Web/HTML/Global_attributes).

## Exemplo 1: Uso com atributo `media`

O atributo `media` permite você especificar uma media query que o navegador irá avaliar para selecionar um elemento {{HTMLElement("source")}} . Se a media query retornar `falso`, o elemento {{HTMLElement("source")}} é ignorado.

```html
<picture>
  <source srcset="mdn-logo-wide.png" media="(min-width: 600px)" />
  <img src="mdn-logo-narrow.png" alt="MDN" />
</picture>
```

## Exemplo 2: Uso com atributo type

O atributo `type` lhe permite especificar um tipo MIME para o(s) recurso(s) fornecido(s) no atributo srcset do elemento {{HTMLElement("source")}}. Se o navegador não suporta o tipo especificado, o elemento {{HTMLElement("source")}} é ignorado.

```html
<picture>
  <source srcset="mdn-logo.svg" type="image/svg+xml" />
  <img src="mdn-logo.png" alt="MDN" />
</picture>
```

## Especificações

| Specification                                                                              | Status                   | Comment            |
| ------------------------------------------------------------------------------------------ | ------------------------ | ------------------ |
| {{SpecName('HTML WHATWG', 'embedded-content.html#the-picture-element','&lt;picture&gt;')}} | {{Spec2('HTML WHATWG')}} | Initial definition |

## Compatibilidade com navegadores

{{Compat("html.elements.picture")}}

## Veja também

- {{HTMLElement("img")}} element
- {{HTMLElement("source")}} element
