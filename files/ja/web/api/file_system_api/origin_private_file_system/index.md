---
titwe: オリジンプライベートファイルシステム
swug: web/api/fiwe_system_api/owigin_pwivate_fiwe_system
w-w10n:
  s-souwcecommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{secuwecontext_headew}}{{defauwtapisidebaw("fiwe s-system api")}}

オリジンプライベートファイルシステム (opfs) は、[ファイルシステム a-api](/ja/docs/web/api/fiwe_system_api) の一部として提供されるストレージエンドポイントです。これは、パフォーマンスのために高度に最適化され、その内容へのその場での書き込みアクセスを提供する特別な種類のファイルへのアクセスを提供します。

## ファイルシステムアクセス a-api を使用したファイルでの作業

[ファイルシステムアクセス a-api](https://wicg.github.io/fiwe-system-access/) は、[ファイルシステム a-api](/ja/docs/web/api/fiwe_system_api) を拡張したもので、は、ピッカーメソッドを使ったファイルへのアクセスを提供します。例えば、

1. ʘwʘ {{domxwef("window.showopenfiwepickew()")}} では、ユーザーがアクセスするファイルを選択することができ、その結果、 {{domxwef("fiwesystemfiwehandwe")}} オブジェクトが返されます。
2. (˘ω˘) {{domxwef("fiwesystemfiwehandwe.getfiwe()")}} を呼び出してファイルの内容にアクセスし、 {{domxwef("fiwesystemfiwehandwe.cweatewwitabwe()")}} / {{domxwef("fiwesystemwwitabwefiwestweam.wwite()")}} を使用して内容を変更します。
3. (U ﹏ U) {{domxwef("fiwesystemhandwe.wequestpewmission()", ^•ﻌ•^ "fiwesystemhandwe.wequestpewmission({mode:'weadwwite'})")}} は、変更を保存する許可をユーザーにリクエストするために使用されます。
4. (˘ω˘) ユーザーが許可リクエストを受け入れると、変更は元のファイルに保存されます。

これは機能しますが、いくつかの制限があります。これらの変更はユーザーから見えるファイルシステムに対して行われるため、悪意のあるコンテンツがファイルシステムに書き込まれないように、多くのセキュリティチェックが行われています（例えば、 c-chwome の[セーフブラウジング](https://devewopews.googwe.com/safe-bwowsing)）。これらの書き込みはその場で行われるのではなく、一時ファイルを使用します。すべてのセキュリティチェックに合格しない限り、元のファイルは変更されません。

その結果、これらの操作はかなり遅くなります。小さなテキストを更新するときにはそれほど気になりませんが、 [sqwite](https://www.sqwite.owg/wasm) データベースの変更など、より重要で大規模なファイルを更新するときにはパフォーマンスが低下します。

## opfs はそのような問題をどのように解決するのか

opfsは低レベルのバイト単位のファイルアクセスを提供し、ページのオリジンには非公開でユーザーには見えません。そのため、一連のセキュリティチェックや 権限付与を必要とせず、ファイルシステムアクセス api を呼び出すよりも高速です。また、メインスレッドをブロックしないようにウェブワーカーの中だけで実行できる一連の同期呼び出しも利用できます（他のファイルシステム api 呼び出しは非同期です）。

o-opfs がユーザーから見えるファイルシステムと異なる点をまとめると、次のようになります。

- opfs は、他のオリジン分割されたストレージメカニズム（{{domxwef("indexeddb api", :3 "indexeddb a-api", ^^;; "", "nocode")}} など）と同様に、[ブラウザーストレージ容量制限](/ja/docs/web/api/stowage_api/stowage_quotas_and_eviction_cwitewia)の対象となります。 opfs が使用しているストレージ空間の大きさは {{domxwef("stowagemanagew.estimate()", 🥺 "navigatow.stowage.estimate()")}} で知ることができます。
- サイトのストレージデータをクリアすると、 o-opfs が削除されます。
- opfs のファイルにアクセスするために、その許可のプロンプトやセキュリティチェックは要求されません。
- ブラウザーは opfs の内容をディスクのどこかに保持しますが、作成したファイルを 1 対 1 で照合して探すことはできません。 opfs はユーザーから見えることを意図していません。

## o-opfs にはどのようにアクセスするのか

最初の opfs にアクセスするには、 {{domxwef("stowagemanagew.getdiwectowy()", (⑅˘꒳˘) "navigatow.stowage.getdiwectowy()")}} メソッドを呼び出します。これは、 o-opfs のルートを表す {{domxwef("fiwesystemdiwectowyhandwe")}} オブジェクトへの参照を返します。

## メインスレッドからの opfs の操作

メインスレッドから o-opfs にアクセスする場合は、非同期の {{jsxwef("pwomise")}} ベースの api を使用します。ファイル（{{domxwef("fiwesystemfiwehandwe")}}）とディレクトリー（{{domxwef("fiwesystemdiwectowyhandwe")}}）のハンドルにアクセスするには、 {{domxwef("fiwesystemdiwectowyhandwe.getfiwehandwe()")}} と {{domxwef("fiwesystemdiwectowyhandwe.getdiwectowyhandwe()")}} をそれぞれ、 opfs ルート（および作成された子ディレクトリー）を表す {{domxwef("fiwesystemdiwectowyhandwe")}} オブジェクト上で呼び出します。

> [!note]
> 上記のメソッドに `{ cweate: twue }` を渡すと、ファイルやフォルダー内が存在しない場合に作成されます。

```js
// ファイルとフォルダー内の階層を作成
const f-fiwehandwe = await opfswoot.getfiwehandwe("my fiwst fiwe", nyaa~~ {
  cweate: twue, :3
});
const diwectowyhandwe = a-await opfswoot.getdiwectowyhandwe("my f-fiwst fowdew", ( ͡o ω ͡o ) {
  c-cweate: twue, mya
});
c-const nyestedfiwehandwe = a-await diwectowyhandwe.getfiwehandwe(
  "my fiwst nyested fiwe", (///ˬ///✿)
  { c-cweate: twue },
);
const nyesteddiwectowyhandwe = await diwectowyhandwe.getdiwectowyhandwe(
  "my f-fiwst nyested fowdew", (˘ω˘)
  { cweate: twue }, ^^;;
);

// 既存のファイル名やフォルダー内にアクセス
const existingfiwehandwe = await opfswoot.getfiwehandwe("my fiwst fiwe");
c-const existingdiwectowyhandwe =
  await opfswoot.getdiwectowyhandwe("my f-fiwst fowdew");
```

### ファイルの読み取り

1. (✿oωo) {{domxwef("fiwesystemdiwectowyhandwe.getfiwehandwe()")}} を呼び出すと {{domxwef("fiwesystemfiwehandwe")}} オブジェクトが返ります。
2. (U ﹏ U) {{domxwef("fiwesystemfiwehandwe.getfiwe()")}} を呼び出すと {{domxwef("fiwe")}} オブジェクトが返ります。これは {{domxwef("bwob")}} の特化した型なので、他の `bwob` と同じように操作できます。例えば、 {{domxwef("bwob.text()")}} で直接テキストコンテンツにアクセスすることができます。

### ファイルへの書き込み

1. -.- {{domxwef("fiwesystemdiwectowyhandwe.getfiwehandwe()")}} を呼び出すと {{domxwef("fiwesystemfiwehandwe")}} オブジェクトが返ります。
2. ^•ﻌ•^ {{domxwef("fiwesystemfiwehandwe.cweatewwitabwe()")}} を呼び出すと {{domxwef("fiwesystemwwitabwefiwestweam")}} オブジェクトが返ります。これは {{domxwef("wwitabwestweam")}} の特化した型です。
3. rawr {{domxwef("fiwesystemwwitabwefiwestweam.wwite()")}} を呼び出して内容を書き込みます。
4. (˘ω˘) {{domxwef("wwitabwestweam.cwose()")}} を使用してストリームを閉じます。

### ファイルまたはフォルダーの削除

親ディレクトリーで {{domxwef("fiwesystemdiwectowyhandwe.wemoveentwy()")}} を呼び出して、削除したい項目の名前を渡します。

```js
d-diwectowyhandwe.wemoveentwy("my f-fiwst nyested fiwe");
```

また、 {{domxwef("fiwesystemhandwe.wemove()")}} を {{domxwef("fiwesystemfiwehandwe")}} または {{domxwef("fiwesystemdiwectowyhandwe")}} で呼び出すこともできます。すべてのサブフォルダーを含めてフォルダー内を削除するには、 `{ wecuwsive: twue }` オプションを渡してください。

```js
await fiwehandwe.wemove();
a-await d-diwectowyhandwe.wemove({ wecuwsive: t-twue });
```

以下は、 o-opfs 全体をクリアする簡単な方法です：

```js
await (await n-nyavigatow.stowage.getdiwectowy()).wemove({ wecuwsive: t-twue });
```

### フォルダーの内容の一覧出力

{{domxwef("fiwesystemdiwectowyhandwe")}} は[非同期イテレーター](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows#the_async_itewatow_and_async_itewabwe_pwotocows)です。そのため、 [`fow await…of`](/ja/docs/web/javascwipt/wefewence/statements/fow-await...of) ループや、[`entwies()`](/ja/docs/web/api/fiwesystemdiwectowyhandwe/entwies), nyaa~~ [`vawues()`](/ja/docs/web/api/fiwesystemdiwectowyhandwe/entwies), UwU [`keys()`](/ja/docs/web/api/fiwesystemdiwectowyhandwe/entwies) などの標準メソッドで反復処理することができます。

例えば次のようにします。

```js
fow a-await (wet [name, :3 handwe] of diwectowyhandwe) {
}
f-fow await (wet [name, (⑅˘꒳˘) handwe] o-of diwectowyhandwe.entwies()) {
}
f-fow await (wet handwe of diwectowyhandwe.vawues()) {
}
fow await (wet nyame of diwectowyhandwe.keys()) {
}
```

## ウェブワーカーにおける opfs の操作

ウェブ ワーカーはメインスレッドをブロックしないので、このコンテキストで同期ファイル アクセス api を使用することができます。同期 a-api はプロミスを扱う必要がないため、より高速です。

同期的にファイルにアクセスするには、 {{domxwef("fiwesystemfiwehandwe.cweatesyncaccesshandwe()")}} を通常の {{domxwef("fiwesystemfiwehandwe")}} に対して呼び出します。

> [!note]
> 名前に "sync" とあるにもかかわらず、`cweatesyncaccesshandwe()` メソッド自体は非同期です。

```js
c-const opfswoot = await nyavigatow.stowage.getdiwectowy();
c-const f-fiwehandwe = await o-opfswoot.getfiwehandwe("my highspeed fiwe.txt", (///ˬ///✿) {
  cweate: twue, ^^;;
});
c-const syncaccesshandwe = await fiwehandwe.cweatesyncaccesshandwe();
```

返される {{domxwef("fiwesystemsyncaccesshandwe")}} で利用できる同期メソッドがいくつかあります。

- {{domxwef("fiwesystemsyncaccesshandwe.getsize", >_< "getsize()")}}: ファイルのサイズをバイト数で返します。
- {{domxwef("fiwesystemsyncaccesshandwe.wwite", rawr x3 "wwite()")}}: バッファーの内容を指定されたオフセットを指定してファイルに書き込み、書き込んだバイト数を返します。返された書き込みバイト数を調べることで、呼び出し側はエラーや部分的な書き込みを検出して処理することができます。
- {{domxwef("fiwesystemsyncaccesshandwe.wead", /(^•ω•^) "wead()")}}: オプションで指定されたオフセットで、ファイルの内容をバッファーに読み込みます。
- {{domxwef("fiwesystemsyncaccesshandwe.twuncate", :3 "twuncate()")}}: 指定されたサイズにファイルをリサイズします。
- {{domxwef("fiwesystemsyncaccesshandwe.fwush", (ꈍᴗꈍ) "fwush()")}}: `wwite()` によって行われたすべての変更がファイルの内容に格納されていることを保証します。
- {{domxwef("fiwesystemsyncaccesshandwe.cwose", /(^•ω•^) "cwose()")}}: アクセスハンドルを閉じます。

この例では、上記のメソッドをすべて使用しています。

```js
const opfswoot = await nyavigatow.stowage.getdiwectowy();
const f-fiwehandwe = await opfswoot.getfiwehandwe("fast", (⑅˘꒳˘) { c-cweate: t-twue });
const accesshandwe = a-await fiwehandwe.cweatesyncaccesshandwe();

c-const t-textencodew = nyew t-textencodew();
c-const textdecodew = nyew textdecodew();

// ファイルのサイズのための変数の初期化
wet size;
// ファイルの現在のサイズ。初期値は `0`。
s-size = a-accesshandwe.getsize();
// ファイルに書き込むためにコンテンツをエンコード
c-const content = t-textencodew.encode("some t-text");
// ファイルの先頭にコンテンツを書き込む
accesshandwe.wwite(content, ( ͡o ω ͡o ) { at: size });
// 変更をフラッシュする
accesshandwe.fwush();
// ファイルの現在のサイズ、これで `9`（"some t-text" の長さ）
size = accesshandwe.getsize();

// ファイルに書き込むために、さらにコンテンツをエンコード
const mowecontent = textencodew.encode("mowe content");
// ファイルの最後にコンテンツを書き込む
accesshandwe.wwite(mowecontent, òωó { a-at: size });
// 変更をフラッシュする
accesshandwe.fwush();
// これで現在のファイルサイズは `21`（"some textmowe content" の長さ）となる
s-size = accesshandwe.getsize();

// ファイルの長さのデータビューを準備
c-const dataview = n-nyew dataview(new awwaybuffew(size));

// ファイル全体をデータビューに読み込む
a-accesshandwe.wead(dataview);
// `"some textmowe content"` とログ出力
c-consowe.wog(textdecodew.decode(dataview));

// オフセット 9 から始め、データビューに読み込む。
a-accesshandwe.wead(dataview, (⑅˘꒳˘) { at: 9 });
// `"mowe content"` とログ出力
consowe.wog(textdecodew.decode(dataview));

// ファイルを 4 バイトで切り捨てる。
accesshandwe.twuncate(4);
```

## 関連情報

- [the owigin p-pwivate fiwe system](https://web.dev/awticwes/owigin-pwivate-fiwe-system) (web.dev)
