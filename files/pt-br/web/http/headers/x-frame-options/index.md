---
title: X-Frame-Options
slug: Web/HTTP/Headers/X-Frame-Options
---

{{HTTPSidebar}}

O cabeçalho de resposta [HTTP](/pt-BR/docs/Web/HTTP) **`X-Frame-Options`** pode ser usado para indicar se o navegador deve ou não renderizar a página em um {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} ou {{HTMLElement("object")}}. Sites podem usar isso para evitar ataques _[click-jacking](/pt-BR/docs/Web/Security/Types_of_attacks#Click-jacking)_, assegurando que seus conteúdos não sejam embebedados em outros sites.

A segurança adicionada é provida somente se o usuário acessando o documento está usando o navegador que suporte `X-Frame-Options`.

> **Nota:** O cabeçalho HTTP {{HTTPHeader("Content-Security-Policy")}}possui uma diretiva [`frame-ancestors`](/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors) que torna este cabeçalho obsoleto para navegadores que o suportam.

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

Existem duas diretivas possíveis para `X-Frame-Options`:

```
X-Frame-Options: DENY
X-Frame-Options: SAMEORIGIN
```

### Diretivas

Se você especifica `DENY`, não somente tentativas em carregar a página em um enquadramento irão falhar quando carregadas de outros sites, mas irão falhar também se forem carregadas do mesmo site. Por outro lado, se você especifica `SAMEORIGIN`, você ainda pode usar a página em um enquadramento enquanto o site que o está incluindo no enquadramento seja o mesmo servindo a página.

- `DENY`
  - : A página não pode ser mostrada em um enquadramento, independente do site que esteja tentando fazer isso.
- `SAMEORIGIN`
  - : A página só pode ser exibida em um enquadramento se for da mesma origem da página em si. A especificação deixa a cargo do navegador para decidir se esta opção se aplica ao nível mais alto, ao parente, ou à cadeia inteira, entretanto é discutido se a opção não é muito útil a não ser que todos os ancestrias estejam na mesma origem (veja [Erro do Firefox 725490](https://bugzil.la/725490)). Veja também [Browser compatibility](#browser_compatibility) para mais detalhes de suporte.
- `ALLOW-FROM uri`
  - : Esta é uma diretiva obsoleta que não funciona mais em navegadores modernos. Não a utilize. Em navegadores legado que a suportam, a página pode ser mostrada em um enquadramento somente na URI de origem especificada. Note que implementação legada do Firefox isso ainda sofria do mesmo problema que a `SAMEORIGIN` sofreu — ela não checa se os enquadramentos ancestrais para ver se eles são da mesma origem. O cabeçalho HTTP {{HTTPHeader("Content-Security-Policy")}} tem a diretiva `frame-ancestors` que você pode usar ao invés disso.

## Exemplos

> **Nota:** Colocar X-Frame-Options dentro de um elemento {{HTMLElement("meta")}} é inútil! Por enquanto, `<meta http-equiv="X-Frame-Options" content="deny">` não tem nenhum efeito. Não o utilize! `X-Frame-Options` funciona somente colocando a configuração através do cabeçalho HTTP, como nos exemplos abaixo.

### Configurando o Apache

Para configurar o Apache para que ele envie o cabeçalho `X-Frame-Options` para todas as páginas, adicione isto nas configurações do seu site:

```
Header always set X-Frame-Options "SAMEORIGIN"
```

Para configurar o Apache para colocar o `X-Frame-Options` como DENY, adicione isto nas configurações do seu site:

```
Header set X-Frame-Options "DENY"
```

### Configurando o nginx

Para configurar o nginx para enviar o cabeçalho `X-Frame-Options`, adicione isto na configuração do seu http, servidor ou localização:

```
add_header X-Frame-Options SAMEORIGIN always;
```

### Configurando o IIS

Para configurar o IIS para enviar o cabeçalho `X-Frame-Options`, adicione isto no arquivo `Web.config` do seu site:

```xml
<system.webServer>
  ...

  <httpProtocol>
    <customHeaders>
      <add name="X-Frame-Options" value="SAMEORIGIN" />
    </customHeaders>
  </httpProtocol>

  ...
</system.webServer>
```

Ou veja este [artigo de suporte de configuração da Microsoft utilizando a interface de usuário IIS Manager](https://support.office.com/en-us/article/Mitigating-framesniffing-with-the-X-Frame-Options-header-1911411b-b51e-49fd-9441-e8301dcdcd79).

### Configurando o HAProxy

Para configurar o HAProxy para enviar o cabeçalho `X-Frame-Options`, adicione isto na sua configuração do seu _front-end_, _listen_, ou _backend_:

```
rspadd X-Frame-Options:\ SAMEORIGIN
```

Alternativamente, em versões mais novas:

```
http-response set-header X-Frame-Options SAMEORIGIN
```

### Configurando o Express

Para configurar o Express para enviar o cabeçalho `X-Frame-Options`, você pode usar o [helmet](https://helmetjs.github.io/) que utiliza o [frameguard](https://helmetjs.github.io/docs/frameguard/) para colocar o cabeçalho. Adicione isto na configuração do seu servidor:

```js
const helmet = require("helmet");
const app = express();
app.use(helmet.frameguard({ action: "SAMEORIGIN" }));
```

Alternativamente, você pode usar o _frameguard_ diretamente:

```js
const frameguard = require("frameguard");
app.use(frameguard({ action: "SAMEORIGIN" }));
```

## Especificações

| Especificação   | Título                            |
| --------------- | --------------------------------- |
| {{RFC("7034")}} | HTTP Header Field X-Frame-Options |

## Compatibilidade com navegadores

{{Compat("http.headers.X-Frame-Options")}}

## Veja também

- [`frame-ancestors` (CSP)](/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors)
- [Cabeçalho HTTP X-Frame-Options (HTTP Header Field X-Frame-Options) - RFC 7034](https://tools.ietf.org/html/rfc7034)
- [Defesas contra ClickJacking (ClickJacking Defenses) - IEBlog](https://blogs.msdn.com/b/ie/archive/2009/01/27/ie8-security-part-vii-clickjacking-defenses.aspx)
- [Combatendo ClickJacking com X-Frame-Options (Combating ClickJacking with X-Frame-Options) - IEInternals](https://blogs.msdn.com/b/ieinternals/archive/2010/03/30/combating-clickjacking-with-x-frame-options.aspx)
