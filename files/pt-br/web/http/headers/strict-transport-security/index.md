---
title: Strict-Transport-Security
slug: Web/HTTP/Headers/Strict-Transport-Security
---

{{HTTPSidebar}}

O cabeçalho de resposta **HTTP `Strict-Transport-Security`** (geralmente abreviado como {{Glossary("HSTS")}}) permite que um site informe aos navegadores que ele deve ser acessado apenas por HTTPS, em vez de usar HTTP.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo de Cabeçalho</th>
      <td>{{Glossary("Cabeçalho de Resposta")}}</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Nome do cabeçalho proibido")}}
      </th>
      <td>não</td>
    </tr>
  </tbody>
</table>

## Sintaxe

```
Strict-Transport-Security: max-age=<expire-time>
Strict-Transport-Security: max-age=<expire-time>; includeSubDomains
Strict-Transport-Security: max-age=<expire-time>; preload
```

## Diretivas

- `max-age=<expire-time>`
  - : O tempo, em segundos, que o navegador deve lembrar que um site só pode ser acessado usando HTTPS.
- `includeSubDomains` {{optional_inline}}
  - : Se este parâmetro opcional for especificado, esta regra também será aplicada a todos os subdomínios do site.
- `preload` {{optional_inline}}
  - : Consulte [Preloading Strict Transport Security](#preloading_strict_transport_security) para detalhes. Não faz parte da especificação.

## Descrição

Se um site aceitar uma conexão por meio de HTTP e redirecionar para HTTPS, os visitantes poderão se comunicar inicialmente com a versão não criptografada do site antes de serem redirecionados, se, por exemplo, o visitante digitar `http://www.foo.com/` ou até mesmo apenas foo.com Isso cria uma oportunidade para um ataque man-in-the-middle. O redirecionamento pode ser explorado para direcionar os visitantes a um site mal-intencionado em vez da versão segura do site original.

O cabeçalho HTTP Strict Transport Security informa ao navegador que ele nunca deve carregar um site usando HTTP e deve converter automaticamente todas as tentativas de acessar o site usando HTTP para solicitações HTTPS.

> **Nota:** O cabeçalho `Strict-Transport-Security` é **ignorado** pelo navegador quando seu site é acessado usando HTTP; isso ocorre porque um invasor pode interceptar conexões HTTP e injetar o cabeçalho ou removê-lo. Quando seu site é acessado por HTTPS sem erros de certificado, o navegador sabe que seu site é capaz de HTTPS e honrará o `Strict-Transport-Security`cabeçalho.

### Um cenário de exemplo

Você faz login em um ponto de acesso Wi-Fi gratuito em um aeroporto e começa a navegar na Web, visitando seu serviço bancário on-line para verificar seu saldo e pagar algumas contas. Infelizmente, o ponto de acesso que você está usando é, na verdade, o laptop de um hacker, e ele está interceptando sua solicitação HTTP original e redirecionando você para um clone do site do seu banco, em vez do real. Agora seus dados privados são expostos ao hacker.

Segurança de Transporte Estrito (Strict Transport Security) resolve esse problema; desde que você tenha acessado o site do seu banco uma vez usando HTTPS, e o site do banco use o Strict Transport Security, seu navegador saberá usar automaticamente apenas HTTPS, o que impede que os hackers realizem um ataque man-in-the-middle.

### Como o navegador lida com isso

Na primeira vez em que seu site é acessado usando HTTPS e retorna o cabeçalho `Strict-Transport-Security`, o navegador registra essas informações, para que futuras tentativas de carregar o site usando HTTP usem o HTTPS automaticamente.

Quando o tempo de expiração especificado pelo cabeçalho Strict-Transport-Security expirar, a próxima tentativa de carregar o site via HTTP prosseguirá normalmente, em vez de usar automaticamente o HTTPS.

Sempre que o cabeçalho Strict-Transport-Security for entregue ao navegador, ele atualizará o tempo de expiração desse site, para que os sites possam atualizar essas informações e impedir que o tempo limite expire. Caso seja necessário desativar a Segurança de Transporte Restrita, a configuração da duração máxima para 0 (através de uma conexão https) expirará imediatamente o cabeçalho `Strict-Transport-Security`, permitindo o acesso via http.

## Pré-Carregamento - Strict Transport Security

O Google mantém [um serviço de pré-carregamento de HSTS](https://hstspreload.appspot.com/). Ao seguir as diretrizes e enviar seu domínio com sucesso, os navegadores nunca se conectarão ao seu domínio usando uma conexão insegura. Enquanto o serviço é hospedado pelo Google, todos os navegadores declararam a intenção de usar (ou de fato começaram a usar) a lista de pré-carregamento. No entanto, não faz parte da especificação da HSTS e não deve ser tratada como oficial.

- Informações sobre a lista de pré-carregamento de HSTS no Chrome: <https://www.chromium.org/hsts>
- Consulta da lista de pré-carregamento do Firefox HSTS: [nsSTSPreloadList.inc](https://dxr.mozilla.org/comm-central/source/mozilla/security/manager/ssl/nsSTSPreloadList.inc)

## Exemplos

Todos os subdomínios presentes e futuros serão HTTPS para uma idade máxima de 1 ano. Isso bloqueia o acesso a páginas ou subdomínios que só podem ser veiculados por HTTP.

```
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

## Especificações

| Especificação        | Status            | Comentário         |
| -------------------- | ----------------- | ------------------ |
| {{SpecName('HSTS')}} | {{Spec2('HSTS')}} | Initial definition |

## Compatibilidade com navegadores

{{Compat("http.headers.Strict-Transport-Security")}}

## Veja também

- Postagem no blog: [HTTP Strict Transport Security has landed!](http://blog.sidstamm.com/2010/08/http-strict-transport-security-has.html)
- Postagem no blog: [HTTP Strict Transport Security (force HTTPS)](http://hacks.mozilla.org/2010/08/firefox-4-http-strict-transport-security-force-https/)
- Artigo OWASP: [HTTP Strict Transport Security](https://www.owasp.org/index.php/HTTP_Strict_Transport_Security)
- Wikipedia: [HTTP Strict Transport Security](http://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security)
