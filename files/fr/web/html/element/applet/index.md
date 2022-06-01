---
title: '<applet> : l''élément d''applet Java embarqué'
slug: Web/HTML/Element/applet
tags:
  - Element
  - HTML
  - Java
  - Deprecated
  - Reference
  - Web
  - applet
translation_of: Web/HTML/Element/applet
---
{{HTMLRef}}

> **Attention :** Cette fonctionnalité a été supprimée des standards du Web. Bien que quelques navigateurs puissent encore la supporter, elle est en cours d'éradication. Ne l'utilisez ni dans d'anciens projets, ni dans de nouveaux. Les pages et applications Web l'utilisant peuvent cesser de fonctionner à tout moment.

> **Attention :** Cet élément a été retiré à partir de [Gecko 56](https://bugzilla.mozilla.org/show_bug.cgi?id=1279218), de [Chrome 47](https://bugs.chromium.org/p/chromium/issues/detail?id=470301) et le retrait est à l'étude pour [WebKit](https://bugs.webkit.org/show_bug.cgi?id=157926) et [Edge](https://developer.microsoft.com/fr/microsoft-edge/platform/issues/11946645/).

L'élément **`<applet>`**, pour les applets, définit l'intégration d'un applet Java. Cet élément est désormais déprécié en faveur de [`<object>`](/fr/docs/Web/HTML/Element/object).

L'utilisation d'applets Java sur le Web est dépréciée, la plupart des navigateurs ne prennent plus en charge les plugins Java.

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
      <td>
        Zéro ou plusieurs
        <a href="/fr/docs/Web/HTML/Element/param"><code>&#x3C;param></code></a>
        suivi d'un contenu
        <a
          href="/fr/docs/Web/Guide/HTML/Content_categories#transparent_content_model"
          >transparent</a
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
        Tout élément qui accepte du
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#embedded_content"
          >contenu intégré</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td><code>HTMLAppletElement</code> (supprimé)</td>
    </tr>
  </tbody>
</table>

## Attributs

Cet élément peut utiliser [les attributs universels](/fr/docs/Web/HTML/Global_attributes).

- **`align`** {{deprecated_inline}}
  - : Cet attribut est utilisé pour positionner l'applet sur la page en fonction du contenu qui l'entoure. La spécification HTML 4.01 définit l'utilisation des valeurs `bottom` (en bas), `left` (à gauche), `middle` (au milieu), `right` (à droite), et `top` (en haut), tandis que Microsoft et Netscape supporteraient également les valeurs `absbottom`, `absmiddle`, `baseline`, `center`, et `texttop`.
- **`alt`** {{deprecated_inline}}
  - : Cet attribut génère un texte alternatif à afficher pour les navigateurs ne supportant pas Java. Il est à noter que le contenu de l'élément `<applet>` peut être également restitué comme du texte alternatif dans certains cas.
- **`archive`** {{deprecated_inline}}
  - : Cet attribut fait référence à une version archivée ou compressée de l'applet et des fichiers classes associés, ce qui peut aider à réduire le temps de téléchargement.
- **`code`** {{deprecated_inline}}
  - : Cet attribut définit l'URL du fichier classe de l'applet qui doit être chargé et exécuté. Les noms de fichiers pour les applets sont définis avec une extension en .class. L'URL définie par cet attribut peut être relative par rapport à l'attribut `codebase`.
- **`codebase`** {{deprecated_inline}}
  - : Cet attribut donne une URL absolue ou relative du répertoire où les fichiers classes de l'applet (déclarés dans l'attribut `code`) doivent être placés.
- **`datafld`** {{deprecated_inline}}
  - : Cet attribut, supporté par Internet Explorer à partir de sa version 4, définit le nom de colonne attribué aux objets de données fournis par les données attachées. Cet attribut peut être utilisé pour définir les différents éléments [`<param>`](/fr/docs/Web/HTML/Element/param) envoyés à l'applet Java.
- **`datasrc`** {{deprecated_inline}}
  - : Comme l'attribut `datafld`, cet attribut est utilisé pour les données attachées sous Internet Explorer 4. Il indique un identifiant pour l'objet définissant la source des données qui seront attachées aux éléments [`<param>`](/fr/docs/Web/HTML/Element/param) associés à l'applet.
- **`height`** {{deprecated_inline}}
  - : Cet attribut définit la hauteur dont l'applet à besoin, en pixels.
- **`hspace`** {{deprecated_inline}}
  - : Cet attribut définit l'espace horizontal supplémentaire qui doit être réservé à côté de l'applet, en pixels.
- **`mayscript`** {{deprecated_inline}}
  - : Cet attribut, concerné par l'implémentation effectuée dans Netscape, permet l'accès à l'applet par les scripts contenus dans le document.
- **`name`** {{deprecated_inline}}
  - : Cet attribut donne un nom à l'applet afin qu'elle soit possiblement identifiée par d'autres ressources, notamment les scripts.
- **`object`** {{deprecated_inline}}
  - : Cet attribut définit l'URL d'une représentation de l'applet.
- **`src`** {{deprecated_inline}}
  - : Dans Internet Explorer 4 et ses versions ultérieures, cet attribut définit une URL pour le fichier associé à l'applet. La signification de cet attribut n'est pas claire et ne fait pas partie du standard HTML.
- **`vspace`** {{deprecated_inline}}
  - : Cet attribut définit l'espace supplémentaire qui doit être réservé en haut et en bas de l'applet, en pixels.
- **`width`** {{deprecated_inline}}
  - : Cet attribut définit la largeur, en pixels, dont l'applet a besoin

## Exemple

### HTML

```html
<applet code="game.class" align="left" archive="game.zip" height="250" width="350">
  <param name="difficulte" value="facile">
  <b>Vous avez besoin de Java pour activer cela.</b>
</applet>
```

### Résultat

{{EmbedLiveSample("Exemple","100%", 30)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Notes

La spécification W3C désapprouve l'utilisation de l'élément `<applet>` et conseille l'utilisation de l'élément [`<object>`](/fr/docs/Web/HTML/Element/object). Pour HTML 4.01 cet élément est déprécié et est devenu entièrement obsolète sous HTML5.
