---
title: Atomics
slug: Web/JavaScript/Reference/Global_Objects/Atomics
tags:
  - JavaScript
  - Mémoire partagée
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Atomics
original_slug: Web/JavaScript/Reference/Objets_globaux/Atomics
---
<div>{{JSRef}}</div>

<p>L'objet <strong><code>Atomics</code></strong> fournit des opérations atomiques sous la forme de méthodes statiques. Celles-ci sont utilisées avec les objets {{jsxref("SharedArrayBuffer")}}.</p>

<p>Les opérations atomiques sont installées sur un module <code>Atomics</code>. À la différence des autres objets globaux, <code>Atomics</code> n'est pas un constructeur. Pour cette raison, il ne peut être utilisé avec l'opérateur {{jsxref("Opérateurs/L_opérateur_new")}} et il ne peut pas être appelé comme une fonction. Les propriétés et les méthodes d'<code>Atomics</code> sont statiques (<code>Atomics</code> fonctionne ainsi comme l'objet {{jsxref("Math")}}).</p>

<h2 id="Propriétés">Propriétés</h2>

<dl>
 <dt><code>Atomics[Symbol.toStringTag]</code></dt>
 <dd>
 <p>La valeur de cette propriété vaut <code>"Atomics"</code>.</p>
 </dd>
</dl>

<h2 id="Méthodes">Méthodes</h2>

<h3 id="Opérations_atomiques">Opérations atomiques</h3>

<p>Lorsque la mémoire est partagée, plusieurs <em>threads</em> peuvent lire et écrire sur les mêmes données en mémoire. Les opérations atomiques permettent de s'assurer que des valeurs prévisibles sont écrites et lues, que les opérations sont finies avant que la prochaine débute et que les opérations ne sont pas interrompues.</p>

<dl>
 <dt>{{jsxref("Atomics.add()")}}</dt>
 <dd>Cette méthode ajoute la valeur fournie à la position indiquée dans le tableau. Elle renvoie l'ancienne valeur qui était à cette position.</dd>
 <dt>{{jsxref("Atomics.and()")}}</dt>
 <dd>Cette méthode calcule un ET binaire sur la position indiquée dans le tableau. Elle renvoie l'ancienne valeur qui était à cette position.</dd>
 <dt>{{jsxref("Atomics.compareExchange()")}}</dt>
 <dd>Cette méthode stocke la valeur fournie à la position indiquée dans le tableau si elle est égale à une valeur donnée. Elle renvoie l'ancienne valeur.</dd>
 <dt>{{jsxref("Atomics.exchange()")}}</dt>
 <dd>Cette méthode stocke la valeur fournie à la position indiquée dans le tableau. Elle renvoie l'ancienne valeur.</dd>
 <dt>{{jsxref("Atomics.load()")}}</dt>
 <dd>Cette méthode renvoie la valeur à la position indiquée dans le tableau.</dd>
 <dt>{{jsxref("Atomics.or()")}}</dt>
 <dd>Cette méthode calcule un OU binaire entre la valeur fournie et la position indiquée dans le tableau. Elle renvoie l'ancienne valeur qui était à cette position.</dd>
 <dt>{{jsxref("Atomics.store()")}}</dt>
 <dd>Cette méthode stocke une valeur à une position indiquée dans le tableau. Elle renvoie la valeur.</dd>
 <dt>{{jsxref("Atomics.sub()")}}</dt>
 <dd>Cette méthode soustrait la valeur fournie à la position indiquée dans le tableau. Elle renvoie l'ancienne valeur qui était contenue à cette position.</dd>
 <dt>{{jsxref("Atomics.xor()")}}</dt>
 <dd>Cette méthode calcule un OU exclusif binaire sur une position donnée dans le tableau. Elle renvoie l'ancienne valeur qui était à cette position.</dd>
</dl>

<h3 id="Attente_et_notification_(wait_et_notify)">Attente et notification (<code>wait</code> et <code>notify</code>)</h3>

