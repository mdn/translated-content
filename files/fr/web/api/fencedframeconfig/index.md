---
title: FencedFrameConfig
slug: Web/API/FencedFrameConfig
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

L'interface **`FencedFrameConfig`** représente la navigation d'un élément HTML {{htmlelement("fencedframe")}}, c'est-à-dire le contenu qui y sera affiché.

Les objets `FencedFrameConfig` ne peuvent pas être construits manuellement en JavaScript. Ils sont renvoyés par une source telle que l'[API Protected Audience](https://privacysandbox.google.com/private-advertising/protected-audience?hl=fr) et affectés à la propriété {{domxref("HTMLFencedFrameElement.config")}}.

Une instance d'objet `FencedFrameConfig` possède une méthode exposée, mais elle correspond aussi à des informations de configuration internes contenant des propriétés opaques non accessibles depuis JavaScript. Cela inclut des informations telles que la source du contenu chargé et les groupes d'intérêt à des fins publicitaires. C'est un élément clé de la façon dont les cadres protégés permettent de mettre en œuvre des cas d'utilisation tout en respectant la vie privée des utilisateur·ice·s.

{{InheritanceDiagram}}

## Méthodes d'instance

- {{domxref("FencedFrameConfig.setSharedStorageContext", "setSharedStorageContext()")}} {{experimental_inline}}
  - : Transmet des données du document parent au stockage partagé du `<fencedframe>`.

## Exemples

### Utilisation simple

Pour définir le contenu affiché dans un `<fencedframe>`, une API utilisatrice (comme [Protected Audience](https://privacysandbox.google.com/private-advertising/protected-audience?hl=fr) ou [Shared Storage](https://privacysandbox.google.com/private-advertising/shared-storage?hl=fr)) génère un objet `FencedFrameConfig`, qui est ensuite affecté à la propriété `config` du `<fencedframe>`.

L'exemple suivant récupère un `FencedFrameConfig` depuis une enchère publicitaire de l'API Protected Audience, qui est ensuite utilisé pour afficher la publicité gagnante dans un `<fencedframe>`&nbsp;:

```js
const frameConfig = await navigator.runAdAuction({
  // … configuration de l'enchère
  resolveToConfig: true,
});

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

> [!NOTE]
> Il faut passer `resolveToConfig: true` à l'appel de `runAdAuction()` pour obtenir un objet `FencedFrameConfig`. Si ce n'est pas le cas, la promesse ({{jsxref("Promise")}}) résultante renverra un URN qui ne peut être utilisé que dans un élément HTML {{htmlelement("iframe")}}.

### Passage de données contextuelles via `setSharedStorageContext()`

Vous pouvez utiliser l'[API Private Aggregation](https://privacysandbox.google.com/private-advertising/private-aggregation?hl=fr) pour créer des rapports combinant des données d'événement à l'intérieur des cadres protégés avec des données contextuelles du document parent. `setSharedStorageContext()` peut être utilisé pour transmettre des données contextuelles de l'intégrateur aux worklets de stockage partagé initiés par l'[API Protected Audience](https://privacysandbox.google.com/private-advertising/protected-audience?hl=fr).

Dans l'exemple suivant, nous stockons des données à la fois depuis la page intégratrice et depuis le cadre protégé dans le [stockage partagé](https://privacysandbox.google.com/private-advertising/shared-storage).

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

Dans le worklet `reporting-worklet.js`, on lit l'identifiant d'événement du document parent depuis `sharedStorage.context` et les données d'événement du cadre depuis l'objet data, puis on les rapporte via [Private Aggregation](https://privacysandbox.google.com/private-advertising/private-aggregation?hl=fr)&nbsp;:

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

    // Données du fenced frame
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
