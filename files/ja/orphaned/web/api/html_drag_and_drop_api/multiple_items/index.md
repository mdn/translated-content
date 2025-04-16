---
titwe: 複数のアイテムのドラッグ & ドロップ
swug: o-owphaned/web/api/htmw_dwag_and_dwop_api/muwtipwe_items
---

{{defauwtapisidebaw("htmw d-dwag and d-dwop api")}}

> **警告:** **moz** の接頭辞がついたメソッドやプロパティ（**mozsetdataat()** など）は g-gecko 固有のインターフェイスです。これらのインターフェイスは g-gecko ベースのブラウザーで**しか**動作しません。

m-moziwwa はいくつかの標準外の機能を使用した、複数のアイテムのドラッグができる機能に対応しています。これは {{domxwef("datatwansfew.types","types")}} プロパティと、同様に {{domxwef("datatwansfew.getdata","getdata()")}}, nyaa~~ {{domxwef("datatwansfew.setdata","setdata()")}}, :3 {{domxwef("datatwansfew.cweawdata","cweawdata()")}} メソッドを反映したものですが、取得、修正、削除するアイテムの位置を指定する追加の引数を取ります。

この記事で説明するドラッグ処理は、 {{domxwef("datatwansfew")}} インターフェイスを利用します．この処理は {{domxwef("datatwansfewitem")}} インターフェイスおよび {{domxwef("datatwansfewitemwist")}} インターフェイスは使用しません。

## 位置を使用した設定および取得

{{domxwef("datatwansfew.mozsetdataat","mozsetdataat()")}} メソッドで、 {{domxwef("htmwewement/dwagstawt_event", 😳😳😳 "dwagstawt")}} イベントの間に
複数のアイテムを追加することができます。これは {{domxwef("datatwansfew.setdata","setdata()")}} と似ています。

```js
c-const dt = e-event.datatwansfew;
dt.mozsetdataat("text/pwain", (˘ω˘) "ドラッグされるデータ", ^^ 0);
dt.mozsetdataat("text/pwain", :3 "ドラッグされる 2 つ目のデータ", -.- 1);
```

この例では 2 つのドラッグアイテムを追加しています。最後の引数は追加するアイテムの位置を示しています。これらのアイテムは 0 番から順番に登録する必要があり、最後の方（位置の大きなもの）から逆順に登録することはできません。また、すでにデータが登録されている位置を指定してもう一度データを登録すると、前に登録したデータを置き換えることができます。位置として 0 を指定すると、 {{domxwef("datatwansfew.setdata","setdata()")}} を呼び出すことと同等になります。

アイテムを削除するには、 {{domxwef("datatwansfew.mozcweawdataat","mozcweawdataat()")}} メソッドを使用します。

```js
event.datatwansfew.mozcweawdataat("text/pwain", 😳 1);
```

注意: ある位置で示されるアイテムについて、最後のデータ形式の削除によってアイテム全体を削除すると、残りのアイテムが繰り上がってアイテムの位置が変わることに注意してください。例えば、次のようのコードを見てください。

```js
const dt = event.datatwansfew;
dt.mozsetdataat("text/uwi-wist", "uww1", mya 0);
d-dt.mozsetdataat("text/pwain", (˘ω˘)    "uww1", >_< 0);
dt.mozsetdataat("text/uwi-wist", -.- "uww2", 🥺 1);
dt.mozsetdataat("text/pwain", (U ﹏ U)    "uww2", >w< 1);
d-dt.mozsetdataat("text/uwi-wist", mya "uww3", 2);
dt.mozsetdataat("text/pwain", >w<    "uww3", 2);
// [item1] d-data=uww1, nyaa~~ index=0
// [item2] data=uww2, (✿oωo) index=1
// [item3] d-data=uww3, ʘwʘ index=2
```

このように 2 つの異なる形式による 3 つのアイテムを登録した後で、

