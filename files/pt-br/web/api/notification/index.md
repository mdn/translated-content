---
title: Notificações
slug: Web/API/Notification
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

A interface da [API de Notificações](/pt-BR/docs/Web/API/Notifications_API) é usada para configurar e exibir notificações na área de trabalho do usuário. A aparência e algumas funcionalidades específicas das notificações variam entre as plataformas mas geralmente eles fornecem uma forma assíncrona de prover informações para o usuário.

## Construtor

- {{domxref("Notification.Notification", "Notification()")}}
  - : Cria uma nova instancia do objeto {{domxref('Notification')}}.

## Propriedades

### Propriedades estáticas

Estas propriedades estão disponíveis apenas no próprio objeto `Notification`.

- {{domxref("Notification.permission")}} {{readonlyinline}}
  - : Uma sequência de caracteres que representa a permissão atual para exibir notificações. Valor possíveis são: "denied" (o usuário se recusa a ter notificações exibidas), "granted" (o usuário aceita ter notificações exibidas) ou "default" (a escolha do usuário é desconhecido e, portanto, o navegador irá agir como se o valor foram negados).

### Propriedades da instância

Estas propriedades estão disponíveis apenas em instâncias do objeto `Notification`.

- {{domxref("Notification.title")}} {{readonlyinline}}
  - : Retorna o título da notificação conforme foi definido no parâmetro opções do construtor.
- {{domxref("Notification.dir")}} {{readonlyinline}}
  - : A direção do texto da notificação, conforme especificado no parâmetro opções do construtor.
- {{domxref("Notification.lang")}} {{readonlyinline}}
  - : O código de idioma da notificação, conforme especificado no parâmetro opções do construtor.
- {{domxref("Notification.body")}} {{readonlyinline}}
  - : O corpo(mensagem) da notificação, conforme especificado no parâmetro opções do construtor.
- {{domxref("Notification.tag")}} {{readonlyinline}}
  - : O ID da notificação (se houver), conforme especificado no parâmetro opções do construtor.
- {{domxref("Notification.icon")}} {{readonlyinline}}
  - : A URL da imagem usada como um ícone da notificação, conforme especificado no parâmetro opções do construtor.
- {{domxref("Notification.data")}} {{readonlyinline}}
  - : Retorna um clone estruturado de dados da notificação.
- {{domxref("Notification.silent")}} {{readonlyinline}}
  - : Especifica se a notificação deve ser silenciosa, ou seja, sons ou vibrações não devem ser emitidos, independentemente das configurações do dispositivo.

#### Propriedades não suportadas

As propriedades a seguir estão listados na especificação mais up-to-date, mas não são suportadas em quaisquer navegadores ainda. É aconselhável manter a verificação de volta regularmente para ver se o status destes actualiza, e deixe-nos saber se você encontrar qualquer informações desatualizadas.

- {{domxref("Notification.noscreen")}} {{readonlyinline}}
  - : Especifica se o disparo notificação deve permitir que a tela do dispositivo ou não.
- {{domxref("Notification.renotify")}} {{readonlyinline}}
  - : Especifica se o usuário deve ser notificado após uma nova notificação substitui um antigo.
- {{domxref("Notification.sound")}} {{readonlyinline}}
  - : Especifica um recurso de som para reproduzir durante o disparo da notificação, em vez do som de notificação do sistema padrão.
- {{domxref("Notification.sticky")}} {{readonlyinline}}
  - : Especifica se a notificação deve ser "fixa", ou seja, não facilmente eliminável pelo usuário.
- {{domxref("Notification.vibrate")}} {{readonlyinline}}
  - : Especifica um padrão de vibração para dispositivos com hardware de vibração.

#### Manipuladores de Eventos

- {{domxref("Notification.onclick")}}
  - : O manipulador para o evento {{event("click")}} é acionado cada vez que o usuário clica sobre a notificação.
- {{domxref("Notification.onerror")}}
  - : O manipulador para o evento {{event("error")}} é acionado quando a notificação encontra um erro.

#### Manipuladores Obsoletos

Os seguintes manipuladores de eventos ainda são suportados, conforme listado na seção [browser compatibility](#browser_compatibility). Estes serão listados abaixo, mas não são listados na especificação atual. Saiba que eles são obsoletos, e pode parar de funcionar em versões futuras do navegador.

- {{domxref("Notification.onclose")}}
  - : Manipulador do evento {{event("close")}} é acionado quando a notificação é fechada.
- {{domxref("Notification.onshow")}}
  - : Manipulador do evento {{event("show")}}. é acionado quando a notificação é exibida.

## Métodos

### Métodos Estáticos

Estes métodos estão disponíveis apenas no próprio objeto `Notification`.

- {{domxref("Notification.requestPermission()")}}
  - : Solicita a permissão do usuário para exibir notificações.

### Métodos de instância

Estas propriedades estão disponíveis apenas no objeto Notification ou através do seu [`prototype`](/pt-BR/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain). O objeto de notificação também herda a interface {{domxref("EventTarget")}}.

- {{domxref("Notification.close()")}}
  - : Programaticamente fecha uma notificação.

## Exemplos

Leve em conta este HTML básico:

```html
<button onclick="notifyMe()">Notifique me!</button>
```

É possível enviar uma notificação da seguinte forma - aqui nós apresentamos um conjunto bastante detalhado e completo de código que você pode usar se você quiser verificar primeiro se as notificações são suportados, em seguida, verifique se a permissão foi concedida para a origem atual para enviar notificações, em seguida, solicitar permissão, se necessário, antes, em seguida, enviar uma notificação.

```js
function notifyMe() {
  // Verifica se o browser suporta notificações
  if (!("Notification" in window)) {
    alert("Este browser não suporta notificações de Desktop");
  }

  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    var notification = new Notification("Hi there!");
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== "denied") {
    Notification.requestPermission(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        var notification = new Notification("Hi there!");
      }
    });
  }

  // At last, if the user has denied notifications, and you
  // want to be respectful there is no need to bother them any more.
}
```

{{EmbedLiveSample('Exemplo', '100%', 30)}}

Em muitos casos, você não precisa estar presente detalhado. Por exemplo, na nosso [Emogotchi demo](http://mdn.github.io/emogotchi/) ([veja o código fonte](https://github.com/mdn/emogotchi)), basta simlesmente executar {{domxref("Notification.requestPermission")}} independentemente de se certificar de que pode obter permissão para enviar notificações:

```js
Notification.requestPermission();
```

Em seguida executar um simples `spawnNotification()` quando queremos disparar uma notificação — este é passado argumentos para especificar o, ícone corpo e título que queremos, então ele cria as opções necessárias objeto e dispara a notificação usando o construtor {{domxref("Notification.Notification","Notification()")}}.

```js
function spawnNotification(corpo, icone, titulo) {
  var opcoes = {
    body: corpo,
    icon: icone,
  };
  var n = new Notification(titulo, opcoes);
}
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [Usando a API de Notificações](/pt-BR/docs/Web/API/Notifications_API/Using_the_Notifications_API)
