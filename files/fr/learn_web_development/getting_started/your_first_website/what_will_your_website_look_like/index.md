---
title: À quoi ressemblera le site web ?
short-title: À quoi ressemblera-t-il ?
slug: Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like
original_slug: Learn/Getting_started_with_the_web/What_will_your_website_look_like
l10n:
  sourceCommit: a6d1fd388b053e6fc6ce21003348f34d0ef8115f
---

{{NextMenu("Learn_web_development/Getting_started/Your_first_website/Creating_the_content", "Learn_web_development/Getting_started/Your_first_website")}}

_Quel sera l'aspect de votre site web&nbsp;?_ parle de planifier et concevoir (_design_), travaux à faire _avant_ d'écrire du code. Voici les questions que cela comprend&nbsp;: «&nbsp;Quelles informations mon site web offrira-t-il&nbsp;?&nbsp;», «&nbsp;Quelles polices de caractères et quelles couleurs souhaité-je&nbsp;?&nbsp;» et «&nbsp;Que fait mon site web&nbsp;?&nbsp;».

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
          <li>Planifier un site web simple.</li>
          <li>Utiliser une démarche de conception basique.</li>
          <li>Rassembler les ressources.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Commençons par le commencement : planification

Avant de faire quoi que ce soit, vous avez besoin d'idées. Qu'est-ce que votre site web doit-il réellement faire&nbsp;? Un site web peut pratiquement faire tout ce que vous voulez, mais pour un premier essai, vous devez garder les choses simples. Nous allons commencer par créer une simple page web avec un en-tête, une image et quelques paragraphes.

Pour commencer, posez-vous ces questions&nbsp;:

1. **De quoi va parler mon site web&nbsp;?** Aimez-vous les chiens, New York ou Pacman&nbsp;?
2. **Quelles informations vais-je présenter sur le sujet&nbsp;?** Écrivez un titre et quelques paragraphes, et trouvez une image que vous aimeriez mettre sur votre page.
3. **Quelle sera l'apparence de mon site web,** en simple termes de survol&nbsp;? Quelle sera la couleur de l'arrière plan&nbsp;? Quelle sorte de police de caractères est appropriée&nbsp;: formelle, dessin animé, grasse et lourde, subtile&nbsp;?

> [!NOTE]
> Les projets complexes nécessitent des lignes directrices (guidelines) détaillées précisant tout : couleurs, polices, espacement entre éléments de la page, style d'écriture adapté, etc. Ceci est parfois appelé un guide de conception ou une charte graphique, vous pouvez en voir un exemple dans [Firefox OS Guidelines](https://www.mozilla.org/fr/styleguide/products/firefox-os/).

## Esquisse de votre concept

Ensuite, prenez un crayon et du papier et faites une esquisse de l'apparence souhaitée pour votre site. Pour une première et simple page web, il n'y a pas beaucoup à esquisser, mais vous devriez prendre l'habitude de le faire dès maintenant. Cela aide vraiment — vous n'avez pas à être Van Gogh&nbsp;!

![Un croquis et une esquisse de site web sur papier](website-drawing-scan.png)

