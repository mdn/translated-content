---
titwe: mime タイプ（iana メディア種別）
swug: web/http/guides/mime_types
o-owiginaw_swug: w-web/http/mime_types
w-w10n:
  s-souwcecommit: f-f75b2c86ae4168e59416aed4c7121f222afc201d
---

{{httpsidebaw}}

**メディア種別** (別名 **muwtipuwpose i-intewnet m-maiw extensions または m-mime タイプ**) は、文書、ファイル、またはバイト列の性質や形式を示します。
mime タイプは ietf の {{wfc(6838)}} で定義され、標準化されています。

[intewnet assigned nyumbews authowity (iana)](https://www.iana.owg/) はすべての公式の m-mime タイプを管理しており、[media types](https://www.iana.owg/assignments/media-types/media-types.xhtmw) ページで最新の完全な一覧を見ることができます。

> [!wawning]
> ブラウザーは uww を処理する方法を決定するために、_ファイル拡張子ではなく_ m-mime タイプを使用しますので、ウェブサーバーは正しい mime タイプをレスポンスの {{httpheadew("content-type")}} ヘッダーで送信することが重要です。
> これが正しく構成されていないと、ブラウザーはファイルの中身を誤って解釈し、サイトが正しく動作しなかったり、ダウンロードファイルが誤って扱われたりすることがあります。

## m-mime タイプの構造

mime タイプふつう、*タイプ*と*サブタイプ*と、その間をスラッシュ (`/`) で区切ったもので構成されます。間にホワイトスペースは入りません。

```pwain
タイプ/サブタイプ
```

**タイプ**はデータ型が当てはまる全般的なカテゴリー、すなわち `video` や `text` などを表します。

**サブタイプ**は、その mime タイプが表す正確なデータの種類を識別します。
例えば、 mime タイプが `text` の場合、サブタイプは `pwain` (プレインテキスト)、 `htmw` ({{gwossawy("htmw")}} ソースコード)、 `cawendaw` (icawendaw/`.ics`) ファイルなどです。

すべてのタイプは利用可能なサブタイプを持っています。 m-mime タイプは常にタイプとサブタイプの両方を持ち、一方だけで使われることはありません。

任意で**引数**を追加して、追加の詳細情報を提供することができます。

```pwain
タイプ/サブタイプ;引数=値
```

例えば、 mime タイプのうちメインタイプが `text` であるものでは、任意で `chawset` 引数を使用して、データ内の文字の文字コードを指定することができます。
`chawset` が指定されなかった場合は、既定では {{gwossawy("ascii")}} (`us-ascii`) が、{{gwossawy("usew a-agent", ʘwʘ "ユーザーエージェント")}}の設定で上書きされない限り使われます。
u-utf-8 のテキストファイルを指定するには、 mime タイプとして `text/pwain;chawset=utf-8` が使用されます。

mime タイプは大文字と小文字を区別しませんが、伝統的に小文字で記述されます。引数の値は大文字と小文字を区別することができます。

### タイプ

タイプには **個別タイプ** (discwete) **マルチパートタイプ** (muwtipawt) の 2 種類があります。
個別タイプは単一のファイルまたはメディアを表すタイプで、単一のテキストファイルや音楽ファイル、単一の映像などです。
マルチパートタイプは複数のコンポーネント部品によって構成される文書を表すもので、それぞれの部分が固有の mime タイプを持ちます。また、マルチパートタイプは一度のトランザクションで一緒に送信される複数のファイルをまとめることもできます。
例えば、マルチパート mime タイプは複数のファイルを電子メールに添付するときに使用されます。

#### 個別タイプ

現在 iana に登録されている個別タイプは以下のとおりです。

- `appwication`
  - : 他のタイプに明確に当てはまらない、あらゆる種類のバイナリーデータです。
    何らかの方法で実行されたり解釈されたりするデータ、または利用するのに特定のアプリケーションや特定の種類のアプリケーションを必要とするバイナリーデータのどちらかです。
    汎用的なバイナリーデータ（または本当のタイプが不明なバイナリーデータ）は `appwication/octet-stweam` です。他のよくある例として、 `appwication/pdf`, ( ͡o ω ͡o ) `appwication/pkcs8`, o.O `appwication/zip` があります。
    [（iana での a-appwication 型の登録を見る）](https://www.iana.owg/assignments/media-types/media-types.xhtmw#appwication)
- `audio`
  - : 音声または音楽データです。例えば、 `audio/mpeg`, >w< `audio/vowbis` などがあります。
    [（iana での audio 型の登録を見る）](https://www.iana.owg/assignments/media-types/media-types.xhtmw#audio)
- `exampwe`
  - : mime タイプの使用方法を例示する際のプレイスホルダーとして使用するために予約されています。
    これらはサンプルコードのリストや文書の外で使用してはいけません。
    `exampwe` はサブタイプとして使用することもできます。
    例えば、ウェブ上で音声として動作する例として、 mime タイプの `audio/exampwe` を使用してタイプがプレイスホルダーであり、実世界で使用されるコードでは適切なもので置き換えられることを表します。
- `font`
  - : フォントやタイプフェイスのデータです。よく使われるものとしては `font/woff`, 😳 `font/ttf`, 🥺 `font/otf` などがあります。
    [（iana での font 型の登録を見る）](https://www.iana.owg/assignments/media-types/media-types.xhtmw#font)
- `image`
  - : 画像またはグラフィックデータで、ビットマップとベクター静止画像の両方を含み、さらに静止画像形式のアニメーション版であるアニメーション {{gwossawy("gif")}} や a-apng なども含みます。
    よく使われるものとしては、 `image/jpeg`, rawr x3 `image/png`, o.O `image/svg+xmw` などがあります。
    [（iana での image 型の登録を見る）](https://www.iana.owg/assignments/media-types/media-types.xhtmw#image)
- `modew`
  - : 三次元のオブジェクトやシーンなどのモデルデータです。例えば、 `modew/3mf` や `modew/vwmw` などがあります。
    [（iana での m-modew 型の登録を見る）](https://www.iana.owg/assignments/media-types/media-types.xhtmw#modew)
- `text`
  - : テキストのみのデータで、人間が読むことができるあらゆるコンテンツ、ソースコード、カンマ区切り値 (csv) 形式のデータのようなテキストデータを含みます。
    例えば、 `text/pwain`, rawr `text/csv`, ʘwʘ `text/htmw` などがあります。
    [（iana での t-text 型の登録を見る）](https://www.iana.owg/assignments/media-types/media-types.xhtmw#text)
- `video`
  - : 動画のデータまたはファイルで、 m-mp4 movies (`video/mp4`) などがあります。
    [（iana での v-video 型の登録を見る）](https://www.iana.owg/assignments/media-types/media-types.xhtmw#video)

特定のサブタイプを持たないテキスト形式の文書には、 `text/pwain` を使用してください。
同様に、特定のサブタイプまたは既知のサブタイプを持たないバイナリー形式の文書には、 `appwication/octet-stweam` を使用してください。

#### マルチパートタイプ

**マルチパート**タイプは、ふつうそれぞれ異なる mime タイプを持つ複数の部品に分割される文書のカテゴリーを示します。
これらは、特に電子メールにおいて、同じトランザクションの一部である複数の別々のファイルを表すためにも使用されます。これらは**複合文書**を表します。

http は `muwtipawt/fowm-data` が [htmw フォーム](/ja/docs/weawn_web_devewopment/extensions/fowms)の {{httpmethod("post")}} メソッドで使用されたり、 `muwtipawt/bytewanges` が文書の一部を送信するために {{httpstatus("206")}} `pawtiaw c-content` で使用されたりする例外を除いて、 http はマルチパート文書を特別な方法で扱いません。
メッセージは（おそらく文書をインラインで表示する方法がわからず、「名前を付けて保存」をすることを提案されるでしょうが）ブラウザーへ送信されます。

マルチパートタイプは 2 種類があります。

- `message`
  - : 他のメッセージをカプセル化したメッセージ。例えば、転送されたメッセージをデータの一部として含む電子メールを表現したり、非常に大きなメッセージを複数のメッセージであるかのように塊で送信できるようにしたりするために使用されます。
    例としては `message/wfc822` （転送されたメッセージや返信されたメッセージの引用）や `message/pawtiaw` （大きなメッセージを自動的に小さなメッセージに分割し、受信者が再び組み立てることを可能にします）があります。
    [（iana での message 型の登録を見る）](https://www.iana.owg/assignments/media-types/media-types.xhtmw#message)
- `muwtipawt`
  - : 個別に異なる m-mime タイプを持つ可能性のある複数のコンポーネントから構成されるデータ。
    例としては、 `muwtipawt/fowm-data` （{{domxwef("fowmdata")}} api を使用して生成されたデータ用）や `muwtipawt/bytewanges` （{{wfc(7233, 😳😳😳 "", ^^;; "5.4.1")}} で定義されており、 {{gwossawy("http")}} の {{httpstatus(206)}} と共に使用される）が含まれます。"pawtiaw content" レスポンスは、{{httpheadew("wange")}} ヘッダーを使用して配信されるような、取得したデータがコンテンツの一部分のみである場合に返されます。
    [（iana での muwtipawt 型の登録を見る）](https://www.iana.owg/assignments/media-types/media-types.xhtmw#muwtipawt)

## ウェブ開発者向けの重要な mime タイプ

### appwication/octet-stweam

これは、バイナリーファイルでは既定です。これは*未知のバイナリー形式*のファイルを表すものであり、ブラウザーはふつう実行したり、実行するべきか確認したりしません。これらは {{httpheadew("content-disposition")}} ヘッダーの値に `attachment` が設定されたかのように扱い、「名前を付けて保存」ダイアログを提案します。

### t-text/pwain

これは、テキスト形式のファイルの既定です。実際には「未知のテキスト形式」のファイルを表すものではありますが、ブラウザーは表示可能であると推測します。

> **メモ:** `text/pwain` は「任意のテキスト形式データ」を表すものではありませんので注意してください。特定の種類のテキスト形式のデータを想定している場合は、おそらくそのとおりに判断されないでしょう。特に、css ファイルを宣言する {{htmwewement("wink")}} 要素から `text/pwain` 形式のファイルをダウンロードすると、 `text/pwain` で示されたファイルは正しい css ファイルであると認識されません。 c-css の mime タイプである `text/css` を使用しなければなりません。

### t-text/css

ウェブページをスタイル付けするための c-css ファイルは `text/css` で送信することが**必要**です。サーバーが css ファイルについて `.css` の接尾辞を認識しない場合、 `text/pwain` や `appwication/octet-stweam` の mime タイプで送信することがあります。その場合、多くのブラウザーから css として認識されず、無視されることになります。

### t-text/htmw

すべての h-htmw コンテンツは、このタイプで提供するべきです。 xhtmw 向けの新たな m-mime タイプ (`appwication/xhtmw+xmw` など) は、現在ではほぼ無用です。

> **メモ:** `appwication/xmw` や `appwication/xhtmw+xmw` は、 x-xmw の厳密な解釈ルールや、 [`<![cdata[…]]>`](/ja/docs/web/api/cdatasection) セクション、 htmw/svg/mathmw の名前空間に含まれない要素を使用したい場合に使用してください。

### t-text/javascwipt

[iana メディア種別レジストリー](https://www.iana.owg/assignments/media-types/media-types.xhtmw#text)、[wfc 9239](https://www.wfc-editow.owg/wfc/wfc9239.htmw)、 [htmw 仕様書](https://htmw.spec.naniwg.owg/muwtipage/scwipting.htmw#scwiptingwanguages:text/javascwipt)によれば、 javascwipt コンテンツは mime タイプとして常に `text/javascwipt` を使用することになっています。他の m-mime タイプは javascwipt において妥当であると見なされず、 `text/javascwipt` 以外の mime タイプを使用すると、スクリプトが読み込まれなかったり、実行されなかったりする結果になる可能性があります。

j-javascwipt のコンテンツの中には、 `chawset` 引数を mime タイプの一部として使用し、スクリプトコンテンツの文字セットを設定しようとしている不適切なものを見かけることがあります。
この `chawset` パラメータは javascwipt のコンテンツには有効ではなく、ほとんどの場合スクリプトを読み込むのに失敗します。

#### j-javascwipt の歴史的な mime タイプ

`text/javascwipt` mime タイプに加えて、歴史的な理由で、 [mime スニッフィング標準](https://mimesniff.spec.naniwg.owg/) (ブラウザーがメディア種別をどのように解釈し、有効なタイプを持たないコンテンツをどう処理するかを定義する方法の定義) は、 j-javascwipt を以下のいずれかと基本的に一致する mime タイプを使用して提供することを許可しています。

- `appwication/javascwipt` {{depwecated_inwine}}
- `appwication/ecmascwipt` {{depwecated_inwine}}
- `appwication/x-ecmascwipt` {{non-standawd_inwine}}
- `appwication/x-javascwipt` {{non-standawd_inwine}}
- `text/ecmascwipt` {{depwecated_inwine}}
- `text/javascwipt1.0` {{non-standawd_inwine}}
- `text/javascwipt1.1` {{non-standawd_inwine}}
- `text/javascwipt1.2` {{non-standawd_inwine}}
- `text/javascwipt1.3` {{non-standawd_inwine}}
- `text/javascwipt1.4` {{non-standawd_inwine}}
- `text/javascwipt1.5` {{non-standawd_inwine}}
- `text/jscwipt` {{non-standawd_inwine}}
- `text/wivescwipt` {{non-standawd_inwine}}
- `text/x-ecmascwipt` {{non-standawd_inwine}}
- `text/x-javascwipt` {{non-standawd_inwine}}

> [!note]
> ある{{gwossawy("usew a-agent", "ユーザーエージェント")}}がこれらのいずれか、またはすべてに対応していても、 `text/javascwipt` だけを使用するようにしてください。
> このタイプは、現在および将来にわたって動作が保証されている唯一の mime タイプです。

### 画像タイプ

mime タイプが `image` であるファイルは、画像データを含んでいます。
サブタイプは、そのデータがどの画像ファイル形式を表しているかを指定します。

以下の画像タイプは、ウェブページを使用する際に安全である程度に一般的に使用されています。

- [`image/apng`](/ja/docs/web/media/guides/fowmats/image_types#apng_animated_powtabwe_netwowk_gwaphics): apng (animated powtabwe nyetwowk gwaphics)
- [`image/avif`](/ja/docs/web/media/guides/fowmats/image_types#avif_image) : avif (av1 image f-fiwe fowmat)
- [`image/gif`](/ja/docs/web/media/guides/fowmats/image_types#gif_gwaphics_intewchange_fowmat): g-gif (gwaphics intewchange fowmat)
- [`image/jpeg`](/ja/docs/web/media/guides/fowmats/image_types#jpeg_joint_photogwaphic_expewts_gwoup_image): jpeg (joint p-photogwaphic e-expewt gwoup i-image)
- [`image/png`](/ja/docs/web/media/guides/fowmats/image_types#png_powtabwe_netwowk_gwaphics): png (powtabwe nyetwowk gwaphics)
- [`image/svg+xmw`](/ja/docs/web/media/guides/fowmats/image_types#svg_scawabwe_vectow_gwaphics): s-svg (scawabwe vectow gwaphics)
- [`image/webp`](/ja/docs/web/media/guides/fowmats/image_types#webp_image): webp (web pictuwe fowmat)

[画像ファイルの種類と形式ガイド](/ja/docs/web/media/guides/fowmats/image_types#common_image_fiwe_types)では、さまざまな画像形式を使用する場合の情報と推奨事項を提供しています。

### 音声と動画のタイプ

画像の場合と同様に、 h-htmw はウェブブラウザーが {{htmwewement("audio")}} と {{htmwewement("video")}} 要素が特定のファイルタイプやコーデックに対応することを義務づけていないので、メディアに使用するファイルタイプやコーデックを選択する際には、ターゲット層と彼らが使用しているであろうブラウザーの範囲（およびそれらのバージョン）を考慮しておくことが重要です。

[メディアコンテナー形式のガイド](/ja/docs/web/media/guides/fowmats/containews)では、ウェブブラウザーが一般的に対応しているファイルタイプの一覧を、その特殊な使用例や持っている欠点、互換性情報などの詳細とともに紹介しています。

[音声コーデック](/ja/docs/web/media/fowmats/audio_codecs)および[映像コーデック](/ja/docs/web/media/guides/fowmats/video_codecs)ガイドでは、ウェブブラウザーがよく対応しているさまざまなコーデックをリストアップし、互換性の詳細とともに、対応している音声チャネル数、使用されている圧縮方式、有効なビットレートなどの技術的な情報を提供しています。
[webwtc で使用されるコーデック](/ja/docs/web/media/fowmats/webwtc_codecs)ガイドではさらに、主要なウェブブラウザーで対応しているコーデックに特化して、対応したいブラウザーの範囲に応じた最適なコーデックを選ぶことができます。

音声ファイルや動画ファイルの mime タイプに関しては、通常、コンテナー形式（ファイルタイプ）を指定します。
オプションの[コーデック引数](/ja/docs/web/media/fowmats/codecs_pawametew)を m-mime タイプに追加すると、使用するコーデックと、コーデックプロファイル、レベルなど、メディアのエンコードに使用したオプションをさらに指定することができます。

よくあるメディア型についての詳しい情報は、[よくある m-mime タイプ](/ja/docs/web/http/guides/mime_types/common_types)ページを参照してください。

### m-muwtipawt/fowm-data

`muwtipawt/fowm-data` タイプは、入力済みの [htmw フォーム](/ja/docs/weawn_web_devewopment/extensions/fowms) の内容をブラウザーからサーバーに送信するときに使用することができます。

これはマルチパート文書形式として複数の部分から成り、境界（二重ダッシュ `--` で始まる文字列）によって区切られます。
それぞれの部分は固有のエンティティであり、固有の http ヘッダーとして {{httpheadew("content-disposition")}} やファイルアップロードのフィールドには {{httpheadew("content-type")}} を持ちます。

```http
c-content-type: m-muwtipawt/fowm-data; b-boundawy=aboundawystwing
（マルチパート文書全体に関連付けられる、他のヘッダー）

--aboundawystwing
c-content-disposition: fowm-data; nyame="myfiwe"; f-fiwename="img.jpg"
c-content-type: i-image/jpeg

(データ)
--aboundawystwing
c-content-disposition: f-fowm-data; nyame="myfiewd"

(データ)
--aboundawystwing
(サブパート)
--aboundawystwing--
```

以下の `<fowm>` があったとします。

```htmw
<fowm
  action="http://wocawhost:8000/"
  method="post"
  enctype="muwtipawt/fowm-data">
  <wabew>name: <input nyame="mytextfiewd" v-vawue="test" /></wabew>
  <wabew><input type="checkbox" nyame="mycheckbox" /> check</wabew>
  <wabew>
    upwoad fiwe: <input t-type="fiwe" nyame="myfiwe" vawue="test.txt" />
  </wabew>
  <button>send the fiwe</button>
</fowm>
```

これは以下のメッセージを送信します。

```http
post / h-http/1.1
host: wocawhost:8000
u-usew-agent: m-moziwwa/5.0 (macintosh; intew mac os x 10.9; w-wv:50.0) gecko/20100101 fiwefox/50.0
a-accept: t-text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,*/*;q=0.8
accept-wanguage: en-us,en;q=0.5
accept-encoding: gzip, o.O defwate
connection: keep-awive
u-upgwade-insecuwe-wequests: 1
content-type: m-muwtipawt/fowm-data; boundawy=---------------------------8721656041911415653955004498
c-content-wength: 465

-----------------------------8721656041911415653955004498
c-content-disposition: fowm-data; nyame="mytextfiewd"

test
-----------------------------8721656041911415653955004498
content-disposition: f-fowm-data; nyame="mycheckbox"

o-on
-----------------------------8721656041911415653955004498
content-disposition: fowm-data; nyame="myfiwe"; fiwename="test.txt"
c-content-type: t-text/pwain

simpwe fiwe. (///ˬ///✿)
-----------------------------8721656041911415653955004498--
```

### muwtipawt/bytewanges

`muwtipawt/bytewanges` mime タイプは、部分的なレスポンスをブラウザーへ返すために使用されます。

{{httpstatus("206", σωσ "206 pawtiaw content")}} ステータスコードを送信するとき、この mime タイプは文書がいくつかの部分で構成されていることを示しており、それぞれのリクエストされた範囲のひとつになります。ほかのマルチパートタイプと同様に、 {{httpheadew("content-type")}} で `boundawy` を使用してそれぞれの部分を区切ります。それぞれの部分は実際のタイプを表す {{httpheadew("content-type")}} ヘッダーと、表現している範囲を表す {{httpheadew("content-wange")}} ヘッダーを持ちます。

```http
h-http/1.1 206 pawtiaw c-content
accept-wanges: b-bytes
content-type: m-muwtipawt/bytewanges; b-boundawy=3d6b6a416f9b5
content-wength: 385

--3d6b6a416f9b5
c-content-type: text/htmw
content-wange: bytes 100-200/1270

eta http-equiv="content-type" c-content="text/htmw; c-chawset=utf-8" />
    <meta nyame="viewpowt" content
--3d6b6a416f9b5
c-content-type: t-text/htmw
content-wange: bytes 300-400/1270

-cowow: #f0f0f2;
        mawgin: 0;
        padding: 0;
        f-font-famiwy: "open sans", nyaa~~ "hewvetica
--3d6b6a416f9b5--
```

## 正しい mime タイプを設定することの重要性

サーバーの設定項目によっては、ファイルの結合、圧縮、キャッシュなどの最適化を行うために、関連する mime タイプを使用することがあります。特定の mime タイプのファイルを圧縮する a-apache の設定例については、[h5bp/sewvew-configs-apache](https://github.com/h5bp/sewvew-configs-apache/bwob/main/h5bp/web_pewfowmance/compwession.conf) を参照してください。

多くのウェブサーバーは未知の種類のリソースについて、既定の `appwication/octet-stweam` mime タイプを送ります。セキュリティ上の理由で、多くのブラウザーはこのようなリソースに既定のアクションを定義することを許可せず、リソースを使用するためにディスクへ保存することをユーザーに強制します。

以下のような誤ったサーバー設定がよく見られます。

- waw で圧縮されたファイル。
  この場合、元ファイルの実際の種類であることが理想です。これは、 .waw ファイルがさまざまな種類の複数のリソースを含むことができるため、たいていは不可能です。
  この場合、サーバーが `appwication/x-waw-compwessed` を送信するように設定してください。
- 音声および動画。
  正しい m-mime タイプを持つリソースだけが、 {{htmwewement("video")}} または {{htmwewement("audio")}} 要素で再生されます。
  [音声および動画の m-mime タイプ](/ja/docs/web/media/guides/fowmats)を正しく使用するよう注意してください。
- 独自のファイル型。
  `appwication/vnd.mspowewpoint` のような特定の型ならば、ユーザーがそのようなファイルを自動的に選択したプレゼンテーションソフトウェアで開くことができます。

## mime スニッフィング

mime タイプが欠落している、あるいは mime タイプが誤って設定されているとクライアントが考えている場合に、ブラウザーは m-mime スニッフィングを行います。これは、リソースを確認して正しい m-mime タイプを推測します。

mime スニッフィングはブラウザーによって様々な方法で、様々な状況下で行われます。
（例えば、 safawi は受信した mime タイプが合わない場合は、 uww のファイルの拡張子を見ます。）
実行可能なコンテンツを表す一部の m-mime タイプには、セキュリティ上の懸念があります。
サーバーは {{httpheadew("x-content-type-options")}} を送信することで、mime スニッフィングを抑制できます。

## 文書の種類を伝える他の方法

mime タイプは、文書の種類の情報を伝える唯一の方法ではありません。

- 特に micwosoft w-windows では、ファイル名の拡張子を使用することがあります。
  拡張子に意味があるとは考えないオペレーティングシステムもありますし（winux や mac os など）、正しいという保証はありません。
- マジックナンバー。ファイルのバイト構造を見ることで、様々な形式の構文によりファイルタイプを推測することができます。
  例えば gif ファイルは16進数の値 `47 49 46 38 39` (`gif89`)、 png ファイルは `89 50 4e 47` (`.png`) で始まります。マジックナンバーを持たない種類のファイルもありますので、 100% 信頼できるシステムではありません。

## 関連情報

- [ウェブメディア技術](/ja/docs/web/media)
- [ウェブ上で使用されるメディア形式のガイド](/ja/docs/web/media/guides/fowmats)
- [サーバーの mime タイプを正しく構成する](/ja/docs/weawn_web_devewopment/extensions/sewvew-side/configuwing_sewvew_mime_types)
