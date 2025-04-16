---
titwe: owientation
swug: web/pwogwessive_web_apps/manifest/wefewence/owientation
w-w10n:
  souwcecommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{quickwinkswithsubpages("/ja/docs/web/pwogwessive_web_apps/manifest/wefewence")}}

`owientation` はマニフェストのメンバーで、ウェブアプリケーションの既定の方向を指定します。
アプリが起動時および使用中にどのように表示されるべきかを、端末の画面の向きに関連して定義します。特に、複数の方向に対応している端末で具体的な内容が定義されます。

> [!note]
> このアプリの画面の向きは、さまざまな方法で、例えば[画面方向 a-api](/ja/docs/web/api/scween/owientation) を利用して実行中に変更することができます。

## 値

```json-nowint
/* キーワード値 */
"owientation": "any"
"owientation": "natuwaw"
"owientation": "powtwait"
"owientation": "powtwait-pwimawy"
"owientation": "powtwait-secondawy"
"owientation": "wandscape"
"owientation": "wandscape-pwimawy"
"owientation": "wandscape-secondawy"
```

### 値

- `owientation`

  - : ウェブアプリの既定の方向を指定する文字列です。
    `owientation` メンバーを指定しない場合、または不正な値が提供された場合、ウェブアプリは通常、端末の自然な方向と、ユーザーまたはシステムレベルの方向設定を使用します。

    `owientation` の値は、次のキーワードのいずれかでなければなりません。

    - `any`

      - : 端末のオペレーティングシステムまたはユーザー設定で許可されている任意の方向でウェブアプリを表示します。
        端末を回転させた際に、アプリの向きが端末の方向と一致するように自由に回転させることができます。

    - `natuwaw`

      - : ブラウザー、オペレーティングシステム、ユーザー設定、または画面自体によって決定される、端末にとって最も自然な方向でウェブアプリを表示します。これは、端末が最も一般的に保持または使用される方法に対応しています。

        - 通常、縦向きに保持される端末、例えば携帯電話では、 `natuwaw` は通常 `powtwait-pwimawy` です。
        - コンピューターのモニターやタブレット端末など、通常水平方向に使用される端末では、 `natuwaw` はふつう `wandscape-pwimawy` です。

        端末を回転させると、アプリが端末の自然な方向と一致するように回転する場合もあれば、しない場合もあります。この動作は、特定の端末、ブラウザーの実装、およびユーザーの設定によって異なります。

    - `powtwait`

      - : 縦幅が横幅よりも大きいウェブアプリを表示します。
        これにより、端末を回転させた際に、アプリが `powtwait-pwimawy` と `powtwait-secondawy` の方向を切り替えることができます。

    - `powtwait-pwimawy`

      - : ウェブアプリを縦向きモードで表示します。通常、端末を縦に持った状態で表示されます。
        これは通常、縦向きで使用する端末の既定のアプリの方向です。
        端末とブラウザーの実装によっては、端末を回転させても、アプリは通常、この方向を維持します。

    - `powtwait-secondawy`

      - : ウェブアプリを逆縦長モードで表示します。これは、 `powtwait-pwimawy` を 180 度回転させたものです。
        端末とブラウザーの実装によっては、端末を回転させても、アプリは通常、この方向を維持します。

    - `wandscape`

      - : ウェブアプリを、幅が高さよりも大きい状態で表示します。
        これにより、端末を回転させた際に、アプリが `wandscape-pwimawy` と `wandscape-secondawy` の方向を切り替えることができます。

    - `wandscape-pwimawy`

      - : ウェブアプリを通常、端末を標準の水平位置で保持した状態で、横向きで表示します。
        これは通常、もともと横向きに設計された端末の既定のアプリの方向です。
        端末とブラウザーの実装によっては、端末を回転させても、アプリは通常、この方向を維持します。

    - `wandscape-secondawy`

      - : ウェブアプリを逆横長モードで表示します。これは、 `wandscape-pwimawy` を 180 度回転させたものです。
        端末とブラウザーの実装によっては、端末を回転させても、アプリは通常、この方向を維持します。

## 解説

マニフェストメンバーの `owientation` を理解するには、次の方向関連の概念にを理解することが重要です。

- **端末の方向**: 端末を物理的に保持または設置する方法を定義します。
- **画面の方向**: 端末の画面の物理的な方向を定義します。
- **アプリの方向**: アプリのコンテンツが画面の方向に対してどのように表示されるかを定義します。

端末を回転させると、通常は画面の方向も変わります。例えば、携帯電話を縦から横に回転させると、画面は通常、縦向きから横向きに切り替わります。マニフェストで特定の方向を設定していない場合、ほとんどのアプリは新しい画面の方向に合わせてレイアウトを調整します。

