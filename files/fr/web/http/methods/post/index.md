---
title: POST
slug: Web/HTTP/Methods/POST
---

{{HTTPSidebar}}

La **méthode HTTP `POST`** envoie des données au serveur. Le type du corps de la requête est indiqué par l'en-tête {{HTTPHeader("Content-Type")}}.

La différence entre `PUT` et {{HTTPMethod("POST")}} tient au fait que `PUT` est une méthode idempotente. Une requête `PUT`, envoyée une ou plusieurs fois avec succès, aura toujours le même effet (il n'y a pas d'effet de bord). À l'inverse, des requêtes `POST` successives et identiques peuvent avoir des effets additionnels, ce qui peut revenir par exemple à passer plusieurs fois une commande.

Une requête `POST` est habituellement envoyée via un [formulaire HTML](/fr/docs/Web/Guide/HTML/Forms) et a pour résultat un changement sur le serveur. Dans ce cas, le type du contenu est sélectionné en mettant la chaîne de caractères adéquate dans l'attribut _[`enctype`](/fr/docs/Web/HTML/Element/form#enctype) de l'élément {{HTMLElement("form")}} ou dans l'attribut [`formenctype`](/fr/docs/Web/HTML/Element/input#formenctype) de l'élément {{HTMLElement("input") }}, voir celui des éléments {{HTMLElement("button")}}_&nbsp;:

- `application/`_`x-www-form-urlencoded`&nbsp;: les valeurs sont encodées sous forme de couples clé-valeur séparés par `'&'`, avec un `'='` entre la clé et la valeur. Les caractères non alphanumériques sont {{glossary("percent encoded")}}&nbsp;: c'est la raison pour laquelle ce type de format n'est pas adapté à une utilisation avec des données binaires (utilisez `multipart/form-data` à la place)_
- _`multipart/form-data`_
- _`text/plain`_

Lorsque la requête `POST` est envoyée par un autre moyen qu'un formulaire HTML, par exemple via {{domxref("XMLHttpRequest")}}, le corps peut être de n'importe quel type. Comme décrit dans la spécification HTTP 1.1, `la méthode POST` est conçue pour permettre une méthode uniforme couvrant les fonctions suivantes&nbsp;:

- Annotation de ressources existantes
- Publication d'un message sur un tableau d'affichage, un groupe de discussion, une liste de diffusion, ou un groupe similaire d'articles;
- Apport d'un bloc de données, tel que le résultat produit par la soumission d'un formulaire, à un processus de traitement de données;
- Extension d'une base de données au travers d'une opération d'ajout.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">La requête a un corps</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">Une réponse inclut un corps</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe","Sûre")}}</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent","Idempotente")}}</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Cacheable","Peut être mise en cache")}}
      </th>
      <td>Seulement si une information de péremption est incluse</td>
    </tr>
    <tr>
      <th scope="row">
        Autorisée dans les
        <a href="/fr/docs/Web/Guide/HTML/Formulaires">formulaires HTML</a>
      </th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```
POST /index.html
```

## Exemple

Un formulaire simple utilisant le type de contenu par défaut `application/x-www-form-urlencoded`&nbsp;:

```
POST / HTTP/1.1
Host: foo.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 13

say=Hi&to=Mom
```

Un formulaire utilisant le type de contenu `multipart/form-data`&nbsp;:

```
POST /test.html HTTP/1.1
Host: example.org
Content-Type: multipart/form-data;boundary="boundary"

--boundary
Content-Disposition: form-data; name="field1"

value1
--boundary
Content-Disposition: form-data; name="field2"; filename="example.txt"

value2
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Content-Disposition")}}
