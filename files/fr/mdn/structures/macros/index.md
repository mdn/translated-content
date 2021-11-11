---
title: Macros
slug: MDN/Structures/Macros
translation_of: MDN/Structures/Macros
---
<div>{{MDNSidebar}}</div>
<p>La plate-forme <a href="/fr/docs/projet:MDN/Kuma" title="/fr/docs/projet:MDN/Kuma">Kuma</a> sur laquelle MDN travail, fournit un système de macro, <a href="/docs/fr/projet:MDN/Kuma/KumaScript_guide" title="/docs/fr/projet: MDN/Kuma/KumaScript_guide">KumaScript</a>, ce qui permet de faire une grande variété de choses automatiquement. Cet article fournit des informations sur la façon d'invoquer les macros MDN dans les articles.</p>

<p>Le <a href="/docs/fr/projet:MDN/Kuma/KumaScript_guide" title="/fr/docs/projet:MDN/Kuma/KumaScript_guide ">Guide KumaScript</a> offre un regard en profondeur sur la façon d'utiliser des macros MDN, cette section est plus qu'un bref aperçu. Si vous avez déjà lu la section ci-dessus sur {{SectionOnPage ("/docs/fr/projet:MDN/Contribuer/Editor_guide/Links", "Utiliser les liens macros")}}, vous êtes un peu familiers avec le concept.</p>

<h2 id="Comment_les_macros_sont-elle_mises_en_œuvre">Comment les macros sont-elle mises en œuvre</h2>

<p>Macros sur MDN sont mis en œuvre en utilisant le serveur exécuté <a href="/fr/docs/Web/JavaScript">JavaScript</a> code, interprété à l'aide de Node.js. En plus de cela, nous avons un certain nombre de bibliothèques, que nous avons mis en place pour fournir des services et des fonctionnalités orientées wiki, les macros interagissent avec la plate-forme wiki et avec son contenu. Si vous voulez en apprendre davantage, consultez le <a href="/docs/fr/projet:MDN/Kuma/KumaScript_guide">guide KumaScript</a>; le <a href="/docs/fr/projet:MDN/Kuma/KumaScript_reference">KumaScript reference</a> fournit des détails sur les bibliothèques et autres API KumaScript que nous avons mis en œuvre.</p>

<h2 id="Utiliser_une_macro_dans_le_contenu">Utiliser une macro dans le contenu</h2>

<p>Pour réellement utiliser une macro, vous placez simplement l'appel à la macro dans une paire de doubles acolades, avec ses paramètres, le cas échéant, entre parenthèses:</p>

<pre>\{{macroname(parameter-list)}}</pre>

<p>Quelques notes sur les appels de macro:</p>

<ul>
 <li>Les noms de macros sont sensibles à la casse, mais une tentative est faite pour corriger ces erreurs communes; vous pouvez utiliser tout en minuscules, même si le nom de la macro utilise des majuscules en son sein, et vous pouvez débuter par une majuscule une macro dont le nom commence normalement par une lettre minuscule.</li>
 <li>Les paramètres sont séparés par des virgules.</li>
 <li>Si il n'y a pas de paramètres, vous pouvez laisser les parenthèses ou les enlever; <code>\{{macroname()}} </code> et <code>\{{macroname}}</code> sont identiques.</li>
 <li>Les paramètres numériques peuvent être entre guillemets, ou non (cependant, si vous avez un numéro de version avec plusieurs décimales, il doit être entre guillemets).</li>
 <li>Si vous obtenez des erreurs, consultez votre code attentivement. Si vous ne pouvez toujours pas à comprendre ce qui se passe, voir <a href="/fr/docs/MDN/Kuma/Troubleshooting_KumaScript_errors">Dépannage des erreurs KumaScript</a>.</li>
</ul>

<p>Les macros sont mis en cache; pour tout ensemble de valeurs d'entrée (les paramètres et les valeurs environnementales telles que l'URL pour laquelle la macro a été exécutée), les résultats sont stockés et réutilisés. Cela signifie que la macro est que effectivement parcourue que lorsque les entrées changent.</p>

<div class="note">
<p><strong>Note :</strong> Vous pouvez forcer toutes les macros d'une page à être réévalué avec un shift-reload.</p>
</div>

<p>Les macros peuvent être aussi simple que d'insérer un plus grand bloc de texte ou d'échange dans le contenu d'une autre partie du MDN, ou aussi complexe que la construction de tout un index du contenu en cherchant dans des parties du site, coiffer la sortie, et en ajoutant des liens.</p>

<p>Vous pouvez lire sur nos macros les plus couramment utilisés sur le <a href="/fr/docs/MDN/Contribute/Structures/Macros/Commonly-used_macros">couramment utilisés</a>; aussi, il y a un <a href="https://developer.mozilla.org/fr/docs/templates">la liste complète de toutes les macros</a> ici. La plupart des macros ont intégré dans la documentation eux, comme des commentaires en haut.</p>

<p>{{EditorGuideQuicklinks}}</p>
