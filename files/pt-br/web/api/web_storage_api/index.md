---
title: API de Armazenamento na Web
slug: Web/API/Web_Storage_API
---

{{DefaultAPISidebar("Web Storage API")}}

A API de armazenamento na web (**Web Storage**) fornece mecanismos para que os navegadores possam armazenar dados através de chave/valor de uma forma mais eficiente que os cookies.

## Armazenamento na Web conceitos e formas de uso

A API de Web Storage fornece duas maneiras de armazenar dados:

- `sessionStorage` mantém as informações armazenadas por origem e permanece disponível enquanto há uma sessão aberta no navegador (mesmo a página sendo recarregada). Caso o browser seja fechado a sessão será limpa e as informações serão perdidas.
- `localStorage` mesmo que o navegador seja fechado, os dados permanecem armazenados.

Esses mecanismos estão disponíveis a partir das seguintes propriedades {{domxref("Window.sessionStorage")}} e {{domxref("Window.localStorage")}} (para um maior suporte, o objeto `Window` implementa os objetos `Window.LocalStorage` e `Window.SessionStorage`) — ao invocar uma dessas propriedades, é criada uma instância do objeto {{domxref("Storage")}}, que fornece métodos para inserir, recuperar e remover os dados. Sempre será utilizado um objeto diferente para cada origem de `sessionStorage` e `localStorage, dessa forma o controle de ambos é realizado de forma separada.`

> **Nota:** Nota: O acesso a API de Web storage a partir de IFrames de terceiros é negado se o usuário desabilitou cookies de terceiros (Firefox implementa esse comportamento a partir da versão 43 em diante).

> **Nota:** Nota**:** Web Storage não é o mesmo que mozStorage (interface XPCOM da Mozilla para o SQLite) ou Session store API (uma forma de armazenamento XPCOM para uso de extensões).

## Interfaces de Armazenamento na Web

- {{domxref("Storage")}}
  - : Permite que você insira, recupere e remova dados de um domínio no storage(session ou local).
- {{domxref("Window")}}
  - : A API de Web Storage estende o objeto {{domxref("Window")}} com duas novas propriedades — {{domxref("Window.sessionStorage")}} e {{domxref("Window.localStorage")}} — fornecendo acesso à sessão do domínio atual e local para o objeto {{domxref("Storage")}} respectivamente.
- {{domxref("StorageEvent")}}
  - : Um evento de storage é chamado em um objeto window do documento quando ocorre uma mudança no storage.

## Exemplos

Para desmonstrar o uso de web storage, nós criamos um exemplo simples, chamado [Web Storage Demo](https://github.com/mdn/dom-examples/tree/master/web-storage). A página da demo [landing page](http://mdn.github.io/web-storage-demo/) oferece funcionalidades que permitem alterar a cor, fonte e imagem que é exibida na página. Quando você escolhe uma opção diferente, a página será atualizada imediatamente. Além disso, sua escolha foi armazenada em `localStorage`, para que quando você feche o navegador e abra novamente para acessar a página, suas escolhas sejam lembradas.

Nós também fornecemos um [event output page](http://mdn.github.io/web-storage-demo/event.html) — para quando você abrir a página em outra aba, as informações sejam atualizadas através da chamada de um {{event("StorageEvent")}}.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Navegação privada /modo de navegação anônima

Boa parte dos navegadores atuais suportam a opção de privacidade chamada modo de "Navegação privada ou anônima", que basicamente torna a sessão de navegação privada e não deixa rastros depois que o navegador é fechado. Este modo é incompatível com armazenamento na Web por razões óbvias. Os fabricantes de navegadores estão experimentando com diferentes cenários como lidar com essa incompatibilidade.

A maioria dos navegadores optaram por uma estratégia onde as APIs de armazenamento ainda estão disponíveis e, aparentemente, funcional, com a grande diferença de que todos os dados armazenados é apagado depois que o navegador é fechado. Para estes navegadores ainda existem diferentes interpretações sobre o que deve ser feito com os dados existentes armazenados (a partir de uma sessão de navegação regular). E quanto a leitura dos dados se o navegador estiver no modo privado? Há alguns navegadores, principalmente Safari, que optaram por uma solução em que o armazenamento está disponível, mas está vazio e tem uma quota de 0 bytes atribuídos, tornando impossível o armazenamento de dados.

Os desenvolvedores devem estar cientes e considerar as diferentes formas de implementações ao desenvolverem sites dependendo das APIs Web Storage. Para mais informações, leia neste [post](https://blog.whatwg.org/tag/localstorage) escrito no blog do WHATWG que lida especificamente com este tópico.

## Veja também

[Usando a API Web Storage](/pt-BR/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
