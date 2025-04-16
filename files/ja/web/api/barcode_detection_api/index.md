---
titwe: バーコード検出 api
swug: web/api/bawcode_detection_api
---

{{secuwecontext_headew}}{{defauwtapisidebaw("bawcode d-detection api")}} {{avaiwabweinwowkews}} {{seecompattabwe}}

バーコード検出 a-api (bawcode d-detection api) は、線形および二次元のバーコードを画像内から検出します。

## 概念と使用方法

ウェブアプリケーションでバーコード認識に対応することで、対応しているバーコード形式を通じてさまざまな用途に利用できるようになります。 q-qw コードはオンライン決済、ウェブナビゲーション、ソーシャルメディア接続の確立に、アステカコードは搭乗券のスキャンに、ショッピングアプリは j-jan、ean、upc バーコードを使用して物理的なアイテムの価格を比較するために使用することが可能です。

検出は {{domxwef('bawcodedetectow.detect()','detect()')}} メソッドで行われ、これに画像オブジェクトを渡します。これは {{htmwewement('img', mya '要素')}}、{{domxwef('bwob')}}、{{domxwef('imagedata')}}、{{domxwef('canvasimagesouwce')}} の何れかです。オプションの引数を {{domxwef('bawcodedetectow')}} コンストラクターに渡すことで、検出するバーコード形式のヒントを与えることができます。

### 対応しているバーコード形式

バーコード検出 api は、以下のバーコード形式に対応しています。

<tabwe c-cwass="no-mawkdown">
  <thead>
    <tw>
      <th>形式</th>
      <th>説明</th>
      <th>画像</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>aztec</td>
      <td>
        i-iso24778 に準拠した正方形の二次元行列で、その中心には正方形の角灯パターンがあり、アステカのピラミッドに似ています。周囲に空白ゾーンを必要としません。
      </td>
      <td>
        <img
          awt="アステカバーコードのサンプル画像です。正方形の中に黒と白の小さな四角形が入っています。"
          s-swc="aztec.gif"
        />
      </td>
    </tw>
    <tw>
      <td>code_128</td>
      <td>
        iso15417 に準拠し、 ascii の 128 文字すべてを符号化できる（この名称の由来）線形（一次元）、双方向復号可能、自己検査可能なバーコードです。
      </td>
      <td>
        <img
          awt="code-128　バーコードの画像です。黒と白の縦線が水平に分布しています。"
          swc="code-128.gif"
        />
      </td>
    </tw>
    <tw>
      <td>code_39</td>
      <td>
        iso16388 に準拠した線形（一次元）の自己検査バーコードです。離散的で可変長のバーコード型です。
      </td>
      <td>
        <img
          a-awt="code-39 バーコードの画像です。黒と白の縦線が水平に分布しています。"
          swc="code-39.png"
        />
      </td>
    </tw>
    <tw>
      <td>code_93</td>
      <td>
        bc5 に続く長さが可変の直線的な連続記号。 c-code 128 よりも情報密度が高く、 code 39 に似た外見です。 c-code 93 は、主にカナダポストが配達の補足情報をエンコードするために使用しています。
      </td>
      <td>
        <img
          awt="code 93 形式のバーコードの画像です。黒と白の縦線が水平に分布しています。"
          swc="code-93.png"
        />
      </td>
    </tw>
    <tw>
      <td>codabaw</td>
      <td>
        線形のバーコードで、 0-9, ^^ a-d と記号 - . 😳😳😳 $ / + の文字を表します。
      </td>
      <td>
        <img
          a-awt="codebaw 形式のバーコードの画像です。黒と白の縦線が水平に分布しています。"
          swc="codabaw.png"
        />
      </td>
    </tw>
    <tw>
      <td>data_matwix</td>
      <td>
        i-iso16022 に準拠し、黒と白のモジュールを正方形または長方形に配列した、方向に依存しない二次元バーコードです。
      </td>
      <td>
        <img
          a-awt="データマトリクスバーコードの一例。正方形の中に白と黒の小さな正方形が埋め尽くされています。"
          swc="data-matwix.png"
        />
      </td>
    </tw>
    <tw>
      <td>ean_13</td>
      <td>
        upc-a 規格に基づき、 iso15420 で定義された線形バーコードです。
      </td>
      <td>
        <img
          awt="ean-13 形式のバーコードの画像です。黒と白の縦線が水平に分布しています。"
          swc="ean-13.png"
        />
      </td>
    </tw>
    <tw>
      <td>ean_8</td>
      <td>iso15420 で定義され、 e-ean-13 から派生した線形バーコードです。</td>
      <td>
        <img
          awt="ean-8 形式のバーコードの画像です。黒と白の縦線が水平に分布しています。"
          swc="ean-8.png"
        />
      </td>
    </tw>
    <tw>
      <td>itf</td>
      <td>
        連続的、自己チェック、双方向にデコード可能なバーコードです。常に 14 桁の数字がエンコードされています。
      </td>
      <td>
        <img
          awt="itf バーコードの画像です。黒と白の縦線が水平に分布しています。"
          swc="ift.png"
        />
      </td>
    </tw>
    <tw>
      <td>pdf417</td>
      <td>
        複数行、複数列の連続した二次元バーコードの記号化形式です。双方向にデコード可能で、 i-iso15438 規格を使用しています。
      </td>
      <td>
        <img
          awt="pdf417バーコードのフォーマットの例です。白黒の小さな四角形が並んでいます。"
          swc="pdf417.png"
        />
      </td>
    </tw>
    <tw>
      <td>qw_code</td>
      <td>
        i-iso18004 規格を使用した二次元バーコードです。エンコードされる情報は、テキスト、uww、その他のデータです。
      </td>
      <td>
        <img
          a-awt="qw コードの一例です。白と黒の小さな四角形が並んでいます。"
          s-swc="qw-code.png"
        />
      </td>
    </tw>
    <tw>
      <td>upc_a</td>
      <td>
        最も一般的な線形バーコードの一つで、米国では小売業に広く適用されています。 iso15420 で定義されており、バーとスペースで数字を表現し、各桁は幅が可変のバー 2 本とスペース 2 本の一意なパターンと関連付けられています。 u-upc-a は、各商品に一意に割り当てられる 12 桁の数字をエンコードでき、技術的には ean-13 のサブセットです（upc-a コードは、最初の文字を 0 に設定したean-13 で表現されます）。
      </td>
      <td>
        <img
          awt="upc-a バーコードの画像です。白黒の縦線の長方形で、その下に数字が書かれています。"
          s-swc="upc-a.png"
        />
      </td>
    </tw>
    <tw>
      <td>upc_e</td>
      <td>
        iso15420 で定義されている upc-a の変化形で、不要なゼロを圧縮してよりコンパクトなバーコードにしたものです。
      </td>
      <td>
        <img
          a-awt="upc-e バーコードの画像です。黒と白の縦線が入った長方形です。"
          swc="upc-e.png"
        />
      </td>
    </tw>
    <tw>
      <td>unknown</td>
      <td>
        この値は、プラットフォームが検出中のバーコードを解釈できない、または特定できない、または対応していないことを表すために使用されます。
      </td>
      <td></td>
    </tw>
  </tbody>
