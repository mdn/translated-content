---
title: "<area> : l'élément de zone"
slug: Web/HTML/Reference/Elements/area
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

L'élément [HTML](/fr/docs/Web/HTML) **`<area>`** définit une zone à l'intérieur d'une image qui possède des zones cliquables prédéfinies. Une _image_ permet d'associer des zones géométriques d'une image à des {{Glossary("Hyperlink", "liens hypertextes")}}.

Cet élément est utilisé uniquement à l'intérieur d'un élément {{HTMLElement("map")}}.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;area&gt;", "tabbed-taller")}}

```html interactive-example
<map name="infographic">
  <area
    shape="poly"
    coords="129,0,260,95,129,138"
    href="https://developer.mozilla.org/docs/Web/HTTP"
    alt="HTTP" />
  <area
    shape="poly"
    coords="260,96,209,249,130,138"
    href="https://developer.mozilla.org/docs/Web/HTML"
    alt="HTML" />
  <area
    shape="poly"
    coords="209,249,49,249,130,139"
    href="https://developer.mozilla.org/docs/Web/JavaScript"
    alt="JavaScript" />
  <area
    shape="poly"
    coords="48,249,0,96,129,138"
    href="https://developer.mozilla.org/docs/Web/API"
    alt="Web APIs" />
  <area
    shape="poly"
    coords="0,95,128,0,128,137"
    href="https://developer.mozilla.org/docs/Web/CSS"
    alt="CSS" />
</map>
<img
  usemap="#infographic"
  src="/shared-assets/images/examples/mdn-info.png"
  alt="MDN infographic" />
```

```css interactive-example
img {
  display: block;
  margin: 0 auto;
  width: 260px;
  height: 260px;
}
```

## Attributs

Les attributs de cet élément incluent les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

- `alt`
  - : Une chaîne de caractères alternative à afficher sur les navigateurs qui n'affichent pas les images.
    Le texte doit être formulé de sorte qu'il présente à l'utilisateur·ice le même type de choix que l'image lorsqu'elle est affichée sans le texte alternatif.
    Cet attribut est requis uniquement si l'attribut [`href`](#href) est utilisé.
- `coords`
  - : L'attribut `coords` détaille les coordonnées de l'attribut [`shape`](#shape) en taille, forme et placement d'un élément `<area>`.
    Cet attribut ne doit pas être utilisé si `shape` est défini sur `default`.
    - `rect`&nbsp;: la valeur est `x1,y1,x2,y2`.
      La valeur définit les coordonnées du coin supérieur gauche et du coin inférieur droit du rectangle.
      Par exemple, dans `<area shape="rect" coords="0,0,253,27" href="#" target="_blank" alt="Mozilla">`, les coordonnées sont `0,0` et `253,27`, indiquant le coin supérieur gauche et le coin inférieur droit du rectangle, respectivement.
    - `circle`&nbsp;: la valeur est `x,y,radius`. La valeur définit les coordonnées du centre du cercle et le rayon.
      Par exemple&nbsp;: `<area shape="circle" coords="130,136,60" href="#" target="_blank" alt="MDN">`.
    - `poly`&nbsp;: la valeur est `x1,y1,x2,y2,..,xn,yn`. La valeur définit les coordonnées des bords du polygone.
      Si la première et la dernière paire de coordonnées ne sont pas les mêmes, le navigateur ajoutera la dernière paire de coordonnées pour fermer le polygone.

    Les valeurs sont des nombres de pixels CSS. Notre [générateur de formes](/fr/docs/Web/CSS/Guides/Shapes/Shape_generator) peut vous aider à générer la syntaxe `coords` en sélectionnant des points sur une image que vous téléchargez.

- `download`
  - : Cet attribut, s'il est présent, indique que la ressource liée est destinée à être téléchargée plutôt qu'affichée dans le navigateur.
    Voir l'élément HTML {{HTMLElement("a")}} pour une description complète de l'attribut [`download`](/fr/docs/Web/HTML/Reference/Elements/a#download).
- `href`
  - : La cible du lien hypertexte pour la zone.
    Sa valeur est une URL valide.
    Cet attribut peut être omis&nbsp;; dans ce cas, l'élément `<area>` ne représente pas un lien hypertexte.
- `ping`
  - : Contient une liste d'URL séparées par des espaces vers lesquelles, lors du suivi du lien, des requêtes {{HTTPMethod("POST")}} avec le corps `PING` seront envoyées par le navigateur (en arrière-plan).
    Généralement utilisé pour le pistage.
- `referrerpolicy`
  - : Une chaîne de caractères indiquant le référent à utiliser lors de la récupération de la ressource&nbsp;:
    - `no-referrer`&nbsp;: L'en-tête {{HTTPHeader("Referer")}} ne sera pas envoyé.
    - `no-referrer-when-downgrade`&nbsp;: L'en-tête {{HTTPHeader("Referer")}} ne sera pas envoyé vers des {{Glossary("origin", "origines")}} sans {{Glossary("TLS")}} ({{Glossary("HTTPS")}}).
    - `origin`&nbsp;: Le référent envoyé sera limité à l'origine de la page référente&nbsp;: son [schéma](/fr/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host")}}, et {{Glossary("port")}}.
    - `origin-when-cross-origin`&nbsp;: Le référent envoyé vers d'autres origines sera limité au schéma, à l'hôte et au port. Les navigations sur la même origine incluront toujours le chemin.
    - `same-origin`&nbsp;: Un référent sera envoyé pour la {{Glossary("Same-origin policy", "même origine")}}, mais les requêtes inter-origines ne contiendront aucune information de référent.
    - `strict-origin`&nbsp;: N'envoie l'origine du document comme référent que lorsque le niveau de sécurité du protocole reste le même (HTTPS→HTTPS), mais ne l'envoie pas vers une destination moins sécurisée (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (par défaut)&nbsp;: Envoie une URL complète lors d'une requête même origine, n'envoie que l'origine lorsque le niveau de sécurité du protocole reste le même (HTTPS→HTTPS), et n'envoie aucun en-tête vers une destination moins sécurisée (HTTPS→HTTP).
    - `unsafe-url`&nbsp;: Le référent envoyé inclura l'origine et le chemin (mais pas le [fragment](/fr/docs/Web/API/HTMLAnchorElement/hash), le [mot de passe](/fr/docs/Web/API/HTMLAnchorElement/password) ou le [nom d'utilisateur](/fr/docs/Web/API/HTMLAnchorElement/username)).
      **Cette valeur n'est pas sûre**, car elle divulgue des origines et des chemins de ressources protégées par TLS vers des origines non sécurisées.

