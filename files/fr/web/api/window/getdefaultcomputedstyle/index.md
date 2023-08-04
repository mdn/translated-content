---
title: Window.getDefaultComputedStyle()
slug: Web/API/window/getDefaultComputedStyle
---

{{APIRef("CSSOM")}}{{Non-standard_header}}

`getDefaultComputedStyle()` fournit les valeurs calculées par défaut de toutes les propriétés CSS d'un élément, en ignorant la mise en forme de l'auteur. C'est-à-dire que seules les mises en forme de l'agent utilisateur et de l'utilisateur sont pris en compte.

## Syntaxe

```js
var miseEnForme = window.getDefaultComputedStyle(element[, pseudoElt]);
```

- element
  - : L'{{domxref("Element")}} dont on veut obtenir la mise en forme calculée.
- pseudoElt {{optional_inline}}
  - : Une chaîne indiquant le pseudo-élément à rechercher. Doit être `null` (ou non indiqué) pour les éléments ordinaires.

Le `style` retourné est un objet [`CSSStyleDeclaration`](/fr-FR/docs/Web/API/CSSStyleDeclaration).

## Exemples

```js
var elem1 = document.getElementById("IdElem");
var miseEnForme = window.getDefaultComputedStyle(elem1);
```

```html
<style>
  #conteneur-elem {
    position: absolute;
    left: 100px;
    top: 200px;
    height: 100px;
  }
</style>

<div id="conteneur-elem">factice</div>
<div id="sortie"></div>

<script>
  var elem = document.getElementById("conteneur-elem");
  var laPropCSS = window.getDefaultComputedStyle(elem).position;
  document.getElementById("sortie").innerHTML = laPropCSS; // affichera "static"
</script>
```

## Description

L'objet retourné est du même type que l'objet retourné par `getComputedStyle`, mais il ne prend en compte que les règles user-agent et user.

## Utilisation avec des pseudo-éléments

`getDefaultComputedStyle` peut extraire des informations de mise en forme à partir de pseudo-éléments (par exemple, ::after, ::before).

```html
<style>
  h3:after {
    content: " déchire !";
  }
</style>

<h3>contenu généré</h3>

<script>
  var h3 = document.querySelector("h3"),
    resultat = getDefaultComputedStyle(h3, ":after").content;

  console.log("le contenu généré est : ", resultat); // retourne 'none'
</script>
```

## Notes

La valeur retournée est, dans certains cas connus, expressément incorrecte par intention délibérée. En particulier, pour éviter le problème de sécurité appelé CSS History Leak, les navigateurs peuvent "mentir" sur la valeur utilisée pour un lien et toujours retourner des valeurs comme si l'utilisateur n'avait jamais visité le site concerné, et/ou limiter les styles qui peuvent être appliqués via l'utilisation du pseudo-sélecteur `:visited`. Voir <http://blog.mozilla.com/security/2010/03/31/plugging-the-css-history-leak/> et [http://hacks.mozilla.org/2010/03/privacy-related-changes-coming-to-css-visited/](http://hacks.mozilla.org/2010/03/privacy-related-changes-coming-to-css-vistited/) pour le détail des exemples de la manière dont cela est implémenté.

## Spécifications

Proposé au groupe de travail CSS.

## Compatibilité des navigateurs

{{Compat}}
