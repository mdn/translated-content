---
title: dir
slug: Web/HTML/Global_attributes/dir
tags:
  - Attribut
  - Attribut universel
  - HTML
  - Reference
translation_of: Web/HTML/Global_attributes/dir
original_slug: Web/HTML/Attributs_universels/dir
---
<div>{{HTMLSidebar("Global_attributes")}}</div>

<p>L'<a href="/fr/docs/Web/HTML/Attributs_universels">attribut universel</a> <code><strong>dir</strong></code> est un attribut à valeur contrainte qui indique la direction du texte contenu dans l'élément.</p>

<div>{{EmbedInteractiveExample("pages/tabbed/attribute-dir.html","tabbed-standard")}}</div>

<p>Les valeurs autorisées pour cet attribut sont :</p>

<ul>
 <li><code>ltr</code> : qui signifie <em>left to right </em>(gauche à droite), utilisé pour les langages écrits de gauche à droite (comme le français ou l'anglais par exemple)</li>
 <li><code>rtl</code> : qui signifie <em>right to left</em> (droite à gauche), utilisé pour les langages écrits de droite à gauche (comme l'arabe par exemple)</li>
 <li><code>auto</code> : qui délègue la décision à l'agent utilisateur. L'algorithme utilisé est relativement simple : le contenu textuel est analysé et lorsque le premier caractère possédant une direction « forte » est rencontré, cette direction est prise pour l'ensemble de l'élément.</li>
</ul>

<div class="note">
<p><strong>Note :</strong> Cet attribut est obligatoire pour l'élément {{HTMLElement("bdo")}}, pour lequel l'attribut a une sémantique différente.</p>

<ul>
 <li>
  <p>La valeur de l'attribut n'est pas héritée par l'élément {{HTMLElement("bdi")}}. S'il n'est pas défini, la valeur par défaut sera <code>auto</code>.</p>
 </li>
 <li>
  <p>Cet attribut peut être surchargé par les propriétés CSS {{cssxref("direction")}} et {{cssxref("unicode-bidi")}}, (qui sont appliquées si une page CSS est active et que l'élément courant prend en charge ces propriétés).</p>
 </li>
 <li>
  <p>La direction du texte est généralement liée à la sémantique du contenu et non à sa présentation. Il est donc recommandé d'utiliser cet attribut plutôt que des propriétés CSS quand la direction n'est pas lié à une quelconque mise en forme. Ainsi, le texte sera affiché correctement, y compris si le navigateur ne supporte pas ces propriétés CSS ou si CSS est désactivé.</p>
 </li>
 <li>
  <p>La valeur <code>auto</code> doit être utilisée pour des données dont la direction est inconnue (comme par exemple des données provenant d'une saisie utilisateur).</p>
 </li>
</ul>
</div>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', "dom.html#the-dir-attribute", "dir")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>Aucun changement depuis la dernière dérivation, {{SpecName('HTML5.1')}}</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5.1', "dom.html#the-dir-attribute", "dir")}}</td>
   <td>{{Spec2('HTML5.1')}}</td>
   <td>Dérivée de {{SpecName('HTML WHATWG')}}, aucun changement de {{SpecName('HTML5 W3C')}}</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', "dom.html#the-dir-attribute", "dir")}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td>Dérivée de {{SpecName('HTML WHATWG')}}, à partir de {{SpecName('HTML4.01')}} la valeur <code>auto</code> a été ajoutée et l'attribut est un attribut global à part entière.</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML4.01', "dirlang.html#h-8.2", "dir")}}</td>
   <td>{{Spec2('HTML4.01')}}</td>
   <td>Attribut pris en charge pour tous les éléments à l'exception {{HTMLElement("applet")}}, {{HTMLElement("base")}}, {{HTMLElement("basefont")}}, {{HTMLElement("bdo")}}, {{HTMLElement("br")}}, {{HTMLElement("frame")}}, {{HTMLElement("frameset")}}, {{HTMLElement("iframe")}}, {{HTMLElement("param")}}, et {{HTMLElement("script")}}.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("html.global_attributes.dir")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/HTML/Attributs_universels">Les différents attributs universels</a></li>
 <li>La propriété {{domxref("HTMLElement.dir")}} qui reflète cet attribut</li>
</ul>
