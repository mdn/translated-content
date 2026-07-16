---
title: Séparateur d'espace de noms
slug: Web/CSS/Reference/Selectors/Namespace_separator
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Le **séparateur d'espace de noms** (`|`) sépare le sélecteur de l'espace de noms, identifiant {{Glossary("namespace", "l'espace de noms")}}, ou son absence, pour un sélecteur de type.

```css
/* Liens dans l'espace de noms nommé monespaceDeNom */
monespaceDeNom|a {
  font-weight: bold;
}
/* paragraphes dans n'importe quel espace de noms (y compris aucun espace de noms) */
*|p {
  color: darkblue;
}
/* titres de niveau 2 en dehors de tout espace de noms */
|h2 {
  margin-bottom: 0;
}
```

[Les sélecteurs de type](/fr/docs/Web/CSS/Reference/Selectors/Type_selectors) et le [sélecteur universel](/fr/docs/Web/CSS/Reference/Selectors/Universal_selectors) permettent un composant d'espace de noms optionnel. Lorsqu'un espace de noms a été déclaré précédemment avec {{CSSxRef("@namespace")}}, ces sélecteurs peuvent être associés à un espace de noms en ajoutant le nom de l'espace de noms devant le sélecteur, séparé par le séparateur d'espace de noms (`|`). Cela est utile lorsque vous travaillez avec des documents contenant plusieurs espaces de noms, comme HTML avec SVG ou MathML intégré, ou XML qui mélange plusieurs vocabulaires.

- `ns|h1` - cible les éléments `<h1>` dans l'espace de noms `ns`
- `*|h1` - cible tous les éléments `<h1>`
- `|h1` - cible tous les éléments `<h1>` en dehors de tout espace de noms déclaré ou implicite

## Syntaxe

```css
namespace|element {
  /* propriétés de style */
}
```

## Exemples

Par défaut, tous les éléments dans un élément HTML ou SVG ont un espace de noms, car les espaces de noms `http://www.w3.org/1999/xhtml` et `http://www.w3.org/2000/svg` sont implicites. La méthode {{DOMxRef("document.createElementNS")}}, avec une chaîne de caractères vide pour le paramètre d'espace de noms, peut être utilisée pour créer des éléments sans compartimentation.

### Exemple d'espace de noms nommé

Dans cet exemple, tous les éléments sont dans un espace de noms.

#### HTML

Aucun espace de noms n'est explicitement déclaré dans le HTML ou dans le SVG.

```html
<p>Ce paragraphe <a href="#">contient un lien</a>.</p>

<svg width="400" viewBox="0 0 400 20">
  <a href="#">
    <text x="0" y="15">Lien créé dans SVG</text>
  </a>
</svg>
```

#### CSS

Le CSS déclare deux espaces de noms, puis attribue des styles aux liens globalement (`a`), aux liens sans espace de noms (`|a`), aux liens dans n'importe quel espace de noms ou sans espace de noms (`*|a`), puis à deux espaces de noms nommés différents (`espaceNommeSvg|a` et `espaceNommeHtml|a`).

```css
@namespace espaceNommeSvg url("http://www.w3.org/2000/svg");
@namespace espaceNommeHtml url("http://www.w3.org/1999/xhtml");
/* Tous les `<a>` dans l'espace de noms par défaut, dans ce cas, tous les `<a>` */
a {
  font-size: 1.4rem;
}
/* aucun espace de noms */
|a {
  text-decoration: wavy overline lime;
  font-weight: bold;
}
/* tous les espaces de noms (y compris aucun espace de noms) */
*|a {
  color: red;
  fill: red;
  font-style: italic;
}
/* uniquement l'espace de noms espaceNommeSvg, qui est le contenu <svg> */
espaceNommeSvg|a {
  color: green;
  fill: green;
}
/* L'espace de noms espaceNommeHtml, qui est le document HTML */
espaceNommeHtml|a {
  text-decoration-line: line-through;
}
```

#### Résultat

{{EmbedLiveSample("Exemple d'espace de noms nommé", "100%", 100)}}

Le sélecteur `|a`, un lien qui n'est pas dans un espace de noms, ne correspond à aucun lien. En HTML, l'espace de noms `http://www.w3.org/1999/xhtml` est implicite, ce qui signifie que tout HTML est dans un espace de noms, même si aucun n'est explicitement déclaré. En SVG, même s'il n'est pas explicitement défini, l'espace de noms `http://www.w3.org/2000/svg` est aussi implicite. Cela signifie que tout le contenu est dans au moins un espace de noms.

### Espace de noms par défaut et absence d'espace de noms

Dans cet exemple, nous utilisons JavaScript pour créer un élément sans espace de noms et l'ajouter au document. Nous définissons l'espace de noms SVG comme espace de noms par défaut en définissant l'espace de noms non nommé avec `@namespace`.

> [!NOTE]
> Si un espace de noms par défaut, ou non nommé, est défini, les sélecteurs universels et de type s'appliquent uniquement aux éléments dans cet espace de noms.

#### HTML

Aucun espace de noms n'est explicitement déclaré dans le HTML ou dans le SVG.

```html
<p><a href="#">Un lien</a> dans l'espace de noms HTML implicite.</p>

<svg width="400" viewBox="0 0 400 20">
  <a href="#">
    <text x="0" y="15">Lien créé dans l'espace de noms SVG</text>
  </a>
</svg>
```

#### JavaScript

Avec JavaScript, avec {{DOMxRef("document.createElementNS")}}, nous créons un lien d'ancrage sans espace de noms, puis nous ajoutons le lien.

```js
// créer un lien d'ancrage 'sans espace de noms'
const a = document.createElementNS("", "a");
a.href = "#";
a.appendChild(document.createTextNode("Lien créé sans espace de noms"));

document.body.appendChild(a);
```

#### CSS

Nous déclarons un espace de noms avec {{CSSxRef("@namespace")}}. En omettant le nom pour l'espace de noms, la déclaration `@namespace` crée un espace de noms par défaut.

```css
/* En omettant un nom, cela définit SVG comme espace de noms par défaut */
@namespace url("http://www.w3.org/2000/svg");

/* `<a>` dans l'espace de noms par défaut (défini sur SVG) */
a {
  font-size: 1.4rem;
}

/* `<svg>` et `<p>` dans l'espace de noms par défaut (défini sur SVG) */
svg,
p {
  border: 5px solid gold;
}

/* liens en dehors de tout espace de noms */
|a {
  text-decoration: wavy underline purple;
  font-weight: bold;
}

/* liens avec n'importe quel espace de noms ou aucun espace de noms */
*|a {
  font-style: italic;
  color: magenta;
  fill: magenta;
}
```

#### Résultat

{{EmbedLiveSample("Espace de noms par défaut et absence d'espace de noms", "100%", 100)}}

Le sélecteur sans séparateur d'espace de noms, le `a`, ne correspond qu'aux éléments `<a>` SVG, car SVG a été défini comme espace de noms par défaut.

Le sélecteur sans espace de noms, le `|a`, correspond au `<a>` défini et ajouté par JavaScript, car ce nœud est le seul qui n'a pas d'espace de noms par défaut.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La règle {{CSSxRef("@namespace")}}
- La méthode {{DOMxRef("Document.createElementNS()")}}
- La propriété {{DOMxRef("Element.namespaceURI")}}
- [Sélecteur de type CSS](/fr/docs/Web/CSS/Reference/Selectors/Type_selectors)
- [Sélecteur universel CSS](/fr/docs/Web/CSS/Reference/Selectors/Universal_selectors)
- Le module [de sélecteurs CSS](/fr/docs/Web/CSS/Guides/Selectors)
