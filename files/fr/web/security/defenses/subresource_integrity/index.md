---
title: Intégrité des sous-ressources (Subresource Integrity)
short-title: Intégrité des sous-ressources
slug: Web/Security/Defenses/Subresource_Integrity
l10n:
  sourceCommit: 39070892d5d1a5cc55312a0ac10c97f4c339384f
---

**L'intégrité des sous-ressources** (<i lang="en">Subresource Integrity</i> en anglais, aussi abbrégé <abbr>SRI</abbr>) est une fonctionnalité de sécurité qui permet aux navigateurs de vérifier que les ressources qu'ils récupèrent (par exemple, depuis un [CDN](/fr/docs/Glossary/CDN)) sont délivrées sans manipulation inattendue. Elle fonctionne en vous permettant de fournir un hachage cryptographique auquel la ressource récupérée doit correspondre.

> [!NOTE]
> Pour la vérification de l'intégrité d'une sous-ressource servie depuis une origine différente de celle du document dans lequel elle est intégrée, les navigateurs vérifient également la ressource à l'aide du [partage des ressources entre origines (CORS)](/fr/docs/Web/HTTP/Guides/CORS), afin de s'assurer que l'origine qui sert la ressource autorise son partage avec l'origine demandeuse.

## Comment l'intégrité des sous-ressources aide

Les sites web choisissent parfois de s'appuyer sur un tiers tel qu'un {{Glossary("CDN", "réseau de diffusion de contenu (CDN)")}} pour héberger certaines de leurs ressources, plutôt que d'héberger toutes leurs ressources eux-mêmes. Par exemple, un document servi depuis `https://example.com` peut inclure une ressource provenant d'un autre emplacement&nbsp;:

```html
<script src="https://not-example.com/script.js"></script>
```

Cela comporte un risque&nbsp;: si un·e attaquant·e prend le contrôle de l'hébergeur tiers, il·elle peut injecter du contenu malveillant arbitraire dans ses fichiers (ou remplacer complètement les fichiers) et peut donc potentiellement attaquer les sites qui récupèrent des fichiers depuis cet hébergeur.

L'intégrité des sous-ressources vous permet d'atténuer certains risques d'attaques de ce type, en garantissant que les fichiers récupérés par votre application ou document web ont été délivrés sans qu'un·e attaquant·e ait injecté de contenu supplémentaire dans ces fichiers — et sans qu'aucune autre modification n'ait été apportée à ces fichiers.

## Utilisation de l'intégrité des sous-ressources

Vous utilisez la fonctionnalité d'intégrité des sous-ressources en définissant un hachage cryptographique encodé en base64 d'une ressource (fichier) que vous demandez au navigateur de récupérer, dans la valeur de l'attribut `integrity` d'un élément {{HTMLElement("script")}} ou d'un élément {{HTMLElement("link")}} avec [`rel="stylesheet"`](/fr/docs/Web/HTML/Reference/Attributes/rel#stylesheet), [`rel="preload"`](/fr/docs/Web/HTML/Reference/Attributes/rel/preload) ou [`rel="modulepreload"`](/fr/docs/Web/HTML/Reference/Attributes/rel/modulepreload).

Une valeur d'`integrity` commence par au moins une chaîne de caractères, chaque chaîne de caractères comportant un préfixe indiquant un algorithme de hachage particulier (actuellement, les préfixes autorisés sont `sha256`, `sha384` et `sha512`), suivi d'un tiret, et se terminant par le hachage encodé en base64.

> [!NOTE]
> Une valeur **integrity** peut contenir plusieurs hachages séparés par des espaces. Une ressource sera chargée si elle correspond à l'un de ces hachages.

Exemple de chaîne de caractères `integrity` avec un hachage sha384 encodé en base64&nbsp;:

```plain
sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC
```

Ici, `oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC` est la partie «&nbsp;hachage&nbsp;», et le préfixe `sha384` indique qu'il s'agit d'un hachage sha384.

> [!NOTE]
> La partie «&nbsp;hachage&nbsp;» d'une valeur `integrity` est, à proprement parler, un **_digest cryptographique_** obtenu en appliquant une fonction de hachage particulière à une entrée (par exemple, un fichier script ou feuille de style). Mais il est courant d'utiliser le terme «&nbsp;hachage&nbsp;» pour désigner un _digest cryptographique_, c'est donc ce qui est utilisé dans cet article.

### Outils pour générer des hachages SRI

#### Générateur de hachage SRI

