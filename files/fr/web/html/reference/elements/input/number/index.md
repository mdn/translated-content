---
title: <input type="number">
slug: Web/HTML/Reference/Elements/input/number
l10n:
  sourceCommit: c601bb5553d19f854792c78ab89624466ce2181d
---

Les éléments {{HTMLElement("input")}} dont l'attribut `type` vaut **`number`** permettent à un·e utilisateur·ice de saisir des nombres dans un formulaire. De tels contrôles incluent des mécanismes de validation natifs afin de rejeter les valeurs non-numériques.

Le navigateur peut agrémenter le contrôle avec des flèches afin d'incrémenter/décrémenter la valeur grâce à la souris ou avec le doigt.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;input type=&quot;number&quot;&gt;", "tabbed-shorter")}}

```html interactive-example
<label for="tentacles">Nombre de tentacules (10-100)&nbsp;:</label>

<input type="number" id="tentacles" name="tentacles" min="10" max="100" />
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

Sur les navigateurs qui ne prennent pas en charge les champs de type `number`, un champ `number` est ramené à un champ de type `text`.

## Valeur

Un nombre qui représente la valeur saisie dans le contrôle. Il est possible d'indiquer une valeur par défaut en utilisant l'attribut [`value`](/fr/docs/Web/HTML/Reference/Elements/input#value)&nbsp;:

```html
<input id="number" type="number" value="42" />
```

{{EmbedLiveSample("Valeur", 600, 40)}}

## Attributs supplémentaires

En complément des attributs pris en charge par l'ensemble des éléments {{HTMLElement("input")}}, les champs de type `number` peuvent utiliser les attributs suivants.

### `list`

La valeur de cet attribut est l'identifiant {{DOMxRef("Element.id", "id")}} d'un élément {{HTMLElement("datalist")}} situé dans le même document. L'élément {{HTMLElement("datalist")}} fournit une liste de valeurs prédéfinies à suggérer à l'utilisateur·ice pour ce champ. Toute valeur de la liste qui n'est pas compatible avec le [`type`](/fr/docs/Web/HTML/Reference/Elements/input#type) n'est pas incluse dans les options suggérées. Les valeurs fournies sont des suggestions et non des obligations&nbsp;: l'utilisateur·ice peut sélectionner une valeur de cette liste prédéfinie ou en fournir une différente.

### `max`

La valeur maximale qui peut être acceptée pour ce champ. Si la valeur du champ portée par l'attribut [`value`](/fr/docs/Web/HTML/Reference/Elements/input#value) dépasse ce seuil, l'élément [ne pourra être validé](/fr/docs/Web/HTML/Guides/Constraint_validation). Si la valeur de l'attribut `max` n'est pas un nombre, l'élément n'aura pas de maximum.

Cette valeur doit être supérieure ou égale à l'attribut `min`.

### `min`

La valeur minimale qui peut être acceptée pour ce champ. Si la valeur du champ portée par l'attribut [`value`](/fr/docs/Web/HTML/Reference/Elements/input#value) est inférieure à ce seuil, l'élément [ne pourra être validé](/fr/docs/Web/HTML/Guides/Constraint_validation). Si la valeur de l'attribut `min` n'est pas un nombre, l'élément n'aura pas de minimum.

Cette valeur doit être inférieure ou égale à l'attribut `max`.

### `placeholder`

L'attribut `placeholder` est une chaîne de caractères fournissant une courte indication à l'utilisateur·ice quant à l'information attendue dans le champ. Cet attribut devrait être un mot ou une phrase courte qui illustre le type de donnée attendu plutôt qu'un message explicatif. Le texte _ne doit pas_ contenir de saut à la ligne.

Si le contenu du contrôle respecte une directionnalité donnée ({{Glossary("LTR")}} ou {{Glossary("RTL")}}) et que le texte indicatif doit être présenté dans l'autre sens, il est possible d'utiliser l'algorithme de formatage bidirectionnel Unicode — voir [Comment utiliser les contrôles Unicode pour le texte bidirectionnel <sup>(angl.)</sup>](https://www.w3.org/International/questions/qa-bidi-unicode-controls) pour plus de détails.

> [!NOTE]
> On évitera, tant que faire se peut, d'utiliser l'attribut `placeholder`, car il n'est pas sémantiquement très utile pour expliquer le formulaire et car il peut causer certains problèmes avec le contenu. Voir [les libellés de `<input>`](/fr/docs/Web/HTML/Reference/Elements/input#libellés) pour plus d'informations.

### `readonly`

Un attribut booléen qui, lorsqu'il est présent, indique que le champ ne peut pas être édité par l'utilisateur·ice. Toutefois, la valeur de l'attribut `value` peut toujours être modifiée via du code JavaScript, qui définirait la propriété `value` de l'interface {{DOMxRef("HTMLInputElement")}}.

> [!NOTE]
> Un champ en lecture seule pouvant ne pas avoir de valeur, l'attribut `required` n'aura pas d'effet si l'attribut `readonly` est également présent.

### `step`

L'attribut `step` est un nombre qui définit la granularité à respecter pour la valeur, ou la valeur spéciale `any` (décrite ci-dessous). Seules les valeurs qui correspondent à un nombre entier de pas à partir de la base de pas sont valides. La base de pas est [`min`](#min) si elle est définie, [`value`](/fr/docs/Web/HTML/Reference/Elements/input#value) sinon, ou `0` si aucune n'est fournie.

La valeur de pas par défaut pour les champs `number` est `1`, ce qui permet uniquement la saisie d'entiers — _sauf si_ la base de pas n'est pas un entier.

Une chaîne de caractères `any` signifie qu'aucune contrainte de pas n'est appliquée et que n'importe quelle valeur est autorisée (sous réserve des autres contraintes, comme [`min`](#min) et [`max`](#max)).

> [!NOTE]
> Lorsque les données saisies par l'utilisateur·ice ne respectent pas la configuration du pas, {{Glossary("user agent", "l'agent utilisateur")}} peut arrondir à la valeur valide la plus proche, en privilégiant les nombres dans le sens positif lorsque deux options sont aussi proches l'une de l'autre.

## Utiliser les contrôles de saisie numérique

Le type de champ `number` doit uniquement être utilisé pour des nombres incrémentaux, en particulier lorsque les boutons d'incrémentation et de décrémentation améliorent l'expérience utilisateur. Le type `number` n'est pas adapté aux valeurs qui ne sont composées que de chiffres mais ne sont pas à proprement parler des nombres, comme les codes postaux dans de nombreux pays ou les numéros de carte bancaire. Pour des saisies non numériques, il est préférable d'utiliser un autre type de champ, comme [`<input type="tel">`](/fr/docs/Web/HTML/Reference/Elements/input/tel) ou un autre type {{HTMLElement('input')}} avec l'attribut [`inputmode`](/fr/docs/Web/HTML/Reference/Global_attributes/inputmode)&nbsp;:

```html
<input type="text" inputmode="numeric" pattern="\d*" />
```

Les éléments `<input type="number">` peuvent simplifier votre travail lors de la création de l'interface utilisateur et de la logique pour la saisie de nombres dans un formulaire. Lorsque vous créez un champ de type number avec la valeur `type` appropriée, vous bénéficiez d'une validation automatique du fait que le texte saisi est un nombre, ainsi que généralement d'un ensemble de boutons pour incrémenter ou décrémenter la valeur.

> [!WARNING]
> Logiquement, il ne devrait pas être possible de saisir des caractères autres que des chiffres dans un champ de type nombre. Certains navigateurs autorisent les caractères invalides, d'autres non&nbsp;; voir [le bogue Firefox 1398528 <sup>(angl.)</sup>](https://bugzil.la/1398528).

> [!NOTE]
> Un·e utilisateur·rice peut modifier votre code HTML en arrière-plan, votre site ne doit donc pas utiliser la validation côté client à des fins de sécurité. Vous devez vérifier côté serveur toute transaction dans laquelle la valeur fournie peut avoir des implications en matière de sécurité, quelle qu'en soit la nature.

De plus, les navigateurs mobiles peuvent adapter leur ergonomie en affichant un clavier adapté à la saisie de valeur numérique lorsque l'utilisateur·ice appuie sur un tel contrôle.

### Un contrôle numérique simple

Dans sa forme la plus simple, on peut implémenter un contrôle de saisie numérique avec le fragment HTML suivant&nbsp;:

```html
<label for="ticketNum">Nombre de tickets à acheter&nbsp;:</label>
<input id="ticketNum" type="number" name="ticketNum" value="0" />
```

{{EmbedLiveSample("Un contrôle numérique simple", 600, 40)}}

Un champ de type nombre est considéré comme valide lorsqu'il est vide ou lorsqu'un seul nombre est saisi, mais il est invalide dans les autres cas. Si l'attribut [`required`](/fr/docs/Web/HTML/Reference/Elements/input#required) est utilisé, le champ n'est plus considéré comme valide lorsqu'il est vide.

> [!NOTE]
> N'importe quel nombre est une valeur acceptable, tant qu'il s'agit d'[un nombre à virgule flottante valide](https://html.spec.whatwg.org/multipage/infrastructure.html#valid-floating-point-number) (c'est-à-dire, ni [NaN](/fr/docs/Web/JavaScript/Reference/Global_Objects/NaN) ni [Infinity](/fr/docs/Web/JavaScript/Reference/Global_Objects/Infinity)).

### Indicateurs de saisie

Il est parfois utile de fournir une indication sur la forme que doit prendre la donnée saisie. Cela peut être particulièrement important si la présentation de la page n'offre pas de libellés descriptifs pour chaque {{HTMLElement("input")}}. C'est là qu'interviennent les **indications de saisie**. Une indication de saisie est une valeur le plus souvent utilisée pour donner un indice sur le format attendu pour la valeur saisie. Elle s'affiche à l'intérieur du champ lorsque la propriété `value` de l'élément est `""`. Dès qu'une donnée est saisie dans le champ, l'indication disparaît&nbsp;; si le champ est vidé, l'indication réapparaît.

Ici, nous avons un champ de type nombre avec l'indication de saisie «&nbsp;Multiple de 10&nbsp;». Notez comment l'indication disparaît et réapparaît selon la présence ou l'absence de contenu dans le champ.

```html
<input type="number" placeholder="Multiple de 10" />
```

{{EmbedLiveSample("Indicateurs de saisie", 600, 40)}}

### Paramétrer la taille de l'incrément

Par défaut, les boutons haut et bas fournis pour incrémenter ou décrémenter la valeur augmentent ou diminuent la valeur de 1. Vous pouvez modifier ce comportement en ajoutant un attribut [`step`](/fr/docs/Web/HTML/Reference/Elements/input#step), dont la valeur est un nombre indiquant l'incrément. L'exemple ci-dessus contient une indication de saisie précisant que la valeur doit être un multiple de 10, il est donc logique d'ajouter un attribut `step` avec la valeur `10`&nbsp;:

```html
<input type="number" placeholder="Multiple de 10" step="10" />
```

{{EmbedLiveSample("Paramétrer la taille de l'incrément", 600, 40)}}

Dans cet exemple, on peut voir que les curseurs permettent d'augmenter ou de réduire la valeur de 10 (et non de 1). Il est toujours possible de saisir manuellement un nombre qui n'est pas un multiple de 10 mais la valeur sera alors considérée invalide.

### Définir un minimum et un maximum

Vous pouvez utiliser les attributs [`min`](/fr/docs/Web/HTML/Reference/Elements/input#min) et [`max`](/fr/docs/Web/HTML/Reference/Elements/input#max) pour définir une valeur minimale et une valeur maximale que le champ peut avoir. Par exemple, donnons à notre exemple une valeur minimale de `0` et une valeur maximale de `100`&nbsp;:

```html
<input type="number" placeholder="Multiple de 10" step="10" min="0" max="100" />
```

{{EmbedLiveSample("Définir un minimum et un maximum", 600, 40)}}

Dans cet exemple, les curseurs ne permettent pas de dépasser 100 ou de saisir une valeur inférieure à 0. Il est toujours possible de saisir manuellement un nombre en dehors de ces bornes mais la valeur sera alors considérée invalide.

### Autoriser les valeurs décimales

Un problème avec les champs de type nombre est que leur pas est de 1 par défaut. Si vous essayez de saisir un nombre avec une valeur décimale qui n'est pas un entier (comme «&nbsp;1.1&nbsp;»), il sera considéré comme invalide. Notez que des valeurs comme «&nbsp;1.0&nbsp;» sont considérées comme valides car elles sont numériquement équivalentes à des entiers. Si vous souhaitez saisir des valeurs avec des fractions, vous devrez l'indiquer dans la valeur de l'attribut `step` (par exemple, `step="0.01"` pour autoriser les décimales à deux chiffres après la virgule). Voici un exemple de base&nbsp;:

```html
<input type="number" placeholder="1.0" step="0.01" min="0" max="10" />
```

{{EmbedLiveSample("Autoriser les valeurs décimales", 600, 40)}}

Vous pouvez constater que cet exemple autorise toute valeur comprise entre `0.0` et `10.0`, avec deux chiffres après la virgule. Par exemple, «&nbsp;9.52&nbsp;» est valide, mais «&nbsp;9.521&nbsp;» ne l'est pas.

Si vous souhaitez autoriser n'importe quelle valeur décimale, vous pouvez définir la valeur de l'attribut `step` à `"any"`.

### Paramétrer la taille du contrôle

Les éléments {{HTMLElement("input")}} de type `number` ne prennent pas en charge les attributs de dimensionnement de formulaire comme [`size`](/fr/docs/Web/HTML/Reference/Elements/input#size). Vous devez utiliser le [CSS](/fr/docs/Web/CSS) pour modifier la taille de ces contrôles.

Par exemple, pour ajuster la largeur du champ afin qu'il soit juste assez large pour saisir un nombre à trois chiffres, on peut modifier notre HTML pour inclure un [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id) et raccourcir l'indication de saisie, car le champ serait trop étroit pour le texte utilisé jusqu'à présent&nbsp;:

```html
<input
  type="number"
  placeholder="x10"
  step="10"
  min="0"
  max="100"
  id="number" />
