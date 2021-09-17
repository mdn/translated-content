---
title: Sélecteurs d'attribut
slug: Web/CSS/Attribute_selectors
tags:
  - CSS
  - Débutant
  - Reference
  - Sélecteur
translation_of: Web/CSS/Attribute_selectors
original_slug: Web/CSS/Sélecteurs_d_attribut
---
{{CSSRef}}

Les sélecteurs d'attribut permettent de cibler un élément selon la présence d'un attribut ou selon la valeur donnée d'un attribut.

```css
/* Les éléments <a> avec un attribut title */
a[title] {
  color: purple;
}

/* Les éléments <a> avec un href qui correspond */
/* à "https://example.org" */
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

/* Les éléments <a> dont l'attribut class contient le mot logo */
/* comportement identique à a.logo */
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
  - : Permet de cibler un élément qui possède un attribut `attr` dont la valeur est exactement `valeur` ou dont la valeur commence par `valeur` suivi immédiatement d'un tiret (U+002D). Cela peut notamment être utilisé pour effectuer des correspondances avec des codes de langues.
- `[attr^=valeur]`
  - : Permet de cibler un élément qui possède un attribut `attr` dont la valeur commence par `valeur`.
- `[attr$=valeur]`
  - : Permet de cibler un élément qui possède un attribut `attr` dont la valeur se termine par `valeur`.
- `[attr*=valeur]`
  - : Permet de cibler un élément qui possède un attribut `attr` et dont la valeur contient au moins une occurrence de `valeur` dans la chaîne de caractères.
- `[attr operateur valeur i]`
  - : On peut ajouter un `i` (ou `I`) avant le crochet de fin. Dans ce cas, la casse ne sera pas prise en compte (pour les caractères contenus sur l'intervalle ASCII).
- `[attr operateur valeur s]` {{experimental_inline}}
  - : Ajouter un `s` (ou `S`) avant le crochet fermant permettra d'effectuer une comparaison de valeur sensible à la casse (pour les caractères ASCII).

### Syntaxe formelle

{{CSSSyntax}}

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
```

#### HTML

```html
<ul>
  <li><a href="#internal">Lien interne<a></li>
  <li><a href="http://example.com">Lien d'exemple</a></li>
  <li><a href="#InSensitive">Lien interne insensible à la casse</a></li>
  <li><a href="http://example.org">Lien vers example.org</a></li>
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

### Listes ordonnées

{{SeeCompatTable}}

La spécification HTML indique que l'attribut {{htmlattrxref("type", "input")}} doit être testé sans sensibilité à la casse car il est généralement utilisé avec l'élément {{HTMLElement("input")}}. Si on souhaite utiliser un sélecteur d'attribut avec {{htmlattrxref("type", "ol")}} d'une liste ordonnée ({{HTMLElement("ol")}}), cela ne fonctionnera pas sans le modificateur de sensibilité à la casse.

#### CSS

```css
/* Les types de liste devront être utilisé avec le
   marqueur pour la casse vu les spécifications HTML */
ol[type="a"] {
  list-style-type: lower-alpha;
  background: red;
}

ol[type="a" s] {
  list-style-type: lower-alpha;
  background: lime;
}

ol[type="A" s] {
  list-style-type: upper-alpha;
  background: lime;
}
```

#### HTML

```html
<ol type="A">
  <li>Liste d'exemple</li>
</ol>
```

#### Résultat

{{EmbedLiveSample("Listes_ordonnées")}}

## Spécifications

| Spécification                                                                                                | État                                 | Commentaires                                                                                |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------ | ------------------------------------------------------------------------------------------- |
| {{SpecName('CSS4 Selectors', '#attribute-selectors', 'attribute selectors')}}     | {{Spec2('CSS4 Selectors')}} | Ajout du modification pour la sélection des valeurs d'attribut ASCII insensible à la casse. |
| {{SpecName('CSS3 Selectors', '#attribute-selectors', 'attribute selectors')}}     | {{Spec2('CSS3 Selectors')}} |                                                                                             |
| {{SpecName('CSS2.1', 'selector.html#attribute-selectors', 'attribute selectors')}} | {{Spec2('CSS2.1')}}             | Définition initiale.                                                                        |

## Compatibilité des navigateurs

{{Compat("css.selectors.attribute")}}

## Voir aussi

- {{CSSxRef("attr")}}
- Sélectionner un élément : {{domxref("Document.querySelector()")}}, {{domxref("DocumentFragment.querySelector()")}} ou {{domxref("Element.querySelector()")}}
- Sélectionner l'ensemble des éléments correspondants : {{domxref("Document.querySelectorAll()")}}, {{domxref("DocumentFragment.querySelectorAll()")}} ou {{domxref("Element.querySelectorAll()")}}
- Ces méthodes sont implémentées sur le _mixin_ {{domxref("ParentNode")}}, voir {{domxref("ParentNode.querySelector()")}} et {{domxref("ParentNode.querySelectorAll()")}}
