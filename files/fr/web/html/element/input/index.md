---
title: "<input> : l'élément de saisie dans un formulaire"
slug: Web/HTML/Element/input
---

{{HTMLSidebar}}

L'élément [HTML](/fr/docs/Web/HTML) **`<input>`** est utilisé pour créer un contrôle interactif dans un formulaire web qui permet à l'utilisatrice ou l'utilisateur de saisir des données. Les saisies possibles et le comportement de l'élément `<input>` dépendent fortement de la valeur indiquée dans son attribut `type` et de ses autres attributs. Il existe différents contrôles pour la saisie, qui dépendent de l'appareil utilisé et de [l'agent utilisateur](/fr/docs/Glossary/User_agent).

{{EmbedInteractiveExample("pages/tabbed/input-text.html", "tabbed-shorter")}}

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
      <td><a href="/fr/docs/Web/HTML/Element/input/button"><code>button</code></a></td>
      <td>Un bouton sans comportement défini qui affiche la valeur de l'attribut <a href="#value"><code>value</code></a> qui est vide par défaut.
      </td>
      <td id="examplebutton">
        <pre class="brush: html hidden">
&#x3C;input type="button" name="button" value="Button" /></pre>
        {{EmbedLiveSample("examplebutton",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/HTML/Element/input/checkbox"><code>checkbox</code></a></td>
      <td>Une case à cocher qui permet de sélectionner/désélectionner une valeur.</td>
      <td id="examplecheckbox">
        <pre class="brush: html hidden">
&#x3C;input type="checkbox" name="checkbox"/></pre>
        {{EmbedLiveSample("examplecheckbox",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/HTML/Element/input/color"><code>color</code></a></td>
      <td>Un contrôle qui permet de définir une couleur, cela ouvre un sélecteur de couleur dans les navigateurs qui le prennent en charge.</td>
      <td id="examplecolor">
        <pre class="brush: html hidden">
&#x3C;input type="color" name="color"/></pre>
        {{EmbedLiveSample("examplecolor",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/HTML/Element/input/date"><code>date</code></a></td>
      <td>Un contrôle qui permet de saisir une date (composé d'un jour, d'un mois et d'une année mais sans heure), cela ouvre un sélecteur de date ou des roues numériques pour la sélection du jour/mois/année dans les navigateurs qui le prennent en charge.
      </td>
      <td id="exampledate">
        <pre class="brush: html hidden">
&#x3C;input type="date" name="date"/></pre>
        {{EmbedLiveSample("exampledate",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/HTML/Element/input/datetime-local"><code>datetime-local</code></a>
      </td>
      <td>Un contrôle qui permet de saisir une date et une heure (sans fuseau horaire), cela ouvre un sélecteur de date ou des roues numériques pour la sélection de la date et de l'heure dans les navigateurs qui le prennent en charge.
      </td>
      <td id="exampledtl">
        <pre class="brush: html hidden">
&#x3C;input type="datetime-local" name="datetime-local"/></pre>
        {{EmbedLiveSample("exampledtl",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/HTML/Element/input/email"><code>email</code></a></td>
      <td>
        Un champ qui permet de saisir une adresse électronique, il ressemble à un champ de type <code>text</code>, mais possède des fonctionnalités de validation et l'adaptation du clavier pour les navigateurs et appareils qui ont des claviers dynamiques.
      </td>
      <td id="exampleemail">
        <pre class="brush: html hidden">
&#x3C;input type="email" name="email"/></pre>
        {{EmbedLiveSample("exampleemail",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/HTML/Element/Input/file"><code>file</code></a></td>
      <td>Un contrôle qui permet de sélectionner un fichier. L'attribut <a href="#accept"><code>accept</code></a> peut être utilisé pour définir les types de fichiers qui peuvent être sélectionnés.
      </td>
      <td id="examplefile">
        <pre class="brush: html hidden">
&#x3C;input type="file" accept="image/*, text/*" name="file"/></pre>
        {{EmbedLiveSample("examplefile",'100%',55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/HTML/Element/input/hidden"><code>hidden</code></a></td>
      <td>Un contrôle qui n'est pas affiché mais dont la valeur est envoyée au serveur. Il y a un exemple dans la colonne à côté, mais il est caché&nbsp;!
      </td>
      <td id="examplehidden">
        <pre class="brush: html hidden">
&#x3C;input id="userId" name="userId" type="hidden" value="abc123"></pre
        >
        {{EmbedLiveSample("examplehidden",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/HTML/Element/input/image"><code>image</code></a></td>
      <td>Un bouton graphique d'envoi du formulaire. L'attribut <a href="#src"><code>src</code></a> doit être défini avec la source de l'image et l'attribut <a href="#alt"><code>alt</code></a> doit être défini avec le texte alternatif si l'image est absente.</td>
      <td id="exampleimage">
        <pre class="brush: html hidden">
&#x3C;input type="image" name="image" src="" alt="image input"/></pre>
        {{EmbedLiveSample("exampleimage",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/HTML/Element/input/month"><code>month</code></a></td>
      <td>Un contrôle qui permet de saisir un mois et une année (sans fuseau horaire).</td>
      <td id="examplemonth">
        <pre class="brush: html hidden">
&#x3C;input type="month" name="month"/></pre>
        {{EmbedLiveSample("examplemonth",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/HTML/Element/input/number"><code>number</code></a></td>
      <td>Un contrôle qui permet de saisir un nombre, affichant des curseurs pour augmenter/réduire la valeur et disposant d'une validation par défaut lorsqu'elle est prise en charge. Un clavier numérique est affiché pour certains appareils avec des claviers dynamiques.</td>
      <td id="examplenumber">
        <pre class="brush: html hidden">
&#x3C;input type="number" name="number"/></pre>
        {{EmbedLiveSample("examplenumber",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/HTML/Element/input/password"><code>password</code></a></td>
      <td>Un champ texte sur une seule ligne dont la valeur est masquée et qui affichera une alerte si le site n'est pas sécurisé.</td>
      <td id="examplepassword">
        <pre class="brush: html hidden">
&#x3C;input type="password" name="password"/></pre>
        {{EmbedLiveSample("examplepassword",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/HTML/Element/input/radio"><code>radio</code></a></td>
      <td>Un bouton radio qui permet de sélectionner une seule valeur parmi un groupe de différentes valeurs portant le même attribut <a href="#name"><code>name</code></a>.</td>
      <td id="exampleradio">
        <pre class="brush: html hidden">
&#x3C;input type="radio" name="radio"/></pre
        >
        {{EmbedLiveSample("exampleradio",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/HTML/Element/input/range"><code>range</code></a></td>
      <td>Un contrôle qui permet de saisir un nombre dont la valeur exacte n'est pas importante. Le contrôle qui s'affiche est une jauge horizontale avec la valeur par défaut placée au milieu. On l'utilise avec les attributs <a href="#min"><code>min</code></a> et <a href="#max"><code>max</code></a> pour définir un intervalle des valeurs acceptables.</td>
      <td id="examplerange">
        <pre class="brush: html hidden">
&#x3C;input type="range" name="range" min="0" max="25"/></pre>
        {{EmbedLiveSample("examplerange",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/HTML/Element/input/reset"><code>reset</code></a></td>
      <td>Un bouton qui réinitialise le contenu du formulaire avec les valeurs par défaut. Ce type d'élément n'est pas recommandé.</td>
      <td id="examplereset">
        <pre class="brush: html hidden">
&#x3C;input type="reset" name="reset"/></pre
        >
        {{EmbedLiveSample("examplereset",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/HTML/Element/input/search"><code>search</code></a></td>
      <td>Un champ texte sur une ligne pour des termes de recherche. Les sauts de ligne sont automatiquement retirés. Le contrôle peut disposer d'une icône permettant de réinitialiser le champ. Une icône de recherche est affichée à la place de la touche <kbd>Entrée</kbd>/ pour certains appareils avec des claviers dynamiques.</td>
      <td id="examplesearch">
        <pre class="brush: html hidden">
&#x3C;input type="search" name="search"/></pre>
        {{EmbedLiveSample("examplesearch",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/HTML/Element/Input/submit"><code>submit</code></a></td>
      <td>Un bouton qui envoie le formulaire.</td>
      <td id="examplesubmit">
        <pre class="brush: html hidden">
&#x3C;input type="submit" name="submit"/></pre>
        {{EmbedLiveSample("examplesubmit",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/HTML/Element/input/tel"><code>tel</code></a></td>
      <td>Un contrôle pour saisir un numéro de téléphone, qui affiche un clavier téléphonique pour certains appareils avec des claviers dynamiques.
      </td>
      <td id="exampletel">
        <pre class="brush: html hidden">
&#x3C;input type="tel" name="tel"/></pre>
        {{EmbedLiveSample("exampletel",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/HTML/Element/input/text"><code>text</code></a></td>
      <td>La valeur par défaut de <code>type</code>. Un champ texte sur une seule ligne. Les sauts de ligne sont automatiquement retirés.</td>
      <td id="exampletext">
        <pre class="brush: html hidden">
&#x3C;input type="text" name="text"/></pre
        >
        {{EmbedLiveSample("exampletext",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/HTML/Element/input/time"><code>time</code></a></td>
      <td>Un contrôle pour saisir une valeur temporelle sans fuseau horaire.</td>
      <td id="exampletime">
        <pre class="brush: html hidden">
&#x3C;input type="time" name="time"/></pre>
        {{EmbedLiveSample("exampletime",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/HTML/Element/input/url"><code>url</code></a></td>
      <td>Un champ permettant de saisir une URL. Ce contrôle ressemble à un champ de type <code>text</code>, mais dispose de paramètres de validation et d'un clavier adapté pour les navigateurs et appareils qui le prennent en charge et qui ont un clavier dynamique.
      </td>
      <td id="exampleurl">
        <pre class="brush: html hidden">
&#x3C;input type="url" name="url"/></pre
        >
        {{EmbedLiveSample("exampleurl",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/HTML/Element/input/week"><code>week</code></a></td>
      <td>Un contrôle permettant de saisir une date représentée par un numéro de semaine et une année (sans indication de fuseau horaire).</td>
      <td id="exampleweek">
        <pre class="brush: html hidden">
&#x3C;input type="week" name="week"/></pre>
        {{EmbedLiveSample("exampleweek",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <th colspan="3">Valeurs obsolètes</th>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/HTML/Element/input/datetime"><code>datetime</code></a></td>
      <td>{{deprecated_inline}} Un contrôle pour saisir une date et une heure selon un fuseau horaire UTC.</td>
      <td id="exampledatetime">
        <pre class="brush: html hidden">
&#x3C;input type="datetime" name="datetime"/></pre>
        {{EmbedLiveSample("exampledatetime",200,75,"","", "nobutton")}}
      </td>
    </tr>
  </tbody>
</table>

## Attributs

L'élément `<input>` est l'un des éléments HTML les plus complexes et puissants en raison de ses attributs et notamment de [`type`](#type), le plus important. Chaque élément `<input>`, quel que soit son type, étant basé sur l'interface DOM [`HTMLInputElement`](/fr/docs/Web/API/HTMLInputElement), ils partagent tous, techniquement, les mêmes attributs. Toutefois, certains attributs ne fonctionnent que pour certains types de champs et certains attributs fonctionnent spécifiquement selon le type de champ.

Dans cette section, nous verrons un tableau qui liste l'ensemble des attributs avec une rapide description. Ce tableau est suivi d'une liste plus détaillée de chaque attribut et des types auxquels ils sont associés. Les attributs communs à tous les types sont détaillés dans cet article, ceux qui sont uniques à certains types ou qui ont un comportement spécifique pour un type donné sont documentés sur les pages des types respectifs.

Sur cette page, vous trouverez des informations sur les attributs communs à l'ensemble des types d'éléments `<input>` ainsi que la description de quelques attributs notables.

Les éléments `<input>` peuvent utiliser les [attributs universels](/fr/docs/Web/HTML/Global_attributes) et les attributs suivants&nbsp;:

| Attribut                            | Type(s)                                    | Description                                                                                                                           |
| ----------------------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| [`accept`](#accept)                 | `file`                                     | Une indication quant au type de fichier attendu pour l'<i lang="en">upload</i>                                                        |
| [`alt`](#alt)                       | `image`                                    | Un texte alternatif à l'image, nécessaire pour une accessibilité correcte                                                             |
| [`autocomplete`](#autocomplete)     | tous                                       | Une indication pour le remplissage automatique du formulaire                                                                          |
| [`capture`](#capture)               | `file`                                     | La méthode de capture du média pour l'upload du fichier                                                                               |
| [`checked`](#checked)               | `radio`, `checkbox`                        | Indique si l'option est sélectionnée ou si la case est cochée                                                                         |
| [`dirname`](#dirname)               | `text`, `search`                           | Le nom du champ de formulaire à utiliser pour envoyer le sens d'écriture de l'élément à l'envoi du formulaire                         |
| [`disabled`](#disabled)             | tous                                       | Indique si le contrôle est désactivé                                                                                                  |
| [`form`](#form)                     | tous                                       | Associe un contrôle à un élément de formulaire                                                                                        |
| [`formaction`](#formaction)         | `image`, `submit`                          | L'URL à utiliser pour l'envoi du formulaire                                                                                           |
| [`formenctype`](#formenctype)       | `image`, `submit`                          | L'encodage des données à utiliser pour l'envoi du formulaire                                                                          |
| [`formmethod`](#formmethod)         | `image`, `submit`                          | La méthode HTTP à utiliser pour envoyer le formulaire                                                                                 |
| [`formnovalidate`](#formnovalidate) | `image`, `submit`                          | Surcharge la validation du contrôle dictée par le formulaire pour l'envoi de ce dernier                                               |
| [`formtarget`](#formtarget)         | `image`, `submit`                          | Le contexte de navigation à utiliser pour l'envoi du formulaire                                                                       |
| [`height`](#height)                 | `image`                                    | Analogue à l'attribut `height` de l'élément [`<img>`](/fr/docs/Web/HTML/Element/Img), la hauteur de l'image                           |
| [`list`](#list)                     | presque tous                               | La valeur de l'attribut `id` de l'élément [`<datalist>`](/fr/docs/Web/HTML/Element/datalist) fournissant les options d'autocomplétion |
| [`max`](#max)                       | types numériques                           | La valeur maximale                                                                                                                    |
| [`maxlength`](#maxlength)           | `password`, `search`, `tel`, `text`, `url` | La longueur maximale (en nombre de caractères) de l'attribut `value`                                                                  |
| [`min`](#min)                       | types numériques                           | La valeur minimale                                                                                                                    |
| [`minlength`](#minlength)           | `password`, `search`, `tel`, `text`, `url` | La longueur minimale (en nombre de caractères) de l'attribut `value`                                                                  |
| [`multiple`](#multiple)             | `email`, `file`                            | Un booléen indiquant si plusieurs valeurs sont acceptées                                                                              |
| [`name`](#name)                     | tous                                       | Le nom associé au contrôle et qui est envoyé avec le formulaire associé à la valeur sous la forme d'une paire nom/valeur              |
| [`pattern`](#pattern)               | `password`, `text`, `tel`                  | Un motif que la valeur doit respecter afin d'être valide                                                                              |
| [`placeholder`](#placeholder)       | `password`, `search`, `tel`, `text`, `url` | Un texte qui apparaît dans le contrôle lorsqu'aucune valeur n'y est écrite                                                            |
| [`readonly`](#readonly)             | presque tous                               | Un booléen indiquant que la valeur n'est pas éditable                                                                                 |
| [`required`](#required)             | presque tous                               | Un booléen indiquant que la valeur est requise ou que le contrôle doit être coché avant de pouvoir envoyer le formulaire              |
| [`size`](#size)                     | `email`, `password`, `tel`, `text`, `url`  | La taille du contrôle                                                                                                                 |
| [`src`](#src)                       | `image`                                    | Analogue à l'attribut `src` de l'élément [`<img>`](/fr/docs/Web/HTML/Element/Img), indique l'emplacement de l'image                   |
| [`step`](#step)                     | types numériques                           | Un incrément pour les valeurs valides                                                                                                 |
| [`type`](#type)                     | tous                                       | Le type de contrôle de formulaire                                                                                                     |
| [`value`](#value)                   | tous                                       | La valeur initiale du contrôle                                                                                                        |
| [`width`](#width)                   | `image`                                    | Analogue à l'attribut `width` de l'élément [`<img>`](/fr/docs/Web/HTML/Element/Img), la largeur de l'image                            |

Certains attributs non-standard supplémentaires sont listés après les descriptions des attributs standard.

### Attributs individuels

- `accept`
  - : Uniquement valide pour le type `file`, cet attribut définit les types de fichiers qui peuvent être sélectionnés. Voir la page détaillée sur [`<input type="file">`](/fr/docs/Web/HTML/Element/Input/file).
- `alt`
  - : Uniquement valide pour le type `image`, cet attribut fournit un texte alternatif à l'image qui est affiché lorsque l'attribut [`src`](#src) de l'image est absent ou que le chargement de l'image a échoué. Voir la page détaillée sur [`<input type="image">`](/fr/docs/Web/HTML/Element/input/image).
- [`autocomplete`](/fr/docs/Web/HTML/Attributes/autocomplete)
  - : **Cet attribut n'est pas booléen&nbsp;!** Il prend comme valeur une chaîne de caractères dont les valeurs sont séparées par des espaces qui décrivent, le cas échéant, le type de fonctionnalité à fournir pour l'autocomplétion du champ. Généralement, l'implémentation de l'autocomplétion repose sur les valeurs précédemment saisies dans le même champ, mais le navigateur peut implémenter une forme d'autocomplétion plus avancée (par exemple intégrer la liste des contacts connue de l'appareil pour autocompléter les champs `email`). Voir [la page sur cet attribut](/fr/docs/Web/HTML/Attributes/autocomplete#valeurs) pour les valeurs autorisées. Cet attribut est valide pour les types de champ `hidden`, `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, `color`, et `password`. Il n'a pas d'effet pour les types de champs qui ne renvoient pas de données numériques ou text et est donc valide pour tous les types de champs à l'exception de `checkbox`, `radio`, `file`, ou des types de bouton. Voir [la page de l'attribut HTML `autocomplete`](/fr/docs/Web/HTML/Attributes/autocomplete) pour plus d'informations, y compris sur la sécurité des mots de passe et sur la façon dont `autocomplete` s'applique légèrement différemment pour les champs de type `hidden`.
- `autofocus`

  - : Un attribut booléen qui, s'il est présent, indique que le contrôle devrait automatiquement recevoir le focus lorsque le chargement de la page est terminé (ou lorsque l'élément [`<dialog>`](/fr/docs/Web/HTML/Element/dialog) qui contient ce contrôle a été affiché).

    > **Note :** Un élément avec l'attribut `autofocus` pourra recevoir le focus avant le déclenchement de l'évènement [`DOMContentLoaded`](/fr/docs/Web/API/Document/DOMContentLoaded_event).

    Il ne peut pas y avoir plus d'un élément du document avec l'attribut `autofocus`. Si l'attribut est placé sur plus d'un élément, c'est le premier qui reçoit le focus.

    L'attribut `autofocus` ne peut pas être utilisé sur les champs de type `hidden`, car ces derniers sont masqués et ne peuvent pas recevoir le focus.

    > **Attention :** Affecter le focus de façon automatique peut être source de confusion pour les personnes qui utilisent des lecteurs d'écran ou qui ont des difficultés cognitives. En effet, avec l'affectation d'`autofocus`, les lecteurs d'écran «&nbsp;téléportent&nbsp;» la personne jusqu'au contrôle, sans avertissement préalable.

    On fera particulièrement attention à l'accessibilité en appliquant l'attribut `autofocus`. Le focus automatique peut entraîner le défilement de la page au chargement et faire apparaître le clavier logiciel sur certains appareils tactiles. Bien qu'un lecteur d'écran puisse annoncer le libellé du contrôle qui reçoit le focus, il n'annoncera rien avant le libellé. De même, une personne sans déficience visuelle sur un petit écran manquera certainement le contexte créé par le contenu qui précède.

- `capture`
  - : Cet attribut, introduit avec la spécification HTML <i lang="en">Media Capture</i>, est uniquement valide pour le type `file`. Il définit quel appareil (micro, caméra, appareil photo) qui devrait être utilisé pour capturer un nouveau fichier à uploader. Voir la page détaillée sur [`<input type="file">`](/fr/docs/Web/HTML/Element/Input/file).
- `checked`

  - : Cet attribut booléen est valide pour les types `radio` et `checkbox`. Lorsqu'il est présent sur un contrôle de type `radio`, il indique que ce bouton radio sera celui sélectionné parmi le groupe de boutons radio qui partagent le même nom. Lorsqu'il est présent sur un contrôle de type `checkbox`, il indique que la case est cochée par défaut au chargement de la page. Attention, il _n'indique pas_ que la case est actuellement cochée, si l'état de la case à cocher change, l'attribut ne reflète pas ce changement (seul l'attribut IDL [`HTMLInputElement.checked`](/fr/docs/Web/API/HTMLInputElement) est mis à jour).

    > **Note :** À la différence des autres contrôles de saisie, la valeur d'une case à cocher ou d'un bouton radio est uniquement incluse dans les données envoyées s'ils sont sélectionnés. Si c'est le cas, le nom et la valeur des contrôles sélectionnés sont envoyés.
    >
    > Ainsi, si une case à cocher dont l'attribut `name` vaut `fruit` et dont l'attribut `value` vaut `cerise`, si la case est cochée, les données envoyées avec le formulaire contiendront `fruit=cerise`. Si la case à cocher n'est pas active, elle ne fera pas partie des données envoyées. Pour les cases à cocher et les boutons radio, la valeur par défaut de l'attribut `value` est `on`.

- `dirname`

  - : Cet attribut, uniquement valide pour les types `text` et `search`, permet d'envoyer également le sens d'écriture de la valeur dans le formulaire. Lorsqu'il est présent, le contrôle du formulaire enverra deux paires nom/valeur&nbsp;: la première composée de [`name`](#name) et [`value`](#value), et la seconde composée de la valeur de `dirname` comme nom et de `ltr` ou `rtl` comme valeur, indiquée par le navigateur.

    ```html
    <form action="page.html" method="post">
      <label
        >Fruit :
        <input type="text" name="fruit" dirname="fruit.dir" value="cerise"
      /></label>
      <input type="submit" />
    </form>
    <!-- page.html?fruit=cerise&fruit.dir=ltr -->
    ```

    Lorsque le formulaire précédent est envoyé, on aura l'envoi de deux paires de clé/valeur `name`/`value` d'une part avec `fruit=cerise` et `dirname`/sens d'écriture d'autre part avec `fruit.dir=ltr`.

- `disabled`

  - : Un attribut booléen qui, lorsqu'il est présent, indique qu'il n'est pas possible d'interagir avec le champ. Les champs désactivés sont généralement affichés avec une couleur plus sombre ou une autre forme d'indication pour signifier que le champ n'est pas utilisable.

    Plus précisément, les champs désactivés ne reçoivent pas les évènements [`click`](/fr/docs/Web/API/Element/click_event) et ne sont pas envoyés avec le formulaire.

    > **Note :** Bien que cela ne soit pas nécessaire selon la spécification, par défaut, Firefox [fera persister l'état désactivé obtenu dynamiquement](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) pour un champ `<input>` même après des rechargements de la page. C'est l'attribut [`autocomplete`](#autocomplete) qui contrôle cette fonctionnalité.

- `form`

  - : Une chaîne de caractères qui indique l'élément [`<form>`](/fr/docs/Web/HTML/Element/Form) auquel le contrôle est associé (on parle de son **formulaire propriétaire**). La valeur de la chaîne de caractères, si elle est présente, doit correspondre à la valeur d'un identifiant (l'attribut [`id`](#id)) d'un élément `<form>` du même document. Si cet attribut n'est pas défini, l'élément `<input>` est associé au formulaire qui le contient le plus proche, s'il existe.

    L'attribut `form` permet ainsi de placer un champ n'importe où dans le document tout en l'associant à un formulaire du document situé autre part.

    > **Note :** Un champ peut uniquement être associé avec un seul formulaire.

- `formaction`
  - : Uniquement valide pour les types `image` et `submit`. Voir la page détaillée sur [`<input type="submit">`](/fr/docs/Web/HTML/Element/Input/submit).
- `formenctype`
  - : Uniquement valide pour les types `image` et `submit`. Voir la page détaillée sur [`<input type="submit">`](/fr/docs/Web/HTML/Element/Input/submit).
- `formmethod`
  - : Uniquement valide pour les types `image` et `submit`. Voir la page détaillée sur [`<input type="submit">`](/fr/docs/Web/HTML/Element/Input/submit).
- `formnovalidate`
  - : Uniquement valide pour les types `image` et `submit`. Voir la page détaillée sur [`<input type="submit">`](/fr/docs/Web/HTML/Element/Input/submit).
- `formtarget`
  - : Uniquement valide pour les types `image` et `submit`. Voir la page détaillée sur [`<input type="submit">`](/fr/docs/Web/HTML/Element/Input/submit).
- `height`
  - : Uniquement valide pour le type `image`, cet attribut indique la hauteur de l'image à afficher sur un bouton d'envoi graphique. Voir la page détaillée sur [`<input type="image">`](/fr/docs/Web/HTML/Element/input/image).
- `id`
  - : Un attribut universel, valide pour tous les éléments (y compris `<input>` quel que soit le type), qui définit un identifiant unique au sein du document Son but est de pouvoir cibler un élément précis (pour la mise en forme ou pour créer un lien vers cet élément par exemple). C'est la valeur de cet attribut qui sera utilisée comme valeur de l'attribut `for` d'un élément [`<label>`](/fr/docs/Web/HTML/Element/Label) pour relier le libellé au champ correspondant. Voir [`<label>`](/fr/docs/Web/HTML/Element/Label).
- `inputmode`
  - : Un attribut universel, valide pour tous les éléments, qui fournit une indication au navigateur quant au type de clavier virtuel à utiliser pour l'édition de l'élément ou de son contenu. Les valeurs possibles sont `none`, `text`, `tel`, `url`, `email`, `numeric`, `decimal`, et `search`.
- `list`

  - : La valeur fournie à l'attribut `list` doit être l'identifiant (l'attribut [`id`](/fr/docs/Web/HTML/Global_attributes/id)) d'un élément [`<datalist>`](/fr/docs/Web/HTML/Element/datalist) situé dans le même document. L'élément `<datalist>` fournit alors une liste de valeurs prédéfinies qui peuvent être suggérées pour la saisie dans le champ. Toute valeur de cette liste qui n'est pas compatible avec l'attribut [`type`](#type) ne sera pas incluse dans les suggestions. Les valeurs ainsi fournies sont des suggestions et pas des contraintes, une personne pourra tout à fait choisir parmi cette liste ou fournir une valeur différente.

    Cet attribut est valide pour les champs de type `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, et `color`.

    Selon la spécification, l'attribut `list` n'est pas pris en charge pour les types `hidden`, `password`, `checkbox`, `radio`, `file`, et les types de bouton.

    Selon le navigateur, on pourra avoir une palette de couleurs spécifiques en suggestion, des marques présentes sur la piste d'un curseur, voire un contrôle s'ouvrant comme un élément [`<select>`](/fr/docs/Web/HTML/Element/select) et qui permet de saisir des valeurs en dehors des suggestions. Voir [le tableau de compatibilité des navigateurs](/fr/docs/Web/HTML/Element/datalist#compatibilité_des_navigateurs) pour les autres types de champ.

    Voir également [la page de référence pour l'élément `<datalist>`](/fr/docs/Web/HTML/Element/datalist).

- `max`

  - : Cet attribut est valide pour les types `date`, `month`, `week`, `time`, `datetime-local`, `number`, et `range`, il définit la plus grande valeur possible de l'intervalle des valeurs autorisées. Si la valeur saisie dans l'élément dépasse la valeur de cet attribut, l'élément échouera à [la validation des contraintes](/fr/docs/Web/Guide/HTML/Constraint_validation). Si la valeur de l'attribut `max` n'est pas un nombre, l'élément n'a pas de valeur maximale.

    Il existe un cas particulier pour les types de données périodiques (comme les dates ou les heures), où la valeur de `max` peut être inférieure à celle de `min`, pour avoir par exemple un intervalle de temps entre 10 heures du soir et 4 heures du matin.

- `maxlength`

  - : Cet attribut est valide pour les types `text`, `search`, `url`, `tel`, `email`, et `password`, il définit le nombre maximal de caractères (exprimé en nombre de codets UTF-16) qu'il est possible de saisir dans le champ. La valeur de cet attribut doit être un entier positif. Si aucune valeur de `maxlength` n'est indiquée ou qu'une valeur invalide est fournie, le champ n'a pas de longueur maximale. La valeur de cet attribut doit être supérieure ou égale à celle de `minlength`.

    Le champ échouera à [la validation des contraintes](/fr/docs/Web/Guide/HTML/Constraint_validation) si longueur du texte saisi est supérieure à `maxlength` comme nombre de codets UTF-16. Par défaut, les navigateurs empêchent de saisir plus de caractères que ce qui est permis par l'attribut `maxlength`. Voir [la validation côté client](#validation_côté_client) pour plus d'information.

- `min`

  - : Cet attribut est valide pour les types `date`, `month`, `week`, `time`, `datetime-local`, `number`, et `range`, il définit la valeur la plus faible de l'intervalle des valeurs autorisées. Si la valeur saisie dans l'élément est inférieure à la valeur de cet attribut, l'élément échouera à [la validation des contraintes](/fr/docs/Web/Guide/HTML/Constraint_validation). Si la valeur de l'attribut `min` n'est pas un nombre, l'élément n'a pas de valeur minimale.

    Cette valeur doit être inférieure ou égale à la valeur fournie par l'attribut `max`. Si l'attribut `min` est présent mais sans valeur ou avec une valeur invalide, aucune contrainte de minimum n'est appliquée. Si l'attribut `min` est valide et que la valeur saisie dans le contrôle est inférieure à celle de cet attribut, la validation des contraintes empêchera l'envoi du formulaire. Voir [la validation côté client](#validation_côté_client) pour plus d'information.

    Il existe un cas particulier pour les types de données périodiques (comme les dates ou les heures), où la valeur de `max` peut être inférieure à celle de `min`, pour avoir par exemple un intervalle de temps entre 10 heures du soir et 4 heures du matin.

- `minlength`

  - : Cet attribut est valide pour les types `text`, `search`, `url`, `tel`, `email`, et `password`, il définit le nombre minimal de caractères (exprimé en nombre de codets UTF-16) qu'il est possible de saisir dans le champ. La valeur de cet attribut doit être un entier positif inférieur ou égal à celle de `maxlength`. Si cet attribut est absent ou qu'une valeur invalide est indiquée, le champ n'aura pas de longueur minimale.

    Le champ échouera à [la validation des contraintes](/fr/docs/Web/Guide/HTML/Constraint_validation) si longueur du texte saisi est inférieure à `minlength` comme nombre de codets UTF-16. Voir [la validation côté client](#validation_côté_client) pour plus d'information.

- `multiple`
  - : Un attribut booléen qui, lorsqu'il est présent, permet de saisir plusieurs adresses électroniques séparées par des virgules ou de sélectionner plusieurs fichiers si le contrôle est de type `file`. Voir les page détaillées sur [`<input type="file">`](/fr/docs/Web/HTML/Element/Input/file) et [`<input type="email">`](/fr/docs/Web/HTML/Element/input/email).
- `name`

  - : Une chaîne de caractères qui fourni le nom associé au contrôle. Le nom est envoyé avec la valeur du contrôle lors de l'envoi du formulaire.

    Cet attribut n'est pas strictement obligatoire mais devrait être utilisé dans la grande majorité des cas. Si un champ n'a pas d'attribut `name` ou que celui-ci est vide, la valeur du champ n'est pas envoyée avec le formulaire (à l'instar des contrôles désactivés, des boutons radio ou cases décochés, et des boutons de réinitialisation).

    Il existe deux cas spéciaux&nbsp;:

    1. `_charset_`&nbsp;: Si cette valeur est utilisée comme nom pour un élément `<input>` de type [`hidden`](/fr/docs/Web/HTML/Element/Input/hidden), la valeur du champ est automatiquement renseignée par [l'agent utilisateur](/fr/docs/Glossary/User_agent) et porte l'encodage de caractères utilisé pour l'envoi du formulaire.
    2. `isindex`&nbsp;: Pour des raisons historiques, le nom [`isindex`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name) n'est pas autorisé.

    L'attribut `name` possède un comportement particulier pour les boutons radio.

    En effet, seul un bouton radio, parmi le groupe de boutons qui portent le même nom, peut être sélectionné à un moment donné. Sélectionner un des boutons radio du groupe déclenchera automatiquement la désélection de tout bouton du groupe précédemment sélectionné. C'est la valeur du bouton radio sélectionné qui est envoyé avec le nom lors de l'envoi du formulaire.

    Lors de la navigation au clavier avec les tabulations, si un bouton est sélectionné, c'est celui-ci qui recevra le focus. Même si les boutons ne sont pas regroupés selon la source HTML, si un bouton du groupe est sélectionné, naviguer au clavier jusqu'à ce groupe passera tous les boutons non sélectionnés jusqu'au bouton sélectionné. Si aucun bouton du groupe n'est sélectionné, le groupe reçoit le focus lorsque le premier bouton du groupe est atteint au clavier.

    Une fois le focus obtenu sur le groupe, on pourra utiliser les flèches du clavier pour naviguer entre les boutons radio du même groupe (c'est-à-dire partageant le même nom/`name`, et pas nécessairement groupés au sein de la source HTML).

    Lorsqu'un élément `<input>` possède un attribut `name`, ce nom devient une propriété de l'objet [`HTMLFormElement.elements`](/fr/docs/Web/API/HTMLFormElement/elements) associé au formulaire propriétaire. Ainsi, si on a un champ dont le nom est `invite` et un autre dont le nom est `taille-chat`, on pourra manipuler les données du formulaire en JavaScript comme suit&nbsp;:

    ```js
    let form = document.querySelector("form");

    let nomInvite = form.elements.invite;
    let tailleChat = form.elements["taille-chat"];
    ```

    À l'exécution de ce code, `nomInvite` correspondra à l'objet [`HTMLInputElement`](/fr/docs/Web/API/HTMLInputElement) associé au champ `invite`, et de même l'objet `tailleChat` correspondra à l'objet du DOM associé au champ avec le nom `taille-chat`.

    > **Attention :** On évitera de donner aux éléments de formulaire un nom qui correspond à une propriété native du DOM. Cela surchargerait la propriété ou la méthode native pour pointer vers le champ correspondant.

- `pattern`

  - : Cet attribut est une expression rationnelle que la valeur du champ doit respecter afin de [valider les contraintes](/fr/docs/Web/Guide/HTML/Constraint_validation). Cette valeur doit être une expression rationnelle JavaScript valide (voir [`RegExp`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp)) telle que documentée dans [le guide sur les expressions rationnelles](/fr/docs/Web/JavaScript/Guide/Regular_Expressions). Le marqueur `'u'` est implicitement appliqué à la compilation de l'expression et le motif est donc traité comme une séquence de codets Unicode et non ASCII. Il ne faut pas encadrer le motif de barres obliques.

    Si l'attribut `pattern` est présent mais sans valeur ou que celle-ci est valide, aucune expression rationnelle n'est appliquée et l'attribut est ignoré. Si la valeur de `pattern` est valide et que la valeur du champ ne respecte pas le motif, le champ échouera à [la validation des contraintes](/fr/docs/Web/Guide/HTML/Constraint_validation) et empêchera l'envoi du formulaire.

    > **Note :** En utilisant l'attribut `pattern`, il faut également informer l'utilisatrice ou l'utilisateur quant au format attendu, en ajoutant un texte explicatif à proximité. On peut aussi inclure un attribut [`title`](#title) pour expliquer les contraintes à respecter&nbsp;: la plupart des navigateurs afficheront le titre sous la forme d'une bulle d'information. Attention, une explication visible est nécessaire pour une accessibilité correcte, la bulle d'information fournie par `title` n'est qu'une amélioration secondaire.

    Voir [la validation côté client](#validation_côté_client) pour plus d'information.

- `placeholder`

  - : Cet attribut est une chaîne de caractères qui fournit une brève indication quant au type d'information attendu dans le champ. Sa valeur devrait être un mot ou une courte phrase qui indique le type de données attendu plutôt qu'une explication ou une consigne. Le texte de cet attribut _ne doit pas_ inclure de retour chariot ou de saut de ligne. Ainsi, si un champ est destiné à la saisie d'un prénom et que le libellé est «&nbsp;Prénom&nbsp;», une valeur appropriée pour cet attribut pourra être `"ex. Mustafa"`.

    > **Note :** Sur le plan sémantique, l'attribut `placeholder` n'est pas aussi utile que d'autres méthodes pour expliquer le formulaire. Il peut aussi causer certains problèmes inattendus avec le contenu. Voir [les libellés](#libellés) pour plus d'informations.

- `readonly`

  - : Un attribut booléen qui, lorsqu'il est présent, indique qu'il ne devrait pas être possible d'éditer la valeur du champ. Cet attribut est pris en charge par les types de contrôle `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, et `password`.

    Voir [l'attribut HTML `readonly`](/fr/docs/Web/HTML/Attributes/readonly) pour plus d'informations.

- `required`

  - : Un attribut booléen qui, lorsqu'il est présent, indique qu'une valeur doit être saisie avant que le formulaire puisse être envoyé. Cet attribut est pris en charge pour les types de contrôle `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `password`, `checkbox`, `radio`, et `file`.

    Voir [la validation côté client](#validation_côté_client) et [l'attribut HTML `required`](/fr/docs/Web/HTML/Attributes/required) pour plus d'informations.

- `size`
  - : Cet attribut est uniquement valide pour les types de contrôle `email`, `password`, `tel`, `url` et `text`. Il indique la largeur visible pour le contrôle. D'une certaine façon, il crée un résultat analogue à l'application de la propriété CSS `width`. L'unité de cette valeur dépend du type de contrôle. Pour les champs de type `password` et `text`, il s'agit du nombre de caractères (équivalent à l'unité `em`) et la valeur par défaut vaut `20`. Pour les autres types de champs, la valeur est exprimée en pixels. La largeur définie avec la feuille de style CSS aura la priorité sur cet attribut.
- `src`
  - : Cet attribut est uniquement valide pour le type `image` et indique l'URL du fichier de l'image à afficher sur le bouton. Voir [`<input type="image">`](/fr/docs/Web/HTML/Element/input/image) pour plus d'informations.
- `step`

  - : Cet attribut est valide pour les contrôles de type numérique (`number`, dates/heures, `range`). L'attribut [`step`](/fr/docs/Web/HTML/Attributes/step) est un nombre qui définit la granularité de la valeur.

    S'il n'est pas explicitement inclus&nbsp;:

    - Pour les types `number` et `range`, sa valeur par défaut sera 1.
    - Pour les types temporels, la valeur par défaut de `step` dépend du type. Voir les pages individuelles pour plus de détails&nbsp;: [`date`](/fr/docs/Web/HTML/Element/input/date#step), [`datetime-local`](/fr/docs/Web/HTML/Element/input/datetime-local#step), [`month`](/fr/docs/Web/HTML/Element/input/month#step), [`time`](/fr/docs/Web/HTML/Element/input/time#step), et [`week`](/fr/docs/Web/HTML/Element/input/week#step).

    La valeur de cet attribut doit être un nombre positif (entier ou décimal) ou la valeur spéciale `any` (cette dernière indiquant qu'il n'y a pas de contrainte de granularité et que toute valeur est autorisée (les contraintes imposées par [`min`](#min) et [`max`](#max) s'appliquent toujours)).

    Si `any` n'est pas utilisé explicitement, les valeurs valides du champ pour les types temporels, `number`, et `range` seront celles construites depuis le minimum ([`min`](#min)) en ajoutant l'incrément une ou plusieurs fois jusqu'à atteindre le maximum ([`max`](#max)), si ce dernier est défini.

    Ainsi, si on a `<input type="number" min="10" step="2">`, tout entier pair, supérieur ou égal à `10` sera valide. Si `step` est absent, par exemple avec `<input type="number">`, tous les nombres entiers seront valides mais les nombres décimaux (comme `4.2`) seront invalides, car la valeur par défaut de `step` vaut `1` pour le type `number`. Afin que `4.2` soit valide, on devra utiliser la valeur `any`, ou `0.1`, ou `0.2` pour l'attribut `step`, ou encore une valeur de `min` dont la partie fractionnaire vaut `.2`, par exemple `<input type="number" min="-5.2">`

    > **Note :** Lorsque la donnée saisie ne respecte pas l'incrément, la valeur est considérée comme invalide pour la validation des contraintes et l'élément sera ciblé par la pseudo-classe `:invalid`.

    Voir [la validation côté client](#validation_côté_client) pour plus d'information.

- `tabindex`
  - : Un attribut universel, valide pour tous les éléments, y compris tous les types de `<input>`. Sa valeur est un entier qui indique si l'élément peut prendre le focus et s'il devrait participer à la navigation séquentielle au clavier. Comme tous les types d'élément `<input>`, sauf ceux masqués, peuvent prendre le focus, cet attribut ne devrait pas être utilisé sur les contrôles de formulaire, car cela nécessiterait de gérer l'ordre du focus pour tous les éléments du document, au risque de dégradé l'utilisabilité et l'accessibilité si cela était fait de façon incorrecte.
- `title`
  - : Un attribut universel, valide pour tous les éléments, y compris tous les types de `<input>`. Sa valeur est un texte fournissant des informations à propos de l'élément auquel il appartient. Une telle information est généralement (mais pas nécessairement) affichée sous la forme d'une bulle d'information. `title` ne devrait pas être utilisé comme méthode principale pour expliquer le rôle d'un contrôle de formulaire. Il faut plutôt utiliser l'élément [`<label>`](/fr/docs/Web/HTML/Element/Label) avec un attribut `for` dont la valeur correspond à la valeur de l'attribut [`id`](#id) du champ de formulaire. Voir [la section sur les libellés](#libellés) ci-après.
- `type`

  - : Une chaîne de caractères qui indique le type de contrôle à afficher. On utilisera par exemple la valeur `checkbox` pour afficher une case à cocher. Si cet attribut est absent (ou qu'une valeur inconnue est utilisée), ce sera un champ de type `text` qui sera utilisé, permettant de saisir un texte dans le contrôle de formulaire.

    Les valeurs autorisées pour cet attribut sont listées dans [la section sur les types de champ](#les_différents_types_de_champs_input) ci-avant.

- `value`
  - : La valeur du contrôle. Lorsque cette valeur est fournie dans le document HTML, il s'agit de la valeur initiale, qui peut ensuite être récupérée et éventuellement modifiée avec JavaScript via la propriété du DOM correspondante&nbsp;: [`HTMLInputElement.value`](/fr/docs/Web/API/HTMLInputElement). Cet attribut est toujours optionnel en théorie, mais peut être considéré comme obligatoire en pratique pour les types de champ `checkbox`, `radio`, et `hidden`.
- `width`
  - : Cet attribut est uniquement valide pour le type de contrôle `image`, où il exprime la largeur du fichier d'image à afficher sur le bouton graphique. Voir [`<input type="image">`](/fr/docs/Web/HTML/Element/input/image) pour plus d'informations.

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
      <td><a href="#autocorrect"><code>autocorrect</code></a></td>
      <td>Une chaîne de caractères, <code>on</code> ou <code>off</code>, qui indique si la correction automatique est activée. <strong>Uniquement dans Safari.</strong></td>
    </tr>
    <tr>
      <td><a href="#incremental"><code>incremental</code></a></td>
      <td>Indique s'il faut envoyer ou non de multiples évènements <a href="/fr/docs/Web/API/HTMLInputElement/search_event"><code>search</code></a> pour mettre à jour les résultats de recherche de façon dynamique lorsque la personne est toujours en train d'éditer la valeur du champ. <strong>Uniquement dans WebKit et Blink (Safari, Chrome, Opera, etc.).</strong>
      </td>
    </tr>
    <tr>
      <td><code>mozactionhint</code></td>
      <td><p>Une chaîne de caractères qui indique le type d'action qui sera réalisée lorsque la personne appuiera sur la touche <kbd>Entrée</kbd> ou <kbd>Retour</kbd> lors de l'édition du champ. Il est utilisé pour déterminer le libellé pertinent à utiliser sur un clavier virtuel.</p>
        <p><strong>Obsolète&nbsp;: il faut utiliser <a href="/fr/docs/Web/HTML/Global_attributes/enterkeyhint"><code>enterkeyhint</code></a> à la place.</strong></p>
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

- `autocorrect` {{non-standard_inline}}
  - : (Safari uniquement). Une chaîne de caractères qui indique si la correction automatique doit être activée lors de l'édition manuelle du champ. Les valeurs autorisées pour cet attribut sont&nbsp;:
    - `on`
      - : La correction automatique des fautes et le traitement des substitutions de texte (si elles sont configurées) sont activées.
    - `off`
      - : La correction automatique et les substitutions de texte sont désactivées.
- `incremental` {{non-standard_inline}}

  - : Cet attribut booléen est une extension de WebKit et Blink (présent donc dans les navigateurs Safari, Opera, Chrome, etc.) qui indique, s'il est présent, que le champ doit être traité comme un champ de recherche dynamique. Lorsque la personne édite la valeur du champ, l'agent utilisateur envoie des évènements [`search`](/fr/docs/Web/API/HTMLInputElement/search_event) à l'objet [`HTMLInputElement`](/fr/docs/Web/API/HTMLInputElement) qui représente le champ de recherche. Cela permet de gérer, via du code, la mise à jour des résultats de recherche en temps réel lors de l'édition.

    Si `incremental` n'est pas indiqué, l'évènement [`search`](/fr/docs/Web/API/HTMLInputElement/search_event) est uniquement envoyé lorsque la personne initie explicitement une recherche, c'est-à-dire en appuyant sur la touche <kbd>Entrée</kbd> ou <kbd>Retour</kbd> lors de l'édition du champ.

    L'évènement `search` est soumis à des limites de fréquence propres à chaque implémentation.

- `orient` {{non-standard_inline}}
  - : Semblable à la propriété CSS non-standard `-moz-orient` pour les éléments [`<progress>`](/fr/docs/Web/HTML/Element/Progress) et [`<meter>`](/fr/docs/Web/HTML/Element/Meter), cet attribut définit l'orientation de la piste du curseur. Les valeurs possibles pour cet attribut sont `horizontal` (la piste est affichée horizontalement) et `vertical` (la piste est affichée verticalement).
- `results` {{non-standard_inline}}
  - : Uniquement pris en charge par Safari, cet attribut est une valeur numérique qui permet de surcharger le nombre de résultats à afficher dans la liste des suggestions de l'élément `<input>` à partir des requêtes précédentes. Sa valeur doit être un nombre positif. Si aucune valeur n'est indiquée ou qu'une valeur invalide est fournie, c'est le nombre d'options maximum par défaut du navigateur qui est utilisé.
- `webkitdirectory` {{non-standard_inline}}
  - : Un attribut booléen qui, lorsqu'il est présent, indique que seuls les répertoires peuvent être sélectionnés via le sélecteur de fichier. Voir [`HTMLInputElement.webkitdirectory`](/fr/docs/Web/API/HTMLInputElement/webkitdirectory) pour plus de détails et d'exemples. Bien qu'originalement implémenté uniquement par les navigateurs WebKit, `webkitdirectory` est également utilisable avec Microsoft Edge et Firefox 50 (ou ultérieur). Toutefois, malgré cette prise en charge assez large, il n'est toujours pas standard et ne devrait pas être utilisé à moins qu'il n'y ait aucune autre alternative.

## Méthodes

Les méthodes suivantes sont fournies par l'interface [`HTMLInputElement`](/fr/docs/Web/API/HTMLInputElement) qui représente les éléments `<input>` dans le DOM. Les méthodes des interfaces parentes [`HTMLElement`](/fr/docs/Web/API/HTMLElement), [`Element`](/fr/docs/Web/API/Element), [`Node`](/fr/docs/Web/API/Node), et [`EventTarget`](/fr/docs/Web/API/EventTarget) sont également disponibles.

- [`checkValidity()`](/fr/docs/Web/API/HTMLInputElement/checkValidity)
  - : Renvoie `true` si la valeur de l'élément respecte les conditions de validité, `false` sinon et, dans ce dernier cas, déclenche un évènement [`invalid`](/fr/docs/Web/API/HTMLInputElement/invalid_event) sur l'élément.
- [`reportValidity()`](/fr/docs/Web/API/HTMLInputElement/reportValidity)
  - : Renvoie `true` si la valeur de l'élément respecte les conditions de validité, `false` sinon et, dans ce dernier cas, déclenche un évènement [`invalid`](/fr/docs/Web/API/HTMLInputElement/invalid_event) sur l'élément et, si l'évènement n'est pas annulé, rapporte ce problème à l'utilisatrice ou l'utilisateur.
- [`select()`](/fr/docs/Web/API/HTMLInputElement/select)
  - : Sélectionne tout le contenu de l'élément `<input>` sous réserve que son contenu soit sélectionnable. Pour les éléments qui n'ont pas de contenu texte qui puisse être sélectionné (par exemple un sélecteur de couleur ou un calendrier), cette méthode n'a pas d'effet.
- [`setCustomValidity()`](/fr/docs/Web/API/HTMLInputElement/setCustomValidity)
  - : Définit un message particulier à afficher si la valeur de l'élément n'est pas valide.
- [`setRangeText()`](/fr/docs/Web/API/HTMLInputElement/setRangeText)
  - : Modifie le contenu de la valeur entre deux positions de caractères par une nouvelle chaîne de caractères. Un paramètre `selectMode` permet de contrôler la façon dont le contenu existant est affecté.
- [`setSelectionRange()`](/fr/docs/Web/API/HTMLInputElement/setSelectionRange)
  - : Sélectionne un intervalle de caractères dans un champ texte. Cette méthode n'a pas d'effet pour les champs qui ne sont pas des champs texte.
- [`stepDown()`](/fr/docs/Web/API/HTMLInputElement/stepDown)
  - : Décrémente la valeur d'un champ numérique d'un nombre indiqué d'unités (1 par défaut).
- [`stepUp()`](/fr/docs/Web/API/HTMLInputElement/stepUp)
  - : Incrément la valeur d'un champ numérique d'un nombre indiqué d'unités (1 par défaut).

## CSS

Les champs de formulaire sont des éléments remplacés et disposent de quelques fonctionnalités qui ne sont pas applicables aux éléments qui ne sont pas des éléments de formulaire. Certains sélecteurs CSS permettent de cibler spécifiquement les contrôles en fonction de l'interface utilisateur&nbsp;: ce sont les pseudo-classes d'interface utilisateur. Un élément `<input>` peut également être ciblé via son type grâce aux sélecteurs d'attribut. Certaines propriétés CSS sont également utiles pour ces éléments.

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
      <td><a href="/fr/docs/Web/CSS/:enabled"><code>:enabled</code></a></td>
      <td>S'applique à tout élément actif (qui peut faire l'objet d'une sélection de texte, d'un clic, d'une saisie de texte, etc.) ou accepter le focus.</td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/CSS/:disabled"><code>:disabled</code></a></td>
      <td>S'applique à tout élément désactivé (dont le texte ne peut pas être sélectionné, qui ne peut pas recevoir de clic ou de saisie de texte) ou qui ne peut pas recevoir le focus.</td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/CSS/:read-only"><code>:read-only</code></a></td>
      <td>S'applique aux éléments qui ne peuvent pas être édités par l'utilisatrice ou l'utilisateur.</td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/CSS/:read-write"><code>:read-write</code></a></td>
      <td>S'applique aux éléments éditables.</td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/CSS/:placeholder-shown"><code>:placeholder-shown</code></a></td>
      <td>S'applique aux éléments qui affichent actuellement le texte fourni par l'attribut <a href="#placeholder"><code>placeholder</code></a>, y compris les éléments <code>&lt;input&gt;</code> et <a href="/fr/docs/Web/HTML/Element/Textarea"><code>&lt;textarea&gt;</code></a> avec un attribut <code>placeholder</code> présent mais sans valeur pour le moment.</td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/CSS/:default"><code>:default</code></a></td>
      <td>S'applique aux éléments de formulaire qui sont les options par défaut parmi les groupes d'éléments associés entre eux. Correspond aux éléments <a href="/fr/docs/Web/HTML/Element/input/checkbox"><code>&lt;input type="checkbox"&gt;</code></a> et <a href="/fr/docs/Web/HTML/Element/input/radio"><code>&lt;input type="radio"&gt;</code></a> qui sont cochés/sélectionnés au chargement de la page.</td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/CSS/:checked"><code>checked</code></a></td>
      <td>S'applique aux éléments <a href="/fr/docs/Web/HTML/Element/input/checkbox"><code>&lt;input type="checkbox"&gt;</code></a> et <a href="/fr/docs/Web/HTML/Element/input/radio"><code>&lt;input type="radio"&gt;</code></a> qui sont actuellement cochés (et à l'élément <a href="/fr/docs/Web/HTML/Element/option"><code>&lt;option&gt;</code></a> sélectionné d'un élément <a href="/fr/docs/Web/HTML/Element/select"><code>&lt;select&gt;</code></a>).</td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/CSS/:indeterminate"><code>:indeterminate</code></a></td>
      <td>S'applique aux éléments <a href="/fr/docs/Web/HTML/Element/input/checkbox"><code>&lt;input type="checkbox"&gt;</code></a> dont la propriété <code>indeterminate</code> est fixée à <code>true</code> en JavaScript, aux éléments <a href="/fr/docs/Web/HTML/Element/input/radio"><code>&lt;input type="radio"&gt;</code></a> lorsque tous les boutons radio d'un groupe sous décochés, et aux éléments <a href="/fr/docs/Web/HTML/Element/Progress"><code>&lt;progress&gt;</code></a> dans un état indéterminé.</td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/CSS/:valid"><code>:valid</code></a></td>
      <td>S'applique aux contrôles de formulaire concernés par les contraintes de validation et qui sont actuellement valides.</td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/CSS/:invalid"><code>:invalid</code></a></td>
      <td>S'applique aux contrôles de formulaire concernés par les contraintes de validation et qui sont actuellement invalides. Cible un contrôle de formulaire dont les valeurs ne respectent pas les contraintes imposées par ses attributs comme <a href="#required"><code>required</code></a>, <a href="#pattern"><code>pattern</code></a>, <a href="#step"><code>step</code></a>, et <a href="#max"><code>max</code></a>.</td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/CSS/:in-range"><code>:in-range</code></a></td>
      <td>S'applique aux champs non vides dont la valeur actuelle est située dans les limites d'intervalle définies par les attributs <a href="#min"><code>min</code></a> et <a href="#max"><code>max</code></a> et suit le pas décrit par l'attribut <a href="#step"><code>step</code></a>.
      </td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/CSS/:out-of-range"><code>:out-of-range</code></a></td>
      <td>S'applique aux champs non vides dont la valeur actuelle est située en dehors des limites d'intervalle définies par les attributs <a href="#min"><code>min</code></a> et <a href="#max"><code>max</code></a> ou qui ne respecte pas la contrainte de granularité dictée par l'attribut <a href="#step"><code>step</code></a>.</td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/CSS/:required"><code>:required</code></a></td>
      <td>S'applique aux éléments <code>&lt;input&gt;</code>, <a href="/fr/docs/Web/HTML/Element/select"><code>&lt;select&gt;</code></a> ou <a href="/fr/docs/Web/HTML/Element/Textarea"><code>&lt;textarea&gt;</code></a> qui ont l'attribut <a href="#required"><code>required</code></a>. Seuls les éléments qui peuvent effectivement être obligatoires sont ciblés. Utiliser l'attribut <a href="#required"><code>required</code></a> sur un élément qui ne peut pas devneir obligatoire n'aura aucun effet.</td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/CSS/:optional"><code>:optional</code></a></td>
      <td>S'applique aux éléments <code>&lt;input&gt;</code>, <a href="/fr/docs/Web/HTML/Element/select"><code>&lt;select&gt;</code></a> ou <a href="/fr/docs/Web/HTML/Element/Textarea"><code>&lt;textarea&gt;</code></a> qui n'ont pas l'attribut <a href="#required"><code>required</code></a>. Les éléments qui ne peuvent pas être obligatoires ne sont pas ciblés.</td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/CSS/:blank"><code>:blank</code></a></td>
      <td>S'applique aux éléments <code>&lt;input&gt;</code> ou <a href="/fr/docs/Web/HTML/Element/Textarea"><code>&lt;textarea&gt;</code></a> qui n'ont pas de valeur actuellement.</td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/CSS/:user-invalid"><code>:user-invalid</code></a></td>
      <td>Semblable à <code>:invalid</code>, mais ne s'applique aux champs invalides qu'après une interaction utilisateur (par exemple le passage du focus, la sortie du contrôle ou une tentative d'envoi du formulaire avec le contrôle invalide).</td>
    </tr>
  </tbody>
</table>

#### Exemple d'utilisation des pseudo-classes

On peut mettre en forme le libellé d'une case à cocher selon que la case est cochée ou non. Dans cet exemple, on adapte les propriétés [`color`](/fr/docs/Web/CSS/color) et [`font-weight`](/fr/docs/Web/CSS/font-weight) de l'élément [`<label>`](/fr/docs/Web/HTML/Element/Label) situé immédiatement après une case cochée. On applique aucune mise en forme si l'élément `<input>` n'est pas coché.

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

{{EmbedLiveSample('', 500, 80)}}

### Sélecteurs d'attribut

Il est possible de cibler différents types de contrôles en fonction de la valeur de leur attribut [`type`](#type) grâce aux [sélecteurs d'attribut](/fr/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors). Les sélecteurs d'attribut CSS permettent de cibler des éléments en fonction de la présence ou de la valeur d'un attribut donné.

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

Par défaut, l'affichage du texte de l'attribut [`placeholder`](#placeholder) se fait en transparence ou avec un gris clair. Le pseudo-élément [`::placeholder`](/fr/docs/Web/CSS/::placeholder) permet de cibler le texte de cet attribut et peut être mis en forme avec un sous-ensemble de propriétés CSS.

```css
::placeholder {
  color: blue;
}
```

Seul le sous-ensemble des propriétés CSS qui s'appliquent au pseudo-élément [`::first-line`](/fr/docs/Web/CSS/::first-line) peuvent être utilisées dans une règle qui utilise `::placeholder` comme sélecteur.

### `appearance`

La propriété [`appearance`](/fr/docs/Web/CSS/appearance) permet d'afficher presque tous les éléments en utilisant le style natif fourni par le thème du système d'exploitation, ou de retirer ce style natif si on utilise la valeur `none`.

En théorie, on peut donc faire ressembler un élément `<div>` à un bouton radio grâce à `div {appearance: radio;}` ou faire ressembler un bouton radio à une case à cocher avec `[type="radio"] {appearance: checkbox;}`. En réalité, il s'agit de mauvaises pratiques, à éviter donc.

Utiliser `appearance: none` permettra de retirer les bordures liées à la plateforme mais pas les fonctionnalités.

### `caret-color`

[`caret-color`](/fr/docs/Web/CSS/caret-color) est une propriété qui s'applique aux éléments permettant de saisir du texte et qui permet de personnaliser la couleur du curseur de saisie&nbsp;:

#### HTML

```html
<label for="textInput">Vous noterez le curseur rouge :</label>
<input id="textInput" class="custom" size="32" />
```

#### CSS

```css
input.custom {
  caret-color: red;
  font:
    16px "Helvetica",
    "Arial",
    "sans-serif";
}
```

#### Résultat

{{EmbedLiveSample('', 500, 80)}}

### `object-position` et `object-fit`

Dans certains cas (le plus souvent pour les champs non-texte et les interfaces spécialisées), l'élément `<input>` est un [élément remplacé](/fr/docs/Web/CSS/Replaced_element). Lorsque c'est le cas, la taille et la position de l'élément au sein de son cadre peuvent être ajustées grâce aux propriétés CSS [`object-position`](/fr/docs/Web/CSS/object-position) et [`object-fit`](/fr/docs/Web/CSS/object-fit).

### Mise en forme

Pour plus d'informations sur l'ajout de couleurs aux éléments HTML, voir&nbsp;:

- [Appliquer des couleurs aux éléments HTML en utilisant CSS](/fr/docs/Web/CSS/CSS_Colors/Applying_color).

Voir également&nbsp;:

- [Mettre en forme les formulaires HTML](/fr/docs/Learn/Forms/Styling_web_forms)
- [Mise en forme avancée des formulaires HTML](/fr/docs/Learn/Forms/Advanced_form_styling)
- [Tableau de compatibilité des propriétés CSS pour les contrôles de formulaire](/fr/docs/Learn/Forms/Property_compatibility_table_for_form_controls).

## Fonctionnalités supplémentaires

### Libellés

Les libellés permettent d'associer les textes explicatifs aux éléments `<input>`. Utiliser un élément [`<label>`](/fr/docs/Web/HTML/Element/Label) pour fournir des informations explicatives quant à un champ de formulaire est _toujours_ une bonne chose (quel que soit le sujet de mise en forme qui vient après). Ce n'est jamais une mauvaise idée que d'utiliser un élément `<label>` pour expliquer ce qui doit être saisi dans un élément `<input>` ou [`<textarea>`](/fr/docs/Web/HTML/Element/Textarea).

#### Rattachement des libellés

Le rattachement sémantique entre les éléments `<input>` et `<label>` est utile aux outils d'assistance comme les lecteurs d'écran. En les associant grâce à l'attribut [`for`](/fr/docs/Web/HTML/Element/Label#for) des éléments `<label>`, on lie le libellé au contrôle de formulaire d'une façon qui permet aux lecteurs d'écran de décrire les champs du formulaire plus précisément.

Il ne suffit pas d'avoir un texte normal à côté de l'élément `<input>`. Pour l'utilisabilité et l'accessibilité, on associera un libellé avec [`<label>`](/fr/docs/Web/HTML/Element/Label) de façon implicite ou explicite&nbsp;:

```html
<!-- inaccessible -->
<p>Veuillez saisir votre nom : <input id="name" type="text" size="30" /></p>

<!-- libellé implicite -->
<p>
  <label
    >Veuillez saisir votre nom : <input id="name" type="text" size="30"
  /></label>
</p>

<!-- libellé explicite -->
<p>
  <label for="name">Veuillez saisir votre nom : </label
  ><input id="name" type="text" size="30" />
</p>
```

Le premier exemple est inaccessible&nbsp;: il n'y a aucune relation entre la consigne de saisie et l'élément `<input>`.

En plus d'un nom accessible, un élément `<label>` permet d'agrandir la zone d'interaction à la souris ou via la surface tactile sur laquelle on peut cliquer/toucher. En associant un élément `<label>` avec un élément `<input>`, si on clique sur l'un des deux, cela passera le focus au contrôle porté par l'élément `<input>`. Si on utilise du texte simple plutôt qu'un élément sémantique, on n'aura pas ces bénéfices. Agrandir la zone d'activation du contrôle aide les personnes avec un handicap moteur.

En développant sur le Web, il est important de ne pas présupposer que tout le monde connaît tout sur le Web. La diversité des personnes qui utilisent le Web, et donc votre site ou application, garantit à coup sûr que quelqu'un d'autre peut interpréter un formulaire différemment si ce dernier ne contient pas de libellés clairs et bien associés.

#### Les textes d'indications (`placeholder`) ne sont pas accessibles

L'attribut [`placeholder`](#placeholder) permet d'indiquer un texte qui apparaît dans la zone du contenu de l'élément `<input>` lorsqu'il est vide. Ce texte indicatif ne devrait jamais être strictement nécessaire à la compréhension du formulaire. Il ne s'agit pas d'un libellé et on ne devrait pas utiliser cet attribut comme un remplacement d'un libellé. `placeholder` permet de fournir une indication de ce à quoi la valeur à saisir devrait ressembler, il ne s'agit ni d'une explication ni d'une consigne.

Le texte fourni par `placeholder` n'est pas accessible pour les lecteurs d'écran et dès que la personne saisit une valeur, ou si le contrôle a déjà une valeur, il disparaît. Les navigateurs qui ont une fonctionnalité de traduction automatique pourraient ignorer les attributs lors de la traduction, ce qui signifie que `placeholder` pourrait ne pas être traduit.

> **Note :** Évitez d'utiliser [`placeholder`](#placeholder) si vous pouvez. Pour ajouter un libellé sur un élément `<input>`, on utilisera l'élément [`<label>`](/fr/docs/Web/HTML/Element/Label).

### Validation côté client

> **Attention :** La validation côté client est utile mais _ne garantit pas_ que le serveur reçoit des données valides. Si les données doivent respecter un format donné, il faudra _toujours_ les vérifier côté serveur et renvoyer [une réponse HTTP `400`](/fr/docs/Web/HTTP/Status/400) si le format est invalide.

En complément des pseudo-classes CSS [`:valid`](/fr/docs/Web/CSS/:valid) et [`:invalid`](/fr/docs/Web/CSS/:invalid) qui permettent de cibler les contrôles selon leur état de validité, le navigateur fournit une validation côté client pour chaque tentative d'envoi du formulaire. À l'envoi du formulaire, si un des contrôles échoue à respecter les contraintes, les navigateurs qui implémentent cette fonctionnalité afficheront un message d'erreur sur le premier contrôle du formulaire qui est invalide, le message pouvant être un message par défaut selon le type d'erreur ou un message choisi par le site.

Certains types de champ et attributs imposent des limites aux valeurs possibles pour un champ donné. Ainsi, `<input type="number" min="2" max="10" step="2">` signifiera que seuls les nombres 2, 4, 6, 8, et 10 sont valides. Plusieurs erreurs de validation peuvent se produire ici, `rangeUnderflow` si la valeur est inférieure à 2, `rangeOverflow` si elle est supérieure à 10, `stepMismatch` si la valeur est comprise entre 2 et 10, mais n'est pas un entier pair (autrement dit, la contrainte imposée par `step` n'est pas respectée), ou `typeMismatch` si la valeur n'est pas un nombre.

Pour les types de champ dont le domaine des valeurs possibles est périodique (autrement dit après avoir atteint la plus grande valeur, on revient à la plus petite), il est possible d'avoir des valeurs d'attribut [`max`](#max) inférieures à celles de [`min`](#min). Cela est particulièrement utile pour les dates et les heures, par exemple pour autoriser les heures entre 8h du soir et 8h du matin&nbsp;:

```html
<input type="time" min="20:00" max="08:00" name="overnight" />
```

Certains attributs et valeurs peuvent causer une erreur [`ValidityState`](/fr/docs/Web/API/ValidityState) spécifique&nbsp;:

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
      <td><a href="/fr/docs/Web/API/validityState/rangeOverflow"><code>validityState.rangeOverflow</code></a></td>
      <td>Se produit lorsque la valeur est supérieure à la valeur maximale définie par l'attribut <code>max</code>.</td>
    </tr>
    <tr>
      <td><a href="#maxlength"><code>maxlength</code></a></td>
      <td><a href="/fr/docs/Web/API/validityState/tooLong"><code>validityState.tooLong</code></a></td>
      <td>Se produit lorsque le nombre de caractères du champ est supérieur à la valeur définie par l'attribut <code>maxlength</code>.</td>
    </tr>
    <tr>
      <td><a href="#min"><code>min</code></a></td>
      <td><a href="/fr/docs/Web/API/validityState/rangeUnderflow"><code>validityState.rangeUnderflow</code></a></td>
      <td>Se produit lorsque la valeur est inférieure à la valeur minimale définie par l'attribut <code>min</code>.</td>
    </tr>
    <tr>
      <td><a href="#maxlength"><code>maxlength</code></a></td>
      <td><a href="/fr/docs/Web/API/validityState/tooShort"><code>validityState.tooShort</code></a></td>
      <td>Se produit lorsque le nombre de caractères du champ est inférieur à la valeur définie par l'attribut <code>minlength</code>.</td>
    </tr>
    <tr>
      <td><a href="#pattern"><code>pattern</code></a></td>
      <td><a href="/fr/docs/Web/API/validityState/patternMismatch"><code>validityState.patternMismatch</code></a></td>
      <td>Se produit lorsque l'attribut <code>pattern</code> contient une expression rationnelle valide et que la valeur du champ ne respecte pas celle-ci.</td>
    </tr>
    <tr>
      <td><a href="#required"><code>required</code></a></td>
      <td><a href="/fr/docs/Web/API/validityState/valueMissing"><code>validityState.valueMissing</code></a></td>
      <td>Se produit lorsque l'attribut <code>required</code> est présent et mais sa valeur est <code>null</code> ou que le bouton radio ou la case à cocher n'est pas sélectionné.
      </td>
    </tr>
    <tr>
      <td><a href="#step"><code>step</code></a></td>
      <td><a href="/fr/docs/Web/API/validityState/stepMismatch"><code>validityState.stepMismatch</code></a></td>
      <td>Se produit lorsque la valeur ne respecte pas l'incrément imposé par l'attribut <code>step</code>. L'incrément par défaut vaut <code>1</code>, ce qui signifie que seules les valeurs entières sont valides pour le type <code>number</code> si <code>step</code> est absent. Utiliser <code>step="any"</code> empêchera de déclencher cette erreur.
      </td>
    </tr>
    <tr>
      <td><a href="#type"><code>type</code></a></td>
      <td><a href="/fr/docs/Web/API/validityState/typeMismatch"><code>validityState.typeMismatch</code></a></td>
      <td>Se produit lorsque la valeur ne correspond pas au type, par exemple si une adresse électronique ne contient pas le caractère <code>@</code> ou si une URL ne contient pas de protocole.</td>
    </tr>
  </tbody>
</table>

Si un contrôle de formulaire n'a pas d'attribut `required`, n'a aucune valeur, ou s'il a une chaîne de caractères de vide comme valeur, il n'est pas invalide. Même si les attributs précédents sont présents, exception faite de `required`, une chaîne de caractères vide ne causera pas d'erreur.

On peut définir des limites sur les valeurs acceptables et les navigateurs qui implémentent les fonctionnalités de validation effectueront un contrôle nativement en alertant la personne qu'il y a un problème lors de l'envoi du formulaire.

En plus des erreurs décrites dans le tableau qui précède, l'interface `validityState` contient les propriétés booléennes en lecture seule `badInput`, `valid`, et `customError`. Cet objet possède les propriétés suivantes&nbsp;:

- [`validityState.valueMissing`](/fr/docs/Web/API/validityState/valueMissing)
- [`validityState.typeMismatch`](/fr/docs/Web/API/validityState/typeMismatch)
- [`validityState.patternMismatch`](/fr/docs/Web/API/validityState/patternMismatch)
- [`validityState.tooLong`](/fr/docs/Web/API/validityState/tooLong)
- [`validityState.tooShort`](/fr/docs/Web/API/validityState/tooShort)
- [`validityState.rangeUnderflow`](/fr/docs/Web/API/validityState/rangeUnderflow)
- [`validityState.rangeOverflow`](/fr/docs/Web/API/validityState/rangeOverflow)
- [`validityState.stepMismatch`](/fr/docs/Web/API/validityState/stepMismatch)
- [`validityState.badInput`](/fr/docs/Web/API/validityState/badInput)
- [`validityState.valid`](/fr/docs/Web/API/validityState/valid)
- [`validityState.customError`](/fr/docs/Web/API/validityState/customError)

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

Si vous souhaitez afficher un message d'erreur spécifique lorsqu'un champ est invalide, vous devrez utiliser [les fonctionnalités relatives à la validation des contraintes](/fr/docs/Web/API/Constraint_validation#constraint_validation_interfaces) disponible sur les éléments `<input>` (entre autres). Prenons le formulaire suivant&nbsp;:

```html
<form>
  <label for="name"
    >Veuillez saisir un nom d'utilisateur (avec des lettres en minuscules ou
    majuscules) :
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
      `Veuillez saisir un nom d'utilisateur non vide !`,
    );
  } else {
    nameInput.setCustomValidity(
      `Un nom d'utilisateur ne peut contenir que des lettres en minuscules ou majuscules. Essayez à nouveau.`,
    );
  }
});
```

L'exemple ainsi construit produira le résultat suivant&nbsp;:

{{EmbedLiveSample('')}}

En résumé&nbsp;:

- On vérifie l'état de validité du champ chaque fois que sa valeur est modifiée en exécutant la méthode `checkValidity()` lors de l'évènement `input` via le gestionnaire d'évènement.
- Si la valeur est invalide, un évènement `invalid` est déclenché et la fonction indiquée sur le gestionnaire d'évènement pour `invalid` est exécutée. Au sein de cette fonction, on détermine si la valeur est invalide parce qu'elle est vide ou parce qu'elle ne correspond pas au motif imposé en distinguant le cas avec un bloc `if()` et en adaptant le message d'erreur selon le cas de figure.
- Ainsi, si la valeur du champ est invalide lorsqu'on clique sur le bouton d'envoi, un des messages spécifiques est affiché.
- Si la valeur est valide, le formulaire est envoyé sans problème. Pour cela, il faut annuler la vérification de validité spécifique en appelant `setCustomValidity()` avec une chaîne de caractères vide. C'est ce qu'on fait à chaque fois qu'un évènement `input` est déclenché. Sans ça, si une validité spécifique avait précédemment été définie, le champ serait toujours considéré comme invalide, même si la valeur courante était valide lors de l'envoi.

> **Note :** On veillera à toujours valider les contraintes côté client et côté serveur. La validation des contraintes du navigateur ne se substitue pas à la vérification côté serveur. En effet, des valeurs invalides peuvent toujours être envoyées par des navigateurs obsolètes ou par des acteurs malveillants.

> **Note :** Firefox, jusqu'à la version 66, implémentait une propriété non-standard `x-moz-errormessage` qui permettait de paramétrer de tels messages d'erreur spécifiques. Cette propriété a été retirée (voir [le bug 1513890](https://bugzilla.mozilla.org/show_bug.cgi?id=1513890)).

### Localisation

Les valeurs autorisées à la saisie pour certains types d'`<input>` dépendent de la locale. En effet, pour certaines locales 1,000.00 représente un nombre valide tandis qu'il faudrait saisir 1000,00 dans d'autres locales.

Firefox utilise les heuristiques suivantes pour déterminer la locale selon laquelle valider la saisie (au moins pour `type="number"`)&nbsp;:

- Tente d'utiliser la langue indiquée par l'attribut `lang`/`xml:lang` sur l'élément ou l'un de ses parents,
- Sinon, utilise la langue indiquée par l'en-tête HTTP `Content-Language`,
- Sinon, utilise la locale du navigateur.

### Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row"><a href="/fr/docs/Web/Guide/HTML/Content_categories">Catégories de contenu</a></th>
      <td>
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#contenu_de_flux">Contenu de flux</a>, <a href="/fr/docs/Web/Guide/HTML/Content_categories#contenu_associé_aux_formulaires">contenu associé aux formulaires&nbsp;: listé, participant à l'envoi du formulaire, réinitialisable</a>, <a href="/fr/docs/Web/Guide/HTML/Content_categories#contenu_phrasét">contenu phrasé</a>. Si l'attribut <a href="#type"><code>type</code></a> ne vaut pas <code>hidden</code>, il s'agit d'un élément étiquetable et d'un <a href="/fr/docs/Web/Guide/HTML/Content_categories#contenu_tangible">contenu tangible</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>Aucun, il s'agit d'un <a href="/fr/docs/Glossary/Empty_element">élément vide</a>.</td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>Cet élément doit avoir une balise ouvrante et pas de balise fermante.</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>Tout élément qui accepte du <a href="/fr/docs/Web/Guide/HTML/Content_categories#contenu_phrasét">contenu phrasé</a>.</td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <ul>
          <li>
            <code>type=button</code>&nbsp;: <code><a href="/fr/docs/Web/Accessibility/ARIA/Roles/button_role">button</a></code>
          </li>
          <li>
            <code>type=checkbox</code>&nbsp;: <code><a href="/fr/docs/Web/Accessibility/ARIA/Roles/checkbox_role">checkbox</a></code>
          </li>
          <li>
            <code>type=email</code>
            <ul>
              <li>Sans attribut <code>list</code>&nbsp;: <code><a href="/fr/docs/Web/Accessibility/ARIA/Roles/textbox_role">textbox</a></code></li>
              <li>Avec un attribut <code>list</code>&nbsp;: <code><a href="https://w3c.github.io/aria/#combobox">combobox</a></code></li>
            </ul>
          </li>
          <li>
            <code>type=image</code>&nbsp;: <code><a href="/fr/docs/Web/Accessibility/ARIA/Roles/button_role">button</a></code>
          </li>
          <li>
            <code>type=number</code>&nbsp;: <code><a href="https://w3c.github.io/aria/#spinbutton">spinbutton</a></code>
          </li>
          <li><code>type=radio</code>&nbsp;: <code><a href="https://w3c.github.io/aria/#radio">radio</a></code></li>
          <li><code>type=range</code>&nbsp;: <code><a href="https://w3c.github.io/aria/#slider">slider</a></code></li>
          <li>
            <code>type=reset</code>&nbsp;: <code><a href="/fr/docs/Web/Accessibility/ARIA/Roles/button_role">button</a></code>
          </li>
          <li>
            <code>type=search</code>
            <ul>
              <li>Sans attribut <code>list</code>&nbsp;: <code><a href="https://w3c.github.io/aria/#searchbox">searchbox</a></code></li>
              <li>Avec un attribut <code>list</code>&nbsp;: <code><a href="https://w3c.github.io/aria/#combobox">combobox</a></code></li>
            </ul>
          </li>
          <li>
            <code>type=submit</code>&nbsp;: <code><a href="/fr/docs/Web/Accessibility/ARIA/Roles/button_role">button</a></code>
          </li>
          <li>
            <code>type=tel</code>
            <ul>
              <li>Sans attribut <code>list</code>&nbsp;: <code><a href="/fr/docs/Web/Accessibility/ARIA/Roles/textbox_role">textbox</a></code></li>
              <li>Avec un attribut <code>list</code>&nbsp;: <code><a href="https://w3c.github.io/aria/#combobox">combobox</a></code></li>
            </ul>
          </li>
          <li>
            <code>type=text</code>
            <ul>
              <li>Sans attribut <code>list</code>&nbsp;: <code><a href="/fr/docs/Web/Accessibility/ARIA/Roles/textbox_role">textbox</a></code></li>
              <li>Avec un attribut <code>list</code>&nbsp;: <code><a href="https://w3c.github.io/aria/#combobox">combobox</a></code></li>
            </ul>
          </li>
          <li>
            <code>type=url</code>
            <ul>
              <li>Sans attribut <code>list</code>&nbsp;: <code><a href="/fr/docs/Web/Accessibility/ARIA/Roles/textbox_role">textbox</a></code></li>
              <li>Avec un attribut <code>list</code>&nbsp;: <code><a href="https://w3c.github.io/aria/#combobox">combobox</a></code></li>
            </ul>
          </li>
          <li>
            <code>type=color|date|datetime-local|file|hidden|month|password|time|week</code>&nbsp;: <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">pas de rôle correspondant</a>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>
        <ul>
          <li>
            <code>type=button</code>&nbsp;: <a href="https://w3c.github.io/aria/#link"><code>link</code></a>, <a href="https://w3c.github.io/aria/#menuitem"><code>menuitem</code></a>, <a href="https://w3c.github.io/aria/#menuitemcheckbox"><code>menuitemcheckbox</code></a>, <a href="https://w3c.github.io/aria/#menuitemradio"><code>menuitemradio</code></a>, <a href="https://w3c.github.io/aria/#option"><code>option</code></a>, <a href="https://w3c.github.io/aria/#radio"><code>radio</code></a>, <a href="https://w3c.github.io/aria/#switch"><code>switch</code></a>, <a href="https://w3c.github.io/aria/#tab"><code>tab</code></a>
          </li>
          <li>
            <code>type=checkbox</code>&nbsp;: <a href="https://w3c.github.io/aria/#button"><code>button</code></a> lorsqu'utilisé avec <code>aria-pressed</code>, <a href="https://w3c.github.io/aria/#menuitemcheckbox"><code>menuitemcheckbox</code></a>, <a href="https://w3c.github.io/aria/#option"><code>option</code></a>, <a href="https://w3c.github.io/aria/#option"><code>option</code></a>
          </li>
          <li>
            <code>type=image</code>: <a href="https://w3c.github.io/aria/#link"><code>link</code></a>, <a href="https://w3c.github.io/aria/#menuitem"><code>menuitem</code></a>, <a href="https://w3c.github.io/aria/#menuitemcheckbox"><code>menuitemcheckbox</code></a>, <a href="https://w3c.github.io/aria/#menuitemradio"><code>menuitemradio</code></a>, <a href="https://w3c.github.io/aria/#radio"><code>radio</code></a>, <a href="https://w3c.github.io/aria/#option"><code>option</code></a>
          </li>
          <li>
            <code>type=radio</code>: <a href="https://w3c.github.io/aria/#menuitemradio"><code>menuitemradio</code></a>
          </li>
          <li>
            <code>type=text</code> sans attribut <code>list</code>&nbsp;: <a href="https://w3c.github.io/aria/#combobox"><code>combobox</code></a>, <a href="https://w3c.github.io/aria/#searchbox"><code>searchbox</code></a>, <a href="https://w3c.github.io/aria/#spinbutton"><code>spinbutton</code></a>
          </li>
          <li>
            <code>type=color|date|datetime-local|email|file|hidden|month|number|password|range|reset|search|submit|tel|url|week</code> ou <code>text</code> avec un attribut <code>list</code>&nbsp;: aucun rôle autorisé
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Interface du DOM correspondante</th>
      <td><a href="/fr/docs/Web/API/HTMLInputElement"><code>HTMLInputElement</code></a></td>
    </tr>
  </tbody>
</table>

## Accessibilité

### Libellés

Lorsqu'on ajoute des champs de formulaire sur une page, le minimum, en termes d'accessibilité, consiste à ajouter des libellés correspondants avec des éléments `<label>`. Cela permet aux outils d'assistance d'indiquer le rôle du champ. De plus, cliquer ou toucher le libellé permettra de passer le focus au contrôle de formulaire correspondant. Cela améliore l'accessibilité et l'utilisabilité pour les personnes voyantes, en augmentant la zone d'interaction possible pour activer le contrôle du formulaire au clic ou au toucher. C'est notamment utile (voire nécessaire) pour les boutons radios et les cases à cocher dont la surface est faible. Pour plus d'informations sur les libellés en général, voir [la section sur les libellés](#libellés).

Dans l'exemple qui suit, on illustre comment associer un élément `<label>` avec un élément `<input>`. Le lien se fait avec la valeur l'attribut `id` de l'élément `<input>` qui est réutilisée comme valeur pour l'attribut `for` de l'élément `<label>`.

```html
<label for="ptipois">Est-ce que vous aimez les petits pois ?</label>
<input type="checkbox" name="petitspois" id="ptipois" />
```

### Dimensionnement

Les éléments interactifs d'une page web, tels que les champs de formulaire, doivent fournir une zone d'interaction suffisamment large pour qu'il soit facile de les activer. Cela aide les personnes avec des handicaps moteurs et aussi les personnes qui utilisent des dispositifs de pointage peu précis comme les doigts ou un stylet. Une surface interactive minimale de 44×44 [pixels CSS](https://www.w3.org/TR/WCAG21/#dfn-css-pixels) est recommandée.

- [Comprendre le critère de réussite 2.5.5&nbsp;: taille de la cible, Guide du W3C pour la compréhension de WCAG 2.1 (en anglais)](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Taille de la cible et 2.5.5, billet de blog d'Adrian Roselli (en anglais)](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Test rapide&nbsp;: cibles suffisamment grande, le projet A11Y (en anglais)](https://www.a11yproject.com/posts/large-touch-targets/)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Validation des contraintes dans un formulaire](/fr/docs/Web/Guide/HTML/Constraint_validation)
- [Votre premier formulaire HTML](/fr/docs/Learn/Forms/Your_first_form)
- [Comment structurer un formulaire HTML](/fr/docs/Learn/Forms/How_to_structure_a_web_form)
- [Les contrôles de formulaire natifs](/fr/docs/Learn/Forms/Basic_native_form_controls)
- [Envoyer des données de formulaire](/fr/docs/Learn/Forms/Sending_and_retrieving_form_data)
- [Validation des données d'un formulaire](/fr/docs/Learn/Forms/Form_validation)
- [Comment construire des contrôles sur mesure](/fr/docs/Learn/Forms/How_to_build_custom_form_controls)
- [Les formulaires HTML dans les navigateurs historiques](/fr/docs/Learn/Forms/HTML_forms_in_legacy_browsers)
- [Mise en forme d'un formulaire HTML](/fr/docs/Learn/Forms/Styling_web_forms)
- [Mise en forme avancée d'un formulaire HTML](/fr/docs/Learn/Forms/Advanced_form_styling)
- [Tableau de compatibilité des propriétés CSS](/fr/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
