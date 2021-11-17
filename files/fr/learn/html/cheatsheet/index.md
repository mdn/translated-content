---
title: Cheatsheet HTML
slug: Learn/HTML/Cheatsheet
tags:
  - Cheatsheet
  - HTML
  - Intermediate
  - Learn
translation_of: Learn/HTML/Cheatsheet
original_slug: Apprendre/HTML/Cheatsheet
---
{{draft}}

Lorsqu'on utilise {{Glossary("HTML")}}, une antisèche, une page rapide et récapitulative (_cheatsheet_) peut s'avérer plutôt pratique pour se souvenir rapidement de quelle balise HTML utiliser dans quel cas. MDN possède également une [documentation HTML exhaustive](/fr/docs/Web/HTML/Element) ainsi que différents [tutoriels HTML détaillés](/fr/Apprendre/HTML/Comment). Toutefois, dans la plupart des cas, il suffit juste d'une rapide vérification afin de pouvoir continuer. Cet article, sous la forme d'une antisèche synthétique, est là pour fournir des exemples de codes concis pour les usages les plus fréquents des éléments les plus utilisés.

> **Note :** Les balises HTML doivent en premier lieu être utilisées pour leur sémantique et non pour leur apparence. Il est toujours possible de modifier la mise en forme d'une balise donnée grâce à {{Glossary("CSS")}}. Aussi, quand vous utilisez HTML, soyez concentré-e sur la signification plutôt que sur l'apparence finale.

## Éléments en ligne

Un élément est une partie d'une page web. Certains éléments sont agissent comme des conteneurs : ils sont grands et contiennent de plus petits éléments. Certains éléments sont plus petits et sont imbriqués dans des éléments plus grands. Par défaut les éléments « en ligne » apparaissent les uns à côté des autres sur une page web. Ils prennent autant de largeur que nécessaire sur une page et s'organisent horizontalement à la façon des mots dans une phrase ou des livres dans une bibliothèque. Tous les éléments en ligne peuvent être placés à l'intérieur de l'élément `<body>`.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Usage</th>
      <th scope="col">Élément</th>
      <th scope="col">Exemple</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Un lien</td>
      <td>{{HTMLElement("a")}}</td>
      <td id="a-example">
        <pre class="brush: html">
