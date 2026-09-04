---
title: En-tête Sec-Browsing-Topics
short-title: Sec-Browsing-Topics
slug: Web/HTTP/Reference/Headers/Sec-Browsing-Topics
l10n:
  sourceCommit: e936e7271df947f25184a5ba8a21445bbd4d056c
---

{{Non-standard_Header}}{{Deprecated_Header}}

> [!WARNING]
> Cette fonctionnalité est actuellement opposée par deux fournisseurs de navigateurs. Voir la section [Positions sur les standards](/fr/docs/Web/API/Topics_API#positions_sur_les_standards) pour plus de détails sur l'opposition.

> [!NOTE]
> Un [processus d'inscription](/fr/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) est requis pour utiliser cette fonctionnalité dans vos applications.

{{Glossary("request header", "L'en-tête de requête")}} HTTP **`Sec-Browsing-Topics`** envoie les sujets sélectionnés pour l'utilisateur·ice actuel·le avec la requête associée, qui sont utilisés par une plateforme publicitaire pour choisir une publicité personnalisée à afficher.

Si le site appelant n'inclut pas l'API Topics dans un [processus d'inscription au bac à sable de confidentialité](/fr/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) réussi, toute tentative de création ou de modification de `Sec-Browsing-Topics` échoue silencieusement, et tout en-tête `Sec-Browsing-Topics` existant est supprimé.

Voir [Utiliser l'API Topics](/fr/docs/Web/API/Topics_API/Using) pour plus de détails.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Request header", "En-tête de requête")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "En-tête de requête interdit")}}</th>
      <td>Oui (préfixe <code>Sec-</code>)</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Sec-Browsing-Topics: <array-of-observed-topics>
```

## Directives

Un objet JSON représentant un tableau de jusqu'à trois objets représentant les sujets sélectionnés par l'utilisateur·ice actuel·le pour les trois dernières époques. Chaque objet contient les propriétés suivantes&nbsp;:

- `configVersion`
  - : Une chaîne de caractères identifiant l'algorithme (autre que la partie modèle) utilisé pour calculer le sujet.
- `modelVersion`
  - : Une chaîne de caractères représentant le modèle utilisé pour classer une chaîne de caractères (comme le nom d'hôte d'une page web) en identifiants de sujets.
- `taxonomyVersion`
  - : Une chaîne de caractères représentant la version de la taxonomie utilisée.
- `topic`
  - : Un nombre représentant l'ID du sujet, qui peut être utilisé par le navigateur pour récupérer le sujet à partir de la taxonomie (voir un exemple de [taxonomie des intérêts <sup>(angl.)</sup>](https://github.com/patcg-individual-drafts/topics/blob/main/taxonomy_v1.md)).
- `version`
  - : Les valeurs de `configVersion`, `modelVersion` et `taxonomyVersion`, concaténées avec des deux-points (`:`) entre chaque.

## Exemples

Les valeurs exactes des propriétés peuvent varier en fonction de l'implémentation du navigateur. Un exemple d'en-tête provenant de Chrome pourrait ressembler à ce qui suit&nbsp;:

```http
Sec-Browsing-Topics: [{configVersion: "chrome.1", modelVersion: "1", taxonomyVersion: "1", topic: 43, version: "chrome.1:1:1"}]
```

## Spécifications

Cette fonctionnalitée ne fait partir d'aucun standard officiel, bien qu'elle soit définie dans le [brouillon de proposition non officiel de l'API Topics <sup>(angl.)</sup>](https://patcg-individual-drafts.github.io/topics/).

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Topics](/fr/docs/Web/API/Topics_API)
