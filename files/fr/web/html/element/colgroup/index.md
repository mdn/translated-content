---
title: '<colgroup> : l''élément regroupant des colonnes'
slug: Web/HTML/Element/colgroup
tags:
  - Element
  - HTML
  - HTML tabular data
  - Reference
  - Tables
  - Web
translation_of: Web/HTML/Element/colgroup
browser-compat: html.elements.colgroup
---
<div>{{HTMLRef}}</div>

<p>L'élément HTML <strong><code>&lt;colgroup&gt;</code></strong> définit un groupe de colonnes au sein d'un tableau.</p>

<div>{{EmbedInteractiveExample("pages/tabbed/colgroup.html","tabbed-taller")}}</div>

<table class="properties">
  <tbody>
    <tr>
      <th scope="row"><a href="/fr/docs/Web/Guide/HTML/Content_categories">Catégories de contenu</a></th>
      <td>Aucune.</td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>Si l'attribut <a href="#attr-span"><code>span</code></a> est présent : aucun car c'est un élément vide.<br>
      Si l'attribut n'est pas présent, zéro ou plusieurs éléments <a href="/fr/docs/Web/HTML/Element/col"><code>&lt;col&gt;</code></a>.</td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>La balise de début peut être absente si le premier élément fils est <a href="/fr/docs/Web/HTML/Element/col"><code>&lt;col&gt;</code></a> et que celui-ci n'est pas précédé par un élément <a href="/fr/docs/Web/HTML/Element/colgroup"><code>&lt;colgroup&gt;</code></a> dont la balise de fin est absente. La balise de fin peut être absente s'il n'est pas suivi par un blanc ou par un commentaire.</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>Un élément <a href="/fr/docs/Web/HTML/Element/table"><code>&lt;table&gt;</code></a>. <a href="/fr/docs/Web/HTML/Element/colgroup"><code>&lt;colgroup&gt;</code></a> doit apparaître après tout élément <a href="/fr/docs/Web/HTML/Element/caption"><code>&lt;caption&gt;</code></a> optionnel et avant tout élément <a href="/fr/docs/Web/HTML/Element/thead"><code>&lt;thead&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/th"><code>&lt;th&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/tbody"><code>&lt;tbody&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/tfoot"><code>&lt;tfoot&gt;</code></a> et <a href="/fr/docs/Web/HTML/Element/tr"><code>&lt;tr&gt;</code></a>.</td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">Pas de rôle correspondant</a></td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Aucun rôle autorisé.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td><a href="/fr/docs/Web/API/HTMLTableColElement"><code>HTMLTableColElement</code></a></td>
    </tr>
  </tbody>
 </table>

<h2 id="attributes">Attributs</h2>

<p>Comme pour tous les éléments, on peut utiliser <a href="/fr/docs/Web/HTML/Global_attributes">les attributs universels</a> sur cet élément.</p>

<dl>
  <dt><strong><code>span</code></strong></dt>
  <dd>Cet attribut contient un nombre entier positif indiquant le nombre de colonnes consécutives que l'élément <code>&lt;colgroup&gt;</code> couvre. S'il n'est pas présent, sa valeur par défaut est <code>1</code>.
    <div class="note">
      <p><strong>Note:</strong></p>
      <p>Cet attribut est appliqué sur les attributs du groupe de colonnes, il n'a aucun effet sur les règles de style CSS qui lui sont associées ni, a fortiori, sur les cellules des membres du groupe de la colonne.</p>
      <ul>
        <li>L'attribut <code>span</code> n'est pas autorisé s'il y a un ou plusieurs éléments <code>&lt;col&gt;</code> dans le <code>&lt;colgroup&gt;</code>.</li>
      </ul>
    </div>
  </dd>
 </dl>

<h3 id="deprecated_attributes">Attributs dépréciés</h3>

<p>Les attributs suivants sont dépréciés et ne doivent pas être utilisés. Ils sont documentés ci-dessous à titre de référence lors de la mise à jour du code existant et uniquement pour des raisons historiques.</p>

