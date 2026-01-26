---
title: 帰属ソースの登録
slug: Web/API/Attribution_Reporting_API/Registering_sources
l10n:
  sourceCommit: d22284cbba8b64afd6ad8c965d4ac2c927c59550
---

{{DefaultAPISidebar("Attribution Reporting API")}}

この記事では、[帰属レポート API](/ja/docs/Web/API/Attribution_Reporting_API) を使用する場合に、帰属ソースを登録する方法について説明します。

## 基本的な手法

帰属ソースは、操作を測定したいコンテンツに含まれるリンク、画像、スクリプトなどの形で存在します（例えば、コンバージョンを測定したい広告など）。これらは、特定のユーザー操作が発生すると、ブラウザーはソースデータをプライベートなローカルキャッシュ（ブラウザーのみアクセス可能）に保存します。さまざまな帰属ソース型が登録されており、それぞれ異なる方法で操作を通知します。これらは次のように区別されます。

- ナビゲーションソース。これは、ナビゲーションに応じてブラウザーにソースデータを格納させるソースです。例えば、ユーザーがリンクをクリックしたり、キーボードでリンクをアクティブにしたり、 {{domxref("Window.open()")}} が呼び出されてナビゲーションが発生した場合などです。例については、[ナビゲーションベースの帰属ソース](#ナビゲーションベースの帰属ソース)を参照してください。
- イベントの発生に応じて、ブラウザーがソースデータを格納するために発行されるイベントソース。例については、[イベントベースの帰属ソース](#イベントベースの帰属ソース)を参照してください。

ソースを登録し、ソースデータを取得して格納するために裏で何が起こっているかは、どちらの場合も同様です。

1. ユーザーが帰属ソースに操作を行うと、その操作を測定するサーバー（通常は広告主のサーバー）へのリクエストに {{httpheader("Attribution-Reporting-Eligible")}} ヘッダーが送信され、レスポンスがソースの登録対象であることを示します。例えば次のようになります。

   ```http
   Attribution-Reporting-Eligible: navigation-source
   ```

2. サーバーが `Attribution-Reporting-Eligible` ヘッダーを含むリクエストを受信すると、ソース登録を完了するために、レスポンスに {{httpheader("Attribution-Reporting-Register-Source")}} ヘッダーを含めることができます。その値は、操作された帰属ソースに関する情報を、ブラウザーが保存すべき JSON 文字列です。このヘッダーに含まれる情報によって、ブラウザーが生成するレポートの種類も決定されます。
   - 次の例では、[トリガー](/ja/docs/Web/API/Attribution_Reporting_API/Registering_triggers)がソースと一致すると、[イベントレベルレポート](/ja/docs/Web/API/Attribution_Reporting_API/Generating_reports#イベントレベルのレポート)が生成されます。

     ```js
     res.set(
       "Attribution-Reporting-Register-Source",
       JSON.stringify({
         source_event_id: "412444888111012",
         destination: "https://advertiser.example",
         trigger_data: [0, 1, 2, 3, 4],
         trigger_data_matching: "exact",
         expiry: "604800",
         priority: "100",
         debug_key: "122939999",
         event_report_window: "86400",
       }),
     );
     ```

     このコンテキストで必須のフィールドは `destination` だけで、これはトリガーの発生が予想される 1～3 つのサイトを指定します。これらは、トリガーが作用したときに、帰属トリガーをソースと照合するために使用されます。上記で指定したその他のフィールドは、次の役割を果たします。
     - `"source_event_id"`: 帰属ソースの ID を表す文字列。帰属ソースが対話されたときに、それを他の情報に割り当てたり、レポートエンドポイントで情報を集約したりするために使用できます（エンドポイントの情報については、[レポートの生成 > 基本的なプロセス](/ja/docs/Web/API/Attribution_Reporting_API/Generating_reports#基本的な処理) を参照してください）。
     - `"trigger_data"`: このソースと一致する可能性のあるさまざまなトリガーイベントを記述する、32 ビットの符号なし整数の配列です。例えば、「ユーザーがショッピングカートにアイテムを追加した」や「ユーザーがメーリングリストに登録した」などは、このソースと一致するトリガーサイトで発生する措置であり、広告主が測定しようとしている何らかのコンバージョンを示す可能性があります。これらは、イベントレベルの関連付けを行うために、[トリガー](/ja/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger#trigger_data) で指定した `"trigger_data"` と一致する必要があります。
       > [!NOTE]
       > それぞれのイベントを表す値、および配列の要素数は完全に任意であり、開発者が定義します。配列には使用されない値を含めることもできますが、トリガーが登録されたときにブラウザーがソースに属性を付与するには、配列に値が存在している必要があります。
     - `"trigger_data_matching"`: トリガーの `"trigger_data"` をソースの `"trigger_data"` と照合する方法を指定する文字列。 `"exact"` は、ほぼ常に使用する値で、正確な値と一致します。
     - `"expiry"`: 帰属ソースの有効期限を秒単位で表す文字列。この時点を過ぎると、ソースはアクティブでなくなり（つまり、それ以降のトリガーは、このソースに帰属しなくなります）。
     - `"priority"`: 帰属ソースの優先度値を表す文字列。詳細については、[優先度と制限の報告](/ja/docs/Web/API/Attribution_Reporting_API/Generating_reports#レポートの優先順位と制限)を参照してください。
     - `"debug_key"`: デバッグキーを表す、10 進数で書式化された 64 ビットの符号なし整数。関連付けられた帰属レポートの横に[デバッグレポート](/ja/docs/Web/API/Attribution_Reporting_API/Generating_reports#デバッグレポート)を生成する場合は、これを設定します。
     - `"event_report_window"`: イベントレベルレポートの作成のために、このソースに属するイベントとして認識されない、その時点以降のトリガーの秒数を表す文字列。

     このヘッダーで利用できるすべてのフィールドの詳細については、 {{httpheader("Attribution-Reporting-Register-Source")}} を参照してください。

   - トリガーがソースと一致した場合に、ブラウザーが[概要レポート](/ja/docs/Web/API/Attribution_Reporting_API/Generating_reports#概要レポート)を生成するようにするには、イベントレベルレポートの生成に必要なフィールドに加えて、いくつかの追加フィールドを含める必要があります。

     ```js
     res.set(
       "Attribution-Reporting-Register-Source",
       JSON.stringify({
         source_event_id: "412444888111012",
         destination: "https://advertiser.example",
         trigger_data: [0, 1, 2, 3, 4],
         trigger_data_matching: "exact",
         expiry: "604800",
         priority: "100",
         debug_key: "122939999",
         event_report_window: "86400",

         aggregation_keys: {
           campaignCounts: "0x159",
           geoValue: "0x5",
         },
         aggregatable_report_window: "86400",
       }),
     );
     ```

     この例での追加フィールドは次のとおりです。
     - `"aggregation_keys"`: ユーザー指定のキーを含むオブジェクトで、レポートの値を統合するさまざまなデータポイントを表します。
     - `"aggregatable_report_window"`: 文字列で、トリガーデータが生成される集約レポートに含められなくなる時点を秒単位で表します。

     繰り返しますが、このヘッダーで利用できるすべてのフィールドの詳細については、 {{httpheader("Attribution-Reporting-Register-Source")}} を参照してください。

3. ソースの登録が正常に完了すると、ブラウザーは指定されたソースデータをプライベートなローカルキャッシュに格納します。

## ナビゲーションベースの帰属ソース

ナビゲーションソースは、リンクとの操作を測定するのに有益です。例えば、ユーザーはサイト運営者のページで広告を見て、それをクリックして広告主のページに移動し、そこでコンバージョンが発生することが期待されます。

登録できるナビゲーションベースの帰属ソースには、HTML ベースのもの（`attributionsrc` 属性を使用）と、 {{domxref("Window.open()")}} 呼び出しベースのもの（`attributionsrc` ウィンドウ機能を使用）の、2 種類あります。

### HTML ベースのナビゲーションソース

ナビゲーションベースの帰属ソースを登録するには、 `attributionsrc` 属性を適切な {{htmlelement("a")}} 要素に追加します。この属性は、登録リクエストの送信先を指定します。

属性値を空白のままにすると、リンク先の場所に登録リクエストが送信されます。値内に 1 つ以上の追加の URL を指定して、登録リクエストを送信することも可能です。詳細については、 [attributionsrc 内での URL の指定](#attributionsrc_内での_url_の指定)を参照してください。

`attributionsrc` は宣言的に追加することができます。

```html
<a href="https://shop.example" attributionsrc target="_blank">
  クリックすると店舗へ移動
</a>
```

または {{domxref("HTMLAnchorElement.attributionSrc")}} プロパティを使用して、

```js
const aElem = document.querySelector("a");
aElem.attributionSrc = "";
```

この場合、操作が発生し、ユーザーがリンクをクリックしてブラウザーがレスポンスを受信すると、ナビゲーションベースの帰属ソース（{{httpheader("Attribution-Reporting-Register-Source")}} レスポンスヘッダーで指定されたもの）に関連付けられたソースデータがブラウザーに保存されます。

### Window.open() ベースのナビゲーションソース

`attributionsrc` 特性キーワードを、{{domxref("Window.open()")}} 呼び出しの features プロパティに追加することもできます。この例では、`click` イベントの発生に応じてこれを実行します。

```js
elem.addEventListener("click", () => {
  window.open("https://shop.example", "_blank", "attributionsrc");
});
```

この場合、`Window.open()` が呼び出されると操作が行われ、ブラウザーはソースデータを格納し、レスポンスを受信します。

> [!NOTE]
> 上記の例のように [`click`](/ja/docs/Web/API/Element/click_event) イベントを設定する場合は、{{htmlelement("button")}} や {{htmlelement("a")}} 要素など、クリックが予想されるコントロールに設定することをお勧めします。これにより、意味づけがより明確になり、スクリーンリーダーやキーボードのユーザーもアクセスしやすくなります。

> [!NOTE]
> `open()` によって帰属ソースを登録するには、[一時的な有効化](/ja/docs/Glossary/Transient_activation)（つまり、`click` などのユーザー操作イベントハンドラー内）でユーザー操作から 5 秒以内に呼び出す必要があります。

## イベントベースの帰属ソース

イベントベースの帰属ソースは、何らかのイベントの発生に応じて、ブラウザーにソースデータを保存させます。たとえば、`<img>` または `<script>` 要素の場合（これらは、上記の `<a>` 要素と同様に `attributionsrc` 属性を使用します）、または JavaScript で設定した独自のイベントなどです。

### HTML ベースのイベントソース

HTML ベースのイベントソースは、ページ運営者のページが最初に読み込まれたとき、より正確には `<img>` または `<script>` が読み込まれたときに、そのページとの操作を測定するために使用できます。HTML を使用してイベントベースの帰属ソースを登録するには、 `attributionsrc` 属性を適切な要素（{{htmlelement("img")}} または {{htmlelement("script")}}）に追加します。

属性値を空白のままにすると、リクエストされたリソースがホストされているサーバーに登録リクエストが送信されます。値内に 1 つ以上の追加の URL を指定して、登録リクエストを送信することも可能です。詳細については、 [atttributionsrc 内の URL の指定](#attributionsrc_内での_url_の指定)を参照してください。

`<img>` 要素の例を見てみましょう。

```html
<img src="advertising-image.png" attributionsrc />
```

{{domxref("HTMLImageElement.attributionSrc")}} プロパティを使用して、これと同じ結果を得ることができます。

```js
const imgElem = document.querySelector("img");
imgElem.attributionSrc = "";
```

ブラウザーは、画像ファイルを含むレスポンスを受信したとき（つまり、`load` イベントが発生したとき）、帰属ソースデータを保存します。ユーザーは必ずしもその画像をまったく認識できない場合があることに留意してください。その画像は、帰属報告のためにのみ使用される 1x1 の透明なトラッキングピクセルである場合もあります。

{{htmlelement("script")}} の例は、次のように見ていくことができます。

```html
<script src="advertising-script.js" attributionsrc></script>
```

または {{domxref("HTMLScriptElement.attributionSrc")}} プロパティを使用して、

```js
const scriptElem = document.querySelector("script");
scriptElem.attributionSrc = "";
```

この場合、ブラウザーはスクリプトを含むレスポンスを受信すると、操作が行われ、ソースデータがブラウザーに格納されます。

### JavaScript ベースのイベントソース

スクリプトベースの帰属ソースは、HTML ベースの帰属ソースよりも汎用性があります。アプリに適したリクエストに基づいて、帰属ソースの登録対象となるリクエストを開始するスクリプトを設定することができます。これは柔軟な手法であり、例えば、カスタム要素のクリックやフォームの送信など、独自の操作に応じてソースデータを保存したい場合に役立ちます。

スクリプトベースの帰属ソースを設定するには、次のいずれかを実行します。

- {{domxref("Window/fetch", "fetch()")}} リクエストを `attributionReporting` オプションをつけて送信します。

  ```js
  const attributionReporting = {
    eventSourceEligible: true,
    triggerEligible: false,
  };

  // オプションで keepalive を設定して、リクエストがページよりも長く存続するようにします。
  function triggerSourceInteraction() {
    fetch("https://shop.example/endpoint", {
      keepalive: true,
      attributionReporting,
    });
  }

  // 操作のトリガーを、コードにとって意味のあるイベント
  // （DOM イベントやユーザー操作である必要はありません）に
  // 関連付けます。
  elem.addEventListener("click", triggerSourceInteraction);
  ```

- リクエストオブジェクトで {{domxref("XMLHttpRequest")}} を呼び出し、 {{domxref("XMLHttpRequest.setAttributionReporting", "setAttributionReporting()")}} をリクエストオブジェクトに対応するオブジェクトに送信します。

  ```js
  const attributionReporting = {
    eventSourceEligible: true,
    triggerEligible: false,
  };

  function triggerSourceInteraction() {
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
  elem.addEventListener("click", triggerSourceInteraction);
  ```

この場合、操作が発生し、ブラウザーはフェッチリクエストからのレスポンスを受信すると、ソースデータを保存します。

> [!NOTE]
> リクエストは、あらゆるリソースに対して行うことができます。帰属レポート API と直接関係のあるリクエストである必要はなく、JSON、プレーンテキスト、画像の blob、その他アプリにとって意味のあるリクエストであれば何でもかまいません。

## attributionsrc 内での URL の指定

これまでの例では、 `attributionsrc` 属性/特性または `attributionSrc` プロパティは空白のまま、空文字列の値を取っていました。リクエストされたリソースを保有するサーバーが、登録の処理（つまり、 {{httpheader("Attribution-Reporting-Eligible")}} ヘッダーを受信し、 {{httpheader("Attribution-Reporting-Register-Source")}} ヘッダーで応答する）も行うサーバーである場合は、これで問題ありません。

ただし、リクエストされたリソースが、自分で制御するサーバー上にない場合や、帰属ソースの登録を別のサーバーで処理したい場合などもあるでしょう。そのような場合、`attributionsrc` の値として 1 つ以上の URL を指定することができます。リソースのリクエストが発生すると、リソースのオリジンに加えて、 {{httpheader("Attribution-Reporting-Eligible")}} ヘッダーが `attributionsrc` で指定した URL に送信されます。これらの URL は、{{httpheader("Attribution-Reporting-Register-Source")}} で応答して、ソースを登録することができます。

例えば、`<a>` 要素の場合、`attributionsrc` 属性で URL を宣言することができます。

```html
<a
  href="https://shop.example"
  attributionsrc="https://a.example/register-source">
  クリックすると店舗に行きます
</a>
```

または、JavaScript で `attributionSrc` プロパティを使用して指定します。

```js
// 不適切な構文解析の原因となる '=' などの特殊文字が含まれている
// URL をエンコードします。
const encodedUrlA = encodeURIComponent("https://a.example/register-source");
const encodedUrlB = encodeURIComponent("https://b.example/register-source");

const aElem = document.querySelector("a");
aElem.attributionSrc = `${encodedUrlA} ${encodedUrlB}`;
```

{{domxref("Window.open()")}} を呼び出す場合、異なる URL を、カンマまたは空白で区切られた複数の別個の `attributionsrc` 特性として、 [`windowFeatures`](/ja/docs/Web/API/Window/open#windowfeatures) 引数内に掲載されている必要があります。

```js
// 不適切な構文解析の原因となる '=' などの特殊文字が含まれている
// URL をエンコードします。
const encodedUrlA = encodeURIComponent("https://a.example/register-source");
const encodedUrlB = encodeURIComponent("https://b.example/register-source");

elem.addEventListener("click", () => {
  window.open(
    "https://ourshop.example",
    "_blank",
    `attributionsrc=${encodedUrlA},attributionsrc=${encodedUrlB}`,
  );
});
```

> [!NOTE]
> 複数の URL を指定すると、同じ機能に複数の帰属ソースを登録できるということです。例えば、成功を測定しようとしているキャンペーンが複数あり、それぞれ異なるデータに基づいて異なるレポートを生成する場合などです。

## 関連情報

- [Attribution Reporting Header Validation tool](https://wicg.github.io/attribution-reporting-api/validate-headers)
