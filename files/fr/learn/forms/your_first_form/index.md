---
title: Mon premier formulaire HTML
slug: Learn/Forms/Your_first_form
---

{{LearnSidebar}}{{NextMenu("Learn/Forms/How_to_structure_a_web_form", "Learn/Forms")}}

Le premier article de notre série vous offre une toute première expérience de création de formulaire en HTML, y compris sa conception, sa mise en œuvre en utilisant les bons éléments HTML, l'ajout de quelques très simples décorations avec les CSS et la façon dont les données sont envoyées à un serveur.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Notions concernant les ordinateurs et les
        <a href="/fr/Apprendre/HTML/Introduction_à_HTML"
          >connaissances de base du HTML</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif&nbsp;:</th>
      <td>
        Comprendre ce que sont les formulaires HTML, à quoi ils servent, comment
        les concevoir et quels sont les éléments de base HTML nécessaires dans
        les cas simples.
      </td>
    </tr>
  </tbody>
</table>

## Un formulaire HTML, qu'est-ce ?

Les formulaires HTML sont un des vecteurs principaux d'interaction entre un utilisateur et un site web ou une application. Ils permettent à l'utilisateur d'envoyer des données au site web. La plupart du temps, ces données sont envoyées à des serveurs web mais la page peut aussi les intercepter et les utiliser elle-même.

Un formulaire HTML est composé d'un ou plusieurs widgets. Ceux-ci peuvent être des zones de texte (sur une seule ligne ou plusieurs lignes), des boîtes à sélection, des boutons, des cases à cocher ou des boutons radio. La plupart du temps, ces items sont associés à un libellé qui décrit leur rôle — des étiquettes correctement implémentées sont susceptibles d'informer clairement l'utilisateur normal ou mal‑voyant sur ce qu'il convient d'entrer dans le formulaire.

La principale différence entre un formulaire HTML et un document HTML habituel réside dans le fait que, généralement, les données collectées par le formulaire sont envoyées vers un serveur web. Dans ce cas, vous avez besoin de mettre en place un serveur web pour récupérer ces données et les traiter. La mise en place d'un tel serveur ne fait pas partie des sujets abordés dans ce guide. Si vous souhaitez toutefois en savoir plus, voyez «&nbsp;[Envoi des données de formulaire](/fr/docs/Learn/Forms/Envoyer_et_extraire_les_données_des_formulaires)&nbsp;» plus loin dans ce module.

## Concevoir le formulaire

Avant de passer au code, il est souhaitable de prendre un peu de recul et accorder quelques instants de réflexion à votre formulaire. Dessiner un rapide croquis vous permettra de définir les informations que vous souhaitez demander à l'utilisateur. Du point de vue de l'expérience utilisateur, il est important de garder à l'esprit que plus vous demandez d'informations, plus vous risquez que votre utilisateur s'en aille. Restez simple et ne perdez pas votre objectif de vue : ne demandez que ce dont vous avez absolument besoin. La conception de formulaires est une phase importante de la construction d'un site internet ou d'une application. L'approche de l'expérience utilisateur de ces formulaires ne fait pas partie des objectifs de ce guide, mais si vous souhaitez approfondir ce sujet, vous pouvez lire les articles suivants :

