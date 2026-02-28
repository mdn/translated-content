---
title: Emphase et importance
slug: Learn_web_development/Core/Structuring_content/Emphasis_and_importance
l10n:
  sourceCommit: cc7ed25d67ec3df5df8cfa255e1066cb5845e293
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Headings_and_paragraphs", "Learn_web_development/Core/Structuring_content/Lists", "Learn_web_development/Core/Structuring_content")}}

L'article précédent expliquait pourquoi la sémantique est importante en HTML, en se concentrant sur les titres et les paragraphes. Cet article poursuit sur le thème de la sémantique, en abordant les éléments HTML qui appliquent l'accent et l'importance au texte (en parallèle à l'italique et au gras dans les médias imprimés).

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Basic HTML familiarity, as covered in
        <a href="/fr/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Basic HTML Syntax</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs d'apprentissage&nbsp;:</th>
      <td>
        <ul>
          <li>La signification de l'accent et de l'importance, et les éléments de base qui les appliquent en HTML, tels que <code>&lt;em&gt;</code> et <code>&lt;strong&gt;</code>.</li>
          <li>Identifier le balisage de présentation qui ne doit plus être utilisé du tout (par exemple, <code>&lt;big&gt;</code> et <code>&lt;font&gt;</code>) ; il est obsolète.</li>
          <li>Identifier le balisage de présentation qui a été réutilisé pour avoir une nouvelle signification sémantique (par exemple, <code>&lt;i&gt;</code> et <code>&lt;b&gt;</code>).</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Qu'est-ce que l'accent et l'importance ?

Dans le langage humain, nous accentuons souvent certains mots pour modifier le sens d'une phrase, et nous voulons souvent marquer certains mots comme importants ou différents d'une certaine façon. HTML propose divers éléments sémantiques pour nous permettre de baliser le contenu textuel avec de tels effets, et dans cette section, nous allons voir quelques-uns des plus courants.

### Accent

Lorsque nous voulons ajouter de l'accent à l'oral, nous _insistons_ sur certains mots, modifiant subtilement le sens de ce que nous disons. De même, à l'écrit, nous avons tendance à insister sur des mots en les mettant en italique. Par exemple, les deux phrases suivantes n'ont pas le même sens.

> Je suis content que vous ne soyez pas en retard.
>
> Je suis _content_ que vous ne soyez pas _en retard_.

La première phrase exprime un réel soulagement que la personne ne soit pas en retard. En revanche, la seconde, avec les mots «&nbsp;content&nbsp;» et «&nbsp;en retard&nbsp;» en italique, sonne sarcastique ou passif-agressif, exprimant une certaine irritation que la personne soit arrivée un peu en retard.

En HTML, on utilise l'élément HTML {{HTMLElement("em")}} (accent) pour baliser de tels cas. En plus de rendre le document plus agréable à lire, ces éléments sont reconnus par les lecteurs d'écran, qui peuvent être configurés pour les prononcer sur un ton différent. Les navigateurs appliquent par défaut un style italique, mais vous ne devez pas utiliser cette balise uniquement pour obtenir un style italique. Pour cela, vous utiliseriez un élément HTML {{HTMLElement("span")}} et du CSS, ou éventuellement un élément HTML {{HTMLElement("i")}} (voir plus bas).

```html
<p>Je suis <em>content</em> que vous ne soyez pas <em>en retard</em>.</p>
```

### Importance forte

Pour mettre en avant des mots importants, nous avons tendance à insister dessus à l'oral et à les mettre en **gras** à l'écrit. Par exemple&nbsp;:

> Ce liquide est **hautement toxique**.
>
> Je compte sur vous. **Ne soyez pas** en retard&nbsp;!

En HTML, on utilise l'élément HTML {{HTMLElement("strong")}} (importance forte) pour baliser de tels cas. En plus de rendre le document plus utile, ces éléments sont également reconnus par les lecteurs d'écran, qui peuvent être configurés pour les prononcer sur un ton différent. Les navigateurs appliquent par défaut un style gras, mais vous ne devez pas utiliser cette balise uniquement pour obtenir un style gras. Pour cela, vous utiliseriez un élément HTML {{HTMLElement("span")}} et du CSS, ou éventuellement un élément HTML {{HTMLElement("b")}} (voir plus bas).

```html
<p>Ce liquide est <strong>hautement toxique</strong>.</p>

<p>Je compte sur vous. <strong>Ne soyez pas</strong> en retard&nbsp;!</p>
```

Vous pouvez imbriquer l'importance forte et l'accent si vous le souhaitez&nbsp;:

```html-nolint
<p>Ce liquide est <strong>hautement toxique</strong> — si vous en buvez,
<strong>vous pourriez <em>mourir</em></strong>.</p>
```

{{EmbedLiveSample("Importance forte")}}

## À vous de jouer avec l'accent et l'importance

Dans cette section, nous vous invitons à expérimenter l'accent et l'importance&nbsp;:

