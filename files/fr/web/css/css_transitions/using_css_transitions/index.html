---
title: Utiliser les transitions CSS
slug: Web/CSS/CSS_Transitions/Using_CSS_transitions
tags:
  - Avancé
  - CSS
  - Guide
  - Transitions
translation_of: Web/CSS/CSS_Transitions/Using_CSS_transitions
original_slug: Web/CSS/CSS_Transitions/Utiliser_transitions_CSS
---
<div>{{CSSref}}</div>

<p>Les <strong>transitions CSS</strong> permettent de contrôler la vitesse d'animation lorsque les propriétés CSS sont modifiées. Plutôt que le changement soit immédiat, on peut l'étaler sur une certaine période. Ainsi, si on souhaite passer un élément de blanc à noir, on pourra utiliser les transitions CSS afin que cette modification soit effectuée progressivement, selon une courbe d'accélération donnée.</p>

<p>Les animations qui utilisent des transitions entre deux états sont souvent appelées <em>transitions implicites</em> car l'état initial et l'état final sont définis implicitement par le navigateur.</p>

<p><img alt="A CSS transition tells the browser to draw the intermediate states between the initial and final states, showing the user a smooth transitions." src="transitionsprinciple.png"></p>

<p>Les transitions CSS vous permettent de choisir :</p>

<ul>
 <li>les propriétés à animer en les listant explicitement</li>
 <li>le début de l'animation</li>
 <li>la durée de l'animation</li>
 <li>la façon dont la transition s'exécutera</li>
</ul>

<h2 id="Quelles_sont_les_propriétés_CSS_qui_peuvent_être_animées">Quelles sont les propriétés CSS qui peuvent être animées ?</h2>

<p>On peut définir les propriétés qu'on souhaite animer et la façon dont on souhaite les animer. Cela permet de créer des transitions complexes. Toutefois, toutes les propriétés ne peuvent pas être animées et <a href="/fr/docs/Web/CSS/CSS_animated_properties">la liste des propriétés concernées est limitée</a>.</p>

<div class="note">
  <p><strong>Note :</strong> La gestion de la valeur <code>auto</code> représente un cas complexe. La spécification requiert de ne pas animer une telle valeur. Certains navigateurs dont ceux basés sur Gecko respectent cette règle mais d'autres comme WebKit sont moins stricts. Attention donc lors de l'utilisation des animations avec <code>auto</code>.</p>
</div>

<div class="note">
  <p><strong>Note :</strong> Attention lorsqu'on manipule des transitions directement après avoir ajouté un élément via <code>.appendChild()</code> ou en modiant <code>display: none;</code>. Cela sera compris comme si l'état initial n'avait jamais eu lieu et que l'élément avait toujours été dans son état final. Pour contourner ce problème, on peut appliquer <code>window.setTimeout()</code> pendant quelques millisecondes avant de modifier la propriété CSS sur laquelle on souhaite appliquer une transition.</p>
</div>

<h2 id="Les_propriétés_CSS_relatives_aux_transitions">Les propriétés CSS relatives aux transitions</h2>

<p>Les transitions CSS sont généralement contrôlées grâce à la propriété raccourcie {{cssxref("transition")}}. Les différents composants d'une transition CSS peuvent être décrits dans le détail grâce aux propriétés détaillées suivantes :</p>

<div class="note">
<p><strong>Note :</strong>Dans les exemples ci-après, l'effet de répétition est uniquement utilisé à des fins de visualisation. Si vous souhaitez obtenir des effets visuels qui se répètent, il faudra utiliser la propriété {{cssxref("animation")}}.</p>
</div>

<dl>
 <dt>{{cssxref("transition-property")}}</dt>
 <dd>Cette propriété définit le nom des propriétés CSS pour lesquelles on veut appliquer des transitions. Seules les propriétés listées ici seront sujettes aux transitions. Les modifications appliquées aux autres propriétés seront instantanées.</dd>
 <dt>{{cssxref("transition-duration")}}</dt>
 <dd>Cette propriété définit la durée de la transition. On peut définir une durée pour toutes les transitions ou une durée pour chacuune des propriétés.
 </dd>
 <dt>{{cssxref("transition-timing-function")}}</dt>
 <dd>Cette propriété définit une fonction qui décrit la façon dont les valeurs intermédiaires sont calculées. On utilise pour cela des <a href="/fr/docs/Web/CSS/easing-function">fonctions de temporisation</a>.
 </dd>
 <dt>{{cssxref("transition-delay")}}</dt>
 <dd>Cette propriété indique le temps à attendre entre le moment où la propriété est modifiée et le début de la transition.
 </dd>
</dl>

