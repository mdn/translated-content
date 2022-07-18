---
title: '<noframes> : l''élément alternatif aux frames (obsolete)'
slug: Web/HTML/Element/noframes
tags:
  - Element
  - HTML
  - Obsolete
  - Reference
  - Web
translation_of: Web/HTML/Element/noframes
---
{{HTMLRef}}{{deprecated_header}}

L'élément HTML obsolète **`<noframes>`** est utilisé par les navigateurs qui ne supportent pas les éléments {{HTMLElement("frame")}}, ou qui sont configurés afin de ne pas les supporter.

`<noframes>` accepte n'importe quel élément HTML valide dans un élément {{HTMLElement("body")}}, à l'exception des éléments {{HTMLElement("frameset")}} et {{HTMLElement("frame")}}.

Cet élément pouvait être utilisé afin d'afficher un message explicatif, destiné à l'utilisateur. Idéalement, le contenu devait présenter des fonctionnalités analogues à la _frame_ qui n'était pas prise en charge.

> **Note :** Cet élément est aussi entièrement obsolète en HTML5, et doit être evité pour se conformer au standard.

## Attributs

Comme tous les autres éléments HTML, cet élément inclut [les attributs universels](/fr/docs/Web/HTML/Attributs_universels).

## Exemples

### HTML

```html
<frameset cols="50%,50%">
  <frame src="https://developer.mozilla.org/fr/docs/Web/HTML/Element/frameset"/>
  <frame src="https://developer.mozilla.org/fr/docs/Web/HTML/Element/frame"/>
  <noframes>
    <p>
      Il semblerait que votre navigateur ne supporte pas les frames,
      ou qu'il est configuré pour ne pas les autoriser.
    </p>
  </noframes>
</frameset>
```

### Résultat

{{EmbedLiveSample("Exemples","100%","100%")}}

## Spécifications

| Spécification                                                                                    | État                         | Commentaires |
| ------------------------------------------------------------------------------------------------ | ---------------------------- | ------------ |
| {{SpecName('HTML5 W3C', '#noframes', 'noframes')}}                             | {{Spec2('HTML5 W3C')}} |              |
| {{SpecName('HTML4.01', 'frames.html#edef-NOFRAMES', '&lt;noframes&gt;')}} | {{Spec2('HTML4.01')}} |              |

## Compatibilité des navigateurs

{{Compat("html.elements.noframes")}}

## Voir aussi

- {{HTMLElement("frameset")}}
- {{HTMLElement("frame")}}
