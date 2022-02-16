---
title: 'Attribut HTML : multiple'
slug: Web/HTML/Attributes/multiple
tags:
  - Attribute
  - Attributes
  - Constraint validation
  - HTML
translation_of: Web/HTML/Attributes/multiple
---
{{HTMLSidebar}}

L'attribut booléen **`multiple`**, s'il est défini, signifie que le contrôle de formulaire accepte une ou plusieurs valeurs. Valable pour les types de saisie [`email`](/fr/docs/Web/HTML/Element/Input/email) et [`file`](/fr/docs/Web/HTML/Element/Input/file) et l'élément [`<select>`](/fr/docs/Web/HTML/Element/select), la manière dont l'utilisateur opte pour plusieurs valeurs dépend du contrôle de formulaire.

Selon le type, le contrôle de formulaire peut avoir une apparence différente si l'attribut `multiple` est défini. Pour le type de saisie de fichier, la messagerie native fournie par le navigateur diffère. Dans Firefox, l'entrée de fichier indique « Aucun fichier sélectionné » lorsque l'attribut est présent et « Aucun fichier sélectionné » dans le cas contraire, lorsqu'aucun fichier n'est sélectionné. La plupart des navigateurs affichent une zone de liste déroulante pour un contrôle [`<select>`](/fr/docs/Web/HTML/Element/select) avec l'attribut `multiple` défini contre une liste déroulante à une ligne lorsque l'attribut est omis. L'entrée [`email`](/fr/docs/Web/HTML/Element/Input/email) s'affiche de la même manière, mais correspondra à la pseudo-classe [`:invalid`](/fr/docs/Web/CSS/:invalid) si plus d'une adresse électronique séparée par des virgules est incluse en l'absence de l'attribut.

Lorsque `multiple` est défini sur le type de saisie [`email`](/fr/docs/Web/HTML/Element/Input/email), l'utilisateur peut inclure zéro (si ce n'est pas également [`required`](/fr/docs/Web/HTML/Attributes/required)), une ou plusieurs adresses électroniques séparées par des virgules.

```html
<input type="email" multiple name="emails" id="emails">
```

Si et seulement si l'attribut `multiple` est spécifié, la valeur peut être une liste d'adresses électroniques correctement formées et séparées par des virgules. Tout espace blanc de queue et de tête est supprimé de chaque adresse de la liste.

Lorsque `multiple` est défini sur le type d'entrée [`file`](/fr/docs/Web/HTML/Element/Input/file), l'utilisateur peut sélectionner un ou plusieurs fichiers. L'utilisateur peut choisir plusieurs fichiers dans le sélecteur de fichiers de n'importe quelle manière que la plateforme qu'il a choisie permet (par exemple, en maintenant la touche <kbd>Maj</kbd> ou <kbd>Ctrl</kbd> enfoncée, puis en cliquant).

```html
<input type="file" multiple name="uploads" id="uploads">
```

Lorsque l'attribut est omis, l'utilisateur ne peut sélectionner qu'un seul fichier par `<input>`.

L'attribut `multiple` de l'élément [`<select>`](/fr/docs/Web/HTML/Element/select) représente un contrôle permettant de sélectionner zéro ou plusieurs options dans la liste d'options. Sinon, l'élément [`<select>`](/fr/docs/Web/HTML/Element/select) représente un contrôle permettant de sélectionner une seule [`<option>`](/fr/docs/Web/HTML/Element/Option) dans la liste d'options.

```html
<select multiple name="dwarfs" id="dwarfs">
  <option>Grincheux</option>
  <option>Joyeux</option>
  <option>Dormeur</option>
  <option>Timide</option>
  <option>Atchoum</option>
  <option>Simplet</option>
  <option>Doc</option>
</select>
```

Lorsque `multiple` est spécifié, la plupart des navigateurs affichent une boîte de liste défilante au lieu d'une liste déroulante à ligne unique.

## Exemples

### Saisie d'adresses électroniques

```html
<label for="emails">A qui voulez-vous adresser un courriel ?</label>
<input type="email" multiple name="emails" id="emails" list="dwarfemails" required size="64">

<datalist id="dwarfemails">
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
input:invalid {border: red solid 3px;}
```

Si et seulement si l'attribut `multiple` est spécifié, la valeur peut être une liste d'adresses électroniques correctement formées et séparées par des virgules. Tout espace blanc de queue et de tête est supprimé de chaque adresse de la liste. Si l'attribut [`required`](/fr/docs/Web/HTML/Attributs/required) est présent, au moins une adresse électronique est requise.

Certains navigateurs prennent en charge l'apparition de la [liste](/fr/docs/Web/HTML/Attributes/list) d'options de la [`<datalist>`](/fr/docs/Web/HTML/Element/datalist) pour les adresses électroniques ultérieures lorsque `multiple` est présent. D'autres ne le font pas.

{{EmbedLiveSample("Saisie_d'adresses_électroniques", '', 80)}}

### Saisie de fichiers

Lorsque `multiple` est défini sur le type de saisie [`file`](/fr/docs/Web/HTML/Element/Input/file), l'utilisateur peut sélectionner un ou plusieurs fichiers :

