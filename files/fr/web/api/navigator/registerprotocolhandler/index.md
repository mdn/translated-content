---
title: window.navigator.registerProtocolHandler
slug: Web/API/Navigator/registerProtocolHandler
tags:
  - Firefox 3
translation_of: Web/API/Navigator/registerProtocolHandler
---
{{ ApiRef() }}

### Résumé

Permet aux sites web de s'enregistrer en tant que gestionnaires possibles pour des protocoles particuliers.

{{ Note("Un site web ne peut enregistrer de gestionnaires de protocoles que pour lui-même. Pour des raisons de sécurité, il n\'est pas possible pour une extension ou un site d\'enregistrer des gestionnaires de protocoles ciblant d\'autres sites.") }}

### Syntaxe

    window.navigator.registerProtocolHandler(protocole,uri,titre);

- `protocole` est le protocole que le site désire gérer, sous la forme d'une chaîne.
- `uri` est l'URI du gestionnaire sous la forme d'une chaîne. Il peut contenir « %s » pour indiquer où insérer l'URI échappée du document à gérer, comme montré dans l'exemple plus bas.
- `titre` est le titre du gestionnaire présenté à l'utilisateur, sous la forme d'une chaîne.

### Exemple

Si votre application web est située à `http://www.example.com`, vous pouvez enregistrer un gestionnaire de protocole lui permettant de gérer « mailto » comme ceci :

    navigator.registerProtocolHandler("mailto",
                                     "https://www.example.com/?to=%s",
                                     "Example Mail");

Ceci crée un gestionnaire permettant aux liens `mailto` de diriger l'utilisateur vers l'application web, en insérant l'adresse spécifiée dans le lien dans l'URL.

### Spécification

Spécifié dans le [brouillon de travail Web Applications 1.0](http://whatwg.org/specs/web-apps/current-work/#custom-handlers) du WHATWG.

### Voir également

- [Gestionnaires de protocoles web](/fr/docs/Web/API/Navigator/registerProtocolHandler/Web-based_protocol_handlers)