&#x3C;a href="https://example.org">
Un lien vers example.org&#x3C;/a>.</pre
        >
        {{EmbedLiveSample("a-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>Une image</td>
      <td>{{HTMLElement("img")}}</td>
      <td id="img-example">
        <pre class="brush: html">&#x3C;img src="beast.png" width="25" /></pre>
        {{EmbedLiveSample("img-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>Un conteneur en ligne</td>
      <td>{{HTMLElement("span")}}</td>
      <td id="span-example">
        <pre class="brush: html">
Utilisé pour grouper des éléments, par exemple pour &#x3C;span style="color:blue">les mettre en forme&#x3C;/span>.</pre
        >
        {{EmbedLiveSample("span-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>Emphase du texte</td>
      <td>{{HTMLElement("em")}}</td>
      <td id="em-example">
        <pre class="brush: html">&#x3C;em>La classe non ?&#x3C;/em>.</pre>
        {{EmbedLiveSample("em-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>Texte idiomatique</td>
      <td>{{HTMLElement("i")}}</td>
      <td id="i-example">
        <pre class="brush: html">
Marque la phrase &#x3C;i>généralement en italique&#x3C;/i>.</pre
        >
        {{EmbedLiveSample("i-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>Texte d'attention</td>
      <td>{{HTMLElement("b")}}</td>
      <td id="b-example">
        <pre class="brush: html">
Met en avant un &#x3C;b>mot ou une phrase d'une certaine importance&#x3C;/b>.</pre
        >
        {{EmbedLiveSample("b-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>Texte d'importance</td>
      <td>{{HTMLElement("strong")}}</td>
      <td id="strong-example">
        <pre class="brush: html">
&#x3C;strong>Ce contenu est important !&#x3C;/strong></pre
        >
        {{EmbedLiveSample("strong-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>Marquer du texte</td>
      <td>{{HTMLElement("mark")}}</td>
      <td id="mark-example">
        <pre class="brush: html">&#x3C;mark>Vous me voyez ?&#x3C;/mark></pre>
        {{EmbedLiveSample("mark-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>Texte barré</td>
      <td>{{HTMLElement("s")}}</td>
      <td id="s-example">
        <pre class="brush: html">
&#x3C;s>Je ne suis plus pertinent.&#x3C;/s></pre
        >
        {{EmbedLiveSample("s-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>Mise en indice</td>
      <td>{{HTMLElement("sub")}}</td>
      <td id="sub-example">
        <pre class="brush: html">H&#x3C;sub>2&#x3C;/sub>O</pre>
        {{EmbedLiveSample("sub-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>Texte de commentaire</td>
      <td>{{HTMLElement("small")}}</td>
      <td id="small-example">
        <pre class="brush: html">
Utilisé pour représenter &#x3C;small>les petites
notes &#x3C;/small> d'un document.</pre
        >
        {{EmbedLiveSample("small-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>Adresse</td>
      <td>{{HTMLElement("address")}}</td>
      <td id="address-example">
        <pre class="brush: html">
&#x3C;address>15 Rue du Bourg&#x3C;/address></pre
        >
        {{EmbedLiveSample("address-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>Citation textuelle</td>
      <td>{{HTMLElement("cite")}}</td>
      <td id="cite-example">
        <pre class="brush: html">
Pour plus d'informations sur les monstres,
voir &#x3C;cite>Le monstrueux livre des monstres&#x3C;/cite>.</pre
        >
        {{EmbedLiveSample("cite-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>Mise en exposant</td>
      <td>{{HTMLElement("sup")}}</td>
      <td id="sup-example">
        <pre class="brush: html">x&#x3C;sup>2&#x3C;/sup></pre>
        {{EmbedLiveSample("sup-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>Citation en ligne</td>
      <td>{{HTMLElement("q")}}</td>
      <td id="q-example">
        <pre class="brush: html">
&#x3C;q>Toi aussi mon fils ?&#x3C;/q>, a-t-il dit.</pre
        >
        {{EmbedLiveSample("q-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>Un saut de ligne</td>
      <td>{{HTMLElement("br")}}</td>
      <td id="br-example">
        <pre class="brush: html">Ligne 1&#x3C;br>Ligne 2</pre>
        {{EmbedLiveSample("br-example", 100, 80)}}
      </td>
    </tr>
    <tr>
      <td>Un saut de ligne possible</td>
      <td>{{HTMLElement("wbr")}}</td>
      <td id="wbr-example">
        <pre class="brush: html">
&#x3C;div style="width: 200px">
  Llanfair&#x3C;wbr>pwllgwyngyllgogerychwyrngogogoch.
&#x3C;/div></pre
        >
        {{EmbedLiveSample("wbr-example", 100, 80)}}
      </td>
    </tr>
    <tr>
      <td>Date</td>
      <td>{{HTMLElement("time")}}</td>
      <td id="time-example">
        <pre class="brush: html">
Utilisé pour mettre en forme la date. Par exemple :
&#x3C;time datetime="2020-05-24" pubdate>
Publié le 24 mai 2020&#x3C;/time>.</pre
        >
        {{EmbedLiveSample("time-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>Code</td>
      <td>{{HTMLElement("code")}}</td>
      <td id="code-example">
        <pre class="brush: html">
Ce texte est au format normal,
mais &#x3C;code>celui-ci représente du code&#x3C;/code>.</pre
        >
        {{EmbedLiveSample("code-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>Audio</td>
      <td>{{HTMLElement("audio")}}</td>
      <td id="audio-example">
        <pre class="brush: html">
&#x3C;audio controls="controls">
  &#x3C;source="t-rex-roar.mp3" type="audio/mpeg">
  Votre navigateur ne prend pas en charge audio.
&#x3C;/audio></pre
        >
        {{EmbedLiveSample("audio-example", 100, 80)}}
      </td>
    </tr>
    <tr>
      <td>Video</td>
      <td>{{HTMLElement("video")}}</td>
      <td id="video-example">
        <pre class="brush: html">
&#x3C;video controls  width="250"
  src="https://archive.org/download/ElephantsDream/ed_hd.ogv" >
  L'élément &#x3C;code>video&#x3C;/code> n'est pas pris en charge.
&#x3C;/video></pre
        >
        {{EmbedLiveSample("video-example", 100, 200)}}
      </td>
    </tr>
  </tbody>
</table>

## Éléments de bloc

Les éléments de bloc, en revanche, occupent toutes la largeur de la page. Ils occupent une ligne entière et ne sont pas apposés les uns à côtés des autres. Ils s'empilent plutôt à l'instar des paragraphes dans un texte.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Usage</th>
      <th scope="col">Élément</th>
      <th scope="col">Exemple</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Un paragraphe</td>
      <td>{{HTMLElement("p")}}</td>
      <td id="p-example">
        <pre class="brush: html">
&#x3C;p>Je suis un paragraphe&#x3C;/p>
&#x3C;p>Et un autre paragraph&#x3C;/p></pre
        >
        {{EmbedLiveSample("p-example", 100, 150)}}
      </td>
    </tr>
    <tr>
      <td>Une citation étendue</td>
      <td>{{HTMLElement("blockquote")}}</td>
      <td id="blockquote-example">
        <pre class="brush: html">
Ils sont alors dit :
&#x3C;blockquote>L'élément blockquote indique une citation étendue.&#x3C;/blockquote></pre
        >
        {{EmbedLiveSample("blockquote-example", 100, 100)}}
      </td>
    </tr>
    <tr>
      <td>Information supplémentaire</td>
      <td>{{HTMLElement("details")}}</td>
      <td id="details-example">
        <pre class="brush: html">
&#x3C;details>
  &#x3C;summary>Anti-sèche HTML&#x3C;/summary>
  &#x3C;p>Éléments en ligne&#x3C;/p>
  &#x3C;p>Éléments de bloc&#x3C;/p>
&#x3C;/details></pre
        >
        {{EmbedLiveSample("details-example", 100, 150)}}
      </td>
    </tr>
    <tr>
      <td>Une liste non-ordonnée</td>
      <td>{{HTMLElement("ul")}}</td>
      <td id="ul-example">
        <pre class="brush: html">&#x3C;ul><br>
  &#x3C;li>Je suis un élément de liste&#x3C;/li><br>
  &#x3C;li>Et moi un autre&#x3C;/li><br>
&#x3C;/ul></pre>
        {{EmbedLiveSample("ul-example", 100, 100)}}
      </td>
    </tr>
    <tr>
      <td>Une liste ordonnée</td>
      <td>{{HTMLElement("ol")}}</td>
      <td id="ol-example">
        <pre class="brush: html">&#x3C;ol><br>
  &#x3C;li>Je suis le premier élément&#x3C;/li><br>
  &#x3C;li>Et moi le deuxième&#x3C;/li><br>
&#x3C;/ol></pre>
        {{EmbedLiveSample("ol-example", 100, 100)}}
      </td>
    </tr>
    <tr>
      <td>Une liste de définitions</td>
      <td>{{HTMLElement("dl")}}</td>
      <td id="dl-example">
        <pre class="brush: html">&#x3C;dl>
  &#x3C;dt>Un terme&#x3C;/dt><br>
  &#x3C;dd>La définition du terme&#x3C;/dd>
  &#x3C;dt>Un autre terme&#x3C;/dt>
  &#x3C;dd>La définition d'un autre terme&#x3C;/dd>
&#x3C;/dl></pre>
        {{EmbedLiveSample("dl-example", 100, 150)}}
      </td>
    </tr>
    <tr>
      <td>Un séparateur horizontal</td>
      <td>{{HTMLElement("hr")}}</td>
      <td id="hr-example">
        <pre class="brush: html">avant&#x3C;hr>après</pre>
        {{EmbedLiveSample("hr-example", 100, 100)}}
      </td>
    </tr>
    <tr>
      <td>Un titre</td>
      <td>
        {{HTMLElement("Heading_Elements", "&lt;h1&gt;-&lt;h6&gt;")}}
      </td>
      <td id="h1-h6-example">
        <pre class="brush: html">
&#x3C;h1> Titre de niveau 1 &#x3C;/h1>
&#x3C;h2> Titre de niveau 2 &#x3C;/h2>
&#x3C;h3> Titre de niveau 3 &#x3C;/h3>
&#x3C;h4> Titre de niveau 4 &#x3C;/h4>
&#x3C;h5> Titre de niveau 5 &#x3C;/h5>
&#x3C;h6> Titre de niveau 6 &#x3C;/h6></pre
        >
        {{EmbedLiveSample("h1-h6-example", 100, 350)}}
      </td>
    </tr>
  </tbody>
</table>