```html
<form method="post" enctype="multipart/form-data">
  <p>
    <label for="uploads">
      Choisissez les images que vous voulez télécharger :
    </label>
    <input type="file" id="uploads" name="uploads" accept=".jpg, .jpeg, .png, .svg, .gif" multiple>
  </p>
  <p>
    <label for="text">Choisissez un fichier texte à télécharger :</label>
    <input type="file" id="text" name="text" accept=".txt">
 </p>
  <p>
    <input type="submit" value="Soumettre">
  </p>
</form>
```

{{EmbedLiveSample("Saisie_de_fichiers", '', 160)}}

Notez la différence d'aspect entre l'exemple avec `multiple` défini et l'autre entrée `file` sans.

Lorsque le formulaire est soumis, si nous avions utilisé [`method="get"`](/fr/docs/Web/HTML/Element/Form) le nom de chaque fichier sélectionné aurait été ajouté aux paramètres de l'URL sous la forme `?uploads=img1.jpg&uploads=img2.svg`. Cependant, étant donné que nous sommes en train d'additionner les données du formulaire [multipart](/fr/docs/Web/API/XMLHttpRequest/multipart), nous devons utiliser POST. Voir l'élément [`<form>`](/fr/docs/Web/HTML/Element/Form) et [l'envoi de données de formulaire](/fr/docs/Learn/Forms/Sending_and_retrieving_form_data#the_method_attribute) pour plus d'informations.

### Saisir plusieurs options

L'attribut `multiple` de l'élément [`<select>`](/fr/docs/Web/HTML/Element/select) représente un contrôle permettant de sélectionner zéro ou plusieurs options dans la liste d'options. Sinon, l'élément [`<select>`](/fr/docs/Web/HTML/Element/select) représente un contrôle permettant de sélectionner une seule [`<option>`](/fr/docs/Web/HTML/Element/Option) dans la liste des options. L'apparence du contrôle varie généralement en fonction de la présence de l'attribut multiple, la plupart des navigateurs affichant une liste déroulante à défilement au lieu d'une liste déroulante à ligne unique lorsque l'attribut est présent.

```html
<form method="get" action="#">
<p>
 <label for="dwarfs">Sélectionnez les menuisiers que vous aimez :</label>
  <select multiple name="dwarfs" id="dwarfs">
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
 <label for="favoriteOnly">Sélectionnez votre préféré :</label>
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
<p>
  <input type="submit" value="Soumettre">
</p>
</form>
```

{{EmbedLiveSample("Saisir_plusieurs_options", '', 220)}}

Notez la différence d'apparence entre les deux contrôles de formulaire.

```css
/* Décommentez ce CSS pour que le sélecteur multiple ait la même hauteur que le simple. */

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

Il existe plusieurs façons de sélectionner plusieurs options dans un élément `<select>` avec un attribut `multiple`. Selon le système d'exploitation, les utilisateurs de souris peuvent maintenir les touches <kbd>Ctrl</kbd>, <kbd>Commande</kbd> ou <kbd>Maj</kbd> enfoncées, puis cliquer sur plusieurs options pour les sélectionner/désélectionner. Les utilisateurs du clavier peuvent sélectionner plusieurs éléments contigus en ciblant l'élément `<select>`, en sélectionnant un élément en haut ou en bas de la plage qu'ils souhaitent sélectionner à l'aide des touches de curseur <kbd>Haut</kbd> et <kbd>Bas</kbd> pour monter et descendre dans les options. La sélection de non-contigus n'est pas aussi bien supportée : les éléments devraient pouvoir être sélectionnés et désélectionnés en appuyant sur <kbd>Espace</kbd> , mais le support varie selon les navigateurs.

## Accessibilité

Fournissez des instructions pour aider les utilisateurs à comprendre comment remplir le formulaire et utiliser les contrôles individuels du formulaire. Indiquez toute entrée obligatoire et facultative, les formats de données et toute autre information pertinente. Lorsque vous utilisez l'attribut `multiple`, informez l'utilisateur que plusieurs valeurs sont autorisées et donnez des indications sur la manière de fournir plusieurs valeurs, par exemple « séparez les adresses électroniques par une virgule ».

Définir `size="1"` sur une sélection multiple peut la faire apparaître comme une sélection unique dans certains navigateurs, mais elle ne s'étend alors pas au focus, ce qui nuit à la convivialité. Ne faites pas cela. Si vous modifiez l'apparence d'une sélection, et même si vous ne le faites pas, veillez à informer l'utilisateur que plusieurs options peuvent être sélectionnées par une autre méthode.

## Spécifications

| Spécification                                                                                                    | Statut                           |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| {{SpecName('HTML WHATWG', 'input.html#attr-input-multiple', 'l\'attribut multiple')}} | {{Spec2('HTML WHATWG')}} |
| {{SpecName('HTML5 W3C', 'input.html#attr-input-multiple', 'l\'attribut multiple')}} | {{Spec2('HTML5 W3C')}}     |

## Voir aussi

- L'élément [`<input>`](/fr/docs/Web/HTML/Element/Input)
- L'élément [`<select>`](/fr/docs/Web/HTML/Element/select)
- [Autoriser les adresses électroniques multiples](/fr/docs/Web/HTML/Element/Input/email#allowing_multiple_e-mail_addresses)
