---
title: <easing-function>
slug: Web/CSS/easing-function
translation_of: Web/CSS/easing-function
---
<div>{{CSSRef}}</div>

<p>Le <a href="/fr/docs/Web/CSS/CSS_Types">type de données</a> CSS <strong><code>&lt;easing-function&gt;</code></strong> indique une fonction mathématique qui décrit la façon dont une valeur numérique évolue.</p>

<p>Cette transition entre deux valeurs peut être appliquées dans différentes situations. Elle peut être utilisée pour décrire la rapidité selon laquelle les valeurs évoluent durant les animations. Elle permet ainsi de faire varier la vitesse de l'animation au fur et à mesure de sa progression. Elle peut aussi être utilisée pour interpoler deux couleurs au sein d'un dégradé.</p>

<p>Les fonctions d'évolution qui appartiennent au sous ensemble des courbes de Bézier cubiques sont souvent appelées des fonctions « douces » car elles permettent d'avoir des évolutions légères en début et en fin d'interpolation. Les fonctions d'évolution relient un ratio d'entrée à un ratio de sortie, tous les deux exprimés comme des nombres (<a href="/fr/docs/Web/CSS/&lt;number&gt;"><code>&lt;number&gt;</code></a>). Pour ces valeurs, <code>0.0</code> représente l'état initial et <code>1.0</code> représente l'état final.</p>

<p>Selon la fonction utilisée, la sortie calculée peut parfois être supérieure à <code>1.0</code> ou être inférieure à <code>0.0</code> pendant le cours de l'animation. Cela placera la valeur plus loin que son état final puis la fera revenir. Pour les animations de certaines propriétés (comme <a href="/fr/docs/Web/CSS/left"><code>left</code></a> ou <a href="/fr/docs/Web/CSS/right"><code>right</code></a>), cela crée un effet de rebond.</p>

<img src="tf_with_output_gt_than_1.png">

<p>Toutefois, certaines propriétés restreindront la valeur de sortie au sein d'un intervalle acceptable. Ainsi, pour une valeur représentant la composante d'une couleur, celle-ci sera écrétée pour rester dans l'intervalle autorisé 0-255. Certaines courbes <code>cubic-bezier()</code> illustrent cette propriété.</p>

<img src="tf_with_output_gt_than_1_clipped.png">

<h2 id="syntax">Syntaxe</h2>

<p>Il existe trois types de <a href="#easing_functions">fonctions de transition</a> : linéaires, <a href="https://en.wikipedia.org/wiki/B%C3%A9zier_curve#Cubic_B.C3.A9zier_curves">courbes de Bézier cubiques</a> et les fonctions en escalier. Une valeur du type <code>&lt;easing-function&gt;</code> décrit la fonction de transition en utilisant l'un de ces trois types.</p>

<h3 id="fonctions_de_transition">Fonctions de transition</h3>

<p>CSS prend en charge trois sortes de fonction de transition : les fonctions linéaires, le sous ensemble des courbes cubiques de Bézier qui sont des fonctions et les fonctions en escalier. Les fonctions les plus utiles peuvent être facilement utilisées grâce à des mots-clés.</p>

<h4 id="les_fonctions_de_transition_linéaires">Les fonctions de transition linéaires</h4>

<h5 id="linear">linear</h5>

<img alt="Un graphe où les axes X et Y vont de 0 à 1 et où l'axe X est intitulé « Time ratio » et où l'axe Y est intitulé « Output ratio ». Une ligne diagonale droite par de l'origine 0 0 jusqu'à arriver à la position 1 1." src="cubic-bezier-linear.png">

<p>L'interpolation se fait à évolution constante, du début jusqu'à la fin. Ce mot-clé représente la fonction de transition décrite par <code>cubic-bezier(0.0, 0.0, 1.0, 1.0)</code>.</p>

<h4 id="cubic-bezier">La classe des fonctions de transition cubic-bezier()</h4>

<img alt="Un graphe où les axes X et Y vont de 0 à 1 et où l'axe X est intitulé « Time ratio » et où l'axe Y est intitulé « Output ratio ». Une ligne courbe par de l'origine jusqu'à atteindre la position 1 1. Le point à l'origine est appelé 'P₀ = (0, 0)'. En partant de l'origine, on a une poignée de Bézier intitulée 'P₁ = (0.075, 0.75)'. Le point aux coordonnées 1 1 est intitulé 'P₃ = (1, 1)'. En partant du point 1 1, on a une poignée de Bézier intitulée 'P₂ = (0.0875, 0.36)'." src="cubic-bezier-example.png">

