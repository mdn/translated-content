---
title: Exemple
slug: Learn/Forms/How_to_structure_a_web_form/Example
translation_of: Learn/Forms/How_to_structure_a_web_form/Example
original_slug: Web/Guide/HTML/Formulaires/Comment_structurer_un_formulaire_HTML/Exemple
---
Ceci est un exemple de formulaire de paiement basique extrait de l'article [Comment structurer un formulaire HTML](/fr/docs/HTML/Formulaires/Comment_structurer_un_formulaire_HTML "/fr/docs/HTML/Formulaires/Comment_structurer_un_formulaire_HTML").

## Un formulaire de paiement

### Contenu HTML

```html
<form>
        <h1>Formulaire de paiement</h1>
        <p>Les champs obligatoires sont suivis par <strong><abbr title="required">*</abbr></strong>.</p>
        <section>
            <h2>Informations de contact</h2>
            <fieldset>
              <legend>Qualité</legend>
              <ul>
                  <li>
                    <label for="title_1">
                      <input type="radio" id="title_1" name="title" value="M." >
                      Monsieur
                    </label>
                  </li>
                  <li>
                    <label for="title_2">
                      <input type="radio" id="title_2" name="title" value="Mme.">
                      Madame
                    </label>
                  </li>
              </ul>
            </fieldset>
            <p>
              <label for="name">
                <span>Nom :</span>
                <strong><abbr title="required">*</abbr></strong>
              </label>
              <input type="text" id="name" name="username">
            </p>
            <p>
              <label for="mail">
                <span>e-mail :</span>
                <strong><abbr title="required">*</abbr></strong>
              </label>
              <input type="email" id="mail" name="usermail">
            </p>
            <p>
              <label for="password">
                <span>Mot de passe :</span>
                <strong><abbr title="required">*</abbr></strong>
              </label>
              <input type="password" id="pwd" name="password">
            </p>
        </section>
        <section>
            <h2>Informations de paiement</h2>
            <p>
              <label for="card">
                <span>Type de carte :</span>
              </label>
              <select id="card" name="usercard">
                <option value="visa">Visa</option>
                <option value="mc">Mastercard</option>
                <option value="amex">American Express</option>
              </select>
            </p>
            <p>
              <label for="number">
                <span>Numéro :</span>
                <strong><abbr title="required">*</abbr></strong>
              </label>
                <input type="text" id="number" name="cardnumber">
            </p>
            <p>
              <label for="date">
                <span>Validité :</span>
                <strong><abbr title="required">*</abbr></strong>
                <em>format mm/aa</em>
              </label>
              <input type="text" id="date" name="expiration">
            </p>
        </section>
        <section>
            <p> <button type="submit">Valider le paiement</button> </p>
        </section>
    </form>
```

### Contenu CSS

```css
      h1 {
          margin-top: 0;
      }

      ul {
          margin: 0;
          padding: 0;
          list-style: none;
      }

      form {
          margin: 0 auto;
          width: 450px;
          padding: 1em;
          border: 1px solid #CCC;
          border-radius: 1em;
      }

      div+div {
          margin-top: 1em;
      }

      label span {
          display: inline-block;
          width: 120px;
          text-align: right;
      }

      input, textarea {
          font: 1em sans-serif;
          width: 250px;
          box-sizing: border-box;
          border: 1px solid #999;
      }

      input[type=checkbox], input[type=radio] {
          width: auto;
          border: none;
      }

      input:focus, textarea:focus {
          border-color: #000;
      }

      textarea {
          vertical-align: top;
          height: 5em;
          resize: vertical;
      }

      fieldset {
          width: 250px;
          box-sizing: border-box;
          margin-left: 146px;
          border: 1px solid #999;
      }

      button {
          margin: 20px 0 0 124px;
      }

      label {
        position: relative;
      }

      label em {
        position: absolute;
        right: 5px;
        top: 20px;
      }
```

### Résultat

{{ EmbedLiveSample("Un_formulaire_de_paiement", "100%", "620") }}
