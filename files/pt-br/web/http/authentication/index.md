---
title: Autenticação HTTP
slug: Web/HTTP/Authentication
---

{{HTTPSidebar}}

O HTTP fornece uma estrutura geral para controle de acesso e autenticação. A autenticação HTTP mais comum é fundamentada no esquema "Basic". Esta página introduz a estrutura HTTP para autenticação e mostra como restringir acesso ao seu servidor usando o esquema "Basic".

## A estrutura geral de autenticação HTTP

{{RFC("7235")}} define a estrutura de autenticação HTTP que pode ser usada por um servidor para definir uma solicitação ("{{glossary("challenge")}}") do cliente e para um cliente fornecer informações de autenticação. A pergunta e resposta segue um caminho como esse: O servidor responde ao cliente com uma mensagem do tipo {{HTTPStatus("401")}} (Não autorizado) e fornece informações de como autorizar com um cabeçalho de resposta {{HTTPHeader("WWW-Authenticate")}} contendo ao menos uma solicitação. Um cliente que deseja autenticar-se com um servidor pode fazer isso incluindo um campo de cabeçalho de solicitação {{HTTPHeader("WWW-Authenticate")}} com as credenciais. Usualmente um cliente apresentará uma solicitação de senha ao usuário e, em seguida, emitirá uma solicitação incluindo o cabeçalho `Authorization` correto.

![A sequence diagram illustrating HTTP messages between a client and a server lifeline.](httpauth.png)

No caso de uma autorização "Basic" (como a mostrada na figura), a troca **deve** acontecer por meio de uma conexão HTTP (TLS) para ser segura.

### Autenticação de Proxy

O mesmo mecanismo de solicitação e resposta pode ser usado para uma _autenticação de proxy_. Neste caso, é um proxy intermediário que requer autenticação. Como ambas autenticação de recurso e autenticação de proxy podem coexistir, um conjunto diferente de códigos de cabeçalhos e status torna-se necessário. No caso de proxys, o código de status de solicitação é {{HTTPStatus("407")}} (Autenticação de Proxy necessária), o cabeçalho de resposta {{HTTPHeader("Proxy-Authenticate")}} contém ao menos uma solicitação aplicável para o proxy, e o cabeçalho de pedido {{HTTPHeader("Proxy-Authorization")}} é usado para fornecer as credenciais ao servidor proxy.

### Acesso proibido

Se um servidor proxy recebe credenciais válidas, mas que não são adequadas para ter acesso a um determinado recurso, o servidor responderá com o código de status `Forbidden` {{HTTPStatus("403")}}. Ao contrário de {{HTTPStatus("401")}} `Unauthorized` ou {{HTTPStatus("407")}} `Proxy Authentication Required`, a autenticação é impossível para este usuário.

### Autenticação de imagens de origem cruzada

