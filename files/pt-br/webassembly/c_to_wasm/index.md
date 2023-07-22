---
title: Compilando um novo módulo C/C++ para WebAssembly
slug: WebAssembly/C_to_Wasm
---

{{WebAssemblySidebar}}

Quando você escreve um novo módulo de código em uma linguagem como C/C++, você pode compilá-lo no WebAssembly usando uma ferramenta como [Emscripten](https://emscripten.org/). Vejamos como funciona.

## Configuração do ambiente Emscripten

Primeiro, vamos configurar o ambiente de desenvolvimento necessário.

### Pré-requisitos

Obtenha o SDK Emscripten, seguindo estas instruções <https://emscripten.org/docs/getting_started/downloads.html>

## Compilando um exemplo

Com o ambiente configurado, vamos ver como usá-lo para compilar um exemplo C para Emscripten. Há várias opções disponíveis ao compilar com o Emscripten, mas os dois principais cenários que abordaremos são:

- Compilando para wasm e criando HTML para executar nosso código, além de todo o código JavaScript "cola" necessário para executar o wasm no ambiente web.
- Compilando para wasm e apenas criando o JavaScript.

Veremos ambos a seguir.

### Criando HTML e JavaScript

Este é o caso mais simples que veremos, no qual você obtém emscripten para gerar tudo o que precisa para executar seu código, como WebAssembly, no navegador.

1. Primeiro precisamos de um exemplo para compilar. Faça uma cópia do seguinte exemplo simples em C e salve-o em um arquivo chamado `hello.c` em um novo diretório em sua unidade local:

   ```cpp
   #include <stdio.h>

   int main() {
       printf("Hello World\n");
       return 0;
   }
   ```

2. Agora, usando a janela do terminal que você usou para entrar no ambiente do compilador Emscripten, navegue até o mesmo diretório que seu arquivo `hello.c` e execute o seguinte comando:

   ```bash
   emcc hello.c -o hello.html
   ```

As opções que passamos com o comando são as seguintes:

- `-o hello.html` — Especifica que queremos que o Emscripten gere uma página HTML para executar nosso código (e um nome de arquivo para usar), bem como o módulo wasm e o código JavaScript "glue" para compilar e instanciar o wasm para que possa ser usado no ambiente web. de to compile and instantiate the wasm so it can be used in the web environment.

Neste ponto em seu diretório de origem, você deve ter:

- O código binário do módulo wasm (`hello.wasm`)
- Um arquivo JavaScript contendo código de cola para traduzir entre as funções C nativas e JavaScript/wasm (`hello.js`)
- Um arquivo HTML para carregar, compilar e instanciar seu código wasm e exibir sua saída no navegado (`hello.html`)

### Executando seu exemplo

Agora tudo o que resta é você carregar o resultado `hello.html` em um navegador que suporte WebAssembly. Ele é ativado por padrão no Firefox 52, Chrome 57, Edge 57, Opera 44.

> **Nota:** Se você tentar abrir o arquivo HTML gerado (`hello.html`) diretamente de seu disco rígido local (por exemplo, `file://your_path/hello.html`), você terminará com uma mensagem de erro ao longo das linhas de `both async and sync fetching of the wasm failed.` Você precisa executar seu arquivo HTML por meio de um servidor HTTP (`http://`) — consulte [Como você configura um servidor de teste local](/pt_BR/docs/Learn/Common_questions/set_up_a_local_testing_server) Para maiores informações.

Se tudo funcionou como planejado, você deverá ver a saída "Hello world" no console do Emscripten aparecendo na página da Web e no console JavaScript do seu navegador. Parabéns, você acabou de compilar C para WebAssembly e executá-lo em seu navegador!
![image](helloworld.png)

### Usando um modelo HTML personalizado

Às vezes você vai querer usar um modelo HTML personalizado. Vejamos como podemos fazer isso.

1. Antes de tudo, salve o seguinte código C em um arquivo chamado `hello2.c`, em um novo diretório:

   ```cpp
   #include <stdio.h>

   int main() {
       printf("Hello World\n");
       return 0;
   }
   ```

2. Procure o arquivo `shell_minimal.html` em seu repositório emsdk. Copie-o para um subdiretório chamado `html_template` dentro do seu novo diretório anterior.

3. Agora navegue em seu novo diretório (novamente, na janela do terminal do ambiente do compilador Emscripten) e execute o seguinte comando:

   ```bash
   emcc -o hello2.html hello2.c -O3 --shell-file html_template/shell_minimal.html
   ```

   As opções que passamos são um pouco diferentes desta vez:

   - Nós especificamos `-o hello2.html`, o que significa que o compilador ainda produzirá o código de cola JavaScript e `.html`.
   - Também especificamos `--shell-file html_template/shell_minimal.html` — isso fornece o caminho para o modelo HTML que você deseja usar para criar o HTML pelo qual você executará seu exemplo.

4. Agora vamos executar este exemplo. O comando acima terá gerado `hello2.html`, que terá praticamente o mesmo conteúdo do modelo com algum código de cola adicionado para carregar o wasm gerado, executá-lo etc. Abra-o em seu navegador e você verá a mesma saída do último exemplo.

> **Observação:** Você pode especificar a saída apenas do arquivo JavaScript "cola" em vez do HTML completo especificando um arquivo .js em vez de um arquivo HTML no `-o` flag, e.g. `emcc -o hello2.js hello2.c -O3`. Você poderia então construir seu HTML personalizado completamente do zero, embora esta seja uma abordagem avançada; geralmente é mais fácil usar o modelo HTML fornecido.
>
> - O Emscripten requer uma grande variedade de código JavaScript "cola" para lidar com alocação de memória, vazamentos de memória e uma série de outros problemas

### Chamando uma função personalizada definida em C

Se você tiver uma função definida em seu código C que deseja chamar conforme necessário do JavaScript, você pode fazer isso usando o Emscripten com a função `ccall()`, e a declaração `EMSCRIPTEN_KEEPALIVE` (que adiciona suas funções à lista de funções exportadas (consulte [Por que as funções no meu código-fonte C/C++ desaparecem quando compilo para JavaScript e/ou recebo Nenhuma função para processar](https://emscripten.org/docs/getting_started/FAQ.html#why-do-functions-in-my-c-c-source-code-vanish-when-i-compile-to-javascript-and-or-i-get-no-functions-to-process)). Vejamos como isso funciona

1. Para começar, salve o seguinte código como `hello3.c` em um novo diretório:

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

   Por padrão, o código gerado pelo Emscripten sempre chama a função `main()` e outras funções são eliminadas como código morto. Colocando `EMSCRIPTEN_KEEPALIVE` antes que um nome de função impeça que isso aconteça. Você também precisa importar a biblioteca `emscripten.h` para usar `EMSCRIPTEN_KEEPALIVE`.

   > **Nota:** Estamos incluindo os blocos `#ifdef` para que, se você estiver tentando incluir isso no código C++, o exemplo ainda funcione. Devido às regras de desmembramento de nomes C versus C++, isso seria quebrado, mas aqui estamos definindo-o para que seja tratado como uma função C externa se você estiver usando C++.

2. Agora adicione `html_template/shell_minimal.html` com \{\{{ SCRIPT }}} como conteúdo neste novo diretório também, apenas por conveniência (você obviamente colocaria isso em um local central em seu ambiente de desenvolvimento real).

3. Agora vamos executar a etapa de compilação novamente. De dentro do seu diretório mais recente (e enquanto estiver dentro da janela do terminal do ambiente do compilador Emscripten), compile seu código C com o seguinte comando. (Observe que precisamos compilar com `NO_EXIT_RUNTIME`, o que é necessário caso contrário quando main() terminasse, o tempo de execução seria encerrado - necessário para a emulação C adequada, por exemplo, atexits são chamados - e não seria válido chamar o código compilado.)

   ```bash
   emcc -o hello3.html hello3.c -O3 --shell-file html_template/shell_minimal.html -s NO_EXIT_RUNTIME=1 -s "EXPORTED_RUNTIME_METHODS=['ccall']"
   ```

4. Se você carregar o exemplo em seu navegador novamente, verá a mesma coisa de antes!

5. Agora precisamos executar nosso nova função `myFunction()` do JavaScript. Antes de tudo, abra seu arquivo hello3.html em um editor de texto.

6. Adicione um elemento {{HTMLElement("button")}} como mostrado abaixo, logo acima da primeira abertura da tag `<script type='text/javascript'>`.

   ```html
   <button id="mybutton">Run myFunction</button>
   ```

7. Agora adicione o seguinte código no final do primeiro elemento {{HTMLElement("script")}}:

   ```js
   document.getElementById("mybutton").addEventListener("click", () => {
     alert("check console");
     const result = Module.ccall(
       "myFunction", // name of C function
       null, // return type
       null, // argument types
       null, // arguments
     );
   });
   ```

Isso ilustra como ccall() é usado para chamar a função exportada.

## Veja também

- [emscripten.org](https://emscripten.org/) — saiba mais sobre Emscripten e sua grande variedade de opções.
- [Chamando de C compilado as funções de JavaScript usando ccall/cwrap](https://emscripten.org/docs/porting/connecting_cpp_and_javascript/Interacting-with-code.html#calling-compiled-c-functions-from-javascript-using-ccall-cwrap)
- [Por que as funções no meu código-fonte C/C++ desaparecem quando compilo para JavaScript e/ou não recebo nenhuma função para processar?](https://emscripten.org/docs/getting_started/FAQ.html#why-do-functions-in-my-c-c-source-code-vanish-when-i-compile-to-javascript-and-or-i-get-no-functions-to-process)
- [WebAssembly na Mozilla Research](https://research.mozilla.org/)
- [Compilando um módulo C existente para o WebAssembly](/pt-BR/docs/WebAssembly/existing_C_to_wasm)
