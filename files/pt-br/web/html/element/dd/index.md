---
title: "<dd>: elemento Detalhes da Descrição"
slug: Web/HTML/Element/dd
---

O **elemento HTML \<dd>** fornece detalhes ou uma definição mais completa do termo precedente (definido por {{HTMLElement("dt")}}) numa lista de descrições ({{HTMLElement("dl")}}).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/pt-BR/docs/Web/Guide/HTML/Categorias_de_conteudo"
          >Categorias de conteúdo</a
        >
      </th>
      <td>Nenhuma.</td>
    </tr>
    <tr>
      <th scope="row">Conteúdo permitido</th>
      <td>
        <a
          href="/pt-BR/docs/Web/Guide/HTML/Categorias_de_conteudo#Conte%C3%BAdo_de_fluxo"
          >Conteúdo de fluxo</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omissão de Tag</th>
      <td>
        <p>
          A Tag inicial ({{HTMLElement("dd")}}) é obrigatória.<br />A Tag
          final (&#x3C;/dd>) pode ser omitida se seguida imediatamente por outro
          elemento {{HTMLElement("dd")}}, ou se o elemento pai não tiver
          mais conteúdo.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ancestrais permitidos</th>
      <td>
        {{HTMLElement("dl")}} ou (em
        <a href="/pt-BR/docs/Glossary/WHATWG">WHATWG</a> HTML) uma
        {{HTMLElement("div")}} que está dentro de uma
        {{HTMLElement("dl")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Tags irmãs</th>
      <td>
        {{HTMLElement("dt")}} ou outro elemento
        {{HTMLElement("dd")}} .
      </td>
    </tr>
    <tr>
      <th scope="row">Papeis ARIA permitidos</th>
      <td>Nenhum.</td>
    </tr>
    <tr>
      <th scope="row">Tipo de elemento DOM</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Atributos

Este elemento inclui os [atributos globais](/pt-BR/docs/Web/HTML/Global_attributes) como seus.

- {{htmlattrdef("nowrap")}} {{Non-standard_inline}}
  - : Se o valor deste atributo for `yes`, o texto de definição não será envolvido. O valor padrão é `no`.

## Exemplo

Para exemplos, veja [os exemplos de \<dl>](/pt-BR/docs/Web/HTML/Element/dl#Exemplos).

## Especificações

| Especificação                                                                   | Status                   | Comentário |
| ------------------------------------------------------------------------------- | ------------------------ | ---------- |
| {{SpecName('HTML WHATWG', 'semantics.html#the-dd-element', '&lt;dd&gt;')}}      | {{Spec2('HTML WHATWG')}} |            |
| {{SpecName('HTML5 W3C', 'grouping-content.html#the-dd-element', '&lt;dd&gt;')}} | {{Spec2('HTML5 W3C')}}   |            |
| {{SpecName('HTML4.01', 'struct/lists.html#h-10.3', '&lt;dd&gt;')}}              | {{Spec2('HTML4.01')}}    |            |

## Compatibilidade com navegadores

{{Compat("html.elements.dd")}}

## Veja também

- {{HTMLELement("dl")}}
- {{HTMLElement("dt")}}
