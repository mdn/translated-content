---
title: "HTML : une bonne base pour l'accessibilité"
short-title: HTML accessible
slug: Learn_web_development/Core/Accessibility/HTML
l10n:
  sourceCommit: 306f0d17c10c4bfa8179b81fe676102ea0b0b6fa
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Tooling","Learn_web_development/Core/Accessibility/Test_your_skills/HTML", "Learn_web_development/Core/Accessibility")}}

Une grande partie du contenu web peut être rendue accessible simplement en s'assurant que les éléments Hypertext Markup Language corrects sont utilisés pour le bon objectif à tout moment. Cet article examine en détail comment HTML peut être utilisé pour garantir une accessibilité maximale.

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>Être familier avec <a href="/fr/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/fr/docs/Learn_web_development/Core/Styling_basics">CSS</a>, et avoir une <a href="/fr/docs/Learn_web_development/Core/Accessibility/What_is_accessibility">compréhension de base des concepts d'accessibilité</a>.</td>
    </tr>
    <tr>
      <th scope="row">Objectifs d'apprentissage&nbsp;:</th>
      <td>
        <ul>
          <li>Utiliser le HTML sémantique, aussi appelé «&nbsp;le bon élément pour le bon objectif&nbsp;», car le navigateur fournit de nombreux mécanismes d'accessibilité intégrés.</li>
          <li>Les bonnes pratiques en matière d'accessibilité, telles que le texte alternatif, un bon texte de lien, les étiquettes de formulaire, ainsi que les en-têtes et la portée des lignes et colonnes de tableau.</li>
          <li>Utiliser un langage simple et clair, éviter autant que possible l'argot et les abréviations, et fournir des définitions lorsque ce n'est pas possible.</li>
          <li>Le concept et la pratique de l'accessibilité au clavier.</li>
          <li>L'importance de l'ordre des sources.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## HTML et accessibilité

Au fur et à mesure que vous apprenez le HTML — que vous lisez davantage de ressources, que vous regardez plus d'exemples, etc. — vous constatez un thème récurrent&nbsp;: l'importance d'utiliser du HTML sémantique (parfois appelé POSH, ou Plain Old Semantic HTML). Cela signifie utiliser les éléments HTML corrects pour leur objectif prévu autant que possible.

Vous pouvez vous demander pourquoi c'est si important. Après tout, vous pouvez utiliser une combinaison de CSS et de JavaScript pour faire fonctionner n'importe quel élément HTML de la manière que vous souhaitez. Par exemple, un bouton de lecture pour une vidéo sur votre site peut être codé ainsi&nbsp;:

```html
<div>Lire la vidéo</div>
```

Mais comme vous le voyez en détail plus loin, il est beaucoup plus sensé d'utiliser le bon élément à cet effet&nbsp;:

```html
<button>Lire la vidéo</button>
```

Le HTML sémantique ne prend pas plus de temps à écrire que du balisage non sémantique (mauvais) si vous le faites de manière cohérente dès le début de votre projet. Mieux encore, le balisage sémantique présente d'autres avantages au-delà de l'accessibilité&nbsp;:

1. **Facile à développer avec** — comme mentionné ci-dessus, vous obtenez certaines fonctionnalités gratuitement, et c'est indiscutablement plus compréhensible.
2. **Meilleur sur mobile** — le HTML sémantique est probablement plus léger en taille de fichier que le code spaghetti non sémantique, et plus facile à rendre réactif.
3. **Bon pour le SEO** — les moteurs de recherche accordent plus d'importance aux mots-clés dans les titres, les liens, etc. qu'aux mots-clés inclus dans des `<div>` non sémantiques, etc., donc vos documents sont plus facilement trouvables par les utilisateur·ice·s.

Passons maintenant à l'examen du HTML accessible plus en détail.

## Bonne sémantique

Nous avons déjà parlé de l'importance d'une sémantique appropriée et de la raison pour laquelle nous devons utiliser le bon élément HTML pour le travail. Cela ne peut pas être ignoré, car c'est l'un des principaux endroits où l'accessibilité est gravement compromise si elle n'est pas correctement gérée.

Sur le web, la vérité est que les gens font parfois des choses très étranges avec le balisage HTML. Souvent, l'utilisation incorrecte du HTML est due à des pratiques héritées qui n'ont pas encore disparu, mais parfois cela se produit parce que les auteur·ice·s ne savent pas mieux faire. Quoi qu'il en soit, vous devez remplacer le mauvais code par un bon balisage sémantique autant que possible, à la fois dans les pages HTML statiques et dans le HTML généré dynamiquement à partir de code [côté serveur](/fr/docs/Learn_web_development/Extensions/Server-side) ou de [cadriciels JavaScript côté client](/fr/docs/Learn_web_development/Core/Frameworks_libraries) tels que React.

Parfois, vous ne pouvez pas vous débarrasser d'un balisage médiocre — vos pages peuvent dépendre de code côté serveur ou de composants web/de cadriciel que vous ne contrôlez pas, ou vous pouvez avoir du contenu tiers sur votre page (comme des bannières publicitaires).

Le but n'est pas «&nbsp;tout ou rien&nbsp;»&nbsp;; chaque amélioration que vous apportez contribue à l'accessibilité.

### Utiliser du contenu textuel bien structuré

