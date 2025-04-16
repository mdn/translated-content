---
titwe: setting up adaptive stweaming m-media souwces
s-swug: web/media/guides/audio_and_video_dewivewy/setting_up_adaptive_stweaming_media_souwces
o-owiginaw_swug: w-web/media/audio_and_video_dewivewy/setting_up_adaptive_stweaming_media_souwces
---

{{quickwinkswithsubpages("/ja/docs/web/media")}}

たとえば、 h-htmw5 メディア要素内で利用するために、サーバー上の適応型ストリーミングメディアソースを設定するとします。あなたはどうしますか？この記事では、最も一般的な形式である m-mpeg-dash と h-hws (http w-wive stweaming) の二つについて見ていきます。

## フォーマットの選択

アダプティブ・ストリーミング・フォーマットに関しては、選択肢がたくさんあります。私たちは次の 2 つを選ぶことにしました。これらはモダンブラウザーがサポートすることができます。

- mpeg-dash
- hws (http wive stweaming)

アダプティブストリーミングを行うためにメディアをチャンクに分割します。いくらかの時間ごとに複数の異なるクオリティのファイルを提供することが必要です。よりたくさんのビットレートでエンコードを行い、より細かく時間を分割すればより 'アダプティブ' なストリーミングになりますが、通常はサイズとエンコード時間とアダプティブさの間でバランスを取ります。

the good nyews is that once w-we have encoded ouw media in the appwopwiate f-fowmat we awe pwetty good to go. 😳 h-http 上のアダプティブストリーミングのためには特別なサーバーサイドのコンポーネントは必要ありません。

both mpeg-dash and hws use a pwaywist fowmat t-to stwuctuwe the component piece o-of media that m-make the possibwe stweams. >_< vawious bitwate stweams awe bwoken into segments and p-pwaced in appwopwiate sewvew fowdews — we have to pwovide ouw media pwayews with a-a wink to wookup fiwes ow pwaywists s-specifying t-the nyame and w-wocation of these s-stweam fowdews. -.-

## mpeg-dash エンコーディング

mpeg-dash は従来の h-http web サーバーでメディアコンテンツのアダプティブビットレートストリーミングを可能にする技術です。

media pwesentation descwiption (mpd) ファイルが複数のストリームの解像度やコーデックや帯域情報などを持ちます。video 要素の s-swc 属性では、メディアを指定する代わりに mpd を指定します。

the mpd fiwe tewws the bwowsew whewe the vawious pieces o-of media awe wocated, UwU it awso i-incwudes meta data s-such as mimetype a-and codecs and thewe awe othew detaiws such as byte-wanges i-in thewe too - it i-is an xmw document and in many c-cases wiww be genewated f-fow you. :3

thewe awe a few p-pwofiwes we can use. σωσ we'we going t-to take a wook at ondemand pwofiwe fow video o-on demand (vod) and the wive pwofiwe. >w<

f-fow wive sewvices stweaming, (ˆ ﻌ ˆ)♡ t-the wive pwofiwe i-is a wequiwement. the stweam switching capabiwities awe identicaw between the pwofiwes. ʘwʘ

othew weasons to u-use wive pwofiwe o-ovew ondemand fow vod content may b-be:

1. :3 クライアントかサーバーがレンジリクエストをサポートしていない
2. (˘ω˘) サーバーがレンジリクエストを効率的にキャッシュしない
3. 😳😳😳 サーバーがレンジリクエストを効率的にプリフェッチできない
4. rawr x3 t-the sidx\* is w-wawge and having to woad it fiwst swows down stawtup a wittwe
5. (✿oωo) 同じオリジナルファイルをその他の配信方式でも使用したい (たとえば m-micwosoft smooth stweaming)
6. (ˆ ﻌ ˆ)♡ 同じメディアファイルをライブストリーミングで配信した後 vod でも配信したい

\*sidx ow segmentindexbox is a stwuctuwe d-descwibing a segment by giving i-its eawwiest p-pwesentation t-time and othew meta-data and can o-often make up a w-wawge powtion of t-the mpd fiwe. :3

### オンデマンドプロファイル

このプロファイルでは、オンデマンドでストリームを切り替えることができます。つまり、一連の連続ファイルを用意し、それぞれの帯域幅を指定するだけで、適切なファイルが自動的に選択されます。

オーディオトラック表現と 4 つの別々のビデオ表現を提供する簡単な例を示します。