Um potencial buraco de segurança que foi corrigido recentemente pelos navegadores é a autenticação de imagens cross-site (origem cruzada). Do [Firefox 59](/pt-BR/docs/Mozilla/Firefox/Releases/59) em diante, recursos de imagem carregados de diferentes origens não são mais capazes de adicionar diálogos de autenticação HTTP ([Erro do Firefox 1423146](https://bugzil.la/1423146)), impedindo que as credencias do usuário sejam roubadas se invasores conseguissem incorporar uma imagem arbitrária em uma página de terceiros.

### A codificação de caracteres da autenticação HTTP

Os navegadores usam a codificação `utf-8` para nomes de usuários e senhas. Firefox usava `ISO-8859-1`, mas alterou para `utf-8` por questões de compatiblidade com outros navegadores, assim como para evitar os potenciais problemas descritos em [Erro do Firefox 1419658](https://bugzil.la/1419658).

### Cabeçalhos `WWW-Authenticate` e `Proxy-Authenticate`

Os cabeçalhos de resposta {{HTTPHeader("WWW-Authenticate")}} e {{HTTPHeader("Proxy-Authenticate")}} definem o método de autenticação que deve ser usado para ganhar acesso a um recurso. Eles precisam especificar que esquema de autenticação é usado para que o cliente que deseja autorizar saiba como fornecer as credenciais. A sintaxe para esses cabeçalhos é a seguinte:

```
WWW-Authenticate: <type> realm=<realm>
Proxy-Authenticate: <type> realm=<realm>
```

`<type>` é o esquema de autenticação ("Basic" é o esquema mais comum e será introduzido abaixo). O _realm_ é usado para indicar a área protegida ou o escopo de proteção. Poderia ser uma mensagem parecida com "Access to the staging site" (Acesso ao site de teste), portanto o usuário saberá qual área ele está tentando acessar.

### Cabeçalhos `Authorization` e `Proxy-Authorization`

Os cabeçalhos de solicitação {{HTTPHeader("Authorization")}} e {{HTTPHeader("Proxy-Authorization")}} contém as credenciais para autenticar um agente de usuário com um servidor proxy. Aqui o tipo é novamente necessário, seguido pelas credenciais, que podem ser codificadas ou criptografadas dependendo do esquema de autenticação usado.

```
Authorization: <type> <credentials>
Proxy-Authorization: <type> <credentials>
```

### Esquemas de autenticação

A estrutura geral de autenticação HTTP é usado por vários esquemas de autenticação. Os esquemas podem divergir na força da segurança e na disponibilidade do software cliente ou servidor.

O esquema mais comum de autenticação é o "Basic", que é introduzido com mais detalhes abaixo. IANA mantém uma [lista de esquemas de autenticação](https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml), mas existem outros esquemas oferecidos por serviços de hospedagem, como Amazon AWS. Os esquemas de autenticação comuns incluem:

- **Basic** (veja {{rfc(7617)}}, credenciais codificadas em base64. Veja abaixo mais informações.),
- **Bearer** (veja {{rfc(6750)}}, tokens bearer (de portador) para acessar recursos protegidos por OAuth 2.0),
- **Digest** (veja {{rfc(7616)}}, apenas hash md5 é suportado no Firefox, veja [Erro do Firefox 472823](https://bugzil.la/472823) para o suporte de encriptação SHA),
- **HOBA** (veja {{rfc(7486)}} (esboço), **H**TTP **O**rigin-**B**ound **A**uthentication (Autenticação Vinculada à Origem HTTP), baseado em assinatura digital),
- **Mutual** (veja [draft-ietf-httpauth-mutual](https://tools.ietf.org/html/draft-ietf-httpauth-mutual-11)),
- **AWS4-HMAC-SHA256** (veja [Documentação AWS](http://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-auth-using-authorization-header.html)).

## Esquema Basic de autenticação

O esquema "Basic" de autenticação HTTP é definido em {{rfc(7617)}}, transmitindo credenciais como pares de ID/senhas de usuários, codificadas usando base64.

### Segurança da autenticação básica

Como o ID e senha do usuário são transmitidos através da rede como texto claro (é codificado em base64, mas base64 é uma codificação reversível), o esquema básico de autenticação não é seguro. HTTPS / TLS devem ser usados em conjunto com autenticação básica. Sem esses aprimoramentos de segurança adicionais, a autenticação básica não deve ser usada para proteger informação sensível ou valiosa.

### Restringindo acesso no Apache e autorização básica

Para proteger com senha um diretório em um servidor Apache, você precisará de um arquivo `.htaccess` e um `.htpasswd`.

O arquivo `.htaccess` normalmente parece com isso:

```
AuthType Basic
AuthName "Access to the staging site"
AuthUserFile /path/to/.htpasswd
Require valid-user
```

O arquivo `.htaccess` referencia um arquivo `.htpasswd` em que cada linha contém um nome de usuário e senha separados por dois pontos (":"). Você não pode ver as senhas reais porque foram [criptografadas](https://httpd.apache.org/docs/2.4/misc/password_encryptions.html) (em md5, neste caso). Note que você pode renomear seu arquivo `.htpasswd` caso queira, mas tenha em mente que este arquivo não deve ser acessado por ninguém. (Apache normalmente é configurado para previnir acesso aos arquivos `.ht*`).

```
aladdin:$apr1$ZjTqBB3f$IF9gdYAGlMrs2fuINjHsz.
user2:$apr1$O04r.y2H$/vEkesPhVInBByJUkXitA/
```

### Restringindo acesso no nginx e autenticação básica

No nginx, você precisará especificar uma área que que você protegerá e a diretiva `auth_basic` que fornece o nome para a área protegida por senha. A diretiva `auth_basic_user_file` aponta para um arquivo .htpasswd contentdo as credenciais do usuário criptografadas, assim como no exemplo Apache acima.

```
location /status {
    auth_basic           "Access to the staging site";
    auth_basic_user_file /etc/apache2/.htpasswd;
}
```

### Acesso usando as credenciais na URL

Vários clientes também permitem que você evite o prompt de login usando uma URL codificada contendo o nome de usuário e senha como esta:

```plain example-bad
https://username:password@www.example.com/
```

**O uso destas URLs está obsoleto**. No Chrome, a parte `username:password@` nas URLs é [retirada](https://bugs.chromium.org/p/chromium/issues/detail?id=82250#c7) por razões de segurança. No Firefox, é verificado se o site realmente Airequer autenticação e, se não, Firefox alertará o usuário com uma mensagem "Você está prestes a logar no site "www\.example.com" com seu nome de usuário "username", mas o website não requer autenticação. Isso pode ser uma tentativa de enganá-lo".

## Veja também

- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Authorization")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
