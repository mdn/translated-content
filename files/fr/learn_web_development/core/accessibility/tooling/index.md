---
title: Outils d'accessibilité et technologies d'assistance
short-title: Outils d'accessibilité
slug: Learn_web_development/Core/Accessibility/Tooling
l10n:
  sourceCommit: df5c06337227656e53af3dfb5b544c1c1cd0e6c7
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/What_is_accessibility","Learn_web_development/Core/Accessibility/HTML", "Learn_web_development/Core/Accessibility")}}

Tournons maintenant notre attention vers l'accessibilité, les informations sur les problèmes communs, comment faire des tests simples, et comment faire pour utiliser les outils d'audit/automatisation pour trouver les problèmes d'accessibilités.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>Connaissance de base de <a href="/fr/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/fr/docs/Learn_web_development/Core/Styling_basics">CSS</a>, et une <a href="/fr/docs/Learn_web_development/Core/Accessibility/What_is_accessibility">compréhension des concepts fondamentaux de l'accessibilité</a>.</td>
    </tr>
    <tr>
      <th scope="row">Objectifs d'apprentissage&nbsp;:</th>
      <td>
        <ul>
          <li>Connaître les types d'outils que vous pouvez utiliser pour résoudre les problèmes d'accessibilité, par exemple les outils d'audit.</li>
          <li>Savoir configurer des lecteurs d'écran et les utiliser pour tester des sites web sur ordinateur et mobile.</li>
          <li>Connaître d'autres types de technologies d'assistance comme les claviers braille ou à gros caractères, les dispositifs de pointage alternatifs et les loupes d'écran.</li>
          <li>Comprendre l'importance des tests utilisateurs en complément des tests automatisés.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Outils d'accessibilité

Voyons quels outils et techniques vous pouvez utiliser pour tester l'accessibilité d'un site web et corriger les problèmes identifiés.

### Tester l'ordre des éléments dans le code source

Votre contenu doit avoir un sens logique dans l'ordre du code source — vous pouvez toujours l'afficher différemment avec du CSS par la suite, mais il est important d'avoir une structure sous-jacente correcte dès le départ. En effet, les technologies d'assistance lisent le contenu d'un site selon l'ordre du code source, et les personnes en situation de handicap modifient ou désactivent souvent une partie du CSS pour rendre le contenu plus lisible (par exemple en augmentant la taille de la police ou en appliquant des contrastes élevés).

Pour tester l'ordre du code source, vous pouvez désactiver le CSS d'un site et voir à quel point il reste compréhensible sans. Vous pouvez le faire manuellement en retirant le CSS de votre code, mais le plus simple est d'utiliser les fonctionnalités du navigateur, par exemple&nbsp;:

