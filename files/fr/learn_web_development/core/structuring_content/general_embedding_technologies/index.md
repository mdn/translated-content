---
title: Des objets aux cadres intégrés — les technologies d'intégration
short-title: Technologies d'intégration
slug: Learn_web_development/Core/Structuring_content/General_embedding_technologies
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

Les développeur·euse·s pensent généralement à intégrer des médias tels que des images, des vidéos et de l'audio dans des pages web. Dans cet article, nous faisons un pas de côté en examinant certains éléments qui permettent d'intégrer une grande variété de types de contenus dans vos pages web&nbsp;: les éléments {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} et {{HTMLElement("object")}}. Les `<iframe>` servent à intégrer d'autres pages web, et les deux autres permettent d'intégrer des ressources externes telles que des fichiers PDF.

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        <a
          href="/fr/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Logiciels de base installés</a
        >, connaissances de base sur
        <a
          href="/fr/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files"
          >la gestion des fichiers</a
        >, familiarité avec les <a href="/fr/docs/Learn_web_development/Core/Structuring_content"
          >fondamentaux du HTML</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif d'apprentissage&nbsp;:</th>
      <td>
        Apprendre à intégrer des éléments dans des pages web à l'aide de
        {{HTMLElement("object")}}, {{HTMLElement("embed")}} et
        {{HTMLElement("iframe")}}, comme des documents PDF et d'autres pages web.
      </td>
    </tr>
  </tbody>
</table>

## Brève histoire de l'intégration

Il y a longtemps sur le Web, il était courant d'utiliser des **cadres** (<i lang="en">frames</i> en anglais) pour créer des sites web — de petites parties d'un site web stockées dans des pages HTML individuelles. Celles-ci étaient intégrées dans un document principal appelé **<i lang="en">frameset</i>**, qui permettait de définir la zone de l'écran que chaque cadre occupait, un peu comme le dimensionnement des colonnes et des lignes d'un tableau. C'était considéré comme le summum de la modernité au milieu et à la fin des années 90, et il y avait des preuves que le fait de diviser une page web en petits morceaux comme cela était meilleur pour la vitesse de téléchargement — ce qui était particulièrement notable avec des connexions réseau très lentes à l'époque. Cependant, ces cadres présentaient de nombreux problèmes, qui l'emportaient largement sur les avantages à mesure que les vitesses de connexion augmentaient, si bien qu'on ne les utilise plus aujourd'hui.

Un peu plus tard (fin des années 90, début des années 2000), les technologies de plugin sont devenues très populaires, comme les {{Glossary("Java", "applet Java")}} et {{Glossary("Adobe_Flash", "Flash")}} — elles permettaient aux développeur·euse·s web d'intégrer du contenu enrichi dans les pages web, comme des vidéos et des animations, qui n'étaient tout simplement pas disponibles avec le HTML seul. L'intégration de ces technologies se faisait à l'aide d'éléments comme {{HTMLElement("object")}}, et le moins utilisé {{HTMLElement("embed")}}, et elles étaient très utiles à l'époque. Elles sont depuis tombées en désuétude en raison de nombreux problèmes, notamment l'accessibilité, la sécurité, la taille des fichiers, etc. Aujourd'hui, les principaux navigateurs ne prennent plus en charge les plugins comme Flash.

Enfin, l'élément {{HTMLElement("iframe")}} est apparu (ainsi que d'autres moyens d'intégrer du contenu, comme {{HTMLElement("canvas")}}, {{HTMLElement("video")}}, etc.) Cela permet d'intégrer un document web entier à l'intérieur d'un autre, comme s'il s'agissait d'un {{HTMLElement("img")}} ou d'un autre élément similaire, et il est régulièrement utilisé aujourd'hui.

Maintenant que la leçon d'histoire est terminée, passons à la pratique et voyons comment utiliser certains de ces éléments.

## S'exercer avec des usages classiques d'intégration

Dans cet article, nous allons plonger directement dans un exercice, afin de vous donner immédiatement une idée de l'utilité des technologies d'intégration. Le monde en ligne connaît bien [YouTube](https://www.youtube.com/), mais beaucoup de personnes ignorent certaines des fonctions de partage qu'il propose.

1. Tout d'abord, ouvrez le [Terrain d'essai MDN](/fr/play).
2. Nous allons maintenant examiner comment YouTube permet d'intégrer une vidéo dans n'importe quelle page à l'aide d'un {{HTMLElement("iframe")}}.
   1. Allez sur YouTube et trouvez une vidéo qui vous plaît.
   2. Sous la vidéo, vous trouverez un bouton _Partager_ — sélectionnez-le pour afficher les options de partage.
   3. Sélectionnez le bouton _Intégrer_ et un code `<iframe>` vous sera fourni — copiez-le.
   4. Collez-le dans le panneau _HTML_ du Terrain d'essai, puis regardez le résultat dans la sortie.
