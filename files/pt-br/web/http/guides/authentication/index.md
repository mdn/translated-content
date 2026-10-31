---
title: Autenticação HTTP
slug: Web/HTTP/Guides/Authentication
l10n:
  sourceCommit: 88e4ba556d3a475dc4d60937f7db5178b2a1d54b
---

O HTTP fornece uma estrutura geral para controle de acesso e autenticação.
Esta página é uma introdução à estrutura HTTP de autenticação e mostra como restringir o acesso ao seu servidor usando o esquema HTTP "Basic".

## A estrutura geral de autenticação HTTP

A {{RFC("7235")}} define a estrutura de autenticação HTTP, que pode ser usada por um servidor para fazer um desafio ({{glossary("challenge")}}) a uma requisição do cliente, e por um cliente para fornecer informações de autenticação.

O fluxo de desafio e resposta funciona assim:

1. O servidor responde ao cliente com o status {{HTTPStatus("401")}} (Unauthorized) e fornece informações sobre como se autorizar por meio de um cabeçalho de resposta {{HTTPHeader("WWW-Authenticate")}} contendo pelo menos um desafio.
2. Um cliente que deseja se autenticar no servidor pode então fazer isso incluindo um cabeçalho de requisição {{HTTPHeader("Authorization")}} com as credenciais.
3. Normalmente, o cliente exibe ao usuário uma solicitação de senha e depois envia a requisição incluindo o cabeçalho `Authorization` correto.

