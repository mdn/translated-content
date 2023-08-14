---
title: "<iframe> : l'élément de cadre intégré"
slug: Web/HTML/Element/iframe
---

{{HTMLSidebar}}

L'élément HTML **`<iframe>`** représente un [contexte de navigation](/fr/docs/Glossary/Browsing_context) imbriqué qui permet en fait d'obtenir une page HTML intégrée dans la page courante.

{{EmbedInteractiveExample("pages/tabbed/iframe.html", "tabbed-standard")}}

Chaque contexte de navigation possède son propre [historique](/fr/docs/Web/API/History) et son propre [document actif](/fr/docs/Web/API/Document). Le contexte de navigation qui contient le contenu intégré est appelé « contexte de navigation parent ». Le contexte de navigation le plus élevé (qui n'a pas de contexte parent) correspond généralement à la fenêtre du navigateur (cf. [`Window`](/fr/docs/Web/API/Window)).

> **Attention :** Chaque contexte de navigation créé par un élément `<iframe>` représente un document à part entière et cela peut donc augmenter les ressources nécessaires à l'utilisation de la page. Aussi, bien qu'en théorie on puisse ajouter autant d'_iframes_ que possible sur autant de niveaux d'imbrication que voulus, on gardera à l'esprit que cela peut nuire aux performances.

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
          >Contenu de flux</a
        >,
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >contenu phrasé</a
        >,
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#embedded_content"
          >contenu intégré</a
        >,
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#interactive_content"
          >contenu interactif</a
        >,
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#palpable_content"
          >contenu tangible</a
        >.
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
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >Aucun rôle correspondant</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>
        <a href="https://w3c.github.io/aria/#application"
          ><code>application</code></a
        >,
        <a href="https://w3c.github.io/aria/#document"><code>document</code></a
        >, <a href="https://w3c.github.io/aria/#img"><code>img</code></a
        >, <a href="https://w3c.github.io/aria/#none"><code>none</code></a
        >,
        <a href="https://w3c.github.io/aria/#presentation"
          ><code>presentation</code></a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>
        <a href="/fr/docs/Web/API/HTMLIFrameElement"
          ><code>HTMLIFrameElement</code></a
        >
      </td>
    </tr>
  </tbody>
</table>

## Attributs

Cet élément prend en charge [les attributs universels](/fr/docs/Web/HTML/Global_attributes).

- `allow`
  - : L'attribut `allow` permet de définir une [politique de fonctionnalité](/fr/docs/Web/HTTP/Feature_Policy) pour l'_iframe_. Cette politique définit les fonctionnalités disponibles au sein de l'_iframe_ selon l'origine de la requête (les fonctionnalités peuvent être l'accès au micro, à la caméra, aux informations de batterie, etc.). Pour plus d'informations, voir [l'article sur l'utilisation de `Feature-Policy`](/fr/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy#the_iframe_allow_attribute).
- `allowfullscreen`

  - : Cet attribut, lorsqu'il vaut `true`, indique que l'_iframe_ intégrée peut être passée en plein écran via la méthode[`Element.requestFullscreen()`](/fr/docs/Web/API/Element/requestFullScreen).

    > **Note :** Cet attribut est considéré comme historique et a été redéfini avec `allow="fullscreen"`.

- `allowpaymentrequest`

  - : Cet attribut, lorsqu'il vaut `true`, permet à l'_iframe_ intégrée d'appeler l'API [Payment Request](/fr/docs/Web/API/Payment_Request_API).

    > **Note :** Cet attribut est considéré comme historique et a été redéfini avec `allow="payment"`.

- `csp` {{experimental_inline}}
  - : L'attribut `csp` définit [la politique de sécurité du contenu](/fr/docs/Web/HTTP/CSP) que le document intégré doit respecter. Voir [`HTMLIFrameElement.csp`](/fr/docs/Web/API/HTMLIFrameElement/csp) pour plus de détails.
- `height`
  - : Cet attribut définit la hauteur du cadre en pixels CSS. La valeur par défaut est `150`.
- `loading` {{experimental_inline}}

  - : Cet attribut indique la façon dont le navigateur devrait charger l'_iframe_ :

    - `eager` : L'_iframe_ doit être chargée immédiatement, même si elle n'est pas dans la zone d'affichage (_viewport_) visible. C'est la valeur par défaut.
    - `lazy` : Le chargement de l'_iframe_ est retardé jusqu'à ce que celle-ci atteigne une distance donnée du _viewport_, définie par le navigateur.

- `name`
  - : Un nom pour le contexte de navigation (ou la _frame_). Ce nom peut être utilisé comme la valeur de l'attribut `target` _(cible)_ d'un élément [`<a>`](/fr/docs/Web/HTML/Element/a) ou [`<form>`](/fr/docs/Web/HTML/Element/Form) _(formulaire)_ ou comme valeur de l'attribut `formtarget` d'un élément [`<input>`](/fr/docs/Web/HTML/Element/Input) _(entrée)_ ou [`<button>`](/fr/docs/Web/HTML/Element/Button) _(bouton)_. Il peut également être utilisé comme valeur pour le paramètre `windowName` de la méthode [`window.open()`](/fr/docs/Web/API/Window/open).
- `referrerpolicy`

  - : Une chaîne de caractères qui indique le référent (_referrer_) à utiliser lors de la récupération de la ressource :

    - `no-referrer` signifie que l'en-tête [`Referer`](/fr/docs/Web/HTTP/Headers/Referer) ne sera pas envoyé.
    - `no-referrer-when-downgrade` signifie qu'aucun en-tête `Referer` ne sera envoyé lorsqu'on navigue vers une origine qui n'utilise pas [TLS](/fr/docs/Glossary/TLS) ([HTTPS](/fr/docs/Glossary/https)). C'est le comportement par défaut de l'agent utilisateur.
    - `origin` signifie que le référent sera l'origine de la page (c'est-à-dire son [schéma](/fr/docs/Learn/Common_questions/What_is_a_URL), son [hôte](/fr/docs/Glossary/Host) et le [port](/fr/docs/Glossary/Port) utilisé).
    - `origin-when-cross-origin` signifie que les navigations vers d'autres origines seront limitées aux schémas, hôtes et ports. Les navigations sur la même origine incluront le chemin explicite du référent.
    - `same-origin` un référent sera envoyé pour [les mêmes origines](/fr/docs/Web/Security/Same-origin_policy) mais les requêtes multi-origines ne contiendront pas d'informations de référent.
    - `strict-origin` seule l'origine du document est envoyée comme référent lorsque le protocole de sécurité est le même (HTTPS→HTTPS). L'origine n'est pas envoyée lorsque la destination est moins sécurisée (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` : l'URL complète est envoyée pour les requêtes de même origine, seule l'origine est envoyée lorsque le protocole de sécurité est le même (HTTPS→HTTPS) et aucun en-tête n'est envoyé pour une destination moins sécurisée (HTTPS→HTTP).
    - `unsafe-url` signifie que le référent inclura l'origine et le chemin (mais pas le fragment, le mot de passe ou le nom utilisateur). **Cette valeur n'est pas sûre**, car elle peut entraîner des fuites d'origine ou de chemin provenant de ressources sécurisées avec TLS vers des origines non sécurisées.

- `sandbox`

  - : Cet attribut permet d'appliquer des restrictions sur le contenu qui peut apparaître dans l'_iframe_. Si cet attribut vaut la chaîne de caractères vide, toutes les restrictions sont appliquées, sinon, on peut utiliser une liste de mots-clés séparés par des espaces pour définir des restrictions précises. Les mots-clés qui peuvent être utilisés sont :

    - `allow-downloads-without-user-activation` {{experimental_inline}} : permet aux téléchargements d'avoir lieu sans un signe de l'utilisateur.
    - `allow-downloads` : permet aux téléchargements d'avoir lieu après une action de la part de l'utilisateur.
    - `allow-forms` : le contexte de navigation intégré peut envoyer des formulaires. Si ce mot-clé n'est pas utilisé, cette opération n'est pas autorisée.
    - `allow-modals` : le contexte de navigation peut ouvrir des fenêtres modales.
    - `allow-orientation-lock` : le contexte de navigation peut désactiver le verrouillage de l'orientation de l'écran.
    - `allow-pointer-lock` : le contexte de navigation peut utliser [l'API Pointer Lock](/fr/docs/Web/API/Pointer_Lock_API).
    - `allow-popups` : le contexte de navigation peut déclencher des fenêtres contextuelles (par exemple avec `window.open`, `target="_blank"`, `showModalDialog`). Si ce mot-clé n'est pas utilisé, la fonctionnalité échouera sans message d'erreur.
    - `allow-popups-to-escape-sandbox` : ce mot-clé permet à un document isolé dans un bac à sable (_sandboxed_) d'ouvrir de nouvelles fenêtres sans avoir à forcer la mise en bac à sable pour ces fenêtres. Cela permettra par exemple à une publicité tierce d'être correctement mise dans un bac à sable sans appliquer les mêmes restrictions sur la page initiale.
    - `allow-presentation` : ce mot-clé permet à un _iframe_ de démarrer [une session de présentation](/fr/docs/Web/API/PresentationRequest).
    - `allow-same-origin` : ce mot-clé permet au document isolé de supporter les tests de [same-origin policy](/fr/docs/Glossary/Same-origin_policy) en désactivant le remplacement de l'origine de l'_iframe_ par une origine unique.
    - `allow-scripts` : le contexte de navigation peut exécuter des scripts (mais ne peut pas créer de fenêtres contextuelles). Si ce mot-clé n'est pas utilisé, cette opération n'est pas autorisée.
    - `allow-storage-access-by-user-activation` {{experimental_inline}} : ce mot-clé permet au contexte de navigation embarqué de demander l'accès aux fonctionnalités de stockage du document parent (ex. ses cookies, [le stockage web](/fr/docs/Web/API/Web_Storage_API)) grâce à l'[API Storage Access](/fr/docs/Web/API/Storage_Access_API).
    - `allow-top-navigation` : le contexte de navigation peut charger du contenu depuis le contexte de navigation de plus haut niveau. Si ce mot-clé est absent, cette opération n'est pas autorisée.
    - `allow-top-navigation-by-user-activation` : le contexte de navigation peut charger du contenu depuis le contexte de plus haut niveau uniquement si l'action provient de l'utilisateur. Si ce mot-clé est absent, cette opération n'est pas autorisée.

    > **Note :**
    >
    > - Lorsque le document intégré possède la même origine que la page principale, il est **fortement déconseillé** d'employer `allow-scripts` et `allow-same-origin` simultanément, car cela permet de retirer l'attribut `sandbox` via un programme, c'est donc aussi sûr que de ne pas utiliser l'attribut `sandbox`.
    > - La mise en bac à sable (_sandboxing_) est d'une aide minime si un attaquant peut faire en sorte qu'un contenu potentiellement hostile soit affiché dans le navigateur de l'utilisateur en dehors d'un _iframe_ sous sandbox. Aussi, il est recommandé de diffuser le contenu depuis un domaine dédié séparé, afin de limiter les éventuels dommages.
    > - L'attribut `sandbox` n'est pas pris en charge par Internet Explorer 9 et les versions antérieures.

- `src`
  - : L'URL de la page qu'on souhaite intégrer. On pourra utiliser `about:blank` pour les pages vides afin de respecter les règles de même origine (_Same-Origin Policy_). On notera également que retirer l'attribut `src` d'un élément `<iframe>` à l'aide d'un script (par exemple avec [`Element.removeAttribute()`](/fr/docs/Web/API/Element/removeAttribute)) provoquera le chargement de `about:blank` dans la _frame_ pour Firefox à partir de la version 65, pour les navigateurs basés sur Chromium ainsi que pour Safari.
- `srcdoc`
  - : Le contenu de la page qu'on souhaite intégrer dans le contexte de navigation et qui surcharge celui indiqué par `src`.
- `width`
  - : Cet attribut indique la largeur de l'_iframe_ en pixels CSS. Par défaut, cet attribut vaut `300`.

### Attributs dépréciés

- `align` {{deprecated_inline}}
  - : Cet attribut obsolète permettait de définir l'alignement de l'_iframe_ par rapport à son contexte englobant.
- `frameborder` {{deprecated_inline}}
  - : Lorsqu'il vaut 1 (la valeur par défaut), cet attribut indique au navigateur de définir une bordure entre ce cadre et tout autre cadre. Lorsqu'il vaut 0, aucune bordure n'est dessinée. Plutôt que cet attribut, on utilisera la propriété CSS [`border`](/fr/docs/Web/CSS/border) pour dessiner la bordure autour d'une iframe.
- `longdesc` {{deprecated_inline}}
  - : Un URI vers une description détaillée du cadre. En raison d'un mauvais usage, cet attribut n'est pas utile pour les navigateurs non-visuels.
- `marginheight` {{deprecated_inline}}
  - : L'espace, exprimé en pixels, entre le contenu du cadre et ses marges haute et basse.
- `marginwidth` {{deprecated_inline}}
  - : L'espace, exprimé en pixels, entre le contenu du cadre et ses marges gauche et droite.
- `scrolling` {{deprecated_inline}}

  - : Un attribut à valeur contrainte qui indique si le navigateur doit afficher une barre de défilement (ou tout autre moyen de défilement) pour le cadre&nbsp;:

    - `auto` : la barre de défilement est uniquement affichée lorsque c'est nécessaire.
    - `yes` : la barre de défilement est toujours affichée.
    - `no` : aucune barre de défilement n'est affichée.

### Attributs non-standard {{non-standard_inline}}

- `mozbrowser` {{non-standard_inline}}
  - : Cet attribut est uniquement disponible pour les [WebExtensions](/fr/docs/Mozilla/Add-ons/WebExtensions). L'_iframe_ se comporte comme une fenêtre de navigateur de plus haut niveau. Voir [le bug 1318532](https://bugzilla.mozilla.org/show_bug.cgi?id=1318532) quant à l'exposition de cet attribut dans Firefox.

## Scripts

Les `iframes` (et aussi les [`<frame>`](/fr/docs/Web/HTML/Element/frame)) font partie du pseudo-tableau [`window.frames`](/fr/docs/Web/API/Window/frames).

En utilisant l'élément [`HTMLIFrameElement`](/fr/docs/Web/API/HTMLIFrameElement) du DOM, les scripts peuvent accéder à l'objet [`window`](/fr/docs/Web/API/Window) de la page HTML incluse par la propriété [`contentWindow`](/fr/docs/Web/API/HTMLIFrameElement/contentWindow). La propriété [`contentDocument`](/fr/docs/Web/API/HTMLIFrameElement/contentDocument) fait référence au document contenu dans l'`iframe` (l'équivalent de `contentWindow.document`).

Depuis l'_iframe_, un script peut obtenir une référence à la fenêtre parente via la propriété [`window.parent`](/fr/docs/Web/API/Window/parent).

Les scripts qui tentent d'accéder au contenu de l'_iframe_ doivent respecter [les règles de même origine](/fr/docs/Web/Security/Same-origin_policy) et ne peuvent pas accéder à la plupart des propriétés d'une autre fenêtre s'ils ont été chargés depuis un domaine différent. Cela s'applique également aux scripts d'un _iframe_ qui souhaitent accéder au contexte englobant. On peut toutefois communiquer entre différents domaines grâce à la méthode [`Window.postMessage()`](/fr/docs/Web/API/Window/postMessage).

## Positionnement et redimensionnement

En tant qu'[élément remplacé](/fr/docs/Web/CSS/Replaced_element), la position, l'alignement et le redimensionnement du document embarqué via `<iframe>` peuvent être ajustés via les propriétés [`object-position`](/fr/docs/Web/CSS/object-position) et [`object-fit`](/fr/docs/Web/CSS/object-fit).

## Exemples

### Une \<iframe> simple

L'exemple qui suit utilise la page située à <https://example.org> pour l'intégrer à la page courante via une iframe.

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

{{EmbedLiveSample('Exemples', 640, 400)}}

## Accessibilité

Les personnes qui utilisent des outils d'assistance tels que des lecteurs d'écran peuvent utiliser l'attribut [`title`](/fr/docs/Web/HTML/Global_attributes#title) pour obtenir la description du contenu embarqué par l'`iframe`. La valeur du titre doit décrire, de façon claire et concise, le contenu embarqué.

```html
<iframe
  title="La page Wikipédia consacrée à Robert Louis Stevenson"
  src="https://fr.wikipedia.org/wiki/Robert_Louis_Stevenson">
</iframe>
```

Sans cette description, les utilisateurs peuvent devoir naviguer à l'intérieur de l'`iframe` et parcourir le contenu afin de comprendre de quoi il s'agit. Le changement de contexte peut être source de confusion et demander un temps de réflexion, notamment pour les pages qui contiennent plusieurs `iframe` et/ou du contenu interactif tel que des vidéos ou de la musique.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Vie privée, autorisations et sécurité de l'information](/fr/docs/Web/Privacy)
