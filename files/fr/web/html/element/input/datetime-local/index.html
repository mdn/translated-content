---
title: <input type="datetime-local">
slug: Web/HTML/Element/Input/datetime-local
tags:
  - Date
  - Element
  - Formulaires
  - HTML
  - Input
  - Reference
translation_of: Web/HTML/Element/input/datetime-local
---
<div>{{HTMLRef}}</div>

<p>Les éléments {{htmlelement("input")}} dont l'attribut <code>type</code> vaut <strong><code>"datetime-local"</code></strong> permettent de créer des champs destinés à saisir simplement une date (définie par une année, un mois, et un jour) et une heure (définie par une heure et une minute). Il n'y a pas de secondes dans ce contrôle.</p>

<div>{{EmbedInteractiveExample("pages/tabbed/input-datetime-local.html", "tabbed-shorter")}}</div>

<p>L'interface utilisateur du contrôle varie selon les navigateurs. La prise en charge de cette fonctionnalité est hétérogène : Chrome/Opera et Edge l'implémentent pour les navigateurs de bureau et la plupart des navigateurs mobiles l'implémentent. Pour les navigateurs qui n'implémentent pas cette fonctionnalité, le contrôle utilisé est celui de <code><a href="/fr/docs/Web/HTML/Element/input/text">&lt;input type="text"&gt;</a></code>.</p>

<p>Les secondes ne sont pas prises en charge.</p>

<p>Le contrôle est spécifié afin de pouvoir représenter une heure et une date locales et <em>pas nécessairement la date et l'heure locale de l'utilisateur</em>. Autrement dit, une implémentation devrait autoriser toute combinaison valide (d'année / mois / jour / heure / minutes) même si cette combinaison n'est pas valide pour le fuseau horaire de l'utilisateur (par exemple pour les fuseaux horaires qui ne gèrent pas les heures d'été). Certains navigateurs mobiles (sur iOS par exemple) n'implémentent pas cette règle correctement.</p>

<p>En raison du faible support pour <code>datetime-local</code> et des variations dans ses implémentations, mieux vaudra peut-être encore (juillet 2019) utiliser un <em>framework</em> ou une bibliothèque pour une telle saisie. Une autre option consiste à séparer les champs pour la date (<code>type="date"</code>) et pour l'heure (<code>type="heure"</code>) qui sont mieux pris en charge.</p>

<p>Certains navigateurs pourront utiliser un contrôle avec un texte simple et vérifier que la valeur date/heure est correcte avant de l'envoyer au serveur. Toutefois, ce contrôle ayant lieu côté client, vous devrez nécessairement vérifier le bon format de la donnée côté serveur.</p>

<h2 id="Valeur">Valeur</h2>

<p>Une chaîne de caractères ({{domxref("DOMString")}}) qui représente la valeur de la date saisie dans le contrôle. Le format utilisable est décrit dans <a href="/fr/docs/Web/HTML/Formats_date_heure_HTML#Représentation_des_dates_et_heures_locales">cette section de l'article sur les formats</a>. Il est possible d'indiquer une date par défaut grâce à l'attribut {{htmlattrxref("value", "input")}} :</p>

<pre class="brush: html">&lt;label for="party"&gt;Veuillez saisir une date et une heure pour la fête :&lt;/label&gt;
&lt;input id="party" type="datetime-local" name="partydate" value="2017-06-01T08:30"&gt;</pre>

<p>{{EmbedLiveSample('Valeur', 600, 60)}}</p>

<p>On notera ici que le format de la date affichée n'est pas celui utilisé pour écrire la valeur de l'attribut <code>value</code>. Le format d'affichage de la date sera choisi en fonction de la locale du système d'exploitation de l'utilisateur. En revanche, l'attribut <code>value</code> sera toujours formaté de la façon suivante : <code>yyyy-MM-ddThh:mm</code>. Lorsque la valeur est envoyée au serveur, elle aura donc ce format : <code>partydate=2017-06-01T08:30</code>.</p>

