---
title: "Attribut HTML : `multiple`"
short-title: multiple
slug: Web/HTML/Reference/Attributes/multiple
l10n:
  sourceCommit: 46afd57950146568819d0bf98175a2ffdbe079d7
---

L'attribut booléen **`multiple`**, s'il est défini, signifie que le contrôle de formulaire accepte une ou plusieurs valeurs. Valable pour les types de saisie [`email`](/fr/docs/Web/HTML/Reference/Elements/input/email) et [`file`](/fr/docs/Web/HTML/Reference/Elements/input/file) et l'élément {{HTMLElement("select")}}, la manière dont l'utilisateur·ice opte pour plusieurs valeurs dépend du contrôle de formulaire.

{{InteractiveExample("Démonstration HTML&nbsp;: multiple", "tabbed-standard")}}

```html interactive-example
<label for="recipients">Où devrions-nous envoyer le reçu&nbsp;?</label>
<input id="recipients" name="recipients" type="email" multiple />

<label for="shakes">Quels milkshakes aimeriez-vous commander&nbsp;?</label>
<select id="shakes" name="shakes" multiple>
  <option>Milkshake à la vanille</option>
  <option>Milkshake à la fraise</option>
  <option>Milkshake au chocolat</option>
</select>

<label for="payment">Comment souhaitez-vous payer&nbsp;?</label>
<select id="payment" name="payment">
  <option>Carte de crédit</option>
  <option>Virement bancaire</option>
</select>
```

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

input,
select {
  width: 100%;
}

input:invalid {
  background-color: lightpink;
}
```

## Vue d'ensemble

Selon le type, le contrôle de formulaire peut avoir une apparence différente si l'attribut `multiple` est défini. Pour le type de saisie de fichier, la messagerie native fournie par le navigateur diffère. Dans Firefox, l'entrée de fichier indique «&nbsp;Aucun fichier sélectionné&nbsp;» lorsque l'attribut est présent et «&nbsp;Aucun fichier sélectionné&nbsp;» dans le cas contraire, lorsqu'aucun fichier n'est sélectionné. La plupart des navigateurs affichent une zone de liste déroulante pour un contrôle {{HTMLElement("select")}} avec l'attribut `multiple` défini contre une liste déroulante à une ligne lorsque l'attribut est omis. L'entrée `{{HTMLElement("input/email", "email")}}` s'affiche de la même manière, mais correspond à la pseudo-classe {{CSSxRef(":invalid")}} si plus d'une adresse électronique séparée par des virgules est incluse en l'absence de l'attribut.
Selon le type, le contrôle de formulaire peut avoir une apparence différente si l'attribut `multiple` est défini. Pour le type de saisie de fichier, la messagerie native fournie par le navigateur diffère. Dans Firefox, l'entrée de fichier indique «&nbsp;Aucun fichier sélectionné&nbsp;» lorsque l'attribut est présent et «&nbsp;Aucun fichier sélectionné&nbsp;» dans le cas contraire, lorsqu'aucun fichier n'est sélectionné. La plupart des navigateurs affichent une zone de liste déroulante pour un contrôle {{HTMLElement("select")}} avec l'attribut `multiple` défini contre une liste déroulante à une ligne lorsque l'attribut est omis. L'entrée `{{HTMLElement("input/email", "email")}}` s'affiche de la même manière, mais correspond à la pseudo-classe {{CSSxRef(":invalid")}} si plus d'une adresse électronique séparée par des virgules est incluse en l'absence de l'attribut.

Lorsque `multiple` est défini sur le type de saisie `{{HTMLElement("input/email", "email")}}`, l'utilisateur·ice peut inclure zéro (si ce n'est pas également [`required`](/fr/docs/Web/HTML/Reference/Attributes/required)), une ou plusieurs adresses électroniques séparées par des virgules.

```html
<input type="email" multiple name="emails" id="emails" />
```

Si et seulement si l'attribut `multiple` est défini, la valeur peut être une liste d'adresses électroniques correctement formées et séparées par des virgules. Tout espace blanc de queue et de tête est supprimé de chaque adresse de la liste.

Lorsque `multiple` est défini sur le type d'entrée `{{HTMLElement("input/file", "file")}}`, l'utilisateur·ice peut sélectionner un ou plusieurs fichiers. L'utilisateur·ice peut choisir plusieurs fichiers dans le sélecteur de fichiers de n'importe quelle manière que la plateforme qu'il a choisie permet (par exemple, en maintenant la touche <kbd>Maj</kbd> ou <kbd>Ctrl</kbd> enfoncée, puis en cliquant).

```html
<input type="file" multiple name="uploads" id="uploads" />
```

Lorsque l'attribut est omis, l'utilisateur·ice ne peut sélectionner qu'un seul fichier par `<input>`.

L'attribut `multiple` de l'élément {{HTMLElement("select")}} représente un contrôle permettant de sélectionner zéro ou plusieurs options dans la liste d'options. Sinon, l'élément {{HTMLElement("select")}} représente un contrôle permettant de sélectionner une seule {{HTMLElement("select")}} dans la liste d'options.

```html
<select multiple name="nains" id="nains">
  <option>Grincheux</option>
  <option>Joyeux</option>
  <option>Dormeur</option>
  <option>Timide</option>
  <option>Atchoum</option>
  <option>Simplet</option>
  <option>Doc</option>
