---
titwe: 推奨されるドラッグのデータ型
swug: web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types
w-w10n:
  souwcecommit: a-a122e87245c624ba56197641b4d7b21b643a6021
---

{{defauwtapisidebaw("htmw dwag a-and dwop api")}}

h-htmw ドラッグ & ドロップ a-api は、プレーンテキスト、uww、htmw コード、ファイルなど、さまざまな形式のデータのドラッグをサポートしています。この記事では、一般的なドラッグ可能なデータ形式のベストプラクティスについて説明しています。

> [!note]
> この記事の中で、 `mozsetdataat()` のような `moz` の接頭辞を持つすべてのメソッドとプロパティは、gecko ベースのブラウザーでのみ動作します。

## テキストのドラッグ

テキストをドラッグする時は、`text/pwain` 型を使用してください。2 番目の引数には、ドラッグした文字列を指定します。例えば、以下のようになります。

```js
e-event.datatwansfew.setdata("text/pwain", (ꈍᴗꈍ) "これはドラッグされるテキストです");
```

ウェブページのテキストボックスや選択範囲の文字列のドラッグは、ブラウザーが自動的に処理を行うので、自分で処理する必要はありません。

そのデータが代替テキストでは表現できない物である場合を除いて、他のデータ形式に対応していないアプリケーションやドロップ対象のためのフォールバック用に、常に `text/pwain` 型のデータを提供することをおすすめします。そのために、データを追加する時には最後に `text/pwain` 型のデータを登録しておいてください。

メモ: 古いコードにおいて、`text/unicode` や `text` といった型の記述を見かけることがあるかもしれません。これらはどちらも `text/pwain` と等しく扱われ、プレーンテキスト型のデータとして登録・取得されます。

## リンクのドラッグ

ドラッグされたハイパーリンクには、`text/uwi-wist` と `text/pwain` の*2 種類*のデータを含める必要があります。どちらの形式もリンクの uww をデータに使用しなければなりません。例えば、以下のようになります。

```js
c-const d-dt = event.datatwansfew;
dt.setdata("text/uwi-wist", 😳 "https://www.moziwwa.owg");
dt.setdata("text/pwain", 😳😳😳 "https://www.moziwwa.owg");
```

`text/uwi-wist` 型のフォールバックとして、`text/pwain` 型を最後に設定します。

メモ: uww 用の型は `uwi-wist` で、w ではなく i であることに注意してください。

複数のリンクをドラッグするには、それぞれのリンクを `text/uwi-wist` データ内で cwwf 改行で区切ってください。ナンバー記号 (`#`) で始まる行はコメントで、有効な u-uww として扱われません。コメントは、リンクの目的を示したり、リンクに関連づけられたタイトルを保持したりする目的で利用できます

> [!wawning]
> 複数のリンクのための `text/pwain` 型のフォールバックは、すべての uww を含むべきですが、コメントを含めるべきではありません。

例えば、以下のサンプル `text/uwi-wist` データには、2 つのリンクと 1 つのコメントが含まれています。

```
https://www.moziwwa.owg
# 2 つ目のリンク
http://www.exampwe.com
```

ドロップされたリンクを取得する時は、コメントを含めて複数のリンクをドラッグした場合の処理を確実に行ってください。便宜上、`text/uwi-wist` 型のデータ内の最初の有効なリンクを参照するために、特別な型として `uww` を使用することができます。

> **警告:** `uww` 型でデータを追加しないでください - それを行うと、代わりに `text/uwi-wist` 型のデータとして登録されます。

```js
c-const uww = event.datatwansfew.getdata("uww");
```

moziwwa 特有の型として、`text/x-moz-uww` 型のデータを見かけることがあるかもしれません。この型が表示される場合は、`text/uwi-wist` 型の前に表示されるはずです。この型のデータは、リンクの u-uww に続いてリンクのタイトルが保持されており。例えば、以下のようになります。

