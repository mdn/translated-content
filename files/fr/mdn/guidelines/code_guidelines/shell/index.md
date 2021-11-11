---
title: Lignes directrices des exemples de lignes de commande
slug: MDN/Guidelines/Code_guidelines/Shell
tags:
  - Code
  - Guide
  - Guidelines
  - MDN Meta
  - Shell
translation_of: MDN/Guidelines/Code_guidelines/Shell
---
<div>{{MDNSidebar}}</div>

<p>Les directives suivantes expliquent comment rédiger des exemples de lignes de commande sur MDN.</p>

<h2 id="Shell_prompts_in_brief">Les commandes Shell en bref</h2>

<p>Un <i>shell</i> est un programme qui attend que vous tapiez une commande et que vous appuyiez sur la touche retour. Pour indiquer les commandes que vous devez taper, la documentation MDN les répertorie dans un bloc de code, similaire aux exemples de code. Un tel bloc ressemble à ceci :</p>

<pre class="brush: bash example-good"># Cela peut prendre un certain temps…
hg clone https://hg.mozilla.org/mozilla-central/ firefox
cd firefox</pre>

<h2 id="Guidelines">Directives</h2>

<p>Il existe quelques directives à suivre lors de l'écriture d'un bloc de code shell :</p>

<ul>
 <li>N'incluez pas de "$" ou de "&gt;" au début d'une instruction shell. Cela perturbe plus qu'il n'aide et n'est pas utile pour copier les instructions.</li>
 <li>Les commentaires commencent par "#".</li>
 <li>Choisissez la coloration syntaxique "bash".</li>
</ul>

<h2 id="Good_shell_prompt_examples_on_MDN">De bons exemples de commandes shell sur le MDN</h2>

<p>Nos <a href="/fr/docs/Learn/Server-side/Django">Documents de développement côté serveur de Django</a> montrent une bonne pratique de présentation des commandes de l'invite shell, etc. sur le MDN. Regardez <a href="/fr/docs/Learn/Server-side/Django/development_environment">Configurer un environnement de développement Django</a> par exemple.</p>