</select>
```

Lorsque `multiple` est défini, la plupart des navigateurs affichent une boîte de liste défilante au lieu d'une liste déroulante à ligne unique.

Les options sélectionnées en nombre sont transmises selon la convention de tableau {{DOMxRef("URLSearchParams")}}, c'est-à-dire `name=value1&name=value2`.

## Problèmes d'accessibilité

Fournissez des instructions pour aider les utilisateur·ice·s à comprendre comment remplir le formulaire et utiliser les différents contrôles du formulaire. Indiquez les champs obligatoires et facultatifs, les formats de données et toute autre information pertinente. Lorsque vous utilisez l'attribut `multiple`, informez l'utilisateur·ice que plusieurs valeurs sont autorisées et donnez des instructions sur la manière de saisir plusieurs valeurs, par exemple «&nbsp;séparez les adresses e-mail par une virgule.&nbsp;»

Définir `size="1"` sur une liste de sélection multiple peut la faire apparaître comme une liste de sélection simple dans certains navigateurs, mais elle ne s'étend alors pas lorsque l'utilisateur·ice y place le curseur, ce qui nuit à l'ergonomie. Évitez cette pratique. Si vous modifiez l'apparence d'une liste de sélection, et même si vous ne le faites pas, veillez à informer l'utilisateur·ice qu'il est possible de sélectionner plusieurs options par un autre moyen.

## Exemples

### Saisie d'adresses électroniques

```html
<label for="emails">A qui voulez-vous adresser un courriel&nbsp;?</label>
<input
  type="email"
  multiple
  name="emails"
  id="emails"
  list="emails-nains"
  required
  size="64" />

<datalist id="emails-nains">
  <option value="grincheux@menuisiers.fr">Grincheux</option>
  <option value="joyeux@menuisiers.fr">Joyeux</option>
  <option value="dormeur@menuisiers.fr">Dormeur</option>
  <option value="timide@menuisiers.fr">Timide</option>
  <option value="atchoum@menuisiers.fr">Atchoum</option>
  <option value="simplet@menuisiers.fr">Simplet</option>
  <option value="doc@menuisiers.fr">Doc</option>
</datalist>
```

```css
input:invalid {
  border: red solid 3px;
}
```

Si et seulement si l'attribut `multiple` est défini, la valeur peut être une liste d'adresses électroniques correctement formées et séparées par des virgules. Tout espace blanc de queue et de tête est supprimé de chaque adresse de la liste. Si l'attribut [`required`](/fr/docs/Web/HTML/Reference/Attributes/required) est présent, au moins une adresse électronique est requise.

Certains navigateurs prennent en charge l'apparition de la [`list`](/fr/docs/Web/HTML/Reference/Elements/input#list) d'options de la {{HTMLElement("datalist")}} pour les adresses électroniques ultérieures lorsque `multiple` est présent. D'autres ne le font pas.

{{EmbedLiveSample("Saisie d'adresses électroniques", "", 80)}}

### Saisie de fichiers

Lorsque `multiple` est défini sur le type de saisie `{{HTMLElement("input/file", "file")}}`, l'utilisateur·ice peut sélectionner un ou plusieurs fichiers&nbsp;:

```html
<p>
  <label for="uploads">
    Choisissez les images que vous voulez télécharger&nbsp;:
  </label>
  <input
    type="file"
    id="uploads"
    name="uploads"
    accept=".jpg, .jpeg, .png, .svg, .gif"
    multiple />
