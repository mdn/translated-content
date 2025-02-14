---
title: Компиляция кода C/C++ в WebAssembly
slug: WebAssembly/Guides/C_to_Wasm
l10n:
  sourceCommit: bea339d321513fc6d66d95c8f0305b9387fa57bb
---

{{WebAssemblySidebar}}

После того как вы написали код на C/C++, вы можете скомпилировать его в WebAssembly, например, с помощью инструмента [Emscripten](https://emscripten.org/). Давайте посмотрим, как это работает.

## Подготовка рабочей среды для Emscripten

Первым делом установим компоненты для дальнейшей работы.

### Необходимые компоненты

Установите Emscripten SDK, используя эти инструкции: <https://emscripten.org/docs/getting_started/downloads.html>

## Компиляция примера

Когда рабочее окружение подготовлено, давайте рассмотрим, как использовать его для компиляции примера C в Wasm. При компиляции с Emscripten доступно несколько вариантов, но мы рассмотрим два основных сценария:

- Компиляция в Wasm и создание HTML-страницы для запуска вашего кода, а также JavaScript-кода, необходимого для работы Wasm в веб-среде.
- Просто компиляция в Wasm и создание JavaScript-кода.

Мы рассмотрим оба способа ниже.

### Создание HTML и JavaScript

Это самый простой случай, который мы рассмотрим, в котором Emscripten используется для генерации всего необходимого для запуска вашего кода в виде WebAssembly в браузере.

1. Нам понадобится простой пример для компиляции. Скопируйте следующий код программы на C и сохраните его в файле `hello.c` в новой папке на вашем локальном диске:

   ```cpp
   #include <stdio.h>

   int main() {
       printf("Hello World\n");
       return 0;
   }
   ```

2. Теперь, используя терминал с окружением Emscripten, перейдите в каталог, в котором находится файл `hello.c`, и выполните следующую команду:

   ```bash
   emcc hello.c -o hello.html
   ```

Рассмотрим параметры, которые мы передали компилятору:

- `-o hello.html` — указывает, что мы хотим, чтобы Emscripten сгенерировал HTML-страницу `hello.html` запускающую наш код, а также сам модуль Wasm и JavaScript-код, который позволит использовать модуль в веб-среде.

На этом этапе в вашем каталоге должны находится:

- Бинарный код модуля Wasm (`hello.wasm`)
- Файл JavaScript, содержащий код, связывающий нативные функции C и JavaScript/Wasm (`hello.js`)
- HTML-страница для загрузки, компиляции и инициализации модуля Wasm, и отображения его вывода в браузере (`hello.html`)

### Запуск примера

Теперь, всё что нужно чтобы запустить полученный `hello.html` в браузере, это поддержка WebAssembly. Она включёна по умолчанию в Firefox 52+, Chrome 57+, Edge 57+, Opera 44+.

> [!NOTE]
> Если просто открыть полученный HTML-файл `hello.html`, то будет возникать ошибка с примерно таким сообщением: _`both async and sync fetching of the wasm failed`_. Необходимо запускать файл через HTTP-сервер (`http://`), информацию об этом можно найти в статье [Как настроить локальный сервер для тестирования?](/ru/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server).

Если всё сделано правильно, то на открывшейся веб-странице вы должны увидеть вывод "Hello World" в консоли Emscripten и в JavaScript-консоли браузера. Поздравляем, вы только что скомпилировали программу на C в WebAssembly и запустили её в своём браузере!
![image](helloworld.png)

### Использование собственного HTML шаблона

Вы можете использовать собственный шаблон HTML. Давайте посмотрим, как это сделать:

1. Прежде всего, сохраните следующий код в файле `hello2.c` в новом каталоге:

   ```cpp
   #include <stdio.h>

   int main() {
       printf("Hello World\n");
       return 0;
   }
   ```

2. Найдите файл `shell_minimal.html` в вашем репозитории emsdk. Скопируйте его в подкаталог `html_template` внутри вашего нового каталога.
3. Теперь, используя терминал с окружением Emscripten, перейдите в новый каталог и выполните следующую команду:

   ```bash
   emcc -o hello2.html hello2.c -O3 --shell-file html_template/shell_minimal.html
   ```

   В этот раз мы использовали немного другие параметры компиляции:

   - Мы указали `-o hello2.html`, чтобы компилятор по прежнему генерировал необходимый JavaScript-код и `.html` файл.
   - Мы указали `-O3`, для оптимизации кода. У Emcc, как и других компиляторов C, есть уровни оптимизации, включая: `-O0` (без оптимизации), `-O1`, `-O2`, `-Os`, `-Oz`, `-Og` и `-O3`. `-O3` - хорошая настройка для релизных сборок.
   - Также мы использовали `--shell-file html_template/shell_minimal.html` для указания шаблона для создания HTML страницы, запускающей этот пример.

4. Теперь давайте запустим этот пример. Команда, указанная выше, сгенерирует файл `hello2.html`, который будет иметь то же содержание что и шаблон, а также код, необходимый для загрузки сгенерированного Wasm, его запуска и т.д. Откройте его в своём браузере, и вы увидите примерно тот же результат, что и прошлом примере.

> [!NOTE]
> Можно создавать только JavaScript-файлы без HTML, указав `.js` вместо `.html` внутри флага `-o`, например `emcc -o hello2.js hello2.c -O3`. После этого вы должны самостоятельно создать HTML-файл. Как правило, легче использовать предоставляемый HTML-шаблон.
>
> - Emscripten требует большого количества JavaScript-кода для обработки выделения памяти, утечек памяти и решения множества других проблем.

### Вызов пользовательской функции, определённой в C

Для вызова из JavaScript функции, определённой в коде на C, можно использовать возможности Emscripten: функцию `ccall()` и объявление `EMSCRIPTEN_KEEPALIVE`, которое добавит ваши функции в список экспортируемых функций (дополнительная информация в статье [Почему функции в моем исходном коде C/C++ исчезают при компиляции в WebAssembly?](https://emscripten.org/docs/getting_started/FAQ.html#why-do-functions-in-my-c-c-source-code-vanish-when-i-compile-to-webassembly)). Давайте посмотрим, как это работает.

1. Для начала сохраните следующий код в файле `hello3.c` в новом каталоге:

   ```cpp
   #include <stdio.h>
   #include <emscripten/emscripten.h>

   int main() {
       printf("Hello World\n");
       return 0;
   }

   #ifdef __cplusplus
   #define EXTERN extern "C"
   #else
   #define EXTERN
   #endif

   EXTERN EMSCRIPTEN_KEEPALIVE void myFunction(int argc, char ** argv) {
       printf("MyFunction Called\n");
   }
   ```

   По умолчанию, код созданный Emscripten, всегда просто вызывает функцию `main()`, а остальные неиспользуемые функции удаляются. Добавление `EMSCRIPTEN_KEEPALIVE` перед именем функции предотвращает такое поведение. Для использования `EMSCRIPTEN_KEEPALIVE` необходимо подключить библиотеку `emscripten.h`.

   > [!NOTE]
   > Мы используем блоки `#ifdef` чтобы, пример оставался рабочим если вы попытаетесь использовать C++ код. Из-за различия в правилах преобразования имён между C и C++, этот код может сломаться, но мы написали его так, что функция будет рассматриваться как функция C даже если вы будете использовать C++.

2. Теперь добавьте `html_template/shell_minimal.html` с содержимым `\{\{{ SCRIPT }}}` в созданный каталог. В настоящем проекте стоит размещать его в специально определённый каталог.
3. Теперь снова займёмся этапом компиляции. Внутри вашего последнего каталога, используя терминал, скомпилируйте ваш C код следующей командой. Обратите внимание, что при компиляции нужно использовать опцию `NO_EXIT_RUNTIME`, иначе после выполнения функции `main()`, рабочий цикл будет завершён и дальше будет невозможно использовать наш скомпилированный код. Это необходимо для правильной эмуляции C, например, чтобы быть уверенным, что функция [`atexit()`](https://ru.cppreference.com/w/c/program/atexit) будет вызвана.

   ```bash
   emcc -o hello3.html hello3.c --shell-file html_template/shell_minimal.html -s NO_EXIT_RUNTIME=1 -s "EXPORTED_RUNTIME_METHODS=['ccall']"
   ```

4. Если вы снова запустите пример в своём браузере, вы увидите тоже самое что и до этого!
5. Теперь нам нужно вызвать нашу новую функцию `myFunction()` из JavaScript. Для этого откройте файл `hello3.html` в текстовом редакторе.
6. Добавьте {{HTMLElement("button")}} как показано ниже, перед первым открывающим тегом `<script type='text/javascript'>`.

   ```html
   <button id="my-button">Run myFunction</button>
   ```

7. Теперь добавьте следующий код в конце первого элемента {{HTMLElement("script")}}:

   ```js
   document.getElementById("my-button").addEventListener("click", () => {
     alert("check console");
     const result = Module.ccall(
       "myFunction", // name of C function
       null, // return type
       null, // argument types
       null, // arguments
     );
   });
   ```

Это показывает, как использовать `ccall()` для вызова экспортируемой функции.

## Смотрите также

- [emscripten.org](http://emscripten.org/) — узнайте больше об Emscripten и разнообразии его настроек.
- [Calling compiled C functions from JavaScript using ccall/cwrap](https://kripken.github.io/emscripten-site/docs/porting/connecting_cpp_and_javascript/Interacting-with-code.html#calling-compiled-c-functions-from-javascript-using-ccall-cwrap)
- [Why do functions in my C/C++ source code vanish when I compile to JavaScript, and/or I get No functions to process?](https://kripken.github.io/emscripten-site/docs/getting_started/FAQ.html#why-do-functions-in-my-c-c-source-code-vanish-when-i-compile-to-javascript-and-or-i-get-no-functions-to-process)
- [WebAssembly on Mozilla Research](https://research.mozilla.org/webassembly/)
- [Compiling an Existing C Module to WebAssembly](/ru/docs/WebAssembly/existing_C_to_wasm)
