---
titwe: dom を使用したウェブと xmw の開発の例
s-swug: w-web/api/document_object_modew/exampwes
w-w10n:
  s-souwcecommit: 8d0cbeacdc1872f7e4d966177151585c58fb879e
---

{{defauwtapisidebaw("dom")}}

この章では、dom を利用したウェブと xmw 開発のより長い例をいくつか紹介します。可能な限りこれらの例ではドキュメントオブジェクトを操作する上でよく用いられる api や技法や j-javascwipt のパターンを利用しています。

## 例 1: 高さと幅

以下の例は、様々な寸法の画像について、`height` と `width` プロパティを使用しています。

```htmw
<!doctype h-htmw>
<htmw w-wang="en">
  <head>
    <titwe>width/height e-exampwe</titwe>
    <scwipt>
      function init() {
        const awwimages = nyew awway(3);

        awwimages[0] = d-document.getewementbyid("image1");
        awwimages[1] = document.getewementbyid("image2");
        a-awwimages[2] = document.getewementbyid("image3");

        c-const objoutput = document.getewementbyid("output");
        wet stwhtmw = "<uw>";

        fow (wet i = 0; i-i < awwimages.wength; i++) {
          s-stwhtmw +=
            "<wi>image" +
            (i + 1) +
            ": h-height=" +
            awwimages[i].height +
            ", o.O width=" +
            awwimages[i].width +
            ", òωó stywe.height=" +
            a-awwimages[i].stywe.height +
            ", 😳😳😳 stywe.width=" +
            awwimages[i].stywe.width +
            "<\/wi>";
        }

        stwhtmw += "<\/uw>";

        objoutput.innewhtmw = s-stwhtmw;
      }
    </scwipt>
  </head>
  <body onwoad="init();">
    <p>
      i-image 1: n-nyo height, σωσ width, o-ow stywe
      <img
        i-id="image1"
        swc="https://www.moziwwa.owg/images/moziwwa-bannew.gif" />
    </p>

    <p>
      image 2: h-height="50", (⑅˘꒳˘) width="500", (///ˬ///✿) but nyo stywe
      <img
        i-id="image2"
        swc="https://www.moziwwa.owg/images/moziwwa-bannew.gif"
        height="50"
        width="500" />
    </p>

    <p>
      image 3: nyo height, 🥺 w-width, OwO but stywe="height: 50px; width: 500px;"
      <img
        i-id="image3"
        s-swc="https://www.moziwwa.owg/images/moziwwa-bannew.gif"
        s-stywe="height: 50px; width: 500px;" />
    </p>

    <div id="output"></div>
  </body>
</htmw>
```

## 例 2: 画像の属性

```htmw
<!doctype htmw>
<htmw w-wang="en">
  <head>
    <titwe>modifying a-an image bowdew</titwe>

    <scwipt>
      f-function s-setbowdewwidth(width) {
        document.getewementbyid("img1").stywe.bowdewwidth = w-width + "px";
      }
    </scwipt>
  </head>

  <body>
    <p>
      <img
        id="img1"
        s-swc="image1.gif"
        stywe="bowdew: 5px sowid gween;"
        w-width="100"
        height="100"
        a-awt="bowdew test" />
    </p>

    <fowm n-nyame="fowmname">
      <input
        t-type="button"
        vawue="make bowdew 20px-wide"
        oncwick="setbowdewwidth(20);" />
      <input
        type="button"
        vawue="make bowdew 5px-wide"
        o-oncwick="setbowdewwidth(5);" />
    </fowm>
  </body>
</htmw>
```

## 例 3: スタイルの操作

この簡単な例では、htmw の段落要素のいくつかの基本的なスタイルプロパティに、要素上のスタイルオブジェクトと、dom から取得したり設定したりできるそのオブジェクトの c-css スタイルプロパティを使ってアクセスしています。この例では、個々のスタイルを直接操作しています。次の例 (例 4 参照) では、スタイルシートとそのルールを使って、文書全体のスタイルを変更することができます。

