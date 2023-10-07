---
title: Eventos on-line e off-line
slug: orphaned/Web/API/NavigatorOnLine/Online_and_offline_events
---

IAlguns navegadores utilizam [Online/Offline events](http://www.whatwg.org/specs/web-apps/current-work/#offline) relacionados à [WHATWG Web Applications 1.0 specification](http://www.whatwg.org/specs/web-apps/current-work/).

### Introdução

Para criar um bom aplicativo off-line, primeiramente é necessário que você saiba quando o aplicativo está off-line. Consequentemente, você também precisará saber quando seu aplicativo retorna ao estado on-line novamente, ou seja, os eventos são:

1. Você precisa saber quando o usuário está on-line novamente, assim você pode sincronizar novamente com o servidor.
2. Você precisa saber quando o usuário está off-line, então você deverá agendar os acessos ao servidor para mais tarde.

Este é o processo que os eventos on-line/off-line ajudam a facilitar.

Seu aplicativo também poderá precisar estabelecer que certos documentos deverão ser mantidos em um cache off-line. Você pode saber mais sobre isso no artigo [Offline resources in Firefox](/en/Offline_resources_in_Firefox "en/Offline_resources_in_Firefox").

### API

#### `navigator.onLine`

[`navigator.onLine`](/en/DOM/window.navigator.onLine "en/DOM/window.navigator.onLine") é uma propriedade que mantém valores `true`/`false` (`true` para on-line, `false` para off-line). Esta propriedade é atualizada quando o usuário entra em "Modo Off-line" clicando no item de menu correspondente (Arquivo -> Modo Off-line).

Essa propriedade também deverá ser atualizada toda vez que o navegador perde a conexão com a Internet. De acordo com a especificação:

> A propriedade `navigator.onLine` deve retornar false se o usuário clicar num link ou se um aplicativo tentar contatar uma página remota e não estiver conectado à Internet ou se o navegador souber que a tentativa irá falhar por qualquer motivo...

O Firefox 2 atualiza esta propriedade quando se entra em Modo Off-line ou sai do mesmo e também quando a conexão com a Internet é perdida ou reestabelecida no Windows e no Linux.

Essa propriedade existiu em versões mais antigas do Firefox e do Internet Explorer (a especificação acima foi baseada nestas implementações anteriores), então você pode começar a utilizá-la imediatamente. A auto-detecção de estado de rede foi implementada no Firefox 2.

#### Eventos "`on-line`" e "`off-line`"

O [Firefox 3](/en/Firefox_3_for_developers "en/Firefox_3_for_developers") implementou dois novos eventos: "`on-line`" e "`off-line`". Estes dois eventos são chamados na tag `<body>` de cada página quando o navegador muda entre os modos on e off-line. Também, esses eventos são propagados a partir do `document.body`, para `document`, terminando em `window`. Ambos eventos não podem ser interrompidos (você não pode prevenir que o usuário fique on-line ou off-line).

Você pode resgistrar _listeners_ para esses eventos em caminhos conhecidos:

- usando [`addEventListener`](/en/DOM/element.addEventListener "en/DOM/element.addEventListener") em `window`, `document`, ou `document.body`
- configurando propriedades `.ononline` ou `.onoffline` em `document` ou `document.body` para um objeto `Function` em JavaScript. (**Obs.:** `window.ononline` ou `window.onoffline` não funcionarão por questões de compatibilidade.)
- especificando atributos `ononline="..."` or `onoffline="..."` na tag `<body>` do HTML.

### Example

Há [a simple test case](https://bugzilla.mozilla.org/attachment.cgi?id=220609) que você pode rodar para ver como esses eventos funcionam. XXX Quando os testes para isso forem criados, redirecione para eles e atualize este exemplo -nickolay

```html
 <!doctype html>
 <html>
 <head>
   <script>
     function updateOnlineStatus(msg) {
       var status = document.getElementById("status");
       var condition = navigator.onLine ? "ONLINE" : "OFFLINE";
       status.setAttribute("class", condition);
       var state = document.getElementById("state");
       state.innerHTML = condition;
       var log = document.getElementById("log");
       log.appendChild(document.createTextNode("Event: " + msg + "; status=" + condition + "\n"));
     }
     function loaded() {
       updateOnlineStatus("load");
       document.body.addEventListener("offline", function () {
         updateOnlineStatus("offline")
       }, false);
       document.body.addEventListener("online", function () {
         updateOnlineStatus("online")
       }, false);
     }
   </script>
   <style>...</style>
 </head>
 <body onload="loaded()">
   <div id="status"><p id="state"></p></div>
   <div id="log"></div>
 </body>
 </html>
```

### Notas

Se a API não estiver implementada no navegador, você pode usar outros sinais para detectar quando se está off-line, inclusive receber [AppCache error events](http://www.html5rocks.com/en/mobile/workingoffthegrid.html#toc-appcache) e [responses from XMLHttpRequest](http://www.html5rocks.com/en/mobile/workingoffthegrid.html#toc-xml-http-request).

### Referências

- ['Online/Offline events' section from the WHATWG Web Applications 1.0 Specification](http://www.whatwg.org/specs/web-apps/current-work/#offline)
- [The bug tracking online/offline events implementation in Firefox](https://bugzilla.mozilla.org/show_bug.cgi?id=336359) and a [follow-up](https://bugzilla.mozilla.org/show_bug.cgi?id=336682)
- [A simple test case](https://bugzilla.mozilla.org/attachment.cgi?id=220609)
- [An explanation of Online/Offline events](http://ejohn.org/blog/offline-events/)
- [offline web applications](http://hacks.mozilla.org/2010/01/offline-web-applications/) em hacks.mozilla.org - mostra um aplicativo off-line e explica como funciona.
