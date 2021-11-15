---
title: Optimisation des pages pour l'analyse spéculative
slug: Glossary/speculative_parsing
tags:
  - Avancé
  - Cookies
  - Développement Web
  - HTML
  - HTML5
  - NeedsUpdate
translation_of: Glossary/speculative_parsing
original_slug: Web/HTML/Optimizing_your_pages_for_speculative_parsing
---
<p>Traditionnellement dans les navigateurs, l'analyseur HTML a été exécuté sur le fil principal et a été bloqué après une balise <code>&lt;/script&gt;</code> jusqu'à ce que le script ait été extrait du réseau et exécuté. L'analyseur HTML dans Firefox 4 et versions ultérieures prend en charge l'analyse spéculative sur le fil principal. Il analyse "en avant" pendant que les scripts sont téléchargés et exécutés. Comme dans Firefox 3.5 et 3.6, l'analyseur HTML lance des chargements spéculatifs pour les scripts, les feuilles de style et les images qu'il trouve à l'avance dans le flux. Toutefois, dans Firefox 4 et versions ultérieures, l'analyseur HTML exécute également l'algorithme de construction de l'arborescence HTML de manière spéculative. L'avantage est que lorsqu'une spéculation réussit, il n'est pas nécessaire d'analyser la partie du fichier entrant qui a déjà été analysée pour les scripts, les feuilles de style et les images. L'inconvénient est qu'il y a plus de travail perdu quand la spéculation échoue.<br>
 <br>
 Ce document vous aide à éviter le genre de choses qui font échouer la spéculation et ralentir le chargement de votre page.</p>

<h2 id="Réussir_les_chargements_spéculatifs">Réussir les chargements spéculatifs</h2>

<p>Il n'y a qu'une seule règle pour réussir les chargements spéculatifs de scripts liés, de feuilles de style et d'images :</p>

<ul>
 <li>Si vous utilisez un élément <code>&lt;base&gt;</code> pour remplacer l'URI de base de votre page, placez l'élément dans la partie non-scriptée du document. Ne l'ajoutez pas par <code>document.write()</code> ou <code>document.createElement()</code>.</li>
</ul>

<h2 id="Éviter_de_perdre_la_sortie_du_constructeur_d'arborescence">Éviter de perdre la sortie du constructeur d'arborescence</h2>

<p>L'analyse spéculative du constructeur d'arborescence échoue quand <code>document.write()</code> change l'état du constructeur d'arborescence, au point que l'état spéculatif après la balise <code>&lt;/script&gt;</code> ne tient plus lorsque tout le contenu inséré par <code>document.write()</code> a été analysé. Cependant, seules les utilisations inhabituelles de <code>document.write()</code> entraînent ce genre de problèmes. Ici, les choses à éviter :</p>

<ul>
 <li>n'écrivez pas d'arborescences déséquilibrées. <code>&lt;script&gt;document.write("&lt;div&gt;");&lt;/script&gt;</code> est mauvais. <code>&lt;script&gt;document.write("&lt;div&gt;&lt;/div&gt;");&lt;/script&gt;</code> est valide.</li>
 <li>n'écrivez pas de balisage infini. <code>&lt;script&gt;document.write("&lt;div&gt;&lt;/div");&lt;/script&gt;</code> est mauvais.</li>
 <li>ne terminez pas votre écriture avec un retour chariot . <code>&lt;script&gt;document.write("Hello World!\r");&lt;/script&gt;</code> est mauvais. <code>&lt;script&gt;document.write("Hello World!\n");&lt;/script&gt;</code> est valide.</li>
 <li>notez que l'écriture de balises équilibrées peut entraîner la déduction d'autres balises de telle manière que l'écriture est finalement déséquilibrée. Par exemple, <code>&lt;script&gt;document.write("&lt;div&gt;&lt;/div&gt;");&lt;/script&gt;</code> à l'intérieur de l'élément d'en-tête sera interprété comme <code>&lt;script&gt;document.write("&lt;/head&gt;&lt;body&gt;&lt;div&gt;&lt;/div&gt;");&lt;/script&gt;</code> qui est déséquilibré.</li>
 <li>ne pas formater une partie de tableau. <code>&lt;table&gt;&lt;script&gt;document.write("&lt;tr&gt;&lt;td&gt;Hello World!&lt;/td&gt;&lt;/tr&gt;");&lt;/script&gt;&lt;/table&gt;</code> est mauvais. Par contre, <code>&lt;script&gt;document.write("</code><code>&lt;table&gt;</code><code>&lt;tr&gt;&lt;td&gt;Hello World!&lt;/td&gt;&lt;/tr&gt;</code><code>&lt;/table&gt;</code><code>");&lt;/script&gt;</code> est valide.</li>
 <li>À FAIRE : document.write inclus dans d'autres éléments de formatage.</li>
</ul>