<p>La notation fonctionnelle <code>cubic-bezier()</code> définit <a href="https://fr.wikipedia.org/wiki/Courbe_de_B%C3%A9zier#Courbes_de_B%C3%A9zier_cubiques">une courbe de Bézier cubique</a>. Ces courbes étant continues, elles sont souvent utilisées afin de démarrer et de finir progressivement une interpolation. Elles sont parfois appelées <em>fonctions de transition</em>.</p>

<p>Une courbe de Bézier cubique est définie par quatre points P<sub>0</sub>, P<sub>1</sub>, P<sub>2</sub> et P<sub>3</sub>. P<sub>0</sub> et P<sub>3</sub> représentent les points de début et de fin de la courbe. Pour les fonctions de transition CSS, ces points sont fixes, car les coordonnées représentent des ratios (sur les abscisses, le ratio en temps et sur les ordonnées, le ratio en sortie). P<sub>0</sub> est donc situé en <code>(0, 0)</code> et représente l'état initial. P<sub>3</sub> est en <code>(1, 1)</code> et réprésente l'état final.</p>

<p>Toutes les courbes de Bézier cubiques ne sont pas des fonctions de transition, car toutes ne sont pas <a href="https://fr.wikipedia.org/wiki/Fonction_(math%C3%A9matiques)">des fonctions mathématiques</a> (c'est-à-dire des courbes qui, pour une abscisse donnée, ont une seule ou zéro valeur). Avec les contraintes imposées sur P<sub>0</sub> et P<sub>3</sub> en CSS, une courbe de Bézier cubique sera une fonction mathématique et pourra être utilisée comme fonction de transition, si et seulement si les abscisses de P<sub>1</sub> et P<sub>2</sub> appartiennent, tous les deux, à l'intervalle <code>[0, 1]</code>.</p>

<p>Les courbes de Bézier cubiques pour lesquelles les ordonnées des points P<sub>1</sub> ou P<sub>2</sub> sont en dehors de l'intervalle <code>[0, 1]</code> pourront générer un effet de rebond.</p>

<p>Si on utilise une déclaration <code>cubic-bezier</code> avec une fonction invalide, CSS ignorera l'ensemble de la propriété.</p>

<h5 id="syntaxe_2">Syntaxe</h5>

<pre class="brush: css">cubic-bezier(<var>x<sub>1</sub></var>, <var>y<sub>1</sub></var>, <var>x<sub>2</sub></var>, <var>y<sub>2</sub></var>)
</pre>

<p>avec :</p>

<dl>
 <dt><strong><var>x<sub>1</sub></var>, <var>y<sub>1</sub></var>, <var>x<sub>2</sub></var>, <var>y<sub>2</sub></var></strong></dt>
 <dd>Des valeurs numériques (<a href="/fr/docs/Web/CSS/&lt;number&gt;"><code>&lt;number&gt;</code></a>) qui représentent les abscisses et ordonnées des points P<sub>1</sub> et P<sub>2</sub> qui définissent la courbe de Bézier cubique. x<sub>1</sub> et x<sub>2</sub> doivent appartenir à l'intervalle [0, 1] afin que la valeur soit valide.</dd>
</dl>

<h4 id="Keywords_for_common_cubic-bezier_easing_functions">Mots-clés pour les fonctions de transition communes</h4>

<h5 id="ease">ease</h5>

<p><img alt="Un graphe où les axes X et Y vont de 0 à 1 et où l'axe X est intitulé « Time ratio » et où l'axe Y est intitulé « Output ratio ». Une ligne courbe part de l'origine jusqu'au point 1 1 en démarrant rapidement et finissant par un arc plat." src="cubic-bezier-ease.png"></p>

<p>L'interpolation démarre doucement puis accélère vivement avant de ralentir vers la fin. Ce mot-clé représente la fonction de transition <code>cubic-bezier(0.25, 0.1, 0.25, 1.0)</code>. Cette valeur est semblable à <a href="#ease-in-out"><code>ease-in-out</code></a>, bien qu'elle accélère plus rapidement au début.</p>

<h5 id="ease-in">ease-in</h5>

<p><img alt="Un graphe où les axes X et Y vont de 0 à 1 et où l'axe X est intitulé « Time ratio » et où l'axe Y est intitulé « Output ratio ». Une courbe part l'origine jusqu'au point 1 1 avec une bonne partie de la courbe proche de l'origine et qui s'élève en quasi-ligne droite afin d'atteindre le point d'arrivée 1 1."  src="cubic-bezier-ease-in.png"></p>

<p>L'interpolation démarre lentement puis s'accélère progressivement jusqu'à la fin où elle s'arrête de façon abrutpe. Ce mot-clé représente la fonction de transition <code>cubic-bezier(0.42, 0.0, 1.0, 1.0)</code>.</p>

<h5 id="ease-in-out"><code>ease-in-out</code></h5>

<p><img alt="Un graphe où les axes X et Y vont de 0 à 1 et où l'axe X est intitulé « Time ratio » et où l'axe Y est intitulé « Output ratio ». Une ligne courbe qui part de l'origine jusqu'à atteindre le point 1 1. La courbe est symétrique et ressemble à un S étiré" src="cubic-bezier-ease-in-out.png"></p>

<p>L'interpolation démarre lentement puis accélère avant de ralentir vers la fin. Ce mot-clé représente la fonction de transition <code>cubic-bezier(0.42, 0.0, 0.58, 1.0)</code>. Au début, elle se comporte comme <a href="#ease-in"><code>ease-in</code></a> et à la fin, elle se comporte comme <a href="#ease-out"><code>ease-out</code></a>.</p>

<h5 id="ease-out">ease-out</h5>

<p><img alt="Un graphe où les axes X et Y vont de 0 à 1 et où l'axe X est intitulé « Time ratio » et où l'axe Y est intitulé « Output ratio ». Une ligne courbe part de l'origine jusqu'à atteindre le point 1 1. Cette courbe démarre comme une ligne droite en diagonale puis se courbe progressivement à l'approche de 1 1." src="cubic-bezer-ease-out.png"></p>

<p>L'interpolation démarre abruptement puis ralentit progressivement vers la fin. Ce mot-clé correspond à la fonction de transition <code>cubic-bezier(0.0, 0.0, 0.58, 1.0)</code>.</p>

<h4 id="steps">Les fonctions de transition en escalier</h4>

<p>La notation fonctionnelle <code>steps()</code> définit une fonction en escalier qui divise le domaine des valeurs de sorties en marches équidistantes.</p>

<h5 id="syntaxe_3">Syntaxe</h5>

<pre class="brush: css">steps(<var>nombre_de_marches</var>, <var>direction</var>)
</pre>

<p>avec :</p>

<dl>
 <dt><var>nombre_de_marches</var></dt>
 <dd>Un entier (<a href="/fr/docs/Web/CSS/&lt;integer&gt;"><code>&lt;integer&gt;</code></a>) strictement positif qui représente le nombre de segments équidistants qui composent la fonction en escalier.</dd>
 <dt><var>direction</var></dt>
 <dd>
   <p>Un mot-clé qui indique si la fonction est continue à gauche ou continue à droite :</p>
   <ul>
    <li><code>jump-start</code> indique une fonction continue à gauche : le premier saut a lieu au début de l'interpolation ;</li>
    <li><code>jump-end</code> indique une fonction continue à droite : le dernier saut a lieu à la fin de l'interpolation ;</li>
    <li><code>jump-both</code> indique une fonction continue à droite et à gauche avec des pauses au début et à la fin, ce qui se traduit par l'ajout d'une étape lors de l'itération de l'interpolation ;</li>
    <li><code>jump-none</code> indique qu'il n'y a pas de saut au début ou à la fin mais une temporisation de 1/n de la durée totale à chaque extrêmité.</li>
    <li><code>start</code> est équivalent à <code>jump-start</code></li>
    <li><code>end</code> est équivalent à <code>jump-end</code></li>
   </ul>
   <p><code>end</code> est la valeur par défaut.</p>
 </dd>
</dl>

<h5 id="steps_n_&lt;direction&gt;">steps( n, &lt;direction&gt; )</h5>

<ul>
 <li>
  <p><code>steps(2, jump-start)</code><br>
   <code>steps(2, start)</code></p>
  <img alt="Un graphe où les axes X et Y vont de 0 à 1 et où l'axe X est intitulé « Time ratio » et où l'axe Y est intitulé « Output ratio ». Trois points sont affichés : le premier aux coordonnées 0 0, le deuxième aux coordonnées 0,5 0,5 et le troisième aux coordonnées 1 1. Les deuxième et troisième points sont le début de lignes horizontales qui partent vers la gauche sur 0,5 unités." src="steps-2-start.png"></li>
 <li>
  <p><code>steps(4, jump-end)<br>
   steps(4, end)</code></p>
  <img alt="Quatre marches avec un saut de la quatrième à la valeur située à la fin." src="steps-4-end.png"></li>
 <li>
  <p><code>steps(5, jump-none)</code></p>
  <img alt="Cinq marches, sans saut : 20% de temps s'écoule à l'étape initiale et 20% de temps s'écoule à l'étape finale." src="step5none.png"></li>
 <li>
  <p><code>steps(3, jump-both)</code></p>
  <img alt="Un graphe où les axes X et Y vont de 0 à 1 et où l'axe X est intitulé « Time ratio » et où l'axe Y est intitulé « Output ratio ». Cinq points sont affichés, respectivement aux coordonnées 0 0, 0 0,25, 0,5 0,5, 0,75 0,75, 1 1. Les deuxième, troisième et quatrième points ont des lignes qui partent vers la droite sur 0,25 unités." src="step3both.png"></li>
</ul>

<h5 id="step-start">step-start</h5>

<p><img alt="Un graphe où les axes X et Y vont de 0 à 1 et où l'axe X est intitulé « Time ratio » et où l'axe Y est intitulé « Output ratio ». Deux points sont présents, le premier situé aux coordonnées 0 0 et le second aux coordonnées 1 1. Une ligne horizontale part du deuxième point vers l'axe Y." src="steps-1-start.png"> L'interpolation saute directement à l'état final et reste ainsi jusqu'à la fin. Ce mot-clé correspond à la fonction de transition <code>steps(1, jump-start)</code> ou <code>steps(1, start)</code>.</p>

<h5 id="step-end">step-end</h5>

<p><img alt="Un graphe où les axes X et Y vont de 0 à 1 et où l'axe X est intitulé « Time ratio » et où l'axe Y est intitulé « Output ratio ». Deux points sont présents, le premier situé aux coordonnées 0 0 et le second aux coordonnées 1 1. Une ligne horizontale part du premier point et reste sur l'axe des abscisses." src="steps-1-end.png"> L'interpolation reste dans son état initial jusqu'à la fin où elle saute directement à l'état final. Ce mot-clé représente la fonction de transition <code>steps(1, jump-end)</code> ou <code>steps(1, end)</code>.</p>

<h2 id="exemples">Exemples</h2>

<h3 id="comparaison_des_fonctions_de_transition">Comparaison des fonctions de transition</h3>

<p>Dans cet exemple, on crée une animation qui peut être démarrée ou stoppée à l'aide du bouton fourni et un menu est affiché pour choisir la fonction de transition à utiliser : différents mots-clés sont disponibles ainsi que des exemples utilisant <code>cubic-bezier()</code> et <code>steps()</code>. L'idée est de fournir un outil de comparaison simple entre ces fonctions.</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;div&gt;
  &lt;div&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;ul&gt;
  &lt;li&gt;
    &lt;button class="animation-button"&gt;Démarrer l'animation&lt;/button&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;label for="easing-select"&gt;Choisir une fonction de transition :&lt;/label&gt;
    &lt;select id="easing-select"&gt;
      &lt;option selected&gt;linear&lt;/option&gt;
      &lt;option&gt;ease&lt;/option&gt;
      &lt;option&gt;ease-in&lt;/option&gt;
      &lt;option&gt;ease-in-out&lt;/option&gt;
      &lt;option&gt;ease-out&lt;/option&gt;
      &lt;option&gt;cubic-bezier(0.1, -0.6, 0.2, 0)&lt;/option&gt;
      &lt;option&gt;cubic-bezier(0, 1.1, 0.8, 4)&lt;/option&gt;
      &lt;option&gt;steps(5, end)&lt;/option&gt;
      &lt;option&gt;steps(3, start)&lt;/option&gt;
      &lt;option&gt;steps(4)&lt;/option&gt;
    &lt;/select&gt;
  &lt;/li&gt;
&lt;/ul&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">body &gt; div {
  position: relative;
  height: 100px;
}

