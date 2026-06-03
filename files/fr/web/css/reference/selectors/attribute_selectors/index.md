---
title: Sélecteurs d'attribut
slug: Web/CSS/Reference/Selectors/Attribute_selectors
l10n:
  sourceCommit: ff4dc3d43e814614df60ecdb7376b59698660ac2
---

Un **sélecteur d'attribut** CSS permet de cibler des éléments en fonction de la présence d'un attribut donné, avec des options pour définir une correspondance exacte de valeur ou une correspondance de sous-chaîne.

```css
/* Les éléments <a> avec un attribut title */
a[title] {
  color: purple;
}

/* Les éléments <a> avec un href qui correspond à "https://example.org" */
a[href="https://example.org"] {
  color: green;
}

/* Les éléments <a> dont href contient "example" */
a[href*="example"] {
  font-size: 2em;
}

/* Les éléments <a> dont href finit par ".org" */
a[href$=".org"] {
  font-style: italic;
}

/* Les éléments <a> dont l'attribut class contient le mot logo comportement identique à a.logo */
a[class~="logo"] {
  padding: 2px;
}
```

## Syntaxe

- `[attr]`
  - : Permet de cibler un élément qui possède un attribut `attr`.
- `[attr=valeur]`
  - : Permet de cibler un élément qui possède un attribut `attr` dont la valeur est exactement `valeur`.
- `[attr~=valeur]`
  - : Permet de cibler un élément qui possède un attribut `attr` dont la valeur est `valeur`. Cette forme permet de fournir une liste de valeurs, séparées par des blancs, à tester. Si au moins une de ces valeurs est égale à celle de l'attribut, l'élément sera ciblé.
- `[attr|=valeur]`
  - : Permet de cibler un élément qui possède un attribut `attr` dont la valeur est exactement `valeur` ou dont la valeur commence par `valeur` suivi immédiatement d'un tiret (U+002D). Cela peut notamment être utilisé pour effectuer des correspondances avec des codes de langues.
- `[attr^=valeur]`
  - : Permet de cibler un élément qui possède un attribut `attr` dont la valeur commence par `valeur`.
- `[attr$=valeur]`
  - : Permet de cibler un élément qui possède un attribut `attr` dont la valeur se termine par `valeur`.
- `[attr*=valeur]`
  - : Permet de cibler un élément qui possède un attribut `attr` et dont la valeur contient au moins une occurrence de `valeur` dans la chaîne de caractères.