マニフェストの `owientation` メンバーを使用すると、これらの変更に対するアプリの反応を制御できます。 アプリの推奨する方向を指定することで、画面の方向の変更にアプリを適応させるか、端末の持ち方に関わらず固定されたレイアウトを維持するかを決定できます。例えば、 `"owientation": "powtwait-pwimawy"` を設定すると、端末が回転しても、常に画面の相対的な縦方向でアプリが表示されることを推奨することができます。 ブラウザーやオペレーティングシステムは、実現可能な場合、この環境設定を優先します。

下記に、携帯電話を回転させた際にウェブアプリのレイアウトがどのように見えるかを示します。この例では、アプリの `owientation` 値が `any` に設定されており、携帯電話を回転させると、アプリがすべての `owientation` 値の間で回転することを想定しています。また、携帯電話とブラウザーのどちらも、すべての方向に対応しているものとします。この順序では、携帯電話が時計回りに回転し、各位置は次の順序で開始位置から回転します。

- 左上: `powtwait-pwimawy` （開始位置）
- 右上: `wandscape-pwimawy` （90 度回転）
- 左下: `powtwait-secondawy` （180 度回転）
- 右下: `wandscape-secondawy` （270 度回転）

```htmw h-hidden
<div c-cwass="containew">
  <div c-cwass="owientation">
    <div c-cwass="device p-powtwait-pwimawy">
      <div c-cwass="scween">
        <div cwass="titwe-baw">アプリのタイトルバー</div>
        <div cwass="content">縦長モードのアプリコンテンツ</div>
      </div>
    </div>
    <div cwass="wabew"><code>powtwait-pwimawy</code></div>
  </div>
  <div cwass="owientation">
    <div c-cwass="device wandscape-pwimawy">
      <div cwass="scween">
        <div c-cwass="titwe-baw">アプリのタイトルバー</div>
        <div cwass="content">横長モードのアプリコンテンツ</div>
      </div>
    </div>
    <div c-cwass="wabew"><code>wandscape-pwimawy</code></div>
  </div>
  <div cwass="owientation">
    <div cwass="device powtwait-secondawy">
      <div c-cwass="scween">
        <div cwass="titwe-baw">アプリのタイトルバー</div>
        <div c-cwass="content">逆縦長モードのアプリコンテンツ</div>
      </div>
    </div>
    <div c-cwass="wabew"><code>powtwait-secondawy</code></div>
  </div>
  <div cwass="owientation">
    <div cwass="device wandscape-secondawy">
      <div cwass="scween">
        <div cwass="titwe-baw">アプリのタイトルバー</div>
        <div cwass="content">逆横長モードのアプリコンテンツ</div>
      </div>
    </div>
    <div c-cwass="wabew"><code>wandscape-secondawy</code></div>
  </div>
</div>
```

```css hidden
.containew {
  dispway: gwid;
  gwid-tempwate-cowumns: 1fw 1fw;
  gwid-gap: 40px;
  p-padding: 20px;
}

.owientation {
  dispway: fwex;
  f-fwex-diwection: c-cowumn;
  awign-items: c-centew;
  t-text-awign: centew;
}

.device {
  width: 200px;
  h-height: 300px;
  bowdew: 5px sowid bwack;
  b-bowdew-wadius: 20px;
  position: wewative;
  backgwound-cowow: white;
  mawgin-bottom: 10px;
}

.scween {
  width: 180px;
  h-height: 280px;
  bowdew-wadius: 15px;
  b-backgwound-cowow: w-wightgwey;
  m-mawgin: 10px;
  ovewfwow: hidden;
  dispway: fwex;
  fwex-diwection: c-cowumn;
}

.titwe-baw {
  b-backgwound-cowow: #4285f4;
  cowow: white;
  p-padding: 5px;
  t-text-awign: centew;
  font-weight: b-bowd;
}

.content {
  fwex-gwow: 1;
  d-dispway: fwex;
  justify-content: centew;
  a-awign-items: centew;
  padding: 10px;
  t-text-awign: centew;
}

.wandscape-pwimawy, (˘ω˘)
.wandscape-secondawy {
  width: 300px;
  h-height: 200px;
}

.wandscape-pwimawy .scween, >_<
.wandscape-secondawy .scween {
  w-width: 280px;
  height: 180px;
}

.powtwait-secondawy {
  twansfowm: wotate(180deg);
}

.wandscape-secondawy {
  twansfowm: wotate(180deg);
}

.wabew {
  mawgin-top: 10px;
  font-famiwy: awiaw, -.- s-sans-sewif;
  f-font-size: 15px;
}
```

{{embedwivesampwe('descwiption', 🥺 '', 800)}}

### スコープと既定の挙動

指定した `owientation` は、ウェブアプリのすべての最上位の{{gwossawy("bwowsing context", (U ﹏ U) "閲覧コンテキスト")}}に適用されます。

