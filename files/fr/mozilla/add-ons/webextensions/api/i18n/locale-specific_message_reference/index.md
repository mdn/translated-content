---
title: Locale-specific message reference
slug: Mozilla/Add-ons/WebExtensions/API/i18n/Locale-Specific_Message_reference
tags:
  - Internationalization
  - Localization
  - Reference
  - String
  - WebExtensions
  - i18n
  - message
  - messages.json
  - placeholders
translation_of: Mozilla/Add-ons/WebExtensions/API/i18n/Locale-Specific_Message_reference
---
<p>{{AddonSidebar()}}</p>

<p>Chaque extension internationalisée a au moins un fichier nommé <code>messages.json</code> qui fournit des chaînes spécifiques aux paramètres régionaux. Cette page décrit le format des fichiers <code>messages.json</code>.</p>

<div class="note">
<p><strong>Note :</strong> Pour plus d'informations sur l'internationalisation de vos extensions, consultez notre guide <a href="/fr/Add-ons/WebExtensions/WebExtension_i18n">i18n</a>.</p>
</div>

<h2 id="Exemple_messages.json">Exemple messages.json</h2>

<p>Le code suivant montre un exemple de fichier <code>messages.json file</code>, tiré de notre extension <a href="https://github.com/mdn/webextensions-examples/tree/master/notify-link-clicks-i18n">d'exemple notify-link-clicks-i18n</a>. Seuls les champs "<em>name</em>" et "message" ont obligatoires.</p>

<pre class="brush: json">{
  "extensionName": {
    "message": "Notify link clicks i18n",
    "description": "Name of the extension."
  },

  "extensionDescription": {
    "message": "Shows a notification when the user clicks on links.",
    "description": "Description of the extension."
  },

  "notificationTitle": {
    "message": "Click notification",
    "description": "Title of the click notification."
  },

  "notificationContent": {
    "message": "You clicked $URL$.",
    "description": "Tells the user which link they clicked.",
    "placeholders": {
      "url" : {
        "content" : "$1",
        "example" : "https://developer.mozilla.org"
      }
    }
  }
}</pre>

<h2 id="Placement">Placement</h2>

<p>Vos fichiers <code>messages.json</code> doivent être placés dans des répertoires nommés d'après les paramètres régionaux que chacun supporte — <code>en</code>, <code>de</code>, <code>ja</code>, etc. Ceux-ci doivent être placés dans un répertoire appelé <code>_locales</code>, à l'intérieur de la racine de votre extension.</p>

<h2 id="Détails_des_membres">Détails des membres</h2>

<p>Cette section décrit chaque membre qui peut apparaître dans un fichier <code>messages.json</code>.</p>

<h3 id="name">name</h3>

<p>Chaque membre de niveau supérieur est nommé d'après le nom de la chaîne de message que vous localisez, par exemple <code>"extensionName"</code> ou <code>"notificationContent"</code> dans l'exemple ci-dessus. Chaque nom est insensible à la casse et agit comme une clé vous permettant de récupérer le texte du message localisé.</p>

<p>Le nom peut inclure les caractères suivants :</p>

<ul>
 <li>A-Z</li>
 <li>a-z</li>
 <li>0-9</li>
 <li>_ (underscore)</li>
 <li>@</li>
</ul>

<div class="note"><p><strong>Note :</strong> Vous ne devez pas définir les noms commençant par @@. Ces noms sont réservés aux <a href="/fr/Add-ons/WebExtensions/Internationalization#Predefined_messages">messages prédéfinis</a>.</p></div>

<h3 id="message">message</h3>

<p>Au moins, cette propriété doit être définie pour chaque chaîne. Le membre <code>"message"</code> contient une chaîne localisée qui peut contenir {{anch("placeholders")}}. Vous pouvez utiliser :</p>

<ul>
 <li><em>$placeholder_name$</em> (case insensitive) pour insérer un espace réservé particulier (par exemple $URL$ dans l'exemple ci-dessus) dans votre chaîne.</li>
 <li><code>$1</code>, <code>$2</code>,<code> $3</code>, etc. pour insérer directement les valeurs obtenues à partir d'un {{WebExtAPIRef("i18n.getMessage()")}} appel dans votre chaîne.</li>
</ul>

<p>Autres points à noter :</p>

<ul>
 <li>Tout nombre de signes dollar consécutifs apparaissant dans les chaînes est remplacé par le même nombre de signes dollar moins un. donc, $$ &gt; $, $$$ &gt; $$, etc.</li>
 <li>Lorsque le fichier de paramètres régionaux est lu, les jetons correspondant à  <code>/\$([a-z0-9_@]+)\$/i</code> sont remplacés par la valeur correspondante de l'objet "placeholders" de la chaîne. Ces substitutions se produisent avant le traitement des  <code>/\$\d/</code> jetons dans le message.</li>
 <li>Lorsqu'une chaîne locale est utilisée, les jetons correspondant à <code>/\$\d+/</code> sont remplacés par les remplacements passés à {{WebExtAPIRef("i18n.getMessage()")}}.</li>
 <li><code>getMessage()</code> ne traitera pas les appels avec plus de 9  placeholders/substitutions.</li>
</ul>

<h3 id="description">description</h3>

<p>{{optional_inline}}</p>

<p>Le membre <code>"description"</code> doit contenir une description du contenu de la chaîne de message, destinée à fournir un traducteur pour aider à créer la meilleure traduction possible de la chaîne.</p>

<h3 id="placeholders">placeholders</h3>

<p>{{optional_inline}}</p>

<p>Le membre <code>"placeholders"</code> définit une ou plusieurs sous-chaînes à utiliser dans le message — celles-ci peuvent être utilisées pour coder en dur les éléments que vous ne voulez pas traduire, ou vous référer à des variables.</p>

<p>Chaque définition de sous-chaîne d'espace réservé possède un certain nombre de valeurs :</p>

<pre class="brush: json">"url" : {
  "content" : "$1",
  "example" : "https://developer.mozilla.org"
}</pre>

<h4 id="Nom_placeholder">Nom placeholder</h4>

<p>Le nom de l'espace réservé est utilisé pour représenter l'espace réservé dans la chaîne de substitution (par exemple <code>"url"</code> devient <code>$url$</code>). Il est insensible à la casse et peut contenir les mêmes caractères qu'une chaîne de message {{anch("name")}}.</p>

<h4 id="contenu">contenu</h4>

<p>L'élément "contenu" définit le contenu de l'espace réservé. Cela peut être une chaîne codée en dur, telle que "My placeholder", mais elle peut également inclure des valeurs obtenues à partir d'un appel {{WebExtAPIRef("i18n.getMessage()")}}. Cette propriété est obligatoire Pour plus d'informations, voir <a href="/fr/Add-ons/WebExtensions/Internationalization#Retrieving_message_strings_from_JavaScript">Récupération des chaînes de messages à partir de Javascript</a>.</p>

<h4 id="exemple">exemple</h4>

<p>{{optional_inline}}</p>

<p>L'élément optionnel "exemple" est là encore destiné à aider les traducteurs en leur montrant un exemple de la façon dont l'espace réservé apparaîtrait aux utilisateurs finaux, leur permettant de faire le meilleur choix lors de la localisation du fichier.</p>
