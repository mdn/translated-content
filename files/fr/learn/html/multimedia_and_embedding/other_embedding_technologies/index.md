---
title: Des objets aux iframes — autres techniques d'intégration
slug: Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies
tags:
  - Apprentissage
  - Article
  - Codage
  - Débutant
  - Flash
  - Guide
  - HTML
  - Integration
  - Multimédia et intégration
  - Object
  - embed
  - iframe
translation_of: Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies
original_slug: Apprendre/HTML/Multimedia_and_embedding/Other_embedding_technologies
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Video_and_audio_content", "Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web", "Learn/HTML/Multimedia_and_embedding")}}

Maintenant, vous devriez vraiment avoir la main pour intégrer des choses dans les pages Web, y compris images, vidéos et audios. Donc, à ce stade, nous aimerions franchir en quelque sorte une étape similaire, en examinant certains éléments qui permettent d'intégrer une grande variété de types de contenu dans des pages Web : les éléments {{htmlelement("iframe")}}, {{htmlelement("embed")}} et {{htmlelement("object")}}. Les  `<iframe>` servent à intégrer d'autres pages Web, et les deux autres des PDF, SVG et même des Flash — une technique en voie de disparition, mais que vous rencontrerez encore assez régulièrement.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Compétences informatiques de base,
        <a
          href="/fr/Apprendre/Commencer_avec_le_web/Installation_outils_de_base"
          >installation des outils de base</a
        >, bases de la
        <a href="/fr/Apprendre/Commencer_avec_le_web/G%C3%A9rer_les_fichiers"
          >manipulation des fichiers</a
        >, connaissance des fondamentaux du HTML (comme expliqué dans
        <a href="/fr/Apprendre/HTML/Introduction_%C3%A0_HTML/Getting_started"
          >Commencer avec le HTML)</a
        >
        et articles précédents de ce module.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif&nbsp;:</th>
      <td>
        Apprendre comment incorporer des éléments, tels que d'autres pages ou
        des clips Flash,  dans des pages Web à l'aide de
        {{htmlelement("object")}}, {{htmlelement("embed")}}, et
        {{htmlelement("iframe")}}.
      </td>
    </tr>
  </tbody>
</table>

## Une courte histoire de l'intégration

Il y a longtemps, sur le Web, il était courant d'utiliser des **cadres** pour créer des sites Web - des petites parties de site Web stockées dans des pages HTML individuelles. Ces cadres étaient intégrés dans un document maître appelé **frameset** (ensemble de cadres) qui permettait de préciser la zone de l'écran que chaque cadre devait occuper, un peu comme le dimensionnement de colonnes et de lignes dans un tableau. Cette technique a été considérée comme le summum de la zénitude du milieu des années 90 jusqu'à leur fin. Il était évident qu'une page Web éclatée en petits morceaux était meilleure pour la vitesse du téléchargement — et tout à fait remarquable avec des connexions réseau si lentes à l'époque. Cette façon de procéder posait cependant de nombreux problèmes, qui l'emportaient de loin sur tout ce qui était positif à mesure que la vitesse du réseau s'accélérait, de sorte que vous ne la verrez plus utilisée.



Un peu plus tard (fin des années 90, début des années 2000), la technique des greffons est devenue très populaire, citons les [applets Java](/fr/docs/Glossary/Java) et [Flash](/fr/docs/Glossary/Adobe_Flash) — ils permettaient aux développeurs web d'intégrer du contenu riche dans des pages web telles que des vidéos et des animations, ce qui n'était tout simplement pas possible avec le HTML. L'intégration de ces techniques a été réalisée grâce à des éléments comme {{htmlelement("object")}} et {{htmlelement("embed")}}, un peu moins utilisé. Ils étaient très utiles à l'époque. Ils sont depuis tombés en désuétude en raison de nombreux problèmes&nbsp;: accessibilité, sécurité, taille de fichier et autres ; de nos jours, la plupart des mobiles ne prennent plus en charge de tels greffons, et les ordinateurs de bureau sont en train de les abandonner.

