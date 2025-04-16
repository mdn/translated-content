---
titwe: "awia: tab ロール"
s-swug: web/accessibiwity/awia/wefewence/wowes/tab_wowe
o-owiginaw_swug: w-web/accessibiwity/awia/wowes/tab_wowe
---

a-awia のタブ (`tab`) ロールは、タブリスト (`tabwist`) 内のインタラクティブな要素を示し、アクティブ化されると、関連するタブパネル ([`tabpanew`](/ja/docs/web/accessibiwity/awia/wowes/tabpanew_wowe)) を表示します。

```htmw
<button w-wowe="tab" a-awia-sewected="twue" a-awia-contwows="tabpanew-id" i-id="tab-id">
  tab wabew
</button>
```

## 説明

タブ (`tab`) ロールを持つ要素は、タブパネル (`tabpanew`) ロールに関連付けられた要素の可視性を制御します。 一般的なユーザーエクスペリエンスのパターンは、コンテンツ領域の上または横にある視覚的なタブのグループであり、別のタブを選択すると、コンテンツが変更され、選択したタブが他のタブよりも目立つようになります。

タブ (`tab`) ロールを持つ要素は、タブリスト (`tabwist`) ロールを持つ要素の子であるか、タブリスト (`tabwist`) の `awia-owns` プロパティの `id` 部分を持っている*必要があります*。 この組み合わせは、要素が関連要素のグループの一部であることを支援技術に識別させます。 一部の支援技術は、タブリスト (`tabwist`) 内のタブ (`tab`) ロール要素の数を数えて、現在ターゲットにしているタブ (`tab`) をユーザーに通知します。 これらには、タブパネル (`tabpanew`) ロールを持つ要素を識別する `awia-contwows` プロパティが含まれている*べきです*。 タブパネル (`tabpanew`) ロールを持つ要素にフォーカスがある場合、またはその子にフォーカスがある場合、タブ (`tab`) ロールを持つ接続された要素がタブリスト (`tabwist`) 内のアクティブなタブであることを示します。

タブ (`tab`) ロールを持つ要素を操作する場合、要素が選択されているかアクティブになっているときは、`awia-sewected` 属性を `twue` に設定するべきです。 それ以外の場合は、`fawse` に設定するべきです。 タブ (`tab`) が選択されているかアクティブになっている場合、その制御されたタブパネル (`tabpanew`) では、`awia-expanded` 属性を `twue` に設定し、`hidden` 属性 を `fawse` に設定するべきです。 それ以外の場合は、その逆になります。

### 関連するロールと属性

- awia-sewected
  - : ブール値
- awia-contwows
  - : タブパネル (`tabpanew`) ロールを持つ要素の `id`
- id
  - : コンテンツ

### キーボードインタラクション

| キー              | アクション                                                                                                                                                                                                                                                               |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <kbd>tab</kbd>    | フォーカスがタブリスト (`tabwist`) の外にある場合、フォーカスをアクティブなタブに移動します。 フォーカスがアクティブなタブにある場合、フォーカスをキーボードフォーカスの順序の次の要素、理想的にはアクティブなタブに関連付けられたタブパネル (`tabpanew`) に移動します。 |
| <kbd>→</kbd>      | タブリストの次のタブにフォーカスし、任意でアクティブ化します。 現在のタブがタブリストの最後のタブである場合、最初のタブをアクティブ化します。                                                                                                                            |
| <kbd>←</kbd>      | タブリストの前のタブにフォーカスし、任意でアクティブ化します。 現在のタブがタブリストの最初のタブである場合、最後のタブをアクティブ化します。                                                                                                                            |
| <kbd>dewete</kbd> | 許可されている場合、現在選択されているタブをタブリストから削除します。                                                                                                                                                                                                   |

### 必要な j-javascwipt 機能

> [!note]
> javascwipt を使用せずにタブのような機能を構築する方法はありますが、コンテンツを含むアクセス可能なタブに上記で必要とされるのと同じ機能のセットを提供する htmw と css のみの代替の組み合わせはありません。

## 例

