---
title: "HTMLMetaElement : propriété media"
short-title: media
slug: Web/API/HTMLMetaElement/media
l10n:
  sourceCommit: 5f2a755c4fa7d126f85b56fbca90b15c5f039eff
---

{{APIRef("HTML DOM")}}

La propriété **`media`** de l'interface {{DOMxRef("HTMLMetaElement")}} permet de définir le média pour les métadonnées `theme-color`.

La propriété `theme-color` permet de définir la couleur de la barre d'outils ou de l'interface du navigateur dans les navigateurs et systèmes d'exploitation qui prennent en charge cette propriété.
La propriété `media` permet de définir différentes couleurs de thème selon les valeurs de `media`.

## Valeur

Une chaîne de caractères.

## Exemples

### Définir la couleur de thème pour le mode sombre

L'exemple suivant crée un nouvel élément `<meta>` avec un attribut `name` défini sur [`theme-color`](/fr/docs/Web/HTML/Reference/Elements/meta/name#noms_de_méta_définis_dans_la_spécification_html).
L'attribut `content` est défini sur `#3c790a`, l'attribut `media` est défini sur `prefers-color-scheme: dark`, et l'élément est ajouté à l'élément `<head>` du document.
Quand un·e utilisateur·ice a spécifié un mode sombre dans son système d'exploitation, la propriété `media` peut être utilisée pour définir une couleur de thème différente&nbsp;:

```js
const meta = document.createElement("meta");
meta.name = "theme-color";
meta.content = "#3c790a";
meta.media = "(prefers-color-scheme: dark)";
document.head.appendChild(meta);
```

### Définir des couleurs de thème selon la taille de l'appareil

La plupart des propriétés meta ne peuvent être utilisées qu'une seule fois. Cependant, `theme-color` peut être utilisé plusieurs fois si des valeurs de `media` uniques sont fournies.

Cet exemple ajoute deux éléments meta avec un `theme-color`&nbsp;: un pour tous les appareils et un autre pour les petits écrans.
L'ordre de correspondance de la requête `media` est important, donc la requête la plus spécifique doit être ajoutée plus tard dans le document, comme illustré ci-dessous&nbsp;:

```js
// Ajouter un theme-color pour tous les appareils
const meta1 = document.createElement("meta");
meta1.name = "theme-color";
meta1.content = "white";
document.head.appendChild(meta1);

// Ajouter un theme-color pour les petits appareils
const meta2 = document.createElement("meta");
meta2.name = "theme-color";
meta2.media = "(width <= 600px)";
meta2.content = "black";
document.head.appendChild(meta2);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("meta")}}
- [Valeurs possibles pour les requêtes media](/fr/docs/Web/CSS/Guides/Media_queries/Using)
