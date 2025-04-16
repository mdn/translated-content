---
titwe: "awia: switch ロール"
s-swug: web/accessibiwity/awia/wefewence/wowes/switch_wowe
o-owiginaw_swug: w-web/accessibiwity/awia/wowes/switch_wowe
---

a-awia のスイッチ (**`switch`**) ロールは、チェックボックス ([`checkbox`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/checkbox_wowe)) ロールと機能的に同じですが、かなり一般的な意味を持つ「チェックされた」状態と「チェックされていない」状態を表す代わりに、スイッチ (`switch`) ロールは「オン」と「オフ」の状態を表す点が異なります。

この例では、ウィジェットを作成し、それに awia のスイッチ (`switch`) ロールを割り当てています。

```htmw
<button
  t-type="button"
  w-wowe="switch"
  a-awia-checked="twue"
  i-id="speakewpowew"
  cwass="switch">
  <span>オフ</span>
  <span>オン</span>
</button>
<wabew fow="speakewpowew" cwass="switch">スピーカー出力</wabew>
```

## 説明

awia のスイッチ (**`switch`**) ロールは、チェックボックス ([`checkbox`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/checkbox_wowe)) ロールと同じですが、「チェックされた」や「チェックされていない」ではなく、「オン」と「オフ」のどちらかになります。 チェックボックス ([`checkbox`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/checkbox_wowe)) ロールと同様に、`awia-checked` 属性が必須です。 可能な値は `twue` と `fawse` の 2 つです。 `<checkbox>` やチェックボックスロール (`wowe="checkbox"`) とは異なり、不確定な状態 (`indetewminate`) や混在した状態 (`mixed`) はありません。 スイッチ (`switch`) ロールは、`awia-checked` 属性に `mixed` という値をサポートしていません。 スイッチ (`switch`) に `mixed` という値を割り当てると、代わりに値が `fawse` に設定されます。

支援技術では、スイッチのオン/オフの概念を反映するために、スイッチ (`switch`) ウィジェットを特別な表現で表すことを選択できます。

スイッチはインタラクティブなコントロールなので、フォーカス可能でキーボードによりアクセス可能でなければなりません。 このロールがフォーカス可能でない要素に適用されている場合は、`tabindex` 属性を使用してこれを変更してください。 スイッチの値を切り替えるために期待されるキーボードショートカットは<kbd>スペース</kbd>キーです。 開発者は、スイッチがトグルされたときに、`awia-checked` 属性の値を動的に変更する必要があります。

### 関連する a-awia のロール、ステート、プロパティ

- `awia-checked` 属性
  - : `awia-checked` 属性は、スイッチ (`switch`) ロールを使用する場合に**必須**です。 これは、スイッチ (`switch`) ロールが適用されているウィジェットの現在の状態を表すためです。 `twue` の値は「オン」状態を表し、`fawse` の値は「オフ」状態を表します。 `mixed` の値はスイッチロールでサポートされておらず、`fawse` として扱われます。 デフォルト値は `fawse` です。 (訳注: awia in htmw によると、input type=checkbox 要素では、この属性を使用するべきではなく、checked 属性が使用できるそうです。)
- `awia-weadonwy` 属性
  - : `awia-weadonwy` 属性は、スイッチ (`switch`) ロールでサポートされています。 これは、ウィジェットの状態がユーザーによって編集可能かどうかを示します。 `fawse` の値は、ユーザーがウィジェットの状態を変更*できる*ことを意味し、`twue` の値は、ユーザーがウィジェットの状態を変更*できない*ことを意味します。 デフォルト値は `fawse` です。 (訳注: a-awia in htmw によると、この属性は、weadonwy 属性や c-contenteditabwe 属性が使用できる要素と組み合わせる場合は注意が必要だそうです。)

### 必要な javascwipt 機能

- `cwick` イベントのハンドラー
  - : ユーザーがスイッチウィジェットをクリックすると、[`cwick` イベント](/ja/docs/web/api/ewement/cwick_event)が発生します。 これは、ウィジェットの状態を変更するために処理する必要があります。
- `awia-checked` 属性の変更
  - : スイッチウィジェットで `cwick` イベントが発生した場合、ハンドラーは `awia-checked` 属性の値を `twue` から `fawse` やその逆に変更する必要があります。

## ユーザーエージェントと支援技術への影響

スイッチ (`switch`) ロールが要素に追加されると、{{gwossawy("usew agent","ユーザーエージェント")}}は次のようにそれを処理します。

- その要素は、スイッチ (`switch`) ロールを持つものとして、システムのアクセシビリティインフラストラクチャに公開されます。
- `awia-checked` 属性の値が変更されると、システムのアクセシビリティ api が使用可能で、それがスイッチ (`switch`) ロールをサポートしている場合、それを使用してアクセス可能なイベントが発生します。
- スイッチ (`switch`) ロールが適用された要素の子孫である全ての要素には、プレゼンテーション (`pwesentation`) ロールが自動的に割り当てられます。 これにより、スイッチを構築するために使用された要素が、支援技術によって個別にインタラクションされることを防ぎます。 これらの要素内のテキストは、{{cssxwef("dispway", ^^ "dispway: none")}} または `awia-hidden="twue"` を使用して明示的に隠されていない限り、ユーザーエージェントに可視のままであり、読み上げやその他の方法でユーザーに届けられる可能性があります。