div &gt; div {
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: blue;
  background-image: radial-gradient(circle at 10px 10px, rgba(25,255,255,0.8),rgba(25,255,255,0.4));
  border-radius: 50%;
  top: 25px;
  animation: 1.5s infinite alternate;
}

@keyframes move-right {
  from {
    left: 10%;
  }

  to {
    left: 90%;
  }
}

li {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}</pre>

<h4 id="JavaScript">JavaScript</h4>

<pre class="brush: js">const selectElem = document.querySelector("select");
const startBtn = document.querySelector("button");
const divElem = document.querySelector("div &gt; div");

startBtn.addEventListener("click", () =&gt; {
  if(startBtn.textContent === "Démarrer l'animation") {
    divElem.style.animationName = "move-right";
    startBtn.textContent = "Arrêter l'animation";
    divElem.style.animationTimingFunction = selectElem.value;
  } else {
    divElem.style.animationName = "unset";
    startBtn.textContent = "Démarrer l'animation";
  }
});

selectElem.addEventListener("change", () =&gt; {
  divElem.style.animationTimingFunction = selectElem.value;
});</pre>

<h4 id="résultat">Résultat</h4>

<p>{{EmbedLiveSample('comparaison_des_fonctions_de_transition', '100%', 300)}}</p>

<h3 id="exemples_avec_cubic-bezier">Exemples avec cubic-bezier()</h3>

