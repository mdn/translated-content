---
title: "Element : propriété attributes"
short-title: attributes
slug: Web/API/Element/attributes
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{APIRef("DOM")}}

La propriété **`attributes`** de l'interface {{DOMxRef("Element")}} retourne une collection dynamique de tous les nœuds d'attribut enregistrés pour le nœud défini. Il s'agit d'un objet {{DOMxRef("NamedNodeMap")}}, et non d'un tableau (`Array`), donc il n'a pas de méthodes {{JSxRef("Array")}} et les index des nœuds {{DOMxRef("Attr")}} peuvent différer selon les navigateurs. Plus précisément, `attributes` est une paire clé/valeur de chaînes de caractères représentant toutes les informations concernant cet attribut.

## Valeur

Un objet {{DOMxRef("NamedNodeMap")}}.

## Exemples

### Exemples simples

```js
// Récupère le premier élément <p> du document
const paragraphe = document.querySelector("p");
const attributs = paragraphe.attributes;
```

### Énumérer les attributs d'éléments

Vous pouvez énumérer les attributs d'un élément en utilisant [`for…of`](/fr/docs/Web/JavaScript/Reference/Statements/for...of).
L'exemple suivant parcourt les nœuds d'attribut de l'élément du document avec l'ID «&nbsp;paragraphe&nbsp;» et imprime la valeur de chaque attribut.

```html
<p id="paragraphe" class="vert" contenteditable>Exemple de paragraphe</p>
<input
  type="button"
  value="Afficher le nom et la valeur de l'attribut du paragraphe" />
<pre id="resultat"></pre>
```

```css
.vert {
  color: green;
}
```

```js
const paragraphe = document.getElementById("paragraphe");
const resultat = document.getElementById("resultat");
const btn = document.querySelector("input[type='button']");

btn.addEventListener("click", () => {
  // Tout d'abord, vérifions que le paragraphe comporte bien certains attributs
  if (paragraphe.hasAttributes()) {
    let sortie = "Attributs du premier paragraphe :\n";
    for (const attr of paragraphe.attributes) {
      sortie += `${attr.name} -> ${attr.value}\n`;
    }
    resultat.textContent = sortie;
  } else {
    resultat.textContent = "Aucun attribut à afficher";
  }
});
```

{{EmbedLiveSample("Énumérer les attributs d'éléments", 100, 300)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("NamedNodeMap")}} de l'objet retourné
- Considérations de compatibilité entre navigateurs&nbsp;: sur [le mode <i lang="en">quirks</i> <sup>(angl.)</sup>](https://www.quirksmode.org/dom/w3c_core.html#attributes)
