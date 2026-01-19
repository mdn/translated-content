---
title: "<track> : l'élément de piste texte embarquée"
slug: Web/HTML/Reference/Elements/track
l10n:
  sourceCommit: 41db8c95b49ec2ca65776ef5c2eafed616b1510b
---

L'élément [HTML](/fr/docs/Web/HTML) **`<track>`** est utilisé comme enfant des éléments média, {{HTMLElement("audio")}} et {{HTMLElement("video")}}.
Chaque élément track permet de définir une piste texte synchronisée (ou des données temporelles) qui peuvent s'afficher en parallèle avec l'élément média, par exemple pour superposer des sous-titres ou des légendes sur une vidéo ou à côté de pistes audio.

Plusieurs pistes peuvent être définies pour un élément média, contenant différents types de données textuelles synchronisées, ou des données textuelles synchronisées traduites pour différentes langues.
La donnée utilisée sera soit la piste définie comme piste par défaut, soit un type et une traduction selon les préférences de l'utilisateur·ice.

Les pistes sont formatées au [format WebVTT](/fr/docs/Web/API/WebVTT_API) (fichiers `.vtt`) — Web Video Text Tracks.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;track&gt;", "tabbed-standard")}}

```html interactive-example
<video controls src="/shared-assets/videos/friday.mp4">
  <track
    default
    kind="captions"
    srclang="en"
    src="/shared-assets/misc/friday.vtt" />
  Télécharger la vidéo
  <a href="/shared-assets/videos/friday.mp4">MP4</a>, et
  <a href="/shared-assets/misc/friday.vtt">les sous-titres</a>.
</video>
```

```css interactive-example
video {
  width: 250px;
}

video::cue {
  font-size: 1rem;
}
```

## Attributs

Cet élément inclut les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

- `default`
  - : Cet attribut indique que la piste doit être activée par défaut, sauf si les préférences de l'utilisateur·ice indiquent qu'une autre piste est plus appropriée. Il ne peut être utilisé que sur une seule piste `track` par élément média.
- `kind`
  - : La façon dont la piste texte doit être utilisée. La valeur par défaut est `subtitles` et si la valeur fournie est incorrecte, l'agent utilisateur doit utiliser la valeur `metadata`. Cet attribut est un attribut à valeur contrainte qui peut prendre l'une des valeurs suivantes&nbsp;:
    - `subtitles` (la valeur par défaut)
      - Les sous-titres fournissent une traduction du contenu lorsqu'il ne peut pas être compris par l'utilisateur·ice. La piste peut, par exemple, contenir le texte espagnol d'un film joué en anglais.
      - Les sous-titres peuvent fournir du contenu supplémentaires, généralement des informations de contexte (par exemple, le texte qui défile au début d'un film Star Wars, la date ou le lieu d'une scène, etc.).
    - `captions`
      - La piste est une retranscription voire une traduction de la partie audio du média.
      - La piste peut contenir des informations non-verbales importantes comme des indications musicales ou des effets sonores. La piste peut également indiquer la source du bruit (musique, personnage, etc.).
      - Ce type de piste est adapté aux personnes malentendantes ou lorsque le son est désactivé.
    - `descriptions`
      - La piste est une description textuelle du contenu vidéo.
      - Ce type de piste est adapté aux personnes malvoyantes ou lorsque la vidéo ne peut pas être vue.
    - `chapters`
      - Les titres de chapitre utilisés lorsque l'utilisateur·ice navigue au sein du média.
    - `metadata`
      - La piste est utilisée par des scripts, elle n'est pas visible pour l'utilisateur·ice.

- `label`
  - : Le titre associé à la piste et qui est affiché par le navigateur lorsque celui-ci liste les pistes disponibles.
- `src`
  - : L'adresse du fichier pour la piste (celle du fichier `.vtt`). Cet attribut doit être une URL valide et doit nécessairement être présent dans l'élément. L'URL indiquée doit avoir la même origine à moins que l'élément parent {{HTMLElement("audio")}} ou {{HTMLElement("video")}} de l'élément `<track>` possède un attribut [`crossorigin`](/fr/docs/Web/HTML/Reference/Attributes/crossorigin).
