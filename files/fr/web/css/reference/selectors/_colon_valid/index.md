---
title: :valid
slug: Web/CSS/Reference/Selectors/:valid
l10n:
  sourceCommit: f8ef875113a7d3e9952f41de68be1e3a3a1e6988
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:valid`** permet de cibler tout élément HTML {{HTMLElement("input")}} ou {{HTMLElement("form")}} dont la [validation](/fr/docs/Web/HTML/Guides/Constraint_validation) du contenu s'effectue correctement par rapport au type de donnée attendu. On peut ainsi facilement mettre en forme les champs correctement remplis par l'utilisateur·ice.

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

- [Comprendre le WCAG sur le MDN, explications de la règle 1.4](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#règle_1.4_—_faciliter_la_perception_visuelle_et_auditive_du_contenu_notamment_en_séparant_le_premier_plan_de_larrière-plan)
- [Comprendre le critère de succès 1.4.3 | Comprendre les WCAG 2.0 de la W3C <sup>(angl.)</sup>](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## Exemples

### Indicateurs de champs de formulaire valides et invalides

Dans cet exemple, nous incluons des éléments `<span>` supplémentaires pour générer du contenu qui indique des données valides ou invalides&nbsp;:

```html
<form>
  <fieldset>
    <legend>Formulaire de retour d'information</legend>
    <p>Les champs obligatoires sont indiqués par «&nbsp;requis&nbsp;».</p>
    <div>
      <label for="fname">Prénom&nbsp;: </label>
      <input id="fname" name="fname" type="text" required />
      <span></span>
    </div>
    <div>
      <label for="lname">Nom&nbsp;: </label>
      <input id="lname" name="lname" type="text" required />
      <span></span>
    </div>
    <div>
      <label for="email">
        Courriel (inclure si vous souhaitez une réponse)&nbsp;:
      </label>
      <input id="email" name="email" type="email" />
      <span></span>
    </div>
    <div><button>Envoyer</button></div>
  </fieldset>
</form>
```

Pour fournir ces indicateurs, nous utilisons le CSS suivant&nbsp;:

```css hidden
body {
  font-family: sans-serif;
  margin: 20px auto;
  max-width: 460px;
}

fieldset {
  padding: 10px 30px 0;
}

legend {
  color: white;
  background: black;
  padding: 5px 10px;
}

fieldset > div {
  margin-bottom: 20px;
  display: flex;
  flex-flow: row wrap;
}

button,
label,
input {
  display: block;
  font-family: inherit;
  margin: 0;
  box-sizing: border-box;
  width: 100%;
  padding: 5px;
  height: 30px;
}

input {
  box-shadow: inset 1px 1px 3px #cccccc;
  border-radius: 5px;
}

input:hover,
input:focus {
  background-color: #eeeeee;
}

input:required + span::after {
  font-size: 0.7rem;
  position: absolute;
  content: "requis";
  color: white;
  background-color: black;
  padding: 5px 10px;
  top: -26px;
  left: -70px;
}

button {
  width: 60%;
  margin: 0 auto;
}
```

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

Nous définissons les `<span>` sur `position: relative` afin de pouvoir positionner le contenu généré par rapport à eux. Nous positionnons ensuite absolument différents contenus générés en fonction de la validité ou non des données du formulaire — une coche verte ou une croix rouge, respectivement. Pour ajouter un peu d'urgence supplémentaire aux données invalides, nous avons également donné aux entrées une bordure rouge épaisse lorsqu'elles sont invalides.

> [!NOTE]
> Nous avons utilisé `::before` pour ajouter ces étiquettes, car nous utilisions déjà `::after` pour les étiquettes «&nbsp;requises&nbsp;».

Vous pouvez essayer ci-dessous&nbsp;:

{{EmbedLiveSample("Indicateurs de champs de formulaire valides et invalides", "", 430)}}

Remarquez comment les champs de texte requis sont invalides lorsqu'ils sont vides, mais valides lorsqu'ils contiennent quelque chose. Le champ e-mail, en revanche, est valide lorsqu'il est vide, car il n'est pas requis, mais invalide lorsqu'il contient quelque chose qui n'est pas une adresse e-mail valide.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Autres pseudo-classes liées à la validation&nbsp;:
  - {{CSSxRef(":invalid")}}
  - {{CSSxRef(":required")}}
  - {{CSSxRef(":optional")}}
- [Apprendre&nbsp;: La validation des données d'un formulaire](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation)
- Accéder à [l'état de validité](/fr/docs/Web/API/ValidityState) en JavaScript
