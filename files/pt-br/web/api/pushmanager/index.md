---
title: PushManager
slug: Web/API/PushManager
---

{{SeeCompatTable}}{{ApiRef("Push API")}}

A `PushManager`interface da [API Push](/pt-BR/docs/Web/API/Push_API) fornece uma maneira de receber notificações de servidores de terceiros, bem como solicitar URLs para notificações push.

Essa interface é acessada através da propriedade {{domxref ("ServiceWorkerRegistration.pushManager")}}.

> **Nota:** : Esta interface substitui a funcionalidade anteriormente oferecida pela interface obsoleta {{domxref ("PushRegistrationManager")}}.

## Propriedades

- {{domxref ("PushManager.supportedContentEncodings")}}
  - : Retorna uma série de codificações de conteúdo suportadas que podem ser usadas para criptografar a carga útil de uma mensagem push.

## Métodos

- {{domxref ("PushManager.getSubscription ()")}}
  - : Recupera uma assinatura de envio existente. Retorna uma {{jsxref ("Promise")}} que resolve um objeto {{domxref ("PushSubscription")}} contendo detalhes de uma assinatura existente. Se não existe uma subscrição existente, isso resolve um `null`valor.
- {{domxref ("PushManager.permissionState ()")}}
  - : Retorna uma {{jsxref ( "Promise")}} que resolve para o estado de permissão do atual {{domxref ( "PushManager")}}, que será um dos `'granted'`, `'denied'`ou `'prompt'`.
- {{domxref ("PushManager.subscribe ()")}}
  - : Assine um serviço push. Retorna uma {{jsxref ("Promise")}} que resolve um objeto {{domxref ("PushSubscription")}} contendo detalhes de uma inscrição de envio. Uma nova assinatura de envio é criada se o trabalhador de serviço atual não tiver uma assinatura existente.

### Métodos depreciados

- {{domxref ("PushManager.hasPermission ()")}} {{deprecated_inline}}
  - : Retorna uma {{jsxref ( "Promise")}} que resolve para o `PushPermissionStatus`do webapp requerente, que será um dos `granted`, `denied`ou `default`. Substituído por {{domxref ("PushManager.permissionState ()")}}.
- {{domxref ("PushManager.register ()")}} {{deprecated_inline}}
  - : Assina uma assinatura de envio. Substituído por {{domxref ("PushManager.subscribe ()")}}.
- {{domxref ("PushManager.registrations ()")}} {{deprecated_inline}}
  - : Recupera as assinaturas de envio existentes. Substituído por {{domxref ("PushManager.getSubscription ()")}}.
- {{domxref ("PushManager.unregister ()")}} {{deprecated_inline}}
  - : Anula e exclui um ponto final de assinatura especificado. Na API atualizada, uma assinatura não está registrada chamando o método {{domxref ("PushSubscription.unsubscribe ()")}}.

## Exemplo

```
this.onpush = function(event) {
  console.log(event.data);
  // From here we can write the data to IndexedDB, send it to any open
  // windows, display a notification, etc.
}

navigator.serviceWorker.register('serviceworker.js').then(
  function(serviceWorkerRegistration) {
    serviceWorkerRegistration.pushManager.subscribe().then(
      function(pushSubscription) {
        console.log(pushSubscription.subscriptionId);
        console.log(pushSubscription.endpoint);
        // The push subscription details needed by the application
        // server are now available, and can be sent to it using,
        // for example, an XMLHttpRequest.
      }, function(error) {
        // During development it often helps to log errors to the
        // console. In a production environment it might make sense to
        // also report information about errors back to the
        // application server.
        console.log(error);
      }
    );
  });
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [API de envio](/pt-BR/docs/Web/API/Push_API)
- [API do Worker Service](/pt-BR/docs/Web/API/Service_Worker_API)
