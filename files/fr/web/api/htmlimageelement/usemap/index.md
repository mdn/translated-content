---
title: "HTMLImageElement : propriété useMap"
short-title: useMap
slug: Web/API/HTMLImageElement/useMap
l10n:
  sourceCommit: 754b68246f4e69e404309fee4a1699e047e43994
---

{{APIRef("HTML DOM")}}

La propriété **`useMap`** de l'interface {{DOMxRef("HTMLImageElement")}} reflète la valeur de l'attribut {{Glossary("HTML")}} [`usemap`](/fr/docs/Web/HTML/Reference/Elements/img#usemap), qui est une chaîne de caractères fournissant le nom de la carte d'image côté client à appliquer à l'image.

## Valeur

Une chaîne de caractères contenant le symbole dièse `#` suivi du [`name`](/fr/docs/Web/HTML/Reference/Elements/map#name) de l'élément {{HTMLElement("map")}} qui définit la carte d'image à appliquer à l'image.

## Exemples

### Utiliser `useMap`

Considérez un élément `<map>` qui ressemble à ceci&nbsp;:

```html
<map name="mainmenu-map">
  <area
    shape="circle"
    coords="25, 25, 75"
    href="/index.html"
    alt="Retour à la page d'accueil" />
  <area
    shape="rect"
    coords="25, 25, 100, 150"
    href="/index.html"
    alt="Boutique" />
</map>
```

Étant donné la carte d'image nommée `mainmenu-map`, vous pouvez construire dynamiquement des images qui référencent la carte d'image comme suit&nbsp;:

```js
const image = new Image();
image.src = "menu-box.png";
image.alt = "";
image.useMap = "#mainmenu-map";
```

Pour d'autres exemples (y compris interactifs), voir les articles sur les éléments {{HTMLElement("map")}} et {{HTMLElement("area")}}, ainsi que le [guide d'utilisation des cartes d'image](/fr/docs/Web/HTML/How_to/Add_a_hit_map_on_top_of_an_image).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Ajouter une carte d'image sur une image](/fr/docs/Web/HTML/How_to/Add_a_hit_map_on_top_of_an_image)
- L'élément HTML {{HTMLElement("map")}}
- L'élément HTML {{HTMLElement("area")}}