<p>Ces courbes de Bézier cubiques sont valides pour être utilisées en CSS :</p>

<pre class="brush: css">/* La courbe de Bézier canonique avec quatre nombres dans l'intervalle [0,1]. */
cubic-bezier(0.1, 0.7, 1.0, 0.1)

/* On peut aussi utiliser des valeurs entières (&lt;integer&gt;) car ce sont des nombres. */
cubic-bezier(0, 0, 1, 1)

/* Les valeurs négatives pour les ordonnées sont valides et créent un effet de rebond.*/
cubic-bezier(0.1, -0.6, 0.2, 0)

/* Les valeurs supérieures à 1.0 pour les ordonnées sont aussi valides. */
cubic-bezier(0, 1.1, 0.8, 4)
</pre>

<p>Ces courbes de Bézier cubiques sont invalides en CSS :</p>

<pre class="brush: css example-bad">
/* Bien que les valeurs animées puissent être des couleurs,
   les courbes de Bézier ne fonctionnent qu'avec des ratios numériques.*/
cubic-bezier(0.1, red, 1.0, green)

/* Les abscisses doivent être dans l'intervalle [0, 1] car sinon l'intervalle
   couvert par la courbe n'est pas valide. */
cubic-bezier(2.45, 0.6, 4, 0.1)

