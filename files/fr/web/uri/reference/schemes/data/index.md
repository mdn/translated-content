---
title: URLs de données
short-title: "data:"
slug: Web/URI/Reference/Schemes/data
l10n:
  sourceCommit: 9f7e7e9075e9f2b1937d2c8000f52a8ff76bff52
---

**URLs de données**, URLs préfixées par le schéma `data:`, permettent aux créateur·ice·s de contenu d'intégrer de petits fichiers inline dans des documents. Elles étaient auparavant connues sous le nom de «&nbsp;data URIs&nbsp;» jusqu'à ce que ce nom soit retiré par le WHATWG.

> [!NOTE]
> Les URLs de données sont traitées comme des origines opaques uniques par les navigateurs modernes, plutôt que d'hériter de l'origine de l'objet de configuration responsable de la navigation.

## Syntaxe

```url
data:[<media-type>][;base64],<data>
```

- `data:`
  - : Le schéma de l'URL.
- `<media-type>` {{Optional_Inline}}
  - : Le [type MIME](/fr/docs/Web/HTTP/Guides/MIME_types) indiquant le type de donnée, comme `image/jpeg` pour un fichier image JPEG. Si omis, la valeur par défaut est `text/plain;charset=US-ASCII`. Vous pouvez consulter [une explication complète de la structure des types MIME](/fr/docs/Web/HTTP/Guides/MIME_types) et [un tableau des types MIME courants sur le web](/fr/docs/Web/HTTP/Guides/MIME_types/Common_types).
