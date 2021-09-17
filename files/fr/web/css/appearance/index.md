---
title: appearance (-moz-appearance, -webkit-appearance)
slug: Web/CSS/appearance
tags:
  - '-moz-appearance'
  - '-webkit-appearance'
  - CSS
  - CSS Basic User Interface
  - CSS Property
  - Reference
  - appearance
  - recipe:css-property
translation_of: Web/CSS/appearance
browser-compat: css.properties.appearance
---
<div>{{CSSRef}}</div>

<p>La propriété <strong><code>-moz-appearance</code></strong> est utilisée dans Gecko (Firefox) afin d'afficher un élément en utilisant la mise en forme native du système d'exploitation.</p>

<p>La propriété <strong><code>-webkit-appearance</code></strong> est utilisée dans les navigateurs basés sur WebKit (c'est-à-dire Safari) et sur Blink (c'est-à-dire Chrome ou Opera) et permet d'avoir la même fonctionnalités. On notera que plusieurs navigateurs, non basés sur WebKit (Firefox et Edge par exemple), prennent en charge ce préfixe pour des raisons de compatibilité web.</p>

<div>{{EmbedInteractiveExample("pages/css/appearance.html")}}</div>

<p>Cette propriété était utilisée dans les feuilles de style XUL afin de mettre en forme des <em>widgets</em> utilisant la mise en forme de la plateforme utilisée. Elle est également utilisée dans les implémentations XBL pour les <em>widgets</em> livrés avec les logiciels Mozilla.</p>

<div class="note">
<p><strong>Note :</strong><em> Cette propriété doit être utilisée avec beaucoup d'attention sur les sites web.</em> Son comportement peut varier d'un navigateur à l'autre bien que ces variations aient réduit avec le temps. Le mot-clé <code>none</code> peut avoir un comportement différent d'une plateforme à une autre et d'autres mots-clés ne sont pas pris en charge.</p>
</div>

<h2 id="syntax">Syntaxe</h2>

<pre class="brush: css">/* Valeurs spécifiées par le module CSS Basic User Interface de niveau 4 */
appearance: none;
appearance: auto;
appearance: menulist-button;
appearance: textfield;

/* Valeurs ayant le même effet que 'auto' */
appearance: button;
appearance: searchfield;
appearance: textarea;
appearance: push-button;
appearance: slider-horizontal;
appearance: checkbox;
appearance: radio;
appearance: square-button;
appearance: menulist;
appearance: listbox;
appearance: meter;
appearance: progress-bar;

/* Liste partielle des valeurs disponibles pour Gecko */
-moz-appearance: scrollbarbutton-up;
-moz-appearance: button-bevel;

/* Liste partielle des valeurs disponibles pour WebKit/Blink (ainsi que pour Gecko et Edge) */
-webkit-appearance: media-mute-button;
-webkit-appearance: caret;
</pre>

<h3 id="values">Valeurs</h3>

<h4 id="standard_keywords">Mots-clés standard</h4>

<table class="standard-table">
 <tbody>
  <tr>
   <th>Valeur</th>
   <th>Navigateur</th>
   <th>Description</th>
  </tr>
  <tr>
   <td><code>none</code></td>
   <td>Firefox Chrome Safari Edge</td>
   <td>Aucune mise en forme particulière n'est appliquée. C'est la valeur par défaut.</td>
  </tr>
  <tr>
   <td><code>auto</code></td>
   <td>Firefox Chrome</td>
   <td>L'agent utilisateur sélectionne la mise en forme spécifique appropriée en fonction de l'élément. Cette valeur agira comme <code>none</code> pour les éléments sans mise en forme spéciale.</td>
  </tr>
  <tr>
   <td><code>menulist-button</code></td>
   <td>Firefox Chrome Safari Edge</td>
   <td>L'élément est mis en forme comme un bouton qui indiquerait qu'un menu pourrait être ouvert.</td>
  </tr>
  <tr>
   <td><code>textfield</code></td>
   <td>Firefox Chrome Safari Edge</td>
   <td></td>
  </tr>
  <tr>
   <td colspan="3">Les valeurs suivantes sont traitées de façon équivalente à <code>auto</code>:</td>
  </tr>
  <tr>
   <td><code>button</code></td>
   <td>Firefox Chrome Safari Edge</td>
   <td>L'élément est dessiné comme un bouton.</td>
  </tr>
  <tr>
   <td><code>checkbox</code></td>
   <td>Firefox Chrome Safari Edge</td>
   <td>L'élément est dessiné comme une case à cocher (et n'inclut que la case à cocher).</td>
  </tr>
  <tr>
   <td><code>listbox</code></td>
   <td>Firefox Chrome Safari Edge</td>
   <td></td>
  </tr>
  <tr>
   <td><code>menulist</code></td>
   <td>Firefox Chrome Safari Edge</td>
   <td></td>
  </tr>
  <tr>
   <td><code>meter</code></td>
   <td>Chrome Safari Firefox</td>
   <td></td>
  </tr>
  <tr>
   <td><code>progress-bar</code></td>
   <td>Chrome Safari Firefox</td>
   <td></td>
  </tr>
  <tr>
   <td><code>push-button</code></td>
   <td>Chrome Safari Edge</td>
   <td></td>
  </tr>
  <tr>
   <td><code>radio</code></td>
   <td>Firefox Chrome Safari Edge</td>
   <td>L'élément est dessiné comme un bouton radio (et n'inclut que la portion liée au « bouton radio »).</td>
  </tr>
  <tr>
   <td><code>searchfield</code></td>
   <td>Firefox Chrome Safari Edge</td>
   <td></td>
  </tr>
  <tr>
   <td><code>slider-horizontal</code></td>
   <td>Chrome Safari Edge</td>
   <td></td>
  </tr>
  <tr>
   <td><code>square-button</code></td>
   <td>Chrome Safari Edge</td>
   <td></td>
  </tr>
  <tr>
   <td><code>textarea</code></td>
   <td>Firefox Chrome Safari Edge</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h4 id="non-standard_keywords">Mots-clés non-standards</h4>

