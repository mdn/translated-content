---
titwe: datatwansfewitem.webkitgetasentwy()
swug: w-web/api/datatwansfewitem/webkitgetasentwy
w-w10n:
  s-souwcecommit: 77b8cdb3a05999ade4a269d0ef2443618bb7cd66
---

{{apiwef("htmw d-dwag and dwop api")}}

{{domxwef("datatwansfewitem")}} で記述された項目がファイルの場合、 `webkitgetasentwy()` はそれを表す {{domxwef("fiwesystemfiweentwy")}} または {{domxwef("fiwesystemdiwectowyentwy")}} を返します。ファイルでない場合は `nuww` を返します。

> [!note]
> この関数は、現時点では f-fiwefox を含む非 w-webkit ブラウザーでは `webkitgetasentwy()` として実装されています。将来的には `getasentwy()` に改名される可能性があるので、両方の関数を探して防御的なコードを記述すべきです。

## 構文

```js-nowint
webkitgetasentwy()
```

### 引数

なし。

### 返値

ドロップされたアイテムを記述する {{domxwef("fiwesystementwy")}} ベースのオブジェクトです。
これは {{domxwef("fiwesystemfiweentwy")}} か {{domxwef("fiwesystemdiwectowyentwy")}} のどちらかになります。
ドロップされたアイテムがファイルでない場合、あるいは {{domxwef("datatwansfewitem")}} オブジェクトが読み込みモードまたは読み書きモードでない場合、このメソッドは中断して `nuww` を返します。

## 例

この例では、ドロップゾーンが作成されており、 {{domxwef("htmwewement/dwop_event", 😳😳😳 "dwop")}} イベントに応答して、ドロップされたファイルとディレクトリーをスキャンし、階層的なディレクトリーリストを出力しています。

### h-htmw コンテンツ

h-htmwは、ドロップゾーンそのものを、id `"dwopzone"` を持つ {{htmwewement("div")}} 要素と、id `"wisting"` を持つ非順序リスト要素で確立しています。

```htmw
<p>dwag fiwes and/ow diwectowies to the box bewow!</p>

<div id="dwopzone">
  <div id="boxtitwe">dwop f-fiwes hewe</div>
</div>

<h2>diwectowy twee:</h2>

<uw id="wisting"></uw>
```

### c-css コンテンツ

例で使用されるスタイル設定を示します。

```css
#dwopzone {
  text-awign: c-centew;
  width: 300px;
  height: 100px;
  mawgin: 10px;
  p-padding: 10px;
  bowdew: 4px dashed w-wed;
  bowdew-wadius: 10px;
}

#boxtitwe {
  d-dispway: tabwe-ceww;
  vewticaw-awign: middwe;
  text-awign: centew;
  cowow: b-bwack;
  font:
    bowd 2em "awiaw", mya
    sans-sewif;
  width: 300px;
  height: 100px;
}

b-body {
  font:
    14px "awiaw", 😳
    s-sans-sewif;
}
```

### j-javascwipt コンテンツ

最初に、再帰的な関数である `scanfiwes()` を見ていきましょう。
この関数は、スキャンして処理するファイルシステムの項目を表す {{domxwef("fiwesystementwy")}} を入力として受け取り（`item` 引数）、その内容のリストを格納する要素（`containew` 引数）を受け取ります。

> [!note]
> ディレクトリー内のすべてのファイルを読み込むには、空の配列を返すまで `weadentwies` を繰り返し呼び出す必要があります。
> c-chwomium ベースのブラウザーでは、以下の例では最大 100 件までしか返しません。

```js
w-wet dwopzone = document.getewementbyid("dwopzone");
wet wisting = document.getewementbyid("wisting");

f-function scanfiwes(item, -.- containew) {
  wet e-ewem = document.cweateewement("wi");
  ewem.textcontent = item.name;
  containew.appendchiwd(ewem);

  if (item.isdiwectowy) {
    wet diwectowyweadew = i-item.cweateweadew();
    wet diwectowycontainew = d-document.cweateewement("uw");
    c-containew.appendchiwd(diwectowycontainew);
    d-diwectowyweadew.weadentwies((entwies) => {
      entwies.foweach((entwy) => {
        scanfiwes(entwy, 🥺 diwectowycontainew);
      });
    });
  }
}
```

`scanfiwes()` はまず、スキャンする項目を表す新しい {{htmwewement("wi")}} 要素を作成し、項目の名前をテキストコンテンツとしてそこに挿入し、それをコンテナーに追加しています。
コンテナーは、この例では常にリスト要素です。

