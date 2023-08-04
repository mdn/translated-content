---
title: Comment structurer un formulaire HTML
slug: Learn/Forms/How_to_structure_a_web_form
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/Your_first_form", "Learn/Forms/Basic_native_form_controls", "Learn/Forms")}}

Les bases vues, nous examinons maintenant plus en détail les éléments utilisés pour structurer et donner un sens aux différentes parties d'un formulaire.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Notions concernant les ordinateurs et les
        <a href="/fr/docs/Learn/HTML/Introduction_to_HTML"
          >connaissances de base du HTML</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif&nbsp;:</th>
      <td>
        Comprendre comment structurer les formulaires HTML et leur adjoindre la
        sémantique pour qu'ils soient utilisables et accessibles.
      </td>
    </tr>
  </tbody>
</table>

La souplesse des formulaires HTML fait d'eux une des structures les plus complexes en [HTML](/fr/docs/HTML). vous pouvez construire n'importe quel type de formulaire basique en utilisant les éléments et attributs qui leur sont dédiés. En utilisant une architecture correcte lors de la construction d'un formulaire, vous serez sûrs que le formulaire est à la fois utilisable et [accessible](/fr/docs/MDN/Doc_status/Accessibility).

## L'élément \<form>

L'élément {{HTMLElement("form")}} définit conventionnellement un formulaire et des attributs qui déterminent le comportement du‑dit formulaire. Chaque fois que vous voulez créer un formulaire HTML, vous devez le débuter par cet élément et mettre tout son contenu à l'intérieur. De nombreuses techniques d'assistance ou greffons de navigateur peuvent détecter les éléments {{HTMLElement("form")}} et implémenter des accroches spéciales pour les rendre plus faciles à utiliser.

Nous l'avons déjà rencontré dans l'article précédent.

> **Note :** Il est strictement interdit d'imbriquer un formulaire dans un autre formulaire. L'imbrication peut conduire à des comportements imprévisibles selon le navigateur utilisé.

Notez qu'il est toujours possible d'utiliser un widget de formulaire en dehors d'un élément {{HTMLElement("form")}} mais si vous le faites, ce widget de formulaire n'a rien à voir avec un formulaire. De tels widgets peuvent être utilisés en dehors d'un formulaire, mais alors vous devriez avoir un plan spécial pour de tels widgets, puisqu'ils ne feront rien tout seuls. Vous devrez personnaliser leur comportement avec JavaScript.

> **Note :** HTML5 introduit l'attribut `form` dans les éléments form du HTML. Il devrait vous permettre de lier explicitement un élément avec un formulaire même s'il n'est pas inclus dans un {{ HTMLElement("form") }}. Malheureusement, pour l'instant, l'implémentation de cette fonctionnalité dans les navigateurs n'est pas encore assez fiable.

## Les éléments \<fieldset> et \<legend>

L'élément {{HTMLElement("fieldset")}} est un moyen pratique de créer des groupes de widgets qui partagent le même but, pour le style et la sémantique. Vous pouvez étiqueter un {{HTMLElement("fieldset")}} en incluant un élément {{HTMLElement("legend")}} juste en dessous de la balise d'ouverture \<fieldset>. Le contenu textuel de l'élément {{HTMLElement("legend")}} décrit formellement le but de l'élément {{HTMLElement("fieldset")}} inclus à l'intérieur.

De nombreuses technologies d'assistance utiliseront l'élément {{HTMLElement("legend")}} comme s'il faisait partie de l'étiquette de chaque widget à l'intérieur de l'élément {{HTMLElement("fieldset")}} correspondant. Par exemple, certains lecteurs d'écran comme [Jaws](http://www.freedomscientific.com/products/fs/jaws-product-page.asp) ou [NVDA](http://www.nvda-project.org/) énonceront le contenu de la légende avant d'indiquer l'étiquette de chaque widget.

Voici un petit exemple :

