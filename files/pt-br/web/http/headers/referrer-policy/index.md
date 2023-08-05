---
title: Referrer-Policy
slug: Web/HTTP/Headers/Referrer-Policy
---

{{HTTPSidebar}}

O cabeçalho HTTP **`Referrer-Policy`** controla quanta [informação de referência](/pt-BR/docs/Web/Security/Referer_header:_privacy_and_security_concerns) (enviado pelo cabeçalho {{HTTPHeader("Referer")}}) deve ser incluída nas requisições.

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

> **Nota:** O nome original do cabeçalho {{HTTPHeader("Referer")}} é um erro ortográfico da palavra "referrer". O cabeçalho `Referrer-Policy` não compartilha do mesmo erro ortográfico.

```
Referrer-Policy: no-referrer
Referrer-Policy: no-referrer-when-downgrade
Referrer-Policy: origin
Referrer-Policy: origin-when-cross-origin
Referrer-Policy: same-origin
Referrer-Policy: strict-origin
Referrer-Policy: strict-origin-when-cross-origin
Referrer-Policy: unsafe-url
```

## Diretivas

- `no-referrer`
  - : O cabeçalho {{HTTPHeader("Referer")}} será omitido completamente. Nenhuma informação de referência será enviada junto com as requisições.
- `no-referrer-when-downgrade` (padrão)

  - : Este é o comportamento padrão quando nenhuma política é especificada, ou se o valor provido é inválido. A origem, caminho e cadeia de consulta ({{glossary("origin")}}, {{glossary("path")}}, and {{glossary("querystring")}}) da URL são enviadas como referência quando os níveis de protocolo de segurança continuam os mesmos (HTTP→HTTP, HTTPS→HTTPS) ou melhora (HTTP→HTTPS), mas não é enviado para destinos menos seguros (HTTPS→HTTP).

    > **Nota:** Existe um esforço dos navegadores em mover para um valor padrão mais estrito, chamado de `strict-origin-when-cross-origin` (veja <https://github.com/whatwg/fetch/pull/952>), considere usar este valor (ou um mais estrito), se possível, quando trocando a Referrer-Policy.

- `origin`
  - : Somente envia a origem ({{glossary("origin")}}) do documento como referência.
    Por exemplo, um documento em `https://example.com/page.html` irá mandar a referência `https://example.com/`.
- `origin-when-cross-origin`
  - : Envia a origem, caminho e cadeia de consulta quando performando uma requisição {{glossary("Same-origin_policy", "same-origin")}}, mas somente envia a origem do documento em outros casos.
- `same-origin`
  - : A referência será enviada para [origens do mesmo site](/pt-BR/docs/Web/Security/Same-origin_policy), mas requisições entre origens não enviarão informação de referência.
- `strict-origin`
  - : Envia somente a origem do documento como referência quando o nível de protocolo de segurança se mantém o mesmo (HTTPS→HTTPS), mas não o envia para um destinatário menos seguro (HTTPS→HTTP).
- `strict-origin-when-cross-origin`
  - : Envia a origem, caminho e cadeia de consulta quando performando uma requisição de mesma origem, somente envia a origem quando o nível do protocolo de segurança se mantém o mesmo durante uma requisição entre origens (HTTPS→HTTPS), e envia nenhum cabeçalho para destinatários menos seguros (HTTPS→HTTP).
- `unsafe-url`

  - : Envia a origem, o caminho e a cadeia de consulta quando performando qualquer requisição, independente da segurança.

    > **Aviso:** Esta política irá vazar informações potencialmente privadas da URL HTTPS do recurso para origens inseguras. Considere o impacto desta configuração com cuidado.

## Integração com HTML

Você também pode colocar política de referência dentro do HTML. Por exemplo, você pode colocar uma política de referência para o documento inteiro com um elemento {{HTMLElement("meta")}} com um [nome](/pt-BR/docs/Web/HTML/Element/meta#attr-name) de `referrer`:

```html
<meta name="referrer" content="origin" />
```

Ou colocar ele para requisições individuais com o atributo `referrerpolicy` nos elementos {{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("img")}}, {{HTMLElement("iframe")}}, {{HTMLElement("script")}}, or {{HTMLElement("link")}}:

```html
<a href="http://example.com" referrerpolicy="origin"></a>
```

Alternativamente, uma [relação de link](/pt-BR/docs/Web/HTML/Link_types) `noreferrer` em um elemento `a`, `area`, ou `link` pode ser colocada:

```html
<a href="http://example.com" rel="noreferrer"></a>
```

## Integração com CSS

CSS pode buscar recursos referênciados de suas folhas de estilo. Estes recursos seguem a política de referência também como:

- Folhas de estilo CSS externas usam a política padrão (`no-referrer-when-downgrade`), a não ser que seja sobrescrita por um cabeçalho HTTP `Referrer-Policy` na resposta da folha de estilo CSS.
- Para elementos {{HTMLElement("style")}} ou [atributos `style`](/pt-BR/docs/Web/API/HTMLElement/style), a política de referência do dono do documento é utilizada.

## Exemplos

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Política</th>
      <th scope="col">Documento</th>
      <th scope="col">Navegar para</th>
      <th scope="col">Referência</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th><code>no-referrer</code></th>
      <td>https://example.com/page</td>
      <td><em>qualquer lugar</em></td>
      <td><em>(sem referência)</em></td>
    </tr>
    <tr>
      <th rowspan="3"><code>no-referrer-when-downgrade</code></th>
      <td rowspan="3">https://example.com/page</td>
      <td>https://example.com/otherpage</td>
      <td>https://example.com/page</td>
    </tr>
    <tr>
      <td>https://mozilla.org</td>
      <td>https://example.com/page</td>
    </tr>
    <tr>
      <td><strong>http</strong>://example.org</td>
      <td><em>(sem referência)</em></td>
    </tr>
    <tr>
      <th><code>origin</code></th>
      <td>https://example.com/page</td>
      <td><em>qualquer lugar</em></td>
      <td>https://example.com/</td>
    </tr>
    <tr>
      <th rowspan="3"><code>origin-when-cross-origin</code></th>
      <td rowspan="3">https://example.com/page</td>
      <td>https://example.com/otherpage</td>
      <td>https://example.com/page</td>
    </tr>
    <tr>
      <td>https://mozilla.org</td>
      <td>https://example.com/</td>
    </tr>
    <tr>
      <td><strong>http</strong>://example.com/page</td>
      <td>https://example.com/</td>
    </tr>
    <tr>
      <th rowspan="2"><code>same-origin</code></th>
      <td rowspan="2">https://example.com/page</td>
      <td>https://example.com/otherpage</td>
      <td>https://example.com/page</td>
    </tr>
    <tr>
      <td>https://mozilla.org</td>
      <td><em>(sem referência)</em></td>
    </tr>
    <tr>
      <th rowspan="3"><code>strict-origin</code></th>
      <td rowspan="2">https://example.com/page</td>
      <td>https://mozilla.org</td>
      <td>https://example.com/</td>
    </tr>
    <tr>
      <td><strong>http</strong>://example.org</td>
      <td><em>(sem referência)</em></td>
    </tr>
    <tr>
      <td><strong>http</strong>://example.com/page</td>
      <td><em>qualquer lugar</em></td>
      <td>http://example.com/</td>
    </tr>
    <tr>
      <th rowspan="3"><code>strict-origin-when-cross-origin</code></th>
      <td rowspan="3">https://example.com/page</td>
      <td>https://example.com/otherpage</td>
      <td>https://example.com/page</td>
    </tr>
    <tr>
      <td>https://mozilla.org</td>
      <td>https://example.com/</td>
    </tr>
    <tr>
      <td><strong>http</strong>://example.org</td>
      <td><em>(sem referência)</em></td>
    </tr>
    <tr>
      <th><code>unsafe-url</code></th>
      <td>https://example.com/page?q=123</td>
      <td><em>qualquer lugar</em></td>
      <td>https://example.com/page?q=123</td>
    </tr>
  </tbody>
</table>

### Especificando uma política de recuo (_fallback)_

Se você quer especificar uma política de recuo em qualquer caso que a política desejada não tenha um grande suporte do navegador, use uma lista separada por vírgulas com a política desejada especificada por último:

```
Referrer-Policy: no-referrer, strict-origin-when-cross-origin
```

No cenário acima, `no-referrer` só será usada se `strict-origin-when-cross-origin` não for suportada pelo navegador.

> **Nota:** Especificar múltiplos valores só é suportado no cabeçalho HTTP `Referrer-Policy`, e não no atributo `referrerpolicy`.

## Especificações

| Especificação                                                                              | Status             |
| ------------------------------------------------------------------------------------------ | ------------------ |
| [Referrer Policy](https://w3c.github.io/webappsec-referrer-policy/#referrer-policy-header) | Rascunho do editor |

## Compatibilidade com navegadores

{{Compat("http.headers.Referrer-Policy")}}

> **Nota:** - Da versão 53 em diante, Gecko possui uma preferência disponível em `about:config` para permitir usuários colocarem a `Referrer-Policy` padrão — `network.http.referer.userControlPolicy`.
>
> - Da versão 59 em diante (veja [#587523](https://bugzilla.mozilla.org/show_bug.cgi?id=587523)), isso foi substituído por `network.http.referer.defaultPolicy` e `network.http.referer.defaultPolicy.pbmode`.Valores possíveis são:- 0 — `no-referrer`
> - 1 — `same-origin`
> - 2 — `strict-origin-when-cross-origin`
> - 3 — `no-referrer-when-downgrade` (o padrão)

## Veja também

- [HTTP referer on Wikipedia](https://pt.wikipedia.org/wiki/HTTP_referer)
- Quando usando [Fetch](/pt-BR/docs/Web/API/Fetch_API): {{domxref("Request.referrerPolicy")}}
- A obsoleta diretiva {{HTTPHeader("Content-Security-Policy")}} {{HTTPHeader("Content-Security-Policy/referrer", "referrer")}}.
- [Política de mesma origem (_Same-origin policy_)](/pt-BR/docs/Web/Security/Same-origin_policy)
- [Tighter Control Over Your Referrers – Mozilla Security Blog](https://blog.mozilla.org/security/2015/01/21/meta-referrer/)