3. Pour aller plus loin, vous pouvez aussi essayer d'intégrer une [carte Google](https://www.google.com/maps/) dans le Terrain d'essai&nbsp;:
   1. Allez sur Google Maps et trouvez une carte qui vous plaît.
   2. Cliquez sur le «&nbsp;menu hamburger&nbsp;» (trois lignes horizontales) en haut à gauche de l'interface.
   3. Sélectionnez l'option _Partager ou intégrer la carte_.
   4. Sélectionnez l'option _Intégrer une carte_, qui vous donnera un code `<iframe>` — copiez-le.
   5. Collez-le dans le panneau _HTML_ du Terrain d'essai, puis regardez le résultat dans la sortie.

Si vous faites une erreur, vous pouvez toujours réinitialiser à l'aide du bouton _Réinitialiser_ dans le Terrain d'essai.

## Les `iframes` en détail

Alors, c'était facile et amusant, non&nbsp;? Les éléments {{HTMLElement("iframe")}} sont conçus pour vous permettre d'intégrer d'autres documents web dans le document courant. C'est idéal pour incorporer du contenu tiers sur votre site que vous ne contrôlez pas directement et que vous ne souhaitez pas avoir à développer vous-même — comme des vidéos de fournisseurs de vidéos en ligne, des systèmes de commentaires comme [Disqus <sup>(angl.)</sup>](https://disqus.com/), des cartes de fournisseurs de cartes en ligne, des bannières publicitaires, etc. Même les exemples éditables en direct que vous avez utilisés dans ce cours sont implémentés à l'aide de `<iframe>`.

Avant d'utiliser les éléments `<iframe>`, il existe quelques préoccupations de sécurité à connaître.
Supposons que vous vouliez inclure le glossaire MDN sur l'une de vos pages web à l'aide de l'élément {{HTMLElement("iframe")}}, vous pourriez essayer quelque chose comme l'exemple de code suivant.
Si vous ajoutiez le code ci-dessous dans l'une de vos pages, vous pourriez être surpris·e de voir un message d'erreur au lieu de la page du glossaire&nbsp;:

```html
<iframe
  src="https://developer.mozilla.org/fr/docs/Glossary"
  width="100%"
  height="500"
  allowfullscreen
  sandbox>
</iframe>
```

```css
iframe {
  border: none;
}
```

Si vous regardez la console de votre navigateur, vous verrez un message d'erreur semblable à celui-ci&nbsp;:

```plain
Refus d'afficher 'https://developer.mozilla.org/' dans un cadre car la directive 'X-Frame-Options' est définie sur 'deny'.
```

La section [Sécurité](#considérations_de_sécurité) ci-dessous explique plus en détail pourquoi vous voyez cette erreur, mais voyons d'abord ce que fait notre code.

L'exemple inclut le strict nécessaire pour utiliser un `<iframe>`&nbsp;:

- [`border: none`](/fr/docs/Web/CSS/Reference/Properties/border)
  - : Si utilisé, le `<iframe>` est affiché sans bordure. Sinon, par défaut, les navigateurs affichent le `<iframe>` avec une bordure (ce qui est généralement indésirable).
- [`allowfullscreen`](/fr/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen)
  - : Si activé, le `<iframe>` peut être affiché en plein écran à l'aide de [l'API Fullscreen](/fr/docs/Web/API/Fullscreen_API) (ceci dépasse le cadre de cet article).
- [`src`](/fr/docs/Web/HTML/Reference/Elements/iframe#src)
  - : Cet attribut, comme pour {{HTMLElement("video")}}/{{HTMLElement("img")}}, contient un chemin pointant vers l'URL du document à intégrer.
- [`width`](/fr/docs/Web/HTML/Reference/Elements/iframe#width) et [`height`](/fr/docs/Web/HTML/Reference/Elements/iframe#height)
  - : Ces attributs définissent la largeur et la hauteur que vous souhaitez pour le cadre intégré.
- [`sandbox`](/fr/docs/Web/HTML/Reference/Elements/iframe#sandbox)
  - : Cet attribut, qui fonctionne dans des navigateurs un peu plus récents que le reste des fonctionnalités `<iframe>` (par exemple, IE 10 et supérieur), demande des réglages de sécurité renforcés&nbsp;; nous en parlerons plus loin.

> [!NOTE]
> Pour améliorer la rapidité, il est conseillé de définir l'attribut `src` du cadre intégré avec JavaScript après le chargement du contenu principal. Cela rend votre page utilisable plus rapidement et diminue le temps de chargement officiel de la page (un indicateur important pour le {{Glossary("SEO")}}).

### Considérations de sécurité

Nous avons mentionné précédemment les préoccupations en matière de sécurité — examinons cela un peu plus en détail maintenant. Nous ne nous attendons pas à ce que vous compreniez parfaitement tout ce contenu dès la première lecture&nbsp;; nous voulons simplement vous sensibiliser à cette préoccupation et vous fournir une référence à consulter à mesure que vous gagnez en expérience et commencez à envisager l'utilisation des `<iframe>` dans vos expériences et travaux. De plus, il n'est pas nécessaire d'avoir peur et de ne pas utiliser les `<iframe>` — vous devez simplement être prudent. Lisez la suite...

Les créateur·ice·s de navigateurs et les développeur·euse·s web ont appris à leurs dépens que les cadres intégrés sont une cible courante (terme officiel&nbsp;: **vecteur d'attaque**) pour les personnes malveillantes sur le Web (souvent appelées **hackeur·euse·s**, ou plus précisément, **pirates informatiques**) qui cherchent à modifier votre page web de manière malveillante, ou à tromper les utilisateur·ice·s pour leur faire faire quelque chose qu'ils·elles ne veulent pas faire, comme révéler des informations sensibles telles que des noms d'utilisateur·ice et des mots de passe. Pour cette raison, les ingénieur·e·s des spécifications et les développeur·euse·s de navigateurs ont mis au point divers mécanismes de sécurité pour rendre les `<iframe>` plus sûrs, et il existe également de bonnes pratiques à prendre en compte — nous en aborderons certaines ci-dessous.

> [!NOTE]
> Le [détournement de clic](/fr/docs/Web/Security/Attacks/Clickjacking) est un type d'attaque courante utilisant les `<iframe>` où des pirates intègrent un `<iframe>` invisible dans votre document (ou intègrent votre document dans leur propre site malveillant) et l'utilisent pour capturer les interactions des utilisateur·ice·s. C'est un moyen courant de tromper les utilisateur·ice·s ou de voler des données sensibles.

Un petit exemple d'abord — essayez de charger l'exemple précédent que nous avons montré ci-dessus dans votre navigateur — vous pouvez [le trouver en direct sur GitHub <sup>(angl.)</sup>](https://mdn.github.io/learning-area/html/multimedia-and-embedding/other-embedding-technologies/iframe-detail.html) ([voir le code source <sup>(angl.)</sup>](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/other-embedding-technologies/iframe-detail.html) aussi.) Au lieu de la page que vous attendiez, vous verrez probablement un message du type «&nbsp;Je ne peux pas ouvrir cette page&nbsp;», et si vous regardez la _Console_ dans les [outils de développement du navigateur](/fr/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools), vous verrez un message indiquant pourquoi. Dans Firefox, vous verrez quelque chose comme _Le chargement de "https\://developer.mozilla.org/fr/docs/Glossary" dans un cadre est refusé par la directive "X-Frame-Options" définie sur "DENY"_. Cela est dû au fait que les développeur·euse·s qui ont construit le MDN ont inclus un paramètre sur le serveur qui sert les pages du site Web pour empêcher qu'elles soient intégrées dans des `<iframe>` (voir [Configurer les directives CSP](#configurer_les_directives_csp), ci-dessous.) Cela a du sens — une page entière de MDN n'a pas vraiment de sens à être intégrée dans d'autres pages à moins que vous ne vouliez faire quelque chose comme les intégrer sur votre site et les revendiquer comme les vôtres — ou tenter de voler des données par le [détournement de clic](/fr/docs/Web/Security/Attacks/Clickjacking), ce qui sont toutes deux de très mauvaises choses à faire. De plus, si tout le monde commençait à faire cela, toute la bande passante supplémentaire commencerait à coûter beaucoup d'argent à Mozilla.

#### N'intégrer que lorsque c'est nécessaire

Parfois, il est pertinent d'intégrer du contenu tiers — comme des vidéos YouTube ou des cartes — mais vous pouvez vous éviter bien des soucis en n'intégrant du contenu tiers que lorsque cela est vraiment nécessaire. Une bonne règle pour la sécurité web est&nbsp;: _«&nbsp;On n'est jamais trop prudent. Si vous l'avez créé, vérifiez-le quand même. Si quelqu'un d'autre l'a créé, considérez-le comme dangereux jusqu'à preuve du contraire.&nbsp;»_

En plus de la sécurité, vous devez également être attentif·ive aux questions de propriété intellectuelle. La plupart des contenus sont protégés par le droit d'auteur, hors ligne comme en ligne, même ceux auxquels vous ne vous attendez pas (par exemple, la plupart des images sur [Wikimedia Commons <sup>(angl.)</sup>](https://commons.wikimedia.org/wiki/Main_Page)). N'affichez jamais de contenu sur votre page web à moins d'en être propriétaire ou que les propriétaires vous aient donné une autorisation écrite et sans équivoque. Les sanctions pour violation du droit d'auteur sont sévères. Encore une fois, on n'est jamais trop prudent.

Si le contenu est sous licence, vous devez respecter les conditions de la licence. Par exemple, le contenu de MDN est [sous licence CC-BY-SA](/fr/docs/MDN/Writing_guidelines/Attrib_copyright_license#documentation). Cela signifie que vous devez [nous créditer correctement <sup>(angl.)</sup>](https://wiki.creativecommons.org/wiki/Best_practices_for_attribution) lorsque vous citez notre contenu, même si vous y apportez des modifications substantielles.

#### Utiliser HTTPS

{{Glossary("HTTPS")}} est la version chiffrée de {{Glossary("HTTP")}}. Vous devez servir vos sites web en utilisant HTTPS dès que possible&nbsp;:

1. HTTPS réduit le risque que le contenu distant ait été altéré pendant le transit.
2. HTTPS empêche le contenu intégré d'accéder au contenu de votre document parent, et inversement.

Activer HTTPS sur votre site nécessite l'installation d'un certificat de sécurité spécial. De nombreux hébergeurs proposent l'hébergement avec HTTPS activé sans que vous ayez besoin de faire la moindre configuration pour mettre en place un certificat. Mais si vous devez configurer vous-même la prise en charge de HTTPS pour votre site, [Let's Encrypt <sup>(angl.)</sup>](https://letsencrypt.org/) fournit des outils et des instructions que vous pouvez utiliser pour créer et installer automatiquement le certificat nécessaire — avec une prise en charge intégrée pour les serveurs web les plus utilisés, y compris le serveur web Apache, Nginx et d'autres. Les outils Let's Encrypt sont conçus pour rendre le processus aussi simple que possible, il n'y a donc vraiment aucune bonne raison d'éviter de les utiliser ou d'autres moyens disponibles pour activer HTTPS sur votre site.

> [!NOTE]
> [GitHub Pages](/fr/docs/Learn_web_development/Howto/Tools_and_setup/Using_GitHub_pages) permet de servir du contenu en HTTPS par défaut.
> Si vous utilisez un autre hébergeur, vous devez vérifier le support qu'il propose pour servir du contenu avec HTTPS.

#### Toujours utiliser l'attribut `sandbox`

Vous devez donner aux personnes malveillantes le moins de pouvoir possible pour faire de mauvaises choses sur votre site web, vous devez donc accorder au contenu intégré _uniquement les permissions nécessaires à son fonctionnement._ Bien entendu, cela s'applique aussi à votre propre contenu. Un conteneur pour du code, où il peut être utilisé de manière appropriée — ou pour des tests — mais qui ne peut pas nuire au reste du code (ni accidentellement ni de façon malveillante), est appelé une [sandbox](<https://en.wikipedia.org/wiki/Sandbox_(computer_security)>).

> Vous pouvez lire l'article de Frederik Braun [On the X-Frame-Options Security Header <sup>(angl.)</sup>](https://blog.mozilla.org/security/2013/12/12/on-the-x-frame-options-security-header/) pour plus d'informations sur ce sujet. Évidemment, une explication complète dépasse le cadre de cet article.

## Les éléments \<embed> et \<object>

Les éléments {{HTMLElement("embed")}} et {{HTMLElement("object")}} ont une fonction différente de {{HTMLElement("iframe")}} — ces éléments sont des outils d'intégration polyvalents pour intégrer du contenu externe, comme des PDF.

Cependant, il est peu probable que vous utilisiez beaucoup ces éléments. Si vous devez afficher des PDF, il est généralement préférable de faire un lien vers eux, plutôt que de les intégrer dans la page.

Historiquement, ces éléments ont aussi été utilisés pour intégrer du contenu géré par des {{Glossary("Plugin", "plugins")}} de navigateur comme {{Glossary("Adobe Flash")}}, mais cette technologie est désormais obsolète et n'est plus prise en charge par les navigateurs modernes.

Si vous devez intégrer du contenu de plugin, voici le minimum d'informations dont vous aurez besoin&nbsp;:

<table class="standard-table no-markdown">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">{{HTMLElement("embed")}}</th>
      <th scope="col">{{HTMLElement("object")}}</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{Glossary("URL")}} du contenu intégré</td>
      <td><a href="/fr/docs/Web/HTML/Reference/Elements/embed#src"><code>src</code></a></td>
      <td><a href="/fr/docs/Web/HTML/Reference/Elements/object#data"><code>data</code></a></td>
    </tr>
    <tr>
      <td>
        <em>Type </em>{{Glossary("MIME type", "de média")}} exact du contenu intégré
      </td>
      <td><a href="/fr/docs/Web/HTML/Reference/Elements/embed#type"><code>type</code></a></td>
      <td><a href="/fr/docs/Web/HTML/Reference/Elements/object#type"><code>type</code></a></td>
    </tr>
    <tr>
      <td>
        Hauteur et largeur (en pixels CSS) de la boîte contrôlée par le plugin
      </td>
      <td>
         <a href="/fr/docs/Web/HTML/Reference/Elements/embed#height"><code>height</code></a><br /><a href="/fr/docs/Web/HTML/Reference/Elements/embed#width"><code>width</code></a>
      </td>
      <td>
         <a href="/fr/docs/Web/HTML/Reference/Elements/object#height"><code>height</code></a><br /><a href="/fr/docs/Web/HTML/Reference/Elements/object#width"><code>width</code></a>
      </td>
    </tr>
    <tr>
      <td>Contenu HTML indépendant comme solution de repli pour une ressource indisponible</td>
      <td>Non pris en charge (<code>&#x3C;noembed></code> est obsolète)</td>
      <td>
        Inclus entre les balises ouvrante et fermante
        <code>&#x3C;object></code>
      </td>
    </tr>
  </tbody>
</table>

Regardons un exemple de `<object>` qui intègre un PDF dans une page (voir [l'exemple en direct <sup>(angl.)</sup>](https://mdn.github.io/learning-area/html/multimedia-and-embedding/other-embedding-technologies/object-pdf.html) et le [code source <sup>(angl.)</sup>](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/other-embedding-technologies/object-pdf.html))&nbsp;:

```html
<object data="mon-pdf.pdf" type="application/pdf" width="800" height="1200">
  <p>
    Vous n'avez pas de plugin PDF, mais vous pouvez
    <a href="mon-pdf.pdf">télécharger le fichier PDF.</a>
  </p>
</object>
```

Les PDF étaient une étape nécessaire entre le papier et le numérique, mais ils posent de nombreux [défis d'accessibilité <sup>(angl.)</sup>](https://webaim.org/techniques/acrobat/acrobat) et peuvent être difficiles à lire sur de petits écrans. Ils restent néanmoins populaires dans certains cercles, mais il est beaucoup mieux de les lier afin qu'ils puissent être téléchargés ou lus sur une page séparée, plutôt que de les intégrer dans une page web.

## Résumé

Le sujet de l'intégration d'autres contenus dans les documents web peut rapidement devenir très complexe, donc dans cet article, nous avons essayé de l'introduire de manière simple et familière, tout en donnant un aperçu de certaines des fonctionnalités plus avancées des technologies impliquées. Pour commencer, il est peu probable que vous utilisiez l'intégration pour autre chose que l'inclusion de contenus tiers comme des cartes et des vidéos sur vos pages. Cependant, à mesure que vous gagnez en expérience, vous êtes susceptible de trouver davantage d'utilisations pour elles.

Il existe de nombreuses autres technologies qui impliquent l'intégration de contenus externes en dehors de celles que nous avons abordées ici. Nous en avons vu certaines dans des articles précédents, comme {{HTMLElement("video")}}, {{HTMLElement("audio")}} et {{HTMLElement("img")}}, mais il y en a d'autres à découvrir, comme {{HTMLElement("canvas")}} pour les graphiques 2D et 3D générés par JavaScript et {{SVGElement("svg")}} pour l'intégration de graphiques vectoriels.