<div class="note">
<p><strong>Note :</strong> Attention si les données sont envoyées avec la méthode HTTP <code><a href="/fr/docs/HTTP/Méthode/GET">GET</a></code>, les deux points (:) devront être échappés pour être intégrés dans les paramètres de l'URL. Avec l'exemple précédent, cela signifie qu'on enverra <code>partydate=2017-06-01T08%3A30</code>. Si on souhaite échapper une chaîne de caractères de la même façon en JavaScript, on pourra utiliser {{jsxref("Objets_globaux/encodeURI", "encodeURI()")}}.</p>
</div>

<p>En JavaScript, Il est également possible de définir la valeur de la date utilisée dans le contrôle via la propriété {{domxref("HTMLInputElement.value")}}. Par exemple :</p>

<pre class="brush: js">var dateControl = document.querySelector('input[type="datetime-local"]');
date.value = '2017-06-01T08:30';</pre>

<p>Plusieurs méthodes, fournies par JavaScript (cf. {{jsxref("Date")}}), peuvent être utilisée afin de convertir des informations numériques en une telle chaîne de caractères (par exemple la méthode {{jsxref("Date.toISOString()")}}).</p>

<h2 id="Attributs_supplémentaires">Attributs supplémentaires</h2>

<p>En complément des attributs communs à l'ensemble des éléments {{HTMLElement("input")}}, les champs de type <code>"date"</code> gèrent les attributs suivants :</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Attribut</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>{{anch("max")}}</code></td>
   <td>La date la plus avancée qui peut être saisie.</td>
  </tr>
  <tr>
   <td><code>{{anch("min")}}</code></td>
   <td>La date la plus reculée qui peut être saisie.</td>
  </tr>
  <tr>
   <td><code>{{anch("step")}}</code></td>
   <td>Le pas à utiliser pour l'incrément quand on utilise les boutons d'augmentation/diminution. Cet incrément est également utilisé pour la validation.</td>
  </tr>
 </tbody>
</table>

<h3 id="htmlattrdefmax">{{htmlattrdef("max")}}</h3>

<p>La date/heure la plus avancée qui peut être saisie dans le contrôle. Si la valeur de {{htmlattrxref("value", "input")}} est supérieure à la date indiquée par cet attribut, l'élément ne respectera pas <a href="/fr/docs/Web/Guide/HTML/HTML5/Constraint_validation">les contraintes de validation</a>. Si la valeur de l'attribut <code>max</code> n'est pas une chaîne de caractères qui suit le format <code>"yyyy-MM-ddThh:mm"</code>, il n'y aura pas de valeur maximale.</p>

<p>La valeur de cet attribut doit être une date supérieure ou égale à celle indiquée par l'attribut <code>min</code>.</p>

<h3 id="htmlattrdefmin">{{htmlattrdef("min")}}</h3>

<p>La date/heure minimale qui peut être saisie dans le contrôle. Toute date/heure saisie antérieure à celle-ci ne respectera pas <a href="/fr/docs/Web/Guide/HTML/HTML5/Constraint_validation">les contraintes de validation</a>. Si la valeur de l'attribut <code>min</code> n'est pas une chaîne de caractères qui suit le format <code>"yyyy-MM-ddThh:mm"</code>, il n'y aura pas de valeur minimale.</p>

<p>La valeur de cet attribut doit être une date antérieure ou égale à celle indiquée par l'attribut <code>max</code>.</p>

<h3 id="htmlattrdefstep">{{htmlattrdef("step")}}</h3>

<p>{{page("/fr/docs/Web/HTML/Element/input/number", "step-include")}}</p>

<p>Pour les champs <code>datetime-local</code>, la valeur de l'attribut <code>step</code> est exprimée en secondes avec un facteur d'amplification de 1000 (pour passer des millisecondes aux secondes). La valeur par défaut de <code>step</code> est 60 (soit 1 minute ou 60 000 millisecondes).</p>

<p><em>À l'heure où ces lignes sont écrites, la signification de la valeur <code>any</code> pour l'attribut <code>step</code> pour les champs <code>datetime-local</code> n'est pas certaine. Cette information sera mise à jour dès que possible.</em></p>

<h2 id="Utiliser_les_contrôles_datetime-local">Utiliser les contrôles <code>datetime-local</code></h2>

