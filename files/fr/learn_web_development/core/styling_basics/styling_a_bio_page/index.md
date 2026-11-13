---
title: "Défi : Mettre en forme une page de biographie"
short-title: "Défi : Page de biographie"
slug: Learn_web_development/Core/Styling_basics/Styling_a_bio_page
l10n:
  sourceCommit: 9381ac06accc1f6340cda5c90cec69cc66f67136
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Getting_started", "Learn_web_development/Core/Styling_basics/Basic_selectors", "Learn_web_development/Core/Styling_basics")}}

Dans ce défi, vous allez mettre en forme une page de biographie simple, ce qui vous permettra de tester certaines des compétences acquises lors des dernières leçons, notamment l'écriture de sélecteurs, la coloration des arrière-plans et la mise en forme du texte. Nous vous inviterons aussi à rechercher quelques fonctionnalités CSS de base que nous n'avons pas abordées, pour tester vos compétences de recherche.

## Point de départ

Pour commencer, cliquez sur le bouton **Exécuter** dans l'un des panneaux de code ci-dessous pour ouvrir l'exemple fourni dans le MDN Playground. Vous suivrez ensuite les instructions des sections suivantes pour mettre en forme la page comme il se doit.

```html live-sample___style-bio-start live-sample___style-bio-finish
<h1>Jane Doe</h1>
<div class="job-title">Développeuse web</div>
<p>
  Loin, très loin, derrière les montagnes de mots, loin des pays de Vokalia et
  Consonantia, vivent les textes aveugles. Séparés, ils vivent à Bookmarksgrove
  juste au bord de la mer des Sémantiques, un vaste océan de langues.
</p>

<p>
  Une petite rivière nommée Duden passe par leur endroit et leur fournit la
  régélialia nécessaire. C'est un pays paradisiaque, où des morceaux rôtis de
  phrases volent jusque dans votre bouche.
</p>

<h2>Informations de contact</h2>
<ul>
  <li>Email&nbsp;: <a href="mailto:jane@example.com">jane@example.com</a></li>
  <li>Web&nbsp;: <a href="http://example.com">http://example.com</a></li>
  <li>Tél.&nbsp;: <a href="tel:12345678">123 45678</a></li>
</ul>
```

```css live-sample___style-bio-start
html {
  background-color: white;
}

body {
  font: 1.2em / 1.5 system-ui;
}
```

{{EmbedLiveSample("style-bio-start", "100%", 400)}}

## Cahier des charges

Suivez les instructions ci-dessous pour mettre en forme la biographie. Essayez de rechercher les fonctionnalités CSS dont vous aurez besoin dans la [référence CSS de MDN](/fr/docs/Web/CSS/Reference).

### Styles de boîte

1. Donnez à l'élément `<body>` une marge intérieure (`padding`) de `20px` de tous les côtés et une largeur de `500px`.
2. Donnez à l'élément `<body>` une couleur de fond `#efefef` (une valeur {{CSSxRef("&lt;hex-color>")}} gris clair).
3. Centrez l'élément `<body>` dans la fenêtre en définissant les marges supérieure et inférieure à `0`, et les marges gauche et droite à `auto`.
4. Donnez à la `<ul>` utilisée pour les détails de contact une couleur de fond blanche, une bordure de `5px solid purple` sur tous les côtés. Ajoutez une marge intérieure de `30px` sur tous les côtés pour éloigner le contenu de la bordure.
5. Donnez à la `<ul>` un rayon de bordure de `20px`.

### Styles de texte

1. Affichez le titre de niveau un en gris foncé, en utilisant le mot-clé de couleur CSS `darkslategray`, et donnez-lui une bordure inférieure de `10px` en pointillés de couleur `purple`.
2. Affichez le titre de niveau deux en italique.
3. Donnez au titre de niveau un une taille de police de `2rem` et au titre de niveau deux une taille de police de `1.5rem`.
4. Sélectionnez le `<div>` à l'aide d'un sélecteur de classe, et donnez-lui une couleur `darkslategray` et une graisse de police en gras.
5. Affichez les liens en `green`.
6. Affichez les liens en `darkgreen` lors du survol de la souris ou de la sélection au clavier (vous devrez utiliser quelques [pseudo-classes](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) pour cela).
7. Supprimez le soulignement des liens lors du survol ou de la sélection.

## Astuces et conseils

- Utilisez le [validateur CSS du W3C <sup>(angl.)</sup>](https://jigsaw.w3.org/css-validator/) pour détecter les erreurs involontaires dans votre CSS — des erreurs que vous auriez pu manquer — afin de pouvoir les corriger.
- Essayez de rechercher des fonctionnalités CSS plus avancées (encore une fois, la [référence CSS de MDN](/fr/docs/Web/CSS/Reference) vous sera utile ici) et ajoutez d'autres styles à votre solution. Osez expérimenter&nbsp;!
- Rappelez-vous qu'il n'y a pas de mauvaise réponse ici — à ce stade de votre apprentissage, vous pouvez vous permettre de vous amuser un peu.

## Exemple

Votre exemple final devrait ressembler à ceci&nbsp;:

{{EmbedLiveSample("style-bio-finish", "100%", 400)}}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Le CSS appliqué à l'exemple final ressemble à ceci&nbsp;:

```css live-sample___style-bio-finish
html {
  background-color: white;
}

body {
  font: 1.2em / 1.5 system-ui;
  padding: 20px;
  width: 500px;
  background-color: #efefef;
  margin: 0 auto;
}

h1 {
  color: darkslategray;
  border-bottom: 10px dotted purple;
  font-size: 2rem;
}

h2 {
  font-style: italic;
  font-size: 1.5rem;
}

.job-title {
  color: darkslategray;
  font-weight: bold;
}

ul {
  background-color: white;
  border: 5px solid purple;
  padding: 30px;
  border-radius: 20px;
}

a {
  color: green;
}

a:hover,
a:focus {
  color: darkgreen;
  text-decoration: none;
}
```

Les propriétés CSS utilisées pour résoudre ce défi sont les suivantes — chacune renvoie vers sa page de propriété sur MDN, qui vous donnera plus d'exemples d'utilisation.

- {{CSSxRef("background-color")}}
- {{CSSxRef("border")}} ou propriétés détaillées associées.
- {{CSSxRef("color")}}
- {{CSSxRef("font-size")}}
- {{CSSxRef("font-style")}}
- {{CSSxRef("font-weight")}}
- {{CSSxRef("margin")}} ou propriétés détaillées associées.
- {{CSSxRef("padding")}} ou propriétés détaillées associées.
- {{CSSxRef("text-decoration")}}
- {{CSSxRef("width")}}

</details>

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Getting_started", "Learn_web_development/Core/Styling_basics/Basic_selectors", "Learn_web_development/Core/Styling_basics")}}
