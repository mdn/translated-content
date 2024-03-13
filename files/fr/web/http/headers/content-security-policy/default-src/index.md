---
title: "CSP: default-src"
slug: Web/HTTP/Headers/Content-Security-Policy/default-src
---

{{HTTPSidebar}}

La directive HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`default-src`** sert de valeur par défaut pour les autres directives CSP {{Glossary("fetch directive", "fetch directives")}}.

Pour chacune des directives suivantes, l'agent utilisateur consultera la directive `default-src` et utilisera sa valeur pour la directive demandée si celle-ci est absente :

- {{CSP("child-src")}}
- {{CSP("connect-src")}}
- {{CSP("font-src")}}
- {{CSP("frame-src")}}
- {{CSP("img-src")}}
- {{CSP("manifest-src")}}
- {{CSP("media-src")}}
- {{CSP("object-src")}}
- {{CSP("prefetch-src")}}
- {{CSP("script-src")}}
- {{CSP("script-src-elem")}}
- {{CSP("script-src-attr")}}
- {{CSP("style-src")}}
- {{CSP("style-src-elem")}}
- {{CSP("style-src-attr")}}
- {{CSP("worker-src")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Version de CSP</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Type de directive</th>
      <td>{{Glossary("Fetch directive")}}</td>
    </tr>
  </tbody>
</table>

## Syntaxe

Une ou plusieurs sources peuvent être autorisées pour cette directive :

```
Content-Security-Policy: default-src <source>;
Content-Security-Policy: default-src <source> <source>;
```

### Sources

La \<source> peut être une des suivantes :

- \<host-source>

  - : Des hôtes Internet par leur nom de domaine ou adresse IP, aussi bien qu'un [protocole](/fr/docs/URIs_and_URLs) et/ou un numéro de port. L'adresse du site peut inclure un caractère de remplacement optionnel (l'astérisque `'*'`), qui ne peut être utilisée que pour indiquer un sous-domaine ou que tous les ports existants sont des sources valides.
    Exemples:

    - `http://*.example.com`: correspondra à toutes les tentatives d'accès pour tous les sous-domaines de example.com via le protocole `http:`.
    - `mail.example.com:443`: correspondra à toutes les tentatives d'accès sur le port 443 de mail.example.com.
    - `https://store.example.com`: correspondra à toutes les tentatives d'accès à store.example.com via le protocole `https:`.
    - `*.example.com`: correspondra à toutes les tentatives d'accès pour tous les sous-domaines de example.com en utilisant le protocole courant.

- \<scheme-source>

  - : Un protocole tel que `http:` ou `https:`. Les deux-points sont nécessaires. Contrairement à d'autres valeurs ci-bas, les guillemets ne devraient pas être employés. Vous pouvez aussi spécifier des schémas de données (quoi que ce ne soit pas recommandé).

    - `data:` permet aux [URI `data:`](/fr/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) d'être utilisées comme sources de contenu. _Cette pratique manque de sécurité ; une personne malveillante peut aussi injecter des URI data: arbitraires. Utilisez cette valeur avec parcimonie certainement pas pour des scripts._
    - `mediastream:` permet aux [URI `mediastream:`](/fr/docs/Web/API/MediaStream_API) d'être utilisées comme source de contenu.
    - `blob:` permet aux [URI `blob:`](/fr/docs/Web/API/Blob) d'être utilisées comme source de contenu.
    - `filesystem:` Allows [URI `filesystem:`](/fr/docs/Web/API/FileSystem) d'être utilisées comme source de contenu.

- `'self'`
  - : Cette valeur fait référence au domaine dont est originaire le document protégé, y compris le protocole et le numéro de port. Vous devez mettre cette valeur entre guillemets. Certains navigateurs excluent spécifiquement les valeurs `blob` et `filesystem` des directives de source. Les sites nécessitant une permission pour ces types de contenu peuvent les spécifier en utilisant l'attribut Data.
- `'unsafe-eval'`
  - : Permet l'usage de la fonction `eval()` et de méthodes similaires pour créer du code à partir de chaines de caractères. Vous devez mettre cette valeur entre guillemets.
- `'unsafe-hashes'`
  - : Permet l'usage de certains [écouteurs d'évènements](/fr/docs/Web/Guide/Events/Event_handlers) par attributs. Si vous n'avez besoin que d'écouteurs d'évènements par attributs et non d'éléments {{HTMLElement("script")}} embarqués ou d'URL `javascript:`, cette valeur est plus sécurisée que `unsafe-inline`.
- `'unsafe-inline'`
  - : Permet l'usage de ressources embarquées, tels que des éléments {{HTMLElement("script")}} (sans `src`), d'URL `javascript:`, de gestionnaire d'évènement par attributs (`on<eventName>`), et d'éléments {{HTMLElement("style")}}. Vous devez mettre cette valeur entre guillemets.
- `'none'`
  - : Aucune source n'est admise. Vous devez mettre cette valeur entre guillemets.
- 'nonce-\<base64-value>'
  - : Une liste de permissions pour des scripts embarqués spécifiques en utilisant un nonce (_number used once_, nombre à usage unique) cryptographique. Le serveur doit générer un nonce à chaque fois qu'il transmet une réponse. Il est extrèmement important de fournir des nonces non prédictibles, puisque le contraire permettrait aisément de contourner la stratégie de sécurité. Voir [inline script non fiables](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#Unsafe_inline_script) pour avoir un exemple. Spécifier un nonce implique que les navigateurs modernes ignoreront la valeur `'unsafe-inline'`, qui peut toutefois être laissée pour les anciens navigateurs ne supportant pas les nonces.
- '\<hash-algorithm>-\<base64-value>'
  - : Un hash sha256, sha384 ou sha512 d'un `<script>` ou d'un `<style>`. Cette source est composée de deux parties séparées par un tiret : le nom de l'algorithme de chiffrage utilisé pour générer le hash à gauche et le hash encodé en base 64 à droite. Lors de la génération du hash, il ne faut pas inclure les balises `<script>` or `<style>` et tenir compte de la casse et des caractères blancs (espaces, retours à la ligne, etc.). Voir [inline script non fiables](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#Unsafe_inline_script) pour en avoir un exemple. En CSP 2.0, cette valeur ne s'applique qu'aux scripts embarqués. CSP 3.0 le permet aussi dans le cas de scripts externes.
- 'strict-dynamic'
  - : La valeur `strict-dynamic` spécifie que la confiance explicitement donnée à un script de la page, par le biais d'un nonce ou d'un hash, doit être propagée à tous les scripts chargés par celui-ci. En conséquence, toute les valeurs telles que `'self'` ou `'unsafe-inline'` et listes de permissions sont ignorées. Voir [script-src](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#strict-dynamic) pour en avoir un exemple.
- 'report-sample'
  - : Requiert qu'un échantillon du code violant la directive soit inclus dans le rapport envoyé.

## Exemples

### Absence d'héritage avec default-src

S'il y a d'autres directives spécifiées, `default-src` ne les affecte pas. Soit l'en-tête suivant :

```bash
Content-Security-Policy: default-src 'self'; script-src https://example.com
```

Est identique à :

```bash
Content-Security-Policy: connect-src 'self';
                         font-src 'self';
                         frame-src 'self';
                         img-src 'self';
                         manifest-src 'self';
                         media-src 'self';
                         object-src 'self';
                         script-src https://example.com;
                         style-src 'self';
                         worker-src 'self'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{HTTPHeader("Content-Security-Policy")}}
- CSP directives (<https://www.w3.org/TR/CSP/#csp-directives>):

  - {{Glossary("Fetch directive")}}
  - {{Glossary("Document directive")}}
  - {{Glossary("Navigation directive")}}
  - {{Glossary("Reporting directive")}}
  - [`upgrade-insecure-requests`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/upgrade-insecure-requests)
  - [`block-all-mixed-content`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/block-all-mixed-content)
  - [`require-sri-for`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/require-sri-for) {{experimental_inline}}
