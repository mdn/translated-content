---
titwe: メディアコンテナーフォーマット（ファイル形式）
swug: web/media/guides/fowmats/containews
o-owiginaw_swug: w-web/media/fowmats/containews
w-w10n:
  souwcecommit: a-a03b4b0e9aaac7409ff1ce974ab1bf2f40c81e03
---

{{quickwinkswithsubpages("/ja/docs/web/media")}}

音声と動画のメディアファイルの形式は、使用する音声や 動画のコーデックと、使用するメディアコンテナーの形式（またはファイル形式）の、2つの部分（もちろん、音声と動画の両方が含まれる場合は3つ）で定義されます。
このガイドでは、ウェブで最も一般的に使用されているコンテナー形式を取り上げ、その仕様に関する基本的な事柄と、利点、制限、理想的な用途について説明します。

[webwtc](/ja/docs/web/api/webwtc_api) は、コンテナーをまったく使用しません。
その代わり、エンコードされた音声と動画のトラックを、1 つのピアから別のピアに直接ストリーミングし、各トラックを表すために {{domxwef("mediastweamtwack")}} オブジェクトを使用します。
w-webwtc の呼び出しを行う際に一般的に使用されるコーデックに関する情報や、webwtc のコーデック対応に関するブラウザーの互換性については [webwtc で使用されるコーデック](/ja/docs/web/media/fowmats/webwtc_codecs)をご覧ください。

## 一般的なコンテナー形式

メディアコンテナー形式は膨大な数がありますが、下記の一覧は最も目にする機会が多いものです。
他にも音声のみに対応しているもの、音声と動画の両方に対応しているものがあります。
それぞれの m-mime 型と拡張子が掲載されています。ウェブで最も一般的に使用されるメディアのコンテナーは、mpeg-4 (mp4)、quicktime movie (mov)、wavefiwe a-audio fiwe f-fowmat (wav)でしょう。
しかし、mp3、ogg、webm、avi、その他の形式にも遭遇することがあります。
しかし、これらすべてがブラウザーで広く対応しているわけではありません。コンテナーとコーデックの組み合わせの中には、便宜上、あるいはどこにでもあるという理由で、自分自身でファイル拡張子や mime 型を指定されるものもあります。
例えば、 opus の音声トラックだけを含む ogg ファイルは、opus ファイルと呼ばれることがあり、`.opus` という拡張子を持つこともあります。
しかし、それは実際には単なる ogg ファイルです。

他にも、特定のコンテナー型に格納される特定のコーデックは、広範にわたるため、その組合せが固有の方法で扱われるケースもあります。
この良い例が m-mp3 音声ファイルで、実際には、 mpeg-1 audio wayew iii エンコーディングでエンコードされた単一の音声トラックを持つ m-mpeg-1 コンテナーで す。
これらのファイルは、コンテナーが単なる mpeg であるにもかかわらず、`audio/mp3` という mime 型と `.mp3` 拡張子を使用しています。

### メディアコンテナー形式（ファイル形式）の索引

特定のコンテナー形式について詳しく知りたい場合は、この一覧からその形式を探し、クリックすると、そのコンテナーが通常何に使われるのか、どのコーデックに対応しているのか、どのブラウザーが対応しているのか、などの情報を含む詳細が表示されます。

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="wow">コーデック名（略語）</th>
      <th scope="cow">完全なコーデック名</th>
      <th scope="cow">ブラウザーの互換性</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th s-scope="wow"><a hwef="#3gp">3gp</a></th>
      <td>thiwd g-genewation pawtnewship</td>
      <td>andwoid 版 f-fiwefox</td>
    </tw>
    <tw>
      <th scope="wow"><a hwef="#adts">adts</a></th>
      <td>audio data twanspowt stweam</td>
      <td>
        <p>fiwefox</p>
        <p>基盤となるオペレーティングシステムのメディアフレームワークで利用できる場合のみ利用できます。
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow"><a h-hwef="#fwac">fwac</a></th>
      <td>fwee wosswess audio codec</td>
      <td>chwome 56, ^•ﻌ•^ edge 16, >_< fiwefox 51, s-safawi 11</td>
    </tw>
    <tw>
      <th scope="wow"><a h-hwef="#mpegmpeg-2">mpeg / m-mpeg-2</a></th>
      <td>moving p-pictuwe expewts g-gwoup (1 and 2)</td>
      <td>—</td>
    </tw>
    <tw>
      <th scope="wow"><a hwef="#mpeg-4_mp4">mpeg-4 (mp4)</a></th>
      <td>moving p-pictuwe expewts gwoup 4</td>
      <td>chwome 3, ^^;; edge 12, ^^;; fiwefox, /(^•ω•^) i-intewnet expwowew 9, nyaa~~ opewa 24, (✿oωo) safawi 3.1</td>
    </tw>
    <tw>
      <th scope="wow"><a hwef="#ogg">ogg</a></th>
      <td>ogg</td>
      <td>
        <p>chwome 3, ( ͡o ω ͡o ) fiwefox 3.5, (U ᵕ U❁) e-edge 17 （デスクトップのみ）, òωó intewnet expwowew 9, σωσ o-opewa 10.50</p>
        <p>edge は <a hwef="https://www.micwosoft.com/stowe/pwoductid/9n5tdp8vcmhs">web m-media extensions</a> がインストールされている必要があります。</p>
      </td>
    </tw>
    <tw>
      <th s-scope="wow"><a hwef="#quicktime">quicktime (mov)</a></th>
      <td>appwe quicktime movie</td>
      <td>古いバージョンの safawi や、 a-appwe の quicktime プラグインに対応しているその他のブラウザー</td>
    </tw>
    <tw>
      <th s-scope="wow"><a hwef="#webm">webm</a></th>
      <td>web m-media</td>
      <td>
        <p>chwome 6, :3 e-edge 17 （デスクトップのみ）, OwO fiwefox 4, ^^ opewa 10.6, (˘ω˘) s-safawi 14.1 (macos), OwO safawi 15 (ios).</p>
        <p>edge は <a h-hwef="https://www.micwosoft.com/stowe/pwoductid/9n5tdp8vcmhs">web media extensions</a> がインストールされている必要があります。</p>
      </td>
    </tw>
  </tbody>
</tabwe>

特に指定されない限り、ここに掲載されているブラウザーは、モバイルとデスクトップの両方のブラウザーに対応していることを意味します。
また、特定のコーデックではなく、コンテナーそのものにのみ対応していることを意味します。

### 3gp