```

Ensuite, nous ajoutons du CSS pour réduire la largeur de l'élément avec le sélecteur d'`id` `#number`&nbsp;:

```css
#number {
  width: 3em;
}
```

Le résultat ressemblera à&nbsp;:

{{EmbedLiveSample("Paramétrer la taille du contrôle", 600, 40)}}

### Ajouter des valeurs suggérées

Vous pouvez fournir une liste d'options par défaut parmi lesquelles l'utilisateur·ice peut choisir en utilisant l'attribut [`list`](/fr/docs/Web/HTML/Reference/Elements/input#list), qui contient comme valeur le [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id) d'un élément {{HTMLElement("datalist")}}, lequel contient un élément {{HTMLElement("option")}} par valeur suggérée. La valeur de chaque `option` correspond à la suggestion pour la zone de saisie numérique.

```html
<input id="ticketNum" type="number" name="ticketNum" list="defaultNumbers" />
<span class="validity"></span>

<datalist id="defaultNumbers">
  <option value="10045678"></option>
  <option value="103421"></option>
  <option value="11111111"></option>
  <option value="12345678"></option>
  <option value="12999922"></option>
</datalist>
```

{{EmbedLiveSample("Ajouter des valeurs suggérées", 600, 40)}}

## Validation

Nous avons déjà mentionné plusieurs fonctionnalités de validation des champs `number`, mais récapitulons-les maintenant&nbsp;:

- Les éléments `<input type="number">` invalident automatiquement toute saisie qui n'est pas un nombre (ou vide, sauf si `required` est utilisé).
- Vous pouvez utiliser l'attribut [`required`](/fr/docs/Web/HTML/Reference/Elements/input#required) pour rendre une saisie vide invalide (autrement dit, le champ doit obligatoirement être rempli).
- Vous pouvez utiliser l'attribut [`step`](/fr/docs/Web/HTML/Reference/Elements/input#step) pour restreindre les valeurs valides à un certain pas (par exemple, des multiples de 10).
- Vous pouvez utiliser les attributs [`min`](/fr/docs/Web/HTML/Reference/Elements/input#min) et [`max`](/fr/docs/Web/HTML/Reference/Elements/input#max) pour limiter les valeurs valides à des bornes minimales et maximales.

L'exemple suivant illustre toutes ces fonctionnalités, ainsi que l'utilisation de CSS pour afficher des icônes de validité ou d'invalidité selon la valeur du champ&nbsp;:

```html
<form>
  <div>
    <label for="balloons">
      Quantité de ballons à commander (par 10)&nbsp;:
    </label>
    <input
      id="balloons"
      type="number"
      name="balloons"
      step="10"
      min="0"
      max="100"
      required />
    <span class="validity"></span>
  </div>
  <div>
    <input type="submit" />
  </div>
</form>
```

{{EmbedLiveSample("Validation", 600, 80)}}

Essayez d'envoyer le formulaire avec différentes valeurs invalides — aucune valeur&nbsp;; une valeur inférieure à 0 ou supérieure à 100&nbsp;; une valeur qui n'est pas un multiple de 10&nbsp;; ou une valeur non numérique — et observez comment les messages d'erreur du navigateur varient selon les cas.

Voici les règles CSS appliquées&nbsp;:

```css
div {
  margin-bottom: 10px;
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

Ici, on utilise les pseudo-classes CSS {{CSSxRef(":invalid")}} et {{CSSxRef(":valid")}} pour afficher une icône de validité ou d'invalidité en tant que contenu généré sur l'élément {{HTMLElement("span")}} adjacent, comme indicateur visuel de validité.

On place cela sur un élément `<span>` séparé pour plus de flexibilité. Certains navigateurs n'affichent pas toujours correctement le contenu généré sur certains types de champs de formulaire. (Voir, par exemple, la section sur la [validation de `<input type="date">`](/fr/docs/Web/HTML/Reference/Elements/input/date#validation).)

> [!WARNING]
> La validation HTML des formulaires n'est _pas_ un substitut aux scripts côté serveur qui garantissent que les données saisies sont dans le format approprié&nbsp;!
>
> Il est bien trop facile pour quelqu'un de modifier le HTML afin de contourner la validation ou de la supprimer entièrement. Il est aussi possible de contourner votre HTML et d'envoyer les données directement à votre serveur.
>
> Si votre code côté serveur ne valide pas les données reçues, une catastrophe peut survenir si des données mal formatées sont envoyées (ou des données trop volumineuses, d'un type incorrect, etc.).

### Utilisation d'un motif de validation

Les éléments `<input type="number">` ne prennent pas en charge l'attribut [`pattern`](/fr/docs/Web/HTML/Reference/Elements/input#pattern) qui permet de restreindre les valeurs selon une expression rationnelle.

La raison est que les champs de type nombre ne sont valides que s'ils ne contiennent que des nombres, et vous pouvez limiter le nombre minimal et maximal de chiffres valides à l'aide des attributs [`min`](/fr/docs/Web/HTML/Reference/Elements/input#min) et [`max`](/fr/docs/Web/HTML/Reference/Elements/input#max) (comme expliqué ci-dessus).

## Accessibilité

Le rôle implicite de l'élément `<input type="number">` est [`spinbutton`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role). Si le bouton rotatif n'est pas important pour votre contrôle de formulaire, il peut être préférable de _ne pas_ utiliser `type="number"`. Utilisez plutôt [`inputmode="numeric"`](/fr/docs/Web/HTML/Reference/Global_attributes/inputmode) avec un attribut [`pattern`](/fr/docs/Web/HTML/Reference/Attributes/pattern) qui limite les caractères aux chiffres et caractères associés. Avec `<input type="number">`, il existe un risque que les utilisateur·ice·s incrémentent accidentellement un nombre en essayant de faire autre chose. De plus, si les utilisateur·ice·s essaient de saisir autre chose qu'un nombre, il n'y a pas de retour explicite sur l'erreur.

Pensez aussi à utiliser l'attribut [`autocomplete`](/fr/docs/Web/HTML/Reference/Attributes/autocomplete) pour aider les utilisateur·ice·s à remplir les formulaires plus rapidement et avec moins de risques d'erreurs. Par exemple, pour activer le remplissage automatique sur un champ de code postal, utilisez `autocomplete="postal-code"`.

## Exemples

Nous avons déjà vu que, par défaut, l'incrément est de `1` et que vous pouvez utiliser l'attribut [`step`](/fr/docs/Web/HTML/Reference/Elements/input#step) pour autoriser la saisie de décimales. Regardons cela de plus près.

Dans l'exemple suivant, un formulaire permet de saisir la taille d'un·e utilisateur·ice. Par défaut, la taille est saisie en mètres, mais vous pouvez cliquer sur le bouton correspondant pour passer à la saisie en pieds et pouces. Le champ pour la taille en mètres accepte les décimales jusqu'à deux chiffres après la virgule.

{{EmbedLiveSample("Exemples", 600, 150)}}

Le code HTML ressemble à ceci&nbsp;:

```html
<form>
  <div class="metersInputGroup">
    <label for="meters">Saisir votre taille — en mètres&nbsp;:</label>
    <input
      id="meters"
      type="number"
      name="meters"
      step="0.01"
      min="0"
      placeholder="p. ex. 1.78"
      required />
    <span class="validity"></span>
  </div>
  <div class="feetInputGroup" style="display: none;">
    <span>Saisir votre taille — </span>
    <label for="feet">pieds&nbsp;:</label>
    <input id="feet" type="number" name="feet" min="0" step="1" />
    <span class="validity"></span>
    <label for="inches">pouces&nbsp;:</label>
    <input id="inches" type="number" name="inches" min="0" max="11" step="1" />
    <span class="validity"></span>
  </div>
  <div>
    <input
      type="button"
      class="meters"
      value="Saisir la taille en pieds/pouces" />
  </div>
  <div>
    <input type="submit" value="Envoyer" />
  </div>
</form>
```

Vous remarquerez que nous utilisons de nombreux attributs déjà abordés plus haut dans l'article. Comme nous voulons accepter une valeur en mètres avec des centimètres, nous avons défini la valeur de `step` à `0.01`, afin que des valeurs comme _1.78_ ne soient pas considérées comme invalides. Nous avons également ajouté un texte indicatif pour ce champ.

Nous avons masqué les champs pour les pieds et les pouces initialement en utilisant `style="display: none;"`, de sorte que les mètres soient le type de saisie par défaut.

Passons maintenant au CSS. Cela ressemble beaucoup à la mise en forme de validation vue précédemment&nbsp;; rien de particulier ici.

```css
div {
  margin-bottom: 10px;
  position: relative;
}

input[type="number"] {
  width: 100px;
}

input + span {
  padding-right: 30px;
}

input:invalid + span::after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
}