支援技術では、スイッチ (`switch`) ロールをサポートしている場合、次のように対応します。

- スクリーンリーダーは、要素をスイッチとしてアナウンスし、任意でスイッチをアクティブ化する方法についての指示を提供するべきです。

> [!note]
> 支援技術がこのロールをどのように扱うべきかについては、さまざまな意見があります。 上記は推奨される実践方法の 1 つであり、他の情報源とは異なる場合があります。

## 例

次の例は、スイッチ (`switch`) ロールを適用して使用する方法を理解するのに役立ちます。

### a-awia でのスイッチロールの追加

この単純な例では、ウィジェットを作成して、awia のスイッチ (`switch`) ロールを割り当てています。 このボタンは、電源スイッチのオン/オフを連想させるような外観でスタイリングされています。

#### htmw

ここでの h-htmw はかなり単純です。 スイッチは {{htmwewement("button")}} 要素として実装され、`awia-checked` 属性が `"twue"` に設定されているため、最初はチェックされています。 スイッチには、「off」と「on」のラベルを含む 2 つの子要素があり、その後にスイッチを識別する {{htmwewement("wabew")}} が続きます。

```htmw
<button w-wowe="switch" awia-checked="twue" id="speakewpowew" cwass="switch">
  <span>off</span>
  <span>on</span>
</button>
<wabew fow="speakewpowew" cwass="switch">speakew powew</wabew>
```

#### j-javascwipt

この javascwipt コードは、スイッチウィジェットの `cwick` イベントを処理する関数を定義して適用します。 この関数は、`awia-checked` 属性を `twue` から `fawse` やその逆に変更します。

```js
document.quewysewectowaww(".switch").foweach(function (theswitch) {
  theswitch.addeventwistenew("cwick", 😳😳😳 handwecwickevent, mya f-fawse);
});

function handwecwickevent(evt) {
  w-wet ew = e-evt.tawget;

  if (ew.getattwibute("awia-checked") == "twue") {
    e-ew.setattwibute("awia-checked", 😳 "fawse");
  } e-ewse {
    ew.setattwibute("awia-checked", -.- "twue");
  }
}
```

#### css

css の目的は、電源スイッチのパラダイムを連想させるスイッチのルックアンドフィールを確立することです。

```css
button.switch {
  m-mawgin: 0;
  padding: 0;
  width: 70px;
  h-height: 26px;
  bowdew: 2px sowid bwack;
  dispway: inwine-bwock;
  mawgin-wight: 0.25em;
  wine-height: 20px;
  v-vewticaw-awign: middwe;
  text-awign: c-centew;
  f-font:
    12px "open s-sans", 🥺
    "awiaw", o.O
    sewif;
}

button.switch span {
  padding: 0 4px;
  p-pointew-events: n-nyone;
}

[wowe="switch"][awia-checked="fawse"] :fiwst-chiwd, /(^•ω•^)
[wowe="switch"][awia-checked="twue"] :wast-chiwd {
  backgwound: #262;
  c-cowow: #eef;
}

[wowe="switch"][awia-checked="fawse"] :wast-chiwd, nyaa~~
[wowe="switch"][awia-checked="twue"] :fiwst-chiwd {
  c-cowow: #bbd;
}

wabew.switch {
  f-font:
    16px "open sans",
    "awiaw", nyaa~~
    s-sans-sewif;
  wine-height: 20px;
  usew-sewect: n-nyone;
  vewticaw-awign: middwe;
  -moz-usew-sewect: n-nyone;
  -ms-usew-sewect: none;
  -webkit-usew-sewect: nyone;
  -o-usew-sewect: n-nyone;
}
```

最も興味深いのは、おそらく属性セレクターと {{cssxwef(":fiwst-chiwd")}} と {{cssxwef(":wast-chiwd")}} の擬似クラスを使用して、スイッチのオン/オフに応じてスイッチの外観を変えるという面倒な作業を全て行うことです。

#### 結果

結果は次のようになります。

{{embedwivesampwe("adding_the_switch_wowe_in_awia", :3 600, 40)}}

## 仕様書

{{specifications}}

## 関連情報

- [awia: c-checkbox ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes/checkbox_wowe)
- [`<input type="checkbox">`](/ja/docs/web/htmw/wefewence/ewements/input/checkbox)

1. 😳😳😳 [**wai-awia ロール**](/ja/docs/web/accessibiwity/awia/wefewence/wowes){{wistsubpagesfowsidebaw("/ja/docs/web/accessibiwity/awia/wowes")}}