- Firefox&nbsp;: Sélectionnez _Affichage > Style de la page > Aucun style_ dans le menu principal.
- Safari&nbsp;: [Ouvrez les outils de développement du navigateur](/fr/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools#comment_ouvrir_les_outils_de_développement_du_navigateur), cliquez sur le bouton _Paramètres de l'appareil_ en haut à gauche du panneau des outils (ressemble à un écran d'ordinateur), puis cochez la case "Désactiver le CSS" dans le panneau qui apparaît.
- Chrome/Edge&nbsp;: Installez l'extension [Web Developer Toolbar <sup>(angl.)</sup>](https://chromewebstore.google.com/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm), puis redémarrez le navigateur. Cliquez sur l'icône engrenage "Web Developer" qui devrait maintenant apparaître dans votre menu d'extensions, puis sélectionnez _CSS > Désactiver tous les styles_.

### Outils de vérification du contraste des couleurs

Lorsque vous choisissez une palette de couleurs pour votre site web, vous devez vous assurer que la couleur du texte (premier plan) contraste suffisamment avec la couleur d'arrière-plan. Votre design peut être attrayant, mais il ne sert à rien si les gens ne peuvent pas lire votre contenu. Utilisez un outil comme le [Color Contrast Checker <sup>(angl.)</sup>](https://webaim.org/resources/contrastchecker/) de WebAIM pour vérifier si votre palette offre un contraste suffisant.

Un autre conseil&nbsp;: évitez d'utiliser uniquement la couleur pour signaler ou mettre en avant une information importante, car cela pourrait passer inaperçu pour les personnes ayant des troubles visuels comme le daltonisme. Par exemple, au lieu de marquer les champs obligatoires d'un formulaire uniquement en rouge, marquez-les avec un astérisque et en rouge.

> [!NOTE]
> Un ratio de contraste élevé permettra également à toute personne utilisant un smartphone ou une tablette avec un écran brillant de mieux lire les pages dans un environnement lumineux, comme en plein soleil.

### Outils d'audit

Il existe plusieurs outils d'audit auxquels vous pouvez soumettre vos pages web. Ils les analysent et retournent une liste de problèmes d'accessibilité présents sur la page. Prenons [Wave <sup>(angl.)</sup>](https://wave.webaim.org/) comme exemple, un outil de test d'accessibilité en ligne qui accepte une adresse web et retourne une vue annotée de la page avec les problèmes d'accessibilité mis en évidence.

1. Rendez-vous sur la [page d'accueil de Wave <sup>(angl.)</sup>](https://wave.webaim.org/).
2. Saisissez l'URL de notre exemple [bad-form.html](https://mdn.github.io/learning-area/accessibility/html/bad-form.html) dans le champ de saisie en haut de la page. Appuyez ensuite sur Entrée ou cliquez/touchez la flèche à l'extrémité droite du champ.
3. Le site mettra en évidence les problèmes d'accessibilité présents. Cliquez sur les icônes affichées pour obtenir plus d'informations sur chaque problème identifié par l'évaluation de Wave.

Parmi les autres outils d'audit à découvrir&nbsp;:

- [Inspecteur d'accessibilité de Firefox <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html)
- [Bookmarklet ANDI <sup>(angl.)</sup>](https://www.ssa.gov/accessibility/andi/help/install.html)
- [Audit d'accessibilité Google Lighthouse <sup>(angl.)</sup>](https://developer.chrome.com/docs/lighthouse/accessibility/scoring)

> [!NOTE]
> Ces outils ne suffisent pas à eux seuls pour résoudre tous vos problèmes d'accessibilité. Il vous faudra une combinaison de ces outils, de connaissances, d'expérience, de tests utilisateurs, etc. pour avoir une vision complète.

[L'outil aXe de Deque <sup>(angl.)</sup>](https://www.deque.com/axe/) va un peu plus loin que les outils d'audit mentionnés ci-dessus. Comme les autres, il vérifie les pages et retourne des erreurs d'accessibilité. Sa forme la plus immédiatement utile est probablement l'extension pour navigateur&nbsp;:

- [aXe pour Chrome <sup>(angl.)</sup>](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd)
- [aXe pour Firefox <sup>(angl.)</sup>](https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/)

Celles-ci ajoutent un onglet d'accessibilité aux outils de développement du navigateur. Par exemple, nous avons installé la version Firefox, puis l'avons utilisée pour auditer notre exemple [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html). Nous avons obtenu les résultats suivants&nbsp;:

![Capture d'écran des problèmes d'accessibilité identifiés par l'outil Axe.](axe-screenshot.png)

aXe est aussi installable via `npm`, et peut être intégré à des outils d'automatisation comme [Grunt <sup>(angl.)</sup>](https://gruntjs.com/) et [Gulp <sup>(angl.)</sup>](https://gulpjs.com/), des frameworks d'automatisation comme [Selenium <sup>(angl.)</sup>](https://www.selenium.dev/) et [Cucumber <sup>(angl.)</sup>](https://cucumber.io/), des frameworks de tests unitaires comme [Jasmine <sup>(angl.)</sup>](https://jasmine.github.io/), et bien d'autres (voir la [page principale de aXe <sup>(angl.)</sup>](https://www.deque.com/axe/) pour plus de détails).

## Lecteurs d'écran

L'une des technologies d'assistance les plus courantes utilisées par les personnes en situation de handicap — et l'un des outils que vous utiliserez le plus pour tester l'accessibilité de vos pages web — est le **lecteur d'écran**. Il s'agit de logiciels qui lisent à voix haute le contenu d'une page web ou d'autres applications installées sur le système d'exploitation d'une personne. Les lecteurs d'écran permettent d'utiliser un ordinateur sans avoir à voir le contenu visuel.

Les navigateurs web exposent des informations sur le contenu de la page pour les lecteurs d'écran (et autres technologies d'assistance) via une représentation appelée {{Glossary("Accessibility tree", "arbre d'accessibilité")}}. Celui-ci fournit des informations sémantiques telles que les noms et descriptions des éléments, leur rôle ou fonction (est-ce un bouton, un champ de saisie&nbsp;?), et leur état (par exemple, une boîte de dialogue est-elle ouverte ou fermée&nbsp;?).

Ces informations sont parfois triviales dans le cas d'un simple paragraphe de texte, mais deviennent complexes pour des éléments d'interface comme un menu déroulant ou un lecteur vidéo. C'est pourquoi il est très important d'utiliser correctement le HTML sémantique, ce que vous verrez en détail dans l'article suivant de ce module. Si vous balisez le contenu avec le mauvais élément, cela peut perturber les utilisateurs de lecteurs d'écran.

Assurez-vous d'avoir un ou deux lecteurs d'écran installés sur votre machine de développement, et essayez d'utiliser vos sites préférés avec un lecteur d'écran, comme expliqué ci-dessous. Comprendre comment les personnes malvoyantes utilisent le web est essentiel pour concevoir des produits qui fonctionnent mieux pour tout le monde.

### Quels lecteurs d'écran sont disponibles ?

Il existe plusieurs lecteurs d'écran&nbsp;:

- Certains sont des produits commerciaux payants, comme [JAWS <sup>(angl.)</sup>](https://www.freedomscientific.com/Products/software/JAWS/) (Windows).
- Certains sont gratuits, comme [NVDA <sup>(angl.)</sup>](https://www.nvaccess.org/) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (Chrome, Windows et macOS), et [Orca <sup>(angl.)</sup>](https://wiki.gnome.org/Projects/Orca) (Linux).
- Certains sont intégrés au système d'exploitation, comme [VoiceOver](https://www.apple.com/fr/accessibility/features/?vision) (macOS et iOS), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (sur Chromebook), et [TalkBack](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback) (Android).

En général, les lecteurs d'écran sont des applications distinctes qui s'exécutent sur le système d'exploitation hôte et peuvent lire les pages web ainsi que le contenu d'autres applications (ce n'est pas toujours le cas&nbsp;; ChromeVox, par exemple, est une extension de navigateur). Les lecteurs d'écran peuvent présenter des différences de comportement et de commandes, il vous faudra donc consulter la documentation de celui que vous choisissez pour obtenir tous les détails. Cela dit, ils fonctionnent toutes et tous fondamentalement de la même manière.

Dans les prochaines sections, nous allons effectuer quelques tests avec différents lecteurs d'écran pour vous donner une idée générale de leur fonctionnement et de la façon de les tester.

> [!NOTE]
> [Concevoir pour la compatibilité avec les lecteurs d'écran <sup>(angl.)</sup>](https://webaim.org/techniques/screenreader/) de WebAIM fournit des informations utiles sur l'utilisation des lecteurs d'écran et ce qui fonctionne le mieux avec eux. Voir aussi les [résultats de l'enquête Screen Reader User Survey #10 <sup>(angl.)</sup>](https://webaim.org/projects/screenreadersurvey10/#used) pour des statistiques intéressantes sur l'utilisation des lecteurs d'écran.

#### VoiceOver

VoiceOver (VO) est fourni gratuitement avec les appareils Apple mac/iPhone/iPad, ce qui le rend utile pour tester sur ordinateur ou mobile si vous utilisez des produits Apple. Nous l'avons testé sur macOS sur un MacBook Pro.

Pour l'activer, appuyez sur <kbd>Cmd</kbd> + <kbd>F5</kbd>. Si vous n'avez jamais utilisé VO auparavant, un écran de bienvenue s'affichera pour vous permettre de choisir de démarrer VO ou non, et de suivre un tutoriel très utile pour apprendre à l'utiliser. Pour le désactiver, appuyez à nouveau sur <kbd>Cmd</kbd> + <kbd>F5</kbd>.

> [!NOTE]
> Vous devriez suivre le tutoriel au moins une fois — c'est un excellent moyen d'apprendre à utiliser VO.

Lorsque VO est activé, l'affichage reste globalement le même, mais une boîte noire apparaît en bas à gauche de l'écran, contenant des informations sur l'élément actuellement sélectionné par VO. La sélection courante est également mise en évidence par un contour noir — ce surlignage est appelé le **curseur VO**.

![Capture d'écran illustrant un test d'accessibilité avec VoiceOver sur la page d'accueil MDN. En bas à gauche, un encadré met en avant l'information sélectionnée sur la page.](voiceover.png)

Pour utiliser VO, vous utiliserez beaucoup le «&nbsp;modificateur VO&nbsp;» — il s'agit d'une touche ou d'une combinaison de touches à presser en plus des raccourcis VO pour qu'ils fonctionnent. L'utilisation d'un modificateur est courante avec les lecteurs d'écran, afin d'éviter les conflits de commandes. Pour VO, le modificateur peut être <kbd>CapsLock</kbd> ou <kbd>Ctrl</kbd> + <kbd>Option</kbd>.

VO dispose de nombreux raccourcis clavier, que nous ne listerons pas tous ici. Les principaux pour tester des pages web figurent dans le tableau suivant. Dans les raccourcis, «&nbsp;VO&nbsp;» désigne le modificateur VoiceOver.

<table class="standard-table no-markdown">
  <caption>
    Raccourcis clavier VoiceOver les plus courants
  </caption>
  <thead>
    <tr>
      <th scope="col">Raccourci clavier</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>VO + flèches directionnelles</td>
      <td>Déplacer le curseur VO vers le haut, la droite, le bas, la gauche.</td>
    </tr>
    <tr>
      <td>VO + Espace</td>
      <td>Sélectionner/activer les éléments surlignés par le curseur VO. Cela inclut les éléments sélectionnés dans le Rotor (voir ci-dessous).</td>
    </tr>
    <tr>
      <td>VO + <kbd>Maj</kbd> + flèche vers le bas</td>
      <td>Entrer dans un groupe d'éléments comme un tableau HTML ou un formulaire. Une fois dans le groupe, vous pouvez naviguer et sélectionner les éléments à l'intérieur avec les commandes ci-dessus.</td>
    </tr>
    <tr>
      <td>VO + <kbd>Maj</kbd> + flèche vers le haut</td>
      <td>Sortir d'un groupe.</td>
    </tr>
    <tr>
      <td>VO + <kbd>C</kbd></td>
      <td>(dans un tableau) Lire l'en-tête de la colonne courante.</td>
    </tr>
    <tr>
      <td>VO + <kbd>R</kbd></td>
      <td>(dans un tableau) Lire l'en-tête de la ligne courante.</td>
    </tr>
    <tr>
      <td>VO + <kbd>C</kbd> + <kbd>C</kbd> (deux fois C)</td>
      <td>(dans un tableau) Lire toute la colonne courante, y compris l'en-tête.</td>
    </tr>
    <tr>
      <td>VO + <kbd>R</kbd> + <kbd>R</kbd> (deux fois R)</td>
      <td>(dans un tableau) Lire toute la ligne courante, y compris les en-têtes associés à chaque cellule.</td>
    </tr>
    <tr>
      <td>VO + flèche gauche, VO + flèche droite</td>
      <td>(dans certaines options horizontales, comme un sélecteur de date) Se déplacer entre les options.</td>
    </tr>
    <tr>
      <td>VO + flèche haut, VO + flèche bas</td>
      <td>(dans certaines options horizontales, comme un sélecteur de date) Changer l'option courante.</td>
    </tr>
    <tr>
      <td>VO + <kbd>U</kbd></td>
      <td>Ouvrir le Rotor, qui affiche des listes de titres, liens, contrôles de formulaire, etc. pour une navigation facilitée.</td>
    </tr>
    <tr>
      <td>VO + flèche gauche, VO + flèche droite</td>
      <td>(dans le Rotor) Passer d'une liste à l'autre dans le Rotor.</td>
    </tr>
    <tr>
      <td>VO + flèche haut, VO + flèche bas</td>
      <td>(dans le Rotor) Se déplacer entre les éléments de la liste courante du Rotor.</td>
    </tr>
    <tr>
      <td><kbd>Échap</kbd></td>
      <td>(dans le Rotor) Quitter le Rotor.</td>
    </tr>
    <tr>
      <td><kbd>Ctrl</kbd></td>
      <td>(lorsque VO parle) Mettre en pause/reprendre la lecture.</td>
    </tr>
    <tr>
      <td>VO + <kbd>Z</kbd></td>
      <td>Répéter la dernière portion lue.</td>
    </tr>
    <tr>
      <td>VO + <kbd>D</kbd></td>
      <td>Aller dans le Dock du Mac pour sélectionner des applications à lancer.</td>
    </tr>
  </tbody>
</table>

Cela peut sembler beaucoup de commandes, mais ce n'est pas si compliqué une fois que vous avez pris l'habitude, et VO vous rappelle régulièrement quelles commandes utiliser selon le contexte. Essayez VO maintenant&nbsp;; vous pourrez ensuite tester certains de nos exemples dans la section [Tests avec un lecteur d'écran](#tests_avec_un_lecteur_décran).

#### NVDA

NVDA est uniquement disponible sous Windows, et vous devrez l'installer.

1. Téléchargez NVDA depuis [nvaccess.org <sup>(angl.)</sup>](https://www.nvaccess.org/), puis installez-le. Vous pouvez choisir de faire un don ou de le télécharger gratuitement&nbsp;; il vous faudra aussi fournir votre adresse e-mail avant de pouvoir le télécharger.
2. Pour démarrer NVDA une fois installé, double-cliquez sur le fichier ou le raccourci du programme, ou utilisez le raccourci clavier <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>N</kbd>. Vous verrez la boîte de dialogue de bienvenue de NVDA au démarrage. Vous pourrez choisir quelques options, puis appuyer sur le bouton _OK_ pour commencer.

NVDA sera alors actif sur votre ordinateur.

Pour utiliser NVDA, vous utiliserez beaucoup le «&nbsp;modificateur NVDA&nbsp;» — la touche à presser en plus des raccourcis clavier NVDA pour qu'ils fonctionnent. Le modificateur NVDA peut être <kbd>Insert</kbd> (par défaut), ou <kbd>CapsLock</kbd> (peut être choisi en cochant la première case dans la boîte de dialogue de bienvenue avant d'appuyer sur _OK_).

> [!NOTE]
> NVDA est plus subtil que VoiceOver dans la façon dont il met en évidence où il se trouve et ce qu'il fait. Lorsque vous parcourez les titres, listes, etc., les éléments sélectionnés sont généralement entourés d'un contour discret, mais ce n'est pas toujours le cas pour tout. Si vous êtes complètement perdu·e, vous pouvez appuyer sur Ctrl + F5 pour actualiser la page et recommencer depuis le début.

NVDA dispose de nombreux raccourcis clavier, que nous ne listerons pas tous ici. Les principaux pour tester des pages web figurent dans le tableau suivant. Dans les raccourcis, «&nbsp;NVDA&nbsp;» désigne le modificateur NVDA.

<table class="standard-table no-markdown">
  <caption>
    Raccourcis clavier NVDA les plus courants
  </caption>
  <thead>
    <tr>
      <th scope="col">Raccourci clavier</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>NVDA + <kbd>Q</kbd></td>
      <td>Désactiver NVDA après l'avoir lancé.</td>
    </tr>
    <tr>
      <td>NVDA + flèche vers le haut</td>
      <td>Lire la ligne courante.</td>
    </tr>
    <tr>
      <td>NVDA + flèche vers le bas</td>
      <td>Commencer la lecture à la position actuelle.</td>
    </tr>
    <tr>
      <td>Flèche vers le haut et flèche vers le bas, ou <kbd>Maj</kbd> + <kbd>Tab</kbd> et <kbd>Tab</kbd></td>
      <td>Aller à l'élément précédent/suivant de la page et le lire.</td>
    </tr>
    <tr>
      <td>Flèche vers la gauche et flèche vers la droite</td>
      <td>Aller au caractère précédent/suivant de l'élément courant et le lire.</td>
    </tr>
    <tr>
      <td><kbd>Maj</kbd> + <kbd>H</kbd> et <kbd>H</kbd></td>
      <td>Aller au titre précédent/suivant et le lire.</td>
    </tr>
    <tr>
      <td><kbd>Maj</kbd> + <kbd>K</kbd> et <kbd>K</kbd></td>
      <td>Aller au lien précédent/suivant et le lire.</td>
    </tr>
    <tr>
      <td><kbd>Maj</kbd> + <kbd>D</kbd> et <kbd>D</kbd></td>
      <td>Aller à la zone de repère précédente/suivante (ex.&nbsp;: <code>&lt;nav&gt;</code>) et la lire.</td>
    </tr>
    <tr>
      <td><kbd>Maj</kbd> + <kbd>1</kbd>-<kbd>6</kbd> et <kbd>1</kbd>-<kbd>6</kbd></td>
      <td>Aller au titre précédent/suivant (niveau 1 à 6) et le lire.</td>
    </tr>
    <tr>
      <td><kbd>Maj</kbd> + <kbd>F</kbd> et <kbd>F</kbd></td>
      <td>Aller au champ de formulaire précédent/suivant et y placer le focus.</td>
    </tr>
    <tr>
      <td><kbd>Maj</kbd> + <kbd>T</kbd> et <kbd>T</kbd></td>
      <td>Aller au tableau de données précédent/suivant et y placer le focus.</td>
    </tr>
    <tr>
      <td><kbd>Maj</kbd> + <kbd>B</kbd> et <kbd>B</kbd></td>
      <td>Aller au bouton précédent/suivant et lire son libellé.</td>
    </tr>
    <tr>
      <td><kbd>Maj</kbd> + <kbd>L</kbd> et <kbd>L</kbd></td>
      <td>Aller à la liste précédente/suivante et lire son premier élément.</td>
    </tr>
    <tr>
      <td><kbd>Maj</kbd> + <kbd>I</kbd> et <kbd>I</kbd></td>
      <td>Aller à l'élément de liste précédent/suivant et le lire.</td>
    </tr>
    <tr>
      <td><kbd>Entrée</kbd></td>
      <td>(lorsqu'un lien, bouton ou autre élément activable est sélectionné) Activer l'élément.</td>
    </tr>
    <tr>
      <td>NVDA + <kbd>Espace</kbd></td>
      <td>(lorsqu'un formulaire est sélectionné) Entrer dans le formulaire pour sélectionner les éléments individuellement, ou quitter le formulaire si vous y êtes déjà.</td>
    </tr>
    <tr>
      <td><kbd>Maj</kbd> + <kbd>Tab</kbd> et <kbd>Tab</kbd></td>
      <td>(dans un formulaire) Passer d'un champ à l'autre.</td>
    </tr>
    <tr>
      <td>Flèche vers le haut et flèche vers le bas</td>
      <td>(dans un formulaire) Modifier la valeur des champs (par exemple dans une liste déroulante).</td>
    </tr>
    <tr>
      <td><kbd>Espace</kbd></td>
      <td>(dans un formulaire) Sélectionner la valeur choisie.</td>
    </tr>
    <tr>
      <td><kbd>Ctrl</kbd> + <kbd>Alt</kbd> + flèches</td>
      <td>(lorsqu'un tableau est sélectionné) Se déplacer entre les cellules du tableau.</td>
    </tr>
  </tbody>
</table>

### Tests avec un lecteur d'écran

Maintenant que vous vous êtes familiarisé·e avec l'utilisation d'un lecteur d'écran, nous vous proposons de réaliser quelques tests rapides d'accessibilité pour comprendre comment les lecteurs d'écran gèrent les bonnes et mauvaises pratiques sur les pages web&nbsp;:

- Consultez [good-semantics.html](https://mdn.github.io/learning-area/accessibility/html/good-semantics.html) et observez comment les titres sont détectés par le lecteur d'écran et utilisables pour la navigation. Comparez avec [bad-semantics.html](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html), le lecteur d'écran n'obtient aucune de ces informations. Imaginez la difficulté à naviguer dans une très longue page de texte.
- Consultez [good-links.html](https://mdn.github.io/learning-area/accessibility/html/good-links.html) et notez que les liens ont du sens hors contexte, par exemple dans le Rotor de VoiceOver. Ce n'est pas le cas dans [bad-links.html](https://mdn.github.io/learning-area/accessibility/html/bad-links.html) — ils sont tous simplement «&nbsp;cliquez ici&nbsp;».
- Consultez [good-form.html](https://mdn.github.io/learning-area/accessibility/html/good-form.html) et notez que les champs de formulaire sont décrits grâce à leurs libellés, car nous avons ajouté les éléments HTML {{HTMLElement("label")}} appropriés. Dans [bad-form.html](https://mdn.github.io/learning-area/accessibility/html/bad-form.html), ils reçoivent un libellé peu utile du type «&nbsp;vide&nbsp;».
- Consultez notre exemple [punk-bands-complete.html](https://mdn.github.io/learning-area/css/styling-boxes/styling-tables/punk-bands-complete.html) et voyez comment le lecteur d'écran peut associer colonnes et lignes et tout lire correctement, car les en-têtes de tableau sont bien définis. Dans [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html), aucune cellule ne peut être associée. Notez que NVDA se comporte parfois étrangement lorsqu'il n'y a qu'un seul tableau sur la page&nbsp;; vous pouvez essayer [la page de test de table de WebAIM <sup>(angl.)</sup>](https://webaim.org/articles/nvda/tables.htm) à la place.
- Consultez [WAI-ARIA live regions example <sup>(angl.)</sup>](https://www.freedomscientific.com/SurfsUp/AriaLiveRegions.htm) et notez que le lecteur d'écran continuera à lire la section qui se met à jour en temps réel.

## Autres outils d'assistance

Les lecteurs d'écran sont l'un des types de technologies d'assistance les plus courants que vous rencontrerez en tant que développeur·euse web, mais il existe d'autres types de <abbr>TA</abbr>, et il est utile de connaître ce que les utilisateur·ice·s peuvent utiliser pour accéder à votre contenu. Cette section en résume quelques-uns.

### Claviers gros caractères ou braille

Il est possible d'obtenir des claviers à gros caractères conçus pour les personnes malvoyantes ou âgées, et des claviers braille conçus pour être utilisables par des personnes aveugles ou très malvoyantes.

### Dispositifs de pointage alternatifs

Quand vous pensez aux dispositifs de pointage, la souris est l'exemple évident, mais il existe d'autres dispositifs conçus pour permettre aux personnes ayant des troubles de la motricité de naviguer plus facilement dans les interfaces&nbsp;:

- Boules de commande&nbsp;: Un peu comme des souris à l'envers, les boules de commande sont constituées d'une boule montée qui reste fixe sur le bureau et que vous pouvez faire rouler pour déplacer le pointeur. Elles sont considérées comme plus précises et plus faciles à manipuler que les souris, surtout pour les personnes ayant une mobilité réduite des mains.
- Joysticks&nbsp;: Un manche de commande qui peut être déplacé pour déplacer le pointeur. Les joysticks sont moins précis que les boules de commande mais utilisables par des personnes ayant un large éventail de handicaps physiques, même sévères.
- Pavés tactiles&nbsp;: La plupart des ordinateurs portables modernes disposent d'un pavé tactile (parfois appelé trackpad) — un capteur tactile plat permettant de déplacer le pointeur avec un doigt, ainsi que d'effectuer des gestes multi-doigts comme sur mobile. Vous pouvez acheter des pavés tactiles externes pour les appareils qui n'en ont pas en interne. Certaines personnes les trouvent plus précis que les souris.

### Loupes d'écran

Les loupes d'écran offrent aux utilisateur·ice·s malvoyant·e·s une vue agrandie de l'affichage de leur appareil pour leur permettre de mieux comprendre et interagir avec le contenu, ainsi que d'autres fonctionnalités comme l'ajustement des couleurs pour aider en cas de daltonisme, et l'ajustement de la taille du pointeur de la souris et du curseur texte pour les rendre plus visibles.

Il existe des loupes d'écran logicielles et matérielles&nbsp;:

- La plupart des systèmes d'exploitation modernes disposent d'une application intégrée pour agrandir tout ou partie de l'écran, par exemple Zoom sur Mac ou Loupe sur Windows. Ils proposent aussi généralement des options pour augmenter universellement la taille du texte, du pointeur, etc. Des options tierces existent également.
- Les loupes matérielles consistent généralement en un écran séparé qui se place à côté ou devant l'écran de votre appareil et projette une version agrandie ou zoomée d'une partie de celui-ci.

### Logiciels de reconnaissance vocale

Les logiciels de reconnaissance vocale permettent de dicter des commandes pour contrôler votre appareil et/ou de dicter le texte d'e-mails ou de documents pour que l'ordinateur l'écrive à votre place. C'est très utile pour les personnes qui ne peuvent pas utiliser de clavier ou d'autres dispositifs de contrôle.

Les systèmes d'exploitation modernes intègrent des fonctionnalités pour cela (par exemple Dictée sur Mac, ou Accès vocal sur Windows), et il existe aussi des applications tierces, des applications de bureau aux extensions de navigateur.

### Contrôles à bascule

Les contrôles à bascule offrent un moyen d'interagir avec les appareils pour les personnes ayant une mobilité très réduite ou une [déficience cognitive](/fr/docs/Web/Accessibility/Guides/Cognitive_accessibility).

Une configuration de contrôle à bascule comprend généralement deux parties&nbsp;:

- Un contrôle à bascule ou bouton physique pour activer des options sur l'appareil. Vous pouvez aussi attribuer la fonction de contrôle à bascule à des boutons existants de l'appareil (comme les boutons de volume) ou à des touches du clavier.
- Un mode de l'appareil ou un logiciel tiers qui rend l'appareil compatible avec le contrôle à bascule ou bouton. Par exemple, Switch Access sur Android est un mode dans lequel les différentes options (par exemple, les applications sur l'écran d'accueil) sont parcourues, et celle que vous souhaitez peut être sélectionnée avec un bouton ou un contrôle à bascule lorsqu'elle est atteinte.

## Planification de l'accessibilité

Vous devez réfléchir attentivement à l'accessibilité dès le début de chaque projet. Assurez-vous que l'accessibilité est prise en compte lors de la phase de conception initiale, afin de pouvoir&nbsp;:

- Poser les bases correctement, par exemple en utilisant une [structure de document correcte](/fr/docs/Learn_web_development/Core/Accessibility/HTML#utiliser_une_structure_de_document_correcte) et en fournissant des [textes alternatifs](/fr/docs/Learn_web_development/Core/Accessibility/HTML#alternatives_textuelles) pour les images.
- Réfléchir soigneusement à la meilleure approche pour les fonctionnalités susceptibles de poser des problèmes d'accessibilité. Par exemple, l'audio et la vidéo seront forcément inaccessibles à certaines personnes, il convient donc de fournir des alternatives comme des [transcriptions](/fr/docs/Learn_web_development/Core/Accessibility/Multimedia#transcriptions_audio) et des [pistes de texte](/fr/docs/Learn_web_development/Core/Accessibility/Multimedia#pistes_de_texte).
- Éviter des erreurs coûteuses plus tard. Les problèmes découverts en fin de projet sont généralement beaucoup plus longs et coûteux à corriger que ceux détectés en amont.

## Tests utilisateur·ice·s

Vous ne pouvez pas vous fier uniquement aux outils automatisés pour identifier les problèmes d'accessibilité sur votre site. Chaque projet web doit avoir une [stratégie de tests utilisateur·ice·s](/fr/docs/Learn_web_development/Extensions/Testing/Testing_strategies#les_tests_utilisateur·ice·s), et il est fortement recommandé d'inclure des groupes d'utilisateur·ice·s concerné·e·s par l'accessibilité&nbsp;:

- Essayez d'impliquer des utilisateur·ice·s de lecteurs d'écran, des personnes n'utilisant que le clavier, des personnes sourdes, des personnes à mobilité réduite, etc.
- Demandez à chaque groupe d'utiliser le site de façon générale, en commençant par la page d'accueil et d'autres pages principales, et en essayant certaines des fonctionnalités principales. Exemples typiques&nbsp;: acheter un produit ou effectuer une réservation. Demandez-leur quelles ont été leurs impressions et quels problèmes ils·elles ont rencontrés.
- Ensuite, faites-les se concentrer sur les fonctionnalités ou parcours pour lesquels vous avez des doutes spécifiques en matière d'accessibilité, comme des contrôles de formulaire complexes ou des lecteurs vidéo. Demandez-leur ce qui leur manque en termes d'expérience utilisateur·ice et ce qu'ils·elles aimeraient voir amélioré.

Certains projets disposent d'un budget pour rémunérer les groupes de test, d'autres font appel à des bénévoles ou à des collègues et ami·e·s.

## Liste de vérification des tests d'accessibilité

La liste suivante vous permet de vérifier que vous avez bien effectué les tests d'accessibilité recommandés pour votre projet&nbsp;:

1. Vérifiez que votre HTML est aussi sémantique que possible. [Le valider](/fr/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML#validation_dun_html) est un bon début, tout comme l'utilisation d'un [outil d'audit](#outils_daudit).
2. Vérifiez que votre contenu reste compréhensible lorsque le CSS est désactivé.
3. Vérifiez que votre site est accessible au clavier (voir [Utiliser des commandes d'interface sémantiques si possible](/fr/docs/Learn_web_development/Core/Accessibility/HTML#utiliser_des_commandes_dinterface_sémantiques_si_possible) pour plus de détails). Testez avec Tab, Entrée, etc.
4. Vérifiez que vos contenus non textuels disposent de [textes alternatifs](/fr/docs/Learn_web_development/Core/Accessibility/HTML#alternatives_textuelles). Un [outil d'audit](#outils_daudit) permet de repérer ce type de problème.
5. Vérifiez que le [contraste des couleurs](/fr/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#couleur_et_contraste_de_couleur) de votre site est suffisant, à l'aide d'un outil adapté.
6. Vérifiez que les [contenus masqués](/fr/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#cacher_des_choses) sont bien accessibles aux lecteurs d'écran.
7. Vérifiez que les fonctionnalités sont utilisables sans JavaScript autant que possible.
8. Utilisez ARIA pour améliorer l'accessibilité lorsque c'est pertinent.
9. Passez votre site dans un [outil d'audit](#outils_daudit).
10. Testez-le avec un lecteur d'écran.
11. Ajoutez une politique ou déclaration d'accessibilité, accessible sur votre site, pour expliquer ce que vous avez mis en place.

## Résumé

Nous espérons que cet article vous a donné un aperçu des outils à votre disposition pour corriger les problèmes d'accessibilité, ainsi que des technologies d'assistance utilisées par les personnes en situation de handicap pour accéder au web.

Dans l'article suivant, nous verrons comment écrire du HTML accessible.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/What_is_accessibility","Learn_web_development/Core/Accessibility/HTML", "Learn_web_development/Core/Accessibility")}}