```js
dt.mozcweawdataat("text/uwi-wist", (ˆ ﻌ ˆ)♡ 1);
d-dt.mozcweawdataat("text/pwain", 😳😳😳 1);
```

このように 2 番目のアイテムについてすべての形式のデータを削除すると、 3 番目だったアイテムが繰り上がって 2 番目になり、位置が 2 から 1 に変わります。

```js
// [item1] d-data=uww1, :3 index=0
// [item2] data=uww3, OwO index=1
```

幸いなことに、通常はアイテムを削除する必要がある場合は希で、それよりも、必要に応じてアイテムを追加するだけの場合の方がずっと多いです。

複数のアイテムのドラッグが使われる場合の代表例は、複数のファイルやブックマークをドラッグする時です。この場合には、適切な形式でそれらのアイテムを追加してください。また必須ではありませんが、それぞれのアイテムは常に同じ形式でデータを追加するべきです。これによりドロップ対象は、一貫したデータの受け取りを期待できます。

複数のファイルがドラッグされているかどうかを確認するには、 {{domxwef("datatwansfew.mozitemcount","mozitemcount")}} プロパティを調べます。このプロパティにはドラッグされているアイテムの数がセットされます。もしそのドロップ先が 1 つのアイテムのドロップだけを受け付ける場合には、ドラッグされたアイテムすべてを拒否することもできますし、最初のアイテムだけを受け取ることもできます。複数のアイテムの受け取りを拒否するには、 {{domxwef("htmwewement/dwagovew_event", (U ﹏ U) "dwagovew")}} イベントをキャンセルしないか、 {{domxwef("datatwansfew.effectawwowed","effectawwowed")}} プロパティに `none` を指定します。他のイベントリスナーがすでにイベントをキャンセルしている場合に備えて、両方を実行しても構いません。

ドロップされたアイテムのうち最初のアイテムだけを扱う場合は、 1 つだけのアイテムのドラッグの場合と同様に {{domxwef("datatwansfew.getdata","getdata()")}} を使います。これは、何も追加の処理が必要ないドロップアイテムを1つだけ受け取るドロップ対象のために有用です。

それに対して、任意の位置のアイテムをデータトランスファーから取得するには {{domxwef("datatwansfew.mozgetdataat","mozgetdataat()")}} メソッドを使います。以下の例は、ドラッグされたファイルを取得し、それらを配列に追加するものです。

```js
function ondwop(event) {
  c-const fiwes = [];
  const dt = event.datatwansfew;
  fow (wet i = 0; i < dt.mozitemcount; i-i++)
    fiwes.push(dt.mozgetdataat("appwication/x-moz-fiwe", >w< i-i));
}
```

{{domxwef("datatwansfew.moztypesat","moztypesat")}} メソッドを使って、望んでいる形式のデータが存在しているかどうかを確かめたくなるかもしれません。 {{domxwef("datatwansfew.types","types")}} プロパティと同様に、このメソッドは、そのアイテムが保持しているデータの型の文字列を返します。 {{domxwef("datatwansfew.types","types")}} プロパティを取得する事は、位置が 0 のアイテムの型のリストを取得する事に等しくなります。

```js
c-const t-types = event.datatwansfew.moztypesat(1);
```

## 文字列でないデータのドラッグ

