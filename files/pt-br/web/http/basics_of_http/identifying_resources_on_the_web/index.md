---
title: Identificando recursos na web
slug: Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web
---

{{HTTPSidebar}}

O alvo de uma requisição HTTP é chamada de "resource", ou recurso em português, com a natureza ainda não definida; Isso pode ser um documento, uma foto ou qualquer outra coisa. Cada recurso é identificado por uma Identificação de recursos uniforme, do inglês **Uniform Resource Identifier** ({{Glossary("URI")}}) usada pelo HTTP para identificar recursos.

A identidade e a localização de recursos na Web são fornecidas, principalmente por um único URL (Uniform Resource Locator, um tipo de URI). Pode ser que as vezes as a identidade e a localização não são dadas pelo mesmo URI: O HTTP usa um cabeçalho HTTP específico, {{HTTPHeader("Alt-Svc")}} quando o recurso solicitado quer que o cliente acesse-o de outra localização

## URLs e URNs

### URLs

A forma mais comum de URL é o Uniform Resource Locator ({{Glossary("URL")}}) , que é conhecido como endereço de Web.

```
https://developer.mozilla.org
https://developer.mozilla.org/pt-BR/docs/Learn/
https://developer.mozilla.org/pt-BR/search?q=URL
```

Qualquer um desses URLs podem ser digitado na barra de endereços do seu navegador dizendo para carregar a página associada (recurso).

Uma URL é composta por diferentes partes, algumas são estritamente necessárias e outras são opcionais. Um exemplo mais complexo seria algo como isso:

```
http://www.exemplo.com:80/pasta/para/meu-arquivo.html?chave1=valor1&chave2=valor2#AlgumaCoisaNoDocumento
```

### URNs

Um Nome de Recurso Uniforme do inglês Uniform Resource Name (URN) é uma URI que identifica um recurso pelo nome em um namespace particular.

```
urn:isbn:9780141036144
urn:ietf:rfc:7230
```

As duas URNs correspondem

- o livro Nineteen Eighty-Four por George Orwell,
- a especificação 720 da IETF, Hypertext Transfer Protocol (HTTP/1.1): Sintaxe de mensagem e rotas.

## Sintaxe daUniform Resource Identifiers (URIs)

### Esquema ou protocolo

- ![Protocol](mdn-url-protocol@x2.png)
  - : `http://` é o protocolo. Ele indica qual é o protocolo que o navegador irá usar. Usualmente o protocolo é o HTTP, ou sua versão segura, HTTPS. A Web requer um desses dois, mas os navegadores tambem sabem como lidar com outros protocolos como o `mailto:` (para abrir um cliente de email) ou o `ftp:` para fazer uma transferêcia de arquivo, então não fique surpreso se ver alguns desses protocolos. Esquemas comuns são:

| Esquema     | Descrição                                                                  |
| ----------- | -------------------------------------------------------------------------- |
| data        | [URI de dados](/pt-BR/docs/Web/HTTP/Basics_of_HTTP/Data_URIs)              |
| file        | Nomes de arquivos específicos do host                                      |
| ftp         | [Protocolo de transferência de arquivo](/pt-BR/docs/Glossary/FTP)          |
| http/https  | [Hyper text transfer protocol (Secure)](/pt-BR/docs/Glossary/HTTP)         |
| mailto      | Endereço de correio eletrônico (e-mail)                                    |
| ssh         | Secure shell                                                               |
| tel         | telefone                                                                   |
| urn         | Uniform Resource Names                                                     |
| view-source | Código fonte de um recurso                                                 |
| ws/wss      | Conecções de [WebSocket](/pt-BR/docs/Web/API/WebSockets_API) (Encriptadas) |

### Autoridade

- ![Domaine Name](mdn-url-domain@x2.png)
  - : `www.example.com` é o nome de domínio ou autoridade que governa o namespace. Ele indica qual servidor web será solicitado. Alternativamente, é possível utilizar um {{Glossary("IP address")}}, mas isso pode ser menos conveniente e não é muito utilizado na Web.

### Porta

- ![Port](mdn-url-port@x2.png)
  - : `:80` é a porta nesta instância . Ela indica qual é o "portão" técnico usado para acessar os recursos no servidor web. Usualmente ela é omitida se o servidor web utiliza a porta padrão do protocolo HTTP (80 para HTTP e 443 para HTTPS) para garantir o acesso aos recursos. Do contrário, ela se torna obrigatória.

### Caminhos

- ![Path to the file](mdn-url-path@x2.png)
  - : `/path/to/myfile.html` é o caminho para o recurso no servidor Web. Nos primeiros dias da Web, um caminho era representado pelo caminho físico correspondente no servidor web. Hoje em dia isso é mais uma abstração tratada pelos servidores Web não sendo necessariamente o endereço físico do arquivo em questão.

### Query / Parâmetros

- ![Parameters](mdn-url-parameters@x2.png)
  - : `?key1=value1&key2=value2` são parâmetros extras fornecidos ao servidor Web. Eles são uma lista de pares chaves/valores separados com o símbolo `&` O servidor web pode usar esses parametros para fazer coisas extras depois retornando o recurso para o usuário. Cada servidor web tem suas regras em relação aos parâmetros, e o unico jeito confiável de saber como um servidor Web especifico trata os parâmetros é perguntando o dono do servidor.

### Fragmentos

- ![Anchor](mdn-url-anchor@x2.png)
  - : `#SomewhereInTheDocument` é uma âncora para outra parte do próprio recurso. Uma âncora representa uma espécie de "marcador" dentro do recurso, dando ao navegador as instruções para mostrar o conteúdo localizado naquele ponto "marcado". Em um documento HTML, por exemplo, o navegador erá dar scroll para a ancora em um ponto definido; em um vídeo ou audio, o navegor erá tentar ir para o tempo que a âncora representa. Vale ressaltar que a parte após o #, também conhecido como identificador de fragmento, nunca é enviado ao servidor com o pedido.

## Notas de uso

Ao usar URLs em conteúdo {{Glossary("HTML")}} em geral se deve usar apenas alguns desses esquemas URL. Apenas os esquemas HTTP e HTTPS devem ser usados quando se faz referência a subrecursos — isto é, arquivos carregados como parte de um documento maior. Por razões de segurança, os navegadores estão reduzindo cada vez mais o suporte a FTP para o carregamento de subrecursos.

FTP ainda é aceito em alguns casos específicos de acesso direto, como quando a URL é digitada diretamente na barra do navegador ou como o alvo em um link, ainda que alguns navegadores possam delegar o carregamento do conteúdo FTP para outra aplicação.

## Exemplos

```
https://developer.mozilla.org/pt-BR/docs/Learn
tel:+1-816-555-1212
git@github.com:mdn/browser-compat-data.git
ftp://example.org/resource.txt
urn:isbn:9780141036144
```

## Especificações

| Specification                                          | Title                                                              |
| ------------------------------------------------------ | ------------------------------------------------------------------ |
| {{RFC("7230", "Uniform Resource Identifiers", "2.7")}} | Hypertext Transfer Protocol (HTTP/1.1): Message Syntax and Routing |

## Veja também

- [O que é uma URL?](/pt-BR/docs/Learn/Common_questions/What_is_a_URL)
- [Lista de esquemas URI IANA](http://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml)