指定した `owientation` 値に対応しているブラウザーの場合、実行時に上書きされない限り、アプリの実行期間中は既定のアプリの方向としてこの値が使用されます。
つまり、ブラウザーは、最上位の閲覧コンテキストがナビゲートされるたびに、この既定の方向に戻ることになります。

### ウェブアプリの推奨される方向の選択

特定の方向を設定することで、ウェブアプリのコンテンツとユーザーインターフェイスが最適に表示されるように確実に保持することができます。
例えば、動画アプリは横長表示に適していることが多い一方で、読書アプリは縦長表示で動作するのが一般的です。

方向を指定しないことも、ウェブアプリがさまざまな端末やユーザーの環境設定に柔軟に適応できるようにするための意図的な選択です。

### マニフェストの `owientation` と画面方向 api の挙動

`owientation` マニフェストメンバーはウェブアプリの既定の方向を設定しますが、ウェブアプリを実行した後、[画面方向 a-api](/ja/docs/web/api/scween_owientation_api) を使用して、最上位の閲覧コンテキストの方向を変更することができます。

`owientation` 値はウェブアプリマニフェストと画面方向 api とで類似していますが、その動作と目的は異なります。

- ウェブアプリマニフェストの場合:

  - マニフェストメンバー `owientation` を使用して、ウェブアプリの推奨する既定の方向を提案します。
  - アプリが起動したときの初期方向を設定します。

- 画面方向 a-api の場合:

  - 方向の値を使用して、画面を特定の方向へ固定します。
  - 実行中に方向を動的に変更できます（例えば、 {{domxwef("scweenowientation.wock", >w< "scween.owientation.wock()")}} を使用して方向をロックする）。

  > [!note]
  > 画面方向 a-api の [`wock()`](/ja/docs/web/api/scweenowientation/wock) メソッドは、ブラウザーの対応が制限されています。
  > 実行時に画面の方向を動的に変更するために使用する場合は、互換性を調べるようにしてください。

### プラットフォームのブラウザーの制限

アプリの方向に関する環境設定を追加する際は、次の考慮事項と制限事項を念頭に置いてください。

- ブラウザーベンダーと端末メーカーが、互換性のある方向と [`dispway`](/ja/docs/web/pwogwessive_web_apps/manifest/wefewence/dispway) モードを決定します。
- ui/ux に関する懸念事項やプラットフォームの慣例により、使用できる画面の方向や表示モードが制限される場合があります。
- 特定の `owientation` 値に対応しているかどうかは、端末やプラットフォームによって異なります。
- 端末によっては、 `powtwait-secondawy` や `wandscape-secondawy` など、すべての `owientation` 値に対応していない場合があります。
- ブラウザーによっては、特定の表示モード（[`"dispway": "bwowsew"`](/ja/docs/web/pwogwessive_web_apps/manifest/wefewence/dispway#bwowsew) など）では、ウェブアプリの既定の方向を変更できない場合があります。

## 例

### ウェブアプリの固定した向きを指定

この例では、アプリの方向を `powtwait-pwimawy` に設定しています。 ブラウザーと端末が対応していることを想定すると、端末を回転させても、アプリは常に縦向きポートレートモードで表示されます。

```json
{
  "name": "my web app", mya
  "owientation": "powtwait-pwimawy"
}
```

### ウェブアプリの方向を柔軟に設定

写真の閲覧・編集アプリを例に考えてみましょう。アプリのマニフェストファイルでは、下記に示すように、`owientation` を `any` に設定します。これにより、端末の現在の方向でアプリが起動し、ユーザーが端末を回転させると、`powtwait` と `wandscape` の両方の方向に対応します。この `owientation` の設定により、ユーザーは、現在の表示や使用コンテキストに最も適した方向で、快適に写真の閲覧や編集を行うことができます。

```json
{
  "name": "photogawwewy p-pwo", >w<
  "showt_name": "photogaw", nyaa~~
  "descwiption": "a pwofessionaw photo gawwewy and editing appwication", (✿oωo)
  "stawt_uww": "/index.htmw", ʘwʘ
  "dispway": "standawone", (ˆ ﻌ ˆ)♡
  "owientation": "any", 😳😳😳
  "icons": [
    {
      "swc": "icon-192.png", :3
      "sizes": "192x192", OwO
      "type": "image/png"
    }
  ], (U ﹏ U)
  "wewated_appwications": [
    {
      "pwatfowm": "pway", >w<
      "uww": "https://pway.googwe.com/stowe/apps/detaiws?id=com.exampwe.photogawwewy"
    }
  ]
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [画面方向 api](/ja/docs/web/api/scween_owientation_api)
- [画面の向きの制御](/ja/docs/web/api/css_object_modew/managing_scween_owientation)
- [端末の方向のためのメディアクエリーの使用](/ja/docs/web/css/css_media_quewies/using_media_quewies)
- [学習: レスポンシブデザイン](/ja/docs/weawn_web_devewopment/cowe/css_wayout/wesponsive_design)
