---
title: Méthode de requête POST
short-title: POST
slug: Web/HTTP/Reference/Methods/POST
original_slug: Web/HTTP/Methods/POST
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

La méthode HTTP **`POST`** envoie des données au serveur. Le type du corps de la requête est indiqué par l'en-tête {{HTTPHeader("Content-Type")}}.

La différence entre {{HTTPMethod("PUT")}} et `POST` est que `PUT` est {{Glossary("idempotent", "idempotente")}}&nbsp;: l'appeler une fois ou plusieurs fois successivement ne change rien (il n'y a pas d'effets secondaires). Des requêtes `POST` identiques successives peuvent avoir des effets supplémentaires, comme créer la même commande plusieurs fois.

Les [formulaires HTML](/fr/docs/Learn_web_development/Extensions/Forms) envoient généralement des données en utilisant `POST`, ce qui entraîne habituellement une modification côté serveur.
Pour les formulaires HTML, le format/l'encodage du contenu du corps est déterminé par l'attribut [`enctype`](/fr/docs/Web/HTML/Reference/Elements/form#enctype) de l'élément {{HTMLElement("form")}} ou l'attribut [`formenctype`](/fr/docs/Web/HTML/Reference/Elements/input#formenctype) des éléments {{HTMLElement("input")}} ou {{HTMLElement("button")}}.
L'encodage peut être l'un des suivants&nbsp;:

- `application/x-www-form-urlencoded`&nbsp;: les clés et valeurs sont encodées sous forme de couples clé-valeur séparés par un esperluette (`&`), avec un signe égal (`=`) entre la clé et la valeur (par exemple, `first-name=Frida&last-name=Kahlo`).
  Les caractères non alphanumériques dans les clés et valeurs sont {{Glossary("Percent-encoding", "encodés en pourcentage")}}&nbsp;: c'est pourquoi ce type n'est pas adapté aux données binaires, il faut utiliser `multipart/form-data` pour cela.
- `multipart/form-data`&nbsp;: chaque valeur est envoyée comme un bloc de données («&nbsp;partie du corps&nbsp;»), avec un séparateur défini par l'agent utilisateur (par exemple, `boundary="delimiter12345"`) entre chaque partie.
  Les clés sont décrites dans l'en-tête {{HTTPHeader("Content-Disposition")}} de chaque partie ou bloc de données.
- `text/plain`

Quand la requête `POST` est envoyée suite à un appel à {{DOMxRef("Window/fetch", "fetch()")}}, ou pour toute autre raison qu'un formulaire HTML, le corps peut être de n'importe quel type.
Comme décrit dans la spécification HTTP 1.1, `POST` est conçu pour permettre une méthode uniforme couvrant les fonctions suivantes&nbsp;:

- Annotation de ressources existantes
- Publication d'un message sur un forum, un groupe de discussion, une liste de diffusion ou un groupe d'articles similaire
- Ajout d'un·e nouvel·le utilisateur·ice via un formulaire d'inscription
- Fourniture d'un bloc de données, comme le résultat de la soumission d'un formulaire, à un processus de traitement de données
- Extension d'une base de données par une opération d'ajout

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">La requête a un corps</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">La réponse de succès a un corps</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe/HTTP", "Sûre")}}</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent", "Idempotente")}}</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable", "Mis en cache")}}</th>
      <td>Seulement si une information de péremption est incluse</td>
    </tr>
    <tr>
      <th scope="row">
        Autorisée dans <a href="/fr/docs/Learn_web_development/Extensions/Forms">les formulaires HTML</a>
      </th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
POST <request-target>["?"<query>] HTTP/1.1
```

- `<request-target>`
  - : Identifie la ressource cible de la requête lorsqu'elle est combinée avec l'information fournie dans l'en-tête {{HTTPHeader("Host")}}.
    Il s'agit d'un chemin absolu (par exemple `/chemin/vers/fichier.html`) dans les requêtes vers un serveur d'origine, et d'une URL absolue dans les requêtes vers les serveurs mandataires (<i lang="en">proxies</i>) (par exemple `http://www.exemple.fr/chemin/vers/fichier.html`).
- `<query>` {{Optional_Inline}}
  - : Un fragment de requête optionnel précédé d'un point d'interrogation `?`.
    Souvent utilisé pour transmettre des informations sous la forme de paires `clé=valeur`.

## Exemple

### Soumission de formulaire encodé en URL

Un formulaire utilisant l'encodage de contenu `application/x-www-form-urlencoded` (par défaut) envoie une requête dont le corps contient les données du formulaire sous forme de paires `clé=valeur`, chaque paire étant séparée par un symbole `&`, comme ci-dessous&nbsp;:

```http
POST /test HTTP/1.1
Host: exemple.fr
Content-Type: application/x-www-form-urlencoded
Content-Length: 27

field1=value1&field2=value2
```

### Soumission de formulaire multipart

L'encodage `multipart/form-data` est utilisé lorsqu'un formulaire inclut des fichiers ou beaucoup de données.
Le corps de la requête sépare chaque partie du formulaire à l'aide d'une chaîne de séparation (<i lang="en">boundary</i> en anglais).
Exemple de requête dans ce format&nbsp;:

```http
POST /test HTTP/1.1
Host: exemple.fr
Content-Type: multipart/form-data;boundary="delimiter12345"

--delimiter12345
Content-Disposition: form-data; name="field1"

value1
--delimiter12345
Content-Disposition: form-data; name="field2"; filename="exemple.txt"

value2
--delimiter12345--
```

L'en-tête {{HTTPHeader("Content-Disposition")}} indique comment les données du formulaire doivent être traitées, en précisant le champ `name` et éventuellement `filename`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Méthodes de requête HTTP](/fr/docs/Web/HTTP/Reference/Methods)
- [Codes d'état de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
- [En-têtes HTTP](/fr/docs/Web/HTTP/Reference/Headers)
- L'en-tête {{HTTPHeader("Content-Type")}}
- L'en-tête {{HTTPHeader("Content-Disposition")}}
- La méthode {{HTTPMethod("GET")}}
