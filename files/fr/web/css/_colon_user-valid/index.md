---
title: ":user-valid (:-moz-ui-valid)"
slug: Web/CSS/:user-valid
l10n:
  sourceCommit: 257486f64b2472dda4996a4ea7b6b5305e46f863
---

{{CSSRef}}

La [pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) CSS **`:user-valid`** représente tout élément de formulaire validé donc la valeur respecte [la validation des contraintes](/fr/docs/Learn/Forms#constraint_validation). Toutefois, à la différence de [`:valid`](/fr/docs/Web/CSS/:valid), cette pseudo-classe ne cible l'élément qu'après que la personne a interagi avec.

> **Note :** Cette pseudo-classe se comporte de la même façon que la pseudo-classe non-standard `:-moz-ui-valid`.

Cette pseudo-classe s'applique selon les règles suivantes&nbsp;:

- Si le contrôle n'a pas le focus et que sa valeur est valide, cette pseudo-classe s'applique.
- Si le contrôle a le focus, et que la valeur était valide (potentiellement vide) lorsque le focus a été acquis, cette pseudo-classe s'applique.
- Si le contrôle a le focus, et que la valeur était invalide à l'acquisition du focus, on revalide à chaque frappe clavier.
- Si l'élément est obligatoire, les règles précédentes s'appliquent uniquement si l'utilisatrice ou l'utilisateur a modifié la valeur ou tenté d'envoyer le formulaire.

Par conséquent, si la valeur du contrôle était valide lorsque la personne a commencé l'interaction avec, la mise en forme relative à la validité est uniquement changée lorsque les actions font passer le focus à un autre contrôle. En revanche, si la personne tente de corriger une valeur précédemment incorrecte, le contrôle indique immédiatement lorsque la valeur devient valide. Les éléments obligatoires sont indiqués comme invalides uniquement si l'utilisatrice ou l'utilisateur les modifie ou tente d'envoyer le formulaire avec une valeur invalide inchangée.

## Syntaxe

```
:user-valid
```

## Exemples

### Définir une couleur et un symbole dans le cas `:user-valid`

Dans l'exemple qui suit, la bordure verte et la coche s'affichent uniquement après une interaction avec le champ. Essayez de changer l'adresse électronique en une autre adresse valide pour observer l'effet obtenu.

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

#### Résultat

{{EmbedLiveSample("", 140, 100)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`:valid`](/fr/docs/Web/CSS/:valid)
- [`:invalid`](/fr/docs/Web/CSS/:invalid)
- [`:required`](/fr/docs/Web/CSS/:required)
- [`:optional`](/fr/docs/Web/CSS/:optional)
- [`:user-invalid`](/fr/docs/Web/CSS/:user-invalid)