Le [Générateur de hachage SRI <sup>(angl.)</sup>](https://www.srihash.org/) est un outil en ligne que vous pouvez utiliser pour générer des hachages SRI.

#### Utilisation d'OpenSSL

Vous pouvez générer des hachages SRI en ligne de commande avec **OpenSSL** à l'aide d'une commande comme&nbsp;:

```bash
cat FILENAME.js | openssl dgst -sha384 -binary | openssl base64 -A
```

Sous Windows, vous pouvez créer un outil pour générer des hachages SRI avec le code suivant&nbsp;:

```batch
@echo off
set bits=384
openssl dgst -sha%bits% -binary %1% | openssl base64 -A > tmp
set /p a= < tmp
del tmp
echo sha%bits%-%a%
pause
```

Pour utiliser ce code&nbsp;:

1. Enregistrez ce code dans un fichier nommé `sri-hash.bat` dans le dossier SendTo de votre environnement Windows (par exemple, `C:\Users\USER\AppData\Roaming\Microsoft\Windows\SendTo`).
2. Faites un clic droit sur un fichier dans l'Explorateur de fichiers, sélectionnez **Envoyer vers…**, puis sélectionnez `sri-hash`. Vous verrez la valeur d'intégrité dans une fenêtre de commande.
3. Sélectionnez la valeur d'intégrité et faites un clic droit pour la copier dans le presse-papiers.
4. Appuyez sur une touche pour fermer la fenêtre de commande.

> [!NOTE]
> Si OpenSSL n'est pas installé sur votre système, consultez le [site officiel du projet OpenSSL <sup>(angl.)</sup>](https://www.openssl.org/) pour obtenir des informations sur le téléchargement et l'installation. Le projet OpenSSL n'héberge pas lui-même de distributions binaires, mais maintient une liste informelle de distributions tierces&nbsp;: https://github.com/openssl/openssl/wiki/Binaries.

#### Utilisation de shasum

Vous pouvez générer des hachages SRI avec [**shasum** <sup>(angl.)</sup>](https://linux.die.net/man/1/shasum) à l'aide d'une commande comme&nbsp;:

```bash
shasum -b -a 384 FILENAME.js | awk '{ print $1 }' | xxd -r -p | base64
```

- Le passage par `xxd` convertit la sortie hexadécimale de `shasum` en binaire.
- Le passage par `awk` est nécessaire car `shasum` transmet le nom du fichier haché dans sa sortie à `xxd`. Cela peut avoir des conséquences désastreuses si le nom du fichier contient des caractères hexadécimaux valides — car `xxd` les décodera aussi et les transmettra à `base64`.

### Partage des ressources entre origines (CORS) et intégrité des sous-ressources

Pour la vérification de l'intégrité d'une sous-ressource servie depuis une origine différente de celle du document dans lequel elle est intégrée, les navigateurs vérifient également la ressource à l'aide du [partage des ressources entre origines (CORS)](/fr/docs/Web/HTTP/Guides/CORS), afin de s'assurer que l'origine qui sert la ressource autorise son partage avec l'origine demandeuse. Par conséquent, la ressource doit être servie avec un en-tête [`Access-Control-Allow-Origin`](/fr/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Origin) qui autorise le partage avec l'origine demandeuse&nbsp;:

```http
Access-Control-Allow-Origin: *
```

## Fonctionnement de l'intégrité des sous-ressources dans les navigateurs

Les navigateurs gèrent l'intégrité des sous-ressources de la manière suivante&nbsp;:

1. Lorsqu'un navigateur rencontre un élément HTML {{HTMLElement("script")}} ou {{HTMLElement("link")}} avec un attribut `integrity`, avant d'exécuter le script ou d'appliquer une feuille de style définie par l'élément {{HTMLElement("link")}}, il doit d'abord comparer le script ou la feuille de style au hachage attendu indiqué dans la valeur de l'attribut `integrity`.

   Pour la vérification de l'intégrité d'une sous-ressource servie depuis une origine différente de celle du document dans lequel elle est intégrée, les navigateurs vérifient également la ressource à l'aide du [partage des ressources entre origines (CORS)](/fr/docs/Web/HTTP/Guides/CORS), afin de s'assurer que l'origine qui sert la ressource autorise son partage avec l'origine demandeuse.

2. Si le script ou la feuille de style ne correspond pas à la valeur `integrity` associée, le navigateur doit refuser d'exécuter le script ou d'appliquer la feuille de style, et doit à la place retourner une erreur réseau indiquant que la récupération de ce script ou de cette feuille de style a échoué.

## Politique d'intégrité

Les en-têtes HTTP {{HTTPHeader("Integrity-Policy")}} et {{HTTPHeader("Integrity-Policy-Report-Only")}} permettent à un document d'imposer une politique concernant les exigences de métadonnées d'intégrité sur les sous-ressources scripts et feuilles de style chargées.

Lorsqu'un en-tête `Integrity-Policy` est défini, le navigateur bloque les requêtes en mode [no-cors](/fr/docs/Web/API/Request/mode#no-cors) ou sans attribut `integrity`, et signale également les violations si un point de rapport valide est défini.
Lorsqu'un en-tête `Integrity-Policy-Report-Only` est défini, le navigateur autorise les requêtes qui violent la politique, mais signale les violations au point de rapport (si un point de rapport valide est défini).

Les développeur·euse·s utilisent généralement `Integrity-Policy-Report-Only` comme première étape de déploiement de leur politique d'intégrité, afin de s'assurer que tous les scripts et feuilles de style chargés dans leurs documents possèdent les métadonnées d'intégrité appropriées. Une fois qu'aucun rapport de violation n'est reçu, ils·elles peuvent activer le blocage avec l'en-tête `Integrity-Policy` sans risquer de casser l'expérience utilisateur.

Les valeurs d'en-tête sont définies comme des dictionnaires de champs structurés avec les clés suivantes&nbsp;:

- `blocked-destinations`
  - : Définit une liste de [destinations de requête](/fr/docs/Web/API/Request/destination) à bloquer. Les seules valeurs autorisées sont `script` et `style`.
- `sources` {{Optional_Inline}}
  - : Définit une liste de sources d'intégrité. La valeur par défaut et seule actuellement prise en charge est `inline`. Par conséquent, ajouter `sources=(inline)` à l'en-tête a un effet similaire à l'omission de `sources`.
- `endpoints` {{Optional_Inline}}
  - : Définit une liste de [points de rapport](/fr/docs/Web/HTTP/Reference/Headers/Reporting-Endpoints#endpoint). Les points de rapport doivent être définis dans un en-tête {{HTTPHeader("Reporting-Endpoints")}}.

Lorsqu'une requête est bloquée par une politique d'intégrité, un rapport de violation de l'[API Reporting](/fr/docs/Web/API/Reporting_API) est créé avec un type `integrity-violation` et un corps de type {{DOMxRef("IntegrityViolationReportBody")}} qui inclut des informations telles que l'URL du document et la ressource bloquée.

Un rapport typique peut ressembler à ceci&nbsp;:

```json
{
  "type": "integrity-violation",
  "url": "https://example.com",
  "body": {
    "documentURL": "https://example.com",
    "blockedURL": "https://example.com/main.js",
    "destination": "script",
    "reportOnly": false
  }
}
```

## Exemples

Dans les exemples suivants, on suppose que `oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC` est déjà connu comme étant le hachage SHA-384 attendu (digest) d'un script particulier `example-framework.js`, et qu'une copie du script est hébergée à `https://example.com/example-framework.js`.

### Intégrité des sous-ressources avec l'élément \<script>

Vous pouvez utiliser l'élément HTML {{HTMLElement("script")}} suivant pour indiquer au navigateur qu'avant d'exécuter le script `https://example.com/example-framework.js`, il doit d'abord comparer le script au hachage attendu et vérifier qu'il y a correspondance.

```html
<script
  src="https://example.com/example-framework.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous"></script>
```

> [!NOTE]
> Pour plus de détails sur l'attribut `crossorigin`, voir [Attributs de configuration CORS](/fr/docs/Web/HTML/Reference/Attributes/crossorigin).

### Application de l'intégrité avec l'en-tête `Integrity-Policy`

Vous pouvez ajouter l'en-tête {{HTTPHeader("Integrity-Policy")}} à votre document pour garantir que les ressources externes qu'il charge (dans ce cas, des scripts) sont chargées avec intégrité (et ne sont pas chargées en mode [no-cors](/fr/docs/Web/API/Request/mode#no-cors)).

```http
Integrity-Policy: blocked-destinations=(script), endpoints=(integrity-endpoint, some-other-integrity-endpoint)
```

Si vous n'êtes pas certain·e que tous les scripts externes possèdent des métadonnées d'intégrité, vous pouvez activer la version «&nbsp;rapport uniquement&nbsp;» de la fonctionnalité et commencer à recevoir des rapports de violation.
Vous pouvez le faire avec l'en-tête {{HTTPHeader("Integrity-Policy-Report-Only")}}.

```http
Integrity-Policy-Report-Only: blocked-destinations=(script), endpoints=(integrity-endpoint, some-other-integrity-endpoint)
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Politique de sécurité du contenu](/fr/docs/Web/HTTP/Guides/CSP)
- L'en-tête HTTP {{HTTPHeader("Content-Security-Policy")}}.
- [Un CDN qui ne peut pas vous XSSer&nbsp;: utiliser Subresource Integrity <sup>(angl.)</sup>](https://frederikbraun.de/using-subresource-integrity.html)
- [Générateur de hachage SRI <sup>(angl.)</sup>](https://www.srihash.org/)
