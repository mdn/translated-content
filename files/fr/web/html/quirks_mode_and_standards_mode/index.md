---
title: Mode quirks et mode standard
slug: Web/HTML/Quirks_Mode_and_Standards_Mode
tags:
  - Gecko
  - Guide
  - HTML
  - Web Development
  - Web Standards
  - XHTML
translation_of: Web/HTML/Quirks_Mode_and_Standards_Mode
---
{{HTMLRef}}

Par le passé, les pages web étaient souvent écrites sous deux versions : une destinée à Netscape Navigator et l'autre à Microsoft Internet Explorer. Lorsque les standards du Web sont apparus avec le W3C, les navigateurs ne pouvaient pas simplement commencer à les utiliser car leur mise en place rendrait inutilisable la plupart des sites web existant. Les navigateurs ont alors introduit deux modes afin de traiter les sites respectants les standards des autres sites historiques.

Il existe aujourd'hui trois modes utilisés par les moteurs de rendu des navigateurs web : le mode _quirks_, le mode quasi-standard et le mode standard total. En **mode _quirks_**, le moteur de mise en page émule le comportement non-standard de Navigator 4 et d'Internet Explorer 5. Ce mode permet de prendre en charge les sites web rédigés avant l'adoption généralisée des standards web. En **mode standard total**, le comportement du navigateur est entièrement (aux bugs près) celui décrit par les spécifications HTML et CSS. En **mode quasi-standard**, très peu de déviations sont implémentées.

## Comment les navigateurs déterminent le mode à utiliser ?

Pour les documents [HTML](/fr/docs/Web/HTML), les navigateurs utilisent le `DOCTYPE` présent au début du document afin de déterminer si celui-ci doit être géré avec le mode _quirks_ ou avec l'un des modes standards. Si vous souhaitez qu'une page utilise le mode standard total, son DOCTYPE devra correspondre à celui utilisé dans cet exemple :

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset=UTF-8>
    <title>Bonjour tout le monde !</title>
  </head>
  <body>
  </body>
</html>
```

Le DOCTYPE illustré dans cet exemple, `<!DOCTYPE html>`, est le plus simple possible et correspond à la recommandation HTML5. Les versions précédentes des standards HTML recommandaient d'autres variantes. Toutefois, l'ensemble des navigateurs actuels utiliseront le mode standard total avec ce DOCTYPE (y compris IE6). Il n'est pas justifié de choisir un DOCTYPE plus compliqué ; le faire risquerait de déclencher l'utilisation du mode quasi-standard ou du mode _quirks_.

Assurez-vous que le DOCTYPE soit présent au tout début du document HTML. Tout ce qui précède le DOCTYPE (un commentaire ou une déclaration XML) déclenchera le mode _quirks_ pour Internet Explorer 9 et les versions antérieures.

En HTML5, le seul but du DOCTYPE est d'activer le mode standard total. Les anciennes versions du standard HTML donnaient une sémantique plus riche au DOCTYPE mais aucun navigateur n'a utilisé le DOCTYPE pour autre chose que pour choisir entre le mode _quirks_ et l'un des modes standards.

Vous pouvez également consulter [cet article avec plus de détails sur la façon dont les navigateurs choisissent entre les différents modes](https://hsivonen.iki.fi/doctype/).

### XHTML

Si la page est servie comme [XHTML](/fr/docs/Glossary/XHTML) avec le type MIME `application/xhtml+xml` dans l'en-tête HTTP `Content-Type`, il n'est pas nécessaire d'utiliser de DOCTYPE afin d'activer le mode standard, car de tels documents utiliseront toujours le mode standard total. On notera toutefois que servir les pages avec un type `application/xhtml+xml` entraînera l'affichage [d'une boîte de téléchargement](/fr/docs/Glossary/XHTML#support) d'un fichier au format inconnu sous Internet Explorer 8 car IE9 est la première version d'Internet Explorer à prendre en charge XHTML.

Si on sert un contenu semblable à du XHTML mais avec le type MIME `text/html`, le navigateur l'interprètera comme du HTML et il faudra alors ajouter le DOCTYPE afin d'utiliser un mode standard.

## Comment connaître le mode utilisé ?

Sous Firefox, vous pouvez utiliser le menu contextuel : "Informations sur la page" et le champ "Mode de rendu" de l'onglet Général..

Sous Internet Explorer, appuyez sur la touche _F12_ et utilisez le champ _Document Mode_.
