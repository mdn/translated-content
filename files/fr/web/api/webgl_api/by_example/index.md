---
title: WebGL par l'exemple
slug: Web/API/WebGL_API/By_example
tags:
  - Apprendre
  - Débutant
  - Graphisme
  - WebGL
translation_of: Web/API/WebGL_API/By_example
---
<div>{{IncludeSubnav("/fr/docs/Apprendre")}}</div>

<p>{{Next("Apprendre/WebGL/Par_exemple/Détecter_WebGL")}}</p>

<p><em>WebGL par l'exemple</em> est une série d'articles illustrant les concepts et les possibilités offertes par WebGL. Chaque exemple est accompagné d'explications. Ces démonstrations sont triés par sujet et par niveau de difficulté. Les concepts abordés sont, entre autres, le contexte de rendu, la programmation avec les <em>shaders</em>, les textures, la géométrie et l'interaction avec les utilisateurs.</p>

<h2 id="Les_exemples_par_catégorie">Les exemples, par catégorie</h2>

<p>Les exemples de cette section sont triés par ordre de difficulté croissante. Plutôt que de les présenter sous la forme d'une longue liste, ils sont également répartis selon différentes catégories. Un sujet peut être abordé dans plusieurs exemples afin de couvrir des notions simples, intermédiaires ou avancées.</p>

<p>Plutôt que de manipuler des <em>shaders</em>, optimiser des géométrie et gérer la mémoire {{Glossary("GPU")}} dans le premier exemple, la progression se fera étape par étape afin que les exemples et les concepts puissent mieux être compris.</p>

<p>Les exemples sont expliqués, avec des commentaires dans le code et des paragraphes dédiés. Nous vous invitons à lire l'ensemble des commentaires au fur et à mesure, notamment pour les exemples plus avancés où ce qui a été vu auparavant ne sera pas expliqué à nouveau.</p>

<h3 id="Apprendre_à_connaître_le_contexte_de_rendu">Apprendre à connaître le contexte de rendu</h3>

<dl>
 <dt><a href="/fr/docs/Apprendre/WebGL/Par_exemple/Détecter_WebGL">Détecter WebGL</a></dt>
 <dd>Dans cet exemple, on montre comment détecter un contexte de rendu {{Glossary("WebGL")}} et l'afficher pour l'utilisateur.</dd>
 <dt><a href="/fr/docs/Apprendre/WebGL/Par_exemple/Appliquer_des_couleurs">Appliquer des couleurs</a></dt>
 <dd>Dans cet exemple, on illustre comment appliquer une couleur unie dans un contexte de rendu.</dd>
 <dt><a href="/fr/docs/Apprendre/WebGL/Par_exemple/Appliquer_une_couleur_à_la_souris">Appliquer une couleur à la souris</a></dt>
 <dd>Ici, on montre comment combiner des interactions utilisateurs avec des opérations graphiques (là, on appliquera une couleur aléatoire dans le contexte à chaque clic de l'utilisateur).</dd>
 <dt><a href="/fr/docs/Apprendre/WebGL/Par_exemple/Créer_une_animation_colorée">Créer une animation colorée</a></dt>
 <dd>Dans cet exemple, on crée une animation simple avec des couleurs en appliquant chaque seconde une couleur aléatoire dans le contexte de rendu WebGL.</dd>
 <dt><a href="/fr/docs/Apprendre/WebGL/Par_exemple/Masque_de_couleur">Avoir un masque de couleur</a></dt>
 <dd>Modifier des couleurs aléatoires avec des masques de couleur pour limiter l'intervalle de couleurs qu'on souhaite utiliser.</dd>
 <dt><a href="/fr/docs/Apprendre/WebGL/Par_exemple/Appliquer_des_découpes_simples">Appliquer des découpes simples</a></dt>
 <dd>Dans cet exemple, on dessine des rectangles et des carrés simples grâce à des opérations de découpage (<em>scissoring</em>).</dd>
 <dt><a href="/fr/docs/Apprendre/WebGL/Par_exemple/Tailles_de_canvas_et_WebGL">La taille du canevas et WebGL</a></dt>
 <dd>Dans cet exemple, on observe ce qui se produit quand on définit (ou pas) la taille de l'élément <code>canvas</code> associé.</dd>
 <dt><a href="/fr/docs/Apprendre/WebGL/Par_exemple/Modèle_1">Modèle 1</a></dt>
 <dd>Dans cet exemple, on évoque les fragments de code qui seront utilisés pour les exemples qui suivent (et dans lesquels ils seront cachés car identiques). On définiera également une fonction JavaScript utilitaire pour initialiser WebGL plus facilement.</dd>
 <dt><a href="/fr/docs/Apprendre/WebGL/Par_exemple/Créer_une_animation_avec_découpe_et_applique">Créer une animation avec du découpage et de l'applique</a></dt>
 <dd>Avec cet article, on illustre comment créer des animations grâce aux opérations de découpe et d'applique.</dd>
 <dt><a href="/fr/docs/Apprendre/WebGL/Par_exemple/Une_pluie_de_rectangle">Une pluie de rectangle</a></dt>
 <dd>On voit ici un jeu, simple, qui mélange les découpes, les animations et les interactions utilisateurs.</dd>
</dl>

<div>
<h3 id="Les_bases_de_la_programmation_avec_les_shaders">Les bases de la programmation avec les <em>shaders</em></h3>

<dl>
 <dt><a href="/fr/docs/Apprendre/WebGL/Par_exemple/Hello_GLSL">Hello GLSL</a></dt>
 <dd>Un programme de manipulation des shaders simple qui dessine un carré.</dd>
 <dt><a href="/fr/docs/Apprendre/WebGL/Par_exemple/Introduction_aux_attributs_vertex">Introduction aux attributs de vertex</a></dt>
 <dd>Ici, on combine la programmation des shaders et les interactions utilisateurs grâce aux attributs de vertex.</dd>
 <dt><a href="/fr/docs/Apprendre/WebGL/Par_exemple/Générer_des_textures_avec_du_code">Générer des textures avec du code</a></dt>
 <dd>Une démonstration simple sur l'utilisation des <em>shaders</em> et des textures procédurales.</dd>
</dl>

<h3 id="Divers_exemples_avancés">Divers exemples avancés</h3>

<dl>
 <dt><a href="/fr/docs/Apprendre/WebGL/Par_exemple/Les_textures_vidéos">Les textures vidéos</a></dt>
 <dd>Dans cet exemple, on voit comment utiliser des fichiers vidéos comme des textures.</dd>
</dl>

<p>{{Next("Apprendre/WebGL/Par_exemple/Détecter_WebGL")}}</p>
</div>
