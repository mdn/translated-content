---
title: "<a> : l'élément d'ancre"
slug: Web/HTML/Reference/Elements/a
original_slug: Web/HTML/Element/a
l10n:
  sourceCommit: a1765c2cad20118be0dad322d3548908787b5791
---

L'élément [HTML](/fr/docs/Web/HTML) **`<a>`** (ou élément d'_ancre_), avec [son attribut `href`](#href), crée un hyperlien vers des pages web, des fichiers, des adresses e-mail, des emplacements dans la même page ou toute autre ressource accessible par une URL.

Le contenu de chaque `<a>` doit indiquer la destination du lien. Si l'attribut `href` est présent, appuyer sur la touche Entrée lorsque l'élément `<a>` est sélectionné l'active.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;a&gt;")}}

```html interactive-example
<p>Vous pouvez contacter Michaël&nbsp;:</p>

<ul>
  <li><a href="https://exemple.fr">Site web</a></li>
  <li><a href="mailto:m.bluth@exemple.fr">Courriel</a></li>
  <li><a href="tel:+123456789">Téléphone</a></li>
</ul>
```

```css interactive-example
li {
  margin-bottom: 0.5rem;
}
```

## Attributs

Cet élément inclut les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

- `attributionsrc` {{experimental_inline}}
  - : Définit que vous souhaitez que le navigateur envoie un en-tête {{httpheader("Attribution-Reporting-Eligible")}}. Côté serveur, cela sert à déclencher l'envoi d'un en-tête {{httpheader("Attribution-Reporting-Register-Source")}} dans la réponse, afin d'enregistrer une [source d'attribution basée sur la navigation](/fr/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources).

    Le navigateur stocke les données de la source associée à la source d'attribution basée sur la navigation (telles que fournies dans l'en-tête de réponse {{httpheader("Attribution-Reporting-Register-Source")}}) lorsque l'utilisateur·ice clique sur le lien. Voir l'[API Attribution Reporting](/fr/docs/Web/API/Attribution_Reporting_API) pour plus de détails.

    Il existe deux versions de cet attribut&nbsp;:
    - Booléen, c'est-à-dire, uniquement le nom `attributionsrc`. Cela indique que vous souhaitez que l'en-tête {{httpheader("Attribution-Reporting-Eligible")}} soit envoyé au même serveur que celui indiqué par l'attribut `href`. Cela convient lorsque vous gérez l'enregistrement de la source d'attribution sur le même serveur.
    - Valeur contenant une ou plusieurs URL, par exemple&nbsp;:

      ```html
      attributionsrc="https://a.example/register-source
      https://b.example/register-source"
      ```

      Ceci est utile dans les cas où la ressource demandée n'est pas sur un serveur que vous contrôlez, ou si vous souhaitez simplement gérer l'enregistrement de la source d'attribution sur un autre serveur. Dans ce cas, vous pouvez définir une ou plusieurs URL comme valeur de `attributionsrc`. Lorsque la requête de ressource a lieu, l'en-tête {{httpheader("Attribution-Reporting-Eligible")}} sera envoyé à l'(aux) URL(s) spécifiée(s) dans `attributionsrc` en plus de l'origine de la ressource. Ces URL peuvent alors répondre avec {{httpheader("Attribution-Reporting-Register-Source")}} pour compléter l'enregistrement.

      > [!NOTE]
      > Définir plusieurs URL signifie que plusieurs sources d'attribution peuvent être enregistrées sur la même fonctionnalité. Par exemple, vous pouvez avoir différentes campagnes dont vous souhaitez mesurer le succès, ce qui implique de générer différents rapports sur différentes données.

    Les éléments HTML `<a>` ne peuvent pas être utilisés comme déclencheurs d'attribution, uniquement comme sources.

