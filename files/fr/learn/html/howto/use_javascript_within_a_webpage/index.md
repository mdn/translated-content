---
title: Utiliser JavaScript au sein d'une page web
slug: Learn/HTML/Howto/Use_JavaScript_within_a_webpage
tags:
  - Beginner
  - HTML
  - JavaScript
  - OpenPractices
translation_of: Learn/HTML/Howto/Use_JavaScript_within_a_webpage
original_slug: Apprendre/HTML/Comment/Utiliser_JavaScript_au_sein_d_une_page_web
---
Dans cet article, nous verrons comment améliorer les pages web en ajoutant du code JavaScript dans des documents HTML.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Vous devriez au préalable savoir comment
        <a href="/fr/Learn/HTML/Write_a_simple_page_in_HTML"
          >créer un document HTML simple</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs&nbsp;:</th>
      <td>
        Savoir comment utiliser du code JavaScript dans un fichier HTML et
        apprendre les bonnes pratiques afin que le code JavaScript utilisé soit
        accessible.
      </td>
    </tr>
  </tbody>
</table>

## À propos de JavaScript

{{Glossary("JavaScript")}} est un langage de programmation principalement utilisé côté client et qui peut également être utilisé côté serveur. Il permet entre autres de rendre les pages web interactives. JavaScript offre une myriade de possibilités.

> **Note :** Dans cet article, nous verrons le code HTML nécessaire pour utiliser du code JavaScript. Si vous souhaitez apprendre JavaScript, vous pouvez démarrer par notre article sur [les bases de JavaScript](/fr/Learn/Getting_started_with_the_web/JavaScript_basics). Si vous connaissez déjà JavaScript en partie ou que vous connaissez un autre langage de programmation, vous pouvez consulter [le Guide JavaScript](/fr/docs/Web/JavaScript/Guide).

## Comment déclencher le code JavaScript depuis le document HTML

Dans un navigateur, JavaScript ne fait rien « tout seul ». Il a besoin d'être lancé depuis les pages web HTML. Pour appeler du code JavaScript depuis votre document HTML, vous aurez besoin de l'élément {{htmlelement("script")}}. Il y a deux méthodes pour utiliser `script` : une qui sert lorsqu'on souhaite utiliser un script contenu dans un fichier tiers et une qui sert lorsqu'on intègre directement le code du script dans la page web.

### Faire référence à un script externe

Généralement, un script est écrit dans un fichier `.js` à part. Pour exécuter un script depuis un fichier dans la page web, il suffira d'utiliser {{HTMLElement ('script')}} avec un attribut `src` pointant vers le fichier du script en utilisant l'URL du fichier :

```html
<script src="chemin/vers/le/script.js"></script>
```

### Inscrire le code JavaScript dans le document HTML

Il est également possible d'insérer du code JavaScript directement dans la balise `<script>` sans fournir d'attribut `src`.

```html
<script>
window.addEventListener('load', function () {
  console.log('Cette fonction est exécutée une fois quand la page est chargée.');
});
</script>
```

Cette méthode peut s'avérer pratique quand on n'utilise qu'un code très court. Cela dit, utiliser des fichiers séparés pour stocker le code JavaScript vous permettra :

- de rester concentré-e sur le contenu en cours
- d'écrire du HTML qui se suffit à lui-même
- d'écrire des applications JavaScript structurées

## Utiliser les scripts de façon accessible

L'accessibilité est un enjeu majeur du développement logiciel. JavaScript peut rendre un site web plus accessible lorsqu'il est utilisé correctement. Il peut aussi détruire toute trace d'accessibilité s'il est utilisé sans aucune considération. Voici quelques pratiques qui vous permettront de tirer le meilleur parti de JavaScript pour l'accessibilité :

- **Tout le contenu d'un document doit être disponible sous forme de texte (structuré).** HTML doit être utilisé le plus possible pour stocker le contenu. Par exemple, si vous avez implémenté une super barre de chargement, n'oubliez pas de fournir les pourcentages en texte dans le HTML. De la même façon, les menus déroulants doivent être structurées en [listes non ordonnées](/fr/Learn/HTML/Howto/Create_list_of_items_with_HTML) de [liens](/fr/Learn/HTML/Howto/Create_a_hyperlink).
- **Toutes les fonctionnalités doivent être accessibles depuis le clavier.**

  - Les utilisateurs doivent pouvoir utiliser la touche de tabulation pour naviguer entre les différents contrôles (les liens, les entrées de formulaires, etc.) en suivant un ordre logique.
  - Si vous utilisez les événements liés au pointage (les évènements liés à la souris ou au toucher), les fonctionnalités offertes doivent également être accessibles via le clavier.
  - Testez votre site en utilisant uniquement le clavier.

- **N'utilisez pas de limites de temps arbitraires.** Cela prend plus de temps de naviguer au clavier ou d'écouter le contenu lu par un lecteur d'écran. Il est donc impossible de prévoir combien de temps cela prendra pour qu'un utilisateur ou pour que le navigateur accomplisse une tâche donnée.
- **Les animations doivent être courtes et légères, sans clignotement.** Les clignotements peuvent agacer, ou pire, [entraîner des crises d'épilepsie](http://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html). Si une animation dure plus longtemps que quelques secondes, il faudra fournir une méthode pour l'annuler.
- **Laissez les utilisateurs initier les interactions.** Cela signifie qu'il ne faut pas mettre à jour du contenu, rediriger vers un autre document ou rafraîchir la page automatiquement. Il ne faut pas utiliser de caroussels ou afficher des pop-ups sans aucun avertissement.
- **Ayez un plan de secours pour les utilisateurs qui n'ont pas JavaScript activé.** Certaines personnes désactivent JavaScript afin d'améliorer les performances ou la sécurité. D'autres peuvent rencontrer des problèmes de connectivité qui empêcheraient le chargement des scripts. De plus, certains scripts tiers (publicités, scripts de tracking, extensions de navigateurs) peuvent casser les scripts que vous avez écrit.

  - _A minima_, laissez un court message grâce à la balise {{HTMLElement("noscript")}} : `<noscript>Pour utiliser ce site, merci d'activer JavaScript.</noscript>`
  - Idéalement, lorsque c'est possible, dupliquez les fonctionnalités offertes par JavaScript via le HTML et des scripts exécutés côté serveur.
  - Si vous souhaitez mettre en place des effets visuels, CSS vous permettra d'y parvenir plus intuitivement.
  - _Puisque tout le monde, ou presque, a JavaScript activé, `<noscript>` ne représente donc pas une excuse pour écrire des scripts inaccessibles._

## En savoir plus

- {{htmlelement("script")}}
- {{htmlelement("noscript")}}
- [Une introduction pour utiliser JavaScript de façon accessible, par James Edwards (en anglais)](http://www.sitepoint.com/javascript-accessibility-101/)
- [Les consignes d'accessibilité préconisées par le W3C](http://www.w3.org/TR/WCAG20/)
