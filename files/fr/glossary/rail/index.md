---
title: RAIL
slug: Glossary/RAIL
tags:
  - Glossaire
  - Performance Web
  - RAIL
  - Timings
translation_of: Glossary/RAIL
original_slug: Glossaire/RAIL
---
<p><strong>RAIL</strong>, acronyme de <strong>Response, Animation, Idle, et Load</strong>, est un modèle de performance créé par l'équipe Google Chrome en 2015, axé sur l'expérience utilisateur et les performances dans le navigateur. Le mantra de performance de RAIL est "Concentrez-vous sur l'utilisateur; l'objectif final n'est pas de rendre votre site performant sur un appareil spécifique, c'est de rendre les utilisateurs heureux." Il y a 4 étapes d'interaction: chargement de la page, inactivité, réponse à l'entrée, et défilement et animation. Dans l'ordre des acronymes, les principaux principes sont:</p>

<dl>
 <dt><strong>Response</strong></dt>
 <dd>Répondez immédiatement aux utilisateurs, en reconnaissant toute entrée utilisateur en <strong>100ms</strong> ou moins.</dd>
 <dt><strong>Animation</strong></dt>
 <dd>Lors de l'animation, effectuez le rendu de chaque image en moins de <strong>16ms</strong>, dans un souci de cohérence et en évitant les secousses.</dd>
 <dt><strong>Idle</strong></dt>
 <dd>Lorsque vous utilisez le thread JavaScript principal, travaillez par blocs pendant moins de <strong>50ms</strong> pour libérer le thread pour les interactions de l'utilisateur.</dd>
 <dt><strong>Load</strong></dt>
 <dd>Diffusez du contenu interactif en moins d' <strong>1 seconde</strong>.</dd>
</dl>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Learn/Performance/How_long_is_too_long">Timings de performance Web recommandés: combien de temps est trop long</a></li>
</ul>
