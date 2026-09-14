---
title: Comprendre les modes quirks et standards
short-title: Modes quirks et standards
slug: Web/HTML/Guides/Quirks_mode_and_standards_mode
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

À l'époque, les pages web étaient généralement écrites en deux versions&nbsp;: une pour Netscape Navigator et une pour Microsoft Internet Explorer. Lorsque les standards du web ont été créés au W3C, les navigateurs ne pouvaient pas simplement commencer à les utiliser, car cela aurait cassé la plupart des sites existants sur le web. Les navigateurs ont donc introduit deux modes pour traiter différemment les nouveaux sites conformes aux standards et les anciens sites hérités.

Il existe désormais trois modes utilisés par les moteurs de rendu des navigateurs web&nbsp;: le mode quirks, le mode quasi-quirks et le mode standard. En **mode quirks**, la mise en page émule le comportement de Navigator 4 et Internet Explorer 5. Cela est essentiel pour prendre en charge les sites web créés avant l'adoption généralisée des standards du web. En **mode standard**, le comportement est (espérons-le) celui décrit par les spécifications HTML et CSS modernes. En **mode quasi-quirks**, il n'y a qu'un très petit nombre de particularités implémentées.

Les modes quasi-quirks et standard étaient auparavant appelés respectivement «&nbsp;mode presque standard&nbsp;» et «&nbsp;mode totalement standard&nbsp;». Ces noms ont été modifiés car le comportement est désormais standardisé.

## Comment les navigateurs déterminent le mode à utiliser ?

Pour les documents [HTML](/fr/docs/Web/HTML), les navigateurs utilisent le `DOCTYPE` présent au début du document afin de déterminer si celui-ci doit être géré avec le mode _quirks_ ou avec l'un des modes standards. Si vous souhaitez qu'une page utilise le mode standard total, son DOCTYPE devra correspondre à celui utilisé dans cet exemple&nbsp;:

```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Bonjour tout le monde !</title>
  </head>
  <body></body>
</html>
```

Le DOCTYPE illustré dans cet exemple, `<!doctype html>`, est le plus simple possible et correspond à la recommandation des standards HTML actuels. Les versions précédentes des standards HTML recommandaient d'autres variantes, mais tous les navigateurs existants aujourd'hui utiliseront le mode standard total avec ce DOCTYPE. Il n'y a aucune raison valable d'utiliser un DOCTYPE plus compliqué. Le faire risquerait de déclencher le mode quasi-quirks ou le mode quirks.

Placez le DOCTYPE tout au début de votre document HTML, avant tout autre contenu.

Le seul but de `<!doctype html>` est d'activer le mode standard total. Les anciennes versions des DOCTYPE des standards HTML apportaient une signification supplémentaire, mais aucun navigateur ne l'a jamais utilisé pour autre chose que pour choisir entre les modes de rendu.

Vous pouvez également consulter [cet article avec plus de détails sur la façon dont les navigateurs choisissent entre les différents modes <sup>(angl.)</sup>](https://hsivonen.fi/doctype/).

### XHTML

Si vous servez votre page comme {{Glossary("XHTML")}} en utilisant le type MIME `application/xhtml+xml` dans l'en-tête HTTP `Content-Type`, il n'est pas nécessaire d'utiliser de DOCTYPE pour activer le mode standard total, car de tels documents utilisent toujours le mode standard total.

Si vous servez un contenu de type XHTML avec le type MIME `text/html`, les navigateurs l'interpréteront comme du HTML et il faudra alors ajouter le DOCTYPE pour utiliser le mode standard total.

## Comment connaître le mode utilisé ?

Si la page est rendue en mode quirks ou quasi-quirks, Firefox affichera un avertissement dans l'onglet console des outils de développement. Si cet avertissement n'est pas affiché, Firefox utilise le mode standard total.

La valeur de `document.compatMode` en JavaScript indique si le document est en mode quirks. Si sa valeur est `"BackCompat"`, le document est en mode quirks. Sinon, la valeur sera `"CSS1Compat"`.