<p>La syntaxe de la propriété raccourcie {{cssxref("transition")}} est :</p>

<pre class="brush: css">div {
  transition: &lt;property&gt; &lt;duration&gt; &lt;timing-function&gt; &lt;delay&gt;;
}</pre>

<h2 id="Exemples">Exemples</h2>

<h3 id="Un_exemple_simple">Un exemple simple</h3>

<p>Avec cette feuille de style, on opère une transition CSS sur la taille de police de quatre secondes après deux secondes écoulées lorsque l'utilisateur passe la souris sur l'élément :</p>

<pre class="brush: css">#delay {
  font-size: 14px;
  transition-property: font-size;
  transition-duration: 4s;
  transition-delay: 2s;
}

#delay:hover {
  font-size: 36px;
}</pre>

<h3 id="Exemple_avec_plusieurs_propriétés_animées">Exemple avec plusieurs propriétés animées</h3>

<pre class="brush: html hidden highlight:[3]">&lt;body&gt;
    &lt;p&gt;La boîte ci-dessous utilise des transitions pour les propriétés : width, height, background-color, transform. Survolez la boîte pour voir les animations.&lt;/p&gt;
    &lt;div class="box"&gt;Sample&lt;/div&gt;
&lt;/body&gt;</pre>

<h4 id="CSS_Content">CSS Content</h4>

<pre class="brush: css; highlight:[8,9]">.box {
    border-style: solid;
    border-width: 1px;
    display: block;
    width: 100px;
    height: 100px;
    background-color: #0000FF;
    transition: width 2s, height 2s, background-color 2s, transform 2s;
}

.box:hover {
    background-color: #FFCCCC;
    width: 200px;
    height: 200px;
    transform: rotate(180deg);
}
</pre>

<p>{{EmbedLiveSample('Exemple_avec_plusieurs_propriétés_animées', 600, 300)}}</p>


<h3 id="Appliquer_une_transition_sur_plusieurs_propriétés">Appliquer une transition sur plusieurs propriétés</h3>

<h4 id="CSS">CSS</h4>

<pre class="brush: css; highlight:[8,9]">.box {
  border-style: solid;
  border-width: 1px;
  display: block;
  width: 100px;
  height: 100px;
  background-color: #0000FF;
  transition: width 2s, height 2s, background-color 2s, transform 2s;
}

.box:hover {
  background-color: #FFCCCC;
  width: 200px;
  height: 200px;
  transform: rotate(180deg);
}
</pre>

<h4 id="HTML">HTML</h4>

<pre class="brush: html; highlight:[3]">&lt;p&gt;Cette boîte utilisera des transitions pour width, height, background-color, transform.
   Survolez cette boîte pour voir l'effet.&lt;/p&gt;
&lt;div class="box"&gt;&lt;/div&gt;
</pre>

<h4 id="Résultat">Résultat</h4>

<p>{{EmbedLiveSample('Appliquer_une_transition_sur_plusieurs_propriétés', 600, 300)}}</p>

<h3 id="Le_rôle_de_la_taille_des_listes_de_valeurs">Le rôle de la taille des listes de valeurs</h3>

<p>Si la liste des valeurs pour une propriété est plus courte qu'une autre, les valeurs de la liste la plus courte seront répétées pour que la longueur réelle corresponde. Ainsi :</p>

<pre class="brush: css">div {
  transition-property: opacity, left, top, height;
  transition-duration: 3s, 5s;
}
</pre>

<p>Sera équivalent à :</p>

<pre class="brush: css">div {
  transition-property: opacity, left, top, height;
  transition-duration: 3s, 5s, 3s, 5s;
}</pre>

<p>De même, si la liste est trop longue par rapport à {{cssxref("transition-property")}}, elle sera tronquée. Ainsi,</p>

<pre class="brush: css">div {
 transition-property: opacity, left;
 transition-duration: 3s, 5s, 2s, 1s;
}</pre>

<p>Sera équivalent à :</p>

<pre class="brush: css">div {
  transition-property: opacity, left;
  transition-duration: 3s, 5s;
}</pre>

<h3 id="Utiliser_les_transitions_pour_accentuer_les_éléments_pour_un_menu">Utiliser les transitions pour accentuer les éléments pour un menu</h3>

<p>On utilise parfois CSS pour mettre en avant les éléments d'un menu lorsque l'utilisateur les survole avec sa souris. On peut facilement utiliser les transitions CSS pour améliorer l'effet obtenu.</p>

<p>Tout d'abord, on définit le menu en HTML :</p>

<pre class="brush: html">&lt;nav&gt;
  &lt;a href="#"&gt;Accueil&lt;/a&gt;
  &lt;a href="#"&gt;À propos&lt;/a&gt;
  &lt;a href="#"&gt;Contact&lt;/a&gt;
  &lt;a href="#"&gt;Liens&lt;/a&gt;