- `download`
  - : Fait en sorte que le navigateur traite l'URL liée comme un téléchargement. Peut être utilisé avec ou sans valeur `filename`&nbsp;:
    - Sans valeur, le navigateur proposera un nom de fichier/extension, généré à partir de diverses sources&nbsp;:
      - L'en-tête HTTP {{HTTPHeader("Content-Disposition")}}
      - Le segment final dans l'URL&nbsp;: [path](/fr/docs/Web/API/URL/pathname)
      - Le {{Glossary("MIME_type", "type MIME")}} (depuis l'en-tête {{HTTPHeader("Content-Type")}}, le début d'une URL [`data:`](/fr/docs/Web/URI/Reference/Schemes/data), ou {{domxref("Blob.type")}} pour une URL [`blob:`](/fr/docs/Web/URI/Reference/Schemes/blob))

    - `filename`&nbsp;: définir une valeur la suggère comme nom de fichier. Les caractères `/` et `\` sont convertis en caractères de soulignement (`_`). Les systèmes de fichiers peuvent interdire d'autres caractères dans les noms de fichiers, les navigateurs ajusteront donc le nom suggéré si nécessaire.

    > [!NOTE]
    >
    > - `download` ne fonctionne que pour [les URLs de même origine](/fr/docs/Web/Security/Defenses/Same-origin_policy), ou les schémas `blob:` et `data:`.
    > - Le comportement du téléchargement varie selon le navigateur, les paramètres utilisateur·ice·s et d'autres facteurs. L'utilisateur·ice peut être invité·e avant le début du téléchargement, ou le fichier peut être enregistré automatiquement, ou il peut s'ouvrir automatiquement, soit dans une application externe, soit dans le navigateur lui-même.
    > - Si l'en-tête `Content-Disposition` comporte des informations différentes de celles de l'attribut `download`, le comportement résultant peut différer&nbsp;:
    >   - Si l'en-tête spécifie un `nom de fichier`, il a priorité sur un nom de fichier spécifié dans l'attribut `download`.
    >   - Si l'en-tête spécifie une disposition de `inline`, Chrome et Firefox donnent la priorité à l'attribut et le traitent comme un téléchargement. Les anciennes versions de Firefox (avant 82) donnent la priorité à l'en-tête et affichent le contenu en ligne.

- `href`
  - : L'URL vers laquelle pointe l'hyperlien. Les liens ne sont pas limités aux URL basées sur HTTP&nbsp;: ils peuvent utiliser n'importe quel schéma d'URL pris en charge par les navigateurs&nbsp;:
    - Numéros de téléphone avec les URL `tel:`
    - Adresses électroniques avec les URL `mailto:`
    - Messages SMS avec les URL `sms:`
    - Code exécutable avec les URL [`javascript:`](/fr/docs/Web/URI/Reference/Schemes/javascript)
    - Bien que les navigateurs web puissent ne pas prendre en charge d'autres schémas d'URL, les sites web le peuvent avec [`registerProtocolHandler()`](/fr/docs/Web/API/Navigator/registerProtocolHandler)

    D'autres fonctionnalités des URL permettent de localiser des parties spécifiques de la ressource&nbsp;:
    - Sections d'une page avec des fragments de document
    - Portions de texte spécifiques avec les [fragments de texte](/fr/docs/Web/URI/Reference/Fragment/Text_fragments)
    - Parties de fichiers médias avec des fragments de médias

- `hreflang`
  - : Donne des indications sur le langage humain de l'URL liée. Aucune fonctionnalité intégrée. Les valeurs autorisées sont les mêmes que [l'attribut global `lang`](/fr/docs/Web/HTML/Reference/Global_attributes/lang).
- `ping`
  - : Contient une liste d'URL séparées par des espaces vers lesquelles sont envoyées des requêtes {{HTTPMethod("POST")}} avec le corps `PING` lorsque l'utilisateur suit le lien. Cet attribut est généralement utilisé pour tracer un utilisateur.
- `referrerpolicy`
  - : Détermine la quantité d'informations du [référent](/fr/docs/Web/HTTP/Reference/Headers/Referer) à envoyer lors du suivi du lien.
    - `no-referrer`&nbsp;: L'en-tête {{HTTPHeader("Referer")}} ne sera pas envoyé.
    - `no-referrer-when-downgrade`&nbsp;: L'en-tête {{HTTPHeader("Referer")}} ne sera pas envoyé vers des {{Glossary("origin", "origines")}} sans {{Glossary("TLS")}} ({{Glossary("HTTPS")}}).
    - `origin`&nbsp;: Le référent envoyé sera limité à l'origine de la page référente&nbsp;: son [schéma](/fr/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host")}}, et {{Glossary("port")}}.
    - `origin-when-cross-origin`&nbsp;: Le référent envoyé à d'autres origines sera limité au schéma, à l'hôte et au port. Les navigations sur la même origine incluront toujours le chemin.
    - `same-origin`&nbsp;: Un référent sera envoyé pour la {{Glossary("Same-origin policy", "même origine")}}, mais les requêtes inter-origines ne contiendront aucune information de référent.
    - `strict-origin`&nbsp;: N'envoie l'origine du document comme référent que lorsque le niveau de sécurité du protocole reste le même (HTTPS→HTTPS), mais ne l'envoie pas vers une destination moins sécurisée (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (par défaut)&nbsp;: Envoie une URL complète lors d'une requête de même origine, n'envoie que l'origine lorsque le niveau de sécurité du protocole reste le même (HTTPS→HTTPS), et n'envoie aucun en-tête vers une destination moins sécurisée (HTTPS→HTTP).
    - `unsafe-url`&nbsp;: Le référent inclura l'origine _et_ le chemin (mais pas le [fragment](/fr/docs/Web/API/HTMLAnchorElement/hash), le [mot de passe](/fr/docs/Web/API/HTMLAnchorElement/password) ou le [nom d'utilisateur](/fr/docs/Web/API/HTMLAnchorElement/username)). **Cette valeur est non sécurisée**, car elle divulgue les origines et les chemins de ressources protégées par TLS vers des origines non sécurisées.

- [`rel`](/fr/docs/Web/HTML/Reference/Attributes/rel)
  - : Cet attribut indique la relation entre la cible du lien et l'objet faisant le lien. La valeur est une liste de [types de liens](/fr/docs/Web/HTML/Reference/Attributes/rel) séparés par des espaces.
- `target`
  - : Où afficher l'URL liée, comme nom d'un _contexte de navigation_ (un onglet, une fenêtre ou un [`<iframe>`](/fr/docs/Web/HTML/Reference/Elements/iframe)). Les mots-clés suivants ont des significations spéciales pour l'endroit où charger l'URL :
    - `_self` : le contexte de navigation actuel. (Par défaut)
    - `_blank` : généralement un nouvel onglet, mais les utilisateurs peuvent configurer les navigateurs pour ouvrir une nouvelle fenêtre à la place.
    - `_parent` : le contexte de navigation parent de celui en cours. S'il n'y a pas de parent, il se comporte comme `_self`.
    - `_top` : le contexte de navigation le plus haut (le contexte "le plus haut" qui est un ancêtre du contexte actuel). S'il n'a aucun ancêtre, il se comporte comme `_self`.
    - `_unfencedTop`&nbsp;: Autorise les [cadres protégés](/fr/docs/Web/API/Fenced_frame_API) intégrés à naviguer vers la fenêtre de niveau supérieur (c'est-à-dire à dépasser la racine du cadre protégé, contrairement aux autres destinations réservées). Notez que la navigation fonctionnera toujours si cela est utilisé en dehors d'un contexte de cadre protégé, mais cela n'agira pas comme un mot-clé réservé.

    > [!NOTE]
    > Définir `target="_blank"` sur les éléments `<a>` fournit implicitement le même comportement `rel` que définir [`rel="noopener"`](/fr/docs/Web/HTML/Reference/Attributes/rel/noopener) qui ne définit pas `window.opener`. Voir la [compatibilité des navigateurs](#browser_compatibility) pour le support.

- `type`
  - : Donne des indications sur le format de l'URL liée avec un {{Glossary("MIME type", "type MIME")}}. Aucune fonctionnalité intégrée.

### Attributs obsolètes

- **`charset`** {{Deprecated_Inline}}
  - : Fait allusion aux {{Glossary("character encoding", "encodages des caractères")}} de l'URL liée.

    > [!NOTE]
    > Cet attribut est déprécié et **ne doit pas être utilisé par les auteur·ice·s**. Utilisez l'en-tête HTTP {{HTTPHeader("Content-Type")}} sur l'URL liée.

- **`coords`** {{Deprecated_Inline}}
  - : Utilisé avec [l'attribut `shape`](#shape). Une liste de coordonnées séparées par des virgules.
- **`name`** {{Deprecated_Inline}}
  - : Était nécessaire pour définir un emplacement cible possible dans une page. En HTML 4.01, `id` et `name` pouvaient tous deux être utilisés sur `<a>`, pour autant qu'ils aient des valeurs identiques.

    > [!NOTE]
    > Utilisez l'attribut universel [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id) à la place.

- **`rev`** {{Deprecated_Inline}}
  - : Spécifiait un lien inverse&nbsp;; l'opposé de [l'attribut `rel`](#rel). Déprécié pour avoir été très confus.
- **`shape`** {{Deprecated_Inline}}
  - : La forme de la région de l'hyperlien dans une carte d'image.

    > [!NOTE]
    > Utilisez plutôt l'élément {{HTMLElement("area")}} pour les cartes d'images.

## Accessibilité

### Texte de lien fort

**Le contenu d'un lien doit indiquer où va le lien**, même hors contexte.

#### Texte inaccessible, lien faible

Une erreur tristement courante consiste à ne relier que les mots «&nbsp;cliquez ici&nbsp;» ou «&nbsp;ici&nbsp;»&nbsp;:

```html example-bad
<p>En savoir plus sur nos produits <a href="/products">ici</a>.</p>
```

##### Résultat

{{EmbedLiveSample('texte_inaccessible_lien_faible', '100%', '50')}}

#### Texte accessible, lien fort

Heureusement, il s'agit d'une solution facile, et elle est en fait plus courte que la version inaccessible&nbsp;!

```html example-good
<p>En savoir plus <a href="/products">à propos de nos produits</a>.</p>
```

##### Résultat

{{EmbedLiveSample('texte_accessible_lien_fort', '100%', '50')}}

Les logiciels d'assistance disposent de raccourcis permettant de lister tous les liens d'une page. Cependant, un texte de lien fort profite à tous les utilisateurs — le raccourci «&nbsp;liste de tous les liens&nbsp;» imite la façon dont les utilisateurs voyants parcourent rapidement les pages.

### Évènements `onclick`

Les ancres sont souvent détournées avec l'évènement `onclick` afin de créer des pseudo-boutons avec l'attribut `href` qui vaut `"#"` ou [`javascript:void(0)`](/fr/docs/Web/URI/Reference/Schemes/javascript) pour empêcher le rafraîchissement de la page.

Ces valeurs produisent des résultats inadéquats lorsqu'on copie/déplace des liens, qu'on ouvre des liens dans de nouveaux onglets ou fenêtres, qu'on ajoute des marque-pages ou lorsque le JavaScript est encore en train d'être téléchargé. De plus, la sémantique exposée par le document, utilisée par les outils d'assistance, est incorrecte.

Dans ces cas, on privilégiera plutôt l'utilisation d'un bouton {{HTMLElement("button")}}. De façon générale, une ancre ne doit être utilisée que pour naviguer vers une URL correcte.

### Liens externes, liens vers des ressources non-HTML

Les liens qui ouvrent un nouvel onglet ou une nouvelle fenêtre grâce à `target="_blank"`, ainsi que les liens qui ouvrent des fichiers devraient fournir une indication sur ce qui se produira lorsqu'on cliquera sur ces liens.

Les personnes qui utilisent des outils d'assistance à la navigation comme des lecteurs d'écran et/ou qui souffrent de troubles de la vision, cognitifs peuvent être confuses lorsqu'un nouvel onglet, fichier ou une nouvelle fenêtre s'ouvre de façon inattendue. Les anciennes versions des lecteurs d'écran peuvent également ne pas annoncer ce comportement.

#### Lien vers un nouvel onglet ou une nouvelle fenêtre

```html
<a target="_blank" href="https://www.wikipedia.org/">
  Wikipédia (s'ouvre dans une nouvelle fenêtre)
</a>
```

##### Résultat

{{EmbedLiveSample('Lien vers un nouvel onglet ou une nouvelle fenêtre')}}

#### Lien vers une ressource non-HTML

```html
<p>
  <a href="https://www.wikipedia.org/" target="_blank">
    Wikipédia
    <img src="new-tab.svg" width="14" alt="(s'ouvre dans un nouvel onglet)" />
  </a>
  <br />
  <a href="2017-rapport-annuel.ppt">
    Rapport annuel 2017
    <img src="powerpoint.svg" width="14" alt="(fichier PowerPoint)" />
  </a>
</p>
<p>
  <a href="https://www.wikipedia.org/" target="_blank">
    Wikipédia
    <img
      src="missing-icon.svg"
      width="14"
      alt="(s'ouvre dans un nouvel onglet)" />
  </a>
  <br />
  <a href="2017-rapport-annuel.ppt">
    Rapport annuel 2017
    <img src="missing-icon.svg" width="14" alt="(fichier PowerPoint)" />
  </a>
</p>
```

##### Résultat

{{EmbedLiveSample('lien_vers_une_ressource_non-html')}}

- [WebAIM&nbsp;: Liens et hypertexte <sup>(angl.)</sup>](https://webaim.org/techniques/hypertext/hypertext_links)
- [Comprendre les règles WCAG 3.2](/fr/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200&nbsp;: Ouvrir de nouvelles fenêtres et onglets à partir d'un lien lorsque c'est strictement nécessaire - WCAG 2.0 <sup>(angl.)</sup>](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201&nbsp;: Fournir un avertissement aux utilisateurs lorsqu'ils ouvrent une nouvelle fenêtre WCAG 2.0 <sup>(angl.)</sup>](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

### _Skip links_ - liens pour l'accès rapide au contenu

Un _skip link_ (aussi appelé _skipnav_ en anglais) est un élément `a` qui est placé le plus près possible de l'élément [`<body>`](/fr/docs/Web/HTML/Reference/Elements/body) et qui renvoie au début du contenu principal de la page.

```html
<body>
  <a href="#content">Skip to main content</a>

  <header>…</header>

  <main id="content"><!-- Le lien "skip" renvoie vers ici --></main>
</body>
```

```css
.skip-link {
  position: absolute;
  top: -3em;
  background: white;
}
.skip-link:focus {
  top: 0;
}
```

#### Résultat

{{EmbedLiveSample('skip_links_-_liens_pour_laccès_rapide_au_contenu')}}

Ce lien permet alors de passer plus facilement le contenu qui se répète sur l'ensemble des pages (l'en-tête et la barre de navigation par exemple).

Les _skip links_ sont particulièrement utiles pour les personnes qui naviguent à l'aide d'outils d'assistance (commande vocale, stylets buccal ou frontal) pour lesquels devoir passer par des liens répétés peut freiner la lecture du document.

- [WebAIM&nbsp;: Liens de "navigation rapide" Links <sup>(angl.)</sup>](https://webaim.org/techniques/skipnav/)
- [Comment utiliser les _skip links_ - _The A11Y Project_ <sup>(angl.)</sup>](https://a11yproject.com/posts/2013-05-11-skip-nav-links/)
- [Comprendre les règles WCAG 2.4](/fr/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.4_—_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [_Understanding Success Criterion 2.4.1 - W3C Understanding WCAG 2.0_ <sup>(angl.)</sup>](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)

### Dimensionnement et proximité

#### La taille

Les éléments interactifs tels que les liens doivent fournir une surface suffisamment grande pour qu'il soit facile de les activer. Cela facilitera la tâche à une variété de personnes : celles qui ont des problèmes moteur, celles qui utilisent des dispositifs de pointage peu précis (doigt ou stylet). La taille interactive minimale recommandée est de 44x44 [pixels CSS <sup>(angl.)</sup>](https://www.w3.org/TR/WCAG21/#dfn-css-pixels).

Les liens en texte seul dans le contenu en prose sont exemptés de cette exigence, mais il est toujours bon de s'assurer qu'il y a suffisamment de texte hyperlié pour être facilement activé.

- [Comprendre le critère d'accessibilité 2.5.5 sur la taille des cibles - Comprendre WCAG 2.1 <sup>(angl.)</sup>](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Taille des cibles et critère 2.5.5, <sup>(angl.)</sup> d'Adrian Roselli (an anglais)](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Test rapide : cibles tactiles suffisamment grande - Projet A11Y <sup>(angl.)</sup>](https://a11yproject.com/posts/large-touch-targets/)

#### La proximité

Lorsque plusieurs contenus interactifs (y compris les ancres) sont placés les uns à côté des autres, il est nécessaire de les espacer suffisamment pour minimiser le risque d'activer le mauvais contenu lors de la navigation.

Un tel espacement peut être obtenu grâce à la propriété CSS {{CSSxRef("margin")}}.

- [Les tremblements de la main et le problème du bouton géant - Axess Lab <sup>(angl.)</sup>](https://axesslab.com/hand-tremors/)

## Exemples

### Créer un lien vers une URL absolue

#### HTML

```html
<a href="https://www.mozilla.com"> Mozilla </a>
```

#### Résultat

{{EmbedLiveSample("créer_un_lien_vers_une_URL_absolue", "100%", 50)}}

### Créer des liens vers des URL relatives

#### HTML

```html
<a href="//example.com">URL relative au schéma</a>
<a href="/fr/docs/Web/HTML">URL relative à l'origine</a>
<a href="p">URL relative au répertoire</a>
<a href="./p">URL relative au répertoire</a>
<a href="../p">URL relative au répertoire parent</a>
```

```css hidden
a {
  display: block;
  margin-bottom: 0.5em;
}
```

#### Résultat

{{EmbedLiveSample("créer_un_lien_vers_une_URL_relative")}}

### Créer un lien vers un élément de la même page

```html
<!-- <a> élément liens vers la section ci-dessous -->
<p><a href="#section_further_down"> Passez à la rubrique ci-dessous </a></p>

<!-- Rubrique à relier -->
<h2 id="section_further_down">Section plus bas</h2>
```

#### Résultat

{{EmbedLiveSample("créer_un_lien_vers_un_élément_de_la_même_page")}}

> [!NOTE]
> Vous pouvez utiliser `href="#top"` ou le fragment vide (`href="#"`) pour créer un lien vers le haut de la page actuelle, [comme défini dans la spécification HTML <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/browsing-the-web.html#scroll-to-the-fragment-identifier).

### Créer un lien avec une adresse électronique

Pour créer des liens qui s'ouvrent dans le programme de messagerie de l'utilisateur, pour lui permettre d'envoyer un nouveau message, utilisez le schéma `mailto:` :

```html
<a href="mailto:nowhere@mozilla.org">Envoyer un courriel nulle part</a>
```

#### Résultat

{{EmbedLiveSample("créer_un_lien_vers_une_adresse_électronique")}}

Pour plus de détails sur les URL `mailto:`, comme l'inclusion d'un sujet ou d'un corps de message, voir [Liens de courrier électronique](/fr/docs/Learn_web_development/Core/Structuring_content/Creating_links#e-mail_links) ou {{RFC(6068)}}.

### Créer un lien avec les numéros de téléphone

```html
<a href="tel:+49.157.0156">+49 157 0156</a>
<a href="tel:+1(555)5309">(555) 5309</a>
```

#### Résultat

{{EmbedLiveSample("créer_un_lien_vers_un_numéro_de_téléphone")}}

`tel:` le comportement du lien varie en fonction des capacités du périphérique :

- Les appareils cellulaires composent automatiquement le numéro.
- La plupart des systèmes d'exploitation disposent de programmes permettant de passer des appels, comme Skype ou FaceTime.
- Les sites web peuvent passer des appels téléphoniques avec {{domxref("Navigator/registerProtocolHandler", "registerProtocolHandler")}}, comme `web.skype.com`.
- Les autres comportements comprennent l'enregistrement du numéro dans les contacts, ou l'envoi du numéro à un autre appareil.

Voir {{RFC(3966)}} pour la syntaxe, les fonctionnalités supplémentaires et d'autres détails sur le schéma URL `tel:`.

### Utilisation de l'attribut de téléchargement pour enregistrer un \<canvas> au format PNG

Pour enregistrer le contenu d'un élément {{HTMLElement("canvas")}} sous forme d'image, vous pouvez créer un lien avec un attribut `download` et les données du canvas sous forme d'une URL `data:` :

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
  background: white;
  border: 1px dashed;
}
a {
  display: inline-block;
  background: #6699cc;
  color: white;
  padding: 5px 10px;
}
```

##### JavaScript

```js
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
c.fillStyle = "hotpink";
let isDrawing;

function draw(x, y) {
  if (isDrawing) {
    c.beginPath();
    c.arc(x, y, 10, 0, Math.PI * 2);
    c.closePath();
    c.fill();
  }
}

canvas.addEventListener("mousemove", (event) =>
  draw(event.offsetX, event.offsetY),
);
canvas.addEventListener("mousedown", () => (isDrawing = true));
canvas.addEventListener("mouseup", () => (isDrawing = false));

document
  .querySelector("a")
  .addEventListener(
    "click",
    (event) => (event.target.href = canvas.toDataURL()),
  );
```

##### Résultat

{{EmbedLiveSample("exemple_d'application_de_peinture_avec_lien_de_sauvegarde", '100%', '420')}}

## Sécurité et vie privée

Les éléments `<a>` peuvent avoir des conséquences sur la sécurité et la vie privée des utilisateurs. Voir [`Referer` header : privacy and security concerns](/fr/docs/Web/Privacy/Guides/Referer_header:_privacy_and_security_concerns) pour plus d'informations.

L'utilisation de `target="_blank"` sans [`rel="noreferrer"`](/fr/docs/Web/HTML/Reference/Attributes/rel/noreferrer) ni [`rel="noopener"`](/fr/docs/Web/HTML/Reference/Attributes/rel/noopener) rend le site vulnérable aux attaques exploitant l'API {{domxref("window.opener")}}. Notez toutefois que, dans les versions récentes des navigateurs, définir `target="_blank"` fournit implicitement la même protection que `rel="noopener"`. Voir la [compatibilité des navigateurs](#compatibilité_des_navigateurs) pour plus de détails.

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Guides/Content_categories"
          >Catégories de contenu</a
        >
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
          >Contenu du flux</a
        >,
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >contenu phrasé</a
        >,
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_interactif"
          >contenu interactif</a
        >, contenu tangible.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a
          href="/fr/docs/Web/HTML/Guides/Content_categories#modèle_de_contenu_transparent"
          >Transparent</a
        >, contenant soit le
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
          >contenu du flux</a
        >
        (à l'exclusion du
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_interactif"
          >contenu interactif</a
        >), soit
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>Aucune, la balise d'ouverture et la balise de fermeture sont obligatoires.</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément qui accepte
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >la formulation du contenu</a
        >, ou tout élément qui accepte
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
          >le contenu du flux</a
        >, mais pas les autres éléments <code>&#x3C;a></code>.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/link_role"><code>link</code></a> lorsque l'attribut <code>href</code> est
        présent, sinon
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role"><code>generic</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>
        <p>Lorsque l'attribut <code>href</code> est présent :</p>
        <ul>
          <li><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/button_role"><code>button</code></a></li>
          <li><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role"><code>checkbox</code></a></li>
          <li><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role"><code>menuitem</code></a></li>
          <li><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a></li>
          <li><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role"><code>menuitemradio</code></a></li>
          <li><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/option_role"><code>option</code></a></li>
          <li><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role"><code>radio</code></a></li>
          <li><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role"><code>switch</code></a></li>
          <li><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role"><code>tab</code></a></li>
          <li><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role"><code>treeitem</code></a></li>
        </ul>
        <p>Lorsque l'attribut <code>href</code> n'est pas présent :</p>
        <ul>
          <li>tout</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{DOMxRef("HTMLAnchorElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("link")}} est similaire à l'élément `<a>`, mais représente des hyperliens de métadonnées invisibles pour les utilisateur·ice·s.
- La pseudo-classe CSS {{CSSxRef(":link")}} qui correspond aux éléments `<a>` dont l'attribut `href` contient une URL qui n'a pas encore été visitée par l'utilisateur·ice.
- La pseudo-classe CSS {{CSSxRef(":visited")}} qui correspond aux éléments `<a>` dont l'attribut `href` contient une URL déjà visitée par l'utilisateur·ice.
- La pseudo-classe CSS {{CSSxRef(":any-link")}} qui correspond aux éléments `<a>` ayant un attribut `href`.
- Les [fragments de texte](/fr/docs/Web/URI/Reference/Fragment/Text_fragments) sont des instructions ajoutées aux URL permettant de créer un lien vers un texte spécifique d'une page, sans qu'un identifiant soit nécessaire.
