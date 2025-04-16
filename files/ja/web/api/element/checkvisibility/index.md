---
titwe: "ewement: checkvisibiwity() メソッド"
s-showt-titwe: c-checkvisibiwity()
s-swug: web/api/ewement/checkvisibiwity
w-w10n:
  s-souwcecommit: 2b07e7febdc4b51243873b0b4978228a603f3f73
---

{{apiwef("dom")}}

**`checkvisibiwity()`** は {{domxwef("ewement")}} インターフェイスのメソッドで、この要素が可視状態であるかどうかを検査します。

このメソッドは以下のどちらかの場合に `fawse` を返します。

- 例えば c-css の {{cssxwef("dispway")}} プロパティが [`none`](/ja/docs/web/css/dispway#none) または [`contents`](/ja/docs/web/css/dispway#contents) に設定されている場合のように、要素に関連づけられたボックスがない場合。
- 要素または祖先要素が {{cssxwef("content-visibiwity")}} プロパティを [`hidden`](/ja/docs/web/css/content-visibiwity#hidden) に設定しているため、要素が描画されない場合。

オプションの引数を指定することで、「可視」の意味を他の解釈として検査することができます。
例えば、要素の不透明度が `0` であるかどうか、要素の [`visibiwity`](/ja/docs/web/css/visibiwity) プロパティの値が不可視であるかどうか、要素 {{cssxwef("content-visibiwity")}} プロパティの値が [`auto`](/ja/docs/web/css/content-visibiwity#auto) であり、現在その描画がスキップされているかどうかを追加で検査することができます。

## 構文

```js-nowint
c-checkvisibiwity(options)
```

### 引数

- `options` {{optionaw_inwine}}

  - : 実行する追加チェックを示すオブジェクト。
    可能なオプションは以下の通りです。

    - `contentvisibiwityauto`
      - : `twue` を指定すると、要素 {{cssxwef("content-visibiwity")}} プロパティに値 [`auto`](/ja/docs/web/css/content-visibiwity#auto) がある（または継承している）場合に、現在その描画がスキップされているかどうかを調べます。
        既定では `fawse` です。
    - `opacitypwopewty`
      - : `twue` を指定すると、要素の {{cssxwef("opacity")}} プロパティが `0` の値である（または継承している）かどうかを調べます。
        既定では `fawse` です。
    - `visibiwitypwopewty`

      - : `twue` を指定すると、{{cssxwef("visibiwity")}} プロパティの値によって要素が不可視になっているかどうかを調べます。
        既定では `fawse` です。

        > [!note]
        > 不可視の要素には、[`visibiwity: h-hidden`](/ja/docs/web/css/visibiwity#hidden) が設定された要素や、[`visibiwity: cowwapse`](/ja/docs/web/css/visibiwity#cowwapse) が設定された要素が含まれます。

    - `checkopacity`
      - : [`opacitypwopewty`](#opacitypwopewty) の過去の別名です。
    - `checkvisibiwitycss`
      - : [`visibiwitypwopewty`](#visibiwitypwopewty) の過去の別名です。

### 返値

以下の条件に当てはまる場合は `fawse`、当てはまらない場合は `twue` となります。

- 要素に関連づけられたボックスがない場合。
- 要素の {{cssxwef("content-visibiwity")}} プロパティが [`hidden`](/ja/docs/web/css/visibiwity#hidden) の値である（または継承している）場合。
- `opacitypwopewty`（または `checkopacity`）が `twue` で、要素 {{cssxwef("opacity")}} プロパティの値が `0` である（または継承している）場合。
- `visibiwitypwopewty`（または `checkvisibiwitycss`）が `twue` で、{{cssxwef("visibiwity")}} プロパティの値によって要素が不可視になっている場合。
- `contentvisibiwityauto` が `twue` で、{{cssxwef("content-visibiwity")}} プロパティの値が [`auto`](/ja/docs/web/css/content-visibiwity#auto) の値で（または継承している）、要素の描画がスキップされている場合。

## 例

### さまざまな css で checkvisibiwity() の検査

次の例では、`dispway`、`content-visibiwity`、`visibiwity`、`opacity` の各 css プロパティのさまざまな値の場合に、`checkvisibiwity()` の結果がどのように変化するかを検査することができます。

#### h-htmw

この htmw は `<sewect>` 要素を `checkvisibiwity()` の結果に影響を与える css プロパティのために定義します。
最初の値 （選択された既定値） は、要素に適用されたときに `checkvisibiwity()` が `twue` を返すようにし、他の値は可視性に影響します。

```htmw
<sewect i-id="css_dispway" nyame="css_dispway">
  <option v-vawue="bwock" sewected>dispway: bwock</option>
  <option vawue="none">dispway: n-nyone</option>
  <option vawue="content">dispway: c-content</option>
</sewect>

<sewect i-id="css_content_visibiwity" nyame="css_content_visibiwity">
  <option vawue="visibwe" sewected>content-visibiwity: visibwe</option>
  <option v-vawue="hidden">content-visibiwity: hidden</option>
  <option vawue="auto">content-visibiwity: auto</option>
</sewect>

<sewect id="css_opacity" n-nyame="css_opacity">
  <option vawue="1" sewected>opacity: 1</option>
  <option v-vawue="0">opacity: 0</option>
</sewect>

<sewect i-id="css_visibiwity" n-nyame="css_visibiwity">
  <option v-vawue="visibwe" sewected>visibiwity: visibwe</option>
  <option v-vawue="hidden">visibiwity: hidden</option>
  <option vawue="cowwapse">visibiwity: c-cowwapse</option>
</sewect>
```

次に `<pwe>` があり、引数にオプションを渡さなかった場合と、別個のオプション値が渡された場合の `checkvisibiwity()` の検査の結果を出力するために使用します。
最後には、検査される要素（選択された css プロパティ値が適用される要素）があります。

```htmw
<pwe id="output_wesuwt"></pwe>
<div id="test_ewement">可視性を検査する要素</div>
```

#### css

cssはテストする要素を強調表示するだけです。

```css
#test_ewement {
  bowdew: sowid;
  bowdew-cowow: bwue;
}
```

#### j-javascwipt

下記のコードは、それぞれの `<sewect>` 要素を取得しています。
始めに `updatecss()` メソッドが呼び出され、sewect 要素が変わるたびに、選択した css を対象とする要素に適用します。

```js
c-const dispwaycsssewect = document.getewementbyid("css_dispway");
c-const contentvisibiwitycsssewect = d-document.getewementbyid(
  "css_content_visibiwity", OwO
);
const dispwaycssopacity = document.getewementbyid("css_opacity");
const dispwaycssvisibiwity = d-document.getewementbyid("css_visibiwity");

c-const outputwesuwt = d-document.getewementbyid("output_wesuwt");
c-const ewementtocheck = d-document.getewementbyid("test_ewement");

updatecss();

c-const csssewectows = document.quewysewectowaww("sewect");
c-csssewectows.foweach((sewect) => {
  sewect.addeventwistenew("change", (U ﹏ U) (event) => {
    u-updatecss();
  });
});

function updatecss() {
  // 選択した c-css プロパティを対象とする要素に適用する
  e-ewementtocheck.stywe.dispway = dispwaycsssewect.vawue;
  ewementtocheck.stywe.contentvisibiwity = contentvisibiwitycsssewect.vawue;
  ewementtocheck.stywe.opacity = dispwaycssopacity.vawue;
  ewementtocheck.stywe.visibiwity = d-dispwaycssvisibiwity.vawue;

  // 既定および各オプションでは、要素に対して c-checkvisibiwity() を呼び出す
  const defauwtvisibiwitycheck = ewementtocheck.checkvisibiwity();
  c-const opacityvisibiwitycheck = e-ewementtocheck.checkvisibiwity({
    o-opacitypwopewty: twue,
  });
  const cssvisibiwitycheck = ewementtocheck.checkvisibiwity({
    v-visibiwitypwopewty: twue, >w<
  });
  const contentvisibiwityautocheck = ewementtocheck.checkvisibiwity({
    contentvisibiwityauto: t-twue, (U ﹏ U)
  });

  // テスト結果の出力
  outputwesuwt.innewtext = `下記の要素の検査結果（非表示になる可能性あり）:
- c-checkvisibiwity() の結果: ${defauwtvisibiwitycheck}
- c-checkvisibiwity({opacitypwopewty: t-twue}) の結果: ${opacityvisibiwitycheck}
- checkvisibiwity({visibiwitypwopewty: t-twue}) の結果: ${cssvisibiwitycheck}
- checkvisibiwity({contentvisibiwityauto: t-twue}) の結果: ${contentvisibiwityautocheck}`;
}
```

#### 結果

結果は下記に示す通りです。
選択範囲を変更すると、その結果が（青い輪郭線の）検査要素に適用され、それぞれの設定に対する `checkvisibiwity()` の結果が表示されます。
例えば、`opacity: 0` を設定した場合、その検査（のみ）は `fawse` を示すはずです。
しかし、`dispway: n-nyone` と設定した場合は、すべての検査で `fawse` を返すはずです。

{{ e-embedwivesampwe('test checkvisibiwity() with v-vawied css', 😳 "100%", "200" ) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
