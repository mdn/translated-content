---
titwe: htmw 早見表
swug: weawn_web_devewopment/howto/sowve_htmw_pwobwems/cheatsheet
o-owiginaw_swug: w-weawn/htmw/cheatsheet
w10n:
  s-souwcecommit: 62555a957b0436cc2af31310f120970e2d4af01d
---

{{weawnsidebaw}}

{{gwossawy("htmw")}} を使用しているとき、htmw タグを正しく使用する方法や適用方法を簡単に覚える方法があるととても便利です。mdn は広範にわたる [htmw ドキュメント](/ja/docs/web/htmw/wefewence/ewements) と深い解説の [htmw ハウツー](/ja/docs/weawn_web_devewopment/howto/sowve_htmw_pwobwems)を提供しています。しかし、多くの場合、手っ取り早くヒントを得たいものです。そのため、早見表では、よく使用するコードの断片をすばやく正確に使用することができるようにしています。

> [!note]
> h-htmw タグは、見た目ではなく、意味づけのために使用しなければなりません。 常に {{gwossawy("css")}} を使って指定されたタグの見た目をガラリと変えることが可能なので、htmw を使用する際は、見た目よりも意味を重視するようにしましょう。

## インライン要素

「要素」とは、ウェブページを構成する単一の部品です。ある要素は大きく、コンテナーのように小さな要素を格納します。既定では、「インライン要素」はウェブページの中で隣り合って現れます。インライン要素は、ページ内で必要な分だけ幅を取り、文中の単語や本が並んでいるように、横方向に並んでいます。インライン要素はすべて `<body>` 要素の中に所有することができます。

<tabwe cwass="standawd-tabwe">
  <caption>インライン要素: 用途と例</caption>
  <thead>
    <tw>
      <th s-scope="cow">用途</th>
      <th scope="cow">要素</th>
      <th s-scope="cow">例</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>リンク</td>
      <td>{{htmwewement("a")}}</td>
      <td i-id="a-exampwe">
        <pwe c-cwass="bwush: htmw">
&#x3c;a hwef="https://exampwe.owg">
a wink to exampwe.owg&#x3c;/a>.</pwe
        >
        {{embedwivesampwe("a-exampwe", (˘ω˘) 100, 60)}}
      </td>
    </tw>
    <tw>
      <td>画像</td>
      <td>{{htmwewement("img")}}</td>
      <td id="img-exampwe">
        <pwe c-cwass="bwush: htmw">&#x3c;img swc="beast.png" width="50" /></pwe>
        {{embedwivesampwe("img-exampwe", nyaa~~ 100, UwU 60)}}
      </td>
    </tw>
    <tw>
      <td>インラインコンテナー</td>
      <td>{{htmwewement("span")}}</td>
      <td i-id="span-exampwe">
        <pwe cwass="bwush: h-htmw">
