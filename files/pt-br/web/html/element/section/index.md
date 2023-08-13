---
title: <section>
slug: Web/HTML/Element/section
---

O **elemento HTML `<section>`** representa uma seção genérica contida em um documento HTML, geralmente com um título, quando não existir um elemento semântico mais específico para representá-lo.

Por exemplo, um menu de navegação deve estar dentro um elemento {{htmlelement ("nav")}}, mas uma lista de resultados de pesquisa ou a exibição de um mapa e seus controles não possuem elementos específicos, e podem ser colocados dentro de uma \<section>.

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
          >Conteúdo de fluxo</a
        >
        ,
        <a href="/pt-BR/docs/Web/HTML/Content_categories#Sectioning_content"
          >conteúdo de seção</a
        >, conteúdo palpável.
      </td>
    </tr>
    <tr>
      <th scope="row">Conteúdo permitido</th>
      <td>
        <a href="/pt-BR/docs/Web/HTML/Content_categories#Flow_content"
          >Conteúdo de fluxo</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omissão de tags</th>
      <td>Sem omissão de tags</td>
    </tr>
    <tr>
      <th scope="row">Tags-pai permitidas</th>
      <td>
        Qualquer elemento que aceite
        <a href="/pt-BR/docs/Web/HTML/Content_categories#Flow_content"
          >conteúdo de fluxo</a
        >. Note que um elemento {{HTMLElement("section")}} não deve
        ser um descendente de um elemento {{HTMLElement("address")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Regras ARIA permitidas</th>
      <td>
        <code><a href="/pt-br/docs/Web/Accessibility/ARIA/Roles/alert_role">alert</a></code>, <code><a href="/pt-br/docs/Web/Accessibility/ARIA/Roles/alertdialog_role">alertdialog</a></code>,
        <code><a href="/pt-br/docs/Web/Accessibility/ARIA/Roles/application_role">application</a></code>, <code><a href="/pt-br/docs/Web/Accessibility/ARIA/Roles/banner_role">banner</a></code>,
        <code><a href="/pt-br/docs/Web/Accessibility/ARIA/Roles/complementary_role">complementary</a></code>,
        <code><a href="/pt-br/docs/Web/Accessibility/ARIA/Roles/contentinfo_role">contentinfo</a></code>, <code><a href="/pt-br/docs/Web/Accessibility/ARIA/Roles/dialog_role">dialog</a></code>,
        <code><a href="/pt-br/docs/Web/Accessibility/ARIA/Roles/document_role">document</a></code>, <code><a href="/pt-br/docs/Web/Accessibility/ARIA/Roles/feed_role">feed</a></code>,
        <code><a href="/pt-br/docs/Web/Accessibility/ARIA/Roles/log_role">log</a></code>, <code><a href="/pt-br/docs/Web/Accessibility/ARIA/Roles/main_role">main</a></code>,
        <code><a href="/pt-br/docs/Web/Accessibility/ARIA/Roles/marquee_role">marquee</a></code>, <code><a href="/pt-br/docs/Web/Accessibility/ARIA/Roles/navigation_role">navigation</a></code>,
        <code><a href="/pt-br/docs/Web/Accessibility/ARIA/Roles/search_role">search</a></code>, <code><a href="/pt-br/docs/Web/Accessibility/ARIA/Roles/status_role">status</a></code>,
        <code><a href="/pt-br/docs/Web/Accessibility/ARIA/Roles/tabpanel_role">tabpanel</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Atributos

Este elemento inclui apenas os [atributos globais](/pt-BR/docs/Web/HTML/Global_attributes).

## Notas de uso

- Cada `<section>` deve ser identificado, geralmente incluindo um cabeçalho (elemento {{HTMLElement('h1')}}-{{HTMLElement('h6')}}) como um filho do elemento `<section>`.
- Se faz sentido distribuir separadamente o conteúdo de um elemento {{HTMLElement("section")}}, use um elemento {{HTMLElement("article")}} em seu lugar.
- Não use o elemento {{HTMLElement("section")}} como um container genérico; para isso que a {{HTMLElement("div")}} serve, especialmente quando a seção é apenas com propósito de estilização. Uma regra de ouro é ,"usar quando uma seção deve aparecer logicamente na estrutura de um documento".

## Exemplo 1

### Antes

```html
<div>
  <h1>Cabeçalho</h1>
  <p>Um monte de conteúdo incrível</p>
</div>
```

### Depois

```html
<section>
  <h1>Cabeçalho</h1>
  <p>Um monte de conteúdo incrível</p>
</section>
```

## Exemplo 2

### Antes

```html
<div>
  <h2>Cabeçalho</h2>
  <img src="passaro.jpg" alt="pássaro" />
</div>
```

### Depois

```html
<section>
  <h2>Cabeçalho</h2>
  <img src="passaro.jpg" alt="pássaro" />
</section>
```

## Especificações

| Especificação                                                                       | Status                   | Comentários |
| ----------------------------------------------------------------------------------- | ------------------------ | ----------- |
| {{SpecName('HTML WHATWG', 'sections.html#the-section-element', '&lt;section&gt;')}} | {{Spec2('HTML WHATWG')}} |             |
| {{SpecName('HTML5.1', 'sections.html#the-section-element', '&lt;section&gt;')}}     | {{Spec2('HTML5.1')}}     |             |
| {{SpecName('HTML5 W3C', 'sections.html#the-section-element', '&lt;section&gt;')}}   | {{Spec2('HTML5 W3C')}}   |             |

## Compatibilidade com navegadores

{{Compat("html.elements.section")}}

## Veja também

- Outros elemtnos relacionados: {{ HTMLElement("body") }}, {{ HTMLElement("nav") }}, {{ HTMLElement("article") }}, {{ HTMLElement("aside") }}, {{ HTMLElement("h1") }}, {{ HTMLElement("h2") }}, {{ HTMLElement("h3") }}, {{ HTMLElement("h4") }}, {{ HTMLElement("h5") }}, {{ HTMLElement("h6") }}, {{ HTMLElement("hgroup") }}, {{ HTMLElement("header") }}, {{ HTMLElement("footer") }}, {{ HTMLElement("address") }};
- [Seções e estrurura do um documento HTML5](/pt-BR/Sections_and_Outlines_of_an_HTML5_document).
