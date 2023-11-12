---
title: HTMLElement.style
slug: Web/API/HTMLElement/style
---

{{APIRef("CSSOM")}}

La propriété en lecture seule **`style`** renvoie le style _en incise_ d'un élément sous la forme d'un objet [`CSSStyleDeclaration`](/fr/docs/Web/API/CSSStyleDeclaration) contenant une liste de l'ensemble des propriétés de style pour cet élément dont les valeurs sont celles des attributs défini par [l'attribut HTML `style`](/fr/docs/Web/HTML/Global_attributes/style).

> **Note :** Voir [la référence des propriétés CSS](/fr/docs/Web/CSS/CSS_Properties_Reference) pour une liste des propriétés CSS accessibles `style`. La propriété `style` possède la même priorité (la plus haute) dans la cascade que les déclarations de mise en forme effectuées en incise avec l'attribut `style`.

## Valeur

Un objet [`CSSStyleDeclaration`](/fr/docs/Web/API/CSSStyleDeclaration) avec les propriétés suivantes&nbsp;:

- marqueur calculé
  - : Non placé.
- Règle CSS parente
  - : Nulle.
- Nœud propriétaire
  - : `this`

## Définir les styles

Bien que cette propriété soit en lecture seule, il est possible de définir une mise en forme en affectant directement une chaîne de caractères à la propriété `style`. Dans ce cas, la chaîne de caractères est transmie à [`CSSStyleDeclaration.cssText`](/fr/docs/Web/API/CSSStyleDeclaration/cssText). Utiliser `style` de cette manière écrasera toute mise en forme déclarée en incise sur l'élément.

Aussi, pour ajouter des règles de mise en forme à un élément sans modifier les autres valeurs, mieux vaudra définir les propriétés individuelles sur l'objet [`CSSStyleDeclaration`](/fr/docs/Web/API/CSSStyleDeclaration). Par exemple en utilisant `element.style.backgroundColor = "red"`.

Une déclaration de style est réinitialisée lorsqu'on lui affecte `null` ou la chaîne vide (par exemple `elt.style.color = null`).

### Obtenir les informations de style

La propriété `style` n'est pas utile pour tout savoir des styles appliqués à l'élément, car elle ne représente que les déclarations CSS appliquées à l'élément via l'attribut HTML `style` et pas celles provenant d'autres sources (comme [`<head>`](/fr/docs/Web/HTML/Element/head) ou surtout les feuilles de styles externes). Pour obtenir l'ensemble des propriétés CSS d'un élément, il faudra plutôt utiliser [`Window.getComputedStyle()`](/fr/docs/Web/API/Window/getComputedStyle).

Le fragment de code qui suit illustre la différence entre les valeurs obtenues avec la propriété `style` et celles obtenues avec la méthode `getComputedStyle()`&nbsp;:

```html
<!doctype html>
<html>
  <body style="font-weight:bold;">
    <div style="color:red" id="monElement">..</div>
  </body>
</html>
```

```js
let element = document.getElementById("monElement");
let out = "";
let elementStyle = element.style;
let computedStyle = window.getComputedStyle(element, null);

for (prop in elementStyle) {
  if (elementStyle.hasOwnProperty(prop)) {
    out +=
      "  " +
      prop +
      " = '" +
      elementStyle[prop] +
      "' > '" +
      computedStyle[prop] +
      "'\n";
  }
}
console.log(out);
```

Le résultat devrait ressembler à&nbsp;:

```
...
fontWeight = '' > 'bold'
color = 'red' > 'rgb(255, 0, 0)'
...
```

On notera la présence de la valeur `bold` pour `font-weight` dans le style calculé et son absence dans la propriété `style` de l'élément.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les informations de mise en forme dynamiques](/fr/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
