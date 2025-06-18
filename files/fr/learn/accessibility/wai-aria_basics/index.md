---
title: Les bases de WAI-ARIA
slug: Learn/Accessibility/WAI-ARIA_basics
l10n:
  sourceCommit: ebd38013d2af33dd860b50cee59802661aa3c966
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Accessibility/CSS_and_JavaScript","Learn/Accessibility/Multimedia", "Learn/Accessibility")}}

Nous avons vu dans l'article précédent qu'il pouvait être difficile de créer des contrôles d'interface complexes à l'aide de HTML non-sémantique et dont le contenu est géré en JavaScript. WAI-ARIA est une technologie qui aide à résoudre ces problèmes en ajoutant une couche sémantique supplémentaire qui peut être utilisée par les navigateurs et les outils d'assistance pour indiquer à la personne ce dont il s'agit. Dans cet article, nous verrons comment l'utiliser à un premier niveau pour améliorer l'accessibilité.

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Notions de base en informatique, compréhension élémentaire de HTML, CSS et JavaScript, compréhension <a href="/fr/docs/Learn/Accessibility">des articles précédent de ce module</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs&nbsp;:</th>
      <td>
        Se familiariser avec WAI-ARIA et apprendre comment il peut être utilisé pour fournir une couche sémantique complémentaire utile, permettant d'améliorer l'accessibilité aux endroits nécessaires.
      </td>
    </tr>
  </tbody>
</table>

## Qu'est-ce que WAI-ARIA&nbsp;?

Commençons par définir ce qu'est WAI-ARIA et par voir ce qu'il peut apporter.

### Une nouvelle classe de problème

Dès lors que les applications web ont gagné en complexité et en dynamisme, certains problèmes et certaines fonctionnalités d'accessibilité sont apparus.

HTML a par exemple introduit différents éléments sémantiques pour les composants génériques d'une page ([`<nav>`](/fr/docs/Web/HTML/Element/nav), [`<footer>`](/fr/docs/Web/HTML/Element/footer), etc.). Avant que ces éléments soient disponibles, les équipes de développement utilisaient plutôt des éléments [`<div>`](/fr/docs/Web/HTML/Element/div) avec des identifiants ou des classes (par exemple `<div class="nav">`), mais cette méthode ne permettait pas à un programme de trouver simplement certaines fonctionnalités de la page, comme les blocs de navigation.

La solution initiale consista alors à ajouter un ou plusieurs liens masqués en haut de la page pour pointer vers la navigation (ou autre chose). Par exemple :

```html
<a href="#hidden" class="hidden">Accéder directement à la navigation</a>
```

Toutefois, cette solution n'était pas précise et pouvait uniquement être utilisée lorsque le lecteur d'écran narrait depuis le haut de la page.

Par ailleurs, les applications ont commencé à fournir des contrôles complexes, comme des sélecteurs de date, des curseurs, etc. HTML a apporté [`<input type="date">`](/fr/docs/Web/HTML/Element/input/date) et [`<input type="range">`](/fr/docs/Web/HTML/Element/input/range).

À leurs débuts, ces éléments étaient mal pris en charge et il était (voire il est toujours) difficile de les mettre en forme, entraînant les équipes de conception et de développement à choisir des solutions sur mesure. Plutôt que d'utiliser des fonctionnalités natives, ils tiraient parti de bibliothèques JavaScript qui généraient de tels contrôles sous la forme de [`<div>`](/fr/docs/Web/HTML/Element/div) imbriqués, mis en forme avec CSS et contrôlés avec JavaScript.

Cela fonctionne visuellement, mais les lecteurs d'écran ne peuvent pas interpréter le rôle de ces éléments. Ces outils indiquent alors aux utilisatrices et utilisateurs qu'il y a un ensemble d'élément sans sémantique permettant de décrire leur fonctionnalité.

### L'arrivée de WAI-ARIA

