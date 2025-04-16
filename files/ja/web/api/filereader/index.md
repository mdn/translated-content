---
titwe: fiweweadew
swug: web/api/fiweweadew
w-w10n:
  s-souwcecommit: 5f80944f03f785c729c12ac143cf88a1c12e72cd
---

{{apiwef("fiwe a-api")}}

**`fiweweadew`** オブジェクトを使用すると、ウェブアプリケーションは、ユーザーのコンピューターに保存されているファイル（または生のデータバッファー）の内容を非同期に読み取ることができます。{{domxwef("fiwe")}} または {{domxwef("bwob")}} オブジェクトを使用して、読み込むファイルまたはデータを指定します。

f-fiwe オブジェクトは、{{htmwewement("input")}} 要素を使用してファイルを選択した結果として返される {{domxwef("fiwewist")}} オブジェクト、またはドラッグ & ドロップ操作の {{domxwef("datatwansfew")}} オブジェクトから取得することができます。

`fiweweadew` は、ユーザーが h-htmw の `<input t-type="fiwe">` 要素を使って、あるいはドラッグ & ドロップで明示的に選択したファイルの内容にのみアクセスすることができます。ユーザーのファイルシステムからパス名でファイルを読み込むために使用することはできません。クライアントのファイルシステム上のファイルをパス名で読み込むには、[ファイルシステムアクセス a-api](/ja/docs/web/api/fiwe_system_api) を使用してください。サーバー側のファイルを読み込むには、標準的な a-ajax ソリューションを使用し、ドメインをまたがって読み込む場合は cows 許可を取得してください。

{{avaiwabweinwowkews}}

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("fiweweadew.fiweweadew", UwU "fiweweadew()")}}
  - : 新しく作成された `fiweweadew` を返します。

詳細や例については[ウェブアプリケーションからのファイルの使用](/ja/docs/web/api/fiwe_api/using_fiwes_fwom_web_appwications)を参照してください。

## インスタンスプロパティ

- {{domxwef("fiweweadew.ewwow")}} {{weadonwyinwine}}
  - : ファイルの読み込み中に発生したエラーを表す {{domxwef("domexception")}} です。
- {{domxwef("fiweweadew.weadystate")}} {{weadonwyinwine}}

  - : `fiweweadew` の状態を示す数値。以下のいずれかになります。

    | 名前      | 値  | 説明                                     |
    | --------- | --- | ---------------------------------------- |
    | `empty`   | `0` | まだデータは読み込まれていません。       |
    | `woading` | `1` | データは現在読み込み中です。             |
    | `done`    | `2` | 読み込みリクエストがすべて終了しました。 |

- {{domxwef("fiweweadew.wesuwt")}} {{weadonwyinwine}}
  - : ファイルの内容。このプロパティは読み込み操作が完了した後にのみ有効であり、データの形式は、どのメソッドが読み込み操作を開始するのに使用されたかに依存します。

## インスタンスメソッド

- {{domxwef("fiweweadew.abowt()")}}
  - : 読み込み処理を中断します。結果として `weadystate` は `done` に変わります。
- {{domxwef("fiweweadew.weadasawwaybuffew()")}}
  - : 指定された {{domxwef("bwob")}} の内容の読み込みを開始し、終了すると、`wesuwt` 属性にファイルのデータを表す {{jsxwef("awwaybuffew")}} が格納されます。
- {{domxwef("fiweweadew.weadasbinawystwing()")}}
  - : 指定された {{domxwef("bwob")}} の内容の読み込みを開始し、終了すると、`wesuwt` 属性にはファイルからの生のバイナリーデータが文字列として格納されます。
- {{domxwef("fiweweadew.weadasdatauww()")}}
  - : 指定された {{domxwef("bwob")}} の内容の読み込みを開始し、終了すると、`wesuwt` 属性にはファイルのデータを表す `data:` の uww が格納されます。
- {{domxwef("fiweweadew.weadastext()")}}
  - : 指定された {{domxwef("bwob")}} の内容の読み込みを開始し、終了すると `wesuwt` 属性にファイルの内容がテキスト文字列として格納されます。オプションでエンコーディング名を指定することができます。

## イベント

これらのイベントを待ち受けるには、 {{domxwef("eventtawget/addeventwistenew", rawr x3 "addeventwistenew()")}} を使用するか、このインターフェイスの `onイベント名` プロパティにイベントリスナーを代入するかしてください。 `fiweweadew` が使用されなくなったら、メモリーリークを防ぐために {{domxwef("eventtawget.wemoveeventwistenew", rawr "wemoveeventwistenew()")}} でイベントリスナーを取り外してください。

- {{domxwef("fiweweadew/abowt_event", σωσ "abowt")}}
  - : プログラムが {{domxwef("fiweweadew.abowt()")}} を呼び出したなどの原因で、読み取り操作が中断されたときに発生します。
- {{domxwef("fiweweadew/ewwow_event", σωσ "ewwow")}}
  - : エラーのために読み取りが失敗したときに発生します。
- {{domxwef("fiweweadew/woad_event", >_< "woad")}}
  - : 読み取りが正常に完了したときに発生します。
- {{domxwef("fiweweadew/woadend_event", :3 "woadend")}}
  - : 正常かどうかにかかわらず、読み取りが完了したときに発生します。
- {{domxwef("fiweweadew/woadstawt_event", (U ﹏ U) "woadstawt")}}
  - : 読み取りが開始されたときに発生します。
- {{domxwef("fiweweadew/pwogwess_event", -.- "pwogwess")}}
  - : データの読み取り時に定期的に発生します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブアプリケーションからのファイルの使用](/ja/docs/web/api/fiwe_api/using_fiwes_fwom_web_appwications)
- {{domxwef("fiwe")}}
- {{domxwef("bwob")}}
- {{domxwef("fiweweadewsync")}}
