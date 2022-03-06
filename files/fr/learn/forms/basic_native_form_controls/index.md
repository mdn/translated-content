---
title: Les widgets de formulaire natifs
slug: Learn/Forms/Basic_native_form_controls
tags:
  - Contrôles
  - Exemple
  - Formulaires
  - Guide
  - HTML
  - Web
  - Widgets
translation_of: Learn/Forms/Basic_native_form_controls
original_slug: Web/Guide/HTML/Formulaires/Les_blocs_de_formulaires_natifs
---
{{LearnSidebar}}
{{PreviousMenuNext("Web/Guide/HTML/Formulaires/Comment_structurer_un_formulaire_HTML", "Web/Guide/HTML/Formulaires/Envoyer_et_extraire_les_données_des_formulaires", "Web/Guide/HTML/Formulaires")}}

Nous examinerons maintenant en détail les fonctionnalités des divers widgets pour formulaires, en soulignant les options disponibles pour collecter les différents types de données. Ce guide vise à être exhaustif en couvrant tous les widgets natifs de formulaire disponibles.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis :</th>
      <td>
        Notions concernant les ordinateurs et les
        <a href="/fr/docs/Apprendre/HTML/Introduction_à_HTML"
          >connaissances de base du HTML</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif :</th>
      <td>
        Comprendre quels sont les types de widgets de forme native disponibles
        dans les navigateurs pour collecter des données et comment les mettre en
        œuvre en se servant du HTML.
      </td>
    </tr>
  </tbody>
</table>

Ici, nous nous attarderons sur les widgets de formulaires intégrés aux navigateurs, mais comme les formulaires HTML restent très circonscrits et que la qualité des implémentations peut être très différente d'un navigateur à l'autre, les développeurs web construisent parfois leurs propres widgets de formulaires — voir [Comment construire des widgets de formulaires personnalisés](/fr/docs/Web/Guide/HTML/Formulaires/Comment_construire_des_widgets_de_formulaires_personnalisés) plus loin dans ce même module pour plus d'idées à ce propos.

