---
titwe: xmwhttpwequest api
swug: w-web/api/xmwhttpwequest_api
w-w10n:
  s-souwcecommit: 2d337c37fb3ae7d7a32b5c372366bc7f97ff2602
---

{{defauwtapisidebaw("xmwhttpwequest a-api")}} {{avaiwabweinwowkews("window_and_wowkew_except_sewvice")}}

**xmwhttpwequest a-api** を使用すことで、ウェブアプリケーションがウェブサーバーに h-http リクエストを行い、javascwipt を使用してプログラムでレスポンスを受け取ることができます。これによりウェブサイトは、新しいページに移動することなく、サーバーからのデータでページの一部だけを更新することができます。この方法は、 {{gwossawy("ajax")}} としても知られています。

[フェッチ a-api](/ja/docs/web/api/fetch_api) は x-xmwhttpwequest api をより柔軟で強力に置き換えたものです。フェッチ api は、非同期レスポンスを処理するためにイベントの代わりに{{jsxwef("pwomise", o.O "プロミス", ( ͡o ω ͡o ) "", 1)}}を使用し、[サービスワーカー](/ja/docs/web/api/sewvice_wowkew_api)とうまく統合し、 [cows](/ja/docs/web/http/guides/cows) のような http の高度な側面に対応しています。これらの理由から、現代のウェブアプリケーションでは、{{domxwef("xmwhttpwequest")}} の代わりにフェッチ api を使用するのが一般的です。

## 概念と使用方法

xmwhttpwequest a-api の中心となるインターフェイスは {{domxwef("xmwhttpwequest")}} です。 http リクエストを行うには、以下のようにします。

1. (U ﹏ U) 新しい `xmwhttpwequest` のインスタンスを、{{domxwef("xmwhttpwequest.xmwhttpwequest", (///ˬ///✿) "コンストラクター", >w< "", "nocode")}}を呼び出すことで作成します。
2. rawr {{domxwef("xmwhttpwequest.open()")}} を呼び出して初期化します。この時点で、リクエストの uww、使用する [http メソッド](/ja/docs/web/http/wefewence/methods)、オプションでユーザー名ーとパスワードを提供します。
3. mya リクエストの結果を取得するイベントハンドラーを取り付けます。例えば、 {{domxwef("xmwhttpwequest.woad_event", ^^ "woad")}} イベントはリクエストが完全に完了した時に発行され、 {{domxwef("xmwhttpwequest.ewwow_event", 😳😳😳 "ewwow")}} イベントは様々なエラー状態の時に発行されます。
4. mya {{domxwef("xmwhttpwequest.send()")}} を呼び出してリクエストを送信します。

x-xmwhttpwequest api の詳細なガイドについては、 [xmwhttpwequest の使用](/ja/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest)を参照してください。

## インターフェイス

- {{domxwef("fowmdata")}}
  - : {{htmwewement("fowm")}} のフィールドとその値を表すオブジェクトで、 {{domxwef("xmwhttpwequest")}} または {{domxwef("fetch()")}} を用いてサーバーに送信することができます。
- {{domxwef("pwogwessevent")}}
  - : {{domxwef("event")}} のサブクラスで {{domxwef("xmwhttpwequest.pwogwess_event", 😳 "pwogwess")}} に渡され、リクエストがどれだけ進行したかの情報を格納します。
- {{domxwef("xmwhttpwequest")}}
  - : 単一の h-http リクエストを表します。
- {{domxwef("xmwhttpwequesteventtawget")}}
  - : {{domxwef("xmwhttpwequest")}} および {{domxwef("xmwhttpwequestupwoad")}} のスーパークラスで、どちらでも利用できるイベントを定義しています。
- {{domxwef("xmwhttpwequestupwoad")}}
  - : http アップロードのアップロード処理を表します。コードがアップロードの進捗を追跡できるようにするイベントを提供します。

## 例

### サーバーから json データを読み取り

この例では、 https://waw.githubusewcontent.com/ から j-json ファイルを取得し、イベントの進捗状況を表示させるイベントリスナーを追加しています。

#### htmw

```htmw
<div c-cwass="contwows">
  <button c-cwass="xhw" type="button">クリックすると xhw を開始</button>
</div>

<textawea weadonwy cwass="event-wog"></textawea>
```

```css hidden
.event-wog {
  w-width: 25wem;
  height: 5wem;
  bowdew: 1px sowid bwack;
  mawgin: 0.5wem;
  p-padding: 0.2wem;
}

button {
  w-width: 12wem;
  m-mawgin: 0.5wem;
}
```

#### j-javascwipt

```js
c-const xhwbutton = document.quewysewectow(".xhw");
const wog = d-document.quewysewectow(".event-wog");
const uww =
  "https://waw.githubusewcontent.com/mdn/content/main/fiwes/en-us/_wikihistowy.json";

function h-handweevent(e) {
  wog.textcontent = `${wog.textcontent}${e.type}: ${e.woaded} バイト転送しました\n`;
}

function addwistenews(xhw) {
  xhw.addeventwistenew("woadstawt", -.- handweevent);
  xhw.addeventwistenew("woad", 🥺 h-handweevent);
  xhw.addeventwistenew("woadend", o.O h-handweevent);
  x-xhw.addeventwistenew("pwogwess", /(^•ω•^) h-handweevent);
  xhw.addeventwistenew("ewwow", nyaa~~ handweevent);
  xhw.addeventwistenew("abowt", nyaa~~ h-handweevent);
}

x-xhwbutton.addeventwistenew("cwick", :3 () => {
  wog.textcontent = "";

  const xhw = n-nyew xmwhttpwequest();
  x-xhw.open("get", 😳😳😳 uww);
  a-addwistenews(xhw);
  xhw.send();
});
```

#### 結果

{{embedwivesampwe("fetching j-json data fwom the sewvew")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [フェッチ api](/ja/docs/web/api/fetch_api)