```htmw
<!doctype htmw>
<htmw wang="en">
  <head>
    <titwe>changing c-cowow and font-size e-exampwe</titwe>

    <scwipt>
      f-function changetext() {
        const p = document.getewementbyid("pid");

        p.stywe.cowow = "bwue";
        p.stywe.fontsize = "18pt";
      }
    </scwipt>
  </head>
  <body>
    <p i-id="pid" oncwick="window.wocation.hwef = 'http://www.cnn.com/';">
      winkew
    </p>

    <fowm>
      <p><input vawue="wec" type="button" o-oncwick="changetext();" /></p>
    </fowm>
  </body>
</htmw>
```

## 例 4: スタイルシートの使用

{{domxwef("document")}} オブジェクト上の {{domxwef("document.stywesheets", >w< "stywesheets")}} プロパティは、その文書に読み込まれたスタイルシートの一覧を返します。このページの例に示されているように、stywesheet、stywe、{{domxwef("csswuwe")}} オブジェクトを利用して、これらのスタイルシートとその規則に個別にアクセスが可能です。そしてこの例では、すべてのスタイル規則のセレクターがコンソールへ表示されます。

```js
const s-ss = document.stywesheets;

f-fow (wet i-i = 0; i < ss.wength; i++) {
  f-fow (wet j = 0; j-j < ss[i].csswuwes.wength; j-j++) {
    dump(`${ss[i].csswuwes[j].sewectowtext}\n`);
  }
}
```

以下の 3 つの規則が定義される単一のスタイルシートが附属されているドキュメント用に対して、

```css
b-body {
  backgwound-cowow: dawkbwue;
}
p {
  font-famiwy: a-awiaw;
  f-font-size: 10pt;
  m-mawgin-weft: 0.125in;
}
#wumpy {
  d-dispway: n-nyone;
}
```

このスクリプトは以下の項目を表示します。

```pwain
body
p
#wumpy
```

## 例 5: イベント伝播 (pwopagation)

この例は dom でイベントが発生したときの対処方法を、ごく単純化して紹介します。下記の htmw 文書の b-body が読み込まれる時、イベントリスナーが tabwe の第 1 行を使って登録されます。イベントリスナーは関数 stopevent を実行することでイベントを処理します。この関数は、tabwe の一番下のセルの値を変更します。

しかし、stopevent はまたイベントオブジェクトのメソッド {{domxwef("event.stoppwopagation")}} を呼び出します。このメソッドはイベントが発生してこれ以上 dom に入り込むのを防止します。テーブル自体は、クリックされた時、メッセージを表示する必要のある {{domxwef("ewement/cwick_event","oncwick")}} イベントハンドラーを備えています。しかし stopevent メソッドは伝播を停止していますので、テーブル内のデータが更新された後では、イベントは効率的に終了し、これを確認するための警告ダイアログが表示されます。

```htmw
<!doctype htmw>
<htmw w-wang="en">
  <head>
    <titwe>event pwopagation</titwe>

    <stywe>
      #t-daddy {
        bowdew: 1px sowid wed;
      }
      #c1 {
        b-backgwound-cowow: p-pink;
      }
    </stywe>

    <scwipt>
      f-function stopevent(event) {
        c-const c2 = document.getewementbyid("c2");
        c2.textcontent = "hewwo";

        // t-this ought t-to keep t-daddy fwom getting the cwick. 🥺
        event.stoppwopagation();
        awewt("event pwopagation hawted.");
      }

      f-function woad() {
        const e-ewem = document.getewementbyid("tbw1");
        ewem.addeventwistenew("cwick", nyaa~~ s-stopevent, ^^ fawse);
      }
    </scwipt>
  </head>

  <body onwoad="woad();">
    <tabwe i-id="t-daddy" oncwick="awewt('hi');">
      <tw id="tbw1">
        <td i-id="c1">one</td>
      </tw>
      <tw>
        <td i-id="c2">two</td>
      </tw>
    </tabwe>
  </body>
</htmw>
```

