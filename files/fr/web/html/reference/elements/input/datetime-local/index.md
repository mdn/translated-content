---
title: <input type="datetime-local">
slug: Web/HTML/Reference/Elements/input/datetime-local
l10n:
  sourceCommit: 991d9809b3ecd8e01b5be871a1f30581e55ee060
---

Les éléments {{HTMLElement("input")}} dont l'attribut `type` vaut **`"datetime-local"`** permettent de créer des champs destinés à saisir simplement une date (définie par une année, un mois, et un jour) et une heure (définie par une heure et une minute). Il n'y a pas de secondes dans ce contrôle.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;input type=&quot;datetime-local&quot;&gt;", "tabbed-shorter")}}

```html interactive-example
<label for="meeting-time"
  >Choisissez une heure pour votre rendez-vous&nbsp;:</label
>

<input
  type="datetime-local"
  id="meeting-time"
  name="meeting-time"
  value="2018-06-12T19:30"
  min="2018-06-07T00:00"
  max="2018-06-14T00:00" />
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

L'interface utilisateur du contrôle varie généralement d'un navigateur à l'autre. Le contrôle est destiné à représenter _une date et une heure locales_, pas nécessairement _la date et l'heure locales de l'utilisateur·ice_. Autrement dit, le champ autorise toute combinaison valide d'année, de mois, de jour, d'heure et de minute — même si une telle combinaison est invalide dans le fuseau horaire local de l'utilisateur·ice (comme l'heure qui tombe dans le saut d'une heure lors du passage à l'heure d'été).

## Valeur

Une chaîne de caractères qui représente la valeur de la date saisie dans le contrôle. Le format de la valeur de date et d'heure utilisé par ce type de champ est décrit dans [chaînes de caractères de date et d'heure locales](/fr/docs/Web/HTML/Guides/Date_and_time_formats#représentation_des_dates_et_heures_locales).

Vous pouvez définir une valeur par défaut pour le champ en incluant une date et une heure dans l'attribut [`value`](/fr/docs/Web/HTML/Reference/Elements/input#value)&nbsp;:

```html
<label for="party">
  Veuillez saisir une date et une heure pour la fête&nbsp;:
</label>
<input
  id="party"
  type="datetime-local"
  name="party-date"
  value="2017-06-01T08:30" />
