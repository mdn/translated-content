---
title: Content-Security-Policy
slug: Web/HTTP/Headers/Content-Security-Policy
---

{{HTTPSidebar}}

O cabeçalho de resposta HTTP **`Content-Security-Policy`** permite aos administradores do site, ter controle sobre os recursos que o agente de usuário é permitido carregar para uma certa página. Com algumas pequenas exceções, políticas majoritariamente envolvem especificar as origens do servidor e pontos de acessos dos _scripts_. Isso ajuda contra ataques de _scripting_ entre sites ({{Glossary("XSS")}}).

Para mais informações, veja o artigo introdutório em [Política de Segurança de Conteúdo (_Content Security Policy_)(CSP)](/pt-BR/docs/Web/HTTP/CSP).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo de cabeçalho</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>não</td>
    </tr>
  </tbody>
</table>

## Sintaxe

```
Content-Security-Policy: <policy-directive>; <policy-directive>
```

## Diretivas

### {{Glossary("Fetch directive", "Fetch directives")}}

Diretivas de busca (_Fetch directives_) controlam as localizações dos quais certos tipos de recursos podem ser carregados.

#### Lista de Diretivas de busca de Política de Segurança de Conteúdo (CSP)

- {{CSP("child-src")}}

  - : Define uma origem válida para [web workers](/pt-BR/docs/Web/API/Web_Workers_API) e contextos aninhados de navegação carregados usando elementos como {{HTMLElement("frame")}} e {{HTMLElement("iframe")}}.

    > **Aviso:** Ao invés de **`child-src`**, os autores que querem regular contextos de navegação aninhadas e trabalhores devem usar as diretivas {{CSP("frame-src")}} e {{CSP("worker-src")}}, respectivamente.

- {{CSP("connect-src")}}
  - : Restringe a URL que pode ser carregada usando interfaces de script.
- {{CSP("default-src")}}
  - : Funciona como recuo para a outra {{Glossary("Fetch directive", "fetch directives")}}.
- {{CSP("font-src")}}
  - : Especifica origens válidas para as fontes de letras carregadas usando {{cssxref("@font-face")}}.
- {{CSP("frame-src")}}
  - : Especifica origens válidas para carregamento de contextos de navegação aninhados usando elementos como {{HTMLElement("frame")}} e {{HTMLElement("iframe")}}.
- {{CSP("img-src")}}
  - : Especifica origens válidas para imagens e ícones.
- {{CSP("manifest-src")}}
  - : Especifica origens válidas dos arquivos de manifesto da aplicação.
- {{CSP("media-src")}}
  - : Especifica origens válidas para carregar dados de media usando os elementos {{HTMLElement("audio")}} , {{HTMLElement("video")}} e {{HTMLElement("track")}}.
- {{CSP("object-src")}}

  - : Especifica origens válidas para os elementos {{HTMLElement("object")}}, {{HTMLElement("embed")}}, e {{HTMLElement("applet")}}.

    > **Nota:** Elementos controlados por `object-src` sejam talvez considerados elementos HTML legados e não estão recebendo novas funcionalidades padrão (como os atributos de segurança `sandbox` ou `allow` para `<iframe>`). Sendo assim é **recomendado** restringir o uso desta diretiva (e.g. colocar explicitamente `object-src 'none'` se possível).

- {{CSP("prefetch-src")}}{{experimental_inline}}
  - : Especifica origens válidas para serem pré-carregadas ou pré-renderizadas.
- {{CSP("script-src")}}
  - : Especifica origens válidas para JavaScript.
- {{CSP("script-src-elem")}}{{experimental_inline}}
  - : Especifica origens válidas para elementos JavaScript {{HTMLElement("script")}}.
- {{CSP("script-src-attr")}}{{experimental_inline}}
  - : Especifica origens válidas para _handlers_ de eventos JavaScript _inline_.
- {{CSP("style-src")}}
  - : Especifica origens válidas para arquivos de estilo.
- {{CSP("style-src-elem")}}{{experimental_inline}}
  - : Especifica origens válidas para elementos de estilo {{HTMLElement("style")}} e elementos {{HTMLElement("link")}} com `rel="stylesheet"`.
- {{CSP("style-src-attr")}}{{experimental_inline}}
  - : Especifica origens válidas para estilos dentro de linha aplicados a elementos DOM individuais.
- {{CSP("worker-src")}}{{experimental_inline}}
  - : Especifica origens válidas para scripts {{domxref("Worker")}}, {{domxref("SharedWorker")}}, ou {{domxref("ServiceWorker")}}.

### {{Glossary("Document directive", "Document directives")}}

As diretivas de Documento governam as propriedades de um documento ou ambiente [worker (trabalhador)](/pt-BR/docs/Web/API/Web_Workers_API) para qual a política se aplica.

