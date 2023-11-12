---
title: "<del> : l'élément de texte supprimé"
slug: Web/HTML/Element/del
---

{{HTMLSidebar}}

L'élément HTML **`<del>`** représente une portion de texte ayant été supprimée d'un document. Cet élément est souvent (mais pas nécessairement) affiché rayé. L'élément [`<ins>`](/fr/docs/Web/HTML/Element/ins) est quant à lui utilisé pour représenter des portions de texte ajoutées.

{{EmbedInteractiveExample("pages/tabbed/del.html", "tabbed-standard")}}

Cet élément est souvent (mais pas nécessairement) rendu en appliquant un style barré au texte.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/Guide/HTML/Content_categories"
          >Catégories de contenu</a
        >
      </th>
      <td>
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#contenu_phras.c3.a9"
          >Contenu phrasé</a
        >
        ou
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content"
          >contenu de flux</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a
          href="/fr/docs/Web/Guide/HTML/Content_categories#transparent_content_model"
          >Transparent</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>Aucune balise manquante n'est autorisée.</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément qui accepte du
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#cphrasing_content"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >Pas de rôle correspondant</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Tous les rôles sont autorisés.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>
        <a href="/fr/docs/Web/API/HTMLModElement"
          ><code>HTMLModElement</code></a
        >
      </td>
    </tr>
  </tbody>
</table>

## Attributs

Comme pour tous les autres éléments, on peut utiliser [les attributs universels](/fr/docs/Web/HTML/Global_attributes) sur `<del>`.

- `cite`
  - : Une URL pour une ressource expliquant le changement (cela peut être un procès verbal d'une réunion par exemple).
- `datetime`
  - : Cet attribut indique l'heure et la date du changement et doit être une date valide avec une heure facultative. Si la valeur ne peut pas être analysée comme telle, l'élément n'aura pas d'information temporelle associée. Voir [l'article sur les formats](/fr/docs/Web/HTML/Date_and_time_formats) pour la représentation d'[une date seule](/fr/docs/Web/HTML/Date_and_time_formats#date_strings) ou d'[une date avec une heure](/fr/docs/Web/HTML/Date_and_time_formats#local_date_and_time_strings).

## Exemples

```html
<p><del>Ce texte a été supprimé.</del> mais pas celui-ci</p>
```

### Résultat

{{EmbedLiveSample("Exemples", "", 100)}}

## Accessibilité

Par défaut, la plupart des outils d'assistance n'annoncent pas la présence de l'élément `del`. On peut le rendre annonçable via la propriété CSS [`content`](/fr/docs/Web/CSS/content) et grâce aux pseudo-éléments [`::before`](/fr/docs/Web/CSS/::before) et [`::after`](/fr/docs/Web/CSS/::after).

```css
del::before,
del::after {
  clip-path: inset(100%);
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

del::before {
  content: " [Début de la suppression]";
}

del::after {
  content: " [Fin de la suppression] ";
}
```

Certaines personnes qui utilisent des lecteurs d'écran désactivent sciemment ces annonces pour éviter une verbosité trop importante. Il est donc important de ne pas abuser de cette technique et de ne l'appliquer qu'à des situations où il est nécessaire de comprendre que du contenu a été supprimé.

- [Short note on making your mark (more accessible) | The Paciello Group](https://developer.paciellogroup.com/blog/2017/12/short-note-on-making-your-mark-more-accessible/) (en anglais)
- [Tweaking Text Level Styles | Adrian Roselli](https://adrianroselli.com/2017/12/tweaking-text-level-styles.html) (en anglais)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément [`<ins>`](/fr/docs/Web/HTML/Element/ins) permet de représenter les insertions dans un texte
- L'élément [`<s>`](/fr/docs/Web/HTML/Element/s) permet de représenter des portions de texte qui ne sont plus pertinentes (elles sont généralement barrées)