[WAI-ARIA](https://www.w3.org/TR/wai-aria/) (<i lang="en">Web Accessibility Initiative - Accessible Rich Internet Applications</i>) est une spécification écrite par le W3C, qui définit un ensemble d'attributs HTML supplémentaires, qui peuvent être appliqués aux éléments afin de fournir une sémantique complémentaire et d'améliorer l'accessibilité où elle fait défaut. La spécification définit trois grandes fonctionnalités&nbsp;:

- [Les rôles](/fr/docs/Web/Accessibility/ARIA/Roles)
  - : Ils définissent ce qu'est un élément ou ce qu'il fait. La plupart sont appelés des rôles de repère (<i lang="en">landmark roles</i>), car ils dupliquent la valeur sémantique des éléments structurels, comme `role="navigation"` ([`<nav>`](/fr/docs/Web/HTML/Element/nav)) or `role="complementary"` ([`<aside>`](/fr/docs/Web/HTML/Element/aside)). D'autres rôles décrivent différentes structures qu'on retrouve fréquemment sur les pages comme `role="banner"`, `role="search"`, `role="tablist"`, `role="tabpanel"`.
- Les propriétés
  - : Elles définissent des propriétés des éléments, qui peuvent être utilisées pour indiquer une sémantique supplémentaire. Par exemple, `aria-required="true"` indiquera qu'un champ doit être renseigné afin que le formulaire soit valide&nbsp;; `aria-labelledby="label"` permettra d'indiquer un identifiant d'un élément qui pourra être utilisé comme libellé pour n'importe quoi sur la page, même pour plusieurs éléments (ce qui n'est pas possible avec `<label for="input">`). On pourrait par exemple utiliser `aria-labelledby` afin d'indiquer qu'une description importante contenue dans un élément [`<div>`](/fr/docs/Web/HTML/Element/div) est le libellé pour plusieurs cellules d'un tableau, ou l'utiliser comme texte alternatif d'une image (en indiquant une information existant déjà sur la page plutôt que d'avoir à la répéter au sein de l'attribut `alt`). Vous pouvez observer un tel exemple dans [la section sur les alternatives textuelles](/fr/docs/Learn/Accessibility/HTML#alternatives_textuelles).
- Les états
  - : Il s'agit de propriétés spéciales qui définissent les conditions actuelles des éléments. Par exemple, `aria-disabled="true"` permet d'indiquer à un lecteur d'écran que le champ de formulaire est actuellement désactivé. Contrairement aux propriétés qui ne changent pas pendant le fonctionnement de l'application, les états peuvent changer (ils sont généralement mis à jour à l'aide de JavaScript).

Les attributs WAI-ARIA ne modifient en rien la page web en dehors des informations exposées aux API du navigateur portant sur l'accessibilité (ce qu'utilisent les lecteurs d'écran pour récupérer des informations). WAI-ARIA ne modifie pas la structure de la page web, le DOM, etc. On pourra toutefois utiliser ses attributs pour sélectionner certains éléments en CSS.

> [!NOTE]
> La spécification WAI-ARIA liste l'ensemble des rôles ARIA et leurs utilisations possibles, avec des liens vers de plus amples informations&nbsp;: [définition des rôles (en anglais)](https://www.w3.org/TR/wai-aria-1.1/#role_definitions). Sur MDN, vous pouvez consulter [la section sur les rôles ARIA](/fr/docs/Web/Accessibility/ARIA/Roles).
>
> La spécification contient également la liste de l'ensemble des propriétés et des états, avec des liens vers de plus amples informations&nbsp;: [définition des états et propriétés (tous les attributs `aria-\*`)](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def).

### Quelle est la prise en charge de WAI-ARIA&nbsp;?

Cette question n'est pas si simple. Il est difficile de trouver une ressource de référence qui indique les fonctionnalités de WAI-ARIA qui sont prises en charge et dans quelles conditions. En effet&nbsp;:

1. La spécification WAI-ARIA définit de nombreuses fonctionnalités.
2. Il y a de nombreuses combinaisons à considérer, créées par les systèmes d'exploitation, les navigateurs et les lecteurs d'écran.

Ce dernier point est crucial. Pour utiliser un lecteur d'écran, il faut déjà que votre système d'exploitation permette de lancer des navigateurs disposant des API d'accessibilité pour exposer les bonnes informations aux lecteurs d'écran, afin que ces derniers fonctionnent. La plupart des systèmes d'exploitation communément utilisés disposent d'un ou deux navigateurs qui permettent aux lecteurs d'écran de fonctionner. Le groupe Paciello décrit dans un billet relativement à jour les données qui permettent d'arriver à cette conclusion&nbsp;: [Guide approximatif&nbsp; prise en charge entre les navigateurs, systèmes d'exploitation et lecteurs d'écran (mis à jour en juin 2017) (en anglais)](https://www.tpgi.com/rough-guide-browsers-operating-systems-and-screen-reader-support-updated/).

Il faut ensuite savoir si les navigateurs en question prennent en charge les fonctionnalités ARIA et les exposent grâce à leurs API, mais aussi savoir si les lecteurs d'écran reconnaissent l'information et la présente à leurs utilisatrices et utilisateurs de façon utile.

1. La prise en charge par les navigateurs est quasiment universelle.
2. La prise en charge des fonctionnalités ARIA par les lecteurs d'écran n'est pas aussi complète, bien que les lecteurs d'écran les plus populaires s'en approchent. Pour avoir une idée concrète des niveaux de prise en charge, vous pouvez consulter l'article de Powermapper [Compatibilité des lecteurs d'écran avec WAI-ARIA (en anglais)](https://www.powermapper.com/tests/screen-readers/aria/).

Dans cet article, nous n'aborderons pas chaque fonctionnalité WAI-ARIA et les détails de chaque prise en charge. Nous nous intéresserons plutôt aux fonctionnalités essentielles de WAI-ARIA que vous devez connaître, et si nous ne mentionnons pas la compatibilité, vous pouvez partir du principe que la fonctionnalité en question est relativement bien prise en charge. Nous indiquerons clairement s'il y a des exceptions.

> [!NOTE]
> Certaines bibliothèques JavaScript prennent en charge WAI-ARIA, ce qui signifie qu'elles ajoutent des attributs ARIA lorsqu'elles génèrent des éléments d'interface complexes comme des contrôles de formulaires. Si vous recherchez une bibliothèque JavaScript tierce pour vos composants d'interface, gardez en tête que l'accessibilité est un critère de choix. On pourra notamment citer jQuery UI (voir [à propos de jQuery UI&nbsp;: prise en charge étendue de l'accessibilité](https://jqueryui.com/about/#deep-accessibility-support)), [ExtJS](https://www.sencha.com/products/extjs/), et [Dojo/Dijit](https://dojotoolkit.org/reference-guide/1.10/dijit/a11y/statement.html).

### Quand faut-il utiliser WAI-ARIA&nbsp;?

Nous avons déjà abordé les problèmes qui ont amené à la création de WAI-ARIA, mais on retiendra quatre domaines pour lesquels WAI-ARIA s'avère utile&nbsp;:

- Signes et repères
  - : Les valeurs utilisées pour l'attribut ARIA [`role`](/fr/docs/Web/Accessibility/ARIA/Roles) agissent comme des repères qui répliquent la sémantique d'éléments HTML natifs (par exemple [`<nav>`](/fr/docs/Web/HTML/Element/nav)), ou qui vont au-delà en fournissant des points de repères pour des domaines fonctionnels comme&nbsp;:`search`, `tablist`, `tab`, `listbox`, etc.
- Mises à jour dynamiques du contenu
  - : Les lecteurs d'écran peuvent avoir des difficultés à constamment indiquer le contenu qui change sur la page. Avec ARIA, on peut utiliser l'attribut [`aria-live`](/fr/docs/Web/Accessibility/ARIA/Attributes/aria-live) pour informer les personnes lorsqu'une zone de contenu est mise à jour (que ce soit avec [`fetch()`](/fr/docs/Web/API/Window/fetch) et/ou [les API du DOM](/fr/docs/Web/API/Document_Object_Model).
- Amélioration de l'accessibilité au clavier
  - : Certains éléments HTML natifs peuvent être utilisés avec le clavier. Lorsqu'on utilise d'autres éléments avec JavaScript pour simuler des interactions analogues, l'accessibilité au clavier et la détection par les lecteurs d'écran peuvent en pâtir. WAI-ARIA fournit des outils pour permettre aux autres éléments de recevoir le focus, notamment grâce à `tabindex`).
- Accessibilité des contrôles non-sémantiques
  - : Lorsqu'un contrôle d'interface complexe est implémenté à l'aide d'éléments `<div>` imbriqués et avec CSS/JavaScript, ou qu'un contrôle natif est amélioré ou modifié à l'aide de JavaScript, l'accessibilité peut être réduite, celles et ceux qui utilisent des lecteurs d'écran peuvent avoir des difficultés à déterminer ce que permet le contrôle s'il n'y a pas d'indications sémantiques ou d'autres indices. Dans ces situations, ARIA peut aider en fournissant ce qui manque, à l'aide de rôles comme `button`, `listbox`, ou `tablist`, de propriétés comme `aria-required` ou `aria-posinset` afin d'offrir des indications sur la fonctionnalité en question.

S'il y a une chose à se rappeler, c'est qu'**il faut uniquement utiliser WAI-ARIA lorsque c'est nécessaire&nbsp;!** Idéalement, vous devriez _toujours_ utiliser [les fonctionnalités HTML natives](/fr/docs/Learn/Accessibility/HTML) pour fournir les informations sémantiques nécessaires aux lecteurs d'écran pour que leurs indications soient pertinentes. Cela n'est pas toujours possible, soit parce que vous avez un contrôle limité sur le code, soit parce que vous créez quelque chose de complexe pour lequel il n'existe pas d'élément HTML natif. Dans ces situations, WAI-ARIA peut être un outil pertinent afin d'améliorer l'accessibilité.

Rappelons-le quand même&nbsp;: **n'utilisez WAI-ARIA que lorsque c'est nécessaire&nbsp;!**

> [!NOTE]
> De façon générale, essayez autant que possible de tester votre site avec une diversité de personnes, avec un handicap ou non, utilisant des lecteurs d'écran, utilisant la navigation au clavier, etc. Elles sauront bien mieux vous dire si le résultat fonctionne bien.

## Implémentations concrètes avec WAI-ARIA

Dans cette section, nous verrons chacun de ces quatre domaines avec des exemples concrets. Avant de continuer, mettez en place un lecteur d'écran pour tester les différents exemples. Pour cela, n'hésitez pas à consulter [le paragraphe Tester les lecteurs d'écrans](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#les_lecteurs_décran).

### Signes et repères

WAI-ARIA ajoute [l'attribut `role`](https://www.w3.org/TR/wai-aria-1.1/#role_definitions) aux navigateurs, qui permet d'indiquer une valeur sémantique supplémentaire aux éléments de votre site où c'est nécessaire. Cela permet notamment de fournir des informations aux lecteurs d'écran pour aider les personnes à trouver des éléments courants sur la page. Prenons comme exemple le site [website-no-roles](https://github.com/mdn/learning-area/tree/main/accessibility/aria/website-no-roles) ([voir ce qu'il donne en direct](https://mdn.github.io/learning-area/accessibility/aria/website-no-roles/)). Ce site a la structure suivante&nbsp;:

```html
<header>
  <h1>…</h1>
  <nav>
    <ul>
      …
    </ul>
    <form>
      <!-- Formulaire de recherche -->
    </form>
  </nav>
</header>

<main>
  <article>…</article>
  <aside>…</aside>
</main>

<footer>…</footer>
```

Si vous essayez cet exemple avec un lecteur d'écran sur un navigateur récent, vous obtiendrez déjà certaines informations utiles. VoiceOver vous donnera les indications suivantes&nbsp;:

- Sur l'élément `<header>`&nbsp;: «&nbsp;bannière, 2 éléments&nbsp;» (il contient un titre et l'élément `<nav>`).
- Sur l'élément `<nav>`&nbsp;: «&nbsp;navigation, 2 éléments&nbsp;» (il contient une liste et un formulaire).
- Sur l'élément `<main>`&nbsp;: «&nbsp;principal, 2 éléments&nbsp;» (il contient un article et un aparté).
- Sur l'élément `<aside>`&nbsp;: «&nbsp;complémentaire, 2 éléments&nbsp;» (il contient un titre et une liste).
- Sur l'élément du formulaire de recherche&nbsp;: «&nbsp;requête de recherche, insertion au début du texte&nbsp;».
- Sur l'élément `<footer>`&nbsp;: «&nbsp;pied-de-page, 1 élément.&nbsp;»

Si vous utilisez le menu des repères de VoiceOver (ou de votre lecteur d'écran) et utilisez les flèches du clavier pour naviguer parmi les choix du menu, vous verrez la plupart des éléments bien organisés, ce qui permet d'y accéder rapidement.

![Capture d'écran du menu de VoiceOver sur macOS où la liste des repères (landmarks) inclut la bannière, l'élément de navigation, le contenu principal et le contenu complémentaire.](landmarks-list.png)

Toutefois, on pourrait faire encore mieux. Le formulaire de recherche est un emplacement important dont on souhaite qu'il soit rapidement accessible, mais il n'apparaît pas dans la liste du menu des repères et n'est pas considéré comme un repère important.

Améliorons cet exemple en utilisant certaines fonctionnalités ARIA. Tout d'abord, ajoutons quelques attributs [`role`](/fr/docs/Web/Accessibility/ARIA/Roles) à notre structure HTML. Vous pouvez récupérer un exemplaire des fichiers (voir [`index.html`](https://github.com/mdn/learning-area/blob/main/accessibility/aria/website-no-roles/index.html) et [`style.css`](https://github.com/mdn/learning-area/blob/main/accessibility/aria/website-no-roles/style.css)), ou naviguer jusqu'à l'exemple [website-aria-roles](https://github.com/mdn/learning-area/tree/main/accessibility/aria/website-aria-roles) ([le voir en direct](https://mdn.github.io/learning-area/accessibility/aria/website-aria-roles/)), dont la structure est la suivante&nbsp;:

```html
<header>
  <h1>…</h1>
  <nav role="navigation">
    <ul>
      …
    </ul>
    <form role="search">
      <!-- formulaire de recherche -->
    </form>
  </nav>
</header>

<main>
  <article role="article">…</article>
  <aside role="complementary">…</aside>
</main>

<footer>…</footer>
```

Nous avons également ajouté l'attribut [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Attributes/aria-label) à l'élément [`<input>`](/fr/docs/Web/HTML/Element/input), qui fournit un libellé descriptif à utiliser par le lecteur d'écran, même sans élément [`<label>`](/fr/docs/Web/HTML/Element/label). Dans un cas comme celui-ci, c'est plutôt utile, un formulaire de recherche comme celui-là est très courant et facilement reconnaissable, ajouter un libellé visible pourrait dégrader l'apparence de la page.

```html
<input
  type="search"
  name="q"
  placeholder="Termes de recherche"
  aria-label="Recherchez parmi le contenu du site" />
```

Si on utilise VoiceOver sur cette version, on pourra noter quelques améliorations&nbsp;:

- Le formulaire de recherche apparaît comme un élément distinct, à la navigation sur la page et sur le menu des repères de VoiceOver.
- Le texte du libellé porté par l'attribut `aria-label` est énoncé lorsque le champ du formulaire reçoit le focus.

De plus, le site est ainsi plus accessible pour les personnes qui utilisent un ancien navigateur tel qu'IE8 grâce aux rôles indiqués. Si votre site est construit uniquement avec des éléments `<div>`, vous devriez absolument inclure ces rôles ARIA pour indiquer la sémantique correspondante&nbsp;!

La sémantique améliorée du formulaire de recherche illustre ce qu'ARIA rend possible en allant au-delà de la sémantique fournie par HTML. Nous verrons plus d'exemples dans la suite de cet article et notamment dans la section [Accessibilité des contrôles non-sémantiques](#accessibilité_des_contrôles_non-sémantiques). Avant cela, voyons comment ARIA peut aider lorsque contenu est mis à jour dynamiquement.

### Mises à jour dynamiques du contenu

Le contenu chargé dans le DOM est facilement accessible à l'aide d'un lecteur d'écran, que ce soit le contenu textuel ou les alternatives textuelles attachées aux images. Il est donc relativement simple de rendre accessible un site statique contenant de grandes parties de textes.

Toutefois, la plupart des applications web modernes ne contiennent pas uniquement du texte statiques. Elles contiennent du contenu mis à jour dynamiquement, sans recharger l'ensemble de la page, grâce à des mécanismes comme [l'API <i lang="en">Fetch</i>](/fr/docs/Web/API/Fetch_API) (ou avant [`XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest)), ou [les API du DOM](/fr/docs/Web/API/Document_Object_Model). Ces emplacements dynamiques sont parfois appelés <i lang="en">live regions</i> en anglais.

Prenons un rapide exemple avec le fichier [`aria-no-live.html`](https://github.com/mdn/learning-area/blob/main/accessibility/aria/aria-no-live.html) (vous pouvez [voir le résultat correspondant en démonstration](https://mdn.github.io/learning-area/accessibility/aria/aria-no-live.html)). Dans cet exemple, on a une simple boîte contenant une citation aléatoire&nbsp;:

```html
<section>
  <h1>Random quote</h1>
  <blockquote>
    <p></p>
  </blockquote>
</section>
```

Grâce à [`XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest), le code JavaScript charge un fichier JSON contenant un ensemble de citations aléatoires avec leurs autrices et auteurs. Lorsque ce chargement est effectué, on démarre une boucle [`setInterval()`](/fr/docs/Web/API/Window/setInterval) qui charge une nouvelle citation aléatoire dans la boîte toutes les 10 secondes&nbsp;:

```js
const intervalID = setInterval(showQuote, 10000);
```

Cela fonctionne, mais l'accessibilité n'est pas au rendez-vous&nbsp;: la mise à jour du contenu n'est pas détectée par les lecteurs d'écran et les personnes qui utilisent ces outils ne sauront pas ce qui se passe sur la page. Il s'agit d'un exemple plutôt simpliste, mais imaginez une interface utilisateur plus complexe, constamment mise à jour, comme un salon de discussion, ou l'interface d'un jeu de stratégie, ou la mise à jour d'un panier d'achat dans une boutique. Il serait impossible d'utiliser l'application de façon correcte s'il n'y avait aucun moyen d'alerter l'utilisatrice ou l'utilisateur des mises à jour.

Heureusement, WAI-ARIA fournit un mécanisme pour ces alertes&nbsp;: [la propriété `aria-live`](/fr/docs/Web/Accessibility/ARIA/Attributes/aria-live). Appliquer cette propriété à un élément permet aux lecteurs d'écran d'annoncer le contenu mis à jour. La rapidité à laquelle le contenu est énoncé dépend de la valeur de l'attribut&nbsp;:

- `off`
  - : Il s'agit de la valeur par défaut, les mises à jour ne doivent pas être annoncées.
- `polite`
  - : Les mises à jour devraient être annoncées uniquement si la personne n'est pas active sur la page.
- `assertive`
  - : Les mises à jour devraient être annoncées dès que possible.

Téléchargez un exemplaire du fichier [`aria-no-live.html`](https://github.com/mdn/learning-area/blob/main/accessibility/aria/aria-no-live.html) et de [`quotes.json`](https://github.com/mdn/learning-area/blob/main/accessibility/aria/quotes.json), puis mettez à jour la balise ouvrante `<section>` comme suit&nbsp;:

```html
<section aria-live="assertive">…</section>
```

Cela permettra au lecteur d'écran d'annoncer le contenu dès qu'il est mis à jour.

> [!NOTE]
> Si vous voyez une exception de sécurité lors de l'appel `XMLHttpRequest`, c'est que le fichier est chargé localement plutôt que depuis un serveur. Voyez [comment mettre en place un serveur de test](/fr/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server) pour que cela fonctionne.

C'est mieux, mais seul le texte mis à jour est énoncé. Ce serait encore mieux d'avoir le titre qui est rappelé afin que la personne sache ce qui est énoncé. Pour cela, on peut ajouter la propriété [`aria-atomic`](/fr/docs/Web/Accessibility/ARIA/Attributes/aria-atomic) à la section. Reprenez la balise ouvrante `<section>` et modifiez-la ainsi&nbsp;:

```html
<section aria-live="assertive" aria-atomic="true">…</section>
```

L'attribut `aria-atomic="true"` indique au lecteur d'écran d'énoncer l'intégralité du contenu de l'élément comme une seule unité et pas uniquement les fragments mis à jour.

> [!NOTE]
> Vous pouvez consulter l'exemple terminé dans le fichier [`aria-live.html`](https://github.com/mdn/learning-area/blob/main/accessibility/aria/aria-live.html) ([et aussi voir le résultat avec cette démonstration](https://mdn.github.io/learning-area/accessibility/aria/aria-live.html)).

> [!NOTE]
> La propriété [`aria-relevant`](/fr/docs/Web/Accessibility/ARIA/Attributes/aria-relevant) peut aussi s'avérer utile pour contrôler ce qui est énoncé lorsqu'une zone dynamique est mise à jour. On peut par exemple la paramétrer pour n'énoncer que les ajouts ou les suppressions.

### Améliorer l'accessibilité au clavier

Nous l'avons déjà mentionné dans ce module, un atout de HTML quant à l'accessibilité est la capacité à manipuler les fonctionnalités au clavier, comme les boutons, les contrôles de formulaire, et les liens. Généralement, on utilise la touche de tabulation pour se déplacer d'un contrôle à l'autre, la touche <kbd>Entrée</kbd> pour sélectionner ou activer un contrôle (certaines fois d'autres touches sont nécessaires comme les flèches haut et bas pour sélectionner une option dans une boîte `<select>`).

Toutefois, vous aurez parfois à écrire du code qui utilise des éléments non sémantiques pour représenter des boutons (ou d'autres contrôles), ou à détourner des contrôles pouvant gagner le focus, que ce soit pour corriger du code historique ou pour construire quelque chose de complexe où il n'y a pas de meilleure solution actuellement.

Pour qu'un élément puisse recevoir le focus alors qu'il n'a pas cette capacité nativement, WAI-ARIA étend l'attribut `tabindex` avec de nouvelles valeurs&nbsp;:

- `tabindex="0"`
  - : Comme indiqué auparavant, cette valeur permet aux éléments vers lesquels on ne peut pas naviguer au clavier de devenir accessible avec la touche <kbd>Tab</kbd>. C'est la valeur la plus utile pour `tabindex`.
- `tabindex="-1"`
  - : Cela permet aux éléments vers lesquels on ne peut pas naviguer au clavier de recevoir le focus via du code (JavaScript, ou comme étant la cible d'un lien).

Ce fonctionnement est abordé plus en détails dans l'article sur l'accessibilité HTML et notamment dans la section [Remettre l'accessibilité au clavier](/fr/docs/Learn/Accessibility/HTML#remettre_laccessibilité_au_clavier).

### Accessibilité des contrôles non-sémantiques

Nous avons déjà évoqué le cas où on crée un contrôle d'interface avec des éléments `<div>` imbriqués et avec CSS/JavaScript, ou celui où on améliore un contrôle HTML natif à l'aide de JavaScript. Non seulement l'accessibilité au clavier en pâti, mais les personnes utilisant un lecteur d'écran auront des difficultés à l'utiliser s'il n'y a pas d'indications sémantiques. Dans ces situations, ARIA peut aider à fournir ces informations sémantiques.

#### Validation de formulaires et alertes en cas d'erreur

Reprenons l'exemple du formulaire que nous avions abordé dans l'article sur l'accessibilité avec CSS et JavaScript (voir le paragraphe [Savoir rester discret](/fr/docs/Learn/Accessibility/CSS_and_JavaScript#le_garder_discret) pour un récapitulatif). À la fin de cette section, nous avions inclus certains attributs ARIA dans la boîte qui affiche les messages d'erreurs lorsque la validation du formulaire échoue à l'envoi&nbsp;:

```html
<div class="errors" role="alert" aria-relevant="all">
  <ul></ul>
</div>
```

- [`role="alert"`](/fr/docs/Web/Accessibility/ARIA/Roles/alert_role) convertit automatiquement l'élément sur lequel il est appliqué en une zone dynamique, les changements apportés à cet endroit sont donc énoncés. De plus, il permet d'identifier sémantiquement qu'il s'agit d'un message d'alerte (contenant des informations importantes pour un temps/contexte donné). Cela représente une méthode plus accessible pour afficher une alerte (les fenêtres modales comme celles créées avec [`alert()`](/fr/docs/Web/API/Window/alert) posent certains problèmes d'accessibilité).
- La valeur `all` de l'attribut [`aria-relevant`](/fr/docs/Web/Accessibility/ARIA/Attributes/aria-relevant) indique au lecteur d'écran de lire tout le contenu de la liste des erreurs dès qu'elle est modifiée (c'est-à-dire quand des erreurs sont ajoutées ou supprimées). Cela permet de connaître les erreurs restantes et pas uniquement ce qui a été ajouté ou supprimé de la liste.

Nous pouvons aller plus loin avec ARIA et aider à la validation. Comment indiquer les champs obligatoires et l'intervalle d'âge autorisé&nbsp;?

1. Récupérez un exemplaire des fichiers [`form-validation.html`](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-validation.html) et [`validation.js`](https://github.com/mdn/learning-area/blob/main/accessibility/css/validation.js) et enregistrez-les dans un répertoire local.
2. Ouvrez ces deux fichiers dans un éditeur de texte et voyez comment le code fonctionne.
3. Pour commencer, ajoutez un paragraphe avant la balise `<form>` ouvrante, comme celui qui suit. Ajoutez ensuite un astérisque aux libellés (éléments `<label>`) correspondant. C'est la méthode généralement utilisée pour indiquer visuellement les champs obligatoires.

   ```html
   <p>Les champs indiqués par un astérisque (*) sont obligatoires.</p>
   ```

4. Cela a du sens visuellement, mais ça ne rend pas la chose évidente pour les personnes qui utilisent un lecteur d'écran. Heureusement, WAI-ARIA fournit l'attribut [`aria-required`](/fr/docs/Web/Accessibility/ARIA/Attributes/aria-required) qui donne une indication aux lecteurs d'écran sur ce qui doit être renseigné dans un formulaire. Mettez à jour les éléments `<input>` comme suit&nbsp;:

   ```html
   <input type="text" name="name" id="name" aria-required="true" />

   <input type="number" name="age" id="age" aria-required="true" />
   ```

5. Si vous enregistrez les fichiers et testez l'exemple avec un lecteur d'écran, vous pourrez entendre quelque chose comme «&nbsp;entrez votre nom astérisque, nécessaire, champ texte".
6. Il peut également être judicieux d'indiquer une idée de la valeur attendue pour l'âge. Généralement, cela se présente sous la forme d'une bulle d'informations ou d'un texte de remplacement écrit à l'intérieur du champ. WAI-ARIA permet d'utiliser les propriétés [`aria-valuemin`](/fr/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) et [`aria-valuemax`](/fr/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) pour indiquer les valeurs minimale et maximale. Les lecteurs d'écran prennent en charge les attributs natifs `min` et `max`. Une autre fonctionnalité HTML prise en charge par certains lecteurs d'écran est l'attribut HTML `placeholder`, qui peut contenir un message affiché dans le champ tant qu'aucune valeur n'est saisie et qui est énoncé par les lecteurs d'écran. Mettez à jour le champ numérique de cette façon&nbsp;:

   ```html
   <label for="age">Votre âge :</label>
   <input
     type="number"
     name="age"
     id="age"
     placeholder="Saisissez de 1 à 150"
     required
     aria-required="true" />
   ```

On veillera à toujours associer un élément [`<label>`](/fr/docs/Web/HTML/Element/label) à chaque champ du formulaire. Bien que certains lecteurs d'écran énoncent le texte de remplacement, ce n'est pas le cas de tous. Une solution complémentaire pour indiquer un nom accessible pourra être d'utiliser les attributs [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Attributes/aria-label) et [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby). Toutefois, utiliser un élément `<label>` doté d'un attribut `for` restera la meilleure méthode, car elle améliore l'accessibilité pour toutes les personnes, y compris celles qui utilisent la souris.

> [!NOTE]
> Vous pouvez voir l'exemple terminé dans le fichier [`form-validation-updated.html`](https://mdn.github.io/learning-area/accessibility/aria/form-validation-updated.html).

En plus de [`<label>`](/fr/docs/Web/HTML/Element/label), WAI-ARIA permet certaines techniques avancées pour les libellés des formulaires. Nous avons déjà abordé la propriété [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Attributes/aria-label) pour fournir un libellé qu'on ne souhaitait pas afficher visuellement (voir la section [Signes et repères](#signes_et_repères) ci-avant). D'autres techniques utilisent la propriété [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) qui permet de désigner un libellé qui n'est pas un élément `<label>` ou de libeller plusieurs champs avec le même texte. [`aria-describedby`](/fr/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) quant à lui permet d'associer d'autres informations à un champ de formulaire afin qu'elles soient énoncées. Voir [le guide WebAIM sur les techniques avancées pour les libellés des formulaires (en anglais)](https://webaim.org/techniques/forms/advanced) pour plus de détails.

Il existe de nombreux autres états et propriétés, indiquant par exemple le statut des éléments du formulaire. `aria-disabled="true"` pourra ainsi être utilisé pour indiquer qu'un champ est désactivé. La plupart des navigateurs passeront sur les champs désactivés et ceux-ci ne seront pas énoncés par le lecteur d'écran. Mais dans certains cas, un élément désactivé pourra être listé et inclure cet attribut permettra au lecteur d'écran d'indiquer que le contrôle est bel et bien désactivé.

Si l'état désactivé d'un champ peut être amené à changer, il faudra également indiquer lorsque ça se produit et le résultat. Dans notre démo [`form-validation-checkbox-disabled.html`](https://mdn.github.io/learning-area/accessibility/aria/form-validation-checkbox-disabled.html), nous avons une case à cocher qui, lorsqu'elle est cochée active un autre champ pour saisir des informations complémentaires. Nous mettons en place une zone dynamique masquée&nbsp;:

```html
<p class="hidden-alert" aria-live="assertive"></p>
```

Ce paragraphe est masqué visuellement en utilisant du positionnement absolu. Lorsque la case est cochée, on met à jour le texte de la zone dynamique masquée pour indiquer aux personnes avec un lecteur d'écran ce qui s'est produit en cochant la case&nbsp;; on met aussi à jour l'état `aria-disabled`, ainsi que certains indicateurs visuels&nbsp;:

```js
function toggleMusician(bool) {
  const instruItem = formItems[formItems.length - 1];
  if (bool) {
    instruItem.input.disabled = false;
    instruItem.label.style.color = "#000";
    instruItem.input.setAttribute("aria-disabled", "false");
    hiddenAlert.textContent =
      "Le champ instruments joués est désormais activé. Remplissez-le pour indiquer ce dont vous jouez.";
  } else {
    instruItem.input.disabled = true;
    instruItem.label.style.color = "#999";
    instruItem.input.setAttribute("aria-disabled", "true");
    instruItem.input.removeAttribute("aria-label");
    hiddenAlert.textContent =
      "Le champ instruments joués est désormais désactivé.";
  }
}
```

#### Décrire les boutons non-sémantiques comme des boutons

Nous avons déjà mentionné l'accessibilité native et les problèmes causés par l'utilisation d'éléments détournés (pour les boutons, les liens ou les éléments de formulaires), voir [la section sur les contrôles de l'interface utilisateur de l'article sur l'accessibilité avec HTML](/fr/docs/Learn/Accessibility/HTML#contrôles_de_linterface_utilisateur) ou [la section plus haut sur l'amélioration de l'accessibilité au clavier](#améliorer_laccessibilité_au_clavier). Il est généralement possible de remettre l'accessibilité au clavier sans trop de problèmes à l'aide de `tabindex` et d'un peu de JavaScript.

Mais qu'en est-il des lecteurs d'écran ? Ils ne verront pas les éléments comme des boutons. Si vous testez l'exemple [`fake-div-buttons.html`](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) avec un lecteur d'écran, les faux boutons seront énoncés avec des phrases comme «&nbsp;Cliquez ici&nbsp;! groupe&nbsp;», ce qui prêtera assurément à confusion.

Cela peut être corrigé à l'aide d'un rôle WAI-ARIA. Téléchargez un exemplaire local de [`fake-div-buttons.html`](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html), puis ajoutez [`role="button"`](/fr/docs/Web/Accessibility/ARIA/Roles/button_role) à chaque bouton représenté par un élément `<div>`, par exemple&nbsp;:

```html
<div data-message="Cela vient du premier bouton" tabindex="0" role="button">
  Cliquez ici !
</div>
```

Maintenant, en utilisant un lecteur d'écran, les boutons seront indiqués par «&nbsp;Cliquez ici&nbsp;! bouton&nbsp;». Bien que ça soit déjà mieux, il faut encore ajouter les fonctionnalités natives auxquelles on s'attend quand on utilise un bouton comme la gestion de la touche <kbd>Entrée</kbd> et des évènements de clic, comme expliqué dans [la documentation du rôle `button`](/fr/docs/Web/Accessibility/ARIA/Roles/button_role).

> [!NOTE]
> N'oubliez pas qu'il vaut mieux utiliser l'élément sémantique correct lorsque c'est possible. Si vous souhaitez créer un bouton et que vous pouvez utiliser un élément [`<button>`](/fr/docs/Web/HTML/Element/button), faites-le&nbsp;!

#### Guider les utilisatrices et utilisateurs pour les contrôles complexes

Il existe un ensemble de [rôles](/fr/docs/Web/Accessibility/ARIA/Roles) qui permettent d'identifier des structures d'éléments non-sémantiques comme des contrôles d'interface et qui vont au-delà de ce que permet le HTML. On a par exemple, [`combobox`](/fr/docs/Web/Accessibility/ARIA/Roles/combobox_role), [`slider`](/fr/docs/Web/Accessibility/ARIA/Roles/slider_role), [`tabpanel`](/fr/docs/Web/Accessibility/ARIA/Roles/tabpanel_role), [`tree`](/fr/docs/Web/Accessibility/ARIA/Roles/tree_role). Vous pouvez consulter plusieurs exemples dans [la bibliothèque d'exemples de Deque University](https://dequeuniversity.com/library/) pour voir comment de tels contrôles sont rendus accessibles.

Prenons un exemple ici. Reprenons l'interface avec des onglets positionnés de façon absolue (voir [Cacher des choses](/fr/docs/Learn/Accessibility/CSS_and_JavaScript#cacher_des_choses) dans l'article sur l'accessibilité avec CSS et JavaScript). Vous pouvez observer cet exemple [sur cette page](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/info-box.html) (et [consulter le code source correspondant](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/info-box.html)).

Tel quel, cet exemple fonctionne correctement pour l'accessibilité au clavier&nbsp;: on peut naviguer entre les différents onglets et choisir d'afficher leur contenu. On peut également faire défiler le contenu et utiliser les titres pour naviguer, même si on ne voit pas ce qu'il y a l'écran. Toutefois, il n'est pas évident de déterminer ce qu'est le contenu. Un lecteur d'écran indiquera une liste de liens avec du contenu et trois titres. Cela ne donne pas d'indication sur la relation entre les contenus. On pourra améliorer cet exemple en fournissant des indications sur la structure du contenu.

Pour voir l'amélioration, vous pouvez télécharger le fichier [`aria-tabbed-info-box.html`](https://github.com/mdn/learning-area/blob/main/accessibility/aria/aria-tabbed-info-box.html) ([voir le résultat sur une page](https://mdn.github.io/learning-area/accessibility/aria/aria-tabbed-info-box.html)). Nous avons mis à jour la structure de l'interface à onglets&nbsp;:

```html
<ul role="tablist">
  <li
    class="active"
    role="tab"
    aria-selected="true"
    aria-setsize="3"
    aria-posinset="1"
    tabindex="0">
    Tab 1
  </li>
  <li
    role="tab"
    aria-selected="false"
    aria-setsize="3"
    aria-posinset="2"
    tabindex="0">
    Tab 2
  </li>
  <li
    role="tab"
    aria-selected="false"
    aria-setsize="3"
    aria-posinset="3"
    tabindex="0">
    Tab 3
  </li>
</ul>
<div class="panels">
  <article class="active-panel" role="tabpanel" aria-hidden="false">…</article>
  <article role="tabpanel" aria-hidden="true">…</article>
  <article role="tabpanel" aria-hidden="true">…</article>
</div>
```

> [!NOTE]
> Le changement le plus important est le retrait des liens. Seuls les éléments de la liste sont utilisés comme onglets. En effet, les liens n'avaient pas vraiment de destination, ils ne faisaient que changer la vue. De plus, cela permet une meilleure utilisation des attributs `aria-setsize` et `aria-posinset`, au lien de toujours énoncer «&nbsp;1 sur 1&nbsp;», le lecteur d'écran pourra maintenant indiquer «&nbsp;1 sur 3&nbsp;», «&nbsp;2 sur 3&nbsp;», etc.

Les fonctionnalités ARIA utilisées ici sont&nbsp;:

- De nouveaux rôles
  - : [`tablist`](/fr/docs/Web/Accessibility/ARIA/Roles/tablist_role), [`tab`](/fr/docs/Web/Accessibility/ARIA/Roles/tab_role), [`tabpanel`](/fr/docs/Web/Accessibility/ARIA/Roles/tabpanel_role) qui identifient les zones importantes de l'interface avec les onglets&nbsp;: le conteneur des onglets, les onglets et les panneaux correspondants.
- [`aria-selected`](/fr/docs/Web/Accessibility/ARIA/Attributes/aria-selected)
  - : Définit l'onglet actuellement sélectionné. Lorsque la personne passe d'un onglet à l'autre, la valeur de cet attribut est mise à jour grâce à JavaScript sur les différents onglets.
- [`aria-hidden`](/fr/docs/Web/Accessibility/ARIA/Attributes/aria-hidden)
  - : Empêche qu'un élément soit énoncé par le lecteur d'écran. Lorsque la personne passe d'un onglet à l'autre, la valeur de cet attribut est mise à jour grâce à JavaScript sur les différents onglets.
- `tabindex="0"`
  - : Comme les liens sont retirés, on fournit cet attribut aux éléments de la liste afin qu'ils puissent recevoir le focus au clavier.
- [`aria-setsize`](/fr/docs/Web/Accessibility/ARIA/Attributes/aria-setsize)
  - : Cette propriété permet d'indiquer aux lecteurs d'écran que l'élément courant fait partie d'un ensemble et d'indiquer la taille de cet ensemble.
- [`aria-posinset`](/fr/docs/Web/Accessibility/ARIA/Attributes/aria-posinset)
  - : Cette propriété permet d'indiquer la position de l'élément au sein de l'ensemble dans lequel il s'inscrit. Combiné avec `aria-setsize`, il fournit suffisamment d'informations au lecteur d'écran pour que ce dernier puisse énoncer qu'on se situe sur l'élément «&nbsp;1 sur 3&nbsp;» etc. Dans la plupart des cas, les navigateurs devraient pouvoir déduire cette information à partir de la hiérarchie des éléments, mais autant fournir des indications complémentaires.

Cette nouvelle structure apporte plusieurs améliorations&nbsp;:

- Les onglets sont désormais reconnus comme tels (le lecteur d'écran indique «&nbsp;onglet&nbsp;»).
- L'onglet sélectionné est indiqué avec le mot-clé «&nbsp;sélectionné&nbsp;» avant le nom de l'onglet.
- Le lecteur d'écran indique également le numéro de l'onglet sur lequel on se situe.
- De plus, grâce à `aria-hidden` (seul l'onglet affiché a `aria-hidden="false"`), le contenu non-masqué est le seul vers lequel on peut naviguer, le contenu sélectionné est donc plus simple à trouver.

> [!NOTE]
> Si vous souhaitez explicitement que quelque chose ne soit pas énoncé par un lecteur d'écran, il faudra appliquer l'attribut `aria-hidden="true"` à l'élément correspondant.

## Évaluez vos compétences&nbsp;!

Vous voici à la fin de cet article, mais aurez-vous retenu les informations essentielles&nbsp;? Vous pouvez vous évaluer pour vérifier que vous avez retenu les bonnes informations avant d'aller plus loin&nbsp;: [évaluez vos compétences&nbsp;: WAI-ARIA](/fr/docs/Learn/Accessibility/WAI-ARIA_basics/Test_your_skills:_WAI-ARIA).

## Résumé

Nous n'avons pas abordé l'intégralité de WAI-ARIA dans cet article, mais vous devriez désormais comprendre comment l'utiliser et les situations courantes pour lesquelles cet outil est nécessaire.

## Voir aussi

- [Les états et propriétés ARIA](/fr/docs/Web/Accessibility/ARIA/Attributes)&nbsp;: tous les attributs `aria-*`
- [Les rôles WAI-ARIA](/fr/docs/Web/Accessibility/ARIA/Roles)&nbsp;: les catégories de rôles ARIA et ceux documentés sur MDN
- [ARIA et HTML](https://www.w3.org/TR/html-aria/)&nbsp;: une spécification du W3C qui définit la sémantique d'accessibilité (ARIA) associée à chaque fonctionnalité HTML par le navigateur, ainsi que les fonctionnalités WAI-ARIA qui peuvent être appliquées sur ces fonctionnalités HTML si une sémantique supplémentaire est nécessaire
- [Bibliothèque d'exemples de Deque](https://dequeuniversity.com/library/)&nbsp;: un ensemble d'exemples utiles et concrets qui illustrent des contrôles d'interface complexes, rendus accessibles à l'aide des fonctionnalités WAI-ARIA
- [Bonnes pratiques pour l'écriture de WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/)&nbsp;: un portail du W3C expliquant comment implémenter différents types de contrôles complexes tout en les rendant accessibles à l'aide des fonctionnalités WAI-ARIA

{{PreviousMenuNext("Learn/Accessibility/CSS_and_JavaScript","Learn/Accessibility/Multimedia", "Learn/Accessibility")}}
