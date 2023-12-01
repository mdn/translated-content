---
title: <source>
slug: Web/HTML/Element/source
---

{{HTMLSidebar}}

L'élément HTML **`<source>`** définit différentes ressources média pour un élément {{HTMLElement("picture")}}, {{HTMLElement("audio")}} ou {{HTMLElement("video")}}. C'est un élément vide : il ne possède pas de contenu et ne nécessite pas de balise fermante. Il est généralement utilisé pour distribuer le même contenu en utilisant [les différents formats pris en charge par les différents navigateurs](/fr/docs/Web/HTML/formats_media_support).

{{EmbedInteractiveExample("pages/tabbed/source.html", "tabbed-standard")}}

## Attributs

Cet élément inclut [les attributs universels](/fr/docs/Web/HTML/Attributs_universels).

- `media`
  - : [Une requête média](/fr/docs/Web/CSS/Requêtes_média/Utiliser_les_Media_queries) pour sélectionner la source du média. Cet attribut doit uniquement être utilisé pour un élément {{HTMLElement("picture")}}.
- `sizes`
  - : Cet attribut est une liste de chaîne de caractères, séparées par des virgules, dont chacune décrit une condition de taille. Cette information est utilisée par le navigateur, avant la disposition de la page, pour déterminer quelle image parmi celles définies via l'attribut [`srcset`](/fr/docs/Web/HTML/Element/source#srcset). Cet attribut aura un effet uniquement lorsque l'élément {{HTMLElement("source")}} est un élément fils direct d'un élément {{HTMLElement("picture")}}.
- `src`
  - : Cet attribut est obligatoire pour les éléments {{HTMLElement("audio")}} et {{HTMLElement("video")}}. Il définit l'adresse de la ressource. La valeur de cet attribut est ignorée lorsque l'élément `<source>` est à l'intérieur d'un élément{{HTMLElement("picture")}}.
- `srcset`

  - : Une liste d'une ou plusieurs chaînes de caractères, séparées par des virgules. Cette liste indique un ensemble d'images qui peuvent être utilisées comme sources par le navigateur. Chaque chaîne de caractères se compose :

    1. D'une URL pointant vers l'image,
    2. D'un descripteur de largeur, c'est un entier positif, directement suivi par `'w'`. La valeur par défaut, si ce descripteur est absent, correspond à l'infini positif.
    3. D'un descripteur de densité de pixel, c'est un nombre décimal positif, directement suivi par `'x'`. La valeur par défaut, si ce descripteur est absent, est `1x`.

    Pour être valide, chaque chaîne de caractères doit comporter au moins un descripteur de largeur ou un descripteur de densité de pixel. Dans cette liste, il ne peut y avoir qu'une seule chaîne pour un même couple de descripteurs largeur/pixels. Le navigateur choisira la meilleure image parmi celles fournies dans la liste.
    L'attribut `srcset` n'aura un effet que lorsque l'élément {{HTMLElement("source")}} est le fils direct de l'élément {{HTMLElement("picture")}}.

- `type`
  - : Le type MIME de la ressource, éventuellement complété d'un paramètre `codecs`. [La RFC 4281](https://tools.ietf.org/html/rfc4281) indique comment indiquer des codecs. Si l'attribut `type` n'est pas défini, le type de média est récupéré depuis le serveur et le navigateur vérifie s'il peut le gérer. Si le fichier ne peut être utilisé, la source suivante est contrôlée et ainsi de suite. Si l'attribut `type` est indiqué, le navigateur le compare avec la liste des types qu'il prend en charge, si le type n'est pas reconnu, le serveur n'est pas interrogé et le navigateur analyse l'élément `<source>` qui suit.

## Notes d'utilisation

L'élément `<source>` est un _élément vide_ ce qui signifie qu'il n'a aucun contenu et qu'il n'y a pas de balise fermante associée. Autrement dit, on n'utilisera pas `</source>` dans le code d'un document HTML.

## Exemples

### Vidéo

Dans cet exemple, on voit comment distribuer une vidéo au format Ogg pour les navigateurs qui prennent en charge ce format, la même vidéo au format QuickTime pour d'autres voire au format webm. Si le navigateur ne prend pas en charge `<audio>` ou `<video>`, un message sera affiché. Si le navigateur prend en charge l'élément mais aucun des formats proposé, un évènement `error` sera déclenché et le lecteur média (s'il est activé) indiquera une erreur. [Cette page indique les différents formats pris en charge par les navigateurs](/fr/docs/Web/HTML/formats_media_support) pour les éléments `<audio>` et `<video>`.

#### HTML

```html
<video controls>
  <source src="toto.webm" type="video/webm" />
  <source src="toto.ogg" type="video/ogg" />
  <source src="toto.mov" type="video/quicktime" />
  Votre navigateur ne prend pas en charge audio ou video.
</video>
```

Pour plus d'exemples, se référer à [Manipuler les éléments `<audio>` et `<video>` dans Firefox](/fr/docs/Web/HTML/Utilisation_d'audio_et_video_en_HTML5).

### Image

```html
<picture>
  <source srcset="mdn-logo-wide.png" media="(min-width: 800px)" />
  <source srcset="mdn-logo-medium.png" media="(min-width: 600px)" />
  <img src="mdn-logo-narrow.png" alt="MDN" />
</picture>
```

Avec l'élément {{HTMLElement("picture")}}, il faut toujours inclure un élément {{HTMLElement("img")}} comme image de secours, avec un attribut `alt` qui garantit une certaine accessibilité.

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu"
          >Catégories de contenu</a
        >
      </th>
      <td>Aucune.</td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>Aucun, c'est un élément vide.</td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        Cet élément doit avoir une balise ouvrante mais pas de balise fermante.
      </td>
    </tr>
    <tr>
      <th scope="row"><dfn>Parents autorisés</dfn></th>
      <td>
        <div>
          Un élément média —{{HTMLElement("audio")}} ou
          {{HTMLelement("video")}}— pour lequel l'élément
          <code>&#x3C;source></code> doit être placé avant
          <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux"
            >tout contenu de flux</a
          >
          ou tout élément {{HTMLElement("track")}}.
        </div>
        <div>
          Un élément {{HTMLElement("picture")}}, pour lequel l'élément
          <code>&#x3C;source></code> doit être placé avant tout élément
          {{HTMLElement("img")}}.
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Aucun.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLSourceElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{HTMLElement("picture")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
- [Les performances sur le Web](/fr/docs/Learn/Performance)
