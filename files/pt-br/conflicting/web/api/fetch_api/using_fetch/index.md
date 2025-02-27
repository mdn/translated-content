---
title: Conceitos básicos de Fetch
slug: conflicting/Web/API/Fetch_API/Using_Fetch
original_slug: Web/API/Fetch_API/Basic_concepts
---

{{DefaultAPISidebar("Fetch API")}}

A [Fetch API](/pt-BR/docs/Web/API/Fetch_API) fornece uma interface para buscar recursos (inclusive pela rede). Parecerá familiar para alguém que já tenha usado {{domxref("XMLHttpRequest")}}, mas ela fornece um conjunto de recursos mais poderoso e flexível . Este artigo expõe alguns conceitos básicos da API Fetch.

> [!NOTE]
> Este artigo será incrementado ao longo do tempo. Se você achar um conceito em Fetch que parece precisar de uma explicação melhor, informe alguém em [fórum de discussãMDN](https://discourse.mozilla-community.org/c/mdn), or [Mozilla IRC](https://wiki.mozilla.org/IRC) (#mdn room.)

## Em poucas palavras

O coração do Fetch são as abstrações da Interface do HTTP {{domxref("Request")}}, {{domxref("Response")}}, {{domxref("Headers")}}, e {{domxref("Body")}} payloads, juntamente com {{domxref("GlobalFetch.fetch","global fetch")}} método para iniciar requisições de recursos assíncronos. Como os componentes principais do HTTP são abstraidos como objetos de JavaScript, torna-se fácil APIs fazer uso das funcionalidades.

[Service Workers](/pt-BR/docs/Web/API/Service_Worker_API) é um exemplo de uma API que faz um grande uso de Fecth.

Fetch leva a assincronicidade um passo além. A API é completamente baseada em {{jsxref("Promise")}}.

## Guard

Guard é uma novidade de objetos {{domxref("Headers")}}, podendo assumir os valores de `immutable`, `request`, `request-no-cors`, `response`, ou `none`, dependendo de onde o cabeçalho é utilizado.

Quando um novo objeto {{domxref("Headers")}} é criado usando o {{domxref("Headers.Headers","Headers()")}} {{glossary("constructor")}}, seu guard é configurado como `none` (o padrão). Quando um objeto {{domxref("Request")}} ou {{domxref("Response")}} é criado, tem um objeto {{domxref("Headers")}} associado cujo guard é resumido a seguir:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">Novo tipo de objeto</th>
      <th scope="col">Construtor criado</th>
      <th scope="col">
        Configuração guard associada ao objeto {{domxref("Headers")}}
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">{{domxref("Request")}}</td>
      <td>{{domxref("Request.Request","Request()")}}</td>
      <td><code>request</code></td>
    </tr>
    <tr>
      <td>
        {{domxref("Request.Request","Request()")}} com
        {{domxref("Request.mode","mode")}} de <code>no-cors</code>
      </td>
      <td><code>request-no-cors</code></td>
    </tr>
    <tr>
      <td rowspan="2">{{domxref("Response")}}</td>
      <td>{{domxref("Response.Response","Response()")}}</td>
      <td><code>response</code></td>
    </tr>
    <tr>
      <td>
        Métodos {{domxref("Response.error","error()")}} ou
        {{domxref("Response.redirect","redirect()")}}
      </td>
      <td><code>immutable</code></td>
    </tr>
  </tbody>
</table>

Um cabeçalho guard afeta os métodos {{domxref("Headers.set","set()")}}, {{domxref("Headers.delete","delete()")}}, e {{domxref("Headers.append","append()")}} os quais mudam o conteúdo do cabeçalho. Um`TypeError` é lançado se você tentar modificar um objeto {{domxref("Headers")}} objeto cujo "guard" é `immutable`. De qualquer maneira, a operação vai funcionar se

- guard for um `request` e o _name_ de cabeçalho não for {{Glossary("forbidden header name")}} .
- guard for `request-no-cors` e os _name_/_value_ de cabeçalho for {{Glossary("simple header")}} .
- guard for `response` e o _name_ de cabeçalho não for {{Glossary("forbidden response header name")}} .
