---
title: <track>
slug: Web/HTML/Element/track
tags:
  - Element
  - HTML
  - Multimedia
  - Reference
  - Web
translation_of: Web/HTML/Element/track
---
{{HTMLRef}}

L'élément HTML **`<track>`** est utilisé comme élément fils d'un élément {{HTMLElement("audio")}} ou {{HTMLElement("video")}} et permet de fournir une piste texte pour le média (par exemple afin de gérer automatiquement les sous-titres). Les pistes texte utilisées avec cet élément sont formatées selon [le format WebVTT](/fr/docs/Web/API/WebVTT_API) (ce sont des fichiers `.vtt`) (WebVTT pour _Web Video Text Tracks_) ou selon [le format _Timed Text Markup Language_ (TTML)](https://w3c.github.io/ttml2/index.html).

{{EmbedInteractiveExample("pages/tabbed/track.html", "tabbed-standard")}}

## Attributs

À l'instar des autres éléments HTML, cet élément inclut [les attributs universels](/fr/docs/Web/HTML/Attributs_universels).

- {{htmlattrdef("default")}}
  - : Cet attribut booléen indique que c'est cette piste qui doit être activée par défaut, sauf si les réglages de l'utilisateur indiquent qu'une autre piste est plus appropriée. Pour un élément média donné, il ne peut y avoir qu'une seule piste avec cet attribut.
- {{htmlattrdef("kind")}}

  - : La façon dont la piste texte doit être utilisée. La valeur par défaut est `subtitles` et si la valeur fournie est incorrecte, l'agent utilisateur doit utiliser la valeur `metadata`. Cet attribut est un attribut à valeur contrainte qui peut prendre l'une des valeurs suivantes :

    - `subtitles` (la valeur par défaut)

      - Les sous-titres fournissent une traduction du contenu lorsqu'il ne peut pas être compris par l'utilisateur. La piste peut, par exemple, contenir le texte espagnol d'un film joué en anglais.
      - Les sous-titres peuvent fournir du contenu supplémentaires, généralement des informations de contexte (par exemple, le texte qui défile au début d'un film Star Wars, la date ou le lieu d'une scène, etc.).

    - `captions`

      - La piste est une retransciption voire une traduction de la partie audio du média.
      - La piste peut contenir des informations non-verbales importantes comme des indications musicales ou des effets sonores. La piste peut également indiquer la source du bruit (musique, personnage, etc.).
      - Ce type de piste est adapté aux utilisateurs malentendants ou lorsque le son est désactivé.

    - `descriptions`

      - La piste est une description textuelle du contenu vidéo.
      - Ce type de piste est adapté aux personnes malvoyantes ou lorsque la vidéo ne peut pas être vue.

    - `chapters`

      - Les titres de chapitre utilisés lorsque l'utilisateur navigue au sein du média.

    - `metadata`

      - La piste est utilisé par des scripts, elle n'est pas visible pour l'utilisateur.

- {{htmlattrdef("label")}}
  - : Le titre associé à la piste et qui est affiché par le navigateur lorsque celui-ci liste les pistes disponibles.
- {{htmlattrdef("src")}}
  - : L'adresse du fichier pour la piste (celle du fichier`.vtt`). Cet attribut doit être une URL valide et doit nécessairement être présent dans l'élément. L'URL indiquée doit avoir la même origine à moins que l'élément parent {{HTMLElement("audio")}} ou {{HTMLElement("video")}} de l'élément `<track>` possède un attribut [crossorigin](/fr/docs/Web/HTML/Reglages_des_attributs_CORS).
- {{htmlattrdef("srclang")}}
  - : La langue dans laquelle est exprimée la piste textuelle. La valeur de cet attribut doit être une balise de langue [BCP 47](https://r12a.github.io/app-subtags/). Si l'attribut `kind` vaut `subtitles,` l'attribut `srclang` doit obligatoirement être défini.

## Notes d'utilisation

### Types de piste

Le type de donnéefournit par un élément `track` est décrit par l'attribut `kind`. Cet attribut peut prendre une valeur parmi `subtitles`, `captions`, `descriptions`, `chapters` ou `metadata`. L'élément pointe vers un fichier source qui contient du texte avec des annotations temporelles que le navigateur affichera lorsque l'utilisateur en aura besoin.

Un élément média ({{HTMLElement("audio")}} ou {{HTMLElement("video")}}) ne peut pas avoir plusieurs pistes partageant les mêmes valeurs pour les attributs `kind`, `srclang` et `label`.

### Détecter le changement de texte

{{page("/fr/docs/Web/API/TextTrack/cuechange_event", "On the track element")}}

## Exemples

### HTML

```html
<video controls poster="/images/sample.gif">
   <source src="sample.mp4" type="video/mp4">
   <source src="sample.ogv" type="video/ogv">
   <track kind="captions" src="sampleCaptions.vtt" srclang="en">
   <track kind="descriptions"
     src="sampleDescriptions.vtt" srclang="en">
   <track kind="chapters" src="chapitres.vtt" srclang="en">
   <track kind="subtitles" src="soustitres_de.vtt" srclang="de">
   <track kind="subtitles" src="soustitres_en.vtt" srclang="en">
   <track kind="subtitles" src="soustitres_ja.vtt" srclang="ja">
   <track kind="subtitles" src="soustitres_oz.vtt" srclang="oz">
   <track kind="metadata" src="keyStage1.vtt" srclang="en"
     label="Key Stage 1">
   <track kind="metadata" src="keyStage2.vtt" srclang="en"
     label="Key Stage 2">
   <track kind="metadata" src="keyStage3.vtt" srclang="en"
     label="Key Stage 3">
   <!-- Contenu alternatif pour les navigateurs qui
        ne prennent pas en charge video -->
   ...
</video>
```

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/Guide/HTML/Catégories_de_contenu"
          >Catégories de contenu</a
        >
      </th>
      <td>Aucune</td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>Aucun, cet élément est un élément vide.</td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        Étant un élément vide, la balise de début doit être présente et il ne
        doit pas y avoir de balise de fin.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Un élément média avant tout autre
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux"
          >contenu de flux</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Aucune.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLTrackElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

| Spécification                                                                                                        | État                             | Commentaires         |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('HTML WHATWG','embedded-content.html#the-track-element','track element')}}     | {{Spec2('HTML WHATWG')}} |                      |
| {{SpecName("HTML5 W3C", "embedded-content-0.html#the-track-element", "track element")}} | {{Spec2("HTML5 W3C")}}     | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("html.elements.track")}}

## Voir aussi

- [Le format WebVTT](/fr/docs/Web/API/WebVTT_API)
- {{domxref("HTMLMediaElement.textTracks")}}
