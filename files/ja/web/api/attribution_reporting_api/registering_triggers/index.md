---
title: 帰属トリガーの登録
slug: Web/API/Attribution_Reporting_API/Registering_triggers
l10n:
  sourceCommit: d22284cbba8b64afd6ad8c965d4ac2c927c59550
---

{{DefaultAPISidebar("Attribution Reporting API")}}

この記事では、帰属トリガーを登録する方法について説明します。

## 基本的な手法

[帰属ソースを登録したら](/ja/docs/Web/API/Attribution_Reporting_API/Registering_sources)、帰属トリガーを登録する必要があります。これは、コンバージョンが測定されるサイトでの操作です（例えば、広告主のサイトで「購入」ボタンをクリックすると、コンバージョンが発生した可能性があることを示すことができます）。その後、ブラウザーは、プライベートローカルストレージ区画に格納されている帰属ソースの項目と帰属トリガーを照合し、一致するものが見つかった場合は[レポートを生成](/ja/docs/Web/API/Attribution_Reporting_API/Generating_reports)します。

帰属トリガーの種類が異なると、その登録方法も異なります。詳細については、下記の「[HTML ベースの帰属トリガー](#html_ベースの帰属トリガー)」および「[JavaScript ベースの帰属トリガー](#javascript_ベースの帰属トリガー)」の節を参照してください。

ただし、トリガーの登録、照合など、その背後で行われる処理は、すべての場合で同じです。

1. すべての種類のトリガーは、リクエスト時に {{httpheader("Attribution-Reporting-Eligible")}} ヘッダーを送信します。これは、レスポンスがトリガーの登録対象であることを示します。例えば次のようになります。

   ```http
   Attribution-Reporting-Eligible: trigger
   ```

2. サーバーが `Attribution-Reporting-Eligible` ヘッダーを含むリクエストを受信すると、レスポンスに {{httpheader("Attribution-Reporting-Register-Trigger")}} を含めることがあります。その値は、トリガーの ID、優先度、重複排除値など、生成されるレポートに含めることができるデータを含む JSON 文字列です。

   次の例は、[イベントレベルレポート](/ja/docs/Web/API/Attribution_Reporting_API/Generating_reports#イベントレベルのレポート)帰属ソースと照合するためのものです。

   ```js
   res.set(
     "Attribution-Reporting-Register-Trigger",
     JSON.stringify({
       event_trigger_data: [
         {
           trigger_data: "4",
           priority: "1000000000000",
           deduplication_key: "2345698765",
         },
       ],
       debug_key: "1115698977",
     }),
   );
   ```

   ここで指定されているフィールドは次のとおりです。
   - `"event_trigger_data"`: トリガーに関するデータを表すオブジェクト。これには以下のものが含まれます。
     - `"trigger_data"`: トリガーに関連付けられたデータ。通常、「ユーザーがショッピングカートに商品を追加した」や「ユーザーがメーリングリストに登録した」などのイベントを示すために使用されます。この値は、生成されたレポートに含まれますが、関連付けられたソースの [`"trigger_data_matching"`](/ja/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#trigger_data_matching) フィールドに基づいて変更される場合があります。
       > [!NOTE]
       > それぞれのイベントを表す値、および配列の要素数は完全に任意であり、開発者が定義します。配列には使用されない値を含めることもできますが、トリガーが登録されたときにブラウザーがソースに属性を付与するには、配列に値が存在している必要があります。
     - `"priority"`: 帰属トリガーの優先度値を表す文字列。詳細については、[レポートの優先順位と制限](/ja/docs/Web/API/Attribution_Reporting_API/Generating_reports#レポートの優先順位と制限)を参照してください。
     - `"deduplication_key"`: 関連付けの重複を防ぐために使用できる一意のキーを表す文字列。例えば、ユーザーが同じアイテムをショッピングカートに複数回追加した場合などです。詳細については、[レポートでの重複の防止](https://privacysandbox.google.com/private-advertising/attribution-reporting/prevent-duplication)（英語）をご覧ください。
   - `"debug_key"`: デバッグキーを表す数値。関連付けられた帰属レポートの横に[デバッグレポート](/ja/docs/Web/API/Attribution_Reporting_API/Generating_reports#デバッグレポート)を生成したい場合に設定します。

   利用可能なすべてのフィールドの詳細については、{{httpheader("Attribution-Reporting-Register-Trigger")}} を参照してください。

   [概要レポート](/ja/docs/Web/API/Attribution_Reporting_API/Generating_reports#概要レポート)帰属ソースと一致するように意図されたトリガーには、下記に示すフィールドが要求されます。

   ```js
   res.set(
     "Attribution-Reporting-Register-Trigger",
     JSON.stringify({
       aggregatable_trigger_data: [
         {
           key_piece: "0x400",
           source_keys: ["campaignCounts"],
         },
         {
           key_piece: "0xA80",
           source_keys: ["geoValue", "nonMatchingKeyIdsAreIgnored"],
         },
       ],
       aggregatable_values: {
         campaignCounts: 32768,
         geoValue: 1664,
       },
       debug_key: "1115698977",
     }),
   );
   ```

   この例でのフィールドは次のとおりです。
   - `"aggregatable_trigger_data"`: オブジェクトの配列。それぞれのオブジェクトは、異なるソースキーに適用する集約キーを定義します。
   - `"aggregatable_values"`: `"aggregatable_trigger_data"` で定義されたそれぞれのデータポイントの値を表すプロパティを含むオブジェクト。

   利用可能なすべてのフィールドの詳細については、 {{httpheader("Attribution-Reporting-Register-Trigger")}} を参照してください。

3. ユーザーが帰属トリガーと対話すると、ブラウザーは、ブラウザーのプライベートローカルキャッシュに格納されている帰属ソースの項目とトリガーを照合しようとします。照合が成功するの、 `Attribution-Reporting-Register-Trigger` の [`"trigger_data"`](/ja/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger#trigger_data) が、 {{httpheader("Attribution-Reporting-Register-Source")}} の [`"trigger_data"`](/ja/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#trigger_data) で指定された値のいずれかと一致し、トリガーが登録されている最上位のページ（スキーム + [eTLD+1](/ja/docs/Glossary/eTLD)）が、以下の条件を満たしている必要があります。
   - ソースに関連付けられたデータで指定された `destination` のうち、少なくとも 1 つと一致する。
   - ソース登録を指定したリクエストと同じオリジンである。

   > [!NOTE]
   > これらの要件はプライバシー保護だけでなく、柔軟性も提供します。ソースとトリガーは、 {{htmlelement("iframe")}} に埋め込むことも、最上位のサイトに配置することも可能です。

   照合の結果が一致しない要因は他にもたくさんあります。例えば、次のようなものがあります。
   - トリガーのフィルターがソースのフィルターデータと一致しなかった（詳細については、[フィルター](/ja/docs/Web/API/Attribution_Reporting_API/Generating_reports#フィルター)を参照してください）。
   - ソースの [`"trigger_data_matching"`](/ja/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#trigger_data_matching) 設定により、一致しなかった。
   - ソースの [`"max_event_level_reports"`](/ja/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#max_event_level_reports) の制限に達した。
   - ブラウザーのランダムなレスポンスアルゴリズムにより、一致しても報告されなかった。詳細については、[レポートにノイズを追加](/ja/docs/Web/API/Attribution_Reporting_API/Generating_reports#レポートにノイズを追加)を参照してください。

4. 一致するものが見つかった場合、ブラウザーはソースとトリガーデータに基づいて[レポートを生成](/ja/docs/Web/API/Attribution_Reporting_API/Generating_reports)し、それをレポートのエンドポイントに送信します。

> [!NOTE]
> 帰属トリガーは、帰属ソースと同様に、{{htmlelement("a")}} 要素または {{domxref("Window.open()")}} 呼び出しには登録できません。

## HTML ベースの帰属トリガー

HTML ベースの帰属トリガーは、ページが最初に読み込まれたとき、より正確には `<img>` または `<script>` が読み込まれたときに、ページでのコンバージョンを検出するために使用することができます。例えば、ユーザーがサイト運営者のページで帰属ソースのリンクをクリックして広告主のページに移動した場合、帰属トリガーを登録しておくと、広告主のページが読み込まれた瞬間に、ブラウザーが格納されているソース項目と照合を試みます。

適切な要素に `attributionsrc` 属性を追加することで、属性トリガーを登録することができます。これは、 {{htmlelement("img")}} および {{htmlelement("script")}} 要素で実行できます。

属性値を空白のままにすると、リクエストされたリソースがホストされているサーバーに登録リクエストが送信されます。値内に、登録リクエストを送信する追加の URL を指定することも可能です。詳細については、 [attributionsrc 内での URL の指定](#attributionsrc_内での_url_の指定)を参照してください。

以下は `<img>` 要素の例です。

```html
<img
  src="https://shop.example/conversion/4rghshdh5"
  width="1"
  height="1"
  attributionsrc />
```

{{domxref("HTMLImageElement.attributionSrc")}} プロパティを使用しても、これと同じ結果を得ることができます。

```js
const imgElem = document.querySelector("img");
imgElem.attributionSrc = "";
```

この場合、ブラウザーは、画像ファイルを含むレスポンスを受信したとき（`load` イベントが発生したとき）、保存されている帰属ソースとトリガーを照合しようとします。ユーザーは必ずしもその画像をまったく認識できない場合があることにご留意ください。その画像は、帰属レポートのためにのみ使用される 1x1 の透明なトラッキングピクセルである場合もあります。

{{htmlelement("script")}} の例は、次のように表示されます。

```html
<script src="advertising-script.js" attributionsrc></script>
```

```js
const scriptElem = document.querySelector("script");
scriptElem.attributionSrc = "";
```

この場合、ブラウザーは、スクリプトを含むレスポンスを受信すると、格納されている帰属ソースとトリガーの照合を試みます。

## JavaScript ベースの帰属トリガー

JavaScript ベースの帰属トリガーは、HTML ベースの帰属トリガーよりも汎用性があります。例えば、カスタム要素をクリックしたり、フォームを送信したりといった独自の操作に基づいて、保存されているソースとの一致を試みるようブラウザーにトリガーを送信することができます。

スクリプトベースの属性トリガーを登録するには、次のいずれかを実行します。

- {{domxref("Window/fetch", "fetch()")}} リクエストを、 `attributionReporting` オプション付きで送信します。

  ```js
  const attributionReporting = {
    eventSourceEligible: false,
    triggerEligible: true,
  };

  // オプションで keepalive を設定して、リクエストがページよりも長く存続するようにする
  function triggerMatching() {
    fetch("https://shop.example/endpoint", {
      keepalive: true,
      attributionReporting,
    });
  }

  // 操作のトリガーを、コードにとって意味のある要素やイベントに関連付ける
  elem.addEventListener("click", triggerMatching);
  ```

- {{domxref("XMLHttpRequest")}} を、このリクエストオブジェクトで呼び出される {{domxref("XMLHttpRequest.setAttributionReporting", "setAttributionReporting()")}} を付けて送信します。

  ```js
  const attributionReporting = {
    eventSourceEligible: false,
    triggerEligible: true,
  };

  function triggerMatching() {
    const req = new XMLHttpRequest();
    req.open("GET", "https://shop.example/endpoint");
    // 呼び出し前に setAttributionReporting() が使えるかチェック
    if (typeof req.setAttributionReporting === "function") {
      req.setAttributionReporting(attributionReporting);
      req.send();
    } else {
      throw new Error("帰属レポートは利用できません");
      // 必要に応じて、ここに回復コードを記載する
    }
  }

  // 操作のトリガーを、コードにとって意味のあるイベント
  // （DOM イベントやユーザー操作である必要はない）に関連付ける
  elem.addEventListener("click", triggerMatching);
  ```

この場合、ブラウザーは、フェッチリクエストからのレスポンスを受信すると、トリガーを格納されている帰属ソースと照合しようとします。

> [!NOTE]
> リクエストは、任意のリソースに対して行うことができます。帰属レポート API と直接関係のある何らかのリソースである必要はなく、JSON、プレーンテキスト、画像 blob、その他アプリにとって意味のあるものなら何でもリクエストできます。

## attributionsrc 内での URL の指定

上記の例では、`attributionsrc` 属性は空白のままにして、空文字列の値を取っています。リクエストされたリソースを保持するサーバーが、登録の処理（つまり、{{httpheader("Attribution-Reporting-Eligible")}} ヘッダーを受信し、{{httpheader("Attribution-Reporting-Register-Trigger")}} ヘッダーで応答する）を行うサーバーと同じである場合は、これで問題ありません。

ただし、リクエストされたリソースが自分で制御できるサーバー上にない場合や、別のサーバーで帰属情報のトリガーの登録を処理したい場合などもあるでしょう。そのような場合は、`attributionsrc` の値として 1 つ以上の URL を指定することができます。リソースのリクエストが発生すると、リソースの送信元に加えて、`attributionsrc` で指定した URL に {{httpheader("Attribution-Reporting-Eligible")}} ヘッダーが送信されます。その後、URL は {{httpheader("Attribution-Reporting-Register-Trigger")}} で応答し、登録が完了します。

例えば、`<img>` 要素の場合、`attributionsrc` 属性で URL を宣言することができます。

```html
<img
  src="https://shop.example/conversion/4rghshdh5"
  attributionsrc="https://my-separate-tracking-site.example.com"
  width="1"
  height="1" />
```

または、JavaScript で `attributionSrc` プロパティを使用して指定します。

```js
const imgElem = document.querySelector("img");
imgElem.attributionSrc = "https://my-separate-tracking-site.example.com";
```

## 関連情報

- [Attribution Reporting Header Validation tool](https://wicg.github.io/attribution-reporting-api/validate-headers)
