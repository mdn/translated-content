---
title: "<iframe> : l'élément de cadre intégré"
slug: Web/HTML/Reference/Elements/iframe
l10n:
  sourceCommit: dd868507df863ab4f37d53c960c76e20e9ee365f
---

L'élément [HTML](/fr/docs/Web/HTML) **`<iframe>`** représente un {{Glossary("Browsing context", "contexte de navigation")}} imbriqué, intégrant une autre page HTML dans la page courante.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;iframe&gt;", "tabbed-standard")}}

```html interactive-example
<iframe
  id="inlineFrameExample"
  title="Exemple de cadre intégré"
  width="300"
  height="200"
  src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&amp;layer=mapnik">
</iframe>
```

```css interactive-example
iframe {
  border: 1px solid black;
  width: 100%; /* prévaut sur la largeur définie par l'attribut HTML width */
}
```

Chaque contexte de navigation intégré possède son propre [document](/fr/docs/Web/API/Document) et permet des navigations vers des URL. Les navigations de chaque contexte de navigation intégré sont linéarisées dans l'[historique de session](/fr/docs/Web/API/History) du contexte de navigation _le plus élevé_. Le contexte de navigation qui contient les autres est appelé _contexte de navigation parent_. Le contexte de navigation _le plus élevé_ — celui qui n'a pas de parent — correspond généralement à la fenêtre du navigateur, représentée par l'objet {{DOMxRef("Window")}}.

> [!WARNING]
> Parce que chaque contexte de navigation constitue un environnement de document complet, chaque `<iframe>` présent dans une page augmente la mémoire et les ressources informatiques nécessaires. Bien qu'en théorie vous puissiez utiliser autant d'`<iframe>` que vous le souhaitez, surveillez les problèmes de performance.

## Attributs

Cet élément inclut les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