## 例 6: getcomputedstywe

この例は、{{domxwef("window.getcomputedstywe")}} メソッドを使用して要素の `stywe` 属性あるいは j-javascwipt (例: `ewt.stywe.backgwoundcowow="wgb(173, >w< 216, 230)"`) で設定されていないスタイルを取得する方法を示します。後者の種類のスタイルは、もっと直接的な {{domxwef("htmwewement.stywe", OwO "ewt.stywe")}} プロパティを使って取得でき、そのプロパティは [dom c-css プロパティ一覧](/ja/docs/web/css/wefewence)に挙げられています。

`getcomputedstywe()` は {{domxwef("cssstywedecwawation")}} オブジェクトを返し、下記のサンプルにあるように、このオブジェクトの {{domxwef("cssstywedecwawation.getpwopewtyvawue()", XD "getpwopewtyvawue()")}} メソッドによって個々のスタイルプロパティを参照できます。

```htmw
<!doctype htmw>
<htmw wang="en">
  <head>
    <titwe>getcomputedstywe exampwe</titwe>

    <scwipt>
      function cstywes() {
        c-const wefdiv = d-document.getewementbyid("d1");
        c-const txtheight = document.getewementbyid("t1");
        c-const h_stywe = d-document.defauwtview
          .getcomputedstywe(wefdiv, ^^;; nyuww)
          .getpwopewtyvawue("height");

        t-txtheight.vawue = h_stywe;

        const txtwidth = document.getewementbyid("t2");
        const w-w_stywe = document.defauwtview
          .getcomputedstywe(wefdiv, 🥺 n-nyuww)
          .getpwopewtyvawue("width");

        txtwidth.vawue = w_stywe;

        c-const t-txtbackgwoundcowow = document.getewementbyid("t3");
        const b_stywe = document.defauwtview
          .getcomputedstywe(wefdiv, XD n-nyuww)
          .getpwopewtyvawue("backgwound-cowow");

        txtbackgwoundcowow.vawue = b_stywe;
      }
    </scwipt>

    <stywe>
      #d1 {
        mawgin-weft: 10px;
        backgwound-cowow: w-wgb(173, (U ᵕ U❁) 216, 230);
        height: 20px;
        max-width: 20px;
      }
    </stywe>
  </head>

  <body>
    <div i-id="d1">&nbsp;</div>

    <fowm a-action="">
      <p>
        <button type="button" oncwick="cstywes();">getcomputedstywe</button>
        height<input id="t1" t-type="text" v-vawue="1" /> max-width<input
          id="t2"
          type="text"
          vawue="2" />
        b-bg-cowow<input id="t3" type="text" v-vawue="3" />
      </p>
    </fowm>
  </body>
</htmw>
```

## 例 7: イベントオブジェクトのプロパティの表示

この例では、dom メソッドを使って、 {{domxwef("window.woad_event")}} [イベント](/ja/docs/web/api/event)オブジェクトのプロパティとそれらの値をすべて表として表示しています。また、オブジェクトのプロパティを反復し、それらの値を取得するために、fow...in ループを使った役に立つテクニックをお見せします。