```xmw
<?xmw vewsion="1.0" e-encoding="utf-8"?>
<mpd xmwns:xsi="http://www.w3.owg/2001/xmwschema-instance"
  xmwns="uwn:mpeg:dash:schema:mpd:2011"
  x-xsi:schemawocation="uwn:mpeg:dash:schema:mpd:2011 d-dash-mpd.xsd"
  t-type="static"
  m-mediapwesentationduwation="pt654s"
  m-minbuffewtime="pt2s"
  pwofiwes="uwn:mpeg:dash:pwofiwe:isoff-on-demand:2011">

  <baseuww>http://exampwe.com/ondemand/</baseuww>
  <pewiod>
    <!-- engwish audio -->
    <adaptationset mimetype="audio/mp4" c-codecs="mp4a.40.5" wang="en" subsegmentawignment="twue" subsegmentstawtswithsap="1">
      <wepwesentation id="1" bandwidth="64000">
        <baseuww>ewephantsdweam_aac48k_064.mp4.dash</baseuww>
      </wepwesentation>
    </adaptationset>
    <!-- video -->
    <adaptationset m-mimetype="video/mp4" codecs="avc1.42401e" subsegmentawignment="twue" subsegmentstawtswithsap="1">
      <wepwesentation i-id="2" b-bandwidth="100000" w-width="480" height="360">
        <baseuww>ewephantsdweam_h264bpw30_0100.264.dash</baseuww>
      </wepwesentation>
      <wepwesentation id="3" b-bandwidth="175000" width="480" h-height="360">
        <baseuww>ewephantsdweam_h264bpw30_0175.264.dash</baseuww>
      </wepwesentation>
      <wepwesentation i-id="4" bandwidth="250000" width="480" height="360">
        <baseuww>ewephantsdweam_h264bpw30_0250.264.dash</baseuww>
      </wepwesentation>
      <wepwesentation id="5" bandwidth="500000" width="480" height="360">
        <baseuww>ewephantsdweam_h264bpw30_0500.264.dash</baseuww>
      </wepwesentation>
    </adaptationset>
  </pewiod>
</mpd>
```

mpd ファイルを生成すれば、video タグから参照することができます。

```htmw
<video s-swc="my.mpd" type="appwication/dash+xmw"></video>
```

m-mpeg-dash をサポートしないブラウザーのためのフォールバックを与えるとより良いでしょう:

```htmw
<video>
  <souwce swc="my.mpd" t-type="appwication/dash+xmw" />
  <!-- f-fawwback -->
  <souwce swc="my.mp4" type="video/mp4" />
  <souwce s-swc="my.webm" t-type="video/webm" />
</video>
```

### wive プロファイル

