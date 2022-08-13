---
title: File
slug: Web/API/File
tags:
  - API
  - File API
  - Interface
  - NeedsTranslation
  - Reference
  - TopicStub
  - Web
translation_of: Web/API/File
---
{{APIRef}}

The **`File`** interface provides information about files and allows JavaScript in a web page to access their content.

`File` objects are generally retrieved from a {{domxref("FileList")}} object returned as a result of a user selecting files using the {{HTMLElement("input")}} element, from a drag and drop operation's {{domxref("DataTransfer")}} object, or from the `mozGetAsFile()` API on an {{domxref("HTMLCanvasElement")}}. In Gecko, privileged code can create `File` objects representing any local file without user interaction (see [Implementation notes](#implementation_notes) for more information.)

A `File` object is a specific kind of a {{domxref("Blob")}}, and can be used in any context that a Blob can. In particular, {{domxref("FileReader")}}, {{domxref("URL.createObjectURL()")}}, {{domxref("ImageBitmapFactories.createImageBitmap()", "createImageBitmap()")}}, and {{domxref("XMLHttpRequest", "", "send()")}} accept both `Blob`s and `File`s.

See [Using files from web applications](/pl/docs/Using_files_from_web_applications) for more information and examples.

{{InheritanceDiagram}}

## Constructor

- {{domxref("File.File", "File()")}}
  - : Returns a newly constructed `File`.

## Properties

- {{domxref("File.lastModified")}} {{readonlyinline}}
  - : Returns the last modified time of the file, in millisecond since the UNIX epoch (January 1st, 1970 at Midnight).
- {{domxref("File.lastModifiedDate")}} {{readonlyinline}} {{deprecated_inline}} {{gecko_minversion_inline("15.0")}}
  - : Returns the last modified [`Date`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) of the file referenced by the `File` object.
- {{domxref("File.name")}} {{readonlyinline}}
  - : Returns the name of the file referenced by the `File` object.
- {{domxref("File.webkitRelativePath")}} {{readonlyinline}} {{non-standard_inline}}
  - : Returns the path the URL of the {{domxref("File")}} is relative to.

`File` implements {{domxref("Blob")}}, so it also has the following properties available to it:

- {{domxref("File.size")}} {{readonlyinline}}
  - : Returns the size of the file in bytes.
- {{domxref("File.type")}} {{readonlyinline}}
  - : Returns the [MIME ](/pl/docs/Web/HTTP/Basics_of_HTTP/MIME_types)type of the file.

## Methods

_The `File` interface doesn't define any methods, but inherits methods from the {{domxref("Blob")}} interface:_

- {{domxref("Blob.slice()", "Blob.slice([start[, end[, contentType]]])")}}
  - : Returns a new `Blob` object containing the data in the specified range of bytes of the source `Blob`.

## Specifications

| Specification                    | Status                       | Comment            |
| -------------------------------- | ---------------------------- | ------------------ |
| {{SpecName('File API')}} | {{Spec2('File API')}} | Initial definition |

## Browser compatibility

{{Compat("api.File")}}



### Implementation notes

- In Gecko, you can use this API from within chrome code. See [Using the DOM File API in chrome code](/pl/docs/Extensions/Using_the_DOM_File_API_in_chrome_code) for details. To use it from chrome code, JSM, and Bootstrap scope, you have to import it using `Cu.importGlobalProperties(['File']);`
- Starting from Gecko 6.0 {{geckoRelease("6.0")}}, privileged code (such as extensions) can pass an `nsIFile` object to the DOM `File` constructor to specify the file to reference.
- Starting from Gecko 8.0 {{geckoRelease("8.0")}}, you can use `new File` to create `File` objects from XPCOM component code instead of having to instantiate the `nsIDOMFile` object directly. The constructor takes, in contrast to {{domxref("Blob")}}, as second argument the filename. The filename can be any String.

      new File(
        Array parts,
        String filename,
        BlobPropertyBag properties
      );

- The following non-standard properties and methods were removed in Gecko 7 {{geckoRelease("7.0")}}: {{domxref("File.fileName")}}, {{domxref("File.fileSize")}}, {{domxref("File.getAsBinary()")}}, {{domxref("File.getAsDataURL()")}}, {{domxref("File.getAsText()","File.getAsText(string encoding)")}} ({{bug("661876")}}). Standard properties {{domxref("File.name")}}, {{domxref("Blob.size")}}, and methods on {{domxref("FileReader")}} should be used instead.

## See also

- [Using files from web applications](/pl/docs/Web/API/File/Using_files_from_web_applications)
- {{domxref("FileReader")}}
- [Using the DOM File API in chrome code](/pl/docs/Extensions/Using_the_DOM_File_API_in_chrome_code) (for privileged code running in Gecko, such as Firefox add-ons)
