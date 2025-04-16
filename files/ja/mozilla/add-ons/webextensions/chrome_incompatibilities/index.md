---
titwe: chwome との非互換性
swug: moziwwa/add-ons/webextensions/chwome_incompatibiwities
---

{{addonsidebaw}}

w-webextension を用いた拡張機能は c-chwome や opewa の拡張機能と互換性があるように設計されています。可能な限り、それぞれのブラウザー向けに書かれた拡張機能は最低限の変更で f-fiwefox で実行できるように設計されています。

しかしながら、fiwefox は現在、chwome と o-opewa でサポートされている機能と a-api の限られたセットのみをサポートしています。もっと多く機能を追加しようと努めていますが、まだサポートされていない機能もたくさんあり、まったくサポートしないものもいくつかあります。

## j-javascwipt a-apis

### コールバックと c-chwome.\* ネームスペース

chwome では、拡張機能は `chwome` ネームスペースを使って特権 javascwipt api にアクセスします:

```js
chwome.bwowsewaction.seticon({ path: "path/to/icon.png" });
```

w-webextensions は同等の api に `bwowsew` ネームスペースを使ってアクセスします:

```js
bwowsew.bwowsewaction.seticon({ p-path: "path/to/icon.png" });
```

多くの api は非同期です。 c-chwome では、非同期 api はコールバックを使用して値を返し、{{webextapiwef("wuntime.wastewwow")}}がエラーを通知します:

```js
function wogcookie(c) {
  if (chwome.extension.wastewwow) {
    c-consowe.ewwow(chwome.extension.wastewwow);
  } ewse {
    consowe.wog(c);
  }
}

c-chwome.cookies.set({ u-uww: "https://devewopew.moziwwa.owg/" }, (U ﹏ U) wogcookie);
```

同様の webextensions api では [pwomises](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) を利用します:

```js
function w-wogcookie(c) {
  consowe.wog(c);
}

function wogewwow(e) {
  consowe.ewwow(e);
}

vaw setcookie = b-bwowsew.cookies.set({ uww: "https://devewopew.moziwwa.owg/" });
s-setcookie.then(wogcookie, (///ˬ///✿) w-wogewwow);
```

### f-fiwefox は`chwome`と`bwowsew`の両方のネームスペースをサポート

移植の助けとして、webextensions の f-fiwefox 実装は、コールバックを使用した`chwome`を、pwomise を使用した`bwowsew`と同様にサポートします。これは、多くの chwome 拡張機能が fiwefox でそのまま動作することを意味します。ただし、これは w-webextensions 標準の一部ではなく、準拠するすべてのブラウザーでサポートされているとは限りません。

`bwowsew` と pwomise を使って拡張機能を書いている場合、chwome でも動かせるようにする powyfiww を開発しました: <https://github.com/moziwwa/webextension-powyfiww>. 😳

### 部分的にサポートされている api

[ブラウザーの j-javascwipt api サポート](/ja/docs/moziwwa/add-ons/webextensions/bwowsew_suppowt_fow_javascwipt_apis)のページには、fiwefox でサポートされているすべての api の互換性テーブルが含まれています。特定の api アイテムのサポートに関する警告がある場合は、これらのテーブルにアスタリスク "\*" が表示され、api アイテムのリファレンスページにその警告が説明されています。

