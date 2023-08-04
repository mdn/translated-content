---
title: protocol_handlers
slug: Mozilla/Add-ons/WebExtensions/manifest.json/protocol_handlers
---

{{AddonSidebar}}

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row" style="width: 30%">Type</th>
      <td><code>Tableau</code></td>
    </tr>
    <tr>
      <th scope="row">Obligatoire</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Exemple</th>
      <td>
        <pre class="brush: json">
"protocol_handlers": [
  {
    "protocol": "ircs",
    "name": "IRC Mozilla Extension",
    "uriTemplate": "https://irccloud.mozilla.com/#!/%s"
  }
]</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Utilisez cette clé pour enregistrer un ou plusieurs gestionnaires de protocole basés sur le Web.

Un gestionnaire de protocole est une application qui sait comment gérer certains types de liens : par exemple, un client de messagerie est un gestionnaire de protocole pour les liens "mailto:". Lorsque l'utilisateur clique sur un lien "mailto:", le navigateur ouvre l'application sélectionnée comme le gestionnaire pour le protocole "mailto:" (ou offre un choix de gestionnaires, en fonction de leurs paramètres).

Avec cette clé, vous pouvez enregistrer un site Web en tant que gestionnaire pour un protocole particulier. La syntaxe et la sémantique de cette clé ressemblent beaucoup à la fonction [`Navigator.registerProtocolHandler()`](/fr/docs/Web/API/Navigator/registerProtocolHandler), excepté que avec `registerProtocolHandler()` un site Web ne peut s'inscrire lui-même comme un gestionnaire.

Chaque gestionnaire de protocole possède trois propriétés, toutes obligatoires :

- `protocol`

  - : Une chaîne définissant le protocole. Cela doit être soit:

    - L'une des suivantes : "bitcoin", "dat", "dweb", "geo", "gopher", "im", "ipfs", "ipns", "irc", "ircs", "magnet", "mailto", "mms", "news", "nntp", "sip", "sms", "smsto", "ssb", "ssh", "tel", "urn", "webcal", "wtai", "xmpp".
    - Une chaîne composée d'un nom personnalisé préfixé avec "web+" ou "ext+". Par exemple : "web+foo" ou "ext+foo". Le nom personnalisé doit comporter uniquement des caractères ASCII minuscules. Il est recommandé que les extensions utilisent la forme "ext+".

- `name`
  - : Une chaîne représentant le nom du gestionnaire de protocole. Il sera affiché à l'utilisateur lorsqu'il sera interrogé s'il souhaite que ce gestionnaire ouvre le lien.
- `uriTemplate`
  - : Une chaîne représentant l'URL du gestionnaire. Cette chaîne doit inclure "%s" comme espace réservé : il sera remplacé par l'URL échappée du document à traiter. Cette URL peut être une vraie URL, ou il peut s'agir d'un numéro de téléphone, d'une adresse de courrier électronique, etc. C'est une [propriété localisable](/fr/Add-ons/WebExtensions/Internationalization#Internationalizing_manifest.json).

## Exemple

```json
"protocol_handlers": [
  {
    "protocol": "magnet",
    "name": "Magnet Extension",
    "uriTemplate": "https://example.com/#!/%s"
  }
]
```

Les gestionnaires peuvent également être des [pages d'extension](/fr/Add-ons/WebExtensions/user_interface/Extension_pages).

```json
"protocol_handlers": [
  {
    "protocol": "magnet",
    "name": "Magnet Extension",
    "uriTemplate": "/example.xhtml#!/%s"
  }
]
```

## Compatibilité des navigateurs

{{Compat}}
