---
title: "Reason: CORS request not HTTP"
slug: Web/HTTP/CORS/Errors/CORSRequestNotHttp
---

{{HTTPSidebar}}

## Razão

```
Razão: Requisição CORS não é HTTP
```

## O que deu errado?

Requisições {{Glossary("CORS")}} devem apenas usar o esquema de URL HTTPS, mas a URL especificada pela requisição é de um tipo diferente. Isso geralmente ocorre se a URL especifica um arquivo local, usando uma URL `file:///`.

Para consertar esse problema, apenas certifique-se que você está usando URLs HTTPS quando emitir requisições que envolvam CORS.

### Segurança de Arquivos Locais no Firefox 68

Quando um usuário abria uma página usando uma URI `file:///` no Firefox 67 ou anterior, a origem da página era definida como sendo o diretório do qual a página era aberta. Recursos existentes no mesmo diretório e nos subdiretórios eram tratados como tendo a mesma origem de acordo com a regra de mesma-origem do {{Glossary("CORS")}}.

Em resposta ao [CVE-2019-11730](https://www.mozilla.org/pt-BR/security/advisories/mfsa2019-21/#CVE-2019-11730), o Firefox, a partir da versão 68, define a origem da página aberta pela URI `file:///` como única. Desta maneira, outros recursos do mesmo diretório ou subdiretório não satisfazem mais à regra de mesma-origem do CORS. Este novo comportamento está habilitado por padrão pela preferência de nome `privacy.file_unique_origin`.

## Veja também

- [CORS errors](/pt-BR/docs/Web/HTTP/CORS/Errors)
- Glossário: {{Glossary("CORS")}}
- [CORS introduction](/pt-BR/docs/Web/HTTP/CORS)
- [What is a URL?](/pt-BR/docs/Learn/Common_questions/What_is_a_URL)
