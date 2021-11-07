---
title: '<a> : l''élément d''ancre'
slug: Web/HTML/Element/a
tags:
  - Content
  - Element
  - HTML
  - HTML text-level semantics
  - HTML:Flow content
  - HTML:Interactive content
  - HTML:Palpable Content
  - HTML:Phrasing content
  - Inline element
  - Reference
  - Web
translation_of: Web/HTML/Element/a
browser-compat: html.elements.a
---
{{HTMLRef}}

L'élément HTML **`<a>`** (pour ancre ou _anchor_ en anglais), avec [son attribut `href`](#href), crée un lien hypertexte vers des pages web, des fichiers, des adresses e-mail, des emplacements se trouvant dans la même page, ou tout ce qu'une URL peut adresser. Le contenu de chaque élément `<a>` **doit** indiquer la destination du lien. Si [l'attribut `href`](#href) est présent, appuyer sur la touche entrée en se concentrant sur l'élément `<a>` l'activera.

{{EmbedInteractiveExample("pages/tabbed/a.html")}}

## Attributs

Cet élément inclut les [attributs universels](/fr/docs/Web/HTML/Global_attributes).

- **`download`**

  - : Sans valeur, le navigateur proposera un nom de fichier/extension, généré à partir de diverses sources :

    - L'en-tête HTTP [`Content-Disposition`](/fr/docs/Web/HTTP/Headers/Content-Disposition)
    - Le segment final dans l'URL : [path](/fr/docs/Web/API/URL/pathname)
    - Le [Type MIME](/fr/docs/Glossary/MIME_type) (de l'en-tête [`Content-Type`](/fr/docs/Web/HTTP/Headers/Content-Type), le début d'une URL [`data:`](/fr/docs/Web/HTTP/Basics_of_HTTP/Data_URIs), ou [`Blob.type`](/fr/docs/Web/API/Blob/type) pour une URL [`blob:`](/fr/docs/Web/API/URL/createObjectURL)).

    La définition d'une valeur la suggère comme nom de fichier. Les caractères `/` et `\` sont convertis en caractères de soulignement (`_`). Les systèmes de fichiers peuvent interdire d'autres caractères dans les noms de fichiers, les navigateurs ajusteront donc le nom suggéré si nécessaire.

    > **Note :**
    >
    > - `download` ne fonctionne que pour [les URLs de même origine](/fr/docs/Web/Security/Same-origin_policy), ou les schémas `blob:` et `data:`.
    > - Si l'en-tête `Content-Disposition` comporte des informations différentes de celles de l'attribut `download`, le comportement résultant peut différer :
    >
    >   - Si l'en-tête spécifie un `nom de fichier`, il a priorité sur un nom de fichier spécifié dans l'attribut `download`.
    >   - Si l'en-tête spécifie une disposition de `inline`, Chrome, et Firefox 82+, donnent la priorité à l'attribut et le traitent comme un téléchargement. Les versions de Firefox antérieures à 82 donnent la priorité à l'en-tête et affichent le contenu en ligne.

- **`href`**

  - : L'URL vers laquelle pointe l'hyperlien. Les liens ne sont pas limités aux URL basées sur HTTP - ils peuvent utiliser n'importe quel schéma d'URL pris en charge par les navigateurs :

    - Sections d'une page avec des fragments d'URL
    - Des morceaux de fichiers médias avec des fragments de médias
    - Les numéros de téléphone avec l'URL `tel:`.
    - Les adresses électroniques avec l'URL `mailto:`.
    - Bien que les navigateurs web puissent ne pas prendre en charge d'autres schémas d'URL, les sites web le peuvent avec [`registerProtocolHandler()`](/fr/docs/Web/API/Navigator/registerProtocolHandler).

- **`hreflang`**
  - : Donne des indications sur le langage humain de l'URL liée. Aucune fonctionnalité intégrée. Les valeurs autorisées sont les mêmes que [l'attribut global `lang`](/fr/docs/Web/HTML/Global_attributes/lang).
- **`ping`**
  - : Contient une liste d'URL séparées par des espaces vers lesquelles sont envoyées des requêtes [`POST`](/fr/docs/Web/HTTP/Methods/POST) avec le corps `PING` lorsque l'utilisateur suit le lien. Cet attribut est généralement utilisé pour tracer un utilisateur.
- **`referrerpolicy`** {{experimental_inline}}
  - : La portion du [referrer](/fr/docs/Web/HTTP/Headers/Referer) envoyer lors du suivi du lien. Voir [`Referrer-Policy`](/fr/docs/Web/HTTP/Headers/Referrer-Policy) pour les valeurs possibles et leurs effets.
