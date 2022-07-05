---
title: <ins>
slug: Web/HTML/Element/ins
tags:
  - Element
  - HTML
  - Reference
  - Web
translation_of: Web/HTML/Element/ins
---
{{HTMLRef}}

L'élément HTML **`<ins>`** représente un fragment de texte qui a été ajouté dans un document.

> **Note :** À l'inverse, on pourra utiliser l'élément {{HTMLElement("del")}} afin de représenter un fragment de texte supprimé.

{{EmbedInteractiveExample("pages/tabbed/ins.html", "tabbed-standard")}}

## Attributs

On peut utiliser [les attributs universels](/fr/docs/Web/HTML/Attributs_universels) pour cet élément.

- {{htmlattrdef("cite")}}
  - : Cet attribut définit l'URI d'une ressource qui explique la modification (par exemple, un compte-rendu de réunion ou un lien vers un rapport).
- {{htmlattrdef("datetime")}}
  - : Cet attribut indique la date et l'heure de la modification. La valeur de cet attribut doit être [une date valide avec une chaîne de caractères optionnelle pour l'heure](https://www.w3.org/TR/2011/WD-html5-20110525/common-microsyntaxes.html#valid-date-string-with-optional-time). Si la valeur ne peut pas être analysée comme une date, l'indication temporelle sera absente de l'élément. Voir [l'article sur les formats](/fr/docs/Web/HTML/Formats_date_heure_HTML) pour la représentation d'[une date seule](/fr/docs/Web/HTML/Formats_date_heure_HTML#Représentation_des_dates) ou d'[une date avec une heure](/fr/docs/Web/HTML/Formats_date_heure_HTML#Représentation_des_dates_et_heures_locales).

## Exemples

### HTML

```html
<p>Le texte <ins>Ce texte a été ajouté</ins> original.</p>
```

### Résultat

{{EmbedLiveSample("Exemples","100%","100%")}}

## Accessibilité

Par défaut, la plupart des outils d'assistance n'annoncent pas la présence de l'élément `ins`. On peut le rendre annonçable via la propriété CSS {{cssxref("content")}} et grâce aux pseudo-éléments {{cssxref("::before")}} et {{cssxref("::after")}}.

    ins::before,
    ins::after {
      clip-path: inset(100%);
      clip: rect(1px, 1px, 1px, 1px);
      height: 1px;
      overflow: hidden;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }

    ins::before {
      content: " [Début de l'insertion]";
    }

    ins::after {
      content: " [Fin de l'insertion] ";
    }

Certaines personnes qui utilisent des lecteurs d'écran désactivent sciemment ces annonces pour éviter une verbosité trop importante. Il est donc important de ne pas abuser de cette technique et de ne l'appliquer qu'à des situations où il est nécessaire de comprendre que du contenu a été inséré.

- [_Short note on making your mark (more accessible) | The Paciello Group_ (en anglais)](https://developer.paciellogroup.com/blog/2017/12/short-note-on-making-your-mark-more-accessible/)
- [_Tweaking Text Level Styles | Adrian Roselli_ (en anglais)](http://adrianroselli.com/2017/12/tweaking-text-level-styles.html)

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu"
          >Catégories de contenu</a
        >
      </th>
      <td>
        <a
          href="/fr/docs/Web/HTML/Cat%C3%A9gorie_de_contenu#Contenu_phras%C3%A9"
          >Contenu phrasé</a
        >
        ou
        <a href="/fr/docs/Web/HTML/Cat%C3%A9gorie_de_contenu#Contenu_de_flux"
          >contenu de flux</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a
          href="/fr/docs/Web/HTML/Cat%C3%A9gorie_de_contenu#Mod%C3%A8le_de_contenu_transparent"
          >Contenu transparent</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balise</th>
      <td>
        Aucune, la balise ouvrante et la balise fermante doivent être présentes.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément qui accepte du
        <a
          href="/fr/docs/Web/HTML/Cat%C3%A9gorie_de_contenu#Contenu_phras%C3%A9"
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
      <td>{{domxref("HTMLModElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

| Spécification                                                                                    | État                             | Commentaires |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ------------ |
| {{SpecName('HTML WHATWG', 'edits.html#the-ins-element', '&lt;ins&gt;')}} | {{Spec2('HTML WHATWG')}} |              |
| {{SpecName('HTML5 W3C', 'edits.html#the-ins-element', '&lt;ins&gt;')}}     | {{Spec2('HTML5 W3C')}}     |              |
| {{SpecName('HTML4.01', 'struct/text.html#h-9.4', '&lt;ins&gt;')}}         | {{Spec2('HTML4.01')}}     |              |

## Compatibilité des navigateurs

{{Compat("html.elements.ins")}}

## Voir aussi

- {{HTMLElement("del")}} qui permet d'indiquer la suppression d'un fragment dans un document.
