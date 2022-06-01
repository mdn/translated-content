---
title: style
slug: Web/HTML/Global_attributes/style
tags:
  - Attribut
  - Attribut universel
  - HTML
  - Reference
translation_of: Web/HTML/Global_attributes/style
original_slug: Web/HTML/Attributs_universels/style
---
{{HTMLSidebar("Global_attributes")}}

L'[attribut universel](/fr/docs/Web/HTML/Attributs_universels) **`style`** contient des déclarations [CSS](/fr/docs/Web/CSS) afin de mettre en forme l'élément. Attention, il est recommandé de définir les règles de mise en forme dans un ou plusieurs fichiers séparés. Cet attribut, ainsi que l'élément {{HTMLElement("style")}} ont simplement pour but de permettre une mise en forme rapide, notamment pour tester.

{{EmbedInteractiveExample("pages/tabbed/attribute-style.html","tabbed-shorter")}}

> **Note :** Cet attribut ne doit pas être utilisé à des fins sémantiques. En effet, si toute mise en forme est retirée, toute page doit rester correcte d'un point de vue sémantique. On ne devrait pas, notamment, utiliser cet attribut afin de cacher des informations qui ne seraient pas pertinentes (cela devrait être réalisé avec l'attribut {{htmlattrxref("hidden")}}.

## Exemples

### HTML

```html
<p style="color: rgb(255, 0, 0)">
  Cette méthode n'est pas vraiment recommandée
</p>

<p class="toto">
  Alors que ça, c'est mieux.
</p>
```

### CSS

```css
.toto {
  color: rgb(0, 255, 0);
}
```

### Résultat

{{EmbedLiveSample("Exemples","300","300")}}

## Spécifications

| Spécification                                                                                | État                             | Commentaires                                                                                                                                                                                                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', "dom.html#the-style-attribute", "style")}} | {{Spec2('HTML WHATWG')}} | Aucune modification depuis la dernière dérivation de {{SpecName('HTML5.1')}}                                                                                                                                                                                                                                                                                                           |
| {{SpecName('HTML5.1', "dom.html#the-style-attribute", "style")}}         | {{Spec2('HTML5.1')}}     | Dérivée de {{SpecName('HTML WHATWG')}}, aucune modification depuis {{SpecName('HTML5 W3C')}}                                                                                                                                                                                                                                                                                    |
| {{SpecName('HTML5 W3C', "dom.html#the-style-attribute", "style")}}     | {{Spec2('HTML5 W3C')}}     | Dérivée de {{SpecName('HTML WHATWG')}}. Depuis {{SpecName("HTML4.01")}}, cet attribut est désormais un attribut universel.                                                                                                                                                                                                                                                     |
| {{SpecName('HTML4.01', 'present/styles.html#h-14.2.2', 'style')}}     | {{Spec2('HTML4.01')}}     | Cet attribut est pris en charge par tous les éléments à l'exception de {{HTMLElement("base")}}, {{HTMLElement("basefont")}}, {{HTMLElement("head")}}, {{HTMLElement("html")}}, {{HTMLElement("meta")}}, {{HTMLElement("param")}}, {{HTMLElement("script")}}, {{HTMLElement("style")}}, et {{HTMLElement("title")}}. |
| {{SpecName("CSS3 Style", "", "")}}                                                 | {{Spec2("CSS3 Style")}} | Définition du contenu pour l'attribut `style`.                                                                                                                                                                                                                                                                                                                                                  |

## Compatibilité des navigateurs

{{Compat("html.global_attributes.style")}}

## Voir aussi

- [Les différents attributs universels](/fr/docs/Web/HTML/Attributs_universels)
