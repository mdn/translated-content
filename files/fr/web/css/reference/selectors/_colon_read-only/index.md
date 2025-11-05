---
title: :read-only
slug: Web/CSS/Reference/Selectors/:read-only
original_slug: Web/CSS/:read-only
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:read-only`** permet de cibler les éléments (tels que certains types de {{htmlelement("input")}} et {{htmlelement("textarea")}}) qui ne sont pas modifiables par l'utilisateur·ice. Les éléments sur lesquels l'attribut HTML [`readonly`](/fr/docs/Web/HTML/Reference/Attributes/readonly) n'a pas d'effet (tels que [`<input type="radio">`](/fr/docs/Web/HTML/Reference/Elements/input/radio), [`<input type="checkbox">`](/fr/docs/Web/HTML/Reference/Elements/input/checkbox) et tous les autres éléments non liés à un formulaire) sont également sélectionnés par la pseudo-classe `:read-only`. En fait, `:read-only` correspond à tout ce qui ne correspond pas à {{cssxref(":read-write")}}, ce qui le rend équivalent à `:not(:read-write)`.

{{InteractiveExample("Démonstration CSS&nbsp;: :read-only", "tabbed-shorter")}}

```css interactive-example
label,
input[type="submit"] {
  display: block;
  margin-top: 1em;
}

*:read-only {
  font-weight: bold;
  color: indigo;
}
```

```html interactive-example
<p>Veuillez remplir vos coordonnées&nbsp;:</p>

<form>
  <label for="email">Adresse e-mail&nbsp;:</label>
  <input id="email" name="email" type="email" value="test@example.com" />

  <label for="note">Courte note à propos de vous&nbsp;:</label>
  <textarea id="note" name="note">N'ayez pas peur</textarea>

  <label for="pic">Votre photo&nbsp;:</label>
  <input id="pic" name="pic" type="file" />

  <input type="submit" value="Soumettre le formulaire" />
</form>
```

## Syntaxe

```css
:read-only {
  /* ... */
}
```

## Exemples

### Confirmation des informations du formulaire à l'aide de contrôles en lecture seule ou en lecture-écriture

Une utilisation des contrôles de formulaire en lecture seule est de permettre à l'utilisateur·ice de vérifier les informations qu'il a pu saisir dans un formulaire précédent (par exemple, les détails d'expédition), tout en étant en mesure de soumettre les informations avec le reste du formulaire. C'est exactement ce que nous faisons dans l'exemple ci-dessous.

La pseudo-classe `:read-only` est utilisée pour supprimer tout le style qui fait que les champs de saisie ressemblent à des champs cliquables, les faisant ressembler davantage à des paragraphes en lecture seule. La pseudo-classe `:read-write`, en revanche, est utilisée pour fournir un style plus agréable à la `<textarea>` modifiable.

```html hidden
<form>
  <fieldset>
    <legend>Vérifier les détails d'expédition</legend>
    <div>
      <label for="name">Nom&nbsp;: </label>
      <input id="name" name="name" type="text" value="Mr. Toto" readonly />
    </div>
    <div>
      <label for="address">Adresse&nbsp;: </label>
      <textarea id="address" name="address" readonly>
16 Rue des Blagues,
Blagues en Cascades,
France
</textarea
      >
    </div>
    <div>
      <label for="postal-code">Code postal&nbsp;: </label>
      <input
        id="postal-code"
        name="postal-code"
        type="text"
        value="99000"
        readonly />
    </div>
  </fieldset>

  <fieldset>
    <legend>Instructions finales</legend>
    <div>
      <label for="sms-confirm">Envoyer la confirmation par SMS&nbsp;?</label>
      <input id="sms-confirm" name="sms-confirm" type="checkbox" />
    </div>
    <div>
      <label for="instructions">Des instructions spéciales&nbsp;?</label>
      <textarea id="instructions" name="instructions"></textarea>
    </div>
  </fieldset>

  <div><button type="submit">Modifier les détails et soumettre</button></div>
</form>
```

```css hidden
body {
  font-family: "Josefin Sans", sans-serif;
  margin: 20px auto;
  max-width: 460px;
}

fieldset {
  padding: 10px 30px 0;
  margin-bottom: 20px;
}

legend {
  color: white;
  background: black;
  padding: 5px 10px;
}

fieldset > div {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}

button,
label,
input[type="text"],
textarea {
  display: block;
  font-family: inherit;
  font-size: 100%;
  margin: 0;
  box-sizing: border-box;
  padding: 5px;
  height: 30px;
}

input[type="text"],
textarea {
  width: 50%;
}

textarea {
  height: 110px;
  resize: none;
}

label {
  width: 40%;
}

input:hover,
input:focus,
textarea:hover,
textarea:focus {
  background-color: #eeeeee;
}

button {
  width: 60%;
  margin: 20px auto;
}
```

```css
input:read-only,
textarea:read-only {
  border: 0;
  box-shadow: none;
  background-color: #dddddd;
}

textarea:read-write {
  outline: 1px dashed red;
  outline-offset: 2px;
  border-radius: 5px;
}
```

{{EmbedLiveSample("confirmation_des_informations_du_formulaire_à_laide_de_contrôles_en_lecture_seule_ou_en_lecture_ecriture", "100%", 620)}}

### Mise en forme des contrôles non-formulaires en lecture seule

#### HTML

```html
<p contenteditable>
  Ce paragraphe est modifiable&nbsp;; il est en lecture-écriture.
</p>

<p>Ce paragraphe n'est pas modifiable&nbsp;; il est en lecture seule.</p>
```

#### CSS

```css
p {
  font-size: 150%;
  padding: 5px;
  border-radius: 5px;
}

p:read-only {
  background-color: red;
  color: white;
}

p:read-write {
  background-color: lime;
}
```

#### Résultat

{{EmbedLiveSample("mise_en_forme_des_contrôles_non-formulaires_en_lecture_seule", '100%', 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref(":read-write")}}
- L'attribut HTML [`contenteditable`](/fr/docs/Web/HTML/Reference/Global_attributes#contenteditable)
