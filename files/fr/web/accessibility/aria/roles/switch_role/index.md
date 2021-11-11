---
title: Utilisation du groupe switch
slug: Web/Accessibility/ARIA/Roles/Switch_role
tags:
  - ARIA
  - Accessibility
  - NeedsContent
  - Rôle
translation_of: Web/Accessibility/ARIA/Roles/Switch_role
original_slug: Accessibilité/ARIA/Techniques_ARIA/Utilisation_du_groupe_switch
---
<p>Le rôle ARIA switch est très similaire au <a href="/fr/docs/Accessibilit%C3%A9/ARIA/Techniques_ARIA/Utiliser_le_role_checkbox">role checkbox</a>, à la sémantique près — il a deux états représentant on/off, au lieu de checked/unchecked.</p>

<p>Extrait des <a href="http://rawgit.com/w3c/aria/master/aria/aria.html#switch">spec ARIA 1.1 </a>: l'attribut <code>aria-checked</code> d'un <code>switch</code> indique si l'entrée est on (<code>true</code>) ou off (<code>false</code>). La valeur <code>mixed</code> n'est pas supportée, et les agents utilisateurs <em>DOIVENT</em> la traiter comme équivalente à <code>false</code> pour ce rôle.</p>
