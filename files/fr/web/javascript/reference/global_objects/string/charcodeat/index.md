---
title: String.prototype.charCodeAt()
slug: Web/JavaScript/Reference/Global_Objects/String/charCodeAt
tags:
  - JavaScript
  - Méthode
  - Reference
  - String
  - Unicode
translation_of: Web/JavaScript/Reference/Global_Objects/String/charCodeAt
original_slug: Web/JavaScript/Reference/Objets_globaux/String/charCodeAt
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>charCodeAt()</strong></code> retourne un entier compris entre 0 et 65535 qui correspond au code UTF-16 d'un caractère de la chaîne situé à une position donnée.</p>

<div>{{EmbedInteractiveExample("pages/js/string-charcodeat.html")}}</div>



<p>Le codet UTF-16 renvoyé correspond au codet Unicode si le caractère peut être représenté sur un seul codet. Si le codet Unicode ne peut pas être représenté sur un seul codet UTF-16 (car sa valeur est supérieure à <code>0xFFFF</code>), seule la première partie de la paire sera renvoyée. Si vous souhaitez obtenir l'ensemble de la valeur, vous pouvez utiliser la méthode {{jsxref("String.prototype.codePointAt()","codePointAt()")}}.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox notranslate"><var>str</var>.charCodeAt(<var>indice</var>)</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>indice</code></dt>
 <dd>Un entier supérieur ou égal à zéro et strictement inférieur à la longueur de la chaîne. La valeur par défaut (si le paramètre est absent ou n'est pas un nombre) sera zéro (0).</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un nombre qui représente la valeur du point de code UTF-16 pour le caractère à la position indiquée. Si <code>index</code> pointe en dehors de la chaîne, ce sera {{jsxref("Objets_globaux/NaN","NaN")}} qui sera renvoyé.</p>

<h2 id="Description">Description</h2>

<p>Les codets Unicode vont de 0 à 1 114 111 (0x10FFFF). Les 128 premiers caractères Unicode correspondent aux caractères ASCII (leur encodage est le même). Pour plus d'informations sur la gestion de l'Unicode en JavaScript, voir le <a href="/fr/docs/Web/JavaScript/Guide/Valeurs,_variables,_et_littéraux#Unicode">Guide JavaScript</a>.</p>

<p>La méthode <code>charCodeAt()</code> renverra toujours une valeur inférieure à 65 536. En effet, les caractères encodés sur les plus grandes valeurs sont encodés sur deux « demi-codets » (appelés <em>surrogate pair</em> en anglais). Pour recomposer de tels caractères, il faut donc utiliser <code>charCodeAt(i)</code> <strong>et aussi</strong> <code>charCodeAt(i+1)</code> afin de pouvoir récupérer chaque demi-codet. Pour plus de détails, voir le deuxième et troisième exemples.</p>

<p><code>charCodeAt()</code> renverra {{jsxref("NaN")}} si l'indice fourni est strictement inférieur à 0 ou dépasse la longueur de la chaîne.</p>

<p>Dans les anciennes versions (JavaScript 1.2 par exemple) la méthode <code>charCodeAt()</code> renvoyait la valeur du caractère selon l'encodage ISO-Latin-1. L'encodage ISO-Latin-1 permet de représenter des caractères dont les valeurs vont de 0 à 255. Les valeurs 0 à 127 correspondent aux différentes valeurs ASCII.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_charCodeAt">Utiliser <code>charCodeAt()</code></h3>

<p>L'exemple suivant retourne 65, la valeur Unicode de A.</p>

<pre class="brush: js notranslate">"ABC".charCodeAt(0) // returns 65
</pre>

<h3 id="Utiliser_charCodeAt_pour_gérer_les_caractères_hors_du_plan_multilingue_de_base_sans_hypothèse_sur_leur_présence">Utiliser charCodeAt pour gérer les caractères hors du plan multilingue de base sans hypothèse sur leur présence</h3>

<p>Cette fonction peut être utilisée dans des boucles ou autres dans les cas où on ne sait pas si des caractères représentés sur deux demi-codets (hors du plan BMP) existent avant la position indiquée.</p>

<pre class="brush:js notranslate">function fixedCharCodeAt (str, idx) {
    // ex. fixedCharCodeAt ('\uD800\uDC00', 0); // 65536
    // ex. fixedCharCodeAt ('\uD800\uDC00', 1); // false
    idx = idx || 0;
    var code = str.charCodeAt(idx);
    var hi, low;

    // On gère le demi-codet supérieur (la borne supérieure
    // utilisée pourrait être 0xDB7F afin de traiter les
    // paires surrogates privées comme des caractères uniques)
    if (0xD800 &lt;= code &amp;&amp; code &lt;= 0xDBFF) {
        hi = code;
        low = str.charCodeAt(idx+1);
        if (isNaN(low)) {
            throw "Le demi-codet supérieur n'est pas suivi "+
                  "par un demi-codet inférieur dans fixedCharCodeAt()";
        }
        return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000;
    }
    if (0xDC00 &lt;= code &amp;&amp; code &lt;= 0xDFFF) {
    // Demi-codet inférieur

        // On renvoie false pour permettre aux boucles
        // car le cas a normalement déjà été géré avec
        // l'étape précédente
        return false;
    }
    return code;
}
</pre>

<h3 id="Utiliser_charCodeAt_pour_gérer_les_caractères_du_plan_multilingue_de_base_en_sachant_quils_sont_présents">Utiliser <code>charCodeAt()</code> pour gérer les caractères du plan multilingue de base (en sachant qu'ils sont présents)</h3>

<pre class="brush:js notranslate">function knownCharCodeAt (str, idx) {
    str += '';
    var code,
        end = str.length;

    var surrogatePairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
    while ((surrogatePairs.exec(str)) != null) {
        var li = surrogatePairs.lastIndex;
        if (li - 2 &lt; idx) {
            idx++;
        }
        else {
            break;
        }
    }

    if (idx &gt;= end || idx &lt; 0) {
        return NaN;
    }

    code = str.charCodeAt(idx);

    var hi, low;
    if (0xD800 &lt;= code &amp;&amp; code &lt;= 0xDBFF) {
        hi = code;
        low = str.charCodeAt(idx+1);
        // On prend un caractère de plus
        // car on a deux demi-codets à récupérer
        return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000;
    }
    return code;
}

</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES1')}}</td>
   <td>{{Spec2('ES1')}}</td>
   <td>Définition initiale. Implémentée avec JavaScript 1.2.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.5.4.5', 'String.prototype.charCodeAt')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-string.prototype.charcodeat', 'String.prototype.charCodeAt')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-string.prototype.charcodeat', 'String.prototype.charCodeAt')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.String.charCodeAt")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("String.fromCharCode()")}}</li>
 <li>{{jsxref("String.prototype.charAt()")}}</li>
 <li>{{jsxref("String.fromCodePoint()")}}</li>
 <li>{{jsxref("String.prototype.codePointAt()")}}</li>
</ul>