<p>Ces contrôles sont pratiques : ils permettent d'utiliser une interface simple pour sélectionner une date et une heure et en plus, ils normalisent la valeur saisie avant de l'envoyer au sereveur, quelle que soit la locale de l'utilisateur. Toutefois, il existe actuellement des problèmes liés à la prise en charge partielle de <code>&lt;input type="datetime-local"&gt;</code> dans les différents navigateurs.</p>

<p>Dans les exemples suivants, nous verrons certains cas d'utilisation plus complexes puis nous traiterons de l'adaptation nécessaire en fonction de la prise en charge des navigateurs.</p>

<h3 id="Utilisation_simple_de_datetime-local">Utilisation simple de <code>datetime-local</code></h3>

<p>Dans sa forme la plus simple, <code>&lt;input type="datetime-local"&gt;</code> peut s'utilisere avec un élément <code>&lt;input&gt;</code> et un élément {{htmlelement("label")}} comme ceci :</p>

<pre class="brush: html">&lt;form&gt;
    &lt;label for="party"&gt;Veuillez choisir une date et une heure pour la fête :&lt;/label&gt;
    &lt;input id="party" type="datetime-local" name="partydate"&gt;
&lt;/form&gt;</pre>

<p>{{EmbedLiveSample('Utilisation_simple_de_datetime-local', 600, 40)}}</p>

<h3 id="Paramétrer_des_dates_et_heures_minimalesmaximales">Paramétrer des dates et heures minimales/maximales</h3>

<p>Les attributs {{htmlattrxref("min", "input")}} et {{htmlattrxref("max", "input")}} permettent de restreindre la fenêtre de dates qu'il est possible de choisir. Dans l'exemple qui suit, on indique une date/heure minimale au <code>2017-06-01T08:30</code> et une date maximale au <code>2017-06-30T16:30</code>:</p>

<pre class="brush: html">  &lt;form&gt;
    &lt;label for="party"&gt;Veuillez choisir une date et une heure pour la fête :&lt;/label&gt;
    &lt;input id="party" type="datetime-local" name="partydate" min="2017-06-01T08:30" max="2017-06-30T16:30"&gt;
  &lt;/form&gt;</pre>

<p>{{EmbedLiveSample('Paramétrer_des_dates_et_heures_minimales/maximales', 600, 40)}}</p>

<p>Par conséquent :</p>

<ul>
 <li>Seuls les jours de juin 2017 peuvent être sélectionnés et seules les heures entre 08h30 et 16h30 pourront être sélectionnées..</li>
 <li>Selon le navigateur utilisé, il est possible ou non de sélectionner des heures invalides (cf. {{anch("Validation")}}).</li>
</ul>

<div class="note">
<p><strong>Note :</strong> L'attribut {{htmlattrxref("step", "input")}} devrait pouvoir être utilisé afin de faire varier l'incrément, en jours, pour sélectionner la date (par exemple afin de ne pouvoir sélectionner que les samedi). En revanche, à l'heure où nous rédigeons cet article, aucune implémentation ne semble proposer cette fonctionnalité.</p>
</div>

<h3 id="Contrôler_la_taille_du_champ">Contrôler la taille du champ</h3>

<p><code>&lt;input type="datetime-local"&gt;</code> ne prend pas en charge des attributs tels que {{htmlattrxref("size", "input")}}. Il est nécessaire d'utiliser <a href="/fr/docs/Web/CSS">CSS</a> pour les problèmes relatifs au dimensionnement.</p>

<h3 id="Paramétrer_le_fuseau_horaire">Paramétrer le fuseau horaire</h3>

<p>Les champs <code>datetime-local</code> ne permettent pas d'indiquer le fuseau horaire de la date/heure utilisée. Cette caractéristique était disponible pour les champs de type <code><a href="/fr/docs/Web/HTML/Element/input/datetime">datetime</a></code> qui est désormais obsolète (retiré de la spécification). Ce type de champ a été retiré en raison d'un manque d'implémentation de la part des navigateurs et des problèmes relatifs à l'ergonomie. Il est plus simple d'avoir un contrôle séparé pour indiquer le fuseau horaire.</p>

<p>Ainsi, si vous créez un système où l'utilisateur est déjà connecté et que le fuseau horaire est déjà connu, celui-ci peut être fourni via un champ de type <code><a href="/fr/docs/Web/HTML/Element/input/hidden">hidden</a></code>. Par exemple :</p>

