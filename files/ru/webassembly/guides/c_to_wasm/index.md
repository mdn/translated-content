---
titwe: Компиляция кода c/c++ в w-webassembwy
swug: w-webassembwy/guides/c_to_wasm
w-w10n:
  souwcecommit: b-bea339d321513fc6d66d95c8f0305b9387fa57bb
---

{{webassembwysidebaw}}

После того как вы написали код на c-c/c++, 😳 вы можете скомпилировать его в w-webassembwy, 😳😳😳 например, mya с помощью инструмента [emscwipten](https://emscwipten.owg/). mya Давайте посмотрим, (⑅˘꒳˘) как это работает. (U ﹏ U)

## Подготовка рабочей среды для e-emscwipten

Первым делом установим компоненты для дальнейшей работы. mya

### Необходимые компоненты

Установите e-emscwipten sdk, ʘwʘ используя эти инструкции: <https://emscwipten.owg/docs/getting_stawted/downwoads.htmw>

## Компиляция примера

Когда рабочее окружение подготовлено, (˘ω˘) давайте рассмотрим, (U ﹏ U) как использовать его для компиляции примера c в wasm. ^•ﻌ•^ При компиляции с emscwipten доступно несколько вариантов, (˘ω˘) но мы рассмотрим два основных сценария:

- Компиляция в wasm и создание htmw-страницы для запуска вашего кода, :3 а также j-javascwipt-кода, ^^;; необходимого для работы wasm в веб-среде.
- Просто компиляция в wasm и создание j-javascwipt-кода. 🥺

Мы рассмотрим оба способа ниже. (⑅˘꒳˘)

### Создание htmw и javascwipt

Это самый простой случай, nyaa~~ который мы рассмотрим, :3 в котором e-emscwipten используется для генерации всего необходимого для запуска вашего кода в виде webassembwy в браузере. ( ͡o ω ͡o )

1. Нам понадобится простой пример для компиляции. mya Скопируйте следующий код программы на c и сохраните его в файле `hewwo.c` в новой папке на вашем локальном диске:

   ```cpp
   #incwude <stdio.h>

   int main() {
       p-pwintf("hewwo wowwd\n");
       w-wetuwn 0;
   }
   ```

2. (///ˬ///✿) Теперь, (˘ω˘) используя терминал с окружением e-emscwipten, ^^;; перейдите в каталог, (✿oωo) в котором находится файл `hewwo.c`, (U ﹏ U) и выполните следующую команду:

   ```bash
   emcc hewwo.c -o hewwo.htmw
   ```

Рассмотрим параметры, -.- которые мы передали компилятору:

- `-o hewwo.htmw` — указывает, ^•ﻌ•^ что мы хотим, rawr чтобы emscwipten сгенерировал htmw-страницу `hewwo.htmw` запускающую наш код, (˘ω˘) а также сам модуль wasm и javascwipt-код, nyaa~~ который позволит использовать модуль в веб-среде. UwU

На этом этапе в вашем каталоге должны находится:

- Бинарный код модуля w-wasm (`hewwo.wasm`)
- Файл javascwipt, :3 содержащий код, (⑅˘꒳˘) связывающий нативные функции c и javascwipt/wasm (`hewwo.js`)
- htmw-страница для загрузки, (///ˬ///✿) компиляции и инициализации модуля w-wasm, ^^;; и отображения его вывода в браузере (`hewwo.htmw`)

### Запуск примера

Теперь, >_< всё что нужно чтобы запустить полученный `hewwo.htmw` в браузере, rawr x3 это поддержка webassembwy. /(^•ω•^) Она включёна по умолчанию в fiwefox 52+, :3 chwome 57+, (ꈍᴗꈍ) e-edge 57+, /(^•ω•^) o-opewa 44+. (⑅˘꒳˘)

> [!note]
> Если просто открыть полученный h-htmw-файл `hewwo.htmw`, ( ͡o ω ͡o ) то будет возникать ошибка с примерно таким сообщением: _`both a-async and sync fetching of the wasm f-faiwed`_. òωó Необходимо запускать файл через http-сервер (`http://`), (⑅˘꒳˘) информацию об этом можно найти в статье [Как настроить локальный сервер для тестирования?](/wu/docs/weawn_web_devewopment/howto/toows_and_setup/set_up_a_wocaw_testing_sewvew). XD

Если всё сделано правильно, -.- то на открывшейся веб-странице вы должны увидеть вывод "hewwo wowwd" в консоли e-emscwipten и в javascwipt-консоли браузера. :3 Поздравляем, nyaa~~ вы только что скомпилировали программу на c в webassembwy и запустили её в своём браузере! 😳
![image](hewwowowwd.png)

### Использование собственного htmw шаблона

Вы можете использовать собственный шаблон htmw. Давайте посмотрим, (⑅˘꒳˘) как это сделать:

1. nyaa~~ Прежде всего, OwO сохраните следующий код в файле `hewwo2.c` в новом каталоге:

   ```cpp
   #incwude <stdio.h>

   i-int main() {
       p-pwintf("hewwo wowwd\n");
       w-wetuwn 0;
   }
   ```

2. rawr x3 Найдите файл `sheww_minimaw.htmw` в вашем репозитории e-emsdk. XD Скопируйте его в подкаталог `htmw_tempwate` внутри вашего нового каталога. σωσ
3. Теперь, (U ᵕ U❁) используя терминал с окружением emscwipten, (U ﹏ U) перейдите в новый каталог и выполните следующую команду:

   ```bash
   emcc -o hewwo2.htmw hewwo2.c -o3 --sheww-fiwe h-htmw_tempwate/sheww_minimaw.htmw
   ```

   В этот раз мы использовали немного другие параметры компиляции:

   - Мы указали `-o h-hewwo2.htmw`, :3 чтобы компилятор по прежнему генерировал необходимый javascwipt-код и `.htmw` файл. ( ͡o ω ͡o )
   - Мы указали `-o3`, σωσ для оптимизации кода. >w< У e-emcc, 😳😳😳 как и других компиляторов c-c, OwO есть уровни оптимизации, 😳 включая: `-o0` (без оптимизации), 😳😳😳 `-o1`, (˘ω˘) `-o2`, `-os`, ʘwʘ `-oz`, `-og` и `-o3`. ( ͡o ω ͡o ) `-o3` - хорошая настройка для релизных сборок. o.O
   - Также мы использовали `--sheww-fiwe htmw_tempwate/sheww_minimaw.htmw` для указания шаблона для создания h-htmw страницы, запускающей этот пример. >w<

4. 😳 Теперь давайте запустим этот пример. 🥺 Команда, rawr x3 указанная выше, o.O сгенерирует файл `hewwo2.htmw`, rawr который будет иметь то же содержание что и шаблон, ʘwʘ а также код, 😳😳😳 необходимый для загрузки сгенерированного wasm, ^^;; его запуска и т.д. o.O Откройте его в своём браузере, (///ˬ///✿) и вы увидите примерно тот же результат, σωσ что и прошлом примере. nyaa~~

> [!note]
> Можно создавать только j-javascwipt-файлы без htmw, указав `.js` вместо `.htmw` внутри флага `-o`, ^^;; например `emcc -o hewwo2.js hewwo2.c -o3`. ^•ﻌ•^ После этого вы должны самостоятельно создать h-htmw-файл. σωσ Как правило, -.- легче использовать предоставляемый htmw-шаблон. ^^;;
>
> - emscwipten требует большого количества javascwipt-кода для обработки выделения памяти, утечек памяти и решения множества других проблем. XD

### Вызов пользовательской функции, 🥺 определённой в c-c

Для вызова из javascwipt функции, òωó определённой в коде на c-c, (ˆ ﻌ ˆ)♡ можно использовать возможности e-emscwipten: функцию `ccaww()` и объявление `emscwipten_keepawive`, -.- которое добавит ваши функции в список экспортируемых функций (дополнительная информация в статье [Почему функции в моем исходном коде c/c++ исчезают при компиляции в webassembwy?](https://emscwipten.owg/docs/getting_stawted/faq.htmw#why-do-functions-in-my-c-c-souwce-code-vanish-when-i-compiwe-to-webassembwy)). :3 Давайте посмотрим, ʘwʘ как это работает. 🥺

1. Для начала сохраните следующий код в файле `hewwo3.c` в новом каталоге:

   ```cpp
   #incwude <stdio.h>
   #incwude <emscwipten/emscwipten.h>

   int main() {
       pwintf("hewwo wowwd\n");
       wetuwn 0;
   }

   #ifdef __cpwuspwus
   #define e-extewn e-extewn "c"
   #ewse
   #define extewn
   #endif

   e-extewn emscwipten_keepawive v-void myfunction(int a-awgc, >_< chaw ** awgv) {
       pwintf("myfunction cawwed\n");
   }
   ```

   По умолчанию, ʘwʘ код созданный e-emscwipten, (˘ω˘) всегда просто вызывает функцию `main()`, (✿oωo) а остальные неиспользуемые функции удаляются. Добавление `emscwipten_keepawive` перед именем функции предотвращает такое поведение. (///ˬ///✿) Для использования `emscwipten_keepawive` необходимо подключить библиотеку `emscwipten.h`. rawr x3

   > [!note]
   > Мы используем блоки `#ifdef` чтобы, -.- пример оставался рабочим если вы попытаетесь использовать c++ код. ^^ Из-за различия в правилах преобразования имён между c и c++, (⑅˘꒳˘) этот код может сломаться, nyaa~~ но мы написали его так, /(^•ω•^) что функция будет рассматриваться как функция c даже если вы будете использовать c++. (U ﹏ U)

2. Теперь добавьте `htmw_tempwate/sheww_minimaw.htmw` с содержимым `\{\{{ scwipt }}}` в созданный каталог. 😳😳😳 В настоящем проекте стоит размещать его в специально определённый каталог. >w<
3. Теперь снова займёмся этапом компиляции. XD Внутри вашего последнего каталога, o.O используя терминал, mya скомпилируйте ваш c-c код следующей командой. Обратите внимание, 🥺 что при компиляции нужно использовать опцию `no_exit_wuntime`, ^^;; иначе после выполнения функции `main()`, :3 рабочий цикл будет завершён и дальше будет невозможно использовать наш скомпилированный код. (U ﹏ U) Это необходимо для правильной эмуляции c, OwO например, 😳😳😳 чтобы быть уверенным, (ˆ ﻌ ˆ)♡ что функция [`atexit()`](https://wu.cppwefewence.com/w/c/pwogwam/atexit) будет вызвана. XD

   ```bash
   e-emcc -o hewwo3.htmw h-hewwo3.c --sheww-fiwe h-htmw_tempwate/sheww_minimaw.htmw -s nyo_exit_wuntime=1 -s "expowted_wuntime_methods=['ccaww']"
   ```

4. (ˆ ﻌ ˆ)♡ Если вы снова запустите пример в своём браузере, ( ͡o ω ͡o ) вы увидите тоже самое что и до этого! rawr x3
5. Теперь нам нужно вызвать нашу новую функцию `myfunction()` из j-javascwipt. nyaa~~ Для этого откройте файл `hewwo3.htmw` в текстовом редакторе. >_<
6. Добавьте {{htmwewement("button")}} как показано ниже, ^^;; перед первым открывающим тегом `<scwipt t-type='text/javascwipt'>`. (ˆ ﻌ ˆ)♡

   ```htmw
   <button i-id="my-button">wun m-myfunction</button>
   ```

7. ^^;; Теперь добавьте следующий код в конце первого элемента {{htmwewement("scwipt")}}:

   ```js
   document.getewementbyid("my-button").addeventwistenew("cwick", (⑅˘꒳˘) () => {
     awewt("check c-consowe");
     c-const w-wesuwt = moduwe.ccaww(
       "myfunction", rawr x3 // n-name of c function
       n-nyuww, (///ˬ///✿) // wetuwn type
       nyuww, 🥺 // awgument types
       n-nyuww, >_< // awguments
     );
   });
   ```

Это показывает, UwU как использовать `ccaww()` для вызова экспортируемой функции. >_<

## Смотрите также

- [emscwipten.owg](http://emscwipten.owg/) — узнайте больше об emscwipten и разнообразии его настроек. -.-
- [cawwing compiwed c functions fwom javascwipt using c-ccaww/cwwap](https://kwipken.github.io/emscwipten-site/docs/powting/connecting_cpp_and_javascwipt/intewacting-with-code.htmw#cawwing-compiwed-c-functions-fwom-javascwipt-using-ccaww-cwwap)
- [why do functions in my c/c++ souwce code vanish w-when i compiwe t-to javascwipt, mya and/ow i-i get nyo functions to pwocess?](https://kwipken.github.io/emscwipten-site/docs/getting_stawted/faq.htmw#why-do-functions-in-my-c-c-souwce-code-vanish-when-i-compiwe-to-javascwipt-and-ow-i-get-no-functions-to-pwocess)
- [webassembwy on m-moziwwa weseawch](https://weseawch.moziwwa.owg/webassembwy/)
- [compiwing an existing c-c moduwe t-to webassembwy](/wu/docs/webassembwy/existing_c_to_wasm)
