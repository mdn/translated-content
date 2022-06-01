---
title: Compiler un nouveau module C/C++ en WebAssembly
slug: WebAssembly/C_to_wasm
tags:
  - C
  - C++
  - Compilation
  - Emscripten
  - WebAssembly
  - wasm
translation_of: WebAssembly/C_to_wasm
---
{{WebAssemblySidebar}}

Quand vous avez écrit un module de code dans un langage comme le C/C++, vous pouvez ensuite le compiler en WebAssembly en utilisant un outil comme [Emscripten](/fr/docs/Mozilla/Projects/Emscripten). Regardons comment cela fonctionne.

## Mise en place de l'environnement Emscripten

D'abord, mettons en place l'environnement requis pour le développement.

### Prérequis

Recuperer le SDK de Emscripten en utilisant les instructions suivantes: <https://kripken.github.io/emscripten-site/docs/getting_started/downloads.html>

## Compiler un exemple

Une fois l'environnement mis en place, regardons comment l'utiliser pour compiler un exemple en C via Emscripten. Il existe un certain nombre d'options disponibles quand on compile avec Emscripten, mais nous allons couvrir seulement les deux principaux scénarios:

- Compiler vers du wasm et créer du HTML pour exécuter notre code plus toute la "glue" Javascript nécessaire à l'exécution du wasm dans l'environnement Web.
- Compiler vers du wasm et juste créer le Javascript.

Nous verrons les deux par la suite.

### Créer le document HTML et la "glue" JavaScript

C'est le cas le plus simple que nous allons voir, pour lequel vous utiliserez Emscripten pour générer tout ce dont vous avez besoin pour exécuter votre code en WebAssembly dans le navigateur.

1. D'abord nous avons besoin d'un exemple à compiler. Prenez une copie du simple programme C suivant et sauvez-le dans un fichier nommé `hello.c` dans un nouveau répertoire de votre disque dur:

    ```cpp
    #include <stdio.h>

    int main(int argc, char ** argv) {
      printf("Hello World\n");
    }
    ```

2. Maintenant, en utilisant la fenêtre terminal qui vous a servi pour entrer dans l'environnement du compilateur Emscripten, naviguez jusqu'au répertoire dans lequel se trouve votre fichier `hello.c` et exécutez la commande suivante :

    ```bash
    emcc hello.c -s WASM=1 -o hello.html
    ```

Les options passées avec la commande sont les suivantes :

- `-s WASM=1` — Spécifie que nous voulons du wasm en sortie. Si nous ne spécifions pas cela, Emscripten générera juste en sortie du [asm.js](http://asmjs.org/) comme il le fait par défaut.
- `-o hello.html` — Spécifie que nous voulons qu'Emscripten génère une page HTML (dont le nom de fichier est spécifié), le module wasm et le code "glue" en JavaScript pour une execution dans un contexte web.

À ce stade votre dossier source devrait contenir :

- Un fichier de code binaire wasm (`hello.wasm`)
- Un fichier JavaScript contenant du code "glue" à traduire entre les fonctions natives C, et Java/wasm (`hello.js`)
- Un fichier HTML pour charger, compiler et instancier votre code wasm, et l'afficher dans votre navigateur (`hello.html`)

### Exécuter votre exemple

Maintenant, tout ce qui vous reste à faire est de charger le fichier `hello.html` dans un navigateur qui supporte WebAssembly. Il est activé par défaut dans Firefox 52+, Chrome 57+ et dans la derniere version d'Opera (vous pouvez aussi executer du code wasm dans Firefox 47+ en activant le flag `javascript.options.wasm` dans *about:config*, ou dans Chrome (51+) et Opera (38+) en allant dans *chrome://flags* and en activant le flag *Experimental WebAssembly*.)

Si tout a fonctionné comme prévu, vous devriez voir la sortie "Hello World" dans la console Emscripten apparaissant dans la page web et dans la console Javascript de votre navigateur. Bravo, vous venez de compiler un programme C en WebAssembly puis d'executer ce programme dans votre navigateur!

### Utiliser un template HTML personnalisé

Vous souhaiterez parfois utiliser un template HTML personnalisé. Voyons comment faire :

1. Tout d'abord, sauvegarder le code C suivant dans un fichier nommé `hello2.c`, au sein d'un nouveau dossier (vide) :

    ```cpp
    #include <stdio.h>

    int main(int argc, char ** argv) {
        printf("Hello World\n");

    }
    ```

2. Cherchez le fichier `shell_minimal.html` dans le dépôt emsdk. Copiez-le dans un sous-dossier nommé `html_template` dans votre précédent nouveau dossier.
3. Naviguez maintenant jusqu'au nouveau dossier (toujours dans votre terminal disposant de l'environnement Emscripten), et exécutez la commande suivante :

    ```bash
    emcc -o hello2.html hello2.c -O3 -s WASM=1 --shell-file html_template/shell_minimal.html
    ```

    Les options que nous avons donné sont un peu différentes cette fois :

    - Nous avons spécifié `-o hello2.html`, ce qui signifie que le compilateur va générer du code JavaScript "glue" ainsi qu'un `.html`.
    - Nous avons également spécifié `--shell-file html_template/shell_minimal.html` — cela fournit le chemin vers le template HTML que vous souhaitez utiliser pour créer le HTML qui vous permettra d'exécuter l'exemple.

