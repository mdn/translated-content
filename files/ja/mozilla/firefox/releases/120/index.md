---
title: Firefox 120 for developers
slug: Mozilla/Firefox/Releases/120
l10n:
  sourceCommit: 692015f089ff03699f0fe58814502b157c3e92ea
---

このページでは、開発者に影響する Firefox 120 の変更点をまとめています。Firefox 120 は、米国時間 [2023 年 11 月 21 日](https://whattrainisitnow.com/release/?version=120) にリリースされました。

## ウェブ開発者向けの変更点一覧

### HTML

- [`<source>`](/ja/docs/Web/HTML/Reference/Elements/source) 要素の `media` 属性のサポートを再導入して、`<audio>` および `<video>` 要素を含むように拡張しました。この属性は Firefox 15 で最初に追加しましたが、用途が `<picture>` の内部の`<source>` 要素に限定されたため Firefox 53 で削除しました。このリリースでは `media` 属性が `<audio>`、`<video>`、`<picture>` の内部の `<source>` 要素で使用可能になります ([Firefox bug 1836128](https://bugzil.la/1836128))。

### CSS

- {{CSSXref("color_value/light-dark", "light-dark()")}} CSS カラー関数をサポートしました。これは、`prefers-color-scheme` メディア特性を必要とせずにライトおよびダークの色を設定できます ([Firefox bug 1856999](https://bugzil.la/1856999))。
- 行の高さの単位 [`lh` および `rlh`](/ja/docs/Learn_web_development/Core/Styling_basics/Values_and_units#line_height_units) をサポートしました。これらは、たとえば複数行のテキストと背景の装飾を正確に揃えるなど、要素の行の高さに対して相対的にプロパティを設定できます ([Firefox bug 1310170](https://bugzil.la/1310170))。

#### 廃止

- 背景画像を切り抜くための非標準 CSS 関数である {{cssxref("-moz-image-rect")}} を削除しました。この関数は最初に Firefox 4 で導入してから標準化されず、またほかのブラウザーは実装していません ([Firefox bug 1856999](https://bugzil.la/1853867))。

### JavaScript

- {{jsxref("Date.parse()")}} が追加の日付形式をいくつか受け入れるようになりました。
  - 正式な ISO 標準に合致しない、ハイフン区切りの数値による日付を受け入れるようになりました ([Firefox bug 1557650](https://bugzil.la/1557650))。たとえば以下のような形式です:
    - `"01-12-1999"` (初めに月)
    - `"1999-1-5"` (月や日が 1 桁)
    - `"10000-01-12"` (年が 9999 より大きい)
    - `"99-01-05"` または `"01-05-99"` (年が 2 桁、初めに年を置く場合は 31 より大きくなければならない)
    - `"1999-01-05 10:00:00"` (日付と時刻の間に空白がある)

    これらの日付はローカルタイムゾーンや日付のロールオーバー (4 月 31 日は存在しないため 5 月 1 日にロールオーバーする) など、ほかの ISO 形式でない日付に対して典型的な動作によって解析されます。

  - 数字の直後に置く文字の要件を、新たな形式を受け入れるために緩和しました ([Firefox bug 449921](https://bugzil.la/449921))。たとえば以下のような形式です:
    - `"DDMonYYYY"`
    - `"Mon.DD.YYYY"`
    - `"DD.Mon.YYYY"`
    - `"YYYY.MM.DD"`
    - `"Mon DD YYYY hh:mmXm"` (`am`/`pm` を時刻の直後に置く)

  - ISO 形式でない日時でタイムゾーン `'Z'` を受け入れるようになりました (例: `Jan 1 1970 10:00Z`) ([Firefox bug 1852422](https://bugzil.la/1852422))

### SVG

変更なし。

### HTTP

- [`103 Early Hints`](/ja/docs/Web/HTTP/Reference/Status/103) HTTP [情報レスポンス](/ja/docs/Web/HTTP/Reference/Status#information_responses) ステータスコードが、(ページでリソースを読み込むことが必要と思われる) 特定のオリジンへの [事前接続](/ja/docs/Web/HTML/Reference/Attributes/rel/preconnect) に対して有効になりました。
  詳しくは [Firefox bug 1858712](https://bugzil.la/1858712) をご覧ください。
- Firefox で [Global Privacy Control](https://globalprivacycontrol.org/) の {{HTTPHeader("Sec-GPC")}} リクエストヘッダーをサポートしました。これは、ウェブサイトやサービスが個人情報をサードパーティに販売あるいは共有することに同意しないことを示すために送信できます。
  ユーザーは (`about:config` で) 設定項目 `privacy.globalprivacycontrol.enabled` を `true` に設定することで、このヘッダーを通常のブラウジングとプライベートブラウジングの両方で有効化できます。
  {{domxref("Navigator.globalPrivacyControl")}} および {{domxref("WorkerNavigator.globalPrivacyControl")}} プロパティで、ユーザーが設定を許可しているかを JavaScript で確認できます ([Firefox bug 1856029](https://bugzil.la/1856029))。

### セキュリティ

変更なし。

### API

- {{domxref("PublicKeyCredential")}} インターフェイスの {{domxref("PublicKeyCredential.authenticatorAttachment", "authenticatorAttachment")}} プロパティをサポートしました。
  これはウェブアプリケーションのクライアントやサーバーのコードが、認証システムがウェブ認証を実行しているデバイスの一部であるか、デバイス間に渡ることができるかに応じて応じて自身を構成することを可能にします ([Firefox bug 1810851](https://bugzil.la/1810851))。
- [Web Authentication API](/ja/docs/Web/API/Web_Authentication_API) の [Minimum PIN Length Extension (`minPinLength`)](/ja/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#minpinlength) をサポートしました。これは Relying Party のサーバーが認証システムに対して、PIN を作成または登録するときに最短の長さを要求できるようにします ([Firefox bug 1844450](https://bugzil.la/1844450))。
- {{domxref("Navigator.userActivation")}} プロパティおよび {{domxref("UserActivation")}} インターフェイスをサポートしました。
  これらはユーザーがページと対話しているか、あるいはページが読み込まれてから対話したかを確認するために使用できます ([Firefox bug 1791079](https://bugzil.la/1791079))。

### WebDriver conformance (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- `Proxy` および `Generator` オブジェクトのシリアライズをサポートしました ([Firefox bug 1841786](https://bugzil.la/1841786))。
- `responseStarted` および `responseCompleted` イベントに、`authChallenges` プロパティ (ヘッダーに存在している認証チャレンジのリスト) を追加しました。これは、後に続く `network.authRequired` イベントを処理するの役立つでしょう ([Firefox bug 1855149](https://bugzil.la/1855149))。

## アドオン開発者向けの変更点一覧

変更なし。

## 過去のバージョン

{{Firefox_for_developers(119)}}
