---
title: "FencedFrameConfig : méthode setSharedStorageContext()"
short-title: setSharedStorageContext()
slug: Web/API/FencedFrameConfig/setSharedStorageContext
l10n:
  sourceCommit: a6c32a2d0add510c95ef74e85bd8e17551d508b6
---

{{APIRef("Fenced Frame API")}}{{SeeCompatTable}}

La méthode **`setSharedStorageContext()`** de l'interface {{domxref("FencedFrameConfig")}} transmet des données contextuelles du document parent au [stockage partagé](https://privacysandbox.google.com/private-advertising/shared-storage?hl=fr) de l'élément HTML `<fencedframe>`.

## Syntaxe

```js-nolint
setSharedStorageContext(context)
```

### Paramètres

- `context`
  - : Une chaîne de caractères représentant les données contextuelles à transmettre au stockage partagé. Une fois définie, cette valeur sera stockée dans la configuration interne de l'instance {{domxref("FencedFrameConfig")}}.

### Valeur de retour

Aucune (`Undefined`).

## Exemples

### Passage de données contextuelles via `setSharedStorageContext()`

Vous pouvez utiliser l'[API Private Aggregation](https://privacysandbox.google.com/private-advertising/private-aggregation?hl=fr) pour créer des rapports combinant des données d'événement à l'intérieur des cadres protégés avec des données contextuelles du document parent. `setSharedStorageContext()` peut être utilisé pour transmettre des données contextuelles de l'intégrateur aux worklets de stockage partagé initiés par l'[API Protected Audience](https://privacysandbox.google.com/private-advertising/protected-audience?hl=fr).

Dans l'exemple suivant, nous stockons des données à la fois depuis la page intégratrice et depuis le cadre protégé dans le [stockage partagé](https://privacysandbox.google.com/private-advertising/shared-storage?hl=fr).

Dans la page intégratrice, nous allons définir un identifiant d'événement fictif comme contexte de stockage partagé à l'aide de `setSharedStorageContext()`&nbsp;:

```js
const frameConfig = await navigator.runAdAuction({ resolveToConfig: true });

// Données de l'intégrateur à transmettre au worklet de stockage partagé
frameConfig.setSharedStorageContext("id-evenement-fictif");

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

À l'intérieur du cadre protégé, on ajoute le module worklet avec {{domxref("Worklet.addModule","window.sharedStorage.worklet.addModule()")}}, puis on envoie les données d'événement au worklet de stockage partagé via {{domxref("WindowSharedStorage.run","window.sharedStorage.run()")}} (cela n'est pas lié aux données contextuelles du document parent)&nbsp;:

```js
const frameData = {
  // Données disponibles uniquement dans le cadre protégé
};

await window.sharedStorage.worklet.addModule("reporting-worklet.js");

await window.sharedStorage.run("send-report", {
  data: {
    frameData,
  },
});
```

Dans le worklet `reporting-worklet.js`, on lit l'identifiant d'événement du document parent depuis `sharedStorage.context` et les données d'événement du cadre depuis l'objet data, puis on les rapporte via Private Aggregation&nbsp;:

```js
class ReportingOperation {
  convertEventIdToBucket(eventId) {
    // …
  }
  convertEventPayloadToValue(info) {
    // …
  }

  async run(data) {
    // Données de l'intégrateur
    const eventId = sharedStorage.context;

    // Données du cadre protégé
    const eventPayload = data.frameData;

    privateAggregation.sendHistogramReport({
      bucket: convertEventIdToBucket(eventId),
      value: convertEventPayloadToValue(eventPayload),
    });
  }
}

register("send-report", ReportingOperation);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les cadres protégés](https://privacysandbox.google.com/private-advertising/fenced-frame?hl=fr) sur privacysandbox.google.com
- [Le bac à sable de la vie privée](https://privacysandbox.google.com/?hl=fr) sur privacysandbox.google.com
