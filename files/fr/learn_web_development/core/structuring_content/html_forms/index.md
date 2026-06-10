---
title: Formulaires et boutons en HTML
short-title: Formulaires et boutons
slug: Learn_web_development/Core/Structuring_content/HTML_forms
l10n:
  sourceCommit: 7d93b0f639e37e9340ed707e3cb7f9a75c1b3048
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content/Test_your_skills/Forms_and_buttons", "Learn_web_development/Core/Structuring_content")}}

Les formulaires et les boutons HTML sont des outils puissants pour interagir avec les utilisateur·ice·s d'un site web. Le plus souvent, ils fournissent aux utilisateur·ice·s des contrôles pour manipuler une interface utilisateur (UI) ou saisir des données lorsque c'est nécessaire.

Dans cet article, nous proposons une introduction aux bases des formulaires et des boutons. Il y a beaucoup plus à savoir — de nombreux types d'entrée et fonctionnalités de formulaire ne sont pas mentionnés — mais cet article vous donne une base solide pour la plupart des cas. Vous pouvez apprendre les utilisations avancées ou spécialisées au fur et à mesure de vos besoins dans le cadre de l'apprentissage constant que vous ferez tout au long de votre carrière.

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Être familier avec le HTML de base, comme couvert dans
        <a href="/fr/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Syntaxe de base du HTML</a
        >. Les sémantiques au niveau du texte, telles que <a href="/fr/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
          >les titres et les paragraphes</a
        > et <a href="/fr/docs/Learn_web_development/Core/Structuring_content/Lists"
          >les listes</a
        >. <a href="/fr/docs/Learn_web_development/Core/Structuring_content/Structuring_documents"
          >Structure HTML</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs d'apprentissage&nbsp;:</th>
      <td>
        <ul>
          <li>Comprendre que les formulaires et les boutons sont les principaux outils permettant aux utilisateur·ice·s d'interagir avec un site web, en plus des liens.</li>
          <li>Les différents types de boutons.</li>
          <li>Les types courants de <code>&lt;input&gt;</code>.</li>
          <li>Les attributs courants tels que <code>name</code> et <code>value</code>.</li>
          <li>L'élément <code>&lt;form&gt;</code> et les bases de l'envoi de formulaire.</li>
          <li>Rendre les formulaires accessibles avec des étiquettes et une sémantique correcte.</li>
          <li>Les autres types de contrôles&nbsp;: <code>&lt;textarea&gt;</code>, <code>&lt;select&gt;</code>, et <code>&lt;option&gt;</code>.</li>
          <li>Les notions de base de la validation côté client.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Interagir avec les utilisatrices et utilisateurs

Jusqu'à présent dans le cours, vous avez vu quelques façons dont les utilisateur·ice·s peuvent interagir avec le web&nbsp;:

- Les [liens](/fr/docs/Learn_web_development/Core/Structuring_content/Creating_links) peuvent être utilisés pour naviguer entre différentes section du contenu, soit sur la même page, soit sur une page différente.
- Les éléments [`<video>` et `<audio>`](/fr/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) disposent généralement de contrôles tels que lecture/pause, avance rapide, retour en arrière, etc., ce qui permet aux utilisateur·ice·s de consommer le contenu multimédia comme ils le souhaitent.

Cependant, ces fonctionnalités ont tendance à faciliter des interactions à sens unique, les utilisateur·ice·s consommant passivement le contenu. C'est correct, mais le web est une expérience bidirectionnelle. Les utilisateur·ice·s définissent des préférences pour la manière dont ils souhaitent expérimenter le contenu et les services. Ils commandent des taxis et demandent des rappels. Ils fournissent des commentaires et font des réclamations. Ils achètent des produits et se les font livrer à domicile.

Pour offrir cette expérience bidirectionnelle, vous devez utiliser des boutons et des formulaires.

Les boutons sont généralement créés à l'aide d'éléments HTML {{HTMLElement("button")}} (ils sont également parfois créés à l'aide d'éléments {{HTMLElement("input")}} avec leurs attributs `type` définis sur une valeur comme `button` ou `submit`). Ces boutons poussoirs sont polyvalents — vous pouvez les connecter pour déclencher n'importe quelle fonctionnalité que vous souhaitez, limitée uniquement par votre imagination et vos compétences en codage.

Les formulaires sont créés à l'aide d'éléments tels que {{HTMLElement("form")}}, {{HTMLElement("label")}}, {{HTMLElement("input")}} et {{HTMLElement("select")}}. Les éléments de formulaire peuvent être utilisés pour créer des contrôles plus complexes que ce que permettent les simples boutons — par exemple, un menu déroulant contenant plusieurs options qui vous permettent de choisir entre différents thèmes pour un élément d'interface utilisateur.

Cependant, de manière cruciale, ils peuvent également être utilisés pour créer des formulaires que les utilisateur·ice·s doivent remplir lorsqu'ils ont besoin d'envoyer des informations à un serveur de site web. Pensez aux sites de commerce électronique — lorsque vous voulez rechercher un produit à acheter, vous utilisez un formulaire pour entrer des termes de recherche. Lorsque vous voulez payer des articles et finaliser la livraison, vous utilisez un formulaire pour entrer votre adresse postale, et un autre formulaire pour entrer vos informations de carte de crédit.

