---
title: >-
  Quelle différence entre une page web, un site web, un serveur web et un moteur
  de recherche ?
slug: Learn/Common_questions/Pages_sites_servers_and_search_engines
translation_of: Learn/Common_questions/Pages_sites_servers_and_search_engines
original_slug: Apprendre/page_vs_site_vs_serveur_vs_moteur_recherche
---
<p>Dans cet article, nous démystifions plusieurs notions liées au Web : page web, site web, serveur web et moteur de recherche. Ces termes sont souvent une source de confusion ou utilisés incorrectement : voyons leur signification.</p>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="row">Prérequis&nbsp;:</th>
   <td>Vous devriez au préalable comprendre <a href="/fr/docs/Learn/Common_questions/How_does_the_Internet_work">comment fonctionne Internet</a>.</td>
  </tr>
  <tr>
   <th scope="row">Objectif&nbsp;:</th>
   <td>Être capable de décrire les différences entre une page web, un site web, un serveur web et un moteur de recherche.</td>
  </tr>
 </tbody>
</table>

<h2 id="summary">Résumé</h2>

<p>Le Web, comme tout autre champ de connaissance, est associé à un vaste vocabulaire technique. Ne vous inquiétez pas, nous n'avons pas l'intention de vous submerger avec tout cela (si vous êtes curieux, vous pouvez consulter notre <a href="/fr/docs/Glossary">glossaire</a>). Nous nous devons toutefois de clarifier dès maintenant certaines notions de base, car elles reviendront fréquemment dans vos prochaines lectures. Ces notions peuvent parfois être confondues, car elles réfèrent à des fonctions apparentées, mais néanmoins distinctes. Il arrive que les termes correspondants soient utilisés, parfois à contresens, dans certains articles de presse ou autre : ce n'est pas surprenant de se mélanger les pinceaux.</p>

<p>Nous approfondirons bientôt ces notions, mais vous pouvez commencer par vous familiariser avec ces définitions simples :</p>

<dl>
 <dt>Page web</dt>
 <dd>Un document qui peut être affiché par un navigateur web (tel que Mozilla Firefox, Google Chrome, Microsoft Internet Explorer ou Edge ou encore Safari). On parle aussi simplement de « pages ».</dd>
 <dt>Site web</dt>
 <dd>Un ensemble de pages web regroupées entre elles de différentes façons. On utilise également le terme « site » seul.</dd>
 <dt>Serveur web</dt>
 <dd>Un ordinateur qui héberge un site web sur Internet.</dd>
 <dt>Moteur de recherche</dt>
 <dd>Un site web qui aide à trouver des pages web (par exemple, Google, Bing, Yahoo, DuckDuckGo, Qwant, etc.). On accède aux moteurs de recherche via un navigateur web (en utilisant la barre d'adresse ou de recherche de ceux-ci) ou via une page web (par exemple <a href="https://www.bing.com/">bing.com</a> ou <a href="https://duckduckgo.com/">duckduckgo.com</a>).</dd>
</dl>

<p>Prenons une analogie simple avec une bibliothèque. Voici une suite d'actions qu'on peut effectuer lorsqu'on se rend dans une bibliothèque :</p>

<ol>
 <li>On parcourt un index de recherche afin de trouver le titre du livre qu'on veut.</li>
 <li>On note la référence / le code du livre.</li>
 <li>On se rend à la section correspondante de la bibliothèque, on trouve le rayonnage pour la section qui contient le code, on trouve le livre spécifique via son code.</li>
</ol>

<p>Comparons maintenant la bibliothèque avec un serveur web :</p>

<ul>
 <li>La bibliothèque est semblable à un serveur web : elle contient plusieurs sections, de la même façon qu'un serveur web peut héberger plusieurs sites web.</li>
 <li>Les différentes sections (science, mathématiques, histoire, etc.) de la bibliothèque sont semblables à des sites web. Chaque section correspond à un site donné (deux sections ne contiennent pas les mêmes livres).</li>
 <li>Les livres de chaque section sont semblables à des pages web. Un site web peut avoir plusieurs pages web. Ainsi, la section Science (qui correspond au site web) aura plusieurs livres, l'un sur la chaleur, l'autre sur le son ou la thermodynamique, etc. (qui correspondent aux pages web). Un emplacement donné (une URL) donne accès à une page web.</li>
 <li>L'index pour la recherche agit comme le moteur de recherche. Chaque livre dispose de son propre emplacement dans la bibliothèque et deux livres différents ne peuvent pas avoir le même emplacement/code.</li>
</ul>

<h2 id="active_learning">Pédagogie active</h2>

<p><em>Aucun contenu de pédagogie active n'est disponible pour le moment. <a href="/fr/docs/MDN/Contribute/Getting_started">S'il vous plaît, pensez à contribuer pour enrichir ce contenu !</a></em></p>

<h2 id="deeper_dive">Allons plus loin</h2>

<p>Explorons maintenant les liens qui unissent ces quatre notions et pourquoi elles sont parfois confondues.</p>

<h3 id="web_page">Page web</h3>

<p>Une <em>page web</em> est un document simple qui peut être affiché par un <a href="/fr/docs/Glossary/Browser">navigateur</a>. Ce document est écrit à l'aide du langage <a href="/fr/docs/Glossary/HTML">HTML</a> (nous en reparlerons plus en profondeur dans d'<a href="/fr/docs/Web/HTML">autres articles</a>) et peut inclure diverses autres ressources telles que :</p>

