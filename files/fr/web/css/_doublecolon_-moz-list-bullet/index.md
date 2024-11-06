---
title: "::-moz-list-bullet"
slug: Web/CSS/::-moz-list-bullet
---

{{CSSRef}}{{Non-standard_header}}

Le [pseudo-élément CSS](/fr/docs/Web/CSS/Pseudo-elements) **`::-moz-list-bullet`** est [une extension non-standard de Mozilla](/fr/docs/Web/CSS/Mozilla_Extensions) utilisé pour appliquer un style aux puces des éléments d'une liste non ordonnée (autrement dit, pour un élément [`<li>`](/fr/docs/Web/HTML/Element/li)) contenu dans un élément [`<ul>`](/fr/docs/Web/HTML/Element/ul)).

## Syntaxe

```css
li::-moz-list-bullet
```

## Exemples

### Mettre en forme les puces de liste

#### HTML

```html
<ul>
  <li>Numéro 1</li>
  <li>Numéro 2</li>
  <li>Numéro 3</li>
</ul>
```

#### CSS

```css
::-moz-list-bullet {
  color: red;
  font-size: 1.5em;
}
```

#### Résultat

{{EmbedLiveSample('')}}

## Spécifications

Ce pseudo-élément est un pseudo-élément propriétaire lié à Gecko/Mozilla et ne fait partie d'aucune spécification.

## Voir aussi

- [`:-moz-list-number`](/fr/docs/Web/CSS/:-moz-list-number)
- [`::marker`](/fr/docs/Web/CSS/::marker)
