---
title: any-pointer
slug: Web/CSS/@media/any-pointer
tags:
  - CSS
  - Caractéristique média
  - Reference
translation_of: Web/CSS/@media/any-pointer
---
<div>{{CSSRef}}</div>

<p><strong><code>any-pointer</code></strong> est une caractéristique média CSS (cf. {{cssxref("@media")}}) qui peut être utilisée afin de déterminer si un des mécanismes de saisie/d'entrée disponibles est un dispositif de pointage et sa précision le cas échéant.</p>

<div class="note">
<p><strong>Note :</strong> Si on souhaite tester la précision du mécanisme de pointage <em>principal</em>, on pourra utiliser la caractéristique <code><a href="/fr/docs/Web/CSS/@media/pointer">pointer</a></code> à la place.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<p>La caractéristique <code>any-pointer</code> est définie comme un mot-clé parmi ceux de la liste ci-après.</p>

<dl>
 <dt><code>none</code></dt>
 <dd>L'appareil ne dispose d'aucun dispositif de pointage.</dd>
 <dt><code>coarse</code></dt>
 <dd>Il existe au moins un mécanisme d'entrée qui est un dispositif de pointage et pour lequel la précision est limitée.</dd>
 <dt><code>fine</code></dt>
 <dd>Il existe au moins un mécanisme d'entrée qui est un dispositif de pointage et pour lequel la précision est fine.</dd>
</dl>

<div class="note">
<p><strong>Note :</strong> Plusieurs valeurs peuvent correspondre si l'appareil dispose de dispositifs de pointage différents. Toutefois, la valeur <code>none</code> ne sera utilisée que lorsqu'aucun dispositif de pointage ne sera détecté.</p>
</div>

<h2 id="Exemples">Exemples</h2>

<p>Dans cet exemple, on crée une petite case à cocher pour les utilisateurs qui disposent d'un pointage précis et une case à cocher plus grande lorsque le mécanisme de pointage est moins précis.</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;input id="test" type="checkbox" /&gt;
&lt;label for="test"&gt;Coucou !&lt;/label&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">input[type="checkbox"]:checked {
  background: gray;
}

@media (any-pointer: fine) {
  input[type="checkbox"] {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    border: 1px solid blue;
  }
}

@media (any-pointer: coarse) {
  input[type="checkbox"] {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    width: 30px;
    height: 30px;
    border: 2px solid red;
  }
}</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemples")}}</p>

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
   <td>{{SpecName('CSS4 Media Queries', '#descdef-media-any-pointer', 'any-pointer')}}</td>
   <td>{{Spec2('CSS4 Media Queries')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.at-rules.media.any-pointer")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/CSS/@media/pointer">La caractéristique média <code>pointer</code></a></li>
</ul>