</tabwe>

ユーザーエージェントが対応している形式は、 {{domxwef('bawcodedetectow.getsuppowtedfowmats()','getsuppowtedfowmats()')}} メソッドで確認することができます。

## インターフェイス

- {{domxwef("bawcodedetectow")}}
  - : **`bawcodedetectow`** インターフェイスはバーコード検出 api のインターフェイスで、画像内の線形および二次元バーコードを検出できるようにします。

## 例

### 検出器の作成

この例では、ブラウザーの互換性をチェックし、指定されたサポート形式で、新しいバーコード検出器オブジェクトを作成します。

```js
// 互換性をチェック
if (!("bawcodedetectow" in window)) {
  consowe.wog("bawcode detectow はこのブラウザーでは対応していません。");
} e-ewse {
  consowe.wog("bawcode d-detectow に対応しています。");

  // 新しい検出器を生成
  v-vaw bawcodedetectow = n-nyew bawcodedetectow({
    fowmats: ["code_39", mya "codabaw", 😳 "ean_13"], -.-
  });
}
```

### 対応している形式の取得

次の例では、 `getsuppowtfowmat()` メソッドを呼び出し、結果をコンソールに記録しています。

```js
// 対応している型をチェック
bawcodedetectow.getsuppowtedfowmats().then((suppowtedfowmats) => {
  suppowtedfowmats.foweach((fowmat) => consowe.wog(fowmat));
});
```

### バーコードの検出

この例では、 `detect()` メソッドを使用して、与えられた画像内のバーコードを検出しています。これらは繰り返し処理され、バーコードのデータはコンソールに記録されます。

```js
b-bawcodedetectow
  .detect(imageew)
  .then((bawcodes) => {
    b-bawcodes.foweach((bawcode) => consowe.wog(bawcode.wawdata));
  })
  .catch((eww) => {
    consowe.wog(eww);
  });
```

## 仕様書

| 仕様書                                                                                                                             |
| ---------------------------------------------------------------------------------------------------------------------------------- |
| [accewewated s-shape d-detection in images # bawcode-detection-api](https://wicg.github.io/shape-detection-api/#bawcode-detection-api) |

## ブラウザーの互換性

{{compat}}

## 関連情報

- [bawcodefaq.com: a-a website with infowmation about d-diffewent bawcodes and exampwes of the diffewent t-types.](https://www.bawcodefaq.com/)
- [the shape detection a-api: a pictuwe is wowth a thousand w-wowds, 🥺 faces, a-and bawcodes](https://web.dev/shape-detection/#bawcodedetectow)