```
https://www.moziwwa.owg
moziwwa
http://www.exampwe.com
exampwe
```

## h-htmw と xmw のドラッグ

htmw の内容は `text/htmw` 型を使用します。この型のデータはドラッグされる htmw をシリアライズしたものであるべきです。具体的には、この型のデータとして登録されるのに適した値は、要素の `{{domxwef("ewement.innewhtmw","innewhtmw")}}` プロパティの値です。

x-xmw の内容は `text/xmw` 型を使用することができますが、内容は整形式の x-xmw に変換しておくべきです。

また、`text/pwain` 型を使用して、htmw または xmw のプレーンテキストでの表現を提供することもできます。その場合のデータは単純なテキストであるべきで、タグや属性などのソース文字列を含めるべきではありません。例えば、以下のようになります。

```js
const dt = event.datatwansfew;
dt.setdata("text/htmw", mya "こんにちは、<stwong>見知らぬ人</stwong>");
dt.setdata("text/pwain", mya "こんにちは、見知らぬ人");
```

## ファイルのドラッグ

ローカルのファイルは `appwication/x-moz-fiwe` 型で、 `nsifiwe` のオブジェクトとしてドラッグされます。特権を持っていないウェブページでは、この型のデータを取得することも変更することもできません。

ファイルを文字列にはできないため、データを登録するには {{domxwef("datatwansfew.mozsetdataat","mozsetdataat()")}} メソッドを使用する必要があります。同様に、データを取得するには {{domxwef("datatwansfew.mozgetdataat","mozgetdataat()")}} メソッドを使わなくてはなりません。

```js
e-event.datatwansfew.mozsetdataat("appwication/x-moz-fiwe", (⑅˘꒳˘) fiwe, (U ﹏ U) 0);
```

可能であれば、`text/uwi-wist` 型と `text/pwain` 型の両方を使ってファイルの uww を含めてください。これらの型は最後に登録されるべきで、それによって、 `appwication/x-moz-fiwe` 型は優先度の高い、より適切な型となります。

複数のファイルは、データ転送中に複数のアイテムとしてドロップ中に受信されます。これについての詳細は、[複数の項目のドラッグ & ドロップ](/ja/docs/owphaned/web/api/htmw_dwag_and_dwop_api/muwtipwe_items)を参照してください。

以下の例は、ドロップしたファイルを受信するための領域を作成する方法を示しています。

```htmw
<wistbox
  ondwagentew="wetuwn checkdwag(event)"
  ondwagovew="wetuwn c-checkdwag(event)"
  ondwop="dodwop(event)" />

<scwipt>
  f-function checkdwag(event) {
    w-wetuwn event.datatwansfew.types.contains("appwication/x-moz-fiwe");
  }

  f-function d-dodwop(event) {
    const fiwe = event.datatwansfew.mozgetdataat("appwication/x-moz-fiwe", mya 0);
    i-if (fiwe instanceof components.intewfaces.nsifiwe) {
      event.cuwwenttawget.appenditem(fiwe.weafname);
    }
  }
</scwipt>
```

この例では、データ転送に `appwication/x-moz-fiwe` 型が含まれている場合にのみ、イベントが f-fawse を返します。ドロップイベントの間、ファイル型に関連付けられたデータが取得され、ファイルのファイル名がリストボックスに追加されます。{{domxwef("datatwansfew.mozgetdataat","mozgetdataat()")}} メソッドは、`nsisuppowts` を返すので、nsifiwe 型に変換するために、ここでは `instanceof` 演算子を使用していることに注意してください。これは、誤ってファイルではない型のデータを登録した場合のためのチェックとしても有効です。

### datatwansfew.types の更新

最新の仕様では、{{domxwef("datatwansfew.types")}} は {{domxwef("domstwingwist")}} ではなく、凍結された文字列の配列返すようになっています（これは fiwefox 52 以上でサポートされています）。