/* Les deux points doivent être explicitement définis, il n'y a pas de valeur
   par défaut. */
cubic-bezier(0.3, 2.1)

/* Les abscisses doivent être dans l'intervalle [0, 1], sinon la courbe
   ne représente pas une fonction du temps. */
cubic-bezier(-1.9, 0.3, -0.2, 2.1) </pre>

<h3 id="exemples_avec_steps">Exemples avec steps()</h3>

<p>Ces fonctions de transition sont valides :</p>

<pre class="brush: css">
/* Il y a 5 étapes, la dernière se produit juste avant
   la fin de l'animation. */
steps(5, end)

/* Un escalier à deux marches, la première se produisant
   au début de l'animation. */
steps(2, start)

/* Le deuxième paramètre est optionnel. */
steps(2)
</pre>

<div class="notecard note">
  <p><strong>Note :</strong> Si l'animation contient plusieurs arrêts, les marches décrites dans la fonction <code>steps()</code> s'appliqueront à chaque section. Ainsi, pour une animation avec trois segments et <code>steps(2)</code>, on aura au total 6 étapes, 2 pour chaque segment.</p>
</div>

<p>Les fonctions de transitions qui suivent sont invalides :</p>

<pre class="brush: css example-bad">
/* Le premier paramètre doit être un entier et ne peut pas être
   une valeur décimale (même si celle-ci est égale à une valeur entière). */
steps(2.0, jump-end)

/* La quantité de marches ne doit pas être négative. */
steps(-3, start)

/* Il doit y avoir au moins une marche.*/
steps(0, jump-none)</pre>

<h2 id="spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th>Spécification</th>
   <th>État</th>
   <th>Commentaires</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('CSS Easing 1', '#typedef-easing-function', '&lt;easing-function&gt;')}}</td>
   <td>{{Spec2('CSS Easing 1')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.types.easing-function", 2)}}</p>

<h2 id="voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/CSS/CSS_Animations">CSS Animations</a></li>
 <li><a href="/fr/docs/Web/CSS/CSS_Transitions">CSS Transitions</a></li>
 <li><a href="https://cubic-bezier.com/">cubic-bezier</a></li>
</ul>
