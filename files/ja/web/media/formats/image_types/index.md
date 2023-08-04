---
title: 画像ファイルの種類と形式ガイド
slug: Web/Media/Formats/Image_types
---

{{QuickLinksWithSubpages("/ja/docs/Web/Media")}}

このガイドでは、ウェブブラウザーが一般的に対応している画像ファイルの種類を取り上げ、サイトの画像に使用するための最も適切な形式を選択するのに役立つ観点を提供します。

## 一般的な画像ファイルの種類

ウェブ上で最も一般的に使用されている画像ファイル形式は以下の通りです。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">略称</th>
      <th scope="row">ファイル形式</th>
      <th scope="col">MIME タイプ</th>
      <th scope="col">ファイル拡張子</th>
      <th scope="col">概要</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        <a href="#APNG_Animated_Portable_Network_Graphics">APNG</a>
      </th>
      <th scope="row">Animated Portable Network Graphics</th>
      <td><code>image/apng</code></td>
      <td><code>.apng</code></td>
      <td>
        劣化のない一連のアニメーションに最適です（GIF は性能が低い）。 AVIF や WebP はより性能が高いものですが、ブラウザーの対応が狭いのが現状です。<br />
        <strong>対応:</strong> Chrome, Edge, Firefox, Opera, Safari
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#avif_画像">AVIF</a></th>
      <th scope="row">AV1 Image File Format</th>
      <td><code>image/avif</code></td>
      <td><code>.avif</code></td>
      <td>
        <p>
          高性能でロイヤリティフリーの画像形式であるため、画像とアニメーションの両方に適しています。 PNG や JPEG よりもはるかに優れた圧縮を提供し、より高い色深度、アニメーションフレーム、透明度などに対応しています。 AVIF を使用する場合は、よりブラウザーの対応状況が良い形式への代替を含める（つまり、 <code><a href="/ja/docs/Web/HTML/Element/picture">&#x3C;picture></a></code> 要素を使用する）べきであることに注意してください。<br>
          <strong>対応:</strong> Chrome, Opera, Firefox（静止画のみ。アニメーション画像は実装。）
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#GIF_Graphics_Interchange_Format">GIF</a></th>
      <th scope="row">Graphics Interchange Format</th>
      <td><code>image/gif</code></td>
      <td><code>.gif</code></td>
      <td>
        単純な画像やアニメーションに適しています。 PNG の方が劣化なし<em>かつ</em>インデックスカラーの静止画に適しており、アニメーションシーケンスには WebP, AVIF, APNG を検討してください。<br>
        <strong>対応:</strong> Chrome, Edge, Firefox, IE, Opera, Safari</td>
    </tr>
    <tr>
      <th scope="row">
        <a href="#JPEG_Joint_Photographic_Expert画像up_image">JPEG</a>
      </th>
      <th scope="row">Joint Photographic Expert Group image</th>
      <td><code>image/jpeg</code></td>
      <td>
        <code>.jpg</code>, <code>.jpeg</code>, <code>.jfif</code>, <code>.pjpeg</code>, <code>.pjp</code>
      </td>
      <td>
        <p>
          静止画の非可逆圧縮に適しています（現在最も普及しています）。 PNG の方がより正確な画像の再現が必要な場合に適しており、 WebP/AVIF の方がより良い再現性と高い圧縮率の両方が必要な場合に適しています。<br>
          <strong>対応:</strong> Chrome, Edge, Firefox, IE, Opera, Safari
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#PNG_Portable_Network_Graphics">PNG</a></th>
      <th scope="row">Portable Network Graphics</th>
      <td><code>image/png</code></td>
      <td><code>.png</code></td>
      <td>
        <p>
          PNG は元画像をより正確に再現したい場合や、透明度が必要な場合には JPEG より好まれます。 WebP/AVIF はさらに優れた圧縮と再現性を提供しますが、ブラウザーの対応はより限定されています。<br>
          <strong>対応:</strong> Chrome, Edge, Firefox, IE, Opera, Safari
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#SVG_Scalable_Vector_Graphics">SVG</a></th>
      <th scope="row">Scalable Vector Graphics</th>
      <td><code>image/svg+xml</code></td>
      <td><code>.svg</code></td>
      <td>
        ベクター画像形式です。異なる大きさで正確に描画する必要があるユーザーインターフェース要素、アイコン、図などに最適です。<br>
        <strong>対応:</strong> Chrome, Edge, Firefox, IE, Opera, Safari
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#webp_画像">WebP</a></th>
      <th scope="row">Web Picture format</th>
      <td><code>image/webp</code></td>
      <td><code>.webp</code></td>
      <td>
        画像とアニメーションの両方に最適です。 WebP は PNG や JPEG よりもはるかに優れた圧縮を提供し、より高い色深度、アニメーションフレーム、透明度などに対応しています。 AVIF のほうが圧縮機能はわずかに優れていますが、ブラウザーがあまり対応しておらず、プログレッシブレンダリングにも対応していません。<br>
      <strong>対応:</strong> Chrome, Edge, Firefox, Opera, Safari</td>
    </tr>
  </tbody>
</table>

> **メモ:** PNG、JPEG、GIF のような古い形式は、WebP や AVIF のような新しい形式と比較して性能が劣りますが、より広範囲の「歴史的な」ブラウザーが対応しています。新しい画像形式は、対応していないブラウザーが無視できるようになってきている（つまり、市場シェアがゼロに近づいてきている）ため、人気が高まってきています。

以下のリストにはウェブ上で見られる画像形式を挙げていますが、ウェブコンテンツでは避けた方が良いものがあります （一般的には、ブラウザーの対応が広くないか、より良い代替手段があるためです）。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">略称</th>
      <th scope="row">ファイル形式</th>
      <th scope="col">MIME タイプ</th>
      <th scope="col">ファイル拡張子</th>
      <th scope="col">説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><a href="#bmp_ビットマップファイル">BMP</a></th>
      <th scope="row">ビットマップファイル</th>
      <td><code>image/bmp</code></td>
      <td><code>.bmp</code></td>
      <td>Chrome, Edge, Firefox, IE, Opera, Safari</td>
    </tr>
    <tr>
      <th scope="row"><a href="#ICO_Microsoft_Windows_icon">ICO</a></th>
      <th scope="row">Microsoft Icon</th>
      <td><code>image/x-icon</code></td>
      <td><code>.ico</code>, <code>.cur</code></td>
      <td>Chrome, Edge, Firefox, IE, Opera, Safari</td>
    </tr>
    <tr>
      <th scope="row"><a href="#TIFF_Tagged_Image_File_Format">TIFF</a></th>
      <th scope="row">Tagged Image File Format</th>
      <td><code>image/tiff</code></td>
      <td><code>.tif</code>, <code>.tiff</code></td>
      <td>Safari</td>
    </tr>
  </tbody>
</table>

**注:** 各画像形式の略語は、形式、その機能、ブラウザーの互換性に関する詳細な情報 (どのバージョンで対応が導入されたか、後に導入された可能性のある特定の特殊機能を含む) についてのより詳しい説明へとリンクしています。

