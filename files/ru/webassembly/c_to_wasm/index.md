---
title: Компиляция кода C/C++ в WebAssembly
slug: WebAssembly/C_to_Wasm
---

{{WebAssemblySidebar}}

После того как вы написали код на C / C ++, вы можете скомпилировать его в WebAssembly, например, с помощью инструмента [Emscripten](https://emscripten.org/). Давайте посмотрим, как это работает.

## Подготовка рабочей среды для Emscripten

Первым делом установим компоненты для дальнейшей работы.

### Необходимые компоненты

Установите Emscripten SDK и настройте рабочее окружение используя инструкции: <https://kripken.github.io/emscripten-site/docs/getting_started/downloads.html>

## Компиляция примера

Когда рабочее окружение подготовлено, попробуем собрать пример кода на языке Си при помощи Emscripten. Вам доступно большое количество опций для настройки компиляции, но мы рассмотрим только два основных сценария компиляции с использованием Emscripten:

- Компиляция в wasm и создание HTML-страницы для запуска вашего кода, а также JavaScript-кода, необходимого для работы wasm модуля в веб-среде.
- Просто компиляция в wasm и создание JavaScript-кода.

Мы рассмотрим оба способа ниже.

### Создание HTML и JavaScript

Это самый простой способ, который мы рассмотрим. С его помощью вы сможете использовать Emscripten для создания всего что нужно, чтобы ваш код работал в браузере как модуль WebAssembly.

1. Нам понадобится простой пример для компиляции. Скопируйте следующий код программы на Си и сохраните его в файле `hello.c` в новой папке на вашем локальном диске:

   ```cpp
   #include <stdio.h>

   int main(int argc, char ** argv) {
     printf("Hello World\n");
   }
   ```

2. Теперь, используя терминал, перейдите в каталог, в котором находится ваш файл hello.c, и выполните следующую команду:

   ```bash
   emcc hello.c -s WASM=1 -o hello.html
   ```

Рассмотрим параметры, которые мы передали компилятору:

- `-s WASM=1` — Указывает, что мы хотим получить wasm модуль. Если не использовать этот параметр, по умолчанию Emscripten просто создаёт [asm.js](http://asmjs.org/);
- `-o hello.html` — Указывает, что мы хотим, чтобы Emscripten сгенерировал HTML-страницу `hello.html` запускающую наш код, а также сам модуль wasm и код JavaScript который позволит использовать модуль в веб-среде.

На этом этапе в вашем каталоге должны находится:

- Бинарный код модуля wasm (`hello.wasm`)
- Файл JavaScript, содержащий код связывающий нативные функции Си и JavaScript/wasm (`hello.js`)
- HTML-страница для загрузки, компиляции и инициализации wasm модуля, и отображающий его вывод в браузере (`hello.html`)

### Запуск вашего примера

Теперь, всё что нужно чтобы запустить полученный `hello.html` в браузере, это поддержка WebAssembly. Он включён по умолчанию в Firefox 52+, Chrome 57+ и последних версиях Opera. Также вы можете использовать модули WebAssembly в Firefox 47+, включив флаг `javascript.options.wasm` в _about:config_, или в Chrome 51+ и Opera 38+ перейдя в _chrome://flags_ и включив флаг _Experimental WebAssembly._

Если все работает как планировалось, вы должны увидеть надпись "Hello world" на открывшейся веб-странице и в JavaScript консоли вашего браузера. Поздравляем, вы только что скомпилировали программу на Си в WebAssembly и запустили её в своём браузере!

> **Примечание:** На самом деле, если просто открыть полученный `hello.html`, то ничего работать не будет. Подразумевается что все файлы находятся на веб-сервере и вы запускаете страницу через `localhost/hello.html`. Для этих целей можно использовать отладочный веб-сервер Emscripten. Чтобы его запустить, откройте терминал, перейдите в каталог, в котором находятся ваши файлы и выполните команду `emrun hello.html`

### Использование собственного HTML шаблона

Вы можете использовать собственный шаблон HTML. Давайте посмотрим, как это сделать:

1. Прежде всего, сохраните следующий код в файле hello2.c в новом каталоге:

   ```cpp
   #include <stdio.h>

   int main(int argc, char ** argv) {
       printf("Hello World\n");

   }
   ```

2. Найдите файл `shell_minimal.html` в вашем репозитории emsdk. Скопируйте его в подкаталог `html_template` внутри вашего нового каталога.
3. Теперь, используя терминал, перейдите в ваш новый каталог и выполните следующую команду:

   ```bash
   emcc -o hello2.html hello2.c -O3 -s WASM=1 --shell-file html_template/shell_minimal.html
   ```

   В этот раз мы использовали немного другие параметры компиляции:

   - Мы указали `-o hello2.html`, чтобы компилятор по прежнему генерировал необходимый JavaScript-код и `.html` файл.
   - Также, мы указали `--shell-file html_template/shell_minimal.html` чтобы компилятор использовал ваш шаблон для создания HTML страницы запускающей этот пример.

4. Теперь давайте запустим этот пример. Команда, указанная выше, сгенерирует файл `hello2.html`, который будет иметь тоже содержание что и шаблон, но с некоторым кодом, добавленным в процесс загрузки сгенерированного wasm, запускающим его и т.д. Откройте его в своём браузере, и вы увидите тот же результат, что и прошлом примере.

> **Примечание:** вы можете указать компилятору создавать только JavaScript-кода, без HTML, используя внутри флага `-o`, `.js` вместо `.html` для формата выходного файла, например `emcc -o hello2.js hello2.c -O3 -s WASM=1`. После этого вы должны создать свой собственный HTML файл с нуля. Однако так делать не рекомендуется — Emscripten требуется большое количество связывающего кода для обработки операций выделения памяти, утечек памяти и других проблем, которые уже включены в предоставляемый шаблон. Намного легче использовать уже готовое решение, чем создавать свои собственные версии самому.

### Вызов пользовательской функции, определённой в Си

Если у вас есть функция определённая в коде на Си, которую вы хотите по необходимости вызывать из JavaScript, то вы можете использовать для этого функцию `ccall()` из Emscripten, и объявление `EMSCRIPTEN_KEEPALIVE` которое добавит вашу функцию в список экспортируемых функций (см. [Почему функции в моем коде исчезают после компиляции и/или я получаю сообщение «Нет функций для обработки»](https://kripken.github.io/emscripten-site/docs/getting_started/FAQ.html#why-do-functions-in-my-c-c-source-code-vanish-when-i-compile-to-javascript-and-or-i-get-no-functions-to-process)). Давайте посмотрим, как это работает.

1. Для начала сохраните следующий код в файле `hello3.c` в новом каталоге:

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

   По умолчанию, код созданный Emscripten, всегда просто вызывает функцию `main()` , а остальные неиспользуемые функции удаляются. Добавьте определение `EMSCRIPTEN_KEEPALIVE` перед именем функции чтобы этого не происходило. Также вы должны подключить библиотеку `emscripten.h` для использования `EMSCRIPTEN_KEEPALIVE`.

   > **Примечание:** Мы используем блоки `#ifdef` чтобы, пример оставался рабочим если вы попытаетесь использовать C++ код. Из за различия в правилах преобразования имён между Си и Си++, этот код может сломаться, но мы написали его так, что функция будет рассматриваться как функция Си даже если вы будете использовать Си++.

2. Теперь добавьте `html_template/shell_minimal.html` в ваш новый каталог, просто для удобства. В настоящем проекте стоит размещать его в специально определённый каталог.
3. Теперь снова займёмся этапом компиляции. Внутри вашего последнего каталога, используя терминал, скомпилируйте ваш Си код следующей командой. (Обратите внимание что при компиляции обязательно нужно использовать опцию NO_EXIT_RUNTIME, иначе после выполнения функции `main()`, рабочий цикл будет завершён. Это приведёт, например, к вызову функции atexits и дальше будет невозможно использовать наш скомпилированный код. Другими словами это необходимо для правильной эмуляции Си.)

   ```bash
   emcc -o hello3.html hello3.c -O3 -s WASM=1 --shell-file html_template/shell_minimal.html -s NO_EXIT_RUNTIME=1  -s EXTRA_EXPORTED_RUNTIME_METHODS='["ccall"]'
   ```

4. Если вы снова запустите пример в своём браузере, вы увидите тоже самое что и до этого!
5. Теперь нам нужно вызвать нашу новую функцию `myFunction()` из JavaScript. Прежде всего, добавьте {{htmlelement("button")}} как показано ниже, чуть выше первого открывающего тега `<script type='text/javascript'>`.

   ```html
   <button class="mybutton">Run myFunction</button>
   ```

6. Теперь добавьте следующий код в конце первого элемента {{htmlelement("script")}} (чуть выше закрывающего тега `</script>`):

   ```js
   document.querySelector(".mybutton").addEventListener("click", function () {
     alert("check console");
     var result = Module.ccall(
       "myFunction", // name of C function
       null, // return type
       null, // argument types
       null,
     ); // arguments
   });
   ```

Это показывает как использовать `ccall()` для вызова экспортируемой функции.

## Смотрите также

- [emscripten.org](http://emscripten.org/) — узнайте больше об Emscripten и разнообразии его настроек.
- [Calling compiled C functions from JavaScript using ccall/cwrap](https://kripken.github.io/emscripten-site/docs/porting/connecting_cpp_and_javascript/Interacting-with-code.html#calling-compiled-c-functions-from-javascript-using-ccall-cwrap)
- [Why do functions in my C/C++ source code vanish when I compile to JavaScript, and/or I get No functions to process?](https://kripken.github.io/emscripten-site/docs/getting_started/FAQ.html#why-do-functions-in-my-c-c-source-code-vanish-when-i-compile-to-javascript-and-or-i-get-no-functions-to-process)
- [WebAssembly on Mozilla Research](https://research.mozilla.org/webassembly/)
- [Compiling an Existing C Module to WebAssembly](/ru/docs/WebAssembly/existing_C_to_wasm)
