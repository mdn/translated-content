---
title: 帰属レポート API
slug: Web/API/Attribution_Reporting_API
l10n:
  sourceCommit: f5fd4776d1c0cd6e4cffc9649f7c4f44badb7ae2
---

{{SeeCompatTable}}{{securecontext_header}}{{DefaultAPISidebar("Attribution Reporting API")}}

**帰属レポート API**は、例えば、ユーザーがあるサイトに埋め込まれた広告をクリックし、その後、ベンダーのサイトでアイテムを購入した場合など、開発者がコンバージョンを測定し、それらのコンバージョンに関するレポートにアクセスすることができるようにします。これにはサードパーティのトラッキングクッキーに頼る必要はありません。

## 概念と使い方

広告主は通常、広告を閲覧したユーザーのうち、その後に製品を閲覧し購入するユーザーの数（コンバージョン）を測定したいと考えています。 これによって、広告掲載が投資収益率 (ROI) に最も大きな影響を与えているかを把握し、それに応じて広告戦略を調整することができます。 コンバージョンを測定するプロセスでは、通常、以下のようなデータの取得が含まれます。

- どのユーザーがコンバージョンしたか（例えば、アイテムを購入した、またはサービスにサインアップした）、またその数はいくつか。
- 彼らが拠点としている地域。
- 広告が掲載されていたサイト。
- 販売された製品数、契約されたサービス数など。
- どのくらいの収益が得られたか。

従来、ウェブ上では、サードパーティのトラッキングクッキーを使用してコンバージョンが測定されてきました。広告は通常、ウェブページに {{htmlelement("iframe")}} として埋め込まれ、ユーザーおよび広告に対する操作に関する情報を含むクッキーを設定することができます。

その後、ユーザーが広告主のサイトを訪問することを決定した際にも、広告と同じドメインからそれが提供され、そのサイトは以前広告から設定されたサードパーティクッキーにアクセスすることができます。広告主は、広告から得たデータを自分自身で関連付け、最初のデータと関連付けることで、「ユーザーが他のサイトで商品広告を操作した後、その商品を購入したか？」といった質問に答えることができます。

これはユーザーの[プライバシー](/ja/docs/Web/Privacy)の観点から問題があります。この時点で、同じドメインのどのページでもそのクッキーにアクセスでき、さらにそのページを埋め込んでいるサイトからの情報も入手できます。驚くほど多くの関係者がそのデータにアクセスでき、ユーザーの閲覧履歴に基づいて他のデータも推測できます。

帰属レポート API は、ユーザーのプライバシーを保護しながら広告のコンバージョンを測定する方法を提供します。

### どのように動作するか

帰属レポート API の仕組みを例を挙げて説明しましょう。

例えば、オンラインショップ `shop.example` （広告主）が、コンテンツサイト `news.example` （出版者）に自社製品の広告を埋め込んだとします。広告内容は、 `ad.shop.example` で探します。

オンラインショップのオーナーは、広告を操作するユーザー、サイト上の製品ページを閲覧するユーザー、ショッピングカートに製品を入れるユーザーから、どれだけのコンバージョンを獲得しているかを測定したいと考えています。

![下記に記述されている段階の画像表現](ara-flow.svg)

手順は次のとおりです。

1. ユーザーが `news.example` サイトを訪問すると、埋め込み広告に対する特定のユーザー操作に対して**帰属ソース**を登録することができます。ユーザーがページ上の広告を操作する方法はいくつかあります。広告操作を帰属ソースとして登録するには、広告が {{httpheader("Attribution-Reporting-Eligible")}} ヘッダー付きのリクエストを送信し、レスポンスが帰属ソースとして登録可能であることを示す必要があります。レスポンスに適切な {{httpheader("Attribution-Reporting-Register-Source")}} ヘッダーが含まれていれば、登録は完全に完了します。帰属ソースは、例えば次のような形になります。
   - リンク。この場合、操作はユーザーがリンクをクリックすることです（{{htmlelement("a")}} 要素から直接、または {{domxref("Window.open()")}} を呼び出して）。ソースは、ナビゲーションリクエストへのレスポンスによって登録されます。
   - 広告バナーや 1x1 の透明トラッキングピクセルなどの画像。この場合、ユーザーがページを訪問することが操作となります。画像が読み込まれた時、すなわちサーバーが画像のリクエストに応答した時に、ソースが登録されます。
   - フェッチリクエスト（つまり、 {{domxref("Window/fetch", "fetch()")}} や {{domxref("XMLHttpRequest")}}）。この場合、操作はアプリにとって意味のあるものとして指定することができます。例えば、フェッチリクエストは `click` または `submit` イベントによって呼び出されるようにできます。レスポンスが返されると、ソースが登録されます。
