---
title: メディアコンテナーフォーマット（ファイル形式）
slug: Web/Media/Formats/Containers
l10n:
  sourceCommit: a03b4b0e9aaac7409ff1ce974ab1bf2f40c81e03
---

{{QuickLinksWithSubpages("/ja/docs/Web/Media")}}

音声と動画のメディアファイルの形式は、使用する音声や 動画のコーデックと、使用するメディアコンテナーの形式（またはファイル形式）の、2つの部分（もちろん、音声と動画の両方が含まれる場合は3つ）で定義されます。
このガイドでは、ウェブで最も一般的に使用されているコンテナー形式を取り上げ、その仕様に関する基本的な事柄と、利点、制限、理想的な用途について説明します。

[WebRTC](/ja/docs/Web/API/WebRTC_API) は、コンテナーをまったく使用しません。
その代わり、エンコードされた音声と動画のトラックを、1 つのピアから別のピアに直接ストリーミングし、各トラックを表すために {{domxref("MediaStreamTrack")}} オブジェクトを使用します。
WebRTC の呼び出しを行う際に一般的に使用されるコーデックに関する情報や、WebRTC のコーデック対応に関するブラウザーの互換性については [WebRTC で使用されるコーデック](/ja/docs/Web/Media/Formats/WebRTC_codecs)をご覧ください。

## 一般的なコンテナー形式

メディアコンテナー形式は膨大な数がありますが、下記の一覧は最も目にする機会が多いものです。
他にも音声のみに対応しているもの、音声と動画の両方に対応しているものがあります。
それぞれの MIME 型と拡張子が掲載されています。ウェブで最も一般的に使用されるメディアのコンテナーは、MPEG-4 (MP4)、QuickTime Movie (MOV)、Wavefile Audio File Format (WAV)でしょう。
しかし、MP3、Ogg、WebM、AVI、その他の形式にも遭遇することがあります。
しかし、これらすべてがブラウザーで広く対応しているわけではありません。コンテナーとコーデックの組み合わせの中には、便宜上、あるいはどこにでもあるという理由で、自分自身でファイル拡張子や MIME 型を指定されるものもあります。
例えば、 Opus の音声トラックだけを含む Ogg ファイルは、Opus ファイルと呼ばれることがあり、`.opus` という拡張子を持つこともあります。
しかし、それは実際には単なる Ogg ファイルです。

他にも、特定のコンテナー型に格納される特定のコーデックは、広範にわたるため、その組合せが固有の方法で扱われるケースもあります。
この良い例が MP3 音声ファイルで、実際には、 MPEG-1 Audio Layer III エンコーディングでエンコードされた単一の音声トラックを持つ MPEG-1 コンテナーで す。
これらのファイルは、コンテナーが単なる MPEG であるにもかかわらず、`audio/mp3` という MIME 型と `.mp3` 拡張子を使用しています。

### メディアコンテナー形式（ファイル形式）の索引

特定のコンテナー形式について詳しく知りたい場合は、この一覧からその形式を探し、クリックすると、そのコンテナーが通常何に使われるのか、どのコーデックに対応しているのか、どのブラウザーが対応しているのか、などの情報を含む詳細が表示されます。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">コーデック名（略語）</th>
      <th scope="col">完全なコーデック名</th>
      <th scope="col">ブラウザーの互換性</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><a href="#3gp">3GP</a></th>
      <td>Third Generation Partnership</td>
      <td>Android 版 Firefox</td>
    </tr>
    <tr>
      <th scope="row"><a href="#adts">ADTS</a></th>
      <td>Audio Data Transport Stream</td>
      <td>
        <p>Firefox</p>
        <p>基盤となるオペレーティングシステムのメディアフレームワークで利用できる場合のみ利用できます。
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#flac">FLAC</a></th>
      <td>Free Lossless Audio Codec</td>
      <td>Chrome 56, Edge 16, Firefox 51, Safari 11</td>
    </tr>
    <tr>
      <th scope="row"><a href="#mpegmpeg-2">MPEG / MPEG-2</a></th>
      <td>Moving Picture Experts Group (1 and 2)</td>
      <td>—</td>
    </tr>
    <tr>
      <th scope="row"><a href="#mpeg-4_mp4">MPEG-4 (MP4)</a></th>
      <td>Moving Picture Experts Group 4</td>
      <td>Chrome 3, Edge 12, Firefox, Internet Explorer 9, Opera 24, Safari 3.1</td>
    </tr>
    <tr>
      <th scope="row"><a href="#ogg">Ogg</a></th>
      <td>Ogg</td>
      <td>
        <p>Chrome 3, Firefox 3.5, Edge 17 （デスクトップのみ）, Internet Explorer 9, Opera 10.50</p>
        <p>Edge は <a href="https://www.microsoft.com/store/productId/9N5TDP8VCMHS">Web Media Extensions</a> がインストールされている必要があります。</p>
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#quicktime">QuickTime (MOV)</a></th>
      <td>Apple QuickTime movie</td>
      <td>古いバージョンの Safari や、 Apple の QuickTime プラグインに対応しているその他のブラウザー</td>
    </tr>
    <tr>
      <th scope="row"><a href="#webm">WebM</a></th>
      <td>Web Media</td>
      <td>
        <p>Chrome 6, Edge 17 （デスクトップのみ）, Firefox 4, Opera 10.6, Safari 14.1 (macOS), Safari 15 (iOS).</p>
        <p>Edge は <a href="https://www.microsoft.com/store/productId/9N5TDP8VCMHS">Web Media Extensions</a> がインストールされている必要があります。</p>
      </td>
    </tr>
  </tbody>