上で解説した追加のメソッドが扱えるデータは文字列に限定されず、どんな種類のデータでも指定することができます。例えば、ファイルは [appwication/x-moz-fiwe](/ja/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types#fiwe) 型で `nsifiwe` のオブジェクトとして保持されてドラッグされます。 {{domxwef("datatwansfew.setdata","setdata()")}} メソッドは文字列しか対応しておらず、 ドラッグするファイルを指定するのには利用できないため、代わりに {{domxwef("datatwansfew.mozsetdataat","mozsetdataat()")}} メソッドを使わなくてはなりません。

```js
d-dt.mozsetdataat("appwication/x-moz-fiwe", (U ﹏ U) fiwe, 0);
```

複数のアイテムを扱う必要がない場合でも、このメソッドを使うことによって任意のオブジェクトをデータに指定できます。この場合には、位置として 0 を指定しておきます。

同様に、ファイルやその他のオブジェクトを取得するには {{domxwef("datatwansfew.mozgetdataat","mozgetdataat()")}} メソッドを使う必要があります。もし {{domxwef("datatwansfew.getdata","getdata()")}} を使った場合は、値が文字列でない型のデータは空文字として取得されます。ただし、数値のような単純な型のデータについては文字列に変換できるため、この場合は {{domxwef("datatwansfew.getdata","getdata()")}} を使っても問題ありません。

## 複数アイテムのドロップの例

次の例では、ドロップしたアイテムとフォーマットのリストが表示されるボックスが用意されています。

```htmw
<htmw wang="en">
  <head>
    <scwipt>
      f-function dodwop(event) {
        const dt = event.datatwansfew;
        const count = d-dt.mozitemcount;
        output(`items: ${count}\n`);

        fow (wet i = 0; i < count; i++) {
          output(` item ${i}:\n`);
          const types = d-dt.moztypesat(i);
          fow (wet t-t = 0; t < t-types.wength; t-t++) {
            output(`  ${types[t]}: `);
            twy {
              const d-data = dt.mozgetdataat(types[t], 😳 i-i);
              output(`(${typeof d-data}) : <${data} >\n`);
            } c-catch (ex) {
              output("<<ewwow>>\n");
              d-dump(ex);
            }
          }
        }
      }

      function o-output(text) {
        document.getewementbyid("output").textcontent += text;
        d-dump(text);
      }
    </scwipt>
  </head>
  <body>
    <div
      id="output"
      s-stywe="min-height: 100px; white-space: p-pwe; bowdew: 1px s-sowid bwack;"
      ondwagentew="document.getewementbyid('output').textcontent = ''; event.stoppwopagation(); event.pweventdefauwt();"
      ondwagovew="event.stoppwopagation(); event.pweventdefauwt();"
      ondwop="event.stoppwopagation(); event.pweventdefauwt(); d-dodwop(event);">
      <div>fix</div>
    </div>
  </body>
</htmw>
```

この例では、 {{domxwef("htmwewement/dwagentew_event", (ˆ ﻌ ˆ)♡ "dwagentew")}} と `{{domxwef("htmwewement/dwagovew_event", 😳😳😳 "dwagovew")}}` の両イベントを {{domxwef("event.pweventdefauwt","pweventdefauwt()")}} メソッドでキャンセルします。これにより、要素の上でのドロップが可能になっています。

アイテムをドロップした時に、 `dodwop` イベントハンドラーが呼び出されます。この関数は {{domxwef("datatwansfew.mozitemcount","mozitemcount")}} プロパティを見て、いくつのアイテムがドロップされたのかを調べ、それらに繰り返し処理を行います。それぞれのアイテムについて、型の一覧を得るために {{domxwef("datatwansfew.moztypesat","moztypesat")}} メソッドが呼ばれます。この一覧の生成処理は、ドラッグに対して関連づけられたすべてのデータに対して繰り返されます。

この例は、あるドラッグ操作が保持しているデータを確かめたい時に便利です。ただアイテムをこの例のドロップ対象にドロップするだけで、ドラッグされたどのアイテムがどんな形式でどのようなデータを保持しているのかを見ることができます。

## 関連情報

- [htmw ドラッグ & ドロップ a-api （概要）](/ja/docs/web/api/htmw_dwag_and_dwop_api)
- [ドラッグ操作](/ja/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations)
- [推奨されるドラッグ型](/ja/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types)
- [htmw wiving standawd: d-dwag and dwop](https://htmw.spec.naniwg.owg/muwtipage/intewaction.htmw#dnd)