L'une des meilleures aides à l'accessibilité pour un·e utilisateur·ice qui utilise un lecteur d'écran est une excellente structure textuelle avec des titres, des paragraphes, des listes, etc. Un bon exemple sémantique peut ressembler à ceci&nbsp;:

```html example-good
<h1>Mon titre</h1>

<p>Voici la première section de mon document.</p>

<p>J'ajoute également un autre paragraphe ici.</p>

<ol>
  <li>Voici</li>
  <li>une liste à</li>
  <li>lire</li>
</ol>

<h2>Mon sous-titre</h2>

<p>
  Voici la première sous-section de mon document. J'aimerais que les gens
  puissent trouver ce contenu !
</p>

<h2>Mon deuxième sous-titre</h2>

<p>
  Voici la deuxième sous-section de mon contenu, que je trouve plus intéressante
  que la précédente.
</p>
```

Nous avons préparé une version avec un texte plus long que vous pouvez essayer avec un lecteur d'écran (voir [good-semantics.html <sup>(angl.)</sup>](https://mdn.github.io/learning-area/accessibility/html/good-semantics.html)). Si vous essayez de naviguer dans cette page, vous constatez que la navigation est assez facile&nbsp;:

1. Le lecteur d'écran lit chaque titre au fil de votre progression dans le contenu et vous indique s'il s'agit d'un titre, d'un paragraphe, etc.
2. Il s'arrête après chaque élément, ce qui vous permet d'avancer à votre rythme.
3. Dans de nombreux lecteurs d'écran, vous pouvez passer au titre suivant ou précédent.
4. Dans de nombreux lecteurs d'écran, vous pouvez aussi afficher la liste de tous les titres et vous en servir comme d'une table des matières pratique pour trouver un contenu précis.

Les gens écrivent parfois des titres, des paragraphes, etc. en utilisant des sauts de ligne et en ajoutant des éléments HTML uniquement pour la mise en forme, comme ceci&nbsp;:

```html example-bad
<span style="font-size: 3em">Mon titre</span> <br /><br />
Voici la première section de mon document.
<br /><br />
J'ajoute également un autre paragraphe ici.
<br /><br />
1. Voici
<br /><br />
2. une liste à
<br /><br />
3. lire
<br /><br />
<span style="font-size: 2.5em">Mon sous-titre</span>
<br /><br />
Voici la première sous-section de mon document. J'aimerais que les gens puissent
trouver ce contenu !
<br /><br />
<span style="font-size: 2.5em">Mon deuxième sous-titre</span>
<br /><br />
Voici la deuxième sous-section de mon contenu. Je la trouve plus intéressante
que la précédente.
```

Si vous essayez notre version plus longue avec un lecteur d'écran (voir [bad-semantics.html <sup>(angl.)</sup>](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html)), l'expérience n'est pas très bonne — le lecteur d'écran ne dispose d'aucun repère, vous ne pouvez donc pas obtenir de table des matières utile, et toute la page est considérée comme un seul bloc gigantesque, lu d'une traite.

Il existe aussi d'autres problèmes que ceux liés à l'accessibilité — il est par exemple plus difficile de mettre en forme le contenu avec CSS ou de le manipuler avec JavaScript, car aucun élément ne peut servir de sélecteur.

### Utiliser un langage clair

Le langage que vous utilisez peut également influer sur l'accessibilité. En général, utilisez un langage clair, qui n'est pas trop complexe et qui n'emploie pas de jargon ou d'argot inutile. Cela profite non seulement aux personnes ayant un handicap cognitif ou un autre handicap&nbsp;; cela profite aussi aux personnes qui ne lisent pas dans leur langue maternelle, aux jeunes…, à tout le monde, en fait&nbsp;! En outre, essayez d'éviter les termes et les caractères que le lecteur d'écran ne lit pas clairement. Par exemple&nbsp;:

- N'utilisez pas de tirets si vous pouvez les éviter. Au lieu d'écrire 5-7, écrivez 5 à 7.
- Développez les abréviations — au lieu d'écrire janv, écrivez janvier.
- Développez les sigles au moins une ou deux fois, puis utilisez la balise [`<abbr>`](/fr/docs/Web/HTML/Reference/Elements/abbr) pour les décrire.

### Structurer logiquement les sections de la page

