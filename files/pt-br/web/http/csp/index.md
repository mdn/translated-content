---
title: Utilizando Políticas de Segurança de Conteúdo
slug: Web/HTTP/CSP
---

**Content Security Policy** (Política de Segurança de Conteúdo, também conhecida como {{Glossary("CSP")}}) é uma camada adicional de segurança que facilita a detecção e mitigação de certos tipos de ataques, incluindo Cross Site Scripting ({{Glossary("XSS")}}) e ataques de injeção de dados. Esses ataques são utilizados para diversos fins, e eles vão desde roubo de dados até desfiguração do site para distribuição de malware.

O CSP foi projetado para ser totalmente compatível retroatívelmente (come exceção da versão 2 do CSP onde existem algumas inconsistências explicitamente mencionadas com compatibilidade retroativa; mais detalhes podem ser encontrados [aqui](https://www.w3.org/TR/CSP2) na seção 1.1). Os navegadores que não possuem suporte para o CSP ainda irão funcionar com servidores que o implementarem, e vice-versa: navegadores que não fornecem suporte podem simplesmente ignora-lo, funcionando normalmente, utilizando a norma padrão de [same-origin policy](/pt-BR/docs/Web/Security/Same-origin_policy) (política de mesma origem) para conteúdo web. Se o site não oferecer o cabeçaho CSP, os navegadores também utilizam a política de same-origin.

Para habilitar o CSP, você precisa configurar seu web server para retornar o cabeçalho {{HTTPHeader("Content-Security-Policy")}} (algumas vezes você verá menções para o cabeçalho `X-Content-Security-Policy`, mas essa é uma versão antiga que você não precisa especificar mais.

Alternativamente, o elemento {{HTMLElement("meta")}} pode ser usado para configurar a política, por exemplo: `<meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src https://*; child-src 'none';">`

## Ameaças

### Mitigando cross site scripting

Um objetivo primário do CSP é de mitigar e reportar ataques XSS. Os ataques de XSS exploram a confiaça do navegador sobre o conteúdo recebido pelo servidor. Scripts maliciosos são executados pelo navegador da vítima porque o navegador confia na origem do conteúdo, mesmo quando sua origem não está vindo de onde parece que está vindo.

O CSP faz com que seja possível para administradores de servidores reduzirem ou eliminarem os vetores em que os ataques de XSS podem ocorrer, especificando os domínios que o navegador deve considerar como origens válidas de scripts para serem executados. Um navegador compatível com o CSP só irá executar então scripts que vierem de arquivos que estejam presentes nos domínios que foram previamente especificados como confiáveis, ignorando todos os outros scripts (incluindo scripts inline e atributos HTML de manipulação de eventos).

Como uma forma de proteção final, os sites que querem nunca permitir a execução de scripts podem optar para desabilitar a execução globalmente.

### Mitigando ataques de captura de pacotes

Além da restrição de domínios deonde o conteúdo pode ser carregado, o servidor consegue especificar quais protocolos estão habilitados para utilização; por exemplo (e literalmente, de um ponto de vista de segurança), um servidor pode especificar que todo conteúdo deve ser carregando utilizando HTTPS. Uma estratégia completa de transmissão de dados segura inclui não só impor o protocolo HTTPS para transferência de dados, mas também marcar todos os [_cookies_ com a](/pt-BR/docs/Web/HTTP/Cookies) _[secure flag](/pt-BR/docs/Web/HTTP/Cookies)_ e prover redirecionamentos automáticos de páginas HTTP para suas versões HTTPS. Os sites também podem utilizar o cabeçalho {{HTTPHeader("Strict-Transport-Security")}} para garantir que os navegadores se conectem neles apenas usando um canal criptografado.

## Utilizando o CSP

Configurar uma Política de Segurança de Conteúdo envolve adicionar o header HTTP `Content-Security-Policy` a uma página web e adicionar valores para controlar recursos que o user-agent é habilitado para carregar para aquela página. Por exemplo, uma página que faz o upload e exibe imagens poderia permitir imagens de qualquer lugar, mas restringir um form action de um end point específico. Uma política de segurança de conteúdo devidamente concebida ajuda a proteger a página contra ataques do tipo cross site scripting. Este artigo explica como construir tais headers devidamente, e provê exemplos.

Anteriormente ao Firefox 23, o header HTTP `X-Content-Security-Policy` era utilizado. Do Firefox 23 em diante começou-se a usar o novo padrão, o header `Content-Security-Policy`. Durante a transição do header anterior para o novo header, sites podiam enviar ambos os header `X-Content-Security-Policy` e `Content-Security-Policy`. Neste caso, o header `X-Content-Security-Policy` seria ignorado e a política contida no header `Content-Security-Policy` seria utilizada.

## Especificando sua política

Você pode usar o `Content-Security-Policy` HTTP header para especificar sua política, dessa forma:

```
Content-Security-Policy: policy
```

A política é uma string contendo as [diretivas de políticas](/pt-BR/Security/CSP/CSP_policy_directives) descrevendo seu Content Security Policy.

## Escrevendo uma política

Uma politica é descrita usando uma série de [diretivas de políticas](/pt-BR/docs/Web/Security/CSP/CSP_policy_directives), cada uma descrevendo uma política para certos tipos de recursos ou áreas de política. Sua política deve incluir uma diretiva de política padrão `default-src`, que cobre os outros tipos de recursos quando eles não possuem política própria. (Para uma lista completa, veja a descrição da diretiva default-src.) Uma política precisa incluir uma diretiva `default-src` ou script-src para evitar que scripts inline sejam executados, assim como bloquear o uso de `eval()`. Uma política precisa incluir uma diretiva `default-src` ou `style-src`para restringir estilos inline de serem aplicados a partir de um elemento `<style>` ou um `.style` atributo.

A sintaxe para uma política é uma string de diretivas separadas por ponto e vírgula `;`, cada seguindo a sintaxe descrita em [Diretivas de políticas suportadas](/pt-BR/Security/CSP/CSP_policy_directives#Supported_policy_directives).

## Exemplos: Casos de uso comuns

A sessão provê alguns exemplos de alguns cenários comuns de política de segurança.

### Exemplo 1

Um administrador de _web site_ quer que todo o conteúdo venha do mesmo _site_ de origem (excluindo seus subdomínios).

```
Content-Security-Policy: default-src 'self'
```

### Exemplo 2

Um administrador de _web site_ quer que todo o conteúdo venha do mesmo _site_ de origem, e também de um domínio confiável e seus todos seus subdomínios (não necessariamente precisa ser o mesmo domínio onda a CSP está inserida).

```
Content-Security-Policy: default-src 'self' *.trusted.com
```

### Exemplo 3

A web site administrator wants to allow users of a web application to include images from any origin in their own content, but to restrict audio or video media to trusted providers, and all scripts only to a specific server that hosts trusted code.

```
Content-Security-Policy: default-src 'self'; img-src *; media-src media1.com media2.com; script-src userscripts.example.com
```

Here, by default, content is only permitted from the document's origin, with the following exceptions:

- Images may loaded from anywhere (note the "\*" wildcard).
- Media is only allowed from media1.com and media2.com (and not from subdomains of those sites).
- Executable script is only allowed from userscripts.example.com.

### Exemplo 4

A web site administrator for an online banking site wants to ensure that all its content is loaded using SSL, in order to prevent attackers from eavesdropping on requests.

```
Content-Security-Policy: default-src https://onlinebanking.jumbobank.com
```

The server only permits access to documents being loaded specifically over HTTPS through the single origin onlinebanking.jumbobank.com.

### Exemplo 5

A web site administrator of a web mail site wants to allow HTML in email, as well as images loaded from anywhere, but not JavaScript or other potentially dangerous content.

```
Content-Security-Policy: default-src 'self' *.mailsite.com; img-src *
```

Note that this example doesn't specify a [`script-src`](/pt-BR/Security/CSP/CSP_policy_directives#script-src); with the example CSP, this site uses the setting specified by the [`default-src`](/pt-BR/Security/CSP/CSP_policy_directives#allow) directive, which means that scripts can be loaded only from the originating server.

## Testando sua política

To ease deployment, CSP can be deployed in ["report-only" mode](https://www.w3.org/TR/CSP/#content-security-policy-report-only-header-field). The policy is not enforced, but any violations are reported to a provided URI. Additionally, a report-only header can be used to test a future revision to a policy without actually deploying it.

You can use the `Content-Security-Policy-Report-Only` HTTP header to specify your policy, like this:

```
Content-Security-Policy-Report-Only: policy
```

If both a `Content-Security-Policy-Report-Only` header and a `Content-Security-Policy` header are present in the same response, both policies are honored. The policy specified in `Content-Security-Policy` headers is enforced while the `Content-Security-Policy-Report-Only` policy generates reports but is not enforced.

Note that the `X-Content-Security-Policy-Report-Only` header was used before Firefox 23. If both the `X-Content-Security-Policy-Report-Only` and `Content-Security-Policy-Report-Only` are sent, the `Content-Security-Policy-Report-Only` will be used and the `X-Content-Security-Policy-Report-Only` will be ignored.

The [UserCSP Addon](https://addons.mozilla.org/en-us/firefox/addon/newusercspdesign/) also helps test and develop Content Security Policies for a site.

## Veja também

- [Introducing Content Security Policy](/pt-BR/Security/CSP/Introducing_Content_Security_Policy)
- [CSP policy directives](/pt-BR/Security/CSP/CSP_policy_directives)
- [Using CSP violation reports](/pt-BR/Security/CSP/Using_CSP_violation_reports)
- [Content Security Policy recommendation bookmarklet](http://brandon.sternefamily.net/posts/2010/10/content-security-policy-recommendation-bookmarklet/)