Nous nous concentrons principalement sur cette utilisation — plus traditionnelle — des éléments de formulaire dans cet article. Notez que les boutons sont également couramment utilisés à l'intérieur des formulaires pour envoyer les données saisies au serveur.

Avec cette théorie importante en tête, passons à l'exploration du code pour voir comment les boutons et les formulaires sont implémentés.

## Boutons

Comme mentionné ci-dessus, les boutons ont quelques utilisations principales sur le web. Tout d'abord, ils sont utilisés pour déclencher des fonctionnalités, ce qui est utile lors de la création de contrôles d'interface utilisateur. Le bouton le plus simple est implémenté en utilisant le code suivant&nbsp;:

```html live-sample___basic-button
<button>Cliquez sur moi</button>
```

Ceci est rendu comme suit&nbsp;:

{{EmbedLiveSample("basic-button", "100%", 60)}}

Le texte apparaissant entre les balises `<button></button>` est rendu à l'intérieur du bouton, et il reçoit un style de base par le navigateur afin qu'il ressemble et se comporte comme un bouton par défaut. Jusqu'ici, tout va bien. Cependant, il y a un problème ici — notre bouton solitaire ne fait rien d'utile à lui seul. Pour qu'il fasse quelque chose d'utile, vous devez le mettre à l'intérieur d'un formulaire (que nous couvrons plus tard), ou ajouter du JavaScript.

Par exemple, si vous appliquez le JavaScript suivant au bouton ci-dessus&nbsp;:

```html hidden live-sample___basic-button-with-js
<button>Cliquez sur moi</button>
```

```js live-sample___basic-button-with-js
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  btn.textContent = "VOUS M'AVEZ CLIQUÉ !! ❤️";
  setTimeout(() => {
    btn.textContent = "Cliquez sur moi";
  }, 1000);
});
```

Cela vous donne le rendu suivant — essayez de cliquer dessus&nbsp;:

{{EmbedLiveSample("basic-button-with-js", "100%", 60)}}

Vous n'êtes pas censé comprendre comment le JavaScript fonctionne pour l'instant. Vous allez en apprendre davantage plus tard dans le cours.

Dans la section suivante, vous allez voir une démonstration de la deuxième utilisation principale des boutons — l'envoi de formulaires.

## L'anatomie d'un formulaire

Un formulaire de base contient trois éléments&nbsp;:

- Un élément {{HTMLElement("form")}}, qui enveloppe tout le contenu du formulaire. Tous les contrôles de formulaire à l'intérieur des balises `<form></form>` font partie du même formulaire, et leurs données sont incluses lors de l'envoi du formulaire.
- Une ou plusieurs paires, chacune composée d'un élément {{HTMLElement("label")}} et d'un élément de contrôle de formulaire (généralement un élément {{HTMLElement("input")}}, mais il existe d'autres types également, par exemple {{HTMLElement("select")}})&nbsp;:
  - L'élément de contrôle de formulaire permet à l'utilisateur·ice de choisir ou de saisir des données, qui sont envoyées au serveur lors de l'envoi du formulaire.
  - L'élément `<label>` fournit une étiquette identifiant le contrôle de formulaire et décrivant les données qui doivent y être saisies.
- Un élément {{HTMLElement("button")}}, utilisé pour envoyer le formulaire.

Voyons un exemple de base qui inclut les trois éléments ci-dessus. Ce formulaire peut être utilisé pour demander le nom et l'adresse courriel d'un·e utilisateur·ice, afin de l'inscrire à une lettre d'information (ne vous inquiétez pas — il n'est connecté à aucun serveur, donc il ne fait rien pour l'instant).

```html live-sample___form-anatomy
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <title>Premier formulaire</title>
  </head>
  <body>
    <form action="./submit_page" method="get">
      <h2>Inscrivez-vous à notre lettre d'information</h2>
      <p>
        <label for="name">Nom (obligatoire)&nbsp;:</label>
        <input type="text" name="name" id="name" required />
      </p>
      <p>
        <label for="email">Courriel (obligatoire)&nbsp;:</label>
        <input type="email" name="email" id="email" required />
      </p>
      <p>
        <button>Inscrivez-moi&nbsp;!</button>
      </p>
    </form>
  </body>
</html>
```

Ceci est rendu comme suit&nbsp;:

{{EmbedLiveSample("form-anatomy", "100%", 200, , , , , "allow-forms")}}

Si vous cliquez immédiatement sur «&nbsp;Inscrivez-moi&nbsp;!», vous voyez une erreur de validation, car aucune donnée n'a été saisie. Si vous remplissez les champs avec un nom et une adresse courriel, puis cliquez sur «&nbsp;Inscrivez-moi&nbsp;!», vous voyez un message d'erreur `404`.

Nous expliquerons pourquoi plus tard. Avant de continuer, copiez le code HTML précédent dans un nouveau fichier HTML en utilisant votre [éditeur de code](/fr/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors) et ouvrez-le dans un nouvel onglet de navigateur.

### L'élément `<form>`

Comme nous l'avons dit précédemment, l'élément {{HTMLElement("form")}} agit comme l'enveloppe extérieure du formulaire, regroupant tous les contrôles de formulaire à l'intérieur. Lorsque le `<button>` est pressé, toutes les données représentées par les contrôles de formulaire sont envoyées au serveur. L'élément `<form>` peut prendre de nombreux attributs, mais les deux plus importants, que nous avons inclus dans notre exemple, sont les suivants&nbsp;:

- `action`&nbsp;: Contient le chemin vers la page à laquelle nous voulons envoyer les données du formulaire envoyées, pour qu'elles soient traitées. Plus tard, après avoir envoyé le formulaire, vous voyez `/submit_page` inclus dans l'URL. Vous recevez également une réponse d'erreur {{HTTPStatus("404")}}, car la page n'existe pas réellement, mais ce n'est pas grave pour l'instant.
- `method`&nbsp;: Définit la [méthode](/fr/docs/Web/HTTP/Reference/Methods) de transmission des données que vous souhaitez utiliser pour envoyer les données du formulaire au serveur. Ne vous inquiétez pas trop pour l'instant&nbsp;; la valeur `get` fait en sorte que les données soient envoyées en tant que paramètres attachés à la fin de l'URL.

#### Vérifier les données envoyées

1. Allez à l'exemple dans l'onglet séparé, essayez de saisir un nom "Bob" et une adresse courriel «&nbsp;bob@bob.com&nbsp;».
2. Appuyez sur le `<button>`.

Les attributs `action` et `method` font en sorte que les données du formulaire soient envoyées dans une URL ressemblant à ceci&nbsp;:

```plain
/une/url/submit_page?name=Bob&email=bob%40bob.com
```

#### Structurer les formulaires

Vous pouvez inclure n'importe quel élément HTML à l'intérieur d'un élément `<form>` pour structurer les éléments du formulaire eux-mêmes et fournir des conteneurs à cibler avec CSS pour le style, etc.

Dans notre exemple, nous avons inclus un [élément de titre](/fr/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h2>`) pour décrire l'objectif du formulaire.

Nous avons également placé chaque paire input/label et le bouton d'envoi à l'intérieur d'un {{HTMLElement("p")}} séparé, afin que chacun apparaisse sur une ligne distincte. Ces éléments sont tous en ligne par défaut, ce qui signifie que si nous ne faisions pas cela, ils seraient tous sur la même ligne.

Ceci est un schéma courant pour la structuration des formulaires. Certaines personnes utilisent des éléments `<p>` pour séparer leurs éléments de formulaire, d'autres utilisent {{HTMLElement("div")}}, {{HTMLElement("section")}}, ou même {{HTMLElement("li")}}. Cela n'a pas beaucoup d'importance, tant que les éléments utilisés ont un sens sémantique. Par exemple, il est logique de diviser les groupes d'éléments de formulaire en paragraphes ou sections de contenu distincts, ou même en éléments d'une liste. Il est moins logique de les représenter comme des [citations](/fr/docs/Web/HTML/Reference/Elements/blockquote), des [apartés](/fr/docs/Web/HTML/Reference/Elements/aside) ou des [adresses](/fr/docs/Web/HTML/Reference/Elements/address).

Il existe un élément spécialisé pour regrouper les éléments de formulaire appelé {{HTMLElement("fieldset")}}. C'est utile dans certaines circonstances, comme dans les formulaires complexes et lors du regroupement de plusieurs cases à cocher et boutons radio. Nous examinons quelques exemples de `<fieldset>` plus tard.

### Les éléments `<input>`

Les éléments {{HTMLElement("input")}} représentent les différentes données saisies dans le formulaire. Étudions un des exemples de notre formulaire de base&nbsp;:

```html
<input type="text" name="name" id="name" required />
```

Les attributs sont les suivants&nbsp;:

- `type`&nbsp;: Définit le type de contrôle de formulaire à créer. Il existe de nombreux types de contrôles de formulaire, allant des champs de texte simples de différents types aux boutons radio, cases à cocher, et plus encore. Le type `text` rend un champ de texte de base qui peut accepter n'importe quelle valeur.
- `name`&nbsp;: Définit un nom pour l'élément de données. Lorsque le formulaire est envoyé, les données sont envoyées sous forme de paires nom/valeur. Dans chaque cas, le nom est égal à la valeur de cet attribut `name`, et la valeur est égale au texte saisi dans le champ de texte.
- `id`&nbsp;: Définit un ID qui peut être utilisé pour identifier l'élément. Dans ce cas, il est utilisé pour associer le contrôle de formulaire à son `<label>`.
- `required`&nbsp;: Définit qu'une valeur doit être saisie dans l'élément de formulaire avant que le formulaire puisse être envoyé. Cela ne doit être défini que sur les entrées que vous exigez, pas sur les champs facultatifs.

Vous devez savoir que certains types d'entrée ne tirent généralement pas leurs valeurs du texte saisi dans un champ. Par exemple, [`<input type="color">`](/fr/docs/Web/HTML/Reference/Elements/input/color) rend un sélecteur de couleur à partir duquel vous choisissez une couleur, tandis que [`<input type="radio">`](/fr/docs/Web/HTML/Reference/Elements/input/radio) rend un bouton radio qui peut être sélectionné ou non.

Dans le cas des boutons radio, vous devez généralement fournir la valeur qui est envoyée si elle est sélectionnée dans un attribut `value` spécifique. Notez que vous _pouvez_ définir un attribut `value` sur des types d'entrée comme `text` et `color` — l'effet est que la valeur est pré-remplie dans le champ de formulaire lorsqu'il est rendu pour la première fois.

#### Les attributs `required` et `value` en action

1. À nouveau, allez à l'exemple que vous avez chargé dans un onglet séparé et essayez d'envoyer le formulaire sans entrer de valeur dans l'un ou l'autre des champs. Vous voyez un message d'erreur apparaître à côté du champ «&nbsp;Nom&nbsp;» indiquant quelque chose comme «&nbsp;Veuillez remplir ce champ&nbsp;» (cela varie selon les navigateurs). C'est l'attribut `required` — et la validation côté client par défaut du navigateur — en action.
2. Maintenant, essayez d'envoyer le formulaire avec un nom valide saisi dans le premier champ, mais une valeur qui n'est pas une adresse e-mail valide dans le deuxième champ (quelque chose comme «&nbsp;aaaa&nbsp;» fait l'affaire). Cette fois, vous voyez un message d'erreur apparaître à côté du champ «&nbsp;Email&nbsp;» indiquant quelque chose comme «&nbsp;Veuillez entrer une adresse e-mail&nbsp;».
3. Essayez de modifier le formulaire pour inclure `value="Bob"` sur le premier champ de saisie. Lorsque vous rechargez le code, vous voyez que le premier champ a une valeur de «&nbsp;Bob&nbsp;» saisie par défaut.

#### Champs de texte spécialisés

Le deuxième exercice ci-dessus soulève un point intéressant. Le deuxième champ de saisie attend spécifiquement une adresse e-mail et valide les valeurs saisies en conséquence. Si vous regardez à nouveau le code du formulaire, vous allez voir pourquoi — le deuxième `<input>` a un `type` de `email`.

Il existe plusieurs types de champs de texte spécialisés conçus pour gérer des types de données spécifiques tels que `{{HTMLElement("input/number", "&lt;input type=\"number\"&gt;")}}`, `{{HTMLElement("input/password", "&lt;input type=\"password\"&gt;")}}`, `{{HTMLElement("input/tel", "&lt;input type=\"tel\"&gt;")}}`, `{{HTMLElement("input/url", "&lt;input type=\"url\"&gt;")}}`, et ainsi de suite.

Suivez certains des liens ci-dessus pour découvrir à quoi servent ces types d'entrée. Jetez un œil à notre référence {{HTMLElement("input")}} et voyez si vous pouvez trouver d'autres types de champs de texte spécialisés.

### Les éléments `<label>`

Comme nous l'avons dit plus haut, les éléments {{HTMLElement("label")}} fournissent des étiquettes identifiantes associées aux contrôles de formulaire qui décrivent les données devant y être saisies. Vous pouvez mettre le contenu textuel que vous souhaitez dans les éléments `<label>`, mais ils doivent décrire avec précision les données attendues par le contrôle de formulaire associé. L'association est créée en donnant au contrôle de formulaire un attribut `id`, puis en donnant à l'élément `<label>` un attribut `for` avec la même valeur que l'`id` du contrôle.

Par exemple&nbsp;:

```html
<label for="name">Nom (obligatoire)&nbsp;:</label>
<input type="text" name="name" id="name" required />
```

Les éléments `<label>` sont importants pour plusieurs raisons, notamment&nbsp;:

- Lorsque les utilisateur·ice·s malvoyant·e·s utilisent un lecteur d'écran pour les aider à lire et à interagir avec le contenu d'une page Web, le lecteur d'écran lit le texte de l'étiquette associée lorsque chaque contrôle est rencontré. Cela facilite la compréhension du contenu à saisir dans chaque contrôle.
- Ils permettent de focaliser les éléments du formulaire en cliquant sur le texte de leur étiquette ainsi que sur les contrôles. C'est particulièrement utile pour les utilisateur·ice·s de téléphones mobiles, où il peut être difficile de sélectionner avec précision un élément de formulaire avec votre doigt sur un écran tactile. Agrandir la **zone de frappe** est utile dans de telles circonstances.

#### Étiquettes de formulaire explicites et implicites

Le style d'étiquette de formulaire que vous avez vu ci-dessus est appelé une **étiquette de formulaire explicite** — l'association entre le contrôle et l'étiquette est explicitement faite avec les attributs `id` et `for`. Vous pouvez également implémenter une **étiquette de formulaire implicite** en imbriquant le contrôle à l'intérieur de l'étiquette, comme ceci&nbsp;:

```html
<label>
  Nom (obligatoire)&nbsp;:
  <input type="text" name="name" required />
</label>
```

L'imbrication crée une association implicite entre le contrôle et l'étiquette, et vous n'avez plus besoin des attributs `id` et `for`.

Les deux approches sont correctes, mais nous recommandons d'utiliser l'approche d'étiquetage explicite. En effet, l'association explicite est généralement plus facile à identifier et à comprendre, surtout à mesure que votre code HTML devient plus complexe. De plus, les lecteurs d'écran (et autres technologies d'assistance) ne gèrent pas toujours correctement les étiquettes implicites.

Vous pouvez en savoir plus sur les meilleures pratiques en matière d'étiquetage des formulaires dans [Les étiquettes et les champs de saisie HTML&nbsp;: une histoire d'amour <sup>(angl.)</sup>](https://css-tricks.com/html-inputs-and-labels-a-love-story/), csstricks.com (2021).

### L'élément `<button>`

Lorsqu'un élément {{HTMLElement("button")}} est inclus à l'intérieur d'un élément `<form>`, son comportement par défaut est d'envoyer le formulaire, à condition qu'aucune donnée invalide ne soit présente, ce qui empêche l'envoi par la validation côté client. Vous avez déjà vu ce comportement en jouant avec notre exemple de formulaire de base ci-dessus.

D'autres comportements de bouton peuvent être définis par l'attribut `type` de l'élément `<button>`&nbsp;:

- `<button type="submit">` déclare explicitement qu'un bouton doit se comporter comme un bouton d'envoi. Vous n'avez généralement pas besoin de le déclarer, sauf si, pour une raison quelconque, vous incluez d'autres boutons à l'intérieur de votre `<form>`, et que vous voulez préciser lequel est le bouton d'envoi. C'est très rare.
- `<button type="reset">` crée un _bouton de réinitialisation_ — cela supprime immédiatement toutes les données du formulaire, le réinitialisant à son état initial. **N'utilisez pas de boutons de réinitialisation** — ils étaient populaires aux débuts du web, mais ils sont généralement plus gênants qu'utiles. La plupart des gens ont déjà rempli un long formulaire pour cliquer accidentellement sur le bouton de réinitialisation au lieu du bouton d'envoi, ce qui les oblige à recommencer.
- `<button type="button">` crée un bouton avec le même comportement que les boutons définis en dehors des éléments `<form>`. Comme nous l'avons vu précédemment, ils ne font absolument rien par défaut, et JavaScript est nécessaire pour leur donner une fonctionnalité.

Bien que vous puissiez créer ces types de boutons en utilisant un élément `<input>` avec les mêmes valeurs `type` — comme [`<input type="submit">`](/fr/docs/Web/HTML/Reference/Elements/input/submit), [`<input type="reset">`](/fr/docs/Web/HTML/Reference/Elements/input/reset), et [`<input type="button">`](/fr/docs/Web/HTML/Reference/Elements/input/button) — ils présentent de nombreux inconvénients par rapport à leurs homologues `<button>`. Il est donc recommandé d'utiliser `<button>` à la place.

> [!NOTE]
> Scrimba<sup>[_Partenaire d'apprentissage MDN_](/fr/docs/MDN/Writing_guidelines/Learning_content#liens_partenaires_et_intégrations)</sup> propose une leçon gratuite — [Les bases des formulaires <sup>(angl.)</sup>](https://scrimba.com/learn-responsive-web-design-c029/~031?via=mdn) — qui offre un récapitulatif interactif utile des bases des formulaires que nous avons couvertes précédemment dans cet article.

## Une parenthèse sur l'accessibilité

Nous avons déjà parlé de l'importance des étiquettes de formulaire pour l'accessibilité, mais nous voulions également inclure quelques commentaires sur l'importance générale d'utiliser les éléments sémantiques corrects pour créer des formulaires (par exemple, utilisez un `<button>` pour envoyer votre formulaire, et non un `<div>` programmé pour se comporter comme un `<button>`). Il est parfaitement possible d'utiliser une combinaison de CSS et de JavaScript pour faire en sorte que presque n'importe quel élément HTML ressemble et se comporte comme un élément de formulaire. Les développeur·euse·s le font généralement pour des raisons de conception — certains contrôles de formulaire sont difficiles à mettre en forme.

Cependant, lorsque vous faites cela, vous vous compliquez la vie ainsi qu'à vos utilisateur·ice·s. Le navigateur fournit plusieurs fonctionnalités pour les `<button>` et les contrôles de formulaire par défaut, sans nécessiter de JavaScript ou d'autres codes supplémentaires, pour rendre les formulaires plus utilisables pour tous les utilisateur·ice·s.

Par exemple&nbsp;:

- Les éléments sémantiques sont compris par les technologies d'assistance telles que les lecteurs d'écran, qui communiquent leur signification aux utilisateur·ice·s qui ne peuvent pas les voir.
- Les contrôles de formulaire et les boutons sont accessibles au clavier par défaut. Dans l'exemple précédent, essayez de vous déplacer en avant et en arrière entre les éléments du formulaire en utilisant <kbd>Tab</kbd> et <kbd>Maj</kbd> + <kbd>Tab</kbd> (appelé «&nbsp;tabulation&nbsp;»).
- Remarquez également comment le passage entre les éléments du formulaire fait en sorte que l'élément focalisé soit mis en évidence à l'aide d'un contour bleu (appelé **contour de sélection**). C'est une fonctionnalité importante pour les utilisateur·ice·s de clavier afin de savoir où ils se trouvent actuellement dans le formulaire.

Si vous n'utilisez pas les éléments sémantiques corrects pour implémenter vos formulaires, vos éléments de formulaire ne se comportent pas comme les utilisateur·ice·s s'y attendent et semblent cassés. Vous devez réimplémenter toutes ces fonctionnalités vous-même, ce qui s'accumule rapidement.

## Autres types de contrôles

Il existe de nombreux autres types de contrôles que vous pouvez utiliser pour collecter des données dans un formulaire. Regardons un exemple un peu plus complexe, puis nous l'explorons et l'expliquons.

> [!NOTE]
> Dans cet exemple, nous supposons que l'utilisateur·ice est déjà inscrit·e et connecté·e, il n'est donc pas nécessaire de collecter des informations telles que le nom et l'e-mail.

```html live-sample___form-other-controls
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <title>Second formulaire</title>
  </head>
  <body>
    <form action="./payment_page" method="get">
      <h2>Inscription à la rencontre</h2>
      <fieldset>
        <legend>Choisissez le type de chambre d'hôtel&nbsp;:</legend>
        <div>
          <input
            type="radio"
            id="hotelChoice1"
            name="hotel"
            value="economy"
            checked />
          <label for="hotelChoice1">Économique (+0 €)</label>

          <input type="radio" id="hotelChoice2" name="hotel" value="superior" />
          <label for="hotelChoice2">Supérieure (+50 €)</label>

          <input
            type="radio"
            id="hotelChoice3"
            name="hotel"
            value="penthouse"
            disabled />
          <label for="hotelChoice3">Penthouse (+150 €)</label>
        </div>
      </fieldset>
      <fieldset>
        <legend>Choisissez les cours auxquels participer&nbsp;:</legend>
        <div>
          <input type="checkbox" id="yoga" name="yoga" />
          <label for="yoga">Yoga (+10 €)</label>

          <input type="checkbox" id="coffee" name="coffee" />
          <label for="coffee">Torréfaction de café (+20 €)</label>

          <input type="checkbox" id="balloon" name="balloon" />
          <label for="balloon">Art des animaux en ballon (+5 €)</label>
        </div>
      </fieldset>
      <p>
        <label for="transport">Comment allez-vous arriver&nbsp;:</label>
        <select name="transport" id="transport">
          <option value="">--Veuillez choisir une option--</option>
          <option value="plane">Avion</option>
          <option value="bike">Vélo</option>
          <option value="walk">À pied</option>
          <option value="bus">Bus</option>
          <option value="train">Train</option>
          <option value="jetPack">Jet pack</option>
        </select>
      </p>
      <p>
        <label for="comments">Autres commentaires&nbsp;:</label>
        <textarea id="comments" name="comments" rows="5" cols="33"></textarea>
      </p>
      <p>
        <button>Continuer vers le paiement</button>
      </p>
    </form>
  </body>
</html>
```

Ceci est rendu comme suit&nbsp;:

{{EmbedLiveSample("form-other-controls", "100%", 500, , , , , "allow-forms")}}

Nous vous recommandons d'ouvrir cet exemple dans un onglet de navigateur séparé pendant que vous parcourez les sections suivantes, dans lesquelles nous examinons chaque type de contrôle à tour de rôle. Pour ce faire, copiez le code dans un fichier HTML à l'aide de votre éditeur de code, puis ouvrez-le dans un onglet de navigateur.

Avant de continuer, essayez les différents contrôles de formulaire dans votre copie locale et sélectionnez quelques valeurs. Essayez d'envoyer le formulaire et voyez à quoi ressemblent les données envoyées dans l'URL.

### Boutons radio

Les boutons «&nbsp;Choisissez le type de chambre d'hôtel&nbsp;» sont implémentés à l'aide des contrôles [`<input type="radio">`](/fr/docs/Web/HTML/Reference/Elements/input/radio). Ceux-ci se présentent sous forme de boutons-poussoirs où un seul bouton du groupe peut être sélectionné à la fois — vous ne pouvez pas en sélectionner plusieurs simultanément. Ils tirent leur nom des boutons trouvés sur les radios anciennes, où vous appuyez sur un bouton et celui précédemment sélectionné ressort.

Voici à quoi ressemble notre exemple de code&nbsp;:

```html
<fieldset>
  <legend>Choisissez le type de chambre d'hôtel&nbsp;:</legend>
  <div>
    <input
      type="radio"
      id="hotelChoice1"
      name="hotel"
      value="economy"
      checked />
    <label for="hotelChoice1">Économique (+0 €)</label>

    <input type="radio" id="hotelChoice2" name="hotel" value="superior" />
    <label for="hotelChoice2">Supérieure (+50 €)</label>

    <input
      type="radio"
      id="hotelChoice3"
      name="hotel"
      value="penthouse"
      disabled />
    <label for="hotelChoice3">Penthouse (+150 €)</label>
  </div>
</fieldset>
```

Les champs de type `radio` fonctionnent globalement de la même manière que les champs de type `text`, à quelques différences près&nbsp;:

- Les attributs `name` de chaque ensemble de boutons radio doivent contenir la même valeur afin de les regrouper en un seul ensemble. S'ils contiennent des valeurs différentes, ils constituent alors des ensembles distincts, avec des valeurs différentes lors de l'envoi.
- Vous devez inclure un attribut `value` contenant la valeur à envoyer pour chaque bouton radio. La valeur envoyée est une paire nom/valeur, mais le nom est toujours le même, par exemple `hotel=economy` ou `hotel=superior`.
- L'élément `<label>` pour chaque bouton radio doit décrire ce choix de valeur particulier, plutôt que la valeur globale que vous sélectionnez. La manière préférée de décrire le choix de valeur global est de les encapsuler dans un {{HTMLElement("fieldset")}}, qui prend un élément {{HTMLElement("legend")}} comme enfant contenant la description.

> [!NOTE]
> En plus de structurer et d'étiqueter les formulaires, les ensembles de champs ont d'autres utilisations, comme [désactiver](#désactiver_les_contrôles_de_formulaire) un ensemble entier de contrôles en tant qu'unité unique.

Il convient également de noter que nous avons appliqué l'attribut `checked` au premier bouton radio — cela fait qu'il est sélectionné lorsque la page se charge pour la première fois. Cela signifie qu'une option est toujours sélectionnée, et vous ne pouvez pas désélectionner un bouton radio sans en sélectionner un autre.

Essayez de supprimer l'attribut `checked` du premier bouton radio, enregistrez, puis rechargez la page pour voir l'effet que cela produit. Remettez-le avant de continuer.

#### Désactiver les contrôles de formulaire

Dans l'exemple des boutons radio, vous pouvez remarquer que le troisième bouton radio a l'attribut `disabled` défini. Cela fait que le contrôle rendu est grisé et non sélectionnable. C'est utile dans de nombreuses situations où une option est normalement disponible, mais pas pour le moment. Par exemple, un produit peut être en rupture de stock, ou comme dans notre exemple, les suites penthouse sont toutes réservées&nbsp;!

Vous pouvez définir l'attribut `disabled` sur n'importe quel contrôle de formulaire, y compris les éléments `<button>`. Les éléments `<fieldset>` peuvent également accepter l'attribut `disabled` — cela fait que tous les contrôles de formulaire à l'intérieur du fieldset sont désactivés.

Essayez de définir l'attribut `disabled` sur les deux éléments `<fieldset>`, enregistrez, puis rechargez la page pour voir l'effet que cela produit. Supprimez-les à nouveau avant de continuer.

### Cases à cocher

Nos sélecteurs «&nbsp;classes à suivre&nbsp;» sont implémentés à l'aide des contrôles [`<input type="checkbox">`](/fr/docs/Web/HTML/Reference/Elements/input/checkbox). Ceux-ci se rendent sous forme d'un ensemble de cases à cocher à état activé/désactivé. Contrairement aux boutons radio, vous pouvez en sélectionner plusieurs à la fois.

```html
<fieldset>
  <legend>Choisissez les cours à suivre&nbsp;:</legend>
  <div>
    <input type="checkbox" id="yoga" name="yoga" />
    <label for="yoga">Yoga (+10 €)</label>

    <input type="checkbox" id="coffee" name="coffee" />
    <label for="coffee">Torréfaction de café (+20 €)</label>

    <input type="checkbox" id="balloon" name="balloon" />
    <label for="balloon">Art des animaux en ballon (+5 €)</label>
  </div>
</fieldset>
```

Comme vous pouvez le constater dans les extraits de code, les boutons radio et les cases à cocher sont implémentés de manière très similaire (ils peuvent également prendre l'attribut `checked` pour s'afficher comme présélectionnés au chargement de la page). Leur comportement est également assez similaire, à ceci près que les boutons radio permettent de choisir zéro ou un élément parmi plusieurs, tandis que les cases à cocher permettent de choisir zéro ou plusieurs éléments parmi plusieurs.

La principale différence (outre la valeur `type`&nbsp;!) réside dans le fait que chaque case à cocher possède une valeur `name` différente, et qu'elles ne sont généralement pas dotées d'attributs `value`. En termes de comportement, cela signifie qu'elles représentent des valeurs de données différentes, alors qu'un ensemble de boutons radio n'en représente qu'une seule. Lors de l'envoi, chaque valeur est envoyée avec la valeur `on` si la case à cocher était cochée — `yoga=on`, `balloon=on`, etc.

> [!NOTE]
> Il est possible de modifier la valeur envoyée pour une case à cocher en lui donnant un attribut `value`, par exemple&nbsp;: `<input type="checkbox" id="yoga" name="yoga" value="yes" />` entraîne l'envoi de `yoga=yes` si la case était cochée.

### Menus déroulants

Les menus déroulants, par exemple le contrôle de sélection «&nbsp;Comment arrivez-vous ici&nbsp;» dans notre exemple, sont implémentés non pas avec un type `<input>`, mais avec les éléments {{HTMLElement("select")}} et {{HTMLElement("option")}}&nbsp;:

```html
<label for="transport">Comment arriverez-vous&nbsp;:</label>
<select name="transport" id="transport">
  <option value="">--Veuillez choisir une option--</option>
  <option value="plane">Avion</option>
  <option value="bike">Vélo</option>
  <option value="walk">Marche</option>
  <option value="bus">Bus</option>
  <option value="train">Train</option>
  <option value="jetPack">Jet pack</option>
</select>
```

L'élément `<select>` englobe toutes les différentes options de valeur. C'est là que vous définissez l'attribut `id` qui associe le contrôle à son étiquette, et l'attribut `name` qui définit le nom de l'élément de données à envoyer.

Chaque valeur possible pour l'élément de données est représentée par un élément `<option>`, imbriqué à l'intérieur de l'élément `<select>`. Chaque élément `<option>` peut prendre un attribut `value`, qui définit la valeur à envoyer si cette option est choisie dans le menu déroulant. Si vous ne définissez pas de `value`, le texte à l'intérieur des balises `<option></option>` est utilisé comme valeur.

Vous pouvez également diviser les options à l'intérieur d'un menu déroulant `<select>` en plusieurs sous-groupes en utilisant l'élément {{HTMLElement("optgroup")}}. Consultez la page de référence de cet élément pour en savoir plus.

> [!NOTE]
> Si vous souhaitez qu'une option spécifique soit sélectionnée au chargement de la page, vous pouvez ajouter un attribut `selected` à l'élément `<option>` correspondant.

### Champs de saisie de texte multi-lignes

Les champs de saisie de texte multi-lignes sont créés à l'aide des éléments {{HTMLElement("textarea")}}&nbsp;:

```html
<label for="comments">Autres commentaires&nbsp;:</label>
<textarea id="comments" name="comments" rows="5" cols="33"></textarea>
```

Ils se comportent de la même manière que les éléments `<input type="text">`, sauf qu'ils permettent de saisir plusieurs lignes de texte. L'attribut `rows` définit le nombre de lignes que la zone de texte a par défaut, tandis que l'attribut `cols` définit le nombre de colonnes que la zone de texte a par défaut. S'ils ne sont pas définis, les valeurs utilisées sont `cols="20"` et `rows="2"`.

La plupart des navigateurs affichent les zones de texte avec une poignée de redimensionnement dans un coin, qui peut être utilisée pour redimensionner la zone. Essayez d'utiliser cela pour redimensionner la zone de texte dans notre démo.

## Validation des formulaires

Plus tôt, nous avons examiné certaines des validations de formulaire côté client de base fournies par le navigateur. L'attribut `required` est utilisé pour définir qu'un champ doit être rempli avant que le formulaire puisse être envoyé&nbsp;; il vérifie également que le type de valeur correct est saisi pour des types de valeur spécifiques comme les adresses e-mail, les URL, les nombres, etc. La validation est importante pour deux raisons principales&nbsp;:

- S'assurer que les données sont envoyées dans le bon format afin qu'elles ne causent pas d'erreurs dans votre application.
- S'assurer que les données ne causent pas de problèmes de sécurité. Les personnes malveillantes savent comment envoyer des données formatées spécifiquement afin que, sur des applications non sécurisées, elles puissent exécuter des commandes pour supprimer des bases de données ou prendre le contrôle d'un système.

La validation des formulaires est un sujet vaste qui dépasse le cadre de cet article, nous nous arrêtons donc ici pour le moment. Gardez simplement à l'esprit qu'il existe deux types de validation des formulaires&nbsp;:

- La validation côté client, qui se produit dans le navigateur, est mise en œuvre à l'aide d'une combinaison d'attributs de validation de formulaire (comme `required`) et de JavaScript. La validation côté client est utile pour donner aux utilisateur·ice·s des indices instantanés lorsqu'ils ont saisi des données incorrectes, mais elle n'est pas très efficace pour empêcher les données malveillantes de passer. Il est trop facile de désactiver JavaScript ou de modifier le code côté client afin que la validation ne fonctionne plus.
- La validation côté serveur, qui se produit sur le serveur, est mise en œuvre en utilisant le langage que le serveur utilise. Des messages mal formés peuvent être envoyés à un serveur par accident ou intentionnellement. La sagesse conventionnelle est de s'assurer que votre serveur ne fait confiance à rien de ce qu'un client envoie afin d'éviter les bogues ou les problèmes de sécurité causés par des messages mal formés. La validation côté serveur est excellente pour arrêter les messages malveillants, car il est plus difficile de falsifier le code exécuté sur le serveur. La validation côté serveur n'est pas très efficace pour donner aux utilisateur·ice·s des indices sur les données incorrectes, car les données doivent être envoyées au serveur pour être validées, puis le résultat doit être renvoyé au client avant que l'utilisateur·ice puisse être informé.

En résumé, ne choisissez pas entre la validation côté client ou côté serveur - vous avez besoin des deux. Vous avez besoin de la validation côté client pour donner aux utilisateur·ice·s des retours sur leurs saisies et de la validation côté serveur pour vous assurer que les messages sont dans un format que votre serveur peut gérer en toute sécurité. Si vous voulez commencer à en savoir plus sur la validation, un bon point de départ est [la validation des formulaires côté client](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation).

## Résumé

C'est tout pour le moment. Il y a beaucoup plus à savoir sur les formulaires, mais pour l'instant, nous vous avons donné suffisamment de connaissances pour avancer dans vos études.

Ensuite, nous vous proposerons quelques tests que vous pourrez utiliser pour vérifier dans quelle mesure vous avez compris et retenu les informations que nous avons fournies sur les formulaires HTML.

## Voir aussi

- [Formulaires Web — Travailler avec les données utilisateur·ice](/fr/docs/Learn_web_development/Extensions/Forms)

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content/Test_your_skills/Forms_and_buttons", "Learn_web_development/Core/Structuring_content")}}
