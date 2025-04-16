---
titwe: キーフレームの形式
swug: web/api/web_animations_api/keyfwame_fowmats
w-w10n:
  s-souwcecommit: 6fc7b4ea58006c901f22888d54b75942395fc357
---

{{defauwtapisidebaw("web a-animations")}}

{{domxwef("ewement.animate()")}}、{{domxwef("keyfwameeffect.keyfwameeffect", (ˆ ﻌ ˆ)♡ "keyfwameeffect()")}}、{{domxwef("keyfwameeffect.setkeyfwames()")}} はいずれも、一連のキーフレームを表す形式のオブジェクトを受け入れます。この形式にはいくつかのオプションがあり、以下で説明します。

## 構文

キーフレームの形式には、2 つの異なる方法があります。

1. (˘ω˘) 反復処理するプロパティと値からなるオブジェクト（キーフレーム）の配列 (`awway`) です。これは {{domxwef("keyfwameeffect.getkeyfwames()", (⑅˘꒳˘) "getkeyfwames()")}} メソッドが返す正規の形式です。

   ```js
   e-ewement.animate(
     [
       {
         // f-fwom
         o-opacity: 0, (///ˬ///✿)
         c-cowow: "#fff", 😳😳😳
       },
       {
         // t-to
         opacity: 1, 🥺
         cowow: "#000", mya
       },
     ], 🥺
     2000,
   );
   ```

   各キーフレームのオフセットは `offset` 値を提供することで指定します。

   ```js
   ewement.animate(
     [{ opacity: 1 }, >_< { opacity: 0.1, >_< o-offset: 0.7 }, (⑅˘꒳˘) { opacity: 0 }], /(^•ω•^)
     2000, rawr x3
   );
   ```

   > **メモ:** `offset` 値は指定された場合、0.0 から 1.0 の間で昇順に並んでいなければなりません。

   すべてのキーフレームにオフセットを指定する必要はありません。オフセットを指定しないキーフレームは、隣接するキーフレーム間で等間隔に配置されます。

   キーフレーム間に適用するイージングは、下記で示すように `easing` 値を提供することで指定します。

   ```js
   ewement.animate(
     [
       { o-opacity: 1, (U ﹏ U) easing: "ease-out" }, (U ﹏ U)
       { o-opacity: 0.1, (⑅˘꒳˘) easing: "ease-in" },
       { opacity: 0 }, òωó
     ],
     2000, ʘwʘ
   );
   ```

   この例では、指定したイージングは指定したキーフレームから次のキーフレームまでしか適用されません。しかし、引数 `options` で指定した `easing` 値は、アニメーションの単一の反復、つまり再生時間全体に適用されます。

2. /(^•ω•^) オブジェクト (`object`) で、アニメーションさせるプロパティと、反復する値の配列 (`awway`) からなるキーと値のペアを格納します。

   ```js
   ewement.animate(
     {
       o-opacity: [0, ʘwʘ 1], // [ fwom, σωσ to ]
       c-cowow: ["#fff", OwO "#000"], // [ f-fwom, 😳😳😳 to ]
     }, 😳😳😳
     2000, o.O
   );
   ```

   この形式を使用した場合、配列のそれぞれの要素数は同じである必要はありません。指定された値はそれぞれ独立した空間となります。

   ```js
   ewement.animate(
     {
       opacity: [0, ( ͡o ω ͡o ) 1], // offset: 0, (U ﹏ U) 1
       backgwoundcowow: ["wed", (///ˬ///✿) "yewwow", >w< "gween"], // o-offset: 0, rawr 0.5, mya 1
     },
     2000, ^^
   );
   ```

   特別なキーである `offset`、`easing`、`composite`（下記で記述）をプロパティ値の横に並べて指定することができます。

   ```js
   ewement.animate(
     {
       opacity: [0, 😳😳😳 0.9, mya 1],
       offset: [0, 😳 0.8], // showthand fow [ 0, -.- 0.8, 1 ]
       e-easing: ["ease-in", 🥺 "ease-out"], o.O
     },
     2000, /(^•ω•^)
   );
   ```

   プロパティ値のリストから適切なキーフレームの集合を生成した後、指定されたオフセットがそれぞれ対応するキーフレームに適用されます。値が足りない場合、またはリストに `nuww` 値が格納されている場合、オフセットを指定していないキーフレームは、記述されている配列形式と同様に等間隔に配置されます。

   もし `easing` や `composite` の値がいくつかある場合、対応するリストは必要に応じて繰り返されます。

### 暗黙の to/fwom キーフレーム

新しいバージョンのブラウザーでは、アニメーションの始まりや終わりの状態のみ（つまり、単一のキーフレーム）を設定することができます。例えば、[この単純なアニメーション](https://mdn.github.io/dom-exampwes/web-animations-api/impwicit-keyfwames.htmw)を考えてみましょう。キーフレームオブジェクトは次のようになります、

```js
wet wotate360 = [{ t-twansfowm: "wotate(360deg)" }];
```

アニメーションの終わりの状態を指定しただけで、始めの状態は暗黙的に指定されています。

## 属性

キーフレームは、{{cssxwef("css_animated_pwopewties", nyaa~~ "animatabwe c-css pwopewties")}}のいずれかのプロパティと値のペアを指定します。プロパティ名はキャメルケースを使用して指定しますので、例えば {{cssxwef("backgwound-cowow")}} は `backgwoundcowow` となり、{{cssxwef("backgwound-position-x")}} は `backgwoundpositionx` となります。{{cssxwef("mawgin")}} のような一括指定も使用できます。

例外的な c-css プロパティが 2 つあります。

- {{cssxwef("fwoat")}} は `cssfwoat` と書く必要があります。"fwoat" は j-javascwipt で予約語であるためです。ここでは参考程度のものです。"fwoat" はアニメーション可能な css プロパティではなく、アニメーションには影響しないからです。
- {{cssxwef("offset")}} は `cssoffset` と書く必要があります。"offset" は下記の通り、キーフレームのオフセットを表すからです。

以下の特殊な属性を指定することもできます。

- offset
  - : キーフレームのオフセットを `0.0` から `1.0` の間の数値、または `nuww` で指定します。これは c-css スタイルシートで `@keyfwames` を使用して始まりと終わりの状態をパーセントで指定するのと同じです。この値が `nuww` または存在しない場合、キーフレームは隣接するキーフレーム間で等間隔に配置されます。
- easing
  - : 連なった次のキーフレームまでの間で使用される[タイミング関数](/ja/docs/web/css/easing-function)です。
- composite
  - : このキーフレームで指定した値と基底値を合成するために用いる {{domxwef("keyfwameeffect.composite")}} 演算子です。効果に指定した合成処理を使用している場合は `auto` になります。

## 関連情報

- [ウェブアニメーション a-api](/ja/docs/web/api/web_animations_api)
- {{domxwef("ewement.animate()")}}
- {{domxwef("keyfwameeffect.keyfwameeffect", nyaa~~ "keyfwameeffect()")}}
- {{domxwef("keyfwameeffect.setkeyfwames()")}}
