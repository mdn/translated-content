---
title: Pseudo-classe CSS `:user-invalid`
short-title: :user-invalid
slug: Web/CSS/Reference/Selectors/:user-invalid
l10n:
  sourceCommit: bf3b0f3217d5d5a6957e9e17f863ece19d939d20
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:user-invalid`** représente tout élément de formulaire validé dont la valeur n'est pas valide selon ses [contraintes de validation](/fr/docs/Web/HTML/Guides/Constraint_validation), après que l'utilisateur·ice a interagi avec lui.

La pseudo-classe `:user-invalid` doit correspondre à un élément {{CSSxRef(":invalid")}}, {{CSSxRef(":out-of-range")}}, ou vide mais {{CSSxRef(":required")}} entre le moment où l'utilisateur·ice a tenté d'envoyer le formulaire et avant que l'utilisateur·ice n'ait interagi à nouveau avec l'élément du formulaire.

## Syntaxe

```css
:user-invalid {
  /* … */
}
```

## Exemples

### Paramétrage d'une couleur et d'un symbole sur `:user-invalid`

Dans l'exemple suivant, la bordure rouge et le symbole ❌ n'apparaissent qu'une fois que l'utilisateur·ice a interagi avec le champ.
Essayez de taper quelque chose d'autre qu'une adresse e-mail pour le voir en action.

```html
<label for="email">E-mail *&nbsp;: </label>
<input id="email" name="email" type="email" required />
<span></span>
```

```css
input:user-invalid {
  border: 2px solid red;
}

input:user-invalid + span::before {
  content: "✖";
  color: red;
}
```

{{EmbedLiveSample("Paramétrage d'une couleur et d'un symbole sur `:user-invalid`", 140, 100)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La pseudo-classe {{CSSxRef(":valid")}}
- La pseudo-classe {{CSSxRef(":invalid")}}
- La pseudo-classe {{CSSxRef(":required")}}
- La pseudo-classe {{CSSxRef(":optional")}}
- La pseudo-classe {{CSSxRef(":user-valid")}}
