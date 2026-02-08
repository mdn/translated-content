---
title: Fonctionnalités avancées du texte
slug: Learn_web_development/Core/Structuring_content/Advanced_text_features
l10n:
  sourceCommit: 65c873fda639b035b94db77dd0f9373f38549aa0
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Test_your_skills/HTML_text_basics", "Learn_web_development/Core/Structuring_content/Test_your_skills/Advanced_HTML_text", "Learn_web_development/Core/Structuring_content")}}

Il existe de nombreux autres éléments HTML pour définir la sémantique du texte, que nous n'avons pas abordés dans l'article [Importance et emphase](/fr/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance). Les éléments décrits dans cet article sont moins connus, mais restent utiles à connaître (et il ne s'agit toujours pas d'une liste exhaustive). Vous apprendrez ici à baliser des citations, du code informatique et d'autres textes associés, des indices et exposants, des informations de contact, et bien plus encore.

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Connaissances de base en HTML, comme présenté dans
        <a href="/fr/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Syntaxe HTML de base</a
        >. Sémantique au niveau du texte comme les <a href="/fr/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
          >titres et paragraphes</a
        > et les <a href="/fr/docs/Learn_web_development/Core/Structuring_content/Lists"
          >listes</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs d'apprentissage&nbsp;:</th>
      <td>
        <ul>
          <li>Citations.</li>
          <li>Abréviations et acronymes.</li>
          <li>Adresses.</li>
          <li>Heures et dates.</li>
          <li>Exposants et indices.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Citations

HTML contient des fonctionnalités pour baliser des citations&nbsp;; l'élément que vous utilisez dépend si vous balisez une citation en bloc ou en ligne.

### Blocs de citation

