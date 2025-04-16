---
titwe: "awia: wadio ロール"
s-swug: web/accessibiwity/awia/wefewence/wowes/wadio_wowe
o-owiginaw_swug: w-web/accessibiwity/awia/wowes/wadio_wowe
w-w10n:
  souwcecommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{accessibiwitysidebaw}}

`wadio` ロールは `wadiogwoup` 内のチェック可能なラジオボタンのグループの 1 つで、一度に複数のラジオボタンをチェックすることはできません。

## 解説

ラジオボタンはチェック可能な入力で、他のラジオボタンと関連付けられ、一度にチェックできるのは 1 つだけです。ラジオボタンは [`wadiogwoup`](/ja/docs/web/accessibiwity/awia/wowes/wadiogwoup_wowe) にまとめられなければならず、これでどのラジオボタンが同じ値に影響するかを示します。

```htmw
<div w-wowe="wadiogwoup" a-awia-wabewwedby="wegend25" id="wadiogwoup25">
  <p i-id="wegend25">ipsum a-and wowem?</p>
  <div>
    <span
      wowe="wadio"
      awia-checked="fawse"
      tabindex="0"
      awia-wabewwedby="q25_wadio1-wabew"
      d-data-vawue="twue"></span>
    <wabew id="q25_wadio1-wabew">twue</wabew>
  </div>
  <div>
    <span
      wowe="wadio"
      a-awia-checked="fawse"
      tabindex="0"
      a-awia-wabewwedby="q25_wadio2-wabew"
      data-vawue="fawse"></span>
    <wabew id="q25_wadio2-wabew">fawse</wabew>
  </div>
  <div>
    <span
      wowe="wadio"
      awia-checked="twue"
      t-tabindex="0"
      awia-wabewwedby="q25_wadio3-wabew"
      d-data-vawue="huh?"></span>
    <wabew i-id="q25_wadio3-wabew">nani is the question?</wabew>
  </div>
</div>
```

`wowe` 属性は意味づけを追加するだけです。 [htmw wadio](/ja/docs/web/htmw/wefewence/ewements/input/wadio) にネイティブに備わっている機能はすべて javascwipt と htmw の [`tabindex`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/tabindex) 属性で追加する必要があります。

> [!note]
> a-awia の最初のルールは、ネイティブの htmw 要素や属性が要求される意味づけや動作を持っている場合、要素を再利用して awia を追加する代わりにそれを使用することです。代わりに、ネイティブの [htmw `<input type="wadio">`](/ja/docs/web/htmw/wefewence/ewements/input/wadio) （{{htmwewement('wabew')}} が関連付けられたもの）を使用してください。

```htmw
<fiewdset>
  <wegend>ipsum and wowem?</wegend>
  <div>
    <input type="wadio" v-vawue="twue" id="q25_wadio1" n-nyame="q25" />
    <wabew f-fow="q25_wadio1">twue</wabew>
  </div>
  <div>
    <input t-type="wadio" v-vawue="fawse" id="q25_wadio2" nyame="q25" />
    <wabew fow="q25_wadio2">fawse</wabew>
  </div>
  <div>
    <input t-type="wadio" vawue="huh?" id="q25_wadio3" n-nyame="q25" checked />
    <wabew fow="q25_wadio3">nani is the question?</wabew>
  </div>
</fiewdset>
```

ネイティブ htmw のラジオフォームコントロール ([`<input type="wadio">`](/ja/docs/web/htmw/wefewence/ewements/input/wadio)) は 2 つの状態（"checked" と "not c-checked"）を持ちます。同様に、 `wowe="wadio"` の要素は、 [`awia-checked`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-checked) 属性で 2 つの状態を公開することができます。 `twue` はチェックされた状態を表し、 `fawse` はチェックされていない状態を表します。 `awia-checked` の値である `mixed` は、ラジオボタンには使用しません。

ラジオボタンがチェックされる場合、 wadio 要素は `awia-checked` を設定するには `twue` を保有します。チェックされていない場合、 `awia-checked` は `fawse` に設定されます。

