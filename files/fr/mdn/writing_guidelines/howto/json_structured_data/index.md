---
title: Comment utiliser les données structurées
short-title: Utiliser les données structurées
slug: MDN/Writing_guidelines/Howto/JSON_Structured_data
l10n:
  sourceCommit: 6d363614de8a40c33d1afe92e4e846b75beea986
---

MDN stocke les données dans des structures bien définies lorsque c'est possible. Ces informations sont ensuite centralisées et peuvent être mises à jour une seule fois, tout en étant utilisées à de nombreux endroits.

Il existe plusieurs de ces fichiers, et ce document décrit leur objectif, leur structure et leur processus de maintenance.

## GroupData : regroupement logique des API

`GroupData` est un fichier JSON qui collecte des informations sur les API Web. Le regroupement des API est quelque peu flou&nbsp;: toute interface, méthode ou propriété peut faire partie de plusieurs API. L'ensemble des API regroupées sous un nom est une convention utilisée pour communiquer sur une fonctionnalité, sans aucune application technique.

Pourtant, MDN a besoin de ces informations pour créer des barres latérales cohérentes pour les API Web (comme avec la macro `\{{APIRef}}`) avec les pages de référence, les guides et les articles de présentation appropriés.

`GroupData` fait exactement cela&nbsp;: pour chaque API, il répertorie les interfaces, propriétés, méthodes, guides et pages de présentation. Par le passé, il répertoriait également les dictionnaires et les fonctions de rappel. Mais cette utilisation, bien que toujours prise en charge, est obsolète et sera supprimée à l'avenir.

### Structure de GroupData

> [!WARNING]
> Les pages inexistantes répertoriées dans ce fichier sont ignorées (dans en-US).

Une entrée dans `GroupData.json` a la structure suivante&nbsp;:

```json
{
  "Name_of_the_API": {
    "overview": ["name_of_the_overview_page"],
    "guides": [
      "name_of_guide_1"
      // …
    ],
    "interfaces": [
      "name_of_interface_1"
      // …
    ],
    "methods": [
      "name_of_additional_method_1"
      // …
    ],
    "properties": [
      "name_of_additional_property_1"
      // …
    ],
    "events": [
      "name_of_additional_property_1"
      // …
    ]
  }
}
```

…où&nbsp;:

- `"Name_of_the_API"`
  - : Cette clé est à la fois un identifiant utilisé par les macros de la barre latérale comme `\{{APIRef("Name_of_the_API")}}` et le nom affiché dans la barre latérale elle-même. Choisissez-le judicieusement.
    > [!WARNING]
    > Si vous souhaitez modifier le nom affiché dans la barre latérale, vous devez éditer toutes les pages qui l'affichent.
- `"overview"`
  - : Il s'agit d'une liste contenant une page&nbsp;: la page de présentation, utilisée comme lien pour le texte `"Name_of_the_API"`. La valeur est le _titre de la page_, et la page doit se trouver dans le répertoire `web/api/`.
- `"guides"`
  - : Il s'agit d'une liste de guides à afficher dans la barre latérale, dans l'ordre donné. Les valeurs sont des _chemins vers la page_, commençant par `/docs/`.
- `"interfaces"`
  - : Cela répertorie les interfaces qui font partie de l'API.
- `"methods"`
  - : Cela répertorie les méthodes qui font partie de l'API.
    > [!NOTE]
    > Les méthodes des interfaces répertoriées dans `"interfaces"` **ne doivent pas** y être listées. Elles sont automatiquement ajoutées à la barre latérale si la clé `page-type` pour cette page est `web-api-static-method` ou `web-api-instance-method`.
- `"properties"`
  - : Cela répertorie les propriétés sur d'autres interfaces qui font partie de l'API, comme `navigator.xr` (une propriété que l'API WebXR ajoute à l'objet `navigator`)
    > [!NOTE]
    > Les propriétés des interfaces répertoriées dans `"interfaces"` **ne doivent pas** y être listées. Elles sont automatiquement ajoutées à la barre latérale si la clé `page-type` pour cette page est `web-api-static-property` ou `web-api-instance-property`.
