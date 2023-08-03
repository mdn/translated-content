---
title: Введение в API файлов и каталогов
slug: Web/API/File_and_Directory_Entries_API/Introduction
---

{{DefaultAPISidebar("File System API")}}{{Non-standard_header}}

API файлов и каталогов эмулирует для веб-приложений локальную файловую систему. У вас есть возможность создания приложений, которые могут читать, записывать и создавать файлы и директории в изолированной виртуальной файловой системе.

API файлов и каталогов взаимодействует с другими API. Оно было создано на основе File Writer API, который в свою очередь использует File API. Каждое API реализует разную функциональность. Данные программные интерфейсы являются огромным эволюционным скачком для веб-приложений, которые теперь могут кешировать и обрабатывать большие объёмы данных.

## Об этом документе

В данном документе приведены основные концепции и терминология API файлов и каталогов, которые должны показать общую картину и ключевые идеи. Также описаны [ограничения](#Ограничения), несоблюдение которых может привести к появлению ошибок безопасности. Используемая терминология описана в разделе [Определений](#Определения).

Ссылки на страницы данного API приведены в [Ссылочном справочнике](/ru/docs/Web/API/FileSystem).

Спецификация находится на стадии разработки и будет изменяться в будущем.

## Обзор

Программный интерфейс файлов и каталогов включает асинхронные и синхронные методы. Асинхронное API может быть использовано в тех случаях, когда нежелательно, чтобы длительные вычисления блокировали весь пользовательский интерфейс. В свою очередь синхронное API предлагает более простую модель программирования, однако оно должно использоваться только с объектами [WebWorkers](/En/Using_web_workers).

### Применимость API

API файлов и каталогов является важным программным интерфейсом по следующим причинам:

- Благодаря ему у приложений могут быть автономные (offline) функции, а также функции хранения, позволяющие обрабатывать большие наборы двоичных данных.
- У приложений появляется возможность предварительной загрузки и кеширования ресурсов, что повышает из производительность.
- У пользователя приложения появляется возможность напрямую редактировать файлы, расположенные у него на компьютере.
- Пользователям предоставляется интерфейс работы с файловым хранилищем, который схож с файловой системой.

Примеры таких приложений приведены в разделе [Примеры использования](<#Примеры использования>).

### API файлов и каталогов и другие программные интерфейсы хранения данных

API файлов и каталогов является альтернативой для других интерфейсов хранения данных, таких как [IndexedDB](/en/IndexedDB/Basic_Concepts_Behind_IndexedDB), WebSQL (признано устаревшим с 18 ноября 2010 г.) и AppCache. Тем не менее данное API является более хорошим выбором для приложений, обрабатывающим большие объёмы данных, по следующим причинам:

- Данное API предлагает возможность хранения данных на стороне клиента в вариантах использования, которые не могут быть решены с помощью баз данных. Например, данное API является намного более производительным в случае хранения и обработки больших файлов.
- Firefox поддерживает хранение бинарных данных в IndexedDB, в то время как в Chrome эта функция по-прежнему находится на стадии разработки. Если Chrome является одним из целевых браузеров для вашего приложения и у вас есть необходимость хранения бинарных данных, то вы можете использовать только либо данное API, либо AppCache. В свою очередь хранилище AppCache не предоставляет возможности локальных изменений, а также тонкой настройки на стороне клиента.
- В Chrome у вас есть возможность использования данного API вместе с программным интерфейсом управления квотами, позволяющее управлять квотами хранилища.

### Примеры использования

Далее приведены лишь некоторые случаи, в которых можно использовать API файлов и каталогов:

- Приложения с постоянной загрузкой.

  - Когда файл или каталог выбран для загрузки на сервер, есть возможность скопировать файлы в локальную песочницу и начать их поочерёдную загрузку.
  - Приложение может продолжить загрузку после закрытия или аварийного сбоя браузера, прерывание связи или завершения работы компьютера.

- Видеоигры или другие приложения с большим количеством медиа ресурсов.

  - Приложение скачивает один или несколько больших архивов с ресурсами и локально его распаковывает.
  - Приложение осуществляет предварительную фоновую загрузку ресурсов, благодаря чему у пользователя нет необходимости ожидать их загрузки для начала следующего уровня.

- Аудио- или фоторедактор с возможностью автономной работы или локальным кешем.

  - Приложение может редактировать файлы без полной их перезаписи (например, ID3/EXIF теги).

- Offline видеопроигрыватель.

  - Приложение может загружать большие (> 1 ГБ) файлы.
  - Приложение может начать воспроизведение частично загруженного файла.

- Offline клиент электронной почты.

  - Возможность загрузки и локального хранения прикреплений.
  - Возможность кеширования прикреплений для более поздней отправки.

## Big concepts

Before you start using the File and Directory Entries API, you need to understand a few concepts:

- [The File and Directory Entries API is a virtual representation of a file system](#virtual)
- [The File and Directory Entries API can use different storage types](#storage)
- [Browsers impose storage quota](#quota)
- [The File and Directory Entries API has asynchronous and synchronous versions](#versions)
- [When using the asynchronous API, always use the error callbacks](#errorcallbacks)
- [The File and Directory Entries API interacts with other APIs](#interfaces)
- [The File and Directory Entries API is case-sensitive](#case)

### The File and Directory Entries API is a virtual representation of a file system

The API doesn't give you access to the local file system, nor is the sandbox really a section of the file system. Instead, it is a virtualized file system that looks like a full-fledged file system to the web app. It does not necessarily have a relationship to the local file system outside the browser.

What this means is that a web app and a desktop app cannot share the same file at the same time. The API does not let your web app reach outside the browser to files that desktop apps can also work on. You can, however, export a file from a web app to a desktop app. For example, you can use the File API, create a blob, redirect an iframe to the blob, and invoke the download manager.

### The File and Directory Entries API can use different storage types

An application can request temporary or persistent storage. Temporary storage is easier to get, because the browser just gives it to you, but it is limited and can be deleted by the browser when it runs out of space. Persistent storage, on the other hand, might offer you larger space that can only be deleted by the user, but it requires the user to grant you permission.

Use temporary storage for caching and persistent storage for data that you want your app to keep—such as user-generated or unique data.

### Browsers impose storage quotas

To prevent a web app from using up the entire disk, browsers might impose a quota for each app and allocate storage among web apps.

How storage space is granted or allocated and how you can manage storage are idiosyncratic to the browser, so you need to check the respective documentation of the browser. Google Chrome, for example, allows temporary storage beyond the 5 MB required in the specifications and supports the Quota Management API. To learn more about the Chrome-specific implementation, see [Managing HTML5 Offline Storage](http://code.google.com/chrome/whitepapers/storage.html).

### The File and Directory Entries API has asynchronous and synchronous versions

The File and Directory Entries API comes with asynchronous and synchronous versions. Both versions of the API offer the same capabilities and features. In fact, they are almost alike, except for a few differences.

- **WebWorkers.** The asynchronous API can be used in either the document or [WebWorkers](/En/Using_web_workers) context, while the synchronous API is for use with WebWorkers only.
- **Callbacks**. The asynchronous API doesn't give you data by returning values; instead, you have to pass a callback function. You send requests for operations to happen, and get notified by callbacks. In contrast, the synchronous API does not use callbacks because the API methods return values.
- **Global methods of the asynchronous and synchronous APIs**. The asynchronous API has the following global methods: `requestFileSystem()` and `resolveLocalFileSystemURL()`. These methods are members of both the window object and the worker global scope. The synchronous API, on the other hand, uses the following methods: `requestFileSystemSync()` and `resolveLocalFileSystemSyncURL()`. These synchronous methods are members of the worker's global scope only, not the window object.

The synchronous API can be simpler for some tasks. Its direct, in-order programming model can make code easier to read. The drawback of synchronous API has to do with its interactions with Web Workers, which has some limitations.

### When using the asynchronous API, always use the error callbacks

When using the asynchronous API, always use the error callbacks. Although the error callbacks for the methods are optional parameters, they are not optional for your sanity. You want to know why your calls failed. At minimum, handle the errors to provide error messages, so you'll have an idea of what's going on.

### The File and Directory Entries API interacts with other APIs

The File and Directory Entries API is designed to be used with other APIs and elements on the web platform. For example, you are likely to use one of the following:

- XMLHttpRequest (such as the `send()` method for file and blob objects)
- Drag and Drop API
- Web Workers (for the synchronous version of the File and Directory Entries API)
- The `input` element (to programmatically obtain a list of files from the element)

### The File and Directory Entries API is case sensitive

The filesystem API is case-sensitive, and case-preserving.

## Ограничения

For security reasons, browsers impose restrictions on file access. If you ignore them, you will get security errors.

- [The File and Directory Entries API adheres to the same-origin policy](#origin)
- [The File and Directory Entries API does not let you create and rename executable files](#execute)
- [The file system is sandboxed](#sandbox)
- [You cannot run your app from file://](#file)

### The File and Directory Entries API adheres to the same-origin policy

An origin is the domain, application layer protocol, and port of a URL of the document where the script is being executed. Each origin has its own associated set of file systems.

The security boundary imposed on file system prevents applications from accessing data with a different origin. This protects private data by preventing access and deletion. For example, while an app or a page in <http://www.example.com/app/> can access files from <http://www.example.com/dir/>, because they have the same origin, it cannot retrieve files from <http://www.example.com:8080/dir/> (different port) or <https://www.example.com/dir/> (different protocol).

### The File and Directory Entries API does not let you create and rename executable files

To prevent malicious apps from running hostile executables, you cannot create executable files within the sandbox of the File and Directory Entries API.

### The file system is sandboxed

Because the file system is sandboxed, a web app cannot access another app's files. You also cannot read or write files to an arbitrary folder (for example, My Pictures and My Documents) on the user's hard drive.

### You cannot run your app from file://

You cannot run your app locally from `file://`. If you do so, the browser throws errors or your app fails silently. This restriction also applies to many of the file APIs, including BlobBuilder and FileReader.

For testing purposes, you can bypass the restriction on Chrome by starting the browser with the `--allow-file-access-from-files` flag. Use this flag only for this purpose.

## Определения

This section defines and explains terms used in the File and Directory Entries API.

- blob
  - : Stands for binary large object. A blob is a set of binary data that is stored a single object. It is a general-purpose way to reference binary data in web applications. A blob can be an image or an audio file.
- Blob
  - : Blob—with a capital B—is a data structure that is immutable, which means that binary data referenced by a Blob cannot be modified directly. This makes Blobs act predictably when they are passed to asynchronous APIs.
- persistent storage
  - : Persistent storage is storage that stays in the browser unless the user expunges it or the app deletes it.
- temporary storage
  - : Transient storage is available to any web app. It is automatic and does not need to be requested, but the browser can delete the storage without warning.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## See also

- [File and Directory Entries API](/ru/docs/Web/API/File_and_Directory_Entries_API)
- [Exploring the FileSystem APIs](http://www.html5rocks.com/en/tutorials/file/filesystem/) (HTML5 Rocks)
