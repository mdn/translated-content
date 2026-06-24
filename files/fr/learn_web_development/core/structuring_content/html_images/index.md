---
title: Les images en HTML
short-title: Les images
slug: Learn_web_development/Core/Structuring_content/HTML_images
l10n:
  sourceCommit: c53bfa01f3bf436d486f4032c16f592855a2af2c
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content", "Learn_web_development/Core/Structuring_content/Test_your_skills/Images", "Learn_web_development/Core/Structuring_content")}}

Au début, le Web n'était que du texte, ce qui était un peu ennuyeux. Heureusement, il n'a pas fallu longtemps pour que la possibilité d'intégrer des images ( et d'autres types de contenu intéressants) dans une page web soit ajoutée. Bien qu'il y ait plusieurs types de contenu multimédia, il est logique de commencer avec l'humble élément {{HTMLElement("img")}}, utilisé pour intégrer une image dans une page web. Dans cet article, nous approfondissons son utilisation en abordant les principes fondamentaux, l'annotation par légendes utilisant {{HTMLElement("figure")}}, et en analysant sa relation avec les images d'arrière-plan du {{Glossary("CSS")}}.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Avoir une connaissance de base en HTML, comme expliqué dans
        <a href="/fr/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Syntaxe de base HTML</a
        >. Les sémantiques au niveau du texte telles que <a href="/fr/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
          >les titres et les paragraphes</a
        > et <a href="/fr/docs/Learn_web_development/Core/Structuring_content/Lists"
          >les listes</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs d'apprentissage&nbsp;:</th>
      <td>
        <ul>
          <li>Le terme «&nbsp;élément remplacé&nbsp;» — que signifie-t-il&nbsp;?</li>
          <li>Syntaxe de base de la balise <code>&lt;img&gt;</code></li>
          <li>Utilisation de <code>src</code> pour pointer vers une ressource.</li>
          <li>Utilisation de <code>width</code> et <code>height</code>, par exemple, pour éviter des mises à jour saccadées de l'interface utilisateur une fois qu'une image a fini de se charger et est affichée.</li>
          <li>Optimisation des ressources multimédias pour le web — garder les tailles de fichiers petites.</li>
          <li>Compréhension des licences des ressources multimédias — différents types de licences, comment s'y conformer et comment rechercher des fichiers multimédias correctement licenciés à utiliser dans les projets.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Comment intégrer une image à une page web ?