- `"events"`
  - : Cela répertorie les évènements d'autres interfaces qui font partie de l'API. Les valeurs sont le _titre des pages_.
    > [!NOTE]
    > Les évènements ciblant les interfaces répertoriées dans `"interfaces"` **ne doivent pas** y être listés. Ils sont automatiquement ajoutés à la barre latérale si la clé `page-type` pour cette page est `web-api-event`.

Il existe deux autres clés, `"dictionaries"` et `"callbacks"`, qui fonctionnent selon le même principe. Comme nous ne documentons plus ces entités dans leurs propres pages, leur utilisation est obsolète, et aucune nouvelle entrée ne doit y être ajoutée (et nous les supprimons progressivement).

> [!NOTE]
> De plus, aucune des clés n'est obligatoire&nbsp;; il est recommandé (et nous l'appliquons) d'ajouter les clés non obsolètes avec une liste vide plutôt que de les omettre. Cela montre que l'absence de valeur est un choix conscient.

### Processus de mise à jour pour GroupData

Ce fichier, situé à [`files/jsondata/GroupData.json` <sup>(angl.)</sup>](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json), doit être mis à jour dans la même PR que les modifications affectant la barre latérale. De cette façon, la barre latérale est toujours à jour. Les réviseurs ne doivent pas fusionner les PR qui ne l'adoptent pas.

Pour tester vos modifications, vérifiez que la barre latérale des fichiers de votre PR affiche correctement toutes les entrées.

## InterfaceData : enregistrer l'héritage des interfaces

> [!NOTE]
> Nous espérons générer ce fichier automatiquement à partir des données disponibles avec w3c/webref à l'avenir.

`InterfaceData` décrit la hiérarchie des interfaces. Il répertorie l'héritage. Par le passé, il répertoriait également les mixins implémentés par chaque interface&nbsp;; mais cette utilisation est obsolète, et nous supprimons les mixins de ce fichier au même rythme que les mises à jour de MDN.

Ces données d'héritage sont utilisées lors de la création des barres latérales des API et par le `\{{InheritanceDiagram}}` dans les pages d'interface.

### Structure de InterfaceData

Une entrée dans `InterfaceData.json` a la structure suivante&nbsp;:

```json
{
  "Name_of_the_interface": {
    "inh": "Name_of_the_parent_interface",
    "impl": []
  }
}
```

> [!NOTE]
> Comme les incorporations sont obsolètes, `"impl"` doit être une liste vide pour toutes les nouvelles interfaces.

La valeur de `"Name_of_the_parent_interface"` n'est pas une liste mais une seule entrée, obligatoire&nbsp;; nous ne devons pas lister une interface qui n'hérite pas d'une autre.

### Processus de mise à jour pour InterfaceData

La même PR ajoutant une nouvelle interface qui hérite d'une autre doit mettre à jour ce fichier, situé à [`files/jsondata/InterfaceData.json` <sup>(angl.)</sup>](https://github.com/mdn/content/blob/main/files/jsondata/InterfaceData.json). Les réviseurs ne doivent pas fusionner les PR qui ne le font pas.

Pour tester vos modifications, vérifiez que la barre latérale des fichiers de votre PR affiche correctement toutes les entrées.

## SpecData : Informations sur les spécifications

> [!WARNING]
> Le fichier [`SpecData.json` <sup>(angl.)</sup>](https://github.com/mdn/content/blob/main/files/jsondata/SpecData.json) n'est plus maintenu.
> Les informations canoniques sur les spécifications sont stockées dans [w3c/browser-specs <sup>(angl.)</sup>](https://github.com/w3c/browser-specs) et dans la clé `spec_url` des fonctionnalités définies dans [mdn/browser-compat-data <sup>(angl.)</sup>](https://github.com/mdn/browser-compat-data).

Nous n'acceptons plus aucune contribution au fichier `SpecData.json`&nbsp;; insérez plutôt un tableau de spécifications en utilisant la macro `\{{Specifications}}`, ou liez la spécification dans le texte.
Notez que la plupart du temps, mentionner ou lier une spécification en dehors de la section _Specifications_ est un signe que quelque chose n'est pas correctement documenté sur MDN.
