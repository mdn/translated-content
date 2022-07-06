---
title: CSSStyleDeclaration
slug: Web/API/CSSStyleDeclaration
tags:
  - API
  - CSSOM
  - Interface
  - NeedsCompatTable
  - NeedsMarkupWork
  - Reference
translation_of: Web/API/CSSStyleDeclaration
---
{{ APIRef("CSSOM") }}

`CSSStyleDeclaration` représente une collection de paires propriété/valeur CSS. Elle est utilisée dans quelques API&nbsp;:

- {{domxref("HTMLElement.style")}} - pour manipuler le style d'un seul élément (\<elem style="...">)&nbsp;;
- (AFAIRE : à reformuler) est une interface avec le [declaration block](http://www.w3.org/TR/1998/REC-CSS2-19980512/syndata.html#block) renvoyé par la propriété [`style`](/en/DOM/cssRule.style) d'une `cssRule` dans une [feuille de style](/fr/docs/Web/API/StyleSheet), lorsque la règle est une [CSSStyleRule](/en/DOM/cssRule#CSSStyleRule)&nbsp;;
- `CSSStyleDeclaration` est également une interface en **lecture seule** pour le résultat de [window.getComputedStyle()](/fr/docs/Web/API/Window/getComputedStyle).

## Attributs

- {{domxref("CSSStyleDeclaration.cssText")}}
  - : Représentation textuelle du bloc de déclaration. La définition de cet attribut modifie le style.
- {{domxref("CSSStyleDeclaration.length")}} {{readonlyInline}}
  - : Le nombre de propriétés. Voir la méthode {{domxref("CSSStyleDeclaration.item",'item()')}} ci-dessous.
- {{domxref("CSSStyleDeclaration.parentRule")}} {{readonlyInline}}
  - : Le contenant {{domxref("CSSRule")}}.

## Méthodes

- {{domxref("CSSStyleDeclaration.getPropertyPriority()")}}
  - : Retourne la priorité facultative "important".
- {{domxref("CSSStyleDeclaration.getPropertyValue()")}}
  - : Retourne la valeur de la propriété avec un nom de propriété.
- {{domxref("CSSStyleDeclaration.item()")}}
  - : Retourne un nom de propriété.
- {{domxref("CSSStyleDeclaration.removeProperty()")}}
  - : Supprime une propriété du bloc de déclaration CSS.
- {{domxref("CSSStyleDeclaration.setProperty()")}}
  - : Modifie une propriété CSS existante ou crée une nouvelle propriété CSS dans le bloc de déclaration.
- {{domxref("CSSStyleDeclaration.getPropertyCSSValue()")}} {{deprecated_inline}}
  - : Uniquement supporté via getComputedStyle dans Firefox. Retourne la valeur de la propriété en tant que {{domxref("CSSPrimitiveValue")}} ou `null` pour les [propriétés raccourcies](/fr/docs/Web/CSS/Propriétés_raccourcies).

## Exemple

```js
var objStyle = document.styleSheets[0].cssRules[0].style;
console.log(objStyle.cssText);

for (var i = objStyle.length; i--;) {
  var chaineNom = objStyle[i];
  objStyle.removeProperty(chaineNom);
}

console.log(objStyle.cssText);
```

## Notes

Le bloc de déclaration est la partie de la règle de mise en forme qui apparaît dans les accolades et qui fournit les définitions de mise en forme (pour le sélecteur, la partie qui précède les accolades).

## Voir aussi

- [Référence des propriétés CSS](/fr/docs/Web/CSS/CSS_Properties_Reference)

## Spécifications

| Spécification                                                                                                    | Statut                           | Commentaire          |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('CSSOM', '#the-cssstyledeclaration-interface', 'CSSStyleDeclaration')}}     | {{Spec2('CSSOM')}}         |                      |
| {{SpecName('DOM2 Style', 'css.html#CSS-CSSStyleDeclaration', 'CSSPrimitiveValue')}} | {{Spec2('DOM2 Style')}} | Définition initiale. |
