---
title: "<input> : l'élément de saisie dans un formulaire"
slug: Web/HTML/Element/input
translation_of: Web/HTML/Element/input
browser-compat: html.elements.input
---
{{HTMLRef}}

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
      <td><a href="/fr/docs/Web/HTML/Element/Input/button"><code>button</code></a></td>
      <td>Un bouton sans comportement défini qui affiche la valeur de l'attribut <a href="#value"><code>value</code></a> qui est vide par défaut.
      </td>
      <td id="examplebutton">
        <pre class="brush: html hidden">
&#x3C;input type="button" name="button" value="Button" /></pre>
        {{EmbedLiveSample("examplebutton",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/HTML/Element/Input/checkbox"><code>checkbox</code></a></td>
      <td>Une case à cocher qui permet de sélectionner/déselectionner une valeur.</td>
      <td id="examplecheckbox">
        <pre class="brush: html hidden">
&#x3C;input type="checkbox" name="checkbox"/></pre>
        {{EmbedLiveSample("examplecheckbox",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/HTML/Element/Input/color"><code>color</code></a></td>
      <td>Un contrôle qui permet de définir une couleur, cela ouvre un sélecteur de couleur dans les navigateurs qui le prennent en charge.</td>
      <td id="examplecolor">
        <pre class="brush: html hidden">
&#x3C;input type="color" name="color"/></pre>
        {{EmbedLiveSample("examplecolor",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/HTML/Element/Input/date"><code>date</code></a></td>
      <td>Un contrôle qui permet de saisir une date (composé d'un jour,  d'un mois et d'une année mais sans heure), cela ouvre un sélecteur de date ou des roues numériques pour la sélection du jour/mois/année dans les navigateurs qui le prennent en charge.
      </td>
      <td id="exampledate">
        <pre class="brush: html hidden">
&#x3C;input type="date" name="date"/></pre>
        {{EmbedLiveSample("exampledate",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/HTML/Element/Input/datetime-local"><code>datetime-local</code></a>
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
      <td><a href="/fr/docs/Web/HTML/Element/Input/email"><code>email</code></a></td>
      <td>
        Un champ qui permet de saisir une adresse éléctronique, il ressemble à un champ de type <code>text</code>, mais possède des fonctionnalités de validation et l'adaptation du clavier pour les navigateurs et appareils qui ont des claviers dynamiques.
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
      <td><a href="/fr/docs/Web/HTML/Element/Input/hidden"><code>hidden</code></a></td>
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
      <td><a href="/fr/docs/Web/HTML/Element/Input/image"><code>image</code></a></td>
      <td>Un bouton graphique d'envoi du formulaire. L'attribut <a href="#src"><code>src</code></a> doit être défini avec la source de l'image et l'attribut <a href="#alt"><code>alt</code></a> doit être défini avec le texte alternatif si l'image est absente.</td>
      <td id="exampleimage">
        <pre class="brush: html hidden">
&#x3C;input type="image" name="image" src="" alt="image input"/></pre>
        {{EmbedLiveSample("exampleimage",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/HTML/Element/Input/month"><code>month</code></a></td>
      <td>Un contrôle qui permet de saisir un mois et une année (sans fuseau horaire).</td>
      <td id="examplemonth">
        <pre class="brush: html hidden">
&#x3C;input type="month" name="month"/></pre>
        {{EmbedLiveSample("examplemonth",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/HTML/Element/Input/number"><code>number</code></a></td>
      <td>Un contrôle qui permet de saisir un nombre, affichant des curseurs pour augmenter/réduire la valeur et disposant d'une validation par défaut lorsqu'elle est prise en charge. Un clavier numérique est affiché pour certains appareils avec des claviers dynamiques.</td>
      <td id="examplenumber">
        <pre class="brush: html hidden">
&#x3C;input type="number" name="number"/></pre>
        {{EmbedLiveSample("examplenumber",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/HTML/Element/Input/password"><code>password</code></a></td>
      <td>Un champ texte sur une seule ligne dont la valeur est masquée et qui affichera une alerte si le site n'est pas sécurisé.</td>
      <td id="examplepassword">
        <pre class="brush: html hidden">
&#x3C;input type="password" name="password"/></pre>
        {{EmbedLiveSample("examplepassword",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/HTML/Element/Input/radio"><code>radio</code></a></td>
      <td>Un bouton radio qui permet de sélectionner une seule valeur parmi un groupe de différentes valeurs portant le même attribut <a href="#name"><code>name</code></a>.</td>
      <td id="exampleradio">
        <pre class="brush: html hidden">
&#x3C;input type="radio" name="radio"/></pre
        >
        {{EmbedLiveSample("exampleradio",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/HTML/Element/Input/range"><code>range</code></a></td>
      <td>Un contrôle qui permet de saisir un nombre dont la valeur exacte n'est pas importante. Le contrôle qui s'affiche est une jauge horizontale avec la valeur par défaut placée au milieu. On l'utilise avecc les attributs <a href="#min"><code>min</code></a> et <a href="#max"><code>max</code></a> pour définir un intervalle des valeurs acceptables.</td>
      <td id="examplerange">
        <pre class="brush: html hidden">
&#x3C;input type="range" name="range" min="0" max="25"/></pre>
        {{EmbedLiveSample("examplerange",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/HTML/Element/Input/reset"><code>reset</code></a></td>
      <td>Un bouton qui réinitialise le contenu du formulaire avec les valeurs par défaut. Ce type d'élément n'est pas recommandé.</td>
      <td id="examplereset">
        <pre class="brush: html hidden">
&#x3C;input type="reset" name="reset"/></pre
        >
        {{EmbedLiveSample("examplereset",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/HTML/Element/Input/search"><code>search</code></a></td>
      <td>Un champ texte sur une ligne pour des termes de recherche. Les sauts de ligne sont automatiquement retirés. Le contrôle peut disposer d'une icône permettant de réinitialiser le champ. Une icône de recherche est affichée à la place de la touche <kdb>Entrée</kbd>/ pour certains appareils avec des claviers dynamiques.</td>
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
      <td><a href="/fr/docs/Web/HTML/Element/Input/tel"><code>tel</code></a></td>
      <td>Un contrôle pour saisir un numéro de téléphone, qui affiche un clavier téléphonique pour certains appareils avec des claviers dynamiques.
      </td>
      <td id="exampletel">
        <pre class="brush: html hidden">
&#x3C;input type="tel" name="tel"/></pre>
        {{EmbedLiveSample("exampletel",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/HTML/Element/Input/text"><code>text</code></a></td>
      <td>La valeur par défaut de <code>type</code>. Un champ texte sur une seule ligne. Les sauts de ligne sont automatiquement retirés.</td>
      <td id="exampletext">
        <pre class="brush: html hidden">
&#x3C;input type="text" name="text"/></pre
        >
        {{EmbedLiveSample("exampletext",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/HTML/Element/Input/time"><code>time</code></a></td>
      <td>Un contrôle pour saisir une valeur temporelle sans fuseau horaire.</td>
      <td id="exampletime">
        <pre class="brush: html hidden">
&#x3C;input type="time" name="time"/></pre>
        {{EmbedLiveSample("exampletime",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/HTML/Element/Input/url"><code>url</code></a></td>
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
      <td><a href="/fr/docs/Web/HTML/Element/Input/week"><code>week</code></a></td>
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
      <td><a href="/fr/docs/Web/HTML/Element/Input/datetime"><code>datetime</code></a></td>
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

| Attribut                            | Type(s)                                    | Description                                                                                                                      |
| ----------------------------------- | ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------|
| [`accept`](#accept)                 | `file`                                     | Une indication quant au type de fichier attendu pour l'<i lang="en">upload</i>                                                   |
| [`alt`](#alt)                       | `image`                                    | Un texte alternatif à l'image, nécessaire pour une accessibilité correcte                                                        |
| [`autocomplete`](#autocomplete)     | tous                                       | Une indication pour le remplissage automatique du formulaire                                                                     |
| [`capture`](#capture)               | `file`                                     | La méthode de capture du média pour l'upload du fichier                                                                          |
| [`checked`](#checked)               | `radio`, `checkbox`                        | Indique si l'option est sélectionnée ou si la case est cochée                                                                    |
| [`dirname`](#dirname)               | `text`, `search`                           | Le nom du champ de formulaire à utiliser pour envoyer le sens d'écriture de l'élément à l'envoi du formulaire                    |
| [`disabled`](#disabled)             | tous                                       | Indique si le contrôle est désactivé                                                                                             |
| [`form`](#form)                     | tous                                       | Associe un contrôle à un élément de formulaire                                                                                   |
| [`formaction`](#formaction)         | `image`, `submit`                          | L'URL à utiliser pour l'envoi du formulaire                                                                                      |
| [`formenctype`](#formenctype)       | `image`, `submit`                          | L'encodage des données à utiliser pour l'envoi du formulaire                                                                     |
| [`formmethod`](#formmethod)         | `image`, `submit`                          | La méthode HTTP à utiliser pour envoyer le formulaire                                                                            |
| [`formnovalidate`](#formnovalidate) | `image`, `submit`                          | Surcharge la validation du contrôle dictée par le formulaire pour l'envoi de ce dernier                                          |
| [`formtarget`](#formtarget)         | `image`, `submit`                          | Le contexte de navigation à utiliser pour l'envoi du formulaire                                                                  |
| [`height`](#height)                 | `image`                                    | Analogue à l'attribut `height` attribute de l'élément [`<img>`](/fr/docs/Web/HTML/Element/img), la hauteur de l'image            |
| [`list`](#list)                     | presque tous                               | La valeur de l'attribut `id` de l'élément [`<datalist>`](/fr/docs/Web/Element/datalist) fournissant les options d'autocomplétion |
| [`max`](#max)                       | types numériques                           | La valeur maximale                                                                                                               |
| [`maxlength`](#maxlength)           | `password`, `search`, `tel`, `text`, `url` | La longueur maximale (en nombre de caractères) de l'attribut `value`                                                             |
| [`min`](#min)                       | types numériques                           | La valeur minimale                                                                                                               |
| [`minlength`](#minlength)           | `password`, `search`, `tel`, `text`, `url` | La longueur minimale (en nombre de caractères) de l'attribut `value`                                                             |
| [`multiple`](#multiple)             | `email`, `file`                            | Un booléen indiquant si plusieurs valeurs sont acceptées                                                                         |
| [`name`](#name)                     | tous                                       | Le nom associé au contrôle et qui est envoyé avec le formulaire associé à la valeur sous la forme d'une paire nom/valeur         |
| [`pattern`](#pattern)               | `password`, `text`, `tel`                  | Un motif que la valeur doit respecter afin d'être valide                                                                         |
| [`placeholder`](#placeholder)       | `password`, `search`, `tel`, `text`, `url` | Un texte qui apparaît dans le contrôle lorsqu'aucune valeur n'y est écrite                                                       |
| [`readonly`](#readonly)             | presque tous                               | Un booléen indiquant que la valeur n'est pas éditable                                                                            |
| [`required`](#required)             | presque tous                               | Un booléen indiquant que la valeur est requise ou que le contrôle doit être coché avant de pouvoir envoyer le formulaire         |
| [`size`](#size)                     | `email`, `password`, `tel`, `text`, `url`  | La taille du contrôle                                                                                                            |
| [`src`](#src)                       | `image`                                    | Analogue à l'attribut `src` de l'élément [`<img>`](/fr/docs/Web/HTML/Element/img), indique l'emplacement de l'image              |
| [`step`](#step)                     | types numériques                           | Un incrément pour les valeurs valides                                                                                            |
| [`type`](#type)                     | tous                                       | Le type de contrôle de formulaire                                                                                                |
| [`value`](#value)                   | tous                                       | La valeur initiale du contrôle                                                                                                   |
| [`width`](#width)                   | `image`                                    | Analogue à l'attribut `width` de l'élément [`<img>`](/fr/docs/Web/HTML/Element/img), la largeur de l'image                       |

Certains attributs non-standard supplémentaires sont listés après les descriptions des attributs standard.

### Attributs individuels

- `accept`
  - : Uniquement valide pour le type `file`, cet attribut définit les types de fichiers qui peuvent être sélectionnés. Voir la page détaillée sur [`<input type="file">`](/fr/docs/Web/HTML/Element/Input/file).
- `alt`
  - : Uniquement valide pour le type `image`, cet attribut fournit un texte alternatif à l'image qui est affiché lorsque l'attribut [`src`](#src) de l'image est absent ou que le chargement de l'image a échoué. Voir la page détaillée sur [`<input type="image">`](/fr/docs/Web/HTML/Element/Input/image).
- [`autocomplete`](/fr/docs/Web/HTML/Attributes/autocomplete)
  - : **Cet attribut n'est pas booléen !** Il prend comme valeur une chaîne de caractères dont les valeurs sont séparées par des espaces qui décrivent, le cas échéant, le type de fonctionnalité à fournir pour l'autocomplétion du champ. Généralement, l'implémentation de l'autocomplétion repose sur les valeurs précédemment saisies dans le même champ, mais le navigateur peut implémenter une forme d'autocomplétion plus avancée (par exemple intégrer la liste des contacts connue de l'appareil pour autocompléter les champs `email`). Voir [la page sur cet attribut](/fr/docs/Web/HTML/Attributes/autocomplete#valeurs) pour les valeurs autorisées. Cet attribut est valide pour les types de champ `hidden`, `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, `color`, et `password`. Il n'a pas d'effet pour les types de champs qui ne renvoient pas de données numériques ou text et est donc valide pour tous les types de champs à l'exception de `checkbox`, `radio`, `file`, ou des types de boutonVoir [la page de l'attribut HTML `autocomplete`](/fr/docs/Web/HTML/Attributes/autocomplete) pour plus d'informations, y compris sur la sécurité des mots de passe et sur la façon dont `autocomplete` s'applique légèrement différemment pour les champs de type `hidden`.
- `autofocus`
  - : Un attribut booléen qui, s'il est présent, indique que le contrôle devrait automatiquement recevoir le focus lorsque le chargement de la page est terminé (ou lorsque l'élément [`<dialog>`](/fr/docs/Web/HTML/Element/dialog) qui contient ce contrôle a été affiché).
    > **Note :** Un élément avec l'attribut `autofocus` pourra recevoir le focus avant le déclenchement de l'évènement [`DOMContentLoaded`](/fr/docs/Web/API/Window/DOMContentLoaded_event).

    Il ne peut pas y avoir plus d'un élément du document avec l'attribut `autofocus`. Si l'attribut est placé sur plus d'un élément, c'est le premier qui reçoit le focus.

    L'attribut `autofocus` ne peut pas être utilisé sur les champs de type `hidden`, car ces derniers sont masqués et ne peuvent pas recevoir le focus.

    > **Attention :** Affecter le focus de façon automatique peut être source de confusion pour les personnes qui utilisent des lecteurs d'écran ou qui ont des difficultés cognitives. En effet, avec l'affectation de `autofocus`, les lecteurs d'écran «&nbsp;téléportent&nbsp;» la personne jusqu'au contrôle, sans avertissement préalable.

    On fera particulièrement attention à l'accessibilité en appliquant l'attribut `autofocus`. Le focus automatique peut entraîner le défilement de la page au chargement et faire apparaître le clavier logiciel sur certains appareils tactiles. Bien qu'un lecteur d'écran puisse annoncer le libellé du contrôle qui reçoit le focus, il n'annoncera rien avant le libellé. De même, une personne sans déficience visuelle sur un petit écran manquera certainement le contexte créé par le contenu qui précède.
- `capture`
  - : Cet attribut, introduit avec la spécification HTML <i lang="en">Media Capture</i>, est uniquement valide pour le type `file`. Il définit quel appareil (micro, caméra, appareil photo) qui devrait être utilisé pour capturer un nouveau fichier à uploader. Voir la page détaillée sur [`<input type="file">`](/fr/docs/Web/HTML/Element/Input/file).
- `checked`
  - : Cet attribut booléen est valide pour les types `radio` et `checkbox`. Lorsqu'il est présent sur un contrôle de type `radio`, il indique que ce bouton radio sera celui sélectionné parmi le groupe de boutons radio qui partagent le même nom. Lorsqu'il est présent sur un contrôle de type `checkbox`, il indique que la case est cochée par défaut au chargement de la page. Attention, il _n'indique pas_ que la case est actuellement cochée, si l'état de la case à cocher change, l'attribut ne reflète pas ce changement (seul l'attribut IDL [`HTMLInputElement.checked`](/fr/docs/Web/API/HTMLInputElement) est mis à jour).

    > **Note :** À la différence des autres contrôles de saisie, la valeur d'une case à cocher ou d'un bouton radio est uniquement incluse dans les données envoyées si ils sont sélectionnés. Si c'est le cas, le nom et la valeur des contrôles sélectionnés sont envoyés.
    >
    > Ainsi, si une case à cocher dont l'attribut `name` vaut `fruit` et dont l'attribut `value` vaut `cerise`, si la case est cochée, les données envoyées avec le formulaire contiendront `fruit=cerise`. Si la case à cocher n'est pas active, elle ne fera pas partie des données envoyée. Pour les cases à cocher et les boutons radio, la valeur par défaut de l'attribut `value` est `on`.
- `dirname`
  - : Cet attribut, uniquement valide pour les types `text` et `search`, permet d'envoyer également le sens d'écriture de la valeur dans le formulaire. Lorsqu'il est présent, le contrôle du formulaire enverra deux paires nom/valeur&nbsp;: la première composée de [`name`](#name) et [`value`](#value), et la seconde composée de la valeur de `dirname` comme nom et de `ltr` ou `rtl` comme valeur, indiquée par le navigateur.

    ```html
    <form action="page.html" method="post">
      <label>Fruit : <input type="text" name="fruit" dirname="fruit.dir" value="cerise"></label>
      <input type="submit"/>
    </form>
    <!-- page.html?fruit=cerise&fruit.dir=ltr -->
    ```

    Lorque le formulaire précédent est envoyé, on aura l'envoi de deux paires de clé/valeur `name`/`value` d'une part avec `fruit=cerise` et `dirname`/sens d'écriture d'autre part avec `fruit.dir=ltr`.
- `disabled`
  - : Un attribut booléen qui, lorsqu'il est présent, indique qu'il n'est pas possible d'interagir avec le champ. Les champs désactivés sont généralement affichés avec une couleur plus sombre ou une autre forme d'indication pour signifier que le champ n'est pas utilisable.

    Plus précisément, les champs désactivés ne reçoivent pas les évènements [`click`](/fr/docs/Web/API/Element/click_event) et ne sont pas envoyés avec le formulaire.

    > **Note :** Bien que cela ne soit pas nécessaire selon la spécification, par défaut, Firefox [fera persister l'état désactivé obtenu dynamiquement](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) pour un champ `<input>` même après des rechargements de la page. C'est l'attribut [`autocomplete`](#autocomplete) qui contrôle cette fonctionnalité.
- `form`
  - : Une chaîne de caractères qui indique l'élément [`<form>`](/fr/docs/Web/HTML/Element/form) auquel le contrôle est associé (on parle de son **formulaire propriétaire**). La valeur de la chaîne de caractères, si elle est présente, doit correspondre à la valeur d'un identifiant (l'attribut [`id`](#id)) d'un élément `<form>` du même document. Si cet attribut n'est pas défini, l'élément `<input>` est associé au formulaire qui le contient le plus proche, s'il existe.

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
  - : Uniquement valide pour le type `image`, cet attribut indique la hauteur de l'image à afficher sur un outon d'envoi graphique. Voir la page détaillée sur [`<input type="image">`](/fr/docs/Web/HTML/Element/Input/image).
- `id`
  - : Un attribut universel, valide pour tous les éléments (y compris `<input>` quel que soit le type), qui définit un identifiant unique au sein du document Son but est de pouvoir cibler un élément précis (pour la mise en forme ou pour créer un lien vers cet élément par exemple). C'est la valeur de cet attribut qui sera utilisée comme valeur de l'attribut `for` d'un élément [`<label>`](/fr/docs/Web/HTML/Element/label) pour relier le libellé au champ correspondant. Voir [`<label>`](/fr/docs/Web/HTML/Element/label).
- `inputmode`
  - : Un attribut universel, valide pour tous les éléments, qui fournit une indication au navigateur quant au type de clavier virtuel à utiliser pour l'édition de l'élément ou de son contenu. Les valeurs possibles sont `none`, `text`, `tel`, `url`, `email`, `numeric`, `decimal`, et `search`.
- `list`
  - : La valeur fournie à l'attribut `list` doit être l'identifiant (l'attribut [`id`](/fr/docs/Web/HTML/Global_attributes/id)) d'un élément [`<datalist>`](/fr/docs/Web/HTML/Element/datalist) situé dans le même document. L'élément `<datalist>` fournit alors une liste de valeurs prédéfinies qui peuvent être suggérées pour la saisie dans le champ. Toute valeur de cette liste qui n'est pas compatible avec l'attribut [`type`](#type) ne sera pas incluse dans les suggestion. Les valeurs ainsi fournies sont des suggestions et pas des contraintes, une personne pourra tout à fait choisir parmi cette liste ou fournir une valeur différente.

    Cet attribut est valide pour les champs de type `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, et `color`.

    Selon la spécification, l'attribut `list` n'est pas pris en charge pour les types `hidden`, `password`, `checkbox`, `radio`, `file`, et les types de bouton.

    Selon le navigateur, on pourra avoir une palette de couleurs spécifiques en suggestion, des marques présentes sur la piste d'un curseur, voire un contrôle s'ouvrant comme un élément [`<select>`](/fr/docs/Web/HTML/Element/select) et qui permet de saisir des valeurs en dehors des suggestions. Voir [le tableau de compatibilité des navigateurs](/fr/docs/Web/HTML/Element/datalist#compatibilité_des_navigateurs) pour les autres types de champ.

    Voir également [la page de référence pour l'élément `<datalist>`](/fr/docs/Web/HTML/Element/datalist).
- `max`
  - : Cet attribut est valide pour les types `date`, `month`, `week`, `time`, `datetime-local`, `number`, et `range`, il définit la plus grande valeur possible de l'intervalle des valeurs autorisées. Si la valeur saisie dans l'élément dépasse la valeur de cet attribut, l'élément échouera à [la validation des contraintes](/fr/docs/Web/Guide/HTML/Constraint_validation). Si la valeur de l'attribut `max` n'est pas un nombre, l'élément n'a pas de valeur maximale.

    Il existe un cas particulier pour les types de données périodiques (comme les dates ou les heures), où la valeur de `max` peut être inférieure à celle de `min`, pour avoir par exemple un intervalle de temps entre 10 heures du soir et 4 heures du matin.
- `maxlength`
  - : Cet attribut est valide pour les types `text`, `search`, `url`, `tel`, `email`, et `password`, il définit le nombre maximal de caractères (exprimé en nombre de codets UTF-16) qu'il est possible de saisir dans le champ. La valeur de cet attribut doit être un entier positif. Si aucune valeur de `maxlength` n'est indiquée ou qu'une valeur invalide est fournie, le champ n'a pas de longueur maximale. La valeur de cet attribut doit être supérieure ou égale à celle de `minlength`.

    Le champ échouera à [la validation des contraintes](/fr/docs/Web/Guide/HTML/Constraint_validation) si longueur du texte saisi est supérieure à `maxlength` comme nombre de codets UTF-16. Par défaut, les navigateurs empêchent de saisir plus de caractères que ce qui est permis par l'attribut `maxlength`. Voir [la validation côté client](#la_validation_côté_client) pour plus d'information.
- `min`
  - : Cet attribut est valide pour les types `date`, `month`, `week`, `time`, `datetime-local`, `number`, et `range`, il définit la valeur la plus faible de l'intervalle des valeurs autorisées. Si la valeur saisie dans l'élément est inférieure à la valeur de cet attribut, l'élément échouera à [la validation des contraintes](/fr/docs/Web/Guide/HTML/Constraint_validation). Si la valeur de l'attribut `min` n'est pas un nombre, l'élément n'a pas de valeur minimale.

    Cette valeur doit être inférieure ou égale à la valeur fournie par l'attribut `max`. Si l'attribut `min` est présent mais sans valeur ou avec une valeur invalide, aucune contrainte de minimum n'est appliquée. Si l'attribut `min` est valide et que la valeur saisie dans le contrôle est inférieure à celle de cet attribut, la validation des contraintes empêchera l'envoi du formulaire. Voir [la validation côté client](#la_validation_côté_client) pour plus d'information.

    Il existe un cas particulier pour les types de données périodiques (comme les dates ou les heures), où la valeur de `max` peut être inférieure à celle de `min`, pour avoir par exemple un intervalle de temps entre 10 heures du soir et 4 heures du matin.
- `minlength`
  - : Cet attribut est valide pour les types `text`, `search`, `url`, `tel`, `email`, et `password`, il définit le nombre minimal de caractères (exprimé en nombre de codets UTF-16) qu'il est possible de saisir dans le champ. La valeur de cet attribut doit être un entier positif inférieur ou égal à celle de `maxlength`. Si cet attribut est absent ou qu'une valeur invalide est indiquée, le champ n'aura pas de longueur minimale.

    Le champ échouera à [la validation des contraintes](/fr/docs/Web/Guide/HTML/Constraint_validation) si longueur du texte saisi est inférieure à `minlength` comme nombre de codets UTF-16. Voir [la validation côté client](#la_validation_côté_client) pour plus d'information.
- `multiple`
  - : Un attribut booléen qui, lorsqu'il est présent, permet de saisir plusieurs adresses électroniques séparées par des virgules ou de sélectionne plusieurs fichiers si le contrôle est de type `file`. Voir les page détaillées sur [`<input type="file">`](/fr/docs/Web/HTML/Element/Input/file) et [`<input type="email">`](/fr/docs/Web/HTML/Element/Input/email).
- `name`
  - : Une chaîne de caractères qui fourni le nom associé au contrôle. Le nom est envoyé avec la valeur du contrôle lors de l'envoi du formulaire.

    Cet attribut n'est pas strictement obligatoire mais devrait être utilisé dans la grande majorité des cas. Si un champ n'a pas d'attribut `name` ou que celui-ci est vide, la valeur du champ n'est pas envoyée avec le formulaire (à l'instar des contrôles désactivés, des boutons radio ou cases décochés, et des boutons de réinitialisation).

    Il existe deux cas spéciaux&nbsp;:

    1. `_charset_`&nbsp;: Si cette valeur est utilisée comme nom pour un élément `<input>` de type [`hidden`]((/fr/docs/Web/HTML/Element/Input/hidden), la valeur du champ est automatiquement renseignée par [l'agent utilisateur](/fr/docs/Glossary/User_agent) et porte l'encodage de caractères utilisé pour l'envoi du formulaire.
    2. `isindex`&nbsp;: Pour des raisons historiques, le nom [`isindex`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name) n'est pas autorisé.

    L'attribut `name` possède un comportement particulier pour les boutons radio.

    En effet, seul un bouton radio, parmi le groupe de boutons qui portent le même nom, peut être sélectionné à un moment donné. Sélectionner un des boutons radio du groupe déclenchera automatiquement la désélection de tout bouton du groupe précédemment sélectionné. C'est la valeur du bouton radio sélectionné qui est envoyé avec le nom lors de l'envoi du formulaire.

    Lors de la navigation au clavier avec les tabulations, si un bouton est sélectionné, c'est celui-ci qui recevra le focus. Même si les boutons ne sont pas regroupées selon la source HTML, si un bouton du groupe est sélectionné, naviguer au clavier jusqu'à ce groupe passera tous les boutons non sélectionnés jusqu'au bouton sélectionné. Si aucun bouton du groupe n'est sélectionné, le groupe reçoit le focus lorsque le premier bouton du groupe est atteint au clavier.

    Une fois le focus obtenu sur le groupe, on pourra utiliser les flèches du clavier pour naviguer entre les boutons radio du même groupe (c'est-à-dire partageant le même nom/`name`, et pas nécessairement groupés au sein de la source HTML).

    Lorsqu'un élément `<input>` possède un attribut `name`, ce nom devient une propriété de l'objet [`HTMLFormElement.elements`](/fr/docs/Web/API/HTMLFormElement/elements) associé au formulaire propriétaire. Ainsi, si on a un champ dont le nom est `invite` et un autre dont le nom est `taille-chat`, on pourra manipuler les données du formulaire en JavaScript comme suit&nbsp;:

    ```js
    let form = document.querySelector("form");

    let nomInvite = form.elements.invite;
    let tailleChat = form.elements["taille-chat"];
    ```

    À l'exécution de ce code, `nomInvite` correspondra à l'objet [`HTMLInputElement`](/fr/docs/Web/API/HTMLInputElement) associé au champ `invite`, et de même l'objet `tailleChat` correspondra à l'objet du DOM associé au champ avec le nom `taille-chat`.

    > **Attention :** On évitera de de donner aux éléments de formulaire un nom qui correspond à une propriété native du DOM. Cela surchargerait la propriété ou la méthode native pour pointer vers le champ correspondant.
- `pattern`
  - : Cet attribut est une expression rationnelle que la valeur du champ doit respecter afin de [valider les contraintes](/fr/docs/Web/Guide/HTML/Constraint_validation). Cette valeur doit être une expression rationnelle JavaScript valide (voir [`RegExp`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp)) telle que documentée dans [le guide sur les expressions rationnelles](/fr/docs/Web/JavaScript/Guide/Regular_Expressions). Le marqueur `'u'` est implicitement appliqué à la compilation de l'expression et le motif est donc traité comme une séquences de codets Unicode et non ASCII. Il ne faut pas encadrer le motif de barres obliques.

    Si l'attribut `pattern` est présent mais sans valeur ou que celle-ci est valide, aucune expression rationnelle n'est appliquée et l'attribut est ignoré. Si la valeur de `pattern` est valide et que la valeur du champ ne respecte pas le motif, le champ échouera à [la validation des contraintes](/fr/docs/Web/Guide/HTML/Constraint_validation) et empêchera l'envoi du formulaire.

    > **Note :** En utilisant l'attribut `pattern`, il faut également informer l'utilisatrice ou l'utilisateur quant au format attendu, en ajoutant un texte explicatif à proximité. On peut aussi inclure un attribut [`title`](#title) pour expliquer les contraintes à respecter&nbsp;: la plupart des navigateurs afficheront le titre sous la forme d'une bulle d'information. Attention, une explication visible est nécessaire pour une accessibilité correcte, la bulle d'information fournie par `title` n'est qu'une amélioration secondaire.

    Voir [la validation côté client](#la_validation_côté_client) pour plus d'information.
- `placeholder`
  - : Cet attribut est une chaîne de caractères qui fournit une brève indication quant au type d'information attendu dans le champ. Sa valeur devrait être un mot ou une courte phrase qui indique le type de données attendu plutôt qu'une explication ou une consigne. Le texte de cet attribut _ne doit pas_ inclure de retour chariot ou de saut de ligne. Ainsi, si un champ est destiné à la saisie d'un prénom et que le libellé est «&nbsp;Prénom&nbsp;», une valeur appropriée pour cet attribut pourra être `"ex. Mustafa"`.

    > **Note :** Sur le plan sémantique, l'attribut `placeholder` n'est pas aussi utile que d'autres méthodes pour expliquer le formulaire. Il peut aussi causer certains problèmes inattendus avec le contenu. Voir [les libellés](#libellés) pour plus d'informations.
- `readonly`
  - : Un attribut booléen qui, lorsqu'il est présent, indique qu'il ne devrait pas être possible d'éditer la valeur du champ. Cet attribut est pris en charge par les types de contrôle `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, et `password`.

    Voir [l'attribut HTML `readonly`](/fr/docs/Web/HTML/Attributes/readonly) pour plus d'informations.
- `required`
  - : Un attribut booléen qui, lorsqu'il est présent, indique qu'une valeur doit être saisie avant que le formulaire puisse être envoyé. Cet attribut est pris en charge pour les types de contrôle `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `password`, `checkbox`, `radio`, et `file`.

    Voir [la validation côté-client](#validation_côté-client) et [l'attribut HTML `required`](/fr/docs/Web/HTML/Attributes/required) pour plus d'informations.
- `size`
  - : Cet attribut est uniquement valide pour les types de contrôle `email`, `password`, `tel`, `url` et `text`. Il indique la largeur visible pour le contrôle. D'une certaine façon, il crée un résultat analogue à l'application de la propriété CSS `width`. L'unité de cette valeur dépend du type de contrôle. Pour les champs de type `password` et `text`, il s'agit du nombre de caractères (équivalent à l'unité `em`) et la valeur par défaut vaut `20`. Pour les autres types de champs, la valeur est exprimée en pixels. La largeur définie avec la feuille de style CSS aura la priorité sur cet attribut.
- `src`
  - : Cet attribut est uniquement valide pour le type `image` et indique l'URL du fichier de l'image à afficher sur le bouton. Voir [`<input type="image">`](/fr/docs/Web/HTML/Element/Input/image) pour plus d'informations.
- `step`
  - : Cet attribut est valide pour les contrôles de type numérique (`number`, dates/heures, `range`). L'attribut [`step`](/fr/docs/Web/HTML/Attributes/step) est un nombre qui définit la granularité de la valeur.

    S'il n'est pas explicitement inclus&nbsp;:

    - Pour les types `number` et `range`, sa valeur par défaut sera 1.
    - Pour les types temporels, la valeur par défaut de `step` dépend du type. Voir les pages individuelles pour plus de détails&nbsp;: [`date`](/fr/docs/Web/HTML/Element/Input/date#step), [`datetime-local`](/fr/docs/Web/HTML/Element/Input/datetime-local#step), [`month`](/fr/docs/Web/HTML/Element/Input/month#step), [`time`](/fr/docs/Web/HTML/Element/Input/time#step), et [`week`](/fr/docs/Web/HTML/Element/Input/week#step).

    La valeur de cet attribut doit être un nombre positif (entier ou décimal) ou la valeur spéciale `any` (cette dernière indiquant qu'il n'y a pas de contrainte de granularité et que toute valeur est autorisée (les contraintes imposées par [`min`](#min) et [`max`](#max) s'appliquent toujours)).

    Si `any` n'est pas utilisé explicitement, les valeurs valides du champ pour les types temporels, `number`, et `range` seront celles construites depuis le minimum ([`min`](#min)) en ajoutant l'incrément une ou plusieurs fois jusqu'à atteindre le maximum ([`max`](#max)), si ce dernier est défini.

    Ainsi, si on a `<input type="number" min="10" step="2">`, tout entier pair, supérieur ou égal à `10` sera valide. Si `step` est absent, par exemple avec `<input type="number">`, tous les nombres entiers seront valides mais les nombres décimaux (comme `4.2`) seront invalides car la valeur par défaut de `step` vaut `1` pour le type `number`. Afin que `4.2` soit valide, on devra utiliser la valeur `any`, ou `0.1`, ou `0.2` pour l'attribut `step`, ou encore une valeur de `min` dont la partie fractionnaire vaut `.2`, par exemple `<input type="number" min="-5.2">`

    > **Note :** Lorsque la donnée saisie ne respecte pas l'incrément, la valeur est considérée comme invalide pour la validation des contraintes et l'élément sera ciblé par la pseudo-classe `:invalid`.

    Voir [la validation côté client](#la_validation_côté_client) pour plus d'information.
- `tabindex`
  - : Un attribut universel, valide pour tous les éléments, y compris tous les types de `<input>`. Sa valeur est un entier qui indique si l'élément peut prendre le focus et s'il devrait participer à la navigation séquentielle au clavier. Comme tous les types d'élément `<input>`, sauf ceux masqués, peuvent prendre le focus, cet attribut ne devrait pas être utilisé sur les contrôles de formulaire, car cela nécessiterait de gérer l'ordre du focus pour tous les éléments du document, au risque de dégradé l'utilisabilité et l'accessibilité si cela était fait de façon incorrecte.
- `title`
  - : Un attribut universel, valide pour tous les éléments, y compris tous les types de `<input>`. Sa valeur est un texte fournissant des informations à propos de l'élément auquel il appartient. Une telle information est généralement (mais pas nécessairement) affichée sous la forme d'une bulle d'information. `title` ne devrait pas être utilisé comme méthode principale pour expliquer le rôle d'un contrôle de formulaire. Il faut plutôt utiliser l'élément [`<label>`](/fr/docs/Web/HTML/Element/label) avec un attribut `for` dont la valeur correspond à la valeur de l'attribut [`id`](#id) du champs de formulaire. Voir [Libellés](#libellés) ci-après.
- `type`
  - : Une chaîne de caractères qui indique le type de contrôle à afficher. On utilisera par exemple la valeur `checkbox` pour afficher une case à cocher. Si cet attribut est absent (ou qu'une valeur inconnue est utilisée), ce sera un champ de type `text` qui sera utilisé, permettant de saisir un texte dans le contrôle de formulaire.

    Les valeurs autorisées pour cet attribut sont listées dans la section [Types de champ](#types_de_champ) ci-avant.
- `value`
  - : La valeur du contrôle. Lorsque cette valeur est fournie dans le document HTML, il s'agit de la valeur initiale, qui peut ensuite être récupérée et éventuellement modifiée avec JavaScript via la propriété du DOM correspondante&nbsp; [`HTMLInputElement.value`](/fr/docs/Web/API/HTMLInputElement). Cet attribut est toujours optionnel en théorie, mais peut être considéré comme obligatoire en pratique pour les types de champ `checkbox`, `radio`, et `hidden`.
- `width`
  - : Cet attribut est uniquement valide pour le type de contrôle `image`, où il exprime la largeur du fichier d'image à afficher sur le bouton graphique. Voir [`<input type="image">`](/fr/docs/Web/HTML/Element/Input/image) pour plus d'informations.

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
  - : Cet attribut booléen est une extension de WebKit et Blink (présent donc dans les navigateurs Safari, Opera, Chrome, etc.) qui indique, s'il est présent, que le champ doit être traité comme un champ de recherche dynamique. Lorsque la personne édite la valeur du champ, l'agent utilisateur envoie des évènements [`search`](/fr/Web/API/HTMLInputElement/search_event) à l'objet [`HTMLInputElement`](/fr/docs/Web/API/HTMLInputElement) qui représente le champ de recherche. Cela permet de gérer, via du code, la mise à jour des résultats de recherche en temps réel lors de l'édition.

    Si `incremental` n'est pas indiqué, l'évènement [`search`](/fr/Web/API/HTMLInputElement/search_event) est uniquement envoyé lorsque la personne initie explicitement une recherche, c'est-à-dire en appuyant sur la touche <kbd>Entrée</kbd> ou <kbd>Retour</kbd> lors de l'édition du champ.

    L'évènement `search` est soumis à des limites de fréquence propres à chaque implémentation.
- `orient` {{non-standard_inline}}
  - : Semblable à la propriété CSS non-standard `-moz-orient` pour les éléments [`<progress>`](/fr/docs/Web/HTML/Element/progress) et [`<meter>`](/fr/docs/Web/HTML/Element/meter), cet attribut définit l'orientation de la piste du curseur. Values include `horizontal`, meaning the range is rendered horizontally, and `vertical`, where the range is rendered vertically.

- `results` {{non-standard_inline}}

  - : The `results` attribute—supported only by Safari—is a numeric value that lets you override the maximum number of entries to be displayed in the [`<input>`](/fr/docs/Web/HTML/Element/input) element's natively-provided drop-down menu of previous search queries.

    The value must be a non-negative decimal number. If not provided, or an invalid value is given, the browser's default maximum number of entries is used.

- `webkitdirectory` {{non-standard_inline}}

  - : The Boolean `webkitdirectory` attribute, if present, indicates that only directories should be available to be selected by the user in the file picker interface. See [`HTMLInputElement.webkitdirectory`](/fr/docs/Web/API/HTMLInputElement/webkitdirectory) for additional details and examples.

    Though originally implemented only for WebKit-based browsers, `webkitdirectory` is also usable in Microsoft Edge as well as Firefox 50 and later. However, even though it has relatively broad support, it is still not standard and should not be used unless you have no alternative.

## Methods

The following methods are provided by the [`HTMLInputElement`](/fr/docs/Web/API/HTMLInputElement) interface which represents `<input>` elements in the DOM. Also available are those methods specified by the parent interfaces, [`HTMLElement`](/fr/docs/Web/API/HTMLElement), [`Element`](/fr/docs/Web/API/Element), [`Node`](/fr/docs/Web/API/Node), and [`EventTarget`](/fr/docs/Web/API/EventTarget).

- [`checkValidity()`](/fr/docs/Web/API/HTMLInputElement/checkValidity)
  - : Returns `true` if the element's value passes validity checks; otherwise, returns `false` and fires an [`invalid`](/fr/docs/Web/API/HTMLInputElement/invalid_event) event at the element.
- [`reportValidity()`](/fr/docs/Web/API/HTMLInputElement/reportValidity)
  - : Returns `true` if the element's value passes validity checks; otherwise, returns `false`, fires an [`invalid`](/fr/docs/Web/API/HTMLInputElement/invalid_event) event at the element, and (if the event isn't canceled) reports the problem to the user.
- [`select()`](/fr/docs/Web/API/HTMLInputElement/select)
  - : Selects the entire content of the `<input>` element, if the element's content is selectable. For elements with no selectable text content (such as a visual color picker or calendar date input), this method does nothing.
- [`setCustomValidity()`](/fr/docs/Web/API/HTMLInputElement/setCustomValidity)
  - : Sets a custom message to display if the input element's value isn't valid.
- [`setRangeText()`](/fr/docs/Web/API/HTMLInputElement/setRangeText)
  - : Sets the contents of the specified range of characters in the input element to a given string. A `selectMode` parameter is available to allow controlling how the existing content is affected.
- [`setSelectionRange()`](/fr/docs/Web/API/HTMLInputElement/setSelectionRange)
  - : Selects the specified range of characters within a textual input element. Does nothing for inputs which aren't presented as text input fields.
- [`stepDown()`](/fr/docs/Web/API/HTMLInputElement/stepDown)
  - : Decrements the value of a numeric input by one, by default, or by the specified number of units.
- [`stepUp()`](/fr/docs/Web/API/HTMLInputElement/stepUp)
  - : Increments the value of a numeric input by one or by the specified number of units.

## CSS

Inputs, being replaced elements, have a few features not applicable to non form elements. There are CSS selectors that can specifically target form controls based on their UI features, also known as UI pseudo-classes. The input element can also be targeted by type with attribute selectors. There are some properties that are especially useful as well.

### UI pseudo-classes

<table class="no-markdown">
  <caption>
    Captions super relevant to the
    <code>&#x3C;input></code>
    element:
  </caption>
  <thead>
    <tr>
      <th>Pseudo-class</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>[`:enabled`](/fr/docs/Web/CSS/:enabled)</td>
      <td>
        Any currently enabled element that can be activated (selected, clicked
        on, typed into, etc.) or accept focus and also has a disabled state, in
        which it can't be activated or accept focus.
      </td>
    </tr>
    <tr>
      <td>[`:disabled`](/fr/docs/Web/CSS/:disabled)</td>
      <td>
        Any currently disabled element that has an enabled state, meaning it
        otherwise could be activated (selected, clicked on, typed into, etc.) or
        accept focus were it not disabled.
      </td>
    </tr>
    <tr>
      <td>[`:read-only`](/fr/docs/Web/CSS/:read-only)</td>
      <td>Element not editable by the user</td>
    </tr>
    <tr>
      <td>[`:read-write`](/fr/docs/Web/CSS/:read-write)</td>
      <td>Element that is editable by the user.</td>
    </tr>
    <tr>
      <td>[`:placeholder-shown`](/fr/docs/Web/CSS/:placeholder-shown)</td>
      <td>
        Element that is currently displaying <a href="#placeholder"><code>placeholder</code> text</a>,
        including <code>&#x3C;input></code> and [`<textarea>`](/fr/docs/Web/HTML/Element/textarea) elements with the <a href="#placeholder"><code>placeholder</code></a> attribute present that has, as of yet, no value.
      </td>
    </tr>
    <tr>
      <td>[`:default`](/fr/docs/Web/CSS/:default)</td>
      <td>
        Form elements that are the default in a group of related elements.
        Matches {{HTMLElement("input/checkbox", "checkbox")}} and
        {{HTMLElement("input/radio", "radio")}} input types that
        were checked on page load or render.
      </td>
    </tr>
    <tr>
      <td>[`:checked`](/fr/docs/Web/CSS/:checked)</td>
      <td>
        Matches {{HTMLElement("input/checkbox", "checkbox")}} and
        {{HTMLElement("input/radio", "radio")}} input types that
        are currently checked (and the ([`<option>`](/fr/docs/Web/HTML/Element/option) in a
        [`<select>`](/fr/docs/Web/HTML/Element/select) that is currently selected).
      </td>
    </tr>
    <tr>
      <td>[`:indeterminate`](/fr/docs/Web/CSS/:indeterminate)</td>
      <td>
        {{HTMLElement("input/checkbox", "checkbox")}} elements
        whose indeterminate property is set to true by JavaScript,
        {{HTMLElement("input/radio", "radio")}} elements, when all
        radio buttons with the same name value in the form are unchecked, and
        [`<progress>`](/fr/docs/Web/HTML/Element/progress) elements in an indeterminate state
      </td>
    </tr>
    <tr>
      <td>[`:valid`](/fr/docs/Web/CSS/:valid)</td>
      <td>
        Form controls that can have constraint validation applied and are
        currently valid.
      </td>
    </tr>
    <tr>
      <td>[`:invalid`](/fr/docs/Web/CSS/:invalid)</td>
      <td>
        Form controls that have constraint validation applied and are currently
        not valid. Matches a form control whose value doesn't match the
        constraints set on it by it's attributes, such as
        <a href="#required"><code>required</code></a>,
        <a href="#pattern"><code>pattern</code></a>,
        <a href="#step"><code>step</code></a> and <a href="#max"><code>max</code></a>.
      </td>
    </tr>
    <tr>
      <td>[`:in-range`](/fr/docs/Web/CSS/:in-range)</td>
      <td>
        A non-empty input whose current value is within the range limits
        specified by the <a href="#min"><code>min</code></a> and <a href="#max"><code>max</code></a> attributes and the <a href="#step"><code>step</code></a>.
      </td>
    </tr>
    <tr>
      <td>[`:out-of-range`](/fr/docs/Web/CSS/:out-of-range)</td>
      <td>
        A non-empty input whose current value is NOT within the range limits
        specified by the <a href="#min"><code>min</code></a>
        and <a href="#max"><code>max</code></a> attributes or
        does not adhere to the <a href="#step"><code>step</code></a> constraint.
      </td>
    </tr>
    <tr>
      <td>[`:required`](/fr/docs/Web/CSS/:required)</td>
      <td>
        <code>&#x3C;input></code>, [`<select>`](/fr/docs/Web/HTML/Element/select), or [`<textarea>`](/fr/docs/Web/HTML/Element/textarea) element that has the <a href="#required"><code>required</code></a> attribute set on it.
        Only matches elements that can be required.
        The attribute included on a non-requirable element will not make for a match.
      </td>
    </tr>
    <tr>
      <td>[`:optional`](/fr/docs/Web/CSS/:optional)</td>
      <td>
        <code>&#x3C;input></code>, [`<select>`](/fr/docs/Web/HTML/Element/select), or
        [`<textarea>`](/fr/docs/Web/HTML/Element/textarea) element that does NOT have the <a href="#required"><code>required</code></a> attribute set on it.
        Does not match elements that can't be required.
      </td>
    </tr>
    <tr>
      <td>[`:blank`](/fr/docs/Web/CSS/:blank)</td>
      <td>
        <code>&#x3C;input></code> and [`<textarea>`](/fr/docs/Web/HTML/Element/textarea) elements that currently have no value.
      </td>
    </tr>
    <tr>
      <td>[`:user-invalid`](/fr/docs/Web/CSS/:user-invalid)</td>
      <td>
        Similar to <code>:invalid</code>, but is activated on blur. Matches
        invalid input but only after the user interaction, such as by focusing
        on the control, leaving the control, or attempting to submit the form
        containing the invalid control.
      </td>
    </tr>
  </tbody>
</table>

#### Pseudo-classes example

We can style a checkbox label based on whether the checkbox is checked or not. In this example, we are styling the [`color`](/fr/docs/Web/CSS/color) and [`font-weight`](/fr/docs/Web/CSS/font-weight) of the [`<label>`](/fr/docs/Web/HTML/Element/label) that comes immediately after a checked input. We haven't applied any styles if the `input` is not checked.

```html hidden
<input id="checkboxInput" type="checkbox">
<label for="checkboxInput">Toggle the checkbox on and off</label>
```

```css
input:checked + label {
  color: red;
  font-weight: bold;
}
```

{{EmbedLiveSample('Pseudo-classes_example', 500, 80)}}

### Attribute selectors

It is possible to target different types of form controls based on their [`type`](#type) using [attribute selectors](/fr/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors). CSS attribute selectors match elements based on either just the presence of a attribute or the value of a given attribute.

```css
/* matches a password input */
input[type="password"] {}

/* matches a form control whose valid values are limited to a range of values*/
input[min][max] {}

/* matches a form control with a pattern attribute */
 input[pattern] {}
```

### ::placeholder

By default, the appearance of placeholder text is a translucent or light gray. The [`::placeholder`](/fr/docs/Web/CSS/::placeholder) pseudo-element is the input's [`placeholder` text](#placeholder). It can be styled with a limited subset of CSS properties.

```css
::placeholder {
  color: blue;
}
```

Only the subset of CSS properties that apply to the [`::first-line`](/fr/docs/Web/CSS/::first-line) pseudo-element can be used in a rule using `::placeholder` in its selector.

### appearance

The [`appearance`](/fr/docs/Web/CSS/appearance) property enables the displaying of (almost) any element as a platform-native style based on the operating system's theme as well as the removal of any platform-native styling with the `none` value.

You could make a `<div>` look like a radio button with `div {appearance: radio;}` or a radio look like a checkbox with `[type="radio"] {appearance: checkbox;}`, but don't.

Setting `appearance: none` removes platform native borders, but not functionality.

### caret-color

A property specific to text entry-related elements is the CSS [`caret-color`](/fr/docs/Web/CSS/caret-color) property, which lets you set the color used to draw the text input caret:

#### HTML

```html
<label for="textInput">Note the red caret:</label>
<input id="textInput" class="custom" size="32">
```

#### CSS

```css
input.custom {
  caret-color: red;
  font: 16px "Helvetica", "Arial", "sans-serif"
}
```

#### Result

{{EmbedLiveSample('caret-color', 500, 80)}}

### object-position and object-fit

In certain cases (typically involving non-textual inputs and specialized interfaces), the `<input>` element is a [replaced element](/fr/docs/Web/CSS/Replaced_element). When it is, the position and size of the element's size and positioning within its frame can be adjusted using the CSS [`object-position`](/fr/docs/Web/CSS/object-position) and [`object-fit`](/fr/docs/Web/CSS/object-fit) properties

### Styling

For more information about adding color to elements in HTML, see:

- [Applying color to HTML elements using CSS](/fr/docs/Web/CSS/CSS_Colors/Applying_color).

Also see:

- [Styling HTML forms](/fr/docs/Learn/Forms/Styling_web_forms)
- [Advanced styling for HTML forms](/fr/docs/Learn/Forms/Advanced_form_styling) and
- the [compatibility table of CSS properties](/fr/docs/Learn/Forms/Property_compatibility_table_for_form_controls).

## Additional features

### Labels

Labels are needed to associate assistive text with an `<input>`. The [`<label>`](/fr/docs/Web/HTML/Element/label) element provides explanatory information about a form field that is _always_ appropriate (aside from any layout concerns you have). It's never a bad idea to use a `<label>` to explain what should be entered into an `<input>` or [`<textarea>`](/fr/docs/Web/HTML/Element/textarea).

#### Associated labels

The semantic pairing of `<input>` and `<label>` elements is useful for assistive technologies such as screen readers. By pairing them using the `<label>`'s [`for`](/fr/docs/Web/HTML/Element/label#for) attribute, you bond the label to the input in a way that lets screen readers describe inputs to users more precisely.

It does not suffice to have plain text adjacent to the `<input>` element. Rather, usability and accessibility requires the inclusion of either implicit or explicit [`<label>`](/fr/docs/Web/HTML/Element/label):

```html
<!-- inaccessible -->
<p>Enter your name: <input id="name" type="text" size="30"></p>

<!-- implicit label -->
<p><label>Enter your name: <input id="name" type="text" size="30"></label></p>

<!-- explicit label -->
<p><label for="name">Enter your name: </label><input id="name" type="text" size="30"></p>
```

The first example is inaccessible: no relationship exists between the prompt and the `<input>` element.

In addition to an accessible name, the label provides a larger 'hit' area for mouse and touch screen users to click on or touch. By pairing a `<label>` with an `<input>`, clicking on either one will focus the `<input>`. If you use plain text to "label" your input, this won't happen. Having the prompt part of the activation area for the input is helpful for people with motor control conditions.

As web developers, it's important that we never assume that people will know all the things that we know. The diversity of people using the web—and by extension your website—practically guarantees that some of your site's visitors will have some variation in thought processes and/or circumstances that leads them to interpret your forms very differently from you without clear and properly-presented labels.

#### Placeholders are not accessible

The [`placeholder`](#placeholder) attribute lets you specify text that appears within the `<input>` element's content area itself when it is empty. The placeholder should never be required to understand your forms. It is not a label, and should not be used as a substitute, because it isn't. The placeholder is used to provide a hint as to what an inputted value should look like, not an explanation or prompt.

Not only is the placeholder not accessible to screen readers, but once the user enters any text into the form control, or if the form control already has a value, the placeholder disappears. Browsers with automatic page translation features may skip over attributes when translating, meaning the `placeholder` may not get translated.

> **Note:** Don't use the [`placeholder`](#placeholder) attribute if you can avoid it. If you need to label an `<input>` element, use the [`<label>`](/fr/docs/Web/HTML/Element/label) element.

### Client-side validation

> **Warning:** Client-side validation is useful, but it does _not_ guarantee that the server will receive valid data. If the data must be in a specific format, _always_ verify it also on the server-side, and return a [`400` HTTP response](/fr/docs/Web/HTTP/Status/400) if the format is invalid.

In addition to using CSS to style inputs based on the [`:valid`](/fr/docs/Web/CSS/:valid) or [`:invalid`](/fr/docs/Web/CSS/:invalid) UI states based on the current state of each input, as noted in the [UI pseudo-classes](#ui_pseudo-classes) section above, the browser provides for client-side validation on (attempted) form submission. On form submission, if there is a form control that fails constraint validation, supporting browsers will display an error message on the first invalid form control; displaying a default message based on the error type, or a message set by you.

Some input types and other attributes place limits on what values are valid for a given input. For example, `<input type="number" min="2" max="10" step="2">` means only the number 2, 4, 6, 8, or 10 are valid. Several errors could occur, including a `rangeUnderflow` error if the value is less than 2, `rangeOverflow` if greater than 10, `stepMismatch` if the value is a number between 2 and 10, but not an even integer (does not match the requirements of the `step` attribute), or `typeMismatch` if the value is not a number.

For the input types whose domain of possible values is periodic (that is, at the highest possible value, the values wrap back around to the beginning rather than ending), it's possible for the values of the [`max`](#max) and [`min`](#min) properties to be reversed, which indicates that the range of permitted values starts at `min`, wraps around to the lowest possible value, then continues on until `max` is reached. This is particularly useful for dates and times, such as when you want to allow the range to be from 8 PM to 8 AM:

```html
<input type="time" min="20:00" max="08:00" name="overnight">
```

Specific attributes and their values can lead to a specific error [`ValidityState`](/fr/docs/Web/API/ValidityState):

<table class="no-markdown">
  <caption>
    Validity object errors depend on the [`<input>`](/fr/docs/Web/HTML/Element/input)
    attributes and their values:
  </caption>
  <thead>
    <tr>
      <th scope="col">Attribute</th>
      <th scope="col">Relevant property</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="#max"><code>max</code></a></td>
      <td>[`validityState.rangeOverflow`](/fr/docs/Web/API/validityState/rangeOverflow)</td>
      <td>
        Occurs when the value is greater than the maximum value as defined by
        the <code>max</code> attribute
      </td>
    </tr>
    <tr>
      <td><a href="#maxlength"><code>maxlength</code></a></td>
      <td>[`validityState.tooLong`](/fr/docs/Web/API/validityState/tooLong)</td>
      <td>
        Occurs when the number of characters is greater than the number allowed by the <code>maxlength</code> property
      </td>
    </tr>
    <tr>
      <td><a href="#min"><code>min</code></a></td>
      <td>[`validityState.rangeUnderflow`](/fr/docs/Web/API/validityState/rangeUnderflow)</td>
      <td>
        Occurs when the value is less than the minimum value as defined by the <code>min</code> attribute
      </td>
    </tr>
    <tr>
      <td><a href="#maxlength"><code>maxlength</code></a></td>
      <td>[`validityState.tooShort`](/fr/docs/Web/API/validityState/tooShort)</td>
      <td>
        Occurs when the number of characters is less than the number required by the <code>minlength</code> property
      </td>
    </tr>
    <tr>
      <td><a href="#pattern"><code>pattern</code></a></td>
      <td>[`validityState.patternMismatch`](/fr/docs/Web/API/validityState/patternMismatch)</td>
      <td>
        Occurs when a pattern attribute is included with a valid regular expression and the <code>value</code> does not match it.
      </td>
    </tr>
    <tr>
      <td><a href="#required"><code>required</code></a></td>
      <td>[`validityState.valueMissing`](/fr/docs/Web/API/validityState/valueMissing)</td>
      <td>
        Occurs when the <code>required</code> attribute is present but the value is <code>null</code> or radio or checkbox is not checked.
      </td>
    </tr>
    <tr>
      <td><a href="#step"><code>step</code></a></td>
      <td>[`validityState.stepMismatch`](/fr/docs/Web/API/validityState/stepMismatch)</td>
      <td>
        The value doesn't match the step increment. Increment default is <code>1</code>, so only integers are valid on<code> type="number"</code>
        is step is not included. <code>step="any"</code> will never throw this error.
      </td>
    </tr>
    <tr>
      <td><a href="#type"><code>type</code></a></td>
      <td>[`validityState.typeMismatch`](/fr/docs/Web/API/validityState/typeMismatch)</td>
      <td>
        Occurs when the value is not of the correct type, for example a email does not contain an <code>@</code> or a url doesn't contain a protocol.
      </td>
    </tr>
  </tbody>
</table>

If a form control doesn't have the `required` attribute, no value, or an empty string, is not invalid. Even if the above attributes are present, with the exception of `required`, and empty string will not lead to an error.

We can set limits on what values we accept, and supporting browsers will natively validate these form values and alert the user if there is a mistake when the form is submitted.

In addition to the errors described in the table above, the `validityState` interface contains the `badInput`, `valid`, and `customError` boolean readonly properties. The validity object includes:

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

For each of these Boolean properties, a value of `true` indicates that the specified reason validation may have failed is true, with the exception of the `valid` property, which is `true` if the element's value obeys all constraints.

If there is an error, supporting browsers will both alert the user and prevent the form from being submitted. A word of caution: if a custom error is set to a truthy value (anything other than the empty string or `null`), the form will be prevented from being submitted. If there is no custom error message, and none of the other properties return true, `valid` will be true, and the form can be submitted.

```js
function validate(input) {
  let validityState_object = input.validity;
  if(validityState_object.valueMissing) {
     input.setCustomValidity('A value is required');
  } else if (validityState_object.rangeUnderflow) {
    input.setCustomValidity('Your value is too low');
  } else if (validityState_object.rangeOverflow) {
    input.setCustomValidity('Your value is too high');
  } else {
    input.setCustomValidity('');
  }
}
```

The last line, setting the custom validity message to the empty string is vital. If the user makes an error, and the validity is set, it will fail to submit, even if all of the values are valid, until the message is `null`.

#### Custom validation error example

If you want to present a custom error message when a field fails to validate, you need to use the [Constraint validation features](/fr/docs/Web/API/Constraint_validation#constraint_validation_interfaces) available on `<input>` (and related) elements. Take the following form:

```html
<form>
  <label for="name">Enter username (upper and lowercase letters): </label>
  <input type="text" name="name" id="name" required pattern="[A-Za-z]+">
  <button>Submit</button>
</form>
```

The basic HTML form validation features will cause this to produce a default error message if you try to submit the form with either no valid filled in, or a value that does not match the `pattern`.

If you wanted to instead display custom error messages, you could use JavaScript like the following:

```js
const nameInput = document.querySelector('input');

nameInput.addEventListener('input', () => {
  nameInput.setCustomValidity('');
  nameInput.checkValidity();
});

nameInput.addEventListener('invalid', () => {
  if(nameInput.value === '') {
    nameInput.setCustomValidity('Enter your username!');
  } else {
    nameInput.setCustomValidity('Usernames can only contain upper and lowercase letters. Try again!');
  }
});
```

The example renders like so:

{{EmbedLiveSample('Custom_validation_error_example')}}

In brief:

- We check the valid state of the input element every time its value is changed by running the `checkValidity()` method via the `input` event handler.
- If the value is invalid, an `invalid` event is raised, and the `invalid` event handler function is run. Inside this function we work out whether the value is invalid because it is empty, or because it doesn't match the pattern, using an `if()` block, and set a custom validity error message.
- As a result, if the input value is invalid when the submit button is pressed, one of the custom error messages will be shown.
- If it is valid, it will submit as you'd expect. For this to happen, the custom validity has to be cancelled, by invoking `setCustomValidity()` with an empty string value. We therefore do this every time the `input` event is raised. If you don't do this, and a custom validity was previously set, the input will register as invalid, even if it current contains a valid value on submission.

> **Note:** Always validate input constraints both client side and server side. Constraint validation doesn't remove the need for validation on the _server side_. Invalid values can still be sent by older browsers or by bad actors.

> **Note:** Firefox supported a proprietary error attribute — `x-moz-errormessage` — for many versions, which allowed you set custom error messages in a similar way. This has been removed as of version 66 (see {{bug(1513890)}}).

### Localization

The allowed inputs for certain `<input>` types depend on the locale. In some locales, 1,000.00 is a valid number, while in other locales the valid way to enter this number is 1.000,00.

Firefox uses the following heuristics to determine the locale to validate the user's input (at least for `type="number"`):

- Try the language specified by a `lang`/`xml:lang` attribute on the element or any of its parents.
- Try the language specified by any `Content-Language` HTTP header. Or,
- If none specified, use the browser's locale.

### Technical summary

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories">Content categories</a>
      </th>
      <td>
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content">Flow content</a>, listed, submittable, resettable, form-associated element,
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#phrasing_content">phrasing content</a>. If the <a href="#type"><code>type</code></a> is not
        <code>hidden</code>, then labelable element, palpable content.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>None, it is an {{Glossary("empty element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>Must have a start tag and must not have an end tag.</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        Any element that accepts
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#phrasing_content">phrasing content</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <ul>
          <li>
            <code>type=button</code>:
            <code
              ><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/button_role">button</a></code>
          </li>
          <li>
            <code>type=checkbox</code>:
            <code><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/checkbox_role">checkbox</a></code>
          </li>
          <li>
            <code>type=email</code>
            <ul>
              <li>
                with no <code>list</code> attribute:
                <code
                  ><a
                    href="/en-US/docs/Web/Accessibility/ARIA/Roles/textbox_role">textbox</a></code>
              </li>
              <li>
                with <code>list</code> attribute: {{ARIARole("combobox")}}
              </li>
            </ul>
          </li>
          <li>
            <code>type=image</code>:
            <code
              ><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/button_role">button</a></code>
          </li>
          <li>
            <code>type=number</code>: {{ARIARole("spinbutton")}}
          </li>
          <li><code>type=radio</code>: {{ARIARole("radio")}}</li>
          <li><code>type=range</code>: {{ARIARole("slider")}}</li>
          <li>
            <code>type=reset</code>:
            <code><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/button_role">button</a></code>
          </li>
          <li>
            <code>type=search</code>
            <ul>
              <li>
                with no <code>list</code> attribute: {{ARIARole("searchbox")}}
              </li>
              <li>
                with <code>list</code> attribute:{{ARIARole("combobox")}}
              </li>
            </ul>
          </li>
          <li>
            <code>type=submit</code>:
            <code
              ><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/button_role">button</a></code>
          </li>
          <li>
            <code>type=tel</code>
            <ul>
              <li>
                with no <code>list</code> attribute:
                <code><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/textbox_role">textbox</a></code>
              </li>
              <li>
                with <code>list</code> attribute: {{ARIARole("combobox")}}
              </li>
            </ul>
          </li>
          <li>
            <code>type=text</code>
            <ul>
              <li>
                with no <code>list</code> attribute:
                <code><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/textbox_role">textbox</a></code>
              </li>
              <li>
                with <code>list</code> attribute: {{ARIARole("combobox")}}
              </li>
            </ul>
          </li>
          <li>
            <code>type=url</code>
            <ul>
              <li>
                with no <code>list</code> attribute:
                <code
                  ><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/textbox_role">textbox</a ></code>
              </li>
              <li>
                with <code>list</code> attribute: {{ARIARole("combobox")}}
              </li>
            </ul>
          </li>
          <li>
            <code>type=color|date|datetime-local|file|hidden|month|password|time|week</code>:
            <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">no corresponding role</a>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>
        <ul>
          <li>
            <code>type=button</code>: {{ARIARole("link")}},
            {{ARIARole("menuitem")}},
            {{ARIARole("menuitemcheckbox")}},
            {{ARIARole("menuitemradio")}},
            {{ARIARole("option")}}, {{ARIARole("radio")}},
            {{ARIARole("switch")}}, {{ARIARole("tab")}}
          </li>
          <li>
            <code>type=checkbox</code>: {{ARIARole("button")}} when used
            with <code>aria-pressed</code>,
            {{ARIARole("menuitemcheckbox")}},
            {{ARIARole("option")}}, {{ARIARole("switch")}}
          </li>
          <li>
            <code>type=image</code>: {{ARIARole("link")}},
            {{ARIARole("menuitem")}},
            {{ARIARole("menuitemcheckbox")}},
            {{ARIARole("menuitemradio")}},
            {{ARIARole("radio")}}, {{ARIARole("switch")}}
          </li>
          <li>
            <code>type=radio</code>: {{ARIARole("menuitemradio")}}
          </li>
          <li>
            <code>type=text</code> with no <code>list</code> attribute:
            {{ARIARole("combobox")}}, {{ARIARole("searchbox")}},
            {{ARIARole("spinbutton")}}
          </li>
          <li>
            <code>type=color|date|datetime-local|email|file|hidden|</code>
              <code>month|number|password|range|reset|search|submit|tel|url|week</code>
            or <code>text</code> with <code>list</code> attribute: no
            <code>role</code> permitted
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>[`HTMLInputElement`](/fr/docs/Web/API/HTMLInputElement)</td>
    </tr>
  </tbody>
</table>

## Accessibility concerns

### Labels

When including inputs, it is an accessibility requirement to add labels along side. This is needed so those who use assistive technologies can tell what the input is for. Also, clicking or touching a label gives focus to the label's associated form control. This improves the accessibility and usability for sighted users, increases the area a user can click or touch to activate the form control. This is especially useful (and even needed) for radio buttons and checkboxes, which are tiny. For more information about labels in general see [Labels](#labels) .

The following is an example of how to associate the `<label>` with an `<input>` element in the above style. You need to give the `<input>` an `id` attribute. The `<label>` then needs a `for` attribute whose value is the same as the input's `id`.

```html
<label for="peas">Do you like peas?</label>
<input type="checkbox" name="peas" id="peas">
```

### Size

Interactive elements such as form input should provide an area large enough that it is easy to activate them. This helps a variety of people, including people with motor control issues and people using non-precise forms of input such as a stylus or fingers. A minimum interactive size of 44×44 [CSS pixels](https://www.w3.org/TR/WCAG21/#dfn-css-pixels) is recommended.

- [Understanding Success Criterion 2.5.5: Target Size | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Target Size and 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Quick test: Large touch targets - The A11Y Project](https://www.a11yproject.com/posts/large-touch-targets/)

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