- `allow`
  - : Définit une [Permissions Policy](/fr/docs/Web/HTTP/Guides/Permissions_Policy) pour l'`<iframe>`. La politique définit quelles fonctionnalités sont disponibles pour l'`<iframe>` (par exemple l'accès au microphone, à la caméra, à la batterie, au partage Web, etc.) en fonction de l'origine de la requête.

    Voir [iframes](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy#iframes) dans le sujet `Permissions-Policy` pour des exemples.

    > [!NOTE]
    > Une Permissions Policy définie par l'attribut `allow` applique une restriction supplémentaire en plus de la politique indiquée dans l'en-tête {{HTTPHeader("Permissions-Policy")}}. Elle ne la remplace pas.

- `allowfullscreen`
  - : Cet attribut, lorsqu'il vaut `true`, indique que l'`<iframe>` intégrée peut être passée en plein écran via la méthode {{DOMxRef("Element.requestFullscreen", "requestFullscreen()")}}.

    > [!NOTE]
    > Cet attribut est considéré comme historique et a été redéfini avec `allow="fullscreen"`.

- `allowpaymentrequest` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Cet attribut, lorsqu'il vaut `true`, permet à l'`<iframe>` intégrée d'appeler l'API [Payment Request](/fr/docs/Web/API/Payment_Request_API).

    > [!NOTE]
    > Cet attribut est considéré comme historique et a été redéfini avec `allow="payment"`.

- `browsingtopics` {{Experimental_Inline}} {{Non-standard_Inline}}
  - : Un attribut booléen qui, s'il est présent, indique que les sujets sélectionnés pour l'utilisateur·ice courant·e doivent être envoyés avec la requête pour la source de l'`<iframe>`. Voir [Utilisation de l'API Topics](/fr/docs/Web/API/Topics_API/Using) pour plus de détails.

- `credentialless` {{Experimental_Inline}}
  - : Mettre à `true` pour rendre l'`<iframe>` sans identifiants, son contenu sera chargé dans un contexte éphémère qui n'a pas accès au réseau, aux cookies ni aux données de stockage associées à son origine. Il utilise un contexte local à la durée de vie du document de plus haut niveau. En contrepartie, les règles d'intégration de {{HTTPHeader("Cross-Origin-Embedder-Policy")}} (COEP) peuvent être levées, permettant à des documents avec COEP défini d'intégrer des documents tiers qui ne le sont pas. Voir [IFrame credentialless](/fr/docs/Web/HTTP/Guides/IFrame_credentialless) pour plus de détails.

- `csp` {{Experimental_Inline}}
  - : L'attribut `csp` définit [la politique de sécurité du contenu](/fr/docs/Web/HTTP/Guides/CSP) que le document intégré doit respecter. Voir {{DOMxRef("HTMLIFrameElement.csp")}} pour plus de détails.

- `height`
  - : Cet attribut définit la hauteur du cadre en pixels CSS. La valeur par défaut est `150`.
- `loading`
  - : Cet attribut indique la façon dont le navigateur devrait charger le cadre intégré&nbsp;:
    - `eager`
      - : Charger le cadre intégré immédiatement au chargement de la page (c'est la valeur par défaut).
    - `lazy`
      - : Retarder le chargement du cadre intégré jusqu'à ce qu'elle atteigne une distance calculée par rapport au {{Glossary("visual viewport", "zone d'affichage")}}, telle que définie par le navigateur.
        L'intention est d'éviter d'utiliser la bande passante réseau et de stockage nécessaire pour récupérer le cadre tant que le navigateur n'est pas raisonnablement certain qu'elle sera nécessaire.
        Cela améliore les performances et réduit les coûts dans la plupart des cas d'utilisation typiques, en particulier en réduisant le temps de chargement initial de la page.

        > [!NOTE]
        > Le chargement n'est retardé que lorsque JavaScript est activé.
        > Il s'agit d'une mesure anti-pistage.

- `name`
  - : Un nom pour le contexte de navigation (ou la _frame_). Ce nom peut être utilisé comme la valeur de l'attribut `target` d'un élément {{HTMLElement("a")}}, {{HTMLElement("form")}}, ou {{HTMLElement("base")}}&nbsp;; l'attribut `formtarget` d'un élément {{HTMLElement("input")}} ou {{HTMLElement("button")}}&nbsp;; ou le paramètre `windowName` de la méthode {{DOMxRef("Window.open()","window.open()")}}. De plus, ce nom devient une propriété des objets {{DOMxRef("Window")}} et {{DOMxRef("Document")}}, contenant une référence à la fenêtre intégrée ou à l'élément lui-même.
- `referrerpolicy`
  - : Une chaîne de caractères qui indique le référent (_referrer_) à utiliser lors de la récupération de la ressource :
    - `no-referrer`
      - : L'en-tête {{HTTPHeader("Referer")}} ne sera pas envoyé.
    - `no-referrer-when-downgrade`
      - : L'en-tête {{HTTPHeader("Referer")}} ne sera envoyé lorsqu'on navigue vers une {{Glossary("origin", "origine")}} qui n'utilise pas {{Glossary("TLS")}} ({{Glossary("HTTPS")}}).
    - `origin`
      - : Le référent sera l'origine de la page (c'est-à-dire son [schéma](/fr/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), son {{Glossary("host", "hôte")}} et le {{Glossary("port")}} utilisé).
    - `origin-when-cross-origin`
      - : Le référent envoyé vers d'autres origines sera limité au schéma, à l'hôte et au port. Les navigations sur la même origine incluront toujours le chemin.
    - `same-origin`
      - : Un référent sera envoyé pour {{Glossary("Same-origin policy", "les mêmes origines")}} mais les requêtes multi-origines ne contiendront pas d'informations de référent.
    - `strict-origin`
      - : Seule l'origine du document est envoyée comme référent lorsque le protocole de sécurité est le même (HTTPS→HTTPS). L'origine n'est pas envoyée lorsque la destination est moins sécurisée (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (par défaut)
      - : Envoie de l'URL complète pour les requêtes de même origine, seule l'origine est envoyée lorsque le protocole de sécurité est le même (HTTPS→HTTPS) et aucun en-tête n'est envoyé pour une destination moins sécurisée (HTTPS→HTTP).
    - `unsafe-url`
      - : Le référent inclura l'origine et le chemin (mais pas le [fragment](/fr/docs/Web/API/HTMLAnchorElement/hash), le [mot de passe](/fr/docs/Web/API/HTMLAnchorElement/password) ou le [nom utilisateur](/fr/docs/Web/API/HTMLAnchorElement/username)). **Cette valeur n'est pas sûre**, car elle peut entraîner des fuites d'origine ou de chemin provenant de ressources sécurisées avec TLS vers des origines non sécurisées.

- `sandbox`
  - : Cet attribut permet d'appliquer des restrictions sur le contenu qui peut apparaître dans l'`<iframe>`. Si cet attribut vaut la chaîne de caractères vide, toutes les restrictions sont appliquées, sinon, on peut utiliser une liste de mots-clés séparés par des espaces pour définir des restrictions précises. Les mots-clés qui peuvent être utilisés sont&nbsp;:
    - `allow-downloads`
      - : Permet le téléchargement de fichiers via un élément {{HTMLElement("a")}} ou {{HTMLElement("area")}} avec l'attribut [download](/fr/docs/Web/HTML/Reference/Elements/a#download), ainsi que via la navigation qui conduit au téléchargement d'un fichier. Cela fonctionne que l'utilisateur·ice ait cliqué sur le lien ou que du code JavaScript l'ait initié sans interaction de l'utilisateur·ice.
    - `allow-forms`
      - : Permet à la page d'envoyer des formulaires. Si ce mot-clé n'est pas utilisé, un formulaire s'affichera normalement, mais son envoi n'activera pas la validation des champs, n'enverra pas de données au serveur web et ne fermera pas un dialogue.
    - `allow-modals`
      - : Permet à la page d'ouvrir des fenêtres modales via {{DOMxRef("Window.alert()")}}, {{DOMxRef("Window.confirm()")}}, {{DOMxRef("Window.print()")}} et {{DOMxRef("Window.prompt()")}}&nbsp;; l'ouverture d'un {{HTMLElement("dialog")}} est autorisée indépendamment de ce mot-clé. Il permet également à la page de recevoir l'événement {{DOMxRef("BeforeUnloadEvent")}}.
    - `allow-orientation-lock`
      - : Permet à la ressource de verrouiller l'orientation de l'écran via {{DOMxRef("Screen.lockOrientation")}}.
    - `allow-pointer-lock`
      - : Permet à la page d'utiliser l'[API Pointer Lock](/fr/docs/Web/API/Pointer_Lock_API).
    - `allow-popups`
      - : Permet l'ouverture de popups (créées, par exemple, par {{DOMxRef("Window.open()")}} ou `target="_blank"`). Si ce mot-clé n'est pas utilisé, cette fonctionnalité échouera silencieusement.
    - `allow-popups-to-escape-sandbox`
      - : Permet à un document en bac à sable d'ouvrir un nouveau contexte de navigation sans lui appliquer les drapeaux de sandbox. Cela permettra, par exemple, à une publicité tierce d'être mise en bac à sable sans imposer les mêmes restrictions à la page vers laquelle la publicité pointe. Si ce drapeau n'est pas inclus, une page redirigée, une fenêtre popup ou un nouvel onglet sera soumis aux mêmes restrictions de sandbox que l'`<iframe>` d'origine.
    - `allow-presentation`
      - : Permet aux intégrateurs de contrôler si un cadre intégré peut démarrer une [session de présentation](/fr/docs/Web/API/PresentationRequest).
    - `allow-same-origin`
      - : Si ce jeton n'est pas utilisé, la ressource est traitée comme provenant d'une origine spéciale qui échoue toujours à la {{Glossary("same-origin policy", "police de même origine")}} (empêchant potentiellement l'accès au [stockage/de cookies](/fr/docs/Web/Security/Defenses/Same-origin_policy#accès_aux_données_de_stockage_inter-origine) et à certaines API JavaScript).
    - `allow-scripts`
      - : Permet à la page d'exécuter des scripts (mais pas de créer des fenêtres pop-up). Si ce mot-clé n'est pas utilisé, cette opération n'est pas autorisée.
    - `allow-storage-access-by-user-activation` {{Experimental_Inline}}
      - : Permet à un document chargé dans l'`<iframe>` d'utiliser la {{DOMxRef("Storage Access API", "l'API d'accès au stockage", "", "nocode")}} pour demander l'accès aux cookies non partitionnés.
    - `allow-top-navigation`
      - : Permet à la ressource de naviguer le contexte de navigation de plus haut niveau (celui nommé `_top`).
    - `allow-top-navigation-by-user-activation`
      - : Permet à la ressource de naviguer le contexte de navigation de plus haut niveau, mais uniquement si cela est initié par un geste utilisateur.
    - `allow-top-navigation-to-custom-protocols`
      - : Permet les navigations vers des protocoles non-`http` intégrés au navigateur ou [enregistrés par un site](/fr/docs/Web/API/Navigator/registerProtocolHandler). Cette fonctionnalité est également activée par les mots-clés `allow-popups` ou `allow-top-navigation`.

    > [!NOTE]
    >
    > - Lorsque le document intégré possède la même origine que la page englobante, il est **fortement déconseillé** d'utiliser à la fois `allow-scripts` et `allow-same-origin`, car cela permettrait au document intégré de retirer l'attribut `sandbox` — le rendant aussi peu sûr que de ne pas utiliser `sandbox` du tout.
    > - La mise en bac à sable est inutile si un attaquant peut afficher du contenu en dehors d'un `iframe` sandboxé — par exemple si le visiteur ouvre le cadre dans un nouvel onglet. Un tel contenu devrait également être servi depuis une _origine séparée_ pour limiter les dommages potentiels.

    > [!NOTE]
    > Lorsqu'on redirige l'utilisateur·ice, ouvre une fenêtre popup ou un nouvel onglet depuis une page intégrée dans un `<iframe>` avec l'attribut `sandbox`, le nouveau contexte de navigation est soumis aux mêmes restrictions `sandbox`. Cela peut poser des problèmes — par exemple, si une page intégrée dans un `<iframe>` sans l'attribut `sandbox="allow-forms"` ou `sandbox="allow-popups-to-escape-sandbox"` ouvre un nouveau site dans un onglet séparé, l'envoi d'un formulaire dans ce nouveau contexte de navigation échouera silencieusement.

- `src`
  - : L'URL de la page à intégrer. Utilisez la valeur `about:blank` pour intégrer une page vide conforme à la {{Glossary("Same-origin policy", "politique de même origine")}}. Notez également que supprimer par programme l'attribut `src` d'un `<iframe>` (par exemple via {{DOMxRef("Element.removeAttribute()")}}) provoque le chargement de `about:blank` dans la frame pour Firefox (à partir de la version 65), les navigateurs basés sur Chromium et Safari/iOS.

    > [!NOTE]
    > La page `about:blank` utilise l'URL du document englobant comme URL de base lors de la résolution des URL relatives, comme les liens d'ancrage.

- `srcdoc`
  - : Le HTML inline à intégrer, qui remplace l'attribut `src`. Son contenu doit respecter la syntaxe d'un document HTML complet (directive doctype, balises `<html>`, `<body>`, etc.), bien que la plupart de ces éléments puissent être omis et que seul le contenu du corps soit conservé. Ce document aura pour emplacement `about:srcdoc`. Si un navigateur ne prend pas en charge l'attribut `srcdoc`, il utilisera l'URL indiquée par l'attribut `src`.

    > [!NOTE]
    > La page `about:srcdoc` utilise l'URL du document englobant comme URL de base lors de la résolution des URL relatives, comme les liens d'ancrage.

- `width`
  - : La largeur du cadre en pixels CSS. La valeur par défaut est `300`.

### Attributs dépréciés

- `align` {{Deprecated_Inline}}
  - : Cet attribut obsolète permettait de définir l'alignement de l'_iframe_ par rapport à son contexte englobant.
- `frameborder` {{Deprecated_Inline}}
  - : Lorsqu'il vaut `1` (la valeur par défaut), cet attribut indique au navigateur de définir une bordure entre ce cadre et tout autre cadre. Lorsqu'il vaut `0`, aucune bordure n'est dessinée. Plutôt que cet attribut, on utilisera la propriété CSS {{CSSxRef("border")}} pour dessiner la bordure autour d'une iframe.
- `longdesc` {{Deprecated_Inline}}
  - : Un URI vers une description détaillée du cadre. En raison d'un mauvais usage, cet attribut n'est pas utile pour les navigateurs non-visuels.
- `marginheight` {{Deprecated_Inline}}
  - : L'espace, exprimé en pixels, entre le contenu du cadre et ses marges haute et basse.
- `marginwidth` {{Deprecated_Inline}}
  - : L'espace, exprimé en pixels, entre le contenu du cadre et ses marges gauche et droite.
- `scrolling` {{Deprecated_Inline}}
  - : Un attribut à valeur contrainte qui indique si le navigateur doit afficher une barre de défilement (ou tout autre moyen de défilement) pour le cadre&nbsp;:
    - `auto`
      - : Uniquement lorsque le contenu de la frame dépasse ses dimensions.
    - `yes`
      - : Toujours afficher une barre de défilement.
    - `no`
      - : Ne jamais afficher de barre de défilement.

## Scripts

Les `iframes` (et aussi les {{HTMLElement("frame")}}) font partie du pseudo-tableau {{DOMxRef("window.frames")}}.

En utilisant l'élément {{DOMxRef("HTMLIFrameElement")}} du DOM, les scripts peuvent accéder à l'objet {{DOMxRef("window")}} de la page HTML incluse par la propriété {{DOMxRef("HTMLIFrameElement.contentWindow", "contentWindow")}}. La propriété {{DOMxRef("HTMLIFrameElement.contentDocument", "contentDocument")}} fait référence au document contenu dans l'`iframe` (l'équivalent de `contentWindow.document`).

Depuis l'_iframe_, un script peut obtenir une référence à la fenêtre parente via la propriété {{DOMxRef("window.parent")}}.

Les scripts qui tentent d'accéder au contenu de l'_iframe_ doivent respecter [les règles de même origine](/fr/docs/Web/Security/Defenses/Same-origin_policy).
Les scripts ne peuvent pas accéder à la plupart des propriétés des autres objets `window` s'ils ont été chargés depuis un domaine différent. Cela s'applique également aux scripts d'un _iframe_ qui souhaitent accéder au contexte englobant.
On peut toutefois communiquer entre différents domaines grâce à la méthode {{DOMxRef("Window.postMessage()")}}.

### Navigation vers le haut depuis des cadres d'origines différentes

Les scripts exécutés dans un cadre de même origine peuvent accéder à la propriété {{DOMxRef("Window.top")}} et définir {{DOMxRef("Window.location","window.top.location")}} pour rediriger la page de plus haut niveau vers une nouvelle URL.
Ce comportement est appelé «&nbsp;navigation vers le haut&nbsp;».

Une cadre d'origines différentes est autorisée à rediriger la page de plus haut niveau en utilisant `top` uniquement si la cadre dispose de {{Glossary("sticky activation", "activation persistante")}}.
Si la navigation vers le haut est bloquée, les navigateurs peuvent soit demander l'autorisation de l'utilisateur·ice pour la redirection, soit consigner l'erreur dans la console de développement (ou les deux).
Les navigateurs désignent cette restriction par le terme _framebusting intervention_.
Concrètement, une cadre d'origines différentes ne peut pas rediriger immédiatement la page de plus haut niveau — l'utilisateur·ice doit avoir préalablement interagi avec la cadre ou avoir accordé l'autorisation de redirection.

Une cadre en bac à sable bloque toute navigation vers le haut à moins que les valeurs de l'attribut `sandbox` ne soient définies sur [`allow-top-navigation`](#allow-top-navigation) ou [`allow-top-navigation-by-user-activation`](#allow-top-navigation-by-user-activation).
Notez que les autorisations de navigation vers le haut sont héritées, une cadre imbriquée ne peut effectuer une navigation vers le haut que si ses cadres parentes y sont également autorisées.

## Positionnement et redimensionnement

En tant qu'{{Glossary("replaced elements", "élément remplacé")}}, la position, l'alignement et le redimensionnement du document embarqué via `<iframe>` peuvent être ajustés via la propriété {{CSSxRef("object-position")}}.

> [!NOTE]
> La propriété {{CSSxRef("object-fit")}} n'a aucun effet sur les éléments `<iframe>`.

## Comportement des événements `error` et `load`

Les événements `error` et `load` déclenchés sur des `<iframe>` pourraient être utilisés pour sonder l'espace d'URL des serveurs HTTP du réseau local. Par conséquent, par mesure de sécurité, les agents utilisateur ne déclenchent pas l'événement [error](/fr/docs/Web/API/HTMLElement/error_event) sur les `<iframe>`, et l'événement [load](/fr/docs/Web/API/HTMLElement/load_event) est toujours déclenché même si le contenu de l'`<iframe>` échoue à se charger.

## Exemples

### Un \<iframe> simple

Cet exemple intègre la page <https://example.org> dans un cadre intégré. C'est un cas d'utilisation courant des cadres intégrés&nbsp;: intégrer du contenu provenant d'un autre site. Par exemple, l'exemple en direct lui‑même et l'[exemple interactif](#exemple_interactif) en haut de la page sont tous deux des intégrations `<iframe>` de contenu provenant d'un autre site MDN.

#### HTML

```html
<iframe
  src="https://example.org"
  title="Exemple d'iframe"
  width="400"
  height="300">
</iframe>
```

#### Résultat

{{EmbedLiveSample('Une iframe simple', 640, 400)}}

### Intégrer du code source dans un \<iframe>

Cet exemple affiche directement du code source dans une iframe. Cela peut être utilisé comme technique pour empêcher l'injection de scripts lors de l'affichage de contenu généré par des utilisateur·ice·s, lorsqu'on le combine avec l'attribut `sandbox`.

Notez que lorsque vous utilisez `srcdoc`, toutes les URL relatives du contenu intégré seront résolues par rapport à l'URL de la page englobante. Si vous voulez utiliser des liens d'ancrage qui pointent vers des emplacements du contenu intégré, vous devez spécifier explicitement `about:srcdoc` comme URL de base.

#### HTML

```html-nolint
<article>
  <footer>Il y a neuf minutes, <i>jc</i> a écrit&nbsp;:</footer>
  <iframe
    sandbox
    srcdoc="<p>Il existe deux manières d'utiliser l'élément <code>iframe</code>&nbsp;:</p>
<ol>
<li><a href=&quot;about:srcdoc#embed_another&quot;>Pour intégrer du contenu provenant d'une autre page</a></li>
<li><a href=&quot;about:srcdoc#embed_user&quot;>Pour intégrer du contenu généré par les utilisateur·ice·s</a></li>
</ol>
<h2 id=&quot;embed_another&quot;>Intégrer du contenu depuis une autre page</h2>
<p>Utilisez l'attribut <code>src</code> pour spécifier l'URL de la page à intégrer&nbsp;:</p>
<pre><code>&amp;lt;iframe src=&quot;https://example.org&quot;&amp;gt;&amp;lt;/iframe&amp;gt;</code></pre>
<h2 id=&quot;embed_user&quot;>Intégrer du contenu généré par les utilisateur·ice·s</h2>
<p>Utilisez l'attribut <code>srcdoc</code> pour spécifier le contenu à intégrer. Ce billet en est déjà un exemple&nbsp;!</p>
"
    width="500"
    height="250"
></iframe>
</article>
```

Voici comment écrire les séquences d'échappement lorsque vous utilisez `srcdoc`&nbsp;:

- Premièrement, écrivez le HTML en échappant les caractères que vous échappez dans un document HTML normal (par exemple `<`, `>`, `&`, etc.).
- `&lt;` et `<` représentent exactement le même caractère dans l'attribut `srcdoc`. Par conséquent, pour en faire une véritable séquence d'échappement dans le document HTML, remplacez toute esperluette (`&`) par `&amp;`. Par exemple, `&lt;` devient `&amp;lt;`, et `&amp;` devient `&amp;amp;`.
- Remplacez les guillemets doubles (`"`) par `&quot;` pour éviter que l'attribut `srcdoc` ne soit prématurément fermé (si vous utilisez `'` à la place, remplacez `'` par `&apos;`). Cette étape intervient après la précédente, donc les `&quot;` générés ici ne deviennent pas `&amp;quot;`.

#### Résultat

{{ EmbedLiveSample('Intégrer du code source dans un iframe', 640, 300)}}

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
          >Contenu de flux</a
        >,
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >contenu phrasé</a
        >, contenu intégré, contenu interactif, contenu tangible.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>Aucun.</td>
    </tr>
    <tr>
      <th scope="row">Omission de balise</th>
      <td>
        Aucune omission, la balise ouvrante et la balise fermante doivent être
        présentes.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>Tout élément qui accepte du contenu intégré.</td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >Pas de rôle correspondant <sup>(angl.)</sup></a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/application_role"><code>application</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/document_role"><code>document</code></a>,
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/img_role"><code>img</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>,
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{DOMxRef("HTMLIFrameElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [CSP&nbsp;: frame-ancestors](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors)
- [Vie privée, autorisations et sécurité de l'information](/fr/docs/Web/Privacy)
