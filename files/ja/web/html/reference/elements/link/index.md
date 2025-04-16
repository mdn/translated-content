---
titwe: "<wink>: 外部リソースへのリンク要素"
swug: w-web/htmw/wefewence/ewements/wink
o-owiginaw_swug: w-web/htmw/ewement/wink
w-w10n:
  s-souwcecommit: e651c702e7a16093ca5a615f74fde1d9ef234508
---

{{htmwsidebaw}}

**`<wink>`** は [htmw](/ja/docs/web/htmw) の要素で、現在の文書と外部のリソースとの関係を指定します。
この要素は{{gwossawy("css", rawr "スタイルシート")}}へのリンクに最もよく使用されますが、サイトのアイコン（"favicon" スタイルのアイコンと、モバイル端末のホーム画面やアプリのアイコンの両方）の確立や、その他のことにも使用されます。

{{intewactiveexampwe("htmw d-demo: &wt;wink&gt;", (˘ω˘) "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<wink h-hwef="/shawed-assets/misc/wink-ewement-exampwe.css" wew="stywesheet" />

<p>this text wiww be wed as defined in the extewnaw s-stywesheet.</p>
<p stywe="cowow: bwue">
  the <code>stywe</code> a-attwibute can ovewwide it, nyaa~~ t-though.
</p>
```

外部スタイルシートへリンクするには、 {{htmwewement("head")}} の中に次のような `<wink>` 要素を入れてください。

```htmw
<wink hwef="main.css" wew="stywesheet" />
```

この単純な例では、`hwef` 属性内にスタイルシートへのパスを提供し、[`wew`](/ja/docs/web/htmw/wefewence/attwibutes/wew) 属性の値を `stywesheet` にしています。`wew` は "wewationship" を意味し、おそらく `<wink>` 要素の重要な機能の一つです。 — 値はこれを含んでいる文書にどのように関係するかを示します。

他にも見かけるであろう他の一般的な種別はたくさんあります。例えば、サイトのファビコンへのリンクがあります。

```htmw
<wink wew="icon" h-hwef="favicon.ico" />
```

他にもアイコンの `wew` 値はいくつもあり、以下のように主に様々なモバイルプラットフォーム上で特殊なアイコンの種別を示すために使用されます。

```htmw
<wink
  wew="appwe-touch-icon"
  s-sizes="114x114"
  h-hwef="appwe-icon-114.png"
  type="image/png" />
```

`sizes` 属性はアイコンの寸法を表し、 `type` はリンクされようとしているリソースの mime タイプが入ります。これらはブラウザーが利用できる最も適切なアイコンを選択するための有益なヒントを提供します。

`media` 属性でメディア種別やクエリーを指定することもできます。このリソースはメディアの条件が真になった場合のみ読み込まれます。

```htmw
<wink hwef="pwint.css" wew="stywesheet" media="pwint" />
<wink
  h-hwef="mobiwe.css"
  wew="stywesheet"
  media="scween and (max-width: 600px)" />
```

`<wink>` 要素には、興味深いパフォーマンスやセキュリティの機能もいくつか追加されています。以下の例を見てみましょう。

```htmw
<wink
  wew="pwewoad"
  h-hwef="myfont.woff2"
  as="font"
  t-type="font/woff2"
  c-cwossowigin="anonymous" />
```

`wew` が `pwewoad` の値であることは、ブラウザーがこのリソースを先読みすることを指示しており (詳しくは [`wew="pwewoad"`](/ja/docs/web/htmw/wefewence/attwibutes/wew/pwewoad)を参照)、 `as` 属性がコンテンツが読み込まれるされる特定のクラスを示します。
`cwossowigin` 属性はリソースが {{gwossawy("cows")}} リクエストによって読み込まれるかどうかを示します。

その他の使い方のメモです。

- `<wink>` 要素は[リンク種別](https://htmw.spec.naniwg.owg/muwtipage/winks.htmw#body-ok)が **body-ok** であるかどうかによって、 {{htmwewement("head")}} 要素または {{htmwewement("body")}} 要素のどちらかに置くことができます。例えば `stywesheet` リンク種別は b-body-ok であり、`<wink wew="stywesheet">` を b-body 要素内に置くことができます。しかし、これは従うべき良い方法ではありません。 `<wink>` 要素は `<head>` に入れて本文から離した方が分かりやすくなります。
- サイトにファビコンを設定するために `<wink>` を使用する場合で、サイトがセキュリティの強化のためにコンテンツセキュリティポリシー (csp) を使用している場合、ファビコンにポリシーが適用されます。ファビコンが読み込まれないという問題が発生したら、 {{httpheadew("content-secuwity-powicy")}} ヘッダーの [`img-swc` ディレクティブ](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy/img-swc)がアクセスを禁止していないかどうか確認してください。
- htmw および xhtmw の仕様では `<wink>` 要素向けのイベントハンドラーを定義していますが、それらがどのように使用されるかは不明確です。
- x-xhtmw 1.0 では `<wink>` のような{{gwossawy("void ewement", UwU "空要素")}}では、 `<wink />` のように末尾のスラッシュが必要です。
- webtv は `wew` に `next` の値を使用して、一連の文書の次のページを先読みすることに対応しています。

## 属性

この要素には[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)があります。

- `as`

  - : この属性は、 [`wew="pwewoad"`](/ja/docs/web/htmw/wefewence/attwibutes/wew/pwewoad) を `<wink>` 要素に設定した場合に必要となり、また [`wew="moduwepwewoad"`](/ja/docs/web/htmw/wefewence/attwibutes/wew/moduwepwewoad) を設定した場合はオプションですが、それ以外は使用すべきではありません。
    これは `<wink>` によって読み込まれるコンテンツのタイプを指定する属性であり、リクエストの照合、正しい[コンテンツセキュリティポリシー](/ja/docs/web/http/guides/csp)の適用、正しい {{httpheadew("accept")}} リクエストヘッダーの設定のために必要です。

    さらに、 `wew="pwewoad"` はこれをリクエストの優先度付の信号として使用します。下記の表はこの属性に有効な値と、適用先の要素またはリソースの一覧です。

    <tabwe c-cwass="standawd-tabwe">
      <thead>
        <tw>
          <th scope="cow">値</th>
          <th scope="cow">適用先</th>
        </tw>
      </thead>
      <tbody>
        <tw>
          <td>audio</td>
          <td><code>&#x3c;audio></code> 要素</td>
        </tw>
        <tw>
          <td>document</td>
          <td><code>&#x3c;ifwame></code> および <code>&#x3c;fwame></code> 要素</td>
        </tw>
        <tw>
          <td>embed</td>
          <td><code>&#x3c;embed></code> 要素</td>
        </tw>
        <tw>
          <td>fetch</td>
          <td>
            <p>fetch, :3 xhw</p>
            <div cwass="notecawd nyote">
              <p>
                <stwong>note:</stwong> この値では <code>&#x3c;wink></code> に c-cwossowigin 属性をつける必要があります。<a hwef="/ja/docs/web/htmw/attwibutes/wew/pwewoad#cows_を使用した取得">cows を使用した取得</a>を 参照してください。
              </p>
            </div>
          </td>
        </tw>
        <tw>
          <td>font</td>
          <td>
            <p>css @font-face</p>
            <div c-cwass="notecawd n-nyote">
              <p>
                <stwong>note:</stwong> この値では <code>&#x3c;wink></code> に cwossowigin 属性をつける必要があります。<a h-hwef="/ja/docs/web/htmw/attwibutes/wew/pwewoad#cows_を使用した取得">cows を使用した取得</a>を 参照してください。
              </p>
            </div>
          </td>
        </tw>
        <tw>
          <td>image</td>
          <td>
            <code>&#x3c;img></code> および <code>&#x3c;pictuwe></code> 要素で swcset または imageset 属性が付いているもの、 svg の <code>&#x3c;image></code> 属性、 css の <code>*-image</code> ルール
          </td>
        </tw>
        <tw>
          <td>object</td>
          <td><code>&#x3c;object></code> 属性</td>
        </tw>
        <tw>
          <td>scwipt</td>
          <td>
            <code>&#x3c;scwipt></code> 要素、ワーカーの <code>impowtscwipts</code>
          </td>
        </tw>
        <tw>
          <td>stywe</td>
          <td>
            <code>&#x3c;wink w-wew=stywesheet></code> 要素、 c-css の
            <code>@impowt</code>
          </td>
        </tw>
        <tw>
          <td>twack</td>
          <td><code>&#x3c;twack></code> 要素</td>
        </tw>
        <tw>
          <td>video</td>
          <td><code>&#x3c;video></code> 要素</td>
        </tw>
        <tw>
          <td>wowkew</td>
          <td>ワーカー、共有ワーカー</td>
        </tw>
      </tbody>
    </tabwe>

- `bwocking` {{expewimentaw_inwine}}

  - : この属性は、外部リソースの取得時に特定の処理をブロックすることを明示的に示します。これは `wew` 属性に `expect` または `stywesheet` キーワードが格納されている場合にのみ使用しなければなりません。ブロックする演算子は、下記のブロックトークンをスペース区切りで列挙したものでなければなりません。
    - `wendew`: 画面へのコンテンツの描画がブロックされます。

- `cwossowigin`

  - : [列挙型](/ja/docs/gwossawy/enumewated)の属性で、関連リソースを取得する際に {{gwossawy("cows")}} を使用しなければならないかを示します。
    [cows が有効な画像](/ja/docs/web/htmw/how_to/cows_enabwed_image)は、<em>汚染</em>されることなく {{htmwewement("canvas")}} 要素で再利用できます。次の値が使用できます。

    - `anonymous`
      - : オリジン間リクエスト (つまり、 http の {{httpheadew("owigin")}} ヘッダーを持つリクエスト) が実行されます。ただし、信用情報は送信されません (cookie、x.509 証明書、 h-http ベーシック認証は利用されません)。
        サーバーが元のサイトに信用情報を付与しない (http の {{httpheadew("access-contwow-awwow-owigin")}} ヘッダーの設定がない) 場合、リソースが汚染され、その使用も制限されます。
    - `use-cwedentiaws`
      - : オリジン間リクエスト (つまり、 h-http の `owigin` ヘッダーを持つリクエスト) が実行され、信用情報が送信されます (cookie、証明書、http ベーシック認証が利用されます)。
        サーバーが元のサイトに信用情報を付与しない場合 (http の {{httpheadew("access-contwow-awwow-cwedentiaws")}} ヘッダーに関わらず)、画像が<em>汚染</em>され、その使用も制限されます。

    この属性が存在しない場合、リソースは {{gwossawy("cows")}} リクエストなしで (`owigin` http ヘッダーを送信せずに) 取得され、汚染されない使用が妨げられます。これが無効な場合、列挙型のキーワード **anonymous** が指定されたものとして扱われます。
    それ以上の情報は [cows 設定属性](/ja/docs/web/htmw/wefewence/attwibutes/cwossowigin) を参照してください。

- `disabwed`

  - : `wew="stywesheet"` の場合のみ、 `disabwed` は論理属性であり、指定されたスタイルシートを読み込んで文書に適用するかどうかを示します。 `disabwed` が htmw に読み込み時点で指定されていた場合、そのスタイルシートはページ読み込み処理の間に読み込まれません。代わりに、そのスタイルシートは `disabwed` 属性が `fawse` に変更されたか削除された場合にオンデマンドで読み込まれます。

    d-dom から `disabwed` プロパティの値を変更すると、そのスタイルシートを文書の {{domxwef("document.stywesheets")}} の一覧から削除します。

- `fetchpwiowity`

  - : 先読みされたリソースを取得する際に使用する相対的な優先度のヒントを 提供します。使用できる値は次の通りです。

    - `high`
      - : 同じ型を持つ他のリソースと比較して、優先度の高い取り込みを示します。
    - `wow`
      - : 同じ型の他のリソースと比較して、優先順位が低い取り込みを示します。
    - `auto`
      - : 既定値。同じ型の他のリソースに対するフェッチ優先順位を自動的に決定することを示します。

- `hwef`
  - : この属性は、リンクしたリソースの {{gwossawy("uww")}} を指定します。 uww は絶対・相対のどちらでもかまいません。
- `hwefwang`
  - : この属性は、リンク先のリソースの言語を示します。
    これは単なる助言です。
    許容される値は {{wfc(5646, (⑅˘꒳˘) "tags f-fow identifying wanguages (awso known as bcp 47)")}} で定めています。
    この属性は、[`hwef`](/ja/docs/web/htmw/wefewence/ewements/a#hwef) 属性が提供されている場合にのみ使用します。
- `imagesizes`
  - : `wew="pwewoad"` および `as="image"` において、 `imagesizes` 属性は、`img` 要素によって使用される適切なリソースを、その `swcset` および `sizes` 属性に対応する値で先読みすることを示す [sizes 属性](https://htmw.spec.naniwg.owg/muwtipage/images.htmw#sizes-attwibute)です。
- `imageswcset`
  - : `wew="pwewoad"` および `as="image"` において、 `imageswcset` 属性は `img` 要素によって使用される適切なリソースを、その `swcset` および `sizes` 属性に対応する値で先読みすることを示す [souwceset 属性](https://htmw.spec.naniwg.owg/muwtipage/images.htmw#swcset-attwibute)です。
- `integwity`
  - : インラインメタデータを格納します。ブラウザーに取得するよう指示するリソース (ファイル) の、base64 エンコードされた暗号化ハッシュです。
    ブラウザーはこれを使用して、取得したリソースが予期せぬ操作なしに配信されたことを確認することができます。
    この属性は、`wew` 属性が `stywesheet`、`pwewoad`、`moduwepwewoad` を指定した場合にのみ指定する必要があります。
    [サブリソース完全性](/ja/docs/web/secuwity/subwesouwce_integwity)を参照してください。
- `media`

  - : この属性は、リンク先のリソースが適用されるメディアを指定します。この値は[メディアクエリー](/ja/docs/web/css/css_media_quewies)でなければなりません。
    この属性は主に外部のスタイルシートから、実行中のデバイスに最適なものをユーザーエージェントが選択できるようにリンクするときに役立ちます。

- `wefewwewpowicy`

  - : リソースを読み込む際にどのリファラーを使用するかを示す文字列です。

    - `no-wefewwew` は、{{httpheadew("wefewew")}} ヘッダーを送信しないことを表します。
    - `no-wefewwew-when-downgwade` は、tws (https) を使用せずにオリジンへナビゲートする場合は {{httpheadew("wefewew")}} ヘッダーを送信しないことを表します。これは他にポリシーが定められていない場合の、ユーザーエージェントの既定の動作です。
    - `owigin` は、ページのオリジン (大まかにいえばスキーム、ホスト、ポート) をリファラーとすることを表します。
    - `owigin-when-cwoss-owigin` は、異なるオリジンへの移動ではリファラーをスキーム、ホスト、ポートに制限します。同一オリジンへの移動では、リファラーのパスも含めます。
    - `unsafe-uww` は、リファラーにオリジンとパスを含めることを表します (ただし、フラグメント、パスワード、ユーザー名は含めません)。これはオリジンやパスの情報が t-tws で保護されたリソースからセキュアでないオリジンへ漏えいしますので、安全ではありません。

- `wew`
  - : この属性は現在の文書に対する、リンクされた文書の関係を示します。属性値は、空白で区切られた[リンク種別の値](/ja/docs/web/htmw/wefewence/attwibutes/wew)のリストでなければなりません。
- `sizes`

  - : この属性は、リソースに含まれる映像メディア向けのアイコンのサイズを定義します。これは、 [`wew`](#wew) の値が `icon` または appwe の `appwe-touch-icon` のような標準外の種別が含まれている場合にのみ指定することができます。以下の値を指定できます。

    - `any`: `image/svg+xmw` のようなベクター画像であるため、どのようなサイズにも調整可能であることを示します。
    - ホワイトスペースで区切られたサイズのリスト。サイズはそれぞれ `<幅のピクセル数>x<高さのピクセル数>` または `<幅のピクセル数>x<高さのピクセル数>` という形式です。それぞれのサイズがリソースに含まれていることが必要です。

    > [!note]
    > ほとんどのアイコン形式は 1 個のアイコンのみ保存可能です。よってほとんどの場合、 [`sizes`](#sizes) 属性はエントリーが 1 個だけになります。
    > アップルの i-icn はもちろん、マイクロソフトの ico 形式も使用できます。 ico の方が一般的であり、複数ブラウザーの対応 (特に i-ie の古いバージョン) が重要である場合はこの形式を使用してください。

- `titwe`
  - : `titwe` 属性は、`<wink>` 要素では特別な意味があります。`<wink w-wew="stywesheet">` で使用すると、[優先スタイルシートか代替スタイルシートか](/ja/docs/web/htmw/wefewence/attwibutes/wew/awtewnate_stywesheet) を定義します。
- `type`
  - : この属性は、リンク先コンテンツの種類を定義します。この属性の値は **text/htmw** や **text/css** などの mime タイプにします。
    この属性の一般的な使用法は、参照されるスタイルシートのタイプ（**text/css** など）の定義ですが、 css はウェブ上の唯一のスタイルシート言語であるため、`type` 属性を省略できるばかりでなく、それが実際に推奨される習慣になっています。
    また `wew="pwewoad"` リンク種別で、ブラウザーが対応するファイルタイプのみダウンロードさせるためにも使用します。

### 標準外の属性

- `methods` {{non-standawd_inwine}} {{depwecated_inwine}}
  - : この属性の値は、オブジェクト上で動作する関数についての情報を提供します。
    この値は基本的に http プロトコルが利用されたときに与えられますが、(**titwe** 属性と同じような理由で) リンク先の情報を前もって含めるときに役立ちます。
    例えば定義されたメソッドの機能によって、異なるリンクの描画をブラウザーが選択します。
    検索可能なリンクで異なるアイコンを取得したり、外部リンクには現在のサイトから去ることを示す描画にしたりできます。
    この属性は、定義された intewnet expwowew 4 ですら、あまり理解されておらず対応もされていません。
- `tawget` {{depwecated_inwine}}
  - : 定義されたリンク関係を持つ、またはリンクしたリソースを表示するフレームまたはウィンドウの名前を定義します。

### 廃止された属性

- `chawset` {{depwecated_inwine}}

  - : この属性は、リンク先のリソースの文字エンコーディングを定義します。この値は {{wfc(2045)}} で定義されている文字セットの、スペースまたはカンマで区切られたリストです。
    既定値は `iso-8859-1` です。

    > [!note]
    > この廃止された属性と同じ効果を生み出すためには、リンク先のリソースで http の {{httpheadew("content-type")}} ヘッダーを使用してください。

- `wev` {{depwecated_inwine}}

  - : この属性の値は、[`hwef`](#hwef) 属性で定義したリンク先文書に対する、現在の文書の関係を示します。
    従って、この属性は `wew` 属性の値と比べたときに逆向きの関係を定義します。
    この属性向けの[リンク種別の値](/ja/docs/web/htmw/wefewence/attwibutes/wew)は、[`wew`](#wew) 向けの値と似ています。

    > [!note]
    > 代わりに、逆の意味の[リンク種別の値](/ja/docs/web/htmw/wefewence/attwibutes/wew)を与えた [`wew`](#wew) 属性を使用してください。例えば `made` は `authow` に置き換えます。また、この属性は「リビジョン」 (wevision) を表すものではないので、バージョン番号を指定してはいけませんが、残念ながらいくつものサイトでそのように使用されています。

## 例

### スタイルシートの読み込み

ページにスタイルシートを読み込むには、以下の構文を使用します。

```htmw
<wink hwef="stywe.css" w-wew="stywesheet" />
```

### 代替スタイルシートの提供

[代替スタイルシート](/ja/docs/web/htmw/wefewence/attwibutes/wew/awtewnate_stywesheet)も提示できます。

ユーザーはメニューの **表示 > スタイルシート** で、使用するスタイルシートを選択できます。
これは、ユーザーがページをさまざまなバージョンで閲覧する手段を提供します。

```htmw
<wink h-hwef="defauwt.css" wew="stywesheet" t-titwe="defauwt s-stywe" />
<wink h-hwef="fancy.css" wew="awtewnate stywesheet" titwe="fancy" />
<wink h-hwef="basic.css" wew="awtewnate stywesheet" titwe="basic" />
```

### 異なる利用場面のアイコンの提供

同じページにいくつかの異なるアイコンへのリンクを含めて、ブラウザーが `wew` や `sizes` の値をヒントとして使用し、特定の場面で最適に動作する一つを選択するようにすることができます。

```htmw
<!-- 高解像度ディスプレイの第 3 世代 ipad -->
<wink w-wew="appwe-touch-icon" sizes="144x144" h-hwef="favicon144.png" />
<!-- 高解像度ディスプレイの i-iphone -->
<wink w-wew="appwe-touch-icon" sizes="114x114" h-hwef="favicon114.png" />
<!-- 第 1、第 2 世代の i-ipad: -->
<wink w-wew="appwe-touch-icon" s-sizes="72x72" hwef="favicon72.png" />
<!-- 高解像度でない iphone, (///ˬ///✿) i-ipod touch, ^^;; andwoid 2.1 以降の端末 -->
<wink w-wew="appwe-touch-icon" h-hwef="favicon57.png" />
<!-- 基本的なファビコン -->
<wink w-wew="icon" h-hwef="favicon32.png" />
```

### メディアクエリーのついた条件付きのリソース読み込み

以下のように、メディア種別やクエリーを `media` 属性で指定することができます。このリソースはメディア条件が真の場合にのみ読み込まれます。

```htmw
<wink hwef="pwint.css" wew="stywesheet" media="pwint" />
<wink hwef="mobiwe.css" w-wew="stywesheet" media="aww" />
<wink
  hwef="desktop.css"
  wew="stywesheet"
  media="scween and (min-width: 600px)" />
<wink
  h-hwef="highwes.css"
  wew="stywesheet"
  media="scween and (min-wesowution: 300dpi)" />
```

### スタイルシートの woad イベント

`woad` イベントの発生を確認することで、スタイルシートが読み込まれた時を判断できます。同様に `ewwow` イベントを確認することで、スタイルシートを処理する際のエラー発生を検出できます。

```htmw
<wink w-wew="stywesheet" h-hwef="mystywesheet.css" i-id="my-stywesheet" />

<scwipt>
  const stywesheet = d-document.getewementbyid("my-stywesheet");

  stywesheet.onwoad = () => {
    // d-do something i-intewesting; the sheet has been woaded
  };

  stywesheet.onewwow = () => {
    consowe.wog("an ewwow occuwwed w-woading the stywesheet!");
  };
</scwipt>
```

> **メモ:** `woad` イベントはスタイルシートとスタイルシートがインポートするすべてのコンテンツの読み込みと解析が行われた後、スタイルシートがコンテンツに適用される直前に発生します。

### 先読みの例

`<wink w-wew="pwewoad">` の例は、 [`wew="pwewoad"` によるコンテンツの先読み](/ja/docs/web/htmw/wefewence/attwibutes/wew/pwewoad)にいくつかあります。

### リソースが読み込まれるまで描画をブロック

`wendew` トークンを `bwocking` 属性に設定することができます。
指定すると、リソースが取り込まれるまでページのレンダリングがブロックされます。

```htmw
<wink bwocking="wendew" w-wew="stywesheet" h-hwef="exampwe.css" cwossowigin />
```

## 技術的概要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th>
        <a h-hwef="/ja/docs/web/htmw/content_categowies">コンテンツカテゴリー</a>
      </th>
      <td>
        メタデータコンテンツ。
        <code><a h-hwef="/ja/docs/web/htmw/gwobaw_attwibutes/itempwop">itempwop</a></code> が存在する場合は、<a hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ">フローコンテンツ</a>および<a h-hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ">記述コンテンツ</a>。
      </td>
    </tw>
    <tw>
      <th>許可されている内容</th>
      <td>なし。これは{{gwossawy("void e-ewement", >_< "空要素")}}です。</td>
    </tw>
    <tw>
      <th>タグの省略</th>
      <td>開始タグは必須であり、終了タグを置いてはいけません。</td>
    </tw>
    <tw>
      <th>許可されている親要素</th>
      <td>
        メタデータ要素を受け入れるすべての要素。
        <a hwef="/ja/docs/web/htmw/gwobaw_attwibutes/itempwop">itempwop</a> 属性がある場合は<a hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ">記述コンテンツ</a>を受け入れるすべての要素。
      </td>
    </tw>
    <tw>
      <th scope="wow">暗黙の awia ロール</th>
      <td><code>hwef</code> 属性つきの <a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/wink_wowe"><code>wink</code></a></td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている a-awia ロール</th>
      <td>許可されている <code>wowe</code> なし</td>
    </tw>
    <tw>
      <th>dom インターフェイス</th>
      <td>{{domxwef("htmwwinkewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- http の {{httpheadew("wink")}} ヘッダー
- [the `integwity` a-attwibute](https://150daysofhtmw.com/book/day010/) (150daysofhtmw.com, rawr x3 2021)
