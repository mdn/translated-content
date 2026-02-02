---
title: "HTMLIFrameElement : propriété browsingTopics"
short-title: browsingTopics
slug: Web/API/HTMLIFrameElement/browsingTopics
l10n:
  sourceCommit: e936e7271df947f25184a5ba8a21445bbd4d056c
---

{{APIRef("HTML DOM")}}{{Non-standard_Header}}{{Deprecated_Header}}

> [!WARNING]
> Cette fonctionnalité est actuellement contestée par deux éditeurs de navigateurs. Voir la section [Positions des standards](/fr/docs/Web/API/Topics_API#positions_des_standards) pour plus de détails sur l'opposition.

La propriété **`browsingTopics`** de l'interface {{DOMxRef("HTMLIFrameElement")}} est un booléen indiquant que les sujets sélectionnés pour l'utilisateur·ice actuel·le doivent être envoyés avec la requête pour la source de l'élément {{HTMLElement("iframe")}} associé dans un en-tête {{HTTPHeader("Sec-Browsing-Topics")}}. Cela reflète l'attribut HTML `browsingtopics`.

Voir [Utiliser l'API Topics](/fr/docs/Web/API/Topics_API/Using) pour plus de détails.

## Valeur

Un booléen. La valeur par défaut est `false`&nbsp;; définissez-la à `true` pour envoyer la requête de source de l'`<iframe>` associé avec un en-tête {{HTTPHeader("Sec-Browsing-Topics")}} contenant les sujets sélectionnés pour l'utilisateur·ice actuel·le.

## Exemples

### Lecture

Définir `browsingtopics` à `true` puis charger le contenu de l'`<iframe>` de manière déclarative&nbsp;:

```html
<iframe browsingtopics title="Conteneur publicitaire" src="ad-tech1.example">
  ...
</iframe>
```

Afficher la valeur de `browsingTopics` via un script&nbsp;:

```js
const iframeElem = document.querySelector("iframe");
console.log(iframeElem.browsingTopics); // retournera true dans les navigateurs compatibles
```

### Écriture

Définir un `<iframe>` minimal&nbsp;:

```html
<iframe> ... </iframe>
```

Définir `browsingtopics` à `true` puis charger le contenu de l'`<iframe>` via un script&nbsp;:

```js
const iframeElem = document.querySelector("iframe");

iframeElem.browsingTopics = true;
iframeElem.title = "Conteneur publicitaire";
iframeElem.src = "ad-tech1.example";
```

## Spécifications

Cette fonctionnalité ne fait pas partie d'un standard officiel. Elle est présente dans le [brouillon de proposition non officiel de l'API Topics <sup>(angl.)</sup>](https://patcg-individual-drafts.github.io/topics/).

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Topics](/fr/docs/Web/API/Topics_API)
