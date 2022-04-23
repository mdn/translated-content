---
title: Les contrôles de formulaire natifs
slug: Learn/Forms/Basic_native_form_controls
translation_of: Learn/Forms/Basic_native_form_controls
original_slug: Web/Guide/HTML/Formulaires/Les_blocs_de_formulaires_natifs
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/How_to_structure_a_web_form", "Learn/Forms/HTML5_input_types", "Learn/Forms")}}

Dans [l'article précédent](/fr/docs/Learn/Forms/How_to_structure_a_web_form), nous avons construit un exemple de formulaire web fonctionnel à l'aide de balises. Nous y avons vu certains des contrôles liés aux formulaires, les éléments communs pour organiser la structure et les bonnes pratiques pour l'accessibilité. Nous allons maintenant aborder les fonctionnalités des différents contrôles de formulaire, dans le détail. Nous étudierons l'ensemble des options disponibles pour recueillir les différents types de données. Dans cet article, nous verrons l'ensemble des contrôles de formulaire qui sont présents dans tous les navigateurs, depuis les débuts du Web.

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Notions informatiques de base et <a href="/fr/docs/Learn/HTML/Introduction_to_HTML">une compréhension élémentaire de HTML</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs&nbsp;:</th>
      <td>
        Comprendre en détail les différents contrôles de formulaire disponibles nativement dans les navigateurs pour le recueil de données. Savoir comment les mettre en œuvre en utilisant HTML.
      </td>
    </tr>
  </tbody>
</table>

Vous avez déjà découvert certains des éléments utilisés pour les formulaires&nbsp;: [`<form>`](/fr/docs/Web/HTML/Element/Form), [`<fieldset>`](/fr/docs/Web/HTML/Element/Fieldset), [`<legend>`](/fr/docs/Web/HTML/Element/Legend), [`<textarea>`](/fr/docs/Web/HTML/Element/Textarea), [`<label>`](/fr/docs/Web/HTML/Element/Label), [`<button>`](/fr/docs/Web/HTML/Element/Button), et [`<input>`](/fr/docs/Web/HTML/Element/Input). Cet article abordera&nbsp;:

- Les types de champ de saisie communs&nbsp;:
  - [`<input type="button">`](/fr/docs/Web/HTML/Element/Input/button),
  - [`<input type="checkbox">`](/fr/docs/Web/HTML/Element/Input/checkbox),
  - [`<input type="file">`](/fr/docs/Web/HTML/Element/Input/file),
  - [`<input type="hidden">`](/fr/docs/Web/HTML/Element/Input/hidden),
  - [`<input type="image">`](/fr/docs/Web/HTML/Element/Input/image),
  - [`<input type="password">`](/fr/docs/Web/HTML/Element/input/password),
  - [`<input type="radio">`](/fr/docs/Web/HTML/Element/Input/radio),
  - [`<input type="reset">`](/fr/docs/Web/HTML/Element/Input/reset),
  - [`<input type="submit">`](/fr/docs/Web/HTML/Element/Input/submit),
  - [`<input type="text">`](/fr/docs/Web/HTML/Element/Input/text).
- Certains des attributs communs à l'ensemble des contrôles de formulaire.

> **Note :** Les fonctionnalités discutées dans cet article sont prises en charge par l'ensemble des navigateurs. Ce n'est pas le cas pour tous les contrôles de formulaire. Nous verrons ces contrôles HTML5 plus récents dans les deux articles suivants. Si vous souhaitez consulter une référence plus avancée, vous devriez lire [la référence des éléments HTML relatifs aux formulaires](/fr/docs/Web/HTML/Element#forms), et notamment la référence exhaustive sur [les types d'éléments `<input>`](/fr/docs/Web/HTML/Element/Input).

## Les champs de saisie pour du texte

Les champs [`<input>`](/fr/docs/Web/HTML/Element/Input) pour saisir du texte sont les contrôles de formulaire les plus simples. Ils sont un outil pratique pour permettre à l'utilisatrice ou l'utilisateur de saisir n'importe quelle sorte de données. Nous avons déjà vu certains exemples simples.

> **Note :** Les champs texte des formulaires permettent de saisir du texte simple. Cela signifie qu'on ne peut pas les utiliser pour saisir du texte complexe (en gras, italique, etc.). Si vous rencontrez un éditeur de texte complexe sur le Web, il s'agira d'un contrôle construit autrement avec du HTML, CSS et JavaScript.

Tous les contrôles textuels partagent certains comportements&nbsp;:

- Ils peuvent être en lecture seule avec l'attribut [`readonly`](/fr/docs/Web/HTML/Element/Input#attr-readonly) (la personne qui utilise le site ne peut pas modifier cette valeur dans le formulaire mais celle-ci est bien envoyée avec le reste des données du formulaire) ou désactivés avec l'attribut [`disabled`](/fr/docs/Web/HTML/Element/Input#attr-disabled) (la valeur ne peut pas être modifiée et n'est pas envoyée avec le reste des données).
- L'attribut [`placeholder`](/fr/docs/Web/HTML/Element/Input#attr-placeholder) permet de fournir un texte indicatif qui apparaît à l'intérieur du champ pour décrire brièvement le but du champ.
- Leur taille peut être contrainte&nbsp;: la taille physique de la boîte formant le champ peut être ajustée avec l'attribut [`size`](/fr/docs/Web/HTML/Attributes/size) et le nombre maximum de caractères qui peuvent être saisis dans le champ peut être défini avec l'attribut [`maxlength`](/fr/docs/Web/HTML/Attributes/maxlength).
- La vérification orthographique peut être activée, si le navigateur la prend en charge, avec l'attribut [`spellcheck`](/fr/docs/Web/HTML/Global_attributes/spellcheck).

> **Note :** L'élément HTML [`<input>`](/fr/docs/Web/HTML/Element/Input) est différent des autres éléments HTML, car il peut prendre de nombreuses formes différentes selon la valeur de son attribut [`type`](/fr/docs/Web/HTML/Element/Input#attr-type). C'est ce même élément qu'on utilisera pour créer la plupart des types de champs de formulaire, que ce soit des textes sur une seule ligne, des dates et des heures, des contrôles sans texte comme des cases à cocher ou des boutons radio, des sélecteurs de couleurs, et des boutons.

### Un champ textuel sur une seule ligne

Pour créer un champ permettant de saisir du texte sur une seule ligne, on utilisera un élément [`<input>`](/fr/docs/Web/HTML/Element/Input) dont l'attribut [`type`](/fr/docs/Web/HTML/Element/Input#attr-type) vaut `text`, ou pour lequel l'attribut [`type`](/fr/docs/Web/HTML/Element/Input#attr-type) est absent (`text` étant la valeur par défaut). La valeur `text` est également la valeur utilisée par le navigateur au cas où la valeur indiquée pour l'attribut [`type`](/fr/docs/Web/HTML/Element/Input#attr-type) serait inconnue du navigateur (par exemple, si on utilise `type="color"` et que le navigateur ne prend pas en charge les sélecteurs de couleur natifs).

> **Note :** Vous pouvez trouver des exemples pour l'ensemble des types de champs avec du texte sur une seule ligne sur GitHub avec [`single-line-text-fields.html`](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/single-line-text-fields.html) ([voir le résultat correspondant](https://mdn.github.io/learning-area/html/forms/native-form-widgets/single-line-text-fields.html)).

Voici un exemple de champ texte simple sur une ligne&nbsp;:

```html
<input type="text" id="commentaire" name="commentaire" value="Je suis un champ texte">
```

Les champs texte sur une seule ligne n'ont qu'une contrainte&nbsp;: si on saisit du texte avec des sauts de ligne, le navigateur retirera les sauts de ligne avant d'envoyer les données au serveur.

_La capture d'écran qui suit illustre l'apparence des contrôles (par défaut, avec le focus et désactivés) pour les champs texte pour Firefox 71 et Safari sur macOS, et pour Chrome 79 et Edge 18 sur Windows 10._

![Capture d'écran avec la mise en forme par défaut, avec le focus et la désactivation pour un champ texte pour Firefox, Safari, Chrome et Edge.](disabled.png)

> **Note :** HTML5 a amélioré les différents champs textuels en ajoutant des valeurs spéciales pour l'attribut [`type`](/fr/docs/Web/HTML/Element/Input#attr-type) qui permettent d'imposer des contraintes de validation particulières et d'avoir d'autres fonctionnalités, par exemple pour la saisie d'URL ou de nombres. Nous verrons ceux-ci dans le prochain article, [les types de champs de formulaire HTML5](/fr/docs/Learn/Forms/HTML5_input_types).

#### Un champ pour saisir un mot de passe

Un des types de champ de formulaire, présent à l'origine, est destiné à la saisie de mots de passe avec le type `password`&nbsp;:

```html
<input type="password" id="pwd" name="pwd">
```

La valeur `password` n'ajoute pas de contraintes particulières sur le texte qui est saisi. En revanche, elle masque la valeur saisie dans le champ (avec des points ou des astérisques) afin qu'elle ne puisse pas être facilement lue par d'autres.

Il faut garder à l'esprit qu'il s'agit uniquement d'une fonctionnalité visuelle de l'interface utilisateur. Si le formulaire est envoyé en clair (une mauvaise pratique en termes de sécurité), un intermédiaire malveillant pourrait intercepter les données et voler les mots de passe (ainsi que les autres données du formulaire). Pour la saisie des mots de passe, et de façon générale, si on veut protéger les utilisatrices et utilisateurs du site, on fournira les formulaires (voire le reste du contenu) avec une connexion sécurisée (HTTPS) afin que la donnée soit chiffrée pour le transfert.

Les navigateurs peuvent sensibiliser à ces aspects de sécurité lors de l'envoi de données avec une connexion non-sécurisée et afficher des avertissements pour prévenir des risques et dissuader de saisir des données (dont les mots de passe) dans des formulaires non-sécurisés. Pour plus d'informations sur ce qu'implémente Firefox, voir [la saisie de mot de passe non-sécurisée](/fr/docs/Web/Security/Insecure_passwords).

### Les champs cachés

Un autre type de champ présent aux débuts de HTML est le type masqué (avec la valeur d'attribut `hidden`). Il permet de créer un champ de formulaire qui ne sera pas visible sur le site mais qui sera envoyé au serveur lors de l'envoi du formulaire (il peut, par exemple, permettre d'envoyer un horodatage au serveur pour indiquer l'heure de saisie du formulaire côté client). Étant masqué, le champ ne peut pas être vu ou édité de façon intentionnelle, il ne peut pas recevoir le focus et un outil de lecture d'écran ne le mentionnera pas.

```html
<input type="hidden" id="timestamp" name="timestamp" value="1286705410">
```

Pour créer un tel élément, il est nécessaire de lui fournir des attributs `name` et `value`. La valeur contenue dans ce champ peut être éditée dynamiquement avec JavaScript. Un champ de type `hidden` ne devrait pas avoir de libellé associé.

Les autres types de champ texte, comme [`<input type="search">`](/fr/docs/Web/HTML/Element/input/search), [`<input type="url">`](/fr/docs/Web/HTML/Element/input/url) et [`<input type="tel">`](/fr/docs/Web/HTML/Element/input/tel), ont été ajoutés avec HTML5. Nous les verrons dans le prochain tutoriel, [les types de champs de formulaire HTML5](/fr/docs/Learn/Forms/HTML5_input_types).

## Les cases à cocher et boutons radio

Ces éléments sélectionnables sont des contrôles dont on peut changer l'état en cliquant dessus ou sur les libellés correspondants. On y trouve les cases à cocher (<i lang="en">checkbox</i>) et les boutons radio. Ces deux types de champ utilisent l'attribut [`checked`](/fr/docs/Web/HTML/Element/Input/checkbox#attr-checked) qui indique si le contrôle est coché/sélectionné par défaut.

On notera que ces contrôles ne se comportent pas exactement comme les autres contrôles de formulaire. En effet, pour la plupart des champs de formulaires, lorsque le formulaire est envoyé, tous les champs ayant un attribut [`name`](/fr/docs/Web/HTML/Element/Input#attr-name) sont envoyés, même si aucune valeur n'a été saisie. Pour les cases à cocher et les boutons radio, leurs valeurs sont uniquement envoyées lorsqu'ils sont cochés/sélectionnés. S'ils ne sont pas cochés/sélectionnés, rien n'est envoyé, même leur nom. S'ils sont cochés/sélectionnés sans valeur indiquée, leur nom est envoyé avec la valeur `on`.

> **Note :** Vous pouvez retrouver les exemples de cette section sur GitHub sur le fichier [`checkable-items.html`](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/checkable-items.html) ([voir la démonstration correspondante](https://mdn.github.io/learning-area/html/forms/native-form-widgets/checkable-items.html)).

Pour améliorer l'utilisabilité et l'accessibilité, il est conseillé de regrouper les différentes options de chaque liste au sein d'un élément [`<fieldset>`](/fr/docs/Web/HTML/Element/Fieldset), avec un élément [`<legend>`](/fr/docs/Web/HTML/Element/Legend) fournissant une description de la liste. Chaque paire d'éléments [`<label>`](/fr/docs/Web/HTML/Element/Label)/[`<input>`](/fr/docs/Web/HTML/Element/Input) devrait former un élément de liste à part. Le libellé associé ([`<label>`](/fr/docs/Web/HTML/Element/Label)) est généralement placé immédiatement après le bouton radio ou la case à cocher, les instructions pour choisir parmi les groupes de cases à cocher ou de bouton radio sont généralement portées par le contenu de l'élément [`<legend>`](/fr/docs/Web/HTML/Element/Legend). Voir les exemples mentionnés ci-avant pour des illustrations.

### Cases à cocher

Une case à cocher est créée avec un élément [`<input>`](/fr/docs/Web/HTML/Element/Input) pour lequel l'attribut [`type`](/fr/docs/Web/HTML/Element/Input#attr-type) prend la valeur [`checkbox`](/fr/docs/Web/HTML/Element/Input/checkbox).

```html
<input type="checkbox" id="questionUn" name="abonnement" value="oui" checked>
```

Les cases à cocher qui portent sur le même sujet devraient partager le même attribut [`name`](/fr/docs/Web/HTML/Element/Input#attr-name). Ajouter l'attribut [`checked`](/fr/docs/Web/HTML/Element/Input/checkbox#attr-checked) à un tel élément permettra d'avoir la case cochée lors du chargement de la page. Cliquer sur la case ou sur le libellé associé permettra de cocher/décocher la case.

```html
<fieldset>
  <legend>Sélectionnez les légumes que vous aimez</legend>
  <ul>
    <li>
      <label for="carottes">Carottes</label>
      <input type="checkbox" id="carottes" name="legume" value="carottes" checked>
    </li>
    <li>
      <label for="haricots">Haricots</label>
      <input type="checkbox" id="haricots" name="legume" value="haricots">
    </li>
    <li>
      <label for="chou">Chou</label>
      <input type="checkbox" id="chou" name="legume" value="chou">
    </li>
  </ul>
</fieldset>
```

L'image qui suit montre l'apparence des cases à cocher dans leur état par défaut, avec le focus et dans l'état désactivé pour Firefox 71 et Safari 13 sur macOS et pour Chrome 79 et Edge 18 sur Windows 10&nbsp;:

![Aspect par défaut, avec le focus, et désactivé pour les cases à cocher de Firefox 71, Safari 13 sur macOS et Chrome 79 et Edge 18 sur Windows 10](checkboxes.png)

> **Note :** Les cases à cocher et les boutons radio qui ont l'attribut [`checked`](/fr/docs/Web/HTML/Element/Input/checkbox#attr-checked) lors du chargement pourront être ciblés par la pseudo-classe [`:default`](/fr/docs/Web/CSS/:default), même s'ils ne sont plus cochés/sélectionnés après. Les éléments qui sont cochés/sélectionnés peuvent être ciblés par la pseudo-classe [`:checked`](/fr/docs/Web/CSS/:checked).

En raison de l'aspect marche/arrêt des cases à cocher, celles-ci sont parfois utilisées pour réaliser des interrupteurs en modifiant la mise en forme par défaut. Vous pouvez [en voir un exemple ici](https://mdn.github.io/learning-area/html/forms/toggle-switch-example/) (avec [le code source correspondant](https://github.com/mdn/learning-area/blob/main/html/forms/toggle-switch-example/index.html)).

### Boutons radio

Un bouton radio est créé avec un élément [`<input>`](/fr/docs/Web/HTML/Element/Input) pour lequel l'attribut [`type`](/fr/docs/Web/HTML/Element/Input#attr-type) vaut `radio`&nbsp;:

```html
<input type="radio" id="soupe" name="plat" checked>
```

Il est possible de regrouper plusieurs boutons radio ensemble. S'ils partagent le même attribut [`name`](/fr/docs/Web/HTML/Element/Input#attr-name), ils feront partie du même groupe. Seul un bouton d'un groupe donné peut être sélectionné à la fois. Cela signifie que sélectionner une des options entraînera la désélection de toutes les autres. Lorsque le formulaire est envoyé, seule la valeur du bouton radio sélectionné du groupe est envoyée. Si aucun n'est sélectionné, l'ensemble du groupe est considéré dans un état inconnu et aucune valeur n'est envoyée avec le formulaire. Lorsqu'un des boutons radio d'un groupe a été sélectionné, la personne ne peut plus désélectionner l'ensemble des boutons sans réinitialiser le formulaire.

```html
<fieldset>
  <legend>Quel est votre plat préféré ?</legend>
  <ul>
    <li>
      <label for="soupe">Soupe</label>
      <input type="radio" id="soupe" name="plat" value="soupe" checked>
    </li>
    <li>
      <label for="curry">Curry</label>
      <input type="radio" id="curry" name="plat" value="curry">
    </li>
    <li>
      <label for="pizza">Pizza</label>
      <input type="radio" id="pizza" name="plat" value="pizza">
    </li>
  </ul>
</fieldset>
```

L'image qui suit illustre les boutons radio sélectionnés ou non, dans leur état normal, avec le focus, ou lorsqu'ils sont désactivés (on y voit les aspects pour Firefox 71 et Safari 13 sur macOS, Chrome 79 et Edge 18 sur Windows 10).

![L'aspect des boutons radio pour Firefox 71 et Safari 13 sur macOS et Chrome 79 et Edge 18 sur Windows 10](radios.png)

## Les boutons

Les boutons radio ne sont pas, à proprement parler, des boutons malgré leur nom. Voyons donc les éléments de formulaire qui permettent d'avoir des boutons&nbsp;! Il existe trois types de contrôle permettant de créer des boutons&nbsp;:

- `submit`
  - : Ce bouton envoie les données du formulaire au serveur. Utiliser des éléments [`<button>`](/fr/docs/Web/HTML/Element/Button) sans indiquer l'attribut `type` (ou en fournissant une valeur incorrecte pour celui-ci) créera un bouton d'envoi.
- `reset`
  - : Ce bouton réinitialise l'ensemble des contrôles du formulaire avec leurs valeurs par défaut.
- `button`
  - : Ces boutons n'ont pas d'effet natif et peuvent être personnalisés avec du code JavaScript.

On a également l'élément [`<button>`](/fr/docs/Web/HTML/Element/Button). Celui-ci porte un attribut `type` qui peut valoir `submit`, `reset`, ou `button` pour copier le comportement des trois types d'élément `<input>` mentionnés avant. La différence principale entre ces deux éléments est la plus grande facilité de mise en forme des éléments `<button>`.

> **Note :** Le contrôle de formulaire de type `image` s'affiche également comme un bouton, nous le verrons plus bas.

> **Note :** Vous pourrez trouver des exemples pour cette section sur GitHub avec le fichier [`button-examples.html`](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/button-examples.html) ([voir le résultat obtenu avec](https://mdn.github.io/learning-area/html/forms/native-form-widgets/button-examples.html)).

Voici des exemples pour chaque type de bouton `<input>`, accompagnés chacun de leur équivalent avec l'élément `<button>`.

### `submit`

```html
<button type="submit">
  Voici un <strong>bouton d'envoi</strong>
</button>

<input type="submit" value="Voici un bouton d'envoi">
```

### `reset`

```html
<button type="reset">
  Voici un <strong>bouton de réinitialisation</strong>
</button>

<input type="reset" value="Voici un bouton de réinitialisation">
```

### Générique

```html
<button type="button">
  Voici un <strong>bouton générique</strong>
</button>

<input type="button" value="Voici un bouton générique">
```

Les boutons se comporteront de la même façon, que ce soient des éléments [`<button>`](/fr/docs/Web/HTML/Element/Button) ou des éléments [`<input>`](/fr/docs/Web/HTML/Element/Input). Toutefois, comme vous pouvez le voir dans les exemples, les éléments [`<button>`](/fr/docs/Web/HTML/Element/Button) permettent d'utiliser du HTML dans leur contenu au sein des balises `<button>`. En revanche, les éléments [`<input>`](/fr/docs/Web/HTML/Element/Input) sont des éléments vides et le contenu affiché provient de l'attribut `value` qui peut uniquement être du texte simple.

L'image qui suit montre l'apparence par défaut, avec le focus et désactivée pour les contrôles de formulaire qui sont des boutons, avec Firefox 71 et Safari 13 sur macOS, Chrome 79 et Edge 18 sur Windows 10.

![Apparence par défaut, avec le focus et désactivée pour les contrôles de formulaire qui sont des boutons pour Firefox 71 et Safari 13 sur macOS et Chrome 79 et Edge 18 sur Windows 10](buttons.png)

### Bouton d'image

Le contrôle **de bouton d'image** s'affiche exactement comme un élément [`<img>`](/fr/docs/Web/HTML/Element/Img), à la différence près que lorsque la personne clique dessus, il se comporte comme un bouton d'envoi.

Un bouton d'image est créé avec un élément [`<input>`](/fr/docs/Web/HTML/Element/Input) dont l'attribut [`type`](/fr/docs/Web/HTML/Element/Input#attr-type) vaut `image`. Cet élément prend en charge le même ensemble d'attributs que l'élément [`<img>`](/fr/docs/Web/HTML/Element/Img) et les attributs relatifs aux éléments de formulaire.

```html
<input type="image" alt="Cliquez ici !" src="mon-img.png" width="80" height="30">
```

Si le bouton d'image est utilisé pour envoyer le formulaire, ce contrôle ne fournit pas sa valeur mais les coordonnées X / Y (relatives au coin en haut à gauche de coordonnées (0,0)) où le clic a eu lieu. Les coordonnées sont envoyées comme deux paires clé/valeur&nbsp;:

- La clé pour la valeur d'abscisse X sera la valeur de l'attribut [`name`](/fr/docs/Web/HTML/Element/Input#attr-name) suivie de la chaîne de caractères «&nbsp;`.x`&nbsp;».
- La clé pour la valeur d'ordonnée Y sera la valeur de l'attribut [`name`](/fr/docs/Web/HTML/Element/Input#attr-name) suivie de la chaîne de caractères «&nbsp;`.y`&nbsp;».

Ainsi, si vous cliquez sur l'image aux coordonnées `(123, 456)` et que le formulaire est envoyé avec la méthode `get`, vous pourrez voir les valeurs ajoutées de la façon suivante à l'URL&nbsp;:

```
http://example.com?pos.x=123&pos.y=456
```

Il s'agit d'une méthode pratique pour construire une carte interactive. Le détail de l'envoi et de la récupération de ces valeurs est décrit dans l'article [Envoyer des données de formulaire](/fr/docs/Learn/Forms/Sending_and_retrieving_form_data).

## Sélecteur de fichier

Il existe un dernier type d'élément `<input>` présent aux origines de HTML&nbsp;: le contrôle de sélection de fichier. Les formulaires permettent d'envoyer des fichiers à un serveur (cette action est détaillée dans l'article [Envoyer des données de formulaire](/fr/docs/Learn/Forms/Sending_and_retrieving_form_data)). Ce contrôle permet de choisir un ou plusieurs fichiers à envoyer.

Pour créer [un sélecteur de fichier](/fr/docs/Web/HTML/Element/Input/file), on utilisera un élément [`<input>`](/fr/docs/Web/HTML/Element/Input) dont l'attribut [`type`](/fr/docs/Web/HTML/Element/Input#attr-type) vaut `file`. Les types de fichier acceptés peuvent être limités avec l'attribut [`accept`](/fr/docs/Web/HTML/Element/Input#attr-accept). Pour permettre de sélectionner plusieurs fichiers, il faudra inclure l'attribut [`multiple`](/fr/docs/Web/HTML/Element/Input#attr-multiple).

### Exemple

Dans cet exemple, on crée un sélecteur de fichier pour des images. La personne qui utilise le formulaire peut ici choisir plusieurs fichiers.

```html
<input type="file" name="file" id="file" accept="image/*" multiple>
```

Sur certains appareils mobiles, le sélecteur de fichier peut accéder aux photos, vidéos et fichiers audios produits par l'appareil photo ou le micro en ajoutant des informations de captures avec l'attribut `accept`&nbsp;:

```html
<input type="file" accept="image/*;capture=camera">
<input type="file" accept="video/*;capture=camcorder">
<input type="file" accept="audio/*;capture=microphone">
```

## Attributs communs

De nombreux éléments de formulaire disposent d'attributs qui leur sont spécifiques. Toutefois, il y a un ensemble d'attributs communs à tous les éléments de formulaire. Nous en avons déjà rencontré certains, mais voici une liste des attributs communs et qui pourra servir de référence&nbsp;:

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Nom de l'attribut</th>
      <th scope="col">Valeur par défaut</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code><a href="/fr/docs/Web/HTML/Global_attributes/autofocus">autofocus</a></code>
      </td>
      <td><code>false<code></td>
      <td>
        Cet attribut booléen permet d'indiquer que l'élément devrait automatiquement recevoir le focus lors du chargement de la page. Seul un élément de formulaire pour un document donné peut avoir cet attribut actif.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/fr/docs/Web/HTML/Attributes/disabled">disabled</a></code>
      </td>
      <td><code>false</code></td>
      <td>
        Cet attribut booléen indique que la personne ne peut pas interagir avec l'élément. Si cet attribut n'est pas indiqué, l'élément hérite du comportement de l'élément parent (par exemple, <a href="/fr/docs/Web/HTML/Element/Fieldset"><code>&lt;fieldset&gt;</code></a>). S'il n'y a pas d'élément, parmi les parents, avec l'attribut <code>disabled</code> indiqué, l'élément est actif.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/fr/docs/Web/HTML/Element/Form">form</a></code>
      </td>
      <td></td>
      <td>
        L'élément <code>&lt;form&gt;</code> auquel le contrôle est associé. On utilisera cet attribut si l'élément du contrôle n'est pas un des enfants/descendants de l'élément du formulaire. La valeur de cet attribut doit être l'identifiant (la valeur de l'attribut <code>id</code>) d'un élément <a href="/fr/docs/Web/HTML/Element/Form"><code>&lt;form&gt;</code></a> du même document. Cela permet d'associer un contrôle à un formulaire, même s'il est situé dans un autre élément.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/fr/docs/Web/HTML/Element/Input#attr-name">name</a></code>
      </td>
      <td></td>
      <td>Le nom du champ de formulaire porté par l'élément. Il est envoyé avec les données du formulaire.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/fr/docs/Web/HTML/Element/Input#attr-value">value</a></code>
      </td>
      <td></td>
      <td>La valeur initiale de l'élément.</td>
    </tr>
  </tbody>
</table>

## Testez vos compétences&nbsp;!

Vous avez atteint la fin de cet article, mais avez-vous retenu les informations les plus importantes&nbsp;? Vous pouvez vous évaluer et vérifier que vous avez mémorisé ces informations avant d'aller plus loin — voir l'évaluation [Testez vos compétences&nbsp;: contrôles de formulaire de base](/fr/docs/Learn/Forms/Test_your_skills:_Basic_controls).

## Résumé

Dans cet article, nous avons abordé les contrôles de formulaire présents depuis les débuts de HTML et qui sont pris en charge par l'ensemble des navigateurs. Dans la prochaine section, nous verrons les valeurs plus récentes possibles pour l'attribut `type` qui ont été ajoutées en HTML5.

{{PreviousMenuNext("Learn/Forms/How_to_structure_a_web_form", "Learn/Forms/HTML5_input_types", "Learn/Forms")}}

## Dans ce module

- [Votre premier formulaire](/fr/docs/Learn/Forms/Your_first_form)
- [Comment structurer un formulaire web](/fr/docs/Learn/Forms/How_to_structure_a_web_form)
- **Les contrôles de formulaire natifs de base**
- [Les types de champs de formulaire HTML5](/fr/docs/Learn/Forms/HTML5_input_types)
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
