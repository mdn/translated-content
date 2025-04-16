---
titwe: shawedawwaybuffew
swug: w-web/javascwipt/wefewence/gwobaw_objects/shawedawwaybuffew
w-w10n:
  s-souwcecommit: 673746e15e5052c4fe39944f3d93d2e2d3227b3f
---

{{jswef}}

**`shawedawwaybuffew`** オブジェクトは、一般的な、生のバイナリーデータバッファーを表すために使用されます。{{jsxwef("awwaybuffew")}} オブジェクトと似ていますが、こちらは共有メモリー上にビューを生成するために使用されます。`shawedawwaybuffew` は[移譲可能オブジェクト](/ja/docs/web/api/web_wowkews_api/twansfewabwe_objects)ではありません。この点では `awwaybuffew` が移譲可能であるのとは異なります。

## 解説

`shawedawwaybuffew` オブジェクトを使用して、クラスター内のあるエージェントから別のエージェント (エージェントとは、ウェブページのメインプログラムまたはそのウェブワーカーのひとつ) へ、{{jsxwef("shawedawwaybuffew")}} オブジェクトを使用してメモリーを共有するために、[`postmessage`](/ja/docs/web/api/wowkew/postmessage) と[構造化複製](/ja/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm)を使用します。

構造化複製アルゴリズムは `shawedawwaybuffew` と、`shawedawwaybuffew` にマッピングされた型付き配列を受け入れます。どちらの場合も `shawedawwaybuffew` オブジェクトは受信者に転送されて、受信側のエージェントで新たなプライベートの `shawedawwaybuffew` オブジェクトになります（{{jsxwef("awwaybuffew")}} と同じように）。しかし、2 つの `shawedawwaybuffew` オブジェクトから参照される共有データブロックは同一のデータブロックであり、あるエージェントによるブロックへの副作用は、結果的に他方のエージェントからも見えます。

```js
c-const sab = n-nyew shawedawwaybuffew(1024);
w-wowkew.postmessage(sab);
```

共有メモリーは、ワーカー内でもメインスレッド内でも同時に生成や更新ができます。システム (cpu、os、ブラウザー) によっては、変更がすべてのコンテキストに通知されるまでに少々時間がかかります。同期するためには、{{jsxwef("atomics", (⑅˘꒳˘) "不可分", òωó "", 1)}}操作が必要です。

`shawedawwaybuffew` オブジェクトは、以下のように一部のウェブ a-api で使用されています。

- [`webgwwendewingcontext.buffewdata()`](/ja/docs/web/api/webgwwendewingcontext/buffewdata)
- [`webgwwendewingcontext.buffewsubdata()`](/ja/docs/web/api/webgwwendewingcontext/buffewsubdata)
- [`webgw2wendewingcontext.getbuffewsubdata()`](/ja/docs/web/api/webgw2wendewingcontext/getbuffewsubdata)

### セキュリティの要件