```

{{EmbedLiveSample("", 600, 60)}}

Il convient de noter que les formats de date et d'heure affichés diffèrent de la véritable valeur&nbsp;; la date et l'heure affichées sont formatées selon la locale de l'utilisateur·ice telle que rapportée par son système d'exploitation, tandis que la valeur de date/heure est toujours formatée `YYYY-MM-DDTHH:mm`. Lorsque la valeur ci-dessus est envoyée au serveur, par exemple, elle ressemblera à `party-date=2024-06-01T08:30`.

> [!NOTE]
> Gardez également à l'esprit que si ces données sont envoyées via HTTP {{HTTPMethod("GET")}}, le caractère deux-points devra être échappé pour être inclus dans les paramètres de l'URL, par exemple, `party-date=2024-06-01T08%3A30`. Voir {{JSxRef("Global_Objects/encodeURI", "encodeURI()")}} pour une façon de faire cela.

Vous pouvez également obtenir et définir la valeur de la date en JavaScript à l'aide de la propriété `value` de {{DOMxRef("HTMLInputElement")}}&nbsp;:

```js
const dateControl = document.querySelector('input[type="datetime-local"]');
dateControl.value = "2017-06-01T08:30";
```

## Attributs supplémentaires

En complément des attributs communs à tous les éléments {{HTMLElement("input")}}, les champs `datetime-local` proposent les attributs suivants.

### `max`

La date/heure la plus avancée qui peut être saisie dans le contrôle. Si la [`value`](/fr/docs/Web/HTML/Reference/Elements/input#value) saisie dans l'élément est postérieure à cette date/heure, l'élément ne respectera pas [les contraintes de validation](/fr/docs/Web/HTML/Guides/Constraint_validation). Si la valeur de l'attribut `max` n'est pas une chaîne de caractères valide qui suit le format `YYYY-MM-DDTHH:mm`, l'élément n'a pas de valeur maximale.

Cette valeur doit définir une chaîne de caractères de date postérieure ou égale à celle définie par l'attribut `min`.

### `min`

La date/heure la plus ancienne qui peut être saisie&nbsp;; toute date/heure antérieure entraînera l'échec de [la validation des contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation). Si la valeur de l'attribut `min` n'est pas une chaîne de caractères valide qui suit le format `YYYY-MM-DDTHH:mm`, l'élément n'a pas de valeur minimale.

Cette valeur doit définir une chaîne de caractères de date antérieure ou égale à celle définie par l'attribut `max`.

### `step`

L'attribut `step` est un nombre qui indique la granularité à laquelle la valeur doit se conformer, ou la valeur spéciale `any` décrite ci-dessous. Seules les valeurs qui sont un nombre entier de pas à partir de la base de pas sont valides. La base de pas est [`min`](#min) si elle est définie, [`value`](/fr/docs/Web/HTML/Reference/Elements/input#value) sinon, ou `0` (l'époque Unix, `1970-01-01T00:00`) si aucune n'est fournie.

Pour les champs `datetime-local`, la valeur de `step` est donnée en secondes et est traitée comme un nombre de millisecondes égal à 1000 fois la valeur de `step` (la valeur numérique sous-jacente est en millisecondes). La valeur par défaut est 60, ce qui indique 1 minute.

Une chaîne de caractères `any` signifie qu'aucun pas n'est imposé, et toute valeur est autorisée (sous réserve d'autres contraintes, telles que [`min`](#min) et [`max`](#max)). En réalité, cela a le même effet que `60` pour les champs `datetime-local` car l'interface de sélection ne permet alors de choisir que des minutes entières.

> [!NOTE]
> Lorsque les données saisies par l'utilisateur·ice ne respectent pas la configuration du pas, {{Glossary("user agent", "l'agent utilisateur")}} peut arrondir à la valeur valide la plus proche, en privilégiant les nombres dans le sens positif lorsqu'il y a deux options aussi proches.

## Utiliser les contrôles `datetime-local`

Les champs de saisie de date et d'heure sont pratiques pour le·la développeur·euse&nbsp;; ils offrent une interface simple pour choisir des dates et des heures, et normalisent le format des données envoyées au serveur, quelle que soit la langue de l'utilisateur·ice. Cependant, il est important de prendre en compte vos utilisateur·ice·s. Ne leur demandez pas de saisir des données qui ne sont pas nécessaires au fonctionnement de votre application.

### Contrôler la taille du champ

`<input type="datetime-local">` ne prend pas en charge les attributs de dimensionnement des contrôles de formulaire comme [`size`](/fr/docs/Web/HTML/Reference/Elements/input#size). Vous devrez utiliser [CSS](/fr/docs/Web/CSS) pour personnaliser la taille de ces éléments.

### Paramétrer le fuseau horaire

Un point que le type de champ `datetime-local` ne prend pas en charge est la possibilité de définir le fuseau horaire et/ou la langue du contrôle de date et heure. Cette fonctionnalité était disponible avec le type `datetime`, mais ce type est désormais obsolète, ayant été retiré de la spécification. Les principales raisons de ce retrait sont le manque d'implémentation dans les navigateurs et des préoccupations concernant l'interface et l'expérience utilisateur. Il est plus simple d'avoir un ou plusieurs contrôles pour définir la date et l'heure, puis de gérer la langue dans un contrôle séparé.

Par exemple, si vous créez un système où l'utilisateur·ice est probablement déjà connecté·e, avec sa langue déjà définie, vous pouvez fournir le fuseau horaire dans un champ masqué ([`hidden`](/fr/docs/Web/HTML/Reference/Elements/input/hidden)). Par exemple&nbsp;:

```html
<input type="hidden" id="timezone" name="timezone" value="-08:00" />
```

À l'inverse, si vous deviez permettre à l'utilisateur·ice de saisir un fuseau horaire en plus de la date et de l'heure, vous pourriez utiliser un élément {{HTMLElement("select")}} pour lui permettre de choisir le bon fuseau horaire en sélectionnant un lieu parmi une liste de lieux&nbsp;:

```html
<select name="timezone" id="timezone">
  <option value="Pacific/Kwajalein">Eniwetok, Kwajalein</option>
  <option value="Pacific/Midway">Midway Island, Samoa</option>
  <option value="Pacific/Honolulu">Hawaii</option>
  <option value="Pacific/Marquesas">Taiohae</option>
  <!-- et ainsi de suite -->
