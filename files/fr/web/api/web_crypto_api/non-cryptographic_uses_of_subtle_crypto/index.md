---
title: Utilisations non-cryptographiques de SubtleCrypto
slug: Web/API/Web_Crypto_API/Non-cryptographic_uses_of_subtle_crypto
---

{{APIRef("Web Crypto API")}}

Dans cet article, nous nous intéresserons à la méthode [`digest()`](/fr/docs/Web/API/SubtleCrypto/digest) de l'interface [`SubtleCrypto`](/fr/docs/Web/API/SubtleCrypto). De nombreuses autres méthodes appartenant à [l'API Web Crypto](/fr/docs/Web/API/Web_Crypto_API) ciblent des cas d'usage cryptographiques très spécifiques, créer des empreintes (<i lang="en">hash</i>) de contenus (ce que fait la méthode `digest()`) peut s'avérer utile dans diverses situations.

Cet article ne couvre pas les usages cryptographiques de l'interface [`SubtleCrypto`](/fr/docs/Web/API/SubtleCrypto). Une chose importante à retenir de cet article est qu'**il ne faut pas utiliser cette API** à des fins cryptographiques en production parce qu'elle est puissante et accède aux primitives de bas niveau. Pour l'utiliser de façon correcte, vous devrez suivre de nombreuses étapes propres à votre contexte. Si une de ces étapes n'est pas réalisée correctement, dans le meilleur des cas, votre code ne fonctionnera pas du tout et dans le pire des cas, il s'exécutera et vous mettrez les personnes qui l'utilisent en danger sans le savoir, car elles utiliseront un produit qui n'est pas sécurisé.

Dans l'absolu, vous pouvez même ne pas avoir besoin du tout de [l'API Web Crypto](/fr/docs/Web/API/Web_Crypto_API). De nombreuses tâches avec une composante cryptographique sont déjà gérées nativement par la plateforme web. Si vous souhaitez vous prémunir, par exemple, d'une attque de l'homme du milieu où des points d'accès WiFi pourraient lire les informations entre le client et le serveur, cela sera résolu en mettant en œuvre [HTTPS](/fr/docs/Glossary/https). Vous souhaitez envoyer des données de façon sécurisée entre les utilisateurs&nbsp;? Vous pouvez alors établir une connexion entre les utilisateurs avec [les canaux de données WebRTC](/fr/docs/Web/API/WebRTC_API/Using_data_channels) qui sont chiffrés et font partie du standard.

L'interface [`SubtleCrypto`](/fr/docs/Web/API/SubtleCrypto) fournit un accès aux primitives de bas niveau pour effectuer des tâches cryptographiques mais l'implémentation d'un système reposant sur ces outils est une chose complexe. Les pièges sont difficiles à déceler et peuvent induire un faux sens de sécurité. Cela pourrait causer des résultats catastrophiques si les personnes qui utilisent un tel système partagent des données sensibles ou critiques.

Dans le doute, ne réalisez pas ces tâches vous-même et appuyez-vous sur quelqu'un qui a de l'expérience en cryptographie puis assurez-vous que votre logiciel soit audité par un expert en sécurité.

## Calculer l'empreinte d'un fichier

Voici la chose la plus simple qu'il est possible de faire avec [l'API Web Crypto](/fr/docs/Web/API/Web_Crypto_API). Cela ne nécessite pas de générer des clés ou des certificats et ne demande qu'une seule étape.

[Le hachage](/fr/docs/Glossary/hash) est une technique permettant de convertir une longue chaîne d'octets en une chaîne plus petite et où tout changement apporté à la chaîne d'origine (y compris un petit changement) introduira de grands changements dans la plus petite chaîne. Cette technique est utile pour vérifier que deux fichiers sont identiques sans avoir à comparer soi-même chaque octet de chaque fichier. Elle permet ainsi de n'avoir à comparer que deux courtes chaînes de caractères. Le hachage est une opération **à sens unique**. Il n'est pas possible de générer la chaîne d'octets à partir de l'empreinte produit par le hachage.