#### Lista de diretivas de Documento da Política de Segurança de Conteúdo

- {{CSP("base-uri")}}
  - : Restringe as URLs que podem ser usadas em um elemento {{HTMLElement("base")}} do documento.
- {{CSP("plugin-types")}}
  - : Restringe o conjunto de _plugins_ que podem ser embutidos em um documento limitando pelos tipos de conteúdos que podem ser carregados.
- {{CSP("sandbox")}}
  - : Habilita o _sandbox_ para um recurso requisitado similar ao atributo [`sandbox`](/pt-BR/docs/Web/HTML/Element/iframe#sandbox) de {{HTMLElement("iframe")}}.

### {{Glossary("Navigation directive", "Navigation directives")}}

Diretivas de Navegação governam para qual localização um usuário pode navegar ou submeter um formulário para, por exemplo.

#### Lista de diretivas de Navegação da Política de Segurança de Conteúdo

- {{CSP("form-action")}}
  - : Restringe as URLs que podem ser usadas como alvo para as submissões de um formulário para um dado contexto.
- {{CSP("frame-ancestors")}}
  - : Especifica pais válidos que podem embutir uma página usando {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("object")}}, {{HTMLElement("embed")}}, ou {{HTMLElement("applet")}}.
- {{CSP("navigate-to")}}{{experimental_inline}}
  - : Restringe as URLs para qual um documento pode iniciar navegação quaisquer sejam os motivos, incluindo {{HTMLElement("form")}} (se {{CSP("form-action")}} não for especificado), {{HTMLElement("a")}}, {{DOMxRef("window.location")}}, {{DOMxRef("window.open")}}, etc.

### {{Glossary("Reporting directive", "Reporting directives")}}

Diretivas de Relatório controlam o processo de reportar as violações CSP. Veja também o cabeçalho {{HTTPHeader("Content-Security-Policy-Report-Only")}}.

#### Lista de Diretivas de Relatório da Política de Segurança de Conteúdo

- {{CSP("report-uri")}}{{deprecated_inline}}

  - : Instrui ao agente de usuário para reportar tentativas de violaçnao de Política de Segurança de Conteúdo. Esses relatórios de violação consistem de documentos {{Glossary("JSON")}} enviados por requisição HTTP `POST` para uma URI especificada.

    > **Aviso:** Apesar da diretiva {{CSP("report-to")}} tem a inteção de trocar a diretiva depreciada **`report-uri`**, {{CSP("report-to")}} não é suportado na maioria dos navegadores ainda. Então para compatibilidade com os navegadores atuais enquanto adiciona a compatibilidade com {{CSP("report-to")}}, você pode especificar ambos **`report-uri`** e {{CSP("report-to")}}:
    >
    > ```
    > Content-Security-Policy: ...; report-uri https://endpoint.example.com; report-to groupname
    > ```
    >
    > Em navegadores que suportam {{CSP("report-to")}}, a diretiva **`report-uri`** será ignorada.

- {{CSP("report-to")}}{{experimental_inline}}
  - : Dispara um `SecurityPolicyViolationEvent`.

### Outras diretivas

- {{CSP("block-all-mixed-content")}}
  - : Previne carregamento de quaisquer recursos usando HTTP quando a página é carregada usando HTTPS.
- {{CSP("referrer")}}{{deprecated_inline}}{{non-standard_inline}}
  - : Era usado para especificar informação no cabeçalho de referência (sic) para links fora da página. Ao invés disso, use o cabeçalho {{HTTPHeader("Referrer-Policy")}}.
- {{CSP("require-sri-for")}}{{experimental_inline}}
  - : Obriga o uso de {{Glossary("SRI")}} para _scripts_ ou estilos na página.
