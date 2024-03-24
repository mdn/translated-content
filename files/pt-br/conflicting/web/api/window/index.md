---
title: window.openDialog
slug: conflicting/Web/API/Window
---

{{ ApiRef() }}

### Resumo

`window.openDialog` é uma extensão para [window.open](/pt-BR/DOM/window.open). Ela se comporta da mesma maneira, exceto que pode opcionalmente usar um ou mais parâmetros passado por `windowFeatures`, e `windowFeatures` em si é tratado um pouco diferente.

Parâmetros opcionais, se presentes, serão incluídos no JavaScript Array object e adicionados a nova janela criada como uma propriedade chamada [window.arguments](/pt-BR/DOM/window.arguments). Eles podem ser referenciados no javascript da janela a qualquer momento, incluindo durante a execução da `load` handler. Esses parâmetros podem ser usados, e depois, para passar argumentos para e da janela de diálogo.

Note que a chamada para `openDialog()` retorna imediatamente. Se você quer que a chamada seja bloqueada até o usuário fechar a janela de diálogo, forneça `modal` como um parâmetro `windowFeatures`. Note que isso significa que o usuário não poderá interagir com a janela que abriu a janela modal (modal dialog) enquanto o usuário não fechá-la.

### Sintaxe

```
newWindow = openDialog(url, name, features, arg1, arg2, ...)
```

- newWindow
  - : A janela aberta
- url
  - : A URL a ser carregada na nova janela aberta.
- name
  - : O nome da janela (opcional). Veja a descrição de [window.open](/pt-BR/DOM/window.open) para informações detalhadas.
- features
  - : Consulte [window.open](/pt-BR/DOM/window.open) para descrição.
- arg1, arg2, ...
  - : Os argumentos podem ser passados para a nova janela (opcional).

### Exemplo

```js
var win = openDialog("http://example.tld/zzz.xul", "dlg", "", "pizza", 6.98);
```

### Observações

#### Novas funcionalidades

`all` - Initially activates (or deactivates `("all=no")`) all chrome (except the behaviour flags `chrome`, `dialog` and `modal`). These can be overridden (so `"menubar=no,all"` turns on all chrome except the menubar.) This feature is explicitly ignored by [window.open](/pt-BR/DOM/window.open). `window.openDialog` finds it useful because of its different default assumptions.

#### Comportamento padrão

The `chrome` and `dialog` features are always assumed on, unless explicitly turned off ("`chrome=no`"). `openDialog` treats the absence of the features parameter as does [window.open](/pt-BR/DOM/window.open), (that is, an empty string sets all features to off) except `chrome` and `dialog`, which default to on. If the `features` parameter is a zero-length string, or contains only one or more of the behaviour features (`chrome`, `dependent`, `dialog` and `modal`) the chrome features are assumed "OS' choice." That is, window creation code is not given specific instructions, but is instead allowed to select the chrome that best fits a dialog on that operating system.

#### Passando parâmetros extras para o diálogo

Para passar parâmento extra para a janela de diálogo, você pode simplesmente pode fornece=lo depois do parâmetro `windowFeatures`:

```js
openDialog("http://example.tld/zzz.xul", "dlg", "", "pizza", 6.98);
```

Os parâmetros serão empacotados em uma propriedade chamada `arguments` do tipo [Array](/pt-BR/Core_JavaScript_1.5_Reference/Global_Objects/Array), e essa propriedade será adicionada para a nova janela de diálogo.

Para acessar esses parâmetros extras da janela de diálogo, use o seguinte esquema:

```js
var food  = window.arguments[0];
var price = window.arguments[1];
```

Note que você pode acessar esta propriedade de qualwuer lugar do código de diálogo.. ([Outro exemplo](/pt-BR/Code_snippets/Dialogs_and_Prompts#Passing_arguments_and_displaying_a_dialog)).

#### Retornando valores do diálogo

Dado que `window.close()` apaga todas a propriedades associadas com a janela de diálogo (isto é, as variáveis especificadas no código javascript que é carregado a partir da janela de diálogo), não é possível passar os valores retornados depois da operação de fechamento usando variáveis globais (ou qualquer outro construtor).

Para ser possível passar valores de volta para a janela que chamou, você deve fornecer algum objeto via parâmetros extra. Em seguida, pode acessar esse objeto de dentro do código de diálogo e definir as propriedades nele, que contém os valores que você deseja retornar ou preservar passado a operação `window.close()`.

```js
var retVals = { address: null, delivery: null };
openDialog("http://example.tld/zzz.xul", "dlg", "modal", "pizza", 6.98, retVals);
```

Se você definir as propriedades do objeto `retVals` no código de diálogo, conforme descrito abaixo, agora você pode acessá-los via array `retVals` depois do retorno da chamada de `openDialog()`.

Dentro do código de diálogo, você pode definir as propriedades da seguinte forma:

```js
var retVals = window.arguments[2];
retVals.address  = enteredAddress;
retVals.delivery = "immediate";
```

Veja também . ([Outro exemplo](/pt-BR/Code_snippets/Dialogs_and_Prompts#Passing_arguments_and_displaying_a_dialog)).
veja também window\.importDialog (mobile).

### Especificação

{{Specifications}}
