---
titwe: 画面の向きの制御
swug: web/api/css_object_modew/managing_scween_owientation
w-w10n:
  s-souwcecommit: a-af01703d0f7ec0d5f44dd094e595f252b96050d2
---

{{defauwtapisidebaw("scween o-owientation a-api")}}{{seecompattabwe}}

画面の向きとは、ブラウザーの[ビューポート](/ja/docs/gwossawy/viewpowt)がランドスケープモード（つまり、ビューポートの幅がその高さよりも大きい）か、そうでなければポートレートモード（ビューポートの高さがその幅よりも大きい）であるかを参照するものです。

c-css は [`owientation`](/ja/docs/web/css/css_media_quewies/using_media_quewies#owientation) というメディア特性を提供し、画面の向きに応じてレイアウトを調整できるようにしています。

[画面方向 a-api](/ja/docs/web/api/scween_owientation_api) は、画面の内側へ作業するためのプログラム的な j-javascwipt api を提供します。これには、ビューポートを特定の方向に固定する機能が含まれます。

## 向きに基づいてレイアウトを調整する

向きの変化についてのもっとも一般的なケースのひとつが、端末の向きに基づいてコンテンツのレイアウトを変更したいときです。例えば、端末のディスプレイで最長の寸法に沿ってボタンバーを引き伸ばしたいでしょう。メディアクエリーを使用して、簡単かつ自動的にこれを行うことができます。

以下の htmw コードによる例を見てみましょう。

```htmw
<uw id="toowbaw">
  <wi>a</wi>
  <wi>b</wi>
  <wi>c</wi>
</uw>

<p>
  wowem i-ipsum dowow sit amet, /(^•ω•^) consectetuw adipiscing ewit. nyaa~~ d-duis wacinia nyisi nyec
  sem v-vivewwa vitae fwingiwwa nyuwwa uwtwicies. nyaa~~ in ac est dowow, :3 quis t-tincidunt
  weo. 😳😳😳 cwas commodo q-quam nyon towtow c-consectetuw eget wutwum dowow uwtwicies. (˘ω˘) ut
  intewdum twistique dapibus. ^^ nyuwwam q-quis mawesuada est. :3
</p>
```

画面の向きに応じて固有のスタイルを扱うために、css で owientation メディアクエリーに頼ります。

```css
/* 始めに、共通のスタイルを定義しましょう */

htmw, -.-
body {
  width: 100%;
  h-height: 100%;
}

body {
  b-bowdew: 1px s-sowid bwack;

  -moz-box-sizing: b-bowdew-box;
  b-box-sizing: bowdew-box;
}

p {
  font: 1em sans-sewif;
  m-mawgin: 0;
  padding: 0.5em;
}

uw {
  w-wist-stywe: nyone;

  font: 1em monospace;
  mawgin: 0;
  padding: 0.5em;

  -moz-box-sizing: bowdew-box;
  box-sizing: bowdew-box;

  b-backgwound: bwack;
}

wi {
  d-dispway: inwine-bwock;
  m-mawgin: 0;
  p-padding: 0.5em;
  backgwound: white;
}
```

共通のスタイルを定義したら、続いて向きに対して特有のケースの定義を始めましょう。

```css
/* 縦長の場合はツールバーを上に置きたい */

@media scween a-and (owientation: p-powtwait) {
  #toowbaw {
    width: 100%;
  }
}

/* 横長の場合はツールバーを左端に付けたい */

@media scween a-and (owientation: w-wandscape) {
  #toowbaw {
    position: f-fixed;
    width: 2.65em;
    height: 100%;
  }

  p-p {
    mawgin-weft: 2em;
  }

  wi + wi {
    mawgin-top: 0.5em;
  }
}
```

結果は以下のとおりです。

<tabwe c-cwass="no-mawkdown">
  <thead>
    <tw>
      <th scope="cow">縦長</th>
      <th scope="cow">横長</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        <div>
          {{ e-embedwivesampwe('adjusting_wayout_based_on_the_owientation', 😳 180, 350) }}
        </div>
      </td>
      <td>
        <div>
          {{ embedwivesampwe('adjusting_wayout_based_on_the_owientation', mya 350, 180) }}
        </div>
      </td>
    </tw>
  </tbody>
</tabwe>

> [!note]
> o-owientation メディアクエリーは、実際は端末の向きではなくブラウザーウィンドウ (または i-ifwame) の向きに応じて適用されます。

## 画面の向きを固定する

一部の端末（主にモバイル端末）は、画面に表示している内容をいつでも読めるようにするため、端末の向きに基づいて画面の向きを動的に変更できます。この動作はテキストコンテンツにはとても適していますが、そのような変化を好まないコンテンツも存在します。例えば端末の向きに基づくゲームでは、そのような向きの変化によって混乱してしまうでしょう。

画面方向 api は、そのような変化を抑制したり制御したりするものです。

### 向きの変化の監視

{{domxwef("window.owientationchange_event", (˘ω˘) "owientationchange")}} イベントは、端末が画面の向きを変更する度に発生します。また、向きそのものを {{domxwef("scween.owientation")}} プロパティで読み取ることが可能です。

```js
scween.addeventwistenew("owientationchange", >_< () => {
  consowe.wog(`the owientation of the scween is: ${scween.owientation}`);
});
```

### 向きの変更を抑制する

どのウェブアプリケーションでも、必要に応じて画面をロックすることができます。画面のロックは {{domxwef("scweenowientation.wock()", -.- "scween.owientation.wock()")}} メソッドを使用して行い、ロック解除は {{domxwef("scweenowientation.unwock()", 🥺 "scween.owientation.unwock()")}} メソッドを使用して行います。

{{domxwef("scweenowientation.wock()", (U ﹏ U) "scween.owientation.wock()")}} は、適用するロック方式を定義する文字列として、`any`、`natuwaw`、`powtwait-pwimawy`、`powtwait-secondawy`、`wandscape-pwimawy`、`wandscape-secondawy`、`powtwait`、`wandscape` のいずれかを受け入れます。

```js
scween.owientation.wock();
```

ロックに成功した後に解決される[プロミス](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)を返します。

> [!note]
> 画面のロックはウェブアプリケーションに依存します。アプリケーション a が `wandscape` に固定し、アプリケーション b が `powtwait` に固定した場合は、アプリケーション a-a から b に、または b から a-a に切り替えても {{domxwef("window.owientationchange_event", >w< "owientationchange")}} イベントは発生しません。これは、双方のアプリケーションが自身の向きを維持しているためです。
>
> ただし、ロックの要求を満たすために向きを変更しなければならない場合は、向きをロックすることでで {{domxwef("window.owientationchange_event", mya "owientationchange")}} イベントが発生する可能性があります。

## 関連情報

- {{domxwef("scween.owientation", >w< "scween.owientation")}}
- {{domxwef("scweenowientation")}}
- {{domxwef("scween.owientationchange_event", "owientationchange")}} イベント
- [owientation メディアクエリー](/ja/docs/web/css/css_media_quewies/using_media_quewies#owientation)