1. Cliquez sur **«&nbsp;Exécuter&nbsp;»** dans le bloc de code ci-dessous pour éditer l'exemple dans le MDN Playground.
2. Dans le titre principal, appliquez l'accent au mot «&nbsp;Accent&nbsp;» et l'importance forte au mot «&nbsp;importance&nbsp;».
3. Dans le premier paragraphe, appliquez l'importance forte au nom de la machine à café, et accentuez les adjectifs utilisés pour décrire le café.
4. Dans le second paragraphe, appliquez l'importance forte à la description de la température («&nbsp;froid&nbsp;») et à l'action à effectuer («&nbsp;couvrez-vous bien pour éviter de tomber malade&nbsp;»). Donnez un balisage supplémentaire à «&nbsp;tomber malade&nbsp;» pour qu'il soit à la fois accentué et important.

Si vous faites une erreur, vous pouvez effacer votre travail avec le bouton _Réinitialiser_ du MDN Playground. Si vous êtes vraiment bloqué, vous pouvez consulter la solution sous le bloc de code.

```css hidden live-sample___emphasis_importance
h1 {
  font-weight: normal;
}
```

```html live-sample___emphasis_importance
<h1>Accent et importance</h1>

<p>
  Ma nouvelle machine à café s'appelle La Percolatrice 2000. Elle produit le
  café le plus sublime et merveilleux.
</p>

<p>
  En plein hiver, il fera froid. Vous devriez vous couvrir pour éviter de tomber
  malade.
</p>
```

{{EmbedLiveSample('emphasis_importance', "100%", 160)}}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Votre HTML final devrait ressembler à ceci&nbsp;:

```html
<h1><em>Accent</em> et <strong>importance</strong></h1>

<p>
  Ma nouvelle machine à café s'appelle <strong>La Percolatrice 2000</strong>.
  Elle produit le café le plus <em>sublime</em> et <em>merveilleux</em>.
</p>

<p>
  En plein hiver, il fera <strong>froid</strong>. Vous devriez
  <strong>vous couvrir pour éviter de <em>tomber malade</em></strong>
  .
</p>
```

</details>

## Italique, gras, souligné…

Les éléments que nous avons abordés jusqu'ici ont une sémantique bien définie. La situation avec {{HTMLElement("b")}}, {{HTMLElement("i")}} et {{HTMLElement("u")}} est un peu plus compliquée. Ils ont été créés pour permettre d'écrire du texte en gras, en italique ou souligné à une époque où le CSS était encore peu ou mal pris en charge. Ces éléments, qui n'affectent que la présentation et non la sémantique, sont appelés **éléments de présentation** et ne doivent plus être utilisés, car, comme nous l'avons vu, la sémantique est essentielle pour l'accessibilité, le SEO, etc.

HTML5 a redéfini `<b>`, `<i>` et `<u>` avec de nouveaux rôles sémantiques, parfois déroutants.

Voici la meilleure règle à retenir&nbsp;: il n'est approprié d'utiliser `<b>`, `<i>` ou `<u>` pour transmettre un sens traditionnellement véhiculé par le gras, l'italique ou le soulignement que lorsqu'il n'existe pas d'élément plus adapté&nbsp;; et il y en a généralement un. Demandez-vous si `<strong>`, `<em>`, `<mark>` ou `<span>` ne seraient pas plus appropriés.

Gardez toujours à l'esprit l'accessibilité. Le concept d'italique n'est pas très utile pour les personnes utilisant un lecteur d'écran, ou pour celles utilisant un système d'écriture autre que l'alphabet latin.

- {{HTMLElement('i')}} est utilisé pour transmettre un sens traditionnellement véhiculé par l'italique&nbsp;: mots étrangers, désignation taxonomique, termes techniques, pensée…
- {{HTMLElement('b')}} est utilisé pour transmettre un sens traditionnellement véhiculé par le gras&nbsp;: mots-clés, noms de produits, phrase d'accroche…
- {{HTMLElement('u')}} est utilisé pour transmettre un sens traditionnellement véhiculé par le soulignement&nbsp;: nom propre, faute d'orthographe…

> [!NOTE]
> Les gens associent fortement le soulignement aux liens hypertextes. Par conséquent, sur le web, il vaut mieux ne souligner que les liens. Utilisez l'élément `<u>` lorsqu'il est sémantiquement approprié, mais pensez à utiliser du CSS pour modifier le soulignement par défaut afin qu'il soit plus adapté au web. L'exemple ci-dessous illustre comment cela peut être fait.

```html
<!-- noms scientifiques -->
<p>
  Le colibri à gorge rubis (<i>Archilochus colubris</i>) est le colibri le plus
  commun en Amérique du Nord-Est.
</p>

<!-- mots étrangers -->
<p>
  Le menu était une mer de mots exotiques comme
  <i lang="uk-latn">vatrushka</i>, <i lang="id">nasi goreng</i> et
  <i lang="fr">soupe à l'oignon</i>.
</p>

<!-- faute d'orthographe connue -->
<p>Un jour j'apprendrai à <u class="spelling-error">spel</u> correctement.</p>

<!-- terme défini lorsqu'il est utilisé dans une définition -->
<dl>
  <dt>HTML sémantique</dt>
  <dd>
    Utilisez les éléments en fonction de leur signification
    <b>sémantique</b>, et non de leur apparence.
  </dd>
</dl>
```

{{EmbedLiveSample("Italique, gras, souligné…", "100%", 270)}}

## Résumé

Nous avons terminé d'explorer l'accent et l'importance pour le moment. Passons à la façon dont nous représentons les listes en HTML.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Headings_and_paragraphs", "Learn_web_development/Core/Structuring_content/Lists", "Learn_web_development/Core/Structuring_content")}}