4. Maintenant, lançons l'exemple. La commande ci-dessus aura généré hello2.html, qui aura à peu près le même contenu que le template avec un peu de code "glue" pour charger le code wasm généré, l'exéuter, etc. Ouvrez-le dans votre navigateur et vous verrez quasiment la même chose qu'avec notre dernier exemple.

> **Note :** Vous pouvez spécifier, comme sortie, juste le fichier JavaScript "glue" au lieu de la sortie HTML en specifiant un fichier .js au lieu d'un fichier HTML dans le flag`-o` . Par exemple: `emcc -o hello2.js hello2.c -O3 -s WASM=1`. Vous pouevz ensuite votre propre fichier HTML à partir de rien bien que ce soit une approche plus compliquée. Il est généralement plus simple d'utiliser le template HTML fournit.
>
> Emscripten necessite une grande variété de code Javascript "glue" pour gérer les allocations memoire, les fuites memoires et bien d'autres problèmes.

### Appeler une fonction personnalisée définie en C

Si vous avez une fonction définie dans votre code C et que vous souhaitez l'appeler de Javascript, vous pouvez le faire en utilisant la fonction Emscripten `ccall()` et la déclaration `EMSCRIPTEN_KEEPALIVE` (qui ajoute vos fonctions dans la liste des fonctions exportées) . Voir [Why do functions in my C/C++ source code vanish when I compile to JavaScript, and/or I get No functions to process?](https://kripken.github.io/emscripten-site/docs/getting_started/FAQ.html#why-do-functions-in-my-c-c-source-code-vanish-when-i-compile-to-javascript-and-or-i-get-no-functions-to-process). Regardons comment cela fonctionne.

1. Pour démarrer, sauvegardez le code suivante dans un fichier nommé `hello3.c` dans un nouveau répertoire:

    ```cpp
    #include <stdio.h>
    #include <emscripten/emscripten.h>

    int main(int argc, char ** argv) {
        printf("Hello World\n");
    }

    #ifdef __cplusplus
    extern "C" {
    #endif

    void EMSCRIPTEN_KEEPALIVE myFunction(int argc, char ** argv) {
      printf("MyFunction Called\n");
    }

    #ifdef __cplusplus
    }
    #endif
    ```

    By default, Emscripten-generated code always just calls the `main()` function, and other functions are eliminated as dead code. Putting `EMSCRIPTEN_KEEPALIVE` before a function name stops this from happening. You also need to import the `emscripten.h` library to use `EMSCRIPTEN_KEEPALIVE`.

    > **Note :** We are including the `#ifdef` blocks so that if you are trying to include this in C++ code, the example will still work. Due to C versus C++ name mangling rules, this would otherwise break, but here we are setting it so that it treats it as an external C function if you are using C++.

2. Now add `html_template/shell_minimal.html` into this new directory too, just for convenience (you'd obviously put this in a central place in your real dev environment).
3. Now let's run the compilation step again. From inside your latest directory (and while inside your Emscripten compiler environment terminal window), compile your C code with the following command. (Note that we need to compile with NO_EXIT_RUNTIME, which is necessary as otherwise when main() exits the runtime would be shut down - necessary for proper C emulation, e.g., atexits are called - and it wouldn't be valid to call compiled code.)

    ```bash
    emcc -o hello3.html hello3.c -O3 -s WASM=1 --shell-file html_template/shell_minimal.html -s NO_EXIT_RUNTIME=1  -s EXTRA_EXPORTED_RUNTIME_METHODS='["ccall"]'
    ```

4. If you load the example in your browser again, you'll see the same thing as before!
5. Now we need to run our new `myFunction()` function from JavaScript. First of all, let's add a {{htmlelement("button")}} as shown below, just above the first opening `<script type='text/javascript'>` tag.

    ```html
    <button class="mybutton">Run myFunction</button>
    ```

6. Now add the following code inside the last {{htmlelement("script")}} element (just above the closing `</script>` tag):

    ```js
    document.querySelector('.mybutton').addEventListener('click', function(){
      alert('check console');
      var result = Module.ccall('myFunction', // name of C function
                                 null, // return type
                                 null, // argument types
                                 null); // arguments
    });
    ```

This illustrates how `ccall()` is used to call the exported function.

## Voir aussi

- [emscripten.org](http://emscripten.org/) — pour en apprendre plus sur Emscripten et sa large palette d'options
- [Appeler des fonctions C compilées depuis JavaScript grâce à ccall/cwrap](https://kripken.github.io/emscripten-site/docs/porting/connecting_cpp_and_javascript/Interacting-with-code.html#calling-compiled-c-functions-from-javascript-using-ccall-cwrap)
- [Pourquoi les fonctions dans mon code source C/C++ disparaissent quand je le compile dans JavaScript, et/ou je reçois une erreur "No functions to process" ?](https://kripken.github.io/emscripten-site/docs/getting_started/FAQ.html#why-do-functions-in-my-c-c-source-code-vanish-when-i-compile-to-javascript-and-or-i-get-no-functions-to-process)
- [WebAssembly sur Mozilla Research](https://research.mozilla.org/webassembly/)
