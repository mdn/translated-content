---
title: Navigator.onLine
slug: orphaned/Web/API/NavigatorOnLine/onLine
---

{{ApiRef("HTML DOM")}}

Retorna o estado da conexão do navegador. A propriedade retorna um valor booleano, com `true` significando online e `false` significando offline. A propriedade envia atualizações assim que a capacidade do navegador de se conectar a rede muda. A atualização ocorre quando o usuário entra em um link ou quando algum script faz uma requisição a uma página remota. Exemplo, a propriedade deve retornar `false` quando usuários clicam em links assim que perderem suas conexões com a internet.

Navegadores implementam esta propriedade de formas diferentes.

No Chrome e Safari, caso o navegador não for capaz de se conectar a uma rede local (LAN) ou a um roteador, ele está offline; em todas as outras condições, retorna `true`. Utilizar essa propriedade para determinar que o navegador está offline seja sempre que o navegador retornar `false` como valor pode gerar falsos positivos, em casos em que o computador está executando um software de virtualização que tem adaptadores de ethernet virtuais que sempre estão "conectados." ou quando o computador estiver conectado ao roteador e este estiver sem internet. **Se você realmente quer determinar o estado da conexão do navegador, você deve desenvolver meios adicionais para esta verificação**. Para aprender mais, veja o artigo do HTML5 Rocks, [Working Off the Grid](http://www.html5rocks.com/en/mobile/workingoffthegrid.html).

No Firefox e Internet Explorer, mudar o navegador para o modo offline envia um valor `false`. Até o Firefox 41, todas as outras condições retornam um valor `true`; desde o Firefox 41, no OS X e Windows, o valor seguirá a conectividade real da rede.

Você pode ver mudanças no estado da rede escutando os eventos [`window.ononline`](/pt-BR/docs/Web/API/document.ononline) e [`window.onoffline`](/pt-BR/docs/Web/API/document.onoffline).

## Sintaxe

```
online = window.navigator.onLine;
```

### Valor

`online` é um booleano `true` ou `false`.

## Exemplo

Veja [um exemplo ao-vivo](http://html5-demos.appspot.com/static/navigator.onLine.html).

Para verificar se você está online, chame `window.navigator.onLine`, como no exemplo abaixo:

```js
if (navigator.onLine) {
  console.log('online');
} else {
  console.log('offline');
}
```

Caso o navegador não suporta o exemplo de `navigator.onLine` acima, ele sempre retornará `false`/`undefined`.

Para ver mudanças no estado da rede, use [`addEventListener`](/en-US/docs/DOM/element.addEventListener) para escutar os eventos em `window.online` e `window.offline`, como no exemplo abaixo:

```js
window.addEventListener('offline', function(e) { console.log('offline'); });

window.addEventListener('online', function(e) { console.log('online'); });
```

## Especificações

| Especificações                                                                                                   | Status                           | Comentário        |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------------- |
| {{SpecName("HTML WHATWG", "browsers.html#dom-navigator-online", "navigator.onLine")}} | {{Spec2("HTML WHATWG")}} | Definição inicial |

## Compatibilidade com navegadores

{{Compat("api.NavigatorOnLine.onLine")}}

## Notas

Veja [s eventos Online/Offline](/pt-BR/docs/Online_and_offline_events) para descrições mais detalhadas desta propriedade assim como novas funcionalidades offline introduzidas no Firefox 3.

## Veja também

- [HTML5 Rocks: Working Off the Grid With HTML5 Offline](http://www.html5rocks.com/en/mobile/workingoffthegrid.html)
- [HTML5 Rocks: "Offline": What does it mean and why should I care?](http://www.html5rocks.com/en/tutorials/offline/whats-offline/)
- [Mozilla Blog: Offline Web Applications](http://hacks.mozilla.org/2010/01/offline-web-applications/)