Enfin, l'élément {{htmlelement("iframe")}} est apparu (avec d'autres moyens d'intégration de contenu, comme {{htmlelement("canvas")}}, {{htmlelement("video")}}, etc). Cet élément permet d'intégrer un document web entier dans un autre, comme s'il s'agissait d'un élément {{htmlelement("img")}}} ou d'un autre élément de ce type. Il est régulièrement utilisé aujourd'hui.

Maintenant que la leçon d'histoire est terminée, passons à autre chose et voyons comment utiliser certains d'entre eux.



## Apprentissage actif&nbsp;: utilisations classiques de l'intégration

Dans cet article, passons directement à l'apprentissage actif pour vous donner tout de suite une idée concrète de l'utilité des techniques d'intégration. Le monde en ligne connaît très bien [Youtube](https://www.youtube.com/), mais beaucoup de gens ne connaissent pas les facilités de partage dont il dispose. Voyons comment Youtube nous permet d'intégrer une vidéo dans toute page qui nous plairait à l'aide d'un élément {{htmlelement("iframe")}}}.

1.  D'abord, allez sur Youtube et choisissez une vidéo qui vous plaise.
2.  Au‑dessous de la vidéo, vous devez trouver un bouton _Share (Partager)_ — cliquez‑le pour afficher les options de partage.
3.  Sélectionnez le bouton _Embed (Intégrer)_ et vous obtiendrez un morceau de code `<iframe>` — copiez‑le.
4.  Inserez ce code dans la boîte _Input_ ci‑dessous, et voyez le résultat dans _Output_.

En prime, vous pouvez aussi essayer d'intégrer une carte [Google Map](https://www.google.com/maps/) dans l'exemple.

1.  Allez sur Google Maps et trouvez une carte qui vous plaise.
2.  Cliquez sur le  «&nbsp;Menu Hamburger&nbsp;» (trois lignes horizontales) en haut à gauche de l'interface utilisateur.
3.  Selectionnez l'option _Share or embed map_ (Partager ou intégrer une carte).
4.  Selectionnez l'option _Embed map_ (intégrer une carte), qui vous fournira du code `<iframe>` — copiez‑le.
5.  Inserez‑le dans la boîte _Input_ di‑dessous et voyez le résultat dans _Output_.

Si vous faites une erreur, vous pouvez toujours réinitialiser le tout avec le bouton _Réinitialiser_. Si vous êtes vraiment bloqué, pressez le bouton _Afficher la solution_ pour voir la réponse.

