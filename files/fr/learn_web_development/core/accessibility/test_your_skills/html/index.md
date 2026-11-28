---
title: "Testez vos compétences : accessibilité HTML"
short-title: "Test : A11é HTML"
slug: Learn_web_development/Core/Accessibility/Test_your_skills/HTML
l10n:
  sourceCommit: 2bda943b59604eb44f5d759708845c5f56970635
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/HTML","Learn_web_development/Core/Accessibility/CSS_and_JavaScript", "Learn_web_development/Core/Accessibility")}}

L'objectif de ce test de compétences est de vous aider à évaluer si vous avez compris notre article [HTML&nbsp;: une bonne base pour l'accessibilité](/fr/docs/Learn_web_development/Core/Accessibility/HTML).

> [!NOTE]
> Pour obtenir de l'aide, consultez notre guide d'utilisation [Testez vos compétences](/fr/docs/Learn_web_development#testez_vos_compétences). Vous pouvez également nous contacter par l'un de nos [canaux de communication](/fr/docs/MDN/Community/Communication_channels).

## Accessibilité HTML n°1

Dans cette tâche nous testons votre compréhension du HTML sémantique, et pourquoi il est bon pour l'accessibilité. Le texte donné est un panneau d'information avec des boutons d'action, mais le HTML est vraiment mauvais.

Pour terminer la tâche, mettez à jour le balisage afin d'utiliser un code HTML sémantique approprié. Vous n'avez pas besoin de vous soucier d'obtenir _exactement_ le même rendu et la même taille de texte, tant que la sémantique est correcte.

<!-- Code partagé entre les exemples -->

```css hidden live-sample___html-ally-1 live-sample___html-ally-2 live-sample___html-ally-3 live-sample___html-ally-4 live-sample___html-ally-2-finish
body {
  background-color: white;
  color: #333333;
  font:
    1em / 1.4 "Helvetica Neue",
    "Helvetica",
    "Arial",
    sans-serif;
  padding: 1em;
  margin: 0;
}

* {
  box-sizing: border-box;
}
```

<!-- Code spécifique à l'exemple -->

Le point de départ de la tâche ressemble à ceci&nbsp;:

{{EmbedLiveSample("html-ally-1", "100%", 630)}}

Voici le code sous-jacent pour ce point de départ&nbsp;:

```html live-sample___html-ally-1
<font size="7">Besoin d'aide ?</font> <br /><br />
Si vous avez des problèmes avec nos produits, notre centre d'assistance peut
vous offrir toute l'aide dont vous avez besoin, que vous souhaitiez :
<br /><br />
1. Des conseils pour choisir un nouveau produit
<br />
2. Une assistance technique sur un produit existant
<br />
3. Une aide pour les remboursements et annulations
<br /><br />
<font size="5">Contactez-nous maintenant</font>
<br /><br />
Notre centre d'assistance contient une messagerie instantanée, des adresses
électroniques et des numéros de téléphone.
<br /><br />
<div class="button">Trouver les coordonnées</div>
<br />
<font size="5">Trouver des réponses</font>
<br /><br />
Notre section Forums contient une grande base de connaissances de questions déjà
posées consultables, et vous pouvez toujours poser une nouvelle question si vous
ne trouvez pas la réponse que vous cherchez.
<br /><br />
<div class="button">Accéder aux forums</div>
```

```css live-sample___html-ally-1
.button {
  color: white;
  background-color: blue;
  border-radius: 10px;
  width: 170px;
  padding: 10px;
  text-align: center;
}
```

Nous ne fournissons pas de contenu terminé pour cette tâche, car il ne semble pas significativement différent de l'état de départ.

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Votre HTML final doit ressembler à quelque chose comme ceci&nbsp;:

```html
<h2>Besoin d'aide ?</h2>

<p>
  Si vous avez des problèmes avec nos produits, notre centre d'assistance peut
  vous offrir toute l'aide dont vous avez besoin, que vous souhaitiez :
</p>

<ul>
  <li>Des conseils pour choisir un nouveau produit</li>
  <li>Une assistance technique sur un produit existant</li>
  <li>Une aide pour les remboursements et les annulations</li>
</ul>

<h3>Contactez-nous maintenant</h3>

<p>
  Notre centre d'assistance contient une messagerie instantanée, des adresses
  électroniques et des numéros de téléphone.
</p>

<button>Trouver les coordonnées</button>

<h3>Trouver des réponses</h3>

<p>
  Notre section Forums contient une grande base de connaissances de questions
  déjà posées consultables, et vous pouvez toujours poser une nouvelle question
  si vous ne trouvez pas la réponse que vous cherchez.
</p>

<button>Accéder aux forums</button>
```

Points bonus pour&nbsp;:

- Utilisez uniquement `<button>`, pas `<button class="button">` (répéter la sémantique n'est pas nécessaire), et mettez à jour le sélecteur CSS pour que le bouton reçoive toujours les styles.
- Utilisez une liste non ordonnée, pas une liste ordonnée — la liste des éléments n'a vraiment pas besoin d'être dans un ordre particulier.

</details>

## Accessibilité HTML n°2

Dans la deuxième tâche, vous avez un formulaire contenant trois champs de saisie.

Pour terminer la tâche&nbsp;:

1. Associez sémantiquement les champs de saisie à leurs libellés.
2. Supposez que ces champs fassent partie d'un formulaire plus grand, et enveloppez-les dans un élément qui les associe tous ensemble comme un groupe apparenté unique.
3. Donnez au groupe une description/titre qui résume toutes les informations comme données personnelles.

Le point de départ de la tâche ressemble à ceci&nbsp;:

{{EmbedLiveSample("html-ally-2", "100%", 200)}}

Voici le code sous-jacent pour ce point de départ&nbsp;:

```html live-sample___html-ally-2
<form>
  <ul>
    <li>
      Nom
      <input type="text" name="name" />
    </li>
    <li>
      Âge
      <input type="number" name="age" />
    </li>
    <li>
      Adresse électronique
      <input type="email" name="email" />
    </li>
  </ul>
</form>
```

```css live-sample___html-ally-2 live-sample___html-ally-2-finish
form {
  width: 400px;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
```

Le formulaire mis à jour ressemble à ceci&nbsp;:

{{EmbedLiveSample("html-ally-2-finish", "100%", 220)}}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Votre HTML final doit ressembler à quelque chose comme ceci&nbsp;:

```html live-sample___html-ally-2-finish
<form>
  <fieldset>
    <legend>Données personnelles</legend>
    <ul>
      <li>
        <label for="name">Nom</label>
        <input type="text" name="name" id="name" />
      </li>
      <li>
        <label for="age">Âge</label>
        <input type="number" name="age" id="age" />
      </li>
      <li>
        <label for="email">Adresse électronique</label>
        <input type="email" name="email" id="email" />
      </li>
    </ul>
  </fieldset>
</form>
```

</details>

## Accessibilité HTML n°3

Dans cette tâche, vous devez transformer tous les liens d'information du paragraphe en bons liens accessibles.

- Les deux premiers liens mènent simplement à des pages Web ordinaires.
- Le troisième lien mène à un PDF, et il est volumineux — 8 Mo.
- Le quatrième lien mène à un document Word, donc l'utilisateur·ice a besoin d'une sorte d'application installée qui peut gérer cela.

Pour terminer la tâche, mettez à jour les liens de manière appropriée en fonction des descriptions ci-dessus.

Le point de départ de la tâche ressemble à ceci&nbsp;:

{{EmbedLiveSample("html-ally-3", "100%", 140)}}

Voici le code sous-jacent pour ce point de départ&nbsp;:

```html-nolint live-sample___html-ally-3
<p>
  Pour plus d'informations sur nos activités, consultez notre page de collecte de fonds
  (<a href="/fundraising" target="_blank">cliquez ici</a>), page d'éducation
  (<a href="/education" target="_blank">cliquez ici</a>), dossier de parrainage
  (<a href="/resources/sponsorship.pdf" target="_blank">cliquez ici</a>),
   et feuilles d'évaluation
  (<a href="/resources/assessments.docx" target="_blank">cliquez ici</a>).
</p>
```

> [!NOTE]
> Les liens dans le code de départ ont l'attribut `target="_blank"` défini, de sorte que lorsque vous cliquez dessus, ils essaient d'ouvrir les pages liées dans un nouvel onglet plutôt que dans le même onglet. Ce n'est pas une bonne pratique à proprement parler, mais nous le faisons ici afin que les pages ne s'ouvrent pas dans le `<iframe>` de sortie de MDN Playground, ce qui supprime le code de votre exemple au passage&nbsp;!

Nous ne fournissons pas de contenu terminé pour cette tâche, car cela révèle la solution.

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Votre HTML final doit ressembler à quelque chose comme ceci&nbsp;:

```html
<p>
  Pour plus d'informations sur nos activités, consultez notre
  <a href="/fundraising" target="_blank">page de collecte de fonds</a>,
  <a href="/education" target="_blank">page d'éducation</a>,
  <a href="/resources/sponsorship.pdf" target="_blank"
    >dossier de parrainage (PDF, 8 Mo)</a
  >, et
  <a href="/resources/assessments.docx" target="_blank"
    >feuilles d'évaluation (document Word)</a
  >.
</p>
```

</details>

## Accessibilité HTML n°4

Dans notre dernière tâche d'accessibilité HTML, vous disposez d'une galerie d'images qui présente quelques problèmes d'accessibilité. Pouvez-vous les corriger&nbsp;?

- L'image d'en-tête présente un problème d'accessibilité, et les images de la galerie aussi.
- Vous pouvez pousser plus loin l'image d'en-tête et la mettre en œuvre avec CSS pour une accessibilité peut-être meilleure. Comment créez-vous une telle solution&nbsp;?

Mettez à jour le code pour corriger les problèmes décrits ci-dessus.

Le point de départ de la tâche ressemble à ceci&nbsp;:

{{EmbedLiveSample("html-ally-4", "100%", 400)}}

Voici le code sous-jacent pour ce point de départ&nbsp;:

```html live-sample___html-ally-4
<header>
  <img
    src="https://mdn.github.io/shared-assets/images/examples/star-pink_32x32.png"
    alt="Une étoile que j'utilise pour décorer ma page" />
  <h1>Images chouettes</h1>
</header>
<main>
  <img
    src="https://mdn.github.io/shared-assets/images/examples/ballon-portrait.jpg" />
  <img
    src="https://mdn.github.io/shared-assets/images/examples/grapefruit-slice.jpg" />
</main>
```

```css live-sample___html-ally-4
body {
  width: 400px;
  margin: 0 auto;
}

main img {
  display: block;
  width: 250px;
  margin: 20px auto;
  box-shadow: 5px 5px 0 black;
}

header {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
```

Nous ne fournissons pas de contenu terminé pour cette tâche, car il ressemble au point de départ.

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Les problèmes d'accessibilité sont&nbsp;:

1. L'image d'en-tête est décorative, elle n'a donc pas besoin de texte alternatif. La meilleure solution si vous utilisez des images HTML décoratives consiste à mettre `alt=""`, afin qu'un lecteur d'écran ne lise rien — plutôt qu'une description, ou le nom du fichier image. Elle ne fait pas partie du contenu.
2. Les images de la galerie ont besoin d'un texte alternatif, et elles font partie du contenu.

Le HTML mis à jour peut ressembler à quelque chose comme ceci&nbsp;:

```html
<header>
  <img
    src="https://mdn.github.io/shared-assets/images/examples/star-pink_32x32.png"
    alt="" />
  <h1>Images chouettes</h1>
</header>
<main>
  <img
    src="https://mdn.github.io/shared-assets/images/examples/ballon-portrait.jpg"
    alt="Une montgolfière couverte d'un motif à carreaux bleu et blanc" />
  <img
    src="https://mdn.github.io/shared-assets/images/examples/grapefruit-slice.jpg"
    alt="Une coupe transversale du milieu d'un pamplemousse rose" />
</main>
```

Il est peut-être préférable de mettre en œuvre l'image d'arrière-plan de l'en-tête avec des images d'arrière-plan CSS. Pour ce faire, supprimez le premier élément `<img>` du balisage, et ajoutez une règle au CSS comme ceci&nbsp;:

```css
h1 {
  background: url("https://mdn.github.io/shared-assets/images/examples/star-pink_32x32.png")
    no-repeat left;
  padding-left: 50px;
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/HTML","Learn_web_development/Core/Accessibility/CSS_and_JavaScript", "Learn_web_development/Core/Accessibility")}}
