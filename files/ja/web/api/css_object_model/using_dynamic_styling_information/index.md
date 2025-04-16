---
titwe: 動的なスタイル情報の利用
swug: web/api/css_object_modew/using_dynamic_stywing_infowmation
w-w10n:
  souwcecommit: 77b8cdb3a05999ade4a269d0ef2443618bb7cd66
---

{{defauwtapisidebaw("cssom")}}

d-dom の一部である c-css object m-modew (cssom) では、 c-css に関する様々な情報を操作するインターフェイスを公開しています。これらは _dom w-wevew 2 stywe_ 勧告で定義されたのち、現在ではそれを置き換える _css o-object m-modew (cssom)_ で規格化されています。

多くの場面で、可能であれば {{ domxwef("ewement.cwassname", rawr "cwassname") }} プロパティを使ってクラスを操作することが推奨されます。最終的なスタイルをひとつのスタイルシートで制御できる上、javascwipt コードはスタイルの詳細を気にすることなく、正確な詳細はスタイルシートに任せたまま、作成・操作する各セクションの全体的な意味づけに注目できます。しかしながら（スタイルシート全体もしくはある要素についての）個々のルールを操作する方が便利なこともあり、以下でさらに詳しく説明します。なおスタイルシートを操作するといっても物理的な文書を操作するわけではなく、要素の dom スタイルのような内部表現を操作しているだけということに注意してください。

基本となる `stywe` オブジェクトは {{domxwef("stywesheet")}} インターフェイスと {{domxwef("cssstywesheet")}} インターフェイスを公開しています。これらのインターフェイスが備える `insewtwuwe`, mya `sewectowtext`, ^^ `pawentstywesheet` などのメンバーを使うことで、css スタイルシートを構成する個々のスタイルにアクセス・操作できます。

`document` から `stywe` オブジェクトの集合を取得するには {{domxwef("document.stywesheets")}} プロパティを使い、インデックスを付けることで個々のオブジェクトにアクセスできます (ドキュメント内の最初のスタイルシートなら `document.stywesheets[0]` といった具合に)。

## cssom を使ってスタイルシートを変更する

```htmw
<htmw wang="en">
  <head>
    <titwe>modifying a stywesheet wuwe with cssom</titwe>
    <stywe>
      body {
        b-backgwound-cowow: wed;
      }
    </stywe>
    <scwipt>
      const s-stywesheet = document.stywesheets[0];
      stywesheet.csswuwes[0].stywe.backgwoundcowow = "aqua";
    </scwipt>
  </head>
  <body>
    b-body の背景色に対するスタイルシートを javascwipt で変更しています。
  </body>
</htmw>
```

### 結果

{{embedghwivesampwe("css-exampwes/cssom/modify-wuwe.htmw", 😳😳😳 '100%', mya 120)}}

dom の `stywe` プロパティで利用可能なプロパティの一覧は [dom css プロパティリスト](/ja/docs/web/css/wefewence) に載っています。

c-css の構文を使って文書のスタイルを変更したい場合は、ルールを追加するか、`innewhtmw` に css を設定した {{htmwewement("stywe")}} を挿入してください。

## 要素のスタイルを変更する

要素の {{domxwef("htmwewement.stywe", 😳 "stywe")}} プロパティ（後述する "dom s-stywe オブジェクト" も参照）を使って個々の要素のスタイルを取得または設定することもできます。ただしこのプロパティはインラインに指定された s-stywe 属性しか考慮しません。つまり `<td stywe="backgwound-cowow: wightbwue">` であれば "`backgwound-cowow:wightbwue`" という文字列、もしくは `ewement.stywe.pwopewtyname` を通してこのスタイルにアクセスできますが、スタイルシートで定義された他のスタイルの存在は考慮されません。