</select>
```

Dans les deux cas, les valeurs de date/heure et de fuseau horaire seront envoyées au serveur comme des données distinctes, et il faudra ensuite les stocker correctement dans la base de données côté serveur.

## Validation

Par défaut, `<input type="datetime-local">` n'applique aucune validation aux valeurs saisies. Les interfaces utilisateur ne permettent généralement pas de saisir autre chose qu'une date et une heure — ce qui est utile — mais un·e utilisateur·ice peut tout de même laisser le champ vide et soumettre, ou saisir une date et/ou une heure invalide (par exemple le 33 décembre).

Vous pouvez utiliser [`min`](/fr/docs/Web/HTML/Reference/Elements/input#min) et [`max`](/fr/docs/Web/HTML/Reference/Elements/input#max) pour restreindre les dates disponibles (voir [Définir des dates et heures maximales et minimales](#définir_des_dates_et_heures_maximales_et_minimales)), et vous pouvez utiliser l'attribut [`required`](/fr/docs/Web/HTML/Reference/Elements/input#required) pour rendre la saisie de la date et de l'heure obligatoire. Ainsi, les navigateurs afficheront une erreur si vous essayez de soumettre une date en dehors de l'intervalle ou un champ vide.

Voyons un exemple&nbsp;; ici, nous avons défini des valeurs minimales et maximales pour la date et l'heure, et rendu le champ obligatoire&nbsp;:

```html
<form>
  <div>
    <label for="party">
      Veuillez choisir une date et une heure pour la fête (obligatoire, entre le
      1er juin, 8h30 et le 30 juin, 16h30)&nbsp;:
    </label>
    <input
      id="party"
      type="datetime-local"
      name="partydate"
      min="2017-06-01T08:30"
      max="2017-06-30T16:30"
      required />
    <span class="validity"></span>
  </div>
  <div>
    <input type="submit" value="Réserver !" />
  </div>
