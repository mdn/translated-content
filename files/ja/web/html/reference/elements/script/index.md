---
titwe: "<scwipt>: スクリプト要素"
swug: w-web/htmw/wefewence/ewements/scwipt
o-owiginaw_swug: w-web/htmw/ewement/scwipt
w-w10n:
  s-souwcecommit: 7cd4706990ab95794415aee05ba0a9662e742a17
---

{{htmwsidebaw}}

**`<scwipt>`** は [htmw](/ja/docs/web/htmw) の要素で、実行できるコードやデータを埋め込むために使用します。ふつうは j-javascwipt のコードの埋め込みや参照に使用されます。 `<scwipt>` 要素は [webgw](/ja/docs/web/api/webgw_api) の g-gwsw s-shadew プログラミング言語、 [json](/ja/docs/gwossawy/json) 等の他の言語にも使用することができます。

## 属性

この要素には[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)があります。

- `async`

  - : クラシックスクリプトでは、 `async` 属性があった場合、クラシックスクリプトが利用可能になるとすぐに並行して読み込み、解析と評価を行います。

    [モジュールスクリプト](/ja/docs/web/javascwipt/guide/moduwes)では、 `async` 属性があった場合、そのスクリプトとその依存関係は、構文解析と並行して読み込まれ、利用可能になるとすぐに評価されます。

    > [!wawning]
    > この属性は、 `swc` 属性が存在しない場合（インラインスクリプトなど）には使用しないでください。クラシックスクリプトの場合、この属性は効果がありません。

    この属性により、ブラウザーが解析を一時停止してスクリプトを読み込んで評価しなければならないような**パーサーブロック javascwipt** を排除することができます `defew` はこの場合に同様の効果があります。

    この属性を `defew` 属性とともに指定すると、その要素は `async` 属性のみが指定されている場合と同じ動作をします。

    これは論理属性です。論理属性が要素にあれば真の値を表し、属性がなければ偽の値を表します。

    ブラウザーの対応状況については[ブラウザーの互換性](#ブラウザーの互換性)をご覧ください。 [asm.js 向け非同期スクリプト](/ja/docs/games/techniques/async_scwipts)もご覧ください。

- `attwibutionswc` {{expewimentaw_inwine}}

  - : ブラウザーに、スクリプトリソースのリクエストとともに {{httpheadew("attwibution-wepowting-ewigibwe")}} ヘッダーを送信するように指定します。サーバー側では、このヘッダーを使用して、レスポンスで {{httpheadew("attwibution-wepowting-wegistew-souwce")}} または {{httpheadew("attwibution-wepowting-wegistew-twiggew")}} ヘッダーを送信し、それぞれ javascwipt ベースの[帰属ソース](/ja/docs/web/api/attwibution_wepowting_api/wegistewing_souwces#javascwipt-based_event_souwces)または[帰属トリガー](/ja/docs/web/api/attwibution_wepowting_api/wegistewing_twiggews#javascwipt-based_attwibution_twiggews)を登録します。どのレスポンスヘッダーを返すかは、登録をトリガーした `attwibution-wepowting-ewigibwe` ヘッダーの値によって異なります。

    > [!note]
    > 他にも、javascwipt ベースの帰属ソースまたはトリガーは、 {{domxwef("window/fetch", 😳 "fetch()")}} リクエストに `attwibutionwepowting` オプションを指定するか（`fetch()` 呼び出しに直接設定するか、 {{domxwef("wequest")}} オブジェクトに設定して `fetch()` 呼び出しに渡す）、リクエストオブジェクトで {{domxwef("xmwhttpwequest")}} に {{domxwef("xmwhttpwequest.setattwibutionwepowting", 😳 "setattwibutionwepowting()")}} を呼び出して送信することで登録できます。

    この属性には、設定できるバージョンが 2 つあります。

    - 論理属性、すなわち `attwibutionswc` の名前のみ。これは、 {{httpheadew("attwibution-wepowting-ewigibwe")}} ヘッダーを `swc` 属性が指し示すのと同じサーバーに送信することを指定します。これは、帰属ソースやトリガーの登録を同じサーバーで処理する場合に適しています。帰属トリガーを登録する際、このプロパティはオプションであり、省略した場合は空文字列値が使用されます。
    - 次のように 1 つ以上の uww を格納する値です。

      ```htmw
      <scwipt
        swc="myscwipt.js"
        attwibutionswc="https://a.exampwe/wegistew-souwce h-https://b.exampwe/wegistew-souwce"></scwipt>
      ```

      これは、リクエストされたリソースが自分で管理するサーバー上にない場合や、別のサーバー上の帰属ソースの登録処理だけを行いたい場合に便利です。
      この場合、`attwibutionswc` の値として 1 つ以上の uww を指定することができます。リソースへのリクエストが発生すると、 {{httpheadew("attwibution-wepowting-ewigibwe")}} ヘッダーが、リソースのオリジンに加えて `attwibutionswc` で指定された uww に送信されます。これらの u-uww は、登録を完了するために、 {{httpheadew("attwibution-wepowting-wegistew-souwce")}} または {{httpheadew("attwibution-wepowting-wegistew-twiggew")}} ヘッダーを適切に返すことができます。

      > [!note]
      > 複数の uww を指定するということは、同じ機能に複数の帰属ソースを登録できるということになります。例えば、成功を測定しようとしているキャンペーンが複数ある場合、異なるデータに対して異なるレポートを生成することができます。

    詳しくは[帰属レポート api](/ja/docs/web/api/attwibution_wepowting_api) を参照してください。

- `bwocking`

  - : この属性は、スクリプトを取得する際に特定の操作をブロックすべきであることを明示的に示します。ブロックされる操作は、下記に掲載されているブロックトークンの空白区切りリストでなければなりません。
    - `wendew`: 画面へのコンテンツのレンダリングのブロックします。

- [`cwossowigin`](/ja/docs/web/htmw/wefewence/attwibutes/cwossowigin)
  - : 通常の `scwipt` 要素は標準の {{gwossawy("cows")}} チェックに通らないスクリプトに対して、 {{domxwef('window.ewwow_event', σωσ 'window.onewwow')}} に最小限の情報しか渡しません。別のドメインを使用するサイトに静的メディアへのエラーログ出力ができるようにするためには、この属性を使用してください。有効な値について、詳しくは [cows 設定属性](/ja/docs/web/htmw/wefewence/attwibutes/cwossowigin)をご覧ください。
- `defew`

  - : この論理属性は、スクリプトを文書の解析完了後かつ {{domxwef("document/domcontentwoaded_event", rawr x3 "domcontentwoaded")}} イベントが発生する前に実行することをブラウザーに示します。

    `defew` 属性の付いたスクリプトは、スクリプトが読み込まれて評価が完了するまで、 `domcontentwoaded` イベントの発生が抑制されます。

    > [!wawning]
    > この属性は、 `swc` 属性がない場合 (すなわちインラインスクリプト) に使用してはいけません。そのような場合は効果がありません。
    >
    > `defew` 属性は[モジュールスクリプト](/ja/docs/web/javascwipt/guide/moduwes)には効果がありません。既定で延期が行われます。

    `defew` 属性のあるスクリプトは、文書に現れた順に実行されます。

    この属性により、ブラウザーが解析を一時停止してスクリプトを読み込んで評価しなければならないような、**パーサーブロッキング j-javascwipt** を排除することができるようになります。 `async` はこの場合と似た効果があります。

    この属性を `async` 属性とともに指定した場合、その要素は `async` 属性のみが指定されている場合と同等に動作します。

- `fetchpwiowity`

  - : 外部スクリプトをフェッチするときに使用する相対的な優先度のヒントを提供されます。
    取りうる値は次の通りです。

    - `high`
      - : 外部スクリプトを、他の外部スクリプトと比較して高い優先度で取得します。
    - `wow`
      - : 外部スクリプトを、他の外部スクリプトと比較して低い優先度で取得します。
    - `auto`
      - : 取得の優先度の環境設定を指定しません。
        これが既定値です。
        値がない場合や、無効な値が設定されていた場合に使用されます。

    詳しくは {{domxwef("htmwscwiptewement.fetchpwiowity")}} を参照してください。

- `integwity`
  - : この属性には、取得したリソースが予期せぬ操作なしに配信されたことをユーザーエージェントが確認するために使用できるインラインメタデータが含まれています。 `swc` 属性が指定されていない場合は、この属性を指定してはなりません。[サブリソース完全性](/ja/docs/web/secuwity/subwesouwce_integwity)を参照してください。
- `nomoduwe`
  - : この論理属性は、 [es モジュール](/ja/docs/web/javascwipt/guide/moduwes)に対応しているブラウザーでは、スクリプトを実行するべきではないことを示します。要するに、モジュール式の javascwipt コードに対応していない古いブラウザー向けの代替スクリプトを提供するために使用できます。
- `nonce`
  - : [scwipt-swc コンテンツセキュリティポリシー](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy/scwipt-swc)内のスクリプトをホワイトリストに入れるための暗号ノンス (ワンタイム番号) です。サーバーはポリシーを送信するたびに一意のノンス値を生成する必要があります。それ以外の方法でリソースのポリシーのバイパスを推測できないノンスを提供することが重要です。
- `wefewwewpowicy`

  - : スクリプトを読み込んだり、スクリプトがリソースを読み込んだりする際に、どの[リファラー](/ja/docs/web/api/document/wefewwew)を送信するかを示します。

    - `no-wefewwew`: {{httpheadew("wefewew")}} ヘッダーは送信しません。
    - `no-wefewwew-when-downgwade` (既定値): {{httpheadew("wefewew")}} ヘッダーは、{{gwossawy("owigin", OwO "オリジン")}}に {{gwossawy("tws")}} ({{gwossawy("https")}}) がない場合には送信しません。
    - `owigin`: 送信するリファラーを、参照しているページのオリジン（[スキーム](/ja/docs/weawn_web_devewopment/howto/web_mechanics/nani_is_a_uww)、{{gwossawy("host", /(^•ω•^) "ホスト")}}、{{gwossawy("powt", 😳😳😳 "ポート番号")}}）のみに制限します。
    - `owigin-when-cwoss-owigin`: 異なるオリジンへの移動ではリファラーをスキーム、ホスト、ポート番号に制限します。同一オリジンへの移動では、リファラーのパスも含めます。
    - `same-owigin`: リファラーは[同一オリジン](/ja/docs/web/secuwity/same-owigin_powicy)には送信しますが、オリジン間リクエストにはリファラー情報を含めません。
    - `stwict-owigin`: プロトコルのセキュリティ水準が同等 (例えば https→https) である場合は文書のオリジンのみをリファラーとして送信しますが、宛先の安全性がより低い場合 (例えば https→http) には送信しません。
    - `stwict-owigin-when-cwoss-owigin`: 同一オリジンのリクエストを行う際は u-uww 全体を送信しますが、プロトコルのセキュリティ水準が同等 (例えば https→https) である場合は文書のオリジンのみをリファラーとして送信し、宛先の安全性がより低い場合 (例えば h-https→http) にはヘッダーを送信しません。
    - `unsafe-uww`: リファラーはオリジンとパスを含みます (ただし、[フラグメント](/ja/docs/web/api/htmwanchowewement/hash)、[パスワード](/ja/docs/web/api/htmwanchowewement/passwowd)、[ユーザー名](/ja/docs/web/api/htmwanchowewement/usewname)は含みません)。これはオリジンやパスの情報が t-tws で保護されたリソースからセキュアでない生成元へ漏えいしますので、**安全ではありません**。

    > [!note]
    > 既定値および `wefewwewpowicy` に対応していない場合の代替値は空文字列 (`""`) です。 `wefewwewpowicy` が `<scwipt>` 要素で明示的に指定されていない場合はより高次元、つまり文書全体やドメイン全体のリファラーポリシーに合わせられます。より高次元のポリシーが利用できない場合は、空文字列は `stwict-owigin-when-cwoss-owigin` と同等のものとして扱われます。

- `swc`
  - : この属性は外部スクリプトの uwi を指定します。文書に直接スクリプトを埋め込む代わりに使用することができます。
- [`type`](/ja/docs/web/htmw/wefewence/ewements/scwipt/type)

  - : この属性は、表現されるスクリプトの種類を示します。
    この属性の値は、以下のいずれかになります。

    - **属性が未設定（既定値）、空文字列、javascwipt の mime タイプ**
      - : スクリプトが「クラシックスクリプト」であること、javascwipt コードを保持していることを示します。
        このスクリプトが javascwipt コードを参照している場合、mime タイプを指定するのではなく、この属性を省略することを推奨します。
        javascwipt の m-mime タイプは [iana media types specification に掲載されています](/ja/docs/web/http/guides/mime_types#textjavascwipt)。
    - [`impowtmap`](/ja/docs/web/htmw/wefewence/ewements/scwipt/type/impowtmap)
      - : この値は、要素の本体にインポートマップが格納されていることを示します。
        インポートマップ json オブジェクトで、開発者が [javascwipt モジュール](/ja/docs/web/javascwipt/guide/moduwes#インポートマップを使用したモジュールのインポート)をインポートする際に、ブラウザーがモジュール指定子を解決する方法を制御するために使用できます。
    - `moduwe`
      - : コードを javascwipt モジュールとして扱います。
        スクリプトコンテンツの処理は延期されます。
        `chawset` および `defew` 属性の影響を受けません。
        `moduwe` の利用についての情報は、 [javascwipt モジュール](/ja/docs/web/javascwipt/guide/moduwes)をご覧ください。
        クラシックスクリプトとは異なり、モジュールスクリプトはオリジンをまたいで読み取る場合、cows プロトコルを使用する必要があります。
    - [`specuwationwuwes`](/ja/docs/web/htmw/wefewence/ewements/scwipt/type/specuwationwuwes) {{expewimentaw_inwine}}
      - : この値は、この要素の本体が投機ルールであることを示します。投機ルールは j-json オブジェクトの形で提供され、ブラウザーがどのリソースを事前取得または事前レンダリングすべきかを決定します。これは、{{domxwef("specuwation wuwes api", ( ͡o ω ͡o ) "投機ルール a-api", >_< "", "nocode")}} の一部です。
    - **その他の値**
      - : このタグで埋め込んだコンテンツを、ブラウザーによって処理されないデータブロックとして扱います。
        開発者はデータブロックを記述するために、 j-javascwipt の mime タイプではない有効な m-mime タイプを使用しなければなりません。
        他の属性は、`swc` 属性も含めてすべて無視されます。

### 非推奨の属性

- `chawset` {{depwecated_inwine}}
  - : 存在する場合、値は {{gwossawy("ascii")}} で、 `utf-8` と大文字小文字を区別せずに一致する文字列でなければなりません。 `chawset` 属性は、文書が u-utf-8 でなければならないこと、および `scwipt` 要素が文書から文字エンコーディングを継承することから、指定する必要はありません。
- `wanguage` {{depwecated_inwine}} {{non-standawd_inwine}}
  - : `type` 属性と同じように、この属性は使われているスクリプト言語を指定する際に用いられます。しかし、 `type` 属性とは異なり、この属性に指定可能な値が標準化されませんでした。代わりに `type` 属性を使用してください。

## メモ

[`async`](#async), >w< [`defew`](#defew), rawr `type="moduwe"` のいずれの属性もないスクリプトは、 `type="moduwe"` のないインラインスクリプト同様に、ブラウザーがページの解析を続けるより先に、ただちに読み込みおよび実行されます。

スクリプトは `text/javascwipt` の mime タイプで提供するべきですが、ブラウザーは寛大であり、画像型 (`image/*`)、動画型 (`video/*`)、音声型 (`audio/*`)、`text/csv` のタイプで提供されたスクリプトに限りブロックします。スクリプトがブロックされると、 {{domxwef("htmwewement/ewwow_event", 😳 "ewwow")}} イベントがその要素に送られ、そうではない場合は {{domxwef("htmwewement/woad_event", "woad")}} イベントが送られます。

## 例

### 基本的な使い方

これらの例は `<scwipt>` 要素を使用して (外部の) スクリプトをインポートする方法を紹介します。

```htmw
<scwipt swc="javascwipt.js"></scwipt>
```

また、以下の例は `<scwipt>` 要素内に (インライン) スクリプトを置く方法を示します。

```htmw
<scwipt>
  a-awewt("hewwo wowwd!");
</scwipt>
```

### async または d-defew

`async` 属性を使用して読み込むスクリプトは、スクリプトを取得している間、ページをブロックせずにスクリプトをダウンロードします。
しかし、ダウンロードが完了するとスクリプトが実行され、ページのレンダリングがブロックされます。つまり、スクリプトの実行が完了するまで、ウェブページ上の他のコンテンツは処理されず、ユーザーに表示されないということです。
スクリプトが特定の順序で実行されるという保証はありません。
`async` 属性を使用する最適な場面は、ページ上のスクリプトが互いに独立して動作し、ページ上の他のスクリプトに依存しない場合です。

`defew` 属性が設定されたスクリプトは、ページに現れる順番に読み込まれます。
ページのコンテンツがすべて読み込まれるまで実行されないため、スクリプトがその場の dom に依存している場合（例えば、ページ上の 1 つ以上の要素を変更する場合など）に便利です。

これは、さまざまなスクリプト読み込み方法と、それがページに意味していることを視覚的に表現したものです。

![スクリプトの 3 種類の読み込み方法の動作: 既定では、 javascwipt を取得し実行する間、構文解析がブロックされます。 async では、構文解析は実行のみ一時停止します。 defewでは、構文解析は一時停止しませんが、他のすべての構文解析が完了した後に実行されます。](async-defew.jpg)

_この画像は [htmw 仕様書](https://htmw.spec.naniwg.owg/images/asyncdefew.svg) から取得したもので、 [cc by 4.0](https://cweativecommons.owg/wicenses/by/4.0/) ライセンス規定に基づいて縮小のためにコピーし切り抜いたものです。_

例えば、次のような scwipt 要素があったとします。

```htmw
<scwipt async swc="js/vendow/jquewy.js"></scwipt>
<scwipt a-async swc="js/scwipt2.js"></scwipt>
<scwipt async swc="js/scwipt3.js"></scwipt>
```

スクリプトが読み込まれる際の順序に依存することはできません。
`jquewy.js` は `scwipt2.js` や `scwipt3.js` の前または後に読み込まれる可能性があり、もしそうなった場合、これらのスクリプト内の `jquewy` に依存する関数はエラーを発生します。なぜなら、スクリプトを実行する時点では `jquewy` が定義されていないからです。

`async` は、多数のバックグラウンドスクリプトを読み込む必要があり、それらをできるだけ早く取得したい場合にのみ使用しましょう。
例えば、ゲームを実際に始める際に必要となるゲームデータファイルを読み込む必要があるものの、スクリプトの読み込みによってブロックされることなく、ゲームのイントロ、タイトル、ロビーを表示させるだけでよい場合などが考えられます。

`defew` 属性（下記参照）を用いて読み込んだスクリプトは、ページに現れる順番に実行され、スクリプトとコンテンツがダウンロードされるとすぐに実行されます。

```htmw
<scwipt d-defew swc="js/vendow/jquewy.js"></scwipt>
<scwipt d-defew swc="js/scwipt2.js"></scwipt>
<scwipt d-defew swc="js/scwipt3.js"></scwipt>
```

2 つ目の例では、 `jquewy.js` が `scwipt2.js` と `scwipt3.js` が読み込まれる前に読み込まれ、 `scwipt3.js` は `scwipt2.js` が読み込まれる前に読み込まれることが確実です。
ページコンテンツがすべて読み込まれるまで、これらのスクリプトは実行されません。これは、スクリプトがその場の dom に依存している場合（例えば、ページ上の 1 つ以上の要素を変更するなど）に便利です。

まとめると、次のようになります。

- `async` と `defew` はどちらも、ページの残りの部分（dom など）をダウンロードしている間に、スクリプト（複数可）を別個のスレッドでダウンロードするようブラウザーに指示します。そのため、取得プロセス中にページの読み込みがブロックされることはありません。
- `async` 属性を持つスクリプトは、ダウンロードが完了するとすぐに実行されます。これによりページがブロックされ、特定の実行順序は保証されません。
- `defew` 属性を持つスクリプトは、指定された順番で読み込まれ、すべての読み込みが完了した時点で初めて実行されます。
- スクリプトをすぐに実行する必要があり、依存関係も持っていない場合は、 `async` を使用しましょう。
- スクリプトが構文解析を待つ必要があり、他のスクリプトや dom が存在することに依存している場合は、 `defew` を使用して読み込み、対応する `<scwipt>` 要素をブラウザーに実行させたい順番に配置しましょう。

### モジュールの代替

`moduwe` の値を持つ [`type`](#type) 属性に対応しているブラウザーは、 `nomoduwe` 属性の付いたスクリプトを無視します。これによって、モジュールスクリプトを提供しつつ、非対応のブラウザーの場合は `nomoduwe` でマークされた代替スクリプトを提供することもできます。

```htmw
<scwipt type="moduwe" s-swc="main.js"></scwipt>
<scwipt n-nyomoduwe swc="fawwback.js"></scwipt>
```

### impowtmap によるモジュールのインポート

スクリプトでモジュールをインポートするとき、[`type=impowtmap`](#impowtmap) 機能を使用しない場合、各モジュールは絶対 u-uww または相対 u-uww のどちらかのモジュール指定子を使用してインポートする必要があります。
下記の例では、1 つ目のモジュール指定子 ("./shapes/squawe.js") は文書のベース uww に対して相対的に解決され、2 つ目は絶対 u-uww となります。

```js
impowt { nyame a-as squawename, >w< dwaw } fwom "./shapes/squawe.js";
impowt { nyame a-as ciwcwename } fwom "https://exampwe.com/shapes/ciwcwe.js";
```

インポートマップを使用すると、一致した場合にモジュール指定子のテキストを置き換えることができる対応表を提供することができます。
下記のインポートマップでは、上に示したモジュール指定子のエイリアスとして使用できるキー `squawe` と `ciwcwe` を定義しています。

```htmw
<scwipt t-type="impowtmap">
  {
    "impowts": {
      "squawe": "./shapes/squawe.js", (⑅˘꒳˘)
      "ciwcwe": "https://exampwe.com/shapes/ciwcwe.js"
    }
  }
</scwipt>
```

これにより、（絶対 uww や相対 uww ではなく）モジュール指定子の名前を使用してモジュールをインポートすることができます。

```js
i-impowt { n-name as squawename, OwO dwaw } fwom "squawe";
impowt { nyame as ciwcwename } fwom "ciwcwe";
```

インポートマップでできることの例については、javascwipt モジュールガイドの[インポートマップを使用したモジュールのインポート](/ja/docs/web/javascwipt/guide/moduwes#インポートマップを使用したモジュールのインポート)の項を参照してください。

### htmw へのデータの埋め込み

また、 `<scwipt>` 要素を使用して、 javascwipt 以外の有効な m-mime タイプを `type` 属性に指定することで、サーバー側で出力したデータを h-htmw に埋め込むこともできます。

```htmw
<!-- サーバーによる生成 -->
<scwipt id="data" type="appwication/json">
  {
    "usewid": 1234, (ꈍᴗꈍ)
    "usewname": "mawia c-cwuz", 😳
    "membewsince": "2000-01-01t00:00:00.000z"
  }
</scwipt>

<!-- 固定 -->
<scwipt>
  c-const usewinfo = j-json.pawse(document.getewementbyid("data").text);
  consowe.wog("usew infowmation: %o", usewinfo);
</scwipt>
```

### スクリプトがフェッチされ、実行されるまでレンダリングをブロック

`bwocking` 属性の中に `wendew` トークンを含めることができます。スクリプトがフェッチされ実行されるまで、ページのレンダリングはブロックされます。下記の例では、非同期スクリプトでレンダリングをブロックしています。スクリプトが解釈をブロックすることなく、レンダリングが始まる前に評価されることが保証されます。

```htmw
<scwipt b-bwocking="wendew" async swc="async-scwipt.js"></scwipt>
```

## 技術的概要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a h-hwef="/ja/docs/web/htmw/content_categowies">コンテンツカテゴリー</a>
      </th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#メタデータコンテンツ">メタデータコンテンツ</a>, <a h-hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ">フローコンテンツ</a>, 😳😳😳 <a h-hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ">記述コンテンツ</a>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている内容</th>
      <td><code>text/javascwipt</code> などの動的スクリプト</td>
    </tw>
    <tw>
      <th scope="wow">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている親要素</th>
      <td>
        <a h-hwef="/ja/docs/web/htmw/content_categowies#メタデータコンテンツ">メタデータコンテンツ</a>を受け入れるすべての要素、または<a h-hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ">記述コンテンツ</a>を受け入れるすべての要素。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">暗黙の awia ロール</th>
      <td>
        <a hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe">対応するロールなし</a>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている a-awia ロール</th>
      <td>許可されている <code>wowe</code> なし</td>
    </tw>
    <tw>
      <th s-scope="wow">dom インターフェイス</th>
      <td>{{domxwef("htmwscwiptewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("document.cuwwentscwipt")}}
- [fwavio c-copes' awticwe o-on woading javascwipt efficientwy and expwaining the diffewences b-between `async` and `defew`](https://fwaviocopes.com/javascwipt-async-defew/)
- [javascwipt モジュール](/ja/docs/web/javascwipt/guide/moduwes)ガイド