```html hidden
<h2>Sortie directe</h2>

<div class="output" style="min-height: 250px;">
</div>

<h2>Code modifiable</h2>
<p class="a11y-label">Pressez Esc pour sortir le focus de la zone de code (Tab insère une tabulation).</p>

<textarea id="code" class="input" style="width: 95%;min-height: 100px;">
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Réinitialiser">
  <input id="solution" type="button" value="Afficher la solution">
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
var textarea = document.getElementById('code');
var reset = document.getElementById('reset');
var solution = document.getElementById('solution');
var output = document.querySelector('.output');
var code = textarea.value;
var userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

reset.addEventListener('click', function() {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = 'Afficher la solution';
  updateCode();
});

solution.addEventListener('click', function() {
  if(solution.value === 'Afficher la solution') {
    textarea.value = solutionEntry;
    solution.value = 'Cacher la solution';
  } else {
    textarea.value = userEntry;
    solution.value = 'Afficher la solution';
  }
  updateCode();
});

var htmlSolution = '<iframe width="420" height="315" src="https://www.youtube.com/embed/QH2-TGUlwu4" frameborder="0" allowfullscreen>\n</iframe>\n\n<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37995.65748333395!2d-2.273568166412784!3d53.473310471916975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bae6c05743d3d%3A0xf82fddd1e49fc0a1!2sThe+Lowry!5e0!3m2!1sen!2suk!4v1518171785211" width="600" height="450" frameborder="0" style="border:0" allowfullscreen>\n</iframe>';
var solutionEntry = htmlSolution;

textarea.addEventListener('input', updateCode);
window.addEventListener('load', updateCode);

// bloque la sortie de la zone texte avec la touche tab et fait en
// sorte qu'il affiche une tabulation à l'emplacement du curseur

textarea.onkeydown = function(e){
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret('\t');
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  var scrollPos = textarea.scrollTop;
  var caretPos = textarea.selectionStart;

  var front = (textarea.value).substring(0, caretPos);
  var back = (textarea.value).substring(textarea.selectionEnd, textarea.value.length);
  textarea.value = front + text + back;
  caretPos = caretPos + text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Met à jour le code utilisateur enregistré chaque fois que l'utilisateur le modifie

textarea.onkeyup = function(){
  // Nous ne voulons enregistrer l'état quand le code utilisateur va être montré,
  // et non la solution, de sorte que la solution n'est pas enregistrée avec le code utilisateur
  if(solution.value === 'Afficher la solution') {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample("Apprentissage_actif_utilisations_classiques_de_l'intégration", 700, 600, "", "", "hide-codepen-jsfiddle") }}

## Iframes en détail

Alors, facile et amusant, non ? Les éléments {{htmlelement("iframe")}} sont conçus pour intégrer d'autres documents Web dans le document en cours de traitement. C'est ce qu'il y a de mieux pour incorporer des contenus tierce‑partie dans un site Web, contenus sur lesquels vous n'aurez peut‑être pas de contrôle direct, mais pour lesquels vous ne voulez pas implémenter votre propre version — comme une vidéo de fournisseurs de vidéo en ligne, un système de commentaires comme [Disqus](https://disqus.com/), des cartes de fournisseurs en ligne, des bandeaux publicitaires, etc. Les exemples modifiables en direct utilisés dans ce cours ont été implémentés avec des `<iframe>`.

Il y a de sérieux [problèmes de sécurité](#problèmes_de_sécurité) à prendre en considération avec \<iframe>, comme nous le verrons plus loin, mais cela ne veut pas dire que vous ne devez pas les utiliser dans vos sites Web — cela demande juste un peu de connaissance et de soin à la conception. Examinons le code un peu plus en détail. Disons que vous voulez intégrer le glossaire MDN dans une de vos pages Web — vous pourriez tenter quelque chose comme&nbsp;:

    <iframe src="https://developer.mozilla.org/en-US/docs/Glossary"
            width="100%" height="500" frameborder="0"
            allowfullscreen sandbox>
      <p> <a href="https://developer.mozilla.org/en-US/docs/Glossary">
        Lien de repli pour les navigateurs ne prenant pas en charge iframe  </a> </p>
    </iframe>

Cet exemple inclut les éléments de base essentiels nécessaires à l'utilisation d'un `<iframe>`&nbsp;:

- {{htmlattrxref('allowfullscreen','iframe')}}
  - : Si activé, `<iframe>` pourra être mis en mode plein écran avec [Full Screen API](/fr/docs/Web/API/Fullscreen_API) (un peu hors‑sujet dans cet article).
- {{htmlattrxref('frameborder','iframe')}}
  - : Si défini à la valeur 1, demande à l'explorateur de tracer une bordure entre cadres, c'est le comportement par défaut. 0 supprime la bordure. L'utilisation d'un tel attribut n'est plus trop recommandée, car le même résultat peut être obtenu en mieux avec {{cssxref('border')}}`: none;` dans le {{Glossary('CSS')}}.
- {{htmlattrxref('src','iframe')}}
  - : Cet attribut, comme avec {{htmlelement("video")}} ou {{htmlelement("img")}}, contient un chemin vers l'URL du document à intégrer.
- {{htmlattrxref('width','iframe')}} and {{htmlattrxref('height','iframe')}}
  - : Ces attributs définissent la largeur et la hauteur souhaitée pour `<iframe>`.
- **Contenu de repli**
  - : Comme pour d'autres éléments semblables, tels {{htmlelement("video")}}, vous pouvez préciser un contenu de repli entre les balises ouvrantes et fermantes `<iframe></iframe>` qui seront affichées si l'explorateur ne prend pas en charge `<iframe>`. Dans notre cas nous avons mis un lien vers une page. Il est peu vraisemblable que vous rencontriez de nos jours un explorateur qui ne prenne pas en charge `<iframe>`.
- {{htmlattrxref('sandbox','iframe')}}
  - : Cet attribut n'est fonctionnel que dans des explorateurs un peu plus récents, contrairement aux autres attributs de  `<iframe>` (par ex. IE 10 et au‑delà). Il requiert des paramètres de sécurité renforcés&nbsp;; nous vous en disons plus dans le paragraphe suivant.

> **Note :** Afin d'améliorer la vitesse, il est pertinent de définir l'attribut `src` de `iframe` avec JavaScript après que le chargement du contenu principal est effectué. La page est utilisable plus tôt et le temps de chargement officiel de la page est diminué (une métrique {{glossary("SEO")}} importante).

### Problèmes de sécurité

Nous avons dit plus haut qu'il y avait des problèmes en matière de sécurité — entrons maintenant un peu plus dans le détail. Nous ne nous attendons pas à cette problèmatique vous soit parfaiment claire dès la première lecture&nbsp;; nous voulons simplement vous y sensibiliser et fournir un point de référence auquel vous pourrez revenir quand vous aurez plus d'expérience et commencerez à prévoir l'utilisation de `<iframe>` dans vos travaux et expérimentations. Car, il n'y a pas de craintes inutiles à avoir et refuser d'utiliser `<iframe>` — il faut juste être prudent. Poursuivons ...

Fabricants de navigateurs et développeurs Web ont appris à la dure que `<iframe>` constitue sur le Web une cible commune (terme officiel : un **vecteur d'attaque**) pour des personnes mal intentionnées.  `<iframe>` est une porte d'entrée pour les attaques de ces personnes quand ils essaient de modifier malicieusement une page Web ou d'amener des utilisateurs à faire quelque chose qu'ils ne voudraient pas faire, comme révéler des informations confidentielles comme noms d'utilisateur et mots de passe. Pour cette raison, les ingénieurs spécialistes et les développeurs de navigateurs ont développé divers mécanismes de sécurité pour rendre `<iframe>` plus sûr. De meilleures pratiques sont aussi à prendre en compte — nous allons développer certaines d'entre elles ci-dessous.

> **Note :** Le {{interwiki('wikipedia','détournement de clic')}} est un type d'attaque courant par l'intermédiaire de `<iframe>`&nbsp;: les hackeurs incorporent un `<iframe>` invisible dans votre document (ou intégrent votre document dans leur propre site malveillant) et s'en servent pour capturer les interactions utilisateur. C'est un moyen courant pour tromper des utilisateurs ou voler leurs données confidentielles.

Un exemple rapide d'abord - essayez de charger l'exemple précédent que nous avons montré ci-dessus dans votre navigateur - vous pouvez le [trouver en direct sur Github](http://mdn.github.io/learning-area/html/multimedia-and-embedding/other-embedding-technologies/iframe-detail.html) (voyez le [code source](https://github.com/mdn/learning-area/blob/gh-pages/html/multimedia-and-embedding/other-embedding-technologies/iframe-detail.html) aussi). Vous ne verrez rien d'affiché sur la page, et si vous regardez la _Console_ dans les [outils de développement](/fr/docs/Learn/Common_questions/What_are_browser_developer_tools) du navigateur, vous verrez un message vous disant pourquoi. Dans Firefox, ce message indique _Load denied by X-Frame-Options: https\://developer.mozilla.org/en-US/docs/Glossary does not permit framing_ (_Chargement interdit par X-Frame-Options: https\://developer.mozilla.org/en-US/docs/Glossary ne permet pas la mise en cadre_) . C'est parce que les développeurs qui ont construit MDN ont inclus un paramètre sur le serveur des pages du site empêchant l'intégration de ces pages sur un autre site avec `<iframe>` (voir [Configurer les directives CSP](#configurer_les_directives_csp), ci-dessous). Parfaitement sensé — il n'y a aucune raison d'intégrer une page entière de MDN dans d'autres pages, sauf à vouloir les intégrer dans votre site et les prétendre vôtres, ou bien tenter de voler des données par l'intermédiaire d'un détournement de clic, actions qui sont tous les deux des malhonnêtetés. De plus, si tout le monde se mettait à faire cela, toute la bande passante supplémentaire nécessaire commencerait à coûter un paquet d'argent à Mozilla.

#### N'intégrer que si nécessaire

Il est parfois judicieux d'intégrer un contenu tiers — comme une vidéo YouTube ou des cartes — mais vous pouvez vous éviter bien des maux de tête si vous n'intégrez du contenu tierce partie qu'en cas de nécessité. Pour la sécurité sur le Web, voici une bonne règle d'or : "On n'est jamais trop prudent. Si vous l'avez fait, vérifiez quand même. Si quelqu'un d'autre l'a fait, supposez que c'est dangereux jusqu'à preuve du contraire."

Outre la sécurité, vous devez également prendre en considération les questions de propriété intellectuelle. La plupart des contenus sont protégés par des droits d'auteur, hors ligne et en ligne, même du contenu auquel vous ne vous attendez pas (par exemple, la plupart des images sur [Wikimedia Commons](https://commons.wikimedia.org/wiki/Main_Page)). N'affichez jamais de contenu sur votre page Web à moins que vous en soyez propriétaire ou que les propriétaires vous aient donné une autorisation écrite sans équivoque. Les sanctions en cas de violation du droit d'auteur sont sévères. Encore une fois, on n'est jamais trop prudent.

Si le contenu est sous licence, vous devez en respecter les termes. Par exemple, le contenu de MDN est sous licence CC-BY-SA. Cela signifie que vous devez correctement porter à notre crédit toute citation de notre contenu, même si vous y apportez des modifications substantielles.

#### Utilisez HTTPS

{{Glossary("HTTPS")}} est la version chiffrée de {{Glossary("HTTP")}}. Vous devriez alimenter vos serveurs Web en utilisant HTTPS chaque fois que c'est possible :

1.  HTTPS réduit les risques d'altération du contenu distant lors du transfert,
2.  HTTPS empêche le contenu intégré d'accéder à celui du document parent, et inversement.

L'utilisation de HTTPS nécessite un certificat de sécurité, ce qui peut être coûteux (bien que [Let's Encrypt](https://letsencrypt.org/) facilite les choses) — si vous ne pouvez pas en obtenir un, vous pouvez charger votre document parent sur le serveur en HTTP. Cependant, en raison de la deuxième fonctionnalité de HTTPS indiquée ci-dessus, _et dans ce cas les histoires de coût n'interviennent plus, vous ne devez jamais intégrer du contenu tierce partie avec HTTP_ (dans le meilleur des cas, le navigateur Web de votre utilisateur lui affichera un avertissement effrayant). Toutes les sociétés sérieuses, rendant leur contenu disponible pour une intégration via un `<iframe>`, le rendront disponible avec HTTPS — regardez les URLs à l'intérieur de l'attribut `src` de `<iframe>` lorsque vous intégrez du contenu Google Maps ou YouTube, par exemple.

> **Note :** [Github pages](/fr/docs/Learn/Common_questions/Using_Github_pages) allows content to be served via HTTPS by default, so is useful for hosting content. If you are using different hosting and are not sure, ask your hosting provider about it.

#### Toujours utiliser l'attribut  `sandbox`

Pour minimiser la possibilité que des attaquants commettent des actions néfastes sur votre site Web, vous deviez donner au contenu intégré uniquement les permissions nécessaires pour qu'il fasse son travail. Bien sûr, cela est aussi valable pour votre propre contenu. Le conteneur de code, dans lequel il peut être utilisé de manière appropriée — ou pour des tests — sans pouvoir causer aucun dommage (accidentel ou malveillant) au reste de la base du code s'appelle un [sandbox](https://en.wikipedia.org/wiki/Sandbox_(computer_security)) (_bac à sable_).

Un contenu en dehors du «&nbsp;bac à sable&nbsp;» peut faire beaucoup trop de choses (exécuter du JavaScript, soumettre des formulaires, des fenêtres «&nbsp;popup&nbsp;», etc.). Par défaut, vous devez imposer toute restriction disponible avec un attribut `sandbox` sans paramètres, comme montré dans notre exemple précédent.

Si c'est absolument nécessaire, vous pouvez ajouter des permissions une à une (en tant que valeur de l'attribut `sandbox=""`) — voir l'entrée de référence {{htmlattrxref('sandbox','iframe')}} pour toutes les options disponibles. Il est important de noter que vous ne devez _jamais_ mettre à la fois les valeurs `allow-scripts` et `allow-same-origin` aux attributs de la «&nbsp;sandbox&nbsp;» — dans ce cas,, le contenu intégré pourrait contourner la politique de sécurité originelle qui empêche les sites d'exécuter des scripts et donc utiliser JavaScript pour désactiver complètement le «&nbsp;bac à sable&nbsp;».

> **Note :** Mettre le code dans le «&nbsp;bac à sable&nbsp;» n'offre aucune protection si les attaquants peuvent tromper les gens pour qu'ils visitent directement du contenu malveillant (en dehors d'un `<iframe>`). S'il y a la moindre chance que certain contenu soit malveillant (par exemple, du contenu d'utilisateur inconnu), veuillez le servir vers votre site principal à partir d'un autre {{glossary("domaine")}}.

#### Configurer les directives CSP

{{Glossary("CSP")}} est un acronyme pour «&nbsp;**[content security policy](/fr/docs/Web/Security/CSP)** » (politique de sécurité du contenu)&nbsp;; les directives CSP fournissent un [ensemble d'en‑têtes HTTP](/fr/docs/Web/Security/CSP/CSP_policy_directives) (métadonnées adressées en même temps que les pages Web quand elles sont diffusées à partir d'un serveur web) conçues pour améliorer la sécurité des documents HTML. Quand elles sont destinées à sécuriser les `<iframe>`, vous pouvez _[configurer votre serveur pour qu'il adresse une en‑tête appropriée `X-Frame-Options`](/fr/docs/Web/HTTP/X-Frame-Options)._ Elle empêchera d'autres sites Web d'intégrer votre contenu dans leurs pages (ce qui pourrait permettre le {{interwiki('wikipedia','détournement de clic')}} ou accueillir d'autres attaques)&nbsp;; c'est exactement ce que les développeurs de MDN ont fait, comme nous l'avons vu plus haut.

> **Note :** Lisez le post de Frederik Braun sur [On the X-Frame-Options Security Header](https://blog.mozilla.org/security/2013/12/12/on-the-x-frame-options-security-header/) pour plus d'informations sur le fond de ce sujet. Manifestement, une explication complète est hors des limites de cet article.

## Les éléments \<embed> et \<object>

Les éléments {{htmlelement("embed")}} et {{htmlelement("object")}} ont une fonction différente de {{htmlelement("iframe")}}} — ces éléments sont des outils d'intégration à caractère général pour importer plusieurs types de contenu externe&nbsp;; cela comprend des technologies de greffons comme Java Applets ou Flash, PDF (affichable dans le navigateur avec un greffon PDF) et même du contenu comme des vidéos, du SVG ou des images&nbsp;!

> **Note :** Un **greffon** est un logiciel qui permet d'avoir accès à des contenus que le navigateur n'est pas capable de lire de manière native.

Cependant, il est peu probable que vous utilisiez beaucoup ces éléments — les applets ne sont plus utilisés depuis des années, Flash n'est plus très apprécié pour un certain nombre de raisons (voir [Le cas «&nbsp;greffons&nbsp;»](#le_cas_«_greffons_»), ci-dessous), les PDF ont tendance à être plutôt liés qu'intégrés, et les autres contenus tels que les images et la vidéo disposent d'éléments d'intégration beaucoup plus faciles à manipuler. Les greffons et ces méthodes d'intégration sont assurément une technique traditionnelle héritée&nbsp;: nous les mentionnons principalement au cas où vous les rencontreriez dans certaines circonstances, comme des intranets ou des projets d'entreprise.

Si vous avez besoin d'intégrer du contenu de greffon, vous aurez besoin de ce minimum d'information :



|                                                                                      | {{htmlelement("embed")}}                                                          | {{htmlelement("object")}}                                                              |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| {{glossary("URL")}} du contenu à intégrer                                       | {{htmlattrxref('src','embed')}}                                                  | {{htmlattrxref('data','object')}}                                                  |
| {{glossary("type MIME", 'type de media')}} _précis_ du contenu intégré | {{htmlattrxref('type','embed')}}                                              | {{htmlattrxref('type','object')}}                                                  |
| hauteur et largeur (en pixels CSS) de la boîte contrôlée par le greffon              | {{htmlattrxref('height','embed')}} {{htmlattrxref('width','embed')}} | {{htmlattrxref('height','object')}} {{htmlattrxref('width','object')}} |
| noms et valeurs à passer en paramètre au greffon                                     | attributs adéquats avec ces noms et valeurs                                               | éléments de la simple balise {{htmlelement("param")}}, contenus dans `<object>`       |
| contenu HTML indépendant en repli en cas de ressources inaccessibles                 | non pris en charge (`<noembed>` a été abandonné)                                          | contenu dans `<object>`, après `les éléments <param>`                                         |



> **Note :** `<object>` requiert un attribut `data`, un attribut `type`, ou les deux. Si vous utilisez les deux, vous devez aussi utiliser l'attribut {{htmlattrxref('typemustmatch','object')}} (uniquement implémenté dans Firefox, au moment de la rédaction du présent document). `typemustmatch` empêche le fichier incorporé d'être exécuté avant que l'attribut `type` indique le type exact de média. `typemustmatch`  peut donc conférer d'importants avantages sur le plan de la sécurité quand vous intégrez du contenu de diverses {{glossary("origin","origines")}} (il peut empêcher un attaquant d'exécuter n'importe quel script par l'intermédiaire du greffon).

Voici un exemple utilisant l'élément {{htmlelement("embed")}} pour intégrer un film Flash (voyez ceci [en direct sur Github](http://mdn.github.io/learning-area/html/multimedia-and-embedding/other-embedding-technologies/embed-flash.html) ainsi que [le code source](https://github.com/mdn/learning-area/blob/gh-pages/html/multimedia-and-embedding/other-embedding-technologies/embed-flash.html) également):

```html
<embed src="whoosh.swf" quality="medium"
       bgcolor="#ffffff" width="550" height="400"
       name="whoosh" align="middle" allowScriptAccess="sameDomain"
       allowFullScreen="false" type="application/x-shockwave-flash"
       pluginspage="http://www.macromedia.com/go/getflashplayer">
