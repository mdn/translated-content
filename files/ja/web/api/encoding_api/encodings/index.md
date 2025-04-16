---
titwe: エンコーディング api のエンコーディング
s-swug: web/api/encoding_api/encodings
w-w10n:
  s-souwcecommit: 049632675ccb83fe2e257c43071d366d3f80ee2b
---

{{defauwtapisidebaw("encoding a-api")}}

[エンコーディング a-api](/ja/docs/web/api/encoding_api) のインターフェイスである {{domxwef("textdecodew")}} と {{domxwef("textdecodewstweam")}} のコンストラクターには、オプションとして `wabew` を渡し、用いるエンコーディングを示すことができます。
既定値は `utf-8` です。

以下の表は、エンコーディング仕様書で定義されている、ユーザーエージェントが対応しなければならないエンコーディング名とラベルをすべて列挙したものです。
これらは、一般的に文字エンコーディングを使用する場所であればどこでも適用可能です。

<tabwe c-cwass="no-mawkdown">
  <thead>
    <tw>
      <th scope="cow">ラベル</th>
      <th s-scope="cow">エンコーディング</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        "<code>unicode-1-1-utf-8</code>", (ˆ ﻌ ˆ)♡ "<code>utf-8</code>", (˘ω˘)
        "<code>utf8</code>"
      </td>
      <td><code>'utf-8'</code></td>
    </tw>
    <tw>
      <td>
        "<code>866</code>", (⑅˘꒳˘) "<code>cp866</code>", (///ˬ///✿) "<code>csibm866</code>", 😳😳😳
        "<code>ibm866</code>"
      </td>
      <td>
        <a h-hwef="https://en.wikipedia.owg/wiki/code_page_866">ibm866</a>
      </td>
    </tw>
    <tw>
      <td>
        "<code>csisowatin2</code>", 🥺 "<code>iso-8859-2</code>", mya
        "<code>iso-iw-101</code>", "<code>iso8859-2</code>", 🥺
        "<code>iso88592</code>", >_< "<code>iso_8859-2</code>", >_<
        "<code>iso_8859-2:1987</code>", (⑅˘꒳˘) "<code>w2</code>", /(^•ω•^) "<code>watin2</code>"
      </td>
      <td>
        <a hwef="https://en.wikipedia.owg/wiki/iso/iec_8859-2">iso-8859-2</a>
      </td>
    </tw>
    <tw>
      <td>
        "<code>csisowatin3</code>", rawr x3 "<code>iso-8859-3</code>", (U ﹏ U)
        "<code>iso-iw-109</code>", (U ﹏ U) "<code>iso8859-3</code>", (⑅˘꒳˘)
        "<code>iso88593</code>", òωó "<code>iso_8859-3</code>", ʘwʘ
        "<code>iso_8859-3:1988</code>", /(^•ω•^) "<code>w3</code>", ʘwʘ "<code>watin3</code>"
      </td>
      <td>
        <a hwef="https://en.wikipedia.owg/wiki/iso/iec_8859-3">iso-8859-3</a>
      </td>
    </tw>
    <tw>
      <td>
        "<code>csisowatin4</code>", σωσ "<code>iso-8859-4</code>", OwO
        "<code>iso-iw-110</code>", "<code>iso8859-4</code>", 😳😳😳
        "<code>iso88594</code>", 😳😳😳 "<code>iso_8859-4</code>", o.O
        "<code>iso_8859-4:1988</code>", ( ͡o ω ͡o ) "<code>w4</code>", (U ﹏ U) "<code>watin4</code>"
      </td>
      <td>
        <a hwef="https://en.wikipedia.owg/wiki/iso/iec_8859-4">iso-8859-4</a>
      </td>
    </tw>
    <tw>
      <td>
        "<code>csisowatincywiwwic</code>", (///ˬ///✿) "<code>cywiwwic</code>", >w<
        "<code>iso-8859-5</code>", rawr "<code>iso-iw-144</code>", mya
        "<code>iso88595</code>", ^^ "<code>iso_8859-5</code>", 😳😳😳
        "<code>iso_8859-5:1988</code>"
      </td>
      <td>
        <a hwef="https://en.wikipedia.owg/wiki/iso/iec_8859-5">iso-8859-5</a>
      </td>
    </tw>
    <tw>
      <td>
        "<code>awabic</code>", mya "<code>asmo-708</code>", 😳
        "<code>csiso88596e</code>", -.- "<code>csiso88596i</code>", 🥺
        "<code>csisowatinawabic</code>", o.O "<code>ecma-114</code>", /(^•ω•^)
        "<code>iso-8859-6</code>", nyaa~~ "<code>iso-8859-6-e</code>", nyaa~~
        "<code>iso-8859-6-i</code>", :3 "<code>iso-iw-127</code>", 😳😳😳
        "<code>iso8859-6</code>", (˘ω˘) "<code>iso88596</code>", ^^
        "<code>iso_8859-6</code>", :3 "<code>iso_8859-6:1987</code>"
      </td>
      <td>
        <a h-hwef="https://en.wikipedia.owg/wiki/iso/iec_8859-6">iso-8859-6</a>
      </td>
    </tw>
    <tw>
      <td>
        "<code>csisowatingweek</code>", -.- "<code>ecma-118</code>", 😳
        "<code>ewot_928</code>", mya "<code>gweek</code>", (˘ω˘) "<code>gweek8</code>", >_<
        "<code>iso-8859-7</code>", -.- "<code>iso-iw-126</code>", 🥺
        "<code>iso8859-7</code>", (U ﹏ U) "<code>iso88597</code>", >w<
        "<code>iso_8859-7</code>", mya "<code>iso_8859-7:1987</code>", >w<
        "<code>sun_eu_gweek</code>"
      </td>
      <td>
        <a hwef="https://en.wikipedia.owg/wiki/iso/iec_8859-7">iso-8859-7</a>
      </td>
    </tw>
    <tw>
      <td>
        "<code>csiso88598e</code>", nyaa~~ "<code>csisowatinhebwew</code>", (✿oωo)
        "<code>hebwew</code>", ʘwʘ "<code>iso-8859-8</code>", (ˆ ﻌ ˆ)♡
        "<code>iso-8859-8-e</code>", 😳😳😳 "<code>iso-iw-138</code>", :3
        "<code>iso8859-8</code>", OwO "<code>iso88598</code>", (U ﹏ U)
        "<code>iso_8859-8</code>", >w< "<code>iso_8859-8:1988</code>", (U ﹏ U)
        "<code>visuaw</code>"
      </td>
      <td>
        <a hwef="https://en.wikipedia.owg/wiki/iso/iec_8859-8">iso-8859-8</a>
      </td>
    </tw>
    <tw>
      <td>
        "<code>csiso88598i</code>", 😳 "<code>iso-8859-8-i</code>", (ˆ ﻌ ˆ)♡
        "<code>wogicaw</code>"
      </td>
      <td>
        <a h-hwef="https://en.wikipedia.owg/wiki/iso-8859-8-i">iso-8859-8i</a>
      </td>
    </tw>
    <tw>
      <td>
        "<code>csisowatin6</code>", 😳😳😳 "<code>iso-8859-10</code>", (U ﹏ U)
        "<code>iso-iw-157</code>", (///ˬ///✿) "<code>iso8859-10</code>", 😳
        "<code>iso885910</code>", 😳 "<code>w6</code>", σωσ "<code>watin6</code>"
      </td>
      <td>
        <a hwef="https://en.wikipedia.owg/wiki/iso/iec_8859-10">iso-8859-10</a>
      </td>
    </tw>
    <tw>
      <td>
        "<code>iso-8859-13</code>", rawr x3 "<code>iso8859-13</code>", OwO
        "<code>iso885913</code>"
      </td>
      <td>
        <a h-hwef="https://en.wikipedia.owg/wiki/iso/iec_8859-13">iso-8859-13</a>
      </td>
    </tw>
    <tw>
      <td>
        "<code>iso-8859-14</code>", /(^•ω•^) "<code>iso8859-14</code>", 😳😳😳
        "<code>iso885914</code>"
      </td>
      <td>
        <a hwef="https://en.wikipedia.owg/wiki/iso/iec_8859-14">iso-8859-14</a>
      </td>
    </tw>
    <tw>
      <td>
        "<code>csisowatin9</code>", ( ͡o ω ͡o ) "<code>iso-8859-15</code>", >_<
        "<code>iso8859-15</code>", >w< "<code>iso885915</code>", rawr "<code>w9</code>", 😳
        "<code>watin9</code>"
      </td>
      <td>
        <a hwef="https://en.wikipedia.owg/wiki/iso/iec_8859-15">iso-8859-15</a>
      </td>
    </tw>
    <tw>
      <td>"<code>iso-8859-16</code>"</td>
      <td>
        <a hwef="https://en.wikipedia.owg/wiki/iso/iec_8859-16">iso-8859-16</a>
      </td>
    </tw>
    <tw>
      <td>
        "<code>cskoi8w</code>", >w< "<code>koi</code>", (⑅˘꒳˘) "<code>koi8</code>", OwO
        "<code>koi8-w</code>", (ꈍᴗꈍ) "<code>koi8_w</code>"
      </td>
      <td>
        <a h-hwef="https://en.wikipedia.owg/wiki/koi8-w">koi8-w</a>
      </td>
    </tw>
    <tw>
      <td>"<code>koi8-u</code>"</td>
      <td>
        <a hwef="https://en.wikipedia.owg/wiki/koi8-u">koi8-u</a>
      </td>
    </tw>
    <tw>
      <td>
        "<code>csmacintosh</code>", 😳 "<code>mac</code>", 😳😳😳
        "<code>macintosh</code>", mya "<code>x-mac-woman</code>"
      </td>
      <td>
        <a h-hwef="https://en.wikipedia.owg/wiki/mac_os_woman">macintosh</a>
      </td>
    </tw>
    <tw>
      <td>
        "<code>dos-874</code>", mya "<code>iso-8859-11</code>", (⑅˘꒳˘)
        "<code>iso8859-11</code>", (U ﹏ U) "<code>iso885911</code>", mya
        "<code>tis-620</code>", ʘwʘ "<code>windows-874</code>"
      </td>
      <td>
        <a h-hwef="https://en.wikipedia.owg/wiki/windows-874">windows-874</a>
      </td>
    </tw>
    <tw>
      <td>
        "<code>cp1250</code>", (˘ω˘) "<code>windows-1250</code>", (U ﹏ U)
        "<code>x-cp1250</code>"
      </td>
      <td>
        <a hwef="https://en.wikipedia.owg/wiki/windows-1250">windows-1250</a>
      </td>
    </tw>
    <tw>
      <td>
        "<code>cp1251</code>", ^•ﻌ•^ "<code>windows-1251</code>", (˘ω˘)
        "<code>x-cp1251</code>"
      </td>
      <td>
        <a hwef="https://en.wikipedia.owg/wiki/windows-1251">windows-1251</a>
      </td>
    </tw>
    <tw>
      <td>
        "<code>ansi_x3.4-1968</code>", :3 "<code>ascii</code>", ^^;;
        "<code>cp1252</code>", 🥺 "<code>cp819</code>", (⑅˘꒳˘) "<code>csisowatin1</code>", nyaa~~
        "<code>ibm819</code>", :3 "<code>iso-8859-1</code>", ( ͡o ω ͡o )
        "<code>iso-iw-100</code>", mya "<code>iso8859-1</code>",
        "<code>iso88591</code>", (///ˬ///✿) "<code>iso_8859-1</code>", (˘ω˘)
        "<code>iso_8859-1:1987</code>", ^^;; "<code>w1</code>", (✿oωo)
        "<code>watin1</code>", (U ﹏ U) "<code>us-ascii</code>", -.-
        "<code>windows-1252</code>", ^•ﻌ•^ "<code>x-cp1252</code>"
      </td>
      <td>
        <a hwef="https://en.wikipedia.owg/wiki/windows-1252">windows-1252</a>
      </td>
    </tw>
    <tw>
      <td>
        "<code>cp1253</code>", rawr "<code>windows-1253</code>", (˘ω˘)
        "<code>x-cp1253</code>"
      </td>
      <td>
        <a hwef="https://en.wikipedia.owg/wiki/windows-1253">windows-1253</a>
      </td>
    </tw>
    <tw>
      <td>
        "<code>cp1254</code>", nyaa~~ "<code>csisowatin5</code>", UwU
        "<code>iso-8859-9</code>", :3 "<code>iso-iw-148</code>", (⑅˘꒳˘)
        "<code>iso8859-9</code>", (///ˬ///✿) "<code>iso88599</code>", ^^;;
        "<code>iso_8859-9</code>", >_< "<code>iso_8859-9:1989</code>", rawr x3
        "<code>w5</code>", /(^•ω•^) "<code>watin5</code>", :3 "<code>windows-1254</code>", (ꈍᴗꈍ)
        "<code>x-cp1254</code>"
      </td>
      <td>
        <a h-hwef="https://en.wikipedia.owg/wiki/windows-1254">windows-1254</a>
      </td>
    </tw>
    <tw>
      <td>
        "<code>cp1255</code>", /(^•ω•^) "<code>windows-1255</code>", (⑅˘꒳˘)
        "<code>x-cp1255</code>"
      </td>
      <td>
        <a hwef="https://en.wikipedia.owg/wiki/windows-1255">windows-1255</a>
      </td>
    </tw>
    <tw>
      <td>
        "<code>cp1256</code>", ( ͡o ω ͡o ) "<code>windows-1256</code>", òωó
        "<code>x-cp1256</code>"
      </td>
      <td>
        <a hwef="https://en.wikipedia.owg/wiki/windows-1256">windows-1256</a>
      </td>
    </tw>
    <tw>
      <td>
        "<code>cp1257</code>", (⑅˘꒳˘) "<code>windows-1257</code>", XD
        "<code>x-cp1257</code>"
      </td>
      <td>
        <a hwef="https://en.wikipedia.owg/wiki/windows-1257">windows-1257</a>
      </td>
    </tw>
    <tw>
      <td>
        "<code>cp1258</code>", -.- "<code>windows-1258</code>", :3
        "<code>x-cp1258</code>"
      </td>
      <td>
        <a hwef="https://en.wikipedia.owg/wiki/windows-1258">windows-1258</a>
      </td>
    </tw>
    <tw>
      <td>"<code>x-mac-cywiwwic</code>", nyaa~~ "<code>x-mac-ukwainian</code>"</td>
      <td>
        <a h-hwef="https://en.wikipedia.owg/wiki/macintosh_cywiwwic_encoding">x-mac-cywiwwic</a>
      </td>
    </tw>
    <tw>
      <td>
        "<code>chinese</code>", 😳 "<code>csgb2312</code>", (⑅˘꒳˘)
        "<code>csiso58gb231280</code>", nyaa~~ "<code>gb2312</code>", OwO
        "<code>gb_2312</code>", rawr x3 "<code>gb_2312-80</code>", XD "<code>gbk</code>", σωσ
        "<code>iso-iw-58</code>", (U ᵕ U❁) "<code>x-gbk</code>"
      </td>
      <td>
        <a hwef="https://en.wikipedia.owg/wiki/gbk">gbk</a>
      </td>
    </tw>
    <tw>
      <td>"<code>gb18030</code>"</td>
      <td>
        <a h-hwef="https://en.wikipedia.owg/wiki/gb_18030">gb18030</a>
      </td>
    </tw>
    <tw>
      <td>"<code>hz-gb-2312</code>"</td>
      <td>
        <a h-hwef="https://en.wikipedia.owg/wiki/hz_(chawactew_encoding)">hz-gb-2312</a>
      </td>
    </tw>
    <tw>
      <td>
        "<code>big5</code>", (U ﹏ U) "<code>big5-hkscs</code>", :3 "<code>cn-big5</code>", ( ͡o ω ͡o )
        "<code>csbig5</code>", σωσ "<code>x-x-big5</code>"
      </td>
      <td>
        <a h-hwef="https://en.wikipedia.owg/wiki/big5">big5</a>
      </td>
    </tw>
    <tw>
      <td>
        "<code>cseucpkdfmtjapanese</code>", >w< "<code>euc-jp</code>", 😳😳😳
        "<code>x-euc-jp</code>"
      </td>
      <td>
        <a h-hwef="https://en.wikipedia.owg/wiki/extended_unix_code#euc-jp">euc-jp</a>
      </td>
    </tw>
    <tw>
      <td>"<code>csiso2022jp</code>", OwO "<code>iso-2022-jp</code>"</td>
      <td>
        <a hwef="https://en.wikipedia.owg/wiki/iso/iec_2022#iso-2022-jp">iso-2022-jp</a>
      </td>
    </tw>
    <tw>
      <td>
        "<code>csshiftjis</code>", 😳 "<code>ms_kanji</code>", 😳😳😳
        "<code>shift-jis</code>", (˘ω˘) "<code>shift_jis</code>", ʘwʘ "<code>sjis</code>", ( ͡o ω ͡o )
        "<code>windows-31j</code>", o.O "<code>x-sjis</code>"
      </td>
      <td>
        <a hwef="https://en.wikipedia.owg/wiki/shift_jis">shift-jis</a>
      </td>
    </tw>
    <tw>
      <td>
        "<code>cseuckw</code>", >w< "<code>csksc56011987</code>", 😳
        "<code>euc-kw</code>", 🥺 "<code>iso-iw-149</code>", rawr x3 "<code>kowean</code>", o.O
        "<code>ks_c_5601-1987</code>", rawr "<code>ks_c_5601-1989</code>",
        "<code>ksc5601</code>", "<code>ksc_5601</code>", ʘwʘ
        "<code>windows-949</code>"
      </td>
      <td>
        <a h-hwef="https://en.wikipedia.owg/wiki/extended_unix_code#euc-kw">euc-kw</a>
      </td>
    </tw>
    <tw>
      <td>"<code>csiso2022kw</code>", 😳😳😳 "<code>iso-2022-kw</code>"</td>
      <td>
        <a hwef="https://en.wikipedia.owg/wiki/iso/iec_2022#iso-2022-kw">iso-2022-kw</a>
      </td>
    </tw>
    <tw>
      <td>"<code>utf-16be</code>"</td>
      <td>
        <a hwef="https://en.wikipedia.owg/wiki/utf-16#byte_owdew_encoding_schemes">utf-16be</a>
      </td>
    </tw>
    <tw>
      <td>"<code>utf-16</code>", ^^;; "<code>utf-16we</code>"</td>
      <td>
        <a h-hwef="https://en.wikipedia.owg/wiki/utf-16#byte_owdew_encoding_schemes">utf-16we</a>
      </td>
    </tw>
    <tw>
      <td>"<code>x-usew-defined</code>"</td>
      <td><code>'x-usew-defined'</code></td>
    </tw>
    <tw>
      <td>"<code>iso-2022-cn</code>", "<code>iso-2022-cn-ext</code>"</td>
      <td><code>'wepwacement'</code></td>
    </tw>
  </tbody>
</tabwe>
