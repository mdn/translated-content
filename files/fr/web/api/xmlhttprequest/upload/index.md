---
title: "XMLHttpRequest : propriété upload"
short-title: upload
slug: Web/API/XMLHttpRequest/upload
l10n:
  sourceCommit: 118909727d715a42a27e3d368379bf959feca4af
---

{{APIRef("XMLHttpRequest API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

La propriété en lecture seule **`upload`** de l'interface {{DOMxRef("XMLHttpRequest")}} retourne un objet {{DOMxRef("XMLHttpRequestUpload")}} qui peut être observé pour suivre la progression d'un téléchargement.

C'est un objet opaque, mais comme il s'agit également d'un objet {{DOMxRef("XMLHttpRequestEventTarget")}}, des écouteurs d'évènements peuvent y être attachés pour suivre sa progression.

> [!NOTE]
> Attacher des écouteurs d'évènements à cet objet empêche la requête d'être une «&nbsp;requête simple&nbsp;» et entraîner l'émission d'une requête préliminaire si elle est inter-origine&nbsp;; voir le [CORS](/fr/docs/Web/HTTP/Guides/CORS). Pour cette raison, les écouteurs d'évènements doivent être enregistrés avant d'appeler {{DOMxRef("XMLHttpRequest.send", "send()")}} ou les évènements de téléchargement ne sont pas déclenchés.

> [!NOTE]
> La spécification semble également indiquer que les écouteurs d'évènements doivent être attachés après {{DOMxRef("XMLHttpRequest.open", "open()")}}. Cependant, les navigateurs sont bogués à ce sujet et nécessitent souvent que les écouteurs soient enregistrés _avant_ {{DOMxRef("XMLHttpRequest.open", "open()")}} pour fonctionner.

Les évènements suivants peuvent être déclenchés sur un objet de téléchargement et utilisés pour surveiller le téléchargement&nbsp;:

<table class="no-markdown">
  <thead>
    <tr>
      <th>Évènement</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{DOMxRef("XMLHttpRequestEventTarget/loadstart_event", "loadstart")}}</td>
      <td>Le téléchargement a commencé.</td>
    </tr>
    <tr>
      <td>{{DOMxRef("XMLHttpRequestEventTarget/progress_event", "progress")}}</td>
      <td>
        Livré périodiquement pour indiquer la quantité de progression réalisée jusqu'à présent.
      </td>
    </tr>
    <tr>
      <td>{{DOMxRef("XMLHttpRequestEventTarget/abort_event", "abort")}}</td>
      <td>L'opération de téléchargement a été annulée.</td>
    </tr>
    <tr>
      <td>{{DOMxRef("XMLHttpRequestEventTarget/error_event", "error")}}</td>
      <td>Le téléchargement a échoué en raison d'une erreur.</td>
    </tr>
    <tr>
      <td>{{DOMxRef("XMLHttpRequestEventTarget/load_event", "load")}}</td>
      <td>Le téléchargement s'est terminé avec succès.</td>
    </tr>
    <tr>
      <td>{{DOMxRef("XMLHttpRequestEventTarget/timeout_event", "timeout")}}</td>
      <td>
        Le téléchargement a expiré parce qu'une réponse n'est pas arrivée dans l'intervalle de temps défini par {{DOMxRef("XMLHttpRequest.timeout")}}.
      </td>
    </tr>
    <tr>
      <td>{{DOMxRef("XMLHttpRequestEventTarget/loadend_event", "loadend")}}</td>
      <td>
        Le téléchargement est terminé. Cet évènement ne fait pas de distinction entre le succès ou l'échec, et est envoyé à la fin du téléchargement quel que soit le résultat. Avant cet évènement, l'un des <code>load</code>, <code>error</code>, <code>abort</code> ou <code>timeout</code> a déjà été déclenché pour indiquer pourquoi le téléchargement s'est terminé.
      </td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser XMLHttpRequest](/fr/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- L'interface {{DOMxRef("XMLHttpRequestUpload")}}
