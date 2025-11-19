---
title: :blank
slug: Web/CSS/Reference/Selectors/:blank
original_slug: Web/CSS/:blank
l10n:
  sourceCommit: bc761c19c07b875eb889d4aad87b18d8443da339
---

{{SeeCompatTable}}

> [!NOTE]
> Le sélecteur `:blank` est une fonctionnalité considérée risquée car en cours de modification par le CSSWG.
>
> Voir [l'_issue_ n°1967 à ce propos](https://github.com/w3c/csswg-drafts/issues/1967).

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

#### Result

{{EmbedLiveSample('exemple_de_base_avec_blank', '100%', 150)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

Actuellement, aucun navigateur ne prend en charge cette fonctionnalité.

## Voir aussi

- {{CSSxRef(":empty")}}