Si une section de contenu de niveau bloc (qu'il s'agisse d'un paragraphe, de plusieurs paragraphes, d'une liste, etc.) est citée depuis une autre source, vous devez l'entourer d'un élément HTML {{HTMLElement("blockquote")}} pour le signaler, et inclure une URL pointant vers la source de la citation dans un attribut [`cite`](/fr/docs/Web/HTML/Reference/Elements/blockquote#cite). Par exemple, le balisage suivant est tiré de la page MDN de l'élément `<blockquote>`&nbsp;:

```html
<p>
  <strong>L'élément HTML <code>&lt;blockquote&gt;</code></strong> (ou
  <em>l'élément HTML bloc de citation</em>) indique que le bloc de texte inclus
  est une citation étendue.
</p>
```

Pour le changer en bloc de citation, on ferait simplement ceci&nbsp;:

```html
<blockquote
  cite="https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/blockquote">
  <p>
    <strong>L'élément HTML <code>&lt;blockquote&gt;</code></strong> (ou
    <em>l'élément HTML bloc de citation</em>) indique que le bloc de texte
    inclus est une citation étendue.
  </p>
</blockquote>
```

La mise en forme par défaut du navigateur affichera ceci comme un paragraphe indenté, pour indiquer qu'il s'agit d'une citation&nbsp;: le paragraphe au-dessus de la citation est là pour le démontrer.

{{EmbedLiveSample("Blocs de citation", "100%", 200)}}

### Citations en ligne

Les citations en ligne fonctionnent exactement de la même manière, sauf qu'elles utilisent l'élément HTML {{HTMLElement("q")}}. Par exemple, le balisage ci-dessous contient une citation de la page MDN `<q>`&nbsp;:

```html
<p>
  L'élément citation — <code>&lt;q&gt;</code> — est
  <q cite="https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/q">
    prévu pour de courtes citations ne nécessitant pas un nouvel alinéa.
  </q>
</p>
```

Le navigateur l'affichera par défaut comme du texte normal entre guillemets pour indiquer une citation, comme ceci&nbsp;:

{{EmbedLiveSample("Citations en ligne", "100%", 78)}}

### Citations

Le contenu de l'attribut [`cite`](/fr/docs/Web/HTML/Reference/Elements/blockquote#cite) semble utile, mais malheureusement les navigateurs, lecteurs d'écran, etc. n'en font pas grand chose. Il n'y a aucun moyen de faire afficher le contenu de `cite` par le navigateur sans écrire votre propre solution en JavaScript ou CSS. Si vous souhaitez rendre la source de la citation disponible sur la page, il faut la rendre accessible dans le texte via un lien ou un autre moyen approprié.

Il existe un élément HTML {{HTMLElement("cite")}}, mais il est destiné à contenir le titre de la ressource citée, par exemple le nom du livre. Il n'y a aucune raison, cependant, pour laquelle vous ne pourriez pas lier le texte à l'intérieur de `<cite>` à la source de la citation d'une manière ou d'une autre&nbsp;:

```html-nolint
<p>
  Selon la
  <a href="/fr/docs/Web/HTML/Reference/Elements/blockquote">
    <cite>page MDN blockquote</cite>
  </a> :
</p>

<blockquote
  cite="https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/blockquote">
  <p>
    L'élément <strong>HTML <code>&lt;blockquote&gt;</code></strong> (ou
    <em>élément de citation en bloc HTML</em>) indique que le texte qui
    le précède est une citation longue.
  </p>
</blockquote>

<p>
  L'élément de citation — <code>&lt;q&gt;</code> — est
  <q cite="https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/q">
    destiné aux citations courtes qui ne nécessitent pas de sauts de
    paragraphe.
  </q>
  — <a href="/fr/docs/Web/HTML/Reference/Elements/q">
    <cite>Page MDN q</cite>
  </a>.
</p>
```

Les citations sont par défaut en italique.

{{EmbedLiveSample("Citations_2", "100%", 179)}}

### Qui a dit cela ? Exercice sur les blocs de citation

Il est temps d'une autre tâche&nbsp;! Dans cet exemple, nous aimerions que&nbsp;:

1. Cliquez sur **«&nbsp;Exécuter&nbsp;»** dans le bloc de code ci‑dessous pour modifier l'exemple dans le MDN Playground.
2. Transformez le paragraphe du milieu en bloc de citation, qui inclut un attribut `cite`.
3. Transformez «&nbsp;The Need To Eliminate Negative Self Talk&nbsp;» dans le troisième paragraphe en une citation en ligne, et incluez un attribut `cite`.
4. Entourez le titre de chaque source avec des balises `<cite>` et transformez chacun en lien vers cette source.

Les sources de citation dont vous avez besoin sont&nbsp;:

- `http://www.brainyquote.com/quotes/authors/c/confucius.html` pour la citation de Confucius,
- `http://example.com/affirmationsforpositivethinking` pour «&nbsp;The Need To Eliminate Negative Self Talk&nbsp;» (_De la nécessité d'éliminer un discours négatif sur soi‑même_).

Si vous faites une erreur, vous pouvez effacer votre travail en utilisant le bouton _Réinitialiser_ dans le MDN Playground. Si vous êtes vraiment bloqué, vous pouvez voir la solution sous le bloc de code.

```html live-sample___advanced-text-1
<p>
  Bonjour et bienvenue sur ma page de motivation. Comme le site de citations de
  Confucius le dit&nbsp;:
</p>
<p>
  Il n'importe pas à quelle lenteur vous allez tant que vous ne vous arrêtez
  pas.
</p>
<p>
  J'aime aussi le concept de pensée positive, et La nécessité d'éliminer un
  discours négatif sur soi‑même (comme mentionné dans Affirmations pour la
  pensée positive.)
</p>
```

{{EmbedLiveSample("advanced-text-1", "100%", 200)}}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Le HTML final devrait ressembler à ceci&nbsp;:

```html
<p>
  Bonjour et bienvenue sur ma page de motivation. Comme
  <a href="http://www.brainyquote.com/quotes/authors/c/confucius.html"
    ><cite>site de citations de Confucius</cite></a
  >
  le dit&nbsp;:
</p>

<blockquote cite="http://www.brainyquote.com/quotes/authors/c/confucius.html">
  <p>
    Il n'importe pas à quelle lenteur vous allez tant que vous ne vous arrêtez
    pas.
  </p>
</blockquote>

<p>
  J'aime aussi le concept de pensée positive, et
  <q cite="http://example.com/affirmationsforpositivethinking"
    >La nécessité d'éliminer un discours négatif sur soi‑même</q
  >
  (comme mentionné dans
  <a href="http://example.com/affirmationsforpositivethinking"
    ><cite>Affirmations pour la pensée positive</cite></a
  >.)
</p>
```

</details>

## Abréviations

Un autre élément assez courant que vous rencontrerez en parcourant le Web est {{HTMLElement("abbr")}} — il sert à entourer une abréviation ou un acronyme. Lorsque vous utilisez l'un ou l'autre, fournissez l'expansion complète du terme en texte clair lors de la première occurrence, ainsi que la balise `<abbr>` pour marquer l'abréviation. Cela donne un indice aux agents utilisateurs sur la manière d'annoncer/afficher le contenu tout en informant tous les utilisateur·ice·s de la signification de l'abréviation.

Si fournir l'expansion en plus de l'abréviation a peu de sens, et que l'abréviation ou l'acronyme est un terme fortement abrégé, fournissez l'expansion complète du terme comme valeur de l'attribut [`title`](/fr/docs/Web/HTML/Reference/Global_attributes/title)&nbsp;:

### Exemple d'abréviation

Regardons un exemple.

```html
<p>
  Nous utilisons <abbr>HTML</abbr>, Langage de balisage hypertexte, pour
  structurer nos documents web.
</p>

<p>
  Je pense que <abbr title="Révérend">R.</abbr> Green l'a fait dans la cuisine
  avec une tronçonneuse.
</p>
```

Ils sont rendus comme suit&nbsp;:

{{EmbedLiveSample("Exemple d'abréviation", "100%", 90)}}

> [!NOTE]
> Les anciennes versions de HTML incluaient également la prise en charge de l'élément {{HTMLElement("acronym")}}, mais il a été supprimé de la spécification HTML au profit de l'utilisation de `<abbr>` pour représenter à la fois les abréviations et les acronymes. `<acronym>` ne doit pas être utilisé.

### Marquer une abréviation

Pour cet exercice, nous vous demandons de marquer une abréviation.

1. Cliquez sur **«&nbsp;Exécuter&nbsp;»** dans le bloc de code ci‑dessous pour modifier l'exemple dans le MDN Playground.
2. Baliserez les abréviations fournies en utilisant le HTML approprié. Vous pouvez aussi les remplacer par vos propres abréviations et essayer de les baliser.

Si vous faites une erreur, vous pouvez effacer votre travail à l'aide du bouton _Réinitialiser_ dans le MDN Playground. Si vous êtes vraiment bloqué, vous pouvez consulter la solution sous le bloc de code.

```html-nolint live-sample___advanced-text-2
<p>La NASA fait vraiment un travail passionnant.</p>

<p>La nouvelle interface utilisateur est superbe !</p>
```

{{EmbedLiveSample('advanced-text-2', "100%", 90)}}

<details>
<summary>Cliquer ici pour afficher la solution</summary>

Votre HTML final devrait ressembler à peu près au code suivant&nbsp;:

```html
<p>
  La <abbr>NASA</abbr> (le National Aeronautics and Space Administration) fait
  vraiment un travail passionnant.
</p>

<p>
  La nouvelle interface utilisateur est
  <abbr title="Me semble bien">MSB</abbr> !
</p>
```

- On pourrait soutenir que l'acronyme NASA devrait être développé lors de sa première occurrence, car il s'agit d'une information utile que tout le monde devrait pouvoir trouver dans le texte.
- Les acronymes tels que «&nbsp;LGTM&nbsp;», en revanche, sont utilisés uniquement pour gagner de la place et du temps. Il ne serait donc pas logique de les écrire en toutes lettres, d'où leur inclusion dans l'attribut `title`. Dans une application réelle, vous ne le feriez probablement pas à la main, mais vous utiliseriez un script pour les ajouter automatiquement aux termes connus.

</details>

## Balisage des détails de contact

HTML possède un élément pour baliser les coordonnées — {{HTMLElement("address")}}. Celui-ci englobe vos coordonnées, par exemple&nbsp;:

```html
<address>
  <p>Chris Mills, Manchester, The Grim North, UK</p>
</address>
```

Cela peut également inclure un balisage plus complexe, et d'autres formes de coordonnées, par exemple&nbsp;:

```html
<address>
  <p>
    Chris Mills<br />
    Manchester<br />
    The Grim North<br />
    UK
  </p>

  <ul>
    <li>Tel: 01234 567 890</li>
    <li>Email: me@grim-north.co.uk</li>
  </ul>
</address>
```

Notez que ce type de balisage serait également acceptable, si la page liée contenait les coordonnées&nbsp;:

```html
<address>
  <p>Page écrite par <a href="../authors/chris-mills/">Chris Mills</a>.</p>
</address>
```

> [!NOTE]
> L'élément HTML {{HTMLElement("address")}} doit uniquement être utilisé pour fournir les coordonnées du document contenu par l'élément HTML {{HTMLElement("article")}} ou {{HTMLElement("body")}} le plus proche. Il serait correct de l'utiliser dans le pied de page d'un site pour inclure les coordonnées de l'ensemble du site, ou à l'intérieur d'un article pour les coordonnées de l'auteur, mais pas pour baliser une liste d'adresses sans rapport avec le contenu de cette page.

## Exposants et indices

Vous devrez parfois utiliser exposants et indices pour marquer des éléments comme des dates, des formules chimiques et des équations mathématiques afin qu'ils aient la bonne signification. Les éléments HTML {{HTMLElement("sup")}} et {{HTMLElement("sub")}} effectuent ce travail. Par exemple&nbsp;:

```html
<p>Ma date de naissance est le 1<sup>er</sup> mai 2001.</p>
<p>
  La formule chimique de la caféine est
  C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>.
</p>
<p>Si x<sup>2</sup> égale 9, x doit valoir 3 ou -3.</p>
```

Le résultat de ce code ressemble à ceci&nbsp;:

{{EmbedLiveSample("Exposants et indices", "100%", 160)}}

## Représentation du code informatique

HTML met à votre disposition un certain nombre d'éléments pour marquer du code informatique&nbsp;:

- {{HTMLElement("code")}}&nbsp;: Pour marquer des parties génériques de code informatique.
- {{HTMLElement("pre")}}&nbsp;: Pour conserver les blancs (généralement dans les blocs de code) — si vous indentez ou mettez des blancs en excès dans votre texte, les navigateurs les ignoreront et vous ne les verrez pas sur la page rendue. Si vous enveloppez le texte dans des balises `<pre></pre>` tags cependant, les blancs seront rendus identiquement à ce que vous voyez dans votre éditeur de texte.
- {{HTMLElement("var")}}&nbsp;: Pour marquer spécifiquement les noms de variables.
- {{HTMLElement("kbd")}}&nbsp;: Pour marquer les touches de clavier (et autres types d'entrée) saisies sur l'ordinateur.
- {{HTMLElement("samp")}}&nbsp;: Pour marquer la sortie d'un programme informatique.

Voyons des exemples de ces éléments et comment ils servent à représenter du code informatique.
Si vous souhaitez voir le fichier complet, consultez le fichier d'exemple [other-semantics.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/advanced-text-formatting/other-semantics.html).
Vous pouvez télécharger le fichier et l'ouvrir dans votre navigateur pour voir par vous-même, mais voici un extrait du code&nbsp;:

```html
<pre><code>const para = document.querySelector('p');

para.onclick = function() {
  alert('Owww, stop poking me!');
}</code></pre>

<p>
  Vous ne devez pas utiliser d'éléments de présentation comme
  <code>&lt;font&gt;</code> et <code>&lt;center&gt;</code>.
</p>

<p>
  Dans l'exemple JavaScript ci‑dessus, <var>para</var> représente un élément
  paragraphe.
</p>

<p>
  Sélectionnez tout le texte avec <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>A</kbd>.
</p>

<pre>$ <kbd>ping mozilla.org</kbd>
<samp>PING mozilla.org (63.245.215.20): 56 data bytes
64 bytes from 63.245.215.20: icmp_seq=0 ttl=40 time=158.233 ms</samp></pre>
```

Ce code se présente ainsi&nbsp;:

{{EmbedLiveSample("Représentation du code informatique", "100%", 350)}}

## Balisage des heures et dates

HTML fournit également l'élément HTML {{HTMLElement("time")}} pour marquer les heures et les dates dans un format lisible par machine. Par exemple&nbsp;:

```html
<time datetime="2016-01-20">20 janvier 2016</time>
```

En quoi est-ce utile&nbsp;? Eh bien, il y a beaucoup de façons différentes dont les humains écrivent les dates. La date ci-dessus pourrait s'écrire comme suit&nbsp;:

<!-- markdownlint-disable MD033 -->

- 20 Janvier 2016
- <span lang="en">20th January 2016</span>
- Jan 20 2016
- 20/01/16
- 01/20/16
- Le 20 du mois prochain
- 20e Janvier 2016
- <span lang="ja">2016 年 1 月 20 日</span>
- etc.

<!-- markdownlint-enable MD033 -->

Mais ces différents formes ne sont pas facilement reconnaissables par les ordinateurs — que se passerait‑il si vous vouliez saisir automatiquement les dates de tous les événements dans une page et les insérer dans un calendrier&nbsp;? L'élément {{HTMLElement("time")}} vous permettra d'attacher un horodatage non ambigu lisible par machine à cette fin.

L'exemple de base ci-dessus ne fournit qu'une simple date lisible par machine, mais il y a beaucoup d'autres options possibles, par exemple&nbsp;:

```html
<!-- Simple date standard -->
<time datetime="2016-01-20">20 janvier 2016</time>
<!-- Juste l'année et le mois -->
<time datetime="2016-01">janvier 2016</time>
<!-- Juste le mois et les jour -->
<time datetime="01-20">20 janvier</time>
<!-- Juste l'heure, heure et minutes -->
<time datetime="19:30">19h30</time>
<!-- Vous pouvez aussi mettre les secondes et les millisecondes&nbsp;! -->
<time datetime="19:30:01.856">19h30m1,856s</time>
<!-- Date et heure -->
<time datetime="2016-01-20T19:30">19h30, le 20 janvier 2016</time>
<!-- Date et heure avec décalage de fuseau horaire -->
<time datetime="2016-01-20T19:30+01:00"
  >19h30, le 20 janvier 2016 corespond à 20h30 en France</time
>
<!-- Appel d'un numéro de semains donné -->
<time datetime="2016-W04">La 4e semaine de 2016</time>
```

## Résumé

Nous voici arrivés à la fin de notre étude de la sémantique des textes HTML moins courants. Ce que vous avez vu dans ce cours ne constitue pas une liste exhaustive des éléments texte HTML — nous avons essayé de couvrir les éléments essentiels, ainsi que certains des plus courants que vous rencontrerez dans la nature.

Ensuite, nous vous proposerons quelques tests pour vérifier dans quelle mesure vous avez compris et retenu les informations fournies sur les fonctionnalités de texte HTML moins courantes.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Test_your_skills/HTML_text_basics", "Learn_web_development/Core/Structuring_content/Test_your_skills/Advanced_HTML_text", "Learn_web_development/Core/Structuring_content")}}