> **Note :** La plupart des fonctionnalités discutées dans cet article sont abondamment explicitées dans les navigateurs ; nous soulignerons les exceptions à ce sujet. Si vous voulez plus de précisions, consultez les [références aux éléments de formulaires HTML](/fr/docs/Web/HTML/Element#Forms), et en particulier nos références détaillées aux [types \<input>](/fr/docs/Web/HTML/Element/input).

## Attributs communs

Beaucoup d'éléments utilisés pour définir les widgets de formulaire ont leurs propres attributs. Cependant, il y a un jeu d'attributs communs à tous les éléments de formulaire. Il vous permettent un certain contrôle sur ces widgets. Voici une liste de ces attributs communs :

| Nom de l'attribut | Valeur par défaut | Description                                                                                                                                                                                                                                                                                                                                                                 |
| ----------------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `autofocus`       | (_false_)         | Cet attribut, booléen, vous permet de spécifier que cet élément doit avoir automatiquement le focus au chargement de la page, sauf si l'utilisateur prend la main, en faisant, par exemple, une saisie dans un autre contrôle. Seul un élément associé à un formulaire peut avoir cet attribut activé.                                                                      |
| `disabled`        | (_false_)         | Cet attribut est un booléen. Il indique que l'utilisateur ne peut pas avoir d'action sur cet élément. S'il n'est pas précisé, l'élément hérite son comportement de l'élément contenant, comme, {{HTMLElement("fieldset")}} ; si le conteneur n'a pas d'attribut `disabled` mis, l'élément est activé.                                                              |
| `form`            |                   | L'élément <form> auquel le widget est associé. La valeur de l'attribut doit être l'attribut `id` d'un élément {{HTMLElement("form")}} dans le même document. En théorie, il vous permet de mettre un widget en dehors d'un élément {{HTMLElement("form")}}. En pratique, toutefois, il n'y a pas de navigateur qui prenne en charge cette fonctionnalité. |
| `name`            |                   | Le nom de l'élément ; il sera soumis en même temps que les données du formulaire.                                                                                                                                                                                                                                                                                           |
| `value`           |                   | La valeur initiale de l'élément.                                                                                                                                                                                                                                                                                                                                            |

## Champs de saisie de texte

Les champs {{htmlelement("input")}} de saisie de texte sont les widgets de formulaire les plus élémentaires. Ils sont très pratiques pour permettre à un utilisateur de saisir n'importe quel type de données. Toutefois, certains champs textuels peuvent être spécialisés pour répondre à des besoins précis. Nous avons déjà vu quelques exemples.

> **Note :** Les champs textuels dans les formulaires HTML sont des contrôles de saisie de texte brut. Cela signifie que vous ne pouvez pas les utiliser pour réaliser de la [mise en forme riche](/fr/docs/Rich-Text_Editing_in_Mozilla "/en-US/docs/Rich-Text_Editing_in_Mozilla") (gras, italique, etc.). Tous les éditeurs de textes évolués que vous rencontrez utilisent des widgets personnalisés créés avec HTML, CSS et JavaScript.

Tous les champs textuels ont des comportement en commun :

- Il peuvent être définis comme {{htmlattrxref("readonly","input")}} (l'utilisateur ne peut pas modifier la valeur) voire {{htmlattrxref("disabled","input")}} (la valeur n'est pas envoyé avec le restant des données du formulaire).
- Ils peuvent avoir un {{htmlattrxref("placeholder","input")}}. Ce texte apparaît dans le champs de saisie et décrit brièvement le rôle de cette boîte.
- Des contraintes peuvent leur être imposées avec {{htmlattrxref("size","input")}} (la taille physique de la boîte) et avec {{htmlattrxref("maxlength","input")}} (le nombre maximum de caractères qui peuvent être saisis dans la boîte).
- Ils peuvent bénéficier d'une [correction orthographique](/fr/docs/HTML/Element/input#attr-spellcheck "/fr/docs/HTML/Element/input#attr-spellcheck"), si le navigateur la prend en charge.

> **Note :** L'élément {{htmlelement("input")}} est spécial car il peut être pratiquement n'importe quoi. En réglant simplement ses attributs de type, il peut changer radicalement, et il est utilisé pour créer la plupart des types de widgets de formulaire allant des champs texte sur une seule ligne, contrôles sans entrée de texte, contrôles de date et heure jusqu'aux boutons. Il y a toutefois des exceptions, comme {{htmlelement("textarea")}} pour les entrées multi-lignes. Prenez bien note de ceci en lisant cet article.

###  Champs texte sur une seule ligne

On crée un champ texte sur une seule ligne avec l'élément {{HTMLElement("input")}} dont l'attribut {{htmlattrxref("type", "input")}} est mis à `text` (maisi, si vous n'indiquez pas l'attribut {{htmlattrxref("type", "input")}}, `text` est la valeur par défaut). `text` est aussi la valeur de repli si celle indiquée pour l'attribut {{htmlattrxref("type", "input")}} est inconnue du navigateur (par exemple, si vous spécifiez `type="date"` et que le navigateur ne prend pas en charge les sélecteurs de date natifs).

> **Note :** Vous trouverez des exemples de tous les types de champ texte sur une ligne dans GitHub à [single-line-text-fields.html](https://github.com/mdn/learning-area/blob/master/html/forms/native-form-widgets/single-line-text-fields.html) (voir [directement aussi](https://mdn.github.io/learning-area/html/forms/native-form-widgets/single-line-text-fields.html)).

Voici un exemple élémentaire de champ texte sur une ligne :

```html
<input type="text" id="comment" name="comment" value="Je suis un champ texte">
```

Les champs texte sur une ligne n'ont qu'une seule contrainte : si vous saisissez du texte avec des sauts de ligne, le navigateur les supprime avant d'envoyer les données.

![Screenshots of single line text fields on several platforms.](https://developer.mozilla.org/files/4273/all-single-line-text-field.png)

HTML5 améliore le champ texte élémentaire sur une ligne par ajout de valeurs spéciales pour l'attribut {{htmlattrxref("type","input")}}. Ces valeurs conservent l'élément {{HTMLElement("input")}} en tant que champ texte sur une ligne mais ajoutent quelques contraintes et caractéristiques supplémentaires au champ.

#### Champ d'adresse électronique

Ce type de champ est défini en donnant la valeur `email` à l'attribut {{htmlattrxref("type","input")}} :

```html
    <input type="email" id="email" name="email" multiple>
```

Avec ce `type` , l'utilisateur doit saisir un e‑mail valide dans le champ. Tout autre type de contenu amène le navigateur à émettre une erreur lors de la soumission du formulaire. Notez que cette validation s'opère côté client et est faite par le navigateur :

![Entrée d'un e-mail non valide déclenchant un message d'avertissement « Veuillez saisir une adresse électronique valide »](fr-email.png)

Avec l'attribut {{htmlattrxref("multiple","input")}}, l'utilisateur pourra saisir plusieurs adresses électroniques dans la même entrée (avec une virgule comme séparateur).

Sur certains périphériques (les mobiles en particulier), un clavier virtuel différent et mieux adapté à la saisie d'adresses électroniques peut être affiché.

> **Note :** Vous trouverez plus de détails sur la validation des formulaires dans l'article [Validation des données de formulaires](/fr/docs/Web/Guide/HTML/Formulaires/Validation_donnees_formulaire).

#### Champ pour mot de passe

Ce type de champ est défini en donnant la valeur `password` à l'attribut {{htmlattrxref("type","input")}} :

```html
    <input type="password" id="pwd" name="pwd">
```

Aucune contrainte de saisie du texte n'est ajoutée, mais la valeur entrée dans le champ est masquée (avec des points ou des astérisques) afin qu'elle ne puisse pas être lue par d'autres.

Gardez à l'esprit que ceci n'est qu'une fonction de l'interface utilisateur ; sauf si vous soumettez le formulaire de manière sécurisée, il sera envoyé en texte brut, ce qui est mauvais pour la sécurité — un tiers malicieux pourrait intercepter les données et voler le mot de passe, les détails de la carte de crédit ou autre texte soumis. La meilleure façon de protéger l'utilisateur contre ceci consiste à héberger toute page contenant des formulaires avec une connexion sécurisée (par ex. avec https\:// ...), ainsi les données sont chiffrées avant expédition.

Les navigateurs modernes reconnaissent les risques courus lors de l'envoi de formulaires avec une connexion non sécurisée et affichent des avertissements pour prévenir les utilisateurs. Pour plus de précisions sur ce que Firefox a mis en œuvre, voir [Mots de passe peu sûrs](/fr/docs/Sécurité/MotsdepasseInsecurisés).

#### Champ de recherche

Ce type de champ se définit avec la valeur `search` de l'attribut {{htmlattrxref("type","input")}} :

```html
    <input type="search" id="search" name="search">
```

La principale différence entre un champ textuel et un champ de recherche est dans l'apparence — souvent, les champs de recherche sont affichés avec des coins arrondis, et/ou avec une « × » à cliquer pour effacer la valeur entrée. Toutefois, une fonction est aussi ajoutée : les valeurs saisies peuvent être automatiquement enregistrées afin d'être utilisées pour compléter des recherches sur plusieurs pages du même site.

![Screenshots of search fields on several platforms.](all-search-field.png)

#### Champ pour numéro de téléphone

Ce type de champ se définit en donnant la valeur `tel` à l'attribut {{htmlattrxref("type","input")}} :

```html
    <input type="tel" id="tel" name="tel">
```

À cause de la grande variété de formats de numéros de téléphones à travers le monde, ce type de champ n'ajoute pas de contrainte à la valeur saisie par l'utilisateur. C'est principalement une différence sémantique, bien que sur certains appareils (notamment mobiles) un clavier virtuel différent, mieux adapté à la saisie de numéros de téléphone, puisse être présenté.

#### Champ d'URL

Ce type de champ se définit en donnant la valeur `url` à l'attribut {{htmlattrxref("type","input")}} :

```html
    <input type="url" id="url" name="url">
```

Il ajoute une contrainte de validation spéciale du champ ; le navigateur renvoie une erreur si une URL invalide est saisie.

> **Note :** ce n'est pas parce qu'une URL est bien formée qu'elle pointe vers un emplacement qui existe réellement.

> **Note :** La présence de champs avec contraintes spéciales considérés comme erronés bloquent l'envoi du formulaire. De plus, leur apparence peut être adaptée afin de mettre en évidence l'erreur. Nous allons discuter de cela dans l'article [Validation de formulaires](/fr/docs/HTML/Formulaires/Validation_de_formulaires "/fr/docs/HTML/Formulaires/Validation_de_formulaire").

### Champs texte multilignes

Un champ texte sur plusieurs lignes  se définit avec l'élément {{HTMLElement("textarea")}}, et non avec l'élément {{HTMLElement("input")}}.

```html
    <textarea cols="30" rows="10"></textarea>
```

La principale différence entre un champ `textarea` et un champ monoligne est que, dans un textarea, l'utilisateur peut saisir du texte avec des sauts de ligne en dur (c'est à dire en pressant la touche `Retour`).

![Screenshots of multi-lines text fields on several platforms.](all-multi-lines-text-field.png)

> **Note :** Vous trouverez un exemple de champ texte multiligne sur GitHub à l'adresse [multi-line-text-field.html](https://github.com/mdn/learning-area/blob/master/html/forms/native-form-widgets/multi-line-text-field.html) (voir aussi [directement](https://mdn.github.io/learning-area/html/forms/native-form-widgets/multi-line-text-field.html)). Jetez-y un coup d'œil, et remarquez que dans la plupart des navigateurs, la zone de texte est dotée d'une poignée d'étirement en bas à droite pour permettre à l'utilisateur de la redimensionner. Cette capacité de redimensionnement peut être désactivée en réglant la propriété {{cssxref("resize")}} de la zone de texte à `none` dans les CSS.

{{htmlelement("textarea")}} accepte également quelques attributs pour contrôler son rendu sur plusieurs lignes  (outre plusieurs autres) :

| Nom de l'attribut                                | Valeur par défaut | Description                                                                              |
| ------------------------------------------------ | ----------------- | ---------------------------------------------------------------------------------------- |
| {{htmlattrxref("cols","textarea")}} | `20`              | Largeur visible de la boîte de contrôle texte, mesurée en largeurs de caractères.        |
| {{htmlattrxref("rows","textarea")}} |                   | Nombre de lignes de texte visibles dans la boîte de contrôle.                            |
| {{htmlattrxref("wrap","textarea")}} | `soft`            | Indique comment le contrôle va à la ligne. Les valeurs possibles sont : `hard` ou `soft` |

Notez que l'élément {{HTMLElement("textarea")}} est écrit un peu différemment de l'élément {{HTMLElement("input")}}. Ce dernier est un élément vide, ce qui signifie qu'il ne peut pas contenir d'élément enfant. A contrario, l'élément {{HTMLElement("textarea")}} est un élément régulier pouvant contenir des enfants contenus de texte.

Deux points clés à noter ici :

- Si vous voulez définir une valeur par défaut pour un élément {{HTMLElement("input")}}, vous devez utiliser l'attribut `value` ; avec un élément {{HTMLElement("textarea")}} mettez le texte par défaut entre la balise ouvrante et la balise fermante du dit élément.
- Par nature, l'élément {{HTMLElement("textarea")}} n'accept que des contenus textuels ; ce qui signifie que si du contenu HTML est placé dans un élément {{HTMLElement("textarea")}} il sera restitué sous forme de texte brut.

## Contenu déroulant

Les widgets déroulants sont une manière simple de permettre à l'utilisateur de choisir une option parmi plusieurs sans que cela prenne trop de place dans l'interface utilisateur. HTML dispose de deux types de contenus déroulants la **boîte à sélections** et la **boîte à complétement automatique**. Dans les deux cas l'interation est identique. Une fois le contrôle activé, le navigateur affiche une liste de valeurs ouverte au choix de l'utilisateur.

### Boîte à sélection

Une boîte à sélection est créée avec l'élément {{HTMLElement("select")}} complétée d'un ou plusieurs éléments enfants {{HTMLElement("option")}} définissant les valeurs possibles.

```html
    <select>
      <option>Banane</option>
      <option>Cerise</option>
      <option>Citron</option>
    </select>
```

Si nécessaire, la valeur par défaut de la boîte de sélection peut être définie en utilisant l'attribut {{htmlattrxref("selected","option")}} dans l'élément {{HTMLElement("option")}} désiré. Les éléments {{HTMLElement("option")}} peuvent être imbriqués dans des éléments {{HTMLElement("optgroup")}} pour créer des groupes de valeurs associées :

```html
    <select>
      <optgroup label="Fruits">
        <option>Banane</option>
        <option selected>Cerise</option>
        <option>Citron</option>
      </optgroup>
      <optgroup label="Légumes">
        <option>Carotte</option>
        <option>Aubergine</option>
        <option>Pomme de terre</option>
      </optgroup>
    </select>
```

![Screenshots of single line select box on several platforms.](all-select.png)

Si un élément {{HTMLElement("option")}} est défini avec l'attribut `value`, la valeur de cet attribut est envoyée lorsque le formulaire est soumis. Si l'attribut `value` est omis, le contenu de l'élément {{HTMLElement("option")}} est utilisé comme valeur de la boîte de sélection.

Sur l'élément {{HTMLElement("optgroup")}}, l'attribut `label` est affiché avant les valeurs, mais même s'il ressemble un peu à une option, il n'est pas sélectionnable.

### Boîte à sélections multiples

Par défaut, une boîte de sélection ne permet à l'utilisateur de ne sélectionner qu'une seule valeur. En ajoutant l'attribut {{htmlattrxref("multiple","select")}} à l'élément {{HTMLElement("select")}}, l'utilisateur peut sélectionner plusieurs valeurs en utilisant le mécanisme par défaut du système d'exploitation (par ex. en pressant <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> et en cliquant sur plusieur valeurs).

Dans ce cas toutefois, la boîte d'utilisateur n'affiche plus les valeurs sous forme d'un menu déroulant. Les valeurs sont toutes affichées dans une liste.

```html
    <select multiple>
      <option>Banane</option>
      <option>Cerise</option>
      <option>Citron</option>
    </select>
```

![Screenshots of multi-lines select box on several platforms.](all-multi-lines-select.png)

> **Note :** tous les navigateurs prenant en charge l'élément {{HTMLElement("select")}} prennent aussi en charge l'attribut {{htmlattrxref("multiple","select")}} sur lui.

### Contenus auto-complétés

Vous pouvez suggérer des valeurs d'auto-complémentation pour les widgets avec un élément {{HTMLElement("datalist")}} accompagné d'éléments enfants {{HTMLElement("option")}} précisant les valeurs à afficher.

La liste de données est alors liée à un champ texte (généralement un élément `input`) avec l'attribut {{htmlattrxref("list","input")}}.

Une fois la liste de données affiliée au widget de formulaire, ses options s'utilisent comme complémentation du texte saisi par l'utilisateur ; cela se présente généralement à l'utilisateur sous forme d'une boîte déroulante listant des correspondances possibles avec ce qui doit être saisi dans la boîte.

```html
    <label for="onFruit">Quel est votre fruit préféré ?</label>
    <input type="text" id="onFruit" list="maSuggestion" />
    <datalist id="maSuggestion">
      <option>Pomme</option>
      <option>Banane</option>
      <option>Mûre</option>
      <option>Airelles</option>
      <option>Citron</option>
      <option>Litchi</option>
      <option>Pêche</option>
      <option>Poire</option>
    </datalist>
```

> **Note :** Selon la [norme HTML](http://www.w3.org/TR/html5/common-input-element-attributes.html#attr-input-list), l'attribut {{htmlattrxref("list","input")}} et l'élément {{HTMLElement("datalist")}} peuvent s'utiliser avec tout type de widget nécessitant une saisie utilisateur. Toutefois, les modalités de ce fonctionnement ne sont pas claire pour des contrôles autres que textuels (de couleur ou de date par ex.) et les divers navigateurs se comporteront de manière différente selon le cas. Pour cette raison, soyez prudent en utilisant cette fonctionnalité avec autre chose que des champs textuels.

![Screenshots of datalist on several platforms.](all-datalist.png)

#### Prise en charge de Datalist et recours

L'élément {{HTMLElement("datalist")}} est un ajout très récent aux formulaires HTML, donc sa prise en charge par les navigateurs est un peu plus limitée que ce que nous avons vu précédemment. En particulier, il n'est pas pris en charge dans les versions d'IE inférieures à 10, et Safari ne le prend toujours pas en charge au moment de la rédaction de cet article.

Pour gérer cela, voici une petite astuce offrant une bonne solution de repli pour ces navigateurs :

```html
<label for="myFruit">Quel est votre fruit préféré ? (avec repli)</label>
<input type="text" id="myFruit" name="fruit" list="fruitList">

<datalist id="fruitList">
  <label for="suggestion">ou choisissez un fruit</label>
  <select id="suggestion" name="altFruit">
    <option>Pomme</option>
    <option>Banane</option>
    <option>Mûres</option>
    <option>Airelles</option>
    <option>Citron</option>
    <option>Litchi</option>
    <option>Pêche</option>
    <option>Poire</option>
  </select>
</datalist>
```

Les navigateurs qui prennent en charge l'élément {{HTMLElement("datalist")}} ignoreront tous les éléments qui ne sont pas {{HTMLElement("option")}} et fonctionneront comme prévu. D'autre part, les navigateurs qui ne prennent pas en charge l'élément {{HTMLElement("datalist")}} afficheront l'étiquette et la boîte de sélection. Bien sûr, il y a d'autres façons de gérer ce manque de prise en charge de l'élément {{HTMLElement("datalist")}}, mais c'est la manière la plus simple (d'autres ont besoin de JavaScript).

<table>
  <tbody>
    <tr>
      <th scope="row">Safari 6</th>
      <td>
        <img
          alt="Screenshot of the datalist element fallback with Safari on Mac OS"
          src="https://developer.mozilla.org/files/4583/datalist-safari.png"
        />
      </td>
    </tr>
    <tr>
      <th scope="row">Firefox 18</th>
      <td>
        <img
          alt="Screenshot of the datalist element with Firefox on Mac OS"
          src="https://developer.mozilla.org/files/4581/datalist-firefox-macos.png"
        />
      </td>
    </tr>
  </tbody>
</table>

## Éléments à cocher

Les éléments à cocher sont des widgets dont l'état se modifie en cliquant sur eux. Il existe deux types d'éléments à cocher : la case à cocher et le bouton radio. Les deux utilisent l'attribut {{htmlattrxref("checked","input")}} pour indiquer si le widget est coché par défaut ou non.

Il est important de noter que ces widgets ne se comportent pas tout à fait comme les autres widgets de formulaires. Pour la plupart des widgets, une fois que le formulaire est envoyé, tous les widgets dont l'attribut {{htmlattrxref("name","input")}} est défini sont envoyés, même s'ils ne sont pas renseignés. Dans le cas des éléments à cocher, leurs valeurs ne sont envoyées que s'ils sont cochés. S'ils ne sont pas cochés, rien n'est envoyé, pas même la valeur de leur attribut `name`.

> **Note :** Vous trouverez les exemples de cette section sur GitHub à l'adresse [checkable-items.html](https://github.com/mdn/learning-area/blob/master/html/forms/native-form-widgets/checkable-items.html) ([voir directement aussi](https://mdn.github.io/learning-area/html/forms/native-form-widgets/checkable-items.html)).

Pour un maximum de convivialité/accessibilité, il est conseillé d'entourer chaque liste d'éléments liés dans un {{htmlelement("fieldset")}}, avec un élément {{htmlelement("legend")}} fournissant une description globale de la liste.  Chaque paire individuelle d'éléments {{htmlelement("label")}}/{{htmlelement("input")}} doit être contenue dans son propre élément de liste (ou similaire), comme le montrent les exemples.

Vous devez également fournir des valeurs pour ces types d'entrées dans l'attribut `value` si vous voulez qu'elles aient un sens — si aucune valeur n'est fournie, les cases à cocher et les boutons radio ont la valeur `on`.

### Case à cocher

Une casce à cocher se crée avec l'élément {{HTMLElement("input")}} dont l'attribut {{htmlattrxref("type","input")}} a pour valeur `checkbox`.

```html
    <input type="checkbox" checked id="carrots" name="carrots" value="carrots">
```

Mettre l'attribut `checked` fait que la case sera cochée au chargement de la page.

![Screenshots of check boxes on several platforms.](all-checkbox.png)

### Bouton radio

Un bouton radio se crée avec un élément {{HTMLElement("input")}} dont l'attribut {{htmlattrxref("type","input")}} a la valeur `radio`.

```html
    <input type="radio" checked id="soup" name="meal">
```

Plusieurs boutons radio peuvent être liés ensemble. S'ils partagent la même valeur pour leur attribut {{htmlattrxref("name","input")}}, ils seront considérés comme faisant partie d'un seul groupe de boutons. Seulement un bouton à la fois peut être coché par groupe. Ceci signifie que si l'un d'entre eux est coché, tous les autres sont automatiquement décochés. Lorsque le formulaire est envoyé, seule la valeur du bouton coché est envoyée. Si aucun des boutons n'est coché, l'ensemble des boutons du groupe est considéré comme étant dans un état inconnu et aucune valeur n'est envoyée avec le formulaire.

```html
<fieldset>
  <legend>Quel est votre mets préféré ?</legend>
  <ul>
    <li>
      <label for="soup">Soupe</label>
      <input type="radio" checked id="soup" name="meal" value="soup">
    </li>
    <li>
      <label for="curry">Curry</label>
      <input type="radio" id="curry" name="meal" value="curry">
    </li>
    <li>
      <label for="pizza">Pizza</label>
      <input type="radio" id="pizza" name="meal" value="pizza">
    </li>
  </ul>
</fieldset>
```

![Screenshots of radio buttons on several platforms.](all-radio.png)

## Boutons

Dans les formulaires HTML, il existe trois types de boutons :

- Submit
  - : Envoie les données du formulaire au serveur.
- Reset
  - : Réinitialise les widgets de formulaire à leurs valeurs par défaut.
- Anonymous
  - : Type de bouton n'ayant pas d'effet prédéfini mais qui peut être personnalisé grâce à du code JavaScript.

Un bouton se crée avec un élément {{HTMLElement("button")}} ou un élément {{HTMLElement("input")}}. C'est la valeur de l'attribut {{htmlattrxref("type","input")}} qui définit le type de bouton affiché :

### submit

```html
    <button type="submit">
        Ceci est un <br><strong>bouton d'envoi</strong>
    </button>

    <input type="submit" value="Ceci est un bouton d'envoi">
```

### reset

```html
    <button type="reset">
        Ceci est un <br><strong>bouton de réinitialisation</strong>
    </button>

    <input type="reset" value="Ceci est un bouton de réinitialisation">
```

### anonymous

```html
    <button type="button">
        Ceci est un <br><strong>bouton lambda</strong>
    </button>

    <input type="button" value="Ceci est un bouton lambda">
```

Les boutons se comportent de la même manière que vous utilisiez l'élément {{HTMLElement("button")}} ou l'élément {{HTMLElement("input")}}. Il existe toutefois quelques différences à noter :

- Comme on peut le voir dans l'exemple précédent, les éléments {{HTMLElement("button")}} autorisent l'utilisation de contenu HTML dans l'étiquette, tandis que les éléments {{HTMLElement("input")}} n'acceptent que du texte brut.
- Dans le cas des éléments {{HTMLElement("button")}}, il est possible d'avoir une valeur différente de l'étiquette du bouton (toutefois, ceci ne peut être utilisé pour les versions antérieures à la version 8 d'Internet Explorer).

![Screenshots of buttons on several platforms.](all-buttons.png)

Techniquement parlant, il n'y a pratiquement pas de différence entre un bouton défini avec l'élément {{HTMLElement("button")}} ou l'élément {{HTMLElement("input")}}. La seule différence à noter réside dans l'étiquette du bouton lui-même. Dans un élément {{HTMLElement("input")}}, l'étiquette ne peut être constituée que de données de type caractère, alors que dans un élément {{HTMLElement("button")}}, l'étiquette peut être mise sous HTML, de sorte qu'elle peut être mise en forme en conséquence.

## Widgets de formulaires avancés

Ces widgets sont des contrôles permettant l'utilisateur de saisir des données plus complexes ou moins habituelles, comme des nombres exacts ou approchés, des dates et heures ainsi que des couleurs.

### Nombres

On crée un widget pour nombres avec un élément {{HTMLElement("input")}} dont l'attribut {{htmlattrxref("type","input")}} a pour valeur `number`. Ce contrôle ressemble à un champ texte mais il n'accepte que des chiffres en virgule flottante, et propose habituellement des boutons pour augmenter ou réduire la valeur dans le widget.

Il est aussi possible de :

- contraindre la valeur en définissant les attributs {{htmlattrxref("min","input")}} et {{htmlattrxref("max","input")}}.
- définir l'incrément de modification de la valeur du widget à l'aide des boutons ad‑hoc en précisant l'attribut {{htmlattrxref("step","input")}}.

#### Exemple

```html
    <input type="number" name="age" id="age" min="1" max="10" step="2">
```

Ceci créé un widget pour un nombre dont la valeur est comprise entre 1 et 10 et dont les boutons d'incrémentation/décrémentation modifient la valeur par pas de 2.

### Curseurs

Le curseur est une autre manière de sélectionner un nombre. Comme, visuellement parlant, les curseurs sont moins précis qu'un champ textuel, ils sont utilisés pour retenir un nombre dont la précision de valeur n'est pas primordiale.

Un curseur se crée avec l'élément {{HTMLElement("input")}} dont l'attribut {{htmlattrxref("type","input")}} a pour valeur `range`. Il est important de configurer convenablement le curseur. À cet effet, il est fortement recommandé de définir les attributs {{htmlattrxref("min","input")}}, {{htmlattrxref("max","input")}} et {{htmlattrxref("step","input")}}.

#### Exemple

```html
<input type="range" name="beans" id="beans" min="0" max="500" step="10">
```

Cet exemple créé un curseur dont les valeurs varient entre 0 et 500, et dont les bouton d'incrément/décrément font varier la valeur de ±10.

Un problème avec les curseurs est qu'il n'offrent aucun moyen visue de savoir quelle est leur valeur courante. Il est nécessaire d'ajouter cela vous‑même à l'aide de JavaScript, mais c'est assez facile. Dans cet exemple nous ajoutons un élément {{htmlelement("span")}} dans lequel nous écrivons la valeur courante du curseur et la mettons à jour quand elle est modifiée.

```html
<label for="beans">Combien de haricots pouvez‑vous manger ?</label>
<input type="range" name="beans" id="beans" min="0" max="500" step="10">
<span class="beancount"></span>
```

et en  JavaScript :

```js
var beans = document.querySelector('#beans');
var count = document.querySelector('.beancount');

count.textContent = beans.value;

beans.oninput = function() {
  count.textContent = beans.value;
}
```

Ici nous stockons dans deux variables les références du curseur et celle de `span`, puis nous réglons immédiatement le [`textContent`](/fr/docs/Web/API/Node/textContent)  de `span` à la valeur courante `value` de l'entrée. Enfin, nous avons mis en place un gestionnaire d'événements oninput de sorte que chaque fois que le curseur de plage est déplacé, le `textContent` de `span` est mis à jour avec la nouvelle valeur de l'entrée.

L'attribut `range` pour `input` n'est pas pris en charge dans les versions d'Internet Explorer dont le numéro est inférieur à 10.

### Sélection de date et heure

Recueillir des données de date et heure a traditionnellement toujours été un cauchemar pour les développeurs web. HTML5 ajoute des améliorations en ajoutant un contrôle qui permet de manipuler ce type de données.

Un contrôle de sélection de date et heure se crée avec l'élément {{HTMLElement("input")}} et une valeur appropriée de l'attribut {{htmlattrxref("type","input")}} selon que vous voulez recueillir des dates, des heures ou les deux.

#### `datetime-local`

Cette valeur d'attribut créé un widget pour afficher et sélectionner une date et une heure quelque soit le fuseau horaire.

```html
<input type="datetime-local" name="datetime" id="datetime">
```

#### `month`

Cette valeur d'attribut créé un widget pour afficher et sélectionner un mois dans une année donnée.

```html
<input type="month" name="month" id="month">
```

#### `time`

Cette valeur d'attribut créé un widget pour afficher et sélectionner un horaire.

```html
<input type="time" name="time" id="time">
```

#### `week`

Cette valeur d'attribut crée un widget pour afficher et sélectionner une semaine et l'année correspondante.

```html
<input type="week" name="week" id="week">
```

Tous les contrôles de sélection de date et heure peuvent être contraints à l'aide des attributs {{htmlattrxref("min","input")}} et {{htmlattrxref("max","input")}}.

```html
    <label for="maDate">Quand êtes vous disponible cet été ?</label>
    <input type="date" min="2013-06-01" max="2013-08-31" id="maDate">
```

> **Attention :** Les widgets de date et heure sont encore peu pris en charge. Au moment de la rédaction de cet article, Chrome, Edge et Opera les prennent bien en charge, mais il n'y a pas de prise en charge dans Internet Explorer et Firefox et Safari n'ont qu'une prise en charge lacunaire de ces derniers.

### Sélecteur de couleur

Les couleurs sont toujours compliquées à manier. Il existe plusieurs façons de les exprimer : valeurs RGB (décimale ou hexadécimale), valeurs HSL, mots-clés, etc. Les widgets de sélection de couleur permettent aux utilisateurs de sélectionner une couleur dans un contexte textuel et visuel.

Un widget de sélection de couleur se crée avec un élément {{HTMLElement("input")}} dont l'attribut {{htmlattrxref("type","input")}} a pour valeur `color`.

```html
<input type="color" name="color" id="color">
```

Attention : la prise en charge du widget `color` n'est pas très bonne actuellement. Il n'y a aucune prise en charge dans Internet Explorer, ni actuellement dans Safari. Les autres navigateurs majeurs le prennent en charge.

## Autres widgets

Il existe d'autres types de widgets qui ne peuvent pas être classés facilement à cause de leur comportement très particulier, mais qui sont toujours très utiles.

> **Note :** Vous trouverez les exemples de cette section sur GitHub à l'adresse [other-examples.html](https://github.com/mdn/learning-area/blob/master/html/forms/native-form-widgets/other-examples.html) (à voir aussi [directement](https://mdn.github.io/learning-area/html/forms/native-form-widgets/other-examples.html)).

### Sélection de fichier

Les formulaires HTML permettent d'envoyer des fichiers à un serveur. Cette action spécifique est détaillée dans l'article  « [Envoi et extraction des données de formulaire](/fr/docs/Web/Guide/HTML/Formulaires/Envoyer_et_extraire_les_données_des_formulaires "/fr/docs/HTML/Formulaires/Envoyer_et_extraire_les_données_des_formulaires") ». Le widget de sélection de fichier permet à l'utilisateur de choisir un ou plusieurs fichiers à envoyer.

Pour créer un widget de sélection de fichier, vous devez utiliser un élément {{HTMLElement("input")}} dont l'attribut {{htmlattrxref("type","input")}} a pour valeur `file`. Les types de fichiers acceptés peuvent être contraints en utilisant l'attribut {{htmlattrxref("accept","input")}}. De plus, si vous souhaitez permettre à l'utilisateur de choisir plusieurs fichiers, vous pouvez le faire en ajoutant l'attribut {{htmlattrxref("multiple","input")}}.

#### Exemple

Dans cet exemple, le widget de sélection de fichiers permet de sélectionner des fichiers d'images. L'utilisateur peut sélectionner plusieurs fichiers.

```html
<input type="file" name="file" id="file" accept="image/*" multiple>
```

### Contenu caché

Il est parfois pratique pour des raisons techniques d'avoir des morceaux d'informations qui soient envoyés au serveur sans être montrées à l'utilisateur. Pour ce faire, vous pouvez ajouter un élément invisible dans votre formulaire. Cela est possible en utilisant un élément {{HTMLElement("input")}} dont l'attribut {{htmlattrxref("type","input")}} a pour valeur `hidden`.

Si vous créez un tel élément, il est obligatoire de définir ses attributs `name` et `value` :

```html
    <input type="hidden" id="timestamp" name="timestamp" value="1286705410">
```

### Image-bouton

Le contrôle **image-bouton** est affiché comme un élément {{HTMLElement("img")}}, à la différence que lorsque l'utilisateur clique dessus, il se comporte comme un bouton d'envoi (voir ci-dessus).

Une image-bouton se crée avec un élément {{HTMLElement("input")}} dont l'attribut {{htmlattrxref("type","input")}} a pour valeur `image`. Cet élément accepte exactement le même ensemble d'attributs que l'élément {{HTMLElement("img")}}, en plus de tous les attributs valides pour n'importe quel bouton de formulaire.

```html
    <input type="image" alt="Click me!" src="my-img.png" width="80" height="30" />
```

Si l'image-bouton est utilisée pour envoyer un formulaire, ce widget n'envoie pas sa valeur mais les coordonnées X et Y du clic sur l'image (les coordonnées sont relatives à l'image, ce qui veut dire que le coin supérieur gauche représente les coordonnées 0, 0). Les coordonnées sont envoyées sous la forme de deux paires de clé/valeur :

- la valeur X est la valeur de l'attribut {{htmlattrxref("name","input")}} suivie de la chaîne « *.x* »
- la valeur Y est la valeur de l'attribut {{htmlattrxref("name","input")}} suivie de la chaîne « *.y* ».

Lorsque vous cliquez sur l'image dans ce formulaire, vous êtes redirigés une URL du type suivant :

        http://foo.com?pos.x=123&pos.y=456

C'est une façon très commode de construire une « hot map » (cartographie des parties d'une page Internet le plus souvent balayées par le regard des lecteurs). La manière d'envoyer et d'extraire ces valeurs est détaillée dans l'article « [Envoi des données de formulaire](/fr/docs/Web/Guide/HTML/Formulaires/Envoyer_et_extraire_les_données_des_formulaires "/fr/docs/HTML/Formulaires/Envoyer_et_extraire_les_données_des_formulaires") ».

### Compteurs et barres de progression

Les compteurs et barres de progressions sont des représentations visuelles de valeurs numériques.

#### Progress

Une barre de progression représente une valeur qui évolue dans le temps jusqu'à une valeur maximale définie par l'attribut {{htmlattrxref("max","progress")}}. Une telle barre peut être créée grace à un élément {{ HTMLElement("progress")}}.

```html
    <progress max="100" value="75">75/100</progress>
```

Cela sert à mettre en œuvre visuellement un rapport d'avancement, comme le pourcentage du nombre total de fichiers téléchargés ou le nombre de questions posées dans un questionnaire.

Le contenu dans l'élément {{HTMLElement("progress")}} est un affichage informatif de repli pour les navigateurs ne prenant pas en charge cet élément ;  les technologies d'assistance vocalisent ce contenu.

#### Meter

Un étalon est une valeur fixe dans une plage délimitée par une valeur minimale {{htmlattrxref("min","meter")}} et une valeur maximale {{htmlattrxref("max","meter")}}. Cette valeur est affichée dans une barre, et pour savoir à quoi cette barre ressemble, nous comparons certaines valeurs :

- les valeurs {{htmlattrxref("low","meter")}} et {{htmlattrxref("high","meter")}} divisent l'intervalle en trois parties :

  - la partie basse de l'intervalle est comprise entre les valeurs {{htmlattrxref("min","meter")}} et {{htmlattrxref("low","meter")}} (les deux valeurs sont incluses)
  - la partie médiane de l'intervalle est comprise entre les valeurs {{htmlattrxref("low","meter")}} et {{htmlattrxref("high","meter")}} (les deux valeurs sont exclues)
  - la partie haute de l'intervalle est comprise entre les valeurs {{htmlattrxref("high","meter")}} et {{htmlattrxref("max","meter")}} (les deux valeurs sont incluses)

- La valeur {{htmlattrxref("optimum","meter")}} définit la valeur optimale pour l'élément {{HTMLElement("meter")}}. En conjonction avec les valeurs {{htmlattrxref("low","meter")}} et {{htmlattrxref("high","meter")}}, elle définit quelle partie de la plage est préféré :

  - Si la valeur {{htmlattrxref("optimum","meter")}} est dans la partie basse de l'intervalle, la partie basse est considérée comme la partie préférée, la partie médiane est considérée comme la partie moyenne et la partie haute comme la moins favorable.
  - Si la valeur {{htmlattrxref("optimum","meter")}} est dans la partie médiane, la partie basse est considérée comme la partie moyenne, la partie médiane comme la partie préférée et la partie haute comme moyenne également.
  - Si la valeur {{htmlattrxref("optimum","meter")}} est dans la partie haute, la partie basse est considérée comme la moins favorable, la partie médiane comme moyenne et la partie haute comme la partie préférée.

Tous les navigateurs compatibles avec l'élément {{HTMLElement("meter")}} utilisent ces valeurs pour modifier la couleur de la barre :

- Si la valeur actuelle est dans la partie préférée, la barre est verte.
- Si la valeur actuelle est dans la partie moyenne, la barre est jaune.
- Si la valeut actuelle est dans la partie la moins favorable, la barre est rouge.

Une telle barre se crée avec un élément {{HTMLElement("meter")}}. Cela permet d'implémenter toute sorte d'étalonnage, par exemple une barre montrant l'espace total utilisé sur un disque, qui devient rouge si le disque commence à être plein.

```html
<meter min="0" max="100" value="75" low="33" high="66" optimum="50">75</meter>
```

Le contenu de l'élément {{HTMLElement("meter")}} est un affichage informatif de repli pour les navigateurs ne prenant pas en charge cet élément ; les technologies d'assistance vocalisent cet affichage.

La prise en charge de `progress` et `meter` est vraiment bonne — il n'y a pas de prise en charge dans Internet Explorer, mais les autres navigateurs l'acceptent bien.

## Conclusion

Comme nous venons de le voir, il y a pas mal d'éléments de formulaire différents disponibles  — il n'est pas nécessaire de mémoriser l'ensemble de ces détails dès maintenant, mais vous pourrez revenir à cet article tant que vous le voudrez pour revoir tel ou tel détail.

## Voir également

Pour entrer plus en détails des différents widgets de formulaires, voici quelques ressources externes très utiles que vous pouvez visiter :

- [L'état actuelle des formulaires HTML5](http://wufoo.com/html5/) par Wufoo (en anglais)
- [Tests HTML5 - inputs](http://www.quirksmode.org/html5/inputs.html) sur Quirksmode (en anglais) (et [pour les navigateurs mobiles](http://www.quirksmode.org/html5/inputs_mobile.html))

{{PreviousMenuNext("Web/Guide/HTML/Formulaires/Comment_structurer_un_formulaire_HTML", "Web/Guide/HTML/Formulaires/Envoyer_et_extraire_les_données_des_formulaires", "Web/Guide/HTML/Formulaires")}}

## Dans ce module

- [Mon premier formulaire HTML](/fr/docs/Web/Guide/HTML/Formulaires/Mon_premier_formulaire_HTML)
- [Comment structurer un formulaire HTML](/fr/docs/Web/Guide/HTML/Formulaires/Comment_structurer_un_formulaire_HTML)
- Les widgets natifs pour formulaire
- [Envoi des données de formulaire](/fr/docs/Web/Guide/HTML/Formulaires/Envoyer_et_extraire_les_données_des_formulaires)
- [Validation des données de formulaire](/fr/docs/Web/Guide/HTML/Formulaires/Validation_donnees_formulaire)
- [Comment construire des widgets personnalisés pour formulaire](/fr/docs/Web/Guide/HTML/Formulaires/Comment_construire_des_widgets_de_formulaires_personnalisés)
- [Envoi de formulaires à l'aide du JavaScript](/fr/docs/Web/Guide/HTML/Formulaires/Sending_forms_through_JavaScript)
- [Formulaires HTML dans les navigateurs anciens](/fr/docs/Web/Guide/HTML/Formulaires/HTML_forms_in_legacy_browsers)
- [Mise en forme des formulaires HTML](/fr/docs/Web/Guide/HTML/Formulaires/Apparence_des_formulaires_HTML)
- [Mise en forme avancée des formulaires HTML](/fr/docs/Web/Guide/HTML/Formulaires/Advanced_styling_for_HTML_forms)
- [Table de compatibilité des propriétés pour les widgets de formulaire](/fr/docs/Web/Guide/HTML/Formulaires/Property_compatibility_table_for_form_widgets)
