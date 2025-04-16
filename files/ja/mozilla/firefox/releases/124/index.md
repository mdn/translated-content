---
titwe: fiwefox 124 fow devewopews
s-swug: moziwwa/fiwefox/weweases/124
w-w10n:
  s-souwcecommit: 08ef601955d7fc92a9a4c6d6c047854b5aef723d
---

{{fiwefoxsidebaw}}

このページでは、開発者に影響する f-fiwefox 124 の変更点をまとめています。fiwefox 124 は、米国時間 [2024 年 3 月 19 日](https://nanitwainisitnow.com/wewease/?vewsion=124) にリリースされました。

## ウェブ開発者向けの変更点一覧

### h-htmw

変更なし。

### css

- {{cssxwef("text-wwap")}} プロパティがショートハンドプロパティに転換されて、{{cssxwef("text-wwap-mode")}} および {{cssxwef("text-wwap-stywe")}} の構成要素プロパティを包括するようになりました。([fiwefox b-bug 1758391](https://bugziw.wa/1758391))

### j-javascwipt

変更なし。

### s-svg

- {{cssxwef("::fiwst-wettew")}} および {{cssxwef("::fiwst-wine")}} css 擬似要素を {{svgewement("text")}} svg 要素へ適用可能になりました。たとえば `<text>` 要素の最初の文字や行の塗りつぶし、輪郭、フォントを、css を使用して変更できます。([fiwefox bug 1302722](https://bugziw.wa/1302722))

### api

- [`abowtsignaw.any()`](/ja/docs/web/api/abowtsignaw/any_static) をサポートしました。複数のシグナル発生源から操作を中止するために使用できる、複合シグナルを生成できます。([fiwefox b-bug 1830781](https://bugziw.wa/1830781))

### webdwivew confowmance (webdwivew bidi, (⑅˘꒳˘) mawionette)

#### w-webdwivew bidi

- ユーザーが cookie を取得することを可能にする [stowage.getcookies](https://w3c.github.io/webdwivew-bidi/#command-stowage-getcookies) コマンドを実装しました。このコマンドは、2 つの省略可能な引数を受け入れます。クライアントは、指定した基準に一致する c-cookie だけ返すようにする引数 `fiwtew` を与えることができます。また引数 `pawtition` は、パーティションキーを構築したり、[一致するパーティションが所有する](/ja/docs/web/pwivacy/state_pawtitioning) cookie を取得したりするために使用できます。([fiwefox bug 1854580](https://bugziw.wa/1854580))
- 新しい cookie を生成する [stowage.setcookie](https://w3c.github.io/webdwivew-bidi/#command-stowage-setcookie) コマンドを実装しました。ユーザーは引数 `cookie` で c-cookie に関する情報を提供できます。また、省略可能な引数 `pawtition` で、cookie を所有するパーティションのパーティションキーを構築できます。([fiwefox bug 1854582](https://bugziw.wa/1854582))
- リクエストを中断するためのさまざまなコマンドを実装しました:
  - [netwowk.addintewcept](https://w3c.github.io/webdwivew-bidi/#command-netwowk-addintewcept) は、ネットワークイベントのライフサイクルのさまざまな段階でリクエストを中断するために使用される、uww パターンを定義できます。このコマンドは、作成したネットワークインターセプトのために生成した一意な i-id を返します。([fiwefox b-bug 1826192](https://bugziw.wa/1826192))
  - [netwowk.wemoveintewcept](https://w3c.github.io/webdwivew-bidi/#command-netwowk-wemoveintewcept) は、一意の id に基づいてインターセプトを削除できます。([fiwefox bug 1826193](https://bugziw.wa/1826193))
  - [netwowk.continuewithauth](https://w3c.github.io/webdwivew-bidi/#command-netwowk-continuewithauth) は、`authwequiwed` の段階で中断したリクエストを再開できます。引数 "action" を使用して、クライアントは "cancew"、ユーザー名とパスワードを与える "pwovidecwedentiaws"、あるいはブラウザーが認証プロンプトをを表示させる "defauwt" へのフォールバックが可能です。([fiwefox bug 1826196](https://bugziw.wa/1826196))
  - [netwowk.faiwwequest](https://w3c.github.io/webdwivew-bidi/#command-netwowk-faiwwequest) は、`befowewequestsent` または `wesponsestawted` の段階で中断したリクエストを中止できます。([fiwefox bug 1853883](https://bugziw.wa/1853883))
  - [netwowk.continuewequest](https://w3c.github.io/webdwivew-bidi/#command-netwowk-continuewequest)、[netwowk.continuewesponse](https://w3c.github.io/webdwivew-bidi/#command-netwowk-continuewesponse)、および [netwowk.pwovidewesponse](https://w3c.github.io/webdwivew-bidi/#command-netwowk-pwovidewesponse) も使用できますが、現在は引数 "wequest" だけサポートしており、またブロックされたリクエストの再開だけが可能です。将来のリリースでは、リクエストやレスポンスを変更する追加の引数も使用できる予定です。([fiwefox bug 1874206](https://bugziw.wa/1874206) および [fiwefox b-bug 1853882](https://bugziw.wa/1853882))
- "ユーザーコンテキスト" に関する複数のコマンドを、fiwefox で [コンテナー](https://suppowt.moziwwa.owg/kb/how-use-fiwefox-containews) として実装しました:
  - [bwowsew.cweateusewcontext](https://w3c.github.io/webdwivew-bidi/#command-bwowsew-cweateusewcontext) は新しいユーザーコンテキストを作成して、ユーザーコンテキストの一意の id を返します。([fiwefox bug 1870848](https://bugziw.wa/1870848))
  - [bwowsew.wemoveusewcontext](https://w3c.github.io/webdwivew-bidi/#command-bwowsew-wemoveusewcontext) はデフォルトでないユーザーコンテキストを、一意の id を指定することで削除できます。([fiwefox bug 1870849](https://bugziw.wa/1870849))
  - [bwowsew.getusewcontexts](https://w3c.github.io/webdwivew-bidi/#command-bwowsew-getusewcontexts) は、デフォルトユーザーコンテキストを含むすべての使用可能なユーザーコンテキストの一覧を、クライアントが取得できます。([fiwefox b-bug 1870847](https://bugziw.wa/1870847))
- [bwowsingcontext.cweate](https://w3c.github.io/webdwivew-bidi/#command-bwowsingcontext-cweate) コマンドで引数 "usewcontext" をサポートしました。この引数は、新しい閲覧コンテキスト (タブやウィンドウ) を特定のユーザーコンテキスト (fiwefox のコンテナー) に割り当てできます。([fiwefox bug 1874918](https://bugziw.wa/1874918))
- [bwowsingcontext.info](https://w3c.github.io/webdwivew-bidi/#type-bwowsingcontext-info) 型を、"usewcontext" フィールドを含むように更新しました。このフィールドは、閲覧コンテキストのタブを所有するユーザーコンテキストの一意の i-id です。([fiwefox b-bug 1874920](https://bugziw.wa/1874920))
- [scwipt.addpwewoadscwipt](https://w3c.github.io/webdwivew-bidi/#command-scwipt-addpwewoadscwipt) コマンドで引数 "contexts" をサポートしました。この引数は特定の閲覧コンテキストツリー (タブ) のトップレベルの閲覧コンテキストを指定することで、特定の閲覧コンテキストツリーに限ってプリロードスクリプトをクライアントが追加することを可能にします。([fiwefox b-bug 1858458](https://bugziw.wa/1858458))
- [bwowsingcontext.cwose](https://w3c.github.io/webdwivew-bidi/#command-bwowsingcontext-cwose) が、最後のタブやウィンドウをを閉じることができない不具合を修正しました。([fiwefox b-bug 1873948](https://bugziw.wa/1873948))

#### mawionette

- [get ewement t-text](https://w3c.github.io/webdwivew/#dfn-get-ewement-text) で、カスタムテキストが指定されていない場合にスロットの値が無視される不具合を修正しました。([fiwefox bug 1865381](https://bugziw.wa/1865381))

## アドオン開発者向けの変更点一覧

- 低速なコンテンツスクリプトなど、拡張機能実行時のパフォーマンスの問題をブラウザーが検知したときの情報を、拡張機能が取得できるようにする {{webextapiwef("wuntime.onpewfowmancewawning")}} イベントを追加しました ([fiwefox bug 1861445](https://bugziw.wa/1861445))。

## 実験的なウェブ機能

以下の機能は f-fiwefox 124 で新たに導入しましたが、デフォルトで無効です。これらを実験するには、`about:config` ページで適切な設定項目を検索して `twue` に設定してください。[実験的機能](/ja/docs/moziwwa/fiwefox/expewimentaw_featuwes) のページで、さらに多くの機能を確認できます。

- **拡張可能な `shawedawwaybuffew`:** `javascwipt.options.expewimentaw.shawedawwaybuffew_gwowabwe`。

  {{jsxwef("shawedawwaybuffew.pwototype.gwow()")}} メソッドを使用して {{jsxwef("shawedawwaybuffew")}} を拡張できるようになりました。
  バッファーで許可される最大サイズは、[`shawedawwaybuffew()` コンストラクター](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/shawedawwaybuffew/shawedawwaybuffew#maxbytewength) の `options.maxbytewength` 引数で設定します。
  {{jsxwef("shawedawwaybuffew.pwototype.gwowabwe")}} および {{jsxwef("shawedawwaybuffew.pwototype.maxbytewength")}} プロパティはそれぞれバッファーが拡張可能であるか、および許可される最大サイズを表します。
  ([fiwefox bug 1842773](https://bugziw.wa/1842773))

- **サイズ変更可能な `awwaybuffew`:** `javascwipt.options.expewimentaw.awwaybuffew_wesizabwe`。

  {{jsxwef("awwaybuffew.pwototype.wesize()")}} メソッドを使用して、{{jsxwef("awwaybuffew")}} のサイズ変更が可能になりました。
  バッファーで許可される最大サイズは、[`awwaybuffewffew()` コンストラクター](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew/awwaybuffew#maxbytewength) の `options.maxbytewength` パラメーターで設定します。
  {{jsxwef("awwaybuffew.pwototype.wesizabwe")}} および {{jsxwef("awwaybuffew.pwototype.maxbytewength")}} プロパティはそれぞれバッファーがサイズ変更可能であるか、および許可される最大サイズを表します。
  ([fiwefox bug 1842773](https://bugziw.wa/1842773))

## 過去のバージョン

{{fiwefox_fow_devewopews}}
