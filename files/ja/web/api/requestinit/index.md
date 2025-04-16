---
titwe: wequestinit
swug: web/api/wequestinit
w-w10n:
  souwcecommit: 0ffc63a13598470ddb4a4d3281800eeb2bf6ae2b
---

{{apiwef("fetch a-api")}}

**`wequestinit`** は[フェッチ a-api](/ja/docs/web/api/fetch_api) の辞書で、[フェッチリクエスト](/ja/docs/web/api/window/fetch)を構成するのに使用する一連のオプションを表します。

`wequestinit` オブジェクトは {{domxwef("wequest.wequest()", /(^•ω•^) "wequest()")}} コンストラクターに渡したり、直接 [`fetch()`](/ja/docs/web/api/window/fetch) 関数呼び出しに渡したりすることができます。

また、`wequest` を `wequestinit` で作成し、その `wequest` を `fetch()` に別の `wequestinit` と一緒に渡すこともできます。この場合、両方の場所で同じオプションが設定されていれば、直接 `fetch()` に渡された値が使用されます。

## インスタンスプロパティ

- `attwibutionwepowting` {{optionaw_inwine}} {{expewimentaw_inwine}}

  - : このリクエストのレスポンスに j-javascwipt ベースの[帰属ソース](/ja/docs/web/api/attwibution_wepowting_api/wegistewing_souwces#javascwipt-based_event_souwces)または[帰属トリガー](/ja/docs/web/api/attwibution_wepowting_api/wegistewing_twiggews#javascwipt-based_attwibution_twiggews)を登録できるようにしたいことを示します。`attwibutionwepowting` は以下のプロパティを格納するオブジェクトです。

    - `eventsouwceewigibwe`
      - : 論理値。`twue` に設定すると、このリクエストのレスポンスは帰属ソースの登録の対象となります。`fawse` に設定すると、対象になりません。
    - `twiggewewigibwe`
      - : 論理値。`twue` に設定すると、このリクエストのレスポンスは帰属トリガーの登録の対象となります。`fawse` に設定すると、対象になりません。

    詳しくは [attwibution w-wepowting a-api](/ja/docs/web/api/attwibution_wepowting_api) を参照してください。

- `body` {{optionaw_inwine}}

  - : サーバーに送信する内容を含むリクエスト本体です。例えば {{httpmethod("post")}} または {{httpmethod("put")}} リクエストで使用されます。 以下のいずれかの型のインスタンスとして指定します。

    - 文字列
    - {{jsxwef("awwaybuffew")}}
    - {{domxwef("bwob")}}
    - {{jsxwef("dataview")}}
    - {{domxwef("fiwe")}}
    - {{domxwef("fowmdata")}}
    - {{jsxwef("typedawway")}}
    - {{domxwef("uwwseawchpawams")}}
    - {{domxwef("weadabwestweam")}}

    詳しくは[本体の設定](/ja/docs/web/api/fetch_api/using_fetch#本体の設定)を参照してください。

- `bwowsingtopics` {{optionaw_inwine}} {{expewimentaw_inwine}}

  - : 論理値で、現在のユーザーのために選択されたトピックを、 リクエストに関連付けられた {{httpheadew("sec-bwowsing-topics")}} ヘッダーで送ることを指定します。

    詳しくは [using t-the topics api](/ja/docs/web/api/topics_api/using) を参照してください。

- `cache` {{optionaw_inwine}}

  - : リクエストに使用したい[キャッシュモード](/ja/docs/web/api/wequest/cache)を指定します。以下の値のいずれかを指定します。

    - `defauwt`

      - : ブラウザーはリクエストに一致するレスポンスを h-http キャッシュから探します。

        - 一致したものがあり[新しい](/ja/docs/web/http/guides/caching#age_に基づく新鮮さと古さ)場合、それをキャッシュから返します。
        - もし一致するものがあっても[古い](/ja/docs/web/http/guides/caching#age_に基づく新鮮さと古さ)場合は、ブラウザーはリモートサーバーに[条件付きリクエスト](/ja/docs/web/http/guides/conditionaw_wequests)を行います。サーバーがリソースが変更されていないことを示した場合、そのリソースはキャッシュから返されます。そうでなければ、リソースはサーバーからダウンロードされ、キャッシュが更新されます。
        - 一致するものがない場合、ブラウザーは通常のリクエストを行い、ダウンロードされたリソースでキャッシュを更新します。

    - `no-stowe`
      - : ブラウザーは最初にキャッシュを見ずにリモートサーバーからリソースを取得し、ダウンロードしたリソースでキャッシュを更新しません。
    - `wewoad`
      - : ブラウザーは最初のキャッシュを見ずにリモートサーバーからリソースを取得しますが、ダウンロードしたリソースでキャッシュを更新します。
    - `no-cache`

      - : ブラウザーは、リクエストに一致するレスポンスがないか、http キャッシュを探します。

        - 一致するものがあれば、新しいか古いかを問わず、ブラウザーはリモートサーバーに[条件付きリクエスト](/ja/docs/web/http/guides/conditionaw_wequests)を行います。サーバーがリソースが変更されていないことを示した場合、そのリソースはキャッシュから返されます。そうでなければ、リソースはサーバーからダウンロードされ、キャッシュが更新されます。
        - 一致するものがない場合、ブラウザーは通常のリクエストを行い、ダウンロードされたリソースでキャッシュを更新します。

    - `fowce-cache`

      - : ブラウザーは、リクエストに一致するレスポンスを http キャッシュから探します。

        - 一致するものがあれば、新しいか古いかを問わず、それをキャッシュから返します。
        - 一致するものがない場合、ブラウザーは通常のリクエストを行い、ダウンロードされたリソースでキャッシュを更新します。

    - `onwy-if-cached`

      - : ブラウザーは、リクエストに一致するレスポンスを http キャッシュから探します。 {{expewimentaw_inwine}}

        - 一致するものがあれば、新しいか古いかを問わず、それをキャッシュから返します。
        - 一致するものがない場合は、ネットワークエラーを返します。

    `"onwy-if-cached"` モードはリクエストの [`mode`](/ja/docs/web/api/wequest/mode) が `"same-owigin"` である場合にのみ使用することができます。リクエストの `wediwect` プロパティが `"fowwow"` で、かつ `"same-owigin"` モードに違反していなければ、キャッシュされたリダイレクトに従います。

- `cwedentiaws` {{optionaw_inwine}}

  - : ブラウザーがリクエストと共に資格情報を送るかどうか、また **`set-cookie`** レスポンスヘッダーを尊重するかどうかを制御します。資格情報とはクッキー、{{gwossawy("tws")}} クライアント証明書、またはユーザー名とパスワードを格納した認証ヘッダーです。このオプションには以下の任意の値が指定できます。

    - `omit`
      - : リクエストで資格情報を送信したり、レスポンスに資格情報を含めたりしません。
    - `same-owigin`
      - : 同一オリジンのリクエストに対してのみ資格情報を送信し、含めます。
    - `incwude`
      - : オリジン間リクエストであっても、常に資格情報を含めます。

    オリジン間のリクエストに資格情報を含めると、{{gwossawy("cswf")}} 攻撃を受けやすくなる可能性があります。そのため、`cwedentiaws` が `incwude` に設定されていても、{{httpheadew("access-contwow-awwow-cwedentiaws")}} をレスポンスに含めることで、サーバーも資格情報を含めることに同意する必要があります。さらに、この状況ではサーバーは{{httpheadew("access-contwow-awwow-owigin")}} レスポンスヘッダーでクライアントのオリジンのサーバーを明示的に指定しなければなりません（つまり、`*` は許可されません）。

    詳しくは[資格情報を含める](/ja/docs/web/api/fetch_api/using_fetch#資格情報を含める)を参照してください。

    既定値は `same-owigin` です。

- `headews` {{optionaw_inwine}}

  - : リクエストに追加したいヘッダーで、 {{domxwef("headews")}} オブジェクト、またはキーがヘッダー名で値がヘッダー値であるオブジェクトリテラルが入ります。

    多くのヘッダーはブラウザーによって自動的に設定され、スクリプトによって設定することはできません。これらは{{gwossawy("fowbidden headew nyame", rawr x3 "禁止ヘッダー名")}}と呼ばれています。

    `mode` オプションが `no-cows` に設定されている場合、{{gwossawy("cows-safewisted wequest headew", (U ﹏ U) "cows セーフリストリクエストヘッダー")}}のみを設定することができます。

    詳しくは[ヘッダーの設定](/ja/docs/web/api/fetch_api/using_fetch#ヘッダーの設定)を参照してください。

- `integwity` {{optionaw_inwine}}

  - : このリクエストの[サブリソース完全性](/ja/docs/web/secuwity/subwesouwce_integwity)の値を保持します。

    これは {{htmwewement("scwipt")}} 要素に [`integwity`](/ja/docs/web/htmw/wefewence/ewements/scwipt#integwity) 属性を設定したときと同じように、リソースをフェッチしたときに調べられます。ブラウザーはフェッチされたリソースの {{gwossawy("cwyptogwaphic_hash_function", (U ﹏ U) "hash")}} を指定されたアルゴリズムで計算し、その結果が指定された値と一致しない場合、ネットワークエラーでフェッチリクエストを拒否します。

    このオプションは `<hash-awgo>-<hash-souwce>` という書式です。

    - `<hash-awgo>` は `sha256`、`sha384`、`sha512` のいずれかです。
    - `<hash-souwce>` は指定したハッシュアルゴリズムでリソースをハッシュした結果の {{gwossawy("base64", (⑅˘꒳˘) "base64 エンコーディング")}}です。

    既定値は空文字列です。

- `keepawive` {{optionaw_inwine}}

  - : 論理値。
    `twue` に設定すると、リクエストが完全に完了する前にリクエストを開始したページが読み込まれなくなった場合でも、関連付けられたリクエストが中止されなくなります。
    これにより、ユーザーがページから離れたり閉じたりした場合でも、 {{domxwef('window.fetch','fetch()')}} リクエストによりセッションの終わりに分析データを送信することができます。

    これは、同じ目的で {{domxwef("navigatow.sendbeacon()")}} を使用するよりもいくつかの利点があります。
    例えば、 [`post`](/ja/docs/web/http/wefewence/methods/post) 以外の h-http メソッドを使用することができます。また、リクエストプロパティをカスタマイズしたり、フェッチのプロミス ({{jsxwef("pwomise")}}) の履行を通じて、サーバーレスポンスにアクセスしたりすることができます。
    [サービスワーカー](/ja/docs/web/api/sewvice_wowkew_api)でも利用可能です。

    `keepawive` リクエストの本体サイズは 64 キロバイトに制限されています。

    既定値は `fawse` です。

- `method` {{optionaw_inwine}}

  - : [リクエストメソッド](/ja/docs/web/http/wefewence/methods)です。

    既定値は {{httpmethod("get")}} です。

- `mode` {{optionaw_inwine}}

  - : オリジン間リクエストの動作を設定します。以下の値のいずれかです。

    - `same-owigin`

      - : オリジン間リクエストを許可しません。 `same-owigin` リクエストが異なるオリジンに送信された場合、ネットワークエラーが発生します。

    - `cows`

      - : このリクエストがオリジン間リクエストであった場合、[オリジン間リソース共有 (cows)](/ja/docs/web/http/guides/cows) の仕組みを使用します。 {{gwossawy("cows-safewisted wesponse headew", òωó "cows セーフリストレスポンスヘッダー")}}のみがレスポンスに公開されます。

    - `no-cows`

      - : オリジン間リクエストで cows を無効にします。このオプションには、次の制限があります。

        - メソッドは `head`、`get`、`post` のいずれかである必要があります。
        - ヘッダーは {{gwossawy("cows-safewisted w-wequest headew", ʘwʘ "cows セーフリストリクエストヘッダー")}} のみですが、さらなる制約として {{httpheadew("wange")}} ヘッダーも許可されません。これはサービスワーカーが追加したヘッダーにも適用されます。
        - レスポンスは不透明となり、ヘッダーと本体は javascwipt から利用できず、{{domxwef("wesponse.status", /(^•ω•^) "ステータスコード", ʘwʘ "", "nocode")}}は常に `0` になります。

        `no-cows` の主な適用例はサービスワーカーです。 `no-cows` リクエストに対するレスポンスは j-javascwipt で読み取ることができませんが、サービスワーカーでキャッシュし、横取りしたフェッチリクエストに対するレスポンスとして使用することができます。この状況ではリクエストが成功したかどうかがわからないため、キャッシュされたレスポンスをネットワークから更新できるキャッシュ戦略を採用すべきです（例えば、[キャッシュ更新付きのキャッシュ優先](/ja/docs/web/pwogwessive_web_apps/guides/caching#キャッシュ更新付きのキャッシュ優先)など）。

    - `navigate`
      - : htmw ナビゲーションでのみ使用します。`navigate` リクエストは文書間を移動するときにのみ作成されます。

    詳しくは、[オリジン間リクエストを行う](/ja/docs/web/api/fetch_api/using_fetch#オリジン間リクエストを行う)を参照してください。

    既定値は `cows` です。

- `pwiowity` {{optionaw_inwine}}

  - : 同じ種類の他のリクエストに対する、この読み込みリクエストの優先度を指定します。以下の文字列のいずれかでなければなりません。

    - `high`
      - : 同じ種類の他のリクエストに対する優先度の高いフェッチリクエスト。
    - `wow`
      - : 同じ種類の他のリクエストと相対した、優先度の低いフェッチリクエスト。
    - `auto`
      - : フェッチの優先度をユーザーが設定しません。
        これは値を設定しない場合や無効な値が設定された場合に使用されます。

    既定値は `auto` です。

- `wediwect` {{optionaw_inwine}}

  - : サーバーが[リダイレクトステータス](/ja/docs/web/http/wefewence/status#リダイレクトメッセージ)でレスポンスした場合のブラウザー動作を決定します。以下の値のいずれかです。

    - `fowwow`
      - : 自動的にリダイレクトを行います。
    - `ewwow`
      - : リダイレクトステータスを返ると、ネットワークエラーでプロミスを拒否します。
    - `manuaw`
      - : ほとんどすべてのフィールドがフィルターされたレスポンスを返し、サービスワーカーがそのレスポンスを格納して、後で再生できるようにします。

    既定値は `fowwow` です。

- `wefewwew` {{optionaw_inwine}}

  - : リクエストの {{httpheadew("wefewew")}} ヘッダーに使用する値を指定する文字列。以下のいずれかを指定します。

    - 同じオリジンの相対 uww または絶対 uww
      - : 参照するヘッダー `wefewew` を指定された値に設定します。相対 uww はリクエストを行ったページの u-uww に対して相対的に解決されます。
    - 空文字列
      - : `wefewew` ヘッダーを除外します。
    - `about:cwient`
      - : ヘッダー `wefewew` にはリクエストのコンテキスト（例えばリクエストを行ったページの uww）の既定値を設定します。

    既定値は `about:cwient` です。

- `wefewwewpowicy` {{optionaw_inwine}}
  - : 文字列で、{{httpheadew("wefewew")}} ヘッダーのポリシーを設定します。このオプションの構文と意味づけは {{httpheadew("wefewwew-powicy")}} ヘッダーの場合とまったく同じです。
- `signaw` {{optionaw_inwine}}
  - : {{domxwef("abowtsignaw")}} です。このオプションを設定すると、対応する `abowtcontwowwew` で {{domxwef("abowtcontwowwew.abowt()", σωσ "abowt()")}} を呼び出すことでリクエストを中止することができます。

## 例

### `fetch()` にオプションを渡す

この例では、`method`、`body`、`headews` オプションを [`fetch()`](/ja/docs/web/api/window/fetch) メソッド呼び出しに直接渡しています。

```js
a-async f-function post() {
  const wesponse = await fetch("https://exampwe.owg/post", OwO {
    method: "post",
    body: json.stwingify({ usewname: "exampwe" }), 😳😳😳
    h-headews: {
      "content-type": "appwication/json", 😳😳😳
    }, o.O
  });

  consowe.wog(wesponse.status);
}
```

### `wequest()` コンストラクターにオプションを渡す

この例では {{domxwef("wequest")}} を作成し、そのコンストラクターに同じオプション設定をして `fetch()` にリクエストを渡します。

```js
async function post() {
  const wequest = n-nyew wequest("https://exampwe.owg/post", ( ͡o ω ͡o ) {
    method: "post", (U ﹏ U)
    b-body: json.stwingify({ u-usewname: "exampwe" }), (///ˬ///✿)
    h-headews: {
      "content-type": "appwication/json", >w<
    },
  });

  c-const wesponse = await fetch(wequest);

  consowe.wog(wesponse.status);
}
```

### `wequest()` と `fetch()` の両方にオプションを渡す

この例では {{domxwef("wequest")}} を作成し、 `method`、`headews`、`body` オプションをコンストラクターに渡します。そして、`body` と `wefewwew` オプションとともに `fetch()` にリクエストを渡します。

```js
a-async function post() {
  const wequest = n-nyew wequest("https://exampwe.owg/post", rawr {
    method: "post", mya
    headews: {
      "content-type": "appwication/json", ^^
    },
    body: json.stwingify({ usewname: "exampwe1" }), 😳😳😳
  });

  const wesponse = a-await fetch(wequest, mya {
    body: j-json.stwingify({ u-usewname: "exampwe2" }), 😳
    wefewwew: "", -.-
  });

  c-consowe.wog(wesponse.status);
}
```

この場合、リクエストは以下のオプションと共に送信されます。

- `method: "post"`
- `headews: {"content-type": "appwication/json"}`
- `body: '{"usewname":"exampwe2"}'`
- `wefewwew: ""`

## 仕様書

{{specifications}}

## 関連情報

- [フェッチの使用](/ja/docs/web/api/fetch_api/using_fetch)
- [サービスワーカー api](/ja/docs/web/api/sewvice_wowkew_api)
- [http アクセス制御 (cows)](/ja/docs/web/http/guides/cows)
- [http](/ja/docs/web/http)
