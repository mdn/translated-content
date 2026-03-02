---
title: "Text : méthode splitText()"
short-title: splitText()
slug: Web/API/Text/splitText
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("DOM")}}

La méthode **`splitText()`** de l'interface {{DOMxRef("Text")}} divise le nœud {{DOMxRef("Text")}} en deux nœuds à l'indice défini, en gardant les deux nœuds dans l'arbre en tant que voisins.

Après la séparation, le nœud actuel contient tout le contenu jusqu'à l'indice défini, et un nœud nouvellement créé du même type contient le texte restant. Le nœud nouvellement créé est retourné à l'appelant. Si le nœud original avait un parent, le nouveau nœud est inséré en tant que voisin suivant du nœud original. Si l'indice est égal à la longueur du nœud original, le nœud nouvellement créé ne contient pas de données.

Les nœuds texte séparés peuvent être concaténés en utilisant la méthode {{DOMxRef("Node.normalize()")}}.

## Syntaxe

```js-nolint
splitText(offset)
```

### Paramètres

- `offset`
  - : L'indice juste avant lequel le nœud texte doit être coupé.

### Valeur de retour

Retourne le nœud {{DOMxRef("Text")}} nouvellement créé qui contient le texte après l'indice défini.

### Exceptions

- `IndexSizeError` {{DOMxRef("DOMException")}}
  - : Levée si l'indice défini est négatif ou supérieur au nombre d'unités 16 bits dans le texte du nœud.
- `NoModificationAllowedError` {{DOMxRef("DOMException")}}
  - : Levée si le nœud est en lecture seule.

## Exemples

Dans cet exemple, le texte d'un élément HTML {{HTMLElement("p")}} est séparé en deux nœuds texte et un élément HTML {{HTMLElement("u")}} est inséré entre les deux.

```html
<p>tototata</p>
```

```js
const p = document.querySelector("p");

// Récupère le contenu de <p> en tant que nœud texte
const toto = p.firstChild;

// Sépare 'tototata' en deux nœuds texte, 'toto' et 'tata',
// et stocke 'tata' dans une constante
const tata = toto.splitText(4);

// Crée un élément <u> contenant « nouveau contenu »
const u = document.createElement("u");
u.appendChild(document.createTextNode(" nouveau contenu "));

// Ajoute <u> avant 'tata'
p.insertBefore(u, tata);

// Le résultat est : <p>toto<u> nouveau contenu </u>tata</p>
```

{{EmbedLiveSample("Exemples", 700, 70)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("Text")}} à laquelle cette méthode appartient.
- La méthode opposée&nbsp;: {{DOMxRef("Node.normalize")}}.