<p>Les valeurs suivantes sont uniquement implémentées pour l'une ou l'autre des propriétés préfixées mais pas pour la propriété standard <strong><code>appearance</code></strong>.</p>

<table class="standard-table">
 <tbody>
  <tr>
   <th>Valeur</th>
   <th>Navigateur</th>
   <th>Description</th>
  </tr>
  <tr>
   <td><code>attachment</code></td>
   <td>Safari</td>
   <td></td>
  </tr>
  <tr>
   <td><code>borderless-attachment</code></td>
   <td>Safari</td>
   <td></td>
  </tr>
  <tr>
   <td><code>button-bevel</code></td>
   <td>Firefox Chrome Safari Edge</td>
   <td></td>
  </tr>
  <tr>
   <td><code>caps-lock-indicator</code></td>
   <td>Safari Edge</td>
   <td></td>
  </tr>
  <tr>
   <td><code>caret</code></td>
   <td>Firefox Chrome Safari Edge</td>
   <td></td>
  </tr>
  <tr>
   <td><code>checkbox-container</code></td>
   <td>Firefox</td>
   <td>L'élément est dessiné comme le conteneur d'une case à cocher. Il pourra inclure un effet d'arrière-plan sur certaines plateformes. Normalement, il devrait contenir un libellé et une case à cocher.</td>
  </tr>
  <tr>
   <td><code>checkbox-label</code></td>
   <td>Firefox</td>
   <td></td>
  </tr>
  <tr>
   <td><code>checkmenuitem</code></td>
   <td>Firefox</td>
   <td></td>
  </tr>
  <tr>
   <td><code>color-well</code></td>
   <td>Safari</td>
   <td><code>input type=color</code></td>
  </tr>
  <tr>
   <td><code>continuous-capacity-level-indicator</code></td>
   <td>Safari</td>
   <td></td>
  </tr>
  <tr>
   <td><code>default-button</code></td>
   <td>Safari Edge</td>
   <td></td>
  </tr>
  <tr>
   <td><code>discrete-capacity-level-indicator</code></td>
   <td>Safari</td>
   <td></td>
  </tr>
  <tr>
   <td><code>inner-spin-button</code></td>
   <td>Firefox Chrome Safari</td>
   <td></td>
  </tr>
  <tr>
   <td><code>image-controls-button</code></td>
   <td>Safari</td>
   <td></td>
  </tr>
  <tr>
   <td><code>list-button</code></td>
   <td>Safari</td>
   <td>datalist</td>
  </tr>
  <tr>
   <td><code>listitem</code></td>
   <td>Firefox Chrome Safari Edge</td>
   <td></td>
  </tr>
  <tr>
   <td><code>media-enter-fullscreen-button</code></td>
   <td>Chrome Safari</td>
   <td></td>
  </tr>
  <tr>
   <td><code>media-exit-fullscreen-button</code></td>
   <td>Chrome Safari</td>
   <td></td>
  </tr>
  <tr>
   <td><code>media-fullscreen-volume-slider</code></td>
   <td>Safari</td>
   <td></td>
  </tr>
  <tr>
   <td><code>media-fullscreen-volume-slider-thumb</code></td>
   <td>Safari</td>
   <td></td>
  </tr>
  <tr>
   <td><code>media-mute-button</code></td>
   <td>Chrome Safari Edge</td>
   <td></td>
  </tr>
  <tr>
   <td><code>media-play-button</code></td>
   <td>Chrome Safari Edge</td>
   <td></td>
  </tr>
  <tr>
   <td><code>media-overlay-play-button</code></td>
   <td>Chrome Safari</td>
   <td></td>
  </tr>
  <tr>
   <td><code>media-return-to-realtime-button</code></td>
   <td>Safari</td>
   <td></td>
  </tr>
  <tr>
   <td><code>media-rewind-button</code></td>
   <td>Safari</td>
   <td></td>
  </tr>
  <tr>
   <td><code>media-seek-back-button</code></td>
   <td>Safari Edge</td>
   <td></td>
  </tr>
  <tr>
   <td><code>media-seek-forward-button</code></td>
   <td>Safari Edge</td>
   <td></td>
  </tr>
  <tr>
   <td><code>media-toggle-closed-captions-button</code></td>
   <td>Chrome Safari</td>
   <td></td>
  </tr>
  <tr>
   <td><code>media-slider</code></td>
   <td>Chrome Safari Edge</td>
   <td></td>
  </tr>
  <tr>
   <td><code>media-sliderthumb</code></td>
   <td>Chrome Safari Edge</td>
   <td></td>
  </tr>
  <tr>
   <td><code>media-volume-slider-container</code></td>
   <td>Chrome Safari</td>
   <td></td>
  </tr>
  <tr>
   <td><code>media-volume-slider-mute-button</code></td>
   <td>Safari</td>
   <td></td>
  </tr>
  <tr>
   <td><code>media-volume-slider</code></td>
   <td>Chrome Safari</td>
   <td></td>
  </tr>
  <tr>
   <td><code>media-volume-sliderthumb</code></td>
   <td>Chrome Safari</td>
   <td></td>
  </tr>
  <tr>
   <td><code>media-controls-background</code></td>
   <td>Chrome Safari</td>
   <td></td>
  </tr>
  <tr>
   <td><code>media-controls-dark-bar-background</code></td>
   <td>Safari</td>
   <td></td>
  </tr>
  <tr>
   <td><code>media-controls-fullscreen-background</code></td>
   <td>Chrome Safari</td>
   <td></td>
  </tr>
  <tr>
   <td><code>media-controls-light-bar-background</code></td>
   <td>Safari</td>
   <td></td>
  </tr>
  <tr>
   <td><code>media-current-time-display</code></td>
   <td>Chrome Safari</td>
   <td></td>
  </tr>
  <tr>
   <td><code>media-time-remaining-display</code></td>
   <td>Chrome Safari</td>
   <td></td>
  </tr>
  <tr>
   <td><code>menulist-text</code></td>
   <td>Firefox Chrome Safari Edge</td>
   <td></td>
  </tr>
  <tr>
   <td><code>menulist-textfield</code></td>
   <td>Firefox Chrome Safari Edge</td>
   <td>L'élément est mis en forme comme le champ texte d'une liste de menu (non implémenté sur Windows).</td>
  </tr>
  <tr>
   <td><code>meterbar</code></td>
   <td>Firefox</td>
   <td>On utilisera <code>meter</code> à la place.</td>
  </tr>
  <tr>
   <td><code>number-input</code></td>
   <td>Firefox</td>
   <td></td>
  </tr>
  <tr>
   <td><code>progress-bar-value</code></td>
   <td>Chrome Safari</td>
   <td></td>
  </tr>
  <tr>
   <td><code>progressbar</code></td>
   <td>Firefox</td>
   <td>Cet élément est mis en forme comme une barre de progression, aussi, on utilisera <code>progress-bar</code> à la place.</td>
  </tr>
  <tr>
   <td><code>progressbar-vertical</code></td>
   <td>Firefox</td>
   <td></td>
  </tr>
  <tr>
   <td><code>range</code></td>
   <td>Firefox</td>
   <td></td>
  </tr>
  <tr>
   <td><code>range-thumb</code></td>
   <td>Firefox</td>
   <td></td>
  </tr>
  <tr>
   <td><code>rating-level-indicator</code></td>
   <td>Safari</td>
   <td></td>
  </tr>
  <tr>
   <td><code>relevancy-level-indicator</code></td>
   <td>Safari</td>
   <td></td>
  </tr>
  <tr>
   <td><code>scale-horizontal</code></td>
   <td>Firefox</td>
   <td></td>
  </tr>
  <tr>
   <td><code>scalethumbend</code></td>
   <td>Firefox</td>
   <td></td>
  </tr>
  <tr>
   <td><code>scalethumb-horizontal</code></td>
   <td>Firefox</td>
   <td></td>
  </tr>
  <tr>
   <td><code>scalethumbstart</code></td>
   <td>Firefox</td>
   <td></td>
  </tr>
  <tr>
   <td><code>scalethumbtick</code></td>
   <td>Firefox</td>
   <td></td>
  </tr>
  <tr>
   <td><code>scalethumb-vertical</code></td>
   <td>Firefox</td>
   <td></td>
  </tr>
  <tr>
   <td><code>scale-vertical</code></td>
   <td>Firefox</td>
   <td></td>
  </tr>
  <tr>
   <td><code>scrollbarthumb-horizontal</code></td>
   <td>Firefox</td>
   <td></td>
  </tr>
  <tr>
   <td><code>scrollbarthumb-vertical</code></td>
   <td>Firefox</td>
   <td></td>
  </tr>
  <tr>
   <td><code>scrollbartrack-horizontal</code></td>
   <td>Firefox</td>
   <td></td>
  </tr>
  <tr>
   <td><code>scrollbartrack-vertical</code></td>
   <td>Firefox</td>
   <td></td>
  </tr>
  <tr>
   <td><code>searchfield-decoration</code></td>
   <td>Safari Edge</td>
   <td></td>
  </tr>
  <tr>
   <td><code>searchfield-results-decoration</code></td>
   <td>Chrome Safari Edge</td>
   <td>(Fonctionne sur Chrome 51 sur Windows 7)</td>
  </tr>
  <tr>
   <td><code>searchfield-results-button</code></td>
   <td>Safari Edge</td>
   <td></td>
  </tr>
  <tr>
   <td><code>searchfield-cancel-button</code></td>
   <td>Chrome Safari Edge</td>
   <td></td>
  </tr>
  <tr>
   <td><code>snapshotted-plugin-overlay</code></td>
   <td>Safari</td>
   <td></td>
  </tr>
  <tr>
   <td><code>sheet</code></td>
   <td>None</td>
   <td></td>
  </tr>
  <tr>
   <td><code>slider-vertical</code></td>
   <td>Chrome Safari Edge</td>
   <td></td>
  </tr>
  <tr>
   <td><code>sliderthumb-horizontal</code></td>
   <td>Chrome Safari Edge</td>
   <td></td>
  </tr>
  <tr>
   <td><code>sliderthumb-vertical</code></td>
   <td>Chrome Safari Edge</td>
   <td></td>
  </tr>
  <tr>
   <td><code>textfield-multiline</code></td>
   <td>Firefox</td>
   <td>On utilisera <code>textarea</code> à la place.</td>
  </tr>
  <tr>
   <td><code>-apple-pay-button</code></td>
   <td>Safari</td>
   <td><strong>iOS et macOS uniquement</strong>. Disponible pour le Web à partir de iOS 10.1 et macOS 10.12.1</td>
  </tr>
 </tbody>
