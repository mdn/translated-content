---
title: Compréhension des fondements des CSS
slug: Learn/CSS/Building_blocks/Fundamental_CSS_comprehension
tags:
  - CSS
  - Codage
  - Commentaires
  - Débutant
  - Evaluation
  - Règles
  - Style
  - Syntaxe
  - Sélecteurs
  - modèle de boîte
translation_of: Learn/CSS/Building_blocks/Fundamental_CSS_comprehension
original_slug: Apprendre/CSS/Introduction_à_CSS/Fundamental_CSS_comprehension
---
{{LearnSidebar}}{{PreviousMenu("Learn/CSS/Introduction_to_CSS/Debugging_CSS", "Apprendre/CSS/Introduction_à_CSS")}}

Beaucoup de choses ont été passées en revue dans ce module, donc il est bon d'avoir atteint la fin ! La dernière étape avant de passer à la suite est de tenter une évaluation sur les thèmes de ce module — elle comprend un certain nombre d'exercices connexes à compléter pour créer la composition finale — une carte de visite / carte de joueur / un profil de média social.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis :</th>
      <td>
        Avant de vous lancer dans cet exercice vous devez avoir déja travaillé
        l'ensemble des articles de ce module.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif :</th>
      <td>
        Tester votre compréhension des fondements de la théorie, de la syntaxe
        et des mécanismes des CSS.
      </td>
    </tr>
  </tbody>
</table>

## Point de départ

Pour demarrer cet exercice, vous devez :

