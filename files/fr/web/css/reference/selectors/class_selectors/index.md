---
title: Sélecteurs de classe
slug: Web/CSS/Reference/Selectors/Class_selectors
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Le **sélecteur de classe** [CSS](/fr/docs/Web/CSS) cible les éléments en fonction du contenu de leur attribut [`class`](/fr/docs/Web/HTML/Reference/Global_attributes/class).

```css
/* Cible tous les éléments ayant la classe "spacious" */
.spacious {
  margin: 2em;
}

/* Cible tous les éléments <li> ayant la classe "spacious" */
li.spacious {
  margin: 2em;
}

/* Cible tous les éléments <li> ayant une classe qui */
/* contient à la fois "spacious" et "elegant"        */
li.spacious.elegant {
  margin: 2em;
}
```

## Syntaxe

```css
.class_name {
  /* … */
}
```

Notez que cela est équivalent au [sélecteur d'attribut](/fr/docs/Web/CSS/Reference/Selectors/Attribute_selectors) suivant&nbsp;:

```css
[class~="class_name"] {
  /* … */
}
```

La valeur `class_name` doit être un [identifiant CSS](/fr/docs/Web/CSS/Reference/Values/ident) valide. Les attributs `class` HTML qui ne sont pas des identifiants CSS valides doivent être [échappés](/fr/docs/Web/CSS/Reference/Values/ident#échappement_de_caractères) avant de pouvoir être utilisés dans les sélecteurs de classe.

## Exemples

### Sélecteurs de classe valides

#### HTML

```html
<p class="red">Ce paragraphe a un texte rouge.</p>
<p class="red yellow-bg">Ce paragraphe a un texte rouge et un fond jaune.</p>
<p class="red fancy">
  Ce paragraphe a un texte rouge et une mise en forme «&nbsp;fancy&nbsp;».
</p>
<p>Ceci est juste un paragraphe normal.</p>
```

```html
<!-- Les deux paragraphes suivants ont des attributs de classe
qui contiennent des caractères devant être échappés en CSS -->

<p class="item?one">Ce paragraphe a un fond rose.</p>
<p class="123item">Ce paragraphe a un fond jaune.</p>
```

#### CSS

```css
.red {
  color: #ff3333;
}

.yellow-bg {
  background: #ffffaa;
}

.fancy {
  font-weight: bold;
  text-shadow: 4px 4px 3px #7777ff;
}
```

```css
/* Dans les deux règles suivantes, les attributs de classe doivent être échappés */

.item\?one {
  background-color: pink;
}

.\00003123item {
  background-color: yellow;
}
```

#### Résultat

{{EmbedLiveSample("Sélecteurs de classe valides")}}

### Sélecteurs de classe invalides

Les sélecteurs de classe dans les règles suivantes ne sont pas des identifiants CSS valides et seront ignorés.

```css example-bad
.item?one {
  background-color: green;
}

.123item {
  background-color: green;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Sélecteurs CSS](/fr/docs/Web/CSS/Guides/Selectors)
- [Apprendre CSS&nbsp;: Sélecteurs de base](/fr/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)