2. 属性ソースのやり取りが発生すると、 {{httpheader("Attribution-Reporting-Register-Source")}} ヘッダーで返されたソースデータは、ブラウザーのみがアクセスできるプライベートなローカルキャッシュに保存されます。これには、ページと広告主が利用できるコンテキストデータとファーストパーティデータ、コンバージョンデータを収集している広告テクノロジー企業のオリジン、その広告からのコンバージョンが期待される 1 つ以上の出力先（[eTLD+1](/ja/docs/Glossary/eTLD)）（例えば広告主のサイト（複数）、例えば `shop.example`）が含まれます。
3. ユーザーが後で `shop.example` を訪問すると、このサイトは、コンバージョンが発生したことを示す操作が行われた際に（例えば、ユーザーが `shop.example` 上の「カートに追加する」ボタンをクリックした場合など）、**帰属トリガー**を登録することができます。すると、ブラウザーは、レスポンスが帰属トリガーの登録に適していることを示すために、 {{httpheader("Attribution-Reporting-Eligible")}} ヘッダーとともにリクエストを送信します。レスポンスに適切な {{httpheader("Attribution-Reporting-Register-Trigger")}} ヘッダーが記載されていれば、登録は完全に完了します。帰属トリガーは、例えば以下のようなものです。
   - ショッピングカートアイコンや、 1x1 の透明トラッキングピクセルなどの画像。この場合、操作とはユーザーがページを訪問することです。開始する条件は、画像が読み込まれたとき、すなわちサーバーが画像リクエストに応答したときに登録されます。
   - フェッチリクエスト（{{domxref("Window/fetch", "fetch()")}} または {{domxref("XMLHttpRequest")}}）。この場合、操作はアプリにとって意味のあるものとして指定することができます。例えば、フェッチリクエストは `click` や `submit` イベントによって呼び出されるようにできます。レスポンスが返されると、トリガーが登録されます。
