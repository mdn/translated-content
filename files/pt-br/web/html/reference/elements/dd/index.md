---
title: "<dd>: elemento Detalhes da Descrição"
slug: Web/HTML/Reference/Elements/dd
original_slug: Web/HTML/Element/dd
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

- `nowrap` {{Non-standard_inline}}
  - : Se o valor deste atributo for `yes`, o texto de definição não será envolvido. O valor padrão é `no`.

## Exemplo

Para exemplos, veja [os exemplos de \<dl>](/pt-BR/docs/Web/HTML/Element/dl#exemplos).

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{HTMLELement("dl")}}
- {{HTMLElement("dt")}}