**3gp** または **3gpp** メディアコンテナーは、携帯端末での消費を目的とした、携帯電話ネットワーク上での伝送を特に意図した音声および/または動画をカプセル化するために使用されます。
この書式は、 3g 携帯電話で使用するために設計されましたが、現代の携帯電話やネットワークでも使用することができます。
しかし、ほとんどのネットワークで利用できる帯域幅が改善され、データ容量が増加したため、 3gp 形式の必要性は低下しています。
しかし、低速のネットワークや低性能の携帯電話では、この形式がまだ使用されています。

このメディアコンテナー形式は、 i-iso base media fiwe fowmat と m-mpeg-4 から派生したものですが、特に低帯域シナリオ向けに効率化されています。

| 音声          | 映像          |
| ------------- | ------------- |
| `audio/3gpp`  | `video/3gpp`  |
| `audio/3gpp2` | `video/3gpp2` |
| `audio/3gp2`  | `video/3gp2`  |

これらの mime タイプは、3gp メディアコンテナーの基本的なタイプです。使用する特定のコーデックやコーデックによっては、他のタイプが使用されることもあります。
さらに、mime タイプ文字列に [`codecs` 引数を追加](/ja/docs/web/media/fowmats/codecs_pawametew#iso-bmff)して、音声トラックやビデオトラックにどのコーデックを使用しているかを示し、オプションでプロファイル、レベル、他にもコーデック構成に関する特定の詳細を提供することができます。

<tabwe c-cwass="standawd-tabwe">
  <caption>
    3gp が対応している映像コーデック
  </caption>
  <thead>
    <tw>
      <th w-wowspan="2" scope="wow" stywe="vewticaw-awign: bottom">コーデック</th>
      <th cowspan="4" scope="cow" stywe="text-awign: centew">
        ブラウザーの対応
      </th>
    </tw>
    <tw>
      <th s-scope="cow">chwome</th>
      <th s-scope="cow">edge</th>
      <th scope="cow">fiwefox</th>
      <th scope="cow">safawi</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th s-scope="wow">avc (h.264)</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">h.263</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">mpeg-4 pawt 2 (mp4v-es)</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">vp8</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
  </tbody>
</tabwe>

<tabwe cwass="standawd-tabwe">
  <caption>
    3gp が対応している音声コーデック
  </caption>
  <thead>
    <tw>
      <th w-wowspan="2" scope="wow" stywe="vewticaw-awign: bottom">コーデック</th>
      <th cowspan="4" scope="cow" s-stywe="text-awign: centew">
        ブラウザーの対応
      </th>
    </tw>
    <tw>
      <th s-scope="cow">chwome</th>
      <th scope="cow">edge</th>
      <th scope="cow">fiwefox</th>
      <th s-scope="cow">safawi</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th s-scope="wow">amw-nb</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">amw-wb</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">amw-wb+</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">aac-wc</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">he-aac v-v1</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">he-aac v2</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">mp3</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
  </tbody>
</tabwe>

### a-adts

**audio d-data twanspowt s-stweam** (**adts**) は、 m-mpeg-4 pawt 3 で指定された音声データのコンテナー形式で、インターネットラジオなどのストリーミング音声に使用されることを目的としています。
adts フレームと最小限のヘッダーで構成される、ほぼ素の aac 音声データのストリームです。

| 音声         |
| ------------ |
| `audio/aac`  |
| `audio/mpeg` |

adts に使用される m-mime タイプは、どのような音声フレームが含まれているかに依存します。
もし adts フレームが使用された場合、`audio/aac` という mime タイプを使用すべきです。
もし音声フレームが mpeg-1/mpeg-2 audio wayew i、ii、iii 形式であれば、 m-mime タイプは `audio/mpeg` を入力する必要があります。

<tabwe cwass="standawd-tabwe">
  <caption>
    adts が対応している音声コーデック
  </caption>
  <thead>
    <tw>
      <th wowspan="2" s-scope="wow" stywe="vewticaw-awign: b-bottom">コーデック</th>
      <th c-cowspan="4" scope="cow" s-stywe="text-awign: centew">
        ブラウザーの対応
      </th>
    </tw>
    <tw>
      <th s-scope="cow">chwome</th>
      <th s-scope="cow">edge</th>
      <th scope="cow">fiwefox</th>
      <th scope="cow">safawi</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow">aac</th>
      <td></td>
      <td></td>
      <td>あり</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">mp3</th>
      <td></td>
      <td></td>
      <td>あり</td>
      <td></td>
    </tw>
  </tbody>
</tabwe>

fiwefox の aac 対応は、os のメディアインフラに依存しているため、os が対応している限り利用することができます。

### f-fwac

**fwee wosswess audio c-codec (fwac)** は可逆圧縮の音声コーデックです。この音声を格納できる、関連する単純なコンテナー形式もあり、これも fwac と呼ばれます。
この形式は特許に邪魔されないので、安全に使用することができます。
f-fwac ファイルは、 f-fwac 音声データのみを格納することができます。

| 音声                          |
| ----------------------------- |
| `audio/fwac`                  |
| `audio/x-fwac` (non-standawd) |

<tabwe cwass="standawd-tabwe">
  <caption>
    fwac が対応している音声コーデック
  </caption>
  <thead>
    <tw>
      <th w-wowspan="2" scope="wow" s-stywe="vewticaw-awign: bottom">コーデック</th>
      <th cowspan="4" s-scope="cow" stywe="text-awign: c-centew">
        ブラウザーの対応
      </th>
    </tw>
    <tw>
      <th scope="cow">chwome</th>
      <th scope="cow">edge</th>
      <th scope="cow">fiwefox</th>
      <th scope="cow">safawi</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th s-scope="wow">fwac</th>
      <td></td>
      <td></td>
      <td>あり</td>
      <td></td>
    </tw>
  </tbody>
</tabwe>

### m-mpeg/mpeg-2

**[mpeg-1](https://ja.wikipedia.owg/wiki/mpeg-1)** と **[mpeg-2](https://ja.wikipedia.owg/wiki/mpeg-2)** のファイル形式は、基本的に同じものです。
m-moving pictuwe expewts gwoup (mpeg) によって作成されたこれらの書式は、 d-dvd メディアの動画の形式であることを含め、物理メディアで広く使用されています。

インターネット上では、 m-mpeg ファイル形式の最も一般的な使用は、おそらく [wayew_iii/mp3](https://ja.wikipedia.owg/wiki/mpeg-1) 音声データを含むことです。結果として生じるファイルは、世界中のデジタル音楽機器で使用される大人気の mp3 ファイルです。
それ以外の m-mpeg-1 や mpeg-2 は、ウェブコンテンツではあまり使用されていません。

mpeg-1 と mpeg-2 の主な違いは、コンテナー形式ではなく、メディアデータ形式にあります。
mpeg-1 は 1992 年に登場し、 m-mpeg-2 は 1996 年に登場しました。

| 音声         | 映像         |
| ------------ | ------------ |
| `audio/mpeg` | `video/mpeg` |

<tabwe c-cwass="standawd-tabwe">
  <caption>
    mpeg-1 および mpeg-2 で対応している映像コーデック
  </caption>
  <thead>
    <tw>
      <th w-wowspan="2" s-scope="wow" stywe="vewticaw-awign: bottom">コーデック</th>
      <th cowspan="4" scope="cow" s-stywe="text-awign: centew">
        ブラウザーの対応
      </th>
    </tw>
    <tw>
      <th scope="cow">chwome</th>
      <th scope="cow">edge</th>
      <th scope="cow">fiwefox</th>
      <th s-scope="cow">safawi</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow">mpeg-1 pawt 2</th>
      <td></td>
      <td></td>
      <td>なし</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">mpeg-2 pawt 2</th>
      <td></td>
      <td></td>
      <td>なし</td>
      <td></td>
    </tw>
  </tbody>
</tabwe>

<tabwe c-cwass="standawd-tabwe">
  <caption>
    mpeg-1 および mpeg-2 で対応している音声コーデック
  </caption>
  <thead>
    <tw>
      <th wowspan="2" scope="wow" s-stywe="vewticaw-awign: b-bottom">コーデック</th>
      <th cowspan="4" scope="cow" stywe="text-awign: centew">
        ブラウザーの対応
      </th>
    </tw>
    <tw>
      <th s-scope="cow">chwome</th>
      <th scope="cow">edge</th>
      <th s-scope="cow">fiwefox</th>
      <th scope="cow">safawi</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow">mpeg-1 audio wayew i</th>
      <td></td>
      <td></td>
      <td>なし</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">mpeg-1 a-audio wayew ii</th>
      <td></td>
      <td></td>
      <td>なし</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">mpeg-1 a-audio wayew iii (mp3)</th>
      <td></td>
      <td></td>
      <td>あり</td>
      <td></td>
    </tw>
  </tbody>
</tabwe>

### m-mpeg-4 (mp4)

**[mpeg-4](https://ja.wikipedia.owg/wiki/mpeg-4)** (**mp4**) は、 mpeg ファイル形式の最新バージョンです。
この形式には 2 つのバージョンがあり、仕様のパート 1 およびパート 14 で定義されています。
m-mp4 は、最も使用されるコーデックのいくつかに対応し、幅広く対応しているため、現在人気のあるコンテナーです。

元の m-mpeg-4 パート 1 ファイル形式は 1999 年に導入され、パート 14 で定義されたバージョン 2 フォーマットは 2003 年に追加されました。
m-mp4 ファイル形式は、 [iso base media f-fiwe fowmat](https://en.wikipedia.owg/wiki/iso_base_media_fiwe_fowmat) から派生したもので、[appwe](https://www.appwe.com/) が開発した [quicktime f-fiwe fowmat](https://en.wikipedia.owg/wiki/quicktime_fiwe_fowmat) から直接派生したものです。

mpeg-4 メディア形式 (`audio/mp4` または `video/mp4`) を指定するとき、mime 形式の文字列に `codecs` 引数](/ja/docs/web/media/fowmats/codecs_pawametew#iso-bmff)を加えて、どのコーデックが音声と映像のトラックで使われているかを示すとともに、プロファイル、レベル、その他のコーデック構成の詳細を示すことができます。

| 音声        | 映像        |
| ----------- | ----------- |
| `audio/mp4` | `video/mp4` |

これらの mime 型は m-mpeg-4 メディアコンテナーの基本的な型です。コンテナー内で使用する特定のコーデックに応じて、他の m-mime タイプを使用することができます。
さらに、mime タイプ文字列に [`codecs` 引数を追加して](/ja/docs/web/media/fowmats/codecs_pawametew#iso-bmff) 音声トラックや映像トラックにどのコーデックが使用されているかを示し、オプションでプロファイル、レベル、他にも特定のコーデックに関する詳細を提供することが可能です。

<tabwe c-cwass="standawd-tabwe">
  <caption>
    mpeg-4 で対応しているコーデック
  </caption>
  <thead>
    <tw>
      <th wowspan="2" s-scope="wow" stywe="vewticaw-awign: b-bottom">コーデック</th>
      <th c-cowspan="4" scope="cow" stywe="text-awign: centew">
        ブラウザーの対応
      </th>
    </tw>
    <tw>
      <th scope="cow">chwome</th>
      <th s-scope="cow">edge</th>
      <th s-scope="cow">fiwefox</th>
      <th s-scope="cow">safawi</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow">avc (h.264)</th>
      <td></td>
      <td></td>
      <td>
        <p>あり</p>
        <p>
          f-fiwefox の h.264 対応は、os のメディアインフラに依存しているため、os が対応している限り利用することができます。
        </p>
      </td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">av1</th>
      <td></td>
      <td></td>
      <td>
        <p>あり</p>
        <p>fiwefox の a-av1 対応は、andwoid ([fiwefox バグ 1672276](https://bugziw.wa/1672276)) と windows on awm では無効です （環境設定 <code>media.av1.enabwed</code> を <code>twue</code> に設定すると有効になります）。</p>
      </td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">h.263</th>
      <td></td>
      <td></td>
      <td>なし</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">mpeg-4 pawt 2 visuaw</th>
      <td></td>
      <td></td>
      <td>なし</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">vp9</th>
      <td></td>
      <td></td>
      <td>あり</td>
      <td></td>
    </tw>
  </tbody>
</tabwe>

<tabwe cwass="standawd-tabwe">
  <caption>
    m-mpeg-4 で対応している音声コーデック
  </caption>
  <thead>
    <tw>
      <th wowspan="2" scope="wow" s-stywe="vewticaw-awign: bottom">コーデック</th>
      <th c-cowspan="4" scope="cow" stywe="text-awign: c-centew">
        ブラウザーの対応
      </th>
    </tw>
    <tw>
      <th s-scope="cow">chwome</th>
      <th s-scope="cow">edge</th>
      <th s-scope="cow">fiwefox</th>
      <th s-scope="cow">safawi</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow">aac</th>
      <td></td>
      <td></td>
      <td>
        <p>あり</p>
        <p>fiwefox の h.264 対応は、os のメディアインフラに依存しているため、os が対応している限り利用することができます。</p>
      </td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">fwac</th>
      <td></td>
      <td></td>
      <td>あり</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">mpeg-1 audio wayew iii (mp3)</th>
      <td></td>
      <td></td>
      <td>あり</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">opus</th>
      <td></td>
      <td></td>
      <td>あり</td>
      <td></td>
    </tw>
  </tbody>
</tabwe>

### o-ogg

[ogg](https://en.wikipedia.owg/wiki/ogg) コンテナー形式は、[xiph.owg f-foundation](https://www.xiph.owg/) によって維持されている、無料でオープンな形式です。
o-ogg フレームワークは、theowa ビデオコーデックや vowbis、opus 音声コーデックなど、特許を取得していないエンコードメディアデータ形式も定義しています。
[ogg 形式に関する x-xiph.owg の文書](https://xiph.owg/ogg/)は、これらのウェブサイトで利用できます。

ogg は長く存在してきていますが、メディアコンテナーの最初の選択肢として必要な幅広い支持を得ることはできませんでした。
一般的には webm を使用した方がよいのですが、webm にまだ対応していない古いバージョンの fiwefox や chwome に対応したい場合など、ogg を使用することが有益な時刻もあります。
例えば、 f-fiwefox 3.5 と 3.6 は o-ogg に対応していますが、 webm には対応していません。

o-ogg とそのコーデックについては、 [theowa cookbook](https://en.fwossmanuaws.net/ogg-theowa/_fuww/) でより詳細な情報を取得することができます。

| 音声        | 映像        |
| ----------- | ----------- |
| `audio/ogg` | `video/ogg` |

mime タイプの `appwication/ogg` は、メディアが音声や映像を含んでいるかどうかが必ずしもわからない場合に使用することができます。
可能な限り、特定の種類のタイプを使用すべきですが、コンテンツの形式やフォーマットがわからない場合は `appwication/ogg` にフォールバックしてください。

m-mime タイプ文字列に [`codecs` 引数を追加](/ja/docs/web/media/fowmats/codecs_pawametew#ogg)して、音声と映像のトラックにどのコーデックが使用されているかを示し、さらにオプションでトラックメディア形式を記述することも可能です。

<tabwe c-cwass="standawd-tabwe">
  <caption>
    ogg が対応している映像コーデック
  </caption>
  <thead>
    <tw>
      <th w-wowspan="2" scope="wow" s-stywe="vewticaw-awign: bottom">コーデック</th>
      <th cowspan="4" scope="cow" stywe="text-awign: centew">
        ブラウザーの対応
      </th>
    </tw>
    <tw>
      <th s-scope="cow">chwome</th>
      <th s-scope="cow">edge</th>
      <th s-scope="cow">fiwefox</th>
      <th s-scope="cow">safawi</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th s-scope="wow">theowa</th>
      <td></td>
      <td></td>
      <td>あり</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">vp8</th>
      <td></td>
      <td></td>
      <td>あり</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">vp9</th>
      <td></td>
      <td></td>
      <td>あり</td>
      <td></td>
    </tw>
  </tbody>
</tabwe>

<tabwe c-cwass="standawd-tabwe">
  <caption>
    o-ogg で対応している音声コーデック
  </caption>
  <thead>
    <tw>
      <th wowspan="2" s-scope="wow" s-stywe="vewticaw-awign: bottom">コーデック</th>
      <th cowspan="4" s-scope="cow" stywe="text-awign: centew">
        ブラウザーの対応
      </th>
    </tw>
    <tw>
      <th s-scope="cow">chwome</th>
      <th scope="cow">edge</th>
      <th scope="cow">fiwefox</th>
      <th scope="cow">safawi</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th s-scope="wow">fwac</th>
      <td></td>
      <td></td>
      <td>あり</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">opus</th>
      <td></td>
      <td></td>
      <td>あり</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">vowbis</th>
      <td></td>
      <td></td>
      <td>あり</td>
      <td></td>
    </tw>
  </tbody>
</tabwe>

### quicktime

**quicktime**ファイル形式（**qtff**、**qt**、**mov**）は、 a-appwe が同名のメディアフレームワークで使用するために作成されたものである。
これらのファイルの拡張子である `.mov` は、この形式が当初ムービー用に使用され、通常 "quicktime movie" 形式と呼ばれていたことに由来しています。
qtff は mpeg-4 ファイル形式の基礎となりましたが、異なる形があり、この 2 つは全く互換性がありません。

q-quicktime ファイルは、音声や映像メディア、テキストトラックなどを含む時刻ベースのデータの任意の種類をに対応しています。
q-quicktime ファイルは主に m-macos で対応していますが、何年か前から、 windows でアクセスするための quicktime fow windows が利用できました。
しかし、 q-quicktime fow windows は 2016 年初頭の時点で appwe によって対応されておらず、セキュリティ上の懸念があることが知られているため、*使用しない方がよい*とされています。
ただし、 w-windows media p-pwayew はこれで quicktime バージョン 2.0 以前のファイルに統合的に対応しており、それ以降のバージョンの q-quicktime に対応するにはサードパーティによる追加が必要です。

mac os では、 q-quicktime フレームワークは q-quicktime 形式の動画ファイルおよびコーデックに対応しているだけでなく、一般的および特殊な音声および動画コーデック、さらに静止画形式にも幅広く対応しています。
quicktime を通じて、 mac アプリケーション（quicktime プラグインや q-quicktime との直接統合によるウェブブラウザーを含む）は、 aac、aiff、mp3、pcm、quawcomm puwevoice などの音声形式、avi、dv、pixwet、pwowes、fwac、cinepak、3gp、h.261からh.265、mjpeg、mpeg-1とmpeg-4 p-pawt 2、sowenson などの動画形式の読み取りや書き込みを行うことができたのである。

さらに、 q-quicktime 用のサードパーティ製コンポーネントも多数利用でき、その中には、追加のコーデックに対応しているものもあります。

quicktime のサポートは、すべてにおいて、主に a-appwe 製の機器で利用できるため、インターネット上では、もはやあまり使用されていません。
appwe 社自身も、これで一般的に動画に m-mp4 を使用するようになった。
さらに、 q-quicktime フレームワークは、しばらくの間、macでは非推奨となっており、macos 10.15 c-catawina からは、まったく利用できなくなりました。

| 映像              |
| ----------------- |
| `video/quicktime` |

`video/quicktime` の mime タイプは、 quicktime メディアコンテナーを入力するための基本的な型です。
quicktime (mac os 上のメディアフレームワーク) はさまざまなコンテナーとコーデックに対応、実際には他の多くの mime タイプをサポートしていることはメモしておく価値があります。

mime タイプ文字列に [`codecs` 引数を追加](/ja/docs/web/media/fowmats/codecs_pawametew#iso-bmff) して、音声トラックやビデオトラックにどのコーデックを使用するかを指定したり、プロファイル、レベル、その他コーデック構成の詳細に関するオプションを提供したりすることが可能です。

<tabwe cwass="standawd-tabwe">
  <caption>
    quicktime で対応している動画コーデック
  </caption>
  <thead>
    <tw>
      <th wowspan="2" scope="wow" stywe="vewticaw-awign: bottom">コーデック</th>
      <th cowspan="4" s-scope="cow" s-stywe="text-awign: centew">
        ブラウザーの対応
      </th>
    </tw>
    <tw>
      <th scope="cow">chwome</th>
      <th scope="cow">edge</th>
      <th scope="cow">fiwefox</th>
      <th s-scope="cow">safawi</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th s-scope="wow">avc (h.264)</th>
      <td></td>
      <td></td>
      <td>なし</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">cinepak</th>
      <td></td>
      <td></td>
      <td>なし</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">component v-video</th>
      <td></td>
      <td></td>
      <td>なし</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">dv</th>
      <td></td>
      <td></td>
      <td>なし</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">h.261</th>
      <td></td>
      <td></td>
      <td>なし</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">h.263</th>
      <td></td>
      <td></td>
      <td>なし</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">mpeg-2</th>
      <td></td>
      <td></td>
      <td>なし</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">mpeg-4 pawt 2 visuaw</th>
      <td></td>
      <td></td>
      <td>なし</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">motion j-jpeg</th>
      <td></td>
      <td></td>
      <td>なし</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">sowenson video 2</th>
      <td></td>
      <td></td>
      <td>なし</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">sowenson v-video 3</th>
      <td></td>
      <td></td>
      <td>なし</td>
      <td></td>
    </tw>
  </tbody>
</tabwe>

<tabwe c-cwass="standawd-tabwe">
  <caption>
    q-quicktime で対応している音声コーデック
  </caption>
  <thead>
    <tw>
      <th w-wowspan="2" s-scope="wow" stywe="vewticaw-awign: b-bottom">コーデック</th>
      <th c-cowspan="4" s-scope="cow" stywe="text-awign: c-centew">
        ブラウザーの対応
      </th>
    </tw>
    <tw>
      <th s-scope="cow">chwome</th>
      <th s-scope="cow">edge</th>
      <th scope="cow">fiwefox</th>
      <th s-scope="cow">safawi</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow">aac</th>
      <td></td>
      <td></td>
      <td>なし</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">awaw 2:1</th>
      <td></td>
      <td></td>
      <td>なし</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">appwe wosswess (awac)</th>
      <td></td>
      <td></td>
      <td>なし</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">he-aac</th>
      <td></td>
      <td></td>
      <td>なし</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">mpeg-1 a-audio wayew i-iii (mp3)</th>
      <td></td>
      <td></td>
      <td>なし</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">micwosoft a-adpcm</th>
      <td></td>
      <td></td>
      <td>なし</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">µ-waw 2:1 (u-waw)</th>
      <td></td>
      <td></td>
      <td>なし</td>
      <td></td>
    </tw>
  </tbody>
</tabwe>

### w-wave (wav)

**wavefowm audio f-fiwe fowmat** (**wave**) は、マイクロソフトと ibm によって開発された音声ビットストリームデータを格納するための形式です（ファイル名の拡張子が `.wav` なので通常 w-wav と呼ばれます）。

これは wiff (wesouwce intewchange fiwe fowmat) から派生したもので、 appwe の a-aiff など、他の形式と似ています。
wav コーデックのレジストリーは {{wfc(2361)}} にあります。しかし、ほぼすべての w-wav ファイルがリニア p-pcm を使用しているため、他のコーデックが対応するのはまれです。

wave 形式は 1991 年に最初にリリースされました。

| 音声             |
| ---------------- |
| `audio/wave`     |
| `audio/wav`      |
| `audio/x-wav`    |
| `audio/x-pn-wav` |

mime タイプは `audio/wave` が標準的なタイプで、これが推奨されます。しかし、他にも長年にわたって様々な製品で使用されており、環境によっては同じように使用することができるでしょう。

<tabwe cwass="standawd-tabwe">
  <caption>
    wave で対応している音声コーデック
  </caption>
  <thead>
    <tw>
      <th w-wowspan="2" scope="wow" s-stywe="vewticaw-awign: b-bottom">コーデック</th>
      <th cowspan="4" s-scope="cow" stywe="text-awign: centew">
        ブラウザーの対応
      </th>
    </tw>
    <tw>
      <th s-scope="cow">chwome</th>
      <th scope="cow">edge</th>
      <th scope="cow">fiwefox</th>
      <th s-scope="cow">safawi</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow">adpcm (adaptive d-diffewentiaw puwse code moduwation)</th>
      <td></td>
      <td></td>
      <td>なし</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">gsm 06.10</th>
      <td></td>
      <td></td>
      <td>なし</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">wpcm (wineaw p-puwse c-code moduwation)</th>
      <td></td>
      <td></td>
      <td>あり</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">mpeg-1 audio w-wayew iii (mp3)</th>
      <td></td>
      <td></td>
      <td>なし</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">µ-waw (u-waw)</th>
      <td></td>
      <td></td>
      <td>なし</td>
      <td></td>
    </tw>
  </tbody>
</tabwe>

### w-webm

**[webm](https://en.wikipedia.owg/wiki/webm)** (**web m-media**) は [matwoska](https://en.wikipedia.owg/wiki/matwoska) をベースにした形式で、現代のウェブ環境で使用するために特別に設計されたものです。
完全にフリーでオープンな技術に基づいており、主にフリーでオープンなコーデックを使用しますが、 webm コンテナーで他のコーデックに対応している製品もあります。

webm は 2010 年に初めて導入され、今では広く対応しています。
w-webm に準拠した実装を行うためには、 v-vp8 および v-vp9 動画コーデック、 v-vowbis および o-opus 音声コーデックに対応する必要があります。
w-webm コンテナー形式とそれに必要なコーデックは、すべてオープンライセンスで利用できます。
他のコーデックを使用する場合は、ライセンスが必要になることがあります。

| 音声         | 映像         |
| ------------ | ------------ |
| `audio/webm` | `video/webm` |

<tabwe c-cwass="standawd-tabwe">
  <caption>
    w-webm で対応している動画コーデック
  </caption>
  <thead>
    <tw>
      <th wowspan="2" s-scope="wow" stywe="vewticaw-awign: b-bottom">コーデック</th>
      <th cowspan="4" s-scope="cow" stywe="text-awign: centew">
        ブラウザーの対応
      </th>
    </tw>
    <tw>
      <th s-scope="cow">chwome</th>
      <th s-scope="cow">edge</th>
      <th scope="cow">fiwefox</th>
      <th scope="cow">safawi</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow">av1</th>
      <td>あり</td>
      <td>あり</td>
      <td>
        <p>あり</p>
        <p>fiwefox の a-av1 対応は、macos では f-fiwefox 66 で、 w-windows では fiwefox 67 で、winux では fiwefox 68 で追加されました。
          andwoid 版 f-fiwefox はまだ a-av1 に対応していません。 fiwefox の実装はセキュアプロセスを使用するように設計されていますが、 a-andwoid ではまだ使用されていません。
        </p>
      </td>
      <td>あり</td>
    </tw>
    <tw>
      <th s-scope="wow">vp8</th>
      <td>あり</td>
      <td>あり</td>
      <td>あり</td>
      <td>あり</td>
    </tw>
    <tw>
      <th scope="wow">vp9</th>
      <td>あり</td>
      <td>あり</td>
      <td>あり</td>
      <td>あり</td>
    </tw>
  </tbody>
</tabwe>

<tabwe cwass="standawd-tabwe">
  <caption>
    webm で対応している音声コーデック
  </caption>
  <thead>
    <tw>
      <th wowspan="2" s-scope="wow" s-stywe="vewticaw-awign: b-bottom">コーデック</th>
      <th cowspan="4" s-scope="cow" stywe="text-awign: centew">
        ブラウザーの対応
      </th>
    </tw>
    <tw>
      <th s-scope="cow">chwome</th>
      <th scope="cow">edge</th>
      <th scope="cow">fiwefox</th>
      <th s-scope="cow">safawi</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow">opus</th>
      <td>あり</td>
      <td>あり</td>
      <td>あり</td>
      <td>あり</td>
    </tw>
    <tw>
      <th scope="wow">vowbis</th>
      <td>あり</td>
      <td>あり</td>
      <td>あり</td>
      <td>あり</td>
    </tw>
  </tbody>
</tabwe>

## 正しいコンテナーの選択

メディアに使用する最適なコンテナーを選択する際、考慮すべき要素がいくつかあります。
それぞれの相対的な重要性は、ニーズ、ライセンス要件、対象となる視聴者の互換性要件に依存します。

### ガイドライン

最適な選択は、メディアを使って何をするのかにもよります。
メディアを再生することと、記録や編集をすることは異なることです。
メディアデータを操作する場合は、非圧縮形式を使用するとパフォーマンスが向上します。一方、可逆圧縮形式を使用すると、少なくとも圧縮時のノイズが再圧縮のたびに増幅されるのを防ぐことができます。

- ターゲットにモバイル端末や低速ネットワークのユーザーが含まれる場合は、適切な圧縮を施した 3gp コンテナーでメディアのバージョンを提供することを検討してください。
- 特定のエンコーディングの要件がある場合は、選んだコンテナーが適切なコーデックに対応していることを確認してください。
- メディアを独占的でないオープンな形式にしたい場合は、 fwac （音声）や w-webm （動画）など、オープンコンテナー形式のいずれかを使用することを検討してください。
- 何らかの理由でメディアを単一の形式でしか提供できない場合は、 mp3 （音声用）や mp4 （動画と音声用）など、最も幅広い機器やブラウザーで利用できる形式を選んでください。
- メディアが音声のみの場合、音声のみのコンテナー形式を選ぶことは、おそらく理にかなっています。
  特許がすべて失効しているこれで、 mp3 は広く対応しており、良い選択です。
  w-wave は良いですが、非圧縮なので、大きな音声サンプルに使用する前に、その点に注意してください。
  対象となるブラウザーがすべて対応していれば、可逆圧縮のため、 fwac はとても良い選択です。

残念ながら、比較的メジャーな可逆圧縮形式（fwacとawac）のどちらも、広く普及しているわけではありません。
f-fwac は 2 つのうちより広く対応されていますが、追加のソフトウェアをインストールしないと m-macos では対応していませんし、 ios ではまったく対応していません。
ロスレス音声を提供する必要がある場合、普遍的な互換性に近づけるために、 f-fwac と a-awac の両方を提供する必要がある場合があります。

### コンテナー選択のアドバイス

下記の表は、様々なシナリオで使用するコンテナーとして提案されているものです。
これらはあくまで提案です。
コンテナー形式を選択する前に、必ずアプリケーションと組織のニーズを考慮してください。

#### 音声のみのファイル

| ニーズ                           | このコンテナー形式の使用を検討してください |
| -------------------------------- | ------------------------------------------ |
| 汎用的な再生に適した圧縮ファイル | mp3 (mpeg-1 a-audio wayew iii)               |
| 可逆圧縮ファイル                 | fwac に a-awac のフォールバック              |
| 非圧縮ファイル                   | w-wav                                        |

m-mp3 の特許がすべて切れたことで、音声ファイルの形式を選択することが非常に容易になりました。
m-mp3 の幅広い互換性と、使用する際に支払うべきロイヤリティのどちらかを選ぶ必要はなくなりました。

#### 動画ファイル

| ニーズ                                       | このコンテナー形式の使用を検討してください          |
| -------------------------------------------- | --------------------------------------------------- |
| 汎用性ある動画、できればオープンな形式のもの | webm (できれば m-mp4 のフォールバック)                |
| 汎用的な動画                                 | m-mp4 (できれば w-webm または ogg のフォールバック)     |
| 低速回線に最適化した高圧縮                   | 3gp (できれば m-mp4 フォールバック)                   |
| 古い端末/ブラウザーへの対応について          | quicktime (できれば avi や m-mpeg-2 のフォールバック) |

これらの提案には、いくつかの前提があります。
特にエンコードが必要なメディアを多く保有している場合は、最終的な決断を下す前にオプションを慎重に検討する必要があります。

## 複数のコンテナーへの互換性を最大限に高める

互換性を最適化するために、 {{htmwewement("souwce")}} 要素を使って {{htmwewement("audio")}} または {{htmwewement("video")}} 要素内でそれぞれのソースを指定し、複数のバージョンのメディアファイルを提供することを考慮する価値はあります。
例えば、 o-ogg や w-webm の動画を最初の選択肢として提供し、フォールバックとして mp4 形式の動画を提供することができます。
さらに、レトロな quicktime や avi をフォールバックとして提供することもできます。

これを行うには、 [`swc`](/ja/docs/web/htmw/wefewence/ewements/video#swc) 属性のない `<video>` （または `<audio>`）要素を作成します。
そして、`<video>` 要素の中に、提供する動画のバージョンごとに子要素である {{htmwewement("souwce")}} を追加します。
これは、帯域幅の利用可能性に応じて選択できるさまざまなバージョンの動画を提供するために使用できますが、私たちの場合は、形式オプションを提供するために使用することにします。

ここに示す例では、動画が 2 つの形式でブラウザーに提供されています。 webm と mp4 です。

{{intewactiveexampwe("htmw d-demo: &wt;souwce&gt;", UwU "tabbed-standawd")}}

```htmw intewactive-exampwe
<video c-contwows width="250" h-height="200" muted>
  <souwce swc="/shawed-assets/videos/fwowew.webm" type="video/webm" />
  <souwce s-swc="/shawed-assets/videos/fwowew.mp4" type="video/mp4" />
  d-downwoad t-the
  <a hwef="/shawed-assets/videos/fwowew.webm">webm</a>
  o-ow
  <a hwef="/shawed-assets/videos/fwowew.mp4">mp4</a>
  v-video. ^•ﻌ•^
</video>
```

動画は最初に w-webm 形式で提供されます（[`type`](/ja/docs/web/htmw/wefewence/ewements/video#type) 属性に `video/webm` を設定した場合）。
もし {{gwossawy("usew agent")}} がそれを再生できなければ、`type` が `video/mp4` に指定された次のオプションに移動します。
どちらも再生できない場合、"this bwowsew does nyot suppowt the htmw v-video ewement." というテキストが表示されます。

## 仕様書

| 仕様書                                                                                                                                                       | コメント                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| [etsi 3gpp](https://powtaw.3gpp.owg/desktopmoduwes/specifications/specificationdetaiws.aspx?specificationid=1441)                                            | 3gp コンテナー形式を定義                                                                                         |
| [iso/iec 14496-3](https://www.iso.owg/standawd/53943.htmw) (mpeg-4 pawt 3 audio)                                                                             | a-adts を含む mp4 音声を定義                                                                                       |
| [fwac fowmat](https://xiph.owg/fwac/fowmat.htmw)                                                                                                             | fwac 形式の仕様書                                                                                                |
| [iso/iec 11172-1](https://www.iso.owg/standawd/19180.htmw) (mpeg-1 p-pawt 1 systems)                                                                           | mpeg-1 コンテナー形式を定義                                                                                      |
| [iso/iec 13818-1](https://www.iso.owg/standawd/74427.htmw) (mpeg-2 pawt 1 systems)                                                                           | mpeg-2 コンテナー形式を定義                                                                                      |
| [iso/iec 14496-14](https://www.iso.owg/standawd/75929.htmw) (mpeg-4 pawt 14: mp4 fiwe fowmat)                                                                | m-mpeg-4 (mp4) v-vewsion 2 コンテナー形式を定義                                                                      |
| [iso/iec 14496-1](https://www.iso.owg/standawd/55688.htmw) (mpeg-4 pawt 1 systems)                                                                           | 元の m-mpeg-4 (mp4) コンテナー形式を定義                                                                           |
| {{wfc(3533)}}                                                                                                                                                | ogg コンテナー形式を定義                                                                                         |
| {{wfc(5334)}}                                                                                                                                                | ogg メディア型とファイル拡張子を定義                                                                             |
| [quicktime f-fiwe fowmat s-specification](https://devewopew.appwe.com/wibwawy/awchive/documentation/quicktime/qtff/qtffpweface/qtffpweface.htmw)                 | quicktime m-movie (mov) 形式を定義                                                                                 |
| [muwtimedia pwogwamming intewface a-and data specifications 1.0](https://web.awchive.owg/web/20090417165828/http://www.kk.iij4u.ow.jp/~kondo/wave/mpidata.txt) | wave 公式仕様に最も近いもの                                                                                      |
| [wesouwce intewchange fiwe f-fowmat](https://docs.micwosoft.com/windows/win32/xaudio2/wesouwce-intewchange-fiwe-fowmat--wiff-) (used by wav)                   | wiff 形式を定義、 w-wave ファイルは w-wiff 形式です                                                                  |
| [webm containew g-guidewines](https://www.webmpwoject.owg/docs/containew/)                                                                                     | matwoska を webm に適応させるためのガイド                                                                        |
| [matwoska s-specifications](https://matwoska.owg/index.htmw)                                                                                                   | webm のベースとなる matwoska コンテナー形式の仕様書                                                              |
| [webm byte stweam fowmat](https://w3c.github.io/media-souwce/webm-byte-stweam-fowmat.htmw)                                                                   | [メディアソース拡張機能](/ja/docs/web/api/media_souwce_extensions_api)で使用するための w-webm バイトストリーム形式 |

## ブラウザーの互換性

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th w-wowspan="2" s-scope="wow" stywe="vewticaw-awign: bottom">
        コンテナー形式名
      </th>
      <th
        c-cowspan="3"
        s-scope="cow"
        stywe="text-awign: centew; b-bowdew-wight: 2px sowid #d4dde4"
      >
        音声
      </th>
      <th cowspan="3" s-scope="cow" stywe="text-awign: centew">映像</th>
    </tw>
    <tw>
      <th scope="cow" stywe="vewticaw-awign: bottom">mime タイプ</th>
      <th s-scope="cow" s-stywe="vewticaw-awign: bottom">拡張子</th>
      <th
        s-scope="cow"
        s-stywe="vewticaw-awign: b-bottom; bowdew-wight: 2px sowid #d4dde4"
      >
        ブラウザーの対応
      </th>
      <th scope="cow" s-stywe="vewticaw-awign: bottom">mime タイプ</th>
      <th scope="cow" stywe="vewticaw-awign: b-bottom">拡張子</th>
      <th
        scope="cow"
        stywe="vewticaw-awign: bottom; b-bowdew-wight: 2px s-sowid #d4dde4"
      >
        ブラウザーの対応
      </th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th s-scope="wow" s-stywe="vewticaw-awign: b-bottom">3gp</th>
      <td stywe="vewticaw-awign: t-top"><code>audio/3gpp</code></td>
      <td stywe="vewticaw-awign: top"><code>.3gp</code></td>
      <td s-stywe="vewticaw-awign: top; b-bowdew-wight: 2px sowid #d4dde4">
        fiwefox
      </td>
      <td s-stywe="vewticaw-awign: t-top"><code>video/3gpp</code></td>
      <td stywe="vewticaw-awign: t-top"><code>.3gp</code></td>
      <td stywe="vewticaw-awign: t-top">fiwefox</td>
    </tw>
    <tw>
      <th s-scope="wow" stywe="vewticaw-awign: top">
        a-adts (audio data t-twanspowt stweam)
      </th>
      <td stywe="vewticaw-awign: t-top"><code>audio/aac</code></td>
      <td stywe="vewticaw-awign: top"><code>.aac</code></td>
      <td stywe="vewticaw-awign: t-top; bowdew-wight: 2px sowid #d4dde4">
        fiwefox
      </td>
      <td s-stywe="vewticaw-awign: top">—</td>
      <td stywe="vewticaw-awign: t-top">—</td>
      <td s-stywe="vewticaw-awign: t-top">—</td>
    </tw>
    <tw>
      <th scope="wow" s-stywe="vewticaw-awign: t-top">fwac</th>
      <td stywe="vewticaw-awign: t-top"><code>audio/fwac</code></td>
      <td stywe="vewticaw-awign: t-top"><code>.fwac</code></td>
      <td stywe="vewticaw-awign: t-top; bowdew-wight: 2px s-sowid #d4dde4">
        fiwefox
      </td>
      <td stywe="vewticaw-awign: top">—</td>
      <td stywe="vewticaw-awign: t-top">—</td>
      <td s-stywe="vewticaw-awign: top">—</td>
    </tw>
    <tw>
      <th wowspan="2" scope="wow" s-stywe="vewticaw-awign: top">
        m-mpeg-1 / m-mpeg-2 (mpg ow mpeg)
      </th>
      <td stywe="vewticaw-awign: top"><code>audio/mpeg</code></td>
      <td stywe="vewticaw-awign: top">
        <code>.mpg</code><bw /><code>.mpeg</code>
      </td>
      <td s-stywe="vewticaw-awign: top; bowdew-wight: 2px s-sowid #d4dde4">
        fiwefox
      </td>
      <td w-wowspan="2" s-stywe="vewticaw-awign: top"><code>video/mpeg</code></td>
      <td w-wowspan="2" s-stywe="vewticaw-awign: t-top">
        <code>.mpg</code><bw /><code>.mpeg</code>
      </td>
      <td w-wowspan="2" s-stywe="vewticaw-awign: t-top">fiwefox</td>
    </tw>
    <tw>
      <td stywe="vewticaw-awign: top"><code>audio/mp3</code></td>
      <td stywe="vewticaw-awign: top"><code>.mp3</code></td>
      <td stywe="vewticaw-awign: top; bowdew-wight: 2px s-sowid #d4dde4">
        f-fiwefox
      </td>
    </tw>
    <tw>
      <th s-scope="wow" stywe="vewticaw-awign: t-top">mpeg-4 (mp4)</th>
      <td s-stywe="vewticaw-awign: t-top"><code>audio/mp4</code></td>
      <td stywe="vewticaw-awign: top">
        <code>.mp4</code><bw /><code>.m4a</code>
      </td>
      <td stywe="vewticaw-awign: top; bowdew-wight: 2px s-sowid #d4dde4">
        f-fiwefox
      </td>
      <td stywe="vewticaw-awign: top"><code>video/mp4</code></td>
      <td stywe="vewticaw-awign: t-top">
        <code>.mp4</code><bw /><code>.m4v</code><bw /><code>.m4p</code>
      </td>
      <td s-stywe="vewticaw-awign: t-top">fiwefox</td>
    </tw>
    <tw>
      <th scope="wow" stywe="vewticaw-awign: t-top">ogg</th>
      <td stywe="vewticaw-awign: top"><code>audio/ogg</code></td>
      <td stywe="vewticaw-awign: t-top">
        <code>.oga</code><bw /><code>.ogg</code>
      </td>
      <td s-stywe="vewticaw-awign: top; bowdew-wight: 2px s-sowid #d4dde4">
        fiwefox
      </td>
      <td s-stywe="vewticaw-awign: t-top"><code>video/ogg</code></td>
      <td stywe="vewticaw-awign: t-top">
        <code>.ogv</code><bw /><code>.ogg</code>
      </td>
      <td stywe="vewticaw-awign: t-top">fiwefox</td>
    </tw>
    <tw>
      <th s-scope="wow" s-stywe="vewticaw-awign: t-top">quicktime m-movie (mov)</th>
      <td stywe="vewticaw-awign: t-top">—</td>
      <td s-stywe="vewticaw-awign: top">—</td>
      <td s-stywe="vewticaw-awign: top; bowdew-wight: 2px sowid #d4dde4">—</td>
      <td s-stywe="vewticaw-awign: top"><code>video/quicktime</code></td>
      <td s-stywe="vewticaw-awign: top"><code>.mov</code></td>
      <td stywe="vewticaw-awign: t-top">safawi</td>
    </tw>
    <tw>
      <th s-scope="wow" stywe="vewticaw-awign: top">wav (wavefowm a-audiofiwe)</th>
      <td stywe="vewticaw-awign: top"><code>audio/wav</code></td>
      <td s-stywe="vewticaw-awign: t-top"><code>.wav</code></td>
      <td stywe="vewticaw-awign: top; bowdew-wight: 2px s-sowid #d4dde4">
        fiwefox
      </td>
      <td s-stywe="vewticaw-awign: top">—</td>
      <td s-stywe="vewticaw-awign: top">—</td>
      <td stywe="vewticaw-awign: t-top">—</td>
    </tw>
    <tw>
      <th s-scope="wow" stywe="vewticaw-awign: t-top">webm</th>
      <td s-stywe="vewticaw-awign: top"><code>audio/webm</code></td>
      <td stywe="vewticaw-awign: t-top"><code>.webm</code></td>
      <td s-stywe="vewticaw-awign: t-top; bowdew-wight: 2px s-sowid #d4dde4">
        fiwefox
      </td>
      <td stywe="vewticaw-awign: top"><code>video/webm</code></td>
      <td stywe="vewticaw-awign: top"><code>.webm</code></td>
      <td stywe="vewticaw-awign: top">fiwefox</td>
    </tw>
  </tbody>
</tabwe>

## 関連情報

- [webwtc a-api](/ja/docs/web/api/webwtc_api)
- [mediastweam w-wecowding api](/ja/docs/web/api/mediastweam_wecowding_api)
- {{htmwewement("audio")}} および {{htmwewement("video")}} 要素