- `srclang`
  - : La langue dans laquelle est exprimée la piste textuelle. La valeur de cet attribut doit être une {{Glossary("BCP 47 language tag", "balise de langue BCP 47")}}. Si l'attribut `kind` vaut `subtitles,` l'attribut `srclang` doit obligatoirement être défini.

## Notes d'utilisation

### Types de piste

Le type de données que `track` ajoute au média est défini par l'attribut `kind`, qui peut prendre les valeurs `subtitles`, `captions`, `chapters` ou `metadata`. L'élément pointe vers un fichier source contenant du texte horodaté que le navigateur expose lorsque l'utilisateur·ice demande des données supplémentaires.

Un élément média ne peut pas avoir plus d'une `track` portant les mêmes valeurs pour `kind`, `srclang` et `label`.

### Détection des changements de cue

La {{DOMxRef("TextTrack")}} sous-jacente, indiquée par la propriété {{DOMxRef("HTMLTrackElement.track", "track")}}, reçoit un évènement `cuechange` chaque fois que le cue actuellement présenté change. Cela se produit même si la piste n'est pas associée à un élément média.

Si la piste _est_ associée à un élément média, c'est‑à‑dire si l'élément `<track>` est utilisé comme enfant de l'élément {{HTMLElement("audio")}} ou {{HTMLElement("video")}}, l'évènement `cuechange` est également envoyé au {{DOMxRef("HTMLTrackElement")}}.

```js
let textTrackElem = document.getElementById("text-track");

textTrackElem.addEventListener("cuechange", (event) => {
  let cues = event.target.track.activeCues;
});
```

### Ajout programmatique de pistes textuelles

L'interface JavaScript qui représente l'élément `<track>` est {{DOMxRef("HTMLTrackElement")}}.
La piste textuelle associée à un élément peut être obtenue depuis la propriété {{DOMxRef("HTMLTrackElement.track")}}, et est de type {{DOMxRef("TextTrack")}}.

Des objets `TextTrack` peuvent également être ajoutés à des éléments {{DOMxRef("HTMLVideoElement")}} ou {{DOMxRef("HTMLAudioElement")}} en utilisant la méthode {{DOMxRef("HTMLMediaElement.addTextTrack()")}}.
Les objets `TextTrack` associés à un élément média sont stockés dans un {{DOMxRef("TextTrackList")}}, qui peut être récupéré à l'aide de la propriété {{DOMxRef("HTMLMediaElement.textTracks")}}.

## Exemples

### HTML

```html
<video controls poster="/images/exemple.gif">
  <source src="exemple.mp4" type="video/mp4" />
  <source src="exemple.ogv" type="video/ogv" />
  <track kind="captions" src="exempleLégende.vtt" srclang="fr" />
  <track kind="chapters" src="exempleChapitres.vtt" srclang="fr" />
  <track kind="subtitles" src="exempleSousTitres_de.vtt" srclang="de" />
  <track kind="subtitles" src="exempleSousTitres_en.vtt" srclang="en" />
  <track kind="subtitles" src="exempleSousTitres_ja.vtt" srclang="ja" />
  <track kind="subtitles" src="exempleSousTitres_oz.vtt" srclang="oz" />
  <track
    kind="metadata"
    src="cléChapitre1.vtt"
    srclang="fr"
    label="Clé Chapitre 1" />
  <track
    kind="metadata"
    src="cléChapitre2.vtt"
    srclang="fr"
    label="Clé Chapitre 2" />
  <track
    kind="metadata"
    src="cléChapitre3.vtt"
    srclang="fr"
    label="Clé Chapitre 3" />
  <!-- Contenu de repli -->
</video>
```

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row"><a href="/fr/docs/Web/HTML/Guides/Content_categories">Catégories de contenu</a></th>
      <td>Aucune.</td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>Aucun, cet élément est un {{Glossary("void element", "élément vide")}}.</td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>Doit avoir une balise de début et ne doit pas avoir de balise de fin.</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>Un élément média avant tout autre <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux">contenu de flux</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">Pas de rôle correspondant <sup>(angl.)</sup></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Aucun <code>role</code> autorisé</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{DOMxRef("HTMLTrackElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Le format de piste WebVTT](/fr/docs/Web/API/WebVTT_API)
- La propriété API {{DOMxRef("HTMLMediaElement.textTracks")}}
