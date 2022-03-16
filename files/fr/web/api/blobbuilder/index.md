---
title: BlobBuilder
slug: Web/API/BlobBuilder
translation_of: Web/API/BlobBuilder
browser-compat: api.BlobBuilder
---
{{APIRef("File API")}}{{deprecated_header}}

> **Note :** L'interface `BlobBuilder` a été dépréciée pour être remplacée par le constructeur [`Blob`](/fr/docs/Web/API/Blob).

L'interface **`BlobBuilder`** fournit une méthode simple pour construire des objets [`Blob`](/fr/docs/Web/API/Blob). Pour cela, on créera un objet `BlobBuilder` et on ajoutera des fragments de données en appelant la méthode [`append()`](#append). Une fois qu'on a terminé de construire le blob, on peut appeler [`getBlob()`](#getblob) afin de récupérer l'objet [`Blob`](/fr/docs/Web/API/Blob) qui contient les données fournies au constructeur de blob.

## Aperçu des méthodes

- <code>void <a href="/fr/docs/Web/API/BlobBuilder#append">append</a>(in ArrayBuffer data);</code>
- <code>void <a href="/fr/docs/Web/API/BlobBuilder#append">append</a>(in Blob data);</code>
- <code>void <a href="/fr/docs/Web/API/BlobBuilder#append">append</a>(in String data, [optional] in String endings);</code>
- <code>Blob <a href="/fr/docs/Web/API/BlobBuilder#getblob">getBlob</a>([optional] in DOMString contentType);</code>
- <code>File <a href="/fr/docs/Web/API/BlobBuilder#getfile">getFile</a>(in DOMString name, [optional] in DOMString contentType);</code>

## Méthodes

### `append()`

Ajoute le contenu de l'objet JavaScript indiqué à l'objet [`Blob`](/fr/docs/Web/API/Blob) en cours de construction. Si la valeur fournie n'est pas un [`Blob`](/fr/docs/Web/API/Blob), [`ArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer), ou une chaîne de caractères [`String`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String), la valeur est convertie en une chaîne de caractères avant d'être ajoutée au blob.

```js
void append(
  in ArrayBuffer data
);

void append(
  in Blob data
);

void append(
  in String data,
  [optional] in String endings
);
```

#### Paramètres

- `data`
  - : Les données à ajouter à l'objet [`Blob`](/fr/docs/Web/API/Blob) en cours de construction.
- `endings`
  - : Indique la façon dont les chaînes de caractères contenant `\n` doivent être écrites. La valeur de cet argument peut être `"transparent"` (les fins de lignes ne sont pas modifiées) ou `"native"` (les fins de lignes sont modifiées afin de correspondre à la convention utilisée par le système de fichier du système d'exploitation). La valeur par défaut est `"transparent"`.

### `getBlob()`

Renvoie l'objet [`Blob`](/fr/docs/Web/API/Blob) qui a été construit avec les données ajoutées lors des appels successifs à [`append()`](#append).

```js
Blob getBlob(
  in DOMString contentType // facultatif
);
```

#### Paramètres

- `contentType` {{optional_inline}}
  - : Le type MIME des données à renvoyer dans l'objet [`Blob`](/fr/docs/Web/API/Blob). Cette valeur sera utilisée pour la propriété `type` de l'objet `Blob`.

#### Valeur de retour

Un objet [`Blob`](/fr/docs/Web/API/Blob) qui contient l'ensemble des données passées lors des appels à [`append()`](#append) depuis la construction de l'objet `BlobBuilder`. Cette méthode réinitialise également l'objet `BlobBuilder` courant afin que le prochain appel à [`append()`](#append) démarre la création d'un nouveau blob.

### `getFile()` {{non-standard_inline}}

Renvoie un nouvel objet [`File`](/fr/docs/Web/API/File).

```js
File getFile(
  in DOMString name,
  [optional] in DOMString contentType
);
```

#### Paramètres

- `name`
  - : Le nom du fichier.
- `contentType` {{optional_inline}}
  - : Le type MIME des données à renvoyer dans l'objet [`File`](/fr/docs/Web/API/File). Cette valeur sera utilisée pour la valeur de la propriété `type` de l'objet `File`.

#### Valeur de retour

Un objet [`File`](/fr/docs/Web/API/File).

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La spécification de `BlobBuilder` au sein de l'API File (en anglais)](https://dev.w3.org/2009/dap/file-system/file-writer.html#idl-def-BlobBuilder)
- [`Blob`](/fr/docs/Web/API/Blob)
- [`File`](/fr/docs/Web/API/File)