4. トリガーの帰属が完全に完了すると、ブラウザーは [Attribution-Reporting-Register-Trigger](/ja/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger) ヘッダーのデータと、プライベートローカルキャッシュ（2.を参照）に保存されているソースデータ項目を照合しようと試みます。 照合の方法と要求される条件については、「[帰属トリガーの登録](/ja/docs/Web/API/Attribution_Reporting_API/Registering_triggers)」を参照してください。
5. 一致するものが見つかると、ブラウザーはレポートデータを、広告テクノロジープロバイダーが仕様上所有するレポートサーバー上のエンドポイントに送信し、そこで安全に分析されます。クッキーとは異なり、データは送信先の特定のサイトでのみ利用でき、他の場所で共有されることはありません。これらのレポートは次のいずれかになります。
   - **イベントレベルレポート**: 詳細なソースデータが生トリガーデータと関連付けられ、属性ソースイベントに基づきレポートします。例えば、「`ad.shop.example` のクリック ID 200498 が `shop.example` での購入につながった」というレポートを見ていくと、「クリック ID 200498」が詳細ソースデータであり、「購入」が生トリガーデータです。詳細ソースデータはソースページからの最初のデータまたはコンテキストデータをエンコード方式で表し、トリガーデータはトリガーページからのイベントをエンコードして表します。
   - **概要レポート**: ソース側とトリガー側の両方で複数のコンバージョンからデータを結合した、より詳細なレポート。例えば、「`news.example` のキャンペーン ID 774653 により、イタリアのユーザーによる `shop.example` でのウィジェットの販売が 654 件発生しており、総収益は 9540 ドルです。」 概要レポートをコンパイルするには、集約サービス（例えば [Google 集約サービス](https://github.com/privacysandbox/aggregation-service) など）を使用する事が必要です。

以上のような手順で要求される機能の実装に関する詳細情報については、以下をご覧ください。

1. [帰属ソースの登録](/ja/docs/Web/API/Attribution_Reporting_API/Registering_sources)
2. [帰属トリガーの登録](/ja/docs/Web/API/Attribution_Reporting_API/Registering_triggers)
3. [レポートの作成](/ja/docs/Web/API/Attribution_Reporting_API/Generating_reports)

## インターフェイス

帰属レポートAPIは、自分自身で明確なインターフェイスを定義していません。

### 他のインターフェイスの拡張

- {{domxref("HTMLAnchorElement.attributionSrc")}}, {{domxref("HTMLImageElement.attributionSrc")}}, {{domxref("HTMLScriptElement.attributionSrc")}}
  - : `attributionSrc` プロパティを使用すると、{{htmlelement("a")}}、{{htmlelement("img")}}、{{htmlelement("script")}} の各要素の `attributionsrc` 属性を取得したり、設定したりすることができます。これは、その属性の値を反映します。
- {{domxref("Window/fetch", "fetch()")}} および {{domxref("Request.Request", "Request()")}} コンストラクターの `attributionReporting` オプション
  - : {{domxref("Window/fetch", "fetch()")}} を使用してリクエストを生成する場合、これによってレスポンスに属性ソースを登録したり、開始したりできるようにしたいことを示します。
- {{domxref("XMLHttpRequest.setAttributionReporting()")}}
  - : {{domxref("XMLHttpRequest")}} 経由でリクエストを生成する場合、これによってレスポンスが属性ソースを登録したり、開始したりできるようにしたいことを示します。
- {{domxref("Window.open()")}} の `attributionsrc` 特性キーワード
  - : `open()` メソッドが完了すると、帰属ソースの登録が完全に完了し、関連付けられたソースデータ（{{httpheader("Attribution-Reporting-Register-Source")}} レスポンスヘッダーで指定されたもの）をブラウザーに保存するようトリガーされます。なお、 `Window.open()` の呼び出しは、帰属トリガーの登録には使用できません。

## HTML 要素

- {{htmlelement("a")}}, {{htmlelement("img")}}, {{htmlelement("script")}} — `attributionsrc` 属性
  - : 関連付けられたリソースリクエストとともに、ブラウザーに {{httpheader("Attribution-Reporting-Eligible")}} ヘッダーを送信することを指定します。サーバー側では、このヘッダーはレスポンスで {{httpheader("Attribution-Reporting-Register-Source")}} または {{httpheader("Attribution-Reporting-Register-Trigger")}} ヘッダーを送信するトリガーとして使用されます。 属性ソースを登録する際には、これは必須です。 属性トリガーを登録する際には、 `src` 属性が指しているリソースに別個の登録サーバーを指定したい場合にのみ要求されます。なお、 `<a>` 要素は属性トリガーの登録に使用できません。

## HTTP ヘッダー

- {{httpheader("Attribution-Reporting-Eligible")}}
  - : 対応するレスポンスが、帰属ソースを登録する、または開始するのに適格であることを示す HTTP リクエスト。
- {{httpheader("Attribution-Reporting-Register-Source")}}
  - : ページ機能を帰属ソースとして登録する HTTP レスポンス。これは、 `Attribution-Reporting-Eligible` ヘッダーが含まれたリクエストに対するレスポンスの一部として含まれます。
- {{httpheader("Attribution-Reporting-Register-Trigger")}}
  - : ページ機能を属性トリガーとして登録する HTTP レスポンス。これは、 `Attribution-Reporting-Eligible` ヘッダーが含まれたリクエストに対するレスポンスの一部として含まれます。
- {{httpheader("Permissions-Policy")}} {{httpheader('Permissions-Policy/attribution-reporting','attribution-reporting')}} ディレクティブ
  - : 現在の文書が帰属レポートを使用することを許可するかどうかを制御します。

## 登録およびローカルテスト

自分のサイトで帰属レポート API を使用するには、[プライバシーサンドボックス登録プロセス](/ja/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment)でそれを指定する必要があります。これを行わないと、 API フローはレスポンス時点でブロックされ、レスポンスヘッダーが無視され、ソースとトリガーが登録されません。

ローカルで、登録せずに帰属レポート API のコードをテストすることは可能です。ローカルでテストできるようにするには、次の Chrome 開発者フラグを有効にしてください。

`chrome://flags/#privacy-sandbox-enrollment-overrides`

## 例

実装例については [Demo: Attribution Reporting API](https://arapi-home.web.app/) をご覧ください（[ソースコード](https://github.com/GoogleChromeLabs/trust-safety-demo/tree/main/attribution-reporting)も参照）。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Attribution Reporting Header Validation tool](https://wicg.github.io/attribution-reporting-api/validate-headers)
- [Attribution reporting](https://privacysandbox.google.com/private-advertising/attribution-reporting/) on privacysandbox.google.com (2023)
- [Enable conversion measurement](https://privacysandbox.google.com/private-advertising/attribution-reporting/enable-conversion-measurement) on privacysandbox.google.com (2023)
- [The Privacy Sandbox](https://privacysandbox.google.com/) on privacysandbox.google.com (2023)
