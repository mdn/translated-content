---
title: Fontes Web
slug: Learn/CSS/Styling_text/Web_fonts
translation_of: Learn/CSS/Styling_text/Web_fonts
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Styling_text/Styling_links", "Learn/CSS/Styling_text/Typesetting_a_homepage", "Learn/CSS/Styling_text")}}

Dans le premier article du module, nous avons exploré les fonctions CSS de base disponibles pour composer du texte. Dans cet article, nous allons plus loin et explorons les polices web en détail : comment télécharger des polices personnalisées en même temps que la page Web, pour donner un style plus varié et personnalisé au texte.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis :</th>
      <td>
        Connaissances informatiques de base, les bases HTML (étudiées dans l'<a
          href="/fr/docs/Learn/HTML/Introduction_to_HTML"
          >Introduction au HTML</a
        >), les bases CSS (étudiées dans
        <a href="/fr/docs/Learn/CSS/Introduction_to_CSS">Introduction à CSS</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif :</th>
      <td>
        Apprendre comment appliquer des fontes web à une page web, soit avec un
        service tierce partie, soit en écrivant vous-même le code.
      </td>
    </tr>
  </tbody>
</table>

## Rappel : familles de fontes

Comme nous l'avons vu dans [Initiation à la mise en forme du texte](/fr/docs/Learn/CSS/Styling_text/initiation-mise-en-forme-du-texte), les fontes appliquées aux HTML sont contrôlées par la propriété {{cssxref("font-family")}}. Elle accepte un ou plusieurs noms de familles de fontes et le navigateur parcourt la liste jusqu'à trouver la fonte disponible sur le système sur lequel il tourne :

```css
p {
  font-family: Helvetica, "Trebuchet MS", Verdana, sans-serif;
}
```

Ce système fonctionne bien, mais généralement, le choix des développeurs Web en matière de polices sont limités. Il n'y en a qu'une poignée dont la disponibilité soit garantie sur tous les systèmes courants — les polices dites [Web-safe](/fr/docs/Learn/CSS/Styling_text/initiation-mise-en-forme-du-texte#Polices_web_sûres). La pile de polices vous permet de préciser la police préférable, puis la police alternative sûre pour le Web, puis la police par défaut du système, mais cela induit du travail supplémentaire de tests pour s'assurer que le désign reste correct avec chaque police, etc.

## Fontes Web

Mais il y a autre chose qui fonctionne très bien, depuis la version 6 d'IE. La fonctionnalité CSS des polices Web permet de définir les fichiers de polices à télécharger avec le site Web au fur et à mesure de sa consultation ; autrement dit, tout navigateur prenant en charge les polices Web aura exactement la police précisée à sa disposition. Incroyable ! La syntaxe requise ressemble à ce qui suit.

Primo, un bloc {{cssxref("@font-face")}} est placé au début de la CSS ; il précise le ou les fichiers de fontes à télécharger :

```css
@font-face {
  font-family: "myFont";
  src: url("myFont.ttf");
}
```

Sous cette déclaration, vous pouvez utiliser le nom de la famille de polices précisé dans @font-face pour appliquer la police personnalisée où vous le voulez, normalement :

```css
html {
  font-family: "myFont", "Bitstream Vera Serif", serif;
}
```

La syntaxe peut devenir un peu plus complexe que cela, nous reviendrons sur le sujet plus bas.

Deux points important sont à garder présents à l'esprit à ce propos :

L'utilisation des polices n'est généralement pas gratuite. Vous devez payer pour les utiliser et/ou respecter d'autres conditions de licence telles que citer le créateur de la police dans le code (ou sur le site). Ne vous appropriez pas les polices et ne les utilisez pas sans donner le crédit voulu.

1.  Les navigateurs prennent en charge divers formats de polices ; donc, vous aurez besoin de plusieurs formats de polices pour une prise en charge croisée correcte des navigateurs. Par ex., la plupart des navigateurs modernes prennent en charge les formats WOFF/WOFF2 (Web Open Font Format versions 1 et 2), le plus efficace, mais les vieilles versions d'IE n'acceptent que les polices EOT (Embedded Open Type) et, même, vous pourriez avoir besoin d'inclure une version SVG de la police pour être pris en charge par les anciennes versions de l'iPhone et des navigateurs Android. Nous vous montrerons ci-dessous comment générer le code voulu.
2.  Fonts generally aren't free to use. You have to pay for them, and/or follow other license conditions such as crediting the font creator in the code (or on your site.) You shouldn't steal fonts and use them without giving proper credit.

> **Note :** La technique des polices Web est prise en charge dans Internet Explorer depuis sa version 4 !

## Apprentissage actif : un exemple de fonte web

En gardant en tête ce qui précède, construisons un exemple de police web de base à partir des premiers principes. Il est difficile de le montrer à l'aide d'un exemple direct intégré : nous aimerions donc que vous suiviez les étapes détaillées dans les paragraphes ci‑après afin d'avoir une idée du processus.

Utilisez les fichiers [web-font-start.html](https://github.com/mdn/learning-area/blob/master/css/styling-text/web-fonts/web-font-start.html) et [web-font-start.css](https://github.com/mdn/learning-area/blob/master/css/styling-text/web-fonts/web-font-start.css) comme point de départ pour ajouter votre code (voir l'[exemple en direct](http://mdn.github.io/learning-area/css/styling-text/web-fonts/web-font-start.html) aussi.) Faites une copie de ces fichiers dans un nouveau répertoire sur votre ordinateur. Dans le fichier `web-font-start.css`, vous trouverez un CSS minimal pour traiter la mise en page et la composition de base de l'exemple.

### Recherche des polices



Dans cet exemple, nous utilisons deux polices web, une pour les en-têtes et une pour le corps du texte. Pour commencer, nous devons trouver les fichiers de ces polices. Les fontes des polices sont stockées en différents formats de fichiers. Il y a généralement trois types de sites où obtenir des fontes :

- un distributeur de fontes gratuites : c'est un site de téléchargement de polices gratuites (la licence peut exiger certaines conditions, comme citer le créateur de la fonte). C'est le cas de [Font Squirrel](https://www.fontsquirrel.com/), [dafont](http://www.dafont.com/) et [Everything Fonts](https://everythingfonts.com/).
- un distributeur de fontes payantes : c'est un site qui met à disposition des fontes contre paiement, comme [fonts.com](http://www.fonts.com/) ou [myfonts.com](http://www.myfonts.com/). Vous pouvez aussi acheter directement auprès du fondeur, par exemple [Linotype](https://www.linotype.com/), [Monotype](http://www.monotype.com) ou [Exljbris](http://www.exljbris.com/).
- un service de fontes en ligne : c'est un site qui stocke et téléverse les polices à votre intention, facilitant ainsi l'ensemble du processus. Voir la section {{anch("Utiliser un service de polices en ligne")}} pour plus de détails.

Cherchons des polices de caractères ! Allez dans [Font Squirrel](https://www.fontsquirrel.com/) et choisissez deux polices — une police adaptée aux en-têtes (peut-être une belle police d'affichage de blocs avec sérifs) et une police un peu moins criarde et plus lisible pour les paragraphes. Après avoir trouvé chaque police, appuyez sur le bouton de téléchargement et enregistrez le fichier dans le même répertoire que les fichiers HTML et CSS précéemment enregistrés. Peu importe qu'il s'agisse de TTF (True Type Fonts) ou OTF (Open Type Fonts).

Dans chaque cas, décompressez le paquet de la fonte (les fontes Web sont généralement distribuées dans des fichiers ZIP contenant les fichiers de police et l'information de licence). Vous pouvez trouver plusieurs fichiers de polices dans le paquet — certaines fontes sont distribuées sous forme de familles avec plusieurs variantes disponibles, par exemple fine, moyenne, grasse, italique, italique fine, etc. Pour cet exemple, ne vous interessez qu'à un seul fichier pour chacun des deux cas.

> **Note :** Dans la partie « Find fonts » dans la colonne de droite, vous pouvez cliquer sur les diverses marques et classification pour filtrer les chois à afficher.

### Créer le code requis

Maintenant, créez le code requis (et les formats de police). Pour chaque police, suivez ces étapes :

1.  Assurez-vous d'avoir satisfait aux exigences de la licence, si vous l'utilisez dans un projet commercial et/ou Web.
2.  Allez sur le [Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator) de Fontsquirrel.
3.  Téléversez les deux fichiers de fontes avec le bouton _Upload Fonts_.
4.  Cochez la case nommée « Yes, the fonts I'm uploading are legally eligible for web embedding » (_Oui, les fontes téléversées sont légalement éligibles à une intégration web_).
5.  Cliquez sur « *Download your kit* » (_Télécharger le kit_) .

Après que le générateur a terminé le traitement, vous obtenez un fichier ZIP à télécharger — enregistrez‑le dans le même répertoire que les fichiers HTML et CSS.

### Mise en œuvre du code dans la démo

Maintenant, faites l'extraction de l'ensemble des polices web crées. Dans le répertoire d'extraction, trois éléments utiles :

- Plusieurs versions de chaque police : (par ex., `.ttf`, `.woff`, `.woff2`, etc. ; les polices exactement fournies sont mises à jour au fur et à mesure des modifications des exigences de prise en charge des navigateurs). Comme mentionné ci‑dessus, plusieurs polices sont nécessaires pour une prise en charge croisée entre navigateurs — c'est le moyen choisi par Fontsquirrel pour s'assurer que vous avez bien ce qui est nécessaire.
- Un fichier HTML de démo pour chaque police — chargez‑les dans votre navigateur pour voir ce à quoi elles ressemblent dans divers contextes d'emploi.
- Un fichier `stylesheet.css`, qui contient le code @font-face dont vous avez besoin.

Pour mettre en œuvre ces polices dans la démo, suivez ces étapes :

1.  Renommez le répertoire d'extraction avec quelque chose de simple, comme `fonts`.
2.  Ouvrez le fichier `stylesheet.css` et copiez y les deux blocs `@font-face` contenus dans le  fichier `web-font-start.css` — il faut les mettre tout en haut, avant tout élement du CSS, car les polices doivent être importées avant de pouvoir les utiliser sur votre site.
3.  Chaque fonction `url()` pointe sur un fichier de police à importer dans la CSS — assurez‑vous que les chemins vers les fichiers soient corrects, donc ajoutez  `fonts/` au début de chaque chemin (si nécessaire).
4.  Maintenant, vous pouvez vous servir de ces polices dans vos piles de fontes, tout à fait comme les polices système ou une police « web safe ». Par exemple :

    ```css
    font-family: 'zantrokeregular', serif;
    ```

Vous devriez obtenir une page de démonstration avec les belles polices implémentées ci‑dessus. Comme les diverses polices sont créées en différentes tailles, il se peut que vous deviez ajuster la taille, l'espacement, etc. pour parfaire l'aspect.

![](web-font-example.png)

> **Note :** Si vous avez des problèmes pour faire fonctionner votre travail, n'hésitez pas à comparer votre version à nos fichiers finis — voyez [web-font-finished.html](https://github.com/mdn/learning-area/blob/master/css/styling-text/web-fonts/web-font-finished.html) et [web-font-finished.css](https://github.com/mdn/learning-area/blob/master/css/styling-text/web-fonts/web-font-finished.css) (lancez l'[exemple terminé directement](http://mdn.github.io/learning-area/css/styling-text/web-fonts/web-font-finished.html)).

## Utiliser un service de polices en ligne

Les services de polices en ligne stockent et servent généralement des polices pour vous afin que vous n'ayez pas à vous soucier d'écrire le code `@font-face`, et en général, il suffit d'insérer une simple ligne ou deux de code dans votre site pour que tout fonctionne. Les exemples incluent [Typekit](https://typekit.com/) and [Cloud.typography](http://www.typography.com/cloud/welcome/). La plupart de ces services sont fondés sur l'abonnement, à l'exception notable de [Google Fonts](https://www.google.com/fonts), un service gratuit utile, en particulier pour les tests rapides et la rédaction de démos.



La plupart de ces services sont faciles à utiliser, donc nous n'en parlerons pas dans le détail. Regardons rapidement les polices de Google, pour que vous puissiez vous faire une idée. Encore une fois, utilisez des copies de `web-font-start.html` et `web-font-start.css` comme point de départ.

1.  Allez sur [Google Fonts](https://www.google.com/fonts).
2.  Utilisez les filtres sur la droite pour afficher les types de polices à choisir et retenez une paire de fontes qui vous plaisent.
3.  Pour sélectionner une famille de fontes, pressez le bouton ⊕ sur le côté.
4.  Après avoir choisi les familles de fontes, pressez la barre avec  _\[Nombre] Families Selected_ en bas de la page.
5.  Dans l'écran résultant, copiez d'abord la ligne de code HTML affichée et collez‑la dans l'en-tête de votre fichier HTML. Mettez-la au-dessus de l'élément {{htmlelement("link")}} existant, de sorte que la police soit importée avant que le navigateur essaye de l'utiliser dans la CSS.
6.  Copiez ensuite les déclarations CSS listées dans la CSS comme il convient pour appliquer la fonte personnalisée à votre HTML.

> **Note :** Vous pourrez trouver une version complétée sur [google-font.html](https://github.com/mdn/learning-area/blob/master/css/styling-text/web-fonts/google-font.html) et [google-font.css](https://github.com/mdn/learning-area/blob/master/css/styling-text/web-fonts/google-font.css), si vous avez besoin de vérifier votre travail par rapport au nôtre ([voir en direct](http://mdn.github.io/learning-area/css/styling-text/web-fonts/google-font.html)).

## @font-face plus en détail

Examinons la syntaxe générée par fontsquirrel pour `@font-face`. C'est un bloc de ce type :

```css
@font-face {
  font-family: 'ciclefina';
  src: url('fonts/cicle_fina-webfont.eot');
  src: url('fonts/cicle_fina-webfont.eot?#iefix') format('embedded-opentype'),
         url('fonts/cicle_fina-webfont.woff2') format('woff2'),
         url('fonts/cicle_fina-webfont.woff') format('woff'),
         url('fonts/cicle_fina-webfont.ttf') format('truetype'),
         url('fonts/cicle_fina-webfont.svg#ciclefina') format('svg');
  font-weight: normal;
  font-style: normal;
}
```

Elle est désignée sous le vocable « bulletproof @font-face syntax » (_syntaxe @font-face à puces garanties_), d'après un post de Paul Irish lors des débuts des succès de `@font-face` ([Bulletproof @font-face Syntax](http://www.paulirish.com/2009/bulletproof-font-face-implementation-syntax/)). Voyons les actions :

- `font-family` : cette ligne précise la référence à la police. Vous pouvez mettre cette assertion comme bon vous semble, pour autant que ce soit utilisé de manière cohérent dans la CSS.
- `src` : ces lignes indiquent les chemins vers les fichiers de fontes à importer dans la CSS (la partie `url`) et le format de chaque fichier de fonte (la partie `format`). Cette dernière partie est dans chaque cas optionnelle, mais il est utile de la déclarer car elle permet aux navigateurs de trouver la police à utiliser plus rapidement. Plusieurs déclarations peuvent être mises dans la liste, séparées par des virgules — le navigateur cherchera parmi celles-ci et utilisera la première trouvée qu'il comprend — toutefois il est préférable de mettre en tête les formats nouveaux comme WOFF2 et le plus anciens comme TTF en fin de liste. Les fontes EOT font exception — elles seront placées en tête pour corriger une paire de bogues dans les anciennes versions de IE, car IE essayera d'utiliser la première trouvée même s'il est en fait incapable de l'utiliser.
- {{cssxref("font-weight")}}/{{cssxref("font-style")}} : ces lignes définissent la graisse de la police, si elle est italique ou pas. Si vous importez plusieurs graisses d'une même police, vous pouvez indiquer quelles sont ses caractéristiques et utiliser diverses valeurs de {{cssxref("font-weight")}}/{{cssxref("font-style")}} pour faire votre choix au lieu d'appeler de noms différents les membres de la même famille. [@font-face tip: define font-weight and font-style to keep your CSS simple](http://www.456bereastreet.com/archive/201012/font-face_tip_define_font-weight_and_font-style_to_keep_your_css_simple/) (_en anglais — Astuces pour @font-face : définir la graisse et le style des fontes pour avoir des CSS simples_) par Roger Johansson montre que faire plus en détail.

> **Note :** Vous pouvez aussi définir des valeurs particulières de {{cssxref("font-variant")}} et {{cssxref("font-stretch")}} pour vos polices. Dans les navigateurs les plus récents, vous pouvez également indiquer une valeur pour {{cssxref("unicode-range")}} : c'est la plage des codes caractères dont l'utilisation est prévue — dans les navigateurs prenant en charge cette propriété, seuls les caractères indiqués seront téléchargés, ce qui réduit les volumes téléchargés non nécessaires. [Creating Custom Font Stacks with Unicode-Range](https://24ways.org/2011/creating-custom-font-stacks-with-unicode-range/) (_Création de piles de fontes personnalisées en définissant des plages unicode_) de Drew McLellan donne quelques indications utiles pour l'utilisation de cette propriété.

## Résumé

Maintenant que vous avez travaillé nos articles sur les principes fondamentaux pour composer du texte, il est temps de tester votre compréhension de la chose avec notre évaluation pour le module : composition d'une page d'accueil d'une école communale.

{{PreviousMenuNext("Learn/CSS/Styling_text/Styling_links", "Learn/CSS/Styling_text/Typesetting_a_homepage", "Learn/CSS/Styling_text")}}



## Dans ce module



- [Initiation à la mise en forme du texte](/fr/docs/Learn/CSS/Styling_text/initiation-mise-en-forme-du-texte)
- [Style de listes](/fr/docs/Learn/CSS/Styling_text/Styling_lists)
- [Mise en forme des liens](/fr/docs/Learn/CSS/Styling_text/Mise_en_forme_des_liens)
- Polices de caractères web
- [Composition d'une page d'accueil d'une école de communauté](/fr/docs/Learn/CSS/Styling_text/Typesetting_a_homepage)