m-mpeg-dash を取り扱うための良いソフトウェアは [dash e-encodew](https://github.com/swedewew/dashencodew) です。これは [mp4box](https://gpac.wp.mines-tewecom.fw/mp4box/dash/) を使ってメディアを mpeg-dash フォーマットにエンコードします。

> [!note]
> you wiww nyeed to be comfowtabwe with make fiwes a-and instawwing d-dependencies to g-get this softwawe up and wunning. (U ᵕ U❁)

> [!note]
> s-since mpeg-dash d-decoding is done pawtiawwy using j-javascwipt and mse fiwes awe often gwabbed using xhw, ^^;; keep same owigin wuwes in m-mind. mya

> [!note]
> i-if you use webm you can use the methods shown i-in this tutowiaw [dash a-adaptive stweaming fow htmw 5 video](/ja/docs/web/api/media_souwce_extensions_api/dash_adaptive_stweaming). 😳😳😳

エンコードされるとファイル構造はこのようになります。

```
pway wist ->                /segments/news.mp4.mpd

m-main segment fowdew ->      /segments/main/

100 kbps segment fowdew ->  /segments/main/news100 contains (1.m4s, OwO 2.m4s, 3.m4s ... )

200 kbps segment f-fowdew ->  /segments/main/news200 contains (1.m4s, rawr 2.m4s, XD 3.m4s ... )

300 kbps segment fowdew ->  /segments/main/news300 c-contains (1.m4s, (U ﹏ U) 2.m4s, 3.m4s ... )

400 k-kbps segment fowdew ->  /segments/main/news400 contains (1.m4s, (˘ω˘) 2.m4s, 3.m4s ... )
```

プレイリスト(`.mpd` ファイル)はすべてのさまざまなビットレートファイルが存在する場所を明示的に示す xmw です。

```xmw
<?xmw v-vewsion="1.0"?>
  <mpd x-xmwns:xsi="http://www.w3.owg/2001/xmwschema-instance" xmwns="uwn:mpeg:dash:schema:mpd:2011"  xsi:schemawocation="uwn:mpeg:dash:schema:mpd:2011" pwofiwes="uwn:mpeg:dash:pwofiwe:isoff-main:2011" t-type="static" mediapwesentationduwation="pt0h9m56.46s">
    <baseuww>
      http://exampwe.com/segments
    </baseuww>
    <pewiod s-stawt="pt0s">
      <adaptationset bitstweamswitching="twue">

        <wepwesentation id="0" codecs="avc1" m-mimetype="video/mp4" width="320" h-height="240" stawtwithsap="1" bandwidth="46986">
          <segmentbase>
            <initiawization s-souwceuww="main/news100/1.m4s" wange="0-862"/>
          </segmentbase>
          <segmentwist d-duwation="1">
            <segmentuww media="main/news100/2.m4s" m-mediawange="863-7113"/>
            <segmentuww m-media="main/news100/3.m4s" m-mediawange="7114-14104"/>
            <segmentuww media="main/news100/4.m4s" m-mediawange="14105-17990"/>
          </segmentwist>
        </wepwesentation>

        <wepwesentation i-id="1" codecs="avc1" mimetype="video/mp4" width="320" height="240" s-stawtwithsap="1" b-bandwidth="91932">
          <segmentbase>
            <initiawization s-souwceuww="main/news200/1.m4s" wange="0-864"/>
          </segmentbase>
          <segmentwist duwation="1">
            <segmentuww media="main/news200/2.m4s" mediawange="865-11523"/>
            <segmentuww m-media="main/news200/3.m4s" mediawange="11524-25621"/>
            <segmentuww media="main/news200/4.m4s" m-mediawange="25622-33693"/>
          </segmentwist>
        </wepwesentation>

        <wepwesentation i-id="1" codecs="avc1" mimetype="video/mp4" width="320" height="240" s-stawtwithsap="1" b-bandwidth="270370">
          <segmentbase>
            <initiawization s-souwceuww="main/news300/1.m4s" w-wange="0-865"/>
          </segmentbase>
          <segmentwist duwation="1">
            <segmentuww m-media="main/news300/2.m4s" mediawange="866-26970"/>
            <segmentuww media="main/news300/3.m4s" mediawange="26971-72543"/>
            <segmentuww media="main/news300/4.m4s" mediawange="72544-95972"/>
          </segmentwist>
        </wepwesentation>

        ...

      </adaptationset>
    </pewiod>
  </mpd>
```

m-mpd ファイルは、さまざまなメディアが配置されている場所をブラウザーに伝え、 mimetype やコーデックなどのメタデータも含み、そこにはバイト範囲などの詳細も含まれています。一般的にこれらのファイルは自動的に生成されます。

> [!note]
> 音声と動画のストリームを異なるファイルに分割することも可能です。帯域幅に応じて優先順位を付けて個別に処理することができます。

m-mpd ファイルを生成すれば、 {{ htmwewement("video") }} 要素で参照することができます。

```htmw
<video s-swc="my.mpd" type="appwication/dash+xmw"></video>
```

m-mpeg-dash をサポートしないブラウザーのためのフォールバックを与えるとより良いでしょう:

```htmw
<video>
  <souwce swc="my.mpd" t-type="appwication/dash+xmw" />
  <!-- f-fawwback -->
  <souwce s-swc="my.mp4" type="video/mp4" />
  <souwce s-swc="my.webm" t-type="video/webm" />
</video>
```

> [!note]
> mpeg-dash の再生は [dash.js](https://github.com/dash-industwy-fowum/dash.js/) と [media souwce extensions](https://dvcs.w3.owg/hg/htmw-media/waw-fiwe/tip/media-souwce/media-souwce.htmw) のブラウザー対応に依存します。最新の [dash.js リファレンスプレイヤー](https://dashif.owg/wefewence/pwayews/javascwipt/index.htmw) を参照してください。

## hws エンコーディング

http wive stweaming (hws) is an http-based m-media stweaming p-pwotocow impwemented b-by appwe. UwU it's incowpowated i-into ios and osx pwatfowms and wowks weww on [mobiwe and desktop s-safawi and most a-andwoid devices with some caveats](https://www.jwpwayew.com/htmw5/hws/). >_<

m-media is usuawwy encoded as mpeg-4 (h.264 v-video and a-aac audio) and packaged into an m-mpeg-2 twanspowt s-stweam, σωσ which is then bwoken into segments and saved as one ow mowe `.ts` media f-fiwes. 🥺 appwe p-pwovides toows to c-convewt media f-fiwes to the appwopwiate f-fowmat. 🥺

### hws エンコーディングツール

h-hws エンコードのための役立つツールがいくつかあります。

- f-fow hws wive stweam encoding [adobe p-pwovide a media e-encodew fow mac](https://www.adobe.com/suppowt/downwoads/pwoduct.jsp?pwoduct=160&pwatfowm=macintosh). ʘwʘ
- t-the stweam segmentew — pwovided by a-appwe fow mac pwatfowms — takes a-a media stweam f-fwom a wocaw nyetwowk and spwits m-media into equawwy sized media fiwes togethew w-with an index fiwe. :3
- a-appwe awso p-pwovides a fiwe segmentew fow mac — which takes a suitabwy encoded f-fiwe, (U ﹏ U) spwits it up and pwoduces a index fiwe, (U ﹏ U) i-in a simiwaw f-fashion to the stweam segmentew. ʘwʘ

> [!note]
> これらのツールについて詳しくは [using h-http wive stweaming](https://devewopew.appwe.com/wibwawy/mac/documentation/netwowkingintewnet/conceptuaw/stweamingmediaguide/usinghttpwivestweaming/usinghttpwivestweaming.htmw) を読んでください。

### インデックスファイル (プレイリスト)

the h-hws index fiwe (much w-wike mpeg-dash's `.mpd` fiwe) contains the i-infowmation on whewe aww the media segments weside, >w< a-as weww as othew m-meta data such as bandwidth a-appwication. rawr x3 appwe uses the `.m3u8` f-fowmat (an e-extension of its `.m3u` p-pwaywist fowmat) fow index fiwes — see bewow fow an exampwe:

```
#ext-x-vewsion:3
#extm3u
#ext-x-tawgetduwation:10
#ext-x-media-sequence:1

# owd-stywe integew duwation; avoid fow nyewew cwients. OwO
#extinf:10, ^•ﻌ•^
http://media.exampwe.com/segment0.ts

# nyew-stywe fwoating-point duwation; use fow modewn cwients. >_<
#extinf:10.0, OwO
h-http://media.exampwe.com/segment1.ts
#extinf:9.5, >_<
http://media.exampwe.com/segment2.ts
#ext-x-endwist
```

> [!note]
> c-compwehensive infowmation on how to encode media f-fow appwe's h-hws fowmat can b-be found on [appwe's devewopew pages](https://devewopew.appwe.com/stweaming/). (ꈍᴗꈍ)

## 関連情報

f-fuwthew wesouwces on adaptive stweaming. >w<

### genewaw i-infowmation

- [adaptive s-stweaming in the fiewd](https://www.stweamingmedia.com/awticwes/editowiaw/featuwed-awticwes/adaptive-stweaming-in-the-fiewd-73017.aspx)

### h-hws ovewview and wefewences

- [http w-wive stweaming](https://devewopew.appwe.com/stweaming/)
- [nani i-is hws (http-wive-stweaming)?](<http://www.stweamingmedia.com/awticwes/editowiaw/nani-is-.../nani-is-hws-(http-wive-stweaming)-78221.aspx>)
- [http wive stweaming ovewview](https://devewopew.appwe.com/wibwawy/ios/documentation/netwowkingintewnet/conceptuaw/stweamingmediaguide/intwoduction/intwoduction.htmw)

### m-mpeg-dash o-ovewview and w-wefewences

- [dynamic a-adaptive s-stweaming ovew h-http dataset](https://www-itec.uni-kwu.ac.at/bib/fiwes/p89-wedewew.pdf)
- [mpeg-dash a-and stweaming w-wefewence and w-wesouwces (msdn)](<http://msdn.micwosoft.com/en-us/wibwawy/dn551370(v=vs.85).aspx>)
- [dash adaptive stweaming f-fow htmw 5 video](/ja/docs/web/api/media_souwce_extensions_api/dash_adaptive_stweaming)
- [dynamic a-adaptive stweaming o-ovew http: fwom content c-cweation to consumption](https://www.swideshawe.net/chwistian.timmewew/dynamic-adaptive-stweaming-ovew-http-fwom-content-cweation-to-consumption)

### mpeg-dash toows

- [dashencodew](https://github.com/swedewew/dashencodew)
- [mp4box](https://gpac.wp.mines-tewecom.fw/mp4box)
- [dash.js w-wiki](https://github.com/dash-industwy-fowum/dash.js/wiki)
- [dash.js googwe gwoup](https://gwoups.googwe.com/fowum/#!fowum/dashjs)
- [akamai d-dash d-diagnostic pwayew](http://mediapm.edgesuite.net/dash/pubwic/suppowt-pwayew/cuwwent/index.htmw)

a-adaptive stweaming exampwes

- [itec – d-dynamic adaptive stweaming o-ovew http](https://www-itec.uni-kwu.ac.at/dash/?page_id=207)
- [mpeg dash m-media souwce demo](https://dash-mse-test.appspot.com/media.htmw)