> [!NOTE]
> Même sur des sites web réels et complexes, les équipes de conception commencent généralement par des croquis sur papier, puis réalisent des maquettes numériques à l'aide d'un éditeur graphique ou de technologies web.
>
> Les équipes web incluent souvent à la fois un·e [graphiste](/fr/docs/Learn_web_development/Getting_started/Soft_skills/Workflows_and_processes#graphiste) et un·e [designer UX (expérience utilisateur)](/fr/docs/Learn_web_development/Getting_started/Soft_skills/Workflows_and_processes#concepteur_dexpérience_utilisateur_ux). Les graphistes s'occupent des visuels du site web. Les designers UX ont un rôle un peu plus abstrait&nbsp;: ils·elles s'intéressent à la façon dont les utilisateur·ice·s vont découvrir et interagir avec le site web.

À ce stade, il est bon de commencer à regrouper les contenus qui apparaîtront éventuellement sur votre page web. Vous devriez encore avoir vos paragraphes et votre titre de tout à l'heure. Gardez-les à portée de main.

## Choix de la couleur du thème

Choisissons une couleur d'arrière-plan pour votre page.

1. Rendez-vous sur [le sélecteur de couleurs](/fr/docs/Web/CSS/Guides/Colors/Color_format_converter) et trouvez une couleur qui vous plaît.
2. Lorsque vous choisissez une couleur, vous verrez un étrange code à six caractères comme `#660066`. C'est ce qu'on appelle un _code hex_ (abréviation de hexadécimal), et il représente votre couleur. Copiez ce code dans un endroit sûr pour l'instant.

![Outil de conversion de format de couleur sur le site MDN Docs](color_format_converter.jpg)

## Choix d'une image

Il est maintenant temps de trouver une image à afficher sur votre site.

1. Rendez-vous sur [Google Images](https://www.google.com/imghp).
2. Notez que la plupart des images sur le Web, y compris celles de Google Images, sont protégées par des droits d'auteur. Pour réduire le risque d'enfreindre ces droits, vous pouvez utiliser le filtre de licence de Google. Cliquez sur le bouton _Outils_, puis sur l'option _Droits d'usage_ qui apparaît en dessous. Vous devriez choisir l'option _Licences Creative Commons_.

   ![Résultats de recherche filtrés pour obtenir des images sous licence Creative Commons sur Google Images](updated-google-images-licensing.png)

3. Cherchez une image appropriée.
4. Lorsque vous trouvez l'image que vous souhaitez, cliquez dessus pour l'agrandir.
5. Faites un clic droit sur l'image (<kbd>Ctrl</kbd> + clic sur Mac), choisissez _Enregistrer l'image sous…_ et choisissez un endroit sûr pour enregistrer votre image.

   ![Résultats de recherche pour un terme sur Google Images](updated-google-images.png)

## Choix d'une police de caractères

Il existe un ensemble de polices appelées [polices sûres pour le web](/fr/docs/Learn_web_development/Core/Text_styling/Fundamentals#polices_sûres_pour_le_web) — telles que Arial, Times New Roman ou Courier New — qui sont généralement disponibles sur la plupart des systèmes informatiques. Si vous utilisez l'une de ces polices sur votre site web, le navigateur chargera le fichier de police disponible sur l'ordinateur de l'utilisateur·ice.

Cependant, si vous souhaitez utiliser d'autres polices qui ne sont pas généralement disponibles sur les appareils, vous devez soit les inclure avec les fichiers de votre site web, soit référencer les fichiers de police depuis un service tiers afin que le navigateur puisse les télécharger si besoin. [Google Fonts <sup>(angl.)</sup>](https://fonts.google.com/) est un de ces services qui donne accès à de nombreuses polices.

Utilisons Google Fonts pour choisir une police pour votre site web&nbsp;:

1. Rendez-vous sur [Google Fonts <sup>(angl.)</sup>](https://fonts.google.com/).
2. Faites défiler la liste des polices jusqu'à en trouver une qui vous plaît. Si vous avez du mal à en trouver une, vous pouvez utiliser les filtres disponibles dans l'autre colonne pour affiner votre recherche.
3. Cliquez sur la police de votre choix, puis sur la page suivante cliquez sur le bouton «&nbsp;Get font&nbsp;».
4. Sur la page suivante, cliquez sur «&nbsp;Get embed code&nbsp;».
5. Copiez les deux blocs de code fournis et enregistrez-les dans un endroit sûr pour une utilisation ultérieure.

> [!NOTE]
> Comme pour les images, de nombreuses polices sont protégées par des licences, ce qui signifie que vous ne pouvez pas forcément les utiliser librement sur des sites web commerciaux. Vous ne risquez rien pour l'instant en travaillant sur des exemples d'apprentissage, mais gardez cela à l'esprit lorsque vous choisirez des polices pour de vrais sites web.

{{NextMenu("Learn_web_development/Getting_started/Your_first_website/Creating_the_content", "Learn_web_development/Getting_started/Your_first_website")}}
