---
title: Rendu côté client (CSR)
slug: Glossary/CSR
l10n:
  sourceCommit: 238b07dfeb8c347c590bd02a63140867525d511c
---

Le **rendu côté client** ou <abbr>RCC</abbr> (<i lang="en">client-side rendering</i> ou <abbr>CSR</abbr> en anglais) désigne la pratique consistant à générer le contenu HTML à l'aide de JavaScript dans le navigateur. Le RCC s'oppose au {{Glossary("SSR", "rendu côté serveur (RCS)")}}, où le serveur génère le contenu HTML. Les deux techniques ne sont pas exclusives et peuvent être utilisées ensemble dans une même application.

Une application purement RCC peut renvoyer le contenu HTML suivant&nbsp;:

```html
<!doctype html>
<html lang="fr">
  <head>
    <title>Mon site</title>
    <script src="bundle.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <noscript>
      <p>Cette application nécessite JavaScript pour fonctionner.</p>
    </noscript>
  </body>
</html>
```

Le contenu réel de la page est ensuite généré par JavaScript dans un fichier `bundle.js`, avec la [manipulation du DOM](/fr/docs/Web/API/Document_Object_Model).

Les avantages du RCC incluent&nbsp;:

- Interactivité&nbsp;: toute mise à jour de la page, y compris les changements de route, ne nécessite pas de rechargement complet. L'application paraît ainsi plus rapide et plus réactive.
- Performance&nbsp;: le serveur n'a besoin d'envoyer que le HTML initial et les ressources JavaScript. Les mises à jour suivantes peuvent être récupérées avec une API, ce qui peut être plus rapide que de charger une page HTML complète et réduit la charge serveur.

Le <abbr title="Rendu Côté Serveur">RCS</abbr> et le RCC ont chacun leurs compromis de performance, et il est possible de combiner les deux pour profiter des avantages de chaque technique. Par exemple, le serveur peut générer un squelette de page avec des espaces vides, et le client peut ensuite récupérer des données supplémentaires et mettre à jour la page selon les besoins.

Notez que les {{Glossary("SPA", "applications à page unique (APU)")}} ne nécessitent pas forcément le RCC. Les frameworks modernes comme [React](/fr/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started), [Vue <sup>(angl.)</sup>](https://vuejs.org/svelte) et [Svelte <sup>(angl.)</sup>](https://svelte.dev/) permettent de créer des <abbr title="Applications à Page Unique">APU</abbr> avec des capacités RCS.

## Voir aussi

- [Introduction aux frameworks côté client&nbsp;: rendu côté serveur](/fr/docs/Learn_web_development/Core/Frameworks_libraries/Introduction#server-side_rendering)
- [Rendu côté client](https://fr.wikipedia.org/wiki/Page_web_dynamique) sur Wikipédia
- {{Glossary("SSR", "Rendu côté serveur")}}
- {{Glossary("SSG", "Générateur de site statique")}}
- {{Glossary("SPA", "Application à page unique")}}