- `;base64` {{Optional_Inline}}
  - : Indique que la donnée doit être décodée en base64&nbsp;; voir [encodage des données au format base64](#encodage_des_données_au_format_base64).
- `<data>`
  - : La donnée elle-même. Si la donnée contient des [caractères définis comme réservés dans la RFC 3986 <sup>(angl.)</sup>](https://datatracker.ietf.org/doc/html/rfc3986#section-2.2), ou contient des espaces, des retours à la ligne ou d'autres caractères non imprimables, ces caractères doivent être {{Glossary("Percent-encoding", "encodés en pourcentage")}}. Si la donnée est textuelle, vous pouvez intégrer le texte (en utilisant les entités ou échappements appropriés selon le type de document englobant). Sinon, vous pouvez définir `base64` pour intégrer des données binaires encodées en base64.

Quelques exemples&nbsp;:

- `data:,Bonjour%2C%20le%20Monde%20%21`
  - : Les données text/plain `Bonjour, le Monde !`. Notez que la virgule est {{Glossary("Percent-encoding", "encodée en pourcentage")}} en `%2C`, et l'espace en `%20`.
- `data:text/plain;base64,SGVsbG8sIFdvcmxkIQ==`
  - : Version encodée en base64 de l'exemple ci-dessus
- `data:text/html,%3Ch1%3EBonjour%2C%20le%20Monde%20%21%3C%2Fh1%3E`
  - : Un document HTML avec `<h1>Bonjour, le Monde !</h1>`
- `data:text/html,%3Cscript%3Ealert%28%27salut%27%29%3B%3C%2Fscript%3E`
  - : Un document HTML avec `<script>alert('salut');</script>` qui exécute une alerte JavaScript. Notez que la balise fermante du script est requise.

## Encodage des données au format base64

Base64 est un groupe de schémas d'encodage binaire-vers-texte qui représentent des données binaires dans une chaîne de caractères {{Glossary("ASCII")}} en les traduisant en une représentation en base 64. Comme elle n'utilise que des caractères autorisés par la syntaxe des URLs («&nbsp;sûr pour les URLs&nbsp;»), on peut encoder des données binaires dans des URLs de données sans risque. Base64 utilise les caractères `+` et `/`, qui peuvent avoir des significations particulières dans les URLs. Comme les URLs de données n'ont pas de segments de chemin ou de paramètres de requête, cet encodage est sûr dans ce contexte.

### Encodage en JavaScript

Les APIs web proposent des méthodes natives pour encoder ou décoder en base64&nbsp;: {{Glossary("Base64")}}.

### Encodage sur un système Unix

L'encodage base64 d'un fichier ou d'une chaîne sur les systèmes Linux et macOS peut être réalisé avec la commande `base64` (ou, en alternative, l'utilitaire `uuencode` avec l'argument `-m`).

```bash
echo -n bonjour|base64
# sorties vers la console : Ym9uam91cg==

echo -n bonjour>a.txt
base64 a.txt
# sorties vers la console : Ym9uam91cg==

base64 a.txt>b.txt
# sorties vers le fichier b.txt : Ym9uam91cg==
```

### Encodage sous Microsoft Windows

Sous Windows, [Convert.ToBase64String <sup>(angl.)</sup>](https://learn.microsoft.com/en-us/dotnet/api/system.convert.tobase64string?view=net-5.0) de PowerShell peut être utilisé pour effectuer l'encodage Base64&nbsp;:

```plain
[convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes("bonjour"))
# sorties vers la console : Ym9uam91cg==
```

Alternativement, un shell GNU/Linux (comme [WSL](https://fr.wikipedia.org/wiki/Windows_Subsystem_for_Linux)) fournit l'utilitaire `base64`&nbsp;:

```bash
bash$ echo -n bonjour | base64
# sorties vers la console : Ym9uam91cg==
```

## Problèmes habituels

Cette section décrit les problèmes qui apparaissent fréquemment lors de la création et de l'utilisation des URLs de type `data`

```plain
data:text/html,beaucoup de texte…<p><span class%3D"bottom">bas</span>?arg=val</p>
```

Cela représente une ressource HTML dont le contenu est le suivant :

```html
beaucoup de texte…
<p><span class="bottom">bas</span>?arg=val</p>
```

- Syntaxe
  - : Le format des URLs de type `data` est très simple, mais il est facile d'oublier la virgule avant le segment de données ou de mal encoder la donnée en base64.
- Mise en forme HTML
  - : Une URL de type `data` fournit un fichier dans un fichier, qui peut potentiellement être très large par rapport au document englobant. En tant qu'URL, la donnée devrait pouvoir être mise en forme avec des espaces (saut de ligne, tabulation ou espace), mais des problèmes pratiques apparaissent [lors de l'encodage en base64 <sup>(angl.)</sup>](https://bugzil.la/73026#c12).
- Limitations de longueur
  - : Les navigateurs ne sont pas obligés de supporter une longueur maximale particulière pour la donnée.
    Chromium et Firefox limitent les URLs de type `data` à 512 Mo, et Safari (WebKit) à 2048 Mo.
    Notez que Firefox 97 a augmenté la limite de 256 Ko à 32 Mo, et [Firefox 136 l'a portée à 512 Mo](/fr/docs/Mozilla/Firefox/Releases/136).
- Absence de gestion d'erreur
  - : Les paramètres invalides dans le média, ou les coquilles lors de la spécification de `'base64'`, sont ignorés, mais aucune erreur n'est retournée.
- Aucun support des chaînes de requête, etc.
  - : La partie donnée d'une URL de type `data` est opaque, donc toute tentative d'utiliser une chaîne de requête (paramètres spécifiques à la page, avec la syntaxe `<url>?parameter-data`) avec une URL de type `data` inclura simplement la chaîne de requête dans la donnée représentée par l'URL.
- Problèmes de sécurité
  - : De nombreux problèmes de sécurité (par exemple, le phishing) ont été associés aux URLs de type `data`, et à la navigation vers celles-ci au niveau supérieur du navigateur. Pour limiter ces problèmes, la navigation de haut niveau vers les URLs `data:` est bloquée dans tous les navigateurs modernes. Voir [cet article du Mozilla Security Team <sup>(angl.)</sup>](https://blog.mozilla.org/security/2017/11/27/blocking-top-level-navigations-data-urls-firefox-59/) pour plus de détails.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir_aussi

- L'entrée de glossaire {{Glossary("Base64")}}
- L'entrée de glossaire {{Glossary("Percent-encoding")}}
- La méthode globale {{DOMxRef("WorkerGlobalScope.atob()", "atob()")}}
- La méthode globale {{DOMxRef("WorkerGlobalScope.btoa()", "btoa()")}}
- Le type de donnée CSS {{CSSxRef("url_value", "&lt;url&gt;")}}
- L'entrée de glossaire {{Glossary("URI")}}
