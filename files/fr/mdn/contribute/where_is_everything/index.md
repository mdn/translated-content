---
title: Où se trouve tout sur MDN ? Un guide de nos dépôts
slug: MDN/Contribute/Where_is_everything
tags:
  - Best practices
  - Community
  - GitHub
  - MDN
  - Beginners
  - Repos
translation_of: MDN/Contribute/Where_is_everything
---
<p>{{MDNSidebar}}</p>

<p>MDN est un projet complexe avec de nombreux composants. Contribuer au site est facile au début, si vous avez quelques connaissances de GitHub et que vous commencez par corriger des fautes de frappe ou améliorer des extraits de code. Cependant, lorsque vous commencez à faire des contributions plus importantes, comme l'ajout de nouvelles pages entières, vous remarquerez que de nombreux éléments du contenu ne sont pas stockés dans les sources de la page et proviennent d'ailleurs.</p>

<p>Cet article sert de guide rapide pour trouver les différents dépôts que vous devez modifier pour mettre à jour les différentes parties du contenu de MDN.</p>

<h2 id="core_repos">Dépôts principaux</h2>

<ul>
  <li><strong>Contenu de référence (anglais)</strong> : <a href="https://github.com/mdn/content">https://github.com/mdn/content</a>. Le dépôt le plus important pour le contenu MDN : c'est là qu'est stocké le contenu principal en anglais du site et que vous effectuerez toutes les modifications standard du contenu des pages.</li>
  <li><strong>Plateforme MDN</strong> : <a href="https://github.com/mdn/yari">https://github.com/mdn/yari</a>. C'est là que la plateforme MDN est stockée, et c'est là que vous irez si vous souhaitez apporter des modifications à la structure de haut niveau des pages de MDN ou aux mécanismes de rendu.</li>
  <li><strong>Données de compatibilité des navigateurs</strong> : <a href="https://github.com/mdn/browser-compat-data">https://github.com/mdn/browser-compat-data</a>. C'est ici que sont stockées les données utilisées pour générer les tableaux de compatibilité des navigateurs que l'on trouve sur nos pages de référence. Allez ici pour modifier les données de compatibilité !</li>
  <li><strong>Exemples interactifs</strong> : <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a>. Ce dépôt stocke le code de rendu et les blocs de code d'exemple qui, ensemble, produisent les beaux exemples modifiables et copiables que l'on trouve en haut de beaucoup de nos pages de référence. Éditez ces exemples ici.</li>
  <li><strong>Contenu traduit</strong> : <a href="https://github.com/mdn/translated-content">https://github.com/mdn/translated-content</a>. C'est ici que vit le contenu localisé. Allez ici si vous voulez aider à maintenir les locales de niveau 1 que nous avons actuellement dégelées (actuellement <code>fr</code>, <code>ja</code>, <code>ko</code>, <code>zh-CN</code>/<code>zh-TW</code> et <code>ru</code>). Nous n'autorisons actuellement pas les éditions pour d'autres locales.</li>
  <li><strong>Données CSS</strong> : <a href="https://github.com/mdn/data">https://github.com/mdn/data</a>. Conçu à l'origine comme un dépôt de données MDN à usage général, le dépôt de données sert désormais à conserver les données relatives aux fonctionnalités CSS telles que la syntaxe formelle, l'héritage, la valeur calculée, le type d'animation, etc. Ces données sont utilisées pour générer des sections sur les pages de référence CSS telles que la définition formelle et la syntaxe formelle.</li>
</ul>

<h2 id="other_repos">Autres dépôts</h2>

<ul>
  <li><strong>Dépôts des démonstrations</strong> : L'organisation GitHub de MDN contient un très grand nombre de dépôts de démonstration, par exemple <a href="https://github.com/mdn/css-examples">css-examples</a>, <a href="https://github.com/mdn/dom-examples">dom-examples</a>, <a href="https://github.com/mdn/webaudio-examples">webaudio-examples</a>. Elles contiennent généralement des exemples autonomes qui sont souvent liés à des pages MDN, mais vous trouverez parfois l'un de ces exemples intégré à une page à l'aide d'un appel de macro comme celui-ci - \{{EmbedGHLiveSample("css-examples/learn/tasks/grid/grid1.html", '100%', 700)}}. Si vous souhaitez modifier un exemple dynamique autonome, vous le trouverez toujours dans l'un de ces dépôts d'exemples.</li>
  <li><strong>MDN-minimaliste</strong> : <a href="https://github.com/mdn/mdn-minimalist">https://github.com/mdn/mdn-minimalist</a>. Les informations de style de base pour MDN. Si vous souhaitez contribuer à améliorer le style CSS de MDN, c'est ici que vous devez vous rendre.</li>
</ul>
