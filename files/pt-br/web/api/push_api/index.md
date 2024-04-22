---
title: API Push
slug: Web/API/Push_API
---

{{DefaultAPISidebar("Push API")}}{{SeeCompatTable}}

A **API Push** torna possível que aplicações web recebam mensagens enviadas a elas de um servidor, indepententemente de aplicação estar ou não em primeiro plano, ou até mesmo carregada, em um agente de usuário. Isso permite que desenvolvedores entreguem notificações e atualizações assíncronas a usuários que optarem por elas, resultando num melhor engajamento com conteúdo novo oportuno.

> **Nota:** Esta documentação cobre a especificação W3C da API Push; se você procura pela documentação do sistema de notificação proprietária do mecanismo push, veja [Simple Push](/pt-BR/docs/Web/API/Simple_Push_API).

## Conceitos e uso de Push

Para uma aplicação receber mensagens push, ela precisa ter um [service worker](/pt-BR/docs/Web/API/ServiceWorker_API) ativo. Quando o service worker está ativo, ele pode se inscrever para utilizar notificações push {{domxref("PushManager.subscribe()")}}.

O resultado de {{domxref("PushSubscription")}} inclui toda informação que a aplicação precisa para receber uma mensagem push: um endpoint e a chave encriptada necessária para o envio de dados.

O service worker será iniciado conforme o necessário para lidar com as mensagens recebidas, que são entregues ao manipulador de evento {{domxref("ServiceWorkerGlobalScope.onpush")}} . Isto permite que a aplicação reaja a cada mensagem recebida, por exemplo para exibir a notificação ao usuário (usando {{domxref("ServiceWorkerRegistration.showNotification()")}}.)

Cada assinatura é única para um service worker. O endpoint para a assinatura é uma [capability URL](https://www.w3.org/TR/capability-urls/) única: o conhecimento do endpoint é tudo que é necessário para enviar uma mensagem para sua aplicação. A URL do endpoint precisa ser mantida em segredo, ou outras aplicações estranhas poderão enviar mensagens push para a sua aplicação.

A ativação de um service worker para entregar mensagens push pode resultar em um aumento de uso de recursos, particularmente de bateria. Diferentes navegadores tem diferentes formas para lidar com isso — atualmente não existe uma forma padrão. Firefox permite um número limitado (cota) de mensagens push para serem enviadas para uma aplicação, embora as mensagens Push que gerem notificações são isentas deste limite. O limite é atualizado a cada site visitado. Numa comparação, Chrome não aplica nenhum limite, mas requer que cada mensagem push exiba uma notificação.

> **Nota:** A partir do Gecko 44, a cota permitida de mensagens push por aplicação não é incrementada quando uma nova notificação é disparada quando outra está visível, por um período de três segundos. Isso lida com casos em que várias notificações são recebidas ao mesmo tempo, mas nem todas estão visíveis.

> **Nota:** Chrome atualmente requer que você crie um projeto no [Google Cloud Messaging](https://developers.google.com/cloud-messaging/) para enviar mensagens push e use um número do projeto e chave da API para o envio de notificações push. Isto também requer um _app manifest_ com alguns parâmetros especiais para usar o serviço. Essa restrição deverá ser removida no futuro.

## Interfaces

- {{domxref("PushEvent")}}
  - : Representa uma ação push enviada para o [global scope](/pt-BR/docs/Web/API/ServiceWorkerGlobalScope) de um {{domxref("ServiceWorker")}}. Ele contém informações enviadas de uma aplicação para um {{domxref("PushSubscription")}}.
- {{domxref("PushManager")}}
  - : Fornece uma forma de receber notificações de servidor third-party bem como solicitar URL para notificações push. Essa interface substitui a funcionalidade oferecida que está obsoleta {{domxref("PushRegistrationManager")}} interface.
- {{domxref("PushMessageData")}}
  - : Fornece acesso aos dados push enviados por um servidor, e inclui métodos para manipular os dados recebidos.
- {{domxref("PushSubscription")}}
  - : Fornece a URL de assinatura do endpoint e permite o cancelamento da assinatura de um serviço push.

## Service worker additions

As seguintes informações adicionais para a [Service Worker API](/pt-BR/docs/Web/API/Service_Worker_API) foram especificadas na Push API spec, para fornecer um ponto de entrada para usar mensagens Push, e para monitorar e responder os eventos de envio e assinatura.

- {{domxref("ServiceWorkerRegistration.pushManager")}} {{readonlyinline}}
  - : Retorna uma referência para a interface {{domxref("PushManager")}} para administrar assinaturas push incluindo subscrever, obter uma assinatura ativa e acessar o status de permissão de envio. Este é o ponto de entrada para usar mensagens Push.
- {{domxref("ServiceWorkerGlobalScope.onpush")}}
  - : Um manipulador de eventos disparado sempre que um evento {{Event("push")}} ocorre; isto é, sempre que uma mensagem do servidor de envio for recebida.
- {{domxref("ServiceWorkerGlobalScope.onpushsubscriptionchange")}}
  - : Um manipulador de eventos disparado sempre que um evento {{Event("pushsubscriptionchange")}} ocorre; por exemplo, quando uma assinatura push está inválida, ou está prestes a ser invalidada (ex. quando um serviço push service define um tempo de expiração.)

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [Usando Push API](/pt-BR/docs/Web/API/Push_API/Using_the_Push_API)
- [Push API Demo](/pt-BR/docs/Web/API/Push_API), no Github
- [Push Notifications on the Open Web](http://updates.html5rocks.com/2015/03/push-notificatons-on-the-open-web), Matt Gaunt
- [Service Worker API](/pt-BR/docs/Web/API/Service_Worker_API)