</table>

<h3 id="formal_syntax">Syntaxe formelle</h3>

{{CSSSyntax}}

<h2 id="examples">Exemples</h2>

<p>La règle suivante permet que l'élément ait l'apparence d'un bouton d'une barre d'outils :</p>

<pre class="brush: css">.exempleun {
  appearance: toolbarbutton;
  -moz-appearance: toolbarbutton;
  -webkit-appearance: toolbarbutton;
}
</pre>

<p>Voir également <a href="https://jsfiddle.net/go392m5s/">cet exemple JSFiddle</a> qui illustre comment utiliser <code>appearance: none</code> afin d'appliquer une mise en forme spécifique aux boutons radio et aux cases à cocher.</p>

<h2 id="specifications">Spécifications</h2>

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
   <td>{{SpecName('CSS3 Basic UI', "#appearance-switching", "appearance")}}</td>
   <td>{{Spec2('CSS3 Basic UI')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat}}</p>

<h2 id="see_also">Voir aussi</h2>

<ul>
 <li><a href="https://www.w3.org/TR/2004/CR-css3-ui-20040511/#appearance">Définition de <code>appearance</code> dans la recommandation CSS 3 Basic User Interface</a> (<em>Candidate Recommendation</em> du 11 mai 2004), qui n'est plus à jour</li>
 <li><a href="https://wiki.csswg.org/spec/css4-ui#dropped-css3-features">Les fonctionnalités abandonnées pour la spécification CSS3 sur le module d'interface utilisateur</a></li>
</ul>