> **メモ:** Safari 11.1では、アニメーション GIF の代替として、動画形式を使用する機能が追加されました。
> 他のブラウザは対応していません。
> 詳しくは、 [Chromium のバグ](https://bugs.chromium.org/p/chromium/issues/detail?id=791658)、[Firefox のバグ](https://bugzilla.mozilla.org/show_bug.cgi?id=895131)を参照してください。

## 画像ファイルの種類の詳細

以下の節では、ウェブブラウザーで対応している画像ファイルの種類について簡単に説明します。

以下の表において、**成分あたりのビット数**とは、各色成分を表現するために使用されるビット数を意味します。
例えば、 RGB の色深度が 8 であれば、赤、緑、青の各成分は 8 ビットの値で表現されることになります。
一方、**ビット深度**とは、メモリー上で各画素を表現するために使用されるビット数の合計です。

### APNG (Animated Portable Network Graphics)

APNG は Mozilla によって最初に導入されたファイル形式で、 [PNG](#png_portable_network_graphics) 規格を拡張してアニメーション画像の対応を追加したものです。概念的には何十年も使われているアニメーション GIF 形式に似ていますが、アニメーション GIF が 8 ビットの[色深度](https://ja.wikipedia.org/wiki/色深度)しか対応していないのに対し、 APNG の方が様々な[インデックスカラー](https://ja.wikipedia.org/wiki/インデックスカラー)に対応しているという点で優れています。

APNG は、進捗インジケーターやアクティビティ[スロバー](https://en.wikipedia.org/wiki/throbber)など、他のアクティビティやサウンドトラックに同期する必要のない基本的なアニメーションに最適です。例えば、 APNG は Apple の iMessage アプリ (および iOS のメッセージアプリ) の[アニメーションステッカーを作成する際に対応している形式の 1 つ](https://developer.apple.com/imessage/)です。また、ウェブブラウザーのユーザーインターフェイスのアニメーション部分にもよく使用されています。

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME タイプ</th>
      <td><code>image/apng</code></td>
    </tr>
    <tr>
      <th scope="row">ファイル拡張子</th>
      <td><code>.apng</code></td>
    </tr>
    <tr>
      <th scope="row">仕様書</th>
      <td>
        <a href="https://wiki.mozilla.org/APNG_Specification">wiki.mozilla.org/APNG_Specification</a>
      </td>
    </tr>
    <tr>
      <th scope="row">ブラウザーの互換性</th>
      <td>Chrome 59, Edge 12, Firefox 3, Opera 46, Safari 8</td>
    </tr>
    <tr>
      <th scope="row">最大の大きさ</th>
      <td>2,147,483,647×2,147,483,647 画素</td>
    </tr>
    <tr>
      <th scope="row">対応している色モデル</th>
      <td>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="row">色モード</th>
              <th scope="col">成分あたりのビット数 (<em>D</em>)</th>
              <th scope="col">説明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">グレイスケール</th>
              <td>1, 2, 4, 8, 16</td>
              <td>
                各画素は、グレースケール画素の明るさを示す単一の <em>D</em> ビット値で構成されています。
              </td>
            </tr>
            <tr>
              <th scope="row">トゥルーカラー</th>
              <td>8, 16</td>
              <td>
                各画素は、赤、緑、青の色成分のレベルを示す3つの <em>D</em> ビット値で表現されます。
              </td>
            </tr>
            <tr>
              <th scope="row">インデックスカラー</th>
              <td>1, 2, 4, 8</td>
              <td>
                各画素は、 APNG ファイルの <code><a href="https://www.w3.org/TR/PNG/#11PLTE">PLTE</a></code> チャンク内に含まれるカラーパレットへのインデックスを示す <em>D</em> ビット値で、パレット内の色はすべて 8 ビットの深度を使用します。
              </td>
            </tr>
          <tr>
            <th scope="row">アルファ付きグレイスケール</th>
            <td>8, 16</td>
            <td>
              各画素は、 2 つの <em>D</em> ビット値、グレイスケール画素の明るさとアルファサンプル、すなわち画素がどれだけ不透明かで表現されます。
            </td>
          </tr>
          <tr>
            <th scope="row">アルファ付きトゥルーカラー</th>
            <td>8, 16</td>
            <td>
              各画素は、 4 つの   <em>D</em> 画素の色成分、赤、緑、青、および画素の不透明度を示すアルファサンプルで構成されます。
            </td>
          </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">圧縮</th>
      <td>可逆</td>
    </tr>
    <tr>
      <th scope="row">ライセンス</th>
      <td>
        <a href="https://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-ShareAlike license</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>) version 3.0 以降の下にフリーかつオープンです。
      </td>
    </tr>
  </tbody>
</table>

### AVIF 画像

AVIF (AV1 Image File Format) は、 *AV1ビットストリームを HEIF (High Efficiency Image File Format) コンテナー*にエンコードした、強力でオープンソース、ロイヤリティフリーのファイル形式です。

> **メモ:** AVIF は、ウェブコンテンツで画像を共有するための「次の大きな流れ」となる可能性を秘めています。
> AVIF は、複雑なライセンスや特許使用料に煩わされることなく、最先端の機能と性能を提供し、他の類似製品を抑えています。

AV1 は、もともとインターネットでの映像伝送用に設計された符号化方式です。
この形式は、近年の動画エンコーディングの著しい進歩の恩恵を受けており、関連するハードウェアレンダリングの対応の恩恵を受ける可能性があります。
しかし、動画と画像のエンコーディングには異なる要件があるため、場合によっては不利になることもあります。

この形式は、次のものを提供します。

- 視覚的に同程度の圧縮レベルであれば、 JPG や PNG と比べて優れた非可逆圧縮が可能です（例: 非可逆 AVIF 画像は JPEG 画像より約 50% 小さい）。
- 一般的に、 AVIF は WebP よりも圧縮率が高く、同じ JPG セットで中央値 50% 対 30% の圧縮率です（出典: AVIF WebP 比較）。 [AVIF WebP 比較](https://www.ctrl.blog/entry/webp-avif-comparison.html) (CTRL Blog)).
- 可逆圧縮圧縮。
- アニメーション/複数画像の格納（アニメーション GIF に似ていますが、圧縮率がはるかに優れています）。
- アルファチャンネル（つまり、透明度）の対応。
- _ハイダイナミックレンジ_ (HDR): 画像の最も明るい部分と最も暗い部分の間のより大きなコントラストを表現できる画像の保存に対応しています。
- 広い色域: 画像がより広い範囲の色を含むことに対応しています。

AVIF はプログレッシブレンダリングに対応していないので、ファイルを表示する前に完全にダウンロードする必要があります。
AVIF ファイルは同等の JPEG や PNG ファイルよりもはるかに小さいため、ダウンロードと表示が迅速に行われ、実際のユーザー操作への影響が極めて小さくなります。
ファイルサイズが大きい場合は影響が大きくなるため、プログレッシブレンダリングを対応している形式の使用を検討する必要があります。

AVIF は、デスクトップでは Chrome、Opera、Firefox で対応しています（Firefox は静止画に対応していますが、アニメーションには対応していません）。
対応はまだ包括的ではなく（歴史もあまりありません）、[WebP](#webp_画像), [JPEG](#jpeg_joint_photographic_experts_group_画像), [PNG](#png_portable_network_graphics) 形式などで、 [`<picture>` 要素](/ja/docs/Web/HTML/Element/picture) （またはその他の方法） を使用して代替形式を提供する必要があります。

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME タイプ</th>
      <td><code>image/avif</code></td>
    </tr>
    <tr>
      <th scope="row">ファイルの拡張子</th>
      <td><code>.avif</code></td>
    </tr>
    <tr>
      <th scope="row">仕様書</th>
      <td>
        <p>
          <a href="https://aomediacodec.github.io/av1-avif/"
            >AV1 Image File Format (AVIF)</a
          >
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">ブラウザーの互換性</th>
      <td>
        Chrome 85, Opera 71, Firefox 93
        <ul>
          <li>
            Firefox 93 は静止画に対応しており、フルカラーとリミテッドレンジカラーの両方の色空間、ミラーリングと回転のための画像変換に対応しています。
            <a href="/ja/docs/Mozilla/Firefox/Experimental_features#avif_compliance_strictness">image.avif.compliance_strictness</a> の設定を使用して、仕様への準拠の厳密さを調整することができます。
            アニメーション画像には対応していません。
          </li>
          <li>
            Firefox 77 ～ 92 は <code>image.avif.enable</code> の設定を <code>true</code> にする必要があります。それ以前の版は基本的な対応のみです。
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">最大の画像の大きさ</th>
      <td>2,147,483,647×2,147,483,647 画素</td>
    </tr>
    <tr>
      <th scope="row">対応しているカラーモード</th>
      <td>
        <p>
          カラーモードの対応情報は <a href="https://aomediacodec.github.io/av1-spec/av1-spec.pdf">AV1 Bitstream &#x26; Decoding Process Specification</a> の 6.4.2 : Color config semantics にあります。
        </p>
        <p>主なものとしては、以下のものがあります。</p>
        <ul>
          <li>カラーモード: YUV444, YUV422, YUV420</li>
          <li>グレースケール対応: YUV400</li>
          <li>ビット数: 8/10/12 ビット</li>
          <li>アルファに対応</li>
          <li>ICC プロファイルに対応</li>
          <li>
            NCLX 対応: sRGB, linear sRGB, linear Rec2020, PQ Rec2020, HLG Rec2020, PQ P3, HLG P3, など
          </li>
          <li>タイリングに対応</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">圧縮</th>
      <td>可逆および非可逆</td>
    </tr>
    <tr>
      <th scope="row">ライセンス</th>
      <td>
        ロイヤリティフリーです。ライセンス情報は http://aomedia.org/license/ にあります。
      </td>
    </tr>
  </tbody>
</table>

### BMP (ビットマップファイル)

**BMP** (**Bitmap 画像**) ファイル形式は、 Windows コンピューターで最も普及しており、ウェブアプリやコンテンツではふつう、特殊な場合にのみ使用されます。

> **警告:** ウェブサイトのコンテンツに BMP ファイルを使用することは、一般的に避けてください。
> 一般的な BMP ファイルは、データを非圧縮のラスター画像として表現するため、 png や jpg の画像形式と比較してファイルサイズが大きくなります。
> より効率的な BMP 形式もありますが、あまり普及しておらず、ウェブブラウザーが対応していることもほとんどありません。

BMP は理論的には様々な内部データ表現に対応しています。
最も単純でよく使われる形式の BMP ファイルは、非圧縮のラスター画像で、各画素が 3 バイトでその赤、緑、青の成分を表し、各行は 4 バイトの倍数の幅になるよう `0x00` バイトでパディングされています。

その他のデータ表現も仕様で定義されていますが、広く使われているわけではなく、完全に未実装であることが多いものです。
これらの機能には、異なるビット深度、インデックス付きカラー、アルファチャンネル、異なる画素オーダー（既定では、 BMP は左上隅から右と下に向かってではなく、左下隅から右と上に向かって書き込まれます）の対応が含まれます。

理論的には複数の圧縮アルゴリズムに対応しており、 BMP ファイル内に [JPEG](#jpeg_joint_photographic_experts_group_image) や [PNG](#png_portable_network_graphics) という形式で画像データを格納することも可能です。

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME タイプ</th>
      <td><code>image/bmp</code></td>
    </tr>
    <tr>
      <th scope="row">ファイルの拡張子</th>
      <td><code>.bmp</code></td>
    </tr>
    <tr>
      <th scope="row">仕様書</th>
      <td>
        仕様書はありません。ただし、 Microsoft は <a href="https://docs.microsoft.com/windows/desktop/gdi/bitmap-storage">docs.microsoft.com/ja/windows/desktop/gdi/bitmap-storage</a> で形式についての一般的なドキュメントを提供しています。
      </td>
    </tr>
    <tr>
      <th scope="row">ブラウザーの互換性</th>
      <td>
        Chrome, Edge, Firefox, Internet Explorer, Opera, Safari のすべての版
      </td>
    </tr>
    <tr>
      <th scope="row">最大の画像の大きさ</th>
      <td>
        形式のバージョンによって 32,767×32,767 または 2,147,483,647×2,147,483,647 画素のどちらかです。
      </td>
    </tr>
    <tr>
      <th scope="row">カラーモードの対応</th>
      <td>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="row">カラーモード</th>
              <th scope="col">コンポーネント当たりのビット数 (<em>D</em>)</th>
              <th scope="col">説明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">グレースケール</th>
              <td>1</td>
              <td>
                それぞれのビットが単一の画素を表し、黒か白かのどちらかになります。
              </td>
            </tr>
            <tr>
              <th scope="row">トゥルーカラー</th>
              <td>8, 16</td>
              <td>
                それぞれの画素は、赤、緑、青の色成分を表す 3 つの値で表現されます。それぞれが <em>D</em> ビットです。
              </td>
            </tr>
            <tr>
              <th scope="row">インデックスカラー</th>
              <td>2, 4, 8</td>
              <td>
                それぞれの画素は、 2, 4, 8 ビットのうちの何れかの値で、カラーテーブル内のインデックスとして表現されます。
              </td>
            </tr>
            <tr>
              <th scope="row">アルファ付きグレースケール</th>
              <td><em>なし</em></td>
              <td>BMP には明確なグレースケールの形式がありません。</td>
            </tr>
            <tr>
              <th scope="row">アルファ付きトゥルーカラー</th>
              <td>8, 16</td>
              <td>
                それぞれの画素は、赤、緑、青、アルファの各色成分で表現されます。それぞれが <em>D</em> ビットです。
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">圧縮</th>
      <td>
        非可逆圧縮や可逆圧縮など、複数の圧縮方式に対応しています。
      </td>
    </tr>
    <tr>
      <th scope="row">ライセンス</th>
      <td>
        <a href="https://docs.microsoft.com/openspecs/dev_center/ms-devcentlp/1c24c7c8-28b0-4ce1-a47d-95fe1ff504bc">Microsoft Open Specification Promise</a> で扱っています。
        マイクロソフトは BMP に対して特許を保有していますが、特定の条件を満たす限り、特許権を主張しないという約束を発表しています。
        ただし、これはライセンスとは異なります。 BMP は、 Windows Metafile Format (<code>.wmf</code>) に含まれます。
      </td>
    </tr>
  </tbody>
</table>

### GIF (Graphics Interchange Format)

1987 年、オンラインサービスプロバイダーである CompuServe は、サービスの全会員が使用できる圧縮グラフィック形式を提供するため、 **[GIF](https://ja.wikipedia.org/wiki/GIF)** (**Graphics Interchange Format**) 画像ファイル形式を導入しました。
GIF は [Lempel-Ziv-Welch](https://ja.wikipedia.org/wiki/Lempel–Ziv–Welch) (LZW) アルゴリズムを使用して、 8 ビットのインデックスカラーグラフィックを可逆圧縮します。
GIF は [XBM](#xbm_x_window_system_bitmap_file) とともに、 {{Glossary("HTML")}} で対応された最初の 2 つのグラフィック形式のうちのひとつでした。

GIF の各画素は 8 ビットの値で表され、 24 ビット（赤、緑、青それぞれ 8 ビット）のカラーパレットへのインデックスとなります。カラーテーブルの長さは常に 2 のべき乗です（つまり、パレットは 2、4、8、16、32、64、256 の項目があります）。
255 または 256 色以上を示すには、ふつう[ディザリング](https://ja.wikipedia.org/wiki/ディザリング)が使用されます。
カラーパレットを持つ複数の画像ブロックをタイル状に並べてトゥルーカラー画像を作成することは[技術的には可能](https://gif.ski/)ですが、実際にはほとんど行われません。

画素は不透明です。ただし、特定のカラーインデックスが透明と指定されている場合は、その値で着色された画素は完全に透明になります。

GIF は簡単なアニメーションに対応しています。最初の完全なフレームに続いて、フレームごとに変化する部分を反映した一連の画像を提供します。

GIF は、そのシンプルさと互換性から、何十年にもわたって非常に人気がありました。
アニメーションに対応したことで、ソーシャルメディア時代に人気が再燃し、短い「動画」やミームなどの簡単なアニメーションにアニメーション GIF が広く使われるようになりました。

GIF のもう一つの人気のある機能は[インターレース](https://ja.wikipedia.org/wiki/インターレース)の対応で、画素列を順番通りに保存しないため、部分的に受信したファイルを低画質で表示することができるものです。
これは、ネットワーク接続が遅い場合に特に有効です。

GIF は単純な画像やアニメーションに適していますが、フルカラー画像を GIF に変換すると満足のいくディザリングが得られないことがあります。
通常、新しいコンテンツは可逆圧縮やインデックスカラーの静止画には [PNG](#png_portable_network_graphics)を、可逆圧縮のアニメーションには [APNG](#apng_animated_portable_network_graphics) を使用することを検討してください。

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME タイプ</th>
      <td><code>image/gif</code></td>
    </tr>
    <tr>
      <th scope="row">ファイルの拡張子</th>
      <td><code>.gif</code></td>
    </tr>
    <tr>
      <th scope="row">仕様書</th>
      <td>
        <a href="https://www.w3.org/Graphics/GIF/spec-gif87.txt">GIF87a specification</a><br /><a href="https://www.w3.org/Graphics/GIF/spec-gif89a.txt">GIF89a specification</a>
      </td>
    </tr>
    <tr>
      <th scope="row">ブラウザーの互換性</th>
      <td>
        Chrome, Edge, Firefox, Internet Explorer, Opera, Safari のすべてのバージョン
      </td>
    </tr>
    <tr>
      <th scope="row">最大の画像の大きさ</th>
      <td>65,536×65,536 画素</td>
    </tr>
    <tr>
      <th scope="row">カラーモードの対応</th>
      <td>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="row">カラーモード</th>
              <th scope="col">コンポーネント当たりのビット数 (<em>D</em>)</th>
              <th scope="col">説明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">グレースケール</th>
              <td><em>なし</em></td>
              <td>GIF には専用のグレースケール形式がありません。</td>
            </tr>
            <tr>
              <th scope="row">トゥルーカラー</th>
              <td><em>なし</em></td>
              <td>GIF はトゥルーカラーに対応していません。</td>
            </tr>
            <tr>
              <th scope="row">インデックスカラー</th>
              <td>8</td>
              <td>
                GIF パレット内のそれぞれの色は、赤、緑、青がそれぞれ 8 ビットで定義されています（全体で画素当たり 24 ビットです）。
              </td>
            </tr>
            <tr>
              <th scope="row">アルファ付きグレースケール</th>
              <td><em>なし</em></td>
              <td>GIF には専用のグレースケール形式がありません。</td>
            </tr>
            <tr>
              <th scope="row">アルファ付きトゥルーカラー</th>
              <td><em>なし</em></td>
              <td>GIF はトゥルーカラーに対応していません。</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">圧縮</th>
      <td>可逆圧縮 (LZW)</td>
    </tr>
    <tr>
      <th scope="row">ライセンス</th>
      <td>
        GIF 形式自体はオープンですが、 LZW 圧縮アルゴリズムは 2000 年代初頭まで特許で保護されていました。
        2004 年 7 月 7 日現在、関連する特許はすべて失効しており、 GIF 形式は自由に使用することができます。
      </td>
    </tr>
  </tbody>
</table>

### ICO (Microsoft Windows icon)

ICO (Microsoft Windows icon) ファイル形式は、 Windows システムのデスクトップアイコン用に Microsoft が設計しました。
しかし、 Internet Explorer の初期バージョンでは、ウェブサイトのルートディレクトリーに `favicon.ico` という ICO ファイルを用意して、**[ファビコン](/ja/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#adding_custom_icons_to_your_site)** - お気に入りメニューやサイトのアイコン表現が役立つその他の場所に表示するアイコンを指定することができます。

ICO ファイルには、複数のアイコンを含むことができ、それぞれの詳細が記載されたディレクトリーから始まります。
ディレクトリーの後に、アイコンのデータが続きます。
各アイコンのデータは、ファイルヘッダーを含まない [BMP](#bmp_ビットマップファイル) 画像か、ファイルヘッダーを含む完全な [PNG](#png_portable_network_graphics) 画像のどちらかを使用することができます。
ICO ファイル内で PNG を使用する方法は Windows Vista までは対応しておらず、対応が十分でない可能性があるため、 ICO ファイルを使用する場合は、 BMP 形式を使用することをお勧めします。

> **警告:** ICO ファイルは、ウェブコンテンツに使用すべきではありません。
> また、ファビコンでの利用は [異なる利用場面のアイコンの提供](/ja/docs/Web/HTML/Element/link#%E7%95%B0%E3%81%AA%E3%82%8B%E5%88%A9%E7%94%A8%E5%A0%B4%E9%9D%A2%E3%81%AE%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3%E3%81%AE%E6%8F%90%E4%BE%9B) で述べたように、 PNG ファイルと {{HTMLElement("link")}} 要素を使用することで抑制されています。

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME タイプ</th>
      <td>
        <code>image/vnd.microsoft.icon</code> (公式),
        <code>image/x-icon</code> (Microsoft が使用)
      </td>
    </tr>
    <tr>
      <th scope="row">ファイルの拡張子</th>
      <td><code>.ico</code></td>
    </tr>
    <tr>
      <th scope="row">仕様書</th>
      <td></td>
    </tr>
    <tr>
      <th scope="row">ブラウザーの互換性</th>
      <td>
        Chrome, Edge, Firefox, Internet Explorer, Opera, Safari のすべてのバージョン
      </td>
    </tr>
    <tr>
      <th scope="row">最大の画像の大きさ</th>
      <td>256×256 画素</td>
    </tr>
    <tr>
      <th scope="row">カラーモードの対応</th>
      <td>
        <table class="standard-table">
          <caption>
            BMP 形式のアイコン
          </caption>
          <tbody>
            <tr>
              <th scope="row">カラーモード</th>
              <th scope="col">コンポーネント当たりのビット数 (<em>D</em>)</th>
              <th scope="col">説明</th>
            </tr>
            <tr>
              <th scope="row">グレースケール</th>
              <td>1</td>
              <td>
                各ビットは 1 画素を表し、黒か白のどちらかになります。
              </td>
            </tr>
            <tr>
              <th scope="row">トゥルーカラー</th>
              <td>8, 16</td>
              <td>
                各画素は、赤、緑、青の色成分を表す 3 つの値で表され、それぞれ <em>D</em> ビットです。
              </td>
            </tr>
            <tr>
              <th scope="row">インデックスカラー</th>
              <td>2, 4, 8</td>
              <td>
                各画素は 2、4、8 ビットの値で表され、カラーテーブルのインデックスとなる。
              </td>
            </tr>
            <tr>
              <th scope="row">アルファ付きグレースケール</th>
              <td><em>なし</em></td>
              <td>BMP には明確なグレースケールの形式がありません。</td>
            </tr>
            <tr>
              <th scope="row">アルファ付きトゥルーカラー</th>
              <td>8, 16</td>
              <td>
                各画素は、赤、緑、青、アルファの色成分を表す 4 つの値で表され、それぞれ <em>D</em> ビットである。
              </td>
            </tr>
          </tbody>
        </table>
        <table class="standard-table">
          <caption>
            PNG 形式のアイコン
          </caption>
          <tbody>
            <tr>
              <th scope="row">カラーモード</th>
              <th scope="col">コンポーネント当たりのビット数 (<em>D</em>)</th>
              <th scope="col">説明</th>
            </tr>
            <tr>
              <th scope="row">グレースケール</th>
              <td>1, 2, 4, 8, and 16</td>
              <td>
                各画素は、グレースケールの画素の明るさを示す 1 つの <em>D</em> ビット値で構成されます。
              </td>
            </tr>
            <tr>
              <th scope="row">トゥルーカラー</th>
              <td>8, 16</td>
              <td>
                各画素は、赤、緑、青の色成分のレベルを示す 3 つの <em>D</em> ビット値で表現されます。
              </td>
            </tr>
            <tr>
              <th scope="row">インデックスカラー</th>
              <td>1, 2, 4, 8</td>
              <td>
                各画素は <em>D</em> ビットの値で、 APNG ファイルの <code><a href="https://www.w3.org/TR/PNG/#11PLTE">PLTE</a></code> チャンク内のカラーパレットの中にあるインデックスを示します。パレット内のカラーはすべて 8 ビットの深度を使用します。
              </td>
            </tr>
            <tr>
              <th scope="row">アルファ付きグレースケール</th>
              <td>8, 16</td>
              <td>
                各画素は 2 つの <em>D</em> ビット値で表します。グレースケール画素の明るさと、その画素がどの程度不透明であるかを示すアルファサンプルです。
              </td>
            </tr>
            <tr>
              <th scope="row">アルファ付きトゥルーカラー</th>
              <td>8, 16</td>
              <td>
                各画素は、赤、緑、青の 4 つの <em>D</em> 画素の色成分と、画素の不透明度を示すアルファサンプルで構成されています。
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">圧縮</th>
      <td>
        BMP 形式のアイコンは、ほぼ常に可逆圧縮が使用されますが、非可逆圧縮の方法も利用できます。
        PNG 形式のアイコンは常に可逆圧縮されます。
      </td>
    </tr>
    <tr>
      <th scope="row">ライセンス</th>
      <td>—</td>
    </tr>
  </tbody>
</table>

### JPEG (Joint Photographic Experts Group image)

{{Glossary("JPEG")}} （ふつう "**ジェイペグ**" と発音します）画像形式は、現在もっとも広く使用されている静止画向けの非可逆圧縮形式です。
特に写真に有効です。図や表など鮮明さが必要なコンテンツに非可逆圧縮を適用すると、満足の行く結果が得られないことがあります。

JPEG はファイル形式というより、写真を圧縮するためのデータ形式です。
JFIF (**J**PEG **F**ile **I**nterchange **F**ormat) 仕様書が、私たちが "JPEG" 画像と考えているファイル形式を記述しています。

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME タイプ</th>
      <td><code>image/jpeg</code></td>
    </tr>
    <tr>
      <th scope="row">ファイルの拡張子</th>
      <td>
        <code>.jpg</code>, <code>.jpeg</code>, <code>.jpe</code>,
        <code>.jif</code>, <code>.jfif</code>
      </td>
    </tr>
    <tr>
      <th scope="row">仕様書</th>
      <td><a href="https://jpeg.org/jpeg/">jpeg.org/jpeg/</a></td>
    </tr>
    <tr>
      <th scope="row">ブラウザーの互換性</th>
      <td>
        Chrome, Edge, Firefox, Internet Explorer, Opera, Safari のすべてのバージョン
      </td>
    </tr>
    <tr>
      <th scope="row">最大の画像の大きさ</th>
      <td>65,535×65,535 画素</td>
    </tr>
    <tr>
      <th scope="row">カラーモードの対応</th>
      <td>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="row">カラーモード</th>
              <th scope="col">コンポーネント当たりのビット数 (<em>D</em>)</th>
              <th scope="col">説明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">グレースケール</th>
              <td><em>なし</em></td>
              <td>ルーマ 1 チャンネル (Y) で真のグレイスケールに対応可能です。</td>
            </tr>
            <tr>
              <th scope="row">トゥルーカラー</th>
              <td>8</td>
              <td>
                各画素は、赤、青、緑の色成分で記述され、それぞれ 8 ビットです。
              </td>
            </tr>
            <tr>
              <th scope="row">インデックスカラー</th>
              <td><em>なし</em></td>
              <td>JPEG はインデックスカラーモードを提供していません。</td>
            </tr>
            <tr>
              <th scope="row">アルファ付きグレースケール</th>
              <td><em>なし</em></td>
              <td>JPEG はアルファチャネルに対応していません。</td>
            </tr>
            <tr>
              <th scope="row">アルファ付きトゥルーカラー</th>
              <td><em>なし</em></td>
              <td>JPEG はアルファチャネルに対応していません。</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">圧縮</th>
      <td>
        非可逆圧縮です。[離散コサイン変換](https://ja.wikipedia.org/wiki/離散コサイン変換)に基づいています。
      </td>
    </tr>
    <tr>
      <th scope="row">ライセンス</th>
      <td>2006 年 10 月 27 日現在、米国における特許はすべて失効しています。</td>
    </tr>
  </tbody>
</table>

### PNG (Portable Network Graphics)

{{Glossary("PNG")}} （"**ピング**"と読みます）画像形式は、 より効率的な圧縮を行うために可逆圧縮または非可逆圧縮を使用し、[GIF](#gif_graphics_interchange_format)より高い色深度を対応し、アルファ透過も完全に対応します。

PNG は広く対応されており、すべての主要なブラウザーがその機能を完全に対応しています。
Internet Explorer はバージョン 4〜5 で PNG 対応を導入しましたが、 IE9 まで完全には対応せず、長年にわたって、かつて存在した Internet Explorer 6 を含め、数多くの悪名高いバグがありました。
そのため PNG の普及は遅れましたが、現在では特に元画像の正確な再現が必要な場合によく使われるようになっています。

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME タイプ</th>
      <td><code>image/png</code></td>
    </tr>
    <tr>
      <th scope="row">ファイルの拡張子</th>
      <td><code>.png</code></td>
    </tr>
    <tr>
      <th scope="row">仕様書</th>
      <td><a href="https://www.w3.org/TR/PNG">w3.org/TR/PNG</a></td>
    </tr>
    <tr>
      <th scope="row">ブラウザーの互換性</th>
      <td>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="row">機能</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Internet Explorer</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">基本対応</th>
              <td>1</td>
              <td>12</td>
              <td>1</td>
              <td>5</td>
              <td>3.5.1 (Presto)<br />15 (Blink)</td>
              <td>1</td>
            </tr>
            <tr>
              <th scope="row">アルファチャネル</th>
              <td>1</td>
              <td>12</td>
              <td>1</td>
              <td>5</td>
              <td>6 (Presto)<br />All (Blink)</td>
              <td>1</td>
            </tr>
            <tr>
              <th scope="row">ガンマコレクション</th>
              <td>no</td>
              <td>yes</td>
              <td>1</td>
              <td>8</td>
              <td>1</td>
              <td>broken</td>
            </tr>
            <tr>
              <th scope="row">カラーコレクション</th>
              <td>no</td>
              <td>yes</td>
              <td>3</td>
              <td>9</td>
              <td>no</td>
              <td>no</td>
            </tr>
            <tr>
              <th scope="row">インターレス</th>
              <td>no</td>
              <td>?</td>
              <td>1</td>
              <td>broken</td>
              <td>3.5.1</td>
              <td>no</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">最大の画像の大きさ</th>
      <td>2,147,483,647×2,147,483,647 画素</td>
    </tr>
    <tr>
      <th scope="row">カラーモードの対応</th>
      <td>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="row">カラーモード</th>
              <th scope="col">コンポーネント当たりのビット数 (<em>D</em>)</th>
              <th scope="col">説明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">グレースケール</th>
              <td>1, 2, 4, 8, 16</td>
              <td>
                各画素は、グレースケールの画素の明るさを示す 1 つの <em>D</em> ビット値で構成されます。
              </td>
            </tr>
            <tr>
              <th scope="row">トゥルーカラー</th>
              <td>8, 16</td>
              <td>
                各画素は、赤、緑、青の色成分のレベルを示す 3 つの <em>D</em> ビット値で表現されます。
              </td>
            </tr>
            <tr>
              <th scope="row">インデックスカラー</th>
              <td>1, 2, 4, 8</td>
              <td>
                各画素は <em>D</em> ビットの値で、 APNG ファイルの <code><a href="https://www.w3.org/TR/PNG/#11PLTE">PLTE</a></code> チャンク内のカラーパレットの中にあるインデックスを示します。パレット内のカラーはすべて 8 ビットの深度を使用します。
              </td>
            </tr>
            <tr>
              <th scope="row">アルファ付きグレースケール</th>
              <td>8, 16</td>
              <td>
                各画素は 2 つの <em>D</em> ビット値で表します。グレースケール画素の明るさと、その画素がどの程度不透明であるかを示すアルファサンプルです。
              </td>
            </tr>
            <tr>
              <th scope="row">アルファ付きトゥルーカラー</th>
              <td>8, 16</td>
              <td>
                各画素は、赤、緑、青の 4 つの <em>D</em> 画素の色成分と、画素の不透明度を示すアルファサンプルで構成されています。
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">圧縮</th>
      <td>可逆圧縮で、任意で GIF のようなインデックスカラーがあります。</td>
    </tr>
    <tr>
      <th scope="row">ライセンス</th>
      <td>
        ©2003 <a href="https://www.w3.org/">W3C</a> (<a href="http://www.lcs.mit.edu/">MIT</a>, <a href="http://www.ercim.org/">ERCIM</a>,
        <a href="https://www.keio.ac.jp/">Keio</a>), All Rights Reserved. W3C
        <a href="https://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer">liability</a>,
        <a href="https://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks">trademark</a>, <a href="https://www.w3.org/Consortium/Legal/copyright-documents">document use</a>
        and
        <a href="https://www.w3.org/Consortium/Legal/copyright-software">software licensing</a> rules apply. No known royalty-bearing patents.
      </td>
    </tr>
  </tbody>
</table>

### SVG (Scalable Vector Graphics)

SVG は [XML](/ja/docs/Glossary/XML) ベースの[ベクターグラフィック](https://ja.wikipedia.org/wiki/ベクターグラフィック)形式で、画像の内容を、図形や線の作成、色やフィルターの適用などの描画コマンド群として指定するものです。
SVG ファイルは、図やアイコンなど、任意の大きさで正確に描画できる画像に適しています。
そのため、最近のウェブデザインでは、ユーザーインターフェイスの素材としてよく使われています。

SVG ファイルはテキストファイルで、解釈されると希望する画像が描画されるソースコードを含んでいます。
例えば、この例では、初期サイズ 100 × 100 の描画領域を定義し、その中に斜めに引いた線が含まれています。

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <line x1="0" y1="80" x2="100" y2="20" stroke="black" />
</svg>
```

SVG はウェブコンテンツで 2 通りの使い方ができます。

1. {{SVGElement("svg")}} 要素を HTML に直接書き、その中に [SVG 要素](/ja/docs/Web/SVG/Element)を入れて画像を描く。
2. 他のいずれかの画像種別で使用することができるあらゆる場所で表示する。 {{HTMLElement("img")}} や {{HTMLElement("picture")}} 要素、 CSS の {{cssxref("background-image")}} プロパティなどです。

SVG は、一連の描画コマンドで表現できる画像に最適です。特に、画像が描画されるサイズが不明であったり、変動する可能性がある場合、 SVG は希望するサイズに滑らかに拡大縮小するので、最適な選択と言えます。
ビットマップ画像や写真画像には適していませんが、 SVG の中にビットマップ画像を含めることは可能です。

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME タイプ</th>
      <td><code>image/svg+xml</code></td>
    </tr>
    <tr>
      <th scope="row">ファイルの拡張子</th>
      <td><code>.svg</code></td>
    </tr>
    <tr>
      <th scope="row">仕様書</th>
      <td><a href="https://www.w3.org/TR/SVG2">w3.org/TR/SVG2</a></td>
    </tr>
    <tr>
      <th scope="row">ブラウザーの互換性</th>
      <td>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="row">機能</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Internet Explorer</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">SVG 対応</th>
              <td>4</td>
              <td>12</td>
              <td>3</td>
              <td>9</td>
              <td>10 (Presto)<br />15 (Blink)</td>
              <td>3.2</td>
            </tr>
            <tr>
              <th scope="row">
                SVG を画像として使用 ({{HTMLElement("img")}} など)
              </th>
              <td>28</td>
              <td>12</td>
              <td>4</td>
              <td>9</td>
              <td>10 (Presto)<br />15 (Blink)</td>
              <td>9</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">最大の画像の大きさ</th>
      <td>無制限</td>
    </tr>
    <tr>
      <th scope="row">カラーモードの対応</th>
      <td>
        SVG 内の色は、 <a href="/ja/docs/Web/CSS/color_value">CSS 色構文</a>を使用して指定されます。
      </td>
    </tr>
    <tr>
      <th scope="row">圧縮</th>
      <td>
        SVG ソースは転送中に <a href="/ja/docs/Web/HTTP/Compression">HTTP 圧縮</a>技術を使用したり、ディスク上で <code>.svgz</code> ファイルを使用したりすることで圧縮できます。
      </td>
    </tr>
    <tr>
      <th scope="row">ライセンス</th>
      <td>
        ©2018 <a href="https://www.w3.org/">W3C</a> (<a
          href="http://www.lcs.mit.edu/"
          >MIT</a
        >, <a href="http://www.ercim.org/">ERCIM</a>,
        <a href="https://www.keio.ac.jp/">Keio</a>,
        <a href="https://ev.buaa.edu.cn/">Beihang</a>), All Rights Reserved. W3C
        <a href="https://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer">liability</a>,
        <a href="https://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks">trademark</a>,
        <a href="https://www.w3.org/Consortium/Legal/copyright-documents">document use</a>
        and
        <a href="https://www.w3.org/Consortium/Legal/copyright-software">software licensing</a>
        rules apply. No known royalty-bearing patents.
      </td>
    </tr>
  </tbody>
</table>

### TIFF (Tagged Image File Format)

[TIFF](https://ja.wikipedia.org/wiki/Tagged_Image_File_Format) はスキャンした写真を格納するために作成されたラスターファイル形式ですが、あらゆる種類の画像に使用することができます。
これらはある意味で「重い」形式であり、 TIFF のファイルは他の画像形式よりも大きくなる傾向があります。
これは、多くの場合メタデータが含まれていることと、ほとんどの TIFF 画像が非圧縮か、圧縮後のファイルがかなり大きくなってしまう圧縮アルゴリズムを使用しているためです。

TIFF は様々な圧縮方式に対応していますが、最も一般的に使用されているのは、 FAX ソフトウェアで使用されている CCITT グループ 4 （古い FAX システムではグループ 3）の圧縮方式と、 LZW および非可逆 JPEG の圧縮方式です。

TIFF ファイルのそれぞれの値は、**タグ**（画像の幅など情報の種類を示す）と**型**（データの格納形式を示す）で指定し、そのタグに割り当てる値の配列の長さを続けます（単一の値でも、すべてのプロパティは配列で格納されます）。
これにより、同じプロパティに異なるデータ型を使用することができます。
たとえば、画像の幅である `ImageWidth` は、タグ `0x0100` を用いて格納され、 1 項目の配列となります。
タイプ 3 (`SHORT`) を指定すると、 `ImageWidth` の値は 16 ビットで格納されます。

| タグ                    | 型                 | サイズ                | 値                  |
| ----------------------- | ------------------ | --------------------- | ------------------- |
| `0x0100` (`ImageWidth`) | `0x0003` (`SHORT`) | `0x00000001` (1 項目) | `0x0280` (640 画素) |

タイプ 4 (`LONG`) では、幅を 32 ビット値で格納します。

| タグ                    | 型                | サイズ                | 値                      |
| ----------------------- | ----------------- | --------------------- | ----------------------- |
| `0x0100` (`ImageWidth`) | `0x0004` (`LONG`) | `0x00000001` (1 項目) | `0x00000280` (640 画素) |

1 つの TIFF ファイルに複数の画像を含めることができます。これは、例えば複数ページの文書（複数ページのスキャン文書や受信した FAX など）を表現するために使用される場合があります。
ただし、 TIFF ファイルを読み込むソフトウェアは、最初の画像にのみ対応する必要があります。

TIFF は、 RGB だけでなく、さまざまな色空間に対応しています。
CMYK や YCbCr などがあり、印刷物や映画、テレビなどのメディア向けの画像を保存するのに適しています。

一昔前までは、ウェブコンテンツの中で TIFF 画像に対応しているブラウザーもありましたが、現在では特別なライブラリーやブラウザーのアドオンを使用する必要があります。
しかし、精密な編集や印刷を目的とした写真やアートワークを配布する場合、ダウンロード可能な TIFF ファイルを提供することが一般的です。

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME タイプ</th>
      <td><code>image/tiff</code></td>
    </tr>
    <tr>
      <th scope="row">ファイルの拡張子</th>
      <td><code>.tif</code>, <code>.tiff</code></td>
    </tr>
    <tr>
      <th scope="row">仕様書</th>
      <td>
        <a href="https://www.adobe.io/open/standards/TIFF.html"
          >adobe.io/open/standards/TIFF.html</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">ブラウザーの互換性</th>
      <td>
        TIFF の対応はどのブラウザーにも組み込まれておらず、ダウンロード形式としての価値しかありません。
      </td>
    </tr>
    <tr>
      <th scope="row">最大の画像の大きさ</th>
      <td>4,294,967,295×4,294,967,295 画素 (理論値)</td>
    </tr>
    <tr>
      <th scope="row">カラーモードの対応</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">カラーモード</th>
              <th scope="col">コンポーネント当たりのビット数 (<em>D</em>)</th>
              <th scope="col">説明</th>
            </tr>
            <tr>
              <th scope="row">バイレベル</th>
              <td>1</td>
              <td>
                バイレベル TIFF はそれぞれのバイトが 8 ビットとなり、 1 画素あたり 1 ビットです。
                <code>PhotometricInterpretation</code> フィールドで 0 と 1 のどちらが黒で、どちらが白かを指定します。
              </td>
            </tr>
            <tr>
              <th scope="row">グレースケール</th>
              <td>4 および 8</td>
              <td>
                各画素は、グレースケール画素の明るさを示す 1 つの <em>D</em> ビット値で構成されています。
              </td>
            </tr>
            <tr>
              <th scope="row">トゥルーカラー</th>
              <td>8</td>
              <td>
                RGB のトゥルーカラー画像は、赤、緑、青をそれぞれ 8 ビットずつ使って保存されます。
              </td>
            </tr>
            <tr>
              <th scope="row">インデックスカラー</th>
              <td>4 および 8</td>
              <td>
                各画素は <code>ColorMap</code> レコードのインデックスであり、画像に使用される色を定義します。カラーマップは、赤の値すべて、緑の値すべて、青の値すべての順に並びます（<code>rgb, rgb, rgb...</code> ではなく）。
              </td>
            </tr>
            <tr>
              <th scope="row">アルファ付きグレースケール</th>
              <td>4 および 8</td>
              <td>
                アルファ情報は、 <code>SamplesPerPixel</code> フィールドで 1 画素あたり 3 サンプル以上あることを指定し、アルファの種類（1 なら関連付けられた、あらかじめ乗算されたアルファ成分、 2 なら関連付けられないアルファ（別のマット））を示すことで追加されます。しかし、アルファチャンネルは TIFF ファイルではほとんど使われず、ユーザーのソフトウェアによって対応されていない可能性があります。
              </td>
            </tr>
            <tr>
              <th scope="row">アルファ付きトゥルーカラー</th>
              <td>8</td>
              <td>
                アルファ情報は、 <code>SamplesPerPixel</code> フィールドで 1 画素あたり 3 サンプル以上あることを指定し、アルファの種類（1 なら関連付けられた、あらかじめ乗算されたアルファ成分、 2 なら関連付けられないアルファ（別のマット））を示すことで追加されます。しかし、アルファチャンネルは TIFF ファイルではほとんど使われておらず、ユーザーのソフトウェアによっては対応していない可能性があります。
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">圧縮</th>
      <td>
        ほとんどの TIFF ファイルは非圧縮ですが、可逆圧縮の PackBits と LZW 圧縮、非可逆圧縮の JPEG 圧縮に対応しています。
      </td>
    </tr>
    <tr>
      <th scope="row">ライセンス</th>
      <td>
        ライセンスは不要（ただし、使用するライブラリーに関連するものは除く）。既知の特許はすべて失効しています。
      </td>
    </tr>
  </tbody>
</table>

### WebP 画像

WebP は、VP8 動画コーデックに基づく予測符号化による非可逆圧縮と、反復データの置換を使用した可逆圧縮に対応しています。
非可逆圧縮の WebP 画像は、視覚的に同程度の圧縮レベルの JPEG 画像よりも平均 25 ～ 35% 縮小されます。
可逆圧縮の WebP 画像は、 PNG 形式の同じ画像と比較して、通常 26% 縮小されます。

WebP はアニメーションにも対応しています。非可逆圧縮の WebP ファイルでは、画像データは VP8 ビットストリームで表現され、複数のフレームを含むことができます。
可逆圧縮の WebP はアニメーションを記述した `ANIM` チャンクと、アニメーションシーケンスのフレームを表す `ANMF` チャンクを保持します。
ループはサポートされています。

WebP は現在、主要なウェブブラウザーの最新バージョンが幅広く対応していますが、歴史的に深く対応してはいません。
[JPEG](#jpeg_joint_photographic_experts_group_image) または [PNG](#png_portable_network_graphics) 形式の代替画像を、 [`<picture>` 要素](/ja/docs/Web/HTML/Element/picture)などで提供してください。

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME タイプ</th>
      <td><code>image/webp</code></td>
    </tr>
    <tr>
      <th scope="row">ファイルの拡張子</th>
      <td><code>.webp</code></td>
    </tr>
    <tr>
      <th scope="row">仕様書</th>
      <td>
        <p>
          <a href="https://developers.google.com/speed/webp/docs/riff_container">RIFF Container Specification</a><br />{{RFC(6386, "VP8 Data Format and Decoding Guide")}}
          (可逆圧縮)<br /><a href="https://developers.google.com/speed/webp/docs/webp_lossless_bitstream_specification">WebP Lossless Bitstream Specification</a>
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">ブラウザーの互換性</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">機能</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Internet Explorer</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">非可逆 WebP の対応</th>
              <td>17</td>
              <td>18</td>
              <td>65</td>
              <td>なし</td>
              <td>11.10 (Presto)<br />15 (Blink)</td>
              <td>14</td>
            </tr>
            <tr>
              <th scope="row">可逆 WebP</th>
              <td>23<br />25 on Android</td>
              <td>18</td>
              <td>65</td>
              <td>なし</td>
              <td>12.10 (Presto)<br />15 (Blink)</td>
              <td>14</td>
            </tr>
            <tr>
              <th scope="row">アニメーション</th>
              <td>32</td>
              <td>18</td>
              <td>65</td>
              <td>なし</td>
              <td>19 (Blink)</td>
              <td>14</td>
            </tr>
          </tbody>
        </table>
        <p>WebP は Firefox 96 および Chrome 50 以降で、画像の<em>エクスポート</em>に使用することもできます（対応バージョンの詳細情報は <a href="/ja/docs/Web/API/HTMLCanvasElement/toBlob#browser_compatibility"><code>HTMLCanvasElement.toBlob()</code></a> を参照してください）。</p>
      </td>
    </tr>
    <tr>
      <th scope="row">最大の画像の大きさ</th>
      <td>16,383×16,383 画素</td>
    </tr>
    <tr>
      <th scope="row">カラーモードの対応</th>
      <td>
        非可逆の WebP は、画像を 8 ビット Y'CbCr 4:2:0 (YUV420) 形式で格納します。
        可逆の WebP は 8 ビット ARGB カラーで、それぞれの成分が 8 ビットであり、合計で画素あたり 32 ビットです。
      </td>
    </tr>
    <tr>
      <th scope="row">圧縮</th>
      <td>可逆（ハフマン、LZ77、カラーキャッシュコード）または非可逆（VP8）</td>
    </tr>
    <tr>
      <th scope="row">ライセンス</th>
      <td>ライセンスは不要で、ソースコードも公開されています。</td>
    </tr>
  </tbody>
</table>

> **メモ:** Safari 14、すなわちバージョン 14.0 は WebP の[対応がアナウンスされている](https://developer.apple.com/videos/play/wwdc2020/10663/?time=1174)にもかかわらず、 .webp 画像は macOS デスクトップではネイティブで表示されません。一方、 Safari の iOS 14 版では .webp 画像が正しく表示されます。

### XBM (X Window System Bitmap file)

XBM (X Bitmap) ファイルは、ウェブで最初に対応されましたが、もはや使用されておらず、その形式には潜在的なセキュリティ上の懸念があるため、避けるべきです。
最近のブラウザーは何年も前から XBM ファイルに対応していませんが、古いコンテンツを扱っていると、まだ残っているものが見つかるかもしれません。

XBM は画像の内容をバイトの配列として表現するために C 言語のコードの断片を使用します。
各画像は 2 つから 4 つの `#define` ディレクティブからなり、ビットマップの幅と高さを（画像がカーソルとして設計されている場合は、オプションでホットスポットも）与え、その後に `unsigned char` の配列が続き、それぞれの値は 8 個の 1 ビットモノクロ画素から構成されます。

画像は幅 8 画素の倍数でなければなりません。
例えば、次のコードは 8 画素× 8 画素の XBM 画像を、それらの画素が白黒の市松模様になるように表現しています。

```cpp
#define square8_width 8
#define square8_height 8
static unsigned char square8_bits[] = {
  0xAA, 0x55, 0xAA, 0x55, 0xAA, 0x55, 0xAA, 0x55
};
```

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME タイプ</th>
      <td><code>image/xbm</code>, <code>image-xbitmap</code></td>
    </tr>
    <tr>
      <th scope="row">ファイルの拡張子</th>
      <td><code>.xbm</code></td>
    </tr>
    <tr>
      <th scope="row">仕様書</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">ブラウザーの互換性</th>
      <td>Firefox 1–3.5, Internet Explorer 1–5</td>
    </tr>
    <tr>
      <th scope="row">最大の画像の大きさ</th>
      <td>無制限</td>
    </tr>
    <tr>
      <th scope="row">カラーモードの対応</th>
      <td>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="row">カラーモード</th>
              <th scope="col">コンポーネント当たりのビット数</th>
              <th scope="col">説明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">グレースケール</th>
              <td>1</td>
              <td>各バイトには 1 ビットの画素が 8 つ含まれています。</td>
            </tr>
            <tr>
              <th scope="row">トゥルーカラー</th>
              <td><em>なし</em></td>
              <td><em>なし</em></td>
            </tr>
            <tr>
              <th scope="row">インデックスカラー</th>
              <td><em>なし</em></td>
              <td><em>なし</em></td>
            </tr>
            <tr>
              <th scope="row">アルファ付きグレースケール</th>
              <td><em>なし</em></td>
              <td><em>なし</em></td>
            </tr>
            <tr>
              <th scope="row">アルファ付きトゥルーカラー</th>
              <td><em>なし</em></td>
              <td><em>なし</em></td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">圧縮</th>
      <td>Lossless</td>
    </tr>
    <tr>
      <th scope="row">ライセンス</th>
      <td>オープンソース</td>
    </tr>
  </tbody>
</table>

## 画像形式の選択

画像形式は、動画形式と比較して、対応が幅広いものの選択肢が少なく、また、それぞれ特定の用途を持つ傾向があるため、ニーズに合わせて最適なものを選択することが容易と思われます。

### 写真

写真は一般的に非可逆圧縮でうまくいきます（エンコーダの設定に依存します）。
このため、写真には [JPEG](#jpeg_joint_photographic_experts_group_image) と [WebP](#webp_画像) が適しています。 JPEG は互換性がより高いのですが、 WebP はおそらく圧縮率がより優れています。
品質を最大化し、ダウンロード時間を最小化するには、[代替画像を使用](#代替画像の提供)して WebP を第一候補に、 JPEG を第二候補にして両方を提供することを検討してください。
それ以外の場合は、互換性のために JPEG を選択するのが無難です。

<table class="standard-table" style="max-width: 42rem">
  <thead>
    <tr>
      <th scope="col" style="width: 50%">第一候補</th>
      <th scope="col">代替用</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>WebP または JPEG</td>
      <td>JPEG</td>
    </tr>
  </tbody>
</table>

### アイコン

アイコンのような小さい画像では、サイズに制約のある画像で細部が失われないように、可逆圧縮形式を使用します。
可逆圧縮の WebP はこの目的に最適ですが、対応がまだ進んでいないため、[代替画像](#代替画像の提供)を提供しない限り、 PNG がより良い選択となります。
画像に含まれる色が256色より少ない場合は、GIFも選択肢に入りますが、PNGはインデックス圧縮オプション（PNG-8）でさらに小さく圧縮されることがよくあります。

アイコンがベクターグラフィックで表現できる場合は、 [SVG](#svg_scalable_vector_graphics) を検討してください。
SVG の対応状況は良いのですが、古いブラウザーのために PNG の代替を提供する価値があるかもしれません。

<table class="standard-table" style="max-width: 42rem">
  <thead>
    <tr>
      <th scope="col" style="width: 50%">第一候補</th>
      <th scope="col">代替用</th>
    </tr>
    <tr>
      <td>SVG, 可逆 WebP, PNG</td>
      <td>PNG</td>
    </tr>
  </thead>
</table>

### スクリーンショット

品質を妥協しない限り、スクリーンショットには可逆圧縮形式を使用することをお勧めします。
これは、スクリーンショットにテキストが含まれる場合に特に重要です。テキストは非可逆圧縮ではぼやけたり不鮮明になったりしやすいからです。

PNG はおそらく最善の方法ですが、可逆圧縮の WebP の方が間違いなく圧縮率が高くなります。

<table class="standard-table" style="max-width: 42rem">
  <thead>
    <tr>
      <th scope="col" style="width: 50%">第一候補</th>
      <th scope="col">代替用</th>
    </tr>
    <tr>
      <td>
        可逆 WebP または PNG<br />圧縮結果が気にならない場合は JPEG
      </td>
      <td>PNG または JPEG<br />スクリーンショットで GIF を使用すると色数が制限されます</td>
    </tr>
  </thead>
</table>

### 図、イラスト、グラフ

ベクターグラフィックを使用して表すことができる画像であれば、すべて SVG が 第一候補です。
そうでない場合は、 PNG のような可逆圧縮形式を使用する必要があります。
JPEG や非可逆 WebP のような非可逆形式を選択する場合は、テキストやその他の図形がぼやけたり不鮮明にならないように、圧縮レベルを慎重に判断してください。

<table class="standard-table" style="max-width: 42rem">
  <thead>
    <tr>
      <th scope="col" style="width: 50%">第一候補</th>
      <th scope="col">代替用</th>
    </tr>
    <tr>
      <td><a href="#svg_scalable_vector_graphics">SVG</a></td>
      <td><a href="#png_portable_network_graphics">PNG</a></td>
    </tr>
  </thead>
</table>

## 代替画像の提供

標準的な HTML の {{HTMLElement("img")}} 要素は、画像で互換性のための代替画像に対応していませんが、 {{HTMLElement("picture")}} 要素は対応しています。
`<picture>` はいくつかの {{HTMLElement("source")}} 要素のラッパーとして使われ、それぞれが異なる形式や異なる[メディア条件](/ja/docs/Web/CSS/@media)における画像のバージョンを指定し、 `<img>` 要素で画像を表示する場所と、代替可能な既定または「最も互換性のある」バージョンを指定します。

例えば、 SVG で表示するのが最適な図を、 PNG や GIF で代替できるように表示したい場合、次のようにします。

```html
<picture>
  <source srcset="diagram.svg" type="image/svg+xml" />
  <source srcset="diagram.png" type="image/png" />
  <img
    src="diagram.gif"
    width="620"
    height="540"
    alt="Diagram showing the data channels" />
</picture>
```

`<source>` はいくつでも指定できますが、通常は 2 つか 3 つで十分です。

## 関連情報

- [メディアの種類と形式のガイド](/ja/docs/Web/Media/Formats)
- [ウェブメディア技術](/ja/docs/Web/Media)
- [ウェブで使用される動画コーデックのガイド](/ja/docs/Web/Media/Formats/Video_codecs)
- {{Glossary("HTML")}} の {{HTMLElement("img")}} および {{HTMLElement("picture")}} 要素
- CSS の {{cssxref("background-image")}} プロパティ
- {{domxref("HTMLImageElement.Image()")}} コンストラクターと {{domxref("HTMLImageElement")}} インターフェイス
