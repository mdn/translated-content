---
title: "<area> : l'élément de zone"
slug: Web/HTML/Element/area
---

{{HTMLSidebar}}

L'élément HTML **`<area>`** définit une zone particulière d'une image et peut lui associer un [lien hypertexte](/fr/docs/Glossary/Hyperlink). Cet élément n'est utilisé qu'au sein d'un élément [`<map>`](/fr/docs/Web/HTML/Element/map).

{{EmbedInteractiveExample("pages/tabbed/area.html", "tabbed-taller")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/Guide/HTML/Content_categories"
          >Catégories de contenu</a
        >
      </th>
      <td>
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#contenu_de_flux"
          >Contenu de flux</a
        >,
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >contenu phrasé</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        Aucun, cet élément est un
        <a href="/fr/docs/Glossary/Empty_element">élément vide</a>.
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
        Tout élément acceptant du
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >contenu phrasé</a
        >. L'élément <code>&#x3C;area></code> doit avoir un élément
        <a href="/fr/docs/Web/HTML/Element/map"><code>&#x3C;map></code></a>
        parmi ses ancêtres mais ce dernier n'a pas besoin d'être son parent
        direct.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="https://w3c.github.io/aria/#link"><code>link</code></a> lorsque
        l'attribut <a href="#attr-href"><code>href</code></a> est présent, sinon
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >aucun rôle correspondant</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Aucun.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>
        <a href="/fr/docs/Web/API/HTMLAreaElement"
          ><code>HTMLAreaElement</code></a
        >
      </td>
    </tr>
  </tbody>
</table>

## Attributs

Cet élément inclut les [attributs universels](/fr/docs/Web/HTML/Global_attributes).

- **`alt`**
  - : Une chaîne de texte alternative à afficher sur les navigateurs qui n'affichent pas les images. Le texte doit être formulé de manière à offrir à l'utilisateur le même type de choix que l'image lorsqu'elle est affichée sans le texte alternatif. Cet attribut est requis uniquement si l'attribut [`href`](#attr-href) est utilisé.
- **`coords`**

  - : L'attribut `coords` détaille les coordonnées de l'attribut [`shape`](#attr-shape) en taille, forme et placement d'un élément `<area>`.

    - `rect` : la valeur est `x1,y1,x2,y2`. La valeur spécifie les coordonnées du coin supérieur gauche et inférieur droit du rectangle.

      Par exemple : `<area shape="rect" coords="0,0,253,27" href="#" target="_blank" alt="Mozilla">` Les coordonnées dans l'exemple ci-dessus spécifient : 0,0 comme le coin supérieur gauche et 253,27 comme le coin inférieur droit du rectangle.

    - `cercle` : la valeur est `x,y,radius`. La valeur spécifie les coordonnées du centre du cercle et du rayon.

      Par exemple : `<area shape="circle" coords="130,136,60" href="#" target="_blank" alt="MDN">`.

    - `poly` : la valeur est `x1,y1,x2,y2,...,xn,yn`. La valeur spécifie les coordonnées des bords du polygone. Si la première et la dernière paire de coordonnées ne sont pas les mêmes, le navigateur ajoutera la dernière paire de coordonnées pour fermer le polygone.
    - `default` : définit la région entière.

    Les valeurs sont exprimées en nombre de pixels CSS.

- **`download`**
  - : Cet attribut, s'il est présent, indique que l'auteur souhaite que l'hyperlien soit utilisé pour télécharger une ressource. Voir [`<a>`](/fr/docs/Web/HTML/Element/a) pour une description complète de l'attribut [`download`](/fr/docs/Web/HTML/Element/a#attr-download).
- **`href`**
  - : Le lien hypertexte porté par la zone d'intérêt. Ce doit être une URL valide. Cet attribut peut être absent et dans ce cas, la zone d'intérêt ne représente pas de lien hypertexte.
- **`hreflang`**
  - : Cet attribut indique la langue du contenu vers lequel le lien renvoie. Les valeurs autorisées pour cet attribut sont définies par [BCP47](https://www.ietf.org/rfc/bcp/bcp47.txt). Cet attribut doit uniquement être utilisé lorsque `href` est présent.
- **`ping`**
  - : Cet attribut contient une liste d'URL séparées par des espaces vers lesquelles sont envoyées des requêtes HTTP [`POST`](/fr/docs/Web/HTTP/Methods/POST) dont le corps vaut `PING` lors du clic sur le lien. Les requêtes sont envoyées en arrière-plan. Cet attribut est généralement utilisé à des fins de pistage.
- **`referrerpolicy`** {{experimental_inline}}

  - : Une chaîne de caractères qui indique le référent (_referrer_) à utiliser lors de la récupération de la ressource :

    - « `no-referrer` » indique que l'en-tête `Referer` ne sera pas envoyé.
    - « `no-referrer-when-downgrade` » indique que l'en-tête `Referer` ne sera pas envoyé lorsque l'utilisateur navigue depuis une origine sans TLS/HTTPS. C'est le comportement par défaut de l'agent utilisateur si aucune autre politique n'est spécifiée.
    - « `origin` » indique que le référent sera l'origine de la page (ce qui correspond au schéma utilisé, à l'hôte et au port).
    - « `origin-when-cross-origin` » indique que lorsqu'on navigue sur d'autres origines, seule l'origine du document sera envoyée. Lorsqu'on navigue sur la même origine, le chemin de la ressource sera inclus dans le référent.
    - « `unsafe-url` » indique que le référent envoyé inclura l'origine et le chemin (mais pas le fragment, le mot de passe ou le nom d'utilisateur). Ce cas n'est pas considéré comme sûr, car il peut laisser fuiter des origines et des chemins de ressources protégées par TLS vers des origines non-sécurisées.

- **`rel`**
  - : Pour les ancres contenant l'attribut **`href`**, cet attribut définit la relation entre l'objet ciblé et l'objet lié. La valeur est une liste des [différentes relations](/fr/docs/Web/HTML/Link_types) dont les valeurs sont séparées par des espaces. Les valeurs et leurs significations peuvent être enregistrées par une autorité jugée utile par l'auteur du document. La valeur par défaut est la relation vide. Cet attribut doit uniquement être utilisé si l'attribut [`href`](#attr-href) est présent.
- **`shape`**
  - : La forme de la zone d'intérêt. Les spécifications HTML5 et HTML4 définissent les valeurs `rect` (zone rectangulaire), `circle` (zone circulaire), `poly` (zone polygonale) et `default` (indiquant toute la zone). Beacuoup de navigateurs, comme Internet Explorer 4 et ultérieur, supportent les valeurs `circ`, `polygon` et `rectangle` pour l'attribut `shape`, mais ces valeurs ne sont pas standard.
- **`target`**

  - : Cet attribut dans quel _contexte de navigation_ afficher la ressource liée. Les mots-clés peuvent avoir les significations suivantes :

    - `_self` (valeur par défaut) : Charge la réponse dans le contexte de navigation actuel.
    - `_blank`&nbsp;: Charge la réponse dans un nouveau contexte de navigation (sans nom).
    - `_parent` : Charge la réponse dans le contexte de navigation parent. Si la page courante n'est pas incluse via une _frame_, cette valeur agit comme `_self`.
    - `_top` : Charge la réponse dans le contexte de navigation avec le plus haut niveau (autrement dit l'ancêtre du contexte actuel qui n'a pas de parent). Si le contexte actuel n'a pas de parent alors cette valeur aura le même effet que la valeur `_self`.

    Cet attribut doit uniquement être utilisé si l'attribut [`href`](#attr-href) est présent.

    > **Note :** La définition de `target="_blank"` sur les éléments `<area>` fournit implicitement le même comportement `rel` que la définition de [`rel="noopener"`](/fr/docs/Web/HTML/Link_types/noopener) qui ne définit pas `window.opener`. Voir la [compatibilité des navigateurs](#browser_compatibility) pour les informations sur son support.

### Attributs dépréciés ou obsolètes

- **`name`** {{deprecated_inline}}
  - : Définit un nom pour la zone sur laquelle on peut cliquer afin que cet élément puisse être interprété par les navigateurs plus anciens.
- **`nohref`** {{deprecated_inline}}

  - : Indique une absence d'hyperlien pour la zone d'intérêt. Cet attribut doit être présent si **href** ne l'est pas et _vice versa_.

    > **Note :** Cet attribut est obsolète en HTML5, ne pas utiliser l'attribut `href` suffit.

- **`tabindex`** {{deprecated_inline}}
  - : Une valeur numérique définissant l'ordre de la zone d'intérêt parmi les différentes étiquettes. Cet attribut est un attribut universel avec HTML5.
- **`type`** {{deprecated_inline}}
  - : Sans effet car ignoré par les navigateurs.

## Exemples

Dans cet exemple, la partie gauche est un lien vers une page et la partie droite est inactive.

```html
<map name="exemple-map-1">
  <area
    shape="rect"
    coords="0,0 200,200"
    href="https://developer.mozilla.org"
    target="_blank"
    alt="Page d'accueil MDN" />
  <area shape="default" />
</map>
<img usemap="#exemple-map-1" src="https://via.placeholder.com/350x150" />
```

### Résultat

{{EmbedLiveSample("Exemple", "100%", "230")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