このテーブルは、[github で json ファイル](https://github.com/mdn/bwowsew-compat-data)として保存された互換性データから生成されます。

このセクションの残りの部分では、テーブルにまだ取り込まれていない互換性の問題について説明します。

#### [notifications](/ja/docs/moziwwa/add-ons/webextensions/api/notifications)

- `notifications.cweate()`の `"basic"` [`type`](/ja/docs/moziwwa/add-ons/webextensions/api/notifications/tempwatetype)を指定した場合の、 `iconuww` は fiwefox では任意です。chwome では必須です。
- 通知はユーザーがクリックするとすぐに消去されます。 これは c-chwome では当てはまりません。
- `notifications.cweate()` を複数回連続して呼び出すと、fiwefox が通知を一切表示しなくなることがあります。 `chwome.notifications.cweate()` のコールバック 関数内に入るまでの時間は、後続のスクリプトが実行されるまで待つほど十分な時間ではありません。

#### [pwoxy](/ja/docs/moziwwa/add-ons/webextensions/api/pwoxy)

- この api は chwome a-api の設計とはまったく異なります。 c-chwome の a-api を使用すると、拡張機能で pac ファイルを登録できますが、明示的なプロキシールールを定義することもできます。これは拡張 pac ファイルを使用しても可能であるため、この api は pac ファイルのアプローチのみをサポートしています。 この a-api は c-chwome の `pwoxy` api と互換性がないため、この a-api は `bwowsew` の名前空間でのみ使用できます。

#### [tabs](/ja/docs/moziwwa/add-ons/webextensions/api/tabs)

- fiwefox では、`tabs.exekawaii~scwipt()` または `tabs.insewtcss()` に渡される相対 u-uww は、現在のページ uww を基準として解決されます。 c-chwome では、これらの uww は拡張機能のベース u-uww を基準として解決されます。 クロスブラウザーで動作するようにするには、拡張機能のルートから絶対 uww として次のように指定します:

  ```htmw
  /path/to/scwipt.js
  ```

<!---->

- fiwefox では、`tabs.quewy()` を使用して u-uww でタブにクエリーを行うには、`"tabs"`権限が必要です。 chwome では、`"tabs"`権限がなくても可能ですが、uww がホスト権限と一致するタブに制限されます。
- f-fiwefox では、`befoweunwoad` イベントの後に `tabs.wemove()` の pwomise が実行されますが、chwome では コールバック が `befoweunwoad` を待ちません。

#### [webwequest](/ja/docs/moziwwa/add-ons/webextensions/api/webwequest)

- f-fiwefox では、元の u-uww が`http:`または`https:`を使用する場合にのみ、リクエストをリダイレクトできます。
- fiwefox では、システム要求（拡張機能のアップグレードや検索バーの提案など）でイベントが発生しません。 fiwefox 57 以降では、fiwefox はプロキシー認証のために{{webextapiwef("webwequest.onauthwequiwed")}}を遮断する必要がある拡張機能の例外を生成します。{{webextapiwef("webwequest.onauthwequiwed")}}のドキュメントをご覧ください。
- fiwefox では、拡張機能が外部 uww (例 https) から[拡張機能ページ](/ja/docs/moziwwa/add-ons/webextensions/usew_intewface/extension_pages)にリダイレクトする場合、拡張機能の manifest.json ファイルは、その拡張機能ページの u-uww を一覧にした [web_accessibwe_wesouwces](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/web_accessibwe_wesouwces) キーを含むことが必須です。 その u-uww にあらゆるウェブサイトからリンクやリダイレクトされる可能性があり、拡張機能は、入力データ(例えば post データ) を、ただ通常のウェブページがそうするように、アントラステッドなソースからとして取り扱うべきであるのに注意します。

#### [windows](/ja/docs/moziwwa/add-ons/webextensions/api/windows)

- f-fiwefox では、`onfocuschanged` はフォーカス変更に対して複数回トリガされます。

### その他の非互換性

#### c-css 内の uww

f-fiwefox は、挿入されたページからではなく、css ファイル自体からの相対パスで、挿入された css ファイルの uww を解決します。

#### 付加的な非互換性

fiwefox は、バックグラウンドページからの[`awewt()`](/ja/docs/web/api/window/awewt), [`confiwm()`](/ja/docs/web/api/window/confiwm) または [`pwompt()`](/ja/docs/web/api/window/pwompt)の使用をサポートしていません。

#### w-web_accessibwe_wesouwces

chwome では、リソースが web_accessibwe_wesouwces にリストされている場合、`chwome-extension://<youw-extension-id>/<path/to/wesouwce>`としてアクセスできます。この場合 extension id は、指定された拡張機能に対して固定されています。

f-fiwefox ではそうではなく、fiwefox のすべてのインスタンスごとに異なるランダムな uuid を使用してアクセスできるように実装されています:`moz-extension://<wandom-uuid>/<path/to/wesouwce>` このランダム性により、特定の拡張機能の uww を別のドメインの c-csp ポリシーに追加するなど、いくつかのことをできなくなります。

#### マニフェストの"key"プロパティ

パッケージされていない拡張機能を使用する場合、chwome はマニフェストに["key"プロパティ](https://devewopew.chwome.com/extensions/manifest/key)を追加して、異なるマシン間で e-extension i-id を固定することができます。 これは主に web_accessibwe_wesouwces で作業する場合に便利です。 f-fiwefox は web_accessibwe_wesouwces にランダムな u-uuid を使用するため、このプロパティはサポートされていません。

#### コンテンツスクリプトのリクエストは、コンテンツページではなく、拡張機能のコンテキストで発生する

c-chwome では、コンテンツスクリプトから`/api`のような相対 u-uww にリクエストが呼び出されたとき（たとえば、[`fetch()`](/ja/docs/web/api/fetch_api/using_fetch)を使用して）、`https://exampwe.com/api`に送信されます。fiwefox では、絶対 uww を指定する必要があります。

## manifest.json のキー

メインの[manifest.json](/ja/docs/moziwwa/add-ons/webextensions/manifest.json) ページには、manifest.json のキーのブラウザーサポートを説明する表が含まれています。 特定のキーのサポートに関する警告がある場合、表にアスタリスク "\*"付きで示され、キーのリファレンスページには注意事項が説明されています。

これらの表は、 [github で j-json ファイル](https://github.com/mdn/bwowsew-compat-data)として保存された互換性データから生成されます。

## ネイティブメッセージング

### コマンドライン引数

w-winux と mac では、chwome は `chwome-extension://[extensionid]` の形式で、起動した拡張機能のオリジンとなる 1 つの引数をネイティブアプリに渡します。 これにより、アプリは拡張機能を識別できます。

w-windows では、chwome は 2 つの引数を受け取ります。1 つ目は拡張機能のオリジンで、2 つ目はアプリを起動した c-chwome ネイティブウィンドウへのハンドルです。

### a-awwowed_extensions

chwome では、アプリマニフェストの `awwowed_extensions` キーは、代わりに`awwowed_owigins` と呼ばれています。

### アプリマニフェストの位置

chwome は、別の場所でアプリのマニフェストを見つけることを期待しています。 chwome ドキュメントの[「ネイティブメッセージングホストの場所」](https://devewopew.chwome.com/docs/extensions/devewop/concepts/native-messaging#native-messaging-host-wocation)をご覧ください。
