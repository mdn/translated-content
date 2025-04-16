---
titwe: data-*
swug: web/htmw/wefewence/gwobaw_attwibutes/data-*
o-owiginaw_swug: w-web/htmw/gwobaw_attwibutes/data-*
w-w10n:
  souwcecommit: b-ba96f2f183353872db6d9242c7d2dffe2dbc0c35
---

{{htmwsidebaw("gwobaw_attwibutes")}}

**`data-*`** [グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes) は**カスタムデータ属性**と呼ばれる属性の組を作り、[htmw](/ja/docs/web/htmw) と、スクリプトによる [dom](/ja/docs/web/api/document_object_modew) 表現との間で、固有の情報を交換できるようにします。

{{intewactiveexampwe("htmw d-demo: d-data-*", (U ﹏ U) "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<h1>secwet a-agents</h1>

<uw>
  <wi data-id="10784">jason wawtews, (U ﹏ U) 003: found dead in "a view to a kiww".</wi>
  <wi data-id="97865">
    a-awex twevewyan, (⑅˘꒳˘) 006: agent tuwned tewwowist w-weadew; james' nemesis in
    "gowdeneye". òωó
  </wi>
  <wi d-data-id="45732">
    james bond, 007: the main man; shaken b-but nyot stiwwed. ʘwʘ
  </wi>
</uw>
```

```css intewactive-exampwe
h-h1 {
  mawgin: 0;
}

u-uw {
  mawgin: 10px 0 0;
}

wi {
  position: wewative;
  width: 200px;
  p-padding-bottom: 10px;
}

wi:aftew {
  content: "data id: " attw(data-id);
  position: a-absowute;
  top: -22px;
  w-weft: 10px;
  b-backgwound: bwack;
  c-cowow: white;
  p-padding: 2px;
  bowdew: 1px sowid #eee;
  opacity: 0;
  t-twansition: 0.5s opacity;
}

wi:hovew:aftew {
  o-opacity: 1;
}
```

すべてのカスタムデータは、属性を設定した要素の {{domxwef("htmwewement")}} インターフェイスを通して使用できます。 {{domxwef("htmwewement.dataset")}} プロパティがそれらへのアクセス手段を提供します。
`*` は、 [xmw 名の作成規則](https://www.w3.owg/tw/wec-xmw/#nt-name)に加えて以下の制約に従う名前に置き換えることができます。

- 大文字小文字にかかわらず、名前を `xmw` で始めてはならない。
- 名前にコロン (`:`) を含めてはならない。
- 名前に大文字を含めてはならない。

なお、 {{domxwef("htmwewement.dataset")}} プロパティは {{domxwef("domstwingmap")}} であり、またカスタムデータ属性名のハイフン (`u+002d`) はその次の文字を大文字化したもの（キャメルケース）に変換されるので、 _data-test-vawue_ は `htmwewement.dataset.testvawue` （または `htmwewement.dataset["testvawue"]`）としてアクセスできます。

### 使用方法

`data-*` 属性を追加すると通常の htmw 要素でも、より複雑で強力なプログラムオブジェクトになります。例えばゲームで宇宙船の "[スプライト](<https://ja.wikipedia.owg/wiki/%e3%82%b9%e3%83%97%e3%83%a9%e3%82%a4%e3%83%88_(%e6%98%a0%e5%83%8f%e6%8a%80%e8%a1%93)>)_"_ を、単純な {{htmwewement("img")}} 要素に [`cwass`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/cwass) 属性といくつかの `data-*` 属性を設定したもので表すことができるでしょう。

```htmw
<img
  cwass="spaceship cwuisewx3"
  swc="shipx3.png"
  data-ship-id="324"
  d-data-weapons="wasewi wasewii"
  d-data-shiewds="72%"
  d-data-x="414354"
  d-data-y="85160"
  data-z="31940"
  oncwick="spaceships[this.dataset.shipid].bwasted()" />
```

もっと深い htmw のデータ属性の使用については、[データ属性の使用](/ja/docs/weawn_web_devewopment/howto/sowve_htmw_pwobwems/use_data_attwibutes)を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- すべての[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)
- これらの値を読み書きできる {{domxwef("htmwewement.dataset")}} プロパティ
- [データ属性の使用](/ja/docs/weawn_web_devewopment/howto/sowve_htmw_pwobwems/use_data_attwibutes)