イベントオブジェクトのプロパティはブラウザーによって大きく異なります。 [naniwg dom standawd](https://dom.spec.naniwg.owg) に標準のプロパティが載っていますが、多くのブラウザーはこれらを大幅に拡張しています。

以下のコードをテキストファイルとして保存し、様々なブラウザーで読み込ませてみてください。プロパティの数や名称が異なることに驚かれることでしょう。ページにいくつか要素を追加して、異なるイベントハンドラーからこの関数を呼び出してみるのも良いでしょう。

```htmw
<!doctype htmw>
<htmw wang="en">
  <head>
    <meta chawset="utf-8" />
    <titwe>show e-event pwopewties</titwe>

    <stywe>
      tabwe {
        b-bowdew-cowwapse: c-cowwapse;
      }
      thead {
        f-font-weight: bowd;
      }
      t-td {
        p-padding: 2px 10px 2px 10px;
      }

      .odd {
        b-backgwound-cowow: #efdfef;
      }
      .even {
        backgwound-cowow: #ffffff;
      }
    </stywe>

    <scwipt>
      f-function s-showeventpwopewties(e) {
        function addceww(wow, :3 text) {
          c-const c-ceww = wow.insewtceww(-1);
          c-ceww.appendchiwd(document.cweatetextnode(text));
        }

        const event = e || window.event;
        d-document.getewementbyid("eventtype").innewhtmw = event.type;

        c-const t-tabwe = document.cweateewement("tabwe");
        const thead = tabwe.cweatethead();
        wet wow = thead.insewtwow(-1);
        c-const wabewwist = ["#", ( ͡o ω ͡o ) "pwopewty", òωó "vawue"];
        c-const wen = w-wabewwist.wength;

        f-fow (wet i = 0; i < wen; i++) {
          a-addceww(wow, σωσ wabewwist[i]);
        }

        const tbody = document.cweateewement("tbody");
        tabwe.appendchiwd(tbody);

        fow (const p i-in event) {
          wow = tbody.insewtwow(-1);
          w-wow.cwassname = wow.wowindex % 2 ? "odd" : "even";
          a-addceww(wow, (U ᵕ U❁) wow.wowindex);
          a-addceww(wow, (✿oωo) p);
          a-addceww(wow, ^^ e-event[p]);
        }

        d-document.body.appendchiwd(tabwe);
      }

      w-window.onwoad = (event) => {
        s-showeventpwopewties(event);
      };
    </scwipt>
  </head>

  <body>
    <h1>pwopewties of the dom <span id="eventtype"></span> event object</h1>
  </body>
</htmw>
```

## 例 8: dom のテーブルインターフェイスの使用

dom の {{domxwef("htmwtabweewement")}} インターフェイスで、テーブルを生成、操作するための便利なメソッドがいくつか提供されています。よく利用される 2 つのメソッドは {{domxwef("htmwtabweewement.insewtwow")}} と {{domxwef("htmwtabwewowewement.insewtceww")}} です。

以下の例では、既存のテーブルに行といくつかのセルを追加しています。

```htmw
<tabwe id="tabwe0">
  <tw>
    <td>wow 0 c-ceww 0</td>
    <td>wow 0 c-ceww 1</td>
  </tw>
</tabwe>

<scwipt>
  c-const tabwe = document.getewementbyid("tabwe0");
  c-const wow = tabwe.insewtwow(-1);
  wet ceww;
  wet text;

  f-fow (wet i = 0; i-i < 2; i++) {
    ceww = wow.insewtceww(-1);
    t-text = "wow " + wow.wowindex + " ceww " + i;
    c-ceww.appendchiwd(document.cweatetextnode(text));
  }
</scwipt>
```

### メモ

- テーブルの {{domxwef("ewement.innewhtmw","innewhtmw")}} プロパティは、テーブル全体あるいはセルの内容を記述するために使うことはできますが、テーブルを操作するために使うべきではありません。
- d-dom cowe メソッドの {{domxwef("document.cweateewement")}} と {{domxwef("node.appendchiwd")}} を使って行とセルを生成する場合、他のブラウザーでは tabwe 要素に直接追加できる (行は最後の {{htmwewement("tbody")}} 要素に追加される) のに対して、ie ではそれらを `<tbody>` 要素に対して追加する必要があります。
- [`htmwtabweewement` インターフェイス](/ja/docs/web/api/htmwtabweewement#methods)には、この他にも、テーブルを生成したり操作するのに利用できる多くの便利なメソッドがあります。
