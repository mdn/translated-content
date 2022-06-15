---
title: '<meta> : l''élément de métadonnées du document'
slug: Web/HTML/Element/meta
tags:
  - Element
  - HTML
  - Reference
  - Web
translation_of: Web/HTML/Element/meta
---
{{HTMLRef}}

L'élément HTML **`<meta>`** représente toute information de métadonnées qui ne peut pas être représentée par un des éléments ({{HTMLElement("base")}}, {{HTMLElement("link")}}, {{HTMLElement("script")}}, {{HTMLElement("style")}} ou {{HTMLElement("title")}})

## Attributs

Comme tous les autres éléments, cet élément inclut [les attributs universels](/fr/docs/Web/HTML/Attributs_universels).

> **Note :** Il faut préciser que l'attribut {{htmlattrxref("name", "meta")}} possède une signification spécifique à l'élément {{HTMLElement("meta")}} et que l'attribut {{htmlattrxref("itemprop")}} ne doit pas être utilisé quand l'un de ces attributs est déjà utilisé : {{htmlattrxref("name", "meta")}}, {{htmlattrxref("http-equiv", "meta")}} ou {{htmlattrxref("charset", "meta")}}.

- {{htmlattrdef("charset")}}

  - : Cet attribut déclare l'encodage utilisé par la page. Il peut être outrepassé de manière locale en utilisant l'attribut **`lang`** d'un élément. La valeur de cet attribut est une chaîne de caractères et doit être l'un des _noms MIME préférés_ d'un encodage comme [spécifié par l'IANA](https://www.iana.org/assignments/character-sets/character-sets.xml). Bien que le standard ne fixe pas d'encodage particulier, il fournit cependant quelques recommendations :

    - Les auteurs sont invités à utiliser UTF-8.
    - Les auteurs ne devraient pas utiliser d'encodage incompatible avec l'ASCII (c'est à dire ceux dont les codes 8-bits de 0x20 à 0x7E ne correspondent pas, de manière respective, aux codes Unicode 0x0020 à 0x007E) car ceux-ci représentent un risque de sécurité, les navigateurs ne les supportant pas pouvant traduire du contenu bénin en des éléments HTML. Ceci est le cas pour les jeux de caractères suivants : `JIS_C6226-1983`, `JIS_X0212-1990`, `HZ-GB-2312`, `JOHAB`, la famille d'encodage `ISO-2022` et la famille d'encodage `EBCDIC`.
    - > **Attention :** Les auteurs ne doivent pas utiliser `CESU-8`, `UTF-7`, `BOCU-1` et `SCSU`. Ceux-ci rejoignent le cas précédents et n'ont pas été conçus pour être utilisés sur le web. Certaines attaques de types XSS (_Cross-site scripting_) ont pu être recensées avec ces encodages.
    - > **Attention :** Les auteurs ne devraient pas utiliser `UTF-32` car certains algorithmes d'encodage HTML5 ne peuvent différiencer `UTF-32` de `UTF-16`.

    > **Note :**
    >
    > - Le jeux de caractères déclaré doit correspondre à celui utilisé dans la page. Il est inutile de déclarer un jeu de caractères incorrect (cela entraînant également une mauvaise expérience utilisateur).
    > - L'élément {{HTMLElement("meta")}} doit appartenir à l'élément {{HTMLElement("head")}} et doit apparaître parmi les **512 premiers octets de la page**. En effet, certains navigateurs ne consultent seulement ces premiers octets pour déterminer l'encodage utilisé pour la page.
    > - L'élément {{HTMLElement("meta")}} ne représente qu'une partie de l'[algorithme déterminant le jeu de caractères](https://www.whatwg.org/specs/web-apps/current-work/multipage/parsing.html#encoding-sniffing-algorithm) à appliquer sur la page par le navigateur. Ainsi, l'en-tête HTTP Content-Type et tous les éléments BOM auront une priorité supérieure à cet élément.
    > - Définir le jeu de caractères utilisé grâce à cet attribut représente une bonne pratique et est fortement recommandé. Si aucun encodage n'est défini pour la page, plusieurs techniques XSS peuvent porter atteinte à l'utilisateur (voir l'exemple de la [technique XSS de recours à UTF-7](https://code.google.com/p/doctype-mirror/wiki/ArticleUtf7)). Toujours renseigner cet élément meta protégera contre ces dangers.
    > - L'élément {{HTMLElement("meta")}} est un synonyme de `<meta http-equiv="Content-Type" content="text/html; charset=IANAcharset">` utilisé avant HTML5. Ici *`IANAcharset`* correspond à la valeur de l'attribut {{htmlattrxref("charset", "meta")}} correspondant. Bien qu'elle soit obsolète et qu'elle ne soit plus recommandée, cette syntaxe est toujours autorisée.

- {{htmlattrdef("content")}}
  - : Cet attribut fournit la valeur associée avec l'attribut {{htmlattrxref("http-equiv", "meta")}} ou l'attribut {{htmlattrxref("name", "meta")}} suivant le contexte utilisé.
- {{htmlattrdef("http-equiv")}}

  - : Cet attribut pouvant prendre des valeurs pré-définies représente un objet pouvant modifier le comportement des serveurs ou des agents utilisateur. Sa valeur est définie grâce à l'attribut {{htmlattrxref("content", "meta")}} et peut être l'une des suivantes :

    - `content-language` {{deprecated_inline}}

      - : Définit la langue par défaut utilisée par une page

        > **Attention :** Cette valeur n'est plus recommandée et ne doit donc plus être utilisée. L'attribut **`lang`** de l'élément {{HTMLElement("body")}} doit être utilisé pour remplir cette fonction.

    - `Content-Security-Policy`
      - : Cette valeur permet aux administrateurs de sites web de définir des règles de gestion de contenu pour les ressources qui sont servies. Cela permet notamment d'indiquer les origines valides et les points d'accès aux scripts afin de protéger contre les attaques XSS.
    - `content-type` {{deprecated_inline}}

      - : Ce champ d'attribut définit le [type MIME](/fr/docs/Glossaire/Type_MIME) du document et peut être suivi par son jeu de caractères. Il respecte la même syntaxe que le champ `content-type` appartenant à l'en-tête HTTP. Cet attribut faisant, lui, partie d'un élément HTML, il n'est pas possible d'utiliser la plupart des valeurs. La syntaxe correcte pour son contenu est donc la chaîne de caractère `'text/html`' éventuellement suivie par un jeu de caractères avec la syntaxe suivante : '`; charset=`_`IANAcharset`_' où `IANAcharset` est l'appellation MIME du jeu de caractères, [présentée par l'IANA](https://www.iana.org/assignments/character-sets)

        > **Attention :**
        >
        > - Ce champ n'est plus recommandé et ne donc doit pas être utilisé. L'attribut {{htmlattrxref("charset", "meta")}} de l'élément {{HTMLElement("meta")}} doit être utilisé à la place.
        > - Étant donné que l'élément {{HTMLElement("meta")}} peut ne pas être utilisé pour changer le type d'un document XHTML, ou d'un document HTML5 précédé par une syntaxe XHTML, il ne faut pas utiliser ce champs pour définir un type MIME étant un type MIME XHTML. Cela serait incorrect.
        > - Seuls les documents HTML peuvent utiliser ce champ, cela entraîne donc une certaine redondance. C'est pourquoi il a été rendu obsolète et remplacé par l'attribut {{htmlattrxref("charset", "meta")}}.

    - `refresh`

      - : Ce champ définit :

        - le nombre de secondes qu'il faudrait attendre avant de recharger la page si l'attribut {{htmlattrxref("content", "meta")}} contient seulement un nombre entier positif
        - le nombre de secondes qu'il faudrait attendre avant que la page soit redirigée vers une autre page, si l'attribut {{htmlattrxref("content", "meta")}} contient un nombre entier positif suivi par la chaîne de caractères '`;url=`' ainsi qu'une URL valide.

    - `set-cookie` {{deprecated_inline}}{{non-standard_inline}}

      - : Ce champ définit un cookie pour la page. Son contenu doit respecter la syntaxe énoncée par la [IETF HTTP Cookie Specification](https://tools.ietf.org/html/draft-ietf-httpstate-cookie-14).

        > **Attention :** Ce champ est désormais obsolète et ne doit donc pas être utilisé. L'en-tête HTTP [Set-Cookie](/fr/docs/Web/HTTP/Headers/Set-Cookie) doit être utilisée à la place. Cette valeur a été retirée du standard et n'est plus prise en charge à partir de [Firefox 68](https://www.fxsitecompat.dev/en-CA/docs/2019/setting-cookies-with-meta-http-equiv-is-no-longer-allowed/) et de [Chrome 65](https://www.chromestatus.com/feature/6170540112871424).

- {{htmlattrdef("name")}}

  - : Cet attribut définit le nom d'un métadonnée au niveau du document. Il ne doit pas être utilisé si l'un des attributs {{htmlattrxref("itemprop", "meta")}}, {{htmlattrxref("http-equiv", "meta")}} ou {{htmlattrxref("charset", "meta")}} est utilisé.
    Le nom de la métadonnée document est associé à une valeur contenue dans l'attribut {{htmlattrxref("content", "meta")}}. Les noms possibles et la signification de leurs valeurs (contenues dans l'attribut {{htmlattrxref("content", "meta")}}) sont :

    - `application-name`, qui définit le nom de l'application web utilisée dans la page

      > **Note :**
      >
      > - Les navigateurs peuvent l'utiliser pour identifier l'application. Il est à distinguer de l'élément {{HTMLElement("title")}} qui contient généralement le nom de l'application mais qui contient aussi des informations comme le nom du document ou un statut
      > - Les pages web simples ne devraient pas utiliser cet attribut de métadonnée.

    - `author`, définit le nom de l'auteur du document (pas de contrainte de format)
    - `description`, contient un résumé concis et pertinent du contenu de la page. Plusieurs navigateurs, dont Firefox et Opera, utilisent cette métadonnée comme description de la page lorsque celle-ci est mise dans les favoris.
    - `generator`, contient l'identifiant du logiciel ayant généré la page (pas de contrainte de format)
    - `keywords`, contient une liste de mots-clés séparés par des virgules. Ces mots-clés sont pertinents et relatifs au contenu de la page.
    - `referrer` qui contrôle [l'en-tête HTTP `Referer`](/fr/docs/Web/HTTP/Headers/Referer) attachée aux requêtes envoyées à partir du document :

      <table class="standard-table">
        <caption>
          Valeurs pour l'attribut
          <code>content</code>
          de
          <code>&#x3C;meta name="referrer"></code>
        </caption>
        <tbody>
          <tr>
            <td><code>no-referrer</code></td>
            <td>Aucun en-tête HTTP <code>Referer</code> n'est envoyé.</td>
          </tr>
          <tr>
            <td><code>origin</code></td>
            <td>
              Seule l'<a href="/fr/docs/Glossary/Origin">origine</a> du document est
              envoyée.
            </td>
          </tr>
          <tr>
            <td><code>no-referrer-when-downgrade</code></td>
            <td>
              L'<a href="/fr/docs/Glossary/Origin">origine</a> est envoyée envers les
              URL qui sont aussi sécurisée que la page courante (https→https). Aucun
              référent n'est envoyé lorsque l'URL est moins sécurisée (https→http).
              Cette valeur est la valeur par défaut.
            </td>
          </tr>
          <tr>
            <td><code>origin-when-crossorigin</code></td>
            <td>
              L'URL complète (sans les paramètres) est envoyée pour les requêtes
              provenant de la même origine. Dans les autres cas, seule l'<a
                href="/fr/docs/Glossary/Origin"
                >origine</a
              >
              est envoyée.
            </td>
          </tr>
          <tr>
            <td><code>same-origin</code></td>
            <td>
              Un référent est envoyé
              <a href="/fr:docs/Web/Security/Same-origin_policy"
                >pour les sites d'origine équivalente</a
              >, mais les requêtes entre différentes origines ne contiendra pas de
              référent.
            </td>
          </tr>
          <tr>
            <td><code>strict-origin</code></td>
            <td>
              Seule l'origine du document est envoyée pour les destinations
              <em>a priori</em> aussi sécurisées que la page courante (HTTPS->HTTPS)
              mais cette information n'est pas envoyée vers une destination moins
              sécurisée (HTTPS->HTTP).
            </td>
          </tr>
          <tr>
            <td><code>strict-origin-when-cross-origin</code></td>
            <td>
              L'URL complète est envoyée pour une requête provenant de la même
              origine. Seule l'origine du document est envoyée pour les destinations
              aussi sécurisées que la page (HTTPS->HTTPS), aucun en-tête n'est envoyé
              pour les destinations moins sécurisées (HTTPS->HTTP).
            </td>
          </tr>
          <tr>
            <td><code>unsafe-URL</code></td>
            <td>
              L'URL complète (sans les paramètres) est envoyée pour les requête
              d'origines équivalents et pour les autres requêtes
              (<em>cross-origin</em>).
            </td>
          </tr>
        </tbody>
      </table>

      > **Note :**
      >
      > - Certains navigateurs prennent en charge les valeurs dépréciées `always`, `default` et `never`.
      > - L'insertion dynamique de `<meta name="referrer">` (grâce à [`document.write`](/fr/docs/Web/API/Document/write) ou [`appendChild`](/fr/docs/Web/API/Node/appendChild)) rend le comportement imprévisible.
      > - Lorsque plusieurs règles conflictuelles sont définies, c'est la règle `no-referrer` qui est appliquée.

    - `theme-color` qui indique une suggestion de couleur que l'agent utilisateur devrait prendre en compte afin de personnaliser l'affichage de la page ou l'interface utilisateur environnante. L'attribut `content` contiendra une couleur valide au sens CSS (cf. {{cssxref("&lt;color&gt;")}}).
    - - `color-scheme`

        - : Définit un ou plusieurs modes de couleurs avec lesquels le document est compatible. Le navigateur utilisera cette information ainsi que les réglages du navigateur ou de l'appareil pour déterminer les couleurs à utiliser (que ce soit pour l'arrière-plan, les contrôles, les barres de défilement, etc.). `<meta name="color-scheme">` sert principalement à indiquer la compatibilité et la préférence pour les différents modes de couleur (sombre / clair entre autres).

          La valeur de {{htmlattrxref("content","meta")}} pour `color-scheme` peut être :

          - `normal`
            - : Le document n'est pas affecté par les modes de couleurs et devrait utiliser la palette de couleur par défaut.
          - `[light` | `dark]+`
            - : Un ou plusieurs modes de couleurs sont pris en charge par le document. Si un nom de mode est répété, cela est équivalent à le mentionner une seule fois. Lorsque plusieurs modes sont présents, cela indique une préférence pour le premier et aussi que le second est acceptable si l'utilisateur préfère celui-ci.
          - `only light`
            - : Indique que le document prend uniquement en charge un mode clair (avec un fond clair et du contenu sombre). La valeur `only dark` n'est pas valide selon la spécification car le mode sombre est généralement mois lisible et que les navigateurs utilisent un mode clair par défaut.

          Ainsi, si on préfére utiliser un mode sombre et laisser le mode clair utilisable, on pourra écrire :

          ```html
          <meta name="color-scheme" content="dark light">
          ```

          Cela fonctionne pour l'ensemble du document. Pour cibler des éléments en particulier, on pourra utiliser la propriété CSS {{cssxref("color-scheme")}}. La mise en forme pourra tirer parti du mode utilisé par le système grâce à la caractéristique [`prefers-color-scheme`](/fr/docs/Web/CSS/@media/prefers-color-scheme).

    Cet attribut peut également avoir une valeur définie dans une liste plus large : [WHATWG Wiki MetaExtensions](https://wiki.whatwg.org/wiki/MetaExtensions). Bien qu'aucune n'ait encore été acceptée, certaines sont parfois utilisées fréquemment :

    - `creator`, définit le nom du créateur du document (sans contrainte de format). Cela peut être le nom d'une institution. Si plusieurs créateurs sont à recenser, plusieurs éléments {{HTMLElement("meta")}} devront être utilisés
    - `googlebot`, synonyme de `robots`, est suivi par Googlebot, le robot de Google qui indexe les pages
    - `publisher`, définit le nom de l'éditeur du document (sans contrainte de format). Cela peut être le nom d'une institution.
    - `robots`, définit le comportement que les robots d'indexation devraient respecter. C'est une liste de valeurs séparées par des virgules. La liste qui suit définit les valeurs que l'on peut utiliser :

      <table class="standard-table">
        <caption>
          Valeurs pour le contenu de
          <code>&#x3C;meta name="robots"></code>
        </caption>
        <thead>
          <tr>
            <th scope="col">Valeur</th>
            <th scope="col">Description</th>
            <th scope="col">Utilisé par</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>index</code></td>
            <td>Permet au robot d'indexer la page</td>
            <td>Tous</td>
          </tr>
          <tr>
            <td><code>noindex</code></td>
            <td>Interdit au robot d'indexer la page</td>
            <td>Tous</td>
          </tr>
          <tr>
            <td><code>follow</code></td>
            <td>Permet au robot de suivre les liens contenus dans la page</td>
            <td>Tous</td>
          </tr>
          <tr>
            <td><code>nofollow</code></td>
            <td>Interdit au robot de suivre les liens contenus dans la page</td>
            <td>Tous</td>
          </tr>
          <tr>
            <td><code>none</code></td>
            <td>Synonyme de <code>noindex</code>, <code>nofollow</code></td>
            <td>
              <a href="https://support.google.com/webmasters/answer/79812">Google</a>
            </td>
          </tr>
          <tr>
            <td><code>noodp</code></td>
            <td>
              Empêche que la description
              <a class="external" href="https://www.dmoz-odp.org/"
                >Open Directory Project</a
              >
              si celle-ci est présente, soit affichée dans les résultats du moteur de
              recherche
            </td>
            <td>
              <p>
                <a
                  class="external"
                  href="https://www.google.com/support/webmasters/bin/answer.py?hl=en&#x26;answer=79812"
                  >Google</a
                >,
                <a
                  href="https://help.yahoo.com/l/us/yahoo/search/indexing/indexing-11.html;_ylt=Arh3LHnisvRMPJKzQqmJ97JYqCN4"
                  >Yahoo</a
                >,
                <a
                  href="https://www.bing.com/webmaster/help/which-robots-metatags-does-bing-support-5198d240"
                  >Bing</a
                >
              </p>
            </td>
          </tr>
          <tr>
            <td><code>noarchive</code></td>
            <td>
              Empêche le moteur de recherche de mettre en cache le contenu de la page
            </td>
            <td>
              <a
                class="external"
                href="https://www.google.com/support/webmasters/bin/answer.py?hl=en&#x26;answer=79812"
                >Google</a
              >,
              <a
                class="external"
                href="https://help.yahoo.com/l/us/yahoo/search/indexing/basics-10.html;_ylt=Aszma_Ly8TfhL7mn_LGWn5RYqCN4"
                >Yahoo</a
              >
            </td>
          </tr>
          <tr>
            <td><code>nosnippet</code></td>
            <td>
              Empêche l'affichage de la description de la page dans les résultats du
              moteur de recherche
            </td>
            <td>
              <a
                class="external"
                href="https://www.google.com/support/webmasters/bin/answer.py?answer=35304"
                >Google</a
              >
            </td>
          </tr>
          <tr>
            <td><code>noimageindex</code></td>
            <td>
              Empêche la page d'apparaître en tant que page de référence ayant permis
              l'indexation de l'image
            </td>
            <td>
              <a
                class="external"
                href="https://www.google.com/support/webmasters/bin/answer.py?hl=en&#x26;answer=79812"
                >Google</a
              >
            </td>
          </tr>
          <tr>
            <td><code>noydir</code></td>
            <td>
              Empêche l'utilisation et l'affichage de la description Yahoo Directory
              parmi les résultats du moteur de recherche, si celle-ci est présente
            </td>
            <td>Yahoo</td>
          </tr>
          <tr>
            <td><code>nocache</code></td>
            <td>Synonyme de <code>noarchive</code></td>
            <td>Bing</td>
          </tr>
        </tbody>
      </table>

      > **Note :**
      >
      > - Seuls les robots « respectueux » suivront ces règles. Il ne faut pas considérer cela comme une manière efficace de blocage (robots indexeurs cherchant des adresses e-mails pour le spam notamment)
      > - Le robot aura besoin d'accéder à la page pour lire la valeur de la métadonnée. Afin d'empêcher des accès intempestifs (par exemple pour réduire le débit utilisé) un fichier _{{Glossary("robots.txt")}}_ doit être utilisé en priorité (ou en complément).
      > - Si vous souhaitez retirer la page du contenu d'un index, la valeur `noindex` fonctionnera mais seulement à partir de la prochaine analyse. Assurez-vous de ne pas bloquer cette analyse (par exemple avec le fichier [`robots.txt`](/fr/docs/Glossaire/Robots.txt)). Certains moteurs de recherches ont des outils destinés aux développeurs qui permettent de rapidement désindexer une page.
      > - Certaines valeurs sont contradictoires et incompatibles : `index` et `noindex`, ou `follow` et `nofollow`. Dans le cas où ces valeurs sont utilisées simultanément, le comportement d'un robot est indéfini et peut varier selon les robots. Il est donc conseillé d'éviter de tels cas de figures.
      > - Certains robots, comme ceux de Google, Yahoo Search ou Bing, supportent ces valeurs quand elles sont utilisées dans une directive HTTP `X-Robots-Tags`: . Cela permet d'utiliser cette information pour des documents non-HTML comme les images.

    - `slurp`, synonyme de `robots`, qui est suivi uniquement par Slurp, le robot d'indexation de Yahoo Search.

    Enfin, quelques noms sont utilisés fréquemment mais sont pas considérés comme standards :

    - `viewport`, qui donne une indication quant à la taille du [viewport](/fr/docs/Mozilla/Mobile/Viewport_meta_tag) (vue virtuelle). Cette information est utilisée pour les terminaux mobiles uniquement :



      <table class="fullwidth-table">
        <caption>
          Valeurs pour le contenu de &#x3C;meta name="viewport">
        </caption>
        <thead>
          <tr>
            <th scope="col">Valeur</th>
            <th scope="col">Valeurs possibles</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>width</code></td>
            <td>un nombre entier positif ou le mot-clé <code>device-width</code></td>
            <td>
              Définit la largeur, en pixels, de la zone d'affichage
              (<em>viewport</em>) dans laquelle on veut que le site soit affiché.
            </td>
          </tr>
          <tr>
            <td><code>height</code></td>
            <td>un nombre entier positif ou le mot-clé <code>device-height</code></td>
            <td>
              Définit la hauteur, en pixels, de la zone d'affichage (viewport) dans
              laquelle on veut que le site soit affiché.
            </td>
          </tr>
          <tr>
            <td><code>initial-scale</code></td>
            <td>un nombre positif entre <code>0.0</code> et <code>10.0</code></td>
            <td>
              définit le ratio entre la taille de l'écran du terminal (<code
                >device-width</code
              >
              en portrait ou <code>device-height</code> en paysage) et la taille de la
              zone d'affichage.
            </td>
          </tr>
          <tr>
            <td><code>maximum-scale</code></td>
            <td>un nombre positif entre <code>0.0</code> et <code>10.0</code></td>
            <td>
              définit la valeur maximale du zoom possible. Doit être supérieur ou égal
              à<code> minimum-scale</code>, sinon le comportement est indéterminé
            </td>
          </tr>
          <tr>
            <td><code>minimum-scale</code></td>
            <td>un nombre positif entre <code>0.0</code> et <code>10.0</code></td>
            <td>
              définit la valeur minimale du zoom possible. Doit être inférieur ou égal
              à<code> maximum-scale</code>, sinon le comportement est indéterminé
            </td>
          </tr>
          <tr>
            <td><code>user-scalable</code></td>
            <td>un booléen (<code>yes</code> ou <code>no</code>)</td>
            <td>
              Si la valeur est <code>no</code>, l'utilisateur ne pourra pas zoomer sur
              le document. Par défaut, la valeur est <code>yes</code>.
            </td>
          </tr>
        </tbody>
      </table>

      > **Attention :**
      >
      > - Bien qu'il ne fasse pas partie du standard, cet attribut est utilisé par plusieurs navigateurs mobiles comme Safari Mobile, Firefox pour Mobile ou Opera Mobile.
      > - Les valeurs par défaut peuvent être différentes suivant les appareils et les navigateurs.
      > - Pour en savoir plus sur l'utilisation faite de cet attribut par Firefox pour Mobile, vous pouvez lire [cet article](/fr/docs/Mozilla/Mobile/Viewport_meta_tag).

- {{htmlattrdef("scheme")}} {{deprecated_inline}}

  - : Cet attribut définit le schéma dans lequel la métadonnée est décrite. Un schéma, de la même manière qu'un format, est un contexte permettant d'interpréter correctement la valeur de l'attribut {{htmlattrxref("content", "meta")}}.

    > **Attention :** Cet attribut a été déprécié et ne doit donc plus être utilisé. Il n'y pas d'attributs ou d'éléments remplaçant sa fonction car cet attribut n'était pas usité.

## Notes

Selon les attributs qui sont renseignés, la métadonnée peut être de différentes sortes :

- si {{htmlattrxref("name", "meta")}} est renseigné, c'est une _métadonnée de document_ s'appliquant à la page entière,
- si {{htmlattrxref("http-equiv", "meta")}} est renseigné, c'est une information transmise au serveur web indiquant comment la page doit être servie (_pragma directive_ en anglais),
- si {{htmlattrxref("charset", "meta")}} est renseigné, c'est une déclaration sur le jeu de caractères, autrement dit l'ensemble de caractères utilisés pour la version sérialisée de la page web,
- si {{htmlattrxref("itemprop", "meta")}} est renseigné, c'est une métadonnée définie par l'utilisateur, gérée de manière transparente par l'agent utilisateur car la signification de cette métadonnée est spécifique à l'utilisateur. {{experimental_inline}}

## Exemples

### HTML

```html
<!-- En HTML5 -->
<meta charset="utf-8">

<!-- Rediriger la page après 3 secondes -->
<meta http-equiv="refresh" content="3;url=http://www.mozilla.org">
```

## Accessibilité

### Rafraîchir le contenu

Les pages utilisant une valeur de `refresh` trop petite peuvent ne pas laisser le temps nécessaire à la compréhension aux personnes qui utilisent un lecteur d'écran. Le changement brutal de contenu peut également être source de confusion pour les personnes à faible vision.

- [Comprendre les règles WCAG 2.1](/fr/docs/Web/Accessibility/Understanding_WCAG/Operable#Guideline_2.2_—_Enough_Time_Provide_users_enough_time_to_read_and_use_content)
- [Comprendre les règles WCAG 3.1](/fr/docs/Web/Accessibility/Understanding_WCAG/Understandable#Guideline_3.2_—_Predictable_Make_Web_pages_appear_and_operate_in_predictable_ways)
- _[Understanding Success Criterion 2.2.1 W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-required-behaviors.html)_
- _[Understanding Success Criterion 2.2.4 W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-postponed.html)_
- _[Understanding Success Criterion 3.2.5 W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-no-extreme-changes-context.html)_

### Redimensionner la zone d'affichage (_viewport_)

Désactiver la possibilité de zoom avec `user-scalable: no` empêche les personnes à faible vision de lire et de comprendre le contenu de la page.

- [Comprendre les règles WCAG 1.4](/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- _[Understanding Success Criterion 1.4.4 W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)_

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th>
        <dfn
          ><a href="/fr/docs/Web/HTML/Catégorie_de_contenu"
            >Catégories de contenu</a
          ></dfn
        >
      </th>
      <td>
        Contenu de métadonnées. Si l'attribut
        {{htmlattrxref("itemprop")}} est utilisé : du
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux"
          >contenu de flux</a
        >
        ou du
        <a
          href="/fr/docs/Web/HTML/Cat%C3%A9gorie_de_contenu#Contenu_phras.C3.A9"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th><dfn>Contenu autorisé</dfn></th>
      <td>Aucun cet élément est un élément vide.</td>
    </tr>
    <tr>
      <th><dfn>Omission de balises</dfn></th>
      <td>
        Étant un élément vide, la balise de début doit être présente et la
        balise de fin doit être absente.
      </td>
    </tr>
    <tr>
      <th><dfn>Éléments parents autorisés</dfn></th>
      <td>
        <code>&#x3C;meta charset></code>, <code>&#x3C;meta http-equiv></code> :
        un élément {{HTMLElement("head")}}. Si l'attribut
        {{htmlattrxref("http-equiv", "meta")}} n'est pas une
        déclaration d'encodage, l'élément peut également être au sein d'un
        élément {{HTMLElement("noscript")}} lui-même contenu par un
        élément {{HTMLElement("head")}}.<br /><code
          >&#x3C;meta name></code
        >
        : tout élément acceptant du contenu de métadonnées.<br /><code
          >&#x3C;meta itemprop></code
        >
        : tout élément acceptant du contenu de métadonnées ou du contenu phrasé.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Aucun.</td>
    </tr>
    <tr>
      <th>Interface DOM</th>
      <td>{{domxref("HTMLMetaElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

| Spécification                                                                                                                    | État                                 | Commentaires                                                                       |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ---------------------------------------------------------------------------------- |
| {{SpecName('Referrer Policy', '#referrer-policy-delivery-meta', '&lt;meta name="referrer"&gt;')}} | {{Spec2('Referrer Policy')}} | Définition des valeurs et de la sémantique associée pour `<meta name="referrer">`. |
| {{SpecName('HTML WHATWG', 'semantics.html#the-meta-element', '&lt;meta&gt;')}}                         | {{Spec2('HTML WHATWG')}}     | Ajout de l'attribut `itemprop`                                                     |
| {{SpecName('HTML5 W3C', 'document-metadata.html#the-meta-element', '&lt;meta&gt;')}}                 | {{Spec2('HTML5 W3C')}}         | Ajout de l'attribut `charset`                                                      |
| {{SpecName('HTML4.01', 'struct/global.html#h-7.4.4.2', '&lt;meta&gt;')}}                                 | {{Spec2('HTML4.01')}}         |                                                                                    |

## Compatibilité des navigateurs

{{Compat("html.elements.meta")}}

## Voir aussi

- Les autres éléments relatifs aux métadonnées :

  - {{HTMLElement("base")}}
  - {{HTMLElement("head")}}
  - {{HTMLElement("link")}}
  - {{HTMLElement("style")}}
  - {{HTMLElement("title")}}
