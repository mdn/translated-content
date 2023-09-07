---
title: window.window
slug: Web/API/Window/window
---

{{ApiRef}}

## 概要

`window` オブジェクトの `window` プロパティは、その `window` オブジェクト自身を指します。故に、以下の表現は同じ `window` オブジェクトを返します。

```
window.window
window.window.window
window.window.window.window
  ...
```

Web ページに於いては、`window` オブジェクトは*グローバルオブジェクト* でもあります。これは次の事を意味します。

1. スクリプト中の変数 "global" は、実際には `window` オブジェクトのプロパティです。

   ```js
   var global = { data: 0 };

   alert(global === window.global); // "true" を表示します。
   ```

2. ブラウジングコンテキストに於いて `window` は最上位オブジェクトである為、 `window` オブジェクトのメンバへのアクセス時には "`window.`" 接頭辞を省略する事が可能となっています。

   ```js
   // 次の 2 行は同じ動作となります。
   window.setTimeout("window.alert('Hi!')", 50);
   setTimeout("alert('Hi!')", 50);

   // window プロパティが自身を参照しているか確認してみましょう。
   alert((window === window.window) === window.window.window.window); // true
   ```

そのオブジェクト自身を参照する `window` プロパティが持っている理由は、おそらくグローバルオブジェクトの参照を容易にする為でしょう。もしこのようになっていない場合、 `var window = this;` という代入をスクリプトの一番最初に自分で書かなければならないでしょう。

別の理由としては、このプロパティ無しには、例えば、 "{{domxref("window.open", "window.open('http://google.com/')")}}" と書くことができないということが挙げられます。そうでなければ、単に、"open('http\://google.com/')" と書かなければならないでしょう。

Yet another reason to use this property is for libraries which wish to offer OOP-versions and non-OOP versions (especially JavaScript modules). If, for example, we refer to "this.window\.location.href", a [JavaScript module](/ja/docs/Mozilla/JavaScript_code_modules) could define a property called "window" inside of a class it defined (since no global "window" variable exists for it by default) which, could be created, for example, after passing in a window object to the module class' constructor. Thus, "this.window" inside of its functions would refer to that window object. In the non-namespaced version, "this.window" would simply refer back to "window", and also be able to get the document location without trouble. Another advantage is that the objects of such a class (even if the class were defined outside of a module) could change their reference to the window at will, as they would not be able to do if they had hard-coded a reference to "window" (yet the default in the class could still be set as the current window object).

## 仕様

{{Specifications}}
