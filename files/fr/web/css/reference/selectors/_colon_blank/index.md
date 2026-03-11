---
title: :blank
slug: Web/CSS/Reference/Selectors/:blank
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{SeeCompatTable}}

> [!NOTE]
> Le sélecteur `:blank` est une fonctionnalité considérée risquée car en cours de modification par le CSSWG.
>
> Voir [le problème n°1967 à ce propos <sup>(angl.)</sup>](https://github.com/w3c/csswg-drafts/issues/1967).

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:blank`** permet de sélectionner les champs saissables par l'utilisateur·ice et qui sont vides (par exemple des éléments {{HTMLElement("input")}} ou {{HTMLElement("textarea")}} où rien n'a encore été saisi).

## Syntaxe

```css
:blank {
  /* ... */
}
```

## Exemples

### Exemple de base avec `:blank`

Dans les navigateurs prenant en charge cette fonctionnalité, la pseudo-classe `:blank` permettra aux développeur·euse·s de mettre en évidence d'une certaine manière les contrôles de saisie qui ne sont pas requis, mais qui n'ont toujours aucun contenu rempli, peut-être en guise de rappel pour les utilisateurs.

#### HTML

```html
<textarea></textarea>
```

#### CSS

```css
textarea:blank {
  border: 3px solid red;
}
```

#### Résultat

{{EmbedLiveSample("Exemple de base avec `:blank`", "100%", 150)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

Actuellement, aucun navigateur ne prend en charge cette fonctionnalité.

## Voir aussi

- La pseudo-classe {{CSSxRef(":empty")}}
