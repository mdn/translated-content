---
title: number
slug: Web/XSLT/Element/number
tags:
- Référence_XSLT
translation_of: Web/XSLT/Element/number
original_slug: Web/XSLT/number
---
<p>{{ XsltRef() }}</p>
<p>L'élément <code>&lt;xsl:number&gt;</code> compte des éléments de façon séquentielle. Il peut également être utilisé
  pour formater rapidement un nombre.</p>

<h3 id="Syntaxe"> Syntaxe </h3>
<pre>&lt;xsl:number
  count=EXPRESSION
  level="single" | "multiple" | "any"
  from=EXPRESSION
  value=EXPRESSION
  format=FORMAT-CHAÎNE
  lang=XML:CODE-LANG
  letter-value="alphabetic" | "traditional"
  grouping-separator=CARACTÈRE
  grouping-size=NOMBRE  /&gt;</pre>

<h3 id="Attributs_obligatoires"> Attributs obligatoires </h3>

<p>Aucun.</p>

<h3 id="Attributs_optionnels"> Attributs optionnels </h3>

<dl>
  <dt><code>count</code></dt>
  <dd>Définit les éléments devant être numérotés de façon séquentielle dans l'arbre source. Il utilise une expression
    XPath.</dd>
  <dt><code>level</code></dt>
  <dd>
    <p>Définit la manière dont les niveaux de l'arbre source doivent pris en compte lors de la génération des
      nombres séquentiels. Les trois valeurs possibles sont : <code>single</code>, <code>multiple</code> et
      <code>any</code>. La valeur par défaut est <code>single</code> :</p>
    <dl>
      <dt><code>single</code></dt>
      <dd>Numérote de façon séquentielle les nœuds descendants d'un même parent, à la manière des éléments d'une
        liste. Le processeur va au premier nœud dans l'axe <a
          href="fr/XPath/Axes/ancestor-or-self"><code>ancestor-or-self</code></a> qui correspond à l'attribut
        <code>count</code>, puis compte ce nœud ainsi que tous les nœuds précédents issus de son parent (il
        s'arrête lorsqu'il rencontre une référence à l'attribut <code>from</code>, si il en trouve une) qui
        correspond également à l'attribut <code>count</code>. Si aucune correspondance n'est trouvée, la
        séquence produite sera une liste vide.
      </dd>
      <dt><code>multiple</code></dt>
      <dd>Numérote les nœuds avec une séquence composite qui reflète la position hiérarchique du nœud, par exemple
        1.2.2.5. (le format peut être défini avec l'attribut <code>format</code>, par exemple A.1.1). Le
        processeur vérifie tous les <a href="fr/XPath/Axes/ancestor"><code>ancestors</code></a> du nœud courant
        ainsi que le nœud lui-même, il s'arrête lorsqu'il rencontre une correspondance avec l'attribut
        <code>from</code>, si il y en a une. Pour chaque nœud de la liste qui vérifie l'attribut
        <code>count</code>, le processeur compte combien il possède de frères vérifiant également cet attribut,
        et ajoute un pour le nœud lui-même. Si aucune correspondance n'est trouvée, la séquence produite sera
        une liste vide.
      </dd>
      <dt><code>any</code> (Non supporté à l'heure actuelle)</dt>
      <dd>Numérote tous les nœuds vérifiant <code>count</code> de façon séquentielle, sans considération de
        niveau. Les axes <a href="fr/XPath/Axes/ancestor"><code>ancestor</code></a>, <a
          href="fr/XPath/Axes/self"><code>self</code></a> et <a
          href="fr/XPath/Axes/preceding"><code>preceding</code></a> sont tous pris en compte. Le processeur
        débute au nœud courant et continue dans l'ordre inverse du document, s'arrêtant s'il rencontre une
        correspondance avec un attribut <code>from</code>. Si aucune correspondance avec l'attribut
        <code>count</code> n'est trouvé,e la séquence produite sera une liste vide. Ce niveau n'est pas supporté
        à l'heure actuelle.
      </dd>
    </dl>
  </dd>
  <dt>from</dt>
  <dd>Définit l'endroit où la numérotation doit débuter. La séquence débute avec le premier descendant du nœud
    vérifiant l'attribut <code>from</code>.</dd>
  <dt>value</dt>
  <dd>Applique un format donné à un nombre. C'est un moyen rapide de formater un nombre fourni par l'utilisateur dans
    un des formats standards de <code>&lt;xsl:number&gt;</code>.</dd>
  <dt>format</dt>
  <dd>
    <p>Définit le format du nombre généré :</p>
    <dl>
      <dt>format="1"</dt>
      <dd> &lt;tt&gt;1 2 3 …&lt;/tt&gt; (C'est le seul format supporté à ce jour)</dd>
      <dt>format="01"</dt>
      <dd> &lt;tt&gt;01 02 03 … 09 10 11 …&lt;/tt&gt;</dd>
      <dt>format="a"</dt>
      <dd> &lt;tt&gt;a b c … y z aa ab …&lt;/tt&gt;</dd>
      <dt>format="A"</dt>
      <dd> &lt;tt&gt;A B C … Y Z AA AB …&lt;/tt&gt;</dd>
      <dt>format="i"</dt>
      <dd> &lt;tt&gt;i ii iii iv v …&lt;/tt&gt;</dd>
      <dt>format="I"</dt>
      <dd> &lt;tt&gt;I II III IV V …&lt;/tt&gt;</dd>
    </dl>
  </dd>
  <dt>lang (Non supporté à l'heure actuelle)</dt>
  <dd>Définit les alphabets pouvant être utilisés pour les formats de numérotation basés sur les lettres.</dd>
  <dt>letter-value</dt>
  <dd>Permet de lever l'ambiguïté sur les séquences numérotées qui utilisent des lettres. Certaines langues possèdent
    plus d'un système de numérotation utilisant les lettres. Si deux systèmes commencent avec le même glyphe, il
    peut y avoir une ambiguïté. Ce attribut peut avoir la valeur <code>alphabetic</code> ou
    <code>traditional</code>. La valeur par défaut est <code>alphabetic</code>.
  </dd>
  <dt>grouping-separator</dt>
  <dd>Définit le caractère devant être utilisé pour les séparations des groupes (par exemple, le séparateur des
    milliers). Le caractère par défaut est la virgule (<code>,</code>).</dd>
  <dt>grouping-size</dt>
  <dd>Définit le nombre de chiffres formant un groupe. La valeur par défaut est <code>3</code>.</dd>
</dl>

<h3 id="Type"> Type </h3>

<p>Instruction, apparaît dans un modèle.</p>

<h3 id="D.C3.A9finition"> Définition </h3>

<p><a href="http://www.w3.org/TR/xslt#number">XSLT 1.0, section 7.7</a>.</p>

<h3 id="Support_Gecko"> Support Gecko </h3>

<p>Support partiel. Voir les commentaires ci-dessus.</p>