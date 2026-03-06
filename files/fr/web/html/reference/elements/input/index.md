---
title: "<input> : l'élément de saisie dans un formulaire"
slug: Web/HTML/Reference/Elements/input
l10n:
  sourceCommit: c10cfb6daba8fe6fc5366f2e1ca1bd32de8a537f
---

L'élément [HTML](/fr/docs/Web/HTML) **`<input>`** permet de créer des contrôles interactifs pour les formulaires web afin d'accepter des données de la part de l'utilisateur·ice&nbsp;; une grande variété de types de données d'entrée et de widgets de contrôle est disponible, selon l'appareil et {{Glossary("user agent", "agent utilisateur")}}. L'élément `<input>` est l'un des éléments HTML les plus puissants et les plus complexes en raison du grand nombre de combinaisons possibles de types d'entrée et d'attributs.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;input type=&quot;text&quot;&gt;", "tabbed-shorter")}}

```html interactive-example
<label for="name">Nom (4 à 8 caractères)&nbsp;:</label>

<input
  type="text"
  id="name"
  name="name"
  required
  minlength="4"
  maxlength="8"
  size="10" />
```

```css interactive-example
label {
  display: block;
  font:
    1rem "Fira Sans",
    sans-serif;
}

input,
label {
  margin: 0.4rem 0;
}
```

## Les différents types de champs `<input>`