</form>
```

Si vous essayez d'envoyer le formulaire avec une date incomplète (ou en dehors de l'intervalle indiqué), le navigateur affichera une erreur. Essayez de tester l'exemple maintenant&nbsp;:

{{EmbedLiveSample("Validation", 600, 120)}}

Voici le CSS utilisé dans l'exemple ci-dessus. Ici, nous utilisons les propriétés CSS {{CSSxRef(":valid")}} et {{CSSxRef(":invalid")}} pour mettre en forme le champ selon que la valeur courante est valide ou non. Nous plaçons les icônes sur un {{HTMLElement("span")}} à côté du champ de saisie.

```css
div {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

label {
  display: inline-block;
  width: 300px;
}

input:invalid + span::after {
  content: "✖";
  padding-left: 5px;
}

input:valid + span::after {
  content: "✓";
  padding-left: 5px;
}
```

> [!WARNING]
> La validation des formulaires HTML par le navigateur _n'est pas un substitut_ aux scripts qui garantissent que les données saisies sont au bon format. Il est bien trop facile pour quelqu'un de modifier le HTML afin de contourner la validation, ou de la supprimer entièrement. Il est aussi possible de contourner totalement votre HTML et d'envoyer les données directement à votre serveur. Si votre code côté serveur ne valide pas les données reçues, des problèmes peuvent survenir lorsque des données mal formatées sont soumises (ou des données trop volumineuses, d'un type incorrect, etc.).

> [!NOTE]
> Avec un champ `datetime-local`, la valeur de la date est toujours normalisée au format `YYYY-MM-DDTHH:mm`.

## Exemples

### Utilisation simple de `datetime-local`

L'utilisation la plus simple de `<input type="datetime-local">` consiste en une combinaison basique d'un élément `<input>` et d'un élément {{HTMLElement("label")}}, comme ci-dessous&nbsp;:

```html
<form>
  <label for="party"
    >Veuillez saisir une date et une heure pour la réservation de votre
    fête&nbsp;:</label
  >
  <input id="party" type="datetime-local" name="party-date" />
</form>
```

{{EmbedLiveSample("Utilisation simple de `datetime-local`", 600, 40)}}

### Définir des dates et heures maximales et minimales

Vous pouvez utiliser les attributs [`min`](/fr/docs/Web/HTML/Reference/Elements/input#min) et [`max`](/fr/docs/Web/HTML/Reference/Elements/input#max) pour restreindre les dates et heures pouvant être choisies par l'utilisateur·ice. Dans l'exemple suivant, nous définissons une date et heure minimale à `2025-06-01T08:30` et une date et heure maximale à `2025-06-30T16:30`&nbsp;:

```html
<form>
  <label for="party"
    >Veuillez saisir une date et une heure pour la réservation de votre
    fête&nbsp;:</label
  >
  <input
    id="party"
    type="datetime-local"
    name="party-date"
    min="2025-06-01T08:30"
    max="2025-06-30T16:30" />
</form>
```

{{EmbedLiveSample("Définir des dates et heures maximales et minimales", 600, 40)}}

Seuls les jours de juin 2025 peuvent être sélectionnés. Selon le navigateur utilisé, les heures en dehors des valeurs définies peuvent ne pas être sélectionnables. Dans d'autres navigateurs, les dates et heures invalides sont sélectionnables mais correspondront à {{CSSxRef(":invalid")}} et {{CSSxRef(":out-of-range")}} et échoueront à la [validation](#validation).

Dans certains navigateurs (Safari), le sélecteur de date semble permettre n'importe quelle date, mais la valeur sera limitée à l'intervalle valide lorsqu'une date est sélectionnée.

L'intervalle valide inclut toutes les heures comprises entre les valeurs `min` et `max`&nbsp;; l'heure de la journée n'est contrainte que pour le premier et le dernier jour de l'intervalle.

> [!NOTE]
> Vous devriez pouvoir utiliser l'attribut [`step`](/fr/docs/Web/HTML/Reference/Elements/input#step) pour faire varier le nombre de jours sautés à chaque incrémentation de la date (par exemple, si vous souhaitez ne rendre sélectionnables que les samedis). Cependant, cela ne semble fonctionner efficacement dans aucune implémentation à l'heure actuelle.

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Valeur</a></strong></td>
      <td>
        Une chaîne de caractères représentant une date et une heure (dans le fuseau horaire local), ou vide.
      </td>
    </tr>
    <tr>
      <td><strong>Évènements</strong></td>
      <td>
        {{DOMxRef("HTMLElement/change_event", "change")}} et
        {{DOMxRef("Element/input_event", "input")}}
      </td>
    </tr>
    <tr>
      <td><strong>Attributs pris en charge</strong></td>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#autocomplete"><code>autocomplete</code></a>,
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#list"><code>list</code></a>,
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#readonly"><code>readonly</code></a>,
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#step"><code>step</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>Attributs IDL</strong></td>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#list"><code>list</code></a>,
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#value"><code>value</code></a>,
        <code>valueAsDate</code>,
        <code>valueAsNumber</code>
      </td>
    </tr>
    <tr>
      <td><strong>Interface DOM</strong></td>
      <td>{{DOMxRef("HTMLInputElement")}}</td>
    </tr>
    <tr>
      <td><strong>Méthodes</strong></td>
      <td>
        {{DOMxRef("HTMLInputElement.select", "select()")}},
        {{DOMxRef("HTMLInputElement.stepDown", "stepDown()")}},
        {{DOMxRef("HTMLInputElement.stepUp", "stepUp()")}}
      </td>
    </tr>
    <tr>
      <td><strong>Rôle ARIA implicite</strong></td>
      <td><a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">Pas de rôle correspondant <sup>(angl.)</sup></a></td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément générique {{HTMLElement("input")}} ainsi que l'interface DOM qui le porte, {{DOMxRef("HTMLInputElement")}}
- [`<input type="date">`](/fr/docs/Web/HTML/Reference/Elements/input/date) et [`<input type="time">`](/fr/docs/Web/HTML/Reference/Elements/input/time)
- [Les formats de date et d'heure utilisés en HTML](/fr/docs/Web/HTML/Guides/Date_and_time_formats)
- [Un tutoriel sur les sélecteurs de date et d'heure](/fr/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#sélection_de_date_et_heure)