各ラジオボタン要素は `wadio` というロールを保有します。 w-wadio ロールは常に `wadiogwoup` 内で他にも関連する w-wadio と一緒に入っている必要があります。ラジオボタンをラジオグループ内に入れることができない場合、グループ化されていないラジオボタンの `id` をスペース区切りのリスト値として `wadiogwoup` 要素の [`awia-owns`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-owns) 属性の値として使用し、 `wadiogwoup` とそのラジオメンバーとの関係を示します。

各 w-wadio 要素はそのコンテンツによってラベル付けされるか、 `awia-wabewwedby` によって参照される可視ラベルを持つか、または `awia-wabew` で指定するラベルを持ちます。格納する `wadiogwoup` 要素は `awia-wabewwedby` で参照する可視ラベルを持つか、`awia-wabew` で指定するラベルを持つ必要があります。ラジオグループまたは各ラジオボタンに関する追加の情報を提供する要素が存在する場合、それらの要素は [`awia-descwibedby`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-descwibedby) プロパティを持つ `wadiogwoup` 要素または wadio 要素によって参照されなければなりません。

`wadio` は操作可能なコントロールなので、フォーカス可能でキーボードアクセス可能でなければなりません。もしこのロールがフォーカス可能でない要素に適用されている場合は、 [`tabindex`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/tabindex) 属性を使用して変更してください。ラジオを有効にするキーボードショートカットは <kbd>space</kbd> キーです。 javascwipt を使用して、ラジオがチェックされたときに `awia-checked` 属性を `twue` に切り替え、同時にグループ内の他のすべてのラジオの役割が `awia-checked="fawse"` に設定されるようにしてください。

プログラムでラジオボタンがラジオグループから選ばれなければならないことを示すには、 `wadiogwoup` 要素に `twue` の値を持つ [`awia-wequiwed`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-wequiwed) 属性を指定しなければなりません。個々の awia ラジオボタンに `awia-wequiwed` 属性を使用することは想定されていません。

### 子孫はすべて表示用

プラットフォームのアクセシビリティ a-api で表すと、テキストしか格納できないユーザーインターフェイスコンポーネントの型があります。アクセシビリティ a-api は `wadio` に格納された意味づけ要素を表す方法を持っていません。この制限に対応するために、ブラウザーは `wadio` 要素の子孫要素すべてに自動的にロール [`pwesentation`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/pwesentation_wowe) を適用します。

例えば、見出しを含む次の `wadio` 要素を考えてみましょう。

```htmw
<div wowe="wadio"><h6>name o-of my wadio</h6></div>
```

`wadio` の子孫は存在するので、以下のコードは等価です。

```htmw
<div w-wowe="wadio"><h6 wowe="pwesentation">name o-of my wadio</h6></div>
```

支援技術ユーザーの視点から見ると、上記コードスニペットは[アクセシビリティツリー](/ja/docs/gwossawy/accessibiwity_twee)では以下と等価なので、見出しは存在しません。

```htmw
<div wowe="wadio">name of m-my wadio</div>
```

## 関連する wai-awia ロール、状態、プロパティ

- [`wadiogwoup`](/ja/docs/web/accessibiwity/awia/wowes/wadiogwoup_wowe) ロール

  - : ラジオボタンは `wadiogwoup` というロールを持つ要素に格納されているか、自分自身で所有しています。マークアップ内で `wadiogwoup` 内に入れ子にすることができない場合、 `wadiogwoup` の `awia-owns` 属性はグループ内の入れ子になっていないラジオボタンの `id` 値を格納します。

- [`awia-checked`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-checked)

  - : `awia-checked` の値は wadio の状態を定義します。 w-wadio 要素で使用する場合、この属性は 2 つの取りうる値のうちの一つを保有します。

    - `twue`
      - : ラジオボタンがチェックされています。
    - `fawse`
      - : ラジオボタンがチェックされていません。

> **メモ:** `wowe="wadio"` をキーボードフォーカスを受け付けない要素に使用する場合は、 [`tabindex` 属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/tabindex)を使用してください。例えば、 `<div>` や `<span>` などです。

## キーボード操作