<pre class="brush: html">&lt;input type="hidden" id="timezone" name="timezone" value="-08:00"&gt;</pre>

<p>Sinon, on peut proposer la sélection d'un fuseau horaire grâce à un élément {{htmlelement("select")}} :</p>

<pre class="brush: html">&lt;select name="timezone_offset" id="timezone-offset" class="span5"&gt;
    &lt;option value="-12:00"&gt;(GMT -12:00) Eniwetok, Kwajalein&lt;/option&gt;
    &lt;option value="-11:00"&gt;(GMT -11:00) Midway Island, Samoa&lt;/option&gt;
    &lt;option value="-10:00"&gt;(GMT -10:00) Hawaii&lt;/option&gt;
    &lt;option value="-09:50"&gt;(GMT -9:30) Taiohae&lt;/option&gt;
    &lt;option value="-09:00"&gt;(GMT -9:00) Alaska&lt;/option&gt;
    &lt;option value="-08:00"&gt;(GMT -8:00) Pacific Time (US &amp;amp; Canada)&lt;/option&gt;

  ...

&lt;/select&gt;</pre>

<p>Dans ces deux situations, le fuseau horaire et la date sont transmis au serveur séparément (c'est côté serveur que le choix de la représentation pour le stockage est effectué).</p>

<div class="note">
<p><strong>Note :</strong> Le fragment de code précédent est tiré de <a href="https://gist.github.com/nodesocket/3919205">Tous les fuseaux horaires du monde dans un élément <code>&lt;select&gt;</code></a>.</p>
</div>

<h2 id="Validation">Validation</h2>

<p>Par défaut, <code>&lt;input type="datetime-local"&gt;</code> n'applique pas de validation aux valeurs saisies. C'est l'interface utilisateur du contrôle qui ne permet pas de saisir autre chose qu'une date et une heure (ce qui est utile) mais il est toujours possible de ne saisir aucune valeur ou de saisir une valeur invalide (le 32 avril par exemple).</p>

<p>Les attributs {{htmlattrxref("min", "input")}} et {{htmlattrxref("max", "input")}} permettent de restreindre les dates disponibles et {{htmlattrxref("required", "input")}} rend la date obligatoire. Dans ces cas, les navigateurs afficheront un message d'erreur si on essaie d'envoyer une date en dehors de l'intervalle ou une date vide.</p>

<p>Prenons un exemple avec des dates mini/maxi et le champ obligatoire :</p>

<pre class="brush: html">&lt;form&gt;
    &lt;div&gt;
        &lt;label for="party"&gt;Veuillez choisir une date et une heure pour la fête (obligatoire, entre le 1er juin, 8h30 et le 30 juin, 16h30) :&lt;/label&gt;
        &lt;input id="party" type="datetime-local" name="partydate" min="2017-06-01T08:30" max="2017-06-30T16:30" required&gt;
        &lt;span class="validity"&gt;&lt;/span&gt;
    &lt;/div&gt;
    &lt;div&gt;
        &lt;input type="submit" value="Réserver !"&gt;
    &lt;/div&gt;
&lt;/form&gt;</pre>

<p>Si vous essayez d'envoyer le formulaire avec une date incomplète ou en dehors de l'intervalle indiqué, le navigateur affichera une erreur. Voici le résultat :</p>

<p>{{EmbedLiveSample('Validation', 600, 120)}}</p>


<p>Vous trouverez ensuite la feuille de style CSS utilisée pour l'exemple. On utilise les pseudo-classes {{cssxref(":valid")}} et {{cssxref(":invalid")}} afin de mettre en forme le contrôle selon que sa valeur est valide ou non. Les icônes indicatives sont placées dans un élément {{htmlelement("span")}} séparé car, sous Chrome, le contenu généré automatiquement est placé à l'intériur du contrôle et ne peut pas être affiché/mis en forme efficacement.</p>

<pre class="brush: css">div {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
}

label {
  display: inline-block;
  width: 300px;
}

input:invalid+span:after {
    content: '✖';
    padding-left: 5px;
}

input:valid+span:after {
    content: '✓';
    padding-left: 5px;
}</pre>

<div class="warning">
<p><strong>Attention :</strong> La validation des données du formulaire HTML par le navigateur ne doit pas remplacer la validation des données reçues sur le serveur ! En effet, il est tout à fait possible pour quelqu'un de modifier le document HTML afin d'outrepasser ces contraintes (voire d'envoyer directement des données au serveur sans passer par le formulaire HTML). Si les mécanismes, côté serveur, échouent à valider les données, cela pourrait avoir des conséquences néfastes sur le stockage ou la sécurité de l'application.</p>
</div>

<h2 id="Gérer_la_prise_en_charge_des_navigateurs">Gérer la prise en charge des navigateurs</h2>

<p>Comme indiqué ci-avant, le principal problème qu'on rencontre avec ces contrôles est la prise en charge hétérogène des différents navigateurs : seuls Opera et Chrome implémentent cette fonctionnalité parmi les navigateurs de bureau et la plupart des navigateurs mobiles la prennent en charge.</p>


<p>Les navigateurs qui n'implémentent pas cette fonctionnalité afficheront un contrôle de saisie textuelle. Toutefois, cela entraîne des problème de cohérence d'interface graphique d'une part et de représentation des données d'autre part.</p>

<p>C'est ce second problème qui est le plus important. Comme nous l'avons mentionné avant, la valeur d'un contrôle <code>datetime-local</code> est toujours normalisée sous la forme <code>yyyy-mm-ddThh:mm</code>. En revanche, avec un champ texte, le navigateur n'utilise pas de formatage particulier et il existe différentes façon d'écrire des dates et heures selon les langues et les régions. On peut par exemple avoir les formats suivants :</p>

<ul>
 <li><code>ddmmyyyy</code></li>
 <li><code>dd/mm/yyyy</code></li>
 <li><code>mm/dd/yyyy</code></li>
 <li><code>dd-mm-yyyy</code></li>
 <li><code>mm-dd-yyyy</code></li>
 <li><code>mm-dd-yyyy hh:mm</code> (heure exprimée sur 12 heures)</li>
 <li><code>mm-dd-yyyy HH:mm</code> (heure exprimée sur 24 heures)</li>
 <li>etc.</li>
</ul>

<p>Une façon de contourner ce problème est de placer un attribut {{htmlattrxref("pattern", "input")}} dans l'élément <code>&lt;input type="</code><code>datetime-local"&gt;</code>. Bien que cet élément n'utilise pas cet attribut, s'il est converti en <code>&lt;input type="text"&gt;</code> par le navigateur, le motif sera alors utilisé. Vous pouvez par exemple essayer le code suivant dans un navigateur qui ne prend pas en charge <code>&lt;input type="datetime-local"&gt;</code> :</p>

<pre class="brush: html">&lt;form&gt;
  &lt;div&gt;
     &lt;label for="party"&gt;Veuillez choisir une date et une heure pour la fête (obligatoire, entre le 1er juin, 8h30 et le 30 juin, 16h30) :&lt;/label&gt;
    &lt;input id="party" type="datetime-local" name="partydate"
           min="2017-06-01T08:30" max="2017-06-30T16:30"
           pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}" required&gt;
    &lt;span class="validity"&gt;&lt;/span&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;input type="submit" value="Réserver !"&gt;
  &lt;/div&gt;
  &lt;input type="hidden" id="timezone" name="timezone" value="-08:00"&gt;
&lt;/form&gt;</pre>

<p>{{EmbedLiveSample('Gérer_la_prise_en_charge_des_navigateurs', 600, 100)}}</p>

<p>Si vous essayer de soumettre ce formulaire, vous pourrez voir que le navigateur affiche un message d'erreur et met en avant le champ invalide si la valeur saisie ne respecte pas la forme <code>nnnn-nn-nnTnn:nn</code> avec <code>n</code> qui est un chiffre entre 0 et 9. Bien entendu, cela n'empêche pas de saisir des dates/heures invalides ou mal formatées.</p>

<p>De plus, comment l'utilisateur doit-il comprendre la règle de format qui lui est imposée pour saisir une date et une heure ?</p>

<p>Bref, il y a toujours un problème.</p>

<pre class="brush: css hidden">div {
  margin-bottom: 10px;
}

input:invalid + span {
  position: relative;
}

input:invalid + span:after {
  content: '✖';
  position: absolute;
  right: -18px;
}

input:valid + span {
  position: relative;
}

input:valid + span:after {
  content: '✓';
  position: absolute;
  right: -18px;
}</pre>

<p>Actuellement, la meilleure façon de gérer les dates/heures d'une façon homogène pour les différents navigateurs est d'utiliser différents contrôles (via des éléments {{htmlelement("select")}}) pour sélectionner l'année, le jour, le mois, la date et l'heure. Il existe également des bibliothèques JavaScript telles que <a href="https://jqueryui.com/datepicker/">le sélecteur de date jQuery</a> et <a href="https://timepicker.co/">le sélecteur d'heure jQuery</a>.</p>

<h2 id="Exemples">Exemples</h2>

<p>Dans cet exemple, on crée deux ensembles d'éléments pour sélectionner une date et une heure : un sélecteur natif <code>&lt;input type="datetime-local"&gt;</code> d'une part et un ensemble de cinq éléments {{htmlelement("select")}} d'autre part pour les navigateurs qui ne prennent pas en charge le contrôle natif.</p>

<p>{{EmbedLiveSample('Exemples', 600, 140)}}</p>

<p>Voici le fragment de code HTML utilisé :</p>

<pre class="brush: html">&lt;form&gt;
  &lt;div class="nativeDateTimePicker"&gt;
    &lt;label for="party"&gt;Veuillez sélectionner une date et une heure pour la fête :&lt;/label&gt;
    &lt;input type="datetime-local" id="party" name="bday"&gt;
    &lt;span class="validity"&gt;&lt;/span&gt;
  &lt;/div&gt;
  &lt;p class="fallbackLabel"&gt;Veuillez sélectionner une date et une heure pour la fête :&lt;/p&gt;
  &lt;div class="fallbackDateTimePicker"&gt;
    &lt;div&gt;
      &lt;span&gt;
        &lt;label for="day"&gt;Jour :&lt;/label&gt;
        &lt;select id="day" name="day"&gt;
        &lt;/select&gt;
      &lt;/span&gt;
      &lt;span&gt;
        &lt;label for="month"&gt;Mois :&lt;/label&gt;
        &lt;select id="month" name="month"&gt;
          &lt;option selected&gt;Janvier&lt;/option&gt;
          &lt;option&gt;Février&lt;/option&gt;
          &lt;option&gt;Mars&lt;/option&gt;
          &lt;option&gt;Avril&lt;/option&gt;
          &lt;option&gt;Mai&lt;/option&gt;
          &lt;option&gt;Juin&lt;/option&gt;
          &lt;option&gt;Juillet&lt;/option&gt;
          &lt;option&gt;Août&lt;/option&gt;
          &lt;option&gt;Septembre&lt;/option&gt;
          &lt;option&gt;Octobre&lt;/option&gt;
          &lt;option&gt;Novembre&lt;/option&gt;
          &lt;option&gt;Décembre&lt;/option&gt;
        &lt;/select&gt;
      &lt;/span&gt;
      &lt;span&gt;
        &lt;label for="year"&gt;Année :&lt;/label&gt;
        &lt;select id="year" name="year"&gt;
        &lt;/select&gt;
      &lt;/span&gt;
    &lt;/div&gt;
    &lt;div&gt;
      &lt;span&gt;
        &lt;label for="hour"&gt;Heure :&lt;/label&gt;
        &lt;select id="hour" name="hour"&gt;
        &lt;/select&gt;
      &lt;/span&gt;
      &lt;span&gt;
        &lt;label for="minute"&gt;Minute :&lt;/label&gt;
        &lt;select id="minute" name="minute"&gt;
        &lt;/select&gt;
      &lt;/span&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/form&gt;</pre>

<p>Les mois disponibles sont codés de façon statique (ce sont toujours les mêmes). En revanche, les valeurs pour les jours et les années sont générées dynamiquement selon le mois et l'année courante (voir les commentaires du script ci-après). Les heures et les minutes sont également générées dynamiquement.</p>

<pre class="brush: css hidden">div {
  margin-bottom: 10px;
  position: relative;
}

input[type="number"] {
  width: 100px;
}

input + span {
  padding-right: 30px;
}

input:invalid+span:after {
  position: absolute;
  content: '✖';
  padding-left: 5px;
}

input:valid+span:after {
  position: absolute;
  content: '✓';
  padding-left: 5px;
}</pre>

<p>Une partie intéressante du code est celle où on détecte la prise en charge de la fonctionnalité. Pour cela, dans le script, on crée un nouvel élément {{htmlelement("input")}} auquel on attribut le type <code>datetime-local</code> puis on vérifie son type juste après. Pour les navigateurs qui ne prennent pas en charge ce type de contrôle, le type aura changé et sera <code>text</code>. Si c'est le cas, on masque le contrôle natif et on utilise l'interface utilisateur alternative (composée avec les éléments ({{htmlelement("select")}})).</p>

<pre class="brush: js">// On définit les différentes variables
var nativePicker = document.querySelector('.nativeDateTimePicker');
var fallbackPicker = document.querySelector('.fallbackDateTimePicker');
var fallbackLabel = document.querySelector('.fallbackLabel');

var yearSelect = document.querySelector('#year');
var monthSelect = document.querySelector('#month');
var daySelect = document.querySelector('#day');
var hourSelect = document.querySelector('#hour');
var minuteSelect = document.querySelector('#minute');

// Initialement, on masque le sélecteur non-natif
fallbackPicker.style.display = 'none';
fallbackLabel.style.display = 'none';

// On teste si l'élément &lt;input type="date"&gt;
// se transforme en &lt;input type="text"&gt;
var test = document.createElement('input');
test.type = 'date';
// Si c'est le cas, cela signifie que l'élément
// n'est pas pris en charge et
if(test.type === 'text') {
  // On masque le sélecteur natif et on affiche
  // le sélecteur avec les &lt;select&gt;
  nativePicker.style.display = 'none';
  fallbackPicker.style.display = 'block';
  fallbackLabel.style.display = 'block';

  // On affiche les jours, années, heures
  // et minutes de façon dynamique
  populateDays(monthSelect.value);
  populateYears();
  populateHours();
  populateMinutes();
}

function populateDays(month) {
  // On supprime les éléments &lt;option&gt; pour l'élément
  // &lt;select&gt; des jours afin de pouvoir ajouter les prochains
  while(daySelect.firstChild){
    daySelect.removeChild(daySelect.firstChild);
  }

  // On crée une variable afin de contenir le nombre
  // de jours à afficher
  var dayNum;

  // 31 ou 30 jours ?
  if(month === 'Janvier' || month === 'Mars' || month === 'Mai' || month === 'Juillet' || month === 'Août' || month === 'Octobre' || month === 'Décembre') {
    dayNum = 31;
  } else if(month === 'Avril' || month === 'Juin' || month === 'Septembre' || month === 'Novembre') {
    dayNum = 30;
  } else {
  // Si le mois est février, on calcule si l'année est bissextile
    var year = yearSelect.value;
    var leap = new Date(year, 1, 29).getMonth() == 1;
    leap ? dayNum = 29 : dayNum = 28;
  }

  // on ajoute le bon nombre de jours dans autant
  // d'éléments &lt;option&gt; pour l'élément &lt;select&gt;
  // pour la journée
  for(i = 1; i &lt;= dayNum; i++) {
    var option = document.createElement('option');
    option.textContent = i;
    daySelect.appendChild(option);
  }

  // Si le jour précédent a déjà été défini on utilise
  // la valeur de ce jour pour daySelect afin d'éviter de
  // réinitialiser le jour lorsqu'on change l'année
  if(previousDay) {
    daySelect.value = previousDay;

    // Si le jour précédent correspond au dernier jour d'un mois
    // et que le mois sélectionné possède moins de jours (par
    // exemple en février)
    if(daySelect.value === "") {
      daySelect.value = previousDay - 1;
    }

    if(daySelect.value === "") {
      daySelect.value = previousDay - 2;
    }

    if(daySelect.value === "") {
      daySelect.value = previousDay - 3;
    }
  }
}

function populateYears() {
  // On obtient l'année courante
  var date = new Date();
  var year = date.getFullYear();

  // On affiche l'année courante et les 100 années
  // précédentes pour l'élément &lt;select&gt; destiné à
  // stocker l'année
  for(var i = 0; i &lt;= 100; i++) {
    var option = document.createElement('option');
    option.textContent = year-i;
    yearSelect.appendChild(option);
  }
}

function populateHours() {
  // on crée 24 valeurs pour l'élément &lt;select&gt;
  // associé aux heures
  for(var i = 0; i &lt;= 23; i++) {
    var option = document.createElement('option');
    option.textContent = (i &lt; 10) ? ("0" + i) : i;
    hourSelect.appendChild(option);
  }
}

function populateMinutes() {
  // On crée 60 valeurs pour l'élément &lt;select&gt;
  // associé aux minutes
  for(var i = 0; i &lt;= 59; i++) {
    var option = document.createElement('option');
    option.textContent = (i &lt; 10) ? ("0" + i) : i;
    minuteSelect.appendChild(option);
  }
}

// Lorsque la valeur du mois ou de l'année est modifiée
// on relance populateDays()
yearSelect.onchange = function() {
  populateDays(monthSelect.value);
}

monthSelect.onchange = function() {
  populateDays(monthSelect.value);
}

// On conserve le jour sélectionné
var previousDay;

// On met à jour la journée utilisé précédemment
// (voir la fin de populateDays() pour voir où
// est utilisée cette valeur)
daySelect.onchange = function() {
  previousDay = daySelect.value;
}</pre>

<div class="note">
<p><strong>Note :</strong> Attention, certaines années peuvent contenir 53 semaines ! (cf. <a href="https://en.wikipedia.org/wiki/ISO_week_date#Weeks_per_year">cet article Wikipédia</a>) Il vous faudra prendre cela en compte si vous souhaitez développer des applications réelles.</p>
</div>

<h2 id="Résumé_technique">Résumé technique</h2>

<table class="properties">
 <tbody>
  <tr>
   <td><strong>{{anch("Valeur")}}</strong></td>
   <td>Une chaîne de caractères ({{domxref("DOMString")}}) qui représente une date et une heure (selon le fuseau horaire local) ou bien une chaîne de caractères vide.</td>
  </tr>
  <tr>
   <td><strong>Évènements</strong></td>
   <td>{{domxref("HTMLElement/change_event", "change")}} et {{domxref("HTMLElement/input_event", "input")}}</td>
  </tr>
  <tr>
   <td><strong>Attributs pris en charge</strong></td>
   <td>{{htmlattrxref("autocomplete", "input")}}, {{htmlattrxref("list", "input")}}, {{htmlattrxref("readonly", "input")}} et {{htmlattrxref("step", "input")}}.</td>
  </tr>
  <tr>
   <td><strong>Attributs IDL</strong></td>
   <td><code>list</code>, <code>value</code>, <code>valueAsNumber</code>.</td>
  </tr>
  <tr>
   <td><strong>Méthodes</strong></td>
   <td>{{domxref("HTMLInputElement.select", "select()")}}, {{domxref("HTMLInputElement.stepDown", "stepDown()")}}, {{domxref("HTMLInputElement.stepUp", "stepUp()")}}.</td>
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
   <td>{{SpecName('HTML WHATWG', 'forms.html#local-date-and-time-state-(type=datetime-local)', '&lt;input type="datetime-local"&gt;')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', 'forms.html##local-date-and-time-state-(type=datetime-local)', '&lt;input type="datetime-local"&gt;')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("html.elements.input.input-datetime-local")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>L'élément générique {{HTMLElement("input")}} ainsi que l'interface DOM qu'il implémente : {{domxref("HTMLInputElement")}}</li>
 <li><code><a href="/fr/docs/Web/HTML/Element/input/date">&lt;input type="date"&gt;</a></code> and <code><a href="/fr/docs/Web/HTML/Element/input/time">&lt;input type="time"&gt;</a></code></li>
 <li><a href="/fr/docs/Web/Guide/HTML/Formulaires/Les_blocs_de_formulaires_natifs#Sélection_de_date_et_d'horaire">Un tutoriel sur les sélecteurs de date et d'heure</a></li>
 <li><a href="/fr/docs/Web/HTML/Formats_date_heure_HTML">Les formats de date et d'heure utilisés en HTML</a></li>
</ul>
