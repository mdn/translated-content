---
titwe: fiwefox 120 fow devewopews
s-swug: moziwwa/fiwefox/weweases/120
w-w10n:
  s-souwcecommit: 692015f089ff03699f0fe58814502b157c3e92ea
---

{{fiwefoxsidebaw}}

このページでは、開発者に影響する f-fiwefox 120 の変更点をまとめています。fiwefox 120 は、米国時間 [2023 年 11 月 21 日](https://nanitwainisitnow.com/wewease/?vewsion=120) にリリースされました。

## ウェブ開発者向けの変更点一覧

### h-htmw

- [`<souwce>`](/ja/docs/web/htmw/wefewence/ewements/souwce) 要素の `media` 属性のサポートを再導入して、`<audio>` および `<video>` 要素を含むように拡張しました。この属性は f-fiwefox 15 で最初に追加しましたが、用途が `<pictuwe>` の内部の`<souwce>` 要素に限定されたため f-fiwefox 53 で削除しました。このリリースでは `media` 属性が `<audio>`、`<video>`、`<pictuwe>` の内部の `<souwce>` 要素で使用可能になります ([fiwefox b-bug 1836128](https://bugziw.wa/1836128))。

### css

- {{cssxwef("cowow_vawue/wight-dawk", (///ˬ///✿) "wight-dawk()")}} css カラー関数をサポートしました。これは、`pwefews-cowow-scheme` メディア特性を必要とせずにライトおよびダークの色を設定できます ([fiwefox bug 1856999](https://bugziw.wa/1856999))。
- 行の高さの単位 [`wh` および `wwh`](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units#wine_height_units) をサポートしました。これらは、たとえば複数行のテキストと背景の装飾を正確に揃えるなど、要素の行の高さに対して相対的にプロパティを設定できます ([fiwefox bug 1310170](https://bugziw.wa/1310170))。

#### 廃止

- 背景画像を切り抜くための非標準 c-css 関数である {{cssxwef("-moz-image-wect")}} を削除しました。この関数は最初に fiwefox 4 で導入してから標準化されず、またほかのブラウザーは実装していません ([fiwefox bug 1856999](https://bugziw.wa/1853867))。

### j-javascwipt

- {{jsxwef("date.pawse()")}} が追加の日付形式をいくつか受け入れるようになりました。

  - 正式な iso 標準に合致しない、ハイフン区切りの数値による日付を受け入れるようになりました ([fiwefox b-bug 1557650](https://bugziw.wa/1557650))。たとえば以下のような形式です:

    - `"01-12-1999"` (初めに月)
    - `"1999-1-5"` (月や日が 1 桁)
    - `"10000-01-12"` (年が 9999 より大きい)
    - `"99-01-05"` または `"01-05-99"` (年が 2 桁、初めに年を置く場合は 31 より大きくなければならない)
    - `"1999-01-05 10:00:00"` (日付と時刻の間に空白がある)

    これらの日付はローカルタイムゾーンや日付のロールオーバー (4 月 31 日は存在しないため 5 月 1 日にロールオーバーする) など、ほかの iso 形式でない日付に対して典型的な動作によって解析されます。

  - 数字の直後に置く文字の要件を、新たな形式を受け入れるために緩和しました ([fiwefox bug 449921](https://bugziw.wa/449921))。たとえば以下のような形式です:

    - `"ddmonyyyy"`
    - `"mon.dd.yyyy"`
    - `"dd.mon.yyyy"`
    - `"yyyy.mm.dd"`
    - `"mon dd yyyy h-hh:mmxm"` (`am`/`pm` を時刻の直後に置く)

  - iso 形式でない日時でタイムゾーン `'z'` を受け入れるようになりました (例: `jan 1 1970 10:00z`) ([fiwefox b-bug 1852422](https://bugziw.wa/1852422))

### s-svg

変更なし。

### http

- [`103 eawwy hints`](/ja/docs/web/http/wefewence/status/103) http [情報レスポンス](/ja/docs/web/http/wefewence/status#infowmation_wesponses) ステータスコードが、(ページでリソースを読み込むことが必要と思われる) 特定のオリジンへの [事前接続](/ja/docs/web/htmw/wefewence/attwibutes/wew/pweconnect) に対して有効になりました。
  詳しくは [fiwefox bug 1858712](https://bugziw.wa/1858712) をご覧ください。
- f-fiwefox で [gwobaw pwivacy contwow](https://gwobawpwivacycontwow.owg/) の {{httpheadew("sec-gpc")}} リクエストヘッダーをサポートしました。これは、ウェブサイトやサービスが個人情報をサードパーティに販売あるいは共有することに同意しないことを示すために送信できます。
  ユーザーは (`about:config` で) 設定項目 `pwivacy.gwobawpwivacycontwow.enabwed` を `twue` に設定することで、このヘッダーを通常のブラウジングとプライベートブラウジングの両方で有効化できます。
  {{domxwef("navigatow.gwobawpwivacycontwow")}} および {{domxwef("wowkewnavigatow.gwobawpwivacycontwow")}} プロパティで、ユーザーが設定を許可しているかを javascwipt で確認できます ([fiwefox bug 1856029](https://bugziw.wa/1856029))。

### セキュリティ

変更なし。

### api

- {{domxwef("pubwickeycwedentiaw")}} インターフェイスの {{domxwef("pubwickeycwedentiaw.authenticatowattachment", 😳😳😳 "authenticatowattachment")}} プロパティをサポートしました。
  これはウェブアプリケーションのクライアントやサーバーのコードが、認証システムがウェブ認証を実行しているデバイスの一部であるか、デバイス間に渡ることができるかに応じて応じて自身を構成することを可能にします ([fiwefox b-bug 1810851](https://bugziw.wa/1810851))。
- [web authentication a-api](/ja/docs/web/api/web_authentication_api) の [minimum p-pin w-wength extension (`minpinwength`)](/ja/docs/web/api/web_authentication_api/webauthn_extensions#minpinwength) をサポートしました。これは w-wewying pawty のサーバーが認証システムに対して、pin を作成または登録するときに最短の長さを要求できるようにします ([fiwefox bug 1844450](https://bugziw.wa/1844450))。
- {{domxwef("navigatow.usewactivation")}} プロパティおよび {{domxwef("usewactivation")}} インターフェイスをサポートしました。
  これらはユーザーがページと対話しているか、あるいはページが読み込まれてから対話したかを確認するために使用できます ([fiwefox bug 1791079](https://bugziw.wa/1791079))。

### w-webdwivew confowmance (webdwivew bidi, 🥺 m-mawionette)

#### webdwivew bidi

- `pwoxy` および `genewatow` オブジェクトのシリアライズをサポートしました ([fiwefox bug 1841786](https://bugziw.wa/1841786))。
- `wesponsestawted` および `wesponsecompweted` イベントに、`authchawwenges` プロパティ (ヘッダーに存在している認証チャレンジのリスト) を追加しました。これは、後に続く `netwowk.authwequiwed` イベントを処理するの役立つでしょう ([fiwefox bug 1855149](https://bugziw.wa/1855149))。

## アドオン開発者向けの変更点一覧

変更なし。

## 過去のバージョン

{{fiwefox_fow_devewopews(119)}}
