---
title: User-Agent
slug: Web/HTTP/Headers/User-Agent
---

{{HTTPSidebar}}

O cabeçalho de requisição **User-Agent** é uma cadeia de caracteres característica que permite servidores e pares de rede identificar a aplicação, sistema operacional, fornecedor, e/ou versão do agente de usuário requisitante.

> **Aviso:** Por favor leia [Detectando o navegador usando o agente de usuário (Browser detection using the user agent)](/pt-BR/docs/Web/HTTP/Browser_detection_using_the_user_agent) para por quê servir diferentes páginas Web ou serviços para diferentes navegadores é geralmente uma má ideia.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo de cabeçalho</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>não</td>
    </tr>
  </tbody>
</table>

## Sintaxe

```
User-Agent: <product> / <product-version> <comment>
```

Formato comum para navegadores web:

```
User-Agent: Mozilla/5.0 (<system-information>) <platform> (<platform-details>) <extensions>
```

### Diretivas

- `<product>`
  - : Um identificador do produto - seu nome ou codinome de desenvolvimento.
- `<product-version>`
  - : Número da versão do produto.
- `<comment>`
  - : Zero ou mais comentários contendo mais detalhes; informação de subproduto, por exemplo.

## Firefox UA string

Para mais cadeias de caracteres de agente de usuário do Firefox e Gecko, veja a [referência para cadeias de caracteres de agente de usuário do Firefox (Firefox user agent string reference)](/pt-BR/docs/Web/HTTP/Headers/User-Agent/Firefox). A cadeia de caracteres UA do Firefox é quebrada em 4 componentes:

```
Mozilla/5.0 (platform; rv:geckoversion) Gecko/geckotrail Firefox/firefoxversion
```

1. `Mozilla/5.0` é o _token_ geral que diz que o navegador é compatível com Mozilla. Por razões históricas, quase todo navegador envia isso hoje.
2. **_platform_** descreve a plataforma nativa que navegador está executando (Windows, Mac, Linux, Android, etc.), e se é um telefone celular. Telefones {{Glossary("Firefox OS")}} simplesmente dizem `Mobile` — a web é a plataforma. Note que **_platform_** pode consistir de múltiplos _tokens_ separador por "`;`" (ponto e vírgula). Veja abaixo para mais detalhes e exemplos.
3. **rv:_geckoversion_** indica a versão de _release_ do Gecko (como a "_17.0_"). Em navegadores recentes, **_geckoversion_** é o mesmo que **_firefoxversion_**.
4. **_Gecko/geckotrail_** indica que o navegador é baseado no [Gecko](/pt-BR/docs/Mozilla/Gecko). (No Desktop, _**geckotrail**_ é sempre a cadeia de caracteres fixa `20100101`.)
5. _**Firefox/firefoxversion**_ indica que o navegador é o Firefox, e provém a versão (como a "_17.0"_).

### Exemplos

```
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0
Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0
```

## Chrome UA string

A cadeia de caracteres do agente de usuário do Chrome (ou baseados em Chromium/Blink) é similar ao do Firefox. Para compatibilidade, ele adiciona cadeias de caracteres como `KHTML, like Gecko` e `Safari`.

### Exemplos

```
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36
```

## Opera UA string

O navegador Opera também é baseado no Blink, o motivo pelo qual se parecem muito, mas adiciona `"OPR/<version>"`.

### Exemplos

```
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36 OPR/38.0.2220.41
```

Mais antigo, versões do Opera baseados no Presto usavam:

```
Opera/9.80 (Macintosh; Intel Mac OS X; U; en) Presto/2.2.15 Version/10.00
Opera/9.60 (Windows NT 6.0; U; en) Presto/2.1.1
```

## Safari UA string

Neste exemplo, a cadeia de caracteres de agente de usuários é a versão de móvel do Safari. Ela contém a palavra `"Mobile"`.

### Exemplos

```
Mozilla/5.0 (iPhone; CPU iPhone OS 13_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/604.1
```

## Internet Explorer UA string

### Exemplos

```
Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0)
```

## Crawler e bot UA strings

Exemplos

```
Googlebot/2.1 (+http://www.google.com/bot.html)
```

## Especificações

| Especificação                        | Título                                                        |
| ------------------------------------ | ------------------------------------------------------------- |
| {{RFC(7231, "User-Agent", "5.5.3")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |
| {{RFC(2616, "User-Agent", "14.43")}} | Hypertext Transfer Protocol — HTTP/1.1                        |

## Compatibilidade com navegadores

{{Compat("http.headers.User-Agent")}}

## Veja também

- [Detecção, histórico e checklist de User-Agent](https://hacks.mozilla.org/2013/09/user-agent-detection-history-and-checklist/)
- [Referência para cadeias de caracteres de agente de usuário do Firefox (Firefox user agent string reference)](/pt-BR/docs/Web/HTTP/Headers/User-Agent/Firefox)
- [Detectando o navegador usando o agente de usuário (Browser detection using the user agent)](/pt-BR/docs/Web/HTTP/Browser_detection_using_the_user_agent)
