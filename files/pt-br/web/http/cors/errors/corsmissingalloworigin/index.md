---
title: "Reason: CORS header 'Access-Control-Allow-Origin' missing"
slug: Web/HTTP/CORS/Errors/CORSMissingAllowOrigin
---

{{HTTPSidebar}}

## Motivo

```
Reason: CORS header 'Access-Control-Allow-Origin' missing
```

## O que houve de errado?

A resposta à requisição {{Glossary ("CORS")}} está sem o cabeçalho {{HTTPHeader ("Access-Control-Allow-Origin")}} necessário, que é usado para determinar se o recurso pode ser acessado ou não pelo conteúdo operando dentro da origem atual.

Se o servidor estiver sob seu controle, adicione a origem do site solicitante ao conjunto de domínios de acesso permitido, adicionando-o ao valor do cabeçalho `Access-Control-Allow-Origin`.

Por exemplo, para permitir que um site da origem `https://amazing.site` acesse ao recurso usando CORS, o cabeçalho deve conter:

```
Access-Control-Allow-Origin: https://amazing.site
```

Você também pode configurar um site para permitir que qualquer site o acesse usando o curinga `"*"`. Você só deve usar isso para APIs públicas. As APIs privadas nunca devem usar `"*"` e devem ter um domínio ou domínios específicos definidos. Além disso, o curinga só funciona para solicitações feitas com o atributo [`crossorigin`](/pt-BR/docs/Web/HTML/Global_attributes#crossorigin) definido como `"anonymous"`.

```
Access-Control-Allow-Origin: *
```

> **Aviso:** **Advertência:** Usar o caractere curinga para permitir que todos os sites acessem uma API privada é uma péssima ideia para o que deve ser uma razão óbvia.

Por exemplo, no Apache, adicione uma linha como a seguinte à configuração do servidor (na seção `<Directory>`, `<Location>`, `<Files>` ou `<VirtualHost>` apropriada). A configuração é tipicamente encontrada em um arquivo `.conf` (`httpd.conf` e `apache.conf` são nomes comuns para estes), ou em um arquivo `.htaccess`.

```
Header set Access-Control-Allow-Origin 'origin-list'
```

No Nginx, O comando para configurar este cabeçalho é:

```
add_header 'Access-Control-Allow-Origin' 'origin-list'
```

## Veja também

- [CORS errors (Erros do CORS)](/pt-BR/docs/Web/HTTP/CORS/Errors)
- Glossário: {{Glossary("CORS")}}
- [CORS introduction (Introdução ao CORS)](/pt-BR/docs/Web/HTTP/CORS)
