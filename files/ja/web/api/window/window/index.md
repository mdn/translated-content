---
title: "Window: window プロパティ"
short-title: window
slug: Web/API/Window/window
l10n:
  sourceCommit: 364a4d02b10854ab7cef4ff4b0ec3616d4e1c8ab
---

{{APIRef}}

**`window`** は {{domxref("Window")}} オブジェクトのプロパティで、 window オブジェクト自身を指します。

したがって、以下の式はすべて同じウィンドウオブジェクトを返します。

```js
window.window;
window.window.window;
window.window.window.window;
// …
```

ウェブページにおいて、 window オブジェクトはグローバルオブジェクトでもあります。これは次のことを意味します。

1. スクリプト中のグローバル変数は、実際には `window` オブジェクトのプロパティです。

   ```js
   var global = { data: 0 };
   alert(global === window.global); // "true" を表示します。
   ```

2. ウィンドウオブジェクトの組み込みプロパティには、`window.` を接頭辞として付ける必要なくアクセスできます。

   ```js
   setTimeout(() => alert("Hi!"), 50); // window.setTimeout() および window.alert() を使用するのと同等
   alert(window === window.window); // "true" と表示
   ```

そのオブジェクト自身を参照する `window` プロパティが持っている理由は、おそらくグローバルオブジェクトの参照を容易にするためでしょう。もしこのようになっていない場合、 `let window = this;` という代入をスクリプトの一番最初に自分で書かなければならないでしょう。

それ以外に、このプロパティがないと、例えば、 {{domxref("window.open","window.open('https://google.com/')")}} のように書くことができないということが挙げられます。そうでなければ、単に、`open('https://google.com/')` と書かなければならないでしょう。

このプロパティを使用するもう一つの理由は、OOP 版と非 OOP 版（特に JavaScript モジュール）を提供したいライブラリーの存在です。例えば、"this.window\.location.href" を参照した場合、[JavaScript モジュール](/ja/docs/Web/JavaScript/Guide/Modules)は、定義したクラス内に "window" というプロパティを定義できます（デフォルトではグローバルな変数 "window" が存在しないため）。このプロパティは、モジュールクラスのコンストラクターにウィンドウオブジェクトを渡すことで作成できます。したがって、その関数内の "this.window" はそのウィンドウオブジェクトを参照します。名前空間版でない場合は、 "this.window" は元の "window" を参照し、文書の位置を容易に取得することができます。もう一つの利点は、そのようなクラスのオブジェクト（たとえクラスがモジュール外で定義されていても）が自由にウィンドウへの参照を変更できることです。もし "window" への参照をハードコードしていた場合、これは不可能です。クラスのデフォルト値はまだ現在のウィンドウオブジェクトに設定できます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
