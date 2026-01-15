---
title: "<noframes> : l'élément de repli des cadres"
slug: Web/HTML/Reference/Elements/noframes
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

{{Deprecated_Header}}

L'élément [HTML](/fr/docs/Web/HTML) **`<noframes>`** fournit un contenu à présenter dans les navigateurs qui ne supportent pas (ou ont désactivé le support de) l'élément {{HTMLElement("frame")}}. Bien que la plupart des navigateurs courants prennent en charge les cadres, il existe des exceptions, notamment certains navigateurs spécialisés comme certains navigateurs mobiles, ainsi que des navigateurs en mode texte.

Un élément `<noframes>` peut contenir n'importe quel élément HTML autorisé dans le corps d'un document HTML, à l'exception des éléments {{HTMLElement("frameset")}} et {{HTMLElement("frame")}}, car utiliser des cadres quand ils ne sont pas supportés n'a pas de sens.

`<noframes>` peut être utilisé pour présenter un message expliquant que le navigateur de l'utilisateur·ice ne supporte pas les cadres, mais il devrait idéalement être utilisé pour présenter une version alternative du site qui n'utilise pas de cadres tout en offrant les mêmes fonctionnalités ou des fonctionnalités similaires.

> [!NOTE]
> Cet élément est obsolète et ne doit pas être utilisé, puisque les éléments {{HTMLElement("frame")}} et {{HTMLElement("frameset")}} sont également obsolètes. Lorsque des cadres sont nécessaires, elles doivent être présentées à l'aide de l'élément {{HTMLElement("iframe")}}.

## Attributs

Cet élément inclut uniquement les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

## Exemples

Dans cet exemple, on voit un ensemble de cadre avec deux cadres. De plus, `<noframes>` est utilisé pour présenter un message explicatif si {{Glossary("user agent", "l'agent utilisateur")}} ne supporte pas les cadres.

```html
<!doctype html>
<html lang="fr">
  <head>
    <!-- Les métadonnées du document vont ici -->
  </head>
  <frameset rows="45%, 55%">
    <frame
      src="https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/frameset" />
    <frame
      src="https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/frame" />
    <noframes>
      <p>
        Il semblerait que votre navigateur ne supporte pas les frames, ou qu'il
        est configuré pour ne pas les autoriser.
      </p>
    </noframes>
  </frameset>
</html>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément {{HTMLElement("frameset")}}
- L'élément {{HTMLElement("frame")}}
