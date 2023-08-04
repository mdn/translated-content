---
title: WindowTimers.clearTimeout()
slug: Web/API/clearTimeout
---

{{APIRef("HTML DOM")}}

## Sumário

O método **`clearTimeout()`** do escopo {{domxref("WindowOrWorkerGlobalScope")}} cancela um _timeout_ previamente estabelecido pela função {{domxref("WindowOrWorkerGlobalScope.setTimeout", "setTimeout()")}}.

## Síntaxe

```
escopo.clearTimeout(timeoutID)
```

### Parâmetros

- `timeoutID`
  - : O ID do _timeout_ que você deseja cancelar. Esse ID é o retorno da função `setTimeout()`.

É interessante ressaltar que os conjuntso de _IDs_ usados pelos métodos {{domxref("WindowOrWorkerGlobalScope.setTimeout", "setTimeout()")}} e {{domxref("WindowOrWorkerGlobalScope.setInterval", "setInterval()")}} são compartilhados, o que significa que `clearTimeout()` e {{domxref("WindowOrWorkerGlobalScope.clearInterval", "clearInterval()")}} podem ser tecnicamente utilizados de forma intercambiável. No entanto, para obter-se maior clareza, isso deve ser evitado.

## Exemplo

Execute o script abaixo em uma página web e clique na página uma vez. Você verá uma mensagem aparecer um segundo depois. Se você continuar clicando na página várias vezes nesse intervalo de tempo, a mensagem aparecerá uma única vez.

```js
var alarme = {
  relembrar: function (aMessage) {
    alert(aMessage);
    delete this.timeoutID;
  },

  setup: function () {
    if (typeof this.timeoutID === "number") {
      this.cancelar();
    }

    this.timeoutID = window.setTimeout(
      function (msg) {
        this.relembrar(msg);
      }.bind(this),
      1000,
      "Wake up!",
    );
  },

  cancelar: function () {
    window.clearTimeout(this.timeoutID);
  },
};
window.onclick = function () {
  alarme.setup();
};
```

## Notas

Passar um _ID_ inválido para `clearTimeout` não causa nenhum efeito (não lança nenhuma exceção).

## Especificações

{{Specifications}}

## Compatibilidade

{{Compat}}

## Veja também

- {{domxref("WindowOrWorkerGlobalScope.setTimeout()")}}
- {{domxref("WindowOrWorkerGlobalScope.setInterval()")}}
- {{domxref("WindowOrWorkerGlobalScope.clearInterval()")}}
- {{domxref("Window.requestAnimationFrame()")}}
- [_Daemons_ management](/pt-BR/docs/JavaScript/Timers/Daemons)