- Smashing Magazine a de très bons [articles à propos de l'expérience utilisateur dans les formulaires](http://uxdesign.smashingmagazine.com/tag/forms/), mais le plus intéressant est certainement leur «&nbsp;[Guide complet pour des formulaires web facilement utilisables](http://uxdesign.smashingmagazine.com/2011/11/08/extensive-guide-web-form-usability/)&nbsp;».
- UXMatters est une ressource bien pensée avec de très bons conseils allant des [meilleures pratiques de base](http://www.uxmatters.com/mt/archives/2012/05/7-basic-best-practices-for-buttons.php) jusqu'à des sujets plus complexes tels que [les formulaires sur plusieurs pages](http://www.uxmatters.com/mt/archives/2010/03/pagination-in-web-forms-evaluating-the-effectiveness-of-web-forms.php).

Dans ce guide, nous allons concevoir un formulaire de contact simple. Posons les premières pierres.

![Le croquis du formulaire que l'on veut créer](form-sketch-low.jpg)

Notre formulaire contiendra trois champs de texte et un bouton. Nous demandons simplement à notre utilisateur son nom, son adresse électronique et le message qu'il souhaite envoyer. En appuyant sur le bouton, le message sera envoyé au serveur web.

## Apprentissage actif&nbsp;: mise en œuvre de notre formulaire HTML

Très bien, nous sommes maintenant prêts à passer au HTML et à coder notre formulaire. Pour construire notre formulaire, nous aurons besoin des éléments HTML suivants : {{HTMLElement("form")}}, {{HTMLElement("label")}}, {{HTMLElement("input")}}, {{HTMLElement("textarea")}} et {{HTMLElement("button")}}.

Avant de poursuivre, faites une copie locale de notre [simple modèle HTML](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) — vous y incorporerez votre formulaire.

### L'élément {{HTMLElement("form")}}

Tous les formulaires HTML débutent par un élément {{HTMLElement("form")}} comme celui-ci :

```html
<form action="/ma-page-de-traitement" method="post">…</form>
```

Cet élément définit un formulaire. C'est un élément conteneur au même titre que les éléments {{HTMLElement("div")}} ou {{HTMLElement("p")}}, mais il accepte aussi quelques attributs spécifiques afin de contrôler la manière dont il se comporte. Tous ses attributs sont optionnels mais définir au moins les attributs `action` et `method` est considéré comme de bonne pratique.

- L'attribut `action` définit l'emplacement (une URL) où doivent être envoyées les données collectées par le formulaire.
- L'attribut `method` définit la méthode HTTP utilisée pour envoyer les données (cela peut être « get » ou « post »).

> **Note :** Si vous souhaitez en savoir plus sur le fonctionnement de ces attributs, cela est détaillé dans l'article [«&nbsp;Envoi des données de formulaire](/fr/docs/Learn/Forms/Envoyer_et_extraire_les_données_des_formulaires)&nbsp;».

Pour le moment, ajoutez l'élément {{htmlelement("form")}} ci dessus dans le corps de votre HTML.

### Les éléments {{HTMLElement("label")}}, {{HTMLElement("input")}} et {{HTMLElement("textarea")}}

Notre formulaire de contact est très simple et ne contient que trois champs de texte, chacun ayant une étiquette. Le champ d'entrée pour le nom est un champ de texte sur une seule ligne, le champ pour l'adresse électronique est un champ de texte sur une ligne qui n'accepte que des adresses électroniques et enfin le champ pour le message est un champ de texte sur plusieurs lignes.

En terme de code HTML, nous avons besoin de quelque chose qui ressemble à ceci pour mettre en œuvre nos widgets de formulaire.

```html
<form action="/ma-page-de-traitement" method="post">
  <ul>
    <li>
      <label for="name">Nom&nbsp;:</label>
      <input type="text" id="name" name="user_name" />
    </li>
    <li>
      <label for="mail">E-mail&nbsp;:</label>
      <input type="email" id="mail" name="user_mail" />
    </li>
    <li>
      <label for="msg">Message&nbsp;:</label>
      <textarea id="msg" name="user_message"></textarea>
    </li>
  </ul>
</form>
```

Les éléments {{HTMLElement("div")}} sont ici pour structurer notre code et rendre la mise en page plus facile (voir ci-dessous). Veuillez noter l'utilisation de l'attribut `for` sur tous les éléments {{HTMLElement("label")}}. C'est une manière formelle de lier un libellé à un élément du formulaire. Cet attribut fait référence à l'`id` de l'élément correspondant. Il y a plusieurs avantages à faire ainsi. Le plus évident de permettre à l'utilisateur de cliquer sur l'étiquette pour activer le bloc correspondant. Si vous souhaitez mieux comprendre les bénéfices de cet attribut, tout est détaillé dans cet article : [Comment structurer un formulaire HTML](/fr/docs/HTML/Formulaires/Comment_structurer_un_formulaire_HTML).

Concernant l'élément {{HTMLElement("input")}}, l'attribut le plus important est l'attribut `type`. Ce dernier est extrêmement important puisqu'il définit le comportement de l'élément {{HTMLElement("input")}}. Il peut radicalement changer le sens de l'élément, faites-y attention. Si vous voulez en savoir plus à ce propos, vous pouvez lire l'article au sujet des [widgets natifs pour formulaire](/fr/docs/Learn/Forms/Les_blocs_de_formulaires_natifs).

- Dans notre exemple nous n'utilisons que la valeur `text` — qui est la valeur par défaut de cet attribut et représente un champ de texte basique sur une seule ligne acceptant n'importe quel type de texte.
- Pour la deuxième entrée, nous utilisons la valeur `email` qui définit un champ de texte sur une seule ligne n'acceptant que des adresses électroniques valides. Cette dernière valeur transforme un champ basique en une sorte de champ «&nbsp;intelligent&nbsp;» qui réalise des vérifications sur les données fournies par l'utilisateur. Vous trouverez plus de détails sur la validation des formulaires dans l'article [Validation des données de formulaire](/fr/docs/Learn/Forms/Validation_donnees_formulaire).

Last but not least, remarquez la syntaxe de `<input>` vs `<textarea></textarea>`. C'est une des bizarreries du HTML. La balise `<input>` est un élément vide, ce qui signifie qu'il n'a pas besoin de balise fermante. Au contraire, {{HTMLElement("textarea")}} n'est pas un élément vide, il faut donc le fermer avec la balise fermante appropriée. Cela a un effet sur une caractéristique spécifique des formulaires HTML : la manière dont vous définissez la valeur par défaut. Pour définir une valeur par défaut d'un élément {{HTMLElement("input")}} vous devez utiliser l'attribut `value` de la manière suivante :

```html
<input
  type="text"
  value="par défaut cet élément sera renseigné avec ce texte" />
```

A contrario, si vous souhaitez définir la valeur par défaut d'un élément {{HTMLElement("textarea")}}, il suffit simplement de mettre la valeur par défaut entre les balises ouvrantes et fermantes de l'élément {{HTMLElement("textarea")}} de la manière suivante :

```html
<textarea>par défaut cet élément sera renseigné avec ce texte</textarea>
```

### L'élément {{HTMLElement("button")}}

Notre formulaire est presque terminé. Il nous suffit seulement d'ajouter un bouton pour permettre à l'utilisateur de nous envoyer les données renseignées dans le formulaire. Ceci se fait simplement en ajoutant d'un élément {{HTMLElement("button")}} ; ajoutez‑le juste avant la balise fermante `</form> :`

```html
<div class="button">
  <button type="submit">Envoyer le message</button>
</div>
```

Comme vous le voyez l'élément {{htmlelement("button")}} accepte aussi un attribut de type — il peut prendre une des trois valeurs&nbsp;: `submit`, `reset` ou `button`.

- Un clic sur un bouton `submit` (valeur par défaut) envoie les données du formulaire vers la page définie par l'attribut `action` de l'élément {{HTMLElement("form")}}.
- Un clic sur un bouton `reset` réinitialise tous les widgets du formulaire à leurs valeurs par défaut immédiatement. Du point de vue de l'expérience utilisateur, utiliser un tel bouton est une mauvaise pratique.
- Un clic sur un bouton `button` ne fait... rien ! Cela peut paraître stupide mais c'est en réalité très pratique pour concevoir des boutons personnalisés avec JavaScript.

> **Note :** Vous pouvez aussi utiliser l'élément {{HTMLElement("input")}} avec le type approprié pour produire un bouton, par exemple `<input type="submit">`. Le principal avantage de {{HTMLElement("button")}} par rapport à l'élément {{HTMLElement("input")}} est que ce dernier ne permet d'utiliser que du texte comme étiquette tandis que l'élément {{HTMLElement("button")}} permet d'utiliser n'importe quel contenu HTML, autorisant ainsi des textes de bouton plus complexes et créatifs.

## Mise en page élémentaire du formulaire

Nous avons désormais notre formulaire HTML, et si vous le regardez dans votre navigateur préféré, vous verrez qu'il est plutôt laid.

> **Note :** Si vous pensez que vous n'avez pas écrit un code HTML correct, faites la comparaison avec celui de notre exemple terminé — voyez [first-form.html](https://github.com/mdn/learning-area/blob/main/html/forms/your-first-HTML-form/first-form.html) (ou [également directement](https://mdn.github.io/learning-area/html/forms/your-first-HTML-form/first-form.html)).

Les formulaires sont notoirement embêtants à présenter joliment. Apprendre la mise en page ou la décoration des formulaires sort du cadre de cet article, donc pour le moment nous allons simplement ajouter quelques indications au CSS pour lui donner un air convenable.

Tout d'abord, ajoutons un élément {{htmlelement("style")}} à notre page, dans l'en‑tête HTML. Comme ceci&nbsp;:

```html
<style>
  …
</style>
```

Entre les balises style, ajoutons le CSS suivant, juste comme indiqué&nbsp;:

```css
form {
  /* On centre le formulaire */
  margin: 0 auto;
  width: 400px;
  /* Le contour du formulaire */
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 1em;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

form li + li {
  margin-top: 1em;
}

label {
  /* Taille et alignement uniformes */
  display: inline-block;
  width: 90px;
  text-align: right;
}

input,
textarea {
  /* On s'assure que les champs texte ont la même police
     Par défaut, les zones de texte ont une police à chasse
     fixe. */
  font: 1em sans-serif;

  /* Taille uniforme pour des champs */
  width: 300px;
  box-sizing: border-box;

  /* On utilise la même bordure que pour le formulaire */
  border: 1px solid #999;
}

input:focus,
textarea:focus {
  /* On rajoute une mise en avant pour les éléments avec
     le focus. */
  border-color: #000;
}

textarea {
  /* On aligne les textes sur plusieurs lignes avec leur
     libellé. */
  vertical-align: top;

  /* On fournit un peut d'espace pour saisir du texte. */
  height: 5em;

  /* On permet de redimensionner verticalement. */
  resize: vertical;
}

.button {
  /* On aligne les boutons avec les champs texte. */
  padding-left: 90px; /* La même taille que les libellés */
}

button {
  /* Une marge supplémentaire représentant approximativement
     le même espace qu'entre les libellés et les champs. */
  margin-left: 0.5em;
}
```

Désormais notre formulaire a une bien meilleure allure.

> **Note :** Il est sur GitHub dans [first-form-styled.html](https://github.com/mdn/learning-area/blob/main/html/forms/your-first-HTML-form/first-form-styled.html) (à voir aussi [directement](https://mdn.github.io/learning-area/html/forms/your-first-HTML-form/first-form-styled.html)).

## Envoyer les données au serveur Web

Finalement, gérer les données du formulaire côté serveur web est peut être le plus compliqué. Comme dit auparavant, un formulaire HTML est une manière pratique de demander de l'information à un utilisateur et de les adresser à un serveur web.

L'élément {{HTMLElement("form")}} définit où et comment les données sont envoyées, merci aux attributs `action` et `method`.

Mais ce n'est pas tout. Nous avons aussi besoin de donner un nom à nos données. Ces noms sont importants pour deux raisons. Du côté du navigateur, cela sert à définir le nom de chaque élément de donnée. Du côté du serveur, chaque information doit avoir un nom pour être manipulée correctement.

Pour nommer vos données vous devez utiliser l'attribut `name` pour identifier bien précisément l'élément d'information collecté par chacun des widgets. Regardons à nouveau le code de notre formulaire&nbsp;:

```html
<form action="/ma-page-de-traitement" method="post">
  <ul>
    <li>
      <label for="name">Nom&nbsp;:</label>
      <input type="text" id="name" name="user_name" />
    </li>
    <li>
      <label for="mail">E-mail&nbsp;:</label>
      <input type="email" id="mail" name="user_email" />
    </li>
    <li>
      <label for="msg">Message&nbsp;:</label>
      <textarea id="msg" name="user_message"></textarea>
    </li>

    …
  </ul>
</form>
...
```

Dans notre exemple, le formulaire enverra trois informations nommées respectivement «&nbsp;`user_name`&nbsp;», «&nbsp;`user_email`&nbsp;» et «&nbsp;`user_message`&nbsp;». Ces informations seront envoyées à l'URL « `/ma-page-de-traitement` » avec la méthode HTTP POST.

Du côté du serveur, le script à l'URL « `/ma-page-de-traitement` » recevra les données sous forme d'une liste de trois éléments clé/valeur intégrés à la requête HTTP. À vous de définir comment ce script va manipuler les données. Chacun des langages serveurs (PHP, Python, Ruby, Java, C#, etc.) a son propre mécanisme pour traiter ces données. Il n'appartient pas à ce guide d'approfondir ce sujet, mais si vous souhaitez en savoir plus, nous avons mis quelques exemples dans l'article [Envoi des données de formulaire](/fr/docs/Learn/Forms/Envoyer_et_extraire_les_donn%C3%A9es_des_formulaires).

## Résumé

Félicitations ! Vous avez construit votre premier formulaire HTML. Il ressemble à ceci&nbsp;:

```html hidden
<form action="/ma-page-de-traitement" method="post">
  <div>
    <label for="name">Nom&nbsp;:</label>
    <input type="text" id="name" name="user_name" />
  <div>
  <div>
    <label for="mail">E-mail&nbsp;:</label>
    <input type="email" id="mail" name="user_email" />
  </div>
  <div>
    <label for="msg">Message&nbsp;:</label>
    <textarea id="msg" name="user_message"></textarea>
  </div>

  <div class="button">
    <button type="submit">Envoyer votre message</button>
  </div>
</form>
```

```css hidden
form {
  /* Pour centrer le formulaire sur la page */
  margin: 0 auto;
  width: 400px;

  /* Encadré pour voir les limites du formulaire */
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 1em;
}

div + div {
  margin-top: 1em;
}

label {
  /* On s'assure que tous les libellés ont la même taille
     et sont correctement alignés. */
  display: inline-block;
  width: 90px;
  text-align: right;
}

input,
textarea {
  /* On s'assure que les champs texte ont la même police
     Par défaut, les zones de texte ont une police à chasse
     fixe. */
  font: 1em sans-serif;

  /* Taille uniforme pour des champs */
  width: 300px;
  box-sizing: border-box;

  /* On utilise la même bordure que pour le formulaire */
  border: 1px solid #999;
}

input:focus,
textarea:focus {
  /* On rajoute une mise en avant pour les éléments avec
     le focus. */
  border-color: #000;
}

textarea {
  /* On aligne les textes sur plusieurs lignes avec leur
     libellé. */
  vertical-align: top;

  /* On fournit un peut d'espace pour saisir du texte. */
  height: 5em;

  /* On permet de redimensionner verticalement. */
  resize: vertical;
}

.button {
  /* On aligne les boutons avec les champs texte. */
  padding-left: 90px; /* La même taille que les libellés */
}

button {
  /* Une marge supplémentaire représentant approximativement
     le même espace qu'entre les libellés et les champs. */
  margin-left: 0.5em;
}
```

{{EmbedLiveSample("", "100%", "240")}}

Toutefois, ce n'est qu'un début — il est désormais temps de regarder plus en détail. Les formulaires HTML sont bien plus puissants que ce que vous avez pu voir ici et les autres articles de ce guide vous aiderons à maîtriser le reste.

{{NextMenu("Learn/Forms/How_to_structure_a_web_form", "Learn/Forms")}}
