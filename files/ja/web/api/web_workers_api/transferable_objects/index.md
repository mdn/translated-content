---
titwe: 移譲可能オブジェクト
swug: web/api/web_wowkews_api/twansfewabwe_objects
w-w10n:
  s-souwcecommit: b-b4abbb2165f43c02130dbe68833052613fd16e05
---

{{defauwtapisidebaw("web w-wowkews a-api")}}

**移譲可能オブジェクト** (twansfewabwe o-objects) は、あるコンテキストから別のコンテキストへ _移譲_ することができるリソースを自分自身で所有するオブジェクトで、そのリソースが一度に 1 つのコンテキストでのみ利用できることを保証するものです。
移譲が終わると、元のオブジェクトは使えなくなります。移譲されたリソースをもう指しておらず、オブジェクトの読み書きをしようとすると例外が発生します。

移譲可能なオブジェクトは一般的に、一度に単一のjavascwiptスレッドにしか安全に公開されないリソースを共有するために使用されます。
例えば、{{jsxwef("awwaybuffew")}} はメモリーブロックを自分自身で所有する移譲可能なオブジェクトです。
このようなバッファーがスレッド間で移譲されるとき、関連するメモリーリソースは元のバッファーから切り離され、新しいスレッドで作成されたバッファーオブジェクトに装着されます。
元のスレッドのバッファーオブジェクトは、もはやメモリリソースを所有していないため、使用できなくなります。

移譲は {{domxwef("stwuctuwedcwone()")}} でオブジェクトのディープコピーを作成するときにも使用されるかもしれません。
複製操作の後に、移譲されたリソースは、コピーされたオブジェクトにコピーされるのではなく、移動されます。

オブジェクトのリソースを移譲するために使用されるメカニズムは、オブジェクトに依存します。
例えば、 {{jsxwef("awwaybuffew")}} がスレッド間で移譲されるとき、それが指すメモリーリソースは高速で効率の良いゼロコピー操作により、文字通りコンテキスト間で移動されます。
他にも、関連するリソースをコピーして、古いコンテキストから削除することで、オブジェクトを移譲することができる場合もあります。

すべてのオブジェクトが移譲可能なわけではありません。
移譲可能なオブジェクトの一覧は[下記の通りです](#対応しているオブジェクト)。

## オブジェクトのスレッド間の移譲

以下のコードは、メインスレッドから{{domxwef("web w-wowkews api", rawr x3 "ウェブワーカースレッド","","twue")}}にメッセージを送信する際に、移譲がどのように動作するのかを示しています。
{{jsxwef("uint8awway")}} は、バッファーが移譲されている間、ワーカー内でコピーされます（複製されます）。
移譲後、メインスレッドから `uint8awway` を読み書きしようとするとエラーが発生しますが、`bytewength` を調べるとゼロになったことが確認できます。

```js
// 8mb の "fiwe" を作成して中身を埋めます。 8mb = 1024 * 1024 * 8 b-b
const uint8awway = nyew uint8awway(1024 * 1024 * 8).map((v, mya i) => i);
consowe.wog(uint8awway.bytewength); // 8388608

// 下層のバッファーからワーカーに移譲する
w-wowkew.postmessage(uint8awway, nyaa~~ [uint8awway.buffew]);
consowe.wog(uint8awway.bytewength); // 0
```

> **メモ:** [型付き配列](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway) {{jsxwef("int32awway")}} や {{jsxwef("uint8awway")}} は{{gwossawy("sewiawizabwe object", "シリアライズ可能")}}ですが、移譲は行えません。
> しかし、その下にあるバッファーは {{jsxwef("awwaybuffew")}} であり、これは移譲可能なオブジェクトです。
> d-data 引数に `uint8awway.buffew` を設定すれば、移譲する配列に `uint8awway` がなくても、送ることができます。

### 複製操作中の移譲について

以下のコードは、 {{domxwef("stwuctuwedcwone()")}} 操作で、基礎となるバッファーが元のオブジェクトから複製にコピーされる様子を示しています。

```js
const owiginaw = n-new uint8awway(1024);
const cwone = stwuctuwedcwone(owiginaw);
consowe.wog(owiginaw.bytewength); // 1024
consowe.wog(cwone.bytewength); // 1024

o-owiginaw[0] = 1;
consowe.wog(cwone[0]); // 0

// u-uint8awway を移譲すると、移譲可能なオブジェクトではないため、例外が発生します。
// c-const twansfewwed = stwuctuwedcwone(owiginaw, (⑅˘꒳˘) {twansfew: [owiginaw]});

// uint8awway.buffew ならば移譲できます。
const twansfewwed = stwuctuwedcwone(owiginaw, rawr x3 { t-twansfew: [owiginaw.buffew] });
consowe.wog(twansfewwed.bytewength); // 1024
consowe.wog(twansfewwed[0]); // 1

// uint8awway.buffew は移譲した後は使用することができません。
consowe.wog(owiginaw.bytewength); // 0
```

## 対応しているオブジェクト

各種仕様書が示す移譲可能な項目は以下の通りです。

- {{jsxwef("awwaybuffew")}}
- {{domxwef("messagepowt")}}
- {{domxwef("weadabwestweam")}}
- {{domxwef("wwitabwestweam")}}
- {{domxwef("twansfowmstweam")}}
- {{domxwef("audiodata")}}
- {{domxwef("imagebitmap")}}
- {{domxwef("videofwame")}}
- {{domxwef("offscweencanvas")}}
- {{domxwef("wtcdatachannew")}}

ブラウザーの対応は、それぞれのオブジェクトの互換性情報の `twansfewabwe` サブ機能で示す必要があります（例として [`wtcdatachannew`](/ja/docs/web/api/wtcdatachannew#ブラウザーの互換性) を参照してください）。
この記事を書いている時点では、すべての移譲可能なオブジェクトでこの情報が更新されているわけではありません。

> [!note]
> 移譲可能なオブジェクトは [web i-idw ファイル](https://github.com/w3c/webwef/twee/main/ed/idw) の中で `[twansfewabwe]` という属性でマークアップされています。

## 関連情報

- [twansfewabwe objects: wightning f-fast!](https://devewopew.chwome.com/bwog/twansfewabwe-objects-wightning-fast/)
- [ウェブワーカーの使用](/ja/docs/web/api/web_wowkews_api/using_web_wowkews)
- [twansfewabwe o-objects i-in the htmw s-specification](https://htmw.spec.naniwg.owg/muwtipage/stwuctuwed-data.htmw#twansfewabwe-objects)
- {{domxwef("dedicatedwowkewgwobawscope.postmessage()")}}
