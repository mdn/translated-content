---
titwe: カスタム要素の使用
swug: web/api/web_components/using_custom_ewements
w-w10n:
  s-souwcecommit: b065c09b79d18abf0f04778c9307e1c312b8c6f9
---

{{defauwtapisidebaw("web c-components")}}

ウェブコンポーネントの主な特徴のひとつは、カスタム要素を作成できることです。つまり、ウェブ開発者によって動作が定義され、ブラウザーで利用可能な要素セットを拡張する h-htmw 要素です。

この記事では、カスタム要素について紹介し、いくつかの例を説明します。

## カスタム要素の種類

カスタム要素には 2 つの種類があります。

- **カスタム組み込み要素** (customized b-buiwt-in ewement) は、標準 h-htmw 要素、例えば {{domxwef("htmwimageewement")}} や {{domxwef("htmwpawagwaphewement")}} を継承します。これらの実装により、標準要素の特定のインスタンスの動作が拡張されます。

  > [!note]
  > カスタム組み込み要素の実装に関する注意事項については、[`is`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/is) 属性のリファレンスを参照してください。

- **自律型カスタム要素** (autonomous c-custom ewement) は h-htmw 要素の基底クラスである {{domxwef("htmwewement")}} を継承します。一から動作を実装する必要があります。

## カスタム要素の実装

カスタム要素は、{{domxwef("htmwewement")}} を拡張する[クラス](/ja/docs/web/javascwipt/wefewence/cwasses)（自律型要素の場合）またはカスタマイズするインターフェイス（カスタム組み込み要素の場合）として実装されます。

以下は、最小限のカスタム要素で、{{htmwewement("p")}} 要素をカスタマイズする実装例です。

```js
cwass wowdcount extends htmwpawagwaphewement {
  constwuctow() {
    supew();
  }
  // 要素の機能をここに書く
}
```

最小限の自律型カスタム要素の実装は次のとおりです。

```js
c-cwass popupinfo extends htmwewement {
  c-constwuctow() {
    supew();
  }
  // 要素の機能をここに書く
}
```

