---
title: API fichier système
slug: Web/API/File_and_Directory_Entries_API
translation_of: Web/API/File_and_Directory_Entries_API
original_slug: Web/API/API_fichier_systeme
---
<p>{{DefaultAPISidebar("File System API")}}{{Non-standard_header()}}</p>

<p>L'API fichier système simule un fichier système en local que les applications web peuvent utiliser. Vous pouvez développer des applications qui lisent, écrivent, et créent des fichiers et/ou des dossiers dans un espace virtuel.</p>

<p>Deux API très simulaires existent en fonction du comportement asynchrone ou synchrone souhaité. L'API synchrone est prévu pour être utilisée dans un {{domxref("Worker")}} et retournera les valeurs recherchées. The asynchronous API will not block and functions and the API will not return values; instead, you will need to supply a callback function to handle the response whenever it arrives.</p>

<h2 id="API_asynchrone">API asynchrone</h2>

<p>L'API asynchrone a les interfaces suivantes :</p>

<ul>
 <li><a href="/en/DOM/File_API/File_System_API/LocalFileSystem">LocalFileSystem</a> a deux méthodes globales qui vous permet d'avoir accès à un espace virtuel : requestFileSystem() et resolveLocalFileSystemURL().  Les méthodes sont implémentées par l'objet <a href="/fr/docs/window">window</a> et le worker global scope.</li>
 <li><a href="/en/DOM/File_API/File_System_API/FileSystem">FileSystem</a> représente un fichier système. L'objet est la passerelle à votre API toute entière.</li>
 <li><a href="/en/DOM/File_API/File_System_API/Entry">Entry</a> représente une entrée dans un fichier système. L'entrée peut être un fichier ou un dossier.</li>
 <li><a href="/en/DOM/File_API/File_System_API/DirectoryEntry">DirectoryEntry</a> représente un dossier dans un fichier système.</li>
 <li><a href="/en/DOM/File_API/File_System_API/DirectoryReader">DirectoryReader</a> vous permet la lecture de fichiers et dossiers à partir d'un dossier.</li>
 <li><a href="/en/DOM/File_API/File_System_API/FileEntry">FileEntry</a> représente un fichier dans un fichier système.</li>
 <li><a href="/en/DOM/File_API/File_System_API/FileError">FileError</a> est une erreur que vous pourriez rencontrer pendant l'utilisation des méthodes asynchrones.</li>
</ul>

<h2 id="API_synchrone">API synchrone</h2>

<p>L'API synchrone est utile avec les <a href="/En/Using_web_workers">WebWorkers</a>. Contrairement à l'API asynchrone, l'API synchrone n'utilise pas les callbacks parce que les méthodes de l'API retournent des valeurs.</p>

<ul>
 <li><a href="/en/DOM/File_API/File_System_API/LocalFileSystemSync">LocalFileSystemSync</a> a deux méthodes globales qui vous permet d'avoir accès à un espace virtuel : requestFileSystemSync() et resolveLocalFileSystemSyncURL(). Les méthodes sont implémentées par l'objet worker.</li>
 <li><a href="/en/DOM/File_API/File_System_API/FileSystemSync">FileSystemSync</a> représente un fichier système.</li>
 <li><a href="/en/DOM/File_API/File_System_API/EntrySync">EntrySync</a> représente une entrée dans un fichier système. L'entrée peut être un fichier ou un dossier.</li>
 <li><a href="/en/DOM/File_API/File_System_API/DirectoryEntrySync">DirectoryEntrySync</a> représente un dossier dans un fichier système.</li>
 <li><a href="/en/DOM/File_API/File_System_API/DirectoryReaderSync">DirectoryReaderSync</a>  vous permet la lecture de fichiers et dossiers à partir d'un dossier.</li>
 <li><a href="/en/DOM/File_API/File_System_API/FileEntrySync">FileEntrySync</a> représente un fichier dans un fichier système.</li>
 <li><a href="/en/DOM/File_API/File_System_API/FileException">FileException</a> est une erreur que vous pourriez rencontrer pendant l'utilisation des méthodes synchrones.</li>
</ul>

<h2 id="Compatibilité_navigateur">Compatibilité navigateur</h2>

<h3 id="FileSystem"><code>FileSystem</code></h3>

<p>{{Compat("api.FileSystem", 0)}}</p>

<h3 id="FileSystemSync_property">Propriété <code>FileSystemSync</code></h3>

<p>{{Compat("api.FileSystemSync", 0)}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>Particularité : {{ spec("http://dev.w3.org/2009/dap/file-system/pub/FileSystem/", "File API: Directories and System Specification", "NOTE") }}</li>
 <li>Commentaire Mozilla : <a href="https://hacks.mozilla.org/2012/07/why-no-filesystem-api-in-firefox/">Why no FileSystem API in Firefox?</a></li>
</ul>
