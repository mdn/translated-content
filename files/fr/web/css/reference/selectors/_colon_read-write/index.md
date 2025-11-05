---
title: :read-write
slug: Web/CSS/Reference/Selectors/:read-write
original_slug: Web/CSS/:read-write
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:read-write`** représente un élément (tel que `input` ou `textarea`) qui peut être modifié par l'utilisateur·ice.

{{InteractiveExample("Démonstration CSS&nbsp;: :read-write", "tabbed-shorter")}}

```css interactive-example
label,
input[type="submit"] {
  display: block;
  margin-top: 1em;
}

*:read-write {
  background-color: ivory;
  border: 2px solid darkorange;
  border-radius: 5px;
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
:read-write {
  /* ... */
}
```

## Exemples

### Confirmation des détails du formulaire à l'aide de contrôles en lecture seule

Vous pouvez utiliser le contrôle de formulaire [`readonly`](/fr/docs/Web/HTML/Reference/Attributes/readonly) lorsque vous souhaitez qu'un·e utilisateur·ice vérifie les informations qu'il a saisies précédemment, que vous souhaitez soumettre avec de nouvelles données dans des contrôles en lecture-écriture.
Dans l'exemple ci-dessous, la pseudo-classe {{cssxref(":read-only")}} est utilisée pour faire en sorte que le {{htmlelement("textarea")}} (l'adresse d'un utilisateur) ressemble à un paragraphe ordinaire. La pseudo-classe `:read-write` fournit un moyen de mettre en évidence le `<textarea>` modifiable (les instructions de livraison)&nbsp;:

```css hidden
body {
  font-family: "Josefin Sans", sans-serif;
  margin: 10px auto;
}

legend {
  color: white;
  background: black;
  padding: 5px 10px;
}

fieldset > div {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
}

button,
label,
textarea {
  display: block;
  font-family: inherit;
  font-size: 100%;
  margin: 0;
  box-sizing: border-box;
  padding: 5px;
  height: 30px;
}

textarea {
  width: 50%;
}

textarea {
  height: 70px;
  resize: none;
}

label {
  width: 40%;
}
```

```css
textarea:read-only {
  border: 0;
}

textarea:read-write {
  box-shadow: inset 1px 1px 3px #cccccc;
  border-radius: 5px;
}
```

```html
<form>
  <fieldset>
    <legend>Confirmer les détails d'expédition</legend>
    <div>
      <label for="address">Adresse&nbsp;:</label>
      <textarea id="address" name="address" readonly>
16 Rue des Blagues,
Blagues en Cascades,
France</textarea
      >
    </div>
    <div>
      <label for="instructions">Instructions de livraison&nbsp;:</label>
      <textarea id="instructions" name="instructions"></textarea>
    </div>
  </fieldset>
  <button type="submit">Confirmer</button>
</form>
```

{{embedlivesample("confirmation_des_détails_du_formulaire_à_laide_de_contrôles_en_lecture_seule", , "300")}}

### Mise en forme des contrôles non-formulaires en lecture-écriture

Ce sélecteur ne sélectionne pas seulement les éléments {{htmlElement("input")}}/{{htmlElement("textarea")}} — il sélectionnera _tout_ élément qui peut être modifié par l'utilisateur, comme un élément {{htmlelement("p")}} avec l'attribut [`contenteditable`](/fr/docs/Web/HTML/Reference/Global_attributes/contenteditable) activé.

#### HTML

```html
<p contenteditable>
  Ce paragraphe est modifiable&nbsp;; il est en lecture-écriture.
</p>

<p>Ce paragraphe n'est pas modifiable&nbsp;; il est en lecture seule.</p>
```

#### CSS

```css
body {
  font-family: sans-serif;
}

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

{{EmbedLiveSample("mise_en_forme_des_contrôles_non-formulaires_en_lecture-écriture", '100%', 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref(":read-only")}}
- L'attribut HTML [`contenteditable`](/fr/docs/Web/HTML/Reference/Global_attributes#contenteditable)
