---
title: Clear-Site-Data
slug: Web/HTTP/Reference/Headers/Clear-Site-Data
original_slug: Web/HTTP/Headers/Clear-Site-Data
---

O cabeçalho HTTP **`Clear-Site-Data`** limpa os dados de navegação (_cookies_, armazenamento, _cache_) associados com o site requisitado. Ele permite desenvolvedores web terem maior controle sobre os dados armazenados localmente pelo navegador para suas origens.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo de cabeçalho</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>não</td>
    </tr>
  </tbody>
</table>

## Sintaxe

O cabeçalho `Clear-Site-Data` aceita uma ou mais diretivas. Se todos os dados devem ser limpos, a diretiva coringa (`"*"`) pode ser usada.

```
// Diretiva única
Clear-Site-Data: "cache"

// Múltiplas diretivas (separado por vírgula)
Clear-Site-Data: "cache", "cookies"

// Coringa
Clear-Site-Data: "*"
```

## Diretivas

> [!NOTE]
> Todas as diretivas devem estar de acordo com a [gramática de cadeia de caracteres com as aspas](https://tools.ietf.org/html/rfc7230#section-3.2.6). A diretiva que não inclui aspas duplas é inválida.

- `"cache"`
  - : Indica que o servidor quer remover localmente os dados cacheados (i.e. o cache do navegador, veja [HTTP caching](/pt-BR/docs/Web/HTTP/Guides/Caching)) para a URL de origem da resposta. Dependendo do navegador, essa diretiva pode acabar apagando outras coisas como páginas pré-renderizadas, _scripts_ armazenados, shaders WebGL ou sugestões na barra de endereço.
- `"cookies"`
  - : Indica que o servidor quer remover todos os _cookies_ da URL de origem da resposta. Credenciais de autenticação HTTP também são limpas. Isso afeta o registro inteiro do domínio, incluindo subdomínios. Então, `https://example.com` também como `https://stage.example.com`, terão seus _cookies_ limpos.
- `"storage"`
  - : Indica que o servidor quer remover todo o armezenamento DOM para a URL de origem da resposta. Isso incluí mecanismos de armazenamento como:
    - localStorage (executa `localStorage.clear`),
    - sessionStorage (executa `sessionStorage.clear`),
    - IndexedDB (para cada banco de dados, executa {{domxref("IDBFactory.deleteDatabase")}}),
    - Registros de serviços de trabalhadores (para cada registro de serviço de trabalhador, executa {{domxref("ServiceWorkerRegistration.unregister")}}),
    - [AppCache,](/pt-BR/docs/Web/HTML/Using_the_application_cache)
    - Banco de dados WebSQL,
    - [FileSystem API data](/pt-BR/docs/Web/API/File_and_Directory_Entries_API),
    - Dados de plugin (Flash via [`NPP_ClearSiteData`](https://wiki.mozilla.org/NPAPI:ClearSiteData)).

- `"executionContexts"`
  - : Indica que o servidor quer recarregar todos os contextos do navegador da origem da resposta ({{domxref("Location.reload")}}).
- `"*"` (coringa)
  - : Indica que o servidor quer limpar todos os tipos de dados da origem da resposta. Se mais tipos de dados forem adicionados nesse cabeçalho, eles também serão cobertos.

## Exemplos

### Deslogar de um site

Se um usuário se desloga de um site ou serviço, você talvez queira remover dados armazenados localmente. Você pode atingir isso adicionando o cabeçalho `Clear-Site-Data` quando enviando a página confirmando o desligamento da autenticação da pessoa do site foi feito com sucesso (`https://example.com/logout`, por exemplo):

```
Clear-Site-Data: "cache", "cookies", "storage", "executionContexts"
```

### Limpando cookies

Se o cabeçalho é entregue com a resposta em `https://example.com/clear-cookies`, todos os _cookies_ no mesmo domínio e qualquer subdomínio (como `https://stage.example.com`, etc), serão limpos.

```
Clear-Site-Data: "cookies"
```

## Especificações

| Especificação                                                      | Status        | Título              |
| ------------------------------------------------------------------ | ------------- | ------------------- |
| [Clear Site Data](https://w3c.github.io/webappsec-clear-site-data) | Working Draft | Initial definition. |

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{HTTPHeader("Cache-Control")}}