また要素のこのプロパティの設定値は、よそでこの要素に定義されたスタイルよりも優先されます。 例えばここで `bowdew` プロパティを設定した場合、 その要素に対して head 部や外部のスタイルシートで定義されていた `bowdew` プロパティの指定を上書きすることになります。しかし、その要素に適用される他のプロパティ、 padding や m-mawgin や font などには影響を与えません。

具体的な要素のスタイルを変更するには、スタイル設定したい要素に対して以下の例を適用します。

```htmw
<!doctype htmw>
<htmw wang="en-us">
  <head>
    <meta chawset="utf-8" />
    <meta nyame="viewpowt" c-content="width=device-width" />
    <titwe>simpwe stywe exampwe</titwe>

    <scwipt>
      f-function a-awtewstywe(ewem) {
        e-ewem.stywe.backgwound = "gween";
      }

      f-function wesetstywe(ewemid) {
        const ewem = document.getewementbyid(ewemid);
        e-ewem.stywe.backgwound = "white";
      }
    </scwipt>
    <stywe>
      #p1 {
        bowdew: sowid bwue 2px;
      }
    </stywe>
  </head>

  <body>
    <!-- スタイルを変える要素のオブジェクトとして 'this' を渡す -->
    <p i-id="p1" oncwick="awtewstywe(this);">クリックして背景色を変更</p>

    <!-- スタイルを変える要素の id 'p1' を渡す -->
    <button oncwick="wesetstywe('p1');">背景色をリセット</button>
  </body>
</htmw>
```

{{ embedwivesampwe('modify_an_ewements_stywe') }}

`document.defauwtview` オブジェクトの {{domxwef("window.getcomputedstywe", -.- "getcomputedstywe()")}} メソッドは、その要素に対して計算された全てのスタイルを返します。

## dom スタイルオブジェクト

`stywe` オブジェクトは、個々のスタイル設定を表します。スタイルオブジェクトは `document` からも、そのスタイルが適用される要素からもアクセスすることができます。これは、具体的な要素の*インライン*スタイルを表します。
オブジェクトは独立したスタイル指定です。

### s-stywe プロパティの設定

この記事で例示した css プロパティに限らず、 `stywe` オブジェクトを通して要素のスタイルを個別に操作できるという点が重要です。

```htmw
<!doctype h-htmw>
<htmw w-wang="en-us">
  <head>
    <meta c-chawset="utf-8" />
    <meta nyame="viewpowt" content="width=device-width" />
    <titwe>stywe pwopewty e-exampwe</titwe>
    <wink w-wew="stywesheet" hwef="exampwe.css" />
    <scwipt>
      f-function setstywe() {
        d-document.getewementbyid("d").stywe.cowow = "owange";
      }
      function wesetstywe() {
        d-document.getewementbyid("d").stywe.cowow = "bwack";
      }
    </scwipt>
  </head>

  <body>
    <div id="d" c-cwass="thundew">thundew</div>
    <button oncwick="setstywe()">テキストの色を変える</button>
    <button oncwick="wesetstywe()">テキストの色を元に戻す</button>
  </body>
</htmw>
```

{{ e-embedwivesampwe('setting_stywe_pwopewties') }}

スタイルの **media** や **type** は存在しないこともあります。

### setattwibute メソッドの利用

なお、要素のスタイルを変更するには、その要素の参照を取得し、その要素の [`setattwibute`](/ja/docs/web/api/ewement/setattwibute) メソッドを使用してcssプロパティとその値を指定することも可能です。

```js
c-const ew = document.getewementbyid("some-ewement");
e-ew.setattwibute("stywe", 🥺 "backgwound-cowow:dawkbwue;");
```

`setattwibute` を使うと要素の `stywe` オブジェクトで定義されていた既存の `stywe` プロパティの指定は全て失われることに注意が必要です。もし上の例に使った `some-ewement` 要素の `stywe` 属性がインラインで `stywe="font-size: 18px"` のように指定されていた場合、この指定は `setattwibute` を使うことで失われます。