La façon dont un élément `<input>` fonctionne dépend grandement de la valeur de son attribut [`type`](#type). Aussi, pour chacun de ces types, on aura une page de référence dédiée. Par défaut, lorsque l'attribut `type` n'est pas présent, il aura la valeur implicite `text`.

<table class="no-markdown">
  <colgroup>
    <col/>
    <col style="width: 50%"/>
    <col/>
  </colgroup>
  <thead>
    <tr>
      <th>Type</th>
      <th>Description</th>
      <th>Exemple simple</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>{{HTMLElement("input/button", "button")}}</code></td>
      <td>Un bouton sans comportement défini qui affiche la valeur de l'attribut <a href="#value"><code>value</code></a> qui est vide par défaut.
      </td>
      <td id="examplebutton">
        <pre class="brush: html hidden">
&#x3C;input type="button" name="button" value="Button" /></pre>
        {{EmbedLiveSample("examplebutton",200,55)}}
      </td>
    </tr>
    <tr>
      <td><code>{{HTMLElement("input/checkbox", "checkbox")}}</code></td>
      <td>Une case à cocher qui permet de sélectionner/désélectionner une valeur.</td>
      <td id="examplecheckbox">
        <pre class="brush: html hidden">
&#x3C;input type="checkbox" name="checkbox"/></pre>
        {{EmbedLiveSample("examplecheckbox",200,55)}}
      </td>
    </tr>
    <tr>
      <td><code>{{HTMLElement("input/color", "color")}}</code></td>
      <td>Un contrôle qui permet de définir une couleur, cela ouvre un sélecteur de couleur dans les navigateurs qui le prennent en charge.</td>
      <td id="examplecolor">
        <pre class="brush: html hidden">
&#x3C;input type="color" name="color"/></pre>
        {{EmbedLiveSample("examplecolor",200,55)}}
      </td>
    </tr>
    <tr>
      <td><code>{{HTMLElement("input/date", "date")}}</code></td>
      <td>Un contrôle qui permet de saisir une date (composé d'un jour, d'un mois et d'une année mais sans heure), cela ouvre un sélecteur de date ou des roues numériques pour la sélection du jour/mois/année dans les navigateurs qui le prennent en charge.
      </td>
      <td id="exampledate">
        <pre class="brush: html hidden">
&#x3C;input type="date" name="date"/></pre>
        {{EmbedLiveSample("exampledate",200,55)}}
      </td>
    </tr>
    <tr>
      <td><code>{{HTMLElement("input/datetime-local", "datetime-local")}}</code></td>
      <td>Un contrôle qui permet de saisir une date et une heure (sans fuseau horaire), cela ouvre un sélecteur de date ou des roues numériques pour la sélection de la date et de l'heure dans les navigateurs qui le prennent en charge.
      </td>
      <td id="exampledtl">
        <pre class="brush: html hidden">
&#x3C;input type="datetime-local" name="datetime-local"/></pre>
        {{EmbedLiveSample("exampledtl",200,55)}}
      </td>
    </tr>
    <tr>
      <td><code>{{HTMLElement("input/email", "email")}}</code></td>
      <td>
        Un champ qui permet de saisir une adresse électronique, il ressemble à un champ de type <code>text</code>, mais possède des fonctionnalités de validation et l'adaptation du clavier pour les navigateurs et appareils qui ont des claviers dynamiques.
      </td>
      <td id="exampleemail">
        <pre class="brush: html hidden">
&#x3C;input type="email" name="email"/></pre>
        {{EmbedLiveSample("exampleemail",200,55)}}
      </td>
    </tr>
    <tr>
      <td><code>{{HTMLElement("input/file", "file")}}</code></td>
      <td>Un contrôle qui permet de sélectionner un fichier. L'attribut <a href="#accept"><code>accept</code></a> peut être utilisé pour définir les types de fichiers qui peuvent être sélectionnés.
      </td>
      <td id="examplefile">
        <pre class="brush: html hidden">
&#x3C;input type="file" accept="image/*, text/*" name="file"/></pre>
        {{EmbedLiveSample("examplefile",'100%',55)}}
      </td>
    </tr>
    <tr>
      <td><code>{{HTMLElement("input/hidden", "hidden")}}</code></td>
      <td>Un contrôle qui n'est pas affiché mais dont la valeur est envoyée au serveur. Il y a un exemple dans la colonne à côté, mais il est caché&nbsp;!
      </td>
      <td id="examplehidden">
        <pre class="brush: html hidden">
&#x3C;input id="userId" name="userId" type="hidden" value="abc123"></pre
        >
        {{EmbedLiveSample("examplehidden",200,55)}}
      </td>
    </tr>
    <tr>
      <td><code>{{HTMLElement("input/image", "image")}}</code></td>
      <td>Un bouton graphique d'envoi du formulaire. L'attribut <a href="#src"><code>src</code></a> doit être défini avec la source de l'image et l'attribut <a href="#alt"><code>alt</code></a> doit être défini avec le texte alternatif si l'image est absente.</td>
      <td id="exampleimage">
        <pre class="brush: html hidden">
&#x3C;input type="image" name="image" src="" alt="image input"/></pre>
        {{EmbedLiveSample("exampleimage",200,55)}}
      </td>
    </tr>
    <tr>
      <td><code>{{HTMLElement("input/month", "month")}}</code></td>
      <td>Un contrôle qui permet de saisir un mois et une année (sans fuseau horaire).</td>
      <td id="examplemonth">
        <pre class="brush: html hidden">
&#x3C;input type="month" name="month"/></pre>
        {{EmbedLiveSample("examplemonth",200,55)}}
      </td>
    </tr>
    <tr>
      <td><code>{{HTMLElement("input/number", "number")}}</code></td>
      <td>Un contrôle qui permet de saisir un nombre, affichant des curseurs pour augmenter/réduire la valeur et disposant d'une validation par défaut lorsqu'elle est prise en charge. Un clavier numérique est affiché pour certains appareils avec des claviers dynamiques.</td>
      <td id="examplenumber">
        <pre class="brush: html hidden">
&#x3C;input type="number" name="number"/></pre>
        {{EmbedLiveSample("examplenumber",200,55)}}
      </td>
    </tr>
    <tr>
      <td><code>{{HTMLElement("input/password", "password")}}</code></td>
      <td>Un champ texte sur une seule ligne dont la valeur est masquée et qui affichera une alerte si le site n'est pas sécurisé.</td>
      <td id="examplepassword">
        <pre class="brush: html hidden">
&#x3C;input type="password" name="password"/></pre>
        {{EmbedLiveSample("examplepassword",200,55)}}
      </td>
    </tr>
    <tr>
      <td><code>{{HTMLElement("input/radio", "radio")}}</code></td>
      <td>Un bouton radio qui permet de sélectionner une seule valeur parmi un groupe de différentes valeurs portant le même attribut <a href="#name"><code>name</code></a>.</td>
      <td id="exampleradio">
        <pre class="brush: html hidden">
&#x3C;input type="radio" name="radio"/></pre
        >
        {{EmbedLiveSample("exampleradio",200,55)}}
      </td>
    </tr>
    <tr>
      <td><code>{{HTMLElement("input/range", "range")}}</code></td>
      <td>Un contrôle qui permet de saisir un nombre dont la valeur exacte n'est pas importante. Le contrôle qui s'affiche est une jauge horizontale avec la valeur par défaut placée au milieu. On l'utilise avec les attributs <a href="#min"><code>min</code></a> et <a href="#max"><code>max</code></a> pour définir un intervalle des valeurs acceptables.</td>
      <td id="examplerange">
        <pre class="brush: html hidden">
&#x3C;input type="range" name="range" min="0" max="25"/></pre>
        {{EmbedLiveSample("examplerange",200,55)}}
      </td>
    </tr>
    <tr>
      <td><code>{{HTMLElement("input/reset", "reset")}}</code></td>
      <td>Un bouton qui réinitialise le contenu du formulaire avec les valeurs par défaut. Ce type d'élément n'est pas recommandé.</td>
      <td id="examplereset">
        <pre class="brush: html hidden">
&#x3C;input type="reset" name="reset"/></pre
        >
        {{EmbedLiveSample("examplereset",200,55)}}
      </td>
    </tr>
    <tr>
      <td><code>{{HTMLElement("input/search", "search")}}</code></td>
      <td>Un champ texte sur une ligne pour des termes de recherche. Les sauts de ligne sont automatiquement retirés. Le contrôle peut disposer d'une icône permettant de réinitialiser le champ. Une icône de recherche est affichée à la place de la touche <kbd>Entrée</kbd>/ pour certains appareils avec des claviers dynamiques.</td>
      <td id="examplesearch">
        <pre class="brush: html hidden">
&#x3C;input type="search" name="search"/></pre>
        {{EmbedLiveSample("examplesearch",200,55)}}
      </td>
    </tr>
    <tr>
      <td><code>{{HTMLElement("input/submit", "submit")}}</code></td>
      <td>Un bouton qui envoie le formulaire.</td>
      <td id="examplesubmit">
        <pre class="brush: html hidden">
&#x3C;input type="submit" name="submit"/></pre>
        {{EmbedLiveSample("examplesubmit",200,55)}}
      </td>
    </tr>
    <tr>
      <td><code>{{HTMLElement("input/tel", "tel")}}</code></td>
      <td>Un contrôle pour saisir un numéro de téléphone, qui affiche un clavier téléphonique pour certains appareils avec des claviers dynamiques.
      </td>
      <td id="exampletel">
        <pre class="brush: html hidden">
&#x3C;input type="tel" name="tel"/></pre>
        {{EmbedLiveSample("exampletel",200,55)}}
      </td>
    </tr>
    <tr>
      <td><code>{{HTMLElement("input/text", "text")}}</code></td>
      <td>La valeur par défaut de <code>type</code>. Un champ texte sur une seule ligne. Les sauts de ligne sont automatiquement retirés.</td>
      <td id="exampletext">
        <pre class="brush: html hidden">
&#x3C;input type="text" name="text"/></pre
        >
        {{EmbedLiveSample("exampletext",200,55)}}
      </td>
    </tr>
    <tr>
      <td><code>{{HTMLElement("input/time", "time")}}</code></td>
      <td>Un contrôle pour saisir une valeur temporelle sans fuseau horaire.</td>
      <td id="exampletime">
        <pre class="brush: html hidden">
&#x3C;input type="time" name="time"/></pre>
        {{EmbedLiveSample("exampletime",200,55)}}
      </td>
    </tr>
    <tr>
      <td><code>{{HTMLElement("input/url", "url")}}</code></td>
      <td>Un champ permettant de saisir une URL. Ce contrôle ressemble à un champ de type <code>text</code>, mais dispose de paramètres de validation et d'un clavier adapté pour les navigateurs et appareils qui le prennent en charge et qui ont un clavier dynamique.
      </td>
      <td id="exampleurl">
        <pre class="brush: html hidden">
&#x3C;input type="url" name="url"/></pre
        >
        {{EmbedLiveSample("exampleurl",200,55)}}
      </td>
    </tr>
    <tr>
      <td><code>{{HTMLElement("input/week", "week")}}</code></td>
      <td>Un contrôle permettant de saisir une date représentée par un numéro de semaine et une année (sans indication de fuseau horaire).</td>
      <td id="exampleweek">
        <pre class="brush: html hidden">
&#x3C;input type="week" name="week"/></pre>
        {{EmbedLiveSample("exampleweek",200,55)}}
      </td>
    </tr>
    <tr>
      <th colspan="3">Valeurs obsolètes</th>
    </tr>
    <tr>
      <td><code>datetime</code> {{Deprecated_Inline}}</td>
      <td>Un contrôle pour saisir une date et une heure selon un fuseau horaire UTC.</td>
      <td id="exampledatetime">
        <pre class="brush: html hidden">
&#x3C;input type="datetime" name="datetime"/></pre>
        {{EmbedLiveSample("exampledatetime",200,75)}}
      </td>
    </tr>
  </tbody>
</table>

## Attributs

L'élément `<input>` est l'un des éléments HTML les plus complexes et puissants en raison de ses attributs et notamment de [`type`](#type), le plus important. Chaque élément `<input>`, quel que soit son type, étant basé sur l'interface DOM [`HTMLInputElement`](/fr/docs/Web/API/HTMLInputElement), ils partagent tous, techniquement, les mêmes attributs. Toutefois, certains attributs ne fonctionnent que pour certains types de champs et certains attributs fonctionnent spécifiquement selon le type de champ.

Dans cette section, nous verrons un tableau qui liste l'ensemble des attributs avec une rapide description. Ce tableau est suivi d'une liste plus détaillée de chaque attribut et des types auxquels ils sont associés. Les attributs communs à tous les types sont détaillés dans cet article, ceux qui sont uniques à certains types ou qui ont un comportement spécifique pour un type donné sont documentés sur les pages des types respectifs.

Sur cette page, vous trouverez des informations sur les attributs communs à l'ensemble des types d'éléments `<input>` ainsi que la description de quelques attributs notables.

Les éléments `<input>` peuvent utiliser les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes) et les attributs suivants&nbsp;:

| Attribut                                      | Type(s)                                                                  | Description                                                                                                               |
| --------------------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| [`accept`](#accept)                           | `file`                                                                   | Une indication quant au type de fichier attendu pour l'<i lang="en">upload</i>                                            |
| [`alpha`](#alpha)                             | `color`                                                                  | Opacité de la couleur                                                                                                     |
| [`alt`](#alt)                                 | `image`                                                                  | Un texte alternatif à l'image, nécessaire pour une accessibilité correcte                                                 |
| [`autocapitalize`](#autocapitalize)           | tous sauf `url`, `email` et `password`                                   | Contrôle la mise en majuscule automatique du text saisie.                                                                 |
| [`autocomplete`](#autocomplete)               | tous sauf `checkbox`, `radio` et les boutons                             | Une indication pour le remplissage automatique du formulaire                                                              |
| [`capture`](#capture)                         | `file`                                                                   | La méthode de capture du média pour l'upload du fichier                                                                   |
| [`checked`](#checked)                         | `radio`, `checkbox`                                                      | Indique si l'option est sélectionnée ou si la case est cochée                                                             |
| [`colorspace`](#colorspace)                   | `color`                                                                  | Un [espace colorimétrique](/fr/docs/Glossary/Color_space) qui doit être utilisé pour sélectionner la valeur de la couleur |
| [`dirname`](#dirname)                         | `hidden`, `text`, `search`, `url`, `tel`, `email`                        | Le nom du champ de formulaire à utiliser pour envoyer le sens d'écriture de l'élément à l'envoi du formulaire             |
| [`disabled`](#disabled)                       | tous                                                                     | Indique si le contrôle est désactivé                                                                                      |
| [`form`](#form)                               | tous                                                                     | Associe un contrôle à un élément de formulaire                                                                            |
| [`formaction`](#formaction)                   | `image`, `submit`                                                        | L'URL à utiliser pour l'envoi du formulaire                                                                               |
| [`formenctype`](#formenctype)                 | `image`, `submit`                                                        | L'encodage des données à utiliser pour l'envoi du formulaire                                                              |
| [`formmethod`](#formmethod)                   | `image`, `submit`                                                        | La méthode HTTP à utiliser pour envoyer le formulaire                                                                     |
| [`formnovalidate`](#formnovalidate)           | `image`, `submit`                                                        | Surcharge la validation du contrôle dictée par le formulaire pour l'envoi de ce dernier                                   |
| [`formtarget`](#formtarget)                   | `image`, `submit`                                                        | Le contexte de navigation à utiliser pour l'envoi du formulaire                                                           |
| [`height`](#height)                           | `image`                                                                  | Analogue à l'attribut `height` de l'élément {{HTMLElement("img")}}&nbsp;; la hauteur de l'image                           |
| [`list`](#list)                               | tous sauf `hidden`, `password`, `checkbox`, `radio` et les boutons       | La valeur de l'attribut `id` de l'élément {{HTMLElement("datalist")}} fournissant les options d'autocomplétion            |
| [`max`](#max)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`     | La valeur maximale                                                                                                        |
| [`maxlength`](#maxlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                      | La longueur maximale (en nombre de caractères) de l'attribut `value`                                                      |
| [`min`](#min)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`     | La valeur minimale                                                                                                        |
| [`minlength`](#minlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                      | La longueur minimale (en nombre de caractères) de l'attribut `value`                                                      |
| [`multiple`](#multiple)                       | `email`, `file`                                                          | Un booléen indiquant si plusieurs valeurs sont acceptées                                                                  |
| [`name`](#name)                               | tous                                                                     | Le nom associé au contrôle et qui est envoyé avec le formulaire associé à la valeur sous la forme d'une paire nom/valeur  |
| [`pattern`](#pattern)                         | `text`, `search`, `url`, `tel`, `email`, `password`                      | Un motif que la valeur doit respecter afin d'être valide                                                                  |
| [`placeholder`](#placeholder)                 | `text`, `search`, `url`, `tel`, `email`, `password`, `number`            | Un texte qui apparaît dans le contrôle lorsqu'aucune valeur n'y est écrite                                                |
| [`popovertarget`](#popovertarget)             | `button`                                                                 | Définit un `<input type="button">` en tant que contrôle pour un élément <i lang="en">popover</i>                          |
| [`popovertargetaction`](#popovertargetaction) | `button`                                                                 | Définit l'action que le <i lang="en">popover</i> va devoir accomplir                                                      |
| [`readonly`](#readonly)                       | tous sauf `hidden`, `range`, `color`, `checkbox`, `radio` et les boutons | Un booléen indiquant que la valeur n'est pas éditable                                                                     |
| [`required`](#required)                       | tous sauf `hidden`, `range`, `color` et les boutons                      | Un booléen indiquant que la valeur est requise ou que le contrôle doit être coché avant de pouvoir envoyer le formulaire  |
| [`size`](#size)                               | `text`, `search`, `url`, `tel`, `email`, `password`                      | La taille du contrôle                                                                                                     |
| [`src`](#src)                                 | `image`                                                                  | Analogue à l'attribut `src` de l'élément {{HTMLElement("img")}}&nbsp;; indique l'emplacement de l'image                   |
| [`step`](#step)                               | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`     | Un incrément pour les valeurs valides                                                                                     |
| [`switch`](#switch)                           | `checkbox`                                                               | Indique si l'entrée de type case à cocher doit être rendue comme un interrupteur                                          |
| [`type`](#type)                               | tous                                                                     | Le type de contrôle de formulaire                                                                                         |
| [`value`](#value)                             | tous sauf `image`                                                        | La valeur initiale du contrôle                                                                                            |
| [`width`](#width)                             | `image`                                                                  | Analogue à l'attribut `width` de l'élément {{HTMLElement("img")}}                                                         |

Certains attributs non-standard supplémentaires sont listés après les descriptions des attributs standard.

### Attributs individuels

- [`accept`](/fr/docs/Web/HTML/Reference/Attributes/accept)
  - : Uniquement valide pour le type `file`, cet attribut définit les types de fichiers qui peuvent être sélectionnés. Voir la page détaillée sur [`<input type="file">`](/fr/docs/Web/HTML/Reference/Elements/input/file).

- `alpha` {{Experimental_Inline}}
  - : Valide uniquement pour le type d'entrée `color`, l'attribut `alpha` permet à l'utilisateur·ice de définir l'opacité de la couleur sélectionnée.

- `alt`
  - : Uniquement valide pour le type `image`, cet attribut fournit un texte alternatif à l'image qui est affiché lorsque l'attribut [`src`](#src) de l'image est absent ou que le chargement de l'image a échoué. Voir la page détaillée sur [`<input type="image">`](/fr/docs/Web/HTML/Reference/Elements/input/image).

- `autocapitalize`
  - : Contrôle si le texte saisi doit être automatiquement mis en majuscule et, le cas échéant, de quelle manière. Voir la page de l'attribut universel [`autocapitalize`](/fr/docs/Web/HTML/Reference/Global_attributes/autocapitalize) pour plus d'informations.

- [`autocomplete`](/fr/docs/Web/HTML/Reference/Attributes/autocomplete)
  - : (Cet attribut **n'est pas** un booléen&nbsp;!) L'attribut [`autocomplete`](/fr/docs/Web/HTML/Reference/Attributes/autocomplete) prend pour valeur une chaîne de caractères séparée par des espaces qui décrit, le cas échéant, le type de fonctionnalité d'autocomplétion que le champ doit fournir. Une implémentation typique de l'autocomplétion rappelle les valeurs précédemment saisies dans le même champ, mais des formes plus complexes d'autocomplétion peuvent exister. Par exemple, un navigateur peut s'intégrer à la liste de contacts d'un appareil pour autocompléter des adresses `email` dans un champ de saisie d'email. Voir [`autocomplete`](/fr/docs/Web/HTML/Reference/Attributes/autocomplete#value) pour les valeurs autorisées.

    L'attribut `autocomplete` est valide pour les types `hidden`, `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, `color` et `password`. Cet attribut n'a aucun effet sur les types d'entrée qui ne renvoient pas de données numériques ou textuelles, étant valide pour tous les types d'entrée sauf `checkbox`, `radio`, `file`, ou l'un quelconque des types de bouton.

    Voir la page de [l'attribut `autocomplete`](/fr/docs/Web/HTML/Reference/Attributes/autocomplete) pour plus d'informations, notamment sur la sécurité des mots de passe et sur la différence d'application de `autocomplete` pour le type `hidden`.

- `autofocus`
  - : Un attribut booléen qui, s'il est présent, indique que le contrôle devrait automatiquement recevoir le focus lorsque le chargement de la page est terminé (ou lorsque l'élément {{HTMLElement("dialog")}} qui contient ce contrôle a été affiché).

    > [!NOTE]
    > Un élément avec l'attribut `autofocus` pourra recevoir le focus avant le déclenchement de l'évènement {{DOMxRef("Document/DOMContentLoaded_event", "DOMContentLoaded")}}.

    Il ne peut pas y avoir plus d'un élément du document avec l'attribut `autofocus`. Si l'attribut est placé sur plus d'un élément, c'est le premier qui reçoit le focus.

    L'attribut `autofocus` ne peut pas être utilisé sur les champs de type `hidden`, car ces derniers sont masqués et ne peuvent pas recevoir le focus.

    > [!WARNING]
    > Affecter le focus de façon automatique peut être source de confusion pour les personnes qui utilisent des lecteurs d'écran ou qui ont des difficultés cognitives. En effet, avec l'affectation d'`autofocus`, les lecteurs d'écran «&nbsp;téléportent&nbsp;» la personne jusqu'au contrôle, sans avertissement préalable.

    On fera particulièrement attention à l'accessibilité en appliquant l'attribut `autofocus`. Le focus automatique peut entraîner le défilement de la page au chargement et faire apparaître le clavier logiciel sur certains appareils tactiles. Bien qu'un lecteur d'écran puisse annoncer le libellé du contrôle qui reçoit le focus, il n'annoncera rien avant le libellé. De même, une personne sans déficience visuelle sur un petit écran manquera certainement le contexte créé par le contenu qui précède.

- [`capture`](/fr/docs/Web/HTML/Reference/Attributes/capture)
  - : Cet attribut, introduit avec la spécification HTML <i lang="en">Media Capture</i>, est uniquement valide pour le type `file`. Il définit quel appareil (micro, caméra, appareil photo) qui devrait être utilisé pour capturer un nouveau fichier à uploader. Voir la page détaillée sur le type `{{HTMLElement("input/file", "file")}}`.
- `checked`
  - : Cet attribut booléen est valide pour les types `radio` et `checkbox`. Lorsqu'il est présent sur un contrôle de type `radio`, il indique que ce bouton radio sera celui sélectionné parmi le groupe de boutons radio qui partagent le même nom. Lorsqu'il est présent sur un contrôle de type `checkbox`, il indique que la case est cochée par défaut au chargement de la page. Attention, il _n'indique pas_ que la case est actuellement cochée, si l'état de la case à cocher change, l'attribut ne reflète pas ce changement (seul l'attribut IDL [`HTMLInputElement.checked`](/fr/docs/Web/API/HTMLInputElement) est mis à jour).

    > [!NOTE]
    > À la différence des autres contrôles de saisie, la valeur d'une case à cocher ou d'un bouton radio est uniquement incluse dans les données envoyées s'ils sont sélectionnés. Si c'est le cas, le nom et la valeur des contrôles sélectionnés sont envoyés.
    >
    > Ainsi, si une case à cocher dont l'attribut `name` vaut `fruit` et dont l'attribut `value` vaut `cerise`, si la case est cochée, les données envoyées avec le formulaire contiendront `fruit=cerise`. Si la case à cocher n'est pas active, elle ne fera pas partie des données envoyées. Pour les cases à cocher et les boutons radio, la valeur par défaut de l'attribut `value` est `on`.

- `colorspace` {{Experimental_Inline}}
  - : Valide uniquement pour le type d'entrée `color`, l'attribut `colorspace` définit {{Glossary("Color_space", "l'espace colorimétrique")}} utilisé par l'entrée `type="color"`. Les valeurs {{Glossary("enumerated", "énumérées")}} possibles sont&nbsp;:
    - `"limited-srgb"`&nbsp;: La couleur se situe dans l'espace colorimétrique {{Glossary("RGB", "sRGB")}}. Cela inclut les fonctions {{CSSxRef("color_value/rgb", "rgb()")}}, {{CSSxRef("color_value/hsl", "hsl()")}}, {{CSSxRef("color_value/hwb", "hwb()")}}, et les valeurs {{CSSxRef("hex-color")}}. La valeur de couleur est limitée à 8 bits par composant `r`, `g` et `b`. C'est la valeur par défaut.
    - `"display-p3"`&nbsp;: L'[espace colorimétrique Display P3](/fr/docs/Glossary/Color_space#display-p3), par exemple `color(display-p3 1.84 -0.19 0.72 / 0.6)`

- [`dirname`](/fr/docs/Web/HTML/Reference/Attributes/dirname)
  - : Cet attribut, uniquement valide pour les types `text` et `search`, permet d'envoyer également le sens d'écriture de la valeur dans le formulaire. Lorsqu'il est présent, le contrôle du formulaire enverra deux paires nom/valeur&nbsp;: la première composée de [`name`](#name) et [`value`](#value), et la seconde composée de la valeur de `dirname` comme nom et de `ltr` ou `rtl` comme valeur, indiquée par le navigateur.

    ```html
    <form action="page.html" method="post">
      <label
        >Fruit&nbsp;:
        <input type="text" name="fruit" dirname="fruit.dir" value="cerise"
      /></label>
      <input type="submit" />
    </form>
    <!-- page.html?fruit=cerise&fruit.dir=ltr -->
    ```

    Lorsque le formulaire précédent est envoyé, on aura l'envoi de deux paires de clé/valeur `name`/`value` d'une part avec `fruit=cerise` et `dirname`/sens d'écriture d'autre part avec `fruit.dir=ltr`.

- [`disabled`](/fr/docs/Web/HTML/Reference/Attributes/disabled)
  - : Un attribut booléen qui, lorsqu'il est présent, indique qu'il n'est pas possible d'interagir avec le champ. Les champs désactivés sont généralement affichés avec une couleur plus sombre ou une autre forme d'indication pour signifier que le champ n'est pas utilisable.

    Plus précisément, les champs désactivés ne reçoivent pas les évènements {{DOMxRef("Element/click_event", "click")}} et ne sont pas envoyés avec le formulaire.

    > [!NOTE]
    > Bien que cela ne soit pas nécessaire selon la spécification, par défaut, Firefox [fera persister l'état désactivé obtenu dynamiquement <sup>(angl.)</sup>](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) pour un champ `<input>` même après des rechargements de la page. C'est l'attribut [`autocomplete`](#autocomplete) qui contrôle cette fonctionnalité.

- [`form`](/fr/docs/Web/HTML/Reference/Attributes/form)
  - : Une chaîne de caractères qui indique l'élément {{HTMLElement("form")}} auquel le contrôle est associé (on parle de son **formulaire propriétaire**). La valeur de la chaîne de caractères, si elle est présente, doit correspondre à la valeur d'un identifiant (l'attribut [`id`](#id)) d'un élément `<form>` du même document. Si cet attribut n'est pas défini, l'élément `<input>` est associé au formulaire qui le contient le plus proche, s'il existe.

    L'attribut `form` permet ainsi de placer un champ n'importe où dans le document tout en l'associant à un formulaire du document situé autre part.

    > [!NOTE]
    > Un champ peut uniquement être associé avec un seul formulaire.

- `formaction`
  - : Uniquement valide pour les types `image` et `submit`. Voir la page détaillée sur le type {{HTMLElement("input/submit", "submit")}}.
- `formenctype`
  - : Uniquement valide pour les types `image` et `submit`. Voir la page détaillée sur le type {{HTMLElement("input/submit", "submit")}}.
- `formmethod`
  - : Uniquement valide pour les types `image` et `submit`. Voir la page détaillée sur le type {{HTMLElement("input/submit", "submit")}}.
- `formnovalidate`
  - : Uniquement valide pour les types `image` et `submit`. Voir la page détaillée sur le type {{HTMLElement("input/submit", "submit")}}.
- `formtarget`
  - : Uniquement valide pour les types `image` et `submit`. Voir la page détaillée sur le type {{HTMLElement("input/submit", "submit")}}.
- `height`
  - : Uniquement valide pour le type `image`, cet attribut indique la hauteur de l'image à afficher sur un bouton d'envoi graphique. Voir la page détaillée sur le type {{HTMLElement("input/image", "image")}}.
- `id`
  - : Un attribut universel, valide pour tous les éléments (y compris `<input>` quel que soit le type), qui définit un identifiant unique au sein du document Son but est de pouvoir cibler un élément précis (pour la mise en forme ou pour créer un lien vers cet élément par exemple). C'est la valeur de cet attribut qui sera utilisée comme valeur de l'attribut `for` d'un élément {{HTMLElement("label")}} pour relier le libellé au champ correspondant. Voir {{HTMLElement("label")}}.
- `inputmode`
  - : Un attribut universel, valide pour tous les éléments, qui fournit une indication au navigateur quant au type de clavier virtuel à utiliser pour l'édition de l'élément ou de son contenu. Les valeurs possibles sont `none`, `text`, `tel`, `url`, `email`, `numeric`, `decimal` et `search`.
- `list`
  - : La valeur fournie à l'attribut `list` doit être l'identifiant (l'attribut {{DOMxRef("Element.id", "id")}}) d'un élément {{HTMLElement("datalist")}} situé dans le même document. L'élément `<datalist>` fournit alors une liste de valeurs prédéfinies qui peuvent être suggérées pour la saisie dans le champ. Toute valeur de cette liste qui n'est pas compatible avec l'attribut [`type`](#type) ne sera pas incluse dans les suggestions. Les valeurs ainsi fournies sont des suggestions et pas des contraintes, une personne pourra tout à fait choisir parmi cette liste ou fournir une valeur différente.

    Cet attribut est valide pour les champs de type `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, et `color`.

    Selon la spécification, l'attribut `list` n'est pas pris en charge pour les types `hidden`, `password`, `checkbox`, `radio`, `file`, et les types de bouton.

    Selon le navigateur, on pourra avoir une palette de couleurs spécifiques en suggestion, des marques présentes sur la piste d'un curseur, voire un contrôle s'ouvrant comme un élément {{HTMLElement("select")}} et qui permet de saisir des valeurs en dehors des suggestions. Voir [le tableau de compatibilité des navigateurs](/fr/docs/Web/HTML/Reference/Elements/datalist#compatibilité_des_navigateurs) pour les autres types de champ.

    Voir également l'élement HTML {{HTMLElement("datalist")}}.

- [`max`](/fr/docs/Web/HTML/Reference/Attributes/max)
  - : Cet attribut est valide pour les types `date`, `month`, `week`, `time`, `datetime-local`, `number`, et `range`, il définit la plus grande valeur possible de l'intervalle des valeurs autorisées. Si la valeur saisie dans l'élément dépasse la valeur de cet attribut, l'élément échouera à [la validation des contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation). Si la valeur de l'attribut `max` n'est pas un nombre, l'élément n'a pas de valeur maximale.

    Il existe un cas particulier pour les types de données périodiques (comme les dates ou les heures), où la valeur de `max` peut être inférieure à celle de `min`, pour avoir par exemple un intervalle de temps entre 10 heures du soir et 4 heures du matin.

- [`maxlength`](/fr/docs/Web/HTML/Reference/Attributes/maxlength)
  - : Cet attribut est valide pour les types `text`, `search`, `url`, `tel`, `email`, et `password`, il définit le nombre maximal de caractères (exprimé en nombre de codets UTF-16) qu'il est possible de saisir dans le champ. La valeur de cet attribut doit être un entier positif. Si aucune valeur de `maxlength` n'est indiquée ou qu'une valeur invalide est fournie, le champ n'a pas de longueur maximale. La valeur de cet attribut doit être supérieure ou égale à celle de `minlength`.

    Le champ échouera à [la validation des contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation) si longueur du texte saisi est supérieure à `maxlength` comme nombre de codets UTF-16. Par défaut, les navigateurs empêchent de saisir plus de caractères que ce qui est permis par l'attribut `maxlength`. Voir [la validation côté client](#validation_côté_client) pour plus d'information.

- [`min`](/fr/docs/Web/HTML/Reference/Attributes/min)
  - : Cet attribut est valide pour les types `date`, `month`, `week`, `time`, `datetime-local`, `number`, et `range`, il définit la valeur la plus faible de l'intervalle des valeurs autorisées. Si la valeur saisie dans l'élément est inférieure à la valeur de cet attribut, l'élément échouera à [la validation des contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation). Si la valeur de l'attribut `min` n'est pas un nombre, l'élément n'a pas de valeur minimale.

    Cette valeur doit être inférieure ou égale à la valeur fournie par l'attribut `max`. Si l'attribut `min` est présent mais sans valeur ou avec une valeur invalide, aucune contrainte de minimum n'est appliquée. Si l'attribut `min` est valide et que la valeur saisie dans le contrôle est inférieure à celle de cet attribut, la validation des contraintes empêchera l'envoi du formulaire. Voir [la validation côté client](#validation_côté_client) pour plus d'information.

    Il existe un cas particulier pour les types de données périodiques (comme les dates ou les heures), où la valeur de `max` peut être inférieure à celle de `min`, pour avoir par exemple un intervalle de temps entre 10 heures du soir et 4 heures du matin.

- [`minlength`](/fr/docs/Web/HTML/Reference/Attributes/minlength)
  - : Cet attribut est valide pour les types `text`, `search`, `url`, `tel`, `email`, et `password`, il définit le nombre minimal de caractères (exprimé en {{Glossary("UTF-16", "nombre de codets UTF-16")}}) qu'il est possible de saisir dans le champ. La valeur de cet attribut doit être un entier positif inférieur ou égal à celle de `maxlength`. Si cet attribut est absent ou qu'une valeur invalide est indiquée, le champ n'aura pas de longueur minimale.

    Le champ échouera à [la validation des contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation) si longueur du texte saisi est inférieure à `minlength` comme {{Glossary("UTF-16", "nombre de codets UTF-16")}}. Voir [la validation côté client](#validation_côté_client) pour plus d'information.

- [`multiple`](/fr/docs/Web/HTML/Reference/Attributes/multiple)
  - : Un attribut booléen qui, lorsqu'il est présent, permet de saisir plusieurs adresses électroniques séparées par des virgules ou de sélectionner plusieurs fichiers si le contrôle est de type `file`. Voir les page détaillées sur les types {{HTMLElement("input/email", "email")}} et {{HTMLElement("input/file", "file")}}.

- `name`
  - : Une chaîne de caractères qui fourni le nom associé au contrôle. Le nom est envoyé avec la valeur du contrôle lors de l'envoi du formulaire.

    Cet attribut n'est pas strictement obligatoire mais devrait être utilisé dans la grande majorité des cas. Si un champ n'a pas d'attribut `name` ou que celui-ci est vide, la valeur du champ n'est pas envoyée avec le formulaire (à l'instar des contrôles désactivés, des boutons radio ou cases décochés, et des boutons de réinitialisation).

    Il existe deux cas spéciaux&nbsp;:
    1. `_charset_`&nbsp;: Si cette valeur est utilisée comme nom pour un élément `<input>` de type {{HTMLElement("input/hidden", "hidden")}}, la valeur du champ est automatiquement renseignée par {{Glossary("user agent", "l'agent utilisateur")}} et porte l'encodage de caractères utilisé pour l'envoi du formulaire.
    2. `isindex`&nbsp;: Pour des raisons historiques, le nom [`isindex` <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name) n'est pas autorisé.

    L'attribut [`name`](#name) possède un comportement particulier pour les boutons radio.

    En effet, seul un bouton radio, parmi le groupe de boutons qui portent le même nom, peut être sélectionné à un moment donné. Sélectionner un des boutons radio du groupe déclenchera automatiquement la désélection de tout bouton du groupe précédemment sélectionné. C'est la valeur du bouton radio sélectionné qui est envoyé avec le nom lors de l'envoi du formulaire.

    Lors de la navigation au clavier avec les tabulations, si un bouton est sélectionné, c'est celui-ci qui recevra le focus. Même si les boutons ne sont pas regroupés selon la source HTML, si un bouton du groupe est sélectionné, naviguer au clavier jusqu'à ce groupe passera tous les boutons non sélectionnés jusqu'au bouton sélectionné. Si aucun bouton du groupe n'est sélectionné, le groupe reçoit le focus lorsque le premier bouton du groupe est atteint au clavier.

    Une fois le focus obtenu sur le groupe, on pourra utiliser les flèches du clavier pour naviguer entre les boutons radio du même groupe (c'est-à-dire partageant le même nom/`name`, et pas nécessairement groupés au sein de la source HTML).

    Lorsqu'un élément `<input>` possède un attribut `name`, ce nom devient une propriété de l'objet {{DOMxRef("HTMLFormElement.elements")}} associé au formulaire propriétaire. Ainsi, si on a un champ dont le nom est `invite` et un autre dont le nom est `taille-chat`, on pourra manipuler les données du formulaire en JavaScript comme suit&nbsp;:

    ```js
    let form = document.querySelector("form");

    let nomInvite = form.elements.invite;
    let tailleChat = form.elements["taille-chat"];
    ```

    À l'exécution de ce code, `nomInvite` correspondra à l'objet {{DOMxRef("HTMLInputElement")}} associé au champ `invite`, et de même l'objet `tailleChat` correspondra à l'objet du DOM associé au champ avec le nom `taille-chat`.

    > [!WARNING]
    > Évitez d'attribuer aux éléments de formulaire un `name` correspondant à une propriété native du formulaire, car vous risqueriez alors de remplacer la propriété ou la méthode prédéfinie par cette référence vers l'élément input correspondant.

- [`pattern`](/fr/docs/Web/HTML/Reference/Attributes/pattern)
  - : Valie pour les champs de type `text`, `search`, `url`, `tel`, `email`, cet attribut est une expression rationnelle que la valeur du champ doit respecter afin de [valider les contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation). Cette valeur doit être une expression rationnelle JavaScript valide (voir [`RegExp`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp)) telle que documentée dans [le guide sur les expressions rationnelles](/fr/docs/Web/JavaScript/Guide/Regular_expressions). Le marqueur `'u'` est implicitement appliqué à la compilation de l'expression et le motif est donc traité comme une séquence de codets Unicode et non ASCII. Il ne faut pas encadrer le motif de barres obliques.

    Si l'attribut `pattern` est présent mais sans valeur ou que celle-ci est valide, aucune expression rationnelle n'est appliquée et l'attribut est ignoré. Si la valeur de `pattern` est valide et que la valeur du champ ne respecte pas le motif, le champ échouera à [la validation des contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation) et empêchera l'envoi du formulaire.

    > [!NOTE]
    > En utilisant l'attribut `pattern`, il faut également informer l'utilisateur·ice quant au format attendu, en ajoutant un texte explicatif à proximité. On peut aussi inclure un attribut [`title`](#title) pour expliquer les contraintes à respecter&nbsp;: la plupart des navigateurs afficheront le titre sous la forme d'une bulle d'information. Attention, une explication visible est nécessaire pour une accessibilité correcte, la bulle d'information fournie par `title` n'est qu'une amélioration secondaire.

    Voir [la validation côté client](#validation_côté_client) pour plus d'information.

- `placeholder`
  - : Valide pour les champs de type `text`, `search`, `url`, `tel`, `email`, `password`, et `number`, cet attribut est une chaîne de caractères qui fournit une brève indication quant au type d'information attendu dans le champ. Sa valeur devrait être un mot ou une courte phrase qui indique le type de données attendu plutôt qu'une explication ou une consigne. Le texte de cet attribut _ne doit pas_ inclure de retour chariot ou de saut de ligne. Ainsi, si un champ est destiné à la saisie d'un prénom et que le libellé est «&nbsp;Prénom&nbsp;», une valeur appropriée pour cet attribut pourra être `"ex. Mustafa"`.

    > [!NOTE]
    > Sur le plan sémantique, l'attribut `placeholder` n'est pas aussi utile que d'autres méthodes pour expliquer le formulaire. Il peut aussi causer certains problèmes inattendus avec le contenu. Voir [les libellés](#libellés) pour plus d'informations.

- `popovertarget`
  - : Transforme un élément `<input type="button">` en bouton contrôleur de fenêtre contextuelle (<i lang="en">popover</i> en anglais)&nbsp;; prend comme valeur l'ID de l'élément fenêtre contextuelle à contrôler. Voir la page d'accueil de {{DOMxRef("Popover API", "l'API Popover", "", "nocode")}} pour plus de détails. Établir une relation entre un fenêtre contextuelle et son bouton déclencheur à l'aide de l'attribut `popovertarget` entraîne deux effets supplémentaires utiles&nbsp;:
    - Le navigateur crée une relation implicite [`aria-details`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) et [`aria-expanded`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) entre le fenêtre contextuelle et son déclencheur, et place le fenêtre contextuelle à une position logique dans l'ordre de navigation au clavier lorsque celui-ci est affiché. Cela rend le fenêtre contextuelle plus accessible aux personnes utilisant le clavier et les technologies d'assistance (TA) (voir aussi [Fonctionnalités d'accessibilité des popovers](/fr/docs/Web/API/Popover_API/Using#accessibilité_des_fenêtres_contextuelles)).
    - Le navigateur crée une référence d'ancrage implicite entre les deux, ce qui facilite grandement le positionnement des fenêtres contextuelles par rapport à leurs contrôles en utilisant le [positionnement d'ancre CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning). Voir [Positionnement d'ancre des popovers](/fr/docs/Web/API/Popover_API/Using#positionnement_dancrage_des_fenêtres_contextuelles) pour plus de détails.

- `popovertargetaction`
  - : Définit l'action à accomplir sur l'élément <i lang="en">popover</i> contrôlé par l'élément `<input type="button">`. Les valeurs possibles sont&nbsp;:
    - `"hide"`
      - : Le bouton va masquer un <i lang="en">popover</i> affiché. Si vous essayez de masquer un <i lang="en">popover</i> déjà masqué, aucune action ne sera effectuée.
    - `"show"`
      - : Le bouton va afficher un <i lang="en">popover</i> masqué. Si vous essayez d'afficher un <i lang="en">popover</i> déjà affiché, aucune action ne sera effectuée.
    - `"toggle"`
      - : Le bouton va basculer un <i lang="en">popover</i> entre les états affiché et masqué. Si le <i lang="en">popover</i> est masqué, il sera affiché&nbsp;; si le <i lang="en">popover</i> est affiché, il sera masqué. Si `popovertargetaction` est omis, `"toggle"` est l'action par défaut qui sera effectuée par le bouton de contrôle.

- `readonly`
  - : Un attribut booléen qui, lorsqu'il est présent, indique qu'il ne devrait pas être possible d'éditer la valeur du champ. Cet attribut est pris en charge par les types de contrôle `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, et `password`.

    Voir [l'attribut HTML `readonly`](/fr/docs/Web/HTML/Reference/Attributes/readonly) pour plus d'informations.

- `required`
  - : Un attribut booléen qui, lorsqu'il est présent, indique qu'une valeur doit être saisie avant que le formulaire puisse être envoyé. Cet attribut est pris en charge pour les types de contrôle `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `password`, `checkbox`, `radio`, et `file`.

    Voir [la validation côté client](#validation_côté_client) et [l'attribut HTML `required`](/fr/docs/Web/HTML/Reference/Attributes/required) pour plus d'informations.

- `size`
  - : Cet attribut est uniquement valide pour les types de contrôle `email`, `password`, `tel`, `url` et `text`. Il indique la largeur visible pour le contrôle. D'une certaine façon, il crée un résultat analogue à l'application de la propriété CSS `width`. L'unité de cette valeur dépend du type de contrôle. Pour les champs de type `password` et `text`, il s'agit du nombre de caractères (équivalent à l'unité `em`) et la valeur par défaut vaut `20`. Pour les autres types de champs, la valeur est exprimée en pixels. La largeur définie avec la feuille de style CSS aura la priorité sur cet attribut.
- `src`
  - : Cet attribut est uniquement valide pour le type `image` et indique l'URL du fichier de l'image à afficher sur le bouton. Voir [`<input type="image">`](/fr/docs/Web/HTML/Reference/Elements/input/image) pour plus d'informations.
- `step`
  - : Cet attribut est valide pour les contrôles de type numériques et temporels (`date`, `month`, `week`, `time`, `datetime-local`, `number`, et `range`). L'attribut [`step`](/fr/docs/Web/HTML/Reference/Attributes/step) est un nombre qui définit la granularité de la valeur.

    S'il n'est pas explicitement inclus&nbsp;:
    - Pour les types `number` et `range`, sa valeur par défaut sera 1.
    - Pour les types temporels, la valeur par défaut de `step` dépend du type. Voir les pages individuelles pour plus de détails&nbsp;: [`date`](/fr/docs/Web/HTML/Reference/Elements/input/date#step), [`datetime-local`](/fr/docs/Web/HTML/Reference/Elements/input/datetime-local#step), [`month`](/fr/docs/Web/HTML/Reference/Elements/input/month#step), [`time`](/fr/docs/Web/HTML/Reference/Elements/input/time#step), et [`week`](/fr/docs/Web/HTML/Reference/Elements/input/week#step).

    La valeur de cet attribut doit être un nombre positif (entier ou décimal) ou la valeur spéciale `any` (cette dernière indiquant qu'il n'y a pas de contrainte de granularité et que toute valeur est autorisée (les contraintes imposées par [`min`](/fr/docs/Web/HTML/Reference/Attributes/min) et [`max`](/fr/docs/Web/HTML/Reference/Attributes/max) s'appliquent toujours)).

    Par exemple, si vous avez `<input type="number" min="10" step="2">`, alors tout entier pair, `10` ou plus, est valide. Si `step` est omis (par exemple `<input type="number">`), tout entier est valide, mais les nombres à virgule (comme `4.2`) ne sont pas valides, car `step` a pour valeur par défaut `1`. Pour que `4.2` soit valide, `step` aurait dû être défini sur `any`, `0.1` ou `0.2`, ou bien la valeur `min` aurait dû être un nombre se terminant par `.2`, comme `<input type="number" min="-5.2">`.

    > [!NOTE]
    > Lorsque la donnée saisie ne respecte pas l'incrément, la valeur est considérée comme invalide pour la validation des contraintes et l'élément sera ciblé par la pseudo-classe `:invalid`.

    Voir [la validation côté client](#validation_côté_client) pour plus d'information.

- [`switch`](/fr/docs/Web/HTML/Reference/Elements/input/checkbox#switch) {{Experimental_Inline}} {{Non-standard_Inline}}
  - : Valide uniquement pour les entrées de type `checkbox`, `switch` est un attribut booléen qui indique si l'entrée de type case à cocher doit être rendue comme un interrupteur.

    > [!NOTE]
    > Cet attribut est encore expérimental et bénéficie d'un support limité dans les navigateurs. L'attribut est ignoré sur les navigateurs non pris en charge.

- `tabindex`
  - : Un attribut universel, valide pour tous les éléments, y compris tous les types de `<input>`. Sa valeur est un entier qui indique si l'élément peut prendre le focus et s'il devrait participer à la navigation séquentielle au clavier. Comme tous les types d'élément `<input>`, sauf ceux masqués, peuvent prendre le focus, cet attribut ne devrait pas être utilisé sur les contrôles de formulaire, car cela nécessiterait de gérer l'ordre du focus pour tous les éléments du document, au risque de dégradé l'utilisabilité et l'accessibilité si cela était fait de façon incorrecte.

- `title`
  - : Un attribut universel, valide pour tous les éléments, y compris tous les types de `<input>`. Sa valeur est un texte fournissant des informations à propos de l'élément auquel il appartient. Une telle information est généralement (mais pas nécessairement) affichée sous la forme d'une bulle d'information. `title` ne devrait pas être utilisé comme méthode principale pour expliquer le rôle d'un contrôle de formulaire. Il faut plutôt utiliser l'élément [`<label>`](/fr/docs/Web/HTML/Reference/Elements/label) avec un attribut `for` dont la valeur correspond à la valeur de l'attribut [`id`](#id) du champ de formulaire. Voir [la section sur les libellés](#libellés) ci-après.

- `type`
  - : Une chaîne de caractères qui indique le type de contrôle à afficher. On utilisera par exemple la valeur `checkbox` pour afficher une case à cocher. Si cet attribut est absent (ou qu'une valeur inconnue est utilisée), ce sera un champ de type `text` qui sera utilisé, permettant de saisir un texte dans le contrôle de formulaire.

    Les valeurs autorisées pour cet attribut sont listées dans [la section sur les types de champ](#les_différents_types_de_champs_input) ci-avant.

- `value`
  - : La valeur du contrôle. Lorsque cette valeur est fournie dans le document HTML, il s'agit de la valeur initiale, qui peut ensuite être récupérée et éventuellement modifiée avec JavaScript via la propriété `value` de l'objet {{DOMxRef("HTMLInputElement")}} correspondant. Cet attribut est toujours optionnel en théorie, mais peut être considéré comme obligatoire en pratique pour les types de champ `checkbox`, `radio`, et `hidden`.

- `width`
  - : Cet attribut est uniquement valide pour le type de contrôle `image`, où il exprime la largeur du fichier d'image à afficher sur le bouton graphique. Voir le type {{HTMLElement("input/image", "image")}} pour plus d'informations.

### Attributs non-standards

Les attributs qui suivent ne sont pas standard et sont disponibles dans certains navigateurs uniquement. En règle général, il faut éviter de les utiliser.

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Attribut</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="#incremental"><code>incremental</code></a></td>
      <td>Indique s'il faut envoyer ou non de multiples évènements <a href="/fr/docs/Web/API/HTMLInputElement/search_event"><code>search</code></a> pour mettre à jour les résultats de recherche de façon dynamique lorsque la personne est toujours en train d'éditer la valeur du champ. <strong>Uniquement dans WebKit et Blink (Safari, Chrome, Opera, etc.).</strong>
      </td>
    </tr>
    <tr>
      <td><code>mozactionhint</code> {{Deprecated_Inline}}</td>
      <td><p>Une chaîne de caractères qui indique le type d'action qui sera réalisée lorsque la personne appuiera sur la touche <kbd>Entrée</kbd> ou <kbd>Retour</kbd> lors de l'édition du champ. Il est utilisé pour déterminer le libellé pertinent à utiliser sur un clavier virtuel.</p>
        <p><strong>Obsolète&nbsp;: il faut utiliser <a href="/fr/docs/Web/HTML/Reference/Global_attributes/enterkeyhint"><code>enterkeyhint</code></a> à la place.</strong></p>
      </td>
    </tr>
    <tr>
      <td><a href="#orient"><code>orient</code></a></td>
      <td>Définit l'orientation de la piste pour le curseur. <strong>Uniquement dans Firefox</strong>.</td>
    </tr>
    <tr>
      <td><a href="#results"><code>results</code></a></td>
      <td>Le nombre maximum de résultats qui devraient être affichés dans une liste déroulante affichant les recherches précédentes. <strong>Uniquement dans Safari.</strong></td>
    </tr>
    <tr>
      <td>
        <a href="#webkitdirectory"><code>webkitdirectory</code></a>
      </td>
      <td>Un booléen indiquant s'il est possible de choisir un répertoire (ou plusieurs répertoires si <a href="#multiple"><code>multiple</code></a> est également présent).</td>
    </tr>
  </tbody>
</table>

- `incremental` {{Non-standard_Inline}}
  - : L'attribut booléen `incremental` est une extension WebKit et Blink (donc pris en charge par Safari, Opera, Chrome, etc.) qui, s'il est présent, indique au {{Glossary("user agent", "l'agent utilisateur")}} de traiter l'entrée comme une recherche en direct. Lorsque la personne édite la valeur du champ, l'agent utilisateur envoie des évènements {{DOMxRef("HTMLInputElement/search_event", "search")}} à l'objet {{DOMxRef("HTMLInputElement")}} représentant le champ de recherche. Cela permet à votre code de mettre à jour les résultats de recherche en temps réel pendant l'édition.

    Si `incremental` n'est pas défini, l'évènement {{DOMxRef("HTMLInputElement/search_event", "search")}} n'est envoyé que lorsque la personne déclenche explicitement une recherche (par exemple en appuyant sur la touche <kbd>Entrée</kbd> ou <kbd>Retour</kbd> pendant l'édition du champ).

    L'évènement `search` est soumis à une limitation de fréquence&nbsp;: il n'est pas envoyé plus fréquemment qu'un intervalle défini par l'implémentation.

- `orient` {{Non-standard_Inline}}
  - : Semblable à la propriété CSS non-standard `-moz-orient` pour les éléments {{HTMLElement("progress")}} et {{HTMLElement("meter")}}, cet attribut définit l'orientation de la piste du curseur. Les valeurs possibles pour cet attribut sont `horizontal` (la piste est affichée horizontalement) et `vertical` (la piste est affichée verticalement). Voir [Créer des contrôles de formulaire verticaux](/fr/docs/Web/CSS/Guides/Writing_modes/Vertical_controls) pour une approche moderne permettant de créer des contrôles de formulaire verticaux.

- `results` {{Non-standard_Inline}}
  - : Uniquement pris en charge par Safari, cet attribut est une valeur numérique qui permet de surcharger le nombre de résultats à afficher dans la liste des suggestions de l'élément `<input>` à partir des requêtes précédentes.

    Sa valeur doit être un nombre positif. Si aucune valeur n'est indiquée ou qu'une valeur invalide est fournie, c'est le nombre d'options maximum par défaut du navigateur qui est utilisé.

- `webkitdirectory` {{Non-standard_Inline}}
  - : Un attribut booléen qui, lorsqu'il est présent, indique que seuls les répertoires peuvent être sélectionnés via le sélecteur de fichier. Voir {{DOMxRef("HTMLInputElement.webkitdirectory")}} pour plus de détails et d'exemples.

    Bien qu'originalement implémenté uniquement par les navigateurs WebKit, `webkitdirectory` est également utilisable avec Microsoft Edge et Firefox 50 (ou ultérieur). Toutefois, malgré cette prise en charge assez large, il n'est toujours pas standard et ne devrait pas être utilisé à moins qu'il n'y ait aucune autre alternative.

## Méthodes

Les méthodes suivantes sont fournies par l'interface {{DOMxRef("HTMLInputElement")}} qui représente les éléments `<input>` dans le DOM. Les méthodes des interfaces parentes {{DOMxRef("HTMLElement")}}, {{DOMxRef("Element")}}, {{DOMxRef("Node")}} et {{DOMxRef("EventTarget")}} sont également disponibles.

- {{DOMxRef("HTMLInputElement.checkValidity", "checkValidity()")}}
  - : Renvoie `true` si la valeur de l'élément respecte les conditions de validité, `false` sinon et, dans ce dernier cas, déclenche un évènement {{DOMxRef("HTMLInputElement.invalid_event", "invalid")}} sur l'élément.
- {{DOMxRef("HTMLInputElement.reportValidity", "reportValidity()")}}
  - : Renvoie `true` si la valeur de l'élément respecte les conditions de validité, `false` sinon et, dans ce dernier cas, déclenche un évènement {{DOMxRef("HTMLInputElement.invalid_event", "invalid")}} sur l'élément et, si l'évènement n'est pas annulé, rapporte ce problème à l'utilisateur·ice.
- {{DOMxRef("HTMLInputElement.select", "select()")}}
  - : Sélectionne tout le contenu de l'élément `<input>` sous réserve que son contenu soit sélectionnable. Pour les éléments qui n'ont pas de contenu texte qui puisse être sélectionné (par exemple un sélecteur de couleur ou un calendrier), cette méthode n'a pas d'effet.
- {{DOMxRef("HTMLInputElement.setCustomValidity", "setCustomValidity()")}}
  - : Définit un message particulier à afficher si la valeur de l'élément n'est pas valide.
- {{DOMxRef("HTMLInputElement.setRangeText", "setRangeText()")}}
  - : Modifie le contenu de la valeur entre deux positions de caractères par une nouvelle chaîne de caractères. Un paramètre `selectMode` permet de contrôler la façon dont le contenu existant est affecté.
- {{DOMxRef("HTMLInputElement.setSelectionRange", "setSelectionRange()")}}
  - : Sélectionne un intervalle de caractères dans un champ texte. Cette méthode n'a pas d'effet pour les champs qui ne sont pas des champs texte.
- {{DOMxRef("HTMLInputElement.showPicker", "showPicker()")}}
  - : Affiche le sélecteur fourni par le navigateur, qui s'affiche normalement quand l'élément est sélectionné. Cela permet de déclencher son affichage à partir d'un bouton ou d'une autre interaction.
- {{DOMxRef("HTMLInputElement.stepDown", "stepDown()")}}
  - : Décrémente la valeur d'un champ numérique d'un nombre indiqué d'unités (1 par défaut).
- {{DOMxRef("HTMLInputElement.stepUp", "stepUp()")}}
  - : Incrément la valeur d'un champ numérique d'un nombre indiqué d'unités (1 par défaut).

## CSS

Les éléments de saisie, en tant qu'éléments remplacés, ont quelques fonctionnalités qui ne s'appliquent pas aux éléments non formulaires. Il existe des sélecteurs CSS qui peuvent cibler spécifiquement les contrôles de formulaire en fonction de leurs caractéristiques d'interface utilisateur, également appelées pseudo‑classes d'interface utilisateur. L'élément de saisie peut aussi être ciblé par son type à l'aide de sélecteurs d'attribut. Il existe aussi quelques propriétés qui sont particulièrement utiles.

### Pseudo-classes d'interface utilisateur

<table class="no-markdown">
  <caption>Pseudo-classes pertinentes pour l'élément <code>&lt;input&gt;</code></caption>
  <thead>
    <tr>
      <th>Pseudo-classe</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{CSSxRef(":enabled")}}</td>
      <td>S'applique à tout élément actif (qui peut faire l'objet d'une sélection de texte, d'un clic, d'une saisie de texte, etc.) ou accepter le focus.</td>
    </tr>
    <tr>
      <td>{{CSSxRef(":disabled")}}</td>
      <td>S'applique à tout élément désactivé (dont le texte ne peut pas être sélectionné, qui ne peut pas recevoir de clic ou de saisie de texte) ou qui ne peut pas recevoir le focus.</td>
    </tr>
    <tr>
      <td>{{CSSxRef(":read-only")}}</td>
      <td>S'applique aux éléments qui ne peuvent pas être édités par l'utilisateur·ice.</td>
    </tr>
    <tr>
      <td>{{CSSxRef(":read-write")}}</td>
      <td>S'applique aux éléments éditables.</td>
    </tr>
    <tr>
      <td>{{CSSxRef(":placeholder-shown")}}</td>
      <td>S'applique aux éléments qui affichent actuellement le texte fourni par l'attribut <a href="#placeholder"><code>placeholder</code></a>, y compris les éléments <code>&lt;input&gt;</code> et {{HTMLElement("textarea")}} avec un attribut <code>placeholder</code> présent mais sans valeur pour le moment.</td>
    </tr>
    <tr>
      <td>{{CSSxRef(":default")}}</td>
      <td>S'applique aux éléments de formulaire qui sont les options par défaut parmi les groupes d'éléments associés entre eux. Correspond aux entrées de type {{HTMLElement("input/checkbox", "checkbox")}} et {{HTMLElement("input/radio", "radio")}} qui sont cochés/sélectionnés au chargement de la page.</td>
    </tr>
    <tr>
      <td>{{CSSxRef(":checked")}}</td>
      <td>S'applique aux entrées de type {{HTMLElement("input/checkbox", "checkbox")}} et {{HTMLElement("input/radio", "radio")}} qui sont actuellement cochés (et à l'élément {{HTMLElement("option")}} sélectionné d'un élément {{HTMLElement("select")}}).</td>
    </tr>
    <tr>
      <td>{{CSSxRef(":indeterminate")}}</td>
      <td>S'applique aux entrées de type {{HTMLElement("input/checkbox", "checkbox")}} dont la propriété <code>indeterminate</code> est fixée à <code>true</code> en JavaScript, aux entrées de type {{HTMLElement("input/radio", "radio")}} lorsque tous les boutons radio d'un groupe sous décochés, et aux éléments {{HTMLElement("progress")}} dans un état indéterminé.</td>
    </tr>
    <tr>
      <td>{{CSSxRef(":valid")}}</td>
      <td>S'applique aux contrôles de formulaire concernés par les contraintes de validation et qui sont actuellement valides.</td>
    </tr>
    <tr>
      <td>{{CSSxRef(":invalid")}}</td>
      <td>S'applique aux contrôles de formulaire concernés par les contraintes de validation et qui sont actuellement invalides. Cible un contrôle de formulaire dont les valeurs ne respectent pas les contraintes imposées par ses attributs comme <a href="#required"><code>required</code></a>, <a href="#pattern"><code>pattern</code></a>, <a href="#step"><code>step</code></a>, et <a href="#max"><code>max</code></a>.</td>
    </tr>
    <tr>
      <td>{{CSSxRef(":in-range")}}</td>
      <td>S'applique aux champs non vides dont la valeur actuelle est située dans les limites d'intervalle définies par les attributs <a href="#min"><code>min</code></a> et <a href="#max"><code>max</code></a> et suit le pas décrit par l'attribut <a href="#step"><code>step</code></a>.
      </td>
    </tr>
    <tr>
      <td>{{CSSxRef(":out-of-range")}}</td>
      <td>S'applique aux champs non vides dont la valeur actuelle est située en dehors des limites d'intervalle définies par les attributs <a href="#min"><code>min</code></a> et <a href="#max"><code>max</code></a> ou qui ne respecte pas la contrainte de granularité dictée par l'attribut <a href="#step"><code>step</code></a>.</td>
    </tr>
    <tr>
      <td>{{CSSxRef(":required")}}</td>
      <td>S'applique aux éléments <code>&lt;input&gt;</code>, {{HTMLElement("select")}} ou {{HTMLElement("textarea")}} qui ont l'attribut <a href="#required"><code>required</code></a>. Seuls les éléments qui peuvent effectivement être obligatoires sont ciblés. Utiliser l'attribut <a href="#required"><code>required</code></a> sur un élément qui ne peut pas devneir obligatoire n'aura aucun effet.</td>
    </tr>
    <tr>
      <td>{{CSSxRef(":optional")}}</td>
      <td>S'applique aux éléments <code>&lt;input&gt;</code>, {{HTMLElement("select")}} ou {{HTMLElement("textarea")}} qui n'ont pas l'attribut <a href="#required"><code>required</code></a>. Les éléments qui ne peuvent pas être obligatoires ne sont pas ciblés.</td>
    </tr>
    <tr>
      <td>{{CSSxRef(":blank")}}</td>
      <td>S'applique aux éléments <code>&lt;input&gt;</code> ou {{HTMLElement("textarea")}} qui n'ont pas de valeur actuellement.</td>
    </tr>
    <tr>
      <td>{{CSSxRef(":user-invalid")}}</td>
      <td>Semblable à <code>:invalid</code>, mais ne s'applique aux champs invalides qu'après une interaction utilisateur (par exemple le passage du focus, la sortie du contrôle ou une tentative d'envoi du formulaire avec le contrôle invalide).</td>
    </tr>
    <tr>
      <td>{{CSSxRef(":open")}}</td>
      <td>
        Les éléments <code>&lt;input&gt;</code> qui affichent un sélecteur permettant à l'utilisateur·ice de choisir une valeur (par exemple <a href="/fr/docs/Web/HTML/Reference/Elements/input/color"><code>&lt;input type="color"&gt;</code></a>) — mais uniquement lorsque l'élément est dans l'état ouvert, c'est‑à‑dire lorsque le sélecteur est affiché.
      </td>
    </tr>
  </tbody>
</table>

#### Exemple d'utilisation des pseudo-classes

On peut mettre en forme le libellé d'une case à cocher selon que la case est cochée ou non. Dans cet exemple, on adapte les propriétés CSS {{CSSxRef("color")}} et {{CSSxRef("font-weight")}} de l'élément {{HTMLElement("label")}} situé immédiatement après une case cochée. On applique aucune mise en forme si l'élément `input` n'est pas coché.

```html hidden
<input id="checkboxInput" type="checkbox" />
<label for="checkboxInput">Activer/désactiver la case à cocher</label>
```

```css
input:checked + label {
  color: red;
  font-weight: bold;
}
```

{{EmbedLiveSample("Exemple d'utilisation des pseudo-classes", 500, 80)}}

### Sélecteurs d'attribut

Il est possible de cibler différents types de contrôles en fonction de la valeur de leur attribut [`type`](#type) grâce aux [sélecteurs d'attribut](/fr/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors). Les sélecteurs d'attribut CSS permettent de cibler des éléments en fonction de la présence ou de la valeur d'un attribut donné.

```css
/* Cible un champ de saisie d'un mot de passe */
input[type="password"] {
}

/* Cible un contrôle de formulaire dont l'intervalle des valeurs valides est délimité par attributs */
input[min][max] {
}

/* Cible un contrôle de formulaire utilisant un attribut pattern */
input[pattern] {
}
```

### `::placeholder`

Par défaut, l'affichage du texte de l'attribut [`placeholder`](#placeholder) se fait en transparence ou avec un gris clair. Le pseudo-élément {{CSSxRef("::placeholder")}} permet de cibler le texte de cet attribut et peut être mis en forme avec un sous-ensemble de propriétés CSS.

```css
::placeholder {
  color: blue;
}
```

Seul le sous-ensemble des propriétés CSS qui s'appliquent au pseudo-élément {{CSSxRef("::first-line")}} peuvent être utilisées dans une règle qui utilise `::placeholder` comme sélecteur.

### `caret-color`

Une propriété spécifique aux éléments permettant la saisie de texte est la propriété CSS {{CSSxRef("caret-color")}}, qui permet de définir la couleur utilisée pour dessiner le curseur de saisie&nbsp;:

#### HTML

```html
<label for="textInput">Vous noterez le curseur rouge&nbsp;:</label>
<input id="textInput" class="custom" size="32" />
```

#### CSS

```css
input.custom {
  caret-color: red;
  font:
    16px "Helvetica",
    "Arial",
    sans-serif;
}
```

#### Résultat

{{EmbedLiveSample("caret-color", 500, 80)}}

### `field-sizing`

La propriété {{CSSxRef("field-sizing")}} permet de contrôler le comportement de dimensionnement des contrôles de formulaire (c'est‑à‑dire qu'ils reçoivent par défaut une taille préférée). Cette propriété permet de remplacer ce comportement par défaut, en autorisant les contrôles de formulaire à s'ajuster en taille pour s'adapter à leur contenu.

Cette propriété est généralement utilisée pour créer des champs de formulaire qui s'ajustent à leur contenu et qui s'agrandissent à mesure que du texte est saisi. Elle fonctionne avec les types d'entrée qui acceptent la saisie directe de texte (par exemple `{{HTMLElement("input/text", "text")}}` et `{{HTMLElement("input/url", "url")}}`), le type d'entrée `{{HTMLElement("input/file", "file")}}` et les éléments {{HTMLElement("textarea")}}.

### `object-position` et `object-fit`

Dans certains cas (le plus souvent pour les champs non-texte et les interfaces spécialisées), l'élément `<input>` est un {{Glossary("replaced elements", "élément remplacé")}}. Lorsque c'est le cas, la taille et la position de l'élément au sein de son cadre peuvent être ajustées grâce aux propriétés CSS {{CSSxRef("object-position")}} et {{CSSxRef("object-fit")}}.

### Mise en forme

Pour plus d'informations sur l'ajout de couleurs aux éléments HTML, voir&nbsp;:

- [Appliquer des couleurs aux éléments HTML en utilisant CSS](/fr/docs/Web/CSS/Guides/Colors/Applying_color).

Voir également&nbsp;:

- [Mettre en forme les formulaires HTML](/fr/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Mise en forme avancée des formulaires HTML](/fr/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)

## Fonctionnalités supplémentaires

### Libellés

Les libellés permettent d'associer les textes explicatifs aux éléments `<input>`. Utiliser un élément {{HTMLElement("label")}} pour fournir des informations explicatives quant à un champ de formulaire est _toujours_ une bonne chose (quel que soit le sujet de mise en forme qui vient après). Ce n'est jamais une mauvaise idée que d'utiliser un élément `<label>` pour expliquer ce qui doit être saisi dans un élément `<input>` ou {{HTMLElement("textarea")}}.

#### Rattachement des libellés

Le rattachement sémantique entre les éléments `<input>` et `<label>` est utile aux outils d'assistance comme les lecteurs d'écran. En les associant grâce à l'attribut [`for`](/fr/docs/Web/HTML/Reference/Elements/label#for) des éléments `<label>`, on lie le libellé au contrôle de formulaire d'une façon qui permet aux lecteurs d'écran de décrire les champs du formulaire plus précisément.

Il ne suffit pas d'avoir un texte normal à côté de l'élément `<input>`. Pour l'utilisabilité et l'accessibilité, on associera un libellé avec {{HTMLElement("label")}} de façon implicite ou explicite&nbsp;:

```html
<!-- inaccessible -->
<p>
  Veuillez saisir votre nom&nbsp;: <input id="name" type="text" size="30" />
</p>

<!-- libellé implicite -->
<p>
  <label
    >Veuillez saisir votre nom&nbsp;: <input id="name" type="text" size="30"
  /></label>
</p>

<!-- libellé explicite -->
<p>
  <label for="name">Veuillez saisir votre nom&nbsp;: </label
  ><input id="name" type="text" size="30" />
</p>
```

Le premier exemple est inaccessible&nbsp;: il n'y a aucune relation entre la consigne de saisie et l'élément `<input>`.

En plus d'un nom accessible, un élément `<label>` permet d'agrandir la zone d'interaction à la souris ou via la surface tactile sur laquelle on peut cliquer/toucher. En associant un élément `<label>` avec un élément `<input>`, si on clique sur l'un des deux, cela passera le focus au contrôle porté par l'élément `<input>`. Si on utilise du texte simple plutôt qu'un élément sémantique, on n'aura pas ces bénéfices. Agrandir la zone d'activation du contrôle aide les personnes avec un handicap moteur.

En développant sur le Web, il est important de ne pas présupposer que tout le monde connaît tout sur le Web. La diversité des personnes qui utilisent le Web, et donc votre site ou application, garantit à coup sûr que quelqu'un d'autre peut interpréter un formulaire différemment si ce dernier ne contient pas de libellés clairs et bien associés.

#### Les textes d'indications (`placeholder`) ne sont pas accessibles

L'attribut [`placeholder`](#placeholder) permet d'indiquer un texte qui apparaît dans la zone du contenu de l'élément `<input>` lorsqu'il est vide. Ce texte indicatif ne devrait jamais être strictement nécessaire à la compréhension du formulaire. Il ne s'agit pas d'un libellé et on ne devrait pas utiliser cet attribut comme un remplacement d'un libellé. `placeholder` permet de fournir une indication de ce à quoi la valeur à saisir devrait ressembler, il ne s'agit ni d'une explication ni d'une consigne.

Le texte fourni par `placeholder` n'est pas accessible pour les lecteurs d'écran et dès que la personne saisit une valeur, ou si le contrôle a déjà une valeur, il disparaît. Les navigateurs qui ont une fonctionnalité de traduction automatique pourraient ignorer les attributs lors de la traduction, ce qui signifie que `placeholder` pourrait ne pas être traduit.

> [!NOTE]
> Évitez d'utiliser [`placeholder`](#placeholder) si vous pouvez. Pour ajouter un libellé sur un élément `<input>`, on utilisera l'élément {{HTMLElement("label")}}.

### Validation côté client

> [!WARNING]
> La validation côté client est utile mais _ne garantit pas_ que le serveur reçoit des données valides. Si les données doivent respecter un format donné, il faudra _toujours_ les vérifier côté serveur et renvoyer [une réponse HTTP `400`](/fr/docs/Web/HTTP/Reference/Status/400) si le format est invalide.

En plus d'utiliser le CSS pour styliser les contrôles en fonction des états d'interface utilisateur {{CSSxRef(":valid")}} ou {{CSSxRef(":invalid")}} selon l'état actuel de chaque contrôle, comme indiqué dans la section [Pseudo-classes d'interface utilisateur](#pseudo-classes_dinterface_utilisateur) ci‑dessus, le navigateur effectue une validation côté client lors de la tentative d'envoi du formulaire. Lors de l'envoi, si un contrôle de formulaire ne respecte pas les contraintes de validation, les navigateurs qui prennent en charge cette fonctionnalité afficheront un message d'erreur sur le premier contrôle invalide&nbsp;: soit un message par défaut correspondant au type d'erreur, soit un message personnalisé défini par vous.

Certains types de champ et attributs imposent des limites aux valeurs possibles pour un champ donné. Ainsi, `<input type="number" min="2" max="10" step="2">` signifiera que seuls les nombres 2, 4, 6, 8, et 10 sont valides. Plusieurs erreurs de validation peuvent se produire ici, `rangeUnderflow` si la valeur est inférieure à 2, `rangeOverflow` si elle est supérieure à 10, `stepMismatch` si la valeur est comprise entre 2 et 10, mais n'est pas un entier pair (autrement dit, la contrainte imposée par `step` n'est pas respectée), ou `typeMismatch` si la valeur n'est pas un nombre.

Pour les types de champ dont le domaine des valeurs possibles est périodique (autrement dit après avoir atteint la plus grande valeur, on revient à la plus petite), il est possible d'avoir des valeurs d'attribut [`max`](#max) inférieures à celles de [`min`](#min). Cela est particulièrement utile pour les dates et les heures, par exemple pour autoriser les heures entre 8h du soir et 8h du matin&nbsp;:

```html
<input type="time" min="20:00" max="08:00" name="overnight" />
```

Certains attributs et valeurs peuvent causer une erreur {{DOMxRef("ValidityState")}} spécifique&nbsp;:

<table class="no-markdown">
  <caption>Objets d'erreur de validité selon les attributs <code>&lt;input&gt;</code> et leurs valeurs</caption>
  <thead>
    <tr>
      <th scope="col">Attribut</th>
      <th scope="col">Propriété correspondante</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="#max"><code>max</code></a></td>
      <td>{{DOMxRef("ValidityState.rangeOverflow")}}</td>
      <td>Se produit lorsque la valeur est supérieure à la valeur maximale définie par l'attribut <code>max</code>.</td>
    </tr>
    <tr>
      <td><a href="#maxlength"><code>maxlength</code></a></td>
      <td>{{DOMxRef("ValidityState.tooLong")}}</td>
      <td>Se produit lorsque le nombre de caractères du champ est supérieur à la valeur définie par l'attribut <code>maxlength</code>.</td>
    </tr>
    <tr>
      <td><a href="#min"><code>min</code></a></td>
      <td>{{DOMxRef("ValidityState.rangeUnderflow")}}</td>
      <td>Se produit lorsque la valeur est inférieure à la valeur minimale définie par l'attribut <code>min</code>.</td>
    </tr>
    <tr>
      <td><a href="#minlength"><code>minlength</code></a></td>
      <td>{{DOMxRef("ValidityState.tooShort")}}</td>
      <td>Se produit lorsque le nombre de caractères du champ est inférieur à la valeur définie par l'attribut <code>minlength</code>.</td>
    </tr>
    <tr>
      <td><a href="#pattern"><code>pattern</code></a></td>
      <td>{{DOMxRef("ValidityState.patternMismatch")}}</td>
      <td>Se produit lorsque l'attribut <code>pattern</code> contient une expression rationnelle valide et que la valeur du champ ne respecte pas celle-ci.</td>
    </tr>
    <tr>
      <td><a href="#required"><code>required</code></a></td>
      <td>{{DOMxRef("ValidityState.valueMissing")}}</td>
      <td>Se produit lorsque l'attribut <code>required</code> est présent et mais sa valeur est <code>null</code> ou que le bouton radio ou la case à cocher n'est pas sélectionné.
      </td>
    </tr>
    <tr>
      <td><a href="#step"><code>step</code></a></td>
      <td>{{DOMxRef("ValidityState.stepMismatch")}}</td>
      <td>Se produit lorsque la valeur ne respecte pas l'incrément imposé par l'attribut <code>step</code>. L'incrément par défaut vaut <code>1</code>, ce qui signifie que seules les valeurs entières sont valides pour le type <code>number</code> si <code>step</code> est absent. Utiliser <code>step="any"</code> empêchera de déclencher cette erreur.
      </td>
    </tr>
    <tr>
      <td><a href="#type"><code>type</code></a></td>
      <td>{{DOMxRef("ValidityState.typeMismatch")}}</td>
      <td>Se produit lorsque la valeur ne correspond pas au type, par exemple si une adresse électronique ne contient pas le caractère <code>@</code> ou si une URL ne contient pas de protocole.</td>
    </tr>
  </tbody>
</table>

Si un contrôle de formulaire n'a pas d'attribut `required`, n'a aucune valeur, ou s'il a une chaîne de caractères de vide comme valeur, il n'est pas invalide. Même si les attributs précédents sont présents, exception faite de `required`, une chaîne de caractères vide ne causera pas d'erreur.

On peut définir des limites sur les valeurs acceptables et les navigateurs qui implémentent les fonctionnalités de validation effectueront un contrôle nativement en alertant la personne qu'il y a un problème lors de l'envoi du formulaire.

En plus des erreurs décrites dans le tableau qui précède, l'interface `ValidityState` contient les propriétés booléennes en lecture seule `badInput`, `valid`, et `customError`. Cet objet possède les propriétés suivantes&nbsp;:

- {{DOMxRef("ValidityState.valueMissing")}}
- {{DOMxRef("ValidityState.typeMismatch")}}
- {{DOMxRef("ValidityState.patternMismatch")}}
- {{DOMxRef("ValidityState.tooLong")}}
- {{DOMxRef("ValidityState.tooShort")}}
- {{DOMxRef("ValidityState.rangeUnderflow")}}
- {{DOMxRef("ValidityState.rangeOverflow")}}
- {{DOMxRef("ValidityState.stepMismatch")}}
- {{DOMxRef("ValidityState.badInput")}}
- {{DOMxRef("ValidityState.valid")}}
- {{DOMxRef("ValidityState.customError")}}

Pour chacune de ces propriétés booléennes, une valeur à `true` indique que la raison de validation correspondante peut avoir échoué, exception faite de la propriété `valid` qui, si elle vaut `true`, indique que la valeur de l'élément respecte l'ensemble des contraintes.

S'il y a une erreur, les navigateurs qui prennent en charge la validation avertiront la personne et empêcheront l'envoi du formulaire. Attention à un point&nbsp;: si un message d'erreur personnalisé a une valeur équivalente à `true` (toute valeur qui n'est ni la chaîne vide ni `null`), le formulaire ne pourra pas être envoyé. S'il n'y a pas de message d'erreur personnalisé et qu'aucune des propriétés précédentes ne vaut `true` à part `valid`, le formulaire pourra être envoyé.

```js
function validate(input) {
  let validityState_object = input.validity;
  if (validityState_object.valueMissing) {
    input.setCustomValidity("Une valeur est nécessaire.");
  } else if (validityState_object.rangeUnderflow) {
    input.setCustomValidity("La valeur est trop basse.");
  } else if (validityState_object.rangeOverflow) {
    input.setCustomValidity("La valeur est trop haute.");
  } else {
    input.setCustomValidity("");
  }
}
```

La dernière ligne, qui utilise la chaîne vide comme valeur pour le message d'erreur est essentielle. Si la personne fait une erreur et que la validité est définie, le formulaire ne pourra être envoyé, même si toutes les valeurs sont valides, jusqu'à ce que le message soit `null`.

#### Exemple de message d'erreur de validation sur mesure

Si vous souhaitez afficher un message d'erreur spécifique lorsqu'un champ est invalide, vous devrez utiliser [les fonctionnalités relatives à la validation des contraintes](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation#validation_de_formulaires_avec_javascript) disponible sur les éléments `<input>` (entre autres). Prenons le formulaire suivant&nbsp;:

```html
<form>
  <label for="name"
    >Veuillez saisir un nom d'utilisateur·ice (avec des lettres en minuscules ou
    majuscules)&nbsp;:
  </label>
  <input type="text" name="name" id="name" required pattern="[A-Za-z]+" />
  <button>Envoyer</button>
</form>
```

Les fonctionnalités HTML de base pour la validation des formulaires permettront d'afficher un message d'erreur par défaut si on tente de soumettre le formulaire sans valeur ou avec une valeur qui ne respecte pas le motif de l'expression rationnelle indiquée avec `pattern`.

Si on souhaite afficher un message d'erreur spécifique, on pourra utiliser JavaScript comme suit&nbsp;:

```js
const nameInput = document.querySelector("input");

nameInput.addEventListener("input", () => {
  nameInput.setCustomValidity("");
  nameInput.checkValidity();
});

nameInput.addEventListener("invalid", () => {
  if (nameInput.value === "") {
    nameInput.setCustomValidity(
      `Veuillez saisir un nom d'utilisateur·ice non vide !`,
    );
  } else {
    nameInput.setCustomValidity(
      `Un nom d'utilisateur·ice ne peut contenir que des lettres en minuscules ou majuscules. Essayez à nouveau.`,
    );
  }
});
```

L'exemple ainsi construit produira le résultat suivant&nbsp;:

{{EmbedLiveSample("Exemple de message d'erreur de validation sur mesure")}}

En résumé&nbsp;:

- On vérifie l'état de validité du champ chaque fois que sa valeur est modifiée en exécutant la méthode `checkValidity()` lors de l'évènement `input` via le gestionnaire d'évènement.
- Si la valeur est invalide, un évènement `invalid` est déclenché et la fonction indiquée sur le gestionnaire d'évènement pour `invalid` est exécutée. Au sein de cette fonction, on détermine si la valeur est invalide parce qu'elle est vide ou parce qu'elle ne correspond pas au motif imposé en distinguant le cas avec un bloc `if()` et en adaptant le message d'erreur selon le cas de figure.
- Ainsi, si la valeur du champ est invalide lorsqu'on clique sur le bouton d'envoi, un des messages spécifiques est affiché.
- Si la valeur est valide, le formulaire est envoyé sans problème. Pour cela, il faut annuler la vérification de validité spécifique en appelant `setCustomValidity()` avec une chaîne de caractères vide. C'est ce qu'on fait à chaque fois qu'un évènement `input` est déclenché. Sans ça, si une validité spécifique avait précédemment été définie, le champ serait toujours considéré comme invalide, même si la valeur courante était valide lors de l'envoi.

> [!NOTE]
> On veillera à toujours valider les contraintes côté client et côté serveur. La validation des contraintes du navigateur ne se substitue pas à la vérification côté serveur. En effet, des valeurs invalides peuvent toujours être envoyées par des navigateurs obsolètes ou par des acteurs malveillants.

> [!NOTE]
> Firefox supportait un attribut d'erreur propriétaire — `x-moz-errormessage` — pendant de nombreuses versions, qui vous permettait de définir des messages d'erreur personnalisés de façon similaire. Cet attribut a été supprimé à partir de la version 66 (voir [Firefox bug 1513890 <sup>(angl.)</sup>](https://bugzil.la/1513890)).

### Localisation

Les valeurs autorisées à la saisie pour certains types d'`<input>` dépendent de la locale. En effet, pour certaines locales 1,000.00 représente un nombre valide tandis qu'il faudrait saisir 1000,00 dans d'autres locales.

Firefox utilise les heuristiques suivantes pour déterminer la locale selon laquelle valider la saisie (au moins pour `type="number"`)&nbsp;:

- Tente d'utiliser la langue indiquée par l'attribut `lang`/`xml:lang` sur l'élément ou l'un de ses parents,
- Sinon, utilise la langue indiquée par l'en-tête HTTP `Content-Language`,
- Sinon, utilise la locale du navigateur.

## Accessibilité

### Libellés

Lorsqu'on ajoute des champs de formulaire sur une page, le minimum, en termes d'accessibilité, consiste à ajouter des libellés correspondants avec des éléments `<label>`. Cela permet aux outils d'assistance d'indiquer le rôle du champ. De plus, cliquer ou toucher le libellé permettra de passer le focus au contrôle de formulaire correspondant. Cela améliore l'accessibilité et l'utilisabilité pour les personnes voyantes, en augmentant la zone d'interaction possible pour activer le contrôle du formulaire au clic ou au toucher. C'est notamment utile (voire nécessaire) pour les boutons radios et les cases à cocher dont la surface est faible. Pour plus d'informations sur les libellés en général, voir [la section sur les libellés](#libellés).

Dans l'exemple qui suit, on illustre comment associer un élément `<label>` avec un élément `<input>`. Le lien se fait avec la valeur l'attribut `id` de l'élément `<input>` qui est réutilisée comme valeur pour l'attribut `for` de l'élément `<label>`.

```html
<label for="ptipois">Est-ce que vous aimez les petits pois ?</label>
<input type="checkbox" name="petitspois" id="ptipois" />
```

### Dimensionnement

Les éléments interactifs d'une page web, tels que les champs de formulaire, doivent fournir une zone d'interaction suffisamment large pour qu'il soit facile de les activer. Cela aide les personnes avec des handicaps moteurs et aussi les personnes qui utilisent des dispositifs de pointage peu précis comme les doigts ou un stylet. Une surface interactive minimale de 44×44 [pixels CSS <sup>(angl.)</sup>](https://w3c.github.io/wcag/guidelines/22/#dfn-css-pixels) est recommandée.

- [Comprendre le critère de réussite 2.5.5&nbsp;: taille de la cible | W3C pour la compréhension de WCAG 2.1 <sup>(angl.)</sup>](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Taille de la cible et 2.5.5 | Adrian Roselli <sup>(angl.)</sup>](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Test rapide&nbsp;: cibles suffisamment grande — Le projet A11Y <sup>(angl.)</sup>](https://www.a11yproject.com/posts/large-touch-targets/)

### Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row"><a href="/fr/docs/Web/HTML/Guides/Content_categories">Catégories de contenu</a></th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux">Contenu de flux</a>, listé, participant à l'envoi du formulaire, réinitialisable, associé à un formulaire, <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé">contenu phrasé</a>. Si l'attribut <a href="#type"><code>type</code></a> ne vaut pas <code>hidden</code>, il s'agit d'un élément étiquetable et d'un contenu tangible.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>Aucun, il s'agit d'un {{Glossary("void element", "élément vide")}}.</td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>Cet élément doit avoir une balise ouvrante et pas de balise fermante.</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>Tout élément qui accepte du <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé">contenu phrasé</a>.</td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <ul>
          <li>
            <code>type=button</code>&nbsp;: <code><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/button_role">button</a></code>
          </li>
          <li>
            <code>type=checkbox</code>&nbsp;: <code><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role">checkbox</a></code>
          </li>
          <li>
            <code>type=email</code>
            <ul>
              <li>Sans attribut <code>list</code>&nbsp;: <code><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">textbox</a></code></li>
              <li>Avec un attribut <code>list</code>&nbsp;: <code><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role">combobox</a></code></li>
            </ul>
          </li>
          <li>
            <code>type=image</code>&nbsp;: <code><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/button_role">button</a></code>
          </li>
          <li>
            <code>type=number</code>&nbsp;: <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role"><code>spinbutton</code></a>
          </li>
          <li><code>type=radio</code>&nbsp;: <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role"><code>radio</code></a></li>
          <li><code>type=range</code>&nbsp;: <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role"><code>slider</code></a></li>
          <li>
            <code>type=reset</code>&nbsp;: <code><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/button_role">button</a></code>
          </li>
          <li>
            <code>type=search</code>
            <ul>
              <li>Sans attribut <code>list</code>&nbsp;: <code><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role">searchbox</a></code></li>
              <li>Avec un attribut <code>list</code>&nbsp;: <code><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role">combobox</a></code></li>
            </ul>
          </li>
          <li>
            <code>type=submit</code>&nbsp;: <code><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/button_role">button</a></code>
          </li>
          <li>
            <code>type=tel</code>
            <ul>
              <li>Sans attribut <code>list</code>&nbsp;: <code><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">textbox</a></code></li>
              <li>Avec un attribut <code>list</code>&nbsp;: <code><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role">combobox</a></code></li>
            </ul>
          </li>
          <li>
            <code>type=text</code>
            <ul>
              <li>Sans attribut <code>list</code>&nbsp;: <code><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">textbox</a></code></li>
              <li>Avec un attribut <code>list</code>&nbsp;: <code><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role">combobox</a></code></li>
            </ul>
          </li>
          <li>
            <code>type=url</code>
            <ul>
              <li>Sans attribut <code>list</code>&nbsp;: <code><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">textbox</a></code></li>
              <li>Avec un attribut <code>list</code>&nbsp;: <code><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role">combobox</a></code></li>
            </ul>
          </li>
          <li>
            <code>type=color|date|datetime-local|file|hidden|month|password|time|week</code>&nbsp;: <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">Pas de rôle correspondant <sup>(angl.)</sup></a>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>
        <ul>
          <li>
            <code>type=button</code>&nbsp;: <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role"><code>checkbox</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/link_role"><code>link</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role"><code>menuitem</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role"><code>menuitemradio</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/option_role"><code>option</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role"><code>radio</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role"><code>switch</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role"><code>tab</code></a>
          </li>
          <li>
            <code>type=checkbox</code>&nbsp;: <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/button_role"><code>button</code></a> lorsqu'utilisé avec <code>aria-pressed</code>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/option_role"><code>option</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role"><code>switch</code></a>
          </li>
          <li>
            <code>type=image</code>&nbsp;: <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/link_role"><code>link</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role"><code>menuitem</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role"><code>menuitemradio</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role"><code>radio</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role"><code>switch</code></a>
          </li>
          <li>
            <code>type=radio</code>&nbsp;: <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role"><code>menuitemradio</code></a>
          </li>
          <li>
            <code>type=text</code> sans attribut <code>list</code>&nbsp;: <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role"><code>searchbox</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role"><code>spinbutton</code></a>
          </li>
          <li>
            <code>type=color|date|datetime-local|email|file|hidden|month|number|password|range|reset|search|submit|tel|url|week</code> ou <code>text</code> avec un attribut <code>list</code>&nbsp;: aucun rôle autorisé
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{DOMxRef("HTMLInputElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété CSS {{CSSxRef("appearance")}}
- [Votre premier formulaire HTML](/fr/docs/Learn_web_development/Extensions/Forms/Your_first_form)
- [Comment structurer un formulaire HTML](/fr/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form)
- [Les contrôles de formulaire natifs](/fr/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
- [Envoyer des données de formulaire](/fr/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
- [Validation des contraintes dans un formulaire](/fr/docs/Web/HTML/Guides/Constraint_validation)
- [Mettre en forme les formulaires HTML](/fr/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
