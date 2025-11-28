---
title: :scope
slug: Web/CSS/Reference/Selectors/:scope
original_slug: Web/CSS/:scope
l10n:
  sourceCommit: 277a8954951c900ef60a5175503976284c1d328d
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:scope`** représente les éléments qui sont des points de référence ou des portées auxquels faire correspondre les sélecteurs.

```css
/* Sélectionne un élément dans la portée */
:scope {
  background-color: lime;
}
```

Le ou les éléments auxquels correspond `:scope` dépendent du contexte dans lequel il est utilisé&nbsp;:

- Lorsqu'il est utilisé au niveau racine d'une feuille de style, `:scope` équivaut à {{CSSxRef(":root")}}, qui, dans un document HTML standard, correspond à l'élément {{HTMLElement("html")}}.
- Lorsqu'il est utilisé à l'intérieur d'un bloc {{CSSxRef("@scope")}}, `:scope` correspond à la racine de la portée définie du bloc. Il permet d'appliquer des styles à la racine de la portée à partir du bloc `@scope` lui-même.
- Lorsqu'il est utilisé dans un appel API DOM, tel que {{DOMxRef("Element.querySelector", "querySelector()")}}, {{DOMxRef("Element.querySelectorAll", "querySelectorAll()")}}, {{DOMxRef("Element.matches", "matches()")}} ou {{DOMxRef("Element.closest()", "closest()")}} — `:scope` correspond à l'élément sur lequel la méthode a été appelée.

## Syntaxe

```css
:scope {
  /* ... */
}
```

## Exemples

### Utiliser `:scope` comme alternative à `:root`

Cet exemple montre que `:scope` est équivalent à `:root` lorsqu'il est utilisé au niveau racine d'une feuille de style. Dans ce cas, le CSS fourni colore l'arrière-plan de l'élément `<html>` en orange.

```css
:scope {
  background-color: orange;
}
```

{{ EmbedLiveSample("utiliser_scope_comme_alternative_à_root", "100%", 50) }}

### Utiliser `:scope` pour mettre en forme la racine de la portée dans un bloc `@scope`

Dans cet exemple, nous utilisons deux blocs `@scope` séparés pour faire correspondre les liens à l'intérieur des éléments avec une classe `.light-scheme` et `.dark-scheme` respectivement. Notez comment `:scope` est utilisé pour sélectionner et fournir un style aux racines de portée elles-mêmes. Dans cet exemple, les racines de portée sont les éléments {{HTMLElement("div")}} qui ont les classes appliquées.

#### HTML

```html
<div class="light-scheme">
  <p>
    Le MDN contient beaucoup d'informations sur
    <a href="/fr/docs/Web/HTML">HTML</a>, <a href="/fr/docs/Web/CSS">CSS</a>, et
    <a href="/fr/docs/Web/JavaScript">JavaScript</a>.
  </p>
</div>

<div class="dark-scheme">
  <p>
    Le MDN contient beaucoup d'informations sur
    <a href="/fr/docs/Web/HTML">HTML</a>, <a href="/fr/docs/Web/CSS">CSS</a>, et
    <a href="/fr/docs/Web/JavaScript">JavaScript</a>.
  </p>
</div>
```

#### CSS

```css hidden
div {
  padding: 10px;
}
```

```css
@scope (.light-scheme) {
  :scope {
    background-color: plum;
  }

  a {
    color: darkmagenta;
  }
}

@scope (.dark-scheme) {
  :scope {
    background-color: darkmagenta;
    color: antiquewhite;
  }

  a {
    color: plum;
  }
}
```

#### Résultat

{{ EmbedLiveSample("utiliser_scope_pour_mettre_en_forme_la_racine_de_la_portée_dans_un_bloc_scope", "100%", 150) }}

### Utiliser `:scope` dans JavaScript

Cet exemple démontre l'utilisation de la pseudo-classe `:scope` dans JavaScript. Cela peut être utile si vous devez obtenir un descendant direct d'un {{DOMxRef("Element")}} déjà récupéré.

#### HTML

```html
<div id="context">
  <div id="element-1">
    <div id="element-1.1"></div>
    <div id="element-1.2"></div>
  </div>
  <div id="element-2">
    <div id="element-2.1"></div>
  </div>
</div>
<p>
  Identifiants des éléments sélectionnés&nbsp;:
  <span id="results"></span>
</p>
```

#### JavaScript

```js
const context = document.getElementById("context");
const selected = context.querySelectorAll(":scope > div");

document.getElementById("results").textContent = Array.prototype.map
  .call(selected, (element) => `#${element.getAttribute("id")}`)
  .join(", ");
```

#### Résultat

La portée de `context` est l'élément avec l'attribut [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id) de `context`. Les éléments sélectionnés sont les éléments `<div>` qui sont des enfants directs de ce contexte — `element-1` et `element-2` — mais pas leurs descendants.

{{ EmbedLiveSample('utiliser_scope_dans_javascript') }}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La [règle @](/fr/docs/Web/CSS/Guides/Syntax/At-rules) {{CSSxRef("@scope")}}
- La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) {{CSSxRef(":root")}}
- [Sélection et parcours de l'arbre DOM](/fr/docs/Web/API/Document_Object_Model/Selection_and_traversal_on_the_DOM_tree)
- {{DOMxRef("Element.querySelector()")}} et {{DOMxRef("Element.querySelectorAll()")}}
- {{DOMxRef("Document.querySelector()")}} et {{DOMxRef("Document.querySelectorAll()")}}
- {{DOMxRef("DocumentFragment.querySelector()")}} et {{DOMxRef("DocumentFragment.querySelectorAll()")}}