</p>
<p>
  <label for="text">Choisissez un fichier texte à télécharger&nbsp;:</label>
  <input type="file" id="text" name="text" accept=".txt" />
</p>
```

{{EmbedLiveSample("Saisie de fichiers", "", 160)}}

Notez la différence d'aspect entre l'exemple avec `multiple` défini et l'autre entrée `file` sans.

Si ces champs sont inclus dans un formulaire envoyé en utilisant [`method="get"`](/fr/docs/Web/HTML/Reference/Elements/form), le nom de chaque fichier sélectionné est ajouté aux paramètres de l'URL sous la forme `?uploads=img1.jpg&uploads=img2.svg`. Pour envoyer les fichiers en tant que données de formulaire multipart, utilisez `method="post"` et `enctype="multipart/form-data"`. Voir l'élément {{HTMLElement("form")}} et la page [Envoi de données de formulaire](/fr/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data#lattribut_method) pour plus d'informations.

### Saisir plusieurs options

L'attribut `multiple` de l'élément {{HTMLElement("select")}} représente un contrôle permettant de sélectionner zéro ou plusieurs options dans la liste d'options. Sinon, l'élément {{HTMLElement("select")}} représente un contrôle permettant de sélectionner une seule {{HTMLElement("select")}} dans la liste des options. L'apparence du contrôle varie généralement en fonction de la présence de l'attribut multiple, la plupart des navigateurs affichant une liste déroulante à défilement au lieu d'une liste déroulante à ligne unique lorsque l'attribut est présent.

```html
<p>
  <label for="nains">Sélectionnez les menuisiers que vous aimez&nbsp;:</label>
  <select multiple name="nains" id="nains">
    <option>grincheux@menuisiers.fr</option>
    <option>joyeux@menuisiers.fr</option>
    <option>dormeur@menuisiers.fr</option>
    <option>timide@menuisiers.fr</option>
    <option>atchoum@menuisiers.fr</option>
    <option>simplet@menuisiers.fr</option>
    <option>doc@menuisiers.fr</option>
  </select>
</p>
<p>
  <label for="favoriteOnly">Sélectionnez votre préféré&nbsp;:</label>
  <select name="favoriteOnly" id="favoriteOnly">
    <option>grincheux@menuisiers.fr</option>
    <option>joyeux@menuisiers.fr</option>
    <option>dormeur@menuisiers.fr</option>
    <option>timide@menuisiers.fr</option>
    <option>atchoum@menuisiers.fr</option>
    <option>simplet@menuisiers.fr</option>
    <option>doc@menuisiers.fr</option>
  </select>
</p>
```

{{EmbedLiveSample("Saisir plusieurs options", "", 220)}}

Notez la différence d'apparence entre les deux contrôles de formulaire.

```css
/* Dé-commentez ce CSS pour que le sélecteur multiple ait la même hauteur que le simple. */

/*
select[multiple] {
  height: 1.5em;
  vertical-align: top;
}
select[multiple]:focus,
select[multiple]:active {
  height: auto;
}
*/
```

Il existe plusieurs façons de sélectionner plusieurs options dans un élément `<select>` avec un attribut `multiple`. Selon le système d'exploitation, les utilisateur·ice·s de souris peuvent maintenir les touches <kbd>Ctrl</kbd>, <kbd>Commande</kbd> ou <kbd>Maj</kbd> enfoncées, puis cliquer sur plusieurs options pour les sélectionner/désélectionner. Les utilisateur·ice·s du clavier peuvent sélectionner plusieurs éléments contigus en ciblant l'élément `<select>`, en sélectionnant un élément en haut ou en bas de la plage qu'ils souhaitent sélectionner à l'aide des touches de curseur <kbd>Haut</kbd> et <kbd>Bas</kbd> pour monter et descendre dans les options. La sélection de non-contigus n'est pas aussi bien supportée — les éléments doivent pouvoir être sélectionnés et désélectionnés en appuyant sur <kbd>Espace</kbd>, mais la prise en charge varie selon les navigateurs.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément {{HTMLElement("input")}}
- L'élément {{HTMLElement("select")}}
- [Autoriser les adresses électroniques multiples](/fr/docs/Web/HTML/Reference/Elements/input/email#autoriser_les_adresses_électroniques_multiples)
