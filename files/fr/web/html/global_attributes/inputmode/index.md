---
title: inputmode
slug: Web/HTML/Global_attributes/inputmode
tags:
  - Attribut
  - Attribut universel
  - HTML
  - Reference
translation_of: Web/HTML/Global_attributes/inputmode
original_slug: Web/HTML/Attributs_universels/inputmode
---
<div>{{HTMLSidebar("Global_attributes")}}</div>

<p>L'<a href="/fr/docs/Web/HTML/Attributs_universels">attribut universel</a> <strong><code>inputmode</code></strong> est un attribut à valeur contrainte qui fournit une indication au navigateur quant au type de donnée qui peut être saisi par l'utilisateur lors de l'édition de l'élément ou de son contenu. Les valeurs autorisées sont les suivantes :</p>

<dl>
 <dt><code>none</code></dt>
 <dd>Aucun clavier virtuel ne doit être affiché. Cette valeur s'avère utile lorsque l'application ou le site web implémente son propre outil de saisie.</dd>
 <dt><code>text</code></dt>
 <dd>C'est du texte qui sera saisi et un clavier dans la locale de l'utilisateur pourra être affiché.</dd>
 <dt><code>decimal</code></dt>
 <dd>C'est un nombre décimal qui sera saisi. Le clavier affiché peut contenir des chiffres et le séparateur décimal de la locale de l'utilisateur. Attention, selon les appareils, le signe moins (<code>-</code>) peut ne pas être présent.</dd>
 <dt><code>numeric</code></dt>
 <dd>C'est un nombre entier qui sera saisi. Le clavier affiché peut contenir les chiffres de 0 à 9. Attention, selon les appareils, le signe moins (<code>-</code>) peut ne pas être présent.</dd>
 <dt><code>tel</code></dt>
 <dd>C'est un numéro de téléphone qui sera saisi. Le clavier affiché pourra être celui d'un téléphone avec les chiffres allant de 0 à 9, l'astérisque et le dièse. Pour les champs de formulaire où il faut saisir un numéro de téléphone, on utilisera plutôt <code><a href="/fr/docs/Web/HTML/Element/Input/tel">&lt;input type="tel"&gt;</a></code>.</dd>
 <dt><code>search</code></dt>
 <dd>L'élément éditable sert à la recherche. Le clavier affiché sera optimisé pour une recherche (par exemple, la touche Entrée pourra être indiquée avec le mot-clé « Rechercher »).</dd>
 <dt><code>email</code></dt>
 <dd>C'est une adresse électronique qui sera saisie. Le clavier affiché pourra être optimisé pour la saisie d'adresses email (généralement, on aura le caractère @ et d'autres éléments). Pour les champs de formulaire où il faut saisir une adresse électronique, on utilisera plutôt <code><a href="/fr/docs/Web/HTML/Element/Input/email">&lt;input type="email"&gt;</a></code>.</dd>
 <dt><code>url</code></dt>
 <dd>C'est une URL qui sera saisie. Le clavier affiché pourra être optimisé pour la saisie d'URL. Ainsi, la touche pour la barre oblique pourra être plus accessible, le clavier pourra proposer un accès à l'historique des URL utilisées, etc. Pour les champs de formulaire où il faut saisir une URL, on utilisera plutôt <code><a href="/fr/docs/Web/HTML/Element/Input/url">&lt;input type="url"&gt;</a></code>.</dd>
</dl>

<p>Lorsque cet attribut n'est pas explicitement défini, sa valeur par défaut est <code>"text"</code>, ce qui indique que c'est du texte qui sera saisi et qu'un clavier standard devrait être utilisé.</p>

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
   <td>{{SpecName("HTML WHATWG", "interaction.html#input-modalities:-the-inputmode-attribute", "inputmode")}}</td>
   <td>{{Spec2("HTML WHATWG")}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("html.global_attributes.inputmode")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/HTML/Attributs_universels">L'ensemble des attributs universels</a></li>
</ul>
