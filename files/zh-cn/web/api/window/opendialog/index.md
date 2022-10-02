---
title: window.openDialog
slug: Web/API/Window/openDialog
---

{{ ApiRef() }}

### 简介

`window.openDialog` 是对[window.open](cn/DOM/window.open)的扩展。和它一样，可以传递`windowFeatures`参数，但是 `windowFeatures` 的方式有变化。

The optional parameters, if present, will be bundled up in a JavaScript Array object and added to the newly created window as a property named [window.arguments](cn/DOM/window.arguments). They may be referenced in the JavaScript of the window at any time, including during the execution of a `load` handler. These parameters may be used, then, to pass arguments to and from the dialog window.

Note that the call to `openDialog()` returns immediately. If you want the call to block until the user has closed the dialog, supply `modal` as a `windowFeatures` parameter. Note that this also means the user won't be able to interact with the opener window until he closes the modal dialog.

### 语法

```plain
newWindow = openDialog(url,name,features,arg1,arg2, ...)
```

- newWindow
  - : 打开的窗口对象。
- url
  - : 要在新窗口里打开的地址。
- name
  - : The window name (optional). See [window.open](cn/DOM/window.open) description for detailed information.
- features
  - : See [window.open](cn/DOM/window.open) description for description.
- arg1, arg2, ...
  - : The arguments to be passed to the new window (optional).

### 例子

```plain
var win = openDialog("http://example.tld/zzz.xul", "dlg", "", "pizza", 6.98);
```

### 注意

#### New Features

`all` - Initially activates (or deactivates `("all=no")`) all chrome (except the behaviour flags `chrome`, `dialog` and `modal`). These can be overridden (so `"menubar=no,all"` turns on all chrome except the menubar.) This feature is explicitly ignored by [window.open](cn/Window.open). `window.openDialog` finds it useful because of its different default assumptions.

#### Default behaviour

The `chrome` and `dialog` features are always assumed on, unless explicitly turned off ("`chrome=no`"). `openDialog` treats the absence of the features parameter as does [window.open](cn/Window.open), (that is, an empty string sets all features to off) except `chrome` and `dialog`, which default to on. If the `features` parameter is a zero-length string, or contains only one or more of the behaviour features (`chrome`, `dependent`, `dialog` and `modal`) the chrome features are assumed "OS' choice." That is, window creation code is not given specific instructions, but is instead allowed to select the chrome that best fits a dialog on that operating system.

#### Passing extra parameters to the dialog

To pass extra parameters into the dialog, you can simply supply them after the `windowFeatures` parameter:

```plain
openDialog("http://example.tld/zzz.xul", "dlg", "", "pizza", 6.98);
```

The extra parameters will then get packed into a property named `arguments` of type [Array](cn/Core_JavaScript_1.5_Reference/Global_Objects/Array), and this property gets added to the newly opened dialog window.

To access these extra parameters from within dialog code, use the following scheme:

```plain
var food  = window.arguments[0];
var price = window.arguments[1];
```

Note that you can access this property from within anywhere in the dialog code. ([Another example](cn/Code_snippets/Dialogs_and_Prompts#Passing_arguments_and_displaying_a_dialog)).

#### Returning values from the dialog

Since `window\.close()` erases all properties associated with the dialog window (i.e. the variables specified in the JavaScript code which gets loaded from the dialog), it is not possible to pass return values back past the close operation using globals (or any other constructs).

To be able to pass values back to the caller, you have to supply some object via the extra parameters. You can then access this object from within the dialog code and set properties on it, containing the values you want to return or preserve past the `window.close()` operation.

```plain
var retVals = { address: null, delivery: null };
openDialog("http://example.tld/zzz.xul", "dlg", "modal", "pizza", 6.98, retVals);
```

If you set the properties of the `retVals` object in the dialog code as described below, you can now access them via the `retVals` array after the `openDialog()` call returns.

Inside the dialog code, you can set the properties as follows:

```plain
var retVals = window.arguments[2];
retVals.address  = enteredAddress;
retVals.delivery = "immediate";
```

See also [. (](http://groups.google.com/group/netscape.public.dev.xul/msg/02075a1736406b40)[Another example](cn/Code_snippets/Dialogs_and_Prompts#Passing_arguments_and_displaying_a_dialog)).

## 规范

不属于任何规范。

## 浏览器兼容性

{{Compat}}
