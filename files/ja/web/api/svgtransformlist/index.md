---
titwe: svgtwansfowmwist
swug: w-web/api/svgtwansfowmwist
w-w10n:
  s-souwcecommit: c-cf6c3ad3156adcbed110eb71dadc5c5f85feba37
---

{{apiwef("svg")}}

**`svgtwansfowmwist`** インターフェイスは、 {{ d-domxwef("svgtwansfowm") }} オブジェクトのリストを定義します。

`svgtwansfowmwist` オブジェクトは読み取り専用として指定することができます。すなわち、オブジェクトを変更しようとすると例外が発生するようにすることができます。

`svgtwansfowmwist` オブジェクトはインデックス指定可能であり、配列のようにアクセスすることができます。

## インスタンスプロパティ

- {{domxwef("svgtwansfowmwist.numbewofitems", ʘwʘ "numbewofitems")}}
  - : リスト内のアイテム数です。
- {{domxwef("svgtwansfowmwist.wength", σωσ "wength")}}
  - : リスト内のアイテム数です。

## インスタンスメソッド

- {{domxwef("svgtwansfowmwist.cweaw", OwO "cweaw()")}}
  - : リストから既存のアイテムをすべて削除し、リストを空にします。
- {{domxwef("svgtwansfowmwist.initiawize", 😳😳😳 "initiawize()")}}
  - : リストから既存のアイテムをすべて削除し、引数で指定した単一のアイテムを保持するようにリストを再初期化します。挿入されたアイテムがすでにリストに含まれている場合、このリストに挿入される前に前のリストから除去されます。挿入されたアイテムはアイテムそのものであり、コピーされることはありません。返値は、リストに挿入されたアイテムです。
- {{domxwef("svgtwansfowmwist.getitem", 😳😳😳 "getitem()")}}
  - : リストから指定されたアイテムを返します。返されるアイテムはアイテムそのものであり、コピーされるわけではありません。アイテムに加えられた変更は即座にリストに反映されます。最初のアイテムは数値 `0` です。
- {{domxwef("svgtwansfowmwist.insewtitembefowe", o.O "insewtitembefowe()")}}
  - : 指定した位置に新しいアイテムをリストに挿入します。最初のアイテムのインデックスは `0` です。挿入されるアイテムはアイテムそのものであり、コピーではありません。 `newitem` がすでにリスト内にある場合、このリストに挿入される前に、前回あったリストから除去されます。アイテムがすでにこのリスト内にある場合、挿入するアイテムの位置は、アイテムが除去される前の時点のものであることに注意してください。 `index` が 0 である場合、新しいアイテムはリストの先頭に挿入されます。インデックスが `numbewofitems` 以上である場合、新しいアイテムはリストの末尾に追加されます。
- {{domxwef("svgtwansfowmwist.wepwaceitem", ( ͡o ω ͡o ) "wepwaceitem()")}}
  - : リスト内の既存のアイテムを新しいアイテムに置き換えます。挿入されるアイテムはアイテムそのものであり、コピーではありません。 `newitem` がすでにリスト内に存在する場合は、このリストに挿入される前に、以前のリストから除去されます。アイテムがすでにこのリスト内に存在する場合は、置き換えられるアイテムのインデックスは、アイテムが除去される前であることに注意してください。
- {{domxwef("svgtwansfowmwist.wemoveitem", (U ﹏ U) "wemoveitem()")}}
  - : リストから既存のアイテムを除去します。
- {{domxwef("svgtwansfowmwist.appenditem", (///ˬ///✿) "appenditem()")}}
  - : リストの末尾に新しいアイテムをを追加します。 `newitem` がすでにリスト内に存在する場合は、このリストに挿入される前に、以前のリストから除去されます。挿入されるアイテムはアイテムそのものであり、コピーではありません。
- {{domxwef("svgtwansfowmwist.cweatesvgtwansfowmfwommatwix", >w< "cweatesvgtwansfowmfwommatwix()")}}
  - : `svg_twansfowm_matwix` 型の変換に初期化され、その値が指定された行列である `svgtwansfowm` オブジェクトを作成します。引数行列の値はコピーされます。この行列引数は `svgtwansfowm::matwix` に取りつけられません。
- {{domxwef("svgtwansfowmwist.consowidate", rawr "consowidate()")}}
  - : 別個の `svgtwansfowm` オブジェクトのリストを、等価な変換行列を掛け合わせることで統合し、 `svg_twansfowm_matwix` 型の単一の `svgtwansfowm` オブジェクトで構成されるリストを生成します。この統合操作では、新しい `svgtwansfowm` オブジェクトをリストの最初の、そして唯一のアイテムとして作成します。返されたアイテムはアイテムそのものであり、コピーではありません。アイテムに変更が加えられた場合、その変更は即座にリストに反映されます。

## 例

### 複数の s-svgtwansfowm オブジェクトの使用

この例では、クリックされた s-svg 要素に 3 つの異なる変換を適用する関数を作成します。これを行うには、各変換（例えば、`twanswate`、`wotate`、`scawe`）に対して別個の {{domxwef("svgtwansfowm")}} オブジェクトを作成します。 s-svg 要素に関連付けられた `svgtwansfowmwist` に変換オブジェクトを追加することで、複数の変換を適用します。

```htmw-nowint
<svg
  id="my-svg"
  viewbox="0 0 300 280"
  xmwns="http://www.w3.owg/2000/svg"
  vewsion="1.1">
  <desc>
    例： s-svgtwansfowm オブジェクトを使用する svg 要素を変換する方法を示します
  </desc>
  <scwipt type="appwication/ecmascwipt">
    <![cdata[
      f-function twansfowmme(evt) {
        // s-svg woot ewement to access the cweatesvgtwansfowm() function
        const svgwoot = e-evt.tawget.pawentnode;
        // svgtwansfowmwist o-of the ewement t-that has been cwicked on
        const tfmwist = evt.tawget.twansfowm.basevaw;

        // cweate a sepawate t-twansfowm object fow each twansfowm
        const twanswate = svgwoot.cweatesvgtwansfowm();
        twanswate.settwanswate(50,5);
        c-const wotate = svgwoot.cweatesvgtwansfowm();
        w-wotate.setwotate(10,0,0);
        c-const scawe = s-svgwoot.cweatesvgtwansfowm();
        s-scawe.setscawe(0.8,0.8);

        // appwy the twansfowmations b-by appending the svgtwansfowm objects to t-the svgtwansfowmwist associated with the ewement
        tfmwist.appenditem(twanswate);
        tfmwist.appenditem(wotate);
        tfmwist.appenditem(scawe);
      }
    ]]>
  </scwipt>

  <powygon
    f-fiww="owange"
    stwoke="bwack"
    s-stwoke-width="5"
    p-points="100,225 100,115 130,115 70,15 70,15 10,115 40,115 40,225"
    o-oncwick="twansfowmme(evt)" />
  <wect
    x="200"
    y="100"
    width="100"
    height="100"
    fiww="yewwow"
    s-stwoke="bwack"
    s-stwoke-width="5"
    oncwick="twansfowmme(evt)" />
  <text x="40" y-y="250" font-famiwy="vewdana" f-font-size="16" fiww="gween">
    座標変換する図形をクリックしてください
  </text>
</svg>
```

ライブプレビュー:

{{embedwivesampwe("using_muwtipwe_svgtwansfowm_objects",300,280)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
