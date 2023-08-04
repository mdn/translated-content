---
title: permissões
slug: Mozilla/Add-ons/WebExtensions/manifest.json/permissions
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row" style="width: 30%">Tipo</th>
      <td><code>Array</code></td>
    </tr>
    <tr>
      <th scope="row">Obrigatório</th>
      <td>Não</td>
    </tr>
    <tr>
      <th scope="row">Exemplo</th>
      <td>
        <pre class="brush: json no-line-numbers">
"permissions": [
  "*://developer.mozilla.org/*",
  "webRequest"
]</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Use a chave `permissions` para solicitar privilégios especiais para sua extensão. Esta chave é um array de strings, onde cada string é uma solicitação para uma permissão.

Se você solicitar permissões usando esta chave, o navegador poderá informar ao usuário que a extensão a ser instalada está solicitando certos privilégios, e perguntar se aceita ou não conceder esses privilégios. O navegador também poderá permitir que o usuário inspecione os privilégios de uma extensão depois que essa for instalada.

A chave pode conter três tipos de permissões:

- permissões de servidor (host)
- permissões de API
- a permissão activeTab (aba ativa)

## Permissões de servidor (host)

Permissões de servidor são espscificadas como [match patterns](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/Match_patterns). Cada _pattern_ identifica um grupo de URLs para os quais a extensão solicita privilégios adicionais. Por exemplo, uma permissão de servidor poderia ser `"*://developer.mozilla.org/*"`.

Os privilégios adicionais incluem:

- acesso [XMLHttpRequest](/pt-BR/docs/Web/API/XMLHttpRequest) e [fetch](/pt-BR/docs/Web/API/Fetch_API) para aquelas origens sem restrições _cross-origin_ (mesmo para requisições feitas a partir de _content scripts_)
- habilidade de injetar scripts programaticamente (usando [tabs.executeScript](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/tabs/executeScript)) em páginas servidas a partir daquelas origens
- habilidade de receber eventos a partir da API [webRequest](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/webRequest) para aqueles servidores
- habilidade de acessar cookies daquele servidor usando a API [cookies](/pt-BR/Add-ons/WebExtensions/API/cookies), caso a permissão de API "cookies" também esteja incluída.
- desconsiderar a proteção contra rastreamento se o servidor for um domínio completo sem asteriscos. Não funciona com `<all_urls>`.

No Firefox, da versão 56 em diante, extensões recebem automaticamente permissões de servidor para sua própria origem, que é na forma:

```
moz-extension://60a20a9b-1ad4-af49-9b6c-c64c98c37920/
```

onde `60a20a9b-1ad4-af49-9b6c-c64c98c37920` é o ID interno da extensão. A extensão pode obter essa URL programaticamente chamando [extension.getURL()](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/extension/getURL):

```js
browser.extension.getURL("");
// moz-extension://60a20a9b-1ad4-af49-9b6c-c64c98c37920/
```

## Permissões de API

Permissões de API são especificadas como palavras-chave. Cada palavra-chave nomeia uma API WebExtension que a extensão gostaria de usar.

As seguintes palavras-chave estão atualmente disponíveis:

- `activeTab`
- `alarms`
- `background`
- `bookmarks`
- `browserSettings`
- `browsingData`
- `contentSettings`
- `contextMenus`
- `contextualIdentities`
- `cookies`
- `debugger`
- `dns`
- `downloads`
- `downloads.open`
- `find`
- `geolocation`
- `history`
- `identity`
- `idle`
- `management`
- `menus`
- `nativeMessaging`
- `notifications`
- `pageCapture`
- `pkcs11`
- `privacy`
- `proxy`
- `search`
- `sessions`
- `storage`
- `tabHide`
- `tabs`
- `theme`
- `topSites`
- `webNavigation`
- `webRequest`
- `webRequestBlocking`

Na maioria dos casos, a permissão apenas concede acesso à API, com as seguintes exceções:

- `tabs` dá acesso a [partes privilagiadas da API `tabs`](/pt-BR/Add-ons/WebExtensions/API/tabs): `Tab.url`, `Tab.title` e `Tab.faviconUrl`. No Firefox, você também precisa `tabs` se quiser incluir `url` no parâmetro `queryInfo` para [`tabs.query()`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query). O resto ad API `tabs` pode ser usado sem solicitar nenhuma permissão.
- `webRequestBlocking` permite usar o argumento "blocking", assim você pode [modificar e cancelar requisições](/pt-BR/Add-ons/WebExtensions/API/WebRequest).
- `downloads.open` permite usar a API {{WebExtAPIRef("downloads.open()")}}.
- `tabHide` permite usar a API {{WebExtAPIRef("tabs.hide()")}}.

## Permissão activeTab (aba ativa)

Esta permissão é especificada como `"activeTab"`. Se uma extensão tem a permissão `activeTab`, quando o usuário interage com a extensão, a extensão recebe privilégios adicionais somente para a aba ativa.

"Interação do usuário" inclui:

- o usuário clica na ação da extensão, no navegador ou na página
- o usuário seleciona um item da extensão no menu de contexto
- o usuário ativa um atalho de teclado definido pela extensão

Os privilégios adicionais são:

- habilidade de injetar JavaScript ou CSS na aba programaticamente, usando [`browser.tabs.executeScript`](/pt-BR/Add-ons/WebExtensions/API/tabs/executeScript) e [`browser.tabs.insertCSS`](/pt-BR/Add-ons/WebExtensions/API/tabs/insertCSS)
- acesso a essas partes privilegiadas da API _tabs_ na aba atual: `Tab.url`, `Tab.title` e `Tab.faviconUrl`.

A intenção desta permissão é permitir que extensões executem um caso de uso comum, sem ter que lhes dar permissões poderosas demais. Muitas extensões querem "fazer alguma coisa com a página atual quando o usuário pede". Por exemplo, considere uma extensão que queira executar um script na página atual quando o usuário clicar em uma ação do navegador. Se a permissão `activeTab` não existisse, a extensão precisaria pedir a permissão de servidor `<all_urls>`. Mas isso daria à extensão mais poder que o necessário: ela poderia executar scripts em qualquer aba e quando quisesse, em vez de apenas na aba atual e somente em resposta a uma ação do usuário.

Note que você só pode ter acesso à aba ou dado que estava ali, quando a interação do usuário ocorreu (por exemplo, um clique do mouse). Quando a aba ativa muda para outra página, por exemplo devido a concluir o carregamento ou algum outro evento, a permissão não lhe concede mais acesso à aba.

Normalmente, a aba a qual foi concedido `activeTab` é somente a aba ativa atual, exceto em um caso. A API [`menus`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/menus) permite a uma extensão criar um item de menu que é exibido se o usuário abrir o menu de contexto sobre uma aba (ou seja, no elemento na lista de abas que permite ao usuário mudar de uma aba para outra). Se o usuário clicar em um item desses, a permissão `activeTab` é concedida para a aba em que o usuário clicou, mesmo que essa não seja a aba ativa no momento (de acordo com Firefox 63, [Erro do Firefox 1446956](https://bugzil.la/1446956)).

## Acesso à área de transferência

Existem duas permissões que permitem à extensão interagir com a área de transferência:

- `clipboardWrite`: escrever para a área de transferência usando `document.execCommand("copy")` ou `document.execCommand("cut")`
- `clipboardRead`: ler da área de transferência usando `document.execCommand("paste")`

Consulte [Interação com a área de transferência](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard) para saber todos os detalhes sobre isso.

## Armazenamento ilimitado

A permissão `unlimitedStorage`:

- permite que extensões exceder qualquer quota imposta pela API {{WebExtAPIRef("storage.local")}}
- no Firefox, permite que extensões criem um [banco de dados IndexedDB "persistente"](/pt-BR/docs/Web/API/IndexedDB_API/Browser_storage_limits_and_eviction_criteria#Firefox_specifics), sem que o navegador peça ao usuário permissão no momento em que o banco de dados é criado.

## Exemplos

```json
 "permissions": ["*://developer.mozilla.org/*"]
```

Solicita acesso privilegiado a páginas sob developer.mozilla.org.

```json
  "permissions": ["tabs"]
```

Solicita acesso a partes privilegiadas da API `tabs`.

```json
  "permissions": ["*://developer.mozilla.org/*", "tabs"]
```

Solicita ambas as permissões anteriores.

## Compatibilidade com navegadores

{{Compat("webextensions.manifest.permissions")}}
