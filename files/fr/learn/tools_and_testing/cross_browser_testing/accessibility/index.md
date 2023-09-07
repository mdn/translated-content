---
title: Gérer les problèmes courants d'accessibilité
slug: Learn/Tools_and_testing/Cross_browser_testing/Accessibility
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/JavaScript","Learn/Tools_and_testing/Cross_browser_testing/Feature_detection", "Learn/Tools_and_testing/Cross_browser_testing")}}

Tournons maintenant notre attention vers l'accessibilité, les informations sur les problèmes communs, comment faire des tests simples, et comment faire pour utiliser les outils d'audit/automatisation pour trouver les problèmes d'accessibilités.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis :</th>
      <td>
        <p>
          Connaissances avec le noyau des langages
          <a href="/fr/Apprendre/HTML">HTML</a>,
          <a href="/fr/Apprendre/CSS">CSS</a> et
          <a href="/fr/Apprendre/JavaScript">JavaScript</a> ; une idée du haut
          niveau des principes du
          <a
            href="/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction"
            >test en navigateur croisé</a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif :</th>
      <td>
        <p>
          Être capable de diagnostiquer les problèmes courants d'Accessibilité,
          et utiliser les outils et techniques appropriés pour les résoudre.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Qu'est-ce que l'accessibilité ?

Quand on parle d'accessibilité dans le contexte de la technologie web, la plupart des gens pense directement au fait de s'assurer que les sites web/apps sont utilisables par les personnes avec des handicap, par exemple :