<p>Le méthodes <code>wait</code>() et <code>notify()</code> sont basées sur les <em>futex</em> Linux (selon le vocabulaire employé sur Linux où ça signifie « <em>fast user-space mutex</em> » ou encore « mutex rapide pour l'espace utilisateur ») fournissent des outils pour attendre jusqu'à ce qu'une condition donnée soit vérifiée. Généralement ces méthodes sont utilisées pour bloquer des opérations.</p>

<dl>
 <dt>{{jsxref("Atomics.wait()")}}</dt>
 <dd>Cette méthode vérifie qu'une position donnée du tableau contient bien une valeur donnée puis dort ou expire. Elle renvoie une des chaînes suivantes <code>"ok"</code>, <code>"not-equal"</code>, <code>"timed-out"</code>. Si l'agent appelant ne permet pas d'attente, cela lèvera une exception <code>Error</code> (la plupart des navigateurs ne permettront pas que <code>futexWait()</code> soit utilisé sur le <em>thread</em> principal du navigateur).</dd>
 <dt>{{jsxref("Atomics.notify()")}}</dt>
 <dd>Cette méthode notifient les agents qui attendent dans la file d'attente à une position donnée. Elle renvoie le nombre d'agents notifiés.</dd>
 <dt>{{jsxref("Atomics.isLockFree()")}}</dt>
 <dd>Une primitive d'optimisation qui peut être utilisée afin de déterminer s'il faut utiliser des verrous (<em>locks</em>) ou des opérations atomiques. Elle renvoie <code>true</code> si la taille donnée est l'une des propriétés <code>BYTES_PER_ELEMENT</code> des types <code>TypedArray</code> et qu'on peut donc implémenter l'opération de façon atomique plutôt que d'utiliser un verrou.</dd>
</dl>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-atomics-object', 'Atomics')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES8', '#sec-atomics-object', 'Atomics')}}</td>
   <td>{{Spec2('ES8')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Atomics")}}</p>

<h3 id="Notes_de_compatibilité">Notes de compatibilité</h3>

<p>Avant Firefox 48 {{geckoRelease(48)}}, les noms les plus récents et la sémantique la plus récente n'étaient pas encore implémentés. Les changements qui ont eu lieu entre la version 46 et la version 48 de Firefox sont :</p>

<ul>
 <li>Les méthodes <code>Atomics.futexWakeOrRequeue()</code> et <code>Atomics.fence()</code> sont désormais complètement retirées (cf. {{bug(1259544)}} et {{bug(1225028)}}).</li>
 <li>Les méthodes {{jsxref("Atomics.wait()")}} et  {{jsxref("Atomics.wake()")}} qui étaient nommées <code>Atomics.futexWait()</code> ete <code>Atomics.futexWake()</code> (cf. {{bug(1260910)}}). Les anciens noms seront  définitivement supprimés à partir de la version 49 ({{bug(1262062)}}). <code>Atomics.wake()</code> a été renommé en <code>Atomics.notify()</code> à partir de la version 63.</li>
 <li>Les propriétés <code>Atomics.OK</code>, <code>Atomics.TIMEDOUT</code>, <code>Atomics.NOTEQUAL</code> ont été retirées. La méthode {{jsxref("Atomics.wait()")}} renvoie désormais les chaînes de caractères <code>"ok"</code>, <code>"timed-out"</code> ou <code>"not-equal"</code> (cf. {{bug(1260835)}}).</li>
 <li>
  <p>Le paramètre <code>count</code> de la méthode {{jsxref("Atomics.wake()")}} a été modifié, sa valeur par défaut est désormais <code>+Infinity</code> et non <code>0</code> ({{bug(1253350)}}).</p>
 </li>
</ul>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("ArrayBuffer")}}</li>
 <li><a href="/fr/docs/Web/JavaScript/Tableaux_typés">Les tableaux typés en JavaScript</a></li>
 <li><a href="/fr/docs/Web/API/Web_Workers_API">Web Workers</a></li>
 <li><a href="https://github.com/lars-t-hansen/parlib-simple">parlib-simple </a>– un bibliothèque simple qui fournit des abstractions pour synchronisers et distribuer des tâches.</li>
 <li><a href="https://github.com/tc39/ecmascript_sharedmem/blob/master/TUTORIAL.md">La mémoire partagée – un rapide tutoriel</a></li>
 <li><a href="https://hacks.mozilla.org/2016/05/a-taste-of-javascripts-new-parallel-primitives/">A Taste of JavaScript’s New Parallel Primitives – Mozilla Hacks (en anglais)</a></li>
</ul>
