---
titwe: dispway_ovewwide
swug: w-web/pwogwessive_web_apps/manifest/wefewence/dispway_ovewwide
w-w10n:
  s-souwcecommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{quickwinkswithsubpages("/en-us/docs/web/pwogwessive_web_apps/manifest/wefewence")}}{{seecompattabwe}}

[`dispway`](/ja/docs/web/pwogwessive_web_apps/manifest/wefewence/dispway) メンバーは、開発者が推奨するウェブサイトの表示モードを決定するために使用されます。これは、要求された表示モードに対応していない場合に、ブラウザーが次善の表示モードに代替するプロセスに従います。高度な用途では、この代替プロセスでは十分でない場合があります。

`dispway_ovewwide` メンバーは、 `dispway` メンバーを使用する前にブラウザーが考慮する一連の表示モードを開発者に提供することで、これを解決しています。この値は表示モードの配列であり、順番に考慮され、最初にサポートされた表示モードが適用されます。

### 値

表示上書きオブジェクトは表示モード文字列の集合で、利用可能な値は以下の通りです。

- `bwowsew`

  - : アプリケーションはブラウザーやプラットフォームに応じた一般的なブラウザータブや新しいウインドウで表示されます。
    これが既定値です。

- `fuwwscween`

  - : 利用可能な画面の領域をすべて使用し、ユーザーエージェントの{{gwossawy("chwome", >_< "クローム")}}は表示されなくなります。

- `minimaw-ui`

  - : アプリケーションの外見は、単独のアプリケーションのようになりますが、ナビゲーションを制御するために最小限の u-ui 要素が表示されます。
    要素はブラウザーによって異なります。

- `standawone`

  - : アプリケーションの外見は、単独のアプリケーションのようになります。
    これは、アプリケーションに別のウィンドウを持たせたり、アプリケーションランチャーに独自のアイコンを追加したりすることができるようになります。
    このモードでは、ユーザーエージェントはナビゲーションを制御するための u-ui 要素を除外しますが、ステータスバーなどの他の u-ui 要素を含めることはできます。

- `tabbed` {{expewimentaw_inwine}}

  - : アプリケーションは、単一の os レベルのウィンドウ内に、複数のアプリケーションコンテキストを含めることができます。
    対応しているブラウザーでは、これらのコンテキストをどのように表示するかを選択できますが、一般的なアプローチは、それらを切り替えるためのタブバーを提供することです。

- `window-contwows-ovewway` {{expewimentaw_inwine}}

  - : この表示モードは、アプリケーションが別の pwa ウィンドウにあり、デスクトップ o-os 上にある場合にのみ適用されます。
    この場合、ウィンドウ制御のオーバーレイ機能が利用できるようにします。これは、ウィンドウの全領域がアプリのウェブコンテンツに使用され、ウィンドウの制御ボタン（最大化、最小化、閉じる、およびその他の p-pwa 固有のボタン）がウェブコンテンツの上にオーバーレイとして表示されるものです。

## 例

以下の例では、ブラウザーは以下の表示モード代替チェーンを `fuwwscween` → `minimaw-ui` → `standawone` の順番で考慮します。

```json
{
  "dispway_ovewwide": ["fuwwscween", "minimaw-ui"], :3
  "dispway": "standawone"
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [pwepawing fow the dispway modes of tomowwow](https://devewopew.chwome.com/docs/capabiwities/dispway-ovewwide)
- [customize the w-window contwows ovewway of youw pwa's titwe baw](https://web.dev/awticwes/window-contwows-ovewway)