- Récupérer et enregistrer le [fichier HTML de l'exercice](https://github.com/mdn/learning-area/blob/master/css/introduction-to-css/fundamental-css-comprehension/index.html) ainsi que le [fichier image associé](https://github.com/mdn/learning-area/blob/master/css/introduction-to-css/fundamental-css-comprehension/chris.jpg) dans un nouveau répertoire local sur votre ordinateur. Si vous voulez utiliser un fichier image de votre cru et mettre votre nom, vous êtes libre — assurez vous simplement que l'image soit de forme carrée.
- Enregistrez le [fichier texte des ressources de la CSS](https://github.com/mdn/learning-area/blob/master/css/introduction-to-css/fundamental-css-comprehension/style-resources.txt) — il contient un jeu de sélecteurs et de règles bruts que vous devrez étudier et combiner pour répondre à certaines parties de cet exercice.

> **Note :** À défaut, vous pouvez utiliser un site comme [JSBin](http://jsbin.com/) ou [Thimble](https://thimble.mozilla.org/) pour faire votre exercice. Collez le HTML et complétez la CSS dans un de ces éditeurs en ligne. Utilisez cet [URL](http://mdn.github.io/learning-area/css/introduction-to-css/fundamental-css-comprehension/chris.jpg) pour faire pointer l'élément `<img>` sur le fichier correspondant. Si l'éditeur en ligne que vous utilisez ne comporte pas de panneau séparé pour la CSS, mettez‑le dans un élément `<style>` dans l'élément `head` du document.

## Énoncé du projet

Avec le HTML brut et une image, vous devez écrire le CSS voulu pour composer une jolie petite carte de visite en ligne ; elle pourrait aussi peut‑être servir de carte de joueur ou de profil de média social. Les paragraphes suivants indiquent ce que vous devez faire.

Construction de base :

- Au préalable, créez un nouveau fichier dans le même répertoire que celui des fichiers HTML et image. Nommez‑le avec beaucoup d'imagination quelque chose comme `style.css`.
- Liez la CSS à votre fichier HTML par l'intermédiaire d'un élément `<link>`.
- Les deux premières règles du fichier de ressources de la CSS sont pour vous, GRATUITEMENT ! Après vous être réjoui de votre chance, copiez et collez-les au haut de votre nouveau fichier CSS. Utilisez-les comme un test pour vous assurer que la CSS sera correctement appliquée à votre HTML.
- Au-dessus des deux règles, commentez la CSS d'un court texte pour indiquer qu'il s'agit de styles généraux pour l'ensemble de la page. « Styles généraux pour la page »  fait l'affaire. Ajoutez également trois autres commentaires au bas du fichier CSS pour indiquer les styles spécifiques à la configuration du conteneur de carte, les styles propres de l'en-tête et du pied de page et les styles dédiés au contenu principal de la carte de visite. A partir de maintenant, les styles ajoutés à la CSS devront être placés à l'endroit approprié.

Considérations sur les sélecteurs et les jeux de règles founis dans le fichier des ressources CSS :

- Ensuite, regardez les quatre sélecteurs et calculez la spécificité de chacun. Notez-les quelque part où vous pourrez les retrouver plus tard, par exemple dans un commentaire en haut de votre CSS.
- Maintenant, mettez le bon sélecteur avec le bon jeu de règles ! Vous avez quatre paires sélecteurs régles qui correspondent dans les ressources CSS. Faites cela maintenant et ajoutez‑les dans le fichier de la CSS. Il faut que :

  - entre autres choses, le conteneur de carte principale ait une largeur et une hauteur fixes, une couleur de fond unie, un encadrement et un rayon d'encadrement (des coins arrondis !).
  - l'en‑tête ait un gradient d'arrière‑plan allant du plus soutenu au plus léger, plus des coins arrondis correspondant à ceux du conteneur de la carte principale.
  - le pied ait un gradient d'arrière‑plan allant du plus léger au plus soutenu, plus des coins arrondis correspondant à ceux du conteneur de la carte principale.
  - l'image soit placée sur la droite de façon à toucher le côté droit du contenu de la carte de visite en lui donnant une hauteur maximale de 100% (une astuce assurant qu'elle aura toujours la même hauteur que son conteneur parent, quelle que soit la hauteur qu'on lui donne).

- Attention ! Il y a deux erreurs dans les règles fournies. En utilisant n'importe quelle technique connue, repérez-les et corrigez-les avant de poursuivre.

Nouveaux jeux de règles à écrire :

- Écrire un jeu de règles ciblant à la fois l'en-tête et le pied de page de la carte pour leur donner une hauteur totale calculée de 50px ( y compris une hauteur de contenu de 30px et un remplissage de 10px sur tous les côtés). Mais exprimez‑le en `em`.
- La marge par défaut appliquée aux éléments \<h2> et \<p> par le navigateur interfère avec la composition, alors écrivez une règle ciblant tous ces éléments et fixant leur marge à 0.
- Pour éviter que l'image ne déborde du contenu principal de la carte de visite (l'élément `<article>`), nous devons lui donner une hauteur spécifique. Réglez la hauteur de `<article>` à 120px, mais exprimez‑la en `em`. Donnez-lui aussi une couleur de fond de noir semi-transparent, ce qui donne une nuance légèrement plus foncée qui permet à la couleur rouge de l'arrière-plan de briller un peu aussi.
- Écrivez un jeu de règles qui donne à `<h2>` une taille de police effective de 20px (mais exprimée en `em`) et une hauteur de ligne appropriée pour la placer au centre de la boîte de contenu de l'en-tête. Rappelez-vous que la hauteur de la boîte de contenu doit être de 30px — vous avez là toutes les données dont vous avez besoin pour calculer la hauteur de ligne.
- Écrivez un jeu de règles qui donne à `<p>` dans le pied de page une taille de police effective de 15px (mais exprimée en `em`) et une hauteur de ligne appropriée pour la placer au centre de la boîte de contenu du pied de page. Rappelez-vous que la hauteur de la boîte de contenu doit être de 30px — vous avez là toutes les données dont vous avez besoin pour calculer la hauteur de ligne.
- Comme dernière petite touche, donnez au paragraphe à l'intérieur de `<article>` une valeur de remplissage appropriée pour que son bord gauche soit aligné avec le paragraphe `<h2>` et le paragraphe de pied de page ; réglez sa couleur pour qu'elle soit assez claire afin d'être facile à lire.

> **Note :** Gardez présent à l'esprit que le 2e jeu de règles définit `font-size: 10px;` pour l'élément `<html>` — cela signifie que pour tous les enfants de `<html>`, un `em` vaudra 10px et non 16px comme c'est le cas par défaut (ceci bien sûr, à condition que les enfants en question n'aient pas de parents ayant un `font-size` différent placés entre eux et `<html>` dans la hiérarchie. Les valeurs dont vous avez besoin pourraient en être affectées, bien que dans cet exemple simple, ce ne soit pas un problème).

Autres choses à prendre en considération :

- Vous aurez des points de bonus si vous écrivez la CSS avec une déclaration séparée sur chaque ligne pour une lisibilité maximale.
- Vous devriez mettre `.card` en début de chaîne de sélecteur dans toutes les règles pour qu'elles n'interfèrent pas avec le style d'autres éléments si la carte de visite doit être placée sur une page chargeant d'autres contenus.

## Conseils et astuces

- Il n'est pas nécessaire de modifier le HTML en quoi que ce soit, sauf pour lui appliquer la CSS.
- Quand vous calculez le nombre de pixels correspondant à la valeur `em` dont vous avez besoin, pensez à la taille de police de base de l'élément racine (`<html>`), et ce par quoi il doit être multiplié pour obtenir la valeur désirée. Cela vous donnera la valeur de `em`, au moins dans un cas simple comme celui-ci.

## Exemple

La capture d'écran suivante montre un exemple de ce à quoi devrait ressembler la composition terminée :

![A view of the finished business card, show a reader header and footer, and a darker center panel containing the main details and image.](business-card.png)



## Évaluation

Si vous faites cet exercice dans le cadre d'un cours organisé, vous devez pouvoir donner votre travail à votre professeur pour notation. Si vous faites de l'auto-formation, vous pouvez obtenir le guide de notation très facilement en le demandant sur  [le fil de discussion à propos de cet exercise](https://discourse.mozilla.org/t/fundamental-css-comprehension-assessment/24682) ou par l'intermédiaire du canal IRC [#mdn](irc://irc.mozilla.org/mdn) sur [Mozilla IRC](https://wiki.mozilla.org/IRC). Faites l'exercice d'abors, il n'y rien à gagner en trichant !

{{PreviousMenu("Learn/CSS/Introduction_to_CSS/Debugging_CSS", "Apprendre/CSS/Introduction_à_CSS")}}



## Dans ce module

- [Comment fonctionnent les CSS](/fr/Apprendre/CSS/Introduction_à_CSS/Le_fonctionnement_de_CSS)
- [Syntaxe CSS](/fr/Apprendre/CSS/Introduction_à_CSS/La_syntaxe)
- [Sélecteurs](/fr/Apprendre/CSS/Introduction_à_CSS/Les_sélecteurs)
- [Sélecteurs simples](/fr/docs/Learn/CSS/Introduction_to_CSS/Selectors/Simple_selectors)
- [Sélecteurs d'attribut](/fr/docs/Learn/CSS/Introduction_to_CSS/Selectors/Attribute_selectors)
- [Pseudo-classes et pseudo-éléments](/fr/docs/Learn/CSS/Introduction_to_CSS/Selectors/Pseudo-classes_and_pseudo-elements)
- [Combinaisons et sélecteurs multiples](/fr/docs/Learn/CSS/Introduction_to_CSS/Selectors/Combinators_and_multiple_selectors)
- [Unités et valeurs pour les CSS](/fr/Apprendre/CSS/Introduction_à_CSS/Values_and_units)
- [Cascade et héritage](/fr/Apprendre/CSS/Introduction_à_CSS/La_cascade_et_l_héritage)
- [Le modèle de boîte](/fr/Apprendre/CSS/Introduction_à_CSS/Le_modèle_de_boîte)
- [Débogage des CSS](/fr/docs/Learn/CSS/Introduction_to_CSS/Debugging_CSS)
- [Compréhension des fondements des CSS](/fr/docs/Learn/CSS/Introduction_to_CSS/Fundamental_CSS_comprehension)
