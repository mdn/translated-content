---
title: "<figure>: O elemento Figure com Caption opcional"
slug: Web/HTML/Element/figure
---

{{HTMLSidebar}}

O elemento **`<figure>`** [HTML](/pt-BR/docs/Web/HTML) representa conteúdo autocontido, potencialmente com uma legenda opcional, que é especificada usando o {{HTMLElement("figcaption" )}} elemento. A figura, sua legenda e seu conteúdo são referenciados como uma única unidade.

{{EmbedInteractiveExample("pages/tabbed/figure.html","tabbed-shorter")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/pt-BR/docs/Web/Guide/HTML/Content_categories"
          >Categorias de conteúdo</a
        >
      </th>
      <td>
        <a href="/pt-BR/docs/Web/Guide/HTML/Content_categories#flow_content"
          >Conteudo de fluxo</a
        >,
        <a href="/pt-BR/docs/Web/Guide/HTML/Content_categories#palpable_content"
          >conteúdo palpável</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Conteúdo permitido</th>
      <td>
        Um elemento {{HTMLElement("figcaption")}}, seguido por
        <a href="/pt-BR/docs/Web/Guide/HTML/Content_categories#flow_content"
          >conteúdo de fluxo</a
        >; ou conteúdo de fluxo seguido por um
        {{HTMLElement("figcaption")}} elemento; ou conteúdo de fluxo.
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
        <a href="/pt-BR/docs/Web/Guide/HTML/Content_categories#flow_content"
          >Contúdo de fluxo</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Função ARIA implícita</th>
      <td>
        <a href="/pt-BR/docs/Web/Accessibility/ARIA/Roles/Figure_Role"
          >figure</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Funções ARIA permitidas</th>
      <td>
        Com nenhum
        <a href="/pt-BR/docs/Web/HTML/Element/figcaption">figcaption </a
        >descendente:
        <a href="https://www.w3.org/TR/html-aria/#dfn-any-role">qualquer</a>,
        caso contrário, não há papéis permitidos
      </td>
    </tr>
    <tr>
      <th scope="row">interface DOM</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Atributos

Este elemento inclui apenas os [atributos globais](/pt-BR/docs/Web/HTML/Global_attributes).

## Notas de uso

- Normalmente uma `<figure>` é uma imagem, ilustração, diagrama, trecho de código, etc., que é referenciado no fluxo principal de um documento, mas que pode ser movido para outra parte do documento ou para um apêndice sem afetar o fluxo principal.
- Uma legenda pode ser associada ao elemento `<figure>` inserindo um {{HTMLElement("figcaption")}} dentro dele (como o primeiro ou o último filho). O primeiro elemento `<figcaption>` encontrado na figura é apresentado como legenda da figura.

## Exemplos

### Imagens

```html
<!-- Apenas uma imagem -->
<figure>
  <img src="favicon-192x192.png" alt="O lindo logotipo do MDN." />
</figure>

<!-- Imagem com legenda -->
<figure>
  <img src="favicon-192x192.png" alt="O lindo logotipo do MDN." />
  <figcaption>Logotipo MDN</figcaption>
</figure>
```

{{EmbedLiveSample("Images", "100%", 375)}}

### Trechos de codigo

```html
<figure>
  <figcaption>
    Obtenha detalhes do navegador usando o <code>navigator</code>.
  </figcaption>
  <pre>
function NavigatorExample() {
  var txt;
  txt = "Nome do código do navegador: " + navigator.appCodeName + "; ";
  txt+= "Nome do navegador: " + navigator.appName + "; ";
  txt+= "Versão do navegador: " + navigator.appVersion + "; ";
  txt+= "Cookies habilitados: " + navigator.cookieEnabled + "; ";
  txt+= "Plataforma: " + navigator.platform + "; ";
  txt+= "Cabeçalho do agente do usuário: " + navigator.userAgent + "; ";
  console.log("Exemplo de Navegador", txt);
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
    Se a depuração é o processo de remoção de bugs de software, então a
    programação deve ser o processo de colocá-los.
  </blockquote>
</figure>
```

{{EmbedLiveSample("Quotations")}}

### Poemas

```html
<figure>
  <p style="white-space:pre">
    Ofereça-me um discurso, encantarei seu ouvido, Ou como uma viagem de fadas
    sobre o verde, Ou, como uma ninfa, com longos cabelos desgrenhados, Dança na
    areia, e mas nenhum fundamento visto: O amor é um espírito todo compacto de
    fogo, Não grosseiro para afundar, mas leve, e vai aspirar.
  </p>
  <figcaption><cite>Vênus e Adônis</cite>, de William Shakespeare</figcaption>
</figure>
```

{{EmbedLiveSample("Poemas", "100%", 250)}}

## Especificações

{{Specifications}}

## Compatibilidade do navegador

{{Compat}}

## Veja também

- O elemento {{HTMLElement("figcaption")}}.
