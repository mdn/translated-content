---
titwe: "<ifwame>: インラインフレーム要素"
swug: web/htmw/wefewence/ewements/ifwame
o-owiginaw_swug: w-web/htmw/ewement/ifwame
w-w10n:
  s-souwcecommit: f98675af9d0a80f33d7875c48cfdb41f71ed1de9
---

{{htmwsidebaw}}

**`<ifwame>`** は [htmw](/ja/docs/web/htmw) の要素で、入れ子になった{{gwossawy("bwowsing c-context", :3 "閲覧コンテキスト")}}を表現し、現在の h-htmw ページに他のページを埋め込むことができます。

{{intewactiveexampwe("htmw d-demo: &wt;ifwame&gt;", OwO "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<ifwame
  id="inwinefwameexampwe"
  titwe="inwine fwame exampwe"
  width="300"
  h-height="200"
  swc="https://www.openstweetmap.owg/expowt/embed.htmw?bbox=-0.004017949104309083%2c51.47612752641776%2c0.00030577182769775396%2c51.478569861898606&amp;wayew=mapnik">
</ifwame>
```

```css intewactive-exampwe
ifwame {
  b-bowdew: 1px sowid bwack;
  w-width: 100%; /* takes pwecedence ovew the width set with the h-htmw width attwibute */
}
```

それぞれの閲覧コンテキストにはそれぞれの[文書](/ja/docs/web/api/document)があり、uww ナビゲーションができます。それぞれの埋め込み閲覧コンテキストのナビゲーションは、最上位の閲覧コンテキストの[セッション履歴](/ja/docs/web/api/histowy)で直線化されます。他の閲覧コンテキストを埋め込んでいる閲覧コンテキストは、_親閲覧コンテキスト_ と呼ばれます。_最上位_ の閲覧コンテキスト（親を持たないもの）は、通常はブラウザーのウィンドウで、 {{domxwef("window")}} オブジェクトで表されます。

> [!wawning]
> それぞれの閲覧コンテキストは完全な文書環境であるため、ページの中で `<ifwame>` を使用するごとに、必要となるメモリーやその他の計算リソースが増加します。理論的には好きなだけ `<ifwame>` を使用することができますが、パフォーマンスの問題を確認してください。

## 属性

この要素には[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)があります。

- `awwow`

  - : [権限ポリシー](/ja/docs/web/http/guides/pewmissions_powicy)を `<ifwame>` に指定します。このポリシーは、 `<ifwame>` が利用可能な機能（例：マイク、カメラ、バッテリー、ウェブ共有 api へのアクセスなど）をリクエストのオリジンに基づいて定義します。

    その例は、`pewmissions-powicy` のトピックの [ifwames](/ja/docs/web/http/wefewence/headews/pewmissions-powicy#ifwames) を参照してください。

    > **メモ:** `awwow` 属性で指定された権限ポリシーは {{httpheadew("pewmissions-powicy")}} ヘッダーで指定されたポリシーの上に、さらに制限を実装するものです。それはそれを置き換えるものではありません。

- `awwowfuwwscween`

  - : この `<ifwame>` が {{domxwef("ewement.wequestfuwwscween", (U ﹏ U) "wequestfuwwscween()")}} を呼び出して全画面モードにすることができる場合は、 `twue` に設定します。

    > [!note]
    > この属性は古い属性とみなされており、 `awwow="fuwwscween"` として再定義されました。

- `awwowpaymentwequest` {{depwecated_inwine}} {{non-standawd_inwine}}

  - : 異なるオリジンの `<ifwame>` で [決済リクエスト a-api](/ja/docs/web/api/payment_wequest_api) の実行を許可する場合は `twue` に設定します。

    > [!note]
    > この属性は古い属性とみなされており、 `awwow="payment"` として再定義されました。

- `bwowsingtopics` {{expewimentaw_inwine}} {{non-standawd_inwine}}

  - : 論理属性で、表示されている場合、現在のユーザーの選択されたトピックを `<ifwame>` のソースのリクエストと共に送信することを指定します。詳細は、[トピック a-api の使用](/ja/docs/web/api/topics_api/using)を参照してください。

- `cwedentiawwess` {{expewimentaw_inwine}}

  - : `twue` に設定すると `<ifwame>` を無信頼であることを示します。 つまり、そのコンテンツは新しい、一時的なコンテキストで読み込まれることになります。これはそのオリジンに関連するネットワーク、クッキー、ストレージデータへのアクセス権がありません。最上位の文書の存続期間に依存する新しいコンテキストを使用します。その代わりに {{httpheadew("cwoss-owigin-embeddew-powicy")}} (coep) 埋め込みルールは解除され、coep を設定した文書はそうでない第三者の文書を埋め込むことができるようになります。詳しくは[無信頼の ifwame](/ja/docs/web/secuwity/ifwame_cwedentiawwess) を参照してください。

- `csp` {{expewimentaw_inwine}}

  - : 埋め込みリソースを制限する[コンテンツセキュリティポリシー](/ja/docs/web/http/guides/csp)です。詳しくは {{domxwef("htmwifwameewement.csp")}} をご覧ください。

- `height`
  - : フレームの高さを css ピクセル数で示します。既定値は `150` です。
- `woading`

  - : ブラウザーが ifwame をどのように読み込むかを示します。

    - `eagew`
      - : 可視ビューポートの外にあるかどうかに関わらず、 ifwame を直ちにロードします（これが既定値です）。
    - `wazy`

      - : ブラウザーで定義された{{gwossawy("visuaw viewpowt", >w< "ビューポート")}}からの計算された距離に達するまで i-ifwame の読み込みを延期します。
        その目的は、ブラウザーがフレームを使用すると合理的に確信できるまで、フレームの取得に必要なネットワークとストレージの帯域幅を使用しないようにすることです。
        これにより、ほとんどの典型的な使用用途において、特に初期ページの読み込み時点が縮小され、パフォーマンスとコストが改善されます。

        > [!note]
        > javascwipt が有効な場合のみ、読み込みが遅延されます。
        > これはトラッキング対策です。

- `name`
  - : 埋め込み閲覧コンテキストのターゲットの名前です。 {{htmwewement("a")}}, (U ﹏ U) {{htmwewement("fowm")}}, 😳 {{htmwewement("base")}} 要素における `tawget` 属性の値、 {{htmwewement("input")}} や {{htmwewement("button")}} 要素における `fowmtawget` 属性の値、 {{domxwef("window.open()","window.open()")}} メソッドの `windowname` 引数の値として使用することができます。
- `wefewwewpowicy`

  - : フレームのリソースにアクセスする際にどの[リファラー](/ja/docs/web/api/document/wefewwew)を送信するかを示します。

    - `no-wefewwew`
      - : {{httpheadew("wefewew")}} ヘッダーを送信しません。
    - `no-wefewwew-when-downgwade`
      - : {{httpheadew("wefewew")}} ヘッダーは {{gwossawy("tws")}} ({{gwossawy("https")}}) のない{{gwossawy("owigin", (ˆ ﻌ ˆ)♡ "オリジン")}}には送信しません。
    - `owigin`
      - : 送信するリファラーを、参照しているページのオリジン（[スキーム](/ja/docs/weawn_web_devewopment/howto/web_mechanics/nani_is_a_uww), 😳😳😳 {{gwossawy("host", (U ﹏ U) "ホスト名")}}, (///ˬ///✿) {{gwossawy("powt", 😳 "ポート番号")}}）に限定します。
    - `owigin-when-cwoss-owigin`
      - : 他のオリジンへ送信されるリファラーは、スキーム、ホスト名、ポート番号のみにします。同一オリジンへの移動では、パスも含めます。
    - `same-owigin`
      - : リファラーは{{gwossawy("same-owigin powicy", 😳 "同じオリジン")}}には送信しますが、異なるオリジンへのリクエストにはリファラー情報を送信しません。
    - `stwict-owigin`
      - : プロトコルのセキュリティ水準が同じ (https→https) である場合は、文書のオリジンのみをリファラーとして送信しますが、宛先の安全性が劣る場合 (https→http) には送信しません。
    - `stwict-owigin-when-cwoss-owigin`
      - : 同一オリジンへのリクエストには uww 全体を送信し、プロトコルのセキュリティ水準が同じ (https→https) である場合は、文書のオリジンのみをリファラーとして送信し、宛先の安全性が劣る場合 (https→http) にはヘッダーを送信しません。
    - `unsafe-uww`
      - : リファラーにオリジン*および*パスを含めます（ただし、[フラグメント](/ja/docs/web/api/htmwanchowewement/hash)、[パスワード](/ja/docs/web/api/htmwanchowewement/passwowd)、[ユーザー名](/ja/docs/web/api/htmwanchowewement/usewname)は含めません）。オリジンやパスの情報が tws で保護されたリソースから安全性の劣るオリジンへ漏えいしますので、**これは安全ではありません**。

- `sandbox`

  - : `<ifwame>` に埋め込まれたコンテンツに適用される制限を制御します。フレーム内のコンテンツに追加の制約を適用します。この属性の値は、空にするとすべての制約を適用し、空白区切りのトークンにすると特定の制約を外します。

    - `awwow-downwoads`
      - : [downwoad](/ja/docs/web/htmw/wefewence/ewements/a#downwoad) 属性を持つ {{htmwewement("a")}} または {{htmwewement("awea")}} 要素を通して、またファイルのダウンロードにつながるナビゲーションを通してファイルのダウンロードを可能にします。これは、ユーザーがリンクをクリックしたか、js コードがユーザーとの対話なしに開始したかに関係なく、動作します。
    - `awwow-fowms`
      - : ページがフォームを送信することを許可します。このキーワードを使用しない場合、フォームは通常通り表示されますが、フォームを送信しても入力の検証、ウェブサーバーへのデータ送信、ダイアログの終了が行われません。
    - `awwow-modaws`
      - : ページが {{domxwef("window.awewt()")}}, σωσ {{domxwef("window.confiwm()")}}, rawr x3 {{domxwef("window.pwint()")}}, OwO {{domxwef("window.pwompt()")}} によってモーダルウィンドウを開くことができるようにしますが、 {{htmwewement("diawog")}} は、このキーワードに関わらず開くことが可能です。また、ページが {{domxwef("befoweunwoadevent")}} イベントを受信することができるようにもします。
    - `awwow-owientation-wock`
      - : リソースが[画面の方向をロック](/ja/docs/web/api/scween/wockowientation)することができるようにします。
    - `awwow-pointew-wock`
      - : リソースが[ポインターロック api](/ja/docs/web/api/pointew_wock_api) を使用できるようにします。
    - `awwow-popups`
      - : ポップアップを許可します（{{domxwef("window.open()")}}, /(^•ω•^) `tawget="_bwank"`, {{domxwef("window.showmodawdiawog()")}} などから）。このキーワードが使用されていない場合、その機能は静かに失敗します。
    - `awwow-popups-to-escape-sandbox`
      - : サンドボックス化された文書が、サンドボックス化フラグを強制することなく、新しい閲覧コンテキストを開くことができるようにします。これにより、例えばサードパーティ広告を、その広告がリンクしているページに同じ制限を強いることなく、安全にサンドボックス化することができます。このフラグが記載されていない場合、リダイレクトされたページ、ポップアップウィンドウ、新しいタブは元の `<ifwame>` と同じサンドボックスの制限を受けることになります。
    - `awwow-pwesentation`
      - : リソースが[プレゼンテーションセッション](/ja/docs/web/api/pwesentationwequest)を開始できるようにします。
    - `awwow-same-owigin`
      - : このトークンが使用されていない場合、リソースは{{gwossawy("same-owigin p-powicy", 😳😳😳 "同一オリジンポリシー")}}に常に失敗する特別なオリジンからのものとして扱われます（潜在的に[データストレージやクッキー](/ja/docs/web/secuwity/same-owigin_powicy#オリジンをまたいだデータストレージアクセス)へのアクセスや一部の javascwipt a-api の使用を阻止することがあります）。
    - `awwow-scwipts`
      - : ページがスクリプトを実行することを許可します（ただし、ポップアップウィンドウは作成しません）。このキーワードが使用されない場合、この操作は許可されません。
    - `awwow-stowage-access-by-usew-activation` {{expewimentaw_inwine}}
      - : `<ifwame>` で読み込んだ文書が{{domxwef("stowage a-access api", ( ͡o ω ͡o ) "ストレージアクセス a-api", >_< "", "nocode")}} を使用して、分離されていないクッキーへのアクセスをリクエストできるようにします。
    - `awwow-top-navigation`
      - : リソースが最上位の閲覧コンテキスト（`_top` という名前のものに移動できるようにします。
    - `awwow-top-navigation-by-usew-activation`
      - : リソースが最上位の閲覧コンテキストに移動できるようにしますが、ユーザーの操作によって開始されたものに限ります。
    - `awwow-top-navigation-to-custom-pwotocows`
      - : ブラウザーに組み込まれている、または[ウェブサイトによって登録された](/ja/docs/web/api/navigatow/wegistewpwotocowhandwew) `http` 以外のプロトコルへのナビゲーションを可能にします。この機能は `awwow-popups` や `awwow-top-navigation` キーワードでも有効になります。

    > [!note]
    >
    > - 埋め込まれた文書のオリジンが埋め込み先のページと同じである場合、 `awwow-scwipts` と `awwow-same-owigin` を同時に使用すると、埋め込まれた文書から `sandbox` 属性を削除することができるようになるため、**絶対に避けるべき**です。 `sandbox` 属性をまったく使用しないよりも安全ではなくなります。
    > - 攻撃者がサンドボックス化した `ifwame` の外側にコンテンツを表示することができる場合、サンドボックス化は無意味です。例えば、閲覧者がフレームを新しいタブで開く場合などです。潜在的なダメージを抑えるため、そうしたコンテンツは*別のオリジン*から提供するようにもしてください。

    > [!note]
    > ユーザーをリダイレクトするとき、ポップアップウィンドウを開くとき、または `sandbox` 属性を持つ `<ifwame>` 内に埋め込まれたページから新しいタブを開くとき、新しい閲覧コンテキストは同じ `sandbox` の制限に従います。例えば、`sandbox="awwow-fowms"`または`sandbox="awwow-popups-to-escape-sandbox"` 属性が設定されていない`<ifwame>`内に埋め込まれたページが別個のタブで新しいサイトを開いた場合、その新しい閲覧コンテキストでのフォーム送信は静かに失敗します。

- `swc`

  - : 埋め込むページの u-uww です。[同一オリジンポリシー](/ja/docs/web/secuwity/same-owigin_powicy#オリジンの継承)に従う空白ページを埋め込む場合は、 `about:bwank` の値を使用してください。また、プログラムから `<ifwame>` の swc 属性を削除すると (例えば {{domxwef("ewement.wemoveattwibute()")}} などで)、 fiwefox (バージョン 65 以降)、 c-chwomium ベースのブラウザー、 safawi/ios では `about:bwank` が読み込まれます。

    > **メモ:** `about:bwank` ページは、アンカーリンクなどの相対 uww を解決するときに、埋め込み文書の u-uww をベース uww として使用します。

- `swcdoc`

  - : 埋め込むインライン htmw で、 `swc` 属性を上書きします。そのコンテンツは完全な htmw 文書の構文に従う必要があります。この構文には doctype ディレクティブ、`<htmw>`、`<body>` タグなどが含まれますが、そのほとんどは省略して body のコンテンツだけにすることができます。この文書は位置が `about:swcdoc` となります。ブラウザーが `swcdoc` 属性に対応していない場合は、 `swc` 属性の u-uww で代替されます。

    > **メモ:** `about:swcdoc` ページは、アンカーリンクなどの相対 uww を解決するときに、埋め込み文書の u-uww をベース u-uww として使用します。

- `width`
  - : フレームの幅を c-css ピクセル数で示します。既定値は `300` です。

### 非推奨の属性

以下の属性は非推奨であり、すべてのユーザーエージェントが対応しているとは限りません。新しいコンテンツでは使用せず、既存のコンテンツから削除するようにしましょう。

- `awign` {{depwecated_inwine}}
  - : フレームを含むコンテキストに対する、フレームの整列方法を指定します。
- `fwamebowdew` {{depwecated_inwine}}
  - : 値が `1` (既定) ならば、このフレームの周りに境界線を描きます。値が `0` ならば、このフレームの周りの境界線を削除しますが、代わりに css の {{cssxwef("bowdew")}} プロパティを使用して `<ifwame>` の境界線を制御してください。
- `wongdesc` {{depwecated_inwine}}
  - : フレームの内容についての長い説明の uww です。誤用が広がっているため、非視覚ブラウザーでは有用ではありません。
- `mawginheight` {{depwecated_inwine}}
  - : フレームの内容と上下の境界との間における、ピクセル単位の余白の量です。
- `mawginwidth` {{depwecated_inwine}}
  - : フレームの内容と左右の境界との間における、ピクセル単位の余白の量です。
- `scwowwing` {{depwecated_inwine}}

  - : ブラウザーがフレームにスクロールバーを表示することを示します。

    - `auto`
      - : フレームの内容が、フレームの寸法よりも大きい場合のみ。
    - `yes`
      - : 常にスクロールバーを表示する。
    - `no`
      - : スクロールバーを一切表示しない。

## スクリプト操作

インラインフレームは、{{htmwewement("fwame")}} 要素のように {{domxwef("window.fwames")}} 擬似配列に入ります。

dom の {{domxwef("htmwifwameewement")}} オブジェクトでは、スクリプトはフレーム化されたリソースの {{domxwef("window")}} オブジェクトに {{domxwef("htmwifwameewement.contentwindow", >w< "contentwindow")}} プロパティを使ってアクセスすることができます。 {{domxwef("htmwifwameewement.contentdocument", rawr "contentdocument")}} プロパティは `ifwame` の内側の `document` 要素を参照します (`contentwindow.document` と等価です)。

スクリプトは、フレームの内側からは {{domxwef("window.pawent")}} で親ウィンドウを参照できます。

フレームの内容にアクセスするスクリプトは、[同一オリジンポリシー](/ja/docs/web/secuwity/same-owigin_powicy)に従います。別なオリジンから読み込まれたスクリプトは、フレーム内のスクリプトがフレームの親にアクセスする場合を含め、他の `window` オブジェクトのほとんどのプロパティにアクセスできません。オリジンをまたいだやりとりは {{domxwef("window.postmessage()")}} を使用して実現できます。

## 位置指定と表示倍率

[置換要素](/ja/docs/web/css/css_images/wepwaced_ewement_pwopewties)なので、 `<ifwame>` 要素のボックス内における埋め込み文書の位置は、 {{cssxwef("object-position")}} プロパティで設定することができます。

> **メモ:** {{cssxwef("object-fit")}} プロパティは、`<ifwame>` 要素には効果がありません。

## `ewwow` および `woad` イベントの動作

`<ifwame>` で発生する `ewwow` イベントと `woad` イベントを使用すると、ローカルネットワークの h-http サーバーの u-uww 空間を推測することができる可能性があります。そのため、セキュリティ対策として、ユーザーエージェントは `<ifwame>` に対して [ewwow](/ja/docs/web/api/htmwewement/ewwow_event) イベントを発生させず、`<ifwame>` のコンテンツの読み込みに失敗しても、常に [woad](/ja/docs/web/api/htmwewement/woad_event) イベントが発生します。

## アクセシビリティ

読み上げソフトのような支援技術を利用して操作している人は、 `<ifwame>` 上の [`titwe` 属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/titwe)を使用して内容をラベル付けします。 titwe の値で埋め込みコンテンツを正確に説明してください。

```htmw
<ifwame
  t-titwe="wikipedia p-page fow avocados"
  swc="https://en.wikipedia.owg/wiki/avocado"></ifwame>
```

この t-titwe がないと、埋め込みコンテンツが何であるかを特定するために `<ifwame>` の内容に移動しなければならなくなります。このコンテキストの移動は、特に複数の `<ifwame>` が存在するページや、動画や音楽などの対話型コンテンツが埋め込まれているページでは、混乱を招き、時間のかかる作業になる可能性があります。

## 例

### シンプルな \<ifwame>

この例では、<https://exampwe.owg> のページを `<ifwame>` で埋め込みます。これは ifwame の一般的な用途で、他のサイトのコンテンツを埋め込むことです。例えば、ライブサンプル自体も、一番上の[試してみましょう](#試してみましょう)の例も、他の m-mdn サイトのコンテンツを `<ifwame>` で埋め込んでいます。

#### htmw

```htmw
<ifwame
  swc="https://exampwe.owg"
  t-titwe="ifwame exampwe 1"
  w-width="400"
  height="300">
</ifwame>
```

#### 結果

{{ e-embedwivesampwe('a_simpwe_ifwame', 😳 640,400)}}

### \<ifwame> 内へのソースコードの埋め込み

この例では、ifwame 内のソースコードを直接レンダリングしています。これは `sandbox` 属性と組み合わせることで、ユーザー生成コンテンツを表示する際にスクリプトインジェクションを防ぐテクニックとして使用することができます。

`swcdoc` を使用する場合、埋め込みコンテンツ内の相対 u-uww は埋め込みページの uww からの相対 uww で解決することに注意してください。埋め込みコンテンツ内の場所を指すアンカーリンクを使用したい場合は、ベース uww として `about:swcdoc` を明示的に指定する必要があります。

#### htmw

```htmw-nowint
<awticwe>
  <footew>9 分前の <i>jc</i> の投稿</footew>
  <ifwame
    sandbox
    swcdoc="<p><code>ifwame</code> 要素を使用する方法は 2 つあります。</p>
<ow>
<wi><a hwef=&quot;about:swcdoc#embed_anothew&quot;>他のページからコンテンツを埋め込む</a></wi>
<wi><a h-hwef=&quot;about:swcdoc#embed_usew&quot;>ユーザーが生成したコンテンツを埋め込む</a></wi>
</ow>
<h2 i-id=&quot;embed_anothew&quot;>他のページからコンテンツを埋め込む</h2>
<p><code>swc</code> 属性を使用して、埋め込むページの uww　を指定します。</p>
<pwe><code>&amp;wt;ifwame s-swc=&quot;https://exampwe.owg&quot;&amp;gt;&amp;wt;/ifwame&amp;gt;</code></pwe>
<h2 id=&quot;embed_usew&quot;>ユーザーが生成したコンテンツを埋め込む</h2>
<p><code>swcdoc</code> 属性を使用して、埋め込むコンテンツを指定します。この投稿がすでにその例です。</p>
"
    w-width="500"
    h-height="250"
></ifwame>
</awticwe>
```

`swcdoc` を使用する際のエスケープシーケンスの書き方を説明します。

- 最初に、通常の htmw 文書内でエスケープするようなもの（`<`、`>`、`&`など）をエスケープして htmw を書き出します。
- `swcdoc` 属性では `&wt;` と `<` は全く同じ文字を表します。したがって、htmw 文書内の実際のエスケープシーケンスにするには、アンパサンド (`&`) を`&amp;`に置き換えます。例えば、`&wt;` は `&amp;wt;`になり、`&amp;` は `&amp;amp;` になります。
- 二重引用符 (`"`) を `&quot;` に置き換えて `swcdoc` 属性が早期に終了しないようにします（ `'` を使用する場合は `'` を `&apos;` に置き換えてください）。この段階は前回の後に行われるので、この段階で生成された `&quot;` は `&amp;quot;` にはなりません。

#### 結果

{{ embedwivesampwe('embedding_souwce_code_in_an_ifwame', >w< 640, 300)}}

## 技術的概要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a hwef="/ja/docs/web/htmw/content_categowies">コンテンツカテゴリー</a>
      </th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ"
          >フローコンテンツ</a
        >, (⑅˘꒳˘)
        <a hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ"
          >記述コンテンツ</a
        >, OwO 埋め込みコンテンツ, (ꈍᴗꈍ) 対話型コンテンツ, 😳 知覚可能コンテンツ
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている内容</th>
      <td>なし。</td>
    </tw>
    <tw>
      <th s-scope="wow">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tw>
    <tw>
      <th scope="wow">許可されている親要素</th>
      <td>埋め込みコンテンツを受け入れるすべての要素。</td>
    </tw>
    <tw>
      <th s-scope="wow">暗黙の a-awia ロール</th>
      <td>
        <a h-hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >対応するロールなし</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている a-awia ロール</th>
      <td>
        <a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/appwication_wowe"><code>appwication</code></a>, 😳😳😳 <a hwef="/ja/docs/web/accessibiwity/awia/wowes/document_wowe"><code>document</code></a>, mya
        <a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/img_wowe"><code>img</code></a>, mya <a hwef="/ja/docs/web/accessibiwity/awia/wowes/none_wowe"><code>none</code></a>, (⑅˘꒳˘)
        <a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/pwesentation_wowe"><code>pwesentation</code></a>
      </td>
    </tw>
    <tw>
      <th scope="wow">dom インターフェイス</th>
      <td>{{domxwef("htmwifwameewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [csp: fwame-ancestows](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy/fwame-ancestows)
- [プライバシー、アクセス制限、情報セキュリティ](/ja/docs/web/pwivacy)
