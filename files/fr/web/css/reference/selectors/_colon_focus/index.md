---
title: Pseudo-classe CSS `:focus`
short-title: :focus
slug: Web/CSS/Reference/Selectors/:focus
l10n:
  sourceCommit: bf3b0f3217d5d5a6957e9e17f863ece19d939d20
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:focus`** permet de cibler un élément lorsque celui-ci reçoit la sélection (soit il est sélectionné à l'aide du clavier, soit il est activé avec la souris comme par exemple le champ d'un formulaire).

{{InteractiveExample("Démonstration CSS&nbsp;: :focus", "tabbed-shorter")}}

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

input:focus {
  background-color: lightblue;
}

select:focus {
  background-color: ivory;
}
```

```html interactive-example
<p>Quelle saveur souhaitez-vous commander ?</p>
<label>Nom complet : <input name="firstName" type="text" /></label>
<label
  >Saveur :
  <select name="flavor">
    <option>Cerise</option>
    <option>Thé vert</option>
    <option>Vanille et beurre salé</option>
    <option>Pépites de menthe</option>
  </select>
</label>
```

> [!NOTE]
> Cette pseudo-classe s'applique uniquement à l'élément ayant la sélection lui-même. Utilisez {{CSSxRef(":focus-within")}} si vous souhaitez sélectionner un élément qui _contient_ un élément ayant la sélection.

## Syntaxe

```css
:focus {
  /*… */
}
```

## Accessibilité

Il faut s'assurer que l'indicateur visuel de sélection puisse être vu par des personnes ayant une vision faible. Cela peut d'autant plus bénéficier aux personnes qui consultent le document dans un endroit fortement éclairé (dehors au soleil par exemple). La recommandation [WCAG 2.1 SC 1.4.11 Non-Text Contrast <sup>(angl.)</sup>](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html) nécessite un contraste minimum de 3 à 1.

- Indicateurs visuels de sélection accessibles&nbsp;: [Conseils sur la conception d'indicateurs utiles et utilisables <sup>(angl.)</sup>](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)

### `:focus { outline: none; }`

Il ne faut jamais retirer l'indicateur de sélection sans le remplacer par un autre indicateur qui respecte la recommandation [WCAG 2.1 SC 1.4.11 Non-Text Contrast <sup>(angl.)</sup>](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html)&nbsp;:

- [Ne jamais retirer les bordures/contours CSS <sup>(angl.)</sup>](https://a11yproject.com/posts/never-remove-css-outlines/)

## Exemples

### HTML

```html
<input class="prenom" value="Rouge si sélectionné" />
<input class="nom" value="Bleu si sélectionné" />
```

### CSS

```css
.prenom:focus {
  background: yellow;
  color: red;
}

.nom:focus {
  background: yellow;
  color: blue;
}
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La pseudo-classe {{CSSxRef(":focus-visible")}}
- La pseudo-classe {{CSSxRef(":focus-within")}}
