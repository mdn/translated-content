---
title: title
slug: Web/HTML/Global_attributes/title
tags:
  - Attribut
  - Attribut universel
  - HTML
  - Reference
translation_of: Web/HTML/Global_attributes/title
original_slug: Web/HTML/Attributs_universels/title
---
{{HTMLSidebar("Global_attributes")}}

L'[attribut universel](/fr/docs/Web/HTML/Attributs_universels) **`title`** contient un texte d'information relatif à l'élément auquel il est rattaché.

{{EmbedInteractiveExample("pages/tabbed/attribute-title.html","tabbed-shorter")}}

On le trouve généralement utilisé pour :

- Fournir un libellé pour les éléments {{HTMLElement("iframe")}}
- Fournir un libellé associé automatiquement à un élément {{HTMLElement("input")}}
- Fournir un libellé pour les contrôles des [tableaux de données](/fr/docs/Web/HTML/Element/table)

Si cet attribut est absent, cela signifie que le titre de l'élément ancêtre le plus proche est toujours pertinent (et pourrait être utilisé comme bulle d'information pour l'élément courant). Si cet attribut vaut la chaîne vide, cela signifie explicitement que la valeur du titre de l'ancêtre le plus proche n'est pas pertinent (et ne devrait pas être utilisé comme bulle d'information).

Une sémantique différente est définie pour cet attribut lorsqu'il est utilisé avec les éléments {{HTMLElement("link")}}, {{HTMLElement("abbr")}}, {{HTMLElement("input")}} et {{HTMLElement("menuitem")}}.

## Titre sur plusieurs lignes

Un attribut `title` peut contenir plusieurs lignes. Chaque caractère `U+000A LINE FEED` (`LF`) représentera un saut de ligne. Le fragment de code suivant représente donc un élément dont le titre est écrit sur deux lignes.

### HTML

```html
<p>
  Les sauts de ligne au sein d'un attribut title doivent être pris en compte :
  <abbr title="Ceci est un
  titre sur plusieurs lignes">Exemple</abbr>.
</p>
```

### Résultat

{{EmbedLiveSample("Titre_sur_plusieurs_lignes")}}

## Héritage de `title`

Lorsqu'un élément ne possède pas d'attribut `title`, il hérite de la valeur de l'attribut pour l'élément parent (qui peut également l'hériter de son parent, etc.).

Si cet attribut est défini avec la chaîne vide, cela signifie que le titre provenant d'un élément parent n'est pas pertinent et qu'il ne devrait pas être utilisé.

### HTML

```html
<div title="Une bubulle">
  <p>Si vous survolez cet élément, il y aura une bulle d'information "Une bubulle".</p>
  <p title="">Et au-dessus de celui-ci, aucune info.</p>
</div>
```

### Résultat

{{EmbedLiveSample("Héritage_de_title")}}

## Accessibilité

L'attribut `title` est très problématique pour :

- Les personnes qui utilisent des appareils à interface tactile
- Les personnes qui naviguent au clavier
- Les personnes qui naviguent en utilisant des outils d'assistance comme des lecteurs d'écran ou des loupes logicielles
- Les personnes souffrant de troubles musculaires ou cognitifs.

Cela est dû à une prise en charge hétérogène de la part des navigateurs. Si on souhaite avoir une bulle d'information, mieux vaudra [utiliser une technique plus accessible](https://inclusive-components.design/tooltips-toggletips/).

- [Utiliser l'attribut HTML `title` - The Paciello Group (en anglais)](https://developer.paciellogroup.com/blog/2013/01/using-the-html-title-attribute-updated/)
- [_Tooltips & Toggletips - Inclusive Components_ (en anglais)](https://inclusive-components.design/tooltips-toggletips/)
- [_The Trials and Tribulations of the Title Attribute_ (en anglais) - 24 Accessibility](https://www.24a11y.com/2017/the-trials-and-tribulations-of-the-title-attribute/)

## Spécifications

| Spécification                                                                                    | État                             | Commentaires                                                                                                                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', "elements.html#the-title-attribute", "title")}} | {{Spec2('HTML WHATWG')}} | Aucune modification depuis {{SpecName('HTML5.1')}}                                                                                                                                                                                                                                                                           |
| {{SpecName('HTML5.1', "dom.html#the-title-attribute", "title")}}             | {{Spec2('HTML5.1')}}     | Dérivation de {{SpecName('HTML WHATWG')}}, aucune modification de {{SpecName('HTML5 W3C')}}                                                                                                                                                                                                                           |
| {{SpecName('HTML5 W3C', "dom.html#the-title-attribute", "title")}}         | {{Spec2('HTML5 W3C')}}     | Dérivation de {{SpecName('HTML WHATWG')}}. À partir de {{SpecName("HTML4.01")}}, `title` est désormais un attribut universel.                                                                                                                                                                                        |
| {{SpecName('HTML4.01', 'struct/global.html#adef-title', 'title')}}         | {{Spec2('HTML4.01')}}     | Pris en charge par l'ensemble des éléments sauf {{HTMLElement("base")}}, {{HTMLElement("basefont")}}, {{HTMLElement("head")}}, {{HTMLElement("html")}}, {{HTMLElement("meta")}}, {{HTMLElement("param")}}, {{HTMLElement("script")}} et {{HTMLElement("title")}}. |

## Compatibilité des navigateurs

{{Compat("html.global_attributes.title")}}

## Voir aussi

- [Les différents attributs universels](/fr/docs/Web/HTML/Attributs_universels)
- {{domxref("HTMLElement.title")}} that reflects this attribute.
