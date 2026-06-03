---
title: Communication avec les cadres intégrés
slug: Web/API/Fenced_frame_API/Communication_with_embedded_frames
l10n:
  sourceCommit: a6c32a2d0add510c95ef74e85bd8e17551d508b6
---

{{DefaultAPISidebar("Fenced Frame API")}}

Cet article explique comment la communication diffère entre un document intégrateur et le contenu intégré dans différents types de cadres (c'est-à-dire un élément HTML {{htmlelement("iframe")}} et un élément HTML {{htmlelement("fencedframe")}}), ainsi que la façon dont les données transmises peuvent être stockées.

## Comment communiquer entre l'intégrateur et un `<iframe>`

![Schéma illustrant la différence entre le stockage local et le stockage partagé et la communication avec un iframe, comme expliqué ci-dessous](iframe-storage-communication.png)

Lorsque du code tiers est intégré dans un `<iframe>`, l'`<iframe>` et l'intégrateur peuvent s'envoyer librement des messages pour demander l'écriture de données dans leur [stockage partagé](/fr/docs/Web/API/Shared_Storage_API) côté client. L'intégrateur peut envoyer une requête à cet `<iframe>` pour écrire des données dans son propre stockage tiers via un canal de communication inter-document utilisant {{domxref("Window.postMessage()")}}. Le tiers peut aussi envoyer des requêtes `postMessage()` à l'intégrateur.

Depuis l'`<iframe>`, vous pouvez écouter un événement [`message`](/fr/docs/Web/API/Window/message_event) provenant de l'intégrateur. Lorsque l'intégrateur envoie un message à l'`<iframe>` via `postMessage()`, l'`<iframe>` peut récupérer ces données et les stocker dans son propre stockage partagé côté client. Inversement, l'`<iframe>` peut envoyer un message que l'intégrateur peut écouter, et répondre en écrivant des données dans son stockage partagé.

## Comment communiquer entre l'intégrateur et un `<fencedframe>`

Les fenced frames sont conçus pour des cas comme l'affichage de publicités ciblées sélectionnées via l'[API Protected Audience](https://privacysandbox.google.com/private-advertising/protected-audience?hl=fr) et {{domxref("WindowSharedStorage.selectURL()")}}. La communication entre les `<fencedframe>` et d'autres pages en dehors du `<fencedframe>` sur la page est volontairement limitée, mais il existe une méthode de communication entre l'intégrateur et les worklets de stockage partagé&nbsp;: {{domxref("FencedFrameConfig.setSharedStorageContext()")}}.

> [!NOTE]
> Au sein d'un même arbre de `<fencedframe>`, la communication entre cadres est autorisée. Par exemple, un `<fencedframe>` racine peut envoyer un message à un `<iframe>` enfant dans son propre arbre, et un `<iframe>` enfant peut envoyer un message au `<fencedframe>` parent.

Voyons un exemple plus complexe qui utilise une opération de sortie Select URL pour afficher une publicité dans un `<fencedframe>`.

![Situation d'intégration complexe avec un intégrateur qui intègre un iframe, qui intègre un fencedframe, qui intègre un iframe](multiple-embed-levels.png)

Dans cet exemple, un éditeur demande à un fournisseur de contenu tiers d'afficher du contenu sur la page. Le contenu choisi avec {{domxref("WindowSharedStorage.selectURL()")}} est affiché dans un `<fencedframe>`, et ce contenu contient un `<iframe>` provenant d'un fournisseur de mesure. Notez qu'un éditeur peut représenter toute entité qui intègre un `<fencedframe>` tiers. Un fournisseur de mesure représente tout code tiers imbriqué s'exécutant dans un `<fencedframe>` d'un autre tiers.

Pour transmettre des données à un `<fencedframe>` à utiliser dans un worklet de stockage partagé, l'intégrateur peut définir les données dans un {{domxref("FencedFrameConfig")}}. Cette valeur sera disponible sous {{domxref("WorkletSharedStorage.context")}} à l'intérieur du worklet de stockage partagé. Ces données ne sont pas accessibles en dehors d'un worklet, et ne peuvent être consultées que dans l'environnement sécurisé et privé qu'offre un worklet de stockage partagé.

![Un éditeur crée un FencedFrameConfig avec selectURL, qui peut définir des données contextuelles via setSharedStorageContext qui seront alors disponibles dans un worklet de stockage partagé](share-contextual-data.png)

Quand un appel à `selectURL()` retourne un `FencedFrameConfig`, l'intégrateur du cadre peut transmettre des données en appelant `setSharedStorageContext(data)`&nbsp;:

```js
const fencedFrameConfig = await window.sharedStorage.selectURL(
  "creative-rotation",
  urls,
  {
    // …
    resolveToConfig: true,
  },
);

fencedFrameConfig.setSharedStorageContext("des-donnees");

// Naviguer le fenced frame vers la config.
document.getElementById("my-fenced-frame").config = fencedFrameConfig;
```

`setSharedStorageContext(data)` doit être appelé sur le `fencedFrameConfig` avant que l'élément `<fencedframe>` destinataire ait son attribut `config` défini sur `fencedFrameConfig`, car cela déclenche la navigation du cadre.

À l'intérieur d'un worklet de stockage partagé, on peut alors accéder à `WorkletSharedStorage.context` pour récupérer les données&nbsp;:

```js
class ReportingOperation {
  async run() {
    sharedStorage.set("des-donnees-de-l-integrateur", sharedStorage.context);
  }
}
register("send-report", ReportingOperation);
```
