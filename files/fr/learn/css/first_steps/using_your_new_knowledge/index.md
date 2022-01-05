---
title: Mettre en œuvre vos connaissances
slug: Learn/CSS/First_steps/Using_your_new_knowledge
tags:
  - Apprendre
  - CSS
  - Débutant
  - Playground
translation_of: Learn/CSS/First_steps/Using_your_new_knowledge
---
{{LearnSidebar}}{{PreviousMenu("Learn/CSS/First_steps/How_CSS_works", "Learn/CSS/First_steps")}}

Le temps est venu d'évaluer tout ce que vous avez appris dans les leçons précécentes : vous savez comment mettre en forme des documents texte simples à l'aide de CSS.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis :</th>
      <td>
        Avant de vous soumettre à cette évaluation, vous avez suivi le module
        sur les bases de CSS ; vous maîtrisez par ailleurs les bases de HTML
        (cf. <a href="/fr/docs/Apprendre/HTML/Introduction_à_HTML"
          >Introduction à HTML</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif :</th>
      <td>Tester vos connaissances en mettant à l'œuvre CSS.</td>
    </tr>
  </tbody>
</table>

## Point de départ

Vous pouvez travailler dans l'éditeur ci-dessous ou [télécharger le point de départ](https://github.com/mdn/css-examples/blob/master/learn/getting-started/biog-download.html/) pour travailler en local sur votre machine, avec votre propre éditeur de code.  Ce point de départ est une page HTML avec le CSS interne écrit dans la section `<head>`. Sur votre machine, n'hésitez pas à travailler avec une feuille de style externe. Vous pouvez aussi utiliser des éditeurs en ligne comme [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), ou [Glitch](https://glitch.com/) pour travailler sur les tâches proposées.

> **Note :** ne restez pas coincé, appelez à l'aide — voir la section [Evaluation et comment obtenir de l'aide](#evaluation) au bas de cette page.

## Travailler avec CSS

L'exemple ci-dessous propose de retravailler la mise en forme d'une biographie stylée avec CSS. Les propriétés utilisées sont les suivantes — chacune renvoie vers sa page MDN pour plus d'exemples d'usages :

- {{cssxref("font-family")}}
- {{cssxref("color")}}
- {{cssxref("border-bottom")}}
- {{cssxref("font-weight")}}
- {{cssxref("font-size")}}
- {{cssxref("text-decoration")}}

J'ai utilisé un mélange de sélecteurs, d'éléments HTML comme `h1` et `h2` ; j'ai aussi créé une classe `job-title`.

Utilisez CSS pour changer l'apparence de cette biographie en modifiant les valeurs des propriétés CSS utilisées :

1.  Affichez le titre de niveau 1 en `hotpink` ;
2.  Donnez au titre un {{cssxref("border-bottom")}} de `10px dotted` de couleur `purple` ;
3.  Affichez le titre de niveau 2 en italique ;
4.  Colorez la `ul` des détails de contacts en {{cssxref("background-color")}} `#eeeeee`, avec un {{cssxref("border")}} de `5px solid purple`. Utilisez la propriété {{cssxref("padding")}} pour éloigner le contenu du bord.
5.  Faites que les liens apparaissent en `green` lors d'un survol du curseur.

Vous devriez obtenir un rendu qui ressemble à cela :

![Screenshot of how the example should look after completing the assessment.](learn-css-basics-assessment.png)

Une fois cette tâche accomplie, n'hésitez pas à explorer des propriétés rencontrées dans la [référence CSS sur MDN](/fr/docs/Web/CSS/Reference) !

À ce stade, il n'y a pas de réponse incorrecte — autorisez vous un peu de fantaisie.

{{EmbedGHLiveSample("css-examples/learn/getting-started/biog.html", '100%', 1600)}}

## Evaluation ou compléments d'information

Si vous voulez une évaluation de votre travail, ou si vous êtes coincé et recherchez de l'aide :

1.  Publiez votre code dans un éditeur en ligne tel [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), or [Glitch](https://glitch.com/).
2.  Si vous êtes à l'aise en anglais :

    1.  Dans le [forum MDN Discourse](https://discourse.mozilla.org/c/mdn), écrivez un billet pour évaluation et/ou demande d'aide. Ajouter le tag "learning"  à votre post pour que nous puissions le trouver plus facilement. Votre post devrait contenir :

        - Un titre parlant comme "Assessment wanted for CSS First Steps".
        - Des détails sur ce que vous voudriez que l'on fasse — par exemple, ce que vous avez déjà essayé si vous êtes coincé et demandez de l'aide.
        - Un lien vers l'exemple dans l'éditeur en ligne, sur lequel vous demandez une évaluation ou de l'aide : voilà une bonne pratique — il n'est pas commode d'aider quelqu'un coincé sur son code quand on ne peut pas voir ce code...
        - Un lien vers cette page d'évaluation afin que nous puissions voir la question sur laquelle vous demandez de l'aide.

3.  Sinon, n'hésitez pas à contacter @MDNfr sur Twitter.

## La suite ?

Bravo, vous avez suivi ce cours jusqu'au bout. Avec votre connaissance de CSS, vous comprenez maintenant le fonctionnement d'une feuille de style. Dans le prochain cours, [construire des blocs CSS](/fr/docs/Apprendre/CSS/Building_blocks), nous approfondirons de nombreux points.

{{PreviousMenu("Learn/CSS/First_steps/How_CSS_works", "Apprendre/CSS/Premiers_pas")}}

## Dans ce cours

1.  [Qu'est-ce que CSS ?](/fr/docs/Learn/CSS/First_steps/Qu_est_ce_que_CSS)
2.  [Commencer avec CSS](/fr/docs/Learn/CSS/First_steps/Getting_started)
3.  [Comment CSS est structuré](/fr/docs/Learn/CSS/First_steps/How_CSS_is_structured)
4.  [CSS, comment ça marche ?](/fr/docs/Learn/CSS/First_steps/How_CSS_works)
5.  [Mettez en œuvre vos connaissances](/fr/docs/Learn/CSS/First_steps/Using_your_new_knowledge)
