---
title: Noms des métadonnées standard
slug: Web/HTML/Element/meta/name
translation_of: Web/HTML/Element/meta/name
browser-compat: html.elements.meta.name
---
{{HTMLRef}}

L'élément [`<meta>`](/fr/docs/Web/HTML/Element/meta) permet de fournir des métadonnées sous forme de paires clé/valeur où l'attribut [`name`](/fr/docs/Web/HTML/Element/meta#attr-name) représente le nom et où l'attribut [`content`](/fr/docs/Web/HTML/Element/meta#attr-content) fournit la valeur.

### Noms de métadonnées standard définis dans la spécification HTML

La spécification HTML définit les noms de métadonnées standard suivants&nbsp;:

- `application-name`
  - : Le nom de l'application qui s'exécute sur la page web.

    > **Note :**
    >
    > - Les navigateurs peuvent utiliser cette information pour identifier l'application. Cette métadonnée est différente de celle fournie par [`<title>`](/fr/docs/Web/HTML/Element/title) qui comprend généralement le nom de l'application, mais qui peut aussi contenir le nom du document ou un état.
    > - Les pages web simples ne devraient pas utiliser `application-name`.
- `author`
  - : Le nom de la personne qui a écrit le document.
- `description`
  - : Une description concise et précise du contenu de la page. Certains navigateurs, comme Firefox et Opera, utilisent cette description par défaut pour les marque-pages.
- `generator`
  - : L'identifiant du logiciel qui a généré la page.
- `keywords`
  - : Les mots-clés pertinents pour décrire le contenu de la page, séparés par des virgules.
- `referrer`
  - : Contrôle l'en-tête HTTP [`Referer`](/fr/docs/Web/HTTP/Headers/Referer) pour les requêtes envoyées depuis le document&nbsp;:

    <table class="standard-table">
      <caption>Valeurs pour l'attribut <code>content</code> de <code>&lt;meta name="referrer"&gt;</code></caption>
      <tbody>
        <tr>
          <td><code>no-referrer</code></td>
          <td>Aucun en-tête <a href="/fr/docs/Web/HTTP/Headers/Referer"><code>Referer</code></a> n'est envoyé.</td>
        </tr>
        <tr>
          <td><code>origin</code></td>
          <td>Envoie <a href="/fr/docs/Glossary/Origin">l'origine</a> du document.</td>
        </tr>
        <tr>
          <td><code>no-referrer-when-downgrade</code></td>
          <td>Envoie l'URL complète lorsque la destination est au moins aussi sécurisée que la page actuelle (HTTP(S)→HTTPS). Dans le cas contraire (HTTPS→HTTP), aucun référent n'est envoyé. Il s'agit du comportement par défaut.</td>
        </tr>
        <tr>
          <td><code>origin-when-cross-origin</code></td>
          <td>Envoie l'URL sans les paramètres pour les requêtes vers la même origine. Dans les autres cas, seule l'origine est envoyée.</td>
        </tr>
        <tr>
          <td><code>same-origin</code></td>
          <td>Envoie l'URL sans les paramètres pour les requêtes vers la même origine. Dans les autres cas, aucun référent n'est envoyé.</td>
        </tr>
        <tr>
          <td><code>strict-origin</code></td>
          <td>Envoie l'origine lorsque la destination est au moins aussi sécurisée que la page actuelle (HTTP(S)→HTTPS). Dans le cas contraire (HTTPS→HTTP), aucun référent n'est envoyé.</td>
        </tr>
        <tr>
          <td><code>strict-origin-when-cross-origin</code></td>
          <td>Envoie l'URL sans les paramètres pour les requêtes vers la même origine. Sinon, si la destination est au moins aussi sécurisée que la page actuelle (HTTP(S)→HTTPS), c'est l'origine qui est envoyée. Dans les autres cas, aucun référent n'est envoyé.</td>
        </tr>
        <tr>
          <td><code>unsafe-URL</code></td>
          <td>Envoie l'URL sans les paramètres pour les requêtes vers la même origine et vers les autres origines.</td>
        </tr>
      </tbody>
    </table>

    > **Note :**
    >
    > - L'insertion dynamique d'un élément `<meta name="referrer">` (en utilisant [`document.write()`](/fr/docs/Web/API/Document/write) ou [`appendChild()`](/fr/docs/Web/API/Node/appendChild)) rendra imprévisible le comportement du référent.
    > - Lorsque plusieurs règles contradictoires sont définies, c'est la règle `no-referrer` qui est appliquée.

- [`theme-color`](/fr/docs/Web/HTML/Element/meta/name/theme-color)
  - : Fournit une suggestion de couleur que les agents utilisateur peuvent utiliser afin de personnaliser l'affichage de la page ou l'interface utilisateur environnante. L'attribut `content` doit contenir une couleur CSS valide (voir la page sur le type [`<color>`](/fr/docs/Web/CSS/color_value).
- `color-scheme`
  - : Définit un ou plusieurs schémas de couleurs avec lesquels le document est compatible.

    Le navigateur utilisera cette information en complément des réglages du navigateur et du système sous-jacent pour déterminer les couleurs à utiliser en arrière-plan et en premier plan pour les contrôles de formulaire et les barres de défilement. L'utilisation principale de `<meta name="color-scheme">` consiste à indiquer la compatibilité avec les modes de thèmes clair ou sombre et l'ordre de préférence associé.

    Pour `color-scheme`, la valeur de l'attribut [`content`](/fr/docs/Web/HTML/Element/meta#attr-content) peut être&nbsp;:

    - `normal`
      - : Le document n'a pas de schéma de couleurs particulier connu et devrait être affiché avec la palette de couleurs par défaut.
    - \[`light` | `dark`]+
      - : Un ou plusieurs schémas de couleurs pris en charge par le document. Répéter plusieurs fois le même schéma aura le même effet que l'indiquer une seule fois. Indiquer plusieurs schémas traduira un ordre de préférence&nbsp;: la première valeur étant préférée par le document et la seconde étant acceptable pour suivre la préférence de l'utilisatrice ou de l'utilisateur.
    - `only light`
      - : Indique que le document prend _uniquement_ en charge un mode clair (où les couleurs d'arrière-plan sont claires et les couleurs de premier plan foncées). La valeur `only dark` _n'est pas valide_ pour la spécification, car afficher un document en mode sombre lorsqu'il n'est pas réellement compatible avec ce mode peut entraîner un contenu illisible. Les différents navigateurs principaux utilisent le mode clair par défaut.

    Ainsi, pour indiquer qu'un document préfère être affiché en mode sombre tout en étant aussi compatible avec un mode clair, on aura&nbsp;:

    ```html
    <meta name="color-scheme" content="dark light">
    ```

    Cela fonctionne au niveau du document, de la même façon que la propriété [`color-scheme`](/fr/docs/Web/CSS/color-scheme) permet à des éléments individuels d'indiquer leurs schémas de couleurs préférés et acceptables. Pour adapter la mise en forme en fonction du schéma de couleurs, on pourra utiliser la caractéristique média [`prefers-color-scheme`](/fr/docs/Web/CSS/@media/prefers-color-scheme).

### Noms de métadonnées standard définis dans les autres spécifications

La spécification CSS sur l'adaptation des appareils (<i lang="en">Device Adaptation</i>) définit les noms de métadonnées suivants&nbsp;:

- `viewport`
  - : Fournit une indication à propos de la taille initiale de la zone d'affichage ([<i lang="en">viewport</i>](/fr/docs/Glossary/Viewport)).

    <table class="fullwidth-table">
      <caption>Valeurs pour le contenu de <code>&lt;meta name="viewport"&gt;</code>
      </caption>
      <thead>
        <tr>
          <th scope="col">Valeurs</th>
          <th scope="col">Sous-valeurs possibles</th>
          <th scope="col">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>width</code></td>
          <td>Un nombre entier positif ou le texte <code>device-width</code></td>
          <td>Définit la largeur en pixel pour la zone d'affichage selon laquelle on souhaite que le site web soit affiché.</td>
        </tr>
        <tr>
          <td><code>height</code></td>
          <td>Un nombre entier positif ou le texte <code>device-height</code></td>
          <td>Définit la hauteur de la zone d'affichage. N'est utilisé par aucun navigateur.</td>
        </tr>
        <tr>
          <td><code>initial-scale</code></td>
          <td>Un nombre positif entre <code>0.0</code> et <code>10.0</code></td>
          <td>Définit le ratio entre la largeur de l'appareil (<code>device-width</code> en portrait et <code>device-height</code> en paysage) et la taille de la zone d'affichage.</td>
        </tr>
        <tr>
          <td><code>maximum-scale</code></td>
          <td>Un nombre positif entre <code>0.0</code> et <code>10.0</code></td>
          <td>Définit le zoom maximal possible. Cette valeur doit être supérieure ou égale à <code>minimum-scale</code> (dans le cas contraire, le comportement est indéfini). Les réglages des navigateurs peuvent permettre d'ignorer cette règle et iOS10+ l'ignore par défaut default.</td>
        </tr>
        <tr>
          <td><code>minimum-scale</code></td>
          <td>Un nombre positif entre <code>0.0</code> et <code>10.0</code></td>
          <td>Définit le zoom minimal possible. Cette valeur doit être inférieure ou égale à <code>maximum-scale</code> (dans le cas contraire, le comportement est indéfini). Les réglages des navigateurs peuvent permettre d'ignorer cette règle et iOS10+ l'ignore par défaut.</td>
        </tr>
        <tr>
          <td><code>user-scalable</code></td>
          <td><code>yes</code> ou <code>no</code></td>
          <td>Si la valeur vaut <code>no</code>, la personne ne pourra pas zoomer sur la page. La valeur par défaut est <code>yes</code>. Les réglages des navigateurs peuvent permettre d'ignorer cette règle et iOS10+ l'ignore par défaut.</td>
        </tr>
        <tr>
          <td><code>viewport-fit</code></td>
          <td><code>auto</code>, <code>contain</code> ou <code>cover</code></td>
          <td>
            <p>La valeur <code>auto</code> n'a pas d'impact sur la disposition initiale de la zone d'affichage et toute la page web est visible.</p>
            <p>La valeur <code>contain</code> indique que la zone d'affichage est mise à l'échelle pour s'inscrire dans le plus grand rectangle possible de l'affichage.</p>
            <p>La valeur <code>cover</code> indique que la zone d'affichage est mise à l'échelle afin de remplir l'affichage de l'appareil. Il est grandement recommandé d'utiliser les variables <a href="/fr/docs/Web/CSS/env"><code>safe area inset</code></a> pour s'assurer que le contenu important ne se retrouve pas en dehors de l'affichage.
            </p>
          </td>
        </tr>
      </tbody>
    </table>

##### Points d'accessibilité quant à la mise à l'échelle de la zone d'affichage

Désactiver la possibilité de zoomer en utilisant `user-scalable` avec la valeur `no` empêchera les personnes ayant des troubles de la vision de pouvoir lire et comprendre le contenu de la page.

- [Guide MDN pour la compréhension de WCAG, règle de bonne pratique 1.4](/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Guide W3C pour la compréhension de WCAG 2.0 — Comprendre les critères de succès 1.4.4](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

##### Voir aussi

La règle-@ [`@viewport`](/fr/docs/Web/CSS/@viewport).

### Autres noms de métadonnées

[La page wiki du WHATWG sur les MetaExtensions](https://wiki.whatwg.org/wiki/MetaExtensions) contient un large ensemble de noms de métadonnées qui n'ont pas encore été formellement acceptées, mais dont certains sont déjà utilisés en pratique et dont une partie est présentée ici&nbsp;:

- `creator`
  - : Le nom de la créatrice ou du créateur du document, tel que celui de l'organisation ou de l'institution. Si plusieurs noms correspondent, on utilisera plusieurs éléments [`<meta>`](/fr/docs/Web/HTML/Element/meta).
- `googlebot`
  - : Un synonyme de `robots`, uniquement suivi par Googlebot (le robot d'indexation de Google).
- `publisher`
  - : Le nom de l'éditrice ou de l'éditeur (pour la publication) du document.
- `robots`
  - : Le comportement que les robots d'indexation devraient suivre sur la page. Il s'agit d'une liste de valeurs séparées par des virgules et qui sont décrites dans le tableau suivant&nbsp;:

    | Valeur         | Description                                                                                   | Utilisée par                                                                                                                                                                                                                                                                                     |
    | -------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | `index`        | Permet au robot d'indexer la page (valeur par défaut).                                        | Tous                                                                                                                                                                                                                                                                                             |
    | `noindex`      | Demande au robot de ne pas indexer la page.                                                   | Tous                                                                                                                                                                                                                                                                                             |
    | `follow`       | Permet au robot de suivre les liens de la page (valeur par défaut).                           | Tous                                                                                                                                                                                                                                                                                             |
    | `nofollow`     | Demande au robot de ne pas suivre les liens de la page.                                       | Tous                                                                                                                                                                                                                                                                                             |
    | `all`          | Équivalent à `index, follow`                                                                  | [Google](https://developers.google.com/search/docs/advanced/crawling/special-tags?visit_id=637855965067987211-415685194&rd=1)                                                                                                                                                                    |
    | `none`         | Équivalent à `noindex, nofollow`                                                              | [Google](https://developers.google.com/search/docs/advanced/crawling/special-tags?visit_id=637855965074074862-574753619&rd=1)                                                                                                                                                                    |
    | `noarchive`    | Demande au moteur de recherche de ne pas mettre en cache le contenu de la page.               | [Google](https://developers.google.com/search/docs/advanced/robots/robots_meta_tag), [Yahoo](https://help.yahoo.com/kb/search-for-desktop/SLN2213.html), [Bing](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240)                                           |
    | `nosnippet`    | Empêche l'affichage d'une description de la page dans les résultats d'un moteur de recherche. | [Google](https://developers.google.com/search/docs/advanced/robots/robots_meta_tag), [Bing](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240)                                                                                                               |
    | `noimageindex` | Demande à ce que cette page n'apparaisse pas comme page référente d'une image indexée.        | [Google](https://developers.google.com/search/docs/advanced/robots/robots_meta_tag)                                                                                                                                                                                                              |
    | `nocache`      | Synonyme de `noarchive`.                                                                      | [Bing](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240)                                                                                                                                                                                                    |

  > **Note :**
  >
  > - Ces règles ne sont pas contraignantes dans l'absolu. Seuls les robots suivants les bonnes pratiques les respecteront. Il ne faut pas s'attendre à ce qu'un acteur malveillant les suive.
  > - Le robot doit avoir accès à la page afin de lire ces règles. Pour éviter une consommation de bande passante, utilisez un fichier [`robots.txt`](/fr/docs/Glossary/Robots.txt).
  > - Si vous souhaitez retirer une page d'un index, `noindex` fonctionnera à partir de la prochaine visite du robot. Assurez-vous que le fichier `robots.txt` n'empêche pas les visites ultérieures.
  > - Certaines valeurs s'excluent mutuellement (comme `index` et `noindex`, ou `follow` et `nofollow`). Dans ces cas, le comportement du robot est indéfini et peut varier selon les robots.
  > - Certains robots d'indexation comme ceux de Google, Yahoo et Bing prennent en charge ces valeurs pour l'en-tête HTTP `X-Robots-Tag`, ce qui permet aux robots d'accéder à ces règles pour les documents qui ne sont pas HTML (les images par exemple).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