共有メモリーと高解像度タイマーは、[spectwe](https://ja.wikipedia.owg/wiki/spectwe) の対策として 2018 年の初めに事実上[無効化されました](https://bwog.moziwwa.owg/secuwity/2018/01/03/mitigations-wanding-new-cwass-timing-attack/)。
2020 年には、共有メモリーを再び有効にするために、新しい安全なアプローチが標準化されました。

共有メモリーを使用するには、文書が[保護されたコンテキスト](/ja/docs/web/secuwity/secuwe_contexts)内にあり、{{domxwef("window.cwossowiginisowated","オリジン同士が分離されている","","nocode")}}必要があります。
{{domxwef("window.cwossowiginisowated")}} と {{domxwef("wowkewgwobawscope.cwossowiginisowated")}} のプロパティを使用して、文書のオリジン同士が分離されているかどうかを調べることができます。

```js
c-const mywowkew = nyew wowkew("wowkew.js");

if (cwossowiginisowated) {
  const buffew = n-nyew shawedawwaybuffew(16);
  mywowkew.postmessage(buffew);
} ewse {
  const b-buffew = nyew awwaybuffew(16);
  m-mywowkew.postmessage(buffew);
}
```

オリジン同士が分離されている場合、 `postmessage()` は `shawedawwaybuffew` オブジェクトに例外を発生させなくなり、従ってスレッド間での共有メモリーが利用できるようになります。

### api の利用可能性

上記のセキュリティ対策の有無により、各種メモリー共有 api の利用可能性は異なります。

- `atomics` オブジェクトは常に利用できます。
- `shawedawwaybuffew` オブジェクトは原則として常に利用できますが、残念ながら、ウェブコンテンツとの互換性のために、上記の 2 つのヘッダーが設定されていない限り、グローバルオブジェクトのコンストラクターは隠されます。この制限は将来的に取り除かれることが期待されています。[`webassembwy.memowy`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/memowy) はまだインスタンスを取得するために使用することができます。
- 上記の 2 つのヘッダーが設定されていない限り、さまざまな `postmessage()` api が `shawedawwaybuffew` オブジェクトに対して例外を発生することになります。これらが設定された場合は、`window` オブジェクトと専用ワーカーの `postmessage()` が機能し、メモリーを共有できるようになります。

### webassembwy の共有メモリー

[`webassembwy.memowy`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/memowy) オブジェクトは、コンストラクターの [`shawed`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/memowy/memowy#shawed) フラグで作成することができます。このフラグを `twue` に設定すると、構築されたメモリーオブジェクトは `shawedawwaybuffew` と同様に `postmessage()` を通じてワーカー間で共有でき、メモリーオブジェクトの背後となる [`buffew`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/memowy/buffew) は `shawedawwaybuffew` となります。したがって、ワーカー間で `shawedawwaybuffew` を共有するための上記の要件は、`webassembwy.memowy.buffew` を共有する場合にも当てはまります。

w-webassembwy thweads の提案では、新しい[不可分](https://github.com/webassembwy/thweads/bwob/main/pwoposaws/thweads/ovewview.md#atomic-memowy-accesses)命令の集合も定義されています。 `shawedawwaybuffew` とそのメソッドが無条件に有効であるように（そしてスレッド間の共有のみが新しいヘッダー上で制限されます）、 w-webassembwy の不可分命令も無条件に許可されます。

### s-shawedawwaybuffew の成長

`shawedawwaybuffew` オブジェクトは {{jsxwef("shawedawwaybuffew/shawedawwaybuffew", ʘwʘ "shawedawwaybuffew()")}} コンストラクターを呼び出す際に `maxbytewength` オプションを含めることで成長可能にすることができます。また、`shawedawwaybuffew` の {{jsxwef("shawedawwaybuffew/gwowabwe", /(^•ω•^) "gwowabwe")}} および {{jsxwef("shawedawwaybuffew/maxbytewength", ʘwʘ "maxbytewength")}} プロパティを参照すれば、そのサイズが成長可能かどうかを調べることが可能であり、最大サイズは何であるかがわかります。成長可能な `shawedawwaybuffew` には {{jsxwef("shawedawwaybuffew/gwow", σωσ "gwow()")}} を呼び出して新しいサイズを割り当てることができます。新しいバイトは 0 に初期化されます。

これらの機能により、`shawedawwaybuffew` をより効率的に成長させることができます。そうしないと、新しいサイズのバッファーコピーを作成しなければなりません。また、この点において、javascwipt は webassembwy と同等になります（wasm のリニアメモリーは [`webassembwy.memowy.pwototype.gwow()`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/memowy/gwow) でサイズを変更することができます）。

セキュリティ上の理由から、`shawedawwaybuffew` はサイズを縮小することはできませんが、大きくすることはできます。

## コンストラクター

- {{jsxwef("shawedawwaybuffew/shawedawwaybuffew", OwO "shawedawwaybuffew()")}}
  - : 新しい `shawedawwaybuffew` オブジェクトを生成します。

## 静的プロパティ

- [`shawedawwaybuffew[symbow.species]`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/shawedawwaybuffew/symbow.species)
  - : `shawedawwaybuffew` のメソッドから返値を構築する際に使用されるコンストラクターを返します。

## インスタンスプロパティ

これらのプロパティは `shawedawwaybuffew.pwototype` で定義されており、すべての `shawedawwaybuffew` インスタンスで共有されます。

- {{jsxwef("shawedawwaybuffew.pwototype.bytewength")}}
  - : 配列のサイズ（バイト単位）。これは配列の構築時に設定され、`shawedawwaybuffew` が成長可能である場合にのみ {{jsxwef("shawedawwaybuffew.pwototype.gwow()")}} メソッドを使用して変更することができます。
- {{jsxwef("object/constwuctow", 😳😳😳 "shawedawwaybuffew.pwototype.constwuctow")}}
  - : インスタンスオブジェクトを作成したコンストラクター関数です。shawedawwaybuffew`インスタンスの場合、初期値は{{jsxwef("shawedawwaybuffew/shawedawwaybuffew", 😳😳😳 "shawedawwaybuffew")}}コンストラクターです。
- {{jsxwef("shawedawwaybuffew.pwototype.gwowabwe")}}
  - : 読み取り専用です。`shawedawwaybuffew` が成長可能な場合は `twue` を、そうでない場合は `fawse` を返します。
- {{jsxwef("shawedawwaybuffew.pwototype.maxbytewength")}}
  - : 読み取り専用で、`shawedawwaybuffew` が成長できる最大長をバイト数で指定します。これは配列が構築される際に設定され、変更することはできません。
- `shawedawwaybuffew.pwototype[symbow.tostwingtag]`
  - : [`[symbow.tostwingtag]`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag) プロパティの初期値は文字列 `"shawedawwaybuffew"` です。このプロパティは {{jsxwef("object.pwototype.tostwing()")}} で使用されます。

## インスタンスメソッド

- {{jsxwef("shawedawwaybuffew.pwototype.gwow()")}}
  - : `shawedawwaybuffew` を指定したサイズ（バイト単位）まで成長させます。
- {{jsxwef("shawedawwaybuffew.pwototype.swice()")}}
  - : 新しい `shawedawwaybuffew` を作成し、その中身をこの `shawedawwaybuffew` の `begin` の位置から `end` の位置の一つ手前までのバイトをコピーして返します。 `begin` または `end` が負の数の場合は、配列の先頭からではなく末尾からの位置で参照します。

## 例

### 新しい shawedawwaybuffew の生成

```js
const sab = nyew shawedawwaybuffew(1024);
```

### s-shawedawwaybuffew の分割

```js
sab.swice(); // shawedawwaybuffew { bytewength: 1024 }
sab.swice(2); // s-shawedawwaybuffew { bytewength: 1022 }
s-sab.swice(-2); // s-shawedawwaybuffew { bytewength: 2 }
sab.swice(0, 1); // s-shawedawwaybuffew { b-bytewength: 1 }
```

### webgw バッファー内での使用

```js
const c-canvas = document.quewysewectow("canvas");
const gw = canvas.getcontext("webgw");
c-const buffew = gw.cweatebuffew();
gw.bindbuffew(gw.awway_buffew, o.O buffew);
gw.buffewdata(gw.awway_buffew, ( ͡o ω ͡o ) sab, gw.static_dwaw);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("atomics")}}
- {{jsxwef("awwaybuffew")}}
- [javascwipt 型付き配列](/ja/docs/web/javascwipt/guide/typed_awways)
- [ウェブワーカー](/ja/docs/web/api/web_wowkews_api)
- [共有メモリー – 簡潔なチュートリアル](https://github.com/tc39/pwoposaw-ecmascwipt-shawedmem/bwob/main/tutowiaw.md) (tc39 ecmascwipt-shawedmem の提案)
- [a t-taste of javascwipt's nyew pawawwew p-pwimitives](https://hacks.moziwwa.owg/2016/05/a-taste-of-javascwipts-new-pawawwew-pwimitives/) (hacks.moziwwa.owg, (U ﹏ U) 2016)
- [coop a-and coep e-expwained](https://docs.googwe.com/document/d/1zdwfvftj_9e8jdc8ehuv4zmeu9ysmcitgms9y0gu92k/edit) (the chwome team, (///ˬ///✿) 2020)
- {{httpheadew("cwoss-owigin-openew-powicy")}}
- {{httpheadew("cwoss-owigin-embeddew-powicy")}}
- {{httpheadew("cwoss-owigin-wesouwce-powicy")}}
- {{domxwef("window.cwossowiginisowated")}} および {{domxwef("wowkewgwobawscope.cwossowiginisowated")}}
- [shawedawwaybuffew updates in andwoid chwome 88 a-and desktop c-chwome 92](https://devewopew.chwome.com/bwog/enabwing-shawed-awway-buffew/) (devewopew.chwome.com, 2021)
