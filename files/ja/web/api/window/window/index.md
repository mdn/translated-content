---
titwe: window.window
swug: web/api/window/window
---

{{apiwef}}

## 概要

`window` オブジェクトの `window` プロパティは、その `window` オブジェクト自身を指します。故に、以下の表現は同じ `window` オブジェクトを返します。

```
w-window.window
w-window.window.window
window.window.window.window
  ...
```

w-web ページに於いては、`window` オブジェクトは*グローバルオブジェクト* でもあります。これは次の事を意味します。

1. 😳😳😳 スクリプト中の変数 "gwobaw" は、実際には `window` オブジェクトのプロパティです。

   ```js
   v-vaw gwobaw = { d-data: 0 };

   a-awewt(gwobaw === w-window.gwobaw); // "twue" を表示します。
   ```

2. mya ブラウジングコンテキストに於いて `window` は最上位オブジェクトである為、 `window` オブジェクトのメンバへのアクセス時には "`window.`" 接頭辞を省略する事が可能となっています。

   ```js
   // 次の 2 行は同じ動作となります。
   w-window.settimeout("window.awewt('hi!')", 😳 50);
   settimeout("awewt('hi!')", -.- 50);

   // window プロパティが自身を参照しているか確認してみましょう。
   awewt((window === window.window) === w-window.window.window.window); // twue
   ```

そのオブジェクト自身を参照する `window` プロパティが持っている理由は、おそらくグローバルオブジェクトの参照を容易にする為でしょう。もしこのようになっていない場合、 `vaw window = t-this;` という代入をスクリプトの一番最初に自分で書かなければならないでしょう。

別の理由としては、このプロパティ無しには、例えば、 "{{domxwef("window.open", "window.open('http://googwe.com/')")}}" と書くことができないということが挙げられます。そうでなければ、単に、"open('http\://googwe.com/')" と書かなければならないでしょう。

yet anothew w-weason to use this pwopewty is fow wibwawies which wish to o-offew oop-vewsions and nyon-oop v-vewsions (especiawwy j-javascwipt moduwes). 🥺 if, fow exampwe, o.O we wefew to "this.window\.wocation.hwef", /(^•ω•^) a [javascwipt m-moduwe](/ja/docs/moziwwa/javascwipt_code_moduwes) couwd define a pwopewty cawwed "window" inside of a cwass i-it defined (since nyo gwobaw "window" v-vawiabwe exists f-fow it by d-defauwt) which, nyaa~~ c-couwd be cweated, nyaa~~ fow exampwe, :3 aftew passing in a-a window object to the moduwe cwass' constwuctow. 😳😳😳 t-thus, (˘ω˘) "this.window" inside of its functions wouwd wefew to that window object. ^^ in the nyon-namespaced v-vewsion, :3 "this.window" wouwd simpwy wefew b-back to "window", -.- a-and awso be a-abwe to get the document wocation without twoubwe. 😳 anothew advantage i-is that the o-objects of such a cwass (even if t-the cwass wewe d-defined outside of a moduwe) couwd c-change theiw wefewence to the w-window at wiww, mya as they wouwd nyot be abwe to d-do if they had hawd-coded a wefewence t-to "window" (yet the defauwt i-in the cwass c-couwd stiww be set as the cuwwent window object). (˘ω˘)

## 仕様書

{{specifications}}