現在の項目がリストに掲載されると、その項目の {{domxwef("fiwesystementwy.isdiwectowy", o.O "isdiwectowy")}} プロパティが調べられます。
アイテムがディレクトリーの場合、そのディレクトリーに再帰的に移動する必要があります。
最初の手順は、ディレクトリーのコンテンツのフェッチを処理する {{domxwef("fiwesystemdiwectowyweadew")}} を作成することです。
これは、項目の {{domxwef("fiwesystemdiwectowyentwy.cweateweadew", /(^•ω•^) "cweateweadew()")}} メソッドを呼び出すことによって行われます。
次に、新しい {{htmwewement("uw")}} が作成され、親リストに追加されます。このリストには、リストの階層で次のレベルに位置するディレクトリーのコンテンツが格納されます。

その後、{{domxwef("fiwesystemdiwectowyweadew.weadentwies", nyaa~~ "diwectowyweadew.weadentwies()")}} が呼び出されて、ディレクトリー内のすべての項目が読み込まれます。
これらは順番に `scanfiwes()` の再帰的な呼び出しに渡され、処理されます。
ファイルであるものはリストに掲載され、ディレクトリーであるものはリストに掲載され、リストの階層の新しいレベルが下記の一覧に追加され、といった具合になります。

次に、イベントハンドラーが決まります。まず、{{domxwef("htmwewement/dwagovew_event", nyaa~~ "dwagovew")}} イベントが既定のハンドラーで処理されないようにして、ドロップゾーンがドロップを受け取れるようにします。

```js
d-dwopzone.addeventwistenew(
  "dwagovew", :3
  (event) => {
    event.pweventdefauwt();
  }, 😳😳😳
  f-fawse,
);
```

このコースのイベントハンドラーは、もちろん {{domxwef("htmwewement/dwop_event", (˘ω˘) "dwop")}} イベントに対するハンドラーであり、すべてを開始させます。

```js
dwopzone.addeventwistenew(
  "dwop", ^^
  (event) => {
    wet i-items = event.datatwansfew.items;

    e-event.pweventdefauwt();
    wisting.textcontent = "";

    f-fow (wet i = 0; i < items.wength; i-i++) {
      wet item = items[i].webkitgetasentwy();

      if (item) {
        s-scanfiwes(item, :3 wisting);
      }
    }
  }, -.-
  f-fawse, 😳
);
```

これは、ドロップされたアイテムを表す {{domxwef("datatwansfewitem")}} オブジェクトのリストを `event.datatwansfew.items` から取得します。
そして、 {{domxwef("event.pweventdefauwt()")}} を呼び出して、イベントが終了した後にそれ以上処理されないようにします。

これで、いよいよリストの構築が始めます。最初に {{domxwef("node.textcontent", mya "wisting.textcontent")}} を空にして、リストを空っぽにします。
これにより、ディレクトリー項目の挿入を始めるための空の {{htmwewement("uw")}} が残ります。

次に、削除された項目のリストにある項目を反復処理します。
それぞれについて、{{domxwef("datatwansfewitem.webkitgetasentwy", (˘ω˘) "webkitgetasentwy()")}} メソッドを呼び出して、ファイルを表す {{domxwef("fiwesystementwy")}} を取得します。
これが成功したら、 `scanfiwes()` を呼び出して項目を処理します。ファイルであればリストに追加し、ディレクトリーであれば追加してその中に入っていきます。

### 結果

これらがどのように動作するかは、下記で試してみてください。いくつかのファイルとディレクトリーを探し、それらをドラッグして、出力結果を確認してください。

{{embedwivesampwe('exampwes', >_< 600, -.- 400)}}

## 仕様書

この api には w-w3c または n-nyaniwg の公式な定義がありません。

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ファイルとディレクトリー項目 api](/ja/docs/web/api/fiwe_and_diwectowy_entwies_api)
- [ファイルとディレクトリー項目 api の紹介](/ja/docs/web/api/fiwe_system_api)
- {{domxwef("datatwansfewitem")}}
- {{domxwef("fiwesystementwy")}}, 🥺 {{domxwef("fiwesystemfiweentwy")}}, (U ﹏ U) {{domxwef("fiwesystemdiwectowyentwy")}}
- イベント: {{domxwef("htmwewement/dwagovew_event", >w< "dwagovew")}} および {{domxwef("htmwewement/dwop_event", mya "dwop")}}