- `[attr operateur valeur i]`
  - : On peut ajouter un `i` (ou `I`) avant le crochet de fin. Dans ce cas, la casse ne sera pas prise en compte (pour les caractères contenus sur l'intervalle ASCII).
- `[attr operateur valeur s]`
  - : Ajouter un `s` (ou `S`) avant le crochet fermant permettra d'effectuer une comparaison de valeur sensible à la casse (pour les caractères ASCII).

### Valeurs

- `<attr>`
  - : Un identifiant ({{CSSxRef("ident")}}), c'est-à-dire le nom non cité de l'attribut. Cela peut être n'importe quel attribut valide selon le langage (SVG, HTML, XML, etc), un [attribut `data-*`](/fr/docs/Web/HTML/Reference/Global_attributes/data-*), ou un attribut créé par l'auteur·ice.
- `<value>`
  - : Un identifiant ({{CSSxRef("ident")}}) ou une chaîne de caractères ({{CSSxRef("string")}}), représentant la valeur de l'attribut. La valeur doit être placée entre guillemets si elle contient des espaces ou des caractères spéciaux.
- `s` ou `i`
  - : Indicateur de sensibilité ou d'insensibilité à la casse. Si inclus avant le crochet fermant (`]`), rend la valeur sensible ou insensible à la casse, quel que soit le langage de balisage.

## Description

La sensibilité à la casse des noms et des valeurs d'attribut dépend du langage du document. En HTML, les noms d'attributs ne sont pas sensibles à la casse, tout comme les valeurs {{Glossary("enumerated", "énumérées")}} définies par la spécification. Les [valeurs d'attribut HTML insensibles à la casse <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/semantics-other.html#case-sensitivity-of-selectors) sont listées dans la spécification HTML. Pour ces attributs, la valeur de l'attribut dans le sélecteur n'est pas sensible à la casse, que la valeur soit invalide ou que l'attribut de l'élément sur lequel il est défini soit invalide.

Si la valeur de l'attribut est sensible à la casse, comme les attributs [`class`](/fr/docs/Web/HTML/Reference/Global_attributes/class), [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id) et [`data-*`](/fr/docs/Web/HTML/Reference/Global_attributes/data-*), la correspondance de la valeur du sélecteur d'attribut est sensible à la casse. Les attributs définis en dehors de la spécification HTML, comme [`role`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles) et les attributs [`aria-*`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes), sont également sensibles à la casse. Les sélecteurs d'attributs sensibles à la casse peuvent être rendus insensibles à la casse en incluant le modificateur d'insensibilité à la casse (`i`).

## Exemples

### Liens

#### CSS

```css
a {
  color: blue;
}

/* Liens internes commençant avec "#" */
a[href^="#"] {
  background-color: gold;
}

/* Liens avec "example" n'importe où dans l'URL */
a[href*="example"] {
  background-color: silver;
}

/* Liens avec "insensitive" n'importe où dans l'URL,
   quelle que soit la casse */
a[href*="insensitive" i] {
  color: cyan;
}

/* Liens avec "cAsE" n'importe où dans l'URL,
   et avec cette casse donnée.*/
a[href*="cAsE" s] {
  color: pink;
}

/* Liens qui finissent ".org" */
a[href$=".org"] {
  color: red;
}

/* Liens qui commencent par "https://" et finissent par ".org" */
a[href^="https://"][href$=".org"] {
  color: green;
}
```

#### HTML

```html
<ul>
  <li><a href="#internal">Lien interne<a></li>
  <li><a href="http://example.com">Lien d'exemple</a></li>
  <li><a href="#InSensitive">Lien interne insensible à la casse</a></li>
  <li><a href="http://example.org">Lien vers example.org</a></li>
  <li><a href="https://example.org">Lien vers example https org</a></li>
</ul>
```

#### Résultat

{{EmbedLiveSample("Liens")}}

### Langues

#### CSS

```css
/* Tous les éléments divs avec un attribut `lang` seront en gras. */
div[lang] {
  font-weight: bold;
}

/* Tous les divs sans attribut `lang` seront en italique. */
div:not([lang]) {
  font-style: italic;
}

/* Tous les divs en anglais américains seront bleus. */
div[lang~="en-us"] {
  color: blue;
}

/* Tous les divs en portugais seront verts. */
div[lang="pt"] {
  color: green;
}

/* Tous les divs en chinois seront rouges (chinois
   simplifié (zh-CN) ou traditionnel (zh-TW). */
div[lang|="zh"] {
  color: red;
}

/* Tous les divs en chinois traditionnels pour l'attribut
   `data-lang` seront violet. */
/* Note : Les doubles quotes ne sont pas strictement nécessaires
   ici */
div[data-lang="zh-TW"] {
  color: purple;
}
```

#### HTML

```html
<div lang="en-us en-gb en-au en-nz">Hello World!</div>
<div lang="pt">Olá Mundo!</div>
<div lang="zh-CN">世界您好！</div>
<div lang="zh-TW">世界您好！</div>
<div data-lang="zh-TW">世界您好！</div>
```

#### Résultat

{{EmbedLiveSample("Langues")}}

### Listes HTML ordonnées

La spécification HTML exige que l'attribut [`type`](/fr/docs/Web/HTML/Reference/Elements/input#type) soit testé sans sensibilité à la casse car il est principalement utilisé avec l'élément {{HTMLElement("input")}}.
Notez que si un modificateur n'est pas pris en charge par l'agent utilisateur, alors le sélecteur ne correspondra pas.

#### CSS

```css
/* Les types de liste devront être utilisé avec le
   marqueur pour la casse vu les spécifications HTML */
ol[type="a"]:first-child {
  list-style-type: lower-alpha;
  background: red;
}

ol[type="i" s] {
  list-style-type: lower-alpha;
  background: lime;
}

ol[type="I" s] {
  list-style-type: upper-alpha;
  background: grey;
}

ol[type="a" i] {
  list-style-type: upper-alpha;
  background: green;
}
```

#### HTML

```html
<ol type="A">
  <li>
    Fond rouge pour une correspondance insensible à la casse (par défaut pour le
    sélecteur de type)
  </li>
</ol>
<ol type="i">
  <li>
    Fond vert clair si le modificateur `s` est pris en charge (correspondance
    sensible à la casse)
  </li>
</ol>
<ol type="I">
  <li>
    Fond gris si le modificateur `s` est pris en charge (correspondance sensible
    à la casse)
  </li>
</ol>
<ol type="A">
  <li>
    Fond vert si le modificateur `i` est pris en charge (correspondance
    insensible à la casse)
  </li>
</ol>
```

#### Résultat

{{EmbedLiveSample("Listes HTML ordonnées")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("attr")}}
- Sélectionner un élément&nbsp;: {{DOMxRef("Document.querySelector()")}}, {{DOMxRef("DocumentFragment.querySelector()")}} ou {{DOMxRef("Element.querySelector()")}}
- Sélectionner l'ensemble des éléments correspondants&nbsp;: {{DOMxRef("Document.querySelectorAll()")}}, {{DOMxRef("DocumentFragment.querySelectorAll()")}} ou {{DOMxRef("Element.querySelectorAll()")}}
- [Valeurs de sélecteur d'attribut insensibles à la casse <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/semantics-other.html#case-sensitivity-of-selectors) sur WHATWG
