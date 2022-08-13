---
title: asm.js の非同期スクリプト
slug: Games/Techniques/Async_scripts
tags:
  - Games
  - JavaScript
  - asm.js
  - async
translation_of: Games/Techniques/Async_scripts
---
{{GamesSidebar}}{{IncludeSubnav("/ja/docs/Games")}}

全ての中\~大規模ゲームでは、コンパイル処理を最適化してブラウザを最大限柔軟にする、非同期スクリプトとして [asm.js](/ja/docs/Games/Tools/asm.js) コードをコンパイルします。Gecko では、非同期コンパイルによって、ゲームのロード時に JavaScript エンジンがメインスレッド外で asm.js をコンパイルし、生成した機械語コードをキャッシュしてそれ以降のロード時にコンパイル不要となります(Firefox 28 から)。違いを見るには、`about:config` で `javascript.options.parallel_parsing` を反転させてください。

## 非同期を動作させる

非同期のコンパイルは簡単です: JavaScript を書く時に、単に` async` 属性を使います:

```js
<script async src="file.js"></script>
```

あるいは、スクリプトで同じことを行います:

```js
var script = document.createElement('script');
script.src = "file.js";
document.body.appendChild(script);
```

(スクリプトによって生成されるスクリプトはデフォルトで非同期です。) デフォルトの HTML シェル Emscripten は、後者を生成します。

## 非同期とそうでない時?

スクリプトが非同期で \*ない\* 、よく似た状況 ([仕様に定義されている](http://www.w3.org/TR/html5/scripting-1.html)通り) では次の通りです:

```js
<script async>code</script>
```

および

```js
var script = document.createElement('script');
script.innerHTML = "code";
document.body.appendChild(script);
```

両方とも 'インライン' スクリプトと考えられ、コンパイルされて、すぐに実行されます。

コードが JS 文字列内にあった場合はどうでしょう? `eval` や `innerHTML`(両方とも同期コンパイルを起動します)を使う代わりに、 オブジェクト URL と一緒の Blob を使います:

```js
var blob = new Blob([codeString]);
var script = document.createElement('script');
var url = URL.createObjectURL(blob);
script.onload = script.onerror = function() { URL.revokeObjectURL(url); };
script.src = url;
document.body.appendChild(script);
```

`innerHTML` ではなく `src`　をセットすると、スクリプトが非同期になります。