input:valid + span::after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
}
```

Enfin, voici le code JavaScript utilisé&nbsp;:

```js
const metersInputGroup = document.querySelector(".metersInputGroup");
const feetInputGroup = document.querySelector(".feetInputGroup");
const metersInput = document.querySelector("#meters");
const feetInput = document.querySelector("#feet");
const inchesInput = document.querySelector("#inches");
const switchBtn = document.querySelector('input[type="button"]');

feetInputGroup.style.display = "none"; // Masquer les champs pieds/pouces au départ

switchBtn.addEventListener("click", () => {
  if (switchBtn.getAttribute("class") === "meters") {
    switchBtn.setAttribute("class", "feet");
    switchBtn.value = "Saisir la taille en mètres";

    metersInputGroup.style.display = "none";
    feetInputGroup.style.display = "block";

    feetInput.setAttribute("required", "");
    inchesInput.setAttribute("required", "");
    metersInput.removeAttribute("required");

    metersInput.value = "";
  } else {
    switchBtn.setAttribute("class", "meters");
    switchBtn.value = "Saisir la taille en pieds";

    metersInputGroup.style.display = "block";
    feetInputGroup.style.display = "none";

    feetInput.removeAttribute("required");
    inchesInput.removeAttribute("required");
    metersInput.setAttribute("required", "");

    feetInput.value = "";
    inchesInput.value = "";
  }
});
```

Après avoir déclaré quelques variables, un gestionnaire d'évènements est ajouté au `button` pour gérer le mécanisme de bascule. Cela consiste à changer la `class` du bouton et le {{HTMLElement("label")}}, et à mettre à jour les valeurs affichées des deux groupes de champs lors de l'appui sur le bouton.

(Notez qu'il n'y a pas ici de conversion entre mètres et pieds/pouces, ce qu'une application web réelle ferait probablement.)

> [!NOTE]
> Lorsque l'utilisateur·ice clique sur le bouton, l'attribut `required` est retiré des champs que nous masquons, et l'attribut `value` est vidé. Cela permet d'envoyer le formulaire même si les deux groupes de champs ne sont pas remplis. Cela garantit aussi que le formulaire n'enverra pas de données non souhaitées.
>
> Si vous ne faisiez pas cela, il faudrait remplir à la fois les champs pieds/pouces **et** mètres pour pouvoir envoyer le formulaire&nbsp;!

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#valeur">Valeur</a></strong></td>
      <td>Un objet {{JSxRef("Number")}} représentant un nombre, ou une valeur vide</td>
    </tr>
    <tr>
      <td><strong>Évènements</strong></td>
      <td>
        {{DOMxRef("HTMLElement/change_event", "change")}} et
        {{DOMxRef("Element/input_event", "input")}}
      </td>
    </tr>
    <tr>
      <td><strong>Attributs pris en charges</strong></td>
      <td>
         <a href="/fr/docs/Web/HTML/Reference/Elements/input#autocomplete"><code>autocomplete</code></a>,
         <a href="/fr/docs/Web/HTML/Reference/Elements/input#list"><code>list</code></a>,
         <a href="/fr/docs/Web/HTML/Reference/Elements/input#placeholder"><code>placeholder</code></a>,
         <a href="/fr/docs/Web/HTML/Reference/Elements/input#readonly"><code>readonly</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>Attributs IDL</strong></td>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#list"><code>list</code></a>,
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#value"><code>value</code></a>,
        <code>valueAsNumber</code>
      </td>
    </tr>
    <tr>
      <td><strong>Interface DOM</strong></td>
      <td><p>{{DOMxRef("HTMLInputElement")}}</p></td>
    </tr>
    <tr>
      <td><strong>Méthodes</strong></td>
      <td>
        {{DOMxRef("HTMLInputElement.select", "select()")}},
        {{DOMxRef("HTMLInputElement.stepUp", "stepUp()")}},
        {{DOMxRef("HTMLInputElement.stepDown", "stepDown()")}}
      </td>
    </tr>
    <tr>
      <td><strong>Rôle ARIA implicite</strong></td>
      <td>
        <code><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role">spinbutton</a></code>
      </td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide sur les formulaires HTML](/fr/docs/Learn_web_development/Extensions/Forms)
- L'élément {{HTMLElement("input")}}
- L'élément `{{HTMLElement("input/tel", "&lt;input type=\"tel\"&gt;")}}`
