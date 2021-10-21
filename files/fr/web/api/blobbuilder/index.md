---
title: BlobBuilder
slug: Web/API/BlobBuilder
tags:
  - API
  - DOM
  - DOM Reference
  - Obsolete
translation_of: Web/API/BlobBuilder
---
{{APIRef("File API")}}{{ obsolete_header}}

L'interface `BlobBuilder` fournit une manière simple de construire des objets {{domxref("Blob")}}. Il suffit de créer un `BlobBuilder` et de lui ajouter des données  en appellant la méthode {{manch("append")}}. Une fois finalisé, l'appel à la méthode {{manch("getBlob")}} permet de récupérer un {{domxref("Blob")}} contenant les données envoyées au constructeur dudit Blob.

> **Note :** L'interface `BlobBuilder` est désormais déconseillé (deprecated) au profit du nouveau constructeur {{domxref('Blob')}}.

## Aperçu des méthodes

<table class="standard-table">
  <tbody>
    <tr>
      <td>
        <code
          >void <a href="/en-US/docs/Web/API/BlobBuilder#append()">append</a>(in
          ArrayBuffer data);</code
        >
      </td>
    </tr>
    <tr>
      <td>
        <code
          >void <a href="/en-US/docs/Web/API/BlobBuilder#append()">append</a>(in
          Blob data);</code
        >
      </td>
    </tr>
    <tr>
      <td>
        <code
          >void <a href="/en-US/docs/Web/API/BlobBuilder#append()">append</a>(in
          String data, [optional] in String endings);</code
        >
      </td>
    </tr>
    <tr>
      <td>
        <code
          >Blob
          <a href="/en-US/docs/Web/API/BlobBuilder#getBlob()">getBlob</a
          >([optional] in DOMString contentType);</code
        >
      </td>
    </tr>
    <tr>
      <td>
        <code
          >File
          <a href="/en-US/docs/Web/API/BlobBuilder#getFile()">getFile</a>(in
          DOMString name, [optional] in DOMString contentType);</code
        >
      </td>
    </tr>
  </tbody>
</table>

## Méthodes

### append()

Ajoute le contenu de l'objet JavaScript spécifié au {{domxref("Blob")}} en construction. Si la valeur spécifiée n'est pas un {{domxref("Blob")}}, un [`ArrayBuffer`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer), ou une [`String`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), la valeur est forcée (coerced) à string avant d'être ajoutée au blob.

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

#### Paramètres

- `data`
  - : Les données à ajouter au {{domxref("Blob")}} en construction.
- `endings`
  - : Spécifie comment les chaînes (strings) contenant des `\n` doivent être rendues. Cela peut être `"transparent"` (endings inchangés) ou `"native"` (les endings sont changés pour respecter la convention du système de fichier de l'OS de l'hôte). Par défault, la valeur est `"transparent"`.

### getBlob()

Retourne l'objet {{domxref("Blob")}} qui a été construit en utilisant les données passées en argument des différents appels à {{manch("append")}}.

    Blob getBlob(
      in DOMString contentType {{optional_inline}}
    );

#### Paramètres

- contentType {{optional_inline}}
  - : Le type MIME des données  retournées par le {{domxref("Blob")}}. Ce sera la valeur de la propriété 'type' de l'objet `Blob`.

#### Valeur de retour

Un objet {{domxref("Blob")}} contenant toutes les données passées en argument de chaque appel à  {{manch("append")}} depuis la création du `BlobBuilder`. Cela remet aussi à zéro (reset) le `BlobBuilder` de tel sorte que le prochain appel à {{manch("append")}} démarrera la création d'un nouveau blob vierge.

### getFile() {{non-standard_inline}}

Retourne un objet {{domxref("File")}}.

    File getFile(
      in DOMString name,
      [optional] in DOMString contentType
    );

#### Paramètres

- name
  - : Le nom du fichier.
- contentType {{optional_inline}}
  - : Le type MIME des données  retournées par le {{domxref("File")}}. Ce sera la valeur de la propriété 'type' de l'objet `File`.

#### Valeur deretour

Un objet {{domxref("File")}}.

## Browser compatibility

{{Compat("api.BlobBuilder")}}

## Voir aussi

- {{spec("http://dev.w3.org/2009/dap/file-system/file-writer.html#idl-def-BlobBuilder", "File API Specification: BlobBuilder", "ED")}}
- {{domxref("Blob")}}
- {{domxref("File")}}
