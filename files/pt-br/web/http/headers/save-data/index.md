---
title: Save-Data
slug: Web/HTTP/Headers/Save-Data
---

{{HTTPSidebar}}

O cabeçalho **`Save-Data`** é um booleano no qual, em requisições, indica a preferência do cliente para reduzir uso de dados. Isso pode ser por algumas razões como custo de transferência alto, baixa velocidade de conexão, etc.

Um valor de `On` indica uma opção explícita do usuário em querer reduzir a quantidade de dados usados no cliente, e quando comunicade para origens permite elas entregarem conteúdo alternativo para reduzir a quantidade de dados baixados como recursos de imagem e vídeo menores, marcação e estilo diferente, desabilitar _polling_ e atualizações automáticas, e assim por diante.

> [!NOTE]
> Desabilitar HTTP/2 Server Push ({{RFC("7540", "Server Push", "8.2")}}) pode ser desejável para reduzir o _download_ de dados.

## Sintaxe

```
Save-Data: <sd-token>
```

## Diretivas

- `<sd-token>`
  - : Um valor numérico indicando se o cliente quer optar ou não em entrar em modo de utilização de dados reduzido. `on` significa sim, enquanto `off` (o padrão) indica não.

## Exemplos

O cabeçalho {{HTTPHeader("Vary")}} assegura que o conteúdo é cacheado apropriadamante (por exemplos assegurando que o usuário não é servido com uma imagem de baixa qualidade do cache quando o cabeçalho `Save-Data` não está mais presente \[_e.g._ depois de ter trocado de rede celular para Wi-Fi]).

### Com `Save-Data: on`

Requisição:

```
GET /image.jpg HTTP/1.0
Host: example.com
Save-Data: on
```

Resposta:

```
HTTP/1.0 200 OK
Content-Length: 102832
Vary: Accept-Encoding, Save-Data
Cache-Control: public, max-age=31536000
Content-Type: image/jpeg

[...]
```

### Sem `Save-Data`

Requisição:

```
GET /image.jpg HTTP/1.0
Host: example.com
```

Resposta:

```
HTTP/1.0 200 OK
Content-Length: 481770
Vary: Accept-Encoding, Save-Data
Cache-Control: public, max-age=31536000
Content-Type: image/jpeg

[...]
```

## Especificações

| Especificação                                                                                                                          | Título            |
| -------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| [draft-grigorik-http-client-hints-03, section 7: Save-Data](https://tools.ietf.org/html/draft-grigorik-http-client-hints-03#section-7) | HTTP Client Hints |

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [Ajude seus usuários a "salvar-dados" (Help Your Users \`Save-Data\`) - CSS Tricks](https://css-tricks.com/help-users-save-data/)
- [Entregando aplicações leves e rápidas com Save-Data (Delivering Fast and Light Applications with Save-Data) - Google Developers](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/save-data/)
- Cabeçalho para indicar que o conteúdo servidor varia por `Save-Data`: {{HTTPHeader("Vary")}}
- Funcionalidade CSS @media [`prefers-reduced-data`](/pt-BR/docs/Web/CSS/@media/prefers-reduced-data) {{experimental_inline}}
