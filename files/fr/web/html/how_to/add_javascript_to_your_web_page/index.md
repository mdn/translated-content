---
title: Ajouter JavaScript dans votre page web
slug: Web/HTML/How_to/Add_JavaScript_to_your_web_page
l10n:
  sourceCommit: 116577234db1d6275c74a8bb879fce54d944f4ed
---

Dans cet article, nous verrons comment améliorer les pages web en ajoutant du code JavaScript dans des documents HTML.

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Vous devriez au préalable savoir comment
        <a href="/fr/docs/Learn_web_development/Getting_started/Your_first_website"
          >créer un document HTML simple</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs d'apprentissage&nbsp;:</th>
      <td>
        Savoir comment utiliser du code JavaScript dans un fichier HTML et
        apprendre les bonnes pratiques afin que le code JavaScript utilisé soit
        accessible.
      </td>
    </tr>
  </tbody>
</table>

## À propos de JavaScript

{{Glossary("JavaScript")}} est un langage de programmation principalement utilisé côté client pour rendre les pages web interactives. Vous _pouvez_ créer des pages web étonnantes sans JavaScript, mais JavaScript ouvre un tout nouveau niveau de possibilités.

> [!NOTE]
> Dans cet article, nous verrons le code HTML nécessaire pour utiliser du code JavaScript. Si vous souhaitez apprendre JavaScript, vous pouvez démarrer par notre article sur [les bases de JavaScript](/fr/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity). Si vous connaissez déjà JavaScript en partie ou que vous connaissez un autre langage de programmation, vous pouvez consulter [le Guide JavaScript](/fr/docs/Web/JavaScript/Guide).

## Comment déclencher le code JavaScript depuis le document HTML

Dans un navigateur, JavaScript ne fait rien « tout seul ». Il a besoin d'être lancé depuis les pages web HTML. Pour appeler du code JavaScript depuis votre document HTML, vous aurez besoin de l'élément {{HTMLElement("script")}}. Il y a deux méthodes pour utiliser `script`, une qui sert lorsqu'on souhaite utiliser un script contenu dans un fichier tiers et une qui sert lorsqu'on intègre directement le code du script dans la page web.

### Faire référence à un script externe

Généralement, un script est écrit dans un fichier `.js` à part. Pour exécuter un script depuis un fichier `.js` dans la page web, il suffira d'utiliser {{HTMLElement('script')}} avec un attribut `src` pointant vers le fichier du script en utilisant l'[URL](/fr/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL) du fichier&nbsp;:

```html
<script src="chemin/vers/le/script.js"></script>
```

### Inscrire le code JavaScript dans le document HTML

Il est également possible d'insérer du code JavaScript directement dans la balise `<script>` sans fournir d'attribut `src`.

```html
<script>
  console.log("Du code");
</script>
```

Cette méthode peut s'avérer pratique quand on n'utilise qu'un code très court. Cela dit, utiliser des fichiers séparés pour stocker le code JavaScript vous permettra&nbsp;:

- de rester concentré-e sur le contenu en cours
- d'écrire du HTML qui se suffit à lui-même
- d'écrire des applications JavaScript structurées

> [!NOTE]
> Pour les scripts en ligne et pour les scripts externes sans les attributs [`defer`](/fr/docs/Web/HTML/Reference/Elements/script#defer) ou [`async`](/fr/docs/Web/HTML/Reference/Elements/script#async), le script est exécuté immédiatement lorsque le navigateur rencontre l'élément `<script>` lors de l'analyse du HTML. Cela signifie que le script ne peut pas accéder aux éléments HTML qui apparaissent plus loin dans le document. Pour accéder à ces éléments, envisagez de déplacer le script à la fin du corps du document (juste avant la balise fermante `</body>`), ou utilisez l'attribut `defer` sur les scripts externes.

## Utiliser les scripts de façon accessible

L'accessibilité est un enjeu majeur du développement logiciel. JavaScript peut rendre un site web plus accessible lorsqu'il est utilisé correctement. Il peut aussi détruire toute trace d'accessibilité s'il est utilisé sans aucune considération. Voici quelques pratiques qui vous permettront de tirer le meilleur parti de JavaScript pour l'accessibilité&nbsp;:

- **Tout le contenu d'un document doit être disponible sous forme de texte (structuré).** HTML doit être utilisé le plus possible pour stocker le contenu. Par exemple, si vous avez implémenté une super barre de chargement, n'oubliez pas de fournir les pourcentages en texte dans le HTML. De la même façon, les menus déroulants doivent être structurées en [listes non ordonnées](/fr/docs/Learn/HTML/Howto/Create_list_of_items_with_HTML) de [liens](/fr/docs/Learn/HTML/Howto/Create_a_hyperlink).
- **Toutes les fonctionnalités doivent être accessibles depuis le clavier.**
  - Les utilisateur·ice·s doivent pouvoir utiliser la touche de tabulation pour naviguer entre les différents contrôles (les liens, les entrées de formulaires, etc.) en suivant un ordre logique.
  - Si vous utilisez les événements liés au pointage (les évènements liés à la souris ou au toucher), les fonctionnalités offertes doivent également être accessibles via le clavier.
  - Testez votre site en utilisant uniquement le clavier.

- **N'utilisez pas de limites de temps arbitraires.** Cela prend plus de temps de naviguer au clavier ou d'écouter le contenu lu par un lecteur d'écran. Il est donc impossible de prévoir combien de temps cela prendra pour qu'un·e utilisateur·ice ou pour que le navigateur accomplisse une tâche donnée.
- **Les animations doivent être courtes et légères, sans clignotement.** Les clignotements peuvent agacer, ou pire, [entraîner des crises d'épilepsie <sup>(angl.)</sup>](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html). Si une animation dure plus longtemps que quelques secondes, il faudra fournir une méthode pour l'annuler.
- **Laissez les utilisateur·ice·s initier les interactions.** Cela signifie qu'il ne faut pas mettre à jour du contenu, rediriger vers un autre document ou rafraîchir la page automatiquement. Il ne faut pas utiliser de caroussels ou afficher des pop-ups sans aucun avertissement.
- **Ayez un plan de secours pour les utilisateur·ice·s qui n'ont pas JavaScript activé.** Certaines personnes désactivent JavaScript afin d'améliorer les performances ou la sécurité. D'autres peuvent rencontrer des problèmes de connectivité qui empêcheraient le chargement des scripts. De plus, certains scripts tiers (publicités, scripts de tracking, extensions de navigateurs) peuvent casser les scripts que vous avez écrit.
  - _A minima_, laissez un court message grâce à la balise {{HTMLElement("noscript")}}&nbsp;: `<noscript>Pour utiliser ce site, merci d'activer JavaScript.</noscript>`
  - Idéalement, lorsque c'est possible, dupliquez les fonctionnalités offertes par JavaScript via le HTML et des scripts exécutés côté serveur.
  - Si vous souhaitez mettre en place des effets visuels, CSS vous permettra d'y parvenir plus intuitivement.
  - _Puisque tout le monde, ou presque, a JavaScript activé, `<noscript>` ne représente donc pas une excuse pour écrire des scripts inaccessibles._

## Voir aussi

- L'élément {{HTMLElement("script")}}
- L'élément {{HTMLElement("noscript")}}
- [Une introduction pour utiliser JavaScript de façon accessible, par James Edwards <sup>(angl.)</sup>](https://www.sitepoint.com/javascript-accessibility-101/)
- [Les consignes d'accessibilité préconisées par le W3C <sup>(angl.)</sup>](https://www.w3.org/TR/WCAG20/)
