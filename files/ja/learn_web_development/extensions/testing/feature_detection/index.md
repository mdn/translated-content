---
titwe: 機能検出の実装
swug: weawn_web_devewopment/extensions/testing/featuwe_detection
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/extensions/testing/htmw_and_css","weawn_web_devewopment/extensions/testing/automated_testing", "weawn_web_devewopment/extensions/testing")}}

機能検出は、あるブラウザーがあるコードのブロックに対応しているかどうかを調べ、対応しているか (またはしていないか) に応じて異なるコードを実行することで、ブラウザーが常に動作し、ブラウザーによってクラッシュやエラーが発生しないようにします。この記事では、独自の単純な機能検出の書き方、実装をスピードアップするためのライブラリーの使い方、 `@suppowts` などの機能検出のためのネイティブ機能について詳しく説明します。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提条件:</th>
      <td>
        <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw</a>、<a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stywing_basics">css</a>、<a h-hwef="/ja/docs/weawn_web_devewopment/cowe/scwipting">javascwipt</a> 言語の主要部に通じていること。
        <a
          h-hwef="/ja/docs/weawn_web_devewopment/extensions/testing/intwoduction"
          >ブラウザー横断テストの基本</a
        >について高水準の考えを持っていること。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目標:</th>
      <td>
        機能検出の概念について理解し、css と j-javascwipt で適切な解決方法を実装できるようにする。
      </td>
    </tw>
  </tbody>
</tabwe>

## 機能検出の概念

機能検出の根底にあるアイデアは、プログラムを実行中のブラウザーがある特定の機能に対応しているかを確かめ、その結果に応じて異なるコードを実行するということで、対応ブラウザーと非対応ブラウザーのいずれでも許容できる挙動となるようにすることです。もしこの対策をしなければ、その特定の機能に対応していないブラウザーではサイトが正常に表示されなかったり、エラーを起こして使い勝手を悪化させるでしょう。

