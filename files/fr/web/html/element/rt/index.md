---
title: "<rt> : l'élément de texte Ruby"
slug: Web/HTML/Element/rt
---

{{HTMLSidebar}}

L'élément HTML **`<rt>`** indique la composante texte d'une annotation Ruby, il est notamment utilisé pour la prononciation, la traduction ou la translitération des caractères d'Asie orientale. Cet élément est toujours contenu dans un élément {{HTMLElement("ruby")}}.

{{EmbedInteractiveExample("pages/tabbed/rt.html", "tabbed-shorter")}}

## Attributs

Cet élément inclut uniquement [les attributs universels](/fr/docs/Web/HTML/Attributs_universels).

## Exemples

### Avec prise en charge de ruby

#### HTML

```html
<ruby> 漢 <rt>Kan</rt> 字 <rt>ji</rt> </ruby>
```

```css hidden
body {
  font-size: 22px;
}
```

#### Résultat

{{EmbedLiveSample("Avec_prise_en_charge_de_ruby","100%","130")}}

### Sans prise en charge de ruby

Pour un navigateur sans prise en charge de Ruby, on aurait le résultat suivant :

```html hidden
漢 Kan 字 ji
```

```css hidden
body {
  font-size: 22px;
}
```

{{EmbedLiveSample("Sans_prise_en_charge_de_ruby", 600, 60)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{HTMLElement("ruby")}}
- {{HTMLElement("rp")}}
- {{HTMLElement("rb")}}
- {{HTMLElement("rtc")}}
- {{CSSXRef("text-transform", "text-transform: full-size-kana")}}