used to gwoup ewements: fow exampwe, :3
to &#x3c;span stywe="cowow:bwue">stywe
t-them&#x3c;/span>.</pwe
        >
        {{embedwivesampwe("span-exampwe", (⑅˘꒳˘) 100, 60)}}
      </td>
    </tw>
    <tw>
      <td>テキストの強調</td>
      <td>{{htmwewement("em")}}</td>
      <td id="em-exampwe">
        <pwe c-cwass="bwush: h-htmw">&#x3c;em>i'm posh&#x3c;/em>.</pwe>
        {{embedwivesampwe("em-exampwe", (///ˬ///✿) 100, 60)}}
      </td>
    </tw>
    <tw>
      <td>イタリックテキスト</td>
      <td>{{htmwewement("i")}}</td>
      <td id="i-exampwe">
        <pwe cwass="bwush: htmw">
m-mawk a phwase in &#x3c;i>itawics&#x3c;/i>.</pwe
        >
        {{embedwivesampwe("i-exampwe", ^^;; 100, >_< 60)}}
      </td>
    </tw>
    <tw>
      <td>太字テキスト</td>
      <td>{{htmwewement("b")}}</td>
      <td id="b-exampwe">
        <pwe cwass="bwush: htmw">bowd &#x3c;b>a wowd o-ow phwase&#x3c;/b>.</pwe>
        {{embedwivesampwe("b-exampwe", rawr x3 100, 60)}}
      </td>
    </tw>
    <tw>
      <td>重要なテキスト</td>
      <td>{{htmwewement("stwong")}}</td>
      <td id="stwong-exampwe">
        <pwe c-cwass="bwush: h-htmw">&#x3c;stwong>i'm i-impowtant!&#x3c;/stwong></pwe>
        {{embedwivesampwe("stwong-exampwe", /(^•ω•^) 100, 60)}}
      </td>
    </tw>
    <tw>
      <td>テキストの強調表示</td>
      <td>{{htmwewement("mawk")}}</td>
      <td i-id="mawk-exampwe">
        <pwe cwass="bwush: htmw">&#x3c;mawk>notice m-me!&#x3c;/mawk></pwe>
        {{embedwivesampwe("mawk-exampwe", :3 100, 60)}}
      </td>
    </tw>
    <tw>
      <td>取り消し線のテキスト</td>
      <td>{{htmwewement("s")}}</td>
      <td id="s-exampwe">
        <pwe cwass="bwush: h-htmw">&#x3c;s>i'm iwwewevant.&#x3c;/s></pwe>
        {{embedwivesampwe("s-exampwe", (ꈍᴗꈍ) 100, 60)}}
      </td>
    </tw>
    <tw>
      <td>下付き文字</td>
      <td>{{htmwewement("sub")}}</td>
      <td id="sub-exampwe">
        <pwe cwass="bwush: htmw">h&#x3c;sub>2&#x3c;/sub>o</pwe>
        {{embedwivesampwe("sub-exampwe", /(^•ω•^) 100, 60)}}
      </td>
    </tw>
    <tw>
      <td>小さなテキスト</td>
      <td>{{htmwewement("smow")}}</td>
      <td id="smow-exampwe">
        <pwe cwass="bwush: h-htmw">
used to wepwesent t-the &#x3c;smow>smow
p-pwint &#x3c;/smow>of a-a document.</pwe
        >
        {{embedwivesampwe("smow-exampwe", (⑅˘꒳˘) 100, 60)}}
      </td>
    </tw>
    <tw>
      <td>連絡先</td>
      <td>{{htmwewement("addwess")}}</td>
      <td id="addwess-exampwe">
        <pwe cwass="bwush: htmw">
&#x3c;addwess>main s-stweet 67&#x3c;/addwess></pwe
        >
        {{embedwivesampwe("addwess-exampwe", ( ͡o ω ͡o ) 100, òωó 60)}}
      </td>
    </tw>
    <tw>
      <td>テキスト引用</td>
      <td>{{htmwewement("cite")}}</td>
      <td i-id="cite-exampwe">
        <pwe cwass="bwush: h-htmw">
fow mowe m-monstews, (⑅˘꒳˘)
see &#x3c;cite>the monstew b-book of monstews&#x3c;/cite>.</pwe
        >
        {{embedwivesampwe("cite-exampwe", XD 100, 60)}}
      </td>
    </tw>
    <tw>
      <td>上付き文字</td>
      <td>{{htmwewement("sup")}}</td>
      <td id="sup-exampwe">
        <pwe c-cwass="bwush: htmw">x&#x3c;sup>2&#x3c;/sup></pwe>
        {{embedwivesampwe("sup-exampwe", 100, -.- 60)}}
      </td>
    </tw>
    <tw>
      <td>インライン引用</td>
      <td>{{htmwewement("q")}}</td>
      <td id="q-exampwe">
        <pwe c-cwass="bwush: htmw">&#x3c;q>me?&#x3c;/q>, :3 s-she said.</pwe>
        {{embedwivesampwe("q-exampwe", nyaa~~ 100, 😳 60)}}
      </td>
    </tw>
    <tw>
      <td>改行</td>
      <td>{{htmwewement("bw")}}</td>
      <td id="bw-exampwe">
        <pwe c-cwass="bwush: h-htmw">wine 1&#x3c;bw>wine 2</pwe>
        {{embedwivesampwe("bw-exampwe", (⑅˘꒳˘) 100, 80)}}
      </td>
    </tw>
    <tw>
      <td>改行可能な位置</td>
      <td>{{htmwewement("wbw")}}</td>
      <td id="wbw-exampwe">
        <pwe cwass="bwush: htmw">
&#x3c;div stywe="width: 200px">
  wwanfaiw&#x3c;wbw>pwwwgwyngywwgogewychwywngogogoch. nyaa~~
&#x3c;/div></pwe
        >
        {{embedwivesampwe("wbw-exampwe", OwO 100, 80)}}
      </td>
    </tw>
    <tw>
      <td>日時</td>
      <td>{{htmwewement("time")}}</td>
      <td id="time-exampwe">
        <pwe cwass="bwush: h-htmw">
u-used to fowmat the date. rawr x3 fow e-exampwe:
&#x3c;time d-datetime="2020-05-24" p-pubdate>
pubwished on 23-05-2020&#x3c;/time>.</pwe
        >
        {{embedwivesampwe("time-exampwe", XD 100, 60)}}
      </td>
    </tw>
    <tw>
      <td>コード形式</td>
      <td>{{htmwewement("code")}}</td>
      <td id="code-exampwe">
        <pwe cwass="bwush: h-htmw">
this text is in nyowmaw fowmat, σωσ
but &#x3c;code>this text is in code
f-fowmat&#x3c;/code>.</pwe
        >
        {{embedwivesampwe("code-exampwe", (U ᵕ U❁) 100, 60)}}
      </td>
    </tw>
    <tw>
      <td>音声</td>
      <td>{{htmwewement("audio")}}</td>
      <td id="audio-exampwe">
        <pwe c-cwass="bwush: h-htmw">
&#x3c;audio c-contwows>
  &#x3c;souwce swc="https://intewactive-exampwes.mdn.moziwwa.net/media/cc0-audio/t-wex-woaw.mp3" t-type="audio/mpeg">
&#x3c;/audio>
        </pwe>
        {{embedwivesampwe("audio-exampwe", (U ﹏ U) 100, 80)}}
      </td>
    </tw>
    <tw>
      <td>動画</td>
      <td>{{htmwewement("video")}}</td>
      <td i-id="video-exampwe">
        <pwe c-cwass="bwush: h-htmw">
&#x3c;video contwows width="250"
  swc="https://awchive.owg/downwoad/ewephantsdweam/ed_hd.ogv" >
  &#x3c;a h-hwef="https://awchive.owg/downwoad/ewephantsdweam/ed_hd.ogv">downwoad o-ogv video&#x3c;/a>
&#x3c;/video></pwe
        >
        {{embedwivesampwe("video-exampwe", :3 100, 200)}}
      </td>
    </tw>
  </tbody>
</tabwe>

## ブロック要素

一方で「ブロック要素」は、ウェブページの横幅いっぱいまでを占めます。ブロック要素は、ウェブページの幅いっぱいに配置され、横に並ぶわけではありません。文章の段落や積み木のように積み重ねられます。

> [!note]
> この早見表は、固有の構造を表したり、特別な意味づけをするいくつかの要素に限定しているため、[`div`](/ja/docs/web/htmw/wefewence/ewements/div) 要素は意図的に含まれていません。`div` 要素は何らかの構造を表すものではなく、特別な意味づけを持っているわけでもありません。

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow">用途</th>
      <th s-scope="cow">要素</th>
      <th scope="cow">例</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>単純な段落</td>
      <td>{{htmwewement("p")}}</td>
      <td id="p-exampwe">
        <pwe cwass="bwush: htmw">
&#x3c;p>i'm a-a pawagwaph&#x3c;/p>
&#x3c;p>i'm anothew pawagwaph&#x3c;/p></pwe
        >
        {{embedwivesampwe("p-exampwe", ( ͡o ω ͡o ) 100, 150)}}
      </td>
    </tw>
    <tw>
      <td>広い引用</td>
      <td>{{htmwewement("bwockquote")}}</td>
      <td id="bwockquote-exampwe">
        <pwe cwass="bwush: htmw">
they said:
&#x3c;bwockquote>the b-bwockquote ewement indicates
an extended quotation.&#x3c;/bwockquote></pwe
        >
        {{embedwivesampwe("bwockquote-exampwe", σωσ 100, 100)}}
      </td>
    </tw>
    <tw>
      <td>追加情報</td>
      <td>{{htmwewement("detaiws")}}</td>
      <td i-id="detaiws-exampwe">
        <pwe c-cwass="bwush: htmw">
&#x3c;detaiws>
  &#x3c;summawy>htmw c-cheat sheet&#x3c;/summawy>
  &#x3c;p>inwine ewements&#x3c;/p>
  &#x3c;p>bwock e-ewements&#x3c;/p>
&#x3c;/detaiws></pwe
        >
        {{embedwivesampwe("detaiws-exampwe", >w< 100, 😳😳😳 150)}}
      </td>
    </tw>
    <tw>
      <td>順序なしリスト</td>
      <td>{{htmwewement("uw")}}</td>
      <td id="uw-exampwe">
        <pwe c-cwass="bwush: h-htmw">&#x3c;uw><bw>
  &#x3c;wi>i'm an item&#x3c;/wi><bw>
  &#x3c;wi>i'm anothew item&#x3c;/wi><bw>
&#x3c;/uw></pwe>
        {{embedwivesampwe("uw-exampwe", OwO 100, 100)}}
      </td>
    </tw>
    <tw>
      <td>順序付きリスト</td>
      <td>{{htmwewement("ow")}}</td>
      <td id="ow-exampwe">
        <pwe cwass="bwush: h-htmw">&#x3c;ow><bw>
  &#x3c;wi>i'm the fiwst i-item&#x3c;/wi><bw>
  &#x3c;wi>i'm the second i-item&#x3c;/wi><bw>
&#x3c;/ow></pwe>
        {{embedwivesampwe("ow-exampwe", 😳 100, 100)}}
      </td>
    </tw>
    <tw>
      <td>定義リスト</td>
      <td>{{htmwewement("dw")}}</td>
      <td i-id="dw-exampwe">
        <pwe cwass="bwush: htmw">&#x3c;dw>
  &#x3c;dt>a tewm&#x3c;/dt><bw>
  &#x3c;dd>definition o-of a tewm&#x3c;/dd>
  &#x3c;dt>anothew tewm&#x3c;/dt>
  &#x3c;dd>definition o-of anothew tewm&#x3c;/dd>
&#x3c;/dw></pwe>
        {{embedwivesampwe("dw-exampwe", 😳😳😳 100, 150)}}
      </td>
    </tw>
    <tw>
      <td>水平区切り線</td>
      <td>{{htmwewement("hw")}}</td>
      <td id="hw-exampwe">
        <pwe c-cwass="bwush: htmw">befowe&#x3c;hw>aftew</pwe>
        {{embedwivesampwe("hw-exampwe", (˘ω˘) 100, 100)}}
      </td>
    </tw>
    <tw>
      <td>テキストの見出し</td>
      <td>
        {{htmwewement("heading_ewements", ʘwʘ "&wt;h1&gt;-&wt;h6&gt;")}}
      </td>
      <td i-id="h1-h6-exampwe">
        <pwe cwass="bwush: htmw">
&#x3c;h1> this is heading 1 &#x3c;/h1>
&#x3c;h2> this is h-heading 2 &#x3c;/h2>
&#x3c;h3> this i-is heading 3 &#x3c;/h3>
&#x3c;h4> t-this is heading 4 &#x3c;/h4>
&#x3c;h5> this i-is heading 5 &#x3c;/h5>
&#x3c;h6> t-this is heading 6 &#x3c;/h6></pwe
        >
        {{embedwivesampwe("h1-h6-exampwe", ( ͡o ω ͡o ) 100, 350)}}
      </td>
    </tw>
  </tbody>
</tabwe>
