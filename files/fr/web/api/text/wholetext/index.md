---
title: "Text : propriété wholeText"
short-title: wholeText
slug: Web/API/Text/wholeText
l10n:
  sourceCommit: eebedad55b4974c4cebdc7c82a8dfddeeffb0ea6
---

{{APIRef("DOM")}}

La propriété en lecture seule **`wholeText`** de l'interface {{DOMxRef("Text")}} retourne le texte complet de tous les nœuds {{DOMxRef("Text")}} logiquement adjacents au nœud. Le texte est concaténé dans l'ordre du document. Cela permet de définir n'importe quel nœud de texte et d'obtenir tout le texte adjacent sous forme d'une seule chaîne de caractères.

> [!NOTE]
> Cela revient à appeler {{DOMxRef("Node.normalize()")}} puis à lire la valeur du texte, mais sans modifier l'arbre.

## Valeur

Une chaîne de caractères contenant le texte concaténé.

## Exemple

Supposons que vous ayez le paragraphe suivant dans votre page web&nbsp;:

```html
<p>
  La grande randonnée, c'est génial&nbsp;!
  <strong>Pas de réseaux sociaux insipides&nbsp;!</strong> Cependant,
  <a href="https://fr.wikipedia.org/wiki/Escalade">faire de l'escalade</a>
  est compliqué.
</p>
```

Vous décidez que vous n'aimez pas la phrase du milieu, donc vous la supprimez&nbsp;:

```js
const paragraph = document.querySelector("p"); // Lit le paragraphe
paragraph.removeChild(paragraph.childNodes[1]); // Supprime l'élément strong
```

Vous obtenez alors&nbsp;: _«&nbsp;La grande randonnée, c'est génial&nbsp;! Cependant, faire de l'escalade est compliqué.&nbsp;»_, avec deux nœuds avant le lien hypertexte&nbsp;:

1. Un objet {{DOMxRef("Text")}} contenant la chaîne de caractères «&nbsp;La grande randonnée, c'est génial&nbsp;!&nbsp;»
2. Un second nœud `Text` contenant la chaîne de caractères «&nbsp; Cependant, &nbsp;»

Pour obtenir ces deux nœuds en une seule fois, vous pouvez appeler `paragraph.childNodes[0].wholeText`&nbsp;:

```js
console.log(`'${paragraph.childNodes[0].wholeText}'`); // 'La grande randonnée, c'est génial&nbsp;!   Cependant, '
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("Text")}} à laquelle elle appartient.
