---
title: <switch>
slug: Web/SVG/Element/switch
---

{{SVGRef}}

L'élément `switch` évalue les attributs {{ SVGAttr("requiredFeatures") }}, {{ SVGAttr("requiredExtensions") }} et {{ SVGAttr("systemLanguage") }} de ses éléments enfants directs, dans l'ordre, puis affiche le premier élément pour lequel les attributs renvoient `true`. Tous les autres seront ignorés et donc non affichés. Si l'élément enfant est un élément conteneur tel que {{ SVGElement("g") }}, alors l'intégralité du contenu de cet enfant est soit traité/rendu soit ignoré/non rendu.

Notez que la valeur des propriétés `display` et `visibility` n'ont aucun effet sur le traitement du `switch`. En particulier, appliquer une propriété `display` à `none` sur l'élément enfant d'un `switch` n'a aucun effet sur le résultat du test `true/false` associé au traitement des éléments par le `switch`.

## Contexte d'utilisation

{{svginfo}}

## Attributs

### Attributs globaux

- [Attributs de traitement conditionnel](/fr/docs/Web/SVG/Attribute#Attributs_de_traitement_conditionnel)
- [Attributs de base](/fr/docs/Web/SVG/Attribute#Attributs_de_base)
- [Attributs d'événements graphiques](/fr/docs/Web/SVG/Attribute#Événement_graphiques)
- [Attributs de présentation](/fr/docs/Web/SVG/Attribute#Attributs_de_présentation)
- {{ SVGAttr("class") }}
- {{ SVGAttr("style") }}
- {{ SVGAttr("externalResourcesRequired") }}
- {{ SVGAttr("transform") }}

## Interface DOM

Cet élément implémente l'interface [`SVGSwitchElement`](/fr/docs/DOM/SVGSwitchElement).

## Exemple

Cet exemple montre comment afficher un texte différent selon les paramètres de langue du navigateur. L'élément `switch` affichera le premier élément enfant dont l'attribut `systemLanguage` correspond au language de l'utilisateur, ou l'élément sans attribut `systemLanguage` si aucun ne correspond.

### HTML

```html
<svg width="100%" viewBox="0 -20 100 50">
  <switch>
    <text systemLanguage="ar">مرحبا</text>
    <text systemLanguage="de,nl">Hallo!</text>
    <text systemLanguage="en">Hello!</text>
    <text systemLanguage="en-us">Howdy!</text>
    <text systemLanguage="en-gb">Wotcha!</text>
    <text systemLanguage="en-au">G'day!</text>
    <text systemLanguage="es">Hola!</text>
    <text systemLanguage="fr">Bonjour!</text>
    <text systemLanguage="ja">こんにちは</text>
    <text systemLanguage="ru">Привет!</text>
    <text>☺</text>
  </switch>
</svg>
```

### Résultat

{{ EmbedLiveSample('Exemple') }}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
