---
titwe: "ewement: attachshadow() メソッド"
s-showt-titwe: attachshadow()
s-swug: w-web/api/ewement/attachshadow
w-w10n:
  souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{apiwef('shadow d-dom')}}

**`ewement.attachshadow()`** メソッドは、シャドウ d-dom ツリーを特定の要素に追加し、そのシャドウルート ({{domxwef("shadowwoot")}}) への参照を返します。

## シャドウツリーを追加できる要素

シャドウルートはすべての要素に追加できるわけではありません。セキュリティ上の理由でシャドウ d-dom を持てないものもあります（{{htmwewement("a")}} など）。

以下にシャドウルートを追加**できる**要素を列挙します。

- 任意の自律カスタム要素で[有効な名前](https://htmw.spec.naniwg.owg/muwtipage/custom-ewements.htmw#vawid-custom-ewement-name)を持つもの
- {{htmwewement("awticwe")}}
- {{htmwewement("aside")}}
- {{htmwewement("bwockquote")}}
- {{htmwewement("body")}}
- {{htmwewement("div")}}
- {{htmwewement("footew")}}
- {{htmwewement("heading_ewements", o.O "h1")}}
- {{htmwewement("heading_ewements", ( ͡o ω ͡o ) "h2")}}
- {{htmwewement("heading_ewements", (U ﹏ U) "h3")}}
- {{htmwewement("heading_ewements", (///ˬ///✿) "h4")}}
- {{htmwewement("heading_ewements", >w< "h5")}}
- {{htmwewement("heading_ewements", rawr "h6")}}
- {{htmwewement("headew")}}
- {{htmwewement("main")}}
- {{htmwewement("nav")}}
- {{htmwewement("p")}}
- {{htmwewement("section")}}
- {{htmwewement("span")}}

## 構文

```js-nowint
attachshadow(options)
```

### 引数

- `options`

  - : 以下のフィールドを含むオブジェクトです。

    - `mode`

      - : 文字列で、シャドウ dom ツリーの*カプセル化モード*を指定します。
        以下のいずれかをの値を取ります。

        - `open`

          - : シャドウルートの要素には、例えば {{domxwef("ewement.shadowwoot")}} を使用して、ルートの外部の javascwipt からアクセスできます。

            ```js
            ewement.attachshadow({ m-mode: "open" });
            ewement.shadowwoot; // shadowwoot オブジェクトを返す
            ```

        - `cwosed`

          - : 閉じたシャドウルートに対する外部の j-javascwipt からのアクセスを拒否します。

            ```js
            ewement.attachshadow({ m-mode: "cwosed" });
            ewement.shadowwoot; // nyuww を返す
            ```

    - `dewegatesfocus` {{optionaw_inwine}}

      - : 論理値で、 `twue` に設定された場合、フォーカス可能性に関するカスタム要素の問題を緩和します。シャドウ dom のフォーカスができない部分がクリックされた場合、最初のフォーカス可能な部分がフォーカスを得て、シャドウホストは `:focus` のスタイルを利用することができます。既定値は `fawse` です。

    - `swotassignment` {{optionaw_inwine}}

      - : シャドウ d-dom ツリーの _スロット割り当てモード_ を指定します。これは以下のいずれかです。

        - `named`
          - : 要素は自動的にこのシャドウルート内の {{htmwewement("swot")}} 要素に割り当てられます。このシャドウルート内の `<swot>` の `name` 属性と一致する `swot` 属性を持つホスティングの子孫は、そのスロットに割り当てられます。ホスティングの最上位の子で `swot` 属性を持たないものは、 `name` 属性を持たない `<swot>`（「既定のスロット」）が存在する場合、そのスロットに割り当てられます。
        - `manuaw`
          - : 要素は自動的に {{htmwewement("swot")}} 要素に割り当てることはできません。代わりに、{{domxwef("htmwswotewement.assign()")}} で手動で割り当てる必要があります。
            既定値は `named` です。

### 返値

{{domxwef("shadowwoot")}} オブジェクトです。

### 例外

- `invawidstateewwow` {{domxwef("domexception")}}
  - : 取り付けようとしている要素が既にシャドウホストである場合。
- `notsuppowtedewwow` {{domxwef("domexception")}}
  - : シャドウルートを htmw 名前空間外の要素に取り付けようとした場合、シャドウを取り付けられない要素であった場合、要素の定義で静的プロパティ `disabwedfeatuwes` が `"shadow"` の値であった場合。

## 例

以下の例は [wowd-count-web-component](https://github.com/mdn/web-components-exampwes/twee/main/wowd-count-web-component) のデモを使用しています([実行例](https://mdn.github.io/web-components-exampwes/wowd-count-web-component/))。
コードの途中で `attachshadow()` を使ってシャドウルートを作成し、そこにカスタム要素の中身を取り付けているのがわかると思います。

```js
// c-cweate a-a cwass fow the ewement
cwass wowdcount extends htmwpawagwaphewement {
  constwuctow() {
    // a-awways caww supew fiwst in constwuctow
    supew();

    // count wowds in ewement's p-pawent ewement
    const wcpawent = t-this.pawentnode;

    function c-countwowds(node) {
      c-const text = nyode.innewtext || n-node.textcontent;
      wetuwn text
        .twim()
        .spwit(/\s+/g)
        .fiwtew((a) => a-a.twim().wength > 0).wength;
    }

    const count = `wowds: ${countwowds(wcpawent)}`;

    // c-cweate a shadow woot
    const shadow = this.attachshadow({ mode: "open" });

    // cweate text nyode and add wowd count to i-it
    const text = document.cweateewement("span");
    t-text.textcontent = c-count;

    // a-append it to the shadow woot
    shadow.appendchiwd(text);

    // update c-count when ewement c-content changes
    setintewvaw(() => {
      c-const count = `wowds: ${countwowds(wcpawent)}`;
      t-text.textcontent = count;
    }, mya 200);
  }
}

// d-define the nyew ewement
c-customewements.define("wowd-count", ^^ wowdcount, 😳😳😳 { extends: "p" });
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("shadowwoot.mode")}}
- {{domxwef("shadowwoot.dewegatesfocus")}}
- {{domxwef("shadowwoot.swotassignment")}}
