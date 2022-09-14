---
title: PushManager
slug: Web/API/PushManager
tags:
  - API
  - API de armazenamento
  - Experimental
  - Interface
  - Referencia
  - Service Workers
  - Subir dados
translation_of: Web/API/PushManager
---
<p>{{SeeCompatTable}}{{ApiRef("Push API")}}</p>

<p>A <code>PushManager</code>interface da <a href="/en-US/docs/Web/API/Push_API">API Push</a> fornece uma maneira de receber notificações de servidores de terceiros, bem como solicitar URLs para notificações push.</p>

<p>Essa interface é acessada através da propriedade {{domxref ("ServiceWorkerRegistration.pushManager")}}.</p>

<div class="note">
<p><strong>Nota</strong> : Esta interface substitui a funcionalidade anteriormente oferecida pela interface obsoleta {{domxref ("PushRegistrationManager")}}.</p>
</div>

<h2 id="Propriedades">Propriedades</h2>

<dl>
 <dt>{{domxref ("PushManager.supportedContentEncodings")}}</dt>
 <dd>Retorna uma série de codificações de conteúdo suportadas que podem ser usadas para criptografar a carga útil de uma mensagem push.</dd>
</dl>

<h2 id="Métodos">Métodos</h2>

<dl>
 <dt>{{domxref ("PushManager.getSubscription ()")}}</dt>
 <dd>Recupera uma assinatura de envio existente. Retorna uma {{jsxref ("Promise")}} que resolve um objeto {{domxref ("PushSubscription")}} contendo detalhes de uma assinatura existente. Se não existe uma subscrição existente, isso resolve um <code>null</code>valor.</dd>
 <dt>{{domxref ("PushManager.permissionState ()")}}</dt>
 <dd>Retorna uma {{jsxref ( "Promise")}} que resolve para o estado de permissão do atual {{domxref ( "PushManager")}}, que será um dos <code>'granted'</code>, <code>'denied'</code>ou <code>'prompt'</code>.</dd>
 <dt>{{domxref ("PushManager.subscribe ()")}}</dt>
 <dd>Assine um serviço push. Retorna uma {{jsxref ("Promise")}} que resolve um objeto {{domxref ("PushSubscription")}} contendo detalhes de uma inscrição de envio. Uma nova assinatura de envio é criada se o trabalhador de serviço atual não tiver uma assinatura existente.</dd>
</dl>

<h3 id="Métodos_depreciados">Métodos depreciados</h3>

<dl>
 <dt>{{domxref ("PushManager.hasPermission ()")}} {{deprecated_inline}}</dt>
 <dd>Retorna uma {{jsxref ( "Promise")}} que resolve para o <code>PushPermissionStatus</code>do webapp requerente, que será um dos <code>granted</code>, <code>denied</code>ou <code>default</code>. Substituído por {{domxref ("PushManager.permissionState ()")}}.</dd>
 <dt>{{domxref ("PushManager.register ()")}} {{deprecated_inline}}</dt>
 <dd>Assina uma assinatura de envio. Substituído por {{domxref ("PushManager.subscribe ()")}}.</dd>
 <dt>{{domxref ("PushManager.registrations ()")}} {{deprecated_inline}}</dt>
 <dd>Recupera as assinaturas de envio existentes. Substituído por {{domxref ("PushManager.getSubscription ()")}}.</dd>
 <dt>{{domxref ("PushManager.unregister ()")}} {{deprecated_inline}}</dt>
 <dd>Anula e exclui um ponto final de assinatura especificado. Na API atualizada, uma assinatura não está registrada chamando o método {{domxref ("PushSubscription.unsubscribe ()")}}.</dd>
</dl>

<h2 id="Exemplo">Exemplo</h2>

<pre><code>this.onpush = function(event) {
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
  });</code></pre>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificação</th>
   <th scope="col">Status</th>
   <th scope="col">Comentário</th>
  </tr>
  <tr>
   <td>{{SpecName('Push API','#pushmanager-interface','PushManager')}}</td>
   <td>{{Spec2('Push API')}}</td>
   <td>Definição inicial.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidade_do_navegador">Compatibilidade do navegador</h2>

{{Compat("api.PushManager")}}

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/Push_API">API de envio</a></li>
 <li><a href="/en-US/docs/Web/API/Service_Worker_API">API do Worker Service</a> </li>
</ul>
