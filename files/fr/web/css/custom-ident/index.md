---
title: <custom-ident>
slug: Web/CSS/custom-ident
tags:
  - CSS
  - Reference
  - Type
translation_of: Web/CSS/custom-ident
---
<div>{{CSSRef}}</div>

<p>Le type de données CSS <strong><code>&lt;custom-ident&gt;</code></strong> permet de représenter des chaînes de caractères arbitraires définies par l'utilisateur et qui sont utilisées comme identifiants. Ce type de données est sensible à la casse et pour chaque contexte d'utilisation, plusieurs valeurs sont exclues afin d'éviter des ambiguïtés et des erreurs.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<p>La syntaxe est proche de celle utilisée pour les identifiants CSS. Une valeur <code>&lt;custom-ident&gt;</code> est sensible à la casse et est une séquence de caractères dont les caractères peuvent être :</p>

<ul>
 <li>n'importe quel caractère alphanumérique (<code>A</code> à <code>Z</code> ou <code>a</code> à <code>z</code>),</li>
 <li>n'importe quel chiffre (<code>0</code> à <code>9</code>),</li>
 <li>un tiret (<code>-</code>)</li>
 <li>un tiret bas (<em>underscore</em>) (<code>_</code>),</li>
 <li>un caractère échappé via une barre oblique inversée (<code>\</code>),</li>
 <li>un caractère <a href="http://en.wikipedia.org/wiki/Unicode">Unicode</a> (une barre oblique inversée suivie d'un à six chiffres hexadécimaux représentant le point de code Unicode).</li>
</ul>

<p>Le premier caractère de l'identifiant ne doit pas être un chiffre, un tiret suivi d'un chiffre ou un tiret suivi d'un autre tiret. Une valeur <code>&lt;custom-ident&gt;</code> ne doit pas être encadrée entre quotes ou entre doubles quotes car ce serait alors une valeur {{cssxref("&lt;string&gt;")}}.</p>

<p>On notera que <code>id1</code>, <code>Id1</code>, <code>iD1</code> et <code>ID1</code> sont des identifiants différents car leurs casses sont différentes. En revanche, il existe plusieurs façons d'échapper un même caractère et <code>toto\?</code> et <code>toto\3F</code> représentent donc le même identifiant.</p>

<h3 id="Liste_des_valeurs_interdites">Liste des valeurs interdites</h3>

<p>Afin d'éviter des ambiguïtés dangereuses, chaque propriété qui utilise <code>&lt;custom-ident&gt;</code> définit également une liste de valeurs interdites :</p>

<dl>
 <dt>{{cssxref("animation-name")}}</dt>
 <dd>Interdit d'utiliser les valeurs CSS globales <code>unset</code>, <code>initial</code> et <code>inherit</code> ainsi que la valeur <code>none</code>.</dd>
 <dt>{{cssxref("counter-reset")}}</dt>
 <dt>{{cssxref("counter-increment")}}</dt>
 <dd>Interdit d'utiliser les valeurs CSS globales <code>unset</code>, <code>initial</code> et <code>inherit</code> ainsi que la valeur <code>none</code>.</dd>
 <dt>{{cssxref("@counter-style")}}</dt>
 <dt>{{cssxref("list-style-type")}}</dt>
 <dd>Interdit d'utiliser les valeurs CSS globales <code>unset</code>, <code>initial</code> et <code>inherit</code> ainsi que les valeurs <code>none</code>, <code>inline</code>, <code>outside</code> et d'autres valeurs prédéfinies, implémentées par les différents navigateurs : <code>disc</code>, <code>circle</code>, <code>square</code>, <code>decimal</code>, <code>cjk-decimal</code>, <code>decimal-leading-zero</code>, <code>lower-roman</code>, <code>upper-roman</code>, <code>lower-greek</code>, <code>lower-alpha</code>, <code>lower-latin</code>, <code>upper-alpha</code>, <code>upper-latin</code>, <code>arabic-indic</code>, <code>armenian</code>, <code>bengali</code>, <code>cambodian</code>, <code>cjk-earthly-branch</code>, <code>cjk-heavenly-stem</code>, <code>cjk-ideographic</code>, <code>devanagari</code>, <code>ethiopic-numeric</code>, <code>georgian</code>, <code>gujarati</code>, <code>gurmukhi</code>, <code>hebrew</code>, <code>hiragana</code>, <code>hiragana-iroha</code>, <code>japanese-formal</code>, <code>japanese-informal</code>, <code>kannada</code>, <code>katakana</code>, <code>katakana-iroha</code>, <code>khmer</code>, <code>korean-hangul-formal</code>, <code>korean-hanja-formal</code>, <code>korean-hanja-informal</code>, <code>lao</code>, <code>lower-armenian</code>, <code>malayalam</code>, <code>mongolian</code>, <code>myanmar</code>, <code>oriya</code>, <code>persian</code>, <code>simp-chinese-formal</code>, <code>simp-chinese-informal</code>, <code>tamil</code>, <code>telugu</code>, <code>thai</code>, <code>tibetan</code>, <code>trad-chinese-formal</code>, <code>trad-chinese-informal</code>, <code>upper-armenian</code>, <code>disclosure-open</code> et <code>disclosure-close</code>.</dd>
 <dt>{{cssxref("grid-row-start")}}<br>
 {{cssxref("grid-row-end")}}<br>
 {{cssxref("grid-column-start")}}<br>
 {{cssxref("grid-column-end")}}</dt>
 <dd>Interdisent la valeur <code>span</code>.</dd>
 <dt>{{cssxref("will-change")}}</dt>
 <dd>Interdit d'utiliser les valeurs CSS globales <code>unset</code>, <code>initial</code> et <code>inherit</code> ainsi que les valeurs <code>will-change</code>, <code>auto</code>, <code>scroll-position</code> et <code>contents</code>.</dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<p>Voici des identifiants valides</p>

<pre class="eval">nono79            Un mélange de caractères alphanumériques.
ground-level      Un mélange de caractères alphanumériques avec un tiret.
-test             Un tiret suivi d'un mélange de caractères alphanumériques.
_internal         Un tiret bas suivi d'un mélange de caractères alphanumériques.
\22 toto          Un caractère Unicode suivi par une série de caractères alphanumériques.
bili\.bob         Le point est bien échappé.
</pre>

<p>Voici des identifiants invalides :</p>

<pre class="eval">34rem             Il ne doit pas démarrer par un chiffre.
-12rad            Il ne doit pas démarrer par un tiret suivi d'un chiffre.
bili.bob          Il ne doit contenir que des caractères alphanumériques. _ et - n'ont pas besoin d'être échappés.
--toto            Il ne doit pas démarrer avec deux tirets.
'bilibob'         Ce n'est pas une valeur &lt;user-ident&gt; mais une {{cssxref("&lt;string&gt;")}}.
"bilibob"         Ce n'est pas une valeur &lt;user-ident&gt; mais une {{cssxref("&lt;string&gt;")}}.
</pre>

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
   <td>{{SpecName('CSS Will Change', '#valdef-will-change-custom-ident', '<code>&lt;custom-ident&gt;</code> for <code>will-change</code>')}}</td>
   <td>{{Spec2('CSS Will Change')}}</td>
   <td>Définition des valeurs exclues pour {{cssxref("will-change")}}.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Counter Styles', '#typedef-counter-style-name', '<code>&lt;custom-ident&gt;</code> for <code>list-style-type</code>')}}</td>
   <td>{{Spec2('CSS3 Counter Styles')}}</td>
   <td>Utilisation de <code>&lt;custom-ident&gt;</code> à la place d'une liste finie de mots-clés. Définition des valeurs exclues pour {{cssxref("list-style-type")}} et {{cssxref("@counter-style")}}.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Lists', '#counter-properties', '<code>&lt;custom-ident&gt;</code> for <code>counter-*</code>')}}</td>
   <td>{{Spec2('CSS3 Lists')}}</td>
   <td><code>&lt;identifier&gt;</code> est renommé en <code>&lt;custom-ident&gt;</code>. Son utilisation est ajoutée pour la propriété <code>counter-set</code>.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Animations', '#typedef-single-animation-name', '<code>&lt;custom-ident&gt;</code> for <code>animation-name</code>')}}</td>
   <td>{{Spec2('CSS3 Animations')}}</td>
   <td>Définition des valeurs exclues pour {{cssxref("animation-name")}}.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Values', '#identifier-value', '<code>&lt;custom-ident&gt;</code>')}}</td>
   <td>{{Spec2('CSS3 Values')}}</td>
   <td><code>&lt;identifier&gt;</code> est renommé en <code>&lt;custom-ident&gt;</code>. Devient un pseudo-type et est lié aux différents cas d'utilisation pour la définition des valeurs exclues.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'syndata.html#value-def-identifier', '<code>&lt;identifier&gt;</code>')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p><em>Ce type de données n'est pas un type de données « réel » mais un type artificiel permettant de simplifier la description des valeurs permises. Il n'y a donc pas de données de compatibilité stricto sensu.</em></p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{CSSxRef("&lt;ident&gt;")}}</li>
 <li><a href="/fr/docs/tag/Type">Les différents types de données CSS</a></li>
</ul>
