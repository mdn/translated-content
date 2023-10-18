---
title: MIME タイプ (IANA メディアタイプ)
slug: Web/HTTP/Basics_of_HTTP/MIME_types
---

{{HTTPSidebar}}

**メディアタイプ** (別名 **Multipurpose Internet Mail Extensions または MIME タイプ**) は、文書、ファイル、またはバイト列の性質や形式を示します。
MIME タイプは IETF の {{RFC(6838)}} で定義され、標準化されています。

[Internet Assigned Numbers Authority (IANA)](https://www.iana.org/) はすべての公式の MIME タイプを管理しており、[Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml) ページで最新の完全なリストを見つけることができます。

> **警告:** ブラウザーは URL を処理する方法を決定するために、_ファイル拡張子ではなく_ MIME タイプを使用しますので、ウェブサーバーは正しい MIME タイプをレスポンスの {{HTTPHeader("Content-Type")}} ヘッダーで送信することが重要です。これが正しく構成されていないと、ブラウザーはファイルの中身を誤って解釈し、サイトが正しく動作しなかったり、ダウンロードファイルが誤って扱われたりすることがあります。

## MIME タイプの構造

MIME タイプは*タイプ*と*サブタイプ*と、その間をスラッシュ (`/`) で区切ったもので構成されます。間にホワイトスペースは入りません。

```
タイプ/サブタイプ
```

**タイプ**はデータ型が当てはまる全般的なカテゴリー、すなわち `video` や `text` などを表します。

**サブタイプ**は、その MIME タイプが表す正確なデータの種類を識別します。
例えば、 MIME タイプが `text` の場合、サブタイプは `plain` (プレインテキスト)、 `html` ({{Glossary("HTML")}} ソースコード)、 `calendar` (iCalendar/`.ics`) ファイルなどです。

すべてのタイプは利用可能なサブタイプを持っています。 MIME タイプは常にタイプとサブタイプの両方を持ち、一方だけで使われることはありません。

任意で**引数**を追加して、追加の詳細情報を提供することができます。

```
タイプ/サブタイプ;引数=値
```

例えば、 MIME タイプのうちメインタイプが `text` であるものでは、任意で `charset` 引数を使用して、データ内の文字の文字コードを指定することができます。 `charset` が指定されない場合は、既定では {{Glossary("ASCII")}} (`US-ASCII`) が、{{Glossary("user agent", "ユーザーエージェント")}}の設定で上書きされない限り使われます。 UTF-8 のテキストファイルを指定するには、 MIME タイプとして `text/plain;charset=UTF-8` が使用されます。

MIME タイプは大文字と小文字を区別しませんが、伝統的に小文字で記述されます。引数の値は大文字と小文字を区別することができます。

### タイプ

タイプには **個別タイプ** (discrete) **マルチパートタイプ** (multipart) の 2 種類があります。個別タイプは単一のファイルまたはメディアを表すタイプで、単一のテキストファイルや音楽ファイル、単一の映像などです。マルチパートタイプは複数のコンポーネント部品によって構成される文書を表すもので、それぞれの部分が固有の MIME タイプを持ちます。また、マルチパートタイプは一度のトランザクションで一緒に送信される複数のファイルをまとめることもできます。例えば、マルチパート MIME タイプは複数のファイルを電子メールに添付するときに使用されます。

#### 個別タイプ

現在 IANA に登録されている個別タイプは以下のとおりです。

- `application`
  - : 他のタイプに明確に当てはまらない、あらゆる種類のバイナリーデータです。
    何らかの方法で実行されたり解釈されたりするデータ、または利用するのに特定のアプリケーションや特定の種類のアプリケーションを必要とするバイナリーデータのどちらかです。汎用的なバイナリーデータ（または本当のタイプが不明なバイナリーデータ）は `application/octet-stream` です。他のよくある例として、 `application/pdf`, `application/pkcs8`, `application/zip` があります。
    [(IANA での登録)](https://www.iana.org/assignments/media-types/media-types.xhtml#application)
- `audio`
  - : 音声または音楽データです。例えば、 `audio/mpeg`, `audio/vorbis` などがあります。
    [(IANA での登録)](https://www.iana.org/assignments/media-types/media-types.xhtml#audio)
- `example`
  - : MIME タイプの使用方法を例示する際のプレイスホルダーとして使用するために予約されています。
    これらはサンプルコードのリストや文書の外で使用してはいけません。
    `example` はサブタイプとして使用することもできます。
    例えば、ウェブ上で音声として動作する例として、 MIME タイプの `audio/example` を使用してタイプがプレイスホルダーであり、実世界で使用されるコードでは適切なもので置き換えられることを表します。
- `font`
  - : フォントやタイプフェイスのデータです。よく使われるものとしては `font/woff`, `font/ttf`, `font/otf` などがあります。
    [(IANA での登録)](https://www.iana.org/assignments/media-types/media-types.xhtml#font)
- `image`
  - : 画像またはグラフィックデータで、ビットマップとベクター静止画像の両方を含み、さらに静止画像形式のアニメーション版であるアニメーション {{Glossary("GIF")}} や APNG なども含みます。よく使われるものとしては、 `image/jpeg`, `image/png`, `image/svg+xml` などがあります。
    [(IANA での登録)](https://www.iana.org/assignments/media-types/media-types.xhtml#image)
- `model`
  - : 三次元のオブジェクトやシーンなどのモデルデータです。例えば、 `model/3mf` や `model/vml` などがあります。
    [(IANA での登録)](https://www.iana.org/assignments/media-types/media-types.xhtml#model)
- `text`
  - : テキストのみのデータで、人間が読むことができるあらゆるコンテンツ、ソースコード、コンマ区切り値 (CSV) 形式のデータのようなテキストデータを含みます。例えば、 `text/plain`, `text/csv`, `text/html` などがあります。
    [(IANA での登録)](https://www.iana.org/assignments/media-types/media-types.xhtml#text)
- `video`
  - : 動画のデータまたはファイルで、 MP4 movies (`video/mp4`) などがあります。
    [(IANA での登録)](https://www.iana.org/assignments/media-types/media-types.xhtml#video)

特定のサブタイプを持たないテキスト形式の文書には、 `text/plain` を使用してください。同様に、特定のサブタイプまたは既知のサブタイプを持たないバイナリー形式の文書には、 `application/octet-stream` を使用してください。

#### マルチパートタイプ

**マルチパート**タイプは、ふつうそれぞれ異なる MIME タイプを持つ複数の部品に分割される文書のカテゴリーを示します。これらは、特に電子メールにおいて、同じトランザクションの一部である複数の別々のファイルを表すためにも使用されます。これらは**複合文書**を表します。

HTTP は `multipart/form-data` が [HTML フォーム](/ja/docs/Learn/Forms)の {{HTTPMethod("POST")}} メソッドで使用されたり、 `multipart/byteranges` が文書の一部を送信するために {{HTTPStatus("206")}} `Partial Content` で使用されたりする例外を除いて、 HTTP はマルチパート文書を特定の方法で扱いません。メッセージは（おそらく文書をインラインで表示する方法がわからず、「名前を付けて保存」をすることを提案されるでしょうが）ブラウザーへ送信されます。

マルチパートタイプは 2 種類があります。

- `message`
  - : 他のメッセージをカプセル化したメッセージ。例えば、転送されたメッセージをデータの一部として含む電子メールを表現したり、非常に大きなメッセージを複数のメッセージであるかのように塊で送信できるようにしたりするために使用されます。
    例としては `message/rfc822` （転送されたメッセージや返信されたメッセージの引用）や `message/partial` （大きなメッセージを自動的に小さなメッセージに分割し、受信者が再び組み立てることを可能にします）があります。
    [(IANA での登録)](https://www.iana.org/assignments/media-types/media-types.xhtml#message)
- `multipart`
  - : 個別に異なる MIME タイプを持つ可能性のある複数のコンポーネントから構成されるデータ。
    例としては、 `multipart/form-data` （{{domxref("FormData")}} API を使用して生成されたデータ用）や `multipart/byteranges` （{{RFC(7233, "", "5.4.1")}} で定義されており、 {{Glossary("HTTP")}} の {{HTTPStatus(206)}} と共に使用される）が含まれます。"Partial Content" レスポンスは、{{HTTPHeader("Range")}} ヘッダーを使用して配信されるような、取得したデータがコンテンツの一部分のみである場合に返されます。
    [(IANA での登録)](https://www.iana.org/assignments/media-types/media-types.xhtml#multipart)

## ウェブ開発者向けの重要な MIME タイプ

### application/octet-stream

これは、バイナリーファイルでは既定です。これは*未知のバイナリー形式*のファイルを表すものであり、ブラウザーはふつう実行したり、実行するべきか確認したりしません。これらは {{HTTPHeader("Content-Disposition")}} ヘッダーの値に `attachment` が設定されたかのように扱い、「名前を付けて保存」ダイアログを提案します。

### text/plain

これは、テキスト形式のファイルの既定です。実際には「未知のテキスト形式」のファイルを表すものではありますが、ブラウザーは表示可能であると推測します。

> **メモ:** `text/plain` は「任意のテキスト形式データ」を表すものではありませんので注意してください。特定の種類のテキスト形式のデータを想定している場合は、おそらくそのとおりに判断されないでしょう。特に、CSS ファイルを宣言する {{HTMLElement("link")}} 要素から `text/plain` 形式のファイルをダウンロードすると、 `text/plain` で示されたファイルは正しい CSS ファイルであると認識されません。 CSS の MIME タイプである `text/css` を使用しなければなりません。

### text/css

ウェブページをスタイル付けするための CSS ファイルは `text/css` で送信することが**必要**です。サーバーが CSS ファイルについて `.css` の接尾辞を認識しない場合、 `text/plain` や `application/octet-stream` の MIME タイプで送信することがあります。その場合、多くのブラウザーから CSS として認識されず、無視されることになります。

### text/html

すべての HTML コンテンツは、このタイプで提供するべきです。 XHTML 向けの新たな MIME タイプ (`application/xhtml+xml` など) は、現在ではほぼ無用です。

> **メモ:** `application/xml` や `application/xhtml+xml` は、 XML の厳密な解釈ルールや、 [`<![CDATA[…]]>`](/ja/docs/Web/API/CDATASection) セクション、 HTML/SVG/MathML の名前空間に含まれない要素を使用したい場合に使用してください。

### text/javascript

[IANA メディアタイプレジストリー](https://www.iana.org/assignments/media-types/media-types.xhtml#text)、[RFC 9239](https://www.rfc-editor.org/rfc/rfc9239.html)、 [HTML 仕様書](https://html.spec.whatwg.org/multipage/scripting.html#scriptingLanguages:text/javascript)によれば、 JavaScript コンテンツは MIME タイプとして常に `text/javascript` を使用することになっています。他の MIME タイプは JavaScript において妥当であると見なされず、 `text/javascript` 以外の MIME タイプを使用すると、スクリプトが読み込まれなかったり、実行されなかったりする結果になる可能性があります。

JavaScript のコンテンツの中には、 `charset` 引数を MIME タイプの一部として使用し、スクリプトコンテンツの文字セットを設定しようとしている不適切なものを見かけることがあります。
この `charset` パラメータは JavaScript のコンテンツには有効ではなく、ほとんどの場合スクリプトを読み込むのに失敗します。

#### JavaScript の歴史的な MIME タイプ

`text/javascript` MIME タイプに加えて、歴史的な理由で、 [MIME スニッフィング標準](https://mimesniff.spec.whatwg.org/) (ブラウザーがメディアタイプをどのように解釈し、有効なタイプを持たないコンテンツをどう処理するかを定義する方法の定義) は、 JavaScript を以下のいずれかと基本的に一致する MIME タイプを使用して提供することを許可しています。

- `application/javascript` {{deprecated_inline}}
- `application/ecmascript` {{deprecated_inline}}
- `application/x-ecmascript` {{Non-standard_Inline}}
- `application/x-javascript` {{Non-standard_Inline}}
- `text/ecmascript` {{deprecated_inline}}
- `text/javascript1.0` {{Non-standard_Inline}}
- `text/javascript1.1` {{Non-standard_Inline}}
- `text/javascript1.2` {{Non-standard_Inline}}
- `text/javascript1.3` {{Non-standard_Inline}}
- `text/javascript1.4` {{Non-standard_Inline}}
- `text/javascript1.5` {{Non-standard_Inline}}
- `text/jscript` {{Non-standard_Inline}}
- `text/livescript` {{Non-standard_Inline}}
- `text/x-ecmascript` {{Non-standard_Inline}}
- `text/x-javascript` {{Non-standard_Inline}}

> **メモ:** ある{{Glossary("user agent", "ユーザーエージェント")}}がこれらのいずれか、またはすべてに対応していても、 `text/javascript` だけを使用するようにしてください。
> このタイプは、現在および将来にわたって動作が保証されている唯一の MIME タイプです。

### 画像タイプ

MIME タイプが `image` であるファイルは、画像データを含んでいます。
サブタイプは、そのデータがどの画像ファイル形式を表しているかを指定します。

以下の画像タイプは、ウェブページを使用する際に安全である程度に一般的に使用されています。

- [`image/apng`](/ja/docs/Web/Media/Formats/Image_types#apng_animated_portable_network_graphics): APNG (Animated Portable Network Graphics)
- [`image/avif`](/ja/docs/Web/Media/Formats/Image_types#avif_image) : AVIF (AV1 Image File Format)
- [`image/gif`](/ja/docs/Web/Media/Formats/Image_types#gif_graphics_interchange_format): GIF (Graphics Interchange Format)
- [`image/jpeg`](/ja/docs/Web/Media/Formats/Image_types#jpeg_joint_photographic_experts_group_image): JPEG (Joint Photographic Expert Group image)
- [`image/png`](/ja/docs/Web/Media/Formats/Image_types#png_portable_network_graphics): PNG (Portable Network Graphics)
- [`image/svg+xml`](/ja/docs/Web/Media/Formats/Image_types#svg_scalable_vector_graphics): SVG (Scalable Vector Graphics)
- [`image/webp`](/ja/docs/Web/Media/Formats/Image_types#webp_image): WEBP (Web Picture format)

[画像ファイルの種類と形式ガイド](/ja/docs/Web/Media/Formats/Image_types#common_image_file_types)では、さまざまな画像形式を使用する場合の情報と推奨事項を提供しています。

### 音声と動画のタイプ

画像の場合と同様に、 HTML はウェブブラウザーが {{HTMLElement("audio")}} と {{HTMLElement("video")}} 要素が特定のファイルタイプやコーデックに対応することを義務づけていないので、メディアに使用するファイルタイプやコーデックを選択する際には、ターゲット層と彼らが使用しているであろうブラウザーの範囲（およびそれらのバージョン）を考慮しておくことが重要です。

[メディアコンテナー形式のガイド](/ja/docs/Web/Media/Formats/Containers)では、ウェブブラウザーが一般的に対応しているファイルタイプの一覧を、その特殊な使用例や持っている欠点、互換性情報などの詳細とともに紹介しています。

[音声コーデック](/ja/docs/Web/Media/Formats/Audio_codecs)および[映像コーデック](/ja/docs/Web/Media/Formats/Video_codecs)ガイドでは、ウェブブラウザーがよく対応しているさまざまなコーデックをリストアップし、互換性の詳細とともに、対応している音声チャネル数、使用されている圧縮方式、有効なビットレートなどの技術的な情報を提供しています。
[WebRTC で使用されるコーデック](/ja/docs/Web/Media/Formats/WebRTC_codecs)ガイドではさらに、主要なウェブブラウザーで対応しているコーデックに特化して、対応したいブラウザーの範囲に応じた最適なコーデックを選ぶことができます。

音声ファイルや動画ファイルの MIME タイプに関しては、通常、コンテナー形式（ファイルタイプ）を指定します。
オプションの[コーデック引数](/ja/docs/Web/Media/Formats/codecs_parameter)を MIME タイプに追加すると、使用するコーデックと、コーデックプロファイル、レベルなど、メディアのエンコードに使用したオプションをさらに指定することができます。

ウェブコンテンツに使用されるMIMEタイプのうち、最も一般的なものを以下に一覧で示します。
ただし、これは利用可能なすべてのタイプの完全なリストではありません。
これについては[メディアコンテナー形式](/ja/docs/Web/Media/Formats/Containers)のガイドを参照してください。

| MIME タイプ                                             | 音声または動画のタイプ                                                                                                                                                      |
| ------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `audio/wave` `audio/wav` `audio/x-wav` `audio/x-pn-wav` | WAVE コンテナー形式の音声ファイル。 PCM オーディオコーデック (WAVE コーデック "1") はたいていサポートされていますが、他のコーデックのサポートは (あるとしても) 限定的です。 |
| `audio/webm`                                            | WebM コンテナー形式の音声ファイル。 Vorbis や Opus が WebM 仕様書で公式に対応しているコーデックです。                                                                       |
| `video/webm`                                            | WebM コンテナー形式の、おそらく音声も含む動画ファイル。VP8 や VP9 がもっとも一般的に使用される動画コーデックです。 Vorbis や Opus がもっとも一般的な音声コーデックです。    |
| `audio/ogg`                                             | Ogg コンテナー形式の音声ファイル。 Vorbis が、このコンテナーでもっとも一般的に使用される音声コーデックです。しかし、 Opus も同様に Ogg で対応しました。                     |
| `video/ogg`                                             | Ogg コンテナー形式の、おそらく音声も含む動画ファイル。通常の動画コーデックは Theora、音声コーデックは Vorbis ですが、 Opus がもっと有名になってきています。                 |
| `application/ogg`                                       | OGG コンテナー形式を使用する音声または動画のファイル。通常の動画コーデックは Theora、音声コーデックは Vorbis です。                                                         |

### multipart/form-data

`multipart/form-data` タイプは、入力済みの [HTML フォーム](/ja/docs/Learn/Forms) の内容をブラウザーからサーバーに送信するときに使用することができます。

これはマルチパート文書形式として複数の部分から成り、境界 (二重ダッシュ `--` で始まる文字列) によって区切られます。それぞれの部分は固有のエンティティであり、固有の HTTP ヘッダーとして {{HTTPHeader("Content-Disposition")}} やファイルアップロードのフィールドには {{HTTPHeader("Content-Type")}} を持ちます。

```
Content-Type: multipart/form-data; boundary=aBoundaryString
(マルチパート文書全体に関連付けられる、他のヘッダー)

--aBoundaryString
Content-Disposition: form-data; name="myFile"; filename="img.jpg"
Content-Type: image/jpeg

(データ)
--aBoundaryString
Content-Disposition: form-data; name="myField"

(データ)
--aBoundaryString
(サブパート)
--aBoundaryString--
```

以下の `<form>` があったとします。

```html
<form
  action="http://localhost:8000/"
  method="post"
  enctype="multipart/form-data">
  <label>Name: <input name="myTextField" value="Test" /></label>
  <label><input type="checkbox" name="myCheckBox" /> Check</label>
  <label
    >Upload file: <input type="file" name="myFile" value="test.txt"
  /></label>
  <button>Send the file</button>
</form>
```

これは以下のメッセージを送信します。

```
POST / HTTP/1.1
Host: localhost:8000
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate
Connection: keep-alive
Upgrade-Insecure-Requests: 1
Content-Type: multipart/form-data; boundary=---------------------------8721656041911415653955004498
Content-Length: 465

-----------------------------8721656041911415653955004498
Content-Disposition: form-data; name="myTextField"

Test
-----------------------------8721656041911415653955004498
Content-Disposition: form-data; name="myCheckBox"

on
-----------------------------8721656041911415653955004498
Content-Disposition: form-data; name="myFile"; filename="test.txt"
Content-Type: text/plain

Simple file.
-----------------------------8721656041911415653955004498--
```

### multipart/byteranges

`multipart/byteranges` MIME タイプは、部分的なレスポンスをブラウザーへ返すために使用されます。

{{HTTPStatus("206", "206 Partial Content")}} ステータスコードを送信するとき、この MIME タイプは文書がいくつかの部分で構成されていることを示しており、それぞれのリクエストされた範囲のひとつになります。ほかのマルチパートタイプと同様に、 {{HTTPHeader("Content-Type")}} で `boundary` を使用してそれぞれの部分を区切ります。それぞれの部分は実際のタイプを表す {{HTTPHeader("Content-Type")}} ヘッダーと、表現している範囲を表す {{HTTPHeader("Content-Range")}} ヘッダーを持ちます。

```
HTTP/1.1 206 Partial Content
Accept-Ranges: bytes
Content-Type: multipart/byteranges; boundary=3d6b6a416f9b5
Content-Length: 385

--3d6b6a416f9b5
Content-Type: text/html
Content-Range: bytes 100-200/1270

eta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <meta name="viewport" content
--3d6b6a416f9b5
Content-Type: text/html
Content-Range: bytes 300-400/1270

-color: #f0f0f2;
        margin: 0;
        padding: 0;
        font-family: "Open Sans", "Helvetica
--3d6b6a416f9b5--
```

## 正しい MIME タイプを設定することの重要性

多くのウェブサーバーは未知の種類のリソースについて、既定の `application/octet-stream` MIME タイプを送ります。セキュリティ上の理由で、多くのブラウザーはこのようなリソースに既定のアクションを定義することを許可せず、リソースを使用するためにディスクへ保存することをユーザーに強制します。

以下のような誤ったサーバー設定がよく見られます。

- RAR で圧縮されたファイル。
  この場合、元ファイルの実際の種類であることが理想です。これは、 .RAR ファイルがさまざまな種類の複数のリソースを含むことができるため、たいていは不可能です。
  この場合、サーバーが `application/x-rar-compressed` を送信するように設定してください。
- 音声および動画。
  正しい MIME タイプを持つリソースだけが、 {{HTMLElement("video")}} または {{HTMLElement("audio")}} 要素で再生されます。
  [音声および動画に対して正しい MIME タイプを使用する](/ja/docs/Web/Media/Formats)よう注意してください。
- 独自のファイルタイプ。
  特別な操作ができなくなるため、`application/octet-stream` の使用は避けてください。ほとんどのブラウザーは、この汎用的な MIME タイプに既定の動作 (「Word で開く」など) を定義することができません。 `application/vnd.mspowerpoint` のような特定の型ならば、ユーザーがそのようなファイルを自動的に選択したプレゼンテーションソフトウェアで開くことができます。

## MIME スニッフィング

MIME タイプが欠落している、あるいは MIME タイプが誤って設定されているとクライアントが考えている場合に、ブラウザーは MIME スニッフィングを行います。これは、リソースを確認して正しい MIME タイプを推測します。

MIME スニッフィングはブラウザーによって異なる方法で、異なる状況下で行います。 (例えば、 Safari は受信した MIME タイプが合わない場合は、 URL のファイルの拡張子を見ます。) 実行可能なコンテンツを表す MIME タイプの一部には、セキュリティ上の懸念があります。サーバーは {{HTTPHeader("X-Content-Type-Options")}} を送信することで、MIME スニッフィングを抑制できます。

## 文書の種類を伝える他の方法

MIME タイプは、文書の種類の情報を伝える唯一の方法ではありません。

- 特に Microsoft Windows では、ファイル名の拡張子を使用することがあります。拡張子に意味があるとは考えないオペレーティングシステムもありますし (Linux や Mac OS など)、正しいという保証はありません。
- マジックナンバー。バイト構造を見ることで、様々な形式の構文によりファイルタイプを推測することができます。例えば GIF ファイルは16進数の値 `47 49 46 38 39` (`GIF89`)、 PNG ファイルは `89 50 4E 47` (`.PNG`) で始まります。マジックナンバーを持たない種類のファイルもありますので、100%信頼できるシステムではありません。

## 関連情報

- [ウェブメディア技術](/ja/docs/Web/Media)
- [ウェブ上で使用されるメディア形式のガイド](/ja/docs/Web/Media/Formats)
- [サーバーの MIME タイプの正しい構成](/ja/docs/Learn/Server-side/Configuring_server_MIME_types)