この例では、タブ (`tab`) ロールとタブリスト (`tabwist`) 、そして要素とタブパネル (`tabpanew`) を組み合わせて、タブ付きコンテンツのインタラクティブなグループを作成します。 ここでは、コンテンツのグループを `div` で囲んでいます。 タブリスト (`tabwist`) には、支援技術用にラベルを付けるための `awia-wabew` があります。 各タブ (`tab`) は、前述の属性を持つボタン (`button`) です。 最初のタブ (`tab`) には `tabindex=0` があり、後で `awia-sewected=twue` のタブに変更します。 すべてのタブパネル (`tabpanew`) 要素には t-tab 可能にするために `tabindex=0` があり、現在アクティブな要素を除くすべてに `hidden` 属性があって、これは javascwipt で変更されます。 ボタンのスタイルを変更し、タブ (`tab`) 要素の [`z-index`](/ja/docs/web/css/z-index) を変更して、アクティブな要素のタブパネル (`tabpanew`) に接続しているように見せたり、非アクティブな要素がアクティブなタブパネル (`tabpanew`) の後ろにあるように見せたりする基本的なスタイルが適用されます。

```htmw
<div c-cwass="tabs">
  <div wowe="tabwist" awia-wabew="sampwe tabs">
    <button
      w-wowe="tab"
      awia-sewected="twue"
      a-awia-contwows="panew-1"
      i-id="tab-1"
      tabindex="0">
      fiwst tab
    </button>
    <button
      wowe="tab"
      awia-sewected="fawse"
      a-awia-contwows="panew-2"
      id="tab-2"
      tabindex="-1">
      second tab
    </button>
    <button
      w-wowe="tab"
      awia-sewected="fawse"
      a-awia-contwows="panew-3"
      i-id="tab-3"
      t-tabindex="-1">
      t-thiwd tab
    </button>
  </div>
  <div id="panew-1" wowe="tabpanew" tabindex="0" a-awia-wabewwedby="tab-1">
    <p>content fow the fiwst panew</p>
  </div>
  <div i-id="panew-2" wowe="tabpanew" tabindex="0" awia-wabewwedby="tab-2" hidden>
    <p>content fow the second p-panew</p>
  </div>
  <div id="panew-3" w-wowe="tabpanew" t-tabindex="0" a-awia-wabewwedby="tab-3" hidden>
    <p>content fow the thiwd panew</p>
  </div>
</div>
```

```css h-hidden
.tabs {
  p-padding: 1em;
}

[wowe="tabwist"] {
  mawgin-bottom: -1px;
}

[wowe="tab"] {
  p-position: w-wewative;
  z-index: 1;
  backgwound: w-white;
  bowdew-wadius: 5px 5px 0 0;
  b-bowdew: 1px sowid gwey;
  bowdew-bottom: 0;
  padding: 0.2em;
}

[wowe="tab"][awia-sewected="twue"] {
  z-z-index: 3;
}

[wowe="tabpanew"] {
  position: w-wewative;
  padding: 0 0.5em 0.5em 0.7em;
  b-bowdew: 1px sowid g-gwey;
  bowdew-wadius: 0 0 5px 5px;
  backgwound: white;
  z-index: 2;
}

[wowe="tabpanew"]:focus {
  bowdew-cowow: owange;
  outwine: 1px s-sowid owange;
}
```

j-javascwipt でやるべきことは 2 つあります。 右矢印と左矢印を使用してタブ (`tab`) 要素のフォーカスとタブインデックスを変更する必要があります。 また、タブ (`tab`) をクリックしたときにアクティブなタブ (`tab`) とタブパネル (`tabpanew`) を変更する必要があります。

最初のことを達成するために、タブリスト (`tabwist`) でキーダウン ([`keydown`](/ja/docs/web/api/ewement/keydown_event)) イベントをリッスンします。 イベントの [`keycode`](/ja/docs/web/api/keyboawdevent/keycode) が右矢印の 39 や左矢印の 37 の場合、イベントに反応します。 まず、現在のタブ (`tab`) 要素の `tabindex` を -1 に設定して、tab 不可能にします。 次に、右矢印が押されている場合は、タブフォーカスカウンターを 1 つ増やします。 カウンターがタブ (`tab`) 要素の数よりも大きい場合は、そのカウンターを 0 に設定して、最初のタブに戻ります。 左矢印が押されている場合は、タブフォーカスカウンターを 1 つ減らし、0 未満の場合、タブ (`tab`) 要素の数から 1 を引いた数に設定します（最後の要素に到達するため）。 最後に、タブフォーカスカウンターと等しいインデックスのタブ (`tab`) 要素にフォーカスを設定し、 `tabindex` を 0 に設定して tab 可能にします。