```

Plutôt horrible, n'est-ce pas ? Le HTML généré par l'outil Adobe Flash avait tendance à être encore pire, utilisant un élément \<objet> avec un élément \<embed> intégré pour couvrir toutes les bases (voir un exemple.) Flash a même été utilisé avec succès comme contenu de repli pour la vidéo HTML5, pendant un certain temps, mais cela est de plus en plus souvent considéré comme non nécessaire.

Regardons maintenant un exemple avec `<object>`&nbsp;; il intègre un PDF dans une  (voir  [l'exemple en direct](http://mdn.github.io/learning-area/html/multimedia-and-embedding/other-embedding-technologies/object-pdf.html) et le [code source](https://github.com/mdn/learning-area/blob/gh-pages/html/multimedia-and-embedding/other-embedding-technologies/object-pdf.html))&nbsp;:

```html
<object data="mypdf.pdf" type="application/pdf"
        width="800" height="1200" typemustmatch>
  <p>Vous ne possédez pas de greffon PDF, mais vous pouvez <a href="myfile.pdf">télécharger le fichier PDF.</a></p>
</object>
```

Les PDF étaient un tremplin nécessaire entre le papier et le numérique, mais ils posent de nombreux [problèmes d'accessibilité](http://webaim.org/techniques/acrobat/acrobat) et peuvent être difficiles à lire sur de petits écrans. Ils ont encore tendance à être populaires dans certains cercles, mais il est préférable d'établir un lien vers eux pour qu'ils puissent être téléchargés ou lus sur une page séparée, plutôt que de les intégrer dans une page Web.

### Le cas «&nbsp;greffons&nbsp;»

Il était une fois des greffons qui s'étaient rendus indispensables sur le Web. Vous souvenez-vous de l'époque où vous deviez installer Adobe Flash Player juste pour regarder un film en ligne ? Et puis vous avez constamment reçu des alertes ennuyeuses pour la mise à jour de Flash Player et de votre environnement d'exécution Java. Depuis, les technologies Web sont devenues beaucoup plus robustes, et cette époque est révolue. Pour la plupart des applications, il est temps d'arrêter de diffuser du contenu dépendant de greffons et de commencer à tirer profit des technologies Web à la place.

**Mettez‑vous à portée de tout le monde**. Tout le monde a un navigateur, mais les greffons sont de plus en plus rares, surtout chez les utilisateurs mobiles. Puisque le Web est largement utilisable sans greffons, les gens préfèront aller sur les sites de vos concurrents plutôt que d'installer un greffon.

- **Offrez-vous un répit avec les [migraines d'accessibilités supplémentaires](http://webaim.org/techniques/flash/) qui proviennent de Flash et des autres greffons.**
- **Restez à l'écart des risques supplémentaires en matière de sécurité.** Adobe Flash est [notoirement](http://www.cvedetails.com/product/6761/Adobe-Flash-Player.html?vendor_id=53) non‑sûr[,](http://www.cvedetails.com/product/6761/Adobe-Flash-Player.html?vendor_id=53) même avec ses innombrables rustines. En 2015, Alex Stamos, chef de la sécurité chez Facebook, a même [demandé qu'Adobe arrête](http://www.theverge.com/2015/7/13/8948459/adobe-flash-insecure-says-facebook-cso) [Flash](http://www.theverge.com/2015/7/13/8948459/adobe-flash-insecure-says-facebook-cso):

Alors, que faire ? Si vous avez besoin d'interactivité, HTML et {{glossary("JavaScript")}} peuvent facilement faire le travail pour vous sans besoin d'applets Java ou d'une technologie ActiveX/BHO dépassée. Au lieu de compter sur Adobe Flash, utilisez la [vidéo HTML5](/fr/docs/Learn/HTML/Howto/Add_audio_or_video_content_to_a_webpage) pour vos besoins en médias, [SVG](/fr/docs/Learn/HTML/Howto/Add_vector_image_to_a_webpage) pour les graphiques vectoriels et [Canvas](/fr/docs/Web/API/Canvas_API/Tutorial) pour les images et animations complexes. [Peter Elst écrivait déjà il y a quelques années](https://plus.google.com/+PeterElst/posts/P5t4pFhptvp) qu'Adobe Flash est rarement le bon outil pour le travail, sauf pour les jeux spécialisés et les applications d'affaires. Quant à ActiveX, même le navigateur{{glossary("Microsoft Edge", "Edge")}} de Microsoft ne le prend plus en charge.

## Résumé

Le problème de l'intégration de contenus tiers dans des documents web peut rapidement devenir très complexe&nbsp;: dans cet article nous avons donc essayé de le présenter de manière simple et classique — en espérant la méthode pertinente même si elle touche à certaines fonctionnalités parmi les plus avancées des techniques impliquées. Pour commencer, il est peu probable que vous utilisiez l'intégration pour autre chose que l'intégration de contenu tiers de cartes ou vidéos dans vos pages. L'expérience grandissant, il est vraisemblable que vous lui trouverez d'autres utilisations.

D'autres techniques impliquent l'intégration de contenu externe en plus de celles discutées ici. Nous en avons vu dans des articles précédents, comme {{htmlelement("video")}}}, {{htmlelement("audio")}}, et {{htmlelement("img")}}}, mais il y en a d'autres à découvrir, comme {{htmlelement("canvas")}} pour les graphiques 2D et 3D générés en JavaScript, et {{htmlelement("svg")}} pour intégrer des graphiques vectoriels. Nous verrons SVG dans le prochain article de ce module.



{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Video_and_audio_content", "Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web", "Learn/HTML/Multimedia_and_embedding")}}



## Dans ce module

- [Images en HTML](/fr/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)
- [Contenus audio et Vidéo](/fr/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
- [De \<object> à \<iframe> — autres techniques d'intégration](/fr/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies)
- [Ajout de graphiques vectoriels dans le Web](/fr/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web)
- [Images adaptatives](/fr/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
- [Écrans d'accueil Mozilla](/fr/docs/Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page)