![Um diagrama de sequência ilustrando as mensagens HTTP trocadas entre as linhas de vida de um cliente e de um servidor.](https://mdn.github.io/shared-assets/images/diagrams/http/authentication/basic-auth.svg)

O fluxo geral de mensagens acima é o mesmo para a maioria (se não todos) dos [esquemas de autenticação](#esquemas_de_autenticação).
O que muda são as informações contidas nos cabeçalhos e a forma como são codificadas!

> [!WARNING]
> O esquema de autenticação "Basic" usado no diagrama acima envia as credenciais codificadas, mas não criptografadas.
> Isso seria completamente inseguro, a menos que a troca ocorresse por meio de uma conexão segura (HTTPS/TLS).

### Autenticação de proxy

O mesmo mecanismo de desafio e resposta pode ser usado para _autenticação de proxy_.
Como a autenticação de recursos e a autenticação de proxy podem coexistir, é necessário um conjunto diferente de cabeçalhos e códigos de status. No caso de proxies, o código de status do desafio é {{HTTPStatus("407")}} (Proxy Authentication Required), o cabeçalho de resposta {{HTTPHeader("Proxy-Authenticate")}} contém pelo menos um desafio aplicável ao proxy, e o cabeçalho de requisição {{HTTPHeader("Proxy-Authorization")}} é usado para fornecer as credenciais ao servidor proxy.

### Acesso proibido

Se um servidor (proxy) receber credenciais _inválidas_, ele deve responder com {{HTTPStatus("401")}} `Unauthorized` ou {{HTTPStatus("407")}} `Proxy Authentication Required`, e o usuário pode enviar uma nova requisição ou substituir o campo de cabeçalho {{HTTPHeader("Authorization")}}.

Se um servidor (proxy) receber credenciais válidas, mas _insuficientes_ para acessar determinado recurso, o servidor deve responder com o código de status {{HTTPStatus("403")}} `Forbidden`. Diferentemente de {{HTTPStatus("401")}} `Unauthorized` ou {{HTTPStatus("407")}} `Proxy Authentication Required`, a autenticação é impossível para esse usuário e os navegadores não proporão uma nova tentativa.

Em todos os casos, o servidor pode preferir retornar o código de status {{HTTPStatus("404")}} `Not Found`, para ocultar a existência da página de um usuário sem privilégios adequados ou que não esteja corretamente autenticado.

### Autenticação de imagens de origem cruzada

Uma possível falha de segurança (já corrigida nos navegadores) era a autenticação de imagens entre sites (cross-site).
A partir do [Firefox 59](/pt-BR/docs/Mozilla/Firefox/Releases/59), recursos de imagem carregados de origens diferentes da do documento atual não conseguem mais disparar diálogos de autenticação HTTP ([Firefox bug 1423146](https://bugzil.la/1423146)), impedindo que as credenciais do usuário sejam roubadas caso invasores consigam incorporar uma imagem arbitrária em uma página de terceiros.

### Codificação de caracteres da autenticação HTTP

Os navegadores usam a codificação `utf-8` para nomes de usuário e senhas.

O Firefox já usou `ISO-8859-1`, mas mudou para `utf-8` para manter paridade com outros navegadores e evitar possíveis problemas, como descrito no [Firefox bug 1419658](https://bugzil.la/1419658).

### Cabeçalhos WWW-Authenticate e Proxy-Authenticate

Os cabeçalhos de resposta {{HTTPHeader("WWW-Authenticate")}} e {{HTTPHeader("Proxy-Authenticate")}} definem o método de autenticação que deve ser usado para obter acesso a um recurso. Eles precisam especificar qual esquema de autenticação é usado, para que o cliente que deseja se autorizar saiba como fornecer as credenciais.

A sintaxe desses cabeçalhos é a seguinte:

```http
WWW-Authenticate: <type> realm=<realm>
Proxy-Authenticate: <type> realm=<realm>
```

Aqui, `<type>` é o esquema de autenticação ("Basic" é o esquema mais comum e é [apresentado abaixo](#esquema_de_autenticação_basic)). O _realm_ é usado para descrever a área protegida ou indicar o escopo da proteção. Pode ser uma mensagem como "Access to the staging site" (Acesso ao site de homologação) ou algo semelhante, para que o usuário saiba qual espaço está tentando acessar.

### Cabeçalhos Authorization e Proxy-Authorization

Os cabeçalhos de requisição {{HTTPHeader("Authorization")}} e {{HTTPHeader("Proxy-Authorization")}} contêm as credenciais para autenticar um agente de usuário em um servidor (proxy). Aqui, o `<type>` é novamente necessário, seguido pelas credenciais, que podem estar codificadas ou criptografadas dependendo do esquema de autenticação usado.

```http
Authorization: <type> <credentials>
Proxy-Authorization: <type> <credentials>
```

## Esquemas de autenticação

A estrutura geral de autenticação HTTP é a base de diversos esquemas de autenticação.

A IANA mantém uma [lista de esquemas de autenticação](https://www.iana.org/assignments/http-authschemes), mas existem outros esquemas oferecidos por serviços de hospedagem, como a Amazon AWS.

Alguns esquemas de autenticação comuns são:

- **Basic**
  - : Veja a {{rfc(7617)}}, credenciais codificadas em base64. Mais informações abaixo.
- **Bearer**
  - : Veja a {{rfc(6750)}}, tokens bearer (de portador) para acessar recursos protegidos por OAuth 2.0.
- **Digest**
  - : Veja a {{rfc(7616)}}. O Firefox 93 e versões posteriores suportam o algoritmo SHA-256. Versões anteriores suportam apenas hash MD5 (não recomendado).
- **HOBA**
  - : Veja a {{rfc(7486)}}, seção 3, **H**TTP **O**rigin-**B**ound **A**uthentication (autenticação vinculada à origem HTTP), baseada em assinatura digital.
- **Mutual**
  - : Veja a {{rfc(8120)}}.
- **Negotiate** / **NTLM**
  - : Veja a {{rfc(4559)}}.
- **VAPID**
  - : Veja a {{rfc(8292)}}.
- **SCRAM**
  - : Veja a {{rfc(7804)}}.
- **AWS4-HMAC-SHA256**
  - : Veja a [documentação da AWS](https://docs.aws.amazon.com/AmazonS3/latest/developerguide/sigv4-auth-using-authorization-header.html). Esse esquema é usado para autenticação em servidores AWS3.

Os esquemas podem variar quanto ao nível de segurança e à disponibilidade em softwares cliente ou servidor.

O esquema de autenticação "Basic" oferece segurança muito fraca, mas é amplamente suportado e fácil de configurar.
Ele é apresentado com mais detalhes abaixo.

## Esquema de autenticação Basic

O esquema de autenticação HTTP "Basic" é definido na {{rfc(7617)}} e transmite as credenciais como pares de ID de usuário/senha, codificados em base64.

### Segurança da autenticação Basic

Como o ID de usuário e a senha trafegam pela rede como texto puro (são codificados em base64, mas base64 é uma codificação reversível), o esquema de autenticação Basic não é seguro.
HTTPS/TLS deve ser usado junto com a autenticação Basic para impedir a interceptação das credenciais.

Além disso, sites que usam HTTP Basic Auth são especialmente vulneráveis a ataques de [Cross-Site Request Forgery (CSRF)](/pt-BR/docs/Glossary/CSRF), porque as credenciais do usuário são enviadas em todas as requisições, independentemente da origem (isso é diferente dos mecanismos de credenciais baseados em cookies, já que os cookies costumam ser bloqueados em requisições entre sites).
Os sites devem sempre usar requisições POST ao alterar dados e incluir [tokens CSRF](/pt-BR/docs/Web/Security/Attacks/CSRF).

Sem essas melhorias de segurança, a autenticação Basic não deve ser usada para proteger informações sensíveis ou valiosas.

### Restringindo o acesso com Apache e autenticação Basic

Para proteger com senha um diretório em um servidor Apache, você precisará de um arquivo `.htaccess` e de um arquivo `.htpasswd`.

O arquivo `.htaccess` normalmente se parece com isto:

```apacheconf
AuthType Basic
AuthName "Access to the staging site"
AuthUserFile /path/to/.htpasswd
Require valid-user
```

O arquivo `.htaccess` referencia um arquivo `.htpasswd` em que cada linha contém um nome de usuário e uma senha separados por dois-pontos (`:`). Não é possível ver as senhas reais, pois elas estão [em hash](https://httpd.apache.org/docs/2.4/misc/password_encryptions.html) (neste caso, usando hash baseado em MD5). Observe que você pode dar outro nome ao seu arquivo `.htpasswd`, se quiser, mas lembre-se de que esse arquivo não deve ser acessível a ninguém. (O Apache geralmente é configurado para impedir o acesso a arquivos `.ht*`.)

```apacheconf
aladdin:$apr1$ZjTqBB3f$IF9gdYAGlMrs2fuINjHsz.
user2:$apr1$O04r.y2H$/vEkesPhVInBByJUkXitA/
```

### Restringindo o acesso com Nginx e autenticação Basic

No Nginx, você precisará especificar a localização (`location`) que será protegida e a diretiva `auth_basic`, que define o nome da área protegida por senha.
A diretiva `auth_basic_user_file` aponta então para um arquivo `.htpasswd` contendo as credenciais criptografadas dos usuários, assim como no exemplo do Apache acima.

```apacheconf
location /status {
    auth_basic           "Access to the staging site";
    auth_basic_user_file /etc/apache2/.htpasswd;
}
```

### Acesso usando credenciais na URL

Historicamente, alguns sites permitiam fazer login usando uma URL codificada contendo o nome de usuário e a senha, como mostrado abaixo:

```plain example-bad
https://username:password@www.example.com/
```

Essa sintaxe não é mais permitida nos navegadores modernos; o nome de usuário e a senha são removidos da requisição antes de ela ser enviada.

## Veja também

- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Authorization")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
- [Boas práticas de segurança HTTP](/pt-BR/docs/Web/Security)