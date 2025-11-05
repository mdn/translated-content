---
title: :enabled
slug: Web/CSS/Reference/Selectors/:enabled
original_slug: Web/CSS/:enabled
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:enabled`** permet de cibler un élément activé. Un élément est activé s'il peut être sélectionné, si on peut cliquer dessus ou si on peut y saisir du texte ou y passer le focus (un élément peut également être dans un état désactivé).

{{InteractiveExample("Démonstration CSS&nbsp;: :enabled", "tabbed-standard")}}

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

*:enabled {
  background-color: gold;
}
```

```html interactive-example
<form>
  <label for="name">Nom :</label>
  <input id="name" name="name" type="text" />

  <label for="emp">Employé :</label>
  <select id="emp" name="emp" disabled>
    <option>Non</option>
    <option>Oui</option>
  </select>

  <label for="empDate">Date d'embauche :</label>
  <input id="empDate" name="empDate" type="date" disabled />

  <label for="resume">CV :</label>
  <input id="resume" name="resume" type="file" />
</form>
```

## Syntaxe

```css
:enabled {
  /* ... */
}
```

## Exemples

Dans cet exemple, les textes des éléments activés seront verts alors que ceux des éléments désactivés seront gris. L'utilisateur·ice peut ainsi reconnaître les éléments avec lesquels interagir.

### HTML

```html
<form action="url_of_form">
  <label for="PremierChamp">Premier champ (activé) :</label>
  <input type="text" id="PremierChamp" value="Titi" /><br />

  <label for="DeuxiemeChamp">Deuxième champ (désactivé) :</label>
  <input
    type="text"
    id="DeuxiemeChamp"
    value="Toto"
    disabled="disabled" /><br />

  <input type="button" value="Envoyer" />
</form>
```

### CSS

```css
input:enabled {
  color: #22bb22;
}

input:disabled {
  color: #aaaaaa;
}
```

### Résultat

{{EmbedLiveSample("Exemples", 550, 95)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref(":disabled")}}
