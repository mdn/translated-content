---
title: Budgets de performance
slug: Web/Performance/Performance_budgets
tags:
  - Budget
  - Budget Performance
  - Performance
  - Performance Web
translation_of: Web/Performance/Performance_budgets
original_slug: Web/Performance/Budgets_de_performance
---
<p>{{draft}}</p>

<p>Un budget de performance est une limite pour éviter les régressions. Il peut s'appliquer à un fichier, un type de fichier, tous les fichiers chargés sur une page, une métrique spécifique (par exemple, <a href="/fr/docs/Glossaire/Time_to_interactive">Time to Interactive</a>), une métrique personnalisée (par exemple, Time to Hero Element), ou un seuil sur une période de temps.</p>

<h2 id="Pourquoi_ai-je_besoin_dun_budget_de_performance">Pourquoi ai-je besoin d'un budget de performance?</h2>

<p>Un budget existe pour refléter vos objectifs atteignables. C'est un compromis entre l'expérience utilisateur et d'autres indicateurs de performance (par exemple, le taux de conversion).<br>
 <br>
 Ces objectifs peuvent être:</p>

<ul>
 <li>Basé sur le timing (par exemple, <a href="/fr/docs/Glossaire/Time_to_interactive">Time to Interactive</a>, <a href="/fr/docs/Glossaire/First_contentful_paint">First Contentful Paint</a>).</li>
 <li>Basé sur la quantité (par exemple, quantité de fichiers JS / taille totale de l'image).</li>
 <li>Basé sur des règles (par exemple, Pagespeed index, Lighthouse score).</li>
</ul>

<p>Leur objectif principal est d'éviter les régressions, mais ils peuvent fournir des informations sur les tendances prévisionnelles (c'est-à-dire qu'en septembre, 50% du budget a été dépensé en une semaine).</p>

<p>De plus, il peut découvrir les besoins de développement (c'est-à-dire qu'une grande bibliothèque avec des alternatives plus petites est souvant choisie pour résoudre un problème courant).</p>

<h2 id="Comment_définir_un_budget_de_performance">Comment définir un budget de performance ?</h2>

<p>Un budget doit comprendre 2 niveaux:</p>

<ul>
 <li>Attention.</li>
 <li>Erreur.</li>
</ul>

<p>Le niveau d'avertissement vous permet d'être proactif et de planifier toute dette technologique, sans bloquer le développement ou les déploiements.</p>

<p>Le niveau d'erreur est une limite supérieure, où les changements auront un impact négatif et notable.</p>

<p>Pour commencer, vous devez d'abord mesurer les appareils et les vitesses de connexion d'où viennent vos utilisateurs (par exemple, un appareil Android à ~200$ via une connexion 3G), à l'aide de plusieurs <a href="/fr/docs/Learn/Performance/Web_Performance_Basics">outils</a>. Ces mesures basées sur le temps se traduiront par des budgets de taille de fichier.</p>

<p>Une base de référence par défaut pour réduire le taux de rebond est d'atteindre un <a href="https://infrequently.org/2017/10/can-you-afford-it-real-world-web-performance-budgets/">Time to Interactive inférieur à 5 secondes en 3G/4G, et inférieur à 2 secondes pour les charges suivantes</a>. Cependant, en fonction des objectifs et du contenu spécifiques de votre site, vous pouvez choisir de vous concentrer sur d'autres mesures.</p>

<p>Pour un site contenant beaucoup de texte, tel qu'un blog ou un site d'actualités, la métrique <a href="/fr/docs/Glossaire/First_contentful_paint">First Contentful Paint</a> pourrait refléter plus étroitement le comportement de l'utilisateur. (c'est-à-dire à quelle vitesse les utilisateurs peuvent-ils commencer à lire), ce qui informera les budgets spécifiques aux fichiers (par exemple, la taille de la police), et leurs optimisations. (par exemple, utiliser l'<a href="/fr/docs/Web/CSS/@font-face/font-display">affichage des polices</a> pour améliorer les <a href="/fr/docs/Learn/Performance/perceived_performance">performances perçues</a>).</p>

<p>La valeur ultime d'un budget de performance est de corréler l'impact de la performance sur les objectifs commerciaux ou produits. Lors de la définition des mesures, vous devez vous concentrer sur l'<a href="https://extensionworkshop.com/documentation/develop/user-experience-best-practices/">expérience utilisateur</a>, qui dictera non seulement le taux de rebond ou de conversion, mais aussi la probabilité de retour de l'utilisateur.</p>

<h2 id="Comment_mettre_en_œuvre_un_budget_de_performance">Comment mettre en œuvre un budget de performance?</h2>

<p>Pendant le développement, il existe quelques outils pour effectuer des vérifications sur les actifs nouveaux ou modifiés:</p>

<ul>
 <li>Un bundler de modules (par exemple, <a href="https://webpack.js.org/">webpack</a>), possède des <a href="https://webpack.js.org/configuration/performance/">fonctionnalités de performance</a> qui vous avertiront lorsque les actifs dépassent les limites spécifiées.</li>
 <li><a href="https://github.com/siddharthkp/bundlesize">Bundlesize</a>, vous permet de définir et d'exécuter des contrôles de taille de fichier dans votre pipeline <a href="/fr/docs/Mozilla/Continuous_integration">CI</a>.</li>
</ul>

<p>Les vérifications de la taille des fichiers sont la première ligne de défense contre les régressions, mais la conversion de la taille en mesures temporelles peut être difficile car les environnements de développement peuvent manquer de scripts tiers et d'optimisations généralement fournies par un <a href="/fr/docs/Glossaire/CDN">CDN</a>.</p>

<p>La première étape consiste à définir une base de développement pour chaque branche à comparer et la précision de la différence entre le développement et la production peut être utilisée comme objectif pour mieux correspondre à l'environnement réel.</p>

<p>Le <a href="https://github.com/GoogleChromeLabs/lighthousebot">bot Lighthouse</a> s'intègre à <a href="https://travis-ci.org/">Travis CI</a> et peut être utilisé pour collecter des métriques de <a href="https://developers.google.com/web/tools/lighthouse/">Lighthouse</a> et de <a href="https://webpagetest.org">Webpage Test</a> à partir d'une URL de dévloppement. Le bot réussira ou échouera en fonction des scores minimums fournis.</p>

<h2 id="Comment_appliquer_un_budget_de_performance">Comment appliquer un budget de performance?</h2>

<p>Plus tôt vous pourrez identifier un ajout potentiel poussant le budget, mieux vous pourrez analyser l'état actuel de votre site et identifier les optimisations ou le code inutile.</p>

<p>Cependant, vous devez avoir plusieurs budgets et être dynamique. Ils sont destinés à refléter vos objectifs en cours, mais permettent des risques et des expériences. Par exemple, vous pouvez introduire une fonctionnalité qui augmente le temps de chargement global mais tente d'augmenter l'engagement des utilisateurs. (c'est-à-dire combien de temps un utilisateur reste sur une page ou un site).</p>

<p>Un budget de performance vous aide à protéger le comportement optimal de vos utilisateurs actuels tout en vous permettant d'accéder à de nouveaux marchés et de proposer des expériences personnalisées.</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="https://addyosmani.com/blog/performance-budgets/">Start Performance Budgeting</a> par Addy Osmani</li>
 <li><a href="https://web.dev/fast/performance-budgets-101">Performance Budgets 101</a> par Milica Mihajlija</li>
 <li><a href="https://timkadlec.com/remembers/2019-03-07-performance-budgets-that-stick/">Performance Budgets That Stick</a> par Tim Kadlec</li>
</ul>