Si deux empreintes sont les mêmes, mais que les fichiers utilisés pour la génération sont différents, on parle alors de _collision_. Cela peut arriver par accident de façon extrêmement improbable et pour une fonction de hachage sécurisée comme SHA256, est quasi impossible à réaliser volontairement. Aussi, si les deux empreintes (les chaînes de caractères courtes) sont les mêmes, on peut très raisonnablement penser que les deux fichiers considérés sont identiques.

Au moment où nous écrivons ces lignes (décembre 2021), SHA256 est la fonction de hachage généralement utilisée pour les fichiers mais il existe [d'autres fonctions de hachage](/fr/docs/Web/API/SubtleCrypto#supported_algorithms) disponibles avec l'interface `SubtleCrypto`. Généralement, on représente une empreinte SHA256 par une chaîne de caractères composées de 64 chiffres hexadécimaux. Un chiffre hexadécimal utilise les caractères de 0 à 9 et de a à f, ce qui permet de représenter 4 bits d'information. Pour résumer, un hachage avec SHA256 convertit n'importe quelle longueur de données en une empreinte quasi unique composée de 256 bits de données.

Cette technique est généralement utilisée par les sites qui permettent de télécharger des exécutables afin de vérifier que les fichiers téléchargés correspondent à ce qui a été initialement mis à disposition par l'autrice ou l'auteur. Cela permet de vérifier que l'exécutable reçu correspond bien et qu'on n'installe pas de logiciel malveillant à la place du logiciel souhaité. Généralement, on procède comme ceci&nbsp;:

1. On note le nom du fichier et l'empreinte SHA256 fournis par le site web.
2. On télécharge l'exécutable.
3. On exécute `sha256sum /chemin/vers/le/fichier` dans le terminal afin de générer l'empreinte localement (pour macOS ou Windows, la commande peut être différente et il peut être nécessaire d'installer un programme pour le calcul pour SHA256, [voici un lien pour macOS](https://unix.stackexchange.com/questions/426837/no-sha256sum-in-macos).
4. On compare l'empreinte fournie par le site et la chaîne calculée localement&nbsp;: les deux doivent correspondre. Dans le cas contraire, cela signifie que le fichier a été compromis.

![Exemples d'empreintes SHA256 pour le téléchargement du logiciel Blender. Elles ressemblent à des nombres de 32 nombres hexadécimaux suivis par un nom de fichier comme "blender.zip"](blender-sha256-example.png)

La méthode [`digest()`](/fr/docs/Web/API/SubtleCrypto/digest) de `SubtleCrypto` peut être utile pour ça. Pour générer une empreinte d'un fichier, on pourra suivre la procédure suivante.

Tout d'abord ajoutons quelques éléments HTML pour charger des fichiers et affichons en résultat les empreintes SHA-256&nbsp;:

```html
<h3>Démonstration pour le calcul d'une empreinte SHA256 pour un fichier</h3>

<label
  >Choisir le ou les fichier(s) à hacher
  <input type="file" id="fichier" name="fichier" multiple
/></label>
<output style="display:block;font-family:monospace;"></output>
```

Ensuite on utilise l'interface `SubtleCrypto` pour traiter les fichiers. Pour cela&nbsp;:

- On lit les fichiers pour les stocker dans un objet [ArrayBuffer](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) avec [FileReader](/fr/docs/Web/API/FileReader).
- On utilise `crypto.subtle.digest('SHA-256', arrayBuffer)` pour calculer l'empreinte à partir du `ArrayBuffer`.
- On convertit l'empreinte résultante (stockée sous la forme d'un autre `ArrayBuffer`) en une chaîne de caractères.

```js
const output = document.querySelector("output");
const fichier = document.getElementById("fichier");

// On lance le hachage lorsqu'un ou plusieurs fichiers ont été sélectionnés
fichier.addEventListener("change", calculerEmpreinteFichiers);

// La fonction digest est asynchrone, elle renvoie une promesse.
// On utilise la syntaxe async/await afin de simplifier le code.
async function empreinteFichier(fichier) {
  const arrayBuffer = await fichier.arrayBuffer();

  // On utilise l'API SubtleCrypto pour calculer une empreinte SHA256
  // de l'ArrayBuffer avec le contenu du fichier.
  // L'empreinte résultante est stockée dans un ArrayBuffer
  const empreinteArrayBuffer = await crypto.subtle.digest(
    "SHA-256",
    arrayBuffer,
  );

  // Pour l'afficher comme une chaîne de caractère, on récupère la valeur
  // de chaque octet afin d'en afficher la valeur hexadécimale
  // On obtient un tableau où chaque octet du ArrayBuffer devient un élément
  // du tableau
  const uint8VueEmpreinte = new Uint8Array(empreinteArrayBuffer);
  // On convertit ensuite ce tableau typé en un tableau classique afin
  // de le parcourir et de convertir les éléments en chiffres hexadécimaux
  // Les caractères de 0 à 9 et de a à f représentent respectivement les nombres
  // entre 0 et 16, dont chacun contient 4 bits d'information. Aussi, deux
  // chiffres hexadécimaux stockent 8 bits (soit 1 octet).
  const empreinteTexte = Array.from(uint8VueEmpreinte)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return empreinteTexte;
}

async function calculerEmpreinteFichiers(e) {
  let resultatHTML = "";
  // On parcourt chaque fichier parmi ceux sélectionnés
  for (const fichier of this.files) {
    // On calcule l'empreinte et on l'ajoute avec le nom du fichier dans
    // l'élément output.
    resultatHTML += `${fichier.name}    ${await empreinteFichier(fichier)}`;
  }
  output.innerHTML = resultatHTML;
}
```

{{EmbedLiveSample}}

### Où utiliser ça&nbsp;?

Jusqu'ici, vous pouvez penser&nbsp;: «&nbsp;_Je peux utiliser ceci sur mon site web afin que, lorsque les utilisateurs téléchargent un fichier, ils puissent s'assurer que les empreintes correspondent et être rassurés sur l'intégrité du téléchargement&nbsp;_». Toutefois, deux problèmes se posent&nbsp;:

- Le téléchargement d'exécutables devrait **toujours** être effectué avec HTTPS. Cela empêche tout intermédiaire de trafiquer le contenu. Une vérification pour compromission devient alors redondante.
- Si un attaquant est capable de remplacer le fichier à télécharger sur le serveur original, il pourra alors également remplacer le code du site qui utilise l'interface `SubtleCrypto` et le contourner afin d'indiquer que tout est correct. Un remplacement vicieux pourra être celui [de l'égalité stricte en égalité simple](/fr/docs/Web/JavaScript/Equality_comparisons_and_sameness) qui peut être difficile à distinguer dans le code&nbsp;:

```js
--- if (empreinte === empreinteCorrecte) return true;
+++ if (empreinte = empreinteCorrecte) return true;
```

Un cas où ceci peut être utile est la vérification d'un fichier téléchargé depuis une source tierce dont on n'a pas le contrôle. Cela peut être réalisable tant que l'emplacement du téléchargement a [les en-têtes CORS](/fr/docs/Glossary/CORS) activés par défaut afin de scanner le fichier avant de le rendre disponible à vos utilisateurs. Malheureusement, peu de serveurs disposent de CORS activés par défaut.

## Que signifie «&nbsp;saler le hash&nbsp;»&nbsp;?

Vous avez peut-être entendu l'expression _«&nbsp;saler le hash&nbsp;»_. Ce n'est pas quelque chose qui est directement pertinent ici, mais qu'il est intéressant de connaître.

> **Note :** Cette section aborde la sécurité des mots de passe et les fonctions de hachage fournies par `SubtleCrypto` ne sont pas adaptées à un tel usage. Pour hacher un mot de passe, il faut des fonctions de hachage lentes et coûteuses (en complexité de calcul) comme `scrypt` et `bcrypt`. SHA est conçu pour être rapide et efficace, ce qui le rend inadapté au hachage de mots de passe. Cette section est purement informationnelle, n'utilisez pas l'API Web Crypto pour hacher des mots de passe côté client.

Afin d'éviter de stocker des mots de passe en clair, on calcule leur empreinte afin que le mot de passe original ne puisse pas être reconstitué si jamais la base de données avec l'identifiant et le mot de passe était piratée. Mais on peut déterminer les mots de passe à partir des empreintes si on génère les empreintes de l'ensemble des mots de passe connu. Concaténer une chaîne de caractères aux mots de passe modifie l'empreinte. Toutefois si on utilise la même chaîne à concaténer pour tous les mots de passe, on retombe sur le même problème.

Pour résoudre ce problème, on _«&nbsp;sale le hash&nbsp;»_. Pour chaque mot de passe, on génère un «&nbsp;sel&nbsp;» (une chaîne de caractères aléatoire) qu'on concatène à la chaîne de caractères qui représente le mot de passe. On stocke alors l'empreinte et le sel dans la même base de données afin qu'on puisse effectuer la vérification lorsque la personne saisit son mot de passe. Ainsi, même si deux utilisateurs ont des mots de passe identiques, les empreintes stockées seront différentes. On voit ici qu'il est important d'avoir une fonction de hachage cryptographique coûteuse en temps afin que ça prenne beaucoup de temps de calculer les empreintes pour une grande liste de mots de passe.

## Tables de hachage avec SHA

On peut utiliser la fonction de hachage SHA1 afin de générer rapidement des empreintes non-sûres cryptographiquement. Ces empreintes sont incroyablement utiles pour convertir des données arbitraires en une clé qu'on pourra réutiliser par la suite.

Ainsi, si vous avec une base de données qui stocke un blob de données binaires dans une colonne d'une table. Cela peut poser problème, car le champ devra avoir une taille variable ou être suffisamment grand pour stocker un très grand blob. Une solution alternative consiste à générer l'empreinte du blob et à le stocker dans une table annexe avec l'empreinte comme index pour accéder au blob. L'empreinte peut alors être utilisée dans les autres tables et a le bon goût d'être de taille fixe.

Les variations possibles pour une empreinte SHA1 sont incroyablement nombreuses et il est quasi impossible de produire, accidentellement, deux blobs ayant la même empreinte SHA1. Il _est_ toutefois possible de produire intentionnellement deux fichiers différents et qui ont la même empreinte SHA1, car SHA1 n'est pas sûr au sens cryptographique. Ainsi, en théorie, un utilisateur malveillant pourra générer un blob de données qui pourra avoir la même empreinte qu'un autre et utiliser cette ressemblance en remplaçant le fichier. Cela peut représenter un vecteur d'attaque qu'il est intéressant de connaître.

## Le stockage des fichiers avec git

Git utilise les empreintes SHA1 pour deux choses qui sont intéressantes ici. Lorsque git stocke des fichiers, la référence vers ces fichiers est leur empreinte SHA1. Ainsi, git peut utiliser cette clé pour rapidement retrouver les fichiers et restaurer les données.

L'empreinte n'est pas exactement celle du contenu du fichier. git ajoute comme préfixe aux données la chaîne de caractères (en UTF8) `"blob "`, suivi de la taille du fichier en octets (écrite en base décimale), suivie du caractère null (qu'on peut écrire `"\0"` en JavaScript). Vous pouvez utiliser [l'interface `TextEncoder`](/fr/docs/Web/API/TextEncoder) de [l'API Encoding](/fr/docs/Web/API/Encoding_API) afin d'encoder du texte UTF8 (les chaînes de caractères JavaScript étant encodées en UTF16).

Le code qui suit peut être utilisé pour générer les empreintes de fichier avec le même algorithme que git. On utilise le même code HTML pour verser les fichiers, mais on ajoute des opérations complémentaires pour gérer les préfixes ajoutés devant le contenu du fichier.

```html
<h3>Démonstration du calcul SHA1 utilisé par git pour les fichiers</h3>

<label
  >Sélectionnez le ou les fichier(s) à hacher
  <input type="file" id="fichier" name="fichier" multiple />
</label>

<output style="display:block;font-family:monospace;"></output>
```

```js
const output = document.querySelector("output");
const fichier = document.getElementById("fichier");
fichier.addEventListener("change", calculerEmpreinteFichiers);

async function empreinteFichier(fichier) {
  const arrayBuffer = await fichier.arrayBuffer();

  // Git préfixe la chaîne 'blob 1234' finie par le caractère null
  // où 1234 représente la taille du fichier avant le hachage

  // Tout d'abord, calculons la longueur (en octets)
  // du fichier
  const vueUint8 = new Uint8Array(arrayBuffer);
  const taille = vueUint8.length;

  // git utilise UTF8 pour ses chaînes de caractères alors que
  // JavaScript utilise UTF16. On utilise alors un encodeur pour
  // passer de l'une à l'autre des représentations afin que le
  // préfixe soit correctement encodé.
  const encodeur = new TextEncoder();
  // La chaîne se termine par le caractère null qui s'écrit '\0' en
  // JavaScript
  const vue = encodeur.encode("blob " + taille + "\0");

  // On combine alors les deux ArrayBuffers en un seul
  const nouveauBlob = new Blob([vue.buffer, arrayBuffer], {
    type: "text/plain",
  });
  const arrayBufferPourEmpreinte = await nouveauBlob.arrayBuffer();

  // Enfin, on calcule l'empreinte, cette fois en SHA1 (c'est l'algo-
  // rithme utilisé par git).
  // Puis on renvoie une chaîne de caractères à afficher.
  return convertirEmpreinteEnTexte(
    await crypto.subtle.digest("SHA-1", arrayBufferPourEmpreinte),
  );
}

function convertirEmpreinteEnTexte(arrayBuffer) {
  const uint8View = new Uint8Array(arrayBuffer);
  return Array.from(uint8View)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

// Comme dans l'exemple précédent, on parcourt les fichiers
async function calculerEmpreinteFichiers(e) {
  let resultatHTML = "";
  for (const fichier of this.files) {
    resultatHTML += `${fichier.name}    ${await empreinteFichier(fichier)}`;
  }
  output.innerHTML = resultatHTML;
}
```

{{EmbedLiveSample}}

On voit qu'on utilise ici [l'API Encoding](/fr/docs/Web/API/Encoding_API) pour constituer le préfixe ensuite combiné avec le contenu du fichier (sous la forme d'un `ArrayBuffer`) afin de produire la chaîne de caractères représentant l'empreinte.

## Le calcul des empreintes de commit avec git

De façon analogue, git génère les empreintes de commit à partir de différentes informations dont l'empreinte du commit précédent et le message du commit. On peut alors utiliser ces empreintes pour faire référence à un commit donné.

La commande à utiliser dans un terminal Linux/Unix est&nbsp;: `(printf "commit %s\0" $(git --no-replace-objects cat-file commit HEAD | wc -c); git cat-file commit HEAD) | sha1sum`

[Source sur le calcul des empreintes sha1 de git pour les commits](https://gist.github.com/masak/2415865)

Le contenu haché est la chaîne de caractères UTF8 suivante (où le caractère null est écrit avec `\0`)&nbsp;:

```
commit [taille en octets, écrite en base décimale de cette information]\0tree [empreinte de l'arbre]
parent [empreinte du commit parent]
author [information sur l'auteur] [timestamp]
committer [information sur le committeur] [timestamp]

commit message
```

Cela permet d'avoir plusieurs champs qui ont, pris un par un, peu de chances d'être uniques, mais qui, combinés ensemble, permettent de construire un pointeur vers un unique commit. Toutefois, cette chaîne de caractères est très longue et peu pratique. Calculer l'empreinte de cette chaîne fournit alors un résultat plus court et plus pratique à manipuler.

C'est pourquoi l'empreinte change lorsqu'on amende un commit, même si on ne change pas le message de commit. Le <i lang="en">timestamp</i> a changé, ce qui suffit à modifier complètement l'empreinte.

L'information à retenir ici est que lorsqu'on dispose de différentes informations dont chacune n'est pas suffisamment unique, on peut les concaténer et calculer l'empreinte de cette concaténation pour générer une clé unique.

Nous espérons que ces exemples vous ont encouragés à utiliser cette nouvelle API. Rappelez-vous qu'il est dangereux de vouloir recréer des outils cryptographiques par vous-même. Cela dit, ces outils, à l'instar de [`crypto.digest()`](/fr/docs/Web/API/SubtleCrypto/digest), peuvent être utiles pour d'autres tâches.
