---
title: "Element : méthode getBoundingClientRect()"
short-title: getBoundingClientRect()
slug: Web/API/Element/getBoundingClientRect
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{APIRef("DOM")}}

La méthode **`getBoundingClientRect()`** de l'interface {{DOMxRef("Element")}} retourne un objet {{DOMxRef("DOMRect")}} fournissant des informations sur la taille d'un élément et sa position relative par rapport à la {{Glossary("Viewport", "zone d'affichage")}}.

## Syntaxe

```js-nolint
getBoundingClientRect()
```

### Paramètres

Aucun.

### Valeur de retour

La valeur retournée est un objet {{DOMxRef("DOMRect")}} qui est le plus petit rectangle contenant l'ensemble de l'élément, y compris son padding et sa bordure. Les propriétés `left`, `top`, `right`, `bottom`, `x`, `y`, `width` et `height` décrivent la position et la taille du rectangle global en pixels. Les propriétés autres que `width` et `height` sont relatives au coin supérieur gauche de la zone d'affichage.

![Un objet DOMRect qui est le plus petit rectangle contenant l'élément entièrement.](element-box-diagram.png)

Les propriétés `width` et `height` de l'objet {{DOMxRef("DOMRect")}} retourné par la méthode inclut le remplissage (`padding`) et la largeur de la bordure (`border-width`), pas seulement la largeur/hauteur du contenu. Dans le modèle de boîte standard, cela correspond à la propriété `width` ou `height` de l'élément + `padding` + `border-width`. Mais si [`box-sizing: border-box`](/fr/docs/Web/CSS/Reference/Properties/box-sizing) est défini pour l'élément, cela correspond directement à sa propriété `width` ou `height`.

La valeur retournée peut être considérée comme l'union des rectangles retournés par {{DOMxRef("Element.getClientRects", "getClientRects()")}} pour l'élément, c'est-à-dire les boîtes de bordure CSS associées à l'élément.

Les boîtes de bordure vides sont entièrement ignorées. Si toutes les boîtes de bordure des éléments sont vides, alors un rectangle est retourné avec une largeur (`width`) et une hauteur (`height`) de zéro et où le haut (`top`) et la gauche (`left`) correspondent au coin supérieur gauche de la boîte de bordure pour la première boîte CSS (dans l'ordre du contenu) de l'élément.

La quantité de défilement effectuée dans la zone d'affichage (ou tout autre élément défilable) est prise en compte lors du calcul du rectangle de délimitation. Cela signifie que les bords du rectangle (`top`, `right`, `bottom`, `left`) changent de valeur à chaque fois que la position de défilement change (car leurs valeurs sont relatives à la zone d'affichage et non absolues).

Si vous avez besoin du rectangle de délimitation par rapport au coin supérieur gauche du document, il suffit d'ajouter la position de défilement actuelle aux propriétés `top` et `left` (celles-ci peuvent être obtenues en utilisant {{DOMxRef("window.scrollY")}} et {{DOMxRef("window.scrollX")}}) pour obtenir un rectangle de délimitation indépendant de la position de défilement actuelle.

## Exemples

### Simple

Ce simple exemple récupère l'objet `DOMRect` représentant le rectangle de délimitation dans le client d'un simple élément `<div>`, et affiche ses propriétés dessous.

```html
<div></div>
```

```css
div {
  width: 400px;
  height: 200px;
  padding: 20px;
  margin: 50px auto;
  background: purple;
}
```

```js
let elem = document.querySelector("div");
let rect = elem.getBoundingClientRect();
for (const key in rect) {
  if (typeof rect[key] !== "function") {
    let para = document.createElement("p");
    para.textContent = `${key} : ${rect[key]}`;
    document.body.appendChild(para);
  }
}
```

{{EmbedLiveSample("Exemples", "100%", 640)}}

Notez comme les `width`/`height` sont égales à `width`/`height` + `padding`.

Notez aussi que les valeurs de `x`/`left`, `y`/`top`, `right`, et `bottom` sont égales à la distance absolue depuis le bord de la zone d'affichage jusqu'au coté de l'element dans chaque cas.

### Défilement

Cet exemple montre comment le rectangle de délimitation du client évolue lorsque le document défile.

```html
<div id="exemple"></div>
<div id="controles"></div>
```

```css
div#exemple {
  width: 400px;
  height: 200px;
  padding: 20px;
  margin: 50px auto;
  background: purple;
}

body {
  padding-bottom: 1000px;
}
p {
  margin: 0;
}
```

```js
function actualiser() {
  const conteneur = document.getElementById("controles");
  const elem = document.getElementById("exemple");
  const rect = elem.getBoundingClientRect();

  conteneur.textContent = "";
  for (const key in rect) {
    if (typeof rect[key] !== "function") {
      let para = document.createElement("p");
      para.textContent = `${key} : ${rect[key]}`;
      conteneur.appendChild(para);
    }
  }
}

document.addEventListener("scroll", actualiser);
actualiser();
```

{{EmbedLiveSample("Défilement", "100%", 640)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Element.getClientRects", "getClientRects()")}}