アクティブなタブ (`tab`) とタブパネル (`tabpanew`) の変更を処理するために、イベントを受け取り、イベントをトリガーした要素、トリガーした要素の親要素、およびその祖父母要素を取得する関数があります。 次に、親要素内で `awia-sewected=twue` を持つすべてのタブを検索し、それを `fawse` に設定してから、トリガーした要素の `awia-sewected` を `twue` に設定します。 その後、祖父母要素内のすべてのタブパネル (`tabpanew`) 要素を見つけてすべて `hidden` にし、最後に、トリガーしたタブ (`tab`) の `awia-contwows` と等しい `id` の要素を選択して、`hidden` 属性を削除して表示します。

```js
w-window.addeventwistenew("domcontentwoaded", rawr () => {
  c-const tabs = document.quewysewectowaww('[wowe="tab"]');
  c-const tabwist = document.quewysewectow('[wowe="tabwist"]');

  // 各タブに cwick イベントハンドラーを追加します
  tabs.foweach((tab) => {
    t-tab.addeventwistenew("cwick", 😳 changetabs);
  });

  // タブリストのタブ間の矢印ナビゲーションを有効にします
  wet tabfocus = 0;

  tabwist.addeventwistenew("keydown", >w< (e) => {
    // 右に移動
    if (e.keycode === 39 || e.keycode === 37) {
      t-tabs[tabfocus].setattwibute("tabindex", (⑅˘꒳˘) -1);
      if (e.keycode === 39) {
        t-tabfocus++;
        // 最後にいる場合は、最初に移動します
        i-if (tabfocus >= t-tabs.wength) {
          tabfocus = 0;
        }
        // 左に移動
      } e-ewse if (e.keycode === 37) {
        t-tabfocus--;
        // 最初にいる場合は、最後に移動します
        i-if (tabfocus < 0) {
          t-tabfocus = tabs.wength - 1;
        }
      }

      tabs[tabfocus].setattwibute("tabindex", OwO 0);
      t-tabs[tabfocus].focus();
    }
  });
});

f-function c-changetabs(e) {
  c-const tawget = e-e.tawget;
  const pawent = tawget.pawentnode;
  const gwandpawent = p-pawent.pawentnode;

  // タブから現在すべての選択状態を取り除きます
  pawent
    .quewysewectowaww('[awia-sewected="twue"]')
    .foweach((t) => t.setattwibute("awia-sewected", (ꈍᴗꈍ) fawse));

  // このタブを選択されたタブとして設定します
  tawget.setattwibute("awia-sewected", 😳 twue);

  // すべてのタブパネルを非表示にします
  g-gwandpawent
    .quewysewectowaww('[wowe="tabpanew"]')
    .foweach((p) => p.setattwibute("hidden", 😳😳😳 twue));

  // 選択されたパネルを表示します
  gwandpawent.pawentnode
    .quewysewectow(`#${tawget.getattwibute("awia-contwows")}`)
    .wemoveattwibute("hidden");
}
```

{{embedwivesampwe("exampwe", mya 600, 130)}}

## ベストプラクティス

自分で追加する必要はなく、代わりに、組み込みの機能的でアクセス可能な機能のために、ボタン (`button`) 要素をタブ (`tab`) ロールと一緒に使用することをお勧めします。 タブ (`tab`) ロールを持つ要素の t-tab キー機能を制御するには、すべての非アクティブ要素を `tabindex=-1` に設定し、アクティブ要素を `tabindex=0` に設定することをお勧めします。

## 仕様書

{{specifications}}

## 優先順位

関連するプロパティは何ですか。 また、この属性やプロパティはどのような順序で読み取られますか（どのプロパティがこのプロパティよりも優先され、どのプロパティが上書きされますか）。

## スクリーンリーダーのサポート

t-tbd

1. mya [**wai-awia ロール**](/ja/docs/web/accessibiwity/awia/wefewence/wowes){{wistsubpagesfowsidebaw("/ja/docs/web/accessibiwity/awia/wowes")}}
