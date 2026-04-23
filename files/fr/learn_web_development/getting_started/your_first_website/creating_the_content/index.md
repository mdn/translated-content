---
title: "HTML : Créer le contenu"
short-title: Créer le contenu
slug: Learn_web_development/Getting_started/Your_first_website/Creating_the_content
original_slug: Learn/Getting_started_with_the_web/HTML_basics
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like", "Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website")}}

HTML (pour <i lang="en">HyperText Markup Language</i> en anglais, qu'on peut traduire en «&nbsp;langage de balisage hypertexte&nbsp;») est le langage utilisé pour structurer une page web et son contenu. On peut par exemple organiser le contenu en un ensemble de paragraphes, une liste d'éléments, utiliser des images ou des tableaux de données. Dans cet article, nous verrons les notions de base pour comprendre HTML et ses fonctionnalités.

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Connaissance de base de votre système d'exploitation, des logiciels essentiels pour créer un site web, et du système de fichiers.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs d'apprentissage&nbsp;:</th>
      <td>
        <ul>
          <li>Le but et la fonction de HTML.</li>
          <li>Les parties de base de la syntaxe HTML&nbsp;: balises ouvrantes et fermantes, éléments, attributs, head, body.</li>
          <li>Les éléments HTML courants, y compris les paragraphes, titres, images, listes et liens.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Qu'est-ce que HTML&nbsp;?

HTML est _un langage de balisage_ qui définit la structure du contenu. Un document HTML est une suite d'{{Glossary("element", "éléments")}} utilisés pour encadrer (ou envelopper) le contenu textuel afin de définir sa structure et de lui faire adopter un certain comportement.

Prenons un exemple — le contenu suivant sera affiché sur la même ligne lorsqu'il sera affiché sur une page web, car il n'est pas structuré de quelque manière que ce soit&nbsp;:

```plain
Instructions de la vie :
Manger
Dormir
Répéter
```

Si nous enveloppons ce contenu avec les éléments HTML suivants, nous pouvons transformer cette seule ligne en un paragraphe ({{htmlelement("p")}}) et trois puces ({{htmlelement("li")}})&nbsp;:

```html live-sample___basic-html
<p>Instructions de la vie&nbsp;:</p>

<ul>
  <li>Manger</li>
  <li>Dormir</li>
  <li>Recommencer</li>
</ul>
```

Ce code HTML s'affichera ainsi dans un navigateur web&nbsp;:

{{EmbedLiveSample("basic-html", "100%", "140px")}}

En plus de structurer du texte, HTML a de nombreux autres usages&nbsp;: faire en sorte que du texte ou des images mènent à d'autres pages web, intégrer des images ou des vidéos, créer des tableaux de données, etc.

## Créer votre premier document HTML

Voyons comment les éléments individuels sont combinés pour former une page HTML. Dans cette section, vous allez créer un fichier HTML de base et examiner sa composition.

1. Dans votre dossier `projets-web`, créez un nouveau dossier nommé `mon-premier-site`.
2. À l'intérieur de `mon-premier-site`, créez un nouveau fichier appelé `index.html`, et insérez-y le code suivant exactement comme indiqué&nbsp;:

   ```html
   <!doctype html>
   <html lang="fr">
     <head>
       <meta charset="utf-8" />
       <meta name="viewport" content="width=device-width" />
       <title>Ma page de test</title>
     </head>
     <body>
       <img src="" alt="Mon image de test" />
     </body>
   </html>
   ```

Voici ce que nous avons&nbsp;:

- `<!doctype html>`&nbsp;: Le [doctype](/fr/docs/Glossary/Doctype) est un préambule obligatoire. Aux débuts de HTML (vers 1991/92), les doctypes servaient de liens vers des ensembles de règles qu'une page HTML devait suivre pour être considérée comme correcte, ce qui pouvait permettre une vérification automatique des erreurs et d'autres fonctionnalités utiles. Aujourd'hui, ils ne servent plus à grand-chose et sont simplement nécessaires pour que votre document se comporte correctement. C'est tout ce que vous devez savoir pour l'instant.
- `<html></html>`&nbsp;: L'élément {{htmlelement("html")}} englobe tout le contenu de la page et est parfois appelé **élément racine**. Il inclut aussi l'{{glossary("attribute", "attribut")}} `lang`, qui définit la langue principale du document.
- `<head></head>`&nbsp;: L'élément {{htmlelement("head")}} sert de conteneur pour tout ce que vous souhaitez inclure dans la page HTML qui _n'est pas_ du contenu affiché aux visiteur·euse·s. Cela inclut par exemple des {{Glossary("keyword", "mots-clés")}} et une description de la page pour les résultats de recherche, du {{glossary("CSS")}} pour la mise en forme, des déclarations d'encodage de caractères, etc.
- `<meta charset="utf-8">`&nbsp;: Cet élément définit l'encodage de caractères que votre document doit utiliser, à savoir [UTF-8](/fr/docs/Glossary/UTF-8), qui inclut la plupart des caractères de la grande majorité des langues écrites. Il peut donc gérer tout contenu textuel que vous pourriez y placer. Il n'y a aucune raison de ne pas le définir, cela permet d'éviter certains problèmes plus tard.
- `<meta name="viewport" content="width=device-width">`&nbsp;: Cet [élément viewport](/fr/docs/Web/CSS/Guides/CSSOM_view/Viewport_concepts#zones_daffichage_sur_mobiles) garantit que la page s'affiche à la largeur de la zone d'affichage du navigateur, empêchant les navigateurs mobiles d'afficher des pages plus larges que la zone d'affichage puis de les réduire.
- `<title></title>`&nbsp;: L'élément {{htmlelement("title")}} définit le titre de votre page, qui apparaît dans l'onglet du navigateur où la page est chargée. Il sert aussi à décrire la page lorsqu'on l'ajoute aux favoris.
- `<body></body>`&nbsp;: L'élément {{htmlelement("body")}} contient _tout_ le contenu que vous souhaitez afficher aux utilisateur·ice·s web lorsqu'ils visitent votre page, qu'il s'agisse de texte, d'images, de vidéos, de jeux, de pistes audio, etc. Pour l'instant, il ne contient qu'un seul élément `<img>`, mais nous ajouterons plus de contenu par la suite.

> [!NOTE]
> La plupart des éléments HTML se composent d'une **balise ouvrante** (par exemple, `<body>`), suivie du contenu de l'élément, puis d'une **balise fermante** (par exemple, `</body>`). Certains éléments HTML possèdent aussi des **attributs**, qui contiennent des réglages ou des informations supplémentaires sur l'élément — voyez par exemple `charset`, `name` et `src` dans notre exemple de code.

## Images

Revenons sur l'élément {{htmlelement("img")}}&nbsp;:

```html
<img src="" alt="Mon image de test" />
```

Cela permet d'intégrer une image dans notre page à l'endroit où elle apparaît. Cela se fait via l'attribut `src` (source), qui contient le chemin vers le fichier image à intégrer.

Nous avons également inclus un attribut `alt` (alternatif). Dans l'[attribut `alt`](/fr/docs/Web/HTML/Reference/Elements/img#rédiger_des_descriptions_alternatives_pertinentes), vous indiquez un texte descriptif pour les personnes qui ne peuvent pas voir l'image, pour les raisons suivantes&nbsp;:

1. Elles sont en situation de handicap visuel. Les utilisateur·ice·s avec un handicap visuel important utilisent souvent des outils appelés lecteurs d'écran qui lisent le texte alternatif à voix haute.
2. Un problème empêche l'affichage de l'image. Si l'attribut `src` ne contient pas un chemin valide vers une image, le texte alternatif sera affiché à la place&nbsp;:

![Les mots : mon image de test](alt-text-example.png)

Le texte alternatif que vous écrivez doit fournir suffisamment d'informations à la lectrice ou au lecteur pour qu'il·elle comprenne ce que l'image représente. Dans cet exemple, notre texte actuel «&nbsp;Mon image de test&nbsp;» n'est pas idéal car il n'apporte aucune information descriptive sur l'image. Une bien meilleure alternative pour notre logo Firefox serait «&nbsp;Le logo de Firefox&nbsp;: un renard enflammé entourant la Terre&nbsp;».

> [!NOTE]
> Les éléments comme `<img>` n'ont pas de contenu ni de balise fermante, on les appelle donc des éléments **vides** (ou **{{glossary("void element")}}**). Ils sont parfois écrits avec une **barre oblique finale** à la fin de leur unique balise (`<img />`), mais cela reste optionnel.

Affichons maintenant votre image.

1. Dans le dossier `mon-premier-site`, créez un nouveau dossier appelé `images` et placez-y l'image que vous avez choisie à l'étape précédente.
2. Dans la valeur de l'attribut `src` de la balise `<img>`, indiquez le chemin vers votre image. Elle se trouve dans un dossier appelé `images`, qui est dans le même répertoire que votre fichier `index.html`, donc le chemin sera `images/` suivi du nom de votre image. Par exemple, si votre image s'appelle `firefox-icon.png`, votre attribut `src` ressemblera à ceci&nbsp;: `src="images/firefox-icon.png"`.
3. Remplacez la valeur de l'attribut `alt` — «&nbsp;Mon image de test&nbsp;» — par un texte qui décrit mieux votre image.
4. Ouvrez votre fichier `index.html` dans un navigateur web. Vous devriez voir votre image s'afficher. Si ce n'est pas le cas, vérifiez votre élément `<img>` avec notre code&nbsp;: assurez-vous qu'il ne manque aucune partie de la syntaxe, comme les guillemets. Vérifiez aussi que le nom du fichier image est correct.

Si l'image est très grande et ne rentre pas à l'écran, ne vous inquiétez pas. Nous corrigerons ce problème dans l'article suivant.

> [!NOTE]
> Pour en savoir plus sur l'utilisation de l'attribut `alt` pour les images dans différentes situations, consultez notre [tutoriel sur l'accessibilité des contenus multimédias](/fr/docs/Learn_web_development/Core/Accessibility/Multimedia) et [l'arbre de décision pour l'attribut alt <sup>(angl.)</sup>](https://www.w3.org/WAI/tutorials/images/decision-tree/).

## Baliser du texte

Cette section décrira certains des éléments HTML essentiels pour baliser et structurer le texte d'un document.

> [!NOTE]
> Le parcours Scrimba [Les bases du langage HTML sémantique <sup>(angl.)</sup>](https://scrimba.com/the-frontend-developer-career-path-c0j/~0xid?via=mdn) de Scrimba <sup>[partenaire d'apprentissage MDN](/fr/docs/MDN/Writing_guidelines/Learning_content#liens_partenaires_et_intégrations)</sup> est une leçon interactive qui fournit une description utile de HTML, en insistant particulièrement sur l'importance de l'aspect _sémantique_.

### Titres

Les éléments de titre permettent d'indiquer les parties du contenu qui sont des titres ou des sous-titres. De la même façon qu'un livre peut avoir un titre principal, des titres de chapitre, des sous-titres, un document HTML peut en avoir également. HTML contient 6 niveaux de titre {{htmlelement("Heading_Elements", "&lt;h1&gt;-&lt;h6&gt;")}}, même si on en utilisera généralement 3 à 4 au plus&nbsp;:

```html
<!-- 4 niveaux de titres : -->
<h1>Mon titre principal</h1>
<h2>Mon titre de deuxième niveau</h2>
<h3>Mon sous-titre</h3>
<h4>Mon sous-sous-titre</h4>
```

> [!NOTE]
> En HTML, tout ce qui est écrit entre `<!--` et `-->` est un **commentaire HTML**. Le navigateur ignore les commentaires lorsqu'il affiche le document. Autrement dit, ce qui est écrit en commentaire est uniquement visible dans le code et pas sur la page. Les commentaires permettent d'ajouter des notes utiles à propos du code ou de la logique.

Essayez maintenant d'ajouter un titre pertinent à votre page HTML avant l'élément {{htmlelement("img")}}. Sauvegardez le fichier et observez le dans un navigateur pour voir l'effet.

### Paragraphes

Les éléments {{htmlelement("p")}} servent à contenir des paragraphes de texte&nbsp;; vous les utiliserez fréquemment pour baliser le contenu textuel ordinaire&nbsp;:

```html
<p>Voici un paragraphe simple</p>
```

Ajoutez votre texte d'exemple du précédent chapitre dans un ou plusieurs paragraphes, placés juste en dessous de votre élément {{htmlelement("img")}}. Enregistrez et affichez votre page dans un navigateur.

### Listes

Une bonne partie du contenu web prend la forme de listes. HTML possède des éléments dédiés. Baliser une liste se fait toujours avec au moins deux éléments. Les types de liste les plus fréquemment utilisés sont les listes ordonnées et les listes non-ordonnées&nbsp;:

1. **Listes non ordonnées**&nbsp;: utilisées pour les listes où l'ordre des éléments n'a pas d'importance, comme une liste de courses. Celles-ci sont enveloppées dans un élément {{htmlelement("ul")}}.
2. **Listes ordonnées**&nbsp;: utilisées pour les listes où l'ordre des éléments a de l'importance, comme une liste d'instructions de cuisine dans une recette. Celles-ci sont enveloppées dans un élément {{htmlelement("ol")}}.

Chaque élément d'une liste est placé dans un élément {{htmlelement("li")}}.

Ainsi, si on veut qu'une partie de notre paragraphe devienne une liste, à la place de&nbsp;:

```html
<p>
  À Mozilla, nous formons une communauté de bidouilleuses, concepteurs,
  constructrices qui travaillent ensemble…
</p>
```

On pourra écrire&nbsp;:

```html
<p>À Mozilla, nous formons une communauté de</p>

<ul>
  <li>Bidouilleuses</li>
  <li>Concepteurs</li>
  <li>Constructrices</li>
</ul>

<p>qui travaillent ensemble…</p>
```

Essayez d'ajouter une liste ordonnée ou non-ordonnée à votre page d'exemple.

## Créer des liens

Les liens sont importants, ce sont eux qui forment la toile qu'est le Web&nbsp;! Pour ajouter un lien, on utilisera un élément {{htmlelement("a")}} («&nbsp;a&nbsp;» correspondant à «&nbsp;ancre&nbsp;»). Pour placer un lien dans votre paragraphe, suivez les étapes suivantes&nbsp;:

1. Identifiez le texte voulu (ici nous prendrons le texte «&nbsp;Manifeste Mozilla&nbsp;»).
2. Entourez-le avec les balises ouvrantes et fermantes d'un élément {{htmlelement("a")}} comme suit&nbsp;:

   ```html
   <a>Manifeste Mozilla</a>
   ```

3. Ajoutez un attribut `href` à l'élément {{htmlelement("a")}}&nbsp;:

   ```html
   <a href="">Manifeste Mozilla</a>
   ```

4. Renseignez la valeur de cet attribut avec l'adresse web vers laquelle vous voulez créer le lien&nbsp;:

   ```html
   <a href="https://www.mozilla.org/fr/about/manifesto/">Manifeste Mozilla</a>
   ```

Attention, vous pourriez obtenir des résultats inattendus si vous omettez la partie `https://` ou `http://`, qui indique le _protocole_, au début de l'adresse. Après avoir créé un lien, cliquez dessus pour vous assurer qu'il pointe à l'endroit voulu.

> [!NOTE]
> `href` peut sembler un peu obscure comme nom d'attribut&nbsp;: il signifie <i lang="en">hypertext reference</i> soit «**réf**érence **h**ypertexte ».

Ajoutez un lien à votre page si ça n'est pas déjà fait.

## Conclusion

Si vous avez suivi l'ensemble des instructions de cet article, vous devriez obtenir une page qui ressemble à celle-ci (vous pouvez aussi [la voir ici <sup>(angl)</sup>](https://mdn.github.io/beginner-html-site/))&nbsp;:

![Une capture d'écran d'une page web avec le logo de Firefox, un titre qui dit "Mozilla est cool" en anglais et deux paragraphes de texte de remplissage.](finished-test-page-small.png)

Si vous coincez, vous pouvez toujours comparer votre travail avec [le code de notre exemple finalisé sur GitHub <sup>(angl)</sup>](https://github.com/mdn/beginner-html-site/blob/gh-pages/index.html).

Nous n'avons fait qu'effleurer la surface de HTML. Vous en apprendrez beaucoup plus dans notre module principal [Structurer le contenu avec HTML](/fr/docs/Learn_web_development/Core/Structuring_content) plus loin dans le cours.

## Voir aussi

- [Apprendre HTML et CSS <sup>(angl.)</sup>](https://scrimba.com/learn-html-and-css-c0p?via=mdn) sur Scrimba <sup>[Partenaire d'apprentissage MDN](/fr/docs/MDN/Writing_guidelines/Learning_content#liens_partenaires_et_intégrations)</sup>
  - : Le cours [_Apprendre HTML et CSS_ <sup>(angl.)</sup>](https://scrimba.com?via=mdn) de Scrimba vous enseigne HTML et CSS à travers la création et la mise en ligne de cinq projets concrets, avec des leçons interactives et des défis ludiques animés par des formateur·ice·s expérimenté·e·s.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like", "Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website")}}