<ul>
 <li>des <em>feuilles de style</em> — qui déterminent l'apparence de la page ;</li>
 <li>des <em> scripts</em> — qui ajoutent des fonctions interactives ; ou</li>
 <li>du <em>contenu multimédia</em> — images, sons, vidéos.</li>
</ul>

<div class="note">
<p><strong>Note :</strong> Les navigateurs peuvent afficher d'autres types de documents tels que des fichiers <a href="/fr/docs/Glossary/PDF">PDF</a> ou des images, mais le terme <strong>page web</strong> désigne spécifiquement des documents HTML. Si nous parlons d'un autre type de contenu, nous utiliserons le terme <strong>document</strong>.</p>
</div>

<p>Toutes les pages web sont associées à une adresse unique. Pour atteindre une page, il suffit d'entrer son adresse dans la barre d'adresse du navigateur :</p>

<p><img alt="Exemple d'une adresse de page web dans la barre d'adresse du navigateur" src="web-page.jpg"></p>

<p>Un <em>site web</em> est un ensemble de pages web reliées entre elles (ainsi que des ressources associées) qui partagent un nom de domaine. Chaque page d'un site fournit des liens explicites (généralement sous la forme de texte cliquable) qui permettent à l'utilisateur de naviguer entre les pages du site web.</p>

<p>Pour atteindre un site web, vous devez saisir son nom de domaine dans la barre d'adresse de votre navigateur. Le navigateur affichera alors la page principale, appelée <em>page d'accueil</em>, du site web.</p>

<p><img alt="Example du nom de domaine d'un site web dans la barre d'adresse du navigateur" src="web-site.jpg"></p>

<p>Les termes <em>page web</em> et <em>site web</em> sont souvent confondus lorsqu'un site web ne comprend qu'une seule page. Un tel site pourrait être appelé un <em>site web à page unique</em>.</p>

<h3 id="web_server">Serveur web</h3>

<p>Un <em>serveur web</em> est un ordinateur hébergeant un ou plusieurs <em>sites web</em>. « Héberger » signifie que toutes les <em>pages web</em> et fichiers associés sont localement enregistrés sur cet ordinateur. À la demande d'un utilisateur, le <em>serveur web</em> transmettra la <em>page web</em> du <em>site web</em> hébergé au navigateur de l'utilisateur.</p>

<p>Attention à ne pas confondre <em>site web</em> et <em>serveur web</em>. Par exemple, si quelqu'un dit « Mon site web ne répond pas », cela signifie en fait que le <em>serveur web</em> ne répond pas et que, par conséquent, le <em>site web</em> n'est pas accessible. Par ailleurs, puisqu'un serveur web peut héberger plusieurs sites web, le terme <em>serveur web</em> n'est jamais utilisé pour désigner un site web, car cela serait une importante source de confusion. Ainsi, dans l'exemple précédent, si on dit « Mon serveur web ne répond pas », cela signifie qu'aucun site web de ce serveur n'est disponible.</p>

<h3 id="search_engine">Moteur de recherche</h3>

<p>Les moteurs de recherche sont à l'origine de beaucoup de confusion sur le Web. Un moteur de recherche est un type particulier de site web qui aide les utilisateurs à trouver les pages web d'<em>autres</em> sites web.</p>

<p>Il y en a plein : <a href="https://www.google.com/">Google</a>, <a href="https://www.bing.com/">Bing</a>, <a href="https://www.yandex.com/">Yandex</a>, <a href="https://duckduckgo.com/">DuckDuckGo</a> et plusieurs autres encore. Certains sont généraux, alors que d'autres sont spécialisés pour certains sujets de recherche. Vous êtes libres d'utiliser celui qui vous convient le mieux.</p>

<p>Plusieurs débutants sur le Web confondent moteur de recherche et navigateur. Soyons clairs : un <em><strong>navigateur</strong></em> est un logiciel qui affiche des pages web, alors qu'un <strong><em>moteur de recherche</em></strong> est un site web qui aide les utilisateurs à trouver les pages web d'autres sites web. La confusion est due à l'affichage de la page d'accueil d'un moteur de recherche lors de l'ouverture initiale d'un navigateur. Cette façon de faire est tout de même logique, car la première chose que l'on veut faire en ouvrant un navigateur est de trouver une page à afficher. Faites attention de ne pas confondre infrastructure (par exemple, le navigateur) et service (par exemple, le moteur de recherche). Cette distinction vous sera bien utile, mais ne soyez pas trop inquiets, car même les professionnels tendent à être un peu vagues dans leur emploi de la terminologie.</p>

<p>Voici un exemple du navigateur Firefox affichant une boîte de recherche Google sur sa page de démarrage par défaut :</p>

<p><img alt="Exemple de Firefox nightly affichant par défaut une page Google page personnalisée" src="search-engine.jpg"></p>

<h2 id="next_steps">Étapes suivantes</h2>

<ul>
 <li>Allez plus loin : <a href="/fr/docs/Learn/Common_questions/What_is_a_web_server">Qu'est-ce qu'un serveur web ?</a></li>
 <li>Voyez comment des pages web sont liées pour former un site web : <a href="/fr/docs/Learn/Common_questions/What_are_hyperlinks">Comprendre comment fonctionnent les liens sur le Web</a></li>
</ul>
