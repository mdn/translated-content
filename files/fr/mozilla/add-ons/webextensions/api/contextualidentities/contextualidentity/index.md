---
title: contextualIdentitities.ContextualIdentity
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/ContextualIdentity
---

{{AddonSidebar()}}

Le type **`contextualIdentities.ContextualIdentity`** décrit une identité contextuelle unique.

## Type

Les valeurs de ce type sont des objets. Ils contiennent les propriétés suivantes :

- `cookieStoreId`
  - : `string`. L'ID du magasin de cookies pour l'identité. Puisque les identités contextuelles ne partagent pas les banques de cookies, elles servent d'identificateur unique.
- `color`

  - : `string`. La couleur pour l'identité. Cela sera montré dans les onglets appartenant à cette identité. Les valeurs suivantes sont valides :

    - "blue"
    - "turquoise"
    - "green"
    - "yellow"
    - "orange"
    - "red"
    - "pink"
    - "purple"
    - "toolbar"

    La valeur "toolbar" représente une couleur dépendant du thème. Les identités avec la couleur "toolbar" seront affichées dans la même couleur que le texte de la barre d'outils (correspondant à la [clé thème](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme#colors) `"toolbar_field_text"`).

- `colorCode`
  - : `string`. Un code hexadécimal représentant la couleur exacte utilisée pour l'identité. Par exemple : `"#37adff"`. Dans le cas particulier de la couleur "toolbar", `colorCode` est toujours `"#7c7c7d"`, quelle que soit la couleur affichée.
- `icon`

  - : `string`. Le nom d'une icône pour l'identité. Cela s'affichera dans la barre d'URL pour les onglets appartenant à cette identité. Les valeurs suivantes sont valides :

    - "fingerprint"
    - "briefcase"
    - "dollar"
    - "cart"
    - "circle"
    - "gift"
    - "vacation"
    - "food"
    - "fruit"
    - "pet"
    - "tree"
    - "chill"
    - "fence"

- `iconUrl`
  - : `string`. Une URL complète resource:// pointant vers l'icône de l'identité. Par exemple : "resource://usercontext-content/fingerprint.svg".
- `name`
  - : `string`. Nom de l'identité. Cela s'affichera dans la barre d'URL pour les onglets appartenant à cette identité. Notez que les noms ne doivent pas nécessairement être uniques .

## Compatibilité des navigateurs

{{Compat}}