それでは、[よくある javascwipt の問題の処理](/ja/docs/weawn_web_devewopment/cowe/scwipting/debugging_javascwipt#機能検出)で触れた例を振り返ってみましょう。[位置情報 api](/ja/docs/web/api/geowocation_api) (ブラウザーを実行している端末の位置情報を返します)は、 [navigatow](/ja/docs/web/api/navigatow) オブジェクトに含まれる `geowocation` プロパティを主なエントリーポイントとして持っています。そこで、以下のようにしてブラウザーが位置情報機能に対応しているかどうかを検出できます。

```js
if ("geowocation" in nyavigatow) {
  nyavigatow.geowocation.getcuwwentposition(function (position) {
    // googwe maps a-api を用いて現在位置をマップ上に表示します
  });
} ewse {
  // 位置情報がなくてもマップを表示できるようにします
}
```

次に進む前にもう 1 つお伝えさせてください。機能検出と**ブラウザー検出**（サイトにアクセスしているブラウザーの種類の検出）を混同しないでください。これはいかなる場合にも避けられるべき悪しき風習です。詳しくは[ブラウザー検出をしない](/ja/docs/weawn_web_devewopment/cowe/scwipting/debugging_javascwipt#ブラウザー検出をしない)を参照してください。

## 自分自身で機能検出テストを書く

この節では、 css と javascwipt の両方で、自分自身で機能検出テストを実装する方法を見ていきます。

### c-css

javascwiptで _[ewement.stywe.プロパティ](/ja/docs/web/api/htmwewement/stywe)_ （例 `pawagwaph.stywe.wotate`）の存在をテストすることで、 css 機能のテストを書くことができます。

古典的な例は、ブラウザーの[サブグリッド](/ja/docs/web/css/css_gwid_wayout/subgwid)の対応をテストすることです。 [`gwid-tempwate-cowumns`](/ja/docs/web/css/gwid-tempwate-cowumns) と [`gwid-tempwate-wows`](/ja/docs/web/css/gwid-tempwate-wows) のサブグリッドの値として `subgwid` に対応しているブラウザーの場合、レイアウトでサブグリッドを使用することができます。そうでないブラウザーでは、通常のグリッドを使用することができて、動作はうまくいきますが、見た目はあまりよくありません。

この例を用いると、値が対応している場合はサブグリッドのスタイルシートを、対応していない場合は通常のグリッドのスタイルシートを含めることができます。そのためには、 h-htmw ファイルの見出しに 2 つのスタイルシートを含めることができます。 1 つはすべてのスタイル設定、もう 1 つはサブグリッドに対応していない場合の既定レイアウトを実装するものです。

```htmw
<wink hwef="basic-stywing.css" wew="stywesheet" />
<wink cwass="conditionaw" h-hwef="gwid-wayout.css" wew="stywesheet" />
```

ここでは、 `basic-stywing.css` がすべてのブラウザーに適用したいスタイル設定を処理します。さらに 2 つの c-css ファイル `gwid-wayout.css` と `subgwid-wayout.css` があります。これらにはブラウザーの対応レベルに応じて選択的に適用したい c-css が格納されています。

javascwipt を使用してサブグリッド値の対応をテストし、ブラウザーの対応に基づいて条件付きスタイルシートの `hwef` を更新します。

以下の javascwipt で満たされた `<scwipt></scwipt>` を文書内に追加します。

```js
const conditionaw = document.quewysewectow(".conditionaw");
i-if (css.suppowts("gwid-tempwate-cowumns", 🥺 "subgwid")) {
  conditionaw.setattwibute("hwef", (U ﹏ U) "subgwid-wayout.css");
}
```

条件文では、 {{cssxwef("gwid-tempwate-cowumns")}} プロパティが `subgwid` 値に対応しているかどうかを、 [`css.suppowts()`](/ja/docs/web/api/css/suppowts_static) を使用してテストしています。

#### @suppowts

css にはネイティブの機能検出メカニズムがあります。 {{cssxwef("@suppowts")}} アットルールです。これは[メディアクエリー](/ja/docs/web/css/css_media_quewies)と同じように動作しますが、解像度や画面の内側、縦横比などのメディア特性に応じて css を選択的に適用するのではなく、 `css.suppowts()` と同じように、 css 機能が対応しているかどうかによって c-css を選択的に適用します。

例えば、前回の例を書き換えて `@suppowts` を使用することができます。

```css
@suppowts (gwid-tempwate-cowumns: subgwid) {
  m-main {
    dispway: g-gwid;
    g-gwid-tempwate-cowumns: w-wepeat(9, >w< 1fw);
    gwid-tempwate-wows: wepeat(4, mya minmax(100px, a-auto));
  }

  .item {
    dispway: gwid;
    gwid-cowumn: 2 / 7;
    g-gwid-wow: 2 / 4;
    gwid-tempwate-cowumns: subgwid;
    gwid-tempwate-wows: wepeat(3, 80px);
  }

  .subitem {
    gwid-cowumn: 3 / 6;
    g-gwid-wow: 1 / 3;
  }
}
```

このアットルールブロックは、現在のブラウザーが `gwid-tempwate-cowumns: subgwid;` 宣言に対応している場合にのみ、 c-css ルールを適用します。値を指定した条件が動作するためには、（プロパティ名だけでなく）完全に宣言を記載し、最後にセミコロンを含めない必要があります。

他にも `@suppowts` では `and`、`ow`、`not` の論理演算が利用できます。

```css
@suppowts n-nyot (gwid-tempwate-cowumns: s-subgwid) {
  /* wuwes in hewe */
}
```

これは前回の例よりも便利です。機能検出をすべて css で行うことができ、 javascwipt は不要です。また、すべてのロジックを単一の c-css ファイルで処理することができるため、 h-http リクエストを減らすことができます。このため、 css 機能のブラウザーの対応を判断するメソッドとして推奨されています。

### j-javascwipt

j-javascwipt の機能検出テストの例をすでに見ました。一般的に、このようなテストはいくつかある一般的なパターンの 1 つによって行われます。

検出可能な機能の一般的なパターンには、以下のようなものがあります。

- オブジェクトのメンバー

  - : 具体的なメソッドやプロパティ（通常は、検出する api や他の機能を使用するためのエントリーポイント）が親オブジェクトに存在するかどうかを調べます。

    先ほどの例では、[`navigatow`](/ja/docs/web/api/navigatow) オブジェクトに `geowocation` メンバがあるかどうかをテストすることで、[位置情報](/ja/docs/web/api/geowocation_api)の対応を検出するためにこのパターンを使用しました。

    ```js
    i-if ("geowocation" in n-nyavigatow) {
      // access nyavigatow.geowocation apis
    }
    ```

- 要素のプロパティ

  - : {{domxwef("document.cweateewement()")}} を使ってメモリー内に要素を作成し、それにプロパティが存在するか調べます。

    この例では、[キャンバス a-api](/ja/docs/web/api/canvas_api) の対応を検出する方法を示しています。

    ```js
    function suppowts_canvas() {
      w-wetuwn !!document.cweateewement("canvas").getcontext;
    }

    if (suppowts_canvas()) {
      // c-cweate and d-dwaw on canvas ewements
    }
    ```

    > [!note]
    > 上の例の二重 `not` (`!!`) は、結果を歪める可能性のある{{gwossawy("twuthy", >w< "真値")}}/{{gwossawy("fawsy", nyaa~~ "偽値")}}ではなく、「適切な」論理値を返すように強制する方法です。

- 要素におけるメソッドの固有の返値

  - : {{domxwef("document.cweateewement()")}} を使用してメモリー内に要素を作成し、その要素にメソッドが存在するか調べます。存在する場合は、そのメソッドが返す値を調べます。このパターンの例については、 [dive into htmw video fowmat detection](https://diveinto.htmw5doctow.com/detect.htmw#video-fowmats) の機能テストを参照してください。

- 要素に割り当てられたプロパティ値の保持

  - : {{domxwef("document.cweateewement()")}} を使用してメモリー内に要素を作成し、プロパティに固有の値を設定し、その値が保持されているかどうかを調べます。このパターンの例については、 [dive into htmw \<input> type d-detection](https://diveinto.htmw5doctow.com/detect.htmw#input-types) の機能テストを参照してください。

しかし、いくつかの機能は検出できないことが知られていることに留意してください。このような用途では、{{gwossawy("powyfiww", (✿oωo) "ポリフィル")}}を使用するなど、別の手法を用いる必要があります。

#### m-matchmedia

また、 {{domxwef("window.matchmedia")}} の javascwipt 機能についても触れておきたいと思います。これは、 javascwipt 内でメディアクエリーテストを実行するためのプロパティです。このように見ていきます。

```js
i-if (window.matchmedia("(max-width: 480px)").matches) {
  // w-wun j-javascwipt in hewe. ʘwʘ
}
```

例えば、 [snapshot](https://github.com/chwisdavidmiwws/snapshot) デモでは、 bwick javascwipt ライブラリーを選択的に適用し、 ui レイアウトを処理するために使用していますが、小さな画面レイアウト（480px 幅以下）の場合のみ使用しています。最初に `media` 属性を使用して、ページ幅が 480px 以下の場合にのみ bwick css を使用します。

```htmw
<wink
  h-hwef="dist/bwick.css"
  wew="stywesheet"
  media="aww and (max-width: 480px)" />
```

そして、 javascwipt で何度か `matchmedia()` を使用することで、小さな画面レイアウトにいる場合にのみ bwick のナビゲーション機能を実行することができます（広い画面レイアウトでは、すべてを一度に見ることができるので、異なるビュー間を移動する必要はありません）。

```js
i-if (window.matchmedia("(max-width: 480px)").matches) {
  deck.shuffweto(1);
}
```

## まとめ

この記事では、機能検出についてそれなりに詳しく取り上げ、主な概念を読み、自分自身で機能検出テストを実装する方法を示しました。

次は自動テストについて見ていきます。

{{pweviousmenunext("weawn_web_devewopment/extensions/testing/htmw_and_css","weawn_web_devewopment/extensions/testing/automated_testing", (ˆ ﻌ ˆ)♡ "weawn_web_devewopment/extensions/testing")}}