- {{CSP("require-trusted-types-for")}}{{experimental_inline}}
  - : Impõe [Trusted Types](https://w3c.github.io/webappsec-trusted-types/dist/spec/) (Tipos confiáveis) em coletores de eventos (vide: [Sink (Computing)](<https://en.wikipedia.org/wiki/Sink_(computing)>)) para evitar injeção de DOM XSS.
- {{CSP("trusted-types")}}{{experimental_inline}}
  - : Usado para especificar uma lista branca de políticas [Trusted Types](https://w3c.github.io/webappsec-trusted-types/dist/spec/) (Tipos confiáveis) (Tipos confiáveis permitem aplicações travarem injeções DOM XSS em coletores de eventos (_sinks_) para aceitarem somente valores tipados não falsificáveis no lugar de _strings_.
- {{CSP("upgrade-insecure-requests")}}
  - : Instrui o usuário de agente a tratar todas as URLs inseguras de um site (aquelas servidas através do HTTP) a serem trocadas por URLs seguras (aqueles servidas através de HTTPS). Essa diretiva tem como foco sites com grande número de URLs inseguras e legadas que precisam ser reescritas.

## CSP em workers(trabalhadores)

[Workers (trabalhadores)](/pt-BR/docs/Web/API/Worker) em geral não são governados pela política de segurança de conteúdo do documento (ou trabalhador pai) que os criou. Para especificar uma política de segurança de conteúdo para um trabalhador, coloque um cabeçalho de resposta `Content-Security-Policy` para a requisição que pediu o _script_ do trabalhador em si.

A exceção à isso é se o _script_ original do trabalhador é um identificador único global (por exemplo, se a URL tem um esquema de dados ou _blob_). Neste caso, o trabalhador herda a política de segurança de conteúdo do documento ou trabalhador que o criou.

## Múltiplas políticas de segurança de conteúdo

CSP permite múltiplas políticas sendo especificadas para um recurso, através dos cabeçalhos `Content-Security-Policy`, {{HTTPHeader("Content-Security-Policy-Report-Only")}} e do elemento {{HTMLElement("meta")}}.

Você pode usar o cabeçalho `Content-Security-Policy` mais de uma vez como no exemplo abaixo. Preste atenção a diretiva {{CSP("connect-src")}} aqui. Mesmo que a segunda política permitiria a conexão, a primeira política contém `connect-src 'none'`. Adicionando políticas adicionais _podem somente restringir_ as capacidades do recurso protegido, o que significa que não haverá conexão permitida e, como política mais restrita, `connect-src 'none'` é imposto.

```
Content-Security-Policy: default-src 'self' http://example.com;
                         connect-src 'none';
Content-Security-Policy: connect-src http://example.com/;
                         script-src http://example.com/
```

## Exemplos

Exemplo: Desabilitar _inline/eval_ inseguros, permitindo somente carregamento de conteúdos (imagens, fontes de letras, scripts, etc.) através do HTTPS:

```
// cabeçalho
Content-Security-Policy: default-src https:

// meta tag
<meta http-equiv="Content-Security-Policy" content="default-src https:">
```

Exemplo: Site pré-existente que usa muito código dentro de linha para corrigir mas quer assegurar que os recursos são carregador somente através de HTTPS e desabilita plugins:

```
Content-Security-Policy: default-src https: 'unsafe-eval' 'unsafe-inline'; object-src 'none'
```

Exemplo: Não implemente a política acima ainda, ao invés disso, somente reporte as violações que podem ter ocorrido:

```
Content-Security-Policy-Report-Only: default-src https:; report-uri /csp-violation-report-endpoint/
```

Veja as [Mozilla Web Security Guidelines](https://infosec.mozilla.org/guidelines/web_security#Examples_5) para mais exemplos.

## Especificações

| Especificação                             | Status                                 | Comentários                                                                                                                                                  |
| ----------------------------------------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| {{specName("CSP 3.0")}}                   | {{Spec2("CSP 3.0")}}                   | Adiciona `manifest-src`, `navigate-to`, `report-to`, `strict-dynamic`, `worker-src`. Desdeprecia `frame-src`. Deprecia `report-uri` em favor de `report-to`. |
| {{specName("Mixed Content")}}             | {{Spec2("Mixed Content")}}             | Adiciona `block-all-mixed-content`.                                                                                                                          |
| {{specName("Subresource Integrity")}}     | {{Spec2("Subresource Integrity")}}     | Adiciona `require-sri-for`.                                                                                                                                  |
| {{specName("Upgrade Insecure Requests")}} | {{Spec2("Upgrade Insecure Requests")}} | Adiciona `upgrade-insecure-requests`.                                                                                                                        |
| {{specName("CSP 1.1")}}                   | {{Spec2("CSP 1.1")}}                   | Adiciona `base-uri`, `child-src`, `form-action`, `frame-ancestors`, `plugin-types`, `referrer`, and `report-uri`. Deprecia `frame-src`.                      |
| {{specName("CSP 1.0")}}                   | {{Spec2("CSP 1.0")}}                   | Define `connect-src`, `default-src`, `font-src`, `frame-src`, `img-src`, `media-src`, `object-src`, `report-uri`, `sandbox`, `script-src`, e `style-src`.    |

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
- [Aprenda sobre: Content Security Policy](/pt-BR/docs/Web/HTTP/CSP)
- [Segurança de Conteúdo em Extensões Web](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)
- [Adotando uma política estrita](https://csp.withgoogle.com/docs/strict-csp.html)
- [Avaliador CSP](https://csp-evaluator.withgoogle.com/) - Avalie sua Política de Segurança de Conteúdo
