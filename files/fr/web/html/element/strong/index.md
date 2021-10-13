---
title: '<strong> : l''élément de haute importance'
slug: Web/HTML/Element/strong
tags:
  - Element
  - HTML
  - Reference
  - Web
translation_of: Web/HTML/Element/strong
---
<div>{{HTMLRef}}</div>

<p>L'élément HTML <strong><code>&lt;strong&gt;</code></strong> indique que le texte a une importance particulière ou un certain sérieux voire un caractère urgent. Cela se traduit généralement par un affichage en gras.</p>

<div>{{EmbedInteractiveExample("pages/tabbed/strong.html", "tabbed-shorter")}}</div>

<h2 id="Attributs">Attributs</h2>

<p>Cet élément inclut uniquement <a href="/fr/docs/Web/HTML/Attributs_universels">les attributs universels</a>.</p>

<h2 id="Notes_d'utilisation">Notes d'utilisation</h2>

<p>L'élément <code>&lt;strong&gt;</code> indique un contenu de haute importance, y compris lorsqu'il s'agit de choses graves ou urgentes (telles que des messages d'avertissement par exemple). Il peut s'agir d'une certaine phrase au sein d'une page ou bien de quelques mots d'une importance particulière par rapport au contenu environnant.</p>

<p>Cet élément se traduit généralement par l'affichage du texte en gras. Toutefois, il ne doit pas être utilisé à des fins stylistiques. Pour cela, on pourra utiliser la propriété CSS {{cssxref("font-weight")}}. De plus, on pourra utiliser l'élément {{HTMLElement("b")}} afin d'attirer l'attention sur une portion de texte qui ne possède pas un niveau d'importance particulier ou l'élément {{HTMLElement("em")}} si on souhaite marquer un texte avec de l'emphase.</p>

<p>Il est également possible d'utiliser <code>&lt;strong&gt;</code> pour les en-têtes de paragraphes qui représentent des notes ou des avertissements au sein d'une page.</p>

<h3 id="&lt;b>_ou_&lt;strong>"><code>&lt;b&gt;</code> ou <code>&lt;strong&gt;</code> ?</h3>

<p>Les développeurs qui débutent se demandent souvent pourquoi il y a autant de manières pour s'exprimer alors que cela aura le même rendu final. Les éléments bold (<code>&lt;b&gt;</code>) et <code>&lt;strong&gt;</code> sont peut-être les plus difficiles à distinguer. Il est vrai que taper <code>&lt;b&gt; &lt;/b&gt;</code> est beaucoup plus rapide et permet d'arriver exactement au même résultat…</p>

<p>Sauf que ce n'est pas le même résultat ! <code>&lt;strong&gt;</code> représente une logique (apporte une différence sémantique), alors que <code>&lt;bold&gt;</code> ne représente qu'une mise en forme (l'apparence). Séparer la forme de la sémantique est important et permet éventuellement de représenter cette même sémantique d'une certaine manière, que ce soit en gras, en rouge, souligné ou encore avec une autre taille de police. Changer le style (la présentation) de <code>&lt;strong&gt;</code> est pertinent, contrairement à <code>&lt;b&gt;</code>. <code>&lt;b&gt;</code> représente un élément de présentation et représente du texte en gras, changer son style pour que le texte apparaisse en autre chose qu'en gras serait illogique et source de confusions.</p>

<p>Il est important de savoir que <code>&lt;b&gt;&lt;/b&gt;</code> ne doit pas être utilisé, à part dans le cas où l'on souhaite attirer l'attention du lecteur sans pour autant augmenter l'importance du texte.</p>

<h3 id="&lt;em>_ou_&lt;strong>"><code>&lt;em&gt;</code> ou <code>&lt;strong&gt;</code> ?</h3>

<p>En HTML 4, <code>&lt;strong&gt;</code> indiquait simplement une emphase plus forte. En HTML5, l'élément représente une « importance forte » de son contenu. Il est important de faire la différence. L'emphase (<code>&lt;em&gt;</code> étant l'élément HTML équivalent) permet de changer le sens d'une phrase : par exemple :  « J'<em>adore</em> les licornes » et « J'adore les <em>licornes</em> ». <code>&lt;strong&gt;</code> est utilisé pour augmenter l'importance de certaines portions de phrases : «<strong> Attention !</strong> C'est <strong>très dangereux</strong> ».  <code>&lt;strong&gt;</code> et <code>&lt;em&gt;</code> peuvent être imbriqués pour augmenter relativement l'importance ou l'emphase d'un texte.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p&gt;
  Avant de faire le truc X il est
  &lt;strong&gt;nécessaire&lt;/strong&gt; de
  faire le truc Y avant.
&lt;/p&gt;
</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemples","100%","150")}}</p>
<h2 id="Résumé_technique">Résumé technique</h2>
<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><dfn><a href="/fr/docs/Web/HTML/Catégorie_de_contenu">Catégories de contenu</a></dfn></th>
   <td><a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux">Contenu de flux</a>, <a href="/fr/docs/Web/HTML/Cat%C3%A9gorie_de_contenu#Contenu_phras.C3.A9">contenu phrasé</a>, <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_tangible">contenu tangible</a>.</td>
  </tr>
  <tr>
   <th scope="row">Contenu autorisé</th>
   <td><a href="/fr/docs/Web/HTML/Cat%C3%A9gorie_de_contenu#Contenu_phras.C3.A9">Contenu phrasé</a>.</td>
  </tr>
  <tr>
   <th scope="row">Omission de balises</th>
   <td>Aucune, cet élément doit avoir une balise ouvrante et une balise fermante.</td>
  </tr>
  <tr>
   <th scope="row">Parents autorisés</th>
   <td>Tout élément acceptant du <a href="/fr/docs/Web/HTML/Cat%C3%A9gorie_de_contenu#Contenu_phras.C3.A9">contenu phrasé</a> ou tout élément acceptant du <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux">contenu de flux</a>.</td>
  </tr>
  <tr>
   <th scope="row">Rôles ARIA autorisés</th>
   <td>Tous les rôles sont autorisés.</td>
  </tr>
  <tr>
   <th scope="row">Interface DOM</th>
   <td>{{domxref("HTMLElement")}}. Auparavant et jusqu'à Gecko 1.9.2 (Firefox 4) inclus, Firefox implémente l'interface {{domxref("HTMLSpanElement")}} pour cet élément</td>
  </tr>
 </tbody>
</table>

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
   <td>{{SpecName('HTML WHATWG', 'semantics.html#the-strong-element', '&lt;strong&gt;')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', 'text-level-semantics.html#the-strong-element', '&lt;strong&gt;')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('HTML4.01', 'struct/text.html#edef-STRONG', '&lt;strong&gt;')}}</td>
   <td>{{Spec2('HTML4.01')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("html.elements.strong")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{HTMLElement("b")}}</li>
 <li>{{HTMLElement("em")}}</li>
 <li>La propriété {{cssxref("font-weight")}}</li>
</ul>