- Les personnes malvoyantes utilisant des lecteurs d'écran ou l'élargissement/zoom pour accéder au texte.
- Les personnes avec des troubles fonctionnels moteurs utilisant le clavier (ou d'autres fonctions sans souris) pour activer des fonctionnalités de site web.
- Les personnes avec des troubles auditifs dépendant des légendes/sous-titres ou d'autres textes alternatifs pour du contenu audio/vidéo.

Toutefois, ce serait faux de réduire l'accessibilité uniquement aux handicaps. Le vrai but de l'accessibilité est de faire en sorte que vos sites web/applis soient utilisables par le plus grand nombre de personnes dans le plus grand nombre de contextes possibles, pas uniquement ces utilisateurs qui utilisant des ordinateurs de bureau puissants. Les exemples extrêmes pourraient inclure :

- Les utilisateurs sur des appareils mobiles.
- Les utilisateurs sur des appareils de navigation alternatifs comme les TVs, les montres, etc.
- Les utilisateurs de vieux appareils qui n'ont pas les derniers navigateurs.
- Les utilisateurs avec des appareils aux caractéristiques basses qui peuvent avoir des processeurs lents.

D'une certaine manière, la totalité de ce module concerne l'accessibilité — le test en navigateur croisé assure que vos sites peuvent être utilisé par le plus de personne possible. [Qu'est-ce que l'accessibilité ?](/fr/Apprendre/a11y/What_is_accessibility) décrit plus largement et précisément l'accessibilité que cet article ne le fait.

Cela dit, cet article couvrira les problèmes en navigateur croisé et de test entourant les personnes avec des handicaps, et comment ils utilisent le Web. Nous avons déjà parlé des autres domaines comme le [responsive design](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_et_CSS#Les_problèmes_de_responsive_design) et la [performance](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript#Les_problèmes_de_performance) à d'autres endroits dans ce module.

> **Note :** Comme beaucoup de choses dans le développement web, l'accessibilité ne concerne pas la totale réussite ou échec ; l'accessibilité à 100% est quasiment impossible à atteindre pour tous les contenus, spécialement quand les sites deviennent plus complexes. Il s'agit plutôt de faire un effort pour rendre votre contenu accessible au plus grand nombre de personnes possible, avec du code de prévention, et se tenir aux meilleures pratiques.

## Problèmes d'accessibilité courants

Dans cette section nous détaillerons certains des problèmes principaux qui se manifestent autour de l'accessibilité, liée à des technologies spécifiques, avec les bonnes pratiques à adopter, et quelques tests rapides que vous pouvez faire pour voir si vos sites vont dans le bon sens.

> **Note :** L'accessibilité est moralement la bonne chose à faire, est bonne pour les affaires (nombre élevé d'utilisateurs handicapés, utilisateurs sur des appareils mobiles, etc. représentent un segment du marché signifiant), mais c'est aussi illégal dans de nombreuses régions de la planète de ne pas rendre les propriétés du web accessibles aux personnes avec des handicaps. Pour plus d'informations, lisez [Accessibility guidlines and the law](/fr/docs/Learn/Accessibility/What_is_accessibility#Accessibility_guidelines_and_the_law).

### HTML

La sémantique HTML (où les éléments sont utilisés à leur fin prévues) est accessible sans aucune modification — les contenus sont lisibles par les spectateurs voyants (à condition que vous n'ayez rien fait d'absurde comme rendre le texte bien trop petit ou ne l'ayez caché en utilisant du CSS), mais il sera aussi utilisable par des technologies d'assistance comme les lecteurs d'écran (applis qui lisent littéralement une page à leurs utilisateurs), et apporte également d'autres avantages.

#### La structure sémantique

Le quick win le plus important en sémantique HTML et d'utiliser une structure de rubriques et de paragraphes pour votre contenu ; parce que les utilisateurs de lecteurs d'écran ont tendance à utiliser les rubriques d'un document comme indications pour trouver le contenu qu'il recherche plus rapidement. Si votre contenu n'a pas de rubriques, tout ce qu'ils auraient c'est un énorme mur de texte sans aucune indication pour trouver quelque chose. Exemples de bon et de mauvais HTML :

```html example-bad
<font size="7">My heading</font> <br /><br />
This is the first section of my document.
<br /><br />
I'll add another paragraph here too.
<br /><br />
<font size="5">My subheading</font>
<br /><br />
This is the first subsection of my document. I'd love people to be able to find
this content!
<br /><br />
<font size="5">My 2nd subheading</font>
<br /><br />
This is the second subsection of my content. I think is more interesting than
the last one.
```

```html example-good
<h1>My heading</h1>

<p>This is the first section of my document.</p>

<p>I'll add another paragraph here too.</p>

<h2>My subheading</h2>

<p>
  This is the first subsection of my document. I'd love people to be able to
  find this content!
</p>

<h2>My 2nd subheading</h2>

<p>
  This is the second subsection of my content. I think is more interesting than
  the last one.
</p>
```

De plus, votre contenu doit avoir un sens logique dans son code source — vous pourrez toujours le placer où vous voulez en utilisant du CSS plus tard, mais vous devez avoir un bon code source avec lequel commencer.

Comme test, vous pouvez désactiver le CSS d'un site et voir à quel point il est compréhensible sans ce dernier. Vous pouvez le faire manuellement juste en retirant le CSS de votre code, mais la façon la plus simple reste d'utiliser les fonctionnalités du navigateur, par exemple :

- Firefox : Sélectionnez _Affichage > Style de page > Aucun style_ depuis le menu principal.
- Safari : Sélectionnez _Développement > Désactiver les styles_ depuis le menu principale (pour activer le menu _Développement_, choisissez _Safari_ > _Préférences_ > _Avancés_ > _Montrer le menu développement dans la barre de menu_).
- Chrome : Installez l'extension Web Developer Toolbar, puis redémarrer le navigateur. Cliquez sur l'icône engrenage qui apparaîtra, puis sélectionnez _CSS_ > _Désactiver tous les styles._
- Edge : Sélectionnez _Vue_ > _Style_ > _Aucun style_ depuis le menu principal.

#### Utiliser l'accessibilité native du clavier

Certaines fonctionnalités HTML peuvent être sélectionnées en utilisant uniquement le clavier — c'est le comportement par défaut, disponible depuis les prémices du web. Les éléments qui ont cette capacité sont les plus communs qui permettent à l'utilisateur d'interagir avec les pages web, à savoir les liens, {{htmlelement("button")}}s, et les éléments des formulaire comme {{htmlelement("input")}}.

Vous pouvez essayer ceci en utilisant notre exemple [native-keyboard-accessibility.html](http://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html) (voir le [code source](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html)) — ouvrez le dans un nouvel onglet, et essayez de presser la touche tab ; après quelques pressions, vous devriez voir la focalisation du tab commencer à se déplacer entre les différents éléments focalisables ; les éléments focalisés ont un style de mise en avant par défaut dans tous les navigateurs (cela diffère peu entre les différents navigateurs) donc vous pouvez dire quel éléments est focalisé.

![](button-focused-unfocused.png)

Vous pouvez ensuite presser Entrée/Retour pour accéder à un lien focalisé ou presser un bouton (nous avons inclus un peu de JavaScript pour que les boutons renvoies un message d'alerte), ou commencer à taper pour entrer du texte dans un des input texte (d'autres éléments de formulaire ont différents contrôles, par exemple l'élément {{htmlelement("select")}} peut avoir ses options affichées et navigable en utilisant les touches haut et bas).

Notez que différents navigateurs peuvent avoir différentes options de contrôle par clavier disponibles. La plupart des navigateurs modernes respectent le modèle de tab écrit plus haut (vous pouvez aussi faire une Shift + Tab pour reculer entre les éléments focalisables), mais certains navigateurs ont leurs propres particularités :

- Firefox pour Max ne tabule pas par défaut. Pour l'activer, vous devez aller dans _Préférences_ > _Avancées_ > _Général_, puis décochez "Toujours utiliser les curseurs pour naviguer dans une page". Ensuite, vous devez ouvrir les Préférences Système de votre Mac, puis sélectionnez le boutons radio _Tous les contrôles_.
- Safari ne vous permet pas de naviguer avec tab par défaut ; pour l'activer, vous devez ouvrir les _Préférences_ de Safari, allez dans Avancées, et cochez la case à cocher _Presser tab pour mettre en avant chaque item sur une page web_.

> **Attention :** Vous devez jouer ce genre de test sur toutes les pages que vous écrivez — assurez-vous que la fonctionnalité peut être accessible par le clavier.

Cet exemple souligne l'importance de l'utilisation de la sémantique correcte d'élément pour le travail correct. C'est possible de styler _n'importe quel_ élément pour qu'il ressemble à un lien ou un bouton avec le CSS, et de le faire se comporter comme un lien ou un bouton avec JavaScript, mais ils ne seront toujours pas des liens ou des boutons, et vous perdrez beaucoup de l'accessibilité que ces éléments vous fournissent pour rien. Donc ne le faîte pas si vous pouvez l'éviter.

Un autre conseil — comme vu dans notre exemple, vous pouvez contrôler comment vos éléments focalisables paraissent quand ils sont focalisés, en utilisant la pseudo-class [:focus](/fr/docs/Web/CSS/:focus). C'est une bonne idée de doubler les styles focus et hover, comme ça vos utilisateurs auront un indice visuel qu'un contrôle fera quelque chose lorsqu'il sera activé, qu'ils utilisent la souris ou le clavier :

```css
a:hover,
input:hover,
button:hover,
select:hover,
a:focus,
input:focus,
button:focus,
select:focus {
  font-weight: bold;
}
```

> **Note :** Si vous décidez de retirer le style focus par défaut en utilisant du CSS, assurez-vous de le remplacer par autre chose qui s'accorde au mieux avec votre design — c'est un outil d'accessibilité de grande valeur, qui ne doit pas être supprimé.

#### Intégrer l'accessibilité clavier

Parfois ça n'est pas possible d'éviter la perte de l'accessibilité clavier. Vous pouvez avoir hérité d'un site où la sémantique n'est pas parfaite (peut-être que vous vous êtes retrouvé avec un CMS horrible qui génère des boutons créés avec des `<div>`s), ou que vous utilisez un contrôle complexe qui n'a pas d'accessibilité clavier intégré, comme l'élément {{htmlelement("video")}} (étonnamment, Opera est le seul navigateur qui vous permet de tabuler dans l'élément `<video>` avec les contrôles par défaut du navigateur). Vous avez quelques options ici :

1. Créer des contrôles personnalisés en utilisant les éléments `<button>` (sur lequel nous pouvons tabuler par défaut !) et JavaScript pour les relier à leur fonction. Pour des bons exemples voir [Creating a cross-browser video player](/fr/docs/Web/Apps/Fundamentals/Audio_and_video_delivery/cross_browser_video_player).
2. Créer des raccourcis clavier en utilisant JavaScript, les fonctions sont activés quand vous appuyez sur une certaine touche du clavier. Voir [Desktop mouse and keyboard controls](/fr/docs/Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard) pour des exemples en rapport avec le jeu qui peuvent être adaptés à d'autres fins.
3. Utilisez des approches intéressantes pour simuler le comportement d'un bouton. Prenez par exemple notre exemple [fake-div-buttons.html](http://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) (voir le [code source](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html)). Nous donnons à nos faux boutons `<div>` la capacité d'être focalisé (y compris avec la tabulation) en donnant à chacun d'entre eux l'attribut `tabindex="0"` (voir l'[article tabindex](https://webaim.org/techniques/keyboard/tabindex) de WebAIM pour plus de détails utiles). Cela nous permet de tabuler sur les boutons, mais pas de les activer avec la toucher Entrée/Retour. Pour faire cela, nous devons ajouter ce petit bout de tromperie en JavaScript :

   ```js
   document.onkeydown = function (e) {
     if (e.keyCode === 13) {
       // The Enter/Return key
       document.activeElement.onclick(e);
     }
   };
   ```

   Ici nous ajoutons un listener à l'objet `document` pour détecter quand une touche a été appuyée sur le clavier. Nous vérifions quelle touche a été pressée avec la propriété d'évènement d'objet [keyCode](/fr/docs/Web/API/KeyboardEvent/keyCode) ; si c'est le code de la touche qui retourne Entrée/Retour, on exécute la fonction stockée dans le `onclick` du bouton en utilisant `document.activeElement.onclick()`. [`activeElement`](/fr/docs/Web/API/Document/activeElement) nous donne l'élément courant qui est focalisé sur la page.

> **Note :** Cette technique ne fonctionnera que si vous configurer vos propres gestionnaires d'évènement avec les propriétés de gestion d'évènement (par ex. `onclick`). `addEventListener` ne fonctionnera pas. C'est beaucoup de prises de tête pour construire la fonctionnalité de retour. Et il y a d'autres problèmes rattachés avec. Vaut mieux commencer par utiliser les bons éléments pour leurs buts initiaux.

#### Les textes alternatifs

Les textes alternatifs sont très importants pour l'accessibilité — si une personne a un trouble visuel ou auditif qui l'empêche de voir ou d'entendre un contenu, alors c'est un problème. Le texte alternatif le plus simple disponible est le modeste attribut `alt`, que nous devrions inclure dans toutes les images qui contiennent un contenu pertinent. Il peut contenir une description de l'image qui transmet clairement son sens et son contenu sur la page, pour être récupéré par un lecteur d'écran et lu à l'utilisateur.

> **Note :** Pour plus d'informations, lisez [Text alternatives](/fr/docs/Learn/Accessibility/HTML#Text_alternatives).

L'oubli de texte alt peut être testé de bien des façons, par exemple en utilisant [les outils d'audit](#les_outils_daudit) d'accessibilité.

Le texte alt est légèrement plus complexe pour du contenu vidéo ou audio. Il y a une manière de gérer l'affichage du texte (par ex. les sous-titres) et de les afficher quand la vidéo est jouée, sous le forme de l'élément {{htmlelement("track")}}, et du format [WebVTT](/fr/docs/Web/API/Web_Video_Text_Tracks_Format) (voir [Ajouter des légendes et des sous-titres à des vidéos HTML5](/fr/Apps/Build/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video) pour un tutoriel détaillé). [La compatibilité entre navigateur](/fr/Apps/Build/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video#Compatibilité_entre_navigateurs) pour cette fonction est assez bonne, mais si vous voulez fournir des textes alternatifs pour de l'audio ou supporter les vieux navigateurs, une simple transcription du texte présenté quelque part sur la page ou sur une page séparée peut être une bonne idée.

#### Relations et contexte entre élément

Il y a certaines caractéristiques et pratiques optimales en HTML conçues pour apporter du contexte et des relations entre des éléments lorsqu'aucune n'aurait autrement existé. Les trois exemples les plus courants sont les liens, les libellés de formulaire et les tableau de données.

La solution pour les textes de type lien c'est que les personnes utilisant des lecteurs d'écran vont souvent utiliser une fonctionnalité commune avec laquelle ils vont récupérer une liste de tous les liens sur la page. Par exemple, une liste de lien libellés "cliquez ici", "cliquez ici", etc. est vraiment mauvaise pour l'accessibilité. Il est préférable pour les textes de type lien d'avoir du sens en contexte et hors contexte.

Le suivant sur notre liste, l'élément de formulaire {{htmlelement("label")}} est une des fonctionnalités centrales qui nous permet de rendre les formulaires accessibles. Le problème avec les formulaires c'est que vous avez besoin de libellés pour dire quelle donnée doit être entrée dans chaque champs du formulaire. Chaque libellé doit être inclus dans un {{htmlelement("label")}} pour le relier clairement à son champs partenaire (chaque valeur de l'attribut `for` de `<label>` doit aller avec la valeur de l'`id` de l'élément du formulaire), et cela aura du sens même si le code source n'est pas totalement logique (ce qui pour être tout à fait juste devrait être fait).

> **Note :** Lisez [Meaningful text labels](/fr/docs/Learn/Accessibility/HTML#Meaningful_text_labels), pour plus d'information à propos des textes de type lien et les libellés des formulaires.

Pour terminer, un mot rapide sur les tableaux de données. Un tableau de données basique peut être écrit avec des indications très simples (voir `bad-table.html` [en direct](http://mdn.github.io/learning-area/accessibility/html/bad-table.html), et [la source](https://github.com/mdn/learning-area/blob/master/accessibility/html/bad-table.html)), mais il y a des problèmes — il n'y a aucun moyen pour un utilisateur de lecteur d'écran d'associer des lignes ou des colonnes ensembles comme un groupe de données — pour faire cela vous devez connaître les lignes d'en-têtes, et si elles se dirigent en lignes, colonnes, etc. Cela ne peut être fait qu'en visuel pour un tel tableau.

Si vous regardez plutôt notre exemple `punk-band-complete.html` ([direct](https://mdn.github.io/learning-area/css/styling-boxes/styling-tables/punk-bands-complete.html), [source](https://github.com/mdn/learning-area/blob/master/css/styling-boxes/styling-tables/punk-bands-complete.html)), vous pouvez voir plusieurs aides à l'accessibilité en place, comme les entêtes de tableau ({{htmlelement("th")}} et les attributs `scope`), l'élément {{htmlelement("caption")}}, etc.

> **Note :** Lisez [Accessible data tables](/fr/docs/Learn/Accessibility/HTML#Accessible_data_tables), pour plus d'information à propos des tableaux accessibles.

### CSS

Le CSS tend à fournir beaucoup moins de caractéristiques fondamentales d'accessibilité que le HTML, mais il peut aussi faire beaucoup de dommage à l'accessibilité s'il est mal utilisé. Nous avons déjà mentionné quelques conseils sur l'accessibilité incluant le CSS :

- Utilisez les éléments sémantiques correctes pour définir différent contenu en HTML ; si vous voulez créer un effet visuel différent, utilisez le CSS — n'abusez pas d'un élément HTML pour obtenir l'aspect que vous désirez. Par exemple si vous voulez un texte plus gros, utilisez {{cssxref("font-size")}}, par un élément {{htmlelement("h1")}}.
- Assurez-vous que votre code source a du sens sans le CSS ; vous pouvez toujours utilisez le CSS pour styler autant que vous voudrez après.
- Vous devez vous assurez que les éléments interactifs comme les boutons et les liens ont des états focus/hover/active appropriés configuré, pour donner à l'utilisateur un indice visuel de leur fonction. Si vous supprimez les styles par défaut pour des raisons stylistiques, assurez-vous de mettre en place des styles de remplacement.

Il y a quelques autres considérations que vous devriez prendre en compte.

#### Couleur et contraste

Lorsque vous choisissez une palette de couleurs pour votre site web, vous devez vous assurer que la couleur du texte (au premier plan) contraste bien avec la couleur d'arrière-plan. Votre design peut avoir l'air cool, mais ce n'est pas bon si les personnes avec un handicap visuel comme le daltonisme ne peuvent pas lire votre contenu. Utilisez un outil comme le [Color Contrast Checker](http://webaim.org/resources/contrastchecker/) de WebAIM si votre palette contraste suffisamment.

Une autre astuce est de ne pas compter sur une couleur seule pour les indications/informations, comme ça ne sera pas bon pour ceux qui ne peuvent pas voir la couleur. Plutôt que de marquer en rouge les champs requis d'un formulaire, par exemple, marquez-les avec un astérisque et en rouge.

> **Note :** un contraste élevé permettra également à toute personnes utilisant un smartphone ou une tablette avec un écran brillant de mieux lire les pages dans un environnement lumineux, comme avec la lumière du soleil.

#### Cacher du contenu

Il y a plusieurs cas où un design visuel requerra que tout le contenu ne soit pas montré d'un seul coup. Par exemple, dans notre [Exemple de boîte d'info avec onglets](http://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/info-box.html) (voir le [code source](https://github.com/mdn/learning-area/blob/master/css/css-layout/practical-positioning-examples/info-box.html)) nous avons trois panneau d'information, mais nous les [positionnons](/fr/docs/Learn/CSS/CSS_layout/Positioning) les uns sur les autres et fournissons des onglets qui peuvent être cliqués pour montrer chacun d'entre eux (c'est aussi accessible au clavier — vous pouvez utiliser alternativement Tab et Entrée/Retour pour les sélectionner).

![](tabbed-info-box.png)

Les utilisateurs de lecteur d'écran ne se soucient pas vraiment de cela — ils sont satisfaits tant que le contenu a du sens dans le code source, et qu'ils peuvent entièrement y accéder. Le positionnement absolute (comme utilisé dans cet exemple) est souvent vu comme l'un des meilleur mécanismes pour cacher du contenu pour des effets visuels, parce que ça n'empêche pas les lecteur d'écran d'y accéder.

D'un autre côté, vous ne devriez pas utiliser {{cssxref("visibility")}}`:hidden` ou {{cssxref("display")}}`:none`, parce qu'il cache le contenu aux lecteurs d'écran. A moins que, bien entendu, il y est une bonne raison qui justifie que ce contenu soit caché aux lecteurs d'écran.

> **Note :** [Invisible Content Just for Screen Reader Users](http://webaim.org/techniques/css/invisiblecontent/) vous décrira beaucoup de détails utilesà propos de ce sujet.

### JavaScript

Le JavaScript a le même type de problèmes que le CSS concernant l'accessibilité — cela peut être désastreux pour l'accessibilité si mal utilisé, ou trop utilisé. Nous avions déjà abordé quelques problèmes d'accessibilité en rapport avec le JavaScript, principalement dans le champ de la sémantique HTML — vous devez toujours utiliser une sémantique HTML appropriée pour implémenter une fonctionnalité qu'importe où elle est disponible, par exemple utiliser des liens et des boutons de façon appropriée. N'utilisez pas les éléments `<div>` avec du code JavaScript pour simuler une fonctionnalité si c'est possible — c'est une source d'erreur, et ça fonctionne mieux d'utiliser les fonctionnalités disponibles qu'HTML vous fournit.

#### Fonctionnalité simple

Normalement, une fonctionnalité simple doit marcher uniquement avec le HTML en place — le JavaScript ne doit pas être utilisé que pour améliorer la fonctionnalité, par pour la construire en entier. Les bons usages de JavaScript incluent :

- Fournir une validation de formulaire côté client, qui informe rapidement les utilisateurs des problèmes avec leurs entrées dans le formulaire, sans qu'ils aient à attendre que le serveur vérifie les données. Si ça n'est pas disponible, le formulaire marchera toujours, mais la validation sera peut-être plus lente.
- Fournir des contrôles personnalisés pour les `<video>`s HTML5 qui sont accessibles pour les utilisateurs uniquement au clavier (comme nous l'avons dit auparavant, les contrôles par défaut de navigateur ne sont pas accessibles au clavier dans la plupart des navigateurs).

> **Note :** [Accessible JavaScript](http://webaim.org/techniques/javascript/) de WebAIM fourni des renseignements approfondis à propos des considérations pour du JavaScript accessible.

Les implémentations JavaScript plus complexes peuvent mener à des problèmes avec l'accessibilité — vous devez faire ce que vous pouvez. par exemple, cela ne serait pas raisonnable d'attendre de vous que vous fassiez un jeu complexe 3D écrit avec [WebGL](/fr/Apprendre/WebGL) accessible à 100% pour une personne aveugle, mais vous pouvez implémenter des [contrôles clavier](/fr/docs/Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard) pour qu'il soit utilisable pour un utilisateur sans souris, et réaliser une palette de couleurs suffisamment contrastée pour être utilisable par les personnes avec des lacunes pour percevoir les couleurs.

#### Fonctionnalité complexe

L'un des domaines de problématique principal pour l'accessibilité c'est les applis complexes qui nécessitent des contrôles de formulaires compliqués (comme les sélecteurs de date) et le contenu dynamique qui se met souvent à jour et de façon incrémentale.

Les contrôles de formulaire compliqués non natifs sont problématiques parce qu'ils ont tendance à nécessiter beaucoup de `<div>`s imbriquées, et le navigateur ne sait pas quoi faire par défaut avec elles. Si vous les inventer vous-même, vous devez vous assurer qu'ils sont accessibles par le clavier ; si vous utilisez des structures externes, revoyez en profondeur les options disponibles pour voir à quel point elles sont accessibles avant de vous plonger dedans. [Bootstrap](http://getbootstrap.com/) à l'air d'être assez bon pour l'accessibilité, par exemple, bien que [Making Bootstrap a Little More Accessible](https://www.sitepoint.com/making-bootstrap-accessible/) de Rhiana Heath aborde certain de ses problèmes (principalement en rapport avec le contraste des couleurs), et examine certaines solutions.

Le contenu dynamique régulièrement mis à jour peut-être un problème parce que les utilisateurs de lecteur d'écran peuvent le manquer, spécialement si les mises à jour sont inattendues. Si vous avez une appli en single-page avec un contenu principal dans un panneau qui est régulièrement mis à jour en utilisant [XMLHttpRequest](/fr/docs/Web/API/XMLHttpRequest) ou [Fetch](/fr/docs/Web/API/Fetch_API), un utilisateur utilisant un lecteur d'écran peut rater ces mises à jour.

#### WAI-ARIA

Avez-vous besoin d'utiliser une fonctionnalité complexe, ou à la place vous le faîte avec une bonne vieille sémantique HTML ? Si vous avez besoin de complexité, vous devriez songer à utiliser [WAI-ARIA](https://www.w3.org/TR/wai-aria-1.1/) (Accessible Rich Internet Applications), une spécification qui fournit une sémantique (sous la forme des nouveaux attributs HTML) pour les objets comme les contrôles complexes de formulaire et les panneaux mis à jour qui peuvent être compris par la plupart des navigateurs et les lecteurs d'écran.

Pour traiter avec les widgets complexes de formulaire, vous devez utiliser les attributs ARIA comme `roles` pour déclarer quel rôle les différents éléments on dans un widget (par exemple, est-ce qu'ils sont un onglet, ou un panneau ?), `aria-disabled` pour dire si un contrôle est désactivé ou pas, etc.

Pour traiter avec les zones de contenu qui sont régulièrement mises à jour, vous pouvez utiliser l'attribut `aria-live`, qui identifie une zone mise à jour. Sa valeur indique avec quelle urgence le lecteur d'écran doit faire la lecture :

- `off` : Par défaut. Les mises à jour ne seront pas annoncées.
- `polite` : Les mises à jour sont annoncées seulement si l'utilisateur est inactif.
- `assertive` : Les mises à jour sont annoncées à l'utilisateur aussi tôt que possible.
- `rude` : Les mises à jour sont annoncées immédiatement, même si cela interrompt l'utilisateur.

Voici un exemple :

```html
<p><span id="LiveRegion1" aria-live="polite" aria-atomic="false"></span></p>
```

Vous pouvez voir un exemple en action sur l'exemple [ARIA (Accessible Rich Internet Applications) Live Regions](http://www.freedomscientific.com/Training/Surfs-up/AriaLiveRegions.htm) de Freedom Scientific — le paragraphe surligné doit mettre à jour son contenu toutes les 10 secondes, et un lecteur d'écran doit le lire à l'utilisateur. [ARIA Live Regions - Atomic](http://www.freedomscientific.com/Training/Surfs-up/AriaLiveRegionsAtomic.htm) apporte un autre exemple utile.

Nous n'avons pas de place pour couvrir WAI-ARIA en détail ici, vous pouvez en apprendre beaucoup plus à ce propos sur [WAI-ARIA basics](/fr/docs/Learn/Accessibility/WAI-ARIA_basics).

## Les outils d'accessibilité

Maintenant que nous avons couvers les considérations de l'accessibilité pour les différentes technologies web, incluant quelques techniques de test (comme la navigation au clavier et le vérificateur de contraste de couleur), tournons-nous maintenant vers d'autres outils que vous pouvez utiliser pour faire des tests d'accessibilité.

### Les outils d'audit

Il y a plusieurs outils d'audit disponibles que vous pouvez placer sur vos pages web, lesquels les examinerons et retournerons une liste de problèmes d'accessibilité présents sur la page. A titre d'exemple :

- [Tenon](https://tenon.io)&nbsp;: une assez bonne appli en ligne qui traverse le code à une URL fournie et qui retourne les résultats sur les erreurs d'acessibilité comprenant les indicateurs, ds erreurs spécifiques accompagnés des critères WCAG qu'elles affectent, et des suggestion de résolutions.
- [tota11y](http://khan.github.io/tota11y/) : Un outil d'accessibilité de la Khan Academy qui prend la forme d'une librairie JavaScript que vous attachez à votre page pour apporter plusieurs outils d'accessibilité.
- [Wave](http://wave.webaim.org/): Un autre outil en ligne de test d'accessibilité qui accepte une adresse web et retourne une utile vue annotée de la page avec les problèmes d'accessibilité surlignés.

Observons un exemple, en utilisant Tenon.

1. Aller sur la [page d'accueil de Tenon](https://tenon.io).
2. Entrez l'URL de notre exemple de [bad-semantics.html](http://mdn.github.io/learning-area/accessibility/html/bad-semantics.html) dans l'entrée texte en haut de la page (ou l'URL d'une autre page que vous aimeriez analyser) et appuyez sur _Analyse your Webpage_.
3. Défilez vers le bas jusqu'à que vous trouviez la section d'erreur/signalement, comme montré ci-dessous.

![](tenon-screenshot.png)

Il y a également des options que vous pouvez examiner (voir le lien _Show Options_ vers le haut de la page), ainsi qu'une API pour utiliser Tenon comme un programme.

> **Note :** De tels outils ne sont pas suffisant pour résoudre tous vos problèmes d'accessibilité en tant que tel. Vous devrez les combiner, savoir et expérience, test utilisateur, etc. pour vous faire une image exacte.

### Les outils d'automatisation

[Deque's aXe tool](https://www.deque.com/products/axe/) va un peu plus loin que les outils d'audit que nous avons mentionné plus haut. Comme les autres, il vérifie les pages et retourne des erreurs d'accessibilité. Sa forme immédiate la plus utile est sûrement son extension navigateur :

- [aXe pour Chrome](http://bitly.com/aXe-Chrome)
- [aXe pour Firefox](http://bit.ly/aXe-Firefox)

Cela ajoute un onglet accessibilité aux outils de développeur du navigateur, nous avons installé la version pour Firefox, puis nous l'avons utilisé pour auditer notre exemple [bad-table.html](http://mdn.github.io/learning-area/accessibility/html/bad-table.html). Nous obtenons les résultats suivants :

![](aXe-screenshot.png)

aXe est également installable en utilisant `npm`, et peut-être intégré avec des exécuteurs de tâche comme [Grunt](http://gruntjs.com/) et [Gulp](http://gulpjs.com/), des frameworks d'automatisation comme [Selenium](http://www.seleniumhq.org/) et [Cucumber](https://cucumber.io/), des framework de test unitaire comme [Jasmin](http://jasmine.github.io/), et d'autres encore (une fois encore, voir la [page principale d'aXe](https://www.deque.com/products/axe/) pour plus de détails).

### Les lecteurs d'écran

Il faut définitivement tester avec un lecteur d'écran pour s'habituer à comment les personnes malvoyantes utilisent le Web. Il y a plusieurs lecteurs d'écran disponible :

- Certain sont des produits commerciaux payants, comme [JAWS](http://www.freedomscientific.com/Products/Blindness/JAWS) (Windows) et [Window Eyes](http://www.gwmicro.com/window-eyes/) (Windows).
- Certains sont des produits gratuits, comme [NVDA](http://www.nvaccess.org/) (Windows), [ChromeVox](http://www.chromevox.com/) (Chrome, Windows, et Mac OS X), et [Orca](https://wiki.gnome.org/Projects/Orca) (Linux).
- Certains sont compris dans le système d'exploitation, comme like [VoiceOver](http://www.apple.com/accessibility/osx/voiceover/) (Mac OS X et iOS), [ChromeVox](http://www.chromevox.com/) (sur les Chromebooks), et [TalkBack](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback) (Android).

La plupart du temps, les lecteurs d'écran sont des applis séparées, qui s'exécutent sur le système d'exploitation hôte et peuvent lire des pages web, mais aussi du texte dans d'autres appli. Ce n'est pas toujours le cas (ChromeVox est une extension navigateur), mais ça l'est souvent. Les lecteurs d'écran ont tendance à agir de manière légèrement différente et ont des contrôles différents, donc vous devrez consulter la documentation pour le lecteur d'écran que vous avez choisi pour obtenir tous les détails — cela dit, il fonctionne tous à peu près de la même manière.

Commençons à effectuer quelques tests avec deux lecteurs d'écran différents pour vous donner une idée générale de comment ils fonctionnent et de comment tester avec eux.

> **Note :** [Designing for Screen Reader Compatibility](http://webaim.org/techniques/screenreader/) de WebAIM fournit des informations utiles à propos de l'utilisation des lecteurs d'écran et qu'est-ce qui est le plus efficace pour les lecteurs d'écran. Aller également voir [Screen Reader User Survey #6 Results](http://webaim.org/projects/screenreadersurvey6/#used) pour des statistiques intéressantes concernant l'utilisation de lecteur d'écran.

#### VoiceOver

VoiceOver (VO) est gratuit avec votre Mac/iPhone/iPad, donc c'est utile pour tester sur votre ordinateur/mobile si vous utilisez des produits Apple. Nous le testerons sur Mac OS X sur un MacBook Pro.

Pour le démarrer, pressez Cmd + Fn + F5. Si vous n'avez jamais utilisé VO auparavant, vous obtiendrez un écran de bienvenue où vous pouvez choisir de démarrer VO ou de ne pas le démarrer, et vous parcourrez un tutoriel utile pour apprendre à comment l'utiliser. Pour l'arrêter, pressez Cmd + Fn + F5 à nouveau.

> **Note :** Vous devriez parcourir le tutoriel au moins une fois — il est vraiment très utile pour en apprendre à propos de VO.

Lorsque VO est démarré, l'affichage ressemblera à peu près à cela, mais vous verrez une boîte noire en bas à gauche de l'écran qui contient l'information sur quoi est-ce que VO est actuellement sélectionné. La sélection courante sera également mise en avant, avec une bordure noire — cette mise en avant est connue comme le **curseur VO**.

![](voiceover.png)

Pour utiliser VO, vous aller beaucoup utiliser le "modificateur VO" — c'est une touche ou une combinaison de touches que vous devez presser en plus de l'actuel raccourci VO pour qu'elles fonctionnent. Utiliser un modificateur comme celui-ci est courant avec les lecteurs d'écran, pour leur permettre de garder leur propres commandes en évitant d'entrer en conflit avec d'autres commandes. Dans le cas de VO, le modificateur peut aussi être VerrMaj, ou Ctrl + Option.

VO a beaucoup de commandes clavier, et nous n'allons pas toutes les lister ici. Les principales dont vous aurez besoin pour tester une page web sont dans le tableau suivant. Dans les raccourcis clavier, "VO" veut dire "le modificateur VoiceOver".

<table class="standard-table">
  <caption>
    <p>Les raccourcis clavier VoiceOver les plus communs</p>
  </caption>
  <thead>
    <tr>
      <th scope="col">Raccourci clavier</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>VO + Touches du curseur</td>
      <td>Déplace le curseur VO vers le haut, la droite, le bas, la gauche.</td>
    </tr>
    <tr>
      <td>VO + Barre espace</td>
      <td>
        <p>
          Sélectionne/active les éléments mis en avant par le curseur VO. Cela
          inclut les items sélectionnés dans le Rotor (voir plus bas).
        </p>
      </td>
    </tr>
    <tr>
      <td>VO + Shift + curseur bas</td>
      <td>
        <p>
          Se déplacer dans un groupe d'éléments (comme un tableau HTML, ou un
          formulaire, etc.) Une fois dans un groupe vous pouvez vous déplacer et
          sélectionner les éléments à l'intérieur de ce groupe en utilisant les
          commandes ci-dessus normalement.
        </p>
      </td>
    </tr>
    <tr>
      <td>VO + Shift + curseur haut</td>
      <td>Sortir d'un groupe.</td>
    </tr>
    <tr>
      <td>VO + C</td>
      <td>
        <p>
          (à l'intérieur d'un tableau) lire l'entête de la colonne courante.
        </p>
      </td>
    </tr>
    <tr>
      <td>VO + R</td>
      <td>(à l'intérieur d'un tableau) lire l'entête de la ligne courante.</td>
    </tr>
    <tr>
      <td>VO + C + C (deux C d'affilé)</td>
      <td>
        (à l'intérieur d'un tableau) lire toute la colonne courante, incluant
        l'entête.
      </td>
    </tr>
    <tr>
      <td>VO + R + R (deux R d'affilé)</td>
      <td>
        <p>
          (à l'intérieur d'un tableau) lire toute la ligne courante, incluant
          les entêtes qui correspondent à chacune des cellules.
        </p>
      </td>
    </tr>
    <tr>
      <td>VO + curseur gauche, VO + curseur droit</td>
      <td>
        (à l'intérieur d'options horizontales, comme un sélecteur de date ou de
        temps) Se déplacer entre les options
      </td>
    </tr>
    <tr>
      <td>VO + curseur haut, VO + curseur bas</td>
      <td>
        (à l'intérieur d'options horizontales, comme un sélecteur de date ou de
        temps) Modifier l'option courante.
      </td>
    </tr>
    <tr>
      <td>VO + U</td>
      <td>
        <p>
          Utiliser le rotor, qui affiche des listes de rubriques, de liens, de
          contrôles de formulaires, etc. pour une navigation simplifiée.
        </p>
      </td>
    </tr>
    <tr>
      <td>VO + curseur gauche, VO + curseur droit</td>
      <td>
        <p>
          (à l'intérieur du Rotor) Se déplacer ente les différentes listes
          disponibles dans le Rotor.
        </p>
      </td>
    </tr>
    <tr>
      <td>VO + curseur haut, VO + curseur bas</td>
      <td>
        <p>
          (à l'intérieur du Rotor) Se déplacer entre les différents éléments
          dans la liste courante du Rotor.
        </p>
      </td>
    </tr>
    <tr>
      <td>Esc</td>
      <td>(à l'intérieur du Rotor) Sortir du Rotor.</td>
    </tr>
    <tr>
      <td>Ctrl</td>
      <td>(Lorsque VO parle) Arrêter/Reprendre l'allocution.</td>
    </tr>
    <tr>
      <td>VO + Z</td>
      <td>Relance la dernière partie de l'allocution.</td>
    </tr>
    <tr>
      <td>VO + D</td>
      <td>
        <p>
          Aller dans le Dock du Mac, pour que vous puissiez sélectionner des
          applis à exécuter.
        </p>
      </td>
    </tr>
  </tbody>
</table>

Cela peut paraître comme beaucoup de commandes, mais pas tant que ça que vous vous y habituez, et VO vous rappelle régulièrement quels commandes utiliser dans quels cas. Essayer de tester VO maintenant ; vous pouvez dorénavant essayer de tester certains de nos exemples dans la section [Test avec lecteur d'écran](#test_avec_lecteur_décran).

#### NVDA

NVDA est exclusif à Windows, et vous allez devoir l'installer.

1. Téléchargez-le depuis [nvaccess.org](http://www.nvaccess.org/). Vous pouvez choisir si vous voulez faire une donation ou le télécharger gratuitement ; vous devrez également leur donner votre adresse e-mail avant de pouvoir le télécharger.
2. Une fois téléchargé, installez-le — double cliquez sur l'installeur, acceptez la licence et suivez les instructions.
3. Pour lancer NVDA, double cliquez sur fichier/raccourci du programme, ou utilisez le raccourci clavier Ctrl + Alt + N. Vous verrez la boîte de dialogue de bienvenue de NVDA lorsque vous le démarrez. Vous pouvez choisir ici différentes options, puis appuyez sur _OK_ pour continuer.

NVDA sera maintenant actif sur votre ordinateur.

Pour utiliser NVDA, vous aller beaucoup utiliser le "modificateur NVDA" — c'est une touche que vous devez presser en plus de l'actuel raccourci NVDA pour qu'elles fonctionnent. Utiliser un modificateur comme celui-ci est courant avec les lecteurs d'écran, pour leur permettre de garder leurs propres commandes en évitant d'entrer en conflit avec d'autres commandes. Dans le cas de NVDA, le modificateur peut aussi être Insert (par défaut), ou VerrMaj (peut être choisi en cochant la première case à cocher dans la boîte de dialogue de bienvenue avant d'appuyer sur _OK_).

> **Note :** NVDA est plus subtile que VoiceOver en termes de comment il met en valeur là où il est et qu'est-ce qu'il fait. Lorsque vous défilez à travers des rubriques, listes, etc. les éléments que vous sélectionnez seront généralement mis à avant avec un contour subtile, mais ça n'est pas toujours le cas pour toutes les choses. Si vous vous retrouvez complètement perdu, vous pouvez appuyer sur Ctrl + F5 pour rafraîchir la page courante et recommencer en haut de la page.

NVDA a beaucoup de commandes clavier, et nous n'allons pas toutes les lister ici. Les principales dont vous aurez besoin pour tester une page web sont dans le tableau suivant. Dans les raccourcis clavier, "NVDA" veut dire "le modificateur NVDA".

<table class="standard-table">
  <caption>
    Les raccourcis clavier NVDA les plus communs
  </caption>
  <thead>
    <tr>
      <th scope="col">Raccourci clavier</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>NVDA + Q</td>
      <td><p>Arrête NVDA après que vous l'ayez démarré.</p></td>
    </tr>
    <tr>
      <td>NVDA + curseur haut</td>
      <td>Lit la ligne courante.</td>
    </tr>
    <tr>
      <td>NVDA + curseur bas</td>
      <td>Commence à lire à la position courante.</td>
    </tr>
    <tr>
      <td>curseur haut ou curseur bas, ou Shift + Tab et Tab</td>
      <td>
        <p>Se déplace à l'élément suivant/précédent de la page et le lit.</p>
      </td>
    </tr>
    <tr>
      <td>curseur gauche et curseur droit</td>
      <td>
        <p>
          Se déplace au caractère suivant/précédent dans l'élément courant et le
          lit.
        </p>
      </td>
    </tr>
    <tr>
      <td>Shift + H et H</td>
      <td><p>Se déplace au titre suivante/précédente et le lit.</p></td>
    </tr>
    <tr>
      <td>Shift + K et K</td>
      <td><p>Se déplace au lien suivant/précédent et le lit.</p></td>
    </tr>
    <tr>
      <td>Shift + D et D</td>
      <td>
        <p>
          Se déplace au repère de document (par ex. <code>&#x3C;nav></code>)
          suivant/précédent et le lit.
        </p>
      </td>
    </tr>
    <tr>
      <td>Shift + 1–6 et 1–6</td>
      <td>
        <p>Se déplace au titre (niveau 1 à 6) suivant/précédent et le lit.</p>
      </td>
    </tr>
    <tr>
      <td>Shift + F et F</td>
      <td>
        <p>
          Se déplace à l'entrée de formulaire suivante/précédente et se focalise
          dessus.
        </p>
      </td>
    </tr>
    <tr>
      <td>Shift + T et T</td>
      <td>
        <p>
          Se déplace sur la donnée de tableau suivante/précédente et se focalise
          dessus.
        </p>
      </td>
    </tr>
    <tr>
      <td>Shift + B et B</td>
      <td>
        <p>Se déplace sur le bouton suivant/précédent et lit son libellé.</p>
      </td>
    </tr>
    <tr>
      <td>Shift + L et L</td>
      <td>
        <p>
          Se déplace à la liste suivante/précédente et lit son premier item de
          liste.
        </p>
      </td>
    </tr>
    <tr>
      <td>Shift + I et I</td>
      <td><p>Se déplace à l'item de liste suivant/précédent et le lit.</p></td>
    </tr>
    <tr>
      <td>Entrée/Retour</td>
      <td>
        <p>
          (quand un lien/bouton ou autre élément activable est sélectionné)
          Active l'élément.
        </p>
      </td>
    </tr>
    <tr>
      <td>NVDA + Barre espace</td>
      <td>
        <p>
          (quand un formulaire est sélectionné) Entre dans le formulaire pour
          que les éléments puissent être sélectionnés individuellement, ou
          quitter le formulaire si vous êtes déjà dedans.
        </p>
      </td>
    </tr>
    <tr>
      <td>Shift Tab et Tab</td>
      <td>
        <p>
          (à l'intérieur d'un formulaire) Se déplacer entre les entrées de
          formulaire.
        </p>
      </td>
    </tr>
    <tr>
      <td>Curseur haut et curseur bas</td>
      <td>
        <p>
          (à l'intérieur d'un formulaire) Modifier les valeurs d'une entrée de
          formulaire (dans les cas comme les listes déroulantes)
        </p>
      </td>
    </tr>
    <tr>
      <td>Barre espace</td>
      <td>
        <p>(à l'intérieur d'un formulaire) Sélectionner la valeur choisie.</p>
      </td>
    </tr>
    <tr>
      <td>Ctrl + Alt + touches fléchées</td>
      <td>
        (à l'intérieur d'un tableau) Se déplacer entre les cellules du tableau.
      </td>
    </tr>
  </tbody>
</table>

#### Test avec lecteur d'écran

Maintenant que vous vous êtes habitué à utiliser un lecteur d'écran, nous aimerions que vous vous habituiez à faire quelques tests d'accessibilité rapides, pour vous faire une idée de comment les lecteurs d'écran se débrouillent avec les bonnes et mauvaises caractéristiques d'une page web :

- Regardez [good-semantics.html](http://mdn.github.io/learning-area/accessibility/html/good-semantics.html), et notez comment les titres sont trouvés pas le lecteur d'écran et rendus disponibles pour être utilisés en navigation. Regardez maintenant [bad-semantics.html](http://mdn.github.io/learning-area/accessibility/html/bad-semantics.html), et observez comme le lecteur d'écran n'obtient aucune de ces informations. Imaginez à quel point cela peut être pénible lorsque vous essayez de naviguer sur une page de texte vraiment longue.
- Regardez [good-links.html](http://mdn.github.io/learning-area/accessibility/html/good-links.html), et notez comment est-ce qu'ils ont du sens vus hors contexte. Ce n'est pas le cas avec [bad-links.html](http://mdn.github.io/learning-area/accessibility/html/bad-links.html) — ceux sont juste tous des "click here".
- Regardez [good-form.html](http://mdn.github.io/learning-area/accessibility/html/good-form.html), et regardez comment les entrées du formulaire sont décrites en utilisant leurs libellés parce que nous avons utilisé l'élément `<label>` correctement. Dans [bad-form.html](http://mdn.github.io/learning-area/accessibility/html/bad-form.html), ils ne sont que des "blank" sur toute la ligne, totalement inutiles.
- Regardez notre exemple [punk-bands-complete.html](http://mdn.github.io/learning-area/css/styling-boxes/styling-tables/punk-bands-complete.html), et observez comment le lecteur d'écran est capable d'associer les colonnes et les lignes de contenu et de les lires toutes ensembles, parce que nous avons défini les entêtes correctement. Dans [bad-table.html](http://mdn.github.io/learning-area/accessibility/html/bad-table.html), aucune des cellules ne peut être associée du tout. Notez que NVDA a étonnamment l'air d'assez bien se comporter lorsque vous n'avez qu'un seul tableau sur une page ; à la place vous pouvez essayer [WebAIM's table test page](http://webaim.org/articles/nvda/tables.htm).
- Jetez un œil à [WAI-ARIA live regions example](http://www.freedomscientific.com/Training/Surfs-up/AriaLiveRegions.htm) que nous avons vu plus tôt, et observez comment le lecteur d'écran va continuer de lire la section qui se met à constamment à jour dès qu'elle se met à jour.

### Test utilisateur

Comme mentionné plus haut, vous ne pouvez pas uniquement compter sur les outils automatisés pour déterminer les problèmes d'accessibilité sur votre site. Il est recommandé que lorsque vous établissez votre plan de test, vous devez inclure quelques groupes d'utilisateur d'accessibilité si c'est possible (voir notre section [Test Utilisateur](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies#Les_tests_utilisateurs) plus tôt dans ce cours pour plus de contexte). Essayez d'inclure des utilisateurs de lecteur d'écran, des utilisateurs exclusifs au clavier, des utilisateurs malentendants, et peut-être d'autres groupes encore, selon vos besoins.

## Checklist de tests d'accessibilité

La liste suivante vous fournit une checklist à suivre pour vous assurer de mener à bien les tests d'accessibilité recommandés pour votre projet :

1. Assurez-vous que votre HTML est sémantiquement correct au possible. [Le valider](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_et_CSS#La_validation) est un bon début, comme utiliser un [outil d'Audit](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#Auditing_tools).
2. Vérifiez que votre contenu a du sens lorsque le CSS est désactivé.
3. Assurez-vous que votre fonctionnalité est [accessible au clavier](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#Using_native_keyboard_accessibility). Testez en utilisant Tab, Retour/Entrée, etc.
4. Assurez-vous que votre contenu non-textuel a un [texte alternatif](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#Text_alternatives). Un [Outil d'audit](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#Auditing_tools) est bien pour repérer ce type de problèmes.
5. Assurez-vous que votre [contraste de couleurs](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#Color_and_color_contrast) est acceptable, en utilisant un outil de vérification approprié.
6. Assurez-vous que le [contenu caché](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#Hiding_content) est visible par les lecteurs d'écran.
7. Assurez-vous qu'une fonctionnalité est utilisable sans JavaScript autant que possible.
8. Utilisez ARIA pour améliorer l'accessibilité quand c'est approprié.
9. Exécutez votre site dans un [Outil d'audit](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#Auditing_tools).
10. Testez avec un lecteur d'écran.
11. Incluez une politique/déclaration d'accessibilité à un endroit que l'on peut trouver sur votre site pour dire ce que vous avez fait.

## Trouver de l'aide

Il y a bien d'autres problèmes que vous allez rencontrer avec l'accessibilité ; la chose la plus importante à vraiment savoir est comment trouver des réponses en ligne. Consultez l'article [la section Trouver de l'aide](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_et_CSS#Trouver_de_l'aide) de l'article sur le HTML et le CSS pour des bonnes directions.

## Résumé

Espérons que cet article vous aura donné des bonnes connaissances concernant les problèmes principaux d'accessibilité que vous pourrez rencontrer, et comment les tester et les surmonter.

Dans le prochain article nous nous tournerons vers la fonctionnalité de détection dans plus de détail.

{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/JavaScript","Learn/Tools_and_testing/Cross_browser_testing/Feature_detection", "Learn/Tools_and_testing/Cross_browser_testing")}}
