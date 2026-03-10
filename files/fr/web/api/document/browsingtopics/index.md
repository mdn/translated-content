---
title: "Document : méthode browsingTopics()"
short-title: browsingTopics()
slug: Web/API/Document/browsingTopics
l10n:
  sourceCommit: e936e7271df947f25184a5ba8a21445bbd4d056c
---

{{APIRef("Topics API")}}{{Non-standard_Header}}{{Deprecated_Header}}

> [!WARNING]
> Cette fonctionnalité est actuellement opposée par deux fournisseurs de navigateurs. Voir la section [Positions sur les standards](/fr/docs/Web/API/Topics_API#positions_des_standards) ci-dessous pour plus de détails sur l'opposition.

> [!NOTE]
> Un [processus d'inscription](/fr/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) est requis pour utiliser cette fonctionnalité dans vos applications.

La méthode **`browsingTopics()`** de l'interface {{DOMxRef("Document")}} retourne une promesse qui se résout avec un tableau d'objets représentant les principaux sujets pour l'utilisateur·ice, un pour chacune des trois dernières époques. Ces sujets peuvent ensuite être retournés à la plateforme publicitaire dans une requête fetch ultérieure. Par défaut, la méthode fait également en sorte que le navigateur enregistre la visite de la page actuelle comme observée par l'appelant, de sorte que le nom d'hôte de la page puisse être utilisé ultérieurement dans le calcul des sujets.

Voir [Utiliser l'API Topics](/fr/docs/Web/API/Topics_API/Using) pour plus de détails.

> [!NOTE]
> `browsingTopics()` ne repose pas sur les en-têtes HTTP pour envoyer les sujets et marquer les sujets comme observés comme le font les autres [fonctionnalités activant l'API Topics](/fr/docs/Web/API/Topics_API/Using#what_api_features_enable_the_topics_api), mais elle est un peu moins performante. Il est conseillé d'utiliser l'une des fonctionnalités utilisant les en-têtes HTTP, en revenant à `browsingTopics()` uniquement dans les situations où les en-têtes ne peuvent pas être modifiés.

## Syntaxe

```js-nolint
browsingTopics()
browsingTopics(options)
```

### Paramètres

- `options` {{Optional_Inline}}
  - : Un objet d'options, qui peut contenir les propriétés suivantes&nbsp;:
    - `skipObservation`
      - : Une valeur booléenne qui, si définie sur `true`, entraîne le navigateur à _ne pas_ observer les sujets lorsque `browsingTopics()` est invoqué. La valeur par défaut est `false`, ce qui entraîne l'observation des sujets.

### Valeur de retour

Une promesse ({{JSxRef("Promise")}}) qui se résout avec un tableau contenant jusqu'à trois objets représentant les sujets sélectionnés par l'utilisateur pour les trois dernières époques. Chaque objet contient les propriétés suivantes&nbsp;:

- `configVersion`
  - : Une chaîne de caractères identifiant l'algorithme (autre que la partie modèle) utilisé pour calculer le sujet.
- `modelVersion`
  - : Une chaîne de caractères représentant le modèle utilisé pour classifier une chaîne de caractères (comme le nom d'hôte d'une page web) en identifiants de sujets.
- `taxonomyVersion`
  - : Une chaîne de caractères représentant la version de la taxonomie utilisée.
- `topic`
  - : Un nombre représentant l'identifiant du sujet, qui peut être utilisé par le navigateur pour récupérer le sujet à partir de la taxonomie (voir un exemple de [taxonomie des intérêts <sup>(angl.)</sup>](https://github.com/patcg-individual-drafts/topics/blob/main/taxonomy_v1.md)).
- `version`
  - : Les valeurs de `configVersion`, `modelVersion` et `taxonomyVersion`, concaténées avec des deux-points (`:`) entre chacune.

Les valeurs exactes des propriétés peuvent varier selon l'implémentation du navigateur. Un exemple d'objet provenant de Chrome pourrait ressembler à ce qui suit&nbsp;:

```json
{
  "configVersion": "chrome.1",
  "modelVersion": "1",
  "taxonomyVersion": "1",
  "topic": 43,
  "version": "chrome.1:1:1"
}
```

### Exceptions

- `NotAllowedError` {{DOMxRef("DOMException")}}
  - : Levée si&nbsp;:
    - L'utilisation de [l'API Topics](/fr/docs/Web/API/Topics_API) est interdite par une [Politique d'autorisations](/fr/docs/Web/HTTP/Guides/Permissions_Policy) {{HTTPHeader('Permissions-Policy/browsing-topics','browsing-topics')}}.
    - Le site appelant n'a pas inclus l'API Topics dans un [processus d'inscription réussi au bac à sable de confidentialité](/fr/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment).

## Exemples

```js
// Obtenir un tableau des principaux sujets pour cet utilisateur·ice
const topics = await document.browsingTopics();

// Demander une création publicitaire
const response = await fetch("https://ads.example/get-creative", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(topics),
});

// Obtenir le JSON de la réponse
const creative = await response.json();

// Afficher la publicité
```

## Spécifications

Cette fonctionnalité ne fait pas partie d'une norme officielle, bien qu'elle soit définie dans le [brouillon de proposition non officiel de l'API Topics <sup>(angl.)</sup>](https://patcg-individual-drafts.github.io/topics/).

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Topics](/fr/docs/Web/API/Topics_API)
