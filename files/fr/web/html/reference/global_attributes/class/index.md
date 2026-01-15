---
title: "Attribut HTML universel : class"
short-title: class
slug: Web/HTML/Reference/Global_attributes/class
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

L'[attribut universel](/fr/docs/Web/HTML/Reference/Global_attributes) **`class`** est une liste des classes de l'élément, séparées par des [espaces ASCII](/fr/docs/Glossary/Whitespace#en_html).

{{InteractiveExample("Démonstration HTML&nbsp;: class", "tabbed-standard")}}

```html interactive-example
<p>Narrateur&nbsp;: Ceci est le début de la pièce.</p>

<p class="note editorial">
  Le point ci-dessus semble un peu évident. À supprimer/réécrire&nbsp;?
</p>

<p>Narrateur&nbsp;: Je dois vous prévenir, ce début est très excitant.</p>

<p class="note">
  [Les lumières s'allument et le vent souffle&nbsp;; Caspian entre côté cour]
</p>
```

```css interactive-example
.note {
  font-style: italic;
  font-weight: bold;
}

.editorial {
  background: rgb(255 0 0 / 0.25);
  padding: 10px;
}

.editorial::before {
  content: "Editeur : ";
}
```

## Syntaxe

L'attribut `class` est une liste de valeurs de classes séparées par des [espaces ASCII](/fr/docs/Glossary/Whitespace#en_html).

Chaque valeur de classe peut contenir n'importe quel caractère Unicode (sauf, bien sûr, les espaces ASCII). Cependant, lorsqu'elles sont utilisées dans des sélecteurs CSS, soit depuis JavaScript avec des API comme {{DOMxRef("Document.querySelector()")}}, soit dans des feuilles de style CSS, les valeurs d'attribut de classe doivent être des [identifiants CSS valides](/fr/docs/Web/CSS/Reference/Values/ident). Cela signifie que si une valeur d'attribut de classe n'est pas un identifiant CSS valide (par exemple, `my?class` ou `1234`), elle doit être échappée avant d'être utilisée dans un sélecteur, soit avec la méthode {{DOMxRef("CSS.escape_static", "CSS.escape()")}}, soit [manuellement](/fr/docs/Web/CSS/Reference/Values/ident#échappement_de_caractères).

Pour cette raison, il est recommandé que les développeur·euse·s choisissent des valeurs pour les attributs de classe qui sont des identifiants CSS valides et qui ne nécessitent pas d'échappement.

## Description

Les classes permettent au CSS et à JavaScript de sélectionner et d'accéder à des éléments spécifiques via les [sélecteurs de classe](/fr/docs/Web/CSS/Reference/Selectors/Class_selectors) ou des fonctions comme {{DOMxRef("document.getElementsByClassName()")}}.

Bien que la spécification n'impose aucune exigence sur le nom des classes, il est conseillé aux développeur·euse·s web d'utiliser des noms qui décrivent la finalité sémantique de l'élément, plutôt que sa présentation. Par exemple, _attribut_ pour décrire un attribut plutôt que _italique_, même si un élément de cette classe peut être présenté en _italique_. Les noms sémantiques restent logiques même si la présentation de la page change.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Tous les attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes)
- La propriété DOM {{DOMxRef('Element.className')}}
- La propriété DOM {{DOMxRef('Element.classList')}}
- [Introduction au CSS](/fr/docs/Learn_web_development/Core/Styling_basics)
