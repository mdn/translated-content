---
title: "Attribut HTML universel : id"
short-title: id
slug: Web/HTML/Reference/Global_attributes/id
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

L'[attribut universel](/fr/docs/Web/HTML/Reference/Global_attributes) **`id`** définit un identifiant qui doit être unique pour l'ensemble du document.

{{InteractiveExample("Démonstration HTML&nbsp;: id", "tabbed-shorter")}}

```html interactive-example
<p>Un paragraphe normal et ennuyeux. Essayez de ne pas vous endormir.</p>

<p id="exciting">
  Le paragraphe le plus excitant de la page. Unique en son genre&nbsp;!
</p>
```

```css interactive-example
#exciting {
  background: linear-gradient(to bottom, #ffe8d4, #f69d3c);
  border: 1px solid dimgrey;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 2px 2px 1px black;
}

#exciting::before {
  content: "ℹ️";
  margin-right: 5px;
}
```

## Syntaxe

La valeur d'un attribut ID ne doit pas contenir de caractères [espace ASCII](/fr/docs/Glossary/Whitespace#in_html). Les navigateurs traitent les identifiants non conformes qui contiennent des espaces comme si l'espace faisait partie de l'identifiant. Contrairement à l'attribut [`class`](/fr/docs/Web/HTML/Reference/Global_attributes/class), qui accepte des valeurs séparées par des espaces, les éléments ne peuvent avoir qu'une seule valeur d'ID.

Techniquement, la valeur d'un attribut ID peut contenir n'importe quel autre caractère Unicode. Cependant, lorsqu'elle est utilisée dans des sélecteurs CSS, soit depuis JavaScript avec des API comme {{DOMxRef("Document.querySelector()")}}, soit dans des feuilles de style CSS, la valeur de l'attribut ID doit être un [identifiant CSS](/fr/docs/Web/CSS/Reference/Values/ident) valide. Cela signifie que si la valeur d'un attribut ID n'est pas un identifiant CSS valide (par exemple, `my?id` ou `1234`), elle doit être échappée avant d'être utilisée dans un sélecteur, soit avec la méthode {{DOMxRef("CSS.escape_static", "CSS.escape()")}}, soit [manuellement](/fr/docs/Web/CSS/Reference/Values/ident#échappement_de_caractères).

Pour cette raison, il est recommandé que les développeur·euse·s choisissent des valeurs d'attribut ID qui sont des identifiants CSS valides et qui ne nécessitent pas d'échappement.

De plus, toutes les valeurs d'attribut ID valides ne sont pas des identifiants JavaScript valides. Par exemple, `1234` est une valeur d'attribut valide mais pas un identifiant JavaScript valide. Cela signifie que la valeur n'est pas un nom de variable valide, donc vous ne pouvez pas accéder à l'élément avec un code comme `window.1234`. Cependant, vous pouvez y accéder avec `window["1234"]`.

## Description

L'objectif de l'attribut ID est d'identifier un seul élément lors de la liaison (en utilisant un [identifiant de fragment](/fr/docs/Web/URI/Reference/Fragment)), du script ou de la mise en forme (avec {{Glossary("CSS")}}).

Vous pouvez accéder aux éléments avec des attributs ID comme propriétés globales de l'objet `window`, où le nom de la propriété est la valeur de l'ID et la valeur de la propriété est l'élément correspondant. Par exemple, avec ce balisage&nbsp;:

```html
<p id="preamble"></p>
```

Vous pouvez accéder à cet élément paragraphe en JavaScript avec le code suivant&nbsp;:

```js
const content = window.preamble.textContent;
```

> [!WARNING]
> S'appuyer sur le modèle `window["id-value"]` ou `window.idValue` est dangereux et déconseillé, car cela peut entraîner des conflits inattendus avec des API existantes ou futures du navigateur.
> Par exemple, si un navigateur introduit à l'avenir une propriété globale intégrée nommée `preamble`, votre code pourrait ne plus accéder à l'élément HTML.
> Pour éviter de tels conflits, utilisez toujours la méthode {{DOMxRef("Document.getElementById()")}} ou {{DOMxRef("Document.querySelector()")}} pour accéder aux éléments par ID.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Tous les attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes)
- La propriété {{DOMxRef("Element.id")}} qui reflète cet attribut.
- La méthode DOM {{DOMxRef("Document.getElementById")}}
- Les [sélecteurs ID](/fr/docs/Web/CSS/Reference/Selectors/ID_selectors) CSS