<dl>
  <dt><strong><code>align</code></strong> {{deprecated_inline}}</dt>
  <dd>Cet attribut de type énumératif indique comment l'alignement horizontal du contenu des cellules de chaque colonne sera traité. Les valeurs possibles sont :
    <ul>
      <li><code>left</code>, aligner le contenu à gauche de la cellule</li>
      <li><code>center</code>, centrer le contenu dans la cellule</li>
      <li><code>right</code>, aligner le contenu à droite de la cellule</li>
      <li><code>justify</code>, insérer des espaces dans le contenu textuel afin que le contenu soit justifié dans la cellule</li>
      <li><code>char</code>, aligner le contenu textuel sur un caractère spécial avec un décalage minimal, défini par les attributs <a href="/fr/docs/Web/HTML/Element/col#attr-char"><code>char</code></a> et <a href="/fr/docs/Web/HTML/Element/col#attr-charoff"><code>charoff</code></a>.</li>
    </ul>

    <p>Si cet attribut n'est pas défini, la valeur <code>left</code> est adoptée. Les éléments <a href="/fr/docs/Web/HTML/Element/col"><code>&lt;col&gt;</code></a> descendants peuvent remplacer cette valeur en utilisant leur propre attribut <a href="/fr/docs/Web/HTML/Element/col#attr-align"><code>align</code></a>.</p>

    <div class="note">
      <p><strong>Note :</strong></p>
      <ul>
        <li>N'essayez pas de définir la propriété <a href="/fr/docs/Web/CSS/text-align"><code>text-align</code></a> sur un sélecteur donnant un élément <a href="/fr/docs/Web/HTML/Element/colgroup"><code>&lt;colgroup&gt;</code></a>. Comme les éléments <a href="/fr/docs/Web/HTML/Element/td"><code>&lt;td&gt;</code></a> ne sont pas des descendants de l'élément <a href="/fr/docs/Web/HTML/Element/colgroup"><code>&lt;colgroup&gt;</code></a>, ils n'en hériteront pas.</li>
        <li>Si le tableau n'utilise pas d'attribut <a href="/fr/docs/Web/HTML/Element/td#attr-colspan">code>colspan</code></a>, utilisez un <code>td:nth-child(an+b)</code> sélecteur CSS par colonne, où a est le nombre total de colonnes du tableau et b est la position ordinale de cette colonne dans le tableau. Ce n'est qu'après ce sélecteur que la propriété <code>text-align</code> peut être utilisée.</li>
        <li>Si le tableau utilise bien un attribut <a href="/fr/docs/Web/HTML/Element/td#attr-colspan"><code>colspan</code></a>, l'effet peut être obtenu en combinant des sélecteurs d'attributs CSS adéquats comme <code>[colspan=n]</code>, bien que cela ne soit pas trivial.</li>
      </ul>
    </div>
  </dd>
  <dt><strong><code>bgcolor</code></strong> {{deprecated_inline}}</dt>
  <dd>
    <p>La couleur de fond du tableau. Il s'agit d'un <a href="/fr/docs/Web/CSS/color_value#rgb_colors">code RVB hexadécimal à 6 chiffres</a>, préfixé par un «&nbsp;<code>#</code>&nbsp;». L'un des <a href="/fr/docs/Web/CSS/color_value#color_keywords">mots-clés de couleur</a> prédéfinis peut également être utilisé.</p>

    <p>Pour obtenir un effet similaire, utilisez la propriété CSS <a href="/fr/docs/Web/CSS/background-color"><code>background-color</code></a>.</p>
  </dd>
  <dt><strong><code>char</code></strong> {{deprecated_inline}}</dt>
  <dd>Cet attribut spécifie l'alignement du contenu d'un groupe de colonnes sur un caractère. Les valeurs typiques de cet attribut comprennent un point (.) lorsqu'on tente d'aligner des chiffres ou des valeurs monétaires. Si <a href="#attr-align"><code>align</code></a> n'est pas défini sur <code>char</code>, cet attribut est ignoré, bien qu'il sera toujours utilisé comme valeur par défaut pour le <a href="/fr/docs/Web/HTML/Element/col#attr-align"><code>align</code></a> du <a href="/fr/docs/Web/HTML/Element/col"><code>&lt;col&gt;</code></a> qui sont membres de ce groupe de colonnes.</dd>
  <dt><strong><code>charoff</code></strong> {{deprecated_inline}}</dt>
  <dd>Cet attribut est utilisé pour indiquer le nombre de caractères pour décaler les données de la colonne par rapport au caractère d'alignement spécifié par l'attribut <code>char</code>.</dd>
  <dt><strong><code>valign</code></strong> {{deprecated_inline}}</dt>
  <dd>Cet attribut spécifie l'alignement vertical du texte dans chaque cellule de la colonne. Les valeurs possibles de cet attribut sont les suivantes :
    <ul>
      <li><code>baseline</code>, mettra le texte aussi près du bas de la cellule que possible, mais l'alignera sur la <a href="https://fr.wikipedia.org/wiki/Ligne_de_base_(typographie)">ligne de base</a> des caractères au lieu du bas de ceux-ci. Si les caractères sont tous de la même taille, cela a le même effet que <code>bottom</code> ;</li>
      <li><code>bottom</code>, placera le texte aussi près du bas de la cellule que possible ;</li>
      <li><code>middle</code>, permet de centrer le texte dans la cellule ;</li>
      <li>and <code>top</code>, placera le texte aussi près du haut de la cellule que possible.</li>
    </ul>

    <div class="note">
      <p><strong>Note :</strong></p>
      <ul>
        <li>N'essayez pas de définir la propriété <a href="/fr/docs/Web/CSS/vertical-align"><code>vertical-align</code></a> sur un sélecteur donnant un élément <code>&lt;col&gt;</code>. Comme les éléments <a href="/fr/docs/Web/HTML/Element/td"><code>&lt;td&gt;</code></a> ne sont pas des descendants de l'élément <code>&lt;col&gt;</code>, ils n'en hériteront pas.</li>
        <li>Si le tableau n'utilise pas d'attribut <a href="/fr/docs/Web/HTML/Element/td#attr-colspan"><code>colspan</code></a>, utilisez le sélecteur CSS <code>td:nth-child(an+b)</code> où a est le nombre total de colonnes du tableau et b la position ordinale de la colonne dans le tableau. Ce n'est qu'après ce sélecteur que la propriété <code>vertical-align</code> peut être utilisée.</li>
        <li>Si le tableau utilise bien un attribut <a href="/fr/docs/Web/HTML/Element/td#attr-colspan"><code>colspan</code></a>, l'effet peut être obtenu en combinant des sélecteurs d'attributs CSS adéquats comme <code>[colspan=n]</code>, bien que cela ne soit pas trivial.</li>
      </ul>
    </div>
  </dd>
</dl>

<h2 id="examples">Exemples</h2>

<p>Veuillez consulter la page <a href="/fr/docs/Web/HTML/Element/table"><code>&lt;table&gt;</code></a> pour des exemples sur <code>&lt;colgroup&gt;</code>.</p>

<h2 id="specifications">Spécifications</h2>

<p>{{Specifications}}</p>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat}}</p>

<h2 id="see_also">Voir aussi</h2>

<ul>
  <li>Les propriétés et pseudo-classes CSS notamment utiles pour mettre en forme l'élément <code>&lt;col&gt;</code> :
   <ul>
     <li>la propriété <a href="/fr/docs/Web/CSS/width"><code>width</code></a> pour contrôler la largeur de la colonne ;</li>
     <li>la pseudo-classe <a href="/fr/docs/Web/CSS/:nth-child"><code>:nth-child</code></a> pour définir l'alignement des cellules de la colonne ;</li>
     <li>la propriété <a href="/fr/docs/Web/CSS/text-align"><code>text-align</code></a> pour aligner le contenu de toutes les cellules sur le même caractère, comme « . ».</li>
   </ul>
  </li>
</ul>