Utilisez les [éléments de sectionnement](/fr/docs/Web/HTML/Reference/Elements#contenu_sectionnant) appropriés pour structurer vos pages web, par exemple la navigation ({{HTMLElement("nav")}}), le pied de page ({{HTMLElement("footer")}}) et les unités de contenu répétées ({{HTMLElement("article")}}). Ces éléments apportent une sémantique supplémentaire aux lecteurs d'écran (et aux autres outils), qui peuvent ainsi fournir des indications aux utilisateur·ice·s sur le contenu parcouru.

Par exemple, une structure de contenu moderne peut ressembler à ceci&nbsp;:

```html
<header>
  <h1>En-tête</h1>
</header>

<nav>
  <!-- navigation principale ici -->
</nav>

<!-- Voici le contenu principal de notre page -->
<main>
  <!-- Il contient un article -->
  <article>
    <h2>Titre de l'article</h2>

    <!-- contenu de l'article ici -->
  </article>

  <aside>
    <h2>Contenu associé</h2>

    <!-- contenu complémentaire ici -->
  </aside>
</main>

<!-- Et voici le pied de page principal, utilisé sur toutes les pages de notre site web -->

<footer>
  <!-- contenu du pied de page ici -->
</footer>
```

Vous trouverez un [exemple complet ici <sup>(angl.)</sup>](https://mdn.github.io/learning-area/html/introduction-to-html/document_and_website_structure/).

En plus d'avoir une bonne sémantique et une mise en page attrayante, votre contenu doit suivre un ordre logique dans le code source — vous pouvez toujours le placer où vous le souhaitez avec CSS par la suite, mais commencez par choisir le bon ordre dans le code source, afin que le contenu lu aux utilisateur·ice·s qui utilisent un lecteur d'écran soit cohérent.

### Utiliser des contrôles d'interface utilisateur sémantiques lorsque c'est possible

Par contrôles d'interface utilisateur, nous entendons les principales parties des documents web avec lesquelles les utilisateur·ice·s interagissent — le plus souvent, les boutons, les liens et les contrôles de formulaire. Dans cette section, nous examinons les principaux aspects d'accessibilité à prendre en compte lors de la création de ces contrôles. Les articles suivants sur WAI-ARIA et le contenu multimédia abordent d'autres aspects de l'accessibilité des interfaces utilisateur.

Un aspect clé de l'accessibilité des contrôles d'interface utilisateur est que, par défaut, les navigateurs permettent de les manipuler au clavier. Vous pouvez essayer cela avec notre exemple [native-keyboard-accessibility.html <sup>(angl.)</sup>](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html) (voir le [code source <sup>(angl.)</sup>](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html)). Ouvrez-le dans un nouvel onglet, et essayez d'appuyer sur la touche de tabulation&nbsp;; après quelques pressions, vous voyez la sélection par tabulation commencer à passer par les différents éléments pouvant recevoir la sélection. Les éléments sélectionnés sont dotés d'un style par défaut mis en évidence dans chaque navigateur (il diffère légèrement d'un navigateur à l'autre) afin que vous puissiez voir quel élément est sélectionné.

![Trois boutons comportant respectivement les mentions « Clique ici ! », « Clique ici aussi ! » et « Et moi aussi ! ». Le troisième bouton est entouré d'un contour bleu pour indiquer qu'il est actuellement sélectionné.](button-focused-unfocused.png)

> [!NOTE]
> Vous pouvez activer une superposition qui affiche l'ordre de tabulation de la page dans vos outils de développement. Pour plus d'informations, consultez [Inspecteur d'accessibilité > Afficher l'ordre de tabulation de la page web <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#show-web-page-tabbing-order).

Vous pouvez ensuite appuyer sur Entrée/Retour pour suivre un lien sélectionné, cliquer sur un bouton (nous avons intégré du code JavaScript pour que les boutons affichent un message d'alerte) ou commencer à taper pour saisir du texte dans un champ de saisie. D'autres éléments de formulaire disposent de commandes différentes&nbsp;; par exemple, l'élément HTML {{HTMLElement("select")}} permet d'afficher ses options et de passer de l'une à l'autre à l'aide des touches fléchées haut et bas.

Vous bénéficiez essentiellement de ce comportement gratuitement, simplement en utilisant les éléments appropriés, par exemple&nbsp;:

```html example-good
<h1>Liens</h1>

<p>Ceci est un lien vers <a href="https://www.mozilla.org">Mozilla</a>.</p>

<p>
  Un autre lien, vers le
  <a href="https://developer.mozilla.org">Mozilla Developer Network</a>.
</p>

<h2>Boutons</h2>

<p>
  <button data-message="Message du premier bouton">Cliquez ici !</button>
  <button data-message="Message du deuxième bouton">Cliquez ici aussi !</button>
  <button data-message="Message du troisième bouton">Moi aussi !</button>
</p>

<h2>Formulaire</h2>

<form>
  <div>
    <label for="nom">Saisissez votre nom :</label>
    <input type="text" id="nom" name="nom" />
  </div>
  <div>
    <label for="age">Saisissez votre âge :</label>
    <input type="text" id="age" name="age" />
  </div>
  <div>
    <label for="humeur">Choisissez votre humeur :</label>
    <select id="humeur" name="humeur">
      <option>Heureux·se</option>
      <option>Triste</option>
      <option>En colère</option>
      <option>Inquiet·e</option>
    </select>
  </div>
</form>
```

Cela signifie utiliser correctement les liens, les boutons, les éléments de formulaire et les étiquettes (y compris l'élément HTML {{HTMLElement("label")}} pour les contrôles de formulaire).

Cependant, c'est un autre cas où les gens font parfois des choses étranges avec HTML. Par exemple, vous voyez parfois des boutons balisés au moyen d'éléments HTML {{HTMLElement("div")}}, par exemple&nbsp;:

```html example-bad
<div data-message="Message du premier bouton">Cliquez ici !</div>
<div data-message="Message du deuxième bouton">Cliquez ici aussi !</div>
<div data-message="Message du troisième bouton">Moi aussi !</div>
```

Mais l'utilisation d'un tel code est déconseillée — vous perdez immédiatement l'accessibilité native au clavier dont vous bénéficiez en utilisant simplement des éléments HTML {{HTMLElement("button")}}, et vous ne profitez pas non plus de la mise en forme CSS par défaut des boutons. Dans le cas rare, voire inexistant, où vous devez utiliser un élément autre qu'un bouton pour créer un bouton, utilisez le [rôle `button`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) et implémentez tous les comportements par défaut des boutons, y compris la prise en charge du clavier et de la souris.

#### Rétablir l'accessibilité au clavier

Ajouter de nouveau ces avantages demande un peu de travail (vous pouvez voir un exemple dans notre [fake-div-buttons.html <sup>(angl.)</sup>](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) exemple — voir aussi le [code source <sup>(angl.)</sup>](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html)). Ici, nous donnons à nos faux boutons `<div>` la possibilité de recevoir la sélection (y compris par tabulation) en donnant à chacun l'attribut `tabindex="0"`. Nous incluons également `role="button"` pour que les utilisateur·ice·s de lecteurs d'écran sachent qu'ils·elles peuvent sélectionner l'élément et interagir avec lui&nbsp;:

```html
<div data-message="Message du premier bouton" tabindex="0" role="button">
  Cliquez ici !
</div>
<div data-message="Message du deuxième bouton" tabindex="0" role="button">
  Cliquez ici aussi !
</div>
<div data-message="Message du troisième bouton" tabindex="0" role="button">
  Moi aussi !
</div>
```

En principe, l'attribut [`tabindex`](/fr/docs/Web/HTML/Reference/Global_attributes/tabindex) sert principalement à permettre aux éléments sélectionnables par tabulation d'avoir un ordre de tabulation personnalisé (défini par ordre numérique croissant), au lieu de les parcourir simplement dans leur ordre par défaut dans le code source. C'est presque toujours une mauvaise idée, car cela peut créer une grande confusion. Utilisez cette possibilité uniquement si vous en avez vraiment besoin, par exemple si la mise en page affiche les éléments dans un ordre visuel très différent de celui du code source et que vous voulez les faire fonctionner de façon plus logique. Il existe deux autres options pour `tabindex`&nbsp;:

- `tabindex="0"` — comme indiqué ci-dessus, cette valeur permet aux éléments qui ne sont normalement pas sélectionnables par tabulation de le devenir. C'est la valeur la plus utile de `tabindex`.
- `tabindex="-1"` — cette valeur permet de sélectionner par programmation les éléments qui ne sont normalement pas sélectionnables par tabulation, par exemple avec JavaScript ou comme cible de liens.

Bien que l'ajout ci-dessus permette d'atteindre les boutons par tabulation, il ne permet pas de les activer avec les touches Entrée/Retour. Pour cela, nous ajoutons le code JavaScript suivant&nbsp;:

```js
document.onkeydown = (e) => {
  // La touche Entrée/Retour
  if (e.key === "Enter") {
    document.activeElement.click();
  }
};
```

Ici, nous ajoutons un écouteur à l'objet `document` afin de détecter quand une touche du clavier a été enfoncée. Nous vérifions quelle touche a été enfoncée dans la propriété [`key`](/fr/docs/Web/API/KeyboardEvent/key) de l'objet d'évènement&nbsp;; si la touche enfoncée est <kbd>Entrée</kbd>/<kbd>Retour</kbd>, nous exécutons la fonction stockée dans le gestionnaire `onclick` du bouton en utilisant `document.activeElement.click()`. [`activeElement`](/fr/docs/Web/API/Document/activeElement) nous donne l'élément actuellement sélectionné sur la page.

Tout cela demande beaucoup de travail supplémentaire pour ajouter à nouveau cette fonctionnalité. D'autres problèmes sont également inévitables. **Il vaut mieux utiliser le bon élément pour la bonne tâche dès le départ.**

#### Utiliser des étiquettes textuelles pertinentes

Les étiquettes textuelles des commandes d'interface sont très utiles à tou·te·s les utilisateur·ice·s, mais il est particulièrement important de bien les choisir pour les utilisateur·ice·s en situation de handicap.

Assurez-vous que les étiquettes textuelles des boutons et des liens sont compréhensibles et distinctives. N'utilisez pas seulement «&nbsp;Cliquez ici&nbsp;» comme étiquette, car les utilisateur·ice·s de lecteurs d'écran consultent parfois une liste de boutons et de contrôles de formulaire. La capture d'écran suivante montre nos contrôles répertoriés par VoiceOver sur Mac.

![Liste des étiquettes de champs de formulaire affichées par le logiciel VoiceOver sur Mac. Cette liste contient des étiquettes dénuées de sens, telles que « bouton de menu heureux », attribuées à différents contrôles de formulaire comme un bouton, un champ de texte et un lien.](voiceover-formcontrols.png)

Assurez-vous que vos étiquettes ont du sens hors contexte, lorsqu'on les lit seules, ainsi que dans le contexte du paragraphe où elles se trouvent. Par exemple, voici un exemple de bon texte de lien&nbsp;:

```html example-good
<p>
  Les baleines sont vraiment géniales.
  <a href="whales.html">En savoir plus sur les baleines</a>.
</p>
```

mais ce texte de lien est mauvais&nbsp;:

```html example-bad
<p>
  Les baleines sont vraiment géniales. Pour en savoir plus sur les baleines,
  <a href="whales.html">cliquez ici</a>.
</p>
```

> [!NOTE]
> Vous trouverez beaucoup plus d'informations sur la création de liens et les bonnes pratiques dans notre article [Créer des liens](/fr/docs/Learn_web_development/Core/Structuring_content/Creating_links). Vous pouvez aussi consulter de bons et de mauvais exemples dans [good-links.html <sup>(angl.)</sup>](https://mdn.github.io/learning-area/accessibility/html/good-links.html) et [bad-links.html <sup>(angl.)</sup>](https://mdn.github.io/learning-area/accessibility/html/bad-links.html).

Les étiquettes de formulaire sont aussi importantes pour vous donner une indication sur ce que vous devez saisir dans chaque champ de formulaire. L'exemple suivant semble assez raisonnable&nbsp;:

```html example-bad
Saisissez votre nom : <input type="text" id="nom" name="nom" />
```

Cependant, cet exemple n'est pas très utile aux utilisateur·ice·s en situation de handicap. Rien dans l'exemple ci-dessus n'associe sans ambiguïté l'étiquette au champ de formulaire ni n'indique clairement comment le remplir si vous ne le voyez pas. Si vous accédez à ce formulaire avec certains lecteurs d'écran, vous recevez parfois uniquement une description du type «&nbsp;texte à modifier&nbsp;».

L'exemple suivant est bien meilleur&nbsp;:

```html example-good
<div>
  <label for="nom">Saisissez votre nom :</label>
  <input type="text" id="nom" name="nom" />
</div>
```

Avec un tel code, l'étiquette est clairement associée au champ&nbsp;; la description ressemble davantage à «&nbsp;Saisissez votre nom&nbsp;: texte à modifier&nbsp;».

![Une étiquette de formulaire appropriée, portant la mention « Indiquez votre nom », est associée à un champ de saisie de texte.](voiceover-good-form-label.png)

De plus, dans la plupart des navigateurs, le fait d'associer une étiquette à un champ de formulaire permet de cliquer sur cette étiquette pour sélectionner ou activer l'élément du formulaire. Cela agrandit la zone de sélection du champ, ce qui facilite sa sélection.

> [!NOTE]
> Vous pouvez voir des exemples de bonnes et de mauvaises pratiques dans [good-form.html <sup>(angl.)</sup>](https://mdn.github.io/learning-area/accessibility/html/good-form.html) et [bad-form.html <sup>(angl.)</sup>](https://mdn.github.io/learning-area/accessibility/html/bad-form.html).

Vous trouvez dans la vidéo suivante une explication claire sur l'importance d'utiliser des étiquettes de texte appropriées, ainsi que sur la manière d'identifier les problèmes liés à ces étiquettes à l'aide de[l'inspecteur d'accessibilité de Firefox <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html)&nbsp;:

{{EmbedYouTube("YhlAVlfH0rQ")}}

## Tableaux de données accessibles

Un tableau de données basique peut être créé à l'aide d'un balisage très simple, par exemple&nbsp;:

```html
<table>
  <tr>
    <td>Nom</td>
    <td>Âge</td>
    <td>Pronoms</td>
  </tr>
  <tr>
    <td>Xavier</td>
    <td>23</td>
    <td>il/lui</td>
  </tr>
  <tr>
    <td>Tina</td>
    <td>8</td>
    <td>elle/elle</td>
  </tr>
  <tr>
    <td>Sam</td>
    <td>17</td>
    <td>elle/elle</td>
  </tr>
</table>
```

Mais cela pose problème — il n'existe aucun moyen pour un·e utilisateur·ice de lecteur d'écran d'associer les lignes ou les colonnes en tant que groupes de données. Pour ce faire, vous devez savoir quelles sont les lignes d'en-tête et si elles servent d'en-têtes pour les lignes, les colonnes, etc. Cela ne peut être fait visuellement pour le tableau ci-dessus (voir [bad-table.html <sup>(angl.)</sup>](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) et essayez l'exemple vous-même).

Jetez maintenant un œil à notre [exemple de tableau de groupes punk](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/punk-bands-complete.html) — vous pouvez voir quelques aides à l'accessibilité en action ici&nbsp;:

- Les en-têtes de tableau sont définis à l'aide des éléments HTML {{HTMLElement("th")}} — vous pouvez également définir s'ils sont des en-têtes pour les lignes ou les colonnes à l'aide de l'attribut `scope`. Cela vous donne des groupes complets de données qui peuvent être consommés par les lecteurs d'écran comme des unités uniques.
- L'élément HTML {{HTMLElement("caption")}} et l'attribut `summary` de l'élément `<table>` remplissent des fonctions similaires — ils agissent comme un texte alternatif pour un tableau, donnant à un·e utilisateur·ice de lecteur d'écran un résumé rapide utile du contenu du tableau. L'élément `<caption>` est généralement privilégié, car il rend son contenu accessible aux utilisateur·ice·s voyant·e·s également, qui peuvent également le trouver utile. Vous n'avez pas vraiment besoin des deux.

> [!NOTE]
> Regardez notre article [Accessibilité des tableaux HTML](/fr/docs/Learn_web_development/Core/Structuring_content/Table_accessibility) pour plus de détails sur les tableaux de données accessibles.

## Textes alternatifs

Alors que le contenu textuel est intrinsèquement accessible, il n'en va pas nécessairement de même pour le contenu multimédia — le contenu image et vidéo ne peut pas être vu par les personnes malvoyantes, et le contenu audio ne peut pas être entendu par les personnes malentendantes. Nous couvrons le contenu vidéo et audio en détail dans l'article [Multimédia accessible](/fr/docs/Learn_web_development/Core/Accessibility/Multimedia), mais pour cet article, nous examinons l'accessibilité du humble élément HTML {{HTMLElement("img")}}.

Nous avons un exemple simple rédigé, [accessible-image.html <sup>(angl.)</sup>](https://mdn.github.io/learning-area/accessibility/html/accessible-image.html), qui présente quatre copies de la même image&nbsp;:

```html
<img src="dinosaur.png" />

<img
  src="dinosaur.png"
  alt="Un tyrannosaure rouge : un dinosaure à deux pattes debout comme un être humain, avec de petits bras, et une grosse tête avec beaucoup de dents pointues." />

<img
  src="dinosaur.png"
  alt="Un tyrannosaure rouge : un dinosaure à deux pattes debout comme un être humain, avec de petits bras, et une grosse tête avec beaucoup de dents pointues."
  title="Le dinosaure rouge de Mozilla" />

<img src="dinosaur.png" aria-labelledby="dino-label" />

<p id="dino-label">
  Un tyrannosaure rouge : un dinosaure à deux pattes debout comme un être
  humain, avec de petits bras, et une grosse tête avec beaucoup de dents
  pointues.
</p>
```

La première image, lorsqu'elle est vue par un lecteur d'écran, n'offre pas vraiment beaucoup d'aide à l'utilisateur·ice — VoiceOver, par exemple, lit «&nbsp;image, /dinosaur.png&nbsp;». Il lit le nom du fichier pour essayer de fournir une certaine aide. Dans cet exemple, l'utilisateur·ice sait au moins qu'il s'agit d'un dinosaure d'une certaine sorte, mais souvent les fichiers peuvent être téléchargés avec des noms de fichiers générés par machine (par exemple, à partir d'un appareil photo numérique) et ces noms de fichiers ne fournissent probablement aucun contexte sur le contenu de l'image.

> [!NOTE]
> C'est pourquoi vous ne devez jamais inclure de contenu textuel à l'intérieur d'une image — les lecteurs d'écran ne peuvent pas y accéder. Il y a aussi d'autres inconvénients — vous ne pouvez pas le sélectionner ni le copier/coller. Ne le faites tout simplement pas&nbsp;!

Lorsqu'un lecteur d'écran rencontre la deuxième image, il lit l'intégralité de l'attribut alt — «&nbsp;Un tyrannosaure rouge&nbsp;: un dinosaure à deux pattes debout comme un être humain, avec de petits bras, et une grosse tête avec beaucoup de dents pointues.&nbsp;».

Cette section met en évidence l'importance non seulement d'utiliser des noms de fichiers significatifs au cas où le soi-disant **texte alternatif** n'est pas disponible, mais aussi de s'assurer que le texte alternatif est fourni dans les attributs `alt` chaque fois que possible.

Notez que le contenu de l'attribut `alt` doit toujours fournir une représentation directe de l'image et de ce qu'elle transmet visuellement. Le texte alternatif doit être bref et concis et inclure toutes les informations transmises par l'image qui ne sont pas dupliquées dans le texte environnant.

Le contenu de l'attribut `alt` d'une image dépend du contexte. Par exemple, si la photo de Fluffy est un avatar à côté d'un avis sur les croquettes pour chien Yuckymeat, `alt="Fluffy"` convient. Si la photo fait partie de la page d'adoption de Fluffy de l'association de protection des animaux, incluez les informations communiquées par l'image qui sont pertinentes pour un·e futur·e parent·e de chien et qui ne sont pas répétées dans le texte environnant. Une description plus longue, comme `alt="Fluffy, un terrier tricolore au poil très court, avec une balle de tennis dans la gueule."` convient. Comme le texte environnant mentionne probablement la taille et la race de Fluffy, ne les incluez pas dans `alt`. Cependant, comme la biographie du chien ne mentionne probablement pas la longueur de son poil, ses couleurs ou ses jouets préférés, dont le parent potentiel a besoin de connaître, incluez-les. L'image se trouve-t-elle à l'extérieur, ou Fluffy porte-t-elle un collier rouge avec une laisse bleue&nbsp;? Ces détails n'ont pas d'importance pour l'adoption de l'animal et ne sont donc pas inclus. Il faut communiquer toutes les informations que l'image transmet, auxquelles un·e utilisateur·ice voyant·e peut accéder et qui sont pertinentes dans le contexte&nbsp;; rien de plus. Soyez bref, précis et utile.

Aucune connaissance personnelle ou description supplémentaire ne doit être incluse ici, car cela n'est pas utile aux personnes qui n'ont pas vu l'image auparavant. Si la balle est le jouet préféré de Fluffy ou si un·e utilisateur·ice voyant·e ne peut pas le savoir à partir de l'image, alors il ne faut pas l'inclure.

Un élément à prendre en compte est de savoir si vos images ont un sens dans votre contenu, ou si elles servent uniquement à la décoration visuelle, et n'ont donc pas de sens. Si elles sont décoratives, il vaut mieux écrire un texte vide comme valeur de l'attribut `alt` (voir [Attributs `alt` vides](#attributs_alt_vides)) ou simplement les inclure dans la page sous forme d'images d'arrière-plan CSS.

> [!NOTE]
> Lisez [Images HTML](/fr/docs/Learn_web_development/Core/Structuring_content/HTML_images) et [Images adaptatives](/fr/docs/Web/HTML/Guides/Responsive_images) pour beaucoup plus d'informations sur l'implémentation des images et les bonnes pratiques.
> Vous pouvez également consulter [Un arbre de décision pour l'attribut alt <sup>(angl.)</sup>](https://www.w3.org/WAI/tutorials/images/decision-tree/) pour apprendre à utiliser un attribut alt pour les images dans différentes situations.

Si vous souhaitez fournir des informations contextuelles supplémentaires, vous devez les placer dans le texte qui entoure l'image ou dans un attribut `title`, comme indiqué ci-dessus. Dans ce cas, la plupart des lecteurs d'écran lisent le texte alternatif, l'attribut title et le nom de fichier. De plus, les navigateurs affichent le texte title sous forme d'infobulle lorsque la souris le survole.

![Capture d'écran d'un tyrannosaure rouge avec le texte « Le dinosaure rouge de Mozilla » affiché sous forme d'infobulle au survol de la souris.](title-attribute.png)

Examinons rapidement la quatrième méthode&nbsp;:

```html
<img src="dinosaur.png" aria-labelledby="dino-label" />

<p id="dino-label">Le tyrannosaure rouge de Mozilla…</p>
```

Dans ce cas, nous n'utilisons pas du tout l'attribut `alt` — au lieu de cela, nous présentons notre description de l'image sous la forme d'un paragraphe de texte ordinaire, lui attribuons un `id`, puis utilisons l'attribut `aria-labelledby` pour faire référence à cet `id`, ce qui amène les lecteurs d'écran à utiliser ce paragraphe comme texte alternatif/étiquette pour cette image. C'est particulièrement utile si vous voulez utiliser le même texte comme étiquette pour plusieurs images — ce qui n'est pas possible avec `alt`.

> [!NOTE]
> [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) fait partie de la [spécification WAI-ARIA <sup>(angl.)</sup>](https://w3c.github.io/aria/), qui permet aux développeur·euse·s d'ajouter des sémantiques à leur balisage afin d'améliorer l'accessibilité des lecteurs d'écran si nécessaire.

### Figures et légendes de figures

HTML inclut deux éléments HTML — {{HTMLElement("figure")}} et {{HTMLElement("figcaption")}} — qui associent une figure (qui peut être de n'importe quelle sorte, pas nécessairement une image) à une légende de figure&nbsp;:

```html
<figure>
  <img
    src="dinosaur.png"
    alt="Le tyrannosaure de Mozilla"
    aria-describedby="dinodescr" />
  <figcaption id="dinodescr">
    Un tyrannosaure rouge&nbsp;: un dinosaure à deux pattes debout comme un
    humain, avec de petits bras et une grosse tête avec beaucoup de dents
    pointues.
  </figcaption>
</figure>
```

Bien que la prise en charge par les lecteurs d'écran de l'association des légendes à leurs figures soit variable, l'ajout de [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) ou de [`aria-describedby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) crée l'association si aucune n'est présente. Cela dit, la structure des éléments est utile pour la mise en forme CSS et fournit également un moyen de placer une description de l'image à côté d'elle dans la source.

### Attributs `alt` vides

```html
<h3>
  <img src="article-icon.png" alt="" />
  Tyrannosaure&nbsp;: le roi des dinosaures
</h3>
```

Il arrive qu'une image figure dans la conception d'une page alors que son objectif principal est la décoration visuelle. Vous remarquez dans l'exemple de code ci-dessus que l'attribut `alt` de l'image est vide — cela permet aux lecteurs d'écran de reconnaître l'image, sans essayer de la décrire (ils disent simplement «&nbsp;image&nbsp;» ou quelque chose de similaire).

La raison d'utiliser un attribut `alt` vide plutôt que de ne pas l'inclure est que de nombreux lecteurs d'écran annoncent l'URL entière de l'image si aucun attribut `alt` n'est fourni. Dans l'exemple ci-dessus, l'image sert de décoration visuelle au titre auquel elle est associée. Dans ce cas, et lorsqu'une image est uniquement décorative et n'a aucune valeur de contenu, vous devez inclure un attribut `alt` vide dans vos éléments `img`. Une autre solution consiste à utiliser l'attribut ARIA [`role`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles) [`role="presentation"`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role), car il empêche également les lecteurs d'écran de lire le texte alternatif.

> [!NOTE]
> Si possible, utilisez CSS pour afficher les images uniquement décoratives.

## En savoir plus sur les liens

Les liens (l'élément {{HTMLElement("a")}} avec un attribut `href`), selon la façon dont ils sont utilisés, peuvent aider ou nuire à l'accessibilité. Par défaut, les liens sont accessibles par leur apparence. Ils peuvent améliorer l'accessibilité en aidant un·e utilisateur·ice à naviguer rapidement vers différentes sections d'un document. Ils peuvent aussi nuire à l'accessibilité si leur mise en forme accessible est supprimée ou si JavaScript leur fait adopter des comportements inattendus.

### Mettre les liens en forme

Par défaut, les liens se distinguent visuellement des autres textes par leur couleur et leur [décoration de texte](/fr/docs/Web/CSS/Reference/Properties/text-decoration), les liens étant bleus et soulignés par défaut, violets et soulignés lorsqu'ils ont été visités, et dotés d'un [anneau de sélection](/fr/docs/Web/CSS/Reference/Selectors/:focus) lorsqu'ils reçoivent la sélection du clavier.

La couleur ne doit pas être utilisée comme seul moyen de distinguer les liens du contenu sans lien. La couleur du texte des liens, comme celle de tout texte, doit être sensiblement différente de celle de l'arrière-plan (un [contraste de 4.5:1](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)). De plus, les liens doivent être visuellement très différents du texte sans lien, avec une exigence de contraste minimal de 3:1 entre le texte des liens et le texte environnant, ainsi qu'entre les états par défaut, visité et sélectionné/actif, et un contraste de 4.5:1 entre toutes ces couleurs d'état et la couleur d'arrière-plan.

### Évènements `onclick`

Les balises d'ancrage détournent souvent l'évènement `onclick` pour créer de faux boutons en définissant **href** sur `"#"` ou `"javascript:void(0)"` afin d'empêcher l'actualisation de la page.

Ces valeurs entraînent un comportement inattendu lors de la copie ou du déplacement des liens, de leur ouverture dans un nouvel onglet ou une nouvelle fenêtre, de leur ajout aux signets, et lorsque JavaScript est encore en cours de téléchargement, rencontre une erreur ou est désactivé. Cela transmet également une sémantique incorrecte aux technologies d'assistance (par exemple, aux lecteurs d'écran). Dans ces cas, il est recommandé d'utiliser plutôt un élément {{HTMLElement("button")}}. En général, utilisez un élément d'ancrage uniquement pour naviguer à l'aide d'une URL appropriée.

### Liens externes et lier des ressources qui ne sont pas du HTML

Les liens qui s'ouvrent dans un nouvel onglet ou une nouvelle fenêtre avec la déclaration `target="_blank"` et les liens dont la valeur `href` pointe vers une ressource de fichier doivent inclure un indicateur sur le comportement qui se produit lorsque le lien est activé.

Les personnes malvoyantes, qui naviguent à l'aide d'une technologie de lecture d'écran ou qui présentent des troubles cognitifs, peuvent être désorientées lorsqu'un nouvel onglet, une nouvelle fenêtre ou une nouvelle application s'ouvre de façon inattendue. Les anciennes versions des logiciels de lecture d'écran peuvent même ne pas annoncer ce comportement.

#### Lien qui s'ouvre dans un nouvel onglet ou une nouvelle fenêtre

```html
<a target="_blank" href="https://www.wikipedia.org/"
  >Wikipedia (s'ouvre dans une nouvelle fenêtre)</a
>
```

#### Lien vers une ressource qui n'est pas du HTML

```html
<a target="_blank" href="2017-annual-report.ppt"
  >Rapport annuel 2017 (PowerPoint)</a
>
```

Si une icône est utilisée à la place du texte pour signifier ce type de comportement de lien, assurez-vous qu'elle inclut une [description alternative](/fr/docs/Web/HTML/Reference/Elements/img#alt).

- [WebAIM&nbsp;: liens et hypertexte - liens hypertextes <sup>(angl.)</sup>](https://webaim.org/techniques/hypertext/hypertext_links)
- [Comprendre les règles WCAG de MDN, explications de la directive 3.2](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200&nbsp;: ouvrir de nouvelles fenêtres et de nouveaux onglets à partir d'un lien uniquement lorsque cela est nécessaire | Techniques W3C pour WCAG 2.0 <sup>(angl.)</sup>](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201&nbsp;: avertir les utilisateur·ice·s à l'avance lors de l'ouverture d'une nouvelle fenêtre | Techniques W3C pour WCAG 2.0 <sup>(angl.)</sup>](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

### Skip links

Un lien d'évitement, aussi appelé lien de navigation d'évitement, est un élément `a` placé aussi près que possible de l'élément ouvrant {{HTMLElement("body")}} et qui mène au début du contenu principal de la page. Ce lien permet d'ignorer le contenu répété sur plusieurs pages d'un site web, comme l'en-tête et la navigation principale du site.

Les liens d'évitement sont particulièrement utiles aux personnes qui naviguent à l'aide de technologies d'assistance telles que le contrôle par contacteur, la commande vocale ou les baguettes buccales ou frontales, pour qui parcourir des liens répétitifs peut être une tâche laborieuse.

- [WebAIM&nbsp;: liens «&nbsp;Ignorer la navigation&nbsp;» <sup>(angl.)</sup>](https://webaim.org/techniques/skipnav/)
- [Guide pratique&nbsp;: utiliser les liens d'évitement de la navigation - The A11Y Project <sup>(angl.)</sup>](https://www.a11yproject.com/posts/skip-nav-links/)
- [Comprendre les règles WCAG de MDN, explications de la directive 2.4](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Comprendre le critère de réussite 2.4.1 | Comprendre WCAG 2.0 du W3C <sup>(angl.)</sup>](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)

### Proximité

Lorsque de nombreux éléments interactifs — y compris les ancres — sont placés à proximité visuelle les uns des autres, il convient d'insérer un espace pour les séparer. Cet espacement est utile pour les personnes souffrant de troubles de la motricité fine, qui risquent d'activer accidentellement le mauvais élément interactif lors de la navigation.

L'espacement peut être créé à l'aide de propriétés CSS telles que {{CSSxRef("margin")}}.

- [Tremblements des mains et le problème des boutons géants - Axess Lab <sup>(angl.)</sup>](https://axesslab.com/hand-tremors/)

## Résumé

Vous devez désormais maîtriser la rédaction de code HTML accessible dans la plupart des cas. Dans le prochain article, nous vous proposons quelques exercices qui vous permettent de vérifier si vous avez bien compris et assimilé toutes ces informations.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Tooling","Learn_web_development/Core/Accessibility/Test_your_skills/HTML", "Learn_web_development/Core/Accessibility")}}
