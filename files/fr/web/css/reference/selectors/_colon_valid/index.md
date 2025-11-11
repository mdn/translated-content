---
title: :valid
slug: Web/CSS/Reference/Selectors/:valid
original_slug: Web/CSS/:valid
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:valid`** permet de cibler tout élément {{HTMLElement("input")}} ou {{HTMLElement("form")}} dont la [validation](/fr/docs/Web/HTML/Guides/Constraint_validation) du contenu s'effectue correctement par rapport au type de donnée attendu. On peut ainsi facilement mettre en forme les champs correctement remplis par l'utilisateur.

{{InteractiveExample("Démonstration CSS&nbsp;: :valid", "tabbed-shorter")}}

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

input:valid {
  background-color: ivory;
  border: none;
  outline: 2px solid deepskyblue;
  border-radius: 5px;
  accent-color: gold;
}
```

```html interactive-example
<form>
  <label for="email">Adresse e-mail&nbsp;:</label>
  <input id="email" name="email" type="email" value="na@me@example.com" />

  <label for="secret">Code secret&nbsp;: (lettres minuscules)</label>
  <input id="secret" name="secret" type="text" value="test" pattern="[a-z]+" />

  <label for="age">Votre âge&nbsp;: (18+)</label>
  <input id="age" name="age" type="number" value="5" min="18" />

  <label
    ><input name="tos" type="checkbox" required checked />
    - Acceptez-vous les CGU&nbsp;?
  </label>
</form>
```

La pseudo-classe est utile pour mettre en évidence les champs corrects pour l'utilisateur·ice.

## Syntaxe

```css
:valid {
  /* ... */
}
```

## Accessibilité

La couleur rouge est généralement utilisée afin d'indiquer une valeur invalide. Les personnes ayant du mal à différencier les couleurs ne seront pas capables de déterminer la validité du champ si celui-ci n'est pas accompagné d'un indicateur qui n'est pas basé sur une couleur. Pour résoudre ce problème, on pourra utiliser un texte indicatif et/ou une icône.

- [Explications des recommendation WCAG 1.4](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Comprendre le critère de succès 1.4.3 | W3C Comprendre les WCAG 2.0 <sup>(angl.)</sup>](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## Exemples

### Indicateurs de champs de formulaire valides et invalides

Dans cet exemple, nous utilisons des structures comme celle-ci, qui incluent des `<span>` supplémentaires pour générer du contenu&nbsp;; nous les utiliserons pour fournir des indicateurs de données valides/invalides&nbsp;:

```html
<div>
  <label for="fname">Prénom *&nbsp;: </label>
  <input id="fname" name="fname" type="text" required />
  <span></span>
</div>
```

Pour fournir ces indicateurs, nous utilisons le CSS suivant&nbsp;:

```css
input + span {
  position: relative;
}

input + span::before {
  position: absolute;
  right: -20px;
  top: 5px;
}

input:invalid {
  border: 2px solid red;
}

input:invalid + span::before {
  content: "✖";
  color: red;
}

input:valid + span::before {
  content: "✓";
  color: green;
}
```

Nous définissons les `<span>` sur `position: relative` afin de pouvoir positionner le contenu généré par rapport à eux. Nous positionnons ensuite absolument différents contenus générés en fonction de la validité ou non des données du formulaire&nbsp;: une coche verte ou une croix rouge, respectivement. Pour ajouter un peu d'urgence supplémentaire aux données invalides, nous avons également donné aux entrées une bordure rouge épaisse lorsqu'elles sont invalides.

> [!NOTE]
> Nous avons utilisé `::before` pour ajouter ces étiquettes, car nous utilisions déjà `::after` pour les étiquettes "requises".

Vous pouvez essayer ci-dessous&nbsp;:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/valid-invalid.html", '100%', 430)}}

Remarquez comment les champs de texte requis sont invalides lorsqu'ils sont vides, mais valides lorsqu'ils contiennent quelque chose. Le champ e-mail, en revanche, est valide lorsqu'il est vide, car il n'est pas requis, mais invalide lorsqu'il contient quelque chose qui n'est pas une adresse e-mail valide.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Autres pseudo-classes liées à la validation&nbsp;:
  - {{cssxref(":invalid")}}
  - {{cssxref(":required")}}
  - {{cssxref(":optional")}}
- [Apprendre&nbsp;: La validation des données d'un formulaire](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Accéder à l'état de validité en JavaScript](/fr/docs/Web/API/ValidityState)