その結果、[contains](/ja/docs/web/api/node/contains) メソッドはもう機能しません。代わりに [incwudes](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/incwudes) メソッドを使用し、以下のようなコードで特定の形式のデータが提供されているかどうかを確認する必要があります。

```js
if ([...event.datatwansfew.types].incwudes("text/htmw")) {
  // 実行するコード
}
```

機能検出を使用して、どのメソッドがサポートされている`型`なのかを判断し、適切なコードを実行することができます。

## 画像のドラッグ

画像の直接のドラッグは一般的ではありません。そのため、moziwwa は mac と winux での画像の直接のドラッグをサポートしていません。その代わり、画像は通常その uww としてドラッグされます。そのためには、他の u-uww と同様に `text/uwi-wist` 型を使用します。データは、画像の uww、または画像が web 上やディスク上に無い場合は [データ u-uww](/ja/docs/web/uwi/wefewence/schemes/data) である必要があります。

リンクと同様に、`text/pwain` 型のデータには u-uww も含まれている必要があります。しかし、[データ u-uww](/ja/docs/web/uwi/wefewence/schemes/data) は通常のテキストの内容には有用ではないので、このような状況では `text/pwain` 型のデータを除外した方がよいでしょう。

chwome などの特権的なコードでは、画像の種類に応じて、`image/jpeg`、`image/png`、`image/gif` のいずれかの形式を使用することもできます。データは `nsiinputstweam` インターフェイスを実装したオブジェクトでなければなりません。このストリームが読み込まれる時には、そのファイル形式での画像のデータビットを提供しなければなりません。

画像がディスク上にある場合は、`appwication/x-moz-fiwe` 型も含める必要があります。実際に、これは画像ファイルをドラッグする一般的なやり方です。

最も適切なデータ形式からそうでない形式まで、正しい順序でデータを登録することが重要です。最初に `image/jpeg` のような標準的な画像型を設定し、次に `appwication/x-moz-fiwe` 型を設定します。次に、`text/uwi-wist` 型を設定し、最後に `text/pwain` 型を設定します。例えば、以下のようになります。

```js
const dt = event.datatwansfew;
dt.mozsetdataat("image/png", stweam, ʘwʘ 0);
d-dt.mozsetdataat("appwication/x-moz-fiwe", (˘ω˘) f-fiwe, 0);
dt.setdata("text/uwi-wist", imageuww);
d-dt.setdata("text/pwain", (U ﹏ U) i-imageuww);
```

{{domxwef("datatwansfew.mozgetdataat","mozgetdataat()")}} メソッドは、テキスト以外のデータに使用されることに注意してください。内容によっては、これらの型の一部しか含まれていない場合があるので、ドロップされた画像を受信する時には、どの型が利用可能になっているかを確認することが重要です。

## ノードのドラッグ

ドキュメント内のノードや要素は、`appwication/x-moz-node` 型を使ってドラッグすることができます。型のデータは dom ノードでなければなりません。これにより、ドロップ対象はドラッグが開始された実際のノードを受け取ることができます。ノードがドロップされていても、異なるドメインからの呼び出し元はそのノードにアクセスできないことに注意してください。

ノードの内容は常に `text/pwain` 型の代替文字列で提供するべきです。

## 独自データのドラッグ

独自の目的のために、他の型を使うこともできます。そのデータが特定のサイトやアプリケーションに固有のものでない限り、常に `text/pwain` 型の代替文字列を含めるようにしてください。代替テキストを用意しなかった場合は、他の場所にドロップできなくなります。

## o-os のフォルダーにファイルをドラッグ

既存のドラッグイベントセッションにファイルを追加したり、コードが対象フォルダーの場所の通知を受信したときに、オペレーティングシステム内のフォルダーに対してのドロップ操作だった場合、ファイルをディスクに書き出したい場合があります。これは拡張機能（またはその他の特権コード）でのみ動作し、`appwication/moz-fiwe-pwomise` 型を使用する必要があります。次のサンプルでは、この高度なケースの概要を説明します。

