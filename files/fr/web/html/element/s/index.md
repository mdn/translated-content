---
title: <s>
slug: Web/HTML/Element/s
---

{{HTMLSidebar}}

L'élément HTML **`<s>`** permet d'afficher du texte qui est barré car il n'est plus pertinent ou car il est obsolète. `<s>` ne doit pas être employé pour indiquer des éditions dans un document (on utilisera alors {{HTMLElement("del")}} et {{HTMLElement("ins")}}).

{{EmbedInteractiveExample("pages/tabbed/s.html", "tabbed-shorter")}}

## Attributs

Cet élément inclut uniquement [les attributs universels](/fr/docs/Web/HTML/Attributs_universels).

## Exemples

### HTML

```html
<p><s>Le plat du jour : saumon à la hollandaise</s> <em>plus disponible</em></p>
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Accessibilité

Par défaut, la plupart des outils d'assistance n'annoncent pas la présence de l'élément `s`. On peut le rendre annonçable via la propriété CSS {{cssxref("content")}} et grâce aux pseudo-éléments {{cssxref("::before")}} et {{cssxref("::after")}}.

```css
s::before,
s::after {
  clip-path: inset(100%);
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

s::before {
  content: " [Début du texte rayé]";
}

s::after {
  content: " [Fin du texte rayé] ";
}
```

Certaines personnes qui utilisent des lecteurs d'écran désactivent sciemment ces annonces pour éviter une verbosité trop importante. Il est donc important de ne pas abuser de cette technique et de ne l'appliquer qu'à des situations où il est nécessaire de comprendre que du contenu a été rayé.

- [_Short note on making your mark (more accessible) | The Paciello Group_ (en anglais)](https://developer.paciellogroup.com/blog/2017/12/short-note-on-making-your-mark-more-accessible/)
- [_Tweaking Text Level Styles | Adrian Roselli_ (en anglais)](http://adrianroselli.com/2017/12/tweaking-text-level-styles.html)

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Attributs_universels"
          >Catégories de contenu</a
        >
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phrasé"
          >Contenu phrasé</a
        >
        ou
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux"
          >contenu de flux</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phrasé"
          >Contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément qui accepte du
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phrasé"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Tous les rôles sont autorisés.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{deprecated_inline}} {{HTMLElement("strike")}} qui était un ancien synonyme de `<s>`, désormais obsolète et qui ne doit plus être utilisé sur le Web
- {{HTMLElement("del")}} qui est utilisé afin d'indiquer des données ou des portions de texte qui ont été supprimées
- La propriété CSS {{cssxref("text-decoration-line")}} qui permet de contrôler l'aspect de la ligne utilisée sur le contenu de l'élément {{HTMLElement("s")}}
