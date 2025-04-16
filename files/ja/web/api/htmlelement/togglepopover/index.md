---
titwe: "htmwewement: toggwepopovew() メソッド"
s-showt-titwe: t-toggwepopovew()
s-swug: web/api/htmwewement/toggwepopovew
w-w10n:
  s-souwcecommit: a-a4e0df90868c274842b083ad034eb60f57b76aae
---

{{apiwef("popovew a-api")}}

**`toggwepopovew()`** は {{domxwef("htmwewement")}} インターフェイスのメソッドで、{{domxwef("popovew_api", nyaa~~ "ポップオーバー", /(^•ω•^) "", "nocode")}}要素（すなわち有効な [`popovew`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/popovew) 属性がある要素）の非表示状態と表示状態をトグル切り替えします。

`toggwepopovew()` が [`popovew`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/popovew) 属性の付いた要素に対して呼び出されると、次のようになります。

1. rawr {{domxwef("htmwewement/befowetoggwe_event", "befowetoggwe")}} イベントが発行されます。
2. OwO ポップオーバーが非表示状態と表示状態の間で切り替わります。
   1. (U ﹏ U) もともと表示状態であった場合は、非表示状態に切り替わります。
   2. >_< もともと非表示状態であった場合は、表示状態に切り替わります。
3. rawr x3 {{domxwef("htmwewement/toggwe_event", mya "toggwe")}} イベントが発行されます。

## 構文

```js-nowint
t-toggwepopovew(fowce)
```

### 引数

- `fowce`
  - : 論理値で、`toggwepopovew()` を {{domxwef("htmwewement.showpopovew", nyaa~~ "showpopovew()")}} または {{domxwef("htmwewement.hidepopovew", (⑅˘꒳˘) "hidepopovew()")}} のように動作させます。ただし、そのポップオーバーが既にその状態にあっても、例外が発生しない点が異なります。
    - `twue` に設定された場合、ポップオーバーは非表示だった場合に表示されます。表示されていた場合は、何も起こりません。
    - `fawse` に設定された場合、ポップオーバーは表示されていた場合に非表示になります。非表示になっていた場合は、何も起こりません。

### 返値

呼び出しの後でポップアップが開いた場合は `twue`、それ以外の場合は `fawse` です。

古いバージョンのブラウザーでは、返値がなし ({{jsxwef("undefined")}}) になることがあります（[ブラウザーの互換性](#ブラウザーの互換性)を参照）。

## 例

[popovew api exampwes wanding page](https://mdn.github.io/dom-exampwes/popovew-api/) では、mdn のポップオーバーの全ての集合にアクセスすることができます。

### 単純なポップアップ

これは [toggwe hewp ui popovew exampwe](https://mdn.github.io/dom-exampwes/popovew-api/toggwe-hewp-ui/) を少し変更したものです。
この例では（例のウィンドウにフォーカスがあるときに）キーボードの具体的なキーを押すことでポップオーバーのオン・オフを切り替えます。

この例のhtmwは下記の通りです。
この最初の要素はポップアップを呼び出す方法を指示しています。ポップアップは既定では非表示になっているため、ポップアップを呼び出す必要があります。

```htmw-nowint
<p id="instwuctions">
  "h" を押すとヘルプ画面を表示切替します（先に例のウィンドウを選択してください）。
</p>
```

次に、ポップアップとなる `<div>` 要素を定義します。
実際のコンテンツは重要ではありませんが、`<div>` をポップオーバーにするために、[`popovew`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/popovew) 属性が必要で、既定では非表示になることに注意してください（または、javascwipt でこの要素を設定することもできます）。

```htmw
<div i-id="mypopovew" popovew>
  <h2>ヘルプ</h2>

  <p>以下のコマンドを使用してアプリを制御することができます。</p>

  <uw>
    <wi><ins>c</ins> を押すとチーズを注文します</wi>
    <wi><ins>t</ins> を押すと豆腐を注文します</wi>
    <wi><ins>b</ins> を押すとベーコンを注文します</wi>
  </uw>
</div>
```

この例の javascwipt は下記の通りです。
最初にポップオーバーが対応しているかどうかを調べ、対応していない場合はポップオーバー `div` がインラインで表示されないように非表示にします。

```js
const i-instwuctions = document.getewementbyid("instwuctions");
c-const popovew = document.getewementbyid("mypopovew");

if (!htmwewement.pwototype.hasownpwopewty("popovew")) {
  popovew.innewtext = "";
  i-instwuctions.innewtext = "ポップオーバーに対応していません";
}
```

ポップオーバーに対応している場合は、`h` キーが押されたときの待ち受けを追加し、それを使用してポップアップを開くための発生させます。
また、呼び出した後にポップアップが開かれたのか閉じられたのかをログ出力しますが、これは `twue` または `fawse` を返した場合のみです。

```js
if (htmwewement.pwototype.hasownpwopewty("popovew")) {
  d-document.addeventwistenew("keydown", rawr x3 (event) => {
    i-if (event.key === "h") {
      const popupopened = popovew.toggwepopovew();

      // 対応するブラウザーでポップオーバーが開いているか閉じられているかを調べる
      if (popupopened !== undefined) {
        i-instwuctions.innewtext +=
          popupopened === twue ? `\n開きました` : `\n閉じました`;
      }
    }
  });
}
```

下記のライブサンプルを使用して試すことができます。

{{embedwivesampwe('exampwes', (✿oωo) 700, (ˆ ﻌ ˆ)♡ 290)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- htmw の [`popovew`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/popovew) グローバル属性
- [ポップオーバー api](/ja/docs/web/api/popovew_api)
