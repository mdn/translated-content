---
title: lang
slug: Web/HTML/Global_attributes/lang
tags:
  - Attribut
  - Attribut universel
  - HTML
  - Reference
translation_of: Web/HTML/Global_attributes/lang
original_slug: Web/HTML/Attributs_universels/lang
---
<div>{{HTMLSidebar("Global_attributes")}}</div>

<p>L'<a href="/fr/docs/Web/HTML/Attributs_universels">attribut universel</a> <code><strong>lang</strong></code> permet de définir la langue utilisée pour l'élément. Pour les éléments non-éditables, c'est la langue dans laquelle ils sont écrits. Pour les éléments éditables, c'est la langue dans laquelle devrait écrire l'utilisateur. La valeur de cet attribut est une « balise de langue » dont le format est défini par le document de l'IETF : <a class="external" href="https://www.ietf.org/rfc/bcp/bcp47.txt"><em>Les balises d'identification de langues (BCP47)</em></a>. Si cette balise est la chaîne vide, la langue sera définie comme <em>inconnue</em>. Si la balise de langue n'est pas valide selon BCP47, la langue sera définie comme <em>invalide</em>.</p>

<div>{{EmbedInteractiveExample("pages/tabbed/attribute-lang.html","tabbed-shorter")}}</div>

<p>Même lorsque l'attribut <code><strong>lang</strong></code> est défini, il peut ne pas être pris en compte. En effet, l'attribut {{htmlattrxref("xml:lang")}} aura la priorité sur celui-ci.</p>

<p>Pour la pseudo-classe CSS {{cssxref(":lang")}}, deux noms de langues invalides sont considérés différents si les noms utilisés sont différents. Par exemple, alors que <code>:lang(fr)</code> permet l'appariement avec les déclarations (valides) <code>lang="fr-BE"</code> ou <code>lang="fr-CH"</code>, un encodage (invalide) comme <code>:lang(xyzzy)</code> ne permet pas l'appariement avec une déclaration (invalide) comme <code>lang="xyzzy-Zorp!"</code>.</p>

<h2 id="Syntaxe_des_balises_de_langue">Syntaxe des balises de langue</h2>

<p>La syntaxe complète décrite par la BCP 47 est suffisamment développée pour désigner certains dialectes spécifiques. Toutefois, dans la plupart des cas, l'utilisation sera assez simple.</p>

<p>Voici un aperçu de la syntaxe simplifiée. Une balise de langue est composées de trois « sous-balises » séparées par des tirets. Chacune de ces sous-balises indique une certaine propriété de la langue. Les trois sous-balises communément utilisées sont :</p>

<dl>
 <dt>Sous-balise de langue</dt>
 <dd>Ce fragment est obligatoire. C'est un code sur deux ou trois caractères (généralement en minuscules) qui définit la langue de base. Pour l'anglais, cette sous-balise est <code>en</code> et pour le Badeshi, cette balise est <code>bdz</code>.</dd>
 <dt>Sous-balise de script</dt>
 <dd>Ce fragment est optionnel. Il décrit le système d'écriture utilisé par la langue. Cette sous-balise contient toujours quatre caractères. Pour le braille français, la balise complète sera donc <code>fr-Brail</code> ; pour le japonais écrit avec l'alphabet Katakana, le code sera <code>ja-Kana</code>. Si la langue est utilisée avec le script le plus fréquemment utilisé (par exemple de l'espagnol écrit avec l'alphabet latin), il n'est pas nécessaire d'indiquer cette sous-balise.</dd>
 <dt>Sous-balise régionale</dt>
 <dd>Ce fragment est optionnel. Il définit un dialecte de la langue de base pour une région donnée. Cette sous-balise est composée de deux lettres en majuscules pour indiquer un pays ou de trois chiffres pour une indiquer une région qui n'est pas un pays. Ainsi, <code>es-ES</code> représente l'espagnol parlé en Espagne et <code>es-013</code> représente l'espagnol parlé en Amérique centrale ; l'espagnol international serait simplement <code>es</code>.</dd>
</dl>

<p>La sous-balise de script doit précéder la sous-balise régionale si les deux sont présentes. Voici un exemple avec les trois fragments : <code>ru-Cyrl-BY</code> qui correspond au russe, écrit avec l'alphabet cyrillique, tel que parlé en Biélorussie.</p>

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
   <td>{{SpecName('HTML WHATWG', "dom.html#the-lang-and-xml:lang-attributes", "lang")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>Aucun changement depuis la dernière dérivation, {{SpecName('HTML5.1')}}</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5.1', "dom.html#the-lang-and-xmllang-attributes", "lang")}}</td>
   <td>{{Spec2('HTML5.1')}}</td>
   <td>Dérivée de {{SpecName('HTML WHATWG')}}, aucun changement de {{SpecName('HTML5 W3C')}}</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', "dom.html#the-lang-and-xmllang-attributes", "lang")}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td>Dérivée de {{SpecName('HTML WHATWG')}}. Définition du comportement de l'attribut <strong>xml:lang</strong> et de l'algorithme à utiliser pour déterminer la langue utilisée. Cet attribut devient également un attribut global à part entière.</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML4.01', 'struct/dirlang.html#h-8.1', 'lang')}}</td>
   <td>{{Spec2('HTML4.01')}}</td>
   <td>Attribut supporté pour tous les éléments {{HTMLElement("applet")}}, {{HTMLElement("base")}}, {{HTMLElement("basefont")}}, {{HTMLElement("br")}}, {{HTMLElement("frame")}}, {{HTMLElement("frameset")}}, {{HTMLElement("iframe")}}, {{HTMLElement("param")}}, et {{HTMLElement("script")}}.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("html.global_attributes.lang")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/HTML/Attributs_universels">Les différents attributs universels</a></li>
 <li>La pseudo-classe CSS {{cssxref(":lang")}}</li>
 <li>L'en-tête HTTP {{HTTPHeader("Content-Language")}}</li>
</ul>
