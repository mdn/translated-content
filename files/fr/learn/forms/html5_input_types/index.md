---
title: Les types de champs de formulaire HTML5
slug: Learn/Forms/HTML5_input_types
translation_of: Learn/Forms/HTML5_input_types
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/Basic_native_form_controls", "Learn/Forms/Other_form_controls", "Learn/Forms")}}

Dans [l'article précédent](/fr/docs/Learn/Forms/Basic_native_form_controls), nous avons vu l'élément [`<input>`](/fr/docs/Web/HTML/Element/Input) et les types qu'il pouvait avoir depuis les origines de HTML. Voyons ici, en détails, les fonctionnalités offertes par les contrôles de formulaire plus récents, dont certains ont été ajoutés en HTML5 et qui permettent de récupérer des données d'un certain type.

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Notions informatiques de base, une <a href="/fr/docs/Learn/HTML/Introduction_to_HTML">compréhension élémentaire de HTML</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs&nbsp;:</th>
      <td>
        Comprendre les types de champs de formulaire plus récemment disponibles et comment les implémenter en HTML.
      </td>
    </tr>
  </tbody>
</table>

> **Note :** La plupart des fonctionnalités évoquées dans cet article sont largement prises en charge parmi les différents navigateurs. Les exceptions à ceci seront notées dans l'article. Si vous souhaitez plus de détails sur la comptabilité des navigateurs, n'hésitez pas à consulter [la référence HTML sur les éléments de formulaire](/fr/docs/Web/HTML/Element#formulaires), et notamment la référence exhaustive sur [les types d'éléments `<input>`](/fr/docs/Web/HTML/Element/Input).

L'apparence native des contrôles de formulaire HTML peut être différente de celle voulue pour un design donné. Il arrive donc que les développeuses et développeurs construisent leurs propres contrôles de formulaire sur mesure. Nous aborderons ce sujet dans un tutoriel avancé&nbsp;: [Comment construire des contrôles de formulaire sur mesure](/fr/docs/Learn/Forms/How_to_build_custom_form_controls).

## Champ pour une adresse électronique

Pour ce type de champ, on utilisera la valeur `email` pour l'attribut [`type`](/fr/docs/Web/HTML/Element/Input#attr-type)&nbsp;:

```html
<input type="email" id="email" name="email">
```

Lorsque ce type est utilisé, la personne doit saisir une adresse mail avec un format valide dans le champ. Tout autre contenu entraînera l'affichage d'une erreur à l'envoi du formulaire. Voici une capture d'écran qui illustre une telle erreur.

![Un champ email avec une valeur invalide qui affiche le message "Please enter an email address." (veuillez saisir une adresse électronique valide)](email_address_invalid.png)

Il est aussi possible d'utiliser l'attribut [`multiple`](/fr/docs/Web/HTML/Attributes/multiple) pour le type `email` afin de permettre la saisie de plusieurs adresses (séparées par des virgules)&nbsp;:

```html
<input type="email" id="email" name="email" multiple>
```

Sur certains appareils, notamment les appareils tactiles avec les claviers logiciels qu'on peut trouver sur les smartphones, un clavier adapté pourra être affiché pour une saisie plus adaptée à la saisie d'adresses électroniques, par exemple en incluant la touche `@`. Voici par exemple une capture d'écran du clavier qu'on peut observer sur Firefox pour Android&nbsp;:

![Clavier de Firefox pour Android pour les champs de type email avec une arobase affichée par défaut.](fx-android-email-type-keyboard.jpg)

> **Note :** Vous pouvez trouver différents exemples de champs de formulaire textuels [sur cette page d'exemple](https://mdn.github.io/learning-area/html/forms/basic-input-examples/) ([le code source correspondant est aussi disponible](https://github.com/mdn/learning-area/blob/main/html/forms/basic-input-examples/index.html)).

Voici une autre bonne raison de privilégier ces types de champ plus récents qui permettent une meilleure ergonomie sur les différents appareils.

### Validation côté client

Comme on peut le voir ci-avant, les champs de type `email`, ainsi que les autres types d'éléments `<input>`, fournissent une validation _côté client_ qui est effectuée par le navigateur avant que les données soient envoyées au serveur. C'est _bien_ une aide utile permettant de guider les personnes pour remplir le formulaire correctement et cela peut faire gagner du temps&nbsp;: en sachant immédiatement que les données ne sont pas correctes, cela évite d'attendre un aller-retour avec le serveur.

En revanche, un tel mécanisme _ne devrait pas être considéré_ comme une mesure de protection suffisante&nbsp;! Votre application devrait toujours effectuer des contrôles de sécurité _côté serveur_ pour toute donnée qui proviendrait de l'extérieur (par exemple d'un formulaire). En effet, la validation côté client peut tout à fait être contournée et une personne malveillante pourra facilement envoyer des données incorrectes vers votre serveur. Pour en savoir plus sur de tels effets néfastes qui _pourraient_ se produire, vous pouvez lire [notre article sur la sécurité web](/fr/docs/Learn/Server-side/First_steps/Website_security). L'implémentation de la validation côté serveur est en dehors du périmètre de ce module, mais il s'agit de quelque chose qu'il faut garder à l'esprit.

On notera aussi que `a@b` est une adresse électronique valide pour les contraintes fournies par défaut. En effet, par défaut, un champ `email` permet de saisir des adresses intranet. Pour implémenter un comportement de validation différent, on pourra utiliser l'attribut [`pattern`](/fr/docs/Web/HTML/Attributes/pattern) et personnaliser les messages d'erreur affichés. Nous verrons ces fonctionnalités dans l'article [Validation d'un formulaire côté client](/fr/docs/Learn/Forms/Form_validation).

> **Note :** Si la valeur saisie n'est pas une adresse électronique, la pseudo-classe [`:invalid`](/fr/docs/Web/CSS/:invalid) s'appliquera, et la propriété du DOM [`validityState.typeMismatch`](/fr/docs/Web/API/validityState/typeMismatch) renverra `true`.

## Champ de recherche

Les champs de recherche permettent de créer des boîtes de recherches pour les sites et applications web. Pour créer un tel champ, on utilisera la valeur `search` pour l'attribut [`type`](/fr/docs/Web/HTML/Element/Input#attr-type)&nbsp;:

```html
<input type="search" id="search" name="search">
```

La différence principale entre un champ `text` et un champ `search` porte notamment sur la mise en forme appliquée par le navigateur. Souvent, les champs de recherche sont affichés avec des coins arrondis et ils contiennent parfois une icône «&nbsp;Ⓧ&nbsp;» qui permet de réinitialiser la valeur saisie lorsqu'on clique dessus. De plus, pour les appareils avec des claviers logiciels, la touche Entrée pourra avoir un libellé adapté comme «&nbsp;**rechercher**&nbsp;», ou afficher une icône en forme de loupe.

Les captures d'écran qui suivent montrent l'aspect d'un champ de recherche non vide pour Firefox 71, Safari 13, et Chrome 79 sur macOS, et pour Edge 18 et Chrome 79 sur Windows 10. On notera que l'icône de réinitialisation apparaît uniquement lorsque l'une valeur est présente dans le champ et qu'à l'exception de Safari, elle s'affiche uniquement lorsque le champ a le focus.

![Captures d'écran de champs de recherches sur plusieurs plateformes.](search_focus.png)

On notera aussi une fonctionnalité intéressante pour les champs `search`&nbsp;: les valeurs saisies sont automatiquement enregistrées et fournies comme suggestions à l'auto-complétion pour les différentes pages d'un même site web. Cette fonctionnalité est désormais présente dans la plupart des navigateurs récents.

## Champ pour un numéro de téléphone

Pour créer un champ permettant spécifiquement de saisir un numéro de téléphone, on pourra utiliser la valeur `tel` pour l'attribut [`type`](/fr/docs/Web/HTML/Element/Input#attr-type)&nbsp;:

```html
<input type="tel" id="tel" name="tel">
```

Lorsqu'on utilise un tel champ avec un clavier logiciel, la plupart des appareils fourniront un clavier numérique. Aussi, bien que cela dégrade la sémantique, on pourra se servir de cet aspect pour saisir une valeur numérique quelconque (voir après pour les champs de type `numeric` qui ont certaines particularités).

Voici comme exemple une capture d'écran du clavier de Firefox pour Android&nbsp;:

![Capture d'écran du clavier de Firefox pour Android pour un champ de numéro de téléphone.](fx-android-tel-type-keyboard.jpg)

En raison de la diversité des formats de numéro de téléphone dans le monde, ce type de champ n'applique pas de contrainte sur la valeur saisie par la personne (autrement dit, cette valeur peut contenir des lettres, etc.).

Comme mentionné précédemment, l'attribut [`pattern`](/fr/docs/Web/HTML/Attributes/pattern) peut être utilisé afin d'appliquer certaines contraintes, nous le verrons plus en détails dans [l'article sur la validation des formulaires côté client](/fr/docs/Learn/Forms/Form_validation).

## Champ pour une URL

Pour créer un champ qui permette spécifiquement de saisir des URL, on utilisera la valeur `url` pour l'attribut [`type`](/fr/docs/Web/HTML/Element/Input#attr-type)&nbsp;:

```html
<input type="url" id="url" name="url">
```

Ce type de champ ajoute certaines contraintes de validation. Le navigateur affichera une erreur si aucun protocole (par exemple `https:`) n'est saisi ou si l'URL est mal formée. Pour les appareils avec un clavier logiciel, le clavier affiché par défaut contiendra des touches pour les deux-points, le point, et la barre oblique.

Voici un exemple (tiré de Firefox pour Android)&nbsp;:

![Le clavier de saisie d'une URL pour Firefox pour Android, avec une touche pour la barre oblique.](fx-android-url-type-keyboard.jpg)

> **Note :** Une URL bien formée ne veut pas nécessairement dire que l'emplacement indiqué par cette adresse existe&nbsp;!

## Champ numérique

Pour créer un contrôle permettant de saisir des nombres, on utilisera un élément [`<input>`](/fr/docs/Web/HTML/Element/Input) dont l'attribut [`type`](/fr/docs/Web/HTML/Element/Input#attr-type) vaut `number`. Ce contrôle ressemble à un champ textuel mais permet uniquement de saisir des nombres (y compris des nombres décimaux). Généralement, un tel contrôle fournit des boutons d'incrément ou de décrément pour augmenter ou réduire la valeur. Pour les appareils avec un clavier logiciel, c'est généralement un clavier numérique qui est affiché pour saisir dans un tel champ.

La capture d'écran qui suit (tirée de Firefox pour Android) illustre ce cas&nbsp;:

![Clavier de Firefox pour Android avec, par défaut, des chiffres, virgule et point.](fx-android-number-type-keyboard.jpg)

Pour les champs de type `number`, on peut contraindre les valeurs minimales et maximales acceptées avec les attributs respectifs [`min`](/fr/docs/Web/HTML/Element/Input#attr-min) et [`max`](/fr/docs/Web/HTML/Element/Input#attr-max).

On peut aussi utiliser l'attribut `step` qui permet de définir le pas (pour l'incrément et le décrément) utilisé avec les boutons pour augmenter/réduire la valeur. Par défaut, un champ numérique ne sera valide qu'avec un nombre entier. Pour permettre la saisie de valeurs décimales, on indiquera [`step="any"`](/fr/docs/Web/HTML/Attributes/step). Si cet attribut est absent, `step` aura `1` comme valeur par défaut, ce qui signifie que seuls les nombres entiers seront considérés comme valides.

Prenons quelques exemples. Dans le premier, on crée un contrôle numérique où la valeur est restreinte entre `1` et `10`, et où les boutons d'incrément/décrément utilisent un pas de `2`.

```html
<input type="number" name="age" id="age" min="1" max="10" step="2">
```

Dans ce deuxième exemple, on crée un contrôle numérique où la valeur doit être comprise entre `0` et `1` (inclus), et où les boutons d'incrément/décrément utilisent un pas de `0.01`.

```html
<input type="number" name="change" id="centimes" min="0" max="1" step="0.01">
```

Un champ de type `number` sera pertinent lorsque l'intervalle des valeurs valides est limité (par exemple pour l'âge ou la taille d'une personne). Si l'intervalle est trop grand pour qu'une augmentation incrémentale soit pertinente (par exemple pour un code postal), un champ `tel` pourra être une option plus adaptée, car le contrôle ne présente pas les boutons d'incrément/décrément mais affiche un clavier numérique (pour l'aspect relatif au clavier présenté, on pourra aussi exploiter l'attribut [`inputmode`](/fr/docs/Web/HTML/Global_attributes/inputmode)).

## Curseurs

Une autre méthode permettant de sélectionner un nombre consiste à utiliser un **curseur**. On voit souvent de tels contrôles sur les sites de vente pour sélectionner un prix maximum. Voyons un exemple concret pour illustrer&nbsp;:

{{EmbedGHLiveSample("learning-area/html/forms/range-example/index.html", '100%', 200)}}

En termes d'utilisation, les curseurs sont moins précis que les champs dans lesquels on saisit une valeur. Aussi, on les utilise lorsque la valeur _précise_ n'est pas particulièrement importante.

Pour créer un curseur, on utilisera un élément [`<input>`](/fr/docs/Web/HTML/Element/Input) dont l'attribut [`type`](/fr/docs/Web/HTML/Element/Input#attr-type) vaut `range`. Le curseur peut alors être déplacé le long de la piste avec une souris, au doigt pour les interfaces tactiles, ou avec les flèches du clavier.

Il est important de configurer correctement le curseur en utilisant les attributs [`min`](/fr/docs/Web/HTML/Attributes/min), [`max`](/fr/docs/Web/HTML/Attributes/max), et [`step`](/fr/docs/Web/HTML/Attributes/step) qui paramètrent respectivement le minimum, le maximum et le pas d'incrément.

Voyons le code utilisé pour notre exemple ci-avant. Pour commencer, le fragment HTML&nbsp;:

```html
<label for="price">Sélectionnez un prix maximal : </label>
<input type="range" name="price" id="price" min="50000" max="500000" step="100" value="250000">
<output class="price-output" for="price"></output>
```

Dans cet exemple, on a un curseur qui peut couvrir l'intervalle entre `50000` et `500000` et dont le pas vaut 100. Ici, on a fourni la valeur par défaut de `250000` grâce à l'attribut `value`.

Un des inconvénients des curseurs est l'absence de retour visuel pour indiquer la valeur courante du contrôle. C'est pour ça que nous avons ajouté un élément [`<output>`](/fr/docs/Web/HTML/Element/output) qui contient la valeur courante. On pourrait afficher la valeur saisie ou le résultat d'un calcul dans n'importe quel élément, mais `<output>` est spécial (à l'instar de `<label>`) et possède un attribut `for` qui permet de l'associer à un ou plusieurs éléments d'où proviendrait la valeur affichée à l'intérieur.

Pour effectivement afficher la valeur courante et la mettre à jour lorsqu'elle est modifiée par l'utilisatrice ou l'utilisateur, on doit utiliser JavaScript et ces quelques lignes&nbsp;:

```js
const price = document.querySelector('#price');
const output = document.querySelector('.price-output');

output.textContent = price.value;

price.addEventListener('input', function() {
  output.textContent = price.value;
});
```

Ici, on a deux variables qui référencent le contrôle `range` et l'élément `output`. On remplit immédiatement le contenu ([`textContent`](/fr/docs/Web/API/Node/textContent)) de l'élément `<output>` avec la valeur courante (`value`) du contrôle. Enfin, on ajoute un gestionnaire d'évènement qui permet de gérer les mises à jour lorsque le curseur est déplacé&nbsp;: dans ce cas, on met à jour la valeur de `textContent` de l'élément `<output>` avec la nouvelle valeur.

> **Note :** Un tutoriel couvrant ce sujet est disponible (en anglais) sur CSS Tricks&nbsp;: [L'élément `<output>`](https://css-tricks.com/the-output-element/).

## Sélecteurs de date et d'heure

La récupération de valeurs temporelles a longtemps été un cauchemar de développement web. Pour de telles valeurs, il est important de fournir une interface utilisateur qui permette de sélectionner des dates sans que la personne ait à ouvrir une autre application de calendrier et sans imposer un format de saisie qui soit délicat à expliquer et à analyser (par exemple, devrait-on écrire `1999/12/31, 23:59` ou `12/31/99T11:59PM`&nbsp;?).

Les contrôles de date HTML permettent de gérer ce type de données en fournissant des interfaces graphiques adaptées et en utilisant un format de données normalisé.

Pour créer un contrôle permettant de saisir une date et/ou une heure, on utilisera un élément [`<input>`](/fr/docs/Web/HTML/Element/Input) avec une valeur appropriée pour l'attribut [`type`](/fr/docs/Web/HTML/Element/Input#attr-type), qui dépendra selon qu'on veuille saisir une date, une heure ou les deux. Voici un exemple qui utilise des éléments [`<select>`](/fr/docs/Web/HTML/Element/select) en cas de recours pour les navigateurs qui ne prendraient pas en charge ces types de champ&nbsp;:

{{EmbedGHLiveSample("learning-area/html/forms/datetime-local-picker-fallback/index.html", '100%', 200)}}

Voyons rapidement les différents types disponibles. On notera que l'utilisation de ces types est plutôt complexe, notamment en termes de compatibilité des navigateurs (voir ci-après). Pour plonger plus en détails, n'hésitez pas à suivre les liens vers les pages de référence pour chacun des types qui incluent différents exemples.

### `datetime-local`

[`<input type="datetime-local">`](/fr/docs/Web/HTML/Element/input/datetime-local) crée un contrôle permettant d'afficher et de sélectionner une date avec une heure sans information sur le fuseau horaire.

```html
<input type="datetime-local" name="datetime" id="datetime">
```

### `month`

[`<input type="month">`](/fr/docs/Web/HTML/Element/input/month) crée un contrôle permettant d'afficher et de sélectionner un mois d'une année.

```html
<input type="month" name="month" id="month">
```

### `time`

[`<input type="time">`](/fr/docs/Web/HTML/Element/input/time) crée un contrôle permettant d'afficher et de sélectionner une heure (avec des minutes). Bien que la valeur puisse être _affichée_ au format sur 12 heures, la _valeur sous-jacente_ est représentée dans un format sur 24 heures.

```html
<input type="time" name="time" id="time">
```

### `week`

[`<input type="week">`](/fr/docs/Web/HTML/Element/input/week) crée un contrôle permettant d'afficher et de sélectionner une semaine dans une année.

Les semaines commencent le lundi et vont jusqu'au dimanche. De plus, la première semaine de chaque année contient le premier jeudi de cette année (la première semaine peut donc ne pas inclure le premier jour de l'année ou inclure les derniers jours de l'année précédente).

```html
<input type="week" name="week" id="week">
```

### Restreindre les valeurs de date/heure

Tous les contrôles de date et d'heure peuvent être restreints avec les attributs [`min`](/fr/docs/Web/HTML/Attributes/min), [`max`](/fr/docs/Web/HTML/Attributes/max), et éventuellement [`step`](/fr/docs/Web/HTML/Attributes/step) (dont la valeur varie en fonction du type).

```html
<label for="monDate">Quand êtes-vous disponible cet été&nbsp;?</label>
<input type="date" name="monDate" min="2013-06-01" max="2013-08-31" step="7" id="monDate">
```

## Contrôle de sélection de couleur

Les couleurs sont toujours difficiles à gérer en raison des différents formats qui existent pour les représenter&nbsp;: RGB en décimal ou en hexadécimal, HSL, les mots-clés, etc.

Un contrôle de sélection de couleur peut être créé avec l'élément [`<input>`](/fr/docs/Web/HTML/Element/Input) dont l'attribut [`type`](/fr/docs/Web/HTML/Element/Input#attr-type) vaut `color`&nbsp;:

```html
<input type="color" name="color" id="color">
```

Lorsqu'un tel contrôle est pris en charge, cliquer sur le contrôle permettra d'afficher le sélecteur de couleur par défaut du système d'exploitation. La capture d'écran qui suit montre le résultat obtenu avec Firefox pour macOS&nbsp;:

![Capture d'écran du sélecteur de couleur pour Firefox pour macOS.](fx-macos-color.jpg)

Voici un exemple interactif pour essayer&nbsp;:

{{EmbedGHLiveSample("learning-area/html/forms/color-example/index.html", '100%', 200)}}

La valeur renvoyée par ce contrôle est toujours exprimée au format hexadécimal sur 6 chiffres, en minuscules.

## Testez vos compétences&nbsp;!

Vous avez atteint la fin de cet article, mais avez-vous retenu les informations les plus importantes&nbsp;? Vous pouvez vous évaluer et vérifier que vous avez mémorisé ces informations avant d'aller plus loin — voir l'évaluation [Testez vos compétences&nbsp;: contrôles HTML5](/fr/docs/Learn/Forms/Test_your_skills:_HTML5_controls).

## Résumé

Cela marque la fin de notre tour des types de champs de formulaire HTML5. Il existe certains types de contrôle qui sont difficilement utilisables en combinaison en raison de leur comportement très spécifique, mais que vous devriez connaître — nous les détaillerons dans l'article suivant.

{{PreviousMenuNext("Learn/Forms/Basic_native_form_controls", "Learn/Forms/Other_form_controls", "Learn/Forms")}}

## Dans ce module

- [Votre premier formulaire](/fr/docs/Learn/Forms/Your_first_form)
- [Comment structurer un formulaire web](/fr/docs/Learn/Forms/How_to_structure_a_web_form)
- [Les contrôles de formulaire natifs de base](/fr/docs/Learn/Forms/Basic_native_form_controls)
- **Les types de champs de formulaire HTML5**
- [Les autres contrôles de formulaire](/fr/docs/Learn/Forms/Other_form_controls)
- [Mettre en forme les formulaires web](/fr/docs/Learn/Forms/Styling_web_forms)
- [Mise en forme avancée des formulaires](/fr/docs/Learn/Forms/Advanced_form_styling)
- [Pseudo-classes CSS liées à l'interface utilisateur](/fr/docs/Learn/Forms/UI_pseudo-classes)
- [Validation du formulaire côté client](/fr/docs/Learn/Forms/Form_validation)
- [Envoyer des données de formulaire](/fr/docs/Learn/Forms/Sending_and_retrieving_form_data)

### Sujets avancés

- [Comment construire des contrôles de formulaire sur mesure](/fr/docs/Learn/Forms/How_to_build_custom_form_controls)
- [Envoyer des formulaires avec JavaScript](/fr/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Tableau de compatibilité des contrôles de formulaire](/fr/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
