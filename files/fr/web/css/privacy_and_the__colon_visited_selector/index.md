---
title: Le sélecteur :visited et la vie privée
slug: Web/CSS/Privacy_and_the_:visited_selector
tags:
  - CSS
  - Guide
  - Sécurité
translation_of: Web/CSS/Privacy_and_the_:visited_selector
original_slug: Web/CSS/:visited_et_la_vie_privée
---
{{CSSRef}}

Par le passé (avant 2010), le sélecteur CSS {{cssxref(":visited")}} permettait aux sites d'effectuer des requêtes sur l'historique de l'utilisateur grâce à la méthode {{domxref("window.getComputedStyle")}} ou à d'autre techniques, parcourant l'historique de l'utilisateur afin de connaître les sites qu'il avait visité. Cela pouvait effectué rapidement et permettait d'obtenir beaucoup d'informations sur l'identité d'un utilisateur.

Afin de palier au problème, Gecko ({{Gecko("2")}}) a été modifié afin de limiter la quantité d'informations qui peut être obtenue au travers des liens visités. Les autres navigateurs ont également été modifiés de façon semblable.

## Quelques petits mensonges pour se protéger

La première modification consiste à faire mentir Gecko envers les applications web sous certaines circonstances.

- `window.getComputedStyle()` et les fonctions analogues comme {{domxref("element.querySelector()")}} renverront toujours des valeurs indiquant que l'utilisateur n'a jamais visité aucun des liens présents sur une page.
- Si on utilise un sélecteur d'élément voisin comme `:visited + span`, l'élément {{htmlelement("span")}} sera mis en forme comme si le lien n'avait pas été visité.
- Enfin, dans quelques rares scénarios, si on utilise des liens imbriqués et que l'élément ciblé par CSS diffère du lien dont on souhaite savoir s'il a été visité, cet élément sera dessiné comme si le lien n'avait pas été visité.

## Les limites de la mise en forme applicable aux liens visités

On peut toujours mettre en forme les liens visités mais quelques limites s'appliquent désormais. Seule les propriétés suivantes pourront être appliquées aux liens visités :

- {{cssxref("color")}},
- {{cssxref("background-color")}},
- {{cssxref("border-color")}} (et les propriétés détaillées associées),
- {{cssxref("column-rule-color")}},
- {{cssxref("outline-color")}},
- Les composantes de couleur liées aux attributs SVG {{SVGAttr("fill")}} et {{SVGAttr("stroke")}}.

De plus, même pour ces propriétés, il n'est pas possible de modifier la transparence entre les liens qui ont été visités et les autres (comme on pourrait le faire par ailleurs avec [`rgba()`](<https://developer.mozilla.org/fr/docs/Web/CSS/Type_color#rgb()_et_rgba()>) ou [`hsla()`](</fr/docs/Web/CSS/Type_color#hsl()_et_hsla()>) ou avec le mot-clé [`transparent`](/fr/docs/Web/CSS/Type_color#Le_mot-cl%C3%A9_transparent)).

Voici un exemple de mise en forme prenant en compte ces restrictions :

```css
:link {
  outline: 1px dotted blue;
  background-color: white;
  /* La valeur par défaut de background-color est 'transparent'.
     et il faut donc une valeur différente, sinon les modifications
     pour :visited ne s'appliqueront pas. */
}

:visited {
  outline-color: orange;     /* Les liens visités auront un contour orange */
  color: yellow;             /* Le texte des liens visités sera en jaune   */
  background-color: green;   /* L'arrière-plan des liens visités sera vert */
}
```

## Impact sur les développeurs web

De façon générale, cela ne devrait pas impacter les développeurs de façon significative. Il faudra toutefois appliquer les modifications suivantes aux sites :

- L'utilisation d'images d'arrière-plan pour la mise en forme des liens visités ne fonctionnera plus car seules les couleurs peuvent être utilisées pour les mettre en avant.
- Les couleurs qui seraient transparentes de façon normale ne seront pas affichées si elles participent à la mise en forme d'un sélecteur `:visited`.

## Voir aussi

- [Les modifications apportées à `:visited` pour la vie privée (en anglais)](https://hacks.mozilla.org/2010/03/privacy-related-changes-coming-to-css-vistited/) sur Mozilla Hacks
- [Colmater la fuite de l'historique via CSS (en anglais)](https://blog.mozilla.com/security/2010/03/31/plugging-the-css-history-leak/) sur le blog de sécurité Mozilla
- [Empêcher les attaques vers l'historique de l'utilisateur perpétrées via `:visited` (en anglais)](http://dbaron.org/mozilla/visited-privacy)
