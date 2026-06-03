---
title: "HTMLMetaElement : propriété name"
short-title: name
slug: Web/API/HTMLMetaElement/name
l10n:
  sourceCommit: d9b6cad3b5e14b42061608fb5283e32c75808a3d
---

{{APIRef("HTML DOM")}}

La propriété **`name`** de l'interface {{DOMxRef("HTMLMetaElement")}} est utilisée en combinaison avec {{DOMxRef("HTMLMetaElement.content")}} pour définir les paires nom-valeur des métadonnées d'un document.
L'attribut `name` définit le nom de la métadonnée et l'attribut `content` définit la valeur.

## Valeur

Une chaîne de caractères.

## Exemples

### Lecture du nom de métadonnée d'un élément `meta`

L'exemple suivant interroge le premier élément `<meta>` d'un document.
La valeur de `name` est affichée dans la console, montrant que des [mots-clés](/fr/docs/Web/HTML/Reference/Elements/meta/name#noms_de_méta_définis_dans_la_spécification_html) ont été spécifiés pour le document&nbsp;:

```js
// avec <meta name="keywords" content="documentation, HTML, web technologies">
const meta = document.querySelector("meta");
console.log(meta.name);
// "keywords"
```

### Création d'un élément `meta` avec la métadonnée `author`

L'exemple suivant crée un nouvel élément `<meta>` avec un attribut `name` défini sur [`author`](/fr/docs/Web/HTML/Reference/Elements/meta/name#noms_de_méta_définis_dans_la_spécification_html).
L'attribut `content` définit l'auteur·ice du document et l'élément est ajouté à l'élément `<head>` du document&nbsp;:

```js
let meta = document.createElement("meta");
meta.name = "author";
meta.content = "Franz Kafka";
document.head.appendChild(meta);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("meta")}}
- [Valeurs possibles pour l'attribut name](/fr/docs/Web/HTML/Reference/Elements/meta/name#noms_de_méta_définis_dans_la_spécification_html)