```html
<form>
  <fieldset>
    <legend>Taille du jus de fruits</legend>
    <p>
      <input type="radio" name="size" id="size_1" value="small" />
      <label for="size_1">Petite</label>
    </p>
    <p>
      <input type="radio" name="size" id="size_2" value="medium" />
      <label for="size_2">Moyenne</label>
    </p>
    <p>
      <input type="radio" name="size" id="size_3" value="large" />
      <label for="size_3">Grande</label>
    </p>
  </fieldset>
</form>
```

> **Note :** Vous trouverez cet exemple dans [fieldset-legend.html](https://github.com/mdn/learning-area/blob/main/html/forms/html-form-structure/fieldset-legend.html) (voir [directement aussi](https://mdn.github.io/learning-area/html/forms/html-form-structure/fieldset-legend.html)).

En lisant le formulaire ci-dessus, un lecteur d'écran dira «&nbsp;Taille du jus de fruit&nbsp;: petit&nbsp;» pour le premier widget, «&nbsp;Taille du jus de fruit&nbsp;: moyenne&nbsp;» pour le second, et «&nbsp;Taille du jus de fruit&nbsp;: grande&nbsp;» pour le troisième.

Le scenario d'utilisation du lecteur dans cet exemple est l'un des plus importants. Chaque fois que vous avez un ensemble de boutons radio, vous devez les imbriquer dans un élément {{HTMLElement("fieldset")}}. Il y a d'autres scenarii d'utilisation, et en général l'élément {{HTMLElement("fieldset")}} peut aussi être utilisé pour partager un formulaire. Idéalement, les formulaires longs doivent être éclatés sur plusieurs pages, mais si un formulaire long doit être sur une page unique, le fait de placer les différentes sections connexes dans de différents {{HTMLElement("fieldset")}} peut en améliorer l'utilisation.

En raison de son influence sur les techniques d'assistance, l'élément {{HTMLElement("fieldset")}} est l'un des éléments clés pour la création de formulaires accessibles ; cependant, il vous appartient de ne pas en abuser. Si possible, chaque fois que vous créez un formulaire, essayez d'[écouter comment un lecteur d'écran](https://www.nvaccess.org/download/) l'interprète. Si cela ne paraît pas naturel, essayez d'améliorer la structure du formulaire.

## L'élément \<label>

Comme nous l'avons vu dans l'article précédent, l'élément {{HTMLElement("label")}} est le moyen naturel de définir une étiquette pour un widget de formulaire HTML. C'est l'élément le plus important si vous voulez créer des formulaires accessibles — lorsqu'ils sont correctement implémentés, les lecteurs d'écran énonceront l'étiquette d'un élément de formulaire selon toutes les instructions associées. Prenons cet exemple, que nous avons vu dans l'article précédent&nbsp;:

```html
<label for="name">Nom&nbsp;:</label>
<input type="text" id="name" name="user_name" />
```

Avec un élément `<label>` correctement associé à `<input>` par l'intermédiaire respectivement des attributs `for` et `id` (l'attribut `for` de \<label> référence l'attibut `id` du widget correspondant), un lecteur d'écran lira et dira quelque chose comme «&nbsp;Nom, texte indiqué&nbsp;».

Si l'étiquette n'est pas correctement paramétrée, le lecteur d'écran dira quelque chose comme «&nbsp;Texte édité vierge&nbsp;», ce qui n'est pas utile du tout.

Notez qu'un widget peut être incorporé dans son élément {{HTMLElement("label")}}, ainsi&nbsp;:

```html
<label for="name">
  Nom&nbsp;: <input type="text" id="name" name="user_name" />
</label>
```

Toutefois, même dans ce cas, il est considéré de bonne pratique de définir l'attribut `for` parce que certaines techniques d'assistance ne font pas implicitement le lien entre les étiquettes et les widgets.

### Les étiquettes peuvent être cliquées, aussi&nbsp;!

Autre avantage de bien configurer les étiquettes&nbsp;: vous pouvez cliquer sur l'étiquette pour activer le widget correspondant, dans tous les navigateurs. Utile, par exemple, pour des entrées de texte&nbsp;: vous pouvez cliquer sur l'étiquette ou la zone de texte pour y obtenir le curseur, mais c'est encore plus utile pour les boutons radio et les cases à cocher — la surface active au clic pour une telle commande peut être très réduite, il est donc utile de l'agrandir autant que possible.

Par exemple&nbsp;:

```html
<form>
  <p>
    <label for="taste_1">J'aime les cerises</label>
    <input type="checkbox" id="taste_1" name="taste_cherry" value="1" />
  </p>
  <p>
    <label for="taste_2">J'aime les bananes</label>
    <input type="checkbox" id="taste_2" name="taste_banana" value="2" />
  </p>
</form>
```

> **Note :** Vous trouverez cet exemple dans [checkbox-label.html](https://github.com/mdn/learning-area/blob/main/html/forms/html-form-structure/checkbox-label.html) (à voir [directement aussi](https://mdn.github.io/learning-area/html/forms/html-form-structure/checkbox-label.html)).

### Étiquettes multiples

En fait, il est possible d'associer plusieurs étiquettes à un seul widget, mais ce n'est pas une bonne idée car certaines techniques d'assistance peuvent éprouver du trouble pour leur gestion. Dans le cas d'étiquettes multiples, vous devez incorporer le widget et son étiquette dans un seul élément {{htmlelement("label")}}.

Considérons cet exemple&nbsp;:

```html
<p>
  Les champs obligatoires sont suivis de <span aria-label="required">*</span>.
</p>

<!-- Donc ceci&nbsp;: -->
<!--div>
  <label for="username">Nom&nbsp;:</label>
  <input type="text" name="username" />
  <label for="username"><span aria-label="required">*</span></label>
</div-->

<!-- sera mieux programmé ainsi&nbsp;: -->
<!--div>
  <label for="username">
    <span>Nom&nbsp;:</span>
    <input id="username" type="text" name="username" />
    <span aria-label="required">*</span>
  </label>
</div-->

<!-- mais ceci est probablement encore meilleur&nbsp;: -->
<div>
  <label for="username">Nom&nbsp;:<span aria-label="required">*</span></label>
  <input id="username" type="text" name="username" required />
</div>
```

{{EmbedLiveSample("", 120, 120)}}

Le paragraphe du haut définit la règle pour les éléments obligatoires. Ce doit être au début pour s'assurer que les techniques d'assistance telles que les lecteurs d'écran l'afficheront ou le vocaliseront à l'utilisateur avant qu'il ne trouve un élément obligatoire. Ainsi, ils sauront ce que signifie l'astérisque. Un lecteur d'écran mentionnera l'astérisque en disant «&nbsp;astérisque&nbsp;» ou «&nbsp;obligatoire&nbsp;», selon les réglages du lecteur d'écran — dans tous les cas, ce qui sera dit est clairement précisé dans le premier paragraphe.

- Dans le premier exemple, l'étiquette n'est pas lue du tout avec l'entrée — vous obtenez simplement «&nbsp;texte édité vierge&nbsp;», puis les étiquettes réelles sont lues séparément. Les multiples éléments \<label> embrouillent le lecteur d'écran.
- Dans le deuxième exemple, les choses sont un peu plus claires — l'étiquette lue en même temps que l'entrée est «&nbsp;nom astérisque nom éditer texte&nbsp;», et les étiquettes sont toujours lues séparément. Les choses sont encore un peu confuses, mais c'est un peu mieux cette fois parce que l'entrée a une étiquette associée.
- Le troisième exemple est meilleur — les véritables étiquettes sont toutes lues ensemble, et l'étiquette énoncée avec l'entrée est «&nbsp;nom astériquer éditer texte&nbsp;».

> **Note :** Vous pouvez obtenir des résultats légérement différents, selon votre lecteur d'écran. Ce qui précéde a été testé avec VoiceOver (et NVDA se comporte de la même façon). Nous aimerions avoir un retour sur vos expériences également.

> **Note :** Vous trouverez cet exemple sur GitHub dans [required-labels.html](https://github.com/mdn/learning-area/blob/main/html/forms/html-form-structure/required-labels.html) (à voir [directement aussi](https://mdn.github.io/learning-area/html/forms/html-form-structure/required-labels.html)). Ne lancez pas l'exemple avec 2 ou 3 version non mises en commentaires — le lecteur d'écran serait totalement embrouillé s'il y a plusieurs étiquettes ET plusieurs entrées avec le même ID&nbsp;!

## Structures HTML courantes dans les formulaires

Au-delà des structures propres aux formulaires HTML,rappelons‑nous que les formulaires sont du pur HTML. Vous pouvez donc utiliser toute la puissance du HTML pour structurer un formulaire.

Comme vous avez pu le voir dans les exemples, il est de pratique courante d'envelopper une étiquette et son widget avec un élément {{HTMLElement("div")}}. Les éléments {{HTMLElement("p")}} sont aussi couramment utilisés, tout comme les listes HTML (ces dernières sont très courantes pour structurer plusieurs cases à cocher ou boutons radio).

En plus de l'élément {{HTMLElement("fieldset")}}, il est habituel d'utiliser des titres HTML (par exemple {{htmlelement("h1")}}, {{htmlelement("h2")}}) et des sections (par exemple {{htmlelement("section")}}) pour structurer un formulaire complexe.

Par-dessus tout, il vous appartient de trouver un style où vous vous sentez à l'aise pour coder, et qui se traduit aussi par des formulaires accessibles et utilisables.

Chaque groupe de fonctionnalités séparées doit être contenu dans un élément {{htmlelement("section")}} et les boutons radio dans un élément {{htmlelement("fieldset")}}.

### Apprentissage actif&nbsp;: construire une structure de formulaire

Mettons ces idées en pratique et construisons une structure de formulaire un peu plus sophistiquée — un formulaire de paiement. Il contiendra un certain nombre de types de widgets que vous ne comprenez pas encore — ne vous inquiétez pas pour l'instant ; vous découvrirez comment ils fonctionnent dans l'article suivant ([Les widgets natifs pour formulaire](/fr/docs/Learn/HTML/Forms/The_native_form_widgets)). Pour l'instant, lisez attentivement les descriptions en suivant les instructions ci-dessous et commencez à vous faire une idée des éléments enveloppes que nous utilisons pour structurer le formulaire, et pourquoi.

1. Pour commencer, faites une copie locale de notre [fichier modèle vierge](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) et des [CSS pour notre formulaire de paiement](https://github.com/mdn/learning-area/blob/main/html/forms/html-form-structure/payment-form.css) dans un nouveau répertoire.
2. Primo, appliquez les CSS au HTML en ajoutant la ligne suivante dans l'élément {{htmlelement("head")}} du HTML&nbsp;:

   ```html
   <link href="payment-form.css" rel="stylesheet" />
   ```

3. Ensuite, commencez le formulaire en ajoutant un élément {{htmlelement("form")}}&nbsp;:

   ```html-nolint
   <form></form>
   ```

4. Entre les balises `<form>`, ajoutez un en‑tête et un paragraphe pour informer les utilisateurs comment sont marqués les champs obligatoires&nbsp;:

   ```html-nolint
   <h1>Formulaire de paiement</h1>
   <p>
     Les champs obligatoires sont suivis par un
     <strong><span aria-label="required">*</span></strong
     >.
   </p>
   ```

5. Ensuite, nous ajoutons une grande section de code dans le formulaire, sous la précédente. Ici vous verrez que nous enveloppons les champs d'informations de contact dans des éléments {{htmlelement("section")}} distincts. De plus, nous avons un ensemble de deux boutons radio, que nous mettons chacun à l'intérieur de leur propre élément de liste ({{htmlelement("li")}}). Enfin, nous avons deux zones de texte standard {{htmlelement("input")}} et leurs éléments {{htmlelement("label")}} associés, chacun contenu dans un élément {{htmlelement("p")}}, plus une entrée pour le mot de passe. Ajoutez ce code à votre formulaire maintenant :

   ```html
   <section>
     <h2>Informations de contact</h2>
     <fieldset>
       <legend>Qualité</legend>
       <ul>
         <li>
           <label for="title_1">
             <input type="radio" id="title_1" name="title" value="M." />
             Monsieur
           </label>
         </li>
         <li>
           <label for="title_2">
             <input type="radio" id="title_2" name="title" value="Mme." />
             Madame
           </label>
         </li>
       </ul>
     </fieldset>
     <p>
       <label for="name">
         <span>Nom&nbsp;: </span>
         <strong><span aria-label="required">*</span></strong>
       </label>
       <input type="text" id="name" name="username" required />
     </p>
     <p>
       <label for="mail">
         <span>e-mail&nbsp;:</span>
         <strong><span aria-label="required">*</span></strong>
       </label>
       <input type="email" id="mail" name="usermail" required />
     </p>
     <p>
       <label for="pwd">
         <span>Mot de passe&nbsp;:</span>
         <strong><span aria-label="required">*</span></strong>
       </label>
       <input type="password" id="pwd" name="password" required />
     </p>
   </section>
   ```

6. Nous arrivons maintenant à la deuxième `<section>` de notre formulaire — l'information de paiement. Ici nous avons trois widgets distincts avec leur étiquette, chacun contenu dans un paragraphe `<p>`. Le premier est un menu déroulant ({{htmlelement("select")}}) pour le choix du type de la carte de crédit. Le deuxième est un élément `<input>` de type nombre pour entrer le numéro de la carte de crédit. Le dernier est un élément `<input>` de type `date` pour entrer la date d'expiration de la carte de crédit (il sera accompagné d'un widget dateur pour les navigateurs prenant en charge cette fonctionnalité, et sera un simple champ textuel pour les navigateurs ne la prenant pas en charge). À nouveau, entrez ce qui suit après la section ci‑dessus&nbsp;:

   ```html
   <section>
     <h2>Informations de paiement</h2>
     <p>
       <label for="card">
         <span>Type de carte&nbsp;:</span>
       </label>
       <select id="card" name="usercard">
         <option value="visa">Visa</option>
         <option value="mc">Mastercard</option>
         <option value="amex">American Express</option>
       </select>
     </p>
     <p>
       <label for="number">
         <span>Numéro de carte&nbsp;:</span>
         <strong><span aria-label="required">*</span></strong>
       </label>
       <input type="tel" id="number" name="cardnumber" required />
     </p>
     <p>
       <label for="expiration">
         <span>Date d'expiration&nbsp;:</span>
         <strong><span aria-label="required">*</span></strong>
       </label>
       <input
         type="text"
         id="expiration"
         required="true"
         placeholder="MM/YY"
         pattern="^(0[1-9]|1[0-2])\/([0-9]{2})$" />
     </p>
   </section>
   ```

7. La dernière section est plus simple&nbsp;; elle ne contient qu'un bouton {{htmlelement("button")}} de type `submit`, pour adresser les données du formulaire. Ajoutez ceci au bas du formulaire&nbsp;:

   ```html
   <section>
     <p>
       <button type="submit">Valider le paiement</button>
     </p>
   </section>
   ```

8. Enfin, finalisez votre formulaire en ajoutant la balise fermante pour [`<form>`](/fr/docs/Web/HTML/Element/form)&nbsp;:

   ```html
   </form>
   ```

Vous pouvez voir le formulaire terminé en action ci‑dessous (vous le trouverez aussi sur GitHub — voir la [source](https://github.com/mdn/learning-area/blob/main/html/forms/html-form-structure/payment-form.html) payment-form.html et une exécution [directe](https://mdn.github.io/learning-area/html/forms/html-form-structure/payment-form.html)):

{{EmbedLiveSample("Exemple_en_direct", "100%", "620")}}

## Résumé

Nous savons maintenant ce qu'il faut faire pour structurer de manière appropriée un formulaire HTML&nbsp;; l'article suivant approfondira la mise en œuvre des divers types de widgets pour formulaire pour collecter les informations utilisateur.

## Voir aussi

- [A List Apart: _Sensible Forms: A Form Usability Checklist_](http://www.alistapart.com/articles/sensibleforms/)

{{PreviousMenuNext("Learn/Forms/Your_first_form", "Learn/Forms/Basic_native_form_controls", "Learn/Forms")}}
