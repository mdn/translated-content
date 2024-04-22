---
title: asm.js の非同期スクリプト
slug: Games/Techniques/Async_scripts
---

{{GamesSidebar}}

全ての中～大規模ゲームでは、コンパイル処理を最適化してブラウザーを最大限柔軟にする、非同期スクリプトとして [asm.js](/ja/docs/Games/Tools/asm.js) コードをコンパイルします。 Gecko では、非同期コンパイルによって、ゲームの読み込み時に JavaScript エンジンがメインスレッド外で asm.js をコンパイルし、生成した機械語コードをキャッシュして、それ以降の読み込み時にコンパイル不要となります（Firefox 28から）。違いを見るには、`about:config` で `javascript.options.parallel_parsing` を反転させてください。

## 非同期を動作させる

非同期のコンパイルは簡単です。 JavaScript を書く時に、単に `async` 属性を使います。

```html
<script async src="file.js"></script>
```

あるいは、スクリプトで同じことを行います。

```js
const script = document.createElement("script");
script.src = "file.js";
document.body.appendChild(script);
```

（スクリプトによって生成されるスクリプトは既定で非同期です。）既定の HTML シェル Emscripten は、後者を生成します。

## 非同期とそうでない時?

スクリプトが非同期で _ない_ 、よく似た状況 ([仕様に定義されている](https://html.spec.whatwg.org/multipage/scripting.html)通り) では次の通りです。

```html
<script async>
  code;
</script>
```

および

```js
const script = document.createElement("script");
script.textContent = "code";
document.body.appendChild(script);
```

両方とも「インライン」スクリプトと考えられ、コンパイルされて、すぐに実行されます。

コードが JS 文字列内にあった場合はどうでしょう? `eval` や `innerHTML`（両方とも同期コンパイルを起動します）を使う代わりに、 オブジェクトURLと一緒の Blob を使います。

```js
const blob = new Blob([codeString]);
const script = document.createElement("script");
const url = URL.createObjectURL(blob);
script.onload = script.onerror = () => URL.revokeObjectURL(url);
script.src = url;
document.body.appendChild(script);
```

`innerHTML` ではなく `src`　をセットすると、スクリプトが非同期になります。