- [`rel`](/fr/docs/Web/HTML/Reference/Attributes/rel)
  - : Pour les ancres contenant l'attribut [`href`](#href), cet attribut définit la relation de l'objet cible à l'objet du lien.
    La valeur est une liste de types de liens séparés par des espaces.
    Les valeurs et leur signification seront enregistrées par une autorité qui pourrait avoir une signification pour l'auteur ou l'autrice du document.
    La relation par défaut, si aucune autre n'est donnée, est vide. Utilisez cet attribut uniquement si l'attribut [`href`](#href) est présent.
- `shape`
  - : La forme de la zone associée. Les spécifications HTML définissent les valeurs `rect`, qui définit une région rectangulaire&nbsp;; `circle`, qui définit une région circulaire&nbsp;; `poly`, qui définit un polygone&nbsp;; et `default`, qui indique toute la région au-delà des formes définies.
- `target`
  - : Un mot-clé ou un nom défini par l'auteur ou l'autrice du {{Glossary("browsing context", "contexte de navigation")}} pour afficher la ressource liée.
    Les mots-clés suivants ont des significations particulières&nbsp;:
    - `_self` (valeur par défaut)&nbsp;: Affiche la ressource dans le contexte de navigation actuel.
    - `_blank`&nbsp;: Affiche la ressource dans un nouveau contexte de navigation sans nom.
    - `_parent`&nbsp;: Affiche la ressource dans le contexte de navigation parent du contexte actuel, si la page courante est incluse dans un cadre.
      S'il n'y a pas de parent, agit comme `_self`.
    - `_top`&nbsp;: Affiche la ressource dans le contexte de navigation le plus haut niveau (c'est-à-dire l'ancêtre du contexte actuel qui n'a pas de parent).
      S'il n'y a pas de parent, agit comme `_self`.

    Utilisez cet attribut uniquement si l'attribut [`href`](#href) est présent.

    > [!NOTE]
    > Définir `target="_blank"` sur les éléments `<area>` fournit implicitement le même comportement `rel` que la définition de [`rel="noopener"`](/fr/docs/Web/HTML/Reference/Attributes/rel/noopener) qui ne définit pas `window.opener`. Voir la [compatibilité des navigateurs](#compatibilité_des_navigateurs) pour plus d'informations sur la prise en charge.

## Exemples

### Image avec zones cliquables

```html
<map name="primary">
  <area
    shape="circle"
    coords="75,75,75"
    href="left.html"
    alt="Aller à gauche" />
  <area
    shape="circle"
    coords="275,75,75"
    href="right.html"
    alt="Aller à droite" />
</map>
<img
  usemap="#primary"
  src="https://dummyimage.com/350x150"
  alt="Image 350 x 150" />
```

### Résultat

{{EmbedLiveSample("Image avec zones cliquables", 360, 160)}}

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
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        Aucun, cet élément est un
        {{Glossary("void element", "élément vide")}}.
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
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >contenu phrasé</a
        >. L'élément <code>&#x3C;area></code> doit avoir un élément
        {{HTMLElement("map")}} parmi ses ancêtres mais ce dernier n'a pas besoin
        d'être son parent direct.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/link_role"><code>link</code></a> lorsque l'attribut <a href="#href"><code>href</code></a> est présent, sinon
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role"><code>generic</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Aucun <code>role</code> autorisé</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{DOMxRef("HTMLAreaElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