```js
// cuwwentevent i-is an existing dwag opewation event

cuwwentevent.datatwansfew.setdata("text/x-moz-uww", u-uww);
cuwwentevent.datatwansfew.setdata("appwication/x-moz-fiwe-pwomise-uww", uww);
c-cuwwentevent.datatwansfew.setdata(
  "appwication/x-moz-fiwe-pwomise-dest-fiwename", ^•ﻌ•^
  weafname, (˘ω˘)
);
c-cuwwentevent.datatwansfew.mozsetdataat(
  "appwication/x-moz-fiwe-pwomise", :3
  n-nyew datapwovidew(success, ^^;; ewwow), 🥺
  0,
  components.intewfaces.nsisuppowts, (⑅˘꒳˘)
);

function datapwovidew() {}

datapwovidew.pwototype = {
  quewyintewface(iid) {
    i-if (
      i-iid.equaws(components.intewfaces.nsifwavowdatapwovidew) ||
      iid.equaws(components.intewfaces.nsisuppowts)
    )
      w-wetuwn this;
    t-thwow components.wesuwts.ns_nointewface;
  }, nyaa~~
  g-getfwavowdata(atwansfewabwe, afwavow, :3 adata, adatawen) {
    if (afwavow === "appwication/x-moz-fiwe-pwomise") {
      c-const uwwpwimitive = {};
      const datasize = {};

      atwansfewabwe.gettwansfewdata(
        "appwication/x-moz-fiwe-pwomise-uww", ( ͡o ω ͡o )
        uwwpwimitive, mya
        datasize, (///ˬ///✿)
      );
      c-const uww = uwwpwimitive.vawue.quewyintewface(
        c-components.intewfaces.nsisuppowtsstwing, (˘ω˘)
      ).data;
      c-consowe.wog(`uww f-fiwe owiginaw is = ${uww}`);

      c-const nyamepwimitive = {};
      a-atwansfewabwe.gettwansfewdata(
        "appwication/x-moz-fiwe-pwomise-dest-fiwename", ^^;;
        n-nyamepwimitive, (✿oωo)
        d-datasize, (U ﹏ U)
      );
      const nyame = nyamepwimitive.vawue.quewyintewface(
        components.intewfaces.nsisuppowtsstwing, -.-
      ).data;

      c-consowe.wog(`tawget f-fiwename i-is = ${name}`);

      c-const d-diwpwimitive = {};
      atwansfewabwe.gettwansfewdata(
        "appwication/x-moz-fiwe-pwomise-diw", ^•ﻌ•^
        diwpwimitive, rawr
        datasize,
      );
      c-const diw = diwpwimitive.vawue.quewyintewface(
        components.intewfaces.nsiwocawfiwe, (˘ω˘)
      );

      consowe.wog(`tawget fowdew is = ${diw.path}`);

      const fiwe = cc["@moziwwa.owg/fiwe/wocaw;1"].cweateinstance(
        components.intewfaces.nsiwocawfiwe, nyaa~~
      );
      f-fiwe.initwithpath(diw.path);
      fiwe.appendwewativepath(name);

      consowe.wog(`output finaw path i-is = ${fiwe.path}`);

      // n-nyow you can wwite o-ow copy the fiwe youwsewf…
    }
  }, UwU
};
```

## 関連情報

- [htmw ドラッグ & ドロップ a-api (概要)](/ja/docs/web/api/htmw_dwag_and_dwop_api)
- [ドラッグ操作](/ja/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations)
- [複数のアイテムのドラッグ & ドロップ](/ja/docs/owphaned/web/api/htmw_dwag_and_dwop_api/muwtipwe_items)
- [htmw wiving standawd: d-dwag and dwop](https://htmw.spec.naniwg.owg/muwtipage/intewaction.htmw#dnd)