Pour mettre une image sur une page web, nous utilisons l'élément {{HTMLElement("img")}}. C'est un {{Glossary("void element", "élément vide")}} (ce qui signifie qu'il ne peut pas avoir de contenu enfant et ne peut pas avoir de balise de fermeture) qui nécessite deux attributs pour être utile&nbsp;: `src` et `alt`. L'attribut `src` contient une URL pointant vers l'image que vous souhaitez intégrer dans la page. Comme pour l'attribut `href` des éléments {{HTMLElement("a")}}, l'attribut `src` peut être une URL relative ou une URL absolue. Sans attribut `src`, un élément `img` n'a pas d'image à charger.

[L'attribut `alt` est décrit ci-dessous](#texte_alternatif).

> [!NOTE]
> Vous devez lire [Une brève présentation des URL et des chemins](/fr/docs/Learn_web_development/Core/Structuring_content/Creating_links#url) pour vous rafraîchir la mémoire avant de continuer.

Donc, par exemple, si votre image s'appelle `dinosaur.jpg`, et qu'elle est située dans le même répertoire que votre page HTML, vous pouvez intégrer cette image comme ceci&nbsp;:

```html
<img src="dinosaur.jpg" alt="Dinosaure" />
```

Si l'image se trouvait dans un sous-répertoire `images`, qui se trouvait dans le même répertoire que la page HTML, vous l'intégrez comme ceci&nbsp;:

```html
<img src="images/dinosaur.jpg" alt="Dinosaure" />
```

Et ainsi de suite.

> [!NOTE]
> Les moteurs de recherche lisent également les noms de fichiers image et les prennent en compte pour le référencement. Par conséquent, vous devez donner à votre image un nom de fichier descriptif&nbsp;; `dinosaur.jpg` est mieux que `img835.png`.

Vous pouvez également intégrer l'image en utilisant son URL absolue, par exemple&nbsp;:

```html
<img src="https://www.exemple.fr/images/dinosaur.jpg" alt="Dinosaure" />
```

L'utilisation de URLs absolues n'est cependant pas recommandée. Vous devez héberger les images que vous souhaitez utiliser sur votre site, ce qui, dans des configurations simples, signifie garder les images de votre site sur le même serveur que votre HTML. De plus, il est plus efficace d'utiliser des URLs relatives que des URLs absolues en termes de maintenance (lorsque vous déplacez votre site vers un autre domaine, vous n'avez pas besoin de mettre à jour toutes vos URLs pour inclure le nouveau domaine). Dans des configurations plus avancées, vous pouvez utiliser un [CDN (Content Delivery Network)](/fr/docs/Glossary/CDN) pour distribuer vos images.

Si vous n'avez pas créé les images, vous devez vous assurer que vous avez la permission de les utiliser selon les conditions de la licence sous laquelle elles sont publiées (voir [Ressources multimédias et licences](#media_assets_and_licensing) ci-dessous pour plus d'informations).

> [!WARNING]
> _Ne jamais_ pointer l'attribut `src` vers une image hébergée sur le site de quelqu'un d'autre _sans permission_. Cela s'appelle du «&nbsp;<i lang="en">hotlinking</i>&nbsp;». C'est considéré comme non éthique, car quelqu'un d'autre paye les coûts de bande passante pour livrer l'image lorsque quelqu'un visite votre page. Cela vous laisse également sans contrôle si l'image est supprimée ou remplacée par quelque chose de gênant.

Le code précédent, que ce soit avec l'URL absolue ou relative, nous donne le résultat suivant&nbsp;:

![Une image de base d'un dinosaure, intégrée dans un navigateur, avec « Images en HTML » écrit au-dessus](basic-image.png)

> [!NOTE]
> Les éléments comme {{HTMLElement("img")}} et {{HTMLElement("video")}} sont souvent désignés comme des **éléments remplacés**. C'est parce que le contenu et la taille de ces éléments sont définies par une ressource externe (comme un fichier image ou video), pas par le contenu de l'élément lui-même.

> [!NOTE]
> Vous pouvez trouver les exemples finis de cette section sur [Github <sup>(angl.)</sup>](https://mdn.github.io/learning-area/html/multimedia-and-embedding/images-in-html/index.html) (regardez aussi le [code source <sup>(angl.)</sup>](https://github.com/mdn/learning-area/blob/master/html/multimedia-and-embedding/images-in-html/index.html).)

### Texte alternatif

Le prochain attribut que nous allons étudier est `alt`. Sa valeur est supposée être un descriptif sous forme de texte de l'image, à utiliser dans les cas où l'image ne peut être affichée. Par exemple, le code au-dessus peut être modifié de cette manière&nbsp;:

```html
<img
  src="images/dinosaur.jpg"
  alt="La tête et le torse d'un squelette de dinosaure ;
            il a une grande tête avec de longues dents pointues" />
```

La manière la plus simple de tester votre texte `alt` est de mal épeler votre nom de fichier intentionnellement. Si dans l'exemple, la photo était épelée `dinosooooor.jpg`, le navigateur ne l'affiche pas, mais affiche le texte alternatif à la place&nbsp;:

![Le titre « Images en HTML », mais cette fois l'image du dinosaure n'est pas affichée, et le texte alt est à la place.](alt-text.png)

Pourquoi vous voyez partout du texte alternatif&nbsp;? Vous en avez besoin, car c'est très pratique en maintes occasions&nbsp;:

- L'utilisateur·ice est malvoyant·e et utilise un [lecteur d'écran](https://fr.wikipedia.org/wiki/Lecteur_d%27écran) pour écouter le contenu du site web. En réalité, la présence d'un texte alternatif décrivant les images est utile à la plupart des utilisateur·ice·s.
- Comme décrit ci-dessus, l'orthographe du nom du fichier ou du chemin d'accès peut être erronée.
- Le navigateur ne prend pas en charge le type d'image. Certaines personnes utilisent encore des navigateurs en mode texte, tels que [Lynx](<https://fr.wikipedia.org/wiki/Lynx_(navigateur)>), qui affichent le texte alternatif des images.
- Vous pouvez souhaiter fournir du texte à l'intention des moteurs de recherche&nbsp;; par exemple, ceux-ci peuvent faire correspondre le texte alternatif avec les requêtes de recherche.
- Les utilisateur·ice·s ont désactivé les images pour réduire le volume de données transférées et les distractions. C'est particulièrement courant sur les téléphones mobiles et dans les pays où la bande passante est limitée ou coûteuse.

Que devez-vous exactement écrire dans votre attribut `alt`&nbsp;? Cela dépend de la raison pour laquelle l'image est là. En d'autres termes, de ce que vous perdez si votre image ne s'affiche pas&nbsp;:

- **Décoration.** Vous devez utiliser des [images d'arrière-plan CSS](#css_background_images) pour les images décoratives, mais si vous devez utiliser du HTML, ajoutez un `alt=""` vide. Si l'image ne fait pas partie du contenu, un lecteur d'écran ne doit pas perdre de temps à la lire.
- **Contenu.** Si votre image apporte des informations importantes, reprenez ces informations dans un texte `alt` _bref_ — ou mieux encore, dans le corps du texte que tout le monde peut voir. N'écrivez pas de texte `alt` redondant. Ne serait-ce pas agaçant pour un·e utilisateur·ice voyant·e si tous les paragraphes étaient rédigés deux fois dans le contenu principal&nbsp;? Si l'image est suffisamment décrite par le corps du texte, vous pouvez simplement utiliser `alt=""`.
- **Lien.** Si vous placez une image entre les balises {{HTMLElement("a")}} pour la transformer en lien, vous devez tout de même fournir un [texte de lien accessible](/fr/docs/Learn_web_development/Core/Structuring_content/Creating_links#use_clear_link_wording). Dans ce cas, vous pouvez soit l'écrire à l'intérieur du même élément `<a>`, soit à l'intérieur de l'attribut `alt` de l'image — selon ce qui fonctionne le mieux dans votre cas.
- **Texte.** Vous ne devez pas mettre votre texte dans des images. Si votre titre principal a besoin d'une ombre portée, par exemple, [utilisez CSS](/fr/docs/Web/CSS/Reference/Properties/text-shadow) pour cela plutôt que de mettre le texte dans une image. Cependant, si vous _ne pouvez vraiment pas éviter de le faire_, vous devez fournir le texte à l'intérieur de l'attribut `alt`.

Essentiellement, l'essentiel est de fournir une expérience utilisable, même lorsque les images ne peuvent pas être vues. Cela garantit que tous les utilisateur·ice·s ne manquent aucune partie du contenu. Essayez de désactiver les images dans votre navigateur et voyez comment les choses apparaissent. Vous pouvez rapidement réaliser à quel point le texte alternatif est utile si l'image ne peut pas être vue.

> [!NOTE]
> Consultez notre guide sur les [alternatives textuelles](/fr/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) et [un arbre de décision pour l'attribut `alt` <sup>(angl.)</sup>](https://www.w3.org/WAI/tutorials/images/decision-tree/) pour apprendre à utiliser un attribut `alt` pour les images dans diverses situations.

> [!NOTE]
> [Les balises HTML <sup>(angl.)</sup>](https://scrimba.com/html-css-crash-course-c02l/~0d?via=mdn) <sup>[_Partenaire d'apprentissage MDN_](/fr/docs/MDN/Writing_guidelines/Learning_content#liens_partenaires_et_intégrations)</sup> de Scrimba est une leçon interactive fournissant des informations sur les images et des mini-défis.

### Largeur et hauteur

Vous pouvez vous servir des attributs [`width`](/fr/docs/Web/HTML/Reference/Elements/img#width) et [`height`](/fr/docs/Web/HTML/Reference/Elements/img#height) pour définir la largeur et la hauteur de votre image. Ils sont donnés sous forme d'entiers sans unité et représentent la largeur et la hauteur de l'image en pixels.

Vous pouvez trouver la largeur et la hauteur de différentes manières. Sur Mac, par exemple, vous pouvez utiliser <kbd>Cmd</kbd> + <kbd>I</kbd> pour afficher l'info relative au fichier image. Pour revenir à notre exemple, nous pourrions faire ceci&nbsp;:

```html
<img
  src="images/dinosaur.jpg"
  alt="La tête et le torse d'un squelette de dinosaure ;
            il a une grande tête avec de longues dents pointues"
  width="400"
  height="341" />
```

Il y a une très bonne raison à cela. Le code HTML de votre page et l'image constituent des ressources distinctes, récupérées par le navigateur sous forme de requêtes HTTP(S) séparées. Dès que le navigateur a reçu le code HTML, il commence à l'afficher à l'utilisateur·ice. Si les images n'ont pas encore été reçues (ce qui est souvent le cas, car la taille des fichiers image est souvent bien supérieure à celle des fichiers HTML), le navigateur n'affiche alors que le code HTML et met à jour la page avec l'image dès qu'il la reçoit.

Par exemple, supposons que nous ayons du texte après l'image&nbsp;:

```html
<h1>Images en HTML</h1>

<img
  src="dinosaur.jpg"
  alt="La tête et le torse d'un squelette de dinosaure ;
            il a une grande tête avec de longues dents pointues"
  title="Un T-Rex exposé au musée de l'université de Manchester." />
<blockquote>
  <p>
    Mais là-bas, il fait sombre maintenant, et ce n'est pas le bel aquarium
    éclairé qu'elle imaginait pendant les heures de jour, tourbillonnant avec
    des bancs de petits, délicats animaux flottant et dansant lentement selon
    leurs propres courants sereins et créant l'apparence d'une peinture vivante.
    C'était faux, en tout cas. L'océan était différent d'un aquarium, qui était
    un environnement artificiel. L'océan était un monde. Et un monde n'est pas
    de l'art. Dorothy pensait aux êtres vivants qui se déplaçaient dans ce monde
    : grands, impitoyables et affamés. Comme nous là-haut.
  </p>
  <footer>- Rachel Ingalls, <cite>Mrs. Caliban</cite></footer>
</blockquote>
```

Dès que le navigateur télécharge le HTML, il commence à afficher la page.

Une fois l'image chargée, le navigateur ajoute l'image à la page. Comme l'image prend de la place, le navigateur doit déplacer le texte vers le bas de la page, pour faire de la place à l'image au-dessus&nbsp;:

![Comparaison de la mise en page de la page pendant le chargement par le navigateur et après son achèvement, lorsque aucune taille n'est définie pour l'image.](no-size.png)

Déplacer le texte de cette manière est extrêmement distrayant pour les utilisateur·ice·s, surtout s'ils ont déjà commencé à le lire, et cela oblige également le navigateur à re-render la page, ce qui est mauvais pour les performances.

Si vous définissez la taille réelle de l'image dans votre HTML en utilisant les attributs `width` et `height`, le navigateur sait alors combien d'espace réserver pour l'image avant même de l'avoir téléchargée.

Cela signifie que lorsque l'image a été téléchargée, le navigateur n'a pas besoin de déplacer le contenu environnant.

![Comparaison de la mise en page de la page pendant le chargement par le navigateur et après son achèvement, lorsque la taille de l'image est définie.](size.png)

Pour un excellent article sur l'histoire de cette fonctionnalité, voir [Définir la hauteur et la largeur des images est à nouveau important <sup>(angl.)</sup>](https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/).

Notez que s'il n'y a pas de contenu en dessous de l'image, le re-rendering n'est pas un problème, car le redimensionnement de l'image ne fait pas déplacer les autres éléments. Dans ce cas, vous pouvez définir uniquement la `width` de l'image. Si vous définissez une `width` mais pas de `height`, la `height` par défaut est `auto`, ce qui signifie qu'elle est définie à une valeur qui maintient le {{Glossary("aspect ratio", "rapport d'aspect")}} de l'image.

#### Redimensionner les images

Bien que, comme nous l'avons dit, il soit recommandé de définir la _taille réelle_ de vos images en utilisant les attributs HTML, vous ne devez pas les utiliser pour _redimensionner_ les images.

Si vous définissez une taille d'image trop grande, vous vous retrouvez avec des images qui semblent granuleuses, floues ou trop petites, et vous gaspillez de la bande passante en téléchargeant une image qui ne correspond pas aux besoins de l'utilisateur·ice. L'image peut également finir par sembler déformée si vous ne maintenez pas le {{Glossary("aspect ratio", "rapport d'aspect")}} correct. Vous devez utiliser un éditeur d'images pour mettre votre image à la bonne taille avant de la mettre sur votre page web.

Si vous devez modifier la taille d'une image, vous devez utiliser [CSS](/fr/docs/Learn_web_development/Core/Styling_basics) à la place.

### Titre d'images

Comme décrit dans le chapitre [Création d'hyperliens](/fr/docs/Learn_web_development/Core/Structuring_content/Creating_links#adding_supporting_information_with_the_title_attribute), vous pouvez aussi ajouter un attribut `title` aux images, pour fournir un supplément d'information si nécessaire. Dans notre exemple, nous pourrions faire ceci&nbsp;:

```html
<img
  src="images/dinosaur.jpg"
  alt="La tête et le torse d'un squelette de dinosaure ;
            il a une grande tête avec de longues dents pointues"
  width="400"
  height="341"
  title="Un T-Rex exposé au musée de l'université de Manchester." />
```

Cela donne une info-bulle avec le texte entré dans l'attribut `title`&nbsp;:

![Une image de dinosaure, avec une info-bulle affichant « Un T-Rex exposé au musée de l'université de Manchester. »](image-with-title.png)

Cependant, cela n'est pas recommandé — l'attribut `title` présente un certain nombre de problèmes d'accessibilité, principalement liés au fait que le support des lecteurs d'écran est très imprévisible et que la plupart des navigateurs ne l'affichent que si vous survolez avec une souris (donc par exemple, pas d'accès pour les utilisateur·ice·s au clavier). Si vous souhaitez en savoir plus à ce sujet, lisez [Les épreuves et tribulations de l'attribut `title` <sup>(angl.)</sup>](https://www.24a11y.com/2017/the-trials-and-tribulations-of-the-title-attribute/) par Scott O'Hara.

Il est préférable d'inclure ces informations supplémentaires dans le texte principal de l'article, plutôt que de les attacher à l'image.

### Exercice sur l'intégration d'images

Il est maintenant temps de jouer&nbsp;! Cette tâche vous permet d'intégrer une image.

1. Cliquez sur **"Exécuter"** dans le bloc de code ci-dessous pour éditer l'exemple dans le MDN Playground.
2. Modifiez la balise {{HTMLElement("img")}} existante afin qu'elle intègre l'image située à l'URL suivante&nbsp;:

   ```url
   https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg
   ```

   > [!NOTE]
   > Nous avons dit plus tôt de ne jamais faire de «&nbsp;<i lang="en">hotlinking</i>&nbsp;» sur d'autres serveurs sans permission, mais cette image se trouve sur notre dépôt GitHub, donc c'est OK.

3. Ajoutez un attribut `alt` à l'image. Vous pouvez vérifier que le texte alternatif fonctionne en faisant temporairement une faute dans l'URL de l'image.
4. Réglez la largeur et la hauteur correctes de l'image (indice&nbsp;: elle fait `200px` de large et `171px` de haut), puis expérimentez avec d'autres valeurs pour voir l'effet.
5. Ajoutez un `title` à l'image.

Si vous faites une erreur, vous pouvez effacer votre travail en utilisant le bouton _Réinitialiser_ dans le MDN Playground. Si vous êtes vraiment bloqué, vous pouvez consulter la solution sous le bloc de code.

```html live-sample___images-1
<img />
```

{{EmbedLiveSample('images-1', "100%", 60)}}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Votre HTML final doit ressembler à ceci&nbsp;:

```html
<img
  src="https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg"
  alt="La tête et le torse d'un squelette de dinosaure ;
            il a une grande tête avec de longues dents pointues"
  width="200"
  height="171"
  title="Un T-Rex exposé au musée de l'université de Manchester." />
```

</details>

## Ressources multimédias et licences

Les images (et autres types de ressources multimédias) que vous trouvez sur le web sont publiées sous différents types de licences. Avant d'utiliser une image sur un site que vous construisez, assurez-vous d'en être propriétaire, d'avoir la permission de l'utiliser ou de respecter les conditions de licence du propriétaire.

### Comprendre les types de licences

Regardons quelques catégories courantes de licences que vous êtes susceptible de trouver sur le web.

#### Tous droits réservés

Les créateurs d'œuvres originales telles que des chansons, des livres ou des logiciels publient souvent leur travail sous une protection stricte du droit d'auteur·ice. Cela signifie que, par défaut, ils (ou leur éditeur) ont des droits exclusifs pour utiliser (par exemple, afficher ou distribuer) leur travail. Si vous souhaitez utiliser des images protégées par le droit d'auteur·ice avec une licence _tous droits réservés_, vous devez faire l'une des choses suivantes&nbsp;:

- Obtenir une permission explicite et écrite du titulaire du droit d'auteur·ice.
- Payer des frais de licence pour les utiliser. Cela peut être des frais uniques pour une utilisation illimitée («&nbsp;libre de droits&nbsp;»), ou cela peut être «&nbsp;géré par droits&nbsp;», auquel cas vous devez peut-être payer des frais spécifiques par utilisation selon le créneau horaire, la région géographique, l'industrie ou le type de média, etc.
- Limiter vos utilisations à celles qui seraient considérées comme [usage équitable <sup>(angl.)</sup>](https://fairuse.stanford.edu/overview/fair-use/what-is-fair-use/) ou [traitement équitable <sup>(angl.)</sup>](https://copyrightservice.co.uk/copyright/p27_work_of_others) dans votre juridiction.

Les auteur·ice·s ne sont pas tenus d'inclure un avis de droit d'auteur·ice ou des conditions de licence avec leur travail. Le droit d'auteur·ice existe automatiquement dans une œuvre originale dès qu'elle est créée dans un support tangible. Ainsi, si vous trouvez une image en ligne et qu'il n'y a pas d'avis de droit d'auteur·ice ou de conditions de licence, la solution la plus sûre est de supposer qu'elle est protégée par le droit d'auteur·ice avec tous les droits réservés.

#### Permissive

Si l'image est publiée sous une licence permissive, telle que [MIT <sup>(angl.)</sup>](https://mit-license.org/), [BSD <sup>(angl.)</sup>](https://opensource.org/license/BSD-3-clause), ou une licence [Creative Commons (CC) appropriée <sup>(angl.)</sup>](https://creativecommons.org/chooser/), vous n'avez pas besoin de payer de frais de licence ou de demander une autorisation pour l'utiliser. Cependant, il existe diverses conditions de licence que vous devez respecter, qui varient selon la licence.

Par exemple, vous pouvez être tenu·e de&nbsp;:

- Fournir un lien vers la source originale de l'image et créditer son créateur.
- Indiquer si des modifications ont été apportées à l'image.
- Partager toute œuvre dérivée créée à partir de l'image sous la même licence que l'originale.
- Ne pas partager du tout des œuvres dérivées.
- Ne pas utiliser l'image dans un travail commercial.
- Inclure une copie de la licence avec toute publication utilisant l'image.

Vous devez consulter la licence applicable pour connaître les conditions spécifiques que vous devez respecter.

> [!NOTE]
> Vous pouvez rencontrer le terme «&nbsp;copyleft&nbsp;» dans le contexte des licences permissives. Les licences copyleft (telles que la [GNU General Public License (GPL) <sup>(angl.)</sup>](https://www.gnu.org/licenses/gpl-3.0.en.html) ou les licences Creative Commons «&nbsp;Share Alike&nbsp;») stipulent que les œuvres dérivées doivent être publiées sous la même licence que l'originale.

Les licences copyleft sont particulièrement présentes dans le monde du logiciel. L'idée de base est qu'un nouveau projet construit avec le code d'un projet sous licence copyleft (ce que l'on appelle une «&nbsp;bifurcation&nbsp;» du logiciel original) doit également être licencié sous la même licence copyleft. Cela garantit que le code source du nouveau projet est également disponible pour que d'autres puissent l'étudier et le modifier. Notez que, en général, les licences rédigées pour les logiciels, telles que la GPL, ne sont pas considérées comme de bonnes licences pour les œuvres non logicielles, car elles n'ont pas été rédigées en tenant compte des œuvres non logicielles.

Explorez les liens fournis plus haut dans cette section pour en savoir plus sur les différents types de licences et les conditions qu'elles définissent.

#### Domaine public/CC0

Les œuvres publiées dans le domaine public sont parfois appelées «&nbsp;aucun droit réservé&nbsp;» — aucun droit d'auteur·ice ne s'applique, et elles peuvent être utilisées sans autorisation et sans avoir à respecter des conditions de licence. Une œuvre peut entrer dans le domaine public par divers moyens, tels que l'expiration du droit d'auteur·ice ou la renonciation spécifique aux droits.

L'une des façons les plus efficaces de placer une œuvre dans le domaine public est de la licencier sous [CC0 <sup>(angl.)</sup>](https://wiki.creativecommons.org/wiki/CC0), une licence Creative Commons spécifique qui fournit un outil juridique clair et sans ambigüité à cet effet.

Lors de l'utilisation d'images du domaine public, obtenez une preuve que l'image est bien dans le domaine public et conservez cette preuve pour vos dossiers. Par exemple, prenez une capture d'écran de la source originale avec le statut de licence clairement affiché, et envisagez d'ajouter une page à votre site Web avec une liste des images acquises ainsi que leurs exigences de licence.

### Recherche d'images sous licence permissive

Vous pouvez trouver des images sous licence permissive pour vos projets en utilisant un moteur de recherche d'images ou directement à partir de dépôts d'images.

Recherchez des images en utilisant une description de l'image que vous recherchez ainsi que des termes de licence pertinents. Par exemple, lors de la recherche de «&nbsp;dinosaure jaune&nbsp;», ajoutez «&nbsp;images du domaine public&nbsp;», «&nbsp;bibliothèque d'images du domaine public&nbsp;», «&nbsp;images sous licence ouverte&nbsp;» ou des termes similaires à la requête de recherche.

Certains moteurs de recherche disposent d'outils pour vous aider à trouver des images avec des licences permissives. Par exemple, lors de l'utilisation de Google, allez dans l'onglet «&nbsp;Images&nbsp;» pour rechercher des images, puis cliquez sur «&nbsp;Outils&nbsp;». Il y a un menu déroulant «&nbsp;Droits d'usage&nbsp;» dans la barre d'outils résultante où vous pouvez choisir de rechercher spécifiquement des images sous licences Creative Commons.

Les sites de dépôt d'images, tels que [Flickr <sup>(angl.)</sup>](https://flickr.com/), [ShutterStock <sup>(angl.)</sup>](https://www.shutterstock.com/), et [Pixabay <sup>(angl.)</sup>](https://pixabay.com/), disposent d'options de recherche permettant de rechercher uniquement des images sous licence permissive. Certains sites distribuent exclusivement des images et des icônes sous licence permissive, tels que [Picryl <sup>(angl.)</sup>](https://picryl.com/) et [The Noun Project <sup>(angl.)</sup>](https://thenounproject.com/).

Conformément à la licence sous laquelle l'image a été publiée, il s'agit de trouver les détails de la licence, de lire la page de licence ou d'instructions fournie par la source, puis de suivre ces instructions. Les dépôts d'images réputés rendent leurs conditions de licence claires et faciles à trouver.

## Légender des images avec `figure` et `figcaption`

En parlant de légendes, il y a de nombreuses manières d'en ajouter qui vont avec votre image. Par exemple, rien ne vous empêche de faire ceci&nbsp;:

```html
<div class="figure">
  <img
    src="images/dinosaur.jpg"
    alt="La tête et le torse d'un squelette de dinosaure ;
            il a une grande tête avec de longues dents pointues"
    width="400"
    height="341" />

  <p>Un T-Rex exposé au musée de l'université de Manchester.</p>
</div>
```

C'est acceptable. Cela contient le contenu dont vous avez besoin et peut être facilement mis en forme à l'aide de CSS. Mais il y a un problème&nbsp;: rien ne relie sémantiquement l'image à sa légende, ce qui peut poser des difficultés aux lecteurs d'écran. Par exemple, lorsque vous avez 50 images et légendes, quelle légende correspond à quelle image&nbsp;?

Une meilleure solution consiste à utiliser les éléments HTML {{HTMLElement("figure")}} et {{HTMLElement("figcaption")}}. Ceux-ci ont été créés précisément dans ce but&nbsp;: fournir un conteneur sémantique pour les figures et relier clairement la figure à sa légende. Notre exemple ci-dessus peut être réécrit comme suit&nbsp;:

```html
<figure>
  <img
    src="images/dinosaur.jpg"
    alt="La tête et le torse d'un squelette de dinosaure ;
            il a une grande tête avec de longues dents pointues"
    width="400"
    height="341" />

  <figcaption>
    Un T-Rex exposé au musée de l'université de Manchester.
  </figcaption>
</figure>
```

L'élément {{HTMLElement("figcaption")}} dit au navigateur et aux technologies d'assistance que la légende décrit le contenu de l'autre élément {{HTMLElement("figure")}}.

> [!NOTE]
> D'un point de vue accessibilité, les légendes ont un rôle différent du texte [`alt`](/fr/docs/Web/HTML/Reference/Elements/img#alt). Le texte [`alt`](/fr/docs/Web/HTML/Reference/Elements/img#alt) ne sert qu'en absence d'image tandis que les légendes servent en même temps aux utilisateur·ice·s qui voient l'image. Les légendes et le texte `alt` devraient cependant être différents, car ils apparaissent tout deux quand l'image est absente. Essayez d'enlever les images dans votre navigateur et voyez à quoi ça ressemble.

Une figure n'est pas forcé de contenir une image. C'est une unité de contenu indépendante qui&nbsp;:

- exprime votre désir d'accessibilité et de compréhension facilitée.
- peut se placer en plusieurs endroits dans une page à flot linéaire.
- Fournit une information essentielle qui supporte le texte principal.

Une figure peut être un ensemble d'images, des bribes de code, de l'audio, de la vidéo, des équations, un tableau ou bien d'autres choses.

### Créer une figure

Dans cette tâche, nous vous demandons de prendre le code terminé de la tâche précédente comme point de départ et de le transformer en figure&nbsp;:

1. Cliquez sur **"Exécuter"** dans le bloc de code ci-dessous pour éditer l'exemple dans le MDN Playground.
2. Encapsulez l'élément `<img>` dans un élément {{HTMLElement("figure")}}.
3. Copiez le texte de l'attribut `title`, mettez-le dans un élément {{HTMLElement("figcaption")}} sous l'image, puis supprimez l'attribut `title`.

Si vous faites une erreur, vous pouvez remettre votre travail à zéro en utilisant le bouton _Reset_ dans le MDN Playground. Si vous êtes vraiment bloqué, vous pouvez consulter la solution ci-dessous le bloc de code.

```html live-sample___images-2
<img
  src="https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg"
  alt="La tête et le torse d'un squelette de dinosaure ; il a une grande tête avec de longues dents acérées"
  width="200"
  height="171"
  title="Un T-Rex exposé au musée de l'université de Manchester." />
```

{{EmbedLiveSample('images-2', "100%", 200)}}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Votre code HTML final doit ressembler à ceci&nbsp;:

```html
<figure>
  <img
    src="https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg"
    alt="La tête et le torse d'un squelette de dinosaure ; il a une grande tête avec de longues dents acérées"
    width="200"
    height="171" />
  <figcaption>
    Un T-Rex exposé au musée de l'université de Manchester.
  </figcaption>
</figure>
```

</details>

## Images d'arrière-plan CSS

Vous pouvez également utiliser le CSS pour intégrer des images dans des pages web (et JavaScript, mais c'est une tout autre histoire). La propriété CSS {{CSSxRef("background-image")}}, ainsi que les autres propriétés `background-*`, permettent de contrôler le placement des images d'arrière-plan. Par exemple, pour appliquer une image d'arrière-plan à chaque paragraphe d'une page, vous pouvez procéder comme suit&nbsp;:

```css
p {
  background-image: url("images/dinosaur.jpg");
}
```

L'image intégrée ainsi obtenue est sans doute plus facile à positionner et à contrôler que les images HTML. Alors pourquoi s'embêter avec les images HTML&nbsp;? Comme évoqué plus haut, les images d'arrière-plan CSS sont uniquement destinées à la décoration. Si vous souhaitez simplement ajouter un élément esthétique à votre page pour en améliorer l'aspect visuel, cela convient parfaitement. Cependant, ces images n'ont absolument aucune signification sémantique. Elles ne peuvent pas avoir d'équivalent textuel, sont invisibles pour les lecteurs d'écran, etc. C'est là que les images HTML prennent tout leur sens&nbsp;!

Récapitulons&nbsp;: si une image a une signification par rapport à votre contenu, vous devez utiliser une image HTML. Si une image est purement décorative, vous devez utiliser des images d'arrière-plan CSS (nous aborderons ce sujet en détail plus tard dans les modules de base).

## Résumé

C'est tout pour le moment. Nous avons abordé en détail les images et les légendes.

Dans le prochain article, nous vous proposerons des tests que vous pourrez utiliser pour vérifier dans quelle mesure vous avez compris et retenu les informations que nous avons fournies sur les images HTML.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content", "Learn_web_development/Core/Structuring_content/Test_your_skills/Images", "Learn_web_development/Core/Structuring_content")}}
