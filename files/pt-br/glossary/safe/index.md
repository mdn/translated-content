---
title: Seguro
slug: Glossary/Safe
---

Um método HTTP é **seguro** se ele não altera o estado do servidor. Em outras palavras, um método é seguro se ele leva a uma operação de somente leitura. Diversos métodos de HTTP são seguros: {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}, ou {{HTTPMethod("OPTIONS")}}. Todos os métodos seguros também são {{glossary("idempotente")}}s, mas nem todos os métodos idempotentes são seguros. Por exemplo, {{HTTPMethod("PUT")}} e {{HTTPMethod("DELETE")}} são ambos idempotentes, entretanto são inseguros.

Mesmo se métodos seguros possuem a semântica de somente leitura, servidores podem alterar o seu estado (e.g., eles podem manter _log_ ou estatísticas). O que é importante aqui, é de que chamando um método seguro, o cliente não requer que o servidor mude seu estado, e portanto não gerará carga desnecessária ao servidor. Navegadores podem chamar métodos seguros sem medo de causarem nenhum dano ao servidor: isso permite a eles a possibilidade de fazer atividades como pré-carregamento sem nenhum risco. _Web crawlers_ também usam métodos seguros.

Métodos seguros não servem somente para buscar arquivos estáticos, o servidor pode gerar uma resposta para um método seguro no voô, enquanto o _script_ gerador garantir segurança: ele não deve ativar gatilhos externos, como ativar um pedido de compras em um site.

É responsabilidade da aplicação no servidor implementar a semântica segura corretamente, o servidor _web_ em si, sendo Apache, nginx ou IIS, não pode forçar ela por si só. Em particular, a aplicação não deve permitir que requisições {{HTTPMethod("GET")}} alterem seu estado.

Uma chamada a um método seguro, não alterando o estado do servidor:

```
GET /pageX.html HTTP/1.1
```

Uma chamada a um método não seguro, que pode alterar o estado do servidor:

```
POST /pageX.html HTTP/1.1
```

Uma chamada a um método idempotente, mas não seguro:

```
DELETE /idX/delete HTTP/1.1
```

## Aprenda mais

### Conhecimento geral

- Definição de [seguro](https://tools.ietf.org/html/rfc7231#section-4.2.1) na especificação HTTP.

### Conhecimento técnico

- Descrição de métodos seguros comuns: {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}, {{HTTPMethod("OPTIONS")}}
- Descrição de métodos inseguros comuns: {{HTTPMethod("PUT")}}, {{HTTPMethod("DELETE")}}, {{HTTPMethod("POST")}}