- **`rel`**
  - : Cet attribut indique la relation entre la cible du lien et l'objet faisant le lien. La valeur est une liste de [types de liens](/fr/docs/Web/HTML/Link_types) séparés par des espaces.
- **`target`**

  - : Où afficher l'URL liée, comme nom d'un _contexte de navigation_ (un onglet, une fenêtre ou un [`<iframe>`](/fr/docs/Web/HTML/Element/iframe)). Les mots-clés suivants ont des significations spéciales pour l'endroit où charger l'URL :

    - `_self` : le contexte de navigation actuel. (Par défaut)
    - `_blank` : généralement un nouvel onglet, mais les utilisateurs peuvent configurer les navigateurs pour ouvrir une nouvelle fenêtre à la place.
    - `_parent` : le contexte de navigation parent de celui en cours. S'il n'y a pas de parent, il se comporte comme `_self`.
    - `_top` : le contexte de navigation le plus haut (le contexte "le plus haut" qui est un ancêtre du contexte actuel). S'il n'a aucun ancêtre, il se comporte comme `_self`.

    > **Note :** Définir `target="_blank"` sur les éléments `<a>` fournit implicitement le même comportement `rel` que définir [`rel="noopener"`](/fr/docs/Web/HTML/Link_types/noopener) qui ne définit pas `window.opener`. Voir la [compatibilité des navigateurs](#browser_compatibility) pour le support.

- **`type`**
  - : Donne des indications sur le format de l'URL liée avec un [Type MIME](/fr/docs/Glossary/MIME_type). Aucune fonctionnalité intégrée.

### Attributs obsolètes

- **`charset`** {{Deprecated_Inline}}

  - : Fait allusion aux [encodages des caractères](/fr/docs/Glossary/character_encoding) de l'URL liée.

    > **Note :** Cet attribut est déprécié et **ne doit pas être utilisé par les auteurs**. Utilisez l'en-tête HTTP [`Content-Type`](/fr/docs/Web/HTTP/Headers/Content-Type) sur l'URL liée.

- **`coords`** {{Deprecated_Inline}}
  - : Utilisé avec [l'attribut `shape`](#shape). Une liste de coordonnées séparées par des virgules.
- **`name`** {{Deprecated_Inline}}

  - : Était nécessaire pour définir un emplacement cible possible dans une page. En HTML 4.01, `id` et `name` pouvaient tous deux être utilisés sur `<a>`, pour autant qu'ils aient des valeurs identiques.

    > **Note :** Utilisez l'attribut universel [`id`](/fr/docs/Web/HTML/Global_attributes#attr-id) à la place.

- **`rev`** {{Deprecated_Inline}}
  - : Spécifiait un lien inverse ; l'opposé de [l'attribut `rel`](#rel). Déprécié pour avoir été très confus.
- **`shape`** {{Deprecated_Inline}}

  - : La forme de la région de l'hyperlien dans une carte d'image.

    > **Note :** Utilisez plutôt l'élément [`<area>`](/fr/docs/Web/HTML/Element/area) pour les cartes d'images.

## Propriétés

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/Guide/HTML/Content_categories"
          >Catégories de contenu</a
        >
      </th>
      <td>
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content"
          >Contenu du flux</a
        >,
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >contenu phrasé</a
        >,
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#interactive_content"
          >contenu interactif</a
        >, contenu palpable.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a
          href="/fr/docs/Web/Guide/HTML/Content_categories#transparent_content_model"
          >Transparent</a
        >, contenant soit le
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content"
          >contenu du flux</a
        >
        (à l'exclusion du
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#interactive_content"
          >contenu interactif</a
        >), soit
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        Aucune, la balise d'ouverture et la balise de fermeture sont
        obligatoires.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément qui accepte
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >la formulation du contenu</a
        >, ou tout élément qui accepte
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content"
          >le contenu du flux</a
        >, mais pas les autres éléments <code>&#x3C;a></code>.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="https://w3c.github.io/aria/#link">lien</a> lorsque l'attribut
        <code>href</code> est présent, sinon
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >pas de rôle correspondant</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>
        <p>Lorsque l'attribut <code>href</code> est présent :</p>
        <ul>
          <li><a href="https://w3c.github.io/aria/#button">button</a></li>
          <li><a href="https://w3c.github.io/aria/#checkbox">checkbox</a></li>
          <li><a href="https://w3c.github.io/aria/#menuitem">menuitem</a></li>
          <li>
            <a href="https://w3c.github.io/aria/#menuitemcheckbox"
              >menuitemcheckbox</a
            >
          </li>
          <li>
            <a href="https://w3c.github.io/aria/#menuitemradio"
              >menuitemradio</a
            >
          </li>
          <li><a href="https://w3c.github.io/aria/#option">option</a></li>
          <li><a href="https://w3c.github.io/aria/#radio">radio</a></li>
          <li><a href="https://w3c.github.io/aria/#switch">switch</a></li>
          <li><a href="https://w3c.github.io/aria/#tab">tab</a></li>
          <li><a href="https://w3c.github.io/aria/#treeitem">treeitem</a></li>
        </ul>
        <p>Lorsque l'attribut <code>href</code> n'est pas présent :</p>
        <ul>
          <li>tout</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>
        <a href="/fr/docs/Web/API/HTMLAnchorElement"
          ><code>HTMLAnchorElement</code></a
        >
      </td>
    </tr>
  </tbody>
</table>

## Exemples

### Créer un lien vers une URL absolue

#### HTML

```html
<a href="https://www.mozilla.com">
  Mozilla
</a>
```

#### Résultat

{{EmbedLiveSample("Créer_un_lien_vers_une_URL_absolue", "100%", 50)}}

### Créer des liens vers des URL relatives

#### HTML

```html
<a href="//example.com">URL relative au schéma</a>
<a href="/fr/docs/Web/HTML">URL relative à l'origine</a>
<a href="./p">URL relative au répertoire</a>
```

```css hidden
a { display: block; margin-bottom: 0.5em }
```

#### Résultat

{{EmbedLiveSample("Créer_des_liens_vers_des_URL_relatives", "100%", 120)}}

### Créer un lien vers un élément de la même page

```html
<!-- <a> élément liens vers la section ci-dessous -->
<p><a href="#section_further_down">
  Passez à la rubrique ci-dessous
</a></p>

<!-- Rubrique à relier -->
<h2 id="section_further_down">Section plus bas</h2>
```

> **Note :** Vous pouvez utiliser `href="#top"` ou le fragment vide (`href="#"`) pour créer un lien vers le haut de la page actuelle, [comme défini dans la spécification HTML](https://html.spec.whatwg.org/multipage/browsing-the-web.html#scroll-to-the-fragment-identifier).

### Créer un lien avec une adresse électronique

Pour créer des liens qui s'ouvrent dans le programme de messagerie de l'utilisateur, pour lui permettre d'envoyer un nouveau message, utilisez le schéma `mailto:` :

```html
<a href="mailto:nowhere@mozilla.org">Envoyer un courriel nulle part</a>
```

Pour plus de détails sur les URL `mailto:`, comme l'inclusion d'un sujet ou d'un corps de message, voir [Liens de courrier électronique](/fr/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#e-mail_links) ou [RFC 6068](https://tools.ietf.org/html/rfc6068).

### Créer un lien avec les numéros de téléphone

```html
<a href="tel:+49.157.0156">+49 157 0156</a>
<a href="tel:+1(555)5309">(555) 5309</a>
```

`tel:` le comportement du lien varie en fonction des capacités du périphérique :

- Les appareils cellulaires composent automatiquement le numéro.
- La plupart des systèmes d'exploitation disposent de programmes permettant de passer des appels, comme Skype ou FaceTime.
- Les sites web peuvent passer des appels téléphoniques avec [`registerProtocolHandler`](/fr/docs/Web/API/Navigator/registerProtocolHandler), comme `web.skype.com`.
- Les autres comportements comprennent l'enregistrement du numéro dans les contacts, ou l'envoi du numéro à un autre appareil.

Voir [RFC 3966](https://tools.ietf.org/html/rfc3966) pour la syntaxe, les fonctionnalités supplémentaires et d'autres détails sur le schéma URL `tel:`.

### Utilisation de l'attribut de téléchargement pour enregistrer un \<canvas> au format PNG.

Pour enregistrer le contenu d'un élément [`<canvas>`](/fr/docs/Web/HTML/Element/canvas) sous forme d'image, vous pouvez créer un lien avec un attribut `download` et les données du canvas sous forme d'une URL `data:` :

#### Exemple d'application de peinture avec lien de sauvegarde

##### HTML

```html
<p>
  Peignez en maintenant le bouton de la souris enfoncé et en le déplaçant.
  <a href="" download="my_painting.png">Télécharger ma peinture</a>
</p>

<canvas width="300" height="300"></canvas>
```

##### CSS

```css
html {
  font-family: sans-serif;
}
canvas {
  background: #fff;
  border: 1px dashed;
}
a {
  display: inline-block;
  background: #69c;
  color: #fff;
  padding: 5px 10px;
}
```

##### JavaScript

```js
var canvas = document.querySelector('canvas'),
    c = canvas.getContext('2d');
c.fillStyle = 'hotpink';

function draw(x, y) {
  if (isDrawing) {
    c.beginPath();
    c.arc(x, y, 10, 0, Math.PI*2);
    c.closePath();
    c.fill();
  }
}

canvas.addEventListener('mousemove', event =>
  draw(event.offsetX, event.offsetY)
);
canvas.addEventListener('mousedown', () => isDrawing = true);
canvas.addEventListener('mouseup', () => isDrawing = false);

document.querySelector('a').addEventListener('click', event =>
  event.target.href = canvas.toDataURL()
);
```

##### Résultat

{{EmbedLiveSample("Exemple_d'application_de_peinture_avec_lien_de_sauvegarde", '100%', '420')}}

## Sécurité et vie privée

Les éléments `<a>` peuvent avoir des conséquences sur la sécurité et la vie privée des utilisateurs. Voir [`Referer` header : privacy and security concerns](/fr/docs/Web/Security/Referer_header:_privacy_and_security_concerns) pour plus d'informations.

L'utilisation de `target="_blank"` sans [`rel="noreferrer"`](/fr/docs/Web/HTML/Link_types/noreferrer) et [`rel="noopener"`](/fr/docs/Web/HTML/Link_types/noopener) rend le site web vulnérable aux attaques d'exploitation de l'API [`window.opener`](/fr/docs/Web/API/Window/opener) ([description de la vulnérabilité](https://www.jitbit.com/alexblog/256-targetblank---the-most-underestimated-vulnerability-ever/)), bien qu'il faille noter que, dans les versions plus récentes du navigateur, la définition de `target="_blank"` fournit implicitement la même protection que la définition de `rel="noopener"`. Voir la [compatibilité des navigateurs](#browser_compatibility) pour plus de détails.

## Accessibilité

### Texte de lien fort

**Le contenu d'un lien doit indiquer où va le lien**, même hors contexte.

#### Texte inaccessible, lien faible

Une erreur tristement courante consiste à ne relier que les mots « cliquez ici » ou « ici » :

```html example-bad
<p>
  En savoir plus sur nos produits <a href="/products">ici</a>.
</p>
```

#### Texte de lien fort

Heureusement, il s'agit d'une solution facile, et elle est en fait plus courte que la version inaccessible !

```html example-good
<p>
  En savoir plus <a href="/products">à propos de nos produits</a>.
</p>
```

Les logiciels d'assistance disposent de raccourcis permettant de lister tous les liens d'une page. Cependant, un texte de lien fort profite à tous les utilisateurs − le raccourci « liste de tous les liens » imite la façon dont les utilisateurs voyants parcourent rapidement les pages.

### Évènements `onclick`

Les ancres sont souvent détournées avec l'évènement `onclick` afin de créer des pseudo-boutons avec l'attribut `href` qui vaut `"#"` ou `"javascript:void(0)"` pour empêcher le rafraîchissement de la page.

Ces valeurs produisent des résultats inadéquats lorsqu'on copie/déplace des liens, qu'on ouvre des liens dans de nouveaux onglets ou fenêtres, qu'on ajoute des marque-pages ou lorsque le JavaScript est encore en train d'être téléchargé. De plus, la sémantique exposée par le document, utilisée par les outils d'assistance, est incorrecte.

Dans ces cas, on privilégiera plutôt l'utilisation d'un bouton [`<button>`](/fr/docs/Web/HTML/Element/Button). De façon générale, une ancre ne doit être utilisée que pour naviguer vers une URL correcte.

### Liens externes, liens vers des ressources non-HTML

Les liens qui ouvrent un nouvel onglet ou une nouvelle fenêtre grâce à `target="_blank"`, ainsi que les liens qui ouvrent des fichiers devraient fournir une indication sur ce qui se produira lorsqu'on cliquera sur ces liens.

Les personnes qui utilisent des outils d'assistance à la navigation comme des lecteurs d'écran et/ou qui souffrent de troubles de la vision, cognitifs peuvent être confuses lorsqu'un nouvel onglet, fichier ou une nouvelle fenêtre s'ouvre de façon inattendue. Les anciennes versions des lecteurs d'écran peuvent également ne pas annoncer ce comportement.

#### Lien vers un nouvel onglet ou une nouvelle fenêtre

```html
<a target="_blank" href="https://www.wikipedia.org/">
  Wikipédia (s'ouvre dans une nouvelle fenêtre)
</a>
```

#### Lien vers une ressource non-HTML

```html
<a target="_blank" href="2017-rapport-annuel.ppt">
  Rapport annuel 2017 (PowerPoint)
</a>
```

Si une icône est utilisée en lieu et place du texte pour indiquer ce comportement, on s'assurera qu'elle contient bien [une description alternative](/fr/docs/Web/HTML/Element/Img#attr-alt).

```html
<a  target="_blank" href="https://www.wikipedia.org">
  Wikipédia
  <img alt="(s'ouvre dans un nouvel onglet)" src="newtab.svg">
</a>

<a href="2017-annual-report.ppt">
  Rapport annuel 2017 (PowerPoint)
  <img alt="(fichier PowerPoint)" src="ppt-icon.svg">
</a>
```

- [WebAIM : Liens et hypertexte (en anglais)](https://webaim.org/techniques/hypertext/hypertext_links)
- [Comprendre les règles WCAG 3.2](/fr/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200 : Ouvrir de nouvelles fenêtres et onglets à partir d'un lien lorsque c'est strictement nécessaire - WCAG 2.0 (en anglais)](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201 : Fournir un avertissement aux utilisateurs lorsqu'ils ouvrent une nouvelle fenêtre WCAG 2.0 (en anglais)](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

### _Skip links_ - liens pour l'accès rapide au contenu

Un _skip link_ (aussi appelé _skipnav_ en anglais) est un élément `a` qui est placé le plus près possible de l'élément [`<body>`](/fr/docs/Web/HTML/Element/body) et qui renvoie au début du contenu principal de la page.

```html
<body>
  <a href="#content">Skip to main content</a>

  <header>
    …
  </header>

  <main id="content"> <!-- Le lien "skip" renvoie vers ici -->
```

Ce lien permet alors de passer plus facilement le contenu qui se répète sur l'ensemble des pages (l'en-tête et la barre de navigation par exemple).

Les _skip links_ sont particulièrement utiles pour les personnes qui naviguent à l'aide d'outils d'assistance (commande vocale, stylets buccal ou frontal) pour lesquels devoir passer par des liens répétés peut freiner la lecture du document.

- _[WebAIM: "Skip Navigation" Links](https://webaim.org/techniques/skipnav/)_ (en anglais)
- [Comment utiliser les _skip links_ - _The A11Y Project_ (en anglais)](https://a11yproject.com/posts/2013-05-11-skip-nav-links/)
- [Comprendre les règles WCAG 2.4](/fr/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [_Understanding Success Criterion 2.4.1 - W3C Understanding WCAG 2.0_ (en anglais)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)

### Dimensionnement et proximité

#### La taille

Les éléments interactifs tels que les liens doivent fournir une surface suffisamment grande pour qu'il soit facile de les activer. Cela facilitera la tâche à une variété de personnes : celles qui ont des problèmes moteur, celles qui utilisent des dispositifs de pointage peu précis (doigt ou stylet). La taille interactive minimale recommandée est de 44x44 [pixels CSS](https://www.w3.org/TR/WCAG21/#dfn-css-pixels).

Les liens en texte seul dans le contenu en prose sont exemptés de cette exigence, mais il est toujours bon de s'assurer qu'il y a suffisamment de texte hyperlié pour être facilement activé.

- [Comprendre le critère d'accessibilité 2.5.5 sur la taille des cibles - Comprendre WCAG 2.1 (en anglais)](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Taille des cibles et critère 2.5.5, (en anglais) d'Adrian Roselli (an anglais)](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Test rapide : cibles tactiles suffisamment grande - Projet A11Y (en anglais)](https://a11yproject.com/posts/large-touch-targets/)

#### La proximité

Lorsque plusieurs contenus interactifs (y compris les ancres) sont placés les uns à côté des autres, il est nécessaire de les espacer suffisamment pour minimiser le risque d'activer le mauvais contenu lors de la navigation.

Un tel espacement peut être obtenu grâce à la propriété CSS [`margin`](/fr/docs/Web/CSS/margin).

- [Les tremblements de la main et le problème du bouton géant - Axess Lab (en anglais)](https://axesslab.com/hand-tremors/)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`<link>`](/fr/docs/Web/HTML/Element/link) est similaire à `<a>`, mais représente des hyperliens de métadonnées qui sont invisibles pour les utilisateurs.
- [`:link`](/fr/docs/Web/CSS/:link) est une pseudo-classe CSS qui correspondra aux éléments `<a>` avec des attributs `href` valides.
