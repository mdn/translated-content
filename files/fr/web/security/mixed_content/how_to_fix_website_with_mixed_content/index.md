---
title: Comment corriger un site avec du contenu mixte bloqué
slug: Web/Security/Mixed_content/How_to_fix_website_with_mixed_content
---

À partir de [Firefox 23](/fr/docs/Mozilla/Firefox/Releases/23), Firefox bloque [le contenu mixte actif](/fr/docs/Security/Mixed_content#contenu_mixte_actif) par défaut. Cela suit une pratique adoptée par Internet Explorer (depuis IE 9) et [Chrome](https://security.googleblog.com/2011/06/trying-to-end-mixed-scripting.html?m=1).

Cette page explique les sujets à connaître à ce sujet pour le développement web.

## Votre site peut être cassé avec du contenu mixte

Si les pages de votre site web sont servies avec HTTPS, [tout le contenu mixte actif](/fr/docs/Security/Mixed_content#contenu_mixte_actif) servi avec HTTP sur ces pages sera bloqué par défaut. Par conséquent, votre site web pourra apparaître comme cassé pour les personnes le visitant (les <i lang="en">iframes</i> pouvant ne pas charger par exemple). [Le contenu mixte passif](/fr/docs/Security/Mixed_content#contenu_mixte_passif_daffichage) est affiché par défaut, mais les personnes peuvent paramétrer leur navigateur pour également bloquer ce type de contenu.

On notera que le blocage d'un tel contenu mixte se produit pour Chrome. Aussi, si votre site web fonctionne en HTTPS pour ce navigateur, il fonctionnera également pour Firefox pour les aspects de blocage de contenu mixte.

Pour détecter de tels problèmes, vous pouvez utiliser un outil en ligne comme [SSL-check](https://www.jitbit.com/sslcheck/), [Missing Padlock](https://www.missingpadlock.com), ou un logiciel comme [HTTPSChecker](https://httpschecker.net/how-it-works), voire un outil en ligne de commande comme [mcdetect](https://github.com/agis/mcdetect). S'il n'y a aucune alerte, votre site web devrait être correct de ce point de vue là&nbsp;!

## Comment réparer votre site web

La meilleure stratégie pour éviter le blocage du contenu mixte est de servir l'intégralité du contenu avec HTTPS plutôt qu'avec HTTP.

**Pour votre propre domaine,** servez l'ensemble du contenu en HTTPS et corrigez les liens. Il arrive souvent que la version HTTPS du contenu existe déjà et il est alors uniquement nécessaire d'ajouter un «&nbsp;s&nbsp;» aux liens&nbsp;: passer de `http://` à `https://`.

Toutefois, dans certains cas, le chemin vers le média en question peut être incorrect. Des outils en ligne ou hors lignes existent (par exemple [linkchecker](https://linkchecker.github.io/linkchecker/) pour vous aider à résoudre ces liens.

**Pour les autres domaines,** utilisez la version HTTPS du site si elle est disponible. Si la version HTTPS n'est pas disponible, vous pouvez contacter le domaine et leur demander s'ils peuvent rendre le contenu disponible via HTTPS.

{{QuickLinksWithSubpages("/fr/docs/Web/Security")}}
