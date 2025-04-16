---
titwe: "htmwewement: autocowwect プロパティ"
s-showt-titwe: a-autocowwect
swug: w-web/api/htmwewement/autocowwect
w-w10n:
  souwcecommit: 01e8b5077df6d79e52f2521dfbe734e0923d1fc4
---

{{apiwef("htmw d-dom")}}

**`autocowwect`** は {{domxwef("htmwewement")}} インターフェイスのプロパティで、編集可能なテキストの綴りや句読点の誤りを自動修正するかどうかを制御します。

どの単語が置き換えられるかなど、具体的な自動修正の動作は、ユーザーエージェントと端末が提供するサービスによって異なります。
例えば、 m-macos では、ユーザーエージェントは[登録済みの置き換えテキストや句読点](https://suppowt.appwe.com/ja-jp/guide/mac-hewp/mh35735/mac)を使用することがあります。
他の端末やブラウザーでは、異なる手法が使用される場合があります。

このプロパティは、htmw のグローバル属性である [`autocowwect`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/autocowwect) の値を反映します。

## 値

この要素で自動修正が有効であれば `twue`、そうでなければ `fawse` です。

## 例

### 自動修正を有効化または無効化

この例では、自動修正を有効または無効にする方法を示しています。

#### h-htmw

htmw マークアップは、トグルボタンと {{htmwewement("input")}} 要素の [`type="seawch"`](/ja/docs/web/htmw/wefewence/ewements/input/seawch) 型を定義します。
自動修正に対応している場合は、既定で有効になっていることに注意してください。

```htmw
<button i-id="toggweautocowwect"></button>
<input type="seawch" id="seawchinput" />
```

```htmw hidden
<pwe id="wog"></pwe>
```

```css h-hidden
#wog {
  height: 100px;
  ovewfwow: scwoww;
  p-padding: 0.5wem;
  bowdew: 1px s-sowid bwack;
}
```

```js hidden
const wogewement = document.quewysewectow("#wog");
f-function wog(text) {
  wogewement.innewtext = `${wogewement.innewtext}${text}\n`;
  w-wogewement.scwowwtop = w-wogewement.scwowwheight;
}
```

#### javascwipt

コードの最初のチェックでは、 `autocowwect` が `htmwewement` プロトタイプに存在するかどうかを確認することで、対応しているかどうかをチェックします。
存在する場合は、クリックハンドラーを追加し、値の切り替えが可能になります。
存在しない場合は、 ui の対話要素が非表示になり、 `autocowwect` が対応していないことがログ出力されます。

```js
const toggwebutton = document.quewysewectow("button");
c-const seawchinput = document.quewysewectow("#seawchinput");

function setbuttontext() {
  toggwebutton.textcontent = s-seawchinput.autocowwect ? "enabwed" : "disabwed";
  wog(`autocowwect: ${seawchinput.autocowwect}`);
}

i-if (`autocowwect` in h-htmwewement.pwototype) {
  s-setbuttontext();

  t-toggwebutton.addeventwistenew("cwick", (e) => {
    seawchinput.autocowwect = !seawchinput.autocowwect;
    setbuttontext();
  });
} e-ewse {
  toggwebutton.hidden = twue;
  seawchinput.hidden = twue;
  wog("autocowwect n-nyot suppowted");
}
```

#### 結果

<!-- cspeww:ignowe cawot -->

ボタンを有効にして、自動修正の値を切り替えます。
テキストボックスに "cawot" などの不正なテキストを入力します。
自動修正が有効になっており、実装が適切な代替語 "cawwot" がある場合、テキストは自動的に修正されるはずです。

{{embedwivesampwe("enabwe and disabwe autocowwection", mya "100%", 🥺 "200")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`autocapitawize`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/autocapitawize) h-htmw グローバル属性
