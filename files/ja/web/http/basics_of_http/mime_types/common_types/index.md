---
title: よくある MIME タイプ
slug: Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
tags:
  - HTTP
  - MIME
  - MIME タイプ
  - Reference
  - タイプ
  - テキスト
  - ファイル
  - ファイルタイプ
  - 動画
  - 音声
translation_of: Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
---
{{HTTPSidebar}}

これは文書の種類に関連付けられている MIME タイプの一覧であり、一般的な拡張子の昇順に並べています。

2 つの主要な MIME タイプは、既定のタイプの役割として重要です。

- `text/plain` は、テキスト形式ファイルの既定の値です。テキスト形式ファイルは人間が読めるはずであり、バイナリーデータを含んではなりません。
- `application/octet-stream` は、上記以外の場合の既定値です。未知の種類のファイルは、このタイプを使用するべきです。ブラウザーはこれらのファイルを扱う際に特に注意を払い、危険な動作からユーザーを保護しようとします。

IANA は MIME メディアタイプの公式な登録先であり、[すべての公式 MIME タイプの一覧](http://www.iana.org/assignments/media-types/media-types.xhtml) を管理しています。以下の表は、ウェブ向けに重要な一部の MIME タイプを掲載しています:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">拡張子</th>
      <th scope="col">文書の種類</th>
      <th scope="col">MIME タイプ</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>.aac</code></td>
      <td>AAC 音声</td>
      <td><code>audio/aac</code></td>
    </tr>
    <tr>
      <td><code>.abw</code></td>
      <td><a href="https://ja.wikipedia.org/wiki/AbiWord">AbiWord</a> 文書</td>
      <td><code>application/x-abiword</code></td>
    </tr>
    <tr>
      <td><code>.arc</code></td>
      <td>(複数のファイルが埋め込まれた) アーカイブ文書</td>
      <td><code>application/x-freearc</code></td>
    </tr>
    <tr>
      <td><code>.avi</code></td>
      <td>AVI: Audio Video Interleave</td>
      <td><code>video/x-msvideo</code></td>
    </tr>
    <tr>
      <td><code>.azw</code></td>
      <td>Amazon Kindle eBook 形式</td>
      <td><code>application/vnd.amazon.ebook</code></td>
    </tr>
    <tr>
      <td><code>.bin</code></td>
      <td>任意の種類のバイナリーデータ</td>
      <td><code>application/octet-stream</code></td>
    </tr>
    <tr>
      <td><code>.bmp</code></td>
      <td>Windows OS/2 ビットマップ画像</td>
      <td><code>image/bmp</code></td>
    </tr>
    <tr>
      <td><code>.bz</code></td>
      <td>BZip アーカイブ</td>
      <td><code>application/x-bzip</code></td>
    </tr>
    <tr>
      <td><code>.bz2</code></td>
      <td>BZip2 アーカイブ</td>
      <td><code>application/x-bzip2</code></td>
    </tr>
    <tr>
      <td><code>.csh</code></td>
      <td>C-Shell スクリプト</td>
      <td><code>application/x-csh</code></td>
    </tr>
    <tr>
      <td><code>.css</code></td>
      <td>カスケーディングスタイルシート (CSS)</td>
      <td><code>text/css</code></td>
    </tr>
    <tr>
      <td><code>.csv</code></td>
      <td>カンマ区切り値 (CSV)</td>
      <td><code>text/csv</code></td>
    </tr>
    <tr>
      <td><code>.doc</code></td>
      <td>Microsoft Word</td>
      <td><code>application/msword</code></td>
    </tr>
    <tr>
      <td><code>.docx</code></td>
      <td>Microsoft Word (OpenXML)</td>
      <td>
        <code
          >application/vnd.openxmlformats-officedocument.wordprocessingml.document</code
        >
      </td>
    </tr>
    <tr>
      <td><code>.eot</code></td>
      <td>MS 埋め込み OpenType フォント</td>
      <td><code>application/vnd.ms-fontobject</code></td>
    </tr>
    <tr>
      <td><code>.epub</code></td>
      <td>電子出版 (EPUB)</td>
      <td><code>application/epub+zip</code></td>
    </tr>
    <tr>
      <td><code>.gz</code></td>
      <td>GZip 圧縮アーカイブ</td>
      <td><code>application/gzip</code></td>
    </tr>
    <tr>
      <td><code>.gif</code></td>
      <td>グラフィック交換形式 (GIF)</td>
      <td><code>image/gif</code></td>
    </tr>
    <tr>
      <td>
        <code>.htm<br />.html</code>
      </td>
      <td>ハイパーテキストマークアップ言語 (HTML)</td>
      <td><code>text/html</code></td>
    </tr>
    <tr>
      <td><code>.ico</code></td>
      <td>アイコン形式</td>
      <td><code>image/vnd.microsoft.icon</code></td>
    </tr>
    <tr>
      <td><code>.ics</code></td>
      <td>iCalendar 形式</td>
      <td><code>text/calendar</code></td>
    </tr>
    <tr>
      <td><code>.jar</code></td>
      <td>Java Archive (JAR)</td>
      <td><code>application/java-archive</code></td>
    </tr>
    <tr>
      <td><code>.jpeg</code><br /><code>.jpg</code></td>
      <td>JPEG 画像</td>
      <td><code>image/jpeg</code></td>
    </tr>
    <tr>
      <td><code>.js</code></td>
      <td>JavaScript</td>
      <td>
        <p>以下の仕様書によれば <code>text/javascript</code></p>
        <ul>
          <li>
            <a href="https://html.spec.whatwg.org/multipage/#scriptingLanguages"
              >https://html.spec.whatwg.org/multipage/#scriptingLanguages</a
            >
          </li>
          <li>
            <a
              href="https://html.spec.whatwg.org/multipage/#dependencies:willful-violation"
              >https://html.spec.whatwg.org/multipage/#dependencies:willful-violation</a
            >
          </li>
          <li>
            <a
              href="https://datatracker.ietf.org/doc/draft-ietf-dispatch-javascript-mjs/"
              >https://datatracker.ietf.org/doc/draft-ietf-dispatch-javascript-mjs/</a
            >
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><code>.json</code></td>
      <td>JSON 形式</td>
      <td><code>application/json</code></td>
    </tr>
    <tr>
      <td><code>.jsonld</code></td>
      <td>JSON-LD 形式</td>
      <td><code>application/ld+json</code></td>
    </tr>
    <tr>
      <td><code>.mid</code><br /><code>.midi</code></td>
      <td>Musical Instrument Digital Interface (MIDI)</td>
      <td><code>audio/midi</code> <code>audio/x-midi</code></td>
    </tr>
    <tr>
      <td><code>.mjs</code></td>
      <td>JavaScript モジュール</td>
      <td><code>text/javascript</code></td>
    </tr>
    <tr>
      <td><code>.mp3</code></td>
      <td>MP3 音声</td>
      <td><code>audio/mpeg</code></td>
    </tr>
    <tr>
      <td><code>.mpeg</code></td>
      <td>MPEG 動画</td>
      <td><code>video/mpeg</code></td>
    </tr>
    <tr>
      <td><code>.mpkg</code></td>
      <td>Apple Installer Package</td>
      <td><code>application/vnd.apple.installer+xml</code></td>
    </tr>
    <tr>
      <td><code>.odp</code></td>
      <td>OpenDocuemnt プレゼンテーション文書</td>
      <td><code>application/vnd.oasis.opendocument.presentation</code></td>
    </tr>
    <tr>
      <td><code>.ods</code></td>
      <td>OpenDocuemnt 表計算文書</td>
      <td><code>application/vnd.oasis.opendocument.spreadsheet</code></td>
    </tr>
    <tr>
      <td><code>.odt</code></td>
      <td>OpenDocument テキスト文書</td>
      <td><code>application/vnd.oasis.opendocument.text</code></td>
    </tr>
    <tr>
      <td><code>.oga</code></td>
      <td>OGG 音声</td>
      <td><code>audio/ogg</code></td>
    </tr>
    <tr>
      <td><code>.ogv</code></td>
      <td>OGG 動画</td>
      <td><code>video/ogg</code></td>
    </tr>
    <tr>
      <td><code>.ogx</code></td>
      <td>OGG</td>
      <td><code>application/ogg</code></td>
    </tr>
    <tr>
      <td><code>.opus</code></td>
      <td>Opus 音声</td>
      <td><code>audio/opus</code></td>
    </tr>
    <tr>
      <td><code>.otf</code></td>
      <td>OpenType フォント</td>
      <td><code>font/otf</code></td>
    </tr>
    <tr>
      <td><code>.png</code></td>
      <td>Portable Network Graphics</td>
      <td><code>image/png</code></td>
    </tr>
    <tr>
      <td><code>.pdf</code></td>
      <td>
        Adobe
        <a href="https://acrobat.adobe.com/jp/ja/why-adobe/about-adobe-pdf.html"
          >Portable Document Format</a
        >
        (PDF)
      </td>
      <td><code>application/pdf</code></td>
    </tr>
    <tr>
      <td><code>.php</code></td>
      <td>Hypertext Preprocessor (<strong>Personal Home Page</strong>)</td>
      <td><code>application/x-httpd-php</code></td>
    </tr>
    <tr>
      <td><code>.ppt</code></td>
      <td>Microsoft PowerPoint</td>
      <td><code>application/vnd.ms-powerpoint</code></td>
    </tr>
    <tr>
      <td><code>.pptx</code></td>
      <td>Microsoft PowerPoint (OpenXML)</td>
      <td>
        <code
          >application/vnd.openxmlformats-officedocument.presentationml.presentation</code
        >
      </td>
    </tr>
    <tr>
      <td><code>.rar</code></td>
      <td>RAR アーカイブ</td>
      <td><code>application/vnd.rar</code></td>
    </tr>
    <tr>
      <td><code>.rtf</code></td>
      <td>リッチテキスト形式 (RTF)</td>
      <td><code>application/rtf</code></td>
    </tr>
    <tr>
      <td><code>.sh</code></td>
      <td>Bourne shell スクリプト</td>
      <td><code>application/x-sh</code></td>
    </tr>
    <tr>
      <td><code>.svg</code></td>
      <td>Scalable Vector Graphics (SVG)</td>
      <td><code>image/svg+xml</code></td>
    </tr>
    <tr>
      <td><code>.swf</code></td>
      <td>
        <a href="https://en.wikipedia.org/wiki/SWF">Small web format</a> (SWF)
        または Adobe Flash 文書
      </td>
      <td><code>application/x-shockwave-flash</code></td>
    </tr>
    <tr>
      <td><code>.tar</code></td>
      <td>Tape Archive (TAR)</td>
      <td><code>application/x-tar</code></td>
    </tr>
    <tr>
      <td>
        <code>.tif<br />.tiff</code>
      </td>
      <td>Tagged Image File Format (TIFF)</td>
      <td><code>image/tiff</code></td>
    </tr>
    <tr>
      <td><code>.ts</code></td>
      <td>MPEG transport stream</td>
      <td><code>video/mp2t</code></td>
    </tr>
    <tr>
      <td><code>.ttf</code></td>
      <td>TrueType フォント</td>
      <td><code>font/ttf</code></td>
    </tr>
    <tr>
      <td><code>.txt</code></td>
      <td>テキストファイル (一般に ASCII or ISO 8859-<em>n</em>)</td>
      <td><code>text/plain</code></td>
    </tr>
    <tr>
      <td><code>.vsd</code></td>
      <td>Microsoft Visio</td>
      <td><code>application/vnd.visio</code></td>
    </tr>
    <tr>
      <td><code>.wav</code></td>
      <td>Waveform 音声形式</td>
      <td><code>audio/wav</code></td>
    </tr>
    <tr>
      <td><code>.weba</code></td>
      <td>WEBM 音声</td>
      <td><code>audio/webm</code></td>
    </tr>
    <tr>
      <td><code>.webm</code></td>
      <td>WEBM 動画</td>
      <td><code>video/webm</code></td>
    </tr>
    <tr>
      <td><code>.webp</code></td>
      <td>WEBP 画像</td>
      <td><code>image/webp</code></td>
    </tr>
    <tr>
      <td><code>.woff</code></td>
      <td>Web Open Font Format (WOFF)</td>
      <td><code>font/woff</code></td>
    </tr>
    <tr>
      <td><code>.woff2</code></td>
      <td>Web Open Font Format (WOFF)</td>
      <td><code>font/woff2</code></td>
    </tr>
    <tr>
      <td><code>.xhtml</code></td>
      <td>XHTML</td>
      <td><code>application/xhtml+xml</code></td>
    </tr>
    <tr>
      <td><code>.xls</code></td>
      <td>Microsoft Excel</td>
      <td><code>application/vnd.ms-excel</code></td>
    </tr>
    <tr>
      <td><code>.xlsx</code></td>
      <td>Microsoft Excel (OpenXML)</td>
      <td>
        <code
          >application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</code
        >
      </td>
    </tr>
    <tr>
      <td><code>.xml</code></td>
      <td><code>XML</code></td>
      <td>
        <code>application/xml</code>:
        一般のユーザーから読めるもの<em>ではない</em>場合 (<a
          href="https://tools.ietf.org/html/rfc3023#section-3"
          >RFC 3023</a
        >, section 3)<br /><code>text/xml</code>:
        一般のユーザーから読めるものである場合 (<a
          href="https://tools.ietf.org/html/rfc3023#section-3"
          >RFC 3023</a
        >, section 3)
      </td>
    </tr>
    <tr>
      <td><code>.xul</code></td>
      <td>XUL</td>
      <td><code>application/vnd.mozilla.xul+xml</code></td>
    </tr>
    <tr>
      <td><code>.zip</code></td>
      <td>ZIP アーカイブ</td>
      <td><code>application/zip</code></td>
    </tr>
    <tr>
      <td><code>.3gp</code></td>
      <td>
        <a href="https://en.wikipedia.org/wiki/3GP_and_3G2">3GPP</a>
        音声/動画コンテナー
      </td>
      <td>
        <code>video/3gpp</code><br />動画を含まない場合は
        <code>audio/3gpp</code>
      </td>
    </tr>
    <tr>
      <td><code>.3g2</code></td>
      <td>
        <a href="https://en.wikipedia.org/wiki/3GP_and_3G2">3GPP2</a>
        音声/動画コンテナー
      </td>
      <td>
        <code>video/3gpp2</code><br />動画を含まない場合は
        <code>audio/3gpp2</code>
      </td>
    </tr>
    <tr>
      <td><code>.7z</code></td>
      <td>
        <a href="https://ja.wikipedia.org/wiki/7-Zip">7-zip</a> アーカイブ
      </td>
      <td><code>application/x-7z-compressed</code></td>
    </tr>
  </tbody>
</table>