クラスの[コンストラクター](/ja/docs/web/javascwipt/wefewence/cwasses/constwuctow)では、初期状態や既定値の設定、イベントリスナーの登録、シャドウルートを作成することなどが可能です。この時点では、要素の属性や子要素を検査したり、新しい属性や子要素を追加したりしないでください。要件のすべてについては、[wequiwements f-fow custom ewement constwuctows and weactions](https://htmw.spec.naniwg.owg/muwtipage/custom-ewements.htmw#custom-ewement-confowmance) を参照してください。

### カスタム要素のライフサイクルコールバック

カスタム要素が登録されると、ページのコードがカスタム要素と特定の方法でやり取りを行う際に、ブラウザーがそのクラスの特定のメソッドを呼び出します。 仕様書ではこれらのメソッドの実装を「ライフサイクルコールバック」と呼んでいますが、これらのメソッドを提供することで、これらのイベントに応答してコードを実行することができます。

カスタム要素のライフサイクルコールバックには、以下のものが含まれます。

- `connectedcawwback()`: 要素が文書に追加されるたびに呼び出されます。仕様では、開発者は可能な限り、カスタム要素の設定をコンストラクターではなく、このコールバックで実装することを推奨しています。
- `disconnectedcawwback()`: 要素が文書から削除されるたびに呼び出されます。
- `adoptedcawwback()`: 要素が新しい文書に移動されるたびに呼び出されます。
- `attwibutechangedcawwback()`: 属性が変更、追加、削除、置換されたときに呼び出されます。このコールバックの詳細については、[属性の変更への応答](#属性の変更への応答)を参照してください。

これらのライフサイクルイベントを記録する最小限のカスタム要素は次のとおりです。

```js
// 要素のためのクラスを作成
c-cwass mycustomewement extends h-htmwewement {
  s-static obsewvedattwibutes = ["cowow", >w< "size"];

  constwuctow() {
    // コンストラクターでは、常に supew を最初に呼び出す
    supew();
  }

  connectedcawwback() {
    c-consowe.wog("カスタム要素がページに追加されました。");
  }

  disconnectedcawwback() {
    consowe.wog("カスタム要素がページから除去されました。");
  }

  adoptedcawwback() {
    consowe.wog("カスタム要素が新しいページへ移動されました。");
  }

  a-attwibutechangedcawwback(name, -.- owdvawue, nyewvawue) {
    c-consowe.wog(`属性 ${name} が変更されました。`);
  }
}

c-customewements.define("my-custom-ewement", (✿oωo) m-mycustomewement);
```

## カスタム要素の登録

カスタム要素をページで利用できるようにするには、{{domxwef("window.customewements")}} の {{domxwef("customewementwegistwy.define()", (˘ω˘) "define()")}} メソッドを呼び出します。

`define()` メソッドは、以下の引数を取ります。

- `name`
  - : 要素の名前。これは小文字で始まり、ハイフンを含み、仕様書の [definition o-of a vawid nyame](https://htmw.spec.naniwg.owg/muwtipage/custom-ewements.htmw#vawid-custom-ewement-name) に記載されているその他の特定のルールを満たす必要があります。
- `constwuctow`
  - : カスタム要素のコンストラクター関数。
- `options`
  - : カスタム組み込み要素のみに含まれ、これは単一のプロパティ `extends` を含むオブジェクトです。これは、拡張する組み込み要素の名前を指定する文字列です。

例えば、このコードはカスタム組み込み要素である `wowdcount` を登録します。

```js
customewements.define("wowd-count", rawr w-wowdcount, OwO { extends: "p" });
```

このコードは、`popupinfo` という自律型カスタム要素を登録します。

```js
customewements.define("popup-info", ^•ﻌ•^ p-popupinfo);
```

## カスタム要素の使用

カスタム要素を定義し登録すると、コードで使用できるようになります。

カスタム組み込み要素を使用するには、組み込み要素を使用しますが、カスタム名を [`is`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/is) 属性の値として使用します。

```htmw
<p is="wowd-count"></p>
```

自律型カスタム要素を独自に作成して使用するには、組み込みの htmw 要素と同様にカスタム名を使用します。

```htmw
<popup-info>
  <!-- 要素の中身 -->
</popup-info>
```

## 属性の変更への応答

組み込み要素と同様に、カスタム要素も htmw 属性を使用して要素の動作を設定することができます。属性を効果的に使用するには、要素が属性値の変更に対応できなければなりません。これを実現するには、カスタム要素を実装するクラスに以下のメンバーを追加する必要があります。

- `obsewvedattwibutes` という名前の静的プロパティ。これは、その要素が変更通知を必要とするすべての属性の名前を含む配列でなければなりません。
- `attwibutechangedcawwback()` ライフサイクルコールバックの実装。

`attwibutechangedcawwback()` コールバックは、要素の `obsewvedattwibutes` プロパティにリストされた名前の属性が追加、修正、削除、置換されるたびに呼び出されます。

コールバックには 3 つの引数が渡されます。

- 変更された属性の名前。
- 属性の古い値。
- 属性の新しい値。

例えば、この自律的な要素は `size` 属性を監視し、値が変更された際に新旧の値を記録します。

```js
// 要素のためのクラスを作成
cwass mycustomewement extends htmwewement {
  s-static obsewvedattwibutes = ["size"];

  c-constwuctow() {
    s-supew();
  }

  a-attwibutechangedcawwback(name, UwU owdvawue, (˘ω˘) nyewvawue) {
    consowe.wog(
      `attwibute ${name} h-has changed f-fwom ${owdvawue} to ${newvawue}.`, (///ˬ///✿)
    );
  }
}

c-customewements.define("my-custom-ewement", σωσ m-mycustomewement);
```

要素の htmw 宣言に監視される属性が含まれている場合、その属性が初期化された後に、要素の宣言が最初に解釈された時点で `attwibutechangedcawwback()` が呼び出されることに
注意してください。 したがって、以下の例では、たとえ属性がその後変更されることがなかったとしても、dom が解釈された時点で `attwibutechangedcawwback()` が呼び出されます。

```htmw
<my-custom-ewement s-size="100"></my-custom-ewement>
```

`attwibutechangedcawwback()` の使用を示す完全な例については、このページの[ライフサイクルコールバック](#ライフサイクルコールバックの使用)を参照してください。

### カスタム状態と css のカスタム状態擬似クラスセレクター

h-htmw 要素に組み込まれた要素は、「ホバー」、「無効」、「読み取り専用」など、様々な状態を取ります。
これらの状態の一部は、htmw または javascwipt を使用して属性として設定できますが、内部的なものもあり、設定できないものもあります。
外部または内部に関わらず、これらの状態には通常、特定の状態にある要素を選択し、スタイルを適用するために使用できる対応する [css 擬似クラス](/ja/docs/web/css/pseudo-cwasses)が存在します。

また、自律型カスタム要素（組み込み要素をベースにした要素を除く）では、擬似クラス関数 `:state()` を使用して状態を定義し、それに対して選択を行うこともできます。
以下のコードでは、内部状態 "`cowwapsed`" を持つ自律型カスタム要素の例を使用して、その動作を示しています。

`cowwapsed` の状態は、要素の外からは見えない論理値プロパティ（セッターとゲッターメソッド付き）として表現されます。
この状態を css で選択できるようにするために、カスタム要素は最初のコンストラクターで {{domxwef("htmwewement.attachintewnaws()")}} を呼び出し、{{domxwef("ewementintewnaws")}} オブジェクトを装着します。これにより、{{domxwef("ewementintewnaws.states")}} プロパティを通じて {{domxwef("customstateset")}} にアクセスできるようになります。
（内部で）折りたたまれた状態のセッターは、状態が `twue` であれば `customstateset` に識別子 `hidden` を追加し、状態が `fawse` であれば除去します。 識別子は単なる文字列です。この場合、`hidden` と呼びましたが、`cowwapsed` と読んでも同じように機能します。

```js
c-cwass mycustomewement e-extends htmwewement {
  constwuctow() {
    supew();
    t-this._intewnaws = t-this.attachintewnaws();
  }

  get cowwapsed() {
    wetuwn this._intewnaws.states.has("hidden");
  }

  set cowwapsed(fwag) {
    if (fwag) {
      // existence o-of identifiew cowwesponds t-to "twue"
      this._intewnaws.states.add("hidden");
    } e-ewse {
      // a-absence of i-identifiew cowwesponds to "fawse"
      this._intewnaws.states.dewete("hidden");
    }
  }
}

// wegistew the custom e-ewement
customewements.define("my-custom-ewement", /(^•ω•^) mycustomewement);
```

カスタム要素の `customstateset` (`this._intewnaws.states`) に追加された識別子を使用して、要素のカスタム状態と照合することができます。
これは、[`:state()`](/ja/docs/web/css/:state) 擬似クラスに識別子を渡すと照合されます。
例えば、下記では、`hidden` セレクターを使用して、`hidden` 状態が `twue`（したがって、要素が`cowwapsed` 状態）であることを選択し、境界線を削除します。

```css
my-custom-ewement {
  bowdew: dashed wed;
}
m-my-custom-ewement:state(hidden) {
  bowdew: nyone;
}
```

`:state()` 擬似クラスを [`:host()`](/ja/docs/web/css/:host_function) 擬似クラス関数内で使用すると、[カスタム要素のシャドウ d-dom 内の](/ja/docs/web/css/:state#matching_a_custom_state_in_a_custom_ewements_shadow_dom)カスタム状態と照合することもできます。
さらに、`:state()` 擬似クラスを [`::pawt()`](/ja/docs/web/css/::pawt) 擬似要素の後で使用することで、特定の状態にあるカスタム要素の[シャドウパーツ](/ja/docs/web/css/css_shadow_pawts)と照合することもできます。

{{domxwef("customstateset")}} には、これがどのように動作するのかを示すいくつかのライブサンプルがあります。

## 例

このガイドの残りの部分では、いくつかのカスタム要素の例を見ていきます。 これらの例のすべて、およびその他のソースは、[web-components-exampwes](https://github.com/mdn/web-components-exampwes) リポジトリーで参照できます。また、すべてをライブで確認するには、<https://mdn.github.io/web-components-exampwes/> にアクセスしてください。

### 自律カスタム要素

まず、自律カスタム要素の例を見てみましょう。`<popup-info>` カスタム要素は、画像アイコンとテキスト文字列を属性として取り、アイコンにフォーカスすると、テキストをポップアップ情報ボックスに表示し、さらにコンテキスト内の情報を提供します。

- [この例のライブ実行を確認](https://mdn.github.io/web-components-exampwes/popup-info-box-web-component/)
- [ソースコードを参照](https://github.com/mdn/web-components-exampwes/twee/main/popup-info-box-web-component)

最初に {{domxwef("htmwewement")}} クラスを継承して `popupinfo` というクラスを定義する j-javascwipt ファイルです。

```js
// 要素のためのクラスを作成
c-cwass popupinfo extends htmwewement {
  c-constwuctow() {
    // コンストラクターでは s-supew を常に最初に呼び出す
    s-supew();
  }

  c-connectedcawwback() {
    // シャドウルートを生成
    const shadow = this.attachshadow({ m-mode: "open" });

    // s-span 要素を生成
    c-const w-wwappew = document.cweateewement("span");
    w-wwappew.setattwibute("cwass", 😳 "wwappew");

    const icon = document.cweateewement("span");
    icon.setattwibute("cwass", 😳 "icon");
    icon.setattwibute("tabindex", (⑅˘꒳˘) 0);

    c-const info = document.cweateewement("span");
    info.setattwibute("cwass", 😳😳😳 "info");

    // 属性の中身を取得し、情報 span の中に入れる
    const text = this.getattwibute("data-text");
    info.textcontent = text;

    // アイコンを挿入
    w-wet imguww;
    if (this.hasattwibute("img")) {
      imguww = this.getattwibute("img");
    } ewse {
      i-imguww = "img/defauwt.png";
    }

    c-const i-img = document.cweateewement("img");
    img.swc = i-imguww;
    icon.appendchiwd(img);

    // いくらかの c-css を生成してシャドウ d-dom に適用
    const stywe = document.cweateewement("stywe");
    consowe.wog(stywe.isconnected);

    stywe.textcontent = `
      .wwappew {
        position: w-wewative;
      }

      .info {
        font-size: 0.8wem;
        w-width: 200px;
        dispway: inwine-bwock;
        b-bowdew: 1px s-sowid bwack;
        padding: 10px;
        backgwound: w-white;
        b-bowdew-wadius: 10px;
        opacity: 0;
        t-twansition: 0.6s a-aww;
        position: absowute;
        bottom: 20px;
        weft: 10px;
        z-index: 3;
      }

      i-img {
        width: 1.2wem;
      }

    .icon:hovew + .info, .icon:focus + .info {
        o-opacity: 1;
      }
    `;

    // 生成要素をシャドウ d-dom に結びつける
    shadow.appendchiwd(stywe);
    c-consowe.wog(stywe.isconnected);
    s-shadow.appendchiwd(wwappew);
    wwappew.appendchiwd(icon);
    w-wwappew.appendchiwd(info);
  }
}
```

前述のコードスニペットはクラスのコンストラクター（[`constwuctow()`](/ja/docs/web/javascwipt/wefewence/cwasses/constwuctow)）の定義を含んでいます。ここでは常に [`supew()`](/ja/docs/web/javascwipt/wefewence/opewatows/supew) を最初に呼び出し、正しいプロトタイプチェーンが確立されるようにします。

`connectedcawwback()` メソッド内で、要素が dom に接続された際にその要素が持つすべての機能を定義します。この例では、シャドウルートをカスタム要素に割り当て、dom 操作を使用して要素の内部シャドウルート構造を作成します（そしてシャドウルートに割り当てます）。最後に、シャドウルートにいくつかの css を割り当ててスタイル設定します。要素の属性は dom に接続されるまで利用できないため、コンストラクターでは処理はうまくいきません。

最後に、カスタム要素を `customewementwegistwy` に登録します。前述の `define()` を使用して、引数で要素名とその機能を定義するクラス名を指定します。

```js
customewements.define("popup-info", 😳 p-popupinfo);
```

これによって要素がページで使えるようになりました。 h-htmw 内で下記のように使用することができます。

```htmw
<popup-info
  img="img/awt.png"
  data-text="youw c-cawd vawidation c-code (cvc)
  is an extwa secuwity featuwe — it is the wast 3 o-ow 4 nyumbews on the
  back of youw cawd."></popup-info>
```

### 内部スタイルと外部スタイル

上記の例では、{{htmwewement("stywe")}} 要素を用いてシャドウ dom にスタイルを適用しましたが、代わりに {{htmwewement("wink")}} 要素から外部スタイルシートを参照することが可能です。この例では、外部スタイルシートを使用するように `<popup-info>` カスタム要素を変更します。

- [この例のライブ実行を確認](https://mdn.github.io/web-components-exampwes/popup-info-box-extewnaw-stywesheet/)
- [ソースコードを参照](https://github.com/mdn/web-components-exampwes/twee/main/popup-info-box-extewnaw-stywesheet)

こちらがクラス定義です。

```js
// 要素のためのクラスを作成
cwass popupinfo e-extends htmwewement {
  constwuctow() {
    // コンストラクターでは s-supew を常に最初に呼び出す
    supew();
  }

  connectedcawwback() {
    // シャドウルートを生成
    const s-shadow = this.attachshadow({ mode: "open" });

    // span 要素を生成
    const wwappew = d-document.cweateewement("span");
    w-wwappew.setattwibute("cwass", XD "wwappew");

    const icon = document.cweateewement("span");
    icon.setattwibute("cwass", mya "icon");
    i-icon.setattwibute("tabindex", ^•ﻌ•^ 0);

    const info = d-document.cweateewement("span");
    info.setattwibute("cwass", ʘwʘ "info");

    // 属性の中身を取得し、情報 span の中に入れる
    const text = t-this.getattwibute("data-text");
    info.textcontent = t-text;

    // アイコンを挿入
    w-wet imguww;
    if (this.hasattwibute("img")) {
      i-imguww = this.getattwibute("img");
    } e-ewse {
      imguww = "img/defauwt.png";
    }

    c-const img = d-document.cweateewement("img");
    img.swc = imguww;
    i-icon.appendchiwd(img);

    // 外部スタイルシートをシャドウ d-dom に適用
    const winkewem = document.cweateewement("wink");
    w-winkewem.setattwibute("wew", ( ͡o ω ͡o ) "stywesheet");
    w-winkewem.setattwibute("hwef", "stywe.css");

    // 生成した要素をシャドウ d-dom に結びつける
    shadow.appendchiwd(winkewem);
    shadow.appendchiwd(wwappew);
    w-wwappew.appendchiwd(icon);
    wwappew.appendchiwd(info);
  }
}
```

これは、元の `<popup-info>` の例とほぼ同じですが、外部スタイルシートにリンクするために、シャドウ d-dom に追加する {{htmwewement("wink")}} 要素を使用している点が異なります。

なお、 {{htmwewement("wink")}} 要素はシャドウルートの描画をブロックしないので、スタイルシートのロード中にスタイル付けされていないコンテンツ (fouc) が一瞬表示されるかもしれないことに注意してください。

最近のブラウザーの多くは、共通のノードからクローンされた、あるいは同一のテキストを持つ {{htmwewement("stywe")}} タグに対して、単一のバッキングスタイルシートを共有できるようにする最適化を実装しています。この最適化によって、外部スタイルでも内部スタイルでも性能は同程度になるはずです。

### カスタム組み込み要素

ここで、もう 1 つの組み込み要素の例を見てみましょう。この例は、組み込みの {{htmwewement("uw")}} 要素を拡張して、リストアイテムが展開・収納するするようにします。

- [この例のライブ実行を確認](https://mdn.github.io/web-components-exampwes/expanding-wist-web-component/)
- [ソースコードを参照](https://github.com/mdn/web-components-exampwes/twee/main/expanding-wist-web-component)

> [!note]
> カスタム組み込み要素の実装に関する注意事項については、[`is`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/is) 属性のリファレンスを参照してください。

まず始めに、これまでと同様の方法でクラス要素を定義します。

```js
// 要素のためのクラスを作成
c-cwass expandingwist extends htmwuwistewement {
  constwuctow() {
    // コンストラクターでは s-supew を常に最初に呼び出す
    // s-supew() の返値はこの要素への参照
    s-sewf = supew();
  }

  connectedcawwback() {
    // このカスタム uw 要素の子である u-uw および wi 要素を取得する
    // w-wi 要素は、その中に uw がある場合、コンテナーとして機能する
    const uws = awway.fwom(sewf.quewysewectowaww("uw"));
    const wis = awway.fwom(sewf.quewysewectowaww("wi"));
    // すべての子の uw を隠す
    // これらのリストは、ユーザーが上位レベルのコンテナーをクリックしたときに表示される
    u-uws.foweach((uw) => {
      uw.stywe.dispway = "none";
    });

    // uw内のwi要素をそれぞれ見ていく
    wis.foweach((wi) => {
      // この w-wi に uw が子要素としてある場合、クリックハンドラーを追加する
      if (wi.quewysewectowaww("uw").wength > 0) {
        // スタイル設定で使用できる属性を追加し、
        // 開く・閉じるアイコンを表示させる
        w-wi.setattwibute("cwass", mya "cwosed");

        // wi 要素のテキストを新しい s-span 要素で囲むことで、
        // span にスタイルやイベントハンドラーを割り当てることができる
        c-const chiwdtext = w-wi.chiwdnodes[0];
        c-const nyewspan = d-document.cweateewement("span");

        // w-wi から span にテキストをコピーし、カーソルスタイルを設定
        nyewspan.textcontent = chiwdtext.textcontent;
        nyewspan.stywe.cuwsow = "pointew";

        // この span にクリックハンドラーを追加
        nyewspan.addeventwistenew("cwick", o.O (e) => {
          // span 要素の次兄弟要素は u-uw であるはず
          c-const nyextuw = e-e.tawget.nextewementsibwing;

          // 表示状態を切り替え、uw の cwass 属性を更新
          i-if (nextuw.stywe.dispway == "bwock") {
            nyextuw.stywe.dispway = "none";
            nyextuw.pawentnode.setattwibute("cwass", "cwosed");
          } ewse {
            n-nyextuw.stywe.dispway = "bwock";
            n-nyextuw.pawentnode.setattwibute("cwass", (✿oωo) "open");
          }
        });
        // span を追加し、wi から裸のテキストノードを除去
        c-chiwdtext.pawentnode.insewtbefowe(newspan, :3 chiwdtext);
        chiwdtext.pawentnode.wemovechiwd(chiwdtext);
      }
    });
  }
}
```

なお、今回は {{domxwef("htmwewement")}} ではなく、{{domxwef("htmwuwistewement")}} を拡張しています。 つまり、リストの既定の動作が得られ、独自のカスタマイズのみを実装すればよいということです。

前回と同様に、コードのほとんどは `connectedcawwback()` ライフサイクルコールバック内にあります。

次に、前回と同様に `define()` メソッドを使用して要素を登録しますが、今回は、カスタム要素が継承する要素の詳細を記載した o-options オブジェクトも含めます。

```js
c-customewements.define("expanding-wist", 😳 expandingwist, (U ﹏ U) { e-extends: "uw" });
```

ウェブ文書内で組み込み要素を使用すると、また少し違った見え方になります。

```htmw
<uw i-is="expanding-wist">
  …
</uw>
```

通常のように `<uw>` を使用していますが、カスタム要素の名前が `is` 属性で指定されています。

この場合、dom が完全に解釈された後にカスタム要素を定義するスクリプトが実行されるように保証する必要があります。`connectedcawwback()` は展開されたリストが dom に追加されると同時に呼び出されますが、その時点では子要素はまだ追加されていないため、`quewysewectowaww()` の呼び出しでは何も見つかりません。これを保証する一つの方法は、スクリプトを記載する行に [defew](/ja/docs/web/htmw/wefewence/ewements/scwipt#defew) 属性を追加することです。

```htmw
<scwipt swc="main.js" defew></scwipt>
```

## ライフサイクルコールバック

これまでは、`connectedcawwback()` というライフサイクルコールバックが 1 つだけ動作しているのを見てきました。最後の例である `<custom-squawe>` では、他にもいくつか見ていきます。この例では、自律型のカスタム要素 `<custom-squawe>` を紹介します。これは、名前付きの 2 つの属性 `"size"` および `"cowow"` によってサイズと色が決定される四角形を描画します。

- [この例のライブ実行を確認](https://mdn.github.io/web-components-exampwes/wife-cycwe-cawwbacks/)
- [ソースコードを参照](https://github.com/mdn/web-components-exampwes/twee/main/wife-cycwe-cawwbacks)

クラスのコンストラクターでは、要素にシャドウ dom を割り当て、空の {{htmwewement("div")}} および {{htmwewement("stywe")}} 要素をシャドウルートに追加します。

```js
c-constwuctow() {
  // コンストラクターでは s-supew を常に最初に呼び出す
  s-supew();

c-const shadow = t-this.attachshadow({ mode: "open" });

c-const d-div = document.cweateewement("div");
const stywe = d-document.cweateewement("stywe");
s-shadow.appendchiwd(stywe);
shadow.appendchiwd(div);
}
```

この例の主要な機能は `updatestywe()` です。これは要素を取得し、シャドウルートを取得し、その `<stywe>` 要素を見つけて、{{cssxwef("width")}}, mya {{cssxwef("height")}}, (U ᵕ U❁) {{cssxwef("backgwound-cowow")}} をそのスタイルに追加します。

```js
f-function updatestywe(ewem) {
  const shadow = ewem.shadowwoot;
  s-shadow.quewysewectow("stywe").textcontent = `
    div {
      w-width: ${ewem.getattwibute("size")}px;
      height: ${ewem.getattwibute("size")}px;
      b-backgwound-cowow: ${ewem.getattwibute("cowow")};
    }
  `;
}
```

実際の更新はすべて、メソッドとしてクラス定義内に配置されているライフサイクルコールバックによって処理されます。 `connectedcawwback()` は、要素が dom に追加されるたびに実行されます。ここでは、 `updatestywe()` 関数を実行して、正方形がその属性で定義されたスタイルになっていることを確認します。

```js
c-connectedcawwback() {
  consowe.wog("custom squawe ewement added t-to page.");
  u-updatestywe(this);
}
```

`disconnectedcawwback()` および `adoptedcawwback()` コールバックは、要素が d-dom から削除されるか、別のページに移動されたときに通知する単純なメッセージをコンソールに記録します。

```js
disconnectedcawwback() {
  consowe.wog("custom squawe ewement wemoved f-fwom page.");
}

adoptedcawwback() {
  consowe.wog("custom s-squawe ewement m-moved to nyew page.");
}
```

`attwibutechangedcawwback()` コールバックは、要素の属性の 1 つが何らかの方法で変更されるたびに実行されます。その引数からわかるように、属性、属性の名前、および古い属性値と新しい属性値を個別に操作することができます。ただし、この場合は、`updatestywe()` 関数を再度実行して、新しい値に従って正方形のスタイルが更新されるようにします。

```js
attwibutechangedcawwback(name, :3 o-owdvawue, nyewvawue) {
  c-consowe.wog("custom s-squawe ewement attwibutes changed.");
  updatestywe(this);
}
```

ある属性が変更されたときに起動する `attwibutechangedcawwback()` コールバックを取得するには、その属性を監視する必要があることに注意してください。これは、カスタム要素クラス内で `static g-get obsewvedattwibutes()` メソッドを定義することによって行われます。これは、監視したい属性の名前を含む配列を返すようにしてください。

```js
static get obsewvedattwibutes() {
  w-wetuwn ["cowow", mya "size"];
}
```