&lt;/nav&gt;
</pre>

<p>On construit le CSS pour définir l'apparence du menu :</p>

<pre class="brush: css">a {
  color: #fff;
  background-color: #333;
  transition: all 1s ease-out;
}

a:hover,
a:focus {
  color: #333;
  background-color: #fff;
}</pre>

<pre class="brush: css hidden">html,
body {
  margin: 0;
  padding: 0;
}

nav {
  display: flex;
  padding: 12px;
  background-color: #333;
}

a {
  width: 100px;
  border: 1px solid #fff;
  border-radius: 18px;
  outline: 0;
  padding: 8px 12px;
  text-align: center;
  text-decoration: none;
  font: bold 12px Verdana;
}

a:not(:last-child) {
  margin-right: 12px;
}
</pre>

<p>Ainsi, lorsque la souris survole l'élément, la couleur du texte et de l'arrière-plan change.</p>

<p>{{EmbedLiveSample("Utiliser_les_transitions_pour_accentuer_les_éléments_pour_un_menu","300","300")}}</p>

<h2 id="Exemples_avec_JavaScript">Exemples avec JavaScript</h2>

<h3 id="Utiliser_les_transitions_CSS_pour_lisser_les_transformations_avec_JavaScript">Utiliser les transitions CSS pour lisser les transformations avec JavaScript</h3>

<p>Les transitions permettent de lisser les opérations effectuées avec JavaScript. Par exemple :</p>

<pre class="brush: html">&lt;p&gt;Click anywhere to move the ball&lt;/p&gt;
&lt;div id="foo"&gt;&lt;/div&gt;
</pre>

<p>Avec JavaScript on peut ajouter un effet de mouvement sur la balle :</p>

<pre class="brush: js">var f = document.getElementById('foo');
document.addEventListener('click', function(ev){
    f.style.transform = 'translateY('+(ev.clientY-25)+'px)';
    f.style.transform += 'translateX('+(ev.clientX-25)+'px)';
},false);
</pre>

<p>Avec CSS, il suffit d'ajouter une transition à l'élément et chaque modification sera appliquée de façon régulière :</p>

<pre class="brush: css">p {
  padding-left: 60px;
}

#foo {
  border-radius: 50px;
  width: 50px;
  height: 50px;
  background: #c00;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 1s;
}
</pre>

<p>{{JSFiddleEmbed("https://jsfiddle.net/9h261pzo/291/")}}</p>

<h3 id="Détecter_le_début_et_la_fin_d'une_transition">Détecter le début et la fin d'une transition</h3>

<p>L'évènement {{event("transitionend")}} est déclenché lorsqu'une transition est terminée. C'est un objet {{domxref("TransitionEvent")}} qui possède deux propriétés supplémentaires qu'un {{domxref("Event")}} :</p>

<dl>
 <dt><code>propertyName</code></dt>
 <dd>Une chaîne de caractères qui indique le nom de la propriété CSS pour laquelle la transition est terminée.</dd>
 <dt><code>elapsedTime</code></dt>
 <dd>Un nombre flottant qui indique le nombre de secondes durant lesquelles la transition s'est déroulée. Cette valeur n'est pas modifiée par la valeur de {{cssxref("transition-delay")}}.</dd>
</dl>

<p>Comme pour les différents évènements, on pourra utiliser {{domxref("eventtarget.addEventListener()")}}) pour « écouter » cet événement :</p>

<pre class="brush: js">el.addEventListener("transitionend", updateTransition, true);
</pre>

<p>Pour détecter le début d'une transition, on pourra utiliser l'évènement {{event("transitionrun")}} qui est déclenché avant tout retardement et l'évènement {{event("transitionstart")}} qui est déclenché après tout retardement :</p>

<pre class="brush: js">el.addEventListener("transitionrun", signalStart, true);
el.addEventListener("transitionstart", signalStart, true);</pre>

<div class="note">
  <p><strong>Note :</strong> L'événement <code>transitionend</code> n'est pas déclenché si la transition est interrompue avant la fin de la transition si {{cssxref("display")}}<code>: none</code> ou si la valeur de la propriété est modifiée.</p>
</div>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('CSS3 Transitions', '', '')}}</td>
   <td>{{Spec2('CSS3 Transitions')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>L'interface {{domxref("TransitionEvent")}} et l'événement {{event("transitionend")}}</li>
 <li><a href="/fr/docs/Web/CSS/CSS_Animations/Using_CSS_animations">Utiliser les animations CSS</a></li>
</ul>