</table>

特に指定されない限り、ここに掲載されているブラウザーは、モバイルとデスクトップの両方のブラウザーに対応していることを意味します。
また、特定のコーデックではなく、コンテナーそのものにのみ対応していることを意味します。

### 3GP

**3GP** または **3GPP** メディアコンテナーは、携帯端末での消費を目的とした、携帯電話ネットワーク上での伝送を特に意図した音声および/または動画をカプセル化するために使用されます。
この書式は、 3G 携帯電話で使用するために設計されましたが、現代の携帯電話やネットワークでも使用することができます。
しかし、ほとんどのネットワークで利用できる帯域幅が改善され、データ容量が増加したため、 3GP 形式の必要性は低下しています。
しかし、低速のネットワークや低性能の携帯電話では、この形式がまだ使用されています。

このメディアコンテナー形式は、 ISO Base Media File Format と MPEG-4 から派生したものですが、特に低帯域シナリオ向けに効率化されています。

| 音声          | 映像          |
| ------------- | ------------- |
| `audio/3gpp`  | `video/3gpp`  |
| `audio/3gpp2` | `video/3gpp2` |
| `audio/3gp2`  | `video/3gp2`  |

これらの MIME タイプは、3GP メディアコンテナーの基本的なタイプです。使用する特定のコーデックやコーデックによっては、他のタイプが使用されることもあります。
さらに、MIME タイプ文字列に [`codecs` 引数を追加](/ja/docs/Web/Media/Formats/codecs_parameter#iso-bmff)して、音声トラックやビデオトラックにどのコーデックを使用しているかを示し、オプションでプロファイル、レベル、他にもコーデック構成に関する特定の詳細を提供することができます。

<table class="standard-table">
  <caption>
    3GP が対応している映像コーデック
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">コーデック</th>
      <th colspan="4" scope="col" style="text-align: center">
        ブラウザーの対応
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">AVC (H.264)</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">H.263</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MPEG-4 Part 2 (MP4v-es)</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">VP8</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

<table class="standard-table">
  <caption>
    3GP が対応している音声コーデック
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">コーデック</th>
      <th colspan="4" scope="col" style="text-align: center">
        ブラウザーの対応
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">AMR-NB</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">AMR-WB</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">AMR-WB+</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">AAC-LC</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">HE-AAC v1</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">HE-AAC v2</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MP3</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

### ADTS

**Audio Data Transport Stream** (**ADTS**) は、 MPEG-4 Part 3 で指定された音声データのコンテナー形式で、インターネットラジオなどのストリーミング音声に使用されることを目的としています。
ADTS フレームと最小限のヘッダーで構成される、ほぼ素の AAC 音声データのストリームです。

| 音声         |
| ------------ |
| `audio/aac`  |
| `audio/mpeg` |

ADTS に使用される MIME タイプは、どのような音声フレームが含まれているかに依存します。
もし ADTS フレームが使用された場合、`audio/aac` という MIME タイプを使用すべきです。
もし音声フレームが MPEG-1/MPEG-2 Audio Layer I、II、III 形式であれば、 MIME タイプは `audio/mpeg` を入力する必要があります。

<table class="standard-table">
  <caption>
    ADTS が対応している音声コーデック
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">コーデック</th>
      <th colspan="4" scope="col" style="text-align: center">
        ブラウザーの対応
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">AAC</th>
      <td></td>
      <td></td>
      <td>あり</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MP3</th>
      <td></td>
      <td></td>
      <td>あり</td>
      <td></td>
    </tr>
  </tbody>
</table>

Firefox の AAC 対応は、OS のメディアインフラに依存しているため、OS が対応している限り利用することができます。

### FLAC

**Free Lossless Audio Codec (FLAC)** は可逆圧縮の音声コーデックです。この音声を格納できる、関連する単純なコンテナー形式もあり、これも FLAC と呼ばれます。
この形式は特許に邪魔されないので、安全に使用することができます。
FLAC ファイルは、 FLAC 音声データのみを格納することができます。

| 音声                          |
| ----------------------------- |
| `audio/flac`                  |
| `audio/x-flac` (non-standard) |

<table class="standard-table">
  <caption>
    FLAC が対応している音声コーデック
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">コーデック</th>
      <th colspan="4" scope="col" style="text-align: center">
        ブラウザーの対応
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">FLAC</th>
      <td></td>
      <td></td>
      <td>あり</td>
      <td></td>
    </tr>
  </tbody>
</table>

### MPEG/MPEG-2

**[MPEG-1](https://ja.wikipedia.org/wiki/MPEG-1)** と **[MPEG-2](https://ja.wikipedia.org/wiki/MPEG-2)** のファイル形式は、基本的に同じものです。
Moving Picture Experts Group (MPEG) によって作成されたこれらの書式は、 DVD メディアの動画の形式であることを含め、物理メディアで広く使用されています。

インターネット上では、 MPEG ファイル形式の最も一般的な使用は、おそらく [Layer_III/MP3](https://ja.wikipedia.org/wiki/MPEG-1) 音声データを含むことです。結果として生じるファイルは、世界中のデジタル音楽機器で使用される大人気の MP3 ファイルです。
それ以外の MPEG-1 や MPEG-2 は、ウェブコンテンツではあまり使用されていません。

MPEG-1 と MPEG-2 の主な違いは、コンテナー形式ではなく、メディアデータ形式にあります。
MPEG-1 は 1992 年に登場し、 MPEG-2 は 1996 年に登場しました。

| 音声         | 映像         |
| ------------ | ------------ |
| `audio/mpeg` | `video/mpeg` |

<table class="standard-table">
  <caption>
    MPEG-1 および MPEG-2 で対応している映像コーデック
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">コーデック</th>
      <th colspan="4" scope="col" style="text-align: center">
        ブラウザーの対応
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">MPEG-1 Part 2</th>
      <td></td>
      <td></td>
      <td>なし</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MPEG-2 Part 2</th>
      <td></td>
      <td></td>
      <td>なし</td>
      <td></td>
    </tr>
  </tbody>
</table>

<table class="standard-table">
  <caption>
    MPEG-1 および MPEG-2 で対応している音声コーデック
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">コーデック</th>
      <th colspan="4" scope="col" style="text-align: center">
        ブラウザーの対応
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">MPEG-1 Audio Layer I</th>
      <td></td>
      <td></td>
      <td>なし</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MPEG-1 Audio Layer II</th>
      <td></td>
      <td></td>
      <td>なし</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MPEG-1 Audio Layer III (MP3)</th>
      <td></td>
      <td></td>
      <td>あり</td>
      <td></td>
    </tr>
  </tbody>
</table>

### MPEG-4 (MP4)

**[MPEG-4](https://ja.wikipedia.org/wiki/MPEG-4)** (**MP4**) は、 MPEG ファイル形式の最新バージョンです。
この形式には 2 つのバージョンがあり、仕様のパート 1 およびパート 14 で定義されています。
MP4 は、最も使用されるコーデックのいくつかに対応し、幅広く対応しているため、現在人気のあるコンテナーです。

元の MPEG-4 パート 1 ファイル形式は 1999 年に導入され、パート 14 で定義されたバージョン 2 フォーマットは 2003 年に追加されました。
MP4 ファイル形式は、 [ISO base media file format](https://en.wikipedia.org/wiki/ISO_base_media_file_format) から派生したもので、[Apple](https://www.apple.com/) が開発した [QuickTime file format](https://en.wikipedia.org/wiki/QuickTime_File_Format) から直接派生したものです。

MPEG-4 メディア形式 (`audio/mp4` または `video/mp4`) を指定するとき、MIME 形式の文字列に `codecs` 引数](/ja/docs/Web/Media/Formats/codecs_parameter#iso-bmff)を加えて、どのコーデックが音声と映像のトラックで使われているかを示すとともに、プロファイル、レベル、その他のコーデック構成の詳細を示すことができます。

| 音声        | 映像        |
| ----------- | ----------- |
| `audio/mp4` | `video/mp4` |

これらの MIME 型は MPEG-4 メディアコンテナーの基本的な型です。コンテナー内で使用する特定のコーデックに応じて、他の MIME タイプを使用することができます。
さらに、MIME タイプ文字列に [`codecs` 引数を追加して](/ja/docs/Web/Media/Formats/codecs_parameter#iso-bmff) 音声トラックや映像トラックにどのコーデックが使用されているかを示し、オプションでプロファイル、レベル、他にも特定のコーデックに関する詳細を提供することが可能です。

<table class="standard-table">
  <caption>
    MPEG-4 で対応しているコーデック
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">コーデック</th>
      <th colspan="4" scope="col" style="text-align: center">
        ブラウザーの対応
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">AVC (H.264)</th>
      <td></td>
      <td></td>
      <td>
        <p>あり</p>
        <p>
          Firefox の H.264 対応は、OS のメディアインフラに依存しているため、OS が対応している限り利用することができます。
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">AV1</th>
      <td></td>
      <td></td>
      <td>
        <p>あり</p>
        <p>Firefox の AV1 対応は、Android ([Firefox バグ 1672276](https://bugzil.la/1672276)) と Windows on ARM では無効です （環境設定 <code>media.av1.enabled</code> を <code>true</code> に設定すると有効になります）。</p>
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">H.263</th>
      <td></td>
      <td></td>
      <td>なし</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MPEG-4 Part 2 Visual</th>
      <td></td>
      <td></td>
      <td>なし</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">VP9</th>
      <td></td>
      <td></td>
      <td>あり</td>
      <td></td>
    </tr>
  </tbody>
</table>

<table class="standard-table">
  <caption>
    MPEG-4 で対応している音声コーデック
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">コーデック</th>
      <th colspan="4" scope="col" style="text-align: center">
        ブラウザーの対応
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">AAC</th>
      <td></td>
      <td></td>
      <td>
        <p>あり</p>
        <p>Firefox の H.264 対応は、OS のメディアインフラに依存しているため、OS が対応している限り利用することができます。</p>
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">FLAC</th>
      <td></td>
      <td></td>
      <td>あり</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MPEG-1 Audio Layer III (MP3)</th>
      <td></td>
      <td></td>
      <td>あり</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Opus</th>
      <td></td>
      <td></td>
      <td>あり</td>
      <td></td>
    </tr>
  </tbody>
</table>

### Ogg

[Ogg](https://en.wikipedia.org/wiki/Ogg) コンテナー形式は、[Xiph.org Foundation](https://www.xiph.org/) によって維持されている、無料でオープンな形式です。
Ogg フレームワークは、Theora ビデオコーデックや Vorbis、Opus 音声コーデックなど、特許を取得していないエンコードメディアデータ形式も定義しています。
[Ogg 形式に関する Xiph.org の文書](https://xiph.org/ogg/)は、これらのウェブサイトで利用できます。

Ogg は長く存在してきていますが、メディアコンテナーの最初の選択肢として必要な幅広い支持を得ることはできませんでした。
一般的には WebM を使用した方がよいのですが、WebM にまだ対応していない古いバージョンの Firefox や Chrome に対応したい場合など、Ogg を使用することが有益な時刻もあります。
例えば、 Firefox 3.5 と 3.6 は Ogg に対応していますが、 WebM には対応していません。

Ogg とそのコーデックについては、 [Theora Cookbook](https://en.flossmanuals.net/ogg-theora/_full/) でより詳細な情報を取得することができます。

| 音声        | 映像        |
| ----------- | ----------- |
| `audio/ogg` | `video/ogg` |

MIME タイプの `application/ogg` は、メディアが音声や映像を含んでいるかどうかが必ずしもわからない場合に使用することができます。
可能な限り、特定の種類のタイプを使用すべきですが、コンテンツの形式やフォーマットがわからない場合は `application/ogg` にフォールバックしてください。

MIME タイプ文字列に [`codecs` 引数を追加](/ja/docs/Web/Media/Formats/codecs_parameter#ogg)して、音声と映像のトラックにどのコーデックが使用されているかを示し、さらにオプションでトラックメディア形式を記述することも可能です。

<table class="standard-table">
  <caption>
    Ogg が対応している映像コーデック
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">コーデック</th>
      <th colspan="4" scope="col" style="text-align: center">
        ブラウザーの対応
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Theora</th>
      <td></td>
      <td></td>
      <td>あり</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">VP8</th>
      <td></td>
      <td></td>
      <td>あり</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">VP9</th>
      <td></td>
      <td></td>
      <td>あり</td>
      <td></td>
    </tr>
  </tbody>
</table>

<table class="standard-table">
  <caption>
    Ogg で対応している音声コーデック
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">コーデック</th>
      <th colspan="4" scope="col" style="text-align: center">
        ブラウザーの対応
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">FLAC</th>
      <td></td>
      <td></td>
      <td>あり</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Opus</th>
      <td></td>
      <td></td>
      <td>あり</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Vorbis</th>
      <td></td>
      <td></td>
      <td>あり</td>
      <td></td>
    </tr>
  </tbody>
</table>

### QuickTime

**QuickTime**ファイル形式（**QTFF**、**QT**、**MOV**）は、 Apple が同名のメディアフレームワークで使用するために作成されたものである。
これらのファイルの拡張子である `.mov` は、この形式が当初ムービー用に使用され、通常 "QuickTime movie" 形式と呼ばれていたことに由来しています。
QTFF は MPEG-4 ファイル形式の基礎となりましたが、異なる形があり、この 2 つは全く互換性がありません。

QuickTime ファイルは、音声や映像メディア、テキストトラックなどを含む時刻ベースのデータの任意の種類をに対応しています。
QuickTime ファイルは主に macOS で対応していますが、何年か前から、 Windows でアクセスするための QuickTime for Windows が利用できました。
しかし、 QuickTime for Windows は 2016 年初頭の時点で Apple によって対応されておらず、セキュリティ上の懸念があることが知られているため、*使用しない方がよい*とされています。
ただし、 Windows Media Player はこれで QuickTime バージョン 2.0 以前のファイルに統合的に対応しており、それ以降のバージョンの QuickTime に対応するにはサードパーティによる追加が必要です。

Mac OS では、 QuickTime フレームワークは QuickTime 形式の動画ファイルおよびコーデックに対応しているだけでなく、一般的および特殊な音声および動画コーデック、さらに静止画形式にも幅広く対応しています。
QuickTime を通じて、 Mac アプリケーション（QuickTime プラグインや QuickTime との直接統合によるウェブブラウザを含む）は、 AAC、AIFF、MP3、PCM、Qualcomm PureVoice などの音声形式、AVI、DV、Pixlet、ProRes、FLAC、Cinepak、3GP、H.261からH.265、MJPEG、MPEG-1とMPEG-4 Part 2、Sorenson などの動画形式の読み取りや書き込みを行うことができたのである。

さらに、 QuickTime 用のサードパーティ製コンポーネントも多数利用でき、その中には、追加のコーデックに対応しているものもあります。

QuickTime のサポートは、すべてにおいて、主に Apple 製の機器で利用できるため、インターネット上では、もはやあまり使用されていません。
Apple 社自身も、これで一般的に動画に MP4 を使用するようになった。
さらに、 QuickTime フレームワークは、しばらくの間、Macでは非推奨となっており、macOS 10.15 Catalina からは、まったく利用できなくなりました。

| 映像              |
| ----------------- |
| `video/quicktime` |

`video/quicktime` の MIME タイプは、 QuickTime メディアコンテナーを入力するための基本的な型です。
QuickTime (Mac OS 上のメディアフレームワーク) はさまざまなコンテナとコーデックに対応、実際には他の多くの MIME タイプをサポートしていることはメモしておく価値があります。

MIME タイプ文字列に [`codecs` 引数を追加](/ja/docs/Web/Media/Formats/codecs_parameter#iso-bmff) して、音声トラックやビデオトラックにどのコーデックを使用するかを指定したり、プロファイル、レベル、その他コーデック構成の詳細に関するオプションを提供したりすることが可能です。

<table class="standard-table">
  <caption>
    QuickTime で対応している動画コーデック
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">コーデック</th>
      <th colspan="4" scope="col" style="text-align: center">
        ブラウザーの対応
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">AVC (H.264)</th>
      <td></td>
      <td></td>
      <td>なし</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Cinepak</th>
      <td></td>
      <td></td>
      <td>なし</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Component Video</th>
      <td></td>
      <td></td>
      <td>なし</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">DV</th>
      <td></td>
      <td></td>
      <td>なし</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">H.261</th>
      <td></td>
      <td></td>
      <td>なし</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">H.263</th>
      <td></td>
      <td></td>
      <td>なし</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MPEG-2</th>
      <td></td>
      <td></td>
      <td>なし</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MPEG-4 Part 2 Visual</th>
      <td></td>
      <td></td>
      <td>なし</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Motion JPEG</th>
      <td></td>
      <td></td>
      <td>なし</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Sorenson Video 2</th>
      <td></td>
      <td></td>
      <td>なし</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Sorenson Video 3</th>
      <td></td>
      <td></td>
      <td>なし</td>
      <td></td>
    </tr>
  </tbody>
</table>

<table class="standard-table">
  <caption>
    QuickTime で対応している音声コーデック
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">コーデック</th>
      <th colspan="4" scope="col" style="text-align: center">
        ブラウザーの対応
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">AAC</th>
      <td></td>
      <td></td>
      <td>なし</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">ALaw 2:1</th>
      <td></td>
      <td></td>
      <td>なし</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Apple Lossless (ALAC)</th>
      <td></td>
      <td></td>
      <td>なし</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">HE-AAC</th>
      <td></td>
      <td></td>
      <td>なし</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MPEG-1 Audio Layer III (MP3)</th>
      <td></td>
      <td></td>
      <td>なし</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Microsoft ADPCM</th>
      <td></td>
      <td></td>
      <td>なし</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">µ-Law 2:1 (u-Law)</th>
      <td></td>
      <td></td>
      <td>なし</td>
      <td></td>
    </tr>
  </tbody>
</table>

### WAVE (WAV)

**Waveform Audio File Format** (**WAVE**) は、マイクロソフトと IBM によって開発された音声ビットストリームデータを格納するための形式です（ファイル名の拡張子が `.wav` なので通常 WAV と呼ばれます）。

これは RIFF (Resource Interchange File Format) から派生したもので、 Apple の AIFF など、他の形式と似ています。
WAV コーデックのレジストリーは {{RFC(2361)}} にあります。しかし、ほぼすべての WAV ファイルがリニア PCM を使用しているため、他のコーデックが対応するのはまれです。

WAVE 形式は 1991 年に最初にリリースされました。

| 音声             |
| ---------------- |
| `audio/wave`     |
| `audio/wav`      |
| `audio/x-wav`    |
| `audio/x-pn-wav` |

MIME タイプは `audio/wave` が標準的なタイプで、これが推奨されます。しかし、他にも長年にわたって様々な製品で使用されており、環境によっては同じように使用することができるでしょう。

<table class="standard-table">
  <caption>
    WAVE で対応している音声コーデック
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">コーデック</th>
      <th colspan="4" scope="col" style="text-align: center">
        ブラウザーの対応
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">ADPCM (Adaptive Differential Pulse Code Modulation)</th>
      <td></td>
      <td></td>
      <td>なし</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">GSM 06.10</th>
      <td></td>
      <td></td>
      <td>なし</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">LPCM (Linear Pulse Code Modulation)</th>
      <td></td>
      <td></td>
      <td>あり</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MPEG-1 Audio Layer III (MP3)</th>
      <td></td>
      <td></td>
      <td>なし</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">µ-Law (u-Law)</th>
      <td></td>
      <td></td>
      <td>なし</td>
      <td></td>
    </tr>
  </tbody>
</table>

### WebM

**[WebM](https://en.wikipedia.org/wiki/WebM)** (**Web Media**) は [Matroska](https://en.wikipedia.org/wiki/Matroska) をベースにした形式で、現代のウェブ環境で使用するために特別に設計されたものです。
完全にフリーでオープンな技術に基づいており、主にフリーでオープンなコーデックを使用しますが、 WebM コンテナーで他のコーデックに対応している製品もあります。

WebM は 2010 年に初めて導入され、今では広く対応しています。
WebM に準拠した実装を行うためには、 VP8 および VP9 動画コーデック、 Vorbis および Opus 音声コーデックに対応する必要があります。
WebM コンテナー形式とそれに必要なコーデックは、すべてオープンライセンスで利用できます。
他のコーデックを使用する場合は、ライセンスが必要になることがあります。

| 音声         | 映像         |
| ------------ | ------------ |
| `audio/webm` | `video/webm` |

<table class="standard-table">
  <caption>
    WebM で対応している動画コーデック
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">コーデック</th>
      <th colspan="4" scope="col" style="text-align: center">
        ブラウザーの対応
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">AV1</th>
      <td>あり</td>
      <td>あり</td>
      <td>
        <p>あり</p>
        <p>Firefox の AV1 対応は、macOS では Firefox 66 で、 Windows では Firefox 67 で、Linux では Firefox 68 で追加されました。
          Android 版 Firefox はまだ AV1 に対応していません。 Firefox の実装はセキュアプロセスを使用するように設計されていますが、 Android ではまだ使用されていません。
        </p>
      </td>
      <td>あり</td>
    </tr>
    <tr>
      <th scope="row">VP8</th>
      <td>あり</td>
      <td>あり</td>
      <td>あり</td>
      <td>あり</td>
    </tr>
    <tr>
      <th scope="row">VP9</th>
      <td>あり</td>
      <td>あり</td>
      <td>あり</td>
      <td>あり</td>
    </tr>
  </tbody>
</table>

<table class="standard-table">
  <caption>
    WebM で対応している音声コーデック
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">コーデック</th>
      <th colspan="4" scope="col" style="text-align: center">
        ブラウザーの対応
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Opus</th>
      <td>あり</td>
      <td>あり</td>
      <td>あり</td>
      <td>あり</td>
    </tr>
    <tr>
      <th scope="row">Vorbis</th>
      <td>あり</td>
      <td>あり</td>
      <td>あり</td>
      <td>あり</td>
    </tr>
  </tbody>
</table>

## 正しいコンテナーの選択

メディアに使用する最適なコンテナーを選択する際、考慮すべき要素がいくつかあります。
それぞれの相対的な重要性は、ニーズ、ライセンス要件、対象となる視聴者の互換性要件に依存します。

### ガイドライン

最適な選択は、メディアを使って何をするのかにもよります。
メディアを再生することと、記録や編集をすることは異なることです。
メディアデータを操作する場合は、非圧縮形式を使用するとパフォーマンスが向上します。一方、可逆圧縮形式を使用すると、少なくとも圧縮時のノイズが再圧縮のたびに増幅されるのを防ぐことができます。

- ターゲットにモバイル端末や低速ネットワークのユーザーが含まれる場合は、適切な圧縮を施した 3GP コンテナーでメディアのバージョンを提供することを検討してください。
- 特定のエンコーディングの要件がある場合は、選んだコンテナーが適切なコーデックに対応していることを確認してください。
- メディアを独占的でないオープンな形式にしたい場合は、 FLAC （音声）や WebM （動画）など、オープンコンテナー形式のいずれかを使用することを検討してください。
- 何らかの理由でメディアを単一の形式でしか提供できない場合は、 MP3 （音声用）や MP4 （動画と音声用）など、最も幅広い機器やブラウザーで利用できる形式を選んでください。
- メディアが音声のみの場合、音声のみのコンテナー形式を選ぶことは、おそらく理にかなっています。
  特許がすべて失効しているこれで、 MP3 は広く対応しており、良い選択です。
  WAVE は良いですが、非圧縮なので、大きな音声サンプルに使用する前に、その点に注意してください。
  対象となるブラウザーがすべて対応していれば、可逆圧縮のため、 FLAC はとても良い選択です。

残念ながら、比較的メジャーな可逆圧縮形式（FLACとALAC）のどちらも、広く普及しているわけではありません。
FLAC は 2 つのうちより広く対応されていますが、追加のソフトウェアをインストールしないと macOS では対応していませんし、 iOS ではまったく対応していません。
ロスレス音声を提供する必要がある場合、普遍的な互換性に近づけるために、 FLAC と ALAC の両方を提供する必要がある場合があります。

### コンテナー選択のアドバイス

下記の表は、様々なシナリオで使用するコンテナーとして提案されているものです。
これらはあくまで提案です。
コンテナー形式を選択する前に、必ずアプリケーションと組織のニーズを考慮してください。

#### 音声のみのファイル

| ニーズ                           | このコンテナー形式の使用を検討してください |
| -------------------------------- | ------------------------------------------ |
| 汎用的な再生に適した圧縮ファイル | MP3 (MPEG-1 Audio Layer III)               |
| 可逆圧縮ファイル                 | FLAC に ALAC のフォールバック              |
| 非圧縮ファイル                   | WAV                                        |

MP3 の特許がすべて切れたことで、音声ファイルの形式を選択することが非常に容易になりました。
MP3 の幅広い互換性と、使用する際に支払うべきロイヤリティのどちらかを選ぶ必要はなくなりました。

#### 動画ファイル

| ニーズ                                       | このコンテナー形式の使用を検討してください          |
| -------------------------------------------- | --------------------------------------------------- |
| 汎用性ある動画、できればオープンな形式のもの | WebM (できれば MP4 のフォールバック)                |
| 汎用的な動画                                 | MP4 (できれば WebM または Ogg のフォールバック)     |
| 低速回線に最適化した高圧縮                   | 3GP (できれば MP4 フォールバック)                   |
| 古い端末/ブラウザーへの対応について          | QuickTime (できれば AVI や MPEG-2 のフォールバック) |

これらの提案には、いくつかの前提があります。
特にエンコードが必要なメディアを多く保有している場合は、最終的な決断を下す前にオプションを慎重に検討する必要があります。

## 複数のコンテナーへの互換性を最大限に高める

互換性を最適化するために、 {{HTMLElement("source")}} 要素を使って {{HTMLElement("audio")}} または {{HTMLElement("video")}} 要素内でそれぞれのソースを指定し、複数のバージョンのメディアファイルを提供することを考慮する価値はあります。
例えば、 Ogg や WebM の動画を最初の選択肢として提供し、フォールバックとして MP4 形式の動画を提供することができます。
さらに、レトロな QuickTime や AVI をフォールバックとして提供することもできます。

これを行うには、 [`src`](/ja/docs/Web/HTML/Element/video#src) 属性のない `<video>` （または `<audio>`）要素を作成します。
そして、`<video>` 要素の中に、提供する動画のバージョンごとに子要素である {{HTMLElement("source")}} を追加します。
これは、帯域幅の利用可能性に応じて選択できるさまざまなバージョンの動画を提供するために使用できますが、私たちの場合は、形式オプションを提供するために使用することにします。

ここに示す例では、動画が 2 つの形式でブラウザーに提供されています。 WebM と MP4 です。

{{EmbedInteractiveExample("pages/tabbed/source.html", "tabbed-standard")}}

動画は最初に WebM 形式で提供されます（[`type`](/ja/docs/Web/HTML/Element/video#type) 属性に `video/webm` を設定した場合）。
もし {{Glossary("user agent")}} がそれを再生できなければ、`type` が `video/mp4` に指定された次のオプションに移動します。
どちらも再生できない場合、"This browser does not support the HTML video element." というテキストが表示されます。

## 仕様書

| 仕様書                                                                                                                                                       | コメント                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| [ETSI 3GPP](https://portal.3gpp.org/desktopmodules/Specifications/SpecificationDetails.aspx?specificationId=1441)                                            | 3GP コンテナー形式を定義                                                                                         |
| [ISO/IEC 14496-3](https://www.iso.org/standard/53943.html) (MPEG-4 Part 3 Audio)                                                                             | ADTS を含む MP4 音声を定義                                                                                       |
| [FLAC Format](https://xiph.org/flac/format.html)                                                                                                             | FLAC 形式の仕様書                                                                                                |
| [ISO/IEC 11172-1](https://www.iso.org/standard/19180.html) (MPEG-1 Part 1 Systems)                                                                           | MPEG-1 コンテナー形式を定義                                                                                      |
| [ISO/IEC 13818-1](https://www.iso.org/standard/74427.html) (MPEG-2 Part 1 Systems)                                                                           | MPEG-2 コンテナー形式を定義                                                                                      |
| [ISO/IEC 14496-14](https://www.iso.org/standard/75929.html) (MPEG-4 Part 14: MP4 file format)                                                                | MPEG-4 (MP4) version 2 コンテナー形式を定義                                                                      |
| [ISO/IEC 14496-1](https://www.iso.org/standard/55688.html) (MPEG-4 Part 1 Systems)                                                                           | 元の MPEG-4 (MP4) コンテナー形式を定義                                                                           |
| {{RFC(3533)}}                                                                                                                                                | Ogg コンテナー形式を定義                                                                                         |
| {{RFC(5334)}}                                                                                                                                                | Ogg メディア型とファイル拡張子を定義                                                                             |
| [QuickTime File Format Specification](https://developer.apple.com/library/archive/documentation/QuickTime/QTFF/QTFFPreface/qtffPreface.html)                 | QuickTime movie (MOV) 形式を定義                                                                                 |
| [Multimedia Programming Interface and Data Specifications 1.0](https://web.archive.org/web/20090417165828/http://www.kk.iij4u.or.jp/~kondo/wave/mpidata.txt) | WAVE 公式仕様に最も近いもの                                                                                      |
| [Resource Interchange File Format](https://docs.microsoft.com/windows/win32/xaudio2/resource-interchange-file-format--riff-) (used by WAV)                   | RIFF 形式を定義、 WAVE ファイルは RIFF 形式です                                                                  |
| [WebM Container Guidelines](https://www.webmproject.org/docs/container/)                                                                                     | Matroska を WebM に適応させるためのガイド                                                                        |
| [Matroska Specifications](https://matroska.org/index.html)                                                                                                   | WebM のベースとなる Matroska コンテナー形式の仕様書                                                              |
| [WebM Byte Stream Format](https://w3c.github.io/media-source/webm-byte-stream-format.html)                                                                   | [メディアソース拡張機能](/ja/docs/Web/API/Media_Source_Extensions_API)で使用するための WebM バイトストリーム形式 |

## ブラウザーの互換性

<table class="standard-table">
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">
        コンテナー形式名
      </th>
      <th
        colspan="3"
        scope="col"
        style="text-align: center; border-right: 2px solid #d4dde4"
      >
        音声
      </th>
      <th colspan="3" scope="col" style="text-align: center">映像</th>
    </tr>
    <tr>
      <th scope="col" style="vertical-align: bottom">MIME タイプ</th>
      <th scope="col" style="vertical-align: bottom">拡張子</th>
      <th
        scope="col"
        style="vertical-align: bottom; border-right: 2px solid #d4dde4"
      >
        ブラウザーの対応
      </th>
      <th scope="col" style="vertical-align: bottom">MIME タイプ</th>
      <th scope="col" style="vertical-align: bottom">拡張子</th>
      <th
        scope="col"
        style="vertical-align: bottom; border-right: 2px solid #d4dde4"
      >
        ブラウザーの対応
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" style="vertical-align: bottom">3GP</th>
      <td style="vertical-align: top"><code>audio/3gpp</code></td>
      <td style="vertical-align: top"><code>.3gp</code></td>
      <td style="vertical-align: top; border-right: 2px solid #d4dde4">
        Firefox
      </td>
      <td style="vertical-align: top"><code>video/3gpp</code></td>
      <td style="vertical-align: top"><code>.3gp</code></td>
      <td style="vertical-align: top">Firefox</td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        ADTS (Audio Data Transport Stream)
      </th>
      <td style="vertical-align: top"><code>audio/aac</code></td>
      <td style="vertical-align: top"><code>.aac</code></td>
      <td style="vertical-align: top; border-right: 2px solid #d4dde4">
        Firefox
      </td>
      <td style="vertical-align: top">—</td>
      <td style="vertical-align: top">—</td>
      <td style="vertical-align: top">—</td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">FLAC</th>
      <td style="vertical-align: top"><code>audio/flac</code></td>
      <td style="vertical-align: top"><code>.flac</code></td>
      <td style="vertical-align: top; border-right: 2px solid #d4dde4">
        Firefox
      </td>
      <td style="vertical-align: top">—</td>
      <td style="vertical-align: top">—</td>
      <td style="vertical-align: top">—</td>
    </tr>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: top">
        MPEG-1 / MPEG-2 (MPG or MPEG)
      </th>
      <td style="vertical-align: top"><code>audio/mpeg</code></td>
      <td style="vertical-align: top">
        <code>.mpg</code><br /><code>.mpeg</code>
      </td>
      <td style="vertical-align: top; border-right: 2px solid #d4dde4">
        Firefox
      </td>
      <td rowspan="2" style="vertical-align: top"><code>video/mpeg</code></td>
      <td rowspan="2" style="vertical-align: top">
        <code>.mpg</code><br /><code>.mpeg</code>
      </td>
      <td rowspan="2" style="vertical-align: top">Firefox</td>
    </tr>
    <tr>
      <td style="vertical-align: top"><code>audio/mp3</code></td>
      <td style="vertical-align: top"><code>.mp3</code></td>
      <td style="vertical-align: top; border-right: 2px solid #d4dde4">
        Firefox
      </td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">MPEG-4 (MP4)</th>
      <td style="vertical-align: top"><code>audio/mp4</code></td>
      <td style="vertical-align: top">
        <code>.mp4</code><br /><code>.m4a</code>
      </td>
      <td style="vertical-align: top; border-right: 2px solid #d4dde4">
        Firefox
      </td>
      <td style="vertical-align: top"><code>video/mp4</code></td>
      <td style="vertical-align: top">
        <code>.mp4</code><br /><code>.m4v</code><br /><code>.m4p</code>
      </td>
      <td style="vertical-align: top">Firefox</td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">Ogg</th>
      <td style="vertical-align: top"><code>audio/ogg</code></td>
      <td style="vertical-align: top">
        <code>.oga</code><br /><code>.ogg</code>
      </td>
      <td style="vertical-align: top; border-right: 2px solid #d4dde4">
        Firefox
      </td>
      <td style="vertical-align: top"><code>video/ogg</code></td>
      <td style="vertical-align: top">
        <code>.ogv</code><br /><code>.ogg</code>
      </td>
      <td style="vertical-align: top">Firefox</td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">QuickTime Movie (MOV)</th>
      <td style="vertical-align: top">—</td>
      <td style="vertical-align: top">—</td>
      <td style="vertical-align: top; border-right: 2px solid #d4dde4">—</td>
      <td style="vertical-align: top"><code>video/quicktime</code></td>
      <td style="vertical-align: top"><code>.mov</code></td>
      <td style="vertical-align: top">Safari</td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">WAV (Waveform Audiofile)</th>
      <td style="vertical-align: top"><code>audio/wav</code></td>
      <td style="vertical-align: top"><code>.wav</code></td>
      <td style="vertical-align: top; border-right: 2px solid #d4dde4">
        Firefox
      </td>
      <td style="vertical-align: top">—</td>
      <td style="vertical-align: top">—</td>
      <td style="vertical-align: top">—</td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">WebM</th>
      <td style="vertical-align: top"><code>audio/webm</code></td>
      <td style="vertical-align: top"><code>.webm</code></td>
      <td style="vertical-align: top; border-right: 2px solid #d4dde4">
        Firefox
      </td>
      <td style="vertical-align: top"><code>video/webm</code></td>
      <td style="vertical-align: top"><code>.webm</code></td>
      <td style="vertical-align: top">Firefox</td>
    </tr>
  </tbody>
</table>

## 関連情報

- [WebRTC API](/ja/docs/Web/API/WebRTC_API)
- [MediaStream Recording API](/ja/docs/Web/API/MediaStream_Recording_API)
- {{HTMLElement("audio")}} および {{HTMLElement("video")}} 要素
