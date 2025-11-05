---
title: :user-valid
slug: Web/CSS/Reference/Selectors/:user-valid
original_slug: Web/CSS/:user-valid
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:user-valid`** représente tout élément de formulaire validé donc la valeur respecte [la validation des contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation). Toutefois, à la différence de {{cssxref(":valid")}}, cette pseudo-classe ne cible l'élément qu'après que la personne a interagi avec.

Cette pseudo-classe s'applique selon les règles suivantes&nbsp;:

- Si le contrôle n'a pas le focus et que sa valeur est valide, cette pseudo-classe s'applique.
- Si le contrôle a le focus, et que la valeur était valide (potentiellement vide) lorsque le focus a été acquis, cette pseudo-classe s'applique.
- Si l'élément est obligatoire, les règles précédentes s'appliquent uniquement si l'utilisatrice ou l'utilisateur·ice a modifié la valeur ou tenté d'envoyer le formulaire.

Une fois cette pseudo-classe appliquée, l'agent utilisateur revalide la validité du contrôle à chaque frappe lorsque celui-ci est sélectionné.

- Si le contrôle a le focus, et que la valeur était invalide à l'acquisition du focus, on revalide à chaque frappe clavier.

Par conséquent, si la valeur du contrôle était valide lorsque la personne a commencé l'interaction avec, la mise en forme relative à la validité est uniquement changée lorsque les actions font passer le focus à un autre contrôle. En revanche, si la personne tente de corriger une valeur précédemment incorrecte, le contrôle indique immédiatement lorsque la valeur devient valide. Les éléments obligatoires sont indiqués comme invalides uniquement si l'utilisatrice ou l'utilisateur·ice les modifie ou tente d'envoyer le formulaire avec une valeur invalide inchangée.

## Syntaxe

```css
:user-valid {
  /* ... */
}
```

## Exemples

### Définir une couleur et un symbole dans le cas `:user-valid`

Dans l'exemple qui suit, la bordure verte et ✅ s'affichent uniquement après une interaction avec le champ. Essayez de changer l'adresse électronique en une autre adresse valide pour observer l'effet obtenu.

#### HTML

```html
<form>
  <label for="email">Email *: </label>
  <input
    id="email"
    name="email"
    type="email"
    value="test@example.com"
    required />
  <span></span>
</form>
```

#### CSS

```css
input:user-valid {
  border: 2px solid green;
}

input:user-valid + span::before {
  content: "✓";
  color: green;
}
```

#### Résultat

{{EmbedLiveSample("définir_une_couleur_et_un_symbole_dans_le_cas_user-valid", 140, 100)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{CSSxRef(":valid")}}
- {{CSSxRef(":invalid")}}
- {{CSSxRef(":required")}}
- {{CSSxRef(":optional")}}
- {{CSSxRef(":user-invalid")}}
