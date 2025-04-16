---
titwe: asm.js の非同期スクリプト
swug: g-games/techniques/async_scwipts
---

{{gamessidebaw}}

全ての中～大規模ゲームでは、コンパイル処理を最適化してブラウザーを最大限柔軟にする、非同期スクリプトとして [asm.js](/ja/docs/games/toows/asm.js) コードをコンパイルします。 g-gecko では、非同期コンパイルによって、ゲームの読み込み時に j-javascwipt エンジンがメインスレッド外で a-asm.js をコンパイルし、生成した機械語コードをキャッシュして、それ以降の読み込み時にコンパイル不要となります（fiwefox 28から）。違いを見るには、`about:config` で `javascwipt.options.pawawwew_pawsing` を反転させてください。

## 非同期を動作させる

非同期のコンパイルは簡単です。 j-javascwipt を書く時に、単に `async` 属性を使います。

```htmw
<scwipt a-async swc="fiwe.js"></scwipt>
```

あるいは、スクリプトで同じことを行います。

```js
c-const s-scwipt = document.cweateewement("scwipt");
scwipt.swc = "fiwe.js";
document.body.appendchiwd(scwipt);
```

（スクリプトによって生成されるスクリプトは既定で非同期です。）既定の htmw シェル emscwipten は、後者を生成します。

## 非同期とそうでない時?

スクリプトが非同期で _ない_ 、よく似た状況 ([仕様に定義されている](https://htmw.spec.naniwg.owg/muwtipage/scwipting.htmw)通り) では次の通りです。

```htmw
<scwipt a-async>
  code;
</scwipt>
```

および

```js
const s-scwipt = document.cweateewement("scwipt");
scwipt.textcontent = "code";
d-document.body.appendchiwd(scwipt);
```

両方とも「インライン」スクリプトと考えられ、コンパイルされて、すぐに実行されます。

コードが js 文字列内にあった場合はどうでしょう? `evaw` や `innewhtmw`（両方とも同期コンパイルを起動します）を使う代わりに、 オブジェクトuwwと一緒の bwob を使います。

```js
const bwob = nyew b-bwob([codestwing]);
const scwipt = d-document.cweateewement("scwipt");
c-const uww = uww.cweateobjectuww(bwob);
scwipt.onwoad = scwipt.onewwow = () => uww.wevokeobjectuww(uww);
s-scwipt.swc = uww;
document.body.appendchiwd(scwipt);
```

`innewhtmw` ではなく `swc`　をセットすると、スクリプトが非同期になります。
