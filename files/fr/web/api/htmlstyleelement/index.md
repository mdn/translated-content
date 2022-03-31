---
title: style
slug: Web/API/HTMLStyleElement
tags:
  - Référence_du_DOM_Gecko
translation_of: Web/API/HTMLStyleElement
---
{{ ApiRef() }}

### Notes

Consultez les pages suivantes pour plus d'informations sur certains des objets utilisés pour manipuler les propriétés CSS depuis le DOM&nbsp;:

- [L'objet DOM element.style](fr/DOM/element.style)
- [L'objet DOM stylesheet](fr/DOM/stylesheet)
- [L'objet DOM cssRule](fr/DOM/cssRule)
- [La liste des propriétés DOM CSS](fr/DOM/CSS)

### Informations à déplacer vers d'autres pages

L'objet basique `style` explose les interfaces `StyleSheet` et `CSSStyleSheet` de la spécification
_DOM Level 2 Style_
. Ces interfaces contiennent des membres comme `insertRule`, `selectorText`, et `parentStyleSheet` permettant d'accéder et de manipuler les règles de style individuelles qui constituent une feuille de style CSS.

Pour obtenir les objets `style` depuis un objet `document`, il est possible d'utiliser la propriété `document.styleSheets` et d'accéder aux objets individuels par un index (par exemple, `document.styleSheets{{ mediawiki.external(0) }}` est la première feuille de style définie pour le document, et ainsi de suite). Bien qu'il existe plusieurs syntaxes pour exprimer les feuilles de style d'un document, les navigateurs basés sur Mozilla gèrent uniquement CSS. Par conséquent, l'objet `style` récupéré depuis ce tableau implémente à la fois les interfaces StyleSheet et CSSStyleSheet.

    var ss = document.styleSheets[1];
    ss.cssRules[0].style.backgroundColor="blue";

La liste des propriétés disponibles dans le DOM pour la propriété de style est donnée dans la [liste des propriétés DOM CSS](fr/DOM/CSS).

La propriété [style](fr/DOM/style) de l'élément peut également être utilisée pour obtenir et définir les styles d'un élément. Cependant, cette propriété renvoie uniquement les attributs de style qui ont été définis
_in-line_
ou directement sur cet élément à l'aide de `element.style.propertyName` (par exemple `<td style="background-color: lightblue">` renvoie la chaîne "background-color:lightblue", même si d'autres styles peuvent s'appliquer à l'élément depuis une feuille de style).

De plus, lorsque cette propriété est définie sur un élément, elle écrase et efface tout style qui peut avoir été défini ailleurs pour cette propriété particulière de l'élément. Par exemple, définir la propriété `border` écrasera les réglages définis ailleurs pour la propriété `border` de cet élément dans la section `head` du document ou dans des feuilles de style externes. Cependant, cela n'affectera pas les autres déclarations de propriétés pour les styles de cet élément, comme `padding`, `margin` ou `font` par exemple.

Pour changer le style d'un élément particulier, l'exemple suivant peut être adapté&nbsp;:

```html
<html>
<head>
<title>exemple de style simple</title>

<script type="text/javascript">

function alterStyle(elem) {
  elem.style.background = 'green';
}

function resetStyle(elemId) {
  elem = document.getElementById(elemId);
  elem.style.background = 'white';
}
</script>

<style type="text/css">
#p1 {
 border: solid blue 2px;
}
</style>
</head>

<body>

<!-- passe une référence à l'objet de l'élément comme paramètre 'this'. -->
<p id="p1" onclick="alterStyle(this)";>
 Cliquez ici pour changer la couleur de fond. </p>

<!-- passe l'id 'p1' d'un autre style de l'élément à modifier. -->
<button onclick="resetStyle('p1');">Réinitialiser la couleur de fond</button>

</body>
</html>
```

La méthode `getComputedStyle()` de l'objet `document.defaultView` renvoie tous les styles qui ont finalement été calculés pour un élément. Consultez l'[exemple 6 : getComputedStyle](fr/R%c3%a9f%c3%a9rence_du_DOM_Gecko/Exemples#Exemple_6_:_getComputedStyle) dans le chapitre des exemples pour plus d'informations sur l'utilisation de cette méthode.

### L'objet DOM style

L'objet `style` représente une règle de style individuelle. Contrairement aux règles individuelles disponibles depuis la collection [`document.styleSheets`](fr/DOM/document.styleSheets), on accède à l'objet depuis l'objet `document` ou depuis les éléments auxquels ce style est appliqué. Il représente les styles
_in-line_
d'un élément particulier.

Mais il y a plus important que les deux propriétés exposées ici, c'est l'utilisation de l'objet `style` pour définir des propriétés de style individuelles sur un élément&nbsp;:

    <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
      "http://www.w3.org/TR/html4/loose.dtd">
    <html>
     <head>
      <title>style Property Example</title>
      <link rel="StyleSheet" href="example.css" type="text/css">
      <script type="text/javascript">
        function stilo()
        {
          document.getElementById("d").style.color = "orange";
        }
      </script>
     </head>

     <body>
      <div id="d" class="thunder">Thunder</div>
      <button onclick="stilo()">ss</button>
     </body>
    </html>

Les attributs **media** et **type** du style peuvent être donnés ou non. Notez qu'il est également possible de changer les styles d'un élément en obtenant une référence vers cet élément et en utilisant ensuite sa méthode DOM [setAttribute()](fr/DOM/element.setAttribute) pour spécifier à la fois la propriété CSS et sa valeur.

    var el = document.getElementById("un-element");
    el.setAttribute("style", "background-color:darkblue;");

Soyez cependant conscient que `setAttribute` écrasera toute propriété de style qui pourrait déjà avoir été définie dans l'objet style de cet élément. Si l'élément «&nbsp;un-element&nbsp;» ci-dessus avait déjà un attribut indiquant par exemple `style="font-size: 18px"`, cette valeur serait supprimée par l'utilisation de `setAttribute`.

##### Propriétés

- [style.media](fr/DOM/style.media)
  - : spécifie le média de destination pour lequel l'information de style est prévue.
- [style.type](fr/DOM/style.type)
  - : renvoie le type de style appliqué par cette règle.