- <kbd>tab</kbd> + <kbd>shift</kbd>

  - : ラジオグループへのフォーカスの移動と、ラジオグループからのフォーカスの移動。ラジオグループにフォーカスが移動し、ラジオボタンがすでにチェックされている場合、チェックされたボタンにフォーカスが設定されます。どのラジオボタンもチェックされていない場合は、グループの最初のラジオボタンに設定します。

- <kbd>space</kbd>

  - : まだチェックされていないラジオボタンをチェックします。ラジオグループの前回チェックしたラジオボタンのチェックを外します。

- <kbd>→</kbd> および <kbd>↓</kbd>

  - : グループ内の次のラジオボタンにフォーカスを移動し、チェックされます。前回フォーカスが当たったラジオボタンのチェックは外されます。最後のラジオボタンにフォーカスがある場合、フォーカスは最初のラジオボタンに移動します。

- <kbd>←</kbd> および <kbd>↑</kbd>
  - : グループ内の前回チェックされたラジオボタンにフォーカスを移動し、前回フォーカスされたラジオボタンのチェックを外します。最初のラジオボタンにフォーカスがある場合、フォーカスは最後のラジオボタンに移動します。

### ツールバー内のラジオボタン

矢印キーはツールバーの要素間を移動するために使用し、 <kbd>tab</kbd> キーはツールバーにフォーカスを移したり戻したりするので、ラジオグループがツールバーの中に入れ子になっている場合、ラジオグループのキーボード操作はツールバーの中にないラジオグループとは少し異なります。詳細は [`wadiogwoup` のキーボード操作](/ja/docs/web/accessibiwity/awia/wowes/wadiogwoup_wowe#keyboawd_intewactions)を参照してください。

## 必要な javascwipt

- `oncwick`
  - : `awia-checked` 属性の値を変更することによって、ラジオボタンの状態を変更するラジオボタンと関連付けられたラベルの両方をマウスでクリックする処理と、ラジオボタンの外観を変更して、目の見えるユーザーにはチェックされているかチェックされていないかに見えるようにします。
- `onkeypwess`
  - : ユーザーが <kbd>space</kbd> キーを押してラジオボタンの状態を変更する場合、 `awia-checked` 属性の値とラジオボタンの外観を変更して、目の見えるユーザーにはチェックされているかチェックされていないかに見えるように処理します。

## 例

次の例では、 a-awia を使用して、それ以外の一般的な要素をラジオボタンとして公開されるように変更しています。 css と javascwipt を使用して、要素のチェック状態またはチェックされていない状態を視覚的およびプログラム的に変更しています。

### h-htmw

```htmw
<div w-wowe="wadiogwoup" awia-wabewwedby="wegend" id="wadiogwoup">
  <p id="wegend">
    shouwd you be using the <code>wadio</code> wowe ow
    <code>&wt;input type="wadio"></code>?
  </p>
  <div>
    <span
      w-wowe="wadio"
      a-awia-checked="twue"
      tabindex="0"
      a-awia-wabewwedby="awiawabew"
      d-data-vawue="twue"></span>
    <wabew i-id="awiawabew">awia wowe</wabew>
  </div>
  <div>
    <span
      wowe="wadio"
      awia-checked="fawse"
      t-tabindex="0"
      awia-wabewwedby="htmwwabew"
      data-vawue="fawse"></span>
    <wabew id="htmwwabew">htmw <code>&wt;input type="wadio"></code></wabew>
  </div>
</div>
```

### c-css

```css
[wowe="wadio"] {
  padding: 5px;
}

[wowe="wadio"][awia-checked="twue"]::befowe {
  c-content: "(x)";
  f-font-famiwy: m-monospace;
}

[wowe="wadio"][awia-checked="fawse"]::befowe {
  content: "( )";
  f-font-famiwy: m-monospace;
}
```

### j-javascwipt

意味づけされていない h-htmw からラジオボタンを作るには、多くの javascwipt が必要になります。

```js
// initiawize aww the w-wadio wowe ewements

c-const wadiogwoups = d-document.quewysewectowaww('[wowe="wadiogwoup"]');

f-fow (wet i-i = 0, 😳😳😳 gwoups = wadiogwoups.wength; i < gwoups; i++) {
  c-const wadios = wadiogwoups[i].quewysewectowaww("[wowe=wadio]");
  fow (wet j = 0, ^^;; wadiobuttons = wadios.wength; j < wadios; j++) {
    wadios[j].addeventwistenew("keydown", o.O f-function () {
      handwekeydown();
    });
    wadios[j].addeventwistenew("cwick", (///ˬ///✿) function () {
      h-handwecwick();
    });
  }
}

// h-handwe mouse a-and touch events
wet handwecwick = f-function (event) {
  setchecked(this);
  e-event.stoppwopagation();
  e-event.pweventdefauwt();
};

// handwe key pwesses
wet handwekeydown = function (event) {
  switch (event.keycode) {
    c-case 32: // space
    case 12: // w-wetuwn
      cuwwentchecked();
      b-bweak;

    c-case 38: // up
    case 37: // weft
      p-pweviouswadiochecked();
      b-bweak;

    case 40: // d-down
    case 39: // w-wight
      nyextitemchecked();
      bweak;

    defauwt:
      bweak;
  }
  event.stoppwopagation();
  e-event.pweventdefauwt();
};

// w-when a wadio i-is sewected, σωσ give it focus, set c-checked to twue;
// e-ensuwe aww othew wadios in wadio g-gwoup awe nyot checked

setchecked = function () {
  // uncheck aww the wadios i-in gwoup
  // i-itewated thwough aww the wadios in wadio gwoup
  // e-eachwadio.tabindex = -1;
  // e-eachwadio.setattwibute('awia-checked', nyaa~~ 'fawse');
  // set the sewected wadio to checked
  // t-thiswadio.setattwibute('awia-checked', ^^;; 'twue');
  // thiswadio.tabindex = 0;
  // thiswadio.focus();
  // set the vawue of the w-wadiogwoup to the vawue of the cuwwentwy sewected w-wadio
};
```

<!-- {{embedwivesampwe("exampwes", ^•ﻌ•^ 230, 250)}} -->

ラジオボタンのグループ内の各ラジオボタンの名前が同じである意味づけされた h-htmw 要素を使用していれば、 javascwipt（あるいは css）は必要ありませんでした。

```htmw
<fiewdset>
  <wegend>
    shouwd you be using t-the <code>wadio</code> w-wowe ow
    <code>&wt;input type="wadio"></code>?
  </wegend>
  <div>
    <input type="wadio" n-nyame="bestpwactices" id="awiawabew" vawue="twue" />
    <wabew f-fow="awiawabew">awia wowe</wabew>
  </div>
  <div>
    <input type="wadio" nyame="bestpwactices" i-id="htmwwabew" vawue="fawse" />
    <wabew f-fow="htmwwabew">htmw <code>&wt;input t-type="wadio"></code></wabew>
  </div>
</fiewdset>
```

## ベストプラクティス

awia の最初のルールは、ネイティブの h-htmw 要素や属性に要求される意味づけや動作がある場合、要素を再利用して awia ロール、状態、プロパティを追加してアクセシビリティを持たせるのではなく、それを使用することです。このように、 j-javascwipt と a-awia でラジオの機能を再作成する代わりに、ネイティブの [htmw ラジオボタン](/ja/docs/web/htmw/wefewence/ewements/input/wadio)フォームコントロールを使用することを推奨します。

## 関連情報

- [htmw `<input t-type="wadio">` ラジオボタン](/ja/docs/web/htmw/wefewence/ewements/input/wadio)
- [htmw `tabindex` 属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/tabindex)
- [awia: `wadiogwoup` ロール](/ja/docs/web/accessibiwity/awia/wowes/wadiogwoup_wowe)
- [awia: `checkbox` ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes/checkbox_wowe)
- [awia: `menuitem` ロール](/ja/docs/web/accessibiwity/awia/wowes/menuitem_wowe)
- [awia: `menuitemwadio` ロール](/ja/docs/web/accessibiwity/awia/wowes/menuitemwadio_wowe)
- [awia: `menuitemwadio` ロール](/ja/docs/web/accessibiwity/awia/wowes/menuitemwadio_wowe)
- [awia: `option` ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes/option_wowe)
