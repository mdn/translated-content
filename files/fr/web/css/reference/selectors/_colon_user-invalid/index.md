---
title: :user-invalid
slug: Web/CSS/Reference/Selectors/:user-invalid
original_slug: Web/CSS/:user-invalid
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:user-invalid`** représente tout élément de formulaire validé dont la valeur n'est pas valide selon ses [contraintes de validation](/fr/docs/Web/HTML/Guides/Constraint_validation), après que l'utilisateur·ice a interagi avec lui.

La pseudo-classe `:user-invalid` doit correspondre à un élément {{CSSxRef(":invalid")}}, {{CSSxRef(":out-of-range")}}, ou vide mais {{CSSxRef(":required")}} entre le moment où l'utilisateur·ice a tenté de soumettre le formulaire et avant que l'utilisateur·ice n'ait interagi à nouveau avec l'élément du formulaire.

## Syntaxe

```css
:user-invalid {
  /* ... */
}
```

## Exemples

### Paramétrage d'une couleur et d'un symbole sur :user-invalid

Dans l'exemple suivant, la bordure rouge et le symbole ❌ n'apparaissent qu'une fois que l'utilisateur·ice a interagi avec le champ.
Essayez de taper quelque chose d'autre qu'une adresse e-mail pour le voir en action.

```html
<form>
  <label for="email">E-mail *&nbsp;: </label>
  <input id="email" name="email" type="email" required />
  <span></span>
</form>
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

{{EmbedLiveSample("paramétrage_dune_couleur_et_dun_symbole_sur_user-invalid", 140, 100)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{CSSxRef(":valid")}}
- {{CSSxRef(":invalid")}}
- {{CSSxRef(":required")}}
- {{CSSxRef(":optional")}}
- {{CSSxRef(":user-valid")}}
